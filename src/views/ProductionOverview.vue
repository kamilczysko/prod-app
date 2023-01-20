<template>
    <div>
        <nav>
            <div class="filters">
                <div class="filter-items">
                    <div class="date-range">
                        <div>
                            <div class="date">
                                <img src="../assets/icons/calendar.svg">
                                <p>22.09.23</p>
                            </div>
                            <span>Start day</span>
                        </div>
                        <div class="separator"></div>
                        <div>
                            <div class="date">
                                <img src="../assets/icons/calendar.svg">
                                <p>23.09.23</p>
                            </div>
                            <span>End day</span>
                        </div>
                    </div>
                    <div class="search-wrapper">
                        <input type="number" placeholder="Filter by process identifier">
                        <button class="serach-button"></button>
                    </div>
                </div>
                <div>
                    <p class="scale-label">scale:</p>
                    <div class="scale-buttons">
                        <button class="change-scale" :onClick="increaseTimeScale">
                            <span>+</span>
                        </button>
                        <button class="change-scale" :onClick="decreaseTimeScale">
                            <span>-</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        <Chart :timeDivisionInHours="getTimeScale"/>
    </div>
</template>

<script>
import Chart from "@/components/chart/Chart.vue"
export default {
    name: "ProductionOverview",
    components: {
        Chart
    },
    data() {
        return {
            timeDivisionInHours: 1,
            timeFactor: 0.25
        }
    },
    methods: {
        increaseTimeScale() {
            this.timeDivisionInHours += this.timeFactor
        },
        decreaseTimeScale() {
            if(this.timeDivisionInHours > this.timeFactor){
                this.timeDivisionInHours -= this.timeFactor
            }
        }
    },
    computed: {
        getTimeScale() {
            return this.timeDivisionInHours
        }
    }
}
</script>

<style>
nav {
    height: 9.5vh;
    width:100%;
    border-bottom: 1px solid black;
    background: white;
    z-index: 100;
    display: flex;
    align-items: center;
}

.filters {
    height: 9.5vh;
    width: 50vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.filter-items {
    display: flex;
    justify-content: space-evenly;
    align-items: end;
    width: 100%;
}

.search-wrapper {
    height: 2vw;
    width: 20vw;
    display: flex;
    align-items: center;
    margin-bottom: .5vw;
    justify-content: center;
    border: 1px solid black;
    border-radius: 5px;
}

.search-wrapper input {
    font-size: .9vw;
    font-weight: 100;
    width: 90%;
    height: 80%;
    margin: auto;
    border: none;
    margin: auto 1px;
    margin-left: 1vw;
    cursor: pointer;
}

.search-wrapper input:focus {
    outline: none;
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

.date-range {
    display: flex;
    align-items: center;
    justify-content: baseline;
    margin-left: 2vw;
}

.date-range .separator {
    width: 1vw;
    height: 3px;
    background-color: gray;
    margin: 1vw;
}

.date-range .date {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 100;
    height: 1.6vw;
}

.date-range .date p {
    font-weight: lighter;
    font-size: 1.3vw;
}

.date-range span {
    color: #6F6C99;
    font-weight: 400;
    font-size: 1vw;
    text-align: center;
    margin-left: 1.8vw
}

.date img {
    width: 1.3vw;
    height: auto;
    margin-right: .4vw;
}

.date {
    cursor: pointer;
}

.scale-buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 3vw;
}

.scale-label {
    height: 1vw;
    font-size: 1vw;
    margin-bottom: .4vw;
    text-align: center;

}

.change-scale {
    font-weight: 100;
    cursor: pointer;
    height: 1vw;
    width: 1vw;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.change-scale:hover {
    font-weight: 500;
    background: rgb(238, 238, 238);
    border-radius: 15px;
    height: 1vw;
    width: 1vw;
    
}

.change-scale:active {
    font-weight: 500;
    background: rgb(161, 161, 161);
    border-radius: 15px;
    height: 1vw;
    width: 1vw;
    
}

</style>