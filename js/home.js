$(document).ready(function(){$(".owl-carousel").owlCarousel();},
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:
    {
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
   

        })  
           
          );

        


let x=document.querySelectorAll('.ul button');
let active=document.getElementsByClassName(' bt-active');

console.log(active)
function activeClass(){
    //add active class to btn
    if (active.length>0) 
    {
      active[0].className=active[0].className.replace('bt-active'," ")
    }
    this.className+= ' bt-active ';
    
    //show and hidden product
    var data=this.getAttribute('data-class'),all=document.getElementsByClassName('all');
    console.log( data)
    console.log( all[0])
    if(data==="all")
    {
            for(i=0;i<all.length;i++)
            {
                    console.log(all[i].className==="all a"  )

                

                    all[i].style.display="block"  ;

            }
    }
    if(data==="Samsung")
    {
            for(i=0;i<all.length;i++)
            {
                    console.log(all[i].className==="all Samsung"  )

                    if(all[i].className!=="all Samsung"){all[i].style.display="none"  ;}  
                    else if(all[i].className==="all Samsung"){all[i].style.display="block"  ;}



            }
    }

            if(data==="Apple")
            {
                for(i=0;i<all.length;i++)
                {
                        console.log(all[i].className==="all Apple"  )
    
                        if(all[i].className!=="all Apple"){all[i].style.display="none"  ;}
                        else if(all[i].className==="all Apple"){all[i].style.display="block"  ;}
    
    
                }
            }
   

            if(data==="Redmi")
            {
                for(i=0;i<all.length;i++)
                {
                        console.log(all[i].className==="all Redmi"  )
    
                        if(all[i].className!=="all Redmi"){all[i].style.display="none"  ;}
                        else if(all[i].className==="all Redmi"){all[i].style.display="block"  ;}
    
    
                }
            }


        }
for(i=0;i<x.length;i++){x[i].addEventListener('click',activeClass)}
// end show and hidden product
    
let img=document.getElementsByClassName("img-detailes");
    console.log(img);
    
    for(i=0;i<img.length;i++)
    {
     img[i].addEventListener('click',function(){console.log("tetet");window.location="product-detailes.html"})
    }

    //blog slider
    
    
         
