<template>
  <header>
    <router-link :to="{ name: 'AdminDashboard' }" class="logo">
      <img src="https://st2.depositphotos.com/1364916/5341/v/450/depositphotos_53411021-stock-illustration-gold-lotus-and-people-team.jpg" alt="" />
      <span class="haeding">Gold Loan</span>
    </router-link>
    <div class="main-header">
      <b-navbar type="light" variant="light">
        <b-navbar-nav>
          <b-nav-item-dropdown right>
            <template #button-content>
              <bootstrap-icon icon="person-circle" style="font-size: 24px" />
            </template>
            <b-dropdown-item href="/admin-xpanel/changepassword">Change Password</b-dropdown-item>
            <b-dropdown-item @click ="logout()">Sign Out</b-dropdown-item>
            <!-- <template #button-content @click="logout()">
              Sign Out
            </template> -->
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
import ApiExecute from '@/api';

export default {
  name: "AdminHeader",
  components: {
    BootstrapIcon,
  },
  data() {
    return {
      galleries: null,



    };
  },

  methods: {
    async logout() {
      this.loading = true
      let apiResponse = await ApiExecute("logout", "POST",);
      this.loading = false
      console.log('logout', apiResponse);
      if (apiResponse.status) {
        sessionStorage.removeItem("_token")
        sessionStorage.removeItem("_admin")

        this.$router.push({
          name: 'AdminLogin' // check name
        });
        
        // window.location = "/"
      }
      // this.galleries = apiResponse.data

    }
  },
};
</script>

<style>
.haeding{
  font-family:red serif;
  font-weight:500;
  font-size: larger;
  
  forced-color-adjust:auto;
  color: #0c241ace;;
}
.btn-content {
  display: inline-block;
}
</style>

<style scoped lang="scss">
header {
  display: flex;
  height: 65px;
  background-color: #fff;
  box-shadow: 0 0 10px #d9d9d9;
  background-color: #3782e4;


  .logo {
    display: flex;
    width: 260px;
    padding: 10px 15px;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    border-right: 0px solid #d9d9d9;
    background-color: #3782e4;
    color: #fff;

    img {
      width: 45px;
      height: 45px;
      object-fit: contain;
      margin-right: 10px;
      border-radius: 50%;
      background-color: #fff;
      padding: 2px;
    }
  }

  .main-header {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
}   
</style>