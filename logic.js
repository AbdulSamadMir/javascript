const buttons =document.querySelectorAll('.btn')
const body =document.querySelector('body')
console.log(buttons);

// evnt ko aik function mae lay sakty or us k sath koi activity kar saktay

buttons.forEach(function (btn){
    console.log(btn);
    btn.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        body.style.backgroundColor = e.target.id;
    })
  
});

