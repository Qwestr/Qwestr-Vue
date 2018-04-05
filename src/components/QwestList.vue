<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="items"
    select-all
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
          @click="changeSort(header.value)"
        >
          <v-icon v-if="header.sortable" small>
            arrow_upward
          </v-icon>
          {{ header.text }}
        </th>
      </tr>
    </template>
    <template slot="items" slot-scope="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
        <td>{{ props.item.name }}</td>
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
      selected: [],
      headers: [
        { text: 'Qwest', value: 'name', align: 'left', sortable: true },
        { text: 'Status', value: 'status', align: 'left', sortable: true },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      items: [
        {
          name: 'Find an Apartment',
          status: 'Incomplete'
        },
        {
          name: 'Open a Persian Restaurant',
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
      if (header.value === this.pagination.sortBy) {
        classList.push('active')
      }
      this.pagination.descending ? classList.push('desc') : classList.push('asc')
      return classList
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    }
  }
}
</script>