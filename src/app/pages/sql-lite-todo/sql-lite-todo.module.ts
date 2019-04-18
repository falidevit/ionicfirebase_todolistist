import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SqlLiteTodoPage } from './sql-lite-todo.page';

const routes: Routes = [
  {
    path: '',
    component: SqlLiteTodoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SqlLiteTodoPage]
})
export class SqlLiteTodoPageModule {}
