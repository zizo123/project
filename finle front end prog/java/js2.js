let userData = JSON.parse(localStorage.getItem('data'))
let userlogin
userData.forEach(user => {
    userlogin =user.userName
});

document.getElementById('login').innerHTML =`Hi ${userlogin}`
window.addEventListener('scroll',function(){
    let windowScroll =window.scrollY
    if(windowScroll > 100){
        $('.navbar').animate({'top':'0px' , 'width':'100%'})
        $('.to-up').css('display', 'flex')
    }
    else if (windowScroll < 100)
    {
        $('.navbar').animate({'top':'50px','width':'70%'})
        $('.to-up').css('display', 'none')
    }
    $('.to-up').click(()=>window.scrollTo(0,0)  )
})
let random = document.querySelectorAll('#review-random')

function randomReviews(){
    for (let i = 0; i < random.length; i++) {
        random[i].innerHTML =  Math.round(Math.random()*5000)+`K`
        
    }
}

setInterval( randomReviews , 2000)
let logOutBtn = document.getElementById('logOutBtn')
logOutBtn.addEventListener('click',function(){
    localStorage.clear(userData)
    window.location.assign('index.html')
})
(document).ready(()=>{
    $('#isLoading img').fadeOut(2000 ,()=>{
       $('#isLoading img').slideUp(2000 ,()=>{
           $('#isLoading').remove()
           $('body').css('overflow','auto')
       })
    })
   })
// await $('#isloading').hide(3000)
// setInterval(()==>{
//     let body2=document.getElementById('body2')
//     body2.classlist.remove('overflow-hidden')
// },3000);
