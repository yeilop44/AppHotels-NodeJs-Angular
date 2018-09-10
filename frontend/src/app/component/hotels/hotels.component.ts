import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels:any;
  hotelByName:any;
  hotelByStars:any;
  isShowAllHotels: boolean = true;
  isShowAFilterHotelsByName: boolean = false;
  isShowAFilterHotelsByStars: boolean = false;

  urlImg = 'http://localhost:3000';
  name:string = '';

  radioData = '';
  selectedStar: string = '';
  
  arr = Array; // declaring arr as Array

  constructor(private hotelService: HotelsService) { }

  ngOnInit() {
  	this.getHotels();
  }

  getHotels(){
    this.hotelService.getHotels()
      .subscribe(res => {
      	console.log(res);
        this.hotels = res;
      });
  }

  getHotelByName(name: string){ 
    if (this.name && this.name != '') {
      this.hotelService.getHotelByName(this.name)
      .subscribe(res => {
        console.log(res);
        this.hotelByName = res;
        this.isShowAFilterHotelsByName= true;
        this.isShowAFilterHotelsByStars = false;
        this.isShowAllHotels = false;
      });
    }else {
      this.isShowAllHotels = true;
        this.isShowAFilterHotelsByName= false;
    }
  }

  getHotelsFilterByStars(){
    setTimeout(() =>{
      console.log(this.radioData);
      if(this.radioData && this.radioData != "all"){
        this.hotelService.getHotelByStars(this.radioData)
        .subscribe(res => {
          console.log(res);
          this.hotelByStars = res;
          this.isShowAFilterHotelsByStars = true;
          this.isShowAllHotels = false;
          this.isShowAFilterHotelsByName = false;
        });
      }else if(this.radioData == 'all'){
        this.isShowAllHotels = true;
        this.isShowAFilterHotelsByName = false;
        this.isShowAFilterHotelsByStars = false;
      }
    },100);
  }
}
