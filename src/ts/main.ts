import { createHighscore } from "./functions/highscore";
import { Question } from "./models/Question";
import { User } from "./models/User";

function init() {
  createHighscore();
}

init();
let users: User[] = [];

let startQuizBtn = document.getElementById("startQuizBtn");
startQuizBtn?.addEventListener("click", () => {
  getUsername();
});

function getUsername() {
  users = JSON.parse(localStorage.getItem("Users") || "[]");
  let usernameInput: HTMLInputElement = document.getElementById(
    "username"
  ) as HTMLInputElement;
  let username: string = usernameInput.value;
  let score: number = 0;

  let newUser = new User(username, score);
  users.push(newUser);
  localStorage.setItem("Users", JSON.stringify(users));
}

function createHtmlForQuiz() {
  let questions: Question[] = [];

  for (let i = 0; i < questions.length; i++) {
    let questionText = document.createElement("h4");
    questionText.innerText = questions[i].lyric;
  }
}
