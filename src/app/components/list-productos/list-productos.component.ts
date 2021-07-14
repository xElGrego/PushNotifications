import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto.service';



@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {


  listProductos: Producto[] = [];

  constructor(private _productoService: ProductoService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();

  }


  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProducto(id: any) {

    this._productoService.eliminarProducto(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
      console.log("Btn eliminar");
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }

}
