import { Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent {

  public modoNoche = false;
  public styles = {
    'background-color': 'black'
  }

  handleModoNoche(){
    this.modoNoche = !this.modoNoche
  }


}
