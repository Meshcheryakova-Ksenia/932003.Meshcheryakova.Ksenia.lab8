function add() {
  var ulp = document.getElementById("ulp");
  var li = document.createElement("li");
  li.className = 'lili';
  var block1 = document.createElement("input");
  var block2 = document.createElement("input");
  var block3 = document.createElement("input");
  var block4 = document.createElement("input");
  var block5 = document.createElement("input");
  block1.setAttribute('type', 'text');
  block1.setAttribute('class', 'inp1');
  block2.setAttribute('type', 'text');
  block2.setAttribute('class', 'inp2');
  block3.setAttribute('type', 'button');
  block3.setAttribute('onclick', 'type1()');
  block3.setAttribute('value', ' ↑ ');
  block4.setAttribute('type', 'button');
  block4.setAttribute('onclick', 'type2()');
  block4.setAttribute('value', ' ↓ ');
  block5.setAttribute('type', 'button');
  block5.setAttribute('onclick', 'type3()');
  block5.setAttribute('value', ' x ');
  li.appendChild(block1);
  li.appendChild(block2);
  li.appendChild(block3);
  li.appendChild(block4);
  li.appendChild(block5);
  ulp.appendChild(li);
}
function save() {
var list = '';
var len = document.querySelector('ul').children.length;
for (var i = 0; i < len; i++) {
		var el1 = document.getElementsByClassName('inp1')[i].value;
		var el2 = document.getElementsByClassName('inp2')[i].value;
		list += '\"'+el1+'\"'+':'+'\"'+el2+'\"'+',';
}
list = list.slice(0,-1);
list = '{'+list+'}';
var dd = document.getElementById("print");
dd.textContent = list;
document.body.appendChild(dd);
}
function type1() {
    var ulp = document.getElementById("ulp");
	var f = event.currentTarget.parentElement;
	return ulp.insertBefore(f, f.previousElementSibling);
}
function type2() {
    var ulp = document.getElementById("ulp");
	var f = event.currentTarget.parentNode;
	return ulp.insertBefore(f.nextElementSibling, f);
}
function type3() {
event.currentTarget.parentElement.remove();
}