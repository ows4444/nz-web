type InvalidPropError<
  PropName extends string,
  LayoutName extends string,
> = `Error: ${PropName} is not allowed in ${LayoutName}.`;

type FlexBoxLayout = {
  $layout: 'flex';
  $direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  $justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  $alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
  $gap?: string;
  $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  // Invalid properties for Flex layout
  $columns?: InvalidPropError<'$columns', 'flex'>;
  $rows?: InvalidPropError<'$rows', 'flex'>;
  $columnGap?: InvalidPropError<'$columnGap', 'flex'>;
  $rowGap?: InvalidPropError<'$rowGap', 'flex'>;
  $areas?: InvalidPropError<'$areas', 'flex'>;
  $autoColumns?: InvalidPropError<'$autoColumns', 'flex'>;
  $autoRows?: InvalidPropError<'$autoRows', 'flex'>;
  $autoFlow?: InvalidPropError<'$autoFlow', 'flex'>;
};

type GridBoxLayout = {
  $layout: 'grid';
  $columns?: string;
  $rows?: string;
  $gap?: string;
  $columnGap?: string;
  $rowGap?: string;
  $areas?: string;
  $autoColumns?: string;
  $autoRows?: string;
  $autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';

  // Invalid properties for Grid layout
  $direction?: InvalidPropError<'$direction', 'grid'>;
  $justifyContent?: InvalidPropError<'$justifyContent', 'grid'>;
  $alignItems?: InvalidPropError<'$alignItems', 'grid'>;
  $alignContent?: InvalidPropError<'$alignContent', 'grid'>;
  $wrap?: InvalidPropError<'$wrap', 'grid'>;
};

type TypographyWithBox = {
  $align?: 'left' | 'center' | 'right' | 'justify';
  $color?: string;
  $fontFamily?: string;
  $fontSize?: string;
  $fontStyle?: 'normal' | 'italic' | 'oblique';
  $fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  $letterSpacing?: string;
  $lineHeight?: string;
  $textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
  $textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  $whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
  $textOverflow?: 'clip' | 'ellipsis';
  $padding?: string;
  $margin?: string;
  $border?: string;
  $borderRadius?: string;
  $boxShadow?: string;
  $width?: string;
  $height?: string;
  $minWidth?: string;
  $minHeight?: string;
  $maxWidth?: string;
  $maxHeight?: string;
  $overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  $position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $zIndex?: number;
};

type DisplayType = {
  $display?: 'block' | 'inline-block' | 'inline' | 'none';
};

// Use conditional types to manage the inclusion of $display
export type LayoutProps<T = {}> = TypographyWithBox &
  T &
  ((FlexBoxLayout & { $layout?: 'flex' }) | (GridBoxLayout & { $layout?: 'grid' }) | DisplayType);

// Layout<T> now can optionally ignore $layout and still enforce the correct behavior for $display
export type Layout<T = {}> = LayoutProps<T>;

// // LayoutProps now includes display only when the layout is not 'flex' or 'grid'
// export type LayoutProps = (FlexBoxLayout | GridBoxLayout | DisplayType) & TypographyWithBox & {
//   $layout?: 'flex' | 'grid' | 'block' | 'inline-block' | 'inline' | 'none';
// };

// BoxLayout includes FlexBoxLayout or GridBoxLayout with other generic props
export type BoxLayout<T> = (FlexBoxLayout | GridBoxLayout) & T;

// BasicLayout includes TypographyWithBox and DisplayType for other layouts
export type BasicLayout<T> = TypographyWithBox & DisplayType & T;

// Main Layout type where $display is allowed only for non-flex and non-grid layouts
// export type Layout<T> = (BoxLayout<T> | BasicLayout<T>) & T;
