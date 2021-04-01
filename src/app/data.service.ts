import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import {      HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {  }

  getTrendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=qWEOYzCsfhVEEcFlNkjHWji8FRDDl8vo&limit=50&rating=g`);
  }

  searchGifs(gifName: string) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=&{gifName}&api_key=qWEOYzCsfhVEEcFlNkjHWji8FRDDl8vo&limit=50&rating=g`)
  }
}
