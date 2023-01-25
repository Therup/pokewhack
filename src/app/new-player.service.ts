import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { CounterService } from './counter.service';
import { topScore } from './topScore';

@Injectable({
  providedIn: 'root',
})
export class NewPlayerService {
  playerPoint = this.__count.count;
  nameOfPlayer: any; //Observable
  name: any;
  start: number
  end: number
  timeTaken: number
  bestTime: number[] = []
  playerBestTime:number
  newPlayer: topScore = { player: '', points: this.playerPoint, reactiontime: this.bestTime[0]  }; //Stoppar in data i newPlayer som vi sedan skickar till firebase
  id: string;

  constructor(
    private __afs: AngularFirestore,
    private __router: Router,
    private __activatedRoute: ActivatedRoute,
    public __count: CounterService
  ) {}

  
    

 
reaction() {
  this.__count.onPlus() //Ger oss poäng
  this.end = performance.now(); //Här slutar tiden räknas
  this.timeTaken = Math.trunc( this.end - this.start); //Vi tar bort decimaler
  this.bestTime.unshift(this.timeTaken)
  this.bestTime.sort(function(a, b) { //Sorterar så att vi får lägsta värdet först i vår array
  return a - b; 
});
}


  openGame() {
    //Lägger in namn på spelaren och skickar oss vidare till spelplanen
    this.newPlayer.player = this.nameOfPlayer;
    this.__router.navigate(['game']);
  }
  onSubmit() {
    this.__afs.collection('score').add(this.newPlayer); //Lägger till i firebase
  }
  addPoint() {
    this.newPlayer.points = this.__count.count; //Räknarens poäng läggs till hos ny spelare
    console.log(this.newPlayer.points);
    this.__router.navigate(['game']);
  }

  ngOnInit(): void {
    console.log(100);
    this.__activatedRoute.params.subscribe((p) => {
      //Vi prenumererar på en observable
      this.id = p['id'];
    });
    let doc: AngularFirestoreDocument<topScore> = this.__afs.doc('score');
    doc.valueChanges().subscribe((topScore) => {
      //Subscribe på observable
      this.newPlayer = topScore;
    });
  }
}
