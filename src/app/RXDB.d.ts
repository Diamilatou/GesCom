/**
 * custom typings so typescript knows about the schema-fields
 */

 import type {
    RxDocument,
    RxCollection,
    RxDatabase
} from 'rxdb';
import { RxHeroDocumentType } from './schemas/hero.schema';
import { customerDocType } from './schemas/customer.shema';
import { productDocType  } from './schemas/product.shema';
import { salesDocType } from './schemas/sales.schema';
import { salesItemsDocType } from './schemas/salesItems.schema';
import { CATEGORY_COLLECTION_NAME, CUSTOMER_COLLECTION_NAME, DELIVERY_COLLECTION_NAME, DELIVERY_ITEMS_COLLECTION_NAME, PAYEMENT_CUSTOMER_COLLECTION_NAME, PAYEMENT_VENDOR_COLLECTION_NAME, PRODUCT_COLLECTION_NAME, SALES_COLLECTION_NAME, SALES_ITEMS_COLLECTION_NAME, SAVING_COLLECTION_NAME, STOCK_COLLECTION_NAME, STOCK_ITEMS_COLLECTION_NAME, UNITY_COLLECTION_NAME, VENDOR_COLLECTION_NAME } from 'src/shared';
import { CategoryDocType } from './schemas/category.schema';
import { UnityDocType } from './schemas/unity.schema';
import { stockDocType } from './schemas/stock.schema';
import { stockItemsDocType } from './schemas/stockItems.schema';
import { deliveryDocType } from './schemas/delivery.schema';
import { deliveryItemsDocType } from './schemas/deliveryItems.schema';
import { savingDocType } from './schemas/saving.schema';
import { payementCustomerDocType } from './schemas/customerPayement.schema';
import { vendorDocType } from './schemas/vendor.schema';
import { payementVendorDocType } from './schemas/vendorPayement.schema';

// ORM methods
type RxHeroDocMethods = {
    hpPercent(): number;
};
type RxCustomerDocMethods = {
    getPhone(): string;
 }
type RxProductDocMethods = {
    getName(): string;
    getCategory(): string;
    getUnity(): string;
 }
type RxSalesDocMethods = { 
    getStocks(): string;
 }
type RxSalesItemsDocMethods = { 
    getsales():RxSalesDocument;
}
type RxCategoryDocMethods = { }
type RxUnityDocMethods = { }
type RxStockDocMethods = { }
type RxStockItemsDocMethods = { }
type RxDeliveryDocMethods = { }
type RxDeliveryItemsDocMethods = { }
type RxSavingDocMethods = { }
type RxPayementCustomerDocMethods = { 
    getCustomer():RxCustomerDocument;
    getSales():RxSalesDocument
 }
type RxVendorDocMethods = { }
type RxPayementVendorDocMethods = { 
    getVendor():RxVendorDocument;
}



export type RxHeroDocument = RxDocument<RxHeroDocumentType, RxHeroDocMethods>;
export type RxHeroCollection = RxCollection<RxHeroDocumentType, RxHeroDocMethods, {}>;
// customer
export type RxCustomerDocument = RxDocument<customerDocType, RxCustomerDocMethods>;
export type RxCustomerCollection = RxCollection<customerDocType, RxCustomerDocMethods, {}>;
// product
export type RxProductDocument = RxDocument<productDocType, RxProductDocMethods>;
export type RxProductCollection = RxCollection<productDocType, RxProductDocMethods, {}>;
// sales
export type RxSalesDocument = RxDocument<salesDocType, RxSalesDocMethods>;
export type RxSalesCollection = RxCollection<salesDocType, RxSalesDocMethods, {}>;
// salesItems
export type RxSalesItemsDocument = RxDocument<salesItemsDocType, RxSalesItemsDocMethods>;
export type RxSalesItemsCollection = RxCollection<salesItemsDocType, RxSalesItemsDocMethods, {}>;
// category
export type RxCategoryDocument = RxDocument<CategoryDocType, RxCategoryDocMethods>;
export type RxCategoryCollection = RxCollection<CategoryDocType, RxCategoryDocMethods, {}>;
// unity
export type RxUnityDocument = RxDocument<UnityDocType, RxUnityDocMethods>;
export type RxUnityCollection = RxCollection<UnityDocType, RxUnityDocMethods, {}>;
// stock
export type RxStockDocument = RxDocument<stockDocType, RxStockDocMethods>;
export type RxStockCollection = RxCollection<stockDocType, RxStockDocMethods, {}>;
// stockItems
export type RxStockItemsDocument = RxDocument<stockItemsDocType, RxStockItemsDocMethods>;
export type RxStockItemsCollection = RxCollection<stockItemsDocType, RxStockItemsDocMethods, {}>;
//  delivery
export type RxDeliveryDocument = RxDocument<deliveryDocType, RxDeliveryDocMethods>;
export type RxDeliveryCollection = RxCollection<deliveryDocType, RxDeliveryDocMethods, {}>;
// stockItems
export type RxDeliveryItemsDocument = RxDocument<deliveryItemsDocType, RxDeliveryItemsDocMethods>;
export type RxDeliveryItemsCollection = RxCollection<deliveryItemsDocType, RxDeliveryItemsDocMethods, {}>;
// saving
export type RxSavingDocument = RxDocument<savingDocType, RxSavingDocMethods>;
export type RxSavingCollection = RxCollection<savingDocType, RxSavingDocMethods, {}>;
// payementCustomer
export type RxPayementCustomerDocument = RxDocument<payementCustomerDocType, RxPayementCustomerDocMethods>;
export type RxPayementCustomerCollection = RxCollection<payementCustomerDocType, RxPayementCustomerDocMethods, {}>;
// vendor
export type RxVendorDocument = RxDocument<vendorDocType, RxVendorDocMethods>;
export type RxVendorCollection = RxCollection<vendorDocType, RxVendorDocMethods, {}>;
// payementvendor
export type RxPayementVendorDocument = RxDocument<payementVendorDocType, RxPayementVendorDocMethods>;
export type RxPayementVendorCollection = RxCollection<payementVendorDocType, RxPayementVendorDocMethods, {}>;


export type RxGesComCollections = {
    hero: RxHeroCollection;
    [CUSTOMER_COLLECTION_NAME]: RxCustomerCollection;
    [PRODUCT_COLLECTION_NAME]: RxProductCollection;
    [SALES_COLLECTION_NAME]: RxSalesCollection;
    [SALES_ITEMS_COLLECTION_NAME]: RxSalesItemsCollection;
    [CATEGORY_COLLECTION_NAME]:RxCategoryCollection;
    [UNITY_COLLECTION_NAME]:RxUnityCollection;
    [STOCK_COLLECTION_NAME]:RxStockCollection;
    [STOCK_ITEMS_COLLECTION_NAME]:RxStockItemsCollection;
    [DELIVERY_COLLECTION_NAME]:RxDeliveryCollection;
    [DELIVERY_ITEMS_COLLECTION_NAME]:RxDeliveryItemsCollection;
    [SAVING_COLLECTION_NAME]:RxSavingCollection;
    [PAYEMENT_CUSTOMER_COLLECTION_NAME]:RxPayementCustomerCollection;
    [VENDOR_COLLECTION_NAME]:RxVendorCollection;
    [PAYEMENT_VENDOR_COLLECTION_NAME]:RxPayementVendorCollection
};

export type RxGesComDatabase = RxDatabase<RxGesComCollections>;