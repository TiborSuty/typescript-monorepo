import {AlignType, FlexboxJustify} from 'platform/foundation';

const alignToJustifyMap = new Map<AlignType, FlexboxJustify>([
  ['left', 'flex-start'],
  ['center', 'center'],
  ['right', 'flex-end'],
]);

export const getJustifyFromAlign = (align: AlignType | undefined): FlexboxJustify =>
  alignToJustifyMap.get(align ?? 'left') ?? 'flex-start';
