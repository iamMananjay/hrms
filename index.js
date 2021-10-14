// const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
// const date = new Date();
// const year = document.querySelector('#year');
// const previousbtn= document.querySelector('.prebtn');
// const nextbtn= document.querySelector('.nextbtn');
// const todaydate= document.querySelector('.today');
// const todayevent= document.querySelector('.todaydate');
// const monthday = document.querySelector('.days')



// window.addEventListener('DOMContentLoaded',()=>{
//   monthRender();
// })

// let monthRender = ()=>{  
   
// const currentyear = date.getFullYear();
// const currentmonth = months[date .getMonth()];
// const currentdate =date.getDate();
// year.innerHTML=`${currentmonth}`
// todaydate.innerHTML=`${currentdate}`
// todayevent.innerHTML=`${currentdate}`


// let currentlastDayofMonth= new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

// let prevoiuslastDayofMonth = new Date(date.getFullYear(),date.getMonth(),0).getDate();

// console.log(currentdate);
 
  




// console.log(prevoiuslastDayofMonth);

  
// let days ='';







//   for(let i=1; i<=currentlastDayofMonth;i++){
//     if(i===new Date().getDate() && date.getMonth()===new Date().getMonth()){
//       days += `<div class="todaydate">${i}</div>`;
//       monthday.innerHTML =days;
//     }
//     else{
//       days += `<div>${i}</div>`;
//       monthday.innerHTML =days;
//     }
//   }

//   for (let j = 1; j <= nextDays; j++) {
//     days += `<div class="next-date">${j}</div>`;
//     monthday.innerHTML = days;
//   }




// // }
// // previousbtn.addEventListener('click',()=>{
// //   date.setMonth(date.getMonth()-1)
// //   monthRender();
// // })


// // nextbtn.addEventListener('click',()=>{
 
// //   date.setMonth( date.getMonth()+1)
// //   monthRender();

// // })







