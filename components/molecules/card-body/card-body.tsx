'use client';
import type React from 'next';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import Section from '@components/core/atoms/section/section';

export interface CardBodyProps extends React.ComponentProps<'section'> {
  theme?: Theme;
}
const CardBodyStyled = styled(Section)<CardBodyProps>``;

const CardBody: React.FC<CardBodyProps> = (props) => <CardBodyStyled {...props} />;

export default CardBody;
