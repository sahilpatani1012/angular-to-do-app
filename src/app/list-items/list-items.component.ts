import { Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { ToDoItem } from '../to-do-item';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ListItemsService } from '../list-items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [DataViewModule, CommonModule, CheckboxModule, FormsModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent implements OnInit{

  constructor(private router: ActivatedRoute, private service: ListItemsService) { }

  toDoItems: ToDoItem[] = []
  items: any = []
  userEmail: any = this.router.snapshot.paramMap.get('userEmail');
  ngOnInit() {
    this.service.getListItems(this.userEmail)
      .subscribe({
        next: (response: ToDoItem[]) => {
          this.toDoItems = response.filter((item) => item.completed === false)
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  taskCompletedHandler(id: number, userEmail: string) {
    this.service.changeList(id.toString(), userEmail)
    this.service.getListItems(this.userEmail)
      .subscribe({
        next: (response: ToDoItem[]) => {
          this.toDoItems = response.filter((item) => item.completed === false)
        },
        error: (error) => {
          console.log(error);
        }
      })
    // this.ngOnInit()
  }

}
