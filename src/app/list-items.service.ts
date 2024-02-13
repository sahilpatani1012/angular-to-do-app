import { Injectable } from '@angular/core';
import { ToDoItem } from './to-do-item';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {

  constructor() { }

  getListItems(): ToDoItem[] {
    let items: ToDoItem[] = [];
    const storedItems = localStorage.getItem("toDoItems");
    if (storedItems) {
      items = JSON.parse(storedItems);
    }
    return items;
  }

  addListItem(item: ToDoItem) {
    let items: ToDoItem[] = this.getListItems();
    items.push(item);
    localStorage.setItem("toDoItems", JSON.stringify(items));
  }

  changeList(newList: ToDoItem[]) {
    localStorage.setItem("toDoItems", JSON.stringify(newList));
    let newListString: any = localStorage.getItem("toDoItems")
    return JSON.parse(newListString)
  }

  toDoItems: ToDoItem[] = [
    { id: 1, title: 'Buy groceries', completed: true, deadline: new Date('2024-03-17T03:24:00') },
    { id: 2, title: 'Finish project report', completed: false, deadline: new Date('2024-11-20T14:48:00') },
    { id: 3, title: 'Call the bank', completed: false, deadline: new Date('2024-07-09T09:36:00') },
    { id: 4, title: 'Clean the house', completed: false, deadline: new Date('2024-05-22T16:12:00') },
    { id: 5, title: 'Prepare for the meeting', completed: false, deadline: new Date('2024-08-30T21:18:00') }
];


}
