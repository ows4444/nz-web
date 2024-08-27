import { FlexBox, FlexBoxProps } from '@components/atoms/flex-box/flex-box';
import { GridBox, GridBoxProps } from '@components/atoms/grid-box/grid-box';

export type LayoutProps<T> =
  | (FlexBoxProps & { $layout: 'flex' } & Partial<Record<keyof GridBox, never>>)
  | (GridBoxProps & { $layout: 'grid' } & Partial<Record<keyof FlexBox, never>>)
  | ({ $layout?: undefined } & Partial<Record<keyof FlexBox, never>> & Partial<Record<keyof GridBox, never>> & T);
