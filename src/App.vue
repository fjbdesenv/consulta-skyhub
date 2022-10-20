<template>
  <nav>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/sobre">Sobre</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
  @import '@/assets/sass/bootstrap.scss';
</style>
