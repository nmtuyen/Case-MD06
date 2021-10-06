import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';
import {City} from '../../models/city';
import {IuserService} from '../../models/userService/Iuser-service';

const API_URL = environment.API_URL + '/usersSDDV';

const API_URL2 = environment.API_URL + '/usersCCDV'

const API_CCDV = environment.API_URL + '/usersCCDV'

const API_ADMIN = environment.API_URL + '/admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL2);
  }


  saveUser(id: number, user: User): Observable<User> {
    // @ts-ignore
    return this.httpClient.put<User>(API_CCDV + `/` + id, user);
  }

  getListCity(): Observable<City[]> {
    return this.httpClient.get<City[]>('https://provinces.open-api.vn/api/p/');

  }

  getCCDVById(id: number): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/user/${id}`)
  }

  get12NewCCDV(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL + `/get12new`)
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/user` + `/${id}`)

  }

  updateUser(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(API_URL2 + "/" + id, user);
  }

  updateAvt(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(API_URL2 + "/avatar/" + id, user);
  }

  updatePassword(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(API_URL2 + "/password/" + id, user);
  }

  findByName(name: string): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/search-name?name=` + `${name}`)
  }

  findByCity(city: string): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/search-city?city=` + `${city}`)
  }

  findByGender(gender: string): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL + `/search-gender?gender=` + `${gender}`)
  }

  findByAge(age1: number, age2: number): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/search-age?age1=` + `${age1}` + `&age2=` + `${age2}`)
  }

  savePriceUser(id : number, price : any) : Observable<User> {
    // @ts-ignore
    return this.httpClient.put<User>(API_CCDV + '/price/' + id + '?price=' + price)
  }

  // Chuyển trạng thái busy/ss
  changeStatus(id: number): Observable<IuserService> {
    // @ts-ignore
    return this.httpClient.put<IuserService>(API_URL2 + `/status-ccdv`+ `/${id}`);

  }
  findUserByMessage(id: number): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL + `/messages/${id}`)
  }

  // Chuyển trạng thái User thành người CCDV
  changeStatusCCDV(id: number): Observable<User> {
    // @ts-ignore
    return this.httpClient.put<User>(API_ADMIN + `/userCCDV` + `/${id}`);
  }
  // Tìm tất cả user muốn trở thành người cung cấp dịch vụ
  findAllByStatusCCDV3(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_ADMIN + `/user-to-CCDV`)
  }
  // Block/Unblock user
  changeStatusUs(id: number): Observable<User> {
    // @ts-ignore
    return this.httpClient.put<User>(API_ADMIN + `/block-unblock/${id}`);
  }

  ChangeVipUser(id : number ) : Observable<User> {
    // @ts-ignore
    return  this.httpClient.put<User>(API_ADMIN + '/vip/' + id)
  }

  // Lấy ra danh sách các vipCCDV
  getAllVipUser() : Observable<User[]> {
    return this.httpClient.get<User[]>(API_ADMIN + '/vipUser')
  }
  getAllCCDV() : Observable<User[]>{
    return this.httpClient.get<User[]>(API_URL2 + '/listCCDV')

  }
  getAllSDDV() : Observable<User[]>{
    return this.httpClient.get<User[]>(API_URL2 + '/listSDDV')

  }
  getVipUser() : Observable<User[]>{
    return  this.httpClient.get<User[]>(API_ADMIN + '/vipUser')
  }
  deleteVipUser(id : any) :Observable<User>{
    // @ts-ignore
    return this.httpClient.put<User>(API_ADMIN + '/deleteVip/' + id)
  }

}
