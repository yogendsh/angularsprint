import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HmscomponentComponent } from './hmscomponent/hmscomponent.component';
import { BookComponent } from './book/book.component';
import { CancelComponent } from './cancel/cancel.component';


const routes: Routes = [{path:'',redirectTo:'hms',pathMatch:'full'},
{
  path: 'hms',
  component: HmscomponentComponent
  
},
{
  path: 'book',
  component: BookComponent
},
{
  path: 'cancel',
  component: CancelComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
