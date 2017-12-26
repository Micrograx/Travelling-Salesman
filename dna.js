// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g

function DNA(genes) {


    if (genes) {
        this.genes = genes;
    } else {
        this.genes = shuffle(cities);
    }

    this.crossover = function(partner) {
        var newgenes = [];
        var offset = floor(cities.length / 2)
        var start = floor(random(cities.length - offset))

        var waiting = []
        var qeue = []
        for (var i = 0; i < offset; i++) {
            newgenes[start + i] = this.genes[start + i]
        }
        for (var j = 0; j < cities.length; j++) {
            if (!newgenes[j]) {
                if (newgenes.includes(partner.genes[j])) {
                  qeue.push(j)
                } else {
                  newgenes[j] = partner.genes[j]
                }
            } else {
              if (!newgenes.includes(partner.genes[j])){
                waiting.push(partner.genes[j])
              }
            }
        }
        for (var k = 0; k < qeue.length;k++){
          newgenes[qeue[k]] = waiting[k]
        }

        return new DNA(newgenes);
    }

    this.mutation = function() {
        for (var i = 0; i < this.genes.length; i++) {
            if (random(1) < 0.01) {
                var j = floor(random(cities.length))
                var temp = this.genes[i]
                this.genes[i] = this.genes[j]
                this.genes[j] = temp
            }
        }
    }

}
