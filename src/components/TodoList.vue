<script setup lang="ts"></script>
<template>
  <v-list lines="one">
    <v-list-item
      v-for="n in 3"
      :key="n"
      :title="'Item ' + n"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      :prepend-avatar="'https://randomuser.me/api/portraits/women/8.jpg'"
    ></v-list-item>
  </v-list>
</template>

<style lang="scss" scoped></style>
