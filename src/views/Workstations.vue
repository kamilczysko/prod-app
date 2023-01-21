<template>
    <div class="space">
        <nav>
            <div class="search-wrapper">
                <input type="number" placeholder="Filter by process identifier">
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
                            Descripion
                    </th>
                    <th>
                            Available
                    </th>
                    <th>
                            Action
                    </th>
                </tr>
            </thead>
            <tbody class="data" id="data">
                <tr>
                    <td>123</td>
                    <td>Mill 1</td>
                    <td class="comment">Machine working well when not in repair</td>
                    <td>Jup</td>
                    <td class="action">
                        <button>&#x270E;</button>
                        <button>&#9842;</button>
                    </td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>Mill 1</td>
                    <td class="comment">Machine working well when not in repair</td>
                    <td>Jup</td>
                    <td>
                        <div class="action">
                            <button >&#x270E;</button>
                            <button>&#9842;</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table> 
        <button class="add" v-on:click="addNewMachine">&plus;</button>
    </div>       
</template>

<script>
export default {
    name: "Workstations",
    methods: {
        addNewMachine() {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.innerText = "123"
            tr.appendChild(td)

            td = document.createElement("td")
            td.innerText = "Mill 2"
            tr.appendChild(td)

            td = document.createElement("td")
            td.classList.add("comment")
            td.innerText = "Some comment bro"
            tr.appendChild(td)

            td = document.createElement("td")
            let div = document.createElement("div")
            div.classList.add("action")

            let editButton = document.createElement("button")
            editButton.innerText = "&#x270E;"
            div.appendChild(editButton)

            let removeButton = document.createElement("button")
            removeButton.innerText = "&#9842;"
            div.appendChild(removeButton)
            td.appendChild(div)
            tr.appendChild(td)

            document.getElementById("data").appendChild(tr)
        }
    }
}
</script>

<style scoped>
.action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3vw;

}
button {
    border: none;
    background: none;
    cursor: pointer;
    width: 2vw;
    height: 2vw;
}

button:hover {
    font-weight: 200;
    background: rgb(255, 236, 236);
    border-radius: 20px;
}

button:active {
    font-weight: 500;
    color: red;
}
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
.data tr { 
    margin-top: 1vw;
    height: 3vw;
    box-shadow: 1px 1px 3px black;
    background: rgb(246, 246, 246);
    border-spacing: .3vw;
}

.data tr:hover { 
    box-shadow: 1px 1px 5px black;
    background: rgb(238, 238, 238);
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
    font-size: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:auto;
}

.add:active {
    color:greenyellow;
}

.add:hover {
    background: rgb(240, 255, 242);
    border-radius: 15px;
}
</style>