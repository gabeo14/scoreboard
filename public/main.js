const addOneTeamOne = event => {
  console.log("FUGG YEAH DUGG");
};

const addOneTeamTwo = event => {
  console.log("THAS FUGGIN SIGG");
};
const subtractOneTeamOne = event => {
  console.log("FUGG MAN");
};
const subtractOneTeamTwo = event => {
  console.log("FUGG");
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
};

document.addEventListener("DOMContentLoaded", main);
