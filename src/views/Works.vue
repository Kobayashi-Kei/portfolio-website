<script setup lang="ts">

</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Works</h2>

        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">私がこれまで作成したアプリケーションです。</p>
      </div>
      <!-- text - end -->

      <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          <!-- article - start -->
          <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
            <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
              <img src="@/assets/PortfolioWebSite.png" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>

            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-gray-800">
                <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Keita Kobayashi's Portfolio</a>
              </h2>

              <p class="mb-8 text-gray-500">このサイトです。</p>
            </div>
          </div>
        <!-- article - end -->

        <!-- article - start -->
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="https://paper-recommendation-ad949.web.app/" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="@/assets/PaperRecommendationApp.png" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>

          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a href="https://paper-recommendation-ad949.web.app/" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Paper Recommendation App</a>
            </h2>

            <p class="mb-8 text-gray-500">学術論文の推薦をしてくれるアプリです。研究方針や研究概要を入力すると、関連する論文のリストを提示します。</p>
          </div>
        </div>
        <!-- article - end -->

        <!-- article - start -->
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>

          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working with legacy stacks</a>
            </h2>

            <p class="mb-8 text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

            <div class="mt-auto flex items-end justify-between">
              <div class="flex items-center gap-2">
                <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by peter bucks" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <span class="block text-indigo-500">Jane Jackobs</span>
                  <span class="block text-sm text-gray-400">April 07, 2021</span>
                </div>
              </div>

              <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
            </div>
          </div>
        </div>
        <!-- article - end -->

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>