import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  url ="http://localhost:3000"

  get_report_account(body : any){
    return this.http.post(`${this.url}/get_report_account` ,body)
  }

  get_report_post(body : any){
    return this.http.post(`${this.url}/get_report_post` ,body)
  }
  
  get_report_img(body : any){
    return this.http.post(`${this.url}/get_report_img` ,body)
  }
  
  vu_report_post(body : any){
    return this.http.post(`${this.url}/vu_report_post` ,body)
  }

  del_report_post(body : any){
    return this.http.post(`${this.url}/del_report_post` ,body)
  }
  


  get_report_acc(body : any){
    return this.http.post(`${this.url}/get_report_acc` ,body)
  }
  vu_report_acc(body : any){
    return this.http.post(`${this.url}/vu_report_acc` ,body)
  }
  dis_report_acc(body : any){
    return this.http.post(`${this.url}/dis_report_acc` ,body)
  }
  
  get_disabled(body : any){
    return this.http.post(`${this.url}/get_disabled` ,body)
  }
  enable_acc(body : any){
    return this.http.post(`${this.url}/enable_acc` ,body)
  }
}
