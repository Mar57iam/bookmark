var siteName = document.getElementById('siteName');
var webUrl = document.getElementById('webUrl');
var lightBoxContainer = document.querySelector(".lightBoxContainer");
var close = document.querySelector('#close')

var list;
if(localStorage.getItem('Site')==null){
    list=[];
}else{
   list = JSON.parse(  localStorage.getItem('Site'));
  display();

}
function addSite(){

    if(siteName.classList.contains('is-valid')&&webUrl.classList.contains('is-valid'))
      {
        var site = {
            code: siteName.value,
            url:webUrl.value,
          }
          list.push(site);
          localStorage.setItem('Site' , JSON.stringify(list));
          display();
          clear();
           } else{
            lightBoxContainer.classList.remove('d-none')
           }
    }


 function clear(){
 siteName.value = null;
 webUrl.value = null
 }
 function display(){
  
  var cartona =``;
  for(  var i = 0 +1 ; i<list.length ;i++   ){
     cartona+= `

     <div class="col-lg-3">
                <div class="main text-center ">
                 <h2 class="h6 mt-2">${i}</h2>
                </div>
            </div>
            <div class="col-lg-3 mt-2">
                <div class="main text-center">
                 <h2 class="h6">${list[i].code}</h2>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="main text-center ">
                    <button onclick="getUrl(${i})" id="myBtn"  type="button" class="btn fs-6 text-white mt-2">  <i class="fa-solid fa-eye me-2" style="color: #ffffff;"></i>Vist</button>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="main text-center">
                    <button onclick="deleteEle(${i})" type="button" class="btn btn-danger mt-2 text-white  "><i class="fa-regular fa-trash-can me-2" style="color: #ffffff;"></i>Delete</button>
                </div>
            </div>
            `
  }
  document.getElementById('myRow').innerHTML= cartona;
 }


 function deleteEle(index){
  list.splice(index,1);
  localStorage.setItem('Site' , JSON.stringify(list));
display();
  
 }
 
 function getUrl(index) {
    var url = list[index].url;

    if (url) {
      window.open(url, "_blank"); 
    } else {
      alert("No URL available!");
    }
  }

  function validateInputs(element){
   var regex ={
    siteName : /^[A-Z][a-z]{2,}$/,
    webUrl : /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/.*)?$/
   }

 if(    regex[element.id].test(element.value) ==true   ){
   element.classList.add('is-valid');
   element.classList.remove('is-invalid');
   element.nextElementSibling.classList.add('d-none');


    
 }else{
    console.log('not match');
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    element.nextElementSibling.classList.remove('d-none');

 }
    
}

close.addEventListener('click' , function(){
  lightBoxContainer.classList.toggle( 'd-none')
})