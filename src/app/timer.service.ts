import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(
      public __count: CounterService,  //Importerar counter för att kunna nollställa räknare när vi startar ny spel
  ) { }

    
  remainingTime: number = 60;
  interval: any

  playGame(event: any) {   //Startar spelet och nollställer räknare
    this.startTimer(event)
    this.__count.count = 0 //nollställa räknare när vi startar ny spel
    event.target.disabled = true;  //Låser startknappen
  }
  startTimer(event: any) {  //Timer funktion som räknar ner från 60 sekunder
    this.interval = setInterval(() => {
      if(this.remainingTime > 0) {  //Kör så länger remainingTime är mer än 0
        this.remainingTime--;
      } else {
        this.remainingTime = 60; //Låser upp startknappen och återställer remainingTime till 60
        event.target.disabled = false;
        clearInterval(this.interval) //Avslutar funktionen
      }
    },1000 )
    
  }
}


