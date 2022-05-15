export interface TextFieldInterface {
  value?: string;
  icon?: JSX.Element;
  placeholder?: string;
  onChange?: (value: string) => void;
}
