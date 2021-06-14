<template>
  <el-button class="card" @click="push">
    <div>
      <el-col class="header-logo">
        <img alt="Vue logo" :src="src" height="75">
      </el-col>
    </div>
    {{ title }}
  </el-button>
</template>

<script>
import routes from '@/constants/routes'
export default {
  name: 'Card',
  props: {
    name: {
      type: String,
      default() {
        return ''
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    },
    src: {
      type: String,
      default() {
        return ''
      }
    }
  },
  methods: {
    push() {
      return this.$router.push({
        name: routes.HOME,
        params: { category: this.name }
      })
    }

  }
}
</script>

<style scoped>

.card {
  padding: 20px;
  font-size: 15px;
  width: 100%;
  white-space: normal;
  height: 100%;
}
</style>
