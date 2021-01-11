import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobileMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMobileMenu(): void {
    this.mobileMenu = true;
  }

  mobileMenuHandler(event) {
    this.mobileMenu = event
  }

}
