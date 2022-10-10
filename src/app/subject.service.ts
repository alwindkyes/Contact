import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  sub: Subject<number>;
  obs$: Observable<number>;
  private behSub: BehaviorSubject<number>;
  behObs$: Observable<number>;
  private replaySub: ReplaySubject<number>;
  replayObs$: Observable<number>;

  constructor() {
    this.sub = new Subject<number>();
    this.obs$ = this.sub.asObservable();
    this.behSub = new BehaviorSubject<number>(1000);
    this.behObs$ = this.behSub.asObservable();
    this.replaySub = new ReplaySubject<number>(2);
    this.replayObs$ = this.replaySub.asObservable();
  }

  sendReplayData(data: number) {
    this.replaySub.next(data);
  }

  sendBehData(data: number) {
    this.behSub.next(data);
  }

  sendData(data: number) {
    this.sub.next(data);
  }
}