import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  n_products = 1;
  name = "Emanuel";
  isShowingMenu = false;

  ngOnInit(): void {

  }

  showMenu(){
    let menu = document.getElementById("menu");
    if(!this.isShowingMenu){
      menu.style.display = "block";
      this.isShowingMenu = true;
    }else{
      menu.style.display = "none";
      this.isShowingMenu = false;
    } 
  }

  /*window.addEventListener("resize",function(){
    
  })*/

  

}
