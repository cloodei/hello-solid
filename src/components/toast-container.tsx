import { For } from "solid-js";
import { useToast } from "../store/use-toast";
import Toast from "./toast";

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div class="fixed top-0 right-0 z-50">
      <For each={toasts()}>
        {(toast) => (
          <Toast
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        )}
      </For>
    </div>
  );
}
