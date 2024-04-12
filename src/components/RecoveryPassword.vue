<template>

  <section class="section">
    <div class="section-wrapper">
      <h1 class="section-title">Восстановление пароля</h1>
      <p class="section-description">Для восстановления пароля укажите свою почту, чтобы мы выслали вам код подтверждения</p>

      <form class="form">
        <input class="form-input" type="text" ref="full_name" placeholder="Номер телефона"/>

        <div class="buttons">
          <button class="button">Авторизоваться</button>
        </div>
      </form>

    </div>
  </section>

</template>

<script>

export default {
  name: "RecoveryPassword",
  components: {}
}
</script>

<style scoped>

</style>
