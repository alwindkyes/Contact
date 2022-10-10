import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, fromEvent, interval, map, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit, OnDestroy {

  myDestroy: Subscription;
  constructor() { }

  
  
  
  ngOnInit(): void {
    // const number$ = interval(1000).pipe(take(5));

    // this.myDestroy = number$.subscribe( sub => {
    //   console.log(sub);
    // });

    // const of$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(filter(f => f % 2 == 0 ), map( m => m *100));

    // of$.subscribe( sub => {
    //   console.log(sub);
    // });


const el = document.getElementById('my-element')!;

// Create an Observable that will publish mouse movements
const mouseMoves = fromEvent<MouseEvent>(el, 'click');

// Subscribe to start listening for mouse-move events
const subscription = mouseMoves.subscribe(evt => {
  // Log coords of mouse movements
  console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

  // When the mouse is over the upper-left of the screen,
  // unsubscribe to stop listening for mouse movements
  if (evt.clientX < 40 && evt.clientY < 40) {
    subscription.unsubscribe();
  }
});

  }
  ngOnDestroy(): void {
    this.myDestroy.unsubscribe();
  }

  
}
