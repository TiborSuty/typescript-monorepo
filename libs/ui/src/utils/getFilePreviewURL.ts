import {test} from 'ramda';

const DOC_SUFFIX_REGEX = /\.docx?/;

/**
 * in case a file is DOCX we need to convert it to PDF to preview it
 */
export const getFilePreviewUrl = (path: string) => {
  const url = new URL(path);

  const fileName = url.searchParams.get('filename');
  const isFileNameDocx = test(DOC_SUFFIX_REGEX, fileName ?? '');
  const hasInlineTypeInUrl = url.searchParams.get('type') === 'inline';

  if (isFileNameDocx) {
    const fileId = url.pathname.split('/')[2];

    url.searchParams.append('format', 'pdf');

    return `${url.origin}/convert/${fileId}${url.search}`;
  } else if (!hasInlineTypeInUrl) url.searchParams.append('type', 'inline');

  return url.href;
};
