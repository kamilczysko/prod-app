<template>
    <div class="data-element" :style="{background: color, width: getWidth, left: getPosition}" v-on:mouseover="showTooltip" v-on:mouseout="hideTooltip">
        <p>id: {{ identifier }}</p>  
            <div class="tooltip" v-if="tooltipVisible">
                <ul>
                    <li>
                        <span class="header">id:</span>
                        <span class="content">12341234</span>
                    </li>
                    <li>
                        <span class="header">amount:</span>
                        <span class="content">150 pkgs</span>
                    </li>
                    <li>
                        <span class="header">order id:</span>
                        <span class="content">123</span>
                    </li>
                    <li>
                        <span class="header">comment:</span>
                        <span class="content">It has to be done right now!!!!!</span>
                    </li>
                </ul>
        </div>  
    </div>
</template>

<script>
export default {
    name: "DataElement",
    props: ["identifier", "width", "left", "color" ],
    data() {
        return {
            tooltipVisible: false
        }
    },
    computed: {
        getWidth() {
            return this.width + "vw";
        },
        getPosition() {
            return this.left + "vw";
        }
    },
    methods: {
        showTooltip() {
            this.tooltipVisible = true;
        },
        hideTooltip() {
            this.tooltipVisible = false;
        }
    }
}
</script>

<style scoped>

.data-element {
    position: absolute;
    height: 2.5vw;
    margin-top: .25vw;
    border-radius: 7px;
}

.data-element p {
    color: white;
    font-weight: 100;
    font-size: .7vw;
    text-align: left;
    margin-top: 1vw;
    padding-left: .6vw;
}

.signs {
    height: 1vw;
    width: fit-content;
    position: absolute;
    top: -.3vw;
    right: .2vw;
    display: flex;
    align-items: center;
}

.signs svg { 
    height: 1.2vw;
    width: auto;
}

.tooltip {
    position: absolute;
    background: black;
    border: 1px solid black;
    color: rgb(255, 255, 255);
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    left: .23vw;
    top: .5vw;
    font-weight: 200;
    width: 10vw;
    z-index: 100000;
    font-size: .65vw;
  }

  .tooltip span {
    background: black;
    width: 100%;
  }
  
  .tooltip::before,
  .tooltip::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 19px;
    border: 11px solid transparent;
    border-bottom-color: black;
  }
  
  .tooltip::after {
    left: 20px;
    border: 10px solid transparent;
    border-bottom-color: black;
  }


.tooltip ul {
    list-style-type: none;
}

.tooltip li {
    margin: 1vw;
}

.tooltip::before {
    opacity:0;
    transition:.3s opacity;
}

.tooltip .header{
    font-weight: 600;
}

</style>