import{K as y}from"./index-D2lId9k2.js";const r=2;class p{constructor(s,i,e){this.position={x:s,y:i},this.type=e}}class a extends p{constructor(s,i,e){super(s,i,"circle"),this.radius=e}contains(s){return y(s,this.position)<=this.radius}intersects(s){const i=this.position,e=s.position,t={x:Math.abs(e.x-i.x),y:Math.abs(e.y-i.y)},h=this.radius;if(s instanceof a||s.type==="circle"){const n=s,o=h+n.radius,c=Math.sqrt(t.x**r+t.y**r);return o>c}else if(s instanceof x||s.type==="rectangle"){const n=s,{width:o,height:c}=n.size;return Math.pow(t.x-o,r)+Math.pow(t.y-c,r)<=h**r||t.x<=h+o&&t.y<=h+c||t.x<=o||t.y<=c}return!1}}class x extends p{constructor(s,i,e,t){super(s,i,"rectangle"),this.size={height:t,width:e}}contains(s){const i=this.size.width,e=this.size.height,t=this.position;return s.x>=t.x&&s.x<=t.x+i&&s.y>=t.y&&s.y<=t.y+e}intersects(s){if(s instanceof a)return s.intersects(this);const i=this.size.width,e=this.size.height,t=this.position,h=s.position,n=s instanceof x?s.size:{width:0,height:0},o=n.width,c=n.height;return h.x<t.x+i&&h.x+o>t.x&&h.y<t.y+e&&h.y+c>t.y}}export{a as C,x as R};
