// you need three fuctions to run the calculator
// 1. function to concatenate equations together using symbles and numbers
// 2. equals which works out and displays the result and clears the entry with total
// 3. clear clears the string equation and result
// 4. power will toggel the screen from being on and off

console.log("I am loaded")

function stockValue(){
  var zero = 0
  document.getElementById('equation').textContent =zero;
 document.getElementById('answer').textContent =zero;
}

// function 1
function math (char){
  document.getElementById('equation').textContent += char;
}

// function 2
function equals(){
  document.getElementById('answer').textContent = eval(document.getElementById('equation').textContent);
  document.getElementById('equation').textContent = document.getElementById('answer').textContent;
}

function clearStuff(){
  console.log("i got fers")
  document.getElementById('equation').textContent = document.getElementById('answer').textContent;
}

 function allClear(){
   console.log("yep");
   stockValue();
}

function power(){
  console.log("power")
  if(document.getElementById('equation').textContent = document.getElementById('equation').textContent){
    return "Power Off";
  }
  if(document.getElementById('answer').textContent = document.getElementById('answer').textContent){
    return "Power Off";
  }
  return "Power On";

}

// $(document).ready(function(){
//   console.log("yep")
//   $("button.red").click(function(){
//     $("p").html(0);
//   });
// });
