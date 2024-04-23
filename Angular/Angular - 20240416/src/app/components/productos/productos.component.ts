import { Component, Output, EventEmitter, Input} from '@angular/core';
import { productos } from 'src/Productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
productos = productos


}
