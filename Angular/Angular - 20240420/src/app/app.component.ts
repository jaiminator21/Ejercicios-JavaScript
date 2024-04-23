import { Component } from '@angular/core';
import { productos } from 'src/Productos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comunicacion-entre-componentes';
  public productosQueEnviaElPadre = productos;
  public productosRecibidosDelHijo: any = []


  recibirProductosDelHijo(producto: any){
    this.productosRecibidosDelHijo.push(producto)
  }



}
