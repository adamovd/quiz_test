import { Highscore } from "../models/Highscore";

const highscoreContainer: HTMLDivElement = document.createElement("div");

const highscoreTitle: HTMLHeadElement = document.createElement("h2");
const highscoreTable: HTMLTableElement = document.createElement("table");
const highscoreTopRow: HTMLTableRowElement = document.createElement("tr");
const highscoreName: HTMLTableCellElement = document.createElement("td");
const highscorePoints: HTMLTableCellElement = document.createElement("td");

const results: Highscore[] = [];
