(function(window){var svgSprite='<svg><symbol id="icon-kefuzhongxin" viewBox="0 0 1024 1024"><path d="M623.424704 637.745563c-21.998247 38.994196-63.804126 65.327633-111.769514 65.327633-47.962318 0-89.770243-26.332414-111.769514-65.327633 0 0-13.762717-26.734521-33.203029-31.850392-47.833398-10.74333-36.888503 31.850393-36.888503 31.850392 26.069458 75.354741 97.638454 129.469406 181.854907 129.469407 84.2185 0 155.788519-54.114665 181.854907-129.469407 0 0 12.871533-31.850393-30.613375-31.850392-24.044596 0-39.465879 31.850393-39.465879 31.850392z"  ></path><path d="M511.431115 1.301478c-204.549936 0-379.263087 140.632238-434.630117 336.631506-46.87673 29.836786-76.714539 106.550302-76.71454 174.713151 0 97.999634 59.673571 157.672183 157.673206 157.672182 21.286118 0 38.326063-17.037898 38.326063-38.387453V482.809349c0-17.040968-65.944607-38.201236-83.546274-38.326063C138.256939 289.868348 292.088125 65.219176 511.431115 65.219176c211.294701 0 371.178987 218.657463 398.832318 379.26411-17.5413 0.251701-83.484884 17.040968-83.484883 38.326063v149.121515c0 21.348532 17.039945 38.387453 38.326063 38.387453 8.489277 0 17.039945 0 25.592658-4.304494-12.796841 72.469389-42.633627 127.834374-76.714539 166.223873-21.347509 25.530245-71.111637 59.59581-76.714539 63.045954l-73.184588 0.037858s-0.935181 0.134036-0.974062 0.027625c-14.807378-39.915053-60.138093-67.356587-113.350319-67.356587-63.918722 0-119.285752 42.57019-119.285752 97.997588 0 55.367031 51.121881 97.997588 119.285752 97.997588 51.840149 0 92.433566-26.095037 111.41345-64.352548 1.702562-0.4901 5.476029-0.298767 5.476029-0.298766h73.093525c26.112431 0 98.065117-65.960977 121.119281-93.019845 43.637361-51.217036 80.958666-123.590247 89.447943-221.590905 46.877754-29.835763 72.469389-68.160802 72.46939-132.080547 0-68.163872-29.835763-140.632238-76.713517-170.469023-55.368054-200.243396-230.082228-340.87461-434.63421-340.87461z"  ></path></symbol><symbol id="icon-dingwei" viewBox="0 0 1024 1024"><path d="M510.4 0c-180.8 0-339.2 144-339.2 320 0 164.8 334.4 556.8 334.4 556.8s347.2-387.2 347.2-556.8c0-176-161.6-320-342.4-320z m4.8 441.6c-62.4 0-113.6-49.6-113.6-110.4 0-60.8 51.2-110.4 113.6-110.4 62.4 0 113.6 49.6 113.6 110.4 0 60.8-51.2 110.4-113.6 110.4z" fill="#24CCC0" ></path><path d="M624 886.4c1.6 3.2 1.6 6.4 1.6 9.6 0 30.4-51.2 54.4-113.6 54.4-62.4 0-113.6-24-113.6-54.4 0-3.2 0-6.4 1.6-9.6-68.8 12.8-115.2 36.8-115.2 64 0 40 102.4 73.6 227.2 73.6 126.4 0 227.2-32 227.2-73.6 0-27.2-46.4-51.2-115.2-64z" fill="#6EE0CB" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)