<template>
    <div class="space">
        <Wizard :visible="productWizardVisibility" v-on:off="hideProductWizard" v-on:add="send" v-on:update="update" :wizard="wizard" :input="wizardData"/>
        <nav>
            <div class="search-wrapper">
                <input type="number" placeholder="Filter by product's name">
                <button class="serach-button"></button>
            </div>
        </nav>
        <table cellspacing="0"> 
            <thead>
                <tr class="header">
                    <th>
                            XId
                    </th>
                    <th>
                            Name
                    </th>
                    <th>
                            Price
                    </th>
                    <th>
                            Descripion
                    </th>
                    <th>
                            Action
                    </th>
                </tr>
            </thead>
            <tbody class="data" id="data">
                <Row v-for="d in data" :key=d.id actionButtons="true" :data="d" :row="row" v-on:edit="edit" v-on:remove="remove"/>
            </tbody>
        </table> 
        <button class="add" v-on:click="addProduct">&plus;</button>
    </div>       
</template>

<script>
import Wizard from '../components/wizard/Wizard.vue'
import Row from '../components/table/Row.vue'

export default {
    name: "Products",
    components: {
        Wizard,
        Row
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
            row: ["id", "name", "price", "description"]
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