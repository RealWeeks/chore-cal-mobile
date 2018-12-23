<template>
  <q-page class="flex flex-start justify-center">
    <div class="date-holder">
      <q-datetime-picker v-model="model" type="date" />
      <q-btn to="/" class="create-btn" rounded color="primary" label="Add event"/>
      <br/>
      <q-btn to="/" class="create-btn" rounded color="red" label="Back"/>
    </div>
  </q-page>
</template>

<style scoped>
.date-holder{
  margin-top: 10%;
}
</style>

<script>
import { QDatetimePicker } from 'quasar'
export default {
  name: 'addevent',
  components: {
    QDatetimePicker
  },
  created () {
    this.$store.dispatch('GET_GROUPS')
  },
  computed: {
    groups () {
      return this.$store.state.groups
    }
  },
  watch: {
    groups (groups) {
      debugger
    }
  },
  methods: {
  },
  data () {
    return {
      model: new Date()
    }
  }
}
</script>
