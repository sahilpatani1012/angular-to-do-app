import { Routes } from '@angular/router';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ContainerComponent } from './container/container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path:"",
        component:LoginComponent
    },
    {
        path: ":userEmail/add-todo",
        component: ToDoFormComponent
    },
    {
        path: ":userEmail/todos",
        component: ContainerComponent
    },
    {
        path:"signup",
        component: SignupComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
