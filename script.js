//recupration des elements DOM
let btnPlusAll = document.querySelectorAll('.qty-plus')
let btnMinusAll = document.querySelectorAll('.qty-Minus')
let addButton = document.querySelector('.article')
let btnSup = document.querySelector('.supr')
//branchement des evenements 

btnPlusAll.forEach((btn)=>{btn.addEventListener('click',increaseQuantity)});
btnMinusAll.forEach((btn)=>{btn.addEventListener('click',decreaseQuantity)});

addButton.addEventListener('click',addArticle);
btnSup.addEventListener('click',supArticle);


//mes functons 
function increaseQuantity(){
    this.previousElementSibling.value = parseInt(this.previousElementSibling.value) +1;
    document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value) +1;
    prixtotal(this);
}


function decreaseQuantity(){
    if(this.nextElementSibling.value >0)
    this.nextElementSibling.value = parseInt(this.nextElementSibling.value) -1;
   prixtotal(this);
} 

function prixtotal(elt){
let prix = parseInt(elt.parentElement.nextElementSibling.innerText);
let qty = parseInt(elt.previousElementSibling.value); 
let prixt = prix*qty;

elt.parentElement.nextElementSibling.nextElementSibling.innerText = prixt + 'euro';

}


function addArticle(){
   
    document.querySelector('.all-products').innerHTML = document.querySelector('.all-products').innerHTML + '<tr><td><img src="image/montre rolex.jpg" alt="montre rolexs" srcset="" width="100px" height="100px"></td><td><button class="qty-Minus" type="button" id="1">-</button><input class="qty" type="number"readonly placeholder="prix unitaire"value="1"><button class="qty-plus" type="button" id="1">+</button></td><td class="prix">5000 euro</td><td class="prixtotal">5000 euro</td></tr>'
    loadNewElement();
} 

function loadNewElement(){
    let btnPlusAll = document.querySelectorAll('.qty-plus');
    let btnMinusAll = document.querySelectorAll('.qty-Minus');
   
    btnPlusAll.forEach((btn)=>{btn.addEventListener('click',increaseQuantity)});
    btnMinusAll.forEach((btn)=>{btn.addEventListener('click',decreaseQuantity)});
} 





function supArticle(){
    // Trouver la ligne parente du bouton "supr"
    let articleRow = this.closest('tr')
    // Supprimer la ligne de la table
    articleRow.remove();
}




