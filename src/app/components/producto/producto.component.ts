import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { ToastrModule, ToastrService } from 'ngx-toastr'; 

import { Producto } from "src/app/models/Producto";
import { ProductoService } from "src/app/services/producto.service";
@Component({
  selector: "app-producto",
  templateUrl: "./producto.component.html",
  styleUrls: ["./producto.component.css"],
})
export class ProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = "Crear producto";
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute
  ) {
    this.productoForm = this.fb.group({
      nombre: ["", Validators.required],
      categoria: ["", Validators.required],
      ubicacion: ["", Validators.required],
      precio: ["", Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get("nombre")?.value,
      categoria: this.productoForm.get("categoria")?.value,
      ubicacion: this.productoForm.get("ubicacion")?.value,
      precio: this.productoForm.get("precio")?.value,
    };

    if (this.id != null) {
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(
        (data) => {
          this.toastr.info(
            "El producto fue editado con exito",
            "Producto Actualizado"
          );
          this.router.navigate(["/"]);
        },
        (error) => {
          console.log(error);
          this.productoForm.reset();
        }
      );
    } else {
      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(
        (data) => {
          this.toastr.success(
            "El producto fue creado con exito",
            "Producto Creado"
          );
          this.router.navigate(["/"]);
        },
        (error) => {
          console.log(error);
          this.productoForm.reset();
        }
      );
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = "Editar producto";
      this._productoService.obtenerProducto(this.id).subscribe((data) => {
        this.productoForm.setValue({
          nombre: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
        });
      });
    }
  }
}
