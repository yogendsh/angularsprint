import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-hmscomponent',
  templateUrl: './hmscomponent.component.html',
  styleUrls: ['./hmscomponent.component.scss']
})
export class HmscomponentComponent implements OnInit {

  constructor(private route:Router) { }
flaglogin:boolean=false;
myControl = new FormControl();
options: string[] = ['Taj', 'Paradise', 'MahaLaxmi'];
filteredOptions: Observable<string[]>;

ngOnInit() {
  this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}
  bookMove(){
    this.route.navigateByUrl('book');
  }
  cancelMove(){
    this.route.navigateByUrl('cancel');
  }

  
  login(){
this.flaglogin=true;
  }
  logout(){
    this.flaglogin=true;
  }
}
