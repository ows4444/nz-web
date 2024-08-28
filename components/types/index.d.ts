type FlexBoxLayout = {
  $layout: 'flex';
  $direction?: 'row' | 'column';
  $justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  $gap?: string;
  $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

type GridBoxLayout = {
  $layout: 'grid';
  $columns?: number;
  $rows?: number;
  $gap?: string;
  $autoRows?: 'auto' | 'minmax' | 'max-content' | 'min-content' | 'auto-fit' | 'auto-fill';
  $autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
};

export type BoxLayout<T> = (FlexBoxLayout | GridBoxLayout) & T;

export type Layout<T> = BoxLayout<T> | T;
