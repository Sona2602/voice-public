x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_square = "";
draw_triangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
     
    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as : " + content;
    
    if(content == "Circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
    }
    if(content == "Rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = "set";
    }
    if(content == "Square")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing square";
        draw_square = "set";
    }
    if(content == "Triangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing triangle";
        draw_triangle = "set";
    }
}

function setup(){
    canvas = createCanvas(900, 600);

}

function draw(){
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x , y , radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
    }
    if(draw_rect == "set")
    {
        rect(x , y ,70,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rect = "";
    }
    if(draw_square == "set")
    {
        side = Math.floor(Math.random() * 100);
        square(x , y , side);
        document.getElementById("status").innerHTML = "Square is drawn";
        draw_square = "";
    }
    if(draw_triangle == "set")
    {
        x2 = Math.floor(Math.random() * 100);
        y2 = Math.floor(Math.random() * 100);
        x3 = Math.floor(Math.random() * 100);
        y3 = Math.floor(Math.random() * 100);
        triangle(x , y , x2,y2,x3,y3);
        document.getElementById("status").innerHTML = "Triangle is drawn";
        draw_triangle = "";
    }

}