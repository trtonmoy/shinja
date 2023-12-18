(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9176,8280],{8273:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CountUp:function(){return CountUp}});var __assign=function(){return(__assign=Object.assign||function(t){for(var i,n=1,s=arguments.length;n<s;n++)for(var a in i=arguments[n])Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);return t}).apply(this,arguments)},CountUp=function(){function t(t,i,n){var s=this;this.endVal=i,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration);var n=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=n?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var n,a,e,o=(Math.abs(t).toFixed(s.options.decimalPlaces)+"").split(".");if(n=o[0],a=o.length>1?s.options.decimal+o[1]:"",s.options.useGrouping){e="";for(var l=0,h=n.length;l<h;++l)0!==l&&l%3==0&&(e=s.options.separator+e),e=n[h-l-1]+e;n=e}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),a=a.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),(t<0?"-":"")+s.options.prefix+n+a+s.options.suffix},this.easeOutExpo=function(t,i,n,s){return n*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=__assign(__assign({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return s.handleScroll(s)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),s=n.top+n.height+window.pageYOffset;s<i&&s>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>s&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},7645:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(dynamicOptions,options){let loadableFn=_loadable.default,loadableOptions=(null==options?void 0:options.suspense)?{}:{loading(param){let{error,isLoading,pastDelay}=param;return null}};if(dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions=_extends({},loadableOptions,dynamicOptions)),(loadableOptions=_extends({},loadableOptions,options)).suspense&&(delete loadableOptions.ssr,delete loadableOptions.loading),loadableOptions.loadableGenerated&&delete(loadableOptions=_extends({},loadableOptions,loadableOptions.loadableGenerated)).loadableGenerated,"boolean"==typeof loadableOptions.ssr&&!loadableOptions.suspense){if(!loadableOptions.ssr)return delete loadableOptions.ssr,noSSR(loadableFn,loadableOptions);delete loadableOptions.ssr}return loadableFn(loadableOptions)},exports.noSSR=noSSR;var _extends=__webpack_require__(6495).Z,_interop_require_default=__webpack_require__(2648).Z,_loadable=(_interop_require_default(__webpack_require__(7294)),_interop_require_default(__webpack_require__(4588)));function noSSR(LoadableInitializer,loadableOptions){return delete loadableOptions.webpack,delete loadableOptions.modules,LoadableInitializer(loadableOptions)}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},3644:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadableContext=void 0;var _react=(0,__webpack_require__(2648).Z)(__webpack_require__(7294));let LoadableContext=_react.default.createContext(null);exports.LoadableContext=LoadableContext},4588:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends=__webpack_require__(6495).Z,_react=(0,__webpack_require__(1598).Z)(__webpack_require__(7294)),_loadableContext=__webpack_require__(3644);let ALL_INITIALIZERS=[],READY_INITIALIZERS=[],initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then(loaded=>(state.loading=!1,state.loaded=loaded,loaded)).catch(err=>{throw state.loading=!1,state.error=err,err}),state}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},opts.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(_err=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(partial){this._state=_extends({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},partial),this._callbacks.forEach(callback=>callback())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return function(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},options);opts.suspense&&(opts.lazy=_react.default.lazy(opts.loader));let subscription=null;function init(){if(!subscription){let sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if(!initialized){let moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push(ids=>{for(let moduleId of moduleIds)if(-1!==ids.indexOf(moduleId))return init()})}function useLoadableModule(){init();let context=_react.default.useContext(_loadableContext.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach(moduleName=>{context(moduleName)})}let LoadableComponent=opts.suspense?function(props,ref){return useLoadableModule(),_react.default.createElement(opts.lazy,_extends({},props,{ref}))}:function(props,ref){useLoadableModule();let state=_react.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,()=>({retry:subscription.retry}),[]),_react.default.useMemo(()=>{var obj;return state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement((obj=state.loaded)&&obj.__esModule?obj.default:obj,props):null},[props,state])};return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then(()=>{if(initializers.length)return flushInitializers(initializers,ids)})}Loadable.preloadAll=()=>new Promise((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)}),Loadable.preloadReady=function(){let ids=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(resolvePreload=>{let res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)})},window.__NEXT_PRELOADREADY=Loadable.preloadReady,exports.default=Loadable},5152:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(7645)},7857:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var React=__webpack_require__(7294),countup_js=__webpack_require__(8273),React__default=React&&"object"==typeof React&&"default"in React?React:{default:React};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){var obj,value;obj=target,value=source[key],key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var useIsomorphicLayoutEffect="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?React.useLayoutEffect:React.useEffect;function useEventCallback(fn){var ref=React.useRef(fn);return useIsomorphicLayoutEffect(function(){ref.current=fn}),React.useCallback(function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return ref.current.apply(void 0,args)},[])}var createCountUpInstance=function(el,props){var decimal=props.decimal,decimals=props.decimals,duration=props.duration,easingFn=props.easingFn,end=props.end,formattingFn=props.formattingFn,numerals=props.numerals,prefix=props.prefix,separator=props.separator,start=props.start,suffix=props.suffix,useEasing=props.useEasing,enableScrollSpy=props.enableScrollSpy,scrollSpyDelay=props.scrollSpyDelay,scrollSpyOnce=props.scrollSpyOnce;return new countup_js.CountUp(el,end,{startVal:start,duration:duration,decimal:decimal,decimalPlaces:decimals,easingFn:easingFn,formattingFn:formattingFn,numerals:numerals,separator:separator,prefix:prefix,suffix:suffix,useEasing:useEasing,useGrouping:!!separator,enableScrollSpy:enableScrollSpy,scrollSpyDelay:scrollSpyDelay,scrollSpyOnce:scrollSpyOnce})},_excluded$1=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],DEFAULTS={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},useCountUp=function(props){var _useMemo=React.useMemo(function(){return _objectSpread2(_objectSpread2({},DEFAULTS),props)},[props]),ref=_useMemo.ref,startOnMount=_useMemo.startOnMount,enableReinitialize=_useMemo.enableReinitialize,delay=_useMemo.delay,onEnd=_useMemo.onEnd,onStart=_useMemo.onStart,onPauseResume=_useMemo.onPauseResume,onReset=_useMemo.onReset,onUpdate=_useMemo.onUpdate,instanceProps=_objectWithoutProperties(_useMemo,_excluded$1),countUpRef=React.useRef(),timerRef=React.useRef(),isInitializedRef=React.useRef(!1),createInstance=useEventCallback(function(){return createCountUpInstance("string"==typeof ref?ref:ref.current,instanceProps)}),getCountUp=useEventCallback(function(recreate){var countUp=countUpRef.current;if(countUp&&!recreate)return countUp;var newCountUp=createInstance();return countUpRef.current=newCountUp,newCountUp}),start=useEventCallback(function(){var run=function(){return getCountUp(!0).start(function(){null==onEnd||onEnd({pauseResume:pauseResume,reset:reset,start:restart,update:update})})};delay&&delay>0?timerRef.current=setTimeout(run,1e3*delay):run(),null==onStart||onStart({pauseResume:pauseResume,reset:reset,update:update})}),pauseResume=useEventCallback(function(){getCountUp().pauseResume(),null==onPauseResume||onPauseResume({reset:reset,start:restart,update:update})}),reset=useEventCallback(function(){timerRef.current&&clearTimeout(timerRef.current),getCountUp().reset(),null==onReset||onReset({pauseResume:pauseResume,start:restart,update:update})}),update=useEventCallback(function(newEnd){getCountUp().update(newEnd),null==onUpdate||onUpdate({pauseResume:pauseResume,reset:reset,start:restart})}),restart=useEventCallback(function(){reset(),start()}),maybeInitialize=useEventCallback(function(shouldReset){startOnMount&&(shouldReset&&reset(),start())});return React.useEffect(function(){isInitializedRef.current?enableReinitialize&&maybeInitialize(!0):(isInitializedRef.current=!0,maybeInitialize())},[enableReinitialize,isInitializedRef,maybeInitialize,delay,props.start,props.suffix,props.prefix,props.duration,props.separator,props.decimals,props.decimal,props.formattingFn]),React.useEffect(function(){return function(){reset()}},[reset]),{start:restart,pauseResume:pauseResume,reset:reset,update:update,getCountUp:getCountUp}},_excluded=["className","redraw","containerProps","children","style"];exports.ZP=function(props){var className=props.className,redraw=props.redraw,containerProps=props.containerProps,children=props.children,style=props.style,useCountUpProps=_objectWithoutProperties(props,_excluded),containerRef=React__default.default.useRef(null),isInitializedRef=React__default.default.useRef(!1),_useCountUp=useCountUp(_objectSpread2(_objectSpread2({},useCountUpProps),{},{ref:containerRef,startOnMount:"function"!=typeof children||0===props.delay,enableReinitialize:!1})),start=_useCountUp.start,reset=_useCountUp.reset,updateCountUp=_useCountUp.update,pauseResume=_useCountUp.pauseResume,getCountUp=_useCountUp.getCountUp,restart=useEventCallback(function(){start()}),update=useEventCallback(function(end){props.preserveValue||reset(),updateCountUp(end)}),initializeOnMount=useEventCallback(function(){if("function"==typeof props.children&&!(containerRef.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}getCountUp()});return(React.useEffect(function(){initializeOnMount()},[initializeOnMount]),React.useEffect(function(){isInitializedRef.current&&update(props.end)},[props.end,update]),React.useEffect(function(){redraw&&isInitializedRef.current&&restart()},[restart,redraw,redraw&&props]),React.useEffect(function(){!redraw&&isInitializedRef.current&&restart()},[restart,redraw,props.start,props.suffix,props.prefix,props.duration,props.separator,props.decimals,props.decimal,props.className,props.formattingFn]),React.useEffect(function(){isInitializedRef.current=!0},[]),"function"==typeof children)?children({countUpRef:containerRef,start:start,reset:reset,update:updateCountUp,pauseResume:pauseResume,getCountUp:getCountUp}):React__default.default.createElement("span",_extends({className:className,ref:containerRef,style:style},containerProps),void 0!==props.start?getCountUp().formattingFn(props.start):"")}}}]);