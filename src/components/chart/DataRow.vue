<template>
  <li class="row data-row">
                <div class="title">
                    <img :src=getIconUrl(icon)>
                    <h3>{{ title }}</h3>
                </div>
                <div class="data">
                    <DataElement identifier="444" width="19" left="1" color="#F6E8EA"/>
                    <DataElement identifier="111" width="10" left="20" color="#F45B69"/>
                    <DataElement identifier="222" width="5" left="30" color="#22181C"/>
                    <DataElement identifier="333" width="19" left="45" color="#F5CB5C"/>
                    <DataElement identifier="333" width="35" left="70" color="#22181C"/>
                </div>
    </li>
</template>

<script>
import DataElement from "./DataElement.vue"
export default {
    name: "DataRow",
    props: ["title", "icon"],
    methods: {
        getIconUrl(path) {
            return new URL('../../assets/icons/' + path, import.meta.url).href
        }
    },
    components: {DataElement}
}
</script>

<style scoped>
.chart-content {
    position:relative;
    top:0px;
    left:0px;
    overflow: scroll;
}

.row {
    display: grid;
    grid-template-columns: 8vw 92vw;
    height: 3vw;
    float:inline-start;
}

.data-row {
    width: fit-content;
}

.row-title {
    position: sticky;
    left: 0;
    z-index: 100;
    border-radius: 5px;
    margin-top: 0.2vw;
    margin-right: 1vw;
    align-items: center;
    height: 2.5vw;
    display: flex;
    justify-content: unset;
    padding-left: 1vw;
}

.row-title span {
    font-size: .5vw;
    margin-left: .4vw;
}

.row-title h2 {
    font-size: 1vw;
    font-weight: 300;
}

.title {
    position: sticky;
    left: 0;
    z-index: 100;
    border-radius: 5px;
    margin-top: 0.2vw;
    background: #D9D9D9;
    margin-right: 1vw;
    align-items: center;
    height: 2.5vw;
    width: 5vw;
    display: flex;
    justify-content: unset;
    padding-left: 2vw;
}

.title h3 {
    font-size: .8vw;
    font-weight: lighter;
    margin-left: .3vw;
}

.title img {
    width: .8vw;
    height: auto;
}

.data {
    position: relative;
    overflow: hidden;
}
</style>