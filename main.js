let list_item = document.querySelectorAll('.item');
let list = document.querySelector('.list');
let button_back = document.querySelector('.back');
let button_next = document.querySelector('.next');
let active = 0;
let dots = document.querySelectorAll('.dots li');
console.log(dots);
let lengthItem = list_item.length - 1;
button_next.addEventListener("click",function(e)
{
    if(active  == lengthItem  )
    {
       active = 0;
    }
    else
    {
       active +=1; 
    }
    reloadSlider();
});
let reshSlider = setInterval (()=>{
    if(active  == lengthItem  )
    {
       active = 0;
    }
    else
    {
       active +=1; 
    }
    reloadSlider();
},2000)
button_back.addEventListener("click",function(e)
{
   
    if(active  == 0 )
    {
       active =lengthItem;
    }
    else
    {
       active-=1; 
    }
    reloadSlider();
});
function reloadSlider()
{
    let checkLeft = list_item[active].offsetLeft;
    list.style.left = -checkLeft +'px';
    let active_dots =  document.querySelector('.active');
    console.log(active_dots);
    active_dots.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(reshSlider);
    reshSlider = setInterval (()=>{
    if(active  == lengthItem  )
    {
       active = 0;
    }
    else
    {
       active +=1; 
    }
    reloadSlider();
},2000)

}
for ( let i = 0 ; i < dots.length ; i ++)
{
    dots[i].addEventListener("click", function()
    {
        active = i;
        reloadSlider();
    })
}
