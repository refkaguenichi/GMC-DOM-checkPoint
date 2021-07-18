// Import variables
let btnPlus = Array.from(document.getElementsByClassName("btn-plus"))
let btnMinus = Array.from(document.getElementsByClassName("btn-minus"))
let qte = Array.from(document.getElementsByClassName("quantity"))
let price=Array.from(document.getElementsByClassName("price"))
let btnLike = Array.from(document.getElementsByClassName("btn-like"))
let btnRemove = Array.from(document.getElementsByClassName("btn-remove"))
let like=Array.from(document.getElementsByClassName("fa-heart"))
let remove=Array.from(document.getElementsByClassName("fa-trash-alt"))
let cartPlus = document.querySelector(".fa-cart-plus")
let totalPrice = document.getElementById("tolal-price")

// Events
//Incrementation
for (let i = 0; i< btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function () {
  btnPlus[i].nextElementSibling.innerHTML++
  total()
}); 
}

//Decrementation
for (let i = 0; i< btnMinus.length; i++) {
  btnMinus[i].addEventListener("click", function () {
  if (qte[i].innerHTML>0) {
     btnMinus[i].previousElementSibling.innerHTML--
  }
  total()
   cartPlus.style.color='red'
});
}


//Like
for (let i = 0; i< btnLike.length; i++) {
  btnLike[i].addEventListener("click", function () {
if (like[i].style.color==='red') {
  like[i].style.color='black'
}else
like[i].style.color='red'
}); }


//Remove
for (let i = 0; i< btnRemove.length; i++) {
  btnRemove[i].addEventListener("click", function () {
btnRemove[i].parentElement.parentElement.remove();
total()
});
}


//total price
function total() {
let qte = Array.from(document.getElementsByClassName("quantity"))
let price=Array.from(document.getElementsByClassName("price"))
let sum=0
  for (let i = 0; i < price.length; i++) {
  sum+=price[i].innerHTML.replace("TND", " ")*qte[i].innerHTML
  }
  totalPrice.innerHTML=sum+" TND"
}



