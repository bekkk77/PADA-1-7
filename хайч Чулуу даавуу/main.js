function play(userChoice) {
  let choices = ["хайч", "чулуу", "даавуу"];

  let computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user").innerText = userChoice;
  document.getElementById("computer").innerText = computerChoice;

  let result = "";

  if (userChoice === computerChoice) {
    result = "Тэнцлээ ";
  } else if (
    (userChoice === "хайч" && computerChoice === "даавуу") ||
    (userChoice === "чулуу" && computerChoice === "хайч") ||
    (userChoice === "даавуу" && computerChoice === "чулуу")
  ) {
    result = "Та хожлоо ";
  } else {
    result = "Компьютер хожлоо ";
  }

  document.getElementById("result").innerText = result;
}
