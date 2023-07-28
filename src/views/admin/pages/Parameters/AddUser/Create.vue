<template>
 <b-container fluid>
   <form method="post" @submit.prevent="add_user" v-if="!loading">
        <div class="d-flex justify-content-between align-items-center mb-5">
          <h4 class="mb-6">Add User</h4>
          <b-button type="submit" class="btn btn-primary" variant="success">
            Save
          </b-button>
        </div>
        <b-col sm="8" lg="8">
      <b-card>
          <b-row class="my-1">
            <b-col sm="6">
              <label for="input-name">Name:</label>

              <b-form-input
                type="text"
                v-model="add_name"
                id="input-name"
                :state="null"
                placeholder="Name"
                required
              ></b-form-input>
            </b-col>

            <b-col sm="6">
              <label for="input-email">Email:</label>

              <b-form-input
                type="email"
                v-model="email"
                id="input-email"
                :state="null"
                placeholder="Email"
                required
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="6">
              <label for="input-phone">Phone:</label>

              <b-form-input
                type="text"
                v-model="phone"
                id="input-phone"
                pattern="\d{10}"
                title="Please enter 10 digit mobile no."
                :state="null"
                placeholder="Phone"
                required
              ></b-form-input>
            </b-col>

            <b-col sm="6">
              <label for="input-pass">Password:</label>

              <b-form-input
                type="password"
                v-model="password"
                id="input-pass"
                :state="null"
                placeholder="Password"
                required
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            
          </b-row>
          
          
        </b-card>
      </b-col>
      </form>
    </b-container>
 
</template>
<script>
// import ApiExecute from "@/api";
import axios from "axios";

export default {
  name: "CreateUser",
  data() {
    return {
      add_name: "",
      email: "",
      phone: "",
      
      password: "",
      confirmpassword:"",
      loading: false,
    };
  },
  methods: {
    add_user() {
      
      axios.post('http://127.0.0.1:3001/api/alluser', {
        add_name: this.add_name,
        
        email: this.email,
        
        phone: this.phone,
        password: this.password,
        // confirmpassword: this.confirmpassword,
        
      }).then(response => {
        
        console.log(response.data);
        
        // this.$router.push({
        //      name: 'ViewAeps'
        //  })
        // this.resetData();
        this.$toast.success(`member added successfully`);

        // Do something with the response
      })
      .catch(error => {
        console.log(error.response.data);
        this.$toast.error(`Error`);

      });
    },
    
  },
 
};
</script>
