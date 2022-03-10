<template>
  <div class="vacancies pt-15">
      <Table/>
      <WhoWeAre/>
      <Team/>
  </div>
</template>

<script>
import Table from "./table/Table.vue";
import WhoWeAre from "./whoWeAre/WhoWeAre.vue";
import Team from "./team/Team.vue";
export default {
name: 'Vacancies',
components: {
    Table,
    WhoWeAre,
    Team
},
}
</script>
<style lang="scss" scoped>

</style>