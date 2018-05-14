<template>
  <v-app>
    <v-navigation-drawer
      app
      persistent
      enable-resize-watcher
      v-model="drawer"
      :mini-variant="miniVariant"
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <router-link v-if="!isUserLoaded" :to="{name: 'login'}" tag="v-btn" class="btn--flat" activeClass="btn--active" flat>
          Login
        </router-link>
        <router-link v-if="!isUserLoaded" :to="{name: 'sign-up'}" tag="v-btn" class="btn--flat" activeClass="btn--active">
          Sign Up
        </router-link>
        <v-btn flat v-if="isUserLoaded" @click="logout">
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view/>
      </v-slide-y-transition>
      <app-fab></app-fab>
    </v-content>
    <v-footer app>
      <span>Qwestr &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import FAB from '@/components/FAB'

export default {
  name: 'App',
  components: {
    'app-fab': FAB
  },
  data () {
    return {
      drawer: false,
      items: [{
        icon: 'home',
        title: 'Home',
        to: { name: 'home' }
      }],
      miniVariant: false,
      title: 'Qwestr'
    }
  },
  computed: {
    isUserLoaded () {
      return this.$store.getters['isUserLoaded']
    }
  },
  methods: {
    logout () {
      // Dispatch the logout action
      this.$store.dispatch('logout')
      // Redirect to the home page
      this.$router.replace({ name: 'home' })
    }
  }
}
</script>
