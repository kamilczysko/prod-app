<template>
  <div class="wizard" v-if="visible">
    <h1>{{ wizard.header }}</h1>
    <div class="rows">
        <div class="row" v-for="field in wizard.fields" :key="field.id">
            <p>{{ field.label }}</p>
            <input type="text" v-if="field.type=='text'" :id="field.name" :value="getValue(field.name)"/>
            <input type="number" v-if="field.type=='number'" :id="field.name" :value="getValue(field.name)"/>
            <textarea type="text" v-if="field.type=='textArea'" :id="field.name" :value="getValue(field.name)"></textarea>
        </div>
    </div>
    <div class="buttons">
        <button v-on:click="send">Send</button>
        <button v-on:click="hide">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "Wizard",
    props: ["visible", "wizard", "input"],
    data() {
        return {
        }
    },
    computed: {
        
    },
    methods: {
        getValue(prop) {
            console.log(prop)
            if(this.input == null) {
                return ""
            }
            return this.input[prop];
        },
        hide() {
            this.$emit("off");
        },
        send() {
            let result = {}
            Array.from(this.wizard.fields).forEach(field => {
                result[field.name] = document.getElementById(field.name).value
            })

            if(this.input != null) {
                this.$emit("update", {id: this.input.id, result:result});
            } else{   
                this.$emit("add", result);
            }
        }
    }
}
</script>

<style scoped>
.wizard h1 {
    font-weight: 200;
    font-size: 1.5vw;
}
.wizard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    /* height: 90vh; */
    background: rgb(241, 241, 241);
    border-radius: 20px;
    padding: 1vw 2vw;
}

.wizard input{
    font-weight: 100;
}

.wizard textarea{
    font-weight: 100;
}

.wizard input:focus{
    /* border: 3px solid #ccc; */
  /* -webkit-transition: 0.5s; */
  /* transition: 0.5s; */
  outline:none;
}

.wizard textarea:focus{
    /* border: 3px solid #ccc; */
  /* -webkit-transition: 0.5s; */
  /* transition: 0.5s; */
  outline:none;
}

.rows {
    border-top: 1px solid black;
    width: 100%;
}
.row {
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    width: 100%;
}

.row p {
    font-size: 1vw;
}

.buttons {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
}

.buttons button{
    border: none;
    background: none;
    cursor: pointer;

}

.buttons button:hover{
    font-weight: 600;
}

.buttons button:active{
    font-weight: 900;
}

</style>