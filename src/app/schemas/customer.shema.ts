import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
} from 'rxdb';

export const CUSTOMER_SCHEMA = {

    title: "Customer schema",
    description: "Clients de l'entreprise",
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
            default: "customer",
            final: true,

        }
    },
    required: [
        'fullName',
        'phone',
        
    ],


} as const;



const schemaTyped = toTypedRxJsonSchema(CUSTOMER_SCHEMA);
export type customerDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const Customer_schema: RxJsonSchema<customerDocType> = CUSTOMER_SCHEMA;