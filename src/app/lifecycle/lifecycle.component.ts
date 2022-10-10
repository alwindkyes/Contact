import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnDestroy, OnChanges{

  @Input() name: string;

  constructor() { 
    // console.log(this.name);
    
  }
  timeoutInstance = null;

  ngOnInit(): void {
    // console.log('Component Initialized !');
    console.log('ngOnInit');
    

    // this.timeoutInstance = setInterval(() => {
    //   console.log(new Date());  
    // }, 1000)
  }

  ngOnDestroy() {
    console.log('Component Destroyed !');

    if(this.timeoutInstance) {
      clearInterval(this.timeoutInstance);
    }
  }

  ngOnChanges(changes){
    console.log('On Changes', changes);
    
  }

}
