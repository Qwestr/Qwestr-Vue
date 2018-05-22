<template>
  <v-data-table
    :headers="headers"
    :items="subQwests"
    :pagination.sync="pagination"
    item-key="name"
    class="elevation-5 mt-3"
  >
    <template slot="headers" slot-scope="props">
      <tr>
        <th
          v-for="header in props.headers"
          :key="header.text"
          :class="classListForHeader(header)"
          @click="changeSort(header)"
        >
          <v-icon v-if="header.sortable" small>
            arrow_upward
          </v-icon>
          {{ header.text }}
        </th>
      </tr>
    </template>
    <template slot="items" slot-scope="props">
      <tr>
        <td>{{ props.item.name }}</td>
        <td class="px-5">
          <v-btn v-if="!props.item.completed" @click="completeSubQwest(props.item)" icon class="mx-0">
            <v-icon color="grey">check_circle</v-icon>
          </v-btn>
          <v-btn v-else @click="restartSubQwest(props.item)" icon class="mx-0">
            <v-icon color="teal">check_circle</v-icon>
          </v-btn>
        </td>
        <td class="justify-center layout px-0">
          <v-btn :to="{ name: 'sub-qwest-details', params: { qwestKey: $route.params.key, subQwestKey: props.item['.key'] } }" icon class="mx-0">
            <v-icon color="cyan">visibility</v-icon>
          </v-btn>
          <v-btn @click="editSubQwest(props.item)" icon class="mx-0">
            <v-icon color="orange">edit</v-icon>
          </v-btn>
          <v-btn @click="deleteSubQwest(props.item)" icon class="mx-0">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import { userSubQwestsRef } from '@/firebase'

export default {
  data () {
    return {
      subQwests: {},
      pagination: {
        sortBy: 'name',
        descending: true
      },
      headers: [
        { text: 'SubQwest', value: 'name', align: 'left', sortable: true },
        { text: 'Status', value: 'completed', align: 'left', sortable: true },
        { text: 'Actions', value: 'action', sortable: false }
      ]
    }
  },
  methods: {
    classListForHeader (header) {
      const classList = ['column']
      if (header.sortable) {
        classList.push('sortable')
      }
      if (header.align === 'left') {
        classList.push('text-xs-left')
      } else if (header.align === 'right') {
        classList.push('text-xs-right')
      }
      if (header.value === this.pagination.sortBy) {
        classList.push('active')
      }
      this.pagination.descending ? classList.push('desc') : classList.push('asc')
      return classList
    },
    changeSort (header) {
      if (!header.sortable) {
        return
      }
      if (this.pagination.sortBy === header.value) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = header.value
        this.pagination.descending = false
      }
    },
    completeSubQwest (subQwest) {
      this.$firebaseRefs.subQwests.child(subQwest['.key']).child('completed').set(true)
    },
    restartSubQwest (subQwest) {
      this.$firebaseRefs.subQwests.child(subQwest['.key']).child('completed').set(null)
    },
    editSubQwest (subQwest) {
      // Dispatch the storeSubQwest action
      this.$store.dispatch('storeSubQwest', subQwest)
    },
    deleteSubQwest (subQwest) {
      this.$firebaseRefs.subQwests.child(subQwest['.key']).remove()
    }
  },
  created () {
    // Setup Firebase references
    this.$bindAsArray('subQwests', userSubQwestsRef(this.$route.params.key))
  }
}
</script>
