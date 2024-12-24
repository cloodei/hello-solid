import Button from "../components/button";
import { createSignal, For, Index } from "solid-js";

export default function CreateToDo() {
  const [form, setForm] = createSignal<{ title: string, description: string }>({ title: "", description: "" });
  const [todos, setTodos] = createSignal<{ title: string, description: string }[]>([]);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(form());
    setTodos([...todos(), form()]);
    setForm({ title: "", description: "" });
  };

  return (
    <div class="flex flex-col items-center justify-center py-5 min-h-[calc(100vh-48px-76px)]">
      <h1 class="text-4xl font-bold">Create a new ToDo</h1>
      <form class="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
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
        <Button type="submit">
          Create Task
        </Button>
      </form>

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