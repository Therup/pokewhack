import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,} from '@angular/fire/compat/firestore';
import { TimerService } from '../timer.service';
import { CounterService } from '../counter.service';
import { topScore } from '../topScore';
import { NewPlayerService } from '../new-player.service';
import { map } from 'rxjs';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  highScoreList!: AngularFirestoreCollection<topScore>; //Vi kollar på kollektionen
  topScores: any; //En observable
  points: number;

  constructor(
    public __timer: TimerService, //måste ha för att kunna koppla component med service
    public __count: CounterService, //måste ha för att kunna koppla component med service
    private __afs: AngularFirestore,
    public __player: NewPlayerService,
    public __game: GameService
  ) {}

  clear() {
    this.__count.count = 0;
  }

  ngOnInit(): void {
    this.highScoreList = this.__afs.collection('score', (ref) =>
      ref.orderBy('points').limitToLast(10)
    ); // Vi begränsar till 10st i highscorelist och rangordnar efter points
    this.topScores = this.highScoreList.snapshotChanges().pipe(
      map((action) => {
        return action.map((a) => {
          const data = a.payload.doc.data() as topScore; //Hämtar på spelare
          const id = a.payload.doc.id; //Hämtar ID
          return { id, data };
        });
      })
    );
  }
}
