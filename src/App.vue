<script>
import Menu from "@/components/menu/Menu.vue";
export default {

    components: {
        Menu
    }
}
</script>

<template>
    <div class="content">
        <Menu></Menu>
        <router-view />
    </div>  
</template>

<style>
    .content {
        display: grid;
        grid-template-columns: 2fr 8fr;
        background: white;
    }
</style>