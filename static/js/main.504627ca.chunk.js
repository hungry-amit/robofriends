(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,function(e,a,n){e.exports=n(18)},,,,,function(e,a,n){},function(e,a,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),c=(n(13),n(3)),l=n(4),s=n(6),m=n(5),u=n(7),h=(n(14),n(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]);n(16);var d=function(e){var a=e.props_from_parent,n="https://robohash.org/"+a.id;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:n,height:"250px",width:"250px"}),r.a.createElement("h2",null,"Name: ",a.name),r.a.createElement("h2",null,"Username: ",a.username),r.a.createElement("h2",null,"Email: ",a.email))};n(17);var f=function(e){return r.a.createElement("div",{className:"search"},r.a.createElement("span",{id:"sp"},"Search:"),r.a.createElement("textarea",{id:"ta",onChange:function(a){e.callback_function_from_parent(a.target.value)}}))},p=function(e){function a(e){var n;return Object(c.a)(this,a),(n=Object(s.a)(this,Object(m.a)(a).call(this,e))).parent_callback_function=function(e){n.setState({search_string:e},(function(){n.setState({filtered_robots:h.filter((function(e){return e.name.toLowerCase().includes(n.state.search_string)}))})}))},n.state={search_string:"",filtered_robots:h},n}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Our Employees"),r.a.createElement(f,{callback_function_from_parent:this.parent_callback_function}),r.a.createElement("div",{className:"cardList"},this.state.filtered_robots.map((function(e){return r.a.createElement(d,{key:e.id,props_from_parent:e})}))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.504627ca.chunk.js.map