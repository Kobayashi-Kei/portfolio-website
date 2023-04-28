<script setup lang="ts">

</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">研究業績</h2>

        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">これまで発表した論文です。</p>
      </div>
      <!-- text - end -->

      <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
        <!-- article - start -->
        <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
          <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
            <img src="@/assets/nlp2022.png" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>

          <div class="flex flex-col gap-2">
            <span class="text-sm text-gray-400">March 14-18, 2022</span>

            <h2 class="text-xl font-bold text-gray-800">
              <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">学術論文 PDF からの関連研究章と引用情報の抽出による論文執筆支援のためのデータセット構築</a>
            </h2>

            <p class="text-gray-500">小林恵大, 成松宏美, 小山康平, 堂坂浩二, 田盛大悟, 東中竜一郎, 南泰浩, 平博順. 学術論文における関連研究の執筆支援のためのタスク設計およびデータ構築. 言語処理学会第 27 回年次大会, 2022.</p>

            <div>
              <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
            </div>
          </div>
        </div>
        <!-- article - end -->

        <!-- article - start -->
          <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
              <img src="@/assets/lrec2022.png" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>

            <div class="flex flex-col gap-2">
              <span class="text-sm text-gray-400">June 20-25, 2022</span>

              <h2 class="text-xl font-bold text-gray-800">
                <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Dataset Construction for Scientific-Document Writing Support by Extracting Related Work Section and Citations from PDF Papers</a>
              </h2>

              <p class="text-gray-500">Keita Kobayashi, Kohei Koyama, Hiromi Narimatsu, and Yasuhiro Minami. 2022. Dataset Construction for Scientific-Document Writing Support by Extracting Related Work Section and Citations from PDF Papers. In Proceedings of the Thirteenth Language Resources and Evaluation Conference, pages 5673–5682, Marseille, France. European Language Resources Association.</p>

              <div>
                <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
              </div>
            </div>
          </div>
          <!-- article - end -->

        <!-- article - start -->
            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
              <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                  </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">June 6-9, 2023</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">アブストラクトの観点に基づく学術論文推薦手法の検証</a>
                </h2>

                <p class="text-gray-500">人工知能学会全国大会 2023 6/9 ポスターセッションにて発表予定</p>

                <div>
                  <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                </div>
              </div>
            </div>
            <!-- article - end -->
      </div>
    </div>
  </div>
</template>




<style scoped>
/* Add custom styles here */

/* Set the height of the images in the articles */
.group .h-48,
.group .md\:h-64 {
  height: 12rem;
}
</style>