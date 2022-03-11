<template>
  <section class="table container ">
    <h2 class="table__title mb-05 fz-40">Join us</h2>
    <p class="table__subtitle fz-16 o-05 mb-3">
      We are looking for people who love what they do
    </p>
    <table class="bg-main-gray mb-15">
      <thead>
        <tr>
          <th>Position</th>
          <th>Job type</th>
          <th>Work days</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Middle Front end developer</td>
          <td>Full time</td>
          <td>5/7 day</td>
          <td>
            <router-link to="/vacancy-info" class="button-table"
              >View more</router-link
            >
          </td>
        </tr>
        <tr>
          <td>Middle Front end developer</td>
          <td>Full time</td>
          <td>5/7 day</td>
          <td>
            <router-link to="/vacancy-info" class="button-table"
              >View more</router-link
            >
          </td>
        </tr>
        <tr>
          <td>Middle Front end developer</td>
          <td>Full time</td>
          <td>5/7 day</td>
          <td>
            <router-link to="/vacancy-info" class="button-table"
              >View more</router-link
            >
          </td>
        </tr>
        <tr>
          <td>Middle Front end developer</td>
          <td>Full time</td>
          <td>5/7 day</td>
          <td>
            <router-link to="/vacancy-info" class="button-table"
              >View more</router-link
            >
          </td>
        </tr>
        <tr>
          <td>Middle Front end developer</td>
          <td>Full time</td>
          <td>5/7 day</td>
          <td>
            <router-link to="/vacancy-info" class="button-table"
              >View more</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mobile-table mt-2 mb-10">
      <div class="mobile-table__row flex mb-2">
        <div class="mobile-table__params pr-2">
          <span class="block fz-24 fw-400 mb-1">Position</span>
          <span class="block fz-24 fw-400 mb-1">Job type</span>
          <span class="block fz-24 fw-400 mb-1">Work days</span>
        </div>
        <div class="mobile-table__types">
          <span class="block fz-24 fw-500 mb-1">Middle Back end developer</span>
          <span class="block fz-24 fw-500 mb-1">Full time</span>
          <span class="block fz-24 fw-500 mb-1">5/7 day</span>
        </div>
        <router-link to="/vacancy-info">
          <RightArrow />
        </router-link>
      </div>
      <div class="mobile-table__row flex mb-2">
        <div class="mobile-table__params pr-2">
          <span class="block fz-24 fw-400 mb-1">Position</span>
          <span class="block fz-24 fw-400 mb-1">Job type</span>
          <span class="block fz-24 fw-400 mb-1">Work days</span>
        </div>
        <div class="mobile-table__types">
          <span class="block fz-24 fw-500 mb-1">Middle Back end developer</span>
          <span class="block fz-24 fw-500 mb-1">Full time</span>
          <span class="block fz-24 fw-500 mb-1">5/7 day</span>
        </div>
        <router-link to="/vacancy-info">
          <RightArrow />
        </router-link>
      </div>
      <div class="mobile-table__row flex mb-2">
        <div class="mobile-table__params pr-2">
          <span class="block fz-24 fw-400 mb-1">Position</span>
          <span class="block fz-24 fw-400 mb-1">Job type</span>
          <span class="block fz-24 fw-400 mb-1">Work days</span>
        </div>
        <div class="mobile-table__types">
          <span class="block fz-24 fw-500 mb-1">Middle Back end developer</span>
          <span class="block fz-24 fw-500 mb-1">Full time</span>
          <span class="block fz-24 fw-500 mb-1">5/7 day</span>
        </div>
        <router-link to="/vacancy-info">
          <RightArrow />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import RightArrow from "../../svgs/RightArrow.vue";
export default {
  components: {
    RightArrow,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/_variables.scss";
.table {
  &__subtitle {
    @media screen and(max-width: 576px) {
      display: none;
    }
  }
}
table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 15px;
  border-style: hidden;
  overflow: hidden;
  @media screen and(max-width: 700px) {
    display: none;
  }
  thead {
    th {
      height: 7px;
      padding-top: 17px;
      padding-bottom: 16px;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      &:nth-child(1) {
        width: 60px;
        padding-left: 120px;
        text-align: left;
      }
    }
    tr {
      &:hover {
        background-color: $main_white;
        color: $main_black;
      }
    }
  }

  tbody {
    padding-bottom: 30px;
    td {
      height: 70px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.5;
      text-align: center;
      &:nth-child(1) {
        width: 190px;
        padding-left: 120px;
        text-align: left;
        @media screen and(max-width: 1720px) {
          padding-left: 90px;
        }
        @media screen and(max-width: 1080px) {
          padding-left: 40px;
        }
        @media screen and(max-width: 768px) {
          padding-left: 10px;
        }
        @media screen and(max-width: 576px) {
          padding-left: 5px;
        }
      }
    }
    tr {
      &:hover {
        background-color: $main_white;
        color: $main_black;
      }
      &:hover .button-table {
        border: 1px solid $main_blue;
        color: $main_blue;
      }
    }
  }
}
.mobile-table {
  display: none;
  @media screen and(max-width: 700px) {
    display: block;
  }
  &__row {
    border-bottom: 1px solid $main_white;
    position: relative;
    svg {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
