(function(){

  // SELECTORS
  let displayCountSpace = document.querySelector(".display-count");
  let decreaseCountBtn = document.querySelector(".decrease");
  let resetCountBtn = document.querySelector(".reset");
  let increaseCountBtn = document.querySelector(".increase");


  // EVENT LISTENERS
  decreaseCountBtn.addEventListener('click', () => displayCount("decreaseCount"));
  resetCountBtn.addEventListener('click', () => displayCount("resetCount"));
  increaseCountBtn.addEventListener('click', () => displayCount("increaseCount"));

  // EVENT HANDLERS
  function displayCount(arg){
    let count = 0;
    count += arg === "decreaseCount" ? -1 : arg === "increaseCount" ? 1 : 0
    let color = count < 0 ? "red" : count > 0 ? "green" : "black";
    displayCountSpace.innerHTML = count;
    displayCountSpace.style.color = color;
  }

})()