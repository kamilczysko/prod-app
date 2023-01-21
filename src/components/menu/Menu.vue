<script>
import MenuItem from './MenuItem.vue'
import data from '../../assets/MenuData.js'

export default {
    name: "Menu",
    components: {
        MenuItem
    },
    data(){
        return {
            menuItemId: null,
            menuData: data
        }
    },
    methods: {
        menuClick(label) {
            this.menuItemId = label;
        },
        isMenuItemActive(id) {
            return this.menuItemId == id;
        }
    }
}
</script>

<template>
    <div class="sidemenu">
              <div class="logo">
                  <img src="@/assets/icons/manufacturing.svg">
                  <h2>Your production</h2>
              </div>
              <div class="items">
                <MenuItem v-for="item in menuData" :key="item.id" :id="item.id" :label="item.label" :link="item.link" :icon="item.icon" :subitems="item.subitems"></MenuItem>
              </div>
          </div>
  </template>

<style>
    .sidemenu {
        width: 100%;
        background-color: #ECECEC;
        height: 100vh;
        border-top-right-radius: 5px;
    }

    .sidemenu .logo{
        padding-top: 1vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: .5vh;
        height: 8vh;
        border-bottom: 1px solid black;
    }

    .sidemenu .logo h2 {
        font-size: 1vw;
        font-weight: 100;
        margin-left: .5vw;
        font-weight: 300;
        color: black;
    }

    .sidemenu .logo img {
        width: 2vw;
        height: auto;
        filter: invert(0%) sepia(1%) saturate(7491%) hue-rotate(36deg) brightness(111%) contrast(98%);
            }
</style>