import { Component, OnChanges, OnInit, OnDestroy, DoCheck, AfterViewInit, ViewChild, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked{

  @ViewChild(FieldComponent, {static: false}) viewChild: FieldComponent;
  count = 0;

  constructor() { }

  ngOnInit(): void {
    console.log('P ngOnInit', this.viewChild); 
  }

  ngOnChanges() {
    console.log('P ngOnChanges');
    
  }

  ngOnDestroy() {
    console.log('P ngOnDestroy'); 
  }

  ngDoCheck() {
    console.log('P ngDoCheck'); 
  }

  ngAfterViewInit() {
    console.log('P ngAfterViewInit', this.viewChild);
  }

  ngAfterViewChecked(){

    if(this.count < 5) {
      ++this.count;
    }

    console.log('P ngAfterViewChecked');
    
    //setTimeout(() => {
      this.viewChild.value= 'New Value' +
      this.count++;
    // }, 0);
  }

  ngAfterContentInit(){
    console.log('P ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('P ngAfterContentChecked');
  }





}
