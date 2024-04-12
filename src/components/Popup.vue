<template>
  <div class="popup" v-if="isVisible">

    <div class="popup-content">
      <div class="popup-text">Вы авторизовались</div>
      <button class="button" @click="closePopup">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",
  props: {
    isVisible: Boolean,
  },

  methods: {
    closePopup() {
      this.$emit('close');
    },
  },
}
</script>

<style scoped>
.popup {

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.6);
}

.popup-content {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FBFBFB;
  width: 50%;
  height: 300px;
  padding: 30px;
  border-radius: 5px;
}

.popup-text {
  text-align: center;
  font-family: GilroyBold, sans-serif;
  font-size: 24px;
}
</style>
