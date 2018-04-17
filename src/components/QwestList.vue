<template>
  <v-data-table
    :headers="headers"
    :items="qwests"
    :pagination.sync="pagination"
    item-key="name"
    class="elevation-1"
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
        <td>{{ getStatusText(props.item) }}</td>
        <td class="justify-center layout px-0">
          <v-btn v-if="!props.item.completed" @click="completeQwest(props.item)" icon class="mx-0">
            <v-icon color="grey">check_circle</v-icon>
          </v-btn>
          <v-btn v-else @click="restartQwest(props.item)" icon class="mx-0">
            <v-icon color="teal">check_circle</v-icon>
          </v-btn>
          <v-btn @click="editQwest(props.item)" icon class="mx-0">
            <v-icon color="orange">edit</v-icon>
          </v-btn>
          <v-btn @click="deleteQwest(props.item)" icon class="mx-0">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import { db } from '@/firebase'

export default {
  data () {
    return {
      qwests: {},
      pagination: {
        sortBy: 'name',
        descending: true
      },
      headers: [
        { text: 'Qwest', value: 'name', align: 'left', sortable: true },
        { text: 'Status', value: 'status', align: 'left', sortable: true },
        { text: 'Actions', value: 'action', sortable: false }
      ]
    }
  },
  firebase: {
    qwests: {
      source: db.ref('qwests'),
      cancelCallback (error) {
        console.error('error', error)
      }
    }
  },
  methods: {
    getStatusText (qwest) {
      if (qwest.completed) {
        return 'Completed!'
      } else {
        return 'Incomplete'
      }
    },
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
    completeQwest (qwest) {
      this.$firebaseRefs.qwests.child(qwest['.key']).child('completed').set(true)
    },
    restartQwest (qwest) {
      this.$firebaseRefs.qwests.child(qwest['.key']).child('completed').set(false)
    },
    editQwest (qwest) {
      // Dispatch the storeQwest action
      console.log('qwest', qwest)
      this.$store.dispatch('storeQwest', qwest)
    },
    deleteQwest (qwest) {
      this.$firebaseRefs.qwests.child(qwest['.key']).remove()
    }
  }
}
</script>