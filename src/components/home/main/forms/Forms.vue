<template>
  <section class="form flex justify-between align-center container mb-15">
    <div class="form__left">
      <h3 class="form__title fw-500 fz-68 w-65 mb-3">
        Are you interested in our services?
      </h3>
      <p class="form__subtitle fz-40 w-65">
        Leave the introductory information and we will start cooperation.
      </p>
    </div>
    <div class="form__right pt-10 pb-10 pl-8 pr-8 bs br-8">
      <h4 class="form__wrap__title fz-32 fw-600 mb-5">
        Contact us by filling the form
      </h4>
      <form class="form">
        <label class="label" for="name">
          Full name
          <input
            required
            class="input"
            type="text"
            name="name"
            id="name"
            placeholder="Sardor Yigitaliyev Muhammadali o’g’li"
          />
        </label>
        <label class="label" for="email">
          Email address
          <input
            required
            class="input"
            type="email"
            name="email"
            id="email"
            placeholder="mysardorr@gmail.com"
          />
        </label>
        <label class="label" for="tel">
          Phone number
          <input
            required
            class="input"
            type="tel"
            name="tel"
            id="tel"
            placeholder="+998979725756"
          />
        </label>
        <label for="check">
          <input type="checkbox" name="check" id="check" />
          I want to protect my idea
        </label>
        <button class="button" type="submit">Send</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Forms",
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/_variables.scss";
.form {
  @media screen and(max-width: 1080px) {
    display: block;
  }
  &__title {
    @media screen and(max-width: 1720px) {
      width: 450px;
    }
    @media screen and(max-width: 1080px) {
      width: 100%;
      margin-bottom: 15px;
    }
    @media screen and(max-width: 576px) {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      font-size: 16px;
    }
  }
  &__subtitle {
    @media screen and(max-width: 1720px) {
      width: 450px;
    }
    @media screen and(max-width: 1080px) {
      width: 100%;
      margin-bottom: 20px;
    }
    @media screen and(max-width: 576px) {
      display: none;
    }
  }
  &__right {
    background-color: $main_gray;
    @media screen and(max-width: 1720px) {
      padding: 50px;
    }
    @media screen and(max-width: 1080px) {
      padding: 40px;
    }
    @media screen and(max-width: 576px) {
      padding: 30px 15px;
    }
  }
  &__wrap__title {
    @media screen and(max-width: 576px) {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
}
</style>
