'use server';

import { revalidateTag } from 'next/cache';
import {
  characterCount,
  validateFeedback,
  type FeedbackValues,
  type FeedbackErrors,
} from '@/lib/feedback';

export type FormState = {
  success: boolean;
  message: string;
  errors?: FeedbackErrors;
  values?: FeedbackValues;
};

export async function submitFeedback(
  _previous: FormState,
  data: FormData,
): Promise<FormState> {
  const name = String(data.get('name') || '').trim();
  const message = String(data.get('message') || '').trim();
  const values = { name, message };
  const errors = validateFeedback(values);

  if (Object.keys(errors).length)
    return {
      success: false,
      message: 'Please check the highlighted fields.',
      errors,
      values,
    };

  return {
    success: true,
    values,
    message: `Thank you, ${name}! Validated ${characterCount(message)} characters. This demo does not save data.`,
  };
}

export async function refreshClock() {
  revalidateTag('lab-clock', 'max');
}
