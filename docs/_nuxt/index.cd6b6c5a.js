import{u as i}from"./useCssAnimation.f80b90ea.js";import{d as c,r as l,n as d,a as p,e,u as n,f as a,o as u}from"./entry.94cbf39e.js";const _={class:"hero-content text-center"},f={class:"max-w-lg"},m=e("h1",{class:"text-5xl font-bold"},"Pokerious",-1),h=e("p",{class:"py-6"},[a(" Your preflop improvement will lead you to victory."),e("br"),a(" This app will help you learn the best action (open raise) based on your hand range. ")],-1),v=c({__name:"index",setup(b){const o=l(),{play:t}=i(o,"animate-slide-out-bck-center",{endFunc:()=>{d("/op")},duration:500});return(x,s)=>(u(),p("div",{ref_key:"heroRef",ref:o,class:"hero"},[e("div",_,[e("div",f,[m,h,e("button",{class:"btn-primary btn",onClick:s[0]||(s[0]=(...r)=>n(t)&&n(t)(...r))},"Get Started")])])],512))}});export{v as default};