import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
} from 'rxdb';

export const SAVING_SCHEMA_JSON = {
    title: "saving schema",
    description: "Caisses",
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
        init_balance:{
            type: 'number'
        },
      
        type: {
            type: "string",
            //type ==='1' entree type === '2' sortie;
        },
        created_by: {
            type: 'string'
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
        status: {
            type: 'string'
        }
        ,
        collection_name: {
            type: 'string',
            default: "saving",
            final: true,

        }
    },

} as const;



const schemaTyped = toTypedRxJsonSchema(SAVING_SCHEMA_JSON);
export type savingDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const SAVING_SCHEMA: RxJsonSchema<savingDocType> = SAVING_SCHEMA_JSON;