const startTime = 1673643957;
const endTime = 1673730357;

function initTimeLineBackground() {

    const hourlyRange = (endTime - startTime)/60/60;
    const hourlyDivision = 1.5;
    const mark = Math.round(hourlyRange/hourlyDivision);

    const clientWidth = document.querySelector("body").clientWidth;
    const timeContainer = document.getElementById("time")
    const elements = document.querySelectorAll("ul");
    let maxWidth = 0;

    Array.from(elements).forEach(element => {
        if(maxWidth < element.scrollWidth) {
            maxWidth = element.scrollWidth;
        }
    })

    const timePartWidth = (maxWidth/mark)/clientWidth*100
    let actualTimeLabel = startTime;
    timeContainer.style.width =  maxWidth/clientWidth*100+"vw";
    for(let i = 0; i <= mark; i++) {      
        const timePart = document.createElement('div');
        timePart.classList.add("time-part");
        timePart.style.minWidth = timePartWidth+"vw";
        timePart.style.maxWidth = timePartWidth+"vw";
        timeContainer.appendChild(timePart);

        const timeLabel = document.createElement('p');
        timeLabel.classList.add("time-label");
        timeLabel.innerText = timeConverter(actualTimeLabel);

        timePart.appendChild(timeLabel);

        actualTimeLabel += hourlyDivision*60*60;
    }
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth()+1;
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = date + '.' + month + '.' + year + ' ' + hour + ':' + min ;
    return time;
  }

function initUserDateSelection() {
    const clientWidth = document.querySelector("body").clientWidth;
    let maxWidth = 0;
    const elements = document.querySelectorAll("ul");

    Array.from(elements).forEach(element => {
        if(maxWidth < element.scrollWidth) {
            maxWidth = element.scrollWidth;
        }
    })
    const dataElements = document.getElementsByClassName("data-row");
    Array.from(dataElements).forEach(e => {
        e.onclick = (m) => {
            const userTimeSign = document.createElement('div');
            userTimeSign.classList.add("user-time-signature");
            userTimeSign.innerText = timeConverter(((m.pageX-0.082*clientWidth)/maxWidth)*(endTime-startTime)+startTime);
            userTimeSign.style.left = m.pageX+"px";
            userTimeSign.onclick = () => {
                userTimeSign.style.display = "none";
            }
            e.appendChild(userTimeSign);
        }
    })
}

initTimeLineBackground();
initUserDateSelection();