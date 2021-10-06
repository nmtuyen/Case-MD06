import {User} from '../user/user';

export interface Imessage {
  id: number,
  sender: User,
  receiver: User,
  content: string,
  time: Date,
  status: number
}
