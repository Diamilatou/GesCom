import {
    ExtractDocumentTypeFromTypedRxJsonSchema,
    RxJsonSchema,
    toTypedRxJsonSchema,
  } from "rxdb";
  
  export const PAYEMENT_VENDOR_SCHEMA_JSON = {
    title: "vendorPayement schema",
    description: "payements client",
    version: 1,
    primaryKey: "id",
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      idVendor: {
        type: "string",
        ref: "vendor",
      },
      idPurchase: {
        type: "string",
        ref: "puchase",
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
        default: "payementVendor",
        final: true,
      },
    },
    required: [],
  } as const;
  
  const schemaTyped = toTypedRxJsonSchema(PAYEMENT_VENDOR_SCHEMA_JSON);
  export type payementVendorDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
  export const PAYEMENT_VENDOR_SCHEMA: RxJsonSchema<payementVendorDocType> = PAYEMENT_VENDOR_SCHEMA_JSON;
  