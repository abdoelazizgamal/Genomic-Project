let header = document.querySelector(".header")
window.addEventListener("scroll",()=>{
    window.scrollY > 100 ? header.classList.add("scrolled") : header.classList.remove("scrolled") ; 
})

const bars = document.querySelector('.bars');
const nav = document.querySelector('.nav');
bars.addEventListener('click', () => {
	nav.classList.toggle('active');
    bars.classList.toggle("closed")
})

window.addEventListener("load",()=>{
    setTimeout(()=>{
        document.querySelector(".preloader").classList.add("hidden");
    },2000)
    setTimeout(()=>{
        document.querySelector(".text").classList.add("open")
        document.querySelector(".dna").classList.add("open")   
    })
})


let buttons = document.querySelectorAll('.buttons a');

['mouseenter','mouseleave'].forEach((event)=>{
	buttons.forEach(button=>{
		button.addEventListener(event , function(e){
			let div = button.querySelector('div');
			div.style.left = `${e.offsetX}px`;
			div.style.top = `${e.offsetY}px`;
		});
	})
    
});
let secondSection = document.querySelector(".second"),
    secondBtn = document.querySelector(".btn-1");
secondBtn.addEventListener("click",()=>{
    secondSection.scrollIntoView({
        behavior : "smooth"
    })
})
let thirdSection = document.querySelector(".third"),
    ThirdBtn = document.querySelector(".btn-2");
ThirdBtn.addEventListener("click",()=>{
    thirdSection.scrollIntoView({
        behavior : "smooth"
    })
})


let tabsContainer = document.querySelector('.tabs'),
    tabs = document.querySelectorAll('.tabs li'),
    selector = document.querySelector('.selector');
function AnimateSelector()
{
    let activeItem = tabsContainer.querySelector('.active');
    selector.style.width = activeItem.offsetWidth + 'px';
    selector.style.left = activeItem.offsetLeft + 'px';
}


//Navigation 
let links = document.querySelectorAll(".nav li a"),
    sections = document.querySelectorAll("section");
links.forEach((link,index)=>{
    link.addEventListener("click",()=>{
        nav.classList.toggle('active');
        bars.classList.toggle("closed")
        setTimeout(()=>{
            sections[index].scrollIntoView({
                behavior : "smooth"
            })
        },400)
    })
})



////////////////////
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });


/********************************** *************************/
const CategoryData = [
    {
        filter : "cancer",
        img : "./images/cards/1.jfif",
        text : "Breast Cancer"
    },
    {
        filter : "syndrome",
        img : "./images/cards/2.jpg",
        text : "Antiphospholipid Syndrome"
    },
    {
        filter : "diseases",
        img : "./images/cards/3.png",
        text : "Crohn's Disease"
    },
    {
        filter : "others",
        img : "./images/cards/4.png",
        text : "Achondroplasia"
    },
    {
        filter : "cancer",
        img : "./images/cards/5.jpg",
        text : "Colon Cancer"
    },
    {
        filter : "syndrome",
        img : "./images/cards/6.jpg",
        text : "Cri du Chat Syndrome"
    },
    {
        filter : "diseases",
        img : "./images/cards/7.jpg",
        text : "Dercum Disease"
    },
    {
        filter : "others",
        img : "./images/cards/8.jpg",
        text : "Autism"
    },
    {
        filter : "cancer",
        img : "./images/cards/9.jpg",
        text : "Skin Cancer"
    },
    {
        filter : "syndrome",
        img : "./images/cards/10.jpg",
        text : "Down Syndrome"
    },
    {
        filter : "diseases",
        img : "./images/cards/11.jpg",
        text : "Gaucher Disease"
    },
    {
        filter : "others",
        img : "./images/cards/12.jpg",
        text : "Cystic Fibrosis"
    },
    {
        filter : "cancer",
        img : "./images/cards/13.jpg",
        text : "Prostate Cancer"
    },
    {
        filter : "others",
        img : "./images/cards/34.jfif",
        text : "Spinal Muscular Atrophy"
    },
    {
        filter : "syndrome",
        img : "./images/cards/14.jfif",
        text : "Duane Syndrome"
    },
    {
        filter : "diseases",
        img : "./images/cards/15.png",
        text : "Huntington's Disease"
    },
    {
        filter : "others",
        img : "./images/cards/16.jpg",
        text : "Hemochromatosis"
    },
    {
        filter : "syndrome",
        img : "./images/cards/17.jpg",
        text : "Fragile X Syndrome"
    },
    {
        filter : "others",
        img : "./images/cards/33.jfif",
        text : "Progeria"
    },
    {
        filter : "diseases",
        img : "./images/cards/18.jpg",
        text : "Parkinson's Disease"
    },
    {
        filter : "others",
        img : "./images/cards/19.jpg",
        text : "Hemophilia"
    },
    {
        filter : "syndrome",
        img : "./images/cards/20.jpg",
        text : "Klinefelter Syndrome"
    },
    {
        filter : "diseases",
        img : "./images/cards/21.jfif",
        text : "Tay-Sachs Disease"
    },
    {
        filter : "others",
        img : "./images/cards/21.jpg",
        text : "Holoprosencephaly"
    },
    {
        filter : "syndrome",
        img : "./images/cards/22.png",
        text : "Marfan Syndrome"
    },
    {
        filter : "diseases",
        img : "./images/cards/23.jpg",
        text : "Sickle Cell Disease"
    },
    {
        filter : "others",
        img : "./images/cards/24.jpg",
        text : "Methylmalonic Acidemia"
    },
    {
        filter : "syndrome",
        img : "./images/cards/25.jfif",
        text : "Noonan Syndrome"
    },
    {
        filter : "others",
        img : "./images/cards/32.jpg",
        text : "Phenylketonuria"
    },
    {
        filter : "diseases",
        img : "./images/cards/26.jpg",
        text : "Wilson Disease"
    },
    {
        filter : "others",
        img : "./images/cards/27.jfif",
        text : "Myotonic Dystrophy"
    },
    {
        filter : "syndrome",
        img : "./images/cards/28.jpg",
        text : "Turner Syndrome"
    },
    {
        filter : "others",
        img : "./images/cards/29.jpg",
        text : "Neurofibromatosis"
    },
    {
        filter : "syndrome",
        img : "./images/cards/30.jpg",
        text : "Velocardiofacial Syndrome"
    },
    {
        filter : "others",
        img : "./images/cards/31.jfif",
        text : "Osteogenesis Imperfecta"
    },
    {
        filter : "others",
        img : "./images/cards/33.jpg",
        text : "Poland Anomaly"
    },
    {
        filter : "others",
        img : "./images/cards/34.jpg",
        text : "Porphyria"
    },
    {
        filter : "others",
        img : "./images/cards/35.webp",
        text : "Retinitis Pigmentosa"
    },
    {
        filter : "others",
        img : "./images/cards/36.jpg",
        text : "Thalassemia"
    },
    {
        filter : "others",
        img : "./images/cards/37.jpg",
        text : "Trimethylaminuria"
    },
]

// Show Categories 
let cardsContainer = document.querySelector(".categories-container .cards")
/* console.log(CategoryData.length); */

Categories()
function Categories()
{
    cardsContainer.innerHTML = "";
    CategoryData.forEach(category=>
    {
        cardsContainer.innerHTML += 
        `
        <div class="card" data-filter="${category.filter}">
            <img src="${category.img}" alt="">
            <div class="bottom"></div>
            <div class="circle">
                <div class="text">${category.text}</div>
                <button>Upload File</button>
            </div>
            <div class="title">${category.filter}</div>
        </div>
    
        `
          
    })
        ////////////////////////////////////////////////////////////////
        
    cards = document.querySelectorAll(".categories-container .card");
    AnimateSelector();
    let activeCategory = document.querySelector('.tabs li.active').dataset.target;
    cards.forEach(card=>{
    if(card.dataset.filter  == activeCategory)
    {
        card.classList.remove("hidden");
        card.classList.add("show");
    }
    else
    {
        card.classList.add("hidden");
        card.classList.remove("show");
    }
    })
    tabs.forEach(tab => {

    tab.addEventListener('click',()=>{
        document.querySelector('.tabs li.active').classList.remove('active')
        tab.classList.add('active');
        AnimateSelector();
        let target = tab.dataset.target ;
        cards.forEach(card=>{
        
            if(target == card.dataset.filter)
            {
                card.classList.remove("hidden");
                card.classList.add("show");
            }
        
            else
            {
                card.classList.add("hidden");
                card.classList.remove("show");
            }
        })

    });
    });
    let popUpButtons = document.querySelectorAll(".circle button");
    let popup = document.querySelector(".popup"),
        popupForm = document.querySelector(".popup .form"),
        closePopup = document.querySelector(".popup .closepopup");
    popUpButtons.forEach(button=>{
            button.addEventListener("click",()=>{
                popup.classList.add("active");
                popupForm.classList.add("active");
            })
    })
    closePopup.addEventListener("click",()=>{
        popup.classList.remove("active");
        popupForm.classList.remove("active");
    })
    
}
