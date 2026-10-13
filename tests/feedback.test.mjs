import { test } from 'node:test';
import assert from 'node:assert/strict';
import { characterCount, validateFeedback } from '../src/lib/feedback.ts';
test('counts digits and Cyrillic correctly', () => {
  assert.equal(characterCount('11111'), 5);
  assert.equal(characterCount('1234567890'), 10);
  assert.equal(
    characterCount('\u041f\u0440\u0438\u0432\u0435\u0442 \u043c\u0438\u0440'),
    10,
  );
});
test('counts visible Unicode characters after trimming', () => {
  assert.equal(characterCount('  11111  '), 5);
  assert.equal(characterCount('   '), 0);
  assert.equal(characterCount('👨‍👩‍👧‍👦'), 1);
  assert.equal(characterCount('\u0435\u0301'), 1);
});
test('validates the message independently of the name', () => {
  assert.deepEqual(validateFeedback({ name: 'Developer', message: '11111' }), {
    message: 'Message: use 10–500 characters. Current: 5.',
  });
  assert.deepEqual(
    validateFeedback({ name: 'Developer', message: '1234567890' }),
    {},
  );
  assert.deepEqual(
    validateFeedback({ name: '\u042f', message: '1234567890' }),
    {
      name: 'Name: use 3–80 characters. Current: 1.',
    },
  );
  assert.ok(
    validateFeedback({ name: 'Developer', message: '1'.repeat(501) }).message,
  );
});

test('requires at least three characters in the name', () => {
  assert.ok(validateFeedback({ name: 'Al', message: '1234567890' }).name);
  assert.deepEqual(
    validateFeedback({ name: 'Ali', message: '1234567890' }),
    {},
  );
});
