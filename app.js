const menuIcon = document.querySelector('.nav-menu-icon');
const containerModalMenu = document.querySelector('.container-modal-menu');
const modalCloseIcon = document.querySelector('.modal-close-icon');
const modalTextHome = document.querySelector('.modal-text-home');
const navShopping = document.querySelector('.nav-shopping');
const modalCart = document.querySelector('.modal-cart');
const modalCartClose = document.querySelector('.modal-cart-close');
const modalCartHidden = document.querySelector('.modal-cart-hidden');
const modalDarkMode = document.querySelector('.modal-dark-mode');
const btnAdd1 = document.querySelector('.add1');
const btnAdd2 = document.querySelector('.add2');
const btnAdd3 = document.querySelector('.add3');
const navShoppingNotification = document.querySelector('.nav-shopping-notification');
const cartProduct1Hidden = document.querySelector('.cart-product1-hidden');
const cartProduct2Hidden = document.querySelector('.cart-product2-hidden');
const cartProduct3Hidden = document.querySelector('.cart-product3-hidden');
const hoodiesPlus = document.querySelector('.hoodies-plus');
const hoodiesInput = document.querySelector('.hoodies-input');
const hoodiesMinum = document.querySelector('.hoodies-minum');
const products1P = document.querySelector('.products1-p');
const shirtsPlus = document.querySelector('.shirts-plus');
const shirtsInput = document.querySelector('.shirts-input');
const shirtsMinum = document.querySelector('.shirts-minum')
const products2P = document.querySelector('.products2-p');
const sweatshirtsPlus = document.querySelector('.sweatshirts-plus');
const sweatshirtsInput = document.querySelector('.sweatshirts-input');
const sweatshirtsMinum = document.querySelector('.sweatshirts-minum');
const products3P = document.querySelector('.products3-p');
const items = document.querySelector('.items');
let clothes1 = 0;
let clothes2 = 0;
let clothes3 = 0;

menuIcon.addEventListener('click', ()=>{    
    containerModalMenu.classList.toggle('show');
});
modalCloseIcon.addEventListener('click', ()=>{
    containerModalMenu.classList.toggle('show');
});
modalTextHome.addEventListener('click', ()=>{
    containerModalMenu.classList.toggle('show');
});
navShopping.addEventListener('click', ()=>{
    modalCart.classList.toggle('show');
    if (navShopping.innerText === "0"){
    modalCartHidden.style.display = "block";
    } else {
    modalCartHidden.style.display ="none"
    };
});
modalCartClose.addEventListener('click', (e)=>{
    modalCart.classList.toggle('show');
    modalCartHidden.classList.toggle('show');
});
modalDarkMode.addEventListener('click',()=>{
    modalCart.classList.toggle('show');
    modalCartHidden.classList.toggle('show');
});
btnAdd1.addEventListener('click', (e)=>{
    clothes1++;
    navShoppingNotification.innerText = (clothes1 + clothes2 + clothes3);
    hoodiesInput.value = clothes1;
    items.innerHTML =`${(clothes1 + clothes2 + clothes3)} items`
    if(e.isTrusted === true){
        cartProduct1Hidden.style.display = 'block';  
    }
});
btnAdd2.addEventListener('click', (e)=>{
    clothes2++;
    navShoppingNotification.innerText = (clothes2 + clothes1 +clothes3);
    shirtsInput.value = clothes2;
    items.innerHTML =`${(clothes1 + clothes2 + clothes3)} items`
    if(e.isTrusted === true){
        cartProduct2Hidden.style.display ='block';
    }
});
btnAdd3.addEventListener('click', (e)=>{
    clothes3++;
    navShoppingNotification.innerText = (clothes1 + clothes2 + clothes3);
    sweatshirtsInput.value = clothes3;
    items.innerHTML =`${(clothes1 + clothes2 + clothes3)} items`
    if(e.isTrusted === true){
        cartProduct3Hidden.style.display = 'block';  
    }
});
hoodiesPlus.addEventListener('click',(e)=>{
    clothes1++;
    navShoppingNotification.innerText = (clothes1 + clothes2 + clothes3);
    hoodiesInput.value = clothes1;
    items.innerHTML =`${(clothes1 + clothes2 + clothes3)} items`
    if(hoodiesInput.value > 10){
        hoodiesInput.value = 10;
    }else{
        products1P.innerHTML = `Subtotal: $${hoodiesInput.value * 14}.00`;
    }
});
shirtsPlus.addEventListener('click',(e)=>{
    clothes2++;
    navShoppingNotification.innerText = (clothes1 + clothes2 + clothes3);
    shirtsInput.value = clothes2;
    items.innerHTML =`${(clothes1 + clothes2 + clothes3)} items`
    if(shirtsInput.value > 15){
        shirtsInput.value = 15;
    }else{
        products2P.innerHTML = `Subtotal: $${shirtsInput.value * 24}.00`;
    }
});
sweatshirtsPlus.addEventListener('click',(e)=>{
    clothes3++;
    navShoppingNotification.innerText = (clothes1 + clothes2 + clothes3);
    sweatshirtsInput.value = clothes3;
    items.innerHTML =`${(clothes1 + clothes2 + clothes3)} items`
    if(sweatshirtsInput.value > 20){
        sweatshirtsInput.value = 20;
    }else{
        products3P.innerHTML = `Subtotal: $${sweatshirtsInput.value * 24}.00`;
    }
});
hoodiesMinum.addEventListener('click',(e)=>{
    clothes1--;
    navShoppingNotification.innerText = (clothes1 - clothes2 - clothes3);
    hoodiesInput.value = clothes1;
    items.innerHTML =`${(clothes1 - clothes2 - clothes3)} items`
    if(hoodiesInput.value < 1){
        cartProduct1Hidden.style.display = 'none';  
    }else{
        products1P.innerHTML = `Subtotal: $${hoodiesInput.value * 14}.00`;
    }
});
shirtsMinum.addEventListener('click',(e)=>{
    clothes2--;
    navShoppingNotification.innerText = (clothes1 - clothes2 - clothes3);
    shirtsInput.value = clothes2;
    items.innerHTML =`${(clothes1 - clothes2 - clothes3)} items`
    if(shirtsInput.value < 1){
        cartProduct2Hidden.style.display = 'none';  
    }else{
        products2P.innerHTML = `Subtotal: $${shirtsInput.value * 24}.00`;
    }
});
sweatshirtsMinum.addEventListener('click',(e)=>{
    clothes3--;
    navShoppingNotification.innerText = (clothes1 - clothes2 - clothes3);
    sweatshirtsInput.value = clothes3;
    items.innerHTML =`${(clothes1 - clothes2 - clothes3)} items`
    if(sweatshirtsInput.value < 1){
        cartProduct3Hidden.style.display = 'none';  
    }else{
        products3P.innerHTML = `Subtotal: $${sweatshirtsInput.value * 24}.00`;
    }
});