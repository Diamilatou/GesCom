import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
} from 'rxdb';

export const DELIVERY_SCHEMA_JSON = {
    title: "CustomerDelivery schema",
    description: "Livraisons des Commandes des clients",
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        idStock:{
            type:'string',
            ref:'stock',
        },
        idSales:{
            type:'string',
            ref:'sales',
        },
        note:{
            type:"string",
        },
        dateDelivered:{
            type:"string",
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
            type: 'string',
            default:"1",
        },
        collection_name: {
            type: 'string',
            default: "delivery",
            final: true,
        }
    }
} as const;

const schemaTyped = toTypedRxJsonSchema(DELIVERY_SCHEMA_JSON);
export type deliveryDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const DELIVERY_SCHEMA: RxJsonSchema<deliveryDocType> = DELIVERY_SCHEMA_JSON;