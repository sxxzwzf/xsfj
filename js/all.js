function met(name,cursel,n)
	 {
	  for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById(name+"_"+i);
	  menu.className=i==cursel?"":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }