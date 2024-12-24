import { JSX, splitProps } from "solid-js";
import { children } from "solid-js";
import { Github } from "lucide-solid";
import { twMerge } from "tailwind-merge";

export type HeaderProps = JSX.HTMLAttributes<HTMLElement> & {
  children?: JSX.Element
  class?: string
};

export default function Header(props: HeaderProps) {
  const [c, rest] = splitProps(props, ["class"]);
  const cd = children(() => props?.children);

  return (
    <header
      class={twMerge("flex justify-between items-center h-12 px-9 bg-gray-800 text-white", c.class)}
      {...rest}
    >
      <a class="flex items-center" href="/">
        <Github class="w-6 h-6 ml-2" />
        <h1 class="text-2xl tracking-tight font-bold ml-2">SolidJS</h1>
      </a>
      <div class="flex items-center">
        {cd()}
      </div>
    </header>
  );
}