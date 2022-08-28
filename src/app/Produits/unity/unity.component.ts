import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, NgZone, OnInit, Optional, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UnityDocType } from 'src/app/schemas/unity.schema';
// import { AddUnityComponent } from '../add-unity/add-unity.component';
import { UnityService } from './unity.service';
import {
  tap
} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RxUnityDocument } from 'src/app/RxDB';
@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss']
})
export class UnityComponent implements OnInit {

  Unity: UnityDocType[] = [];
  emittedFirst = false;
  dataSource: MatTableDataSource<UnityDocType>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
  ngOnInit(): void {
    this.getAllUnity();
  }
  displayedColumns = ['id', 'name', 'action'];
  constructor(
    public dialog: MatDialog,
    public datePipe: DatePipe,
    public UnityService: UnityService,
    public snackbar: MatSnackBar
    // public servicesGeneratePdfService: ServicesGeneratePdfService,
    // public excelService: ExcelService,
  ) {
    this.dataSource = new MatTableDataSource(this.Unity);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  openDialog(action: string, obj: UnityDocType): void {
    const dialogRef = this.dialog.open(UnityDialogContentComponent, {
      data: {
        action: action,
        doc: obj
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(obj);
      }
    });
  }

  getAllUnity() {
    this.UnityService.getUnity().pipe(
      tap(() => {
        /**
         * Ensure that this observable runs inside of angulars zone
         * otherwise there is a bug that needs to be fixed inside of RxDB
         * You do not need this check in your own app.
         */
        NgZone.assertInAngularZone();

        /**
         * hide loading icon on first emit
         */
        this.emittedFirst = true;
      })
    ).subscribe(unity => {
      this.Unity = unity.map((value,index) => {
        return {
          name: value.name,
          id: value.id,
          num: index+1,
          status: value.status,
          created_at:value.created_at,
          created_by:value.created_by,
          modified_by:value.modified_by,
          modified_at:value.modified_at,
        }
      })
      this.dataSource.data = this.Unity;
      // this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    })
  }

  // print() {
  //   let data = this.dataSource.data.map((value: any, index) => [
  //     index + 1,
  //     value.name,
  //     // value.nomType,
  //   ]);
  //   let headers = [
  //     "#",
  //     "Nom",
  //     // "Type",
  //   ];
  //   let title = "Liste des Unités";
  //   this.servicesGeneratePdfService.generatePdf(
  //     data,
  //     headers,
  //     title,
  //   );
  // }

  // Export to excell
  // exportToExcel() {
  //   let data = this.dataSource.data.map((value: any, index) => {
  //     return {
  //       "#": index + 1,
  //       "id": value.id,
  //       "nom": value.name,
  //       // "Type": value.nomType,
  //     };
  //   });

  //   this.excelService.exportToFile(data, "Liste des Unités");
  // }

  // tslint:disable-next-line - Disables all
  async addRowData(row_obj: UnityDocType): Promise<void> {
    await this.UnityService.addUnity(row_obj).then((messages) => {
      if (messages.inserted) {
        this.openSnackBar(messages.message, ['bg-success', 'text-white']);
        // this.dialog.open(AddUnityComponent, {
        //   data: messages.message,
        //   disableClose: true,
        // });
      } else {
        this.openSnackBar(messages.message, ['bg-danger', 'text-white']);
        // this.dialog.open(AddUnityComponent, {
        //   data: messages.message,
        //   disableClose: true,
        // });
      }
    })
  }

  openSnackBar(message: string, classList: string[]) {
    this.snackbar.open(message, 'Okay', {
      panelClass: classList,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
    })
  }
  // tslint:disable-next-line - Disables all
  updateRowData(row_obj: UnityDocType) {
    this.UnityService.updateUnity(row_obj).then((messages) => {
      if (messages?.updated) {
        this.openSnackBar(messages.message, ['bg-success', 'text-dark']);
      } else if (!messages?.updated) {
        this.openSnackBar(messages?.message, ['bg-danger', 'text-dark']);
      }
    })
  }

  // // tslint:disable-next-line - Disables all
  async deleteRowData(row_obj: UnityDocType) {
    await this.UnityService.deleteUnity(row_obj.id).then((deleted) => {
      if (deleted) {
        this.openSnackBar("suppression effectuée!", ['bg-success', 'text-dark']);
      } else {
        this.openSnackBar("Echec de suppression, reessayer!", ['bg-danger', 'text-dark']);
      }
    })
  }

}
@Component({
  // tslint:disable-next-line: component-selector 
  selector: 'app-dialog-content',
  templateUrl: 'unity.dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class UnityDialogContentComponent {
  local_data: any;
  action = '';
  constructor(
    public datePipe: DatePipe,
    public dialogRef: MatDialogRef<UnityDialogContentComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.local_data = {
      doc: {
        id: data.doc.id,
        name: data.doc.name,
      },
      action: data.action
    };
    this.action = this.data.action;
  }

  doAction(): void {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }
  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }
}

