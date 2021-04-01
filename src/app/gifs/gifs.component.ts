import { DataService } from './../data.service';
import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  trendingGifs: any;



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.trendingGifs()
    .subscribe(response => {
      this.trendingGifs = response['data'];
    });

  }

}
