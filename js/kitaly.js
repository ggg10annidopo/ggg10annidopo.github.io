"use strict";(self.webpackChunkwebpack_tutorial=self.webpackChunkwebpack_tutorial||[]).push([[890],{760:(e,t,r)=>{var o=r(477),s=r(217),n=r(854),i=r(516);const a=r.p+"assets/matteo_la_corte_kitaly.glb",d=document.querySelector(".transition-element"),c=document.querySelectorAll('a:not([target="_blank"]');let l,h,u;window.onload=()=>{const e=()=>{setTimeout((()=>{d.classList.remove("is-active")}),30);for(let e=0;e<c.length;e++){c[e].addEventListener("click",(e=>{e.preventDefault();let t=e.target.href;d.classList.add("is-active"),setTimeout((function(){location.href=t}),600)}))}},t=document.querySelector("canvas.webgl-project");if(window.matchMedia("(hover: none)").matches&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)e();else{let w={width:t.clientWidth,height:t.clientHeight};u=new o.CP7({antialias:!0,canvas:t,alpha:!0}),u.setSize(w.width,w.height),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.physicallyCorrectLights=!1,u.shadowMap.enabled=!0,u.outputEncoding=o.knz,u.shadowMap.type=o.ntZ,u.toneMapping=o.LY2;const y=new o.anP(u);h=new o.xsS,h.environment=y.fromScene(new i.C,.04).texture,window.addEventListener("resize",(()=>{w.width=t.clientWidth,w.height=t.clientHeight,l.aspect=w.width/w.height,l.updateProjectionMatrix(),u.setSize(w.width,w.height),u.setPixelRatio(Math.min(window.devicePixelRatio,2))})),l=new o.cPb(35,w.width/w.height,1,1e3),l.position.x=3.2,l.position.y=.5,l.position.z=.5,l.lookAt(0,.9,.45),h.add(l);const f=new n._;f.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");const p=new s.E;function g(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),r=t.createRadialGradient(e.width/2,e.height/2,0,e.width/2,e.height/2,e.width/2);r.addColorStop(.1,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=r,t.fillRect(0,0,e.width,e.height);const s=new o.ROQ(e),n=new o._12,i=new o.vBJ({map:s,blending:o.M5h,toneMapped:!1}),a=new o.Kj0(n,i);return a.rotation.x=-Math.PI/2,a}function m(){requestAnimationFrame(m),u.render(h,l)}p.setDRACOLoader(f),p.load(a,(t=>{h.add(t.scene),e();const r=g();r.position.y=0,r.position.z=-.25,r.scale.setScalar(2),h.add(r),m()}),(e=>{}),(r=>{console.log("An error happened"),t.style.display="none",document.querySelector(".canvas-container img").style.display="block",e()})),l.updateProjectionMatrix(),m();const k={};k.x=w.width/2,k.y=w.height/2;const b={};window.addEventListener("mousemove",(e=>{b.x=e.x-k.x,b.y=e.y-k.y,l.position.x+=b.x/1e4,l.position.y+=b.y/3e3,l.position.z+=b.x/3e3,l.lookAt(0,.9,.45),k.x=e.x,k.y=e.y}))}let r=0;!function e(){var t=document.getElementsByClassName("translation-carousel");for(let e=0;e<t.length;e++)t[e].style.display="none";r++,r>t.length&&(r=1);t[r-1].style.display="block",setTimeout(e,3e3)}()}},854:(e,t,r)=>{r.d(t,{_:()=>n});var o=r(477);const s=new WeakMap;class n extends o.aNw{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,r,s){const n=new o.hH6(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,(e=>{this.decodeDracoFile(e,t).catch(s)}),r,s)}decodeDracoFile(e,t,r,o){const s={attributeIDs:r||this.defaultAttributeIDs,attributeTypes:o||this.defaultAttributeTypes,useUniqueIDs:!!r};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const r=JSON.stringify(t);if(s.has(e)){const t=s.get(e);if(t.key===r)return t.promise;if(0===e.byteLength)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let o;const n=this.workerNextTaskID++,i=e.byteLength,a=this._getWorker(n,i).then((r=>(o=r,new Promise(((r,s)=>{o._callbacks[n]={resolve:r,reject:s},o.postMessage({type:"decode",id:n,taskConfig:t,buffer:e},[e])}))))).then((e=>this._createGeometry(e.geometry)));return a.catch((()=>!0)).then((()=>{o&&n&&this._releaseTask(o,n)})),s.set(e,{key:r,promise:a}),a}_createGeometry(e){const t=new o.u9r;e.index&&t.setIndex(new o.TlE(e.index.array,1));for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r],n=s.name,i=s.array,a=s.itemSize;t.setAttribute(n,new o.TlE(i,a))}return t}_loadLibrary(e,t){const r=new o.hH6(this.manager);return r.setPath(this.decoderPath),r.setResponseType(t),r.setWithCredentials(this.withCredentials),new Promise(((t,o)=>{r.load(e,t,void 0,o)}))}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e="object"!=typeof WebAssembly||"js"===this.decoderConfig.type,t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then((t=>{const r=t[0];e||(this.decoderConfig.wasmBinary=t[1]);const o=i.toString(),s=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([s]))})),this.decoderPending}_getWorker(e,t){return this._initDecoder().then((()=>{if(this.workerPool.length<this.workerLimit){const e=new Worker(this.workerSourceURL);e._callbacks={},e._taskCosts={},e._taskLoad=0,e.postMessage({type:"init",decoderConfig:this.decoderConfig}),e.onmessage=function(t){const r=t.data;switch(r.type){case"decode":e._callbacks[r.id].resolve(r);break;case"error":e._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(e)}else this.workerPool.sort((function(e,t){return e._taskLoad>t._taskLoad?-1:1}));const r=this.workerPool[this.workerPool.length-1];return r._taskCosts[e]=t,r._taskLoad+=t,r}))}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map((e=>e._taskLoad)))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function i(){let e,t;function r(e,t,r,o,s,n){const i=n.num_components(),a=r.num_points()*i,d=a*s.BYTES_PER_ELEMENT,c=function(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}(e,s),l=e._malloc(d);t.GetAttributeDataArrayForAllPoints(r,n,c,d,l);const h=new s(e.HEAPF32.buffer,l,a).slice();return e._free(l),{name:o,array:h,itemSize:i}}onmessage=function(o){const s=o.data;switch(s.type){case"init":e=s.decoderConfig,t=new Promise((function(t){e.onModuleLoaded=function(e){t({draco:e})},DracoDecoderModule(e)}));break;case"decode":const o=s.buffer,n=s.taskConfig;t.then((e=>{const t=e.draco,i=new t.Decoder,a=new t.DecoderBuffer;a.Init(new Int8Array(o),o.byteLength);try{const e=function(e,t,o,s){const n=s.attributeIDs,i=s.attributeTypes;let a,d;const c=t.GetEncodedGeometryType(o);if(c===e.TRIANGULAR_MESH)a=new e.Mesh,d=t.DecodeBufferToMesh(o,a);else{if(c!==e.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");a=new e.PointCloud,d=t.DecodeBufferToPointCloud(o,a)}if(!d.ok()||0===a.ptr)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const l={index:null,attributes:[]};for(const o in n){const d=self[i[o]];let c,h;if(s.useUniqueIDs)h=n[o],c=t.GetAttributeByUniqueId(a,h);else{if(h=t.GetAttributeId(a,e[n[o]]),-1===h)continue;c=t.GetAttribute(a,h)}l.attributes.push(r(e,t,a,o,d,c))}c===e.TRIANGULAR_MESH&&(l.index=function(e,t,r){const o=3*r.num_faces(),s=4*o,n=e._malloc(s);t.GetTrianglesUInt32Array(r,s,n);const i=new Uint32Array(e.HEAPF32.buffer,n,o).slice();return e._free(n),{array:i,itemSize:1}}(e,t,a));return e.destroy(a),l}(t,i,a,n),o=e.attributes.map((e=>e.array.buffer));e.index&&o.push(e.index.array.buffer),self.postMessage({type:"decode",id:s.id,geometry:e},o)}catch(e){console.error(e),self.postMessage({type:"error",id:s.id,error:e.message})}finally{t.destroy(a),t.destroy(i)}}))}}}}},e=>{e.O(0,[932],(()=>{return t=760,e(e.s=t);var t}));e.O()}]);