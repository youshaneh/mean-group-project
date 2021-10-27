import { Component, OnInit } from '@angular/core';
import { FoodDataService } from "../song-data.service";
import { Song } from "../song";
import { ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Router} from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styles: [],
  providers: [FoodDataService]
})
export class DetailsPageComponent implements OnInit {
  constructor(private FoodDataService: FoodDataService,
    private route: ActivatedRoute,  private router: Router) { }

  newSong: any;
  updateSong: any;
  editing: boolean;

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => this.FoodDataService.getSingleFood(params['foodid'])))
      .subscribe((newSong: any) => {
        this.newSong = newSong;
        this.newSong.min = Math.floor(newSong.length / 60);
        this.newSong.sec = pad(newSong.length % 60, 2);
        this.newSong.stars = ['☆', '☆', '☆', '☆', '☆'];
        for (let i = 0; i < newSong.rating; i++) {
          this.newSong.stars[i] = '★';
        }
        this.editing = false;

        function pad(input, length) {
          return Array(length - Math.floor(Math.log10(input))).join('0') + input;
        }
      })
  }

  public edit(editing: boolean): void {
    let { name, artists, length, releaseYear, _id } = this.newSong;
    this.updateSong = { name, artists, length, releaseYear, _id };
    this.editing = editing;
  }

  public update(updateSong: Song): void {
    this.FoodDataService.updateFood(updateSong).then(() => {
      this.ngOnInit();
    });
  }

  public delete(updateSong: Song): void {
    this.FoodDataService.deleteFood(updateSong).then(() => {
      this.router.navigate(['/']);
    });
  }
}