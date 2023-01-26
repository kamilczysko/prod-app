<template>
    <div class="space">
        <Wizard :visible="productWizardVisibility" v-on:off="hideProductWizard" v-on:add="send" v-on:update="update" :wizard="wizard" :input="wizardData"/>
        <nav>
            <Search type="text" placeholder="Filter by asset" v-on:search="filterChange"/>
        </nav>
        <CustomTable :headers="headers" actionButtons=true :data="getVisibleData" :row="row" v-on:edit="edit" v-on:remove="remove"/>
        <button class="add" v-on:click="addNewMachine">&plus;</button>
    </div>       
</template>

<script>
import Wizard from '../components/wizard/Wizard.vue'
import Row from '../components/table/Row.vue'
import Search from '../components/Search.vue'
import CustomTable from '../components/table/CustomTable.vue'
export default {
    name: "Storage",
    components: {
        CustomTable, Row, Search, Wizard
    },
    methods: {
        addNewMachine() {
                this.productWizardVisibility = true;
        },
        hideProductWizard() {
            this.productWizardVisibility = false;
            this.wizardData = null;
        },
        edit(data){
            this.wizardData = data;
            this.productWizardVisibility = true;
        },
        remove(id) {
            this.data = Array.from(this.data).filter(e => e.id != id)
        },
        send(data) {
            this.data.push(data);
            this.productWizardVisibility = false;
        },update(data) {
            const id = data.id;
            let element = Array.from(this.data).filter(d => d.id == id)[0];
            element.name = data.result.name;
            element.description = data.result.description;
            element.price = data.result.quantity;
            element.unit = data.result.unit;
            this.productWizardVisibility = false;
        },
        filterChange(filter) {
            this.filter = filter;
        }
    },
    data() {
        return {
            data: [
                {id: "1234", name: "mill", comment: "Machine working well when not in repair", quantiy: 1, unit: "pckgs"},
                {id: "4544", name: "lathe", comment: "Machine working well when not in repair", quantity: 12, unit: "kg"}
            ],
            headers: ["XId", "Name", "Description", "Quantity", "Unit"],
            row: ["id", "name", "comment", "quantity", "unit"],

            productWizardVisibility: false,
            wizardData: null,
            wizard: {
                header: "New Asset",
                fields: [
                    {id: 1, label: "Name", type: "text", name: "name"},
                    {id: 2, label: "Description", type: "textArea", name: "comment"},
                    {id: 3, label: "Quantity", type: "number", name: "quantity"},
                    {id: 4, label: "Unit", type: "text", name: "unit"}
                ]
            },
            filter: ""
        }
    },
        computed: {
            getVisibleData() {
                if(this.filter == "" || this.filter == null) {
                    return this.data    
                }
                return Array.from(this.data).filter(d => d.name.includes(this.filter) || (d.id != null && d.id.includes(this.filter)))
            }
        }
}
</script>

<style scoped>
nav {
    height: 9.5vh;
    /* width:100%; */
    border-bottom: 1px solid black;
    background: white;
    z-index: 100;
    display: flex;
    align-items: center;
}
.space {
    width: 100%;
    height: 100%;
}
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

.search-wrapper input {
    font-size: .9vw;
    font-weight: 100;
    width: 90%;
    height: 80%;
    margin: auto;
    border: none;
    margin: auto 1px;
    
    cursor: pointer;
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

.add {
    width: 3vw;
    height: 3vw;
    font-size: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:auto;
    border: none;
    background: none;
}

.add:active {
    color:greenyellow;
}

.add:hover {
    background: rgb(240, 255, 242);
    border-radius: 15px;
}
</style>