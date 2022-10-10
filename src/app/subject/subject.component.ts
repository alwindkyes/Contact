import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  fromSub = null;
  isSub = false;
  
  constructor(private subjectService: SubjectService) {
    // this.subjectService.sub.subscribe(data => {
    //   console.log('From Subject Component', data);
    //   this.fromSub = data;
    // })
    this.subjectService.obs$.subscribe(data => {
      console.log('From Subject obs$', data);
      this.fromSub = data;
    })

    this.subjectService.behObs$.subscribe(data => {
      console.log('From Subject behSub', data);
    })

    this.subjectService.replayObs$.subscribe(data => {
      console.log('Form Subject ReplayObs$', data);
      
    })
  }
  
  // getData() {
  //   this.subjectService.sendData(Math.random());
  //   this.subjectService.sendBehData(Math.random())

  //   if (!this.isSub) {
  //     this.isSub = true;
  //     this.subjectService.behObs$.subscribe(data => {
  //       console.log('From Subject behSub', data);
  //     })
  //   }
  //}
  
  
  // constructor(private actiavtedRouting: ActivatedRoute) {
  //   this.actiavtedRouting.queryParams.subscribe( data => {
  //     console.log(data);
  //   })
  // }

  ngOnInit(): void {
  }

}
