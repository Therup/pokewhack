import { Injectable } from '@angular/core';
import { TimerService } from './timer.service';
import { CounterService } from './counter.service';
import { holes } from './holeOrMole';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(
    public __timer: TimerService, //måste ha för att kunna koppla component med service
    public __count: CounterService //måste ha för att kunna koppla component med service
  ) {}

  holes: holes[] = [
    //Vår array med bilder och boolean
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole2.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole3.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole4.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole5.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole2.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole4.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole5.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole3.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole5.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole3.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole2.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole4.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole2.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole3.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole4.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole5.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole3.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole2.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole5.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole.png',
      moleOrHole: true,
    },
    {
      hole: '../assets/images/hole.png',
      mole: '../assets/images/mole4.png',
      moleOrHole: true,
    },
  ];

  interval: any;
  idx: number[] = [];
  idx2: number[] = [];
  idx3: number[] = [];
  lastHole: number;
  timer: boolean;
  hole: number;

  //////FUNKTION FÖR SPELET
  //Funktion som bygger på setinterval
  //Vi pushar random nummer in i en tom array med en while loop och unshift som får vara max 3 nummer
  //Vi använder en ternary operator för att ge möjlighet att visa minst en men kanske 3 mole
  //Vi tömmer vår array
  //Efter 60 sekunder avslutar vi vår interval och ställer alla booleans till true

  game() {
    setTimeout(() => {
      for (let i = 0; i < 25; i++) {
        this.holes[i].moleOrHole = true; //Efter 60 sekunder återställer vi arrayen
      }
      clearInterval(this.interval);   //Stänger vår interval
    }, 60000);
    this.interval = setInterval(() => {
      while (this.idx.length < 3) { //Kör när vi endast har 3 nummer eller färre i arrayen
        var rand = Math.floor(Math.random() * this.holes.length);  //Väljer ett slumpat hål från längden på holes arrayen
        if (this.idx.indexOf(rand) === -1) this.idx.unshift(rand); //Lägger in numret så länge vi inte har samma nummer i den nya arrayen
      }
      this.holes.forEach((element, index) => {  
        this.idx.indexOf(index) > -1
          ? ((this.holes[this.idx[0]].moleOrHole = Boolean(false)), //Visar en mole
            (this.holes[this.idx[1]].moleOrHole = Boolean(Math.random() < 0.6)),
            (this.holes[this.idx[2]].moleOrHole = Boolean(Math.random() < 0.8)))
          : (element.moleOrHole = true);
        setInterval(() => {
          this.idx = []; //Återställer array
        }, 500);
      });
    }, 4000);
  }

  //////Funktion som visar 1 mole åt gången
  //Funktion som inte kan välja samma hål 2 gånger i rad då vi gör en exakt jämförelse mellan numret som dragits och det förra numret som drogs
  //Random tid mellan 3-4 sekunder som den visas med en random time funktion
  //Vi unshiftar in nummer i en array där endast det nya numret används för mole
  //Vi Kör om mole funktionen efter att den kört så länge setTimeout på startGame inte har runnit ut
  randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  randomHole() {
    let index = Math.floor(Math.random() * this.holes.length); //Väljer ett random hål baserat på längden av vår holes array
    this.hole = index;  //Lägger in vårt slumpade nummer
    if (this.hole === this.lastHole) { //Jämför vårt slumpade nummer med senast slumpade och är det samma nummer så kör vi om
      return this.randomHole();
    }
    this.lastHole = this.hole; //Är det inte samma nummer så blir nu vårt nya nummer senast valda och kan användas som jämförelse nästa gång
    this.idx2.unshift(index); //Lägger in vårt nummer först i en array
    console.log(this.idx2);
    return this.hole; 
  }
  mole() {
    const time = this.randomTime(3000, 4000); //Hämtar ett tal för att se hur länge vår mole ska visas
    this.hole = this.randomHole();  //Hämtar ett random hål
    this.holes[this.idx2[0]].moleOrHole = Boolean(false); //Plockar fram en mole i senast valda hål
    setTimeout(() => {
      this.holes[this.idx2[0]].moleOrHole = Boolean(true); //Återställer hålet efter viss tid
      if (this.__timer.remainingTime > 0) this.mole();
    }, time);
  }
  startGame() {
    this.idx2 = [];
    this.mole();
  }

  ///////Mole spel med 3 moles på random tider
  //Samma som ovan funktion fast utbyggd och med random tid och random antal moles
  //

  startGame2() {
    this.idx = [];
    this.idx2 = [];
    this.idx3 = [];
    this.mole1();
    this.mole2();
    this.mole3();
  }
  mole1() {
    const time = this.randomTime(1000, 4000);
    this.hole = this.randomHole1();
    console.log('mole1 array', this.idx);
    if ((this.holes[this.idx[0]].moleOrHole = Boolean(false))) {
      this.mole1();
    }
    this.holes[this.idx[0]].moleOrHole = Boolean(Math.random() < 0.8);
    setTimeout(() => {
      this.holes[this.idx[0]].moleOrHole = Boolean(true);
      if (this.__timer.remainingTime > 0) this.mole1();
    }, time);
  }
  mole2() {
    const time = this.randomTime(1500, 4000);
    this.hole = this.randomHole2();
    console.log('mole2 array', this.idx2);
    if ((this.holes[this.idx2[0]].moleOrHole = Boolean(false))) {
      this.mole2();
    }
    this.holes[this.idx2[0]].moleOrHole = Boolean(Math.random() < 0.8);
    setTimeout(() => {
      this.holes[this.idx2[0]].moleOrHole = Boolean(true);
      if (this.__timer.remainingTime > 0) this.mole2();
    }, time);
  }
  mole3() {
    const time = this.randomTime(2000, 4000);
    this.hole = this.randomHole3();
    console.log('mole1 array', this.idx3);
    if ((this.holes[this.idx3[0]].moleOrHole = Boolean(false))) {
      this.mole3();
    }
    this.holes[this.idx3[0]].moleOrHole = Boolean(false);
    setTimeout(() => {
      this.holes[this.idx3[0]].moleOrHole = Boolean(true);
      if (this.__timer.remainingTime > 0) this.mole3();
    }, time);
  }
  randomHole1() {
    let index = Math.floor(Math.random() * this.holes.length);
    this.hole = index;
    if (this.hole === this.lastHole) {
      return this.randomHole1();
    }
    this.lastHole = this.hole;
    this.idx.unshift(index);
    //console.log(this.idx)
    return this.hole;
  }
  randomHole2() {
    let index = Math.floor(Math.random() * this.holes.length);
    this.hole = index;
    if (this.hole === this.lastHole) {
      return this.randomHole2();
    }
    this.lastHole = this.hole;
    this.idx2.unshift(index);
    //console.log(this.idx2)
    return this.hole;
  }
  randomHole3() {
    let index = Math.floor(Math.random() * this.holes.length);
    this.hole = index;
    if (this.hole === this.lastHole) {
      return this.randomHole3();
    }
    this.lastHole = this.hole;
    this.idx3.unshift(index);
    //console.log(this.idx3)
    return this.hole;
  }
}
