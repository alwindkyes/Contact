import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  
  contactList: any = [];
  openform: boolean = false;
  editForm: any;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactList = this.contactsService.getContacts().subscribe(data => {
      this.contactList = data;
      console.log(data);
    })
  }

  // Http Post Method !
  // addNewContact() {
  //   const newFormData = { 'id': 16, 'firstName': 'Alexa', 'lastName': 'Bliss'}

  //   this.contactsService.createContact(newFormData).subscribe(data => {
  //     console.log(data);
  //   })
  // }

  addNewContact(form) {
      // const newFormData = { 'id': 16, 'firstName': 'Alexa', 'lastName': 'Bliss'}

      // console.log(form.value.id);
      // console.log(form.value.firstName);
      // console.log(form.value.lastName);
  
      const newFormData = { 'id': form.value.id, 'firstName': form.value.firstName, 'lastName': form.value.lastName}
      
      this.contactsService.createContact(newFormData).subscribe(data => {
        console.log('added !' ,data);
      })
      this.updateUI();
      this.showFunction();
    }

  // updateContact(contactId) {
  //   const newFormData = { 'id': contactId, 'firstName': 'Solo', 'lastName': 'Sikova'}

  //   this.contactsService.updateContact(contactId, newFormData).subscribe(data => {
  //     console.log('Updated!', data);
  //   })
  //   this.updateUI();
  // }
  show = false;
  showFunction() {
    this.show = !this.show;
  }
  
  updateContact(contactId) {
    // this.showFunction();
    // var value = confirm("Are you sure to edit?");
    console.log('edited!');
   
    // contactId = this.contactList.id;
    // contactFirstName = this.contactList.firstName;
    // contactLastName = this.contactList.lastName;
    
    // if(value) {
      const newFormData = { 'id': contactId, 'firstName': this.contactList.firstName, 'lastName': this.contactList.lastName};

      this.contactsService.updateContact(contactId, newFormData).subscribe(data => {
        console.log('again edited!');
        console.log(data);
        this.contactList = data;
      })
      this.updateUI();
    // }
  }

  // editContact(editedData) {

  //   const editFormData = { 'id': editedData.value.id, 'firstName': editedData.value.firstName, 'lastName': editedData.value.lastName}
  //   console.log('Edit Form Data', editFormData);
    
  //   console.log('edit form working', editedData.value);
    
  //   this.contactsService.updateContact(editedData, editFormData).subscribe(data => {
  //     console.log('again edited!');
  //     console.log(data);
  //   })
  //   this.updateUI(); 
  // }

  editOnForm() {
    console.log('edit on form function works !');
    
    this.contactList.id = document.getElementById('id');
    console.log(this.contactList.id);
    
    this.contactList.firstName = document.getElementById('firstName');
    console.log(this.contactList.firstName);

    this.contactList.lastName = document.getElementById('lastName');
    console.log(this.contactList.lastName);
    
  }

  deleteContact(contactId) {
  
    var result = confirm("Are you sure to delete?");

    if(result) {
      console.log("Deleted");
      this.contactsService.deleteContact(contactId).subscribe(data => {
        console.log('deleted!', data);
        this.contactList = data;
      })
      this.updateUI();
    }
  }

  // deleteContact(contactId) {
  //   confirm("Are you sure to delete?");
  //   this.contactsService.deleteContact(contactId).subscribe(data => {
  //       console.log('deleted!', data);
  //     })
  //     this.updateUI();   
  // }

  updateUI() {
    this.contactList = this.contactsService.getContacts().subscribe(data => {
      this.contactList = data;
      console.log(data);
    })
  }

  onClickOpenForm(){
    this.openform = true;
    return this.openform;
    }

  getContact() {
    this.contactsService.getContactById().subscribe(data => {
      console.log('hello', data);
    })
  }

  setDefaults(contactId, contactFirstName, contactLastName) {
    console.log('set default is working');
    this.contactList.id = contactId;
    this.contactList.firstName = contactFirstName;
    this.contactList.lastName = contactLastName;
    // console.log(this.contactList.id, this.contactList.firstName, this.contactList.lastName);
    
    console.log(contactId, contactFirstName, contactLastName);
    this.showEdit();
    
    // this.addNewContactForm.setValue(this.contactList.id, this.contactList.firstName, this.contactList.lastName);
  }
  showEditVar: boolean = false;
  showEdit() {
    this.showEditVar = !this.showEditVar;
  }
}






































































  //   msgTrue = false;
//   contactList: any;

//   constructor(public contactService: ContactsService) { }


//   ngOnInit(): void {
//     this.contactList = this.contactService.getContacts().subscribe(data => {
//       this.contactList = data;
//     })
//   }
//   addNewContact(form) {
//     //Mock Data
//     //const newFormData = { id: '6', firstName: 'Claudio', lastName: 'Castagnoli' };
//     //Dynamic Data
//     console.log(form.value.id);
//     console.log(form.value.firstName);
//     console.log(form.value.lastName);
//     const newFormData = { id: form.value.id, firstName: form.value.firstName, lastName: form.value.lastName };

//     this.contactService.createContact(newFormData).subscribe(data => {
//       console.log(data);
//       this.msgTrue = true;
//     })
//   }
//   updateContact(contactId) {
//     //Mock Data
//     const newFormData = { id: contactId, firstName: 'Bryan', lastName: 'Danielson' };
//     this.contactService.updateContact(contactId, newFormData).subscribe(data => {
//       this.msgTrue = true;
//     });
//   }
//   deleteContact(contactId) {
//     this.contactService.deleteContact(contactId).subscribe(data => {
//     this.msgTrue = true;
//     });
//   }
//   getContact() {
//     this.contactService.getContactById().subscribe(data => {
//       console.log(data);
      
//       this.msgTrue = true;
//     }) 
//   }

//   array = ['Seth', 'Dean', 'Rey', 'Edge'];
// }





//param passing 


