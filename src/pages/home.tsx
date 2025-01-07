import { useNavigate } from "@solidjs/router";
import Button from "../components/button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div class="flex flex-col min-h-[calc(100vh-48px-76px)]">
      <section class="flex-1 relative isolate overflow-hidden">
        {/* Background decoration */}
        <div class="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div class="mx-auto max-w-6xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
          <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 class="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
              Manage your tasks with
              <span class="text-primary block">SolidToDo</span>
            </h1>
            <p class="mt-6 text-lg leading-8 text-muted-foreground">
              A powerful, fast, and efficient task management application built with SolidJS and TypeScript.
              Experience seamless task organization with real-time updates and a beautiful interface.
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <Button onClick={() => navigate("/create")} size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/browse")}>
                Browse Tasks
              </Button>
            </div>
          </div>

          <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div class="rounded-xl bg-card p-8 shadow-2xl ring-1 ring-border">
                {/* Add a preview of your todo list or app screenshot here */}
                <div class="animate-pulse space-y-4">
                  <div class="h-4 bg-muted rounded w-3/4"></div>
                  <div class="h-4 bg-muted rounded w-1/2"></div>
                  <div class="h-4 bg-muted rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}