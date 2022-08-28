import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
} from 'rxdb';

export const PRODUCT_SCHEMA_JSON = {

    title: "Product schema",
    description: "Produit de l'entreprise",
    version: 1,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        category:{
            type:'string',
            ref:'category'
        },
        unity: {
            type:'string',
            ref:"unity"
        },
        seuil:{
            type:'string',
        },
        selling_price: {
            type:'number'
        },
        buying_price: {
            type:'number'
        },
        
        created_by: {
            type: 'string'
        },
        created_at: {
            type: 'string',
            format:'date-time'
        },
        modified_by: {
            type: 'string'
        },
        modified_at: {
            type: 'string'
        },
        status: {
            type: 'string'
        },
        collection_name:{
            type:'string',
            default:"product",
            final: true,
        }
    },


} as const;



const schemaTyped = toTypedRxJsonSchema(PRODUCT_SCHEMA_JSON);
export type productDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const PRODUCT_SCHEMA: RxJsonSchema<productDocType> = PRODUCT_SCHEMA_JSON;