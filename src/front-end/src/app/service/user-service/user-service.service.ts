import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IuserService} from '../../models/userService/Iuser-service';

const API_URL = environment.API_URL + '/user-services';
const API_Edit = environment.API_URL + '/usersCCDV';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) {
  }

  create(userService: IuserService): Observable<IuserService> {
    return this.httpClient.post<IuserService>(API_URL, userService);
  }

  findByUserId(id: number): Observable<IuserService[]> {
    // @ts-ignore
    return this.httpClient.get<IuserService[]>(API_URL + `/${id}`);
  }


  updatePrice(id: number, usService: IuserService): Observable<IuserService>{
    return this.httpClient.put<IuserService>(API_URL + `/${id}`,usService);
}
  getUserEditPrice(id : number) :Observable<IuserService> {
    // @ts-ignore
    return  this.httpClient.put<IuserService>(API_Edit + '/usersCCDV/' + id);

  }
  findOne(id: number): Observable<IuserService> {
    // @ts-ignore
    return this.httpClient.get<IuserService>(API_URL +"/findOne" + `/${id}`);
  }



}
