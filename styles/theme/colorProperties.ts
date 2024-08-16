/* eslint-disable no-unused-vars */
export enum ColorProperties {
  FontColor = 'FontColor',
  BackgroundColor = 'BackgroundColor',
  BorderColor = 'BorderColor',
}

export type ColorProperty = keyof typeof ColorProperties;
