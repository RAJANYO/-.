prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera"); 
Webcam.attach('#camera');
function capture() {
Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; });}

console.log(ml5.version);
clssifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uNFpe_s1Z/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelloaded");
    speak()
}

function speak(){ var synth = window.speechSynthesis; speak_data_1 = "The first prediction is " + prediction1; speak_data_2 = "And the second prediction is " + prediction2; var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2); synth.speak(utterThis); }
