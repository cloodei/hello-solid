import { DOMElement } from "solid-js/jsx-runtime";
import { useToast } from "../store/use-toast";
import { createSignal, For, Show } from "solid-js";
import Button from "../components/button";
import { useModal } from "../store/use-modal";
import Modal from "../components/dialog";

export type SubmitEvent = globalThis.SubmitEvent & {
  currentTarget: HTMLFormElement
  target: DOMElement
};

export type ChangeEvent = Event & {
  currentTarget: HTMLInputElement | HTMLTextAreaElement
  target: HTMLInputElement | HTMLTextAreaElement
};

type ToDo = {
  title: string,
  description: string
};

export default function CreateToDo() {
  const [form, setForm] = createSignal<ToDo>({ title: "", description: "" });
  const [todos, setTodos] = createSignal<ToDo[]>([]);
  const { isOpen, showModal, hideModal } = useModal();
  const { addToast } = useToast();

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const title = form().title.trim();
    const description = form().description.trim();
    if(!title || !description) {
      addToast({ message: "Title and Description are required", type: "error" });
      return;
    }
    setTodos([...todos(), form()]);
    addToast({ message: "Task created successfully", type: "success" });
    setForm({ title: "", description: "" });
  };

  return (
    <div class="flex flex-col items-center justify-center py-5 min-h-[calc(100vh-48px-76px)]">
      <h1 class="text-4xl font-bold">Create a new ToDo</h1>
      <form class="flex flex-col gap-4 mt-5" onSubmit={handleSubmit} id="todo-form">
        <input
          type="text"
          placeholder="Title"
          value={form().title}
          onChange={(e) => setForm({ title: e.target.value, description: form().description })}
          class="p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Description"
          value={form().description}
          onChange={(e) => setForm({ title: form().title, description: e.target.value })}
          class="p-2 border border-gray-300 rounded"
        />
        <Button onClick={showModal} type="button" variant="outline">
          Create Task
        </Button>
      </form>

      <Show when={isOpen()}>
        <Modal title="Task Preview" showClose={true}>
          <div class="grid gap-4">
            <h2 class="text-xl font-bold">
              {form().title}
            </h2>
            <p>
              {form().description}
            </p>
          </div>

          <div class="flex gap-2 mt-4 items-center justify-end">
            <Button onClick={() => {
              setForm({ title: "", description: "" });
              hideModal();
            }}>
              Clear
            </Button>
            <Button type="submit" form="todo-form">
              Create Task
            </Button>
          </div>
        </Modal>
      </Show>

      {todos().length > 0 ? (
        <div class="mt-10 px-6 max-w-6xl text-center grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <For each={todos()}>
            {(todo, index) => (
              <div class="p-4 border border-gray-300 rounded">
                <h2 class="text-xl font-bold">
                  {todo.title}
                </h2>
                <p>
                  {todo.description}
                </p>

                <Button onClick={() => {
                  setTodos(todos().filter((_, i) => i !== index()));
                }}>
                  Delete
                </Button>
              </div>
            )}
          </For>
        </div>
      ) : (
        <p class="mt-10 text-xl">No tasks created yet</p>
      )}

    </div>
  );
}