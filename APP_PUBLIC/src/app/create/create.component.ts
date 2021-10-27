import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { FoodDataService } from '../song-data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [FoodDataService]
})
export class CreateComponent implements OnInit {

  public newSong: Song = {
    name: '',
    artists: [],
    rating: 0
  }

  constructor(private FoodDataService: FoodDataService, private router: Router) { }

  ngOnInit() {
  }

  public createNewSong(newSong: Song):void {
    this.FoodDataService.createFood(newSong).then(() => {
      this.router.navigate(['/']);
    });
  }
}
