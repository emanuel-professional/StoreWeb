import { Component, OnInit,ViewChild, ViewChildren, HostListener  } from '@angular/core';
import {interval} from 'rxjs';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @ViewChild('csliders') cslider;
  @ViewChildren("sliderLists") sliderLists;
  counter:number = 1;
  interval:number = 3000;
  width:number = 0; // cada 100%
  
  constructor() { }

  ngOnInit(): void {
    const timer = interval(3000);
    timer.subscribe(()=>{ // function() {}
     this.slides();
    }); 
  }

  ngAfterViewInit (){
    this.width = this.sliderLists.first.nativeElement.clientWidth;
  }

  @HostListener('window:resize')
  onResize(){
    this.width = this.sliderLists.first.nativeElement.clientWidth;
  }

  slides(){
    this.cslider.nativeElement.style.transform = "translate("+(-this.width*this.counter)+"px)";
    this.cslider.nativeElement.style.transition = "transform .8s";
    this.counter++;

    if(this.counter == this.sliderLists.length){
      setTimeout(()=>{  // () => {} acceder a variables de la clase
        this.cslider.nativeElement.style.transform = "translate(0px)";
        this.cslider.nativeElement.style.transition = "transform 0s";
        this.counter=1;
      },1500);
    }
  }
  
}
