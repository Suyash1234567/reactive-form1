import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicefirstService {
 data;
  constructor() { }

datadalo(str){

  this.data = str;
 // console.log(this.data,"data recv")

}
datalelo(){
 
 return this.data;

}

}
