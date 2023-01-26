<template>
    <div class="space">
        <Wizard :visible="productWizardVisibility" v-on:off="hideProductWizard" v-on:add="send" v-on:update="update" :wizard="wizard" :input="wizardData"/>
        <nav>
            <Search type="text" placeholder="Filter by product's name" v-on:search="filterChange"/>
        </nav>
        <CustomTable :headers="headers" v-bind:actionButtons="true" :data="getVisibleData" :row="row" v-on:edit="edit" v-on:remove="remove"/>
        <button class="add" v-on:click="addProduct">&plus;</button>
    </div>       
</template>

<script>
import Wizard from '../components/wizard/Wizard.vue'
import Row from '../components/table/Row.vue'
import Search from '../components/Search.vue'
import CustomTable from '../components/table/CustomTable.vue'

export default {
    name: "Products",
    components: {
        Wizard,
        Row, 
        Search,
        CustomTable
    },
    methods: {
        send(data){
            this.data.push({id: "11", name: data.name, description: data.description, price: data.price, currency:"$"},)
            this.productWizardVisibility = false;
        },
        addProduct() {
            this.wizardData = null;
            this.productWizardVisibility = true;
        },
        hideProductWizard() {
            this.productWizardVisibility = false;
        },
        edit(data) {
            this.wizardData = data;
            this.productWizardVisibility = true;
        },
        update(data) {
            const id = data.id;
            let element = Array.from(this.data).filter(d => d.id == id)[0];
            element.name = data.result.name;
            element.description = data.result.description;
            element.price = data.result.price;
            this.productWizardVisibility = false;
        },
        remove(id) {
            this.data = Array.from(this.data).filter(e => e.id != id)
        },
        filterChange(filter) {
            this.nameFilter = filter;
        }
    },
    data() {
        return {
            productWizardVisibility: false,
            wizardData: null,
            data: [
                {id: "11", name: "glass", description: "wututut", price: 44, currency:"$"},
                {id: "44", name: "doll", description: "fefef", price: 11, currency:"$"}
            ],
            wizard: {
                header: "New Product",
                fields: [
                    {id: 1, label: "Product name", type: "text", name: "name"},
                    {id: 2, label: "Description", type: "textArea", name: "description"},
                    {id: 3, label: "Price", type: "number", name: "price"}
                ]
            },
            row: ["id", "name", "price", "description"], // related to data keys
            nameFilter: "",
            headers: ["XId", "Name", "Price", "Description"] //table titles
        }
    },
        computed: {
            getVisibleData() {
                if(this.nameFilter == "" || this.nameFilter == null) {
                    return this.data
                }
                return Array.from(this.data).filter(d => d.name.includes(this.nameFilter))
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