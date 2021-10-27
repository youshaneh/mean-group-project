import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class TaskDataService {

  private tasksUrl = 'http://localhost:3000/api/tasks';
  
  constructor(private http: HttpClient) {}
    getTasks(): Promise<void | Task[]> {
      return this.http.get(this.tasksUrl)
                 .toPromise()
                 .then(response => response as Task[])
                 .catch(this.handleError);
    }

    getSingleTask(taskId : String): Promise<void | Task> {
      return this.http.get(this.tasksUrl + '/' + taskId)
                 .toPromise()
                 .then(response => response as Task)
                 .catch(this.handleError);
    }

    createTask(newTask : Task): Promise<void | Task> {
      return this.http.post(this.tasksUrl,newTask)
                 .toPromise()
                 .then(response => response as Task)
                 .catch(this.handleError);
    }
    
    updateTask(newTask : Task): Promise<void | Task> {
      return this.http.put(this.tasksUrl + '/' + newTask['_id'],newTask)
                 .toPromise()
                 .then(response => response as Task)
                 .catch(this.handleError);
    }
    
    deleteTask(newTask : Task): Promise<void | Task> {
      return this.http.delete(this.tasksUrl + '/' + newTask['_id'])
                 .toPromise()
                 .then(response => response as Task)
                 .catch(this.handleError);
    }


    private handleError (error: any) {
      console.log("error");
    }
}