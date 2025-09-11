import { Button } from './styled';

export default function SubmitButton({ type, text, variant, onClick }) {
  return (
    <Button onClick={onClick} variant={variant} type={type}>
      {text}
    </Button>
  );
}
