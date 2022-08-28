import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
} from 'rxdb';



export const STOCK_SCHEMA_JSON = {
    title: "Stock Product schema",
    description: "Stock de produit de l'entreprise",
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        name: {
            type: 'string',
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
            default:"stock",
            final: true,
        },
    },
    required: [
    ],
    


} as const;

const schemaTyped = toTypedRxJsonSchema(STOCK_SCHEMA_JSON);
export type stockDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const STOCK_SCHEMA: RxJsonSchema<stockDocType> = STOCK_SCHEMA_JSON;