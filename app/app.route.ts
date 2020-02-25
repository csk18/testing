import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const router: Routes = [
    { path: 'contact', component: ContactComponent }
]

export const appRouter = RouterModule.forRoot(router);