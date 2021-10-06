import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IRentDetail} from '../../models/rent_detail/irent-detail';
import {Observable} from 'rxjs';

const API_URL = environment.API_URL + '/rent_detail';

@Injectable({
  providedIn: 'root'
})
export class RentDetailService {

  constructor(private http: HttpClient) {
  }

  createRentDetail(rentDetail: IRentDetail): Observable<IRentDetail> {
    return this.http.post<IRentDetail>(API_URL, rentDetail);
  }
  getByRentId(id : number): Observable<IRentDetail[]> {
    return this.http.get<IRentDetail[]>(API_URL +'/find/' + id)
  }
  getByServiceId(id : number) : Observable<IRentDetail[]> {
    return this.http.get<IRentDetail[]>(API_URL +'/service/' + id)
  }

}
