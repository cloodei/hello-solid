import { children, JSX, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { useModal } from "../store/use-modal";

type ModalProps = {
  title?: string;
  children: JSX.Element;
  showClose?: boolean;
};

export default function Modal(props: ModalProps) {
  const { isOpen, hideModal } = useModal();
  const content = children(() => props.children);

  const handleClickOut = (e: MouseEvent) => {
    if(e.target === e.currentTarget) {
      hideModal();
    }
  }

  return (
    <Show when={isOpen()}>
      <Portal>
        <div class="fixed inset-0 z-50 overflow-y-auto">
          <div class="fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity" />
          
          <div class="fixed z-50 inset-0 flex items-center justify-center p-4" onClick={handleClickOut}>
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all">
              {/* Header */}
              <div class="flex items-center justify-between p-4 border-b">
                <h3 class="text-lg font-medium">
                  {props.title || "Modal"}
                </h3>
                {props.showClose && (
                  <button
                    onClick={hideModal}
                    class="text-gray-400 hover:text-gray-500"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div class="p-4">
                {content()}
              </div>
            </div>
          </div>
        </div>
      </Portal>
    </Show>
  );
}