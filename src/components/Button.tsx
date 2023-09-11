import { Button as MButton } from "@mantine/core";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <MButton size="lg" onClick={onClick}>
      {text}
    </MButton>
  );
};

export default Button;
