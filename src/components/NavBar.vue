<template>
  <nav class="navbar">
    <h1 class="logo">TP VueJs</h1>

    <div class="links">
      <router-link to="/">Accueil</router-link>
      <router-link to="/multiple-task">Tâches</router-link>
      <router-link to="/about">À propos</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #222;
  color: white;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.links {
  display: flex;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
}

a.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style>
