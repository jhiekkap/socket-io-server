(this["webpackJsonpsocket-io-client"]=this["webpackJsonpsocket-io-client"]||[]).push([[0],{43:function(e,t,n){e.exports=n(87)},48:function(e,t,n){},79:function(e,t){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(36),i=n.n(c),l=(n(48),n(1)),o=n(3),u=n.n(o);var s=n(100),m=n(18),d=n.n(m),E=n(37),f=function(e){var t=e.currentUser,n=e.receiver,c=Object(a.useRef)(),i=Object(a.useRef)(),o=Object(a.useState)([]),s=Object(l.a)(o,2),m=s[0],f=s[1],h=Object(a.useState)(!1),b=Object(l.a)(h,2),v=b[0],p=b[1];return Object(a.useEffect)((function(){c.current.width=180,c.current.height=150;var e=c.current.getContext("2d");console.log("CANVASREF",c),console.log("CONTEX",e),e.width=c.current.width,e.height=c.current.height;var a=u()("https://fierce-beach-86051.herokuapp.com/",{query:{chatID:t}});function r(e){console.log(e),f((function(t){return t.concat(e)}))}function l(e){try{i.current.srcObject=e}catch(t){i.current.src=URL.createObjectURL(e)}r("Camera connected")}return function(){var e=Object(E.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!navigator.mediaDevices){e.next=6;break}return e.next=4,navigator.mediaDevices.getUserMedia({video:!0,audio:!1});case 4:l(e.sent);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r("Camera not connected"),r(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()(),setInterval((function(){return function(e,r){r.drawImage(e,0,0,r.width,r.height),a.emit("send_message",{senderChatID:t,receiverChatID:n,videoStream:c.current.toDataURL("image/webp")})}(i.current,e)}),.1),function(){return a.disconnect()}}),[t,n]),r.a.createElement("div",null,!v&&r.a.createElement("button",{onClick:function(){p(!0)}},"STREAM"),r.a.createElement("div",{style:{display:v?"block":"none"}},r.a.createElement("video",{ref:i,src:"",width:"180",height:"150",autoPlay:!0})),r.a.createElement("canvas",{ref:c,style:{display:"none"}}),r.a.createElement("ul",null,m.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))},h=function(e){var t=e.imgRef,n=e.videoSender;return r.a.createElement("div",null,r.a.createElement("img",{ref:t,width:"150",height:"120",alt:"view"}),n)},b="https://fierce-beach-86051.herokuapp.com/",v={heart:"\u2764\ufe0f\ufe0f",happy:"\ud83d\ude0a",sad:"\u2639\ufe0f"},p=["Jari","Sampsa","Kasperi","Janina"];function g(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),o=Object(l.a)(i,2),m=o[0],d=o[1],E=Object(a.useState)(p[0]),g=Object(l.a)(E,2),j=g[0],O=g[1],S=Object(a.useState)(p[1]),C=Object(l.a)(S,2),y=C[0],k=C[1],I=Object(a.useState)(""),w=Object(l.a)(I,2),L=w[0],A=w[1],D=Object(a.useState)(null),R=Object(l.a)(D,2),T=(R[0],R[1],Object(a.useState)(50)),x=Object(l.a)(T,2),U=(x[0],x[1],Object(a.useState)(50)),N=Object(l.a)(U,2),J=(N[0],N[1],Object(a.useState)(!1)),K=Object(l.a)(J,2),P=K[0],F=K[1],M=Object(a.useState)(""),_=Object(l.a)(M,2),V=_[0],q=_[1],z=Object(a.useState)(""),B=Object(l.a)(z,2),H=(B[0],B[1],Object(a.useState)("")),W=Object(l.a)(H,2),Y=W[0],X=W[1],$=Object(a.useRef)(),G={cursor:"pointer",marginRight:"2%",fontSize:P&&"20px"};console.log("CURRENT USER: ",j),console.log("RECIPIENTS: ",L),Object(a.useEffect)((function(){console.log("USE EFFECT");var e=u()(b,{query:{chatID:j}});return e.on("receive_message",(function(e){e.content?d((function(t){return t.concat(e.senderChatID+"=> "+e.receiverChatID+": "+e.content)})):e.emoiji?(F(!0),q(e.emoiji),setTimeout((function(){F(!1),q("")}),2e3)):e.videoStream&&($.current.src=e.videoStream,Y!==e.senderChatID&&X(e.senderChatID))})),function(){return e.disconnect()}}),[j,y]);var Q=function(e){u()(b).emit("send_message",{receiverChatID:y,senderChatID:j,recipients:L,emoiji:e})};return r.a.createElement("div",{style:{padding:"5%"}},r.a.createElement(s.a,{container:!0,spacing:3},r.a.createElement(s.a,{item:!0,md:6},r.a.createElement(f,{currentUser:j,receiver:y}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u()(b).emit("send_message",{receiverChatID:y,senderChatID:j,content:n,recipients:L}),d((function(e){return e.concat(j+"=> "+y+": "+n)})),c("")}},r.a.createElement("div",null,r.a.createElement("div",null,"L\xc4HETT\xc4J\xc4"),r.a.createElement("select",{value:j,onChange:function(e){return O(e.target.value)}},p.map((function(e,t){return r.a.createElement("option",{key:t},e)})))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("div",null,"VASTAANOTTAJA"),r.a.createElement("select",{value:y,onChange:function(e){return k(e.target.value)}},p.map((function(e,t){return r.a.createElement("option",{key:t},e)})))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("div",null,"VIESTI"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("button",{type:"submit",disabled:!j},"PUSH ME")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:"ALL"!==L,onChange:function(){return A("ALL"!==L?"ALL":"")},name:"recipients"}),r.a.createElement("label",null,"YKSITYINEN"),r.a.createElement("input",{type:"checkbox",checked:"ALL"===L,onChange:function(){return A("ALL"===L?"":"ALL")},name:"recipients"}),r.a.createElement("label",null,"KAIKKI")))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return Q("heart")},style:G}," \u2764\ufe0f\ufe0f "),r.a.createElement("span",{onClick:function(){return Q("happy")},style:G}," \ud83d\ude0a "),r.a.createElement("span",{onClick:function(){return Q("sad")},style:G}," \u2639\ufe0f ")),r.a.createElement("div",null,r.a.createElement("ul",null,m.map((function(e,t){return r.a.createElement("li",{key:t},e)})))),V&&r.a.createElement("div",{style:{position:"fixed",top:"50px",right:"50px",fontSize:"300px"}},v[V])),r.a.createElement(s.a,{item:!0,md:6,style:{display:Y?"block":"none"}},r.a.createElement(h,{imgRef:$,videoSender:Y}))))}var j=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return c((function(e){return!e}))}},"STOPPA CLIENTEN"),n?r.a.createElement(g,null):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.9f9de76b.chunk.js.map