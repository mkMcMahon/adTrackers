window.hjSiteSettings = window.hjSiteSettings || {
    "site_id": 1709054,
    "r": 0.1470979406415344,
    "rec_value": 1.0,
    "state_change_listen_mode": "automatic",
    "record": false,
    "continuous_capture_enabled": false,
    "recording_capture_keystrokes": false,
    "anonymize_digits": true,
    "anonymize_emails": true,
    "suppress_all": false,
    "suppress_text": false,
    "suppress_location": false,
    "user_attributes_enabled": false,
    "legal_name": null,
    "privacy_policy_url": null,
    "deferred_page_contents": [],
    "record_targeting_rules": [],
    "feedback_widgets": [],
    "forms": [],
    "heatmaps": [],
    "polls": [],
    "integrations": {
        "optimizely": {
            "tag_recordings": false
        }
    },
    "features": ["settings.billing_v2"]
};

! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 264)
}({
    264: function(e, t) {
        window.hjBootstrap = window.hjBootstrap || function(e, t, n) {
            var o = ["bot", "headless", "google", "baidu", "bing", "msn", "duckduckbot", "teoma", "slurp", "yandex", "phantomjs", "pingdom", "ahrefsbot"].join("|"),
                r = new RegExp(o, "i"),
                a = window.navigator || {
                    userAgent: "unknown"
                },
                i = a.userAgent ? a.userAgent : "unknown";
            if (r.test(i)) console.warn("Hotjar not launching due to suspicious userAgent:", i);
            else {
                var s = function(e, t, n) {
                    window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(n), window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
                };
                s(0, 0, n);
                var d, u, l, c, p = window.document,
                    f = p.head || p.getElementsByTagName("head")[0];
                p.addEventListener && (hj.scriptDomain = e, (d = p.createElement("script")).async = 1, d.src = hj.scriptDomain + t, d.charset = "utf-8", f.appendChild(d), c = ["iframe#_hjRemoteVarsFrame {", "display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;", "}"], (u = p.createElement("style")).type = "text/css", u.styleSheet ? u.styleSheet.cssText = c.join("") : u.appendChild(p.createTextNode(c.join(""))), f.appendChild(u), (l = p.createElement("iframe")).style.cssText = c[1], l.name = "_hjRemoteVarsFrame", l.title = "_hjRemoteVarsFrame", l.id = "_hjRemoteVarsFrame", l.src = "https://" + (window._hjSettings.varsHost || "vars.hotjar.com") + "/box-469cf41adb11dc78be68c1ae7f9457a4.html", l.onload = function() {
                    s.varsLoaded = !0, "undefined" != typeof hj && hj.event && hj.event.signal("varsLoaded")
                }, s.varsJar = l, "interactive" === p.readyState || "complete" === p.readyState || "loaded" === p.readyState ? h() : p.addEventListener("DOMContentLoaded", h), s.revision = "690af0ef14bf", window.hjBootstrap = s)
            }

            function h() {
                setTimeout((function() {
                    p.body.appendChild(l)
                }), 50)
            }
        }, window.hjBootstrap("https://script.hotjar.com/", "modules.e6d659b18986716fc817.js", "1709054")
    }
});
//# sourceMappingURL=hotjar.js.map