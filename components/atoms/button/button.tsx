import { Size, Sizes, Theme, Variant, Variants } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $variant: Variant;
  $size: Size;
  title: string;
  theme?: Theme;
}

const ButtonStyled = styled.button<Omit<ButtonProps, 'title'>>`
  padding: 8px 8px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid ${({ theme, $variant }) => theme.palette[$variant].BorderColor};
  border-radius: 4px;
  outline: none;
  background-color: ${({ theme, $variant }) => theme.palette[$variant].BackgroundColor};
  color: ${({ theme, $variant }) => theme.palette[$variant].FontColor};

  width: ${({ $size }) => ($size === Sizes.Default ? '100px' : $size === Sizes.Medium ? '200px' : '300px')};

  &:hover {
    border-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Hover.BorderColor']};
    background-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Hover.BackgroundColor']};
    color: ${({ theme, $variant }) => theme.palette[$variant]?.['Hover.FontColor']};
    opacity: 0.8;
  }
  &:active {
    border-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Active.BorderColor']};
    background-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Active.BackgroundColor']};
    color: ${({ theme, $variant }) => theme.palette[$variant]?.['Active.FontColor']};
    transform: translateY(1px);
  }
  &:disabled {
    border-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Disabled.BorderColor']};
    background-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Disabled.BackgroundColor']};
    color: ${({ theme, $variant }) => theme.palette[$variant]?.['Disabled.FontColor']};
    cursor: not-allowed;
  }
  &:focus {
    border-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Focus.BorderColor']};
    background-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Focus.BackgroundColor']};
    color: ${({ theme, $variant }) => theme.palette[$variant]?.['Focus.FontColor']};
  }
`;

const Button: React.FC<Omit<ButtonProps, '$variant' | '$size'> & { $variant?: Variant; $size?: Size }> = ({
  title,
  $size = Sizes.Default,
  $variant = Variants.Default,
  children,
  ...rest
}: Omit<ButtonProps, '$variant' | '$size'> & { $variant?: Variant; $size?: Size }) => {
  return (
    <ButtonStyled $size={$size} $variant={$variant} {...rest}>
      {title}
      {children}
    </ButtonStyled>
  );
};

export default Button;
