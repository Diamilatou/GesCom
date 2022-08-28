import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
} from 'rxdb';

export const SALES_ITEMS_SCHEMA_JSON = {
    title: "Command customers schema",
    description: "commande des clients ",
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        idSales: {
            type: 'string',
            ref: 'sales'
        },
        idProduct: {
            type: 'string',
            ref: 'product'
        },
        quantity: {
            type: 'number',
        },
        selling_price: {
            type: 'number'
        },
        created_at: {
            type: 'string',
            format: 'date-time'
        },
        modified_by: {
            type: 'string'
        },
        modified_at: {
            type: 'string'
        },
        created_by: {
            type: 'string'
        },
        status: {
            type: 'string'
        },
        collection_name: {
            type: 'string',
            default: "salesItems",
            final: true,
        }
    },

} as const;



const schemaTyped = toTypedRxJsonSchema(SALES_ITEMS_SCHEMA_JSON);
export type salesItemsDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const SALES_ITEMS_SCHEMA: RxJsonSchema<salesItemsDocType> = SALES_ITEMS_SCHEMA_JSON;