<template>
    <div class="menu_item" :class="{active:isActiveElement}">
        <button class="item" v-on:click="click" :class="{parent:isParent}">
            <img :src=getIconUrl(icon)>
            <p>{{ label }}</p>
        </button>        
        <button class="item subitem" v-for="item in subitems" :class="{subitemactive:isChildSelected(item.id), visible:isActiveElement}" :key="item.id" v-on:click="clickSubitem(item.id, item.link)">
            <img :src=getIconUrl(item.icon)>
            <p>{{ item.label }}</p>
        </button>
    </div>
</template>

<script>
export default {
    name: "MenuItem",
    props: ["label", "link", "icon", "id", "isActive", "subitems"],
    data() {
        return {
            
        }
    },
    computed: {
        isActiveElement() {
            let storedId = this.$store.state.activePageId;
            return storedId == this.id || this.hasChildWithSelectedId(storedId);
        },
        isParent() {
            return this.subitems != null;
        }
    },
    methods: {
        click() {
            const selectedItemId = this.$store.state.activePageId;
            if(this.id == selectedItemId || this.hasChildWithSelectedId(selectedItemId)) {
                return;
            }
            this.$store.commit("setActivePage", this.id);
            if(this.link){
                this.$router.push(this.link);
            }
        },
        clickSubitem(id, link) {
            if(link){
                this.$router.push(link);
            }
            this.$store.commit("setActivePage", id);
        },
        getIconUrl(path) {
            return new URL('../../assets/icons/' + path, import.meta.url).href
        },
        isChildSelected(id){
            return id == this.$store.state.activePageId;
        },
        hasChildWithSelectedId(id) {
            if(this.subitems == null) {
                return false;
            }
            const result = Array.from(this.subitems).filter(item => {
                return item.id == id;
            })
            return result.length > 0;
        }
    }
}

</script>

<style>
    .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: none;
        padding: .1vw 4vw;
        margin: 0vh 0;
        cursor: pointer;
        background: none;
        border-radius: 5px;
        /* width: 5vw; */
    }

    p{
        font-size: .8vw;
        font-weight: 200;
        width: 5vw;
        color: #878888;
        overflow-wrap: break-word;
    }

    img{
        width: 1.4vw;
        height: auto;
        margin-right: .8vw;
        opacity: 40%;
        filter: invert(61%) sepia(0%) saturate(0%) hue-rotate(273deg) brightness(88%) contrast(87%);
    }

    button {
        width: 100%;
    }

    .item:hover img{
        opacity: 60%;
        filter: invert(61%) sepia(0%) saturate(0%) hue-rotate(273deg) brightness(88%) contrast(87%)
    }

    .item:hover p{
        color: black;
        font-weight: 300;
    }

    .active button { 
        background: #D9D9D9;
    }

    .active p {
        color: black;
        font-weight: 500;
        text-decoration: underline ;
    }

    .active img {
        opacity: 100% ;
        filter: invert(0%) sepia(0%) saturate(13%) hue-rotate(292deg) brightness(94%) contrast(106%);
    }

    .subitemactive button {
        background: #008DAF;
    }

    .subitemactive p { 
        color: black;
        font-weight: 500 !important;
        text-decoration: underline ;
        overflow-wrap: break-word;
    }

    .subitemactive img {
        opacity: 100% !important;
        filter: invert(0%) sepia(0%) saturate(13%) hue-rotate(292deg) brightness(94%) contrast(106%);
    }


    .visible {
        display: flex !important;
    }

    .subitem {
        display: none;
        border: none;
        margin-top: .3vw;
        width: 80%;
        height: 2.5vw;
    }

    .subitem img {
        opacity: 40%;
    }

    .subitem p {
        font-size: .8vw;
        font-weight: 100;
        text-decoration: none;
    }
</style>