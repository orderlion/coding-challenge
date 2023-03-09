import SimpleSchema from 'simpl-schema';

export const SchemaBuyers = new SimpleSchema({
  supplierId: {
    type: String,
    required: true
  },
  createdAt: Date,
  createdBy: String,
  customerId: String,
  company: Object,
  'company.name': String,
  'company.street': String,
  'company.zip': String,
  'company.city': String,
  'company.email': String,
  'company.tel': String,
  'company.fax': String,
  'company.web': String,
  'company.uid': String,
  'company.countryCode': String,
  isTestBuyer: { // Is this a test buyer?
    type: Boolean,
    defaultValue: false
  },
  meta: { type: Object, blackbox: true },
  // TODO: define schema for buyer settings
  settings: { type: Object, blackbox: true },
  external: { type: Object, blackbox: true }, // Currently holds some Supli migration data
  source: String,
  status: String,
  updatedAt: Date,
  users: Array,
  'users.$': Object,
  'users.$.userId': String,
  'users.$.role': String
}, { requiredByDefault: false });
