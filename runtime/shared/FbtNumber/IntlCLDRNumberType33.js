/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<faa6535d44b2faffc9560cbcd9d47350>>
 *
 * Generated by LanguageCLDRGenScript
 *
 * @flow
 */
const IntlVariations = require('IntlVariations');
const IntlCLDRNumberType33 = {
  getVariation(n: number): number {
    if (n % 10 === 1) {
      return IntlVariations.NUMBER_ONE;
    } else if (n % 10 === 2) {
      return IntlVariations.NUMBER_TWO;
    } else if ((n % 100 === 0 || n % 100 === 20 || n % 100 === 40 || n % 100 === 60 || n % 100 === 80)) {
      return IntlVariations.NUMBER_FEW;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType33;
