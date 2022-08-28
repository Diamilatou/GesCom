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
        iddelivery:{
            type:'string',
            ref:'delivery',
        },
        idProduct:{
            type:'string',
            ref:'product',
        },
        quantity:{
            type:'number',
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
            default: "deliveryItems",
            final: true,
        }
    }
} as const;

const schemaTyped = toTypedRxJsonSchema(DELIVERY_SCHEMA_JSON);
export type deliveryItemsDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const DELIVERY_ITEMS_SCHEMA: RxJsonSchema<deliveryItemsDocType> = DELIVERY_SCHEMA_JSON;