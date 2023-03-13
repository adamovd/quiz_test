import { createHighscore } from "./functions/highscore";
import { Question } from "./models/Question";
import { questions } from "./models/questions";
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
  const quiz: Question[] = questions;

  for (let i = 0; i < quiz.length; i++) {
    const quizLyric: HTMLParagraphElement = document.createElement("p");
    const quizOptionOne: HTMLInputElement = document.createElement("input");
    const quizOptionTwo: HTMLInputElement = document.createElement("input");
    const quizOptionThree: HTMLInputElement = document.createElement("input");
    const quizSubmitBtn: HTMLButtonElement = document.createElement("button");

    quizLyric.classList.add("quiz__lyric");
    quizOptionOne.classList.add("quiz__optionone");
    quizOptionTwo.classList.add("quiz__optiontwo");
    quizOptionThree.classList.add("quiz__optionthree");
    quizSubmitBtn.classList.add("quiz__btn");

    quizLyric.innerHTML = quiz[i].lyric;
    quizOptionOne.innerHTML = quiz[i].options[0];
    quizOptionTwo.innerHTML = quiz[i].options[1];
    quizOptionThree.innerHTML = quiz[i].options[2];
  }
}
