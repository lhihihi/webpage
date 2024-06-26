/**
  * TypeIt - The most versatile animated typing utility on the planet.
  * Author: Alex MacArthur <alex@macarthur.me> (https://macarthur.me)
  * Version: v6.5.1
  * License: GPL-2.0
  * URL: https://typeitjs.com
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).TypeIt=e()}(this,(function(){"use strict";var t={strings:[],speed:100,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,lifeLike:!0,breakLines:!0,startDelay:250,startDelete:!1,nextStringDelay:750,loop:!1,loopDelay:750,html:!0,waitUntilVisible:!1,beforeString:function(){},afterString:function(){},beforeStep:function(){},afterStep:function(){},afterComplete:function(){}};function e(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.insert=function(e,n){t.waiting.splice(e,0,n)},this.add=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.isArray(e[0])?(t.waiting=t.waiting.concat(e),t):(t.waiting[n?"unshift":"push"](e),t)},this.delete=function(e){return t.waiting.splice(e,1),t},this.reset=function(){return t.waiting=t.executed.concat(t.waiting),t.executed=[],t},this.executed=[],this.waiting=e,!e.length&&n&&this.add(n)}var n=function(t){return document.createElement(t)};function i(t,e){return Math.abs(Math.random()*(t+e-(t-e))+(t-e))}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=n("style");i.id=e,i.appendChild(document.createTextNode(t)),document.head.appendChild(i)}function o(t){return t.map((function(t){return t.replace(/<\!--.*?-->/g,"")}))}var u=function(t){return Array.from(t)},s=function(t){var e=[];return e.concat.apply(e,t)},a=function(t){var e=document.implementation.createHTMLDocument("");return e.body.innerHTML=t,e.body},c=function(t){return 3===t.nodeType||"BR"===t.tagName},f=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=u(e.childNodes).map((function(e){return c(e)?e:t(e)}));return r=s(r),n&&(r=r.filter((function(t){return!t.parentNode.isEqualNode(n)}))),i?r.reverse():r},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t instanceof HTMLElement;return{node:e,isTopLevelText:!(e&&"BODY"!==e.parentNode.tagName||n),isHTMLElement:n,content:t}};function h(t){var e,n=a(t);return e=f(n).map((function(t){return t.nodeValue?u(t.nodeValue).map((function(e){return l(e,t)})):l(t)})),s(e)}function d(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e?h(t):u(t).map((function(t){return l(t)}))}var p=function(t){return Array.isArray(t)?t:[t]},v=function(t){return Array.isArray(t)||(t=[t/2,t/2]),{before:t[0],after:t[1],total:t[0]+t[1]}};function g(t,e,n){var r=(e=null!==e?e:t/3)/2;return n?[i(t,t/2),i(e,r)]:[t,e]}var m=function(t,e){e?t.value="":t.querySelector(".ti-cursor")&&(t.innerHTML="")},y=function(t){return["textarea","input"].indexOf(t.tagName.toLowerCase())>-1},b=function(t,e){var n=e.querySelectorAll("*");return[e].concat(u(n).reverse()).find((function(e){return e.cloneNode().outerHTML===t.outerHTML}))},w=function(t,e){if(!t)return!1;var n=t.nextSibling;return!n||n.isEqualNode(e)},q=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3?arguments[3]:void 0,r=e.isHTMLElement,o=r?e.content:document.createTextNode(e.content);if(y(t))t.value="".concat(t.value).concat(e.content);else{if(!e.isTopLevelText&&!r){var u=e.node.parentNode,s=b(u.cloneNode(),t);if(w(s,n))t=s;else if((o=u.cloneNode()).innerText=e.content,"BODY"!==u.parentNode.tagName){for(var a=u.parentNode,c=a.cloneNode(),l=b(c,t);!l&&"BODY"!==a.tagName;)c.innerHTML=o.outerHTML,o=c,c=a.parentNode.cloneNode(),a=a.parentNode,l=b(c,t);l&&(t=l)}}var h=f(t,n,!0);h=h[i-1],h=t.contains(n)?n:h,t.insertBefore(o,h||null)}},N=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=!Array.isArray(t),r=t.length;return(t=i?new Array(t).fill(0):t).map((function(t,o){if(i)return e;var u=[e,t];return n&&(0===o&&u.push({isFirst:!0}),o+1===r&&u.push({isLast:!0})),u}))},S=function(t){t.parentNode.removeChild(t)},T=function(t){return!c(t)&&!t.firstChild},L=function(t){return t.some((function(t){return T(t)}))},x=function(t){for(var e=u(t.querySelectorAll("*")),n=L(e);e.length&&n;){var i=!1;e.forEach((function(t){T(t)&&(S(t),i=!0)})),i&&(e=u(t.querySelectorAll("*"))),n=L(e)}return e},$=function(t,e,n,i){if(n){var r=i,o=e[(r=r>e.length?e.length:r)-1];t.insertBefore(n,o||null)}};function A(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function D(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}function M(){}function E(t,e){if(!e)return t&&t.then?t.then(M):Promise.resolve()}function H(t,e){var n=t();return n&&n.then?n.then(e):e(n)}function C(t){var e=t();if(e&&e.then)return e.then(M)}function P(t,e,n){if(!t.s){if(n instanceof k){if(!n.s)return void(n.o=P.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(P.bind(null,t,e),P.bind(null,t,2));t.s=e,t.v=n;var i=t.o;i&&i(t)}}var k=function(){function t(){}return t.prototype.then=function(e,n){var i=new t,r=this.s;if(r){var o=1&r?e:n;if(o){try{P(i,1,o(this.v))}catch(t){P(i,2,t)}return i}return this}return this.o=function(t){try{var r=t.v;1&t.s?P(i,1,e?e(r):r):n?P(i,1,n(r)):P(i,2,r)}catch(t){P(i,2,t)}},i},t}();function O(t,e,n){var i,r,o=-1;return function u(s){try{for(;++o<t.length&&(!n||!n());)if((s=e(o))&&s.then){if(!((a=s)instanceof k&&1&a.s))return void s.then(u,r||(r=P.bind(null,i=new k,2)));s=s.v}i?P(i,1,s):i=s}catch(t){P(i||(i=new k),2,t)}var a}(),i}function B(t,e){return t&&t.then?t.then(e):e(t)}function z(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}function I(){var i=this,s=this,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=c.typeIt,w=c.element,T=c.id,L=c.options,P=c.queue,k=void 0===P?[]:P,R=c.isAReset,j=void 0!==R&&R,V=function(){return Q?u(s.$e.value):f(s.$e,Z,!0)},Y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=s.opts.nextStringDelay;s.queue.insert(t,[s.pause,n.before]),s.queue.insert(t+e+1,[s.pause,n.after])},F=function(){if(Q||!s.opts.cursor)return null;var t=n("span");return t.innerHTML=a(s.opts.cursorChar).innerHTML,t.className="ti-cursor",t.setAttribute("style","display:inline;position:absolute;font:inherit;color:inherit;line-height:inherit;margin-left:-.1em;"),t},U=function(){Z&&(r("@keyframes blink-".concat(T," { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} }[data-typeit-id='").concat(T,"'] .ti-cursor { animation: blink-").concat(T," ").concat(s.opts.cursorSpeed/1e3,"s infinite; }"),T),s.$e.appendChild(Z))};this.wait=D((function(t,e){return this.timeouts.push(setTimeout(t,e)),A()}));var G=function(){s.opts.strings.forEach((function(t,e){var i=d(t,s.opts.html);s.queue.add(N(i,s.type,!0));var r=s.queue.waiting.length;if(e+1!==s.opts.strings.length){if(s.opts.breakLines){var o=l(n("BR"));return s.queue.add([s.type,o]),void Y(r)}s.queue.add(N(i,s.delete)),Y(r,t.length)}}))},J=D((function(t){return H((function(){if(W)return E(i.move(-1*W))}),(function(){i.queue.reset().delete(0).add([i.pause,t.before],!0);for(var e=0;e<V().length;e++)i.queue.add([i.delete,null,{isPhantom:!0}],!0)}))})),K=function(t){var e=s.$e.innerHTML;return e?(s.$e.innerHTML="",s.opts.startDelete?(h(e).forEach((function(t){q(s.$e,t,Z,W)})),s.queue.add([s.delete,!0]),Y(1),t):[e.trim()].concat(t)):t};this.pause=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((function(n,i){t.wait((function(){return n()}),e||t.opts.nextStringDelay.total)}))},this.reset=function(){return this.queue.reset(),new I({typeIt:b,element:this.$e,id:T,options:this.opts,queue:this.queue.waiting,isAReset:!0})},this.init=function(){var t=this;if(!this.status.started){if(U(),!this.opts.waitUntilVisible)return this.status.started=!0,this.fire();new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&(t.fire(),n.unobserve(t.$e))}))}),{threshold:1}).observe(this.$e)}},this.fire=D((function(){var t=this,e=t.queue.waiting.slice();return z((function(){return B(O(e,(function(n){var i=e[n],r=[i,t.queue,b];if(t.status.frozen)throw new Error;return t.pace=g(t.opts.speed,t.opts.deleteSpeed,t.opts.lifeLike),H((function(){var e;if(i[2]&&i[2].isFirst)return E((e=t.opts).beforeString.apply(e,r))}),(function(){var e;return A((e=t.opts).beforeStep.apply(e,r),(function(){return A(i[0].call(t,i[1],i[2]),(function(){var e=t.queue.waiting.shift(),n=i[2]&&i[2].isPhantom;return C((function(){if(!n)return H((function(){var e;if(i[2]&&i[2].isLast)return E((e=t.opts).afterString.apply(e,r))}),(function(){var n;return A((n=t.opts).afterStep.apply(n,r),(function(){t.queue.executed.push(e)}))}))}))}))}))}))}),(function(){return!1})),(function(e){return t.status.completed=!0,A(t.opts.afterComplete(b),(function(){if(t.opts.loop){var e=t.opts.loopDelay?t.opts.loopDelay:t.opts.nextStringDelay;t.wait((function(){return A(J(e),(function(){t.fire()}))}),e.after)}}))}))}),M)})),this.type=function(t){var e=this;return new Promise((function(n){e.wait((function(){return q(e.$e,t,Z,W),n()}),e.pace[0])}))},this.empty=D((function(){Q?this.$e.value="":u(this.$e.childNodes).forEach((function(t){Z&&Z.isEqualNode(t)||S(t)}))})),this.delete=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((function(n){t.wait((function(){var i=V();return i.length&&(Q?t.$e.value=t.$e.value.slice(0,-1):i[W]&&S(i[W])),x(t.$e),e&&i.length-1>0?t.delete(!0).then((function(){return n()})):n()}),t.pace[1])}))},this.setOptions=D((function(t){this.opts=Object.assign({},this.opts,t)})),this.move=function(t){var e=this;return new Promise((function(n){e.wait((function(){return W+=t,$(e.$e,V(),Z,W),n()}),e.pace[0])}))};var Q=y(w);this.status={started:!1,complete:!1,frozen:!1,destroyed:!1},this.$e=w,this.timeouts=[];var W=0;this.opts=Object.assign({},t,L),this.opts.html=!Q&&this.opts.html,this.opts.nextStringDelay=v(this.opts.nextStringDelay),this.opts.loopDelay=v(this.opts.loopDelay),this.queue=new e(k,[this.pause,this.opts.startDelay]),this.$e.setAttribute("data-typeit-id",T),r("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}"),m(w,Q);var X=p(this.opts.strings);X=K(X),this.opts.strings=o(X);var Z=F();this.opts.strings.length&&!j&&G()}return function(t,e){var i,r=this;this.instances=(i=t,"string"==typeof i?i=document.querySelectorAll(i):i.forEach||(i=[i]),u(i)).map((function(t){return new I({typeIt:r,element:t,id:Math.random().toString(36).substring(2,15),options:e,queue:[],isAReset:!1})}));var o=function(t){r.instances.forEach((function(e){t.call(r,e)}))},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;o((function(i){var o="string"!=typeof t,u=o?t:i[t],s=N(n,[u,o?r:e]);i.queue.add(s)}))};this.is=function(t){return e=this.instances,n=t,i=!0,!!e.length&&!e.some((function(t){return t.status[n]!==i}));var e,n,i},this.freeze=function(){o((function(t){t.status.frozen=!0}))},this.unfreeze=function(){o((function(t){t.status.frozen&&(t.status.frozen=!1,t.fire())}))},this.type=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o((function(e){var n=d(t,e.opts.html);e.queue.add(N(n,e.type,!0))})),this},this.move=function(t){var e=t<0;return o((function(n){n.queue.add(N(Math.abs(t),[n.move,e?1:-1]))})),this},this.delete=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s("delete",null===t,null===t?1:t),this},this.pause=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s("pause",t),this},this.break=function(){return s("type",n("BR")),this},this.options=function(t){return s("setOptions",t),this},this.exec=function(t){return s(t),this},this.destroy=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.instances=this.instances.map((function(e){if(e.timeouts.forEach((function(t){clearTimeout(t)})),e.timeouts=[],t){var n=e.isInput?null:e.$e.querySelector(".ti-cursor");n&&e.$e.removeChild(n)}return e.status.destroyed=!0,e}))},this.empty=function(){return s("empty"),this},this.reset=function(){return this.destroy(),this.instances=this.instances.map((function(t){return t.reset()})),this},this.go=function(){return o((function(t){t.init()})),this}}}));

$(document).ready(function () {
  /////////////////////////////////(1)MAIN - gnb menu///////////////////////////////
  $(".gnb").hover(function(){
    $(this).find(".main .sub").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

/////////////////////////////////(1)MAIN - 동영상 위 글자///////////////////////////////
  let $img = $(".changeimg ul li"),
    $text = $(".changeimg ul li .des"),
    $lbtn = $(".side_btn .lbtn"),
    $rbtn = $(".side_btn .rbtn"),
    oldImg=0,
    newImg=0,
    oldText=0,
    newText=0,
  count = $img.length;

  function changeImg(newImg){ 
    if(oldImg != newImg){
      $img.eq(oldImg).removeClass("imgVisible");
      $img.eq(newImg).addClass("imgVisible");
    };
    oldImg = newImg;
  };

  function changeText(newText){ 
    if(oldText != newText){
      $text.eq(oldText).removeClass("textVisible");
      $text.eq(newText).addClass("textVisible");
    };
    oldText = newText;
  };

  function autoImg(){
    newImg++;
    if(newImg>count-1){ 
      newImg=0;
    }
    changeImg(newImg);
  };
  function autoText(){
    newText++;
    if(newText>count-1){ 
      newText=0;
    }
    changeText(newText);
  };
  timerImg = setInterval(autoImg,4000); 
  timerText = setInterval(autoText,4000); 

  $rbtn.click(function(){
    newImg++;
    if(newImg>count-1){ 
      newImg=0;
    }
    changeImg(newImg);

    newText++;
    if(newText>count-1){ 
      newText=0;
    }
    changeText(newText);
  });

/////////////////////////////////(1)MAIN - 썸네일///////////////////////////////
let goldidx=0; 
let gidx=0; 
function galleryImg(gidx){ 
  if(goldidx!=gidx){ 
    $(".thumbs li").eq(goldidx).css({"opacity":0.3}); // 기존의 썸네일 흐리게		
    $(".thumbs li").eq(gidx).css({"opacity":1}); //선택된 썸네일 선명하게	
    $(".largeImg li").eq(goldidx).stop().fadeOut(300);  //기존 이미지 사라짐
    $(".largeImg li").eq(gidx).stop().fadeIn(300); //선택된 이미지 나타남
    $(".imgText li").eq(goldidx).stop().fadeOut(300);  //기존 텍스트 사라짐
    $(".imgText li").eq(gidx).stop().fadeIn(300); //선택된 텍스트 나타남
  };
  goldidx=gidx;
};
$(".thumbs li").click(function(){
  gidx=$(this).index();
  galleryImg(gidx);
});
/////////////////////////////////(2)MODEL X - 옆에서 쓱삭 나오는 효과///////////////////////////////
  $(window).ready(function(){
    function draw(max, classname, colorname){
        var i=1;
        var func1 = setInterval(function(){
        if(i<max){
            color1(i,classname,colorname);
            i++;
        } else{
            clearInterval(func1);
        }
        },25);
    }
      function color1(i, classname, colorname) {
        $(classname).css({
            "background": "linear-gradient(to top, " + colorname + " " + i + "%, transparent " + i + "%)"
        });
    };

      draw(65, '.pie-chart1', '#590000');
      draw(85, '.pie-chart2', '#590000');
      draw(55, '.pie-chart3', '#590000');

      let $img = $(".car_content");
      let $btn = $(".color_btn .active");
      let $lbtn = $(".side_btn .lbtn");
      let $rbtn = $(".side_btn .rbtn");
      let oldidx = 0;
      let idx = 0; 
      let img_n = $img.length; 

      function changeImg(idx){

      if(oldidx != idx){
          $btn.eq(oldidx).removeClass("active"); 
          $btn.eq(idx).addClass("active"); 
          $img.eq(oldidx).stop().fadeOut("400"); 
          $img.eq(idx).stop().fadeIn("400"); 
          $img.eq(oldidx).removeClass("active");
          $img.eq(idx).addClass("active");
      }
      oldidx = idx;
      draw(20, '.pie-chart1', '#590000');
      draw(30, '.pie-chart2', '#590000');
      draw(50, '.pie-chart3', '#590000');
      };


      $lbtn.click(function(){
          idx--;
              if(idx < 0){
              idx=img_n-1;
          }
          changeImg(idx);
      });

      $rbtn.click(function(){
          idx++;
          if(idx > img_n-1){
              idx=0;
          }
          changeImg(idx); 
      });
    });

/////////////////////////////////(2)MODEL X - SECTION2///////////////////////////////
$(".btn li").click(function(){
  $(this).addClass("active");
  $(this).siblings().removeClass("active"); 
  //siblings()메서드 : 선택한 요소의 나머지를 말함

  let result = $(this).attr("data-alt");
  $(".tabContents div").removeClass("active");
  $("#"+result).addClass("active").hide().fadeIn();  //show()도 가능
});

/////////////////////////////////(3)MODEL Y - 옆에서 쓱삭 나오는 효과///////////////////////////////
$(window).ready(function(){
  function draw(max, classname, colorname){
      var i=1;
      var func1 = setInterval(function(){
          if(i<=max){
              color1(i, classname, colorname);
              i++;
          } else{
              clearInterval(func1);
          }
      }, 25);
  }
  function color1(i, classname, colorname) {
      $(classname).css({
          "background": "linear-gradient(to top, " + colorname + " " + i + "%, transparent " + i + "%)"
      });
  }
  draw(90, '.pie-chart4', '#222');
  draw(60, '.pie-chart5', '#222');
  draw(75, '.pie-chart6', '#222');

  let $img = $(".car_content_y");
  let $btn = $(".color_btn .active");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx = 0;
  let idx = 0; 
  let img_n = $img.length; 
  
  function changeImg(idx){
      if(oldidx != idx){
          $btn.eq(oldidx).removeClass("active"); 
          $btn.eq(idx).addClass("active"); 
          $img.eq(oldidx).stop().fadeOut("400"); 
          $img.eq(idx).stop().fadeIn("400"); 
          $img.eq(oldidx).removeClass("active");
          $img.eq(idx).addClass("active");

          draw(90, '.pie-chart4', '#222');
          draw(60, '.pie-chart5', '#222');
          draw(75, '.pie-chart6', '#222');
      }
      oldidx = idx;
  }
  $lbtn.click(function(){
      idx--;
      if(idx < 0){
          idx = img_n - 1;
      }
      changeImg(idx);
  });
  $rbtn.click(function(){
      idx++;
      if(idx >= img_n){
          idx = 0;
      }
      changeImg(idx); 
  });
});

/////////////////////////////////(3)MODEL Y - SECTION2///////////////////////////////
$(".btn_y li").click(function(){
  $(this).addClass("active");
  $(this).siblings().removeClass("active"); 
  //siblings()메서드 : 선택한 요소의 나머지를 말함

  let result = $(this).attr("data-alt");
  $(".tabContents_y div").removeClass("active");
  $("#"+result).addClass("active").hide().fadeIn();  //show()도 가능
});

/////////////////////////////////(5)ITEM - SECTION2///////////////////////////////
let initialImage = $(".title.active").attr("data-image");
$(".image img").attr("src", initialImage);

$(".title").click(function() {
    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active");

    $(this).siblings(".desc").stop().slideUp();
    $(this).next().stop().slideToggle();

    let dataImage = $(this).attr("data-image");
    $(".image img").attr("src", dataImage).hide().fadeIn();
});

  
  
  
  
  
  
  
  
  
/////////////////////////////////(8)STORIES - SECTION1///////////////////////////////
$(".gnb").hover(function(){
  $(this).find(".main .sub_all").stop().slideDown();
  $(".sub_bgbox").stop().slideDown();
},function(){
  $(this).find(".main .sub_all").stop().slideUp();
  $(".sub_bgbox").stop().slideUp();
});
$(".con2").hide();

$(".n-btn").find("b:nth-child(2)").click(function(){
  $(".con2").show();
  $(".con1 ").hide();
});

$(".n-btn").find("b:nth-child(1)").click(function(){
  $(".con1").show();
  $(".con2").hide();
});

$(".n-btn").find("b:nth-child(2)").click(function(){
  $(".n-btn").find("b:nth-child(1)").removeClass("active")
  $(".n-btn").find("b:nth-child(2)").addClass("active")
});

$(".n-btn").find("b:nth-child(1)").click(function(){
  $(".n-btn").find("b:nth-child(2)").removeClass("active")
  $(".n-btn").find("b:nth-child(1)").addClass("active")
});

  
  
  
  
  
  
  
  
  
  
  
  
  






});

///////////////////////////////(4)TECH- MAIN(타이핑글자)///////////////////////////////
window.instance = new TypeIt("#typing1", {
  speed: 100
})
  .type("")
  .pause(500)
  .delete(4)
  .pause(500)
  .type("ring.")
  .pause(500)
  .delete()
  .pause(500)
  .options({
    speed: 25
  })
  .type("")
  .go();

  new TypeIt("#typing2", {
  speed: 100,
  strings:
    "Thank you for watching...",
  waitUntilVisible: true,
  loop: true  
}).go();