
<template>
    <tr v-if="visible">
        <td v-for="k in Object.keys(getVisibleData)" :key="k">{{ data[k] }}</td>
        <td class="action" v-if="actionButtons">
            <button v-on:click="edit">&#x270E;</button>
            <button v-on:click="remove">&#9842;</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Row",
    props: ["row", "data", "actionButtons"],
    methods: {
        remove() {
            this.$emit("remove", this.data.id)

        },
        edit() {
            console.log(this.data)
            this.$emit("edit", this.data)
        }  
     },
    data() {
        return {
            visible: true,
        }
    },
    computed: {
        getVisibleData(){
            let result = {};
            Array.from(this.row).forEach(label => {
                result[label] = this.data[label]
            })
            return result;
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