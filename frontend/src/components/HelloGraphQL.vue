<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-2">GraphQL Data</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gql } from '@apollo/client/core'
import {  useQuery } from '@vue/apollo-composable'

const GET_DATA = gql`
  query {
    hello
  }
`

const { result, loading, error } = useQuery(GET_DATA)
</script>
