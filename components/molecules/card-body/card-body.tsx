'use client';

import React, { ComponentProps } from 'react';
import { Layout } from '@components/types';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import styled from 'styled-components';
import { Section } from '@components/core/atoms';

type CardBodyProps = Layout<ComponentProps<'section'>>;

const CardBodyStyled = styled(Section)<CardBodyProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.CARD_BODY, props)};
`;

const CardBody: React.FC<CardBodyProps> = (props) => <CardBodyStyled {...props} />;

export default CardBody;
