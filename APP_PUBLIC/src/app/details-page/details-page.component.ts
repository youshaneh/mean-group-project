import { Component, OnInit } from '@angular/core';
import { TaskDataService } from "../task-data.service";
import { Task } from "../task";
import { ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Router} from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styles: [],
  providers: [TaskDataService]
})
export class DetailsPageComponent implements OnInit {
  constructor(private TaskDataService: TaskDataService,
    private route: ActivatedRoute,  private router: Router) { }

  newTask: any;
  updateTask: any;
  editing: boolean;

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => this.TaskDataService.getSingleTask(params['taskid'])))
      .subscribe((newTask: any) => {
        this.newTask = newTask;
        this.newTask.createdDateString =  this.getDateString(this.newTask.createdDate);
        this.newTask.dueDateString =  this.getDateString(this.newTask.dueDate);
        this.editing = false;
      })
  }

  public edit(editing: boolean): void {
    let { name, description, createdDate, dueDate, priority, done, createdDateString, dueDateString, _id } = this.newTask;
    this.updateTask = { name, description, createdDate, dueDate, priority, done, createdDateString, dueDateString, _id };
    this.editing = editing;
  }

  private getDateString(date){
    date = new Date(date);
    date.setDate(date.getDate() +1);
    return`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
  }

  public update(updateTask: any): void {
    if(updateTask.name == ''){
      alert('Name can\'t be empty');
      return;
    }
    updateTask.dueDate = new Date(updateTask.dueDateString);
    this.TaskDataService.updateTask(updateTask).then(() => {
      this.ngOnInit();
    });
  }

  public delete(updateTask: Task): void {
    this.TaskDataService.deleteTask(updateTask).then(() => {
      this.router.navigate(['/']);
    });
  }
}