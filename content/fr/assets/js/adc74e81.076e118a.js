"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3014],{79737:function(e,t,r){var n=r(75068),s=r(74792),a=r(81876),i=r(67294);var c=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=window.location.pathname,t=function(e){var t="swagger";e.indexOf("functions")>-1?t="swaggerfunctions":e.indexOf("source")>-1?t="swaggersource":e.indexOf("sink")>-1?t="swaggersink":e.indexOf("packages")>-1&&(t="swaggerpackages");var r=(0,a.bo)(),n=(0,a.ak)(t);if("master"!==r){var s=r.split("."),i=parseInt(s[0]),c=parseInt(s[1]);(i<2||c<3)&&(r="2.3.0")}return[r,n]}(e),r=t[0],n=t[1],s=window.location.search,i=(s=s.replace("?","")).split("&");if(i&&i.length>0)for(var c in r="master",n="",i){var o=i[c].split("=");"version"===o[0]&&(r=o[1]),"apiversion"===o[0]&&(n=o[1])}var u=document.querySelector(".container"),g=document.createElement("redoc");e.indexOf("admin-rest-api")>=0?g.setAttribute("spec-url","/swagger/"+r+"/"+n+"/swagger.json"):e.indexOf("functions-rest-api")>=0?g.setAttribute("spec-url","/swagger/"+r+"/"+n+"/swaggerfunctions.json"):e.indexOf("source-rest-api")>=0?g.setAttribute("spec-url","/swagger/"+r+"/"+n+"/swaggersource.json"):e.indexOf("sink-rest-api")>=0?g.setAttribute("spec-url","/swagger/"+r+"/"+n+"/swaggersink.json"):e.indexOf(!1)&&g.setAttribute("spec-url","/swagger/"+r+"/"+n+"/swaggerpackages.json"),g.setAttribute("lazy-rendering","true");var l=document.createElement("script");l.setAttribute("src","https://rebilly.github.io/ReDoc/releases/latest/redoc.min.js");var p=document.querySelector(".container script");console.log("script: ",p,"/swagger/"+r+"/"+n+"/swagger.json"),u.insertBefore(g,p),u.insertBefore(l,p)},r.render=function(){return i.createElement(s.Z,null,i.createElement("div",{className:"tailwind"},i.createElement("div",{className:"my-12 container"})))},t}(i.Component);t.Z=c},18307:function(e,t,r){r.r(t);var n=r(79737),s=r(67294);t.default=function(){return s.createElement(n.Z,null)}}}]);