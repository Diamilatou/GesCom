import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor(
    private dbService: DatabaseService
  ) { }
  /**
   * 
   * @returns Observable
   */
  getProduct() {
    return this.dbService.db.product.find({
      selector: {},
      // sort: [{ name: 'asc' }]
    }).$
  }
  async deleteProduct(id: any) {
    const query = await this.dbService.db.product.findOne({
      selector: {
        id: id
      }
    }).exec();
    return await query?.remove();
  }
  async updateProduct(row_obj: any) {
    const query = await this.dbService.db.product.findOne({
      selector: {
        id: row_obj.doc.id,
      }
    }).exec();
    return await query?.update({
      $set: {
        name: row_obj.doc.name,
        modified_at: new Date().getTime().toString()
      }
    }).then(()=>{
      return {
        updated: true,
        message: `Le produit ${row_obj.doc.name} a ete modifiée avec succes!`
      }
    }).catch((err)=>{
      return {
        updated: false,
        message: err
      }
    })
  }
  async addProduct(row_obj: any) {
    return await this.dbService.db.product.insert({
      id: `${new Date().getTime()} ${Math.floor(Math.random() * 1000)}`,
      name: row_obj.doc.name,
      category: row_obj.doc.category,
      unity: row_obj.doc.unity,
      seuil: row_obj.doc.seuil,
      selling_price: row_obj.doc.selling_price,
      buying_price: row_obj.doc.buying_price,
      created_at: new Date().getTime().toString(),
    }).then(() => {
      return {
        inserted: true,
        message: `Le produit ${row_obj.doc.name} a ete inseree avec succes!`
      }
    }).catch((err) => {
      return {
        inserted: false,
        message: err
      }
    })
  }

}
