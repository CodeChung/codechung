(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{155:function(t,e,o){var content=o(171);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("504d216a",content,!0,{sourceMap:!1})},170:function(t,e,o){"use strict";var n=o(155);o.n(n).a},171:function(t,e,o){(e=o(25)(!1)).push([t.i,'.about{display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;height:calc(100vh - 100px);-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;background:#000;background:-webkit-gradient(linear,left top,left bottom,from(#000),color-stop(0,#fff),color-stop(8%,#878787),color-stop(20%,#1c1c1c),color-stop(35%,#000),color-stop(35%,#000),color-stop(39%,#000),color-stop(60%,#111),color-stop(76%,#000),color-stop(99%,#000),color-stop(100%,#000),to(#131313));background:linear-gradient(180deg,#000 0,#fff 0,#878787 8%,#1c1c1c 20%,#000 35%,#000 0,#000 39%,#111 60%,#000 76%,#000 99%,#000 100%,#131313 0);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#131313",GradientType=0)}.neon{left:50%;top:20vh;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;font-size:5em;color:#fff;text-shadow:0 0 20px #ff005b;opacity:.29}.neon,.neon:after{position:absolute;padding:0 20px}.neon:after{content:attr(data-text);top:0;left:0;z-index:-1;color:#ff005b}.face{width:300px;height:300px;border-radius:50%;background:#ffcd00;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-transform:scale(.7);transform:scale(.7);position:relative;top:69px;margin-bottom:70px}.badge{background:#f8f8ff;border-radius:12px;position:absolute;left:25.9%;top:46%;-webkit-transition:.4s;transition:.4s}.badge:active,.badge:hover{-webkit-transform:scale(1.69);transform:scale(1.69)}.badge-top{background:#00f}.badge-text,.badge-top{padding:5px}.butler{background:#40e0d0;width:50%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;box-shadow:-50px 50px 50px rgba(0,0,0,.15);border-radius:15px 15px 0 0}.face:before{content:"";position:absolute;top:180px;width:150px;height:70px;background:#b57700;-webkit-transition:.5s;transition:.5s;border-bottom-left-radius:70px;border-bottom-right-radius:70px}.face:hover:before{top:210px;width:150px;height:20px;background:#b57700;border-bottom-left-radius:0;border-bottom-right-radius:0}.eyes{top:-40px;display:-webkit-box;display:flex}.eyes,.eyes .eye{position:relative}.eyes .eye{width:80px;height:80px;display:block;background:#fff;margin:0 15px;border-radius:50%}.eyes .eye:before{content:"";position:absolute;top:50%;left:25px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:40px;height:40px;background:#333;border-radius:50%}.messages{width:50%;border-radius:0 0 25px 25px;-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:justify;justify-content:space-between;padding:25px;box-shadow:-50px 50px 50px rgba(0,0,0,.15);border:1px solid #ebebeb;background:#f8f8ff}.message-chat,.messages{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.message-chat{width:100%;height:69px;font-size:20px}.bobert{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:start;align-items:flex-start}.client{-webkit-box-align:end;align-items:flex-end}.client,.message-input{-webkit-box-pack:end;justify-content:flex-end}.message-input{height:119px;display:-webkit-box;display:flex;width:50%;padding-top:6.9px}.message-input input{height:39px;outline:none;width:60%;border-radius:6.9px;border:1px solid grey;padding:0 10px}.message-input button{height:39px;width:80px;margin-right:5px;border-radius:6.9px;outline:none}@media (max-width:768px){.about{padding-top:40px}.neon{font-size:3.1em;top:26vh}.messages{width:90%}.message-chat{font-size:16px}.butler,.message-input{width:90%}.badge{left:8%;top:51%}}',""]),t.exports=e},204:function(t,e,o){"use strict";o.r(e);var n={components:{},head:function(){return{title:"About the App",meta:[{hid:"about",name:"about",content:"Oh please come in and rest at the manor. You must, you must my liege. What do you wish to know about CodeChung?"}]}},created:function(){},mounted:function(){},methods:{moveEyes:function(){document.querySelectorAll(".eye").forEach((function(t){var e=t.getBoundingClientRect().left+t.clientWidth/2,o=t.getBoundingClientRect().top+t.clientWidth/2,n=Math.atan2(event.pageX-e,event.pageY-o)*(180/Math.PI)*-1+270;t.style.transform="rotate("+n+"deg)"}))}}},r=(o(170),o(6)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about",on:{mousemove:t.moveEyes}},[o("h1",{staticClass:"neon",attrs:{"data-text":"Help Desk"}},[t._v("Help Desk")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),o("div",{staticClass:"message-input"})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"butler"},[e("div",{staticClass:"face"},[e("div",{staticClass:"eyes"},[e("div",{staticClass:"eye"}),this._v(" "),e("div",{staticClass:"eye"}),this._v(" "),e("div",{staticClass:"moustache"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"badge"},[e("div",{staticClass:"badge-top"},[this._v("Hello my name is")]),this._v(" "),e("div",{staticClass:"badge-text"},[e("h3",[this._v("Bobert Phillips")]),this._v(" "),e("h4",[this._v("Web Intern, PhD")])]),this._v(" "),e("div",{staticClass:"badge-bottom"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"messages"},[e("div",{staticClass:"bobert message-chat"},[e("p",[e("span",{staticStyle:{color:"red"}},[this._v("Sorry")]),this._v(", I'm on break right now. Check back later.\n      ")])]),this._v(" "),e("div",{staticClass:"client message-chat"},[e("p",[this._v("Bobert Phillips, Web Intern")])])])}],!1,null,null,null);e.default=component.exports}}]);