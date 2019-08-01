import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HmsserviceService } from '../hmsservice.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {
  bookid:number;
  message: any;
  flag:boolean=false;
  flag2:boolean=false;
  constructor(private route:Router,private service:HmsserviceService) { }

  ngOnInit() {
  }
  
  bookMove(){
    this.route.navigateByUrl('book');
  }
  homeMove(){
    this.route.navigateByUrl('hms');
  }
  getService(){
   this.service.getCancel(this.bookid).subscribe(
      resp=>{this.message=resp;this.flag=true;
      },
      error=>this.flag2=true);
  }
  

}
