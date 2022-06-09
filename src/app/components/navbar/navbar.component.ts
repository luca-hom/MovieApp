import {Component, OnInit} from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import * as AOS from 'aos';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchQuery = '';
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
    AOS.init();

  }

  onEnterSearch() {

    console.log(this.searchQuery);
    location.replace('/search?query='+ this.searchQuery);


  }


}
