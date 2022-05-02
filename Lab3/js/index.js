document.querySelector('.btn').addEventListener('click', function () {
   document.querySelector('.transition').classList.add('show');
});

document.querySelector('.overlay').addEventListener('click', function () {
   document.querySelector('.transition').classList.remove('show');
});




