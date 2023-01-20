<template>
    <div class="row-title" @click="toggle">
        <h2>{{ title }}</h2>
        <span>{{ sign }}</span>
    </div>        
</template>

<script>
export default {
    name: "RowHead",
    props: ["title"],
    methods: {
        toggle() {
            this.$emit("changeVisibility");
            this.isOpen = !this.isOpen;
        }
    },
    data() {
        return {
            isOpen: true
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
    .row-title {
        display: flex;
        align-items: center;
        left: 25vw;
        width: 7.5vw;
        cursor: pointer;
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