const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    


}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    
    var responseJson = await response.json();
    var dateTime =  responseJson.datetime;

    // write code slice the datetime
    hour = dateTime.slice(11,13);
    

    // add conditions to change the background images from sunrise to sunset
    if(hour>=0 && hour<=4){
        bg="sunrise2.png";
    }
    else if(hour>=4 && hour<=8){
        bg="sunrise4.png";
    }
    else if(hour>=8 && hour<=12){
        bg="sunrise6.png";
    }
    else if(hour>=12 && hour<=16){
        bg="sunrise8.png";
    }
    else if(hour>=16 && hour<=20){
        bg="sunrise10.png";
    }
    else{
        bg="sunrise12.png";
    }


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
