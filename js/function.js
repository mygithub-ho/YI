//处理getClass的兼容性问题，在一个对象先找对应的元素

function getClass(classname, obj) {
	var obj = obj || document;
	if (obj.getElementsByClassName) {
		return obj.getElementsByClassName(classname);
	} else {
		var arr = [];
		var alls = document.getElementsByTagName("*");
		for (i = 0; i < alls.length; i++) {
			if (checkClass(alls[i].className, classname)) {
				arr.push(alls[i]);
			}
		}
		return arr;
	}
}

function checkClass(search, match) {
	var brr = search.split(" ");
	for (i = 0; i < brr.length; i++) {
		if (brr[i] == match) {
			return true;
		}
	}
	return false;
}

//获取内容

function getInner(obj, value) {
	if (obj.textContent) {
		if (value == undefined) {
			return obj.textContent; //返回值
		} else {
			obj.textContent = value; //修改值
		}
	} else {
		if (value == undefined) {
			return obj.innerText; //返回值
		} else {
			obj.innerText = value; //修改值
		}
	}
}

//获取属性

function getStyle(obj, style) {
	if (obj.currentStyle) {
		return obj.currentStyle[style];
	} else {
		return getComputedStyle(obj, null)[style];
	}
}



//在某一个范围内获取到所要的元素，某个div或某个对象的子元素



function $(search,obj){//创建一个$函数
     var obj=obj||document
     if (typeof(search)=="string"){

      if(search.charAt(0)=="#"){//判断第一个字符是不是#
      return document.getElementById(search.substr(1))//是#返回ID名
     }else if(search.charAt(0)=="."){//判断第一个字符是不是.
         return getClass(search.substr(1),obj)//是#返回类名
      }else{
         return document.getElementsByTagName(search)//否则返回标签名
          
     }
     
     }else if(typeof(search)=="function"){
        window.onload=function(){
          search();
        }
     }
}



// 获取子节点

function getChilds(obj, type) {
	var type = type || "a";
	var all = obj.childNodes; //获取对象的所有子节点
	var arr = []; //定义一个空数组
	for (var i = 0; i < all.length; i++) {
		if (type == "a") {
			if (all[i].nodeType == 1) {
				arr.push(all[i]); //将all[i]放在arr数组里
			}
		} else if (type == "b") {
			if (all[i].nodeType == 1 || (all[i].nodeType == 3 && all[i].nodeValue.replace(/^\s*|\s*$/g, ""))) {
				// if (all[i].nodeType==3) {
				// 	all[i].nodeValue=all[i].nodeValue.replace(/^\s*|\s*$/g, "")
				// };
				arr.push(all[i]);
			}
		}
	}
	return arr;
}

function getFirst(obj) {
	return getChilds(obj)[0];
}

function getLast(obj) {
	var nub = getChilds(obj);
	return nub[nub.length - 1];
}




function getNext(obj, type) {
	var next = obj.nextSibling;
	var type = type || "a";
	if (next == null) {
		return false;
	}
	if (type == "a") {
		while (next.nodeType == 3 || next.nodeType == 8) {
			next = next.nextSibling;
			if (next == null) {
				return false;
			}
		}
	} else if (type == "b") {

		while ((next.nodeType == 3 && !next.nodeValue.replace(/^\s*|\s*$/g, "")) || next.nodeType == 8) {
			next = next.nextSibling;
			if (next == null) {
				return false;
			}
		}
	}
	return next;
}

function getPrevious(obj) {
	var pervious = obj.previousSibling;
	var type = type || "a";
	if (pervious == null) {
		return false;
	}
	if (type == "a") {
		while (pervious.nodeType == 3 || pervious.nodeType == 8) {
			pervious = pervious.previousSibling;
			if (pervious == null) {
				return false;
			}
		}
	} else if (type == "b") {
		while ((pervious.nodeType == 3 && !pervious.nodeValue.replace(/^\s*|\s*$/g, "")) || next.nodeType == 8) {
			pervious = pervious.previousSibling;
			if (pervious == null) {
				return false;
			}
		}
	}
	return pervious;
}

function insertBefore(obj, before) {
	var parent = before.parentNode;
	parent.insertBefore(obj, before)
}

function insertAfter(obj, after) {
	var next = getNext(after);
	var parent = after.parentNode;
	if (next) {
		insertBefore(obj, next)
	} else {
		parent.appendChild(obj)
	}
}