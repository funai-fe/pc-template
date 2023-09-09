<template>
  <div id="app">
    <router-view />
    <CallUsDialog/>
    <AddSessionDialog />
  </div>
</template>

<script>
import AddSessionDialog from '@/components/AddSessionDialog/index.vue'
import CallUsDialog from "@/components/CallUsDialog/index.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: 'App',
  components: {
    CallUsDialog,
    AddSessionDialog
  },
  methods: {
  }
}
</script>
