// async function showPnone () {
//   const response = await fetch('../phone.json');
//   const phone = await response.json();
//   const phonelist=document.getElementsByClassName("phone-list");
// //   const phoneitem=document.createElement("div");
// //   phoneitem.classList.add("phone-list__item");
// //   phonelist.appendChild(phoneitem);
// //   const tittle=document.createElement("h4");
// //   phonelist.appendChild(tittle);
// //   const divimg=document.createElement("div");
// //   phonelist.appendChild(divimg);
// //   const img=document.createElement("img");
// //   divimg.appendChild(img);
// //   const ul=document.createElement("ul");
// //   phonelist.appendChild(ul);
// //   const licount=document.createElement("li");
// //   const lidate=document.createElement("li");
// //   const firm=document.createElement("li");
// //   const color=document.createElement("li");
// //   const camera=document.createElement("li");
// //   const popular=document.createElement("li");
// //   ul.appendChild(licount,lidate,firm,color,camera,popular);
// const generatephone=(title,img,count,date,firm,color,camera,popular)=>{
//     return `<div class="phone-list">
//     <h4 class="phone__tittle">${title}</h4>
//     <div class="phone__img">
//         <img src="${img}">
//     </div>
//     <ul class="phone-describtion">
//         <li class="describtion">${count}</li>
//         <li class="describtion">${date}</li>
//         <li class="describtion">${firm}</li>
//         <li class="describtion">${color}</li>
//         <li class="describtion">${camera}</li>
//         <li class="describtion">${popular}</li>
//     </ul>
//    </div>`
// }
// const phoneHTML = phone.map(el => {
//     return generatephone(el.title,el.img,el.count,el.date,el.firm,el.color,el.camera,el.popular);
// }).join('');
// phonelist.innerHTML = phoneHTML;

// var slider = document.getElementById('slider');

// noUiSlider.create(slider, {
//     start: [20, 80],
//     connect: true,
//     range: {
//         'min': 0,
//         'max': 100
//     }
// });
// }
// showPnone();
