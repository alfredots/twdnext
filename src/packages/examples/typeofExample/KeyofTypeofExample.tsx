import { ReactNode } from 'react';

const colors = {
  primary: '#3498db',
  secondary: '#e74c3c',
  highlight: '#f1c40f'
};

type TypographyProps = { color: keyof typeof colors; children: ReactNode };

export const Typography = ({ color, children }: TypographyProps) => {
  return <p style={{ color: colors[color] }}>{children}</p>;
};

export const KeyofTypeofExample = () => {
  return <Typography color="highlight">test</Typography>;
};
