import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import {      HttpClient  } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private gifyApiKey = environment.gifyApiKey;
  private gifName!: string;
  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {  }

  getTrendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.gifyApiKey}&limit=50&rating=g`)
    .subscribe((response: any) =>{
      console.log('Data', response);
      this.gifs.next(response.data);
    });
  }

  searchGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${this.gifName}&api_key=${this.gifyApiKey}&limit=50&rating=g`)
    .subscribe((response: any) =>{
      console.log('Search Data', response);
      this.gifs.next(response.data);
    });
  }

  getGifs(){
    return this.gifs.asObservable();
  }
}
