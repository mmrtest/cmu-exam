<template>
  <center>
    <div style="width: 60%;margin: 12px;border: 1px solid black;padding: 12px">
      <v-btn color="success" class="mr-4" href="/add">
        Add Employees
      </v-btn>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Firstname</th>
              <th class="text-left">Lastname</th>
              <th class="text-left">Birthday</th>
              <th class="text-left">Email</th>
              <th class="text-left">Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item._id">
              <td>{{ item.firstname }}</td>
              <td>{{ item.lastname }}</td>
              <td>{{ item.birthday }}</td>
              <td>{{ item.email }}</td>
              <td>
                <v-btn
                  color="primary"
                  class="mr-4"
                  @click="updateUser(item._id)"
                >
                  Update
                </v-btn>
                <v-btn color="error" class="mr-4">
                  Delete
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </center>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
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
      .get("https://dummy-api.cm.edu/employees", {
        auth: {
          username: this.username,
          password: this.password,
        },
      })
      .then((response) => {
        this.data = response.data;
      });
  },
  methods: {
    updateUser(id) {
      this.$router.push("/update/" + id);
    },
  },
};
</script>
