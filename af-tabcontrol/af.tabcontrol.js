/*
 * @copyright: 2013 Intel
 * @description:  A tab control script to let users toggle divs.
 */
;(function($,window){
	"use strict";
	var cache = [];
	var objId = function(obj) {
		if(!obj.afAccordionID) obj.afAccordionID = $.uuid();
		return obj.afAccordionID;
	};
	$.fn.tabcontrol=function(opts){
		opts=opts||{};
		if(this.length===0) return;
		var tmp, id;
		for(var i = 0; i < this.length; i++) {
			//cache system
			id = objId(this[i]);
			if(!cache[id]) {
				if(!opts) opts = {};
				tmp = new Tabcontrol(this[i], opts);
				cache[id] = tmp;
			} else {
				tmp = cache[id];
			}
		}
		return this.length == 1 ? tmp : this;
	};

	function Tabcontrol(el,opts){
		$(el).one('destroy', function(e){
           var id = el.afAccordionID;
           if(cache[id]) delete cache[id];
           e.stopPropagation();
           $el.off("click","li");
        });
        this.el=el;
		var $el=$(el);
		var $tabs=$el.find(".tabs");
        $tabs.on("click","li",function(e){
			e.preventDefault();
			var $content=$el.find(".tabs-content");
			$el.find(".tabs a").removeClass("pressed");
			$(e.target).addClass("pressed");
			$content.find("li").removeClass("active");
			$content.find(e.target.hash).addClass("active");
        });
        //Check if there is a default
        var $selTab=$el.find(".tabs-content li.active");
        if($selTab.length>0){
			$el.find("a[href='#"+$selTab.prop("id")+"']").addClass("pressed");
        }
    }
})(af,window);