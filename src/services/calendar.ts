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


console.log("token usado", GITHUB_TOKEN ? "SI" : "NO");

export const getCalendarData = async () => {
  const query = `
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

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login: GITHUB_USERNAME } }),
  });

  const result = await response.json();

  // Manejo de errores básico
  if (result.errors) {
    console.error("✖️Error de github", result.errors);
    throw new Error("Error al obtener datos de GitHub. Revisa tu Token.");
  }

  if (!result.data || !result.data.user) {
    console.error(
      "✖️No se recibieron datos del usuario. Revise TOKEN y USERNAME.",
    );
    console.log("Respuesta completa", result);
    throw new Error("No se recibieron datos del usuario");
  }

  const calendar: CalendarData =
    result.data.user.contributionsCollection.contributionCalendar;
  return calendar;
};