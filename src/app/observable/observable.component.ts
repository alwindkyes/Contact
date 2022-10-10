import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  // orderStatus : any;
  // data: Observable<any>;
  // data2: Observable<any>;

  fromSub = null;
  isSub = false;
  count = 0;

  constructor(private subjectService: SubjectService) {

    this.subjectService.sub.subscribe(data => {
      // console.log('From observable component', data);
      this.fromSub = data;
    })

    this.subjectService.replayObs$.subscribe(data => {
      console.log('From Subject replaySub', data);
    })
    // this.subjectService.sub.subscribe(data => {
    //   console.log('From observable component', data);
    //   this.fromSub = data;
      
    // })

    // //creating observable
    // var obs$: Observable<any> = of(1, 2, 3);

    // obs$.subscribe(data => {
    //   console.log(data);
    // })

    // //creating subject
    // var sub: Subject<any> = new Subject();

    // sub.subscribe(data => {
    //   console.log('From app Subject', data);
    // })
    // sub.next('Solo Sikova')

    // sub.subscribe(data => {
    //   console.log('From app subject', data);
    // })
    // sub.next('Carmello  Hayes');
    
  }
    
  getData() {
    this.subjectService.sendData(Math.random());
    this.subjectService.sendBehData(Math.random());
    this.subjectService.sendReplayData(Math.random());
    
    if (!this.isSub) {
      this.isSub = true;
      this.subjectService.behObs$.subscribe(data => {
        console.log('From Observable behSub', data);
      })
    }

    this.count++;

    if (this.count == 3) {
      this.subjectService.replayObs$.subscribe(data => {
        console.log('From Observable replaySub', data);
      })
    }
  }

  ngOnInit(): void {
    // this.data = new Observable(observer => {

    //   setTimeout(() => {
    //     observer.next('In progress')
    //   }, 2000);

    //   setTimeout(() => {
    //     observer.next('Processing...')
    //   }, 4000);

    //   setTimeout(() => {
    //     observer.next('Completed !')
    //   }, 6000);
      

      // setTimeout(() => {
      //   observer.complete();
      // }, 3000)

      // setTimeout(() => {
      //   observer.error();
      // }, 5000)

    // })
    
    // this.data.subscribe(val => {
    //   this.orderStatus = val
    // });

    // this.data2 = new Observable(observer => {

    //   setTimeout(() => {
    //     observer.next('Adam Cole')
    //   }, 1000);

    //   setTimeout(() => {
    //     observer.next('Roderick Strong')
    //   }, 2000);

    //   setTimeout(() => {
    //     observer.next('Bobby Fish')
    //   }, 3000);
    // });

    //   this.data2.subscribe(val => {
    //     this.orderStatus = val
    //   });

  }

}
function getData() {
  throw new Error('Function not implemented.');
}

