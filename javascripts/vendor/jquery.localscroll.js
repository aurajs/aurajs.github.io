/**
 * jQuery.LocalScroll
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 *
 * @projectDescription Animated scrolling navigation, using anchors.
 * http://flesler.blogspot.com/2007/10/jquerylocalscroll-10.html
 * @author Ariel Flesler
 * @version 1.2.7
 *
 * @id jQuery.fn.localScroll
 * @param {Object} settings Hash of settings, it is passed in to jQuery.ScrollTo, none is required.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @example $('ul.links').localScroll();
 *
 * @example $('ul.links').localScroll({ filter:'.animated', duration:400, axis:'x' });
 *
 * @example $.localScroll({ target:'#pane', axis:'xy', queue:true, event:'mouseover' });
 *
 * Notes:
 *	- The plugin requires jQuery.ScrollTo.
 *	- The hash of settings, is passed to jQuery.ScrollTo, so the settings are valid for that plugin as well.
 *	- jQuery.localScroll can be used if the desired links, are all over the document, it accepts the same settings.
 *  - If the setting 'lazy' is set to true, then the binding will still work for later added anchors.
  *	- If onBefore returns false, the event is ignored.
 **/
(function(e){function r(t,n,r){var i=n.hash.slice(1),s=document.getElementById(i)||document.getElementsByName(i)[0];if(!s)return;t&&t.preventDefault();var o=e(r.target);if(r.lock&&o.is(":animated")||r.onBefore&&r.onBefore.call(r,t,s,o)===!1)return;r.stop&&o.stop(!0);if(r.hash){var u=s.id==i?"id":"name",a=e("<a> </a>").attr(u,i).css({position:"absolute",top:e(window).scrollTop(),left:e(window).scrollLeft()});s[u]="",e("body").prepend(a),location=n.hash,a.remove(),s[u]=i}o.scrollTo(s,r).trigger("notify.serialScroll",[s])}var t=location.href.replace(/#.*/,""),n=e.localScroll=function(t){e("body").localScroll(t)};n.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window,reset:!0},n.hash=function(t){if(location.hash){t=e.extend({},n.defaults,t),t.hash=!1;if(t.reset){var i=t.duration;delete t.duration,e(t.target).scrollTo(0,t),t.duration=i}r(0,location,t)}},e.fn.localScroll=function(i){function s(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==t&&(!i.filter||e(this).is(i.filter))}return i=e.extend({},n.defaults,i),i.lazy?this.bind(i.event,function(t){var n=e([t.target,t.target.parentNode]).filter(s)[0];n&&r(t,n,i)}):this.find("a,area").filter(s).bind(i.event,function(e){r(e,this,i)}).end().end()}})(jQuery);