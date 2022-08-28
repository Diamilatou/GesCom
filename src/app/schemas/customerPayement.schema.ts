import {
    ExtractDocumentTypeFromTypedRxJsonSchema,
    RxJsonSchema,
    toTypedRxJsonSchema,
  } from "rxdb";
  
  export const PAYEMENT_CUSTOMER_SCHEMA_JSON = {
    title: "CustomerPayement schema",
    description: "payements client",
    version: 1,
    primaryKey: "id",
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      idCustomer: {
        type: "string",
        ref: "customer",
      },
      idSales: {
        type: "string",
        ref: "sales",
      },
      saving_id: {
        type: "string",
        ref: "Saving",
      },
       // contient le montant en GNF
       amount: {
        type: "number",
      },
      details: {
        type: "string",
      },
      created_at: {
        type: "string",
        format: "date-time",
      },
      modified_by: {
        type: "string",
      },
      modified_at: {
        type: "string",
      },
      created_by: {
        type: "string",
      },
      status: {
        type: "number",
        default: 1,
      },
      collection_name: {
        type: "string",
        default: "payementCustomer",
        final: true,
      },
    },
    required: [],
  } as const;
  
  const schemaTyped = toTypedRxJsonSchema(PAYEMENT_CUSTOMER_SCHEMA_JSON);
  export type payementCustomerDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
  export const PAYEMENT_CUSTOMER_SCHEMA: RxJsonSchema<payementCustomerDocType> = PAYEMENT_CUSTOMER_SCHEMA_JSON;
  