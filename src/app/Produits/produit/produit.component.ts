import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, NgZone, OnInit, Optional, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { productDocType } from 'src/app/schemas/product.shema';
// import { AddUnityComponent } from '../add-unity/add-unity.component';
import { ProduitService } from './produit.service';
import {
  tap
} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RxUnityDocument } from 'src/app/RxDB';
import { CategoryService } from '../category/category.service';
import { ReplaySubject, Subject , takeUntil} from 'rxjs';
import { FormControl } from '@angular/forms';
import { SelectFilterService } from 'src/app/services/select-filter.service';
import { UnityService } from '../unity/unity.service';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  Product: productDocType[] = [];
  emittedFirst = false;
  dataSource: MatTableDataSource<productDocType>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
  ngOnInit(): void {
    this.getAllProduct();
  }
  displayedColumns = ['id', 'name','category','unity','seuil','selling_price','buying_price', 'action'];
  constructor(
    public dialog: MatDialog,
    public datePipe: DatePipe,
    public ProduitService: ProduitService,
    public snackbar: MatSnackBar
    // public servicesGeneratePdfService: ServicesGeneratePdfService,
    // public excelService: ExcelService,
  ) {
    this.dataSource = new MatTableDataSource(this.Product);
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
  openDialog(action: string, obj: productDocType): void {
    const dialogRef = this.dialog.open(ProductDialogContentComponent, {
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

  getAllProduct() {
    this.ProduitService.getProduct().pipe(
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
    ).subscribe(Product => {
      this.Product = Product.map((value,index) => {
        return {
          name: value.name,
          category:value.getCategory(),
          unity:value.getUnity(),
          seuil:value.seuil,
          selling_price:value.selling_price,
          buying_price:value.buying_price,
          id: value.id,
          num: index+1,
          status: value.status,
          created_at:value.created_at,
          created_by:value.created_by,
          modified_by:value.modified_by,
          modified_at:value.modified_at,
        }
      })
      this.dataSource.data = this.Product; 
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
  async addRowData(row_obj: productDocType): Promise<void> {
    await this.ProduitService.addProduct(row_obj).then((messages) => {
      if (messages.inserted) {
        this.openSnackBar(messages.message, ['bg-success', 'text-white']);
      
      } else {
        this.openSnackBar(messages.message, ['bg-danger', 'text-white']);
       
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
  updateRowData(row_obj: productDocType) {
    this.ProduitService.updateProduct(row_obj).then((messages) => {
      if (messages?.updated) {
        this.openSnackBar(messages.message, ['bg-success', 'text-dark']);
      } else if (!messages?.updated) {
        this.openSnackBar(messages?.message, ['bg-danger', 'text-dark']);
      }
    })
  }

  // // tslint:disable-next-line - Disables all
  async deleteRowData(row_obj: productDocType) {
    await this.ProduitService.deleteProduct(row_obj.id).then((deleted) => {
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
  templateUrl: 'product.dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class ProductDialogContentComponent {
  local_data: any;
  category:any;
  unity:any;
  public filterCaegories = new ReplaySubject(0);
  public filterUnity = new ReplaySubject(1);
  public searchFilterCtrl: FormControl = new FormControl();
  public searchFilterUnityCtrl: FormControl = new FormControl();
  protected _onDestroy = new Subject();
  action = '';
  constructor(
    public datePipe: DatePipe,
    public dialogRef: MatDialogRef<ProductDialogContentComponent>,
    public catService: CategoryService, 
    public unityService: UnityService,
    public selectFilter: SelectFilterService,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.local_data = { ...data };
    this.local_data.unity = this.local_data.unity?.id;
    this.local_data.category = this.local_data.category?.id;
    this.action = this.data.action;
    this.getcategories();
    this.getUnity();
  }

  getcategories(){
    this.catService.getCategory().pipe(
      tap(() => {
        NgZone.assertInAngularZone();
      })
      ).subscribe((data)=>{
        this.filterCaegories.next(data);
        this.category = data
        this.searchFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterCaegories.next(
            this.selectFilter.filterMethodWithName(
              data,
              this.searchFilterCtrl.value,
            ),
          );
        });
      } )    
  }
  getUnity() {
    this.unityService.getUnity().pipe(
      tap(() => {
        NgZone.assertInAngularZone();
      })
    ).subscribe((unitys) => {
      this.filterUnity.next(unitys);
      this.unity = unitys
      this.searchFilterUnityCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterUnity.next(
            this.selectFilter.filterMethodWithName(
              unitys,
              this.searchFilterUnityCtrl.value,
            ),
          );
        });
    })
  }
  
  doAction(): void {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }
  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }
}

