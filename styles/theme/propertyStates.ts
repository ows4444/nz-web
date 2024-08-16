/* eslint-disable no-unused-vars */
export enum PropertyStates {
  Default = 'Default',
  Hover = 'Hover',
  Active = 'Active',
  Disabled = 'Disabled',
  Focus = 'Focus',
}

export type PropertyState = keyof typeof PropertyStates;
