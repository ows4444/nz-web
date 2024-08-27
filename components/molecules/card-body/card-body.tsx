'use client';
import type React from 'next';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import Section from '@components/core/atoms/section/section';
import { Components } from '@styles/theme/components';

export interface CardBodyProps extends React.ComponentProps<'section'> {}

const CardBodyStyled = styled(Section)<CardBodyProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.CARD_BODY, props)};
`;

const CardBody: React.FC<CardBodyProps> = (props) => <CardBodyStyled {...props} />;

export default CardBody;
