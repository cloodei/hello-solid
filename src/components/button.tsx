import { children, JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: JSX.Element
  variant?: "primary" | "secondary" | "danger" | "success" | "outline";
};

const variantStyles = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white",
  secondary: "bg-gray-500 hover:bg-gray-700 text-white",
  danger: "bg-red-500 hover:bg-red-700 text-white",
  success: "bg-green-500 hover:bg-green-700 text-white",
  outline: "border border-gray-400/90 hover:bg-gray-200/80 text-gray-700"
};

export default function Button(props: ButtonProps) {
  const safeChildren = children(() => props.children);
  const [{ class: className, variant }, rest] = splitProps(props, ["class", "variant"]);
  
  return (
    <button
      class={twMerge(
        "font-bold py-2 px-4 transition-all text-white rounded-md",
        variantStyles[variant || "primary"],
        className
      )}
      {...rest}
    >
      {safeChildren()}
    </button>
  );
}