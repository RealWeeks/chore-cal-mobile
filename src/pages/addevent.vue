<template>
  <q-page class="justify-center">
    <div class="date-holder">

      <q-datetime v-model="date1" float-label="Date" />
      <q-select
        v-model="selectedGroup"
        float-label="Select Group"
      :options="groupNames"
      />
      <br/>
      <q-select
        v-if="selectedGroup"
        v-model="selectedTask"
        float-label="Select Tasks"
        :options="taskNames"
      />
      <br/>

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
      if (this.$store.state.groups) {
        return this.$store.state.groups
      }
    },
    taskNames () {
      if (this.selectedGroup) {
        let selectGroup = this.selectedGroup
        let tasksForGroup = this.groups.filter(x => x.name === selectGroup)
        return tasksForGroup[0].tasks.map(x => { return {label: x, value: x} })
      }
    },
    groupNames () {
      if (this.groups) {
        let groups = this.groups
        let groupNames = groups.map(x => {
          return {label: x.name, value: x.name}
        })
        return groupNames
      }
    }
  },
  watch: {
    // groups () {
    //   let groups = this.$store.state.groups
    //   let groupNames = groups.map(x => x.name)
    //   console.log(groupNames)
    //   debugger
    // }
  },
  methods: {
  },
  data () {
    return {
      date1: null,
      tasks: [],
      selectedGroup: '',
      selectedTask: ''
    }
  }
}
</script>
