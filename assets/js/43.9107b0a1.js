(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{264:function(a,r,t){"use strict";t.r(r);var s=t(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"_012-如何理解-http-代理？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_012-如何理解-http-代理？","aria-hidden":"true"}},[a._v("#")]),a._v(" 012: 如何理解 HTTP 代理？")]),a._v(" "),t("p",[a._v("我们知道在 HTTP 是基于"),t("code",[a._v("请求-响应")]),a._v("模型的协议，一般由客户端发请求，服务器来进行响应。")]),a._v(" "),t("p",[a._v("当然，也有特殊情况，就是代理服务器的情况。引入代理之后，作为代理的服务器相当于一个中间人的角色，对于客户端而言，表现为服务器进行响应；而对于源服务器，表现为客户端发起请求，具有"),t("strong",[a._v("双重身份")]),a._v("。")]),a._v(" "),t("p",[a._v("那代理服务器到底是用来做什么的呢？")]),a._v(" "),t("h2",{attrs:{id:"功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能","aria-hidden":"true"}},[a._v("#")]),a._v(" 功能")]),a._v(" "),t("ol",[t("li",[t("p",[t("strong",[a._v("负载均衡")]),a._v("。客户端的请求只会先到达代理服务器，后面到底有多少源服务器，IP 都是多少，客户端是不知道的。因此，这个代理服务器可以拿到这个请求之后，可以通过特定的算法分发给不同的源服务器，让各台源服务器的负载尽量平均。当然，这样的算法有很多，包括"),t("strong",[a._v("随机算法")]),a._v("、"),t("strong",[a._v("轮询")]),a._v("、"),t("strong",[a._v("一致性hash")]),a._v("、"),t("strong",[a._v("LRU")]),t("code",[a._v("(最近最少使用)")]),a._v("等等，不过这些算法并不是本文的重点，大家有兴趣自己可以研究一下。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("保障安全")]),a._v("。利用"),t("strong",[a._v("心跳")]),a._v("机制监控后台的服务器，一旦发现故障机就将其踢出集群。并且对于上下行的数据进行过滤，对非法 IP 限流，这些都是代理服务器的工作。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("缓存代理")]),a._v("。将内容缓存到代理服务器，使得客户端可以直接从代理服务器获得而不用到源服务器那里。下一节详细拆解。")])])]),a._v(" "),t("h2",{attrs:{id:"相关头部字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关头部字段","aria-hidden":"true"}},[a._v("#")]),a._v(" 相关头部字段")]),a._v(" "),t("h3",{attrs:{id:"via"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#via","aria-hidden":"true"}},[a._v("#")]),a._v(" Via")]),a._v(" "),t("p",[a._v("代理服务器需要标明自己的身份，在 HTTP 传输中留下自己的痕迹，怎么办呢？")]),a._v(" "),t("p",[a._v("通过"),t("code",[a._v("Via")]),a._v("字段来记录。举个例子，现在中间有两台代理服务器，在客户端发送请求后会经历这样一个过程:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("客户端 -> 代理1 -> 代理2 -> 源服务器\n")])])]),t("p",[a._v("在源服务器收到请求后，会在"),t("code",[a._v("请求头")]),a._v("拿到这个字段:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Via: proxy_server1, proxy_server2\n")])])]),t("p",[a._v("而源服务器响应时，最终在客户端会拿到这样的"),t("code",[a._v("响应头")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Via: proxy_server2, proxy_server1\n")])])]),t("p",[a._v("可以看到，"),t("code",[a._v("Via")]),a._v("中代理的顺序即为在 HTTP 传输中报文传达的顺序。")]),a._v(" "),t("h3",{attrs:{id:"x-forwarded-for"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x-forwarded-for","aria-hidden":"true"}},[a._v("#")]),a._v(" X-Forwarded-For")]),a._v(" "),t("p",[a._v("字面意思就是"),t("code",[a._v("为谁转发")]),a._v(", 它记录的是"),t("strong",[a._v("请求方")]),a._v("的"),t("code",[a._v("IP")]),a._v("地址(注意，和"),t("code",[a._v("Via")]),a._v("区分开，"),t("code",[a._v("X-Forwarded-For")]),a._v("记录的是请求方这一个IP)。")]),a._v(" "),t("h3",{attrs:{id:"x-real-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x-real-ip","aria-hidden":"true"}},[a._v("#")]),a._v(" X-Real-IP")]),a._v(" "),t("p",[a._v("是一种获取用户真实 IP 的字段，不管中间经过多少代理，这个字段始终记录最初的客户端的IP。")]),a._v(" "),t("p",[a._v("相应的，还有"),t("code",[a._v("X-Forwarded-Host")]),a._v("和"),t("code",[a._v("X-Forwarded-Proto")]),a._v("，分别记录"),t("strong",[a._v("客户端")]),a._v("(注意哦，不包括代理)的"),t("code",[a._v("域名")]),a._v("和"),t("code",[a._v("协议名")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"x-forwarded-for产生的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x-forwarded-for产生的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" X-Forwarded-For产生的问题")]),a._v(" "),t("p",[a._v("前面可以看到，"),t("code",[a._v("X-Forwarded-For")]),a._v("这个字段记录的是请求方的 IP，这意味着每经过一个不同的代理，这个字段的名字都要变，从"),t("code",[a._v("客户端")]),a._v("到"),t("code",[a._v("代理1")]),a._v("，这个字段是客户端的 IP，从"),t("code",[a._v("代理1")]),a._v("到"),t("code",[a._v("代理2")]),a._v("，这个字段就变为了代理1的 IP。")]),a._v(" "),t("p",[a._v("但是这会产生两个问题:")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("意味着代理必须解析 HTTP 请求头，然后修改，比直接转发数据性能下降。")])]),a._v(" "),t("li",[t("p",[a._v("在 HTTPS 通信加密的过程中，原始报文是不允许修改的。")])])]),a._v(" "),t("p",[a._v("由此产生了"),t("code",[a._v("代理协议")]),a._v("，一般使用明文版本，只需要在 HTTP 请求行上面加上这样格式的文本即可:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// PROXY + TCP4/TCP6 + 请求方地址 + 接收方地址 + 请求端口 + 接收端口")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("PROXY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("TCP4")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1111")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2222")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("GET")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("HTTP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n")])])]),t("p",[a._v("这样就可以解决"),t("code",[a._v("X-Forwarded-For")]),a._v("带来的问题了。")])])}],!1,null,null,null);r.default=e.exports}}]);