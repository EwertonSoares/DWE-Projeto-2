(function(g){var window=this;var L5=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={G:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},R:[{G:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},R:[{G:"g",U:{transform:"translate(-1.000000, -3.000000)"},R:[{G:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{G:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Abrir p\u00e1gina do v\u00eddeo";a.T().aa("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={G:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},R:[{G:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},R:[{G:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},R:[{G:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expandir");g.U.call(this,{G:"button",ka:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},R:[d]});this.I=a;this.xa("click",this.onClick,this);this.za("title",g.oU(a,e,"i"));g.Yf(this,g.LU(b.Qb(),this.element))},M5=function(a){g.U.call(this,{G:"div",
L:"ytp-miniplayer-ui"});this.Mh=!1;this.player=a;this.N(a,"minimized",this.jj);this.N(a,"onStateChange",this.iS)},N5=function(a){g.tS.call(this,a);
this.u=new M5(this.player);this.u.hide();g.lP(this.player,this.u.element,4);a.app.visibility.u&&(this.load(),g.K(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(L5,g.U);L5.prototype.onClick=function(){this.I.ya("onExpandMiniplayer")};g.u(M5,g.U);g.k=M5.prototype;
g.k.show=function(){this.Ud=new g.fn(this.yr,null,this);this.Ud.start();if(!this.Mh){this.tooltip=new g.KX(this.player,this);g.C(this,this.tooltip);g.lP(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Rb=new g.GU(this.player);g.C(this,this.Rb);this.qk=new g.U({G:"div",L:"ytp-miniplayer-scrim"});g.C(this,this.qk);this.qk.ha(this.element);this.N(this.qk.element,"click",this.qG);var a=new g.U({G:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fechar"},R:[g.JN()]});
g.C(this,a);a.ha(this.qk.element);this.N(a.element,"click",this.Io);a=new L5(this.player,this);g.C(this,a);a.ha(this.qk.element);g.Q(this.player.T().experiments,"web_inline_player_after_video_preview")&&(a=new g.aW(this.player,this),g.C(this,a),a.ha(this.qk.element));this.mm=new g.U({G:"div",L:"ytp-miniplayer-controls"});g.C(this,this.mm);this.mm.ha(this.qk.element);this.N(this.mm.element,"click",this.qG);var b=new g.U({G:"div",L:"ytp-miniplayer-button-container"});g.C(this,b);b.ha(this.mm.element);
a=new g.U({G:"div",L:"ytp-miniplayer-play-button-container"});g.C(this,a);a.ha(this.mm.element);var c=new g.U({G:"div",L:"ytp-miniplayer-button-container"});g.C(this,c);c.ha(this.mm.element);this.QG=new g.fW(this.player,this,!1);g.C(this,this.QG);this.QG.ha(b.element);b=new g.cW(this.player,this);g.C(this,b);b.ha(a.element);this.nextButton=new g.fW(this.player,this,!0);g.C(this,this.nextButton);this.nextButton.ha(c.element);this.ri=new g.zX(this.player,this);g.C(this,this.ri);this.ri.ha(this.qk.element);
this.Sc=new g.kW(this.player,this);g.C(this,this.Sc);g.lP(this.player,this.Sc.element,4);this.Ru=new g.U({G:"div",L:"ytp-miniplayer-buttons"});g.C(this,this.Ru);g.lP(this.player,this.Ru.element,4);a=new g.U({G:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fechar"},R:[g.JN()]});g.C(this,a);a.ha(this.Ru.element);this.N(a.element,"click",this.Io);a=new g.U({G:"button",ka:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Fechar"},R:[g.ON()]});g.C(this,a);a.ha(this.Ru.element);
this.N(a.element,"click",this.tQ);this.N(this.player,"presentingplayerstatechange",this.Zb);this.N(this.player,"appresize",this.Ua);this.N(this.player,"fullscreentoggled",this.Ua);this.Ua();this.Mh=!0}0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.Sc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ud&&(this.Ud.dispose(),this.Ud=void 0);g.U.prototype.hide.call(this);this.player.app.visibility.u||(this.Mh&&this.Sc.hide(),this.player.loadModule("annotations_module"))};
g.k.ca=function(){this.Ud&&(this.Ud.dispose(),this.Ud=void 0);g.U.prototype.ca.call(this)};
g.k.Io=function(){this.player.stopVideo();this.player.ya("onCloseMiniplayer")};
g.k.tQ=function(){this.player.playVideo()};
g.k.qG=function(a){if(a.target===this.qk.element||a.target===this.mm.element)g.Q(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.TL(g.NJ(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ya("onExpandMiniplayer")};
g.k.jj=function(){g.K(this.player.getRootNode(),"ytp-player-minimized",this.player.app.visibility.u)};
g.k.de=function(){this.Sc.Ob();this.ri.Ob()};
g.k.yr=function(){this.de();this.Ud&&this.Ud.start()};
g.k.Zb=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.Ua=function(){g.vW(this.Sc,0,g.mJ(this.player).getPlayerSize().width,!1);g.mW(this.Sc)};
g.k.iS=function(a){this.player.app.visibility.u&&(0===a?this.hide():this.show())};
g.k.Qb=function(){return this.tooltip};
g.k.be=function(){return!1};
g.k.De=function(){return!1};
g.k.Ph=function(){return!1};
g.k.yA=function(){};
g.k.om=function(){};
g.k.jq=function(){};
g.k.Rk=function(){return null};
g.k.Ni=function(){return new g.dg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.So=function(a,b,c,d,e){var f=0,h=d=0,l=g.Eg(a);if(b){c=g.sn(b,"ytp-prev-button")||g.sn(b,"ytp-next-button");var m=g.sn(b,"ytp-play-button"),n=g.sn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Cg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.sn(b,"ytp-miniplayer-button-top-left"),f=g.Cg(b,this.element),b=g.Eg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.mJ(this.player).getPlayerSize().width;e=f+(e||0);l=g.$d(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.vk=function(){};
g.k.Jj=function(){return!1};g.u(N5,g.tS);N5.prototype.create=function(){};
N5.prototype.li=function(){return!1};
N5.prototype.load=function(){this.player.hideControls();this.u.show()};
N5.prototype.unload=function(){this.player.showControls();this.u.hide()};g.aU.miniplayer=N5;})(_yt_player);
