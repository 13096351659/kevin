var pics = [
    "1643011089552.jpg",
    "5827218cf2881c1264c7f93e28b13464.jpg",
    "20231019150129169769888938079.png",
    "20231019150127169769888740269.png",
    "20231019150128169769888861492 (1).png",
    "20231019150130169769889013354.png",
    "20231019150131169769889179703.png",
    "20231019150131169769889182675.png",
    "20231019150132169769889234002.png",
    "20231019150132169769889237607.png",
    "bc67ae516879d914b7109707760bc963.jpg",
    "ce3c2aec99391dac14010733fab93990 copy.jpg",
    "cf467e0cbcff520411999dfafb57f87f.jpg",
];

var intervalID; 


function showPic() {
    var n = Math.floor(Math.random() * pics.length);  
    var img = document.getElementById("pic");         
    img.src = pics[n];                                 
}

function startRotation() {
    intervalID = setInterval(showPic, 50);  

  
    setTimeout(stopRotation, 10000);
}


function stopRotation() {
    clearInterval(intervalID);  
}


window.onload = startRotation;