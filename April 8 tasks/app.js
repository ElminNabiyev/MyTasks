const result = document.getElementById("result");
const user_and_comp = document.querySelectorAll(".user_and_comp");
const buttons = document.querySelectorAll("button");

const userImg = document.createElement("img");
const compImg = document.createElement("img");

buttons[0].addEventListener("click", function () {
  createImgas();
  userImg.src =
    "https://file.removal.ai/preview/b9a522da-2292-429c-b216-79668865911a-dwayne-the-rock-johnson-gettyimages-1061959920.png";
  createCompChoice();
  getResult();
});
buttons[1].addEventListener("click", function () {
  createImgas();
  userImg.src =
    "https://file.removal.ai/preview/a14a167d-1688-4040-b989-96a42927a718-20568308-rock-paper-scissors-paper-hand-isolated-on-white.png";
  createCompChoice();
  getResult();
});
buttons[2].addEventListener("click", function () {
  createImgas();
  userImg.src =
    "https://files.modern.az/articles/2021/09/29/467399.jpg";
  createCompChoice();
  getResult();
});

function createCompChoice() {
  const random = Math.floor(Math.random() * 4);
  if (random === 1) {
    compImg.src =
      "https://file.removal.ai/preview/b9a522da-2292-429c-b216-79668865911a-dwayne-the-rock-johnson-gettyimages-1061959920.png";
  }
  if (random === 2) {
    compImg.src =
      "https://file.removal.ai/preview/a14a167d-1688-4040-b989-96a42927a718-20568308-rock-paper-scissors-paper-hand-isolated-on-white.png";
  }
  if (random === 3) {
    compImg.src =
      "https://files.modern.az/articles/2021/09/29/467399.jpg";
  }
}
function getResult() {
  if (userImg.src === compImg.src) {
    result.textContent = "Bərabər";
  }
  if (
    compImg.src ===
      "https://file.removal.ai/preview/b9a522da-2292-429c-b216-79668865911a-dwayne-the-rock-johnson-gettyimages-1061959920.png" &&
    userImg.src ===
      "https://file.removal.ai/preview/a14a167d-1688-4040-b989-96a42927a718-20568308-rock-paper-scissors-paper-hand-isolated-on-white.png"
  ) {
    result.textContent = "Uddun";
  }
  if (
    compImg.src ===
      "https://file.removal.ai/preview/b9a522da-2292-429c-b216-79668865911a-dwayne-the-rock-johnson-gettyimages-1061959920.png" &&
    userImg.src ===
      "https://files.modern.az/articles/2021/09/29/467399.jpg"
  ) {
    result.textContent = "Uduzdun";
  }
  if (
    compImg.src ===
      "https://files.modern.az/articles/2021/09/29/467399.jpg" &&
    userImg.src ===
      "https://file.removal.ai/preview/a14a167d-1688-4040-b989-96a42927a718-20568308-rock-paper-scissors-paper-hand-isolated-on-white.png"
  ) {
    result.textContent = "Uduzdun";
  }
  if (
    compImg.src ===
      "https://files.modern.az/articles/2021/09/29/467399.jpg" &&
    userImg.src ===
      "https://file.removal.ai/preview/b9a522da-2292-429c-b216-79668865911a-dwayne-the-rock-johnson-gettyimages-1061959920.png"
  ) {
    result.textContent = "Uddun";
  }
  if (
    compImg.src ===
      "https://file.removal.ai/preview/a14a167d-1688-4040-b989-96a42927a718-20568308-rock-paper-scissors-paper-hand-isolated-on-white.png" &&
    userImg.src ===
      "https://file.removal.ai/preview/b9a522da-2292-429c-b216-79668865911a-dwayne-the-rock-johnson-gettyimages-1061959920.png"
  ) {
    result.textContent = "Uduzdun";
  }
  if (
    compImg.src ===
      "https://file.removal.ai/preview/a14a167d-1688-4040-b989-96a42927a718-20568308-rock-paper-scissors-paper-hand-isolated-on-white.png" &&
    userImg.src ===
      "https://files.modern.az/articles/2021/09/29/467399.jpg"
  ) {
    result.textContent = "Uddun";
  }
}
function createImgas() {
  user_and_comp[0].appendChild(userImg);
  user_and_comp[1].appendChild(compImg);
  userImg.setAttribute("src", "...");
} 