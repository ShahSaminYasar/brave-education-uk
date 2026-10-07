/**
 * Safely reads a JSON request body. Express's body parser silently treats a
 * missing/empty body as `{}` rather than throwing, but the Web Request API's
 * `request.json()` throws `SyntaxError: Unexpected end of JSON input` on an
 * empty body. Route handlers destructure fields immediately after reading
 * the body, so an unguarded `request.json()` turns any empty-bodied or
 * malformed request (bots/scanners probing endpoints, a stray request with
 * no Content-Type, etc.) into a scary-looking unhandled exception instead of
 * a normal "missing required field" response. This restores the tolerant
 * Express behavior.
 */
export async function readJsonBody(request) {
  const text = await request.text();
  if (!text) return {};

  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}
