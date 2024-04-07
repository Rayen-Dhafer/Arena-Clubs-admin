import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { NgModule }      from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  
  uploadUrl = this.api.url+'/'
  title = 'Reports accounts';
  report : any = []
  acc : any
   body = { email : this.service.report.report_account}
  vide = Array(9).fill(0); 
  constructor( private service : ServiceService, private router: Router, private api: ApiService  ) { }
  ngOnInit(): void {
    this.report = this.service.report
    this.api.get_report_acc(this.body).subscribe((result : any)=>{  this.acc=result.acc  })
      
  }

  back(){
    this.router.navigate(['/Home'])
  }

  del(){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Disable it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.api.dis_report_acc(this.body).subscribe((result : any)=>{  this.acc=result.img  })


        Swal.fire(
          'Disable!',
          'Account has been disable.',
          'success'
        ).then((result) => {this.back()})
        
      }
    })
  }
}
