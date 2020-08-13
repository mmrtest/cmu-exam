<template>
  <div class="pa-8" style="width: 800px">
    <h1>Error</h1>
    <h1>{{ this.$route.params.msg }}</h1>
    <br />

    <v-btn color="disable" class="mr-4 mt-4" href="/table">
      back
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    valid: true,
    name: "",
    password: "",
    Rules: [(v) => !!v || "Fill out this field"],
  }),
};
</script>
