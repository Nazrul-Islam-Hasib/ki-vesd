<template>
    <div>
      <v-btn block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal" @click="logout">Log out</v-btn>
    </div>
  </template>
  <script>
    import { useAuth0 } from '@auth0/auth0-vue';
  
    export default {
      setup() {
        const { logout } = useAuth0();
  
        return {
          logout: () => {
            logout({ logoutParams: { returnTo: window.location.origin } });
          }
        };
      }
    };
  </script>