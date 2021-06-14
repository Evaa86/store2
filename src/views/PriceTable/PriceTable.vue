<template>
  <el-row justify="center" type="flex" style="margin-bottom: 50px">
    <el-col style="width: 980px">
      <el-table
        stripe
        border
        :data="issues[model].slice(0,Math.round(issues[model].length/2))"
        :style="{
          width: issues[model].length > 5 ? '50%' : '100%'
        }"
        style="width: 50%; float: left"
        :show-header="false"
        @row-click="selectRow"
      >
        <el-table-column
          prop="title"
          :width="issues[model].length > 5 ? 350 : ''"
          label=""
        />
        <el-table-column
          prop="price"
          label=""
          align="right"
        />
      </el-table>
      <el-table
        v-if="issues[model].length > 5"
        stripe
        border
        :data="issues[model].slice(Math.round(issues[model].length/2))"
        style="width: 50%; float: left"
        :show-header="false"
        @row-click="selectRow"
      >
        <el-table-column
          prop="title"
          width="350"
          label=""
        />
        <el-table-column
          prop="price"
          label=""
        />
      </el-table>
    </el-col>
  </el-row>
</template>
<script>
import { diagnostics } from '@/api/api'
import { mapState } from 'vuex'

export default {
  name: 'PriceTable',
  props: {
    model: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    ...mapState({
      issues: state => state.data.issues,
      models: state => state.data.models
    })
  },
  methods: {
    selectRow(row) {
      this.$prompt('Пожалуйста оставьте свой номер для связи', 'Заявка', {
        confirmButtonText: 'Отправить',
        cancelButtonText: 'Отмена',
        inputPattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        inputErrorMessage: 'Введите корректный номер телефона'
      }).then((value) => {
        diagnostics({
          'phone': value.value,
          'other_issue': row.title,
          'other_device': this.models[this.$route.params.category][this.model].title
        })

        this.$message({
          type: 'success',
          message: 'Заявка успешно принята, ожидайте звонка менеджера'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
