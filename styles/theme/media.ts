/* eslint-disable no-unused-vars */
export enum MediaSizes {
  xs = 'xs', // Extra small devices (phones)
  sm = 'sm', // Small devices (phones)
  md = 'md', // Medium devices (tablets)
  lg = 'lg', // Large devices (desktops)
  xl = 'xl', // Extra large devices (large desktops)
  xxl = 'xxl', // Extra large devices (large desktops)
}

export type MediaSize = keyof typeof MediaSizes;
