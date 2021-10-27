import { Injectable } from '@angular/core';
import { Song } from './song';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class FoodDataService {

  private foodsUrl = 'http://localhost:3000/api/songs';
  
  constructor(private http: HttpClient) {}
    // get("/api/foods")
    getFoods(): Promise<void | Song[]> {
      return this.http.get(this.foodsUrl)
                 .toPromise()
                 .then(response => response as Song[])
                 .catch(this.handleError);
    }

    getSingleFood(foodId : String): Promise<void | Song> {
      return this.http.get(this.foodsUrl + '/' + foodId)
                 .toPromise()
                 .then(response => response as Song)
                 .catch(this.handleError);
    }

    createFood(newFood : Song): Promise<void | Song> {
      return this.http.post(this.foodsUrl,newFood)
                 .toPromise()
                 .then(response => response as Song)
                 .catch(this.handleError);
    }
    
    updateFood(newFood : Song): Promise<void | Song> {
      return this.http.put(this.foodsUrl + '/' + newFood['_id'],newFood)
                 .toPromise()
                 .then(response => response as Song)
                 .catch(this.handleError);
    }
    
    deleteFood(newFood : Song): Promise<void | Song> {
      return this.http.delete(this.foodsUrl + '/' + newFood['_id'])
                 .toPromise()
                 .then(response => response as Song)
                 .catch(this.handleError);
    }


    private handleError (error: any) {
      console.log("error");
    }
}