<template>
  <section class="team container">
    <h3 class="team__title mb-5 fz-40">Our team members</h3>
    <ul class="team__members flex justify-between flex-wrap">
      <li class="mb-8">
        <img
          width="210"
          src="../../../assets/images/icons/team_member.png"
          alt=""
          class="block mb-2"
        />
        <span class="team__member block fz-24 mb-05">John Doe</span>
        <span class="team__member__position block fz-14"
          >CEO and Co-Founder</span
        >
      </li>
      <li class="mb-8">
        <img
          width="210"
          src="../../../assets/images/icons/team_member.png"
          alt=""
          class="block mb-2"
        />
        <span class="team__member block fz-24 mb-05">John Doe</span>
        <span class="team__member__position block fz-14"
          >CEO and Co-Founder</span
        >
      </li>
      <li class="mb-8">
        <img
          width="210"
          src="../../../assets/images/icons/team_member.png"
          alt=""
          class="block mb-2"
        />
        <span class="team__member block fz-24 mb-05">John Doe</span>
        <span class="team__member__position block fz-14"
          >CEO and Co-Founder</span
        >
      </li>
      <li class="mb-8">
        <img
          width="210"
          src="../../../assets/images/icons/team_member.png"
          alt=""
          class="block mb-2"
        />
        <span class="team__member block fz-24 mb-05">John Doe</span>
        <span class="team__member__position block fz-14"
          >CEO and Co-Founder</span
        >
      </li>
      <li class="mb-8">
        <img
          width="210"
          src="../../../assets/images/icons/team_member.png"
          alt=""
          class="block mb-2"
        />
        <span class="team__member block fz-24 mb-05">John Doe</span>
        <span class="team__member__position block fz-14"
          >CEO and Co-Founder</span
        >
      </li>
      <li class="mb-8">
        <img
          width="210"
          src="../../../assets/images/icons/team_member.png"
          alt=""
          class="block mb-2"
        />
        <span class="team__member block fz-24 mb-05">John Doe</span>
        <span class="team__member__position block fz-14"
          >CEO and Co-Founder</span
        >
      </li>
      <li class="mb-8">
        <img
          width="210"
          src="../../../assets/images/icons/team_member.png"
          alt=""
          class="block mb-2"
        />
        <span class="team__member block fz-24 mb-05">John Doe</span>
        <span class="team__member__position block fz-14"
          >CEO and Co-Founder</span
        >
      </li>
      <li class="mb-8">
        <img
          width="210"
          src="../../../assets/images/icons/team_member.png"
          alt=""
          class="block mb-2"
        />
        <span class="team__member block fz-24 mb-05">John Doe</span>
        <span class="team__member__position block fz-14"
          >CEO and Co-Founder</span
        >
      </li>
      <li class="mb-8">
        <img
          width="210"
          src="../../../assets/images/icons/team_member.png"
          alt=""
          class="block mb-2"
        />
        <span class="team__member block fz-24 mb-05">John Doe</span>
        <span class="team__member__position block fz-14"
          >CEO and Co-Founder</span
        >
      </li>
      <li class="mb-8">
        <img
          width="210"
          src="../../../assets/images/icons/team_member.png"
          alt=""
          class="block mb-2"
        />
        <span class="team__member block fz-24 mb-05">John Doe</span>
        <span class="team__member__position block fz-14"
          >CEO and Co-Founder</span
        >
      </li>
      <li class="mb-8">
        <img
          width="210"
          src="../../../assets/images/icons/team_member.png"
          alt=""
          class="block mb-2"
        />
        <span class="team__member block fz-24 mb-05">John Doe</span>
        <span class="team__member__position block fz-14"
          >CEO and Co-Founder</span
        >
      </li>
      <li class="mb-8">
        <img
          width="210"
          src="../../../assets/images/icons/team_member.png"
          alt=""
          class="block mb-2"
        />
        <span class="team__member block fz-24 mb-05">John Doe</span>
        <span class="team__member__position block fz-14"
          >CEO and Co-Founder</span
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.team {
  &__members {
    @media screen and(max-width: 700px) {
      width: 100%;
      overflow-x: scroll;
      flex-wrap: nowrap;
      ::-webkit-scrollbar {
        width: 1px !important;
        height: 1px !important;
      }

      li {
        margin-right: 10px;
      }
    }
      
      ::-webkit-scrollbar-track {
        background: black;
      }

      ::-webkit-scrollbar-thumb {
        background: blue;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
  }
}
</style>
