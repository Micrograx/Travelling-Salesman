// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g

function Population() {
    this.rockets = [];
    this.popsize = 30;
    this.matingpool = [];
    this.maxf = 100000

    for (var i = 0; i < this.popsize; i++) {
        this.rockets[i] = new Rocket();
    }

    this.evaluate = function() {

        var maxfit = 100000;
        for (var i = 0; i < this.popsize; i++) {
            this.rockets[i].calcFitness();
            if (this.rockets[i].fitness < maxfit) {
                maxfit = this.rockets[i].fitness;
            }
            if (this.rockets[i].fitness < this.maxf) {
                this.maxf = this.rockets[i].fitness;
                this.best = this.rockets[i].dna.genes.slice()

            }
        }

        // for (var i = 0; i < this.popsize; i++) {
        // this.rockets[i].fitness /= maxfit;
        // if (this.rockets[i].finess > 1) {
        //   this.rockets[i].finess = this.rockets[i].fitness - 1
        // }
        //}

        this.matingpool = [];
        for (var i = 0; i < this.popsize; i++) {
            if (this.rockets[i].fitness < maxfit * 2.5) {
                this.rockets[i].fitness = map(this.rockets[i].fitness, 0, 5000000, 5000000, 0)
                this.rockets[i].fitness /= 1000
                var n = this.rockets[i].fitness / 100;
                for (var j = 0; j < n; j++) {
                    this.matingpool.push(this.rockets[i]);
                }
            }
        }
    }
    this.best = this.rockets[1].dna.genes.slice()
    this.selection = function() {
        var newRockets = [];
        for (var i = 0; i < this.rockets.length; i++) {
            var parentA = random(this.matingpool).dna;
            var parentB = random(this.matingpool).dna;
            var child = parentA.crossover(parentB);
            child.mutation();
            newRockets[i] = new Rocket(child);
        }
        this.rockets = newRockets;
    }


}
