<template>
  <div>
    <div>
      <el-row
        type="flex"
        justify="center"
        class="cards-row"
      >
        <el-col v-for="item in categories" :key="item.name" :span="5" class="cards-item-wrapper">
          <Card :title="item.title" :name="item.name" :src="item.src" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Card from '@/views/ItemsList/components/Card'
import { mapState } from 'vuex'
export default {
  name: 'ItemsList',
  components: { Card },
  computed: {
    ...mapState({
      categories: state => state.data.categories
    })
  }
}
</script>

<style scoped>
.cards-row {
  min-width: 1080px;
  margin-bottom: 20px;
}

.cards-item-wrapper {
  width: 200px;
  height: 150px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
