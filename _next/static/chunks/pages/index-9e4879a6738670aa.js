(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9332)}])},9332:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return j}});var a=t(5893),i=t(1664),c=t.n(i),r=t(7294),o=t(8193),n=t(9583),l=t(8315),_=t.n(l);let d=()=>(0,a.jsx)("div",{className:_().container,children:(0,a.jsxs)("div",{className:_().footer,children:[(0,a.jsxs)("div",{className:_().socialMedia,children:[(0,a.jsx)(n.Zf_,{}),(0,a.jsx)("a",{href:"https://www.linkedin.com/company/eol-solutions-sas/",target:"_blank",children:(0,a.jsx)(n.ltd,{})}),(0,a.jsx)(n.fWC,{})]}),(0,a.jsx)("p",{children:"\xa9 2021. All rights reserved."}),(0,a.jsx)("p",{children:"Created by EOL solutions SAS"})]})});var m=t(387),u=t(5589),h=t.n(u);function j(){let{setLoading:e}=(0,m.r$)(),[s,t]=(0,r.useState)([]),[i,l]=(0,r.useState)([]),[_,u]=(0,r.useState)(null),[j,g]=(0,r.useState)(!1),[x,f]=(0,r.useState)("All Products"),[p,v]=(0,r.useState)("image1");(0,r.useEffect)(()=>{let e=setInterval(()=>{"image1"===p?v("image2"):"image2"===p?v("image3"):"image3"===p&&v("image1")},3e3);return()=>clearInterval(e)},[p]),(0,r.useEffect)(()=>{e(!0),_||Promise.all([fetch("https://fakestoreapi.com/products"),fetch("https://fakestoreapi.com/products/categories")]).then(e=>Promise.all(e.map(e=>e.json()))).then(e=>{let[s,a]=e;t(s),l(a)}).finally(()=>e(!1))},[_]);let N=s=>{if(t([]),f(s),_===s){u(""),f("");return}u(s),fetch("https://fakestoreapi.com/products/category/".concat(s)).then(e=>e.json()).then(e=>t(e)).finally(()=>e(!1))};return(0,a.jsxs)("div",{className:h().container,children:[(0,a.jsxs)("div",{className:h().containerCarousel,children:[(0,a.jsx)("div",{className:h().carousel,id:h()[p],children:(0,a.jsx)("img",{src:"/images/eccomerce1.jpg",alt:"carousel"})}),(0,a.jsx)("div",{className:h().carousel,id:h()[p],children:(0,a.jsx)("img",{src:"/images/eccomerce2.jpg",alt:"carousel"})}),(0,a.jsx)("div",{className:h().carousel,id:h()[p],children:(0,a.jsx)("img",{src:"/images/eccomerce3.jpg",alt:"carousel"})})]}),(0,a.jsx)("h1",{children:""==x?"All Products":x}),(0,a.jsxs)("div",{className:h().containerCategories,children:[(0,a.jsx)("button",{id:j?h().active:void 0,className:h().btnCategories,onClick:()=>g(!j),children:"Categories"}),j&&(0,a.jsx)("div",{className:h().categories,children:i.map(e=>(0,a.jsx)("button",{className:_==e?h().active:h().inactive,onClick:()=>N(e),children:(0,a.jsx)("p",{children:e})},e))})]}),(0,a.jsx)("div",{className:h().products,children:s.map(e=>(0,a.jsxs)(c(),{href:"/product/".concat(e.id),className:h().product,children:[(0,a.jsxs)("div",{className:h().buttons,children:[(0,a.jsx)("button",{children:(0,a.jsx)(n.FeP,{})}),(0,a.jsx)("button",{children:(0,a.jsx)(o.M_L,{})})]}),(0,a.jsx)("img",{src:e.image,alt:e.title}),(0,a.jsx)("h4",{children:e.title}),(0,a.jsxs)("p",{children:["$",e.price]})]},e.id))}),(0,a.jsx)(d,{})]})}},5589:function(e){e.exports={container:"Home_container__97eC3",containerCarousel:"Home_containerCarousel__KlULw",carousel:"Home_carousel__mZQjq",image1:"Home_image1__qh_xD",image2:"Home_image2__yTrC8",image3:"Home_image3__7Uhpa",containerCategories:"Home_containerCategories__ikHQ2",btnCategories:"Home_btnCategories__3Offa",categories:"Home_categories__8Gnh5",active:"Home_active__jsr0T",products:"Home_products__EDjES",product:"Home_product__wG_G_",buttons:"Home_buttons__kEItN"}},8315:function(e){e.exports={container:"footer_container__kDTg_",footer:"footer_footer__CKQ67",socialMedia:"footer_socialMedia__8ix1W"}}},function(e){e.O(0,[445,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);