import { Question } from "./models/Question";

let startQuizBtn = document.getElementById("startQuizBtn");
startQuizBtn?.addEventListener("click", () => {
  getUsername();
});

function getUsername() {
  let usernameInput: HTMLInputElement = document.getElementById(
    "username"
  ) as HTMLInputElement;
  let username: string = usernameInput.value;
  localStorage.setItem("Username", JSON.stringify(username));
}

function createHtmlForQuiz() {
  let questions: Question[] = [];

  for (let i = 0; i < questions.length; i++) {
    let questionText = document.createElement("h4");
    questionText.innerText = questions[i].lyric;
  }
}
