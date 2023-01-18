import { Component, Input } from '@angular/core';
import { TimerService } from '../timer.service'; 
import { CounterService } from '../counter.service';
import { holes } from '../holeOrMole';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  constructor (
    public __timer: TimerService,  //måste ha för att kunna koppla component med service
    public __count: CounterService, //måste ha för att kunna koppla component med service

  ) {}

 @Input() holes: holes[] = [ //Vår array med bilder och boolean
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true},
    {hole: '../assets/images/hole.png', mole: '../assets/images/mole.png', moleOrHole: true}
  ]

  interval: any;
  game() {  //Vår funktion som kör spelet, loopar genom vår array med booleans och ändrar true till false och tillbaka med math.random
  setTimeout(()=>{ 
    for (let i = 0; i < 25; i++) { //Loop
    this.holes[i].moleOrHole = true; //Efter 60 sekunder återställer vi arrayen
    };
    clearInterval(this.interval); //Avslutar vår interval
  }, 60000);
    this.interval = setInterval(() =>{ //Vår interval som ändrar booleans med max 4 sekunders mellanrum
    for (let i = 0; i < 25; i++) {
      this.holes[i].moleOrHole = Boolean(Math.random() < .95); 
      }
    }, 2000 ,4000);
  }

}
