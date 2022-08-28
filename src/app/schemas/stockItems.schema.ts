import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
} from 'rxdb';



export const STOCK_ITEMS_SCHEMA_JSON = {
    title: "Stock items schema",
    description: "Stock de produit de l'entreprise",
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        idStock: {
            type: 'string',
            ref:'stock'
        },
        idProduct: {
            type: 'string',
            ref:'product'
        },
        quantity:{
            type: 'number'
        },
        isInitialized:{
            type:'boolean',
            default:false,
        },
        adress: {
            type: 'string',
        },
        status: {
            type: 'string',
            default:'1'
        },
        created_at: {
            type: 'string',
        },
        created_by: {
            type: 'string'
        },
        modified_at: {
            type: 'string',
            default:"",
        },
        modified_by: {
            type: 'string',
            default:"",
        },
        collection_name:{
            type:'string',
            default:"stockItems",
            final: true,
        },
    },
    required: [
    ],
    


} as const;

const schemaTyped = toTypedRxJsonSchema(STOCK_ITEMS_SCHEMA_JSON);
export type stockItemsDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const STOCK_ITEMS_SCHEMA: RxJsonSchema<stockItemsDocType> = STOCK_ITEMS_SCHEMA_JSON;