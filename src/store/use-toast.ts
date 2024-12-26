import { createSignal } from "solid-js";

type Toast = {
  id: number;
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
};

const [toasts, setToasts] = createSignal<Toast[]>([]);

export function useToast() {
  const addToast = ({ message, type = "info", duration = 3000 }: Omit<Toast, "id">) => {
    if(!message || toasts().length > 3) {
      return;
    }
    setToasts([...toasts(), { id: Date.now(), message, type, duration }]);
  }

  const removeToast = (id: number) => setToasts(toasts().filter(toast => toast.id !== id))

  return {
    toasts,
    addToast,
    removeToast
  };
}