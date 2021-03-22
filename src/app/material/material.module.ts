import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


const MaterialComponents = [
MatTabsModule,
MatDialogModule ,
MatButtonModule,
MatDatepickerModule,
MatFormFieldModule,
MatToolbarModule,
MatMenuModule,
MatExpansionModule,
MatInputModule,
MatIconModule,
MatCardModule

];


@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
