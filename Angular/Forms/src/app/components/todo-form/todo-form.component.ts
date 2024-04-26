import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Input() taskList: string[] = [];
  @Output() sendNewTask: EventEmitter<string> = new EventEmitter();


  handleInputTask(event: Event){
    const inputTarget = event.target as HTMLInputElement;
    this.sendNewTask.emit(inputTarget.value)
    inputTarget.value = ""
  }
}
