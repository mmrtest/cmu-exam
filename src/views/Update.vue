<template>
  <div class="pa-8" style="width: 800px">
    <h1>Add Employees</h1>
    <br />
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="firstname"
        :rules="Rules"
        label="Firstname"
        required
      ></v-text-field>

      <v-text-field
        v-model="lastname"
        :rules="Rules"
        label="Lastname"
        required
      ></v-text-field>

      <v-text-field
        v-model="birthday"
        :rules="Rules"
        label="Birthday"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>
      <v-btn color="disable" class="mr-4 mt-4" href="/table">
        back
      </v-btn>
      <v-btn color="success" class="mr-4 mt-4" @click="validate">
        submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    valid: true,
    firstname: "",
    lastname: "",
    birthday: "",
    email: "",
    Rules: [(v) => !!v || "Fill out this field"],
    emailRules: [
      (v) => !!v || "Fill out this field",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  computed: {
    username() {
      return this.$store.getters.username;
    },
    password() {
      return this.$store.getters.password;
    },
  },
  async mounted() {
    const axios = require("axios");

    await axios
      .get("https://dummy-api.cm.edu/employees/" + this.$route.params.id, {
        auth: {
          username: this.username,
          password: this.password,
        },
      })
      .then((response) => {
        this.firstname = response.data.firstname;
        this.lastname = response.data.lastname;
        this.birthday = response.data.birthday;
        this.email = response.data.email;
      });
  },
  methods: {
    async validate() {
      const axios = require("axios");
      if (this.$refs.form.validate()) {
        // this.$store.dispatch("setUsername", this.name);
        // this.$store.dispatch("setPassword", this.password);
        // this.$router.push("/table");
        await axios
          .put(
            "https://dummy-api.cm.edu/employees/" + this.$route.params.id,
            {
              firstname: this.firstname,
              lastname: this.lastname,
              birthday: this.birthday,
              email: this.email,
            },
            {
              auth: {
                username: this.username,
                password: this.password,
              },
            }
          )
          .then((response) => {
            console.log(response);
            this.$router.push("/table");
          })
          .catch((error) => {
            console.log(error.response);
            this.$router.push(
              "/error/" +
                error.response.status +
                " " +
                error.response.statusText
            );
          });
      }
    },
  },
};
</script>
