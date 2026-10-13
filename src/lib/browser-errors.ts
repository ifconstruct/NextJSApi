/** Only the observed unsolicited empty-account rejection from TokenPocket. */
export function isInjectedWalletRejection(
  reason: unknown,
  hasTokenPocketMarker: boolean,
): boolean {
  if (
    !hasTokenPocketMarker ||
    !reason ||
    typeof reason !== 'object' ||
    reason instanceof Error
  )
    return false;

  const rejection = reason as { code?: unknown; message?: unknown };

  return (
    rejection.code === 4001 &&
    rejection.message === 'wallet must has at least one account'
  );
}
