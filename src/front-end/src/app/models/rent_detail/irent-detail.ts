import {Irent} from '../rent/Irent';
import {categoryService} from '../categoryService/categoryService';

export interface IRentDetail {
  id?: number;

 rent?: Irent;

 service?: categoryService;

  time?: number;
}
