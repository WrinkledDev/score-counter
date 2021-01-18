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

  let count = 0;
  // EVENT HANDLERS
  function displayCount(arg){
    count = arg === "decreaseCount" ? count -1 : arg === "increaseCount" ? count + 1 : 0
    let color = count < 0 ? "red" : count > 0 ? "green" : "black";
    displayCountSpace.style.color = color;
    displayCountSpace.innerHTML = count;
  }

})()