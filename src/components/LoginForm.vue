<template>
    <div class="mb-3">
  
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Sign in to access data</div>
  
        <Login></Login>
        
      </v-card>
    </div>
  </template>
  <script>
  import Login from '@/components/Login.vue'
    export default {
        components: {
            Login,
    },
      data: () => ({
        visible: false,
      }),
    }
  </script>