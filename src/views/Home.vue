<template>
  <div class="pa-8" style="width: 800px">
    <h1>Login</h1>
    <br />
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="Rules"
        label="Username"
        required
      ></v-text-field>

      <v-text-field
        type="password"
        v-model="password"
        :rules="Rules"
        label="Password"
        required
      ></v-text-field>

      <v-btn color="success" class="mr-4 mt-4" @click="validate">
        Validate
      </v-btn>
    </v-form>
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

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("setUsername", this.name);
        this.$store.dispatch("setPassword", this.password);
        this.$router.push("/table");
      }
    },
  },
};
</script>
