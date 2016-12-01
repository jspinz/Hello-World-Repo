function setup() {
    createCanvas(1000, 600);
    background(0);
    fill(255);
    textSize(20);
    text("Input a city name to get started", 350, 50);

}

function draw() {
    if (gotData) {
        var temp=ogTemp*(9/5)+32;
        if (temp < 40) {
            background(0, 125, 255);
            
            text(str(temp)+"\xB0 F",100,400);
            // println("cold");
        } else if (temp > 40 && temp < 50) {
            background(255, 200, 0);
            text(str(temp)+"\xB0 F",100,400);
            //println("not that cold");
        } else if (temp > 50 && temp < 60) {
            background(255, 200, 100);
            text(str(temp)+"\xB0 F",100,400);

            //println("warmer");
        } else if (temp > 60) {
            background(255, 0, 0);
            text(str(temp)+"\xB0 F",100,400);
        }
        textSize(100);
        fill(255);
        text(name, 250, 200);


        console.log("supposed to print");

    }
}