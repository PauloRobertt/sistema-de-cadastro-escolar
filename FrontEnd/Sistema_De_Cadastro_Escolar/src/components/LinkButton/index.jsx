import { LinkBtn } from './styled';

export default function LinkButton({ path, text, variant }) {
  return (
    <LinkBtn variant={variant} to={path}>
      {text}
    </LinkBtn>
  );
}
