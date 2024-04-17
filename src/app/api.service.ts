import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }


  deleteData(bookID:any) {
    return this.http.delete(`https://hotelbooking.stepprojects.ge/api/Booking/${bookID} `, {responseType: "text"})
  }
  getBookedRooms() {
    return this.http.get("https://hotelbooking.stepprojects.ge/api/Booking")
  }
}
