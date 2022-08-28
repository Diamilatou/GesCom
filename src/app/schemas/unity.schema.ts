import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
} from 'rxdb';

export const UNITY_SCHEMA_JSON ={
    title: "unity schema",
    description: "unité de produit",
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
        }
        ,
        collection_name:{
            type:'string',
            default:"unity",
            final: true,
            
        }
    },
    required: [
        'name',      
    ],


} as const;



const schemaTyped = toTypedRxJsonSchema(UNITY_SCHEMA_JSON);
export type UnityDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const UNITY_SCHEMA: RxJsonSchema<UnityDocType> = UNITY_SCHEMA_JSON;