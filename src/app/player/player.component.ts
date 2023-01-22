import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { NewPlayerService } from '../new-player.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { topScore } from '../topScore';
import { map } from 'rxjs';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit{
  constructor(
    public __player: NewPlayerService,
    public __count: CounterService,
    public __afs: AngularFirestore,
  ) {}
  highScoreList!: AngularFirestoreCollection<topScore>;
  topScores: any;

  ngOnInit(): void {
    this.highScoreList = this.__afs.collection('score', ref => ref.orderBy('points').limitToLast(10))  // Vi begränsar till 10st i highscorelist  
    this.topScores = this.highScoreList.snapshotChanges().pipe(      
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data() as topScore;
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
     
    )
  }
}
