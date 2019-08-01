import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDetail } from '../details';
import { HmsserviceService } from '../hmsservice.service';
// declare var moment: any;
import * as moment from 'moment';


const now = new Date(),
  yesterday = new Date(new Date().setDate(new Date().getDate() - 1)),
  tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)),
  nextMonths = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  model:any;
  public check=true;
  public response=false;
  public message=[];
  public bookRoom:IDetail={checkin:'null',checkout:'null',
  numberOfPersons:0,
  roomType:'null'};
  constructor(private route:Router,private service:HmsserviceService) { }
  topics=[1,2,3];
  type=['Ac','Non Ac','King Size','Queen Size'];
  topicHasError=true;
  cout:string;
  cin:string;
  nperson:number;
  room:string;
  flag3:boolean=false;
  flag4:boolean=false;
validateTopic(value){
if(value==="default"){
  this.topicHasError=true;
}else{
  this.topicHasError=false;
}
}
  ngOnInit() {
   
  }
  cancelMove(){
    this.route.navigateByUrl('cancel');
  }
  homeMove(){
    this.route.navigateByUrl('hms');
  }
  // minDate = moment(new Date()).format('DD-MM-YYYY');
  // maxDate ="07-01-2020";
  
  addbook(){
this.bookRoom.checkin=this.cin;
this.bookRoom.checkout=this.cout;
this.bookRoom.numberOfPersons=this.nperson;
this.bookRoom.roomType=this.room;
console.log(this.bookRoom);
this.service.sendBookRoom(this.bookRoom).subscribe(resp=>{this.message=resp,
  this.flag3=true;
      },
      error=>this.flag4=true);
}
  login(){


  }
 
  
}

