import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import {      HttpClient  } from '@angular/common/http';
import { query } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private gifyApiKey = environment.gifyApiKey;
  private query!: string;

  constructor(private http: HttpClient) {  }

  trendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.gifyApiKey}&limit=50&rating=g`);
  }

  getGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${this.query}&api_key=${this.gifyApiKey}&limit=50&rating=g`);
   
  }

  searchGifs(query: string){
  this.query = query;  }
}
