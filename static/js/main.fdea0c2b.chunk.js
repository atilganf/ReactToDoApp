(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,o){t.exports=o(28)},18:function(t,e,o){},19:function(t,e,o){},28:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),l=o(9),c=o.n(l),i=(o(18),o(1)),r=o(2),u=o(4),s=o(3),d=o(5),m=(o(19),o(7)),p=o(11),f=o(10),h=o.n(f),g=function(t){function e(t){var o;return Object(i.a)(this,e),(o=Object(u.a)(this,Object(s.a)(e).call(this,t))).setText=function(t){o.setState({text:t.target.value})},o.handleSubmit=function(t){t.preventDefault(),""!==o.state.text&&o.props.addTodo({id:h.a.generate(),text:o.state.text,complete:!1}),o.setState({text:""})},o.state={text:""},o}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{value:this.state.text,onChange:this.setText,placeholder:"Task"}),a.a.createElement("button",{type:"submit"},"Add Task"))}}]),e}(a.a.Component),b=function(t){return a.a.createElement("div",null,a.a.createElement("div",{style:{textDecoration:t.todo.complete?"line-through":"",color:t.todo.complete?"#007bff":"#28a745",display:"inline-block",cursor:"pointer",padding:"2px"},onClick:t.toggleComplete},t.todo.text),a.a.createElement("button",{style:{display:"inline-block"},onClick:t.onDelete},"X"))},v=function(t){function e(t){var o;return Object(i.a)(this,e),(o=Object(u.a)(this,Object(s.a)(e).call(this,t))).addTodo=function(t){o.setState({todos:[t].concat(Object(p.a)(o.state.todos))})},o.changeToDoShow=function(t){o.setState({todoShow:t})},o.toggleAllComplete=function(){o.setState({todos:o.state.todos.map(function(t){return Object(m.a)({},t,{complete:o.state.toggleAll})}),toggleAll:!o.state.toggleAll})},o.deleteAllComplete=function(){o.setState({todos:o.state.todos.filter(function(t){return!t.complete})})},o.deleteToDo=function(t){o.setState({todos:o.state.todos.filter(function(e){return e.id!==t})})},o.state={todos:[],todoShow:"all",toggleAll:!0},o}return Object(d.a)(e,t),Object(r.a)(e,[{key:"toggleComplete",value:function(t){this.setState({todos:this.state.todos.map(function(e){return e.id===t?Object(m.a)({},e,{complete:!e.complete}):e})})}},{key:"render",value:function(){var t=this,e=[];return e="all"===this.state.todoShow?this.state.todos:"active"===this.state.todoShow?this.state.todos.filter(function(t){return!t.complete}):this.state.todos.filter(function(t){return t.complete}),a.a.createElement("div",null,a.a.createElement(g,{addTodo:this.addTodo}),a.a.createElement("button",{onClick:function(){return t.changeToDoShow("all")}},"All"),a.a.createElement("button",{onClick:function(){return t.changeToDoShow("active")}},"Active"),a.a.createElement("button",{onClick:function(){return t.changeToDoShow("complete")}},"Complete"),a.a.createElement("div",null,"Todos Left : ",this.state.todos.filter(function(t){return!t.complete}).length),e.map(function(e){return a.a.createElement(b,{key:e.id,todo:e,toggleComplete:function(){return t.toggleComplete(e.id)},onDelete:function(){return t.deleteToDo(e.id)}})}),this.state.todos.some(function(t){return t.complete})?a.a.createElement("button",{onClick:function(){return t.deleteAllComplete()}},"Delete All Complete"):null,a.a.createElement("button",{onClick:function(){return t.toggleAllComplete()}},"Toggle All Complete"))}}]),e}(a.a.Component),C=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(v,null))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.fdea0c2b.chunk.js.map