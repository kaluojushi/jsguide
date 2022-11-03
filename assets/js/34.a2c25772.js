(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{478:function(t,e,s){"use strict";s.r(e);var a=s(11),v=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("待补充：单向绑定原理、VueX、Vue-router、单双向绑定的缺陷、computed 和 watch 的区别")]),t._v(" "),e("h2",{attrs:{id:"_1-vue3新特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue3新特性"}},[t._v("#")]),t._v(" 1 Vue3新特性")]),t._v(" "),e("ol",[e("li",[t._v("性能提升：\n"),e("ul",[e("li",[t._v("重写虚拟 DOM 实现")]),t._v(" "),e("li",[t._v("运行时编译")]),t._v(" "),e("li",[t._v("update 性能提高")]),t._v(" "),e("li",[t._v("SSR 速度提高")])])]),t._v(" "),e("li",[t._v("支持 Tree-shaking（剪枝）")]),t._v(" "),e("li",[t._v("提供 Composition API（组合 API）")]),t._v(" "),e("li",[t._v("新增组件，如 Fragment、Teleport、Suspense")]),t._v(" "),e("li",[t._v("对 TypeScript 更好支持")])]),t._v(" "),e("h2",{attrs:{id:"_2-v-if-和-v-show-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-v-if-和-v-show-的区别"}},[t._v("#")]),t._v(" 2 "),e("code",[t._v("v-if")]),t._v(" 和 "),e("code",[t._v("v-show")]),t._v(" 的区别")]),t._v(" "),e("p",[e("code",[t._v("v-if")]),t._v(" 根据条件决定是否渲染，具有较高的切换开销；"),e("code",[t._v("v-show")]),t._v(" 始终渲染，具有较高的初始渲染开销。")]),t._v(" "),e("p",[e("code",[t._v("v-show")]),t._v(" 调用 "),e("code",[t._v("display:none")]),t._v(" 使节点消失，"),e("code",[t._v("v-if")]),t._v(" 直接去掉 DOM 节点。")]),t._v(" "),e("h2",{attrs:{id:"_3-为何要避免-v-if-与-v-for-同时使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-为何要避免-v-if-与-v-for-同时使用"}},[t._v("#")]),t._v(" 3 为何要避免 "),e("code",[t._v("v-if")]),t._v(" 与 "),e("code",[t._v("v-for")]),t._v(" 同时使用？")]),t._v(" "),e("p",[e("code",[t._v("v-for")]),t._v(" 优先级高于 "),e("code",[t._v("v-if")]),t._v("，每次都需判断。可以将 "),e("code",[t._v("v-for")]),t._v(" 里的数组换成计算属性。")]),t._v(" "),e("h2",{attrs:{id:"_4-v-model-的实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-v-model-的实现原理"}},[t._v("#")]),t._v(" 4 "),e("code",[t._v("v-model")]),t._v(" 的实现原理？")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("v-bind:")]),t._v(" 绑定数据")]),t._v(" "),e("li",[e("code",[t._v("oninput")]),t._v(" 事件触发并传递数据")])]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 等同于 --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sth = $event.target.value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 自 HTML5 开始，input 每次输入都会触发 oninput 事件，所以输入时 input 的内容会绑定到 sth 中，于是 sth 的值就被改变--\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- $event 指代当前触发的事件对象;--\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- $event.target 指代当前触发的事件对象的 DOM --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- $event.target.value 就是当前 DOM 的 value 值 --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 在 @input 方法中，value => sth --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 在 :value 中，sth => value --\x3e")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h2",{attrs:{id:"_5-父子组件通信方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-父子组件通信方式"}},[t._v("#")]),t._v(" 5 父子组件通信方式")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("props")]),t._v(" 和 "),e("code",[t._v("$emit")])]),t._v(" "),e("li",[e("code",[t._v("$refs")]),t._v(" 和 "),e("code",[t._v("$parent")])]),t._v(" "),e("li",[e("code",[t._v("$attrs")]),t._v(" 和 "),e("code",[t._v("$listeners")]),t._v(" "),e("ul",[e("li",[t._v("C 组件中能直接触发 "),e("code",[t._v("getCData")]),t._v(" 的原因在于 B 组件调用C组件时 使用 "),e("code",[t._v("v-on")]),t._v(" 绑定了 "),e("code",[t._v("$listeners")]),t._v(" 属性")]),t._v(" "),e("li",[t._v("通过 "),e("code",[t._v("v-bind")]),t._v(" 绑定 "),e("code",[t._v("$attrs")]),t._v(" 属性，C 组件可以直接获取到 A 组件中传递下来的 "),e("code",[t._v("props")]),t._v("（除了 B 组件中 "),e("code",[t._v("props")]),t._v(" 声明的）")])])])]),t._v(" "),e("h2",{attrs:{id:"_6-父子组件生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-父子组件生命周期"}},[t._v("#")]),t._v(" 6 父子组件生命周期")]),t._v(" "),e("ul",[e("li",[t._v("父子创建时：父 "),e("code",[t._v("beforeCreated")]),t._v(" -> 父 "),e("code",[t._v("created")]),t._v(" -> 父 "),e("code",[t._v("beforeMounted")]),t._v(" -> 子 "),e("code",[t._v("beforeCreated")]),t._v(" -> 子 "),e("code",[t._v("created")]),t._v(" -> 子 "),e("code",[t._v("beforeMounted")]),t._v(" -> 子 "),e("code",[t._v("mounted")]),t._v(" -> 父 "),e("code",[t._v("mounted")])]),t._v(" "),e("li",[t._v("子更新时：父 "),e("code",[t._v("beforeUpdated")]),t._v(" -> 子 "),e("code",[t._v("beforeUpdated")]),t._v(" -> 子 "),e("code",[t._v("updated")]),t._v(" -> 父 "),e("code",[t._v("updated")])]),t._v(" "),e("li",[t._v("父更新时：父 "),e("code",[t._v("beforeUpdated")]),t._v(" -> 父 "),e("code",[t._v("updated")])]),t._v(" "),e("li",[t._v("父子销毁时：父 "),e("code",[t._v("beforeDestroyed")]),t._v(" -> 子 "),e("code",[t._v("beforeDestroyed")]),t._v(" -> 子 "),e("code",[t._v("destroyed")]),t._v(" -> 父 "),e("code",[t._v("destroyed")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);