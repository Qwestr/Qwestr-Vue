<template>
  <v-data-table
    :headers="headers"
    :items="items"
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
        <td>{{ props.item.status }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteQwest(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data () {
    return {
      pagination: {
        sortBy: 'name',
        descending: true
      },
      headers: [
        { text: 'Qwest', value: 'name', align: 'left', sortable: true },
        { text: 'Status', value: 'status', align: 'left', sortable: true },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      items: [
        {
          name: 'Edit This Qwest',
          status: 'Complete'
        },
        {
          name: 'Delete This Qwest',
          status: 'Complete'
        },
        {
          name: 'Complete This Qwest',
          status: 'Incomplete'
        },
        {
          name: 'Restart This Qwest',
          status: 'Complete'
        }
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
    deleteQwest (item) {
      const index = this.items.indexOf(item)
      this.items.splice(index, 1)
    }
  }
}
</script>