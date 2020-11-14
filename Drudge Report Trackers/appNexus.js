/* Generated from hbw: 1.83.0 */
var pbjs = window.pbjs || {};
pbjs.que = pbjs.que || [];
var googletag = window.googletag || {};
googletag.cmd = googletag.cmd || [];
var PREBID_TIMEOUT = 1500,
    REQUEST_BIDS_ON_PAGE_LOAD = !1,
    SHOW_ADS_ON_PAGE_LOAD = {};
SHOW_ADS_ON_PAGE_LOAD.INITIALIZE_TARGETING_DATA = !0, SHOW_ADS_ON_PAGE_LOAD.ALLOW = !0;
var IS_PREBID_LEGACY = !1;
! function() {
    function e(e) {
        var d = !1;
        return Array.isArray(e.on_page_var) && e.on_page_var.length > 0 && e.on_page_var.forEach(function(e) {
            var a = e.name.split(".");
            e.value.forEach(function(i) {
                for (var r = window, s = 0; s <= a.length; s++) r[a[s]] && (r[a[s]] === i && (t("var", e.name, i), d = !0), r = r[a[s]])
            })
        }), d
    }

    function d(e) {
        return window.googletag.pubads().getSlots().filter(function(d) {
            return m(e, d.getAdUnitPath()) || m(e, d.getSlotElementId())
        })
    }

    function a(e, a) {
        function i() {
            var i = pbjs.adUnits.filter(function(d) {
                return e.some(function(e) {
                    return d.code === e
                })
            });
            i.filter(c).forEach(function(e) {
                u(e)
            });
            var r = i.filter(function(e) {
                return !c(e)
            }).map(b);
            r.length > 0 && googletag.cmd.push(function() {
                pbjs.setTargetingForGPTAsync(r)
            });
            var s = e.filter(function(e) {
                    return !m(i.map(b), e)
                }),
                t = r.concat(s);
            t.length > 0 && googletag.cmd.push(function() {
                window.googletag.pubads().refresh(d(t), a)
            })
        }
        pbjs.initAdserverSet = !0, pbjs.requestBids({
            adUnitCodes: e,
            bidsBackHandler: i
        })
    }

    function i(e, d) {
        var a = [],
            i = x,
            r = {};
        if (e.length > 0) {
            for (var s = 0; s < e.length; s++) r[e[s].targetAdUnitCode] = e[s].newAdUnitCode, a.push(e[s].newAdUnitCode);
            for (var s = 0; s < i.length; s++) val = r[i[s].code], "undefined" != typeof val && (pbjs.removeAdUnit(i[s].code), i[s].code = r[i[s].code]);
            pbjs.addAdUnits(i)
        }
        pbjs.refreshAds(a, d)
    }

    function r() {
        if (!pbjs.initAdserverSet) {
            if (!SHOW_ADS_ON_PAGE_LOAD.ALLOW) return SHOW_ADS_ON_PAGE_LOAD.INITIALIZE_TARGETING_DATA && s(), void(pbjs.initAdserverSet = !0);
            if (!googletag.pubadsReady && _ <= v) return setTimeout(r, 75), void _++;
            I(x), s(), googletag.cmd.push(function() {
                googletag.pubads().refresh()
            }), pbjs.initAdserverSet = !0
        }
    }

    function s() {
        googletag.cmd.push(function() {
            pbjs.que.push(function() {
                pbjs.setTargetingForGPTAsync()
            })
        })
    }

    function t(e, d, a) {
        o("url" === e ? 'configuration matched for type: "url" Matched key: ' + d : 'configuration matched for type: "var" Matched var name: ' + d + " matched value: " + a)
    }

    function p() {
        var e = "";
        try {
            e = window.location.host + window.location.pathname
        } catch (e) {
            o(e)
        }
        return e
    }

    function n(e) {
        for (var d = e.split("/"), a = [], i = 0; i < d.length; i++) {
            for (var r = "", s = 0; s < d.length - i; s++) r += "/" + d[s];
            r = r.substr(1, r.length), a.push(r), a.push(r + "/")
        }
        return a
    }

    function o() {
        g.push(arguments), z && window.console.log.apply(null, arguments)
    }

    function m(e, d) {
        return -1 !== e.indexOf(d)
    }

    function b(e) {
        return e.code
    }

    function c(e, d) {
        var a = d || "instream";
        return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === a
    }

    function l(e) {
        var d = !1;
        return e.forEach(function(e) {
            e && e.mediaTypes && e.mediaTypes.video && "outstream" !== e.mediaTypes.video.context && (d = !0)
        }), d
    }

    function I(e) {
        e && e.forEach && e.forEach(function(e) {
            if (e.mediaTypes && e.mediaTypes.video && "outstream" !== e.mediaTypes.video.context && u(e), e.mediaTypes && e.mediaTypes.video && "outstream" === e.mediaTypes.video.context) {
                var d = pbjs.getAdserverTargetingForAdUnitCode(e.code);
                pbjs.renderAd(document, d.hb_adid)
            }
        })
    }

    function u(e) {
        var d = {
                adUnit: {
                    code: e.code,
                    sizes: e.sizes
                },
                params: {
                    iu: e.mediaTypes.video.code || e.code
                }
            },
            a = e.mediaTypes.video.url;
        a && (d.url = a);
        var i = pbjs.adServers.dfp.buildVideoUrl(d);
        if (e.mediaTypes.video.callback) {
            new Function(["videoUrl"], "(" + e.mediaTypes.video.callback + ")(videoUrl)")(i)
        }
    }
    var x, g = [],
        z = function() {
            return -1 !== window.location.search.toLowerCase().indexOf("pbjs_debug=true")
        }(),
        _ = 0,
        v = 40,
        h = [{
            url: ["apnews-int.appspot.com", "apnews.com/"],
            adUnits: [{
                labelAny: ["desktop2"],
                code: "div-gpt-ad_site_article_rectangle1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030364
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053729
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1682836,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500344",
                        size: [300, 600]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500344",
                        size: [300, 250]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243425
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728191
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728193
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212931,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_article_rectangle1"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop5"],
                code: "div-gpt-ad_site_article_rectangle2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030371
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053730
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1682834,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500345",
                        size: [300, 250]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243426
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728195
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212932,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_article_rectangle2"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop1", "tablet3", "phone1"],
                code: "div-gpt-ad_site_article_leaderboard",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030372
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053731
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1682832,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500346",
                        size: [320, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500346",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500346",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500346",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500346",
                        size: [970, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500346",
                        size: [970, 250]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243427
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728196
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728198
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728200
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728202
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728203
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212935,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212960,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_article_leaderboard"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [320, 50],
                            [728, 90],
                            [300, 50],
                            [728, 250],
                            [970, 90],
                            [970, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_article_midarticle1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030373
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053733
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1682830,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500347",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500347",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500347",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500347",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500347",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500347",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243428
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728205
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728207
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728209
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728362
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212930,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212962,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_article_midarticle1"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_article_midarticle2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030374
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053735
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1682824,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500348",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500348",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500348",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500348",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500348",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500348",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243429
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728364
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728393
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728416
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728417
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212928,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212963,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_article_midarticle2"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_article_midarticle3",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030375
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053737
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681246,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500349",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500349",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500349",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500349",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500349",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500349",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243430
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728418
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728419
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728420
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728421
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212937,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212964,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_article_midarticle3"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_article_midarticle4",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030376
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053739
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681248,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500350",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500350",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500350",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500350",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500350",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500350",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243431
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728422
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728423
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728424
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728425
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212936,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212961,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_article_midarticle4"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_article_midarticle5",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030377
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053742
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681252,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500351",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500351",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500351",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500351",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500351",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500351",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243432
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728426
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728427
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728428
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728430
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212933,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212959,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_article_midarticle5"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_article_belowarticle",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030378
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053745
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681254,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500352",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500352",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500352",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500352",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500352",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500352",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243433
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728431
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728432
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728433
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728434
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212934,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212967,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_article_belowarticle"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_home_infeed1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030379
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053747
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681256,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500353",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500353",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500353",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500353",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500353",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500353",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243434
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728435
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728436
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728437
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728438
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212929,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212958,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_home_infeed1"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_home_infeed2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030380
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053732
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681258,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500354",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500354",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500354",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500354",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500354",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500354",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243435
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728439
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728440
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728441
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728443
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212944,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212965,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_home_infeed2"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_home_infeed3",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030381
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053734
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681264,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500355",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500355",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500355",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500355",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500355",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500355",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243436
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728444
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728445
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728446
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728447
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212948,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212966,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_home_infeed3"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_home_infeed4",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030382
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053736
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681286,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500356",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500356",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500356",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500356",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500356",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500356",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243437
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728448
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728449
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728450
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728451
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212946,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212969,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_home_infeed4"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_home_infeed5",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030383
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053740
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681288,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500357",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500357",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500357",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500357",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500357",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500357",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243438
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728452
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728453
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728454
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728456
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212947,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212968,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_home_infeed5"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop1", "tablet3", "phone1"],
                code: "div-gpt-ad_site_home_leaderboard",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030384
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053743
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681292,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500358",
                        size: [320, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500358",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500358",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500358",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500358",
                        size: [970, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500358",
                        size: [970, 250]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243439
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728457
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728461
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728462
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728463
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728464
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212942,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212972,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_home_leaderboard"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [320, 50],
                            [728, 90],
                            [300, 50],
                            [728, 250],
                            [970, 90],
                            [970, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop2"],
                code: "div-gpt-ad_site_home_rectangle1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030385
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053746
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681342,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500359",
                        size: [300, 600]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500359",
                        size: [300, 250]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243440
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728465
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728466
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212945,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_home_rectangle1"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_hub_infeed1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030397
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053748
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681350,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500360",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500360",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500360",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500360",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500360",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500360",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243441
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728467
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728468
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728469
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728470
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212950,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212973,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_hub_infeed1"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_hub_infeed2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030398
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053749
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681352,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500361",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500361",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500361",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500361",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500361",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500361",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243442
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728471
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728472
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728473
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728474
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212943,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212975,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_hub_infeed2"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_hub_infeed3",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030399
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053750
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681394,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500362",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500362",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500362",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500362",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500362",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500362",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243443
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728475
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728476
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728477
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728478
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212949,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212971,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_hub_infeed3"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_hub_infeed4",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030400
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053751
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681400,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500363",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500363",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500363",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500363",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500363",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500363",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243444
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728479
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728480
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728481
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728482
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212941,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212970,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_hub_infeed4"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop3", "desktop4", "tablet1", "tablet3", "phone2"],
                code: "div-gpt-ad_site_hub_infeed5",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030401
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053738
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681402,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500364",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500364",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500364",
                        size: [300, 100]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500364",
                        size: [300, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500364",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500364",
                        size: [320, 50]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19243445
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728483
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728484
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728485
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728486
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212952,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212976,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_hub_infeed5"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [300, 50],
                            [300, 100],
                            [300, 250],
                            [728, 250],
                            [320, 50]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop1", "tablet3", "phone1"],
                code: "div-gpt-ad_site_hub_leaderboard",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030402
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053741
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681406,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500365",
                        size: [320, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500365",
                        size: [728, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500365",
                        size: [300, 50]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500365",
                        size: [728, 250]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500365",
                        size: [970, 90]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500365",
                        size: [970, 250]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19269603
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728487
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728488
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728489
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728490
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728491
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212953,
                        network: "10430.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212974,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_hub_leaderboard"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [320, 50],
                            [728, 90],
                            [300, 50],
                            [728, 250],
                            [970, 90],
                            [970, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop2"],
                code: "div-gpt-ad_site_hub_rectangle1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 19030403
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 8233
                    }
                }, {
                    bidder: "openx",
                    params: {
                        delDomain: "associatedpress-d.openx.net",
                        unit: 541053744
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 1681410,
                        siteId: 113838,
                        accountId: 8607
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500366",
                        size: [300, 600]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "500366",
                        size: [300, 250]
                    }
                }, {
                    bidder: "districtm",
                    params: {
                        placementId: 19269625
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728492
                    }
                }, {
                    bidder: "sovrn",
                    params: {
                        tagid: 728493
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 5212951,
                        network: "10430.1"
                    }
                }, {
                    bidder: "onemobile",
                    params: {
                        dcn: "8a9694d4017373968c70a018c7830793",
                        pos: "site_hub_rectangle1"
                    }
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }]
        }];
    if (o("Running HBW: 1.83.0 and prebid.js: 4.5.0"), h.forEach(function(d) {
            if (d.on_page_var) try {
                e(d) && (x = d.adUnits)
            } catch (e) {}
        }), x || (x = function(e) {
            if (e) {
                var d, a = p(),
                    i = n(a);
                return i.some(function(a) {
                    return e.some(function(e) {
                        if (e && e.url) return e.url.forEach(function(i) {
                            i === a && (d = e.adUnits, t("url", a))
                        }), !!d
                    })
                }), d
            }
        }(h)), !x) return o("Error: No valid configuration found for site"), void r();
    pbjs.refreshAds = a, pbjs.infiniteScroll = i, pbjs.que.push(function() {
        if (pbjs.setConfig({
                useBidCache: !1
            }), pbjs.setConfig({
                sizeConfig: [{
                    mediaQuery: "(min-width: 1024px)",
                    labels: ["desktop1"],
                    sizesSupported: [
                        [728, 90],
                        [728, 250],
                        [970, 90],
                        [970, 250]
                    ]
                }, {
                    mediaQuery: "(min-width: 1024px)",
                    labels: ["desktop2"],
                    sizesSupported: [
                        [300, 250],
                        [300, 600]
                    ]
                }, {
                    mediaQuery: "(min-width: 1024px) and (max-width: 1259px)",
                    labels: ["desktop3"],
                    sizesSupported: [
                        [300, 250]
                    ]
                }, {
                    mediaQuery: "(min-width: 1260px)",
                    labels: ["desktop4"],
                    sizesSupported: [
                        [728, 90],
                        [728, 250]
                    ]
                }, {
                    mediaQuery: "(min-width: 1024px)",
                    labels: ["desktop5"],
                    sizesSupported: [
                        [300, 250]
                    ]
                }, {
                    mediaQuery: "(min-width: 0px) and (max-width: 439px)",
                    labels: ["phone2"],
                    sizesSupported: [
                        [300, 250],
                        [320, 50],
                        [300, 50],
                        [300, 100]
                    ]
                }, {
                    mediaQuery: "(min-width: 0px) and (max-width: 439px)",
                    labels: ["phone1"],
                    sizesSupported: [
                        [320, 50],
                        [300, 50]
                    ]
                }, {
                    mediaQuery: "(min-width: 768px) and (max-width: 1023px)",
                    labels: ["tablet3"],
                    sizesSupported: [
                        [728, 90],
                        [728, 250]
                    ]
                }, {
                    mediaQuery: "(min-width: 440px) and (max-width: 767px)",
                    labels: ["tablet2"],
                    sizesSupported: [
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                }, {
                    mediaQuery: "(min-width: 440px) and (max-width: 767px)",
                    labels: ["tablet1"],
                    sizesSupported: [
                        [300, 250],
                        [300, 100]
                    ]
                }]
            }), pbjs.setConfig({
                priceGranularity: {
                    buckets: [{
                        max: 3,
                        cap: "False",
                        increment: .01,
                        min: 0
                    }, {
                        max: 8,
                        cap: "False",
                        increment: .05,
                        min: 3
                    }, {
                        max: 20,
                        cap: "False",
                        increment: .5,
                        min: 8
                    }, {
                        max: 50,
                        cap: "True",
                        increment: 1,
                        min: 20
                    }],
                    precision: "2"
                }
            }), pbjs.aliasBidder("aol", "onemobile"), pbjs.aliasBidder("appnexus", "districtm"), l(x)) {
            var e = {
                cache: {
                    url: "https://prebid.adnxs.com/pbc/v1/cache"
                }
            };
            IS_PREBID_LEGACY && (e.usePrebidCache = !0), pbjs.setConfig(e)
        }
        pbjs.addAdUnits(x), REQUEST_BIDS_ON_PAGE_LOAD && pbjs.requestBids({
            bidsBackHandler: function(e) {
                r()
            }
        })
    }), pbjs.debugReplayLogs = function() {
        for (var e = 0; e < g.length; e++) window.console.log.apply(null, g[e])
    }, (!0 === REQUEST_BIDS_ON_PAGE_LOAD || !0 === SHOW_ADS_ON_PAGE_LOAD.ALLOW && !1 === REQUEST_BIDS_ON_PAGE_LOAD) && setTimeout(r, PREBID_TIMEOUT)
}();
/* prebid.js v4.5.0
Updated : 2020-09-09 */
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
            332: 0
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
    }, f(f.s = 846)
}({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function() {
            return R
        }), n.d(t, "bind", function() {
            return D
        }), t.getUniqueIdentifierStr = P, t.generateUUID = function e(t) {
            return t ? (t ^ q() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
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
            return t && 0 < Object.getOwnPropertyNames(t).length ? le(t).map(function(e) {
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
                    for (var i in n) ie(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === h(e)) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(M(e));
                    else
                        for (var a = 0; a < o; a++) t.push(M(e[a]))
            }
            return t
        }, t.parseGPTSingleSizeArray = M, t.parseGPTSingleSizeArrayToRtbSize = function(e) {
            if (G(e)) return {
                w: e[0],
                h: e[1]
            }
        }, t.getWindowTop = W, t.getWindowSelf = L, t.getWindowLocation = F, t.logMessage = z, t.logInfo = V, t.logWarn = H, t.logError = K, t.hasConsoleLogger = function() {
            return _
        }, t.debugTurnedOn = Y, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = P(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, t.getParameterByName = function(e) {
            return Te(F().search)[e] || ""
        }, t.isA = Q, t.isFn = $, t.isStr = X, t.isArray = Z, t.isNumber = ee, t.isPlainObject = te, t.isBoolean = function(e) {
            return Q(e, C)
        }, t.isEmpty = ne, t.isEmptyStr = function(e) {
            return X(e) && (!e || 0 === e.length)
        }, t._each = re, t.contains = function(e, t) {
            if (ne(e)) return !1;
            if ($(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--;)
                if (e[n] === t) return !0;
            return !1
        }, t._map = function(n, r) {
            if (ne(n)) return [];
            if ($(n.map)) return n.map(r);
            var i = [];
            return re(n, function(e, t) {
                i.push(r(e, t, n))
            }), i
        }, t.hasOwn = ie, t.insertElement = oe, t.triggerPixel = ae, t.callBurl = function(e) {
            var t = e.source,
                n = e.burl;
            t === S.S2S.SRC && n && R.triggerPixel(n)
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = P(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", R.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
        }, t.insertUserSyncIframe = ce, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = encodeURI(e),
                n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        }, t.createTrackPixelIframeHtml = ue, t.getValueString = se, t.uniques = de, t.flatten = fe, t.getBidRequest = function(n, e) {
            return n ? (e.some(function(e) {
                var t = c()(e.bids, function(t) {
                    return ["bidId", "adId", "bid_id"].some(function(e) {
                        return t[e] === n
                    })
                });
                return t && (r = t), t
            }), r) : void 0;
            var r
        }, t.getKeys = le, t.getValue = pe, t.getKeyByValue = function(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] === t) return n
        }, t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder
                }).reduce(fe, [])
            }).reduce(fe).filter(de)
        }, t.isGptPubadsDefined = ge, n.d(t, "getHighestCpm", function() {
            return be
        }), n.d(t, "getOldestHighestCpmBid", function() {
            return ve
        }), n.d(t, "getLatestHighestCpmBid", function() {
            return ye
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
        }, t.deepClone = me, t.inIframe = function() {
            try {
                return R.getWindowSelf() !== R.getWindowTop()
            } catch (e) {
                return !0
            }
        }, t.isSafariBrowser = function() {
            return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
        }, t.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, t.timestamp = function() {
            return (new Date).getTime()
        }, t.hasDeviceAccess = function() {
            return !1 !== r.b.getConfig("deviceAccess")
        }, t.checkCookieSupport = Se, t.delayExecution = function(e, t) {
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
            }).reduce(fe, []).filter(function(e) {
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
                return Ae(t, e)
            }
        }, t.isSlotMatchingAdUnitCode = Ee, t.getGptSlotInfoForAdUnitCode = function(e) {
            var t;
            ge() && (t = c()(window.googletag.pubads().getSlots(), Ee(e)));
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
        }, t.isInteger = Oe, t.convertCamelToUnderscore = function(e) {
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
            return re(e, function(e, t) {
                if (Z(e)) {
                    var n = [];
                    re(e, function(e) {
                        !(e = se(r + "." + t, e)) && "" !== e || n.push(e)
                    }), e = n
                } else {
                    if (!X(e = se(r + "." + t, e))) return;
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
                i[e] && ($(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), isNaN(i[e]) && delete i.key)
            }), i
        }, t.isArrayOfNums = function(e, t) {
            return Z(e) && (!t || e.length === t) && e.every(Oe)
        }, t.fill = function(e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = te(e) ? me(e) : e;
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
        }, t.parseQS = Te, t.formatQS = Ie, t.parseUrl = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : R.parseQS(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.buildUrl = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(R.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }, t.deepEqual = Ce, t.mergeDeep = je, t.cyrb53Hash = function(e) {
            for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = function(e, t) {
                    if ($(Math.imul)) return Math.imul(e, t);
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
            x = Boolean(w && window.console.warn),
            U = Boolean(w && window.console.error),
            R = {
                checkCookieSupport: Se,
                createTrackPixelIframeHtml: ue,
                getWindowSelf: L,
                getWindowTop: W,
                getWindowLocation: F,
                insertUserSyncIframe: ce,
                insertElement: oe,
                isFn: $,
                triggerPixel: ae,
                logError: K,
                logWarn: H,
                logMessage: z,
                logInfo: V,
                parseQS: Te,
                formatQS: Ie,
                deepEqual: Ce
            },
            k = {},
            D = function(e, t) {
                return t
            }.bind(null, 1, k)() === k ? Function.prototype.bind : function(e) {
                var t = this,
                    n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
                }
            },
            N = (m = 0, function() {
                return ++m
            });

        function P() {
            return N() + Math.random().toString(16).substr(2)
        }

        function q() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }

        function M(e) {
            if (G(e)) return e[0] + "x" + e[1]
        }

        function G(e) {
            return Z(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
        }

        function W() {
            return window.top
        }

        function L() {
            return window.self
        }

        function F() {
            return window.location
        }

        function z() {
            Y() && _ && console.log.apply(console, J(arguments, "MESSAGE:"))
        }

        function V() {
            Y() && B && console.info.apply(console, J(arguments, "INFO:"))
        }

        function H() {
            Y() && x && console.warn.apply(console, J(arguments, "WARNING:"))
        }

        function K() {
            Y() && U && console.error.apply(console, J(arguments, "ERROR:"))
        }

        function J(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }

        function Y() {
            return !!r.b.getConfig("debug")
        }

        function Q(e, t) {
            return j.call(e) === "[object " + t + "]"
        }

        function $(e) {
            return Q(e, O)
        }

        function X(e) {
            return Q(e, E)
        }

        function Z(e) {
            return Q(e, A)
        }

        function ee(e) {
            return Q(e, T)
        }

        function te(e) {
            return Q(e, I)
        }

        function ne(e) {
            if (!e) return !0;
            if (Z(e) || X(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }

        function re(e, t) {
            if (!ne(e)) {
                if ($(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }

        function ie(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        }

        function oe(e, t, n, r) {
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

        function ae(e, t) {
            var n = new Image;
            t && R.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e
        }

        function ce(e, t) {
            var n = R.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && R.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), R.insertElement(i, document, "html", !0)
        }

        function ue(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(P(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
        }

        function se(e, t, n) {
            return null == t ? n : X(t) ? t : ee(t) ? t.toString() : void R.logWarn("Unsuported type for param: " + e + " required type: String")
        }

        function de(e, t, n) {
            return n.indexOf(e) === t
        }

        function fe(e, t) {
            return e.concat(t)
        }

        function le(e) {
            return Object.keys(e)
        }

        function pe(e, t) {
            return e[t]
        }

        function ge() {
            if (window.googletag && $(window.googletag.pubads) && $(window.googletag.pubads().getSlots)) return !0
        }
        var be = he("timeToRespond", function(e, t) {
                return t < e
            }),
            ve = he("responseTimestamp", function(e, t) {
                return t < e
            }),
            ye = he("responseTimestamp", function(e, t) {
                return e < t
            });

        function he(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }

        function me(e) {
            return o()(e)
        }

        function Se() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }
        var Ae = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };

        function Ee(t) {
            return function(e) {
                return Ae(e, t)
            }
        }

        function Oe(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }

        function Te(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                var n = l(t.split("="), 2),
                    r = n[0],
                    i = n[1];
                return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", e
            }, {}) : {}
        }

        function Ie(e) {
            return Object.keys(e).map(function(t) {
                return Array.isArray(e[t]) ? e[t].map(function(e) {
                    return "".concat(t, "[]=").concat(e)
                }).join("&") : "".concat(t, "=").concat(e[t])
            }).join("&")
        }

        function Ce(e, t) {
            if (e === t) return !0;
            if ("object" !== h(e) || null === e || "object" !== h(t) || null === t) return !1;
            if (Object.keys(e).length !== Object.keys(t).length) return !1;
            for (var n in e) {
                if (!t.hasOwnProperty(n)) return !1;
                if (!Ce(e[n], t[n])) return !1
            }
            return !0
        }

        function je(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            if (!n.length) return e;
            var i = n.shift();
            if (te(e) && te(i))
                for (var o in i) te(i[o]) ? (e[o] || y(e, v({}, o, {})), je(e[o], i[o])) : Z(i[o]) && e[o] ? Z(e[o]) && (e[o] = e[o].concat(i[o])) : y(e, v({}, o, i[o]));
            return je.apply(void 0, [e].concat(n))
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
        }, t.isValid = x;
        var r = n(90),
            c = n(7),
            u = n(3),
            v = n(32),
            s = n(44),
            o = n(36),
            a = n(33),
            i = n(5),
            y = n.n(i),
            d = n(9),
            h = n.n(d),
            f = n(12),
            l = n.n(f),
            p = n(4),
            m = n(0),
            g = n(2),
            b = n(13),
            S = n(8);

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
                                i ? (e.originalCpm = e.cpm, e.originalCurrency = e.currency, e.meta = e.meta || T({}, e[i.bidder]), t = T(Object(v.a)(y.a.STATUS.GOOD, i), e), n = i.adUnitCode, r = t, u[n] = !0, x(n, r, [o]) && a(n, r)) : Object(m.logWarn)("Bidder ".concat(p.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
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

        function x(e, t, n) {
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
        var i = n(29),
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
        var r = n(24),
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
        var r = n(23),
            i = n(30);
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
        var r = n(43);
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
                t = c, e = pbjs.adUnits, (n = d()(e, function(e) {
                    return e.code === t
                })) && n.renderer && n.renderer.url && n.renderer.render ? s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c)) : Object(u.a)(r, f, this.callback), this._render ? this._render.apply(this, arguments) : s.logWarn("No render function was provided, please use .setRender on the renderer")
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
            l = n(23),
            p = n(78),
            g = n(29),
            b = n(30),
            v = n(17),
            y = n(81),
            h = n(24),
            m = n(64),
            S = n(31).f,
            A = n(56).forEach,
            E = n(28),
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
        var r = n(29);
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
        var r = n(23),
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
        var s = n(31).f,
            d = n(82),
            f = n(120),
            l = n(21),
            p = n(81),
            g = n(17),
            a = n(66),
            c = n(125),
            b = n(28),
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
        var r = n(28),
            a = n(31),
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
        var a = n(25),
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
        var r = n(26);
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
        var r = n(29);
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
        var r = n(24);
        e.exports = function(e) {
            if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
        }
    },
    125: function(e, t, n) {
        "use strict";
        var r = n(26),
            i = n(31),
            o = n(19),
            a = n(28),
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
            i = n(23),
            o = n(62),
            a = n(30),
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
                        if (!e) return;
                        if ("string" == typeof e) return o(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
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
            d = n(21),
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
            a = n(21),
            c = n(35),
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
        var h = n(23),
            m = n(98).f,
            S = n(100),
            A = n(43),
            E = n(21),
            O = n(30),
            T = n(25);
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
            o = n(26),
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
            c = n(26),
            u = n(15),
            s = n(18),
            d = n(21),
            f = n(39),
            l = n(35),
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
            a = n(21),
            c = n(35),
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
            o = n(26),
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
            o = n(26),
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
            a = n(35),
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
            c = n(26),
            u = n(15),
            s = n(18),
            d = n(21),
            f = n(39),
            l = n(35),
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
            u = n(35),
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
        var r = n(24);
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
            a = n(21),
            c = n(35),
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
            o = n(26),
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
            o = n(26),
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
        var r = n(43);
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
        var v = n(21),
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
            o = n(31),
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
            y = n(21),
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
        var r = n(23),
            i = n(73),
            o = n(25),
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
        t.a = function() {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs")
    },
    21: function(e, t, n) {
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
    215: function(e, t, n) {
        n(216);
        var r = n(52);
        e.exports = r("Array", "findIndex")
    },
    216: function(e, t, n) {
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
    22: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var a, r = (a = window, function() {
            try {
                var e, t = c(),
                    n = t.length - 1,
                    r = null !== t[n].location || 0 < n && null !== t[n - 1].referrer,
                    i = function(e) {
                        for (var t, n = [], r = null, i = null, o = null, a = null, c = null, u = e.length - 1; 0 <= u; u--) {
                            try {
                                i = e[u].location
                            } catch (e) {}
                            if (i) n.push(i), c = c || i;
                            else if (0 !== u) {
                                t = e[u - 1];
                                try {
                                    o = t.referrer, a = t.ancestor
                                } catch (e) {}
                                o ? (n.push(o), c = c || o) : a ? (n.push(a), c = c || a) : n.push(r)
                            } else n.push(r)
                        }
                        return {
                            stack: n,
                            detectedRefererUrl: c
                        }
                    }(t);
                return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                    referer: i.detectedRefererUrl,
                    reachedTop: r,
                    numIframes: n,
                    stack: i.stack,
                    canonicalUrl: e
                }
            } catch (e) {}
        });

        function c() {
            var e = function() {
                    var t, n = [];
                    do {
                        try {
                            t = t ? t.parent : a;
                            try {
                                var e = t == a.top,
                                    r = {
                                        referrer: t.document.referrer || null,
                                        location: t.location.href || null,
                                        isTop: e
                                    };
                                e && (r = o(r, {
                                    canonicalUrl: function(e) {
                                        try {
                                            var t = e.querySelector("link[rel='canonical']");
                                            if (null !== t) return t.href
                                        } catch (e) {}
                                        return null
                                    }(t.document)
                                })), n.push(r)
                            } catch (e) {
                                n.push({
                                    referrer: null,
                                    location: null,
                                    isTop: t == a.top
                                }), Object(i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                            }
                        } catch (e) {
                            return n.push({
                                referrer: null,
                                location: null,
                                isTop: !1
                            }), n
                        }
                    } while (t != a.top);
                    return n
                }(),
                t = function() {
                    try {
                        if (!a.location.ancestorOrigins) return;
                        return a.location.ancestorOrigins
                    } catch (e) {}
                }();
            if (t)
                for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
            return e
        }
    },
    223: function(e, t, n) {
        "use strict";
        t.a = function() {
            window.addEventListener("message", c, !1)
        };
        var r = n(9),
            g = n.n(r),
            b = n(36),
            i = n(5),
            v = (n.n(i), n(0)),
            y = n(27),
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
    224: function(e, t, n) {
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
    23: function(n, e, t) {
        (function(e) {
            function t(e) {
                return e && e.Math == Math && e
            }
            n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || Function("return this")()
        }).call(e, t(34))
    },
    24: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    25: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    26: function(e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : void 0
        }
        var i = n(43),
            o = n(23);
        e.exports = function(e, t) {
            return arguments.length < 2 ? r(i[e]) || r(o[e]) : i[e] && i[e][t] || o[e] && o[e][t]
        }
    },
    27: function(e, t, n) {
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
    28: function(e, t, n) {
        var r = n(29);
        e.exports = !r(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })
    },
    29: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
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
                    "string" != typeof e && (n = e, e = "*");
                    if ("function" != typeof n) return void p.logError("listener must be a function");
                    var r = {
                        topic: e,
                        callback: n
                    };
                    return T.push(r),
                        function() {
                            T.splice(T.indexOf(r), 1)
                        }
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
    30: function(e, t, n) {
        var r = n(28),
            i = n(31),
            o = n(46);
        e.exports = r ? function(e, t, n) {
            return i.f(e, t, o(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    31: function(e, t, n) {
        var r = n(28),
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
    32: function(e, t, n) {
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
    33: function(e, t, n) {
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
        n(7);
        var o = n(0),
            i = n(3),
            r = n(12),
            a = (n.n(r), n(13)),
            c = "outstream",
            u = "instream";
        var s = Object(a.b)("sync", function(e, t, n, r) {
            return !t || n && r !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !(!e.renderer && !t.renderer)
        }, "checkVideoBidSetup")
    },
    34: function(e, t) {
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
    345: function(e, t, n) {
        var r = n(346);
        e.exports = r
    },
    346: function(e, t, n) {
        n(347);
        var r = n(52);
        e.exports = r("String", "includes")
    },
    347: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(348),
            o = n(49);
        r({
            target: "String",
            proto: !0,
            forced: !n(350)("includes")
        }, {
            includes: function(e, t) {
                return !!~String(o(this)).indexOf(i(e), 1 < arguments.length ? t : void 0)
            }
        })
    },
    348: function(e, t, n) {
        var r = n(349);
        e.exports = function(e) {
            if (r(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        }
    },
    349: function(e, t, n) {
        var r = n(24),
            i = n(48),
            o = n(19)("match");
        e.exports = function(e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
        }
    },
    35: function(e, t, n) {
        var r = n(16),
            i = n(88);
        e.exports = r ? i : function(e) {
            return Set.prototype.values.call(e)
        }
    },
    350: function(e, t, n) {
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
    36: function(e, t, n) {
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
            return W
        }), n.d(t, "a", function() {
            return L
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
                p = u || N.generateUUID(),
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
                e && clearTimeout(v), void 0 === i && (r = [], n && (N.logMessage("Auction ".concat(p, " timedOut")), t = A, (r = h.map(function(e) {
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
                })).length && q.emit(M.EVENTS.BID_TIMEOUT, r)), b = L, i = Date.now(), q.emit(M.EVENTS.AUCTION_END, E()), Y(y, function() {
                    try {
                        var e;
                        null != g && (e = f.filter(N.bind.call(j.adUnitsFilter, this, d)).reduce(Z, {}), g.apply(pbjs, [e, n, p]), g = null)
                    } catch (e) {
                        N.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        r.length && P.callTimedOutBidders(o, r, m);
                        var t = B.b.getConfig("userSync") || {};
                        t.enableOverride || D(t.syncDelay)
                    }
                }))
            }

            function T() {
                N.logInfo("Bids Received for Auction with id: ".concat(p), f), b = L, O(!1, !0)
            }

            function I(e) {
                A.add(e)
            }

            function C(d) {
                var f = this;
                d.forEach(function(e) {
                    var t;
                    t = e, h = h.concat(t)
                });
                var l = {},
                    e = {
                        bidRequests: d,
                        run: function() {
                            var e, t;
                            e = O.bind(null, !0), t = setTimeout(e, m), v = t, b = W, q.emit(M.EVENTS.AUCTION_INIT, E());
                            var n, r, i, o, a, c, u = (n = T, r = f, i = 0, o = !1, a = new Set, c = {}, {
                                addBidResponse: function(e, t) {
                                    c[t.requestId] = !0, i++;
                                    var n = function(e) {
                                        var t = e.adUnitCode,
                                            n = e.bid,
                                            r = e.bidderRequest,
                                            i = e.auctionId,
                                            o = r.start,
                                            a = k({}, n, {
                                                auctionId: i,
                                                responseTimestamp: Object(j.timestamp)(),
                                                requestTimestamp: o,
                                                cpm: parseFloat(n.cpm) || 0,
                                                bidder: n.bidderCode,
                                                adUnitCode: t
                                            });
                                        a.timeToRespond = a.responseTimestamp - a.requestTimestamp, q.emit(M.EVENTS.BID_ADJUSTMENT, a);
                                        var c = r.bids && x()(r.bids, function(e) {
                                                return e.adUnitCode == t
                                            }),
                                            u = c && c.renderer;
                                        u && u.url && (a.renderer = _.a.install({
                                            url: u.url
                                        }), a.renderer.setRender(u.render));
                                        var s = X(n.mediaType, c, B.b.getConfig("mediaTypePriceGranularity")),
                                            d = Object(w.a)(a.cpm, "object" === R(s) ? s : B.b.getConfig("customPriceBucket"), B.b.getConfig("currency.granularityMultiplier"));
                                        return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, a.pbCg = d.custom, a
                                    }({
                                        adUnitCode: e,
                                        bid: t,
                                        bidderRequest: this,
                                        auctionId: r.getAuctionId()
                                    });
                                    "video" === n.mediaType ? function(e, t, n, r) {
                                        var i = !0,
                                            o = Object(j.getBidRequest)(t.requestId, [n]),
                                            a = o && Object(j.deepAccess)(o, "mediaTypes.video"),
                                            c = a && Object(j.deepAccess)(a, "context");
                                        B.b.getConfig("cache.url") && c !== U.b && (t.videoCacheKey ? t.vastUrl || (N.logError("videoCacheKey specified but not required vastUrl for video bid"), i = !1) : (i = !1, $(e, t, r, o)));
                                        i && (Q(e, t), r())
                                    }(r, n, this, s) : (Q(r, n), s())
                                },
                                adapterDone: function() {
                                    a.add(this), o = r.getBidRequests().every(function(e) {
                                        return a.has(e)
                                    }), this.bids.forEach(function(e) {
                                        c[e.bidId] || (r.addNoBid(e), q.emit(M.EVENTS.NO_BID, e))
                                    }), o && 0 === i && n()
                                }
                            });

                            function s() {
                                i--, o && 0 === i && n()
                            }
                            P.callBids(y, d, function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                K.apply({
                                    dispatch: u.addBidResponse,
                                    bidderRequest: this
                                }, t)
                            }, u.adapterDone, {
                                request: function(e, t) {
                                    g(z, t), g(l, e), V[e] || (V[e] = {
                                        SRA: !0,
                                        origin: t
                                    }), 1 < l[e] && (V[e].SRA = !1)
                                },
                                done: function(e) {
                                    z[e]--, H[0] && p(H[0]) && H.shift()
                                }
                            }, m, I)
                        }
                    };

                function p(e) {
                    var r = !0,
                        i = B.b.getConfig("maxRequestsPerOrigin") || F;
                    return e.bidRequests.some(function(e) {
                        var t = 1,
                            n = void 0 !== e.src && e.src === M.S2S.SRC ? "s2s" : e.bidderCode;
                        return V[n] && (!1 === V[n].SRA && (t = Math.min(e.bids.length, i)), z[V[n].origin] + t > i && (r = !1)), !r
                    }), r && e.run(), r
                }

                function g(e, t) {
                    void 0 === e[t] ? e[t] = 1 : e[t]++
                }
                p(e) || (N.logWarn("queueing auction due to limited endpoint capacity"), H.push(e))
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
                    b = G, t = Date.now();
                    var e = P.makeBidRequests(y, t, p, m, s);
                    N.logInfo("Bids Requested for Auction with id: ".concat(p), e), e.length < 1 ? (N.logWarn("No valid bid requests returned for auction"), T()) : J.call({
                        dispatch: C,
                        context: this
                    }, e)
                },
                addWinningBid: function(e) {
                    S = S.concat(e), P.callBidWonBidder(e.bidder, e, o)
                },
                setBidTargeting: function(e) {
                    P.callSetTargetingBidder(e.bidder, e)
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
            return K
        }), n.d(t, "e", function() {
            return J
        }), t.g = s, t.d = Q, n.d(t, "f", function() {
            return $
        }), n.d(t, "i", function() {
            return d
        }), n.d(t, "h", function() {
            return f
        }), t.j = l;
        var j = n(0),
            w = n(45),
            a = n(36),
            o = n(93),
            _ = n(11),
            B = n(3),
            r = n(44),
            i = n(13),
            c = n(10),
            x = n.n(c),
            U = n(33),
            u = n(2);

        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function k() {
            return (k = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var D = r.a.syncUsers,
            N = n(0),
            P = n(7).default,
            q = n(9),
            M = n(5),
            G = "started",
            W = "inProgress",
            L = "completed";
        q.on(M.EVENTS.BID_ADJUSTMENT, function(e) {
            ! function(e) {
                var t, n = e.bidderCode,
                    r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                    r = t(e.cpm, k({}, e))
                } catch (e) {
                    N.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= r && (e.cpm = r)
            }(e)
        });
        var F = 4,
            z = {},
            V = {},
            H = [];
        var K = Object(i.b)("async", function(e, t) {
                this.dispatch.call(this.bidderRequest, e, t)
            }, "addBidResponse"),
            J = Object(i.b)("sync", function(e) {
                this.dispatch.call(this.context, e)
            }, "addBidderRequests"),
            Y = Object(i.b)("async", function(e, t) {
                t && t()
            }, "bidsBackCallback");

        function s(e, t) {
            t.timeToRespond > e.getTimeout() + B.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function Q(e, t) {
            var n = e.getBidRequests(),
                r = x()(n, function(e) {
                    return e.bidderCode === t.bidderCode
                });
            ! function(t, e) {
                var n; {
                    var r;
                    t.bidderCode && (0 < t.cpm || t.dealId) && (r = x()(e.bids, function(e) {
                        return e.adUnitCode === t.adUnitCode
                    }), n = function(e, t, n) {
                        if (!t) return {};
                        var r = {},
                            i = pbjs.bidderSettings; {
                            var o;
                            i && (o = l(t.mediaType, e, n), p(r, o, t), e && i[e] && i[e][M.JSON_MAPPING.ADSERVER_TARGETING] && (p(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting))
                        }
                        t.native && (r = k({}, r, Object(a.d)(t, n)));
                        return r
                    }(t.bidderCode, t, r))
                }
                t.adserverTargeting = k(t.adserverTargeting || {}, n)
            }(t, r), q.emit(M.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), s(e, t)
        }
        var $ = Object(i.b)("async", function(n, r, i, e) {
            Object(o.b)([r], function(e, t) {
                e ? (N.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), s(n, r)) : "" === t[0].uuid ? (N.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), s(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), Q(n, r), i())
            }, e)
        }, "callPrebidCache");

        function X(e, t, n) {
            if (e && n) {
                if (e === u.d) {
                    var r = Object(j.deepAccess)(t, "mediaTypes.".concat(u.d, ".context"), "instream");
                    if (n["".concat(u.d, "-").concat(r)]) return n["".concat(u.d, "-").concat(r)]
                }
                return n[e]
            }
        }
        var d = function(e, t) {
                var n = X(e, t, B.b.getConfig("mediaTypePriceGranularity"));
                return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : B.b.getConfig("priceGranularity")
            },
            f = function(t) {
                return function(e) {
                    return t === M.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === M.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === M.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === M.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === M.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === M.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }
            };

        function l(e, t, n) {
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
            var i, o, a = M.TARGETING_KEYS,
                c = d(e, n),
                u = pbjs.bidderSettings;
            return u[M.JSON_MAPPING.BD_SETTING_STANDARD] || (u[M.JSON_MAPPING.BD_SETTING_STANDARD] = {}), u[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] || (u[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] = [r(a.BIDDER, "bidderCode"), r(a.AD_ID, "adId"), r(a.PRICE_BUCKET, f(c)), r(a.SIZE, "size"), r(a.DEAL, "dealId"), r(a.SOURCE, "source"), r(a.FORMAT, "mediaType")]), "video" === e && (i = u[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING], [a.UUID, a.CACHE_ID].forEach(function(t) {
                void 0 === x()(i, function(e) {
                    return e.key === t
                }) && i.push(r(t, "videoCacheKey"))
            }), !B.b.getConfig("cache.url") || t && !1 === N.deepAccess(u, "".concat(t, ".sendStandardTargeting")) || (o = Object(j.parseUrl)(B.b.getConfig("cache.url")), void 0 === x()(i, function(e) {
                return e.key === a.CACHE_HOST
            }) && i.push(r(a.CACHE_HOST, function(e) {
                return N.deepAccess(e, "adserverTargeting.".concat(a.CACHE_HOST)) ? e.adserverTargeting[a.CACHE_HOST] : o.hostname
            })))), u[M.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function p(r, i, o) {
            var e = i[M.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), N._each(e, function(e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && N.logWarn("The key: " + t + " is getting ovewritten"), N.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    N.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== M.TARGETING_KEYS.DEAL || !N.isEmptyStr(n) && null != n ? r[t] = n : N.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            }), r
        }

        function Z(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    42: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return p
        });
        var y = n(0),
            h = n(3),
            m = n(36),
            r = n(27),
            i = n(91),
            o = n(2),
            a = n(12),
            S = n.n(a);

        function A() {
            return (A = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function E(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function O(e) {
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
        var u = n(0),
            T = n(5),
            I = [],
            C = Object.keys(T.TARGETING_KEYS).map(function(e) {
                return T.TARGETING_KEYS[e]
            }),
            s = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(y.timestamp)()
            },
            d = function(e) {
                return e && (e.status && !S()([T.BID_STATUS.RENDERED], e.status) || !e.status)
            };

        function j(e, r, t) {
            var i = 2 < arguments.length && void 0 !== t ? t : 0,
                o = [],
                a = h.b.getConfig("sendBidsControl.dealPrioritization"),
                c = Object(y.groupBy)(e, "adUnitCode");
            return Object.keys(c).forEach(function(e) {
                var t = [],
                    n = Object(y.groupBy)(c[e], "bidderCode");
                Object.keys(n).forEach(function(e) {
                    return t.push(n[e].reduce(r))
                }), 0 < i ? (t = a ? t.sort(w(!0)) : t.sort(function(e, t) {
                    return t.cpm - e.cpm
                }), o.push.apply(o, O(t.slice(0, i)))) : o.push.apply(o, O(t))
            }), o
        }

        function w(e) {
            var n = 0 < arguments.length && void 0 !== e && e;
            return function(e, t) {
                return void 0 !== e.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === e.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adserverTargeting.hb_pb - e.adserverTargeting.hb_pb
            }
        }
        var f, _, l, p = (f = r.a, l = {}, (_ = {}).setLatestAuctionForAdUnit = function(e, t) {
            l[e] = t
        }, _.resetPresetTargeting = function(e, t) {
            var n, i;
            Object(y.isGptPubadsDefined)() && (n = x(e), i = f.getAdUnits().filter(function(e) {
                return S()(n, e.code)
            }), window.googletag.pubads().getSlots().forEach(function(n) {
                var r = u.isFn(t) && t(n);
                I.forEach(function(t) {
                    i.forEach(function(e) {
                        (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || u.isFn(r) && r(e.code)) && n.setTargeting(t, null)
                    })
                })
            }))
        }, _.resetPresetTargetingAST = function(e) {
            x(e).forEach(function(e) {
                var t, n, r = window.apntag.getTag(e);
                r && r.keywords && (t = Object.keys(r.keywords), n = {}, t.forEach(function(e) {
                    S()(I, e.toLowerCase()) || (n[e] = r.keywords[e])
                }), window.apntag.modifyTag(e, {
                    keywords: n
                }))
            })
        }, _.getAllTargeting = function(e) {
            var n, t, r, i, o, a, c, u, s, d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : U(),
                f = x(e),
                l = (a = f, c = d, u = _.getWinningBids(a, c), s = R(), (u = u.map(function(o) {
                    return E({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function(e) {
                        return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === s.indexOf(e)
                    }).reduce(function(e, t) {
                        var n = [o.adserverTargeting[t]],
                            r = E({}, t.substring(0, 20), n);
                        if (t !== T.TARGETING_KEYS.DEAL) return [].concat(O(e), [r]);
                        var i = E({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                        return [].concat(O(e), [r, i])
                    }, []))
                })).concat((o = f, d.filter(function(e) {
                    return S()(o, e.adUnitCode)
                }).map(function(e) {
                    return A({}, e)
                }).reduce(k, []).map(D).filter(function(e) {
                    return e
                }))).concat(h.b.getConfig("enableSendAllBids") ? (n = f, t = d, r = C.concat(m.a), i = h.b.getConfig("sendBidsControl.bidLimit"), j(t, y.getHighestCpm, i).map(function(t) {
                    if (B(t, n)) return E({}, t.adUnitCode, N(t, r.filter(function(e) {
                        return void 0 !== t.adserverTargeting[e]
                    })))
                }).filter(function(e) {
                    return e
                })) : function(e, t) {
                    if (!0 !== h.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                    var n = C.concat(m.a);
                    return j(t, y.getHighestCpm).map(function(t) {
                        if (t.dealId && B(t, e)) return E({}, t.adUnitCode, N(t, n.filter(function(e) {
                            return void 0 !== t.adserverTargeting[e]
                        })))
                    }).filter(function(e) {
                        return e
                    })
                }(f, d)));
            l.map(function(t) {
                Object.keys(t).map(function(e) {
                    t[e].map(function(e) {
                        -1 === I.indexOf(Object.keys(e)[0]) && (I = Object.keys(e).concat(I))
                    })
                })
            }), l = l.map(function(e) {
                return E({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                    return E({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                }).reduce(function(e, t) {
                    return A(t, e)
                }, {}))
            }).reduce(function(e, t) {
                var n = Object.keys(t)[0];
                return e[n] = A({}, e[n], t[n]), e
            }, {});
            var p, g, b, v = h.b.getConfig("targetingControls.auctionKeyMaxChars");
            return v && (Object(y.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(v, " characters.  Running checks on auction keys...")), p = l, g = v, b = Object(y.deepClone)(p), l = Object.keys(b).map(function(e) {
                return {
                    adUnitCode: e,
                    adserverTargeting: b[e]
                }
            }).sort(w()).reduce(function(e, t, n, r) {
                var i, o = (i = t.adserverTargeting, Object.keys(i).reduce(function(e, t) {
                    return e + "".concat(t, "%3d").concat(encodeURIComponent(i[t]), "%26")
                }, ""));
                n + 1 === r.length && (o = o.slice(0, -3));
                var a = t.adUnitCode,
                    c = o.length;
                return c <= g ? (g -= c, Object(y.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(g), b[a]), e[a] = b[a]) : Object(y.logWarn)("The following keys for adUnitCode '".concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c, ", the current allotted amount was ").concat(g, ".\n"), b[a]), n + 1 === r.length && 0 === Object.keys(e).length && Object(y.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
            }, {})), f.forEach(function(e) {
                l[e] || (l[e] = {})
            }), l
        }, _.setTargetingForGPT = function(i, e) {
            window.googletag.pubads().getSlots().forEach(function(r) {
                Object.keys(i).filter((e || Object(y.isAdUnitCodeMatchingSlot))(r)).forEach(function(n) {
                    return Object.keys(i[n]).forEach(function(t) {
                        var e = i[n][t];
                        "string" == typeof e && (e = e.split(",")), (e = 1 < e.length ? [e] : e).map(function(e) {
                            return u.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e
                        }).forEach(function(e) {
                            r.setTargeting(t, e)
                        })
                    })
                })
            })
        }, _.getWinningBids = function(e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : U(),
                t = x(e);
            return n.filter(function(e) {
                return S()(t, e.adUnitCode)
            }).filter(function(e) {
                return 0 < e.cpm
            }).map(function(e) {
                return e.adUnitCode
            }).filter(y.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.adUnitCode === t ? e : null
                }).reduce(y.getHighestCpm)
            })
        }, _.setTargetingForAst = function(e) {
            var r = _.getAllTargeting(e);
            try {
                _.resetPresetTargetingAST(e)
            } catch (e) {
                u.logError("unable to reset targeting for AST" + e)
            }
            Object.keys(r).forEach(function(n) {
                return Object.keys(r[n]).forEach(function(e) {
                    var t;
                    u.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), (u.isStr(r[n][e]) || u.isArray(r[n][e])) && (t = {}, e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                        overrideKeyValue: !0
                    }))
                })
            })
        }, _.isApntagDefined = function() {
            if (window.apntag && u.isFn(window.apntag.setKeywords)) return !0
        }, _);

        function B(e, t) {
            return e.adserverTargeting && t && (u.isArray(t) && S()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)
        }

        function x(e) {
            return "string" == typeof e ? [e] : u.isArray(e) ? e : f.getAdUnitCodes() || []
        }

        function U() {
            var e = f.getBidsReceived();
            return h.b.getConfig("useBidCache") || (e = e.filter(function(e) {
                return l[e.adUnitCode] === e.auctionId
            })), j(e = e.filter(function(e) {
                return Object(y.deepAccess)(e, "video.context") !== o.a
            }).filter(function(e) {
                return "banner" !== e.mediaType || Object(i.c)([e.width, e.height])
            }).filter(d).filter(s), y.getOldestHighestCpmBid)
        }

        function R() {
            return f.getStandardBidderAdServerTargeting().map(function(e) {
                return e.key
            }).concat(C).filter(y.uniques)
        }

        function k(r, i, e, t) {
            return Object.keys(i.adserverTargeting).filter(g()).forEach(function(e) {
                var t, n;
                r.length && r.filter((n = e, function(e) {
                    return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
                })).forEach((t = e, function(e) {
                    u.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(y.uniques), delete i.adserverTargeting[t]
                }))
            }), r.push(i), r
        }

        function g() {
            var t = R().concat(m.a);
            return function(e) {
                return -1 === t.indexOf(e)
            }
        }

        function D(t) {
            return E({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(g()).map(function(e) {
                return E({}, e.substring(0, 20), [t.adserverTargeting[e]])
            }))
        }

        function N(t, e) {
            return e.map(function(e) {
                return E({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
            })
        }
    },
    43: function(e, t) {
        e.exports = {}
    },
    44: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return S
        });
        var a = n(0),
            r = n(3),
            i = n(12),
            o = n.n(i),
            c = n(8);

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
    474: function(e, t, n) {
        var r = n(475);
        e.exports = r
    },
    475: function(e, t, n) {
        n(476);
        var r = n(43);
        e.exports = r.Number.isInteger
    },
    476: function(e, t, n) {
        n(14)({
            target: "Number",
            stat: !0
        }, {
            isInteger: n(477)
        })
    },
    477: function(e, t, n) {
        var r = n(24),
            i = Math.floor;
        e.exports = function(e) {
            return !r(e) && isFinite(e) && i(e) === e
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
                TCF2_ENFORCEMENT: "tcf2Enforcement"
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
    51: function(e, t) {
        e.exports = function() {}
    },
    52: function(e, t, n) {
        var r = n(26);
        e.exports = r
    },
    53: function(e, t) {
        e.exports = {}
    },
    54: function(e, t, n) {
        var r, i, o, a, c, u, s, d, f = n(113),
            l = n(23),
            p = n(24),
            g = n(30),
            b = n(25),
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
        var i = n(24);
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
        var S = n(21),
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
        var c = n(28),
            u = n(29),
            s = n(25),
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
            a = n(31).f,
            c = n(30),
            u = n(25),
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
            O = n(30),
            T = n(84),
            r = n(19),
            I = n(16),
            C = n(38),
            i = n(85),
            j = i.IteratorPrototype,
            w = i.BUGGY_SAFARI_ITERATORS,
            _ = r("iterator"),
            B = "values",
            x = "entries";
        e.exports = function(e, t, n, r, i, o, a) {
            m(n, t, r);

            function c(e) {
                if (e === i && b) return b;
                if (!w && e in p) return p[e];
                switch (e) {
                    case "keys":
                    case B:
                    case x:
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
                        entries: c(x)
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
        var r = n(20),
            i = n(0),
            o = n(223),
            a = n(44),
            d = n(3),
            y = n(27),
            f = n(42),
            c = n(13),
            u = n(224),
            s = n(12),
            l = n.n(s),
            p = n(67),
            h = n(11),
            g = n(32),
            b = n(8);

        function v(e) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function m() {
            return (m = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var S = Object(r.a)(),
            A = n(5),
            E = n(0),
            O = n(7).default,
            T = n(9),
            I = a.a.triggerUserSyncs,
            C = A.EVENTS,
            j = C.ADD_AD_UNITS,
            w = C.BID_WON,
            _ = C.REQUEST_BIDS,
            B = C.SET_TARGETING,
            x = C.AD_RENDER_FAILED,
            U = A.AD_RENDER_FAILED_REASON,
            R = U.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            k = U.NO_AD,
            D = U.EXCEPTION,
            N = U.CANNOT_FIND_AD,
            P = U.MISSING_DOC_OR_ADID,
            q = {
                bidWon: function(e) {
                    var t = y.a.getBidsRequested().map(function(e) {
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
        Object(u.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v4.5.0", E.logInfo("Prebid.js v4.5.0 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = I;
        var z = {
                validateBannerMediaType: W,
                validateVideoMediaType: L,
                validateNativeMediaType: F,
                validateSizes: G
            },
            V = Object(c.b)("sync", function(e) {
                var a = [];
                return e.forEach(function(e) {
                    var t, n, r, i, o = e.mediaTypes;
                    o && 0 !== Object.keys(o).length ? (o.banner && (t = W(e)), o.video && (n = L(t || e)), o.native && (r = F(n || (t || e))), i = m({}, t, n, r), a.push(i)) : E.logError("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."))
                }), a
            }, "checkAdUnitSetup");

        function H(e) {
            var n = y.a[e]().filter(E.bind.call(i.adUnitsFilter, this, y.a.getAdUnitCodes())),
                r = y.a.getLastAuctionId();
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
                return m(e, t)
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
            r && (o.bid = r), i && (o.adId = i), E.logError(n), T.emit(x, o)
        }

        function J(e, t) {
            function n(e) {
                for (var t; t = e.shift();) t()
            }
            n(b.c), n(Y), e.call(this, t)
        }
        S.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return E.transformAdServerTargetingObj(t)
            }
            E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, S.getAdserverTargetingForAdUnitCode = function(e) {
            return S.getAdserverTargeting(e)[e]
        }, S.getAdserverTargeting = function(e) {
            return E.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.a.getAllTargeting(e)
        }, S.getNoBids = function() {
            return E.logInfo("Invoking pbjs.getNoBids", arguments), H("getNoBids")
        }, S.getBidResponses = function() {
            return E.logInfo("Invoking pbjs.getBidResponses", arguments), H("getBidsReceived")
        }, S.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: y.a.getBidsReceived().filter(function(e) {
                    return e.adUnitCode === t
                })
            }
        }, S.setTargetingForGPTAsync = function(e, t) {
            var n;
            E.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(i.isGptPubadsDefined)() ? (n = f.a.getAllTargeting(e), f.a.resetPresetTargeting(e, t), f.a.setTargetingForGPT(n, t), Object.keys(n).forEach(function(t) {
                Object.keys(n[t]).forEach(function(e) {
                    "hb_adid" === e && y.a.setStatusForBids(n[t][e], A.BID_STATUS.BID_TARGETING_SET)
                })
            }), T.emit(B, n)) : E.logError("window.googletag is not defined on the page")
        }, S.setTargetingForAst = function(e) {
            E.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.a.isApntagDefined() ? (f.a.setTargetingForAst(e), T.emit(B, f.a.getAllTargeting())) : E.logError("window.apntag is not defined on the page")
        }, S.renderAd = function(e, t) {
            if (E.logInfo("Invoking pbjs.renderAd", arguments), E.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n, r, i, o, a, c, u, s, d, f, l, p, g = y.a.findBidByAdId(t);
                g ? (g.ad = E.replaceAuctionPrice(g.ad, g.cpm), g.adUrl = E.replaceAuctionPrice(g.adUrl, g.cpm), y.a.addWinningBid(g), T.emit(w, g), n = g.height, r = g.width, i = g.ad, o = g.mediaType, a = g.adUrl, c = g.renderer, u = document.createComment("Creative ".concat(g.creativeId, " served by ").concat(g.bidder, " Prebid.js Header Bidding")), E.insertElement(u, e, "body"), Object(h.c)(c) ? Object(h.b)(c, g) : e === document && !E.inIframe() || "video" === o ? (s = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document."), K({
                    reason: R,
                    message: s,
                    bid: g,
                    id: t
                })) : i ? (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/") && ((d = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(d, 10) < 67 && e.open("text/html", "replace")), e.write(i), e.close(), M(e, r, n), E.callBurl(g)) : a ? ((f = E.createInvisibleIframe()).height = n, f.width = r, f.style.display = "inline", f.style.overflow = "hidden", f.src = a, E.insertElement(f, e, "body"), M(e, r, n), E.callBurl(g)) : (l = "Error trying to write ad. No ad for bid response id: ".concat(t), K({
                    reason: k,
                    message: l,
                    bid: g,
                    id: t
                }))) : (p = "Error trying to write ad. Cannot find ad by given id : ".concat(t), K({
                    reason: N,
                    message: p,
                    id: t
                }))
            } catch (e) {
                var b = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                K({
                    reason: D,
                    message: b,
                    id: t
                })
            } else {
                var v = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                K({
                    reason: P,
                    message: v,
                    id: t
                })
            }
        }, S.removeAdUnit = function(e) {
            E.logInfo("Invoking pbjs.removeAdUnit", arguments), e ? (E.isArray(e) ? e : [e]).forEach(function(e) {
                for (var t = S.adUnits.length - 1; 0 <= t; t--) S.adUnits[t].code === e && S.adUnits.splice(t, 1)
            }) : S.adUnits = []
        }, S.requestBids = Object(c.b)("async", function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels,
                a = e.auctionId;
            T.emit(_);
            var c = n || d.b.getConfig("bidderTimeout"),
                r = r || S.adUnits;
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
                var u = y.a.createAuction({
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
        }), S.requestBids.before(J, 49), S.addAdUnits = function(e) {
            E.logInfo("Invoking pbjs.addAdUnits", arguments), E.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === v(e) && S.adUnits.push(e), T.emit(j)
        }, S.onEvent = function(e, t, n) {
            E.logInfo("Invoking pbjs.onEvent", arguments), E.isFn(t) ? !n || q[e].call(null, n) ? T.on(e, t, n) : E.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, S.offEvent = function(e, t, n) {
            E.logInfo("Invoking pbjs.offEvent", arguments), n && !q[e].call(null, n) || T.off(e, t, n)
        }, S.registerBidAdapter = function(e, t) {
            E.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                O.registerBidAdapter(e(), t)
            } catch (e) {
                E.logError("Error registering bidder adapter : " + e.message)
            }
        }, S.registerAnalyticsAdapter = function(e) {
            E.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                O.registerAnalyticsAdapter(e)
            } catch (e) {
                E.logError("Error registering analytics adapter : " + e.message)
            }
        }, S.createBid = function(e) {
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
        S.enableAnalytics = function(e) {
            Y.push(Q.bind(this, e))
        }, S.aliasBidder = function(e, t, n) {
            E.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? O.aliasBidAdapter(e, t, n) : E.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, S.getAllWinningBids = function() {
            return y.a.getAllWinningBids()
        }, S.getAllPrebidWinningBids = function() {
            return y.a.getBidsReceived().filter(function(e) {
                return e.status === A.BID_STATUS.BID_TARGETING_SET
            })
        }, S.getHighestCpmBids = function(e) {
            return f.a.getWinningBids(e)
        }, S.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = y.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            }) : t.adUnitCode ? e = f.a.getWinningBids(t.adUnitCode) : t.adId ? e = y.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId
            }) : E.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = A.BID_STATUS.RENDERED)
        }, S.getConfig = d.b.getConfig, S.setConfig = d.b.setConfig, S.setBidderConfig = d.b.setBidderConfig, S.que.push(function() {
            return Object(o.a)()
        }), S.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                E.logError("Error processing command :", e.message, e.stack)
            } else E.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, S.que.push = S.cmd.push, S.processQueue = function() {
            c.b.ready(), $(S.que), $(S.cmd)
        }, t.default = S
    },
    69: function(e, t, n) {
        "use strict";
        t.a = function(t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function(e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e]
            })
        };
        var r = n(20),
            i = n(0),
            o = Object(r.a)()
    },
    7: function(e, t, n) {
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
            g = n(36),
            l = n(1),
            h = n(4),
            A = n(3),
            r = n(13),
            i = n(12),
            E = n.n(i),
            o = n(10),
            O = n.n(o),
            b = n(67),
            T = n(22);

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
            w = n(9),
            y = {},
            _ = y.bidderRegistry = {},
            B = y.aliasRegistry = {},
            x = {};
        A.b.getConfig("s2sConfig", function(e) {
            x = e.s2sConfig
        });
        var c = {};
        var U = Object(r.b)("sync", function(e) {
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
            return x && x.enabled && x.testing && I
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
            x.enabled && (D() && (v = I.getSourceBidderMap(e)[I.CLIENT]), n = x.bidders, b = t.filter(function(e) {
                return !E()(n, e) || E()(v, e)
            }), Boolean(D() && x.testServerOnly) && (p = e, Boolean(O()(p, function(e) {
                return O()(e.bids, function(e) {
                    return (e.bidSource || x.bidderControl && x.bidderControl[e.bidder]) && e.finalSource === I.SERVER
                })
            }))) && (b.length = 0), d = e, f = x.bidders, (l = C.deepClone(d)).forEach(function(e) {
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
                        bids: U({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: C.deepClone(r),
                            labels: c,
                            src: j.S2S.SRC
                        }),
                        auctionStart: i,
                        timeout: x.timeout,
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
                        bids: U({
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
            } : void 0), f = x.bidders, l = _[x.adapter], p = s[0].tid, g = s[0].adUnitsS2SCopy, l ? (b = {
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
            }, d)) : C.logError("missing " + x.adapter)), r.forEach(function(t) {
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
    70: function(e, t, n) {
        var r = n(29),
            i = n(48),
            o = "".split;
        e.exports = r(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return "String" == i(e) ? o.call(e, "") : Object(e)
        } : Object
    },
    71: function(e, t, n) {
        var r = n(28),
            i = n(29),
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
        var r = n(23),
            i = n(24),
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
        var r = n(23),
            i = n(103),
            o = "__core-js_shared__",
            a = r[o] || i(o, {});
        e.exports = a
    },
    75: function(e, t, n) {
        var r = n(29);
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
            o = n(24),
            a = n(25),
            c = n(31).f,
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
        "use strict";
        n.d(t, "c", function() {
            return f
        }), n.d(t, "d", function() {
            return l
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
            c = n(0),
            i = n(12),
            u = n.n(i),
            d = ["core", "prebid-module"],
            f = [];

        function o(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {},
                i = t.gvlid,
                o = t.moduleName,
                a = t.moduleType;

            function s(n) {
                if (u()(d, a)) {
                    return n({
                        valid: !0
                    })
                }
                var r;
                return l(i, o, {
                    hasEnforcementHook: !1
                }, function(e) {
                    var t;
                    r = e && e.hasEnforcementHook ? n(e) : (t = {
                        hasEnforcementHook: !1,
                        valid: c.hasDeviceAccess()
                    }, n(t))
                }), r
            }
            return {
                setCookie: function(i, o, a, c, u, t) {
                    function n(e) {
                        var t, n, r;
                        e && e.valid && (t = u && "" !== u ? " ;domain=".concat(encodeURIComponent(u)) : "", n = a && "" !== a ? " ;expires=".concat(a) : "", r = null != c && "none" == c.toLowerCase() ? "; Secure" : "", document.cookie = "".concat(i, "=").concat(encodeURIComponent(o)).concat(n, "; path=/").concat(t).concat(c ? "; SameSite=".concat(c) : "").concat(r))
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function() {
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
                    f.push(function() {
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
                    f.push(function() {
                        var e = s(n);
                        t(e)
                    })
                },
                cookiesAreEnabled: function(t) {
                    function n(e) {
                        return !(!e || !e.valid) && (!!c.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", -1 !== window.document.cookie.indexOf("prebid.cookieTest")))
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function() {
                        var e = s(n);
                        t(e)
                    })
                },
                setDataInLocalStorage: function(t, n, r) {
                    function i(e) {
                        e && e.valid && window.localStorage.setItem(t, n)
                    }
                    if (!r || "function" != typeof r) return s(i);
                    f.push(function() {
                        var e = s(i);
                        r(e)
                    })
                },
                getDataFromLocalStorage: function(t, n) {
                    function r(e) {
                        return e && e.valid ? window.localStorage.getItem(t) : null
                    }
                    if (!n || "function" != typeof n) return s(r);
                    f.push(function() {
                        var e = s(r);
                        n(e)
                    })
                },
                removeDataFromLocalStorage: function(t, n) {
                    function r(e) {
                        e && e.valid && window.localStorage.removeItem(t)
                    }
                    if (!n || "function" != typeof n) return s(r);
                    f.push(function() {
                        var e = s(r);
                        n(e)
                    })
                },
                hasLocalStorage: function(t) {
                    function n(e) {
                        if (e && e.valid) try {
                            return !!window.localStorage
                        } catch (e) {
                            c.logError("Local storage api disabled")
                        }
                        return !1
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function() {
                        var e = s(n);
                        t(e)
                    })
                },
                findSimilarCookies: function(o, t) {
                    function n(e) {
                        if (e && e.valid) {
                            var t = [];
                            if (c.hasDeviceAccess())
                                for (var n = document.cookie.split(";"); n.length;) {
                                    var r = n.pop(),
                                        i = (i = r.indexOf("=")) < 0 ? r.length : i;
                                    0 <= decodeURIComponent(r.slice(0, i).replace(/^\s+/, "")).indexOf(o) && t.push(decodeURIComponent(r.slice(i + 1)))
                                }
                            return t
                        }
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function() {
                        var e = s(n);
                        t(e)
                    })
                }
            }
        }
        var l = Object(r.b)("async", function(e, t, n, r) {
            r(n)
        }, "validateStorageEnforcement")
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
        var i = n(30);
        e.exports = function(e, t, n, r) {
            r && r.enumerable ? e[t] = n : i(e, t, n)
        }
    },
    846: function(e, t, n) {
        e.exports = n(68)
    },
    85: function(e, t, n) {
        "use strict";
        var r, i, o, a = n(86),
            c = n(30),
            u = n(25),
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
        var r = n(25),
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
    9: function(e, t, n) {
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
                    id: r
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
        var r = n(215);
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
        var r = n(28),
            i = n(99),
            o = n(46),
            a = n(47),
            c = n(55),
            u = n(25),
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
pbjsChunk([293], {
    257: function(e, r, t) {
        e.exports = t(258)
    },
    258: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return x
        });
        var s = t(0),
            n = t(1),
            i = t(2);

        function o() {
            return (o = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }).apply(this, arguments)
        }

        function a() {
            var e = u(["dcn=", "&pos=", "&cmd=bid", ""]);
            return a = function() {
                return e
            }, e
        }

        function c() {
            var e = u(["", "/bidRequest?"]);
            return c = function() {
                return e
            }, e
        }

        function d() {
            var e = u(["", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]);
            return d = function() {
                return e
            }, e
        }

        function u(e, r) {
            return r = r || e.slice(0), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        }
        var p = {
                AOL: "aol",
                ONEMOBILE: "onemobile",
                ONEDISPLAY: "onedisplay"
            },
            l = {
                GET: "display-get"
            },
            m = {
                GET: "mobile-get",
                POST: "mobile-post"
            },
            f = {
                TAG: "iframe",
                TYPE: "iframe"
            },
            b = {
                TAG: "img",
                TYPE: "image"
            },
            h = P(d(), "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams"),
            v = P(c(), "host"),
            g = P(a(), "dcn", "pos", "dynamicParams"),
            O = {
                us: "adserver-us.adtech.advertising.com",
                eu: "adserver-eu.adtech.advertising.com",
                as: "adserver-as.adtech.advertising.com"
            },
            y = "https",
            E = 1;

        function P(o) {
            for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
            return function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                var i = n[n.length - 1] || {},
                    a = [o[0]];
                return t.forEach(function(e, r) {
                    var t = s.isInteger(e) ? n[e] : i[e];
                    a.push(t, o[r + 1])
                }), a.join("")
            }
        }

        function I(e) {
            return e === p.AOL || e === p.ONEMOBILE
        }

        function T(e) {
            if (I(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                var r = e.params.imp[0];
                return r.id && r.tagid && (r.banner && r.banner.w && r.banner.h || r.video && r.video.mimes && r.video.minduration && r.video.maxduration)
            }
        }

        function S(e) {
            return I(e.bidder) && e.params.dcn && e.params.pos
        }

        function C(e) {
            return ((r = e.bidder) === p.AOL || r === p.ONEDISPLAY) && e.params.placement && e.params.network;
            var r
        }
        var x = {
            code: p.AOL,
            gvlid: 25,
            aliases: [p.ONEMOBILE, p.ONEDISPLAY],
            supportedMediaTypes: [i.b],
            isBidRequestValid: function(e) {
                return C(e) || (S(r = e) || T(r));
                var r
            },
            buildRequests: function(e, r) {
                var n = this,
                    i = {};
                return r && (i.gdpr = r.gdprConsent, i.uspConsent = r.uspConsent), e.map(function(e) {
                    var r, t = S(r = e) ? m.GET : T(r) ? m.POST : C(r) ? l.GET : void 0;
                    if (t) return n.formatBidRequest(t, e, i)
                })
            },
            interpretResponse: function(e, r) {
                var t = e.body;
                if (t) {
                    var n = this._parseBidResponse(t, r);
                    if (n) return n
                } else s.logError("Empty bid response", r.bidderCode, t)
            },
            getUserSyncs: function(e, r) {
                var t = !s.isEmpty(r) && r[0].body;
                return t && t.ext && t.ext.pixels ? this.parsePixelItems(t.ext.pixels) : []
            },
            formatBidRequest: function(e, r, t) {
                var n;
                switch (e) {
                    case l.GET:
                        n = {
                            url: this.buildMarketplaceUrl(r, t),
                            method: "GET",
                            ttl: 60
                        };
                        break;
                    case m.GET:
                        n = {
                            url: this.buildOneMobileGetUrl(r, t),
                            method: "GET",
                            ttl: 3600
                        };
                        break;
                    case m.POST:
                        n = {
                            url: this.buildOneMobileBaseUrl(r),
                            method: "POST",
                            ttl: 3600,
                            data: this.buildOpenRtbRequestData(r, t),
                            options: {
                                contentType: "application/json",
                                customHeaders: {
                                    "x-openrtb-version": "2.2"
                                }
                            }
                        }
                }
                return n.bidderCode = r.bidder, n.bidId = r.bidId, n.userSyncOn = r.params.userSyncOn, n
            },
            buildMarketplaceUrl: function(e, r) {
                var t, n = e.params,
                    i = n.server,
                    a = n.region || "us";
                return O.hasOwnProperty(a) || (s.logWarn("Unknown region '".concat(a, "' for AOL bidder.")), a = "us"), t = i || O[a], n.region = a, this.applyProtocol(h({
                    host: t,
                    network: n.network,
                    placement: parseInt(n.placement),
                    pageid: n.pageId || 0,
                    sizeid: n.sizeId || 0,
                    alias: n.alias || s.getUniqueIdentifierStr(),
                    misc: (new Date).getTime(),
                    dynamicParams: this.formatMarketplaceDynamicParams(n, r)
                }))
            },
            buildOneMobileGetUrl: function(e, r) {
                var t, n = e.params,
                    i = n.dcn,
                    a = n.pos,
                    o = n.ext,
                    s = this.buildOneMobileBaseUrl(e);
                return i && a && (t = this.formatOneMobileDynamicParams(o, r), s += g({
                    dcn: i,
                    pos: a,
                    dynamicParams: t
                })), s
            },
            buildOneMobileBaseUrl: function(e) {
                return this.applyProtocol(v({
                    host: e.params.host || "c2shb.ssp.yahoo.com"
                }))
            },
            applyProtocol: function(e) {
                return /^https?:\/\//i.test(e) ? e : 0 === e.indexOf("//") ? "".concat(y, ":").concat(e) : "".concat(y, "://").concat(e)
            },
            formatMarketplaceDynamicParams: function(e, r) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    n = 1 < arguments.length && void 0 !== r ? r : {},
                    i = {};
                t.bidFloor && (i.bidfloor = t.bidFloor), o(i, this.formatKeyValues(t.keyValues)), o(i, this.formatConsentData(n));
                var a = "";
                return s._each(i, function(e, r) {
                    a += "".concat(r, "=").concat(encodeURIComponent(e), ";")
                }), a
            },
            formatOneMobileDynamicParams: function(e, r) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    n = 1 < arguments.length && void 0 !== r ? r : {};
                this.isSecureProtocol() && (t.secure = E), o(t, this.formatConsentData(n));
                var i = "";
                return s._each(t, function(e, r) {
                    i += "&".concat(r, "=").concat(encodeURIComponent(e))
                }), i
            },
            buildOpenRtbRequestData: function(e, r) {
                var t = 1 < arguments.length && void 0 !== r ? r : {},
                    n = {
                        id: e.params.id,
                        imp: e.params.imp
                    };
                return this.isEUConsentRequired(t) && (s.deepSetValue(n, "regs.ext.gdpr", E), t.gdpr.consentString && s.deepSetValue(n, "user.ext.consent", t.gdpr.consentString)), t.uspConsent && s.deepSetValue(n, "regs.ext.us_privacy", t.uspConsent), n
            },
            isEUConsentRequired: function(e) {
                return !!(e && e.gdpr && e.gdpr.gdprApplies)
            },
            formatKeyValues: function(e) {
                var t = {};
                return s._each(e, function(e, r) {
                    t["kv".concat(r)] = e
                }), t
            },
            formatConsentData: function(e) {
                var r = {};
                return this.isEUConsentRequired(e) && (r.gdpr = E, e.gdpr.consentString && (r.euconsent = e.gdpr.consentString)), e.uspConsent && (r.us_privacy = e.uspConsent), r
            },
            parsePixelItems: function(e) {
                var r, n = /\w*(?=\s)/,
                    i = /src=("|')(.*?)\1/,
                    a = [];
                return !e || (r = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi)) && r.forEach(function(e) {
                    var r = e.match(n)[0],
                        t = e.match(i)[2];
                    r && r && a.push({
                        type: r === b.TAG ? b.TYPE : f.TYPE,
                        url: t
                    })
                }), a
            },
            _parseBidResponse: function(e, r) {
                var t, n;
                try {
                    t = e.seatbid[0].bid[0]
                } catch (e) {
                    return
                }
                if (t.ext && t.ext.encp) n = t.ext.encp;
                else if (null === (n = t.price) || isNaN(n)) return void s.logError("Invalid price in bid response", p.AOL, t);
                return {
                    bidderCode: r.bidderCode,
                    requestId: r.bidId,
                    ad: t.adm,
                    cpm: n,
                    width: t.w,
                    height: t.h,
                    creativeId: t.crid || 0,
                    pubapiId: e.id,
                    currency: e.cur || "USD",
                    dealId: t.dealid,
                    netRevenue: !0,
                    ttl: r.ttl
                }
            },
            isOneMobileBidder: I,
            isSecureProtocol: function() {
                return "https:" === document.location.protocol
            }
        };
        Object(n.registerBidder)(x)
    }
}, [257]);
pbjsChunk([291], {
    265: function(e, r, t) {
        e.exports = t(266)
    },
    266: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return R
        });
        var f = t(11),
            k = t(0),
            I = t(3),
            g = t(1),
            v = t(2),
            c = t(27),
            a = t(10),
            x = t.n(a),
            n = t(12),
            A = t.n(n),
            y = t(33),
            i = t(8);

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
                    var t = arguments[r];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }).apply(this, arguments)
        }

        function C(e) {
            return function(e) {
                if (Array.isArray(e)) return o(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function(e, r) {
                if (!e) return;
                if ("string" == typeof e) return o(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t) return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, r)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function o(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
            return a
        }
        var d = "appnexus",
            w = "https://ib.adnxs.com/ut/v3/prebid",
            p = ["id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset"],
            S = ["age", "externalUid", "segments", "gender", "dnt", "language"],
            T = ["geo", "device_id"],
            E = ["enabled", "dongle", "member_id", "debug_timeout"],
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
            l = {
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
            m = "<script",
            h = /\/\/cdn\.adnxs\.com\/v/,
            _ = "trk.js",
            O = Object(i.b)(32, d),
            R = {
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
                supportedMediaTypes: [v.b, v.d, v.c],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var a = e.map(N),
                        t = x()(e, M),
                        n = {};
                    !0 === I.b.getConfig("coppa") && (n = {
                        coppa: !0
                    }), t && Object.keys(t.params.user).filter(function(e) {
                        return A()(S, e)
                    }).forEach(function(e) {
                        var r = k.convertCamelToUnderscore(e);
                        n[r] = t.params.user[e]
                    });
                    var i, s = x()(e, D);
                    s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter(function(e) {
                        return A()(T, e)
                    }).forEach(function(e) {
                        return i[e] = s.params.app[e]
                    }));
                    var o, d = x()(e, B);
                    d && d.params && s.params.app && s.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var c = {},
                        p = {},
                        u = O.getCookie("apn_prebid_debug") || null;
                    if (u) try {
                        c = JSON.parse(u)
                    } catch (e) {
                        k.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                    } else {
                        var l = x()(e, V);
                        l && l.debug && (c = l.debug)
                    }
                    c && c.enabled && Object.keys(c).filter(function(e) {
                        return A()(E, e)
                    }).forEach(function(e) {
                        p[e] = c[e]
                    });
                    var m, f = x()(e, z),
                        g = f ? parseInt(f.params.member, 10) : 0,
                        v = e[0].schain,
                        y = {
                            tags: C(a),
                            user: n,
                            sdk: {
                                source: "pbjs",
                                version: "4.5.0"
                            },
                            schain: v
                        };
                    0 < g && (y.member_id = g), s && (y.device = i), d && (y.app = o), I.b.getConfig("adpod.brandCategoryExclusion") && (y.brand_category_uniqueness = !0), p.enabled && (y.debug = p, k.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(p, null, 4))), r && r.gdprConsent && (y.gdpr_consent = {
                        consent_string: r.gdprConsent.consentString,
                        consent_required: r.gdprConsent.gdprApplies
                    }), r && r.uspConsent && (y.us_privacy = r.uspConsent), r && r.refererInfo && (m = {
                        rd_ref: encodeURIComponent(r.refererInfo.referer),
                        rd_top: r.refererInfo.reachedTop,
                        rd_ifs: r.refererInfo.numIframes,
                        rd_stk: r.refererInfo.stack.map(function(e) {
                            return encodeURIComponent(e)
                        }).join(",")
                    }, y.referrer_detection = m), x()(e, J) && e.filter(J).forEach(function(r) {
                        var e = function(e, r) {
                                var t = r.mediaTypes.video,
                                    a = t.durationRangeSec,
                                    n = t.requireExactDuration,
                                    i = function(e) {
                                        var r = e.adPodDurationSec,
                                            t = e.durationRangeSec,
                                            a = e.requireExactDuration,
                                            n = k.getMinValueFromArray(t),
                                            i = Math.floor(r / n);
                                        return a ? Math.max(i, t.length) : i
                                    }(r.mediaTypes.video),
                                    s = k.getMaxValueFromArray(a),
                                    o = e.filter(function(e) {
                                        return e.uuid === r.bidId
                                    }),
                                    d = k.fill.apply(k, C(o).concat([i])); {
                                    var c, p;
                                    n ? (c = Math.ceil(i / a.length), p = k.chunk(d, c), a.forEach(function(r, e) {
                                        p[e].map(function(e) {
                                            W(e, "minduration", r), W(e, "maxduration", r)
                                        })
                                    })) : d.map(function(e) {
                                        return W(e, "maxduration", s)
                                    })
                                }
                                return d
                            }(a, r),
                            t = y.tags.filter(function(e) {
                                return e.uuid !== r.bidId
                            });
                        y.tags = [].concat(C(t), C(e))
                    });
                    var b = [],
                        h = k.deepAccess(e[0], "userId.criteoId");
                    h && b.push({
                        source: "criteo.com",
                        id: h
                    });
                    var _ = k.deepAccess(e[0], "userId.tdid");
                    return _ && b.push({
                            source: "adserver.org",
                            id: _,
                            rti_partner: "TDID"
                        }), b.length && (y.eids = b), a[0].publisher_id && (y.publisher_id = a[0].publisher_id),
                        function(e, t) {
                            var a = [],
                                n = {};
                            ! function(e) {
                                var r = !0;
                                e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== k.deepAccess(e.gdprConsent, "vendorData.purpose.consents.1")));
                                return r
                            }(t) && (n = {
                                withCredentials: !1
                            }); {
                                var i, r;
                                15 < e.tags.length ? (i = k.deepClone(e), k.chunk(e.tags, 15).forEach(function(e) {
                                    i.tags = e;
                                    var r = JSON.stringify(i);
                                    a.push({
                                        method: "POST",
                                        url: w,
                                        data: r,
                                        bidderRequest: t,
                                        options: n
                                    })
                                })) : (r = JSON.stringify(e), a = {
                                    method: "POST",
                                    url: w,
                                    data: r,
                                    bidderRequest: t,
                                    options: n
                                })
                            }
                            return a
                        }(y, r)
                },
                interpretResponse: function(e, r) {
                    var i = this,
                        s = r.bidderRequest;
                    e = e.body;
                    var t, o = [];
                    if (e && !e.error) return e.tags && e.tags.forEach(function(e) {
                        var r, t, a, n = (r = e) && r.ads && r.ads.length && x()(r.ads, function(e) {
                            return e.rtb
                        });
                        n && 0 !== n.cpm && A()(i.supportedMediaTypes, n.ad_type) && ((t = function(r, e, t) {
                            var a = k.getBidRequest(r.uuid, [t]),
                                n = {
                                    requestId: r.uuid,
                                    cpm: e.cpm,
                                    creativeId: e.creative_id,
                                    dealId: e.deal_id,
                                    currency: "USD",
                                    netRevenue: !0,
                                    ttl: 300,
                                    adUnitCode: a.adUnitCode,
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
                                }), k.deepAccess(a, "mediaTypes.video.context")) {
                                    case v.a:
                                        var o = Object(g.getIabSubCategory)(a.bidder, e.brand_category_id);
                                        n.meta = b({}, n.meta, {
                                            primaryCatId: o
                                        });
                                        var d = e.deal_priority;
                                        n.video = {
                                            context: v.a,
                                            durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3),
                                            dealTier: d
                                        }, n.vastUrl = e.rtb.video.asset_url;
                                        break;
                                    case y.b:
                                        n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, n.vastXml = e.rtb.video.content, e.renderer_url && (i = x()(t.bids, function(e) {
                                            return e.bidId === r.uuid
                                        }), s = k.deepAccess(i, "renderer.options"), n.renderer = function(e, r) {
                                            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                a = f.a.install({
                                                    id: r.renderer_id,
                                                    url: r.renderer_url,
                                                    config: t,
                                                    loaded: !1,
                                                    adUnitCode: e
                                                });
                                            try {
                                                a.setRender(F)
                                            } catch (e) {
                                                k.logWarn("Prebid Error calling setRender on renderer", e)
                                            }
                                            return a.setEventHandlers({
                                                impression: function() {
                                                    return k.logMessage("AppNexus outstream video impression event")
                                                },
                                                loaded: function() {
                                                    return k.logMessage("AppNexus outstream video loaded event")
                                                },
                                                ended: function() {
                                                    k.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                }
                                            }), a
                                        }(n.adUnitCode, e, s));
                                        break;
                                    case y.a:
                                        n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url)
                                }
                            } else if (e.rtb[v.c]) {
                                var c = e.rtb[v.c],
                                    p = e.viewability.config.replace("src=", "data-src="),
                                    u = c.javascript_trackers;
                                null == u ? u = p : k.isStr(u) ? u = [u, p] : u.push(p), n[v.c] = {
                                    title: c.title,
                                    body: c.desc,
                                    body2: c.desc2,
                                    cta: c.ctatext,
                                    rating: c.rating,
                                    sponsoredBy: c.sponsored,
                                    privacyLink: c.privacy_link,
                                    address: c.address,
                                    downloads: c.downloads,
                                    likes: c.likes,
                                    phone: c.phone,
                                    price: c.price,
                                    salePrice: c.saleprice,
                                    clickUrl: c.link.url,
                                    displayUrl: c.displayurl,
                                    clickTrackers: c.link.click_trackers,
                                    impressionTrackers: c.impression_trackers,
                                    javascriptTrackers: u
                                }, c.main_img && (n.native.image = {
                                    url: c.main_img.url,
                                    height: c.main_img.height,
                                    width: c.main_img.width
                                }), c.icon && (n.native.icon = {
                                    url: c.icon.url,
                                    height: c.icon.height,
                                    width: c.icon.width
                                })
                            } else {
                                b(n, {
                                    width: e.rtb.banner.width,
                                    height: e.rtb.banner.height,
                                    ad: e.rtb.banner.content
                                });
                                try {
                                    var l, m;
                                    e.rtb.trackers && (l = e.rtb.trackers[0].impression_urls[0], m = k.createTrackPixelHtml(l), n.ad += m)
                                } catch (e) {
                                    k.logError("Error appending tracking pixel", e)
                                }
                            }
                            return n
                        }(e, n, s)).mediaType = (a = n.ad_type) === v.d ? v.d : a === v.c ? v.c : v.b, o.push(t))
                    }), e.debug && e.debug.debug_info && (t = (t = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info).replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), k.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), k.logMessage(t)), o;
                    var a = "in response for ".concat(s.bidderCode, " adapter");
                    return e && e.error && (a += ": ".concat(e.error)), k.logError(a), o
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
                transformBidParams: function(t, e) {
                    return t = k.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: k.transformBidderParamKeywords,
                        publisherId: "number"
                    }, t), e && (t.use_pmt_rule = "boolean" == typeof t.usePaymentRule && t.usePaymentRule, t.usePaymentRule && delete t.usePaymentRule, j(t.keywords) && t.keywords.forEach(P), Object.keys(t).forEach(function(e) {
                        var r = k.convertCamelToUnderscore(e);
                        r !== e && (t[r] = t[e], delete t[e])
                    })), t
                },
                onBidWon: function(e) {
                    e.native && function(e) {
                        var r = function(e) {
                            var r;
                            if (k.isStr(e) && U(e)) r = e;
                            else if (k.isArray(e))
                                for (var t = 0; t < e.length; t++) {
                                    var a = e[t];
                                    U(a) && (r = a)
                                }
                            return r
                        }(e.native.javascriptTrackers);
                        if (r)
                            for (var t = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, a = function(e) {
                                    var r = e.indexOf('src="') + 5,
                                        t = e.indexOf('"', r);
                                    return e.substring(r, t)
                                }(r), n = a.replace("dom_id=%native_dom_id%", t), i = document.getElementsByTagName("iframe"), s = !1, o = 0; o < i.length && !s; o++) {
                                var d = i[o];
                                try {
                                    var c = d.contentDocument || d.contentWindow.document;
                                    if (c)
                                        for (var p = c.getElementsByTagName("script"), u = 0; u < p.length && !s; u++) {
                                            var l = p[u];
                                            l.getAttribute("data-src") == a && (l.setAttribute("src", n), l.setAttribute("data-src", ""), l.removeAttribute && l.removeAttribute("data-src"), s = !0)
                                        }
                                } catch (e) {
                                    if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e
                                }
                            }
                    }(e)
                }
            };

        function j(e) {
            return k.isArray(e) && 0 < e.length
        }

        function P(e) {
            j(e.value) && "" === e.value[0] && delete e.value
        }

        function U(e) {
            var r = e.match(h),
                t = null != r && 1 <= r.length,
                a = e.match(_),
                n = null != a && 1 <= a.length;
            return e.startsWith(m) && n && t
        }

        function N(t) {
            var e, r, n, i, a = {};
            a.sizes = q(t.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = t.bidId, t.params.placementId ? a.id = parseInt(t.params.placementId, 10) : a.code = t.params.invCode, a.allow_smaller_sizes = t.params.allowSmallerSizes || !1, a.use_pmt_rule = t.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !0, t.params.reserve && (a.reserve = t.params.reserve), t.params.position && (a.position = {
                above: 1,
                below: 2
            }[t.params.position] || 0), t.params.trafficSourceCode && (a.traffic_source_code = t.params.trafficSourceCode), t.params.privateSizes && (a.private_sizes = q(t.params.privateSizes)), t.params.supplyType && (a.supply_type = t.params.supplyType), t.params.pubClick && (a.pubclick = t.params.pubClick), t.params.extInvCode && (a.ext_inv_code = t.params.extInvCode), t.params.publisherId && (a.publisher_id = parseInt(t.params.publisherId, 10)), t.params.externalImpId && (a.external_imp_id = t.params.externalImpId), k.isEmpty(t.params.keywords) || (0 < (e = k.transformBidderParamKeywords(t.params.keywords)).length && e.forEach(P), a.keywords = e), t.mediaType !== v.c && !k.deepAccess(t, "mediaTypes.".concat(v.c)) || (a.ad_types.push(v.c), 0 === a.sizes.length && (a.sizes = q([1, 1])), t.nativeParams && (n = t.nativeParams, i = {}, Object.keys(n).forEach(function(e) {
                var r, t = l[e] && l[e].serverName || l[e] || e,
                    a = l[e] && l[e].requiredParams;
                i[t] = b({}, a, n[e]), t !== l.image.serverName && t !== l.icon.serverName || !i[t].sizes || (r = i[t].sizes, (k.isArrayOfNums(r) || k.isArray(r) && 0 < r.length && r.every(function(e) {
                    return k.isArrayOfNums(e)
                })) && (i[t].sizes = q(i[t].sizes))), t === l.privacyLink && (i.privacy_supported = !0)
            }), r = i, a[v.c] = {
                layouts: [r]
            }));
            var s = k.deepAccess(t, "mediaTypes.".concat(v.d)),
                o = k.deepAccess(t, "mediaTypes.video.context");
            a.hb_source = s && "adpod" === o ? 7 : 1, t.mediaType !== v.d && !s || a.ad_types.push(v.d), (t.mediaType === v.d || s && "outstream" !== o) && (a.require_asset_url = !0), t.params.video && (a.video = {}, Object.keys(t.params.video).filter(function(e) {
                return A()(p, e)
            }).forEach(function(e) {
                switch (e) {
                    case "context":
                    case "playback_method":
                        var r = t.params.video[e],
                            r = k.isArray(r) ? r[0] : r;
                        a.video[e] = u[e][r];
                        break;
                    default:
                        a.video[e] = t.params.video[e]
                }
            })), t.renderer && (a.video = b({}, a.video, {
                custom_renderer_present: !0
            }));
            var d = x()(c.a.getAdUnits(), function(e) {
                return t.transactionId === e.transactionId
            });
            return d && d.mediaTypes && d.mediaTypes.banner && a.ad_types.push(v.b), 0 === a.ad_types.length && delete a.ad_types, a
        }

        function q(e) {
            var r = [],
                t = {};
            if (k.isArray(e) && 2 === e.length && !k.isArray(e[0])) t.width = parseInt(e[0], 10), t.height = parseInt(e[1], 10), r.push(t);
            else if ("object" === s(e))
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    (t = {}).width = parseInt(n[0], 10), t.height = parseInt(n[1], 10), r.push(t)
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
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === v.a
        }

        function W(e, r, t) {
            k.isEmpty(e.video) && (e.video = {}), e.video[r] = t
        }

        function F(e) {
            var r, t;
            r = e.adUnitCode, (t = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && t[0].style.setProperty("display", "none"), e.renderer.push(function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, t) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: t
                    })
                }.bind(null, e))
            })
        }
        Object(g.registerBidder)(R)
    }
}, [265]);
pbjsChunk([0], {
    365: function(t, e, r) {
        t.exports = r(366)
    },
    366: function(module, __webpack_exports__, __webpack_require__) {
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
            __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__ = __webpack_require__(367),
            __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__),
            __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__ = __webpack_require__(8);

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
                        }, e.timeout)), _ = publisherTagAvailable() ? (r = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "4.5.0"), i = __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("enableSendAllBids"), r.setEnableSendAllBids && "function" == typeof r.setEnableSendAllBids && "boolean" == typeof i && r.setEnableSendAllBids(i), o = r.buildCdbUrl(), r.buildCdbRequest()) : (o = buildCdbUrl(s = buildContext(t, e)), buildCdbRequest(s, t, e))) return {
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
            return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), e += "&wv=" + encodeURIComponent("4.5.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), t.amp && (e += "&im=1"), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), e
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
    367: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(368),
            n = r(369);
        e.verify = function(t, e, r, i) {
            var s = new a.BigInteger(a.b64toHex(e)),
                o = new a.BigInteger(a.b64toHex(r)),
                _ = s.modPowInt(i, o);
            return a.removeExtraSymbols(_.toHexString()) === n.Sha256.hash(t)
        }
    },
    368: function(t, e, r) {
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
                0, this.clamp(), r && T.ZERO.subTo(this, this)
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
            for (o.copyTo(i); 0 <= --_;) {
                e.sqrTo(i, s), 0 < (t & 1 << _) ? e.mulTo(s, o, i) : (r = i, i = s, s = r)
            }
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
    369: function(t, e, r) {
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
            o[s - 1][14] = Math.floor(n), o[s - 1][15] = p;
            for (_ = 0; _ < s; _++) {
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
}, [365]);
pbjsChunk([201], {
    472: function(e, r, i) {
        e.exports = i(473)
    },
    473: function(e, r, i) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), i.d(r, "spec", function() {
            return p
        });
        var T = i(0),
            S = i(2),
            v = i(3),
            t = i(10),
            l = i.n(t),
            a = i(474),
            n = i.n(a),
            s = i(1);

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var o = [S.b, S.d],
            y = 100,
            b = 300,
            h = 3600,
            w = !0,
            x = {
                JPY: 1
            };

        function C(e) {
            var r = {};
            return r.id = e.bidId, r.ext = {}, r.ext.siteID = e.params.siteId, !e.params.hasOwnProperty("id") || "string" != typeof e.params.id && "number" != typeof e.params.id ? r.ext.sid = "".concat(e.params.size[0], "x").concat(e.params.size[1]) : r.ext.sid = String(e.params.id), e.params.hasOwnProperty("bidFloor") && e.params.hasOwnProperty("bidFloorCur") && (r.bidfloor = e.params.bidFloor, r.bidfloorcur = e.params.bidFloorCur), r
        }

        function d(e) {
            return Array.isArray(e) && 2 === e.length && n()(e[0]) && n()(e[1])
        }

        function A(e, r) {
            if (d(e)) return e[0] === r[0] && e[1] === r[1];
            for (var i = 0; i < e.length; i++)
                if (e[i][0] === r[0] && e[i][1] === r[1]) return 1
        }

        function j(e, r, i, t) {
            var a = [],
                n = {},
                s = e[0].userId;
            if (s && "object" === g(s) && s.idl_env && function(e, r, i, t, a, n) {
                    if (i) return r[a] = 1, e.push({
                        source: t,
                        uids: [{
                            id: i,
                            ext: {
                                rtiPartner: n
                            }
                        }]
                    });
                    T.logWarn("Tried to add a user ID from Prebid, the ID received was null")
                }(a, n, s.idl_env, "liveramp.com", "LiveRampIp", "idl"), window.headertag && "function" == typeof window.headertag.getIdentityInfo) {
                var o, d = window.headertag.getIdentityInfo();
                if (d && "object" === g(d))
                    for (var p in d) {
                        d.hasOwnProperty(p) && (n.hasOwnProperty(p) || !(o = d[p]).responsePending && o.data && "object" === g(o.data) && Object.keys(o.data).length && a.push(o.data))
                    }
            }
            var m, c = {};
            c.id = e[0].bidderRequestId, c.imp = i, c.site = {}, c.ext = {}, c.ext.source = "prebid", e[0].schain && (c.source = {
                ext: {
                    schain: e[0].schain
                }
            }), 0 < a.length && (c.user = {}, c.user.eids = a), document.referrer && "" !== document.referrer && (c.site.ref = document.referrer), r && (r.gdprConsent && ((m = r.gdprConsent).hasOwnProperty("gdprApplies") && (c.regs = {
                ext: {
                    gdpr: m.gdprApplies ? 1 : 0
                }
            }), m.hasOwnProperty("consentString") && (c.user = c.user || {}, c.user.ext = {
                consent: m.consentString || ""
            })), r.uspConsent && T.deepSetValue(c, "regs.ext.us_privacy", r.uspConsent), r.refererInfo && (c.site.page = r.refererInfo.referer));
            var u = {},
                f = r && r.bidderCode || "ix",
                l = v.b.getConfig(f);
            if (l) {
                if ("object" === g(l.firstPartyData)) {
                    var y = l.firstPartyData,
                        b = "?";
                    for (var h in y) y.hasOwnProperty(h) && (b += "".concat(encodeURIComponent(h), "=").concat(encodeURIComponent(y[h]), "&"));
                    b = b.slice(0, -1), c.site.page += b
                }
                "number" == typeof l.timeout && (u.t = l.timeout)
            }
            return u.s = e[0].params.siteId, u.v = t, u.r = JSON.stringify(c), u.ac = "j", u.sd = 1, 8.1 === t && (u.nf = 1), {
                method: "GET",
                url: "https://htlb.casalemedia.com/cygnus",
                data: u
            }
        }

        function F(e, r) {
            for (var i = 0; i < e.length; i++)
                if (r[0] == e[i][0] && r[1] == e[i][1]) return e.splice(i, 1), 1
        }
        var p = {
            code: "ix",
            gvlid: 10,
            supportedMediaTypes: o,
            isBidRequestValid: function(e) {
                if (!d(e.params.size)) return T.logError("ix bidder params: bid size has invalid format."), !1;
                if (!A(e.sizes, e.params.size)) return T.logError("ix bidder params: bid size is not included in ad unit sizes."), !1;
                if (e.hasOwnProperty("mediaType") && !T.contains(o, e.mediaType)) return !1;
                if (e.hasOwnProperty("mediaTypes") && !T.deepAccess(e, "mediaTypes.banner.sizes") && !T.deepAccess(e, "mediaTypes.video.playerSize")) return !1;
                if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId) return T.logError("ix bidder params: siteId must be string or number value."), !1;
                var r, i, t = e.params.hasOwnProperty("bidFloor"),
                    a = e.params.hasOwnProperty("bidFloorCur");
                return !!(!t && !a || t && a && (r = e.params.bidFloor, i = e.params.bidFloorCur, Boolean("number" == typeof r && "string" == typeof i && i.match(/^[A-Z]{3}$/)))) || (T.logError("ix bidder params: bidFloor / bidFloorCur parameter has invalid format."), !1)
            },
            buildRequests: function(e, r) {
                for (var i, t, a, n, s, o, d, p, m, c, u, f, l, y = [], b = [], h = [], v = null, g = {}, w = 0; w < e.length; w++) {
                    (v = e[w]).mediaType !== S.d && !T.deepAccess(v, "mediaTypes.video") || (v.mediaType === S.d || A(v.mediaTypes.video.playerSize, v.params.size) ? h.push(function(e) {
                        var r = C(e);
                        r.video = T.deepClone(e.params.video), r.video.w = e.params.size[0], r.video.h = e.params.size[1];
                        var i = T.deepAccess(e, "mediaTypes.video.context");
                        return i && ("instream" === i ? r.video.placement = 1 : "outstream" === i ? r.video.placement = 4 : T.logWarn("ix bidder params: video context '".concat(i, "' is not supported"))), r
                    }(v)) : T.logError("Bid size is not included in video playerSize")), v.mediaType !== S.b && !T.deepAccess(v, "mediaTypes.banner") && (v.mediaType || v.mediaTypes) || (c = void 0, (c = C(m = v)).banner = {}, c.banner.w = m.params.size[0], c.banner.h = m.params.size[1], c.banner.topframe = T.inIframe() ? 0 : 1, i = c, b.push(i), a = g, n = i, p = d = o = s = void 0, p = (t = v).transactionId, a.hasOwnProperty(p) ? (s = [], a[p].hasOwnProperty("missingSizes") && (s = a[p].missingSizes), F(s, t.params.size), a[p].missingSizes = s) : T.deepAccess(t, "mediaTypes.banner.sizes") && (F(o = T.deepClone(t.mediaTypes.banner.sizes), t.params.size), d = {
                        missingSizes: o,
                        impression: n
                    }, a[p] = d))
                }
                for (var x in g)
                    if (g.hasOwnProperty(x))
                        for (var I = g[x].missingSizes, P = 0; P < I.length; P++) {
                            var z = g[x].impression,
                                O = (u = z, f = I[P], l = void 0, (l = T.deepClone(u)).ext.sid = "".concat(f[0], "x").concat(f[1]), l.banner.w = f[0], l.banner.h = f[1], l);
                            b.push(O)
                        }
                return 0 < b.length && y.push(j(e, r, b, 7.2)), 0 < h.length && y.push(j(e, r, h, 8.1)), y
            },
            interpretResponse: function(e, r) {
                var i = [];
                if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid")) return i;
                for (var t, a, n, s, o = e.body, d = o.seatbid, p = 0; p < d.length; p++)
                    if (d[p].hasOwnProperty("bid"))
                        for (var m = d[p].bid, c = JSON.parse(r.data.r), u = 0; u < m.length; u++) {
                            var f = function(r, e) {
                                if (r) return l()(e, function(e) {
                                    return e.id === r
                                })
                            }(m[u].impid, c.imp);
                            t = m[u], a = o.cur, n = f, s = void 0, s = {}, x.hasOwnProperty(a) ? s.cpm = t.price / x[a] : s.cpm = t.price / y, s.requestId = t.impid, s.dealId = T.deepAccess(t, "ext.dealid"), s.netRevenue = w, s.currency = a, s.creativeId = t.hasOwnProperty("crid") ? t.crid : "-", T.deepAccess(t, "ext.vasturl") ? (s.vastUrl = t.ext.vasturl, s.width = n.video.w, s.height = n.video.h, s.mediaType = S.d, s.ttl = h) : (s.ad = t.adm, s.width = t.w, s.height = t.h, s.mediaType = S.b, s.ttl = b), s.meta = {}, s.meta.networkId = T.deepAccess(t, "ext.dspid"), s.meta.brandId = T.deepAccess(t, "ext.advbrandid"), s.meta.brandName = T.deepAccess(t, "ext.advbrand"), t.adomain && 0 < t.adomain.length && (s.meta.advertiserDomains = t.adomain), i.push(s)
                        }
                return i
            },
            transformBidParams: function(e) {
                return T.convertTypes({
                    siteID: "number"
                }, e)
            },
            getUserSyncs: function(e) {
                return e.iframeEnabled ? [{
                    type: "iframe",
                    url: "https://js-sec.indexww.com/um/ixmatch.html"
                }] : []
            }
        };
        Object(s.registerBidder)(p)
    }
}, [472]);
pbjsChunk([158], {
    579: function(e, t, r) {
        e.exports = r(580)
    },
    580: function(e, t, r) {
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
            p = r(2);

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
        var a = [p.b, p.d],
            u = "hb_pb",
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
                            return r = t, d.deepAccess(r, "mediaTypes.video") && !d.deepAccess(r, "mediaTypes.banner") || r.mediaType === p.d ? e[0].push(t) : e[1].push(t), e
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
                            }(e, p.b);
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
                    return ((/avjp$/.test(t.url) ? p.d : p.b) === p.d ? function(e, t) {
                        var r = t.bid,
                            n = (t.startTime, []); {
                            var i, a;
                            void 0 !== e && "" !== e.vastUrl && 0 < e.pub_rev && (i = d.parseUrl(e.vastUrl).search || {}, (a = {}).requestId = r.bidId, a.ttl = 300, a.netRevenue = !0, a.currency = e.currency, a.cpm = parseInt(e.pub_rev, 10) / 1e3, a.width = parseInt(e.width, 10), a.height = parseInt(e.height, 10), a.creativeId = e.adid, a.vastUrl = e.vastUrl, a.mediaType = p.d, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, n.push(a))
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
                    bc: e[0].params.bc || "".concat(u, "_").concat(m),
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
}, [579]);
pbjsChunk([120], {
    678: function(e, r, t) {
        e.exports = t(679)
    },
    679: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "FASTLANE_ENDPOINT", function() {
            return a
        }), t.d(r, "VIDEO_ENDPOINT", function() {
            return S
        }), t.d(r, "SYNC_ENDPOINT", function() {
            return s
        }), t.d(r, "spec", function() {
            return A
        }), r.hasVideoMediaType = l, r.masSizeOrdering = g, r.determineRubiconVideoSizeId = k, r.getPriceGranularity = T, r.hasValidVideoParams = w, r.hasValidSupplyChainParams = R, r.encodeParam = E, r.resetUserSync = function() {
            z = !1
        };
        var b = t(0),
            i = t(1),
            y = t(3),
            p = t(2),
            n = t(10),
            m = t.n(n);

        function x(e, r) {
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

        function h() {
            return (h = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }

        function v(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }

        function _(e) {
            return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var a = "https://fastlane.rubiconproject.com/a/api/fastlane.json",
            S = "https://prebid-server.rubiconproject.com/openrtb2/auction",
            s = "https://eus.rubiconproject.com/usync.html",
            c = {
                FASTLANE: {
                    id: "dt.id",
                    keyv: "dt.keyv",
                    pref: "dt.pref"
                },
                PREBID_SERVER: {
                    id: "id",
                    keyv: "keyv"
                }
            },
            u = {
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
                288: "640x380"
            };
        b._each(u, function(e, r) {
            return u[e] = r
        });
        var A = {
            code: "rubicon",
            gvlid: 52,
            supportedMediaTypes: [p.b, p.d],
            isBidRequestValid: function(e) {
                if ("object" !== _(e.params)) return !1;
                for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                    if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return b.logError("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
                var i = f(e, !0);
                return !!i && ("video" !== i || w(e))
            },
            buildRequests: function(e, g) {
                var n, r = e.filter(function(e) {
                    return "video" === f(e)
                }).map(function(e) {
                    e.startTime = (new Date).getTime();
                    var r, t, i = {
                        id: e.transactionId,
                        test: y.b.getConfig("debug") ? 1 : 0,
                        cur: ["USD"],
                        source: {
                            tid: e.transactionId
                        },
                        tmax: y.b.getConfig("TTL") || 1e3,
                        imp: [{
                            exp: 300,
                            id: e.adUnitCode,
                            secure: 1,
                            ext: v({}, e.bidder, e.params),
                            video: b.deepAccess(e, "mediaTypes.video") || {}
                        }],
                        ext: {
                            prebid: {
                                cache: {
                                    vastxml: {
                                        returnCreative: !1
                                    }
                                },
                                targeting: {
                                    includewinners: !0,
                                    includebidderkeys: !1,
                                    pricegranularity: T(y.b)
                                },
                                bidders: {
                                    rubicon: {
                                        integration: y.b.getConfig("rubicon.int_type") || "pbjs"
                                    }
                                }
                            }
                        }
                    };
                    if ("rubicon" !== e.bidder && (i.ext.prebid.aliases = v({}, e.bidder, "rubicon")), "function" != typeof e.getFloor || y.b.getConfig("rubicon.disableFloors")) r = parseFloat(b.deepAccess(e, "params.floor"));
                    else {
                        try {
                            t = e.getFloor({
                                currency: "USD",
                                mediaType: "video",
                                size: j(e, "video")
                            })
                        } catch (e) {
                            b.logError("Rubicon: getFloor threw an error: ", e)
                        }
                        r = "object" !== _(t) || "USD" !== t.currency || isNaN(parseInt(t.floor)) ? void 0 : parseFloat(t.floor)
                    }
                    isNaN(r) || (i.imp[0].bidfloor = r), i.imp[0].ext[e.bidder].video.size_id = k(e),
                        function(r, t, e) {
                            if (!r) return;
                            "object" === _(y.b.getConfig("app")) ? r.app = y.b.getConfig("app") : r.site = {
                                page: C(t, e)
                            };
                            "object" === _(y.b.getConfig("device")) && (r.device = y.b.getConfig("device"));
                            t.params.video.language && ["site", "device"].forEach(function(e) {
                                r[e] && (r[e].content = h({
                                    language: t.params.video.language
                                }, r[e].content))
                            })
                        }(i, e, g),
                        function(e, r) {
                            "object" === _(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                            "object" === _(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                            "object" === _(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === r.params.position ? e.imp[0].video.pos = 1 : "btf" === r.params.position && (e.imp[0].video.pos = 3));
                            var t = j(r, "video");
                            e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                        }(i, e);
                    var n, o = I(e, "PREBID_SERVER");
                    o && b.deepSetValue(i, "user.ext.digitrust", o), g.gdprConsent && ("boolean" == typeof g.gdprConsent.gdprApplies && (n = g.gdprConsent.gdprApplies ? 1 : 0), b.deepSetValue(i, "regs.ext.gdpr", n), b.deepSetValue(i, "user.ext.consent", g.gdprConsent.consentString)), g.uspConsent && b.deepSetValue(i, "regs.ext.us_privacy", g.uspConsent);
                    var a, s = b.deepAccess(g, "bids.0.userIdAsEids");
                    s && s.length && (b.deepSetValue(i, "user.ext.eids", s.filter(function(e) {
                        return -1 !== ["adserver.org", "pubcid.org", "liveintent.com", "liveramp.com", "sharedid.org"].indexOf(e.source)
                    })), (a = m()(i.user.ext.eids, function(e) {
                        return "liveintent.com" === e.source
                    })) && (b.deepSetValue(i, "user.ext.tpid", {
                        source: a.source,
                        uid: a.uids[0].id
                    }), a.ext && a.ext.segments && b.deepSetValue(i, "rp.target.LIseg", a.ext.segments)));
                    var c = y.b.getConfig("user.id");
                    c && b.deepSetValue(i, "user.id", c), !0 === y.b.getConfig("coppa") && b.deepSetValue(i, "regs.coppa", 1), e.schain && R(e.schain) && b.deepSetValue(i, "source.ext.schain", e.schain);
                    var d, p = h({}, e.params.inventory, y.b.getConfig("fpd.context")),
                        u = h({}, e.params.visitor, y.b.getConfig("fpd.user"));
                    b.isEmpty(p) && b.isEmpty(u) || (d = {
                        bidders: [g.bidderCode],
                        config: {
                            fpd: {}
                        }
                    }, b.isEmpty(p) || (d.config.fpd.site = p), b.isEmpty(u) || (d.config.fpd.user = u), b.deepSetValue(i, "ext.prebid.bidderconfig.0", d));
                    var l = b.deepAccess(e, "fpd.context.pbAdSlot");
                    "string" == typeof l && l && b.deepSetValue(i.imp[0].ext, "context.data.pbadslot", l);
                    var f = b.deepAccess(e, "fpd.context.adServer.adSlot");
                    return "string" == typeof f && f && b.deepSetValue(i.imp[0].ext, "context.data.adslot", f), e.storedAuctionResponse && b.deepSetValue(i.imp[0], "ext.prebid.storedauctionresponse.id", e.storedAuctionResponse.toString()), b.deepSetValue(i.imp[0], "ext.prebid.auctiontimestamp", g.auctionStart), {
                        method: "POST",
                        url: S,
                        data: i,
                        bidRequest: e
                    }
                });
                return !0 !== y.b.getConfig("rubicon.singleRequest") ? r.concat(e.filter(function(e) {
                    return "banner" === f(e)
                }).map(function(e) {
                    var i = A.createSlotParams(e, g);
                    return {
                        method: "GET",
                        url: a,
                        data: A.getOrderedParams(i).reduce(function(e, r) {
                            var t = i[r];
                            return b.isStr(t) && "" !== t || b.isNumber(t) ? "".concat(e).concat(E(r, t), "&") : e
                        }, "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    }
                })) : (n = e.filter(function(e) {
                    return "banner" === f(e)
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
                            return A.createSlotParams(e, g)
                        }));
                        r.push({
                            method: "GET",
                            url: a,
                            data: A.getOrderedParams(i).reduce(function(e, r) {
                                var t = i[r];
                                return b.isStr(t) && "" !== t || b.isNumber(t) ? "".concat(e).concat(E(r, t), "&") : e
                            }, "") + "slots=".concat(e.length, "&rand=").concat(Math.random()),
                            bidRequest: e
                        })
                    }), r
                }, [])))
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/,
                    t = /^tg_i/,
                    i = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "rp_schain", "tpid_tdid", "tpid_liveintent.com", "tg_v.LIseg", "dt.id", "dt.keyv", "dt.pref", "rf", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter(function(e) {
                        return r.test(e)
                    })).concat(Object.keys(e).filter(function(e) {
                        return t.test(e)
                    })).concat(["tk_flint", "x_source.tid", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return i.concat(Object.keys(e).filter(function(e) {
                    return -1 === i.indexOf(e)
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
                    o = x(i.latLong || [], 2),
                    a = o[0],
                    s = o[1],
                    c = y.b.getConfig("rubicon.int_type"),
                    d = {
                        account_id: i.accountId,
                        site_id: i.siteId,
                        zone_id: i.zoneId,
                        size_id: n[0],
                        alt_size_ids: n.slice(1).join(",") || void 0,
                        rp_floor: .01 < (i.floor = parseFloat(i.floor)) ? i.floor : .01,
                        rp_secure: "1",
                        tk_flint: "".concat(c || "pbjs_lite", "_v4.5.0"),
                        "x_source.tid": e.transactionId,
                        "x_source.pchain": i.pchain,
                        p_screen_res: [window.screen.width, window.screen.height].join("x"),
                        tk_user_key: i.userId,
                        "p_geo.latitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: C(e, r)
                    };
                if ("function" == typeof e.getFloor && !y.b.getConfig("rubicon.disableFloors")) {
                    try {
                        t = e.getFloor({
                            currency: "USD",
                            mediaType: "banner",
                            size: "*"
                        })
                    } catch (e) {
                        b.logError("Rubicon: getFloor threw an error: ", e)
                    }
                    d.rp_hard_floor = "object" !== _(t) || "USD" !== t.currency || isNaN(parseInt(t.floor)) ? void 0 : t.floor
                }
                d.p_pos = "atf" === i.position || "btf" === i.position ? i.position : "", e.userId && (e.userId.tdid && (d.tpid_tdid = e.userId.tdid), e.userId.lipb && e.userId.lipb.lipbid && (d["tpid_liveintent.com"] = e.userId.lipb.lipbid, Array.isArray(e.userId.lipb.segments) && e.userId.lipb.segments.length && (d["tg_v.LIseg"] = e.userId.lipb.segments.join(","))), e.userId.idl_env && (d.x_liverampidl = e.userId.idl_env), e.userId.sharedid && (d["eid_sharedid.org"] = "".concat(e.userId.sharedid.id, "^3^").concat(e.userId.sharedid.third)));
                var p = y.b.getConfig("user.id");
                p && (d.ppuid = p), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (d.gdpr = Number(r.gdprConsent.gdprApplies)), d.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (d.us_privacy = encodeURIComponent(r.uspConsent));
                var u = h({}, i.visitor, y.b.getConfig("fpd.user"));
                Object.keys(u).forEach(function(e) {
                    null != u[e] && "keywords" !== e && (d["tg_v.".concat(e)] = "object" !== _(u[e]) || Array.isArray(u[e]) ? u[e].toString() : JSON.stringify(u[e]))
                });
                var l = h({}, i.inventory, y.b.getConfig("fpd.context"));
                Object.keys(l).forEach(function(e) {
                    null != l[e] && "keywords" !== e && (d["tg_i.".concat(e)] = "object" !== _(l[e]) || Array.isArray(l[e]) ? l[e].toString() : JSON.stringify(l[e]))
                });
                var f = (i.keywords || []).concat(b.deepAccess(y.b.getConfig("fpd.user"), "keywords") || [], b.deepAccess(y.b.getConfig("fpd.context"), "keywords") || []);
                d.kw = Array.isArray(f) && f.length ? f.join(",") : "";
                var g = b.deepAccess(e, "fpd.context.pbAdSlot");
                "string" == typeof g && g && (d["tg_i.pbadslot"] = g.replace(/^\/+/, ""));
                var m = b.deepAccess(e, "fpd.context.adServer.adSlot");
                "string" == typeof m && m && (d["tg_i.dfp_ad_unit_code"] = m.replace(/^\/+/, ""));
                var v = I(e, "FASTLANE");
                return h(d, v), !0 === y.b.getConfig("coppa") && (d.coppa = 1), e.schain && R(e.schain) && (d.rp_schain = A.serializeSupplyChain(e.schain)), d
            },
            serializeSupplyChain: function(e) {
                if (!R(e)) return "";
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
                if (!(c = c.body) || "object" !== _(c)) return [];
                if (c.seatbid) {
                    var r = b.deepAccess(c, "ext.errors.rubicon");
                    Array.isArray(r) && 0 < r.length && b.logWarn("Rubicon: Error in video response");
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
                                netRevenue: !1 !== y.b.getConfig("rubicon.netRevenue"),
                                width: e.w || b.deepAccess(d, "mediaTypes.video.w") || b.deepAccess(d, "params.video.playerWidth"),
                                height: e.h || b.deepAccess(d, "mediaTypes.video.h") || b.deepAccess(d, "params.video.playerHeight")
                            };
                            e.id && (r.seatBidId = e.id), e.dealid && (r.dealId = e.dealid);
                            var t, i = b.deepAccess(c, "ext.responsetimemillis.rubicon");
                            d && i && (d.serverResponseTimeMs = i), b.deepAccess(e, "ext.prebid.type") === p.d ? (r.mediaType = p.d, (t = b.deepAccess(e, "ext.prebid.targeting")) && "object" === _(t) && (r.adserverTargeting = t), e.ext.prebid.cache && "object" === _(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : t && t.hb_uuid && t.hb_cache_host && t.hb_cache_path && (r.videoCacheKey = t.hb_uuid, r.vastUrl = "https://".concat(t.hb_cache_host).concat(t.hb_cache_path, "?uuid=").concat(t.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)) : b.logWarn("Rubicon: video response received non-video media type"), o.push(r)
                        })
                    }), o
                }
                var t = c.ads;
                return "object" !== _(d) || Array.isArray(d) || "video" !== f(d) || "object" !== _(t) || (t = t[d.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i, n, o, a, s = Array.isArray(d) ? d[t] : d;
                    return s && "object" === _(s) ? (i = {
                        requestId: s.bidId,
                        currency: "USD",
                        creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                        cpm: r.cpm || 0,
                        dealId: r.deal,
                        ttl: 300,
                        netRevenue: !1 !== y.b.getConfig("rubicon.netRevenue"),
                        rubicon: {
                            advertiserId: r.advertiser,
                            networkId: r.network
                        },
                        meta: {
                            advertiserId: r.advertiser,
                            networkId: r.network
                        }
                    }, r.creative_type && (i.mediaType = r.creative_type), r.creative_type === p.d ? (i.width = s.params.video.playerWidth, i.height = s.params.video.playerHeight, i.vastUrl = r.creative_depot_url, i.impression_id = r.impression_id, i.videoCacheKey = r.impression_id) : (i.ad = (o = r.script, a = r.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(a, "'>\n<script type='text/javascript'>").concat(o, "<\/script>\n</div>\n</body>\n</html>")), n = x(u[r.size_id].split("x").map(function(e) {
                        return Number(e)
                    }), 2), i.width = n[0], i.height = n[1]), i.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function(e, r) {
                        return e[r.key] = r.values[0], e
                    }, {
                        rpfl_elemid: s.adUnitCode
                    }), e.push(i)) : b.logError("Rubicon: bidRequest undefined at index position:".concat(t), d, c), e
                }, []).sort(function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0)
                })
            },
            getUserSyncs: function(e, r, t, i) {
                if (!z && e.iframeEnabled) {
                    var n = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? n += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : n += "?gdpr_consent=".concat(t.consentString)), i && (n += "".concat(n ? "&" : "?", "us_privacy=").concat(encodeURIComponent(i))), z = !0, {
                        type: "iframe",
                        url: s + n
                    }
                }
            },
            transformBidParams: function(e) {
                return b.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e)
            }
        };

        function I(e, r) {
            var t, i = 0 < arguments.length && void 0 !== e ? e : {},
                n = 1 < arguments.length ? r : void 0;
            if (!n || !c[n]) return null;
            var o = c[n];
            var a = function() {
                var e = b.deepAccess(i, "userId.digitrustid.data");
                if (e) return e;
                var r = window.DigiTrust && (y.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: "T9QSFKPDN9"
                }));
                return r && r.success && r.identity || null
            }();
            if (!a || a.privacy && a.privacy.optout) return null;
            var s = (v(t = {}, o.id, a.id), v(t, o.keyv, a.keyv), t);
            return o.pref && (s[o.pref] = 0), s
        }

        function C(e, r) {
            var t = y.b.getConfig("pageUrl"),
                t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer;
            return e.params.secure ? t.replace(/^http:/i, "https:") : t
        }

        function j(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(b.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== b.deepAccess(e, "mediaTypes.banner.sizes") ? n = d(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = d(e.sizes) : b.logWarn("Rubicon: no sizes are setup or found"), g(n)
        }

        function d(e) {
            return b.parseSizesInput(e).reduce(function(e, r) {
                var t = parseInt(u[r], 10);
                return t && e.push(t), e
            }, [])
        }

        function l(e) {
            return "object" === _(b.deepAccess(e, "params.video")) && void 0 !== b.deepAccess(e, "mediaTypes.".concat(p.d))
        }

        function f(e, r) {
            var t = 1 < arguments.length && void 0 !== r && r;
            return l(e) ? -1 === ["outstream", "instream"].indexOf(b.deepAccess(e, "mediaTypes.".concat(p.d, ".context"))) ? void(t && b.logError("Rubicon: mediaTypes.video.context must be outstream or instream")) : j(e, "video").length < 2 ? void(t && b.logError("Rubicon: could not determine the playerSize of the video")) : (t && b.logMessage("Rubicon: making video request for adUnit", e.adUnitCode), "video") : 0 === j(e, "banner").length ? void(t && b.logError("Rubicon: could not determine the sizes for banner request")) : (t && b.logMessage("Rubicon: making banner request for adUnit", e.adUnitCode), "banner")
        }

        function g(e) {
            var n = [15, 2, 9];
            return e.sort(function(e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            })
        }

        function k(e) {
            var r = parseInt(b.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === b.deepAccess(e, "mediaTypes.".concat(p.d, ".context")) ? 203 : 201 : r
        }

        function T(e) {
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

        function w(r) {
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
                Object.prototype.toString.call(b.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, b.logError("Rubicon: mediaTypes.video." + e + " is required and must be of type: " + n[e]))
            }), t
        }

        function R(e) {
            var r = !1,
                t = ["asi", "sid", "hp"];
            return e.nodes && ((r = e.nodes.reduce(function(e, r) {
                return e ? t.every(function(e) {
                    return r.hasOwnProperty(e)
                }) : e
            }, !0)) || b.logError("Rubicon: required schain params missing")), r
        }

        function E(e, r) {
            return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r))
        }
        var z = !1;
        Object(i.registerBidder)(A)
    }
}, [678]);
pbjsChunk([98], {
    736: function(e, r, t) {
        e.exports = t(737)
    },
    737: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return i
        });
        var c = t(0),
            n = t(1),
            s = t(2),
            i = {
                code: "sovrn",
                supportedMediaTypes: [s.b],
                isBidRequestValid: function(e) {
                    return !(!e.params.tagid || isNaN(parseFloat(e.params.tagid)) || !isFinite(e.params.tagid))
                },
                buildRequests: function(e, r) {
                    try {
                        var n, i, s, a = [];
                        c._each(e, function(e) {
                            s = s || c.deepAccess(e, "userId.tdid"), e.schain && (i = i || e.schain), n = n || c.getBidIdParameter("iv", e.params);
                            var r = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes || e.sizes,
                                t = (r = (r = c.isArray(r) && c.isArray(r[0]) ? r : [r]).filter(function(e) {
                                    return c.isArray(e)
                                })).map(function(e) {
                                    return {
                                        w: parseInt(e[0], 10),
                                        h: parseInt(e[1], 10)
                                    }
                                });
                            a.push({
                                adunitcode: e.adUnitCode,
                                id: e.bidId,
                                banner: {
                                    format: t,
                                    w: 1,
                                    h: 1
                                },
                                tagid: String(c.getBidIdParameter("tagid", e.params)),
                                bidfloor: c.getBidIdParameter("bidfloor", e.params)
                            })
                        });
                        var t, d = r.refererInfo.referer,
                            o = c.parseUrl(d).hostname,
                            p = {
                                id: c.getUniqueIdentifierStr(),
                                imp: a,
                                site: {
                                    page: d,
                                    domain: o
                                }
                            };
                        i && (p.source = {
                            ext: {
                                schain: i
                            }
                        }), r.gdprConsent && (c.deepSetValue(p, "regs.ext.gdpr", +r.gdprConsent.gdprApplies), c.deepSetValue(p, "user.ext.consent", r.gdprConsent.consentString)), r.uspConsent && c.deepSetValue(p, "regs.ext.us_privacy", r.uspConsent), s && (t = [{
                            source: "adserver.org",
                            uids: [{
                                id: s,
                                ext: {
                                    rtiPartner: "TDID"
                                }
                            }]
                        }], c.deepSetValue(p, "user.ext.eids", t));
                        var u = "https://ap.lijit.com/rtb/bid?src=prebid_prebid_4.5.0";
                        return n && (u += "&iv=".concat(n)), {
                            method: "POST",
                            url: u,
                            data: JSON.stringify(p),
                            options: {
                                contentType: "text/plain"
                            }
                        }
                    } catch (e) {
                        c.logError("Could not build bidrequest, error deatils:", e)
                    }
                },
                interpretResponse: function(e) {
                    var r = e.body,
                        t = r.id,
                        n = r.seatbid;
                    try {
                        var i = [];
                        return t && n && 0 < n.length && n[0].bid && 0 < n[0].bid.length && n[0].bid.map(function(e) {
                            i.push({
                                requestId: e.impid,
                                cpm: parseFloat(e.price),
                                width: parseInt(e.w),
                                height: parseInt(e.h),
                                creativeId: e.crid || e.id,
                                dealId: e.dealid || null,
                                currency: "USD",
                                netRevenue: !0,
                                mediaType: s.b,
                                ad: decodeURIComponent("".concat(e.adm, '<img src="').concat(e.nurl, '">')),
                                ttl: 60
                            })
                        }), i
                    } catch (e) {
                        c.logError("Could not intrepret bidresponse, error deatils:", e)
                    }
                },
                getUserSyncs: function(e, r, t, n) {
                    try {
                        var i, s, a = [];
                        return r && 0 !== r.length && (e.iframeEnabled && (i = r.filter(function(e) {
                            return c.deepAccess(e, "body.ext.iid")
                        }).map(function(e) {
                            return e.body.ext.iid
                        }), s = [], t && t.gdprApplies && "string" == typeof t.consentString && s.push(["gdpr_consent", t.consentString]), n && s.push(["us_privacy", n]), i[0] && (s.push(["informer", i[0]]), a.push({
                            type: "iframe",
                            url: "https://ap.lijit.com/beacon?" + s.map(function(e) {
                                return e.join("=")
                            }).join("&")
                        }))), e.pixelEnabled && r.filter(function(e) {
                            return c.deepAccess(e, "body.ext.sync.pixels")
                        }).reduce(function(e, r) {
                            return e.concat(r.body.ext.sync.pixels)
                        }, []).map(function(e) {
                            return e.url
                        }).forEach(function(e) {
                            return a.push({
                                type: "image",
                                url: e
                            })
                        })), a
                    } catch (e) {
                        return []
                    }
                }
            };
        Object(n.registerBidder)(i)
    }
}, [736]);
pbjs.processQueue();
