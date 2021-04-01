import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  gifs: any;
  searchQuery: string;
  notfound = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    
  }

  searchGifs() {
    this.dataService.searchGifs(this.searchQuery);
    this.dataService.getGifs()
    .subscribe(results => {
      console.log(results['data']);
      this.gifs = results['data'];
    },
      error => {
        alert('not found :(');
    
    });
    this.searchQuery = '';
  }

}
