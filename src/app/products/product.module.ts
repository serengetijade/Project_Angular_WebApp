import { NgModule } from '@angular/core';
import { ProductListComponent } from './productListComponent';
import { ProductDetailComponent } from './product-detail.component';
import { convertToSpacesPipe } from '../shared/convertToSpacesPipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, convertToSpacesPipe],
  imports: [ RouterModule.forChild([
    {path: 'products', component: ProductListComponent},
    {path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
  ]), SharedModule ]
})
export class ProductModule { }
