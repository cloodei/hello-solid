export default function Home() {
  return (
    <div class="flex flex-col items-center justify-center min-h-[calc(100vh-48px-76px)] text-gray-800 px-14 py-4 text-center">
      <h1 class="text-4xl sm:text-5xl font-bold">
        Welcome to <a target="_blank" class="text-blue-600" href="https://solidjs.com">SolidTS</a>!
      </h1>

      <p class="mt-4 text-xl">
        Get started by visiting
        <code class="bg-gray-200 ml-[7px] p-1 rounded-md font-mono">https://github.com/cloodei/hello-solid</code>
      </p>

      <div class="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a
          target="_blank"
          href="https://solidjs.com/docs"
          class="p-6 mt-6 text-left border w-96 rounded-xl transition duration-200 hover:text-blue-600 focus:text-blue-600"
        >
          <h3 class="text-[22px] font-bold">Documentation &rarr;</h3>
          <p class="mt-3 text-lg">
            Find in-depth information about SolidJS features and API.
          </p>
        </a>

        <a
          target="_blank"
          href="https://solidjs.com/community"
          class="p-6 mt-6 text-left border w-96 rounded-xl transition duration-200 hover:text-blue-600 focus:text-blue-600"
        >
          <h3 class="text-[22px] font-bold">Learn &rarr;</h3>
          <p class="mt-3 text-lg">
            Learn about SolidJS in an interactive course with quizzes!
          </p>
        </a>

        <a
          target="_blank"
          href="https://solidjs.com/community"
          class="p-6 mt-6 text-left border w-96 rounded-xl transition duration-200 hover:text-blue-600 focus:text-blue-600"
        >
          <h3 class="text-[22px] font-bold">Community &rarr;</h3>
          <p class="mt-3 text-lg">
            Connect with other SolidJS users and contributors.
          </p>
        </a>
      </div>
    </div>
  );
}