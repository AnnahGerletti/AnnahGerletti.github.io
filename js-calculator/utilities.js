// you need three fuctions to run the calculator
// 1. function to concatenate equations together using symbles and numbers
// 2. equals which works out and displays the result and clears the entry with total
// 3. clear clears the string equation and result
// 4. power will toggel the screen from being on and off

console.log("I am loaded")
var powerIsOn = Boolean(false);

function stockValue(){
  if (powerIsOn == true){
    var zero = 0
  document.getElementById('equation').textContent =zero;
  document.getElementById('answer').textContent =zero;
  }
}

// function 1
function math (char){
  if (powerIsOn == true){
    document.getElementById('equation').textContent += char;
  }
}

// function 2
function equals(){
  if(powerIsOn == true){
    document.getElementById('answer').textContent = eval(document.getElementById('equation').textContent);
    document.getElementById('equation').textContent = document.getElementById('answer').textContent;
  }
}
//function 3
function clearStuff(){
  if(powerIsOn == true){
    console.log("i got fers")
    document.getElementById('equation').textContent = document.getElementById('answer').textContent;
  }
}
//function 4
function allClear(){
   if(powerIsOn == true){
     console.log("yep");
     stockValue();
   }
}

function power(){
  console.log("wow");
  powerIsOn = true;
  // if(powerIsOn = false){
  //   document.getElementById("equation").style.display="none";
  //   console.log("yeah");
  // }
}



//
// // function power(){
//   console.log("power")
//   if(document.getElementById('equation').textContent = document.getElementById('equation').textContent){
//     return "Power Off";
//   }
//   if(document.getElementById('answer').textContent = document.getElementById('answer').textContent){
//     return "Power Off";
//   }
//   return "Power On";
//
// }
