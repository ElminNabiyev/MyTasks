const result = document.getElementById("result");
const user_and_comp = document.querySelectorAll(".user_and_comp");
const buttons = document.querySelectorAll("button");

const userImg = document.createElement("img");
const compImg = document.createElement("img");

buttons[0].addEventListener("click", function () {
  createImegas();
  userImg.src =
    "https://www.slazzer.com/downloads/b997ce66-f516-11ee-9f1b-42010a80000a/%5Bremoval.ai%5D_b9a522da-2292-429c-b216-79668865911a-dwayne-the-rock-johnson-gettyimages-1061959920_prev_ui.png";
  createCompChoice();
  getResult();
});
buttons[1].addEventListener("click", function () {
  createImegas();
  userImg.src =
    "https://www.slazzer.com/downloads/20e72134-f517-11ee-8c36-42010a80000a/1000_F_243068964_BqrpjOdMd2U7ZEGLjiO8l7h4Ut1j9hcA_prev_ui.png";
  createCompChoice();
  getResult();
});
buttons[2].addEventListener("click", function () {
  createImegas();
  userImg.src = "https://files.modern.az/articles/2021/09/29/467399.jpg";
  createCompChoice();
  getResult();
});

function createCompChoice() {
  const random = Math.floor(Math.random() * 4);
  if (random === 1) {
    compImg.src =
      "https://www.slazzer.com/downloads/b997ce66-f516-11ee-9f1b-42010a80000a/%5Bremoval.ai%5D_b9a522da-2292-429c-b216-79668865911a-dwayne-the-rock-johnson-gettyimages-1061959920_prev_ui.png";
  }
  if (random === 2) {
    compImg.src =
      "https://www.slazzer.com/downloads/20e72134-f517-11ee-8c36-42010a80000a/1000_F_243068964_BqrpjOdMd2U7ZEGLjiO8l7h4Ut1j9hcA_prev_ui.png";
  }
  if (random === 3) {
    compImg.src = "https://files.modern.az/articles/2021/09/29/467399.jpg";
  }
}
function getResult() {
  if (userImg.src === compImg.src) {
    result.textContent = "Bərabər";
  }
  if (
    compImg.src ===
      "https://www.slazzer.com/downloads/b997ce66-f516-11ee-9f1b-42010a80000a/%5Bremoval.ai%5D_b9a522da-2292-429c-b216-79668865911a-dwayne-the-rock-johnson-gettyimages-1061959920_prev_ui.png" &&
    userImg.src ===
      "https://www.slazzer.com/downloads/20e72134-f517-11ee-8c36-42010a80000a/1000_F_243068964_BqrpjOdMd2U7ZEGLjiO8l7h4Ut1j9hcA_prev_ui.png"
  ) {
    result.textContent = "Uddun";
  }
  if (
    compImg.src ===
      "https://www.slazzer.com/downloads/b997ce66-f516-11ee-9f1b-42010a80000a/%5Bremoval.ai%5D_b9a522da-2292-429c-b216-79668865911a-dwayne-the-rock-johnson-gettyimages-1061959920_prev_ui.png" &&
    userImg.src === "https://files.modern.az/articles/2021/09/29/467399.jpg"
  ) {
    result.textContent = "Uduzdun";
  }
  if (
    compImg.src === "https://files.modern.az/articles/2021/09/29/467399.jpg" &&
    userImg.src ===
      "https://www.slazzer.com/downloads/20e72134-f517-11ee-8c36-42010a80000a/1000_F_243068964_BqrpjOdMd2U7ZEGLjiO8l7h4Ut1j9hcA_prev_ui.png"
  ) {
    result.textContent = "Uduzdun";
  }
  if (
    compImg.src === "https://files.modern.az/articles/2021/09/29/467399.jpg" &&
    userImg.src ===
      "https://www.slazzer.com/downloads/b997ce66-f516-11ee-9f1b-42010a80000a/%5Bremoval.ai%5D_b9a522da-2292-429c-b216-79668865911a-dwayne-the-rock-johnson-gettyimages-1061959920_prev_ui.png"
  ) {
    result.textContent = "Uddun";
  }
  if (
    compImg.src ===
      "https://www.slazzer.com/downloads/20e72134-f517-11ee-8c36-42010a80000a/1000_F_243068964_BqrpjOdMd2U7ZEGLjiO8l7h4Ut1j9hcA_prev_ui.png" &&
    userImg.src ===
      "https://www.slazzer.com/downloads/b997ce66-f516-11ee-9f1b-42010a80000a/%5Bremoval.ai%5D_b9a522da-2292-429c-b216-79668865911a-dwayne-the-rock-johnson-gettyimages-1061959920_prev_ui.png"
  ) {
    result.textContent = "Uduzdun";
  }
  if (
    compImg.src ===
      "https://www.slazzer.com/downloads/20e72134-f517-11ee-8c36-42010a80000a/1000_F_243068964_BqrpjOdMd2U7ZEGLjiO8l7h4Ut1j9hcA_prev_ui.png" &&
    userImg.src === "https://files.modern.az/articles/2021/09/29/467399.jpg"
  ) {
    result.textContent = "Uddun";
  }
}
function createImegas() {
  user_and_comp[0].appendChild(userImg);
  user_and_comp[1].appendChild(compImg);
  userImg.setAttribute("src", "...");
}
