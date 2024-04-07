import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { CompteComponent } from './compte/compte.component';

const routes: Routes = [

  {
    path: "",
    component:HomeComponent
  },

  {
    path: "Post",
    component:PostComponent
  },

  {
    path: "Compte",
    component:CompteComponent
  },

  {
    path: "Home",
    component:HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
