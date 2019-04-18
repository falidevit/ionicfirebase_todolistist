import { Injectable } from '@angular/core';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite/ngx';


const DATABASE_FILE_NAME: string ='data.db';

@Injectable({
  providedIn: 'root'
})
export class ServiceSqlService {
   
  todos: string[] = [];
  task: string;
  status: string;
  createdAt: string;

  private db : SQLiteObject;
  constructor(private sqlite : SQLite) {
    this.createDatabaseFile();
   }

  private createDatabaseFile(): void {
  this.sqlite.create({
    name: 'DATABASE_FILE_NAME',
    location: 'default'
  })
    .then((db: SQLiteObject) => {
      console.log('bdd crée')
      this.db=db;
    })
    .catch(e => console.log(e));  
}
 private createTables(): void {
  this.db.executeSql('CREATE TABLE IF NOT EXISTS `todo` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `task` TEXT NOT NULL, `status` TEXT, `createdAt` DATETIME )', [])
  .then(() => console.log('Executed SQL'))
  .catch(e => console.log(e));
 }

    
   public  addTodo() {
      this.db.executeSql('INSERT INTO `todo` (task, status) VALUES (\'' + this.task+ '\', '+this.status+'\')')
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));
    
      }

      

}