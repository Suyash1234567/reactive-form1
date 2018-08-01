import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})
export class NewpageComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('dd'));

    console.log(this.data);
  }

}
