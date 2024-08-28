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

type TextLayout = {
  $align?: 'left' | 'center' | 'right' | 'justify';
  $color?: string;
  $fontFamily?: string;
  $fontSize?: string;
  $fontStyle?: 'normal' | 'italic';
  $fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  $letterSpacing?: string;
  $lineHeight?: string;
  $textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
  $textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  $whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
};

export type LayoutProps = FlexBoxLayout & GridBoxLayout & TextLayout & { $layout: 'flex' | 'grid' };

export type BoxLayout<T> = (FlexBoxLayout | GridBoxLayout) & T;
export type BasicLayout<T> = TextLayout & T;
export type Layout<T> = (BoxLayout<T> | BasicLayout<T>) & BasicLayout & T;
