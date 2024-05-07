var productcontainer=document.getElementById("product")
var search=document.getElementById("search")
var prodcutlist=productcontainer.querySelectorAll("div")
console.log(prodcutlist.length);

search.addEventListener("keyup",function (){
    var entervalue=event.target.value

    for(i=0;i<prodcutlist.length;i=i+1)
    {
        var productname=prodcutlist[i].querySelector("p").textContent
        if(productname.indexOf(entervalue)<0){
            prodcutlist[i].style.display="none"
            
        }
        else{
            prodcutlist[i].style.display="block"
        }
    }
    
})