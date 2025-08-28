import { Button } from './styled';

export default function SubmitButton({ type, text }) {
  return <Button type={type}>{text}</Button>;
}
