import { Show, createSignal, onCleanup, onMount } from "solid-js";
import { Portal } from "solid-js/web";

export type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
};

export default function Toast(props: ToastProps) {
  const [isVisible, setIsVisible] = createSignal(true);
  let timer: number;

  onMount(() => {
    timer = setTimeout(() => {
      setIsVisible(false);
      props.onClose();
    }, props.duration || 3000);
  });

  onCleanup(() => {
    clearTimeout(timer);
  });

  const baseStyles = "fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg transform transition-all duration-500 ease-in-out";
  const typeStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white"
  };

  return (
    <Show when={isVisible()}>
      <Portal>
        <div 
          class={`${baseStyles} ${typeStyles[props.type || "info"]} ${isVisible() ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          {props.message}
        </div>
      </Portal>
    </Show>
  );
}