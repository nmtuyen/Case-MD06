import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Irent} from '../../models/rent/Irent';
import {Observable} from 'rxjs';

const API_URL = environment.API_URL + '/rents';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http: HttpClient) {
  }

  creatRent(rent: Irent): Observable<Irent> {
    return this.http.post(API_URL, rent);
  }
  showTop6(): Observable<Irent[]>{
    return this.http.get<Irent[]>(API_URL + "/top6")
  }
}
