import { Injectable, Input, Output, EventEmitter } from '@angular/core'; //Importerar input, output och eventemitter



@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(

  ) { }

  
  @Input() count: number ; 
  @Output() countUpdatePlus = new EventEmitter<number>(); 

  

  onPlus() {
    this.count++;
    this.countUpdatePlus.emit(this.count); // Kommer att emmitta en uppdaterad räknare
}

}
