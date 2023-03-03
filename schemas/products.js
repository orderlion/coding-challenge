import SimpleSchema from 'simpl-schema';

export const SchemaProducts = new SimpleSchema({
  supplierId: {
    type: String,
    required: true
  },
  ref: {
    type: String,
    required: true
  },
  name: String,
  ean: String,
  imageUrl: String,
  imageLargeUrl: String,
  createdAt: Date,
  updatedAt: Date,
  units: Array,
  'units.$': Object,
  'units.$.name': String,
  'units.$.alias': String,
  'units.$.subUnitCount': Number,
  'units.$.subUnitName': String,
  'units.$.ean': String,
  // used to save some external stuff (for APIs)
  'units.$.external': {
    type: Object,
    blackbox: true,
    optional: true
  },
  // 'meta' stores fields we don't support by default but that may be useful for
  // displaying or even for use in some business logic.
  // It's OK to return this field to the UI/graphQL
  // Examples: details, promo labels, etc.
  meta: {
    type: Object,
    defaultValue: {},
    blackbox: true
  },
  // 'external' stores fields that may come from a specific ERP/API that we don't support by default
  // but that for some reason might be needed when returning the data back to the ERP/API (via Order file, e.g)
  // This field is NOT supposed to be returned to the UI/graphQL
  // Examples: externalIds, product data that might be useful for some suppliers
  external: {
    type: Object,
    defaultValue: {},
    blackbox: true
  },
  tags: Array,
  'tags.$': String,
  description: String,
  similarProductIds: Array,
  'similarProductIds.$': String,
  disabled: {
    type: Object,
    optional: true
  },
  'disabled.disabledAt': Date,
  'disabled.logId': {
    type: String,
    optional: true
  }
}, { requiredByDefault: false });
