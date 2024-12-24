import { A, useLocation } from "@solidjs/router";
import { Github } from "lucide-solid";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-blue-400 underline" : "text-blue-600 hover:text-blue-400/85";

  return (
    <header class="flex justify-between items-center h-12 px-9 bg-gray-800">
      <section class="flex items-center gap-7">
        <div class="flex items-center">
          <Github class="w-6 h-6 ml-2 text-white" />
          <A class={`text-2xl tracking-tight font-bold ml-2 ${location.pathname === "/" ? "color-changer" : "text-gray-100"}`} href="/">
            SolidToDo
          </A>
        </div>
        <div class="flex items-center gap-3">
          <A href="/create" class={"transition duration-200 " + isActive("/create")}>
            Create
          </A>
          <A href="/r2" class={"transition duration-200 " + isActive("/r2")}>
            Route 2
          </A>
          <A href="/r3" class={"transition duration-200 " + isActive("/r3")}>
            Route 3
          </A>
        </div>
      </section>
    </header>
  );
}