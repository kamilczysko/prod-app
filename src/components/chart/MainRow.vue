<template>
        <ul>
            <RowHead title="Milling station #1" @changeVisibility="changeVisibility" class="title"/> 
            <DataRow title="Mill 1#" icon="machine.svg" v-if="isActive"/> 
            <DataRow title="Mill 2#" icon="machine.svg" v-if="isActive"/> 
            <DataRow title="Mill 3#" icon="machine.svg" v-if="isActive"/> 
            <DataRow title="Mill 4#" icon="machine.svg" v-if="isActive"/> 
            
        </ul>
</template>

<script>
import DataRow from './DataRow.vue'
import RowHead from "./RowHead.vue"
export default {
    name: "MainRow",
    components: {
        DataRow,
        RowHead
    },
    data() {
        return {
            isActive: true
        }
    },  
    methods: {
        changeVisibility() {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style scoped>
ul {
    /* width: 0px; */
    padding: 0;
    /* position: relative; */
    width: 100%;
    border-bottom: 2px solid rgb(124, 124, 124);
    /* overflow:hidden; */
    z-index: 0;
}
</style>