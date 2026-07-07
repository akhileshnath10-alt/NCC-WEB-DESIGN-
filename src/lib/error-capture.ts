let lastError: unknown = null;

export function captureError(error: unknown) {
  lastError = error;
}

export function consumeLastCapturedError() {
  const error = lastError;
  lastError = null;
  return error;
}
