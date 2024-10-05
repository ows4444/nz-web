/* eslint-disable no-unused-vars */
import { Component } from '@styles/theme/components';
import { BorderRadius, borderSize } from '@styles/theme/types/border';
import {
	BorderLength,
	BorderLengthWithDirection,
	Color,
	colorEnum,
	Gradient,
	Length,
	LengthWithDirection,
	MediaSize,
	PartialRecord,
	ZIndex
} from '@styles/theme/types/common';
import { FontFamily, FontSize, FontWeight, LineHight } from '@styles/theme/types/font';

export type FlexLayout = {
	$layout: 'flex';
	$direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	$justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	$alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	$alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
	$gap?: Length;
	$wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	$alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

export type GridLayout = {
	$layout: 'grid';
	$columns?: number;
	$rows?: number;
	$gap?: Length;
	$columnGap?: Length;
	$rowGap?: Length;
	$areas?: string;
	$autoColumns?: string;
	$autoRows?: string;
	$autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
	$grid?: string;
	$gridAutoColumns?: string;
	$gridAutoFlow?: string;
	$gridAutoRows?: string;
	$gridTemplate?: string;
	$gridTemplateAreas?: Array<string>;
	$gridTemplateColumns?: string;
	$gridTemplateRows?: string;
};

export type NoneLayout = {
	$layout: 'none';
};

export type FlexItemLayout = {
	$layoutItem: 'flex-item';
	$flex?: string;
	$order?: number;
	$flexGrow?: number;
	$flexShrink?: number;
	$flexBasis?: string;
	$alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

export type GridItemLayout = {
	$layoutItem: 'grid-item';
	$gridArea?: string;
	$gridColumn?: string;
	$gridColumnEnd?: string;
	$gridColumnStart?: string;
	$gridRow?: string;
	$gridRowEnd?: string;
	$gridRowStart?: string;
};

export type BlockLayout = {
	$layout: 'block';
	$float?: 'left' | 'right' | 'none';
	$clear?: 'left' | 'right' | 'both' | 'none';
};

export type TypographyLayout = {
	$fontSize?: FontSize;
	$fontWeight?: FontWeight;
	$fontFamily?: FontFamily;
	$fontStyle?: 'normal' | 'italic' | 'oblique';
	$textAlign?: 'left' | 'right' | 'center' | 'justify';
	$textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
	$letterSpacing?: Length;
	$lineHeight?: LineHight;
	$textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
};

export type PositionLayout = {
	$position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
	$top?: Length;
	$right?: Length;
	$bottom?: Length;
	$left?: Length;
	$zIndex?: ZIndex;
};

export type SizeLayout = {
	$width?: Length;
	$minWidth?: Length;
	$maxWidth?: Length;
	$height?: Length;
	$minHeight?: Length;
	$maxHeight?: Length;
};

export type OverflowLayout = {
	$overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
};

export type StyleLayout = {
	$listStyle?: 'none' | 'disc' | 'circle' | 'square';
};

export type SpacingLayout = {
	$margin?: LengthWithDirection;
	$marginX?: Length;
	$marginY?: Length;
	$marginTop?: Length;
	$marginRight?: Length;
	$marginBottom?: Length;
	$marginLeft?: Length;

	$padding?: LengthWithDirection;
	$paddingX?: Length;
	$paddingY?: Length;
	$paddingTop?: Length;
	$paddingRight?: Length;
	$paddingBottom?: Length;
	$paddingLeft?: Length;
};

export type BorderLayout = {
	$border?: BorderLengthWithDirection;
	$borderTop?: BorderLength;
	$borderRight?: BorderLength;
	$borderBottom?: BorderLength;
	$borderLeft?: BorderLength;
	$borderRadius?: LengthWithDirection;
	$borderColor?: Color;
	$borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double' | 'none';
};

export type BackgroundLayout = {
	$backgroundColor?: string;
	$backgroundImage?: string;
	$backgroundPosition?: string;
	$backgroundSize?: 'auto' | 'cover' | 'contain';
	$backgroundRepeat?: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y';
	$backgroundClip?: 'border-box' | 'padding-box' | 'content-box';
};

// Shadow Layout
export type ShadowLayout = {
	$boxShadow?: string;
	$textShadow?: string;
};

// Visibility Layout
export type VisibilityLayout = {
	$visibility?: 'visible' | 'hidden' | 'collapse';
	$opacity?: number;
};

export type ColorLayout = {
	$color?: Color;
	$backgroundColor?: Color;
	$borderColor?: Color;
};

// Cursor Layout
export type CursorLayout = {
	$cursor?:
		| 'auto'
		| 'default'
		| 'pointer'
		| 'text'
		| 'move'
		| 'not-allowed'
		| 'wait'
		| 'crosshair'
		| 'grab'
		| 'grabbing';
};

type FlexLayoutProperties = Omit<FlexLayout, '$layout'>;
type GridLayoutProperties = Omit<GridLayout, '$layout'>;
type BlockLayoutProperties = Omit<BlockLayout, '$layout'>;
type NoneLayoutProperties = Omit<NoneLayout, '$layout'>;

type FlexItemLayoutProperties = Omit<FlexItemLayout, '$layoutItem'>;
type GridItemLayoutProperties = Omit<GridItemLayout, '$layoutItem'>;

type LayoutFor<T extends 'flex' | 'grid' | 'block' | 'none'> = T extends 'flex'
	? FlexLayoutProperties & { $layout: 'flex' }
	: T extends 'grid'
		? GridLayoutProperties & { $layout: 'grid' }
		: T extends 'block'
			? BlockLayoutProperties & { $layout: 'block' }
			: T extends 'none'
				? NoneLayoutProperties & { $layout: 'none' }
				: never;

type LayoutItemFor<T extends 'flex-item' | 'grid-item'> = T extends 'flex-item'
	? FlexItemLayoutProperties & { $layoutItem: 'flex-item' }
	: T extends 'grid-item'
		? GridItemLayoutProperties & { $layoutItem: 'grid-item' }
		: never;

export type BasicLayout = ColorLayout &
	PositionLayout &
	SizeLayout &
	OverflowLayout &
	SpacingLayout &
	BorderLayout &
	BackgroundLayout &
	ShadowLayout &
	TypographyLayout &
	VisibilityLayout &
	CursorLayout &
	StyleLayout &
	(
		| (Omit<FlexLayout, '$layout'> & { $layout?: 'flex' })
		| (Omit<GridLayout, '$layout'> & { $layout?: 'grid' })
		| (Omit<BlockLayout, '$layout'> & { $layout?: 'block' })
		| (Omit<NoneLayout, '$layout'> & { $layout?: 'none' })
	) &
	(
		| (Omit<FlexItemLayout, '$layoutItem'> & { $layoutItem?: 'flex-item' })
		| (Omit<GridItemLayout, '$layoutItem'> & { $layoutItem?: 'grid-item' })
	);

export type SelectorLayout = {
	$active?: BasicLayout;
	$hover?: BasicLayout;
	$focus?: BasicLayout;
	$focusVisible?: BasicLayout;
	$focusWithin?: BasicLayout;
	$visited?: BasicLayout;
	$target?: BasicLayout;
};

export type MediaLayout = {
	$xs?: BasicLayout & SelectorLayout;
	$sm?: BasicLayout & SelectorLayout;
	$md?: BasicLayout & SelectorLayout;
	$lg?: BasicLayout & SelectorLayout;
	$xl?: BasicLayout & SelectorLayout;
	$xxl?: BasicLayout & SelectorLayout;
	$xxxl?: BasicLayout & SelectorLayout;
};

export type DraggableLayout = {
	$draggable?: boolean;
	$droppable?: boolean;
	$dragType?: string;
	$acceptsDropTypes?: string[];
	$drop?: (itm: any) => void;
	$hover?: (itm: any) => void;
	$dragEnd?: (itm: any) => void;
};

export type DragEvents = {
	$isOver?: boolean;
	$canDrop?: boolean;
	$isDragging?: boolean;
};

export type Layout<T = {}> = T &
	BasicLayout &
	MediaLayout &
	SelectorLayout &
	DraggableLayout & {
		innerRef?: any;
	};

export type Props = PositionLayout &
	MediaLayout &
	SelectorLayout &
	ColorLayout &
	SizeLayout &
	OverflowLayout &
	SpacingLayout &
	BorderLayout &
	BackgroundLayout &
	ShadowLayout &
	TypographyLayout &
	VisibilityLayout &
	CursorLayout &
	FlexLayoutProperties &
	GridLayoutProperties &
	BlockLayoutProperties &
	FlexItemLayoutProperties &
	GridItemLayoutProperties &
	StyleLayout & {
		$layout?: 'flex' | 'grid' | 'block' | 'none';
		$layoutItem?: 'flex-item' | 'grid-item';
	};

export interface ThemePalette {
	mediaSizes: Partial<MediaSize, number>;
	fontWeights: Partial<FontWeight, number>;
	fontFamilies: Partial<FontFamily, string>;
	fontSizes: Partial<FontSize, number>;
	colors: Partial<Color, string>;
	borderSizes: Partial<borderSize, string>;
	borderRadius: Partial<BorderRadius, string>;
	marginPadding: Partial<Length, string>;
	zIndex: Partial<ZIndex, 'auto' | number>;
	gradients: Partial<Gradient, string>;
	elements: Partial<Component, Partial<Layout>>;
}

export interface ThemeInterface {
	palate: ThemePalette;
	addFontWeight(fontWeight: FontWeight, size: number): this;
	addFontFamily(fontFamily: FontFamily, value: string): this;
	addFontSize(fontSize: FontSize, value: number): this;
	addColor(color: Color, value: string): this;
	addMediaSize(mediaSize: MediaSize, value: number): this;
	addBorderRadius(borderRadius: BorderRadius, value: string): this;
	addZIndex(zIndex: ZIndex, value: 'auto' | number): this;
	addGradientStyles(gradient: Gradient, value: string): this;
	addElementStyles(component: Component, css: PartialRecord<Layout>): this;
	generateCSS(component: Component, props: any): string;
}

export { ThemeInterface, ThemePalette, Color, colorEnum };
