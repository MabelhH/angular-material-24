import { Component ,Inject, OnInit} from '@angular/core';
import { MatDialog ,MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
import { MensageComponent } from '../mensage/mensage.component';



@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {
  name:string='';
  animal:string='';
  
 constructor(public dialog: MatDialog  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MensageComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

 
 