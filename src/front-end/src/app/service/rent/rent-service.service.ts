import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Irent} from '../../models/rent/Irent';


@Injectable({
  providedIn: 'root'
})
export class RentServiceService {
API = environment.API_URL
  constructor(private http : HttpClient) { }

  getListRentByCCDV(id:number) :Observable<Irent[]> {
  return this.http.get<Irent[]>(this.API + "/rents/user/" + id)
  }
  getListRentBySDDV(id : number) :Observable<Irent[]> {
  return this.http.get<Irent[]>(this.API +  '/rents/user-rent/' + id)
  }

  // @ts-ignore
  changeStatus(id : number , status : number) : Observable<Rent> {
  // @ts-ignore
   return  this.http.put<Rent>(this.API + '/rents/status/' + id + '?status=' + status )

  }
  getById(id : number) : Observable<Irent>{
  return this.http.get<Irent>(this.API + '/rents/' + id)

  }
  deleteRent(id : number) : Observable<Irent> {
  return  this.http.delete<Irent>(this.API + '/rents/user-sddv/' + id)
  }
  getAllRent(): Observable<Irent[]> {
  return this.http.get<Irent[]>(this.API + '/admin/rent')
  }

}
