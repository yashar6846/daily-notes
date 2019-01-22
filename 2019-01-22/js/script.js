function change(){
   // document.getElementById('d1').innerHTML = "Drod"
   var para = document.getElementById('d1').getElementsByTagName('p')
   for(var i=0;i<para.length;++i){
       para[i].style.color = "red"
       para[i].style.borderWidth = "10px"
       para[i].style.borderStyle = "solid"
       para[i].style.borderColor = "10px"


   }
   document.getElementById('img1').src = " ge.jpg"
}

function childs(){
    alert(document.getElementById('d1').childNodes[1])
}