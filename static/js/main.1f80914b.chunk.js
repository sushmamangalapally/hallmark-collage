(this.webpackJsonpecard=this.webpackJsonpecard||[]).push([[0],{20:function(e,t){e.exports={unsplashAPIKey:"b6100f8fd2a15cfd6e7bab74d65a17e3cb4e8b6f3276e73e9dbb2b580ef1b44b"}},21:function(e,t,a){e.exports=a(50)},26:function(e,t,a){},49:function(e,t,a){},5:function(e,t){e.exports={fontsStyleList:{roboto:"Roboto","fjalla-one":"Fjalla One",lobster:"Lobster",abel:"Abel","fredoka-one":"Fredoka One","varela-round":"Varela Round","dancing-script":"Dancing Script","shadows-into-light":"Shadows Into Light","amatic-sc":"Amatic SC",amiri:"Amiri","patua-one":"Patua One","permanent-marker":"Permanent Marker"},fontColorsList:[{id:"red",value:"#e57373"},{id:"pink",value:"#f06292"},{id:"purple",value:"#ba68c8"},{id:"deep-purple",value:"#9575cd"},{id:"indigo",value:"#7986cb"},{id:"blue",value:"#64b5f6"},{id:"light-blue",value:"#4fc3f7"},{id:"cyan",value:"#4dd0e1"},{id:"teal",value:"#4db6ac"},{id:"green",value:"#81c784"},{id:"light-green",value:"#aed581"},{id:"lime",value:"#dce775"},{id:"yellow",value:"#fff176"},{id:"amber",value:"#ffd54f"},{id:"orange",value:"#ffb74d"},{id:"deep-orange",value:"#ff8a65"},{id:"brown",value:"#a1887f"},{id:"grey",value:"#e0e0e0"},{id:"blue-grey",value:"#90a4ae"}],backgroundColorsList:[{id:"red",value:"#ef9a9a"},{id:"pink",value:"#f48fb1"},{id:"purple",value:"#ce93d8"},{id:"deep-purple",value:"#b39ddb"},{id:"indigo",value:"#9fa8da"},{id:"blue",value:"#90caf9"},{id:"light-blue",value:"#81d4fa"},{id:"cyan",value:"#80deea"},{id:"teal",value:"#80cbc4"},{id:"green",value:"#80deea"},{id:"light-green",value:"#c5e1a5"},{id:"lime",value:"#e6ee9c"},{id:"yellow",value:"#fff59d"},{id:"amber",value:"#ffe082"},{id:"orange",value:"#ffcc80"},{id:"deep-orange",value:"#ffab91"},{id:"brown",value:"#bcaaa4"},{id:"grey",value:"#eeeeee"},{id:"blue-grey",value:"#b0bec5"},{id:"white",value:"#f5f5f5"}],getFonts:[{id:"roboto",value:"Roboto"},{id:"fjalla-one",value:"Fjalla One"},{id:"lobster",value:"Lobster"},{id:"abel",value:"Abel"},{id:"fredoka-one",value:"Fredoka One"},{id:"varela-round",value:"Varela Round"},{id:"dancing-script",value:"Dancing Script"},{id:"shadows-into-light",value:"Shadows Into Light"},{id:"amatic-sc",value:"Amatic SC"},{id:"amiri",value:"Amiri"},{id:"patua-one",value:"Patua One"},{id:"permanent-marker",value:"Permanent Marker"}],alignmentObj:{top:"Place text on the top",center:"Place text in the center",bottom:"Place text on the bottom"},alignment:[{id:"top",value:"Place text on the top"},{id:"center",value:"Place text in the center"},{id:"bottom",value:"Place text on the bottom"}]}},50:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(16),r=a.n(l),c=(a(26),a(3)),i=a.n(c),u=a(8),d=a(7),s=a(17),g=a.n(s),m=function(e){e.photo,e.pictures;var t=e.updatePhotosSearch,a=e.text,n=e.fontFam,l=e.gBackgroundColor,r=e.fontColor,c=e.placement,i=(e.updateText,e.updateFont);var d=function(e){e.preventDefault()},s=function(e){console.log(document.getElementById(a));e.preventDefault();var a=e.dataTransfer.getData("text"),n=void 0;if(document.getElementById(a).clientWidth<=document.getElementById(a).clientHeight&&-1!==["drag3","drag8"].indexOf(e.target.id))n=document.getElementById(a).getAttribute("src"),e.target.style.backgroundImage="url("+n+")",document.getElementById(e.target.id).style.border="3px solid #00000000",t(a);else{if(!(document.getElementById(a).clientHeight<=document.getElementById(a).clientWidth&&-1!==["drag1","drag2","drag4","drag5","drag6","drag7"].indexOf(e.target.id)))return alert("You must match picture according height and width!"),!1;n=document.getElementById(a).getAttribute("src"),e.target.style.backgroundImage="url("+n+")",document.getElementById(e.target.id).style.border="3px solid #00000000",t(a)}};return o.a.createElement("div",{className:"container"},o.a.createElement("div",{id:"saveCollage",className:l+" lighten-4",style:{background:l,opacity:.8}},"top"===c?o.a.createElement("div",{className:"top-align"},o.a.createElement("h1",{onChange:i,style:{fontFamily:n,color:r,fontSize:"2.5vw"},className:"collageHeader"},a)):"",o.a.createElement("div",{className:"gallery"},Object(u.a)(Array(4)).map((function(e,t){return o.a.createElement("figure",{key:t,id:"drag".concat(t+1),className:"gallery__item gallery__item--".concat(t+1),onDrop:s,onDragOver:d})})),"center"===c?o.a.createElement("div",{className:"gallery__item gallery__item--5 text-center p-centered",style:{margin:"auto",width:"50%"}},o.a.createElement("h4",{onChange:i,style:{fontFamily:n,color:r,fontSize:"2.5vw"},className:"collageHeader center-align text-center"},a)):o.a.createElement("figure",{id:"drag5",className:"gallery__item gallery__item--5",onDrop:s,onDragOver:d}),[6,7,8].map((function(e,t){return o.a.createElement("figure",{key:e,id:"drag".concat(e),className:"gallery__item gallery__item--".concat(e),onDrop:s,onDragOver:d})}))),"bottom"===c?o.a.createElement("div",{className:"bottom-align"},o.a.createElement("h1",{onChange:i,style:{fontFamily:n,color:r,fontSize:"2.5vw"},className:"collageHeader"},a)):""),o.a.createElement("button",{className:"btn btn-lg",onClick:function(){var e=document.getElementById("saveCollage");g.a.toJpeg(e,{quality:.95}).then((function(e){var t=document.createElement("a");t.download="my-image-name.jpeg",t.href=e,t.click()}))}},"Save Collage"))},f=a(2),p=function(e){var t=e.photo;return o.a.createElement("img",{className:"fit-picture",key:t.id,id:t.id,src:t.urls.thumb,draggable:"true",onDragStart:function(e){console.log("drag"),console.log(e),e.dataTransfer.setData("text",e.target.id)},alt:t.alt_description,onClick:function(e){e.currentTarget.className+=" active"}})},v=function(e){var t=e.pictures,a=e.noPictures,n=e.searchTerm;return console.log(t),console.log(n),o.a.createElement("div",{className:"photos-results card-panel indigo lighten-3",style:{margin:"5px 0px",borderRadius:"5px"}},t&&t.length>0?t.map((function(e){return o.a.createElement(p,{key:e.id,photo:e,pictures:t})})):o.a.createElement("h2",null,a&&n.length?"No results found for "+n:"No pictures yet"))},b=a(18),h=a.n(b),y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{fonts:[{font:"Roboto",weights:[400,"400i"]},{font:"Fjalla One",weights:[400,700]},{font:"Lobster",weights:[400,700]},{font:"Abel",weights:[400,700]},{font:"Fredoka One",weights:[400,700]},{font:"Varela Round",weights:[400,700]},{font:"Dancing Script",weights:[400,700]},{font:"Shadows Into Light",weights:[400,700]},{font:"Amatic SC",weights:[400,700]},{font:"Amiri",weights:[400,700]},{font:"Patua One",weights:[400,700]},{font:"Permanent Marker",weights:[400,700]}],subsets:["cyrillic-ext","greek"]}))},E=a(19),w=a.n(E);var N=function(e){e.title;var t=e.subTitle,a=e.updateFunction,n=e.array,l=e.category,r=e.ulId;return console.log(a),console.log(n),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"dropdown"},o.a.createElement("div",{className:"btn-group dropdown dropdown-content"},o.a.createElement("a",{href:"#",className:"btn dropdown-toggle",tabIndex:"0"},t,o.a.createElement("i",{className:"icon icon-caret"})),o.a.createElement("ul",{id:r,className:"menu dropdown-content"},n.map((function(e){return o.a.createElement("li",{role:"option","aria-selected":"true",onClick:a,id:e.id,key:e.id,"data-value":e.value,className:"menu-item",style:{fontFamily:"font"===l?e.value+", monospaced":"",backgroundColor:"font-color"===l?e.value:""}},o.a.createElement("div",{className:"list-icon"},o.a.createElement("a",{href:"#dropdowns"},e.value)))}))))))},x=a(20),k=a.n(x),O=a(5),C=a.n(O);var j=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),c=Object(f.a)(r,2),s=c[0],g=c[1],p=Object(n.useState)(!0),b=Object(f.a)(p,2),h=(b[0],b[1]),E=Object(n.useState)(""),x=Object(f.a)(E,2),O=x[0],j=x[1],S=Object(n.useState)("lightgrey"),F=Object(f.a)(S,2),A=F[0],I=F[1],T=Object(n.useState)("grey"),_=Object(f.a)(T,2),P=_[0],B=_[1],D=Object(n.useState)("top"),L=Object(f.a)(D,2),R=L[0],H=L[1],W=Object(n.useState)(""),M=Object(f.a)(W,2),z=M[0],J=M[1],V=Object(n.useState)(!1),q=Object(f.a)(V,2),K=q[0],Y=q[1],G=function(e){w.a.get("https://api.unsplash.com/search/photos/?page=1&client_id=".concat(k.a.unsplashAPIKey,"&query=").concat(e)).then((function(e){return console.log(e),e.data.results})).then((function(t){console.log(t);var a=t,n=t.map((function(e){return e.urls.small}));console.log(n),l(a),h(!0),0===n.length&&(Y(!0),g(e))}),(function(e){e&&(alert("Warning"),l([]),h(!0),Y(!0))}))};function $(){return($=Object(d.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t?G(t):(l([]),g(t),h(!0));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=function(e){if(e.length>36)return console.log(e.length),alert("Can't enter more than 36 characters"),!1;j(e)},U=function(e){console.log("updateFont"),e.preventDefault(),console.log(e.currentTarget.id),console.log(e.currentTarget.getAttribute("data-value")),J(e.currentTarget.getAttribute("data-value"))};return Object(n.useEffect)((function(){"center"===R&&void 0!==document.getElementsByClassName("text-center")[0]&&(document.getElementsByClassName("text-center")[0].style.backgroundImage="")}),[]),o.a.createElement("div",{className:"main-app"},o.a.createElement(y,null),o.a.createElement("div",{className:"search-photos"},o.a.createElement("div",{className:"section-main"},o.a.createElement("div",{className:"row form-group"},o.a.createElement("div",{className:"input-field col s12"},o.a.createElement("label",{className:"active form-label",htmlFor:"greeting_text"},"Enter Text",o.a.createElement("br",null)),o.a.createElement("input",{id:"greeting_text",name:"greeting_text",type:"text",className:"validate form-input",value:O,onChange:function(e){return Q(e.target.value)},placeholder:"Add Text Here."}))),o.a.createElement(N,{title:"Greeting Text Alignment",subTitle:"Text Alignment",updateFunction:function(e){console.log("updatePlacement"),e.preventDefault(),console.log(e.currentTarget.id),H(e.currentTarget.id)},array:C.a.alignment,ulId:"dropdown4",category:"text"}),o.a.createElement(N,{title:"Font Style Adjustment",subTitle:"Font Style",updateFunction:U,array:C.a.getFonts,category:"font",ulId:"dropdown1"}),o.a.createElement(N,{title:"Font Color Adjustment",subTitle:"Font Color",updateFunction:function(e){console.log("updateFontColor"),e.preventDefault(),console.log(e.currentTarget.id),B(e.currentTarget.getAttribute("data-value"))},array:C.a.fontColorsList,category:"font-color",ulId:"dropdown3"}),o.a.createElement(N,{title:"Background Color Adjustment",subTitle:"Background Color",updateFunction:function(e){console.log("updateBackgroundColor"),e.preventDefault(),console.log(e.currentTarget.id),console.log(A),I(e.currentTarget.getAttribute("data-value"))},array:C.a.backgroundColorsList,category:"font-color",ulId:"dropdown2"}),o.a.createElement("div",{className:"search-books-input-wrapper form-group"},o.a.createElement("label",{className:"active form-label",htmlFor:"adding_photos_text"},"Add Photos. Simply drag and drop the photos to the collage.",o.a.createElement("br",null),"Search by relevance of pictures",o.a.createElement("br",null)),o.a.createElement("input",{type:"text",onChange:function(e){return function(e){return $.apply(this,arguments)}(e.target.value)},placeholder:"Search Pictures",className:"form-input",id:"adding_photos_text"}))),o.a.createElement(v,{pictures:a,searchTerm:s,noPictures:K})),o.a.createElement(m,{updatePhotosSearch:function(e){console.log(e),console.log(a);var t=Object(u.a)(a);console.log(t),t.map((function(a,n){return a.id===e?t.splice(n,1):null})),l(t)},text:O,fontFam:z,gBackgroundColor:A,fontColor:P,placement:R,updateText:Q,updateFont:U}))};a(49);var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"navbar"},o.a.createElement("section",{className:"navbar-section"}),o.a.createElement("section",{className:"navbar-center"},"Create Your Photo Collage"),o.a.createElement("section",{className:"navbar-section"},"Made by Sushma")),o.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.1f80914b.chunk.js.map