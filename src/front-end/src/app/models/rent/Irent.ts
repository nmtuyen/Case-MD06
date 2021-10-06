import {User} from '../user/user';

export interface Irent {
  id?:number;
  user?: User;
  userRent?: User;
  rentDate?: Date;
  startTime?: Date;
  totalMoney?:number;
  time?:number;
  status?:number;
}
