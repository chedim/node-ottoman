(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{387:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Ottoman / "),a("RouterLink",{attrs:{to:"/modules.html"}},[t._v("Exports")])],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/couchbaselabs/node-ottoman/workflows/CI/badge.svg",alt:"CI"}}),t._v(" "),a("a",{attrs:{href:"https://codecov.io/gh/couchbaselabs/node-ottoman",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/couchbaselabs/node-ottoman/branch/master/graph/badge.svg",alt:"codecov"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://badge.fury.io/js/ottoman",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badge.fury.io/js/ottoman.svg",alt:"npm version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"http://commitizen.github.io/cz-cli/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/commitizen-friendly-brightgreen.svg",alt:"Commitizen friendly"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://opensource.org/licenses/Apache-2.0",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/License-Apache%202.0-blue.svg",alt:"License"}}),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Ottoman is an ODM built for Couchbase and Node.js.")]),t._v(" "),a("p",[t._v("Ottoman's goal is to provide a better development experience while using Couchbase,\nbringing to developers a reliable tool to build systems that are easy to design, maintain, and scale.")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install ottoman\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("That's it, you are ready to use Ottoman.")]),t._v(" "),a("h3",{attrs:{id:"dependencies-matrix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-matrix"}},[t._v("#")]),t._v(" Dependencies Matrix")]),t._v(" "),a("p",[t._v("Supported version are:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Ottoman")]),t._v(" "),a("th",[t._v("Nodejs")]),t._v(" "),a("th",[t._v("Couchbase SDK")]),t._v(" "),a("th",[t._v("Couchbase Server")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("^2.0.0")]),t._v(" "),a("td",[t._v("^8.0.0")]),t._v(" "),a("td",[t._v("^3.0.0")]),t._v(" "),a("td",[t._v("^6.5.0")])])])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("Notice: make sure you are using supported versions")])])]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" close "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ottoman'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"couchbase://localhost/travel-sample@admin:password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jane Doe'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nice Job!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("finally")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("You should see results similar to the following:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Nice Job!\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If you are using legacy database must check out this "),a("a",{attrs:{href:"https://v1.ottomanjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("v1.ottomanjs.com"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"ottoman-v2-main-goals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ottoman-v2-main-goals"}},[t._v("#")]),t._v(" Ottoman v2 main goals")]),t._v(" "),a("ul",[a("li",[t._v("To add support to Couchbase SDK 3.")]),t._v(" "),a("li",[t._v("To add typescript support.")]),t._v(" "),a("li",[t._v("To have a powerful query builder built-in.")]),t._v(" "),a("li",[t._v("To allow adding indexes to improve queries performance.")]),t._v(" "),a("li",[t._v("To have extendable Schemas using statics, methods, hooks.")]),t._v(" "),a("li",[t._v("To have Pluggable Schemas.")])]),t._v(" "),a("h2",{attrs:{id:"documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),a("p",[t._v("Checkout our "),a("a",{attrs:{href:"https://ottomanjs.com/guides/first-app.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples"),a("OutboundLink")],1),t._v("  and "),a("a",{attrs:{href:"https://ottomanjs.com/guides/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs"),a("OutboundLink")],1),t._v(" for typescript and javascript implementation.")]),t._v(" "),a("h2",{attrs:{id:"questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#questions"}},[t._v("#")]),t._v(" Questions")]),t._v(" "),a("p",[t._v("For questions and support please use "),a("a",{attrs:{href:"https://forums.couchbase.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the official forum"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"http://couchbase.com/communities/nodejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("contact community"),a("OutboundLink")],1),t._v(".\nPlease make sure to read the "),a("a",{attrs:{href:"https://github.com/couchbaselabs/node-ottoman/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Issue Reporting Checklist"),a("OutboundLink")],1),t._v(" before opening an issue.")]),t._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" Changelog")]),t._v(" "),a("p",[t._v("Detailed changes for each release are documented in the "),a("a",{attrs:{href:"https://github.com/couchbaselabs/node-ottoman/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("release notes"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"stay-in-touch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stay-in-touch"}},[t._v("#")]),t._v(" Stay In Touch")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.couchbase.com/?s=ottoman",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blog"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"contributions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributions"}},[t._v("#")]),t._v(" Contributions")]),t._v(" "),a("p",[t._v("Thank you to all the people who already contributed to Couchbase Ottoman!")]),t._v(" "),a("h3",{attrs:{id:"guide-for-developers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guide-for-developers"}},[t._v("#")]),t._v(" Guide for Developers")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://docs.couchbase.com/server/current/install/getting-started-docker.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Couchbase Server Using Docker"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Check results on "),a("a",{attrs:{href:"http://localhost:8091/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8091/"),a("OutboundLink")],1),t._v(" couchbase web client.")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Get the repo and install dependencies")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ git clone https://github.com/couchbaselabs/node-ottoman.git\n$ cd node-ottoman\n$ yarn install\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Available scripts")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ yarn dev\n$ yarn build\n$ yarn lint\n$ yarn test\n$ yarn test --coverage\n$ yarn docs\n$ yarn docs:dev\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"deploying-ottoman-to-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-ottoman-to-npm"}},[t._v("#")]),t._v(" Deploying Ottoman to NPM")]),t._v(" "),a("ul",[a("li",[t._v("Pull master branch from repo")]),t._v(" "),a("li",[t._v("yarn install")]),t._v(" "),a("li",[t._v("ensure version number is bumped")]),t._v(" "),a("li",[t._v("yarn build")]),t._v(" "),a("li",[t._v("yarn is:ready")])]),t._v(" "),a("h2",{attrs:{id:"publishing-to-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishing-to-npm"}},[t._v("#")]),t._v(" Publishing to NPM")]),t._v(" "),a("p",[t._v("When publishing a new package to NPM, please follow the following steps:")]),t._v(" "),a("ul",[a("li",[t._v("git pull (master branch)")]),t._v(" "),a("li",[t._v("update the "),a("code",[t._v("package.json")]),t._v(" file w/ new version")]),t._v(" "),a("li",[t._v("yarn install && yarn build")]),t._v(" "),a("li",[t._v("yarn test:legacy (Use "),a("code",[t._v("test:legacy")]),t._v(" Until CB 7 Release)")]),t._v(" "),a("li",[t._v("yarn pack (ensure package is packing as intended)")]),t._v(" "),a("li",[t._v("npm publish (--tag alpha or --tag beta)")]),t._v(" "),a("li",[t._v("push changes to "),a("code",[t._v("package.json")]),t._v(" file w/ new version")]),t._v(" "),a("li",[t._v("deploy docs *if required")])]),t._v(" "),a("p",[t._v("Once package is published, *update the docs:")]),t._v(" "),a("ul",[a("li",[t._v("yarn docs:dev (preview site)")]),t._v(" "),a("li",[t._v("yarn docs (generate docs directory)")]),t._v(" "),a("li",[t._v("copy files in "),a("code",[t._v("docs/.vuepress/dist")]),t._v(" to ottomanjs-site")]),t._v(" "),a("li",[t._v("ensure CNAME file is correct")]),t._v(" "),a("li",[t._v("git push changes to ottomanjs-site")])]),t._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[t._v("© Copyright 2021 Couchbase Inc.")]),t._v(" "),a("p",[t._v("Licensed under the Apache License, Version 2.0.\nSee "),a("a",{attrs:{href:"http://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("the Apache 2.0 license"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);