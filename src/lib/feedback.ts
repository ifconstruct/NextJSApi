export type FeedbackValues = { name: string; message: string };

export type FeedbackErrors = { name?: string; message?: string };

const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });

export function characterCount(value: string) {
  return Array.from(segmenter.segment(value.trim())).length;
}

export function validateFeedback(values: FeedbackValues): FeedbackErrors {
  const errors: FeedbackErrors = {};
  const nameLength = characterCount(values.name);
  const messageLength = characterCount(values.message);

  if (nameLength < 3 || nameLength > 80)
    errors.name = `Name: use 3–80 characters. Current: ${nameLength}.`;

  if (messageLength < 10 || messageLength > 500)
    errors.message = `Message: use 10–500 characters. Current: ${messageLength}.`;

  return errors;
}
