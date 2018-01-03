function FigureHover(i){function t(i){var t=i.getBoundingClientRect(),e=t.top>0?t.top:0;e=e<t.bottom-$copyBtn.height()?e:t.bottom-$copyBtn.height(),$copyBtn.css("top",e+6),$copyBtn.css("left",t.left-$copyBtn.width()-3)}$("[copyFlag]").removeAttr("copyFlag"),$(i).find(".code").attr("copyFlag",1),$copyBtn=$("#copyBtn"),0!=$copyBtn.length&&($copyBtn.stop(),$copyBtn.css("opacity",.8),$copyBtn.css("display","block"),t(i),resizePos(i,t));if(1!=$(i).attr("block")){var e=$(i).find(".code")[0],o=e.clientWidth,n=e.scrollWidth,s=-parseInt($(i).css("marginRight"));$codePinBtn=$(i).find(".codePinBtn");var c=n-(o-s);if(c>0){$(i).stop(),$codePinBtn.stop();var a=($("#main").width()-$(".main-inner").width())/2-10;a>0&&(s=c<a?c:.8*a,$(i).animate({marginRight:-s}),$codePinBtn.animate({opacity:1}))}}}function FigureHoverOut(i){$("#copyBtn").animate({opacity:0},2e3);if(1!=$(i).attr("block")){$(i).stop(),$(i).animate({marginRight:"0"});var t=$(i).find(".codePinBtn");t.stop(),t.css({opacity:0})}}function createCopyBtns(){var i=$("figure .figcode");i.length>0&&($(".post-body").before('<div id="copyBtn" ><span id="imgCopy" ><i class="fa fa-paste fa-fw"></i></span><span id="imgSuccess" style="display: none;color: #6FB76F;"><i class="fa fa-check-circle fa-fw" aria-hidden="true"></i></span>'),i.append('<div class="codePinBtn"><img id="imgSuccess" src="/images/png/Pin_green.png" style="border:none; width: 24px;"></div>'));if($("figure .code").length>0){var t=new Clipboard("#copyBtn",{target:function(){var i=document.querySelector("[copyFlag]"),t=i.querySelector(".diff-deletion");if(null!=t){var e=i.querySelector("pre").cloneNode(!0);for(t=e.querySelector(".diff-deletion");null!=t;)e.removeChild(t),t=e.querySelector(".diff-deletion");null==(i=document.getElementById("tmpcopy"))&&((i=document.createElement("div")).id="tmpcopy",i.style.position="fixed",i.style.width="0",i.style.height="0",document.body.appendChild(i)),i.innerHTML="",i.appendChild(e)}return i},isSupported:function(){return alert(this.support),document.querySelector("[copyFlag]")}});t.on("success",function(i){i.clearSelection(),$imgOK=$("#copyBtn").find("#imgSuccess"),"none"==$imgOK.css("display")&&($imgOK.css({opacity:0,display:"block"}),$imgOK.animate({opacity:1},1e3),setTimeout(function(){$imgOK.animate({opacity:0},2e3)},2e3),setTimeout(function(){$imgOK.css("display","none")},4e3));var t=document.getElementById("tmpcopy");null!=t&&(t.innerHTML="")}),t.on("error",function(i){console.error("Action:",i.action),console.error("Trigger:",i.trigger)}),$("#copyBtn").hover(function(){$(this).stop(),$(this).css("opacity",1)},function(){$(this).animate({opacity:0},2e3)})}}function btnPinClick(){var i=this.parentElement.parentElement;1!=$(i).attr("block")?($(".post-body").css("transform","none"),BindScrollTo($(i).find(".code")[0]),$(i).attr("block",1),$(this).find("img").attr("src","/images/png/Pin_red.png")):(UnBindScroll(),$(i).attr("block",0),$(this).find("img").attr("src","/images/png/Pin_green.png"))}var browserHeight=document.documentElement.clientHeight||document.body.clientHeight,scrollTop=document.documentElement.scrollTop||document.body.scrollTop,g_FlyPig={};!function(){window.FlyPig=function(i,t,e,o){function n(){r.clearRect(0,0,a.width,a.height);for(var i=0,t=l.length;i<t;i++)r.restore(),l[i].x+=.1*l[i].size,r.drawImage(d,l[i].x%p-e,l[i].y+20*Math.sin(l[i].x/100),l[i].size,l[i].size)}var s=0,c=0,a=document.getElementById(i),r=a.getContext("2d"),d=new Image;d.src=t;var l=[],e=e>0?e:25,p=a.width+e;!function(){for(var i=i>0?i:15,t=a.height-e,o=0;o<i;o++)l.push({size:Math.random()*e,y:Math.random()*t,x:Math.random()*p});l.sort(function(i,t){return i.size-t.size})}(),this.start=function(){c>0&&(window.clearInterval(c),c=0),0==s&&(s=setInterval(n,1e3/60))},this.stop=function(){0==c&&(c=setTimeout(function(){window.clearInterval(s),s=0},3e3))}}}(),$("figure").hover(function(){FigureHover(this);1==$(this).attr("block")&&BindScrollTo($(this).find(".code")[0])},function(){FigureHoverOut(this),UnBindScroll()}),$("figure").unbind("dblclick").bind("dblclick",function(){1!=$(this).attr("block")?($(".post-body").css("transform","none"),BindScrollTo($(this).find(".code")[0]),$(this).attr("block",1),$(this).find(".codePinBtn img").attr("src","/images/png/Pin_red.png")):(UnBindScroll(),$(this).attr("block",0),$(this).find(".codePinBtn img").attr("src","/images/png/Pin_green.png"))}),$(window).resize(function(){var i,t=($("#main").width()-$(".main-inner").width())/2-10;$copyBtn=$("#copyBtn"),t<$copyBtn.width()?$copyBtn.css("display","none"):$copyBtn.css("display","block"),$("figure[block='1']").each(function(){if(1==(i=$(this).attr("block"))){var e=$(this).width(),o=$(this)[0].scrollWidth,n=-parseInt($(this).css("marginRight")),s=o-(e-n);s>0&&t>0&&(n=s<t?s:.8*t,$(this).css({marginRight:-n}),$(this).find(".codePinBtn").animate({opacity:1,left:$(".post-body")[0].getBoundingClientRect().right+n-$(this).find(".codePinBtn").width()}))}})}),$(document).on("sidebar.isShowing",function(){NexT.utils.isDesktop&&($sidebar_background=$(".sidebar-background"),0==$sidebar_background.length&&$(".sidebar-inner").before('<div class="sidebar-background"></div>'),$(".sidebar-inner").css("display","block"),localStorage.sidebar_show=1,setTimeout("$('.customFlipClock').css('visibility','visible')",200))}).on("sidebar.isHiding",function(){NexT.utils.isDesktop&&(localStorage.sidebar_show=0,$(".sidebar-inner").css("display","none"),$(".customFlipClock").css("visibility","hidden"))}),$(document).ready(function(){localStorage.sidebar_show?1==Number(localStorage.sidebar_show)?NexT.utils.displaySidebar():localStorage.sidebar_show=0:NexT.utils.displaySidebar(),g_FlyPig=new FlyPig("sidebar-author","/images/pig.png"),createCopyBtns(),$(".codePinBtn").unbind("click").bind("click",btnPinClick),$(".header-inner").animate({padding:"25px 0 25px"},1e3);null==navigator.userAgent.match(/mobile/i)&&($("#header").wobbleWindow({radius:50,movementTop:!1,offsetX:50,debug:!1}),$("blockquote").wobbleWindow({radius:40,movementTop:!1,movementBottom:!1,lineColor:"",debug:!1}),$("#footer").wobbleWindow({radius:50,movementBottom:!1,offsetX:50,position:"absolute",debug:!1}),$("#reward").wobbleWindow({radius:40,offsetX:0,offsetY:5,bodyColor:"#FAF2C7",lineColor:"",debug:!1})),$(".footer-inner .fa-heart").addClass("fa-"+getBrowser().toLowerCase())}),$(".sidebar, .sidebar-toggle").hover(function(){g_FlyPig.start(),$("#sidebarClock").css("opacity","1"),$("canvas#sidebar-author").stop(),$("canvas#sidebar-author").animate({opacity:1},1e3),$(".sidebar-background").css("opacity","0.15"),$(".sidebar, .sidebar-toggle").css("opacity","1")},function(){$("#sidebarClock").css("opacity","0"),$("canvas#sidebar-author").stop(),$("canvas#sidebar-author").animate({opacity:0},1e3),$(".sidebar-background").css("opacity","0"),$(".sidebar, .sidebar-toggle").css("opacity","0.98"),g_FlyPig.stop()});