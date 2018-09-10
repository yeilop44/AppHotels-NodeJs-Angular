import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel} from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

URL_API = 'http://localhost:3000/hotels';


  constructor(private http: HttpClient) { }
	
	getHotels() {
		return this.http.get(this.URL_API);
	}

	getHotelByName(name: string) {
		return this.http.get(this.URL_API + '/name/' + `${name}`);
	}

	getHotelByStars(stars: string) {
		return this.http.get(this.URL_API + '/stars/' + `${stars}`);
	}
}


