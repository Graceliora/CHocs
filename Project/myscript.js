var menu = document.getElementById("menu");
function Show() {
menu.classList.add("_Menus-show");
}

function Hide(){
menu.classList.remove("_Menus-show");
}

var modal = document.getElementById("myModal");

var btn1 = document.getElementById("image1");
var btn2 = document.getElementById("image2");
var btn3 = document.getElementById("image3");
var btn4 = document.getElementById("image4");

var span = document.getElementsByClassName("closemodal")[0];

btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}
btn4.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function function1() {
  var checkBox = document.getElementById("darkChocolate");

  var text = document.getElementById("text1");
  var qty = document.getElementById("quantity1")

  if (checkBox.checked == true){
    text.style.display = "block";
    qty.style.display = "block";
  } else {
    text.style.display = "none";
    qty.style.display = "none";
  }
}

function function2() {
  var checkBox = document.getElementById("lavaCake");

  var text = document.getElementById("text2");
  var qty = document.getElementById("quantity2")

  if (checkBox.checked == true){
    text.style.display = "block";
    qty.style.display = "block";
  } else {
    text.style.display = "none";
    qty.style.display = "none";
  }
}

function function3() {
  var checkBox = document.getElementById("butterFlower");

  var text = document.getElementById("text3");
  var qty = document.getElementById("quantity3")

  if (checkBox.checked == true){
    text.style.display = "block";
    qty.style.display = "block";
  } else {
    text.style.display = "none";
    qty.style.display = "none";
  }
}

function function4() {
  var checkBox = document.getElementById("whiteChoc");

  var text = document.getElementById("text4");
  var qty = document.getElementById("quantity4")

  if (checkBox.checked == true){
    text.style.display = "block";
    qty.style.display = "block";
  } else {
    text.style.display = "none";
    qty.style.display = "none";
  }
}

function function5() {
  var checkBox = document.getElementById("mountLava");

  var text = document.getElementById("text5");
  var qty = document.getElementById("quantity5")

  if (checkBox.checked == true){
    text.style.display = "block";
    qty.style.display = "block";
  } else {
    text.style.display = "none";
    qty.style.display = "none";
  }
}

function function6() {
  var checkBox = document.getElementById("whiteForest");

  var text = document.getElementById("text6");
  var qty = document.getElementById("quantity6")

  if (checkBox.checked == true){
    text.style.display = "block";
    qty.style.display = "block";
  } else {
    text.style.display = "none";
    qty.style.display = "none";
  }
}

function function7() {
  var checkBox = document.getElementById("creamyButter");

  var text = document.getElementById("text7");
  var qty = document.getElementById("quantity7")

  if (checkBox.checked == true){
    text.style.display = "block";
    qty.style.display = "block";
  } else {
    text.style.display = "none";
    qty.style.display = "none";
  }
}

function function8() {
  var checkBox = document.getElementById("berryCreamy");

  var text = document.getElementById("text8");
  var qty = document.getElementById("quantity8")

  if (checkBox.checked == true){
    text.style.display = "block";
    qty.style.display = "block";
  } else {
    text.style.display = "none";
    qty.style.display = "none";
  }
}

function function9() {
  var checkBox = document.getElementById("wallCreamy");

  var text = document.getElementById("text9");
  var qty = document.getElementById("quantity9")

  if (checkBox.checked == true){
    text.style.display = "block";
    qty.style.display = "block";
  } else {
    text.style.display = "none";
    qty.style.display = "none";
  }
}

function function10() {
  var checkBox = document.getElementById("chocoDonut");

  var text = document.getElementById("text10");
  var qty = document.getElementById("quantity10")

  if (checkBox.checked == true){
    text.style.display = "block";
    qty.style.display = "block";
  } else {
    text.style.display = "none";
    qty.style.display = "none";
  }
}

function function11() {
  var checkBox = document.getElementById("layerCake");

  var text = document.getElementById("text11");
  var qty = document.getElementById("quantity11")

  if (checkBox.checked == true){
    text.style.display = "block";
    qty.style.display = "block";
  } else {
    text.style.display = "none";
    qty.style.display = "none";
  }
}

function function12() {
  var checkBox = document.getElementById("chocoBall");

  var text = document.getElementById("text12");
  var qty = document.getElementById("quantity12")

  if (checkBox.checked == true){
    text.style.display = "block";
    qty.style.display = "block";
  } else {
    text.style.display = "none";
    qty.style.display = "none";
  }
}


function validate() {
  var name = document.forms["personalDetails"]["name"];

  if(name.value.length < 5) {
      document.getElementById("errorName").innerHTML = "Your name is invalid";
  }

  var phone = document.forms["personalDetails"]["phone"];

  if(phone.length!=12 && isNaN(phone.value)) {
    document.getElementById("errorPhone").innerHTML = "Your phone number is invalid";
  } else if (phone.value == ""){
    document.getElementById("errorPhone").innerHTML = "Your phone number is invalid";
  }

  var email = document.forms["personalDetails"]["email"];

  if(email.value.endsWith("@gmail.com") == false) {
    document.getElementById("errorEmail").innerHTML = "Your email is invalid";
  }

  var address = document.forms["personalDetails"]["address"];

  if(address.value.length < 10) {
    document.getElementById("errorAddress").innerHTML = "Your address is invalid";
  }

  var menu1 = document.getElementById("darkChocolate");
  var menu2 = document.getElementById("lavaCake");
  var menu3 = document.getElementById("butterFlower");
  var menu4 = document.getElementById("whiteChoc");
  var menu5 = document.getElementById("mountLava");
  var menu6 = document.getElementById("whiteForest");
  var menu7 = document.getElementById("creamyButter");
  var menu8 = document.getElementById("berryCreamy");
  var menu9 = document.getElementById("wallCreamy");
  var menu10 = document.getElementById("chocoDonut");
  var menu11 = document.getElementById("layerCake");
  var menu12 = document.getElementById("chocoBall");

  if(!menu1.checked && !menu2.checked && !menu3.checked && !menu4.checked && !menu5.checked && !menu6.checked && !menu7.checked && !menu8.checked && !menu9.checked && !menu10.checked && !menu11.checked && !menu12.checked) {
    alert("Choose your chocolates");
  }


}