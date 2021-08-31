import { Yak } from "../../Yak.js";
import { Aardvark } from "../models/Aardvark.js";
import { Bear } from "../models/Bear.js";
import { Cat } from "../models/Cat.js";
import { Dog } from "../models/Dog.js";
import { Elephant } from "../models/Elephant.js";
import { Flamingo } from "../models/Flamingo.js";
import { Groundhog } from "../models/Groundhog.js";
import { Hippo } from "../models/Hippo.js";
import { Impala } from "../models/Impala.js";
import { Jackal } from "../models/Jackal.js";
import { KingFisher } from "../models/KingFisher.js";
import { Lobster } from "../models/Lobster.js";
import { Mouse } from "../models/Mouse.js";
import { Newt } from "../models/Newt.js";
import { Okapi } from "../models/Okapi.js";
import { Peacock } from "../models/Peacock.js";
import { Quail } from "../models/Quail.js";
import { Rat } from "../models/Rat.js";
import { Snake } from "../models/Snake.js";
import { Urchin } from "../models/Urchin.js";
import { Vulture } from "../models/Vulture.js";
import { Wombat } from "../models/Wombat.js";
import { Zebra } from "../models/Zebra.js";
import { Tucan } from "./Tucan.js";








var arthur = new Aardvark('ARTHUR')
var smokey = new Bear('SMOKEY')
var tony = new Cat('TONY', true)
var babbar = new Elephant('BABBAR')
var tom = new Flamingo('Tom')
var chip = new Groundhog('Chip')
var john = new Hippo('John')
var bro = new Impala('Bro', 1, 1)
var jack = new Jackal('Jack', 4, 'sharp')
var sam = new KingFisher('Sam', 2, 2, true)
var larry = new Lobster('Larry', 6, 2)
var matthias = new Mouse('Matthias', 4, true)
var moop = new Newt('Moop', 'amphibian', 4, true )
var okjaw = new Okapi('Okjaw', 'mammal', 4, true)
var screech = new Peacock('Screech', 'Bird', 2, true)
var quailBoy = new Quail('Quail Boy', 'Bird', 2, true)
var frank = new Rat('Frank','mammal', 4, true)
var snek = new Snake('Snek','reptile', 0, true)
var sam = new Tucan('Sam', 'Bird', 2, true)
var urchin = new Urchin('Never got one', 'Never had one', 'no', 'no')
var rodney = new Vulture('Rodney')
var willy = new Wombat('willy')
var reginald = new Yak('Reginald')
var zebra = new Zebra('Simon')


var dogs = [new Dog('Randy', 2, true), new Dog('Dodger', 4, false), new Dog('Duke', 6, true)]



let animals = []
let animal = animals.push(arthur, smokey, tony, babbar, tom, chip, john, bro, jack, sam, larry, matthias, moop, okjaw, screech, quailBoy, frank, snek, sam, urchin, rodney, willy, reginald, zebra)





export class ZooController{

    aardvarks(){
        console.log(Aardvark)
    }
    bears(){
        console.log(Bear)
    }
    cats(){
        console.log(Cat)
    }
    dogs(){
        console.log(dogs)
    }
    elephants(){
        console.log(Elephant)
    }
    flamingos(){
        console.log(Flamingo)
    }
    groundhogs(){
        console.log(Groundhog)
    }
    hippos(){
        console.log(Hippo)
    }
    impalas(){
        console.log(Impala)
    }
    jackals(){
        console.log(jack)
    }
    kingFishers(){
        console.log(sam)
    }
    fourLegAnimals(){
        console.log(fourLegAnimals)
    }
    lobsters(){
        console.log(Lobster)
    }
    mice(){
        console.log(matthias)
    }
    newts(){
        console.log(moop)
    }
    okapis(){
        console.log(okjaw)
    }
    peacock(){
        console.log(screech)
    }
    quail(){
        console.log(quailBoy)
    }
    rat(){
        console.log(frank)
    }
    snake(){
        console.log(snek)
    }
    tucan(){
        console.log(sam)
    }
    urchin(){
        console.log(urchin)
    }
    vulture(){
        console.log(rodney)
    }
    willy(){
        console.log(willy)
    }
    reginald(){
        console.log(reginald)
    }
    zebra(){
        console.log(zebra)
    }
 

    
    // drawZoo(){
    //     for(let i =0; i< animals.length; i++){
    //     let a = animals[i]
        
    // }

    const_animal_card = document.getElementById('animals')

    
     drawAnimal(animal){
        let animalTemplate =`
        <div class="col-lg-4">
        <h1>"${a.name}"</h1>
        </div>
        `
        
        const_animal_card.innerHTML += animalTemplate
    }
     drawAnimals(){
        animals.forEach(drawAnimal)

    }
        }


    
