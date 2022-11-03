(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{477:function(t,a,e){"use strict";e.r(a);var s=e(11),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("待补充：浮动、两栏布局、置换元素、选择器、定位、行内与块级元素、伪元素、CSS data")]),t._v(" "),a("h2",{attrs:{id:"_1-css3-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-css3-新特性"}},[t._v("#")]),t._v(" 1 CSS3 新特性")]),t._v(" "),a("ol",[a("li",[t._v("新增部分选择器、伪类，如 "),a("code",[t._v("nth-child")])]),t._v(" "),a("li",[t._v("边框支持圆角、阴影")]),t._v(" "),a("li",[t._v("新的背景属性")]),t._v(" "),a("li",[t._v("提供渐变")]),t._v(" "),a("li",[t._v("提供新的文本效果，如文本阴影、换行方式")]),t._v(" "),a("li",[t._v("转换和变形")]),t._v(" "),a("li",[t._v("过渡，"),a("code",[t._v("transition")])]),t._v(" "),a("li",[t._v("动画，"),a("code",[t._v("@keyframes")]),t._v(" 规则")]),t._v(" "),a("li",[t._v("多媒体模型，"),a("code",[t._v("@media")])])]),t._v(" "),a("h2",{attrs:{id:"_2-css-画图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-css-画图"}},[t._v("#")]),t._v(" 2 CSS 画图")]),t._v(" "),a("h3",{attrs:{id:"_2-1-css-画三角形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-css-画三角形"}},[t._v("#")]),t._v(" 2.1 CSS 画三角形")]),t._v(" "),a("p",[t._v("基于CSS的盒子模型中，边框 "),a("code",[t._v("border")]),t._v(" 实际上是 "),a("strong",[t._v("梯形")]),t._v("，且在盒子宽高为 0 时缩短为三角形：")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"CSSTriangleTest1",src:"https://codepen.io/kaluojushi/embed/abGgJbb?default-tab=css%2Cresult&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/kaluojushi/pen/abGgJbb"}},[t._v("\n  CSSTriangleTest1")]),t._v(" by Carlo ("),a("a",{attrs:{href:"https://codepen.io/kaluojushi"}},[t._v("@kaluojushi")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("p",[t._v("使盒子的宽高为 0，并设置较大的边框，其中某些边设置透明的边框。")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"CSSTriangleTest2",src:"https://codepen.io/kaluojushi/embed/QWrXpEZ?default-tab=css%2Cresult&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/kaluojushi/pen/QWrXpEZ"}},[t._v("\n  CSSTriangleTest2")]),t._v(" by Carlo ("),a("a",{attrs:{href:"https://codepen.io/kaluojushi"}},[t._v("@kaluojushi")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("p",[t._v("调整边框粗细，可以画直角三角形、等边三角形等。")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"CSSTriangleTest3",src:"https://codepen.io/kaluojushi/embed/LYmKWxR?default-tab=css%2Cresult&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/kaluojushi/pen/LYmKWxR"}},[t._v("\n  CSSTriangleTest3")]),t._v(" by Carlo ("),a("a",{attrs:{href:"https://codepen.io/kaluojushi"}},[t._v("@kaluojushi")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("h2",{attrs:{id:"_3-解释-bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-解释-bfc"}},[t._v("#")]),t._v(" 3 解释 BFC")]),t._v(" "),a("p",[t._v("BFC 是块级格式化上下文（Block Formatting Context），含义是：一个 BFC 区域包含创建该上下文元素的所有子元素，但不包含创建新 BFC 的子元素的内部元素。如：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bfc1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bfc2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[a("code",[t._v("box1")]),t._v(" 创建一块 BFC 区域 "),a("code",[t._v("bfc1")]),t._v("，且只包含 "),a("code",[t._v("box2")]),t._v("、"),a("code",[t._v("box3")]),t._v("、"),a("code",[t._v("box4")]),t._v("、"),a("code",[t._v("box5")]),t._v("，同时 "),a("code",[t._v("box5")]),t._v(" 创建一块 BFC 区域，且只包含 "),a("code",[t._v("box6")]),t._v("、"),a("code",[t._v("box7")]),t._v("。")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.itcast.cn/news/20201016/16152387135.shtml",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.itcast.cn/news/20201016/16152387135.shtml"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"_3-1-bfc-的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-bfc-的特点"}},[t._v("#")]),t._v(" 3.1 BFC 的特点")]),t._v(" "),a("ul",[a("li",[t._v("每个 BFC 区域只包含其子元素，不包含其子元素的子元素")]),t._v(" "),a("li",[t._v("每个 BFC 区域相互隔绝，并不影响")]),t._v(" "),a("li",[t._v("BFC 需要触发才可启动")])]),t._v(" "),a("h3",{attrs:{id:"_3-2-触发-bfc-的条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-触发-bfc-的条件"}},[t._v("#")]),t._v(" 3.2 触发 BFC 的条件")]),t._v(" "),a("ul",[a("li",[t._v("它由 "),a("code",[t._v("body")]),t._v(" 根元素产生")]),t._v(" "),a("li",[t._v("设置浮动，但 "),a("code",[t._v("none")]),t._v(" 除外")]),t._v(" "),a("li",[t._v("设置绝对定位，即 "),a("code",[t._v("absolute")]),t._v(" 或 "),a("code",[t._v("fixed")])]),t._v(" "),a("li",[t._v("行内块显示，即 "),a("code",[t._v("inline-block")]),t._v(" 或 "),a("code",[t._v("inline-flex")])]),t._v(" "),a("li",[t._v("设置 "),a("code",[t._v("overflow")]),t._v("，即 "),a("code",[t._v("hidden")]),t._v("、"),a("code",[t._v("auto")]),t._v("、"),a("code",[t._v("scroll")]),t._v("，但 "),a("code",[t._v("none")]),t._v(" 除外")]),t._v(" "),a("li",[t._v("表格单元格，即 "),a("code",[t._v("table-cell")])]),t._v(" "),a("li",[t._v("弹性布局，即 "),a("code",[t._v("flex")])])]),t._v(" "),a("h3",{attrs:{id:"_3-3-bfc-的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-bfc-的应用"}},[t._v("#")]),t._v(" 3.3 BFC 的应用")]),t._v(" "),a("h4",{attrs:{id:"_3-3-1-解决外边距垂直塌陷问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-解决外边距垂直塌陷问题"}},[t._v("#")]),t._v(" 3.3.1 解决外边距垂直塌陷问题")]),t._v(" "),a("p",[t._v("两个盒子的 "),a("code",[t._v("margin")]),t._v(" 重叠，塌陷到了一起，导致实际距离为 "),a("code",[t._v("50px")]),t._v("。")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"CSS-BFC-1",src:"https://codepen.io/kaluojushi/embed/zYjgbPa?default-tab=css%2Cresult&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/kaluojushi/pen/zYjgbPa"}},[t._v("\n  CSS-BFC-1")]),t._v(" by Carlo ("),a("a",{attrs:{href:"https://codepen.io/kaluojushi"}},[t._v("@kaluojushi")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("p",[t._v("将两个盒子放到独立的两个 BFC 里，两个 BFC 互不影响，实际距离为 "),a("code",[t._v("100px")]),t._v("。")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"CSS-BFC-2",src:"https://codepen.io/kaluojushi/embed/LYmwaeq?default-tab=css%2Cresult&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/kaluojushi/pen/LYmwaeq"}},[t._v("\n  CSS-BFC-2")]),t._v(" by Carlo ("),a("a",{attrs:{href:"https://codepen.io/kaluojushi"}},[t._v("@kaluojushi")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("h4",{attrs:{id:"_3-3-2-解决外边距包含塌陷问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-解决外边距包含塌陷问题"}},[t._v("#")]),t._v(" 3.3.2 解决外边距包含塌陷问题")]),t._v(" "),a("p",[t._v("父子元素中，给子元素设置 "),a("code",[t._v("margin")]),t._v(" 可能会带跑父元素。")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"CSS-BFC-3",src:"https://codepen.io/kaluojushi/embed/zYjgXex?default-tab=css%2Cresult&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/kaluojushi/pen/zYjgXex"}},[t._v("\n  CSS-BFC-3")]),t._v(" by Carlo ("),a("a",{attrs:{href:"https://codepen.io/kaluojushi"}},[t._v("@kaluojushi")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("p",[t._v("让父元素触发 BFC，此时内部 BFC 的操作不会影响到外部。")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"CSS-BFC-4",src:"https://codepen.io/kaluojushi/embed/ZEogZwg?default-tab=css%2Cresult&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/kaluojushi/pen/ZEogZwg"}},[t._v("\n  CSS-BFC-4")]),t._v(" by Carlo ("),a("a",{attrs:{href:"https://codepen.io/kaluojushi"}},[t._v("@kaluojushi")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("h3",{attrs:{id:"_3-4-其他格式上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-其他格式上下文"}},[t._v("#")]),t._v(" 3.4 其他格式上下文")]),t._v(" "),a("ul",[a("li",[t._v("IFC（Inline Formatting Contexts）：内联格式上下文。IFC 的高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的 "),a("code",[t._v("padding/margin")]),t._v(" 影响)，IFC 中的 line box 一般左右都贴紧整个 IFC，但是会因为 float 元素而扰乱。")]),t._v(" "),a("li",[t._v("GFC（GrideLayout Formatting Contexts）：网格布局格式化上下文。当为一个元素设置 "),a("code",[t._v("display")]),t._v(" 值为 "),a("code",[t._v("grid")]),t._v(" 的时候，此元素将会获得一个独立的渲染区域。")]),t._v(" "),a("li",[t._v("FFC（Flex Formatting Contexts）：自适应格式上下文。"),a("code",[t._v("display")]),t._v(" 值为 "),a("code",[t._v("flex")]),t._v(" 或者 "),a("code",[t._v("inline-flex")]),t._v(" 的元素将会生成自适应容器。")])]),t._v(" "),a("h2",{attrs:{id:"_4-css-中水平居中、垂直居中的几种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-css-中水平居中、垂直居中的几种方式"}},[t._v("#")]),t._v(" 4 CSS 中水平居中、垂直居中的几种方式")]),t._v(" "),a("h3",{attrs:{id:"_4-1-水平居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-水平居中"}},[t._v("#")]),t._v(" 4.1 水平居中")]),t._v(" "),a("ol",[a("li",[t._v("当前元素是 "),a("strong",[t._v("行内元素")]),t._v("：\n"),a("ul",[a("li",[t._v("如果父元素是块级元素，给父元素设置 "),a("code",[t._v("text-align: center")])]),t._v(" "),a("li",[t._v("如果父元素是行内元素，给父元素设置 "),a("code",[t._v("display: block")]),t._v(" 后设置 "),a("code",[t._v("text-align: center")])])])]),t._v(" "),a("li",[t._v("当前元素是 "),a("strong",[t._v("块级元素")]),t._v("：\n"),a("ol",[a("li",[t._v("父子宽度都确定时，给盒子设置 "),a("code",[t._v("margin: 0 auto")]),t._v("，使盒子自己居中")]),t._v(" "),a("li",[t._v("父宽度确定、子宽度不确定时，给盒子设置 "),a("code",[t._v("display: inline-block")]),t._v(" 或 "),a("code",[t._v("display: inline")]),t._v("，然后给父元素设置 "),a("code",[t._v("text-align: center")])]),t._v(" "),a("li",[t._v("使用 "),a("strong",[t._v("定位属性")]),t._v("，设置父相对、子绝对，给盒子设置 "),a("code",[t._v("left: 50%")]),t._v("（盒子左上角居中），然后左上角再向左偏移：\n"),a("ul",[a("li",[t._v("给盒子设置 "),a("code",[t._v("margin-left")]),t._v(" 为盒子宽度一半的负数，用于父子宽度都确定时")]),t._v(" "),a("li",[t._v("给盒子设置 "),a("code",[t._v("transform: translateX(-50%)")]),t._v("，用于任意情况")])])]),t._v(" "),a("li",[t._v("使用 "),a("strong",[a("code",[t._v("flex")]),t._v(" 布局")]),t._v("，给父元素设置 "),a("code",[t._v("display: flex; justify-content: center")]),t._v("，用于任意情况")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-2-垂直居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-垂直居中"}},[t._v("#")]),t._v(" 4.2 垂直居中")]),t._v(" "),a("ol",[a("li",[t._v("当前元素是 "),a("strong",[t._v("单行行内元素")]),t._v("：\n"),a("ul",[a("li",[t._v("给该元素设置 "),a("code",[t._v("line-height")]),t._v(" 为父元素的 "),a("code",[t._v("height")])])])]),t._v(" "),a("li",[t._v("当前元素是 "),a("strong",[t._v("多行行内元素")]),t._v("：\n"),a("ul",[a("li",[t._v("使用表格布局，给父元素设置 "),a("code",[t._v("display: table-cell; vertical-align: middle")])])])]),t._v(" "),a("li",[t._v("当前元素是 "),a("strong",[t._v("块级元素")]),t._v("：\n"),a("ol",[a("li",[t._v("使用 "),a("strong",[t._v("定位属性")]),t._v("，设置父相对、子绝对，给盒子设置 "),a("code",[t._v("top: 50%")]),t._v("（盒子左上角居中），然后左上角再向上偏移：\n"),a("ul",[a("li",[t._v("给盒子设置 "),a("code",[t._v("margin-top")]),t._v(" 为盒子高度一半的负数，用于父子高度都确定时")]),t._v(" "),a("li",[t._v("给盒子设置 "),a("code",[t._v("transform: translateY(-50%)")]),t._v("，用于任意情况")])])]),t._v(" "),a("li",[t._v("使用 "),a("strong",[a("code",[t._v("flex")]),t._v(" 布局")]),t._v("，给父元素设置 "),a("code",[t._v("display: flex; align-items: center")]),t._v("，用于任意情况")]),t._v(" "),a("li",[t._v("使用 "),a("strong",[t._v("表格布局")]),t._v("，给父元素设置 "),a("code",[t._v("display: table-cell; vertical-align: middle")])])])])]),t._v(" "),a("h3",{attrs:{id:"_4-3-水平、垂直居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-水平、垂直居中"}},[t._v("#")]),t._v(" 4.3 水平、垂直居中")]),t._v(" "),a("ol",[a("li",[t._v("使用 "),a("strong",[t._v("定位属性")]),t._v("，设置父相对、子绝对，然后：\n"),a("ul",[a("li",[t._v("给盒子设置 "),a("code",[t._v("top: 0; right: 0; bottom: 0; left: 0")]),t._v("，以及 "),a("code",[t._v("margin: auto")]),t._v("，用于宽高均确定时")]),t._v(" "),a("li",[t._v("给盒子设置 "),a("code",[t._v("left: 50%; top: 50%")]),t._v("，然后设置 "),a("code",[t._v("margin-left")]),t._v(" 为盒子宽度一半的负数，设置 "),a("code",[t._v("margin-top")]),t._v(" 为盒子高度一半的负数，用于父子宽高都确定时")]),t._v(" "),a("li",[t._v("给盒子设置 "),a("code",[t._v("left: 50%; top: 50%")]),t._v("，然后设置 "),a("code",[t._v("transform: translateX(-50%) translateY(-50%)")]),t._v("，用于任意情况")])])]),t._v(" "),a("li",[t._v("使用 "),a("strong",[a("code",[t._v("flex")]),t._v(" 布局")]),t._v("，给父元素设置 "),a("code",[t._v("display: flex; justify-content: center; align-items: center")]),t._v("，用于任意情况")])]),t._v(" "),a("h2",{attrs:{id:"_5-display-none、visibility-hidden、opacity-0-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-display-none、visibility-hidden、opacity-0-的区别"}},[t._v("#")]),t._v(" 5 "),a("code",[t._v("display:none")]),t._v("、"),a("code",[t._v("visibility:hidden")]),t._v("、"),a("code",[t._v("opacity:0")]),t._v(" 的区别")]),t._v(" "),a("p",[t._v("相同点：")]),t._v(" "),a("ul",[a("li",[t._v("他们都能使元素隐藏。")]),t._v(" "),a("li",[t._v("DOM 节点都存在（可以被 "),a("code",[t._v("document")]),t._v(" 相关方法获取）。")])]),t._v(" "),a("p",[t._v("不同点：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("文档布局")]),t._v("："),a("code",[t._v("display:none")]),t._v(" 在文档中不再占用空间，"),a("code",[t._v("visibility:hidden")]),t._v(" 在文档布局中仍占据原来的空间，"),a("code",[t._v("opacity:0")]),t._v(" 也占据空间。")]),t._v(" "),a("li",[a("strong",[t._v("回流和重绘")]),t._v("："),a("code",[t._v("display:none")]),t._v(" 会引起回流和重绘，"),a("code",[t._v("visibility:hidden")]),t._v(" 不会引起回流、只引起重绘，"),a("code",[t._v("opacity:0")]),t._v(" 不引起回流和重绘（提升为合成层）。\n"),a("ul",[a("li",[t._v("回流：又称重排，页面进行重新排列")]),t._v(" "),a("li",[t._v("重绘：页面的颜色与背景修改后重新渲染，回流一定重绘，重绘不引起回流")]),t._v(" "),a("li",[t._v("合成层：页面的各个部分分成多个层、单独光栅化；合成层拥有单独的图层，和其他图层之间无不影响")])])]),t._v(" "),a("li",[a("strong",[t._v("继承性")]),t._v("："),a("code",[t._v("display:none")]),t._v(" 不会继承，"),a("code",[t._v("visibility:hidden")]),t._v(" 会继承，"),a("code",[t._v("opacity:0")]),t._v(" 会继承。")]),t._v(" "),a("li",[a("strong",[t._v("后代是否可见")]),t._v("："),a("code",[t._v("display:none")]),t._v(" 的后代元素不可见（直接消失），"),a("code",[t._v("visibility:hidden")]),t._v(" 的后代设置 "),a("code",[t._v("visibility:visible")]),t._v(" 将可见，"),a("code",[t._v("opacity:0")]),t._v(" 的后代无法通过设置 "),a("code",[t._v("opacity:1")]),t._v(" 而可见。")]),t._v(" "),a("li",[a("strong",[t._v("事件监听")]),t._v("："),a("code",[t._v("display:none")]),t._v(" 和 "),a("code",[t._v("visibility:hidden")]),t._v(" 无法进行 DOM 事件监听，"),a("code",[t._v("opacity:0")]),t._v(" 可以进行 DOM 事件监听。")])]),t._v(" "),a("h2",{attrs:{id:"_6-样式优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-样式优先级"}},[t._v("#")]),t._v(" 6 样式优先级")]),t._v(" "),a("ul",[a("li",[t._v("第一类："),a("code",[t._v("!important")]),t._v("，优先级最高，使用需谨慎")]),t._v(" "),a("li",[t._v("第二类：引入方式，行内样式最高，嵌入样式和引入样式按页面插入顺序决定")]),t._v(" "),a("li",[t._v("第三类：选择器，"),a("code",[t._v("id")]),t._v(" 选择器 > 类/伪类/属性选择器 > 后代/伪元素选择器 > 子/相邻选择器 > 通配符选择器")]),t._v(" "),a("li",[t._v("第四类：继承样式，优先级较低")]),t._v(" "),a("li",[t._v("第五类：浏览器默认样式，优先级最低")])]),t._v(" "),a("h2",{attrs:{id:"_7-css-盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-css-盒模型"}},[t._v("#")]),t._v(" 7 CSS 盒模型")]),t._v(" "),a("p",[t._v("可以认为每个 HTML 元素都是一个方块，方块内还可以包含方块，如同盒子一层一层包裹。")]),t._v(" "),a("p",[t._v("盒子从内到外依次是 "),a("code",[t._v("content")]),t._v(" 内容、"),a("code",[t._v("padding")]),t._v(" 内边距、"),a("code",[t._v("border")]),t._v(" 边框、"),a("code",[t._v("margin")]),t._v(" 外边距。W3C 盒模型和 IE 盒模型的区别在于 "),a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")]),t._v(" 包含的范围。")]),t._v(" "),a("h3",{attrs:{id:"_7-1-w3c-盒模型-标准盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-w3c-盒模型-标准盒模型"}},[t._v("#")]),t._v(" 7.1 W3C 盒模型（标准盒模型）")]),t._v(" "),a("p",[a("code",[t._v("width")]),t._v(" 和 "),a("code",[t._v("height")]),t._v(" 只包含 "),a("code",[t._v("content")]),t._v("。")]),t._v(" "),a("p",[t._v("触发方式为：")]),t._v(" "),a("ul",[a("li",[t._v("在设置了 "),a("code",[t._v("DOCTYPE")]),t._v(" 的默认情况下")]),t._v(" "),a("li",[t._v("在 IE8+ 浏览器中设置 "),a("code",[t._v("box-sizing")]),t._v(" 为 "),a("code",[t._v("content-box")]),t._v(" 时")])]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"CSS-box-w3c",src:"https://codepen.io/kaluojushi/embed/MWGNRdM?default-tab=css%2Cresult&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/kaluojushi/pen/MWGNRdM"}},[t._v("\n  CSS-box-w3c")]),t._v(" by Carlo ("),a("a",{attrs:{href:"https://codepen.io/kaluojushi"}},[t._v("@kaluojushi")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("h3",{attrs:{id:"_7-2-ie-盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-ie-盒模型"}},[t._v("#")]),t._v(" 7.2 IE 盒模型")]),t._v(" "),a("p",[a("code",[t._v("width")]),t._v(" 和 "),a("code",[t._v("height")]),t._v(" 会包含 "),a("code",[t._v("content")]),t._v("、"),a("code",[t._v("padding")]),t._v(" 和 "),a("code",[t._v("border")]),t._v("，更方便设置宽高。")]),t._v(" "),a("p",[t._v("触发方式为：")]),t._v(" "),a("ul",[a("li",[t._v("在 IE6、7、8 缺失 "),a("code",[t._v("DOCTYPE")]),t._v(" 时")]),t._v(" "),a("li",[t._v("在 IE8+ 浏览器中设置 "),a("code",[t._v("box-sizing")]),t._v(" 为 "),a("code",[t._v("border-box")]),t._v(" 时")])]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"CSS-box-ie",src:"https://codepen.io/kaluojushi/embed/zYjgXVv?default-tab=css%2Cresult&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/kaluojushi/pen/zYjgXVv"}},[t._v("\n  CSS-box-ie")]),t._v(" by Carlo ("),a("a",{attrs:{href:"https://codepen.io/kaluojushi"}},[t._v("@kaluojushi")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")])])}),[],!1,null,null,null);a.default=n.exports}}]);