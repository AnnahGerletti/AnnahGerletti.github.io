// you need three fuctions to run the calculator
// 1. function to concatenate equations together using symbles and numbers
// 2. equals which works out and displays the result and clears the entry with total
// 3. clear clears the string equation and result

console.log("I am loaded")

// function 1
function math (char){
  document.getElementById('equation').textContent += char;
}

// function 2
function equals (){
  document.getElementById('answer').textContent = eval(document.getElementById('equation').textContent);
  document.getElementById('equation').textContent = document.getElementById('answer').textContent;
}

function clearStuff(){
  console.log("i got fers")
  document.getElementById('equation').textContent = document.getElementById('answer').textContent;
}

function allClear(){
  console.log("yep");
  document.
}
