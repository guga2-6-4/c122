x = 0;
y = 0;
screenWidth = 0;
screenHeight = 0;
drawApple = "";
speakData = "";
toNumber = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
  
    toNumber = Number(content);
    
    if(Number.isInteger(toNumber)){
      document.getElementById("status").innerHTML = "A maçã começou a ser desenhada. "
    }
    else{
      document.getElementById("status").innerHTML = "O número não foi reconhecido."
    }
}

function setup() {
  screenWidth = window.innerWidth();
  screenHeight = window.innerHeight();
  createCanvas(screenWidth, screenHeight-150)
  canvas.position(0,150)
}

function draw() {
  if(drawApple == "set"){
for(var i = 1; i <= toNumber; i++)
{
  x = Math.floor(Math.random() * 700);
  y = Math.floor(Math.random() * 400);
  Image(apple, x, y, 50,50)

} 
document.getElementById("status").innerHTML = to_number + " Apples drawn";
speak_data = to_number + "Apples drawn";
speak();
draw_apple = "";
}
      
}


function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
