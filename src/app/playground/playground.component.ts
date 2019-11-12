import {Component} from '@angular/core';


import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})

export class PlaygroundComponent {

  // 官方文档上说的是 var observable = Rx.Observable.create(<function>)
  // 那是对于javascript来说的,对于angular来说,直接new一个Observable就可以了!!!!
  observable = new Observable(
    function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    }
  );

  // 注意要用this.observable就可以access这个Observable了
  constructor() {
    this.observable.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
  }
}
