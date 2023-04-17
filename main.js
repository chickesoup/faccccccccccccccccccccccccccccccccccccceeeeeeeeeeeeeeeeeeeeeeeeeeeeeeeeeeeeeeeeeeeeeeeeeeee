//* https://teachablemachine.withgoogle.com/models/UMcZB8ovD/
Webcam.set({
width:300,
height:250,
image_format:"png",
png_quality:90

});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function snapshot(){
Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>" ;

})

}

console.log("ml5 version",ml5.version);

var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UMcZB8ovD/model.json",modelloaded);
function modelloaded(){

    console.log("model has been initialised");
}
function check(){
    img= document.getElementById("captured_image");
    classifier.classify(img,gotresult);

}
function gotresult( error,results){
   if(error){
    console.error(error);
    
   }
   console.log (results)
   document.getElementById("resultobjectname").innerHTML=results[0].label;
   document.getElementById("resultobjectaccuracy").innerHTML=results[0].confidence.toFixed(3);
}
