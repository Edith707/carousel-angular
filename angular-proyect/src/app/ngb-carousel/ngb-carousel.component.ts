import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngb-carousel',
  templateUrl: './ngb-carousel.component.html',
  styleUrls: ['./ngb-carousel.component.css']
})
export class NgbCarouselComponent implements OnInit {

images: Array<string> = [
  "assets/img/img.jpg",
  "assets/img/img1.jpg",
  "assets/img/img2.jpg",
  "assets/img/img3.jpg",
  "assets/img/img4.jpg",
  "assets/img/img6.jpeg",
  "assets/img/img8.jpg"

];


  constructor() { }

  ngOnInit() {
  }

}
