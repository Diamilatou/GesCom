import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
} from 'rxdb';

export const VENDOR_SCHEMA_JSON = {

    title: "vendor schema",
    description: "les fournisseurs",
    version: 1,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        fullName: {
            type: 'string'
        },
        address: {
            type: 'string'
        },
        city: {
            type: 'string'
        },
        phone: {
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
            default: "vendor",
            final: true,

        }
    },
    required: [
        'fullName',
        'phone',
        
    ],


} as const;



const schemaTyped = toTypedRxJsonSchema(VENDOR_SCHEMA_JSON);
export type vendorDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const VENDOR_SCHEMA: RxJsonSchema<vendorDocType> = VENDOR_SCHEMA_JSON;