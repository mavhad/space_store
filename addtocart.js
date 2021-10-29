
var addItemID = 0;
function addToCart(item){
    addItemID +=1
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('card-like');
    selectedItem.setAttribute('id',addItemID);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;
    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);
    var cartItem = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    cartItem.append(selectedItem);


}