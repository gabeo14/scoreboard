let score = 0;

const addOneTeamOne = event => {
  console.log("FUGG YEAH DUGG");
  score += 1;
  let message = `${score}`;
  const teamOneScore = document.querySelector(".team-1 .score");
  teamOneScore.textContent = message;
};

const addOneTeamTwo = event => {
  console.log("THAS FUGGIN SIGG");
  score += 1;
  let message = `${score}`;
  const teamTwoScore = document.querySelector(".team-2 .score");
  teamTwoScore.textContent = message;
};

const subtractOneTeamOne = event => {
  console.log("FUGG MAN");
  score -= 1;
  let message = `${score}`;
  const teamOneScore = document.querySelector(".team-1 .score");
  teamOneScore.textContent = message;
};

const subtractOneTeamTwo = event => {
  console.log("FUGG");
  score -= 1;
  let message = `${score}`;
  const teamTwoScore = document.querySelector(".team-2 .score");
  teamTwoScore.textContent = message;
};

const updateTeamOne = event => {
  console.log("FUGG");
  let inputTeamOneName = document.querySelector(".team-1 .input");
  let message = `${inputTeamOneName.value}`;
  const teamOneName = document.querySelector(".team-1 .name");
  teamOneName.textContent = message;
};

const updateTeamTwo = event => {
  console.log("FUGG");
  let inputTeamTwoName = document.querySelector(".team-2 .input");
  let message = `${inputTeamTwoName.value}`;
  const teamTwoName = document.querySelector(".team-2 .name");
  teamTwoName.textContent = message;
};

const main = () => {
  const addButtonTeamOne = document.querySelector(".team-1 .add");
  addButtonTeamOne.addEventListener("click", addOneTeamOne);

  const addButtonTeamTwo = document.querySelector(".team-2 .add");
  addButtonTeamTwo.addEventListener("click", addOneTeamTwo);

  const subtractButtonTeamOne = document.querySelector(".team-1 .subtract");
  subtractButtonTeamOne.addEventListener("click", subtractOneTeamOne);

  const subtractButtonTeamTwo = document.querySelector(".team-2 .subtract");
  subtractButtonTeamTwo.addEventListener("click", subtractOneTeamTwo);

  const updateButtonTeamOne = document.querySelector(".team-1 .update");
  updateButtonTeamOne.addEventListener("click", updateTeamOne);

  const updateButtonTeamTwo = document.querySelector(".team-2 .update");
  updateButtonTeamTwo.addEventListener("click", updateTeamTwo);
};

document.addEventListener("DOMContentLoaded", main);
