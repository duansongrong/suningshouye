//bannner
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	// console.log(imgs);
	// console.log(pager);
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			//this ele pagers[index]
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	var n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
 				pagers[i].classList.remove("active");
 				imgs[i].classList.remove("active");
			}
			//this ele pagers[index]
			imgs[n].classList.add("active");
			pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	next.onclick=function(){
		move();
	}
	prev.onclick=function(){
		n-=2;
		move();
	}
}

//侧边
{
	let box=document.querySelectorAll(".side_bian1");
	let tan=document.querySelectorAll(".side_bian1_bottom");
	let bottom=document.querySelectorAll(".side_bottom");

	let box2=document.querySelectorAll(".side_bian2");
	let tan2=document.querySelectorAll(".side_bian1_bottom_big");
	let bottom2=document.querySelectorAll(".side_bottom_big");
	box.forEach(function(ele,index){
		ele.onmouseenter=function(){
			bottom[index].style.width="47px";
			tan[index].style.opacity=1;
		}
		ele.addEventListener("transitionend",function(){
			this.style.backgroundColor="#333";
			this.style.color="#ff6700";
		})
		ele.onmouseleave=function(){
		bottom[index].style.width="0";
		bottom[index].style.zIndex="-1";

	}
	})
	box2.forEach(function(ele,index){
		ele.onmouseenter=function(){
			tan2[index].style.opacity=1;
			bottom2[index].style.width="85px";
		}
		ele.addEventListener("transitionend",function(){
			this.style.backgroundColor="#333";
			this.style.color="#ff6700";
		})
		ele.onmouseleave=function(){
		bottom2[index].style.width="0";
		bottom2 [index].style.zIndex="-1";

	}
	})
	let totop=document.querySelector(".side_dingbu");
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25);
	}

	let box3=document.querySelectorAll(".side_bian3");
	let tan3=document.querySelectorAll(".side_bian1_bottom_erwei");
	let bottom3=document.querySelectorAll(".side_bottom_erwei");
	box3.forEach(function(ele,index){
		ele.onmouseenter=function(){
			tan3[index].style.opacity=1;
			bottom3[index].style.width="167px";
		}
		ele.addEventListener("transitionend",function(){
			this.style.color="#ff6700";
			this.style.backgroundColor="#333";
		})
		ele.onmouseleave=function(){
		bottom3[index].style.width="0";
		bottom3[index].style.zIndex="-999";
	}
	})
	let box4=document.querySelectorAll(".side_bian4");
	let tan4=document.querySelectorAll(".side_bian1_bottom_big1");
	let bottom4=document.querySelectorAll(".side_bottom_big1");
	box4.forEach(function(ele,index){
		ele.onmouseenter=function(){
			tan4[index].style.opacity=1;
			bottom4[index].style.width="85px";
		}
		ele.addEventListener("transitionend",function(){
			this.style.backgroundColor="#333";
		})
		ele.onmouseleave=function(){
		bottom4[index].style.width="0";
		bottom4[index].style.zIndex="-1";
	}
	})
}

//顶部固定
{
	let xianshi=document.querySelector(".scroll_xian");
	let item=document.querySelector(".dadao_fenlei1");
	let type=document.querySelector(".banner_fenlei1");

	let leftBar=document.querySelector(".floatBar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>1417){
			xianshi.style.display="block";
		}else{
			xianshi.style.display="none";
		}

		if(st>2381){
			leftBar.style.display="block";
		}else{
			leftBar.style.display="none";
		}
	}
	item.onmouseenter=function(){
		type.style.display="block";
	}
	item.onmouseleave=function(){
		type.style.display="none";
	}

}
//左边浮动
{
	let tips=document.querySelectorAll(".floatbar_item");
	let containers=document.querySelectorAll(".container");
		tips.forEach(function(ele,index){
			ele.onclick=function(){
				let ot=containers[index].offsetTop-50;
				document.documentElement.scrollTop=ot;
				let now=document.documentElement.scrollTop;
				let speed=(ot-now)/8;
				let time=0;
				let t=setInterval(function(){
					time+=25;
					now+=speed;
					if(time===200){
						clearInterval(t);
					}
					document.documentElement.scrollTop=now;
				},25)
			}
		});
		window.addEventListener("scroll",function(){
			let st=document.documentElement.scrollTop;
			for(i=0;i<containers.length;i++){
				if(st>containers[i].offsetTop-530){
					for(let j=0;j<tips.length;j++){
						tips[j].classList.remove("active");
					}
					tips[i].classList.add("active");

				}
			}
		});
	let totop=document.querySelector(".float_totop");
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25);
	}
}

//排行榜
{
		let prev=document.querySelector(".paihang_btn");
		let next=document.querySelector(".paihang_btn1");
		let inner=document.querySelector(".paihang_inner");
		let contents=document.querySelectorAll(".paihang_ye");
		let pagers=document.querySelectorAll(".paihang_pager");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.marginLeft=n*-390+"px";
			pagers[n].classList.add("active");
			pagers[n-1].classList.remove("active");
			obj=pagers[n];
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=n*-390+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
			obj=pagers[n];
		}
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.enmouseenter=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				inner.style.marginLeft=index*-390+"px";
				n=index;
			}
		})
	
}

//侧导航
{
	let labels=document.querySelectorAll(".banner_nav li");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	});
}


//大聚惠
{	
		let prev=document.querySelector(".hui_prev .hui_btn");
		let next=document.querySelector(".hui_next .hui_btn1");
		let inner=document.querySelector(".hui_inner");
		let contents=document.querySelectorAll(".hui_ye");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.marginLeft=n*-1000+"px";
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=n*-1000+"px";
		}
}

//视频
{	
		let prev=document.querySelector(".shipin_jiantou");
		let next=document.querySelector(".shipin_jiantou1");
		let inner=document.querySelector(".shipin_inner");
		let contents=document.querySelectorAll(".shipin_ye");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.marginLeft=n*-390+"px";
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=n*-390+"px";
		}
}

//抢购
{	
		let prev=document.querySelector(".pingou_btn .pingou_btn1");
		let next=document.querySelector(".pingou_btn2 .pingou_btn1");
		let inner=document.querySelector(".qianggou_inner");
		let contents=document.querySelectorAll(".qianggou_ye");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.marginLeft=n*-590+"px";
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=n*-590+"px";
		}
}