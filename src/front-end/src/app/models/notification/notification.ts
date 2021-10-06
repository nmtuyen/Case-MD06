import {User} from '../user/user';

export interface INotification {
  id: number,
  user: User,
  content: string,
  time: Date,
  status: number;
}
