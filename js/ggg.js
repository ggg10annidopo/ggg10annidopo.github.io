"use strict";(self.webpackChunkwebpack_tutorial=self.webpackChunkwebpack_tutorial||[]).push([[165],{762:(e,t,r)=>{var o=r(477),s=r(217),i=r(854),n=r(516);const a=r.p+"assets/matteo_la_corte_ggg.glb",d=document.querySelector(".transition-element"),c=document.querySelectorAll('a:not([target="_blank"]');let l,h,u;window.onload=()=>{const e=()=>{setTimeout((()=>{d.classList.remove("is-active")}),30);for(let e=0;e<c.length;e++){c[e].addEventListener("click",(e=>{e.preventDefault();let t=e.target.href;d.classList.add("is-active"),setTimeout((function(){location.href=t}),600)}))}},t=document.querySelector("canvas.webgl-project");if(window.matchMedia("(hover: none)").matches&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)e();else{let r={width:t.clientWidth,height:t.clientHeight};u=new o.CP7({antialias:!0,canvas:t,alpha:!0}),u.setSize(r.width,r.height),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.physicallyCorrectLights=!0,u.shadowMap.enabled=!0,u.outputEncoding=o.knz,u.shadowMap.type=o.ntZ,u.toneMapping=o.LY2,u.toneMappingExposure=1;const w=new o.anP(u);h=new o.xsS,h.environment=w.fromScene(new n.C,.01).texture,window.addEventListener("resize",(()=>{r.width=t.clientWidth,r.height=t.clientHeight,l.aspect=r.width/r.height,l.updateProjectionMatrix(),u.setSize(r.width,r.height),u.setPixelRatio(Math.min(window.devicePixelRatio,2))})),l=new o.cPb(35,r.width/r.height,1,1e3),l.position.x=5,l.position.y=0,l.position.z=0,l.lookAt(0,0,0),h.add(l);const f=new i._;f.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");const y=new s.E;y.setDRACOLoader(f),y.load(a,(t=>{h.add(t.scene),e()}),(e=>{}),(r=>{console.log("An error happened"),t.style.display="none",document.querySelector(".canvas-container img").style.display="block",e()}));const p=new o.Mig(268435455,1);function g(){requestAnimationFrame(g),u.render(h,l)}h.add(p),l.updateProjectionMatrix(),g();const m={};m.x=r.width/2,m.y=r.height/2;const k={};window.addEventListener("mousemove",(e=>{k.x=e.x-m.x,k.y=e.y-m.y,l.position.x+=k.x/1e4,l.position.y+=k.y/3e3,l.position.z+=k.x/3e3,l.lookAt(0,0,0),m.x=e.x,m.y=e.y}))}}},854:(e,t,r)=>{r.d(t,{_:()=>i});var o=r(477);const s=new WeakMap;class i extends o.aNw{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,r,s){const i=new o.hH6(this.manager);i.setPath(this.path),i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,(e=>{this.decodeDracoFile(e,t).catch(s)}),r,s)}decodeDracoFile(e,t,r,o){const s={attributeIDs:r||this.defaultAttributeIDs,attributeTypes:o||this.defaultAttributeTypes,useUniqueIDs:!!r};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const r=JSON.stringify(t);if(s.has(e)){const t=s.get(e);if(t.key===r)return t.promise;if(0===e.byteLength)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let o;const i=this.workerNextTaskID++,n=e.byteLength,a=this._getWorker(i,n).then((r=>(o=r,new Promise(((r,s)=>{o._callbacks[i]={resolve:r,reject:s},o.postMessage({type:"decode",id:i,taskConfig:t,buffer:e},[e])}))))).then((e=>this._createGeometry(e.geometry)));return a.catch((()=>!0)).then((()=>{o&&i&&this._releaseTask(o,i)})),s.set(e,{key:r,promise:a}),a}_createGeometry(e){const t=new o.u9r;e.index&&t.setIndex(new o.TlE(e.index.array,1));for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r],i=s.name,n=s.array,a=s.itemSize;t.setAttribute(i,new o.TlE(n,a))}return t}_loadLibrary(e,t){const r=new o.hH6(this.manager);return r.setPath(this.decoderPath),r.setResponseType(t),r.setWithCredentials(this.withCredentials),new Promise(((t,o)=>{r.load(e,t,void 0,o)}))}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e="object"!=typeof WebAssembly||"js"===this.decoderConfig.type,t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then((t=>{const r=t[0];e||(this.decoderConfig.wasmBinary=t[1]);const o=n.toString(),s=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([s]))})),this.decoderPending}_getWorker(e,t){return this._initDecoder().then((()=>{if(this.workerPool.length<this.workerLimit){const e=new Worker(this.workerSourceURL);e._callbacks={},e._taskCosts={},e._taskLoad=0,e.postMessage({type:"init",decoderConfig:this.decoderConfig}),e.onmessage=function(t){const r=t.data;switch(r.type){case"decode":e._callbacks[r.id].resolve(r);break;case"error":e._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(e)}else this.workerPool.sort((function(e,t){return e._taskLoad>t._taskLoad?-1:1}));const r=this.workerPool[this.workerPool.length-1];return r._taskCosts[e]=t,r._taskLoad+=t,r}))}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map((e=>e._taskLoad)))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function n(){let e,t;function r(e,t,r,o,s,i){const n=i.num_components(),a=r.num_points()*n,d=a*s.BYTES_PER_ELEMENT,c=function(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}(e,s),l=e._malloc(d);t.GetAttributeDataArrayForAllPoints(r,i,c,d,l);const h=new s(e.HEAPF32.buffer,l,a).slice();return e._free(l),{name:o,array:h,itemSize:n}}onmessage=function(o){const s=o.data;switch(s.type){case"init":e=s.decoderConfig,t=new Promise((function(t){e.onModuleLoaded=function(e){t({draco:e})},DracoDecoderModule(e)}));break;case"decode":const o=s.buffer,i=s.taskConfig;t.then((e=>{const t=e.draco,n=new t.Decoder,a=new t.DecoderBuffer;a.Init(new Int8Array(o),o.byteLength);try{const e=function(e,t,o,s){const i=s.attributeIDs,n=s.attributeTypes;let a,d;const c=t.GetEncodedGeometryType(o);if(c===e.TRIANGULAR_MESH)a=new e.Mesh,d=t.DecodeBufferToMesh(o,a);else{if(c!==e.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");a=new e.PointCloud,d=t.DecodeBufferToPointCloud(o,a)}if(!d.ok()||0===a.ptr)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const l={index:null,attributes:[]};for(const o in i){const d=self[n[o]];let c,h;if(s.useUniqueIDs)h=i[o],c=t.GetAttributeByUniqueId(a,h);else{if(h=t.GetAttributeId(a,e[i[o]]),-1===h)continue;c=t.GetAttribute(a,h)}l.attributes.push(r(e,t,a,o,d,c))}c===e.TRIANGULAR_MESH&&(l.index=function(e,t,r){const o=3*r.num_faces(),s=4*o,i=e._malloc(s);t.GetTrianglesUInt32Array(r,s,i);const n=new Uint32Array(e.HEAPF32.buffer,i,o).slice();return e._free(i),{array:n,itemSize:1}}(e,t,a));return e.destroy(a),l}(t,n,a,i),o=e.attributes.map((e=>e.array.buffer));e.index&&o.push(e.index.array.buffer),self.postMessage({type:"decode",id:s.id,geometry:e},o)}catch(e){console.error(e),self.postMessage({type:"error",id:s.id,error:e.message})}finally{t.destroy(a),t.destroy(n)}}))}}}}},e=>{e.O(0,[932],(()=>{return t=762,e(e.s=t);var t}));e.O()}]);