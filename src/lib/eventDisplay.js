import moment from "moment-timezone";

const TIMEZONE = "Europe/London";

/**
 * Event startDate/endDate are stored as the raw datetime-local input string
 * ("2026-03-15T14:00") - never converted to a Date/ISO instant at save
 * time, because a plain string unambiguously means "this wall-clock time in
 * Europe/London" regardless of what timezone the server happens to be
 * running in. `moment.tz(value, "Europe/London")` parses that string AS a
 * local time in that zone, correctly handling the BST/GMT switch, and gives
 * back a moment with the real UTC offset - use this wherever the raw value
 * needs to become something display- or machine-readable.
 */
export const parseEventDate = (value) => {
  if (!value) return null;
  const m = moment.tz(value, "YYYY-MM-DDTHH:mm", TIMEZONE);
  return m.isValid() ? m : null;
};

export const formatEventDate = (value, format = "dddd D MMMM YYYY, h:mm A") => {
  const m = parseEventDate(value);
  return m ? m.format(format) : "";
};

/** ISO 8601 string with the correct Europe/London UTC offset, for JSON-LD. */
export const toEventIsoString = (value) => {
  const m = parseEventDate(value);
  return m ? m.format() : null;
};
