import { JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

export type FloatInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  labelClassname?: string;
}

export type FloatTextareaProps = JSX.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  labelClassname?: string;
}

export function FloatTextarea(props: FloatTextareaProps) {
  const [{ label, labelClassname, class: className }, rest] = splitProps(props, ["label", "labelClassname", "class"]);

  return (
    <div class="relative">
      <textarea
        {...rest}
        placeholder=" "
        class={twMerge(
          "block w-full rounded-md border bg-background px-3 pt-3 pb-2 text-base ring-offset-background",
          "text-gray-950 dark:text-gray-100 dark:placeholder:text-zinc-300 focus-visible:outline-none resize-none",
          "peer",
          className
        )}
      />
      <label
        class={twMerge(
          "absolute left-3 top-3 z-10 origin-[0] -translate-y-5 scale-75 pointer-events-none",
          "transform px-2 text-sm duration-200 bg-background",
          "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100",
          "peer-focus:-translate-y-5 peer-focus:scale-75",
          "text-gray-700 dark:text-zinc-400",
          labelClassname
        )}
      >
        {label}
      </label>
    </div>
  );
}

export function FloatInput(props: FloatInputProps) {
  const [{ label, labelClassname, class: className }, rest] = splitProps(props, ["label", "labelClassname", "class"]);

  return (
    <div class="relative">
      <input
        {...rest}
        placeholder=" "
        class={twMerge(
          "block w-full rounded-md border bg-background px-3 pt-3 pb-2 text-base ring-offset-background",
          "text-gray-950 dark:text-gray-100 dark:placeholder:text-zinc-300 focus-visible:outline-none",
          "peer",
          className
        )}
      />
      <label
        class={twMerge(
          "absolute left-3 top-3 z-10 origin-[0] -translate-y-5 scale-75 pointer-events-none",
          "transform px-2 text-sm duration-200 bg-background",
          "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100",
          "peer-focus:-translate-y-5 peer-focus:scale-75 pointer-events-none",
          "text-gray-700 dark:text-zinc-400",
          labelClassname
        )}
      >
        {label}
      </label>
    </div>
  );
}