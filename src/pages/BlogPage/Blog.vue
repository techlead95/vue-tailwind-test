<template>
  <card>
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="image" :alt="title" />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm leading-5 font-medium text-indigo-600">
          <a href="#" class="hover:underline">Video</a>
        </p>
        <a href="#" class="block">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">{{ title }}</h3>
          <p class="mt-3 text-base leading-6 text-gray-500">{{ summary }}</p>
        </a>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a href="#">
            <img class="h-10 w-10 rounded-full" :src="userImg" :alt="userName" />
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm leading-5 font-medium text-gray-900">
            <a href="#" class="hover:underline">{{ userName }}</a>
          </p>
          <div class="flex text-sm leading-5 text-gray-500">
            <time :datetime="date">{{ date | moment('MMM DD, YYYY') }}</time>
            <span class="mx-1">&middot;</span>
            <span>{{ minutesToRead }} min read</span>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import Card from '../../components/Card'

export default {
  name: "Blog",
  components: {
    Card
  },
  props: {
    image: String,
    category: String,
    title: String,
    summary: String,
    userImg: String,
    userName: String,
    minutesToRead: Number,
    date: String
  }
};
</script>