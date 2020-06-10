<template>
  <div class="flex">
    <div class="w-2/3 bg-gray-900"></div>
    <div class="w-1/3">
      <lesson-section
        v-for="(section, index) in sections"
        :key="section.title"
        :index="index + 1"
        v-bind="section"
      ></lesson-section>
    </div>
  </div>
</template>

<script>
import LessonSection from "./LessonSection";

export default {
  name: "CoursePage",
  components: {
    LessonSection
  },
  data() {
    return {
      sections: [
        {
          title: "Einleitung",
          info: "3 / 4",
          minutes: 12
        },
        {
          title: "Einleitung der Python-Umgebung",
          info: "1 / 3",
          minutes: 12
        },
        {
          title: "Einleitung der R-Umgebung",
          info: "0 / 6",
          minutes: 12
        },
        {
          title: "Grundlagen Machine-Learning",
          info: "2 / 2",
          minutes: 12
        },
        {
          title: "Lineare Regression",
          info: "9 / 13",
          minutes: 54
        },
        {
          title: "Praxisprojekt: Lineare Regression",
          info: "1 / 4",
          minutes: 54
        },
        {
          title: "Train / Test",
          info: "0 / 8",
          minutes: 29,
          lessons: [
            {
              type: 'lesson',
              index: 31,
              title: 'Intuition: Train / Test',
              minutes: 5
            },
            {
              type: 'quiz',
              index: 3,
              title: 'Check: train / Test'
            },
            {
              type: 'lesson',
              index: 32,
              title: 'Python: Train / Test (Teil 1)',
              minutes: 5
            },
            {
              type: 'lesson',
              index: 33,
              title: 'Python: Train / Test (Teil 2)',
              minutes: 5
            },
            {
              type: 'lesson',
              index: 34,
              title: 'Python: Train / Test Aufgabe',
              minutes: 5
            },
            {
              type: 'lesson',
              index: 35,
              title: 'R: Train / Test (Teil 2)',
              minutes: 5
            },
            {
              type: 'lesson',
              index: 36,
              title: 'R: Train / Test (Teil 2)',
              minutes: 5
            },
          ]
        }
      ]
    };
  }
};
</script>