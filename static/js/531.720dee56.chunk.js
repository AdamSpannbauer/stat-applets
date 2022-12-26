"use strict";(self.webpackChunkreact_sidebar=self.webpackChunkreact_sidebar||[]).push([[531],{3062:function(e,t,r){r(2791);var n=r(23),o=r(8055),a=r(120),u=r(76),i=r(5754),l=r(184);t.Z=function(e){var t=e.hookSetter,r=e.defaultValue;return(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(a.Z,{id:"curve-region-radio-buttons-group",children:"Region"}),(0,l.jsxs)(i.Z,{row:!0,onChange:function(e){t(e.target.value)},"aria-labelledby":"curve-region-radio-buttons-group-label",defaultValue:r||"outside",name:"curve-region-radio-buttons-group",children:[(0,l.jsx)(n.Z,{value:"below",control:(0,l.jsx)(u.Z,{}),label:"Below"}),(0,l.jsx)(n.Z,{value:"above",control:(0,l.jsx)(u.Z,{}),label:"Above"}),(0,l.jsx)(n.Z,{value:"between",control:(0,l.jsx)(u.Z,{}),label:"Between"}),(0,l.jsx)(n.Z,{value:"outside",control:(0,l.jsx)(u.Z,{}),label:"Outside"})]})]})}},2003:function(e,t,r){r(2791);var n=r(8228),o=r(184);t.Z=function(e){var t=e.hookValue,r=e.hookSetter,a=e.step;return(0,o.jsx)(n.Z,{type:"number",label:"Degrees of Freedom",value:t,inputProps:{step:a||1},onChange:function(e){var t=e.target.value;t<1&&(t=1),r(t)}})}},912:function(e,t,r){r(2791);var n=r(8228),o=r(184);t.Z=function(e){var t=e.hookValue,r=e.hookSetter,a=e.step,u=e.label;return(0,o.jsx)(n.Z,{type:"number",label:u||"X",value:t,inputProps:{step:a||1},onChange:function(e){return r(e.target.value)}})}},9952:function(e,t,r){r.d(t,{U:function(){return o},s:function(){return n}});var n=function(e,t){return{x:e,y:t,type:"scatter",mode:"lines",hovertemplate:"(%{x:.2f}, %{y:.2f})<extra></extra>",line:{color:"#f77f00"}}},o=function(e,t,r,n){var o=Number(r),a=Number(n);if(o>a){var u=[a,o];o=u[0],a=u[1]}for(var i=[],l=[],s=0;s<e.length-1;s+=1)e[s]>=o&&e[s]<=a&&(i.push(e[s]),l.push(t[s]));return{x:i,y:l,type:"scatter",mode:"lines",fill:"tozeroy",hoverinfo:"skip",line:{color:"#f77f00"}}}},8531:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(885),o=r(2791),a=r(6015),u=r(5953),i=r(912),l=r(3062),s=r(2003),c=r(184);var f=function(e){var t=e.hookValues,r=e.hookSetters,n=t.t,o=t.df,f=t.curveRegion,h=r.setT,x=r.setDF,v=r.setCurveRegion;return(0,c.jsx)(a.Z,{component:"form",sx:{width:"auto","& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:(0,c.jsxs)(u.ZP,{container:!0,alignItems:"center",justifyContent:"center",children:[(0,c.jsxs)(u.ZP,{item:!0,align:"center",xs:12,children:[(0,c.jsx)(i.Z,{label:"t",hookValue:n,hookSetter:h,step:.01}),(0,c.jsx)(s.Z,{hookValue:o,hookSetter:x})]}),(0,c.jsx)(u.ZP,{item:!0,align:"center",xs:12,children:(0,c.jsx)(l.Z,{hookValue:f,hookSetter:v,defaultValue:f})})]})})},h=r(8286),x=r(2864),v=r(7609),d=r(9952);var p=function(e){var t=e.hookValues,r=t.df,n=t.area,o=t.curveRegion,a=(0,v.Z)(Number(r)),u=a.x,i=a.y,l=function(e,t){var r={r1x1:null,r1x2:null,r2x1:null,r2x2:null,z:null};return Math.abs(e)>=x._?(r.z=1/0,r.r1x1=-x._,r.r1x2=x._):"below"===t?(r.t=e,r.r1x1=-x._,r.r1x2=e):"above"===t?(r.t=e,r.r1x1=e,r.r1x2=x._):"between"===t?(r.t=e,r.r1x1=-Math.abs(e),r.r1x2=Math.abs(e)):"outside"===t&&(r.t=e,r.r1x1=-x._,r.r1x2=-Math.abs(e),r.r2x1=Math.abs(e),r.r2x2=x._),r}(Number(n),o),s=l.r1x1,f=l.r1x2,p=l.r2x1,b=l.r2x2,Z=[(0,d.s)(u,i)],g=null!==s&&null!==f,m=null!==p&&null!==b;if(g){var j=(0,d.U)(u,i,s,f);Z.push(j)}if(m){var M=(0,d.U)(u,i,p,b);Z.push(M)}return g||m||(Z[0].fill="tozeroy"),(0,c.jsxs)("div",{children:[(0,c.jsx)("hr",{}),(0,c.jsx)(h.Z,{data:Z,layout:{xaxis:{zeroline:!1},showlegend:!1,margin:{l:50,r:40,b:50,t:40,pad:4}},config:{displayModeBar:!1}})]})};var b=function(){var e=(0,o.useState)(1.96),t=(0,n.Z)(e,2),r=t[0],a=t[1],u=(0,o.useState)(10),i=(0,n.Z)(u,2),l=i[0],s=i[1],h=(0,o.useState)("outside"),x=(0,n.Z)(h,2),v={t:r,df:l,curveRegion:x[0]},d={setT:a,setDF:s,setCurveRegion:x[1]};return(0,c.jsxs)("div",{className:"page",children:[(0,c.jsx)(f,{hookValues:v,hookSetters:d}),(0,c.jsx)(p,{hookValues:v})]})}},4177:function(e,t,r){r.d(t,{KK:function(){return n},R_:function(){return u},sM:function(){return a},yi:function(){return o}});var n=function(e,t,r,n,o){var a=e;return a-=t,a*=o-n,a/=r-t,a+=n},o=function e(t){var r=[.9999999999998099,676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,1.5056327351493116e-7];if(t<.5)return Math.PI/(Math.sin(Math.PI*t)*e(1-t));for(var n=r[0],o=(t-=1)+7.5,a=1;a<r.length;a+=1)n+=r[a]/(t+a);return Math.sqrt(2*Math.PI)*Math.pow(o,t+.5)*Math.exp(-o)*n},a=function(e){var t=1+76.18009173/e-86.50532033/(e+1)+24.01409822/(e+2)-1.231739516/(e+3)+.00120858003/(e+4)-536382e-11/(e+5);return(e-.5)*Math.log(e+4.5)-(e+4.5)+Math.log(2.50662827465*t)},u=function(e,t,r){for(var n,o=0,a=1,u=1,i=1,l=0,s=0;Math.abs((u-s)/u)>1e-5;)s=u,a=i+(n=-(t+l)*(t+r+l)*e/(t+2*l)/(t+2*l+1))*a,u=(o=u+n*o)+(n=(l+=1)*(r-l)*e/(t+2*l-1)/(t+2*l))*u,o/=i=a+n*i,a/=i,u/=i,i=1;return u/t}},2864:function(e,t,r){r.d(t,{P:function(){return n},_:function(){return o}});var n=1e-4,o=5},7609:function(e,t,r){var n=r(2982),o=r(4177),a=r(2864),u=r(6263);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:512,r=-a._,i=a._,l=Array.from({length:t}).map((function(e,t){return t})),s=l.map((function(e){return(0,o.KK)(e,0,t-1,r,i)})),c=s.map((function(t){return(0,u.Z)(t,e)}));return{x:s,y:c,minX:r,maxX:i,minY:Math.min.apply(Math,(0,n.Z)(c)),maxY:Math.min.apply(Math,(0,n.Z)(c))}}},6263:function(e,t,r){var n=r(4177);t.Z=function(e,t){if(1===t)return 1/(Math.PI*(1+e*e));var r=t;return(0,n.yi)((r+1)/2)/(Math.sqrt(r*Math.PI)*(0,n.yi)(r/2))*Math.pow(1+e*e/r,-(r+1)/2)}}}]);
//# sourceMappingURL=531.720dee56.chunk.js.map