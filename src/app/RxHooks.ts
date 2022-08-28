import { MatSnackBar } from "@angular/material/snack-bar";
import { CATEGORY_COLLECTION_NAME, CUSTOMER_COLLECTION_NAME, UNITY_COLLECTION_NAME, VENDOR_COLLECTION_NAME } from "src/shared";

const COLLECTION_UNIQUE = [
    {
        collection_name: CUSTOMER_COLLECTION_NAME,
        items: [
            {
                name_items: 'phone',
                message: 'Ce numero de telephone existe dejà!'
            },
        ]
    },
    {
        collection_name: CATEGORY_COLLECTION_NAME,
        items: [
            {
                name_items: 'name',
                message: 'Cette categorie  existe dejà!'
            },
        ]
    },
    {
        collection_name: UNITY_COLLECTION_NAME,
        items: [
            {
                name_items: 'name',
                message: 'Cette uité  existe dejà!'
            },
        ]
    },
    {
        collection_name: VENDOR_COLLECTION_NAME,
        items: [
            {
                name_items: 'phone',
                message: 'Ce numero de telephone existe dejà!'
            },
        ]
    },
]
var snackbar: MatSnackBar;
/**
 * 
 * @param db Database
 * @returns Error || db
 */
export function preInsertHooks(db: any) {
    for (let collection of COLLECTION_UNIQUE) {
        db.collections[collection.collection_name].preInsert(async (docObj: any) => {
            for (let item of collection.items) {
                const params = docObj[item.name_items];
                const query = await db.collections[collection.collection_name]
                    .findOne({
                        selector: {
                            [item.name_items]: params
                        }
                    }).exec();
                if (query!=null) {
                    snackbar.open(item.message, 'Réessayer');
                    throw new Error(item.message);
                }
            }
        }, false);
        return db;
    }

}