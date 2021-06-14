<template>
  <div class="home">
    <ItemsList />
    <ModelList v-if="category" :category="category" />
    <PriceTable v-if="model !== ''" :model="model" />
  </div>
</template>

<script>
import ItemsList from '@/views/ItemsList/ItemsList'
import PriceTable from '@/views/PriceTable/PriceTable'
import ModelList from '@/views/ModelList/ModelList'
export default {
  name: 'Home',
  components: { ModelList, PriceTable, ItemsList },
  props: {
    category: {
      type: String,
      default() {
        return ''
      }
    },
    model: {
      type: [String, Number],
      default() {
        return ''
      }
    }
  },
  data: function() {
    return {
      items: [
        {
          name: 'iphone',
          title: 'IPhone',
          src: require('@/assets/png/023-ipad.png')
        },
        {
          name: 'ipad',
          title: 'IPad',
          src: require('@/assets/png/022-ipad.png')
        },
        {
          name: 'mac',
          title: 'Mac',
          src: require('@/assets/png/040-macbook.png')
        },
        {
          name: 'watch',
          title: 'AppleWatch',
          src: require('@/assets/png/013-smartwatch.png')
        },
        {
          name: 'any',
          title: 'Другие устройства',
          src: require('@/assets/png/045-novation cat.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  margin-top: 20px;
}

</style>
