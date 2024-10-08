import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section class="bg-white dark:bg-gray-900 ">
      <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div>
          <p class="text-sm font-medium text-blue-500 dark:text-blue-400">
            404 Error
          </p>
          <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            We can't find that page
          </h1>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for does't exist or has been moved.
          </p>

          <div class="flex items-center mt-6 gap-x-3">
            <Link href="/">
              {" "}
              <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                Take me home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
