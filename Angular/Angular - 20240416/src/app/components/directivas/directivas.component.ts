import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  public mostrarElemento = true;
  public jugadores = ["Messi", "Villa", "Iniesta", "Xavi"]

  handleMostrarElemento() {
    this.mostrarElemento = !this.mostrarElemento
  }

  eliminarJugador(){
    this.jugadores.shift()
  }


}
