<script setup lang="ts"></script>

<template>
  <div>
    <header class="flex h-[10dvh] items-center justify-between bg-base-200">
      <NuxtLink to="/">
        <h1 class="mx-5 select-none text-3xl font-bold">Pokerious</h1>
      </NuxtLink>
    </header>
    <slot />
  </div>
</template>
