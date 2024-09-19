import { Layout, Props, ThemeInterface, ThemePalette } from '@styles/theme/types';

import { Component } from './components';
import { BorderRadius, borderSize } from './types/border';
import { Color, Gradient, MediaSize, ZIndex } from './types/common';
import { FontFamily, FontSize, FontWeight } from './types/font';

export class Theme implements ThemeInterface {
	palate!: ThemePalette;
	constructor() {
		this.palate = {
			mediaSizes: {},
			borderRadius: {},
			borderSizes: {},
			colors: {},
			fontFamilies: {},
			fontSizes: {},
			fontWeights: {},
			marginPadding: {},
			zIndex: {},
			gradients: {},
			elements: {}
		};
	}

	addMediaSize(mediaSize: MediaSize, value: number): this {
		this.palate.mediaSizes[mediaSize] = value;
		return this;
	}
	addFontSize(fontSize: FontSize, value: number): this {
		this.palate.fontSizes[fontSize] = value;
		return this;
	}

	addFontWeight(fontWeight: FontWeight, size: number): this {
		this.palate.fontWeights[fontWeight] = size;
		return this;
	}
	addFontFamily(fontFamily: FontFamily, value: string): this {
		this.palate.fontFamilies[fontFamily] = value;
		return this;
	}
	addColor(color: Color, value: string): this {
		this.palate.colors[color] = value;
		return this;
	}
	addBorderSize(borderSize: borderSize, value: string): this {
		this.palate.borderSizes[borderSize] = value;
		return this;
	}
	addBorderRadius(borderRadius: BorderRadius, value: string): this {
		this.palate.borderRadius[borderRadius] = value;
		return this;
	}

	addZIndex(zIndex: ZIndex, value: 'auto' | number): this {
		this.palate.zIndex[zIndex] = value;
		return this;
	}
	addGradientStyles(gradient: Gradient, value: string): this {
		this.palate.gradients[gradient] = value;
		return this;
	}
	addElementStyles(component: Component, css: Partial<Layout>): this {
		this.palate.elements[component] = css;
		return this;
	}

	private pxToRem(px: number): string {
		return `${px / 16}rem`;
	}
	private remToPx(rem: number): string {
		return `${rem * 16}px`;
	}
	private getFontWeight(fontWeight: FontWeight): number {
		return this.palate.fontWeights[fontWeight] ?? 100;
	}
	private getFontSize(fontSize: FontSize): number {
		return this.palate.fontSizes[fontSize] ?? 16;
	}
	private getFontFamily(fontFamily: FontFamily): string {
		return this.palate.fontFamilies[fontFamily] ?? 'Sans-serif, Arial';
	}
	private getColor(color: Color): string {
		return this.palate.colors[color] ?? 'black';
	}
	private getBorderSize(borderSize: borderSize): string {
		const color = this.palate.colors.border;
		return (this.palate.borderSizes[borderSize] ?? '0') + ' ' + color;
	}

	private getZIndex(zIndex: ZIndex): 'auto' | number {
		return this.palate.zIndex[zIndex] ?? 'auto';
	}
	private getGradientStyles(gradient: Gradient): string {
		return this.palate.gradients[gradient] ?? '';
	}
	private getElementStyles(component: Component): Layout {
		return this.palate.elements[component] as Layout;
	}

	removeDefaultStyles(css: Record<string, string> = {}): Record<string, string> {
		if (!css) return css;

		if (css['margin'] === '0 0') {
			delete css['margin'];
		}

		if (css['padding'] === '0 0') {
			delete css['padding'];
		}
		if (css['&:focus'] === '') {
			delete css['&:focus'];
		}
		if (css['&:hover'] === '') {
			delete css['&:hover'];
		}

		return css;
	}

	generateStyle(props: Props, css: Record<string, string> = {}): Record<string, string> {
		if (!props || Object.keys(props).length === 0) return css;

		const {
			//$align,
			$color,
			$fontFamily,
			$fontSize,
			$fontStyle,
			$fontWeight,
			$letterSpacing,
			$lineHeight,
			$textDecoration,
			$textTransform,
			//$whiteSpace,

			$padding,
			$paddingX,
			$paddingY,
			$borderColor,
			$border,
			$borderTop,
			$borderRight,
			$borderBottom,
			$borderLeft,
			$paddingTop,
			$paddingRight,
			$paddingBottom,
			$paddingLeft,
			$borderRadius,
			$margin,
			$marginX,
			$marginY,
			$marginTop,
			$marginRight,
			$marginBottom,
			$marginLeft,

			$backgroundColor,

			$grid,
			$gridAutoColumns,
			$gridAutoFlow,
			$gridAutoRows,
			$gridTemplate,
			$gridTemplateAreas,
			$gridTemplateColumns,
			$gridTemplateRows,

			$gridArea,
			$gridColumn,
			$gridColumnEnd,
			$gridColumnStart,
			$gridRow,
			$gridRowEnd,
			$gridRowStart,
			//$listStyle,

			$width,
			$height,

			$gap,
			$direction,
			$justifyContent,
			$alignItems,
			$wrap,
			$columns,
			$rows,
			$autoRows,
			$autoFlow,
			$layout,
			$layoutItem,
			$order,
			$flex,
			$flexGrow,
			$flexShrink,
			$flexBasis,
			$alignSelf,

			$float,
			$clear,
			/**
       *         // $textOverflow,
      // $padding,
      // $borderRadius,
      // $boxShadow,

      // $minWidth,
      // $minHeight,
      // $maxWidth,
      // $maxHeight,
      // $overflow,
      // $position,
      // $top,
      // $right,
      // $bottom,
      // $left,
      // $zIndex,
       */

			$active,
			$hover,
			$focusVisible,
			$focusWithin,
			$visited,
			$target,
			$focus
		} = props;

		if (
			$layout === 'flex' ||
			$layoutItem === 'flex-item' ||
			$layout === 'grid' ||
			$layoutItem === 'grid-item' ||
			$layout === 'block'
		) {
			if ($layout === 'block') {
				css['display'] = 'block';
				$float && (css['float'] = $float);
				$clear && (css['clear'] = $clear);
			}

			if ($layout === 'flex') {
				css['display'] = 'flex';

				$gap && (css['gap'] = $gap);
				$direction && (css['flex-direction'] = $direction);
				$justifyContent && (css['justify-content'] = $justifyContent);
				$alignItems && (css['align-items'] = $alignItems);
				$wrap && (css['flex-wrap'] = $wrap);
				$order && (css['order'] = `${$order}`);
				$flexGrow && (css['flex-grow'] = `${$flexGrow}`);
				$flexShrink && (css['flex-shrink'] = `${$flexShrink}`);
				$flexBasis && (css['flex-basis'] = $flexBasis);
				$alignSelf && (css['align-self'] = $alignSelf);
			}
			if ($layoutItem === 'flex-item') {
				$alignSelf && (css['align-self'] = $alignSelf);
				$flex && (css['flex'] = $flex);
				$order && (css['order'] = `${$order}`);
			}
			if ($layout === 'grid') {
				css['display'] = 'grid';
				$gap && (css['gap'] = $gap);
				$columns && (css['grid-template-columns'] = `repeat(${$columns}, 1fr)`);
				$rows && (css['grid-template-rows'] = `repeat(${$rows}, 1fr)`);
				$autoRows && (css['grid-auto-rows'] = $autoRows);
				$autoFlow && (css['grid-auto-flow'] = $autoFlow);
				$grid && (css['grid'] = $grid);
				$gridAutoColumns && (css['grid-auto-columns'] = $gridAutoColumns);
				$gridAutoFlow && (css['grid-auto-flow'] = $gridAutoFlow);
				$gridAutoRows && (css['grid-auto-rows'] = $gridAutoRows);
				$gridTemplate && (css['grid-template'] = $gridTemplate);

				$gridTemplateAreas &&
					Array.isArray($gridTemplateAreas) &&
					(css['grid-template-areas'] = Array.from($gridTemplateAreas)
						.map((x) => `"${x}"`)
						.join(' '));
				$gridTemplateColumns && (css['grid-template-columns'] = $gridTemplateColumns);
				$gridTemplateRows && (css['grid-template-rows'] = $gridTemplateRows);
			}
			if ($layoutItem === 'grid-item') {
				$gridArea && (css['grid-area'] = $gridArea);
				$gridColumn && (css['grid-column'] = $gridColumn);
				$gridColumnEnd && (css['grid-column-end'] = $gridColumnEnd);
				$gridColumnStart && (css['grid-column-start'] = $gridColumnStart);
				$gridRow && (css['grid-row'] = $gridRow);
				$gridRowEnd && (css['grid-row-end'] = $gridRowEnd);
				$gridRowStart && (css['grid-row-start'] = $gridRowStart);
			}
		}

		// $align && (css['align'] = $align);
		$color && (css['color'] = this.getColor($color));
		$fontFamily && (css['font-family'] = this.getFontFamily($fontFamily));
		$fontSize && (css['font-size'] = this.pxToRem(this.getFontSize($fontSize)));
		$fontStyle && (css['font-style'] = $fontStyle);
		$fontWeight && (css['font-weight'] = `${this.getFontWeight($fontWeight)}`);
		$letterSpacing && (css['letter-spacing'] = $letterSpacing);
		$lineHeight && (css['line-height'] = $lineHeight);
		$textDecoration && (css['text-decoration'] = $textDecoration);
		$textTransform && (css['text-transform'] = $textTransform);
		//$whiteSpace && (css['white-space'] = $whiteSpace);
		$backgroundColor && (css['background-color'] = this.getColor($backgroundColor));
		// $listStyle && (css['list-style'] = $listStyle);

		if ($width) {
			css['width'] = $width;
		}
		if ($height) {
			css['height'] = $height;
		}

		if ($margin) {
			css['margin'] = Array.isArray($margin) ? $margin.join(' ') : $margin;
		} else {
			css['margin'] = `${$marginY ?? 0} ${$marginX ?? 0}`;
			$marginTop && (css['margin-top'] = $marginTop);
			$marginRight && (css['margin-right'] = $marginRight);
			$marginBottom && (css['margin-bottom'] = $marginBottom);
			$marginLeft && (css['margin-left'] = $marginLeft);
		}

		if ($padding) {
			css['padding'] = Array.isArray($padding) ? $padding.join(' ') : $padding;
		} else {
			css['padding'] = `${$paddingY ?? 0} ${$paddingX ?? 0}`;
			$paddingTop && (css['padding-top'] = $paddingTop);
			$paddingRight && (css['padding-right'] = $paddingRight);
			$paddingBottom && (css['padding-bottom'] = $paddingBottom);
			$paddingLeft && (css['padding-left'] = $paddingLeft);
		}

		if ($border) {
			css['border'] = Array.isArray($border) ? $border.join(' ') : $border;
		} else {
			$borderColor && (css['border-color'] = this.getColor($borderColor));
			$borderRadius && (css['border-radius'] = Array.isArray($borderRadius) ? $borderRadius.join(' ') : $borderRadius);
			$borderTop && (css['border-top'] = $borderTop);
			$borderRight && (css['border-right'] = $borderRight);
			$borderBottom && (css['border-bottom'] = $borderBottom);
			$borderLeft && (css['border-left'] = $borderLeft);
		}

		css['&:hover'] = this.jsonToCSS(this.generateStyle(Object.assign($hover ?? {})));
		css['&:focus'] = this.jsonToCSS(this.generateStyle(Object.assign($focus ?? {})));
		css['&:active'] = this.jsonToCSS(this.generateStyle(Object.assign($active ?? {})));
		css['&:focus-visible'] = this.jsonToCSS(this.generateStyle(Object.assign($focusVisible ?? {})));
		css['&:focus-within'] = this.jsonToCSS(this.generateStyle(Object.assign($focusWithin ?? {})));
		css['&:visited'] = this.jsonToCSS(this.generateStyle(Object.assign($visited ?? {})));
		css['&:target'] = this.jsonToCSS(this.generateStyle(Object.assign($target ?? {})));

		return this.removeDefaultStyles(css);
	}

	jsonToCSS(json: Record<string, string>): string {
		if (!json || Object.keys(json).length < 1) return '';
		return `{${Object.entries(json).reduce((acc, [key, value]) => {
			if (key.startsWith('&:') || key.startsWith('@media')) {
				return `${acc}${key} ${value}`;
			}
			return `${acc}${key}:${value};`;
		}, '')}}`;
	}

	CssStringify(css: Record<string, string>): string {
		return Object.entries(css).reduce((acc, [key, value]) => {
			if (key.startsWith('&:') || key.startsWith('@media')) {
				return `${acc}${key} ${value}`;
			}
			return `${acc}${key}:${value};`;
		}, '');
	}

	generateCSS(component: Component, props: any): string {
		const element = this.getElementStyles(component);
		const css: Record<string, string> = {};
		const data = { ...(element || {}), ...props };
		Object.assign(css, this.generateStyle(data, css));

		const mediaCss = Object.keys(this.palate.mediaSizes).reduce((css: Record<string, string>, mediaSize: string) => {
			const key = `$${mediaSize}`;

			if (data[key]) {
				css[`@media(min-width: ${this.palate.mediaSizes[mediaSize]}px)`] = this.jsonToCSS(
					this.generateStyle(data[key])
				);
			}

			return css;
		}, {});

		return [css, mediaCss].map(this.CssStringify).join(' ');
	}
}
