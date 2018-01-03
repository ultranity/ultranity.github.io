var OriginTitile = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '页面崩溃啦 ~ | 你快回来！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' 噫又好了~' + OriginTitile;
         titleTime = setTimeout(function () {
             document.title = OriginTitile;
         }, 2000);
     }
 });
