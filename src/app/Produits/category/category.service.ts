import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private dbService: DatabaseService
  ) { }
  /**
   * 
   * @returns Observable
   */
  getCategory() {
    return this.dbService.db.category.find({
      selector: {},
      // sort: [{ name: 'asc' }]
    }).$
  }
  async deleteCategory(id: any) {
    const query = await this.dbService.db.category.findOne({
      selector: {
        id: id
      }
    }).exec();
    return await query?.remove();
  }
  async updateCategory(row_obj: any) {
    const query = await this.dbService.db.category.findOne({
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
        message: `La catégorie ${row_obj.doc.name} a ete modifiée avec succes!`
      }
    }).catch((err)=>{
      return {
        updated: false,
        message: err
      }
    })
  }
  async addCategory(row_obj: any) {
    return await this.dbService.db.category.insert({
      id: `${new Date().getTime()} ${Math.floor(Math.random() * 1000)}`,
      name: row_obj.doc.name,
      created_at: new Date().getTime().toString(),
    }).then(() => {
      return {
        inserted: true,
        message: `La catégorie ${row_obj.doc.name} a ete inseree avec succes!`
      }
    }).catch((err) => {
      return {
        inserted: false,
        message: err
      }
    })
  }

 
}