async function showPnone () {
    const response = await fetch('../phone.json');
    const phone = await response.json();
    const phonelist=document.querySelector('.phone-list');
    const samsung=document.querySelector('.samsung');
    const apple=document.querySelector('.apple');
    const xiaomi=document.querySelector('.xiaomi');

  const generatephone=(tittle,img,count,date,firm,color,camera,popular)=>{
      return `<div class="phone-item">
      <h4 class="phone__tittle">${tittle}</h4>
      <div class="phone__img">
          <img src="${img}">
      </div>
      <ul class="phone-describtion">
          <li class="describtion">Количество: ${count}</li>
          <li class="describtion">Год выхода: ${date}</li>
          <li class="describtion firm">Производитель: ${firm}</li>
          <li class="describtion phone-color">Цвет: ${color}</li>
          <li class="describtion camera">Количество камер: ${camera}</li>
          <li class="describtion popular">Популярный: ${popular}</li>
      </ul>
      </div>
      `
  }
  const phoneHTML = phone.map(el => {
    return generatephone(el.tittle,el.img,el.count,el.date,el.firm,el.color,el.camera,el.popular);
  }).join('');
  phonelist.innerHTML = phoneHTML;

  var sliders = document.querySelectorAll(".kt_slider_basic");
  var valueMin = document.querySelectorAll(".kt_slider_basic_min");
  var valueMax = document.querySelectorAll(".kt_slider_basic_max");
  for(let slider of sliders){
  noUiSlider.create(slider, {
      start: [1, 8],
      connect: true,
      range: {
          "min": 1,
          "max": 8
      },
      step: 1
  });

  slider.noUiSlider.on("update", function (values, handle) {
      if (handle) {
          valueMax[0].innerHTML = values[handle];
          valueMax[1].innerHTML = values[handle];
      } else {
          valueMin[0].innerHTML = values[handle];
          valueMin[1].innerHTML = values[handle];
      }
  });}
 

// поиск по названию

let phonritem=document.querySelectorAll('.phone-item');
let tittlestext=document.querySelectorAll('.phone__tittle');

for ( let tittletext of tittlestext){
    let inputelem = document.querySelector('#search_by_name');
    inputelem.addEventListener('input', (ev)=> {
    let values=ev.target.value.trim();
    const searchRegExp = new RegExp(values, 'gi');
    const isContainsSearchRequest = searchRegExp.test(tittletext.textContent);
    let items=tittletext.closest("div");
    if (values === '') {
        items.classList.remove("hide");
        return
    }
    if (!isContainsSearchRequest) {
        items.classList.add("hide");
    }
    if(isContainsSearchRequest){
        items.classList.remove("hide");
    }
});

}

  //поиск по бренду

let marks=document.querySelectorAll('.mark');
let firmstext=document.querySelectorAll('.firm');
for(let mark of marks){
    mark.addEventListener("click",function(ev){
        ev.target.classList.toggle("active");
        console.log(mark.classList.contains('active'));
        console.log(mark.className.split(' ')[2]);
        let param=mark.className.split(' ')[2];
        const searchRegExp2 = new RegExp(param, 'gi');
        for(let firmtext of firmstext ){
            let items2=firmtext.closest("div");
            const isContainsSearchRequest2 = searchRegExp2.test(firmtext.textContent);
            if (!isContainsSearchRequest2) {
                items2.classList.add("hide");
            } 
            if(isContainsSearchRequest2){
                items2.classList.remove("hide");
            }
            if(!mark.classList.contains('active')){
                items2.classList.remove("hide");
            }
        } 
    })
    if(mark.classList.contains('active')){
        
    }
     
}

//поиск по количеству

let counts=document.querySelectorAll('.count');
let cameras=document.querySelectorAll('.camera');
for(let count of counts){
    count.addEventListener("click",function(ev){
        ev.target.classList.toggle("active");
        console.log(count.classList.contains('active'));
        console.log(count.className.split(' ')[2]);
        let param=count.className.split(' ')[2];
        const searchRegExp2 = new RegExp(param, 'gi');
        for(let camera of cameras ){
            let items2=camera.closest("div");
            const isContainsSearchRequest2 = searchRegExp2.test(camera.textContent);
            if (!isContainsSearchRequest2) {
                items2.classList.add("hide");
            } 
            if(isContainsSearchRequest2){
                items2.classList.remove("hide");
            }
            if(!count.classList.contains('active')){
                items2.classList.remove("hide");
            }
        } 
    })  
}


//поиск по цвету

let colors=document.querySelectorAll('.color');
let phone_colors=document.querySelectorAll('.phone-color');
for(let color of colors){
    color.addEventListener("click",function(ev){
        ev.target.classList.toggle("active");
        console.log(color.classList.contains('active'));
        console.log(color.className.split(' ')[2]);
        let param=color.className.split(' ')[2];
        const searchRegExp2 = new RegExp(param, 'gi');
        for(let phone_color of phone_colors ){
            let items2=phone_color.closest("div");
            const isContainsSearchRequest2 = searchRegExp2.test(phone_color.textContent);
            if (!isContainsSearchRequest2) {
                items2.classList.add("hide");
            } 
            if(isContainsSearchRequest2){
                items2.classList.remove("hide");
            }
            if(!color.classList.contains('active')){
                items2.classList.remove("hide");
            }
        } 
    })  
}

const checkbox = document.getElementById("checkbox");
let populars=document.querySelectorAll('.popular');
checkbox.addEventListener("change", () => {
    for(let popular of populars){
        let items2=popular.closest("div");
        checkbox.checked?popular.textContent==="Популярный: да"?items2.classList.remove("hide"):items2.classList.add("hide"):items2.classList.remove("hide");
    }
   
})

}
  showPnone();
 






  