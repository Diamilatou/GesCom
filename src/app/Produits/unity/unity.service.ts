import { Injectable } from '@angular/core';
import { UnityDocType } from 'src/app/schemas/unity.schema';
import { DatabaseService } from 'src/app/services/database.service';

@Injectable({
  providedIn: 'root'
})
export class UnityService {
  constructor(
    private dbService: DatabaseService
  ) { }
  /**
   * 
   * @returns Observable
   */
  getUnity() {
    return this.dbService.db.unity.find({
      selector: {},
      // sort: [{ name: 'asc' }]
    }).$
  }
  async deleteUnity(id: any) {
    const query = await this.dbService.db.unity.findOne({
      selector: {
        id: id
      }
    }).exec();
    return await query?.remove();
  }
  async updateUnity(row_obj: any) {
    const query = await this.dbService.db.unity.findOne({
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
        message: `L'unité ${row_obj.doc.name} a ete modifiée avec succes!`
      }
    }).catch((err)=>{
      return {
        updated: false,
        message: err
      }
    })
  }
  async addUnity(row_obj: any) {
    return await this.dbService.db.unity.insert({
      id: `${new Date().getTime()} ${Math.floor(Math.random() * 1000)}`,
      name: row_obj.doc.name,
      created_at: new Date().getTime().toString(),
    }).then(() => {
      return {
        inserted: true,
        message: `L'unité ${row_obj.doc.name} a ete inseree avec succes!`
      }
    }).catch((err) => {
      return {
        inserted: false,
        message: err
      }
    })
  }

 
}