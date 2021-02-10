document.getElementById('btn').addEventListener('click', 
function() {
	document.querySelector('.bg-modal-lg').style.display = 'flex';
});
document.querySelector('.close-lg').addEventListener("click", function() {
	document.querySelector('.bg-modal-lg').style.display = 'none';
});

document.getElementById('rbtn').addEventListener('click', 
function() {
	document.querySelector('.bg-modal-rg').style.display = 'flex';
});
document.querySelector('.close-rg').addEventListener("click", function() {
	document.querySelector('.bg-modal-rg').style.display = 'none';
});

document.getElementById('bag-btn').addEventListener('click', 
function() {
	document.querySelector('.bg-modal-bag').style.display = 'block';
});
document.querySelector('.close-bag').addEventListener("click", function() {
	document.querySelector('.bg-modal-bag').style.display = 'none';
});