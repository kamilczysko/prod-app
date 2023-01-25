<template>
          <table cellspacing="0"> 
            <thead>
                <tr class="header">
                    <th v-for="h in headers" :key="h">{{ h }}</th>
                    <th v-if="actionButtons">Action</th>
                </tr>
            </thead>
            <tbody class="data" id="data">
                <Row v-for="d in data" :key=d.id :actionButtons="actionButtons" :data="d" :row="row" v-on:edit="edit" v-on:remove="remove"/>
            </tbody>
        </table> 
</template>

<script>
import Row from './Row.vue'

export default {
    name: "CustomTable",
    components: {Row},
    props: ["headers", "data", "actionButtons", "row"],
    methods: {
        edit(data) {
            this.$emit("edit", data);
        },
        remove(id) {
            this.$emit("remove", id);
        }
    }

}
</script>

<style>

table {
    margin: auto;
    margin-top: 2vw;
    width: 95%;
    padding: 0px;
    border-collapse: separate;
    border-spacing: 0 .5vw;
}

th {
    font-weight: 300;
    height: 3vw;
    border-left: none;
    background: rgb(247, 247, 247);
}
th:nth-child(1){
    border-top-left-radius: 6px;
}
th:last-child{
    border-top-right-radius: 6px;
}
td {
    font-weight: 100;
    text-align: center;
}
.comment {
    text-align: left;    
}
tbody {
    margin-top: 1vw;
    /* vertical-align: top; */
}

tbody tr:nth-child(2n) {
}
</style>