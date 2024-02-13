import { Component,inject } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { ToDoItem } from '../to-do-item';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ListItemsService } from '../list-items.service';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [DataViewModule,CommonModule,CheckboxModule,FormsModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  private service = inject(ListItemsService);
  toDoItems:ToDoItem[] = this.service.getListItems();
  items : any = []
  ngOnInit(){
    
    this.items = (localStorage.getItem("toDoItems"));
    this.toDoItems = JSON.parse(this.items);
    
  }

  taskCompletedHandler(id:number){
    this.toDoItems = this.toDoItems.filter((item)=> item.id !== id)
    this.toDoItems = this.service.changeList(this.toDoItems);
  }

}
