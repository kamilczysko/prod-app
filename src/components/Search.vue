<template>
            <div class="search-wrapper">
                <input :type="type" :placeholder="placeholder" v-model="value" v-on:input="input">
                <button class="serach-button" v-on:click="click"></button>
            </div>
</template>

<script>
export default {
    name: "Search",
    props: ["type", "placeholder"],
    methods: {
        click() {

        },
        input() {
            this.$emit("search", this.value)
        }
    },
    data() {
        return {
            value: ""
        }
    }

}
</script>

<style>
.search-wrapper input {
    font-size: .9vw;
    font-weight: 100;
    width: 90%;
    height: 80%;
    margin: auto;
    border: none;
    margin: auto 1px;
    
    cursor: text;
}

.search-wrapper input:focus {
    outline: none;

}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.search-wrapper button{
    border: none;
    height: 80%;
    width: 2vw;
    background: none;
    font-size: 1vw;
    cursor: pointer;
}

.search-wrapper .serach-button {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=) center center no-repeat;
    background-size: 1vw;
}

.search-wrapper{
    margin-left: 2vw;
}
</style>