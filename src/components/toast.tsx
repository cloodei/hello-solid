import { createSignal, onCleanup, onMount } from "solid-js";

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

  const baseStyles = "flex items-center gap-3 min-w-[300px] max-w-[400px] p-4 rounded-lg shadow-lg transform transition-all duration-300 ease-out";
  const typeStyles = {
    success: "bg-green-50 text-green-800 border-l-4 border-green-500",
    error: "bg-red-50 text-red-800 border-l-4 border-red-500",
    info: "bg-blue-50 text-blue-800 border-l-4 border-blue-500"
  };

  const icons = {
    success: <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>,
    error: <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>,
    info: <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z" clip-rule="evenodd"/></svg>
  };

  return (
    <div 
      class={`${baseStyles} ${typeStyles[props.type || "info"]} ${isVisible() ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} hover:shadow-xl hover:-translate-y-0.5 cursor-pointer`}
      onClick={() => {
        setIsVisible(false);
        setTimeout(props.onClose, 300);
      }}
    >
      {icons[props.type || "info"]}
      <p class="flex-1">{props.message}</p>
    </div>
  );
}