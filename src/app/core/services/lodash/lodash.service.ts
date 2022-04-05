import { Injectable } from '@angular/core';
import { isEmpty, map, filter, reduce, orderBy } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class LodashService {
  constructor() {}

  /*
  TODO:
  whenever you need to use lodash function add that here has get and use through this service. 
  advantage of this is even function name change in fucture releases we can control it throught this encapsulated service
  */

  get isEmpty() {
    return isEmpty;
  }
  get map() {
    return map;
  }

  get filter() {
    return filter;
  }
  get reduce() {
    return reduce;
  }

  get orderBy() {
    return orderBy;
  }
}
