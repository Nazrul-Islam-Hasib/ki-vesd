<template>
     <div>
      <v-btn block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal" @click="login">Log in</v-btn>
    </div>
  </template>
  <script>
    import { useAuth0 } from '@auth0/auth0-vue';
  
    export default {
      setup() {
        const { loginWithRedirect } = useAuth0();
  
        return {
          login: () => {
            loginWithRedirect();
          }
        };
      }
    };
  </script>