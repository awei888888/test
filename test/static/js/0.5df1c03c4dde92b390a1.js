webpackJsonp([0],{"3Lt7":function(t,e,n){"use strict";Number,String,Number,String;var i=["-moz-box-","-webkit-box-",""],r={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var n=0;n<i.length;n++)t[i[n]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-flexbox-item",style:this.style},[this._t("default")],2)},staticRenderFns:[]},s=n("VU/8")(r,o,!1,null,null,null);e.a=s.exports},Y8Aj:function(t,e){},YxJB:function(t,e,n){"use strict";Number,String,String,String,String,String;var i={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){var t={"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction};return t}}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===this.orient,"vux-flex-row":"horizontal"===this.orient},style:this.styles},[this._t("default")],2)},staticRenderFns:[]};var o=n("VU/8")(i,r,!1,function(t){n("Y8Aj")},null,null);e.a=o.exports},cjn6:function(t,e){},ignk:function(t,e,n){"use strict";Boolean,Boolean,Boolean;var i={name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("table",{staticClass:"vux-table",class:{"vux-table-bordered":this.fullBordered,"vux-table-no-cell-bordered":!this.cellBordered,"vux-table-no-content-bordered":!this.contentBordered}},[this._t("default")],2)},staticRenderFns:[]};var o=n("VU/8")(i,r,!1,function(t){n("cjn6")},null,null);e.a=o.exports}});
//# sourceMappingURL=0.5df1c03c4dde92b390a1.js.map