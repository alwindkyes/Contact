import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  [x: string]: any;



  myDestroy: Subscription;

  constructor() { }

  contactList = [];

  ngOnInit(): void {


    const myObs$ = new Observable(obs => {

      obs.next("Austin Aries");
      obs.next("Bobby Roode");
      // obs.complete();

      obs.next("AJ Styles");

      // obs.error("Error occured !");

      setTimeout(() => {
        obs.next("Eric Young");
      }, 1000);
      console.log("SetTimeOut");


    });

    this.myDestroy = myObs$.subscribe(sub => {
      console.log(sub);
    },
      error => {
        console.log("Error: " + error);

      },
      () => {
        console.log("Completed !");

      }
    );
    this.myDestroy.unsubscribe();



  }
  user = {
    userId: 20,
    firstName: 'Daniel',
    lastName: 'GARCIA',
    dob: '02/22/2003',
    salary: 20000.57
  }

  userDetail = [
    {
      firstName: 'Eddie',
      lastName: 'Kingston',
      promotion: 'AEW'
    },
    {
      firstName: 'Dante',
      lastName: 'Martin',
      promotion: 'AEW'
    },
    {
      firstName: 'Cedric',
      lastName: 'Alexander',
      promotion: 'WWE'
    }
]

}

