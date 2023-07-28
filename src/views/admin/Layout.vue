<template>
  <div id="wrapper">
    <admin-header />
    <section class="admin-section">
      <admin-sidebar />
      <main>
        <router-view />
      </main>
    </section>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "AdminLayout",
  components: {
    AdminHeader: Header,
    AdminSidebar: Sidebar,
  },
};
</script>

<style scoped lang="scss">
#wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fafbfe;
  .admin-section {
    display:flex;
    flex-grow: 1;
    height: calc(100% - 65px);
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: large;

    main {
      flex-grow: 1;
      padding: 30px 15px;
      overflow: auto;
    }
  }
}
</style>
