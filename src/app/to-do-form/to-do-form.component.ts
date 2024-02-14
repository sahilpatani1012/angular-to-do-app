import { Component, inject } from '@angular/core';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToDoItem } from '../to-do-item';
import { ListItemsService } from '../list-items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})
export class ToDoFormComponent {

  constructor(private router: Router, private listService: ListItemsService, private activeRouter:ActivatedRoute) {}

  taskTitle:string = ""
  taskDeadline:Date = new Date()
  newTask:ToDoItem = {
    id: Math.random(),
    title: "",
    completed:false,
    deadline: new Date()
  }

  addItemHandler(taskTitle:string,taskDeadline:Date){
    if(taskTitle.length === 0) return;
    this.newTask.title = taskTitle;
    this.newTask.deadline = taskDeadline;
    const userEmail:any = this.activeRouter.snapshot.paramMap.get('userEmail')
    this.listService.addListItem(this.newTask,userEmail)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      })
    this.router.navigate([userEmail,'todos']);
    taskTitle = ""
    taskDeadline = new Date()
  }
}
