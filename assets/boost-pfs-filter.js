/** VERSION: 0.0.3 Please do not delete this line. Thank you! **/
if(typeof lazySizes !== 'function' && typeof lazySizes !== 'object'){
  /*! lazysizes - v4.1.8 */
  !function (a, b) { var c = b(a, a.document); a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c) }(window, function (a, b) { "use strict"; if (b.getElementsByClassName) { var c, d, e = b.documentElement, f = a.Date, g = a.HTMLPictureElement, h = "addEventListener", i = "getAttribute", j = a[h], k = a.setTimeout, l = a.requestAnimationFrame || k, m = a.requestIdleCallback, n = /^picture$/i, o = ["load", "error", "lazyincluded", "_lazyloaded"], p = {}, q = Array.prototype.forEach, r = function (a, b) { return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b] }, s = function (a, b) { r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b) }, t = function (a, b) { var c; (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " ")) }, u = function (a, b, c) { var d = c ? h : "removeEventListener"; c && u(a, b), o.forEach(function (c) { a[d](c, b) }) }, v = function (a, d, e, f, g) { var h = b.createEvent("Event"); return e || (e = {}), e.instance = c, h.initEvent(d, !f, !g), h.detail = e, a.dispatchEvent(h), h }, w = function (b, c) { var e; !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({ reevaluate: !0, elements: [b] })) : c && c.src && (b.src = c.src) }, x = function (a, b) { return (getComputedStyle(a, null) || {})[b] }, y = function (a, b, c) { for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;)c = b.offsetWidth, b = b.parentNode; return c }, z = function () { var a, c, d = [], e = [], f = d, g = function () { var b = f; for (f = d.length ? e : d, a = !0, c = !1; b.length;)b.shift()(); a = !1 }, h = function (d, e) { a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g))) }; return h._lsFlush = g, h }(), A = function (a, b) { return b ? function () { z(a) } : function () { var b = this, c = arguments; z(function () { a.apply(b, c) }) } }, B = function (a) { var b, c = 0, e = d.throttleDelay, g = d.ricTimeout, h = function () { b = !1, c = f.now(), a() }, i = m && g > 49 ? function () { m(h, { timeout: g }), g !== d.ricTimeout && (g = d.ricTimeout) } : A(function () { k(h) }, !0); return function (a) { var d; (a = !0 === a) && (g = 33), b || (b = !0, d = e - (f.now() - c), d < 0 && (d = 0), a || d < 9 ? i() : k(i, d)) } }, C = function (a) { var b, c, d = 99, e = function () { b = null, a() }, g = function () { var a = f.now() - c; a < d ? k(g, d - a) : (m || e)(e) }; return function () { c = f.now(), b || (b = k(g, d)) } }; !function () { var b, c = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 }; d = a.lazySizesConfig || a.lazysizesConfig || {}; for (b in c) b in d || (d[b] = c[b]); a.lazySizesConfig = d, k(function () { d.init && F() }) }(); var D = function () { var g, l, m, o, p, y, D, F, G, H, I, J, K = /^img$/i, L = /^iframe$/i, M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent), N = 0, O = 0, P = 0, Q = -1, R = function (a) { P-- , (!a || P < 0 || !a.target) && (P = 0) }, S = function (a) { return null == J && (J = "hidden" == x(b.body, "visibility")), J || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility") }, T = function (a, c) { var d, f = a, g = S(a); for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;)(g = (x(f, "opacity") || 1) > 0) && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1); return g }, U = function () { var a, f, h, j, k, m, n, p, q, r, s, t, u = c.elements; if ((o = d.loadMode) && P < 8 && (a = u.length)) { for (f = 0, Q++; f < a; f++)if (u[f] && !u[f]._lazyRace) if (!M || c.prematureUnveil && c.prematureUnveil(u[f])) aa(u[f]); else if ((p = u[f][i]("data-expand")) && (m = 1 * p) || (m = O), r || (r = !d.expand || d.expand < 1 ? e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370 : d.expand, c._defEx = r, s = r * d.expFactor, t = d.hFac, J = null, O < s && P < 1 && Q > 2 && o > 2 && !b.hidden ? (O = s, Q = 0) : O = o > 1 && Q > 1 && P < 6 ? r : N), q !== m && (y = innerWidth + m * t, D = innerHeight + m, n = -1 * m, q = m), h = u[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * t && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || S(u[f])) && (l && P < 3 && !p && (o < 3 || Q < 4) || T(u[f], m))) { if (aa(u[f]), k = !0, P > 9) break } else !k && l && !j && P < 4 && Q < 4 && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != u[f][i](d.sizesAttr))) && (j = g[0] || u[f]); j && !k && aa(j) } }, V = B(U), W = function (a) { var b = a.target; if (b._lazyCache) return void delete b._lazyCache; R(a), s(b, d.loadedClass), t(b, d.loadingClass), u(b, Y), v(b, "lazyloaded") }, X = A(W), Y = function (a) { X({ target: a.target }) }, Z = function (a, b) { try { a.contentWindow.location.replace(b) } catch (c) { a.src = b } }, $ = function (a) { var b, c = a[i](d.srcsetAttr); (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c) }, _ = A(function (a, b, c, e, f) { var g, h, j, l, o, p; (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = { target: a }, s(a, d.loadingClass), p && (clearTimeout(m), m = k(R, 2500), u(a, Y, !0)), l && q.call(j.getElementsByTagName("source"), $), h ? a.setAttribute("srcset", h) : g && !l && (L.test(a.nodeName) ? Z(a, g) : a.src = g), f && (h || l) && w(a, { src: g })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () { var b = a.complete && a.naturalWidth > 1; p && !b || (b && s(a, "ls-is-cached"), W(o), a._lazyCache = !0, k(function () { "_lazyCache" in a && delete a._lazyCache }, 9)), "lazy" == a.loading && P-- }, !0) }), aa = function (a) { if (!a._lazyRace) { var b, c = K.test(a.nodeName), e = c && (a[i](d.sizesAttr) || a[i]("sizes")), f = "auto" == e; (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, P++ , _(a, b, f, e, c)) } }, ba = C(function () { d.loadMode = 3, V() }), ca = function () { 3 == d.loadMode && (d.loadMode = 2), ba() }, da = function () { if (!l) { if (f.now() - p < 999) return void k(da, 999); l = !0, d.loadMode = 3, V(), j("scroll", ca, !0) } }; return { _: function () { p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), j("scroll", V, !0), j("resize", V, !0), a.MutationObserver ? new MutationObserver(V).observe(e, { childList: !0, subtree: !0, attributes: !0 }) : (e[h]("DOMNodeInserted", V, !0), e[h]("DOMAttrModified", V, !0), setInterval(V, 999)), j("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) { b[h](a, V, !0) }), /d$|^c/.test(b.readyState) ? da() : (j("load", da), b[h]("DOMContentLoaded", V), k(da, 2e4)), c.elements.length ? (U(), z._lsFlush()) : V() }, checkElems: V, unveil: aa, _aLSL: ca } }(), E = function () { var a, c = A(function (a, b, c, d) { var e, f, g; if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++)e[f].setAttribute("sizes", d); c.detail.dataAttr || w(a, c.detail) }), e = function (a, b, d) { var e, f = a.parentNode; f && (d = y(a, f, d), e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b }), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d)) }, f = function () { var b, c = a.length; if (c) for (b = 0; b < c; b++)e(a[b]) }, g = C(f); return { _: function () { a = b.getElementsByClassName(d.autosizesClass), j("resize", g) }, checkElems: g, updateElem: e } }(), F = function () { F.i || (F.i = !0, E._(), D._()) }; return c = { cfg: d, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z } } });
  /*! ls.rias.min.ks - v4.1.8 */
  !function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; function d(b, c) { var d, e, f, g, h = a.getComputedStyle(b); e = b.parentNode, g = { isPicture: !(!e || !m.test(e.nodeName || "")) }, f = function (a, c) { var d = b.getAttribute("data-" + a); if (!d) { var e = h.getPropertyValue("--ls-" + a); e && (d = e.trim()) } if (d) { if ("true" == d) d = !0; else if ("false" == d) d = !1; else if (l.test(d)) d = parseFloat(d); else if ("function" == typeof j[a]) d = j[a](b, d); else if (q.test(d)) try { d = JSON.parse(d) } catch (a) { } g[a] = d } else a in j && "function" != typeof j[a] ? g[a] = j[a] : c && "function" == typeof j[a] && (g[a] = j[a](b, d)) }; for (d in j) f(d); return c.replace(p, function (a, b) { b in g || f(b, !0) }), g } function e(a, b) { var c = [], d = function (a, c) { return k[typeof b[c]] ? b[c] : a }; return c.srcset = [], b.absUrl && (s.setAttribute("href", a), a = s.href), a = ((b.prefix || "") + a + (b.postfix || "")).replace(p, d), b.widths.forEach(function (d) { var e = b.widthmap[d] || d, f = b.aspectratio || b.ratio, g = !b.aspectratio && j.traditionalRatio, h = { u: a.replace(n, e).replace(o, f ? g ? Math.round(d * f) : Math.round(d / f) : ""), w: d }; c.push(h), c.srcset.push(h.c = h.u + " " + d + "w") }), c } function f(a, c, d) { var f = 0, g = 0, h = d; if (a) { if ("container" === c.ratio) { for (f = h.scrollWidth, g = h.scrollHeight; !(f && g || h === b);)h = h.parentNode, f = h.scrollWidth, g = h.scrollHeight; f && g && (c.ratio = g / f) } a = e(a, c), a.isPicture = c.isPicture, u && "IMG" == d.nodeName.toUpperCase() ? d.removeAttribute(i.srcsetAttr) : d.setAttribute(i.srcsetAttr, a.srcset.join(", ")), Object.defineProperty(d, "_lazyrias", { value: a, writable: !0 }) } } function g(a, b) { var e = d(a, b); return j.modifyOptions.call(a, { target: a, details: e, detail: e }), c.fire(a, "lazyriasmodifyoptions", e), e } function h(a) { return a.getAttribute(a.getAttribute("data-srcattr") || j.srcAttr) || a.getAttribute(i.srcsetAttr) || a.getAttribute(i.srcAttr) || a.getAttribute("data-pfsrcset") || "" } var i, j, k = { string: 1, number: 1 }, l = /^\-*\+*\d+\.*\d*$/, m = /^picture$/i, n = /\s*\{\s*width\s*\}\s*/i, o = /\s*\{\s*height\s*\}\s*/i, p = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi, q = /^\[.*\]|\{.*\}$/, r = /^(?:auto|\d+(px)?)$/, s = b.createElement("a"), t = b.createElement("img"), u = "srcset" in t && !("sizes" in t), v = !!a.HTMLPictureElement && !u; !function () { var b, d = function () { }, e = { prefix: "", postfix: "", srcAttr: "data-src", absUrl: !1, modifyOptions: d, widthmap: {}, ratio: !1, traditionalRatio: !1, aspectratio: !1 }; i = c && c.cfg || a.lazySizesConfig, i || (i = {}, a.lazySizesConfig = i), i.supportsType || (i.supportsType = function (a) { return !a }), i.rias || (i.rias = {}), "widths" in (j = i.rias) || (j.widths = [], function (a) { for (var b, c = 0; !b || b < 3e3;)c += 5, c > 30 && (c += 1), b = 36 * c, a.push(b) }(j.widths)); for (b in e) b in j || (j[b] = e[b]) }(), addEventListener("lazybeforesizes", function (a) { if (a.detail.instance == c) { var b, d, e, k, l, m, o, p, q, s, t, u, x; if (b = a.target, a.detail.dataAttr && !a.defaultPrevented && !j.disabled && (q = b.getAttribute(i.sizesAttr) || b.getAttribute("sizes")) && r.test(q)) { if (d = h(b), e = g(b, d), t = n.test(e.prefix) || n.test(e.postfix), e.isPicture && (k = b.parentNode)) for (l = k.getElementsByTagName("source"), m = 0, o = l.length; m < o; m++)(t || n.test(p = h(l[m]))) && (f(p, e, l[m]), u = !0); t || n.test(d) ? (f(d, e, b), u = !0) : u && (x = [], x.srcset = [], x.isPicture = !0, Object.defineProperty(b, "_lazyrias", { value: x, writable: !0 })), u && (v ? b.removeAttribute(i.srcAttr) : "auto" != q && (s = { width: parseInt(q, 10) }, w({ target: b, detail: s }))) } } }, !0); var w = function () { var d = function (a, b) { return a.w - b.w }, e = function (a) { var b, c, d = a.length, e = a[d - 1], f = 0; for (f; f < d; f++)if (e = a[f], e.d = e.w / a.w, e.d >= a.d) { !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b)); break } return e }, f = function (a, b) { var d; return !a._lazyrias && c.pWS && (d = c.pWS(a.getAttribute(i.srcsetAttr || ""))).length && (Object.defineProperty(a, "_lazyrias", { value: d, writable: !0 }), b && a.parentNode && (d.isPicture = "PICTURE" == a.parentNode.nodeName.toUpperCase())), a._lazyrias }, g = function (b) { var d = a.devicePixelRatio || 1, e = c.getX && c.getX(b); return Math.min(e || d, 2.4, d) }, h = function (b, c) { var h, i, j, k, l, m; if (l = b._lazyrias, l.isPicture && a.matchMedia) for (i = 0, h = b.parentNode.getElementsByTagName("source"), j = h.length; i < j; i++)if (f(h[i]) && !h[i].getAttribute("type") && (!(k = h[i].getAttribute("media")) || (matchMedia(k) || {}).matches)) { l = h[i]._lazyrias; break } return (!l.w || l.w < c) && (l.w = c, l.d = g(b), m = e(l.sort(d))), m }, j = function (d) { if (d.detail.instance == c) { var e, g = d.target; if (!u && (a.respimage || a.picturefill || lazySizesConfig.pf)) return void b.removeEventListener("lazybeforesizes", j); ("_lazyrias" in g || d.detail.dataAttr && f(g, !0)) && (e = h(g, d.detail.width)) && e.u && g._lazyrias.cur != e.u && (g._lazyrias.cur = e.u, e.cached = !0, c.rAF(function () { g.setAttribute(i.srcAttr, e.u), g.setAttribute("src", e.u) })) } }; return v ? j = function () { } : addEventListener("lazybeforesizes", j), j }() });
}

// Fix the confict suggestion search in Debut theme
if (typeof theme !== 'undefined' && theme.hasOwnProperty('settings')) theme.settings.predictiveSearchEnabled = false;
// Override Settings
var boostPFSFilterConfig = {
general: {
  limit: boostPFSThemeConfig.custom.products_per_page,
  /* Optional */
      loadProductFirst: false,
      filterTreeMobileStyle: 'style3',
      colorVariantNames: ['color', 'colour', 'couleur', 'colore', 'farbe', '색,色', 'färg', 'farve'],
  },
};

(function() {
var onSale = false,
  soldOut = false,
  priceVaries = false,
  images = [],
  firstVariant = {},
  boostPFSImgDefaultSrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
  boostPFSRangeWidths = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048];


BoostPFS.inject(this);
boostPFSFilterConfig.general.separateRefineByFromFilter = jQ('.boost-pfs-filter-tree-h').length > 0 ? true : false;
  var colorVariantName = Settings.getSettingValue('custom.color_variant_name');
  if (colorVariantName) boostPFSFilterConfig.general.colorVariantNames.push(colorVariantName);

/************************** CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
function prepareShopifyData(data) {
  // Displaying price base on the policy of Shopify, have to multiple by 100
  soldOut = !data.available; // Check a product is out of stock
  onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
  priceVaries = data.price_min != data.price_max; // Check a product has many prices
  // Convert images to array
  images = data.images_info;
  // Get First Variant (selected_or_first_available_variant)
  firstVariant = data['variants'][0];
  if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
    var paramVariant = data.variants.filter(function(e) {
      return e.id == Utils.getParam('variant');
    });
    if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
  } else {
    for (var i = 0; i < data['variants'].length; i++) {
      if (data['variants'][i].available) {
        firstVariant = data['variants'][i];
        break;
      }
    }
  }
  return data;
}

/************************** END CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
/************************** BUILD PRODUCT LIST **************************/
// Build Product Grid Item
ProductGridItem.prototype.compileTemplate = function(data) {
  if (!data) data = this.data;
  // Customize API data to get the Shopify data
  data = prepareShopifyData(data);

  // Get Template
  var itemHtml = boostPFSTemplate.productGridItemHtml;


  // Add Review
  if (typeof Integration === 'undefined' ||
    (typeof Integration != 'undefined' &&
      typeof Integration.hascompileTemplate == 'function' &&
      !Integration.hascompileTemplate('reviews'))) {
    itemHtml = itemHtml.replace(/{{itemReviews}}/g, '');
  }
    
     // Add Actions
  itemHtml = itemHtml.replace(/{{itemActions}}/g, buildActions(data));
    
      // Add Labels
      itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));
    
      // Add Images
      itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImages(data));
    
      // Add Swatches
      itemHtml = itemHtml.replace(/{{itemSwatches}}/g, buildSwatches(data));      

  // Add Vendor
  itemHtml = itemHtml.replace(/{{itemVendor}}/g, buildVendor(data));
    
      // Add Price
  itemHtml = itemHtml.replace(/{{itemPrice}}/g, buildPrice(data));


  // Add main attribute (Always put at the end of this function)
  itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
  itemHtml = itemHtml.replace(/{{variantId}}/g, firstVariant.id);      
  itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
  itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
  itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));
  return itemHtml;
};


/************************** END BUILD PRODUCT LIST **************************/
/************************** BUILD PRODUCT ITEM ELEMENTS **************************/

  function buildActions(data) {
    if (!Settings.getSettingValue('custom.quick_add_enable') && !Settings.getSettingValue('custom.quick_shop_enable')) return ''
    
    var html = '<div class="grid-product__actions">';
    
    if (Settings.getSettingValue('custom.quick_shop_enable')) {
      html += '<button class="btn btn--circle btn--icon quick-product__btn quick-product__btn--not-ready js-modal-open-quick-modal-{{itemId}} small--hide" title="' + Labels.quick_shop + '" tabindex="-1" data-handle="{{itemHandle}}">';
      html += '	<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-search" viewBox="0 0 64 64"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:2px}</style></defs><path class="cls-1" d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"/></svg>';
      html += '	<span class="icon__fallback-text">' + Labels.quick_shop + '</span>';
      html += '</button>';
    }
    
    if (Settings.getSettingValue('custom.quick_add_enable') && data.available) {
      if (data.variants.length === 1) {
        html += '<button type="button" class="text-link quick-add-btn js-quick-add-btn"	title="' + Labels.add_to_cart + '" tabindex="-1" data-id="{{variantId}}">';
        html += '	<span class="btn btn--circle btn--icon">';
        html += ' <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" viewBox="0 0 64 64"><path class="cls-1" d="M32 9v46m23-23H9"/></svg>';
        html += ' <span class="icon__fallback-text">' + Labels.add_to_cart + '</span>';
        html += ' </span>';
        html += '</button>';
      } else {
        html += '<button type="button" class="text-link quick-add-btn js-quick-add-form js-modal-open-quick-add" title="' + Labels.add_to_cart + '" tabindex="-1">';
        html += '	<span class="btn btn--circle btn--icon">';
        html += '	<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" viewBox="0 0 64 64"><path class="cls-1" d="M32 9v46m23-23H9"/></svg>';
        html += '	<span class="icon__fallback-text">' + Labels.add_to_cart +'</span>';
        html += '	</span>';
        html += '</button>';
      }
    }
    
    html += '</div>';
    
    return html;
  }

  function buildLabels(data) {
    var tags = data.tags.filter(function(tag) { return tag.indexOf('_label_') === 0; });
    var tagsHtml = tags.map(function(tag) { 
      var value = tag.replace('_label_', '');
      
      return '<div class="grid-product__tag grid-product__tag--custom">' +
              value +
             '</div>';
    }).join(' ');
    
    if (!data.available) {
      tagsHtml += '<div class="grid-product__tag grid-product__tag--sold-out">' + Labels.sold_out + '</div>'
    } else if (onSale) {
      tagsHtml += '<div class="grid-product__tag grid-product__tag--sale">' + Labels.sale + '</div>'
    }
    
    return tagsHtml;
  }

  function buildImages(data) {
    var fixedAspectRatio = Settings.getSettingValue('custom.product_grid_image_size') !== 'natural';
    var imageFill = Settings.getSettingValue('custom.product_grid_image_fill');
    var imageSize = Settings.getSettingValue('custom.product_grid_image_size');
    var aspectRatio = images.length > 0 ? images[0]['width'] / images[0]['height'] : '';
    var paddingBottom = images.length > 0 ? 100 / aspectRatio : '100';
    var imgAlt = images.length > 0 && images[0].alt ? images[0].alt : '{{itemTitle}}';      
    
    var html = '';
    if (fixedAspectRatio) {
      html = '<div class="grid__image-ratio grid__image-ratio--{{imgSize}}">';
      html += '	<img class="lazyload{{imgFill}}"';        
    } else {
      html = '<div  style="height: 0; padding-bottom: {{paddingBottom}}%;">';
      html += '	<img class="grid-product__image lazyload"';
    }
    html += '		data-src="{{imgUrl}}"';
    html += '		data-widths="[160, 200, 280, 360, 540, 720, 900]"';
    html += '		data-aspectratio="{{aspectRatio}}"';
    html += '		data-sizes="auto"';
    html += '		alt="{{imgAlt}}">';
    html += '	<noscript>';
    html += '		<img class="grid-product__image lazyloaded"';
    html += '			src="{{imgUrl400}}"';
    html += '			alt="{{imgAlt}}">';
    html += '	</noscript>';
    html += '</div>';   
    
    html = html.replace(/{{imgSize}}/g, imageSize);
    html = html.replace(/{{imgFill}}/g, !imageFill ? ' grid__image-contain' : '');      
    html = html.replace(/{{paddingBottom}}/g, paddingBottom);            
    html = html.replace(/{{imgUrl}}/g, Utils.getFeaturedImage(images, '{width}x'));                  
    html = html.replace(/{{aspectRatio}}/g, aspectRatio); 
    html = html.replace(/{{imgAlt}}/g, imgAlt);       
    html = html.replace(/{{imgUrl400}}/g, Utils.getFeaturedImage(images, '400x'));             
    
    if (Settings.getSettingValue('custom.product_hover_image') && images.length > 1) {
      aspectRatio = images[1]['width'] / images[0]['height'];
      imgAlt = images[1].alt ? images[1].alt : '{{itemTitle}}';          

      html += '<div class="grid-product__secondary-image small--hide">';
      html += '	<img class="lazyload"';
      html += '    	data-src="{{imgUrl}}"';
      html += '        data-widths="[360, 540, 720, 1000]"';
      html += '        data-aspectratio="{{aspectRatio}}"';
      html += '        data-sizes="auto"';
      html += '        alt="{{imgAlt}}">';
      html += '</div>';
      
      html = html.replace(/{{imgUrl}}/g, Utils.optimizeImage(images[1].src, '{width}x')); 
      html = html.replace(/{{aspectRatio}}/g, aspectRatio);         
      html = html.replace(/{{imgAlt}}/g, imgAlt); 
    }
    
    if (Settings.getSettingValue('custom.enable_swatches')) {
      var colorIndex = data.options_with_values.findIndex(function(opt) { return boostPFSFilterConfig.general.colorVariantNames.indexOf(opt.name) > -1; });
      if (colorIndex > -1) {
        var colors = [];
        
        for (var variant of data.variants) {
          if (!variant.image) continue;
          
          var color = variant['option' + (colorIndex + 1)];
          if (colors.indexOf(color) > -1) continue;
          colors.push(color);
          
          
          html += '<div class="grid-product__color-image grid-product__color-image--'+ variant.id + '"></div>';
        }
      }
    }
    
    return html;
  }

  function buildSwatches(data) {
    if (!Settings.getSettingValue('custom.enable_swatches')) return ''
    var colorVariantName = Settings.getSettingValue('custom.color_variant_name');
    var swatchFileExtension = 'png';
    var colorCount = 0;
    var maxColorsShow = 4;
    var moreThanMax = false;

    var html = '';

    var colorIndex = data.options_with_values.findIndex(function(opt) { return boostPFSFilterConfig.general.colorVariantNames.indexOf(opt.name) > -1; });
    if (colorIndex === -1) return ''

    var colors = [];

    html = '<div class="grid-product__colors">';

    for (var variant of data.variants) {
      var color = variant['option' + (colorIndex + 1)];
      if (colors.indexOf(color) > -1) continue;

      colors.push(color);
      colorCount++;

      if (colorCount > maxColorsShow) break;

      var value = Utils.slugify(color);
      var colorFallback = color.toLowerCase();
      var colorImage =  Utils.optimizeImage(variant.image, '40x');

      if (colorFallback.indexOf(' ') > -1) {
        var tmp = colorFallback.split(' ');
        colorFallback = tmp[tmp.length - 1];          
      }

      html += '<span class="color-swatch color-swatch--small color-swatch--' + value + (variant.image ? ' color-swatch--with-image' : '') + '"';
      html += '      data-url="{{itemUrl}}?variant=' + variant.id + '"';
      if (variant.image) {
        html += '    data-variant-id="' + variant.id + '"';
        html += '    data-variant-image="' + Utils.optimizeImage(variant.image, '400x') + '"';          
      }
      html += '      style="background-color: ' + colorFallback + '; background-image: url(' + colorImage + ');">';
      html += '   <span class="visually-hidden">' + color + '</span>';
      html += '</span>'
    }

    if (colorCount > maxColorsShow) {
      var left = data.options_with_values[colorIndex].values.length - colorCount - 1;
      html += '<small class="color-swatch__more">+' + left + '</small>';
    }

    html += '</div>';

    return html;
  }

  function buildVendor(data) {
  if (!Settings.getSettingValue('custom.vendor_enable')) return ''

  return boostPFSTemplate.vendorHtml;
  }

  function buildPrice(data) {
      var price = Utils.formatMoney(data.price_min);
      var formattedPrice = formatPrice(price);
      var comparePrice = Utils.formatMoney(data.compare_at_price_min);
      var formattedComparePrice = formatPrice(comparePrice);
    
  var html = ' <div class="grid-product__price">';
    
      if (priceVaries) {
        html += '<span class="grid-product__price--current">';
    html += '   <span aria-hidden="true" class="grid-product__price--from">' + Labels.from.replace('{{ price }}', formattedPrice) + '</span>';
    html += '   <span class="visually-hidden">' + Labels.from.replace('{{ price }}', price) + '</span>';
        html += '</span>';
      } else {
        if (onSale) {
          html += '<span class="visually-hidden">' + Labels.sale_price + '</span>'
        }
    html += '<span class="grid-product__price--current">';
        html += '<span aria-hidden="true">' +  formattedPrice + '</span>';
        html += '<span class="visually-hidden">' + price + '</span>';          
        html += '</span>';
      }
    
      if (onSale) {
        html += '<span class="visually-hidden">' + Labels.regular_price + '</span>';
        html += '<span class="grid-product__price--original">';         
        html += '<span aria-hidden="true">' +  formattedComparePrice + '</span>';
        html += '<span class="visually-hidden">' + comparePrice + '</span>';             
        html += '</span>';
      
    
        if (Settings.getSettingValue('custom.product_save_amount')) {
          var savedAmount = ''

          if (Settings.getSettingValue('custom.product_save_type') === 'dollar') {
            savedAmount = Utils.formatMoney(data.compare_at_price_min - data.price_min, Globals.money_format, true);           
          } else {
            savedAmount = data.percent_sale_min + '%';
          }
          
    html += '<span class="grid-product__price--savings">';
          html += Labels.save_html.replace('{{ saved_amount }}', savedAmount);
          html += '</span>';
        }
      }
    
      html += '</div>';
    
      return html;
  }

  function formatPrice(price) {
    if (!Settings.getSettingValue('custom.superscript_decimals')) return price
    
    if (Globals.moneyFormat.indexOf('{{amount}}') > -1 || Globals.moneyFormat.indexOf('{{ amount }}') > -1) {
      price = price.replace('.', '<sup>') + '<sup>';
    } else if (Globals.moneyFormat.indexOf('{{amount_with_comma_separator}}') > -1 || Globals.moneyFormat.indexOf('{{ amount_with_comma_separator }}') > -1) {
      price = price.replace(',', '<sup>') + '<sup>';        
    }
    
    return price;
  }

/************************** END BUILD PRODUCT ITEM ELEMENTS **************************/
/************************** BUILD TOOLBAR **************************/
// Build Pagination
ProductPaginationDefault.prototype.compileTemplate = function(totalProduct) {
  if (!totalProduct) totalProduct = this.totalProduct;
  // Get page info
  var currentPage = parseInt(Globals.queryParams.page);
  var totalPage = Math.ceil(totalProduct / Globals.queryParams.limit);
  // If it has only one page, clear Pagination
  if (totalPage <= 1) {
    return '';
  }

  var paginationHtml = boostPFSTemplate.paginateHtml;
  // Build Previous
  var previousHtml = (currentPage > 1) ? boostPFSTemplate.previousActiveHtml : boostPFSTemplate.previousDisabledHtml;
  previousHtml = previousHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage - 1));
  paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);
  // Build Next
  var nextHtml = (currentPage < totalPage) ? boostPFSTemplate.nextActiveHtml : boostPFSTemplate.nextDisabledHtml;
  nextHtml = nextHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage + 1));
  paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);
  // Create page items array
  var beforeCurrentPageArr = [];
  for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
    beforeCurrentPageArr.unshift(iBefore);
  }
  if (currentPage - 4 > 0) {
    beforeCurrentPageArr.unshift('...');
  }
  if (currentPage - 4 >= 0) {
    beforeCurrentPageArr.unshift(1);
  }
  beforeCurrentPageArr.push(currentPage);
  var afterCurrentPageArr = [];
  for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
    afterCurrentPageArr.push(iAfter);
  }
  if (currentPage + 3 < totalPage) {
    afterCurrentPageArr.push('...');
  }
  if (currentPage + 3 <= totalPage) {
    afterCurrentPageArr.push(totalPage);
  }
  // Build page items
  var pageItemsHtml = '';
  var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
  for (var iPage = 0; iPage < pageArr.length; iPage++) {
    if (pageArr[iPage] == '...') {
      pageItemsHtml += boostPFSTemplate.pageItemRemainHtml;
    } else {
      pageItemsHtml += (pageArr[iPage] == currentPage) ? boostPFSTemplate.pageItemSelectedHtml : boostPFSTemplate.pageItemHtml;
    }
    pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
    pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, pageArr[iPage]));
  }
  paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);
  return paginationHtml;
};

  // Build Sorting
  ProductSorting.prototype.compileTemplate = function() {
    var html = '';
    if (boostPFSTemplate.hasOwnProperty('sortingHtml')) {
      var sortingArr = Utils.getSortingList();
      if (sortingArr) {        
        // Build content
        if (Utils.isMobile()) {
		  var sortingItemsHtml = '';
          var active = '';
          for (var k in sortingArr) {
            active = '';
            if (k === Globals.queryParams.sort) active = 'selected';
            
            var itemHtml= boostPFSTemplate.sortingMobileItemHtml;
            itemHtml = itemHtml.replace(/{{active}}/g, active);
            itemHtml = itemHtml.replace(/{{sort}}/g, k);                        
            itemHtml = itemHtml.replace(/{{label}}/g, sortingArr[k]);           
            
            sortingItemsHtml += itemHtml;
          }
          html = boostPFSTemplate.sortingMobileHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
        } else {
          var sortingItemsHtml = '';
          for (var k in sortingArr) {
            sortingItemsHtml += '<option value="' + k + '">' + sortingArr[k] + '</option>';
          }
          html = boostPFSTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
        }
      }
    }
    return html;
  };
  
  ProductSorting.prototype.render = function() {
    if (Utils.isMobile()) jQ('.boost-pfs-filter-tree ' + Selector.topSorting).replaceWith(this.compileTemplate());
    else jQ(Selector.topSorting).html(this.compileTemplate());
    var $selectInput = jQ(Selector.topSorting + ' select');
    if ($selectInput.length) {
      $selectInput.val(Globals.queryParams.sort);
    }
  }

	// Build Sorting event
	ProductSorting.prototype.bindEvents = function() {
		jQ(Selector.topSorting + ' select').change(function(event) {
			// Append "sort" param to url
			// Used to Scroll to the previous position after returning from Product page
			FilterApi.setParam('sort', jQ(this).val());
			FilterApi.setParam('page', 1);
			FilterApi.applyFilter('sort');
		})
        
        jQ(Selector.topSorting + ' [data-sort]').on('click', function(event) {
			// Append "sort" param to url
			// Used to Scroll to the previous position after returning from Product page
			FilterApi.setParam('sort', jQ(this).data('sort'));
			FilterApi.setParam('page', 1);
			FilterApi.applyFilter('sort');
		})
        
        jQ(Selector.topSorting + ' .boost-pfs-filter-option-title-heading').on('click', function(event) {
           jQ(this).parents(Selector.topSorting).toggleClass('boost-pfs-filter-option-collapsed');
        });
	};

/************************** END BUILD TOOLBAR **************************/

// Add additional feature for product list, used commonly in customizing product list
ProductList.prototype.afterRender = function(data) {
  if (!data) data = this.data;

  // Intergrate Review Shopify
  if (window.SPR &&
    typeof window.SPR.initDomEls == 'function' &&
    typeof window.SPR.loadBadges == 'function' &&
    boostPFSThemeConfig.custom.show_product_review) {
    window.SPR.initDomEls();
    window.SPR.loadBadges();
  }
    
    
      if (Settings.getSettingValue('custom.quick_shop_enable')) {
        var count = 0;
        
        // Call function to get extra product html by ajax
        this.buildExtrasProductListByAjax(data, 'boost-quickshop', function(results){
          results.forEach(function(result){
           // Append the custom html to product item
           jQ('.boost-custom-modal[data-product-id="'+ result.id + '"]').empty().html(result.quickshop);
           jQ('.grid-product[data-product-id="'+ result.id + '"] .quick-product__btn').removeClass('quick-product__btn--not-ready');
          });
          
          count += results.length;
          
          if (count === data.length) buildTheme();
        });
      } else {    
	      buildTheme();
      }
};

// Build additional elements
Filter.prototype.afterRender = function(data) {
  if (!data) data = this.data;

  var totalProduct = data.total_product + '<span> ' + boostPFSThemeConfig.label.items_with_count_other + '</span>';
  if (data.total_product == 1) {
    totalProduct = data.total_product + '<span> ' + boostPFSThemeConfig.label.items_with_count_one + '</span>';
  }
  jQ('.boost-pfs-filter-total-product').html(totalProduct);

  jQ('body').find('.boost-pfs-filter-skeleton-button').remove();

  // Prevent double tap on iOS
  var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isiOS) {
    Utils.isMobile() && jQ(".boost-pfs-filter-product-item").find("a").on("touchstart", function() {
      isScrolling = !1
    }).on("touchmove", function() {
      isScrolling = !0
    }).on("touchend", function() {
      isScrolling || (window.location = jQ(this).attr("href"))
    });
  }
  
};
  


/* Prevent conflict with theme vendor js */
Array.prototype.insert = function(a, b) {}	
  
  
  function buildTheme() {
    theme.sections.register('collection-template', theme.Collection);

    theme.initGlobals();
    theme.rteInit();    
    
    if (Utils.isSearchPage()) {
      var searchGrid = document.querySelector('.search-grid');
      if (searchGrid) {
        var searchProducts = searchGrid.querySelectorAll('.grid-product');
        if (searchProducts.length) {
          new theme.QuickAdd(searchGrid);
          new theme.QuickShop(searchGrid);
        }
      }        
    }
  }

  FilterMobileButton.prototype.afterRender = function() {
    var self = this;
    
    jQ('.collection-filter__btn').off('click').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      self.onClick.call(self);
      setTimeout(function() {
        jQ('.collection-filter__btn').removeClass('is-active');
          jQ('html').removeClass('lock-scroll');
      }, 100);
    });
  }
  
  FilterTree.prototype.afterRender = function() {
    if (Utils.isMobile() && this.$element.find(Selector.topSorting).length === 0) {
      this.$element.find('.boost-pfs-filter-options-wrapper').prepend('<div class="boost-pfs-filter-top-sorting"></div>');
      
      // Add Sorting component
      this.sorting = new ProductSorting();
      this.addComponent(this.sorting);
      
      var sorting = this.sorting;
      
      setTimeout(function() { sorting.refresh(); }, 100);

    }
  }
  
})();