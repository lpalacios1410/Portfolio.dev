const GITHUB_USERNAME = "lpalacios1410";
const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;

export interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface CalendarData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export type CalendarResult = CalendarData | null;

export type FetchStatus = "idle" | "loading" | "success" | "error";

export interface CalendarError {
  message: string;
  code?: string;
}

interface GraphQLResponse {
  data?: {
    user?: {
      contributionsCollection: {
        contributionCalendar: CalendarData;
      };
    };
  };
  errors?: ReadonlyArray<{ message: string }>;
}

const GRAPHQL_QUERY = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color
            }
          }
        }
      }
    }
  }
`;

export const getCalendarData = async (): Promise<CalendarResult> => {
  if (!GITHUB_TOKEN) {
    console.warn("[calendar] GITHUB_TOKEN ausente: no se puede consultar la API.");
    return null;
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GRAPHQL_QUERY,
        variables: { login: GITHUB_USERNAME },
      }),
    });

    if (!response.ok) {
      console.error(
        `[calendar] HTTP ${response.status} ${response.statusText} al consultar GitHub.`
      );
      return null;
    }

    const result = (await response.json()) as GraphQLResponse;

    if (result.errors) {
      console.error("[calendar] Errores de GraphQL:", result.errors);
      return null;
    }

    if (!result.data || !result.data.user) {
      console.error(
        "[calendar] No se recibieron datos del usuario. Revise TOKEN y USERNAME."
      );
      return null;
    }

    return result.data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("[calendar] Error fetching calendar data:", error);
    return null;
  }
};