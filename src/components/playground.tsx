'use client';

import { useActionState, useId, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitFeedback, type FormState } from '@/app/actions';
import { characterCount, validateFeedback } from '@/lib/feedback';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-box">
      <span className="small-label">CLIENT STATE</span>
      <div className="counter">
        <button onClick={() => setCount((c) => c - 1)} aria-label="Decrease">
          −
        </button>
        <output aria-live="polite">{count}</output>
        <button onClick={() => setCount((c) => c + 1)} aria-label="Increase">
          +
        </button>
      </div>
      <button className="text-button" onClick={() => setCount(0)}>
        Reset counter
      </button>
    </div>
  );
}

function Submit() {
  const { pending } = useFormStatus();

  return (
    <button className="button primary" disabled={pending}>
      {pending ? 'Validating…' : 'Submit to server ↗'}
    </button>
  );
}

export function FeedbackForm() {
  const id = useId();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [state, action] = useActionState<FormState, FormData>(submitFeedback, {
    success: false,
    message: '',
  });
  // Re-check edited values: server errors describe only the last submission.
  const errors = state.errors ? validateFeedback({ name, message }) : {};
  const matchesSubmission =
    state.values?.name === name.trim() &&
    state.values?.message === message.trim();
  const status = state.errors
    ? Object.keys(errors).length
      ? 'Please check the highlighted fields.'
      : 'Fields corrected. Submit the form again.'
    : state.success && matchesSubmission
      ? state.message
      : 'Server validation · No data is saved';

  return (
    <form action={action} className="demo-box form-stack" noValidate>
      <label>
        Your name
        <input
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={`${id}-name-help`}
          placeholder="Alexander"
          minLength={3}
          required
        />
        <span
          id={`${id}-name-help`}
          className={errors.name ? 'field-error' : 'field-hint'}
        >
          {errors.name || `3–80 characters. Current: ${characterCount(name)}.`}
        </span>
      </label>
      <label>
        What are you exploring?
        <textarea
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={`${id}-message-help`}
          placeholder="I want to understand Server Actions…"
          minLength={10}
          required
        />
        <span
          id={`${id}-message-help`}
          className={errors.message ? 'field-error' : 'field-hint'}
        >
          {errors.message ||
            `10–500 characters. Current: ${characterCount(message)}.`}
        </span>
      </label>
      <span className="field-hint">
        Leading and trailing spaces are excluded. Each emoji counts as one
        character.
      </span>
      <Submit />
      <p
        role="status"
        className={state.success && matchesSubmission ? 'success' : 'muted'}
      >
        {status}
      </p>
    </form>
  );
}

export function ApiExplorer() {
  const [result, setResult] = useState('');
  const [pending, setPending] = useState(false);
  const [q, setQ] = useState('');

  async function load() {
    setPending(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(`/api/examples?q=${encodeURIComponent(q)}`, {
        signal: controller.signal,
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setResult(JSON.stringify(await response.json(), null, 2));
    } catch (error) {
      setResult(error instanceof Error ? error.message : 'Request failed');
    } finally {
      clearTimeout(timeout);
      setPending(false);
    }
  }

  return (
    <div className="demo-box form-stack">
      <label>
        GET /api/examples?q=
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="routing"
        />
      </label>
      <button className="button primary" disabled={pending} onClick={load}>
        {pending ? 'Loading…' : 'Run GET request →'}
      </button>
      <pre aria-live="polite">
        {result || '// The API response will appear here'}
      </pre>
    </div>
  );
}

export function ErrorTrigger() {
  const [broken, setBroken] = useState(false);

  if (broken) throw new Error('Intentional demo error');

  return (
    <button className="button secondary" onClick={() => setBroken(true)}>
      Trigger demo error →
    </button>
  );
}
