(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{25:function(t,e,a){},35:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),s=a(19),c=a.n(s),r=(a(25),a(7)),d=a(8),l=a(10),o=a(9),j=a(12),p=function(){return JSON.parse(localStorage.getItem("event"))},b=a(0),u=function(t){var e=p()?p():[{participants:"",name:"",date:""}],a="";e.map((function(t){return a+=","+t.participants}));var n=(a=a.split(",").slice(1)).filter((function(t,e){return a.indexOf(t)===e})).map((function(t,e){return Object(b.jsx)("option",{children:t},e)}));return Object(b.jsxs)("div",{className:"manager",children:[Object(b.jsx)("div",{id:"name",children:"Calendar"}),Object(b.jsxs)("select",{className:"members",onChange:function(e){return t.participants(e.target)},children:[Object(b.jsx)("option",{children:"All members"}),n]}),Object(b.jsx)("div",{className:"addevent",children:Object(b.jsx)(j.b,{to:"/calendar-on-react/addevent",children:Object(b.jsx)("button",{className:"css-button",id:"eventButton",children:"Event +"})})})]})},h=a(14),m=function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).date=n.props.d+n.props.i[0]+n.props.i[1],n.state={data:t.data,participants:t.participants,warning:!1,name:"",canClose:!0},n}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(t){this.props.participants!==t.participants?this.setState({participants:this.props.participants}):this.props.data!==t.data&&this.setState({data:this.props.data})}},{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{className:"d-td",id:this.props.participants,children:this.state.data.map((function(e){return e.date===t.date&&e.participants.match(t.state.participants)||"All members"===t.state.participants&&e.date===t.date?Object(b.jsxs)("div",{className:"taskWrap",children:[Object(b.jsx)("div",{className:"event",id:t.date,children:e.name},e.date),Object(b.jsx)("div",{className:"cl-btn-7",onClick:function(){return t.props.warning(e.name,e.date)}})]},e.date):""}))})}}]),a}(n.Component),O=function(t){return Object(b.jsxs)("div",{className:"d-tr",children:[Object(b.jsx)("div",{className:"d-td time",children:t.i}),Object(b.jsx)(m,{i:t.i,d:"mon",participants:t.participants,warning:t.warning,data:t.data}),Object(b.jsx)(m,{i:t.i,d:"tue",participants:t.participants,warning:t.warning,data:t.data}),Object(b.jsx)(m,{i:t.i,d:"wed",participants:t.participants,warning:t.warning,data:t.data}),Object(b.jsx)(m,{i:t.i,d:"thu",participants:t.participants,warning:t.warning,data:t.data}),Object(b.jsx)(m,{i:t.i,d:"fri",participants:t.participants,warning:t.warning,data:t.data})]})},v=function(t){localStorage.setItem("event",JSON.stringify(t))},x=function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).warning=function(t,e){!1===n.state.warning&&n.setState({warning:!0,date:e,name:t})},n.delTask=function(t){var e=Object(h.a)(p()).filter((function(e){return e.date!==t}));v(e),n.setState((function(e){return{data:e.data.filter((function(e){return e.date!==t})),warning:!1,canClose:!0}}))},n.date=["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],n.today=new Date,n.dd=String(n.today.getDate()).padStart(2,"0"),n.mm=String(n.today.getMonth()+1).padStart(2,"0"),n.yyyy=n.today.getFullYear(),n.today=n.dd+"/"+n.mm+"/"+n.yyyy,n.state={data:p()||[{participants:"",name:"",date:""}],warning:!1},n}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"d-table",children:[Object(b.jsxs)("div",{className:"d-tr",children:[Object(b.jsx)("div",{className:"d-td",children:"today is: "+this.today}),Object(b.jsx)("div",{className:"d-td days",children:"Mon"}),Object(b.jsx)("div",{className:"d-td days",children:"Tue"}),Object(b.jsx)("div",{className:"d-td days",children:"Wed"}),Object(b.jsx)("div",{className:"d-td days",children:"Thu"}),Object(b.jsx)("div",{className:"d-td days",children:"Fri"})]}),this.date.map((function(e,a){return Object(b.jsx)(O,{id:a,i:e,participants:t.props.participants,warning:t.warning,data:t.state.data},a)}))]}),!0===this.state.warning?Object(b.jsx)("div",{className:"modal",children:Object(b.jsxs)("div",{className:"modalWindow",children:[Object(b.jsxs)("div",{className:"confirmMessage",children:['"Are you sure, you want to delete ',this.state.name,'"']}),Object(b.jsx)("div",{className:"noButton",children:Object(b.jsx)("button",{className:"no",onClick:function(){return t.setState({warning:!1,canClose:!0})},children:"No"})}),Object(b.jsx)("div",{className:"yesButton",children:Object(b.jsx)("button",{className:"yes",onClick:function(){return t.delTask(t.state.date)},children:"Yes"})})]})}):""]})}}]),a}(n.Component),f=function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).participants=function(t){n.newParticipants=t.value,n.setState({participants:t.value})},n.state={participants:"All members"},n}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{participants:this.participants}),Object(b.jsx)(x,{participants:this.state.participants})]})}}]),a}(n.Component),g=a(2),N=function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).errorMessage=function(t,e){var a=n.state.data.find((function(t){return t.date===e}));n.setState((function(){if(""===t.name)return{error:!0,message:"Filed to create an event. Enter the name of the event."};if(a)return{error:!0,message:"Filed to create an event. Time slot is already booked."};var e=Object(h.a)(n.state.data);return e.push(t),v(e),{error:!1,message:"",data:e}}))},n.newEvent=function(t){t.preventDefault();var e=t.target.elements,a=e.eventName.value,i=e.participants.value,s=e.day.value,c=e.time.value,r=(s.substr(0,3)+c.substr(0,2)).toLowerCase(),d={name:a,participants:i,date:r};return n.errorMessage(d,r),!1},n.state={data:p()||[{participants:"",name:"",date:""}],participants:["Mariya, Bob, Alex","Steve, Bill, Elon","John","Angela"],error:!1,message:""},n}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"addEvent",children:[this.state.error?Object(b.jsxs)("div",{className:"errorMessage",children:[this.state.message,Object(b.jsx)("div",{className:"cl-btn-2",onClick:function(){return t.setState({error:!1})},children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"leftright"}),Object(b.jsx)("div",{className:"rightleft"})]})})]}):"",Object(b.jsxs)("form",{onSubmit:this.newEvent,children:[Object(b.jsxs)("div",{className:"containerName",children:["Name of the event:",Object(b.jsx)("textarea",{className:"eventName",name:"eventName"})]}),Object(b.jsxs)("div",{className:"participants",children:["Participants",Object(b.jsx)("select",{name:"participants",children:this.state.participants.map((function(t,e){return Object(b.jsx)("option",{value:t,children:t},e)}))})]}),Object(b.jsxs)("div",{className:"containerDay",children:["Day:",Object(b.jsxs)("select",{name:"day",children:[Object(b.jsx)("option",{children:"Monday"}),Object(b.jsx)("option",{children:"Tuesday"}),Object(b.jsx)("option",{children:"Wednesday"}),Object(b.jsx)("option",{children:"Thursday"}),Object(b.jsx)("option",{children:"Friday"})]})]}),Object(b.jsxs)("div",{className:"containerTime",children:["Time:",Object(b.jsxs)("select",{name:"time",children:[Object(b.jsx)("option",{children:"10:00"}),Object(b.jsx)("option",{children:"11:00"}),Object(b.jsx)("option",{children:"12:00"}),Object(b.jsx)("option",{children:"13:00"}),Object(b.jsx)("option",{children:"14:00"}),Object(b.jsx)("option",{children:"15:00"}),Object(b.jsx)("option",{children:"16:00"}),Object(b.jsx)("option",{children:"17:00"}),Object(b.jsx)("option",{children:"18:00"})]})]}),Object(b.jsxs)("div",{className:"containerButtons",children:[Object(b.jsx)("div",{children:Object(b.jsx)(j.b,{to:"/calendar-on-react/calendar",children:Object(b.jsx)("button",{className:"cancelButton",children:"Cancel"})})}),Object(b.jsx)("input",{type:"submit",className:"createlButton",value:"Create"})]})]})]})}}]),a}(n.Component);var y=function(){return Object(b.jsx)(j.a,{children:Object(b.jsx)("div",{className:"App",id:"v12",children:Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{exact:!0,path:"/votmail1.github.io/calendar-on-react/addevent",component:N}),Object(b.jsx)(g.a,{exact:!0,path:"/votmail1.github.io/calendar-on-react/calendar",component:f}),Object(b.jsx)(g.a,{exact:!0,path:"/votmail1.github.io/calendar-on-react/",component:f})]})})})};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.5f54c1a6.chunk.js.map