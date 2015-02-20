/*! TiledGameEngine v1.0.0 - 20th Feb 2015 | https://github.com/elvariongh/tiledgameengine */
(function(t,k){function b(c,f,b){TiledGameEngine.Stage.call(this,"TiledMapStage",c,f);this.a=b}b.prototype=Object.create(k.Stage.prototype);b.prototype.activate=function(){TiledGameEngine.Stage.prototype.activate.call(this);this.screen.layers<this.a.layers.length&&this.screen.addLayer(this.a.layers.length-this.screen.layers);this.screen.setBGColor(this.a.bgcolor);this.redraw=!0};b.prototype.update=function(c){return this.screen&&this.a&&this.active?this.a.ready?16-c%16:100:500};b.prototype.render=
function(){this.redraw=!1;if(this.active&&this.a&&this.screen&&this.a.ready)for(var c=0,f,b=this.a.layers.length,m,g,k,d,e,n,a,h,p,l,q,r=this.screen.viewport;c<b;++c)if(f=this.a.layers[c],"tilelayer"===f.type&&f.visible)for(m=f.data,k=m.length,q=this.screen.getLayer(c),this.screen.clear(c),g=0;g<k;++g)if(d=m[g]){for(h=this.a.tilesets.length;h--&&!(a=this.a.tilesets[h],d>=a.firstgid&&d<=a.lastgid););0>h||!(p=this.am.get(a.image))||(d-=a.firstgid,h=~~(d%a.cols)*a.tilewidth,d=~~(d/a.cols)*a.tileheight,
e=~~(g%f.width),n=~~(g/f.width),l=(e-n)*this.a.tilewidth/2,e=(e+n)*this.a.tileheight/2,a.tileoffset&&(l+=a.tileoffset.x,e+=a.tileoffset.y),e-=a.tileheight,q.drawImage(p,h,d,a.tilewidth,a.tileheight,l+r[0],e+r[1],a.tilewidth,a.tileheight))}};k.TiledMapStage=b})(window,TiledGameEngine);