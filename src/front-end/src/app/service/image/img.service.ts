import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Img} from '../../models/image/img';

const API_URL = environment.API_URL + '/images';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private http: HttpClient) {
  }

  getImgByIdUs(id: number): Observable<Img[]> {
    return this.http.get<Img[]>(API_URL + `/${id}`);
  }

  createImg(img: Img): Observable<Img> {
    return this.http.post<Img>(API_URL, img);
  }
  findImgById(id: number): Observable<Img> {
    return this.http.get<Img>(API_URL + '/img/' + id);
  }

  updatePlayer(id: number, img: Img): Observable<any> {
    return this.http.put(`/${id}`, img);
  }
}
