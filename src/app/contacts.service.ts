import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }

  getContacts () {
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'CMPunk',
      'timeOutSeconds': '3000' 
    });
    //headers are immutable

    //custom headers
    httpHeaders = httpHeaders.set('arc-tutorials-id', '114');

    let time = httpHeaders.get('timeOutSeconds');

    if (time === '3000') {
      httpHeaders = httpHeaders.set('Authorization', '')
    }

    return this.httpClient.get('http://localhost:3002/contacts', { headers: httpHeaders });
  }

  createContact(createbody) {
    return this.httpClient.post('http://localhost:3002/contacts', createbody);
    // return this.httpClient.post('https://jsonplaceholder.typicode.com/users', createbody);
  }

  updateContact(contactId, updatedBody) {
    // const endpointUrl = 'http://localhost:3002/contacts/' + contactId;
    return this.httpClient.put('http://localhost:3002/contacts/'+ contactId, updatedBody)        
  }

  deleteContact(contactId) {
    // const deleteEndpointUrl = 'http://localhost:3002/contacts/' + contactId;
    return this.httpClient.delete('http://localhost:3002/contacts/' + contactId);
  }

  getContactById () {

    const httpParams = new HttpParams({
      fromObject: {
        id: ['4', '5'],
        lastName: 'Lashley'
      }
      //
    })
    return this.httpClient.get('http://localhost:3002/contacts', { params: httpParams });

  }
}               
