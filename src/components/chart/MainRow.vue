<template>
        <ul>
            <div class="row-title" @click="toggle">
                <h2>Milling station #1</h2>
                <span>{{ sign }}</span>
            </div>  
            <div v-if="isOpen">
                <DataRow title="Mill 1#" icon="machine.svg" v-if="isActive"/> 
                <DataRow title="Mill 2#" icon="machine.svg" v-if="isActive"/> 
                <DataRow title="Mill 3#" icon="machine.svg" v-if="isActive"/> 
                <DataRow title="Mill 4#" icon="machine.svg" v-if="isActive"/> 
            </div>
            
        </ul>
</template>

<script>
import DataRow from './DataRow.vue'
export default {
    name: "MainRow",
    components: {
        DataRow,
    },
    data() {
        return {
            isActive: true,
            isOpen: true
        }
    },  
    methods: {
        changeVisibility() {
            this.isActive = !this.isActive;
        },toggle() {
            this.$emit("changeVisibility");
            this.isOpen = !this.isOpen;
        }
    },
    computed: {
        sign(){ 
            return this.isOpen? "▼" : "►";
        }
    }
}
</script>

<style scoped>
ul {
    padding: 0;
    width: 100%;
    border-bottom: 2px solid rgb(124, 124, 124);
    z-index: 0;
}
.row-title {
        display: flex;
        align-items: center;
        width: 7.5vw;
        cursor: pointer;
        position: sticky;
        left: 0px;
        top: 0px;
        background: white;
    }

    .row-title span {
        font-size: .5vw;
        margin-left: .4vw;
    }

    .row-title h2 {
        font-size: .8vw;
        font-weight: 300;
    }
</style>