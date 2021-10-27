import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [TaskDataService]
})

export class HomeListComponent implements OnInit {

  tasks: Task[]

  constructor(private foodService: TaskDataService) { }

  ngOnInit() {
     this.foodService
      .getTasks()
      .then((tasks: Task[]) => {
        this.tasks = tasks.map(task => {
          return task;
        });
      });
  }

}