import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  public tasks: string[] = ["Estudiar", "Ir a la compra"]
 
  receiveTaskFromChild(task: string) {
      this.tasks.push(task)
  }

}
