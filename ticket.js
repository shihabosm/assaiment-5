const button=document.getElementsByClassName('sits')
// console.log(button)
let count=0;
for(const btn of button){
  

    
    btn.addEventListener('click',function(event){
       
        
       count=count+1;
        if(count>=5){
            alert ('Please select below 4 seats ')
            return;
        }
        if(count===4){
            const buttonNext=document.getElementById('apply')
            buttonNext.removeAttribute('disabled')

        }
        // -----------------------------------------------------------------------------------
        document.getElementById('phone-number').addEventListener('keyup',function(event){
            const number=event.target.value.length
           
            
            if(count > 0 && number===11){
                const buttonNext=document.getElementById('btn-next')
                buttonNext.removeAttribute('disabled')
            }
            else{
                  const buttonNext=document.getElementById('btn-next')
                buttonNext.setAttribute('disabled',true)
        
            }
        })
        // --------------------------------------------------------------------
        event.target.style.backgroundColor='#1DD100'
        event.target.setAttribute('disabled',true)
        const seatName=event.target.innerText;
        
        const seatprice= 550;
        
        // -------------------------
        const selectedContainer=document.getElementById('append-container');

        const li=document.createElement('li');
        const p=document.createElement('p');
        p.innerText=seatName
        const p2=document.createElement('p');
        p2.innerText=seatprice;
        const p3=document.createElement('p');
        p3.innerText='Economic'
        li.appendChild(p)
        li.appendChild(p3)
        li.appendChild(p2)
        
        selectedContainer.appendChild(li)


        // ------------------------


// parseInt function call
        const sitNumber=parseIntText('sits-number')
        const sitAdd=parseIntText('sits-add')
        const totalPrice=parseIntText('total-price')
        const grandPrice=parseIntText('grand-price')
// innerValue change function call
        setInnerText('sits-number',sitNumber-1)
        setInnerText('sits-add',sitAdd+1)
        setInnerText('total-price',totalPrice+seatprice)
        setInnerText('grand-price',grandPrice+seatprice)
       
    })
}
// innerText
function setInnerText(elementById,value){
    document.getElementById(elementById).innerText=value
}

// parseInt 
function parseIntText(elementById){
    const sitAdd=document.getElementById(elementById).innerText
    const sit =parseInt(sitAdd)
    return sit;
}

const cuponInput = document.getElementById('apply');

cuponInput.addEventListener('click', function discount(event) {
    const value = document.getElementById('cupon-input').value
    console.log(value)
   
    
    if (  value === 'NEW15') {

    

        const grandPrice=parseIntText('total-price');
        const grandDiscount=grandPrice*(15/100)
        setInnerText('grand-price',grandPrice-grandDiscount)
        const cuponInput = document.getElementById('cupon-input');
    cuponInput.classList.add('hidden')
        const applyButton = document.getElementById('apply');
        applyButton.classList.add('hidden')
       
    } else  if(value==='Couple 20'){



      const grandPrice=parseIntText('total-price');
        const grandDiscount=grandPrice*(20/100)
        setInnerText('grand-price',grandPrice-grandDiscount)
        const cuponInput = document.getElementById('cupon-input');
        cuponInput.classList.add('hidden')
            const applyButton = document.getElementById('apply');
            applyButton.classList.add('hidden')
    }
    else{
     
        const grandPrice=parseIntText('total-price');
        const grandDiscount=0;
        setInnerText('grand-price',grandPrice-grandDiscount)

    }
        
    
});



// --------------------------------------------------
// next button
// const phoneNumber=document.getElementById('phone-number').addEventListener('keyup',function(event){
//     const number=event.target.value.length
   
    
//     if( number>=11){
//         const buttonNext=document.getElementById('btn-next')
//         buttonNext.removeAttribute('disabled')
//     }
//     else{
//           const buttonNext=document.getElementById('btn-next')
//         buttonNext.setAttribute('disabled',true)

//     }
// })

// 
const buttonNext=document.getElementById('btn-next')