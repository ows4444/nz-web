'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface PictureProps extends ComponentProps<'picture'> {
  children?: ReactNode;
}

const PictureStyled = styled.picture<PictureProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.PICTURE)};
`;

const Picture: FC<PictureProps> = (props) => <PictureStyled {...props}/>;{children}</PictureStyled>;

/**
 * DONE
 */
export default Picture;
