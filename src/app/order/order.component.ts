import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paramQuery1 = '';
  paramQuery2 = '';
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      this.paramQuery1 = data.id1;
      this.paramQuery2 = data.id2;
    });
    this.activatedRoute.queryParams.subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }
  
}
