import SimpleSchema from 'simpl-schema';

export const SchemaPrices = new SimpleSchema({
  productId: String,
  supplierId: String,
  buyerGroupId: {
    type: String,
    optional: true
  },
  buyerId: {
    type: String,
    optional: true
  },
  priceInfo: {
    type: Object,
    blackbox: true,
    optional: true
  },
  createdAt: Date,
  updatedAt: {
    type: Date,
    optional: true
  }
});
