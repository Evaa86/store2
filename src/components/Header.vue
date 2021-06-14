<template>
  <div class="header-wrapper">
    <el-row class="nav" type="flex" justify="space-around">
      <el-col class="nav-item" :span="6">
        <el-button size="mini" type="text">Главная</el-button>
      </el-col>

      <el-col class="nav-item" :span="6">
        <el-button size="mini" type="text">Оставить заявку</el-button>
      </el-col>

      <el-col class="nav-item" :span="6">
        <el-button size="mini" type="text">О нас</el-button>
      </el-col>

      <el-col class="nav-item" :span="6">
        <el-button size="mini" type="text">Контанты</el-button>
      </el-col>

      <el-col class="nav-item" style="text-align: right">
        <el-button size="mini" type="text">
          <svg
            id="icon-instagram"
            width="18"
            height="18"
            fill="#fff"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            style="vertical-align: middle; margin-right: 3px"
          >
            <title>Shape</title>
            <path
              d="M11 21.89H2.596c-.697 0-1.282-.254-1.773-.745-.49-.49-.728-1.092-.728-1.788V2.597c0-.698.253-1.3.744-1.79A2.49 2.49 0 0 1 2.405.08c.08 0 .142-.017.22-.017h16.747c.712 0 1.313.254 1.804.744.475.49.728 1.076.728 1.757v16.793c0 1.22-.886 2.263-2.09 2.47-.142.03-.284.03-.427.03-2.8.032-5.602.032-8.388.032zM4.495 9.32h-1.9v9.243c.017.35.19.618.507.76.127.063.253.063.396.063H18.55a.886.886 0 0 0 .65-.316.878.878 0 0 0 .188-.554v-9.18h-1.9a6.57 6.57 0 0 1-.205 4.02c-.49 1.314-1.33 2.374-2.484 3.182a6.718 6.718 0 0 1-7.36.174c-1.14-.713-1.995-1.662-2.55-2.88-.648-1.473-.775-2.976-.395-4.512zM11 15.178c2.31 0 4.194-1.867 4.194-4.178A4.194 4.194 0 0 0 11 6.79c-2.342 0-4.194 1.915-4.194 4.194A4.18 4.18 0 0 0 11 15.178zm6.283-8.388h1.267a.825.825 0 0 0 .838-.84v-2.5c0-.047 0-.095-.015-.142a.823.823 0 0 0-.84-.696H16.05a.832.832 0 0 0-.856.854V5.95c0 .492.396.872.855.856.41-.016.822-.016 1.233-.016z"
            />
          </svg>
          Instagram
        </el-button>
      </el-col>
    </el-row>
    <el-row type="flex" class="header" justify="space-between">
      <el-col class="header-logo">
        <img
          alt="Vue logo"
          src="../assets/logo.png"
          style="cursor:pointer;"
          height="75"
          @click="toHome"
        >
      </el-col>

      <el-col class="header-place">
        <div class="header-place-title">
          Сервисный центр по ремонту техники
        </div>
        <div class="header-place-item">
          <i class="el-icon-place" style="float: left" />

          <div style="height: 80px; float: right">
            <el-button type="text" class="header-place-item-title">
              ТЦ "Небо"
              <p class="header-place-item-subtitle">
                ул. Мира 55
              </p>
            </el-button>

          </div>
        </div>
      </el-col>

      <el-col class="header-contact">
        <div>
          <p class="header-contact-phone">
            <a href="tel:79044526201">
              <i class="el-icon-phone" />
              +7(995) 795-96-97
            </a>
          </p>
          <p class="header-contact-subtitle">
            Пн-Пт с 10:00 до 22:00
          </p>
          <p class="header-contact-subtitle">
            Сб-Вс с 11:00 до 20:00
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import routes from '@/constants/routes'
export default {
  name: 'Header',
  methods: {
    toHome() {
      return this.$router.push({
        name: routes.HOME
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/element";

$--header-height: 130px;

.header-wrapper {
  background-color: $--color-primary-dark;
}

.nav {
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 20px;
}

.nav-item {
  text-align: center;
  padding-right: 30px;
  color: #fff;
  font-weight: 500;
}

.header {
  width: 100%;
  height: $--header-height;
  background-color: $--color-primary-dark;
}

.header-logo {
  box-sizing: border-box;
  height: $--header-height;
  width: 25%;
  line-height: 100px;
  padding-top: calc((#{$--header-height} - 100px) / 2);
  text-align: center;
}

.header-place {
  height: $--header-height;
  width: 55%;
  font-size: 15px;
}

.header-place-title {
  letter-spacing: 0.05em;
  text-transform: uppercase;
  height: $--header-height;
  width: 200px;
  box-sizing: border-box;
  padding-top: calc((#{$--header-height} - 50px) / 2);
  justify-content: left;
  color: $--color-text-placeholder;
  display: flex;
  float: left;
}

.header-place-item {
  height: $--header-height;
  width: 200px;
  box-sizing: border-box;
  padding-top: calc((#{$--header-height} - 80px) / 2);
  justify-content: left;
  display: flex;
  float: right;
}

.header-place-item i {
  height: 80px;
  margin-right: 10px;
  line-height: 65px;
  font-size: 40px;
  color: $--color-danger;
}

.header-place-item-title {
  margin-bottom: 0;
  color: white;
}

.header-place-item-subtitle {
  margin-top: 5px;
  color: $--color-text-secondary;
  font-size: 13px;
  margin-bottom: 0;
}

.header-contact {
  height: $--header-height;
  width: 20%;
  min-width: 210px;
  padding-top: calc((#{$--header-height} - 100px) / 2);
  margin-right: 50px;
  margin-left: 0;
}

.header-contact-phone {
  text-align: right;
  color: white;
  letter-spacing: 0.1em;
  font-size: 16px;
  margin-bottom: 5px;
}

.header-contact-phone a {
  text-decoration: none;
  color: white;
}

.header-contact-subtitle {
  margin-top: 0;
  text-align: right;
  margin-bottom: 3px;
  font-size: 12px;
  color: $--color-text-secondary;
}
</style>
