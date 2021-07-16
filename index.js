const fs = require('fs');
const fruits = require('./input.json');

class Fruit {
    constructor(type, color, weight) {  
        this.type = type;
        this.color = color;
        this.weight = weight;
    }
}
 
class FruitBasket {
    constructor(id){
        this.id = id;
    }

    fruitList = [];

    addFruit(fruit) {
        this.fruitList.push(fruit)
    }

    totalFruit() {
        return this.fruitList.length;
    }

    fruitTypes() {
        const fruitType = {};
        this.fruitList.map((res, i) => {
            if (fruitType[res.type]) {
                fruitType[res.type].push(res)
            } else {
                fruitType[res.type] = [res]
            }
        })
        return Object.entries(fruitType).map(([type, list]) => ({
            type,
            count: list.length
        }))
    }

    totalWeight() {
        return this.fruitList.reduce((a, b) => a + b.weight, 0)
    }

    getOutput(){
        const result = {
             "id": this.id,
             "total_fruits": this.totalFruit(),
              "total_weight": this.totalWeight(),
              "fruit_counts":this.fruitTypes()
        };
        fs.writeFileSync('output.json', JSON.stringify(result));
    }
}

function main() {
    fruits.map((res, i) => {
        const fruitBasket = new FruitBasket(res.id);
        res.contents.map((data) => {
            const fruit = new Fruit(data.type, data.color, data.weight);
            fruitBasket.addFruit(fruit);
        })
        fruitBasket.getOutput();
    })
}

main();