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
      endTime: this.getTodayTimestamp()+24*60*60,
      timeDivision: this.timeDivisionInHours,
      actualTime: this.getActualTime()
    }
 }, 
 mounted() {
    this.initTimeLineBackground(this.timeDivision);
    this.getActutalTimePosition();
 }, 
 created() {
  setInterval(() => {
    this.getActutalTimePosition();
    this.actualTime = this.getActualTime();
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

      const hourlyRange = (this.endTime - this.startTime)/60/60;
      const hourlyDivision = timeDivision;
      const mark = Math.round(hourlyRange/hourlyDivision);
      console.log(mark)

      const clientWidth = document.getElementById("chart").clientWidth * 0.92;
      const timeContainer = document.getElementById("time")
      let maxWidth = clientWidth;
      console.log("width: "+maxWidth)

      const timePartWidth = (maxWidth/mark)
      console.log("part: "+timePartWidth)

      let actualTimeLabel = this.startTime;
      timeContainer.style.width =  maxWidth/clientWidth*100+"vw";
      timeContainer.style.height = document.getElementsByClassName("chart")[0].scrollHeight+"px"
      document.getElementsByClassName("actual-time")[0].style.height = document.getElementsByClassName("chart")[0].scrollHeight+"px"
      for(let i = 0; i <= mark; i++) {      
          const timePart = document.createElement('div');
          timePart.classList.add("time-part");

          timePart.style.left = timePartWidth*i+"px";

          timeContainer.appendChild(timePart);

          const timeLabel = document.createElement('p');
          timeLabel.classList.add("time-label");
          // timeLabel.innerText = this.timeConverter(actualTimeLabel);
          timePart.appendChild(timeLabel);

          actualTimeLabel += hourlyDivision*60*60;
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
      var time = date + '.' + month + '.' + year + ' ' + hour + ':' + min + "::" + sec;
      return time;
    },
    getTodayTimestamp() {
      const today = new Date()
      today.setUTCHours(23, 0, 0, 0);
      return Math.round(today/1000)
    },
    getActualTimeStamp(){
      const date = new Date()
      // date.setUTCHours(1, 0, 0, 0);

      return Math.round(date/1000)
    },
    getActualTime() {
      return this.timeConverter(Math.round(+new Date()/1000));
    },
    getActutalTimePosition() {
      let maxWidth = document.getElementById("chart").clientWidth;

      const actualTime = this.getActualTimeStamp()
      const a = (actualTime - this.startTime)/(this.endTime - this.startTime)
      const timePosition = (maxWidth*a)     

      console.log("start Time: "+ this.startTime) 
      console.log("end Time: "+ this.endTime)
      console.log("actual Time: "+ actualTime)

      document.getElementById("actual-time").style.left = a*100+"vw"
    }
 }
}
</script>

<style>

.chart {
    margin: 0;
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
    position:relative;
}

.time-label{
    font-weight: 100;
    font-size: .3vw;
    overflow: hidden;
}

.actual-time {
    position: absolute;
    border-left: 2px dashed rgb(129, 7, 7);
    top: 1.5vw;
    width: 1vw;
    margin-left: 7vw;
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