/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createAuth0 } from '@auth0/auth0-vue';
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(
    createAuth0({
      domain: "dev-k40lyevo2p6xqwkz.us.auth0.com",
      clientId: "oVkYNuNXdW3GhsnPTB4h390BIh7nAIOv",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );

app.mount('#app')
