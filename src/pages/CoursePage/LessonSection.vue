<template>
  <div>
    <div class="bg-gray-100 p-4 flex items-start border-gray-300 border-b">
      <div>
        <div class="text-base font-bold text-gray-700">Abchnitt {{ index }}: {{ title }}</div>
        <div class="text-sm">{{ info }} | {{ minutes }} Min.</div>
      </div>
      <div class="ml-auto pl-5">
        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div v-for="lesson in lessons" :key="lesson" class="flex px-4 py-2">
      <input type="checkbox" class="mr-4 mt-1" />
      <div>
        <div>
          {{ lesson.type === 'quiz' ? `Quiz ${lesson.index}:` : `${lesson.index}.` }}
          {{ lesson.title }}
        </div>
        <div v-if="lesson.type ==='lesson'" class="text-sm text-gray-500">{{ minutes }} Min.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LessonSection",
  props: {
    index: Number,
    title: String,
    info: String,
    minutes: Number,
    lessons: {
      type: Array,
      default: () => []
    }
  }
};
</script>