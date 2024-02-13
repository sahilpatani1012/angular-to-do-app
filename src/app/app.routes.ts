import { Routes } from '@angular/router';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ContainerComponent } from './container/container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: "add-todo",
        component: ToDoFormComponent
    },
    {
        path: "",
        component: ContainerComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
