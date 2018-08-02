import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicefirstService } from '../servicefirst.service';
@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})
export class NewpageComponent implements OnInit {
  //data: any;
  data;
  constructor(private router:Router,  private ServicefirstService : ServicefirstService ) {
   }

  ngOnInit() {
   // this.data = JSON.parse(localStorage.getItem('dd'));
    this.data = this.ServicefirstService.datalelo();
   // console.log(this.data,"view");
  }

  redirect() {
    console.log('we')
    this.router.navigate(['/edit']);
  }

}
