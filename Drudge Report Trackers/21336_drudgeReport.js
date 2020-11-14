//21336_drudgeReport-73 21336 6f23671
! function a(d, o, s) {
    function p(t, e) {
        if (!o[t]) {
            if (!d[t]) {
                var r = "function" == typeof require && require;
                if (!e && r) return r(t, !0);
                if (u) return u(t, !0);
                var n = new Error("Cannot find module '" + t + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            var i = o[t] = {
                exports: {}
            };
            d[t][0].call(i.exports, function(e) {
                return p(d[t][1][e] || e)
            }, i, i.exports, a, d, o, s)
        }
        return o[t].exports
    }
    for (var u = "function" == typeof require && require, e = 0; e < s.length; e++) p(s[e]);
    return p
}({
    1: [function(e, t, r) {
        var n = window.pbjs = window.pbjs || {};
        n.que = n.que || [], n.que.unshift(function() {
            n.bidderSettings = {
                beachfront: {
                    bidCpmAdjustment: function(e, t) {
                        return console.log("Adjusting bid for: " + t.bidderCode), .85 * e
                    }
                }
            };
            var e = n.getConfig().userSync;
            e.userIds[0].storage.type = "html5", n.setConfig(e)
        }), n.que.unshift(function() {
            var e = n.getConfig("rubicon") || {};
            e.int_type = "dmpbjs", e.wrapperName = "21336_drudgeReport_prod", n.setConfig({
                rubicon: e
            })
        }), n.que.unshift(function() {
            var e = function() {
                    if (n.rp && n.rp.hasCustomCmp) return !1;
                    if ("function" == typeof(window.__cmp || window.top.__cmp) || "function" == typeof(window.__tcfapi || window.top.__tcfapi) || window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp) return !0;
                    for (var e = window; e !== window.top;) {
                        try {
                            if (e.frames.__cmpLocator) return !0
                        } catch (e) {}
                        try {
                            if (e.frames.__tcfapiLocator) return !0
                        } catch (e) {}
                        e = e.parent
                    }
                    return !1
                }(),
                t = !(n.rp && n.rp.hasCustomUspCmp);
            e && t ? n.setConfig({
                consentManagement: {
                    gdpr: {
                        timeout: 50,
                        allowAuctionWithoutConsent: !1,
                        defaultGdprScope: !0,
                        rules: [{
                            purpose: "storage",
                            enforceVendor: !0,
                            enforcePurpose: !0
                        }, {
                            purpose: "basicAds",
                            enforceVendor: !0,
                            enforcePurpose: !0
                        }, {
                            purpose: "measurement",
                            enforceVendor: !1,
                            enforcePurpose: !1
                        }],
                        cmpApi: "iab"
                    },
                    usp: {
                        timeout: 50
                    }
                }
            }) : e ? n.setConfig({
                consentManagement: {
                    gdpr: {
                        timeout: 50,
                        allowAuctionWithoutConsent: !1,
                        defaultGdprScope: !0,
                        rules: [{
                            purpose: "storage",
                            enforceVendor: !0,
                            enforcePurpose: !0
                        }, {
                            purpose: "basicAds",
                            enforceVendor: !0,
                            enforcePurpose: !0
                        }, {
                            purpose: "measurement",
                            enforceVendor: !1,
                            enforcePurpose: !1
                        }],
                        cmpApi: "iab"
                    }
                }
            }) : t && n.setConfig({
                consentManagement: {
                    usp: {
                        timeout: 50
                    }
                }
            })
        }), n.que.unshift(function() {
            n.enableAnalytics([{
                options: {
                    endpoint: "https://prebid-a.rubiconproject.com/event",
                    accountId: 21336
                },
                provider: "rubicon"
            }])
        }), n.que.unshift(function() {
            n.rp.mtoConfigMap = {
                4834: {
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [320, 100],
                                [320, 50]
                            ]
                        }
                    }
                },
                4836: {
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ]
                        }
                    }
                },
                4838: {
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [320, 100],
                                [320, 50],
                                [300, 250]
                            ]
                        }
                    }
                },
                4840: {
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [970, 250],
                                [970, 90],
                                [728, 90],
                                [300, 250]
                            ]
                        }
                    }
                },
                4842: {
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 600],
                                [300, 250]
                            ]
                        }
                    }
                },
                4844: {
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [970, 250],
                                [970, 90],
                                [728, 90],
                                [300, 600],
                                [300, 250]
                            ]
                        }
                    }
                }
            }
        }), n.que.unshift(function() {
            n.rp.addAdunitPatterns([{
                slotPattern: "/218243714/DR-Mobile-320x100_1",
                divPattern: "div-gpt-ad-1566335835610-0",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 17253815
                    }
                }, {
                    bidder: "Conversant",
                    params: {
                        secure: 0,
                        site_id: "126272"
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 9406
                    }
                }, {
                    bidder: "emx_digital",
                    params: {
                        tagid: "78223"
                    }
                }, {
                    bidder: "openx",
                    params: {
                        unit: "540854216",
                        delDomain: "granite-cubed-d.openx.net"
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "158537"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        siteId: 280592,
                        zoneId: 1399748,
                        accountId: 21336
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: "658019"
                    }
                }, {
                    bidder: "consumable",
                    params: {
                        siteId: 2000972,
                        unitId: 10071,
                        unitName: "cnsmbl-audio-320x50-slider",
                        networkId: 9969
                    }
                }],
                mtoRevId: 4834
            }, {
                slotPattern: "/218243714/DR-Mobile-300x250_1",
                divPattern: "div-gpt-ad-1566335814247-0",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 17253857
                    }
                }, {
                    bidder: "Conversant",
                    params: {
                        secure: 0,
                        site_id: "126272"
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 9406
                    }
                }, {
                    bidder: "emx_digital",
                    params: {
                        tagid: "78224"
                    }
                }, {
                    bidder: "openx",
                    params: {
                        unit: "540854217",
                        delDomain: "granite-cubed-d.openx.net"
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "158537"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        siteId: 280592,
                        zoneId: 1399750,
                        accountId: 21336
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: "658020"
                    }
                }, {
                    bidder: "consumable",
                    params: {
                        siteId: 2000972,
                        unitId: 10072,
                        unitName: "cnsmbl-audio-300x250-slider",
                        networkId: 9969
                    }
                }],
                mtoRevId: 4836
            }, {
                slotPattern: "/218243714/DR-Mobile-300x250_2",
                divPattern: "div-gpt-ad-1566335793423-0",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 17253903
                    }
                }, {
                    bidder: "Conversant",
                    params: {
                        secure: 0,
                        site_id: "126272"
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 9406
                    }
                }, {
                    bidder: "emx_digital",
                    params: {
                        tagid: "78225"
                    }
                }, {
                    bidder: "openx",
                    params: {
                        unit: "540854218",
                        delDomain: "granite-cubed-d.openx.net"
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "158537"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        siteId: 280592,
                        zoneId: 1399752,
                        accountId: 21336
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: "658021"
                    }
                }],
                mtoRevId: 4836
            }, {
                slotPattern: "/218243714/DR-Mobile-300x250_3",
                divPattern: "div-gpt-ad-1566335769529-0",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 17253945
                    }
                }, {
                    bidder: "Conversant",
                    params: {
                        secure: 0,
                        site_id: "126272"
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 9406
                    }
                }, {
                    bidder: "emx_digital",
                    params: {
                        tagid: "78226"
                    }
                }, {
                    bidder: "openx",
                    params: {
                        unit: "540854219",
                        delDomain: "granite-cubed-d.openx.net"
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "158537"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        siteId: 280592,
                        zoneId: 1399754,
                        accountId: 21336
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: "658022"
                    }
                }],
                mtoRevId: 4836
            }, {
                slotPattern: "/218243714/DR-Mobile",
                divPattern: ".*",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 17293772
                    }
                }, {
                    bidder: "Conversant",
                    params: {
                        secure: 0,
                        site_id: "126272"
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 9406
                    }
                }, {
                    bidder: "openx",
                    params: {
                        unit: "540854220",
                        delDomain: "granite-cubed-d.openx.net"
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "158537"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        siteId: 280592,
                        zoneId: 1399756,
                        accountId: 21336
                    }
                }],
                mtoRevId: 4838
            }, {
                slotPattern: "/218243714/DR-center_1",
                divPattern: "div-gpt-ad-1564685541535-0",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 17253984
                    }
                }, {
                    bidder: "Conversant",
                    params: {
                        secure: 0,
                        site_id: "126272"
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 9406
                    }
                }, {
                    bidder: "emx_digital",
                    params: {
                        tagid: "78220"
                    }
                }, {
                    bidder: "openx",
                    params: {
                        unit: "540854221",
                        delDomain: "granite-cubed-d.openx.net"
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "158537"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        siteId: 280590,
                        zoneId: 1399740,
                        accountId: 21336
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: "658025"
                    }
                }, {
                    bidder: "consumable",
                    params: {
                        siteId: 2000972,
                        unitId: 10070,
                        unitName: "cnsmbl-audio-responsive",
                        networkId: 9969
                    }
                }],
                mtoRevId: 4840
            }, {
                slotPattern: "/218243714/DR-left_1",
                divPattern: "div-gpt-ad-1564685732534-0",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 17254026
                    }
                }, {
                    bidder: "Conversant",
                    params: {
                        secure: 0,
                        site_id: "126272"
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 9406
                    }
                }, {
                    bidder: "emx_digital",
                    params: {
                        tagid: "78221"
                    }
                }, {
                    bidder: "openx",
                    params: {
                        unit: "540854222",
                        delDomain: "granite-cubed-d.openx.net"
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "158537"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        siteId: 280590,
                        zoneId: 1399742,
                        accountId: 21336
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: "658030"
                    }
                }, {
                    bidder: "consumable",
                    params: {
                        siteId: 2000972,
                        unitId: 10069,
                        unitName: "cnsmbl-audio-300x250-slider",
                        networkId: 9969
                    }
                }],
                mtoRevId: 4836
            }, {
                slotPattern: "/218243714/DR-right_1",
                divPattern: "div-gpt-ad-1564685863820-0",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 17254059
                    }
                }, {
                    bidder: "Conversant",
                    params: {
                        secure: 0,
                        site_id: "126272"
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 9406
                    }
                }, {
                    bidder: "emx_digital",
                    params: {
                        tagid: "78222"
                    }
                }, {
                    bidder: "openx",
                    params: {
                        unit: "540854223",
                        delDomain: "granite-cubed-d.openx.net"
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "158537"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        siteId: 280590,
                        zoneId: 1399744,
                        accountId: 21336
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: "658028"
                    }
                }],
                mtoRevId: 4842
            }, {
                slotPattern: "/218243714/DR-right_300x250_1",
                divPattern: "div-gpt-ad-1567201323104-0",
                bids: [{
                    bidder: "rubicon",
                    params: {
                        siteId: 280590,
                        zoneId: 1500864,
                        accountId: 21336
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: "658029"
                    }
                }],
                mtoRevId: 4836
            }, {
                slotPattern: "/218243714/DR.*",
                divPattern: ".*",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 17293821
                    }
                }, {
                    bidder: "Conversant",
                    params: {
                        secure: 0,
                        site_id: "126272"
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 9406
                    }
                }, {
                    bidder: "openx",
                    params: {
                        unit: "540854224",
                        delDomain: "granite-cubed-d.openx.net"
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "158537"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        siteId: 280590,
                        zoneId: 1399746,
                        accountId: 21336
                    }
                }],
                mtoRevId: 4844
            }])
        }), n.que.unshift(function() {
            n.setConfig({
                mediaTypePriceGranularity: {
                    banner: "dense",
                    native: "medium",
                    "video-outstream": "dense"
                },
                userSync: {
                    userIds: [{
                        name: "pubCommonId",
                        storage: {
                            name: "pbjs_pubcommonID",
                            type: "cookie",
                            expires: 30
                        }
                    }],
                    syncDelay: 5e3,
                    syncEnabled: !0,
                    filterSettings: {
                        iframe: {
                            filter: "include",
                            bidders: "*"
                        }
                    },
                    syncsPerBidder: 3
                },
                currency: {
                    adServerCurrency: "USD"
                },
                bidderTimeout: 1e3,
                enableSendAllBids: !0,
                coppa: !1,
                rubicon: {
                    singleRequest: !0
                }
            })
        }), n.que.unshift(function() {
            e("../data/lib/hpbv2.js")(n)
        })
    }, {
        "../data/lib/hpbv2.js": 2
    }],
    2: [function(e, t, r) {
        var z = {
            "300x251": [300, 250],
            "300x252": [300, 250],
            "300x601": [300, 600],
            "300x602": [300, 600],
            "160x601": [160, 600],
            "728x91": [728, 90],
            "728x92": [728, 90],
            "970x91": [970, 90]
        };

        function _(e) {
            return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, _)
        }
        t.exports = function(c) {
            try {
                function n(e, t) {
                    if (Array.isArray(e))
                        for (var r = 0; r < e.length; r++)
                            if (t(e[r])) return e[r]
                }

                function u(e) {
                    return Array.isArray(e) && "number" == typeof e[0] && (e = [e]), e
                }

                function l() {
                    var e = c.getConfig("rubicon") || {};
                    "dmpbjs" !== e.int_type && (e.int_type = "dmpbjs", c.setConfig({
                        rubicon: e
                    }))
                }

                function f(e, t) {
                    return t ? (r = t, e.filter(function(e) {
                        return t = e, r.some(function(e) {
                            return t[0] === e[0] && t[1] === e[1]
                        });
                        var t
                    })) : e;
                    var r
                }

                function m(e, t) {
                    return e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(t)
                }

                function b(t) {
                    if (!t.mediaTypes) {
                        try {
                            t.mediaTypes = c.rp.mtoConfigMap[t.mtoRevId].mediaTypes
                        } catch (e) {
                            return P.error("Unable to resolve the mediaTypes for adUnitPattern", t, e), !1
                        }
                        delete t.mtoRevId
                    }
                    return !0
                }

                function g(o, e, s, p) {
                    return n(e, function(e) {
                        var t, r = !1,
                            n = s ? o.getAdUnitPath() : o.name,
                            i = s ? o.getSlotElementId() : "",
                            a = !e.slotPattern || e.slotPattern.test(n),
                            d = !e.divPattern || e.divPattern.test(i);
                        if ((r = a && d) && (r = b(e)), r && h) try {
                            (r = h({
                                gptSlot: o,
                                adUnitPattern: e
                            })) || P.warn("adunitPattern excluded because filtered out by custom mapping function:", e, o)
                        } catch (e) {
                            P.warn("custom mapping function error:", e)
                        }
                        if (r && m(e, "native") && !(r = function(e, t) {
                                var r = t && e.getSizes() || e.sizes;
                                if (!r) return !1;
                                for (var n = 0; n < r.length; n++) {
                                    if (t && ("function" != typeof r[n].getHeight || "function" != typeof r[n].getWidth)) return !0;
                                    if (!t && "fluid" == r[n]) return !0
                                }
                                return !1
                            }(o, s))) return P.warn("adunitPattern excluded because fluid size not found for native slot:", e, o), 0;
                        if (r) {
                            if (m(e, "banner") && (e.filteredSizes = function(e, t, r, n, i) {
                                    var a, d, o, s = i && (n && i[e.getSlotElementId()] || i[e.name] || i.__global__) || n && function(t) {
                                        var e = t.getSizes();
                                        if (e) return e.filter(function(e) {
                                            return "function" == typeof e.getHeight && "function" == typeof e.getWidth || (P.warn('skipping "fluid" ad size for gpt slot:', t), !1)
                                        }).map(function(e) {
                                            return [e.getWidth(), e.getHeight()]
                                        })
                                    }(e) || (e.sizes || []).map(function(e) {
                                        return [e.w, e.h]
                                    });
                                    if (s && s.length) a = s, s = f(s = Array.isArray(a) ? a.map(function(e) {
                                        return Array.isArray(e) && z[e.join("x")] || e
                                    }) : a, t);
                                    else {
                                        if (d = e, o = n, c.rp.sizeMappings && (o && c.rp.sizeMappings[d.getSlotElementId()] || !o && c.rp.sizeMappings[d.name] || c.rp.sizeMappings.__global__) || !t || !t.length) return P.warn("slot does not have any sizes or sizeMapping sizes defined:", e), [];
                                        s = t
                                    }
                                    return f(s, r)
                                }(o, (t = e) && t.mediaTypes && t.mediaTypes.banner && t.mediaTypes.banner.responsiveSizes ? x(t.mediaTypes.banner.responsiveSizes, w()) : u(t && t.mediaTypes && t.mediaTypes.banner && t.mediaTypes.banner.sizes), u(c.rp.sizes), s, p), 0 === e.filteredSizes.length)) return P.warn("adunitPattern excluded because all slot sizes filtered out:", e, o), 0;
                            P.debug("adunitPattern/slot match found:", e, o)
                        }
                        return r
                    })
                }
                var d = /##data\.(.+?)##/g,
                    o = /^##data\.([^#\s]+)##$/;

                function v(e, r, t) {
                    var n = null == e[t] ? e : e[t];
                    !t && 0 !== t || "string" != typeof n ? "object" == typeof n && (Array.isArray(n) ? n.forEach(function(e, t) {
                        v(n, r, t)
                    }) : Object.keys(n).forEach(function(e) {
                        v(n, r, e)
                    })) : function(e, r, t, n) {
                        if (d.lastIndex = 0, d.test(n)) {
                            var i = o.exec(n);
                            if (i) return r && r.hasOwnProperty(i[1]) ? e[t] = r[i[1]] : delete e[t];
                            var a = n.replace(d, function(e, t) {
                                return "object" == typeof r[t] ? JSON.stringify(r[t]) : void 0 === r[t] ? "" : r[t]
                            });
                            e[t] = a || ""
                        }
                    }(e, r, t, n)
                }

                function y(e) {
                    return "object" == typeof e ? JSON.parse(JSON.stringify(e)) : e
                }
                var h, I, P = function() {
                    for (var e = ["debug", "info", "warn", "error"], t = {}, r = 0; r < e.length; r++) {
                        var n = e[r];
                        t[n] = function(r) {
                            return function() {
                                if ("object" == typeof c && (c.logging || "function" == typeof c.getConfig && c.getConfig("debug"))) try {
                                    window.console[r].apply(window.console, (e = arguments, t = r.toUpperCase() + ":", e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #4dc33b; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid-RP"), e))
                                } catch (e) {}
                                var e, t
                            }
                        }(n)
                    }
                    return t
                }();

                function x(t, r) {
                    var e;
                    try {
                        e = n(t.sort(i), function(e) {
                            return r[0] >= e.minViewPort[0] && r[1] >= e.minViewPort[1]
                        }).sizes
                    } catch (e) {
                        P.error("error parsing sizeMappings:", t, e)
                    }
                    return e
                }

                function i(e, t) {
                    var r = e.minViewPort,
                        n = t.minViewPort;
                    return n[0] * n[1] - r[0] * r[1] || n[0] - r[0] || n[1] - r[1]
                }

                function w() {
                    return [window.innerWidth, window.innerHeight]
                }

                function S(e, t, r) {
                    e.fpd = e.fpd || {}, e.fpd.context = e.fpd.context || {};
                    var n = e.fpd.context;
                    if (!n.pbAdSlot) {
                        try {
                            var i = document.getElementById(e.code);
                            if (i.dataset.adslotid) return n.pbAdSlot = i.dataset.adslotid, 0
                        } catch (e) {}
                        if (t && r) return n.adServer = {
                            name: "gam",
                            adSlot: t.getAdUnitPath()
                        }, n.pbAdSlot = t.getAdUnitPath(), 0;
                        if (t) return n.adServer = {
                            name: "other",
                            adSlot: t.name
                        }, n.pbAdSlot = t.name, 0;
                        r && (n.adServer = {
                            name: "gam",
                            adSlot: e.code
                        }), e.fpd.context.pbAdSlot = e.code
                    }
                }
                P.info("loading"), c.rp = c.rp || {}, c.rp.adUnitPatterns = [], c.rp.addAdunitPatterns = function(e) {
                    P.debug("addAdUnitPatterns", e), c.rp.adUnitPatterns = c.rp.adUnitPatterns.concat(e.filter(function(t) {
                        if (void 0 !== t.slotPattern) try {
                            t.slotPattern = new RegExp(t.slotPattern, "i")
                        } catch (e) {
                            return P.error("error converting slot pattern ('" + t.slotPattern + "'); adunitPattern excluded"), !1
                        }
                        if (void 0 !== t.divPattern) try {
                            t.divPattern = new RegExp(t.divPattern, "i")
                        } catch (e) {
                            return P.error("error converting div pattern ('" + t.divPattern + "'); adunitPattern excluded"), !1
                        }
                        return !0
                    }))
                }, c.rp.requestBids = function(n) {
                    var i = n.hasOwnProperty("gptSlotObjects") || !n.slotMap && "undefined" != typeof googletag,
                        a = Array.isArray(n.slotMap) && n.slotMap || i && (n.gptSlotObjects || googletag.pubads().getSlots()) || [];
                    c.rp.addSizeMappings(n.sizeMappings);
                    var e, t, r, d, o, s, p = function(e, t) {
                            try {
                                e = e || {};
                                var r, n, i = {};
                                for (r in e) {
                                    !e.hasOwnProperty(r) || (n = x(e[r], t)) && (i[r] = n)
                                }
                            } catch (e) {
                                P.error("error getting all sizeMapping sizes:", e)
                            }
                            return i
                        }(c.rp.sizeMappings, w()),
                        u = (e = a, t = c.rp.adUnitPatterns, r = i, d = n.data, o = p, s = y(d), e.map(function(e) {
                            return function(e, t, r, n) {
                                if (t) try {
                                    var i = JSON.parse(JSON.stringify(t));
                                    if (i.code = r ? e.getSlotElementId() : e.name, i.mediaTypes && i.mediaTypes.banner && (i.mediaTypes.banner.sizes = i.filteredSizes), i.bids.forEach(function(e) {
                                            v(e, n)
                                        }), delete i.filteredSizes, delete i.responsiveSizes, delete i.slotPattern, delete i.divPattern, i.transactionId || (i.transactionId = _()), "function" == typeof I) try {
                                        I(i, e)
                                    } catch (t) {
                                        P.error("error calling custom pbAdSlot function:", i, e, t.message)
                                    } else S(i, e, r);
                                    return i
                                } catch (e) {
                                    P.error("error parsing adUnit", e)
                                } else P.warn("createAdUnit: no adunitPattern found for slot:", e)
                            }(e, g(e, t, r, o), r, s)
                        }).filter(function(e) {
                            return e
                        }));
                    P.debug("requestBids:", n, u), u.length ? (l(), c.requestBids({
                        bidsBackHandler: function(e, t, r) {
                            i ? (-1 === ("" + n.callback).indexOf("setTargetingForGPTAsync") && c.setTargetingForGPTAsync(u.map(function(e) {
                                return e.code
                            })), n.callback && "function" == typeof n.callback ? (P.debug("bidsBackHandler execute callback"), n.callback(a)) : (P.debug("callback undefined, refresh gpt slots"), googletag.pubads().refresh(a))) : n.callback && "function" == typeof n.callback ? (P.debug("bidsBackHandler execute callback"), n.callback(e, t, r)) : P.debug("callback undefined")
                        },
                        adUnits: u
                    })) : (P.debug("requestBids cancelled, no adUnits available for auction"), n.callback && "function" == typeof n.callback ? n.callback(i ? a : {}) : i && (P.debug("refresh gpt slots"), googletag.pubads().refresh(a)))
                }, c.rp.addSizeMappings = function(e) {
                    for (var t in e = e || {}, c.rp.sizeMappings = c.rp.sizeMappings || {}, e) e.hasOwnProperty(t) && (c.rp.sizeMappings[t] = e[t])
                }, c.rp.requestVideoBids = function(d) {
                    var o, s, p;
                    "string" == typeof d.adSlotName ? "function" == typeof d.callback ? Array.isArray(d.playerSize) ? (d.adServer = d.adServer || "gam", (p = function(e, t, r, n, i) {
                        if (r) try {
                            var a = JSON.parse(JSON.stringify(r));
                            a.mediaTypes || (a.mediaTypes = {}), a.mediaTypes.video || (a.mediaTypes.video = {}), a.mediaTypes.video.playerSize = t, a.code = e;
                            var d = y(n);
                            if (a.bids.forEach(function(e) {
                                    v(e, function(e, t) {
                                        if (e && "rubicon" === t) {
                                            var n = JSON.parse(JSON.stringify(e));
                                            return ["inventory", "visitor"].forEach(function(r) {
                                                "object" == typeof n[r] && Object.keys(n[r]).forEach(function(e) {
                                                    var t = n[r][e];
                                                    "string" != typeof t && "number" != typeof t || (n[r][e] = [t])
                                                })
                                            }), n
                                        }
                                        return e
                                    }(d, e.bidder))
                                }), "function" == typeof I) try {
                                I(a, void 0)
                            } catch (e) {
                                P.error("error calling custom pbAdSlot function:", a, e.message)
                            } else S(a, void 0, "gam" === i);
                            return delete a.slotPattern, delete a.divPattern, delete a.filteredSizes, a
                        } catch (e) {
                            P.error("error parsing video adUnit", e)
                        } else P.warn("createVideoAdUnit: no adUnitPattern found for ad slot name:", e)
                    }(d.adSlotName, d.playerSize, (o = d.adSlotName, s = d.playerSize, n(c.rp.adUnitPatterns, function(e) {
                        var t, r, n, i, a = !1;
                        if (b(e), ("video" === e.mediaType || "object" == typeof e.mediaTypes && e.mediaTypes.hasOwnProperty("video")) && void 0 !== e.slotPattern && (a = e.slotPattern.test(o)), a && h) try {
                            (a = h({
                                gptSlot: o,
                                adUnitPattern: e
                            })) || P.warn("adunitPattern excluded because filtered out by custom mapping function:", e, o)
                        } catch (e) {
                            P.warn("custom mapping function error:", e)
                        }
                        return a && (t = s, r = [e.mediaTypes.video.playerSize], n = c.rp.sizes, i = !0, n && (i = n.some(function(e) {
                            return t[0] === e[0] && t[1] === e[1]
                        })), i && r && (i = r.some(function(e) {
                            return t[0] === e[0] && t[1] === e[1]
                        })), i ? (P.debug("adunitPattern/video match found:", e, o), 1) : (P.warn("adunitPattern excluded because all video slot sizes filtered out:", e, o), 0))
                    })), d.data, d.adServer)) && (l(), c.requestBids({
                        adUnits: [p],
                        bidsBackHandler: function(e, t, r) {
                            var n, i, a;
                            "gam" === d.adServer ? (n = {
                                adTagUrl: void 0,
                                vastUrl: void 0
                            }, i = d.adSlotName, e && e[i] && Array.isArray(e[i].bids) && e[i].bids.length && (n.adTagUrl = c.adServers.dfp.buildVideoUrl({
                                adUnit: p,
                                params: {
                                    iu: d.adSlotName
                                }
                            }), a = c.getHighestCpmBids(d.adSlotName), n.vastUrl = void 0 !== a[0] ? a[0].vastUrl : void 0), d.callback(n, e)) : d.callback(e, t, r)
                        }
                    }))) : P.error("requestVideoBids called without playerSize") : P.error("requestVideoBids called without a callback") : P.error("requestVideoBids called without adSlotName")
                }, c.rp.setCustomMappingFunction = function(e) {
                    h = e
                }, c.rp.setCustomPbAdSlotFunction = function(e) {
                    I = e
                }, P.info("running")
            } catch (c) {
                window.console && console.error && "function" == typeof console.error && console.error(c)
            }
        }
    }, {}]
}, {}, [1]);
/* prebid.js v4.15.0
Updated : 2020-11-05 */
! function(u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), d[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length;) c.shift()();
        if (n)
            for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {},
        d = {
            357: 0
        };

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }
    f.m = u, f.c = n, f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function(e) {
        throw console.error(e), e
    }, f(f.s = 896)
}({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function() {
            return k
        }), n.d(t, "bind", function() {
            return N
        }), t.getUniqueIdentifierStr = q, t.generateUUID = function e(t) {
            return t ? (t ^ M() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, t.getBidIdParameter = function(e, t) {
            if (t && t[e]) return t[e];
            return ""
        }, t.tryAppendQueryString = function(e, t, n) {
            if (n) return e + t + "=" + encodeURIComponent(n) + "&";
            return e
        }, t.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t = t.replace(/&$/, "")
        }, t.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? pe(t).map(function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(t[e]))
            }).join("&") : ""
        }, t.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = []; {
                var n;
                e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes) ? (n = e.mediaTypes.banner.sizes, Array.isArray(n[0]) ? t = n : t.push(n)) : Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes))
            }
            return t
        }, t.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","),
                    r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n) oe(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === h(e)) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(G(e));
                    else
                        for (var a = 0; a < o; a++) t.push(G(e[a]))
            }
            return t
        }, t.parseGPTSingleSizeArray = G, t.parseGPTSingleSizeArrayToRtbSize = function(e) {
            if (W(e)) return {
                w: e[0],
                h: e[1]
            }
        }, t.getWindowTop = L, t.getWindowSelf = F, t.getWindowLocation = z, t.logMessage = V, t.logInfo = H, t.logWarn = K, t.logError = J, t.hasConsoleLogger = function() {
            return _
        }, t.debugTurnedOn = Q, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = q(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, t.getParameterByName = function(e) {
            return Ie(z().search)[e] || ""
        }, t.isA = $, t.isFn = X, t.isStr = Z, t.isArray = ee, t.isNumber = te, t.isPlainObject = ne, t.isBoolean = function(e) {
            return $(e, C)
        }, t.isEmpty = re, t.isEmptyStr = function(e) {
            return Z(e) && (!e || 0 === e.length)
        }, t._each = ie, t.contains = function(e, t) {
            if (re(e)) return !1;
            if (X(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--;)
                if (e[n] === t) return !0;
            return !1
        }, t._map = function(n, r) {
            if (re(n)) return [];
            if (X(n.map)) return n.map(r);
            var i = [];
            return ie(n, function(e, t) {
                i.push(r(e, t, n))
            }), i
        }, t.hasOwn = oe, t.insertElement = ae, t.triggerPixel = ce, t.callBurl = function(e) {
            var t = e.source,
                n = e.burl;
            t === S.S2S.SRC && n && k.triggerPixel(n)
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = q(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", k.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
        }, t.insertUserSyncIframe = ue, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = encodeURI(e),
                n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        }, t.createTrackPixelIframeHtml = se, t.getValueString = de, t.uniques = fe, t.flatten = le, t.getBidRequest = function(n, e) {
            return n ? (e.some(function(e) {
                var t = c()(e.bids, function(t) {
                    return ["bidId", "adId", "bid_id"].some(function(e) {
                        return t[e] === n
                    })
                });
                return t && (r = t), t
            }), r) : void 0;
            var r
        }, t.getKeys = pe, t.getValue = ge, t.getKeyByValue = function(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] === t) return n
        }, t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder
                }).reduce(le, [])
            }).reduce(le).filter(fe)
        }, t.isGptPubadsDefined = be, n.d(t, "getHighestCpm", function() {
            return ve
        }), n.d(t, "getOldestHighestCpmBid", function() {
            return ye
        }), n.d(t, "getLatestHighestCpmBid", function() {
            return he
        }), t.shuffle = function(e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, t.adUnitsFilter = function(e, t) {
            return s()(e, t && t.adUnitCode)
        }, t.deepClone = Se, t.inIframe = function() {
            try {
                return k.getWindowSelf() !== k.getWindowTop()
            } catch (e) {
                return !0
            }
        }, t.isSafariBrowser = function() {
            return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
        }, t.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, t.replaceClickThrough = function(e, t) {
            if (!e || !t || "string" != typeof t) return;
            return e.replace(/\${CLICKTHROUGH}/g, t)
        }, t.timestamp = function() {
            return (new Date).getTime()
        }, t.getPerformanceNow = function() {
            return window.performance && window.performance.now && window.performance.now() || 0
        }, t.hasDeviceAccess = function() {
            return !1 !== r.b.getConfig("deviceAccess")
        }, t.checkCookieSupport = Ae, t.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function() {
                ++n === t && e.apply(this, arguments)
            }
        }, t.groupBy = function(e, n) {
            return e.reduce(function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }, {})
        }, t.getDefinedParams = function(n, e) {
            return e.filter(function(e) {
                return n[e]
            }).reduce(function(e, t) {
                return y(e, v({}, t, n[t]))
            }, {})
        }, t.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every(function(e) {
                    return s()(t, e)
                })) return !1;
            if (e.video && e.video.context) return s()(["instream", "outstream", "adpod"], e.video.context);
            return !0
        }, t.getBidderRequest = function(e, t, n) {
            return c()(e, function(e) {
                return 0 < e.bids.filter(function(e) {
                    return e.bidder === t && e.adUnitCode === n
                }).length
            }) || {
                start: null,
                auctionId: null
            }
        }, t.getUserConfiguredParams = function(e, t, n) {
            return e.filter(function(e) {
                return e.code === t
            }).map(function(e) {
                return e.bids
            }).reduce(le, []).filter(function(e) {
                return e.bidder === n
            }).map(function(e) {
                return e.params || {}
            })
        }, t.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, t.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, t.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return Ee(t, e)
            }
        }, t.isSlotMatchingAdUnitCode = Oe, t.getGptSlotInfoForAdUnitCode = function(e) {
            var t;
            be() && (t = c()(window.googletag.pubads().getSlots(), Oe(e)));
            if (t) return {
                gptSlot: t.getAdUnitPath(),
                divId: t.getSlotElementId()
            };
            return {}
        }, t.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
        }, t.isInteger = Te, t.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                return "_" + t.toLowerCase()
            }).replace(/^_/, "")
        }, t.cleanObj = function(n) {
            return Object.keys(n).reduce(function(e, t) {
                return void 0 !== n[t] && (e[t] = n[t]), e
            }, {})
        }, t.pick = function(a, c) {
            return "object" === h(a) ? c.reduce(function(e, t, n) {
                if ("function" == typeof t) return e;
                var r = t,
                    i = t.match(/^(.+?)\sas\s(.+?)$/i);
                i && (t = i[1], r = i[2]);
                var o = a[t];
                return "function" == typeof c[n + 1] && (o = c[n + 1](o, e)), void 0 !== o && (e[r] = o), e
            }, {}) : {}
        }, t.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                i = [];
            return ie(e, function(e, t) {
                if (ee(e)) {
                    var n = [];
                    ie(e, function(e) {
                        !(e = de(r + "." + t, e)) && "" !== e || n.push(e)
                    }), e = n
                } else {
                    if (!Z(e = de(r + "." + t, e))) return;
                    e = [e]
                }
                i.push({
                    key: t,
                    value: e
                })
            }), i
        }, t.convertTypes = function(r, i) {
            return Object.keys(r).forEach(function(e) {
                var t, n;
                i[e] && (X(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), isNaN(i[e]) && delete i.key)
            }), i
        }, t.isArrayOfNums = function(e, t) {
            return ee(e) && (!t || e.length === t) && e.every(Te)
        }, t.fill = function(e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = ne(e) ? Se(e) : e;
                n.push(i)
            }
            return n
        }, t.chunk = function(e, t) {
            for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                var i = r * t,
                    o = i + t;
                n.push(e.slice(i, o))
            }
            return n
        }, t.getMinValueFromArray = function(e) {
            return Math.min.apply(Math, p(e))
        }, t.getMaxValueFromArray = function(e) {
            return Math.max.apply(Math, p(e))
        }, t.compareOn = function(n) {
            return function(e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0
            }
        }, t.parseQS = Ie, t.formatQS = Ce, t.parseUrl = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : k.parseQS(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.buildUrl = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(k.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }, t.deepEqual = je, t.mergeDeep = we, t.cyrb53Hash = function(e) {
            for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = function(e, t) {
                    if (X(Math.imul)) return Math.imul(e, t);
                    var n = (4194303 & e) * (t |= 0);
                    return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n
                }, i = 3735928559 ^ n, o = 1103547991 ^ n, a = 0; a < e.length; a++) t = e.charCodeAt(a), i = r(i ^ t, 2654435761), o = r(o ^ t, 1597334677);
            return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString()
        };
        var r = n(3),
            i = n(158),
            o = n.n(i),
            a = n(10),
            c = n.n(a),
            u = n(12),
            s = n.n(u),
            d = n(159);
        n.d(t, "deepAccess", function() {
            return d.a
        });
        var f = n(160);

        function l(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || g(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function p(e) {
            return function(e) {
                if (Array.isArray(e)) return b(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || g(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function g(e, t) {
            if (e) {
                if ("string" == typeof e) return b(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0
            }
        }

        function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        n.d(t, "deepSetValue", function() {
            return f.a
        });
        var m, S = n(5),
            A = "Array",
            E = "String",
            O = "Function",
            T = "Number",
            I = "Object",
            C = "Boolean",
            j = Object.prototype.toString,
            w = Boolean(window.console),
            _ = Boolean(w && window.console.log),
            B = Boolean(w && window.console.info),
            U = Boolean(w && window.console.warn),
            x = Boolean(w && window.console.error),
            R = n(8),
            k = {
                checkCookieSupport: Ae,
                createTrackPixelIframeHtml: se,
                getWindowSelf: F,
                getWindowTop: L,
                getWindowLocation: z,
                insertUserSyncIframe: ue,
                insertElement: ae,
                isFn: X,
                triggerPixel: ce,
                logError: J,
                logWarn: K,
                logMessage: V,
                logInfo: H,
                parseQS: Ie,
                formatQS: Ce,
                deepEqual: je
            },
            D = {},
            N = function(e, t) {
                return t
            }.bind(null, 1, D)() === D ? Function.prototype.bind : function(e) {
                var t = this,
                    n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
                }
            },
            P = (m = 0, function() {
                return ++m
            });

        function q() {
            return P() + Math.random().toString(16).substr(2)
        }

        function M() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }

        function G(e) {
            if (W(e)) return e[0] + "x" + e[1]
        }

        function W(e) {
            return ee(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
        }

        function L() {
            return window.top
        }

        function F() {
            return window.self
        }

        function z() {
            return window.location
        }

        function V() {
            Q() && _ && console.log.apply(console, Y(arguments, "MESSAGE:"))
        }

        function H() {
            Q() && B && console.info.apply(console, Y(arguments, "INFO:"))
        }

        function K() {
            Q() && U && console.warn.apply(console, Y(arguments, "WARNING:"))
        }

        function J() {
            Q() && x && console.error.apply(console, Y(arguments, "ERROR:")), R.emit(S.EVENTS.AUCTION_DEBUG, {
                type: "ERROR",
                arguments: arguments
            })
        }

        function Y(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }

        function Q() {
            return !!r.b.getConfig("debug")
        }

        function $(e, t) {
            return j.call(e) === "[object " + t + "]"
        }

        function X(e) {
            return $(e, O)
        }

        function Z(e) {
            return $(e, E)
        }

        function ee(e) {
            return $(e, A)
        }

        function te(e) {
            return $(e, T)
        }

        function ne(e) {
            return $(e, I)
        }

        function re(e) {
            if (!e) return !0;
            if (ee(e) || Z(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }

        function ie(e, t) {
            if (!re(e)) {
                if (X(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }

        function oe(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        }

        function ae(e, t, n, r) {
            var i;
            t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o)
                }
            } catch (e) {}
        }

        function ce(e, t) {
            var n = new Image;
            t && k.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e
        }

        function ue(e, t) {
            var n = k.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && k.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), k.insertElement(i, document, "html", !0)
        }

        function se(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(q(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
        }

        function de(e, t, n) {
            return null == t ? n : Z(t) ? t : te(t) ? t.toString() : void k.logWarn("Unsuported type for param: " + e + " required type: String")
        }

        function fe(e, t, n) {
            return n.indexOf(e) === t
        }

        function le(e, t) {
            return e.concat(t)
        }

        function pe(e) {
            return Object.keys(e)
        }

        function ge(e, t) {
            return e[t]
        }

        function be() {
            if (window.googletag && X(window.googletag.pubads) && X(window.googletag.pubads().getSlots)) return !0
        }
        var ve = me("timeToRespond", function(e, t) {
                return t < e
            }),
            ye = me("responseTimestamp", function(e, t) {
                return t < e
            }),
            he = me("responseTimestamp", function(e, t) {
                return e < t
            });

        function me(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }

        function Se(e) {
            return o()(e)
        }

        function Ae() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }
        var Ee = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };

        function Oe(t) {
            return function(e) {
                return Ee(e, t)
            }
        }

        function Te(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }

        function Ie(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                var n = l(t.split("="), 2),
                    r = n[0],
                    i = n[1];
                return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", e
            }, {}) : {}
        }

        function Ce(e) {
            return Object.keys(e).map(function(t) {
                return Array.isArray(e[t]) ? e[t].map(function(e) {
                    return "".concat(t, "[]=").concat(e)
                }).join("&") : "".concat(t, "=").concat(e[t])
            }).join("&")
        }

        function je(e, t) {
            if (e === t) return !0;
            if ("object" !== h(e) || null === e || "object" !== h(t) || null === t) return !1;
            if (Object.keys(e).length !== Object.keys(t).length) return !1;
            for (var n in e) {
                if (!t.hasOwnProperty(n)) return !1;
                if (!je(e[n], t[n])) return !1
            }
            return !0
        }

        function we(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            if (!n.length) return e;
            var i = n.shift();
            if (ne(e) && ne(i))
                for (var o in i) ne(i[o]) ? (e[o] || y(e, v({}, o, {})), we(e[o], i[o])) : ee(i[o]) && e[o] ? ee(e[o]) && (e[o] = e[o].concat(i[o])) : y(e, v({}, o, i[o]));
            return we.apply(void 0, [e].concat(n))
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "storage", function() {
            return I
        }), t.registerBidder = function(r) {
            var n = Array.isArray(r.supportedMediaTypes) ? {
                supportedMediaTypes: r.supportedMediaTypes
            } : void 0;

            function i(e) {
                var t = w(e);
                c.default.registerBidAdapter(t, e.code, n)
            }
            i(r), Array.isArray(r.aliases) && r.aliases.forEach(function(e) {
                var t, n = e;
                Object(m.isPlainObject)(e) && (n = e.code, t = e.gvlid), c.default.aliasRegistry[n] = r.code, i(T({}, r, {
                    code: n,
                    gvlid: t
                }))
            })
        }, t.newBidder = w, n.d(t, "registerSyncInner", function() {
            return _
        }), t.preloadBidderMappingFile = B, t.getIabSubCategory = function(t, e) {
            var n = c.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(),
                    i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
                    o = I.getDataFromLocalStorage(i);
                if (o) {
                    try {
                        o = JSON.parse(o)
                    } catch (e) {
                        Object(m.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                    }
                    return o.mapping[e] ? o.mapping[e] : null
                }
            }
        }, t.isValid = U;
        var r = n(90),
            c = n(9),
            u = n(3),
            v = n(34),
            s = n(43),
            o = n(37),
            a = n(28),
            i = n(5),
            y = n.n(i),
            d = n(8),
            h = n.n(d),
            f = n(12),
            l = n.n(f),
            p = n(4),
            m = n(0),
            g = n(2),
            b = n(13),
            S = n(7);

        function A(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function E(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function O(e) {
            return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var I = Object(S.a)("bidderFactory"),
            C = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
            j = 1;

        function w(p) {
            return T(new r.a(p.code), {
                getSpec: function() {
                    return Object.freeze(p)
                },
                registerSyncs: g,
                callBids: function(o, a, e, n, c, r) {
                    var u, s, t, d, i, f;

                    function l() {
                        e(), h.a.emit(y.a.EVENTS.BIDDER_DONE, o), g(s, o.gdprConsent, o.uspConsent)
                    }
                    Array.isArray(o.bids) && (u = {}, s = [], 0 !== (t = o.bids.filter(b)).length ? (d = {}, t.forEach(function(e) {
                        (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                    }), (i = p.buildRequests(t, o)) && 0 !== i.length ? (Array.isArray(i) || (i = [i]), f = Object(m.delayExecution)(r(l), i.length), i.forEach(function(i) {
                        switch (i.method) {
                            case "GET":
                                n("".concat(i.url).concat(function(e) {
                                    if (e) return "?".concat("object" === O(e) ? Object(m.parseQueryStringParameters)(e) : e);
                                    return ""
                                }(i.data)), {
                                    success: r(e),
                                    error: t
                                }, void 0, T({
                                    method: "GET",
                                    withCredentials: !0
                                }, i.options));
                                break;
                            case "POST":
                                n(i.url, {
                                    success: r(e),
                                    error: t
                                }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), T({
                                    method: "POST",
                                    contentType: "text/plain",
                                    withCredentials: !0
                                }, i.options));
                                break;
                            default:
                                Object(m.logWarn)("Skipping invalid request from ".concat(p.code, ". Request type ").concat(i.type, " must be GET or POST")), f()
                        }

                        function e(e, t) {
                            c(p.code);
                            try {
                                e = JSON.parse(e)
                            } catch (e) {}
                            var n;
                            e = {
                                body: e,
                                headers: {
                                    get: t.getResponseHeader.bind(t)
                                }
                            }, s.push(e);
                            try {
                                n = p.interpretResponse(e, i)
                            } catch (e) {
                                return Object(m.logError)("Bidder ".concat(p.code, " failed to interpret the server's response. Continuing without bids"), null, e), void f()
                            }

                            function r(e) {
                                var t, n, r, i = d[e.requestId];
                                i ? (e.originalCpm = e.cpm, e.originalCurrency = e.currency, e.meta = e.meta || T({}, e[i.bidder]), t = T(Object(v.a)(y.a.STATUS.GOOD, i), e), n = i.adUnitCode, r = t, u[n] = !0, U(n, r, [o]) && a(n, r)) : Object(m.logWarn)("Bidder ".concat(p.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                            }
                            n && (Object(m.isArray)(n) ? n.forEach(r) : r(n)), f(n)
                        }

                        function t(e) {
                            c(p.code), Object(m.logError)("Server call for ".concat(p.code, " failed: ").concat(e, ". Continuing without bids.")), f()
                        }
                    })) : l()) : l())
                }
            });

            function g(e, t, n) {
                _(p, e, t, n)
            }

            function b(e) {
                return !!p.isBidRequestValid(e) || (Object(m.logWarn)("Invalid bid sent to bidder ".concat(p.code, ": ").concat(JSON.stringify(e))), !1)
            }
        }
        var _ = Object(b.b)("async", function(t, e, n, r) {
            var i, o, a = u.b.getConfig("userSync.aliasSyncEnabled");
            !t.getUserSyncs || !a && c.default.aliasRegistry[t.code] || (i = u.b.getConfig("userSync.filterSettings"), (o = t.getUserSyncs({
                iframeEnabled: !(!i || !i.iframe && !i.all),
                pixelEnabled: !(!i || !i.image && !i.all)
            }, e, n, r)) && (Array.isArray(o) || (o = [o]), o.forEach(function(e) {
                s.a.registerSync(e.type, t.code, e.url)
            })))
        }, "registerSyncs");

        function B(e, t) {
            if (!u.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter(function(e) {
                return Object(m.deepAccess)(e, "mediaTypes.video.context") === g.a
            }).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder
                })
            }).reduce(m.flatten, []).filter(m.uniques).forEach(function(n) {
                var e = c.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(),
                        r = t.refreshInDays ? t.refreshInDays : j,
                        i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
                        o = I.getDataFromLocalStorage(i);
                    try {
                        (!(o = o ? JSON.parse(o) : void 0) || Object(m.timestamp)() > o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
                            success: function(e) {
                                try {
                                    e = JSON.parse(e);
                                    var t = {
                                        lastUpdated: Object(m.timestamp)(),
                                        mapping: e.mapping
                                    };
                                    I.setDataInLocalStorage(i, JSON.stringify(t))
                                } catch (e) {
                                    Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                                }
                            },
                            error: function() {
                                Object(m.logError)("Failed to load ".concat(n, " bidder translation file"))
                            }
                        })
                    } catch (e) {
                        Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                    }
                }
            }), e.call(this, t)
        }

        function U(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
            }
            return e ? t ? (i = Object.keys(t), C.every(function(e) {
                return l()(i, e) && !l()([void 0, null], t[e])
            }) ? "native" !== t.mediaType || Object(o.f)(t, n) ? "video" !== t.mediaType || Object(a.d)(t, n) ? !("banner" === t.mediaType && ! function(e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), 1;
                var r = Object(m.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = Object(m.parseSizesInput)(i);
                if (1 === o.length) {
                    var a = A(o[0].split("x"), 2),
                        c = a[0],
                        u = a[1];
                    return t.width = parseInt(c, 10), t.height = parseInt(u, 10), 1
                }
            }(e, t, n)) || (Object(m.logError)(r("Banner bids require a width and height")), !1) : (Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(m.logError)(r("Native bid missing some required properties.")), !1) : (Object(m.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
        Object(b.a)("checkAdUnitSetup").before(B)
    },
    10: function(e, t, n) {
        var r = n(96);
        e.exports = r
    },
    100: function(e, t, n) {
        function r(e, t) {
            var n = c[a(e)];
            return n == s || n != u && ("function" == typeof t ? i(t) : !!t)
        }
        var i = n(30),
            o = /#|\.prototype\./,
            a = r.normalize = function(e) {
                return String(e).replace(o, ".").toLowerCase()
            },
            c = r.data = {},
            u = r.NATIVE = "N",
            s = r.POLYFILL = "P";
        e.exports = r
    },
    101: function(e, t, n) {
        var r = n(25),
            i = n(102),
            o = n(19)("species");
        e.exports = function(e, t) {
            var n;
            return i(e) && ("function" == typeof(n = e.constructor) && (n === Array || i(n.prototype)) || r(n) && null === (n = n[o])) && (n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        }
    },
    102: function(e, t, n) {
        var r = n(48);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    103: function(e, t, n) {
        var r = n(24),
            i = n(31);
        e.exports = function(t, n) {
            try {
                i(r, t, n)
            } catch (e) {
                r[t] = n
            }
            return n
        }
    },
    104: function(e, t, n) {
        var r = n(75);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
    },
    105: function(e, t, n) {
        n(106);
        var r = n(52);
        e.exports = r("Array", "includes")
    },
    106: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(76).includes,
            o = n(51);
        r({
            target: "Array",
            proto: !0,
            forced: !n(60)("indexOf", {
                ACCESSORS: !0,
                1: 0
            })
        }, {
            includes: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), o("includes")
    },
    107: function(e, t, n) {
        var r = n(58),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            var n = r(e);
            return n < 0 ? i(n + t, 0) : o(n, t)
        }
    },
    108: function(e, t, n) {
        n(109), n(126), n(87), n(128);
        var r = n(42);
        e.exports = r.Set
    },
    109: function(e, t, n) {
        "use strict";
        var r = n(110),
            i = n(115);
        e.exports = r("Set", function(t) {
            return function(e) {
                return t(this, arguments.length ? e : void 0)
            }
        }, i)
    },
    11: function(e, t, n) {
        "use strict";
        t.a = i, t.c = function(e) {
            return !(!e || !e.url)
        }, t.b = function(e, t) {
            e.render(t)
        };
        var u = n(40),
            s = n(0),
            r = n(10),
            d = n.n(r),
            f = "outstream";

        function i(e) {
            var t = this,
                r = e.url,
                n = e.config,
                i = e.id,
                o = e.callback,
                a = e.loaded,
                c = e.adUnitCode;
            this.url = r, this.config = n, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = o || function() {
                t.loaded = !0, t.process()
            }, this.render = function() {
                var t, e, n;
                t = c, e = pbjs.adUnits, !((n = d()(e, function(e) {
                    return e.code === t
                })) && n.renderer && n.renderer.url && n.renderer.render) || s.isBoolean(n.renderer.backupOnly) && n.renderer.backupOnly ? Object(u.a)(r, f, this.callback) : s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c)), this._render ? this._render.apply(this, arguments) : s.logWarn("No render function was provided, please use .setRender on the renderer")
            }.bind(this)
        }
        i.install = function(e) {
            return new i({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            })
        }, i.prototype.getConfig = function() {
            return this.config
        }, i.prototype.setRender = function(e) {
            this._render = e
        }, i.prototype.setEventHandlers = function(e) {
            this.handlers = e
        }, i.prototype.handleVideoEvent = function(e) {
            var t = e.id,
                n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n))
        }, i.prototype.process = function() {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                s.logError("Error processing Renderer command: ", e)
            }
        }
    },
    110: function(e, t, n) {
        "use strict";
        var f = n(14),
            l = n(24),
            p = n(78),
            g = n(30),
            b = n(31),
            v = n(17),
            y = n(81),
            h = n(25),
            m = n(64),
            S = n(33).f,
            A = n(56).forEach,
            E = n(29),
            r = n(54),
            O = r.set,
            T = r.getterFor;
        e.exports = function(n, e, t) {
            var r, a, i = -1 !== n.indexOf("Map"),
                c = -1 !== n.indexOf("Weak"),
                o = i ? "set" : "add",
                u = l[n],
                s = u && u.prototype,
                d = {};
            return E && "function" == typeof u && (c || s.forEach && !g(function() {
                (new u).entries().next()
            })) ? (r = e(function(e, t) {
                O(y(e, r, n), {
                    type: n,
                    collection: new u
                }), null != t && v(t, e[o], e, i)
            }), a = T(n), A(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(i) {
                var o = "add" == i || "set" == i;
                i in s && (!c || "clear" != i) && b(r.prototype, i, function(e, t) {
                    var n = a(this).collection;
                    if (!o && c && !h(e)) return "get" == i && void 0;
                    var r = n[i](0 === e ? 0 : e, t);
                    return o ? this : r
                })
            }), c || S(r.prototype, "size", {
                configurable: !0,
                get: function() {
                    return a(this).collection.size
                }
            })) : (r = t.getConstructor(e, n, i, o), p.REQUIRED = !0), m(r, n, !1, !0), d[n] = r, f({
                global: !0,
                forced: !0
            }, d), c || t.setStrong(r, n, i), r
        }
    },
    111: function(e, t, n) {
        var r = n(30);
        e.exports = !r(function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })
    },
    112: function(e, t, n) {
        "use strict";
        var r = n(63),
            i = n(62);
        e.exports = r ? {}.toString : function() {
            return "[object " + i(this) + "]"
        }
    },
    113: function(e, t, n) {
        var r = n(24),
            i = n(114),
            o = r.WeakMap;
        e.exports = "function" == typeof o && /native code/.test(i(o))
    },
    114: function(e, t, n) {
        var r = n(74),
            i = Function.toString;
        "function" != typeof r.inspectSource && (r.inspectSource = function(e) {
            return i.call(e)
        }), e.exports = r.inspectSource
    },
    115: function(e, t, n) {
        "use strict";
        var s = n(33).f,
            d = n(82),
            f = n(120),
            l = n(22),
            p = n(81),
            g = n(17),
            a = n(66),
            c = n(125),
            b = n(29),
            v = n(78).fastKey,
            r = n(54),
            y = r.set,
            h = r.getterFor;
        e.exports = {
            getConstructor: function(e, n, r, i) {
                function o(e, t, n) {
                    var r, i, o = c(e),
                        a = u(e, t);
                    return a ? a.value = n : (o.last = a = {
                        index: i = v(t, !0),
                        key: t,
                        value: n,
                        previous: r = o.last,
                        next: void 0,
                        removed: !1
                    }, o.first || (o.first = a), r && (r.next = a), b ? o.size++ : e.size++, "F" !== i && (o.index[i] = a)), e
                }
                var a = e(function(e, t) {
                        p(e, a, n), y(e, {
                            type: n,
                            index: d(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }), b || (e.size = 0), null != t && g(t, e[i], e, r)
                    }),
                    c = h(n),
                    u = function(e, t) {
                        var n, r = c(e),
                            i = v(t);
                        if ("F" !== i) return r.index[i];
                        for (n = r.first; n; n = n.next)
                            if (n.key == t) return n
                    };
                return f(a.prototype, {
                    clear: function() {
                        for (var e = c(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                        e.first = e.last = void 0, b ? e.size = 0 : this.size = 0
                    },
                    delete: function(e) {
                        var t, n, r = c(this),
                            i = u(this, e);
                        return i && (t = i.next, n = i.previous, delete r.index[i.index], i.removed = !0, n && (n.next = t), t && (t.previous = n), r.first == i && (r.first = t), r.last == i && (r.last = n), b ? r.size-- : this.size--), !!i
                    },
                    forEach: function(e, t) {
                        for (var n, r = c(this), i = l(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.next : r.first;)
                            for (i(n.value, n.key, this); n && n.removed;) n = n.previous
                    },
                    has: function(e) {
                        return !!u(this, e)
                    }
                }), f(a.prototype, r ? {
                    get: function(e) {
                        var t = u(this, e);
                        return t && t.value
                    },
                    set: function(e, t) {
                        return o(this, 0 === e ? 0 : e, t)
                    }
                } : {
                    add: function(e) {
                        return o(this, e = 0 === e ? 0 : e, e)
                    }
                }), b && s(a.prototype, "size", {
                    get: function() {
                        return c(this).size
                    }
                }), a
            },
            setStrong: function(e, t, n) {
                var r = t + " Iterator",
                    i = h(t),
                    o = h(r);
                a(e, t, function(e, t) {
                    y(this, {
                        type: r,
                        target: e,
                        state: i(e),
                        kind: t,
                        last: void 0
                    })
                }, function() {
                    for (var e = o(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                    return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                        value: n.key,
                        done: !1
                    } : "values" == t ? {
                        value: n.value,
                        done: !1
                    } : {
                        value: [n.key, n.value],
                        done: !1
                    } : {
                        value: e.target = void 0,
                        done: !0
                    }
                }, n ? "entries" : "values", !n, !0), c(t)
            }
        }
    },
    116: function(e, t, n) {
        var r = n(29),
            a = n(33),
            c = n(15),
            u = n(117);
        e.exports = r ? Object.defineProperties : function(e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
            return e
        }
    },
    117: function(e, t, n) {
        var r = n(118),
            i = n(83);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    },
    118: function(e, t, n) {
        var a = n(26),
            c = n(47),
            u = n(76).indexOf,
            s = n(53);
        e.exports = function(e, t) {
            var n, r = c(e),
                i = 0,
                o = [];
            for (n in r) !a(s, n) && a(r, n) && o.push(n);
            for (; t.length > i;) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o
        }
    },
    119: function(e, t, n) {
        var r = n(27);
        e.exports = r("document", "documentElement")
    },
    12: function(e, t, n) {
        var r = n(105);
        e.exports = r
    },
    120: function(e, t, n) {
        var i = n(84);
        e.exports = function(e, t, n) {
            for (var r in t) n && n.unsafe && e[r] ? e[r] = t[r] : i(e, r, t[r], n);
            return e
        }
    },
    121: function(e, t, n) {
        "use strict";

        function i() {
            return this
        }
        var o = n(85).IteratorPrototype,
            a = n(82),
            c = n(46),
            u = n(64),
            s = n(38);
        e.exports = function(e, t, n) {
            var r = t + " Iterator";
            return e.prototype = a(o, {
                next: c(1, n)
            }), u(e, r, !1, !0), s[r] = i, e
        }
    },
    122: function(e, t, n) {
        var r = n(30);
        e.exports = !r(function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })
    },
    123: function(e, t, n) {
        var i = n(15),
            o = n(124);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var n, r = !1,
                e = {};
            try {
                (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), r = e instanceof Array
            } catch (e) {}
            return function(e, t) {
                return i(e), o(t), r ? n.call(e, t) : e.__proto__ = t, e
            }
        }() : void 0)
    },
    124: function(e, t, n) {
        var r = n(25);
        e.exports = function(e) {
            if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
        }
    },
    125: function(e, t, n) {
        "use strict";
        var r = n(27),
            i = n(33),
            o = n(19),
            a = n(29),
            c = o("species");
        e.exports = function(e) {
            var t = r(e),
                n = i.f;
            a && t && !t[c] && n(t, c, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    126: function(e, t) {},
    127: function(e, t, n) {
        function r(c) {
            return function(e, t) {
                var n, r, i = String(s(e)),
                    o = u(t),
                    a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536
            }
        }
        var u = n(58),
            s = n(49);
        e.exports = {
            codeAt: r(!1),
            charAt: r(!0)
        }
    },
    128: function(e, t, n) {
        n(129);
        var r = n(130),
            i = n(24),
            o = n(62),
            a = n(31),
            c = n(38),
            u = n(19)("toStringTag");
        for (var s in r) {
            var d = i[s],
                f = d && d.prototype;
            f && o(f) !== u && a(f, u, s), c[s] = c.Array
        }
    },
    129: function(e, t, n) {
        "use strict";
        var r = n(47),
            i = n(51),
            o = n(38),
            a = n(54),
            c = n(66),
            u = "Array Iterator",
            s = a.set,
            d = a.getterFor(u);
        e.exports = c(Array, "Array", function(e, t) {
            s(this, {
                type: u,
                target: r(e),
                index: 0,
                kind: t
            })
        }, function() {
            var e = d(this),
                t = e.target,
                n = e.kind,
                r = e.index++;
            return !t || r >= t.length ? {
                value: e.target = void 0,
                done: !0
            } : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: t[r],
                done: !1
            } : {
                value: [r, t[r]],
                done: !1
            }
        }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
    },
    13: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return c
        }), t.d = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({
                hook: t
            }).length && e.before(t, n)
        }, t.c = function(e, n) {
            a("async", function(e) {
                e.forEach(function(e) {
                    return n.apply(void 0, function(e) {
                        if (Array.isArray(e)) return o(e)
                    }(t = e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                        }
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }());
                    var t
                })
            }, e)([])
        }, t.e = function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            c(e).before(function(e, t) {
                t.push(n), e(t)
            })
        };
        var r = n(161),
            i = n.n(r);

        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var a = i()({
                ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
            }),
            c = a.get
    },
    130: function(e, t) {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    },
    131: function(e, t, n) {
        n(14)({
            target: "Set",
            stat: !0
        }, {
            from: n(132)
        })
    },
    132: function(e, t, n) {
        "use strict";
        var s = n(18),
            d = n(22),
            f = n(17);
        e.exports = function(e, t, n) {
            var r, i, o, a, c = arguments.length,
                u = 1 < c ? t : void 0;
            return s(this), (r = void 0 !== u) && s(u), null == e ? new this : (i = [], r ? (o = 0, a = d(u, 2 < c ? n : void 0, 2), f(e, function(e) {
                i.push(a(e, o++))
            })) : f(e, i.push, i), new this(i))
        }
    },
    133: function(e, t, n) {
        n(14)({
            target: "Set",
            stat: !0
        }, { of: n(134)
        })
    },
    134: function(e, t, n) {
        "use strict";
        e.exports = function() {
            for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
            return new this(t)
        }
    },
    135: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(136);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            addAll: function() {
                return o.apply(this, arguments)
            }
        })
    },
    136: function(e, t, n) {
        "use strict";
        var i = n(15),
            o = n(18);
        e.exports = function() {
            for (var e = i(this), t = o(e.add), n = 0, r = arguments.length; n < r; n++) t.call(e, arguments[n]);
            return e
        }
    },
    137: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(138);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            deleteAll: function() {
                return o.apply(this, arguments)
            }
        })
    },
    138: function(e, t, n) {
        "use strict";
        var a = n(15),
            c = n(18);
        e.exports = function() {
            for (var e, t = a(this), n = c(t.delete), r = !0, i = 0, o = arguments.length; i < o; i++) e = n.call(t, arguments[i]), r = r && e;
            return !!r
        }
    },
    139: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(15),
            a = n(22),
            c = n(36),
            u = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            every: function(e, t) {
                var n = o(this),
                    r = c(n),
                    i = a(e, 1 < arguments.length ? t : void 0, 3);
                return !u(r, function(e) {
                    if (!i(e, e, n)) return u.stop()
                }, void 0, !1, !0).stopped
            }
        })
    },
    14: function(e, t, n) {
        "use strict";

        function y(r) {
            function e(e, t, n) {
                if (this instanceof r) {
                    switch (arguments.length) {
                        case 0:
                            return new r;
                        case 1:
                            return new r(e);
                        case 2:
                            return new r(e, t)
                    }
                    return new r(e, t, n)
                }
                return r.apply(this, arguments)
            }
            return e.prototype = r.prototype, e
        }
        var h = n(24),
            m = n(98).f,
            S = n(100),
            A = n(42),
            E = n(22),
            O = n(31),
            T = n(26);
        e.exports = function(e, t) {
            var n, r, i, o, a, c, u, s, d = e.target,
                f = e.global,
                l = e.stat,
                p = e.proto,
                g = f ? h : l ? h[d] : (h[d] || {}).prototype,
                b = f ? A : A[d] || (A[d] = {}),
                v = b.prototype;
            for (i in t) n = !S(f ? i : d + (l ? "." : "#") + i, e.forced) && g && T(g, i), a = b[i], n && (c = e.noTargetGet ? (s = m(g, i)) && s.value : g[i]), o = n && c ? c : t[i], n && typeof a == typeof o || (u = e.bind && n ? E(o, h) : e.wrap && n ? y(o) : p && "function" == typeof o ? E(Function.call, o) : o, (e.sham || o && o.sham || a && a.sham) && O(u, "sham", !0), b[i] = u, p && (T(A, r = d + "Prototype") || O(A, r, {}), A[r][i] = o, e.real && v && !v[i] && O(v, i, o)))
        }
    },
    140: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(27),
            a = n(15),
            c = n(18),
            u = n(39),
            s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            difference: function(e) {
                var t = a(this),
                    n = new(u(t, o("Set")))(t),
                    r = c(n.delete);
                return s(e, function(e) {
                    r.call(n, e)
                }), n
            }
        })
    },
    141: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            c = n(27),
            u = n(15),
            s = n(18),
            d = n(22),
            f = n(39),
            l = n(36),
            p = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            filter: function(e, t) {
                var n = u(this),
                    r = l(n),
                    i = d(e, 1 < arguments.length ? t : void 0, 3),
                    o = new(f(n, c("Set"))),
                    a = s(o.add);
                return p(r, function(e) {
                    i(e, e, n) && a.call(o, e)
                }, void 0, !1, !0), o
            }
        })
    },
    142: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(15),
            a = n(22),
            c = n(36),
            u = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            find: function(e, t) {
                var n = o(this),
                    r = c(n),
                    i = a(e, 1 < arguments.length ? t : void 0, 3);
                return u(r, function(e) {
                    if (i(e, e, n)) return u.stop(e)
                }, void 0, !1, !0).result
            }
        })
    },
    143: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(27),
            a = n(15),
            c = n(18),
            u = n(39),
            s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            intersection: function(e) {
                var t = a(this),
                    n = new(u(t, o("Set"))),
                    r = c(t.has),
                    i = c(n.add);
                return s(e, function(e) {
                    r.call(t, e) && i.call(n, e)
                }), n
            }
        })
    },
    144: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(15),
            a = n(18),
            c = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isDisjointFrom: function(e) {
                var t = o(this),
                    n = a(t.has);
                return !c(e, function(e) {
                    if (!0 === n.call(t, e)) return c.stop()
                }).stopped
            }
        })
    },
    145: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(27),
            a = n(15),
            c = n(18),
            u = n(88),
            s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isSubsetOf: function(e) {
                var t = u(this),
                    n = a(e),
                    r = n.has;
                return "function" != typeof r && (n = new(o("Set"))(e), r = c(n.has)), !s(t, function(e) {
                    if (!1 === r.call(n, e)) return s.stop()
                }, void 0, !1, !0).stopped
            }
        })
    },
    146: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(15),
            a = n(18),
            c = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isSupersetOf: function(e) {
                var t = o(this),
                    n = a(t.has);
                return !c(e, function(e) {
                    if (!1 === n.call(t, e)) return c.stop()
                }).stopped
            }
        })
    },
    147: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(15),
            a = n(36),
            c = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            join: function(e) {
                var t = o(this),
                    n = a(t),
                    r = void 0 === e ? "," : String(e),
                    i = [];
                return c(n, i.push, i, !1, !0), i.join(r)
            }
        })
    },
    148: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            c = n(27),
            u = n(15),
            s = n(18),
            d = n(22),
            f = n(39),
            l = n(36),
            p = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            map: function(e, t) {
                var n = u(this),
                    r = l(n),
                    i = d(e, 1 < arguments.length ? t : void 0, 3),
                    o = new(f(n, c("Set"))),
                    a = s(o.add);
                return p(r, function(e) {
                    a.call(o, i(e, e, n))
                }, void 0, !1, !0), o
            }
        })
    },
    149: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            a = n(15),
            c = n(18),
            u = n(36),
            s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            reduce: function(t, e) {
                var n = a(this),
                    r = u(n),
                    i = arguments.length < 2,
                    o = i ? void 0 : e;
                if (c(t), s(r, function(e) {
                        o = i ? (i = !1, e) : t(o, e, e, n)
                    }, void 0, !1, !0), i) throw TypeError("Reduce of empty set with no initial value");
                return o
            }
        })
    },
    15: function(e, t, n) {
        var r = n(25);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(String(e) + " is not an object");
            return e
        }
    },
    150: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(15),
            a = n(22),
            c = n(36),
            u = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            some: function(e, t) {
                var n = o(this),
                    r = c(n),
                    i = a(e, 1 < arguments.length ? t : void 0, 3);
                return u(r, function(e) {
                    if (i(e, e, n)) return u.stop()
                }, void 0, !1, !0).stopped
            }
        })
    },
    151: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(27),
            a = n(15),
            c = n(18),
            u = n(39),
            s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            symmetricDifference: function(e) {
                var t = a(this),
                    n = new(u(t, o("Set")))(t),
                    r = c(n.delete),
                    i = c(n.add);
                return s(e, function(e) {
                    r.call(n, e) || i.call(n, e)
                }), n
            }
        })
    },
    152: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(16),
            o = n(27),
            a = n(15),
            c = n(18),
            u = n(39),
            s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            union: function(e) {
                var t = a(this),
                    n = new(u(t, o("Set")))(t);
                return s(e, c(n.add), n), n
            }
        })
    },
    153: function(e, t, n) {
        n(87), n(154);
        var r = n(42);
        e.exports = r.Array.from
    },
    154: function(e, t, n) {
        var r = n(14),
            i = n(155);
        r({
            target: "Array",
            stat: !0,
            forced: !n(157)(function(e) {
                Array.from(e)
            })
        }, {
            from: i
        })
    },
    155: function(e, t, n) {
        "use strict";
        var v = n(22),
            y = n(57),
            h = n(80),
            m = n(79),
            S = n(50),
            A = n(156),
            E = n(61);
        e.exports = function(e, t, n) {
            var r, i, o, a, c, u, s = y(e),
                d = "function" == typeof this ? this : Array,
                f = arguments.length,
                l = 1 < f ? t : void 0,
                p = void 0 !== l,
                g = E(s),
                b = 0;
            if (p && (l = v(l, 2 < f ? n : void 0, 2)), null == g || d == Array && m(g))
                for (i = new d(r = S(s.length)); b < r; b++) u = p ? l(s[b], b) : s[b], A(i, b, u);
            else
                for (c = (a = g.call(s)).next, i = new d; !(o = c.call(a)).done; b++) u = p ? h(a, l, [o.value, b], !0) : o.value, A(i, b, u);
            return i.length = b, i
        }
    },
    156: function(e, t, n) {
        "use strict";
        var i = n(55),
            o = n(33),
            a = n(46);
        e.exports = function(e, t, n) {
            var r = i(t);
            r in e ? o.f(e, r, a(0, n)) : e[r] = n
        }
    },
    157: function(e, t, n) {
        var i = n(19)("iterator"),
            o = !1;
        try {
            var r = 0,
                a = {
                    next: function() {
                        return {
                            done: !!r++
                        }
                    },
                    return: function() {
                        o = !0
                    }
                };
            a[i] = function() {
                return this
            }, Array.from(a, function() {
                throw 2
            })
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
                var r = {};
                r[i] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(r)
            } catch (e) {}
            return n
        }
    },
    158: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    },
    159: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, r, i) {
            for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
            return e === i ? n : e
        }
    },
    16: function(e, t) {
        e.exports = !0
    },
    160: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            t.split && (t = t.split("."));
            for (var r, i = 0, o = t.length, a = e; i < o; ++i) r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {}
        }
    },
    161: function(e, t) {
        h.SYNC = 1, h.ASYNC = 2, h.QUEUE = 4;
        var g = "fun-hooks";
        var n = Object.freeze({
                useProxy: !0,
                ready: 0
            }),
            b = new WeakMap,
            r = "2,1,0" === [1].reduce(function(e, t, n) {
                return [e, t, n]
            }, 2).toString() ? Array.prototype.reduce : function(e, t) {
                var n, r = Object(this),
                    i = r.length >>> 0,
                    o = 0;
                if (t) n = t;
                else {
                    for (; o < i && !(o in r);) o++;
                    n = r[o++]
                }
                for (; o < i;) o in r && (n = e(n, r[o], o, r)), o++;
                return n
            };

        function v(e, t) {
            return Array.prototype.slice.call(e, t)
        }
        var y = Object.assign || function(e) {
            return r.call(v(arguments, 1), function(t, n) {
                return n && Object.keys(n).forEach(function(e) {
                    t[e] = n[e]
                }), t
            }, e)
        };

        function h(u) {
            var s, e = {},
                d = [];

            function t(e, t) {
                return "function" == typeof e ? f.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? f.apply(null, arguments) : "object" == typeof e ? function(o, e, a) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                    var c = {},
                        n = ["constructor"];
                    for (;
                        (e = e.filter(function(e) {
                            return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/))
                        })).forEach(function(e) {
                            var t, n = e.split(":"),
                                r = n[0],
                                i = n[1] || "sync";
                            c[r] || (t = o[r], c[r] = o[r] = f(i, t, a ? [a, r] : void 0))
                        }), o = Object.getPrototypeOf(o), t && o;);
                    return c
                }.apply(null, arguments) : void 0
            }

            function l(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return r.call(a, function(t, n, e) {
                    var r = t[n],
                        i = !1;
                    return r || (e === a.length - 1 ? (s || d.push(function() {
                        i || console.warn(g + ": referenced '" + o + "' but it was never created")
                    }), t[n] = p(function(e) {
                        t[n] = e, i = !0
                    })) : t[n] = {})
                }, e)
            }

            function p(r) {
                var o = [],
                    a = [],
                    c = function() {},
                    e = {
                        before: function(e, t) {
                            return n.call(this, o, "before", e, t)
                        },
                        after: function(e, t) {
                            return n.call(this, a, "after", e, t)
                        },
                        getHooks: function(n) {
                            var e = o.concat(a);
                            "object" == typeof n && (e = e.filter(function(t) {
                                return Object.keys(n).every(function(e) {
                                    return t[e] === n[e]
                                })
                            }));
                            try {
                                y(e, {
                                    remove: function() {
                                        return e.forEach(function(e) {
                                            e.remove()
                                        }), this
                                    }
                                })
                            } catch (e) {
                                console.error("error adding `remove` to array, did you modify Array.prototype?")
                            }
                            return e
                        },
                        removeAll: function() {
                            return this.getHooks().remove()
                        }
                    },
                    t = {
                        install: function(e, t, n) {
                            this.type = e, (c = n)(o, a), r && r(t)
                        }
                    };
                return b.set(e.after, t), e;

                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function() {
                            var e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), c(o, a))
                        }
                    };
                    return t.push(i), t.sort(function(e, t) {
                        return t.priority - e.priority
                    }), c(o, a), this
                }
            }

            function f(f, e, t) {
                var n = e.after && b.get(e.after);
                if (n) {
                    if (n.type !== f) throw g + ": recreated hookable with different type";
                    return e
                }
                var r, i, o = t ? l(t) : p(),
                    a = {
                        get: function(e, t) {
                            return o[t] || Reflect.get.apply(Reflect, arguments)
                        }
                    };
                return s || d.push(c), u.useProxy && "function" == typeof Proxy && Proxy.revocable ? i = new Proxy(e, a) : y(i = function() {
                    return a.apply ? a.apply(e, this, v(arguments)) : e.apply(this, arguments)
                }, o), b.get(i.after).install(f, i, function(e, t) {
                    var s, d = [];
                    r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), function(n, r, e) {
                        var i, o = 0,
                            a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();

                        function c(e) {
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }

                        function u(e) {
                            if (d[o]) {
                                var t = v(arguments);
                                return u.bail = c, t.unshift(u), d[o++].apply(r, t)
                            }
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }
                        return d[s] = function() {
                            var e = v(arguments, 1);
                            "async" === f && a && (delete u.bail, e.push(u));
                            var t = n.apply(r, e);
                            "sync" === f && u(t)
                        }, u.apply(null, e), i
                    }) : void 0;

                    function n(e) {
                        d.push(e.hook)
                    }
                    c()
                }), i;

                function c() {
                    !s && ("sync" !== f || u.ready & h.SYNC) && ("async" !== f || u.ready & h.ASYNC) ? "sync" !== f && u.ready & h.QUEUE ? a.apply = function() {
                        var e = arguments;
                        d.push(function() {
                            i.apply(e[1], e[2])
                        })
                    } : a.apply = function() {
                        throw g + ": hooked function not ready"
                    } : a.apply = r
                }
            }
            return (u = y({}, n, u)).ready ? t.ready = function() {
                s = !0,
                    function(e) {
                        for (var t; t = e.shift();) t()
                    }(d)
            } : s = !0, t.get = l, t
        }
        e.exports = h
    },
    17: function(e, t, n) {
        function p(e, t) {
            this.stopped = e, this.result = t
        }
        var g = n(15),
            b = n(79),
            v = n(50),
            y = n(22),
            h = n(61),
            m = n(80);
        (e.exports = function(e, t, n, r, i) {
            var o, a, c, u, s, d, f, l = y(t, n, r ? 2 : 1);
            if (i) o = e;
            else {
                if ("function" != typeof(a = h(e))) throw TypeError("Target is not iterable");
                if (b(a)) {
                    for (c = 0, u = v(e.length); c < u; c++)
                        if ((s = r ? l(g(f = e[c])[0], f[1]) : l(e[c])) && s instanceof p) return s;
                    return new p(!1)
                }
                o = a.call(e)
            }
            for (d = o.next; !(f = d.call(o)).done;)
                if ("object" == typeof(s = m(o, l, f.value, r)) && s && s instanceof p) return s;
            return new p(!1)
        }).stop = function(e) {
            return new p(!0, e)
        }
    },
    18: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        }
    },
    19: function(e, t, n) {
        var r = n(24),
            i = n(73),
            o = n(26),
            a = n(59),
            c = n(75),
            u = n(104),
            s = i("wks"),
            d = r.Symbol,
            f = u ? d : d && d.withoutSetter || a;
        e.exports = function(e) {
            return o(s, e) || (c && o(d, e) ? s[e] = d[e] : s[e] = f("Symbol." + e)), s[e]
        }
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return i
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return a
        });
        var r = "native",
            i = "video",
            o = "banner",
            a = "adpod"
    },
    20: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var y = n(0);
        var h, r = (h = window, function() {
            var e, t = [],
                n = function(e) {
                    try {
                        if (!e.location.ancestorOrigins) return;
                        return e.location.ancestorOrigins
                    } catch (e) {}
                }(h),
                r = !1,
                i = 0,
                o = !1,
                a = !1;
            do {
                var c, u, s = g,
                    d = a,
                    f = void 0,
                    l = !1,
                    p = null,
                    a = !1,
                    g = g ? g.parent : h;
                try {
                    f = g.location.href || null
                } catch (e) {
                    l = !0
                }
                if (l)
                    if (d) {
                        var b = s.context;
                        try {
                            u = p = b.sourceUrl, o = !0, g === h.top && (r = !0), b.canonicalUrl && (e = b.canonicalUrl)
                        } catch (e) {}
                    } else {
                        Object(y.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                        try {
                            var v = s.document.referrer;
                            v && (p = v, g === h.top && (r = !0))
                        } catch (e) {}!p && n && n[i - 1] && (p = n[i - 1]), p && !o && (u = p)
                    }
                else f && (u = p = f, o = !1, g === h.top && (r = !0, (c = function(e) {
                    try {
                        var t = e.querySelector("link[rel='canonical']");
                        if (null !== t) return t.href
                    } catch (e) {}
                    return null
                }(g.document)) && (e = c))), g.context && g.context.sourceUrl && (a = !0);
                t.push(p), i++
            } while (g !== h.top);
            return t.reverse(), {
                referer: u || null,
                reachedTop: r,
                isAmp: o,
                numIframes: i - 1,
                stack: t,
                canonicalUrl: e || null
            }
        })
    },
    21: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs")
    },
    219: function(e, t, n) {
        n(220);
        var r = n(52);
        e.exports = r("Array", "findIndex")
    },
    22: function(e, t, n) {
        var o = n(18);
        e.exports = function(r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
                case 0:
                    return function() {
                        return r.call(i)
                    };
                case 1:
                    return function(e) {
                        return r.call(i, e)
                    };
                case 2:
                    return function(e, t) {
                        return r.call(i, e, t)
                    };
                case 3:
                    return function(e, t, n) {
                        return r.call(i, e, t, n)
                    }
            }
            return function() {
                return r.apply(i, arguments)
            }
        }
    },
    220: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(56).findIndex,
            o = n(51),
            a = n(60),
            c = "findIndex",
            u = !0,
            s = a(c);
        c in [] && Array(1)[c](function() {
            u = !1
        }), r({
            target: "Array",
            proto: !0,
            forced: u || !s
        }, {
            findIndex: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), o(c)
    },
    227: function(e, t, n) {
        "use strict";
        t.a = function() {
            window.addEventListener("message", c, !1)
        };
        var r = n(8),
            g = n.n(r),
            b = n(37),
            i = n(5),
            v = (n.n(i), n(0)),
            y = n(23),
            o = n(10),
            h = n.n(o),
            m = n(11),
            a = n(12),
            S = n.n(a),
            A = i.EVENTS.BID_WON;

        function c(e) {
            var t, n, r, i, o, a, c, u, s, d = e.message ? "message" : "data",
                f = {};
            try {
                f = JSON.parse(e[d])
            } catch (e) {
                return
            }
            if (f && f.adId) {
                var l = h()(y.a.getBidsReceived(), function(e) {
                    return e.adId === f.adId
                });
                if (l && "Prebid Request" === f.message && (n = e, r = (t = l).adId, i = t.ad, o = t.adUrl, a = t.width, c = t.height, u = t.renderer, s = t.cpm, Object(m.c)(u) ? Object(m.b)(u, t) : r && (function(e) {
                        var o = e.adId,
                            a = e.adUnitCode,
                            r = e.width,
                            i = e.height;

                        function c(e) {
                            var t, n, r = (t = o, n = a, window.googletag ? function(n) {
                                    return h()(window.googletag.pubads().getSlots(), function(t) {
                                        return h()(t.getTargetingKeys(), function(e) {
                                            return S()(t.getTargeting(e), n)
                                        })
                                    }).getSlotElementId()
                                }(t) : window.apntag ? function(e) {
                                    var t = window.apntag.getTag(e);
                                    return t && t.targetId
                                }(n) : n),
                                i = document.getElementById(r);
                            return i && i.querySelector(e)
                        }["div", "iframe"].forEach(function(e) {
                            var t, n = c(e + ':not([style*="display: none"])');
                            n ? ((t = n.style).width = r + "px", t.height = i + "px") : Object(v.logWarn)("Unable to locate matching page element for adUnitCode ".concat(a, ".  Can't resize it to ad's dimensions.  Please review setup."))
                        })
                    }(t), n.source.postMessage(JSON.stringify({
                        message: "Prebid Response",
                        ad: Object(v.replaceAuctionPrice)(i, s),
                        adUrl: Object(v.replaceAuctionPrice)(o, s),
                        adId: r,
                        width: a,
                        height: c
                    }), n.origin)), y.a.addWinningBid(l), g.a.emit(A, l)), l && "Prebid Native" === f.message) {
                    if ("assetRequest" === f.action) {
                        var p = Object(b.c)(f, l);
                        return void e.source.postMessage(JSON.stringify(p), e.origin)
                    }
                    if ("click" === Object(b.b)(f, l)) return;
                    y.a.addWinningBid(l), g.a.emit(A, l)
                }
            }
        }
    },
    228: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u))
            } catch (e) {}
            t && p(t, !0)
        };
        var r, i, o = n(3),
            a = n(0),
            c = n(41),
            u = "pbjs:debugging";

        function s(e) {
            Object(a.logMessage)("DEBUG: " + e)
        }

        function d(e) {
            Object(a.logWarn)("DEBUG: " + e)
        }

        function f(e) {
            r = function(e, t, n) {
                if (b(this.bidders, n.bidderCode)) return void d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach(function(e) {
                    g(e, n.bidderCode, t) || v(e, n, "bidder")
                });
                e(t, n)
            }.bind(e), c.c.before(r, 5), i = function(e, t) {
                var r = this,
                    n = t.filter(function(e) {
                        return !b(r.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), !1)
                    });
                Array.isArray(r.bidRequests) && n.forEach(function(n) {
                    r.bidRequests.forEach(function(t) {
                        n.bids.forEach(function(e) {
                            g(t, n.bidderCode, e.adUnitCode) || v(t, e, "bidRequest")
                        })
                    })
                });
                e(n)
            }.bind(e), c.e.before(i, 5)
        }

        function l() {
            c.c.getHooks({
                hook: r
            }).remove(), c.e.getHooks({
                hook: i
            }).remove()
        }

        function p(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            o.b.setConfig({
                debug: !0
            }), l(), f(e), s("bidder overrides enabled".concat(n ? " from session" : ""))
        }

        function g(e, t, n) {
            return e.bidder && e.bidder !== t || !(!e.adUnitCode || e.adUnitCode === n)
        }

        function b(e, t) {
            return Array.isArray(e) && -1 === e.indexOf(t)
        }

        function v(n, e, r) {
            return Object.keys(n).filter(function(e) {
                return -1 === ["adUnitCode", "bidder"].indexOf(e)
            }).reduce(function(e, t) {
                return s("bidder overrides changed '".concat(e.adUnitCode, "/").concat(e.bidderCode, "' ").concat(r, ".").concat(t, " from '").concat(e[t], ".js' to '").concat(n[t], "'")), e[t] = n[t], e
            }, e)
        }

        function y(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e))
                } catch (e) {}
                p(e)
            } else {
                l(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u)
                } catch (e) {}
            }
        }
        o.b.getConfig("debugging", function(e) {
            return y(e.debugging)
        })
    },
    23: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u
        });
        var r = n(0),
            s = n(41),
            i = n(10),
            o = n.n(i),
            a = n(5);
        var d, c, u = (d = [], (c = {}).addWinningBid = function(t) {
            var e = o()(d, function(e) {
                return e.getAuctionId() === t.auctionId
            });
            e ? (t.status = a.BID_STATUS.RENDERED, e.addWinningBid(t)) : Object(r.logWarn)("Auction not found when adding winning bid")
        }, c.getAllWinningBids = function() {
            return d.map(function(e) {
                return e.getWinningBids()
            }).reduce(r.flatten, [])
        }, c.getBidsRequested = function() {
            return d.map(function(e) {
                return e.getBidRequests()
            }).reduce(r.flatten, [])
        }, c.getNoBids = function() {
            return d.map(function(e) {
                return e.getNoBids()
            }).reduce(r.flatten, [])
        }, c.getBidsReceived = function() {
            return d.map(function(e) {
                if (e.getAuctionStatus() === s.a) return e.getBidsReceived()
            }).reduce(r.flatten, []).filter(function(e) {
                return e
            })
        }, c.getAdUnits = function() {
            return d.map(function(e) {
                return e.getAdUnits()
            }).reduce(r.flatten, [])
        }, c.getAdUnitCodes = function() {
            return d.map(function(e) {
                return e.getAdUnitCodes()
            }).reduce(r.flatten, []).filter(r.uniques)
        }, c.createAuction = function(e) {
            var t, n = e.adUnits,
                r = e.adUnitCodes,
                i = e.callback,
                o = e.cbTimeout,
                a = e.labels,
                c = e.auctionId,
                u = Object(s.k)({
                    adUnits: n,
                    adUnitCodes: r,
                    callback: i,
                    cbTimeout: o,
                    labels: a,
                    auctionId: c
                });
            return t = u, d.push(t), u
        }, c.findBidByAdId = function(t) {
            return o()(d.map(function(e) {
                return e.getBidsReceived()
            }).reduce(r.flatten, []), function(e) {
                return e.adId === t
            })
        }, c.getStandardBidderAdServerTargeting = function() {
            return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING]
        }, c.setStatusForBids = function(e, t) {
            var n, r = c.findBidByAdId(e);
            r && (r.status = t), !r || t !== a.BID_STATUS.BID_TARGETING_SET || (n = o()(d, function(e) {
                return e.getAuctionId() === r.auctionId
            })) && n.setBidTargeting(r)
        }, c.getLastAuctionId = function() {
            return d.length && d[d.length - 1].getAuctionId()
        }, c)
    },
    24: function(n, e, t) {
        (function(e) {
            function t(e) {
                return e && e.Math == Math && e
            }
            n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || Function("return this")()
        }).call(e, t(35))
    },
    25: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    26: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    27: function(e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : void 0
        }
        var i = n(42),
            o = n(24);
        e.exports = function(e, t) {
            return arguments.length < 2 ? r(i[e]) || r(o[e]) : i[e] && i[e][t] || o[e] && o[e][t]
        }
    },
    28: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c
        }), n.d(t, "a", function() {
            return u
        }), t.d = function(e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t),
                r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
                i = r && Object(o.deepAccess)(r, "context");
            return s(e, n, r, i)
        }, n.d(t, "c", function() {
            return s
        });
        n(9);
        var o = n(0),
            i = n(3),
            r = n(12),
            a = (n.n(r), n(13)),
            c = "outstream",
            u = "instream";
        var s = Object(a.b)("sync", function(e, t, n, r) {
            return !t || n && r !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !!(e.renderer || t.renderer || n.renderer)
        }, "checkVideoBidSetup")
    },
    29: function(e, t, n) {
        var r = n(30);
        e.exports = !r(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })
    },
    3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return y
        }), n.d(t, "b", function() {
            return C
        });
        var r = n(45),
            i = n(10),
            a = n.n(i),
            o = n(12),
            c = n.n(o),
            u = n(77),
            s = n.n(u),
            d = n(0);

        function f() {
            return (f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var l = n(89),
            p = n(0),
            g = n(5),
            b = "TRUE" === p.getParameterByName(g.DEBUG_MODE).toUpperCase(),
            v = window.location.origin,
            y = "random",
            h = {};
        h[y] = !0, h.fixed = !0;
        var m = y,
            S = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            };
        var A, E, O, T, I, C = (T = [], I = null, j(), {
            getCurrentBidder: function() {
                return I
            },
            getConfig: function() {
                if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? p.deepAccess(w(), e) : w()
                }
                return function(e, t) {
                    var n = t;
                    if ("string" != typeof e && (n = e, e = "*"), "function" == typeof n) {
                        var r = {
                            topic: e,
                            callback: n
                        };
                        return T.push(r),
                            function() {
                                T.splice(T.indexOf(r), 1)
                            }
                    }
                    p.logError("listener must be a function")
                }.apply(void 0, arguments)
            },
            setConfig: function(n) {
                var e, r;
                p.isPlainObject(n) ? (e = Object.keys(n), r = {}, e.forEach(function(e) {
                    var t = n[e];
                    p.isPlainObject(A[e]) && p.isPlainObject(t) && (t = f({}, A[e], t)), r[e] = E[e] = t
                }), _(r)) : p.logError("setConfig options must be an object")
            },
            setDefaults: function(e) {
                p.isPlainObject(A) ? (f(A, e), f(E, e)) : p.logError("defaults must be an object")
            },
            resetConfig: j,
            runWithBidder: B,
            callbackWithBidder: function(o) {
                return function(i) {
                    return function() {
                        if ("function" == typeof i) {
                            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return B(o, (e = p.bind).call.apply(e, [i, this].concat(n)))
                        }
                        p.logWarn("config.callbackWithBidder callback is not a function")
                    }
                }
            },
            setBidderConfig: function(r) {
                try {
                    ! function(e) {
                        if (!p.isPlainObject(e)) throw "setBidderConfig bidder options must be an object";
                        if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                        if (!p.isPlainObject(e.config)) throw "setBidderConfig bidder options must contain a config object"
                    }(r), r.bidders.forEach(function(n) {
                        O[n] || (O[n] = {}), Object.keys(r.config).forEach(function(e) {
                            var t = r.config[e];
                            p.isPlainObject(t) ? O[n][e] = f({}, O[n][e] || {}, t) : O[n][e] = t
                        })
                    })
                } catch (e) {
                    p.logError(e)
                }
            },
            getBidderConfig: function() {
                return O
            }
        });

        function j() {
            A = {};
            var n = {
                _debug: b,
                get debug() {
                    return this._debug
                },
                set debug(e) {
                    this._debug = e
                },
                _bidderTimeout: 3e3,
                get bidderTimeout() {
                    return this._bidderTimeout
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e
                },
                _publisherDomain: v,
                get publisherDomain() {
                    return this._publisherDomain
                },
                set publisherDomain(e) {
                    this._publisherDomain = e
                },
                _priceGranularity: S.MEDIUM,
                set priceGranularity(e) {
                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : S.MEDIUM : p.isPlainObject(e) && (this._customPriceBucket = e, this._priceGranularity = S.CUSTOM, p.logMessage("Using custom price granularity")))
                },
                get priceGranularity() {
                    return this._priceGranularity
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                    return this._customPriceBucket
                },
                _mediaTypePriceGranularity: {},
                get mediaTypePriceGranularity() {
                    return this._mediaTypePriceGranularity
                },
                set mediaTypePriceGranularity(n) {
                    var r = this;
                    this._mediaTypePriceGranularity = Object.keys(n).reduce(function(e, t) {
                        return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : p.isPlainObject(n) && (e[t] = n[t], p.logMessage("Using custom price granularity for ".concat(t))) : p.logWarn("Invalid price granularity for media type: ".concat(t)), e
                    }, {})
                },
                _sendAllBids: !0,
                get enableSendAllBids() {
                    return this._sendAllBids
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e
                },
                _useBidCache: !1,
                get useBidCache() {
                    return this._useBidCache
                },
                set useBidCache(e) {
                    this._useBidCache = e
                },
                _deviceAccess: !0,
                get deviceAccess() {
                    return this._deviceAccess
                },
                set deviceAccess(e) {
                    this._deviceAccess = e
                },
                _bidderSequence: m,
                get bidderSequence() {
                    return this._bidderSequence
                },
                set bidderSequence(e) {
                    h[e] ? this._bidderSequence = e : p.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                },
                _timeoutBuffer: 400,
                get timeoutBuffer() {
                    return this._timeoutBuffer
                },
                set timeoutBuffer(e) {
                    this._timeoutBuffer = e
                },
                _disableAjaxTimeout: !1,
                get disableAjaxTimeout() {
                    return this._disableAjaxTimeout
                },
                set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e
                },
                _auctionOptions: {},
                get auctionOptions() {
                    return this._auctionOptions
                },
                set auctionOptions(e) {
                    ! function(e) {
                        if (!p.isPlainObject(e)) return p.logWarn("Auction Options must be an object"), !1;
                        for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                            var r = n[t];
                            if ("secondaryBidders" !== r) return p.logWarn("Auction Options given an incorrect param: ".concat(r)), !1;
                            if ("secondaryBidders" === r) {
                                if (!p.isArray(e[r])) return p.logWarn("Auction Options ".concat(r, " must be of type Array")), !1;
                                if (!e[r].every(p.isStr)) return p.logWarn("Auction Options ".concat(r, " must be only string")), !1
                            }
                        }
                        return !0
                    }(e) || (this._auctionOptions = e)
                }
            };

            function i(t) {
                return a()(Object.keys(S), function(e) {
                    return t === S[e]
                })
            }

            function o(e) {
                if (e) {
                    if ("string" == typeof e) i(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                    else if (p.isPlainObject(e) && !Object(r.b)(e)) return void p.logError("Invalid custom price value passed to `setPriceGranularity()`");
                    return 1
                }
                p.logError("Prebid Error: no value passed to `setPriceGranularity()`")
            }
            E && _(Object.keys(E).reduce(function(e, t) {
                return E[t] !== n[t] && (e[t] = n[t] || {}), e
            }, {})), E = n, O = {}
        }

        function w() {
            if (I && O && p.isPlainObject(O[I])) {
                var n = O[I],
                    e = new s.a(Object.keys(E).concat(Object.keys(n)));
                return l(e).reduce(function(e, t) {
                    return void 0 === n[t] ? e[t] = E[t] : void 0 !== E[t] && p.isPlainObject(n[t]) ? e[t] = Object(d.mergeDeep)({}, E[t], n[t]) : e[t] = n[t], e
                }, {})
            }
            return f({}, E)
        }

        function _(i) {
            var t = Object.keys(i);
            T.filter(function(e) {
                return c()(t, e.topic)
            }).forEach(function(e) {
                var t, n, r;
                e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t))
            }), T.filter(function(e) {
                return "*" === e.topic
            }).forEach(function(e) {
                return e.callback(i)
            })
        }

        function B(e, t) {
            I = e;
            try {
                return t()
            } finally {
                I = null
            }
        }
    },
    30: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    31: function(e, t, n) {
        var r = n(29),
            i = n(33),
            o = n(46);
        e.exports = r ? function(e, t, n) {
            return i.f(e, t, o(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    33: function(e, t, n) {
        var r = n(29),
            i = n(71),
            o = n(15),
            a = n(55),
            c = Object.defineProperty;
        t.f = r ? c : function(e, t, n) {
            if (o(e), t = a(t, !0), o(n), i) try {
                return c(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
        }
    },
    34: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return new r(e, t)
        };
        var i = n(0);

        function r(e, t) {
            var n = t && t.src || "client",
                r = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function() {
                switch (r) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            }(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function() {
                return r
            }, this.getSize = function() {
                return this.width + "x" + this.height
            }
        }
    },
    35: function(e, t) {
        var n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    355: function(e, t, n) {
        var r = n(356);
        e.exports = r
    },
    356: function(e, t, n) {
        n(357);
        var r = n(52);
        e.exports = r("String", "includes")
    },
    357: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(358),
            o = n(49);
        r({
            target: "String",
            proto: !0,
            forced: !n(360)("includes")
        }, {
            includes: function(e, t) {
                return !!~String(o(this)).indexOf(i(e), 1 < arguments.length ? t : void 0)
            }
        })
    },
    358: function(e, t, n) {
        var r = n(359);
        e.exports = function(e) {
            if (r(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        }
    },
    359: function(e, t, n) {
        var r = n(25),
            i = n(48),
            o = n(19)("match");
        e.exports = function(e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
        }
    },
    36: function(e, t, n) {
        var r = n(16),
            i = n(88);
        e.exports = r ? i : function(e) {
            return Set.prototype.values.call(e)
        }
    },
    360: function(e, t, n) {
        var r = n(19)("match");
        e.exports = function(t) {
            var n = /./;
            try {
                "/./" [t](n)
            } catch (e) {
                try {
                    return n[r] = !1, "/./" [t](n)
                } catch (e) {}
            }
            return !1
        }
    },
    37: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), t.g = function(e) {
            if (e && e.type && function(e) {
                    return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), !1)
                }(e.type)) return d[e.type];
            return e
        }, t.f = function(t, e) {
            var n = Object(a.getBidRequest)(t.requestId, e);
            if (!n) return !1;
            if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
            if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
            if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter(function(e) {
                    return r[e].required
                }),
                o = Object.keys(t.native).filter(function(e) {
                    return t.native[e]
                });
            return i.every(function(e) {
                return c()(o, e)
            })
        }, t.b = function(e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(a.triggerPixel), e.action
        }, t.d = function(r, i) {
            var o = {};
            return Object.keys(r.native).forEach(function(e) {
                var t = u.NATIVE_KEYS[e],
                    n = f(r.native[e]);
                Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId)), t && n && (o[t] = n)
            }), o
        }, t.c = function(e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return e.assets.forEach(function(e) {
                var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e),
                    n = f(r.native[t]);
                i.assets.push({
                    key: t,
                    value: n
                })
            }), i
        };
        var a = n(0),
            r = n(12),
            c = n.n(r);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var u = n(5),
            o = [],
            s = Object.keys(u.NATIVE_KEYS).map(function(e) {
                return u.NATIVE_KEYS[e]
            }),
            d = {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            };

        function f(e) {
            return "object" === i(e) && e.url ? e.url : e
        }
    },
    38: function(e, t) {
        e.exports = {}
    },
    39: function(e, t, n) {
        var i = n(15),
            o = n(18),
            a = n(19)("species");
        e.exports = function(e, t) {
            var n, r = i(e).constructor;
            return void 0 === r || null == (n = i(r)[a]) ? t : o(n)
        }
    },
    4: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.b = i;
        var l = n(3);

        function p() {
            return (p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var b = n(0),
            v = 4,
            r = i();

        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                d = e.request,
                f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"),
                        a = document.createElement("a");
                    a.href = e;
                    var c, u = "object" === g(t) && null !== t ? t : {
                        success: function() {
                            b.logMessage("xhr success")
                        },
                        error: function(e) {
                            b.logError("xhr error", null, e)
                        }
                    };
                    "function" == typeof t && (u.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function() {
                        var e;
                        i.readyState === v && ("function" == typeof f && f(a.origin), 200 <= (e = i.status) && e < 300 || 304 === e ? u.success(i.responseText, i) : u.error(i.statusText, i))
                    }, l.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                        b.logError("  xhr timeout after ", i.timeout, "ms")
                    }), "GET" === o && n && (p((c = b.parseUrl(e, r)).search, n), e = b.buildUrl(c)), i.open(o, e, !0), l.b.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), b._each(r.customHeaders, function(e, t) {
                        i.setRequestHeader(t, e)
                    }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    b.logError("xhr construction", e)
                }
            }
        }
    },
    40: function(e, t, n) {
        "use strict";
        t.a = function(r, e, t) {
            if (!e || !r) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, e)) return void o.logError("".concat(e, " not whitelisted for loading external JavaScript"));
            if (a[r]) return t && "function" == typeof t && (a[r].loaded ? t() : a[r].callbacks.push(t)), a[r].tag;
            a[r] = {
                loaded: !1,
                tag: null,
                callbacks: []
            }, t && "function" == typeof t && a[r].callbacks.push(t);
            return o.logWarn("module ".concat(e, " is loading external JavaScript")),
                function(e, t) {
                    var n = document.createElement("script");
                    n.type = "text/javascript", n.async = !0, (a[r].tag = n).readyState ? n.onreadystatechange = function() {
                        "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
                    } : n.onload = function() {
                        t()
                    };
                    return n.src = e, o.insertElement(n), n
                }(r, function() {
                    a[r].loaded = !0;
                    try {
                        for (var e = 0; e < a[r].callbacks.length; e++) a[r].callbacks[e]()
                    } catch (e) {
                        o.logError("Error executing callback", "adloader.js:loadExternalScript", e)
                    }
                })
        };
        var r = n(12),
            i = n.n(r),
            o = n(0),
            a = {},
            c = ["criteo", "outstream", "adagio", "browsi"]
    },
    41: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return L
        }), n.d(t, "a", function() {
            return F
        }), t.k = function(e) {
            var t, i, b, v, o = e.adUnits,
                n = e.adUnitCodes,
                r = e.callback,
                a = e.cbTimeout,
                c = e.labels,
                u = e.auctionId,
                y = o,
                s = c,
                d = n,
                h = [],
                f = [],
                l = [],
                p = u || P.generateUUID(),
                g = r,
                m = a,
                S = [],
                A = new Set;

            function E() {
                return {
                    auctionId: p,
                    timestamp: t,
                    auctionEnd: i,
                    auctionStatus: b,
                    adUnits: y,
                    adUnitCodes: d,
                    labels: s,
                    bidderRequests: h,
                    noBids: l,
                    bidsReceived: f,
                    winningBids: S,
                    timeout: m
                }
            }

            function O(n, e) {
                var r, t;
                e && clearTimeout(v), void 0 === i && (r = [], n && (P.logMessage("Auction ".concat(p, " timedOut")), t = A, (r = h.map(function(e) {
                    return (e.bids || []).filter(function(e) {
                        return !t.has(e.bidder)
                    })
                }).reduce(j.flatten, []).map(function(e) {
                    return {
                        bidId: e.bidId,
                        bidder: e.bidder,
                        adUnitCode: e.adUnitCode,
                        auctionId: e.auctionId
                    }
                })).length && M.emit(G.EVENTS.BID_TIMEOUT, r)), b = F, i = Date.now(), M.emit(G.EVENTS.AUCTION_END, E()), Q(y, function() {
                    try {
                        var e;
                        null != g && (e = f.filter(P.bind.call(j.adUnitsFilter, this, d)).reduce(ee, {}), g.apply(pbjs, [e, n, p]), g = null)
                    } catch (e) {
                        P.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        r.length && q.callTimedOutBidders(o, r, m);
                        var t = B.b.getConfig("userSync") || {};
                        t.enableOverride || N(t.syncDelay)
                    }
                }))
            }

            function T() {
                P.logInfo("Bids Received for Auction with id: ".concat(p), f), b = F, O(!1, !0)
            }

            function I(e) {
                A.add(e)
            }

            function C(n) {
                var f = this;
                n.forEach(function(e) {
                    var t;
                    t = e, h = h.concat(t)
                });
                var l = {},
                    e = {
                        bidRequests: n,
                        run: function() {
                            var e, t;
                            e = O.bind(null, !0), t = setTimeout(e, m), v = t, b = L, M.emit(G.EVENTS.AUCTION_INIT, E());
                            var r, i, o, a, c, u, s = (r = T, i = f, o = 0, a = !1, c = new Set, u = {}, {
                                addBidResponse: function(e, t) {
                                    u[t.requestId] = !0, o++;
                                    var n = function(e) {
                                        var t = e.adUnitCode,
                                            n = e.bid,
                                            r = e.bidderRequest,
                                            i = e.auctionId,
                                            o = r.start,
                                            a = D({}, n, {
                                                auctionId: i,
                                                responseTimestamp: Object(j.timestamp)(),
                                                requestTimestamp: o,
                                                cpm: parseFloat(n.cpm) || 0,
                                                bidder: n.bidderCode,
                                                adUnitCode: t
                                            });
                                        a.timeToRespond = a.responseTimestamp - a.requestTimestamp, M.emit(G.EVENTS.BID_ADJUSTMENT, a);
                                        var c = r.bids && U()(r.bids, function(e) {
                                                return e.adUnitCode == t
                                            }),
                                            u = c && c.renderer,
                                            s = a.mediaType,
                                            d = c && c.mediaTypes && c.mediaTypes[s],
                                            f = d && d.renderer,
                                            l = null;
                                        f && f.url && f.render ? l = f : !u || !u.url || u.backupOnly && Object(j.isBoolean)(u.backupOnly) && n.renderer || (l = u), l && (a.renderer = _.a.install({
                                            url: l.url
                                        }), a.renderer.setRender(l.render));
                                        var p = Z(n.mediaType, c, B.b.getConfig("mediaTypePriceGranularity")),
                                            g = Object(w.a)(a.cpm, "object" === k(p) ? p : B.b.getConfig("customPriceBucket"), B.b.getConfig("currency.granularityMultiplier"));
                                        return a.pbLg = g.low, a.pbMg = g.med, a.pbHg = g.high, a.pbAg = g.auto, a.pbDg = g.dense, a.pbCg = g.custom, a
                                    }({
                                        adUnitCode: e,
                                        bid: t,
                                        bidderRequest: this,
                                        auctionId: i.getAuctionId()
                                    });
                                    "video" === n.mediaType ? function(e, t, n, r) {
                                        var i = !0,
                                            o = Object(j.getBidRequest)(t.requestId, [n]),
                                            a = o && Object(j.deepAccess)(o, "mediaTypes.video"),
                                            c = a && Object(j.deepAccess)(a, "context");
                                        B.b.getConfig("cache.url") && c !== R.b && (t.videoCacheKey ? t.vastUrl || (P.logError("videoCacheKey specified but not required vastUrl for video bid"), i = !1) : (i = !1, X(e, t, r, o))), i && ($(e, t), r())
                                    }(i, n, this, d) : ($(i, n), d())
                                },
                                adapterDone: function() {
                                    var t, e = i.getBidRequests(),
                                        n = B.b.getConfig("auctionOptions");
                                    c.add(this), !n || P.isEmpty(n) || (t = n.secondaryBidders) && !e.every(function(e) {
                                        return x()(t, e.bidderCode)
                                    }) && (e = e.filter(function(e) {
                                        return !x()(t, e.bidderCode)
                                    })), a = e.every(function(e) {
                                        return c.has(e)
                                    }), this.bids.forEach(function(e) {
                                        u[e.bidId] || (i.addNoBid(e), M.emit(G.EVENTS.NO_BID, e))
                                    }), a && 0 === o && r()
                                }
                            });

                            function d() {
                                o--, a && 0 === o && r()
                            }
                            q.callBids(y, n, function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                J.apply({
                                    dispatch: s.addBidResponse,
                                    bidderRequest: this
                                }, t)
                            }, s.adapterDone, {
                                request: function(e, t) {
                                    g(V, t), g(l, e), H[e] || (H[e] = {
                                        SRA: !0,
                                        origin: t
                                    }), 1 < l[e] && (H[e].SRA = !1)
                                },
                                done: function(e) {
                                    V[e]--, K[0] && p(K[0]) && K.shift()
                                }
                            }, m, I)
                        }
                    };

                function p(e) {
                    var r = !0,
                        i = B.b.getConfig("maxRequestsPerOrigin") || z;
                    return e.bidRequests.some(function(e) {
                        var t = 1,
                            n = void 0 !== e.src && e.src === G.S2S.SRC ? "s2s" : e.bidderCode;
                        return H[n] && (!1 === H[n].SRA && (t = Math.min(e.bids.length, i)), V[H[n].origin] + t > i && (r = !1)), !r
                    }), r && e.run(), r
                }

                function g(e, t) {
                    void 0 === e[t] ? e[t] = 1 : e[t]++
                }
                p(e) || (P.logWarn("queueing auction due to limited endpoint capacity"), K.push(e))
            }
            return {
                addBidReceived: function(e) {
                    f = f.concat(e)
                },
                addNoBid: function(e) {
                    l = l.concat(e)
                },
                executeCallback: O,
                callBids: function() {
                    b = W, t = Date.now();
                    var e = q.makeBidRequests(y, t, p, m, s);
                    P.logInfo("Bids Requested for Auction with id: ".concat(p), e), e.length < 1 ? (P.logWarn("No valid bid requests returned for auction"), T()) : Y.call({
                        dispatch: C,
                        context: this
                    }, e)
                },
                addWinningBid: function(e) {
                    S = S.concat(e), q.callBidWonBidder(e.bidder, e, o)
                },
                setBidTargeting: function(e) {
                    q.callSetTargetingBidder(e.bidder, e)
                },
                getWinningBids: function() {
                    return S
                },
                getTimeout: function() {
                    return m
                },
                getAuctionId: function() {
                    return p
                },
                getAuctionStatus: function() {
                    return b
                },
                getAdUnits: function() {
                    return y
                },
                getAdUnitCodes: function() {
                    return d
                },
                getBidRequests: function() {
                    return h
                },
                getBidsReceived: function() {
                    return f
                },
                getNoBids: function() {
                    return l
                }
            }
        }, n.d(t, "c", function() {
            return J
        }), n.d(t, "e", function() {
            return Y
        }), t.g = d, t.d = $, n.d(t, "f", function() {
            return X
        }), n.d(t, "i", function() {
            return f
        }), n.d(t, "h", function() {
            return l
        }), t.j = p;
        var j = n(0),
            w = n(45),
            a = n(37),
            o = n(93),
            _ = n(11),
            B = n(3),
            r = n(43),
            i = n(13),
            c = n(10),
            U = n.n(c),
            u = n(12),
            x = n.n(u),
            R = n(28),
            s = n(2);

        function k(e) {
            return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function D() {
            return (D = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var N = r.a.syncUsers,
            P = n(0),
            q = n(9).default,
            M = n(8),
            G = n(5),
            W = "started",
            L = "inProgress",
            F = "completed";
        M.on(G.EVENTS.BID_ADJUSTMENT, function(e) {
            ! function(e) {
                var t, n = e.bidderCode,
                    r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                    r = t(e.cpm, D({}, e))
                } catch (e) {
                    P.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= r && (e.cpm = r)
            }(e)
        });
        var z = 4,
            V = {},
            H = {},
            K = [];
        var J = Object(i.b)("async", function(e, t) {
                this.dispatch.call(this.bidderRequest, e, t)
            }, "addBidResponse"),
            Y = Object(i.b)("sync", function(e) {
                this.dispatch.call(this.context, e)
            }, "addBidderRequests"),
            Q = Object(i.b)("async", function(e, t) {
                t && t()
            }, "bidsBackCallback");

        function d(e, t) {
            t.timeToRespond > e.getTimeout() + B.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function $(e, t) {
            var n = e.getBidRequests(),
                r = U()(n, function(e) {
                    return e.bidderCode === t.bidderCode
                });
            ! function(t, e) {
                var n; {
                    var r;
                    t.bidderCode && (0 < t.cpm || t.dealId) && (r = U()(e.bids, function(e) {
                        return e.adUnitCode === t.adUnitCode
                    }), n = function(e, t, n) {
                        if (!t) return {};
                        var r = {},
                            i = pbjs.bidderSettings; {
                            var o;
                            i && (o = p(t.mediaType, e, n), g(r, o, t), e && i[e] && i[e][G.JSON_MAPPING.ADSERVER_TARGETING] && (g(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting))
                        }
                        t.native && (r = D({}, r, Object(a.d)(t, n)));
                        return r
                    }(t.bidderCode, t, r))
                }
                t.adserverTargeting = D(t.adserverTargeting || {}, n)
            }(t, r), M.emit(G.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), d(e, t)
        }
        var X = Object(i.b)("async", function(n, r, i, e) {
            Object(o.b)([r], function(e, t) {
                e ? (P.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), d(n, r)) : "" === t[0].uuid ? (P.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), d(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), $(n, r), i())
            }, e)
        }, "callPrebidCache");

        function Z(e, t, n) {
            if (e && n) {
                if (e === s.d) {
                    var r = Object(j.deepAccess)(t, "mediaTypes.".concat(s.d, ".context"), "instream");
                    if (n["".concat(s.d, "-").concat(r)]) return n["".concat(s.d, "-").concat(r)]
                }
                return n[e]
            }
        }
        var f = function(e, t) {
                var n = Z(e, t, B.b.getConfig("mediaTypePriceGranularity"));
                return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : B.b.getConfig("priceGranularity")
            },
            l = function(t) {
                return function(e) {
                    return t === G.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === G.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === G.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === G.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === G.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === G.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }
            };

        function p(e, t, n) {
            function r(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function(e) {
                        return t(e)
                    } : function(e) {
                        return Object(j.getValue)(e, t)
                    }
                }
            }
            var i, o, a = G.TARGETING_KEYS,
                c = f(e, n),
                u = pbjs.bidderSettings;
            return u[G.JSON_MAPPING.BD_SETTING_STANDARD] || (u[G.JSON_MAPPING.BD_SETTING_STANDARD] = {}), u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING] || (u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING] = [r(a.BIDDER, "bidderCode"), r(a.AD_ID, "adId"), r(a.PRICE_BUCKET, l(c)), r(a.SIZE, "size"), r(a.DEAL, "dealId"), r(a.SOURCE, "source"), r(a.FORMAT, "mediaType")]), "video" === e && (i = u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING], [a.UUID, a.CACHE_ID].forEach(function(t) {
                void 0 === U()(i, function(e) {
                    return e.key === t
                }) && i.push(r(t, "videoCacheKey"))
            }), !B.b.getConfig("cache.url") || t && !1 === P.deepAccess(u, "".concat(t, ".sendStandardTargeting")) || (o = Object(j.parseUrl)(B.b.getConfig("cache.url")), void 0 === U()(i, function(e) {
                return e.key === a.CACHE_HOST
            }) && i.push(r(a.CACHE_HOST, function(e) {
                return P.deepAccess(e, "adserverTargeting.".concat(a.CACHE_HOST)) ? e.adserverTargeting[a.CACHE_HOST] : o.hostname
            })))), u[G.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function g(r, i, o) {
            var e = i[G.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), P._each(e, function(e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && P.logWarn("The key: " + t + " is getting ovewritten"), P.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    P.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== G.TARGETING_KEYS.DEAL || !P.isEmptyStr(n) && null != n ? r[t] = n : P.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            }), r
        }

        function ee(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    42: function(e, t) {
        e.exports = {}
    },
    43: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return S
        });
        var a = n(0),
            r = n(3),
            i = n(12),
            o = n.n(i),
            c = n(7);

        function u(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function d() {
            return (d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        r.b.setDefaults({
            userSync: a.deepClone({
                syncEnabled: !0,
                filterSettings: {
                    image: {
                        bidders: "*",
                        filter: "include"
                    }
                },
                syncsPerBidder: 5,
                syncDelay: 3e3,
                auctionDelay: 0
            })
        });
        var f = Object(c.a)("usersync");
        var l, p, g, b, v, y, h, m = !a.isSafariBrowser() && f.cookiesAreEnabled(),
            S = (l = {
                config: r.b.getConfig("userSync"),
                browserSupportsCookies: m
            }, p = {}, g = A(), b = new Set, y = {
                image: !0,
                iframe: !(v = {})
            }, h = l.config, r.b.getConfig("userSync", function(e) {
                var t;
                e.userSync && (t = e.userSync.filterSettings, a.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                    bidders: "*",
                    filter: "include"
                }))), h = d(h, e.userSync)
            }), p.registerSync = function(e, t, n) {
                return b.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : h.syncEnabled && a.isArray(g[e]) ? t ? 0 !== h.syncsPerBidder && Number(v[t]) >= h.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : p.canBidderRegisterSync(e, t) ? (g[e].push([t, n]), (r = v)[i = t] ? r[i] += 1 : r[i] = 1, void(v = r)) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'));
                var r, i
            }, p.syncUsers = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(E, Number(e));
                E()
            }, p.triggerUserSyncs = function() {
                h.enableOverride && p.syncUsers()
            }, p.canBidderRegisterSync = function(e, t) {
                return !h.filterSettings || !T(e, t)
            }, p);

        function A() {
            return {
                image: [],
                iframe: []
            }
        }

        function E() {
            if (h.syncEnabled && l.browserSupportsCookies) {
                try {
                    ! function() {
                        if (!y.image) return;
                        O(g.image, function(e) {
                            var t = u(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r)
                        })
                    }(),
                    function() {
                        if (!y.iframe) return;
                        O(g.iframe, function(e) {
                            var t = u(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r)
                        })
                    }()
                } catch (e) {
                    return a.logError("Error firing user syncs", e)
                }
                g = A()
            }
        }

        function O(e, t) {
            a.shuffle(e).forEach(function(e) {
                t(e), b.add(e[0])
            })
        }

        function T(e, t) {
            var n = h.filterSettings;
            if (function(e, t) {
                    if (e.all && e[t]) return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                    var n = e.all ? e.all : e[t],
                        r = e.all ? "all" : t;
                    if (!n) return !1;
                    var i = n.filter,
                        o = n.bidders;
                    if (i && "include" !== i && "exclude" !== i) return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
                    return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function(e) {
                        return a.isStr(e) && "*" !== e
                    })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                }(n, e)) {
                y[e] = !0;
                var r = n.all ? n.all : n[e],
                    i = "*" === r.bidders ? [t] : r.bidders;
                return {
                    include: function(e, t) {
                        return !o()(e, t)
                    },
                    exclude: function(e, t) {
                        return o()(e, t)
                    }
                }[r.filter || "include"](i, t)
            }
        }
    },
    44: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return f
        });
        var S = n(0),
            A = n(3),
            E = n(37),
            r = n(23),
            i = n(91),
            o = n(2),
            a = n(12),
            O = n.n(a);

        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function I(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function C(e) {
            return function(e) {
                if (Array.isArray(e)) return c(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var j = n(0),
            w = n(5),
            _ = [],
            B = Object.keys(w.TARGETING_KEYS).map(function(e) {
                return w.TARGETING_KEYS[e]
            }),
            u = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(S.timestamp)()
            },
            s = function(e) {
                return e && (e.status && !O()([w.BID_STATUS.RENDERED], e.status) || !e.status)
            };

        function U(e, r, t) {
            var i = 2 < arguments.length && void 0 !== t ? t : 0,
                o = [],
                a = A.b.getConfig("sendBidsControl.dealPrioritization"),
                c = Object(S.groupBy)(e, "adUnitCode");
            return Object.keys(c).forEach(function(e) {
                var t = [],
                    n = Object(S.groupBy)(c[e], "bidderCode");
                Object.keys(n).forEach(function(e) {
                    return t.push(n[e].reduce(r))
                }), 0 < i ? (t = a ? t.sort(x(!0)) : t.sort(function(e, t) {
                    return t.cpm - e.cpm
                }), o.push.apply(o, C(t.slice(0, i)))) : o.push.apply(o, C(t))
            }), o
        }

        function x(e) {
            var n = 0 < arguments.length && void 0 !== e && e;
            return function(e, t) {
                return void 0 !== e.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === e.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adserverTargeting.hb_pb - e.adserverTargeting.hb_pb
            }
        }
        var R, k, d, f = (R = r.a, d = {}, (k = {}).setLatestAuctionForAdUnit = function(e, t) {
            d[e] = t
        }, k.resetPresetTargeting = function(e, t) {
            var n, i;
            Object(S.isGptPubadsDefined)() && (n = N(e), i = R.getAdUnits().filter(function(e) {
                return O()(n, e.code)
            }), window.googletag.pubads().getSlots().forEach(function(n) {
                var r = j.isFn(t) && t(n);
                _.forEach(function(t) {
                    i.forEach(function(e) {
                        (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || j.isFn(r) && r(e.code)) && n.setTargeting(t, null)
                    })
                })
            }))
        }, k.resetPresetTargetingAST = function(e) {
            N(e).forEach(function(e) {
                var t, n, r = window.apntag.getTag(e);
                r && r.keywords && (t = Object.keys(r.keywords), n = {}, t.forEach(function(e) {
                    O()(_, e.toLowerCase()) || (n[e] = r.keywords[e])
                }), window.apntag.modifyTag(e, {
                    keywords: n
                }))
            })
        }, k.getAllTargeting = function(e) {
            var t, n, r, i, o, a, c, u, s, d, f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : P(),
                l = N(e),
                p = (c = l, u = f, s = k.getWinningBids(c, u), d = q(), (s = s.map(function(o) {
                    return I({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function(e) {
                        return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === d.indexOf(e)
                    }).reduce(function(e, t) {
                        var n = [o.adserverTargeting[t]],
                            r = I({}, t.substring(0, 20), n);
                        if (t !== w.TARGETING_KEYS.DEAL) return [].concat(C(e), [r]);
                        var i = I({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                        return [].concat(C(e), [r, i])
                    }, []))
                })).concat((a = l, f.filter(function(e) {
                    return O()(a, e.adUnitCode)
                }).map(function(e) {
                    return T({}, e)
                }).reduce(M, []).map(G).filter(function(e) {
                    return e
                }))).concat(A.b.getConfig("enableSendAllBids") ? (n = l, r = f, i = B.concat(E.a), o = A.b.getConfig("sendBidsControl.bidLimit"), U(r, S.getHighestCpm, o).map(function(t) {
                    if (D(t, n)) return I({}, t.adUnitCode, W(t, i.filter(function(e) {
                        return void 0 !== t.adserverTargeting[e]
                    })))
                }).filter(function(e) {
                    return e
                })) : function(e, t) {
                    if (!0 !== A.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                    var n = B.concat(E.a);
                    return U(t, S.getHighestCpm).map(function(t) {
                        if (t.dealId && D(t, e)) return I({}, t.adUnitCode, W(t, n.filter(function(e) {
                            return void 0 !== t.adserverTargeting[e]
                        })))
                    }).filter(function(e) {
                        return e
                    })
                }(l, f)).concat((t = l, R.getAdUnits().filter(function(e) {
                    return O()(t, e.code) && g(e)
                }).map(function(e) {
                    return I({}, e.code, (t = g(e), Object.keys(t).map(function(e) {
                        return I({}, e, j.isArray(t[e]) ? t[e] : t[e].split(","))
                    })));
                    var t
                }))));

            function g(e) {
                return Object(S.deepAccess)(e, w.JSON_MAPPING.ADSERVER_TARGETING)
            }
            p.map(function(t) {
                Object.keys(t).map(function(e) {
                    t[e].map(function(e) {
                        -1 === _.indexOf(Object.keys(e)[0]) && (_ = Object.keys(e).concat(_))
                    })
                })
            });
            var b = A.b.getConfig("targetingControls.allowTargetingKeys");
            Array.isArray(b) && 0 < b.length && (p = function(e, r) {
                var i = T({}, w.TARGETING_KEYS, w.NATIVE_KEYS),
                    o = Object.keys(i),
                    a = {};
                Object(S.logInfo)("allowTargetingKeys - allowed keys [ ".concat(r.map(function(e) {
                    return i[e]
                }).join(", "), " ]")), e.map(function(e) {
                    var t = Object.keys(e)[0],
                        n = e[t].filter(function(e) {
                            var n = Object.keys(e)[0],
                                t = 0 === o.filter(function(e) {
                                    return 0 === n.indexOf(i[e])
                                }).length || r.find(function(e) {
                                    var t = i[e];
                                    return 0 === n.indexOf(t)
                                });
                            return a[n] = !t, t
                        });
                    e[t] = n
                });
                var t = Object.keys(a).filter(function(e) {
                    return a[e]
                });
                return Object(S.logInfo)("allowTargetingKeys - removed keys [ ".concat(t.join(", "), " ]")), e.filter(function(e) {
                    return 0 < e[Object.keys(e)[0]].length
                })
            }(p, b)), p = p.map(function(e) {
                return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                    return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                }).reduce(function(e, t) {
                    return T(t, e)
                }, {}))
            }).reduce(function(e, t) {
                var n = Object.keys(t)[0];
                return e[n] = T({}, e[n], t[n]), e
            }, {});
            var v, y, h, m = A.b.getConfig("targetingControls.auctionKeyMaxChars");
            return m && (Object(S.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(m, " characters.  Running checks on auction keys...")), v = p, y = m, h = Object(S.deepClone)(v), p = Object.keys(h).map(function(e) {
                return {
                    adUnitCode: e,
                    adserverTargeting: h[e]
                }
            }).sort(x()).reduce(function(e, t, n, r) {
                var i, o = (i = t.adserverTargeting, Object.keys(i).reduce(function(e, t) {
                    return e + "".concat(t, "%3d").concat(encodeURIComponent(i[t]), "%26")
                }, ""));
                n + 1 === r.length && (o = o.slice(0, -3));
                var a = t.adUnitCode,
                    c = o.length;
                return c <= y ? (y -= c, Object(S.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(y), h[a]), e[a] = h[a]) : Object(S.logWarn)("The following keys for adUnitCode '".concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c, ", the current allotted amount was ").concat(y, ".\n"), h[a]), n + 1 === r.length && 0 === Object.keys(e).length && Object(S.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
            }, {})), l.forEach(function(e) {
                p[e] || (p[e] = {})
            }), p
        }, k.setTargetingForGPT = function(i, e) {
            window.googletag.pubads().getSlots().forEach(function(r) {
                Object.keys(i).filter((e || Object(S.isAdUnitCodeMatchingSlot))(r)).forEach(function(n) {
                    return Object.keys(i[n]).forEach(function(t) {
                        var e = i[n][t];
                        "string" == typeof e && (e = e.split(",")), (e = 1 < e.length ? [e] : e).map(function(e) {
                            return j.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e
                        }).forEach(function(e) {
                            r.setTargeting(t, e)
                        })
                    })
                })
            })
        }, k.getWinningBids = function(e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : P(),
                t = N(e);
            return n.filter(function(e) {
                return O()(t, e.adUnitCode)
            }).filter(function(e) {
                return 0 < e.cpm
            }).map(function(e) {
                return e.adUnitCode
            }).filter(S.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.adUnitCode === t ? e : null
                }).reduce(S.getHighestCpm)
            })
        }, k.setTargetingForAst = function(e) {
            var r = k.getAllTargeting(e);
            try {
                k.resetPresetTargetingAST(e)
            } catch (e) {
                j.logError("unable to reset targeting for AST" + e)
            }
            Object.keys(r).forEach(function(n) {
                return Object.keys(r[n]).forEach(function(e) {
                    var t;
                    j.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), (j.isStr(r[n][e]) || j.isArray(r[n][e])) && (t = {}, e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                        overrideKeyValue: !0
                    }))
                })
            })
        }, k.isApntagDefined = function() {
            if (window.apntag && j.isFn(window.apntag.setKeywords)) return !0
        }, k);

        function D(e, t) {
            return e.adserverTargeting && t && (j.isArray(t) && O()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)
        }

        function N(e) {
            return "string" == typeof e ? [e] : j.isArray(e) ? e : R.getAdUnitCodes() || []
        }

        function P() {
            var e = R.getBidsReceived();
            return A.b.getConfig("useBidCache") || (e = e.filter(function(e) {
                return d[e.adUnitCode] === e.auctionId
            })), U(e = e.filter(function(e) {
                return Object(S.deepAccess)(e, "video.context") !== o.a
            }).filter(function(e) {
                return "banner" !== e.mediaType || Object(i.c)([e.width, e.height])
            }).filter(s).filter(u), S.getOldestHighestCpmBid)
        }

        function q() {
            return R.getStandardBidderAdServerTargeting().map(function(e) {
                return e.key
            }).concat(B).filter(S.uniques)
        }

        function M(r, i, e, t) {
            return Object.keys(i.adserverTargeting).filter(l()).forEach(function(e) {
                var t, n;
                r.length && r.filter((n = e, function(e) {
                    return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
                })).forEach((t = e, function(e) {
                    j.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(S.uniques), delete i.adserverTargeting[t]
                }))
            }), r.push(i), r
        }

        function l() {
            var t = q().concat(E.a);
            return function(e) {
                return -1 === t.indexOf(e)
            }
        }

        function G(t) {
            return I({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(l()).map(function(e) {
                return I({}, e.substring(0, 20), [t.adserverTargeting[e]])
            }))
        }

        function W(t, e) {
            return e.map(function(e) {
                return I({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
            })
        }
    },
    45: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return h
        });
        var r = n(10),
            v = n.n(r),
            i = n(0),
            y = 2,
            o = {
                buckets: [{
                    max: 5,
                    increment: .5
                }]
            },
            a = {
                buckets: [{
                    max: 20,
                    increment: .1
                }]
            },
            c = {
                buckets: [{
                    max: 20,
                    increment: .01
                }]
            },
            u = {
                buckets: [{
                    max: 3,
                    increment: .01
                }, {
                    max: 8,
                    increment: .05
                }, {
                    max: 20,
                    increment: .5
                }]
            },
            s = {
                buckets: [{
                    max: 5,
                    increment: .05
                }, {
                    max: 10,
                    increment: .1
                }, {
                    max: 20,
                    increment: .5
                }]
            };

        function d(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : f(e, o, n),
                med: "" === r ? "" : f(e, a, n),
                high: "" === r ? "" : f(e, c, n),
                auto: "" === r ? "" : f(e, s, n),
                dense: "" === r ? "" : f(e, u, n),
                custom: "" === r ? "" : f(e, t, n)
            }
        }

        function f(n, e, r) {
            var i = "";
            if (!h(e)) return i;
            var t, o, a, c, u, s, d, f, l, p = e.buckets.reduce(function(e, t) {
                    return e.max > t.max ? e : t
                }, {
                    max: 0
                }),
                g = 0,
                b = v()(e.buckets, function(e) {
                    if (n > p.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = y), i = (e.max * r).toFixed(t)
                    } else {
                        if (n <= e.max * r && g * r <= n) return e.min = g, e;
                        g = e.max
                    }
                });
            return b && (t = n, a = r, c = void 0 !== (o = b).precision ? o.precision : y, u = o.increment * a, s = o.min * a, d = Math.pow(10, c + 2), f = (t * d - s * d) / (u * d), l = Math.floor(f) * u + s, i = (l = Number(l.toFixed(10))).toFixed(c)), i
        }

        function h(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function(e) {
                e.max && e.increment || (t = !1)
            }), t
        }
    },
    46: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    47: function(e, t, n) {
        var r = n(70),
            i = n(49);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    48: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    49: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        }
    },
    498: function(e, t, n) {
        var r = n(499);
        e.exports = r
    },
    499: function(e, t, n) {
        n(500);
        var r = n(42);
        e.exports = r.Number.isInteger
    },
    5: function(e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                BEFORE_REQUEST_BIDS: "beforeRequestBids",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed",
                TCF2_ENFORCEMENT: "tcf2Enforcement",
                AUCTION_DEBUG: "auctionDebug"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                privacyIcon: "hb_native_privicon",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice"
            },
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            },
            BID_STATUS: {
                BID_TARGETING_SET: "targetingSet",
                RENDERED: "rendered",
                BID_REJECTED: "bidRejected"
            }
        }
    },
    50: function(e, t, n) {
        var r = n(58),
            i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    500: function(e, t, n) {
        n(14)({
            target: "Number",
            stat: !0
        }, {
            isInteger: n(501)
        })
    },
    501: function(e, t, n) {
        var r = n(25),
            i = Math.floor;
        e.exports = function(e) {
            return !r(e) && isFinite(e) && i(e) === e
        }
    },
    51: function(e, t) {
        e.exports = function() {}
    },
    52: function(e, t, n) {
        var r = n(27);
        e.exports = r
    },
    53: function(e, t) {
        e.exports = {}
    },
    54: function(e, t, n) {
        var r, i, o, a, c, u, s, d, f = n(113),
            l = n(24),
            p = n(25),
            g = n(31),
            b = n(26),
            v = n(65),
            y = n(53),
            h = l.WeakMap;
        s = f ? (r = new h, i = r.get, o = r.has, a = r.set, c = function(e, t) {
            return a.call(r, e, t), t
        }, u = function(e) {
            return i.call(r, e) || {}
        }, function(e) {
            return o.call(r, e)
        }) : (y[d = v("state")] = !0, c = function(e, t) {
            return g(e, d, t), t
        }, u = function(e) {
            return b(e, d) ? e[d] : {}
        }, function(e) {
            return b(e, d)
        }), e.exports = {
            set: c,
            get: u,
            has: s,
            enforce: function(e) {
                return s(e) ? u(e) : c(e, {})
            },
            getterFor: function(n) {
                return function(e) {
                    var t;
                    if (!p(e) || (t = u(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                    return t
                }
            }
        }
    },
    55: function(e, t, n) {
        var i = n(25);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    56: function(e, t, n) {
        function r(p) {
            var g = 1 == p,
                b = 2 == p,
                v = 3 == p,
                y = 4 == p,
                h = 6 == p,
                m = 5 == p || h;
            return function(e, t, n, r) {
                for (var i, o, a = E(e), c = A(a), u = S(t, n, 3), s = O(c.length), d = 0, f = r || T, l = g ? f(e, s) : b ? f(e, 0) : void 0; d < s; d++)
                    if ((m || d in c) && (o = u(i = c[d], d, a), p))
                        if (g) l[d] = o;
                        else if (o) switch (p) {
                    case 3:
                        return !0;
                    case 5:
                        return i;
                    case 6:
                        return d;
                    case 2:
                        I.call(l, i)
                } else if (y) return !1;
                return h ? -1 : v || y ? y : l
            }
        }
        var S = n(22),
            A = n(70),
            E = n(57),
            O = n(50),
            T = n(101),
            I = [].push;
        e.exports = {
            forEach: r(0),
            map: r(1),
            filter: r(2),
            some: r(3),
            every: r(4),
            find: r(5),
            findIndex: r(6)
        }
    },
    57: function(e, t, n) {
        var r = n(49);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    58: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    59: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
        }
    },
    60: function(e, t, n) {
        function a(e) {
            throw e
        }
        var c = n(29),
            u = n(30),
            s = n(26),
            d = Object.defineProperty,
            f = {};
        e.exports = function(e, t) {
            if (s(f, e)) return f[e];
            var n = [][e],
                r = !!s(t = t || {}, "ACCESSORS") && t.ACCESSORS,
                i = s(t, 0) ? t[0] : a,
                o = s(t, 1) ? t[1] : void 0;
            return f[e] = !!n && !u(function() {
                if (r && !c) return !0;
                var e = {
                    length: -1
                };
                r ? d(e, 1, {
                    enumerable: !0,
                    get: a
                }) : e[1] = 1, n.call(e, i, o)
            })
        }
    },
    61: function(e, t, n) {
        var r = n(62),
            i = n(38),
            o = n(19)("iterator");
        e.exports = function(e) {
            if (null != e) return e[o] || e["@@iterator"] || i[r(e)]
        }
    },
    62: function(e, t, n) {
        var r = n(63),
            i = n(48),
            o = n(19)("toStringTag"),
            a = "Arguments" == i(function() {
                return arguments
            }());
        e.exports = r ? i : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    },
    63: function(e, t, n) {
        var r = {};
        r[n(19)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
    },
    64: function(e, t, n) {
        var o = n(63),
            a = n(33).f,
            c = n(31),
            u = n(26),
            s = n(112),
            d = n(19)("toStringTag");
        e.exports = function(e, t, n, r) {
            var i;
            e && (i = n ? e : e.prototype, u(i, d) || a(i, d, {
                configurable: !0,
                value: t
            }), r && !o && c(i, "toString", s))
        }
    },
    65: function(e, t, n) {
        var r = n(73),
            i = n(59),
            o = r("keys");
        e.exports = function(e) {
            return o[e] || (o[e] = i(e))
        }
    },
    66: function(e, t, n) {
        "use strict";

        function y() {
            return this
        }
        var h = n(14),
            m = n(121),
            S = n(86),
            A = n(123),
            E = n(64),
            O = n(31),
            T = n(84),
            r = n(19),
            I = n(16),
            C = n(38),
            i = n(85),
            j = i.IteratorPrototype,
            w = i.BUGGY_SAFARI_ITERATORS,
            _ = r("iterator"),
            B = "values",
            U = "entries";
        e.exports = function(e, t, n, r, i, o, a) {
            m(n, t, r);

            function c(e) {
                if (e === i && b) return b;
                if (!w && e in p) return p[e];
                switch (e) {
                    case "keys":
                    case B:
                    case U:
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this)
                }
            }
            var u, s, d, f = t + " Iterator",
                l = !1,
                p = e.prototype,
                g = p[_] || p["@@iterator"] || i && p[i],
                b = !w && g || c(i),
                v = "Array" == t && p.entries || g;
            if (v && (u = S(v.call(new e)), j !== Object.prototype && u.next && (I || S(u) === j || (A ? A(u, j) : "function" != typeof u[_] && O(u, _, y)), E(u, f, !0, !0), I && (C[f] = y))), i == B && g && g.name !== B && (l = !0, b = function() {
                    return g.call(this)
                }), I && !a || p[_] === b || O(p, _, b), C[t] = b, i)
                if (s = {
                        values: c(B),
                        keys: o ? b : c("keys"),
                        entries: c(U)
                    }, a)
                    for (d in s) !w && !l && d in p || T(p, d, s[d]);
                else h({
                    target: t,
                    proto: !0,
                    forced: w || l
                }, s);
            return s
        }
    },
    67: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n(0),
            c = {};

        function i(e, t, n) {
            var r, i, o, a = (i = n, o = c[r = e] = c[r] || {
                bidders: {}
            }, i ? o.bidders[i] = o.bidders[i] || {} : o);
            return a[t] = (a[t] || 0) + 1, a[t]
        }
        var o = {
            incrementRequestsCounter: function(e) {
                return i(e, "requestsCounter")
            },
            incrementBidderRequestsCounter: function(e, t) {
                return i(e, "requestsCounter", t)
            },
            incrementBidderWinsCounter: function(e, t) {
                return i(e, "winsCounter", t)
            },
            getRequestsCounter: function(e) {
                return Object(r.deepAccess)(c, "".concat(e, ".requestsCounter")) || 0
            },
            getBidderRequestsCounter: function(e, t) {
                return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".requestsCounter")) || 0
            },
            getBidderWinsCounter: function(e, t) {
                return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".winsCounter")) || 0
            }
        }
    },
    68: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "adUnitSetupChecks", function() {
            return z
        }), n.d(t, "checkAdUnitSetup", function() {
            return V
        }), t.executeCallbacks = J;
        var r = n(21),
            i = n(0),
            o = n(227),
            a = n(43),
            d = n(3),
            m = n(23),
            f = n(44),
            c = n(13),
            u = n(228),
            s = n(12),
            l = n.n(s),
            p = n(67),
            S = n(11),
            g = n(34),
            b = n(7);

        function v(e) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var h = Object(r.a)(),
            A = n(5),
            E = n(0),
            O = n(9).default,
            T = n(8),
            I = a.a.triggerUserSyncs,
            C = A.EVENTS,
            j = C.ADD_AD_UNITS,
            w = C.BID_WON,
            _ = C.REQUEST_BIDS,
            B = C.SET_TARGETING,
            U = C.AD_RENDER_FAILED,
            x = A.AD_RENDER_FAILED_REASON,
            R = x.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            k = x.NO_AD,
            D = x.EXCEPTION,
            N = x.CANNOT_FIND_AD,
            P = x.MISSING_DOC_OR_ADID,
            q = {
                bidWon: function(e) {
                    var t = m.a.getBidsRequested().map(function(e) {
                        return e.bids.map(function(e) {
                            return e.adUnitCode
                        })
                    }).reduce(i.flatten).filter(i.uniques);
                    return !!E.contains(t, e) || void E.logError('The "' + e + '" placement is not defined.')
                }
            };

        function M(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }

        function G(e, t) {
            var n = [];
            return E.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function(e) {
                return Object(i.isArrayOfNums)(e, 2)
            }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)), n
        }

        function W(e) {
            var t = E.deepClone(e),
                n = t.mediaTypes.banner,
                r = G(n.sizes);
            return 0 < r.length ? (n.sizes = r, t.sizes = r) : (E.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), delete t.mediaTypes.banner), t
        }

        function L(e) {
            var t, n, r = E.deepClone(e),
                i = r.mediaTypes.video;
            return i.playerSize && (t = "number" == typeof i.playerSize[0] ? 2 : 1, 0 < (n = G(i.playerSize, t)).length ? (2 == t && E.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), i.playerSize = n, r.sizes = n) : (E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete r.mediaTypes.video.playerSize)), r
        }

        function F(e) {
            var t = E.deepClone(e),
                n = t.mediaTypes.native;
            return n.image && n.image.sizes && !Array.isArray(n.image.sizes) && (E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete t.mediaTypes.native.image.sizes), n.image && n.image.aspect_ratios && !Array.isArray(n.image.aspect_ratios) && (E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete t.mediaTypes.native.image.aspect_ratios), n.icon && n.icon.sizes && !Array.isArray(n.icon.sizes) && (E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete t.mediaTypes.native.icon.sizes), t
        }
        Object(u.a)(), h.bidderSettings = h.bidderSettings || {}, h.libLoaded = !0, h.version = "v4.15.0", E.logInfo("Prebid.js v4.15.0 loaded"), h.adUnits = h.adUnits || [], h.triggerUserSyncs = I;
        var z = {
                validateBannerMediaType: W,
                validateVideoMediaType: L,
                validateNativeMediaType: F,
                validateSizes: G
            },
            V = Object(c.b)("sync", function(e) {
                var c = [];
                return e.forEach(function(e) {
                    var t, n, r, i, o = e.mediaTypes,
                        a = e.bids;
                    a && E.isArray(a) ? o && 0 !== Object.keys(o).length ? (o.banner && (t = W(e)), o.video && (n = L(t || e)), o.native && (r = F(n || (t || e))), i = y({}, t, n, r), c.push(i)) : E.logError("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed.")) : E.logError("Detected adUnit.code '".concat(e.code, "' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."))
                }), c
            }, "checkAdUnitSetup");

        function H(e) {
            var n = m.a[e]().filter(E.bind.call(i.adUnitsFilter, this, m.a.getAdUnitCodes())),
                r = m.a.getLastAuctionId();
            return n.map(function(e) {
                return e.adUnitCode
            }).filter(i.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.auctionId === r && e.adUnitCode === t
                })
            }).filter(function(e) {
                return e && e[0] && e[0].adUnitCode
            }).map(function(e) {
                return t = {}, n = e[0].adUnitCode, r = {
                    bids: e
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t;
                var t, n, r
            }).reduce(function(e, t) {
                return y(e, t)
            }, {})
        }

        function K(e) {
            var t = e.reason,
                n = e.message,
                r = e.bid,
                i = e.id,
                o = {
                    reason: t,
                    message: n
                };
            r && (o.bid = r), i && (o.adId = i), E.logError(n), T.emit(U, o)
        }

        function J(e, t) {
            function n(e) {
                for (var t; t = e.shift();) t()
            }
            n(b.c), n(Y), e.call(this, t)
        }
        h.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = h.getAdserverTargetingForAdUnitCode(e);
                return E.transformAdServerTargetingObj(t)
            }
            E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, h.getAdserverTargetingForAdUnitCode = function(e) {
            return h.getAdserverTargeting(e)[e]
        }, h.getAdserverTargeting = function(e) {
            return E.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.a.getAllTargeting(e)
        }, h.getNoBids = function() {
            return E.logInfo("Invoking pbjs.getNoBids", arguments), H("getNoBids")
        }, h.getBidResponses = function() {
            return E.logInfo("Invoking pbjs.getBidResponses", arguments), H("getBidsReceived")
        }, h.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: m.a.getBidsReceived().filter(function(e) {
                    return e.adUnitCode === t
                })
            }
        }, h.setTargetingForGPTAsync = function(e, t) {
            var n;
            E.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(i.isGptPubadsDefined)() ? (n = f.a.getAllTargeting(e), f.a.resetPresetTargeting(e, t), f.a.setTargetingForGPT(n, t), Object.keys(n).forEach(function(t) {
                Object.keys(n[t]).forEach(function(e) {
                    "hb_adid" === e && m.a.setStatusForBids(n[t][e], A.BID_STATUS.BID_TARGETING_SET)
                })
            }), T.emit(B, n)) : E.logError("window.googletag is not defined on the page")
        }, h.setTargetingForAst = function(e) {
            E.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.a.isApntagDefined() ? (f.a.setTargetingForAst(e), T.emit(B, f.a.getAllTargeting())) : E.logError("window.apntag is not defined on the page")
        }, h.renderAd = function(e, t, n) {
            if (E.logInfo("Invoking pbjs.renderAd", arguments), E.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var r, i, o, a, c, u, s, d, f, l, p, g, b, v = m.a.findBidByAdId(t);
                v ? (v.ad = E.replaceAuctionPrice(v.ad, v.cpm), v.adUrl = E.replaceAuctionPrice(v.adUrl, v.cpm), n && n.clickThrough && (r = n.clickThrough, v.ad = E.replaceClickThrough(v.ad, r), v.adUrl = E.replaceClickThrough(v.adUrl, r)), m.a.addWinningBid(v), T.emit(w, v), i = v.height, o = v.width, a = v.ad, c = v.mediaType, u = v.adUrl, s = v.renderer, d = document.createComment("Creative ".concat(v.creativeId, " served by ").concat(v.bidder, " Prebid.js Header Bidding")), E.insertElement(d, e, "body"), Object(S.c)(s) ? Object(S.b)(s, v) : e === document && !E.inIframe() || "video" === c ? (f = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document."), K({
                    reason: R,
                    message: f,
                    bid: v,
                    id: t
                })) : a ? (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/") && ((l = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(l, 10) < 67 && e.open("text/html", "replace")), e.write(a), e.close(), M(e, o, i), E.callBurl(v)) : u ? ((p = E.createInvisibleIframe()).height = i, p.width = o, p.style.display = "inline", p.style.overflow = "hidden", p.src = u, E.insertElement(p, e, "body"), M(e, o, i), E.callBurl(v)) : (g = "Error trying to write ad. No ad for bid response id: ".concat(t), K({
                    reason: k,
                    message: g,
                    bid: v,
                    id: t
                }))) : (b = "Error trying to write ad. Cannot find ad by given id : ".concat(t), K({
                    reason: N,
                    message: b,
                    id: t
                }))
            } catch (e) {
                var y = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                K({
                    reason: D,
                    message: y,
                    id: t
                })
            } else {
                var h = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                K({
                    reason: P,
                    message: h,
                    id: t
                })
            }
        }, h.removeAdUnit = function(e) {
            E.logInfo("Invoking pbjs.removeAdUnit", arguments), e ? (E.isArray(e) ? e : [e]).forEach(function(e) {
                for (var t = h.adUnits.length - 1; 0 <= t; t--) h.adUnits[t].code === e && h.adUnits.splice(t, 1)
            }) : h.adUnits = []
        }, h.requestBids = Object(c.b)("async", function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels,
                a = e.auctionId;
            T.emit(_);
            var c = n || d.b.getConfig("bidderTimeout"),
                r = r || h.adUnits;
            if (E.logInfo("Invoking pbjs.requestBids", arguments), r = V(r), i && i.length ? r = r.filter(function(e) {
                    return l()(i, e.code)
                }) : i = r && r.map(function(e) {
                    return e.code
                }), r.forEach(function(i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map(function(e) {
                            return e.bidder
                        }),
                        a = O.bidderRegistry,
                        t = d.b.getConfig("s2sConfig"),
                        n = t && t.bidders,
                        r = n ? e.filter(function(e) {
                            return !l()(n, e)
                        }) : e;
                    i.transactionId = E.generateUUID(), r.forEach(function(t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some(function(e) {
                            return l()(r, e)
                        }) ? p.a.incrementBidderRequestsCounter(i.code, t) : (E.logWarn(E.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function(e) {
                            return e.bidder !== t
                        }))
                    }), p.a.incrementRequestsCounter(i.code)
                }), r && 0 !== r.length) {
                var u = m.a.createAuction({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: t,
                        cbTimeout: c,
                        labels: o,
                        auctionId: a
                    }),
                    s = r.length;
                15 < s && E.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), i.forEach(function(e) {
                    return f.a.setLatestAuctionForAdUnit(e, u.getAuctionId())
                }), u.callBids()
            } else if (E.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                E.logError("Error executing bidsBackHandler", null, e)
            }
        }), h.requestBids.before(J, 49), h.addAdUnits = function(e) {
            E.logInfo("Invoking pbjs.addAdUnits", arguments), E.isArray(e) ? h.adUnits.push.apply(h.adUnits, e) : "object" === v(e) && h.adUnits.push(e), T.emit(j)
        }, h.onEvent = function(e, t, n) {
            E.logInfo("Invoking pbjs.onEvent", arguments), E.isFn(t) ? !n || q[e].call(null, n) ? T.on(e, t, n) : E.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, h.offEvent = function(e, t, n) {
            E.logInfo("Invoking pbjs.offEvent", arguments), n && !q[e].call(null, n) || T.off(e, t, n)
        }, h.getEvents = function() {
            return E.logInfo("Invoking pbjs.getEvents"), T.getEvents()
        }, h.registerBidAdapter = function(e, t) {
            E.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                O.registerBidAdapter(e(), t)
            } catch (e) {
                E.logError("Error registering bidder adapter : " + e.message)
            }
        }, h.registerAnalyticsAdapter = function(e) {
            E.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                O.registerAnalyticsAdapter(e)
            } catch (e) {
                E.logError("Error registering analytics adapter : " + e.message)
            }
        }, h.createBid = function(e) {
            return E.logInfo("Invoking pbjs.createBid", arguments), Object(g.a)(e)
        };
        var Y = [],
            Q = Object(c.b)("async", function(e) {
                e && !E.isEmpty(e) ? (E.logInfo("Invoking pbjs.enableAnalytics for: ", e), O.enableAnalytics(e)) : E.logError("pbjs.enableAnalytics should be called with option {}")
            }, "enableAnalyticsCb");

        function $(e) {
            e.forEach(function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    E.logError("Error processing command :", "prebid.js", e)
                }
            })
        }
        h.enableAnalytics = function(e) {
            Y.push(Q.bind(this, e))
        }, h.aliasBidder = function(e, t, n) {
            E.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? O.aliasBidAdapter(e, t, n) : E.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, h.getAllWinningBids = function() {
            return m.a.getAllWinningBids()
        }, h.getAllPrebidWinningBids = function() {
            return m.a.getBidsReceived().filter(function(e) {
                return e.status === A.BID_STATUS.BID_TARGETING_SET
            })
        }, h.getHighestCpmBids = function(e) {
            return f.a.getWinningBids(e)
        }, h.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = m.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            }) : t.adUnitCode ? e = f.a.getWinningBids(t.adUnitCode) : t.adId ? e = m.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId
            }) : E.logWarn("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."), 0 < e.length && (e[0].status = A.BID_STATUS.RENDERED)
        }, h.getConfig = d.b.getConfig, h.setConfig = d.b.setConfig, h.setBidderConfig = d.b.setBidderConfig, h.que.push(function() {
            return Object(o.a)()
        }), h.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                E.logError("Error processing command :", e.message, e.stack)
            } else E.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, h.que.push = h.cmd.push, h.processQueue = function() {
            c.b.ready(), $(h.que), $(h.cmd)
        }, t.default = h
    },
    69: function(e, t, n) {
        "use strict";
        t.a = function(t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function(e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e]
            })
        };
        var r = n(21),
            i = n(0),
            o = Object(r.a)()
    },
    7: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return l
        }), n.d(t, "d", function() {
            return p
        }), t.a = function(e) {
            return o({
                moduleName: e,
                moduleType: "core"
            })
        }, t.b = function(e, t) {
            return o({
                gvlid: e,
                moduleName: t
            })
        };
        var r = n(13),
            u = n(0),
            i = n(12),
            d = n.n(i),
            f = ["core", "prebid-module"],
            l = [];

        function o(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {},
                i = t.gvlid,
                o = t.moduleName,
                a = t.moduleType;

            function s(n) {
                if (d()(f, a)) {
                    return n({
                        valid: !0
                    })
                }
                var r;
                return p(i, o, {
                    hasEnforcementHook: !1
                }, function(e) {
                    var t;
                    r = e && e.hasEnforcementHook ? n(e) : (t = {
                        hasEnforcementHook: !1,
                        valid: u.hasDeviceAccess()
                    }, n(t))
                }), r
            }
            var c = function(t) {
                function n(e) {
                    if (e && e.valid) try {
                        return !!window.localStorage
                    } catch (e) {
                        u.logError("Local storage api disabled")
                    }
                    return !1
                }
                if (!t || "function" != typeof t) return s(n);
                l.push(function() {
                    var e = s(n);
                    t(e)
                })
            };
            return {
                setCookie: function(i, o, a, c, u, t) {
                    function n(e) {
                        var t, n, r;
                        e && e.valid && (t = u && "" !== u ? " ;domain=".concat(encodeURIComponent(u)) : "", n = a && "" !== a ? " ;expires=".concat(a) : "", r = null != c && "none" == c.toLowerCase() ? "; Secure" : "", document.cookie = "".concat(i, "=").concat(encodeURIComponent(o)).concat(n, "; path=/").concat(t).concat(c ? "; SameSite=".concat(c) : "").concat(r))
                    }
                    if (!t || "function" != typeof t) return s(n);
                    l.push(function() {
                        var e = s(n);
                        t(e)
                    })
                },
                getCookie: function(n, t) {
                    function r(e) {
                        if (e && e.valid) {
                            var t = window.document.cookie.match("(^|;)\\s*" + n + "\\s*=\\s*([^;]*)\\s*(;|$)");
                            return t ? decodeURIComponent(t[2]) : null
                        }
                        return null
                    }
                    if (!t || "function" != typeof t) return s(r);
                    l.push(function() {
                        var e = s(r);
                        t(e)
                    })
                },
                localStorageIsEnabled: function(t) {
                    function n(e) {
                        if (e && e.valid) try {
                            return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
                        } catch (e) {}
                        return !1
                    }
                    if (!t || "function" != typeof t) return s(n);
                    l.push(function() {
                        var e = s(n);
                        t(e)
                    })
                },
                cookiesAreEnabled: function(t) {
                    function n(e) {
                        return !(!e || !e.valid) && (!!u.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", -1 !== window.document.cookie.indexOf("prebid.cookieTest")))
                    }
                    if (!t || "function" != typeof t) return s(n);
                    l.push(function() {
                        var e = s(n);
                        t(e)
                    })
                },
                setDataInLocalStorage: function(t, n, r) {
                    function i(e) {
                        e && e.valid && c() && window.localStorage.setItem(t, n)
                    }
                    if (!r || "function" != typeof r) return s(i);
                    l.push(function() {
                        var e = s(i);
                        r(e)
                    })
                },
                getDataFromLocalStorage: function(t, n) {
                    function r(e) {
                        return e && e.valid && c() ? window.localStorage.getItem(t) : null
                    }
                    if (!n || "function" != typeof n) return s(r);
                    l.push(function() {
                        var e = s(r);
                        n(e)
                    })
                },
                removeDataFromLocalStorage: function(t, n) {
                    function r(e) {
                        e && e.valid && c() && window.localStorage.removeItem(t)
                    }
                    if (!n || "function" != typeof n) return s(r);
                    l.push(function() {
                        var e = s(r);
                        n(e)
                    })
                },
                hasLocalStorage: c,
                findSimilarCookies: function(o, t) {
                    function n(e) {
                        if (e && e.valid) {
                            var t = [];
                            if (u.hasDeviceAccess())
                                for (var n = document.cookie.split(";"); n.length;) {
                                    var r = n.pop(),
                                        i = (i = r.indexOf("=")) < 0 ? r.length : i;
                                    0 <= decodeURIComponent(r.slice(0, i).replace(/^\s+/, "")).indexOf(o) && t.push(decodeURIComponent(r.slice(i + 1)))
                                }
                            return t
                        }
                    }
                    if (!t || "function" != typeof t) return s(n);
                    l.push(function() {
                        var e = s(n);
                        t(e)
                    })
                }
            }
        }
        var p = Object(r.b)("async", function(e, t, n, r) {
            r(n)
        }, "validateStorageEnforcement")
    },
    70: function(e, t, n) {
        var r = n(30),
            i = n(48),
            o = "".split;
        e.exports = r(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return "String" == i(e) ? o.call(e, "") : Object(e)
        } : Object
    },
    71: function(e, t, n) {
        var r = n(29),
            i = n(30),
            o = n(72);
        e.exports = !r && !i(function() {
            return 7 != Object.defineProperty(o("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    72: function(e, t, n) {
        var r = n(24),
            i = n(25),
            o = r.document,
            a = i(o) && i(o.createElement);
        e.exports = function(e) {
            return a ? o.createElement(e) : {}
        }
    },
    73: function(e, t, n) {
        var r = n(16),
            i = n(74);
        (e.exports = function(e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: "3.6.4",
            mode: r ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    },
    74: function(e, t, n) {
        var r = n(24),
            i = n(103),
            o = "__core-js_shared__",
            a = r[o] || i(o, {});
        e.exports = a
    },
    75: function(e, t, n) {
        var r = n(30);
        e.exports = !!Object.getOwnPropertySymbols && !r(function() {
            return !String(Symbol())
        })
    },
    76: function(e, t, n) {
        function r(c) {
            return function(e, t, n) {
                var r, i = u(e),
                    o = s(i.length),
                    a = d(n, o);
                if (c && t != t) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((c || a in i) && i[a] === t) return c || a || 0;
                return !c && -1
            }
        }
        var u = n(47),
            s = n(50),
            d = n(107);
        e.exports = {
            includes: r(!0),
            indexOf: r(!1)
        }
    },
    77: function(e, t, n) {
        var r = n(108);
        n(131), n(133), n(135), n(137), n(139), n(140), n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), e.exports = r
    },
    78: function(e, t, n) {
        function r(e) {
            c(e, d, {
                value: {
                    objectID: "O" + ++f,
                    weakData: {}
                }
            })
        }
        var i = n(53),
            o = n(25),
            a = n(26),
            c = n(33).f,
            u = n(59),
            s = n(111),
            d = u("meta"),
            f = 0,
            l = Object.isExtensible || function() {
                return !0
            },
            p = e.exports = {
                REQUIRED: !1,
                fastKey: function(e, t) {
                    if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!a(e, d)) {
                        if (!l(e)) return "F";
                        if (!t) return "E";
                        r(e)
                    }
                    return e[d].objectID
                },
                getWeakData: function(e, t) {
                    if (!a(e, d)) {
                        if (!l(e)) return !0;
                        if (!t) return !1;
                        r(e)
                    }
                    return e[d].weakData
                },
                onFreeze: function(e) {
                    return s && p.REQUIRED && l(e) && !a(e, d) && r(e), e
                }
            };
        i[d] = !0
    },
    79: function(e, t, n) {
        var r = n(19),
            i = n(38),
            o = r("iterator"),
            a = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (i.Array === e || a[o] === e)
        }
    },
    8: function(e, t, n) {
        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, i, u = n(0),
            o = n(5),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            d = u._map(o.EVENTS, function(e) {
                return e
            }),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports = (c = {}, (i = {}).on = function(e, t, n) {
            var r, i;
            i = e, u.contains(d, i) ? (r = c[e] || {
                que: []
            }, n ? (r[n] = r[n] || {
                que: []
            }, r[n].que.push(t)) : r.que.push(t), c[e] = r) : u.logError("Wrong event name : " + e + " Valid event names :" + d)
        }, i.emit = function(e) {
            ! function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {},
                    r = n[f[e]],
                    i = c[e] || {
                        que: []
                    },
                    o = u._map(i, function(e, t) {
                        return t
                    }),
                    a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r,
                    elapsedTime: u.getPerformanceNow()
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, function(e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e)
                    }
                })
            }(e, a.call(arguments, 1))
        }, i.off = function(e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function(e) {
                var t = i[r].que;
                e === n && t.splice(t.indexOf(e), 1)
            }) : u._each(i.que, function(e) {
                var t = i.que;
                e === n && t.splice(t.indexOf(e), 1)
            }), c[e] = i)
        }, i.get = function() {
            return c
        }, i.getEvents = function() {
            var n = [];
            return u._each(l, function(e) {
                var t = r({}, e);
                n.push(t)
            }), n
        }, i)
    },
    80: function(e, t, n) {
        var o = n(15);
        e.exports = function(t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e
            }
        }
    },
    81: function(e, t) {
        e.exports = function(e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        }
    },
    82: function(e, t, n) {
        function r() {}

        function i(e) {
            return "<script>" + e + "</" + g + ">"
        }
        var o, a = n(15),
            c = n(116),
            u = n(83),
            s = n(53),
            d = n(119),
            f = n(72),
            l = n(65),
            p = "prototype",
            g = "script",
            b = l("IE_PROTO"),
            v = function() {
                try {
                    o = document.domain && new ActiveXObject("htmlfile")
                } catch (e) {}
                var e, t;
                v = o ? function(e) {
                    e.write(i("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                }(o) : ((t = f("iframe")).style.display = "none", d.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(i("document.F=Object")), e.close(), e.F);
                for (var n = u.length; n--;) delete v[p][u[n]];
                return v()
            };
        s[b] = !0, e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (r[p] = a(e), n = new r, r[p] = null, n[b] = e) : n = v(), void 0 === t ? n : c(n, t)
        }
    },
    83: function(e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    },
    84: function(e, t, n) {
        var i = n(31);
        e.exports = function(e, t, n, r) {
            r && r.enumerable ? e[t] = n : i(e, t, n)
        }
    },
    85: function(e, t, n) {
        "use strict";
        var r, i, o, a = n(86),
            c = n(31),
            u = n(26),
            s = n(19),
            d = n(16),
            f = s("iterator"),
            l = !1;
        [].keys && ("next" in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : l = !0), null == r && (r = {}), d || u(r, f) || c(r, f, function() {
            return this
        }), e.exports = {
            IteratorPrototype: r,
            BUGGY_SAFARI_ITERATORS: l
        }
    },
    86: function(e, t, n) {
        var r = n(26),
            i = n(57),
            o = n(65),
            a = n(122),
            c = o("IE_PROTO"),
            u = Object.prototype;
        e.exports = a ? Object.getPrototypeOf : function(e) {
            return e = i(e), r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null
        }
    },
    87: function(e, t, n) {
        "use strict";
        var i = n(127).charAt,
            r = n(54),
            o = n(66),
            a = "String Iterator",
            c = r.set,
            u = r.getterFor(a);
        o(String, "String", function(e) {
            c(this, {
                type: a,
                string: String(e),
                index: 0
            })
        }, function() {
            var e, t = u(this),
                n = t.string,
                r = t.index;
            return r >= n.length ? {
                value: void 0,
                done: !0
            } : (e = i(n, r), t.index += e.length, {
                value: e,
                done: !1
            })
        })
    },
    88: function(e, t, n) {
        var r = n(15),
            i = n(61);
        e.exports = function(e) {
            var t = i(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return r(t.call(e))
        }
    },
    89: function(e, t, n) {
        var r = n(153);
        e.exports = r
    },
    896: function(e, t, n) {
        e.exports = n(68)
    },
    9: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", function() {
            return R
        }), n.d(t, "uspDataHandler", function() {
            return k
        }), t.setS2STestingModule = function(e) {
            I = e
        };
        var S = n(0),
            p = n(91),
            g = n(37),
            l = n(1),
            h = n(4),
            A = n(3),
            r = n(13),
            i = n(12),
            E = n.n(i),
            o = n(10),
            O = n.n(o),
            b = n(67),
            T = n(20);

        function m(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function v() {
            return (v = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var I, C = n(0),
            j = n(5),
            w = n(8),
            y = {},
            _ = y.bidderRegistry = {},
            B = y.aliasRegistry = {},
            U = {};
        A.b.getConfig("s2sConfig", function(e) {
            U = e.s2sConfig
        });
        var c = {};
        var x = Object(r.b)("sync", function(e) {
            var i = e.bidderCode,
                s = e.auctionId,
                d = e.bidderRequestId,
                t = e.adUnits,
                f = e.labels,
                l = e.src;
            return t.reduce(function(e, c) {
                var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes),
                    n = t.active,
                    u = t.mediaTypes,
                    r = t.filterResults;
                return n ? r && C.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : C.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter(function(e) {
                    return e.bidder === i
                }).reduce(function(e, t) {
                    var n = c.nativeParams || C.deepAccess(c, "mediaTypes.native");
                    n && (t = v({}, t, {
                        nativeParams: Object(g.g)(n)
                    })), t = v({}, t, Object(S.getDefinedParams)(c, ["fpd", "mediaType", "renderer", "storedAuctionResponse"]));
                    var r = Object(p.b)(Object(p.a)(t, f), u),
                        i = r.active,
                        o = r.mediaTypes,
                        a = r.filterResults;
                    return i ? a && C.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : C.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), C.isValidMediaTypes(o) ? t = v({}, t, {
                        mediaTypes: o
                    }) : C.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), i && e.push(v({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: C.deepAccess(o, "banner.sizes") || C.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || C.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: b.a.getRequestsCounter(c.code),
                        bidderRequestsCount: b.a.getBidderRequestsCounter(c.code, t.bidder),
                        bidderWinsCount: b.a.getBidderWinsCounter(c.code, t.bidder)
                    })), e
                }, [])), e
            }, []).reduce(S.flatten, []).filter(function(e) {
                return "" !== e
            })
        }, "getBids");
        var R = {
                consentData: null,
                setConsentData: function(e) {
                    R.consentData = e
                },
                getConsentData: function() {
                    return R.consentData
                }
            },
            k = {
                consentData: null,
                setConsentData: function(e) {
                    k.consentData = e
                },
                getConsentData: function() {
                    return k.consentData
                }
            };

        function D() {
            return U && U.enabled && U.testing && I
        }

        function u(t, n, e) {
            try {
                var r = _[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (C.logInfo("Invoking ".concat(t, ".").concat(n)), A.b.runWithBidder(t, S.bind.call(r[n], r, e)))
            } catch (e) {
                C.logWarn("Error calling ".concat(n, " of ").concat(t))
            }
        }
        y.makeBidRequests = Object(r.b)("sync", function(e, i, o, a, c) {
            w.emit(j.EVENTS.BEFORE_REQUEST_BIDS, e);
            var u = [],
                t = Object(S.getBidderCodes)(e);
            A.b.getConfig("bidderSequence") === A.a && (t = Object(S.shuffle)(t));
            var n, r, s, d, f, l, p, g = Object(T.a)(),
                b = t,
                v = [];
            U.enabled && (D() && (v = I.getSourceBidderMap(e)[I.CLIENT]), n = U.bidders, b = t.filter(function(e) {
                return !E()(n, e) || E()(v, e)
            }), Boolean(D() && U.testServerOnly) && (p = e, Boolean(O()(p, function(e) {
                return O()(e.bids, function(e) {
                    return (e.bidSource || U.bidderControl && U.bidderControl[e.bidder]) && e.finalSource === I.SERVER
                })
            }))) && (b.length = 0), d = e, f = U.bidders, (l = C.deepClone(d)).forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    return E()(f, e.bidder) && (!D() || e.finalSource !== I.CLIENT)
                }).map(function(e) {
                    return e.bid_id = C.getUniqueIdentifierStr(), e
                })
            }), r = l = l.filter(function(e) {
                return 0 !== e.bids.length
            }), s = C.generateUUID(), n.forEach(function(e) {
                var t = C.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        tid: s,
                        bids: x({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: C.deepClone(r),
                            labels: c,
                            src: j.S2S.SRC
                        }),
                        auctionStart: i,
                        timeout: U.timeout,
                        src: j.S2S.SRC,
                        refererInfo: g
                    };
                0 !== n.bids.length && u.push(n)
            }), r.forEach(function(e) {
                var t = e.bids.filter(function(t) {
                    return O()(u, function(e) {
                        return O()(e.bids, function(e) {
                            return e.bidId === t.bid_id
                        })
                    })
                });
                e.bids = t
            }), u.forEach(function(e) {
                e.adUnitsS2SCopy = r.filter(function(e) {
                    return 0 < e.bids.length
                })
            }));
            var y, h, m = (y = e, (h = C.deepClone(y)).forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    return !D() || e.finalSource !== I.SERVER
                })
            }), h = h.filter(function(e) {
                return 0 !== e.bids.length
            }));
            return b.forEach(function(e) {
                var t = C.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: x({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: C.deepClone(m),
                            labels: c,
                            src: "client"
                        }),
                        auctionStart: i,
                        timeout: a,
                        refererInfo: g
                    },
                    r = _[e];
                r || C.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n)
            }), R.getConsentData() && u.forEach(function(e) {
                e.gdprConsent = R.getConsentData()
            }), k.getConsentData() && u.forEach(function(e) {
                e.uspConsent = k.getConsentData()
            }), u
        }, "makeBidRequests"), y.callBids = function(e, t, i, o, a, c, u) {
            var n, r, s, d, f, l, p, g, b, v, y;
            t.length ? (r = (n = m(t.reduce(function(e, t) {
                return e[Number(void 0 !== t.src && t.src === j.S2S.SRC)].push(t), e
            }, [
                [],
                []
            ]), 2))[0], (s = n[1]).length && (d = Object(h.b)(c, a ? {
                request: a.request.bind(null, "s2s"),
                done: a.done
            } : void 0), f = U.bidders, l = _[U.adapter], p = s[0].tid, g = s[0].adUnitsS2SCopy, l ? (b = {
                tid: p,
                ad_units: g
            }).ad_units.length && (v = s.map(function(e) {
                return e.start = Object(S.timestamp)(), o.bind(e)
            }), y = b.ad_units.reduce(function(e, t) {
                return e.concat((t.bids || []).reduce(function(e, t) {
                    return e.concat(t.bidder)
                }, []))
            }, []), C.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function(e) {
                return E()(y, e)
            }).join(","))), s.forEach(function(e) {
                w.emit(j.EVENTS.BID_REQUESTED, e)
            }), l.callBids(b, s, function(e, t) {
                var n = Object(S.getBidderRequest)(s, t.bidderCode, e);
                n && i.call(n, e, t)
            }, function() {
                return v.forEach(function(e) {
                    return e()
                })
            }, d)) : C.logError("missing " + U.adapter)), r.forEach(function(t) {
                t.start = Object(S.timestamp)();
                var e = _[t.bidderCode];
                C.logMessage("CALLING BIDDER ======= ".concat(t.bidderCode)), w.emit(j.EVENTS.BID_REQUESTED, t);
                var n = Object(h.b)(c, a ? {
                        request: a.request.bind(null, t.bidderCode),
                        done: a.done
                    } : void 0),
                    r = o.bind(t);
                try {
                    A.b.runWithBidder(t.bidderCode, S.bind.call(e.callBids, e, t, i.bind(t), r, n, u, A.b.callbackWithBidder(t.bidderCode)))
                } catch (e) {
                    C.logError("".concat(t.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                        e: e,
                        bidRequest: t
                    }), r()
                }
            })) : C.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, y.videoAdapters = [], y.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (_[t] = e, E()(r, "video") && y.videoAdapters.push(t), E()(r, "native") && g.e.push(t)) : C.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : C.logError("bidAdaptor or bidderCode not specified")
        }, y.aliasBidAdapter = function(t, e, n) {
            var r, i;
            if (void 0 === _[e]) {
                var o = _[t];
                if (void 0 === o) {
                    var a = A.b.getConfig("s2sConfig"),
                        c = a && a.bidders;
                    c && E()(c, e) ? B[e] = t : C.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                } else try {
                    var u, s, d, f = (r = t, i = [], E()(y.videoAdapters, r) && i.push("video"), E()(g.e, r) && i.push("native"), i);
                    o.constructor.prototype != Object.prototype ? (d = new o.constructor).setBidderCode(e) : (u = o.getSpec(), s = n && n.gvlid, d = Object(l.newBidder)(v({}, u, {
                        code: e,
                        gvlid: s
                    })), B[e] = t), y.registerBidAdapter(d, e, {
                        supportedMediaTypes: f
                    })
                } catch (e) {
                    C.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                }
            } else C.logMessage('alias name "' + e + '" has been already specified.')
        }, y.registerAnalyticsAdapter = function(e) {
            var t = e.adapter,
                n = e.code,
                r = e.gvlid;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, c[n] = {
                adapter: t,
                gvlid: r
            }) : C.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : C.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, y.enableAnalytics = function(e) {
            C.isArray(e) || (e = [e]), C._each(e, function(e) {
                var t = c[e.provider].adapter;
                t ? t.enableAnalytics(e) : C.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
            })
        }, y.getBidAdapter = function(e) {
            return _[e]
        }, y.getAnalyticsAdapter = function(e) {
            return c[e]
        }, y.callTimedOutBidders = function(t, n, r) {
            n = n.map(function(e) {
                return e.params = C.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            }), n = C.groupBy(n, "bidder"), Object.keys(n).forEach(function(e) {
                u(e, "onTimeout", n[e])
            })
        }, y.callBidWonBidder = function(e, t, n) {
            t.params = C.getUserConfiguredParams(n, t.adUnitCode, t.bidder), b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), u(e, "onBidWon", t)
        }, y.callSetTargetingBidder = function(e, t) {
            u(e, "onSetTargeting", t)
        }, t.default = y
    },
    90: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e
                },
                getBidderCode: function() {
                    return t
                }
            }
        }
    },
    91: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e.labelAll) return {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            };
            return {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }, t.c = function(e) {
            var t = v(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
            return !t.shouldFilter || !!t.sizesSupported[e]
        }, t.b = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.labels,
                n = void 0 === t ? [] : t,
                r = e.labelAll,
                i = void 0 !== r && r,
                o = e.activeLabels,
                a = void 0 === o ? [] : o,
                c = 1 < arguments.length ? arguments[1] : void 0,
                u = 2 < arguments.length ? arguments[2] : void 0,
                s = v(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
            c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(p.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter(function(e) {
                return s.sizesSupported[e]
            }));
            var f = Object.keys(c),
                l = {
                    active: f.every(function(e) {
                        return "banner" !== e
                    }) || f.some(function(e) {
                        return "banner" === e
                    }) && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function(e) {
                        return s.labels[e]
                    }) || n.some(function(e) {
                        return g()(a, e)
                    })) || i && n.reduce(function(e, t) {
                        return e ? s.labels[t] || g()(a, t) : e
                    }, !0)),
                    mediaTypes: c
                };
            d && d.length !== c.banner.sizes.length && (l.filterResults = {
                before: d,
                after: c.banner.sizes
            });
            return l
        };
        var r = n(3),
            p = n(0),
            i = n(12),
            g = n.n(i);

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var b = [];

        function v(e) {
            return e.reduce(function(n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    if ("" === r.mediaQuery) t = !0;
                    else try {
                        t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches
                    } catch (e) {
                        Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function(t) {
                        return (r[t] || []).forEach(function(e) {
                            return n[t][e] = !0
                        })
                    }))
                } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n
            }, {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        r.b.getConfig("sizeConfig", function(e) {
            return t = e.sizeConfig, void(b = t);
            var t
        })
    },
    92: function(e, t, n) {
        var r = n(219);
        e.exports = r
    },
    93: function(e, t, n) {
        "use strict";
        t.b = function(e, t, n) {
            var r = {
                puts: e.map(c, n)
            };
            Object(i.a)(o.b.getConfig("cache.url"), function(n) {
                return {
                    success: function(e) {
                        var t;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void n(e, [])
                        }
                        t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), [])
                    },
                    error: function(e, t) {
                        n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), [])
                    }
                }
            }(t), JSON.stringify(r), {
                contentType: "text/plain",
                withCredentials: !0
            })
        }, t.a = function(e) {
            return "".concat(o.b.getConfig("cache.url"), "?uuid=").concat(e)
        };
        var i = n(4),
            o = n(3),
            a = n(0);

        function c(e) {
            var t, n, r, i = {
                type: "xml",
                value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, r = n ? "<![CDATA[".concat(n, "]]>") : "", '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                ttlseconds: Number(e.ttl)
            };
            return o.b.getConfig("cache.vasttrack") && (i.bidder = e.bidder, i.bidid = e.requestId, a.isPlainObject(this) && this.hasOwnProperty("auctionStart") && (i.timestamp = this.auctionStart)), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (i.key = e.customCacheKey), i
        }
    },
    96: function(e, t, n) {
        n(97);
        var r = n(52);
        e.exports = r("Array", "find")
    },
    97: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(56).find,
            o = n(51),
            a = n(60),
            c = "find",
            u = !0,
            s = a(c);
        c in [] && Array(1).find(function() {
            u = !1
        }), r({
            target: "Array",
            proto: !0,
            forced: u || !s
        }, {
            find: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), o(c)
    },
    98: function(e, t, n) {
        var r = n(29),
            i = n(99),
            o = n(46),
            a = n(47),
            c = n(55),
            u = n(26),
            s = n(71),
            d = Object.getOwnPropertyDescriptor;
        t.f = r ? d : function(e, t) {
            if (e = a(e), t = c(t, !0), s) try {
                return d(e, t)
            } catch (e) {}
            if (u(e, t)) return o(!i.f.call(e, t), e[t])
        }
    },
    99: function(e, t, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
            i = Object.getOwnPropertyDescriptor,
            o = i && !r.call({
                1: 2
            }, 1);
        t.f = o ? function(e) {
            var t = i(this, e);
            return !!t && t.enumerable
        } : r
    }
});
pbjsChunk([312], {
    273: function(e, r, a) {
        e.exports = a(274)
    },
    274: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return k
        });
        var f = a(11),
            w = a(0),
            A = a(3),
            v = a(1),
            y = a(2),
            p = a(23),
            t = a(10),
            x = a.n(t),
            n = a(12),
            C = a.n(n),
            g = a(28),
            i = a(7);

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function b() {
            return (b = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        function S(e) {
            return function(e) {
                if (Array.isArray(e)) return o(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function(e, r) {
                if (!e) return;
                if ("string" == typeof e) return o(e, r);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a) return Array.from(e);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return o(e, r)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function o(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var a = 0, t = new Array(r); a < r; a++) t[a] = e[a];
            return t
        }
        var d = "appnexus",
            T = "https://ib.adnxs.com/ut/v3/prebid",
            c = ["id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset"],
            E = ["age", "externalUid", "segments", "gender", "dnt", "language"],
            O = ["geo", "device_id"],
            R = ["enabled", "dongle", "member_id", "debug_timeout"],
            u = {
                playback_method: {
                    unknown: 0,
                    auto_play_sound_on: 1,
                    auto_play_sound_off: 2,
                    click_to_play: 3,
                    mouse_over: 4,
                    auto_play_sound_unknown: 5
                },
                context: {
                    unknown: 0,
                    pre_roll: 1,
                    mid_roll: 2,
                    post_roll: 3,
                    outstream: 4,
                    "in-banner": 5
                }
            },
            m = {
                body: "description",
                body2: "desc2",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    }
                },
                sponsoredBy: "sponsored_by",
                privacyLink: "privacy_link",
                salePrice: "saleprice",
                displayUrl: "displayurl"
            },
            l = "<script",
            h = /\/\/cdn\.adnxs\.com\/v/,
            _ = "trk.js",
            j = Object(i.b)(32, d),
            k = {
                code: d,
                gvlid: 32,
                aliases: [{
                    code: "appnexusAst",
                    gvlid: 32
                }, {
                    code: "brealtime"
                }, {
                    code: "emxdigital",
                    gvlid: 183
                }, {
                    code: "pagescience"
                }, {
                    code: "defymedia"
                }, {
                    code: "gourmetads"
                }, {
                    code: "matomy"
                }, {
                    code: "featureforward"
                }, {
                    code: "oftmedia"
                }, {
                    code: "districtm",
                    gvlid: 144
                }, {
                    code: "adasta"
                }, {
                    code: "beintoo",
                    gvlid: 618
                }],
                supportedMediaTypes: [y.b, y.d, y.c],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var t = e.map(N),
                        a = x()(e, M),
                        n = {};
                    !0 === A.b.getConfig("coppa") && (n = {
                        coppa: !0
                    }), a && Object.keys(a.params.user).filter(function(e) {
                        return C()(E, e)
                    }).forEach(function(e) {
                        var r = w.convertCamelToUnderscore(e);
                        n[r] = a.params.user[e]
                    });
                    var i, s = x()(e, D);
                    s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter(function(e) {
                        return C()(O, e)
                    }).forEach(function(e) {
                        return i[e] = s.params.app[e]
                    }));
                    var o, d = x()(e, B);
                    d && d.params && s.params.app && s.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var p = {},
                        c = {},
                        u = j.getCookie("apn_prebid_debug") || null;
                    if (u) try {
                        p = JSON.parse(u)
                    } catch (e) {
                        w.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                    } else {
                        var m = x()(e, V);
                        m && m.debug && (p = m.debug)
                    }
                    p && p.enabled && Object.keys(p).filter(function(e) {
                        return C()(R, e)
                    }).forEach(function(e) {
                        c[e] = p[e]
                    });
                    var l, f = x()(e, z),
                        v = f ? parseInt(f.params.member, 10) : 0,
                        y = e[0].schain,
                        g = x()(e, W),
                        b = {
                            tags: S(t),
                            user: n,
                            sdk: {
                                source: "pbjs",
                                version: "4.15.0"
                            },
                            schain: y
                        };
                    g && (b.iab_support = {
                        omidpn: "Appnexus",
                        omidpv: "4.15.0"
                    }), 0 < v && (b.member_id = v), s && (b.device = i), d && (b.app = o), A.b.getConfig("adpod.brandCategoryExclusion") && (b.brand_category_uniqueness = !0), c.enabled && (b.debug = c, w.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(c, null, 4))), r && r.gdprConsent && (b.gdpr_consent = {
                        consent_string: r.gdprConsent.consentString,
                        consent_required: r.gdprConsent.gdprApplies
                    }), r && r.uspConsent && (b.us_privacy = r.uspConsent), r && r.refererInfo && (l = {
                        rd_ref: encodeURIComponent(r.refererInfo.referer),
                        rd_top: r.refererInfo.reachedTop,
                        rd_ifs: r.refererInfo.numIframes,
                        rd_stk: r.refererInfo.stack.map(function(e) {
                            return encodeURIComponent(e)
                        }).join(",")
                    }, b.referrer_detection = l), x()(e, J) && e.filter(J).forEach(function(r) {
                        var e = function(e, r) {
                                var a = r.mediaTypes.video,
                                    t = a.durationRangeSec,
                                    n = a.requireExactDuration,
                                    i = function(e) {
                                        var r = e.adPodDurationSec,
                                            a = e.durationRangeSec,
                                            t = e.requireExactDuration,
                                            n = w.getMinValueFromArray(a),
                                            i = Math.floor(r / n);
                                        return t ? Math.max(i, a.length) : i
                                    }(r.mediaTypes.video),
                                    s = w.getMaxValueFromArray(t),
                                    o = e.filter(function(e) {
                                        return e.uuid === r.bidId
                                    }),
                                    d = w.fill.apply(w, S(o).concat([i])); {
                                    var p, c;
                                    n ? (p = Math.ceil(i / t.length), c = w.chunk(d, p), t.forEach(function(r, e) {
                                        c[e].map(function(e) {
                                            F(e, "minduration", r), F(e, "maxduration", r)
                                        })
                                    })) : d.map(function(e) {
                                        return F(e, "maxduration", s)
                                    })
                                }
                                return d
                            }(t, r),
                            a = b.tags.filter(function(e) {
                                return e.uuid !== r.bidId
                            });
                        b.tags = [].concat(S(a), S(e))
                    });
                    var h, _ = w.deepAccess(e[0], "userId.criteoId");
                    _ && ((h = []).push({
                        provider: "criteo",
                        user_id: _
                    }), b.tpuids = h);
                    var k = [],
                        I = w.deepAccess(e[0], "userId.tdid");
                    return I && k.push({
                            source: "adserver.org",
                            id: I,
                            rti_partner: "TDID"
                        }), k.length && (b.eids = k), t[0].publisher_id && (b.publisher_id = t[0].publisher_id),
                        function(e, a) {
                            var t = [],
                                n = {};
                            ! function(e) {
                                var r = !0;
                                e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== w.deepAccess(e.gdprConsent, "vendorData.purpose.consents.1")));
                                return r
                            }(a) && (n = {
                                withCredentials: !1
                            }); {
                                var i, r;
                                15 < e.tags.length ? (i = w.deepClone(e), w.chunk(e.tags, 15).forEach(function(e) {
                                    i.tags = e;
                                    var r = JSON.stringify(i);
                                    t.push({
                                        method: "POST",
                                        url: T,
                                        data: r,
                                        bidderRequest: a,
                                        options: n
                                    })
                                })) : (r = JSON.stringify(e), t = {
                                    method: "POST",
                                    url: T,
                                    data: r,
                                    bidderRequest: a,
                                    options: n
                                })
                            }
                            return t
                        }(b, r)
                },
                interpretResponse: function(e, r) {
                    var i = this,
                        s = r.bidderRequest;
                    e = e.body;
                    var a, o = [];
                    if (e && !e.error) return e.tags && e.tags.forEach(function(e) {
                        var r, a, t, n = (r = e) && r.ads && r.ads.length && x()(r.ads, function(e) {
                            return e.rtb
                        });
                        n && 0 !== n.cpm && C()(i.supportedMediaTypes, n.ad_type) && ((a = function(r, e, a) {
                            var t = w.getBidRequest(r.uuid, [a]),
                                n = {
                                    requestId: r.uuid,
                                    cpm: e.cpm,
                                    creativeId: e.creative_id,
                                    dealId: e.deal_id,
                                    currency: "USD",
                                    netRevenue: !0,
                                    ttl: 300,
                                    adUnitCode: t.adUnitCode,
                                    appnexus: {
                                        buyerMemberId: e.buyer_member_id,
                                        dealPriority: e.deal_priority,
                                        dealCode: e.deal_code
                                    }
                                };
                            e.advertiser_id && (n.meta = b({}, n.meta, {
                                advertiserId: e.advertiser_id
                            }));
                            if (e.rtb.video) {
                                var i, s;
                                switch (b(n, {
                                    width: e.rtb.video.player_width,
                                    height: e.rtb.video.player_height,
                                    vastImpUrl: e.notify_url,
                                    ttl: 3600
                                }), w.deepAccess(t, "mediaTypes.video.context")) {
                                    case y.a:
                                        var o = Object(v.getIabSubCategory)(t.bidder, e.brand_category_id);
                                        n.meta = b({}, n.meta, {
                                            primaryCatId: o
                                        });
                                        var d = e.deal_priority;
                                        n.video = {
                                            context: y.a,
                                            durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3),
                                            dealTier: d
                                        }, n.vastUrl = e.rtb.video.asset_url;
                                        break;
                                    case g.b:
                                        n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, n.vastXml = e.rtb.video.content, e.renderer_url && (i = x()(a.bids, function(e) {
                                            return e.bidId === r.uuid
                                        }), s = w.deepAccess(i, "renderer.options"), n.renderer = function(e, r) {
                                            var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                t = f.a.install({
                                                    id: r.renderer_id,
                                                    url: r.renderer_url,
                                                    config: a,
                                                    loaded: !1,
                                                    adUnitCode: e
                                                });
                                            try {
                                                t.setRender(L)
                                            } catch (e) {
                                                w.logWarn("Prebid Error calling setRender on renderer", e)
                                            }
                                            return t.setEventHandlers({
                                                impression: function() {
                                                    return w.logMessage("AppNexus outstream video impression event")
                                                },
                                                loaded: function() {
                                                    return w.logMessage("AppNexus outstream video loaded event")
                                                },
                                                ended: function() {
                                                    w.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                }
                                            }), t
                                        }(n.adUnitCode, e, s));
                                        break;
                                    case g.a:
                                        n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url)
                                }
                            } else if (e.rtb[y.c]) {
                                var p = e.rtb[y.c],
                                    c = e.viewability.config.replace("src=", "data-src="),
                                    u = p.javascript_trackers;
                                null == u ? u = c : w.isStr(u) ? u = [u, c] : u.push(c), n[y.c] = {
                                    title: p.title,
                                    body: p.desc,
                                    body2: p.desc2,
                                    cta: p.ctatext,
                                    rating: p.rating,
                                    sponsoredBy: p.sponsored,
                                    privacyLink: p.privacy_link,
                                    address: p.address,
                                    downloads: p.downloads,
                                    likes: p.likes,
                                    phone: p.phone,
                                    price: p.price,
                                    salePrice: p.saleprice,
                                    clickUrl: p.link.url,
                                    displayUrl: p.displayurl,
                                    clickTrackers: p.link.click_trackers,
                                    impressionTrackers: p.impression_trackers,
                                    javascriptTrackers: u
                                }, p.main_img && (n.native.image = {
                                    url: p.main_img.url,
                                    height: p.main_img.height,
                                    width: p.main_img.width
                                }), p.icon && (n.native.icon = {
                                    url: p.icon.url,
                                    height: p.icon.height,
                                    width: p.icon.width
                                })
                            } else {
                                b(n, {
                                    width: e.rtb.banner.width,
                                    height: e.rtb.banner.height,
                                    ad: e.rtb.banner.content
                                });
                                try {
                                    var m, l;
                                    e.rtb.trackers && (m = e.rtb.trackers[0].impression_urls[0], l = w.createTrackPixelHtml(m), n.ad += l)
                                } catch (e) {
                                    w.logError("Error appending tracking pixel", e)
                                }
                            }
                            return n
                        }(e, n, s)).mediaType = (t = n.ad_type) === y.d ? y.d : t === y.c ? y.c : y.b, o.push(a))
                    }), e.debug && e.debug.debug_info && (a = (a = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info).replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), w.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), w.logMessage(a)), o;
                    var t = "in response for ".concat(s.bidderCode, " adapter");
                    return e && e.error && (t += ": ".concat(e.error)), w.logError(t), o
                },
                getMappingFileInfo: function() {
                    return {
                        url: "https://acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                        refreshInDays: 2
                    }
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled) return [{
                        type: "iframe",
                        url: "https://acdn.adnxs.com/dmp/async_usersync.html"
                    }]
                },
                transformBidParams: function(a, e) {
                    return a = w.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: w.transformBidderParamKeywords,
                        publisherId: "number"
                    }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, I(a.keywords) && a.keywords.forEach(P), Object.keys(a).forEach(function(e) {
                        var r = w.convertCamelToUnderscore(e);
                        r !== e && (a[r] = a[e], delete a[e])
                    })), a
                },
                onBidWon: function(e) {
                    e.native && function(e) {
                        var r = function(e) {
                            var r;
                            if (w.isStr(e) && U(e)) r = e;
                            else if (w.isArray(e))
                                for (var a = 0; a < e.length; a++) {
                                    var t = e[a];
                                    U(t) && (r = t)
                                }
                            return r
                        }(e.native.javascriptTrackers);
                        if (r)
                            for (var a = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, t = function(e) {
                                    var r = e.indexOf('src="') + 5,
                                        a = e.indexOf('"', r);
                                    return e.substring(r, a)
                                }(r), n = t.replace("dom_id=%native_dom_id%", a), i = document.getElementsByTagName("iframe"), s = !1, o = 0; o < i.length && !s; o++) {
                                var d = i[o];
                                try {
                                    var p = d.contentDocument || d.contentWindow.document;
                                    if (p)
                                        for (var c = p.getElementsByTagName("script"), u = 0; u < c.length && !s; u++) {
                                            var m = c[u];
                                            m.getAttribute("data-src") == t && (m.setAttribute("src", n), m.setAttribute("data-src", ""), m.removeAttribute && m.removeAttribute("data-src"), s = !0)
                                        }
                                } catch (e) {
                                    if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e
                                }
                            }
                    }(e)
                }
            };

        function I(e) {
            return w.isArray(e) && 0 < e.length
        }

        function P(e) {
            I(e.value) && "" === e.value[0] && delete e.value
        }

        function U(e) {
            var r = e.match(h),
                a = null != r && 1 <= r.length,
                t = e.match(_),
                n = null != t && 1 <= t.length;
            return e.startsWith(l) && n && a
        }

        function N(a) {
            var e, r, n, i, t = {};
            t.sizes = q(a.sizes), t.primary_size = t.sizes[0], t.ad_types = [], t.uuid = a.bidId, a.params.placementId ? t.id = parseInt(a.params.placementId, 10) : t.code = a.params.invCode, t.allow_smaller_sizes = a.params.allowSmallerSizes || !1, t.use_pmt_rule = a.params.usePaymentRule || !1, t.prebid = !0, t.disable_psa = !0, a.params.reserve && (t.reserve = a.params.reserve), a.params.position && (t.position = {
                above: 1,
                below: 2
            }[a.params.position] || 0), a.params.trafficSourceCode && (t.traffic_source_code = a.params.trafficSourceCode), a.params.privateSizes && (t.private_sizes = q(a.params.privateSizes)), a.params.supplyType && (t.supply_type = a.params.supplyType), a.params.pubClick && (t.pubclick = a.params.pubClick), a.params.extInvCode && (t.ext_inv_code = a.params.extInvCode), a.params.publisherId && (t.publisher_id = parseInt(a.params.publisherId, 10)), a.params.externalImpId && (t.external_imp_id = a.params.externalImpId), w.isEmpty(a.params.keywords) || (0 < (e = w.transformBidderParamKeywords(a.params.keywords)).length && e.forEach(P), t.keywords = e), a.mediaType !== y.c && !w.deepAccess(a, "mediaTypes.".concat(y.c)) || (t.ad_types.push(y.c), 0 === t.sizes.length && (t.sizes = q([1, 1])), a.nativeParams && (n = a.nativeParams, i = {}, Object.keys(n).forEach(function(e) {
                var r, a = m[e] && m[e].serverName || m[e] || e,
                    t = m[e] && m[e].requiredParams;
                i[a] = b({}, t, n[e]), a !== m.image.serverName && a !== m.icon.serverName || !i[a].sizes || (r = i[a].sizes, (w.isArrayOfNums(r) || w.isArray(r) && 0 < r.length && r.every(function(e) {
                    return w.isArrayOfNums(e)
                })) && (i[a].sizes = q(i[a].sizes))), a === m.privacyLink && (i.privacy_supported = !0)
            }), r = i, t[y.c] = {
                layouts: [r]
            }));
            var s = w.deepAccess(a, "mediaTypes.".concat(y.d)),
                o = w.deepAccess(a, "mediaTypes.video.context");
            t.hb_source = s && "adpod" === o ? 7 : 1, a.mediaType !== y.d && !s || t.ad_types.push(y.d), (a.mediaType === y.d || s && "outstream" !== o) && (t.require_asset_url = !0), a.params.video && (t.video = {}, Object.keys(a.params.video).filter(function(e) {
                return C()(c, e)
            }).forEach(function(e) {
                switch (e) {
                    case "context":
                    case "playback_method":
                        var r = a.params.video[e],
                            r = w.isArray(r) ? r[0] : r;
                        t.video[e] = u[e][r];
                        break;
                    case "frameworks":
                        break;
                    default:
                        t.video[e] = a.params.video[e]
                }
            }), a.params.video.frameworks && w.isArray(a.params.video.frameworks) && (t.video_frameworks = a.params.video.frameworks)), a.renderer && (t.video = b({}, t.video, {
                custom_renderer_present: !0
            })), a.params.frameworks && w.isArray(a.params.frameworks) && (t.banner_frameworks = a.params.frameworks);
            var d = x()(p.a.getAdUnits(), function(e) {
                return a.transactionId === e.transactionId
            });
            return d && d.mediaTypes && d.mediaTypes.banner && t.ad_types.push(y.b), 0 === t.ad_types.length && delete t.ad_types, t
        }

        function q(e) {
            var r = [],
                a = {};
            if (w.isArray(e) && 2 === e.length && !w.isArray(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
            else if ("object" === s(e))
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    (a = {}).width = parseInt(n[0], 10), a.height = parseInt(n[1], 10), r.push(a)
                }
            return r
        }

        function M(e) {
            return !!e.params.user
        }

        function z(e) {
            return !!parseInt(e.params.member, 10)
        }

        function D(e) {
            if (e.params) return !!e.params.app
        }

        function B(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }

        function V(e) {
            return !!e.debug
        }

        function J(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === y.a
        }

        function W(e) {
            var r = !1,
                a = e.params,
                t = e.params.video;
            return a.frameworks && w.isArray(a.frameworks) && (r = C()(e.params.frameworks, 6)), !r && t && t.frameworks && w.isArray(t.frameworks) && (r = C()(e.params.video.frameworks, 6)), r
        }

        function F(e, r, a) {
            w.isEmpty(e.video) && (e.video = {}), e.video[r] = a
        }

        function L(e) {
            var r, a;
            r = e.adUnitCode, (a = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && a[0].style.setProperty("display", "none"), e.renderer.push(function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    })
                }.bind(null, e))
            })
        }
        Object(v.registerBidder)(k)
    }
}, [273]);
pbjsChunk([304], {
    291: function(e, r, n) {
        e.exports = n(292)
    },
    292: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "VIDEO_ENDPOINT", function() {
            return p
        }), n.d(r, "BANNER_ENDPOINT", function() {
            return b
        }), n.d(r, "OUTSTREAM_SRC", function() {
            return y
        }), n.d(r, "VIDEO_TARGETING", function() {
            return w
        }), n.d(r, "DEFAULT_MIMES", function() {
            return I
        }), n.d(r, "spec", function() {
            return A
        });
        var l = n(0),
            t = n(3),
            i = n(1),
            d = n(11),
            s = n(2),
            o = n(10),
            f = n.n(o),
            a = n(12),
            v = n.n(a);

        function m() {
            return (m = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                }
                return e
            }).apply(this, arguments)
        }

        function c(e, r) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, r) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [],
                    t = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, d = e[Symbol.iterator](); !(t = (a = d.next()).done) && (n.push(a.value), !r || n.length !== r); t = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        t || null == d.return || d.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, r) || function(e, r) {
                if (!e) return;
                if ("string" == typeof e) return u(e, r);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, r)
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function u(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
            return t
        }
        var g = "1.12",
            h = "BFIO_PREBID",
            p = "https://reachms.bfmio.com/bid.json?exchange_id=",
            b = "https://display.bfmio.com/prebid_display",
            y = "https://player-cdn.beachfrontmedia.com/playerapi/loader/outstream.js",
            w = ["mimes", "playbackmethod", "maxduration", "placement", "skip", "skipmin", "skipafter"],
            I = ["video/mp4", "application/javascript"],
            T = "",
            A = {
                code: "beachfront",
                supportedMediaTypes: [s.d, s.b],
                isBidRequestValid: function(e) {
                    return !(!j(e) && !k(e))
                },
                buildRequests: function(e, r) {
                    var n = [],
                        t = e.filter(j),
                        i = e.filter(k);
                    return t.forEach(function(e) {
                        T = W(e, "appId"), n.push({
                            method: "POST",
                            url: p + T,
                            data: function(e, r) {
                                var n = S(C(e)),
                                    t = function(r) {
                                        var n = {},
                                            t = ["playerSize", "context", "w", "h"];
                                        return Object.keys(Object(r.mediaTypes.video)).filter(function(e) {
                                            return !v()(t, e)
                                        }).forEach(function(e) {
                                            n[e] = r.mediaTypes.video[e]
                                        }), Object.keys(Object(r.params.video)).filter(function(e) {
                                            return v()(w, e)
                                        }).forEach(function(e) {
                                            n[e] = r.params.video[e]
                                        }), n
                                    }(e),
                                    i = W(e, "appId"),
                                    o = W(e, "bidfloor"),
                                    a = W(e, "tagid"),
                                    d = _(r),
                                    s = {
                                        isPrebid: !0,
                                        appId: i,
                                        domain: document.location.hostname,
                                        id: l.getUniqueIdentifierStr(),
                                        imp: [{
                                            video: m({
                                                w: n.w,
                                                h: n.h,
                                                mimes: I
                                            }, t),
                                            bidfloor: o,
                                            tagid: a,
                                            secure: 0 === d.protocol.indexOf("https") ? 1 : 0,
                                            displaymanager: h,
                                            displaymanagerver: g
                                        }],
                                        site: {
                                            page: d.href,
                                            domain: d.hostname
                                        },
                                        device: {
                                            ua: navigator.userAgent,
                                            language: navigator.language,
                                            devicetype: N() ? 1 : /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent) ? 3 : 2,
                                            dnt: P() ? 1 : 0,
                                            js: 1,
                                            geo: {}
                                        },
                                        regs: {
                                            ext: {}
                                        },
                                        user: {
                                            ext: {}
                                        },
                                        cur: ["USD"]
                                    };
                                r && r.uspConsent && (s.regs.ext.us_privacy = r.uspConsent); {
                                    var c, u, p;
                                    r && r.gdprConsent && (c = r.gdprConsent, u = c.gdprApplies, p = c.consentString, s.regs.ext.gdpr = u ? 1 : 0, s.user.ext.consent = p)
                                }
                                e.userId && e.userId.tdid && (s.user.ext.eids = [{
                                    source: "adserver.org",
                                    uids: [{
                                        id: e.userId.tdid,
                                        ext: {
                                            rtiPartner: "TDID"
                                        }
                                    }]
                                }]);
                                var f = navigator.connection || navigator.webkitConnection;
                                f && f.effectiveType && (s.device.connectiontype = f.effectiveType);
                                return s
                            }(e, r),
                            bidRequest: e
                        })
                    }), i.length && (T = E(i[0], "appId"), n.push({
                        method: "POST",
                        url: b,
                        data: function(e, r) {
                            var n = _(r),
                                t = function() {
                                    try {
                                        return window.top.document.referrer
                                    } catch (e) {
                                        return ""
                                    }
                                }(),
                                i = {
                                    slots: e.map(function(e) {
                                        return {
                                            slot: e.adUnitCode,
                                            id: E(e, "appId"),
                                            bidfloor: E(e, "bidfloor"),
                                            sizes: (r = e, O(l.deepAccess(r, "mediaTypes.banner.sizes") || r.sizes))
                                        };
                                        var r
                                    }),
                                    page: n.href,
                                    domain: n.hostname,
                                    search: n.search,
                                    secure: 0 === n.protocol.indexOf("https") ? 1 : 0,
                                    referrer: t,
                                    ua: navigator.userAgent,
                                    deviceOs: function() {
                                        var e = f()([{
                                            s: "Android",
                                            r: /Android/
                                        }, {
                                            s: "iOS",
                                            r: /(iPhone|iPad|iPod)/
                                        }, {
                                            s: "Mac OS X",
                                            r: /Mac OS X/
                                        }, {
                                            s: "Mac OS",
                                            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                                        }, {
                                            s: "Linux",
                                            r: /(Linux|X11)/
                                        }, {
                                            s: "Windows 10",
                                            r: /(Windows 10.0|Windows NT 10.0)/
                                        }, {
                                            s: "Windows 8.1",
                                            r: /(Windows 8.1|Windows NT 6.3)/
                                        }, {
                                            s: "Windows 8",
                                            r: /(Windows 8|Windows NT 6.2)/
                                        }, {
                                            s: "Windows 7",
                                            r: /(Windows 7|Windows NT 6.1)/
                                        }, {
                                            s: "Windows Vista",
                                            r: /Windows NT 6.0/
                                        }, {
                                            s: "Windows Server 2003",
                                            r: /Windows NT 5.2/
                                        }, {
                                            s: "Windows XP",
                                            r: /(Windows NT 5.1|Windows XP)/
                                        }, {
                                            s: "UNIX",
                                            r: /UNIX/
                                        }, {
                                            s: "Search Bot",
                                            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
                                        }], function(e) {
                                            return e.r.test(navigator.userAgent)
                                        });
                                        return e ? e.s : "unknown"
                                    }(),
                                    isMobile: N() ? 1 : 0,
                                    dnt: P() ? 1 : 0,
                                    adapterVersion: g,
                                    adapterName: h
                                };
                            r && r.uspConsent && (i.usPrivacy = r.uspConsent); {
                                var o, a, d;
                                r && r.gdprConsent && (o = r.gdprConsent, a = o.gdprApplies, d = o.consentString, i.gdpr = a ? 1 : 0, i.gdprConsent = d)
                            }
                            e[0] && e[0].userId && e[0].userId.tdid && (i.tdid = e[0].userId.tdid);
                            return i
                        }(i, r),
                        bidRequest: i
                    })), n
                },
                interpretResponse: function(e, r) {
                    var n, t, i = r.bidRequest;
                    if (e = e.body, x(i)) {
                        if (!e || !e.url || !e.bidPrice) return l.logWarn("No valid video bids from ".concat(A.code, " bidder")), [];
                        var o = S(C(i)),
                            a = l.deepAccess(i, "mediaTypes.video.context");
                        return {
                            requestId: i.bidId,
                            bidderCode: A.code,
                            vastUrl: e.url,
                            vastXml: e.vast,
                            cpm: e.bidPrice,
                            width: o.w,
                            height: o.h,
                            creativeId: e.crid || e.cmpId,
                            renderer: "outstream" === a ? (n = i, (t = d.a.install({
                                id: n.bidId,
                                url: y,
                                loaded: !1
                            })).setRender(function(e) {
                                e.renderer.push(function() {
                                    window.Beachfront.Player(e.adUnitCode, {
                                        adTagUrl: e.vastUrl,
                                        width: e.width,
                                        height: e.height,
                                        expandInView: U(n, "expandInView", !1),
                                        collapseOnComplete: U(n, "collapseOnComplete", !0),
                                        progressColor: U(n, "progressColor"),
                                        adPosterColor: U(n, "adPosterColor")
                                    })
                                })
                            }), t) : null,
                            mediaType: s.d,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 300
                        }
                    }
                    return e && e.length ? e.filter(function(e) {
                        return e.adm
                    }).map(function(r) {
                        return {
                            requestId: f()(i, function(e) {
                                return e.adUnitCode === r.slot
                            }).bidId,
                            bidderCode: A.code,
                            ad: r.adm,
                            creativeId: r.crid,
                            cpm: r.price,
                            width: r.w,
                            height: r.h,
                            mediaType: s.b,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 300
                        }
                    }) : (l.logWarn("No valid banner bids from ".concat(A.code, " bidder")), [])
                },
                getUserSyncs: function(e, r, n, t) {
                    var i = 1 < arguments.length && void 0 !== r ? r : [],
                        o = 2 < arguments.length && void 0 !== n ? n : {},
                        a = 3 < arguments.length && void 0 !== t ? t : "",
                        d = [],
                        s = o.gdprApplies,
                        c = o.consentString,
                        u = void 0 === c ? "" : c,
                        p = f()(i, function(e) {
                            return l.isArray(e.body)
                        });
                    return p ? e.iframeEnabled && p.body.filter(function(e) {
                        return e.sync
                    }).forEach(function(e) {
                        d.push({
                            type: "iframe",
                            url: e.sync
                        })
                    }) : e.iframeEnabled ? d.push({
                        type: "iframe",
                        url: "https://sync.bfmio.com/sync_iframe?ifg=1&id=".concat(T, "&gdpr=").concat(s ? 1 : 0, "&gc=").concat(u, "&gce=1&us_privacy=").concat(a)
                    }) : e.pixelEnabled && d.push({
                        type: "image",
                        url: "https://sync.bfmio.com/syncb?pid=144&id=".concat(T, "&gdpr=").concat(s ? 1 : 0, "&gc=").concat(u, "&gce=1&us_privacy=").concat(a)
                    }), d
                }
            };

        function S(e) {
            return e && e.length ? e[0] : {
                w: void 0,
                h: void 0
            }
        }

        function O(e) {
            return l.parseSizesInput(e).map(function(e) {
                var r = c(e.split("x"), 2),
                    n = r[0],
                    t = r[1];
                return {
                    w: parseInt(n, 10) || void 0,
                    h: parseInt(t, 10) || void 0
                }
            })
        }

        function C(e) {
            return O(l.deepAccess(e, "mediaTypes.video.playerSize") || e.sizes)
        }

        function N() {
            return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)
        }

        function P() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNoTrack || "yes" === navigator.doNotTrack
        }

        function x(e) {
            return l.deepAccess(e, "mediaTypes.video")
        }

        function W(e, r) {
            return l.deepAccess(e, "params.video." + r) || l.deepAccess(e, "params." + r)
        }

        function E(e, r) {
            return l.deepAccess(e, "params.banner." + r) || l.deepAccess(e, "params." + r)
        }

        function U(e, r, n) {
            var t = l.deepAccess(e, "params.player." + r);
            return void 0 === t ? n : t
        }

        function j(e) {
            return x(e) && W(e, "appId") && W(e, "bidfloor")
        }

        function k(e) {
            return r = e, (l.deepAccess(r, "mediaTypes.banner") || !x(r)) && E(e, "appId") && E(e, "bidfloor");
            var r
        }

        function _(e) {
            var r = e && e.refererInfo && e.refererInfo.referer;
            return l.parseUrl(t.b.getConfig("pageUrl") || r, {
                decodeSearchAsString: !0
            })
        }
        Object(i.registerBidder)(A)
    }
}, [291]);
pbjsChunk([276], {
    353: function(n, t, e) {
        n.exports = e(354)
    },
    354: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), e.d(t, "allowAuction", function() {
            return y
        }), e.d(t, "userCMP", function() {
            return d
        }), e.d(t, "consentTimeout", function() {
            return u
        }), e.d(t, "gdprScope", function() {
            return p
        }), e.d(t, "staticConsentData", function() {
            return g
        }), t.requestBidsHook = h, t.resetConsentData = function() {
            C = void 0, d = void 0, w = 0, a.gdprDataHandler.setConsentData(null)
        }, t.setConsentConfig = _;
        var l = e(0),
            o = e(3),
            a = e(9),
            i = e(12),
            r = e.n(i),
            s = e(355),
            f = e.n(s);

        function c(n) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            })(n)
        }
        var d, u, p, g, C, m = "iab",
            v = 1e4,
            b = !0,
            y = {
                value: b,
                definedInConfig: !1
            },
            w = 0,
            D = !1,
            k = {
                iab: function(o, e, r) {
                    function n(n, t) {
                        l.logInfo("Received a response from CMP", n), t ? !1 !== n.gdprApplies && "tcloaded" !== n.eventStatus && "useractioncomplete" !== n.eventStatus || o(n, r) : e("CMP unable to register callback function.  Please check CMP setup.", r)
                    }
                    var t = function() {
                            var t = {};

                            function e() {
                                t.getConsentData && t.getVendorConsents && (l.logInfo("Received all requested responses from CMP", t), o(t, r))
                            }
                            return {
                                consentDataCallback: function(n) {
                                    t.getConsentData = n, e()
                                },
                                vendorConsentsCallback: function(n) {
                                    t.getVendorConsents = n, e()
                                }
                            }
                        }(),
                        u = {},
                        a = function() {
                            for (var n, t, e = window; !n;) {
                                try {
                                    if ("function" == typeof e.__tcfapi || "function" == typeof e.__cmp) {
                                        t = "function" == typeof e.__tcfapi ? (w = 2, e.__tcfapi) : (w = 1, e.__cmp), n = e;
                                        break
                                    }
                                } catch (n) {}
                                try {
                                    if (e.frames.__tcfapiLocator) {
                                        w = 2, n = e;
                                        break
                                    }
                                } catch (n) {}
                                try {
                                    if (e.frames.__cmpLocator) {
                                        w = 1, n = e;
                                        break
                                    }
                                } catch (n) {}
                                if (e === window.top) break;
                                e = e.parent
                            }
                            return {
                                cmpFrame: n,
                                cmpFunction: t
                            }
                        }(),
                        i = a.cmpFrame,
                        s = a.cmpFunction;
                    if (!i) return e("CMP not found.", r);
                    l.isFn(s) ? (l.logInfo("Detected CMP API is directly accessible, calling it now..."), 1 === w ? (s("getConsentData", null, t.consentDataCallback), s("getVendorConsents", null, t.vendorConsentsCallback)) : 2 === w && s("addEventListener", w, n)) : 1 === w && window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp ? (l.logInfo("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."), c("getConsentData", t.consentDataCallback), c("getVendorConsents", t.vendorConsentsCallback)) : (l.logInfo("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), 1 === w ? (d("getConsentData", i, t.consentDataCallback), d("getVendorConsents", i, t.vendorConsentsCallback)) : 2 === w && d("addEventListener", i, n));

                    function c(o, a) {
                        var n, t = r.adUnits,
                            e = 1,
                            i = 1;
                        Array.isArray(t) && 0 < t.length && (e = (n = l.getAdUnitSizes(t[0]))[0][0], i = n[0][1]), window.$sf.ext.register(e, i, function(n, t) {
                            var e;
                            "cmpReturn" === n && (e = "getConsentData" === o ? t.vendorConsentData : t.vendorConsents, a(e))
                        }), window.$sf.ext.cmp(o)
                    }

                    function d(n, d, t) {
                        var l = 2 === w ? "__tcfapi" : "__cmp";
                        window[l] = function(n, t, e) {
                            var o, a, i, r = Math.random() + "",
                                s = "".concat(l, "Call"),
                                c = (i = {
                                    command: n,
                                    parameter: t,
                                    callId: r
                                }, (a = s) in (o = {}) ? Object.defineProperty(o, a, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : o[a] = i, o);
                            1 !== w && (c[s].version = w), u[r] = e, d.postMessage(c, "*")
                        }, window.addEventListener("message", function(n) {
                            var t = "".concat(l, "Return"),
                                e = "string" == typeof n.data && f()(n.data, t) ? JSON.parse(n.data) : n.data; {
                                var o;
                                e[t] && e[t].callId && (o = e[t], void 0 !== u[o.callId] && u[o.callId](o.returnValue, o.success))
                            }
                        }, !1), window[l](n, void 0, t)
                    }
                },
                static: function(n, t, e) {
                    n(g, e)
                }
            };

        function h(n, t) {
            var e = {
                context: this,
                args: [t],
                nextFn: n,
                adUnits: t.adUnits || pbjs.adUnits,
                bidsBackHandler: t.bidsBackHandler,
                haveExited: !1,
                timer: null
            };
            return C ? (l.logInfo("User consent information already known.  Pulling internally stored information..."), S(null, e)) : r()(Object.keys(k), d) ? (k[d].call(this, M, A, e), void(e.haveExited || (0 === u ? M(void 0, e) : e.timer = setTimeout(function(n) {
                A("CMP workflow exceeded timeout threshold.", n)
            }.bind(null, e), u)))) : (l.logWarn("CMP framework (".concat(d, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), e.nextFn.apply(e.context, e.args))
        }

        function M(e, n) {
            "static" === d && 2 === (w = e.getConsentData ? 1 : e.getTCData ? 2 : 0) && (e = e.getTCData);
            var t = 1 === w ? function(n) {
                var t = n && n.getConsentData && n.getConsentData.gdprApplies;
                return !("boolean" == typeof t && (!0 !== t || l.isStr(n.getConsentData.consentData) && l.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length))
            } : 2 === w ? function() {
                var n = e && "boolean" == typeof e.gdprApplies ? e.gdprApplies : p,
                    t = e && e.tcString;
                return !("boolean" == typeof n && (!0 !== n || l.isStr(t)))
            } : null;
            y.definedInConfig && 2 === w ? l.logWarn("'allowAuctionWithoutConsent' ignored for TCF 2") : y.definedInConfig || 1 !== w || l.logInfo("'allowAuctionWithoutConsent' using system default: (".concat(b, ").")), l.isFn(t) ? t(e) ? A("CMP returned unexpected value during lookup process.", n, e) : (clearTimeout(n.timer), P(e), S(null, n)) : A("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.", n, e)
        }

        function A(n, t, e) {
            clearTimeout(t.timer), y.value && 1 === w && P(void 0), S(n, t, e)
        }

        function P(n) {
            1 === w ? C = {
                consentString: n ? n.getConsentData.consentData : void 0,
                vendorData: n ? n.getVendorConsents : void 0,
                gdprApplies: n ? n.getConsentData.gdprApplies : p
            } : (C = {
                consentString: n ? n.tcString : void 0,
                vendorData: n || void 0,
                gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : p
            }, n && n.addtlConsent && l.isStr(n.addtlConsent) && (C.addtlConsent = n.addtlConsent)), C.apiVersion = w, a.gdprDataHandler.setConsentData(C)
        }

        function S(n, t, e) {
            var o, a, i;
            !1 === t.haveExited && (t.haveExited = !0, o = t.context, a = t.args, i = t.nextFn, n ? y.value && 1 === w ? (l.logWarn(n + " 'allowAuctionWithoutConsent' activated.", e), i.apply(o, a)) : (l.logError(n + " Canceling auction as per consentManagement config.", e), "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : l.logError("Error executing bidsBackHandler")) : i.apply(o, a))
        }

        function _(n) {
            (n = n && (n.gdpr || n.usp ? n.gdpr : n)) && "object" === c(n) ? (l.isStr(n.cmpApi) ? d = n.cmpApi : (d = m, l.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(m, ")."))), l.isNumber(n.timeout) ? u = n.timeout : (u = v, l.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(v, ")."))), "boolean" == typeof n.allowAuctionWithoutConsent && (y.value = n.allowAuctionWithoutConsent, y.definedInConfig = !0), p = !0 === n.defaultGdprScope, l.logInfo("consentManagement module has been activated..."), "static" === d && (l.isPlainObject(n.consentData) ? (g = n.consentData, u = 0) : l.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), D || pbjs.requestBids.before(h, 50), D = !0) : l.logWarn("consentManagement config not defined, exiting consent manager")
        }
        o.b.getConfig("consentManagement", function(n) {
            return _(n.consentManagement)
        })
    }
}, [353]);
pbjsChunk([275], {
    361: function(n, t, e) {
        n.exports = e(362)
    },
    362: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), e.d(t, "consentAPI", function() {
            return c
        }), e.d(t, "consentTimeout", function() {
            return r
        }), e.d(t, "staticConsentData", function() {
            return u
        }), t.requestBidsHook = m, t.resetConsentData = function() {
            l = void 0, c = void 0, o.uspDataHandler.setConsentData(null)
        }, t.setConsentConfig = P;
        var s = e(0),
            a = e(3),
            o = e(9);

        function i(n) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            })(n)
        }
        var c, r, u, l, d = "iab",
            p = 50,
            f = !1,
            g = {
                iab: function(a, o, i) {
                    var t, e = function() {
                            var e = {};
                            return {
                                consentDataCallback: function(n, t) {
                                    t && n.uspString && (e.usPrivacy = n.uspString), e.usPrivacy ? a(e, i) : o("Unable to get USP consent string.", i)
                                }
                            }
                        }(),
                        s = {};
                    try {
                        window.__uspapi("getUSPData", 1, e.consentDataCallback)
                    } catch (n) {
                        for (var c = window; !t;) {
                            try {
                                c.frames.__uspapiLocator && (t = c)
                            } catch (n) {}
                            if (c === window.top) break;
                            c = c.parent
                        }
                        if (!t) return o("USP CMP not found.", i);
                        ! function(n, i, e) {
                            function a(n) {
                                var t = n && n.data && n.data.__uspapiReturn;
                                t && t.callId && void 0 !== s[t.callId] && (s[t.callId](t.returnValue, t.success), delete s[t.callId])
                            }
                            window.__uspapi = function(n, t, e) {
                                var a = Math.random() + "",
                                    o = {
                                        __uspapiCall: {
                                            command: n,
                                            version: t,
                                            callId: a
                                        }
                                    };
                                s[a] = e, i.postMessage(o, "*")
                            }, window.addEventListener("message", a, !1), window.__uspapi(n, 1, function(n, t) {
                                window.removeEventListener("message", a, !1), e(n, t)
                            })
                        }("getUSPData", t, e.consentDataCallback)
                    }
                },
                static: function(n, t, e) {
                    n(u, e)
                }
            };

        function m(n, t) {
            var e = {
                context: this,
                args: [t],
                nextFn: n,
                adUnits: t.adUnits || pbjs.adUnits,
                bidsBackHandler: t.bidsBackHandler,
                haveExited: !1,
                timer: null
            };
            if (!g[c]) return s.logWarn("USP framework (".concat(c, ") is not a supported framework. Aborting consentManagement module and resuming auction.")), e.nextFn.apply(e.context, e.args);
            g[c].call(this, v, b, e), e.haveExited || (0 === r ? v(void 0, e) : e.timer = setTimeout(function(n) {
                b("USPAPI workflow exceeded timeout threshold.", n)
            }.bind(null, e), r))
        }

        function v(n, t) {
            var e;
            !n || !n.usPrivacy ? b("USPAPI returned unexpected value during lookup process.", t, n) : (clearTimeout(t.timer), (e = n) && e.usPrivacy && (l = e.usPrivacy, o.uspDataHandler.setConsentData(l)), y(null, t))
        }

        function b(n, t, e) {
            clearTimeout(t.timer), y(n, t, e)
        }

        function y(n, t, e) {
            var a, o, i;
            !1 === t.haveExited && (t.haveExited = !0, a = t.context, o = t.args, i = t.nextFn, n && s.logWarn(n + " Resuming auction without consent data as per consentManagement config.", e), i.apply(a, o))
        }

        function P(n) {
            (n = n && n.usp) && "object" === i(n) ? (s.isStr(n.cmpApi) ? c = n.cmpApi : (c = d, s.logInfo("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat(d, ")."))), s.isNumber(n.timeout) ? r = n.timeout : (r = p, s.logInfo("consentManagement.usp config did not specify timeout. Using system default setting (".concat(p, ")."))), s.logInfo("USPAPI consentManagement module has been activated..."), "static" === c && (s.isPlainObject(n.consentData) && s.isPlainObject(n.consentData.getUSPData) ? (n.consentData.getUSPData.uspString && (u = {
                usPrivacy: n.consentData.getUSPData.uspString
            }), r = 0) : s.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), f || pbjs.requestBids.before(m, 50), f = !0) : s.logWarn("consentManagement.usp config not defined, exiting usp consent manager")
        }
        a.b.getConfig("consentManagement", function(n) {
            return P(n.consentManagement)
        })
    }
}, [361]);
pbjsChunk([274], {
    363: function(e, r, n) {
        e.exports = n(364)
    },
    364: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "spec", function() {
            return s
        });
        var c = n(0),
            t = n(1);

        function i() {
            return (i = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                }
                return e
            }).apply(this, arguments)
        }
        var a = 0,
            d = "consumable",
            s = {
                code: "consumable",
                isBidRequestValid: function(e) {
                    return !!(e.params.networkId && e.params.siteId && e.params.unitId && e.params.unitName)
                },
                buildRequests: function(e, r) {
                    var n = {
                        method: "POST",
                        url: "",
                        data: "",
                        bidRequest: []
                    };
                    if (e.length < 1) return n;
                    a = e[0].params.siteId, d = e[0].bidder;
                    var s = i({
                        placements: [],
                        time: Date.now(),
                        url: r.refererInfo.referer,
                        referrer: document.referrer,
                        source: [{
                            name: "prebidjs",
                            version: "4.15.0"
                        }]
                    }, e[0].params);
                    return r && r.gdprConsent && (s.gdpr = {
                        consent: r.gdprConsent.consentString,
                        applies: "boolean" != typeof r.gdprConsent.gdprApplies || r.gdprConsent.gdprApplies
                    }), r && r.uspConsent && (s.ccpa = r.uspConsent), e.map(function(e) {
                        var n, r = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes || e.sizes || [],
                            t = i({
                                divName: e.bidId,
                                adTypes: e.adTypes || (n = [], r.forEach(function(e) {
                                    var r = p.indexOf(e[0] + "x" + e[1]);
                                    0 <= r && n.push(r)
                                }), n)
                            }, e.params);
                        t.networkId && t.siteId && t.unitId && t.unitName && s.placements.push(t)
                    }), n.data = JSON.stringify(s), n.bidRequest = e, n.bidderRequest = r, n.url = "https://e.serverbid.com/api/v2", n
                },
                interpretResponse: function(e, r) {
                    var n = [],
                        t = r.bidRequest;
                    e = (e || {}).body;
                    for (var s, i = 0; i < t.length; i++) {
                        var a, d, p, u = {},
                            o = (p = t[i]).bidId;
                        e && (d = (a = e.decisions && e.decisions[o]) && a.pricing && a.pricing.clearPrice, a && d && (u.requestId = o, u.cpm = d, u.width = a.width, u.height = a.height, u.unitId = p.params.unitId, u.unitName = p.params.unitName, u.ad = (s = a, u.unitId, u.unitName, s.contents && s.contents[0] && s.contents[0].body + c.createTrackPixelHtml(s.impressionUrl)), u.currency = "USD", u.creativeId = a.adId, u.ttl = 30, u.netRevenue = !0, u.referrer = r.bidderRequest.refererInfo.referer, n.push(u)))
                    }
                    return n
                },
                getUserSyncs: function(e, r) {
                    return e.iframeEnabled ? [{
                        type: "iframe",
                        url: "https://sync.serverbid.com/ss/" + a + ".html"
                    }] : e.pixelEnabled && 0 < r.length ? r[0].body.pixels : void c.logWarn(d + ": Please enable iframe based user syncing.")
                }
            },
            p = [null, "120x90", "120x90", "468x60", "728x90", "300x250", "160x600", "120x600", "300x100", "180x150", "336x280", "240x400", "234x60", "88x31", "120x60", "120x240", "125x125", "220x250", "250x250", "250x90", "0x0", "200x90", "300x50", "320x50", "320x480", "185x185", "620x45", "300x125", "800x250"];
        p[77] = "970x90", p[123] = "970x250", p[43] = "300x600", p[286] = "970x66", p[3230] = "970x280", p[429] = "486x60", p[374] = "700x500", p[934] = "300x1050", p[1578] = "320x100", p[331] = "320x250", p[3301] = "320x267", p[2730] = "728x250", Object(t.registerBidder)(s)
    }
}, [363]);
pbjsChunk([0], {
    375: function(t, e, r) {
        t.exports = r(376)
    },
    376: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        }), __webpack_require__.d(__webpack_exports__, "ADAPTER_VERSION", function() {
            return ADAPTER_VERSION
        }), __webpack_require__.d(__webpack_exports__, "PROFILE_ID_PUBLISHERTAG", function() {
            return PROFILE_ID_PUBLISHERTAG
        }), __webpack_require__.d(__webpack_exports__, "spec", function() {
            return spec
        }), __webpack_exports__.tryGetCriteoFastBid = tryGetCriteoFastBid;
        var __WEBPACK_IMPORTED_MODULE_0__src_adloader_js__ = __webpack_require__(40),
            __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1),
            __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3),
            __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__ = __webpack_require__(2),
            __WEBPACK_IMPORTED_MODULE_4__src_utils_js__ = __webpack_require__(0),
            __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__ = __webpack_require__(10),
            __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__),
            __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__ = __webpack_require__(377),
            __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__),
            __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__ = __webpack_require__(7);

        function _extends() {
            return (_extends = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }).apply(this, arguments)
        }
        var GVLID = 91,
            ADAPTER_VERSION = 32,
            BIDDER_CODE = "criteo",
            CDB_ENDPOINT = "https://bidder.criteo.com/cdb",
            PROFILE_ID_INLINE = 207,
            PROFILE_ID_PUBLISHERTAG = 185,
            storage = Object(__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__.b)(GVLID),
            LOG_PREFIX = "Criteo: ",
            PUBLISHER_TAG_URL = "https://static.criteo.net/js/ld/publishertag.prebid.js",
            FAST_BID_PUBKEY_E = 65537,
            FAST_BID_PUBKEY_N = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",
            spec = {
                code: BIDDER_CODE,
                gvlid: GVLID,
                supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.b, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c],
                isBidRequestValid: function(t) {
                    return !(!t || !t.params || !t.params.zoneId && !t.params.networkId) && !(hasVideoMediaType(t) && !hasValidVideoMediaType(t))
                },
                buildRequests: function(t, e) {
                    var r, i, s, o, _;
                    if (_extends(e, {
                            publisherExt: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("fpd.context"),
                            userExt: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("fpd.user"),
                            ceh: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("criteo.ceh")
                        }), publisherTagAvailable() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, tryGetCriteoFastBid(), setTimeout(function() {
                            Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader_js__.a)(PUBLISHER_TAG_URL, BIDDER_CODE)
                        }, e.timeout)), _ = publisherTagAvailable() ? (r = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "4.15.0"), i = __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("enableSendAllBids"), r.setEnableSendAllBids && "function" == typeof r.setEnableSendAllBids && "boolean" == typeof i && r.setEnableSendAllBids(i), o = r.buildCdbUrl(), r.buildCdbRequest()) : (o = buildCdbUrl(s = buildContext(t, e)), buildCdbRequest(s, t, e))) return {
                        method: "POST",
                        url: o,
                        data: _,
                        bidRequests: t
                    }
                },
                interpretResponse: function(t, s) {
                    var e = t.body || t;
                    if (publisherTagAvailable()) {
                        var r = Criteo.PubTag.Adapters.Prebid.GetAdapter(s);
                        if (r) return r.interpretResponse(e, s)
                    }
                    var o = [];
                    return e && e.slots && __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.isArray(e.slots) && e.slots.forEach(function(e) {
                        var t = __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(s.bidRequests, function(t) {
                                return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid)
                            }),
                            r = t.bidId,
                            i = {
                                requestId: r,
                                adId: e.bidId || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.getUniqueIdentifierStr(),
                                cpm: e.cpm,
                                currency: e.currency,
                                netRevenue: !0,
                                ttl: e.ttl || 60,
                                creativeId: r,
                                width: e.width,
                                height: e.height,
                                dealId: e.dealCode
                            };
                        if (e.native)
                            if (t.params.nativeCallback) i.ad = createNativeAd(r, e.native, t.params.nativeCallback);
                            else {
                                if (!0 === __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("enableSendAllBids")) return;
                                i.native = createPrebidNativeAd(e.native), i.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c
                            }
                        else e.video ? (i.vastUrl = e.displayurl, i.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d) : i.ad = e.creative;
                        o.push(i)
                    }), o
                },
                onTimeout: function(t) {
                    var e;
                    publisherTagAvailable() && Array.isArray(t) && (e = [], t.forEach(function(t) {
                        -1 === e.indexOf(t.auctionId) && (e.push(t.auctionId), Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout())
                    }))
                },
                onBidWon: function(t) {
                    publisherTagAvailable() && t && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t)
                },
                onSetTargeting: function(t) {
                    publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t)
                }
            };

        function publisherTagAvailable() {
            return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid
        }

        function buildContext(t, e) {
            var r = "";
            e && e.refererInfo && (r = e.refererInfo.referer);
            var i = __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.parseUrl(r).search,
                s = {
                    url: r,
                    debug: "1" === i.pbt_debug,
                    noLog: "1" === i.pbt_nolog,
                    amp: !1
                };
            return t.forEach(function(t) {
                "amp" === t.params.integrationMode && (s.amp = !0)
            }), s
        }

        function buildCdbUrl(t) {
            var e = CDB_ENDPOINT;
            return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), e += "&wv=" + encodeURIComponent("4.15.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), t.amp && (e += "&im=1"), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), e
        }

        function checkNativeSendId(t) {
            return !t.nativeParams || !(t.nativeParams.image && !0 !== t.nativeParams.image.sendId || t.nativeParams.icon && !0 !== t.nativeParams.icon.sendId || t.nativeParams.clickUrl && !0 !== t.nativeParams.clickUrl.sendId || t.nativeParams.displayUrl && !0 !== t.nativeParams.displayUrl.sendId || t.nativeParams.privacyLink && !0 !== t.nativeParams.privacyLink.sendId || t.nativeParams.privacyIcon && !0 !== t.nativeParams.privacyIcon.sendId)
        }

        function buildCdbRequest(t, e, r) {
            var i, s = {
                publisher: {
                    url: t.url,
                    ext: r.publisherExt
                },
                slots: e.map(function(t) {
                    i = t.params.networkId || i;
                    var e, r = {
                        impid: t.adUnitCode,
                        transactionid: t.transactionId,
                        auctionId: t.auctionId
                    };
                    return t.params.zoneId && (r.zoneid = t.params.zoneId), t.fpd && t.fpd.context && (r.ext = t.fpd.context), t.params.ext && (r.ext = _extends({}, r.ext, t.params.ext)), t.params.publisherSubId && (r.publishersubid = t.params.publisherSubId), t.params.nativeCallback || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c)) ? (r.native = !0, checkNativeSendId(t) || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn(LOG_PREFIX + "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"), r.sizes = parseSizes(retrieveBannerSizes(t), parseNativeSize)) : r.sizes = parseSizes(retrieveBannerSizes(t), parseSize), hasVideoMediaType(t) && ((e = {
                        playersizes: parseSizes(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.video.playerSize"), parseSize),
                        mimes: t.mediaTypes.video.mimes,
                        protocols: t.mediaTypes.video.protocols,
                        maxduration: t.mediaTypes.video.maxduration,
                        api: t.mediaTypes.video.api
                    }).skip = t.params.video.skip, e.placement = t.params.video.placement, e.minduration = t.params.video.minduration, e.playbackmethod = t.params.video.playbackmethod, e.startdelay = t.params.video.startdelay, r.video = e), r
                })
            };
            return i && (s.publisher.networkid = i), s.user = {
                ext: r.userExt
            }, r && r.ceh && (s.user.ceh = r.ceh), r && r.gdprConsent && (s.gdprConsent = {}, void 0 !== r.gdprConsent.gdprApplies && (s.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies), s.gdprConsent.version = r.gdprConsent.apiVersion, void 0 !== r.gdprConsent.consentString && (s.gdprConsent.consentData = r.gdprConsent.consentString)), r && r.uspConsent && (s.user.uspIab = r.uspConsent), s
        }

        function retrieveBannerSizes(t) {
            return __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.banner.sizes") || t.sizes
        }

        function parseSizes(t, e) {
            return Array.isArray(t[0]) ? t.map(function(t) {
                return e(t)
            }) : [e(t)]
        }

        function parseSize(t) {
            return t[0] + "x" + t[1]
        }

        function parseNativeSize(t) {
            return void 0 === t[0] && void 0 === t[1] ? "2x2" : t[0] + "x" + t[1]
        }

        function hasVideoMediaType(t) {
            return void 0 !== __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "params.video") && void 0 !== __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.video")
        }

        function hasValidVideoMediaType(e) {
            var r = !0;
            ["mimes", "playerSize", "maxduration", "protocols", "api"].forEach(function(t) {
                void 0 === __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(e, "mediaTypes.video." + t) && (r = !1, __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError("Criteo Bid Adapter: mediaTypes.video." + t + " is required"))
            });
            if (["skip", "placement", "playbackmethod"].forEach(function(t) {
                    void 0 === __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(e, "params.video." + t) && (r = !1, __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError("Criteo Bid Adapter: params.video." + t + " is required"))
                }), r) {
                if ("instream" == e.mediaTypes.video.context && 1 === e.params.video.placement) return 1;
                if ("outstream" == e.mediaTypes.video.context && 1 !== e.params.video.placement) return 1
            }
        }

        function createPrebidNativeAd(t) {
            return {
                title: t.products[0].title,
                body: t.products[0].description,
                sponsoredBy: t.advertiser.description,
                icon: t.advertiser.logo,
                image: t.products[0].image,
                clickUrl: t.products[0].click_url,
                privacyLink: t.privacy.optout_click_url,
                privacyIcon: t.privacy.optout_image_url,
                cta: t.products[0].call_to_action,
                price: t.products[0].price,
                impressionTrackers: t.impression_pixels.map(function(t) {
                    return t.url
                })
            }
        }

        function createNativeAd(t, e, r) {
            var i = "criteo_prebid_native_slots";
            return window[i] = window[i] || {}, window[i][t] = {
                callback: r,
                payload: e
            }, '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i, ';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(t, '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>')
        }

        function tryGetCriteoFastBid() {
            try {
                var fastBidStorageKey = "criteo_fast_bid",
                    hashPrefix = "// Hash: ",
                    fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey),
                    firstLineEndPosition, firstLine, publisherTagHash, publisherTag;
                null !== fastBidFromStorage && (firstLineEndPosition = fastBidFromStorage.indexOf("\n"), firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim(), firstLine.substr(0, hashPrefix.length) !== hashPrefix ? (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("No hash found in FastBid"), storage.removeDataFromLocalStorage(fastBidStorageKey)) : (publisherTagHash = firstLine.substr(hashPrefix.length), publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1), Object(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__.verify)(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E) ? (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logInfo("Using Criteo FastBid"), eval(publisherTag)) : (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("Invalid Criteo FastBid found"), storage.removeDataFromLocalStorage(fastBidStorageKey))))
            } catch (t) {}
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__.registerBidder)(spec)
    },
    377: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(378),
            n = r(379);
        e.verify = function(t, e, r, i) {
            var s = new a.BigInteger(a.b64toHex(e)),
                o = new a.BigInteger(a.b64toHex(r)),
                _ = s.modPowInt(i, o);
            return a.removeExtraSymbols(_.toHexString()) === n.Sha256.hash(t)
        }
    },
    378: function(t, e, r) {
        "use strict";
        var i;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = (T.prototype.toHexString = function() {
            if (this.s < 0) return "-" + this.negate().toHexString();
            var t, e = !1,
                r = "",
                i = this.t,
                s = this.DB - i * this.DB % 4;
            if (0 < i--)
                for (s < this.DB && 0 < (t = this[i] >> s) && (e = !0, r = c(t)); 0 <= i;) s < 4 ? (t = (this[i] & (1 << s) - 1) << 4 - s, t |= this[--i] >> (s += this.DB - 4)) : (t = this[i] >> (s -= 4) & 15, s <= 0 && (s += this.DB, --i)), 0 < t && (e = !0), e && (r += c(t));
            return e ? r : "0"
        }, T.prototype.fromHexString = function(t) {
            if (null !== t) {
                this.t = 0, this.s = 0;
                for (var e = t.length, r = !1, i = 0; 0 <= --e;) {
                    var s = n(t, e);
                    s < 0 ? "-" == t.charAt(e) && (r = !0) : (r = !1, 0 == i ? this[this.t++] = s : i + 4 > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - i) - 1) << i, this[this.t++] = s >> this.DB - i) : this[this.t - 1] |= s << i, (i += 4) >= this.DB && (i -= this.DB))
                }
                this.clamp(), r && T.ZERO.subTo(this, this)
            }
        }, T.prototype.negate = function() {
            var t = b();
            return T.ZERO.subTo(this, t), t
        }, T.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this
        }, T.prototype.mod = function(t) {
            var e = b();
            return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(T.ZERO) && t.subTo(e, e), e
        }, T.prototype.copyTo = function(t) {
            for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
            t.t = this.t, t.s = this.s
        }, T.prototype.lShiftTo = function(t, e) {
            for (var r = t % this.DB, i = this.DB - r, s = (1 << i) - 1, o = Math.floor(t / this.DB), _ = this.s << r & this.DM, a = this.t - 1; 0 <= a; --a) e[a + o + 1] = this[a] >> i | _, _ = (this[a] & s) << r;
            for (a = o - 1; 0 <= a; --a) e[a] = 0;
            e[o] = _, e.t = this.t + o + 1, e.s = this.s, e.clamp()
        }, T.prototype.invDigit = function() {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e
        }, T.prototype.dlShiftTo = function(t, e) {
            for (var r = this.t - 1; 0 <= r; --r) e[r + t] = this[r];
            for (r = t - 1; 0 <= r; --r) e[r] = 0;
            e.t = this.t + t, e.s = this.s
        }, T.prototype.squareTo = function(t) {
            for (var e = this.abs(), r = t.t = 2 * e.t; 0 <= --r;) t[r] = 0;
            for (r = 0; r < e.t - 1; ++r) {
                var i = e.am(r, e[r], t, 2 * r, 0, 1);
                (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1)
            }
            0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp()
        }, T.prototype.multiplyTo = function(t, e) {
            var r = this.abs(),
                i = t.abs(),
                s = r.t;
            for (e.t = s + i.t; 0 <= --s;) e[s] = 0;
            for (s = 0; s < i.t; ++s) e[s + r.t] = r.am(0, i[s], e, s, 0, r.t);
            e.s = 0, e.clamp(), this.s != t.s && T.ZERO.subTo(e, e)
        }, T.prototype.divRemTo = function(t, e, r) {
            var i = t.abs();
            if (!(i.t <= 0)) {
                var s = this.abs();
                if (s.t < i.t) return null != e && e.fromHexString("0"), void(null != r && this.copyTo(r));
                null == r && (r = b());
                var o = b(),
                    _ = this.s,
                    a = t.s,
                    n = this.DB - D(i[i.t - 1]);
                0 < n ? (i.lShiftTo(n, o), s.lShiftTo(n, r)) : (i.copyTo(o), s.copyTo(r));
                var p = o.t,
                    c = o[p - 1];
                if (0 != c) {
                    var d = c * (1 << this.F1) + (1 < p ? o[p - 2] >> this.F2 : 0),
                        u = this.FV / d,
                        h = (1 << this.F1) / d,
                        l = 1 << this.F2,
                        f = r.t,
                        E = f - p,
                        v = null == e ? b() : e;
                    for (o.dlShiftTo(E, v), 0 <= r.compareTo(v) && (r[r.t++] = 1, r.subTo(v, r)), T.ONE.dlShiftTo(p, v), v.subTo(o, o); o.t < p;) o[o.t++] = 0;
                    for (; 0 <= --E;) {
                        var m = r[--f] == c ? this.DM : Math.floor(r[f] * u + (r[f - 1] + l) * h);
                        if ((r[f] += o.am(0, m, r, E, 0, p)) < m)
                            for (o.dlShiftTo(E, v), r.subTo(v, r); r[f] < --m;) r.subTo(v, r)
                    }
                    null != e && (r.drShiftTo(p, e), _ != a && T.ZERO.subTo(e, e)), r.t = p, r.clamp(), 0 < n && r.rShiftTo(n, r), _ < 0 && T.ZERO.subTo(r, r)
                }
            }
        }, T.prototype.rShiftTo = function(t, e) {
            e.s = this.s;
            var r = Math.floor(t / this.DB);
            if (r >= this.t) e.t = 0;
            else {
                var i = t % this.DB,
                    s = this.DB - i,
                    o = (1 << i) - 1;
                e[0] = this[r] >> i;
                for (var _ = r + 1; _ < this.t; ++_) e[_ - r - 1] |= (this[_] & o) << s, e[_ - r] = this[_] >> i;
                0 < i && (e[this.t - r - 1] |= (this.s & o) << s), e.t = this.t - r, e.clamp()
            }
        }, T.prototype.drShiftTo = function(t, e) {
            for (var r = t; r < this.t; ++r) e[r - t] = this[r];
            e.t = Math.max(this.t - t, 0), e.s = this.s
        }, T.prototype.subTo = function(t, e) {
            for (var r = 0, i = 0, s = Math.min(t.t, this.t); r < s;) i += this[r] - t[r], e[r++] = i & this.DM, i >>= this.DB;
            if (t.t < this.t) {
                for (i -= t.s; r < this.t;) i += this[r], e[r++] = i & this.DM, i >>= this.DB;
                i += this.s
            } else {
                for (i += this.s; r < t.t;) i -= t[r], e[r++] = i & this.DM, i >>= this.DB;
                i -= t.s
            }
            e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : 0 < i && (e[r++] = i), e.t = r, e.clamp()
        }, T.prototype.clamp = function() {
            for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;) --this.t
        }, T.prototype.modPowInt = function(t, e) {
            var r = new(t < 256 || e.isEven() ? d : h)(e);
            return this.exp(t, r)
        }, T.prototype.exp = function(t, e) {
            if (4294967295 < t || t < 1) return T.ONE;
            var r, i = b(),
                s = b(),
                o = e.convert(this),
                _ = D(t) - 1;
            for (o.copyTo(i); 0 <= --_;) e.sqrTo(i, s), 0 < (t & 1 << _) ? e.mulTo(s, o, i) : (r = i, i = s, s = r);
            return e.revert(i)
        }, T.prototype.isEven = function() {
            return 0 == (0 < this.t ? 1 & this[0] : this.s)
        }, T.prototype.compareTo = function(t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var r = this.t;
            if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
            for (; 0 <= --r;)
                if (0 != (e = this[r] - t[r])) return e;
            return 0
        }, T.prototype.am1 = function(t, e, r, i, s, o) {
            for (; 0 <= --o;) {
                var _ = e * this[t++] + r[i] + s;
                s = Math.floor(_ / 67108864), r[i++] = 67108863 & _
            }
            return s
        }, T.prototype.am2 = function(t, e, r, i, s, o) {
            for (var _ = 32767 & e, a = e >> 15; 0 <= --o;) {
                var n = 32767 & this[t],
                    p = this[t++] >> 15,
                    c = a * n + p * _;
                s = ((n = _ * n + ((32767 & c) << 15) + r[i] + (1073741823 & s)) >>> 30) + (c >>> 15) + a * p + (s >>> 30), r[i++] = 1073741823 & n
            }
            return s
        }, T.prototype.am3 = function(t, e, r, i, s, o) {
            for (var _ = 16383 & e, a = e >> 14; 0 <= --o;) {
                var n = 16383 & this[t],
                    p = this[t++] >> 14,
                    c = a * n + p * _;
                s = ((n = _ * n + ((16383 & c) << 14) + r[i] + s) >> 28) + (c >> 14) + a * p, r[i++] = 268435455 & n
            }
            return s
        }, T);

        function T(t) {
            null !== t && this.fromHexString(t)
        }

        function b() {
            return new s(null)
        }

        function D(t) {
            var e, r = 1;
            return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r
        }
        e.BigInteger = s, e.nbi = b, e.nbits = D;
        for (var o = [], _ = "0".charCodeAt(0), a = 0; a <= 9; ++a) o[_++] = a;
        for (_ = "a".charCodeAt(0), a = 10; a < 36; ++a) o[_++] = a;
        for (_ = "A".charCodeAt(0), a = 10; a < 36; ++a) o[_++] = a;

        function n(t, e) {
            var r = o[t.charCodeAt(e)];
            return null == r ? -1 : r
        }
        e.intAt = n;
        var p = "0123456789abcdefghijklmnopqrstuvwxyz";

        function c(t) {
            return p.charAt(t)
        }
        e.int2char = c;
        e.b64toHex = function(t) {
            for (var e = "", r = 0, i = 0, s = 0; s < t.length && "=" != t.charAt(s); ++s) {
                var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(s));
                o < 0 || (r = 0 == r ? (e += c(o >> 2), i = 3 & o, 1) : 1 == r ? (e += c(i << 2 | o >> 4), i = 15 & o, 2) : 2 == r ? (e += c(i), e += c(o >> 2), i = 3 & o, 3) : (e += c(i << 2 | o >> 4), e += c(15 & o), 0))
            }
            return 1 == r && (e += c(i << 2)), e
        }, e.removeExtraSymbols = function(t) {
            return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "")
        };
        var d = (u.prototype.convert = function(t) {
            return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t
        }, u.prototype.revert = function(t) {
            return t
        }, u.prototype.reduce = function(t) {
            t.divRemTo(this.m, null, t)
        }, u.prototype.mulTo = function(t, e, r) {
            t.multiplyTo(e, r), this.reduce(r)
        }, u.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e)
        }, u);

        function u(t) {
            this.m = t
        }
        var h = (l.prototype.convert = function(t) {
            var e = b();
            return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(s.ZERO) && this.m.subTo(e, e), e
        }, l.prototype.revert = function(t) {
            var e = b();
            return t.copyTo(e), this.reduce(e), e
        }, l.prototype.reduce = function(t) {
            for (; t.t <= this.mt2;) t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var r = 32767 & t[e],
                    i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++
            }
            t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t)
        }, l.prototype.mulTo = function(t, e, r) {
            t.multiplyTo(e, r), this.reduce(r)
        }, l.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e)
        }, l);

        function l(t) {
            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
        }

        function f(t) {
            var e = b();
            return e.fromHexString(t.toString()), e
        }
        e.nbv = f, s.ZERO = f(0), s.ONE = f(1), i = "Microsoft Internet Explorer" == navigator.appName ? (s.prototype.am = s.prototype.am2, 30) : "Netscape" != navigator.appName ? (s.prototype.am = s.prototype.am1, 26) : (s.prototype.am = s.prototype.am3, 28), s.prototype.DB = i, s.prototype.DM = (1 << i) - 1, s.prototype.DV = 1 << i;
        s.prototype.FV = Math.pow(2, 52), s.prototype.F1 = 52 - i, s.prototype.F2 = 2 * i - 52
    },
    379: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = (y.hash = function(t) {
            t = y.utf8Encode(t || "");
            for (var e = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], r = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], i = (t += String.fromCharCode(128)).length / 4 + 2, s = Math.ceil(i / 16), o = new Array(s), _ = 0; _ < s; _++) {
                o[_] = new Array(16);
                for (var a = 0; a < 16; a++) o[_][a] = t.charCodeAt(64 * _ + 4 * a) << 24 | t.charCodeAt(64 * _ + 4 * a + 1) << 16 | t.charCodeAt(64 * _ + 4 * a + 2) << 8 | t.charCodeAt(64 * _ + 4 * a + 3) << 0
            }
            var n = 8 * (t.length - 1) / Math.pow(2, 32),
                p = 8 * (t.length - 1) >>> 0;
            for (o[s - 1][14] = Math.floor(n), o[s - 1][15] = p, _ = 0; _ < s; _++) {
                for (var c = new Array(64), d = 0; d < 16; d++) c[d] = o[_][d];
                for (d = 16; d < 64; d++) c[d] = y.q1(c[d - 2]) + c[d - 7] + y.q0(c[d - 15]) + c[d - 16] >>> 0;
                for (var u = r[0], h = r[1], l = r[2], f = r[3], E = r[4], v = r[5], m = r[6], T = r[7], d = 0; d < 64; d++) {
                    var b = T + y.z1(E) + y.Ch(E, v, m) + e[d] + c[d],
                        D = y.z0(u) + y.Maj(u, h, l);
                    T = m, m = v, v = E, E = f + b >>> 0, f = l, l = h, h = u, u = b + D >>> 0
                }
                r[0] = r[0] + u >>> 0, r[1] = r[1] + h >>> 0, r[2] = r[2] + l >>> 0, r[3] = r[3] + f >>> 0, r[4] = r[4] + E >>> 0, r[5] = r[5] + v >>> 0, r[6] = r[6] + m >>> 0, r[7] = r[7] + T >>> 0
            }
            for (var P = new Array(r.length), T = 0; T < r.length; T++) P[T] = ("00000000" + r[T].toString(16)).slice(-8);
            return P.join("")
        }, y.utf8Encode = function(e) {
            try {
                return (new TextEncoder).encode(e).reduce(function(t, e) {
                    return t + String.fromCharCode(e)
                }, "")
            } catch (t) {
                return unescape(encodeURIComponent(e))
            }
        }, y.ROTR = function(t, e) {
            return e >>> t | e << 32 - t
        }, y.z0 = function(t) {
            return y.ROTR(2, t) ^ y.ROTR(13, t) ^ y.ROTR(22, t)
        }, y.z1 = function(t) {
            return y.ROTR(6, t) ^ y.ROTR(11, t) ^ y.ROTR(25, t)
        }, y.q0 = function(t) {
            return y.ROTR(7, t) ^ y.ROTR(18, t) ^ t >>> 3
        }, y.q1 = function(t) {
            return y.ROTR(17, t) ^ y.ROTR(19, t) ^ t >>> 10
        }, y.Ch = function(t, e, r) {
            return t & e ^ ~t & r
        }, y.Maj = function(t, e, r) {
            return t & e ^ t & r ^ e & r
        }, y);

        function y() {}
        e.Sha256 = i
    }
}, [375]);
pbjsChunk([262], {
    394: function(e, r, t) {
        e.exports = t(395)
    },
    395: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "adpodUtils", function() {
            return T
        }), r.buildDfpVideoUrl = v, r.notifyTranslationModule = A, r.buildAdpodVideoUrl = E;
        var a = t(69),
            d = t(44),
            p = t(0),
            o = t(3),
            n = t(13),
            c = t(23),
            i = t(8),
            s = t.n(i),
            u = t(5),
            l = t.n(u);

        function _(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }

        function b() {
            return (b = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }).apply(this, arguments)
        }
        var f = {
                env: "vp",
                gdfp_req: 1,
                output: "vast",
                unviewed_position_start: 1
            },
            T = {};

        function v(e) {
            if (e.params || e.url) {
                var r = e.adUnit,
                    t = e.bid || d.a.getWinningBids(r.code)[0],
                    a = {};
                if (e.url && (a = Object(p.parseUrl)(e.url, {
                        noDecodeWholeURL: !0
                    }), Object(p.isEmpty)(e.params))) return function(e, r, t) {
                    var a = g(r, e, "search");
                    a && (e.search.description_url = a);
                    var o = j(r, t);
                    return e.search.cust_params = e.search.cust_params ? e.search.cust_params + "%26" + o : o, Object(p.buildUrl)(e)
                }(a, t, e);
                var o = {
                        correlator: Date.now(),
                        sz: Object(p.parseSizesInput)(Object(p.deepAccess)(r, "mediaTypes.video.playerSize")).join("|"),
                        url: encodeURIComponent(location.href)
                    },
                    n = j(t, e),
                    c = b({}, f, a.search, o, e.params, {
                        cust_params: n
                    }),
                    i = g(t, e, "params");
                return i && (c.description_url = i), Object(p.buildUrl)({
                    protocol: "https",
                    host: "securepubads.g.doubleclick.net",
                    pathname: "/gampad/ads",
                    search: c
                })
            }
            Object(p.logError)("A params object or a url is required to use pbjs.adServers.dfp.buildVideoUrl")
        }

        function A(e) {
            e.call(this, "dfp")
        }

        function E() {
            var d, r, e, t, a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                s = a.code,
                u = a.params,
                l = a.callback;
            u && l ? (d = {
                correlator: Date.now(),
                sz: (r = s, e = c.a.getAdUnits().filter(function(e) {
                    return e.code === r
                }), t = Object(p.deepAccess)(e[0], "mediaTypes.video.playerSize"), Object(p.parseSizesInput)(t).join("|")),
                url: encodeURIComponent(location.href)
            }, T.getTargeting({
                codes: [s],
                callback: function(e, r) {
                    var t;
                    if (e) return void l(e, null);
                    var a = (_(t = {}, T.TARGETING_KEY_PB_CAT_DUR, void 0), _(t, T.TARGETING_KEY_CACHE_ID, void 0), t),
                        o = {};
                    r[s] && (o = r[s].reduce(function(e, r) {
                        return Object.keys(r)[0] === T.TARGETING_KEY_PB_CAT_DUR ? e[T.TARGETING_KEY_PB_CAT_DUR] = void 0 !== e[T.TARGETING_KEY_PB_CAT_DUR] ? e[T.TARGETING_KEY_PB_CAT_DUR] + "," + r[T.TARGETING_KEY_PB_CAT_DUR] : r[T.TARGETING_KEY_PB_CAT_DUR] : Object.keys(r)[0] === T.TARGETING_KEY_CACHE_ID && (e[T.TARGETING_KEY_CACHE_ID] = r[T.TARGETING_KEY_CACHE_ID]), e
                    }, a));
                    var n = encodeURIComponent(Object(p.formatQS)(o)),
                        c = b({}, f, d, u, {
                            cust_params: n
                        }),
                        i = Object(p.buildUrl)({
                            protocol: "https",
                            host: "securepubads.g.doubleclick.net",
                            pathname: "/gampad/ads",
                            search: c
                        });
                    l(null, i)
                }
            })) : Object(p.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl")
        }

        function g(e, r, t) {
            if (!o.b.getConfig("cache.url"))
                if (Object(p.deepAccess)(r, "".concat(t, ".description_url"))) Object(p.logError)("input cannnot contain description_url");
                else {
                    var a = e && e.vastUrl;
                    if (a) return encodeURIComponent(a)
                }
        }

        function j(e, r) {
            var t, a = e && e.adserverTargeting || {},
                o = {},
                n = r && r.adUnit;
            n && (o = (t = d.a.getAllTargeting(n.code)) ? t[n.code] : {});
            var c = b({}, {
                hb_uuid: e && e.videoCacheKey
            }, {
                hb_cache_id: e && e.videoCacheKey
            }, o, a);
            s.a.emit(l.a.EVENTS.SET_TARGETING, _({}, n.code, c));
            var i = b({}, c, Object(p.deepAccess)(r, "params.cust_params"));
            return encodeURIComponent(Object(p.formatQS)(i))
        }
        Object(n.a)("registerAdserver").before(A), Object(a.a)("dfp", {
            buildVideoUrl: v,
            buildAdpodVideoUrl: E,
            getAdpodTargeting: function(e) {
                return T.getTargeting(e)
            }
        }), Object(n.e)("adpod", T)
    }
}, [394]);
pbjsChunk([254], {
    410: function(e, r, t) {
        e.exports = t(411)
    },
    411: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "emxAdapter", function() {
            return m
        }), t.d(r, "spec", function() {
            return v
        });
        var s = t(0),
            i = t(1),
            o = t(2),
            n = t(11),
            a = t(12),
            d = t.n(a),
            u = t(10),
            p = t.n(u);

        function c() {
            return (c = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }
        var l = "emx_digital",
            g = "https://js.brealtime.com/outstream/1.30.0/bundle.js",
            m = {
                validateSizes: function(e) {
                    return s.isArray(e) && void 0 !== e[0] ? e.every(function(e) {
                        return s.isArray(e) && 2 === e.length
                    }) : (s.logWarn(l + ": Sizes should be an array"), !1)
                },
                checkVideoContext: function(e) {
                    return e && e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context && ("instream" === e.mediaTypes.video.context || "outstream" === e.mediaTypes.video.context)
                },
                buildBanner: function(e) {
                    var r = [],
                        r = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes ? e.mediaTypes.banner.sizes : e.sizes;
                    return m.validateSizes(r) || (s.logWarn(l + ": could not detect mediaType banner sizes. Assigning to bid sizes instead"), r = e.sizes), {
                        format: r.map(function(e) {
                            return {
                                w: e[0],
                                h: e[1]
                            }
                        }),
                        w: r[0][0],
                        h: r[0][1]
                    }
                },
                formatVideoResponse: function(r, e, t) {
                    return r.vastXml = e.adm, t.bidderRequest && t.bidderRequest.bids && 0 < t.bidderRequest.bids.length && p()(t.bidderRequest.bids, function(e) {
                        return r.requestId && e.bidId && r.requestId === e.bidId && e.mediaTypes && e.mediaTypes.video && "outstream" === e.mediaTypes.video.context
                    }) && (r.renderer = m.createRenderer(r, {
                        id: e.id,
                        url: g
                    })), r
                },
                isMobile: function() {
                    return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)
                },
                isConnectedTV: function() {
                    return /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)
                },
                getDevice: function() {
                    return {
                        ua: navigator.userAgent,
                        js: 1,
                        dnt: "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack || "1" === navigator.msDoNotTrack ? 1 : 0,
                        h: screen.height,
                        w: screen.width,
                        devicetype: m.isMobile() ? 1 : m.isConnectedTV() ? 3 : 2,
                        language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
                    }
                },
                cleanProtocols: function(e) {
                    return e.protocols && d()(e.protocols, 7) && (s.logWarn(l + ": VAST 4.0 is currently not supported. This protocol has been filtered out of the request."), e.protocols = e.protocols.filter(function(e) {
                        return 7 !== e
                    })), e
                },
                outstreamRender: function(r) {
                    r.renderer.push(function() {
                        var e = r && r.params && r.params[0] && r.params[0].video ? r.params[0].video : {};
                        window.emxVideoQueue = window.emxVideoQueue || [], window.queueEmxVideo({
                            id: r.adUnitCode,
                            adsResponses: r.vastXml,
                            options: e
                        }), window.emxVideoReady && window.videojs && window.emxVideoReady()
                    })
                },
                createRenderer: function(e, r) {
                    var t = n.a.install({
                        id: r.id,
                        url: g,
                        loaded: !1
                    });
                    try {
                        t.setRender(m.outstreamRender)
                    } catch (e) {
                        s.logWarn("Prebid Error calling setRender on renderer", e)
                    }
                    return t
                },
                buildVideo: function(e) {
                    var r = c(e.mediaTypes.video, e.params.video);
                    return s.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = e.mediaTypes.video.playerSize[0][0], r.h = e.mediaTypes.video.playerSize[0][1]) : (r.w = e.mediaTypes.video.playerSize[0], r.h = e.mediaTypes.video.playerSize[1]), m.cleanProtocols(r)
                },
                parseResponse: function(e) {
                    try {
                        return decodeURIComponent(e.replace(/%(?![0-9][0-9a-fA-F]+)/g, "%25"))
                    } catch (e) {
                        s.logError("emx_digitalBidAdapter", "error", e)
                    }
                },
                getReferrer: function() {
                    try {
                        return window.top.document.referrer
                    } catch (e) {
                        return document.referrer
                    }
                },
                getSite: function(e) {
                    return {
                        domain: s.parseUrl(e.referer).hostname,
                        page: e.referer,
                        ref: m.getReferrer()
                    }
                },
                getGdpr: function(e, r) {
                    return e.gdprConsent && (r.regs = {
                        ext: {
                            gdpr: !0 === e.gdprConsent.gdprApplies ? 1 : 0
                        }
                    }), e.gdprConsent && e.gdprConsent.gdprApplies && (r.user = {
                        ext: {
                            consent: e.gdprConsent.consentString
                        }
                    }), r
                }
            },
            v = {
                code: l,
                gvlid: 183,
                supportedMediaTypes: [o.b, o.d],
                isBidRequestValid: function(e) {
                    if (!e || !e.params) return s.logWarn(l + ": Missing bid or bid params."), !1;
                    if (e.bidder !== l) return s.logWarn(l + ': Must use "emx_digital" as bidder code.'), !1;
                    if (!e.params.tagid || !s.isStr(e.params.tagid)) return s.logWarn(l + ": Missing tagid param or tagid present and not type String."), !1;
                    if (e.mediaTypes && e.mediaTypes.banner) {
                        var r = e.mediaTypes.banner.sizes ? e.mediaTypes.banner.sizes : e.sizes;
                        if (!m.validateSizes(r)) return s.logWarn(l + ": Missing sizes in bid"), !1
                    } else if (e.mediaTypes && e.mediaTypes.video) {
                        if (!m.checkVideoContext(e)) return s.logWarn(l + ": Missing video context: instream or outstream"), !1;
                        if (!e.mediaTypes.video.playerSize) return s.logWarn(l + ": Missing video playerSize"), !1
                    }
                    return !0
                },
                buildRequests: function(e, r) {
                    var a = [],
                        t = "https://hb.emxdgt.com?t=" + (r.timeout || "") + "&ts=" + Date.now() + "&src=pbjs",
                        o = -1 < location.protocol.indexOf("https") ? 1 : 0,
                        i = m.getDevice(),
                        n = m.getSite(r.refererInfo);
                    s._each(e, function(e) {
                        var r = s.getBidIdParameter("tagid", e.params),
                            t = parseFloat(s.getBidIdParameter("bidfloor", e.params)) || 0,
                            i = !!e.mediaTypes.video,
                            n = c({
                                id: e.bidId,
                                tid: e.transactionId,
                                tagid: r,
                                secure: o
                            }, i ? {
                                video: m.buildVideo(e)
                            } : {
                                banner: m.buildBanner(e)
                            }, 0 < t ? {
                                bidfloor: t,
                                bidfloorcur: "USD"
                            } : {});
                        a.push(n)
                    });
                    var d = {
                            id: r.auctionId,
                            imp: a,
                            device: i,
                            site: n,
                            cur: "USD",
                            version: "1.5.1"
                        },
                        d = m.getGdpr(r, c({}, d));
                    return r && r.uspConsent && (d.us_privacy = r.uspConsent), {
                        method: "POST",
                        url: t,
                        data: JSON.stringify(d),
                        options: {
                            withCredentials: !0
                        },
                        bidderRequest: r
                    }
                },
                interpretResponse: function(e, n) {
                    var a = [],
                        r = e.body || {};
                    return r.seatbid && 0 < r.seatbid.length && r.seatbid[0].bid && r.seatbid.forEach(function(e) {
                        e = e.bid[0];
                        var r = !1,
                            t = m.parseResponse(e.adm) || "",
                            i = {
                                requestId: e.id,
                                cpm: e.price,
                                width: e.w,
                                height: e.h,
                                creativeId: e.crid || e.id,
                                dealId: e.dealid || null,
                                currency: "USD",
                                netRevenue: !0,
                                ttl: e.ttl,
                                ad: t
                            };
                        e.adm && -1 < e.adm.indexOf("<?xml version=") && (r = !0, i = m.formatVideoResponse(i, c({}, e), n)), i.mediaType = r ? o.d : o.b, a.push(i)
                    }), a
                },
                getUserSyncs: function(e, r, t) {
                    var i, n = [];
                    return e.iframeEnabled && (i = "https://biddr.brealtime.com/check.html", t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : i += "?gdpr_consent=".concat(t.consentString)), n.push({
                        type: "iframe",
                        url: i
                    })), n
                }
            };
        Object(i.registerBidder)(v)
    }
}, [410]);
pbjsChunk([241], {
    440: function(e, r, n) {
        e.exports = n(441)
    },
    441: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "purpose1Rule", function() {
            return O
        }), n.d(r, "purpose2Rule", function() {
            return h
        }), n.d(r, "purpose7Rule", function() {
            return j
        }), n.d(r, "enforcementRules", function() {
            return C
        }), n.d(r, "internal", function() {
            return w
        }), r.getGvlid = B, r.validateRules = V, r.deviceAccessHook = H, r.userSyncHook = R, r.userIdHook = T, r.makeBidRequestsHook = G, r.enableAnalyticsHook = M, r.setEnforcementConfig = U;
        var l = n(0),
            c = n(3),
            s = n(9),
            t = n(10),
            o = n.n(t),
            a = n(12),
            p = n.n(a),
            i = n(1),
            u = n(13),
            d = n(7),
            f = n(8),
            g = n.n(f),
            b = n(5);
        n.n(b);

        function v(r, e) {
            var n, t = Object.keys(r);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(r), e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })), t.push.apply(t, n)), t
        }

        function y(o) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? v(Object(a), !0).forEach(function(e) {
                    var r, n, t;
                    r = o, t = a[n = e], n in r ? Object.defineProperty(r, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[n] = t
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : v(Object(a)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return o
        }

        function m() {
            return (m = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                }
                return e
            }).apply(this, arguments)
        }

        function A(e) {
            return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var O, h, j, C, D = {
                purpose1: {
                    id: 1,
                    name: "storage"
                },
                purpose2: {
                    id: 2,
                    name: "basicAds"
                },
                purpose7: {
                    id: 7,
                    name: "measurement"
                }
            },
            E = [{
                purpose: "storage",
                enforcePurpose: !0,
                enforceVendor: !0,
                vendorExceptions: []
            }, {
                purpose: "basicAds",
                enforcePurpose: !0,
                enforceVendor: !0,
                vendorExceptions: []
            }],
            P = [],
            k = [],
            S = [],
            F = !1,
            w = {
                getGvlidForBidAdapter: function(e) {
                    var r = null; {
                        var n;
                        !(e = e || c.b.getCurrentBidder()) || (n = s.default.getBidAdapter(e)) && n.getSpec && (r = n.getSpec().gvlid)
                    }
                    return r
                },
                getGvlidForUserIdModule: function(e) {
                    return "object" === A(e) ? e.gvlid : null
                },
                getGvlidForAnalyticsAdapter: function(e) {
                    return s.default.getAnalyticsAdapter(e) && (s.default.getAnalyticsAdapter(e).gvlid || null)
                }
            };

        function B(e) {
            var r = null;
            if (e) {
                var n = c.b.getConfig("gvlMapping"),
                    t = "string" == typeof e ? e : e.name;
                if (n && n[t]) return r = n[t];
                r = w.getGvlidForBidAdapter(t) || w.getGvlidForUserIdModule(e) || w.getGvlidForAnalyticsAdapter(t)
            }
            return r
        }

        function V(r, e, n, t) {
            var o = D[Object.keys(D).filter(function(e) {
                return D[e].name === r.purpose
            })[0]].id;
            if (p()(r.vendorExceptions || [], n)) return !0;
            var a = l.deepAccess(e, "vendorData.purpose.consents.".concat(o)),
                i = l.deepAccess(e, "vendorData.vendor.consents.".concat(t)),
                c = l.deepAccess(e, "vendorData.purpose.legitimateInterests.".concat(o)),
                s = !1 === r.enforcePurpose || !0 === a,
                u = !1 === r.enforceVendor || !0 === i;
            return 2 === o ? s && u || !0 === c : s && u
        }

        function H(e, r, n, t) {
            var o, a, i;
            t = m({}, {
                hasEnforcementHook: !0
            }), Object(l.hasDeviceAccess)() ? (o = s.gdprDataHandler.getConsentData()) && o.gdprApplies && 2 === o.apiVersion ? (r = (a = c.b.getCurrentBidder()) && a != n && s.default.aliasRegistry[a] === n ? B(a) : B(n) || r, V(O, o, i = n || a, r) ? t.valid = !0 : (i && l.logWarn("TCF2 denied device access for ".concat(i)), t.valid = !1, P.push(i))) : t.valid = !0 : (l.logWarn("Device access is disabled by Publisher"), t.valid = !1), e.call(this, r, n, t)
        }

        function R(e) {
            for (var r, n, t = s.gdprDataHandler.getConsentData(), o = arguments.length, a = new Array(1 < o ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
            t && t.gdprApplies && 2 === t.apiVersion ? (n = B(r = c.b.getCurrentBidder()), V(O, t, r, n) ? e.call.apply(e, [this].concat(a)) : (l.logWarn("User sync not allowed for ".concat(r)), P.push(r))) : e.call.apply(e, [this].concat(a))
        }

        function T(e, r, t) {
            var n;
            t && t.gdprApplies && 2 === t.apiVersion ? (n = r.map(function(e) {
                var r = B(e.submodule),
                    n = e.submodule.name;
                if (V(O, t, n, r)) return e;
                l.logWarn("User denied permission to fetch user id for ".concat(n, " User id module")), P.push(n)
            }).filter(function(e) {
                return e
            }), e.call(this, n, y(y({}, t), {}, {
                hasValidated: !0
            }))) : e.call(this, r, t)
        }

        function G(e, r) {
            for (var o = s.gdprDataHandler.getConsentData(), n = arguments.length, t = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) t[a - 2] = arguments[a];
            o && o.gdprApplies && 2 === o.apiVersion && r.forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    var r = e.bidder,
                        n = B(r);
                    if (p()(k, r)) return !1;
                    var t = !!V(h, o, r, n);
                    return t || (l.logWarn("TCF2 blocked auction for ".concat(r)), k.push(r)), t
                })
            }), e.call.apply(e, [this, r].concat(t))
        }

        function M(e, r) {
            var o = s.gdprDataHandler.getConsentData();
            o && o.gdprApplies && 2 === o.apiVersion && (l.isArray(r) || (r = [r]), r = r.filter(function(e) {
                var r = e.provider,
                    n = B(r),
                    t = !!V(j, o, r, n);
                return t || (S.push(r), l.logWarn("TCF2 blocked analytics adapter ".concat(e.provider))), t
            })), e.call(this, r)
        }
        g.a.on(b.EVENTS.AUCTION_END, function() {
            function e(n) {
                return n.filter(function(e, r) {
                    return null !== e && n.indexOf(e) === r
                })
            }
            var r = {
                storageBlocked: e(P),
                biddersBlocked: e(k),
                analyticsBlocked: e(S)
            };
            g.a.emit(b.EVENTS.TCF2_ENFORCEMENT, r)
        });
        var W = function(e) {
                return e.purpose === D.purpose1.name
            },
            I = function(e) {
                return e.purpose === D.purpose2.name
            },
            N = function(e) {
                return e.purpose === D.purpose7.name
            };

        function U(e) {
            var r = l.deepAccess(e, "gdpr.rules");
            C = r || (l.logWarn("TCF2: enforcing P1 and P2 by default"), E), O = o()(C, W), h = o()(C, I), j = o()(C, N), O = O || E[0], h = h || E[1], O && !F && (F = !0, d.d.before(H, 49), i.registerSyncInner.before(R, 48), Object(u.a)("validateGdprEnforcement").before(T, 47)), h && Object(u.a)("makeBidRequests").before(G), j && Object(u.a)("enableAnalyticsCb").before(M)
        }
        c.b.getConfig("consentManagement", function(e) {
            return U(e.consentManagement)
        })
    }
}, [440]);
pbjsChunk([167], {
    613: function(e, t, r) {
        e.exports = r(614)
    },
    614: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "USER_ID_CODE_TO_QUERY_ARG", function() {
            return f
        }), r.d(t, "spec", function() {
            return o
        });
        var c = r(3),
            n = r(1),
            d = r(0),
            u = r(2);

        function s(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return i(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r) return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n
        }
        var a = [u.b, u.d],
            p = "hb_pb",
            m = "3.0.3",
            l = "USD",
            f = {
                britepoolid: "britepoolid",
                criteoId: "criteoid",
                digitrustid: "digitrustid",
                id5id: "id5id",
                idl_env: "lre",
                lipb: "lipbid",
                netId: "netid",
                parrableId: "parrableid",
                pubcid: "pubcid",
                tdid: "ttduuid"
            },
            o = {
                code: "openx",
                gvlid: 69,
                supportedMediaTypes: a,
                isBidRequestValid: function(e) {
                    var t = e.params.delDomain || e.params.platform;
                    return d.deepAccess(e, "mediaTypes.banner") && t ? !!e.params.unit || 0 < d.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !t)
                },
                buildRequests: function(e, n) {
                    if (0 === e.length) return [];
                    var i = [],
                        t = s(e.reduce(function(e, t) {
                            var r;
                            return r = t, d.deepAccess(r, "mediaTypes.video") && !d.deepAccess(r, "mediaTypes.banner") || r.mediaType === u.d ? e[0].push(t) : e[1].push(t), e
                        }, [
                            [],
                            []
                        ]), 2),
                        r = t[0],
                        a = t[1];
                    return 0 < a.length && i.push(function(e, t) {
                        var n = [],
                            i = !1,
                            r = h(e, t),
                            a = d._map(e, function(e) {
                                return e.params.unit
                            });
                        r.aus = d._map(e, function(e) {
                            return d.parseSizesInput(e.mediaTypes.banner.sizes).join(",")
                        }).join("|"), r.divIds = d._map(e, function(e) {
                            return encodeURIComponent(e.adUnitCode)
                        }).join(","), a.some(function(e) {
                            return e
                        }) && (r.auid = a.join(","));
                        e.some(function(e) {
                            return e.params.doNotTrack
                        }) && (r.ns = 1);
                        !0 !== c.b.getConfig("coppa") && !e.some(function(e) {
                            return e.params.coppa
                        }) || (r.tfcd = 1);
                        e.forEach(function(t) {
                            var e, r;
                            t.params.customParams ? (e = d._map(Object.keys(t.params.customParams), function(e) {
                                return function(e, t) {
                                    var r = t[e];
                                    d.isArray(r) && (r = r.join(","));
                                    return (e.toLowerCase() + "=" + r.toLowerCase()).replace("+", ".").replace("/", "_")
                                }(e, t.params.customParams)
                            }), r = window.btoa(e.join("&")), i = !0, n.push(r)) : n.push("")
                        }), i && (r.tps = n.join(","));
                        var s = [],
                            o = !1;
                        e.forEach(function(e) {
                            var t = function(e, t) {
                                var r = {},
                                    n = c.b.getConfig("currency.adServerCurrency") || l;
                                "function" == typeof e.getFloor && (r = e.getFloor({
                                    currency: n,
                                    mediaType: t,
                                    size: "*"
                                }));
                                var i = r.floor || e.params.customFloor || 0;
                                return Math.round(1e3 * i)
                            }(e, u.b);
                            t ? (s.push(t), o = !0) : s.push(0)
                        }), o && (r.aumfs = s.join(","));
                        return {
                            method: "GET",
                            url: r.ph ? "https://u.openx.net/w/1.0/arj" : "https://".concat(e[0].params.delDomain, "/w/1.0/arj"),
                            data: r,
                            payload: {
                                bids: e,
                                startTime: new Date
                            }
                        }
                    }(a, n)), 0 < r.length && r.forEach(function(e) {
                        var t, r;
                        i.push({
                            method: "GET",
                            url: (r = function(e, t) {
                                var r, n, i = h([e], t),
                                    a = d.deepAccess(e, "params.video") || {},
                                    s = d.deepAccess(e, "mediaTypes.video.context"),
                                    o = d.deepAccess(e, "mediaTypes.video.playerSize");
                                d.isArray(e.sizes) && 2 === e.sizes.length && !d.isArray(e.sizes[0]) ? (r = parseInt(e.sizes[0], 10), n = parseInt(e.sizes[1], 10)) : d.isArray(e.sizes) && d.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (r = parseInt(e.sizes[0][0], 10), n = parseInt(e.sizes[0][1], 10)) : d.isArray(o) && 2 === o.length && (r = parseInt(o[0], 10), n = parseInt(o[1], 10));
                                Object.keys(a).forEach(function(e) {
                                    "openrtb" === e ? (a[e].w = r || a[e].w, a[e].v = n || a[e].v, i[e] = JSON.stringify(a[e])) : e in i || "url" === e || (i[e] = a[e])
                                }), i.auid = e.params.unit, i.vwd = r || a.vwd, i.vht = n || a.vht, "outstream" === s && (i.vos = "101");
                                a.mimes && (i.vmimes = a.mimes);
                                e.params.test && (i.vtest = 1);
                                return i
                            }(t = e, n)).ph ? "https://u.openx.net/v/1.0/avjp" : "https://".concat(t.params.delDomain, "/v/1.0/avjp"),
                            data: r,
                            payload: {
                                bid: t,
                                startTime: new Date
                            }
                        })
                    }), i
                },
                interpretResponse: function(e, t) {
                    var r = e.body;
                    return ((/avjp$/.test(t.url) ? u.d : u.b) === u.d ? function(e, t) {
                        var r = t.bid,
                            n = (t.startTime, []); {
                            var i, a;
                            void 0 !== e && "" !== e.vastUrl && 0 < e.pub_rev && (i = d.parseUrl(e.vastUrl).search || {}, (a = {}).requestId = r.bidId, a.ttl = 300, a.netRevenue = !0, a.currency = e.currency, a.cpm = parseInt(e.pub_rev, 10) / 1e3, a.width = parseInt(e.width, 10), a.height = parseInt(e.height, 10), a.creativeId = e.adid, a.vastUrl = e.vastUrl, a.mediaType = u.d, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, n.push(a))
                        }
                        return n
                    } : function(e, t) {
                        for (var r = t.bids, n = (t.startTime, e.ads.ad), i = [], a = 0; a < n.length; a++) {
                            var s, o = n[a],
                                c = parseInt(o.idx, 10),
                                d = {};
                            d.requestId = r[c].bidId, o.pub_rev && (d.cpm = Number(o.pub_rev) / 1e3, (s = o.creative[0]) && (d.width = s.width, d.height = s.height), d.creativeId = s.id, d.ad = o.html, o.deal_id && (d.dealId = o.deal_id), d.ttl = 300, d.netRevenue = !0, d.currency = o.currency, o.tbd && (d.tbd = o.tbd), d.ts = o.ts, d.meta = {}, o.brand_id && (d.meta.brandId = o.brand_id), o.adv_id && (d.meta.dspid = o.adv_id), i.push(d))
                        }
                        return i
                    })(r, t.payload)
                },
                getUserSyncs: function(e, t, r, n) {
                    if (e.iframeEnabled || e.pixelEnabled) return [{
                        type: e.iframeEnabled ? "iframe" : "image",
                        url: d.deepAccess(t, "0.body.ads.pixels") || d.deepAccess(t, "0.body.pixels") || function(e, t) {
                            var r = [];
                            e && (r.push("gdpr=" + (e.gdprApplies ? 1 : 0)), r.push("gdpr_consent=" + encodeURIComponent(e.consentString || "")));
                            t && r.push("us_privacy=" + encodeURIComponent(t));
                            return "".concat("https://u.openx.net/w/1.0/pd").concat(0 < r.length ? "?" + r.join("&") : "")
                        }(r, n)
                    }]
                },
                transformBidParams: function(e) {
                    return d.convertTypes({
                        unit: "string",
                        customFloor: "number"
                    }, e)
                }
            };

        function h(e, t) {
            var r, n, i, a, s = d.inIframe(),
                o = {
                    ju: c.b.getConfig("pageUrl") || t.refererInfo.referer,
                    ch: document.charSet || document.characterSet,
                    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                    ifr: s,
                    tz: (new Date).getTimezoneOffset(),
                    tws: function(e) {
                        var t, r, n, i = window,
                            a = document,
                            s = a.documentElement;
                        if (e) {
                            try {
                                i = window.top, a = window.top.document
                            } catch (e) {
                                return
                            }
                            s = a.documentElement, n = a.body, t = i.innerWidth || s.clientWidth || n.clientWidth, r = i.innerHeight || s.clientHeight || n.clientHeight
                        } else s = a.documentElement, t = i.innerWidth || s.clientWidth, r = i.innerHeight || s.clientHeight;
                        return "".concat(t, "x").concat(r)
                    }(s),
                    be: 1,
                    bc: e[0].params.bc || "".concat(p, "_").concat(m),
                    dddid: d._map(e, function(e) {
                        return e.transactionId
                    }).join(","),
                    nocache: (new Date).getTime()
                };
            return e[0].params.platform && (o.ph = e[0].params.platform), t.gdprConsent && (void 0 !== (r = t.gdprConsent).consentString && (o.gdpr_consent = r.consentString), void 0 !== r.gdprApplies && (o.gdpr = r.gdprApplies ? 1 : 0), "iab" === c.b.getConfig("consentManagement.cmpApi") && (o.x_gdpr_f = 1)), t && t.uspConsent && (o.us_privacy = t.uspConsent), d.deepAccess(e[0], "crumbs.pubcid") && d.deepSetValue(e[0], "userId.pubcid", d.deepAccess(e[0], "crumbs.pubcid")), n = o, i = e[0].userId, d._each(i, function(e, t) {
                var r = f[t];
                if (f.hasOwnProperty(t)) switch (t) {
                    case "digitrustid":
                        n[r] = d.deepAccess(e, "data.id");
                        break;
                    case "lipb":
                        n[r] = e.lipbid;
                        break;
                    case "parrableId":
                        n[r] = e.eid;
                        break;
                    case "id5id":
                        n[r] = e.uid;
                        break;
                    default:
                        n[r] = e
                }
            }), o = n, e[0].schain && (o.schain = (a = e[0].schain, "".concat(a.ver, ",").concat(a.complete, "!").concat(function(e) {
                var r = ["asi", "sid", "hp", "rid", "name", "domain"];
                return e.map(function(t) {
                    return r.map(function(e) {
                        return t[e] || ""
                    }).join(",")
                }).join("!")
            }(a.nodes)))), o
        }
        Object(n.registerBidder)(o)
    }
}, [613]);
pbjsChunk([151], {
    650: function(e, o, t) {
        e.exports = t(651)
    },
    651: function(e, o, t) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), t.d(o, "pubCommonIdSubmodule", function() {
            return m
        });
        var h = t(0),
            r = t(13),
            a = t(7),
            b = t(4);

        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var y = "PublisherCommonId",
            n = "cookie",
            i = "html5",
            d = "00000000000000000000000000",
            c = "_sharedid",
            l = "Thu, 01 Jan 1970 00:00:01 GMT",
            s = Object(a.b)(null, "pubCommonId");

        function u(e, o) {
            try {
                var t, r;
                o && (t = e.storage.name + c, r = new Date(Date.now() + 864e5 * s.expires).toUTCString(), e.storage.type === n ? s.cookiesAreEnabled() && s.setCookie(t, o, r, "LAX", f) : e.storage.type === i && s.hasLocalStorage() && (s.setDataInLocalStorage("".concat(t, "_exp"), r), s.setDataInLocalStorage(t, o)))
            } catch (e) {
                h.logError(e)
            }
        }

        function g(e) {
            try {
                var o = e.storage.name + c;
                if (e.storage.type === n) {
                    if (s.cookiesAreEnabled()) return s.getCookie(o)
                } else if (e.storage.type === i && s.hasLocalStorage()) {
                    var t = s.getDataFromLocalStorage("".concat(o, "_exp"));
                    if (!t) return s.getDataFromLocalStorage(o);
                    if (0 < new Date(t).getTime() - Date.now()) return s.getDataFromLocalStorage(o)
                }
            } catch (e) {
                h.logError(e)
            }
        }

        function I(t, r, a) {
            return {
                success: function(e) {
                    if (e) try {
                        var o = JSON.parse(e);
                        h.logInfo("PubCommonId: Generated SharedId: " + o.sharedId), o.sharedId && (o.sharedId !== d ? u(a, o.sharedId) : function(e) {
                            try {
                                var o = e.storage.name + c;
                                e.storage.type === n ? s.cookiesAreEnabled() && s.setCookie(o, "", l) : e.storage.type === i && (s.removeDataFromLocalStorage("".concat(o, "_exp")), s.removeDataFromLocalStorage(o))
                            } catch (e) {
                                h.logError(e)
                            }
                        }(a)), r(t)
                    } catch (e) {
                        h.logError(e)
                    }
                },
                error: function() {
                    h.logInfo("PubCommonId: failed to get sharedid")
                }
            }
        }
        var m = {
                name: "pubCommonId",
                makeCallback: function(e, o) {
                    var t = 1 < arguments.length && void 0 !== o ? o : "";
                    if (e) {
                        var r = h.parseUrl(e);
                        r.search.id = encodeURIComponent("pubcid:" + t);
                        var a = h.buildUrl(r);
                        return function() {
                            h.triggerPixel(a)
                        }
                    }
                },
                decode: function(e, o) {
                    var t, r = {
                            pubcid: e
                        },
                        a = o.params,
                        n = (a = void 0 === a ? {} : a).enableSharedId;
                    return !(void 0 !== n && n) || (t = g(o)) && (r.sharedid = {
                        id: t
                    }), r
                },
                getId: function(e, o, t) {
                    var r = 0 < arguments.length && void 0 !== e ? e : {},
                        a = 2 < arguments.length ? t : void 0,
                        n = r.params,
                        i = (n = void 0 === n ? {} : n).create,
                        d = void 0 === i || i,
                        c = n.pixelUrl,
                        l = n.enableSharedId,
                        s = void 0 !== l && l,
                        u = a;
                    if (!u) {
                        try {
                            "object" === p(window[y]) && (u = window[y].getId())
                        } catch (e) {}
                        u = u || (d && h.hasDeviceAccess() ? h.generateUUID() : void 0)
                    }
                    var g, m, f, v = this.makeCallback(c, u);
                    return {
                        id: u,
                        callback: s ? (g = u, m = v, f = r, function(e) {
                            "function" == typeof m && m(), Object(b.a)("https://id.sharedid.org/id", I(g, e, f), void 0, {
                                method: "GET",
                                withCredentials: !0
                            })
                        }) : v
                    }
                },
                extendId: function(e, o) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {},
                        r = 1 < arguments.length ? o : void 0,
                        a = t.params,
                        n = (a = void 0 === a ? {} : a).extend,
                        i = void 0 !== n && n,
                        d = a.pixelUrl,
                        c = a.enableSharedId,
                        l = void 0 !== c && c;
                    if (i) {
                        try {
                            if ("object" === p(window[y])) return void(l && u(t, g(t)))
                        } catch (e) {}
                        return d ? {
                            callback: this.makeCallback(d, r)
                        } : (l && u(t, g(t)), {
                            id: r
                        })
                    }
                },
                domainOverride: function() {
                    for (var e, o = document.domain.split("."), t = "_gd".concat(Date.now()), r = 0; r < o.length; r++) {
                        var a = o.slice(r).join(".");
                        if (s.setCookie(t, "1", void 0, void 0, a), "1" !== s.getCookie(t)) return e;
                        s.setCookie(t, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, a), e = a
                    }
                }
            },
            f = m.domainOverride();
        Object(r.e)("userId", m)
    }
}, [650]);
pbjsChunk([148], {
    658: function(e, r, a) {
        e.exports = a(659)
    },
    659: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return b
        });
        var O = a(0),
            t = a(1),
            S = a(2),
            R = a(3),
            i = a(11);

        function P() {
            return (P = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        function D(e) {
            return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var Y = "PubMatic: ",
            A = "USD",
            x = void 0,
            s = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"),
            N = {
                kadpageurl: "",
                gender: "",
                yob: "",
                lat: "",
                lon: "",
                wiid: "",
                profId: "",
                verId: ""
            },
            n = {
                NUMBER: "number",
                STRING: "string",
                BOOLEAN: "boolean",
                ARRAY: "array",
                OBJECT: "object"
            },
            o = {
                mimes: n.ARRAY,
                minduration: n.NUMBER,
                maxduration: n.NUMBER,
                startdelay: n.NUMBER,
                playbackmethod: n.ARRAY,
                api: n.ARRAY,
                protocols: n.ARRAY,
                w: n.NUMBER,
                h: n.NUMBER,
                battr: n.ARRAY,
                linearity: n.NUMBER,
                placement: n.NUMBER,
                minbitrate: n.NUMBER,
                maxbitrate: n.NUMBER
            },
            c = {
                TITLE: {
                    ID: 1,
                    KEY: "title",
                    TYPE: 0
                },
                IMAGE: {
                    ID: 2,
                    KEY: "image",
                    TYPE: 0
                },
                ICON: {
                    ID: 3,
                    KEY: "icon",
                    TYPE: 0
                },
                SPONSOREDBY: {
                    ID: 4,
                    KEY: "sponsoredBy",
                    TYPE: 1
                },
                BODY: {
                    ID: 5,
                    KEY: "body",
                    TYPE: 2
                },
                CLICKURL: {
                    ID: 6,
                    KEY: "clickUrl",
                    TYPE: 0
                },
                VIDEO: {
                    ID: 7,
                    KEY: "video",
                    TYPE: 0
                },
                EXT: {
                    ID: 8,
                    KEY: "ext",
                    TYPE: 0
                },
                DATA: {
                    ID: 9,
                    KEY: "data",
                    TYPE: 0
                },
                LOGO: {
                    ID: 10,
                    KEY: "logo",
                    TYPE: 0
                },
                SPONSORED: {
                    ID: 11,
                    KEY: "sponsored",
                    TYPE: 1
                },
                DESC: {
                    ID: 12,
                    KEY: "data",
                    TYPE: 2
                },
                RATING: {
                    ID: 13,
                    KEY: "rating",
                    TYPE: 3
                },
                LIKES: {
                    ID: 14,
                    KEY: "likes",
                    TYPE: 4
                },
                DOWNLOADS: {
                    ID: 15,
                    KEY: "downloads",
                    TYPE: 5
                },
                PRICE: {
                    ID: 16,
                    KEY: "price",
                    TYPE: 6
                },
                SALEPRICE: {
                    ID: 17,
                    KEY: "saleprice",
                    TYPE: 7
                },
                PHONE: {
                    ID: 18,
                    KEY: "phone",
                    TYPE: 8
                },
                ADDRESS: {
                    ID: 19,
                    KEY: "address",
                    TYPE: 9
                },
                DESC2: {
                    ID: 20,
                    KEY: "desc2",
                    TYPE: 10
                },
                DISPLAYURL: {
                    ID: 21,
                    KEY: "displayurl",
                    TYPE: 11
                },
                CTA: {
                    ID: 22,
                    KEY: "cta",
                    TYPE: 12
                }
            },
            l = {
                ICON: 1,
                LOGO: 2,
                IMAGE: 3
            },
            u = [{
                id: c.SPONSOREDBY.ID,
                required: !0,
                data: {
                    type: 1
                }
            }, {
                id: c.TITLE.ID,
                required: !0
            }, {
                id: c.IMAGE.ID,
                required: !0
            }],
            d = {
                1: "PMP",
                5: "PREF",
                6: "PMPG"
            },
            p = {
                bootstrapPlayer: function(e) {
                    var r = {
                        code: e.adUnitCode
                    };
                    if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
                        for (var a, t = p.getRendererId("pubmatic", e.rendererCode), i = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++)
                            if (window.bluebillywig.renderers[s]._id === t) {
                                a = window.bluebillywig.renderers[s];
                                break
                            }
                        a ? a.bootstrap(r, i) : O.logWarn("".concat(Y, ": Couldn't find a renderer with ").concat(t))
                    } else O.logWarn("".concat(Y, ": No vastXml or vastUrl on bid, bailing..."))
                },
                newRenderer: function(e, r) {
                    var a = s.replace("$RENDERER", e),
                        t = i.a.install({
                            url: a,
                            loaded: !1,
                            adUnitCode: r
                        });
                    try {
                        t.setRender(p.outstreamRender)
                    } catch (e) {
                        O.logWarn("".concat(Y, ": Error tying to setRender on renderer"), e)
                    }
                    return t
                },
                outstreamRender: function(e) {
                    e.renderer.push(function() {
                        p.bootstrapPlayer(e)
                    })
                },
                getRendererId: function(e, r) {
                    return "".concat(e, "-").concat(r)
                }
            },
            k = 0,
            m = !1,
            g = {},
            h = {};

        function C(e, r) {
            if (!O.isStr(r)) return r && O.logWarn(Y + "Ignoring param key: " + e + ", expects string-value, found " + D(r)), x;
            switch (e) {
                case "pmzoneid":
                    return r.split(",").slice(0, 50).map(function(e) {
                        return e.trim()
                    }).join();
                case "kadfloor":
                case "lat":
                case "lon":
                    return parseFloat(r) || x;
                case "yob":
                    return parseInt(r) || x;
                default:
                    return r
            }
        }

        function U(e) {
            var r;
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, O.isStr(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
            var a = (t = e.params.adSlot).split(":"),
                t = a[0];
            if (2 == a.length && (e.params.adUnitIndex = a[1]), a = t.split("@"), e.params.adUnit = a[0], 1 < a.length) {
                if (2 != (a = a[1].split("x")).length) return void O.logWarn(Y + "AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(a[0], 10), e.params.height = parseInt(a[1], 10)
            } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(S.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var i = 0, s = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && s.push(e.mediaTypes.banner.sizes[i]);
                e.mediaTypes.banner.sizes = s, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1))
            }
        }

        function f(e) {
            var r, a = e.params.video;
            if (a !== x) {
                for (var t in r = {}, o) a.hasOwnProperty(t) && (r[t] = function(e, r, a) {
                    var t, i = "Ignoring param key: " + e + ", expects " + a + ", found " + D(r);
                    switch (a) {
                        case n.BOOLEAN:
                            t = O.isBoolean;
                            break;
                        case n.NUMBER:
                            t = O.isNumber;
                            break;
                        case n.STRING:
                            t = O.isStr;
                            break;
                        case n.ARRAY:
                            t = O.isArray
                    }
                    return t(r) ? r : (O.logWarn(Y + i), x)
                }(t, a[t], o[t]));
                O.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : O.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[1], 10)), e.params.video.hasOwnProperty("skippable") && (r.ext = {
                    video_skippable: e.params.video.skippable ? 1 : 0
                })
            } else r = x, O.logWarn(Y + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
            return r
        }

        function z(e) {
            var r, a, t, i, s = {},
                n = {},
                o = e.hasOwnProperty("sizes") ? e.sizes : [],
                d = "",
                p = [],
                s = {
                    id: e.bidId,
                    tagid: e.params.adUnit || void 0,
                    bidfloor: C("kadfloor", e.params.kadfloor),
                    secure: 1,
                    ext: {
                        pmZoneId: C("pmzoneid", e.params.pmzoneid)
                    },
                    bidfloorcur: e.params.currency ? C("currency", e.params.currency) : A
                };
            if (t = s, (i = e).params.deals && (O.isArray(i.params.deals) ? i.params.deals.forEach(function(e) {
                    O.isStr(e) && 3 < e.length ? (t.pmp || (t.pmp = {
                        private_auction: 0,
                        deals: []
                    }), t.pmp.deals.push({
                        id: e
                    })) : O.logWarn(Y + "Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + e)
                }) : O.logWarn(Y + "Error: bid.params.deals should be an array of strings.")), e.hasOwnProperty("mediaTypes"))
                for (d in e.mediaTypes) switch (d) {
                    case S.b:
                        (r = function(e) {
                            var r, a = e.mediaTypes.banner.sizes,
                                t = [];
                            if (a !== x && O.isArray(a)) {
                                if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;
                                else {
                                    if (0 === a.length) return r = x, O.logWarn(Y + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
                                    r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1)
                                }
                                0 < a.length && (t = [], a.forEach(function(e) {
                                    1 < e.length && t.push({
                                        w: e[0],
                                        h: e[1]
                                    })
                                }), 0 < t.length && (r.format = t)), r.pos = 0, r.topframe = O.inIframe() ? 0 : 1
                            } else O.logWarn(Y + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = x;
                            return r
                        }(e)) !== x && (s.banner = r);
                        break;
                    case S.c:
                        n.request = JSON.stringify(function(e) {
                            var r, a, t, i = {
                                assets: []
                            };
                            for (var s in e) {
                                if (e.hasOwnProperty(s)) {
                                    var n = {};
                                    if (!(i.assets && 0 < i.assets.length && i.assets.hasOwnProperty(s))) switch (s) {
                                        case c.TITLE.KEY:
                                            e[s].len || e[s].length ? n = {
                                                id: c.TITLE.ID,
                                                required: e[s].required ? 1 : 0,
                                                title: {
                                                    len: e[s].len || e[s].length,
                                                    ext: e[s].ext
                                                }
                                            } : O.logWarn(Y + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                                            break;
                                        case c.IMAGE.KEY:
                                            e[s].sizes && 0 < e[s].sizes.length ? n = {
                                                id: c.IMAGE.ID,
                                                required: e[s].required ? 1 : 0,
                                                img: {
                                                    type: l.IMAGE,
                                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x),
                                                    wmin: e[s].wmin || e[s].minimumWidth || (e[s].minsizes ? e[s].minsizes[0] : x),
                                                    hmin: e[s].hmin || e[s].minimumHeight || (e[s].minsizes ? e[s].minsizes[1] : x),
                                                    mimes: e[s].mimes,
                                                    ext: e[s].ext
                                                }
                                            } : O.logWarn(Y + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                                            break;
                                        case c.ICON.KEY:
                                            e[s].sizes && 0 < e[s].sizes.length ? n = {
                                                id: c.ICON.ID,
                                                required: e[s].required ? 1 : 0,
                                                img: {
                                                    type: l.ICON,
                                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x)
                                                }
                                            } : O.logWarn(Y + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                                            break;
                                        case c.VIDEO.KEY:
                                            n = {
                                                id: c.VIDEO.ID,
                                                required: e[s].required ? 1 : 0,
                                                video: {
                                                    minduration: e[s].minduration,
                                                    maxduration: e[s].maxduration,
                                                    protocols: e[s].protocols,
                                                    mimes: e[s].mimes,
                                                    ext: e[s].ext
                                                }
                                            };
                                            break;
                                        case c.EXT.KEY:
                                            n = {
                                                id: c.EXT.ID,
                                                required: e[s].required ? 1 : 0
                                            };
                                            break;
                                        case c.LOGO.KEY:
                                            n = {
                                                id: c.LOGO.ID,
                                                required: e[s].required ? 1 : 0,
                                                img: {
                                                    type: l.LOGO,
                                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x)
                                                }
                                            };
                                            break;
                                        case c.SPONSOREDBY.KEY:
                                        case c.BODY.KEY:
                                        case c.RATING.KEY:
                                        case c.LIKES.KEY:
                                        case c.DOWNLOADS.KEY:
                                        case c.PRICE.KEY:
                                        case c.SALEPRICE.KEY:
                                        case c.PHONE.KEY:
                                        case c.ADDRESS.KEY:
                                        case c.DESC2.KEY:
                                        case c.DISPLAYURL.KEY:
                                        case c.CTA.KEY:
                                            r = h[s], a = e, t = void 0, t = r.KEY, n = {
                                                id: r.ID,
                                                required: a[t].required ? 1 : 0,
                                                data: {
                                                    type: r.TYPE,
                                                    len: a[t].len,
                                                    ext: a[t].ext
                                                }
                                            }
                                    }
                                }
                                n && n.id && (i.assets[i.assets.length] = n)
                            }
                            var o = u.length,
                                d = 0;
                            return u.forEach(function(e) {
                                for (var r = i.assets.length, a = 0; a < r; a++)
                                    if (e.id == i.assets[a].id) {
                                        d++;
                                        break
                                    }
                            }), m = o != d, i
                        }(e.nativeParams)), m ? O.logWarn(Y + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : s.native = n;
                        break;
                    case S.d:
                        (a = f(e)) !== x && (s.video = a)
                } else r = {
                    pos: 0,
                    w: e.params.width,
                    h: e.params.height,
                    topframe: O.inIframe() ? 0 : 1
                }, O.isArray(o) && 1 < o.length && ((o = o.splice(1, o.length - 1)).forEach(function(e) {
                    p.push({
                        w: e[0],
                        h: e[1]
                    })
                }), r.format = p), s.banner = r;
            return function(t, i) {
                var s = -1;
                "function" != typeof i.getFloor || R.b.getConfig("pubmatic.disableFloors") || [S.b, S.d, S.c].forEach(function(e) {
                    var r, a;
                    t.hasOwnProperty(e) && ("object" !== D(r = i.getFloor({
                        currency: t.bidfloorcur,
                        mediaType: e,
                        size: "*"
                    })) || r.currency !== t.bidfloorcur || isNaN(parseInt(r.floor)) || (a = parseFloat(r.floor), s = -1 == s ? a : Math.min(a, s)))
                });
                t.bidfloor && (s = Math.max(s, t.bidfloor));
                t.bidfloor = !isNaN(s) && 0 < s ? s : x
            }(s, e), s.hasOwnProperty(S.b) || s.hasOwnProperty(S.c) || s.hasOwnProperty(S.d) ? s : x
        }
        O._each(c, function(e) {
            g[e.ID] = e.KEY
        }), O._each(c, function(e) {
            h[e.KEY] = e
        });
        var b = {
            code: "pubmatic",
            gvlid: 76,
            supportedMediaTypes: [S.b, S.d, S.c],
            isBidRequestValid: function(e) {
                if (e && e.params) {
                    if (!O.isStr(e.params.publisherId)) return O.logWarn(Y + "Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1;
                    if (e.params.hasOwnProperty("video")) {
                        if (!e.params.video.hasOwnProperty("mimes") || !O.isArray(e.params.video.mimes) || 0 === e.params.video.mimes.length) return O.logWarn(Y + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1;
                        if (!e.hasOwnProperty("mediaTypes") || !e.mediaTypes.hasOwnProperty(S.d)) return O.logError("".concat(Y, ": mediaTypes or mediaTypes.video is not specified. Rejecting bid: "), e), !1;
                        if (!e.mediaTypes[S.d].hasOwnProperty("context")) return O.logError("".concat(Y, ": no context specified in bid. Rejecting bid: "), e), !1;
                        if ("outstream" === e.mediaTypes[S.d].context && !O.isStr(e.params.outstreamAU)) return O.logError("".concat(Y, ': for "outstream" bids outstreamAU is required. Rejecting bid: '), e), !1
                    }
                    return !0
                }
                return !1
            },
            buildRequests: function(e, r) {
                var a;
                r && r.refererInfo && (a = r.refererInfo);
                var t, i, s, n, o, d, p, c, l, u, m, g, h, f, b, y, v = {
                        pageURL: (t = a) && t.referer ? t.referer : window.location.href,
                        refURL: window.document.referrer
                    },
                    E = (i = v, {
                        id: "" + (new Date).getTime(),
                        at: 1,
                        cur: [A],
                        imp: [],
                        site: {
                            page: i.pageURL,
                            ref: i.refURL,
                            publisher: {}
                        },
                        device: {
                            ua: navigator.userAgent,
                            js: 1,
                            dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                            h: screen.height,
                            w: screen.width,
                            language: navigator.language
                        },
                        user: {},
                        ext: {}
                    }),
                    I = "",
                    w = [],
                    T = [];
                if (e.forEach(function(e) {
                        var r;
                        (s = O.deepClone(e)).params.adSlot = s.params.adSlot || "", U(s), s.params.hasOwnProperty("video") || s.hasOwnProperty("mediaTypes") && s.mediaTypes.hasOwnProperty(S.c) || 0 !== s.params.width || 0 !== s.params.height ? (v.pubId = v.pubId || s.params.publisherId, (v = function(e, r) {
                            var a, t, i;
                            for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), N) N.hasOwnProperty(a) && (t = e[a]) && ("object" === D(i = N[a]) && (t = i.f(t, r)), O.isStr(t) ? r[a] = t : O.logWarn(Y + "Ignoring param : " + a + " with value : " + N[a] + ", expects string-value, found " + D(t)));
                            return r
                        }(s.params, v)).transactionId = s.transactionId, "" === I ? I = s.params.currency || x : s.params.hasOwnProperty("currency") && I !== s.params.currency && O.logWarn(Y + "Currency specifier ignored. Only one currency permitted."), s.params.currency = I, s.params.hasOwnProperty("dctr") && O.isStr(s.params.dctr) && w.push(s.params.dctr), s.params.hasOwnProperty("bcat") && O.isArray(s.params.bcat) && (T = T.concat(s.params.bcat)), (r = z(s)) && E.imp.push(r)) : O.logWarn(Y + "Skipping the non-standard adslot: ", s.params.adSlot, JSON.stringify(s))
                    }), 0 != E.imp.length) return E.site.publisher.id = v.pubId.trim(), k = v.pubId.trim(), E.ext.wrapper = {}, E.ext.wrapper.profile = parseInt(v.profId) || x, E.ext.wrapper.version = parseInt(v.verId) || x, E.ext.wrapper.wiid = v.wiid || r.auctionId, E.ext.wrapper.wv = "prebid_prebid_4.15.0", E.ext.wrapper.transactionId = v.transactionId, E.ext.wrapper.wp = "pbjs", E.user.gender = v.gender ? v.gender.trim() : x, E.user.geo = {}, E.user.geo.lat = C("lat", v.lat), E.user.geo.lon = C("lon", v.lon), E.user.yob = C("yob", v.yob), E.device.geo = E.user.geo, E.site.page = v.kadpageurl.trim() || E.site.page.trim(), E.site.domain = (n = E.site.page, (o = document.createElement("a")).href = n, o.hostname), "object" === D(R.b.getConfig("content")) && (E.site.content = R.b.getConfig("content")), "object" === D(R.b.getConfig("device")) && (E.device = P(E.device, R.b.getConfig("device"))), O.deepSetValue(E, "source.tid", v.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (E.test = 1), e[0].schain && O.deepSetValue(E, "source.ext.schain", e[0].schain), r && r.gdprConsent && (O.deepSetValue(E, "user.ext.consent", r.gdprConsent.consentString), O.deepSetValue(E, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && O.deepSetValue(E, "regs.ext.us_privacy", r.uspConsent), !0 === R.b.getConfig("coppa") && O.deepSetValue(E, "regs.coppa", 1), d = E, c = e, m = "", 0 < (p = w).length && (c[0].params.hasOwnProperty("dctr") ? (m = c[0].params.dctr, O.isStr(m) && 0 < m.length ? (u = m.split("|"), m = "", u.forEach(function(e) {
                    m += 0 < e.length ? e.trim() + "|" : ""
                }), l = m.length, "|" === m.substring(l, l - 1) && (m = m.substring(0, l - 1)), d.site.ext = {
                    key_val: m.trim()
                }) : O.logWarn(Y + "Ignoring param : dctr with value : " + m + ", expects string-value, found empty or non-string value"), 1 < p.length && O.logWarn(Y + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")) : O.logWarn(Y + "dctr value not found in 1st adunit, ignoring values from subsequent adunits")), g = E, h = e, f = O.deepAccess(h, "0.userIdAsEids"), O.isArray(f) && 0 < f.length && O.deepSetValue(g, "user.eids", f), b = E, 0 < (y = (y = T).filter(function(e) {
                    return "string" == typeof e || (O.logWarn(Y + "bcat: Each category should be a string, ignoring category: " + e), !1)
                }).map(function(e) {
                    return e.trim()
                }).filter(function(e, r, a) {
                    return 3 < e.length ? a.indexOf(e) === r : void O.logWarn(Y + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                })).length && (O.logWarn(Y + "bcat: Selected: ", y), b.bcat = y), "object" === D(R.b.getConfig("app")) && (E.app = R.b.getConfig("app"), E.app.publisher = E.site.publisher, E.app.ext = E.site.ext || x, "object" !== D(E.app.content) && (E.app.content = E.site.content || x), delete E.site), {
                    method: "POST",
                    url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                    data: JSON.stringify(E),
                    bidderRequest: r
                }
            },
            interpretResponse: function(e, t) {
                var i = [],
                    s = A,
                    n = JSON.parse(t.data),
                    o = n.site && n.site.ref ? n.site.ref : "";
                try {
                    e.body && e.body.seatbid && O.isArray(e.body.seatbid) && (s = e.body.cur || s, e.body.seatbid.forEach(function(e) {
                        e.bid && O.isArray(e.bid) && e.bid.forEach(function(r) {
                            var a = {
                                requestId: r.impid,
                                cpm: (parseFloat(r.price) || 0).toFixed(2),
                                width: r.w,
                                height: r.h,
                                creativeId: r.crid || r.id,
                                dealId: r.dealid,
                                currency: s,
                                netRevenue: !1,
                                ttl: 300,
                                referrer: o,
                                ad: r.adm,
                                pm_seat: e.seat || null,
                                pm_dspid: r.ext && r.ext.dspid ? r.ext.dspid : null,
                                partnerImpId: r.id || ""
                            };
                            n.imp && 0 < n.imp.length && n.imp.forEach(function(e) {
                                if (r.impid === e.id) switch (! function(r, e) {
                                    var a, t = new RegExp(/VAST\s+version/);
                                    if (0 <= r.indexOf('span class="PubAPIAd"')) e.mediaType = S.b;
                                    else if (t.test(r)) e.mediaType = S.d;
                                    else try {
                                        (a = JSON.parse(r.replace(/\\/g, ""))) && a.native && (e.mediaType = S.c)
                                    } catch (e) {
                                        O.logWarn(Y + "Error: Cannot parse native reponse for ad response: " + r)
                                    }
                                }(r.adm, a), a.mediaType) {
                                    case S.b:
                                        break;
                                    case S.d:
                                        a.width = r.hasOwnProperty("w") ? r.w : e.video.w, a.height = r.hasOwnProperty("h") ? r.h : e.video.h, a.vastXml = r.adm,
                                            function(e, r) {
                                                var a, t, i;
                                                if (r.bidderRequest && r.bidderRequest.bids) {
                                                    for (var s = 0; s < r.bidderRequest.bids.length; s++) r.bidderRequest.bids[s].bidId === e.requestId && (a = r.bidderRequest.bids[s].params, t = r.bidderRequest.bids[s].mediaTypes[S.d].context, i = r.bidderRequest.bids[s].adUnitCode);
                                                    t && "outstream" === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU, e.renderer = p.newRenderer(e.rendererCode, i))
                                                }
                                            }(a, t);
                                        break;
                                    case S.c:
                                        ! function(e, r) {
                                            if (r.native = {}, e.hasOwnProperty("adm")) {
                                                var a = "";
                                                try {
                                                    a = JSON.parse(e.adm.replace(/\\/g, ""))
                                                } catch (e) {
                                                    return O.logWarn(Y + "Error: Cannot parse native reponse for ad response: " + r.adm)
                                                }
                                                if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                    r.mediaType = S.c;
                                                    for (var t = 0, i = a.native.assets.length; t < i; t++) switch (a.native.assets[t].id) {
                                                        case c.TITLE.ID:
                                                            r.native.title = a.native.assets[t].title && a.native.assets[t].title.text;
                                                            break;
                                                        case c.IMAGE.ID:
                                                            r.native.image = {
                                                                url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                width: a.native.assets[t].img && a.native.assets[t].img.w
                                                            };
                                                            break;
                                                        case c.ICON.ID:
                                                            r.native.icon = {
                                                                url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                width: a.native.assets[t].img && a.native.assets[t].img.w
                                                            };
                                                            break;
                                                        case c.SPONSOREDBY.ID:
                                                        case c.BODY.ID:
                                                        case c.LIKES.ID:
                                                        case c.DOWNLOADS.ID:
                                                        case c.PRICE:
                                                        case c.SALEPRICE.ID:
                                                        case c.PHONE.ID:
                                                        case c.ADDRESS.ID:
                                                        case c.DESC2.ID:
                                                        case c.CTA.ID:
                                                        case c.RATING.ID:
                                                        case c.DISPLAYURL.ID:
                                                            r.native[g[a.native.assets[t].id]] = a.native.assets[t].data && a.native.assets[t].data.value
                                                    }
                                                    r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0)
                                                }
                                            }
                                        }(r, a)
                                }
                            }), r.ext && r.ext.deal_channel && (a.dealChannel = d[r.ext.deal_channel] || null), a.meta = {}, r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid), r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid), r.adomain && 0 < r.adomain.length && (a.meta.advertiserDomains = r.adomain, a.meta.clickUrl = r.adomain[0]), e.ext && e.ext.buyid && (a.adserverTargeting = {
                                hb_buyid_pubmatic: e.ext.buyid
                            }), i.push(a)
                        })
                    }))
                } catch (e) {
                    O.logError(e)
                }
                return i
            },
            getUserSyncs: function(e, r, a, t) {
                var i = "" + k;
                return a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), t && (i += "&us_privacy=" + encodeURIComponent(t)), !0 === R.b.getConfig("coppa") && (i += "&coppa=1"), e.iframeEnabled ? [{
                    type: "iframe",
                    url: "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + i
                }] : [{
                    type: "image",
                    url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
                }]
            },
            transformBidParams: function(e) {
                return O.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e)
            }
        };
        Object(t.registerBidder)(b)
    }
}, [658]);
pbjsChunk([16], {
    6: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var o, i = e.url,
                t = e.analyticsType,
                s = e.global,
                r = e.handler,
                a = [],
                c = 0,
                n = !0;
            t !== N && !R || function() {
                if (n) {
                    for (var e = 0; e < a.length; e++) a[e]();
                    a.push = function(e) {
                        e()
                    }, n = !1
                }
                g.logMessage("event count sent to ".concat(s, ": ").concat(c))
            }();
            return {
                track: function(e) {
                    var t = e.eventType,
                        n = e.args;
                    this.getAdapterType() === R && window[s](r, t, n);
                    this.getAdapterType() === N && function(e) {
                        var t = e.eventType,
                            n = e.args,
                            r = e.callback;
                        Object(l.a)(i, r, JSON.stringify({
                            eventType: t,
                            args: n
                        }))
                    }.apply(void 0, arguments)
                },
                enqueue: u,
                enableAnalytics: d,
                disableAnalytics: function() {
                    g._each(o, function(e, t) {
                        b.off(t, e)
                    }), this.enableAnalytics = this._oldEnable ? this._oldEnable : d
                },
                getAdapterType: function() {
                    return t
                },
                getGlobal: function() {
                    return s
                },
                getHandler: function() {
                    return r
                },
                getUrl: function() {
                    return i
                }
            };

            function u(e) {
                var t = e.eventType,
                    n = e.args,
                    r = this;
                s && window[s] && t && n ? this.track({
                    eventType: t,
                    args: n
                }) : a.push(function() {
                    c++, r.track({
                        eventType: t,
                        args: n
                    })
                })
            }

            function d(t) {
                var e, n = this,
                    r = this;
                "object" !== f(t) || "object" !== f(t.options) || (void 0 === t.options.sampling || Math.random() < parseFloat(t.options.sampling)) ? (b.getEvents().forEach(function(e) {
                    var t, n;
                    e && (t = e.eventType, n = e.args, t !== h && u.call(r, {
                        eventType: t,
                        args: n
                    }))
                }), p(e = {}, v, function(e) {
                    return n.enqueue({
                        eventType: v,
                        args: e
                    })
                }), p(e, I, function(e) {
                    return n.enqueue({
                        eventType: I,
                        args: e
                    })
                }), p(e, A, function(e) {
                    return n.enqueue({
                        eventType: A,
                        args: e
                    })
                }), p(e, D, function(e) {
                    return n.enqueue({
                        eventType: D,
                        args: e
                    })
                }), p(e, h, function(e) {
                    return n.enqueue({
                        eventType: h,
                        args: e
                    })
                }), p(e, T, function(e) {
                    return n.enqueue({
                        eventType: T,
                        args: e
                    })
                }), p(e, O, function(e) {
                    return n.enqueue({
                        eventType: O,
                        args: e
                    })
                }), p(e, S, function(e) {
                    return n.enqueue({
                        eventType: S,
                        args: e
                    })
                }), p(e, U, function(e) {
                    return n.enqueue({
                        eventType: U,
                        args: e
                    })
                }), p(e, m, function(e) {
                    return n.enqueue({
                        eventType: m,
                        args: e
                    })
                }), p(e, E, function(e) {
                    return n.enqueue({
                        eventType: E,
                        args: e
                    })
                }), p(e, k, function(e) {
                    return n.enqueue({
                        eventType: k,
                        args: e
                    })
                }), p(e, j, function(e) {
                    return n.enqueue({
                        eventType: j,
                        args: e
                    })
                }), p(e, y, function(e) {
                    e.config = "object" === f(t) && t.options || {}, n.enqueue({
                        eventType: y,
                        args: e
                    })
                }), o = e, g._each(o, function(e, t) {
                    b.on(t, e)
                })) : g.logMessage('Analytics adapter for "'.concat(s, '" disabled by sampling')), this._oldEnable = this.enableAnalytics, this.enableAnalytics = function() {
                    return g.logMessage('Analytics adapter for "'.concat(s, '" already enabled, unnecessary call to `enableAnalytics`.'))
                }
            }
        };
        var r = n(5),
            o = n.n(r),
            l = n(4);

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var b = n(8),
            g = n(0),
            i = o.a.EVENTS,
            y = i.AUCTION_INIT,
            m = i.AUCTION_END,
            v = i.REQUEST_BIDS,
            I = i.BID_REQUESTED,
            h = i.BID_TIMEOUT,
            A = i.BID_RESPONSE,
            D = i.NO_BID,
            T = i.BID_WON,
            O = i.BID_ADJUSTMENT,
            S = i.BIDDER_DONE,
            U = i.SET_TARGETING,
            E = i.AD_RENDER_FAILED,
            k = i.AUCTION_DEBUG,
            j = i.ADD_AD_UNITS,
            N = "endpoint",
            R = "bundle"
    },
    718: function(e, t, n) {
        e.exports = n(719)
    },
    719: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "storage", function() {
            return v
        }), n.d(t, "SEND_TIMEOUT", function() {
            return w
        }), n.d(t, "rubiConf", function() {
            return q
        }), t.getHostNameFromReferer = F, t.parseBidResponse = x;
        var r = n(6),
            l = n(9),
            o = n(5),
            i = n.n(o),
            d = n(4),
            p = n(3),
            f = n(0),
            s = n(21),
            a = n(7);

        function c(t, e) {
            var n, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)), r
        }

        function b(o) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(i), !0).forEach(function(e) {
                    var t, n, r;
                    t = o, r = i[n = e], n in t ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = r
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
                })
            }
            return o
        }

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var m, v = Object(a.b)(52, "rubicon"),
            u = "rpaSession",
            I = Object(s.a)(),
            h = i.a.EVENTS,
            A = h.AUCTION_INIT,
            D = h.AUCTION_END,
            T = h.BID_REQUESTED,
            O = h.BID_RESPONSE,
            S = h.BIDDER_DONE,
            U = h.BID_TIMEOUT,
            E = h.BID_WON,
            k = h.SET_TARGETING,
            j = i.a.STATUS,
            N = j.GOOD,
            R = j.NO_BID,
            _ = i.a.BID_STATUS.BID_REJECTED;
        p.b.getConfig("s2sConfig", function(e) {
            var t = e.s2sConfig;
            m = t
        });
        var w = 3e3,
            C = {
                auctions: {},
                targeting: {},
                timeouts: {},
                gpt: {}
            },
            q = {
                pvid: f.generateUUID().slice(0, 8)
            };

        function F(t) {
            try {
                J.referrerHostname = f.parseUrl(t, {
                    noDecodeWholeURL: !0
                }).hostname
            } catch (e) {
                f.logError("Rubicon Analytics: Unable to parse hostname from supplied url: ", t, e), J.referrerHostname = ""
            }
            return J.referrerHostname
        }

        function P(r) {
            return Object.keys(r).reduce(function(e, t) {
                var n = r[t];
                return "number" == typeof n ? n = n.toFixed(3) : "string" != typeof n && (n = String(n)), e[t] = n, e
            }, {})
        }

        function B(e) {
            return {
                width: e.w || e[0],
                height: e.h || e[1]
            }
        }

        function M(e) {
            return -1 !== ["banner", "native", "video"].indexOf(e)
        }

        function W(e, t) {
            function i(t) {
                return f.pick(t, ["bidder", "bidId", function(e) {
                    return f.deepAccess(t, "bidResponse.pbsBidId") || f.deepAccess(t, "bidResponse.seatBidId") || e
                }, "status", "error", "source", function(e, t) {
                    return e || (m && Array.isArray(m.bidders) && -1 !== m.bidders.indexOf(t.bidder) ? "server" : "client")
                }, "clientLatencyMillis", "serverLatencyMillis", "params", "bidResponse", function(e) {
                    return e ? f.pick(e, ["bidPriceUSD", "dealId", "dimensions", "mediaType", "floorValue", "floorRuleValue", "floorRule"]) : void 0
                }])
            }

            function r(e) {
                return y(i(e), f.pick(e.adUnit, ["adUnitCode", "transactionId", "videoAdFormat", function() {
                    return e.videoAdFormat
                }, "mediaTypes"]), {
                    adserverTargeting: P(C.targeting[e.adUnit.adUnitCode] || {}),
                    bidwonStatus: "success",
                    accountId: L,
                    siteId: e.siteId,
                    zoneId: e.zoneId,
                    samplingFactor: V
                })
            }
            var n, o, s, a = C.auctions[e],
                c = p.b.getConfig("pageUrl") || a && a.referrer,
                u = {
                    eventTimeMillis: Date.now(),
                    integration: q.int_type || "pbjs",
                    ruleId: q.rule_name,
                    version: "4.15.0",
                    referrerUri: c,
                    referrerHostname: J.referrerHostname || F(c),
                    channel: "web",
                    wrapperName: q.wrapperName
                };
            a && !a.sent ? (n = Object.keys(a.bids).reduce(function(e, t) {
                var n = a.bids[t],
                    r = e[n.adUnit.adUnitCode];
                r || ((r = e[n.adUnit.adUnitCode] = f.pick(n.adUnit, ["adUnitCode", "transactionId", "mediaTypes", "dimensions", "adserverTargeting", function() {
                    return P(C.targeting[n.adUnit.adUnitCode] || {})
                }, "gam", "pbAdSlot"])).bids = [], r.status = "no-bid"), r.siteId && r.zoneId || -1 === z.indexOf(n.bidder) || f.deepAccess(n, "params.accountId") == L && (r.accountId = parseInt(L), r.siteId = parseInt(f.deepAccess(n, "params.siteId")), r.zoneId = parseInt(f.deepAccess(n, "params.zoneId"))), n.videoAdFormat && !r.videoAdFormat && (r.videoAdFormat = n.videoAdFormat);
                var o = ["error", "no-bid", "success"];
                return o.indexOf(n.status) > o.indexOf(r.status) && (r.status = n.status), r.bids.push(i(n)), e
            }, {}), Object.keys(a.bids).forEach(function(e) {
                var t = a.bids[e].adUnit.adUnitCode;
                y(a.bids[e], f.pick(n[t], ["accountId", "siteId", "zoneId"]))
            }), o = {
                clientTimeoutMillis: a.timeout,
                samplingFactor: V,
                accountId: L,
                adUnits: Object.keys(n).map(function(e) {
                    return n[e]
                })
            }, a.floorData && ("noData" === a.floorData.location ? o.floors = f.pick(a.floorData, ["location", "fetchStatus", "floorProvider as provider"]) : o.floors = f.pick(a.floorData, ["location", "modelVersion as modelName", "skipped", "enforcement", function() {
                return f.deepAccess(a.floorData, "enforcements.enforceJS")
            }, "dealsEnforced", function() {
                return f.deepAccess(a.floorData, "enforcements.floorDeals")
            }, "skipRate", "fetchStatus", "floorMin", "floorProvider as provider"])), a.gdprConsent && (o.gdpr = f.pick(a.gdprConsent, ["gdprApplies as applies", "consentString", "apiVersion as version"])), a.session && (u.session = f.pick(a.session, ["id", "pvid", "start", "expires"]), f.isEmpty(a.session.fpkvs) || (u.fpkvs = Object.keys(a.session.fpkvs).map(function(e) {
                return {
                    key: e,
                    value: a.session.fpkvs[e]
                }
            }))), m && (o.serverTimeoutMillis = m.timeout), u.auctions = [o], 0 < (s = Object.keys(a.bidsWon).reduce(function(e, t) {
                var n = a.bidsWon[t];
                return n && e.push(r(a.bids[n])), e
            }, [])).length && (u.bidsWon = s), a.sent = !0) : t && a && a.bids[t] && (u.bidsWon = [r(a.bids[t])]), Object(d.a)(this.getUrl(), null, JSON.stringify(u), {
                contentType: "application/json"
            })
        }

        function x(n, e, t) {
            var r = function(t) {
                var e, n;
                if (t.status === _ && f.deepAccess(t, "floorData.cpmAfterAdjustments")) e = t.floorData.cpmAfterAdjustments, n = t.floorData.floorCurrency;
                else {
                    if ("string" == typeof t.currency && "USD" === t.currency.toUpperCase()) return Number(t.cpm);
                    e = t.cpm, n = t.currency
                }
                if ("USD" === n) return Number(e);
                try {
                    return Number(I.convertCurrency(e, n, "USD"))
                } catch (e) {
                    f.logWarn("Rubicon Analytics Adapter: Could not determine the bidPriceUSD of the bid ", t)
                }
            }(n);
            return e && e.bidPriceUSD > r ? e : f.pick(n, ["bidPriceUSD", function() {
                return r
            }, "dealId", "status", "mediaType", "dimensions", function() {
                var e = n.width || n.playerWidth,
                    t = n.height || n.playerHeight;
                return e && t ? {
                    width: e,
                    height: t
                } : void 0
            }, "seatBidId", "floorValue", function() {
                return f.deepAccess(n, "floorData.floorValue")
            }, "floorRuleValue", function() {
                return f.deepAccess(n, "floorData.floorRuleValue")
            }, "floorRule", function() {
                return f.debugTurnedOn() ? f.deepAccess(n, "floorData.floorRule") : void 0
            }])
        }
        p.b.getConfig("rubicon", function(e) {
            f.mergeDeep(q, e.rubicon), !0 === f.deepAccess(e, "rubicon.updatePageView") && (q.pvid = f.generateUUID().slice(0, 8))
        });
        var L, V = 1,
            z = ["rubicon"];

        function H() {
            var e = Date.now(),
                t = function() {
                    var e = v.getDataFromLocalStorage(u);
                    if (e) try {
                        return JSON.parse(window.atob(e))
                    } catch (e) {
                        f.logError("Rubicon Analytics: Unable to decode ".concat(u, " value: "), e)
                    }
                    return {}
                }();
            return (!Object.keys(t).length || 18e5 < e - t.lastSeen || t.expires < e) && (t = {
                id: f.generateUUID(),
                start: e,
                expires: e + 216e5
            }), Object.keys(t).length && (t.lastSeen = e, t.fpkvs = b(b({}, t.fpkvs), q.fpkvs && "object" === g(q.fpkvs) && Object.keys(q.fpkvs).every(function(e) {
                return "string" == typeof q.fpkvs[e]
            }) ? q.fpkvs : {}), t.pvid = q.pvid, function(e) {
                try {
                    v.setDataInLocalStorage(u, window.btoa(JSON.stringify(e)))
                } catch (e) {
                    f.logError("Rubicon Analytics: Unable to encode ".concat(u, " value: "), e)
                }
            }(t)), t
        }
        var G = Object(r.a)({
                analyticsType: "endpoint"
            }),
            J = y({}, G, {
                referrerHostname: "",
                enableAnalytics: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {},
                        n = !1;
                    V = 1, "object" === g(t.options) && (t.options.accountId && (L = Number(t.options.accountId)), t.options.endpoint ? this.getUrl = function() {
                        return t.options.endpoint
                    } : (f.logError("required endpoint missing from rubicon analytics"), n = !0), void 0 !== t.options.sampling && (V = 1 / parseFloat(t.options.sampling)), void 0 !== t.options.samplingFactor && (void 0 !== t.options.sampling && f.logWarn("Both options.samplingFactor and options.sampling enabled in rubicon analytics, defaulting to samplingFactor"), V = parseFloat(t.options.samplingFactor), t.options.sampling = 1 / V));
                    var r = [1, 10, 20, 40, 100]; - 1 === r.indexOf(V) ? (n = !0, f.logError("invalid samplingFactor for rubicon analytics: " + V + ", must be one of " + r.join(", "))) : L || (n = !0, f.logError("required accountId missing for rubicon analytics")), n || G.enableAnalytics.call(this, t)
                },
                disableAnalytics: function() {
                    this.getUrl = G.getUrl, L = void 0, q = {}, C.gpt.registered = !1, G.disableAnalytics.apply(this, arguments)
                },
                track: function(e) {
                    var t, n, r = this,
                        o = e.eventType,
                        i = e.args;
                    switch (o) {
                        case A:
                            n = l.default.aliasRegistry, Object.keys(n).forEach(function(e) {
                                "rubicon" === n[e] && z.push(e)
                            });
                            var s = f.pick(i, ["timestamp", "timeout"]);
                            s.bids = {}, s.bidsWon = {}, s.referrer = f.deepAccess(i, "bidderRequests.0.refererInfo.referer");
                            var a = f.deepAccess(i, "bidderRequests.0.bids.0.floorData");
                            a && (s.floorData = b({}, a)), s.gdprConsent = f.deepAccess(i, "bidderRequests.0.gdprConsent"), s.session = v.localStorageIsEnabled() && H(), C.auctions[i.auctionId] = s, !C.gpt.registered && f.isGptPubadsDefined() && (window.googletag.pubads().addEventListener("slotRenderEnded", function(r) {
                                var o = f.isAdUnitCodeMatchingSlot(r.slot);
                                Object.keys(C.auctions).forEach(function(n) {
                                    (Object.keys(C.auctions[n].bids) || []).forEach(function(e) {
                                        var t = C.auctions[n].bids[e];
                                        o(t.adUnit.adUnitCode) && (t.adUnit.gam = f.pick(r, ["advertiserId", function(e) {
                                            return f.isNumber(e) ? e : void 0
                                        }, "creativeId", function(e) {
                                            return f.isNumber(e) ? e : void 0
                                        }, "lineItemId", function(e) {
                                            return f.isNumber(e) ? e : void 0
                                        }, "adSlot", function() {
                                            return r.slot.getAdUnitPath()
                                        }, "isSlotEmpty", function() {
                                            return r.isEmpty || void 0
                                        }]))
                                    })
                                })
                            }), C.gpt.registered = !0);
                            break;
                        case T:
                            y(C.auctions[i.auctionId].bids, i.bids.reduce(function(e, r) {
                                return C.auctions[i.auctionId].bidsWon[r.adUnitCode] = !1, e[r.bidId] = f.pick(r, ["bidder", function(e) {
                                    return e.toLowerCase()
                                }, "bidId", "status", function() {
                                    return "no-bid"
                                }, "finalSource as source", "params", function(e, t) {
                                    switch (t.bidder) {
                                        case "rubicon":
                                            return f.pick(e, ["accountId", "siteId", "zoneId"])
                                    }
                                }, "videoAdFormat", function(e, t) {
                                    if ("rubicon" === t.bidder) return {
                                        201: "pre-roll",
                                        202: "interstitial",
                                        203: "outstream",
                                        204: "mid-roll",
                                        205: "post-roll",
                                        207: "vertical"
                                    }[f.deepAccess(r, "params.video.size_id")];
                                    var n = parseInt(f.deepAccess(r, "params.video.startdelay"), 10);
                                    return isNaN(n) ? void 0 : 0 < n ? "mid-roll" : {
                                        0: "pre-roll",
                                        "-1": "mid-roll",
                                        "-2": "post-roll"
                                    }[n]
                                }, "adUnit", function() {
                                    return f.pick(r, ["adUnitCode", "transactionId", "sizes as dimensions", function(e) {
                                        return e.map(B)
                                    }, "mediaTypes", function(e) {
                                        return r.mediaType && M(r.mediaType) ? [r.mediaType] : Array.isArray(e) ? e.filter(M) : "object" === g(e) ? (r.sizes || (r.dimensions = [], f._each(e, function(e) {
                                            return r.dimensions = r.dimensions.concat(e.sizes.map(B))
                                        })), Object.keys(e).filter(M)) : ["banner"]
                                    }, "gam", function() {
                                        if ("gam" === f.deepAccess(r, "fpd.context.adServer.name")) return {
                                            adSlot: r.fpd.context.adServer.adSlot
                                        }
                                    }, "pbAdSlot", function() {
                                        return f.deepAccess(r, "fpd.context.pbAdSlot")
                                    }])
                                }]), e
                            }, {}));
                            break;
                        case O:
                            var c = C.auctions[i.auctionId],
                                u = c.bids[i.requestId];
                            if (!f.deepAccess(u, "adUnit.gam.adSlot") && f.deepAccess(i, "floorData.matchedFields.gptSlot") && f.deepSetValue(u, "adUnit.gam.adSlot", i.floorData.matchedFields.gptSlot), !f.deepAccess(c, "floorData.enforcements") && f.deepAccess(i, "floorData.enforcements") && (c.floorData.enforcements = b({}, i.floorData.enforcements)), !u) {
                                f.logError("Rubicon Anlytics Adapter Error: Could not find associated bid request for bid response with requestId: ", i.requestId);
                                break
                            }
                            switch (u.source = (void 0 === (t = u.source || i.source) ? t = "client" : "s2s" === t && (t = "server"), t.toLowerCase()), i.getStatusCode()) {
                                case N:
                                    u.status = "success", delete u.error;
                                    break;
                                case R:
                                    u.status = i.status === _ ? "rejected-ipf" : "no-bid", delete u.error;
                                    break;
                                default:
                                    u.status = "error", u.error = {
                                        code: "request-error"
                                    }
                            }
                            u.clientLatencyMillis = u.timeToRespond || Date.now() - C.auctions[i.auctionId].timestamp, u.bidResponse = x(i, u.bidResponse);
                            break;
                        case S:
                            i.bids.forEach(function(e) {
                                var t = C.auctions[e.auctionId].bids[e.bidId || e.requestId];
                                void 0 !== e.serverResponseTimeMs && (t.serverLatencyMillis = e.serverResponseTimeMs), t.status || (t.status = "no-bid"), t.clientLatencyMillis || (t.clientLatencyMillis = Date.now() - C.auctions[e.auctionId].timestamp)
                            });
                            break;
                        case k:
                            y(C.targeting, i);
                            break;
                        case E:
                            var d = C.auctions[i.auctionId];
                            d.bidsWon[i.adUnitCode] = i.requestId, !0 === d.sent ? W.call(this, i.auctionId, i.requestId) : Object.keys(d.bidsWon).reduce(function(e, t) {
                                return e = e && d.bidsWon[t]
                            }, !0) && (clearTimeout(C.timeouts[i.auctionId]), delete C.timeouts[i.auctionId], W.call(this, i.auctionId));
                            break;
                        case D:
                            C.timeouts[i.auctionId] = setTimeout(function() {
                                W.call(r, i.auctionId)
                            }, w);
                            break;
                        case U:
                            i.forEach(function(e) {
                                var t = C.auctions[e.auctionId].bids[e.bidId || e.requestId];
                                t.status = "error", t.error = {
                                    code: "timeout-error"
                                }
                            })
                    }
                }
            });
        l.default.registerAnalyticsAdapter({
            adapter: J,
            code: "rubicon",
            gvlid: 52
        }), t.default = J
    }
}, [718]);
pbjsChunk([125], {
    720: function(e, r, t) {
        e.exports = t(721)
    },
    721: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return A
        }), r.hasVideoMediaType = s, t.d(r, "resetRubiConf", function() {
            return c
        }), r.masSizeOrdering = d, r.determineRubiconVideoSizeId = f, r.getPriceGranularity = C, r.hasValidVideoParams = I, r.hasValidSupplyChainParams = k, r.encodeParam = w, r.resetUserSync = function() {
            z = !1
        };
        var g = t(0),
            i = t(1),
            v = t(3),
            p = t(2),
            n = t(10),
            b = t.n(n);

        function y(e, r) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, r) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var t = [],
                    i = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return t
            }(e, r) || function(e, r) {
                if (!e) return;
                if ("string" == typeof e) return o(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t) return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, r)
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function o(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
            return i
        }

        function x() {
            return (x = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }

        function l(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }

        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var _ = {};
        v.b.getConfig("rubicon", function(e) {
            g.mergeDeep(_, e.rubicon)
        });
        var u = {
            1: "468x60",
            2: "728x90",
            5: "120x90",
            7: "125x125",
            8: "120x600",
            9: "160x600",
            10: "300x600",
            13: "200x200",
            14: "250x250",
            15: "300x250",
            16: "336x280",
            17: "240x400",
            19: "300x100",
            31: "980x120",
            32: "250x360",
            33: "180x500",
            35: "980x150",
            37: "468x400",
            38: "930x180",
            39: "750x100",
            40: "750x200",
            41: "750x300",
            42: "2x4",
            43: "320x50",
            44: "300x50",
            48: "300x300",
            53: "1024x768",
            54: "300x1050",
            55: "970x90",
            57: "970x250",
            58: "1000x90",
            59: "320x80",
            60: "320x150",
            61: "1000x1000",
            64: "580x500",
            65: "640x480",
            66: "930x600",
            67: "320x480",
            68: "1800x1000",
            72: "320x320",
            73: "320x160",
            78: "980x240",
            79: "980x300",
            80: "980x400",
            83: "480x300",
            85: "300x120",
            90: "548x150",
            94: "970x310",
            95: "970x100",
            96: "970x210",
            101: "480x320",
            102: "768x1024",
            103: "480x280",
            105: "250x800",
            108: "320x240",
            113: "1000x300",
            117: "320x100",
            125: "800x250",
            126: "200x600",
            144: "980x600",
            145: "980x150",
            152: "1000x250",
            156: "640x320",
            159: "320x250",
            179: "250x600",
            195: "600x300",
            198: "640x360",
            199: "640x200",
            213: "1030x590",
            214: "980x360",
            221: "1x1",
            229: "320x180",
            230: "2000x1400",
            232: "580x400",
            234: "6x6",
            251: "2x2",
            256: "480x820",
            257: "400x600",
            258: "500x200",
            259: "998x200",
            264: "970x1000",
            265: "1920x1080",
            274: "1800x200",
            278: "320x500",
            282: "320x400",
            288: "640x380",
            548: "500x1000"
        };
        g._each(u, function(e, r) {
            return u[e] = r
        });
        var A = {
            code: "rubicon",
            gvlid: 52,
            supportedMediaTypes: [p.b, p.d],
            isBidRequestValid: function(e) {
                if ("object" !== h(e.params)) return !1;
                for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                    if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return g.logError("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
                var i = m(e, !0);
                return !!i && ("video" !== i || I(e))
            },
            buildRequests: function(e, u) {
                var n, r = e.filter(function(e) {
                    return "video" === m(e)
                }).map(function(t) {
                    t.startTime = (new Date).getTime();
                    var e, r, i, n = {
                        id: t.transactionId,
                        test: v.b.getConfig("debug") ? 1 : 0,
                        cur: ["USD"],
                        source: {
                            tid: t.transactionId
                        },
                        tmax: u.timeout,
                        imp: [{
                            exp: v.b.getConfig("s2sConfig.defaultTtl"),
                            id: t.adUnitCode,
                            secure: 1,
                            ext: l({}, t.bidder, t.params),
                            video: g.deepAccess(t, "mediaTypes.video") || {}
                        }],
                        ext: {
                            prebid: {
                                cache: {
                                    vastxml: {
                                        returnCreative: !0 === _.returnVast
                                    }
                                },
                                targeting: {
                                    includewinners: !0,
                                    includebidderkeys: !1,
                                    pricegranularity: C(v.b)
                                },
                                bidders: {
                                    rubicon: {
                                        integration: _.int_type || "pbjs"
                                    }
                                }
                            }
                        }
                    };
                    if ("rubicon" !== t.bidder && (n.ext.prebid.aliases = l({}, t.bidder, "rubicon")), "function" != typeof t.getFloor || _.disableFloors) e = parseFloat(g.deepAccess(t, "params.floor"));
                    else {
                        try {
                            r = t.getFloor({
                                currency: "USD",
                                mediaType: "video",
                                size: j(t, "video")
                            })
                        } catch (e) {
                            g.logError("Rubicon: getFloor threw an error: ", e)
                        }
                        e = "object" !== h(r) || "USD" !== r.currency || isNaN(parseInt(r.floor)) ? void 0 : parseFloat(r.floor)
                    }
                    isNaN(e) || (n.imp[0].bidfloor = e), n.imp[0].ext[t.bidder].video.size_id = f(t),
                        function(r, t, e) {
                            if (!r) return;
                            "object" === h(v.b.getConfig("app")) ? r.app = v.b.getConfig("app") : r.site = {
                                page: S(t, e)
                            };
                            "object" === h(v.b.getConfig("device")) && (r.device = v.b.getConfig("device"));
                            t.params.video.language && ["site", "device"].forEach(function(e) {
                                r[e] && (r[e].content = x({
                                    language: t.params.video.language
                                }, r[e].content))
                            })
                        }(n, t, u),
                        function(e, r) {
                            "object" === h(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                            "object" === h(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                            "object" === h(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === r.params.position ? e.imp[0].video.pos = 1 : "btf" === r.params.position && (e.imp[0].video.pos = 3));
                            var t = j(r, "video");
                            e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                        }(n, t), u.gdprConsent && ("boolean" == typeof u.gdprConsent.gdprApplies && (i = u.gdprConsent.gdprApplies ? 1 : 0), g.deepSetValue(n, "regs.ext.gdpr", i), g.deepSetValue(n, "user.ext.consent", u.gdprConsent.consentString)), u.uspConsent && g.deepSetValue(n, "regs.ext.us_privacy", u.uspConsent);
                    var o = g.deepAccess(u, "bids.0.userIdAsEids");
                    o && o.length && g.deepSetValue(n, "user.ext.eids", o);
                    var a = v.b.getConfig("user.id");
                    a && g.deepSetValue(n, "user.id", a), !0 === v.b.getConfig("coppa") && g.deepSetValue(n, "regs.coppa", 1), t.schain && k(t.schain) && g.deepSetValue(n, "source.ext.schain", t.schain);
                    var s, c = x({}, t.params.inventory, v.b.getConfig("fpd.context")),
                        d = x({}, t.params.visitor, v.b.getConfig("fpd.user"));
                    g.isEmpty(c) && g.isEmpty(d) || (s = {
                        bidders: [u.bidderCode],
                        config: {
                            fpd: {}
                        }
                    }, g.isEmpty(c) || (s.config.fpd.site = c), g.isEmpty(d) || (s.config.fpd.user = d), g.deepSetValue(n, "ext.prebid.bidderconfig.0", s));
                    var p = g.deepAccess(t, "fpd.context.pbAdSlot");
                    return "string" == typeof p && p && g.deepSetValue(n.imp[0].ext, "context.data.pbadslot", p), ["name", "adSlot"].forEach(function(e) {
                        var r = g.deepAccess(t, "fpd.context.adserver.".concat(e));
                        "string" == typeof r && r && g.deepSetValue(n.imp[0].ext, "context.data.adserver.".concat(e.toLowerCase()), r)
                    }), t.storedAuctionResponse && g.deepSetValue(n.imp[0], "ext.prebid.storedauctionresponse.id", t.storedAuctionResponse.toString()), g.deepSetValue(n.imp[0], "ext.prebid.auctiontimestamp", u.auctionStart), {
                        method: "POST",
                        url: "https://".concat(_.videoHost || "prebid-server", ".rubiconproject.com/openrtb2/auction"),
                        data: n,
                        bidRequest: t
                    }
                });
                return !0 !== _.singleRequest ? r.concat(e.filter(function(e) {
                    return "banner" === m(e)
                }).map(function(e) {
                    var i = A.createSlotParams(e, u);
                    return {
                        method: "GET",
                        url: "https://".concat(_.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
                        data: A.getOrderedParams(i).reduce(function(e, r) {
                            var t = i[r];
                            return g.isStr(t) && "" !== t || g.isNumber(t) ? "".concat(e).concat(w(r, t), "&") : e
                        }, "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    }
                })) : (n = e.filter(function(e) {
                    return "banner" === m(e)
                }).reduce(function(e, r) {
                    return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                }, {}), r.concat(Object.keys(n).reduce(function(r, e) {
                    var t, i;
                    return t = n[e], i = 10, t.map(function(e, r) {
                        return r % i == 0 ? t.slice(r, r + i) : null
                    }).filter(function(e) {
                        return e
                    }).forEach(function(e) {
                        var i = A.combineSlotUrlParams(e.map(function(e) {
                            return A.createSlotParams(e, u)
                        }));
                        r.push({
                            method: "GET",
                            url: "https://".concat(_.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
                            data: A.getOrderedParams(i).reduce(function(e, r) {
                                var t = i[r];
                                return g.isStr(t) && "" !== t || g.isNumber(t) ? "".concat(e).concat(w(r, t), "&") : e
                            }, "") + "slots=".concat(e.length, "&rand=").concat(Math.random()),
                            bidRequest: e
                        })
                    }), r
                }, [])))
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/,
                    t = /^tg_i/,
                    i = /^eid_|^tpid_/,
                    n = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "rp_schain"].concat(Object.keys(e).filter(function(e) {
                        return i.test(e)
                    })).concat(["x_liverampidl", "ppuid", "rf", "p_geo.latitude", "p_geo.longitude", "kw"]).concat(Object.keys(e).filter(function(e) {
                        return r.test(e)
                    })).concat(Object.keys(e).filter(function(e) {
                        return t.test(e)
                    })).concat(["tk_flint", "x_source.tid", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return n.concat(Object.keys(e).filter(function(e) {
                    return -1 === n.indexOf(e)
                }))
            },
            combineSlotUrlParams: function(n) {
                if (1 === n.length) return n[0];
                var i = n.reduce(function(r, t, i) {
                        return Object.keys(t).forEach(function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e])
                        }), r
                    }, {}),
                    o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach(function(e) {
                    var r = i[e].join(";"),
                        t = r.match(o);
                    i[e] = t ? t[1] : r
                }), i
            },
            createSlotParams: function(e, r) {
                e.startTime = (new Date).getTime();
                var t, i = e.params,
                    n = j(e, "banner"),
                    o = y(i.latLong || [], 2),
                    a = o[0],
                    s = o[1],
                    c = {
                        account_id: i.accountId,
                        site_id: i.siteId,
                        zone_id: i.zoneId,
                        size_id: n[0],
                        alt_size_ids: n.slice(1).join(",") || void 0,
                        rp_floor: .01 < (i.floor = parseFloat(i.floor)) ? i.floor : .01,
                        rp_secure: "1",
                        tk_flint: "".concat(_.int_type || "pbjs_lite", "_v4.15.0"),
                        "x_source.tid": e.transactionId,
                        "x_source.pchain": i.pchain,
                        p_screen_res: [window.screen.width, window.screen.height].join("x"),
                        tk_user_key: i.userId,
                        "p_geo.latitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: S(e, r)
                    };
                if ("function" == typeof e.getFloor && !_.disableFloors) {
                    try {
                        t = e.getFloor({
                            currency: "USD",
                            mediaType: "banner",
                            size: "*"
                        })
                    } catch (e) {
                        g.logError("Rubicon: getFloor threw an error: ", e)
                    }
                    c.rp_hard_floor = "object" !== h(t) || "USD" !== t.currency || isNaN(parseInt(t.floor)) ? void 0 : t.floor
                }
                c.p_pos = "atf" === i.position || "btf" === i.position ? i.position : "";
                var d = v.b.getConfig("user.id");
                d && (c.ppuid = d), e.userIdAsEids && e.userIdAsEids.forEach(function(r) {
                    try {
                        var e;
                        "adserver.org" === r.source ? (c.tpid_tdid = r.uids[0].id, c["eid_adserver.org"] = r.uids[0].id) : "liveintent.com" === r.source ? (c["tpid_liveintent.com"] = r.uids[0].id, c["eid_liveintent.com"] = r.uids[0].id, r.ext && Array.isArray(r.ext.segments) && r.ext.segments.length && (c["tg_v.LIseg"] = r.ext.segments.join(","))) : "liveramp.com" === r.source ? c.x_liverampidl = r.uids[0].id : "sharedid.org" === r.source ? c["eid_sharedid.org"] = "".concat(r.uids[0].id, "^").concat(r.uids[0].atype, "^").concat(r.uids[0].ext && r.uids[0].ext.third || "") : "id5-sync.com" === r.source ? c["eid_id5-sync.com"] = "".concat(r.uids[0].id, "^").concat(r.uids[0].atype, "^").concat(r.ext && r.ext.linkType || "") : c["eid_".concat(r.source)] = "".concat(r.uids[0].id, "^").concat(r.uids[0].atype || ""), c.ppuid || (e = b()(r.uids, function(e) {
                            return e.ext && "ppuid" === e.ext.stype
                        })) && e.id && (c.ppuid = e.id)
                    } catch (e) {
                        g.logWarn("Rubicon: error reading eid:", r, e)
                    }
                }), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (c.gdpr = Number(r.gdprConsent.gdprApplies)), c.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (c.us_privacy = encodeURIComponent(r.uspConsent));
                var p = x({}, i.visitor, v.b.getConfig("fpd.user"));
                Object.keys(p).forEach(function(e) {
                    null != p[e] && "keywords" !== e && (c["tg_v.".concat(e)] = "object" !== h(p[e]) || Array.isArray(p[e]) ? p[e].toString() : JSON.stringify(p[e]))
                });
                var u = x({}, i.inventory, v.b.getConfig("fpd.context"));
                Object.keys(u).forEach(function(e) {
                    null != u[e] && "keywords" !== e && (c["tg_i.".concat(e)] = "object" !== h(u[e]) || Array.isArray(u[e]) ? u[e].toString() : JSON.stringify(u[e]))
                });
                var l = (i.keywords || []).concat(g.deepAccess(v.b.getConfig("fpd.user"), "keywords") || [], g.deepAccess(v.b.getConfig("fpd.context"), "keywords") || []);
                c.kw = Array.isArray(l) && l.length ? l.join(",") : "";
                var m = g.deepAccess(e, "fpd.context.pbAdSlot");
                "string" == typeof m && m && (c["tg_i.pbadslot"] = m.replace(/^\/+/, ""));
                var f = g.deepAccess(e, "fpd.context.adServer.adSlot");
                return "string" == typeof f && f && (c["tg_i.dfp_ad_unit_code"] = f.replace(/^\/+/, "")), !0 === v.b.getConfig("coppa") && (c.coppa = 1), e.schain && k(e.schain) && (c.rp_schain = A.serializeSupplyChain(e.schain)), c
            },
            serializeSupplyChain: function(e) {
                if (!k(e)) return "";
                var r = e.ver,
                    t = e.complete,
                    i = e.nodes;
                return "".concat(r, ",").concat(t, "!").concat(A.serializeSupplyChainNodes(i))
            },
            serializeSupplyChainNodes: function(e) {
                var t = ["asi", "sid", "hp", "rid", "name", "domain"];
                return e.map(function(r) {
                    return t.map(function(e) {
                        return encodeURIComponent(r[e] || "")
                    }).join(",")
                }).join("!")
            },
            interpretResponse: function(c, e) {
                var d = e.bidRequest;
                if (!(c = c.body) || "object" !== h(c)) return [];
                if (c.seatbid) {
                    var r = g.deepAccess(c, "ext.errors.rubicon");
                    Array.isArray(r) && 0 < r.length && g.logWarn("Rubicon: Error in video response");
                    var o = [];
                    return c.seatbid.forEach(function(n) {
                        (n.bid || []).forEach(function(e) {
                            var r = {
                                requestId: d.bidId,
                                currency: c.cur || "USD",
                                creativeId: e.crid,
                                cpm: e.price || 0,
                                bidderCode: n.seat,
                                ttl: 300,
                                netRevenue: !1 !== _.netRevenue,
                                width: e.w || g.deepAccess(d, "mediaTypes.video.w") || g.deepAccess(d, "params.video.playerWidth"),
                                height: e.h || g.deepAccess(d, "mediaTypes.video.h") || g.deepAccess(d, "params.video.playerHeight")
                            };
                            e.id && (r.seatBidId = e.id), e.dealid && (r.dealId = e.dealid), e.adomain && g.deepSetValue(r, "meta.advertiserDomains", Array.isArray(e.adomain) ? e.adomain : [e.adomain]), g.deepAccess(e, "ext.bidder.rp.advid") && g.deepSetValue(r, "meta.advertiserId", e.ext.bidder.rp.advid);
                            var t, i = g.deepAccess(c, "ext.responsetimemillis.rubicon");
                            d && i && (d.serverResponseTimeMs = i), g.deepAccess(e, "ext.prebid.type") === p.d ? (r.mediaType = p.d, g.deepSetValue(r, "meta.mediaType", p.d), (t = g.deepAccess(e, "ext.prebid.targeting")) && "object" === h(t) && (r.adserverTargeting = t), e.ext.prebid.cache && "object" === h(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : t && t.hb_uuid && t.hb_cache_host && t.hb_cache_path && (r.videoCacheKey = t.hb_uuid, r.vastUrl = "https://".concat(t.hb_cache_host).concat(t.hb_cache_path, "?uuid=").concat(t.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)) : g.logWarn("Rubicon: video response received non-video media type"), o.push(r)
                        })
                    }), o
                }
                var t = c.ads;
                return "object" !== h(d) || Array.isArray(d) || "video" !== m(d) || "object" !== h(t) || (t = t[d.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i, n, o, a, s = Array.isArray(d) ? d[t] : d;
                    return s && "object" === h(s) ? (i = {
                        requestId: s.bidId,
                        currency: "USD",
                        creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                        cpm: r.cpm || 0,
                        dealId: r.deal,
                        ttl: 300,
                        netRevenue: !1 !== _.netRevenue,
                        rubicon: {
                            advertiserId: r.advertiser,
                            networkId: r.network
                        },
                        meta: {
                            advertiserId: r.advertiser,
                            networkId: r.network,
                            mediaType: p.b
                        }
                    }, r.creative_type && (i.mediaType = r.creative_type), r.adomain && (i.meta.advertiserDomains = Array.isArray(r.adomain) ? r.adomain : [r.adomain]), r.creative_type === p.d ? (i.width = s.params.video.playerWidth, i.height = s.params.video.playerHeight, i.vastUrl = r.creative_depot_url, i.impression_id = r.impression_id, i.videoCacheKey = r.impression_id) : (i.ad = (o = r.script, a = r.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(a, "'>\n<script type='text/javascript'>").concat(o, "<\/script>\n</div>\n</body>\n</html>")), n = y(u[r.size_id].split("x").map(function(e) {
                        return Number(e)
                    }), 2), i.width = n[0], i.height = n[1]), i.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function(e, r) {
                        return e[r.key] = r.values[0], e
                    }, {
                        rpfl_elemid: s.adUnitCode
                    }), e.push(i)) : g.logError("Rubicon: bidRequest undefined at index position:".concat(t), d, c), e
                }, []).sort(function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0)
                })
            },
            getUserSyncs: function(e, r, t, i) {
                if (!z && e.iframeEnabled) {
                    var n = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? n += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : n += "?gdpr_consent=".concat(t.consentString)), i && (n += "".concat(n ? "&" : "?", "us_privacy=").concat(encodeURIComponent(i))), z = !0, {
                        type: "iframe",
                        url: "https://".concat(_.syncHost || "eus", ".rubiconproject.com/usync.html") + n
                    }
                }
            },
            transformBidParams: function(e) {
                return g.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e)
            }
        };

        function S(e, r) {
            var t = v.b.getConfig("pageUrl"),
                t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer;
            return e.params.secure ? t.replace(/^http:/i, "https:") : t
        }

        function j(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(g.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== g.deepAccess(e, "mediaTypes.banner.sizes") ? n = a(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = a(e.sizes) : g.logWarn("Rubicon: no sizes are setup or found"), d(n)
        }

        function a(e) {
            return g.parseSizesInput(e).reduce(function(e, r) {
                var t = parseInt(u[r], 10);
                return t && e.push(t), e
            }, [])
        }

        function s(e) {
            return "object" === h(g.deepAccess(e, "params.video")) && void 0 !== g.deepAccess(e, "mediaTypes.".concat(p.d))
        }

        function m(e, r) {
            var t = 1 < arguments.length && void 0 !== r && r;
            return s(e) ? -1 === ["outstream", "instream"].indexOf(g.deepAccess(e, "mediaTypes.".concat(p.d, ".context"))) ? void(t && g.logError("Rubicon: mediaTypes.video.context must be outstream or instream")) : j(e, "video").length < 2 ? void(t && g.logError("Rubicon: could not determine the playerSize of the video")) : (t && g.logMessage("Rubicon: making video request for adUnit", e.adUnitCode), "video") : 0 === j(e, "banner").length ? void(t && g.logError("Rubicon: could not determine the sizes for banner request")) : (t && g.logMessage("Rubicon: making banner request for adUnit", e.adUnitCode), "banner")
        }
        var c = function() {
            return _ = {}
        };

        function d(e) {
            var n = [15, 2, 9];
            return e.sort(function(e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            })
        }

        function f(e) {
            var r = parseInt(g.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === g.deepAccess(e, "mediaTypes.".concat(p.d, ".context")) ? 203 : 201 : r
        }

        function C(e) {
            return {
                ranges: {
                    low: [{
                        max: 5,
                        increment: .5
                    }],
                    medium: [{
                        max: 20,
                        increment: .1
                    }],
                    high: [{
                        max: 20,
                        increment: .01
                    }],
                    auto: [{
                        max: 5,
                        increment: .05
                    }, {
                        min: 5,
                        max: 10,
                        increment: .1
                    }, {
                        min: 10,
                        max: 20,
                        increment: .5
                    }],
                    dense: [{
                        max: 3,
                        increment: .01
                    }, {
                        min: 3,
                        max: 8,
                        increment: .05
                    }, {
                        min: 8,
                        max: 20,
                        increment: .5
                    }],
                    custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets
                }[e.getConfig("priceGranularity")]
            }
        }

        function I(r) {
            var t = !0,
                e = Object.prototype.toString.call([]),
                i = Object.prototype.toString.call(0),
                n = {
                    mimes: e,
                    protocols: e,
                    maxduration: i,
                    linearity: i,
                    api: e
                };
            return Object.keys(n).forEach(function(e) {
                Object.prototype.toString.call(g.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, g.logError("Rubicon: mediaTypes.video." + e + " is required and must be of type: " + n[e]))
            }), t
        }

        function k(e) {
            var r = !1,
                t = ["asi", "sid", "hp"];
            return e.nodes && ((r = e.nodes.reduce(function(e, r) {
                return e ? t.every(function(e) {
                    return r.hasOwnProperty(e)
                }) : e
            }, !0)) || g.logError("Rubicon: required schain params missing")), r
        }

        function w(e, r) {
            return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r))
        }
        var z = !1;
        Object(i.registerBidder)(A)
    }
}, [720]);
pbjsChunk([8], {
    32: function(e, t, r) {
        "use strict";
        t.a = function(e) {
            var t = [];
            for (var r in e) {
                var i;
                e.hasOwnProperty(r) && ("pubProvidedId" === r ? t = t.concat(e.pubProvidedId) : (i = function(e, t) {
                    var r = s[t];
                    if (r && e) {
                        var i = {};
                        i.source = r.source;
                        var n = u.isFn(r.getValue) ? r.getValue(e) : e;
                        if (u.isStr(n)) {
                            var a, d, o = {
                                id: n,
                                atype: r.atype
                            };
                            return !u.isFn(r.getUidExt) || (a = r.getUidExt(e)) && (o.ext = a), i.uids = [o], !u.isFn(r.getEidExt) || (d = r.getEidExt(e)) && (i.ext = d), i
                        }
                    }
                    return null
                }(e[r], r)) && t.push(i))
            }
            return t
        };
        var u = r(0),
            s = {
                intentIqId: {
                    source: "intentiq.com",
                    atype: 1
                },
                pubcid: {
                    source: "pubcid.org",
                    atype: 1
                },
                tdid: {
                    source: "adserver.org",
                    atype: 1,
                    getUidExt: function() {
                        return {
                            rtiPartner: "TDID"
                        }
                    }
                },
                id5id: {
                    getValue: function(e) {
                        return e.uid
                    },
                    source: "id5-sync.com",
                    atype: 1,
                    getEidExt: function(e) {
                        if (e.ext) return e.ext
                    }
                },
                parrableId: {
                    source: "parrable.com",
                    atype: 1,
                    getValue: function(e) {
                        return e.eid ? e.eid : e.ccpaOptout ? "" : null
                    },
                    getUidExt: function(e) {
                        var t = u.pick(e, ["ibaOptout", "ccpaOptout"]);
                        if (Object.keys(t).length) return t
                    }
                },
                idl_env: {
                    source: "liveramp.com",
                    atype: 1
                },
                lipb: {
                    getValue: function(e) {
                        return e.lipbid
                    },
                    source: "liveintent.com",
                    atype: 1,
                    getEidExt: function(e) {
                        if (Array.isArray(e.segments) && e.segments.length) return {
                            segments: e.segments
                        }
                    }
                },
                britepoolid: {
                    source: "britepool.com",
                    atype: 1
                },
                lotamePanoramaId: {
                    source: "crwdcntrl.net",
                    atype: 1
                },
                criteoId: {
                    source: "criteo.com",
                    atype: 1
                },
                merkleId: {
                    source: "merkleinc.com",
                    atype: 1
                },
                netId: {
                    source: "netid.de",
                    atype: 1
                },
                sharedid: {
                    source: "sharedid.org",
                    atype: 1,
                    getValue: function(e) {
                        return e.id
                    },
                    getUidExt: function(e) {
                        return e && e.third ? {
                            third: e.third
                        } : void 0
                    }
                },
                IDP: {
                    source: "zeotap.com",
                    atype: 1
                },
                haloId: {
                    source: "audigent.com",
                    atype: 1
                },
                quantcastId: {
                    source: "quantcast.com",
                    atype: 1
                },
                idx: {
                    source: "idx.lat",
                    atype: 1
                },
                vmuid: {
                    source: "verizonmedia.com",
                    atype: 1
                }
            }
    },
    778: function(e, t, r) {
        e.exports = r(779)
    },
    779: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "spec", function() {
            return n
        });
        var l = r(0),
            i = r(1),
            a = r(2),
            g = r(32),
            n = {
                code: "sovrn",
                supportedMediaTypes: [a.b],
                gvlid: 13,
                isBidRequestValid: function(e) {
                    return !(!e.params.tagid || isNaN(parseFloat(e.params.tagid)) || !isFinite(e.params.tagid))
                },
                buildRequests: function(e, t) {
                    try {
                        var i, n, a, d, o = [],
                            u = [];
                        l._each(e, function(e) {
                            !a && e.userId && (a = Object(g.a)(e.userId)).forEach(function(e) {
                                e.uids && e.uids[0] && ("criteo.com" === e.source && (d = e.uids[0].id), u.push({
                                    source: e.source,
                                    uid: e.uids[0].id
                                }))
                            }), e.schain && (n = n || e.schain), i = i || l.getBidIdParameter("iv", e.params);
                            var t = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes || e.sizes,
                                r = (t = (t = l.isArray(t) && l.isArray(t[0]) ? t : [t]).filter(function(e) {
                                    return l.isArray(e)
                                })).map(function(e) {
                                    return {
                                        w: parseInt(e[0], 10),
                                        h: parseInt(e[1], 10)
                                    }
                                });
                            o.push({
                                adunitcode: e.adUnitCode,
                                id: e.bidId,
                                banner: {
                                    format: r,
                                    w: 1,
                                    h: 1
                                },
                                tagid: String(l.getBidIdParameter("tagid", e.params)),
                                bidfloor: l.getBidIdParameter("bidfloor", e.params)
                            })
                        });
                        var r = t.refererInfo.referer,
                            s = l.parseUrl(r).hostname,
                            c = {
                                id: l.getUniqueIdentifierStr(),
                                imp: o,
                                site: {
                                    page: r,
                                    domain: s
                                }
                            };
                        n && (c.source = {
                            ext: {
                                schain: n
                            }
                        }), t.gdprConsent && (l.deepSetValue(c, "regs.ext.gdpr", +t.gdprConsent.gdprApplies), l.deepSetValue(c, "user.ext.consent", t.gdprConsent.consentString)), t.uspConsent && l.deepSetValue(c, "regs.ext.us_privacy", t.uspConsent), a && (l.deepSetValue(c, "user.ext.eids", a), l.deepSetValue(c, "user.ext.tpid", u), d && l.deepSetValue(c, "user.ext.prebid_criteoid", d));
                        var p = "https://ap.lijit.com/rtb/bid?src=prebid_prebid_4.15.0";
                        return i && (p += "&iv=".concat(i)), {
                            method: "POST",
                            url: p,
                            data: JSON.stringify(c),
                            options: {
                                contentType: "text/plain"
                            }
                        }
                    } catch (e) {
                        l.logError("Could not build bidrequest, error deatils:", e)
                    }
                },
                interpretResponse: function(e) {
                    var t = e.body,
                        r = t.id,
                        i = t.seatbid;
                    try {
                        var n = [];
                        return r && i && 0 < i.length && i[0].bid && 0 < i[0].bid.length && i[0].bid.map(function(e) {
                            n.push({
                                requestId: e.impid,
                                cpm: parseFloat(e.price),
                                width: parseInt(e.w),
                                height: parseInt(e.h),
                                creativeId: e.crid || e.id,
                                dealId: e.dealid || null,
                                currency: "USD",
                                netRevenue: !0,
                                mediaType: a.b,
                                ad: decodeURIComponent("".concat(e.adm, '<img src="').concat(e.nurl, '">')),
                                ttl: e.ttl || 90
                            })
                        }), n
                    } catch (e) {
                        l.logError("Could not intrepret bidresponse, error deatils:", e)
                    }
                },
                getUserSyncs: function(e, t, r, i) {
                    try {
                        var n, a, d = [];
                        return t && 0 !== t.length && (e.iframeEnabled && (n = t.filter(function(e) {
                            return l.deepAccess(e, "body.ext.iid")
                        }).map(function(e) {
                            return e.body.ext.iid
                        }), a = [], r && r.gdprApplies && "string" == typeof r.consentString && a.push(["gdpr_consent", r.consentString]), i && a.push(["us_privacy", i]), n[0] && (a.push(["informer", n[0]]), d.push({
                            type: "iframe",
                            url: "https://ap.lijit.com/beacon?" + a.map(function(e) {
                                return e.join("=")
                            }).join("&")
                        }))), e.pixelEnabled && t.filter(function(e) {
                            return l.deepAccess(e, "body.ext.sync.pixels")
                        }).reduce(function(e, t) {
                            return e.concat(t.body.ext.sync.pixels)
                        }, []).map(function(e) {
                            return e.url
                        }).forEach(function(e) {
                            return d.push({
                                type: "image",
                                url: e
                            })
                        })), d
                    } catch (e) {
                        return []
                    }
                }
            };
        Object(i.registerBidder)(n)
    }
}, [778]);
pbjsChunk([4], {
    32: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = [];
            for (var n in e) {
                var o;
                e.hasOwnProperty(n) && ("pubProvidedId" === n ? t = t.concat(e.pubProvidedId) : (o = function(e, t) {
                    var n = s[t];
                    if (n && e) {
                        var o = {};
                        o.source = n.source;
                        var r = u.isFn(n.getValue) ? n.getValue(e) : e;
                        if (u.isStr(r)) {
                            var a, i, c = {
                                id: r,
                                atype: n.atype
                            };
                            return !u.isFn(n.getUidExt) || (a = n.getUidExt(e)) && (c.ext = a), o.uids = [c], !u.isFn(n.getEidExt) || (i = n.getEidExt(e)) && (o.ext = i), o
                        }
                    }
                    return null
                }(e[n], n)) && t.push(o))
            }
            return t
        };
        var u = n(0),
            s = {
                intentIqId: {
                    source: "intentiq.com",
                    atype: 1
                },
                pubcid: {
                    source: "pubcid.org",
                    atype: 1
                },
                tdid: {
                    source: "adserver.org",
                    atype: 1,
                    getUidExt: function() {
                        return {
                            rtiPartner: "TDID"
                        }
                    }
                },
                id5id: {
                    getValue: function(e) {
                        return e.uid
                    },
                    source: "id5-sync.com",
                    atype: 1,
                    getEidExt: function(e) {
                        if (e.ext) return e.ext
                    }
                },
                parrableId: {
                    source: "parrable.com",
                    atype: 1,
                    getValue: function(e) {
                        return e.eid ? e.eid : e.ccpaOptout ? "" : null
                    },
                    getUidExt: function(e) {
                        var t = u.pick(e, ["ibaOptout", "ccpaOptout"]);
                        if (Object.keys(t).length) return t
                    }
                },
                idl_env: {
                    source: "liveramp.com",
                    atype: 1
                },
                lipb: {
                    getValue: function(e) {
                        return e.lipbid
                    },
                    source: "liveintent.com",
                    atype: 1,
                    getEidExt: function(e) {
                        if (Array.isArray(e.segments) && e.segments.length) return {
                            segments: e.segments
                        }
                    }
                },
                britepoolid: {
                    source: "britepool.com",
                    atype: 1
                },
                lotamePanoramaId: {
                    source: "crwdcntrl.net",
                    atype: 1
                },
                criteoId: {
                    source: "criteo.com",
                    atype: 1
                },
                merkleId: {
                    source: "merkleinc.com",
                    atype: 1
                },
                netId: {
                    source: "netid.de",
                    atype: 1
                },
                sharedid: {
                    source: "sharedid.org",
                    atype: 1,
                    getValue: function(e) {
                        return e.id
                    },
                    getUidExt: function(e) {
                        return e && e.third ? {
                            third: e.third
                        } : void 0
                    }
                },
                IDP: {
                    source: "zeotap.com",
                    atype: 1
                },
                haloId: {
                    source: "audigent.com",
                    atype: 1
                },
                quantcastId: {
                    source: "quantcast.com",
                    atype: 1
                },
                idx: {
                    source: "idx.lat",
                    atype: 1
                },
                vmuid: {
                    source: "verizonmedia.com",
                    atype: 1
                }
            }
    },
    838: function(e, t, n) {
        e.exports = n(839)
    },
    839: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "coreStorage", function() {
            return A
        }), n.d(t, "syncDelay", function() {
            return I
        }), n.d(t, "auctionDelay", function() {
            return O
        }), t.setSubmoduleRegistry = function(e) {
            V = e
        }, t.setStoredValue = T, t.setStoredConsentData = L, t.requestBidsHook = R, n.d(t, "validateGdprEnforcement", function() {
            return W
        }), t.attachIdSystem = Q, t.init = X;
        var o = n(10),
            r = n.n(o),
            a = n(3),
            i = n(8),
            c = n.n(i),
            l = n(0),
            u = n(21),
            d = n(9),
            s = n(5),
            f = n.n(s),
            g = n(13),
            p = n(32),
            m = n(7);

        function b(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return y(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, i = !0,
                c = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return i = e.done, e
                },
                e: function(e) {
                    c = !0, a = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (c) throw a
                    }
                }
            }
        }

        function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o
        }
        var v, h, I, O, S = "User ID",
            E = "cookie",
            D = "html5",
            j = 500,
            x = 0,
            k = {
                name: "_pbjs_userid_consent_data",
                expires: 30
            },
            A = Object(m.a)("userid"),
            _ = [],
            C = !1,
            U = [],
            w = [],
            V = [];

        function T(e, t) {
            var n = e.config.storage,
                o = "function" == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null;
            try {
                var r = l.isPlainObject(t) ? JSON.stringify(t) : t,
                    a = new Date(Date.now() + 864e5 * n.expires).toUTCString();
                n.type === E ? (A.setCookie(n.name, r, a, "Lax", o), "number" == typeof n.refreshInSeconds && A.setCookie("".concat(n.name, "_last"), (new Date).toUTCString(), a, "Lax", o)) : n.type === D && (A.setDataInLocalStorage("".concat(n.name, "_exp"), a), A.setDataInLocalStorage(n.name, encodeURIComponent(r)), "number" == typeof n.refreshInSeconds && A.setDataInLocalStorage("".concat(n.name, "_last"), (new Date).toUTCString()))
            } catch (e) {
                l.logError(e)
            }
        }

        function N(e, t) {
            var n, o, r = 1 < arguments.length && void 0 !== t ? t : void 0,
                a = r ? "".concat(e.name, "_").concat(r) : e.name;
            try {
                e.type === E ? n = A.getCookie(a) : e.type === D && ("" === (o = A.getDataFromLocalStorage("".concat(e.name, "_exp"))) ? n = A.getDataFromLocalStorage(a) : o && 0 < new Date(o).getTime() - Date.now() && (n = decodeURIComponent(A.getDataFromLocalStorage(a)))), "string" == typeof n && "{" === n.charAt(0) && (n = JSON.parse(n))
            } catch (e) {
                l.logError(e)
            }
            return n
        }

        function P(e) {
            var t = {
                consentString: "",
                gdprApplies: !1,
                apiVersion: 0
            };
            return e && (t.consentString = e.consentString, t.gdprApplies = e.gdprApplies, t.apiVersion = e.apiVersion), l.cyrb53Hash(JSON.stringify(t))
        }

        function L(e) {
            try {
                var t = new Date(Date.now() + 864e5 * k.expires).toUTCString();
                A.setCookie(k.name, P(e), t, "Lax")
            } catch (e) {
                l.logError(e)
            }
        }

        function F() {
            try {
                return A.getCookie(k.name)
            } catch (e) {
                l.logError(e)
            }
        }

        function q(e) {
            if (e && "boolean" == typeof e.gdprApplies && e.gdprApplies) {
                if (!e.consentString) return;
                if (1 === e.apiVersion && !1 === l.deepAccess(e, "vendorData.purposeConsents.1")) return;
                if (2 === e.apiVersion && !1 === l.deepAccess(e, "vendorData.purpose.consents.1")) return
            }
            return 1
        }

        function M(e, t) {
            var n = t ? l.delayExecution(t, e.length) : function() {};
            e.forEach(function(t) {
                t.callback(function(e) {
                    e ? (t.config.storage && T(t, e), t.idObj = t.submodule.decode(e, t.config)) : l.logInfo("".concat(S, ": ").concat(t.submodule.name, " - request id responded with an empty value")), n()
                }), t.callback = void 0
            }), clearTimeout(h)
        }

        function H(e) {
            return Array.isArray(e) && e.length ? e.filter(function(e) {
                return l.isPlainObject(e.idObj) && Object.keys(e.idObj).length
            }).reduce(function(t, n) {
                return Object.keys(n.idObj).forEach(function(e) {
                    t[e] = n.idObj[e]
                }), t
            }, {}) : {}
        }

        function J(e) {
            var t, n, o, r = !1;
            void 0 === v && (!(v = function(e, n) {
                var o = F();
                L(n);
                var t = W(e, n),
                    r = t.userIdModules;
                return t.hasValidated || q(n) ? r.reduce(function(e, t) {
                    return $(t, n, o, !1), e.push(t), e
                }, []) : (l.logWarn("".concat(S, " - gdpr permission not valid for local storage or cookies, exit module")), [])
            }(U, d.gdprDataHandler.getConsentData())).length || (t = v.filter(function(e) {
                return l.isFn(e.callback)
            })).length && (e && 0 < O ? (n = !(r = !0), o = function() {
                n || (n = !0, e())
            }, l.logInfo("".concat(S, " - auction delayed by ").concat(O, " at most to fetch ids")), h = setTimeout(o, O), M(t, o)) : c.a.on(f.a.EVENTS.AUCTION_END, function e() {
                c.a.off(f.a.EVENTS.AUCTION_END, e), 0 < I ? setTimeout(function() {
                    M(t)
                }, I) : M(t)
            }))), e && !r && e()
        }

        function R(r, a) {
            J(function() {
                var e, t, n, o;
                e = a.adUnits || Object(u.a)().adUnits, t = v, [e].some(function(e) {
                    return !Array.isArray(e) || !e.length
                }) || (n = H(t), o = Object(p.a)(n), Object.keys(n).length && e.forEach(function(e) {
                    e.bids && l.isArray(e.bids) && e.bids.forEach(function(e) {
                        e.userId = n, e.userIdAsEids = o
                    })
                })), r.call(this, a)
            })
        }

        function z() {
            return J(), H(v)
        }

        function B() {
            return J(), Object(p.a)(H(v))
        }

        function G(e, u) {
            var s = (s = e ? e.submoduleNames : null) || [];
            J(function() {
                var e = d.gdprDataHandler.getConsentData(),
                    t = F();
                L(e);
                var n = W(U, e),
                    o = n.userIdModules;
                if (n.hasValidated || q(e)) {
                    var r, a = [],
                        i = b(o);
                    try {
                        for (i.s(); !(r = i.n()).done;) {
                            var c = r.value;
                            0 < s.length && -1 === s.indexOf(c.submodule.name) || (l.logInfo("".concat(S, " - refreshing ").concat(c.submodule.name)), $(c, e, t, !0), l.isFn(c.callback) && a.push(c))
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    0 < a.length && M(a), u && u()
                } else l.logWarn("".concat(S, " - gdpr permission not valid for local storage or cookies, exit module"))
            })
        }
        var W = Object(g.b)("sync", function(e, t) {
            return {
                userIdModules: e,
                hasValidated: t && t.hasValidated
            }
        }, "validateGdprEnforcement");

        function $(e, t, n, o) {
            var r, a, i, c, u, s, d;
            e.config.storage ? (r = N(e.config.storage), c = !1, "number" == typeof e.config.storage.refreshInSeconds && (c = (i = new Date(N(e.config.storage, "last"))) && Date.now() - i.getTime() > 1e3 * e.config.storage.refreshInSeconds), !r || c || o || (d = t, null != (s = n) && s !== P(d)) ? a = e.submodule.getId(e.config, t, r) : "function" == typeof e.submodule.extendId && (a = e.submodule.extendId(e.config, r)), l.isPlainObject(a) && (a.id && (T(e, a.id), r = a.id), "function" == typeof a.callback && (e.callback = a.callback)), r && (e.idObj = e.submodule.decode(r, e.config))) : e.config.value ? e.idObj = e.config.value : (u = e.submodule.getId(e.config, t, void 0), l.isPlainObject(u) && ("function" == typeof u.callback && (e.callback = u.callback), u.id && (e.idObj = e.submodule.decode(u.id, e.config))))
        }

        function K() {
            var e, n, t, o = (e = w, n = _, Array.isArray(e) ? e.reduce(function(e, t) {
                return !t || l.isEmptyStr(t.name) || (!t.storage || l.isEmptyStr(t.storage.type) || l.isEmptyStr(t.storage.name) || -1 === n.indexOf(t.storage.type)) && !l.isPlainObject(t.value) && (t.storage || t.value) || e.push(t), e
            }, []) : []);
            o.length && (t = V.filter(function(t) {
                return !r()(U, function(e) {
                    return e.name === t.name
                })
            }), U = t.map(function(t) {
                var e = r()(o, function(e) {
                    return e.name === t.name
                });
                return e ? {
                    submodule: t,
                    config: e,
                    callback: void 0,
                    idObj: void 0
                } : null
            }).filter(function(e) {
                return null !== e
            }), !C && U.length && (Object(u.a)().requestBids.before(R, 40), l.logInfo("".concat(S, " - usersync config updated for ").concat(U.length, " submodules")), C = !0))
        }

        function Q(t) {
            r()(V, function(e) {
                return e.name === t.name
            }) || (V.push(t), K())
        }

        function X(e) {
            U = [], C = !(w = []), v = void 0, -1 === (_ = [A.localStorageIsEnabled() ? D : null, A.cookiesAreEnabled() ? E : null].filter(function(e) {
                return null !== e
            })).indexOf(E) || !A.getCookie("_pbjs_id_optout") && !A.getCookie("_pubcid_optout") ? -1 === _.indexOf(D) || !A.getDataFromLocalStorage("_pbjs_id_optout") && !A.getDataFromLocalStorage("_pubcid_optout") ? (e.getConfig(function(e) {
                var t = e.userSync;
                t && t.userIds && (w = t.userIds, I = l.isNumber(t.syncDelay) ? t.syncDelay : j, O = l.isNumber(t.auctionDelay) ? t.auctionDelay : x, K())
            }), Object(u.a)().getUserIds = z, Object(u.a)().getUserIdsAsEids = B, Object(u.a)().refreshUserIds = G) : l.logInfo("".concat(S, " - opt-out localStorage found, exit module")) : l.logInfo("".concat(S, " - opt-out cookie found, exit module"))
        }
        X(a.b), Object(g.c)("userId", Q)
    }
}, [838]);
pbjs.processQueue();