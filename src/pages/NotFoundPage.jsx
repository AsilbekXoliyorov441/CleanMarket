import React from 'react'

const NotFoundPage = () => {
  return (
    <section class="flex items-center mt-[-60px] h-screen p-16 bg-gray-50 dark:bg-gray-700">
      <div class="container flex flex-col items-center ">
        <div class="flex flex-col gap-6 max-w-md text-center">
          <h2 class="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
            <span class="sr-only">Error</span>404
          </h2>
          <p class="text-2xl md:text-3xl dark:text-gray-300">
            Sorry, we couldn't find this page.
          </p>
          <a
            href="/"
            class="px-8 py-4 text-xl font-semibold rounded bg-headerColor text-gray-50 hover:text-gray-200"
          >
            Back to home
          </a>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage