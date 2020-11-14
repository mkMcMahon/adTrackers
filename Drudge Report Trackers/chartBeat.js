(function() {
    var l = void 0,
        m = true,
        n = null,
        o = false,
        p = this;

    function aa(a) {
        var b = typeof a;
        if (b == "object")
            if (a) {
                if (a instanceof Array) return "array";
                else if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if (c == "[object Window]") return "object";
                if (c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) return "array";
                if (c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if (b == "function" && typeof a.call == "undefined") return "object";
        return b
    };

    function ba(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }

    function ca() {}

    function da(a) {
        var b = [];
        s(new ca, a, b);
        return b.join("")
    }

    function s(a, b, c) {
        switch (typeof b) {
            case "string":
                ea(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (b == n) {
                    c.push("null");
                    break
                }
                if (aa(b) == "array") {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++) c.push(e), s(a, b[f], c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (e in b) Object.prototype.hasOwnProperty.call(b, e) && (f = b[e], typeof f != "function" && (c.push(d), ea(e, c), c.push(":"), s(a, f, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }
    var t = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\u0008": "\\b",
            "\u000c": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\u000b": "\\u000b"
        },
        fa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function ea(a, b) {
        b.push('"', a.replace(fa, function(a) {
            if (a in t) return t[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            b < 16 ? e += "000" : b < 256 ? e += "00" : b < 4096 && (e += "0");
            return t[a] = e + b.toString(16)
        }), '"')
    };

    function ga(a) {
        return window.btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function(a, c) {
            return String.fromCharCode("0x" + c)
        }))
    }

    function ha(a) {
        return decodeURIComponent(window.atob(a).split("").map(function(a) {
            return "%" + ("00" + a.charCodeAt(0).toString(16)).slice(-2)
        }).join(""))
    }

    function x(a, b, c) {
        var d = Array.prototype.slice,
            e = d.call(arguments, 2);
        return function() {
            return a.apply(b, e.concat(d.call(arguments)))
        }
    }

    function y(a) {
        return typeof a !== "undefined"
    }

    function A(a) {
        return typeof a === "string"
    }

    function B() {
        return (new Date).getTime()
    }

    function C(a, b) {
        if ((!!a && a.constructor === Object) === m)
            for (var c in a) {
                if (a.hasOwnProperty(c) && b(a[c], c) === o) break
            } else {
                c = 0;
                for (var d = a.length; c < d; c++)
                    if (b(a[c], c) === o) break
            }
    }

    function ia(a, b) {
        var c;
        a: {
            c = 0;
            for (var d = a.length; c < d; c++)
                if (b(a[c])) break a;c = -1
        }
        if (c > -1) return a[c]
    }
    var ja = p.setInterval,
        D = p.clearInterval,
        ka = p.setTimeout;

    function la(a) {
        ka(a, 0)
    }

    function ma() {
        var a = y(p.XDomainRequest);
        return y(p.XMLHttpRequest) && "withCredentials" in new p.XMLHttpRequest ? new p.XMLHttpRequest : a ? new p.XDomainRequest : n
    }

    function na(a, b, c) {
        var d = ma();
        d === n ? c(n) : (oa(function() {
            d.open("GET", a, m)
        }), d.onload = function() {
            d.responseText ? b(d) : c(d)
        }, d.onerror = function() {
            c(d, "onerror")
        }, d.timeout = 1E3, d.ontimeout = function() {
            c(d, "timeout")
        }, la(function() {
            oa(function() {
                d.send(n)
            })
        }))
    }

    function oa(a) {
        try {
            a()
        } catch (b) {}
    };

    function pa(a) {
        var b = {};
        a && (a.charAt(0) == "?" && (a = a.substring(1)), a = a.replace(/\+/g, " "), C(a.split(/[&;]/g), function(a) {
            a = a.split("=");
            b[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
        }));
        return b
    }

    function qa(a, b) {
        return !b ? m : a === "http:" && b === "80" || a === "https:" && b === "443"
    };

    function ra() {
        var a = E;
        C(document.getElementsByTagName("script"), function(b) {
            if (typeof b.src === "string" && b.src.match(/chartbeat.js/)) return b = pa(b.src.split("?")[1]), a.uid = a.uid || b.uid, a.domain = a.domain || b.domain, o
        })
    };
    var F = {};
    F.I = function(a) {
        try {
            F.create("_cb_test", "1", 1, a);
            var b = F.b("_cb_test");
            F.remove("_cb_test", a);
            return b === "1"
        } catch (c) {
            return o
        }
    };
    F.b = function(a) {
        a += "=";
        var b = "";
        C(document.cookie.split(";"), function(c) {
            for (; c.charAt(0) === " ";) c = c.substring(1, c.length);
            if (c.indexOf(a) === 0) return b = c.substring(a.length, c.length), o
        });
        return b
    };
    F.create = function(a, b, c, d) {
        var e = p._sf_async_config;
        if (e && e.noCookies) return "";
        e = new Date;
        e.setTime(B() + c * 1E3);
        a = a + "=" + b + ("; expires=" + e.toGMTString()) + ("; path=" + d);
        return document.cookie = a
    };
    F.remove = function(a, b) {
        return F.b(a) ? F.create(a, "", -86400, b) : ""
    };
    var G = {};
    G.a = function(a) {
        var b = p._sf_async_config;
        if (!a && b && b.noCookies) return n;
        if (G.a.p !== l) return G.a.p;
        var a = B() + "",
            c, d;
        try {
            if ((d = p.localStorage).setItem(a, a), c = d.getItem(a) === a, d.removeItem(a), c) return G.a.p = d
        } catch (e) {}
        return G.a.p = n
    };
    G.b = function(a) {
        var b = G.a();
        if (!b) return "";
        var c = b.getItem(a + "_expires");
        return c && (c = +c, !isNaN(c) && B() > c) ? (G.remove(a), "") : b.getItem(a) || ""
    };
    G.create = function(a, b, c) {
        var d = G.a();
        if (d) {
            var e = new Date;
            e.setTime(B() + c * 1E3);
            try {
                d.setItem(a, b), d.setItem(a + "_expires", e.getTime())
            } catch (f) {}
        }
    };
    G.remove = function(a) {
        var b = G.a();
        b && (b.removeItem(a), b.removeItem(a + "_expires"))
    };

    function H(a, b) {
        this.u = a || "";
        this.h = b || "/";
        this.W = G.a() !== n || F.I(this.h);
        this.U = o;
        sa(this)
    }

    function sa(a) {
        if (!F.b("_cb_ls")) {
            var b = G.a() !== n,
                c = F.b("_SUPERFLY_lockout");
            c && C(["", "_v_", "_p_"], function(b) {
                a.create(b + "_SUPERFLY_lockout", c, 600, m)
            });
            var d = F.b("_chartbeat3");
            d && (a.create("_v__chartbeat3", d, 34128E3, m), F.remove("_chartbeat3", a.h));
            b && ((b = F.b("_chartbeat2")) && a.create("_chartbeat2", b, 34128E3, m), (b = F.b("_chartbeat5")) && a.create("_chartbeat5", b, 60, m));
            F.create("_cb_ls", "1", 34128E3, a.h)
        }
    }
    H.prototype.create = function(a, b, c, d) {
        a = d ? a : this.u + a;
        (G.a() ? G : F).create(a, b, c, this.h);
        G.a() && F.create(a, b, c, this.h)
    };
    H.prototype.b = function(a, b) {
        var a = b ? a : this.u + a,
            c = (G.a() ? G : F).b(a);
        if (!c && G.a() && (c = F.b(a)) && F.b("_cb_ls")) {
            this.U = m;
            var d;
            switch (a) {
                case "_SUPERFLY_lockout":
                    d = 600;
                    break;
                case "_chartbeat4":
                    d = 60;
                    break;
                case "_cb_cp":
                    d = 60;
                    break;
                case "_chartbeat3":
                    d = 34128E3;
                    break;
                default:
                    d = 34128E3
            }
            G.create(a, c, d)
        }
        return c
    };
    H.prototype.remove = function(a, b) {
        a = b ? a : this.u + a;
        (G.a() ? G : F).remove(a, this.h);
        G.a() && F.remove(a, this.h)
    };

    function ta(a, b, c) {
        a.ownerDocument || (a = a.correspondingUseElement);
        if (!a || !a.ownerDocument) return n;
        var d = a.ownerDocument.documentElement,
            e = 0,
            f = y(c) ? c + 1 : -1;
        A(b) ? (b = b.toLowerCase(), c = function(a) {
            return (a = a.nodeName) && a.toLowerCase() === b
        }) : c = b;
        for (; a && a !== d && e !== f;) {
            if (c(a)) return a;
            a = a.parentNode;
            e++
        }
        return n
    }
    var I = function() {
        var a = /[ \r\n\t\f\u200B]+/g;
        return function(b) {
            return b && A(b) ? b.trim().replace(a, " ") : ""
        }
    }();

    function ua(a) {
        return a.nodeName && a.nodeName.toLowerCase() === "a" && (!a.namespaceURI || a.namespaceURI === "http://www.w3.org/1999/xhtml")
    }

    function va(a, b) {
        var c = a.children,
            d = c.length;
        if (!d) return a;
        for (var e = b !== l ? b : I(a.textContent), f = 0; f < d; f++)
            if (I(c[f].textContent) === e) return va(c[f], e) || a;
        return a
    }

    function J(a) {
        if (arguments.length == 0) throw new TypeError("`CSS.escape` requires an argument.");
        for (var b = String(a), c = b.length, d = -1, e, f = "", h = b.charCodeAt(0); ++d < c;) e = b.charCodeAt(d), f += e == 0 ? "\ufffd" : e >= 1 && e <= 31 || e == 127 || d == 0 && e >= 48 && e <= 57 || d == 1 && e >= 48 && e <= 57 && h == 45 ? "\\" + e.toString(16) + " " : d == 0 && c == 1 && e == 45 ? "\\" + b.charAt(d) : e >= 128 || e == 45 || e == 95 || e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 ? b.charAt(d) : "\\" + b.charAt(d);
        return f
    }

    function wa(a) {
        var b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            a = String(a);
        b.lastIndex = 0;
        b.test(a) && (a = a.replace(b, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return eval("(" + a + ")");
        throw new SyntaxError("JSON.parse");
    }

    function K(a, b) {
        do {
            for (var c = a, d = c.ownerDocument.querySelectorAll(b), e = d.length; --e >= 0 && d.item(e) !== c;);
            if (e > -1) return a;
            a = a.parentElement || a.parentNode
        } while (a !== n && a.nodeType === 1);
        return n
    };

    function xa() {
        var a = G.a(m);
        return !a ? o : !!a.getItem("_cb_ip")
    };
    var ya = "z";

    function L() {
        y(p._cb_shared) || (p._cb_shared = {});
        return p._cb_shared
    };

    function M(a, b) {
        var c = L(),
            c = (y(l) && !y(c.m) ? l : c.m) || [];
        c.push.apply(c, arguments);
        L().m = c
    };

    function za() {
        var a = Aa();
        if (a) {
            var b = a.href,
                a = {
                    hostname: "",
                    pathname: "",
                    search: "",
                    protocol: "",
                    port: "",
                    hash: ""
                };
            if (b) {
                var c = document.createElement("a"),
                    d = p.location;
                if (!/^https?:/.test(b) && b.indexOf("javascript:") !== 0 && b.indexOf("app:") < 0)
                    if (b.indexOf("//") === 0) b = d.protocol + b;
                    else if (b.indexOf("/") === 0) var e = qa(d.protocol, d.port) ? "" : d.port,
                    b = d.protocol + "//" + d.hostname + (e ? ":" + e : "") + b;
                else {
                    var e = document.baseURI || d.href,
                        f = e.indexOf("?");
                    f === -1 && (f = e.indexOf("#"));
                    if (f === -1) f = e.length;
                    f = e.lastIndexOf("/",
                        f);
                    b = f === -1 ? "/" + b : e.substr(0, f) + "/" + b
                }
                c.href = b;
                a.hostname = c.hostname;
                a.pathname = c.pathname;
                a.search = c.search;
                a.protocol = c.protocol;
                a.port = c.port;
                a.hash = c.hash;
                if (a.pathname.charAt(0) !== "/") a.pathname = "/" + a.pathname;
                if (a.hostname === "") a.hostname = d.hostname;
                if (a.protocol === "") a.protocol = d.protocol;
                if (a.protocol === "javascript:") a.pathname = "", a.hostname = "", a.port = "", a.hash = "";
                if (qa(a.protocol, a.port) || a.port === "0") a.port = ""
            }
        }
        return a
    }

    function Aa() {
        var a = n;
        C(document.getElementsByTagName("link"), function(b) {
            if (b.rel == "canonical") return a = b, o
        });
        return a
    }
    for (var Ba = {}, N = 0; N < 81; N++) Ba["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(N)] = m;

    function Ca(a, b) {
        if (a === "%") return "%25";
        var c = parseInt(b, 16);
        return Ba[c] ? String.fromCharCode(c) : "%" + b.toUpperCase()
    }

    function O(a) {
        if (!A(a)) return a;
        a = a.replace(/%([0-9A-Fa-f]{2})?/g, Ca);
        return a = a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g, encodeURIComponent)
    };

    function Da(a) {
        var b, c;
        b = a.domain;
        c = p.location.hostname && p.location.hostname.replace(/^www\./, "");
        b = (p.location.protocol === "http:" ? "http:" : "https:") + "//mab.chartbeat.com/mab_strategy/headline_testing/get_strategy/?host=" + encodeURIComponent(b) + "&domain=" + encodeURIComponent(c) + "&path=";
        (a = a.path) ? (a = a.replace(/.*:\/\//, "").replace(/^[^/]+\//, "/"), a = a.charAt(0) !== "/" ? "/" + a : a) : a = "/";
        return b + encodeURIComponent(a)
    }

    function Ea(a, b, c) {
        var d, e, f;
        na(a, function(a) {
            a = Fa(a.responseText);
            a = (a = ba(a)) && a.constructor === Object && A(a.status) && (a.data && a.data.constructor === Object || a.data === n) ? {
                P: a.status,
                i: a.data,
                X: a.code,
                Y: a.message
            } : n;
            if (a === n) c();
            else if (a.P === "success") {
                d = {};
                f = e = 0;
                if (a.i) a.i.experiments && (d = a.i.experiments), y(a.i.probability_is_lift) && (e = a.i.probability_is_lift), y(a.i.probability_is_control) && (f = a.i.probability_is_control);
                b(d, [e, f])
            } else c()
        }, c)
    }

    function Ga(a, b, c) {
        var d = [],
            e = b.e;
        if (e === "l" || e === "c") b = new Ha("lift_exp", "", "", b, e, "", "", ""), b.k = m, d.push(b);
        return d = d.concat(Ia(a, c, e))
    }

    function Ja(a, b) {
        var c = [new P("l", a[0], "", {}, "", {}, "", []), new P("c", a[1], "", {}, "", {}, "", []), new P("m", 1 - a[0] - a[1], "", {}, "", {}, "", [])];
        return Ka(c, b.lift_exp) || c[2]
    }

    function Ia(a, b, c) {
        var d = [];
        C(a, function(a, f) {
            var h = La(f, a, c, b[f]);
            y(h) && d.push(h)
        });
        return d
    }

    function La(a, b, c, d) {
        var e = b.location,
            f = b.specific_location,
            h = b.type,
            g, i, j = b.metadata;
        if (A(j) && j.length > 0 && ((j = wa(j)) && j.version == 2 && (g = j.sub_location), j && j.version == 3)) g = j.sub_location, i = j.initial_content;
        g = y(g) ? g : "";
        i = y(i) ? i : "";
        var k = [];
        C(b.variants, function(a, b) {
            var c = parseFloat(a.probability),
                e = a.content,
                d = a.metadata,
                f = {},
                i = "",
                g = {},
                h = "",
                j = [];
            if (A(d))(d = wa(d)) && d.image_source_sets_info && (f = d.image_source_sets_info || {}), d && d.image_alt_attribute && (i = d.image_alt_attribute), d && d.image_caption && (h =
                d.image_caption), d && d.current_image_source_info && (g = d.current_image_source_info || {}), d && d.crops && (j = d.crops || []);
            k.push(new P(b, c, e, f, i, g, h, j))
        });
        if (b = Ka(k, d && d.chosenVariant)) return new Ha(a, e, g, b, c, i, f, h)
    }

    function Ka(a, b) {
        var c;
        y(b) && (c = ia(a, function(a) {
            return a.e === b
        }));
        y(c) || (c = Ma(a));
        return c
    }

    function Ma(a) {
        var b = Math.random();
        return ia(a, function(a) {
            b -= a.R;
            return b < 0
        })
    }

    function Na(a, b, c) {
        var d = p.location.href,
            e = [encodeURIComponent(a), encodeURIComponent(d), b].join(",");
        C(c, function(a) {
            e += "," + [a.test.e, a.test.j.e, encodeURIComponent(a.f)].join(",")
        });
        return e
    }

    function Oa(a, b) {
        if (a === b) return m;
        for (var c = b.split("."), d = a.split("."); c.length;) {
            if (d.length === 0) return o;
            if (c.pop() !== d.pop()) return o
        }
        return m
    }

    function Pa() {
        var a = p.document.head || p.document.getElementsByTagName("head")[0],
            b = p.document.createElement("style");
        b.id = "chartbeat-flicker-control-style";
        b.type = "text/css";
        b.styleSheet ? b.styleSheet.cssText = "body { visibility: hidden !important; }" : b.appendChild(document.createTextNode("body { visibility: hidden !important; }"));
        a.appendChild(b)
    }

    function Qa() {
        return p.document.getElementById("chartbeat-flicker-control-style") || p.document.getElementById("chartbeat-body-hider")
    }

    function Ra() {
        var a = Qa();
        a && a.parentNode.removeChild(a)
    }

    function Ha(a, b, c, d, e, f, h, g) {
        this.e = a;
        this.n = b;
        this.f = h;
        this.v = c;
        this.j = d;
        this.t = e;
        this.k = o;
        this.anchors = [];
        this.O = f;
        this.type = g
    }

    function P(a, b, c, d, e, f, h, g) {
        this.e = a;
        this.R = b;
        this.content = c;
        this.A = d || {};
        this.M = e;
        this.L = f || {};
        this.N = h;
        this.K = g
    }

    function Sa(a) {
        var b = {};
        b.s = a.status;
        b.c = a.code;
        b.m = a.message;
        var c = n;
        if (a.data !== n) c = {}, c.s = a.data.T, c.g = a.data.t, c.m = a.data.Q;
        b.d = c;
        return b
    }

    function Ta(a) {
        if (p.document && p.document.body) a();
        else var b = ja(function() {
            p.document && p.document.body && (D(b), a())
        }, 50)
    }
    var Ua = /^[a-zA-Z0-9+/]*={0,2}$/;

    function Fa(a) {
        if (a && Ua.exec(a)) try {
            return ha(a)
        } catch (b) {}
        return a
    }

    function Va(a) {
        var b = a;
        b += String.fromCharCode(128);
        for (var a = [1518500249, 1859775393, 2400959708, 3395469782], c = 1732584193, d = 4023233417, e = 2562383102, f = 271733878, h = 3285377520, g = [], i, j, k, q, u, w = Math.ceil((b.length / 4 + 2) / 16), z = [w], v = 0, r; v < w; v++) {
            z[v] = [];
            for (i = 0; i < 16; i++) z[v][i] = b.charCodeAt(v * 64 + i * 4) << 24 | b.charCodeAt(v * 64 + i * 4 + 1) << 16 | b.charCodeAt(v * 64 + i * 4 + 2) << 8 | b.charCodeAt(v * 64 + i * 4 + 3)
        }
        v = (b.length - 1) * 8;
        b = w - 1;
        z[b][14] = Math.floor(v / Math.pow(2, 32));
        z[b][15] = v & 4294967295;
        for (v = 0; v < w; v++) {
            for (r = 0; r < 16; r++) g[r] =
                z[v][r];
            for (r = 16; r < 80; r++) g[r] = (g[r - 3] ^ g[r - 8] ^ g[r - 14] ^ g[r - 16]) << 1 | (g[r - 3] ^ g[r - 8] ^ g[r - 14] ^ g[r - 16]) >>> 31;
            b = c;
            i = d;
            j = e;
            k = f;
            q = h;
            for (r = 0; r < 80; r++) u = Math.floor(r / 20), u = (b << 5 | b >>> 27) + (u == 0 ? i & j ^ ~i & k : u == 1 ? i ^ j ^ k : u == 2 ? i & j ^ i & k ^ j & k : i ^ j ^ k) + q + a[u] + g[r] & 4294967295, q = k, k = j, j = i << 30 | i >>> 2, i = b, b = u;
            c = c + b & 4294967295;
            d = d + i & 4294967295;
            e = e + j & 4294967295;
            f = f + k & 4294967295;
            h = h + q & 4294967295
        }
        a = c;
        if (a == 0) a = "A";
        else {
            a >>>= 0;
            for (c = ""; a > 0;) d = a % 64, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d) + c, a >>>= 6;
            a = c
        }
        return a
    }

    function Wa() {
        var a = document.querySelectorAll(Q());
        C(a, function(a) {
            a = Array.prototype.slice.call(a.querySelectorAll("img"));
            C(a, function(a) {
                a.setAttribute("pinger-seen", "true");
                a.getAttribute("keep-hiding") !== "true" && a.classList.remove("cb-it-hide")
            })
        })
    }

    function Q() {
        var a = R.articleBlockSelector;
        return a ? a : "article, section"
    };

    function Xa(a, b) {
        for (var c = b || document.documentElement, d = [], e = n, f = a, h, g, i, j, k, q; f && f !== c;) {
            h = f.nodeName.toLowerCase();
            e = f;
            g = e.nodeName;
            if ((f = f.parentNode) && f !== document.documentElement) {
                i = f.children;
                j = 0;
                for (k = 0, q = i.length; k < q; k++) {
                    if (e === i[k]) {
                        h += "[" + (1 + k - j) + "]";
                        break
                    }
                    i[k].nodeName !== g && j++
                }
            }
            d.unshift(h)
        }
        return d.join("/")
    }
    var S = function() {
        function a(a, b, c) {
            b === "href" ? (a = a.href || "", c = c || "", a = a.replace(d, ""), c = c.replace(d, "")) : a = a.getAttribute(b);
            return a === c
        }
        var b = /^\*\[@id='(.+?)'\](?:\[@([a-z-]+)='(.*)'\])?$/,
            c = /^([a-z][a-z0-9-]*)\[(\d+)\](?:\[@([a-z-]+)='(.*)'\])?$/,
            d = /^http(s)?\:\/\//;
        return function(d, f) {
            var h = n;
            a: {
                for (var h = 0, g = d.indexOf("/"), i = d.indexOf("'"), j = []; g !== -1;)
                    if (i !== -1 && i < g) {
                        i = d.indexOf("'", i + 1);
                        if (i == -1) {
                            h = n;
                            break a
                        }
                        g = d.indexOf("/", i + 1);
                        i = d.indexOf("'", i + 1)
                    } else j.push(d.substring(h, g)), h = g + 1, g =
                        d.indexOf("/", h);h < d.length && j.push(d.substring(h, d.length));h = j
            }
            if (!h || h.length == 0) return f ? f : n;
            var k, q, u, w, z, i = h.shift();
            if (f) g = f;
            else {
                if (i === "body") g = document.body;
                else {
                    k = b.exec(i);
                    if (!k) return n;
                    g = document.getElementById(k[1]);
                    if (!g) return n;
                    q = k[2];
                    k = k[3];
                    if (q && !a(g, q, k)) return n
                }
                i = h.shift()
            }
            for (; y(i);) {
                k = c.exec(i);
                if (!k) return n;
                i = k[1];
                j = parseInt(k[2], 10);
                q = k[3];
                k = k[4];
                if (isNaN(j)) return n;
                u = g.children;
                z = u.length;
                if (z === 0) return n;
                for (w = 0; w < z; w++) {
                    if (u[w].nodeName && u[w].nodeName.toLowerCase() ===
                        i && (j--, j === 0)) {
                        g = u[w];
                        if (q && !a(g, q, k)) return n;
                        break
                    }
                    if (w === z - 1) return n
                }
                i = h.shift()
            }
            return g
        }
    }();

    function Ya(a) {
        if (!("querySelectorAll" in document)) return [];
        var b;
        b = /a\[@href='(.+?)'\sor\sstarts-with\(.+,\s?'(.+?)'\)\]/.exec(a);
        a = /^a\[@href='(.+?)'\]$/.exec(a);
        if (!b && !a) return n;
        b = document.querySelectorAll(b ? 'a[href="' + b[1] + '"],a[href^="' + b[2] + '"]' : 'a[href="' + a[1] + '"]');
        b.length < 1 && (b = n);
        return b ? Array.prototype.slice.call(b) : []
    }

    function Za(a) {
        var b = n,
            b = ta(a, function(a) {
                return a.id
            }),
            c = Xa(a, b);
        b && (c && (c = "/" + c), c = "*[@id='" + b.id + "']" + c);
        c += "[@href='" + a.href + "']";
        return c
    };

    function T(a) {
        this.r = a;
        this.o = [];
        var b = this.r,
            a = b.topStorageDomain,
            b = b.domain,
            c = p.location.hostname;
        this.V = a ? a : Oa(c, b) ? b : c.replace(/^www\./, "");
        this.H = new H("_t_", this.r.cookiePath || "/");
        this.l = U;
        a = ya;
        L()[a] = m
    }

    function $a(a) {
        if (!a.D) {
            a.D = m;
            var b = a.G,
                c = a.B,
                d = Fa(a.H.b("tests")),
                e = {};
            d.length > 0 && (e = ba(d));
            var f = Ja(c, e);
            a.o = Ga(b, f, e);
            var h = a.o,
                g = {
                    domain: "." + a.V,
                    C: 6E4,
                    path: "/"
                };
            a.q = function(a) {
                var b, a = a || window.event;
                if (b = !a ? n : ta(a.target || a.srcElement, ua, 10))
                    if (a = ab(b, h), a.length) {
                        var c;
                        if (b === n || typeof b === "undefined") c = "unknown";
                        else if (b.tagName === "A" && b.href) c = b.href;
                        c = Na(c, a[0].test.t, a);
                        a = (a = F.b("_chartbeat6")) ? a.split("::") : [];
                        a.length >= 10 && a.splice(0, a.length - 10 + 1);
                        a.push(c);
                        c = "_chartbeat6=" + a.join("::");
                        a = "";
                        g && g.constructor === Object && (g.C && (b = new Date, b.setTime(b.getTime() + g.C), a += "; expires=" + b.toGMTString()), g.domain && (a += "; domain=" + g.domain), g.path && (a += "; path=" + g.path));
                        document.cookie = c + a
                    }
            };
            a = x(function() {
                var a = this.q,
                    b = p.document.body;
                b.addEventListener ? b.addEventListener("click", a, m) : b.attachEvent && b.attachEvent("onclick", a);
                bb(this, h, f.e)
            }, a);
            Ta(a)
        }
    }

    function bb(a, b, c) {
        var d = B(),
            e = x(function() {
                var a = B() - d >= 5E3,
                    e = p.document.readyState === "complete" || p.document.readyState !== "loading" && !p.document.documentElement.doScroll,
                    g;
                a || (g = cb(b, c));
                if (a || g || e) D(this.w), db(this)
            }, a);
        a.w = ja(e, 50);
        e()
    }

    function db(a) {
        Ra();
        var b = {},
            c = [],
            d = [],
            e = o,
            f = "m";
        C(a.o, function(a) {
            if (a.e === "lift_exp") f = a.j.e;
            if (a.k) {
                e = m;
                var h = [];
                C(a.anchors, function(a) {
                    h.push(a.f)
                });
                b[a.e] = {
                    chosenVariant: a.j.e,
                    specificLocation: h
                }
            } else a.J ? d.push(a.e) : c.push(a.e)
        });
        if (e) b.lift_exp = f, a.H.create("tests", ga(da(b)), 3600), f === "m" && delete b.lift_exp;
        var h = {
            status: eb,
            data: n,
            code: l,
            message: l
        };
        a.l !== U ? (h.status = fb, h.code = a.l) : (a = {
            T: b,
            t: f,
            Q: c,
            Z: d
        }, h.status = gb, h.data = a);
        M(["t", Sa(h)])
    }

    function hb(a) {
        var b = a.r;
        M(["ev", function() {
            a.terminate()
        }]);
        M(["sv", function() {
            ib(a, b)
        }])
    }
    T.prototype.S = function(a) {
        if (Object.prototype.toString.call(a) === "[object Array]" && A(a[0]) && a[0] === "readyForTesting") a[1] ? $a(this) : this.F = o
    };

    function jb(a) {
        a.l = kb;
        db(a)
    }

    function lb(a) {
        a.l = mb;
        db(a)
    }
    T.prototype.terminate = function() {
        this.l = U;
        var a = this.q,
            b = p.document.body;
        b.removeEventListener ? b.removeEventListener("click", a, m) : b.detachEvent && b.detachEvent("onclick", a);
        this.q = l;
        D(this.w);
        this.w = n;
        this.o = [];
        this.B = this.G = n;
        this.D = o
    };

    function ib(a, b) {
        hb(a);
        if (xa()) jb(a);
        else if ("srcset" in document.createElement("img")) {
            var c = Da(b);
            if (y(c)) y(b.flickerControl) || (b.flickerControl = m), b.flickerControl && (ka(Ra, 1E3), Qa() || Pa()), Ea(c, function(b, c) {
                a: {
                    var f = p.chartbeatFlicker;
                    if (f) {
                        if (f.timeoutFlag) break a;
                        f.strategyFetched = m
                    }
                    a.G = b;a.B = c;a.F = m;
                    for (var f = x(a.S, a), h = p._cbm || []; h.length;) f(h.shift());p._cbm = {
                        push: f
                    };a.F && $a(a)
                }
            }, function() {})
        } else lb(a)
    }

    function cb(a, b) {
        var c = [];
        C(a, function(a, d) {
            c.push(o);
            if (a.k) c[d] = m;
            else if (!a.f || a.f === a.n) {
                var h = S(a.n);
                if (h) var g = S(a.v, h);
                if (h && g) c[d] = m, b !== "c" && nb(g, a), a.anchors = [{
                    element: h,
                    f: Va(a.n)
                }], a.k = m
            } else {
                a.anchors = [];
                var i = a.O;
                if ((h = Ya(a.n)) && h.length > 0) {
                    var g = a.type.indexOf("image") >= 0,
                        j = o;
                    g && C(h, function(b) {
                        b && (b = S(a.v, b), j = j || ob(b, a))
                    });
                    g && !j ? a.J = m : C(h, function(h) {
                        if (h) var g = S(a.v, h);
                        var j;
                        g && (j = I(g.textContent), j == i ? va(g, j) != g && (g = n) : g = n);
                        if (h && g) c[d] = m, b !== "c" && nb(g, a), a.anchors.push({
                            element: h,
                            f: Va(Za(h))
                        }), a.k = m
                    })
                }
            }
        });
        Wa();
        var d = document.getElementById("chartbeat-flicker-control-style-ht");
        d && d.parentNode.removeChild(d);
        return c.indexOf(o) === -1
    }

    function ab(a, b) {
        var c = [],
            d = n,
            e = 101,
            f = o;
        C(b, function(b) {
            !f && !b.z && C(b.anchors, function(c) {
                if (!f)
                    if (c.element === a) d = {
                        test: b,
                        f: c.f
                    }, f = m;
                    else if (c.element.href === a.href) {
                    var i;
                    var j = c.element.getBoundingClientRect(),
                        k = a.getBoundingClientRect();
                    j.right - j.left > 0 && j.bottom - j.top > 0 && k.right - k.left > 0 && k.bottom - k.top > 0 ? (i = Math.max(j.left, k.left) - Math.min(j.right, k.right), j = Math.max(j.top, k.top) - Math.min(j.bottom, k.bottom), i = i <= 0 ? Math.max(j, 0) : j <= 0 ? i : Math.sqrt(i * i + j * j)) : i = l;
                    i < e && (d = {
                        test: b,
                        f: c.f
                    }, e = i)
                }
            })
        });
        d && c.push(d);
        return c
    }

    function ob(a, b) {
        var c = o,
            d = K(a, Q()),
            e = R.lazyLoadSrcsetAttribute || "data-srcset",
            f = b.j.A;
        d && C(Object.keys(f), function(a) {
            var b = d.querySelectorAll('[srcset="' + J(a) + '"]'),
                f = d.querySelectorAll("[" + e + ' = "' + J(a) + '"]'),
                a = d.querySelectorAll('[src="' + J(a) + '"]');
            if (b || f || a) c = m
        });
        return c
    }

    function nb(a, b) {
        var c = b.j,
            d = c.content,
            e = c.A,
            f = c.M,
            h = c.L,
            g = c.N,
            i = c.K,
            c = b.type;
        if ("textContent" in document.createElement("b") && a.textContent.trim())
            if (c.indexOf("image") < 0 || !e || !Object.keys(e).length || !h || !Object.keys(h).length) a.textContent = d;
            else {
                var j = R.lazyLoadSrcsetAttribute || "data-srcset";
                b.z = m;
                C(Object.keys(e), function(c) {
                    var q = e[c];
                    if (q && !isNaN(q.width) && !isNaN(q.height) && !isNaN(h.width) && !isNaN(h.height)) {
                        var u;
                        i && i.length > 1 ? C(i, function(a) {
                            Math.abs(a.width / a.height - q.width / q.height) < 0.015 &&
                                (u = a.newSrcSet || a.src)
                        }) : Math.abs(h.width / h.height - q.width / q.height) < 0.015 && (u = q.newSrcSet || q.src);
                        var w = K(a, Q());
                        if (u && w) {
                            var z = w.querySelectorAll('[srcset="' + J(c) + '"]'),
                                v = w.querySelectorAll("[" + j + ' = "' + J(c) + '"]'),
                                c = w.querySelectorAll('[src="' + J(c) + '"]');
                            Array.prototype.forEach.call(z, function(a) {
                                pb(a, "srcset", u, g, f);
                                qb(a)
                            });
                            Array.prototype.forEach.call(v, function(a) {
                                pb(a, j, u, g, f);
                                a = a.parentNode.querySelector("img");
                                rb(a)
                            });
                            Array.prototype.forEach.call(c, function(a) {
                                pb(a, "src", u, g, f);
                                qb(a)
                            });
                            if (z ||
                                v || c) a.textContent = d, b.z = o
                        }
                    }
                })
            }
    }

    function pb(a, b, c, d, e) {
        var f = a.parentNode.querySelector("img"),
            h = Q(),
            g = a.parentNode.querySelector("img");
        a.setAttribute(b, c);
        g.setAttribute("alt", e);
        if (a = K(a, h))
            if (a = a.querySelector("figcaption")) a.innerHTML = d;
        f.setAttribute("keep-hiding", "true")
    }

    function qb(a) {
        var b = a.parentNode.querySelector("img");
        b.classList.add("cb-it-hide");
        b.addEventListener("load", function() {
            rb(b)
        })
    }

    function rb(a) {
        a.classList.remove("cb-it-hide");
        a.removeAttribute("keep-hiding");
        a.removeAttribute("pinger-seen")
    }
    var U = 0,
        kb = 2,
        mb = 4,
        gb = "s",
        fb = "e",
        eb = "f";
    if (!F.b("cb_optout")) {
        var R = p._sf_async_config,
            E = R;
        ra();
        var sb = !!E.useCanonical,
            tb;
        a: {
            if (E.useCanonicalDomain && sb) {
                var ub, vb = za();
                if (ub = !vb ? vb : vb.hostname) {
                    tb = ub;
                    break a
                }
            }
            tb = p.location.hostname
        }
        E.title = E.title || document.title;
        E.domain = E.domain || tb;
        var wb = E,
            V;
        if (E.path) V = O(E.path);
        else a: {
            var W = n;
            if (sb) {
                var X = za();
                if (W = !X ? X : O(X.pathname) + X.search + X.hash) {
                    V = W;
                    break a
                }
            }
            var xb = p.location,
                W = O(xb.pathname),
                Y = xb.search || "",
                Y = Y.replace(/PHPSESSID=[^&]+/, ""),
                Z = /&utm_[^=]+=[^&]+/ig,
                $ = Z.exec(xb.search);$ && (Y =
                Y.replace(Z, ""));Z = /\?utm_[^=]+=[^&]+(.*)/i;
            ($ = Z.exec(Y)) && (Y = Y.replace(Z, $[1] != "" ? "?" + $[1] : ""));V = W + Y
        }
        wb.path = V;
        E.domain = E.domain && E.domain.replace(/^www\./, "");
        if ("textContent" in document.createElement("b") && "querySelectorAll" in document && "atob" in window && "btoa" in window) {
            var yb = new T(R);
            ib(yb, R)
        }
    };
})();