import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
} from 'rxdb';

export const SALES_SCHEMA_JSON = {
    title: "Sales schema",
    description: "les ventes",
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        idCustomer: {
            type: 'string',
            ref: 'customer'
        },
        type_sale:{
            type:'number'
        },
        name_customer:{
            type:'string'
        },
        phone_client:{
            type:'number'
        },
        idStock:{
            type:'string',
            ref:'stockProduct'
        },
        amount:{
            type:"string"
        },
        regler:{
            type:'boolean',
            default:false
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
            default: "sales",
            final: true,
        }
    },

} as const;



const schemaTyped = toTypedRxJsonSchema(SALES_SCHEMA_JSON);
export type salesDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const SALES_SCHEMA: RxJsonSchema<salesDocType> = SALES_SCHEMA_JSON;