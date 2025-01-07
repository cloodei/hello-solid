import { For } from "solid-js";
import { useToast } from "../store/use-toast";
import Toast from "./toast";

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div class="fixed top-4 right-4 z-50 flex flex-col gap-3">
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
