import { Injectable } from '@angular/core';
import { TimerService } from './timer.service'; 
import { CounterService } from './counter.service';
import { holes } from './holeOrMole';
import { topScore } from './topScore';
import { Router } from '@angular/router';
import { NewPlayerService } from './new-player.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    public __timer: TimerService,  //måste ha för att kunna koppla component med service
    public __count: CounterService, //måste ha för att kunna koppla component med service
    public __player: NewPlayerService,
  ) { }

  holes: holes[] = [ //Vår array med bilder och boolean
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole2.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole3.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole4.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole5.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole2.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole4.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole5.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole3.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole5.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole3.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole2.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole4.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole2.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole3.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole4.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole5.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole3.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole2.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole5.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
  {hole: '../assets/images/hole.png', mole: '../assets/images/mole4.png', moleOrHole: true}
]

interval: any;
max = 400
min: 2000

randomTime() {
  return Math.ceil(Math.random() * 10) * 1000;
  }

  idx2: number[] = []
  game2() {
   
  setTimeout(() => {
    for (let i = 0; i < 25; i++) { //Loop
      this.holes[i].moleOrHole = true; //Efter 60 sekunder återställer vi arrayen
      };
    clearInterval(this.interval)
  }, 60000);
    this.interval = setInterval(() => {
      this.randomTime()
      console.log(this.randomTime())
      this.idx2.unshift(Math.floor(Math.random() * this.holes.length)); //Lägger till ett random hål i en array
      this.idx2.unshift(Math.floor(Math.random() * this.holes.length)); //Lägger till ett random hål i en array
      this.idx2.unshift(Math.floor(Math.random() * this.holes.length)); //Lägger till ett random hål i en array
   console.log(this.idx2)
   this.holes.forEach((element, index) => {
    this.idx2.indexOf(index) > -1
    ? (this.holes[this.idx2[0]].moleOrHole = Boolean(Math.random() < .25), this.holes[this.idx2[1]].moleOrHole = Boolean(Math.random() < .5), this.holes[this.idx2[2]].moleOrHole = Boolean(Math.random() < .8) )
    : (element.moleOrHole = true)
   
    setInterval(() => {
      this.idx2 = []
    }, 1000)
  })
  }, this.randomTime())
  
  }

}
