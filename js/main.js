document.querySelector('.info').addEventListener('click', function(){
    document.querySelector('.guide').style.display = 'block';
})
document.querySelector('.guide').addEventListener('mouseout', function(){
    document.querySelector('.guide').style.display = 'none';
})