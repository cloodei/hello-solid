import { createSignal } from "solid-js";

const [isOpen, setIsOpen] = createSignal(false);

export function useModal() {
  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  return {
    isOpen,
    showModal,
    hideModal
  };
}