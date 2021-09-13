(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{425:function(t,e,a){"use strict";a.r(e);var s=a(28),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("RouterLink",{attrs:{to:"/"}},[t._v("Ottoman")]),t._v(" / "),a("RouterLink",{attrs:{to:"/modules.html"}},[t._v("Exports")]),t._v(" / EmbedType")],1),t._v(" "),a("h1",{attrs:{id:"class-embedtype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-embedtype"}},[t._v("#")]),t._v(" Class: EmbedType")]),t._v(" "),a("p",[a("code",[t._v("EmbedType")]),t._v(" will allow declaration of path as another schema, set type to the sub-schema's instance.")]),t._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("required")]),t._v(" flag to define if the field is mandatory")]),t._v(" "),a("li",[a("strong",[t._v("validator")]),t._v(" that will be applied to the field a validation function, validation object or string with the name of the custom validator")]),t._v(" "),a("li",[a("strong",[t._v("default")]),t._v(" that will define the initial value of the field, this option allows a value or a function")]),t._v(" "),a("li",[a("strong",[t._v("immutable")]),t._v(" that will define this field as immutable. Ottoman prevents you from changing immutable fields if the schema as configure like strict")])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("example")])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userSchema "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  createAt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  user"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" userSchema\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("You can also use a JavaScript plain Object as value for an "),a("code",[t._v("EmbedType")]),t._v(".\nTherefore the below example will behave the same as the example above.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n user"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   createAt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[a("code",[t._v("tip")])]),t._v(" "),a("code",[t._v("EmbedType")]),t._v(" will allow you to easily reuse existing schemas into new ones using composition.")]),t._v(" "),a("h2",{attrs:{id:"hierarchy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy"}},[t._v("#")]),t._v(" Hierarchy")]),t._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[a("code",[t._v("CoreType")])])],1),t._v(" "),a("p",[t._v("↳ "),a("strong",[a("code",[t._v("EmbedType")])])])])]),t._v(" "),a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of contents")]),t._v(" "),a("h3",{attrs:{id:"constructors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructors"}},[t._v("#")]),t._v(" Constructors")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#constructor"}},[t._v("constructor")])],1)]),t._v(" "),a("h3",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#name"}},[t._v("name")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#options"}},[t._v("options")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#schema"}},[t._v("schema")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#typename"}},[t._v("typeName")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#sname"}},[t._v("sName")])],1)]),t._v(" "),a("h3",{attrs:{id:"accessors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessors"}},[t._v("#")]),t._v(" Accessors")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#default"}},[t._v("default")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#required"}},[t._v("required")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#validator"}},[t._v("validator")])],1)]),t._v(" "),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#builddefault"}},[t._v("buildDefault")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#cast"}},[t._v("cast")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#checkrequired"}},[t._v("checkRequired")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#checkvalidator"}},[t._v("checkValidator")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#isempty"}},[t._v("isEmpty")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#isstrictstrategy"}},[t._v("isStrictStrategy")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/classes/EmbedType.html#validate"}},[t._v("validate")])],1)]),t._v(" "),a("h2",{attrs:{id:"constructors-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructors-2"}},[t._v("#")]),t._v(" Constructors")]),t._v(" "),a("h3",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),a("p",[t._v("• "),a("strong",[t._v("new EmbedType")]),t._v("("),a("code",[t._v("name")]),t._v(", "),a("code",[t._v("schema")]),t._v(", "),a("code",[t._v("options?")]),t._v(")")]),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("string")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("schema")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/classes/Schema.html"}},[a("code",[t._v("Schema")])])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("options?")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("CoreTypeOptions")])])])])]),t._v(" "),a("h4",{attrs:{id:"overrides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overrides"}},[t._v("#")]),t._v(" Overrides")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[t._v("CoreType")]),t._v("."),a("RouterLink",{attrs:{to:"/classes/CoreType.html#constructor"}},[t._v("constructor")])],1),t._v(" "),a("h2",{attrs:{id:"properties-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties-2"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" name")]),t._v(" "),a("p",[t._v("• "),a("strong",[t._v("name")]),t._v(": "),a("code",[t._v("string")])]),t._v(" "),a("h4",{attrs:{id:"inherited-from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-from"}},[t._v("#")]),t._v(" Inherited from")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[t._v("CoreType")]),t._v("."),a("RouterLink",{attrs:{to:"/classes/CoreType.html#name"}},[t._v("name")])],1),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"options-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-2"}},[t._v("#")]),t._v(" options")]),t._v(" "),a("p",[t._v("• "),a("code",[t._v("Optional")]),t._v(" "),a("strong",[t._v("options")]),t._v(": "),a("code",[t._v("CoreTypeOptions")])]),t._v(" "),a("h4",{attrs:{id:"inherited-from-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-from-2"}},[t._v("#")]),t._v(" Inherited from")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[t._v("CoreType")]),t._v("."),a("RouterLink",{attrs:{to:"/classes/CoreType.html#options"}},[t._v("options")])],1),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[t._v("#")]),t._v(" schema")]),t._v(" "),a("p",[t._v("• "),a("strong",[t._v("schema")]),t._v(": "),a("RouterLink",{attrs:{to:"/classes/Schema.html"}},[a("code",[t._v("Schema")])])],1),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"typename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typename"}},[t._v("#")]),t._v(" typeName")]),t._v(" "),a("p",[t._v("• "),a("strong",[t._v("typeName")]),t._v(": "),a("code",[t._v("string")])]),t._v(" "),a("h4",{attrs:{id:"inherited-from-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-from-3"}},[t._v("#")]),t._v(" Inherited from")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[t._v("CoreType")]),t._v("."),a("RouterLink",{attrs:{to:"/classes/CoreType.html#typename"}},[t._v("typeName")])],1),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"sname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sname"}},[t._v("#")]),t._v(" sName")]),t._v(" "),a("p",[t._v("▪ "),a("code",[t._v("Static")]),t._v(" "),a("strong",[t._v("sName")]),t._v(": "),a("code",[t._v("string")]),t._v(" = "),a("code",[t._v("'Embed'")])]),t._v(" "),a("h4",{attrs:{id:"overrides-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overrides-2"}},[t._v("#")]),t._v(" Overrides")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[t._v("CoreType")]),t._v("."),a("RouterLink",{attrs:{to:"/classes/CoreType.html#sname"}},[t._v("sName")])],1),t._v(" "),a("h2",{attrs:{id:"accessors-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessors-2"}},[t._v("#")]),t._v(" Accessors")]),t._v(" "),a("h3",{attrs:{id:"default"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default"}},[t._v("#")]),t._v(" default")]),t._v(" "),a("p",[t._v("• "),a("code",[t._v("get")]),t._v(" "),a("strong",[t._v("default")]),t._v("(): "),a("code",[t._v("unknown")])]),t._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("unknown")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#required"}},[t._v("#")]),t._v(" required")]),t._v(" "),a("p",[t._v("• "),a("code",[t._v("get")]),t._v(" "),a("strong",[t._v("required")]),t._v("(): "),a("code",[t._v("boolean")]),t._v(" | "),a("code",[t._v("RequiredOption")]),t._v(" | "),a("code",[t._v("RequiredFunction")])]),t._v(" "),a("h4",{attrs:{id:"returns-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-2"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("boolean")]),t._v(" | "),a("code",[t._v("RequiredOption")]),t._v(" | "),a("code",[t._v("RequiredFunction")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator"}},[t._v("#")]),t._v(" validator")]),t._v(" "),a("p",[t._v("• "),a("code",[t._v("get")]),t._v(" "),a("strong",[t._v("validator")]),t._v("(): "),a("code",[t._v("undefined")]),t._v(" | "),a("code",[t._v("string")]),t._v(" | "),a("RouterLink",{attrs:{to:"/interfaces/ValidatorOption.html"}},[a("code",[t._v("ValidatorOption")])]),t._v(" | "),a("code",[t._v("ValidatorFunction")])],1),t._v(" "),a("h4",{attrs:{id:"returns-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-3"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("undefined")]),t._v(" | "),a("code",[t._v("string")]),t._v(" | "),a("RouterLink",{attrs:{to:"/interfaces/ValidatorOption.html"}},[a("code",[t._v("ValidatorOption")])]),t._v(" | "),a("code",[t._v("ValidatorFunction")])],1),t._v(" "),a("h2",{attrs:{id:"methods-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods-2"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("h3",{attrs:{id:"builddefault"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#builddefault"}},[t._v("#")]),t._v(" buildDefault")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("buildDefault")]),t._v("(): "),a("code",[t._v("unknown")])]),t._v(" "),a("h4",{attrs:{id:"returns-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-4"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("unknown")])]),t._v(" "),a("h4",{attrs:{id:"inherited-from-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-from-4"}},[t._v("#")]),t._v(" Inherited from")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[t._v("CoreType")]),t._v("."),a("RouterLink",{attrs:{to:"/classes/CoreType.html#builddefault"}},[t._v("buildDefault")])],1),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"cast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cast"}},[t._v("#")]),t._v(" cast")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("cast")]),t._v("("),a("code",[t._v("value")]),t._v(", "),a("code",[t._v("strategy?")]),t._v("): "),a("code",[t._v("unknown")])]),t._v(" "),a("h4",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("value")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("unknown")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("strategy")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("CAST_STRATEGY")])])])])]),t._v(" "),a("h4",{attrs:{id:"returns-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-5"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("unknown")])]),t._v(" "),a("h4",{attrs:{id:"overrides-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overrides-3"}},[t._v("#")]),t._v(" Overrides")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[t._v("CoreType")]),t._v("."),a("RouterLink",{attrs:{to:"/classes/CoreType.html#cast"}},[t._v("cast")])],1),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"checkrequired"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkrequired"}},[t._v("#")]),t._v(" checkRequired")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("checkRequired")]),t._v("(): "),a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("void")])]),t._v(" "),a("h4",{attrs:{id:"returns-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-6"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("void")])]),t._v(" "),a("h4",{attrs:{id:"inherited-from-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-from-5"}},[t._v("#")]),t._v(" Inherited from")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[t._v("CoreType")]),t._v("."),a("RouterLink",{attrs:{to:"/classes/CoreType.html#checkrequired"}},[t._v("checkRequired")])],1),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"checkvalidator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkvalidator"}},[t._v("#")]),t._v(" checkValidator")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("checkValidator")]),t._v("("),a("code",[t._v("value")]),t._v("): "),a("code",[t._v("void")])]),t._v(" "),a("h4",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("value")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("unknown")])])])])]),t._v(" "),a("h4",{attrs:{id:"returns-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-7"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("void")])]),t._v(" "),a("h4",{attrs:{id:"inherited-from-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-from-6"}},[t._v("#")]),t._v(" Inherited from")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[t._v("CoreType")]),t._v("."),a("RouterLink",{attrs:{to:"/classes/CoreType.html#checkvalidator"}},[t._v("checkValidator")])],1),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"isempty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isempty"}},[t._v("#")]),t._v(" isEmpty")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("isEmpty")]),t._v("("),a("code",[t._v("value")]),t._v("): "),a("code",[t._v("boolean")])]),t._v(" "),a("h4",{attrs:{id:"parameters-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("value")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("unknown")])])])])]),t._v(" "),a("h4",{attrs:{id:"returns-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-8"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("boolean")])]),t._v(" "),a("h4",{attrs:{id:"inherited-from-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-from-7"}},[t._v("#")]),t._v(" Inherited from")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[t._v("CoreType")]),t._v("."),a("RouterLink",{attrs:{to:"/classes/CoreType.html#isempty"}},[t._v("isEmpty")])],1),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"isstrictstrategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isstrictstrategy"}},[t._v("#")]),t._v(" isStrictStrategy")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("isStrictStrategy")]),t._v("("),a("code",[t._v("strategy")]),t._v("): "),a("code",[t._v("boolean")])]),t._v(" "),a("h4",{attrs:{id:"parameters-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("strategy")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/enums/VALIDATION_STRATEGY.html"}},[a("code",[t._v("VALIDATION_STRATEGY")])])],1)])])]),t._v(" "),a("h4",{attrs:{id:"returns-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-9"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("boolean")])]),t._v(" "),a("h4",{attrs:{id:"inherited-from-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-from-8"}},[t._v("#")]),t._v(" Inherited from")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[t._v("CoreType")]),t._v("."),a("RouterLink",{attrs:{to:"/classes/CoreType.html#isstrictstrategy"}},[t._v("isStrictStrategy")])],1),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"validate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[t._v("#")]),t._v(" validate")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("validate")]),t._v("("),a("code",[t._v("value")]),t._v(", "),a("code",[t._v("strategy")]),t._v("): "),a("code",[t._v("any")])]),t._v(" "),a("h4",{attrs:{id:"parameters-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-6"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("value")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("unknown")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("strategy")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("any")])])])])]),t._v(" "),a("h4",{attrs:{id:"returns-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-10"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("any")])]),t._v(" "),a("h4",{attrs:{id:"overrides-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overrides-4"}},[t._v("#")]),t._v(" Overrides")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/classes/CoreType.html"}},[t._v("CoreType")]),t._v("."),a("RouterLink",{attrs:{to:"/classes/CoreType.html#validate"}},[t._v("validate")])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);