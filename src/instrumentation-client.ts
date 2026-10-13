import { isInjectedWalletRejection } from '@/lib/browser-errors';

// Next loads this before its dev error listeners. TokenPocket attempts an
// unsolicited wallet connection even though this application has no wallet API.
// Handle only the observed empty-account failure, with the vendor DOM marker.
// Leave application errors and every other rejection available to Next DevTools.
window.addEventListener('unhandledrejection', (event) => {
  const root = document.documentElement;
  const hasTokenPocketMarker = root
    .getAttributeNames()
    .some(
      (attribute) =>
        attribute.startsWith('data-tp-bcm-channel-') &&
        root.getAttribute(attribute)?.startsWith('TokenPocket:'),
    );

  if (!isInjectedWalletRejection(event.reason, hasTokenPocketMarker)) return;

  event.preventDefault();
  event.stopImmediatePropagation();
  console.warn(
    'Ignored an unsolicited TokenPocket connection failure: the wallet has no accounts.',
  );
});
