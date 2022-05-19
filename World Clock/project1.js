
let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
setInterval(() => {
a=new Date()
date=a.toLocaleDateString(undefined,options)
time=a.getHours()+':'+ a.getMinutes()+":"+a.getSeconds()
document.getElementById('time').innerHTML=time + ' <br>' + date

 America_time=a.toLocaleString('en-US', { timeZone: 'America/New_York' });
 document.getElementById('United_State_of_America').innerHTML=America_time

India_time=a.toLocaleString('en-US', { timeZone: "Europe/London"});
document.getElementById('India_Time').innerHTML=India_time

Australia_time=a.toLocaleString('en-US', { timeZone: "Australia/Sydney"});
document.getElementById('Australia_Time').innerHTML=Australia_time

America_time=a.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
document.getElementById('America_Time').innerHTML=America_time

},1000);



