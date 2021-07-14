import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListProductosComponent } from "./components/list-productos/list-productos.component";
import { ProductoComponent } from "./components/producto/producto.component";

const routes: Routes = [
  { path: ' ', component: ListProductosComponent },
  { path: "crear-producto", component: ProductoComponent },
  { path: "editar-producto/:id",component:ProductoComponent},
  { path: '**' , redirectTo: " ",pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
