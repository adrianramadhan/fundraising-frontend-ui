<template>
  <header class="flex items-center">
    <div style="height: 54px" class="pr-5">
      <img src="../public/logo.svg" alt="logo" class="h-full" />
    </div>
    <ul class="flex items-center">
      <li>
        <NuxtLink
          class="text-white hover:text-teal-500 text-lg px-4 py-3"
          to="/"
          >Home</NuxtLink
        >
      </li>
      <li>
        <a class="text-white hover:text-teal-500 text-lg px-4 py-3" href="#"
          >Project</a
        >
      </li>
      <li>
        <a class="text-white hover:text-teal-500 text-lg px-4 py-3" href="#"
          >Features</a
        >
      </li>
      <li>
        <a class="text-white hover:text-teal-500 text-lg px-4 py-3" href="#"
          >Success Stories</a
        >
      </li>
    </ul>
    <ul class="flex ml-auto items-center mt-2">
      <li>
        <NuxtLink
          to="#"
          class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4"
        >
          Sign Up
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          href="#"
          class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
        >
          My Account
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>
