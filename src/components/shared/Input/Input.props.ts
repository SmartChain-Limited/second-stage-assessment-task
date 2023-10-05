export default interface InputProps extends React.HTMLProps<HTMLInputElement> {
  name?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  borderRadius?: string;
  // append?: string;
}
