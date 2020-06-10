<template>
  <div class="min-h-screen bg-white">
    <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <img
                class="block lg:hidden h-8 w-auto"
                src="/img/logos/workflow-mark-on-white.svg"
                alt="Workflow logo"
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="/img/logos/workflow-logo-on-white.svg"
                alt="Workflow logo"
              />
            </div>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex">
              <nav-link to="/blogs" :active="currentPath == '/blogs'">Dashboard</nav-link>
              <nav-link to="/courses" :active="currentPath == '/courses'" class="ml-8">Team</nav-link>
              <nav-link class="ml-8">Projects</nav-link>
              <nav-link class="ml-8">Calendar</nav-link>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <notification-icon></notification-icon>
            <dropdown :items="['Your Profile', 'Settings', 'Sign out']">
              <template v-slot:trigger>
                <button
                  class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt
                  />
                </button>
              </template>
            </dropdown>
          </div>
          <burger-menu-icon></burger-menu-icon>
        </div>
      </div>
    </nav>

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Dropdown from "./Dropdown";
import NavLink from "./NavLink";
import BurgerMenuIcon from "./BurgerMenuIcon";
import NotificationIcon from "./NotificationIcon";

export default {
  name: "Layout",
  components: {
    Dropdown,
    NavLink,
    BurgerMenuIcon,
    NotificationIcon
  },
  computed: {
    currentPath() {
      return this.$route.path;
    }
  }
};
</script>