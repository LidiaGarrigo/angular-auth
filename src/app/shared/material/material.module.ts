<<<<<<< HEAD
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const material=[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
=======
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const material = [
  FlexLayoutModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
<<<<<<< HEAD
    ...material ],
=======
    ...material
  ],
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
  exports: [...material]
})
export class MaterialModule { }
