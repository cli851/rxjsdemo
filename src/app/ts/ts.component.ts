import {Component, OnInit} from '@angular/core';
import * as Rx from 'rxjs';
import 'rxjs-compat/add/observable/fromEvent';
import 'rxjs-compat/add/operator/map';



@Component({
  selector: 'app-ts',
  templateUrl: './ts.component.html',
  styleUrls: ['./ts.component.css']
})
export class TsComponent implements OnInit {
  
  constructor() {

  }

  ngOnInit() {
    let todo = document.getElementById('todo');
    let input$ = Rx.Observable.fromEvent(todo, 'keyup');
    input$
      .map(ev=>ev.target.value)
      .subscribe(value=>console.log(value));
  }


}
