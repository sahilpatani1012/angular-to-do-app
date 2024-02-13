import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ToDoInputComponent } from '../to-do-input/to-do-input.component';
import { ListItemsComponent } from '../list-items/list-items.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule,DataViewModule,CardModule,ToDoInputComponent,ListItemsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
