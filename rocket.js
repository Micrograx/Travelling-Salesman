

function Rocket(dna) {
  this.pos = createVector(width / 2, height);
  this.vel = createVector();
  this.acc = createVector();


  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new DNA();
  }
  this.fitness = 0;


  this.calcFitness = function() {

    for (var i = 0; i < cities.length - 1;i++){
      var d = int(dist(this.dna.genes[i].x, this.dna.genes[i].y, this.dna.genes[i+1].x, this.dna.genes[i+1].y))
    this.fitness = this.fitness + d

  }

  }

}
