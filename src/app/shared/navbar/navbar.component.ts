import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  navElement: any;

  constructor() { }

  ngOnInit(): void {
    this.scrollSpyNavbar();
  }

  scrollSpyNavbar(){
    window.addEventListener('scroll', () =>{
      this.navElement = document.querySelector('nav');
      
      if(window.pageYOffset > 30){
        this.navElement?.classList.add('bg-light','shadow');
      }else{
        this.navElement?.classList.remove('bg-light','shadow');
      }

    });
  }

}
