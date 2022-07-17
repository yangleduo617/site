(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{302:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),a("p",[t._v("对字符串进行模式匹配的表达式，默认区分大小写。")]),t._v(" "),a("p",[t._v("不区分 "),a("code",[t._v("(?i)abc，Pattern pattern = Pattern.compile(str, Pattern.CASE_INSENSITIVE);")])]),t._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("h3",{attrs:{id:"元字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元字符"}},[t._v("#")]),t._v(" 元字符")]),t._v(" "),a("p",[t._v("转义字符 "),a("code",[t._v('" \\\\ "')]),t._v("，在 . * + ( ) $ / \\ ? [ ] ^ { } 前使用")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("限定符")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1204/image-20220224093504407.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1204/image-20220224094817994.png",alt:""}})]),t._v(" "),a("p",[t._v("{ }，贪婪匹配，先匹配数量较多的")])]),t._v(" "),a("li",[a("p",[t._v("选择匹配符")]),t._v(" "),a("p",[t._v("| 匹配之前或者之后的表达式")])]),t._v(" "),a("li",[a("p",[t._v("分组组合和反向引用符")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1204/image-20220224164248143.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1204/image-20220224124628545.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1204/image-20220224131110648.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("字符匹配符")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("[ ]，可接收的字符序列中任意一个字符")])]),t._v(" "),a("li",[a("p",[t._v("[^ ]，不可接收的字符序列，除去括号中的符号外的任意字符")])]),t._v(" "),a("li",[a("p",[t._v("-，连字符，a-b，任意单个小写字母")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1204/image-20220224090716120.png",alt:""}})])]),t._v(" "),a("li",[a("p",[a("code",[t._v("\\\\s")]),t._v(" 匹配任何空白字符（空格、制表符）")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("\\\\S")]),t._v(" 匹配任何非空白字符")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("\\\\")]),t._v(" 匹配出 "),a("code",[t._v("\\n")]),t._v(" 之外所有字符")])])])]),t._v(" "),a("li",[a("p",[t._v("定位符")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1204/image-20220224123625986.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 汉字")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^[\\u0391-\\uffe5]+$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 邮政编码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^[1-9]\\\\d{5}$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// URL地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.bilibili.com/video/BV1Eq4y1E79W?p=17&spm_id_from=pageDriver"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^((http|https)://)?([\\\\w-]+\\\\.)+[\\\\w-]+(\\\\/[\\\\w-&=?/%.#]*)?$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),t._v(" compile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Matcher")]),t._v(" matcher "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" compile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("matcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" find"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"not find"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 整体匹配")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isMatch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("matches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);