import { Injectable } from '@angular/core';
import { ToDoItem } from './to-do-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListItemsService {

  constructor(private http:HttpClient) { }

  getListItems(userEmail:string): Observable<ToDoItem[]> {
    const url = `http://localhost:3000/api/${userEmail}`
    return this.http.get<ToDoItem[]>(url);
  }

  addListItem(item: ToDoItem, userEmail: string) {
    const url = `http://localhost:3000/api/${userEmail}/add-todos`
    return this.http.patch(url,item);
  }

  changeList(id:string,userEmail:string) {
    const url = `http://localhost:3000/api/update-list/${userEmail}/${id}`
    return this.http.get(url);
    // localStorage.setItem("toDoItems", JSON.stringify(newList));
    // let newListString: any = localStorage.getItem("toDoItems")
    // return JSON.parse(newListString)
  }

}
