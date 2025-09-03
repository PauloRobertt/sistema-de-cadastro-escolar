import { Button } from './styled';

export default function SubmitButton({ type, text, variant }) {
  return (
    <Button variant={variant} type={type}>
      {text}
    </Button>
  );
}
