/*! For license information please see load.js.LICENSE */ ! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
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
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(i, r, function(t) {
                return e[t]
            }.bind(null, r));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "//s.ntv.io/serve/", n(n.s = 11)
}([function(e, t, n) {
    e.exports = function(e, t, n, i, r) {
        for (t = t.split ? t.split(".") : t, i = 0; i < t.length; i++) e = e ? e[t[i]] : r;
        return e === r ? n : e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        var e = [].map.call(arguments, (function(e) {
            return e.trim()
        })).filter((function(e) {
            return e.length
        })).join("-");
        return e.length ? 1 !== e.length && /[_.\- ]+/.test(e) ? e.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (function(e, t) {
            return t.toUpperCase()
        })) : e[0] === e[0].toLowerCase() && e.slice(1) !== e.slice(1).toLowerCase() ? e : e.toLowerCase() : ""
    }
}, function(e, t) {
    window.ntvLoadStart = (new Date).getTime()
}, function(e, t, n) {
    "use strict";
    e.exports = n(4).polyfill()
}, function(e, t, n) {
    (function(t, n) {
        var i;
        i = function() {
            "use strict";

            function e(e) {
                return "function" == typeof e
            }
            var i = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                r = 0,
                a = void 0,
                o = void 0,
                s = function(e, t) {
                    h[r] = e, h[r + 1] = t, 2 === (r += 2) && (o ? o(v) : b())
                },
                c = "undefined" != typeof window ? window : void 0,
                l = c || {},
                u = l.MutationObserver || l.WebKitMutationObserver,
                d = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                p = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function f() {
                var e = setTimeout;
                return function() {
                    return e(v, 1)
                }
            }
            var h = new Array(1e3);

            function v() {
                for (var e = 0; e < r; e += 2)(0, h[e])(h[e + 1]), h[e] = void 0, h[e + 1] = void 0;
                r = 0
            }
            var m, g, y, E, b = void 0;

            function T(e, t) {
                var n = this,
                    i = new this.constructor(w);
                void 0 === i[S] && U(i);
                var r = n._state;
                if (r) {
                    var a = arguments[r - 1];
                    s((function() {
                        return N(r, i, a, n._result)
                    }))
                } else O(n, i, e, t);
                return i
            }

            function k(e) {
                if (e && "object" == typeof e && e.constructor === this) return e;
                var t = new this(w);
                return R(t, e), t
            }
            d ? b = function() {
                return t.nextTick(v)
            } : u ? (g = 0, y = new u(v), E = document.createTextNode(""), y.observe(E, {
                characterData: !0
            }), b = function() {
                E.data = g = ++g % 2
            }) : p ? ((m = new MessageChannel).port1.onmessage = v, b = function() {
                return m.port2.postMessage(0)
            }) : b = void 0 === c ? function() {
                try {
                    var e = Function("return this")().require("vertx");
                    return void 0 !== (a = e.runOnLoop || e.runOnContext) ? function() {
                        a(v)
                    } : f()
                } catch (e) {
                    return f()
                }
            }() : f();
            var S = Math.random().toString(36).substring(2);

            function w() {}
            var P = void 0,
                I = 1,
                A = 2;

            function C(t, n, i) {
                n.constructor === t.constructor && i === T && n.constructor.resolve === k ? function(e, t) {
                    t._state === I ? D(e, t._result) : t._state === A ? L(e, t._result) : O(t, void 0, (function(t) {
                        return R(e, t)
                    }), (function(t) {
                        return L(e, t)
                    }))
                }(t, n) : void 0 === i ? D(t, n) : e(i) ? function(e, t, n) {
                    s((function(e) {
                        var i = !1,
                            r = function(e, t, n, i) {
                                try {
                                    e.call(t, n, i)
                                } catch (e) {
                                    return e
                                }
                            }(n, t, (function(n) {
                                i || (i = !0, t !== n ? R(e, n) : D(e, n))
                            }), (function(t) {
                                i || (i = !0, L(e, t))
                            }), e._label);
                        !i && r && (i = !0, L(e, r))
                    }), e)
                }(t, n, i) : D(t, n)
            }

            function R(e, t) {
                if (e === t) L(e, new TypeError("You cannot resolve a promise with itself"));
                else if (r = typeof(i = t), null === i || "object" !== r && "function" !== r) D(e, t);
                else {
                    var n = void 0;
                    try {
                        n = t.then
                    } catch (t) {
                        return void L(e, t)
                    }
                    C(e, t, n)
                }
                var i, r
            }

            function _(e) {
                e._onerror && e._onerror(e._result), x(e)
            }

            function D(e, t) {
                e._state === P && (e._result = t, e._state = I, 0 !== e._subscribers.length && s(x, e))
            }

            function L(e, t) {
                e._state === P && (e._state = A, e._result = t, s(_, e))
            }

            function O(e, t, n, i) {
                var r = e._subscribers,
                    a = r.length;
                e._onerror = null, r[a] = t, r[a + I] = n, r[a + A] = i, 0 === a && e._state && s(x, e)
            }

            function x(e) {
                var t = e._subscribers,
                    n = e._state;
                if (0 !== t.length) {
                    for (var i = void 0, r = void 0, a = e._result, o = 0; o < t.length; o += 3) i = t[o], r = t[o + n], i ? N(n, i, r, a) : r(a);
                    e._subscribers.length = 0
                }
            }

            function N(t, n, i, r) {
                var a = e(i),
                    o = void 0,
                    s = void 0,
                    c = !0;
                if (a) {
                    try {
                        o = i(r)
                    } catch (e) {
                        c = !1, s = e
                    }
                    if (n === o) return void L(n, new TypeError("A promises callback cannot return that same promise."))
                } else o = r;
                n._state !== P || (a && c ? R(n, o) : !1 === c ? L(n, s) : t === I ? D(n, o) : t === A && L(n, o))
            }
            var V = 0;

            function U(e) {
                e[S] = V++, e._state = void 0, e._result = void 0, e._subscribers = []
            }
            var M = function() {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(w), this.promise[S] || U(this.promise), i(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? D(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && D(this.promise, this._result))) : L(this.promise, new Error("Array Methods must be provided an Array"))
                    }
                    return e.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === P && t < e.length; t++) this._eachEntry(e[t], t)
                    }, e.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor,
                            i = n.resolve;
                        if (i === k) {
                            var r = void 0,
                                a = void 0,
                                o = !1;
                            try {
                                r = e.then
                            } catch (e) {
                                o = !0, a = e
                            }
                            if (r === T && e._state !== P) this._settledAt(e._state, t, e._result);
                            else if ("function" != typeof r) this._remaining--, this._result[t] = e;
                            else if (n === F) {
                                var s = new n(w);
                                o ? L(s, a) : C(s, e, r), this._willSettleAt(s, t)
                            } else this._willSettleAt(new n((function(t) {
                                return t(e)
                            })), t)
                        } else this._willSettleAt(i(e), t)
                    }, e.prototype._settledAt = function(e, t, n) {
                        var i = this.promise;
                        i._state === P && (this._remaining--, e === A ? L(i, n) : this._result[t] = n), 0 === this._remaining && D(i, this._result)
                    }, e.prototype._willSettleAt = function(e, t) {
                        var n = this;
                        O(e, void 0, (function(e) {
                            return n._settledAt(I, t, e)
                        }), (function(e) {
                            return n._settledAt(A, t, e)
                        }))
                    }, e
                }(),
                F = function() {
                    function t(e) {
                        this[S] = V++, this._result = this._state = void 0, this._subscribers = [], w !== e && ("function" != typeof e && function() {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        }(), this instanceof t ? function(e, t) {
                            try {
                                t((function(t) {
                                    R(e, t)
                                }), (function(t) {
                                    L(e, t)
                                }))
                            } catch (t) {
                                L(e, t)
                            }
                        }(this, e) : function() {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }())
                    }
                    return t.prototype.catch = function(e) {
                        return this.then(null, e)
                    }, t.prototype.finally = function(t) {
                        var n = this.constructor;
                        return e(t) ? this.then((function(e) {
                            return n.resolve(t()).then((function() {
                                return e
                            }))
                        }), (function(e) {
                            return n.resolve(t()).then((function() {
                                throw e
                            }))
                        })) : this.then(t, t)
                    }, t
                }();
            return F.prototype.then = T, F.all = function(e) {
                return new M(this, e).promise
            }, F.race = function(e) {
                var t = this;
                return i(e) ? new t((function(n, i) {
                    for (var r = e.length, a = 0; a < r; a++) t.resolve(e[a]).then(n, i)
                })) : new t((function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                }))
            }, F.resolve = k, F.reject = function(e) {
                var t = new this(w);
                return L(t, e), t
            }, F._setScheduler = function(e) {
                o = e
            }, F._setAsap = function(e) {
                s = e
            }, F._asap = s, F.polyfill = function() {
                var e = void 0;
                if (void 0 !== n) e = n;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var i = null;
                    try {
                        i = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === i && !t.cast) return
                }
                e.Promise = F
            }, F.Promise = F, F
        }, e.exports = i()
    }).call(this, n(5), n(6))
}, function(e, t) {
    var n, i, r = e.exports = {};

    function a() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : a
        } catch (e) {
            n = a
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            i = o
        }
    }();
    var c, l = [],
        u = !1,
        d = -1;

    function p() {
        u && c && (u = !1, c.length ? l = c.concat(l) : d = -1, l.length && f())
    }

    function f() {
        if (!u) {
            var e = s(p);
            u = !0;
            for (var t = l.length; t;) {
                for (c = l, l = []; ++d < t;) c && c[d].run();
                d = -1, t = l.length
            }
            c = null, u = !1,
                function(e) {
                    if (i === clearTimeout) return clearTimeout(e);
                    if ((i === o || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                    try {
                        i(e)
                    } catch (t) {
                        try {
                            return i.call(null, e)
                        } catch (t) {
                            return i.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function v() {}
    r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new h(e, t)), 1 !== l.length || u || s(f)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = v, r.addListener = v, r.once = v, r.off = v, r.removeListener = v, r.removeAllListeners = v, r.emit = v, r.prependListener = v, r.prependOnceListener = v, r.listeners = function(e) {
        return []
    }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, r.cwd = function() {
        return "/"
    }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, r.umask = function() {
        return 0
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t) {
    function n(e, t, n) {
        return this.each((function() {
            var i, r, a = this.firstChild,
                o = [];
            if (a)
                do {
                    3 === a.nodeType && (r = (i = a.nodeValue).replace(e, t)) !== i && (!n && /</.test(r) ? ($(a).before(r), o.push(a)) : a.nodeValue = r)
                } while (a = a.nextSibling);
            o.length && $(o).remove()
        }))
    }

    function i(e, t) {
        for (var n = e, i = 0; e = e[t];) n.tagName == e.tagName && i++;
        return i
    }

    function r(e, t, n) {
        var r, a = i(e, n);
        if ("odd" == t || "even" == t) r = 2, a -= !("odd" == t);
        else {
            var o = t.indexOf("n");
            o > -1 ? (r = parseInt(t, 10) || parseInt(t.substring(0, o) + "1", 10), a -= (parseInt(t.substring(o + 1), 10) || 0) - 1) : (r = a + 1, a -= parseInt(t, 10) - 1)
        }
        return (r < 0 ? a <= 0 : a >= 0) && a % r == 0
    }
    window.ntv = window.ntv || {}, ntv.query = window.nQuery.noConflict(!0), window.prdom = {
        query: ntv.query
    };
    var a = {
        "first-of-type": function(e) {
            return 0 == i(e, "previousSibling")
        },
        "last-of-type": function(e) {
            return 0 == i(e, "nextSibling")
        },
        "only-of-type": function(e) {
            return a["first-of-type"](e) && a["last-of-type"](e)
        },
        "nth-of-type": function(e, t, n) {
            return r(e, n[3], "previousSibling")
        },
        "nth-last-of-type": function(e, t, n) {
            return r(e, n[3], "nextSibling")
        }
    };
    ! function(e) {
        e.fn.replaceText = n, e.extend(e.expr[":"], a)
    }(ntv.query)
}, function(e, t) {
    ! function(e) {
        ! function(e, t) {
            ! function(e, t) {
                function n(t, n) {
                    var i, r, a, o = e.Events,
                        s = e.Util,
                        c = (0, e.query)(s.getTopWindow()),
                        l = (s.is, t),
                        u = n.adID,
                        d = o.PubSub,
                        p = o.Types.Tracking;

                    function f(e, t) {
                        var n, o = function(e) {
                            var t;
                            return {
                                eventType: (t = e.type.split(":"))[2],
                                contentType: t[3],
                                NTVEvent: t[4]
                            }
                        }(e);
                        if (n = o.contentType, !i && n && (i = n), function(e) {
                                return i == e
                            }(o.contentType)) switch (o.NTVEvent) {
                            case "click":
                                c.trigger("ntvVideoClick", [u, e.data.volume]);
                                break;
                            case "videoStart":
                                if (void 0 !== r || void 0 !== a || "boolean" == typeof r && "boolean" == typeof a && r && !a) return;
                                r = !0, a = !1, c.trigger("ntvVideoStart", [u, e.data.volume]);
                                break;
                            case "videoEnd":
                                if ("boolean" == typeof r && "boolean" == typeof a && !r && a) return;
                                r = !1, a = !0, c.trigger("ntvVideoComplete", [u, e.data.volume]);
                                break;
                            case "pause":
                                c.trigger("ntvVideoPause", [u, e.data.volume]);
                                break;
                            case "mute":
                            case "unmute":
                            case "volumechange":
                                c.trigger("ntvVideoVolumeChange", [u, e.data.volume]);
                                break;
                            case "resume":
                                c.trigger("ntvVideoResume", [u, e.data.volume]);
                                break;
                            case "prerollAdCancel":
                                c.trigger("ntvVideoCanceled", [u, e.data.volume]);
                                break;
                            case "percentile":
                                switch (e.data.NTVEvent) {
                                    case "25":
                                        c.trigger("ntvVideoFirstQuartile", [u, e.data.volume]);
                                        break;
                                    case "50":
                                        c.trigger("ntvVideoMidpoint", [u, e.data.volume]);
                                        break;
                                    case "75":
                                        c.trigger("ntvVideoThirdQuartile", [u, e.data.volume])
                                }
                        }
                    }
                    return {
                        registerMOATEvents: function() {
                            for (var t in p)
                                for (var n in p[t])
                                    for (var i in p[t][n]) d.subscribe(l.toString() + ":" + e.Events.Types.Tracking[t][n][i], f);
                            return this
                        }
                    }
                }
                t.MOAT = function(e, t) {
                    n(e, t).registerMOATEvents()
                }
            }(e, e.Video.Tracker || (e.Video.Tracker = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {}))
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }! function(e) {
        ! function(e, t) {
            ! function(e, t) {
                function i(t, i) {
                    var r, a, o = !0,
                        s = e.Events,
                        c = e.Util,
                        l = (c.is, [
                            [],
                            [],
                            []
                        ]),
                        u = [],
                        d = [],
                        p = [],
                        f = i,
                        h = t,
                        v = e.Events.PubSub,
                        m = s.Types.Tracking;

                    function g(t, n, i) {
                        var r, a;
                        (t.firstPartyTrackingJoined.indexOf("68") >= 0 || t.firstPartyTrackingJoined.indexOf("845") >= 0) && i((function(e) {
                            e.state.viewableImpressionFired = !0
                        })), e.Tracking.Record((r = t.firstPartyTrackingJoined, a = f.baseTrackingUrl + r, (f.adVersionPlacement.length > 0 || f.adID >= 1e5) && (a += "&" + e.CONSTS.AVP + "=" + f.adVersionPlacement), (a += c.setURLCache()) + t.qs), t.third || "", 1, null, n)
                    }

                    function y(e) {
                        if ("object" != n(e) || !f[e.eventType] || !f[e.eventType][e.contentType]) return [];
                        var t, i = f[e.eventType][e.contentType][e.progressSection] || f[e.eventType][e.contentType],
                            r = [];
                        if (!(i = i[e.NTVEvent])) return [];
                        for (var a = 0; a < i.length; a++) f.map[i[a]] && ((t = f.map[i[a]]).firstPartyTrackingJoined = t.first.join(","), r.push(t));
                        return r
                    }
                    var E = function e(t, n, i, r, a) {
                        a[t] && (1e3 * r <= a[t].totalTime + a[t].duration() ? (a.eventType = n, a.progressSection = i, a.NTVEvent = r, S(a, !0)) : setTimeout((function() {
                            e(t, n, i, r, a)
                        }), 100))
                    };

                    function b(e, t, n) {
                        setTimeout((function() {
                            E("tos_w_hidden", "progress", "userActiveCumulative", e, t)
                        }), 0)
                    }

                    function T(e) {
                        if (-1 == p.indexOf(e.contentType)) {
                            var t = f.progress[e.contentType];
                            ! function(e, t) {
                                var n = 0,
                                    i = e.length;
                                do {
                                    if (e[n])
                                        for (var r in e[n]) b(r, t)
                                } while (++n < i)
                            }([t.userActiveCumulative, t.cumulative], e), p.push(e.contentType)
                        }
                    }

                    function k(e) {
                        e.playing && ("percentile" !== e.progressSection ? (! function(e) {
                            var t = f.progress[e.contentType].position;
                            for (var n in t) parseInt(n) <= Math.round(e.currentTime) && e.currentTime != e.duration && Math.round(e.currentTime) < parseInt(n) + 1 && (e.eventType = "progress", e.progressSection = "position", e.NTVEvent = n, S(e, !0))
                        }(e), function(e) {
                            o ? (r = u[1] || u[0], o = !1) : r = a ? new Date : r || new Date;
                            var t, n = (t = r, (new Date - t) / 1e3),
                                i = f.progress[e.contentType].continuous;
                            for (var s in a && d.push({
                                    position: e.currentTime,
                                    timestamp: new Date
                                }), i) parseInt(s) <= n && (e.eventType = "progress", e.progressSection = "continuous", e.NTVEvent = s, S(e, !0))
                        }(e), T(e)) : S(e, !0))
                    }

                    function S(e, t) {
                        var i = t ? e : function(e) {
                            var t;
                            return "object" == n(e.data) && e.data.eventType && "progress" == e.data.eventType ? k(e.data) : {
                                eventType: (t = e.type.split(":"))[2],
                                contentType: t[3],
                                NTVEvent: t[4]
                            }
                        }(e);
                        if (i) {
                            var r = [],
                                a = [],
                                o = "",
                                s = i instanceof Array ? i : i instanceof Object ? y.call(this, i) : [];
                            if (s.length) {
                                for (var c = 0; c < s.length; c++) null === s[c].freq || l[s[c].freq].length && -1 != l[s[c].freq].indexOf(s[c].firstPartyTrackingJoined) || (r.push(s[c].firstPartyTrackingJoined), s[c].third && a.push(s[c].third), s[c].qs && (o += s[c].qs), s[c].rtv && !isNaN(i.returnedMetricValue) && (o += "&ntv_mv=" + i.returnedMetricValue.toString(), delete i.returnedMetricValue), e.duration && e.currentTime && (o += "&ntv_duration=" + e.duration + "&ntv_position=" + e.currentTime), s[c].freq && l[s[c].freq].push(s[c].firstPartyTrackingJoined));
                                if (r.length) {
                                    var u = {
                                        placementID: f.placementID,
                                        adID: f.adID
                                    };
                                    g({
                                        firstPartyTrackingJoined: r.join(","),
                                        third: a.join(","),
                                        qs: o
                                    }, u, e.callback)
                                }
                            }
                        }
                    }
                    return {
                        registerNativoEvents: function() {
                            for (var t in m)
                                for (var n in m[t])
                                    for (var i in m[t][n]) v.subscribe(h.toString() + ":" + e.Events.Types.Tracking[t][n][i], S);
                            return this
                        },
                        bindTrackerHandlersToEvents: function() {
                            return v.subscribe(h.toString() + ":" + m.Events.Content.VIDEO_END, (function() {
                                a = void 0, l[2].length = 0
                            })), v.subscribe(h.toString() + ":" + m.Events.Content.VIDEO_START, (function() {
                                a = !1, u.push(new Date)
                            })), v.subscribe(h.toString() + ":" + m.Events.Content.CLICK, (function() {
                                void 0 === o && (o = !0)
                            })), v.subscribe(h.toString() + ":" + m.Events.Content.PAUSE, (function() {
                                a = !0
                            })), v.subscribe(h.toString() + ":" + m.Events.Preroll.VIDEO_START, (function() {
                                0 === u.length && u.push(new Date)
                            })), this
                        }
                    }
                }
                t.Nativo = function(e, t) {
                    i(e, t).registerNativoEvents().bindTrackerHandlersToEvents()
                }
            }(e, e.Video.Tracker || (e.Video.Tracker = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {}))
}, function(t, n, i) {
    "use strict";
    i.r(n);
    i(2), i(3);
    window.performance || (window.performance = {
        timing: {
            navigationStart: +new Date
        }
    });
    i(7);
    var r = {
            DOMAIN: "adserve.postrelease.com",
            JDOMAIN: "jadserve.postrelease.com",
            RESIZE_DOMAIN: "ntvimg-a.akamaihd.net",
            ASSETS_DOMAIN: "ntvassets-a.akamaihd.net",
            ASSETS_DOMAIN_DEV: "devntvassets-a.akamaihd.net",
            CLOUDINARY_DOMAIN: "ntvcld-a.akamaihd.net",
            SCRIPTS_DOMAIN: "s.ntv.io",
            ASSETS_PREFIX: "s",
            VIS_ID: "prx_visitor",
            REQ_KEY: "prx_rk",
            REQ_URL: "prx_url",
            REQ_URL_NTV: "ntv_url",
            PAGE_REF: "prx_referrer",
            IS_MOBILE: "prx_mobile",
            AT: "ntv_at",
            SUB_AT: "ntv_sat",
            FRAUD: "ntv_fr",
            CPM: "ntv_cpm",
            VALUE: "ntv_v",
            TOTAL_VALUE: "ntv_tv",
            US_PRIVACY: "us_privacy",
            US_PRIVACY_COOKIE: "ntv_as_us_privacy",
            GDPR_VENDOR_ID: 263,
            ABA: "prx_adp",
            ARTICLE_TMPL: "prx_t",
            AVP: "ntv_a",
            ADV_ID: "prx_adv",
            PLC_ID: "prx_pl",
            ADV_FILTER: "prx_avtf",
            CMP_FILTER: "prx_ctf",
            AD_FILTER: "ntv_atf",
            PTD_FILTER: "ntv_ptd",
            REQ_OPTIONS: "prx_ro",
            RENDER_MODE: "prx_rm",
            OVERIDE_ARTICLE: "ntv_oat",
            PASS_PREVIEW: "ntv_tp",
            IP: "prx_userip",
            FORCE_JAVA: "ntv_jat",
            IS_TOUT: "ntv_it",
            FORCE_NET: "ntv_net",
            DEBUG_MODE: "ntv_dm",
            CLIENT_OPTIONS: "ntv_co",
            LEGACY_VIDEO_SUPPORT: "ntv_lvs",
            REDIRECT: "ntv_r",
            TRACK_MEDIATION: "ntv_med",
            SEEN_ADS: "ntv_sa",
            KEY_VALUE_PAIRS: "ntv_kv",
            PUBLISHER_IN_IFRAME: "ntv_iw",
            EXPERIMENT: "ntv_eg",
            YOUTUBE_PLAYER: 1,
            NATIVO_PLAYER: 2,
            VAST_PLAYER: 3,
            AOL_PLAYER: 4,
            PREROLL_NATIVO_PLAYER: 5,
            VIANT_PLAYER: 6,
            MAX_INT32_VALUE: 2147483647,
            PB_ATT: 806,
            PB_CPM_IMP: 807,
            PB_NOT_FIL: 808,
            PB_VCPM_IMP: 809,
            PB_ATT_SKIP_LOG: 812,
            USER_SESSION_ID: "ntv_usid",
            SESSION_PL_ID: "ntv_pl",
            USER_SESSION_DURATION: "ntv_usd",
            RESPONSIVENESS_1OO: "ntv_r1",
            RESPONSIVENESS_75: "ntv_r2",
            RESPONSIVENESS_50: "ntv_r3",
            RESPONSIVENESS_25: "ntv_r4",
            BEFORE_AUCTION: 853,
            AFTER_AUCTION: 854,
            VIDEO_ID_SELECTOR: "ntvVideo",
            VIDEO_ID_EDGE_SELECTOR: "prxVideo",
            NTV_PREFIX: "ntv",
            EDGE_PREFIX: "prx",
            NTV_UID: "_ntv_uid",
            DFP_INIT_LOAD: 337,
            DFP_FIRST_RENDER: 335,
            DFP_TOTAL_AVAILABLE: 334,
            DFP_TOTAL_FILLED: 336,
            CLP_VIEW_DEPTH_25_PERCENT: 1016,
            CLP_VIEW_DEPTH_50_PERCENT: 1017,
            CLP_VIEW_DEPTH_75_PERCENT: 1018,
            CLP_VIEW_DEPTH_100_PERCENT: 1019,
            CLP_VIEW_DEPTH_MAX: 1020,
            CLP_SCROLL_INITIATED: 1021,
            RETRY: "ntv_rtr"
        },
        a = u();

    function o(e, t) {
        return e.onload = t
    }

    function s(e, t) {
        return e.onerror = t
    }

    function c(e, t, n) {
        var i = new Date;
        i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
        var r = "expires=" + i.toUTCString();
        document.cookie = "".concat(e, "=").concat(t, ";").concat(r, ";").concat("samesite=none;secure", ";path=/")
    }

    function l(e) {
        var t = e + "=",
            n = document.cookie;
        if (n)
            for (var i = n.split(";"), r = 0; r < i.length; r++) {
                for (var a = i[r];
                    " " == a.charAt(0);) a = a.substring(1);
                if (0 == a.indexOf(t)) {
                    var o = a.substring(t.length, a.length);
                    return c(e, o, 365), o
                }
            }
        return ""
    }

    function u() {
        for (var e = window, t = window; e.parent && e != e.parent;) try {
            (e = e.parent).document && (t = e)
        } catch (e) {}
        return t
    }
    a.onFocusEvents || (a.onFocusEvents = []);
    var d = a.onFocusEvents,
        p = d;

    function f(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function h(e) {
        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var v = [],
        m = {},
        g = g || window,
        y = {
            getBaseUrl: function() {
                return y.getProtocol() + "//" + r.JDOMAIN + "/trk.gif?"
            },
            is: function() {
                return this.translateType = function(e) {
                    switch (e) {
                        case "u":
                            return "undefined";
                        case "b":
                            return "boolean";
                        case "s":
                            return "string";
                        case "f":
                            return "function";
                        case "n":
                            return "number";
                        case "o":
                            return "object";
                        default:
                            return "undefined"
                    }
                }, "string" == typeof arguments[0] ? h(arguments[1]) == this.translateType(arguments[0]) : arguments[0] instanceof arguments[1]
            },
            getProtocol: function() {
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                return "https:"
            },
            hasWebProtocol: function(e) {
                return 0 === e.indexOf("http://") || 0 === e.indexOf("https://")
            },
            applyProtocolToUrl: function(e) {
                if (0 != e.indexOf("http")) {
                    var t = y.getProtocol();
                    0 != e.indexOf("//") && (t += "//"), e = t + e
                }
                return e
            },
            isFirefox: function() {
                return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
            },
            isChrome: function() {
                return navigator.userAgent.toLowerCase().indexOf("chrome") > -1
            },
            isIE: function() {
                return y.is("f", document.attachEvent)
            },
            isEdge: function() {
                return navigator.userAgent.indexOf("Edge") >= 0
            },
            runWithFirefoxIframeProtection: function(e, t, n) {
                t(), n && ntv.query(e).bind("load", (function() {
                    n()
                }))
            },
            match: function(e, t) {
                for (var n = 0; n < t.length; n++)
                    if (e.indexOf(t[n]) >= 0) return !0;
                return !1
            },
            getRandomInt: function(e, t) {
                return Math.floor(Math.random() * ((t || r.MAX_INT32_VALUE) - (e || 0))) + (e || 0)
            },
            getNodePositionAndDimensions: function(e) {
                var t = e.getBoundingClientRect(),
                    n = {
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom,
                        left: t.left,
                        width: t.width,
                        height: t.height,
                        x: t.x,
                        y: t.y
                    };
                return n.X = e.offsetLeft, n.Y = e.offsetTop, n
            },
            getElementDimensions: function(e) {
                var t = ntv.query,
                    n = Math.floor,
                    i = 0,
                    r = 0;
                return ("IMG" != (e = e[0] ? e[0] : e).nodeName || e.complete || "prx_disclaimer_iframe" == e.id) && (i = e.height ? e.height : e.style.height ? e.style.height : 0, r = e.width ? e.width : e.style.width ? e.style.width : 0, "string" == typeof i && (i = i.indexOf("%") > 0 ? t(e).height() : parseInt(i.replace(/\g/gi, ""))), "string" == typeof r && (r = r.indexOf("%") > 0 ? t(e).width() : parseInt(r.replace(/\g/gi, ""))), i && !isNaN(i) || (i = t(e).height()), r && !isNaN(r) || (r = t(e).width())), {
                    w: n(r),
                    h: n(i)
                }
            },
            setElementDimensions: function(e, t, n) {
                if (!(isNaN(t.w) || isNaN(t.h) || t.w <= 1 || t.h <= 1)) {
                    var i = ntv.query,
                        r = i(e).attr("ntv-width"),
                        a = i(e).attr("ntv-height");
                    t.h > 0 && t.w > 0 && (r || (r = t.w, i(e).attr("ntv-width", r)), a || (a = t.h, i(e).attr("ntv-height", a))), n = n || Math.MAX_INT32_VALUE;
                    var o = Math.min(n, r),
                        s = a * o / r;
                    (o != t.w || s != t.h && o > 0) && (o += "px", s += "px", i(e).css("height", s).css("width", o).css("max-height", s).css("max-width", o))
                }
            },
            getScrollPos: function(e) {
                var t = window,
                    n = t.window,
                    i = t.document,
                    r = i.documentElement,
                    a = i.body;
                return {
                    top: Math.floor(n.pageYOffset ? n.pageYOffset : r.scrollTop ? r.scrollTop : a.scrollTop),
                    left: Math.floor(n.pageXOffset ? n.pageXOffset : r.scrollLeft ? r.scrollLeft : a.scrollLeft),
                    time: new Date,
                    bottom: e ? e.target.scrollingElement.scrollHeight == e.target.scrollingElement.offsetHeight + n.pageYOffset : null
                }
            },
            getSampleTimeArray: function(e) {
                for (var t = [], n = 0, i = 0, r = 0; r < e;) i += 2e3 + 90 * n, t.push(i), n++, r += i;
                return t
            },
            canExecute: function(e, t, n) {
                return new Date - v["lastCheck" + t] < n ? (0 == v["missedCheck" + t] && (v["missedCheck" + t]++, setTimeout(e, n)), !1) : (v["lastCheck" + t] = new Date, v["missedCheck" + t] = 0, !0)
            },
            appendImageUtil: function(e, t, n) {
                var i = new Image(1, 1);
                i.src = e, o(i, (function() {
                    o(i, null), s(i, null), t && t()
                })), s(i, (function() {
                    o(i, null), s(i, null), n && n()
                }))
            },
            decodeIfEncrypt: function(e) {
                var t = !1,
                    n = e,
                    i = "";
                if (y.adBlocker && e.indexOf(y.adBlockerDomain) >= 0) try {
                    var r = e.split("/");
                    (n = y.decryptUrl(r[r.length - 1])).startsWith("proxyTracking/") ? n = n.replace("proxyTracking/", "") : n.startsWith("https://proxyTracking/") && (n = n.replace("https://proxyTracking/", "")), t = !0, i = r[r.length - 2]
                } catch (e) {}
                return {
                    decodedUrl: n,
                    isDecoded: t,
                    domain: i
                }
            },
            appendImage: function(e, t, n, i) {
                if (null != e) {
                    var a = ntv.PostRelease,
                        o = !1,
                        s = y.decodeIfEncrypt(e),
                        c = s.decodedUrl;
                    s.isDecoded, s.domain;
                    (e = c).indexOf(y.getServerDomain()) > 0 && !t && (o = !0, e.indexOf(r.PAGE_REF) < 0 && document.referrer && (e += "&" + r.PAGE_REF + "=" + encodeURIComponent(document.referrer)), a && a.tout && (e += "&" + r.IS_TOUT));
                    var l = function(e, t) {
                        var n = "ntv_at=" + t;
                        return e.indexOf(n) > 0 && (a.pageInventoryTracked || (a.pageInventoryTracked = !0, e = e.replace(n, n + ",302"))), e
                    };
                    e = l(e, "46"), e = l(e, "303"), e = y.applyProtocolToUrl(e);
                    var u = null;
                    if (!a.firstPartyTracked && o && (u = function() {
                            a.firstPartyTracked = !0
                        }), t) return void ntv.Tracking.Record('<img src="' + e + '" />');
                    y.appendImageUtil(e, (function() {
                        null != u && u(), n && n()
                    }), (function() {
                        i && i()
                    }))
                }
            },
            appendIframe: function(e, t) {
                var n = document.createElement("iframe");
                n.src = e, n.addEventListener("load", (function() {
                    n.parentElement.removeChild(n), t()
                })), document.body.appendChild(n)
            },
            removeElementFromArray: function(e, t) {
                for (var n = -1, i = 0; i < e.length; i++) t == e[i] && (n = i);
                n >= 0 && e.splice(n, 1)
            },
            copyProperties: function(e, t) {
                for (var n in e) "function" != typeof e[n] && (t[n] = e[n])
            },
            isNotValidHeadlineLink: function(e) {
                var t = e.attr("class");
                return -1 == (t = t || "").indexOf("prx_viewable_title") && -1 == t.indexOf("ntv-headline-anchor") || "#" == e.attr("href") || !e.attr("href")
            },
            xorWithKey: function(e, t) {
                for (var n = [], i = 0; i < e.length; i++) n.push(t[i % t.length] ^ e.charCodeAt(i));
                return n
            },
            arrayBufferToBase64: function(e) {
                for (var t = "", n = new Uint8Array(e), i = n.byteLength, r = 0; r < i; r++) t += String.fromCharCode(n[r]);
                var a = btoa(t);
                return a = (a = a.replace(/[+]/g, "-")).replace(/[/]/g, "_")
            },
            encryptUrl: function(e, t) {
                var n = [72, -124, 36];
                t ? n.push(50) : n.push(new Date / 864e5 & 255);
                var i = y.xorWithKey(e, n),
                    r = n.concat(i);
                return this.arrayBufferToBase64(r)
            },
            decryptUrl: function(e) {
                e = (e = e.replace(/[-]/g, "+")).replace(/[_]/g, "/");
                var t = atob(e),
                    n = [];
                for (o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
                var i = n.slice(0, 4);
                e = t.substring(4);
                for (var r = y.xorWithKey(e, i), a = "", o = 0; o < r.length; o++) a += String.fromCharCode(r[o]);
                return a
            },
            overrideAndEncodeRequest: function(e, t, n) {
                var i = t.indexOf(e),
                    a = t.substring(i + e.length + 1),
                    o = "";
                return n ? o = r.ASSETS_PREFIX : a = y.encryptUrl(a), t.substring(0, i) + o + y.adBlockerDomain + "/" + a
            },
            adBlockerValidation: function(e, t, n) {
                return y.adBlocker && -1 == e.indexOf("data:") && (e = "proxyTracking/" + (e = y.decodeIfEncrypt(e).decodedUrl), e = "//" + y.adBlockerDomain + "/" + y.encryptUrl(e)), e
            },
            appendScript: function(e, t, n, i, r) {
                var a = (i = i || document).createElement("script");
                if (a.type = "text/javascript", null != t && (a.readyState ? a.onreadystatechange = function() {
                        "complete" != i.readyState && "loaded" != i.readyState || t()
                    } : a.onload = function() {
                        t()
                    }), null != n) {
                    if (i.getElementById(n)) return void t();
                    a.id = n
                }
                var o = y.decodeIfEncrypt(e),
                    s = o.decodedUrl,
                    c = o.isDecoded,
                    l = o.domain;
                return s = y.applyProtocolToUrl(s), a.src = y.adBlockerValidation(s, c, l), r || (i.getElementsByTagName("head")[0] || i.documentElement).appendChild(a), a
            },
            getServerDomain: function() {
                return y.adBlocker && y.adBlockerDomain !== window.location.hostname ? y.adBlockerDomain : r.JDOMAIN
            },
            buildImageResizerStyle: function(e, t, n, i, r) {
                var a = "";
                if (n > 0 && (a += "w_" + Math.round(n) + ","), i > 0 && (a += "h_" + Math.round(i) + ","), t) switch (t) {
                    case "crop":
                        a += "c_fill";
                        break;
                    case "max":
                        a += "c_fit";
                        break;
                    case "padding":
                    case "pad":
                        a += "c_pad"
                }
                return r && (a += ",g_auto:text"), a += ",f_auto", e.toLowerCase().indexOf(".gif") < 0 && (a += ",e_sharpen:80"), e.toLowerCase().indexOf(".png") > 0 && (a += ",fl_lossy"), a
            },
            scaleToDeviceRatio: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return e = window.devicePixelRatio ? e * window.devicePixelRatio : e, e = t ? Math.round(e) : e
            },
            applyImageResizer: function(e, t, n, i, a) {
                if (n = this.scaleToDeviceRatio(n) || n, i = this.scaleToDeviceRatio(i) || i, y.adBlocker && ntv.PostRelease.setting.isEdge) {
                    var o = "nativo-inc-res.cloudinary.com/image/upload/" + y.buildImageResizerStyle(e, t, n, i, a) + "/assets",
                        s = y.decodeIfEncrypt(e).decodedUrl;
                    if (-1 == s.indexOf("assets.postrelease.com") && -1 == s.indexOf(r.ASSETS_DOMAIN)) return s;
                    var c = s.replace(r.ASSETS_DOMAIN, o).replace(/(,,)/gi, ",");
                    return y.getProtocol() + "//" + y.adBlockerDomain + "/" + y.encryptUrl("proxyImage/" + c, !0)
                }
                var l = "ntvcld-a.akamaihd.net/image/upload/" + y.buildImageResizerStyle(e, t, n, i, a) + "/assets";
                return e = (e = e.replace("assets.postrelease.com", l)).replace(r.ASSETS_DOMAIN, l).replace(/(,,)/gi, ",")
            },
            applyImageResizerFlashTalking: function(e, t, n, i, r) {
                if (n = this.scaleToDeviceRatio(n) || n, i = this.scaleToDeviceRatio(i) || i, y.adBlocker && ntv.PostRelease.setting.isEdge) {
                    var a = "//nativo-inc-res.cloudinary.com/image/fetch/" + y.buildImageResizerStyle(e, t, n, i, r),
                        o = y.decodeIfEncrypt(e).decodedUrl,
                        s = a + "/" + encodeURIComponent(o);
                    return y.getProtocol() + "//" + y.adBlockerDomain + "/" + y.encryptUrl("proxyImage/" + s, !0)
                }
                var c = "//ntvcld-a.akamaihd.net/image/fetch/" + y.buildImageResizerStyle(e, t, n, i, r);
                return y.getProtocol() + c + "/" + encodeURIComponent(e)
            },
            isAndroidTablet: function() {
                return navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/Mobile/i)
            },
            isAndroidPhone: function() {
                return navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/Mobile/i)
            },
            isiOS: function() {
                return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
            },
            isMobile: function() {
                return y.isiOS() || y.isAndroidTablet()
            },
            writeIframe: function(e, t, n, i) {
                var r;
                return (r = e.length && e[0] instanceof HTMLIFrameElement ? e[0].contentWindow.document : e instanceof HTMLIFrameElement ? e.contentWindow.document : e.contents()[0] || e[0] && e[0].contentWindow.document || e.contentWindow && e.contentWindow.document) && (y.isEdge() || r.open(), r.write("<html " + t + "><head>" + n + "</head><body>" + i + "</body></html>"), y.isEdge() || r.close()), r
            },
            ntvExtends: function(e, t) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t
            },
            ntvAppendScript: function(e, t, n, i) {
                return y.appendScript(e, t, n, i)
            },
            ntvAppendPixelImage: function(e) {
                return y.appendImage(e)
            },
            ntvAppendStylesheet: function(e, t, n) {
                if (!(n = n || document).getElementById(e)) {
                    t = y.applyProtocolToUrl(t), t = y.adBlockerValidation(t);
                    var i = n.createElement("link");
                    i.id = e, i.type = "text/css", i.rel = "stylesheet", i.href = t, (n.getElementsByTagName("head")[0] || n.documentElement).appendChild(i)
                }
            },
            ntvApplyImageResizer: function(e) {
                return y.applyImageResizer(e)
            },
            ntvjQueryInit: function(e) {
                e()
            },
            ntvXDomainRequest: function(e) {
                var t;
                (t = window.XDomainRequest ? new window.XDomainRequest : window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).open("GET", e, !1), t.send()
            },
            ntvRegexEscape: function(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            },
            ntvTrim: function(e) {
                return e.replace(/^\s+|\s+$/gm, "")
            },
            ntvHexToRgb: function(e) {
                e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, n, i) {
                    return t + t + n + n + i + i
                }));
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return t ? {
                    r: parseInt(t[1], 16),
                    g: parseInt(t[2], 16),
                    b: parseInt(t[3], 16)
                } : null
            },
            ntvInitOnFocusTracking: function() {
                var e = "hidden",
                    t = a.document;
                if (e in t) t.addEventListener("visibilitychange", n);
                else if ((e = "mozHidden") in t) t.addEventListener("mozvisibilitychange", n);
                else if ((e = "webkitHidden") in t) t.addEventListener("webkitvisibilitychange", n);
                else if ((e = "msHidden") in t) t.addEventListener("msvisibilitychange", n);
                else if ("onfocusin" in t) t.onfocusin = t.onfocusout = n;
                else if ("onpageshow" in a && "onpagehide" in a) a.onpageshow = a.onpagehide = n;
                else {
                    if (!("onfocus" in a && "onblur" in a)) return void(a.onFocus = !0);
                    a.onfocus = a.onblur = n
                }

                function n(t) {
                    var n = "visible",
                        i = "hidden",
                        r = {
                            focus: n,
                            focusin: n,
                            pageshow: n,
                            blur: i,
                            focusout: i,
                            pagehide: i
                        };
                    (t = t || window.event).type in r ? a.onFocus = "visible" == r[t.type] : a.onFocus = !this[e];
                    for (var o = 0; o < d.length; o++) d[o]();
                    a.ntv && ntv.query(a).trigger("ntvOnFocusChange")
                }
                n({
                    type: "visible" == document.visibilityState ? "focus" : "blur"
                })
            },
            setURLCache: function() {
                return "&ord=" + (new Date).getTime()
            },
            isMatchingDomains: function(e, t) {
                return e.indexOf(t) > -1 || t.indexOf(e) > -1
            },
            removeQueryParam: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (!t || !e) return e;
                var n = /(=)(.*)/gi,
                    i = e.match(t.replace(n, ""));
                if (null !== i) switch ("" === e.charAt(i.index + 1) || "&" === e.charAt(i.index + 1)) {
                    case !0:
                        e.replace(t, "");
                        break;
                    default:
                        var r = e.split("?");
                        r[1] = r[1].split("&").filter((function(e) {
                            return !e.match(t.replace(n, ""))
                        })).join("&"), e = r.join("?")
                }
                return e
            },
            generateWhitelistQueryString: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 ? arguments[2] : void 0;
                if (!e || !t) return e;
                var i = /(\?)/.test(e) || /(\#)/.test(e);
                return t.split(",").forEach((function(t) {
                    e = y.removeQueryParam(e, t)
                })), e = e.concat(i ? "&" : "?").concat(t.split(",").map((function(e, t, i) {
                    return e.concat("=").concat(encodeURIComponent(n)).concat(t < i.length - 1 ? "&" : "")
                })).join(""))
            },
            replaceQueryParams: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return e && t ? -1 == e.indexOf("?") ? e.concat("?").concat(t) : (t.split("&").forEach((function(t) {
                    e = y.removeQueryParam(e, t)
                })), e.concat(t ? "&" + t : "")) : e
            },
            filterScripts: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!(e instanceof Array && e.length && t)) return !!n.returnObject && [];
                var i = document.createElement("div"),
                    r = 0,
                    a = ["script", "iframe"],
                    o = !1,
                    s = /^((http(s*)(:))*)(\/\/)([^\/]*)/i,
                    c = [];
                i.innerHTML = t;
                do {
                    if (a.indexOf(i.children[r].tagName.toLowerCase()) > -1 && i.children[r].src) e: for (var l = 0; l < e.length; l++)
                        if (s.test(i.children[r].src)) {
                            if (s.lastIndex = 0, y.isMatchingDomains(s.exec(i.children[r].src)[6], e[l].domain || e[l])) {
                                var u = i.children[r].src;
                                y.appendScript(u), s.lastIndex = 0, o = !0, c.push({
                                    domain: e[l].domain || e[l],
                                    domainPosition: l,
                                    scriptPosition: r,
                                    thirdPartyScript: i.children[r]
                                });
                                break e
                            }
                            s.lastIndex = 0
                        }
                } while (++r < i.children.length);
                return i = null, n.returnObject ? c : o
            },
            parseThirdPartyTrackingInfo: function(e, t) {
                return t && (e = decodeURIComponent(e)), /^((http(s*)(:))*)(\/\/)([^\/]*)/i.test(e) ? {
                    type: "url",
                    value: e
                } : {
                    type: "node",
                    value: e
                }
            },
            appendThirdPartyTracking: function(e, t, n) {
                var i = y.parseThirdPartyTrackingInfo(e, t);
                return "node" === i.type ? y.adBlocker ? function(e, t) {
                    var n = convertStringToNodes(e),
                        i = [];
                    n.forEach((function(e) {
                        i.push(b(e, document.location.hostName))
                    })), i.forEach((function(e) {
                        try {
                            E(e, t)
                        } catch (e) {}
                    }))
                }(i.value, n) : E(i.value, n) : y.appendImage(i.value.replace("[timestamp]", +new Date)), i
            },
            getTopWindow: u,
            handleThirdPartyTracking: function(e, t) {
                var n = [],
                    i = e.isFlashTalking;
                if (e.length && !y.is("s", e))
                    for (var r = 0; r < e.length; r++) n.push(y.appendThirdPartyTracking(e[r], i, t));
                else n.push(y.appendThirdPartyTracking(e, i, t));
                return n
            },
            wrap: function(e, t) {
                e.parentNode.insertBefore(t, e), t.appendChild(e)
            },
            removeVideoSourceFromHTML: function(e) {
                var t = document.createElement("span");
                return t.innerHTML = e, t.getElementsByTagName("video")[0].src = "", t.getElementsByTagName("video")[0].type = "", t.getElementsByTagName("video")[0].innerHTML = "", t.innerHTML
            },
            generateUniqueId: function(e) {
                var t = 0,
                    n = "",
                    i = 0,
                    r = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
                if ("alphanumeric" === e) {
                    do {
                        r[i = Math.floor(100 * Math.random())] ? n += r[i].toString() : r[i = Math.floor(10 * Math.random())] && (n += r[i].toString())
                    } while (++t < 100 && n.length < 30);
                    return n + (new Date).valueOf()
                }
                return "number" == typeof e ? Math.floor(Math.random() * e + 1) : Math.floor(1e6 * Math.random() + 1).toString().concat((new Date).valueOf())
            },
            isEmptyVideoTracking: function(e) {
                return y.is("u", e.videoTracking.map) || y.is("o", e.videoTracking.map) && !Object.keys(e.videoTracking.map).length
            },
            generateVideo: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    i = ntv.Video,
                    r = i.Manager,
                    a = y.generateUniqueId();
                if (e.iframeBody = e.vastAsMainSource ? y.removeVideoSourceFromHTML(e.iframeBody) : e.iframeBody, e.videoTracking.baseTrackingUrl = e.baseTrackingUrl, e.videoTracking.adVersionPlacement = e.adVersionPlacement, e.videoTracking.adID = e.adID, e.videoTracking.placementID = e.placementID, !y.isEmptyVideoTracking(e))
                    for (var o = 0, s = n.length; o < s; o++) n[o](a, e.videoTracking);
                return new r(a, e, t)
            },
            trackReplacedNodeViewableImpression: function(e) {
                var t, n;
                if ("function" == typeof window.MutationObserver) {
                    (t = new MutationObserver((function(t) {
                        t.forEach((function(t) {
                            "childList" == t.type && (!t.removedNodes.length && t.addedNodes.length ? n = t.addedNodes[0] : t.removedNodes.length && -1 != Array.prototype.slice.apply(t.removedNodes).indexOf(e.selector) ? (e.selector = t.addedNodes.length ? t.addedNodes[0] : n, ntv.PostRelease["tracker" + e.placementID] || (ntv.PostRelease["tracker" + e.placementID] = new ntvViewableImpressionTracker(e))) : n && t.removedNodes.length && -1 != Array.prototype.slice.apply(t.removedNodes).indexOf(n) && (e.selector = t.addedNodes.length ? t.addedNodes[0] : t.nextElementSibling, ntv.PostRelease["tracker" + e.placementID] || (ntv.PostRelease["tracker" + e.placementID] = new ntvViewableImpressionTracker(e))))
                        }))
                    }))).observe(e.selector.parentElement, {
                        childList: !0
                    }), setTimeout((function() {
                        t.disconnect()
                    }), 2e3)
                }
                return ntv.PostRelease["tracker" + e.placementID] || (ntv.PostRelease["tracker" + e.placementID] = new ntvViewableImpressionTracker(e)), ntv.PostRelease["tracker" + e.placementID]
            },
            ajax: function(e) {
                var t = new XMLHttpRequest;
                t.open(e.method, y.adBlockerValidation(e.url), !0), "POST" == e.method && t.setRequestHeader("Content-type", e.contentType), e.credentials && (t.withCredentials = !0), t.onload = function() {
                    e.success && e.success(function(e) {
                        var t;
                        try {
                            t = JSON.parse(e)
                        } catch (e) {
                            t = {}
                        }
                        return t
                    }(t.responseText))
                }, t.onerror = function() {
                    e.error && e.error(t.error)
                }, t.send(e.val || null)
            },
            keyValuePairGenerator: function() {
                var e = [];
                return function(t, n) {
                    if (!y.is("s", t) || !y.is("s", n)) return encodeURI(e.join(";"));
                    e.push(t.trim() + "*" + n.trim())
                }
            },
            getKeyValuePairsFromMetaTags: function() {
                var e = Array.prototype.slice.apply(document.head.querySelectorAll('meta[name="ntv-kv"]'));
                if (!e.length) return !1;
                var t = y.keyValuePairGenerator();
                return e.forEach((function(e, n, i) {
                    t(e.getAttribute("key"), e.getAttribute("values"))
                })), t()
            },
            getKeyValuePairsFromConfig: function() {
                if (void 0 === g.ntvConfig || !y.is("o", g.ntvConfig) || !y.is("o", g.ntvConfig.keyValues) || !Object.keys(g.ntvConfig.keyValues).length) return !1;
                var e = g.ntvConfig.keyValues,
                    t = y.keyValuePairGenerator();
                for (var n in e) t(n, e[n]);
                return t()
            },
            getKeyValuePairs: function() {
                var e = this.getKeyValuePairsFromConfig(),
                    t = this.getKeyValuePairsFromMetaTags();
                return e ? t && (e += ";" + t) : e = t, e
            },
            isPublisherLoadedInTopWindow: function() {
                try {
                    return !(window.self != window.top || !window.top.document)
                } catch (e) {
                    return !1
                }
            },
            getNodeArea: function(e) {
                if (y.is("u", e)) return 0;
                var t = window.getComputedStyle(e);
                return t.width.replace("px", "") * t.height.replace("px", "")
            },
            findLargestChild: function(e) {
                var t, n = Array.prototype.slice.apply(e.children),
                    i = 0,
                    r = y.getNodeArea;
                if (!n.length || !y.is("f", window.getComputedStyle)) return e;
                do {
                    r(n[i]) > 0 && r(n[i]) > r(t) && (t = n[i])
                } while (++i < n.length);
                return t || e
            },
            checkIfExistAndAppendQS: function(e, t) {
                return e ? "&" + t + "=" + encodeURIComponent(e) : ""
            },
            debounce: function(e, t) {
                var n;
                return function() {
                    n && clearTimeout(n), n = setTimeout((function() {
                        return e()
                    }), t)
                }
            },
            filterOutNodesFromString: function(e, t) {
                var n = document.createDocumentFragment();
                return n.appendChild(document.createElement("div")), n.childNodes[0].innerHTML = e.replace(/(<img)/gi, "<no-img"), Array.prototype.slice.apply(n.childNodes[0].querySelectorAll(t)).map((function(e) {
                    return e.outerHTML
                }))
            },
            filterOutImpressions: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    i = y.filterOutNodesFromString(t, "script,iframe"),
                    r = 0,
                    a = {
                        returnObject: !0,
                        selector: n
                    };
                return y.filterScripts(e, t, a).forEach((function(e) {
                    i.splice(e.scriptPosition - r++, 1)
                })), t = i.join("")
            },
            trackImpressionsInViewability: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                return e.length && t.length ? (t instanceof Array ? t.forEach((function(t, i, r) {
                    r[i] = y.filterOutImpressions(e, t, n)
                })) : t = y.filterOutImpressions(e, t, n), t) : t
            },
            getQS: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.applyProtocolToUrl(window.location.href),
                    i = arguments.length > 3 ? arguments[3] : void 0;
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var r, a = i ? new RegExp("[\\?&]" + e + "=([^&#]*)", "g") : new RegExp("[\\?&]" + e + "=([^&#]*)");
                if (i)
                    for (var o; o = a.exec(n);) r = o;
                else r = a.exec(n);
                return null == r ? t : r[1]
            },
            fowardQS: function(e) {
                var t = y.getQS(e);
                return "" != t ? "&" + e + "=" + t : ""
            },
            removeQueryKeyValuePairs: function(e, t) {
                e = "string" == typeof e ? [e] : e;
                var n = y.qetQueryStringParams(t);
                return e.forEach((function(e) {
                    n.params[e] && delete n.params[e]
                })), y.buildQueryStringFromKeyValuePairs(n.params, n.base)
            },
            qetQueryStringParams: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href,
                    t = {
                        base: "",
                        params: {}
                    };
                if (!e) return t;
                var n = e.split("?");
                if (t.base = n[0], !n[1]) return t;
                var i, r = {};
                return n[1].split("&").forEach((function(e, t) {
                    2 === (i = e.split("=")).length && (r[i[0]] = i[1])
                })), t.params = r, t
            },
            buildQueryStringFromKeyValuePairs: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = Object.keys(e);
                return n.length ? n.reduce((function(t, n, i) {
                    return (t += 0 === i ? "" : "&") + "".concat(n, "=").concat(e[n])
                }), "".concat(t, "?")) : t
            },
            getUrlVars: function() {
                for (var e, t = [], n = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), i = 0; i < n.length; i++) e = n[i].split("="), t.push(e[0]), t[e[0]] = e[1];
                return t
            },
            ampModeHandler: function(e) {
                return !(!e || void 0 === window.context.noContentAvailable) && (window.context.noContentAvailable(), !0)
            },
            breakOutIframe: function() {
                var e = null,
                    t = u();
                if (window != t) {
                    for (var n = window; n.parent != t;) n = window.parent;
                    t.ntv && (ntv = t.ntv);
                    for (var i = 0; i < t.frames.length; i++) try {
                        t.frames[i] == n && (e = n.frameElement)
                    } catch (e) {}
                    e && (ntv.win = t)
                }
                return ntv.win = ntv.win || window, e
            },
            isInIframe: function(e) {
                return u() != e.ownerDocument.defaultView
            },
            removeSubDomains: function() {
                var e = document.domain.split("."),
                    t = e.length;
                return e[t - 2] + "." + e[t - 1]
            },
            postError: function(e) {
                var t = {
                        name: e.name || "",
                        msg: e.message || "",
                        stack: e.stack || "",
                        href: encodeURIComponent(window.window.location.href)
                    },
                    n = JSON.stringify(t),
                    i = Math.floor(20 * Math.random());
                m[n] || 1 !== i || (m[n] = !0, y.ajax({
                    method: "post",
                    url: y.getProtocol() + "//" + r.JDOMAIN + "/clientErrorLogging",
                    contentType: "application/json",
                    val: JSON.stringify({
                        errorType: t.name,
                        errorMessage: t.msg,
                        severityLevel: "Error",
                        errorStacktrace: t.stack
                    }),
                    success: function(e) {},
                    error: function(e) {}
                }))
            },
            setTimeout: function(e) {
                function t(t, n) {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }, t
            }((function(e, t) {
                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
                setTimeout((function() {
                    try {
                        e.apply(null, i)
                    } catch (e) {
                        y.postError(e)
                    }
                }), t)
            })),
            compose: function(e) {
                var t = Array.prototype.slice.apply(arguments),
                    n = t.length - 1,
                    i = e;
                if (1 === t.length && !y.is("f", e)) return i;
                do {
                    i = t[n](i)
                } while (n-- > 0);
                return i
            },
            getElementOffset: function(e) {
                for (var t = {
                        top: e.offsetTop,
                        left: e.offsetLeft,
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    }; e.offsetParent;) e = e.offsetParent, t.top += e.offsetTop, t.left += e.offsetLeft;
                return t
            },
            buildExperimentUrl: function(e, t) {
                return e ? (t ? "" : "&") + r.EXPERIMENT + "=" + e : ""
            },
            parseCascadeValue: function(e, t) {
                var n = t.reduce((function(e, t) {
                    return e[t] ? e[t] : {
                        undefined: !0
                    }
                }), e);
                return "object" == h(n) && n.undefined ? null : n
            },
            getVideoSelectorName: function() {
                return y.adBlocker ? r.VIDEO_ID_EDGE_SELECTOR : r.VIDEO_ID_SELECTOR
            },
            getPrefix: function() {
                return y.adBlocker ? r.EDGE_PREFIX : r.NTV_PREFIX
            },
            attachFirstPartyCookieQS: function(e) {
                return e ? "&ntv_fpc=" + e : ""
            },
            onDOMContentLoaded: function(e) {
                "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
            },
            isOnFocus: function() {
                return a.onFocus
            },
            setOnFocus: function(e) {
                a.onFocus = e
            },
            onFocusEvents: p,
            rewriteAdBlockedAssets: function() {
                if (y.adBlocker) {
                    var e = new URL(y.applyProtocolToUrl(y.adBlockerDomain)).hostname,
                        t = Object.getOwnPropertyDescriptor(Image.prototype, "src");
                    Object.defineProperty(Image.prototype, "src", {
                        set: function(n) {
                            try {
                                n.startsWith("//") && (n = "https:" + n);
                                var i = new URL(n).hostname;
                                i.indexOf(e) > -1 || n.indexOf("data:") >= 0 ? t.set.call(this, [n]) : t.set.call(this, [y.adBlockerValidation(n, !0, i)])
                            } catch (e) {
                                t.set.call(this, [n])
                            }
                        }
                    });
                    var n = Element.prototype.appendChild;
                    Element.prototype.appendChild = function() {
                        var t = Array.prototype.slice.call(arguments);
                        return t[0] = b(t[0], e), n.apply(this, t)
                    }
                }
            },
            insertMacrosIntoString: function(e, t) {
                return Object.keys(t).forEach((function(n) {
                    e = e.replace(n, t[n])
                })), e
            },
            extractDomain: function(e) {
                var t;
                t = e.indexOf("://") > -1 ? e.split("/")[2] : e.split("/")[0];
                t.indexOf("www.") > -1 && (t = t.split("www.")[1]);
                return t = (t = t.split(":")[0]).split("?")[0]
            },
            queryAllChildren: function(e, t) {
                return (Array.isArray(e) ? e : T(e)).map((function(e) {
                    return e.querySelectorAll(t)
                })).filter((function(e) {
                    return e.length
                }))
            },
            subQueryResultsToArray: function(e) {
                return (Array.isArray(e) ? e : T(e)).reduce((function(e, t) {
                    return e.concat(T(t))
                }), [])
            },
            nodeListToArray: T,
            useVideoJSUpdate: function() {
                var e = window.location.hostname.replace("www.", "");
                return -1 !== ["sfgate.com", "localhost"].indexOf(e)
            },
            stripHtmlTags: function(e) {
                return e && e.replace ? e.replace(/<(\/?[a-zA-Z0-9]*)\b[^>]*>/gi, "") : e
            },
            decodeHtmlEntity: function(e) {
                return e.replace(/&#(\d+);/g, (function(e, t) {
                    return String.fromCharCode(t)
                }))
            }
        };

    function E(e) {
        var t, n = function(e) {
            if (!e) return document.querySelector("head");
            if ("NTV-DIV" === e.nodeName) return e;
            var t = e.querySelector("ntv-div") || e.querySelector("head");
            return t || document.querySelector("head")
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document);
        Array.isArray(e) ? (t = ntv.query(n)).append.apply(t, f(e)) : ntv.query(n).append(e)
    }

    function b(e, t) {
        if (e && e.src) {
            var n = new URL(e.src);
            if (-1 === n.hostname.indexOf(t) && -1 === n.toString().indexOf("javascript:false") && -1 === n.toString().indexOf("about:blank")) {
                var i = y.adBlockerValidation(e.src, !0, t);
                try {
                    e.setAttribute("src", i)
                } catch (e) {}
            }
        }
        if (e.children)
            for (var r in e.children) b(r, t);
        return e
    }

    function T(e) {
        for (var t = new Array(e.length), n = 0; n < e.length; n++) t[n] = e[n];
        return t
    }
    g.ntvjQueryInit = y.ntvjQueryInit, g.ntvExtends = y.ntvExtends, g.ntvAppendStylesheet = y.ntvAppendStylesheet, g.ntvAppendScript = y.ntvAppendScript;
    var k = i(0),
        S = i.n(k);

    function w(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (S()(ntv, "PostRelease.ampMode") && e && t) {
            var i = e.width,
                r = e.height,
                a = e.allowOverflow,
                o = void 0 !== a && a,
                s = n.success,
                c = void 0 === s ? function() {
                    return !0
                } : s,
                l = n.failure,
                u = void 0 === l ? function(e) {
                    return y.postError(e)
                } : l;
            t.requestResize(i, r, o), t.onResizeSuccess((function(e, t) {
                return c.call(null, e, t)
            })), t.onResizeDenied((function(e, t) {
                return u.call(null, e, t)
            }))
        }
    }

    function P(e) {
        return new I(e)
    }

    function I(e) {
        this.isArticle = e
    }

    function A(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    I.prototype.ntvStopWatch = function(e, t) {
        return this.startTime = null, this.rval = 0, this.event = e, this.triggerTime = t, this.eventFired = !1, this.stop = function() {
            return null != this.startTime && (this.rval += new Date - this.startTime, this.startTime = null), this
        }, this.reset = function() {
            return this.startTime = null, this.rval = 0, this
        }, this.resume = function() {
            if (!this.preventResume) return null == this.startTime && (this.startTime = new Date, this.checkEvent()), this
        }, this.duration = function() {
            var e = this.rval;
            return null != this.startTime && (e += new Date - this.startTime), e
        }, this.checkEvent = function() {
            if (null != this.event && null != this.triggerTime)
                if (this.duration() >= this.triggerTime && !this.eventFired) this.event(), this.eventFired = !0;
                else if (null != this.startTime) {
                var e = this;
                setTimeout((function() {
                    e.checkEvent()
                }), 50)
            }
            return this
        }, this
    }, I.prototype.ntvTimeOnContentStopWatch = function(e, t) {
        var n = this,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
        "function" != typeof this.ntvStopWatch && this.ntvStopWatch(), this.parent = e, this.cap = 6e5, this.totalTime = 0, this.sampleTimes = y.getSampleTimeArray(this.cap), this.triggerTime = null, this.onLeaveTracked = !1, this.engagements = [{
            time: 5e3,
            actionType: 38
        }, {
            time: 15e3,
            actionType: 24
        }], this.nextEngagement = function() {
            return n.engagements[0] || null
        }, this.overridingActionType = t;
        var a = this;
        return this.onLeave = function() {
            if (a.onLeaveTracked || (a.onLeaveTracked = !0, a.totalTime > 0 && a.trackTimeOnContent(!0)), y.isChrome()) return ""
        }, this.init = function() {
            i.addEventListener("beforeunload", this.onLeave), i.addEventListener("pagehide", this.onLeave), i.addEventListener("unload", this.onLeave)
        }, this.init(), this.checkEvent = function() {
            if (this.sampleTimes && this.sampleTimes.length >= 0) {
                if (null == this.triggerTime) {
                    if (!(this.sampleTimes.length > 0)) return;
                    this.triggerTime = this.sampleTimes.shift()
                }
                var e = this.nextEngagement();
                if (this.isArticle && e && this.totalTime + this.duration() >= e.time && (this.engagements.shift(), y.appendImage(this.parent.tracker.getUrl(e.actionType))), this.duration() >= this.triggerTime) this.trackTimeOnContent(!1), this.triggerTime = null, this.resume();
                else if (null != this.startTime) {
                    var t = this;
                    setTimeout((function() {
                        t.checkEvent()
                    }), 1e3)
                }
            }
            return this
        }, this.trackTimeOnContent = function(e) {
            if (this.parent.isPreRoll && this.parent.prerollPlaying || this.parent.player && "function" == typeof this.parent.player.getCurrentTime && (isNaN(this.parent.player.getCurrentTime()) || 0 == this.parent.player.getCurrentTime())) this.reset();
            else {
                var t = this.duration();
                if (this.totalTime += t, this.totalTime > this.cap && (t -= this.totalTime - this.cap, this.totalTime = this.cap), (!(t <= 0) || e) && (t <= 0 && (t = 0), !(t <= 100 && 0 != t) || e)) {
                    var n = this.parent.tracker.getUrl(this.overridingActionType || 87);
                    return n += "&" + r.VALUE + "=" + t, e && (n += "&" + r.TOTAL_VALUE + "=" + this.totalTime), y.appendImage(n), this.reset(), this
                }
            }
        }, this.stopAndTrack = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            arguments.length > 1 && arguments[1];
            return this.stop(), this.trackTimeOnContent(e), e && (a.totalTime = 0), this
        }, this
    }, I.prototype.addStopWatchEventHandlers = function(e) {
        var t = this;
        return document.addEventListener("visibilitychange", (function(n) {
            e.handler.call(t, n)
        }), !1), this
    };
    var C = 0,
        R = function() {
            function e(t) {
                var n = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.startPosition = 0, this.trackScrollInit = function() {}, this.trackScrollDepth = function(e) {}, this.trackScrollDepthCheckpoint = function(e) {}, Object.assign(this, t), this.colorIndex = C, C++, this.window = y.getTopWindow(), this.document = this.window.document, this.viewElement = this.document.scrollingElement || this.document.documentElement, this.viewHeight = this.viewElement.clientHeight, this.trackElement || (this.trackElement = this.viewElement), this.setInitVars(), this.scrollPercentageDeltaThreshold = 5, this.scrollTimeoutDuration = 100, this.isScrolling = null, this.resizeTimeoutDuration = 100, this.isResizing = null, this.heightSettleTime = 0, this.heightSettleIntervalDuration = 100, this.heightSettleTimeout = 1e3, this.nextScrollDepthCheckpoint = function() {
                    return n.scrollDepthCheckpoints[0] || null
                }, this.scrollHandler = this.onScroll.bind(this), this.resizeHandler = this.onResize.bind(this);
                var i = function e(t) {
                        "loading" !== n.document.readyState && (n.document.removeEventListener("readystatechange", e), n.init() && n.enable())
                    },
                    r = this.getContentHeight(),
                    a = this.getContentHeight();
                "interactive" !== this.document.readyState && "complete" !== this.document.readyState ? this.document.addEventListener("readystatechange", i) : function e(t) {
                    setTimeout((function() {
                        if (n.heightSettleTime += n.heightSettleIntervalDuration, r = n.getContentHeight(), a !== r && n.heightSettleTime < n.heightSettleTimeout) return a = r, void e(t);
                        n.lockState(), t()
                    }), n.heightSettleIntervalDuration)
                }(i)
            }
            var t, n, i;
            return t = e, (n = [{
                key: "setInitVars",
                value: function() {
                    this.contentHeight = 0, this.contentLocked = !1, this.scrollViewDepth = 0, this.scrollViewDepthPercentage = 0, this.maxScrollViewDepth = 0, this.maxScrollViewDepthPercentage = 0, this.scrollViewDepthDelta = 0, this.scrollViewDepthDeltaPercentage = 0, this.scrollDepthCheckpoints = [{
                        value: 25,
                        buffer: 0
                    }, {
                        value: 50,
                        buffer: 0
                    }, {
                        value: 75,
                        buffer: 0
                    }, {
                        value: 100,
                        buffer: 100
                    }], this.scrollInitTracked = !1, this.scrollCompletionTracked = !1, this.enabled = !1
                }
            }, {
                key: "enable",
                value: function() {
                    this.document.addEventListener("scroll", this.scrollHandler), this.window.addEventListener("resize", this.resizeHandler), this.enabled = !0
                }
            }, {
                key: "disable",
                value: function() {
                    this.document.removeEventListener("scroll", this.scrollHandler), this.window.removeEventListener("resize", this.resizeHandler), this.enabled = !1
                }
            }, {
                key: "init",
                value: function() {
                    return this.scrollDepthCheckpoints = this.scrollDepthCheckpoints.sort((function(e, t) {
                        return e.value - t.value
                    })), this.checkScrollState(), 100 !== this.scrollViewDepthPercentage
                }
            }, {
                key: "reset",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.setInitVars(), this.init(), e && this.enable()
                }
            }, {
                key: "unlockState",
                value: function() {
                    this.contentLocked = !1
                }
            }, {
                key: "lockState",
                value: function() {
                    !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], this.contentLocked = !0
                }
            }, {
                key: "checkScrollState",
                value: function() {
                    this.calculateViewDimensions(), this.updateScrolTracking()
                }
            }, {
                key: "calculateViewDimensions",
                value: function() {
                    this.viewHeight = this.viewElement.clientHeight
                }
            }, {
                key: "updateElementRect",
                value: function() {
                    this.trackElementRect = this.trackElement.getBoundingClientRect()
                }
            }, {
                key: "getRawScrollDistance",
                value: function() {
                    return this.updateElementRect(), this.trackElementRect.top
                }
            }, {
                key: "getScrollDistance",
                value: function() {
                    return this.getRawScrollDistance() - this.startPosition
                }
            }, {
                key: "getContentHeight",
                value: function() {
                    return this.contentLocked ? this.contentHeight + this.startPosition : (this.updateElementRect(), this.contentHeight = Math.max(this.trackElementRect.height, this.trackElement.scrollHeight), this.contentHeight + this.startPosition)
                }
            }, {
                key: "updateScrollData",
                value: function() {
                    this.scrollDistance = this.getScrollDistance(), this.scrollViewDepth = this.viewHeight - this.scrollDistance, this.scrollViewDepthPercentage = this.toElementPercentage(this.scrollViewDepth)
                }
            }, {
                key: "toElementPercentage",
                value: function(e) {
                    return Math.ceil(100 * (t = e / this.getContentHeight(), Math.max(0, Math.min(1, t))));
                    var t
                }
            }, {
                key: "updateScrolTracking",
                value: function() {
                    this.updateScrollData(), this.scrollViewDepthPercentage - this.maxScrollViewDepthPercentage < this.scrollPercentageDeltaThreshold && (100 !== this.scrollViewDepthPercentage || 100 === this.maxScrollViewDepthPercentage) || (this.calculateDeltaAndMax(), this.triggerScrollDepthTracking(), this.checkScrollDepthCheckpoints(), 100 == this.maxScrollViewDepthPercentage && (this.scrollCompletionTracked = !0, this.disable()))
                }
            }, {
                key: "calculateDeltaAndMax",
                value: function() {
                    this.scrollViewDepthDelta = this.scrollViewDepth - this.maxScrollViewDepth, this.scrollViewDepthDeltaPercentage = this.scrollViewDepthPercentage - this.maxScrollViewDepthPercentage, this.maxScrollViewDepth = this.scrollViewDepthDelta, this.maxScrollViewDepthPercentage = this.scrollViewDepthPercentage
                }
            }, {
                key: "onScroll",
                value: function() {
                    this.trackInitScroll(), clearTimeout(this.isScrolling), this.isScrolling = setTimeout(this.updateScrolTracking.bind(this), this.scrollTimeoutDuration)
                }
            }, {
                key: "onResize",
                value: function() {
                    clearTimeout(this.isResizing), this.isResizing = setTimeout(this.onResizeStop.bind(this), this.resizeTimeoutDuration)
                }
            }, {
                key: "onResizeStop",
                value: function() {
                    this.checkScrollState()
                }
            }, {
                key: "checkScrollDepthCheckpoints",
                value: function() {
                    var e = this.nextScrollDepthCheckpoint();
                    if (e) {
                        var t = this.toElementPercentage(e.buffer);
                        e && this.maxScrollViewDepthPercentage >= e.value - t && (this.triggerScrollDepthCheckpoint(e.value), this.scrollDepthCheckpoints.shift(), this.checkScrollDepthCheckpoints())
                    }
                }
            }, {
                key: "trackInitScroll",
                value: function() {
                    this.scrollInitTracked || (this.scrollInitTracked = !0, this.trackScrollInit && this.trackScrollInit())
                }
            }, {
                key: "triggerScrollDepthTracking",
                value: function() {
                    this.trackScrollDepth && this.trackScrollDepth(this.scrollViewDepthDeltaPercentage)
                }
            }, {
                key: "triggerScrollDepthCheckpoint",
                value: function(e) {
                    this.trackScrollDepthCheckpoint && this.trackScrollDepthCheckpoint(e)
                }
            }]) && A(t.prototype, n), i && A(t, i), e
        }(),
        _ = !0;
    try {
        window.sessionStorage.getItem("foo")
    } catch (e) {
        _ = !1
    }
    var D = function(e) {
            return _ ? window.sessionStorage.getItem(e) : l(e)
        },
        L = function(e, t) {
            _ ? window.sessionStorage.setItem(e, t) : c(e, t, 365)
        },
        O = i(1),
        x = i.n(O);

    function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function V(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function U(e) {
        return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var M = y.checkIfExistAndAppendQS,
        F = y.getQS,
        B = y.qetQueryStringParams,
        j = y.fowardQS,
        H = function(e, t) {
            t && "object" === U(t) && Object.keys(t).forEach((function(n) {
                switch (n) {
                    case "ntvSetNoAutoStart":
                    case "cfg.SetNoAutoStart":
                    case "preventAutoStart":
                        e.autoStart = !1;
                        break;
                    case "ntvArticle":
                    case "ntvClickoutTracking":
                    case "trackClickout":
                    case "cfg.ClickOutTracking":
                        e.measurement = !0;
                        break;
                    case "ntvRequestUrl":
                    case "requestUrl":
                    case "cfg.RequestUrl":
                        e.requestUrl = y.ntvTrim(t[n]);
                        break;
                    case "ntvDebug":
                    case "debug":
                    case "cfg.Debug":
                        e.debugMode = !0;
                        break;
                    case "ntvAmp":
                    case "googleAmp":
                    case "cfg.Amp":
                        e.ampMode = !0;
                        break;
                    case "ntvServerDomain":
                    case "adBlockerDomain":
                    case "cfg.ServerDomain":
                        y.adBlockerDomain = t[n], y.adBlocker = 1;
                        break;
                    case "experiment":
                    case "ntvExperiment":
                        e.experiment = t[n];
                        break;
                    case "mraid":
                    case "ntvMraid":
                        e.MRAID = !0;
                        break;
                    case "ntvEdge":
                        e.isEdge = !0;
                        break;
                    case "ntvAds":
                        e.ads = !0;
                        break;
                    case "ptd":
                        e.ptd = t[n];
                        break;
                    case "retry":
                        e.retry = !0
                }
            }))
        },
        W = function(e, t) {
            var n = M(e.advid, r.ADV_ID) + M(e.adversionplacementid, r.AVP) + M(e.placementid, r.PLC_ID) + j(r.OVERIDE_ARTICLE) + j(r.ABA) + j(r.RENDER_MODE) + j(r.ARTICLE_TMPL) + j(r.PASS_PREVIEW) + j(r.IP) + t;
            30 == e.rt && (n += "&" + r.FRAUD), e.debugMode && (n += "&" + r.DEBUG_MODE), document.referrer.length > 0 && (n += M(document.referrer, r.PAGE_REF));
            var i, a = (i = "", window.STR && (i += "1,"), window._tlModuleLoader && (i += "5,"), window.AdsNative && (i += "21,"), window.Connatix && (i += "2,"), i.length > 0 && (i = i.substring(0, i.length - 1)), i);
            a.length > 0 && (n += "&" + r.TRACK_MEDIATION + "=" + a), D("ntvAds") && (n += "&" + r.SEEN_ADS + "=" + D("ntvAds")), ("playsInline" in document.createElement("video") || y.isAndroidPhone() && "autoplay" in document.createElement("video") || y.isAndroidTablet()) && (n += "&ntv_mvi");
            var o = y.getKeyValuePairs();
            return o && (n += "&" + r.KEY_VALUE_PAIRS + "=" + o), y.isPublisherLoadedInTopWindow() || (n += "&" + r.PUBLISHER_IN_IFRAME + "=1"), e.experiment && (n += "&" + r.EXPERIMENT + "=" + e.experiment), e.retry && e.ptd && (n += "&" + r.RETRY + "&" + r.PTD_FILTER + "=" + encodeURIComponent(e.ptd), delete e.ptd), n
        },
        z = function() {
            var e = document.querySelector("script[src*='//s.ntv.io/serve/load.js']") || document.querySelector("script[src*='//a.postrelease.com/serve/load.js']");
            return e ? function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(n, !0).forEach((function(t) {
                        V(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({}, Y(e), {}, e.dataset) : {}
        },
        Y = function(e) {
            return e ? Array.prototype.slice.apply(e.attributes).filter((function(e) {
                return /(^ntv-)(.*)/.test(e.name)
            })).reduce((function(e, t) {
                return e[x()(t.name)] = t.value, e
            }), {}) : {}
        },
        G = function() {
            var e, t, n = (e = B(), {
                autoStart: !0,
                requestUrl: window.location,
                rt: 1,
                makeAdRequest: !0,
                debugMode: !1,
                ampMode: !1,
                experiment: "",
                MRAID: !1,
                adversionplacementid: "",
                placementid: "",
                retry: !1,
                ptd: "",
                baseURL: e.base,
                qs: e.params
            });
            return ntv.attrValues = z(), H(n, ntv.attrValues), window._prx && H(n, (t = window._prx, Array.isArray(t) ? t.reduce((function(e, t) {
                    return e[t[0]] = t[1] || "", e
                }), {}) : t)), window.ntvConfig && H(n, window.ntvConfig),
                function(e) {
                    e.measurement && (e.measurement = e.qs[r.ARTICLE_TMPL] || e.qs[r.AVP]), e.makeAdRequest = !e.measurement || !!e.ads
                }(n),
                function(e) {
                    var t = F(r.ADV_ID),
                        n = F(r.AVP),
                        i = F(r.PLC_ID);
                    t && (e.advid = t), n && (e.adversionplacementid = n), i && (e.placementid = i), e.qs[r.FRAUD] && (e.rt = 30)
                }(n), n
        },
        K = function(e, t) {
            return W(e, function(e) {
                var t = "";
                if (void 0 !== e)
                    for (var n in e) t += "&ntv_" + n + "=" + e[n];
                return t
            }(t))
        },
        X = function(e) {
            var t = {};
            return t.selector = window, t.adVersionPlacement = e.adversionplacementid, t.baseTrackingUrl = y.getProtocol() + "//" + y.getServerDomain() + "/trk.gif?" + r.AT + "=", t.secondaryImpressionTags = "", t.moatEnabled = !1, t.trackTimeOnContent = !0, t.recordType = 1, t.clickoutTracking = 1, t
        },
        Q = [25, 50, 75, 100],
        J = 200,
        $ = 15e3,
        Z = 5,
        ee = {},
        te = [];
    var ne = {
            performance: new function() {
                this.set = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime(),
                        n = {};
                    n[e] = t, te.push(n)
                }, this.get = function(e) {
                    if (e) {
                        for (var t = te.length - 1; t >= 0; t--)
                            if (te[t][e]) return te[t][e];
                        return null
                    }
                    return te
                }, this.sendRequest = function(e, t) {
                    var n = 2 == t || Math.random() <= .1;
                    Gn.setting.experiment && 0 == Gn.setting.experiment.indexOf("1*") && (n = !0), n && y.appendImage(e)
                }, this.validInt = function(e) {
                    return !isNaN(e) && e >= 0 && e < 6e4
                }, this.trackBeforeRender = function(e) {
                    if (!this.sentTrackBeforeRender) {
                        var t = this.get("getResponse"),
                            n = this.get("sendRequest"),
                            i = window.ntvLoadStart - window.performance.timing.navigationStart,
                            r = this.get("init") - window.ntvLoadStart,
                            a = t - n;
                        if (Gn.setting.isEdge && (n || (a = 0)), e) {
                            var o = e.trackingBaseUrl + "321,322,333&ntv_a=" + e.adVersionPlacement + "&ntv_jlt=" + i + "&ntv_jad=" + a + "&ntv_jte=" + r + y.buildExperimentUrl(Gn.setting.experiment);
                            a >= 0 && this.validInt(a) && this.validInt(i) && this.validInt(r) && (this.sentTrackBeforeRender = !0, this.sendRequest(o))
                        }
                    }
                }, this.trackAfterRender = function(e, t) {
                    var n = this.get("getResponse"),
                        i = new Date - n,
                        r = e.trackingBaseUrl + (1 == t ? "323" : "324") + "&ntv_a=" + e.adVersionPlacement + "&" + (1 == t ? "ntv_jtr" : "ntv_jar") + "=" + i + y.buildExperimentUrl(Gn.setting.experiment);
                    Gn.setting.isEdge && (n || (i = 0)), this.validInt(i) && this.sendRequest(r, t)
                }, this.setStart = function() {
                    this.get("preStart") || this.set("preStart", new Date - this.get("init")), this.set("start")
                }, this.responsivenessTracking = function() {
                    var e = (new Date).getTime(),
                        t = e - window.performance.timing.navigationStart;
                    setTimeout((function() {
                        ! function n(i, r, a, o, s) {
                            var c = (new Date).getTime(),
                                l = c - o - J;
                            if (i === Z) {
                                var u = s / i;
                                if (Q.forEach((function(n) {
                                        ee[n] || (u <= n ? ee[n] = a[0] - e - J + t : c - e > $ && (ee[n] = $))
                                    })), Object.keys(ee).length === Q.length) return;
                                var d = r.shift();
                                r.push(l), a.shift(), a.push(c), setTimeout((function() {
                                    n(i, r, a, c, s - d + l)
                                }), J)
                            } else r.push(l), a.push(c), setTimeout((function() {
                                n(i + 1, r, a, c, s + l)
                            }), J)
                        }(0, [], [], e, 0)
                    }), J)
                }, this.sendResponsivenessRequest = function(e, t) {
                    var n = this;
                    if (t && !this.sent)
                        if (Object.keys(ee).length === Q.length) {
                            var i = y.getBaseUrl() + r.AT + "=386,387,388,389&" + r.RESPONSIVENESS_1OO + "=" + ee[100] + "&" + r.RESPONSIVENESS_75 + "=" + ee[75] + "&" + r.RESPONSIVENESS_50 + "=" + ee[50] + "&" + r.RESPONSIVENESS_25 + "=" + ee[25] + "&" + r.SESSION_PL_ID + "=" + e + y.buildExperimentUrl(Gn.setting.experiment);
                            y.appendImage(i), this.sent = !0
                        } else setTimeout((function() {
                            return n.sendResponsivenessRequest(e, t)
                        }), 200)
                }
            }
        },
        ie = function(e, t) {
            var n = {
                providerID: e.ProviderID,
                rateType: e.RateType,
                amount: e.Amount,
                adVersionPlacement: e.AdVersionPlacement,
                completed: !1,
                skipLog: e.SkipLog
            };
            return t && (n.id = Math.round(1e3 * Math.random()).toString().concat((new Date).valueOf().toString()), n.selector = t.Selector, n.locator = t.Locator, n.adVersionPlacement = t.AdVersionPlacement), n
        },
        re = function(e) {
            var t = e.providerID;
            1 != t && 3 != t && 22 != t || (e.autoFillDetection = !0, ntv.query(window).bind("message", (function(t) {
                var n = t.originalEvent && t.originalEvent.origin ? t.originalEvent.origin : t.origin;
                n && n.indexOf("btlr.sharethrough.com") >= 0 && setTimeout((function() {
                    return function(e) {
                        var t = ntv.query(e.locator)[0];
                        t && ("true" == t.getAttribute("data-str-visited-flag") && (e.autoFillDetection = !0))
                    }(e)
                }), 200)
            })))
        },
        ae = function(e, t, n) {
            e == r.PB_ATT && t.skipLog && (e = r.PB_ATT_SKIP_LOG);
            var i = "";
            return (e == r.PB_CPM_IMP && 2 == t.rateType || e == r.PB_VCPM_IMP && 3 == t.rateType) && (i = "&" + r.VALUE + "=" + t.amount), t.skipLog && e != r.PB_ATT_SKIP_LOG && (i = "&" + r.REQ_OPTIONS + "=s"), n + e + "&" + r.AVP + "=" + t.adVersionPlacement + "&" + r.SUB_AT + "=" + t.providerID + i + y.setURLCache()
        },
        oe = function(e, t, n) {
            y.ntvAppendPixelImage(ae(e, t, n))
        },
        se = function e(t, n, i, a, o) {
            i < 0 ? oe(r.PB_NOT_FIL, n, a) : function(e, t) {
                var n = !1,
                    i = !1;
                if (e.locator) {
                    var r = document.querySelector(e.locator);
                    if (r) {
                        var a = r.getBoundingClientRect(),
                            o = a.width,
                            s = a.height;
                        o > 0 && s > 1 ? (n = !0, i = !0) : e.autoFillDetection && (n = !0, i = !1)
                    } else n = !1, i = !1
                } else n = !0, i = !1;
                t(n, i)
            }(n, (function(s, c) {
                s ? c ? (oe(r.PB_CPM_IMP, n, a), function(e, t, n) {
                    var i = {
                        primaryImpressionURL: ae(r.PB_VCPM_IMP, e, n),
                        thirdPartyTrackingTags: "",
                        selector: ntv.query(e.locator)[0],
                        minimumAreaViewable: t.minimumAreaViewable,
                        minimumExposedTime: t.minimumExposedTime,
                        checkOnFocus: t.checkOnFocus,
                        checkMinimumAreaViewable: t.checkMinimumAreaViewable,
                        infiniteScroll: !1,
                        placementID: t.placementID
                    };
                    y.trackReplacedNodeViewableImpression(i)
                }(n, o, a)) : oe(r.PB_NOT_FIL, n, a) : setTimeout((function() {
                    return e(t, n, i - 1, a, o)
                }), 100)
            }))
        },
        ce = function(e, t, n, i, a) {
            var o = ie(t, n);
            re(o),
                function(e, t, n, i) {
                    var a;
                    (a = t).selector = a.Selector, a.renderHtml = a.BodyTag, a.injectionMode = a.InjectionMode, e.isEdge && 0 == e.index ? oe(r.PB_ATT, n, i) : wt(t, (function() {
                        _t(t), oe(r.PB_ATT, n, i)
                    }), 50)
                }(e, n, o, i), se(e, o, 30, i, a)
        },
        le = function(e, t, n) {
            var i = e.Providers,
                a = i[e.index],
                o = ie(a || i[0]);
            e.index != i.length ? (a.HeaderTag.length > 0 && (e.isEdge && 0 == e.index || ntv.query("head").append(a.HeaderTag)), a.Placements.length ? a.Placements.forEach((function(i) {
                ce(e, a, i, t, n)
            })) : oe(r.PB_ATT, o, t), e.index += 1) : oe(r.PB_NOT_FIL, o, t)
        },
        ue = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = e.TrackingUrl;
            void 0 === e.index && (e.index = 0), n && (e.isEdge = !0), le(e, i, t)
        };

    function de(e) {
        return e.selector + (e.page ? '[page="'.concat(e.page, '"]') : "")
    }
    var pe = function e(t, n) {
            var i = ntv.query(t.selector),
                a = t.cpmExtraQS || "";
            i.length || t.foundOnEdge ? (t.inventoryTracked || (t.inventoryTracked = !0, y.appendImage(t.url + "303&" + r.AVP + "=" + t.adVersionPlacement + y.setURLCache() + a), new ntvViewableImpressionTracker(t.vcpmParams), ne.performance.trackAfterRender({
                adVersionPlacement: t.adVersionPlacement,
                trackingBaseUrl: t.url
            }, 1)), t.passback && i.length && (t.selector = i, t.passback.Providers.forEach((function(e) {
                e.Placements.length > 0 && !e.Placements[0].Selector && (e.Placements[0].Selector = i)
            })), t.passback.TrackingUrl = t.url, n.hb || ue(t.passback, t.vcpmParams))) : "complete" !== document.readyState && setTimeout((function() {
                return e(t, n)
            }), 100)
        },
        fe = {
            title: function(e) {
                return [{
                    pattern: /"@Title"/gi,
                    value: '"'.concat(e, '"')
                }, {
                    pattern: /@Title/gi,
                    value: "<ntv-title>".concat(e, "</ntv-title>")
                }]
            },
            url: function(e) {
                return [{
                    pattern: /@Url/gi,
                    value: e
                }]
            },
            authorlogo: function(e) {
                return [{
                    pattern: /@authorlogo/gi,
                    value: e
                }]
            },
            image: function(e) {
                return [{
                    pattern: /@Image/gi,
                    value: e
                }]
            },
            author: function(e) {
                return [{
                    pattern: /(@Author)(?!Logo)/gi,
                    value: e
                }]
            },
            preview: function(e) {
                return [{
                    pattern: /@Preview/gi,
                    value: "<ntv-preview>".concat(e, "</ntv-preview>")
                }]
            },
            viewableImpTrackers: function(e) {
                return [{
                    pattern: /"@dco_viewable_imp_tracker"/gi,
                    value: JSON.stringify(e)
                }]
            }
        },
        he = function(e, t) {
            if (!e) return t;
            var n, i = (n = e, Object.keys(n).filter((function(e) {
                return fe[e] && n[e]
            })).map((function(e) {
                return fe[e](n[e])
            })).reduce((function(e, t) {
                return e.concat(t)
            }), []));
            return i ? function(e, t) {
                return e.reduce((function(e, t) {
                    return ve(t.pattern, t.value, e)
                }), t)
            }(i, t) : t
        };

    function ve(e, t, n) {
        return n.replace(e, t)
    }
    var me = function(e, t) {
        throw new Error("Implement!")
    };

    function ge() {
        return {
            parseAssets: me,
            parseEventTrackers: me
        }
    }

    function ye(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function Ee(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var be = {
            title: "title",
            url: "url",
            authorlogo: "authorlogo",
            image: "image",
            author: "author",
            preview: "preview"
        },
        Te = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ye(n, !0).forEach((function(t) {
                    Ee(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }({}, be, {
            cta: "cta"
        });

    function ke(e, t) {
        this.config = {};
        var n = e.toutClickTracker;
        this.config.previewImageResizer = t.previewImageResizer, this.config.authorImageResizer = t.authorImageResizer, this.config.previewImageWidth = t.previewImageWidth, this.config.previewImageHeight = t.previewImageHeight, this.config.allowHeadLineTrimming = t.allowHeadLineTrimming, this.config.maxHeadLineLength = t.maxHeadLineLength, this.config.maxPreviewLength = t.maxPreviewLength;
        var i = y.qetQueryStringParams(n);
        i.params.hasOwnProperty(r.REDIRECT) && delete i.params[r.REDIRECT], this.config.clickTrackerRedirecrUrl = y.buildQueryStringFromKeyValuePairs(i.params, i.base), -1 === i.base.indexOf(r.REDIRECT) && (Object.keys(i.params).length > 0 && (this.config.clickTrackerRedirecrUrl += "&"), this.config.clickTrackerRedirecrUrl += "".concat(r.REDIRECT, "="))
    }

    function Se() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.authorImageResizer,
            n = void 0 === t ? "" : t,
            i = e.previewImageResizer,
            a = void 0 === i ? "" : i,
            o = e.clickTrackerRedirecrUrl,
            s = void 0 === o ? "" : o;
        ge.call(this);
        this.assetMap = {
            title: {
                name: function() {
                    return Te.title
                },
                value: function(e) {
                    return e.text
                }
            },
            link: {
                name: function() {
                    return Te.url
                },
                value: function(e) {
                    return s + e.url
                }
            },
            img: {
                name: function(e) {
                    return 1 === e ? Te.authorlogo : Te.image
                },
                value: function(e) {
                    var t, i = y.hasWebProtocol(e.url) ? e.url : y.getProtocol() + e.url;
                    return -1 === i.indexOf(r.CLOUDINARY_DOMAIN) && (i = (1 == (t = e.type) ? n : 3 == t ? a : "") + encodeURIComponent(i)), i
                }
            },
            data: {
                name: function(e) {
                    return 1 === e ? Te.author : 2 === e ? Te.preview : 12 === e ? Te.cta : void 0
                },
                value: function(e) {
                    return e.value
                }
            }
        }
    }

    function we(e, t) {
        if (null == e) return {};
        var n, i, r = function(e, t) {
            if (null == e) return {};
            var n, i, r = {},
                a = Object.keys(e);
            for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
    }

    function Pe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Pe(n, !0).forEach((function(t) {
                Ae(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pe(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Ae(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    ke.prototype.setParser = function(e) {
        var t = new e(this.config);
        if (!(!t instanceof ge)) return this.parser = t, this.parser
    }, ke.prototype.parseAssets = function(e) {
        if (this.parser) return this.parser.parseAssets(e)
    }, ke.prototype.parseEventTrackers = function(e) {
        if (this.parser) return this.parser.parseEventTrackers(e)
    }, ke.prototype.checkForMissingAssets = function(e) {
        return Object.keys(be).filter((function(t) {
            return !e[t]
        }))
    }, Se.prototype = Object.create(ge.prototype), Se.prototype.parseAssets = function(e) {
        var t = this;
        if (e) {
            var n, i, r, a = {};
            return e.forEach((function(e) {
                Object.keys(e).filter((function(e) {
                    return t.assetMap[e]
                })).forEach((function(o) {
                    i = e[o], (n = t.assetMap[o].name(i.type)) && (r = y.stripHtmlTags(y.decodeHtmlEntity(t.assetMap[o].value(i))), a[n] = r)
                }))
            })), a
        }
    }, Se.prototype.parseEventTrackers = function(e) {
        var t = 0,
            n = [],
            i = {};
        return e.forEach((function(e) {
            1 === e.event ? n.push(e.url) : 2 === e.event && (i[t++] = encodeURIComponent(e.url))
        })), i.length = t, i.isFlashTalking = !0, {
            primaryImpTrackers: n,
            viewableImpTrackers: i,
            fired: !1
        }
    };
    var Ce = function(e) {
        this.ad = e, this.adServerDCOData = this.getAdServerDCOData(this.ad), this.processedData = {
            type: this.determineType(this.ad),
            parsed: null,
            missing: null,
            config: {}
        }
    };
    Ce.prototype.processData = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Se;
        if (e || this.adServerDCOData) {
            this.assetProcessor = new ke(this.ad, this.adServerDCOData), this.assetProcessor.setParser(t);
            var n, i = this.getAssetArray(e),
                r = this.getAssetArray(this.adServerDCOData);
            for (this.assetArrayProcessOrder = [i, r]; !this.processedData.parsed && this.assetArrayProcessOrder.length;)(n = this.getNextProcessedDataSet()) && (this.processedData.parsed = n.parsed, this.processedData.missing = n.missing);
            return this.tryToFillMissingAssets(this.processedData), this
        }
    }, Ce.prototype.hasBeenProcessed = function() {
        return this.processedData.parsed && this.processedData.parsed.length > 0
    }, Ce.prototype.replaceAdTokens = function() {
        return this.hasBeenProcessed ? (this.ad.renderHtml = he(this.processedData.parsed[0].assets, this.ad.renderHtml), this) : this
    }, Ce.prototype.cleanUpAdTokens = function() {
        return this.ad.renderHtml = ve(/(@dco_primary_imp_tracker|@dco_viewable_imp_tracker|@Author|@FullTitle|@Url|@Title|@Image|@Sponsored|@Preview|@authorlogo)/gi, "", this.ad.renderHtml), this
    }, Ce.prototype.fireTrackers = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this.hasBeenProcessed ? e < 0 || e >= this.processedData.parsed.length ? this : (this.fireEventTrackers(this.processedData.parsed[e].eventtrackers), this) : this
    }, Ce.prototype.determineType = function(e) {
        return e.dcoResponse ? "DCO" : e.dynamicAssets.adType
    }, Ce.prototype.getAdServerDCOData = function(e) {
        if (e) return e.dynamicAssets ? Ie({}, e.dynamicAssets) : e.dcoResponse ? Ie({}, e.dcoResponse) : void 0
    }, Ce.prototype.getAssetArray = function(e) {
        if (e) return e.ads ? e.ads : [{
            assets: e.assets,
            eventtrackers: e.eventtrackers
        }]
    }, Ce.prototype.getNextProcessedDataSet = function() {
        var e = this.assetArrayProcessOrder[0];
        return this.assetArrayProcessOrder.shift(), this.processAssetArrays(e)
    }, Ce.prototype.processAssetArrays = function(e) {
        var t = this;
        if (e) {
            var n, i = [],
                r = [];
            return e.forEach((function(e) {
                n = {};
                var a = e.assets,
                    o = e.eventtrackers,
                    s = we(e, ["assets", "eventtrackers"]);
                n.assets = t.assetProcessor.parseAssets(a), n.eventtrackers = o ? t.assetProcessor.parseEventTrackers(o) : {}, n.params = s || {}, i.push(n), r.push(t.assetProcessor.checkForMissingAssets(n.assets))
            })), {
                parsed: i,
                missing: r
            }
        }
    }, Ce.prototype.tryToFillMissingAssets = function(e) {
        var t = e.missing.reduce((function(e, t) {
            return e || Boolean(t.length)
        }), !1);
        if (t && this.assetArrayProcessOrder.length) {
            var n = this.getNextProcessedDataSet().parsed[0].assets;
            e.missing.forEach((function(t, i) {
                t.forEach((function(t) {
                    n[t] && (e.parsed[i].assets[t] = n[t])
                }))
            })), t && this.assetArrayProcessOrder.length && tryToFillMissingAssets(e)
        }
    }, Ce.prototype.fireEventTrackers = function(e) {
        e && (e.primaryImpTrackers && e.primaryImpTrackers.forEach((function(e) {
            return y.appendThirdPartyTracking(e)
        })), e.viewableImpTrackers && (this.ad.renderHtml = he(e, this.ad.renderHtml)), e.fired = !0)
    };
    var Re = Ce,
        _e = function(e) {
            return new Promise((function(t, n) {
                if (e.dcoResponse || e.dynamicAssets) {
                    var i = new Re(e),
                        r = De.resolveDcoEndpointUrl(e),
                        a = function() {
                            i.replaceAdTokens().fireTrackers().cleanUpAdTokens(), t(i.processedData)
                        };
                    De.sendRequest(r).then((function(e) {
                        i.processData(e), a()
                    })).catch((function(e) {
                        i.processData(), a()
                    }))
                } else n("No flashtalk/dco data in ad")
            }))
        },
        De = {
            flashTalk: _e,
            resolveDcoEndpointUrl: function(e) {
                return e.dcoResponse && e.dcoResponse.dcoEndpointUrl ? e.dcoResponse.dcoEndpointUrl : e.dynamicAssets && e.dynamicAssets.assetUrl ? e.dynamicAssets.assetUrl : void 0
            },
            sendRequest: function(e) {
                return new Promise((function(t, n) {
                    e ? y.ajax({
                        method: "get",
                        url: e,
                        credentials: !0,
                        success: function(e) {
                            e && Object.keys(e).length > 0 && t(e), n()
                        },
                        error: function() {
                            n()
                        }
                    }) : n()
                }))
            }
        };

    function Le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function Oe(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var xe = window.ntv || {};

    function Ne(e, t, n) {
        var i = e,
            r = t,
            a = !0,
            o = !1,
            s = void 0,
            c = n.initialTimeout || 100,
            l = null == n.scrollIncrement ? 15 : n.scrollIncrement,
            u = n.startWaitTime,
            d = n.isPreview,
            p = n.customArgs,
            f = n.listenToMouse,
            h = n.isOverlay,
            v = n.heightRatio;

        function m(e) {
            var t = !1;
            a && (t = d ? function() {
                var e = function() {
                        var e = 0,
                            t = 0,
                            n = r.getBoundingClientRect(),
                            a = .25 * i.innerHeight,
                            o = n.top - a,
                            s = i.innerHeight + i.document.body.scrollTop;
                        Math.abs(o) > l && i.document.body.scrollHeight > s && (t = o < 0 ? -l : l);
                        n.right > i.innerWidth && (e = l);
                        return {
                            x: e,
                            y: t
                        }
                    }(),
                    t = e.x,
                    n = e.y;
                if (0 != t || 0 != n) return i.scrollBy(t, n), c = c < 15 ? 15 : c *= .55, !1;
                if (!(!i || !i.document || "complete" !== i.document.readyState || o)) return o = !0, c = 750, !1;
                var a = r.dataset.prevStyle || "";
                return delete r.dataset.prevStyle, r.setAttribute("style", a), c = -1, !0
            }() : function() {
                var e = p[0];
                if (!e) return;
                var t = r.children()[0],
                    n = y.getElementDimensions(e).h * v,
                    a = Ve(e, r, h, v).width;
                if (l && function(e) {
                        var t = y.getElementViewability(e);
                        if (t.visibleArea / t.totalArea < .5) return !1;
                        return !0
                    }(t)) {
                    var o = i.scrollTop,
                        u = i.clientHeight,
                        d = i.scrollHeight,
                        f = o + l;
                    f + u >= d ? (f = 0, c = 2e3) : c = 100, i.scrollTop = f
                }
                n != s && (s = n, t.setAttribute("style", "width: " + a + " !important; height: " + s + "px !important; top: 0px !important; visibility: visible; border: none; position: relative;"));
                return !1
            }()), !t && c > 0 ? y.setTimeout((function() {
                return m()
            }), c) : e && e()
        }
        return {
            execute: function(e) {
                var t = xe.query;
                f && (t(r).mouseover((function() {
                    return a = !1
                })), t(r).mouseout((function() {
                    return a = !0
                }))), y.setTimeout((function() {
                    return m(e)
                }), u || 0)
            }
        }
    }

    function Ve(e, t) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .4,
            r = e.ownerDocument.defaultView.getComputedStyle(e);
        return t.css("paddingLeft", r.paddingLeft), t.css("paddingRight", r.paddingRight), t.css("paddingTop", r.paddingTop), n ? (t.css("position", "absolute"), t.css("top", e.offsetTop + y.getElementDimensions(e).h * (1 - i)), t.css("left", e.offsetLeft)) : (t.css("height", "auto"), t.css("visibility", "visible")), r
    }
    var Ue = function(e, t, n, i) {
        if (e) {
            var r = function(e) {
                if (!e) return;
                if (!e.length) return e.dataset.ntvIsi = "true", e;
                for (var t = 0; t < e.length && e[t].dataset.ntvIsi; t++);
                if (t >= e.length) return;
                return e[t].dataset.ntvIsi = "true", e[t]
            }(e);
            if (r) {
                var a = i.isOverlay,
                    o = void 0 === a || a,
                    s = o ? .4 : .5,
                    c = prdom.query("#" + t + "-wrapper"),
                    l = y.getElementDimensions(r).h * s,
                    u = prdom.query("#" + t)[0],
                    d = Ve(r, c, o, s);
                r.parentNode.appendChild(c[0]), u.setAttribute("style", "width: " + d.width + " !important; height: " + l + "px !important; top:0px !important; visibility: visible; border: none; position: relative;");
                var p = y.writeIframe(u, "", unescape(u.getAttribute("data-ntv-header")), unescape(u.getAttribute("data-ntv-body")));
                u.removeAttribute("data-ntv-header"), u.removeAttribute("data-ntv-body"), Ne(p.querySelector("#ntv-isi-content"), c, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Le(n, !0).forEach((function(t) {
                            Oe(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(n).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    listenToMouse: !0,
                    startWaitTime: 500,
                    scrollIncrement: n,
                    customArgs: [r],
                    heightRatio: s
                }, i)).execute()
            }
        }
    };
    var Me, Fe = "//s.ntv.io/js/prebid3.js",
        Be = {
            accountId: "",
            bidders: [],
            enabled: !0,
            timeout: 1e3,
            adapter: "nativoServerBidAdapter",
            endpoint: "https://dev-prebid-server.internal.nativo.net/openrtb2/auction",
            syncEndpoint: "http://dev-prebid-elb.internal.nativo.net:8000/cookie_sync"
        },
        je = window,
        He = 2e3,
        We = [],
        qe = !0,
        ze = null;

    function Ye(e) {
        We.push(e),
            function() {
                var e = this,
                    t = document.querySelector('script[src*="'.concat(Fe, '"]'));
                return new Promise((function(n) {
                    t && n(), y.appendScript(y.getProtocol() + Fe, n.bind(e), "ntv-ntvPbjs")
                }))
            }().then(Ge)
    }

    function Ge() {
        if (qe) qe = !1, ze = null,
            function() {
                var e = We.pop(),
                    t = (e.type, e.params),
                    n = t.adUnits;
                t.tmax && (He = t.tmax);
                return n.forEach((function(e) {
                    if (0 == e.sizes.length && (e.sizes = [
                            [300, 250],
                            [300, 600]
                        ]), e.mediaTypes = {
                            video: {
                                context: "outstream",
                                playerSize: [640, 480]
                            },
                            banner: {
                                sizes: e.sizes
                            }
                        }, e.videoDivID = "" + e.placement, e.resultExtraQS = t.hbExtraQS || "", e.auctionTrackingExtraParams) {
                        var n = Qe(e.bids, r.BEFORE_AUCTION, e.auctionTrackingExtraParams);
                        y.appendImage(n)
                    }
                })), new Promise((function(t, n) {
                    (function(e) {
                        var t = e.params.adUnits || [],
                            n = function(e) {
                                var t, n = e.params,
                                    i = n.gdpr,
                                    r = n.usp,
                                    a = n.adUnits,
                                    o = {};
                                if ("s2s" === e.type) {
                                    var s, c = new Set,
                                        l = a.filter((function(e) {
                                            return s = e.bids[0].bidder, !c.has(s) && (c.add(s), !0)
                                        })).map((function(e) {
                                            return e.bids[0].bidder
                                        }));
                                    o.s2sConfig = Object.assign(Be, {
                                        bidders: l
                                    })
                                }
                                i && ((t = t || {}).gdpr = {}, t.gdpr.cmpApi = i.cmpApi, t.gdpr.timeout = i.timeout < He ? i.timeout : He, t.gdpr.allowAuctionWithoutConsent = !!i.allowAuctionWithoutConsent);
                                r && ((t = t || {}).usp = {}, t.usp.cmpApi = r.cmpApi, t.usp.timeout = r.timeout < He ? r.timeout : He);
                                t && (o.consentManagement = t);
                                return o
                            }(e);
                        return new Ke(e, t, n)
                    })(e).run().then((function(e) {
                        return e.processResponses()
                    })).then(t).catch(n)
                }))
            }().then((function() {
                qe = !0
            })).catch((function() {
                qe = !0
            }));
        else {
            if (ze) return;
            ze = setTimeout((function() {
                return Ge()
            }), 100)
        }
    }

    function Ke(e, t, n) {
        var i = this;
        this.spec = e, this.type = e.type, this.adUnits = t, this.config = n, this.processed = !1, this.adUnits.forEach((function(e) {
            if (!e.code) {
                var t = e.bids.find((function(e) {
                    return "nativo" === e.bidder
                }));
                t && t.params && t.params.ad && (e.code = t.params.ad.selector)
            }
        })), (Me = je.ntvPbjs || {}).que = Me.que || [], Me.que.push((function() {
            Me.setConfig(i.config)
        })), Me.trackWinningBid = function(e) {
            var t = function(e) {
                for (var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = 0; n < Me.adUnits.length; n++) {
                    var i = Me.adUnits[n];
                    if (i.code == e.adUnitCode)
                        for (var r = 0; r < i.bids.length; r++) {
                            var a = i.bids[r];
                            if (!t || "nativo" == a.bidder) return a.params
                        }
                }
            }(e.ad, "hb" === i.type);
            if (t) {
                var n = t.ad;
                n.id || (n.id = t.placementId);
                var a = n.tracking,
                    o = Xe(e.ad.bidder);
                ! function(e, t, n, i, a, o) {
                    var s = {
                        primaryImpressionURL: n.trackingBaseUrl + r.PB_VCPM_IMP + ",304&ntv_a=" + n.adVersionPlacement + "&" + i + "=" + a,
                        selector: e[0],
                        adID: n.vcpmParams.adID,
                        placementID: t.id,
                        checkMinimumAreaViewable: !0,
                        checkOnFocus: !0,
                        infiniteScroll: o,
                        minimumAreaViewable: .5,
                        minimumExposedTime: 1e3,
                        thirdPartyTrackingTags: ""
                    };
                    y.trackReplacedNodeViewableImpression(s)
                }(e, n, a, r.SUB_AT, o, !!t.ad.infScroll)
            }
        }
    }

    function Xe(e) {
        for (var t = 0; t < Me.adUnits.length; t++)
            for (var n = Me.adUnits[t], i = 0; i < n.bids.length; i++) {
                var r = n.bids[i];
                if (r.bidder == e) return r.bidderID
            }
        return 0
    }

    function Qe(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3] ? e.filter((function(e) {
                return "nativo" === e.bidder
            })) : e;
        if (i[0].params.ad) {
            var a = i[0].params.ad.tracking,
                o = a.trackingBaseUrl,
                s = a.adVersionPlacement;
            return o + t + "&" + r.AVP + "=" + s + n
        }
    }
    Ke.prototype.run = function() {
        var e = this;
        return new Promise((function(t) {
            e.prebidTimeout = setTimeout((function() {
                t(e)
            }), He + 200), Me.que.push((function() {
                Me.addAdUnits(e.adUnits), Me.requestBids({
                    timeout: He,
                    bidsBackHandler: function() {
                        e.prebidTimeout && clearTimeout(e.prebidTimeout), t(e)
                    }
                })
            }))
        }))
    }, Ke.prototype.processResponses = function() {
        this.processed || (this.processed = !0, this.setNativoTargetingAndRender())
    }, Ke.prototype.setNativoTargetingAndRender = function() {
        var e = this,
            t = [];
        this.adUnits.forEach((function(n) {
            var i = 0;
            n.bids.forEach((function(t) {
                "s2s" !== e.type && "nativo" !== t.bidder || (i = t.params.ad.injectionMode)
            })), e.targeting = Me.getNativoWinningBids(n.code), e.checkForSelectorAndRender(n, t, i)
        })), t.length && this.renderClientAd(t)
    }, Ke.prototype.checkForSelectorAndRender = function(e, t, n) {
        if (this.targeting) {
            var i = this.targeting.winner,
                a = e.auctionTrackingExtraParams,
                o = this.resolveSelector(e);
            if (o && document.querySelector(o) && ("nativo" === i.bidder ? (t.push(i.ad), this.trackBidRendering(i, e)) : (! function(e, t) {
                    if (t.passback) {
                        var n = t.passback.Providers || [],
                            i = t.params.adUnits.filter((function(t) {
                                return t.code === e.adUnitCode
                            })).map((function(e) {
                                return e.placement
                            }))[0];
                        n.forEach((function(e) {
                            e.Placements = e.Placements.filter((function(e) {
                                return e.Placement != i
                            }))
                        })), t.passback.Providers = n.filter((function(e) {
                            return !0 === e.PlacementSpecific
                        }))
                    }
                }(i, this.spec), i.adUnitCode = o, Me.onEvent("bidWon", this.trackBidRendering.bind(this, i, e), e.code), Me.renderNativoAd(i, n)), a)) {
                var s = Qe(e.bids, r.AFTER_AUCTION, a);
                y.appendImage(s)
            }
        }
    }, Ke.prototype.trackBidRendering = function(e, t) {
        if ("hb" === this.type) {
            var n = y.getProtocol() + "//" + y.getServerDomain() + "/hb.gif";
            y.ajax({
                method: "POST",
                contentType: "application/x-www-form-urlencoded",
                url: n,
                val: t.resultExtraQS + "&t=" + y.encryptUrl(JSON.stringify(this.targeting.auction)) + y.buildExperimentUrl(Gn.setting.experiment, !1)
            })
        } else {
            var i = Xe(e.bidder),
                a = e.params[0].qsParams || "";
            a += "&" + r.SUB_AT + "=" + i, this.firePrimaryImpression(t, a)
        }
    }, Ke.prototype.resolveSelector = function(e) {
        return "s2s" === this.type && e.bids[0].params && e.bids[0].params.ad ? e.bids[0].params.ad.selector : e.code
    }, Ke.prototype.renderClientAd = function(e) {
        var t = this;
        if (e && 0 !== e.length) {
            var n = {};
            n.placements = e, n.passback = this.spec.passback, n.passback && n.passback.Providers.length && n.passback.Providers[0].Placements.length > 0 && n.passback.Providers[0].Placements[0].Locator && function(e) {
                e.passback.Providers.forEach((function(t) {
                    ! function(e, t) {
                        e.Placements.forEach((function(e, n) {
                            t.placements[n].selector = e.Locator, t.placements[n].prebid = !0
                        }))
                    }(t, e)
                }))
            }(n), Gn.ProcessResponse(n, !0)
        } else setTimeout((function() {
            return t.renderClientAd(e, t.spec)
        }), 0)
    }, Ke.prototype.firePrimaryImpression = function(e, t) {
        y.appendImage(Qe(e.bids, r.PB_CPM_IMP, e.auctionTrackingExtraParams, !1) + "&".concat(t))
    };
    var Je = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = e,
                i = 0,
                r = n ? n - 1 : 0,
                a = 0,
                o = a === i,
                s = a === r,
                c = a,
                l = !1,
                u = 0,
                d = t;

            function p() {
                return u = 1, h(a + 1)
            }

            function f() {
                return u = -1, h(a - 1)
            }

            function h(e) {
                return e = d ? e > r ? i : e < 0 ? r : e : Math.max(Math.min(e, r), i), o = !d && e === i, s = !d && e === r, e
            }

            function v(e) {
                return e != a ? (l = !0, c = a, a = e) : (l = !1, u = 0), a
            }
            return {
                curIndex: function() {
                    return a
                },
                prevIndex: function() {
                    return c
                },
                direction: function() {
                    return u
                },
                atStart: function() {
                    return o
                },
                atEnd: function() {
                    return s
                },
                hasChanged: function() {
                    return l
                },
                next: function() {
                    return v(p())
                },
                prev: function() {
                    return v(f())
                },
                go: function(e) {
                    return v(h(e))
                },
                length: function() {
                    return n
                }
            }
        },
        $e = function e(t, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
            y.getElementViewability(t).visible ? n && "function" == typeof n && n() : setTimeout((function() {
                e(t, n)
            }), i)
        };

    function Ze(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function et(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    var tt = {
            autoAdvance: !0,
            autoAdvanceWaitDuration: 5e3,
            autoAdvanceTimeoutID: null,
            animated: !0,
            looped: !0,
            cta: "Shop Now",
            stylesId: "ntv-native-carousel-styles",
            stylesUrl: "https://s.ntv.io/css/native-carousel.css"
        },
        nt = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.id = t.id, this.slideData = t.slideData, this.config = Object.assign(tt, t.config), this.mediaElements = [], this.state = {
                    resizing: !1,
                    userInteracted: !1
                }, this.ratio = this.config.previewImageHeight && this.config.previewImageWidth ? this.config.previewImageHeight / this.config.previewImageWidth : 0, this.ready = t.ready || function() {}, this.update = t.update || function() {}, this.state = {
                    slideIterator: new Je(t.slideData.length, this.config.looped),
                    ui: {}
                }, this.navigationActions = {
                    next: this.navigateNext,
                    prev: this.navigatePrevious,
                    click: this.clickOut
                }, this.element = this.config.document.createElement("div"), this.element.classList.add("ntv-carousel"), this.element.style = "\n      overflow: hidden;\n      position: absolute;\n      width: 100%;\n      height: auto;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1;\n      ", this.iframe = document.createElement("iframe"), this.iframe.id = this.id, this.iframe.classList.add("ntv-carousel-iframe"), this.iframe.setAttribute("scrolling", "no"), this.iframe.style = "\n        border: 0;\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n    ", this.iframe.addEventListener("load", this.init.bind(this), {
                    once: !0
                }), this.iframe.src = "about:blank", this.element.appendChild(this.iframe)
            }
            var t, n, i;
            return t = e, (n = [{
                key: "init",
                value: function() {
                    var e = this;
                    this.document = y.writeIframe(this.iframe, "", this.generateStyles(), ""), this.body = this.document.querySelector("body"), this.anchor = document.createElement("a"), this.anchor.setAttribute("target", "_blank"), this.frameContainer = this.document.createElement("div"), this.frameContainer.classList.add("ntv-carousel-container"), this.anchor.appendChild(this.frameContainer), this.body.appendChild(this.anchor), this.createMediaElements().then((function(t) {
                        e.waitForImageRender(t, (function() {
                            e.setIframeRatio(t), e.setupNavigationUI(), e.updateUI(), e.ready()
                        }))
                    })).catch()
                }
            }, {
                key: "waitForImageRender",
                value: function(e, t) {
                    var n = this;
                    e && !this.isImageRendered(e) ? requestAnimationFrame((function() {
                        n.waitForRender(el, t)
                    })) : t()
                }
            }, {
                key: "isImageRendered",
                value: function(e) {
                    return e.naturalWidth > 0 && e.naturalHeight > 0
                }
            }, {
                key: "createMediaElements",
                value: function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        var i, r = !1;
                        e.setIframeRatio.bind(e), e.slideData.forEach((function(a, o) {
                            if ((i = e.document.createElement(a.asset.tag)).classList.add("ntv-carousel-item"), 0 === o) {
                                if (!e.isImageRendered(i)) switch (r = !0, a.asset.tag) {
                                    case "img":
                                        i.addEventListener("load", (function() {
                                            t(this)
                                        }), {
                                            once: !0
                                        }), i.addEventListener("error", (function(e) {
                                            n(e)
                                        }), {
                                            once: !0
                                        })
                                }
                            } else i.classList.add("right");
                            i.src = a.asset.src, e.frameContainer.appendChild(i), e.mediaElements.push(i)
                        })), r || t()
                    }))
                }
            }, {
                key: "stopAnimation",
                value: function() {
                    this.config.animated, this.mediaElements.forEach((function(e) {
                        e.classList.remove("animated")
                    }))
                }
            }, {
                key: "setIframeRatio",
                value: function(e) {
                    this.iframe.width = e.width, this.iframe.height = e.height, this.ratio = e.height / e.width
                }
            }, {
                key: "generateStyles",
                value: function() {
                    return '<link rel="stylesheet" id='.concat(this.config.stylesId, " href=").concat(this.config.stylesUrl, "></link>")
                }
            }, {
                key: "setupNavigationUI",
                value: function() {
                    var e;
                    this.state.uiContainer = this.document.createElement("div"), this.state.uiContainer.id = "ntv-carousel-ui", this.state.uiContainer.style.zIndex = 100, this.state.ui.navPrev = this.generateOverlayButton(this.generateSVGPathElement("0 0 6 6", 12, 12, "m 4 1 l -2 2 l 2 2"), this.handleInteraction.bind(this, "prev"), "prev"), this.state.ui.navNext = this.generateOverlayButton(this.generateSVGPathElement("0 0 6 6", 12, 12, "m 2 1 l 2 2 l -2 2"), this.handleInteraction.bind(this, "next"), "next"), this.state.ui.navButton = this.generateOverlayButton(this.ctaLabelText(0), this.handleInteraction.bind(this, "click"), "click", "ntv-carousel-click-label"), (e = this.state.uiContainer).append.apply(e, Ze(Object.values(this.state.ui))), this.body.append(this.state.uiContainer)
                }
            }, {
                key: "generateSVGPathElement",
                value: function(e, t, n, i) {
                    var r = this.document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    r.setAttribute("viewBox", e), r.setAttribute("width", "".concat(t, "px")), r.setAttribute("height", "".concat(n, "px"));
                    var a = this.document.createElementNS("http://www.w3.org/2000/svg", "path");
                    return a.setAttribute("d", i), a.setAttribute("fill", "none"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-linecap", "round"), r.appendChild(a), r
                }
            }, {
                key: "generateOverlayButton",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "div",
                        r = this.document.createElement(i);
                    r.classList.add("label"), r.append(e);
                    var a = this.document.createElement("div");
                    return a.href = "#", a.addEventListener("click", t), a.classList.add("ntv-carousel-nav"), n && a.classList.add(n), a.appendChild(r), a
                }
            }, {
                key: "updateState",
                value: function() {
                    this.updateUI();
                    var e = this.state.slideIterator.curIndex(),
                        t = this.state.slideIterator.prevIndex(),
                        n = this.state.slideIterator.direction();
                    this.hideSlide(t, n, this.config.animated), this.resetSlide(e), this.showSlide(e, n, this.config.animated), this.state.complete || this.state.userInteracted || this.startSlideTimer(), this.update({
                        curIndex: e,
                        prevIndex: t
                    })
                }
            }, {
                key: "hideSlide",
                value: function(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        i = this.mediaElements[e];
                    i.style.zIndex = 5, setTimeout((function() {
                        i.style.zIndex = 1
                    }), 250), i.classList.add(t > 0 ? "left" : "right"), n && !this.state.resizing && i.classList.add("animated")
                }
            }, {
                key: "showSlide",
                value: function(e, t) {
                    var n = this,
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        r = this.mediaElements[e];
                    r.style.zIndex = 50, r.classList.remove("animated"), 0 !== t && r.classList.add(t > 0 ? "right" : "left"), requestAnimationFrame((function() {
                        r.classList.remove("right", "left"), i && !n.state.resizing && r.classList.add("animated")
                    }))
                }
            }, {
                key: "resetSlide",
                value: function(e) {
                    this.mediaElements[e].classList.remove("show", "left", "right", "animated")
                }
            }, {
                key: "updateUI",
                value: function() {
                    if (this.state.ui.navNext && this.state.ui.navNext.setAttribute("disabled", this.state.slideIterator.atEnd()), this.state.ui.navPrev && this.state.ui.navPrev.setAttribute("disabled", this.state.slideIterator.atStart()), this.state.ui.navButton) {
                        var e = this.ctaLabelText(this.state.slideIterator.curIndex());
                        this.state.ui.navButton.style.display = e ? "block" : "none", this.state.ui.navButton.querySelector(".label").textContent = e || this.config.cta
                    }
                    this.anchor.href = this.slideData[this.state.slideIterator.curIndex()].cta.url
                }
            }, {
                key: "ctaLabelText",
                value: function(e) {
                    return this.slideData[e].cta.label
                }
            }, {
                key: "handleInteraction",
                value: function(e, t) {
                    t.stopPropagation(), t.preventDefault(), this.state.userInteracted = !0, this.navigate(e)
                }
            }, {
                key: "navigate",
                value: function(e) {
                    this.resetSlideTimer(), this.navigationActions[e] && this.navigationActions[e].call(this)
                }
            }, {
                key: "navigateNext",
                value: function() {
                    this.state.slideIterator.next(), this.state.slideIterator.hasChanged() && this.updateState()
                }
            }, {
                key: "navigatePrevious",
                value: function() {
                    this.state.slideIterator.prev(), this.state.slideIterator.hasChanged() && this.updateState()
                }
            }, {
                key: "clickOut",
                value: function() {
                    window.open(this.slideData[this.state.slideIterator.curIndex()].cta.url, "_blank")
                }
            }, {
                key: "resetSlideTimer",
                value: function() {
                    this.config.autoAdvanceTimeoutID && clearTimeout(this.config.autoAdvanceTimeoutID)
                }
            }, {
                key: "startSlideTimer",
                value: function() {
                    this.config.autoAdvance && (this.resetSlideTimer(), this.state.slideIterator.atEnd() ? this.state.complete = !0 : this.config.autoAdvanceTimeoutID = setTimeout(this.navigateNext.bind(this), this.config.autoAdvanceWaitDuration))
                }
            }]) && et(t.prototype, n), i && et(t, i), e
        }();

    function it(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function rt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var at = {
            title: [{
                tag: "ntv-title",
                attribute: ""
            }, {
                tag: "a",
                attribute: "title"
            }, {
                tag: "img",
                attribute: "title"
            }, {
                tag: "span",
                attribute: "title"
            }],
            url: [{
                tag: "a",
                attribute: "href"
            }],
            authorlogo: [{
                tag: "img",
                attribute: "src"
            }],
            image: [{
                tag: "img",
                attribute: "src"
            }],
            author: [{
                tag: "a",
                attribute: "title"
            }, {
                tag: "img",
                attribute: "alt"
            }],
            preview: [{
                tag: "ntv-preview",
                attribute: ""
            }],
            cta: [{
                tag: "",
                attribute: ""
            }]
        },
        ot = function(e) {
            var t, n = {};
            return Object.keys(e).forEach((function(i) {
                t = e[i], at[i] && (n[i] = {
                    value: t,
                    usage: at[i].map((function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? it(n, !0).forEach((function(t) {
                                    rt(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : it(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e)
                    }))
                }, n[i].usage.forEach((function(e) {
                    e.selector = "".concat(e.tag).concat(e.attribute && "" != e.attribute ? "[".concat(e.attribute, '*="').concat(t, '"]') : "")
                })))
            })), n
        };

    function st(e) {
        return (st = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    y.getTopWindow();

    function ct(e, t, n, i, r) {
        var a = {},
            o = function() {
                var t;
                try {
                    switch (n) {
                        case 2:
                            t = y.appendScript(e);
                            break;
                        case 1:
                        default:
                            t = y.appendImage(e)
                    }
                    return {
                        type: n,
                        data: t
                    }
                } catch (e) {}
            },
            s = function() {
                var e;
                try {
                    if (t.length) {
                        var n = r && (r.node || Gn.adsMap[r.placementID + " " + r.adID].ad);
                        e = y.handleThirdPartyTracking(t, n)
                    }
                    return e
                } catch (e) {}
            };
        !(Math.floor(1e16 * Math.random()) < 5e15) || r && r.is70Percent ? (a.third = s(), a.first = o()) : (a.first = o(), a.third = s());
        var c = function(e) {
            return /(ntv_at=)([0-9,]+)/gi.test(e) ? e.match(/(ntv_at=)([0-9,]+)/gi)[0].split("=")[1] : ""
        }(e);
        return r && "object" === st(r) ? (r.actionType = c, a.additionalInfo = r) : (!isNaN(c) || isNaN(c) && c.split(",").length) && (a.additionalInfo = {
            actionType: c
        }), a
    }

    function lt() {
        var e;
        return arguments.length <= 2 ? e = Kn.apply(this, arguments) : (e = ct.apply(this, arguments), ntv.Events.PubSub.publish("tracking", e.additionalInfo)), e
    }

    function ut(e) {
        var t = this,
            n = e.baseTrackingUrl,
            i = e.adID,
            r = e.adVersionPlacement,
            a = e.thirdPartyTrackers,
            o = void 0 === a ? [] : a,
            s = e.slideID;
        this.baseTrackingUrl = n, this.adID = i, this.adVersionPlacement = r, this.thirdPartyTrackers = o, this.slideID = s, this.fired = {}, this.fireViewTracker = function() {
            t.sendTrackingData([Zn.gallery], s)
        }
    }

    function dt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function pt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function ft(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    y.insertTracking = ct, ut.prototype.sendTrackingData = function(e, t) {
        var n = this,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this.fired[e] || i) {
            var r = ei(this.baseTrackingUrl, e.join(), this.adID, this.adVersionPlacement);
            t && (r = r.concat("&ntv_sl=".concat(t))), this.fired[e] = r;
            var a = "";
            e.forEach((function(e) {
                n.thirdPartyTrackers[e] && (a += n.thirdPartyTrackers[e])
            })), ct(r, a, 1)
        }
    };
    var ht = {
            document: window.slideElement ? y.getTopWindow().document : window.document,
            resizeTimeoutDuration: 100
        },
        vt = function() {
            function e(t) {
                var n = this,
                    i = t.node,
                    r = void 0 === i ? null : i,
                    a = t.ad,
                    o = void 0 === a ? null : a,
                    s = t.assets,
                    c = void 0 === s ? {} : s,
                    l = t.config,
                    u = void 0 === l ? {} : l;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.config = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? dt(n, !0).forEach((function(t) {
                            pt(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dt(n).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, ht, {}, u), this.config.node = r || this.config.document, this.state = {
                    ui: {},
                    complete: !1,
                    resizing: !1,
                    resizeTimeout: null
                }, this.slideData = c, this.slideData.forEach((function(e) {
                    e.assetUsage = ot(e.assets)
                })), this.trackers = this.slideData.map((function(e) {
                    return new ut({
                        baseTrackingUrl: o.tracking.trackingBaseUrl,
                        adID: o.id,
                        adVersionPlacement: o.tracking.adVersionPlacement,
                        slideID: e.params ? e.params.slideID : void 0
                    })
                })), this.previewElement = this.getPreviewElement(), this.previewElement && (this.state.element || (this.state.element = this.previewElement.parentNode), this.mediaCarousel = new nt({
                    id: "ntv-native-carousel-".concat(o.id),
                    slideData: this.slideData.map((function(e) {
                        return {
                            asset: {
                                tag: "img",
                                src: e.assets.image
                            },
                            cta: {
                                label: e.assets.cta,
                                url: e.assets.url
                            },
                            slideID: e.params ? e.params.slideID : void 0
                        }
                    })),
                    config: this.config,
                    update: this.updateState.bind(this),
                    ready: function() {
                        n.fireViewTracker(), n.swapPreviewToGallery()
                    }
                }), this.mediaCarousel.element.style.visibility = "hidden", this.previewElement.parentNode.appendChild(this.mediaCarousel.element), $e(this.config.node, this.mediaCarousel.startSlideTimer.bind(this.mediaCarousel)), window.addEventListener("resize", this.handleResize.bind(this)))
            }
            var t, n, i;
            return t = e, (n = [{
                key: "swapPreviewToGallery",
                value: function() {
                    this.syncWithPreview(), this.previewElement.style.visibility = "hidden", this.mediaCarousel.element.style.visibility = "visible"
                }
            }, {
                key: "handleResize",
                value: function() {
                    var e = this;
                    this.state.resizing || (this.state.resizing = !0, this.mediaCarousel.stopAnimation(), this.mediaCarousel.resizing = !0), this.state.resizeTimeout && clearTimeout(this.state.resizeTimeout), this.state.resizeTimeout = setTimeout((function() {
                        e.state.resizing = !1, e.mediaCarousel.state.resizing = !1
                    }), this.config.resizeTimeoutDuration), this.syncWithPreview()
                }
            }, {
                key: "syncWithPreview",
                value: function() {
                    this.mediaCarousel.element.style.left = "".concat(this.previewElement.offsetLeft, "px"), this.mediaCarousel.element.style.top = "".concat(this.previewElement.offsetTop, "px"), this.mediaCarousel.element.style.width = "".concat(this.previewElement.width, "px"), this.mediaCarousel.element.style.height = "".concat(this.previewElement.height, "px")
                }
            }, {
                key: "getPreviewElement",
                value: function() {
                    return this.slideData[0].assetUsage.image ? this.config.node.querySelector(this.slideData[0].assetUsage.image.usage[0].selector) : void 0
                }
            }, {
                key: "fireViewTracker",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = this.trackers[e];
                    t && t.fireViewTracker()
                }
            }, {
                key: "updateState",
                value: function(e) {
                    this.updateContent(e), this.fireViewTracker(e.curIndex)
                }
            }, {
                key: "updateContent",
                value: function(e) {
                    var t = this,
                        n = this.slideData[e.curIndex].assetUsage,
                        i = this.slideData[e.prevIndex].assetUsage;
                    Object.keys(n).forEach((function(e) {
                        if ("image" !== e && "cta" !== e) {
                            var r = n[e],
                                a = i[e],
                                o = r.usage,
                                s = a.usage;
                            o.forEach((function(e, n) {
                                if (s[n].selector && a.value !== r.value) {
                                    var i = e.attribute;
                                    t.config.node.querySelectorAll(s[n].selector).forEach((function(e) {
                                        i && "" != i ? e.setAttribute(i, e.getAttribute(i).replace(a.value, r.value)) : e.innerHTML = e.innerHTML.replace(a.value, r.value)
                                    }))
                                }
                            }))
                        }
                    }))
                }
            }]) && ft(t.prototype, n), i && ft(t, i), e
        }(),
        mt = "CAROUSEL",
        gt = {};

    function yt(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var Et, bt, Tt, kt, St, wt = function e(t, n, i) {
            if (function(e) {
                    if (ntv.query(e.selector).length ? e.injectNode = ntv.query(e.selector).first() : 2 == e.dfpType && (y.breakOutIframe(), ntv.query(e.selector, ntv.win.document).length && (e.injectNode = ntv.query(e.selector, ntv.win.document).first())), e.injectNode && e.parentCount && 2 != e.dfpType) {
                        var t = y.breakOutIframe();
                        t && (e.injectNode = ntv.query(t), 1 == e.injectionMode && (e.injectionMode = 4));
                        for (var n = e.parentCount; e.injectNode.parent() && n > 0;) n--, e.injectNode = e.injectNode.parent()
                    }
                }(t), t.injectNode) return n();
            y.setTimeout((function() {
                e(t, n, i)
            }), i)
        },
        Pt = function(e) {
            e.dcoResponse || e.dynamicAssets ? _e(e).then((function(t) {
                Dt(e).then((function(n) {
                    "DCO" !== t.type && function(e, t, n) {
                        if (n) {
                            var i = {
                                node: e,
                                ad: t,
                                assets: n.parsed,
                                config: n.config
                            };
                            switch (n.type) {
                                case mt:
                                    gt[t.id] = new vt(i)
                            }
                        }
                    }(n[0], e, t)
                }))
            })).catch((function(t) {
                Dt(e)
            })) : Dt(e)
        },
        It = (Et = {}, bt = 0, Tt = 0, kt = 0, St = function(e, t) {
            ntv.events.trigger(e, t), ntv.Events.PubSub.publish(e, t)
        }, {
            renderInit: function(e, t) {
                bt = (Et = t).length, Tt = e
            },
            renderComplete: function(e, t, n) {
                var i = Et.indexOf(n); - 1 !== i && (kt += e ? 0 : 1, Et.splice(i, 1), function(e, t, n) {
                    St("adRenderingComplete", {
                        success: e,
                        placement: t,
                        id: n
                    })
                }(e, t, n), 0 === Et.length && St("allAdsRenderingComplete", {
                    success: 0 === kt,
                    adCount: bt,
                    placementCount: Tt
                }))
            }
        }),
        At = function(e) {
            e.ads.forEach((function(t) {
                var n = !(e.fragmentTemplate || e.infScroll || e.article);
                if (!n || !Gn.adsMap["".concat(e.id, " ").concat(t.id)] || Gn.adsMap["".concat(e.id, " ").concat(t.id)].processId == e.processId) {
                    var i = function(e, t) {
                        return e.placement = t.id, e.selector = t.selector, e.injectionMode = t.injectionMode, t.infScroll || (e.parentCount = t.parentCount), e.dfpType = t.dfpType || 0, e.tracking = t.tracking, e.renderHtml = e.preview.html, e
                    }(t, e);
                    i.toRegister = n, i.processId = e.processId, Gn.getfLevel(i),
                        function(e) {
                            var t = e.toutClickTracker,
                                n = e.selector;
                            if (window.Nativo) {
                                if (null != t) {
                                    var i = t;
                                    Nativo.tpc && Nativo.tpc[n] ? e.toutClickTracker = Nativo.tpc[n] + t : Nativo.thirdPartyClickUrl && (e.toutClickTracker = Nativo.thirdPartyClickUrl + t);
                                    var r = new RegExp(y.ntvRegexEscape(i).replace(/(ord=)[^\&]+/, "$1[^\\&]+").replace(/(ntv_az=)[^\&]+/, "$1[^\\&]+").replace(/(ntv_al=)[^\&]+/, "$1[^\\&]+").replace(/(ntv_ak=)[^\&]+/, "$1[^\\&]+"), "g");
                                    e.renderHtml = e.renderHtml.replace(r, e.toutClickTracker)
                                }
                                Nativo.atf && Nativo.atf.indexOf(e.id) < 0 && Nativo.atf.push(e.id)
                            }
                        }(i),
                        function(e, t, n) {
                            Gn.topWindow.ntvToutAds || (Gn.topWindow.ntvToutAds = {}), Gn.topWindow.ntvToutAds[e.id + "-" + t.id] = n
                        }(e, i, t),
                        function(e) {
                            e.viewableWhiteList && (Gn.viewableWhiteList[e.placement] = e.viewableWhiteList)
                        }(i), Pt(i),
                        function(e) {
                            if (y.isiOS()) {
                                var t = [];
                                for (D("ntvAds") && (t = D("ntvAds").split(",")), t.push(e); t.length > 10;) t.shift();
                                L("ntvAds", t.join(","))
                            }
                        }(i.id)
                }
            }))
        },
        Ct = function(e) {
            var t = !1;
            y.onDOMContentLoaded((function() {
                ! function() {
                    if (!t) {
                        var n = [{
                            id: e.id,
                            adLocation: e.selector
                        }];
                        ntv.events.trigger("noAd", n), ntv.Events.PubSub.publish("noAd", n), ntv.events.trigger("noad", n), ntv.Events.PubSub.publish("noad", n), t = !0
                    }
                }()
            }))
        },
        Rt = function(e, t) {
            y.ampModeHandler(Gn.ampMode) || (Ct(e), e.isABA || function(e, t) {
                Gn.inventoryTrackers.push(e);
                for (var n = 0; n < Gn.inventoryTrackers.length; n++) {
                    var i = Gn.inventoryTrackers[n];
                    Gn.inventoryTrackersHistory[i.placementID + "_" + i.selector] || (pe(i, t), Gn.inventoryTrackersHistory[i.placementID + "_" + i.selector] = !0)
                }
            }(function(e, t) {
                var n = e.tracking || {},
                    i = n.vcpmParams || {},
                    r = {};
                return i.thirdPartyTrackingTags = "", i.selector = de(e), i.placementID = e.id, i.isInvTracking = !0, r.url = n.trackingBaseUrl, r.selector = de(e), r.placementID = e.id, r.prebid = e.prebid, r.adVersionPlacement = n.adVersionPlacement, r.passback = t.passback ? t.passback : e.passback, r.vcpmParams = i, r.cpmExtraQS = e.tracking ? e.tracking.cpmExtraQS : "", r.foundOnEdge = e.foundOnEdge, r
            }(e, t), t))
        },
        _t = function(e) {
            var t;
            try {
                switch (Gn.referencePlacementPositions[e.selector] = function e(t) {
                    for (var n, i, r = 0, a = [], o = []; r < t.length;) t[r] instanceof HTMLElement && (i = t[r].getBoundingClientRect(), n = {
                        offsetWidth: t[r].offsetWidth,
                        offsetHeight: t[r].offsetHeight,
                        scrollTop: t[r].scrollTop,
                        scrollLeft: t[r].scrollLeft,
                        getBoundingClientRect: function() {
                            return i
                        }
                    }, t.children.length > 0 && (o = e(t.children)), n.children = function() {
                        return o
                    }, a.push(n)), r++;
                    return a
                }(ntv.query(e.selector)), t = ntv.query(e.renderHtml), e.injectionMode) {
                    case 0:
                        e.injectNode.before(t);
                        break;
                    case 1:
                        e.injectNode.replaceWith(t);
                        break;
                    case 2:
                        e.injectNode.after(t);
                        break;
                    case 3:
                        e.injectNode.prepend(t);
                        break;
                    case 4:
                        ntv.query(e.injectNode).hide(), e.injectNode.before(t)
                }
                if (Gn.isPreviewReq && !Gn.autoScrolling) {
                    var n = y.getQS(r.CLIENT_OPTIONS); - 1 !== n.indexOf("s") && (Gn.autoScrolling = !0, function e(t, n) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.document;
                        return new Promise((function(r) {
                            if ("complete" === i.readyState) {
                                if (t) {
                                    var a = t;
                                    if (a.length && (a = a.length > 1 ? a[0].parentNode : a[0]), a = y.isInIframe(a) ? a.ownerDocument.defaultView.frameElement : y.findLargestChild(a)) {
                                        var o = y.getTopWindow();
                                        if (-1 !== n.indexOf("h")) {
                                            var s = a.getAttribute("style");
                                            a.setAttribute("style", "box-shadow: 0px 0px 0px 10000px rgba(0,0,0,0.2); outline: 5px dashed lightblue; z-index: 9999999; position: relative;" + s), a.dataset.prevStyle = s
                                        }
                                        Ne(o, a, {
                                            initialTimeout: 150,
                                            startWaitTime: 500,
                                            scrollIncrement: 40,
                                            isPreview: !0
                                        }).execute(r)
                                    }
                                }
                            } else y.setTimeout((function() {
                                return e(t, n)
                            }), 0)
                        }))
                    }(t, n).then((function() {
                        Gn.autoScrolling = !1
                    })))
                }
            } catch (e) {
                y.postError(e)
            } finally {
                return e.toRegister && (Gn.adsMap[e.placement + " " + e.id] = {
                    processId: e.processId,
                    ad: t[0]
                }), It.renderComplete(void 0 !== t, e.placement, e.id), t
            }
        },
        Dt = function(e) {
            return new Promise((function(t) {
                wt(e, (function() {
                    t(_t(e))
                }), Gn.setting.isEdge ? 50 : 100)
            }))
        },
        Lt = function(e) {
            var t, n, i, r, a = e.tracking;
            (t = e).thirdPartyJSViewableImpTrackers = y.trackImpressionsInViewability(t.viewableWhiteList, t.thirdPartyJSViewableImpTrackers, t.selector), t.thirdpartyJSImpTrackers = y.trackImpressionsInViewability(t.viewableWhiteList, t.thirdpartyJSImpTrackers, t.selector),
                function(e) {
                    e.viewableWhiteList && (Gn.viewableWhiteList = e.viewableWhiteList), e.whiteListedThirdpartyDomains && (e.thirdPartyJSViewableImpTrackers && (Gn.thirdPartyJSViewableImpTrackers[e.placement] = {
                        whitelist: e.whiteListedThirdpartyDomains,
                        thirdparty: e.thirdPartyJSViewableImpTrackers
                    }), e.thirdpartyJSImpTrackers && e.thirdpartyJSImpTrackers.length && y.filterScripts(e.whiteListedThirdpartyDomains, e.thirdpartyJSImpTrackers))
                }(e), a && ne.performance.trackAfterRender(a, 1), n = y.getTopWindow().document.querySelectorAll(".ntvClickOut"), i = y.subQueryResultsToArray(y.queryAllChildren(n, "a")), r = y.subQueryResultsToArray(y.queryAllChildren(n, ".ntv_clickout_icon")), Gn.setupClickOut(yt(i), yt(r))
        },
        Ot = function(e) {
            var t = Gn.PlacementResponseCache[e];
            if (t) return t.ads ? (t.processId = y.generateUniqueId(1e7), void At(t)) : void Ye({
                type: "s2s",
                params: {
                    adUnits: [t]
                }
            })
        };

    function xt(e, t) {
        this.ad = t, this.selector = e.Selector, this.fragmentTemplate = e.FragmentTemplate, this.renderHtml = "", this.type = e.Type, this.injectionMode = e.Mode, this.injectNode = void 0
    }
    var Nt = function(e) {
            Ut(e, (function() {
                e.injectNode && _t(e)
            }))
        },
        Vt = function(e) {
            return e.fragmentTemplate.indexOf("@Content") > -1
        },
        Ut = function e(t, n) {
            var i = ntv.query;
            if (!t.injectNode)
                if (i(t.selector).length) {
                    var r, a, o, s;
                    if (t.injectNode = i(t.selector).first(), t.renderHtml = (r = t.fragmentTemplate, a = t.ad, o = '<img src="' + a.advertiser.logo + '" border="0">', r.replace(/@Title/g, a.article.title).replace(/@Datetime/g, a.articleTemplate.displayDate).replace(/@AuthorLogo/g, o).replace(/@Author/g, a.advertiser.name).replace(/@Preview/g, a.preview.text).replace(/@Content/g, '<div id="' + a.id + '" class="' + a.id + '">' + a.article.body + "</div>").replace(/@BottomArticle/g, "").replace(/@TopArticle/g, "").replace(/@RightRail/g, "")), s = t, new RegExp("\\bTOP\\b|\\bRIGHTRAIL\\b|\\bBOTTOMb\\b").test(s.type) && 1 != s.injectionMode)
                        if (3 === t.injectionMode && new RegExp("\\bTOP\\b").test(t.type)) {
                            var c = i(t.renderHtml)[0].cloneNode(!0);
                            c.className = i(t.renderHtml)[0].className + " ntv-companion", t.renderHtml = i(c), t.fragmentTemplate = i(c)[0].outerHTML
                        } else t.renderHtml = i(t.renderHtml).addClass("ntv-companion");
                    else "SLIDEMETADATA" == t.type && (t.renderHtml = i(t.renderHtml).addClass("ntv-gallery-metadata"));
                    n()
                } else setTimeout((function() {
                    return e(t, n)
                }), 10)
        };
    var Mt = function(e) {
            for (var t, n = e.fragments, i = e.ad, r = n.length, a = 0, o = !1, s = 0; s < r; s++) {
                var c = new xt(n[s], i);
                Nt(c), Vt(c) && (t = ntv.query("#" + i.id).parent()), a++
            }
            a === r && (o = !0), e.prxContainerElement = t, e.replaced = o
        },
        Ft = y.setTimeout,
        Bt = ntv.query;

    function jt(e) {
        this.ad = e, this.article = e.article, this.processId = e.processId, this.preview = e.preview, this.advertiser = e.advertiser, this.articleTemplate = e.articleTemplate, this.replaced = !1, this.prxContainerElement = void 0, this.adId = e.id, e.article && (this.paginationNextUrl = e.article.paginationNextUrl, this.paginationPreviousUrl = e.article.paginationPreviousUrl, this.title = e.article.title, this.body = e.article.body), e.articleTemplate && (this.removals = e.articleTemplate.removals, this.fragments = e.articleTemplate.fragments)
    }

    function Ht(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
        Gn.adsMap[e.ad.uid] = {
                processId: e.processId,
                article: e
            },
            function e(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
                    r = ntv.query;
                if (!(void 0 !== n && n < 100 && ++n >= 100))
                    if (t.paginationNextUrl || t.paginationPreviousUrl) switch (0 == r("a.prx_pagination_next").length && 0 == r("a.prx_pagination_previous").length) {
                            case !0:
                                Ft((function() {
                                    return e(t)
                                }), 100);
                                break;
                            default:
                                var a = r("a.prx_pagination_next"),
                                    o = r("a.prx_pagination_previous");
                                t.paginationNextUrl && "" != t.paginationNextUrl ? (a.attr("href", t.paginationNextUrl).attr("style", "display:inline-block"), !0) : a.attr("style", "display:none"), t.paginationPreviousUrl && "" != t.paginationPreviousUrl ? (o.attr("href", t.paginationPreviousUrl).attr("style", "display:inline-block"), !0) : o.attr("style", "display:none")
                        } else if (0 == r(".prx_pagination_wrapper").length && 0 == /loaded|complete/.test(i.readyState)) Ft((function() {
                            return e(t)
                        }), 100);
                        else {
                            if (0 == r(".prx_pagination_wrapper").length && /loaded|complete/.test(i.readyState)) return void 0 === n && (n = 0), void Ft((function() {
                                return e(t, n)
                            }), 100);
                            r(".prx_pagination_wrapper").attr("style", "display:none !important")
                        }
            }(e), e.removals && e.removals.length > 0 && function e(t, n) {
                for (var i = [], r = ntv.query, a = 0; a < t.length; a++) {
                    var o = t[a];
                    if (r(o.Selector).length > 0) switch (o.Type) {
                        case 1:
                            r(o.Selector).remove();
                            break;
                        case 2:
                            r(o.Selector).css("display", "none")
                    } else i.push(o)
                }
                i.length > 0 && n > 0 && (n--, Ft((function() {
                    return e(i, n)
                }), 100))
            }(e.removals, 100), Gn.executeShares && "function" == typeof Gn.executeShares[e.ad.id] && Gn.executeShares[e.ad.id](), Gn.articles[e.ad.id] = e.ad, Bt(t).bind(" ready load", (function() {
                return Gn.disableAdsFromElement(e.prxContainerElement)
            }))
    }
    var Wt = function(e) {
            e && (Gn.adsMap[e.uid] && Gn.adsMap[e.uid].processId != e.processId || function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.document;
                n.title = t.title, Mt(t), t.replaced && Ht(t), /loading|interactive|initialize/.test(n.readyState) && !t.replaced ? Ft((function() {
                    return e(t)
                }), 50) : t.replaced || Ht(t)
            }(new jt(e)))
        },
        qt = function(e, t) {
            ! function(e, t) {
                e.placements.length || y.ampModeHandler(t)
            }(e, t),
            function(e) {
                0 !== e.placements.length && (!(0 === e.placements.filter((function(e) {
                    return e.ads && e.ads.length
                })).length) || e.hb || e.containsInfScrollPlacements || y.onDOMContentLoaded((function() {
                    var t = e.placements.length;
                    ntv.events.trigger("noAds", [t]), ntv.Events.PubSub.publish("noAds", [t]), ntv.events.trigger("noads", [t]), ntv.Events.PubSub.publish("noads", [t])
                })))
            }(e), It.renderInit(e.placements.length, e.placements.filter((function(e) {
                return e.selector && e.ads.length
            })).map((function(e) {
                return e.ads[0].id
            }))), e.placements.forEach((function(t) {
                if (t.processId = e.processId, t.selector || t.parentCount) ! function(e, t) {
                    Gn.tout = !0, e.ads && e.ads.length > 0 ? At(e) : Rt(e, t)
                }(t, e);
                else {
                    var n = t.ads.pop();
                    n.uid = "".concat(t.id, " ").concat(n.id), n.processId = t.processId, Wt(n)
                }
                ne.performance.trackBeforeRender(t.tracking)
            }))
        };

    function zt(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Yt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Gt(e, t, n) {
        return t && Yt(e.prototype, t), n && Yt(e, n), e
    }
    var Kt = window.win || window,
        Xt = y.checkIfExistAndAppendQS,
        Qt = y.setURLCache,
        Jt = y.buildExperimentUrl,
        $t = y.debounce;

    function Zt(e, t) {
        t.containsInfScrollPlacements = !0, e.passbackHandler(t), PostRelease.ProcessResponse(t)
    }

    function en(e, t) {
        t.hasNextNode() && !e.processing && (e.processing = !0, ne.performance.set("sendRequest"), function(e, t) {
            var n = "https://".concat(y.getServerDomain()),
                i = "".concat(r.PLC_ID, "=").concat(encodeURIComponent(e.placement)),
                a = "".concat(r.PTD_FILTER, "=").concat(encodeURIComponent(e.placement)),
                o = "".concat(r.REQ_URL_NTV, "=").concat(window.location.href),
                s = "".concat(Xt(PostRelease.adsToFilter.join(), r.AD_FILTER)),
                c = "".concat(Xt(PostRelease.campaignsToFilter.join(), r.CMP_FILTER)),
                l = "".concat(Xt(PostRelease.advertisersToFilter.join(), r.ADV_FILTER)),
                u = Gn.setting.experiment,
                d = y.getKeyValuePairs() ? r.KEY_VALUE_PAIRS + "=" + y.getKeyValuePairs() : "",
                p = y.attachFirstPartyCookieQS(Gn.firstPartyCookie),
                f = "".concat(n, "/t.json?").concat(i, "&").concat(a, "&").concat(o).concat(s).concat(c).concat(l) + "".concat(Jt(u), "&").concat(d).concat(p).concat(Qt());
            y.ajax({
                method: "get",
                url: f,
                success: function(e) {
                    t(e)
                },
                error: function() {
                    t()
                },
                credentials: !0
            })
        }(t, (function(n) {
            if (t.increaseInterval(), n && n.placements && n.placements.length) {
                var i = n.placements.filter((function(e) {
                    return e.id === t.placement
                }));
                i.length && ((i = i[0]).selector = t.getSelector(), Zt(e, n))
            } else if (n && n.hb && n.hb.adUnits && n.hb.adUnits.length) {
                var r = n.hb.adUnits[0],
                    a = t.getSelector(),
                    o = r.bids.filter((function(e) {
                        return "nativo" === e.bidder
                    }));
                o && o.length && (o[0].params.ad.selector = a), r.code = a, Zt(e, n)
            }
            e.processing = !1, en(e, t)
        })))
    }
    var tn = function() {
            function e(t, n, i, r) {
                zt(this, e), this.selector = t, this.currentPosition = n, this.placement = i, this.interval = r
            }
            return Gt(e, [{
                key: "hasNextNode",
                value: function() {
                    return !!ntv.query(this.getNextSelector())[0]
                }
            }, {
                key: "getNextSelector",
                value: function() {
                    return this.selector.replace("%p%", this.currentPosition + this.interval)
                }
            }, {
                key: "getSelector",
                value: function() {
                    return this.selector.replace("%p%", this.currentPosition)
                }
            }, {
                key: "increaseInterval",
                value: function() {
                    this.currentPosition += this.interval
                }
            }]), e
        }(),
        nn = function() {
            function e() {
                zt(this, e), this.ISManager = {}, this.nodesInserted = []
            }
            return Gt(e, [{
                key: "trackPlacement",
                value: function(e) {
                    var t = this;
                    ["scroll", "load"].forEach((function(n) {
                        Kt.addEventListener(n, $t((function() {
                            return en(t, t.ISManager[e])
                        }), 20))
                    })), en(this, this.ISManager[e])
                }
            }, {
                key: "placementHandler",
                value: function(e) {
                    var t = this;
                    e.placements.filter((function(e) {
                        return e.infScroll && e.infScroll.interval > 0 && e.selector.indexOf("%p%") > 0
                    })).forEach((function(n) {
                        t.setManager(n, e), e.containsInfScrollPlacements = !0
                    }))
                }
            }, {
                key: "hbHandler",
                value: function(e) {
                    var t = this,
                        n = e.hb;
                    n && n.adUnits && n.adUnits.forEach((function(n) {
                        for (var i = 0; i < n.bids.length; i++) {
                            var r = n.bids[i];
                            if ("nativo" === r.bidder && r.params && r.params.ad && r.params.ad.infScroll && r.params.ad.selector.indexOf("%p%") > 0 && (e.containsInfScrollPlacements = !0, t.setManager(r.params.ad, e))) return void(n.code = t.getManager(n.placement).getSelector())
                        }
                    }))
                }
            }, {
                key: "passbackHandler",
                value: function(e) {
                    var t = this;
                    e.passback && e.containsInfScrollPlacements && e.passback.Providers.forEach((function(e) {
                        e.Placements.filter((function(e) {
                            return t.ISManager[e.Placement]
                        })).forEach((function(e) {
                            return e.Selector = t.ISManager[e.Placement].getSelector()
                        }))
                    }))
                }
            }, {
                key: "setManagers",
                value: function(e) {
                    this.placementHandler(e), this.hbHandler(e), this.passbackHandler(e)
                }
            }, {
                key: "setManager",
                value: function(e, t) {
                    var n = Gn.infScrollReset,
                        i = e.id,
                        r = e.infScroll,
                        a = e.selector;
                    if (null == this.ISManager[i]) {
                        var o = r.position,
                            s = r.interval,
                            c = new tn(a, o, i, s);
                        return t.placements.forEach((function(e) {
                            return e.ads.forEach((function(e) {
                                return Gn.getfLevel(e)
                            }))
                        })), this.ISManager[i] = c, this.trackPlacement(i), e.selector = this.ISManager[i].getSelector(), !0
                    }
                    return n ? this.ISManager[i].currentPosition = r.position : this.ISManager[i].increaseInterval(), e.selector = this.ISManager[i].getSelector(), !1
                }
            }, {
                key: "getManager",
                value: function(e) {
                    if (!(this.ISManager[e] && this.ISManager[e].interval <= 0)) return this.ISManager[e]
                }
            }]), e
        }(),
        rn = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
            return new Promise((function(t, n) {
                e.__cmp && "function" == typeof e.__cmp ? e.__cmp("getVendorConsents", [r.GDPR_VENDOR_ID], (function(e, i) {
                    i && e && e.gdprApplies && e.vendorConsents[r.GDPR_VENDOR_ID] ? t({
                        consentString: e.metadata,
                        apiVersion: 1
                    }) : n()
                })) : n()
            }))
        },
        an = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
            return new Promise((function(t, n) {
                e.__cmp && "function" == typeof e.__cmp ? e.__cmp("getVendorConsents", r.GDPR_VENDOR_ID, (function(e, i) {
                    i && e && e.gdprApplies && e.vendorConsents[r.GDPR_VENDOR_ID] ? t({
                        consentString: e.metadata,
                        apiVersion: 1
                    }) : n()
                })) : n()
            }))
        },
        on = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
            return new Promise((function(t, n) {
                e.__tcfapi && "function" == typeof e.__tcfapi ? e.__tcfapi("getTCData", 2, (function(e, i) {
                    i && e && e.gdprApplies && e.vendor.consents[r.GDPR_VENDOR_ID] ? t({
                        consentString: e.tcString,
                        apiVersion: 2
                    }) : n()
                }), [r.GDPR_VENDOR_ID]) : n()
            }))
        },
        sn = function() {
            return cn().then((function(e) {
                return e
            })).catch((function() {
                return ln()
            })).then((function(e) {
                return e
            }))
        },
        cn = function() {
            var e = u();
            return new Promise((function(t, n) {
                if (e.__uspapi && "function" == typeof e.__uspapi) {
                    var i = setTimeout((function() {
                        n()
                    }), 100);
                    e.__uspapi("getUSPData", 1, (function(e, r) {
                        clearTimeout(i), r ? (un(e.uspString), t(e.uspString)) : n()
                    }))
                } else n()
            }))
        },
        ln = function() {
            return new Promise((function(e) {
                e(l(r.US_PRIVACY_COOKIE))
            }))
        },
        un = function(e) {
            c(r.US_PRIVACY_COOKIE, e, 365)
        };

    function dn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function pn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? dn(n, !0).forEach((function(t) {
                fn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dn(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function fn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var hn = y.setTimeout,
        vn = new nn,
        mn = function(e) {
            var t;
            e.gdprConsentUrl && (y.breakOutIframe(), (t = u(), new Promise((function(e, n) {
                var i = setTimeout((function() {
                    n()
                }), 1e5);
                on(t).catch((function(e) {
                    return rn(t)
                })).catch((function(e) {
                    return an(t)
                })).catch((function(e) {
                    n()
                })).then((function(t) {
                    clearTimeout(i), e(t)
                }))
            }))).then((function(t) {
                y.appendImage(e.gdprConsentUrl + (t.consentString || "") + "&ntv_gdpr_version=".concat(t.apiVersion))
            })).catch((function(t) {
                y.appendImage(e.gdprConsentUrl)
            })))
        },
        gn = function(e) {
            var t = {};
            return e.passback && (t.passback = e.passback), e.hb ? pn({
                type: "hb",
                params: e.hb
            }, t) : e.s2s ? pn({
                type: "s2s",
                params: e.s2s
            }, t) : void 0
        },
        yn = function(e, t) {
            try {
                var n = ntv.PostRelease,
                    i = n.ampMode;
                ! function(e, t, n) {
                    t || n || !e.placementForTracking || Gn.sessionMgmt.initializeSession(e.placementForTracking, e.trackUserSessionTime)
                }(e, i, n.MRAID), e.processId = y.generateUniqueId(1e7), ne.performance.sendResponsivenessRequest(e.placementForTracking, e.trackUserSessionTime), t || ne.performance.set("getResponse"),
                    function(e) {
                        e.safeIframe && ntv.Tracking.Record()
                    }(e),
                    function(e) {
                        vn.setManagers(e)
                    }(e), qt(e, i),
                    function e(t) {
                        if (t.trackingCode) {
                            var n = ntv.query("body");
                            n.length ? n.append(t.trackingCode) : hn((function() {
                                return e(t)
                            }), 100)
                        }
                    }(e),
                    function(e) {
                        var t = gn(e);
                        t && t.params.adUnits && t.params.adUnits.length && Ye(t)
                    }(e), mn(e), e.usp && cn().catch((function(e) {}))
            } catch (e) {
                y.postError(e)
            }
        };
    var En = function(e) {
        e.isDFP = function(e) {
                var t = Gn.viewableImpressionTrackers,
                    n = 0,
                    i = e.placementID + "-" + e.adID;
                if (t instanceof Array && t.length)
                    do {
                        if (window.ntvToutAds && i in window.ntvToutAds && window.ntvToutAds[i].dfpType && window.ntvToutAds[i].ParentCount) return !0
                    } while (++n < t.length);
                return !1
            }(e), e.ampMode = Gn.ampMode,
            function(e) {
                y.adBlocker && (e.playerCssUrl && (y.videoJSUpdate() || (e.playerCssUrl = e.playerCssUrl.replace("player-skin-v5.css", "player-skin-v5.1.css")), e.renderingParams && e.renderingParams.cssUrl && (e.renderingParams.cssUrl = e.renderingParams.cssUrl.replace("sharing-skin-v5.css", "sharing-skin-v5.1.css"))), e.iframeBody && (e.iframeBody = e.iframeBody.replace(/ntvVideo/g, "prxVideo"), e.renderingParams.iframeTag && (e.renderingParams.iframeTag = e.renderingParams.iframeTag.replace(/ntvVideo/g, "prxVideo")), ntv.query("iframe[id^='ntvVideo']").each((function(e, t) {
                    t.id = t.id.replace("ntv", "prx")
                }))))
            }(e);
        var t, n = e.renderingParams,
            i = ntv.query,
            a = i(Gn.topWindow.document).find("." + n.outerCssClass);
        if (0 == a.size() && (a = i(document).find("." + n.outerCssClass)), i(a).find("a.prx_viewable_title" + e.placementID).click((function() {
                e.titleClicked = !0
            })), i(a).find("a.ntv-headline-anchor" + e.placementID).click((function() {
                e.titleClicked = !0
            })), 8 == n.videoExecution) {
            a.find(".ntv-play-overlay").remove(), y.adBlocker && (n.previewImage = n.previewImage.replace(r.ASSETS_PREFIX + y.getServerDomain(), y.getServerDomain()));
            var o = n.previewImage; - 1 == n.previewImage.indexOf("fetch") && (o = (o = n.previewImage.replace("//" + r.ASSETS_DOMAIN + "/", "")).replace(/(^\w+:|^)/, ""));
            var s = a.find("img[src*='" + o + "']");
            0 == s.length && (s = a.find("img[src*='" + encodeURIComponent(o) + "']")), s.length > 1 && (s = i(s[0])), s.parent().parent().is("a") && s.parent().parent().replaceWith(s.parent()), s.parent().is("a") && s.parent().replaceWith(s), s.replaceWith(n.iframeTag)
        }
        var c = ntv.Video,
            l = c.Player,
            u = c.Render,
            d = c.Tracker;
        switch (e.playerType) {
            case r.YOUTUBE_PLAYER:
                t = y.generateVideo(e, [l.YouTube, u.IFU, u.Skin, u.YouTubeSkin, u.Mobile], [c.Tracker.Nativo]);
                break;
            case r.AOL_PLAYER:
                t = y.generateVideo(e, [l.AOL, u.IFU, u.AOLVideoSkin], [c.Tracker.Nativo]);
                break;
            case r.PREROLL_NATIVO_PLAYER:
            case r.NATIVO_PLAYER:
            case r.VAST_PLAYER:
                t = y.generateVideo(function(e) {
                    var t = e.captionUrl || "",
                        n = ntv.query(e.iframeBody),
                        i = n.find("video");
                    return i[0].setAttribute("playsinline", ""), "" !== t && (i[0].setAttribute("crossorigin", "anonymous"), i.append('<track kind="captions" src="'.concat(t, '" srclang="en" label="English">'))), e.iframeBody = n[0].outerHTML, e
                }(e), [l.Nativo, u.IFU, u.Skin, u.Mobile], [d.Nativo, d.MOAT]);
                break;
            case r.VIANT_PLAYER:
                t = y.generateVideo(e, [l.ViantPlayer, u.IFU, u.ViantPlayerSkin], [c.Tracker.Nativo])
        }
        Gn.videoPlayers.push(t);
        var p = a.find("." + n.linkCssClass);
        t.clickedBeforeRendering = !1, p.map((function() {
            var e = i(this);
            y.isNotValidHeadlineLink(e) && (e.click((function() {
                return t.clickedBeforeRendering = !0, !1
            })), e.removeAttr("href").css("cursor", "pointer"))
        }))
    };

    function bn(e) {
        var t = document.cookie.split(";").filter((function(t) {
            return t.indexOf(e + "=") > -1
        }));
        return t.length ? t[0].split("=")[1] : "{}"
    }

    function Tn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    var kn = new function(e) {
            this.name = e;
            try {
                localStorage.getItem(this.name) || localStorage.setItem(this.name, "{}"), this.storageType = "localStorage"
            } catch (e) {
                document.cookie = "".concat(this.name, "=").concat(bn(this.name)), this.storageType = "cookie"
            }
            this.saveData = function(e) {
                switch (this.storageType) {
                    case "cookie":
                        document.cookie = "".concat(this.name, "=").concat(JSON.stringify(e));
                        break;
                    case "localStorage":
                        localStorage.setItem(this.name, JSON.stringify(e))
                }
            }, this.getData = function() {
                switch (this.storageType) {
                    case "cookie":
                        return JSON.parse(bn(this.name));
                    case "localStorage":
                        return JSON.parse(localStorage.getItem(this.name))
                }
            }
        }("ntvSession"),
        Sn = ["click", "keypress", "focus", "scroll"],
        wn = function(e, t, n) {
            return "&" + r.USER_SESSION_ID + "=" + e + "&" + r.SESSION_PL_ID + "=" + t + y.buildExperimentUrl(n)
        },
        Pn = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.trackUserSessionTime = !1, this.baseTrackingUrl = y.getBaseUrl()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "initializeSession",
                value: function(e, t) {
                    this.requestNewSessionIfExpired(e, t), this.bindEvents()
                }
            }, {
                key: "didSessionEnd",
                value: function() {
                    var e = kn.getData(),
                        t = !e || !Object.keys(e).length,
                        n = e && (new Date).getTime() >= e.sessionEndDate,
                        i = e && (new Date).getTime() - e.lastInteraction > 18e5;
                    return !!t || !(!n && !i) && (this.recordSession(), !0)
                }
            }, {
                key: "createSession",
                value: function(e, t) {
                    try {
                        var n = new Date;
                        localStorage.removeItem(kn.name);
                        var i = y.generateUniqueId(1e7),
                            a = Gn.setting.experiment || "";
                        kn.saveData({
                            id: i,
                            placementID: e,
                            lastInteraction: n.getTime(),
                            sessionStart: n.getTime(),
                            sessionEndDate: new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1).getTime(),
                            trackUserSessionTime: t,
                            experiment: a
                        }), y.appendImage(this.baseTrackingUrl + r.AT + "=394" + wn(i, e, a))
                    } catch (e) {}
                }
            }, {
                key: "recordSession",
                value: function() {
                    if (kn.getData().trackUserSessionTime) {
                        var e = kn.getData(),
                            t = e.lastInteraction - e.sessionStart,
                            n = this.baseTrackingUrl + r.AT + "=395&" + r.USER_SESSION_DURATION + "=" + t + wn(e.id, e.placementID, e.experiment);
                        y.appendImage(n)
                    }
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var e = this;
                    Sn.forEach((function(t) {
                        document.addEventListener(t, y.debounce((function() {
                            var t = kn.getData(),
                                n = t.placementID,
                                i = t.trackUserSessionTime;
                            e.requestNewSessionIfExpired(n, i) || (t.lastInteraction = (new Date).getTime(), kn.saveData(t))
                        }), 200))
                    }))
                }
            }, {
                key: "requestNewSessionIfExpired",
                value: function(e, t) {
                    return !!this.didSessionEnd() && (this.createSession(e, t), !0)
                }
            }]) && Tn(t.prototype, n), i && Tn(t, i), e
        }();

    function In(e, t) {
        (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.open)(e, t, "status=1,width=600,height=400")
    }
    var An = function(e) {
            return In(e, "share_facebook")
        },
        Cn = function(e) {
            return In(e, "share_twitter")
        },
        Rn = function(e) {
            return In(e, "share_linkedin")
        },
        _n = function(e) {
            return In(e, "share_google")
        },
        Dn = function(e) {
            return In(e, "share_pinterest")
        },
        Ln = function(e) {
            return In(e, "share_stumbleupon")
        },
        On = function(e, t) {
            return window.location = "mailto:?subject=" + encodeURIComponent(e) + "&body=" + encodeURIComponent(t)
        },
        xn = y.setTimeout,
        Nn = (y.getTopWindow(), function(e, t, n, i) {
            var a = e.ampMode && e.requestUrl && document.referrer.toString().includes(e.requestUrl) ? document.referrer : e.requestUrl.toString();
            if (i && i.length > 0 && (a = y.removeQueryKeyValuePairs(i, a)), 0 === a.indexOf("http://webcache.googleusercontent.com")) try {
                a = ntv.query("div#google-cache-hdr div a")[0].href
            } catch (e) {}
            var o = y.getServerDomain();
            y.appendScript("https://" + o + "/t?" + r.REQ_URL_NTV + "=" + encodeURIComponent(a) + t + y.attachFirstPartyCookieQS(n) + (e.usprivacy ? "&".concat(r.US_PRIVACY, "=").concat(e.usprivacy) : "")), ne.performance.set("sendRequest")
        });

    function Vn(e, t, n) {
        var i = t.href;
        if (e.obfuscateTracking) {
            var r = "<script>window.open('" + i + "','_blank')<\/script>";
            ntv.Tracking.Record(r)
        } else n && (n.preventDefault(), n.stopImmediatePropagation()), t.target ? window.open(i, t.target) : xn((function() {
            window.top.location = i
        }), y.isMobile() ? 500 : 100)
    }

    function Un(e, t, n, i) {
        var a = this.topWindow.ntvToutAds[i],
            o = (n.attributes["sync-tracking"] || {}).value,
            s = a ? a.toutClick3rdPartyTracking : [],
            c = event || top.event,
            l = c.type;
        if (o) {
            if (n.isClicked) return;
            "_blank" != n.target && n.addEventListener("click", (function(e) {
                e.preventDefault(), e.stopPropagation()
            }));
            var u = !1,
                d = 0;
            n.isClicked = !0, c && (c.preventDefault(), c.stopPropagation()), s.push(o);
            var p = s.length,
                f = function() {
                    ++d === p && (u = !0, n.href = e, Vn(a, n, c))
                };
            s.forEach((function(e) {
                y.appendIframe(e, f)
            })), xn((function() {
                u || (n.href = e, Vn(a, n, c))
            }), 2e3)
        } else switch (l) {
            case "onclick":
            case "click":
                if (i && this.topWindow.ntvToutAds[i] && !this.topWindow.ntvToutAds[i].clickHandlerFired) {
                    if (a.clickHandlerFired = !0, a.toutClick3rdPartyTracking)
                        for (var h = 0; h < a.toutClick3rdPartyTracking.length; h++) y.appendImage(a.toutClick3rdPartyTracking[h], a.obfuscateTracking);
                    var v = n.getAttribute("ntv-click-bypass");
                    if (v) return void y.appendImage(v, a.obfuscateTracking);
                    Vn(a, n, c)
                }
                return !1;
            default:
                var m = t ? e + (y.isOnFocus() ? "" : "&" + r.FRAUD) : e,
                    g = this.clickThrough ? m.replace(/@redirectUrl/gi, this.clickThrough) : m; - 1 === n.href.indexOf("tel:") ? n.href = g : (n.setAttribute("target", "_self"), n.setAttribute("ntv-click-bypass", g))
        }
    }

    function Mn(e, t, n, i, r) {
        if (e) {
            e = e instanceof HTMLElement ? e : e[0], t = t instanceof HTMLElement ? t : t[0];
            var a = n + "-" + i;
            e.insertBefore(t.parentNode, e.childNodes[0]), t.style.position = "absolute", t.style.zIndex = "9998", ntv.query(t).addClass(a), t.style.right = "0px", t.style.top = "0px", xn((function() {
                return t.style.visibility = "visible"
            }), 5e3), "undefined" == !r && (ntv.query(window).on(" ready load resize", Mn(e, t, n, i, !0)), ntv.query(e).ready((function() {
                return Mn(e, t, n, i, !0)
            })), ntv.query(document).ready((function() {
                return Mn(e, t, n, i, !0)
            })), xn((function() {
                "undefined" != ntv.PostRelease.adChoiceTracksNodeCount && document.body.children.length == ntv.PostRelease.adChoiceTracksNodeCount || (ntv.PostRelease.adChoiceTracksNodeCount = document.body.children.length, Mn(e, t, n, i, !0))
            }), 150))
        }
    }
    var Fn = function e(t) {
            if (y.canExecute((function() {
                    e(t)
                }), "disableAdsFromElement", 100)) {
                var n = ntv.query(t);
                n.removeClass((function(e, t) {
                    return (t.match(/\bitxt\S+/g) || []).join(" ")
                })), n.find("[class*='itxt']").replaceWith((function() {
                    return ntv.query(this).text()
                })), n.find(".kLink").replaceWith((function() {
                    return ntv.query(this).text()
                })), n.find(".IL_AD").replaceWith((function() {
                    return ntv.query(this).text()
                }))
            }
        },
        Bn = function(e, t) {
            if (e && e.length && e.length > 0) {
                var n = document.domain;
                e.forEach((function(e) {
                    if (!e.hasAttribute("ntv-force-target")) {
                        var t = y.extractDomain(y.getQS("ntv_r", "", e.href));
                        t || (t = y.extractDomain(e.href)), e.setAttribute("aria-label", "Opens in a new window"), n.indexOf(t) >= 0 ? e.setAttribute("target", "_top") : e.setAttribute("target", "_blank")
                    }
                }))
            }
            t && t.length && t.length > 0 && t.forEach((function(e) {
                if (0 === e.children.length) {
                    var t = document.createElement("span");
                    t.classList.add("ntv-clickout__icon"), t.setAttribute("aria-hidden", "true"), t.setAttribute("title", "Opens in a new window"), e.appendChild(t)
                }
            }))
        },
        jn = function(e) {
            if (y.canExecute((function() {
                    Gn.checkIsAdVisible()
                }), "viewable", 100))
                for (var t = Gn.viewableImpressionTrackers.length, n = 0; n < t; n++) {
                    var i = Gn.viewableImpressionTrackers[n];
                    i && i.checkViewability(e)
                }
        };

    function Hn(e) {
        this.infScrollReset = !1, e && e instanceof Object && (this.infScrollReset = e.infScrollReset || !1, delete e.infScrollReset);
        var t = !!this.setting.adversionplacementid;
        this.ampMode = this.setting.ampMode, this.MRAID = this.setting.MRAID, this.requestUrl = this.setting.requestUrl, Gn.inventoryTrackersHistory = {}, Gn.inventoryTrackers = [], Gn.viewableImpressionTrackers = [], this.setting.makeAdRequest || this.setting.MRAID ? (! function(e, t) {
            var n = K(Gn.setting, e);
            sn().then((function(e) {
                Gn.setting.usprivacy = e, Nn(Gn.setting, n, Gn.firstPartyCookie, t)
            }))
        }(e, this.setting.measurement ? [r.ARTICLE_TMPL, r.AVP] : []), this.setting.measurement && ntv.Tracking.startTrackingArticle(X(this.setting))) : t && ntv.Tracking.startTrackingArticle(X(this.setting))
    }
    var Wn = function(e) {
            switch (e.filteringLevel) {
                case 0:
                    Gn.advertisersToFilter.indexOf(e.advertiser.id) < 0 && Gn.advertisersToFilter.push(e.advertiser.id);
                    break;
                case 1:
                    Gn.campaignsToFilter.indexOf(e.campaignID) < 0 && Gn.campaignsToFilter.push(e.campaignID);
                    break;
                case 2:
                    Gn.adsToFilter.indexOf(e.id) < 0 && Gn.adsToFilter.push(e.id)
            }
        },
        qn = function(e, t) {
            switch (e) {
                case 0:
                    Gn.advertisersToFilter.indexOf(t) < 0 && Gn.advertisersToFilter.push(t);
                    break;
                case 1:
                    Gn.campaignsToFilter.indexOf(t) < 0 && Gn.campaignsToFilter.push(t);
                    break;
                case 2:
                    Gn.adsToFilter.indexOf(t) < 0 && Gn.adsToFilter.push(t)
            }
        };

    function zn(e) {
        c(r.NTV_UID, e, 365)
    }

    function Yn() {
        c(r.NTV_UID, "", -1)
    }
    var Gn = new function() {
        try {
            this.setting = G(), this.firstPartyCookie = l(r.NTV_UID), this.adsToFilter = [], this.campaignsToFilter = [], this.advertisersToFilter = [], this.viewableImpressionTrackers = [], this.videoViewableTrackers = [], this.inventoryTrackers = [], this.videoPlayers = [], this.articles = [], this.ampMode = !1, this.MRAID = !1, this.requestUrl = "", this.referencePlacementPositions = [], this.inventoryTrackersHistory = {}, this.thirdPartyJSViewableImpTrackers = [], this.viewableWhiteList = {}, this.isPreviewReq = "s" === y.getQS(r.REQ_OPTIONS), this.InsertAd = _t, this.PlacementResponseCache = {}, this.LazyRenderPlacement = Ot, this.postRender = Lt, this.activateISI = Ue, this.getTopWindow = y.getTopWindow, this.topWindow = y.getTopWindow(), this.GetHrefUrl = Un.bind(this), this.positionAdChoice = Mn, this.disableAdsFromElement = Fn, this.OpenShareFacebook = An, this.OpenShareTwitter = Cn, this.OpenShareLinkedIn = Rn, this.OpenShareGoogle = _n, this.OpenSharePinterest = Dn, this.OpenShareStumbleUpon = Ln, this.OpenShareEmail = On, this.ProcessResponse = yn, this.setupClickOut = Bn, this.setupVideo = En, this.checkIsAdVisible = jn, this.getfLevel = Wn, this.filterAdByFilteringLevel = qn, this.Start = Hn.bind(this), this.sessionMgmt = new Pn, this.Passback = ue, this.trackFirstPartyCookie = zn, this.deleteFirstPartyCookie = Yn, this.adsMap = {}
        } catch (e) {
            y.postError(e)
        }
    };

    function Kn(e, t) {
        y.copyProperties(e, this), this.parent = t, this.secondaryImpressionActionType = 2, this.clickActionType = 3, this.videoStartActionType = 56, this.videoEndActionType = 23, this.videoProgress25PercentActionType = 39, this.videoProgress50PercentActionType = 40, this.videoProgress75PercentActionType = 41, this.videoHeadlineClick = 48, this.clickToUnMute = 55, this.readAndClickActionTypes = "2,3", this.articlePageViewActionType = 52, this.videoView = 22, this.videoBillableView = 58, this.videoPlayed15SecondsType = 60, this.videoPlayed30SecondsType = 61, this.prerollVideoStartType = 62, this.prerollVideoEndType = 63, this.optVideoByClick = 65, this.getUrl = function(e) {
            var t = this.baseTrackingUrl + e;
            return (this.adVersionPlacement.length > 0 || this.adID >= 1e5) && (t += "&" + r.AVP + "=" + this.adVersionPlacement), t += y.setURLCache()
        }
    }

    function Xn(e) {
        y.copyProperties(e, this), this.element = null, this.tracker = new Kn(e, this), this.resetTimeOnContentVars(), this.maxWidth = 0, this.trackType = "article", this.init()
    }

    function Qn(e, t, n) {
        var i, r, a, o, s, c, l, u = n || 0;
        Object.getPrototypeOf(e).nquery && (e = e[0]);
        try {
            var d = e.getBoundingClientRect();
            i = {
                top: d.top,
                right: d.right,
                bottom: d.bottom,
                left: d.left,
                width: d.width,
                height: d.height,
                x: d.x,
                y: d.y
            }
        } catch (e) {
            return {
                visible: !1,
                totalArea: 0,
                visibleArea: 0
            }
        }
        return i.width || (i.width = e.offsetWidth), i.height || (i.height = e.offsetHeight), 0 == i.top && 0 == i.right && 0 == i.bottom && 0 == i.left && 0 == i.width && 0 == i.height && 0 == i.x && 0 == i.y ? {
            visible: !1,
            totalArea: 0,
            visibleArea: 0
        } : (a = (r = e.ownerDocument ? e.ownerDocument.defaultView : window).innerHeight ? r.innerHeight + u : q(r).height() + u, o = r.innerWidth ? r.innerWidth : q(r).width(), s = 0, c = 0, s = i.top >= 0 ? i.bottom > a ? i.height - (i.bottom - a) : i.height : i.height + i.top, i.left >= 0 ? c = i.right > o ? i.width - (i.right - o) : i.width : (i.right > o && (c = i.width - (i.right - o)), c += i.width + i.left), l = 0, c > 0 && s > 0 && (l = c * s), {
            visible: l > 0 || (i.top >= 0 && i.top <= a || i.bottom >= 0 && i.bottom <= a) && (i.left >= 0 && i.left <= o || i.right >= 0 && i.right <= o) || void 0 !== t && void 0 !== t.target && void 0 !== t.target.scrollingElement && t.target.scrollingElement.scrollTop + window.innerHeight >= i.top && t.target.scrollingElement.scrollTop + window.innerHeight <= i.top + window.innerHeight && t.target.scrollingElement.scrollTop - window.innerHeight < i.top && t.target.scrollingElement.scrollLeft + window.innerWidth >= i.left && t.target.scrollingElement.scrollLeft + window.innerWidth <= i.left + window.innerWidth && t.target.scrollingElement.scrollLeft - window.innerWidth < i.left && 0 == e.offsetHeight,
            totalArea: i.width * i.height,
            visibleArea: l
        })
    }

    function Jn(e) {
        if (ntv.MRAID) return ntv.MRAID.adInfo = ntv.MRAID.adInfo || [], ntv.MRAID.adInfo.push({
            placementID: e.placementID,
            adID: e.adID,
            primaryImpressionURL: e.primaryImpressionURL,
            thirdPartyTrackingTags: e.thirdPartyTrackingTags,
            videoDimensions: this.getVideoDimesions(),
            minimumExposedTime: e.minimumExposedTime,
            startTracking: !1
        }), void ntv.Events.PubSub.publish("mraidViewabilityChange", mraid.isViewable());
        y.copyProperties(e, this);
        var t = this,
            n = Gn.thirdPartyJSViewableImpTrackers,
            i = Gn.viewableWhiteList[e.placementID],
            r = .01 === e.minimumAreaViewable && 1 === e.minimumExposedTime,
            a = ntv.query(e.selector).find("ntv-div");
        r || (this.thirdPartyTrackingTags = y.trackImpressionsInViewability(i, this.thirdPartyTrackingTags, this.selector)), this.stopWatch = P().ntvStopWatch((function() {
            var i = t.getVideoDimesions();
            !y.is("o", i) || isNaN(i.width) || isNaN(i.height) || (t.primaryImpressionURL += "&ntv_vw=" + i.width + "&ntv_vh=" + i.height), lt(t.primaryImpressionURL, t.thirdPartyTrackingTags, 1, null, {
                placementID: e.placementID,
                adID: e.adID,
                is70Percent: r,
                node: ntv.query(a)[0] || ntv.query(e.selector)[0]
            }), n[t.placementID] && n[t.placementID].whitelist instanceof Array && n[t.placementID].thirdparty && y.filterScripts(n[t.placementID].whitelist, n[t.placementID].thirdparty), t.remove()
        }), this.minimumExposedTime), this.lastCheck = new Date, this.missedCheck = 0, this.checkOnFocus && y.onFocusEvents.push((function() {
            y.isOnFocus() || t.stopWatch.reset()
        })), Gn.viewableImpressionTrackers.push(t), ntv.query(y.getTopWindow()).bind("scroll.ntvImpression" + this.placementID + "  ready load ampScroll", Gn.checkIsAdVisible), setTimeout(Gn.checkIsAdVisible, 100)
    }
    Xn.prototype.resetTimeOnContentVars = function() {
        this.trackTimeOnContent && (this.tos_w_hidden = P(!0).ntvStopWatch().ntvTimeOnContentStopWatch(this, 34).addStopWatchEventHandlers({
            node: y.getTopWindow(),
            type: "visibilitychange",
            handler: function() {
                this.preventResume = y.getTopWindow().document.hidden, y.getTopWindow().document.hidden && this.stop(), y.getTopWindow().document.hidden || this.resume()
            }
        }))
    }, Xn.prototype.init = function() {
        ntv.query || (ntv.query = nQuery.noConflict(!0));
        var e = this.selector;
        "string" == typeof this.selector && (e = (e = this.selector.match(/prdom.query\('([^'\)]*)/)) && e.length ? e[1] : this.selector), this.element = e === window ? e : document.querySelector(e);
        var t, n, i = this;
        i.videoPlayers = {}, this.element ? (t = ntv.query, this.trackTimeOnContent && t(window).bind("scroll ", (function() {
            i.trackTime()
        })), t(window).bind("ready load resize", (function() {
            i.resize()
        })), n = 0, t("iframe").map((function(e) {
            var r = t(this);
            ("prx_full_ad_video" == r.attr("id") || r.hasClass("prx_full_ad_video") || r.hasClass("ntvCLPVideo")) && ("prx_full_ad_video" == r.attr("id") || r.hasClass("prx_full_ad_video") ? i.renderYouTubeVideo(r, ++n) : i.renderNativoVideo(r, ++n))
        })), this.trackTime(), this.trackScroll(), this.resize(), setTimeout((function() {
            i.resize()
        }), 0)) : setTimeout((function() {
            i.init()
        }), 100)
    }, Xn.prototype.renderNativoVideo = function(e, t) {
        e.css("visibility", "visible");
        var n, i, a, o = Math.floor(1e6 * Math.random() + 1),
            s = "video-wrapper" + this.adID + "_" + o,
            c = y.getVideoSelectorName() + this.adID + "_" + o,
            l = e.attr("ntv-video-sources"),
            u = e.attr("video-closed-caption"),
            d = e.attr("src"),
            p = y.getElementDimensions(e),
            f = JSON.parse(l),
            h = ntv.query.extend(!0, {}, this);
        if (h.trackTimeOnContent = !1, h.tos = null, (a = document.createElement("div")).setAttribute("class", "ntv-video-wrapper" + this.adID + " " + s + " ntv-video-wrapper"), y.wrap(e[0], a), e.attr("allowfullscreen", !0).attr("id", c).attr("frameborder", "0"), h.renderingParams = {
                outerCssClass: s,
                previewImage: e.attr("video-preview-img") ? e.attr("video-preview-img") : "",
                resizeMode: e.attr("resize-mode") ? e.attr("resize-mode") : "max",
                applySmartCropping: !e.attr("apply-smart-cropping") || e.attr("apply-smart-cropping"),
                article: 1,
                iframeId: c
            }, (n = document.createElement("video")).id = y.getVideoSelectorName(), f.forEach((function(e) {
                var t = document.createElement("source");
                t.src = window.location.protocol + e.url, t.type = e["content-type"], n.width = p.w, n.height = p.h, n.appendChild(t), t = null
            })), n.width = p.w, n.height = p.h, n.classList.add("video-js"), u) {
            var v = document.createElement("track");
            v.src = u, v.label = "English", v.kind = "captions", v.srclang = "en", n.appendChild(v), n.crossOrigin = "anonymous"
        }
        h.iframeBody = '<div class="video-wrapper">', h.iframeBody += h.renderingParams.previewImage ? "<div class='video-preview-img' style='height:100%;'><a href='#'></a></div>" : "", h.iframeBody += n.outerHTML + "</div>", h.iframeHead = "<style>body{top:0px;left:0px;margin:0;}</style>", h.renderingParams.cssUrl = h.sharingSkinUrl, h.vastUrl = "", h.renderingParams.videoExecution = 8, h.renderingParams.autoplay = !1, h.renderingParams.ntvCLPVideo = !0, e.contents().find("body").append(n), h.ntvVideoCLP = !0, (d && d.indexOf("&autoplay=1") > 0 || e.attr("data-ntvautoplay") && "true" == e.attr("data-ntvautoplay")) && (h.autoPlayParams = {}, h.renderingParams.videoExecution = 8), h.iframeIndex = t, h.playerType = r.NATIVO_PLAYER, i = ntv.Video, this.videoPlayers[o] = y.generateVideo(h, [i.Player.Nativo, i.Render.IFU, i.Render.Skin, i.Render.Mobile], [i.Tracker.Nativo])
    }, Xn.prototype.renderYouTubeVideo = function(e, t) {
        e.css("visibility", "visible");
        var n = Math.floor(1e6 * Math.random() + 1),
            i = "ntv-video-wrapper" + this.adID + "_" + n,
            a = y.getVideoSelectorName() + "Iframe" + i,
            o = e.attr("src"),
            s = y.getElementDimensions(e),
            c = s.w,
            l = s.h,
            u = "";
        y.isIE() && (u = "src=\"javascript:document.write('<head><script>document.domain=\\'" + y.getTopWindow().document.domain + "\\';<\/script></head><body></body>');window.parent['ntvAT" + this.adID + "'].videoPlayers[" + n + '].init();"'), e.replaceWith('<div class="ntv-video-wrapper' + this.adID + " " + i + ' ntv-video-wrapper"><iframe id="' + a + '" width="' + c + '" height="' + l + '" ' + u + '  frameborder="0" allowfullscreen></iframe></div>');
        var d = ntv.query.extend(!0, {}, this);
        if (d.trackTimeOnContent = !1, d.tos = null, o && o.indexOf("&autoplay=1") > 0 && (o = o.replace("&autoplay=1", ""), d.playerVarsAutoPlay = 1), d.renderingParams = {
                outerCssClass: i,
                previewImage: e.attr("video-preview-img") ? e.attr("video-preview-img") : "",
                resizeMode: e.attr("resize-mode") ? e.attr("resize-mode") : "max",
                applySmartCropping: !e.attr("apply-smart-cropping") || e.attr("apply-smart-cropping"),
                article: 1,
                iframeId: a
            }, d.iframeBody = '<div class="video-wrapper">', d.iframeBody += d.renderingParams.previewImage ? "<div class='video-preview-img' style='height:100%;'><a href='#'></a></div>" : "", d.iframeBody += '<iframe class="ntvVideo' + n + '" frameborder="0" width="' + c + '" height="' + l + '" ntv-aspect-ratio="16:9" id="' + y.getVideoSelectorName() + '" src="' + o + '&showsearch=0&showinfo=0&playlist=&modestbranding=1&autohide=1&egm=0&rel=0&wmode=opaque" type="text/html" style="float:none;clear:both;width:100%;height:100%;max-width:1200px;max-height:' + l + 'px" !important" allowfullscreen ></iframe></div>', d.iframeHead = "<style>body{top:0px;left:0px;margin:0;}</style>", Gn.articles.length > 0) {
            var p = Gn.articles[this.adID];
            d.videoTracking || (d.videoTracking = p.articleTemplate.videoTracking, d.videoTracking.progress.content.cumulative && (d.videoTracking.progress.content.cumulative = {}, d.videoTracking.map.videoStart.first = [56]), d.baseTrackingUrl = d.baseTrackingUrl || p.tracking.trackingBaseUrl)
        }(o && o.indexOf("&autoplay=1") > 0 || e.attr("data-ntvautoplay") && "true" == e.attr("data-ntvautoplay")) && (d.autoPlayParams = {}, d.renderingParams.videoExecution = 8);
        var f = ntv.Video;
        d.iframeIndex = t, d.playerType = r.YOUTUBE_PLAYER,
            function(e) {
                window.addEventListener("resize", (function(t) {
                    ntv.query("iframe." + y.getVideoSelectorName() + e).css("max-height", ntv.query("iframe." + y.getVideoSelectorName() + e).width() / (16 / 9) + "px")
                }), !1)
            }(n), this.videoPlayers[n] = y.generateVideo(d, [f.Player.YouTube, f.Render.IFU, f.Render.YouTubeSkin, f.Render.Mobile], [f.Tracker.Nativo])
    }, Xn.prototype.trackTime = function() {
        var e = this;
        if (y.canExecute((function() {
                e.trackTime
            }), "ntvArticleTrackerTrackTime", 100))
            if (this.trackTimeOnContent) {
                if (this.expandableUnit) return;
                this.tos_w_hidden.resume(), this.trackSecondaryImpression()
            } else this.trackSecondaryImpression()
    }, Xn.prototype.trackSecondaryImpression = function() {
        if (!this.trackedSecondaryImpression) {
            this.trackedSecondaryImpression = !0;
            var e = null,
                t = null;
            null != (e = this.expandableUnit ? [this.tracker.readAndClickActionTypes, this.tracker.articlePageViewActionType] : this.clickoutTracking ? [this.tracker.secondaryImpressionActionType, this.tracker.articlePageViewActionType] : this.trackTimeOnContent ? [this.tracker.articlePageViewActionType] : null) && (Gn.setting.isEdge && !e.includes(this.secondaryImpressionActionType) && this.tracker.baseTrackingUrl.indexOf("ntv_tpvcs") > 0 && e.push(this.tracker.secondaryImpressionActionType), t = this.tracker.getUrl(e.join())), y.insertTracking(t, this.secondaryImpressionTags, 1)
        }
    }, Xn.prototype.articleUrlChange = function() {
        this.urlActive ? (this.trackTime(), this.executeMoat(!0)) : (this.tos_w_hidden.onLeave(), this.resetTimeOnContentVars(), this.trackedSecondaryImpression = !1, this.executeMoat(!1))
    }, Xn.prototype.executeMoat = function(e) {
        try {
            if (this.moatEnabled) var t = document.querySelector("." + this.moatClass)(e) ? t.initMoatTracking() : t.stopMoatTracking()
        } catch (e) {}
    }, Xn.prototype.setMaxWidth = function() {
        this.maxWidth = ntv.query(this.element).width();
        var e = !window.orientation || 90 != window.orientation && -90 != window.orientation ? screen.width : screen.height;
        (-20 == this.maxWidth || this.maxWidth > e) && (this.maxWidth = e - 20), this.maxWidth > 1200 && (this.maxWidth = 1200), this.maxWidth = Math.ceil(this.maxWidth)
    }, Xn.prototype.resize = function() {
        this.setMaxWidth();
        var e = this,
            t = ntv.query;
        if (t(this.element).find('iframe:not([class*="ntv-do-not-resize"])').map((function() {
                t(this).css("float", "none").css("clear", "both");
                var n = y.getElementDimensions(this);
                if (0 == n.w && e.maxWidth > 0) e.setVideoSize(this, e.maxWidth);
                else {
                    var i = t(this).attr("id");
                    if (i && 0 == i.indexOf(y.getVideoSelectorName() + "Iframe")) return void y.setElementDimensions(t(this), n, e.maxWidth);
                    if (i && 0 == i.indexOf(y.getVideoSelectorName())) return y.setElementDimensions(t(this), n, e.maxWidth), void y.setElementDimensions(t(this.contentWindow.document).find("#" + y.getVideoSelectorName()), n, e.maxWidth);
                    y.setElementDimensions(this, n, e.maxWidth)
                }
                e.setVideoContainerSize(this), t(this).show()
            })).get(), t(this.element).find("video").map((function() {
                0 == y.getElementDimensions(this).w && e.maxWidth > 0 && e.setVideoSize(this, e.maxWidth), e.setVideoContainerSize(this)
            })).get(), t(this.element).find("img").map((function() {
                var n = t(this).attr("data-original");
                if (n) e.maxWidth > 0 && (n = y.applyImageResizer(n, null, e.maxWidth), t(this).attr("src", n).css("width", "").css("height", "").css("max-width", "").css("max-height", ""));
                else {
                    var i = y.getElementDimensions(this);
                    if (0 == i.w || 0 == i.h) return;
                    y.setElementDimensions(this, i, e.maxWidth)
                }
                t(this).show()
            })).get(), t(this.element).each((function() {
                t(this).find(".ntv-figure").each((function() {
                    this.style.width = "";
                    var e = this.querySelector("img");
                    e && (this.style.width = e.style.width)
                }))
            })), e.videoPlayers)
            for (var n in e.videoPlayers) e.videoPlayers[n].videoRendering && e.videoPlayers[n].videoRendering.resizeIframe();
        ntv.Events.PubSub.publish("articleResizerExecuted", [])
    }, Xn.prototype.setVideoSize = function(e, t) {
        var n = null != (n = ntv.query(e).attr("ntv-aspect-ratio")) ? n.split(":") : [16, 9],
            i = t,
            r = Math.ceil(n[1] * t / n[0]);
        ntv.query(e).attr("height", r).attr("width", i).width(i).height(r)
    }, Xn.prototype.setVideoContainerSize = function(e) {
        var t = (e = ntv.query(e)).parent();
        if (t.attr("class") && t.attr("class").indexOf("ntv-video-wrapper") >= 0) {
            var n = e.attr("height"),
                i = e.attr("width");
            n > 0 && i > 0 && t.width(i).height(n)
        }
    }, Xn.prototype.onArticleExpand = function() {
        for (var e in this.scrollTracker ? this.scrollTracker.enable() : this.trackScroll(), this.tos_w_hidden.resume(), this.trackSecondaryImpression(), this.videoPlayers) this.videoPlayers[e].privateEvent.publish(ntv.Events.Types.Manager.PLAY)
    }, Xn.prototype.onArticleCollapse = function() {
        for (var e in this.scrollTracker && this.scrollTracker.disable(), this.tos_w_hidden.stopAndTrack(), this.videoPlayers) {
            this.videoPlayers[e];
            this.videoPlayers[e].executePlayerCommand("getCurrentTime") > 0 && this.videoPlayers[e].privateEvent.publish(ntv.Events.Types.Manager.PAUSE)
        }
    }, Xn.prototype.trackScroll = function() {
        var e = this;
        this.scrollTracker = new R({
            trackElement: this.element.self ? null : this.element,
            trackScrollInit: function() {
                y.appendImage(e.tracker.getUrl(r.CLP_SCROLL_INITIATED))
            },
            trackScrollDepth: function(t) {
                y.appendImage(e.tracker.getUrl(r.CLP_VIEW_DEPTH_MAX) + "&ntv_av=".concat(t))
            },
            trackScrollDepthCheckpoint: function(t) {
                var n = r["CLP_VIEW_DEPTH_".concat(t, "_PERCENT")];
                n && y.appendImage(e.tracker.getUrl(n) + "&ntv_av=".concat(t))
            }
        })
    }, window.ntvArticleTracker = Xn, window.ntvGetElementViewability = Qn, y.getElementViewability = Qn, Jn.prototype.getVideoDimesions = function() {
        var e = ntv.query(this.selector).find("iframe");
        if (e.length) {
            if (e[0].src) {
                if (e[0].src.length > 0 && (/ntv_at=47/gi.test(this.primaryImpressionURL) || /ntv_at=.*809/gi.test(this.primaryImpressionURL))) {
                    var t = ntv.query(e[0]);
                    return {
                        width: t.width(),
                        height: t.height()
                    }
                }
                return !1
            }
            var n = ntv.query("video", e[0].contentWindow.document);
            return !(!n.length || !/ntv_at=47/gi.test(this.primaryImpressionURL) && !/ntv_at=.*809/gi.test(this.primaryImpressionURL)) && {
                width: n[0].width,
                height: n[0].height
            }
        }
        return !1
    }, Jn.prototype.remove = function() {
        var e = Gn;
        y.removeElementFromArray(e.viewableImpressionTrackers, this), 0 == e.viewableImpressionTrackers.length && ntv.query(y.getTopWindow()).unbind("scroll.ntvImpression" + this.placementID)
    }, Jn.prototype.getValidViewableElement = function(e, t) {
        var n = this;
        e.offsetWidth > 0 && e.offsetHeight > 0 ? t.push(e) : ntv.query(e).children().each((function() {
            this.level = e.level + 1, this.level <= 5 && n.getValidViewableElement(this, t)
        }))
    }, Jn.prototype.checkViewability = function(e) {
        var t = 0,
            n = 0,
            i = !0,
            r = !1;
        if (Gn.ampMode) Gn.checkAmpViewability && (r = Gn.checkAmpViewability() >= this.minimumAreaViewable);
        else {
            this.elements || (this.elements = []), 0 == this.elements.length && (this.elements = ntv.query(this.selector).length > 0 ? ntv.query(this.selector) : Gn.referencePlacementPositions[this.selector] ? Gn.referencePlacementPositions[this.selector] : [], 0 == this.elements.length && (this.elements = ntv.query(this.selector, y.getTopWindow().document)));
            var a = this.elements;
            if (a.length > 0) {
                this.isInvTracking && (a = [a[0]]);
                for (var o = [], s = 0; s < a.length; s++) try {
                    var c = a[s];
                    c.level = 1, this.getValidViewableElement(c, o)
                } catch (l) {}
                if (0 == o.length) {
                    var l = a[0];
                    ntv.query(l).is(":hidden") && (l = ntv.query(l).next()[0] || ntv.query(l).parent()[0]), o.push(l)
                }
                for (s = 0; s < o.length; s++) {
                    var u = Qn(o[s], e);
                    t += u.totalArea, n += u.visibleArea, i &= u.visible
                }
                r = n / t >= this.minimumAreaViewable || !this.checkMinimumAreaViewable && 0 == t && i
            }
        }
        var d = !this.checkOnFocus || y.isOnFocus();
        r && d ? this.stopWatch.resume() : this.stopWatch.reset()
    }, window.ntvViewableImpressionTracker = Jn;
    var $n = {
            startTrackingArticle: function(e) {
                new Xn(e)
            },
            startScrollTracking: function(e) {
                new R(e)
            },
            Record: lt,
            Time: P,
            TrackImpression: Jn,
            Viewability: Qn,
            TrackingUrl: Kn
        },
        Zn = {
            secondaryImpressionActionType: 2,
            clickActionType: 3,
            readAndClickActionTypes: "2,3",
            videoView: 22,
            videoEndActionType: 23,
            timeOnContent: 34,
            videoProgress25PercentActionType: 39,
            videoProgress50PercentActionType: 40,
            videoProgress75PercentActionType: 41,
            videoHeadlineClick: 48,
            articlePageViewActionType: 52,
            gallery: 54,
            clickToUnMute: 55,
            videoStartActionType: 56,
            videoBillableView: 58,
            videoPlayed15SecondsType: 60,
            videoPlayed30SecondsType: 61,
            prerollVideoStartType: 62,
            prerollVideoEndType: 63,
            optVideoByClick: 65
        };

    function ei(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            a = e + t;
        return (i.length > 0 || n >= 1e5) && (a += "&" + r.AVP + "=" + i), a += y.setURLCache()
    }

    function ti(e) {
        var t = document.createElement("div");
        return t.innerHTML = e.trim(), t.children[0]
    }

    function ni(e, t, n) {
        var i = n.querySelectorAll('[data-index="'.concat(t, '"]')),
            r = i[0],
            a = i[1];
        switch (e) {
            case "active":
                r.classList.remove("seen"), a.classList.remove("seen"), r.classList.add("active"), a.classList.add("active");
                break;
            case "seen":
                r.classList.add("seen"), a.classList.add("seen"), r.classList.remove("active"), a.classList.remove("active");
                break;
            case "reset":
                r.classList.remove("seen"), a.classList.remove("seen"), r.classList.remove("active"), a.classList.remove("active")
        }
    }

    function ii(e, t) {
        if (t) {
            var n = !1,
                i = function(e, t) {
                    var n = e;
                    y.adBlocker && (n = n.replace(r.ASSETS_PREFIX + y.getServerDomain(), y.getServerDomain())), -1 == e.indexOf("fetch") && (e.indexOf(r.ASSETS_DOMAIN) >= 0 && (n = e.replace("//".concat(r.ASSETS_DOMAIN, "/"), "")), e.indexOf(r.ASSETS_DOMAIN_DEV) >= 0 && (n = e.replace("//".concat(r.ASSETS_DOMAIN_DEV, "/"), "")), n = n.replace(/(^\w+:|^)/, ""));
                    var i = t.querySelector('img[src*="'.concat(n, '"]'));
                    return i || (i = t.querySelector('img[src*="'.concat(encodeURIComponent(n), '"]'))), i ? {
                        element: i,
                        attribute: "src"
                    } : {
                        element: i = t.querySelector('[data-img-src*="'.concat(n, '"]')),
                        attribute: "data-img-src"
                    }
                }(e, t),
                a = i.element,
                o = i.attribute;
            if (a && o) return a.onload = function() {
                if (!n) {
                    var e = a.attributes[o].value.split("assets"),
                        t = "".concat(e[0]).concat("l_story_icon/assets").concat(e[1]);
                    a.attributes[o].value = t, n = !0
                }
            }, a
        }
    }
    var ri = function(e) {
        var t = e.elementId;
        return ('\n  <div\n    id="'.concat(t, '" \n    class="with-effects"\n    style="display: none;"\n    tabIndex="0"\n  >\n    <div id="ntv-stories-modal-content">\n      <div\n        id="ntv-stories-modal-slider" \n        class="slider"\n      >\n      </div>\n    </div>\n  </div>\n'))
    };
    var ai = function(e) {
            var t = e.advertiser,
                n = e.advertiserLogo,
                i = e.sponsoredLabel,
                r = e.link,
                a = e.closeIcon;
            return ('\n  <div \n    class="story-viewer"\n    data-story-id="'.concat(t, '"\n  >\n    <div class="ntv-stories__head-bg"></div>\n\n    <div class="ntv-stories__head head">\n      <a \n        class="ntv-stories__user"\n        href="').concat(r, '"\n        rel="noopener" \n        target="_blank"\n      >\n        <div class="ntv-stories__user-img">\n          <img\n            lazy="eager"\n            class="profilePhoto"\n            src="').concat(n, '" \n          />\n        </div>\n        <div class="ntv-stories__user-info">\n          <span class="ntv-stories__user-info-name">\n            ').concat(t, '\n          </span>\n          <span class="ntv-stories__user-info-sponsored">\n            ').concat(i, '\n          </span>\n        </div>\n      </a>\n\n      <div class="ntv-stories__close" tabIndex="2">\n        <img src="').concat(a, '" />\n      </div>\n    </div>\n\n    <div class="ntv-stories__timers">\n      <div class="ntv-stories__timers__wrapper"></div>\n    </div>\n  </div>\n'))
        },
        oi = function(e) {
            var t = e.index,
                n = e.id,
                i = e.length,
                r = e.isActive,
                a = e.isSeen,
                o = e.type;
            return ('\n  <span \n    class="\n      '.concat(a ? "seen" : "", " \n      ").concat(r ? "active" : "", '" \n      data-index="').concat(t, '" \n      data-item-id="').concat(n, '"\n      data-type="').concat(o, '"\n  >\n    <b style="animation-duration:').concat("" === i ? "6" : i, 's"></b>\n  </span>'))
        };
    var si = function() {
            return '\n  <div class="ntv-stories-slides slides">\n  </div>\n'
        },
        ci = function(e) {
            var t, n, i, a, o, s, c = e.index,
                l = e.id,
                u = e.type,
                d = e.isSeen,
                p = e.isActive,
                f = e.src,
                h = e.text,
                v = e.customStyles,
                m = e.isFullscreen,
                g = e.useBackgroundBlur;
            switch ((v ? JSON.parse(v.replace(";", "")) : {}).position) {
                case "top":
                    t = "flex-start";
                    break;
                case "center":
                    t = "center";
                    break;
                case "bottom":
                    t = "flex-end"
            }
            return ('\n  <div \n    class="ntv-stories__item \n    '.concat(d ? "seen" : "", " \n    ").concat(p ? "active" : "", '" \n    data-type="').concat(u, '" \n    data-index="').concat(c, '" \n    data-item-id="').concat(l, '"\n  >\n    <div class="ntv-stories__item-media">\n    ').concat("video" === u ? '\n        <video \n          class="ntv-stories__item-video \n          '.concat(m ? "" : "no-fullscreen", '"\n          muted\n          webkit-playsinline\n          playsinline\n          preload="auto"\n          src="').concat(f, '"\n          ').concat(u, '\n          oncontextmenu="return false;"\n          data-video-id="').concat(l, '"\n        ></video>\n        <img \n          class="ntv-stories__unmute-icon" \n          src="//s.ntv.io/img/unmute-icon.svg" \n        />') : "\n        ".concat(g ? '<img\n          loading="auto"\n          class="ntv-stories__item-media__bg"\n          src="'.concat((n = f, o = n, s = document.createElement("a"), s.href = o, i = s, a = "image/upload/e_blur:3000/assets" + i.pathname, i.host = r.CLOUDINARY_DOMAIN, i.pathname = a, i.href), '" \n          ').concat(u, ' \n          oncontextmenu="return false;"\n        />') : "", '\n        <img\n          loading="auto"\n          class="ntv-stories__item-img \n          ').concat(m ? "" : "no-fullscreen", '"\n          src="').concat(f, '" \n          ').concat(u, ' \n          oncontextmenu="return false;"\n        />'), '\n    </div>\n    <div \n      class="ntv-stories__item--text-block"\n      style="align-items: ').concat(t, ';"\n    >\n      <div class="ntv-stories__item--text">\n        <div>').concat(h, "</div>\n      </div>\n    </div>\n  </div>\n"))
        };

    function li(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function ui(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function di(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    var pi = {
            adID: -1,
            adVersionPlacement: "",
            advertiser: "",
            advertiserLogo: "",
            sponsoredLabel: "",
            ctaLink: "",
            ctaLabel: "Learn More",
            baseTrackingUrl: "",
            adWrapperClass: "",
            stories: [],
            autoCloseTimeout: 15,
            thirdPartyTrackers: {},
            previewImage: "",
            elementId: "ntv-stories-modal",
            stylesId: "ntv-stories-styles",
            stylesUrl: "//s.ntv.io/css/stories.css",
            storiesIcon: "//s.ntv.io/img/story-icon.svg",
            closeIcon: "//s.ntv.io/img/close-icon.svg",
            slideViewCallback: function(e) {},
            useGestures: !0,
            useBackgroundBlur: !1
        },
        fi = 0,
        hi = function() {
            function e(t) {
                var n;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.options = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? li(n, !0).forEach((function(t) {
                            ui(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : li(n).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, pi, {}, t, {
                    stories: t.stories
                }), this.data = (ui(n = {}, this.options.advertiser, this.options), ui(n, "currentStory", this.options.advertiser), ui(n, "currentItem", 0), ui(n, "currentVideoElement", null), ui(n, "hasBeenOpened", !1), ui(n, "hasBeenUnmuted", !1), ui(n, "isOpen", !1), ui(n, "startTime", 0), ui(n, "slideNumberTracked", -1), ui(n, "trackTimeCap", 15e4), ui(n, "document", window.frameElement ? y.getTopWindow().document : window.document), n), this.initializeSlideTracking(), this.setupHeaderElements(), this.setupTracker(), this.storiesModalElement = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.document;
                    return n.querySelectorAll("#".concat(e)).length < 1 && n.body.appendChild(t), t
                }(this.options.elementId, function(e) {
                    var t = e.elementId,
                        n = ti(ri({
                            elementId: t
                        })),
                        i = n.children[0];
                    n.content = i;
                    var r = i.children[0];
                    return n.slider = r,
                        function(e, t, n) {
                            [n.toLowerCase(), "webkit".concat(n), "MS".concat(n), "o".concat(n)].forEach((function(n) {
                                return e.addEventListener(n, t, !1)
                            }))
                        }(n, (function() {
                            n.classList.contains("closed") && (n.style.display = "none", n.classList.remove("closed"), n.classList.remove("animated"))
                        }), "TransitionEnd"), n
                }({
                    elementId: this.options.elementId
                }), this.data.document), this.createStoryViewer(), this.injectStoryIconToAd(), this.setupVideoDurations(), this.setupVideoTracking(), this.prepAdWrapperLinks()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "prepAdWrapperLinks",
                value: function() {
                    var e = document.querySelector(".".concat(this.options.adWrapperClass));
                    e || (e = document.querySelector("body"));
                    var t = e.getElementsByTagName("a");
                    if (t) {
                        var n = !0,
                            i = !1,
                            r = void 0;
                        try {
                            for (var a, o = t[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                                var s = a.value,
                                    c = s.getAttribute("href");
                                s.getAttribute("target") && -1 !== c.indexOf("javascript:") && s.setAttribute("target", "_self")
                            }
                        } catch (e) {
                            i = !0, r = e
                        } finally {
                            try {
                                n || null == o.return || o.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                    }
                }
            }, {
                key: "initializeSlideTracking",
                value: function() {
                    var e = this;
                    this.options.stories.map((function(t, n) {
                        var i = e.data.slideNumberTracked > 0 && n <= e.data.slideNumberTracked;
                        return t.metricsTracked = {}, t.metricsTracked[Zn.gallery] = i, "video" === t.type && (t.metricsTracked[Zn.videoEndActionType] = i), t
                    }))
                }
            }, {
                key: "handleSlideTracked",
                value: function(e) {
                    this.data.slideNumberTracked = Math.max(this.data.slideNumberTracked, e), this.options.slideViewCallback && this.options.slideViewCallback(e)
                }
            }, {
                key: "open",
                value: function() {
                    var e = this;
                    this.data.isOpen = !0, window.context && S()(ntv, "PostRelease.ampMode") && w({
                        width: S()(window, "context.initialIntersection.boundingClientRect.width"),
                        height: S()(window, "context.initialIntersection.rootBounds.height", 0) - S()(window, "context.initialIntersection.intersectionRect.height", 0),
                        allowOverflow: !1
                    }, context), !this.data.hasBeenOpened && this.data.slideNumberTracked < 0 ? (this.sendTrackingData([Zn.secondaryImpressionActionType, Zn.clickActionType, Zn.articlePageViewActionType, Zn.gallery], this.data[this.data.currentStory].stories[0]), this.handleSlideTracked(0), this.data.hasBeenOpened = !0, this.data.startTime = (new Date).getTime()) : this.initializeSlideTracking(), this.storiesModalElement.style.display = "block", (new Date).getTime() - this.data.startTime < this.data.trackTimeCap && this.data.isOpen && this.storiesModalElement.content.offsetParent && this.tracker.resume(), setTimeout((function() {
                        e.storiesModalElement.classList.add("animated"), ni("active", 0, e.storiesModalElement), e.setCtaData(e.options.stories[0].ctaLabel || e.options.ctaLabel, e.options.stories[0].ctaLink || e.options.ctaLink), e.playVideoItem(e.storyViewer)
                    }), 10)
                }
            }, {
                key: "close",
                value: function() {
                    this.data.isOpen = !1,
                        function(e, t, n) {
                            for (var i = e.querySelectorAll("[data-index]"), r = 0; r < i.length; r++) i[r].classList.remove("seen", "active");
                            t && (t.style.transform = "translate3d(0vw,0,0)"), n.currentItem = 0
                        }(this.storyViewer, this.modalSlides, this.data), !window.context && S()(ntv, "PostRelease.ampMode") && w({
                            width: S()(window, "context.initialLayoutRect.width"),
                            height: S()(window, "context.initialLayoutRect.height"),
                            allowOverflow: !1
                        }, context), this.tracker.stop();
                    for (var e = this.storyViewer.querySelectorAll("video"), t = 0; t < e.length; t++) e[t].pause(), e[t].currentTime = 0;
                    this.storiesModalElement.classList.add("closed")
                }
            }, {
                key: "playVideoItem",
                value: function(e) {
                    var t = this.getActiveItem(),
                        n = t.timer,
                        i = t.storyElement,
                        r = n.dataset.index;
                    if (!i || !n) return !1;
                    var a = this.data.currentVideoElement;
                    if (a && a.pause(), "video" === i.getAttribute("data-type")) {
                        var o = i.getElementsByTagName("video")[0],
                            s = i.getElementsByTagName("img")[0];
                        if (!o) return this.data.currentVideoElement = !1, !1;
                        e.classList.contains("paused") || 0 === parseInt(r) || (o.currentTime = 0), this.data.currentVideoElement = o, this.data.currentMuteIcon = s, this.data.hasBeenUnmuted || (this.data.currentMuteIcon.style.opacity = ".5", o.muted = !0), o.play().catch((function() {}))
                    } else this.data.currentVideoElement = !1
                }
            }, {
                key: "pauseVideoItem",
                value: function() {
                    var e = this.data.currentVideoElement;
                    if (e) try {
                        e.pause()
                    } catch (e) {}
                }
            }, {
                key: "createStoryViewer",
                value: function() {
                    var e = this,
                        t = this.options.stories,
                        n = {
                            useGestures: this.options.useGestures,
                            useBackgroundBlur: this.options.useBackgroundBlur
                        },
                        i = this.data.currentItem || 0,
                        r = function(e) {
                            var t = e.adID,
                                n = e.currentItem,
                                i = e.storyItems,
                                r = e.options,
                                a = ti(si()),
                                o = r.useGestures,
                                s = r.useBackgroundBlur,
                                c = "";
                            i.forEach((function(e, i) {
                                var r = "stories-slide-".concat(t, "-").concat(i),
                                    a = e.type,
                                    o = e.media,
                                    l = e.link,
                                    u = e.description ? e.description.html : "",
                                    d = e.linkText,
                                    p = n === i,
                                    f = e.isFullscreen,
                                    h = e.seen,
                                    v = document.createElement("div");
                                v.innerHTML = e.description ? e.description.html : "";
                                var m = v.childNodes[0] && "#comment" === v.childNodes[0].nodeName ? v.childNodes[0].nodeValue : "";
                                c += ci({
                                    index: i,
                                    id: r,
                                    type: a,
                                    src: o,
                                    text: u,
                                    link: l,
                                    linkText: d,
                                    isSeen: h,
                                    isActive: p,
                                    isFullscreen: f,
                                    customStyles: m,
                                    useBackgroundBlur: s
                                }), e.id = r
                            })), a.innerHTML = c, a.videoElem = a.querySelector("video");
                            var l = null,
                                u = null;
                            a.onTouchStart = function(e) {}, a.onTouchEnd = function(e) {}, a.onTouchMove = function(e) {}, a.onSwipeLeft = function(e) {}, a.onSwipeRight = function(e) {}, a.onSwipeUp = function(e) {}, a.onSwipeDown = function(e) {}, a.onUnmuteTouchEnd = function(e) {}, a.addEventListener("touchstart", (function(e) {
                                l = e.touches[0].clientX, u = e.touches[0].clientY, a.onTouchStart(e)
                            }), !1), a.addEventListener("touchend", (function(e) {
                                a.onTouchEnd(e, l)
                            }), !1), o && a.addEventListener("touchmove", (function(e) {
                                if (a.onTouchMove(e), null !== l && null !== u) {
                                    var t = e.touches[0].clientX,
                                        n = e.touches[0].clientY,
                                        i = l - t,
                                        r = u - n;
                                    Math.abs(i) > Math.abs(r) ? i > 2 ? a.onSwipeLeft(e) : i < -2 && a.onSwipeRight(e) : r > 5 ? a.onSwipeUp(e) : r < -5 && a.onSwipeDown(e), l = null, u = null
                                }
                            }), !1), a.addEventListener("mousedown", (function(e) {
                                a.onTouchStart(e)
                            }), !1), a.addEventListener("click", (function(e) {
                                a.onTouchEnd(e, null, !0)
                            }), !1);
                            for (var d = a.getElementsByClassName("ntv-stories__unmute-icon"), p = 0; p < d.length; p++) d[p].addEventListener("touchend", (function(e) {
                                e.stopImmediatePropagation(), a.onUnmuteTouchEnd(e)
                            }), !1), d[p].addEventListener("click", (function(e) {
                                e.stopImmediatePropagation(), a.onUnmuteTouchEnd(e)
                            }), !1);
                            return a
                        }({
                            advertiser: this.options.adID,
                            currentItem: i,
                            storyItems: t,
                            options: n
                        });
                    this.modalSlides = r, this.storyViewer = function(e) {
                        var t = e.advertiser,
                            n = e.advertiserLogo,
                            i = e.sponsoredLabel,
                            r = e.link,
                            a = e.closeIcon,
                            o = e.currentItem,
                            s = e.storyItems,
                            c = (e.video, ti(ai({
                                advertiser: t,
                                advertiserLogo: n,
                                sponsoredLabel: i,
                                link: r,
                                closeIcon: a
                            }))),
                            l = "";
                        s.forEach((function(e, n) {
                            var i = t + "-" + n,
                                r = e.duration,
                                a = o === n,
                                s = e.seen;
                            l += oi({
                                index: n,
                                id: i,
                                length: r,
                                isSeen: s,
                                isActive: a,
                                type: e.type
                            })
                        })), c.querySelector(".ntv-stories__timers__wrapper").innerHTML = l, c.onClose = function() {};
                        var u = c.querySelector(".ntv-stories__close"),
                            d = c.querySelector(".ntv-stories__close img");

                        function p(e) {
                            e.preventDefault(), e.stopImmediatePropagation(), c.onClose()
                        }
                        return u.addEventListener("touchend", p, !1), d.addEventListener("touchend", p, !1), u.addEventListener("click", p, !1), d.addEventListener("click", p, !1), c.onDurationEnd = function() {}, c.querySelectorAll(".ntv-stories__timers b").forEach((function(e) {
                            e.addEventListener("animationend", (function() {
                                c.onDurationEnd()
                            }), !1)
                        })), c
                    }({
                        advertiser: this.options.advertiser,
                        advertiserLogo: this.options.advertiserLogo,
                        sponsoredLabel: this.options.sponsoredLabel,
                        link: this.options.ctaLink,
                        closeIcon: this.options.closeIcon,
                        currentItem: i,
                        storyItems: t,
                        video: r.videoElem
                    }), this.storyViewer.appendChild(r), this.storyViewer.onClose = function() {
                        e.close()
                    }, this.storyViewer.onDurationEnd = function() {
                        e.nextItem(!1, r)
                    }, r.onSwipeLeft = function() {
                        e.nextItem(!1, r)
                    }, r.onSwipeRight = function() {
                        e.nextItem("previous", r)
                    }, r.onSwipeDown = function() {
                        e.close()
                    };
                    var a, o, s, c, l, u, d, p = !1;
                    r.onTouchStart = function(t) {
                        if ("A" === t.target.nodeName) return !0;
                        y.isiOS() && t.preventDefault(), p = !1, e.storyViewer && e.storyViewer.classList.add("paused"), a = setTimeout((function() {
                            e.storyViewer.classList.add("longPress")
                        }), 600), o = setTimeout((function() {
                            clearInterval(o), o = !1
                        }), 250), e.pauseVideoItem()
                    }, r.onTouchMove = function(e) {
                        p = !0
                    }, r.onTouchEnd = function(t, n, i) {
                        if ("A" === t.target.nodeName) return !0;
                        t.preventDefault(), a && clearInterval(a);
                        var s = !1;
                        if (o && (clearInterval(o), o = !1, !p))
                            if (s = !0, i) {
                                var c = t.target;
                                c.offsetWidth / 2 > t.clientX - c.getBoundingClientRect().left ? e.nextItem("previous", r) : e.nextItem(!1, r)
                            } else n > y.getTopWindow().innerWidth / 2 ? e.nextItem(!1, r) : e.nextItem("previous", r);
                        e.storyViewer && (e.storyViewer.classList.remove("longPress"), e.storyViewer.classList.remove("paused"), s && p || !e.data.isOpen || e.playVideoItem(e.storyViewer))
                    }, r.onUnmuteTouchEnd = function(t) {
                        var n, i;
                        n = e.data.currentVideoElement, i = e.storyViewer, n.muted = !1, n.volume = 1, n.removeAttribute("muted"), n.play(), n.paused && (n.muted = !0, n.play()), i && i.classList.remove("paused"), e.data.currentMuteIcon.style.opacity = "0", e.data.hasBeenUnmuted = !0
                    }, this.storiesModalElement.slider.appendChild(this.storyViewer), this.storiesModalElement.slider.appendChild(ti((s = {
                        ctaLink: this.options.ctaLink,
                        ctaLabel: this.options.ctaLabel
                    }, c = s.ctaLink, l = void 0 === c ? "" : c, u = s.ctaLabel, "\n  ".concat((d = void 0 === u ? "Learn More" : u) ? '\n      <div class="ntv-stories__item-link">\n        <a\n          class="ntv-stories__item-link__wrapper"\n          href="'.concat(l, '" \n          rel="noopener" \n          target="_blank"\n        >\n          <div class="ntv-stories__item-link__tag">\n            ').concat(d, "\n          </div>\n        </a>\n      </div>") : "", "\n"))))
                }
            }, {
                key: "nextItem",
                value: function(e, t) {
                    var n = this;
                    clearTimeout(fi);
                    var i = this.data.currentStory,
                        r = this.data.currentItem,
                        a = (this.data[i].stories[r], "previous" === e ? -1 : 1);
                    if (!this.storyViewer || 1 === this.storyViewer.touchMove) return !1;
                    var o = r + a,
                        s = this.storyViewer.querySelectorAll('[data-index="'.concat(o, '"]')),
                        c = s[0],
                        l = s[1];
                    if (this.storyViewer && c && l) {
                        if ("previous" === e) ! function(e, t, n) {
                            var i = e - 1;
                            ni("reset", e, t);
                            var r = "-".concat(100 * i, "vw");
                            n && (n.style.transform = "translate3d(".concat(r, ",0,0)")), ni("active", i, t)
                        }(r, this.storyViewer, t);
                        else {
                            var u = function(e, t, n) {
                                    var i = e + 1;
                                    ni("seen", e, t);
                                    var r = "-".concat(100 * i, "vw");
                                    return n && (n.style.transform = "translate3d(".concat(r, ",0,0)")), ni("active", i, t), i
                                }(r, this.storyViewer, t),
                                d = this.data[i].stories[u];
                            d.metricsTracked[Zn.gallery] || (this.sendTrackingData([Zn.gallery], d), this.handleSlideTracked(u))
                        }
                        this.data.currentItem = r + a, this.playVideoItem(this.storyViewer), this.setCtaData(this.options.stories[this.data.currentItem].ctaLabel || this.options.ctaLabel, this.options.stories[this.data.currentItem].ctaLink || this.options.ctaLink)
                    } else fi = setTimeout((function() {
                        n.data.isOpen && n.close(), clearTimeout(fi)
                    }), 1e3 * this.options.autoCloseTimeout)
                }
            }, {
                key: "sendTrackingData",
                value: function(e, t) {
                    var n = this,
                        i = ei(this.options.baseTrackingUrl, e.join(), this.options.adID, this.options.adVersionPlacement);
                    t.slideID && (i = i.concat("&ntv_sl=".concat(t.slideID)));
                    var r = "";
                    e.forEach((function(e) {
                        n.options.thirdPartyTrackers[e] && (r += n.options.thirdPartyTrackers[e])
                    })), ct(i, r, 1), e.forEach((function(e) {
                        t.metricsTracked.hasOwnProperty(e) && (t.metricsTracked[e] = !0)
                    }))
                }
            }, {
                key: "setupHeaderElements",
                value: function() {
                    ! function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.document,
                            t = e.createElement("meta");
                        t.id = "ntv-mobile-scale-tag", t.name = "viewport", t.content = "width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,viewport-fit=cover", e.getElementsByTagName("head")[0].appendChild(t)
                    }(this.data.document), y.ntvAppendStylesheet(this.options.stylesId, this.options.stylesUrl, this.data.document)
                }
            }, {
                key: "injectStoryIconToAd",
                value: function() {
                    var e = this;
                    if ("loading" !== this.data.document.readyState) {
                        var t = this.data.document.querySelector("." + this.options.adWrapperClass);
                        ii(this.options.previewImage, t)
                    } else this.data.document.addEventListener("DOMContentLoaded", (function() {
                        var t = e.data.document.querySelector("." + e.options.adWrapperClass);
                        ii(e.options.previewImage, t)
                    }))
                }
            }, {
                key: "setupTracker",
                value: function() {
                    var e = this;
                    return this.tracker = P(!0).ntvStopWatch().ntvTimeOnContentStopWatch(this, Zn.timeOnContent).addStopWatchEventHandlers({
                        node: y.getTopWindow(),
                        type: "visibilitychange",
                        handler: function() {
                            var t = (new Date).getTime() - e.data.startTime;
                            e.tracker.preventResume = y.getTopWindow().document.hidden, y.getTopWindow().document.hidden && (e.tracker.stop(), e.data.isOpen && e.close()), !y.getTopWindow().document.hidden && e.data.isOpen && t < e.data.trackTimeCap && e.storiesModalElement.content.offsetParent && e.tracker.resume(), setTimeout((function() {
                                for (var t = e.storyViewer.querySelectorAll("video"), n = 0; n < t.length; n++) t[n].pause()
                            }), 100)
                        }
                    }), this.tracker.getUrl = function(t) {
                        return ei(e.options.baseTrackingUrl, t, e.options.adID, e.options.adVersionPlacement)
                    }, this.tracker
                }
            }, {
                key: "setupVideoDurations",
                value: function() {
                    for (var e = this.storyViewer.querySelectorAll('span[data-type="video"]'), t = this.storyViewer.querySelectorAll('div[data-type="video"]'), n = function(n) {
                            var i = t[n].getElementsByTagName("video");
                            i.length > 0 && i[0].addEventListener("loadedmetadata", (function() {
                                var t, r, a = e[n].getElementsByTagName("b")[0].style;
                                t = a, r = "".concat(i[0].duration, "s"), ["animationDuration", "webkitAnimationDuration", "MSAnimationDuration", "oAnimationDuration"].forEach((function(e) {
                                    t[e] = r
                                }))
                            }))
                        }, i = 0; i < t.length; i++) n(i)
                }
            }, {
                key: "setupVideoTracking",
                value: function() {
                    var e = this;
                    this.options.stories.map((function(t, n) {
                        if ("video" === t.type && !t.metricsTracked[Zn.videoEndActionType]) {
                            var i = document.querySelector("[data-video-id=".concat(t.id));
                            i && i.addEventListener("ended", (function() {
                                e.sendTrackingData([Zn.videoEndActionType], t)
                            }))
                        }
                    }))
                }
            }, {
                key: "getActiveItem",
                value: function() {
                    return {
                        timer: this.storyViewer.querySelector('span[data-index="'.concat(this.data.currentItem, '"].active')),
                        storyElement: this.storyViewer.querySelector('div[data-index="'.concat(this.data.currentItem, '"].active'))
                    }
                }
            }, {
                key: "setCtaData",
                value: function(e, t) {
                    e && (this.storiesModalElement.querySelector(".ntv-stories__item-link__tag").textContent = e), t && this.storiesModalElement.querySelector(".ntv-stories__item-link__wrapper").setAttribute("href", t)
                }
            }]) && di(t.prototype, n), i && di(t, i), e
        }();

    function vi(e) {
        for (this.isNtvWrapper = !0, this.push = function(e) {
                return e()
            }; e.length > 0;) try {
            var t = e.shift();
            "function" == typeof t && t()
        } catch (e) {}
    }

    function mi() {
        window.ntv.cmd = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return e.isNtvWrapper || (e = new vi(e)), e
        }(window.ntv.cmd)
    }

    function gi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    hi._instances = {};
    var yi = "https://".concat(r.JDOMAIN, "/trk.gif?"),
        Ei = "ntv_mat=";

    function bi(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e4,
            n = (new Date).getTime() - e;
        return isNaN(t) ? n : Math.min(n, t)
    }

    function Ti(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
        t.ntv = window.ntv || {}, t.ntv.cmd = window.ntv.cmd || [], t.ntv.cmd.push((function() {
            var t = Object.keys(e),
                n = Ei + t.reduce((function(t, n, i) {
                    return t + "".concat(i > 0 ? ";" : "").concat(n, "*").concat(e[n])
                }), "");
            ntv.Util.appendImage(yi + n + ntv.Util.buildExperimentUrl(ntv.PostRelease.setting.experiment))
        }))
    }

    function ki(e, t) {
        var n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
        i.ntv.trackFillFlag = !0, Ti((gi(n = {}, r.DFP_TOTAL_AVAILABLE, e), gi(n, r.DFP_TOTAL_FILLED, t), n), i)
    }

    function Si() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
        if (!e.ntv.processDfpTracking && ntv.PostRelease.setting.isEdge || "1*101" == ntv.PostRelease.setting.experiment) {
            var t = e.performance.timing.navigationStart;
            if (e.googletag && !e.ntv.dfpInitLoadFlag && function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                    t.ntv.dfpInitLoadFlag = !0, Ti(gi({}, r.DFP_INIT_LOAD, e), t)
                }(bi(t)), e.googletag && e.googletag.apiReady) {
                e.ntv.processDfpTracking = !0;
                var n = googletag.pubads().getSlots().length,
                    i = 0,
                    a = {};
                e.googletag.pubads().addEventListener("slotRenderEnded", (function(o) {
                    if (e.ntv.renderTimeFlag || function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                            t.ntv.renderTimeFlag = !0, Ti(gi({}, r.DFP_FIRST_RENDER, e), t)
                        }(bi(t)), !a[o.slot.getSlotElementId()]) {
                        var s = {};
                        a[o.slot.getSlotElementId()] = s, s.isRendered = !o.isEmpty, s.isRendered && i++, n != i || e.ntv.trackFillFlag || ki(n, n)
                    }
                })), setTimeout((function() {
                    e.ntv.trackFillFlag || ki(i, n)
                }), 3e4)
            } else setTimeout(Si, 100)
        }
    }
    var wi = y.getTopWindow(),
        Pi = window.Nativo || wi.Nativo || {},
        Ii = window,
        Ai = function(e) {
            e.processed = !0;
            var t = (ntv.MRAID ? "https:" : y.getProtocol() || y.getProtocol(wi) || "https:") + "//" + y.getServerDomain() + "/display.js?",
                n = e.a ? "prx_a=" + e.a : e.c ? "prx_c=" + e.c : e.b ? "ntv_b=" + e.b : "",
                i = e.mode || 0;
            e.doc = e.doc || Ii.document, wi.Nativo = wi.Nativo || Ii.Nativo, n += "&ntv_m=" + i, n += e.z ? "&ntv_z=" + e.z : "", e.au && (n += "&ntv_au=" + e.au, e.clk && (Pi.tpc["#" + e.au] = e.clk)), Pi.pageURL ? n += "&prx_url=" + encodeURIComponent(Pi.pageURL) : 3 != i && (n += "&prx_url=" + encodeURIComponent(wi.location.href)), !e.a && Pi.atf.length > 0 && (n += "&ntv_atf=" + Pi.atf.join()), e.pau && (n += "&ntv_pau=" + encodeURIComponent(e.pau)), e.pkv && (n += "&ntv_pkv=" + encodeURIComponent(e.pkv)), e.im && (n += "&ntv_im=" + encodeURIComponent(e.im)), e.w && (n += "&ntv_dfpw=" + encodeURIComponent(e.w)), e.h && (n += "&ntv_dfph=" + encodeURIComponent(e.h)), n += y.attachFirstPartyCookieQS(Gn.firstPartyCookie), n += "&rand=" + 1e9 * Math.random(), sn().then((function(i) {
                y.appendScript(t + n + (i ? "&".concat(r.US_PRIVACY, "=").concat(i) : ""), void 0, void 0, e.doc), ne.performance.set("sendRequest")
            }))
        };
    ntv.MRAID || (Pi.tpc = Pi.tpc || {}, Pi.atf = Pi.atf || [], Pi.ads = Pi.ads || [], Pi.ads._push = Pi.ads._push || Pi.ads.push, Pi.ads.push = function(e) {
        return Ai(e), this._push(e)
    });
    for (var Ci = 0; Ci < Pi.ads.length; Ci++) {
        var Ri = Pi.ads[Ci];
        Ri.processed || Ai(Ri)
    }
    var _i = window.win || window;
    ntv.events || (ntv.events = ntv.query("<ntv></ntv>"), "function" != typeof _i.Object.create && (_i.Object.create = function(e) {
        function t() {}
        return t.prototype = e, new t
    }));
    var Di = y.getTopWindow().document,
        Li = Di.createElement("div"),
        Oi = [],
        xi = {
            PubSub: {
                subscribe: function(e, t) {
                    var n = this;
                    (e = e.split(" ")).forEach((function(e) {
                        -1 == (n.unpublishList || Oi).indexOf(e) && (y.is(t, Array) ? t.forEach((function(t) {
                            (n.univNode || Li).addEventListener(e, t, !1)
                        })) : (n.univNode || Li).addEventListener(e, t, !1))
                    }))
                },
                unsubscribe: function(e, t) {
                    (this.univNode || Li).removeEventListener(e, t, !1)
                },
                publish: function(e, t) {
                    y.is("f", Event) && "Event" == Event.prototype.constructor.name && Event.hasOwnProperty("BUBBLING_PHASE") ? this.publish = function(e, t) {
                        if (-1 == (this.unpublishList || Oi).indexOf(e)) {
                            var n = new Event(e);
                            n.data = t || {}, (this.univNode || Li).dispatchEvent(n, t)
                        }
                    } : this.publish = function(e, t) {
                        if (-1 == (this.unpublishList || Oi).indexOf(e)) {
                            var n = Di.createEvent("Event");
                            n.data = t || {}, n.initEvent(e, !0, !0), (this.univNode || Li).dispatchEvent(n, t)
                        }
                    }, this.publish(e, t)
                },
                unpublish: function(e) {
                    Oi.push(e)
                }
            },
            SecurePubSub: function() {
                function e() {
                    this.doc = y.getTopWindow().document, this.univNode = Di.createElement("div"), this.unpublishList = []
                }
                return e.prototype.subscribe = ntv.Events.PubSub.subscribe, e.prototype.on = e.prototype.subscribe, e.prototype.publish = ntv.Events.PubSub.publish, e.prototype.trigger = e.prototype.publish, new e
            },
            Types: {
                Player: {
                    Publish: {
                        Preroll: {
                            ADHEADLINE_CLICK: "player:preroll:adHeadlineCick",
                            VIDEO_END: "player:preroll:videoEnd",
                            VIDEO_START: "player:preroll:videoStart",
                            PROGRESS: "player:preroll:progress",
                            PAUSE: "player:preroll:pause",
                            CLICK: "player:preroll:click",
                            CTA_CLICK: "player:preroll:ctaClick",
                            VOLUME_CHANGE: "player:preroll:volumechange",
                            IGNORE_FIRST_CLICK: "player:preroll:ignoreFirstclick",
                            MUTE: "player:preroll:mute",
                            UNMUTE: "player:preroll:unmute",
                            RESUME: "player:preroll:resume",
                            FULLSCREEN: "player:preroll:fullscreen",
                            EXIT_FULLSCREEN: "player:preroll:exitFullscreen",
                            PREROLL_FETCH_AD_REQUEST: "player:preroll:prerollAdRequest",
                            PREROLL_FETCH_AD_RETURNED: "player:preroll:prerollAdReturned",
                            PREROLL_FETCH_AD_CANCEL: "player:preroll:prerollAdCancel",
                            PREROLL_FETCH_AD_ERROR: "player:preroll:prerollAdError",
                            PREROLL_AD_CANCELED: "player:preroll:videoCanceled",
                            PREROLL_AD_ERROR: "player:preroll:videoError",
                            RESIZE: "player:preroll:resize",
                            BUFFERING: "player:preroll:buffering"
                        },
                        Content: {
                            ADHEADLINE_CLICK: "player:content:adHeadlineCick",
                            VIDEO_END: "player:content:videoEnd",
                            VIDEO_START: "player:content:videoStart",
                            PROGRESS: "player:content:progress",
                            PAUSE: "player:content:pause",
                            CLICK: "player:content:click",
                            VOLUME_CHANGE: "player:content:volumechange",
                            IGNORE_FIRST_CLICK: "player:content:ignoreFirstclick",
                            MUTE: "player:content:mute",
                            UNMUTE: "player:content:unmute",
                            RESUME: "player:content:resume",
                            FULLSCREEN: "player:content:fullscreen",
                            EXIT_FULLSCREEN: "player:content:exitFullscreen",
                            RESIZE: "player:content:resize",
                            BUFFERING: "player:content:buffering",
                            CAN_PLAY: "player:content:canPlay",
                            REPLAY: "player:content:replay"
                        },
                        General: {
                            PLAYER_READY: "player:general:playerReady",
                            USER_ACTIVE: "player:general:userAcitve",
                            USER_INACTIVE: "player:general:userInacitve"
                        }
                    },
                    Subscribe: {
                        RENDER_VIDEO_PLAYER: "player:cmd:renderVideoPlayer",
                        VOLUME_CHANGE: "player:cmd:volumeChange",
                        SEEK: "player:seek",
                        PLAY: "player:cmd:play",
                        PAUSE: "player:cmd:pause",
                        RESUME: "player:cmd:resume",
                        RESET: "player:cmd:reset",
                        MUTE: "player:cmd:mute",
                        UNMUTE: "player:cmd:unmute",
                        TOGGLE: "player:cmd:toggle",
                        USER_ACTIVE: "player:cmd:userAcitve",
                        USER_INACTIVE: "player:cmd:userInacitve",
                        Preroll: {
                            LEARN_MORE_CLICKED: "player:cmd:prerollLearnMorenClicked"
                        },
                        Content: {
                            LEARN_MORE_CLICKED: "player:cmd:learnMorenClicked"
                        },
                        PREROLL_LEARN_MORE_CLICKED: "player:cmd:prerollLearnMorenClicked"
                    }
                },
                Tracking: {
                    Events: {
                        Preroll: {
                            ADHEADLINE_CLICK: "tracking:events:preroll:adheadlineCick",
                            VIDEO_END: "tracking:events:preroll:videoEnd",
                            VIDEO_START: "tracking:events:preroll:videoStart",
                            PAUSE: "tracking:events:preroll:pause",
                            CLICK: "tracking:events:preroll:click",
                            CTA_CLICK: "tracking:events:preroll:ctaClick",
                            VOLUME_CHANGE: "tracking:events:preroll:volumechange",
                            IGNORE_FIRST_CLICK: "tracking:events:preroll:ignoreFirstclick",
                            MUTE: "tracking:events:preroll:mute",
                            UNMUTE: "tracking:events:preroll:unmute",
                            RESUME: "tracking:events:preroll:resume",
                            FULLSCREEN: "tracking:events:preroll:fullscreen",
                            EXIT_FULLSCREEN: "tracking:events:preroll:exitFullscreen",
                            PREROLL_FETCH_AD_REQUEST: "tracking:events:preroll:prerollAdRequest",
                            PREROLL_FETCH_AD_RETURNED: "tracking:events:preroll:prerollAdReturned",
                            PREROLL_FETCH_AD_CANCEL: "tracking:events:preroll:prerollAdCancel",
                            PREROLL_FETCH_AD_ERROR: "tracking:events:preroll:prerollAdError",
                            PREROLL_AD_CANCELED: "tracking:events:preroll:videoCanceled",
                            PREROLL_AD_ERROR: "tracking:events:preroll:videoError"
                        },
                        Content: {
                            ADHEADLINE_CLICK: "tracking:events:content:adheadlineCick",
                            VIDEO_END: "tracking:events:content:videoEnd",
                            VIDEO_START: "tracking:events:content:videoStart",
                            PAUSE: "tracking:events:content:pause",
                            CLICK: "tracking:events:content:click",
                            VOLUME_CHANGE: "tracking:events:content:volumechange",
                            IGNORE_FIRST_CLICK: "tracking:events:content:ignoreFirstclick",
                            MUTE: "tracking:events:content:mute",
                            UNMUTE: "tracking:events:content:unmute",
                            RESUME: "tracking:events:content:resume",
                            FULLSCREEN: "tracking:events:content:fullscreen",
                            EXIT_FULLSCREEN: "tracking:events:content:exitFullscreen"
                        }
                    },
                    Progress: {
                        Preroll: {
                            CUMULATIVE: "tracking:progress:preroll:cumulative",
                            POSITION: "tracking:progress:preroll:position",
                            PERCENTILE: "tracking:progress:preroll:percentile",
                            USERACTIVECUMULATIVE: "tracking:progress:preroll:userActiveCumulative",
                            CURRENT_TIME: "tracking:progress:preroll:currentTime"
                        },
                        Content: {
                            CUMULATIVE: "tracking:progress:content:cumulative",
                            POSITION: "tracking:progress:content:position",
                            PERCENTILE: "tracking:progress:content:percentile",
                            USERACTIVECUMULATIVE: "tracking:progress:content:userActiveCumulative",
                            CURRENT_TIME: "tracking:progress:content:currentTime"
                        }
                    }
                },
                Modules: {
                    EXECUTE: "modules:execute"
                },
                Skin: {
                    READY: "skin:ready",
                    INITIALIZED: "skin:initialized",
                    UPDATE_INFO_BAR: "skin:updateInfoBar",
                    SHOW_INFO_BAR: "skin:showInfoBar",
                    HIDE_INFO_BAR: "skin:hideInfoBar",
                    SHOW_CONTROL_BAR: "skin:showControlBar",
                    HIDE_CONTROL_BAR: "skin:hideControlBar",
                    SHOW_OVERLAY: "skin:showOverlay",
                    HIDE_OVERLAY: "skin:hideOverlay",
                    HIDE_ALL_OVERLAYS: "skin:hideAllOverlays",
                    FULLSCREEN: "skin:fullscreen",
                    EXIT_FULLSCREEN: "skin:exitFullscreen",
                    HIDE_PREVIEW_IMAGE: "skin:hidePreviewImage",
                    SHOW_VIDEO_END_IMAGE: "skin:showVideoEndImage",
                    HIDE_VIDEO_END_IMAGE: "skin:hideVideoEndImage",
                    INFO_BAR_CLICK: "skin:infoBarClicked",
                    CLICK: "skin:click",
                    PAUSE: "skin:pause",
                    PREVIEW_IMAGE_CLICK: "skin:previewImageClick",
                    RENDER_PREROLL_SKIN: "skin:renderPrerollSkin",
                    REMOVE_PREROLL_SKIN: "skin:removePrerollSkin",
                    PLAY: "skin:play",
                    USER_ACTIVE: "skin:userActive",
                    USER_INACTIVE: "skin:userInactive",
                    RESUME: "skin:resume",
                    INFO_BAR_SHOWN: "skin:infoBarShown",
                    INFO_BAR_HIDDEN: "skin:infoBarHidden",
                    OVERLAY_SHOWN: "skin:overlayShown",
                    OVERLAY_HIDDEN: "skin:overlayHidden",
                    PREVIEW_IMAGE_VIDEO_END_SHOWN: "skin:previewImageVideoEndShown",
                    FULLSCREEN_CHANGED: "skin:fullScreenChanged",
                    INFO_BUTTON_CLICKED: "skin:infoButtonClicked",
                    CONTROLBAR_HIDDEN: "skin:controlbarHidden",
                    CONTROLBAR_SHOWN: "skin:controlbarShown",
                    PREVIEW_IMAGE_HIDDEN: "skin:previewImageHidden",
                    ALL_OVERLAYS_HIDDEN: "skin:allOverlayHidden",
                    PREROLL_SKIN_RENDERED: "skin:preRollSkinRendered",
                    PREROLL_SKIN_REMOVED: "skin:preRollSkinRemoved",
                    VIDEO_RESUMED: "skin:videoResumed",
                    RESIZE: "skin:resize",
                    TOGGLE_LEARN_MORE: "skin:toggleLearnMore",
                    Preroll: {
                        LEARN_MORE_CLICKED: "skin:prerollLearnMorenClicked"
                    },
                    Content: {
                        LEARN_MORE_CLICKED: "skin:learnMorenClicked"
                    },
                    PREROLL_LEARN_MORE_CLICKED: "skin:prerollLearnMorenClicked",
                    YouTube: {
                        INITIALIZED: "skin:youTube:initialized",
                        READY: "skin:youTube:ready"
                    },
                    AOLVideo: {
                        INITIALIZED: "skin:aolVideo:initialized",
                        READY: "skin:aolVideo:ready"
                    },
                    JWVideo: {
                        INITIALIZED: "skin:jwVideo:initialized",
                        READY: "skin:jwVideo:ready"
                    },
                    Mobile: {
                        INITIALIZED: "skin:mobile:initialized",
                        READY: "skin:mobile:ready",
                        MOBILE_SHARE_CLOSED: "skin:mobileShareClosed",
                        MOBILE_SHARE_OPENED: "skin:mobileShareOpened",
                        CLOSE_MOBILE_SHARE: "skin:closeMobileShare",
                        OPEN_MOBILE_SHARE: "skin:openMobileShare"
                    }
                },
                IFU: {
                    READY: "ifu:ready",
                    INITIALIZED: "ifu:initialized",
                    EXPANDED: "ifu:expanded",
                    COLLAPSED: "ifu:collapsed",
                    TOGGLE_VIDEO: "ifu:toggleVideo",
                    ANCHOR_CLICK: "ifu:anchorClick",
                    COLLAPSE: "ifu:collapse",
                    EXPAND: "ifu:expand",
                    CLICK: "ifu:click",
                    ADHEADLINE_CLICK: "ifu:adHeadlinClick"
                },
                Manager: {
                    TOGGLE_VIDEO: "manager:toggleVideo",
                    PLAY: "manager:play",
                    RESUME: "manager:resume",
                    PAUSE: "manager:pause",
                    USER_ACTIVE: "manager:userActive",
                    USER_INACTIVE: "manager:userInactive",
                    PREVIEW_IMAGE_CLICK: "manager:previewImageClick",
                    CLICK: "manager:click",
                    MUTE: "manager:mute",
                    UNMUTE: "manager:unmute",
                    RESET: "manager:reset",
                    ClEAN_UP: "manager:cleanUpRemainingLogic"
                }
            },
            Data: {
                PLAY_BUTTON: "player:button:play",
                PAUSE_BUTTON: "player:button:pause",
                SEEK_BAR: "player:button:seek",
                VOLUME_SLIDER: "player:slider:volume",
                MUTE_BUTTON: "player:button:mute",
                UNMUTE_BUTTON: "player:button:unmute",
                FULLSCREEN_BUTTON: "player:button:fullscreen",
                EXIT_FULLSCREEN_BUTTON: "player:button:exitFullscreen",
                INFO_BUTTON: "player:button:info"
            }
        };
    Object.freeze(xi);
    var Ni = {},
        Vi = function(e) {
            e.data.adContentWidgetID && Ni[e.data.adContentWidgetID] && (Ui(e.data.adContentWidgetID, e.data.eventID), e.stopPropagation())
        },
        Ui = function(e, t) {
            if (e && t) {
                var n = Ni[e],
                    i = t,
                    r = n.eventMap[i.toString()] || "";
                y.insertTracking(n.baseTrackingUrl + i, r, 1)
            }
        };

    function Mi(e) {
        var t = JSON.parse(y.decryptUrl(e)),
            n = JSON.parse(t.data),
            i = n.adContentWidgetID;
        for (var r in t.injectionMode = t.injectionMode || 0, Ni[i] = t, n.inputs) n.inputs[r] = n.inputs[r].replace(/<\/script>/gi, "<\\/script>");
        var a = "";
        2 == t.injectionMode ? a += "<script>ntv.Widget" + i + " = ntv.Widget" + i + " || {}; ntv.Widget" + i + ".data=" + JSON.stringify(n.inputs) + ";ntv.Widget" + i + ".data.adContentWidgetID=" + n.adContentWidgetID + ";ntv.Widget" + i + ".trackEvent = function(id) { ntv.Widget.trackEvent(ntv.Widget" + i + ".data.adContentWidgetID, id)};<\/script>" : a += "<style>body{top:0px;left:0px;margin:0;}" + t.css + "</style><script>ntv.Widget = ntv.Widget || {}; ntv.Widget.data=" + JSON.stringify(n.inputs) + ";ntv.Widget.data.adContentWidgetID=" + n.adContentWidgetID + ";<\/script>", t.js.length > 0 && (a += "<script>" + t.js + "<\/script>");
        var o = "#ntvContentWidget" + i,
            s = document.querySelector(o);
        if (0 == t.injectionMode || 1 == t.injectionMode) {
            0 == t.injectionMode && s.sandbox.forEach(s.sandbox.remove);
            var c = "<html><head>" + a + "</head><body>" + t.template + "</body>";
            s.contentWindow.postMessage(c, "https://s.ntv.io"), s.removeAttribute("onload"), window.addEventListener("message", Vi, !0)
        } else 2 == t.injectionMode && (ntv.Widget = ntv.Widget || {}, ntv.Widget.trackEvent = Ui, ntv.Widget.receiveMessage = Vi, ntv.query(o).append(a + t.template))
    }

    function Fi(t, n) {
        var i, r, a = ntv.query(t),
            o = ntv.Util;
        if (a[0].getAttribute("data-enc-script")) {
            var s = ntv.Util.writeIframe(a, "", "<style>body{-ms-overflow-style: none;}body,div,span,a,img,video,p,li,ul,em,b,i{padding: 0px 0px 0px 0px !important;margin: 0px 0px 0px 0px !important;}body,div,a,ul,li,p{}</style>", ntv.Util.decryptUrl(a[0].getAttribute("data-enc-script")));
            a[0].getAttribute("data-enc-script", ""), r = s.body
        } else r = t.contentWindow.document;
        r.addEventListener("click", (function e(t) {
            o.appendImage(n), t.currentTarget.removeEventListener("click", e, !1)
        }), !1), r.addEventListener("touchstart", (function() {
            i = !1
        }), !1), r.addEventListener("touchmove", (function() {
            i = !0
        }), !1), r.addEventListener("touchend", (function t() {
            if (!i) {
                var r = e.currentTarget;
                o.appendImage(n), r.removeEventListener("touchstart", _onTouchstart, !1), r.removeEventListener("touchmove", _onTouchmove, !1), r.removeEventListener("touchend", t, !1)
            }
        }), !1)
    }

    function Bi() {
        var e = ntv.query;

        function t(t) {
            t.setAttribute("sandbox", "allow-same-origin allow-popups allow-popups-to-escape-sandbox");
            var n = t.contentWindow.document,
                i = e(n.body),
                r = function e(t) {
                    for (var n = 0; n < t.children.length;) {
                        if (/img|body|div|iframe/.test(t.children[n].tagName.toLowerCase()) && 0 != t.children[n].getBoundingClientRect().width) return t.children[n];
                        if (/iframe/.test(t.children[n].tagName.toLowerCase()) && void 0 !== window.getComputedStyle && "" == window.getComputedStyle(t.children[n]).width) return e(t.children[n].contentWindow.document.body);
                        if (/iframe/.test(t.children[n].tagName.toLowerCase()) && void 0 !== window.getComputedStyle && "" != window.getComputedStyle(t.children[n]).width) return t.children[n];
                        if (/iframe/.test(t.children[n].tagName.toLowerCase()) && (void 0 === t.children[n].style.width || "" == t.children[n].style.width)) return e(t.children[n].contentWindow.document.body);
                        if (t.children[n] instanceof HTMLElement && /div|span|ul/.test(t.children[n].tagName.toLowerCase()) && t.children[n].children.length > 0) return e(t.children[n]);
                        if (t.children[n] instanceof HTMLElement && /img|body|div/.test(t.children[n].tagName.toLowerCase())) return e(t.children[n]);
                        n++
                    }
                    return t.children[n]
                }(i[0]),
                a = new RegExp("complete");
            t.style.display = "block", 0 != i.length && (null == r && (r = e(n.body).children()[0]), i[0].scrollHeight > 1 && a.test(n.readyState) ? (t.style.height = i[0].scrollHeight + "px", t.style.width = i[0].scrollWidth + "px") : (t.style.width = r.scrollWidth ? r.scrollWidth + "px" : r.style.width, t.style.height = r.scrollHeight ? r.scrollHeight + "px" : r.style.height, function(e, t) {
                setTimeout((function() {
                    ("iframe" != e.tagName.toLowerCase() || e.contentWindow) && ntv.query(e.contentWindow.document).width() > 0 && ntv.query(e.contentWindow.document).height() > 0 && (e.style.width = ntv.query(e.contentWindow.document).width() + "px", e.style.height = ntv.query(e.contentWindow.document).height() + "px")
                }), 1e3)
            }(t)), !ntv.Util.is("u", r) && r.getBoundingClientRect().height && ntv.query(i).find("iframe").length && r.getBoundingClientRect().height > t.style.height.replace("px", "") && r.getBoundingClientRect().height && (t.style.height = ntv.Util.is("u", window.getComputedStyle) || isNaN(window.getComputedStyle(r).height) ? r.style.height ? r.style.height + "px" : r.getBoundingClientRect().height + "px" : window.getComputedStyle(r).height + "px"))
        }
        e.each(e(".ntv-adunit"), (function(n, i) {
            var r, a;
            i.setAttribute("scrolling", "no"), void 0 === i.rendered && (! function(t) {
                var n;
                n = t.getAttribute("data-enc-script") ? ntv.Util.decryptUrl(t.getAttribute("data-enc-script")) : unescape(t.getAttribute("data-ntv-script")), ntv.Util.writeIframe(e(t), "", "<style>body{-ms-overflow-style: none;}body,div,span,a,img,video,p,li,ul,em,b,i{padding: 0px 0px 0px 0px !important;margin: 0px 0px 0px 0px !important;}body,div,a,ul,li,p{}</style>", n)
            }(i), i.rendered = !0), i.setAttribute("sandbox", "allow-same-origin"), t(i), i.addEventListener("load", (function() {
                t(i)
            })), (a = (r = i).attributes["ntv-click-tracker"] ? r.attributes["ntv-click-tracker"].value : void 0) && Fi(r, a)
        }))
    }

    function ji(e) {
        ntv.Util.copyProperties(e, this), ntv.Util.adBlocker && ntv.query("iframe[id^='ntv']").each((function(e, t) {
            t.id = t.id.replace("ntv", "prx")
        }));
        var t, n, i = this,
            r = ntv.query,
            a = ntv.CONSTS,
            o = ntv.Util.getProtocol(),
            s = ntv.Util.adBlockerValidation(o + "//s.ntv.io/css/gallery-footer.css"),
            c = ".slider",
            l = "iframe#" + ntv.Util.getPrefix() + "-slideshow",
            u = r(this.outerCssClass).size() > 0 ? r(this.outerCssClass) : document.body,
            d = r(u).find(l);

        function p(e, t) {
            var n = i.baseTrackingUrl + e + "&" + a.AVP + "=" + i.adVersionPlacement + ntv.Util.setURLCache();
            return t && (n += "&" + a.REDIRECT + "=" + t), n
        }

        function f(e, t) {
            return ntv.query(e).find(t).andSelf().filter(t)
        }

        function h() {
            var e = ntv.Util.getElementDimensions(d);
            ntv.Util.setElementDimensions(d, e)
        }

        function v() {
            d.attr("frameBorder", 0).attr("scrolling", "no").attr("border", "1px solid #000");
            var e = d.contents()[0] || d[0].contentWindow.document;
            e.open();
            var a = '<link rel="stylesheet" type="text/css" href="' + i.galleryCss + '"/>';
            i.customCss && (a += "<style>" + i.customCss + "</style>");
            var o = function() {
                for (var e = "", t = 0; t < i.slideshow.slides.length; t++) {
                    var n = i.slideshow.slides[t];
                    if (n.enabled) {
                        if (e += '<div><div class="ntv-image" style="background-image: url(\'' + location.protocol + n.image + "');" + (n.clickUrl ? "cursor: pointer;" : "") + '" ', n.clickUrl) {
                            var r = ntv.Util.isiOS() ? ",'location=no'" : "";
                            e += "onclick=\"window.open('" + p(4, n.clickUrl) + "','_blank'" + r + ');"'
                        }
                        e += "></div></div>"
                    }
                }
                return '<div class="slider">' + e + "</div>"
            }();
            e.write('<html style="overflow: hidden"><head>' + a + "</head><body></body></html>"), e.close();
            var s = e.defaultView || e.parentWindow;
            ntv.Util.appendScript(i.galleryJS, (function() {
                ntv.MediaExtra.appendBody(o), s.$(c).on("afterChange", (function() {
                    ntv.MediaExtra.onSlideChange(ntv, i, f, r, n, t, p, !0)
                })), t = s.$(c).slick({
                    speed: 300,
                    slidesToShow: 1
                }), r(s).bind("resize", h), ntv.MediaExtra.onGalleryReady(h, ntv, i, f, r, n, t, p)
            }), "ntv-gallery", e)
        }
        this.galleryJS = ntv.Util.adBlockerValidation(o + "//s.ntv.io/js/gallery.min.js"), this.galleryCss = ntv.Util.adBlockerValidation(o + "//s.ntv.io/css/gallery.css"), this.init = function() {
            for (var e = 0; e < i.slideshow.slides.length; e++) {
                var t = i.slideshow.slides[e];
                t.headline && (i.showHeadline = !0), t.description && (i.showDesc = !0), t.date && (i.showDate = !0), t.photoCredit && (i.showCredit = !0)
            }
            if (i.useLegacyFooter) {
                var a = ntv.Util.getElementDimensions(d);
                d.replaceWith('<div id="gallery-wrapper">' + d.prop("outerHTML") + '<div class="ntv-gallery-footer">' + function(e) {
                    return '<table style="width: 100%"><tbody><tr><td class="ntv-gallery-headline"></td><td style="text-align: right" class="ntv-gallery-slidenum"><span class="ntv-gallery-current-slide"></span> / <span class="ntv-gallery-total-slides"></span></td></tr></tbody></table><p class="ntv-gallery-description"></p>' + '<table class="ntv-gallery-detailinfo" '.concat(e.showDate || e.showCredit ? "" : 'style="display: none;"', "><tbody><tr>") + '<td class="ntv-gallery-date"></td><td style="text-align: right" class="ntv-gallery-photo-credit"></td></tr></tbody></table>'
                }(i) + "</div></div>"), d = r(u).find(l), ntv.Util.setElementDimensions(d, a);
                d.width();
                r(u).find("#gallery-wrapper").css("margin-left", d[0].style.marginLeft).css("margin-right", d[0].style.marginRight).css("text-align", "center"), d.css("width", "100%"), d.css("display", "inline-block"), n = r(u).find(".ntv-gallery-footer"), ntv.Util.ntvAppendStylesheet("ntv-gallery", s)
            } else n = r(u).find(".ntv-gallery-metadata");
            n.length > 0 ? v() : setTimeout((function() {
                i.init()
            }), 100)
        }, ntv.Util.runWithFirefoxIframeProtection(d, (function() {
            i.init()
        }))
    }
    var Hi = {
        viewabilityTimeout: [],
        impressionTracked: null,
        clickTracked: null
    };

    function Wi(e) {
        Hi.impressionTracked && (e.data && y.is("b", e.data) ? function() {
            if (ntv.MRAID.adInfo)
                for (var e = function(e) {
                        var t = ntv.MRAID.adInfo[e],
                            n = t.videoDimensions,
                            i = t.primaryImpressionURL,
                            r = t.thirdPartyTrackingTags,
                            a = t.placementID,
                            o = t.adID,
                            s = t.minimumExposedTime,
                            c = t.startTracking;
                        t.tracked || c || (ntv.MRAID.adInfo[e].startTracking = !0, Hi.viewabilityTimeout.push(setTimeout((function() {
                            !y.is("o", n) || isNaN(n.width) || isNaN(n.height) || ntv.MRAID.adInfo[e].tracked || (i += "&ntv_vw=" + n.width + "&ntv_vh=" + n.height), $n.Record(i, r, 1, null, {
                                placementID: a,
                                adID: o
                            }), ntv.MRAID.adInfo[e].tracked = !0
                        }), s)))
                    }, t = 0; t < ntv.MRAID.adInfo.length; t++) e(t)
        }() : !e.data && y.is("b", e.data) && function() {
            for (var e = 0; e < Hi.viewabilityTimeout.length; e++) clearTimeout(Hi.viewabilityTimeout[e]), ntv.MRAID.adInfo[e].startTracking = !1;
            Hi.viewabilityTimeout = []
        }())
    }

    function qi() {
        Hi.impressionTracked || (Hi.impressionTracked = !0)
    }

    function zi() {
        Hi.clickTracked || (Hi.clickTracked = !0)
    }

    function Yi() {
        ntv.MRAID && (xi.PubSub.subscribe("mraidViewabilityChange", Wi), xi.PubSub.subscribe("mraidImpression", qi), xi.PubSub.subscribe("mraidClick", zi))
    }

    function Gi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Ki(e) {
        return (Ki = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Xi(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var n = [],
                i = !0,
                r = !1,
                a = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
            } catch (e) {
                r = !0, a = e
            } finally {
                try {
                    i || null == s.return || s.return()
                } finally {
                    if (r) throw a
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Qi(e) {
        return (Qi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ji(e, t) {
        e.addEventListener("click", (function() {
            var e = t.vastClickTrackings;
            e && e.forEach((function(e) {
                y.appendImage(e)
            }))
        }))
    }! function(e) {
        ! function(e, t) {
            t.Manager = function() {
                var n = xi.Types,
                    i = y.runWithFirefoxIframeProtection;

                function a() {
                    var t = this.playerType == e.CONSTS.NATIVO_PLAYER || this.playerType == e.CONSTS.VAST_PLAYER || this.playerType == e.CONSTS.PREROLL_NATIVO_PLAYER,
                        n = this.playerType == e.CONSTS.YOUTUBE_PLAYER,
                        i = this.playerType == e.CONSTS.AOL_PLAYER;
                    this.state = {
                        firstClick: !1,
                        firstPauseIgnored: !1,
                        firstPauseButtonClick: null,
                        isAutoPlay: !!this.autoPlayParams,
                        isPaused: null,
                        isPlaying: null,
                        isPreRollPaused: null,
                        isPreRollPlaying: null,
                        isStarted: null,
                        isEnded: null,
                        isMuted: null,
                        isFullScreen: null,
                        isVideoInView: null,
                        videoPlaying: null,
                        vastAsMainSource: this.vastAsMainSource,
                        canPlayInline: this.renderingParams.mobile && e.Util.is("b", document.createElement("video").playsInline),
                        isPreRoll: void 0 !== this.vastUrl && this.vastUrl.length > 0 && !this.vastAsMainSource,
                        prerollPlaying: null,
                        mainContentPlaying: null,
                        currentPreRollAdFetchState: null,
                        ignoreResumeForMoat: null,
                        preRollUnMuteTrackedOnMainContent: null,
                        previousVolumeLevel: null,
                        unMuteOnReplay: null,
                        resume_pause_check_UserClickedOnPlayer: null,
                        fullscreenButtonClickedWhileMuted: null,
                        preloadingVastState: null,
                        preloadVastStateBeginTimestamp: null,
                        preloadVastStateEndTimestamp: null,
                        returnedMetricValue: null,
                        firstClickOnAutoPlayVideo: null,
                        autoPlayTracker: null,
                        pauseButtonFirstClicked: null,
                        userInteracted: null,
                        onAutoPlayerUserInteraction: null,
                        minViewableArea: .5,
                        clickedBeforeRendering: null,
                        NativoPlayer: t,
                        YouTubePlayer: n,
                        AOLPlayer: i,
                        dontShowOverlay: null,
                        ignoredFirstPaused: null,
                        ignoredFirstPause: null,
                        ignoreFistPlay: null,
                        ignoreFirstClick: !0,
                        ignoreFirstResume: !0,
                        autoPlayCheck: !1,
                        autoPlayOn: !1,
                        defaultVolume: 0,
                        autoPlayStopWatch: null,
                        initializedModules: [],
                        preRollFetchStatus: null,
                        videoRenderingInitialized: !1,
                        windowScrollHandler: null,
                        renderVideoDelayOffset: 800,
                        currentTime: null,
                        duration: null,
                        viewableImpressionFired: !1,
                        isDFP: this.isDFP ? this.isDFP : !!this.renderingParams.isDFP && this.renderingParams.isDFP,
                        IFU: {
                            showHiddenWrappers: this.renderingParams.autoplay && this.renderingParams.article,
                            isExpandableTogglable: !!this.autoPlayParams,
                            useIframeId: this.renderingParams.autoplay && this.renderingParams.article && this.NativoPlayer
                        },
                        Skin: {
                            useIframeId: this.NativoPlayer && this.renderingParams.article,
                            permanentlyShowControls: 1 == this.renderingParams.article,
                            isNativoPlayer: t,
                            isYouTubePlayer: n,
                            showPreviewImageAtEnd: t
                        },
                        Player: {
                            previousPrerollVolume: null
                        },
                        MRAID: {
                            firstClicked: !1
                        }
                    }, Object.seal(this.state)
                }

                function o(t) {
                    this.stopWatch.reset(),
                        function(t) {
                            if (t.trackTimeOnContent) {
                                var n = PostRelease.ampMode ? e.Util.getTopWindow() : window.top;
                                t.tos_w_hidden = (new e.Tracking.Time).ntvStopWatch().ntvTimeOnContentStopWatch(t, 34).addStopWatchEventHandlers({
                                    node: PostRelease.ampMode ? n : n.document,
                                    type: "visibilitychange",
                                    handler: function() {
                                        this.preventResume = n.document.hidden, n.document.hidden && this.stop(), !n.document.hidden && this.parent.state.isPlaying && this.resume()
                                    }
                                })
                            }
                        }(this), this.player = y.is("o", t.data) ? t.data : null;
                    var n = this.parameters;
                    n.clickedBeforeRendering = this.state.clickedBeforeRendering, n.renderingParams.IFU = this.state.IFU, n.renderingParams.Skin = this.state.Skin, n.renderingParams.Player = this.state.Player, this.privateEvent.publish(e.Events.Types.Modules.EXECUTE, n)
                }

                function s() {
                    var e = void 0;
                    switch (this.playerType) {
                        case r.YOUTUBE_PLAYER:
                            e = this.player.element;
                            break;
                        case r.VAST_PLAYER:
                        case r.NATIVO_PLAYER:
                        case r.PREROLL_NATIVO_PLAYER:
                            e = this.player.el_ || this.player.L;
                            break;
                        case r.AOL_PLAYER:
                            this.iframeDoc && (e = this.iframeDoc);
                            break;
                        case r.VIANT_PLAYER:
                            this.player.getContainer && (e = this.player.getContainer())
                    }
                    var t, n = {
                            "[video_width]": e.clientWidth,
                            "[video_height]": e.clientHeight
                        },
                        i = this.tracker.videoTracking.map;
                    Object.keys(this.tracker.videoTracking.map).forEach((function(e) {
                        (t = i[e]).hasOwnProperty("third") && (t.third = y.insertMacrosIntoString(t.third, n))
                    }))
                }

                function c(e) {
                    e.privateEvent.subscribe(n.Player.Publish.General.PLAYER_READY, (function(t) {
                        o.call(e, t), s.call(e, t)
                    }))
                }

                function l(t) {
                    ! function(t) {
                        t.iframe = t.iframe.length > 0 ? t.iframe : prdom.query("iframe#" + e.Util.getVideoSelectorName() + "Iframe" + t.adID), t.renderingParams.article && !isNaN(t.iframeIndex) && t.iframe[t.iframeIndex] && (t.iframe = e.query(t.iframe[t.iframeIndex]))
                    }(t), t.iframeDoc = e.Util.writeIframe(t.iframe, 'style="overflow: hidden"', t.iframeHead + "<style>.VPAIDContainer iframe{display:none !important;}</style>", t.iframeBody), t.iframe.attr("scrolling", "no"), t.iframeContent = e.query(t.iframeDoc), t.iframeBodyElement = t.iframeContent.find("body")
                }

                function u(t) {
                    var n = t || this;
                    (function(t) {
                        var n = t || this,
                            i = e.query(n.iframe.contents()[0] || n.iframe[0].contentWindow.document).find("body");
                        return 0 == e.query(i).length || 0 == e.query(i).children().length
                    })(n) && v(n)
                }

                function d(e) {
                    var t = e.parameters;
                    t.isPreRoll = e.state.isPreRoll, t.isAutoPlay = e.state.isAutoPlay, t.iframeContent = e.iframeContent, t.iframe = e.iframe, t.iframeBodyElement = e.iframeBodyElement, t.iframeContent = e.iframeContent, e.state.videoRenderingInitialized = !0, e.privateEvent.publish(n.Player.Subscribe.RENDER_VIDEO_PLAYER, t)
                }

                function p(e) {
                    window.top.removeEventListener("scroll", e.state.windowScrollHandler), document.querySelector("body").removeEventListener("scroll", e.state.windowScrollHandler)
                }

                function f(e) {
                    e.state.windowScrollHandler = h.bind(e), window.top.addEventListener("scroll", e.state.windowScrollHandler, !1), document.querySelector("body").addEventListener("scroll", e.state.windowScrollHandler, !1)
                }

                function h(e) {
                    !this.state.videoRenderingInitialized && y.getElementViewability(this.iframe[0], e, this.state.renderVideoDelayOffset).visible ? (d(this), p(this)) : this.state.videoRenderingInitialized && p(this)
                }

                function v(e) {
                    var t = e || this;
                    try {
                        l(t),
                            function(e) {
                                y.getElementViewability(e.iframe[0], {
                                    target: window
                                }, e.state.renderVideoDelayOffset).visible && !e.state.videoRenderingInitialized ? d(e) : f(e)
                            }(t)
                    } catch (e) {
                        setTimeout(v, 100, t)
                    }
                }

                function m(t) {
                    var n = t || this;
                    ! function(t) {
                        var n = t || this;
                        n.doc = e.query(e.Util.getTopWindow().document).find("." + n.renderingParams.outerCssClass), n.iframe = 1 == n.renderingParams.article ? n.doc.find("iframe[id='" + n.renderingParams.iframeId + "']") : n.doc.find("iframe[id='" + e.Util.getVideoSelectorName() + "Iframe" + n.adID + "']")
                    }(n), c(n), i(n.iframe, v.bind(n), u.bind(n))
                }
                return function() {
                    function i(n, r, o) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), this.id = n, y.copyProperties(r, this), this.parameters = r, a.call(this), this.createPubSubs(), this.setupBusinessLogic(t.Logic.Business), this.registerDependencies(o), this.stopWatch = (new e.Tracking.Time).ntvStopWatch(), this.tracker = new e.Tracking.TrackingUrl(this, this), m(this)
                    }
                    var r, o, s;
                    return r = i, (o = [{
                        key: "registerDependencies",
                        value: function(e) {
                            var t = this;
                            (e instanceof Array || Array.isArray(e)) && e.forEach((function(e) {
                                "function" == typeof e && e(t.privateEvent)
                            }))
                        }
                    }, {
                        key: "registerSubscription",
                        value: function(e, t) {
                            this.privateEvent.subscribe(e, t)
                        }
                    }, {
                        key: "setupBusinessLogic",
                        value: function(e) {
                            var t = this;
                            e.forEach((function(e) {
                                var n, i, r;
                                i = e, r = n = t, n.registerSubscription(i.event, function(e, t) {
                                    if (function(e, t, n) {
                                            if (n.handlers)
                                                for (var i = 0; i < n.handlers.length && !n.handlers[i](e, t, n); i++);
                                        }(this, e, i), "a" == e.tagName && e.target.getAttribute && (null == e.target.getAttribute("href") || !e.target.getAttribute("href") || "#" == e.target.getAttribute("href"))) {
                                        if ("function" != typeof e.preventDefault) return !1;
                                        e.preventDefault()
                                    }
                                }.bind(r))
                            }))
                        }
                    }, {
                        key: "createPubSubs",
                        value: function() {
                            this.publicEvent = e.Events.PubSub, this.privateEvent = e.Events.SecurePubSub()
                        }
                    }, {
                        key: "executePlayerCommand",
                        value: function(e, t) {
                            return this.player ? this.executePlayerCommand = function(e, t) {
                                if (!y.is("u", this.player[e])) {
                                    var n = this.player[e](t);
                                    return n || !isNaN(n) && 0 == n ? n : void 0
                                }
                            } : this.executePlayerCommand = function(e, t) {
                                this.privateEvent.publish(n.Player.Subscribe[e.toUpperCase()], t)
                            }, this.executePlayerCommand(e, t)
                        }
                    }, {
                        key: "canShowRenderingOverlays",
                        value: function() {
                            return !this.state.autoPlayTracker || this.state.pauseButtonFirstClicked || this.state.userInteracted
                        }
                    }]) && Gi(r.prototype, o), s && Gi(r, s), i
                }()
            }()
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {})),
    function(e) {
        ! function(e, t) {
            ! function(e, t) {
                t.Behavior = function() {
                    var t = xi.Types,
                        n = xi.Data,
                        i = e.query;

                    function r() {
                        if (!(3 === this.autoPlayParams.onOutOfScreen && this.state.viewableImpressionFired || this.state.firstPauseButtonClick && !this.state.firstClick && this.player.paused())) {
                            var e = y.getElementViewability(this.iframe[0]);
                            e.visibleArea / e.totalArea >= this.state.minViewableArea && y.isOnFocus() ? (this.state.isVideoInView = !0, this.state.firstClick || !this.state.autoPlayOn || this.state.isPlaying || u.play(this), this.state.autoPlayStopWatch.resume(), this.state.isVideoInView = !0) : this.state.autoPlayStopWatch.reset(), !(e.visibleArea / e.totalArea <= .5) && y.isOnFocus() || (this.state.autoPlayStopWatch.eventFired = !1, (this.state.isPlaying || this.player.playing) && (this.state.isVideoInView = !1, s.onPlayerOutOfScreen(this)))
                        }
                    }

                    function a(e) {
                        ! function(e) {
                            e.state.onAutoPlayerUserInteraction = r.bind(e), i(y.getTopWindow()).unbind("scroll.autoPlay ready.autoPlay load.autoPlay ntvOnFocusChange.autoPlay").bind("scroll scroll.autoPlay ready.autoPlay load.autoPlay ntvOnFocusChange.autoPlay", e.state.onAutoPlayerUserInteraction), e.iframeBodyElement.find(".video-preview-img").css("visibility", "hidden")
                        }(e),
                        function(e) {
                            setTimeout(r.bind(e), 100)
                        }(e)
                    }

                    function o(e) {
                        return e.type.toLowerCase().split(":")
                    }
                    var s = {
                            checkAutoplay: function(e) {
                                if (s.isNotAutoPlay(e) || e.ampMode) return !0
                            },
                            updatePlayerReference: function(e, t) {
                                y.is("u", e.player) && y.is("f", t.data.play) && (e.player = t.data)
                            },
                            setAutoPlayState: function(e) {
                                e.state.autoPlayCheck = !0, e.state.isAutoPlay = !0, e.executePlayerCommand("mute"), u.setMutedState(e)
                            },
                            isAutoPlay: function(e) {
                                return e.state.autoPlayCheck && e.state.isAutoPlay
                            },
                            verifyAutoPlayIsOff: function(e) {
                                return !s.isAutoPlay(e)
                            },
                            bindHandlers: function(e) {
                                switch (d.isMRAID()) {
                                    case !0:
                                        d.visibiltyHandler(e);
                                        break;
                                    default:
                                        a(e)
                                }
                            },
                            isNotAutoPlay: function(e) {
                                return !e.autoPlayParams || 8 != e.renderingParams.videoExecution
                            },
                            copyParamsToScope: function(e) {
                                e.lastVolume = e.player ? e.player.getVolume() : .5, e.autoPlayParams && (e.autoPlayParams.playerElement = e.iframe[0], e.state.autoPlayOn = !0), y.copyProperties(e.autoPlayParams, this)
                            },
                            notShowEndScreenOrShowEndScreenAndDidntPlayOnce: function(e) {
                                var t = 1;
                                return e.onVideoEnd != t || e.onVideoEnd == t && !playedOnce
                            },
                            stopWatch: function(t, n) {
                                var i = t.player && "function" == typeof t.player.play ? t.player : y.is("o", n.data) && "function" == typeof n.data.play ? n.data : null;
                                t.state.autoPlayStopWatch = e.Tracking.Time().ntvStopWatch((function() {
                                    s.notShowEndScreenOrShowEndScreenAndDidntPlayOnce(t) && (!i.userInteracted && i.videoRendering && i.videoRendering.hideControlBar(), i.play())
                                }), t.autoPlayParams ? t.autoPlayParams.minViewableAreaTime : 0)
                            },
                            onPlayerOutOfScreen: function(e) {
                                u.pause(e)
                            },
                            turnOffAutoPlay: function(e, n) {
                                e.state.firstPauseButtonClick && !e.state.firstClick || !e.state.autoPlayOn || (! function(e) {
                                    i(y.getTopWindow()).unbind("scroll scroll.autoPlay ready.autoPlay load.autoPlay ntvOnFocusChange.autoPlay", e.state.onAutoPlayerUserInteraction), e.state.onAutoPlayerUserInteraction = null
                                }(e), e.state.autoPlayOn = !1, n.data && (!n.data || n.data.keepMuted) || n.type == t.Player.Publish.Content.VIDEO_END ? n.type == t.Player.Publish.Content.VIDEO_END && (e.state.unMuteOnReplay = !0) : (e.player.setVolume(e.state.defaultVolume), e.privateEvent.publish(t.Manager.UNMUTE)), n.type != t.Player.Publish.Content.VIDEO_END && e.privateEvent.publish(t.Manager.PLAY))
                            },
                            firstClick: function(e, t) {
                                var n = e.state;
                                if (!n.firstClickOnAutoPlayVideo && n.isAutoPlay) return n.firstClickOnAutoPlayVideo = !0, e.executePlayerCommand("unmute"), !0
                            },
                            ignoreFirstClick: function(e, t) {
                                if (t.data && "button" == t.data.tagName.toLowerCase() && e.state.isAutoPlay && e.state.NativoPlayer && !e.state.ignoredFirstPaused && t.data.classList.contains("vjs-playing")) return e.state.ignoredFirstPause = !0, e.state.dontShowOverlay = !0, !0
                            },
                            checkShowOverlay: function(t, n) {
                                if (-1 != t.state.initializedModules.indexOf(e.Events.Types.Skin.INITIALIZED)) return t.state.dontShowOverlay ? (t.state.dontShowOverlay = !1, !0) : !(!t.state.isPlaying || !t.state.autoPlayOn || d.isMRAID()) || void 0
                            },
                            checkClick: function(e, t) {
                                if (e.state.autoPlayCheck) {
                                    if (y.is("s", t.data) && t.data == n.PAUSE_BUTTON) return e.state.firstPauseButtonClick = !0, !0;
                                    e.state.firstClick = !0, e.player.setVolume(1)
                                }
                            },
                            checkPause: function(e, t) {
                                if (e.state.isEnded || e.player.ended && e.player.ended()) return !0;
                                if (e.state.autoPlayCheck && e.state.autoPlayOn) {
                                    if (e.state.isPreRoll && !e.state.prerollPlaying && e.state.firstPauseButtonClick && e.state.ignoreFirstClick) return e.state.ignoreFirstClick = !1, !1;
                                    if (e.state.firstPauseButtonClick && e.state.ignoreFirstClick) return e.state.ignoreFirstClick = !1, !0;
                                    if (!e.state.firstPauseButtonClick && !e.state.firstClick) return !0
                                } else {
                                    if (e.state.firstClick && !e.state.autoPlayOn && !e.state.firstPauseIgnored && !e.state.firstPauseButtonClick) return e.state.firstPauseIgnored = !0, !0;
                                    if (e.state.isPreRoll && !e.state.prerollPlaying && e.state.isPlaying) return !0;
                                    if (!e.executePlayerCommand("duration") && 0 == e.executePlayerCommand("duration")) return !0
                                }
                            },
                            checkResume: function(e, t) {
                                if (e.state.autoPlayCheck) {
                                    if (!e.state.firstPauseButtonClick && !e.state.firstClick) return !0;
                                    if (e.state.ignoreFirstResume) return e.state.ignoreFirstResume = !1, !0;
                                    if (!y.is("u", t.data) && t.data instanceof HTMLElement && t.data.classList.contains("learn-more-control-hover")) return !0
                                } else if (e.vastAsMainSource && (!e.executePlayerCommand("getCurrentTime") || null === e.executePlayerCommand("getCurrentTime"))) return !0
                            }
                        },
                        c = {
                            trackPreRollAdFetch: function(e, t, n) {
                                var i = e.state;
                                i.preloadingVastState = t, i.preloadVastStateEndTimestamp = (new Date).valueOf(), i.returnedMetricValue = i.preloadVastStateEndTimestamp - i.preloadVastStateBeginTimestamp
                            },
                            preRollAdRequest: function(e, t) {
                                e.state.preRollFetchStatus = "sending", c.trackPreRollAdFetch(e, "sending", "PREROLL_FETCH_AD_REQUEST")
                            },
                            disableVastPlugin: function(e) {
                                e.player.vastPlayer.disable()
                            },
                            prerollAdReturned: function(e, t) {
                                e.state.preRollFetchStatus = "done", c.trackPreRollAdFetch(e, "done", "PREROLL_FETCH_AD_RETURNED")
                            },
                            prerollAdCancel: function(t, n) {
                                t.state.isPreRoll && (e.query(e.Util.getTopWindow()).trigger("ntvVideoCanceled", [t.adID, t.player.getVolume()]), c.disableVastPlugin(t)), t.state.preRollFetchStatus = "cancelled", c.trackPreRollAdFetch(t, "cancelled", "PREROLL_FETCH_AD_CANCEL")
                            },
                            prerollAdError: function(e, t) {
                                e.state.isPreRoll && c.disableVastPlugin(e), e.state.preRollFetchStatus = "error", c.trackPreRollAdFetch(e, "error", "PREROLL_FETCH_AD_ERROR")
                            },
                            fullscreen: function(e, n) {
                                e.privateEvent.publish(t.Skin.FULLSCREEN, !0)
                            },
                            exitFullscreen: function(e, n) {
                                e.privateEvent.publish(t.Skin.EXIT_FULLSCREEN, !1)
                            },
                            renderPreRollSkin: function(n, i) {
                                i.data && i.data.clickthrough && (i.data.clickThrough = function(t, n) {
                                    return t.tracker.getUrl(95) + "&" + e.CONSTS.REDIRECT + "=" + n
                                }(n, i.data.clickthrough)), n.privateEvent.publish(t.Skin.RENDER_PREROLL_SKIN, i.data)
                            },
                            removePreRollSkin: function(e, n) {
                                e.privateEvent.publish(t.Skin.REMOVE_PREROLL_SKIN, n.data)
                            },
                            disabledTracking: function(e, t) {
                                e.trackingEnabled = !e.vastAsMainSource
                            },
                            enableTracking: function(e, t) {
                                e.trackingEnabled = e.vastAsMainSource
                            },
                            preRollLearnMoreClicked: function(e, n) {
                                e.privateEvent.publish(t.Player.Subscribe.Preroll.LEARN_MORE_CLICKED, n.data)
                            },
                            setPreRollPlaying: function(e, t) {
                                e.state.prerollPlaying = !0
                            },
                            unsetPreRollPlaying: function(e, t) {
                                e.state.prerollPlaying = !1, e.state.AOLPlayer || (e.state.Player.previousPrerollVolume = e.executePlayerCommand("getVolume"))
                            },
                            trackAsVastAsMainSource: function(e, t) {
                                if (u.isVastAsMainSource(e)) return e.privateEvent.publish(t.type.replace("preroll", "content"), t.data), !0
                            },
                            checkMuteForPlay: function(e, t) {
                                if (e.state.autoPlayCheck) {
                                    if (!e.state.firstClick && !e.state.firstClickOnAutoPlayVideo && !e.state.pauseButtonFirstClicked && e.state.ignoreFirstClick && e.state.isPreRoll) return !0
                                } else {
                                    if (e.state.preRollFetchStatus && ("cancelled" == e.state.preRollFetchStatus || "error" == e.state.preRollFetchStatus) && e.state.isPreRoll && 0 == e.executePlayerCommand("getCurrentTime")) return !0;
                                    if (e.state.isPreRoll && !e.state.prerollPlaying && e.state.preRollFetchStatus && "done" == e.state.preRollFetchStatus) return !0
                                }
                            },
                            isVpaidStart: function(e) {
                                return e.state.NativoPlayer && !e.executePlayerCommand("isMuted") && !e.executePlayerCommand("getCurrentTime") && e.state.isPreRoll && "done" === e.state.preRollFetchStatus && e.player.vast && e.player.vast.adUnit && "VPAID" === e.player.vast.adUnit.type
                            },
                            isVpaidAutoplayStart: function(e) {
                                return c.isVpaidStart(e) && e.state.isAutoPlay
                            },
                            checkUnmuteForPlay: function(e, t) {
                                return !(!e.state.preRollFetchStatus || "cancelled" != e.state.preRollFetchStatus && "error" != e.state.preRollFetchStatus || !e.state.isPreRoll || 0 != e.executePlayerCommand("getCurrentTime")) || (c.isVpaidAutoplayStart(e) ? (e.executePlayerCommand("mute"), !0) : void 0)
                            }
                        },
                        l = {
                            showOverlay: function(e, n) {
                                null == e.state.dontShowOverlay || s.checkShowOverlay(e, n) ? e.state.dontShowOverlay = !1 : e.privateEvent.publish(t.Skin.SHOW_OVERLAY)
                            },
                            showVideoEndImage: function(e, n) {
                                e.privateEvent.publish(t.Skin.SHOW_VIDEO_END_IMAGE)
                            },
                            hideVideoEndImage: function(e, n) {
                                e.privateEvent.publish(t.Skin.HIDE_VIDEO_END_IMAGE)
                            },
                            fullscreen: function(e, n) {
                                e.privateEvent.publish(t.Skin.FULLSCREEN, !0)
                            },
                            exitFullscreen: function(e, n) {
                                e.privateEvent.publish(t.Skin.EXIT_FULLSCREEN, !1)
                            },
                            setVideoStateToPlaying: function(e, t) {
                                isNaN(e.state.Player.previousPrerollVolume) || !e.state.Player.previousPrerollVolume || e.player.isMuted() || e.executePlayerCommand("setVolume", e.state.Player.previousPrerollVolume), e.state.mainContentPlaying = !0
                            },
                            unsetVideoStateToPlaying: function(e, t) {
                                e.state.mainContentPlaying = !1
                            },
                            checkVideoIsPlaying: function(e, t) {
                                if (!e.state.mainContentPlaying) return !0
                            },
                            checkVideoStart: function(e, t) {
                                var n = e.state;
                                if (n.NativoPlayer && n.isPreRoll && "done" === n.preRollFetchStatus && null === n.prerollPlaying) return !0
                            },
                            checkVastAsMainSourceMOATTracking: function(t, n) {
                                t.state.NativoPlayer && t.state.vastAsMainSource && n.data.vastAsMainSource && e.Video.Tracker.InstantiateMOAT && e.Video.Tracker.InstantiateMOAT(n.data.videoUrl)
                            },
                            checkLearnMore: function(e, n) {
                                e.ctaUrl && !/(ntv_r=null)/gi.test(e.ctaUrl) || e.privateEvent.publish(t.Skin.TOGGLE_LEARN_MORE, "hide")
                            }
                        },
                        u = {
                            fireVideoMangerEvent: function(e, n) {
                                var i = n.type.split(".");
                                i = i[i.length - 1], e.privateEvent.publish(t.Manager[i], e)
                            },
                            setPlayingState: function(e, t) {
                                e.state.isPlaying = t
                            },
                            toggleVideo: function(e, t) {
                                e.executePlayerCommand("toggle", e.state.isPlaying)
                            },
                            checkVastPreloadState: function(e, t) {
                                return (e.player.preloadVastExecuted && null == e.state.preRollFetchStatus || e.state.preRollFetchStatus && "sending" == e.state.preRollFetchStatus) && e.state.isPreRoll
                            },
                            play: function e(t, n) {
                                var i = t,
                                    r = n;
                                u.checkVastPreloadState(i, r) ? setTimeout(e, 0, i, r) : y.useVideoJSUpdate() ? i.state.vastAsMainSource && !y.is("u", i.executePlayerCommand("getCurrentTime")) && 0 === i.executePlayerCommand("getCurrentTime") ? i.executePlayerCommand("triggerPlay") : i.state.isAutoPlay && i.state.isPreRoll || i.executePlayerCommand("play") : i.state.vastAsMainSource && -(y.is("u", i.executePlayerCommand("getCurrentTime")) || -(!isNaN(i.executePlayerCommand("duration")) && 0 == -i.executePlayerCommand("duration") && 0 == -i.executePlayerCommand("getCurrentTime"))) + (!y.is("u", i.executePlayerCommand("getCurrentTime")) && 0 == +i.executePlayerCommand("getCurrentTime")) ? i.executePlayerCommand("triggerPlay") : i.state.isAutoPlay && i.state.isPreRoll || i.executePlayerCommand("play")
                            },
                            pause: function(e, t) {
                                e.executePlayerCommand("pause")
                            },
                            resume: function(e, t) {
                                e.executePlayerCommand("resume")
                            },
                            reset: function(e, t) {
                                e.executePlayerCommand("reset")
                            },
                            click: function(e, t) {
                                e.executePlayerCommand("click")
                            },
                            mute: function(e, t) {
                                e.executePlayerCommand("mute"), u.setMutedState(e)
                            },
                            unmute: function(e, t) {
                                e.executePlayerCommand("unmute"), u.unsetMutedState(e)
                            },
                            hidePreviewImage: function(e, n) {
                                e.privateEvent.publish(t.Skin.HIDE_PREVIEW_IMAGE)
                            },
                            showInfoBar: function(e, n) {
                                e.privateEvent.publish(t.Skin.SHOW_INFO_BAR)
                            },
                            hideInfoBar: function(e, n) {
                                y.is("s", n.data) && "fast" == n.data ? e.privateEvent.publish(t.Skin.HIDE_INFO_BAR, "fast") : e.privateEvent.publish(t.Skin.HIDE_INFO_BAR)
                            },
                            hideInfoBarFast: function(e, n) {
                                e.privateEvent.publish(t.Skin.HIDE_INFO_BAR, "fast")
                            },
                            setUserActive: function(e) {
                                e.privateEvent.publish(t.Player.Subscribe.USER_ACTIVE, !0)
                            },
                            setUserInactive: function(e) {
                                e.privateEvent.publish(t.Player.Subscribe.USER_INACTIVE, !1)
                            },
                            verifyThatVideoStarted: function(e, t) {
                                return null == e.state.isPlaying
                            },
                            startTimeTracking: function(e, t) {
                                u.setPlayingState(e, !0), e.parameters.trackTimeOnContent && (e.tos && e.tos.resume(), e.tos_w_hidden && e.tos_w_hidden.resume(), e.stopWatch.resume())
                            },
                            stopTimeTracking: function(e, t) {
                                u.setPlayingState(e, !1), e.parameters.trackTimeOnContent && (e.tos && e.tos.stopAndTrack(), e.tos_w_hidden && e.tos_w_hidden.stopAndTrack("content" == o(t)[1] && e.state.isEnded), e.stopWatch.stop())
                            },
                            isVastAsMainSource: function(e) {
                                if (e.state.vastAsMainSource) return !0
                            },
                            forceResize: function(e, n) {
                                e.executePlayerCommand("isFullscreen") && e.privateEvent.publish(t.Skin.RESIZE)
                            },
                            checkAnchorClick: function(n, i) {
                                var r = i.data;
                                if (y.isNotValidHeadlineLink(i.data)) return n.privateEvent.publish(t.IFU.TOGGLE_VIDEO, n.state.isPlaying), r.removeAttr("href").css("cursor", "pointer"), !0;
                                y.isNotValidHeadlineLink(r) || (e.query(r).attr("data-ntv-redirect", "true"), n.privateEvent.publish(t.IFU.ADHEADLINE_CLICK, r[0]))
                            },
                            updatePlayingState: function(e, t) {
                                var n = Xi(o(t), 3),
                                    i = (n[0], n[1]),
                                    r = n[2];
                                switch (r) {
                                    case "videoend":
                                    case "pause":
                                        switch (e.state.isPlaying = !1, r) {
                                            case "videoend":
                                                e.state.isEnded = !0, e.state.isPaused = !1, e.state.isPreRollPlaying = ("preroll" !== i || !e.state.isPreRoll) && null;
                                                break;
                                            case "pause":
                                                e.state.isPaused = !0, e.state.isPreRollPaused = !("preroll" !== i || !e.state.isPreRoll) || null
                                        }
                                        break;
                                    case "videostart":
                                    case "resume":
                                    case "progress":
                                        e.state.isPlaying = !0, e.state.isEnded = !1, e.state.isPaused = !1, e.state.isPreRollPlaying = !("preroll" !== i || !e.state.isPreRoll) || null, e.state.isPreRollPaused = ("preroll" !== i || !e.state.isPreRoll) && null, isNaN(t.data.currentTime) || isNaN(t.data.duration) || (e.state.currentTime = Math.ceil(t.data.currentTime), e.state.duration = Math.floor(t.data.duration))
                                }
                            },
                            openMobileShare: function(e) {
                                e.mobileShareParams && e.privateEvent.publish(t.Skin.Mobile.OPEN_MOBILE_SHARE, [])
                            },
                            closeMobileShare: function(e) {
                                e.mobileShareParams && e.privateEvent.publish(t.Skin.Mobile.CLOSE_MOBILE_SHARE, [])
                            },
                            toggleMobileShare: function(e, n) {
                                switch (n.type) {
                                    case t.Skin.Mobile.MOBILE_SHARE_OPENED:
                                        e.state.isPlaying && e.executePlayerCommand("pause");
                                        break;
                                    case t.Skin.Mobile.MOBILE_SHARE_CLOSED:
                                }
                            },
                            checkReplayState: function(e, t) {
                                e.state.unMuteOnReplay && (e.executePlayerCommand("unmute"), e.state.unMuteOnReplay = !1)
                            },
                            checkToggle: function(e, t) {
                                if ((e.mobile || !e.autoplay) && e.state.YouTubePlayer) return !0
                            },
                            hideOverlay: function(e, n) {
                                e.privateEvent.publish(t.Skin.HIDE_OVERLAY)
                            },
                            moduleInitialized: function(e, t) {
                                e.state.initializedModules.push(t.type)
                            },
                            setMutedState: function(e, t) {
                                e.state.isMuted = !0
                            },
                            unsetMutedState: function(e, t) {
                                e.state.isMuted = !1
                            },
                            notifyToCleanUp: function(e, n) {
                                var i = e;
                                setTimeout((function() {
                                    i.privateEvent.publish(t.Manager.ClEAN_UP, i)
                                }), 1e3)
                            },
                            adHeadlineClickRedirect: function(e, t) {
                                var n = t.data;
                                n.dataset.ntvRedirect && n.target && "_blank" == n.target && window.open(n.href, n.target)
                            }
                        },
                        d = function() {
                            function t() {
                                return "object" == Ki(e.MRAID)
                            }

                            function n(e, t) {
                                var n = t || this;
                                s.isAutoPlay(n) && n.state.autoPlayOn && (e.data && y.is("b", e.data) ? (n.state.isVideoInView = !0, n.state.firstClick || u.play(n), n.state.autoPlayStopWatch.resume()) : (n.state.isPlaying || n.player.playing) && (n.state.autoPlayStopWatch.reset(), n.state.isVideoInView = !1, s.onPlayerOutOfScreen(n)))
                            }

                            function i(e) {
                                (function(e) {
                                    var n = e.executePlayerCommand("isFullscreen");
                                    return t() && !e.state.MRAID.firstClick && "booleean" == typeof n && !n
                                })(e) && (e.state.MRAID.firstClick = !0)
                            }
                            return {
                                isMRAID: t,
                                visibiltyHandler: function(t) {
                                    ! function(t) {
                                        n({
                                            data: window.mraid.isViewable()
                                        }, t), e.Events.PubSub.subscribe("mraidViewabilityChange", n.bind(t))
                                    }(t)
                                },
                                click: function(e) {
                                    t() && (!y.isiOS() || e.state.isFullscreen || e.state.MRAID.firstClicked || e.player.toggleFullscreen(), e.state.MRAID.firstClicked = !0, i(e))
                                }
                            }
                        }();
                    return {
                        autoPlay: s,
                        preRoll: c,
                        content: l,
                        general: u,
                        mraid: d
                    }
                }()
            }(e, e.Video.Logic || (e.Video.Logic = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {})),
    function(e) {
        ! function(e, t) {
            ! function(e, t) {
                var n = xi.Types,
                    i = n.Tracking.Events.Preroll,
                    r = n.Tracking.Events.Content,
                    a = n.Tracking.Progress;

                function o(e) {
                    return e.player.isMuted() ? 0 : e.executePlayerCommand("getVolume")
                }

                function s(e, t, n) {
                    return {
                        NTVEvent: e,
                        contentType: t,
                        eventType: n,
                        volume: o(this)
                    }
                }

                function c(e, t) {
                    switch (t) {
                        case "u":
                            return e.toUpperCase();
                        case "l":
                            return e.toLowerCase();
                        case "c":
                            return (e = e.split(""))[0] = e[0].toUpperCase(), e.join("")
                    }
                }

                function l(e, t, n) {
                    "object" == Qi(t.data) && (t.data.contentType = n, t.data.tos = e.tos, t.data.tos_w_hidden = e.tos_w_hidden, t.data.volume = o(e), t.data.callback = function(t) {
                        t(e)
                    }, function(e, t) {
                        if (!y.isEmptyVideoTracking(e)) {
                            var n = e.videoTracking.progress[t.contentType].percentile;
                            for (var i in n) parseInt(i) <= Math.round(100 * t.currentTime) / Math.round(t.duration) && t.currentTime != t.duration && (t.eventType = "progress", t.progressSection = "percentile", t.NTVEvent = i, t.volume = o(e), e.publicEvent.publish(e.id + ":" + a[c(t.contentType, "c")].PERCENTILE, t))
                        }
                    }(e, t.data), function(e, t) {
                        t.eventType = "progress", t.progressSection = "currentTime", e.publicEvent.publish(e.id + ":" + a[c(t.contentType, "c")].CURRENT_TIME, t)
                    }(e, t.data))
                }
                t.Tracking = function() {
                    var e = [{
                            metric: "pause",
                            event: "PAUSE"
                        }, {
                            metric: "videoStart",
                            event: "VIDEO_START"
                        }, {
                            metric: "videoEnd",
                            event: "VIDEO_END"
                        }, {
                            metric: "click",
                            event: "CLICK"
                        }, {
                            metric: "adHeadlineClick",
                            event: "ADHEADLINE_CLICK"
                        }, {
                            metric: "resume",
                            event: "RESUME"
                        }, {
                            metric: "mute",
                            event: "MUTE"
                        }, {
                            metric: "unmute",
                            event: "UNMUTE"
                        }, {
                            metric: "volumechange",
                            event: "VOLUME_CHANGE"
                        }, {
                            metric: "fullscreen",
                            event: "FULLSCREEN"
                        }, {
                            metric: "exitFullscreen",
                            event: "EXIT_FULLSCREEN"
                        }],
                        t = {
                            prerollFetchAdRequest: function(e, t) {
                                var n;
                                switch (e.state.preloadingVastState) {
                                    case "sending":
                                        n = "PREROLL_FETCH_AD_REQUEST";
                                        break;
                                    case "done":
                                        n = "PREROLL_FETCH_AD_RETURNED";
                                        break;
                                    case "cancelled":
                                        n = "PREROLL_FETCH_AD_CANCEL";
                                        break;
                                    case "error":
                                        n = "PREROLL_FETCH_AD_ERROR"
                                }
                                e.publicEvent.publish(e.id + ":" + i[n], [e.state.returnedMetricValue])
                            },
                            progress: function(e, t) {
                                l(e, t, "preroll")
                            }
                        };
                    e.forEach((function(e) {
                        t[e.metric] = function(t, n) {
                            t.publicEvent.publish(t.id + ":" + i[e.event], s.call(t, e.metric, "preroll", "events"))
                        }
                    }));
                    var n = {
                        progress: function(e, t) {
                            l(e, t, "content")
                        }
                    };
                    e.forEach((function(e) {
                        n[e.metric] = function(t, n) {
                            t.publicEvent.publish(t.id + ":" + r[e.event], s.call(t, e.metric, "content", "events"))
                        }
                    }));
                    var a = {
                        click: function(e, t) {
                            e.publicEvent.publish(e.id + ":" + r.CLICK, s.call(e, "click", "content", "events"))
                        },
                        adHeadlineClick: function(e, i) {
                            e.state.isPreRoll && e.state.prerollPlaying ? t.adHeadlineClick(e, i) : n.adHeadlineClick(e, i)
                        },
                        notifyPublicPlayerIsReady: function(e, t) {
                            e.publicEvent.publish("ntvVideoRenderingReady", [e.placementID + "_" + e.adID, e.iframeContent])
                        },
                        notifyPublicMobilePlayerIsReady: function(e, t) {
                            e.publicEvent.publish("ntvMobileShareReady")
                        },
                        checkVideoEnd: function(e) {
                            if (null === e.state.currentTime || isNaN(e.state.currentTime) || isNaN(e.state.duration) || e.state.currentTime < e.state.duration - 1) return !0
                        }
                    };
                    return {
                        autoPlay: {},
                        preRoll: t,
                        content: n,
                        general: a
                    }
                }()
            }(0, e.Video.Logic || (e.Video.Logic = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {})),
    function(e) {
        ! function(e, t) {
            ! function(e, t) {
                var n = xi.Types,
                    i = xi.Types.Player.Publish,
                    r = i.Content,
                    a = i.Preroll,
                    o = i.General,
                    s = xi.Types.Manager,
                    c = n.IFU,
                    l = n.Skin,
                    u = e.Video.Logic.Behavior,
                    d = e.Video.Logic.Tracking,
                    p = [{
                        event: a.PREROLL_FETCH_AD_REQUEST,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.preRoll.preRollAdRequest, d.preRoll.prerollFetchAdRequest]
                    }, {
                        event: a.PREROLL_FETCH_AD_RETURNED,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.preRoll.prerollAdReturned, d.preRoll.prerollFetchAdRequest]
                    }, {
                        event: a.PREROLL_FETCH_AD_CANCEL,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.preRoll.prerollAdCancel, d.preRoll.prerollFetchAdRequest]
                    }, {
                        event: a.PREROLL_FETCH_AD_ERROR,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.preRoll.prerollAdError, d.preRoll.prerollFetchAdRequest]
                    }, {
                        event: a.ADHEADLINE_CLICK,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.autoPlay.firstClick, u.general.toggleVideo]
                    }, {
                        event: a.VIDEO_END,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.general.stopTimeTracking, u.preRoll.disabledTracking, u.preRoll.removePreRollSkin, u.preRoll.unsetPreRollPlaying, u.general.updatePlayingState, u.general.openMobileShare, d.general.checkVideoEnd, d.preRoll.videoEnd]
                    }, {
                        event: a.VIDEO_START,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.general.hidePreviewImage, u.preRoll.enableTracking, u.preRoll.renderPreRollSkin, u.preRoll.setPreRollPlaying, u.general.updatePlayingState, u.general.closeMobileShare, d.preRoll.videoStart]
                    }, {
                        event: a.PROGRESS,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.general.hideOverlay, u.general.updatePlayingState, d.preRoll.progress]
                    }, {
                        event: a.PAUSE,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.general.updatePlayingState, u.autoPlay.checkPause, u.general.openMobileShare, d.preRoll.pause]
                    }, {
                        event: a.BUFFERING,
                        handlers: []
                    }, {
                        event: a.CLICK,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.autoPlay.checkClick, u.autoPlay.turnOffAutoPlay, d.preRoll.click, u.mraid.click]
                    }, {
                        event: a.CTA_CLICK,
                        handlers: [u.preRoll.trackAsVastAsMainSource]
                    }, {
                        event: a.VOLUME_CHANGE,
                        handlers: [u.preRoll.trackAsVastAsMainSource, d.preRoll.volumechange]
                    }, {
                        event: a.IGNORE_FIRST_CLICK,
                        handlers: [u.preRoll.trackAsVastAsMainSource]
                    }, {
                        event: a.MUTE,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.preRoll.checkMuteForPlay, d.preRoll.mute]
                    }, {
                        event: a.UNMUTE,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.preRoll.checkUnmuteForPlay, d.preRoll.unmute]
                    }, {
                        event: a.RESUME,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.general.hidePreviewImage, u.autoPlay.checkResume, u.general.updatePlayingState, u.general.closeMobileShare, d.preRoll.resume]
                    }, {
                        event: a.FULLSCREEN,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.preRoll.fullscreen, d.preRoll.fullscreen]
                    }, {
                        event: a.EXIT_FULLSCREEN,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.preRoll.exitFullscreen, d.preRoll.exitFullscreen]
                    }, {
                        event: a.PREROLL_AD_CANCELED,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.preRoll.disabledTracking]
                    }, {
                        event: a.PREROLL_AD_ERROR,
                        handlers: [u.preRoll.trackAsVastAsMainSource, u.preRoll.disabledTracking]
                    }, {
                        event: a.RESIZE,
                        handlers: [u.general.forceResize]
                    }, {
                        event: r.ADHEADLINE_CLICK,
                        handlers: []
                    }, {
                        event: r.VIDEO_END,
                        handlers: [u.content.showVideoEndImage, u.autoPlay.turnOffAutoPlay, u.content.checkVideoIsPlaying, u.content.unsetVideoStateToPlaying, u.general.updatePlayingState, u.general.stopTimeTracking, u.general.openMobileShare, d.content.videoEnd]
                    }, {
                        event: r.VIDEO_START,
                        handlers: [u.content.checkVideoStart, u.general.hidePreviewImage, u.general.hideOverlay, u.content.checkLearnMore, u.content.setVideoStateToPlaying, u.general.checkReplayState, u.general.updatePlayingState, u.general.closeMobileShare, d.content.videoStart]
                    }, {
                        event: r.REPLAY,
                        handlers: [u.content.hideVideoEndImage]
                    }, {
                        event: r.PROGRESS,
                        handlers: [u.general.verifyThatVideoStarted, u.general.startTimeTracking, u.general.hideOverlay, u.general.updatePlayingState, d.content.progress]
                    }, {
                        event: r.PAUSE,
                        handlers: [u.content.showOverlay, u.general.hideInfoBarFast, u.general.stopTimeTracking, u.general.updatePlayingState, u.autoPlay.checkPause, u.general.openMobileShare, d.content.pause]
                    }, {
                        event: r.BUFFERING,
                        handlers: [u.general.stopTimeTracking]
                    }, {
                        event: r.CLICK,
                        handlers: [u.autoPlay.checkClick, u.autoPlay.turnOffAutoPlay, d.content.click, u.mraid.click]
                    }, {
                        event: r.VOLUME_CHANGE,
                        handlers: [d.content.volumechange]
                    }, {
                        event: r.IGNORE_FIRST_CLICK,
                        handlers: []
                    }, {
                        event: r.MUTE,
                        handlers: [u.preRoll.checkMuteForPlay, d.content.mute]
                    }, {
                        event: r.UNMUTE,
                        handlers: [u.preRoll.checkUnmuteForPlay, d.content.unmute]
                    }, {
                        event: r.RESUME,
                        handlers: [u.general.hidePreviewImage, u.autoPlay.checkResume, u.general.updatePlayingState, u.general.closeMobileShare, d.content.resume]
                    }, {
                        event: r.FULLSCREEN,
                        handlers: [u.content.fullscreen, d.content.fullscreen]
                    }, {
                        event: r.EXIT_FULLSCREEN,
                        handlers: [u.content.exitFullscreen, d.content.exitFullscreen]
                    }, {
                        event: r.RESIZE,
                        handlers: [u.general.forceResize]
                    }, {
                        event: r.CAN_PLAY,
                        handlers: [u.content.checkVastAsMainSourceMOATTracking]
                    }, {
                        event: o.PLAYER_READY,
                        handlers: [u.autoPlay.checkAutoplay, u.autoPlay.updatePlayerReference, u.autoPlay.copyParamsToScope, u.autoPlay.setAutoPlayState, u.autoPlay.stopWatch, u.autoPlay.bindHandlers]
                    }, {
                        event: o.USER_ACTIVE,
                        handlers: [u.general.showInfoBar]
                    }, {
                        event: o.USER_INACTIVE,
                        handlers: [u.general.hideInfoBar]
                    }, {
                        event: l.INITIALIZED,
                        handlers: [u.general.moduleInitialized]
                    }, {
                        event: l.INFO_BAR_CLICK,
                        handlers: [u.general.toggleVideo]
                    }, {
                        event: l.CLICK,
                        handlers: [u.autoPlay.turnOffAutoPlay, u.general.click]
                    }, {
                        event: l.PLAY,
                        handlers: [u.general.play]
                    }, {
                        event: l.PAUSE,
                        handlers: [u.general.pause]
                    }, {
                        event: l.RESUME,
                        handlers: [u.general.resume]
                    }, {
                        event: l.USER_INACTIVE,
                        handlers: [u.general.setUserInactive]
                    }, {
                        event: l.USER_ACTIVE,
                        handlers: [u.general.setUserActive]
                    }, {
                        event: l.PREVIEW_IMAGE_CLICK,
                        handlers: [d.general.click]
                    }, {
                        event: l.Preroll.LEARN_MORE_CLICKED,
                        handlers: [u.preRoll.preRollLearnMoreClicked]
                    }, {
                        event: l.READY,
                        handlers: [d.general.notifyPublicPlayerIsReady]
                    }, {
                        event: l.USER_ACTIVE,
                        handlers: [u.general.setUserActive]
                    }, {
                        event: l.Mobile.MOBILE_SHARE_CLOSED,
                        handlers: []
                    }, {
                        event: l.Mobile.MOBILE_SHARE_OPENED,
                        handlers: [u.general.toggleMobileShare]
                    }, {
                        event: c.INITIALIZED,
                        handlers: []
                    }, {
                        event: c.READY,
                        handlers: []
                    }, {
                        event: c.EXPANDED,
                        handlers: [u.general.play]
                    }, {
                        event: c.COLLAPSED,
                        handlers: [u.general.pause, u.general.hideOverlay]
                    }, {
                        event: c.TOGGLE_VIDEO,
                        handlers: [u.general.toggleVideo, u.autoPlay.turnOffAutoPlay, u.autoPlay.verifyAutoPlayIsOff]
                    }, {
                        event: c.CLICK,
                        handlers: [u.general.fireVideoMangerEvent]
                    }, {
                        event: c.ANCHOR_CLICK,
                        handlers: [u.general.checkAnchorClick]
                    }, {
                        event: c.ADHEADLINE_CLICK,
                        handlers: [d.general.adHeadlineClick, u.general.adHeadlineClickRedirect]
                    }, {
                        event: s.PLAY,
                        handlers: [u.general.play]
                    }, {
                        event: s.PAUSE,
                        handlers: [u.general.pause]
                    }, {
                        event: s.RESUME,
                        handlers: [u.general.resume]
                    }, {
                        event: s.RESET,
                        handlers: [u.general.reset]
                    }, {
                        event: s.MUTE,
                        handlers: [u.general.mute]
                    }, {
                        event: s.UNMUTE,
                        handlers: [u.general.unmute]
                    }, {
                        event: s.TOGGLE_VIDEO,
                        handlers: [u.general.toggleVideo]
                    }, {
                        event: s.USER_INACTIVE,
                        handlers: [u.general.setUserInactive]
                    }, {
                        event: s.USER_ACTIVE,
                        handlers: [u.general.setUserActive]
                    }, {
                        event: s.PREVIEW_IMAGE_CLICK,
                        handlers: [d.general.click]
                    }, {
                        event: s.ClEAN_UP,
                        handlers: []
                    }];
                t.Business = p, Object.seal(t.Business)
            }(e, e.Video.Logic || (e.Video.Logic = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {})),
    function(e) {
        ! function(e, t) {
            ! function(e, t) {
                t.AOL = function() {
                    var t = xi.Types,
                        n = t.Player.Publish;

                    function i(i) {
                        var r, a, o, s, c, l = i,
                            u = e.Util,
                            d = e.query,
                            p = u.getProtocol() + "//cdn.vidible.tv/prod/player/js/latest/vidible-min.js";

                        function f() {
                            return r.prerollPlaying
                        }

                        function h() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            r.prerollPlaying = e
                        }

                        function v() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            r.playing = e
                        }

                        function m() {
                            return r.playing
                        }

                        function g(e, t) {
                            u.is("b", f()) && f() ? l.publish(n.Preroll[e], t) : l.publish(n.Content[e], t)
                        }

                        function y(e) {
                            var t = this,
                                i = t.player;
                            i.on(e.VIDEO_START, (function(e) {
                                v(), g("VIDEO_START")
                            })), i.on(e.VIDEO_PAUSE, (function(e) {
                                v(!1), g("PAUSE", {
                                    playing: m()
                                })
                            })), i.on(e.VIDEO_PLAY, (function(e) {
                                v(), g("RESUME")
                            })), i.on(e.VIDEO_END, (function(e) {
                                v(!1), g("VIDEO_END", {
                                    playing: m()
                                })
                            })), i.on(e.VIDEO_TIMEUPDATE, (function(e) {
                                var t, n = e.data;
                                switch (i.currentTime = isNaN(n.playheadTime) ? 0 : n.playheadTime, t = i.currentTime, u.is("u", s) || u.is("u", c) ? (s = t, c = t, !1) : c === t || void(c = t)) {
                                    case !0:
                                        g("BUFFERING", {
                                            playing: m(),
                                            duration: n.duration,
                                            currentTime: n.playheadTime
                                        });
                                        break;
                                    default:
                                        g("PROGRESS", {
                                            playing: m(),
                                            duration: n.duration,
                                            currentTime: n.playheadTime
                                        })
                                }
                            })), i.on(e.AD_START, (function(e) {
                                h(), l.publish(n.Preroll.VIDEO_START)
                            })), i.on(e.AD_END, (function(e) {
                                f() && (h(!1), l.publish(n.Preroll.VIDEO_END))
                            })), i.on(e.ENTER_FULLSCREEN, (function(e) {
                                g("FULLSCREEN")
                            })), i.on(e.EXIT_FULLSCREEN, (function(e) {
                                g("EXIT_FULLSCREEN")
                            })), i.on(e.PLAYER_READY, (function() {
                                t.autoPlayParams && i.setVolume(0), b()
                            })), i.on(e.PLAYER_ERROR, (function(e) {})), i.on(e["content.CLICK"], (function(e) {
                                g("CLICK")
                            })), i.on(e.VIDEO_VOLUME_CHANGED, (function(e) {
                                g("VOLUME_CHANGE", {
                                    volume: e.data.volume
                                })
                            }))
                        }

                        function E() {
                            var e = this.player;
                            e.getCurrentTime = function() {
                                return e.currentTime
                            }, e.getDuration = function() {
                                return e.duration
                            }, e.toggle = function() {
                                f() || m() ? e.pause() : e.play()
                            }, e.reset = function() {
                                e.seekTo(0), e.pause()
                            }, e.mute = function() {}
                        }

                        function b() {
                            l.publish(t.Player.Publish.General.PLAYER_READY, r.player)
                        }

                        function T() {
                            var e = o.vidible,
                                t = this.aolVideoSettings || this.playerSettings,
                                n = {
                                    pid: t.pid,
                                    bcid: t.bcid,
                                    bid: t.bid,
                                    "m.playertype": "html",
                                    "m.isResponsive": !0,
                                    "m.playback": "click"
                                };
                            n["m.initialVolume"] = this.autoPlayParams ? this.autoPlayParams.onClickVolume : .5, this.autoPlayParams && (n["m.sound"] = "muted"), d(".video-wrapper", o.document).html(""), d(".video-wrapper", o.document).addClass("vdb_" + t.pid + t.bcid), this.player = e.player(d(".video-wrapper", o.document)[0]).setup(n), this.autoPlayParams && (this.firstClick = !1), E.call(this), y.call(this, e), this.player.load(), b.call(this)
                        }
                        return {
                            init: function(e) {
                                ! function(e) {
                                    a = e.iframeContent[0], o = a.defaultView || a.parentWindow, e.playerCssUrl && ntvAppendStylesheet("ntvPlayerCss", e.playerCssUrl, a), d(".video-wrapper", o.document).html(""), u.appendScript(p, T.bind(e), "ntv-videojs", a)
                                }(r = e.data)
                            }
                        }
                    }
                    return function(e) {
                        var n = i(e);
                        e.subscribe(t.Player.Subscribe.RENDER_VIDEO_PLAYER, n.init.bind(this))
                    }
                }()
            }(e, e.Video.Player || (e.Video.Player = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {})),
    function(e) {
        ! function(e, t) {
            ! function(e, t) {
                t.Nativo = function() {
                    var t = xi.Types,
                        n = t.Player.Publish,
                        i = t.Player.Subscribe;

                    function a(a) {
                        var o, s, c, l = a,
                            u = e.query,
                            d = e.Events.Data,
                            p = y.useVideoJSUpdate() ? {
                                bigPlayButton: !1,
                                controlBar: {
                                    playToggle: {},
                                    progressControl: {
                                        seekBar: {
                                            mouseTimeDisplay: !1,
                                            playProgressBar: {
                                                timeTooltip: !1
                                            }
                                        }
                                    },
                                    currentTimeDisplay: {},
                                    timeDivider: {},
                                    durationDisplay: {},
                                    volumePanel: {
                                        inline: !1
                                    },
                                    fullscreenToggle: {},
                                    liveDisplay: !1,
                                    seekToLive: !1,
                                    remainingTimeDisplay: !1,
                                    pictureInPictureToggle: !1,
                                    subsCapsButton: !1
                                },
                                inactivityTimeout: 1e3
                            } : {
                                controlBar: {
                                    progressControl: {},
                                    currentTimeDisplay: {},
                                    timeDivider: {},
                                    durationDisplay: {},
                                    playToggle: {},
                                    volumeMenuButton: {
                                        inline: !1,
                                        vertical: !0
                                    },
                                    fullscreenToggle: {}
                                },
                                inactivityTimeout: 1e3
                            };

                        function f(e) {
                            void 0 !== this.titleClicked && this.titleClicked && e.play()
                        }

                        function h() {
                            var e = o.player;
                            e.getVolume = function() {
                                return o.player.volume()
                            }, e.setVolume = function(e) {
                                o.player.volume(e)
                            }, e.toggle = function() {
                                o.playing ? o.player.pause() : o.player.play()
                            }, e.resume = o.player.play, e.unMute = function() {
                                o.player.muted(!1)
                            }, e.unmute = o.player.unMute, e.mute = function() {
                                o.player.muted(!0)
                            }, e.isMuted = function() {
                                return o.player.muted()
                            }, e.reset = o.player.reset, e.triggerPlay = function() {
                                o.player.trigger("play")
                            }, e.toggleFullscreen = function() {
                                return e.isFullscreen() ? e.exitFullscreen() : e.requestFullscreen(), e.isFullscreen()
                            }, e.getCurrentTime = function() {
                                return o.player.vpaidProgress ? o.player.vpaidProgress : o.player.vpaidEnded && o.player.vpaidEndTime ? o.player.vpaidEndTime : o.player.currentTime()
                            }
                        }

                        function v(e, t) {
                            y.is("b", o.prerollPlaying) && o.prerollPlaying ? l.publish(n.Preroll[e], t) : l.publish(n.Content[e], t)
                        }

                        function m() {
                            return o.renderingParams.mobile && y.is("b", document.createElement("video").playsInline)
                        }

                        function g(e) {
                            var t = e.target.classList.contains("vjs-playing");
                            e.target.classList.contains("vjs-icon-placeholder") && (t = e.target.parentNode.classList.contains("vjs-playing")), v("CLICK", t ? d.PAUSE_BUTTON : null)
                        }

                        function E(e) {
                            o.startX = e.touches[0].pageX || document.body.scrollTop, o.startY = e.touches[0].pageY || document.body.scrollLeft
                        }

                        function b(e) {
                            o.endX = e.touches[0].pageX || document.body.scrollTop, o.endY = e.touches[0].pageY || document.body.scrollLeft, o.touchMoved = !0
                        }

                        function T(e) {
                            (o.startX == o.endX && o.startY == o.endY || !o.touchMoved) && g(e), o.endX = 0, o.endY = 0, o.startX = 0, o.startY = 0, o.touchMoved = !1
                        }

                        function k() {
                            if (void 0 === o.previousPosition) {
                                if (o.previousPosition = o.player.currentTime(), isNaN(o.player.currentTime())) return !0
                            } else {
                                if (o.previousPosition == o.player.currentTime() && o.buffering) return !0;
                                o.buffering = !1
                            }
                            return o.previousPosition = o.player.currentTime(), !1
                        }

                        function S() {
                            return !isNaN(o.player.duration()) && o.player.duration() > 0
                        }

                        function w() {
                            o.playerStarted = !0, o.playerEnded = !1
                        }

                        function P() {
                            o.playerStarted = !1, o.playerEnded = !0
                        }

                        function I() {
                            return y.is("b", o.playerStarted) && o.playerStarted
                        }

                        function A() {
                            return y.is("b", o.playerEnded) && o.playerEnded
                        }

                        function C(e, t) {
                            var n = u(o.iframeBodyElement[0]).find("div.video-js");
                            e.data ? (n.removeClass("vjs-user-inactive").addClass("vjs-user-active"), o.player.trigger("useractive"), o.player.userActive(e.data), t && t.active.forEach((function(e) {
                                e.classNames.forEach((function(t) {
                                    e.node.classList.add(t)
                                }))
                            }))) : (n.removeClass("vjs-user-active").addClass("vjs-user-inactive"), o.player.trigger("userinactive"), t && t.inactive.forEach((function(e) {
                                e.classNames.forEach((function(t) {
                                    e.node.classList.remove(t)
                                }))
                            })))
                        }

                        function R() {
                            l.subscribe(t.Player.Subscribe.PLAY, o.player.play), l.subscribe(t.Player.Subscribe.USER_ACTIVE, C), l.subscribe(t.Player.Subscribe.USER_INACTIVE, C)
                        }

                        function _() {
                            l.publish(t.Player.Publish.General.PLAYER_READY, o.player)
                        }

                        function D() {
                            return o.vastAsMainSource
                        }

                        function L() {
                            return o.isPreRoll
                        }

                        function O() {
                            return o.prerollPlaying
                        }

                        function x() {
                            return o.vpaidPlaying
                        }

                        function N() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            o.prerollPlaying = e, o.vpaidPlaying = t
                        }

                        function V() {
                            if (!o.vastUrl || 0 == o.vastUrl.length) {
                                o.vastUrl = void 0;
                                var e = o.vastXML;
                                o.vastXML = function(t) {
                                    setTimeout((function() {
                                        t(null, e)
                                    }), 0)
                                }
                            }
                        }

                        function U() {
                            var e = y.getElementDimensions(o.iframe);
                            o.vastPlayer = o.player.vastClient({
                                adTagUrl: y.is("s", o.vastUrl) && o.vastUrl.length ? o.vastUrl.replace("[video_width]", e.w).replace("[video_height]", e.h) : null,
                                adTagXML: o.vastXML,
                                playAdAlways: !0,
                                isPreRoll: L(),
                                adsEnabled: !0,
                                autoResize: !0,
                                timeout: 4e6,
                                ntvVastAsMainSource: o.vastAsMainSource
                            })
                        }

                        function M() {
                            (o.vastUrl || o.vastXML && o.vastAsMainSource) && o.vastPlayer && o.vastPlayer.preLoadVast && (o.pubsub = l, o.preRollRequestEvents = e.Events.Types.Player.Publish.Preroll, o.player.preloadVastExecuted = !0, o.player.vastPlayer = o.vastPlayer, o.vastPlayer.preLoadVast(o))
                        }

                        function F(e) {
                            O() && (e.preventDefault(), e.stopImmediatePropagation(), L() && setTimeout((function() {
                                o.player.vast.adUnit && (o.player.vast.adUnit.isPaused() ? o.player.vast.adUnit.resumeAd() : o.player.vast.adUnit.pauseAd())
                            }), 250))
                        }

                        function B(e) {
                            O() && (e.preventDefault(), e.stopImmediatePropagation(), L() && (o.curpos < o.player.currentTime() ? o.player.currentTime(o.curpos) : o.curpos > o.player.currentTime() && o.player.currentTime(o.curpos)))
                        }

                        function j(e) {
                            if (y.is("s", e.advertiser)) return e.advertiser;
                            if (!(e.ads instanceof Array && e.ads.length)) return "Advertisement";
                            var t = e.ads.filter((function(e) {
                                return inLine && inLine.advertiser
                            }));
                            return t && t.length ? t[0].inLine.advertiser : void 0
                        }

                        function H() {
                            o.vastAsMainSource && o.player.on("canplay", (function(e) {
                                l.publish(n.Content.CAN_PLAY, {
                                    vastAsMainSource: o.vastAsMainSource,
                                    videoUrl: o.player.src()
                                })
                            }))
                        }

                        function W() {
                            var t = this,
                                r = this,
                                a = (r.iframeContent, r.player);
                            if (r.playing = !1, r.trackingEnabled = !r.vastAsMainSource, r.resize && r.resize(), h(), r.vastUrl.length > 0 || r.vastXML) {
                                V(), U(), H(), M();
                                var o = document.querySelector(".ntv-headline");
                                o && Ji(o, r), a.on("vast.adStart", (function(t) {
                                    a.on("progress", (function t() {
                                        var o;
                                        if (a.off("progress", t), N(), a.isPreRoll = !0, a.vast.vastResponse.clickThrough ? o = a.vast.vastResponse.clickThrough : a.vast.vastResponse.clickThroughURLTemplate && (o = VASTUtil.resolveURLTemplates([a.vast.vastResponse.clickThroughURLTemplate], {
                                                CACHEBUSTER: Math.round(1e10 * Math.random()),
                                                CONTENTPLAYHEAD: a.vastTracker.progressFormated()
                                            })[0]), o) {
                                            PostRelease.clickThrough = o;
                                            for (var s = document.querySelectorAll(".ntvClickOut a"), c = document.getElementById(e.Util.getVideoSelectorName() + "Iframe" + r.adID).contentWindow.document.querySelectorAll("a"), u = [], d = 0; d < s.length; d++) u.push(s[d]);
                                            for (var p = 0; p < c.length; p++) u.push(c[p]);
                                            u.forEach((function(e) {
                                                e && e.getAttribute("href") && e.setAttribute("href", e.getAttribute("href").replace(/@redirectUrl/gi, o))
                                            }))
                                        }
                                        var f = r.iframe[0].contentWindow.document.querySelector(".learn-more-control-hover");
                                        f && Ji(f, r), w(), l.subscribe(i.Preroll.LEARN_MORE_CLICKED, (function() {
                                            a.vastTracker.trackURLs([clicktrackers])
                                        })), D() ? l.publish(n.Content.VIDEO_START) : l.publish(n.Preroll.VIDEO_START, {
                                            clickThrough: r.player.vast.vastResponse.clickThrough,
                                            advertiser: j(r.player.vast.vastResponse),
                                            ad: r.player.vast.vastResponse.ads[0],
                                            clickthrough: o,
                                            clickTrackers: a.vast.vastResponse.clickTrackers
                                        })
                                    }))
                                })), a.on("vast.adsCanceled", (function() {
                                    N(!1), l.publish(n.Preroll.PREROLL_AD_CANCELED, {
                                        playerElement: a.el()
                                    })
                                })), a.on("vast.adError", (function() {
                                    L() && N(!1), r.autoPlayParams ? (a.pause(), a.play()) : (w(), l.publish(n.Content.VIDEO_START)), l.publish(n.Preroll.PREROLL_AD_ERROR, {
                                        playerElement: a.el()
                                    })
                                })), a.on("vast.adEnd", (function() {
                                    a.isPreRoll = !1, N(!1), r.playerStarted = !1, D() ? (P(), l.publish(n.Content.VIDEO_END), r.vastAsMainSourceEnded = !0) : l.publish(n.Preroll.VIDEO_END, {
                                        playerElement: a.el()
                                    });
                                    var e = a.L || a.el();
                                    "video" == e.tagName.toLowerCase() || (e = e.firstElementChild), e.setAttribute("playsinline", "true"), e.onloadstart = function(e) {
                                        r.autoPlayParams && (e.target.volume = 0, e.target.muted = !0), r.wasMuted || (e.target.volume = 1, e.target.muted = !1), e.target.play()
                                    }
                                })), a.on("vast.contentStart", (function(e) {
                                    r.wasMuted && a.mute()
                                })), a.on("vpaid.AdClickThru", (function(e) {
                                    a.trigger("click"), e.target.children[0].pause()
                                }));
                                a.lastTimeupdate = null, a.on("vpaid.AdVideoStart", (function(e) {
                                    r.vpaidVideoUrl = a.src(), a.isPreRoll = !0, N(!0, !0);
                                    var i = r.iframe[0].contentWindow.document.querySelector(".vjs-control-bar"),
                                        o = r.iframe[0].contentWindow.document.querySelector(".VPAID-Container"),
                                        s = [],
                                        c = {
                                            active: [{
                                                node: i.parentElement,
                                                classNames: ["vjs-has-started"]
                                            }],
                                            inactive: [{
                                                node: i.parentElement,
                                                classNames: ["vjs-has-started"]
                                            }]
                                        },
                                        u = function() {
                                            C({
                                                data: !0
                                            }, c)
                                        };
                                    Array.prototype.slice.call(o.querySelectorAll("iframe")).forEach((function(e, n) {
                                        e.contentWindow.document.body.addEventListener("mousemove", u.bind(t, s, n))
                                    })), w(), l.publish(n.Preroll.VIDEO_START, {
                                        clickThrough: r.player.vast.vastResponse.clickThrough,
                                        advertiser: j(r.player.vast.vastResponse),
                                        ad: r.player.vast.vastResponse.ads[0],
                                        clickthrough: "",
                                        clickTrackers: a.vast.vastResponse.clickTrackers
                                    })
                                })), a.on("vpaid.AdVideoComplete", (function(e) {
                                    a.src(r.vpaidVideoUrl), a.isPreRoll = !1, N(!1), a.vpaidEnded = !0, a.vpaidEndTime = a.lastTimeupdate, a.lastTimeupdate = null
                                })), a.on("vpaid.AdPaused", (function(e) {
                                    r.playing = !1, v("PAUSE", {
                                        playing: !1,
                                        vpaid: !0
                                    })
                                })), a.on("vpaid.AdPlaying", (function(e) {
                                    r.playing = !0, v("RESUME", {
                                        playing: !0,
                                        vpaid: !0
                                    })
                                })), a.on("vpaid.AdTimeupdate", (function(e) {
                                    !isNaN(a.vpaidProgress) && a.vpaidProgress > 0 && a.vpaidProgress <= a.vpaidDuration && !isNaN(a.vpaidProgress) && (null == a.lastTimeupdate || a.lastTimeupdate != a.vpaidProgress) && (v("PROGRESS", {
                                        playing: r.playing,
                                        duration: a.vpaidDuration,
                                        currentTime: a.vpaidProgress
                                    }), a.lastTimeupdate = a.vpaidProgress), a.lastTimeupdate == a.vpaidProgress && v("BUFFERING")
                                }))
                            }! function(t) {
                                if (!t.bound) {
                                    t.bound = !0, R();
                                    var i = t.player;
                                    i.muted() && (t.wasMuted = !0), i.on("volumechange", (function() {
                                        S() && (i.muted() ? (v("MUTE"), t.wasMuted = !0) : i.muted() || 1 != t.wasMuted || (v("UNMUTE"), t.wasMuted = !1), v("VOLUME_CHANGE"))
                                    })), i.on("play", (function() {
                                        if (0 != i.duration() || !D()) {
                                            u(t.iframeContent).click(g);
                                            var e = i.currentTime();
                                            t.playing = !0, A() && v("REPLAY"), !isNaN(e) && 0 != e && e != t.player.duration() && I() || (!L() || !y.is("b", t.prerollPlaying) || t.prerollPlaying) && L() ? x() || v("RESUME") : (w(), l.publish(n.Content.VIDEO_START)), this.isFullscreen() && v("RESIZE")
                                        }
                                    })), i.on("pause", (function() {
                                        t.playing = !1, x() || v("PAUSE", {
                                            playing: !1
                                        })
                                    })), i.on("ended", (function() {
                                        D() && !t.vastAsMainSourceEnded || (t.playing = !1, t.autoPlayTracker && t.autoPlayParams && t.autoPlayTracker.turnOffAutoPlay(!0, !0), L() && !t.firstClickOnAutoPlayVideo && t.autoPlayParams ? i.muted() ? i.muted(!0) : i.muted(!1) : !L() || t.firstClickOnAutoPlayVideo || t.autoPlayParams || t.clickToMute || (i.muted() ? i.muted(!0) : i.muted(!1)), P(), v("VIDEO_END", {
                                            playing: !1
                                        }))
                                    })), t.player.on("timeupdate", (function() {
                                        k() || (t.prerollPlaying && (Math.ceil(t.curpos) < Math.floor(i.currentTime()) && t.player.currentTime(t.curpos), Math.floor(t.curpos) > Math.ceil(i.currentTime()) && i.currentTime(t.curpos), t.curpos = i.currentTime()), !isNaN(i.currentTime()) && i.currentTime() > 0 && i.currentTime() < i.duration() && v("PROGRESS", {
                                            playing: t.playing,
                                            duration: i.duration(),
                                            currentTime: i.currentTime()
                                        }))
                                    })), i.on("useractive", (function(e) {
                                        l.publish(n.General.USER_ACTIVE)
                                    })), i.on("userinactive", (function() {
                                        l.publish(n.General.USER_INACTIVE)
                                    })), i.on("fullscreenchange", e.Util.debounce((function() {
                                        i.isFullscreen() ? v("FULLSCREEN") : v("EXIT_FULLSCREEN")
                                    }), 100)), i.on("prerollAdRequest", (function() {
                                        l.publish(n.Preroll.PREROLL_FETCH_AD_REQUEST)
                                    })), i.on("prerollAdReturned", (function() {
                                        l.publish(n.Preroll.PREROLL_FETCH_AD_RETURNED)
                                    })), i.on("prerollAdCancel", (function() {
                                        l.publish(n.Preroll.PREROLL_FETCH_AD_CANCEL)
                                    })), i.on("prerollAdError", (function() {
                                        l.publish(n.Preroll.PREROLL_FETCH_AD_ERROR)
                                    })), t.player.on("touchstart", E), t.player.on("touchmove", b), t.player.on("touchend", T), t.player.on("click", g), t.player.on("seeked", F), t.player.on("seeking", B), t.player.on("seeked", B), t.player.on("waiting", (function() {
                                        t.buffering = !0, v("BUFFERING")
                                    })), t.player.on("stalled", (function() {
                                        t.buffering = !0, v("BUFFERING")
                                    })), t.player.on("suspend", (function() {
                                        t.buffering = !0, v("BUFFERING")
                                    }))
                                }
                            }(r),
                            function(e, t) {
                                setTimeout((function() {
                                    var e = t.el().querySelector(".vjs-duration-display"),
                                        n = e.childNodes && e.childNodes.length > 1 ? t.el().querySelector(".vjs-duration-display").childNodes[1].textContent : t.el().querySelector(".vjs-duration-display").textContent;
                                    "0:00" == (n = n.trim()) && t.duration() > 0 && t.duration(Math.floor(t.duration()))
                                }), 0)
                            }(0, a), f.call(r, a), _()
                        }

                        function q() {
                            var t = this,
                                n = e.Util.getVideoSelectorName();
                            if (y.is("u", c.document.getElementById(n).attributes.controls) && c.document.getElementById(n).setAttribute("controls", !0), m() && !y.is("u", t.autoPlayParams)) {
                                var i = c.document.getElementById(n);
                                i.setAttribute("playsinline", !0), i.setAttribute("muted", !0)
                            }
                            c.videojs(n, p).ready((function(e) {
                                t.player = this, y.useVideoJSUpdate() && y.adBlocker && t.player.hls && function(e) {
                                    e.player.hls.xhr.beforeRequest = function(e) {
                                        var t = e.uri.replace(y.adBlockerDomain, r.ASSETS_DOMAIN);
                                        return e.uri = "https://".concat(y.adBlockerDomain, "/").concat(y.encryptUrl("proxyTracking/".concat(t))), e
                                    }
                                }(t), y.is("b", this.el().children[0].playsInline) && this.pause(), W.call(t)
                            }))
                        }
                        return {
                            init: function(e) {
                                (o = e.data).preRollRequest = l,
                                    function(e) {
                                        s = e.iframeContent[0], c = s.defaultView || s.parentWindow, e.playerCssUrl && ntvAppendStylesheet("ntvPlayerCss", y.useVideoJSUpdate() ? "//s.ntv.io/css/video-js.min.css" : e.playerCssUrl, s), y.appendScript(y.useVideoJSUpdate() ? "//s.ntv.io/js/video.min.js" : e.videojsUrl, q.bind(e), "ntv-videojs", s)
                                    }(o)
                            }
                        }
                    }
                    return function(e) {
                        var n = a(e);
                        e.subscribe(t.Player.Subscribe.RENDER_VIDEO_PLAYER, n.init.bind(this))
                    }
                }()
            }(e, e.Video.Player || (e.Video.Player = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {})),
    function(e, t) {
        ! function(e, t) {
            ! function(e, t) {
                function n(t) {
                    var n = t,
                        i = n.iframe[0].contentWindow,
                        r = n.iframe[0].contentWindow.document;

                    function a(t) {
                        var n = t.dependencies,
                            i = t.history,
                            a = t.finished;
                        n.forEach((function(t) {
                            i[t.src] || (e.Util.appendScript(t.src, function(e, t) {
                                return function() {
                                    e[t.src] = !0
                                }
                            }(a, t), void 0, r), i[t.src] = !0)
                        }))
                    }

                    function o(e, t) {
                        a(e),
                            function e(t, n) {
                                var i = t.dependencies,
                                    r = t.finished;
                                if (i.length !== Object.keys(r).length) return a(t), void setTimeout((function() {
                                    return e(t, n)
                                }), 0);
                                n()
                            }(e, t)
                    }

                    function s(e) {
                        return i.player = i.jwplayer(e)
                    }

                    function c(t, n) {
                        return function(r) {
                            e.Util.compose(function(e) {
                                return function(t) {
                                    e.forEach((function(e) {
                                        return e(t)
                                    }))
                                }
                            }(n), i.configViantPlayer(t), (function() {
                                return r
                            }))
                        }
                    }
                    return function(t, i, r) {
                        var a = n.iframe[0].contentWindow,
                            l = {
                                dependencies: a.scriptsToLoad,
                                history: {},
                                finished: {}
                            };
                        Array.isArray(a.scriptsToLoad) && o(l, (function() {
                            e.Util.ajax({
                                method: "GET",
                                url: "https://cdn.jwplayer.com/v2/playlists/" + t,
                                success: c(s(i), r),
                                error: function(e) {
                                    throw new Error(e)
                                }
                            })
                        }))
                    }
                }
                t.ViantPlayer = function() {
                    var t = function() {},
                        i = xi.Types,
                        r = i.Player.Publish;

                    function a(a) {
                        var o, s, c, l = a,
                            u = e.Util,
                            d = e.query,
                            p = "https://s.ntv.io/js/viant.js";

                        function f() {
                            return o.prerollPlaying
                        }

                        function h() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            o.prerollPlaying = e
                        }

                        function v() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            o.playing = e
                        }

                        function m() {
                            return o.playing
                        }

                        function g(e) {
                            o.muteState = e || !0
                        }

                        function y() {
                            o.initialClick = !0
                        }

                        function E(e, t) {
                            u.is("b", f()) && f() ? l.publish(r.Preroll[e], t) : l.publish(r.Content[e], t)
                        }

                        function b(e) {
                            this.player = e, e.on("adPlay", (function(t) {
                                h(), v(), g(), 0 == e.getPosition() ? E("VIDEO_START") : E("RESUME")
                            })), e.on("adPause", (function(e) {
                                v(!1), E("PAUSE", {
                                    playing: m()
                                })
                            })), e.on("adClick", (function(e) {
                                y(), E("CLICK"), m() ? o.player.pause() : o.player.play()
                            })), e.on("adTime", (function(e) {
                                m() && E("PROGRESS", {
                                    playing: m(),
                                    duration: e.duration,
                                    currentTime: e.position
                                })
                            })), e.on("adComplete", (function(e) {
                                v(!1), E("VIDEO_END"), h(!1)
                            })), e.on("play", (function(t) {
                                v(), 0 == e.getPosition() ? E("VIDEO_START") : E("RESUME")
                            })), e.on("pause", (function(e) {
                                v(!1), E("PAUSE", {
                                    playing: m()
                                })
                            })), e.on("buffer", (function(e) {
                                E("BUFFERING")
                            })), e.on("idle", (function(e) {
                                E("BUFFERING")
                            })), e.on("time", (function(e) {
                                v(), E("PROGRESS", {
                                    playing: m(),
                                    duration: e.duration,
                                    currentTime: e.position,
                                    mediaid: o.mediaid
                                })
                            })), e.on("complete", (function(e) {
                                E("VIDEO_END", {
                                    playing: !1
                                })
                            })), e.on("displayClick", (function(e) {})), e.on("click", (function(e) {
                                y(), E("CLICK")
                            })), e.on("mute", (function(e) {
                                g(e.mute), o.initialClick && (e.mute ? E("MUTE") : E("UNMUTE"))
                            })), e.on("volume", (function(e) {
                                E("VOLUME_CHANGE"), g(!e.volume)
                            })), e.on("fullscreen", (function(e) {
                                e.fullscreen ? E("FULLSCREEN") : E("EXIT_FULLSCREEN")
                            }))
                        }

                        function T(e) {
                            this.player = e, e.getCurrentTime = function() {
                                return e.getPosition()
                            }, e.unMute = function() {
                                return e.setMute(!1)
                            }, e.unmute = e.unMute, e.mute = function() {
                                return e.setMute(!0)
                            }, e.isMuted = function() {
                                return e.getMute()
                            }, e.toggle = function() {
                                f() || m() ? e.pause() : e.play()
                            }, e.reset = function() {
                                e.seek(0), e.pause()
                            }
                        }

                        function k() {
                            l.publish(i.Player.Publish.General.PLAYER_READY, this.player)
                        }

                        function S() {
                            t(this.playerSettings.playlist, this.player, [T.bind(this), b.bind(this), k.bind(this)])
                        }

                        function w(e, t) {
                            s.querySelector(".video-wrapper").appendChild(s.createElement("video")), e.player = s.querySelector(".video-wrapper video"), u.appendScript(p, S.bind(e), "ntv-videojs", s)
                        }
                        return {
                            init: function(e) {
                                o = e.data, t = n(o),
                                    function(e) {
                                        s = e.iframeContent[0], c = s.defaultView || s.parentWindow, e.playerCssUrl && ntvAppendStylesheet("ntvPlayerCss", e.playerCssUrl, s), d(".video-wrapper", c.document).html(""), w(e)
                                    }(o)
                            }
                        }
                    }
                    return function(e) {
                        var t = a(e);
                        e.subscribe(i.Player.Subscribe.RENDER_VIDEO_PLAYER, t.init.bind(this))
                    }
                }()
            }(e, e.Video.Player || (e.Video.Player = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {}), window),
    function(e) {
        ! function(e, t) {
            ! function(e, t) {
                t.YouTube = function() {
                    var t = xi.Types,
                        n = t.Player.Publish;
                    t.Player.Subscribe;

                    function i(i) {
                        var r, a, o, s, c, l = i,
                            u = e.Util,
                            d = e.query;

                        function p() {
                            l.publish(t.Player.Publish.General.PLAYER_READY, r)
                        }
                        var f = function e(t) {
                            s || c || t.getCurrentTime() == t.getDuration() || l.publish(n.Content.PROGRESS, {
                                playing: !0,
                                duration: t.getDuration(),
                                currentTime: t.getCurrentTime()
                            }), t.clearProgressTimeout || setTimeout(e, 0, t)
                        };

                        function h(e, t) {
                            e.data == YT.PlayerState.ENDED && (c = !0, l.publish(n.Content.VIDEO_END), function(e) {
                                e.clearProgressTimeout = !0, setTimeout((function() {
                                    e.clearProgressTimeout = !1
                                }))
                            }(t))
                        }

                        function v(e) {
                            ! function(e, t) {
                                e.data == YT.PlayerState.PLAYING && (s ? (s = !1, l.publish(n.Content.RESUME), t.mouseover && l.publish(n.Content.CLICK)) : (u.is("u", s) || c) && (c = !1, l.publish(n.Content.VIDEO_START), f(t)))
                            }(e, this),
                            function(e) {
                                e.data, YT.PlayerState.BUFFERING
                            }(e), h(e, this),
                                function(e, t) {
                                    e.data == YT.PlayerState.PAUSED && (s = YT.PlayerState.PAUSED, l.publish(n.Content.PAUSE), t.mouseover && l.publish(n.Content.CLICK))
                                }(e, this)
                        }

                        function m(e) {
                            o.addEventListener("onStateChange", v.bind(r), !1)
                        }

                        function g() {
                            l.subscribe(t.Player.Subscribe.PLAY, r.play)
                        }

                        function y() {
                            r.isPaused = function() {
                                return r.isPlayerPaused
                            }, r.play = function() {
                                o.playVideo(), r.videoPlaying = !0
                            }, r.resume = r.play, r.pause = function() {
                                o.pauseVideo(), r.videoPlaying = !0
                            }, r.reset = function() {
                                o.seekTo(0), o.pauseVideo()
                            }, r.toggle = function(e) {
                                r.togglePlayState(e)
                            }, r.togglePlayState = function(e) {
                                e && isNaN(r.getCurrentTime()) ? r.play() : e ? r.pause() : r.play()
                            }, r.isSeeking = function() {
                                return 2 != state
                            }, r.isFullScreen = function() {
                                return !1
                            }, r.setUserActive = function(e) {
                                e ? r.triggerEvent("ntvUserActive") : r.triggerEvent("ntvUserInactive")
                            }, r.getCurrentTime = function() {
                                return o.getCurrentTime() || NaN
                            }, r.getDuration = function() {
                                return o.getDuration() || NaN
                            }, r.mute = function() {
                                r.clickToMute = !0, o.mute()
                            }, r.unMute = function() {
                                r.clickToMute = !1, o.unMute()
                            }, r.unmute = r.unMute, r.setVolume = function(e) {
                                o.setVolume(100 * e)
                            }, r.getVolume = function() {
                                return o.getVolume ? o.getVolume() / 100 : 100
                            }, r.isMuted = function() {
                                return !r.getVolume()
                            }, r.bindAutoPlayerUserInteraction = function(e) {
                                a.bind("ntvUserInteracted", e)
                            }, r.unbindAutoPlayerUserInteraction = function() {
                                a.unbind("ntvUserInteracted")
                            }
                        }

                        function E() {
                            var t = this;
                            u.is("u", o) && (t.element = d(a).find("#" + e.Util.getVideoSelectorName())[0], o = new YT.Player(t.element, {
                                height: "390",
                                width: "640",
                                events: {
                                    onReady: function(e) {
                                        y(), m(), g(), p(),
                                            function(e) {
                                                d(e.iframe).on("mouseenter mouseover", (function() {
                                                    l.publish(n.General.USER_ACTIVE), e.mouseover = !0
                                                })), d(e.iframe).on("mouseout mouseleave", (function() {
                                                    l.publish(n.General.USER_INACTIVE, "fast"), e.mouseover = !1
                                                }))
                                            }(t),
                                            function(e) {
                                                e.element.style.visibility = "visible"
                                            }(t)
                                    }
                                }
                            }), e.Util.isIE() && t.setupSkin())
                        }

                        function b() {
                            "undefined" != typeof YT ? YT.ready(E.bind(this)) : setTimeout(b.bind(this), 100)
                        }

                        function T(e) {
                            a = e.iframeContent[0], a.defaultView || a.parentWindow, e.playerCssUrl && ntvAppendStylesheet("ntvPlayerCss", e.playerCssUrl, a), u.appendScript("https://www.youtube.com/player_api", b.bind(e), "ntv-yt-api")
                        }
                        return {
                            init: function(e) {
                                T(r = e.data)
                            }
                        }
                    }
                    return function(e) {
                        var n = i(e);
                        e.subscribe(t.Player.Subscribe.RENDER_VIDEO_PLAYER, n.init.bind(this))
                    }
                }()
            }(e, e.Video.Player || (e.Video.Player = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {})),
    function(e) {
        ! function(e, t) {
            ! function(e, t) {
                t.AOLVideoSkin = function() {
                    var t = xi.Types;

                    function n(n) {
                        var i, r, a, o, s, c, l, u = 0,
                            d = 0,
                            p = n,
                            f = e.query,
                            h = e.Util,
                            v = f(h.getTopWindow().document),
                            m = "height",
                            g = "width";

                        function y(e, t, n) {
                            return e.attr(m, n).attr(g, t).css(m, n).css(g, t).css("max-height", n).css("max-width", t)
                        }

                        function E(e) {
                            var t, n = c.find(".video-wrapper"),
                                p = n.width();
                            if (p > 0) {
                                var f = i.find(".video-wrapper" + r.adID).andSelf().filter(".video-wrapper" + r.adID).width();
                                r.isImageLoaded || i.find("div[class*='video-wrapper']").css("background", "#000"), f > 0 && (p = f), t && (r.isFullScreen = t), ("function" == typeof r.isFullScreen ? r.isFullScreen() : r.isFullScreen) && (p = o.innerWidth);
                                var v = Math.ceil(d * p / u);
                                if (isNaN(v)) return;
                                if (y(a, "100%", v).css("margin", 0), y(n, p, v = a.height()), y(c.find("video"), p, v), r.overrideInfoIcon) {
                                    var g = p > 480 ? 100 : 50;
                                    c.find("#aut-info-btn").attr("src", r.renderingParams.advertiserLogoUrl + "?mode=max&width=" + g + "&height=30")
                                }
                                if (r.isImageLoaded || i.find("div[class*='video-wrapper']").css(m, v + "px"), l && l.length && 1 == e && "hidden" != l.css("visibility")) {
                                    var E = l.css(DISPLAY_TXT),
                                        b = s.createElement("img"),
                                        T = h.applyImageResizer(r.renderingParams.previewImage, r.renderingParams.resizeMode, p, v, r.applySmartCropping);
                                    T = h.applyProtocolToUrl(T), b.onload = _imageLoadHandler, b.onerror = _imageLoadHandler, b.src = T, l.css("background-image", h.applyProtocolToUrl(T)).css("background-repeat", "no-repeat").css("background-size", "cover").css(DISPLAY_TXT, E), l[0].style.backgroundImage = "url('" + T + "')", l[0].style.backgroundRepeat = "no-repeat", l[0].style.backgroundSize = "cover", l[0].style.zIndex = 1, l[0].style.display = E
                                }
                            }
                        }
                        return {
                            init: function(n) {
                                ! function(t) {
                                    (r = t.data).isImageLoaded = !1, i = v.find("." + r.renderingParams.outerCssClass), i.find("." + r.renderingParams.linkCssClass), a = r.iframe ? r.iframe : r.renderingParams.Skin.useIframeId ? v.find("iframe[id='" + r.renderingParams.iframeId + "']") : v.find("iframe[id='" + e.Util.getVideoSelectorName() + "Iframe" + r.adID + "']"), s = a.contents()[0], o = s.defaultView || s.parentWindow, c = a.contents().find("body")
                                }(n), a.css("position", "relative"), u = a.attr(g), d = a.attr(m), 0 == u && 0 == d && (u = 16, d = 9), a.attr(g, "100%"), l = c.find("div[class*='video-preview-img']"), f(window).bind("resize", E), f(o).bind("resize", E), E(), p.publish(t.Skin.AOLVideo.READY, ["ready"])
                            }
                        }
                    }
                    return function(e) {
                        var i = n(e);
                        e.subscribe(t.Modules.EXECUTE, i.init.bind(this)), e.publish(t.Skin.AOLVideo.INITIALIZED, ["initialized"])
                    }
                }()
            }(e, e.Video.Render || (e.Video.Render = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {})),
    function(e) {
        ! function(e, t) {
            ! function(e, t) {
                t.IFU = function() {
                    var t = xi.Types;

                    function n(n) {
                        var i, r, a, o, s, c, l, u = n,
                            d = e.Util,
                            p = e.query,
                            f = {
                                CLICK_TO_EXPAND: 4,
                                PRE_EXPANDED: 8
                            },
                            h = p(d.getTopWindow().document),
                            v = "ntvExpanded";

                        function m() {
                            l.css("visibility", "visible")
                        }

                        function g() {
                            i.hasClass(v) ? (i.removeClass(v), u.publish(t.IFU.COLLAPSED, [])) : (i.addClass(v), setTimeout((function() {
                                i.hasClass(v) ? u.publish(t.IFU.EXPANDED, []) : u.publish(t.IFU.COLLAPSED, [])
                            }), 1e3), u.publish(t.IFU.EXPANDED, [])), u.publish(t.IFU.CLICK)
                        }

                        function y() {
                            i.addClass(v), u.publish(t.IFU.EXPANDED, [])
                        }

                        function E() {
                            i.removeClass(v), u.publish(t.IFU.COLLAPSED, [])
                        }
                        return {
                            init: function(n) {
                                switch (r = n.data, i = h.find("." + r.renderingParams.outerCssClass), a = i.find("." + r.renderingParams.linkCssClass), o = r.iframe ? r.iframe : r.renderingParams.IFU.useIframeId ? h.find("iframe[id='" + r.renderingParams.iframeId + "']") : h.find("iframe[id='" + e.Util.getVideoSelectorName() + "Iframe" + r.adID + "']"), s = o.contents()[0], s.defaultView || s.parentWindow, c = s.body, l = i.find(".ntv-video-wrapper" + r.adID), r.renderingParams.videoExecution) {
                                    case f.PRE_EXPANDED:
                                        m(), a.map((function() {
                                            var e = p(this);
                                            e.attr("target", "_blank"), e.click((function() {
                                                return u.publish(t.IFU.ANCHOR_CLICK, e), !1
                                            }))
                                        })), r.clickedBeforeRendering && u.publish(t.IFU.TOGGLE_VIDEO, []), p(c).click((function(e) {
                                            u.publish(t.IFU.CLICK, e.target)
                                        }));
                                        break;
                                    case f.CLICK_TO_EXPAND:
                                        ! function() {
                                            i.addClass("ntvExpandable").find(".ntv-video-frame").css("transition-duration", r.renderingParams.expandSpeed).css("-webkit-transition-duration", "width " + r.expandSpeed);
                                            var e = l.parent();
                                            "ntv-video-container" == e.attr("class") && e.css("height", "inherit").css("padding-bottom", "inherit"), m(), a.map((function() {
                                                var e = p(this);
                                                d.isNotValidHeadlineLink(e) && e.removeAttr("onclick").click((function() {
                                                    return g(), !1
                                                }))
                                            })), r.clickedBeforeRendering && g()
                                        }()
                                }
                                r.renderingParams.IFU.showHiddenWrappers && (m(), u.publish(t.IFU.EXPANDED, [])), u.subscribe(t.IFU.EXPAND, y), u.subscribe(t.IFU.COLLAPSE, E), u.publish(t.IFU.READY, r)
                            }
                        }
                    }
                    return function(e) {
                        var i = n(e);
                        e.subscribe(t.Modules.EXECUTE, i.init.bind(this)), e.publish(t.IFU.INITIALIZED, ["initialized"])
                    }
                }()
            }(e, e.Video.Render || (e.Video.Render = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {})),
    function(e) {
        ! function(e, t) {
            ! function(e, t) {
                t.Mobile = function() {
                    var t = xi.Types;

                    function n(n) {
                        var i, r, a, o, s = 0,
                            c = "",
                            l = n,
                            u = e.query,
                            d = e.Util,
                            p = d.getTopWindow().document;

                        function f(e) {
                            90 == window.orientation || -90 == window.orientation ? p.body.scrollTop = s : e.preventDefault()
                        }

                        function h(e) {
                            u(r.contentWindow.document.body)[e]("touchmove", f)
                        }

                        function v(n) {
                            h("unbind"), u(r).css("display", "none"), u("body").css("overflow", "inherit"), u("head").find("meta[name=viewport]").length || u("head").find("meta[name=viewport]").attr("content", c), p.querySelector("#" + e.Util.getVideoSelectorName() + "Iframe" + i.adID).scrollIntoView(!0), p.body.scrollTop -= window.screen.availHeight / 2, l.publish(t.Skin.Mobile.MOBILE_SHARE_CLOSED)
                        }

                        function m() {
                            ! function() {
                                if (u("head").find("meta[name=viewport]").length) return;
                                var e = u("head").find("meta[name=viewport]");
                                0 == e.size() ? u("head").append(u('<meta name="viewport" id="ntvviewport" content="">')) : c = u(e[0]).attr("content")
                            }(), s = p.body.scrollTop, h("bind"), u("head").find("meta[name=viewport]").length || u("head").find("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"), u("body").css("overflow", "hidden"), u(r).css("display", "block"), l.publish(t.Skin.Mobile.MOBILE_SHARE_OPENED)
                        }
                        return {
                            init: function(n) {
                                n.data.mobileShareParams && (! function(e) {
                                    i = e.data, i.iframe, i.iframeWindow, i.iframeContent, r = d.getTopWindow().document.querySelector("#ntvShareIframe" + i.adID) || i.iframeContent.find("#ntvShareIframe" + i.adID)[0]
                                }(n), d.getTopWindow().document.body.appendChild(r), a = d.writeIframe(u(r), "", i.mobileShareParams.headHtml, i.mobileShareParams.bodyHtml), u(a).find("a#ntv_cancel").click(v), u(a).find("#ntv-share-background").click(v), (o = u(a).find("body")).find("#ntv_video, .ntv_video-title, .fa-play").click((function() {
                                    v()
                                })), l.subscribe(t.Skin.Mobile.CLOSE_MOBILE_SHARE, v), l.subscribe(t.Skin.Mobile.OPEN_MOBILE_SHARE, m), l.publish(t.Skin.Mobile.READY), e.Events.PubSub.publish("ntvMobileShareReady", [i.placementID + "_" + i.adID, o]), u(i.iframeContent).trigger("ntvMobileShareReady", [i.placementID + "_" + i.adID, o]))
                            }
                        }
                    }
                    return function(e) {
                        var i = n(e);
                        e.subscribe(t.Modules.EXECUTE, i.init.bind(this)), e.publish(t.Skin.Mobile.INITIALIZED, ["initialized"])
                    }
                }()
            }(e, e.Video.Render || (e.Video.Render = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {})),
    function(e) {
        ! function(e, t) {
            ! function(e, t) {
                t.Skin = function() {
                    var t = xi.Types;

                    function n(n) {
                        var i, r, a, o, s, c, l, u, d, p, f = 0,
                            h = 0,
                            v = n,
                            m = {
                                CLICK_TO_EXPAND: 4,
                                PRE_EXPANDED: 8
                            },
                            g = e.query,
                            y = e.Util,
                            E = g(y.getTopWindow().document),
                            b = "display",
                            T = "none",
                            k = "inline-block",
                            S = "height",
                            w = "width";

                        function P(e, n, i) {
                            y.isIE() ? (l.css("opacity", n).css(b, 1 == n ? k : T), !e && n ? v.publish(t.Skin.INFO_BAR_SHOWN, l.css(b) == k) : v.publish(t.Skin.INFO_BAR_HIDDEN, l.css(b) == T)) : l.animate({
                                opacity: n
                            }, i, (function() {
                                l.css(b, 1 == n ? k : T), !e && n ? v.publish(t.Skin.INFO_BAR_SHOWN, l.css(b) == k) : v.publish(t.Skin.INFO_BAR_HIDDEN, l.css(b) == T)
                            }))
                        }

                        function I(e) {
                            e ? v.publish(t.Skin.USER_ACTIVE) : v.publish(t.Skin.USER_INACTIVE)
                        }

                        function A() {
                            P(!1, 1, 0)
                        }

                        function C(e) {
                            P(!0, 0, y.is("s", e.data) && "fast" == e.data ? 0 : 1100)
                        }

                        function R() {
                            (l = g(".video-wrapper > .info-bar", s)).length && !r.infoBarHandlerSet ? (l.css("z-index", 1), l.click((function(e) {
                                e.target.classList.contains("btn-bkg") && v.publish(t.Skin.INFO_BAR_CLICK, !0)
                            })).on("mousover mouseenter", (function() {
                                v.publish(t.Skin.USER_ACTIVE, !0)
                            })), r.infoBarHandlerSet = !0) : setTimeout(R, 50)
                        }

                        function _() {
                            d.css(b, T), v.publish(t.Skin.CONTROLBAR_HIDDEN, d.css(b) == T)
                        }

                        function D() {
                            d.css(b, "flex"), v.publish(t.Skin.CONTROLBAR_SHOWN, "flex" == d.css(b))
                        }

                        function L() {
                            u.css(b, T), v.publish(t.Skin.PREVIEW_IMAGE_HIDDEN, u.css(b) == T)
                        }

                        function O() {
                            F(), u.css(b, T), v.publish(t.Skin.ALL_OVERLAYS_HIDDEN, u.css(b) == T && l.css(b) == T)
                        }

                        function x(e) {
                            switch (e.data) {
                                case "hide":
                                    g(s).find('button[class~="learn-more-control-hover"]').addClass("force-hide");
                                    break;
                                case "show":
                                    g(s).find('button[class~="learn-more-control-hover"]').removeClass("force-hide");
                                    break;
                                default:
                                    g(s).find('button[class~="learn-more-control-hover"]').toggleClass("force-hide")
                            }
                        }

                        function N(e) {
                            O(), v.publish(t.Skin.PLAY, e)
                        }

                        function V() {
                            O(), v.publish(t.Skin.RESUME, !0), r.iframeMouseEventsBound || r.iframe.mouseenter((function() {
                                I(!0)
                            })).mouseleave((function() {
                                I(!1)
                            })).mousemove((function(e) {
                                e.target.tagName || e.relatedTarget ? I(!0) : I(!1)
                            })), r.iframeMouseEventsBound = !0, v.publish(t.Skin.VIDEO_RESUMED, r.iframeMouseEventsBound)
                        }

                        function U(e, t, n) {
                            return e.attr(S, n).attr(w, t).css(S, n).css(w, t).css("max-height", n).css("max-width", t)
                        }

                        function M(e) {
                            p.css(b, e)
                        }

                        function F() {
                            p.css(b) != T && (M(T), v.publish(t.Skin.OVERLAY_HIDDEN, !0))
                        }

                        function B() {
                            p.css(b) != k && (M(k), v.publish(t.Skin.OVERLAY_SHOWN, !0))
                        }

                        function j() {
                            g("div.share-overlay", s).css("z-index", "999").css(b, "inline"), u.css("visibility", "visible").css(b, "block").find("a").css(b, T), g("div.share-overlay > div.center-table > div > table > tbody > tr:nth-child(4) td", c[0]).css(b, "block"), g("div.share-overlay > div.center-table > div > table > tbody > tr:nth-child(4) td div.video-rewind", c[0]).css(b, "block"), r.isVideoEndImageSetup = !0, c.find("#" + e.Util.getVideoSelectorName() + " > div.vjs-control-bar").css("visibility", "visible").css(b, "flex").css("opacity", "1"), v.publish(t.Skin.PREVIEW_IMAGE_VIDEO_END_SHOWN, !0)
                        }

                        function H() {
                            c.find("#" + e.Util.getVideoSelectorName() + " > div.vjs-control-bar").removeAttr("style")
                        }

                        function W(e) {
                            return e && (r.isFullScreen = e), "function" == typeof r.isFullScreen ? r.isFullScreen() : r.isFullScreen
                        }

                        function q(e) {
                            var n = W(e.data) ? T : k;
                            c.find("div.share-btn-bottom").map((function() {
                                g(this).hasClass("top-share-btn") || g(this).css(b, n)
                            })), c.find(".control-spliter").map((function() {
                                "right" == g(this).css("float") && g(this).css(b, n)
                            })), setTimeout(ee, 200), v.publish(t.Skin.FULLSCREEN_CHANGED, {
                                isFullscreen: W(e.data),
                                overlayDisplay: n
                            })
                        }

                        function z() {
                            g(c).find(r.infoButtonSelector).click((function(e) {
                                return B(), e.stopImmediatePropagation(), v.publish(t.Skin.INFO_BUTTON_CLICKED, !0), !1
                            }))
                        }

                        function Y() {
                            a.css("position", "relative"), f = a.attr(w), h = a.attr(S), 0 == f && 0 == h && (f = 16, h = 9), a.attr(w, "100%")
                        }

                        function G() {
                            u = c.find("div[class*='video-preview-img']"), p = c.find(".share-overlay")
                        }

                        function K(e) {
                            var t = e.find(".vjs-captions-button"),
                                n = r.iframe.attr("video-closed-caption");
                            if (t.length > 0) {
                                var i = r.player.textTracks()[0];
                                n && i ? (i.mode = "showing", t.addClass("vjs-ntv-caption-on")) : t.addClass("vjs-ntv-caption-off"), t.css("display", k);
                                var a = t[0].querySelector(".vjs-captions-button > .vjs-menu");
                                if (a && t[0].removeChild(a), ! function(e) {
                                        return e.find("track")[0] && e.find("track")[0].src !== window.location.href
                                    }(e)) return void t.addClass("vjs-ntv-no-caption");
                                t[0].addEventListener("click", (function(e) {
                                    e.stopPropagation(), "showing" === i.mode ? (i.mode = "hidden", t.removeClass("vjs-ntv-caption-on"), t.addClass("vjs-ntv-caption-off")) : (i.mode = "showing", t.removeClass("vjs-ntv-caption-off"), t.addClass("vjs-ntv-caption-on"))
                                }))
                            }
                        }

                        function X() {
                            if (r.renderingParams.Skin.isNativoPlayer) {
                                var e = g(s);
                                if (y.useVideoJSUpdate()) {
                                    var n = s.querySelector(".vjs-control-bar .vjs-fullscreen-control"),
                                        i = s.querySelector(".vjs-control-bar .vjs-volume-panel"),
                                        o = s.querySelector(".vjs-control-bar .vjs-current-time"),
                                        c = s.querySelector(".vjs-control-bar .vjs-time-divider"),
                                        l = s.querySelector(".vjs-control-bar .vjs-duration");
                                    n.before(i), i.before(l), l.before(c), c.before(o)
                                }
                                if (!a[0].classList.contains("ntvCLPVideo")) {
                                    var u = '<button class="learn-more-control-hover" style="display:block;position:absolute !important">'.concat(r.ctaText || "LEARN MORE", "</button>");
                                    e.find(".vjs-play-control").parent().append(u);
                                    var d = e.find(".vjs-play-control").parent().find("button.learn-more-control-hover");
                                    if (e.find('a[class~="ntvLearnMore"]').on("click", "button.learn-more-control-hover", null), r.isAutoPlay && e.find(".vjs-volume-level").css("height", 0), d.click((function(e) {
                                            e.preventDefault(), setTimeout((function() {
                                                v.publish(t.Skin.PAUSE, !0)
                                            }), 0);
                                            var n = g('a[class*="ntvLearnMoreLabel"]', s)[0];
                                            PostRelease.ampMode ? n.click() : window.top.open(n.href, n.target || "_self")
                                        })), r.isAutoPlay) {
                                        var p, f = !1;
                                        y.useVideoJSUpdate() || (p = e.find(".vjs-unmute-icon"), e.find(".vjs-control-bar").before('<div class="vjs-unmute-icon"></div>'), e.width() < 360 && p.css({
                                            top: 10
                                        })), e.on("click", (function() {
                                            f || (f = !0, p = e.find(".vjs-unmute-icon"), !y.useVideoJSUpdate() && p && p.remove(), r.player.setVolume(1))
                                        }))
                                    }
                                    y.useVideoJSUpdate() || (e.find(".vjs-play-control").after(e.find(".vjs-mute-control")), e.find(".vjs-play-control").after('<div class="control-spliter"></div>'), e.find(".vjs-mute-control").after(e.find(".vjs-volume-control")), e.find(".vjs-mute-control").after('<div class="control-spliter"></div>')), e.find(".vjs-fullscreen-control").after('<div class="control-spliter" style="float:right"></div><div class="share-btn-bottom vjs-control"></div><div class="control-spliter" style="float:right"></div>'), e.find(".vjs-big-play-button").remove(), e.find(".top-share-btn").remove(), e.find(".vjs-control-bar").on("click", (function(t) {
                                        if (r.userInteracted = !0, !t.target.classList.contains("vjs-volume-menu-button") && !t.target.classList.contains("vjs-fullscreen-control")) var n = e.find(".share-overlay")[0];
                                        n && n.style.display != T && (n.style.display = T, t.target.classList.contains("learn-more-control-hover") || N(t.target))
                                    }))
                                }(r.renderingParams.Skin.permanentlyShowControls || r.renderingParams.article) && D()
                            }
                        }

                        function Q(e) {
                            e.preventDefault()
                        }

                        function J(e) {
                            if (r.renderingParams.Skin.isNativoPlayer && !r.prerollSkinRendered) {
                                var n = g(s),
                                    i = y.applyImageResizer(r.renderingParams.previewImage, "crop", 100, 62);
                                e.data && !e.data.clickThrough && n.find('button[class~="learn-more-control-hover"]').addClass("force-hide"), r.postPreRollInfoBar = n.find(".info-bar")[0].innerHTML;
                                var a = '<div id="ntv-video-info"><div><p> Up Next </p></div><img src="' + i + '"></div>';
                                r.previewImage = n.find(".vjs-play-control").parent().append(a);
                                var o = e.data.advertiser;
                                g(n.find(".info-bar div.info-txt div.title")[1]).text(""), g(n.find(".info-bar div.info-txt div.advertiser")[1]).text(o).addClass("advertiser-preroll"), g(n.find(".info-bar .info-btn")[1]).css("visibility", "hidden").addClass("preroll-advertiser"), g(n.find(".info-bar")).addClass("adverstier-preroll-infobar"), n.find(".info-bar").parent().append(p), r.mainVideoClickThrough = n.find('a[class~="ntvLearnMore"]').attr("href"), e.data.clickThrough && (n.find("a.vast-blocker").bind("click", Q), n.find('a[class~="ntvLearnMore"]').attr("href", e.data.clickThrough));
                                var c = n.find("video").parent();
                                c.addClass("preroll"), c.parent().addClass("preroll"), n.find(".vast-skip-button").css("z-index", 10).css("cursor", "pointer").css("position", "absolute"), n.find('a[class~="ntvLearnMore"]').click((function() {
                                    e.data.clicktrackers && n.find("video").parent().addCl, v.publish(t.Skin.Preroll.LEARN_MORE_CLICKED)
                                })), v.publish(t.Skin.PREROLL_SKIN_RENDERED, n.find("video").parent().hasClass("preroll")), r.prerollSkinRendered = !0
                            }
                        }

                        function $() {
                            if (r.renderingParams.Skin.isNativoPlayer && r.prerollSkinRendered) {
                                var e = g(s);
                                e.find('a[class~="ntvLearnMore"]').attr("href", r.mainVideoClickThrough), e.find('button[class~="learn-more-control-hover"]').removeClass("force-hide"), e.find("video").parent().removeClass("preroll"), e.find("video").parent().parent().removeClass("preroll"), y.is("u", r.postPreRollInfoBar) || (e.find(".info-bar").removeClass("adverstier-preroll-infobar"), e.find(".info-bar").html(r.postPreRollInfoBar), z()), c.find("#ntv-video-info").remove(), W() && (g(r.iframeBodyElement).find("video")[0].style.cssText = ""), v.publish(t.Skin.PREROLL_SKIN_REMOVED, !e.find("video").parent().hasClass("preroll")), r.prerollSkinRendered = !1
                            }
                        }

                        function Z() {
                            var e = i.find(".ntv-video-wrapper" + r.adID);
                            e.css(S, "auto"), e.css("background", T), r.isImageLoaded = !0
                        }

                        function ee(n) {
                            var l = c.find("#" + e.Util.getVideoSelectorName()),
                                d = l.width();
                            if (d > 0) {
                                var p = i.find(".ntv-video-wrapper" + r.adID).andSelf().filter(".ntv-video-wrapper" + r.adID).width();
                                r.isImageLoaded || i.find("div[class*='video-wrapper']").css("background", "#000"), p > 0 && (d = p), W() && (d = o.innerWidth);
                                var m = Math.ceil(h * d / f);
                                if (isNaN(m)) return;
                                if (U(a, "100%", m).css("margin", 0), U(l, d, m = a.height()), U(c.find("video"), d, m), r.overrideInfoIcon) {
                                    var g = d > 480 ? 100 : 50;
                                    c.find("#aut-info-btn").attr("src", r.renderingParams.advertiserLogoUrl + "?mode=max&width=" + g + "&height=30")
                                }
                                if (r.isImageLoaded || i.find("div[class*='video-wrapper']").css(S, m + "px"), u && u.length && 1 == n && "hidden" != u.css("visibility")) {
                                    var E = u.css(b),
                                        T = s.createElement("img"),
                                        k = y.applyImageResizer(r.renderingParams.previewImage, r.renderingParams.resizeMode, d, m, r.applySmartCropping);
                                    k = y.applyProtocolToUrl(k), T.onload = Z, T.onerror = Z, T.src = k, u.css("background-image", y.applyProtocolToUrl(k)).css("background-repeat", "no-repeat").css("background-size", "cover").css(b, E), u[0].style.backgroundImage = "url('" + k + "')", u[0].style.backgroundRepeat = "no-repeat", u[0].style.backgroundSize = "cover", u[0].style.zIndex = 1, u[0].style.display = E, u[0].addEventListener("click", (function(e) {
                                        v.publish(t.Skin.CLICK)
                                    }), !1)
                                }
                            }
                        }

                        function te() {
                            r.renderingParams.videoExecution ? function() {
                                var n = c.find("#" + e.Util.getVideoSelectorName());
                                if (K(n), r.renderingParams.cssUrl) {
                                    if (y.ntvAppendStylesheet("ntvSharingCss", r.renderingParams.cssUrl, s), c.find(".video-wrapper").append(r.renderingParams.html), G(), r.renderingParams.videoExecution != m.CLICK_TO_EXPAND || r.renderingParams.article || u.css("visibility", "hidden"), c.find('a[class ~="replayIcon"]').removeClass("replayIcon").addClass("playIcon"), Y(), g(window).bind("ready load resize orientationchange", ee), g(o).bind("ready load resize orientationchange", ee), r.renderingParams.infoButtonSelector = ".info-btn a", r.renderingParams.overrideInfoIcon) {
                                        var i = c.find(".info-btn");
                                        i.find("a").remove(), i.removeClass("info-btn"), i.addClass("img-info-btn");
                                        var a = n.width();
                                        a = a > 480 ? 100 : 50, i.prepend('<img id="aut-info-btn" src="' + r.renderingParams.advertiserLogoUrl + "?mode=max&width=" + a + '&height=30">'), r.infoButtonSelector = ".img-info-btn"
                                    }
                                    z(), c.find("div.share-overlay").click((function(e) {
                                        (e.target.style.cssText && -1 == e.target.style.cssText.indexOf("ntvLearnMore") || e.target.classList.contains("btn-bkg")) && V()
                                    })), c.find("div.share-btn-bottom").click((function(e) {
                                        return B(), e.stopImmediatePropagation(), !1
                                    })), c.find("div[class ~='video-preview-img'] a").click((function(e) {
                                        e.preventDefault()
                                    })), c.find("a[class ~='play'], div.share-close-btn a, div.info-close-btn a").click((function() {
                                        return V(), !1
                                    })), u.click((function(e) {
                                        N(e.target), v.publish(t.Skin.PREVIEW_IMAGE_CLICK)
                                    })), c.find("div[class ~='video-preview-img'], div[class ~='video-preview-img'] a").click((function(e) {
                                        N(e.target)
                                    })), g(" div.vjs-volume-menu-button", c[0]).mouseenter((function() {
                                        g("#ntv-video-info", c[0]).hide(150)
                                    })), g("div.vjs-volume-menu-button", c[0]).mouseleave((function() {
                                        g("#ntv-video-info", c[0]).show(150)
                                    })), ee(!0), setTimeout(ee, 1e3)
                                }
                            }() : (Y(), G(), g(window).bind("resize", ee), g(o).bind("resize", ee), ee())
                        }
                        return {
                            init: function(n) {
                                ! function(t) {
                                    (r = t.data).isImageLoaded = !1, i = E.find("." + r.renderingParams.outerCssClass), a = r.iframe ? r.iframe : r.renderingParams.Skin.useIframeId ? E.find("iframe[id='" + r.renderingParams.iframeId + "']") : E.find("iframe[id='" + e.Util.getVideoSelectorName() + "Iframe" + r.adID + "']"), s = a.contents()[0], o = s.defaultView || s.parentWindow, c = a.contents().find("body"), d = g(".vjs-control-bar", s)
                                }(n), R(), te(), c.find("a.btn-bkg").click((function(e) {
                                    N(e.target)
                                })), c.find("div.center-table").click((function(e) {
                                    (e.target.classList.contains("center-table") || e.target.classList.contains("center-cell") || e.target.classList.contains("info-txt") || "td" == e.target.tagName.toLowerCase()) && V()
                                })), v.subscribe(t.Skin.SHOW_INFO_BAR, A), v.subscribe(t.Skin.HIDE_INFO_BAR, C), v.subscribe(t.Skin.SHOW_CONTROL_BAR, D), v.subscribe(t.Skin.HIDE_CONTROL_BAR, _), v.subscribe(t.Skin.SHOW_OVERLAY, B), v.subscribe(t.Skin.HIDE_OVERLAY, F), v.subscribe(t.Skin.HIDE_ALL_OVERLAYS, O), v.subscribe(t.Skin.FULLSCREEN, q), v.subscribe(t.Skin.EXIT_FULLSCREEN, q), v.subscribe(t.Skin.HIDE_PREVIEW_IMAGE, L), v.subscribe(t.Skin.SHOW_VIDEO_END_IMAGE, j), v.subscribe(t.Skin.HIDE_VIDEO_END_IMAGE, H), v.subscribe(t.Skin.RENDER_PREROLL_SKIN, J), v.subscribe(t.Skin.REMOVE_PREROLL_SKIN, $), v.subscribe(t.Skin.TOGGLE_LEARN_MORE, x), v.subscribe(t.Skin.RESIZE, ee), X(), v.publish(t.Skin.READY, ["ready"])
                            }
                        }
                    }
                    return function(e) {
                        var i = n(e);
                        e.subscribe(t.Modules.EXECUTE, i.init.bind(this)), e.publish(t.Skin.INITIALIZED, ["initialized"])
                    }
                }()
            }(e, e.Video.Render || (e.Video.Render = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {})),
    function(e) {
        ! function(e, t) {
            ! function(e, t) {
                t.ViantPlayerSkin = function() {
                    var t = xi.Types;

                    function n(n) {
                        var i, r, a, o, s, c, l, u = 0,
                            d = 0,
                            p = n,
                            f = e.query,
                            h = e.Util,
                            v = f(h.getTopWindow().document),
                            m = "height",
                            g = "width";

                        function y(e, t, n) {
                            return e.attr(m, n).attr(g, t).css(m, n).css(g, t).css("max-height", n).css("max-width", t)
                        }

                        function E(t) {
                            var n, p = c.find("#" + e.Util.getVideoSelectorName()),
                                f = p.width();
                            if (f > 0) {
                                var v = i.find(".ntv-video-wrapper" + r.adID).andSelf().filter(".ntv-video-wrapper" + r.adID).width();
                                r.isImageLoaded || i.find("div[class*='video-wrapper']").css("background", "#000"), v > 0 && (f = v), n && (r.isFullScreen = n), ("function" == typeof r.isFullScreen ? r.isFullScree() : r.isFullScreen) && (f = o.innerWidth);
                                var g = Math.ceil(d * f / u);
                                if (isNaN(g)) return;
                                if (y(a, "100%", g).css("margin", 0), y(p, f, g = a.height()), y(c.find("video"), f, g), r.overrideInfoIcon) {
                                    var E = f > 480 ? 100 : 50;
                                    c.find("#aut-info-btn").attr("src", r.renderingParams.advertiserLogoUrl + "?mode=max&width=" + E + "&height=30")
                                }
                                if (r.isImageLoaded || i.find("div[class*='video-wrapper']").css(m, g + "px"), l && l.length && 1 == t && "hidden" != l.css("visibility")) {
                                    var b = l.css(DISPLAY_TXT),
                                        T = s.createElement("img"),
                                        k = h.applyImageResizer(r.renderingParams.previewImage, r.renderingParams.resizeMode, f, g, r.applySmartCropping);
                                    k = h.applyProtocolToUrl(k), T.onload = _imageLoadHandler, T.onerror = _imageLoadHandler, T.src = k, l.css("background-image", h.applyProtocolToUrl(k)).css("background-repeat", "no-repeat").css("background-size", "cover").css(DISPLAY_TXT, b), l[0].style.backgroundImage = "url('" + k + "')", l[0].style.backgroundRepeat = "no-repeat", l[0].style.backgroundSize = "cover", l[0].style.zIndex = 1, l[0].style.display = b
                                }
                            }
                        }
                        return {
                            init: function(n) {
                                ! function(t) {
                                    (r = t.data).isImageLoaded = !1, i = v.find("." + r.renderingParams.outerCssClass), i.find("." + r.renderingParams.linkCssClass), a = r.iframe ? r.iframe : r.renderingParams.Skin.useIframeId ? v.find("iframe[id='" + r.renderingParams.iframeId + "']") : v.find("iframe[id='" + e.Util.getVideoSelectorName() + "Iframe" + r.adID + "']"), s = a.contents()[0], o = s.defaultView || s.parentWindow, c = a.contents().find("body")
                                }(n), a.css("position", "relative"), u = a.attr(g), d = a.attr(m), 0 == u && 0 == d && (u = 16, d = 9), a.attr(g, "100%"), l = c.find("div[class*='video-preview-img']"), f(window).bind("resize", E), f(o).bind("resize", E), E(), p.publish(t.Skin.JWVideo.READY, ["ready"])
                            }
                        }
                    }
                    return function(e) {
                        var i = n(e);
                        e.subscribe(t.Modules.EXECUTE, i.init.bind(this)), e.publish(t.Skin.JWVideo.INITIALIZED, ["initialized"])
                    }
                }()
            }(e, e.Video.Render || (e.Video.Render = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {})),
    function(e) {
        ! function(e, t) {
            ! function(e, t) {
                t.YouTubeSkin = function() {
                    var t = xi.Types;

                    function n(n) {
                        var i, r, a, o, s, c, l = n,
                            u = e.query,
                            d = e.Util,
                            p = u(d.getTopWindow().document);
                        return {
                            init: function(n) {
                                var d;
                                ! function(t) {
                                    (r = t.data).isImageLoaded = !1, i = p.find("." + r.renderingParams.outerCssClass), i.find("." + r.renderingParams.linkCssClass), a = r.iframe ? r.iframe : r.renderingParams.Skin.useIframeId ? p.find("iframe[id='" + r.renderingParams.iframeId + "']") : p.find("iframe[id='" + e.Util.getVideoSelectorName() + "Iframe" + r.adID + "']"), o = a.contents()[0], o.defaultView || o.parentWindow, s = a.contents().find("body"), u(s[0]).find("div[class*='video-preview-img']"), c = u(o).find("div.share-overlay")
                                }(n), r.renderingParams.autoplay || u(".video-preview-img", o).css("display", "none"), (d = c.find("div.center-table")).addClass("YT"), d.find("div.center-cell").addClass("YT"), d.find("div > table > tbody > tr:nth-child(3)").css("display", "table-row"), u(s[0]).find(".video-wrapper .share-overlay + .info-bar").click((function(e) {
                                    e.target.classList.contains("btn-bkg") && l.publish(t.Skin.PAUSE)
                                }))
                            }
                        }
                    }
                    return function(e) {
                        var i = n(e);
                        e.subscribe(t.Modules.EXECUTE, i.init.bind(this)), e.publish(t.Skin.YouTube.INITIALIZED, ["initialized"])
                    }
                }()
            }(e, e.Video.Render || (e.Video.Render = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {}));
    i(8), i(9);
    ! function(e) {
        ! function(e, t) {
            ! function(e, t) {
                function n(t, n) {
                    var i, r = !1,
                        a = !1,
                        o = !1,
                        s = ((0, e.query)(y.getTopWindow()), y.is, t),
                        c = (n.adID, xi.PubSub);
                    xi.Types.Tracking;

                    function l(e, t) {
                        var n = e + ";jwmediaid = " + t,
                            i = new XMLHttpRequest;
                        i.onreadystatechange = function() {
                            4 == this.readyState && this.status
                        }, i.open("GET", n, !0), i.send()
                    }

                    function u(e, t) {
                        var n, s = function(e) {
                            var t;
                            return {
                                eventType: (t = e.type.split(":"))[2],
                                contentType: t[3],
                                NTVEvent: t[4]
                            }
                        }(e);
                        if (n = s.contentType, !i && n && (i = n), function(e) {
                                return i == e
                            }(s.contentType)) switch (s.NTVEvent) {
                            case "currentTime":
                                Math.floor(e.data.currentTime) >= 3 && !1 === r && (l("https://x.vindicosuite.com/dserve/t=d;l=557921;c=1065424;b=4819688;ad=COGGIhC66g0YoDMgASgEMMeUATiV1wFAzYIUSLbcGFDQg0FY6JWmAmDIgBFosq4ncAJ4AYgBAJABAZgBAaIBEzE4NTEzMDMzNzkxMDY0Nzk5NTOyAQVWSURFT7gBAcABAMgBANABANgBAOgB-P_s-5As;a=278600;ts=TIMESTAMP", e.data.mediaid), r = !0), Math.floor(e.data.currentTime) >= 15 && !1 === a && (l("https://x.vindicosuite.com/dserve/t=d;l=557922;c=1065425;b=4819687;ad=COKGIhC66g0YoDMgASgEMMeUATiV1wFAzoIUSMLcGFDRg0FY55WmAmDJgBFosq4ncAJ4AYgBAJABAZgBAaIBEzYyNzk5MzQ1OTcxOTE3NTkwNjGyAQVWSURFT7gBAcABAMgBANABANgBAOgBlZfs-5As;a=278601;ts=TIMESTAMP", e.data.mediaid), a = !0), Math.floor(e.data.currentTime) >= 30 && !1 === o && (l("https://x.vindicosuite.com/dserve/t=d;l=557923;c=1065426;b=4819689;ad=COOGIhC66g0YoDMgASgEMMeUATiV1wFAz4IUSM7cGFDSg0FY6ZWmAmDKgBFosq4ncAJ4AYgBAJABAZgBAaIBEzQwNDYzOTA5OTkxNzY3NjAyODayAQVWSURFT7gBAcABAMgBANABANgBAOgBi-ns-5As;a=278602;ts=TIMESTAMP", e.data.mediaid), o = !0)
                        }
                    }
                    return {
                        registerViantEvents: function() {
                            return c.subscribe(s.toString() + ":" + xi.Types.Tracking.Progress.Content.CURRENT_TIME, u), this
                        }
                    }
                }
                t.Viant = function(e, t) {
                    n(e, t).registerViantEvents()
                }
            }(e, e.Video.Tracker || (e.Video.Tracker = {}))
        }(e, e.Video || (e.Video = {}))
    }(ntv || (ntv = {}));
    var $i = window;
    $i.ntv = $i.ntv || {};
    var Zi = function() {
            var e = y.getTopWindow();
            return e.ntvToutAds = e.ntvToutAds || {}, e.ntv ? ntv.Events = e.ntv.Events : (e.ntv = ntv, e.PostRelease = ntv.PostRelease), e.ntv.PostRelease || (e.ntv.PostRelease = ntv.PostRelease), e.prdom || (e.prdom = $i.prdom), e
        },
        er = function() {
            var e = Gn.setting.autoStart;
            return $i.ntvConfig && $i.ntvConfig.retry && $i.ntvConfig.ptd && (e = !0), e
        };
    ! function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
        try {
            if (ntv.PostRelease) return;
            ne.performance.responsivenessTracking(), e.ntv.Tracking = $n, e.PostRelease = Gn, e.ntv.PostRelease = Gn, e.ntv.DFP = Ai, e.ntv.CONSTS = r, e.ntv.Util = y, e.ntv.Events = xi, e.ntv.metric = ne, e.ntv.Gallery = ji, e.ntv.Media = e.ntv.Media || {}, e.ntv.CompanionAsset = Bi, e.ntv.bindClickIframe = Fi, e.ntv.Media.ContentWidget = Mi, e.ntv.Media.Gallery = ji, e.ntv.Stories = hi;
            var t = Zi();
            Si(t), y.ntvInitOnFocusTracking();
            var n = er();
            n && Gn.Start(), ne.performance.set("init"), Yi(), y.rewriteAdBlockedAssets(), mi()
        } catch (e) {
            y.postError(e)
        }
    }()
}, function(e, t, n) {
    n(12), e.exports = n(10)
}, function(e, t, n) {
    var i, r, a;
    r = "undefined" != typeof window ? window : this, a = function(n, r) {
        var a = [],
            o = a.slice,
            s = a.concat,
            c = a.push,
            l = a.indexOf,
            u = {},
            d = u.toString,
            p = u.hasOwnProperty,
            f = {},
            h = n.document,
            v = "2.1.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-event-alias,-wrap",
            m = function(e, t) {
                return new m.fn.init(e, t)
            },
            g = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            y = /^-ms-/,
            E = /-([\da-z])/gi,
            b = function(e, t) {
                return t.toUpperCase()
            };

        function T(e) {
            var t = e.length,
                n = m.type(e);
            return "function" !== n && !m.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        m.fn = m.prototype = {
                nquery: v,
                constructor: m,
                selector: "",
                length: 0,
                get: function(e) {
                    return null != e ? e < 0 ? this[e + this.length] : this[e] : o.call(this)
                },
                pushStack: function(e) {
                    var t = m.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return m.each(this, e, t)
                },
                map: function(e) {
                    return this.pushStack(m.map(this, (function(t, n) {
                        return e.call(t, n, t)
                    })))
                },
                slice: function() {
                    return this.pushStack(o.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: c,
                sort: a.sort,
                splice: a.splice
            }, m.extend = m.fn.extend = function() {
                var e, t, n, i, r, a, o = arguments[0] || {},
                    s = 1,
                    c = arguments.length,
                    l = !1;
                for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" == typeof o || m.isFunction(o) || (o = {}), s === c && (o = this, s--); s < c; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = o[t], o !== (i = e[t]) && (l && i && (m.isPlainObject(i) || (r = m.isArray(i))) ? (r ? (r = !1, a = n && m.isArray(n) ? n : []) : a = n && m.isPlainObject(n) ? n : {}, o[t] = m.extend(l, a, i)) : void 0 !== i && (o[t] = i));
                return o
            },
            function(e, t) {
                var n, i, r, a, o, s, c, l, u, d, p = "",
                    f = {
                        Webkit: "webkit",
                        Moz: "",
                        O: "o"
                    },
                    v = h.createElement("div"),
                    m = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
                    g = {};

                function y(e) {
                    return n ? n + e : e.toLowerCase()
                }
                void 0 === v.style.transform && Object.keys(f).forEach((function(e) {
                    void 0 !== v.style[e + "TransitionProperty"] && (p = "-" + e.toLowerCase() + "-", n = f[e])
                })), i = p + "transform", g[r = p + "transition-property"] = g[a = p + "transition-duration"] = g[s = p + "transition-delay"] = g[o = p + "transition-timing-function"] = g[c = p + "animation-name"] = g[l = p + "animation-duration"] = g[d = p + "animation-delay"] = g[u = p + "animation-timing-function"] = "", e.fx = {
                    off: void 0 === n && void 0 === v.style.transitionProperty,
                    speeds: {
                        _default: 400,
                        fast: 200,
                        slow: 600
                    },
                    cssPrefix: p,
                    transitionEnd: y("TransitionEnd"),
                    animationEnd: y("AnimationEnd")
                }, e.fn.animate = function(t, n, i, r, a) {
                    return "function" == typeof n && (r = n, i = void 0, n = void 0), "function" == typeof i && (r = i, i = void 0), "object" == typeof n && (i = n.easing, r = n.complete, a = n.delay, n = n.duration), n && (n = ("number" == typeof n ? n : e.speeds[n] || e.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(t, n, i, r, a)
                }, e.fn.anim = function(t, n, p, f, h) {
                    var v, y, E, b = {},
                        T = "",
                        k = this,
                        S = e.transitionEnd,
                        w = !1;
                    if (void 0 === n && (n = e.speeds._default / 1e3), void 0 === h && (h = 0), e.off && (n = 0), "string" == typeof t) b[c] = t, b[l] = n + "s", b[d] = h + "s", b[u] = p || "linear", S = e.animationEnd;
                    else {
                        for (v in y = [], t) m.test(v) ? T += v + "(" + t[v] + ") " : (b[v] = t[v], y.push(v.replace(/([A-Z])/g, "-$1").toLowerCase()));
                        T && (b[i] = T, y.push(i)), n > 0 && "object" == typeof t && (b[r] = y.join(", "), b[a] = n + "s", b[s] = h + "s", b[o] = p || "linear")
                    }
                    return E = function(t) {
                        if (void 0 !== t) {
                            if (t.target !== t.currentTarget) return;
                            e(t.target).unbind(S, E)
                        } else e(this).unbind(S, E);
                        w = !0, e(this).css(g), f && f.call(this)
                    }, n > 0 && (this.bind(S, E), setTimeout((function() {
                        w || E.call(k)
                    }), 1e3 * (n + h) + 25)), this.size() && this.get(0).clientLeft, this.css(b), n <= 0 && setTimeout((function() {
                        k.each((function() {
                            E.call(this)
                        }))
                    }), 0), this
                }, v = null
            }(m), m.extend({
                expando: "nQuery" + (v + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                isFunction: function(e) {
                    return "function" === m.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    return !m.isArray(e) && e - parseFloat(e) >= 0
                },
                isPlainObject: function(e) {
                    return !("object" !== m.type(e) || e.nodeType || m.isWindow(e) || e.constructor && !p.call(e.constructor.prototype, "isPrototypeOf"))
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[d.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    var t;
                    (e = m.trim(e)) && ((t = h.createElement("script")).text = e, h.head.appendChild(t).parentNode.removeChild(t))
                },
                camelCase: function(e) {
                    return e.replace(y, "ms-").replace(E, b)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, n) {
                    var i = 0,
                        r = e.length,
                        a = T(e);
                    if (n) {
                        if (a)
                            for (; i < r && !1 !== t.apply(e[i], n); i++);
                        else
                            for (i in e)
                                if (!1 === t.apply(e[i], n)) break
                    } else if (a)
                        for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
                    else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(g, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (T(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : l.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                    return e.length = r, e
                },
                grep: function(e, t, n) {
                    for (var i = [], r = 0, a = e.length, o = !n; r < a; r++) !t(e[r], r) !== o && i.push(e[r]);
                    return i
                },
                map: function(e, t, n) {
                    var i, r = 0,
                        a = e.length,
                        o = [];
                    if (T(e))
                        for (; r < a; r++) null != (i = t(e[r], r, n)) && o.push(i);
                    else
                        for (r in e) null != (i = t(e[r], r, n)) && o.push(i);
                    return s.apply([], o)
                },
                guid: 1,
                now: Date.now,
                support: f
            }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function(e, t) {
                u["[object " + t + "]"] = t.toLowerCase()
            }));
        var k = function(e) {
            var t, n, i, r, a, o, s, c, l, u, d, p, f, h, v, m, g, y, E, b = "sizzle" + -new Date,
                T = e.document,
                k = 0,
                S = 0,
                w = ae(),
                P = ae(),
                I = ae(),
                A = function(e, t) {
                    return e === t && (d = !0), 0
                },
                C = "undefined",
                R = 1 << 31,
                _ = {}.hasOwnProperty,
                D = [],
                L = D.pop,
                O = D.push,
                x = D.push,
                N = D.slice,
                V = D.indexOf || function(e) {
                    for (var t = 0, n = this.length; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                U = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                M = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                B = F.replace("w", "w#"),
                j = "\\[" + M + "*(" + F + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + M + "*\\]",
                H = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
                W = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                q = new RegExp("^" + M + "*," + M + "*"),
                z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                Y = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
                G = new RegExp(H),
                K = new RegExp("^" + B + "$"),
                X = {
                    ID: new RegExp("^#(" + F + ")"),
                    CLASS: new RegExp("^\\.(" + F + ")"),
                    TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + j),
                    PSEUDO: new RegExp("^" + H),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + U + ")$", "i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                },
                Q = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                $ = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = /'|\\/g,
                ne = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                ie = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                x.apply(D = N.call(T.childNodes), T.childNodes), D[T.childNodes.length].nodeType
            } catch (e) {
                x = {
                    apply: D.length ? function(e, t) {
                        O.apply(e, N.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }

            function re(e, t, i, r) {
                var a, s, l, u, d, h, g, y, k, S;
                if ((t ? t.ownerDocument || t : T) !== f && p(t), i = i || [], !e || "string" != typeof e) return i;
                if (1 !== (u = (t = t || f).nodeType) && 9 !== u) return [];
                if (v && !r) {
                    if (a = Z.exec(e))
                        if (l = a[1]) {
                            if (9 === u) {
                                if (!(s = t.getElementById(l)) || !s.parentNode) return i;
                                if (s.id === l) return i.push(s), i
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(l)) && E(t, s) && s.id === l) return i.push(s), i
                        } else {
                            if (a[2]) return x.apply(i, t.getElementsByTagName(e)), i;
                            if ((l = a[3]) && n.getElementsByClassName && t.getElementsByClassName) return x.apply(i, t.getElementsByClassName(l)), i
                        }
                    if (n.qsa && (!m || !m.test(e))) {
                        if (y = g = b, k = t, S = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                            for (h = o(e), (g = t.getAttribute("id")) ? y = g.replace(te, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", d = h.length; d--;) h[d] = y + ve(h[d]);
                            k = ee.test(e) && fe(t.parentNode) || t, S = h.join(",")
                        }
                        if (S) try {
                            return x.apply(i, k.querySelectorAll(S)), i
                        } catch (e) {} finally {
                            g || t.removeAttribute("id")
                        }
                    }
                }
                return c(e.replace(W, "$1"), t, i, r)
            }

            function ae() {
                var e = [];
                return function t(n, r) {
                    return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                }
            }

            function oe(e) {
                return e[b] = !0, e
            }

            function se(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ce(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) i.attrHandle[n[r]] = t
            }

            function le(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || R) - (~e.sourceIndex || R);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ue(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function de(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function pe(e) {
                return oe((function(t) {
                    return t = +t, oe((function(n, i) {
                        for (var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                    }))
                }))
            }

            function fe(e) {
                return e && typeof e.getElementsByTagName !== C && e
            }
            for (t in n = re.support = {}, a = re.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, p = re.setDocument = function(e) {
                    var t, r = e ? e.ownerDocument || e : T,
                        o = r.defaultView;
                    return r !== f && 9 === r.nodeType && r.documentElement ? (f = r, h = r.documentElement, v = !a(r), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", (function() {
                        p()
                    }), !1) : o.attachEvent && o.attachEvent("onunload", (function() {
                        p()
                    }))), n.attributes = se((function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    })), n.getElementsByTagName = se((function(e) {
                        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                    })), n.getElementsByClassName = $.test(r.getElementsByClassName) && se((function(e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    })), n.getById = se((function(e) {
                        return h.appendChild(e).id = b, !r.getElementsByName || !r.getElementsByName(b).length
                    })), n.getById ? (i.find.ID = function(e, t) {
                        if (typeof t.getElementById !== C && v) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, i.filter.ID = function(e) {
                        var t = e.replace(ne, ie);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete i.find.ID, i.filter.ID = function(e) {
                        var t = e.replace(ne, ie);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== C && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                        if (typeof t.getElementsByTagName !== C) return t.getElementsByTagName(e)
                    } : function(e, t) {
                        var n, i = [],
                            r = 0,
                            a = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return a
                    }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (typeof t.getElementsByClassName !== C && v) return t.getElementsByClassName(e)
                    }, g = [], m = [], (n.qsa = $.test(r.querySelectorAll)) && (se((function(e) {
                        e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + U + ")"), e.querySelectorAll(":checked").length || m.push(":checked")
                    })), se((function(e) {
                        var t = r.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                    }))), (n.matchesSelector = $.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se((function(e) {
                        n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", H)
                    })), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = $.test(h.compareDocumentPosition), E = t || $.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, A = t ? function(e, t) {
                        if (e === t) return d = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === r || e.ownerDocument === T && E(T, e) ? -1 : t === r || t.ownerDocument === T && E(T, t) ? 1 : u ? V.call(u, e) - V.call(u, t) : 0 : 4 & i ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return d = !0, 0;
                        var n, i = 0,
                            a = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            c = [t];
                        if (!a || !o) return e === r ? -1 : t === r ? 1 : a ? -1 : o ? 1 : u ? V.call(u, e) - V.call(u, t) : 0;
                        if (a === o) return le(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) c.unshift(n);
                        for (; s[i] === c[i];) i++;
                        return i ? le(s[i], c[i]) : s[i] === T ? -1 : c[i] === T ? 1 : 0
                    }, r) : f
                }, re.matches = function(e, t) {
                    return re(e, null, null, t)
                }, re.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), n.matchesSelector && v && (!g || !g.test(t)) && (!m || !m.test(t))) try {
                        var i = y.call(e, t);
                        if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (e) {}
                    return re(t, f, null, [e]).length > 0
                }, re.contains = function(e, t) {
                    return (e.ownerDocument || e) !== f && p(e), E(e, t)
                }, re.attr = function(e, t) {
                    (e.ownerDocument || e) !== f && p(e);
                    var r = i.attrHandle[t.toLowerCase()],
                        a = r && _.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !v) : void 0;
                    return void 0 !== a ? a : n.attributes || !v ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
                }, re.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, re.uniqueSort = function(e) {
                    var t, i = [],
                        r = 0,
                        a = 0;
                    if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), d) {
                        for (; t = e[a++];) t === e[a] && (r = i.push(a));
                        for (; r--;) e.splice(i[r], 1)
                    }
                    return u = null, e
                }, r = re.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        a = e.nodeType;
                    if (a) {
                        if (1 === a || 9 === a || 11 === a) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                        } else if (3 === a || 4 === a) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += r(t);
                    return n
                }, (i = re.selectors = {
                    cacheLength: 50,
                    createPseudo: oe,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(ne, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(ne, ie).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = w[e + " "];
                            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && w(e, (function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== C && e.getAttribute("class") || "")
                            }))
                        },
                        ATTR: function(e, t, n) {
                            return function(i) {
                                var r = re.attr(i, e);
                                return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, i, r) {
                            var a = "nth" !== e.slice(0, 3),
                                o = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, c) {
                                var l, u, d, p, f, h, v = a !== o ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    g = s && t.nodeName.toLowerCase(),
                                    y = !c && !s;
                                if (m) {
                                    if (a) {
                                        for (; v;) {
                                            for (d = t; d = d[v];)
                                                if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                            h = v = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [o ? m.firstChild : m.lastChild], o && y) {
                                        for (f = (l = (u = m[b] || (m[b] = {}))[e] || [])[0] === k && l[1], p = l[0] === k && l[2], d = f && m.childNodes[f]; d = ++f && d && d[v] || (p = f = 0) || h.pop();)
                                            if (1 === d.nodeType && ++p && d === t) {
                                                u[e] = [k, f, p];
                                                break
                                            }
                                    } else if (y && (l = (t[b] || (t[b] = {}))[e]) && l[0] === k) p = l[1];
                                    else
                                        for (;
                                            (d = ++f && d && d[v] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++p || (y && ((d[b] || (d[b] = {}))[e] = [k, p]), d !== t)););
                                    return (p -= r) === i || p % i == 0 && p / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                            return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? oe((function(e, n) {
                                for (var i, a = r(e, t), o = a.length; o--;) e[i = V.call(e, a[o])] = !(n[i] = a[o])
                            })) : function(e) {
                                return r(e, 0, n)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: oe((function(e) {
                            var t = [],
                                n = [],
                                i = s(e.replace(W, "$1"));
                            return i[b] ? oe((function(e, t, n, r) {
                                for (var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                            })) : function(e, r, a) {
                                return t[0] = e, i(t, null, a, n), !n.pop()
                            }
                        })),
                        has: oe((function(e) {
                            return function(t) {
                                return re(e, t).length > 0
                            }
                        })),
                        contains: oe((function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                            }
                        })),
                        lang: oe((function(e) {
                            return K.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(ne, ie).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        })),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === h
                        },
                        focus: function(e) {
                            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return !1 === e.disabled
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !i.pseudos.empty(e)
                        },
                        header: function(e) {
                            return J.test(e.nodeName)
                        },
                        input: function(e) {
                            return Q.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: pe((function() {
                            return [0]
                        })),
                        last: pe((function(e, t) {
                            return [t - 1]
                        })),
                        eq: pe((function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        })),
                        even: pe((function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        })),
                        odd: pe((function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        })),
                        lt: pe((function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        })),
                        gt: pe((function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        }))
                    }
                }).pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[t] = ue(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[t] = de(t);

            function he() {}

            function ve(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function me(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    a = S++;
                return t.first ? function(t, n, a) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, a)
                } : function(t, n, o) {
                    var s, c, l = [k, a];
                    if (o) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, o)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if ((s = (c = t[b] || (t[b] = {}))[i]) && s[0] === k && s[1] === a) return l[2] = s[2];
                                if (c[i] = l, l[2] = e(t, n, o)) return !0
                            }
                }
            }

            function ge(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function ye(e, t, n, i, r) {
                for (var a, o = [], s = 0, c = e.length, l = null != t; s < c; s++)(a = e[s]) && (n && !n(a, i, r) || (o.push(a), l && t.push(s)));
                return o
            }

            function Ee(e, t, n, i, r, a) {
                return i && !i[b] && (i = Ee(i)), r && !r[b] && (r = Ee(r, a)), oe((function(a, o, s, c) {
                    var l, u, d, p = [],
                        f = [],
                        h = o.length,
                        v = a || function(e, t, n) {
                            for (var i = 0, r = t.length; i < r; i++) re(e, t[i], n);
                            return n
                        }(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !a && t ? v : ye(v, p, e, s, c),
                        g = n ? r || (a ? e : h || i) ? [] : o : m;
                    if (n && n(m, g, s, c), i)
                        for (l = ye(g, f), i(l, [], s, c), u = l.length; u--;)(d = l[u]) && (g[f[u]] = !(m[f[u]] = d));
                    if (a) {
                        if (r || e) {
                            if (r) {
                                for (l = [], u = g.length; u--;)(d = g[u]) && l.push(m[u] = d);
                                r(null, g = [], l, c)
                            }
                            for (u = g.length; u--;)(d = g[u]) && (l = r ? V.call(a, d) : p[u]) > -1 && (a[l] = !(o[l] = d))
                        }
                    } else g = ye(g === o ? g.splice(h, g.length) : g), r ? r(null, o, g, c) : x.apply(o, g)
                }))
            }

            function be(e) {
                for (var t, n, r, a = e.length, o = i.relative[e[0].type], s = o || i.relative[" "], c = o ? 1 : 0, u = me((function(e) {
                        return e === t
                    }), s, !0), d = me((function(e) {
                        return V.call(t, e) > -1
                    }), s, !0), p = [function(e, n, i) {
                        return !o && (i || n !== l) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i))
                    }]; c < a; c++)
                    if (n = i.relative[e[c].type]) p = [me(ge(p), n)];
                    else {
                        if ((n = i.filter[e[c].type].apply(null, e[c].matches))[b]) {
                            for (r = ++c; r < a && !i.relative[e[r].type]; r++);
                            return Ee(c > 1 && ge(p), c > 1 && ve(e.slice(0, c - 1).concat({
                                value: " " === e[c - 2].type ? "*" : ""
                            })).replace(W, "$1"), n, c < r && be(e.slice(c, r)), r < a && be(e = e.slice(r)), r < a && ve(e))
                        }
                        p.push(n)
                    }
                return ge(p)
            }
            return he.prototype = i.filters = i.pseudos, i.setFilters = new he, o = re.tokenize = function(e, t) {
                var n, r, a, o, s, c, l, u = P[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (s = e, c = [], l = i.preFilter; s;) {
                    for (o in n && !(r = q.exec(s)) || (r && (s = s.slice(r[0].length) || s), c.push(a = [])), n = !1, (r = z.exec(s)) && (n = r.shift(), a.push({
                            value: n,
                            type: r[0].replace(W, " ")
                        }), s = s.slice(n.length)), i.filter) !(r = X[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), a.push({
                        value: n,
                        type: o,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? re.error(e) : P(e, c).slice(0)
            }, s = re.compile = function(e, t) {
                var n, r = [],
                    a = [],
                    s = I[e + " "];
                if (!s) {
                    for (t || (t = o(e)), n = t.length; n--;)(s = be(t[n]))[b] ? r.push(s) : a.push(s);
                    (s = I(e, function(e, t) {
                        var n = t.length > 0,
                            r = e.length > 0,
                            a = function(a, o, s, c, u) {
                                var d, p, h, v = 0,
                                    m = "0",
                                    g = a && [],
                                    y = [],
                                    E = l,
                                    b = a || r && i.find.TAG("*", u),
                                    T = k += null == E ? 1 : Math.random() || .1,
                                    S = b.length;
                                for (u && (l = o !== f && o); m !== S && null != (d = b[m]); m++) {
                                    if (r && d) {
                                        for (p = 0; h = e[p++];)
                                            if (h(d, o, s)) {
                                                c.push(d);
                                                break
                                            }
                                        u && (k = T)
                                    }
                                    n && ((d = !h && d) && v--, a && g.push(d))
                                }
                                if (v += m, n && m !== v) {
                                    for (p = 0; h = t[p++];) h(g, y, o, s);
                                    if (a) {
                                        if (v > 0)
                                            for (; m--;) g[m] || y[m] || (y[m] = L.call(c));
                                        y = ye(y)
                                    }
                                    x.apply(c, y), u && !a && y.length > 0 && v + t.length > 1 && re.uniqueSort(c)
                                }
                                return u && (k = T, l = E), g
                            };
                        return n ? oe(a) : a
                    }(a, r))).selector = e
                }
                return s
            }, c = re.select = function(e, t, r, a) {
                var c, l, u, d, p, f = "function" == typeof e && e,
                    h = !a && o(e = f.selector || e);
                if (r = r || [], 1 === h.length) {
                    if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && n.getById && 9 === t.nodeType && v && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(u.matches[0].replace(ne, ie), t) || [])[0])) return r;
                        f && (t = t.parentNode), e = e.slice(l.shift().value.length)
                    }
                    for (c = X.needsContext.test(e) ? 0 : l.length; c-- && (u = l[c], !i.relative[d = u.type]);)
                        if ((p = i.find[d]) && (a = p(u.matches[0].replace(ne, ie), ee.test(l[0].type) && fe(t.parentNode) || t))) {
                            if (l.splice(c, 1), !(e = a.length && ve(l))) return x.apply(r, a), r;
                            break
                        }
                }
                return (f || s(e, h))(a, t, !v, r, ee.test(e) && fe(t.parentNode) || t), r
            }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!d, p(), n.sortDetached = se((function(e) {
                return 1 & e.compareDocumentPosition(f.createElement("div"))
            })), se((function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            })) || ce("type|href|height|width", (function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            })), n.attributes && se((function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            })) || ce("value", (function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            })), se((function(e) {
                return null == e.getAttribute("disabled")
            })) || ce(U, (function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            })), re
        }(n);
        m.find = k, m.expr = k.selectors, m.expr[":"] = m.expr.pseudos, m.unique = k.uniqueSort, m.text = k.getText, m.isXMLDoc = k.isXML, m.contains = k.contains;
        var S = m.expr.match.needsContext,
            w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            P = /^.[^:#\[\.,]*$/;

        function I(e, t, n) {
            if (m.isFunction(t)) return m.grep(e, (function(e, i) {
                return !!t.call(e, i, e) !== n
            }));
            if (t.nodeType) return m.grep(e, (function(e) {
                return e === t !== n
            }));
            if ("string" == typeof t) {
                if (P.test(t)) return m.filter(t, e, n);
                t = m.filter(t, e)
            }
            return m.grep(e, (function(e) {
                return l.call(t, e) >= 0 !== n
            }))
        }
        m.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? m.find.matchesSelector(i, e) ? [i] : [] : m.find.matches(e, m.grep(t, (function(e) {
                return 1 === e.nodeType
            })))
        }, m.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof e) return this.pushStack(m(e).filter((function() {
                    for (t = 0; t < n; t++)
                        if (m.contains(r[t], this)) return !0
                })));
                for (t = 0; t < n; t++) m.find(e, r[t], i);
                return (i = this.pushStack(n > 1 ? m.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(I(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(I(this, e || [], !0))
            },
            is: function(e) {
                return !!I(this, "string" == typeof e && S.test(e) ? m(e) : e || [], !1).length
            }
        });
        var A, C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (m.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : C.exec(e)) || !n[1] && t) return !t || t.nquery ? (t || A).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof m ? t[0] : t, m.merge(this, m.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : h, !0)), w.test(n[1]) && m.isPlainObject(t))
                        for (n in t) m.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return (i = h.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = h, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : m.isFunction(e) ? void 0 !== A.ready ? A.ready(e) : e(m) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), m.makeArray(e, this))
        }).prototype = m.fn, A = m(h);
        var R = /^(?:parents|prev(?:Until|All))/,
            _ = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function D(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        m.extend({
            dir: function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && m(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), m.fn.extend({
            has: function(e) {
                var t = m(e, this),
                    n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++)
                        if (m.contains(this, t[e])) return !0
                }))
            },
            index: function(e) {
                return e ? "string" == typeof e ? l.call(m(e), this[0]) : l.call(this, e.nquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(m.unique(m.merge(this.get(), m(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), m.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return m.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return m.dir(e, "parentNode", n)
            },
            next: function(e) {
                return D(e, "nextSibling")
            },
            prev: function(e) {
                return D(e, "previousSibling")
            },
            nextAll: function(e) {
                return m.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return m.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return m.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return m.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return m.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return m.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || m.merge([], e.childNodes)
            }
        }, (function(e, t) {
            m.fn[e] = function(n, i) {
                var r = m.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = m.filter(i, r)), this.length > 1 && (_[e] || m.unique(r), R.test(e) && r.reverse()), this.pushStack(r)
            }
        }));
        var L, O = /\S+/g,
            x = {};

        function N() {
            h.removeEventListener("DOMContentLoaded", N, !1), n.removeEventListener("load", N, !1), m.ready()
        }
        m.Callbacks = function(e) {
            e = "string" == typeof e ? x[e] || function(e) {
                var t = x[e] = {};
                return m.each(e.match(O) || [], (function(e, n) {
                    t[n] = !0
                })), t
            }(e) : m.extend({}, e);
            var t, n, i, r, a, o, s = [],
                c = !e.once && [],
                l = function(d) {
                    for (t = e.memory && d, n = !0, o = r || 0, r = 0, a = s.length, i = !0; s && o < a; o++)
                        if (!1 === s[o].apply(d[0], d[1]) && e.stopOnFalse) {
                            t = !1;
                            break
                        }
                    i = !1, s && (c ? c.length && l(c.shift()) : t ? s = [] : u.disable())
                },
                u = {
                    add: function() {
                        if (s) {
                            var n = s.length;
                            ! function t(n) {
                                m.each(n, (function(n, i) {
                                    var r = m.type(i);
                                    "function" === r ? e.unique && u.has(i) || s.push(i) : i && i.length && "string" !== r && t(i)
                                }))
                            }(arguments), i ? a = s.length : t && (r = n, l(t))
                        }
                        return this
                    },
                    remove: function() {
                        return s && m.each(arguments, (function(e, t) {
                            for (var n;
                                (n = m.inArray(t, s, n)) > -1;) s.splice(n, 1), i && (n <= a && a--, n <= o && o--)
                        })), this
                    },
                    has: function(e) {
                        return e ? m.inArray(e, s) > -1 : !(!s || !s.length)
                    },
                    empty: function() {
                        return s = [], a = 0, this
                    },
                    disable: function() {
                        return s = c = t = void 0, this
                    },
                    disabled: function() {
                        return !s
                    },
                    fireWith: function(e, t) {
                        return !s || n && !c || (t = [e, (t = t || []).slice ? t.slice() : t], i ? c.push(t) : l(t)), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return u
        }, m.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", m.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return m.Deferred((function(n) {
                                m.each(t, (function(t, a) {
                                    var o = m.isFunction(e[t]) && e[t];
                                    r[a[1]]((function() {
                                        var e = o && o.apply(this, arguments);
                                        e && m.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        promise: function(e) {
                            return null != e ? m.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, m.each(t, (function(e, a) {
                    var o = a[2],
                        s = a[3];
                    i[a[1]] = o.add, s && o.add((function() {
                        n = s
                    }), t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function() {
                        return r[a[0] + "With"](this === r ? i : this, arguments), this
                    }, r[a[0] + "With"] = o.fireWith
                })), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    a = o.call(arguments),
                    s = a.length,
                    c = 1 !== s || e && m.isFunction(e.promise) ? s : 0,
                    l = 1 === c ? e : m.Deferred(),
                    u = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : r, i === t ? l.notifyWith(n, i) : --c || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) a[r] && m.isFunction(a[r].promise) ? a[r].promise().done(u(r, i, a)).fail(l.reject).progress(u(r, n, t)) : --c;
                return c || l.resolveWith(i, a), l.promise()
            }
        }), m.fn.ready = function(e) {
            return m.ready.promise().done(e), this
        }, m.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? m.readyWait++ : m.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --m.readyWait : m.isReady) || (m.isReady = !0, !0 !== e && --m.readyWait > 0 || (L.resolveWith(h, [m]), m.fn.triggerHandler && (m(h).triggerHandler("ready"), m(h).off("ready"))))
            }
        }), m.ready.promise = function(e) {
            return L || (L = m.Deferred(), "complete" === h.readyState ? setTimeout(m.ready) : (h.addEventListener("DOMContentLoaded", N, !1), n.addEventListener("load", N, !1))), L.promise(e)
        }, m.ready.promise();
        var V = m.access = function(e, t, n, i, r, a, o) {
            var s = 0,
                c = e.length,
                l = null == n;
            if ("object" === m.type(n))
                for (s in r = !0, n) m.access(e, t, s, n[s], !0, a, o);
            else if (void 0 !== i && (r = !0, m.isFunction(i) || (o = !0), l && (o ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(m(e), n)
                })), t))
                for (; s < c; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : l ? t.call(e) : c ? t(e[0], n) : a
        };

        function U() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = m.expando + Math.random()
        }
        m.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, U.uid = 1, U.accepts = m.acceptData, U.prototype = {
            key: function(e) {
                if (!U.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = U.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        }, Object.defineProperties(e, t)
                    } catch (i) {
                        t[this.expando] = n, m.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(e, t, n) {
                var i, r = this.key(e),
                    a = this.cache[r];
                if ("string" == typeof t) a[t] = n;
                else if (m.isEmptyObject(a)) m.extend(this.cache[r], t);
                else
                    for (i in t) a[i] = t[i];
                return a
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, m.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i, r, a = this.key(e),
                    o = this.cache[a];
                if (void 0 === t) this.cache[a] = {};
                else {
                    m.isArray(t) ? i = t.concat(t.map(m.camelCase)) : (r = m.camelCase(t), i = t in o ? [t, r] : (i = r) in o ? [i] : i.match(O) || []), n = i.length;
                    for (; n--;) delete o[i[n]]
                }
            },
            hasData: function(e) {
                return !m.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var M = new U,
            F = new U,
            B = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            j = /([A-Z])/g;

        function H(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(j, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : B.test(n) ? m.parseJSON(n) : n)
                    } catch (e) {}
                    F.set(e, t, n)
                } else n = void 0;
            return n
        }
        m.extend({
            hasData: function(e) {
                return F.hasData(e) || M.hasData(e)
            },
            data: function(e, t, n) {
                return F.access(e, t, n)
            },
            removeData: function(e, t) {
                F.remove(e, t)
            },
            _data: function(e, t, n) {
                return M.access(e, t, n)
            },
            _removeData: function(e, t) {
                M.remove(e, t)
            }
        }), m.fn.extend({
            data: function(e, t) {
                var n, i, r, a = this[0],
                    o = a && a.attributes;
                if (void 0 === e) {
                    if (this.length && (r = F.get(a), 1 === a.nodeType && !M.get(a, "hasDataAttrs"))) {
                        for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = m.camelCase(i.slice(5)), H(a, i, r[i]));
                        M.set(a, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each((function() {
                    F.set(this, e)
                })) : V(this, (function(t) {
                    var n, i = m.camelCase(e);
                    if (a && void 0 === t) return void 0 !== (n = F.get(a, e)) ? n : void 0 !== (n = F.get(a, i)) ? n : void 0 !== (n = H(a, i, void 0)) ? n : void 0;
                    this.each((function() {
                        var n = F.get(this, i);
                        F.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && F.set(this, e, t)
                    }))
                }), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each((function() {
                    F.remove(this, e)
                }))
            }
        }), m.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = M.get(e, t), n && (!i || m.isArray(n) ? i = M.access(e, t, m.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = m.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    a = m._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, (function() {
                    m.dequeue(e, t)
                }), a)), !i && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return M.get(e, n) || M.access(e, n, {
                    empty: m.Callbacks("once memory").add((function() {
                        M.remove(e, [t + "queue", n])
                    }))
                })
            }
        }), m.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? m.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = m.queue(this, e, t);
                    m._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e)
                }))
            },
            dequeue: function(e) {
                return this.each((function() {
                    m.dequeue(this, e)
                }))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = m.Deferred(),
                    a = this,
                    o = this.length,
                    s = function() {
                        --i || r.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = M.get(a[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var W, q, z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Y = ["Top", "Right", "Bottom", "Left"],
            G = function(e, t) {
                return e = t || e, "none" === m.css(e, "display") || !m.contains(e.ownerDocument, e)
            },
            K = /^(?:checkbox|radio)$/i;
        W = h.createDocumentFragment().appendChild(h.createElement("div")), (q = h.createElement("input")).setAttribute("type", "radio"), q.setAttribute("checked", "checked"), q.setAttribute("name", "t"), W.appendChild(q), f.checkClone = W.cloneNode(!0).cloneNode(!0).lastChild.checked, W.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!W.cloneNode(!0).lastChild.defaultValue, f.focusinBubbles = "onfocusin" in n;
        var X = /^key/,
            Q = /^(?:mouse|pointer|contextmenu)|click/,
            J = /^(?:focusinfocus|focusoutblur)$/,
            $ = /^([^.]*)(?:\.(.+)|)$/;

        function Z() {
            return !0
        }

        function ee() {
            return !1
        }

        function te() {
            try {
                return h.activeElement
            } catch (e) {}
        }
        m.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var a, o, s, c, l, u, d, p, f, h, v, g = M.get(e);
                if (g)
                    for (n.handler && (n = (a = n).handler, r = a.selector), n.guid || (n.guid = m.guid++), (c = g.events) || (c = g.events = {}), (o = g.handle) || (o = g.handle = function(t) {
                            return void 0 !== m && m.event.triggered !== t.type ? m.event.dispatch.apply(e, arguments) : void 0
                        }), l = (t = (t || "").match(O) || [""]).length; l--;) f = v = (s = $.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), f && (d = m.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = m.event.special[f] || {}, u = m.extend({
                        type: f,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && m.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, a), (p = c[f]) || ((p = c[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, o) || e.addEventListener && e.addEventListener(f, o, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), m.event.global[f] = !0)
            },
            remove: function(e, t, n, i, r) {
                var a, o, s, c, l, u, d, p, f, h, v, g = M.hasData(e) && M.get(e);
                if (g && (c = g.events)) {
                    for (l = (t = (t || "").match(O) || [""]).length; l--;)
                        if (f = v = (s = $.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), f) {
                            for (d = m.event.special[f] || {}, p = c[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = p.length; a--;) u = p[a], !r && v !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                            o && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || m.removeEvent(e, f, g.handle), delete c[f])
                        } else
                            for (f in c) m.event.remove(e, f + t[l], n, i, !0);
                    m.isEmptyObject(c) && (delete g.handle, M.remove(e, "events"))
                }
            },
            trigger: function(e, t, i, r) {
                var a, o, s, c, l, u, d, f = [i || h],
                    v = p.call(e, "type") ? e.type : e,
                    g = p.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = s = i = i || h, 3 !== i.nodeType && 8 !== i.nodeType && !J.test(v + m.event.triggered) && (v.indexOf(".") >= 0 && (g = v.split("."), v = g.shift(), g.sort()), l = v.indexOf(":") < 0 && "on" + v, (e = e[m.expando] ? e : new m.Event(v, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = g.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : m.makeArray(t, [e]), d = m.event.special[v] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, t))) {
                    if (!r && !d.noBubble && !m.isWindow(i)) {
                        for (c = d.delegateType || v, J.test(c + v) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                        s === (i.ownerDocument || h) && f.push(s.defaultView || s.parentWindow || n)
                    }
                    for (a = 0;
                        (o = f[a++]) && !e.isPropagationStopped();) e.type = a > 1 ? c : d.bindType || v, (u = (M.get(o, "events") || {})[e.type] && M.get(o, "handle")) && u.apply(o, t), (u = l && o[l]) && u.apply && m.acceptData(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                    return e.type = v, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), t) || !m.acceptData(i) || l && m.isFunction(i[v]) && !m.isWindow(i) && ((s = i[l]) && (i[l] = null), m.event.triggered = v, i[v](), m.event.triggered = void 0, s && (i[l] = s)), e.result
                }
            },
            dispatch: function(e) {
                e = m.event.fix(e);
                var t, n, i, r, a, s = [],
                    c = o.call(arguments),
                    l = (M.get(this, "events") || {})[e.type] || [],
                    u = m.event.special[e.type] || {};
                if (c[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                    for (s = m.event.handlers.call(this, e, l), t = 0;
                        (r = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (a = r.handlers[n++]) && !e.isImmediatePropagationStopped();)
                            if (!e.namespace_re || e.namespace_re.test(a.namespace)) {
                                e.handleObj = a, e.data = a.data;
                                var d = (m.event.special[a.origType] || {}).handle || a.handler;
                                "function" == typeof d && (i = d.apply(r.elem, c)), void 0 !== i && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation())
                            }
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, a, o = [],
                    s = t.delegateCount,
                    c = e.target;
                if (s && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c !== this; c = c.parentNode || this)
                        if (!0 !== c.disabled || "click" !== e.type) {
                            for (i = [], n = 0; n < s; n++) void 0 === i[r = (a = t[n]).selector + " "] && (i[r] = a.needsContext ? m(r, this).index(c) >= 0 : m.find(r, this, null, [c]).length), i[r] && i.push(a);
                            i.length && o.push({
                                elem: c,
                                handlers: i
                            })
                        }
                return s < t.length && o.push({
                    elem: this,
                    handlers: t.slice(s)
                }), o
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, a = t.button;
                    return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || h).documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[m.expando]) return e;
                var t, n, i, r = e.type,
                    a = e,
                    o = this.fixHooks[r];
                for (o || (this.fixHooks[r] = o = Q.test(r) ? this.mouseHooks : X.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new m.Event(a), t = i.length; t--;) e[n = i[t]] = a[n];
                return e.target || (e.target = h), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, a) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== te() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === te() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && m.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return m.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = m.extend(new m.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? m.event.trigger(r, null, t) : m.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, m.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, m.Event = function(e, t) {
            if (!(this instanceof m.Event)) return new m.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Z : ee) : this.type = e, t && m.extend(this, t), this.timeStamp = e && e.timeStamp || m.now(), this[m.expando] = !0
        }, m.Event.prototype = {
            isDefaultPrevented: ee,
            isPropagationStopped: ee,
            isImmediatePropagationStopped: ee,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Z, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Z, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Z, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, m.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            m.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        a = e.handleObj;
                    return r && (r === i || m.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), f.focusinBubbles || m.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = function(e) {
                m.event.simulate(t, e.target, m.event.fix(e), !0)
            };
            m.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = M.access(i, t);
                    r || i.addEventListener(e, n, !0), M.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = M.access(i, t) - 1;
                    r ? M.access(i, t, r) : (i.removeEventListener(e, n, !0), M.remove(i, t))
                }
            }
        })), m.fn.extend({
            on: function(e, t, n, i, r) {
                var a, o;
                if ("object" == typeof e) {
                    for (o in "string" != typeof t && (n = n || t, t = void 0), e) this.on(o, t, n, e[o], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = ee;
                else if (!i) return this;
                return 1 === r && (a = i, (i = function(e) {
                    return m().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = m.guid++)), this.each((function() {
                    m.event.add(this, e, i, n, t)
                }))
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, m(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ee), this.each((function() {
                    m.event.remove(this, e, n, t)
                }))
            },
            trigger: function(e, t) {
                return this.each((function() {
                    m.event.trigger(e, t, this)
                }))
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return m.event.trigger(e, t, n, !0)
            }
        });
        var ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            ie = /<([\w:]+)/,
            re = /<|&#?\w+;/,
            ae = /<(?:script|style|link)/i,
            oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            se = /^$|\/(?:java|ecma)script/i,
            ce = /^true\/(.*)/,
            le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ue = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function de(e, t) {
            return m.nodeName(e, "table") && m.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function pe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function fe(e) {
            var t = ce.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function he(e, t) {
            for (var n = 0, i = e.length; n < i; n++) M.set(e[n], "globalEval", !t || M.get(t[n], "globalEval"))
        }

        function ve(e, t) {
            var n, i, r, a, o, s, c, l;
            if (1 === t.nodeType) {
                if (M.hasData(e) && (a = M.access(e), o = M.set(t, a), l = a.events))
                    for (r in delete o.handle, o.events = {}, l)
                        for (n = 0, i = l[r].length; n < i; n++) m.event.add(t, r, l[r][n]);
                F.hasData(e) && (s = F.access(e), c = m.extend({}, s), F.set(t, c))
            }
        }

        function me(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && m.nodeName(e, t) ? m.merge([e], n) : n
        }

        function ge(e) {
            e.target.parentNode && e.target.parentNode.removeChild(e.target)
        }

        function ye(e) {
            return void 0 === e || void 0 === e.nodeName || null == e.nodeName || 0 != e.nodeName.toUpperCase().localeCompare("SCRIPT") || e.type && 0 != e.type.localeCompare("text/javascript") || e.src ? !(void 0 === e || void 0 === e.nodeName || null == e.nodeName || 0 != e.nodeName.toUpperCase().localeCompare("SCRIPT") || !e.src || (t = e, (n = h.createElement("script")).src = t.src, n.type = "text/javascript", n.onload = ge, n.onerror = ge, h.head.appendChild(n), 0)) : (m.globalEval(e.innerHTML), !0);
            var t, n
        }

        function Ee(e, t) {
            if (void 0 !== e && (1 == e.nodeType || 11 == e.nodeType)) {
                t(e);
                for (var n = 0, i = e.childNodes.length; n < i; n++) Ee(e.childNodes[n], t)
            }
        }

        function be(e) {
            var t = h.createDocumentFragment();
            t.appendChild(e);
            for (var n = 0; n < t.childNodes.length; n++) t.childNodes[n] && Ee(t.childNodes[n], ye);
            return t
        }
        ue.optgroup = ue.option, ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead, ue.th = ue.td, m.extend({
            clone: function(e, t, n) {
                var i, r, a, o, s, c, l, u = e.cloneNode(!0),
                    d = m.contains(e.ownerDocument, e);
                if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || m.isXMLDoc(e)))
                    for (o = me(u), i = 0, r = (a = me(e)).length; i < r; i++) s = a[i], c = o[i], l = void 0, "input" === (l = c.nodeName.toLowerCase()) && K.test(s.type) ? c.checked = s.checked : "input" !== l && "textarea" !== l || (c.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (a = a || me(e), o = o || me(u), i = 0, r = a.length; i < r; i++) ve(a[i], o[i]);
                    else ve(e, u);
                return (o = me(u, "script")).length > 0 && he(o, !d && me(e, "script")), u
            },
            buildFragment: function(e, t, n, i) {
                for (var r, a, o, s, c, l, u = t.createDocumentFragment(), d = [], p = 0, f = e.length; p < f; p++)
                    if ((r = e[p]) || 0 === r)
                        if ("object" === m.type(r)) m.merge(d, r.nodeType ? [r] : r);
                        else if (re.test(r)) {
                    for (a = a || u.appendChild(t.createElement("div")), o = (ie.exec(r) || ["", ""])[1].toLowerCase(), s = ue[o] || ue._default, a.innerHTML = s[1] + r.replace(ne, "<$1></$2>") + s[2], l = s[0]; l--;) a = a.lastChild;
                    m.merge(d, a.childNodes), (a = u.firstChild).textContent = ""
                } else d.push(t.createTextNode(r));
                for (u.textContent = "", p = 0; r = d[p++];)
                    if ((!i || -1 === m.inArray(r, i)) && (c = m.contains(r.ownerDocument, r), a = me(u.appendChild(r), "script"), c && he(a), n))
                        for (l = 0; r = a[l++];) se.test(r.type || "") && n.push(r);
                return u
            },
            cleanData: function(e) {
                for (var t, n, i, r, a = m.event.special, o = 0; void 0 !== (n = e[o]); o++) {
                    if (m.acceptData(n) && (r = n[M.expando]) && (t = M.cache[r])) {
                        if (t.events)
                            for (i in t.events) a[i] ? m.event.remove(n, i) : m.removeEvent(n, i, t.handle);
                        M.cache[r] && delete M.cache[r]
                    }
                    delete F.cache[n[F.expando]]
                }
            }
        }), m.fn.extend({
            text: function(e) {
                return V(this, (function(e) {
                    return void 0 === e ? m.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }))
                }), null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || de(this, e).appendChild(be(e))
                }))
            },
            prepend: function() {
                return this.domManip(arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = de(this, e);
                        t.insertBefore(be(e), t.firstChild)
                    }
                }))
            },
            before: function() {
                return this.domManip(arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(be(e), this)
                }))
            },
            after: function() {
                return this.domManip(arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(be(e), this.nextSibling)
                }))
            },
            remove: function(e, t) {
                for (var n, i = e ? m.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || m.cleanData(me(n)), n.parentNode && (t && m.contains(n.ownerDocument, n) && he(me(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (m.cleanData(me(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function() {
                    return m.clone(this, e, t)
                }))
            },
            html: function(e) {
                return V(this, (function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !ae.test(e) && !ue[(ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(ne, "<$1></$2>");
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (m.cleanData(me(t, !1)), t.innerHTML = e, be(t.cloneNode(!0)));
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, (function(t) {
                    if (e = this.parentNode, m.cleanData(me(this)), e) {
                        if (11 == t.nodeType && t.childElementCount >= 1) var n = t.cloneNode(!0);
                        e.replaceChild(t, this), setTimeout(be, 0, n || t.cloneNode(!0))
                    }
                })), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = s.apply([], e);
                var n, i, r, a, o, c, l = 0,
                    u = this.length,
                    d = this,
                    p = u - 1,
                    h = e[0],
                    v = m.isFunction(h);
                if (v || u > 1 && "string" == typeof h && !f.checkClone && oe.test(h)) return this.each((function(n) {
                    var i = d.eq(n);
                    v && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
                }));
                if (u && (i = (n = m.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (a = (r = m.map(me(n, "script"), pe)).length; l < u; l++) o = n, l !== p && (o = m.clone(o, !0, !0), a && m.merge(r, me(o, "script"))), t.call(this[l], o, l);
                    if (a)
                        for (c = r[r.length - 1].ownerDocument, m.map(r, fe), l = 0; l < a; l++) o = r[l], se.test(o.type || "") && !M.access(o, "globalEval") && m.contains(c, o) && (o.src ? m._evalUrl && m._evalUrl(o.src) : m.globalEval(o.textContent.replace(le, "")))
                }
                return this
            }
        }), m.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            m.fn[e] = function(e) {
                for (var n, i = [], r = m(e), a = r.length - 1, o = 0; o <= a; o++) n = o === a ? this : this.clone(!0), m(r[o])[t](n), c.apply(i, n.get());
                return this.pushStack(i)
            }
        }));
        var Te, ke = {};

        function Se(e, t) {
            var i, r = m(t.createElement(e)).appendTo(t.body),
                a = n.getDefaultComputedStyle && (i = n.getDefaultComputedStyle(r[0])) ? i.display : m.css(r[0], "display");
            return r.detach(), a
        }

        function we(e) {
            var t = h,
                n = ke[e];
            return n || ("none" !== (n = Se(e, t)) && n || ((t = (Te = (Te || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Se(e, t), Te.detach()), ke[e] = n), n
        }
        var Pe = /^margin/,
            Ie = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
            Ae = function(e) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null)
            };

        function Ce(e, t, n) {
            var i, r, a, o, s = e.style;
            return (n = n || Ae(e)) && (o = n.getPropertyValue(t) || n[t]), n && ("" !== o || m.contains(e.ownerDocument, e) || (o = m.style(e, t)), Ie.test(o) && Pe.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a)), void 0 !== o ? o + "" : o
        }

        function Re(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            var e, t, i = h.documentElement,
                r = h.createElement("div"),
                a = h.createElement("div");

            function o() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(r);
                var o = n.getComputedStyle(a, null);
                e = "1%" !== o.top, t = "4px" === o.width, i.removeChild(r)
            }
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(a), n.getComputedStyle && m.extend(f, {
                pixelPosition: function() {
                    return o(), e
                },
                boxSizingReliable: function() {
                    return null == t && o(), t
                },
                reliableMarginRight: function() {
                    var e, t = a.appendChild(h.createElement("div"));
                    return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", i.appendChild(r), e = !parseFloat(n.getComputedStyle(t, null).marginRight), i.removeChild(r), e
                }
            }))
        }(), m.swap = function(e, t, n, i) {
            var r, a, o = {};
            for (a in t) o[a] = e.style[a], e.style[a] = t[a];
            for (a in r = n.apply(e, i || []), t) e.style[a] = o[a];
            return r
        };
        var _e = /^(none|table(?!-c[ea]).+)/,
            De = new RegExp("^(" + z + ")(.*)$", "i"),
            Le = new RegExp("^([+-])=(" + z + ")", "i"),
            Oe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            xe = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ne = ["Webkit", "O", "Moz", "ms"];

        function Ve(e, t) {
            if (t in e) return t;
            for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ne.length; r--;)
                if ((t = Ne[r] + n) in e) return t;
            return i
        }

        function Ue(e, t, n) {
            var i = De.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function Me(e, t, n, i, r) {
            for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; a < 4; a += 2) "margin" === n && (o += m.css(e, n + Y[a], !0, r)), i ? ("content" === n && (o -= m.css(e, "padding" + Y[a], !0, r)), "margin" !== n && (o -= m.css(e, "border" + Y[a] + "Width", !0, r))) : (o += m.css(e, "padding" + Y[a], !0, r), "padding" !== n && (o += m.css(e, "border" + Y[a] + "Width", !0, r)));
            return o
        }

        function Fe(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                a = Ae(e),
                o = "border-box" === m.css(e, "boxSizing", !1, a);
            if (r <= 0 || null == r) {
                if (((r = Ce(e, t, a)) < 0 || null == r) && (r = e.style[t]), Ie.test(r)) return r;
                i = o && (f.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + Me(e, t, n || (o ? "border" : "content"), i, a) + "px"
        }

        function Be(e, t) {
            for (var n, i, r, a = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (a[o] = M.get(i, "olddisplay"), n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && G(i) && (a[o] = M.access(i, "olddisplay", we(i.nodeName)))) : (r = G(i), "none" === n && r || M.set(i, "olddisplay", r ? n : m.css(i, "display"))));
            for (o = 0; o < s; o++)(i = e[o]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
            return e
        }
        m.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Ce(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, a, o, s = m.camelCase(t),
                            c = e.style;
                        if (t = m.cssProps[s] || (m.cssProps[s] = Ve(c, s)), o = m.cssHooks[t] || m.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : c[t];
                        "string" == (a = typeof n) && (r = Le.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(m.css(e, t)), a = "number"), null != n && n == n && ("number" !== a || m.cssNumber[s] || (n += "px"), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (c[t] = n))
                    }
                },
                css: function(e, t, n, i) {
                    var r, a, o, s = m.camelCase(t);
                    return t = m.cssProps[s] || (m.cssProps[s] = Ve(e.style, s)), (o = m.cssHooks[t] || m.cssHooks[s]) && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = Ce(e, t, i)), "normal" === r && t in xe && (r = xe[t]), "" === n || n ? (a = parseFloat(r), !0 === n || m.isNumeric(a) ? a || 0 : r) : r
                }
            }), m.each(["height", "width"], (function(e, t) {
                m.cssHooks[t] = {
                    get: function(e, n, i) {
                        if (n) return _e.test(m.css(e, "display")) && 0 === e.offsetWidth ? m.swap(e, Oe, (function() {
                            return Fe(e, t, i)
                        })) : Fe(e, t, i)
                    },
                    set: function(e, n, i) {
                        var r = i && Ae(e);
                        return Ue(0, n, i ? Me(e, t, i, "border-box" === m.css(e, "boxSizing", !1, r), r) : 0)
                    }
                }
            })), m.cssHooks.marginRight = Re(f.reliableMarginRight, (function(e, t) {
                if (t) return m.swap(e, {
                    display: "inline-block"
                }, Ce, [e, "marginRight"])
            })), m.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(e, t) {
                m.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Y[i] + t] = a[i] || a[i - 2] || a[0];
                        return r
                    }
                }, Pe.test(e) || (m.cssHooks[e + t].set = Ue)
            })), m.fn.extend({
                css: function(e, t) {
                    return V(this, (function(e, t, n) {
                        var i, r, a = {},
                            o = 0;
                        if (m.isArray(t)) {
                            for (i = Ae(e), r = t.length; o < r; o++) a[t[o]] = m.css(e, t[o], !1, i);
                            return a
                        }
                        return void 0 !== n ? m.style(e, t, n) : m.css(e, t)
                    }), e, t, arguments.length > 1)
                },
                show: function() {
                    return Be(this, !0)
                },
                hide: function() {
                    return Be(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        G(this) ? m(this).show() : m(this).hide()
                    }))
                }
            }), m.fn.delay = function(e, t) {
                return e = m.fx && m.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                }))
            }, m.fn.size = function() {
                return this.length
            },
            function() {
                var e = h.createElement("input"),
                    t = h.createElement("select"),
                    n = t.appendChild(h.createElement("option"));
                e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = n.selected, t.disabled = !0, f.optDisabled = !n.disabled, (e = h.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value
            }();
        var je, He = m.expr.attrHandle;
        m.fn.extend({
            attr: function(e, t) {
                return V(this, m.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each((function() {
                    m.removeAttr(this, e)
                }))
            }
        }), m.extend({
            attr: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? m.prop(e, t, n) : (1 === a && m.isXMLDoc(e) || (t = t.toLowerCase(), i = m.attrHooks[t] || (m.expr.match.bool.test(t) ? je : void 0)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = m.find.attr(e, t)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void m.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    a = t && t.match(O);
                if (a && 1 === e.nodeType)
                    for (; n = a[r++];) i = m.propFix[n] || n, m.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!f.radioValue && "radio" === t && m.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), je = {
            set: function(e, t, n) {
                return !1 === t ? m.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, m.each(m.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = He[t] || m.find.attr;
            He[t] = function(e, t, i) {
                var r, a;
                return i || (a = He[t], He[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, He[t] = a), r
            }
        }));
        var We = /^(?:input|select|textarea|button)$/i;
        m.fn.extend({
            prop: function(e, t) {
                return V(this, m.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[m.propFix[e] || e]
                }))
            }
        }), m.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !m.isXMLDoc(e)) && (t = m.propFix[t] || t, r = m.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || We.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), f.optSelected || (m.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            m.propFix[this.toLowerCase()] = this
        }));
        var qe = /[\t\r\n\f]/g;
        m.fn.extend({
            addClass: function(e) {
                var t, n, i, r, a, o, s = "string" == typeof e && e,
                    c = 0,
                    l = this.length;
                if (m.isFunction(e)) return this.each((function(t) {
                    m(this).addClass(e.call(this, t, this.className))
                }));
                if (s)
                    for (t = (e || "").match(O) || []; c < l; c++)
                        if (i = 1 === (n = this[c]).nodeType && (n.className ? (" " + n.className + " ").replace(qe, " ") : " ")) {
                            for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o = m.trim(i), n.className !== o && (n.className = o)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, a, o, s = 0 === arguments.length || "string" == typeof e && e,
                    c = 0,
                    l = this.length;
                if (m.isFunction(e)) return this.each((function(t) {
                    m(this).removeClass(e.call(this, t, this.className))
                }));
                if (s)
                    for (t = (e || "").match(O) || []; c < l; c++)
                        if (i = 1 === (n = this[c]).nodeType && (n.className ? (" " + n.className + " ").replace(qe, " ") : "")) {
                            for (a = 0; r = t[a++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            o = e ? m.trim(i) : "", n.className !== o && (n.className = o)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : m.isFunction(e) ? this.each((function(n) {
                    m(this).toggleClass(e.call(this, n, this.className, t), t)
                })) : this.each((function() {
                    if ("string" === n)
                        for (var t, i = 0, r = m(this), a = e.match(O) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else "undefined" !== n && "boolean" !== n || (this.className && M.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : M.get(this, "__className__") || "")
                }))
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(qe, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        });
        var ze = /\r/g;
        m.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = m.isFunction(e), this.each((function(n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? e.call(this, n, m(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : m.isArray(r) && (r = m.map(r, (function(e) {
                        return null == e ? "" : e + ""
                    }))), (t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                }))) : r ? (t = m.valHooks[r.type] || m.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(ze, "") : null == n ? "" : n : void 0
            }
        }), m.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = m.find.attr(e, "value");
                        return null != t ? t : m.trim(m.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || r < 0, o = a ? null : [], s = a ? r + 1 : i.length, c = r < 0 ? s : a ? r : 0; c < s; c++)
                            if (((n = i[c]).selected || c === r) && (f.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !m.nodeName(n.parentNode, "optgroup"))) {
                                if (t = m(n).val(), a) return t;
                                o.push(t)
                            }
                        return o
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, a = m.makeArray(t), o = r.length; o--;)((i = r[o]).selected = m.inArray(i.value, a) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), a
                    }
                }
            }
        }), m.each(["radio", "checkbox"], (function() {
            m.valHooks[this] = {
                set: function(e, t) {
                    if (m.isArray(t)) return e.checked = m.inArray(m(e).val(), t) >= 0
                }
            }, f.checkOn || (m.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        })), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
            m.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        })), m.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), m.fn.extend({
            size: function() {
                return this.length
            }
        }), m.fn.andSelf = m.fn.addBack, m.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            m.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Y[i] + t] = a[i] || a[i - 2] || a[0];
                    return r
                }
            }, Pe.test(e) || (m.cssHooks[e + t].set = Ue)
        })), m.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, m.expr.filters.visible = function(e) {
            return !m.expr.filters.hidden(e)
        };
        var Ye = /%20/g,
            Ge = /\[\]$/;

        function Ke(e, t, n, i) {
            var r;
            if (m.isArray(t)) m.each(t, (function(t, r) {
                n || Ge.test(e) ? i(e, r) : Ke(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            }));
            else if (n || "object" !== m.type(t)) i(e, t);
            else
                for (r in t) Ke(e + "[" + r + "]", t[r], n, i)
        }
        m.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = m.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(e) || e.nquery && !m.isPlainObject(e)) m.each(e, (function() {
                r(this.name, this.value)
            }));
            else
                for (n in e) Ke(n, e[n], t, r);
            return i.join("&").replace(Ye, "+")
        }, m.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || h;
            var i = w.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = m.buildFragment([e], t, r), r && r.length && m(r).remove(), m.merge([], i.childNodes))
        };
        var Xe = n.document.documentElement;

        function Qe(e) {
            return m.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        m.offset = {
            setOffset: function(e, t, n) {
                var i, r, a, o, s, c, l = m.css(e, "position"),
                    u = m(e),
                    d = {};
                "static" === l && (e.style.position = "relative"), s = u.offset(), a = m.css(e, "top"), c = m.css(e, "left"), ("absolute" === l || "fixed" === l) && (a + c).indexOf("auto") > -1 ? (o = (i = u.position()).top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(c) || 0), m.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, m.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                    m.offset.setOffset(this, e, t)
                }));
                var t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    a = i && i.ownerDocument;
                return a ? (t = a.documentElement, m.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = Qe(a), {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === m.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), m.nodeName(e[0], "html") || (i = e.offset()), i.top += m.css(e[0], "borderTopWidth", !0), i.left += m.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - m.css(n, "marginTop", !0),
                        left: t.left - i.left - m.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var e = this.offsetParent || Xe; e && !m.nodeName(e, "html") && "static" === m.css(e, "position");) e = e.offsetParent;
                    return e || Xe
                }))
            }
        }), m.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var i = "pageYOffset" === t;
            m.fn[e] = function(r) {
                return V(this, (function(e, r, a) {
                    var o = Qe(e);
                    if (void 0 === a) return o ? o[t] : e[r];
                    o ? o.scrollTo(i ? n.pageXOffset : a, i ? a : n.pageYOffset) : e[r] = a
                }), e, r, arguments.length, null)
            }
        })), m.each(["top", "left"], (function(e, t) {
            m.cssHooks[t] = Re(f.pixelPosition, (function(e, n) {
                if (n) return n = Ce(e, t), Ie.test(n) ? m(e).position()[t] + "px" : n
            }))
        })), m.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            m.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(n, i) {
                m.fn[i] = function(i, r) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        o = n || (!0 === i || !0 === r ? "margin" : "border");
                    return V(this, (function(t, n, i) {
                        var r;
                        return m.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? m.css(t, n, o) : m.style(t, n, i, o)
                    }), t, a ? i : void 0, a, null)
                }
            }))
        })), void 0 === (i = function() {
            return m
        }.apply(t, [])) || (e.exports = i);
        var Je = n.nQuery,
            $e = n.$;
        return m.noConflict = function(e) {
            return n.$ === m && (n.$ = $e), e && n.nQuery === m && (n.nQuery = Je), m
        }, void 0 === r && (n.nQuery = n.$ = m), n.nQuery = m, m
    }, "object" == typeof e.exports ? e.exports = r.document ? a(r, !0) : function(e) {
        if (!e.document) throw new Error("nQuery requires a window with a document");
        return a(e)
    } : a(r)
}]);