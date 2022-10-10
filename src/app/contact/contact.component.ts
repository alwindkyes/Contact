import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactList: any = [];
  openform: boolean = false;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(data => {
      this.contactList = data;
      console.log(data);
    })
  }

  addNewContact(form) {
    const newFormData = { 'id': form.value.id, 'firstName': form.value.firstName, 'lastName': form.value.lastName }

    this.contactsService.createContact(newFormData).subscribe(data => {
      console.log('added !', data);
    })
    this.updateUI();
    this.showFunction();
  }

  updateContact(contactId) {
    var value = confirm("Are you sure to edit?");
    console.log('edited!');

    if (value) {
      const newFormData = { 'id': contactId, 'firstName': this.contactList.firstName, 'lastName': this.contactList.lastName };

      this.contactsService.updateContact(contactId, newFormData).subscribe(data => {
        console.log('again edited!');
        console.log(data);
        this.contactList = data;
      })
      this.updateUI();
      this.showEdit()
    }
  }

  deleteContact(contactId) {
    var result = confirm("Are you sure to delete?");

    if (result) {
      console.log("Deleted");
      this.contactsService.deleteContact(contactId).subscribe(data => {
        console.log('deleted!', data);
        this.contactList = data;
      })
      this.updateUI();
    }
  }

  updateUI() {
    this.contactList = this.contactsService.getContacts().subscribe(data => {
      this.contactList = data;
      console.log(data);
    })
  }

  show: boolean = false;
  showFunction() {
    this.show = !this.show;
  }

  showEditVar: boolean = false;
  showEdit() {
    this.showEditVar = !this.showEditVar;
  }

  getContact() {
    this.contactsService.getContactById().subscribe(data => {
      console.log('hello', data);
    })
  }

  setEditValues(contactId, contactFirstName, contactLastName) {
    this.contactList.id = contactId;
    this.contactList.firstName = contactFirstName;
    this.contactList.lastName = contactLastName;
    this.showEdit();
  }

  editContact(contactId) {
    console.log('editContact Works!');
    
    this.updateContact(contactId);
  }
}
