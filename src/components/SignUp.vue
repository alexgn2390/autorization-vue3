<template>

  <section class="section">
    <div class="section-wrapper">
      <h1 class="section-title">Регистрация</h1>
      <p class="section-description">Для регистрации укажите свой номер телефона и придумайте пароль</p>

      <div class="error-field" v-if="showError">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M20.0006 27.8525C20.382 27.8525 20.7017 27.7235 20.9597 27.4655C21.2177 27.2075 21.3467 26.8878 21.3467 26.5064C21.3467 26.125 21.2177 25.8053 20.9597 25.5473C20.7017 25.2893 20.382 25.1603 20.0006 25.1603C19.6192 25.1603 19.2995 25.2893 19.0415 25.5473C18.7835 25.8053 18.6545 26.125 18.6545 26.5064C18.6545 26.8878 18.7835 27.2075 19.0415 27.4655C19.2995 27.7235 19.6192 27.8525 20.0006 27.8525ZM20.0012 22.0513C20.3555 22.0513 20.6523 21.9315 20.8916 21.692C21.1309 21.4524 21.2506 21.1555 21.2506 20.8013V13.2372C21.2506 12.883 21.1307 12.5861 20.8911 12.3466C20.6514 12.107 20.3544 11.9872 20.0001 11.9872C19.6457 11.9872 19.3489 12.107 19.1096 12.3466C18.8703 12.5861 18.7507 12.883 18.7507 13.2372V20.8013C18.7507 21.1555 18.8705 21.4524 19.1102 21.692C19.3498 21.9315 19.6468 22.0513 20.0012 22.0513ZM15.35 34.1666C14.9435 34.1666 14.5561 34.0886 14.1878 33.9326C13.8194 33.7767 13.4985 33.5619 13.225 33.2884L6.71219 26.7756C6.43869 26.5021 6.22396 26.1812 6.06798 25.8128C5.91198 25.4445 5.83398 25.0571 5.83398 24.6506V15.3494C5.83398 14.9429 5.91198 14.5555 6.06798 14.1872C6.22396 13.8188 6.43869 13.4979 6.71219 13.2244L13.225 6.71158C13.4985 6.43808 13.8194 6.22335 14.1878 6.06738C14.5561 5.91138 14.9435 5.83337 15.35 5.83337H24.6512C25.0577 5.83337 25.4451 5.91138 25.8134 6.06738C26.1818 6.22335 26.5027 6.43808 26.7762 6.71158L33.289 13.2244C33.5625 13.4979 33.7773 13.8188 33.9332 14.1872C34.0892 14.5555 34.1672 14.9429 34.1672 15.3494V24.6506C34.1672 25.0571 34.0892 25.4445 33.9332 25.8128C33.7773 26.1812 33.5625 26.5021 33.289 26.7756L26.7762 33.2884C26.5027 33.5619 26.1818 33.7767 25.8134 33.9326C25.4451 34.0886 25.0577 34.1666 24.6512 34.1666H15.35ZM15.1673 31.6667H24.8339L31.6673 24.8333V15.1667L24.8339 8.33333H15.1673L8.33394 15.1667V24.8333L15.1673 31.6667Z"
              fill="#FE7A36"/>
        </svg>
        <span>Некоторые поля не заполнены или заполнены не правильно</span>
      </div>

      <form class="form">
        <input class="form-input" v-model="phoneNumber" type="text" :class="{ 'error': !isPhoneNumberValid }"
               placeholder="Номер телефона"/>

        <div class="input-block">
        <input class="form-input " v-model="password" :class="{ 'error': !isPasswordValid }" :type="inputType"
               placeholder="Пароль"/>
        <span @click="toggleShowPassword" class="form-input-icon">
        <svg width="16"
             height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M8.00206 10.8846C8.75745 10.8846 9.39903 10.6202 9.92681 10.0914C10.4546 9.56263 10.7185 8.92053 10.7185 8.16513C10.7185 7.40974 10.4541 6.76816 9.92531 6.24038C9.39652 5.71261 8.75443 5.44872 7.99903 5.44872C7.24364 5.44872 6.60205 5.71311 6.07428 6.24188C5.5465 6.77067 5.28261 7.41277 5.28261 8.16817C5.28261 8.92356 5.547 9.56514 6.07578 10.0929C6.60456 10.6207 7.24666 10.8846 8.00206 10.8846ZM8.00054 9.96665C7.50054 9.96665 7.07554 9.79165 6.72554 9.44165C6.37554 9.09165 6.20054 8.66665 6.20054 8.16665C6.20054 7.66665 6.37554 7.24165 6.72554 6.89165C7.07554 6.54165 7.50054 6.36665 8.00054 6.36665C8.50054 6.36665 8.92554 6.54165 9.27554 6.89165C9.62554 7.24165 9.80054 7.66665 9.80054 8.16665C9.80054 8.66665 9.62554 9.09165 9.27554 9.44165C8.92554 9.79165 8.50054 9.96665 8.00054 9.96665ZM8.00054 12.8333C6.59713 12.8333 5.31359 12.4589 4.14993 11.7102C2.98625 10.9615 2.0574 9.97647 1.36339 8.7551C1.30784 8.65938 1.26724 8.56291 1.24159 8.46568C1.21595 8.36845 1.20312 8.26866 1.20312 8.16632C1.20312 8.06397 1.21595 7.9643 1.24159 7.8673C1.26724 7.77029 1.30784 7.67392 1.36339 7.5782C2.0574 6.35683 2.98625 5.37179 4.14993 4.62308C5.31359 3.87436 6.59713 3.5 8.00054 3.5C9.40395 3.5 10.6875 3.87436 11.8512 4.62308C13.0148 5.37179 13.9437 6.35683 14.6377 7.5782C14.6932 7.67392 14.7338 7.77039 14.7595 7.86762C14.7851 7.96485 14.798 8.06464 14.798 8.16698C14.798 8.26933 14.7851 8.369 14.7595 8.466C14.7338 8.56301 14.6932 8.65938 14.6377 8.7551C13.9437 9.97647 13.0148 10.9615 11.8512 11.7102C10.6875 12.4589 9.40395 12.8333 8.00054 12.8333ZM8.00054 11.8333C9.2561 11.8333 10.4089 11.5028 11.4589 10.8417C12.5089 10.1805 13.3117 9.28887 13.8672 8.16665C13.3117 7.04443 12.5089 6.15276 11.4589 5.49165C10.4089 4.83054 9.2561 4.49998 8.00054 4.49998C6.74499 4.49998 5.59221 4.83054 4.54221 5.49165C3.49221 6.15276 2.68943 7.04443 2.13388 8.16665C2.68943 9.28887 3.49221 10.1805 4.54221 10.8417C5.59221 11.5028 6.74499 11.8333 8.00054 11.8333Z"
              fill="#9D9D9D"/>
        </svg>
          <div v-if="!showPassword" class="form-input-rectangle"></div>
        </span>
        </div>

        <p class="form-repeat-password">повторите пароль</p>

        <div class="input-block">
          <input class="form-input " v-model="passwordRepeat" :class="{ 'error': !isPasswordRepeatValid }"
                 :type="inputTypeRepeat" placeholder="Пароль" autocomplete="on"/>
          <span @click="toggleShowPasswordRepeat" class="form-input-icon-repeat">
        <svg width="16"
             height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M8.00206 10.8846C8.75745 10.8846 9.39903 10.6202 9.92681 10.0914C10.4546 9.56263 10.7185 8.92053 10.7185 8.16513C10.7185 7.40974 10.4541 6.76816 9.92531 6.24038C9.39652 5.71261 8.75443 5.44872 7.99903 5.44872C7.24364 5.44872 6.60205 5.71311 6.07428 6.24188C5.5465 6.77067 5.28261 7.41277 5.28261 8.16817C5.28261 8.92356 5.547 9.56514 6.07578 10.0929C6.60456 10.6207 7.24666 10.8846 8.00206 10.8846ZM8.00054 9.96665C7.50054 9.96665 7.07554 9.79165 6.72554 9.44165C6.37554 9.09165 6.20054 8.66665 6.20054 8.16665C6.20054 7.66665 6.37554 7.24165 6.72554 6.89165C7.07554 6.54165 7.50054 6.36665 8.00054 6.36665C8.50054 6.36665 8.92554 6.54165 9.27554 6.89165C9.62554 7.24165 9.80054 7.66665 9.80054 8.16665C9.80054 8.66665 9.62554 9.09165 9.27554 9.44165C8.92554 9.79165 8.50054 9.96665 8.00054 9.96665ZM8.00054 12.8333C6.59713 12.8333 5.31359 12.4589 4.14993 11.7102C2.98625 10.9615 2.0574 9.97647 1.36339 8.7551C1.30784 8.65938 1.26724 8.56291 1.24159 8.46568C1.21595 8.36845 1.20312 8.26866 1.20312 8.16632C1.20312 8.06397 1.21595 7.9643 1.24159 7.8673C1.26724 7.77029 1.30784 7.67392 1.36339 7.5782C2.0574 6.35683 2.98625 5.37179 4.14993 4.62308C5.31359 3.87436 6.59713 3.5 8.00054 3.5C9.40395 3.5 10.6875 3.87436 11.8512 4.62308C13.0148 5.37179 13.9437 6.35683 14.6377 7.5782C14.6932 7.67392 14.7338 7.77039 14.7595 7.86762C14.7851 7.96485 14.798 8.06464 14.798 8.16698C14.798 8.26933 14.7851 8.369 14.7595 8.466C14.7338 8.56301 14.6932 8.65938 14.6377 8.7551C13.9437 9.97647 13.0148 10.9615 11.8512 11.7102C10.6875 12.4589 9.40395 12.8333 8.00054 12.8333ZM8.00054 11.8333C9.2561 11.8333 10.4089 11.5028 11.4589 10.8417C12.5089 10.1805 13.3117 9.28887 13.8672 8.16665C13.3117 7.04443 12.5089 6.15276 11.4589 5.49165C10.4089 4.83054 9.2561 4.49998 8.00054 4.49998C6.74499 4.49998 5.59221 4.83054 4.54221 5.49165C3.49221 6.15276 2.68943 7.04443 2.13388 8.16665C2.68943 9.28887 3.49221 10.1805 4.54221 10.8417C5.59221 11.5028 6.74499 11.8333 8.00054 11.8333Z"
              fill="#9D9D9D"/>
        </svg>
          <div v-if="!showPasswordRepeat" class="form-input-rectangle-repeat"></div>
        </span>
        </div>

        <span v-if="errorPasswordRepeat" class="error-password-repeat">Пароли не сопадают</span>
        <div class="buttons">
          <button class="button" type="button" @click="submitForm()">Далее</button>
        </div>
      </form>
    </div>
  </section>


</template>

<script>


export default {
  name: 'SignUp',
  components: {},
  data() {
    return {
      phoneNumber: "",
      password: "",
      passwordRepeat: "",
      showPassword: false,
      showPasswordRepeat: false,
      showError: false,
      isPhoneNumberValid: true,
      isPasswordValid: true,
      isPasswordRepeatValid: true,
      errorPasswordRepeat: false
    };
  },
  computed: {
    inputType() {
      return this.showPassword ? "text" : "password";
    },
    inputTypeRepeat() {
      return this.showPasswordRepeat ? "text" : "password";
    }
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    toggleShowPasswordRepeat() {
      this.showPasswordRepeat = !this.showPasswordRepeat;
    },
    gotoPasswordWhatsapp() {
      this.isPhoneNumberValid = true;
      this.isPasswordValid = true;
      if (this.$router && this.$router.push) {
        this.$router.push('/password-whatsapp');
      }
    },
    submitForm() {

      this.showError = false;
      const phoneRegex = /^\+\d{11}$/;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;


      if ((!this.phoneNumber || !phoneRegex.test(this.phoneNumber)) ||
          (!this.password || !passwordRegex.test(this.password)) ) {
        this.showError = true;
        this.isPhoneNumberValid = this.phoneNumber || phoneRegex.test(this.phoneNumber);
        this.isPasswordValid = this.password || passwordRegex.test(this.password);
      } else {

        if (this.password !== this.passwordRepeat) {
          this.isPhoneNumberValid = true
          this.isPasswordValid = true
          this.errorPasswordRepeat = true
          this.isPasswordRepeatValid = this.passwordRepeat;
        } else {
          this.gotoPasswordWhatsapp()
          this.errorPasswordRepeat = false
        }
      }

    }
  },

  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.form {

}

.input-block {
  position: relative;
}

.form-input-icon {
  position: absolute;
  top: 43%;
  right: 5%;
  transform: translate(-50%, -50%);
  text-decoration: line-through;
  cursor: pointer;

}

.form-input-icon-repeat {
  position: absolute;
  top: 43%;
  right: 24px;
  transform: translateY(-50%);
  text-decoration: line-through;
  cursor: pointer;

}

.form-input-rectangle {
  position: absolute;
  top: 39%;
  right: 1px;
  transform: translateY(-50%) rotate(-45deg);
  width: 15px;
  height: 1px;
  background: #9D9D9D;
}

.form-input-rectangle-repeat {
  position: absolute;
  top: 39%;
  right: 1px;
  transform: translateY(-50%) rotate(-45deg);
  width: 15px;
  height: 1px;
  background: #9D9D9D;
}


.error-field {
  display: flex;
  align-items: center;
  margin-bottom: 44px;

}

.error-field svg {
  margin-right: 8px;
  width: 56px;
  height: 40px;
}

.error-field span {
  font-size: 14px;
  color: #FE7A36;
}

.error {
  border: 1px solid #FE7A36;
}

.error-password-repeat {
  font-size: 14px;
  color: #FE7A36;
}
</style>
