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
  /*
    priceInfo works like this: example:
    If we have a unit with a name "KRT", the alias of the unit is "krt".
    To save a price of 12.89 per KRT unit, priceInfo has to look like this:
    priceInfo: {
      krt: 12.89
    }
  */
  createdAt: Date,
  updatedAt: {
    type: Date,
    optional: true
  }
});
