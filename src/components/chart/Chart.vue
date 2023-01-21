<template>
  <div class="chart" id="chart">
    <div class="time" id="time"></div>
    <div class="actual-time" id="actual-time"> 
      <p>{{ actualTime }}</p>
    </div>
    <MainRow/>
    <MainRow/>
    <MainRow/>
    <MainRow/>
    <MainRow/>
  </div>
  
</template>

<script>
import MainRow from "./MainRow.vue"
export default {
 name: "Chart",
 props: ["timeDivisionInHours"],
 components: {
    MainRow
 },
 data(){
  return {
      startTime: this.getTodayTimestamp(),
      endTime: this.getTodayTimestamp() + 24 * 60 * 60,
      timeDivision: this.timeDivisionInHours,
      actualTime: this.timeConverter(this.getActualTimeStamp())
    }
 }, 
 mounted() {
    this.initTimeLineBackground(this.timeDivision);
    this.setActutalTimeCharacteristicPosition();
 }, 
 created() {
  setInterval(() => {
    this.setActutalTimeCharacteristicPosition();
    this.actualTime = this.timeConverter(this.getActualTimeStamp());
  }, 1000)
 },
 watch: {
    timeDivisionInHours (newTime, oldTime) {
      this.initTimeLineBackground(newTime)
    }
 },
 methods: {
  initTimeLineBackground(timeDivision) {
    document.getElementById("time").innerHTML = ""

    const timeContainer = document.getElementById("time")
    timeContainer.style.height = document.getElementsByClassName("chart")[0].scrollHeight+"px"
    document.getElementsByClassName("actual-time")[0].style.height = document.getElementsByClassName("chart")[0].scrollHeight+"px"

    const clientWidth = document.getElementById("chart").clientWidth;

      const hourlyRange = (this.endTime - this.startTime) / 60 / 60;
      const numberOfTimeDivisions = Math.round(hourlyRange / timeDivision);
      const widthOfSingleTimeDivision = (clientWidth / numberOfTimeDivisions)
      let actualTimeLabel = this.startTime;
      
      for(let i = 0; i <= numberOfTimeDivisions; i++) {      
          const singleTimeCharacteristic = document.createElement('div');
          singleTimeCharacteristic.classList.add("time-part");

          singleTimeCharacteristic.style.left = widthOfSingleTimeDivision * i + "px";
          
          timeContainer.appendChild(singleTimeCharacteristic);

          const timeLabel = document.createElement('p');
          timeLabel.classList.add("time-label");
          timeLabel.innerText = this.timeConverter(actualTimeLabel);

          singleTimeCharacteristic.appendChild(timeLabel);

          actualTimeLabel += timeDivision * 60 * 60;
      }
    },
    timeConverter(UNIX_timestamp){
      var a = new Date(UNIX_timestamp * 1000);
      var year = a.getFullYear();
      var month = a.getMonth()+1;
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + '.' + month + '.' + year + ' ' + ("0" + hour).slice(-2) + ':' + ("0" + min).slice(-2) + "::" + ("00" + sec).slice(-2);
      return time;
    },
    getTodayTimestamp() {
      const today = new Date()
      today.setUTCHours(0, 0, 0, 0);
      return Math.round(today/1000)
    },
    getActualTimeStamp(){
      const date = new Date()
      // date.setUTCHours(2, 0, 0, 0);

      return Math.round(date/1000)
    },
    getActualTimeLabel() {
      return this.timeConverter(Math.round(+new Date()/1000));
    },
    setActutalTimeCharacteristicPosition() {
      const clientWidth = document.getElementById("chart").clientWidth;
      const actualTimeTimestamp = this.getActualTimeStamp()
      document.getElementById("actual-time").style.left = ((actualTimeTimestamp - this.startTime) / (this.endTime - this.startTime)) * clientWidth + "px"
    
    }
 }
}
</script>

<style>

.chart {
    height: 100vh;
    width: 80vw;
    overflow:scroll;
    z-index: 101;
    position: relative;
    padding-right: 1.5vw;
}

.background-left {
    z-index: 99;
    background: #ECEFF1;
    position: fixed;
    left: 18vw;
    top: 6vw;
    height: 100%;
    width: 8vw;
    border-top-right-radius: 5px;
}

.time {
    display: flex;
    align-items: center;
    position: absolute;
    top:0;
    z-index: 0;
    left: 8vw;
}

.time-part {
    height: 100%;
    border-left: 1px solid rgba(42, 42, 42, .1);
    position: absolute;
    width: 1px;
}

.time-label{
    font-weight: 100;
    font-size: .5vw;
    overflow: hidden;
    position: absolute;
}

.actual-time {
    position: absolute;
    border-left: 2px dashed rgb(129, 7, 7);
    top: 1.5vw;
    width: 2px;
    margin-left: 8vw;
    z-index: 1;
    cursor: pointer;

}

.actual-time p {
  top: .5vw;
  font-size: .6vw;
  width: fit-content;
  position: sticky;

}

</style>