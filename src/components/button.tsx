import { children, JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: JSX.Element
};

export default function Button(props: ButtonProps) {
  const safeChildren = children(() => props.children);
  const [{ class: className }, rest] = splitProps(props, ["class"]);
  
  return (
    <button
      class={twMerge(
        "font-bold py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded",
        className
      )}
      {...rest}
    >
      {safeChildren()}
    </button>
  );
}