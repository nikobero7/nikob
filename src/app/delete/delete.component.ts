import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit{
  bookedData: any;
    constructor(public api:ApiService) {}

  ngOnInit(): void {
    this.showBooks()
  }
  showBooks() {
    this.api.getBookedRooms().subscribe((data: any) => {
      console.log(data);
      this.bookedData = data
      
    }) }
  
  
    deleteRoom(id:any) {
     this.api.deleteData(id).subscribe(data => {
      alert(data);
      
     })
  
    }
}
