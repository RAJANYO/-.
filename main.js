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
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uNFpe_s1Z/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelloaded");
    // speak()
}
function identify() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function speak(){ var synth = window.speechSynthesis; speak_data_1 = "The first prediction is " + prediction1; speak_data_2 = "And the second prediction is " + prediction2; var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2); synth.speak(utterThis); }

function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;
        prediction1 = result[0].label;
        prediction2 = result[1].label;
        speak();
        if (result[0].label == "thumbs up") { document.getElementById("update_emoji").innerHTML = "👍"; }
        if (result[1].label == "thumbs up") { document.getElementById("update_emoji2").innerHTML = "👍"; }
        if (result[0].label == "thumbs down") { document.getElementById("update_emoji").innerHTML = "👎"; }
        if (result[1].label == "thumbs down") { document.getElementById("update_emoji2").innerHTML = "👎"; }
        if (result[0].label == "punch") { document.getElementById("update_emoji").innerHTML = "🤛"; }
        if (result[1].label == "punch") { document.getElementById("update_emoji2").innerHTML = "🤛"; }

    }
}