import { Component } from '@angular/core';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

public nombre = "Cristian"
public nombreEventoInput = "";
public nombreEventoChange = ""
public ultimasBusquedas = ["Real madrid", "Bootcamp", "Pedro sanchez"]
public mostrarUltimasBusquedas = false

  mostrarMensaje() {
    alert(`Bienvenido ${this.nombre}`)
  }

  ingresarNombreEventoInput(event: Event){
    const username = event.target as HTMLInputElement
    this.nombreEventoInput = username.value
  }

  ingresarNombreEventoChange(event: Event){
    const username = event.target as HTMLInputElement
    this.nombreEventoChange = username.value
  }

  handleFocus() {
    this.mostrarUltimasBusquedas = !this.mostrarUltimasBusquedas
  }

}
