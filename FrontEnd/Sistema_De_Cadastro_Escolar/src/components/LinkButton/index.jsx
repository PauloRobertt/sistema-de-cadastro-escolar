import { LinkBtn } from './styled';

export default function LinkButton({ path, text }) {
  return <LinkBtn to={path}>{text}</LinkBtn>;
}
