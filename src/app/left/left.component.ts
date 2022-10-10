import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  contactList: { contactId: number; contactName: string; }[];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  function() {
    this.router.navigate(['/right'], { skipLocationChange: true} );
  }
}
