// showdata();
// showdata();
// show();
// var demo;
// var addbtn=document.getElementById('addbtn');
// document.getElementById('addbtn').addEventListener('click',start);
// function start(){
// if(document.getElementById('subName').value=="" || document.getElementById('linkTxt').value==""){
//     alert("Please enter Subject name and Link ");
// }else{

// var subTex=document.getElementById('subName');
// var subLink=document.getElementById('linkTxt');

// var sName=localStorage.getItem("subName");
// var links=localStorage.getItem("alllinks");
// if(sName==null){
//     datas=[];
//     linksArray=[];
// }else{
//     datas=JSON.parse(sName);
//     linksArray=JSON.parse(links);
//     console.log(datas);
// }
// datas.push(subTex.value);
// //linksArray.push(subLink.value);
// linksArray.push(subLink.value);
// localStorage.setItem("subName",JSON.stringify(datas));
// localStorage.setItem("alllinks",JSON.stringify(linksArray));
// console.log(datas);
// subTex.value="";
// subLink.value="";

// // show();

// function showdata(){
//     let sName=localStorage.getItem("subName");
//     let links=localStorage.getItem("alllinks");
// if(sName==null){
//     datas=[];
//     linksArray=[];
// }else{
//     datas=JSON.parse(sName);
//     linksArray=JSON.parse(links);
//     console.log(datas);
// }
// var htmls="";

// datas.forEach(function(element1,index){
//     htmls +=`<div class="div-links">
//         <h5>${element1}</h5>
//         <div>
//           <button type="button" id="golink" class="btn btn-success"><a  href="${linksArray[index]}" target="_blank">Open</a></button>
//           <button type="button" id="removelink" class="btn btn-danger">❌</button>
//           <!-- </div> -->
//         </div>
//       </div> `;

// });
// var dataele=document.getElementById('link-box');
// if(sName.length!=0){

//     dataele.innerHTML=htmls;
//     }
// };
// //   showdata();

// }
// demo=showdata;
// return{
//     showdata
// };
// };
// var x=start();
// x();
// demo();

showdata();
addbtn.addEventListener("click", function (e) {
  var subTex = document.getElementById("subName");
  var subLink = document.getElementById("linkTxt");
  if (subTex.value == "" || subLink.value=="") {
    alert("Please enter Subject and link");
    return;
  }

  var sName = localStorage.getItem("subName");
  var links = localStorage.getItem("alllinks");
  if (sName == null) {
    datas = [];
    linksArray = [];
  } else {
    datas = JSON.parse(sName);
    linksArray = JSON.parse(links);
    console.log(datas);
  }
  datas.push(subTex.value);
  linksArray.push(subLink.value);
  localStorage.setItem("subName", JSON.stringify(datas));
  localStorage.setItem("alllinks", JSON.stringify(linksArray));
  console.log(datas);
  subTex.value = "";
  subLink.value = "";
length
  showdata();
  location.reload();
});
function showdata() {
  let sName = localStorage.getItem("subName");
  let links = localStorage.getItem("alllinks");
  if (sName == null) {
    datas = [];
    linksArray = [];
  } else {
    datas = JSON.parse(sName);
    linksArray = JSON.parse(links);
    console.log(datas);
  }
  var htmls = "";

  datas.forEach(function (element1, index) {
    htmls += `<div class="div-links">
        <h5>${element1}</h5>
        <div>
          <button type="button" id="golink" class="btn btn-success"><a  href="${linksArray[index]}" target="_blank">Open</a></button>
          <button type="button" id="${index}"  class="btn btn-danger">❌</button>
          <!-- </div> -->
        </div>
      </div> `;
  });
  var dataele = document.getElementById("link-box");
  if ( sName != null && sName.length != 0) {
    dataele.innerHTML = htmls;
  }
}

function deletelink(index) {
  let sName = localStorage.getItem("subName");
  let links = localStorage.getItem("alllinks");
  if (sName == null) {
    datas = [];
    linksArray = [];
  } else {
    datas = JSON.parse(sName);
    linksArray = JSON.parse(links);
    console.log(datas);
  }
  datas.splice(index,1);
  linksArray.splice(index,1);
  localStorage.setItem("subName", JSON.stringify(datas));
  localStorage.setItem("alllinks", JSON.stringify(linksArray));
  showdata();

}
var del=document.getElementsByClassName('btn-danger');
for(let i=0;i<del.length;i++){
    del[i].addEventListener('click',function(){
        location.reload();
        deletelink(i)
        
        });
        

    
}



