import { Highscore } from "../models/Highscore";
import { highscores } from "../models/highscores";

export function createHighscore() {
  const highscoreContainer: HTMLDivElement = document.createElement("div");
  const highscoreTitle: HTMLHeadElement = document.createElement("h2");
  const highscoreTable: HTMLTableElement = document.createElement("table");
  const highscoreTopRow: HTMLTableRowElement = document.createElement("tr");
  const highscoreName: HTMLTableCellElement = document.createElement("td");
  const highscorePoints: HTMLTableCellElement = document.createElement("td");

  highscoreContainer.classList.add("highscore");
  highscoreTitle.classList.add("highscore__title");
  highscoreTable.classList.add("highscore__table");
  highscoreTopRow.classList.add("highscore__toprow");
  highscoreName.classList.add("highscore__name");
  highscorePoints.classList.add("highscore__points");

  highscoreTitle.innerHTML = "🏆 HIGHSCORE 🏆";
  highscoreName.innerHTML = "Namn";
  highscorePoints.innerHTML = "Poäng";

  highscoreTable.appendChild(highscoreTopRow);
  highscoreTopRow.appendChild(highscoreName);
  highscoreTopRow.appendChild(highscorePoints);
  document.body.appendChild(highscoreTitle);
  document.body.appendChild(highscoreTable);

  const results: Highscore[] = highscores;

  results.forEach((result) => {
    const highscoreUserRow: HTMLTableRowElement = document.createElement("tr");
    const highscoreUserName: HTMLTableCellElement =
      document.createElement("td");
    const highscoreUserPoints: HTMLTableCellElement =
      document.createElement("td");

    highscoreUserRow.classList.add("highscore__userrow");
    highscoreUserName.classList.add("highscore__username");
    highscoreUserPoints.classList.add("highscore__userpoints");

    highscoreUserName.innerHTML = `${result.name}`;
    highscoreUserPoints.innerHTML = `${result.points}`;

    highscoreTable.appendChild(highscoreUserRow);
    highscoreUserRow.appendChild(highscoreUserName);
    highscoreUserRow.appendChild(highscoreUserPoints);
  });
}
