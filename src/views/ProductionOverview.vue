<template>
    <div>
        <nav>
            <div class="filters">
                <div class="filter-items">
                    <div class="date-range">
                        <div>
                            <div class="date">
                                <img src="../assets/icons/calendar.svg">
                                <div class="datepicker">
                                    <datepicker
                                        v-model="startDate"
                                        :clearable="false"
                                        :upperLimit="endDate"
                                    />
                                </div>
                            </div>
                            <span>Start day</span>
                        </div>
                        
                        <div class="separator"></div>
                        <div>
                            <div class="date">
                                <img src="../assets/icons/calendar.svg">
                                <div class="datepicker">
                                    <datepicker
                                        v-model="endDate"
                                        :clearable="false"
                                        :lowerLimit="startDate"
                                    />
                                </div>
                            </div>
                            <span>End day</span>
                        </div>
                    </div>
                    <div class="search-wrapper">
                        <input type="number" placeholder="Filter by process identifier">
                        <button class="serach-button"></button>
                    </div>
                </div>
                <div class="scale">
                    <p class="scale-label">Time division: {{ timeDivisionInHours }} H</p>
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
        <Chart :timeDivisionInHours="getTimeScale" :startDate="startDate" :endDate="endDate"/>
    </div>
</template>

<script>
import Chart from "@/components/chart/Chart.vue"
import Datepicker from "vue3-datepicker"

export default {
    name: "ProductionOverview",
    components: {
        Chart,
        Datepicker
    },
    data() {
        return {
            timeDivisionInHours: 1,
            timeFactor: 0.25,
            startDate: this.getBegginingOfActualDay(),
            endDate: this.getEndOfNextDay()
        }
    },
    methods: {
        getBegginingOfActualDay(){
            const today = new Date()
            today.setUTCHours(0,0,0)
            return today
        },
        getEndOfNextDay(){
            let today = new Date()
            today.setUTCHours(23,59,59)
            return today
        },
        increaseTimeScale() {
            this.timeDivisionInHours += this.timeFactor
        },
        decreaseTimeScale() {
            if(this.timeDivisionInHours > this.timeFactor){
                this.timeDivisionInHours -= this.timeFactor
            }
        },
        timeConverter(a){
            var year = a.getFullYear();
            var month = a.getMonth()+1;
            var date = a.getDate();
            var time = ("00" + date).slice(-2) + '.' + ("00" + month).slice(-2) + '.' + year;
            return time;
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
    /* width:100%; */
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
    justify-content: space-around;
    margin-left: 2vw;
}

.date-range .separator {
    width: 1vw;
    height: 3px;
    background-color: gray;
    margin: 1vw;
    margin-right: 2vw;
}

.date-range .date {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 100;
    height: 1.6vw;
    cursor: pointer;
}

.date-range .date p {
    font-weight: lighter;
    font-size: 1.1vw;
    width: 6vw;
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
}

.date-range .date:hover {
    font-weight: 600;
}

.scale {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
    width: 10vw;
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

.datepicker {
    z-index: 100000;
}

.v3dp__popout[data-v-2e128338] {
    z-index: 10;
    position: absolute;
    /* bottom: 0; */
    text-align: center;
    width: fit-content;
    padding: 1vw;
}

.v3dp__input_wrapper input{
    font-weight: lighter;
    font-size: 1.1vw;
    width: 6vw;
    color: rgb(105, 105, 105);
    border: none;
    cursor: pointer;
}
</style>