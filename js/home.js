"use strict";(self.webpackChunkwebpack_tutorial=self.webpackChunkwebpack_tutorial||[]).push([[177],{631:(e,t,s)=>{var i=s(477),r=s(217),n=s(854),o=s(516),a=s(328),l=s(458),c=s(865);const h=s.p+"assets/mlc_hero.glb",d=document.querySelector("canvas.canvas__home"),u=document.getElementById("canvas__home-placeholder"),f=document.getElementById("hero__title"),p=document.querySelectorAll(".hero .section__wrapper .char"),m=document.getElementById("nav-menu"),v=document.getElementById("about"),w=document.querySelector(".transition-element"),g=document.querySelectorAll('a:not([target="_blank"])');let x,y,_,S;window.onload=()=>{const e=()=>{let e=f.getBoundingClientRect().top-f.offsetTop;for(let t=0;t<p.length;++t)p[t].style.transform="translateY("+e*(p.length-t)/20+"px)",p[t].style.opacity=1-(0-e*(p.length-t+9))/3e3},t=()=>{v.classList.contains("in-page")?(d.style.opacity=0,u.style.opacity=0):(d.style.opacity=1,u.style.opacity=1)};if(window.onscroll=()=>{t(),e()},window.begin=()=>{t(),e(),setTimeout((()=>{w.classList.remove("is-active")}),30);for(let e=0;e<g.length;e++){g[e].addEventListener("click",(e=>{e.preventDefault();let t=e.target.href;m.classList.remove("active"),w.classList.add("is-active"),setTimeout((function(){location.href=t,w.classList.remove("is-active")}),600)}))}},window.matchMedia("(prefers-reduced-motion: reduce)").matches)begin();else{let s={width:window.innerWidth,height:window.innerHeight};_=new i.CP7({antialias:!0,canvas:d,alpha:!0,powerPreference:"high-performance"}),_.setSize(s.width,s.height),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.physicallyCorrectLights=!0,_.shadowMap.enabled=!0,_.outputEncoding=i.knz,_.shadowMap.type=i.ntZ,_.toneMapping=i.LY2,_.toneMappingExposure=.6;const C=new i.anP(_);y=new i.xsS,y.environment=C.fromScene(new o.C,.002).texture,y.background=new i.Ilk(16777215),window.addEventListener("resize",(()=>{s.width=window.innerWidth,s.height=window.innerHeight,x.aspect=s.width/s.height,x.updateProjectionMatrix(),_.setSize(s.width,s.height),S.setSize(s.width,s.height),_.setPixelRatio(Math.min(window.devicePixelRatio,2))})),x=new i.cPb(55,s.width/s.height,.001,50),x.position.x=6-window.scrollY/300,x.position.y=1+window.scrollY/300,x.position.z=0,x.lookAt(0-window.scrollY/5e3,0+window.scrollY/400,.5),y.add(x),S=new a.xC(_),S.addPass(new l.C(y,x));const b=new c.t(.3,.025,10,!1);S.addPass(b);const T=new n._;T.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");const R=new r.E;R.setDRACOLoader(T),R.load(h,(e=>{e.scene.traverse((e=>{if(e.isMesh){if(e.name.toLowerCase().includes("liquido")){const t=new i.EJi({color:12875061,roughness:0,ior:1.5,thickness:1,transmission:1,specularIntensity:.1,specularColor:16777215,opacity:1,side:i.ehD,shadowSide:i._Li,transparent:!0});e.material=t}e.material.needsUpdate=!0}})),y.add(e.scene),begin()}),(e=>{}),(e=>{console.log("An error happened"),d.style.display="none",u.style.display="block",document.getElementById("hero").style.minHeight="100vh",begin()}));const E={};E.x=s.width/2,E.y=s.height/2;const P={};function L(e){x.position.x=6-window.scrollY/300,x.position.y=1+window.scrollY/300,x.position.z=0,x.lookAt(0-window.scrollY/5e3,0+window.scrollY/400,.5)}function k(){requestAnimationFrame(k),S.render(.01)}window.addEventListener("scroll",L),window.matchMedia("(hover: none)").matches||window.addEventListener("mousemove",(e=>{P.x=e.x-E.x,P.y=e.y-E.y,x.position.x+=P.x/1e4,x.position.y-=P.y/1e4,E.x=e.x,E.y=e.y})),x.updateProjectionMatrix(),k();const D=document.querySelectorAll(".single-project"),A=document.querySelector("img.projects__preview");D.forEach((e=>{e.addEventListener("mouseover",(e=>{let t=e.target.getAttribute("data-img");A.setAttribute("src",t)})),e.addEventListener("mousemove",(e=>{A.style.top=e.clientY+"px",A.style.left=e.clientX+"px"})),e.addEventListener("mouseleave",(e=>{A.setAttribute("src","")}))}))}}},328:(e,t,s)=>{s.d(t,{xC:()=>c});var i=s(477);const r={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform float opacity;\n\n\t\tuniform sampler2D tDiffuse;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tgl_FragColor = texture2D( tDiffuse, vUv );\n\t\t\tgl_FragColor.a *= opacity;\n\n\n\t\t}"};var n=s(304);class o extends n.w{constructor(e,t){super(),this.textureID=void 0!==t?t:"tDiffuse",e instanceof i.jyz?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=i.rDY.clone(e.uniforms),this.material=new i.jyz({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new n.T(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class a extends n.w{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const i=e.getContext(),r=e.state;let n,o;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0),this.inverse?(n=0,o=1):(n=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,n,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class l extends n.w{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class c{constructor(e,t){if(this.renderer=e,void 0===t){const s=e.getSize(new i.FM8);this._pixelRatio=e.getPixelRatio(),this._width=s.width,this._height=s.height,(t=new i.dd2(this._width*this._pixelRatio,this._height*this._pixelRatio)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===r&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===o&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new o(r),this.clock=new i.SUY}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let t=0,i=this.passes.length;t<i;t++){const i=this.passes[t];if(!1!==i.enabled){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),i.needsSwap){if(s){const t=this.renderer.getContext(),s=this.renderer.state.buffers.stencil;s.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),s.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==a&&(i instanceof a?s=!0:i instanceof l&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){const t=this.renderer.getSize(new i.FM8);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(s,i),this.renderTarget2.setSize(s,i);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(s,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new i.iKG(-1,1,1,-1,0,1);const h=new i.u9r;h.setAttribute("position",new i.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new i.a$l([0,2,0,0,2,0],2))},865:(e,t,s)=>{s.d(t,{t:()=>o});var i=s(477),r=s(304);const n={uniforms:{tDiffuse:{value:null},time:{value:0},nIntensity:{value:.5},sIntensity:{value:.05},sCount:{value:4096},grayscale:{value:1}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\t#include <common>\n\n\t\t// control parameter\n\t\tuniform float time;\n\n\t\tuniform bool grayscale;\n\n\t\t// noise effect intensity value (0 = no effect, 1 = full effect)\n\t\tuniform float nIntensity;\n\n\t\t// scanlines effect intensity value (0 = no effect, 1 = full effect)\n\t\tuniform float sIntensity;\n\n\t\t// scanlines effect count value (0 = no effect, 4096 = full effect)\n\t\tuniform float sCount;\n\n\t\tuniform sampler2D tDiffuse;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t// sample the source\n\t\t\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\n\n\t\t// make some noise\n\t\t\tfloat dx = rand( vUv + time );\n\n\t\t// add noise\n\t\t\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );\n\n\t\t// get us a sine and cosine\n\t\t\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\n\n\t\t// add scanlines\n\t\t\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\n\n\t\t// interpolate between source and result by intensity\n\t\t\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\n\n\t\t// convert to grayscale if desired\n\t\t\tif( grayscale ) {\n\n\t\t\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\n\n\t\t\t}\n\n\t\t\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\n\n\t\t}"};class o extends r.w{constructor(e,t,s,o){super(),void 0===n&&console.error("THREE.FilmPass relies on FilmShader");const a=n;this.uniforms=i.rDY.clone(a.uniforms),this.material=new i.jyz({uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),void 0!==o&&(this.uniforms.grayscale.value=o),void 0!==e&&(this.uniforms.nIntensity.value=e),void 0!==t&&(this.uniforms.sIntensity.value=t),void 0!==s&&(this.uniforms.sCount.value=s),this.fsQuad=new r.T(this.material)}render(e,t,s,i){this.uniforms.tDiffuse.value=s.texture,this.uniforms.time.value+=i,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}},304:(e,t,s)=>{s.d(t,{T:()=>a,w:()=>r});var i=s(477);class r{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const n=new i.iKG(-1,1,1,-1,0,1),o=new i.u9r;o.setAttribute("position",new i.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new i.a$l([0,2,0,0,2,0],2));class a{constructor(e){this._mesh=new i.Kj0(o,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,n)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},458:(e,t,s)=>{s.d(t,{C:()=>n});var i=s(477),r=s(304);class n extends r.w{constructor(e,t,s,r,n){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=r,this.clearAlpha=void 0!==n?n:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new i.Ilk}render(e,t,s){const i=e.autoClear;let r,n;e.autoClear=!1,void 0!==this.overrideMaterial&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=n),e.autoClear=i}}}},e=>{e.O(0,[147],(()=>{return t=631,e(e.s=t);var t}));e.O()}]);