let cHourse = document.getElementById('_h');
let cMinuts = document.getElementById('_m');
let cSecond = document.getElementById('_s');
let cPeriod = document.getElementById('_p')
let date = document.getElementById('_d');
function clock(){
    // set time and date
    let now = new Date();
// Set Date use (hi-in for hindi) and (en-us for english)
let weekday = now.toLocaleString('en-us',{weekday:'short'});
let month = now.toLocaleString('en-us', {month:'short'})
let year = now.getFullYear();
date.innerHTML = `${weekday} ${month} ${year}`

// Time
   let hours = now.getHours().toString().padStart(2,'0');
     hours = hours %12 || 12; // Time convert to 12 hourse
   let minuts = now.getMinutes().toString().padStart(2,'0');
   let second = now.getSeconds().toString().padStart(2,'0');
    cHourse.innerHTML=`${hours} :`;
    cMinuts.innerHTML = `${minuts} : `;
    cSecond.innerHTML = `${second}`;
    // set time formate in 12 hours 
    let period = hours <= 12?'PM':'AM';    // Trinity Operator
    cPeriod.innerHTML= `${period}`

    

}
setInterval(clock,1000)
clock()





