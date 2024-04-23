import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
@Input() productosQueRecibeElHijo: any = [];
@Output() emisorDeProductosElegidos: EventEmitter<any> = new EventEmitter();


addProduct(producto: any){
 this.emisorDeProductosElegidos.emit(producto)
}

}
