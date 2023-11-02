import {isValid, parse} from 'date-fns';
import {AppLanguage, LocaleConfig, getDefaultLocaleByAppLanguage} from 'platform/locale';

import {replace} from 'ramda';

import {Nullish} from 'shared';

const REFERENCE_DATE = new Date();
const stripWhitespace = replace(/\s/g, '');
const removeLeadingZeros = replace(/(^|[^0-9])0+/g, '$1');

export function getDateFromStringInput(
  input: string | Nullish,
  localeConfig: LocaleConfig,
  language: AppLanguage
): Date | null {
  if (!input) return null;
  const defaultLocale = getDefaultLocaleByAppLanguage(language);
  const trimmedInput = stripWhitespace(input);
  const noZerosInput = removeLeadingZeros(input);

  /** Parse a string with locale config format  */
  const date = parseDate(input, localeConfig.dateTimeFormat.dateShort);
  if (date) return date;

  /** Strip whitespace from format and input to parse 1. 6. 2020 with d.M.yyyy format  */
  const trimmed = parseDate(trimmedInput, stripWhitespace(localeConfig.dateTimeFormat.dateShort));
  if (trimmed) return trimmed;

  /** Handle date with added leading zeros such as 01. 06. 2020  */
  const cleared = parseDate(noZerosInput, stripWhitespace(localeConfig.dateTimeFormat.dateShort));
  if (cleared) return cleared;

  /** Parse with default locale config for current language  */
  const defaultDate = parseDate(input, defaultLocale.dateTimeFormat.dateShort);
  if (defaultDate) return defaultDate;

  /** Strip whitespace from default format and input to parse 1. 6. 2020 with d.M.yyyy format  */
  const trimDefault = parseDate(
    trimmedInput,
    stripWhitespace(defaultLocale.dateTimeFormat.dateShort)
  );
  if (trimDefault) return trimDefault;

  /** Handle date with default format and added leading zeros to input such as 01. 06. 2020  */
  const clearDefault = parseDate(
    noZerosInput,
    stripWhitespace(defaultLocale.dateTimeFormat.dateShort)
  );
  if (clearDefault) return clearDefault;

  return null;
}

function parseDate(input: string, format: string): Date | null {
  try {
    const parsedDate = parse(input, format, REFERENCE_DATE);
    if (isValid(parsedDate)) return parsedDate;
  } catch (error) {
    return null;
  }

  return null;
}
