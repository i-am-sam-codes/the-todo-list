(()=>{"use strict";function t(){const t=document.getElementById("home"),n=document.getElementById("page"),d=document.createElement("div");d.setAttribute("id","page"),d.classList.add("card"),d.style.width="78%",d.style.backgroundColor="#f7b801",d.style.float="right";const l=document.createElement("ul");l.style.listStyleType="none";const o=document.createElement("form"),c=document.createElement("input");c.type="text",c.placeholder="Enter new task",c.style.marginRight="10px";const a=document.createElement("input");a.type="date",a.placeholder="Due date",a.style.marginRight="10px";const i=document.createElement("button");i.style.float="right",i.type="submit",i.textContent="Add Task",o.addEventListener("submit",(t=>{t.preventDefault();const e=c.value.trim(),n=a.value;if(""!==e){const t=function(t,e){const n=document.createElement("li");n.classList.add("task-item");const d=document.createElement("input");d.type="checkbox",d.addEventListener("change",(()=>{d.checked?n.classList.add("completed"):n.classList.remove("completed")}));const l=document.createElement("span");l.textContent=t;const o=document.createElement("button");o.classList.add("delete-button"),o.style.margin="30px",o.textContent="done",o.addEventListener("click",(()=>{n.remove()}));const c=document.createElement("span");return c.textContent=format(parseISO(e),"MMM d, yyyy"),c.style.marginLeft="10px",n.appendChild(c),n.appendChild(d),n.appendChild(l),n.appendChild(o),n}(e,n);l.appendChild(t),c.value="",a.value=""}})),o.appendChild(c),o.appendChild(a),o.appendChild(i),d.appendChild(e),d.appendChild(l),d.appendChild(o),n&&t.removeChild(n),t.appendChild(d)}let e=document.createElement("h2");function n(){t()}function d(){t()}document.body.appendChild(function(){const t=document.getElementById("content"),e=document.createElement("div");e.classList.add("nav");const n=document.createElement("div");n.textContent="my todo list",n.style.fontSize="30px",n.style.backgroundColor="#3d348b",n.style.padding="20px",e.appendChild(n),t.appendChild(e)}(),function(){const l=document.getElementById("content"),o=document.createElement("div");o.appendChild(function(){const l=document.getElementById("content");!function(){const l=document.getElementById("content"),o=document.createElement("div");o.style.backgroundColor="#bbbcf6",o.style.width="20%",o.style.height="300px",o.style.float="left";const c=document.createElement("div");c.style.display="flex",c.style.flexDirection="column",c.style.gap="10px",c.style.padding="10px",c.style.marginTop="20px";const a=document.createElement("button");a.setAttribute("id","inbox"),a.classList.add("btn"),a.textContent="All Tasks",a.addEventListener("click",t),a.addEventListener("click",(()=>{e.textContent=a.textContent}));const i=document.createElement("button");i.setAttribute("id","today"),i.classList.add("btn"),i.textContent="Today",i.addEventListener("click",d),i.addEventListener("click",(()=>{e.textContent=i.textContent}));const s=document.createElement("button");s.setAttribute("id","week"),s.classList.add("btn"),s.textContent="This week",s.addEventListener("click",n),s.addEventListener("click",(()=>{e.textContent=s.textContent}));const p=document.createElement("div");p.textContent="PROJECTS",p.style.fontWeight="bold",p.style.fontSize="20px",p.style.display="flex",p.style.flexDirection="column",p.style.gap="10px",p.style.padding="10px";const m=document.createElement("button");m.setAttribute("id","add-project"),m.textContent="+ add project",p.appendChild(m),c.appendChild(a),c.appendChild(i),c.appendChild(s),c.appendChild(p),o.appendChild(c),l.appendChild(o)}();const o=document.createElement("div");o.setAttribute("id","home"),o.style.backgroundColor="#7678ed",l.appendChild(o)}()),l.appendChild(o)}())})();