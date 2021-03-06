/* Copyright (c) 2008-2020, Quantcast Corp. */ ! function(window) {
    function RequireDependencyError(n) {
        Error.apply(this), this.name = "RequireDependencyError", this.message = n || ""
    }
    RequireDependencyError.prototype = Error.prototype;
    var amd = {},
        definitions = {};
    amd.require = function(n, e) {
        "function" == typeof n && (e = n, n = []);
        for (var t = [], r = 0; r < n.length; r++) {
            var a = n[r];
            if (!definitions.hasOwnProperty(a)) throw new RequireDependencyError("No module named " + a + " has been defined");
            t[r] = definitions[a]
        }
        return e.apply({}, t)
    };
    var array = Array.prototype,
        available = function(n, e) {
            return "function" == typeof n[e]
        },
        map = "map",
        forEach = "forEach",
        reduce = "reduce",
        indexOf = "indexOf";
    with(available(array, map) || (array[map] = function(n, e) {
        var t = [];
        e || (e = this);
        for (var r = 0; r < this.length; r++) t[r] = n.call(e, this[r], r, this);
        return t
    }), available(array, forEach) || (array[forEach] = array[map]), available(array, reduce) || (array[reduce] = function(n, e) {
        var t = 0;
        for (void 0 === e && (e = this[t++]); t < this.length; t++) e = n.call(this, e, this[t], t, this);
        return e
    }), available(array, indexOf) || (array[indexOf] = function(n) {
        for (var e = 0; e < this.length; e++)
            if (this[e] == n) return e;
        return -1
    }), amd.define = function(n, e, t) {
        definitions.hasOwnProperty(n) || (definitions[n] = amd.require(e, t))
    }, amd) define("quant/origin", [], function() {
        return function(n) {
            for (var e = n.domain || "", t = new Date(0).toUTCString(), r = e.split("."), a = 1; a <= r.length; a++) {
                var o = r.slice(-a).join("."),
                    i = "_dlt=1; domain=" + o;
                if (n.cookie = i, /_dlt=1/.test(n.cookie)) return n.cookie = i + "; expires=" + t, o
            }
            return e
        }
    }), define("quant/windows", [], function() {
        return function(n, e) {
            if (void 0 === n) throw new Error("window many not be undefined");
            if (void 0 === e) throw new Error("top may not be undefined");
            e = e.self, this.depth = 0;
            var t = n.self;
            for (this.top = t; t !== e;) {
                t = t.parent.self;
                try {
                    t.location.href && (this.url = t.location.href, this.top = t)
                } catch (n) {}
                this.depth++
            }
            this.locate = function(t) {
                for (var r = n;;) {
                    try {
                        if (t in r.frames) return r
                    } catch (n) {}
                    if (r === e) break;
                    r = r.parent.self
                }
            }
        }
    }), define("quant/log", [], function() {
        function n(n, e) {
            this.isDebug = /qcdbgc=1$/.test(window.location.toString());
            var t = function() {
                    return (new Date).toString()
                },
                r = function(r, a) {
                    "undefined" != typeof console && console.log(r + " " + t() + " " + a), e && "ERROR" == r && n.beacon("//" + e + "/log/" + r.toLowerCase() + "?msg=" + encodeURI(a))
                };
            this.error = function(n, e) {
                void 0 !== e && void 0 !== e.stack && (n += " caused by " + e.message + " at:\n" + e.stack), r("ERROR", n)
            }, this.debug = function(n) {
                this.isDebug && r("DEBUG", n)
            }
        }
        return n
    }), define("quant/ready", [], function() {
        function n() {
            var n = !1,
                e = [];
            document.readyState in {
                complete: !0,
                interactive: !0
            } && (n = !0);
            var t = function() {
                for (n = !0; e.length > 0;) e.shift()()
            };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("load", t, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", t, !1), window.attachEvent("onload", t)), this.ready = function(t) {
                n ? t() : e.push(t)
            }
        }
        return (new n).ready
    }), define("quant/promise", [], function() {
        function n(u) {
            var c, s, f = [],
                l = e,
                d = function(n) {
                    return n
                },
                p = function(n, e, t, r) {
                    try {
                        var o = n(r);
                        a(o) ? (o.then(e), o.catch(t)) : e(o)
                    } catch (n) {
                        t(n)
                    }
                },
                v = function(n) {
                    c = n, l = t, f.forEach(function(e) {
                        e.push(n), p.apply(0, e)
                    })
                },
                h = function(n) {
                    s = n, l = r, f.forEach(function(e) {
                        e[r](n)
                    })
                },
                g = function(n, e, t) {
                    return function(r) {
                        p(n, e, t, r)
                    }
                };
            try {
                u(v, h)
            } catch (n) {
                h(n)
            }
            return {
                then: function(a) {
                    switch (l) {
                        case e:
                            return new n(function(n, e) {
                                f.push([a, n, e])
                            });
                        case t:
                            return o(a(c));
                        case r:
                            return i(s)
                    }
                },
                catch: function(a) {
                    switch (l) {
                        case e:
                            return new n(function(n, e) {
                                f.push([d, n, g(a, n, e)])
                            });
                        case t:
                            return o(c);
                        case r:
                            return o(a(s))
                    }
                }
            }
        }
        var e = 0,
            t = 1,
            r = 2,
            a = function(n) {
                return "object" == typeof n && "then" in n && "function" == typeof n.then
            },
            o = function(n) {
                return a(n) ? n : {
                    then: function(e) {
                        return o(e(n))
                    },
                    catch: function(n) {
                        return this
                    }
                }
            },
            i = function(n) {
                return {
                    then: function(n) {
                        return this
                    },
                    catch: function(e) {
                        return o(e(n))
                    }
                }
            };
        return n.resolve = o, n.reject = i, n.all = function(n) {
            return n.length ? n.map(function(n) {
                return n.then(function(n) {
                    return [n]
                })
            }).reduce(function(n, e) {
                return n.then(function(n) {
                    return e.then(function(e) {
                        return n.concat(e)
                    })
                })
            }) : o([])
        }, n
    }), define("quant/loader", ["quant/ready", "quant/promise"], function(n, e) {
        function t(t, r) {
            var a, o = [];
            n(function() {
                a = r.getElementsByTagName("head")[0]
            });
            var i = function(n) {
                var e = new Image;
                return e.src = n, e
            };
            this.image = function(n) {
                return new e(function(e, t) {
                    var r = i(n);
                    o.push(r), r.onload = function() {
                        e(r), o.shift(), delete r.onload, delete r.onerror
                    }, r.onerror = t
                })
            }, this.beacon = function(n) {
                var e = t.navigator;
                e && e.sendBeacon ? e.sendBeacon(n) : i(n)
            };
            var u = function(n, e, t) {
                var a = r.createElement("script");
                a.type = "text/javascript", a.src = n;
                var o = function() {
                    e(a), a.onreadystatechange = null, a.onload = null, a.onerror = null
                };
                return a.onload = o, a.onreadystatechange = function() {
                    a.readyState in {
                        loaded: 1,
                        complete: 1
                    } && o()
                }, a.onerror = t, a
            };
            this.script = function(t) {
                return new e(function(e, r) {
                    n(function() {
                        var n = u(t, e, r);
                        a.firstChild ? a.insertBefore(n, a.firstChild) : a.appendChild(n)
                    })
                })
            }
        }
        return t
    }), define("quant/json", [], function() {
        var localJSON = window.JSON || {};
        return void 0 !== localJSON.stringify && '{"test":["1"]}' === localJSON.stringify({
            test: ["1"]
        }) || (localJSON.stringify = function(n) {
            var e = typeof n;
            if ("object" !== e || null === n) return "string" === e && (n = '"' + n + '"'), String(n);
            var t, r, a = [],
                o = n && n.constructor === Array;
            for (t in n) r = n[t], "function" !== (e = typeof r) && ("string" === e ? r = '"' + r + '"' : "object" === e && null !== r && (r = localJSON.stringify(r)), a.push((o ? "" : '"' + t + '":') + String(r)));
            return (o ? "[" : "{") + String(a) + (o ? "]" : "}")
        }, localJSON.parse = localJSON.parse || function(string) {
            return eval("(" + string + ")")
        }), localJSON
    }), define("quant/event", [], function() {
        function n() {
            this.add = function(n, e, t) {
                n.addEventListener ? n.addEventListener(e, t) : "function" == typeof jQuery ? jQuery(n).on(e, t) : n.attachEvent && n.attachEvent("on" + e, t)
            }, this.remove = function(n, e, t) {
                n.removeEventListener ? n.removeEventListener(e, t) : "function" == typeof jQuery ? jQuery(n).off(e, t) : n.detachEvent && n.detachEvent("on" + e, t)
            }, this.trigger = function(n, e, t) {
                var r = n.ownerDocument;
                if (n.dispatchEvent && r.createEvent) {
                    var a = r.createEvent("Event");
                    if (a.initEvent(e, !0, !0), void 0 !== t)
                        for (var o in t) o in a || (a[o] = t[o]);
                    n.dispatchEvent(a)
                } else "function" == typeof jQuery && jQuery(n).trigger(e, t)
            }
        }
        return new n
    }), define("quant/now", [], function() {
        return function() {
            return (new Date).getTime()
        }
    }), define("quant/consent/truste", ["quant/json", "quant/promise", "quant/event", "quant/now"], function(n, e, t, r) {
        return function(a, o, i, u, c, s, f, l) {
            var d, p = {},
                v = function(n) {
                    var e = n.source[0];
                    return "p" + n.consent[0] + ("a" == e ? "e" : "i")
                };
            "object" == typeof u && "function" == typeof u.callApi ? (!0, d = function(n, t, r, a) {
                var o = u.callApi(t, a, l, c, r);
                return n.cm = v(o), e.resolve(!0)
            }) : d = function(u, s, f, d) {
                return a.depth > 0 && (t.add(o, "message", function(e) {
                    var t = e.data;
                    if ("string" == typeof t && t.indexOf("PrivacyManagerAPI") > 0) try {
                        t = n.parse(t)
                    } catch (n) {
                        return
                    } else if (void 0 !== t.PrivacyManagerAPI) {
                        var r = t.PrivacyManagerAPI;
                        u.cm = v(r)
                    }
                }), i.postMessage(n.stringify({
                    PrivacyManagerAPI: {
                        timestamp: r(),
                        action: s,
                        self: d,
                        domain: l,
                        authority: c,
                        type: f
                    }
                }), "*")), e.resolve(!0)
            }, this.consent = function(n) {
                return d(n, "getConsent", s, f)
            }, this.parameters = p
        }
    }), define("quant/consent/uspapi", ["quant/promise", "quant/json", "quant/event", "quant/now"], function(n, e, t, r) {
        return function(a, o, i, u, c) {
            var s;
            if ("function" == typeof u) s = function(e, t) {
                return new n(function(n, e) {
                    u("getUSPData", t, function(t, r) {
                        r && void 0 !== t ? n(t.uspString) : e(t)
                    })
                }).catch(function(n) {
                    return i.error("[USPAPI] unsuccessful: " + n), !0
                })
            };
            else {
                var f = (a.locate(c), {});
                t.add(o, "message", function(n) {
                    var t = n.data;
                    if ("string" == typeof t && "{" == t[0]) try {
                        t = e.parse(t)
                    } catch (n) {
                        return
                    }
                    if (t.hasOwnProperty("__uspapiReturn")) {
                        var r = t.__uspapiReturn,
                            a = r.callId,
                            o = f[a];
                        if (void 0 === o) return;
                        r.success ? o[RESOLVE](r.returnValue) : o[REJECT](r.returnValue)
                    }
                }), s = function(e, t) {
                    var o = a.locate(c);
                    if (void 0 === o) return n.resolve(void 0);
                    var i = r();
                    return new n(function(n, r) {
                        f[i] = [n, r], o.postMessage({
                            __uspapiCall: {
                                command: e,
                                version: t,
                                callId: i
                            }
                        })
                    })
                }
            }
            this.consent = function(n) {
                return s("getUSPData", 1).then(function(e) {
                    return e && "string" == typeof e.uspString && (n.us_privacy = e.uspString), !0
                })
            }
        }
    }), define("quant/consent/tcf1.1", ["quant/promise", "quant/json", "quant/event", "quant/now"], function(n, e, t, r) {
        return function(a, o, i, u, c) {
            var s, f;
            if ("function" == typeof u) f = function(e, t) {
                return new n(function(n, r) {
                    u(e, t, function(e, t) {
                        t ? n(e) : r(e)
                    })
                })
            };
            else {
                var l = {};
                t.add(o, "message", function(n) {
                    var t = n.data;
                    if (void 0 === t) return void i.error("[TCF]: Recieved undefined message");
                    if ("string" == typeof t && "{" == t[0]) try {
                        t = e.parse(t)
                    } catch (n) {
                        return
                    }
                    if (t.hasOwnProperty("__cmpReturn")) {
                        var r = t.__cmpReturn,
                            a = r.callId,
                            o = l[a];
                        if (void 0 === o) return;
                        r.success ? o[0](r.returnValue) : o[1](r.returnValue)
                    }
                }), f = function(t, o) {
                    var i = a.locate(c);
                    if (void 0 === i) return n.resolve({
                        gdprApplies: !1
                    });
                    var u = r();
                    return new n(function(n, r) {
                        l[u] = [n, r], i.postMessage(e.stringify({
                            __cmpCall: {
                                command: t,
                                parameter: o,
                                callId: u
                            }
                        }), "*")
                    })
                }
            }
            this.consent = function(n) {
                return void 0 === s && (s = f("getVendorConsents", [11]).then(function(e) {
                    return e.gdprApplies && "false" != e.gdprApplies ? (n.gdpr = 1, f("getConsentData", null).then(function(t) {
                        n.gdpr_consent = t.consentData;
                        var r = e.purposeConsents || e.purposes,
                            a = !0;
                        return "object" == typeof r && (a = r[1]), a && (a = !e.vendorConsents || e.vendorConsents[11]), a
                    })) : (n.gdpr = n.gdpr || 0, !0)
                }).catch(function(e) {
                    return i.error(e), n.gdpr = n.gdpr || 0, !0
                })), s
            }
        }
    }), define("quant/consent-manager", ["quant/promise", "quant/json"], function(n, e) {
        return function(e) {
            var t, r = {},
                a = function(a) {
                    return void 0 === t && (t = n.all(e.map(function(n) {
                        return n.consent(r)
                    })).then(function(n) {
                        return n.reduce(function(n, e) {
                            return n && e
                        }, !0)
                    })), t.then(function(n) {
                        if (n) return a()
                    })
                };
            this.consent = a, this.wrap = function(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return a(function() {
                        return n.apply(e, t)
                    })
                }
            }, this.parameters = r
        }
    }), define("quant/consent/tcf2.0", ["quant/promise", "quant/json", "quant/event", "quant/now"], function(n, e, t, r) {
        function a(n, e) {
            var t = e.gdprApplies,
                r = e.purpose,
                a = e.vendor,
                o = a && a.consents && a.consents[f],
                i = a && a.legitimateInterests && a.legitimateInterests[f],
                u = e.publisher ? e.publisher.restrictions : {};
            return !t || n.map(function(n) {
                var e = !!r.consents && r.consents[n],
                    t = !!r.legitimateInterests && r.legitimateInterests[n],
                    a = u && u[n] ? u[n][f] : null;
                return 0 !== a && (!(!o || !e || 2 === a || -1 == d.indexOf(n) && 1 !== a) || !(1 === a || !i || !t || n === s || -1 != d.indexOf(n) && 2 !== a))
            }).reduce(function(n, e) {
                return n && e
            }, !0)
        }

        function o(o, s, f, d, q) {
            var y, m;
            if ("function" == typeof d) m = function(e, t) {
                return new n(function(n, r) {
                    d(e, p, function(t, a) {
                        if (a) {
                            var o = t.eventStatus;
                            e === v && t.gdprApplies && "useractioncomplete" !== o && "tcloaded" !== o || n(t)
                        } else r(t)
                    }, t)
                })
            };
            else {
                var w = {},
                    _ = {};
                t.add(s, "message", function(n) {
                    var t = n.data;
                    if (void 0 === t) return void f.error(i + "Recieved undefined message");
                    if ("string" == typeof t && "{" == t[0]) try {
                        t = e.parse(t)
                    } catch (n) {
                        return
                    }
                    if (t.hasOwnProperty(h)) {
                        var r = t[h],
                            a = r.callId,
                            o = w[a];
                        if (void 0 === o) return;
                        var s = r.returnValue;
                        r.success ? _[a] === v && s.gdprApplies && "useractioncomplete" !== s.eventStatus && "tcloaded" !== s.eventStatus || o[u](s) : o[c](s)
                    }
                }), m = function(t, a) {
                    var i = o.locate(q);
                    if (void 0 === i) return n.resolve({
                        gdprApplies: !1
                    });
                    var u = r();
                    return new n(function(n, r) {
                        w[u] = [n, r], _[u] = t;
                        var o = {};
                        o[g] = {
                            command: t,
                            parameter: a,
                            version: p,
                            callId: u
                        }, i.postMessage(e.stringify(o), "*")
                    })
                }
            }
            this.consent = function(n) {
                return void 0 === y && (y = m(v).then(function(e) {
                    return e.gdprApplies && "false" != e.gdprApplies ? (n.gdpr = 1, n.gdpr_consent = e.tcString) : n.gdpr = n.gdpr || 0, a(l, e)
                }).catch(function(e) {
                    return f.error(e), n.gdpr = n.gdpr || 0, !0
                })), y
            }
        }
        var i = "[TCF2]: ",
            u = 0,
            c = 1,
            s = "1",
            f = 11,
            l = [s, "3", "7", "8", "9", "10"],
            d = [s, "3"],
            p = 2,
            v = "addEventListener",
            h = "__tcfapiReturn",
            g = "__tcfapiCall";
        return o.resolveConsent = a, o
    }), define("quant/qtrack", [], function() {
        function n(n, e) {
            for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t])
        }

        function e(e, t, o) {
            for (var i = 0; i < r.length; i++) {
                var u = {
                    qacct: r[i],
                    labels: o ? e : "_fp.event." + e,
                    event: "refresh"
                };
                if (n(u, a), void 0 !== t && null !== t)
                    for (var c in t) t.hasOwnProperty(c) && ("product_id" === c && t[c].constructor === Array && (t[c] = t[c].join(",")), u[s[c] || c] = t[c]);
                window._qevents.push(u)
            }
        }

        function t(t, s, f) {
            if (t === i) {
                if (-1 !== r.indexOf(s)) return;
                r.push(s);
                var l = {
                    qacct: s
                };
                n(a, f), n(l, a), window._qevents.push(l)
            } else t === u ? -1 !== o.indexOf(s) ? e(s, f, !1) : console.warn("Unsupported event by track, please use " + c + " for this event.") : t === c && e(s, f, !0)
        }
        var r, a, o = ["PageView", "ViewContent", "Search", "AddToWishlist", "AddToCart", "InitiateCheckout", "AddPaymentInfo", "Purchase", "Lead", "Register", "StartTrial", "Subscribe", "SubmitApplication"],
            i = "init",
            u = "track",
            c = "trackCustom",
            s = {
                order_id: "orderid",
                value: "revenue"
            };
        return function() {
            if (window.qtrack || (window.qtrack = function() {
                    window.qtrack.impl.apply(window.qtrack, arguments)
                }), !window.qtrack.impl && (r = [], a = {}, window.qtrack.impl = t, window.qtrack && window.qtrack.q))
                for (; window.qtrack.q.length > 0;) t.apply(t, window.qtrack.q.shift())
        }
    }), define("quant/hashing", [], function() {
        function n() {
            this.FNV = function(e) {
                var t, r, a, o;
                return t = 2166136261, r = 3386659096, a = n(t, e), o = n(r, e), Math.round(Math.abs(a * o) / 65536).toString(16)
            };
            var n = function(n, e) {
                var t;
                for (t = 0; t < e.length; t++) n ^= e.charCodeAt(t), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                return n
            }
        }
        return new n
    }), define("quant/normalize", ["quant/hashing"], function(n) {
        return function(e, t, r, a, o, i) {
            var u, c = {},
                s = null,
                f = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                l = /^[A-Fa-f0-9]{64}$/,
                d = 2,
                p = {};
            for (u in t) p[u] = void 0 !== t[u], t.hasOwnProperty(u) && "string" == typeof t[u] && ("uid" !== u && "uh" !== u ? "qacct" !== u && (t[u].length > 0 ? c[u + e] = encodeURIComponent(t[u]) : p[u] = !1) : (i || (t[u].match(l) && (d = 1), t[u].match(f) && (d = 0), s = n.FNV(t[u])), delete t[u]));
            for (u in r) r.hasOwnProperty(u) && "string" == typeof r[u] && !p[u] && (c[u + e] = encodeURIComponent(r[u]));
            return c["rf" + e] = "" + o, "string" == typeof s && (t.uh = s, c["uh" + e] = encodeURIComponent(s)), c["uht" + e] = "" + d, c["a" + e] = a, c
        }
    }), define("quant.js", ["quant/origin", "quant/windows", "quant/log", "quant/loader", "quant/consent/truste", "quant/consent/uspapi", "quant/consent/tcf1.1", "quant/consent-manager", "quant/consent/tcf2.0", "quant/qtrack", "quant/normalize", "quant/hashing"], function(n, e, t, r, a, o, i, u, c, s, f, l) {
        return void 0 === window.__qc && (window.__qc = function(s, d, p) {
            if (s.__qc) return s.__qc;
            var v, h, g, q, y, m, w, _, b, E, O, S, P, j, C, I, k, R, x, A, D, N, T, M, z, L, U, V, J, F, B, Q, G, $, W, Z, H, K, X, Y, nn, en, tn, rn, an, on, un, cn, sn = n(d),
                fn = new e(s, s.top),
                ln = new r(s, d),
                dn = new t(ln, "quantcount.com"),
                pn = new u([new a(fn, s, s.top, s.PrivacyManagerAPI, "truste.com", "advertising", "quantserve.com", sn), new o(fn, s, dn, s.__uspapi, "__uspapiLocator"), new i(fn, s, dn, s.__cmp, "__cmpLocator"), new c(fn, s, dn, s.__tcfapi, "__tcfapiLocator")]),
                vn = ["a", "ce", "cm", "dst", "enc", "fpa", "fpan", "je", "ns", "ogl", "rf", "tzo", "sr"],
                hn = ["4dcfa7079941", "127fdf7967f31", "588ab9292a3f", "32f92b0727e5", "22f9aa38dfd3", "a4abfe8f3e04", "18b66bc1325c", "958e70ea2f28", "bdbf0cb4bbb", "65118a0d557", "40a1d9db1864", "18ae3d985046", "3b26460f55d"],
                gn = !1,
                qn = !1,
                yn = 0,
                mn = [],
                wn = [],
                _n = [],
                bn = [],
                En = {},
                On = 0,
                Sn = null,
                Pn = {},
                jn = {},
                Cn = null,
                In = [].slice;
            ! function() {
                var n;
                n = d.createElement("script"), v = "async" in n ? 1 : n.readyState ? 2 : 3, n = null
            }();
            var kn = function(n) {
                try {
                    return {
                        init: E,
                        hash: l.FNV,
                        push: O,
                        rules: $,
                        require: require,
                        hasRules: Z,
                        defaults: Y,
                        __qc: function() {
                            return !0
                        }
                    }[n].apply(null, In.call(arguments, 1))
                } catch (n) {
                    return dn.error(n), !1
                }
            };
            return kn.evts = 0, kn.v = 2, kn.SD = hn, kn.qpixelsent = [], G = function(n) {
                var e, t = n ? n.length || 0 : 0;
                for (e = 0; e < t; e++)
                    if (!n[e]) return !1;
                return !0
            }, X = function(n) {
                (n = n || s._qacct) && (z(bn, n) || bn.push(n))
            }, z = function(n, e) {
                var t, r = n.length;
                for (t = 0; t < r; t++)
                    if (n[t] === e) return !0;
                return !1
            }, V = function(n) {
                return {}.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }, J = function(n) {
                var e, t, r;
                if ("array" === (t = V(n))) return n.slice(0);
                if ("object" === t) {
                    e = {};
                    for (r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
                    return e
                }
                return "string" === t ? "" + n : n
            }, O = function(n, e) {
                C(n, e)
            }, Z = function(n) {
                return z(_n, n)
            }, Y = function(n, e) {
                var t;
                n && (t = Pn[n], t && (e = T(e, t)), e.qacct && delete e.qacct, Pn[n] = e)
            }, nn = function(n) {
                var e, t, r, a, o, i;
                if (y(n)) {
                    o = n;
                    for (a in o) {
                        if ("string" == typeof o[a]) {
                            e = n.event || "load", t = n.media || "webpage", "rule" !== e && "load" !== e || "webpage" !== t && "ad" !== t ? C(n) : (i = n.qacct || s._qacct, n.qacct = i, r = jn[i], r = r ? T(r, n) : n, jn[i] = r), X(n.qacct);
                            break
                        }
                        "object" == typeof o[a] && null != o[a] && nn(o[a])
                    }
                }
            }, T = function(n, e) {
                var t = {};
                return t.qacct = n.qacct || e.qacct, "load" === n.event || "load" === e.event ? t.event = "load" : n.event && e.event ? t.event = n.event || e.event : t.event = null, t.media = null, "webpage" === n.media || "webpage" === e.media ? t.media = "webpage" : "ad" === n.media || "ad" === e.media ? t.media = "ad" : t.media = n.media || e.media, M(t, n, e), M(t, e, n), t.event || delete t.event, t.media || delete t.media, t
            }, M = function(n, e, t) {
                var r, a, o, i, u, c;
                for (r in e) e.hasOwnProperty(r) && !n.hasOwnProperty(r) && (a = e[r], o = t[r], i = "", u = !!a && "string" == typeof a, c = !!o && "string" == typeof o, u && (i = a), u && c && (i += ","), c && (i += o), n[r] = i)
            }, en = function() {
                var n, e, t = [];
                if (!(On > 0)) {
                    U();
                    for (n in jn) jn.hasOwnProperty(n) && jn[n] && (e = jn[n], t.push(e), delete jn[n]);
                    1 == t.length && C(t[0]), t.length > 1 && C(t)
                }
            }, tn = function() {
                var n, e, t, r = [];
                for (t = bn.slice(0), n = 0; n < t.length; n++) e = t[n], Z(e) || r.push(e);
                if (0 === r.length) en();
                else
                    for (n = 0; n < r.length; n++) e = r[n], _n.push(e), D(e)
            }, N = function(n, e, t, r) {
                var a;
                if (n = s.location.protocol + "//" + n, Sn = Sn || d.scripts[0], a = d.createElement("script"), 1 === v) a.src = n, a.async = !0, a.onload = e, t && (a.onerror = function(n) {
                    a.onerror = null, t(n)
                }), Sn.parentNode.insertBefore(a, Sn);
                else if (2 === v) {
                    var o = !1;
                    a.onload = a.onreadystatechange = function() {
                        o || "loaded" != a.readyState && "complete" != a.readyState || (o = !0, a.onreadystatechange = null, e())
                    }, a.src = n, Sn.parentNode.insertBefore(a, Sn)
                } else r && r()
            }, D = function(n) {
                On++, N("rules.quantcount.com/rules-" + n + ".js", function() {
                    En[n] = 2 === v ? 2 : 0, rn()
                }, function(e) {
                    En[n] = 1, rn()
                }, function() {
                    En[n] = 4, rn()
                })
            }, rn = function() {
                On -= On > 0 ? 1 : 0, en()
            }, $ = function() {
                var n, e, t, r = !0;
                if (arguments.length) {
                    for (t = function(n) {
                            r ? nn(n) : C(n, !0)
                        }, n = 0; n < arguments.length; n++) e = In.call(arguments[n], 0), e.splice(1, 0, t), W.apply(null, e);
                    r = !1, gn && en()
                }
            }, W = function(n, e) {
                var t, r, a, o, i, u, c, s = [],
                    f = [],
                    l = e || C;
                if ((r = In.call(arguments, 2)) && r.length) {
                    for (a = r[0] || G, o = r[1], i = r[2], t = i.length, u = 0; u < t; u++) s.push(!1), f.push(null);
                    c = {
                        p: n,
                        f: s,
                        r: a,
                        c: i,
                        a: o,
                        v: f
                    }, Z(n) || _n.push(n), wn.push(c), H(c, l)
                } else _n.push(n), En[n] = 6
            }, H = function(n, e) {
                var t, r = n && n.c ? n.c.length : 0;
                for (t = 0; t < r; t++) ! function(t) {
                    var r, a;
                    try {
                        r = n.c[t][0], a = n.c[t].slice(1), a.splice(0, 0, function(r) {
                            n.f[t] = !0, n.v[t] = r, K(n, e)
                        }), r.apply(null, a)
                    } catch (r) {
                        n.f[t] = !0, n.v[t] = !1, K(n, e)
                    }
                }(t)
            }, K = function(n, e) {
                var t, r, a, o, i, u, c, s = n.a,
                    f = n.f,
                    l = n.v,
                    d = n.r || G;
                if (t = G(f), t && (t = t && d(l)), t)
                    for (i = 0; i < s.length; i++) try {
                        r = s[i][0], a = s[i].length > 1 ? s[i].slice(1) : [], a = a.concat(n.v), o = r.apply(null, a), u = {
                            qacct: n.p,
                            event: "rule"
                        };
                        for (c in o) o.hasOwnProperty(c) && "qacct" !== c && (u[c] = o[c]);
                        e(u)
                    } catch (n) {
                        continue
                    }
            }, h = function() {
                return g(0) !== g(6) ? 1 : 0
            }, g = function(n) {
                var e = new Date(2e3, n, 1, 0, 0, 0, 0),
                    t = e.toGMTString();
                return e - new Date(t.substring(0, t.lastIndexOf(" ") - 1))
            }, q = function(n) {
                return n.replace(/\./g, "%2E").replace(/,/g, "%2C")
            }, y = function(n) {
                return void 0 !== n && null != n
            }, m = function() {
                return Math.round(2147483647 * Math.random())
            }, w = function(n) {
                var e, t, r, a = "",
                    o = d.cookie;
                return o ? (e = o.indexOf(n + "="), t = e + n.length + 1, e > -1 && (r = o.indexOf(";", t), r < 0 && (r = o.length), a = o.substring(t, r)), a) : a
            }, j = function(n) {
                return "P0-" + m() + "-" + n.getTime()
            }, P = function(n, e, t) {
                return ["__qca=", n, "; expires=", e.toGMTString(), "; path=/; domain=", t].join("")
            }, S = function() {
                var n, e, t, r, a = ["", ""];
                if (1 === yn) return a[0] = ";fpan=u;fpa=", a;
                for (n = l.FNV(sn), r = 0; r < hn.length; r++)
                    if (hn[r] === n) return a[0] = ";fpan=u;fpa=", a;
                return e = new Date, t = w("__qca"), t.length > 0 || Cn ? (0 === t.length && (t = Cn, a[1] = P(Cn, new Date(e.getTime() + 338688e5), sn)), a[0] = ";fpan=0;fpa=" + t) : (Cn = j(e), a[1] = P(Cn, new Date(e.getTime() + 338688e5), sn), a[0] = ";fpan=1;fpa=" + Cn), a
            }, _ = function() {
                var n = S()[1];
                n && (d.cookie = n)
            }, b = function(n) {
                d.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=" + sn
            }, B = function(n) {
                var e, t;
                if (n && "object" === V(n))
                    for (t = 0; t < vn.length; t++) e = vn[t], n.hasOwnProperty(e) && n[e] && delete n[e]
            }, x = function(n, e, t) {
                var r, a, o;
                return e && "string" == typeof e.qacct ? r = e.qacct : "string" == typeof s._qacct && (r = s._qacct), r && 0 !== r.length ? (e = F(r, e), delete jn[r], o = Pn[r], a = En[r], y(a) || (a = 3), cn(e, o, t, r) ? null : f(n, e, o, r, a, Q())) : null
            }, R = function(n) {
                var e, t = [];
                for (e in n) n[e] && n.hasOwnProperty(e) && t.push(e + "=" + n[e]);
                return t.join(";")
            }, A = function() {
                var n, e, t, r, a, o = d.getElementsByTagName("meta"),
                    i = "";
                for (n = 0; n < o.length; n++) {
                    if (a = o[n], i.length >= 1e3) return i;
                    y(a) && y(a.attributes) && y(a.attributes.property) && y(a.attributes.property.value) && y(a.content) && (e = a.attributes.property.value, t = a.content, e.length > 3 && "og:" === e.substring(0, 3) && (i.length > 0 && (i += ","), r = t.length > 80 ? 80 : t.length, i += q(e.substring(3, e.length)) + "." + q(t.substring(0, r))))
                }
                return encodeURIComponent(i)
            }, Q = function() {
                var n, e = !1;
                return y(s.external) && (n = s.external, e = "function" == typeof n.InPrivateFilteringEnabled && !0 === n.InPrivateFilteringEnabled()), e || "1" == p.doNotTrack || "yes" === p.doNotTrack || "1" == p.msDoNotTrack
            }, C = function(n, e) {
                var t, r, a, o, i, u, c, f, l, v, g = m(),
                    q = "",
                    w = "",
                    _ = "",
                    b = "",
                    E = "",
                    O = "u",
                    P = "1",
                    j = [];
                if (yn = 0, y(kn.qpixelsent) || (kn.qpixelsent = []), y(n)) {
                    if ("object" === (l = V(n))) a = x("", n, e);
                    else if ("array" === l)
                        for (i = 0; i < n.length; i++) v = x("." + (i + 1), n[i], e), a = 0 === i ? v : T(a, v)
                } else "string" == typeof _qacct && (a = x("", null, e));
                a && (t = p.cookieEnabled ? "1" : "0", void 0 !== p.javaEnabled && (O = p.javaEnabled() ? "1" : "0"), y(s._qmeta) && (w = ";m=" + encodeURIComponent(s._qmeta), s._qmeta = null), self.screen && (q = screen.width + "x" + screen.height + "x" + screen.colorDepth), u = new Date, c = h(), f = S()[0], s.location && s.location.href && (_ = encodeURIComponent(s.location.href)), d && d.referrer && (E = encodeURIComponent(d.referrer)), s.self === s.top && (P = "0"), a.url ? b = _ : a.url = _, a.ref || (a.ref = E || ""), r = A(), o = R(a), j.push("/pixel;r=" + g + ";" + o + f + ";ns=" + P + ";ce=" + t + ";qjs=1;qv=3364aec3-20201006003021"), j.push((a.ref ? "" : ";ref=") + ";d=" + sn + ";je=" + O + ";sr=" + q + ";dst=" + c + ";et=" + u.getTime() + ";tzo=" + u.getTimezoneOffset() + (b ? ";ourl=" + b : "") + w + ";ogl=" + r), mn.push(j), k())
            }, I = function(n) {
                pn.consent(function() {
                    return !0
                }).then(function(n) {
                    return n ? "quantserve.com" : "quantcount.com"
                }).then(function(e) {
                    var t = pn.parameters;
                    return ln.image(["//pixel.", e, n[0], ";cm=", t.cm, 1 === t.gdpr ? ";gdpr=1;gdpr_consent=" + t.gdpr_consent : ";gdpr=0", t.us_privacy ? ";us_privacy=" + t.us_privacy : "", n[1]].join("")).then(function(n) {
                        n && "number" == typeof n.width && 3 === n.width ? b("__qca") : _()
                    })
                })
            }, k = function() {
                for (; mn.length;) I(mn.shift())
            }, an = function() {
                var n, e, t = arguments;
                for (L([].slice.call(t)), e = 0; e < t.length; e++) n = t[e], C(n);
                bn.length ? tn() : en()
            }, L = function(n) {
                var e, t = V(n);
                if ("array" === t)
                    for (e = 0; e < n.length; e++) L(n[e]);
                else "object" === t && X(n.qacct || s._qacct)
            }, U = function() {
                var n;
                if (qn || s._qevents.length || s.ezt.length || "undefined" == typeof _qacct || (C({
                        qacct: s._qacct
                    }), qn = !0), !kn.evts) {
                    for (n in s._qevents) s._qevents[n] !== s._qevents.push && s._qevents.hasOwnProperty(n) && C(s._qevents[n]);
                    for (n in s.ezt) s.ezt[n] !== s.ezt.push && s.ezt.hasOwnProperty(n) && C(s.ezt[n]);
                    s._qevents = {
                        push: an
                    }, s.ezt.push = function() {
                        var n, e = arguments;
                        if (y(s.queueManager))
                            for (n = 0; n < e.length; n++) s.queueManager.push(e[n]);
                        else an.apply(this, arguments)
                    }, kn.evts = 1
                }
            }, un = function(n) {
                var e;
                n && (e = J(n), L(n), s._qevents.push(e), n = null)
            }, on = function(n) {
                n.push = function() {
                    return L([].slice.call(arguments)), tn(), [].push.apply(n, arguments)
                }
            }, cn = function(n, e, t, r) {
                e = e || {};
                var a = (n ? n.media : e.media) || "webpage",
                    o = (n ? n.event : e.event) || "load";
                if ("ad" === a && (yn = 1), "webpage" === a && "load" === o) {
                    for (var i = 0; i < kn.qpixelsent.length; i++)
                        if (kn.qpixelsent[i] === r && !t) return !0;
                    kn.qpixelsent.push(r)
                }
                return !1
            }, F = function(n, e) {
                var t = jn[n];
                return e ? t && (e = T(e, t)) : e = t, B(e), e
            }, E = function() {
                y(s._qevents) || (s._qevents = []), y(s.ezt) || (s.ezt = []), un(s._qoptions), un(s.qcdata), un(s.smarttagdata), kn.evts || (on(s._qevents), on(s.ezt)), L(s.ezt), L(s._qevents), L({
                    qacct: s._qacct
                }), s._qoptions = null, bn.length ? tn() : en(), gn = !0
            }, s.quantserve = s.quantserve || E, kn.quantserve = E, kn
        }(window, window.document, window.navigator)), window.quantserve(), s(), window.__qc
    })
}(window);