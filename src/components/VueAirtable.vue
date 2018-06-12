<template>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th v-for="(col, colIndex) in columns" :key="colIndex">
          {{ col }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in records" :key="record.id">
        <td v-for="(col, colIndex) in columns" :key="record.id + '-' + colIndex" align="left">
          {{ record.fields[col] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';

export default {
  name: 'VueAirtable',
  props: [
    'base',
    'columns',
    'filter',
    'sort'
  ],
  data: function () {
    return {
      apiUrl: 'https://api.airtable.com/v0/',
      apiKey: process.env.AIRTABLE_API_KEY, // Always use a read-only account token
      records: []
    };
  },
  mounted: function () {
    if (!this.base || !this.columns) {
      return console.error('Please specify `base` and `columns` attributes for <vue-airtable> component.');
    }
    this.getData();
  },
  watch: {
    table: function (newTable, oldTable) {
      this.getData();
    }
  },
  methods: {
    getData: function () {
      axios({
        url: this.apiUrl + this.base,
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        },
        params: {
          filterByFormula: this.filter || '',
          sort: this.sort || ''
        }
      }).then((res) => {
        this.records = res.data.records;
      });
    }
  }
}
</script>
