import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { NgModule }      from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
    uploadUrl = this.api.url+'/'
    title = 'Reports accounts';
    report : any = []
    img : any
     body = { image : this.service.report.report_post}
    vide = Array(9).fill(0); 
    constructor( private service : ServiceService, private router: Router, private api: ApiService  ) { }
    ngOnInit(): void {
      this.report = this.service.report
      this.api.get_report_img(this.body).subscribe((result : any)=>{  this.img=result.img  })
        
    }
  
    back(){
      this.router.navigate(['/Home'])
    }
  
    del(){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          this.api.del_report_post(this.body).subscribe((result : any)=>{  this.img=result.img  })


          Swal.fire(
            'Deleted!',
            'Post has been deleted.',
            'success'
          ).then((result) => {this.back()})
          
        }
      })
    }
  }
  