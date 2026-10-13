import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isInjectedWalletRejection } from '../src/lib/browser-errors.ts';
const observedRejection = {
  code: 4001,
  message: 'wallet must has at least one account',
};
test('handles only the observed rejection with a TokenPocket marker', () => {
  assert.equal(isInjectedWalletRejection(observedRejection, true), true);
  assert.equal(isInjectedWalletRejection(observedRejection, false), false);
});
test('keeps application errors and other wallet failures visible', () => {
  for (const reason of [
    new Error('Application bug'),
    null,
    'failure',
    {},
    { code: 4001, message: 'User denied request' },
    { code: 5000, message: observedRejection.message },
  ]) {
    assert.equal(isInjectedWalletRejection(reason, true), false);
  }
});
