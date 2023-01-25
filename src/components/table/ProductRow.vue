<template>
    <tr v-if="visible">
        <td>{{ id }}</td>
        <td>{{ name }}</td>        
        <td>{{ price }} {{ currency }}</td>
        <td class="description">{{ description }}</td>
        <td class="action">
            <button v-on:click="edit">&#x270E;</button>
            <button v-on:click="remove">&#9842;</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "ProductRow",
    props: ["id", "name", "description", "price", "currency"],
    methods: {
        remove() {
            this.visible = false;
        },
        edit() {
            this.$emit("edit", {"id":this.id, "name": this.name, "description": this.description, "price": this.price})
        }
    },
    data() {
        return {
            visible: true
        }
    }
}
</script>

<style scoped>
tr { 
    margin-top: 1vw;
    height: 3vw;
    box-shadow: 1px 1px 3px black;
    background: rgb(246, 246, 246);
    border-spacing: .3vw;
    font-weight: 100;
    text-align: center;
}

tr:hover { 
    box-shadow: 1px 1px 5px black;
    background: rgb(238, 238, 238);
}

.action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3vw;

}
button {
    border: none;
    background: none;
    cursor: pointer;
    width: 2vw;
    height: 2vw;
}

button:hover {
    font-weight: 200;
    background: rgb(255, 236, 236);
    border-radius: 20px;
}

button:active {
    font-weight: 500;
    color: red;
}

</style>