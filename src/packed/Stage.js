/*! TiledGameEngine v0.0.1 - 10th Mar 2015 | https://github.com/elvariongh/tiledgameengine */
(function(a){function f(c,d,e){this.active=!1;this.name=c;this.redraw=!1;this.am=d;this.screen=e;this.sidResize=this.sidMove=-1}f.prototype.update=function(){return this.active?(this.redraw=!0,16):1E3};f.prototype.render=function(){this.active&&(this.screen&&this.redraw)&&(this.redraw=!1)};f.prototype.onViewportResize=function(){this.redraw=!0;TiledGameEngine.bus.notify("invalidateStage",this.name)};
f.prototype.onViewportMove=function(){this.redraw=!0;TiledGameEngine.bus.notify("invalidateStage",this.name)};f.prototype.deactivate=function(){this.active=!1;TiledGameEngine.bus.unsubscribe("onViewportResize",this.sidResize);TiledGameEngine.bus.unsubscribe("onViewportMove",this.sidMove);this.sidResize=this.sidMove=-1;this.redraw=!1};
f.prototype.activate=function(){this.active=!0;this.sidResize=TiledGameEngine.bus.subscribe("onViewportResize",this.onViewportResize.bind(this));this.sidMove=TiledGameEngine.bus.subscribe("onViewportMove",this.onViewportMove.bind(this));this.redraw=!0;TiledGameEngine.bus.notify("invalidateStage",this.name)};f.prototype.offScreenRender=function(c,d,e){var b=document.createElement("canvas");b.width=c;b.height=d;e(b.getContext("2d"));return b};a.Stage=f})(TiledGameEngine);