import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
} from 'rxdb';

export const CATEGORY_SCHEMA_JSON ={
    title: "category schema",
    description: "Categorie de produit",
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        created_by: {
            type: 'string',
        },
        created_at: {
            type: 'string',
            format:'date-time'
        },
        modified_by: {
            type: 'string',
           
        },
        modified_at: {
            type: 'string'
        },
        status: {
            type: 'string'
        },
        collection_name:{
            type:'string',
            default:"category",
            final: true,
            
        }
    },
    required: [
        'name',      
    ],


} as const;



const schemaTyped = toTypedRxJsonSchema(CATEGORY_SCHEMA_JSON);
export type CategoryDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const CATEGORY_SCHEMA: RxJsonSchema<CategoryDocType> = CATEGORY_SCHEMA_JSON;