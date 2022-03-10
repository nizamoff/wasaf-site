<template>
  <div class="vacancy-info container pt-15">
    <div class="demo-collapse mb-5">
      <h2 class="mb-1">Join us as UX designer</h2>
      <p class="mb-5 w-25">
        Do you want to rise with us? Let’s prove we need you! Be an integral
        part of the team.
      </p>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item
          title="How much does it cost to make an App?"
          name="1"
        >
          <div>
            Consistent with real life: in line with the process and logic of
            real life, and comply with languages and habits that the users are
            used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such
            as: design style, icons and texts, position of elements, etc.
          </div>
        </el-collapse-item>
        <el-collapse-item title="What is MVP?" name="2">
          <div>
            Operation feedback: enable the users to clearly perceive their
            operations by style updates and interactive effects;
          </div>
          <div>
            Visual feedback: reflect current state by updating or rearranging
            elements of the page.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Efficiency" name="3">
          <div>
            Simplify the process: keep operating process simple and intuitive;
          </div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the
            users can quickly understand and make decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which
            helps the users to identify and frees them from memorizing and
            recalling.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Controllability" name="4">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to
            operate, including canceling, aborting or terminating current
            operation.
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="vacancy-info__form mb-15 flex br-8 o-hidden">
      <div
        class="vacancy-info__form__left w--50 flex justify-center align-center"
      >
        <img
          src="../../assets/images/icons/illustration.svg"
          alt="illustration"
        />
      </div>
      <div class="vacancy-info__form__right p-10 w--50 bs">
        <h3 class="mb-5 fz-32">Apply by filling the form</h3>
        <form>
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
          <label class="label" for="email">
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
          <button class="button">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";
.vacancy-info {
  &__form {
    background-color: $main_gray;
  }
  &__form__left {
    background: rgba(255, 255, 255, 0.1);
  }
}
</style>
