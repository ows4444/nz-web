/* eslint-disable no-unused-vars */

// All elements
export enum Components {
  A = 'A',
  ADDRESS = 'ADDRESS',
  AREA = 'AREA',
  ARTICLE = 'ARTICLE',
  ASIDE = 'ASIDE',
  B = 'B',
  BLOCKQUOTE = 'BLOCKQUOTE',
  BR = 'BR',
  BUTTON = 'BUTTON',
  CANVAS = 'CANVAS',
  CAPTION = 'CAPTION',
  COL = 'COL',
  COLGROUP = 'COLGROUP',
  DD = 'DD',
  DEL = 'DEL',
  DETAILS = 'DETAILS',
  DFN = 'DFN',
  DIALOG = 'DIALOG',
  DIV = 'DIV',
  DL = 'DL',
  DT = 'DT',
  EM = 'EM',
  EMBED = 'EMBED',
  FIELDSET = 'FIELDSET',
  FIGCAPTION = 'FIGCAPTION',
  FIGURE = 'FIGURE',
  FOOTER = 'FOOTER',
  FORM = 'FORM',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  HEADER = 'HEADER',
  HGROUP = 'HGROUP',
  HR = 'HR',
  I = 'I',
  INPUT = 'INPUT',
  INS = 'INS',
  LABEL = 'LABEL',
  LEGEND = 'LEGEND',
  LI = 'LI',
  MENU = 'MENU',
  MAIN = 'MAIN',
  MAP = 'MAP',
  MARK = 'MARK',
  NAV = 'NAV',
  OL = 'OL',
  OPTGROUP = 'OPTGROUP',
  OPTION = 'OPTION',
  P = 'P',
  PICTURE = 'PICTURE',
  PRE = 'PRE',
  PROGRESS = 'PROGRESS',
  Q = 'Q',
  SECTION = 'SECTION',
  SELECT = 'SELECT',
  SMALL = 'SMALL',
  SPAN = 'SPAN',
  STRONG = 'STRONG',
  SUB = 'SUB',
  SUMMARY = 'SUMMARY',
  SUP = 'SUP',
  TABLE = 'TABLE',
  TBODY = 'TBODY',
  TD = 'TD',
  TEXTAREA = 'TEXTAREA',
  TFOOT = 'TFOOT',
  TH = 'TH',
  THEAD = 'THEAD',
  TR = 'TR',
  U = 'U',
  UL = 'UL',
  // molecules

  CONTAINER = 'CONTAINER',

  CARD = 'CARD',
  CARD_BODY = 'CARD_BODY',
  CARD_FOOTER = 'CARD_FOOTER',
  CARD_HEADER = 'CARD_HEADER',

  INPUT_GROUP = 'INPUT_GROUP',
}

export type Component = keyof typeof Components;
