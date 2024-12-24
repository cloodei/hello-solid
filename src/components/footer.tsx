import { Github } from "lucide-solid";

export default function Footer() {
  return (
    <footer class="flex items-center justify-center w-full h-[76px] bg-gray-50 border-t border-gray-300/90">
      <a
        class="flex items-center justify-center"
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github class="w-8 h-8" />
        <span class="ml-3">Powered by SolidJS</span>
      </a>
    </footer>
  );
}