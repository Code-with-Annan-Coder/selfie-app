var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
   
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    


    if(Content == "selfie"){
        console.log("taking selfie ---");
        speak();
    }
    
}
	

function speak(){

    
    var synth = window.speechSynthesis;
    
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    setTimeout(function(){
        img_id = "selfie1";
        take_snapshot();
       

        
    }, 6000);
    setTimeout(function(){
        speak_data = "Taking your second selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 7000);
    Webcam.attach(camera);
    setTimeout(function(){
        img_id = "selfie2";
        take_snapshot();
       
        
    }, 13000);
    setTimeout(function(){
        speak_data = "Taking your third selfie in 5 seconds"; 
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 14000)
    Webcam.attach(camera);
    setTimeout(function(){
        img_id = "selfie3";
        take_snapshot();
        
    }, 20000);
    Webcam.attach(camera);


    


}




function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie_image1" src="' + data_uri + '" >';
        }
        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie_image2" src="' + data_uri + '" >';
        }
        if(img_id == "selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie_image3" src="' + data_uri + '" >';
        }
        
    });
}


function save1(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image1").src ;
    link.href = image;
    link.click();
}

function save2(){
    link = document.getElementById("link1");
    image = document.getElementById("selfie_image2").src ;
    link.href = image;
    link.click();
}

function save3(){
    link = document.getElementById("link2");
    image = document.getElementById("selfie_image3").src ;
    link.href = image;
    link.click();
}

function saveAll(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image1").src ;
    link.href = image;
    link.click();

    link = document.getElementById("link1");
    image = document.getElementById("selfie_image2").src ;
    link.href = image;
    link.click();

    link = document.getElementById("link2");
    image = document.getElementById("selfie_image3").src ;
    link.href = image;
    link.click();
}