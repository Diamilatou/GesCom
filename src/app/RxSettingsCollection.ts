import { COLLECTIONS_NAME, IS_SERVER_SIDE_RENDERING, syncURL, CUSTOMER_COLLECTION_NAME, PRODUCT_COLLECTION_NAME, SALES_COLLECTION_NAME, SALES_ITEMS_COLLECTION_NAME, CATEGORY_COLLECTION_NAME, UNITY_COLLECTION_NAME, STOCK_COLLECTION_NAME, STOCK_ITEMS_COLLECTION_NAME, DELIVERY_COLLECTION_NAME, DELIVERY_ITEMS_COLLECTION_NAME, SAVING_COLLECTION_NAME, PAYEMENT_CUSTOMER_COLLECTION_NAME, VENDOR_COLLECTION_NAME, PAYEMENT_VENDOR_COLLECTION_NAME } from "src/shared";
import {  RxCustomerDocument, RxPayementCustomerDocument, RxPayementVendorDocument, RxProductDocument, RxSalesDocument, RxSalesItemsDocument, RxVendorDocument } from "./RxDB";
import { CATEGORY_SCHEMA } from "./schemas/category.schema";
import { Customer_schema } from "./schemas/customer.shema";
import { PAYEMENT_CUSTOMER_SCHEMA } from "./schemas/customerPayement.schema";
import { DELIVERY_SCHEMA } from "./schemas/delivery.schema";
import { DELIVERY_ITEMS_SCHEMA } from "./schemas/deliveryItems.schema";
import { productDocType, PRODUCT_SCHEMA } from "./schemas/product.shema";
import { SALES_SCHEMA } from "./schemas/sales.schema";
import { SALES_ITEMS_SCHEMA } from "./schemas/salesItems.schema";
import { SAVING_SCHEMA } from "./schemas/saving.schema";
import { STOCK_SCHEMA } from "./schemas/stock.schema";
import { STOCK_ITEMS_SCHEMA } from "./schemas/stockItems.schema";
import { UNITY_SCHEMA } from "./schemas/unity.schema";
import { VENDOR_SCHEMA } from "./schemas/vendor.schema";
import { PAYEMENT_VENDOR_SCHEMA } from "./schemas/vendorPayement.schema";

// La liste des Collections et ses methodes
export const collectionSettings = {
    [CUSTOMER_COLLECTION_NAME]: {
        schema: Customer_schema,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        methods: {
            getPhone(this: RxCustomerDocument): number {
                return this.phone;
            },
           
        },
        sync: true
    },
    [PRODUCT_COLLECTION_NAME]: {
        schema: PRODUCT_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        methods: {
            getName(this: RxProductDocument): string|undefined {
                return this.name;
            },
            async getCategory(this: RxProductDocument): Promise<string|undefined> {
                return await this.populate(CATEGORY_COLLECTION_NAME)
            },
            async getUnity(this: RxProductDocument): Promise<string|undefined> {
                return await this.populate(UNITY_COLLECTION_NAME)
            }
        },
        sync: true
    },
    [SALES_COLLECTION_NAME]: {
        schema: SALES_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        methods: {
            getStocks(this: RxSalesDocument) {
                // return this.phone;
            },
           
        },
        sync: true
    },
    [SALES_ITEMS_COLLECTION_NAME]: {
        schema: SALES_ITEMS_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        methods: {
            async getsales(this: RxSalesItemsDocument):Promise<RxSalesDocument> {
                return await this.populate('idSales')
            },
           
        },
        sync: true
    },
    [CATEGORY_COLLECTION_NAME]: {
        schema: CATEGORY_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        // methods: {
        //     async getsales(this: RxSalesItemsDocument):Promise<RxSalesDocument> {
        //         return await this.populate('idSales')
        //     },
           
        // },
        sync: true
    },
    [UNITY_COLLECTION_NAME]: {
        schema: UNITY_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        // methods: {
        //     async getsales(this: RxSalesItemsDocument):Promise<RxSalesDocument> {
        //         return await this.populate('idSales')
        //     },
           
        // },
        sync: true
    },
    [STOCK_COLLECTION_NAME]: {
        schema: STOCK_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        // methods: {
        //     async getsales(this: RxSalesItemsDocument):Promise<RxSalesDocument> {
        //         return await this.populate('idSales')
        //     },
           
        // },
        sync: true
    },
    [STOCK_ITEMS_COLLECTION_NAME]: {
        schema: STOCK_ITEMS_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        // methods: {
        //     async getsales(this: RxSalesItemsDocument):Promise<RxSalesDocument> {
        //         return await this.populate('idSales')
        //     },
           
        // },
        sync: true
    },
    [DELIVERY_COLLECTION_NAME]: {
        schema: DELIVERY_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        // methods: {
        //     async getsales(this: RxSalesItemsDocument):Promise<RxSalesDocument> {
        //         return await this.populate('idSales')
        //     },
           
        // },
        sync: true
    },
    [DELIVERY_ITEMS_COLLECTION_NAME]: {
        schema: DELIVERY_ITEMS_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        // methods: {
        //     async getsales(this: RxSalesItemsDocument):Promise<RxSalesDocument> {
        //         return await this.populate('idSales')
        //     },
           
        // },
        sync: true
    },
    [SAVING_COLLECTION_NAME]: {
        schema: SAVING_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        // methods: {
        //     async getsales(this: RxSalesItemsDocument):Promise<RxSalesDocument> {
        //         return await this.populate('idSales')
        //     },
           
        // },
        sync: true
    },
    [PAYEMENT_CUSTOMER_COLLECTION_NAME]: {
        schema: PAYEMENT_CUSTOMER_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        methods: {
            async getSales(this: RxPayementCustomerDocument):Promise<RxSalesDocument> {
                return await this.populate('idSales')
            },
            async getCustomer(this: RxPayementCustomerDocument):Promise<RxCustomerDocument> {
                return await this.populate('idCustomer')
            },
           
        },
        sync: true
    },
    [VENDOR_COLLECTION_NAME]: {
        schema: VENDOR_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        // methods: {
        //     async getsales(this: RxSalesItemsDocument):Promise<RxSalesDocument> {
        //         return await this.populate('idSales')
        //     },
           
        // },
        sync: true
    },
    [PAYEMENT_VENDOR_COLLECTION_NAME]: {
        schema: PAYEMENT_VENDOR_SCHEMA,
        autoMigrate: false,
        migrationStrategies: {
            // 1: async function (oldDoc: any) {
            //   return oldDoc;
            // }
        },
        methods: {
            async getVendor(this: RxPayementVendorDocument):Promise<RxVendorDocument> {
                return await this.populate('idVendor')
            },
           
        },
        sync: true
    },

};
/**
 * Do the Replication with the server CouchDB
 * @param db Database
 */
export function ReplicationCouchDB(db: any,first:boolean) {
    Promise.all(COLLECTIONS_NAME.map(async (collection_name) => {
        // const collectionUrl = `${syncURL}/${collection_name}`;
        const collectionUrl = `${syncURL}`;
        const replicationState = await db[collection_name].syncCouchDB({
            remote: collectionUrl,
            waitForLeadership: first,
            options: {
                live: first,
                retry: true,
                batch_size: 10000, // only transfer 10000 document per batch
                batches_limit: 10000,

            },
            query: await db[collection_name].find({ selector: { collection_name } })

        });
        if (!first) {
            console.log('DatabaseService: await initial replication to ensure SSR has all data');
            /**
             * For server side rendering,
             * we just run a one-time replication to ensure the client has the same data as the server.
             */
            await replicationState.awaitInitialReplication();
        }


        replicationState.alive$.subscribe((alive: any) => console.log("alive:", alive));
        replicationState.active$.subscribe((active: any) => console.log("active", active));
        replicationState.complete$.subscribe((completed: any) => { console.log("complete:", completed) });
        replicationState.denied$.subscribe((docData: any) => console.dir(docData));
        replicationState.error$.subscribe((error: any) => console.log("error", error));
        // replicationState.$.subscribe((docData: any) => console.dir(docData));
        // replicationState.error$.subscribe((error: any) => console.dir(error));


    }))
}


/**
 * definir la strategie de migration des collections
 * @param db La base de donnees
 */
export async function strategieMigration(db: any) {
    for (let collection of COLLECTIONS_NAME) {
        let collectionStrategie = await db[collection].migrationNeeded;
        if (collectionStrategie) {
            console.log("strategie needed for collection", collection);

            const stateMigration = await db[collection].migrate(10);
        }
    }
}