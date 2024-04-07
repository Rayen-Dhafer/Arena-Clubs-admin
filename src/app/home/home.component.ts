import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { NgModule }      from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uploadUrl = this.api.url+'/'
  title = 'Reports accounts';
  reports : any = []
  body = { }
  timerInterval=100000
  vide = Array(9).fill(0); 
  constructor( private service : ServiceService, private router: Router, private api: ApiService  ) { }
  async ngOnInit(): Promise<void> {

  

  
    


if(this.service.login){
  await Swal.fire({
    title: 'Loading...',
    html: `I will close in <b></b> milliseconds.`,
    timer: 2500,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading() 
    },
  })
}


    this.api.get_report_account(this.body).subscribe((result : any)=>{  this.reports=result.reports  })



  }

  

  change_a(){
    this.title = 'Reports accounts';
    this.api.get_report_account(this.body).subscribe((result : any)=>{  this.reports=result.reports  })

  }
  change_p(){
    this.title = 'Reports posts';
    this.api.get_report_post(this.body).subscribe((result : any)=>{  this.reports=result.reports  })

  }
  change_d(){
    this.title = 'Accounts disabled';
    this.api.get_disabled(this.body).subscribe((result : any)=>{  this.reports=result.disabled  })

  }

  go(rep:any){
    let body = { id: rep._id}
    this.service.report=rep
    this.service.login=false
    if(this.title == 'Reports posts')
    {
      this.api.vu_report_post(body).subscribe((result : any)=>{    })
      this.router.navigate(['/Post'])
    }
    else{
      
      this.api.vu_report_acc(body).subscribe((result : any)=>{    })
      this.router.navigate(['/Compte'])
    }
    
  }

  
  enable(id:any){
    let body = { id: id}
    this.api.enable_acc(body).subscribe((result : any)=>{   })
    let i = 0
  for (let acc  of this.reports ){
    if(id == acc._id){
      delete this.reports[i]
    }
    i++
  }
  }


}

