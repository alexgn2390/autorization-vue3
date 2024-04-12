<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />

</template>

<script>


import HeaderComponent from "@/components/layout/Header";
import FooterComponent from "@/components/layout/Footer";



export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
  }
}
</script>

<style>
@import "./assets/styles/style.css";
</style>
