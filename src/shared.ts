export const COUCHDB_PORT = 5984;

const LOCALHOST = 'localhost';
const USERNAME = 'root';
const PASSWORD = 'root';
// export const DATABASE_NAME = 'minimarket';
export const DATABASE_NAME = 'dbgescom';
export const HERO_COLLECTION_NAME = 'hero';
export const CUSTOMER_COLLECTION_NAME = 'customer';
export const PRODUCT_COLLECTION_NAME = 'product';
export const SALES_COLLECTION_NAME = 'sales';
export const SALES_ITEMS_COLLECTION_NAME = 'salesItems';
export const CATEGORY_COLLECTION_NAME = 'category';
export const UNITY_COLLECTION_NAME = 'unity';
export const STOCK_COLLECTION_NAME = 'stock';
export const STOCK_ITEMS_COLLECTION_NAME = 'stockItems';
export const DELIVERY_COLLECTION_NAME = 'delivery';
export const DELIVERY_ITEMS_COLLECTION_NAME = 'deliveryItems';
export const SAVING_COLLECTION_NAME = 'saving';
export const PAYEMENT_CUSTOMER_COLLECTION_NAME = 'payementCustomer';
export const VENDOR_COLLECTION_NAME = 'vendor';
export const PAYEMENT_VENDOR_COLLECTION_NAME = 'payementVendor';

export const COLLECTIONS_NAME = [
    // CUSTOMER_COLLECTION_NAME,
    // PRODUCT_COLLECTION_NAME,
    // SALES_COLLECTION_NAME,
    // SALES_ITEMS_COLLECTION_NAME,
    CATEGORY_COLLECTION_NAME,
    UNITY_COLLECTION_NAME,
    // STOCK_COLLECTION_NAME,
    // STOCK_ITEMS_COLLECTION_NAME,
    // DELIVERY_COLLECTION_NAME,
    // DELIVERY_ITEMS_COLLECTION_NAME,
    // SAVING_COLLECTION_NAME,
    // PAYEMENT_CUSTOMER_COLLECTION_NAME,
    // VENDOR_COLLECTION_NAME,
    // PAYEMENT_VENDOR_COLLECTION_NAME
]
/**
 * We assume that when no indexeddb is there,
 * we are in the server-side rendering nodejs process
 * of angular universal
 */
export const IS_SERVER_SIDE_RENDERING = !global.window || !global.window.indexedDB;
export const syncHost = IS_SERVER_SIDE_RENDERING ? LOCALHOST : window.location.hostname;
export const syncURL = `http://${USERNAME}:${PASSWORD}@${syncHost}:${COUCHDB_PORT}/${DATABASE_NAME}`;