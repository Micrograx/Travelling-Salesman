// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g

var population;
var lifeP;
var fitP;
var genP;
var count = 0;
var gen = 1;



var cities = [];
var cant = 10


function setup() {
    createCanvas(800, 300);

    for (var i = 0; i < cant; i++) {
        x = random(10, window.width / 2 - 10);
        y = random(10, window.height - 10);
        cities[i] = createVector(x, y)
    }

    population = new Population();
    lifeP = createP();
    FitP = createP();
    genP = createP();
    target = createVector(width / 2, 50);

    //background(0);
}

function draw() {
    //frameRate(10)
    background(0);
    lifeP.html(count)
    genP.html(gen)
    //fill(0)
    //rect(window.width / 2 , 0, window.width,window.height)


    if (count === population.popsize) {
        population.evaluate();
        population.selection();
        //population = new Population();
        count = 0;
        gen ++
    }
    noFill()
    stroke(180,120,100)
    beginShape();

    for (var j = 0; j < cities.length; j++) {
        vertex(population.rockets[count].dna.genes[j].x, population.rockets[count].dna.genes[j].y)
    }
    count++;
    endShape()
    for (var i = 0; i < cities.length; i++) {
        fill(255, 255, 0)
        ellipse(cities[i].x, cities[i].y, 10, 10)
        ellipse(cities[i].x + window.width / 2, cities[i].y, 10, 10)
    }
    noFill()
    stroke(255, 0, 255)
    beginShape();

    for (var j = 0; j < cities.length; j++) {
        vertex(population.best[j].x + window.width / 2, population.best[j].y)
    }
    endShape()
    var b = population.maxf
    FitP.html(b)
}





function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
