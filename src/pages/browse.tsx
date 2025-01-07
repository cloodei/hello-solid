import { createSignal, For, Show } from "solid-js";
import { useToast } from "../store/use-toast";
import Button from "../components/button";

interface Item {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  completed?: boolean;
};

export default function BrowseItems() {
  const [items, setItems] = createSignal<Item[]>([
    {
      id: "1",
      title: "Complete Project",
      description: "Finish the SolidJS project implementation",
      createdAt: new Date(),
      completed: false
    },
    {
      id: "2", 
      title: "Learn TypeScript",
      description: "Study TypeScript fundamentals",
      createdAt: new Date(),
      completed: true
    }
  ]);
  const [filter, setFilter] = createSignal<"all" | "completed" | "active">("all");
  const [sortBy, setSortBy] = createSignal<"date" | "title">("date");
  const { addToast } = useToast();

  const filteredItems = () => {
    let filtered = items();
    if(filter() === "completed") {
      filtered = filtered.filter(item => item.completed);
    }
    else if(filter() === "active") {
      filtered = filtered.filter(item => !item.completed);
    }

    if(sortBy() === "date") {
      filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    else {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    return filtered;
  };

  const toggleComplete = (id: string) => {
    setItems(prev => prev.map(item => item.id === id ? {...item, completed: !item.completed} : item));
    addToast({ message: "Item status updated", type: "success" });
  };

  return (
    <div class="max-w-4xl mx-auto p-6">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Browse Items</h1>
        <div class="flex gap-4">
          <select 
            class="p-2 border rounded-md bg-white"
            onChange={(e) => setFilter(e.currentTarget.value as any)}
          >
            <option value="all">All Items</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
          </select>
          <select 
            class="p-2 border rounded-md bg-white"
            onChange={(e) => setSortBy(e.currentTarget.value as any)}
          >
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </div>

      <div class="grid gap-4">
        <For each={filteredItems()}>
          {(item) => (
            <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleComplete(item.id)}
                    class="w-5 h-5 rounded border-gray-300"
                  />
                  <h3 class={`text-xl font-semibold ${item.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {item.title}
                  </h3>
                </div>
                <span class="text-sm text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p class={`mt-2 ${item.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.description}
              </p>
              <div class="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    console.log("Editing item", item.id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setItems(prev => prev.filter(i => i.id !== item.id));
                    addToast({ message: "Item deleted", type: "success" });
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          )}
        </For>

        <Show when={filteredItems().length === 0}>
          <div class="text-center py-8 text-gray-500">
            No items found. Try adjusting your filters or add new items.
          </div>
        </Show>
      </div>
    </div>
  );
}
