import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

type Components = {
  [key: string]: ComponentType<any>;
};

export type component = {
  name: string;
  children?: ChildComponent[];
  action?: any;
  props?: Record<string, any>;
};

export type ChildComponent = {
  key: any;
  name: string;
  children?: ChildComponent[];
  props?: Record<string, any>;
};

export const components: Components = {
  // Core Start
  // Atoms

  A: dynamic(() => import(`@components/core/atoms/a/a`)),
  COL: dynamic(() => import(`@components/core/atoms/col/col`)),
  EMBED: dynamic(() => import(`@components/core/atoms/embed/embed`)),
  H6: dynamic(() => import(`@components/core/atoms/h6/h6`)),
  MAIN: dynamic(() => import(`@components/core/atoms/main/main`)),
  PROGRESS: dynamic(() => import(`@components/core/atoms/progress/progress`)),
  TBODY: dynamic(() => import(`@components/core/atoms/tbody/tbody`)),
  ADDRESS: dynamic(() => import(`@components/core/atoms/address/address`)),
  COLGROUP: dynamic(() => import(`@components/core/atoms/colgroup/colgroup`)),
  FIELDSET: dynamic(() => import(`@components/core/atoms/fieldset/fieldset`)),
  HEADER: dynamic(() => import(`@components/core/atoms/header/header`)),
  MAP: dynamic(() => import(`@components/core/atoms/map/map`)),
  Q: dynamic(() => import(`@components/core/atoms/q/q`)),
  TD: dynamic(() => import(`@components/core/atoms/td/td`)),
  AREA: dynamic(() => import(`@components/core/atoms/area/area`)),
  DD: dynamic(() => import(`@components/core/atoms/dd/dd`)),
  FIGCAPTION: dynamic(() => import(`@components/core/atoms/figcaption/figcaption`)),
  HGROUP: dynamic(() => import(`@components/core/atoms/hgroup/hgroup`)),
  MARK: dynamic(() => import(`@components/core/atoms/mark/mark`)),
  SECTION: dynamic(() => import(`@components/core/atoms/section/section`)),
  TEXTAREA: dynamic(() => import(`@components/core/atoms/textarea/textarea`)),
  DEL: dynamic(() => import(`@components/core/atoms/del/del`)),
  ARTICLE: dynamic(() => import(`@components/core/atoms/article/article`)),
  FIGURE: dynamic(() => import(`@components/core/atoms/figure/figure`)),
  HR: dynamic(() => import(`@components/core/atoms/hr/hr`)),
  MENU: dynamic(() => import(`@components/core/atoms/menu/menu`)),
  SELECT: dynamic(() => import(`@components/core/atoms/select/select`)),
  TFOOT: dynamic(() => import(`@components/core/atoms/tfoot/tfoot`)),
  ASIDE: dynamic(() => import(`@components/core/atoms/aside/aside`)),
  DETAILS: dynamic(() => import(`@components/core/atoms/details/details`)),
  FOOTER: dynamic(() => import(`@components/core/atoms/footer/footer`)),
  I: dynamic(() => import(`@components/core/atoms/i/i`)),
  NAV: dynamic(() => import(`@components/core/atoms/nav/nav`)),
  SMALL: dynamic(() => import(`@components/core/atoms/small/small`)),
  TH: dynamic(() => import(`@components/core/atoms/th/th`)),
  B: dynamic(() => import(`@components/core/atoms/b/b`)),
  DFN: dynamic(() => import(`@components/core/atoms/dfn/dfn`)),
  FORM: dynamic(() => import(`@components/core/atoms/form/form`)),
  OL: dynamic(() => import(`@components/core/atoms/ol/ol`)),
  SPAN: dynamic(() => import(`@components/core/atoms/span/span`)),
  THEAD: dynamic(() => import(`@components/core/atoms/thead/thead`)),
  BLOCKQUOTE: dynamic(() => import(`@components/core/atoms/blockquote/blockquote`)),
  DIALOG: dynamic(() => import(`@components/core/atoms/dialog/dialog`)),
  H1: dynamic(() => import(`@components/core/atoms/h1/h1`)),
  INPUT: dynamic(() => import(`@components/core/atoms/input/input`)),
  OPTGROUP: dynamic(() => import(`@components/core/atoms/optgroup/optgroup`)),
  STRONG: dynamic(() => import(`@components/core/atoms/strong/strong`)),
  TR: dynamic(() => import(`@components/core/atoms/tr/tr`)),
  BR: dynamic(() => import(`@components/core/atoms/br/br`)),
  DIV: dynamic(() => import(`@components/core/atoms/div/div`)),
  H2: dynamic(() => import(`@components/core/atoms/h2/h2`)),
  INS: dynamic(() => import(`@components/core/atoms/ins/ins`)),
  OPTION: dynamic(() => import(`@components/core/atoms/option/option`)),
  SUB: dynamic(() => import(`@components/core/atoms/sub/sub`)),
  U: dynamic(() => import(`@components/core/atoms/u/u`)),
  BUTTON: dynamic(() => import(`@components/core/atoms/button/button`)),
  DL: dynamic(() => import(`@components/core/atoms/dl/dl`)),
  H3: dynamic(() => import(`@components/core/atoms/h3/h3`)),
  LABEL: dynamic(() => import(`@components/core/atoms/label/label`)),
  P: dynamic(() => import(`@components/core/atoms/p/p`)),
  SUMMARY: dynamic(() => import(`@components/core/atoms/summary/summary`)),
  UL: dynamic(() => import(`@components/core/atoms/ul/ul`)),
  CANVAS: dynamic(() => import(`@components/core/atoms/canvas/canvas`)),
  DT: dynamic(() => import(`@components/core/atoms/dt/dt`)),
  H4: dynamic(() => import(`@components/core/atoms/h4/h4`)),
  LEGEND: dynamic(() => import(`@components/core/atoms/legend/legend`)),
  PICTURE: dynamic(() => import(`@components/core/atoms/picture/picture`)),
  SUP: dynamic(() => import(`@components/core/atoms/sup/sup`)),
  CAPTION: dynamic(() => import(`@components/core/atoms/caption/caption`)),
  EM: dynamic(() => import(`@components/core/atoms/em/em`)),
  H5: dynamic(() => import(`@components/core/atoms/h5/h5`)),
  LI: dynamic(() => import(`@components/core/atoms/li/li`)),
  PRE: dynamic(() => import(`@components/core/atoms/pre/pre`)),
  TABLE: dynamic(() => import(`@components/core/atoms/table/table`)),

  // Molecules

  CARD_BODY: dynamic(() => import(`@components/core/molecules/card-body/card-body`)),
  CARD_FOOTER: dynamic(() => import(`@components/core/molecules/card-footer/card-footer`)),
  CARD_HEADER: dynamic(() => import(`@components/core/molecules/card-header/card-header`)),
  INPUT_GROUP: dynamic(() => import(`@components/core/molecules/input-group/input-group`)),

  // Organisms

  CARD: dynamic(() => import(`@components/core/organisms/card/card`)),
  // Core End

  // components Start
  // Atoms
  BOX: dynamic(() => import(`@components/atoms/box/box`)),
  Row: dynamic(() => import(`@components/atoms/row/row`)),
  CONTAINER: dynamic(() => import(`@components/atoms/container/container`)),
  // Molecules

  // components End
};
