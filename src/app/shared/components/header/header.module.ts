<<<<<<< HEAD
=======
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material';
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
<<<<<<< HEAD
    CommonModule
  ],
  exports:[HeaderComponent]
=======
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [HeaderComponent]
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
})
export class HeaderModule { }
