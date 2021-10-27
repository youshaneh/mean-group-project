import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskDataService } from '../task-data.service';
import { Router} from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [TaskDataService]
})
export class CreateComponent implements OnInit {
  public date: Date = new Date();
  public dateString = `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}`

  public newTask = {
    name: "",
    description: "",
    createdDateString: this.dateString,
    dueDateString: this.dateString,
    priority: 0,
    done: false
  }

  constructor(private TaskDataService: TaskDataService, private router: Router) { }

  ngOnInit() {
  }

  public createNewTask(newTask):void {
    if(this.newTask.name == ''){
      alert('Name can\'t be empty');
      return;
    }
    newTask.createdDate = new Date(newTask.createdDateString);
    newTask.dueDate = new Date(newTask.dueDateString);
    this.TaskDataService.createTask(newTask).then(() => {
      this.router.navigate(['/']);
    });
  }
}
