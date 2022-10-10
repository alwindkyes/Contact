import { Component, OnChanges, OnInit, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  name: string;
  value: string = 'Angular';

  constructor() { }

  ngOnInit(): void {
    console.log('C ngOnInit'); 
  }

  ngOnChanges() {
    console.log('C ngOnChanges'); 
  }

  ngOnDestroy() {
    console.log('C ngOnDestroy');
  }

  ngDoCheck() {
    console.log('C ngDoCheck'); 
  }

  ngAfterViewInit(){
    console.log('C ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('C ngAfterViewChecked');
  }

  ngAfterContentInit(){
    console.log('C ngAfterContentInit');  
  }

  ngAfterContentChecked(){
    console.log('C ngAfterContentChecked');
  }




}