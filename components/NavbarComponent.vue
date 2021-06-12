<template>
  <div>
    <b-navbar
      toggleable="lg"
      style="background-color: rgb(64, 65, 90)"
      class="mb-0"
    >
      <b-container>
        <b-navbar-brand href="#" class="text-white ft-weight"
          >Shaikh Al Amin</b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav></b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" class="text-white text-uppercase"
              >Home</b-nav-item
            >
            <b-nav-item href="#" class="text-white text-uppercase"
              >About</b-nav-item
            >
            <b-nav-item href="#" class="text-white text-uppercase"
              >Skills</b-nav-item
            >
            <b-nav-item href="#" class="text-white text-uppercase"
              >Experience</b-nav-item
            >
            <b-nav-item href="#" class="text-white text-uppercase"
              >Portfolio</b-nav-item
            >
            <b-nav-item href="#" class="text-white text-uppercase"
              >Blog</b-nav-item
            >

            <li class="nav-item active">
              <a
                class="btn btn-sm btn-info btn-block text-white mt-1 ml-1"
                style="background-color: #17a2c2 !important"
                href="#"
                >CONTACT INFO</a
              >
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.ft-weight {
  font-weight: 700 !important;
}
.nav-link {
  color: aliceblue !important;
  font-size: 18px;
}
.nav-link:hover {
  border-bottom: 1px solid #17a2b8;
}
</style>
