import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [ //Våra routes
  {path: '', component: PlayerComponent},
  {path: 'game', component: BoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
