import { Component, inject } from '@angular/core';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToDoItem } from '../to-do-item';
import { ListItemsService } from '../list-items.service';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})
export class ToDoFormComponent {
  router = new Router();
  taskTitle:string = ""
  taskDeadline:Date = new Date()
  newTask:ToDoItem = {
    id: Math.random(),
    title: "",
    completed:false,
    deadline: new Date()
  }
  listService = inject(ListItemsService);

  addItemHandler(taskTitle:string,taskDeadline:Date){
    if(taskTitle.length === 0) return;
    this.newTask.title = taskTitle;
    this.newTask.deadline = taskDeadline;
    this.listService.addListItem(this.newTask);
    this.router.navigate(['/']);
    taskTitle = ""
    taskDeadline = new Date()
  }
}
