$(function(){
  var box = $(".img-box")[0]; 
  var imgs = $(".imgs");
  var circle = $(".circle");
  var n = 0;
  var right = $(".b-right")[0]; 
  var left = $(".b-left")[0]; 
  var t=setInterval(move,1000);
  function move(type){
      if(type=="l"){
        n--
      if(n<0){
        n=imgs.length-1
      }
     
    }else{
      n++
      if(n>=imgs.length){
      n=0
     }
      
    }
    
    for( var i=0;i<imgs.length;i++){
      imgs[i].style.display="none";
      circle[i].style.background="#ccc";
      }
      imgs[n].style.display="block";
     circle[n].style.background="red"; 
    } 
     box.onmouseover=function(){
           clearInterval(t);
    }
      box.onmouseout=function(){
           t=setInterval(move,1000);
    }
   for(var i=0;i<circle.length;i++){
      circle[i].index=i;
      circle[i].onclick=function(){
          for(var i=0;i<circle.length;i++){
            circle[i].style.background="#ccc";
            imgs[i].style.display="none";
            }
            circle[this.index].style.background="red";
            imgs[this.index].style.display="block";
            n=this.index;
        }
    }
    right.onclick=function(){
      move("r");
    }
    left.onclick=function(){
      move("l");
    }


//turn
    var imgs2 = $(".turn-middle")[0]; 
    var box2 = $(".turn")[0]; 
    var right2 = $(".tn-right")[0]; 
    var left2 = $(".tn-left")[0]; 
    var flag = true;
    var t = setInterval(dong, 10000) 
        function dong() {
            if (!flag) {
                return;
            }
            flag = false;
            var img = getFirst(imgs2); 
            animate(imgs2, {
                left: -285
            }, 2000, function() {
                imgs2.appendChild(img); 
                imgs2.style.left = 0; 
                flag=true;
            })
        }

        function dong1() {
            if (!flag) {
                return;
            }
            flag = false;
            var img = getFirst(imgs2); 
            var img1 = getLast(imgs2); 
            insertBefore(img1, img); 
            imgs2.style.left = -285 + "px"; 
            animate(imgs2, {
                left: 0
            }, 2000,function  () {
                flag=true;
            }) 
        }
    box2.onmouseover=function() {
        clearInterval(t);
    }
     box2.onmouseout=function() {
        t = setInterval(dong, 10000);
    }
    right2.onclick = function() {
        dong1()
    }
    left2.onclick = function() {
        dong()
    }


//导航
    var navs=$(".nav-m")
    var hidden=$(".hidden")
    for(var i=1;i<navs.length;i++){
      navs[i].index=i;
      navs[i].onmouseover=function(){
       hidden[this.index].style.display="block"
      }
      navs[i].onmouseout=function(){
       hidden[this.index].style.display="none"
      }
    }
  //登录
  var flow1=$(".flow1")[0];
  var login=$("#login")
  login.onmouseover=function(){
    flow1.style.display="block"
  }
  login.onmouseout=function(){
    flow1.style.display="none"
  }
  //手机营业厅
  var flow=$(".flow")[0];
  var shao=$(".rt")
  for(var i=0;i<flow.length;i++){
    shao[i].index=i;
    shao[i].onmouseover=function(){
       flow[this.index].style.display="block"
  }
  shao[i].onmouseout=function(){
    flow[this.index].style.display="none"
  }
 }  
});



