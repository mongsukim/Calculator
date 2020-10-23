// 변수 초기화
var title = document.getElementById('title');
var list = document.getElementById('list');
var li = list.getElementsByTagName('li');
var addBtn = document.getElementById('add-btn');

for(var i = 0; i <li.length; i++){
  li[i].addEventListener('click', activeItem);
}

function activeItem(){
  //해당 목록을 클릭하면 제목 영역에 표시
  title.innerHTML = this.innerText;
  this.setAttribute('class', 'active');
}


//제목입력
addBtn.addEventListener('click', function(){
  var txt = prompt('제목 입력');
  list.innerHTML += '<li>' + txt + '</li>';
});
