import{j as e}from"./index-d1c642c4.js";import{d as l}from"./Database-4a53ce83.js";function c(){const r=l.employees;function t(s,i){return e.jsxs("div",{className:"employee",children:[e.jsx("img",{src:`/src/assets/pfp/${s.pfp}.jpg`}),e.jsxs("div",{className:"employee-details",children:[e.jsx("h2",{children:e.jsx("a",{href:`/employee/?id=${i}`,children:s.name})}),e.jsxs("p",{children:["Job Title: ",s.jobTitle]})]})]},i)}return e.jsxs("div",{className:"List",children:[e.jsx("h1",{children:"Alterra Employee List"}),Object.keys(r).map((s,i)=>t(r[s],s))]})}export{c as default};
