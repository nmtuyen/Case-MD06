import {User} from '../user/user';
import {categoryService} from '../categoryService/categoryService';

export interface IuserService {
  id?: number;
  user?: User;
  service?: categoryService;
  price?: number;
}
