<template>
  <q-page class="flex flex-start justify-center">
    <div class="column welcome-wrapper flex justify-around">
      <div class="text-wrapper welcome-banner justify-center content-center items-center">
        <p class="text-weight-bolder header-text self-center">Name your group</p>
        <!-- <br/>
        <p class="text-weight-bolder header-text self-center">Group a name</p> -->
        <q-input v-model="groupName" float-label="Group name" placeholder="Katie's Wishlist" />
      </div>

      <div class="text-wrapper welcome-banner justify-center content-center items-center">
        <p class="text-weight-bolder header-text self-center">Add Tasks</p>
        <br/>
        <q-field
        icon="assignment_ind"
        count
        helper="Task names"
      >
        <q-chips-input float-label="Tasks" v-model="tasks" />
      </q-field>
      </div>

      <!-- <div class="text-wrapper welcome-banner justify-center content-center items-center">
        <p class="text-weight-bolder header-text self-center">Or select group</p>
        <br/>
        {{groups}}
      </div> -->

      <div class="btn-container column justify-between">
        <q-btn to="/" class="create-btn" rounded color="red" label="Back"/>
        <br/>
        <!-- <q-btn to="invitefriends" class="create-btn" rounded color="secondary" label="Next"/> -->
        <q-btn @click="handleCreateGroup" class="create-btn" rounded color="secondary" label="Next"/>
        <br/>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.welcome-wrapper{
  margin-top: 15%;
}
.welcome-banner{
  margin-bottom: 25%;
  text-align: center;
}
.header-text{
  font-size: 2.5em;
}
.btn-container{
    text-align: center;
}
</style>

<script>
export default {
  name: 'groupname',
  methods: {
    handleAdd (event, foo) {
      debugger
    },
    handleCreateGroup () {
      this.$store.dispatch('CREATE_GROUP', {groupname: this.groupName, tasks: this.tasks})
        .then(() => {
          this.$q.notify({message: 'Group greated', type: 'positive', position: 'top'})
          this.$router.push('groupsplash')
        })
        .catch(() => {
          this.$q.notify({message: 'Error', type: 'negative', position: 'top'})
        })
    }
  },
  created () {
    this.$store.dispatch('GET_GROUPS')
  },
  computed: {
    groups () {
      return this.$store.state.groups
    }
  },
  data () {
    return {
      groupName: '',
      tasks: []
    }
  }
}
</script>
