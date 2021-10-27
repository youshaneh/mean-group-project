import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { FoodDataService } from '../song-data.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [FoodDataService]
})

export class HomeListComponent implements OnInit {

  songs: Song[]

  constructor(private foodService: FoodDataService) { }

  ngOnInit() {
     this.foodService
      .getFoods()
      .then((songs: Song[]) => {
        this.songs = songs.map(song => {
          return song;
        });
      });
  }

}