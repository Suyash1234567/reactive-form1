import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})
export class NewpageComponent implements OnInit {
  data: any;
  constructor(private router:Router) {
   }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('dd'));

    console.log(this.data);
  }

  redirect() {
    console.log('we')
    this.router.navigate(['/edit']);
  }

}
