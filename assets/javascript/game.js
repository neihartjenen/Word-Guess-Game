const words = ["python", "gorilla", "tiger", "hippopotamus", "toucan" , "tapir"];

let randNum; 
let choosenWord;
let rightWord;
let wrongWord;
let underscore;
let remains;


let generateUnderscore = () => {
  for (let i = 0; i < choosenWord.length; i++) {
      if (choosenWord[i] === " "){
          underscore.push(" ")
      }
      else{
         underscore.push("_");
      }
  }
  console.log(underscore);
  return underscore;
};

document.addEventListener("keypress", event => {
  let userKey = event.key.toLowerCase();
  console.log(userKey);

    if (choosenWord.indexOf(userKey) > -1) {
    console.log(true);
   
    rightWord.push(userKey);
    document.getElementById("right").textContent = rightWord;
    for (var i = 0; i < choosenWord.length; i++) {
      if (choosenWord[i] === userKey) {
        underscore[i] = userKey;
      }
    }
    document.getElementById("underscore").textContent = underscore;
    if (underscore.join("") == choosenWord) {
      alert("You Win");
      document.getElementById("image").innerHTML=`<img src="./assets/images/${words[randNum]}.jpg">`
      play()
    }
  } else {
    wrongWord.push(userKey);
    document.getElementById("wrong").textContent = wrongWord;
    remains--;
    document.getElementById("remains").textContent = remains
    if (remains === 0) {
      alert("you lost, try again? ");
      play()
    }
  }
});

function play(){
     randNum = Math.floor(Math.random() * words.length);
     choosenWord = words[randNum];
     rightWord = [];
     wrongWord = [];
     underscore = [];
     remains = 10;
     document.getElementById("underscore").textContent = generateUnderscore();
     document.getElementById("underscore").textContent = underscore;
     document.getElementById("right").textContent = rightWord;
     document.getElementById("wrong").textContent = wrongWord;
    
     console.log(choosenWord)

}
play()