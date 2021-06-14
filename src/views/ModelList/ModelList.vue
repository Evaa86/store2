<template>
  <el-row justify="center" type="flex" style="margin-bottom: 30px">
    <el-col style="width: fit-content; max-width: 800px">
      <p class="list-title">Выберите модель вашего устройства</p>
      <el-button v-for="model in models[category]" :key="model.id" class="model-item" @click="push(model.id)">
        {{ model.title }}
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
import routes from '@/constants/routes'
import { mapState } from 'vuex'

export default {
  name: 'ModelList',
  props: {
    category: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    ...mapState({
      models: state => state.data.models
    })
  },
  methods: {
    push(id) {
      return this.$router.push({
        name: routes.HOME,
        params: { category: this.$route.params.category, model: id }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/element";

.list-title {
  color: $--color-text-primary;
  text-align: center;
}

.model-item {
  margin: 3px !important;
}
</style>
