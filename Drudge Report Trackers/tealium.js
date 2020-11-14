//tealium universal tag - utag.loader ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
var utag_condload = false;
window.__tealium_twc_switch = false;
try {
    var pages = ["story", "blogs", "tipsheets", "newsletter"];
    if (pages.indexOf(utag_data.page_type) > -1) {
        var useSSL = 'https:' == document.location.protocol;
        var rootURL = (useSSL ? 'https://usasync01.admantx.com' : 'http://async-lb-2129785755.us-east-1.elb.amazonaws.com');
        var admantx_url = rootURL + '/admantx/service?request=' + escape('{"decorator":"template.politico","key":"821cd7dccbf73aa71c486ecbb4b909f9c3782ab51161515edeb9cc21efd18478","method":"descriptor","filter":["default"],"mode":"async","type":"URL","body":"' + escape(document.location.href) + '"}');
        window.admantx1 = '';
        window.admantx2 = '';

        function admantx_callback(data) {
            if (data && data.admants) {
                if (data.status == "OK") {
                    if (data.admants.length > 0) {
                        for (var x = 0; x < data.admants.length; x++) {
                            window.admantx1 += ',' + data.admants[x];
                            window.admants = data.admants
                        }
                        window.admantx1 = window.admantx1.substr(1);
                    }
                    if (data.categories.length > 0) {
                        for (var x = 0; x < data.categories.length; x++) {
                            window.admantx2 += ',' + data.categories[x];
                        }
                        window.admantx2 = admantx2.substr(1);
                    }
                } else {
                    window.admantx1 = 'none';
                    window.admantx2 = 'none';
                }
            }
        }
        (function(a, b, c, d) {
            a = admantx_url;
            b = document;
            c = 'script';
            d = b.createElement(c);
            d.src = a;
            d.type = 'text/java' + c;
            d.async = true;
            a = b.getElementsByTagName(c)[0];
            a.parentNode.insertBefore(d, a);
        })();
    }
} catch (e) {};
if (typeof utag == "undefined" && !utag_condload) {
    var utag = {
        id: "politico.main",
        o: {},
        sender: {},
        send: {},
        rpt: {
            ts: {
                a: new Date()
            }
        },
        dbi: [],
        db_log: [],
        loader: {
            q: [],
            lc: 0,
            f: {},
            p: 0,
            ol: 0,
            wq: [],
            lq: [],
            bq: {},
            bk: {},
            rf: 0,
            ri: 0,
            rp: 0,
            rq: [],
            ready_q: [],
            sendq: {
                "pending": 0
            },
            run_ready_q: function() {
                for (var i = 0; i < utag.loader.ready_q.length; i++) {
                    utag.DB("READY_Q:" + i);
                    try {
                        utag.loader.ready_q[i]()
                    } catch (e) {
                        utag.DB(e)
                    };
                }
            },
            lh: function(a, b, c) {
                a = "" + location.hostname;
                b = a.split(".");
                c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
                return b.splice(b.length - c, c).join(".");
            },
            WQ: function(a, b, c, d, g) {
                utag.DB('WQ:' + utag.loader.wq.length);
                try {
                    if (utag.udoname && utag.udoname.indexOf(".") < 0) {
                        utag.ut.merge(utag.data, window[utag.udoname], 0);
                    }
                    if (utag.cfg.load_rules_at_wait) {
                        utag.handler.LR(utag.data);
                    }
                } catch (e) {
                    utag.DB(e)
                };
                d = 0;
                g = [];
                for (a = 0; a < utag.loader.wq.length; a++) {
                    b = utag.loader.wq[a];
                    b.load = utag.loader.cfg[b.id].load;
                    if (b.load == 4) {
                        this.f[b.id] = 0;
                        utag.loader.LOAD(b.id)
                    } else if (b.load > 0) {
                        g.push(b);
                        d++;
                    } else {
                        this.f[b.id] = 1;
                    }
                }
                for (a = 0; a < g.length; a++) {
                    utag.loader.AS(g[a]);
                }
                if (d == 0) {
                    utag.loader.END();
                }
            },
            AS: function(a, b, c, d) {
                utag.send[a.id] = a;
                if (typeof a.src == 'undefined') {
                    a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
                }
                a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v ? utag.cfg.template + a.v : utag.cfg.v);
                utag.rpt['l_' + a.id] = a.src;
                b = document;
                this.f[a.id] = 0;
                if (a.load == 2) {
                    utag.DB("Attach sync: " + a.src);
                    a.uid = a.id;
                    b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
                    if (typeof a.cb != 'undefined') a.cb();
                } else if (a.load == 1 || a.load == 3) {
                    if (b.createElement) {
                        c = 'utag_politico.main_' + a.id;
                        if (!b.getElementById(c)) {
                            d = {
                                src: a.src,
                                id: c,
                                uid: a.id,
                                loc: a.loc
                            }
                            if (a.load == 3) {
                                d.type = "iframe"
                            };
                            if (typeof a.cb != 'undefined') d.cb = a.cb;
                            utag.ut.loader(d);
                        }
                    }
                }
            },
            GV: function(a, b, c) {
                b = {};
                for (c in a) {
                    if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
                }
                return b
            },
            OU: function(tid, tcat, a, b, c, d, f, g) {
                g = {};
                utag.loader.RDcp(g);
                try {
                    if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
                        c = utag.loader.cfg;
                        a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
                        for (d = 0; d < a.length; d++) {
                            b = a[d].split(':');
                            if (b[1] * 1 !== 0) {
                                if (b[0].indexOf('c') == 0) {
                                    for (f in utag.loader.GV(c)) {
                                        if (c[f].tcat == b[0].substring(1)) c[f].load = 0;
                                        if (c[f].tid == tid && c[f].tcat == b[0].substring(1)) return true;
                                    }
                                    if (tcat == b[0].substring(1)) return true;
                                } else if (b[0] * 1 == 0) {
                                    utag.cfg.nocookie = true
                                } else {
                                    for (f in utag.loader.GV(c)) {
                                        if (c[f].tid == b[0]) c[f].load = 0
                                    }
                                    if (tid == b[0]) return true;
                                }
                            }
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
                return false;
            },
            RDdom: function(o) {
                var d = document || {},
                    l = location || {};
                o["dom.referrer"] = d.referrer;
                o["dom.title"] = "" + d.title;
                o["dom.domain"] = "" + l.hostname;
                o["dom.query_string"] = ("" + l.search).substring(1);
                o["dom.hash"] = ("" + l.hash).substring(1);
                o["dom.url"] = "" + d.URL;
                o["dom.pathname"] = "" + l.pathname;
                o["dom.viewport_height"] = window.innerHeight || (d.documentElement ? d.documentElement.clientHeight : 960);
                o["dom.viewport_width"] = window.innerWidth || (d.documentElement ? d.documentElement.clientWidth : 960);
            },
            RDcp: function(o, b, c, d) {
                b = utag.loader.RC();
                for (d in b) {
                    if (d.match(/utag_(.*)/)) {
                        for (c in utag.loader.GV(b[d])) {
                            o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
                        }
                    }
                }
                for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
                    if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
                }
            },
            RDqp: function(o, a, b, c) {
                a = location.search + (location.hash + '').replace("#", "&");
                if (utag.cfg.lowerqp) {
                    a = a.toLowerCase()
                };
                if (a.length > 1) {
                    b = a.substring(1).split('&');
                    for (a = 0; a < b.length; a++) {
                        c = b[a].split("=");
                        if (c.length > 1) {
                            o["qp." + c[0]] = utag.ut.decode(c[1])
                        }
                    }
                }
            },
            RDmeta: function(o, a, b, h) {
                a = document.getElementsByTagName("meta");
                for (b = 0; b < a.length; b++) {
                    try {
                        h = a[b].name || a[b].getAttribute("property") || "";
                    } catch (e) {
                        h = "";
                        utag.DB(e)
                    };
                    if (utag.cfg.lowermeta) {
                        h = h.toLowerCase()
                    };
                    if (h != "") {
                        o["meta." + h] = a[b].content
                    }
                }
            },
            RDva: function(o) {
                var readAttr = function(o, l) {
                    var a = "",
                        b;
                    a = localStorage.getItem(l);
                    if (!a || a == "{}") return;
                    b = utag.ut.flatten({
                        va: JSON.parse(a)
                    });
                    utag.ut.merge(o, b, 1);
                }
                try {
                    readAttr(o, "tealium_va");
                    readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"]);
                } catch (e) {
                    utag.DB(e)
                }
            },
            RDut: function(o, a) {
                var t = {};
                var d = new Date();
                var m = (utag.ut.typeOf(d.toISOString) == "function");
                o["ut.domain"] = utag.cfg.domain;
                o["ut.version"] = utag.cfg.v;
                t["tealium_event"] = o["ut.event"] = a || "view";
                t["tealium_visitor_id"] = o["ut.visitor_id"] = o["cp.utag_main_v_id"];
                t["tealium_session_id"] = o["ut.session_id"] = o["cp.utag_main_ses_id"];
                t["tealium_session_number"] = o["cp.utag_main__sn"];
                t["tealium_session_event_number"] = o["cp.utag_main__se"];
                try {
                    t["tealium_datasource"] = utag.cfg.datasource;
                    t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
                    t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
                    t["tealium_environment"] = o["ut.env"] = utag.cfg.path.split("/")[6];
                } catch (e) {
                    utag.DB(e)
                }
                t["tealium_random"] = Math.random().toFixed(16).substring(2);
                t["tealium_library_name"] = "ut" + "ag.js";
                t["tealium_library_version"] = (utag.cfg.template + "0").substring(2);
                t["tealium_timestamp_epoch"] = Math.floor(d.getTime() / 1000);
                t["tealium_timestamp_utc"] = (m ? d.toISOString() : "");
                d.setHours(d.getHours() - (d.getTimezoneOffset() / 60));
                t["tealium_timestamp_local"] = (m ? d.toISOString().replace("Z", "") : "");
                utag.ut.merge(o, t, 0);
            },
            RDses: function(o, a, c) {
                a = (new Date()).getTime();
                c = (a + parseInt(utag.cfg.session_timeout)) + "";
                if (!o["cp.utag_main_ses_id"]) {
                    o["cp.utag_main_ses_id"] = a + "";
                    o["cp.utag_main__ss"] = "1";
                    o["cp.utag_main__se"] = "1";
                    o["cp.utag_main__sn"] = (1 + parseInt(o["cp.utag_main__sn"] || 0)) + "";
                } else {
                    o["cp.utag_main__ss"] = "0";
                    o["cp.utag_main__se"] = (1 + parseInt(o["cp.utag_main__se"] || 0)) + "";
                }
                o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
                o["cp.utag_main__st"] = c;
                utag.loader.SC("utag_main", {
                    "_sn": (o["cp.utag_main__sn"] || 1),
                    "_se": o["cp.utag_main__se"],
                    "_ss": o["cp.utag_main__ss"],
                    "_st": c,
                    "ses_id": (o["cp.utag_main_ses_id"] || a) + ";exp-session",
                    "_pn": o["cp.utag_main__pn"] + ";exp-session"
                });
            },
            RDpv: function(o) {
                if (typeof utag.pagevars == "function") {
                    utag.DB("Read page variables");
                    utag.pagevars(o);
                }
            },
            RD: function(o, a) {
                utag.DB("utag.loader.RD");
                utag.DB(o);
                utag.loader.RDcp(o);
                if (!utag.loader.rd_flag) {
                    utag.loader.rd_flag = 1;
                    o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
                    o["cp.utag_main__pn"] = (1 + parseInt(o["cp.utag_main__pn"] || 0)) + "";
                    utag.loader.SC("utag_main", {
                        "v_id": o["cp.utag_main_v_id"]
                    });
                    utag.loader.RDses(o);
                }
                if (a && !utag.cfg.noview) utag.loader.RDses(o);
                utag.loader.RDqp(o);
                utag.loader.RDmeta(o);
                utag.loader.RDdom(o);
                utag.loader.RDut(o, a || "view");
                utag.loader.RDpv(o);
                utag.loader.RDva(o);
            },
            RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
                o = {};
                b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
                r = /^(.*?)=(.*)$/;
                s = /^(.*);exp-(.*)$/;
                t = (new Date()).getTime();
                for (c = 0; c < b.length; c++) {
                    if (b[c].match(r)) {
                        ck = RegExp.$1;
                        cv = RegExp.$2;
                    }
                    e = utag.ut.decode(cv);
                    if (typeof ck != "undefined") {
                        if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
                            e = cv.split("$");
                            g = [];
                            j = {};
                            for (f = 0; f < e.length; f++) {
                                try {
                                    g = e[f].split(":");
                                    if (g.length > 2) {
                                        g[1] = g.slice(1).join(":");
                                    }
                                    v = "";
                                    if (("" + g[1]).indexOf("~") == 0) {
                                        h = g[1].substring(1).split("|");
                                        for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                                        v = h
                                    } else v = utag.ut.decode(g[1]);
                                    j[g[0]] = v;
                                } catch (er) {
                                    utag.DB(er)
                                };
                            }
                            o[ck] = {};
                            for (f in utag.loader.GV(j)) {
                                if (j[f] instanceof Array) {
                                    n = [];
                                    for (m = 0; m < j[f].length; m++) {
                                        if (j[f][m].match(s)) {
                                            k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                            if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                                        }
                                    }
                                    j[f] = n.join("|");
                                } else {
                                    j[f] = "" + j[f];
                                    if (j[f].match(s)) {
                                        k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                        j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                                    }
                                }
                                if (j[f]) o[ck][f] = j[f];
                            }
                        } else if (utag.cl[ck] || utag.cl['_all_']) {
                            o[ck] = e
                        }
                    }
                }
                return (a) ? (o[a] ? o[a] : {}) : o;
            },
            SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
                if (!a) return 0;
                if (a == "utag_main" && utag.cfg.nocookie) return 0;
                v = "";
                var date = new Date();
                var exp = new Date();
                exp.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
                x = exp.toGMTString();
                if (c && c == "da") {
                    x = "Thu, 31 Dec 2009 00:00:00 GMT";
                } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
                    if (typeof b != "object") {
                        v = b
                    }
                } else {
                    d = utag.loader.RC(a, 0);
                    for (e in utag.loader.GV(b)) {
                        f = "" + b[e];
                        if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
                            g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
                            if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
                            f = RegExp.$1 + ";exp-" + g;
                        }
                        if (c == "i") {
                            if (d[e] == null) d[e] = f;
                        } else if (c == "d") delete d[e];
                        else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
                        else if (c == "ap" || c == "au") {
                            if (d[e] == null) d[e] = f;
                            else {
                                if (d[e].indexOf("|") > 0) {
                                    d[e] = d[e].split("|")
                                }
                                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                                g.push(f);
                                if (c == "au") {
                                    h = {};
                                    k = {};
                                    for (i = 0; i < g.length; i++) {
                                        if (g[i].match(/^(.*);exp-(.*)$/)) {
                                            j = RegExp.$1;
                                        }
                                        if (typeof k[j] == "undefined") {
                                            k[j] = 1;
                                            h[g[i]] = 1;
                                        }
                                    }
                                    g = [];
                                    for (i in utag.loader.GV(h)) {
                                        g.push(i);
                                    }
                                }
                                d[e] = g
                            }
                        } else d[e] = f;
                    }
                    h = new Array();
                    for (g in utag.loader.GV(d)) {
                        if (d[g] instanceof Array) {
                            for (c = 0; c < d[g].length; c++) {
                                d[g][c] = encodeURIComponent(d[g][c])
                            }
                            h.push(g + ":~" + d[g].join("|"))
                        } else h.push((g + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(d[g]))
                    }
                    if (h.length == 0) {
                        h.push("");
                        x = ""
                    }
                    v = (h.join("$"));
                }
                document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
                return 1
            },
            LOAD: function(a, b, c, d) {
                if (!utag.loader.cfg) {
                    return
                }
                if (this.ol == 0) {
                    if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
                        this.f[a] = 1;
                        delete utag.loader.bq[a];
                    }
                    for (b in utag.loader.GV(utag.loader.bq)) {
                        if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
                            utag.loader.bk[a] = 1;
                            utag.DB("blocked: " + a);
                        }
                        utag.DB("blocking: " + b);
                        return;
                    }
                    utag.loader.INIT();
                    return;
                }
                utag.DB('utag.loader.LOAD:' + a);
                if (this.f[a] == 0) {
                    this.f[a] = 1;
                    if (utag.cfg.noview != true) {
                        if (utag.loader.cfg[a].send) {
                            utag.DB("SENDING: " + a);
                            try {
                                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                                    utag.DB("utag.loader.LOAD:sendq: " + a);
                                    while (d = utag.loader.sendq[a].shift()) {
                                        utag.DB(d);
                                        utag.sender[a].send(d.event, utag.handler.C(d.data));
                                        utag.loader.sendq.pending--;
                                    }
                                } else {
                                    utag.sender[a].send('view', utag.handler.C(utag.data));
                                }
                                utag.rpt['s_' + a] = 0;
                            } catch (e) {
                                utag.DB(e);
                                utag.rpt['s_' + a] = 1;
                            }
                        }
                    }
                    if (utag.loader.rf == 0) return;
                    for (b in utag.loader.GV(this.f)) {
                        if (this.f[b] == 0 || this.f[b] == 2) return
                    }
                    utag.loader.END();
                }
            },
            EV: function(a, b, c, d) {
                if (b == "ready") {
                    if (!utag.data) {
                        try {
                            utag.cl = {
                                '_all_': 1
                            };
                            utag.loader.initdata();
                            utag.loader.RD(utag.data);
                        } catch (e) {
                            utag.DB(e)
                        };
                    }
                    if ((document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading") setTimeout(c, 1);
                    else {
                        utag.loader.ready_q.push(c);
                        var RH;
                        if (utag.loader.ready_q.length <= 1) {
                            if (document.addEventListener) {
                                RH = function() {
                                    document.removeEventListener("DOMContentLoaded", RH, false);
                                    utag.loader.run_ready_q()
                                };
                                if (!utag.cfg.dom_complete) document.addEventListener("DOMContentLoaded", RH, false);
                                window.addEventListener("load", utag.loader.run_ready_q, false);
                            } else if (document.attachEvent) {
                                RH = function() {
                                    if (document.readyState === "complete") {
                                        document.detachEvent("onreadystatechange", RH);
                                        utag.loader.run_ready_q()
                                    }
                                };
                                document.attachEvent("onreadystatechange", RH);
                                window.attachEvent("onload", utag.loader.run_ready_q);
                            }
                        }
                    }
                } else {
                    if (a.addEventListener) {
                        a.addEventListener(b, c, false)
                    } else if (a.attachEvent) {
                        a.attachEvent(((d == 1) ? "" : "on") + b, c)
                    }
                }
            },
            END: function(b, c, d, e, v, w) {
                if (this.ended) {
                    return
                };
                this.ended = 1;
                utag.DB("loader.END");
                b = utag.data;
                if (utag.handler.base && utag.handler.base != '*') {
                    e = utag.handler.base.split(",");
                    for (d = 0; d < e.length; d++) {
                        if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
                    }
                } else if (utag.handler.base == '*') {
                    utag.ut.merge(utag.handler.df, b, 1);
                }
                utag.rpt['r_0'] = "t";
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
                utag.rpt.ts['s'] = new Date();
                v = utag.cfg.path;
                w = v.indexOf(".tiqcdn.");
                if (w > 0 && b["cp.utag_main__ss"] == 1 && !utag.cfg.no_session_count) utag.ut.loader({
                    src: v.substring(0, v.indexOf("/ut" + "ag/") + 6) + "tiqapp/ut" + "ag.v.js?a=" + utag.cfg.utid + (utag.cfg.nocookie ? "&nocookie=1" : "&cb=" + (new Date).getTime()),
                    id: "tiqapp"
                })
                if (utag.cfg.noview != true) utag.handler.RE('view', b, "end");
                utag.handler.INIT();
            }
        },
        DB: function(a, b) {
            if (utag.cfg.utagdb === false) {
                return;
            } else if (typeof utag.cfg.utagdb == "undefined") {
                b = document.cookie + '';
                utag.cfg.utagdb = ((b.indexOf('utagdb=true') >= 0) ? true : false);
            }
            if (utag.cfg.utagdb === true) {
                var t;
                if (utag.ut.typeOf(a) == "object") {
                    t = utag.handler.C(a)
                } else {
                    t = a
                }
                utag.db_log.push(t);
                try {
                    if (!utag.cfg.noconsole) console.log(t)
                } catch (e) {}
            }
        },
        RP: function(a, b, c) {
            if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
                b = [];
                for (c in utag.loader.GV(a)) {
                    if (c != 'src') b.push(c + '=' + escape(a[c]))
                }
                this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
            }
        },
        view: function(a, c, d) {
            return this.track({
                event: 'view',
                data: a || {},
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        link: function(a, c, d) {
            return this.track({
                event: 'link',
                data: a || {},
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        track: function(a, b, c, d, e) {
            a = a || {};
            if (typeof a == "string") {
                a = {
                    event: a,
                    data: b || {},
                    cfg: {
                        cb: c,
                        uids: d
                    }
                }
            }
            for (e in utag.loader.GV(utag.o)) {
                utag.o[e].handler.trigger(a.event || "view", a.data || a, a.cfg || {
                    cb: b,
                    uids: c
                })
            }
            a.cfg = a.cfg || {
                cb: b
            };
            if (typeof a.cfg.cb == "function") a.cfg.cb();
            return true
        },
        handler: {
            base: "",
            df: {},
            o: {},
            send: {},
            iflag: 0,
            INIT: function(a, b, c) {
                utag.DB('utag.handler.INIT');
                if (utag.initcatch) {
                    utag.initcatch = 0;
                    return
                }
                this.iflag = 1;
                a = utag.loader.q.length;
                if (a > 0) {
                    utag.DB("Loader queue");
                    for (b = 0; b < a; b++) {
                        c = utag.loader.q[b];
                        utag.handler.trigger(c.a, c.b, c.c)
                    }
                }
            },
            test: function() {
                return 1
            },
            LR: function(b) {
                utag.DB("Load Rules");
                for (var d in utag.loader.GV(utag.cond)) {
                    utag.cond[d] = false;
                }
                utag.DB(b);
                utag.loader.loadrules(b);
                utag.DB(utag.cond);
                utag.loader.initcfg();
                utag.loader.OU();
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
            },
            RE: function(a, b, c, d, e, f, g) {
                if (c != "alr" && !this.cfg_extend) {
                    return 0;
                }
                utag.DB("RE: " + c);
                if (c == "alr") utag.DB("All Tags EXTENSIONS");
                utag.DB(b);
                if (typeof this.extend != "undefined") {
                    g = 0;
                    for (d = 0; d < this.extend.length; d++) {
                        try {
                            e = 0;
                            if (typeof this.cfg_extend != "undefined") {
                                f = this.cfg_extend[d];
                                if (typeof f.count == "undefined") f.count = 0;
                                if (f[a] == 0 || (f.once == 1 && f.count > 0) || f[c] == 0) {
                                    e = 1
                                } else {
                                    if (f[c] == 1) {
                                        g = 1
                                    };
                                    f.count++
                                }
                            }
                            if (e != 1) {
                                this.extend[d](a, b);
                                utag.rpt['ex_' + d] = 0
                            }
                        } catch (er) {
                            utag.DB(er);
                            utag.rpt['ex_' + d] = 1;
                            utag.ut.error({
                                e: er.message,
                                s: utag.cfg.path + 'utag.js',
                                l: d,
                                t: 'ge'
                            });
                        }
                    }
                    utag.DB(b);
                    return g;
                }
            },
            trigger: function(a, b, c, d, e, f) {
                utag.DB('trigger:' + a + (c && c.uids ? ":" + c.uids.join(",") : ""));
                b = b || {};
                utag.DB(b);
                if (!this.iflag) {
                    utag.DB("trigger:called before tags loaded");
                    for (d in utag.loader.f) {
                        if (!(utag.loader.f[d] === 1)) utag.DB('Tag ' + d + ' did not LOAD')
                    }
                    utag.loader.q.push({
                        a: a,
                        b: utag.handler.C(b),
                        c: c
                    });
                    return;
                }
                utag.ut.merge(b, this.df, 0);
                utag.loader.RD(b, a);
                utag.cfg.noview = false;

                function sendTag(a, b, d) {
                    try {
                        if (typeof utag.sender[d] != "undefined") {
                            utag.DB("SENDING: " + d);
                            utag.sender[d].send(a, utag.handler.C(b));
                            utag.rpt['s_' + d] = 0;
                        } else if (utag.loader.cfg[d].load != 2) {
                            utag.loader.sendq[d] = utag.loader.sendq[d] || [];
                            utag.loader.sendq[d].push({
                                "event": a,
                                "data": utag.handler.C(b)
                            });
                            utag.loader.sendq.pending++;
                            utag.loader.AS({
                                id: d,
                                load: 1
                            });
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                }
                if (c && c.uids) {
                    this.RE(a, b, "alr");
                    for (f = 0; f < c.uids.length; f++) {
                        d = c.uids[f];
                        if (!utag.loader.OU(utag.loader.cfg[d].tid)) {
                            sendTag(a, b, d);
                        }
                    }
                } else if (utag.cfg.load_rules_ajax) {
                    this.RE(a, b, "blr");
                    this.LR(b);
                    this.RE(a, b, "alr");
                    for (f = 0; f < utag.loader.cfgsort.length; f++) {
                        d = utag.loader.cfgsort[f];
                        if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
                            sendTag(a, b, d);
                        }
                    }
                } else {
                    this.RE(a, b, "alr");
                    for (d in utag.loader.GV(utag.sender)) {
                        sendTag(a, b, d);
                    }
                }
                this.RE(a, b, "end");
            },
            C: function(a, b, c) {
                b = {};
                for (c in utag.loader.GV(a)) {
                    if (a[c] instanceof Array) {
                        b[c] = a[c].slice(0)
                    } else {
                        b[c] = a[c]
                    }
                }
                return b
            }
        },
        ut: {
            pad: function(a, b, c, d) {
                a = "" + ((a - 0).toString(16));
                d = '';
                if (b > a.length) {
                    for (c = 0; c < (b - a.length); c++) {
                        d += '0'
                    }
                }
                return "" + d + a
            },
            vi: function(t, a, b) {
                if (!utag.v_id) {
                    a = this.pad(t, 12);
                    b = "" + Math.random();
                    a += this.pad(b.substring(2, b.length), 16);
                    try {
                        a += this.pad((navigator.plugins.length ? navigator.plugins.length : 0), 2);
                        a += this.pad(navigator.userAgent.length, 3);
                        a += this.pad(document.URL.length, 4);
                        a += this.pad(navigator.appVersion.length, 3);
                        a += this.pad(screen.width + screen.height + parseInt((screen.colorDepth) ? screen.colorDepth : screen.pixelDepth), 5)
                    } catch (e) {
                        utag.DB(e);
                        a += "12345"
                    };
                    utag.v_id = a;
                }
                return utag.v_id
            },
            hasOwn: function(o, a) {
                return o != null && Object.prototype.hasOwnProperty.call(o, a)
            },
            isEmptyObject: function(o, a) {
                for (a in o) {
                    if (utag.ut.hasOwn(o, a)) return false
                }
                return true
            },
            isEmpty: function(o) {
                var t = utag.ut.typeOf(o);
                if (t == "number") {
                    return isNaN(o)
                } else if (t == "boolean") {
                    return false
                } else if (t == "string") {
                    return o.length === 0
                } else return utag.ut.isEmptyObject(o)
            },
            typeOf: function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            },
            flatten: function(o) {
                var a = {};

                function r(c, p) {
                    if (Object(c) !== c || c instanceof Array) {
                        a[p] = c;
                    } else {
                        if (utag.ut.isEmptyObject(c)) {} else {
                            for (var d in c) {
                                r(c[d], p ? p + "." + d : d);
                            }
                        }
                    }
                }
                r(o, "");
                return a;
            },
            merge: function(a, b, c, d) {
                if (c) {
                    for (d in utag.loader.GV(b)) {
                        a[d] = b[d]
                    }
                } else {
                    for (d in utag.loader.GV(b)) {
                        if (typeof a[d] == "undefined") a[d] = b[d]
                    }
                }
            },
            decode: function(a, b) {
                b = "";
                try {
                    b = decodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                };
                if (b == "") {
                    b = unescape(a)
                };
                return b
            },
            encode: function(a, b) {
                b = "";
                try {
                    b = encodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                };
                if (b == "") {
                    b = escape(a)
                };
                return b
            },
            error: function(a, b, c) {
                if (typeof utag_err != "undefined") {
                    utag_err.push(a)
                }
            },
            loader: function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        m.parentNode.removeChild(m);
                    }
                    b = a.createElement("iframe");
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id
                };
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l])
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb()
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                                this.onreadystatechange = null;
                                o.cb()
                            }
                        };
                    }
                }
                if (typeof o.error == "function") {
                    utag.loader.EV(b, "error", o.error);
                }
                if (o.type != "img") {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b)
                        }
                    }
                }
            }
        }
    };
    utag.o['politico.main'] = utag;
    utag.cfg = {
        template: "ut4.46.",
        load_rules_ajax: true,
        load_rules_at_wait: false,
        lowerqp: false,
        noconsole: false,
        session_timeout: 1800000,
        readywait: 0,
        noload: 0,
        domain: utag.loader.lh(),
        datasource: "##UTDATASOURCE##".replace("##" + "UTDATASOURCE##", ""),
        path: "//tags.tiqcdn.com/utag/politico/main/prod/",
        utid: "politico/main/202011122120"
    };
    utag.cfg.v = utag.cfg.template + "202011122202";
    utag.cond = {
        100: 0,
        106: 0,
        107: 0,
        108: 0,
        116: 0,
        19: 0,
        20: 0,
        21: 0,
        33: 0,
        53: 0,
        75: 0,
        76: 0,
        80: 0,
        82: 0,
        84: 0,
        85: 0,
        86: 0,
        87: 0,
        90: 0,
        93: 0,
        94: 0,
        98: 0,
        99: 0
    };
    utag.pagevars = function(ud) {
        ud = ud || utag.data;
        try {
            ud['js_page.ia_document.referrer'] = ia_document.referrer
        } catch (e) {
            utag.DB(e)
        };
        try {
            ud['js_page.test'] = test
        } catch (e) {
            utag.DB(e)
        };
    };
    utag.loader.initdata = function() {
        try {
            utag.data = (typeof utag_data != 'undefined') ? utag_data : {};
            utag.udoname = 'utag_data';
        } catch (e) {
            utag.data = {};
            utag.DB('idf:' + e);
        }
    };
    utag.loader.loadrules = function(_pd, _pc) {
        var d = _pd || utag.data;
        var c = _pc || utag.cond;
        for (var l in utag.loader.GV(c)) {
            switch (l) {
                case '100':
                    try {
                        c[100] |= (d['internal_site_id'].toString().toLowerCase() == 'agenda'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase() && typeof d['site_experience'] == 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '106':
                    try {
                        c[106] |= (d['site_experience'].toString().toLowerCase().indexOf('article-2019'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '107':
                    try {
                        c[107] |= (d['ad_unit_section'].toString().toLowerCase() == 'homepage-amazon-tam'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase()) || (d['internal_site_id'].toString().toLowerCase() == 'politico'.toLowerCase() && d['page_type'].toString().toLowerCase() == 'homepage'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase()) || (d['internal_site_id'].toString().toLowerCase() == 'politico-qa'.toLowerCase() && d['page_type'].toString().toLowerCase() == 'homepage'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '108':
                    try {
                        c[108] |= (d['ad_unit_section'].toString().toLowerCase() == 'playbook'.toLowerCase()) || (d['page_level_1'].toString().toLowerCase() == 'subscribe'.toLowerCase() && d['page_level_2'].toString().toLowerCase() == 'playbook-newsletter'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '116':
                    try {
                        c[116] |= (typeof d['distribution_channel'] == 'undefined') || (d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '19':
                    try {
                        c[19] |= (d['internal_site_id'] == 'politico' && d['page_type'] == 'homepage' && d['ad_unit_section'].toString().toLowerCase().indexOf('home-test'.toLowerCase()) < 0 && d['ad_unit_section'].toString().toLowerCase().indexOf('core-home'.toLowerCase()) < 0 && typeof d['site_experience'] == 'undefined' && d['ad_unit_section'].toString().toLowerCase().indexOf('homepage-amazon-tam'.toLowerCase()) < 0) || (d['internal_site_id'] == 'politicopro' && d['page_type'] == 'homepage' && typeof d['site_experience'] == 'undefined') || (d['internal_site_id'] == 'media' && d['page_type'] == 'homepage' && typeof d['site_experience'] == 'undefined') || (d['internal_site_id'] == 'capitalnewyork' && d['page_type'] == 'homepage' && typeof d['site_experience'] == 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '20':
                    try {
                        c[20] |= (d['page_type'] != 'homepage' && d['page_type'] != 'video' && d['internal_site_id'].toString().indexOf('agenda') < 0 && d['page_type'] != 'story' && d['internal_site_id'] != 'politico insiders' && d['page_name'].toString().toLowerCase().indexOf('What Works series'.toLowerCase()) < 0 && d['page_type'] != 'interactives' && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase() && d['page_type'].toString().toLowerCase() != 'datapoint'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() != 'true'.toLowerCase() && typeof d['site_experience'] == 'undefined') || (d['internal_site_id'].toString().toLowerCase().indexOf('politicopro'.toLowerCase()) > -1 && d['page_type'] == 'story' && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase() && typeof d['site_experience'] == 'undefined') || (d['site_section'].toString().toLowerCase() == 'States'.toLowerCase() && d['page_type'] == 'story' && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() != 'true'.toLowerCase() && typeof d['site_experience'] == 'undefined') || (d['internal_site_id'].toString().toLowerCase() == 'media'.toLowerCase() && d['page_type'] == 'story' && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase() && typeof d['site_experience'] == 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '21':
                    try {
                        c[21] |= (d['internal_site_id'] == 'politico' && d['page_type'] == 'video' && d['enable_prebid'].toString().toLowerCase() != 'true'.toLowerCase()) || (d['internal_site_id'] == 'politico-qa' && d['page_type'] == 'video' && d['enable_prebid'].toString().toLowerCase() != 'true'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '33':
                    try {
                        c[33] |= (d['internal_site_id'] == 'agenda' && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() != 'true'.toLowerCase() && typeof d['site_experience'] == 'undefined') || (d['internal_site_id'] == 'agenda-qa' && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase() && d['enable_prebid'].toString().toLowerCase().indexOf('true'.toLowerCase()) < 0 && typeof d['site_experience'] == 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '53':
                    try {
                        c[53] |= (d['internal_site_id'] == 'politico' && d['page_type'] == 'story' && d['distribution_channel'].toString().toLowerCase().indexOf('facebook_instant_articles'.toLowerCase()) < 0 && d['site_domain'].toString().toLowerCase().indexOf('west.ops.politico.com'.toLowerCase()) < 0 && d['enable_prebid'].toString().toLowerCase() != 'true'.toLowerCase() && typeof d['site_experience'] == 'undefined') || (d['internal_site_id'].toString().toLowerCase() == 'politico-magazine'.toLowerCase() && d['page_type'].toString().toLowerCase() == 'story'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() != 'true'.toLowerCase() && d['distribution_channel'].toString().toLowerCase().indexOf('facebook'.toLowerCase()) < 0 && d['site_domain'].toString().toLowerCase().indexOf('west.ops.politico.com'.toLowerCase()) < 0 && typeof d['site_experience'] == 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '75':
                    try {
                        c[75] |= (d['site_section'].toString().indexOf('Policy') > -1) || (d['site_section'].toString().toLowerCase() == 'congress'.toLowerCase()) || (d['site_section'].toString().toLowerCase() == 'white house'.toLowerCase()) || (d['site_section'].toString().toLowerCase() == 'elections'.toLowerCase()) || (d['site_section'].toString().toLowerCase() == 'blogs'.toLowerCase()) || (d['site_section'].toString().toLowerCase() == 'events'.toLowerCase()) || (d['site_section'].toString().toLowerCase().indexOf('video'.toLowerCase()) > -1) || (d['site_section'].toString().toLowerCase() == 'tipsheets'.toLowerCase()) || (d['site_section'].toString().toLowerCase() == 'magazine'.toLowerCase()) || (d['site_section'].toString().toLowerCase() == 'agenda'.toLowerCase()) || (d['site_section'].toString().toLowerCase() == 'homepage'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '76':
                    try {
                        c[76] |= (d['site_section'].toString().indexOf('Policy') < 0 && d['site_section'].toString().toLowerCase() != 'congress'.toLowerCase() && d['site_section'].toString().toLowerCase() != 'white house'.toLowerCase() && d['site_section'].toString().toLowerCase() != 'elections'.toLowerCase() && d['site_section'].toString().toLowerCase() != 'blogs'.toLowerCase() && d['site_section'].toString().toLowerCase() != 'events'.toLowerCase() && d['site_section'].toString().toLowerCase().indexOf('video'.toLowerCase()) < 0 && d['site_section'].toString().toLowerCase() != 'tipsheets'.toLowerCase() && d['site_section'].toString().toLowerCase() != 'magazine'.toLowerCase() && d['site_section'].toString().toLowerCase() != 'agenda'.toLowerCase() && d['site_section'].toString().toLowerCase() != 'homepage'.toLowerCase() && d['internal_site_id'].toString().toLowerCase() != 'politico insiders'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '80':
                    try {
                        c[80] |= (d['page_name'].toString().toLowerCase() != 'POLITICO Home'.toLowerCase() && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase()) || (d['ad_unit_section'].toString().toLowerCase() == 'pro-b2b-site'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '82':
                    try {
                        c[82] |= (d['internal_site_id'] == 'politico-magazine' && d['page_type'] == 'story' && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase() && typeof d['site_experience'] == 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '84':
                    try {
                        c[84] |= (d['internal_site_id'].toString().toLowerCase() != 'politico insiders'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '85':
                    try {
                        c[85] |= (d['internal_site_id'].toString().toLowerCase() == 'politico'.toLowerCase() && d['page_type'].toString().toLowerCase() == 'story'.toLowerCase() && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase() && typeof d['site_experience'] == 'undefined') || (d['internal_site_id'].toString().toLowerCase() == 'newjersey'.toLowerCase() && d['page_type'].toString().toLowerCase().indexOf('story'.toLowerCase()) > -1 && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase() && typeof d['site_experience'] == 'undefined') || (d['page_type'].toString().toLowerCase().indexOf('story'.toLowerCase()) > -1 && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase() && d['internal_site_id'].toString().toLowerCase() == 'capitalnewyork'.toLowerCase() && typeof d['site_experience'] == 'undefined') || (d['page_type'].toString().toLowerCase().indexOf('story'.toLowerCase()) > -1 && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase() && d['internal_site_id'].toString().toLowerCase() == 'florida'.toLowerCase() && typeof d['site_experience'] == 'undefined') || (d['page_type'].toString().toLowerCase().indexOf('story'.toLowerCase()) > -1 && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase() && d['internal_site_id'].toString().toLowerCase() == 'media'.toLowerCase() && typeof d['site_experience'] == 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '86':
                    try {
                        c[86] |= (d['ad_unit_section'] == 'magazine-jpmc-whatworks-landingpage' && d['distribution_channel'].toString().toLowerCase() != 'facebook_instant_articles'.toLowerCase()) || (d['ad_unit_section'].toString().toLowerCase().indexOf('magazine-jpmc-whatworksnext-landingpage'.toLowerCase()) > -1 && d['distribution_channel'].toString().toLowerCase().indexOf('facebook'.toLowerCase()) < 0) || (d['ad_unit_section'].toString().toLowerCase().indexOf('magazine-jpmc-whatworks2019-landingpage'.toLowerCase()) > -1 && d['distribution_channel'].toString().toLowerCase().indexOf('facebook'.toLowerCase()) < 0) || (d['ad_unit_section'].toString().indexOf('the-medicare-for-all-issue') > -1 && typeof d['site_experience'] == 'undefined') || (d['ad_unit_section'].toString().toLowerCase().indexOf('hub-test'.toLowerCase()) > -1 && typeof d['site_experience'] == 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '87':
                    try {
                        c[87] |= (d['page_type'] == 'interactives' && typeof d['page_level_1'] == 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '90':
                    try {
                        c[90] |= (d['page_type'].toString().toLowerCase() == 'interactives'.toLowerCase() && d['page_level_1'].toString().toLowerCase() == 'interactives'.toLowerCase() && typeof d['enable_prebid'] == 'undefined') || (d['page_level_1'].toString().toLowerCase() == 'interactives'.toLowerCase() && d['page_type'].toString().toLowerCase() == 'election results'.toLowerCase() && typeof d['enable_prebid'] == 'undefined') || (d['page_level_1'].toString().toLowerCase() == 'interactives'.toLowerCase() && d['page_type'].toString().toLowerCase() == 'election live chat'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '93':
                    try {
                        c[93] |= (d['ad_unit_section'].toString().toLowerCase() == 'home-test'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() != 'true'.toLowerCase()) || (d['ad_unit_section'].toString().toLowerCase().indexOf('core-home'.toLowerCase()) > -1 && d['enable_prebid'].toString().toLowerCase() != 'true'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '94':
                    try {
                        c[94] |= (d['internal_site_id'].toString().toLowerCase().indexOf('politico-magazine'.toLowerCase()) > -1 && d['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase() && typeof d['site_experience'] == 'undefined' && d['page_type'].toString().toLowerCase().indexOf('interactives'.toLowerCase()) < 0) || (d['internal_site_id'].toString().toLowerCase().indexOf('politico'.toLowerCase()) > -1 && d['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase() && d['page_type'].toString().toLowerCase().indexOf('homepage'.toLowerCase()) < 0 && d['page_type'].toString().toLowerCase() != 'election results'.toLowerCase() && d['page_name'].toString().toLowerCase().indexOf('955261'.toLowerCase()) < 0 && d['page_type'].toString().toLowerCase() != 'interactives'.toLowerCase() && d['page_name'].toString().toLowerCase().indexOf('1214831'.toLowerCase()) < 0 && d['page_level_1'].toString().toLowerCase() != 'interactives'.toLowerCase() && typeof d['site_experience'] == 'undefined') || (d['site_section'].toString().toLowerCase() == 'States'.toLowerCase() && d['free_paid_content'].toString().toLowerCase() == 'free'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase() && typeof d['site_experience'] == 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '98':
                    try {
                        c[98] |= (d['page_level_1'].toString().toLowerCase() == 'interactives'.toLowerCase() && d['page_type'].toString().toLowerCase() == 'election results'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase()) || (d['page_level_1'].toString().toLowerCase() == 'interactives'.toLowerCase() && d['page_type'].toString().toLowerCase() == 'interactives'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase()) || (d['page_level_1'].toString().toLowerCase() == 'interactives'.toLowerCase() && d['page_type'].toString().toLowerCase() == '2020 Elections'.toLowerCase() && d['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '99':
                    try {
                        c[99] |= (d['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase() && d['content_id'].toString().toLowerCase() == '955261'.toLowerCase() && d['site_domain'].toString().toLowerCase().indexOf('west'.toLowerCase()) < 0 && d['internal_site_id'].toString().toLowerCase() == 'politico'.toLowerCase() && typeof d['site_experience'] == 'undefined') || (d['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase() && d['content_id'].toString().toLowerCase() == '1214831'.toLowerCase() && d['site_domain'].toString().toLowerCase().indexOf('west'.toLowerCase()) < 0 && d['internal_site_id'].toString().toLowerCase() == 'politico'.toLowerCase() && typeof d['site_experience'] == 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
            }
        }
    };
    utag.pre = function() {
        utag.loader.initdata();
        utag.pagevars();
        try {
            utag.loader.RD(utag.data)
        } catch (e) {
            utag.DB(e)
        };
        utag.loader.loadrules();
    };
    utag.loader.GET = function() {
        utag.cl = {
            '_all_': 1
        };
        utag.pre();
        utag.handler.extend = [function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['dom.domain'];
                if (typeof d == 'undefined') return;
                c = [{
                    'qa.politico.psdops.com': 'allbrittonpoliticodev'
                }, {
                    'pro.qa.politico.psdops.com': 'allbrittonpoliticodev'
                }, {
                    'local.politicopro.com': 'allbrittonpoliticodev'
                }, {
                    'local.politico.com': 'allbrittonpoliticodev'
                }, {
                    'qa.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'politico.localhost.com': 'allbrittonpoliticodev'
                }, {
                    'stage.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'beta.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'devbranch1.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'iat.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'devbranch2.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'devbranch3.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'devbranch4.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'dev.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'west.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'qa-ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'localhost:8080': 'allbrittonpoliticodev'
                }, {
                    'qablue.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'qared.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'qaorange.ops.politico.com': 'allbrittonpoliticodev'
                }, {
                    'qaorange.politico.com': 'allbrittonpoliticodev'
                }, {
                    'qablue.politico.com': 'allbrittonpoliticodev'
                }, {
                    'qared.politico.com': 'allbrittonpoliticodev'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d == f) {
                            b['s_account'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['s_account'] = 'allbrittonpolitico2';
            }
        }, function(a, b) {
            b['previous_page_name'] = b['cp.utag_main__prevpage'];
            utag.loader.SC('utag_main', {
                '_prevpage': b['page_name'] + ';exp-1h'
            })
        }, function(a, b) {
            try {
                if ((typeof b['cp._cp_pt'] != 'undefined' && typeof b['cp._cp_pt'] != 'undefined' && b['cp._cp_pt'] != '')) {
                    b['previous_page_type'] = b['cp._cp_pt']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['page_type'] != 'undefined' && typeof b['page_type'] != 'undefined' && b['page_type'] != '')) {
                    document.cookie = "_cp_pt=" + b['page_type'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp._cp_pt'] = b['page_type'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            var timezone = '-5';
            (function(a, q, c, d, e, f, g, h, i, k, l, m, n, p) {
                try {
                    c = new Date();
                    q = c.getFullYear();
                    d = new Date('1/1/2000');
                    e = 15;
                    f = 8;
                    if (d.getDay() == 6 && d.getMonth() == 0 && typeof a != "undefined" && a != "" && a != null) {
                        a = parseInt(a);
                        if (q == 2009) {
                            e = 8;
                            f = 1;
                        }
                        g = e - new Date('3/1/' + q).getDay();
                        h = f - new Date('11/1/' + q).getDay();
                        if (c > new Date('3/' + g + '/' + q) && c < new Date('11/' + h + '/' + q)) {
                            a = a + 1;
                        }
                        i = new Date((c.getTime() + (c.getTimezoneOffset() * 60000)) + (3600000 * a));
                        k = i.getHours();
                        l = i.getMinutes();
                        m = i.getDay();
                        n = 'AM';
                        p = '30';
                        if (l > 0 && l < 30) {
                            p = '00';
                        }
                        if (k >= 12) {
                            n = 'PM';
                            k = k - 12;
                        } else if (k == 0) {
                            k = 12;
                        }
                        b["_timeparting_time"] = k + ':' + p + n;
                        b["_timeparting_day"] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][m];
                        b["_timeparting_type"] = (m == 6 || m == 0) ? "Weekend" : "Weekday";
                    }
                } catch (err) {}
            })(timezone);
        }, function(a, b, c, d) {
            b._ccity = '';
            b._ccountry = '';
            b._ccurrency = (typeof b['order_currency'] != 'undefined') ? b['order_currency'] : '';
            b._ccustid = (typeof b['us_id'] != 'undefined') ? b['us_id'] : '';
            b._corder = (typeof b['order_id'] != 'undefined') ? b['order_id'] : '';
            b._cpromo = (typeof b['order_coupon_code'] != 'undefined') ? b['order_coupon_code'] : '';
            b._cship = (typeof b['order_shipping'] != 'undefined') ? b['order_shipping'] : '';
            b._cstate = '';
            b._cstore = (typeof b['order_store'] != 'undefined') ? b['order_store'] : 'web';
            b._csubtotal = (typeof b['order_subtotal'] != 'undefined') ? b['order_subtotal'] : '';
            b._ctax = (typeof b['order_tax'] != 'undefined') ? b['order_tax'] : '';
            b._ctotal = (typeof b['order_total'] != 'undefined') ? b['order_total'] : '';
            b._ctype = (typeof b['order_type'] != 'undefined') ? b['order_type'] : '';
            b._czip = '';
            b._cprod = (typeof b['product_id'] != 'undefined' && b['product_id'].length > 0) ? b['product_id'] : [];
            b._cprodname = (typeof b['product_name'] != 'undefined' && b['product_name'].length > 0) ? b['product_name'] : [];
            b._cbrand = (typeof b['product_brand'] != 'undefined' && b['product_brand'].length > 0) ? b['product_brand'] : [];
            b._ccat = (typeof b['product_category'] != 'undefined' && b['product_category'].length > 0) ? b['product_category'] : [];
            b._ccat2 = (typeof b['product_subcategory'] != 'undefined' && b['product_subcategory'].length > 0) ? b['product_subcategory'] : [];
            b._cquan = (typeof b['product_quantity'] != 'undefined' && b['product_quantity'].length > 0) ? b['product_quantity'] : [];
            b._cprice = (typeof b['product_unit_price'] != 'undefined' && b['product_unit_price'].length > 0) ? b['product_unit_price'] : [];
            b._csku = (typeof b['product_sku'] != 'undefined' && b['product_sku'].length > 0) ? b['product_sku'] : [];
            b._cpdisc = (typeof b['product_discount'] != 'undefined' && b['product_discount'].length > 0) ? b['product_discount'] : [];
            if (b._cprod.length == 0) {
                b._cprod = b._csku.slice()
            };
            if (b._cprodname.length == 0) {
                b._cprodname = b._csku.slice()
            };

            function tf(a) {
                if (a == '' || isNaN(parseFloat(a))) {
                    return a
                } else {
                    return (parseFloat(a)).toFixed(2)
                }
            };
            b._ctotal = tf(b._ctotal);
            b._csubtotal = tf(b._csubtotal);
            b._ctax = tf(b._ctax);
            b._cship = tf(b._cship);
            for (c = 0; c < b._cprice.length; c++) {
                b._cprice[c] = tf(b._cprice[c])
            };
            for (c = 0; c < b._cpdisc.length; c++) {
                b._cpdisc[c] = tf(b._cpdisc[c])
            };
        }, function(a, b) {
            function secondsToTime(s) {
                function addZ(n) {
                    return (n < 10 ? '0' : '') + n;
                }
                s = parseInt(s);
                var secs = s % 60;
                s = (s - secs) / 60;
                var mins = s % 60;
                var hrs = (s - mins) / 60;
                return addZ(hrs) + ':' + addZ(mins) + ':' + addZ(secs);
            }
            utag.hasFired = utag.hasFired || {};
            if (!utag.hasFired['29']) {
                window.tealium_brightcove_player = {
                    ready: false,
                    started: false,
                    progress25: false,
                    progress50: false,
                    progress75: false,
                    progressLive5: false,
                    progressLive10: false,
                    progressLive30: false,
                    livestreamStartedPosition: 0,
                    currentPosition: 0,
                    previousPosition: 0,
                    thirtyMinuteInterval: 2,
                    mediaEventHandler: function(pEvent) {
                        var player = window.tealium_brightcove_player;
                        player.currentPosition = pEvent.position - ((player.livestream) ? player.livestreamStartedPosition : 0);
                        if (pEvent.type == brightcove.api.events.MediaEvent.PLAY) {
                            if (player.currentPosition < 0.1 || (!player.started && player.livestream)) {
                                console.log("******** video start ********");
                                if (!player.started) {
                                    var event_type = '';
                                    if (player.livestream) {
                                        player.livestreamStartedPosition = pEvent.position;
                                        player.currentPosition = pEvent.position - ((player.livestream) ? player.livestreamStartedPosition : 0);
                                        event_type = 'live_stream_start';
                                    } else {
                                        event_type = 'video_viewed';
                                    }
                                    utag.link({
                                        event_type: event_type,
                                        video_name: player.videoName,
                                        video_tags: player.videoTags,
                                        video_desc: player.videoDesc,
                                        video_duration: player.videoLength,
                                        video_info: (player.livestream ? "" : player.videoID + ".  ") + (utag_data['video_name'] || b['video_name'] || player.videoName) + (player.livestream ? "" : " - (" + secondsToTime(pEvent.duration) + ")")
                                    });
                                    player.started = true;
                                }
                            } else {
                                console.log("******** video play ********");
                                if (player.previousPosition < player.currentPosition) {
                                    utag.link({
                                        event_type: 'video_fwd',
                                        video_name: player.videoName,
                                        video_position: player.currentPosition,
                                        video_info: (player.livestream ? "" : player.videoID + ".  ") + (utag_data['video_name'] || b['video_name'] || player.videoName) + (player.livestream ? "" : " - (" + secondsToTime(pEvent.duration) + ")")
                                    });
                                }
                            }
                            player.previousPosition = player.currentPosition;
                        } else if (pEvent.type == brightcove.api.events.MediaEvent.PROGRESS) {
                            var currentProgress = (player.currentPosition * 100 / (pEvent.duration || 1));
                            if (player.livestream) {
                                if (player.currentPosition >= (5 * 60) && player.progressLive5 === false) {
                                    console.log("******** 5min progress ********");
                                    utag.link({
                                        event_type: 'live_stream_progress_5',
                                        video_name: player.videoName,
                                        video_position: player.currentPosition,
                                        video_info: (player.livestream ? "" : player.videoID + ".  ") + (utag_data['video_name'] || b['video_name'] || player.videoName) + (player.livestream ? "" : " - (" + secondsToTime(pEvent.duration) + ")")
                                    });
                                    player.progressLive5 = true;
                                } else if (player.currentPosition >= (10 * 60) && player.progressLive10 === false) {
                                    console.log("******** 10min progress ********");
                                    utag.link({
                                        event_type: 'live_stream_progress_10',
                                        video_name: player.videoName,
                                        video_position: player.currentPosition,
                                        video_info: (player.livestream ? "" : player.videoID + ".  ") + (utag_data['video_name'] || b['video_name'] || player.videoName) + (player.livestream ? "" : " - (" + secondsToTime(pEvent.duration) + ")")
                                    });
                                    player.progressLive10 = true;
                                } else if (player.currentPosition >= (30 * 60) && player.progressLive30 === false) {
                                    console.log("******** 30min progress ********");
                                    utag.link({
                                        event_type: 'live_stream_progress_30',
                                        video_name: player.videoName,
                                        video_position: player.currentPosition,
                                        video_info: (player.livestream ? "" : player.videoID + ".  ") + (utag_data['video_name'] || b['video_name'] || player.videoName) + (player.livestream ? "" : " - (" + secondsToTime(pEvent.duration) + ")")
                                    });
                                    player.progressLive30 = true;
                                }
                            } else {
                                if (currentProgress >= 25 && player.progress25 === false) {
                                    console.log("******** 25% progress ********");
                                    utag.link({
                                        event_type: 'video_progress_25',
                                        video_name: player.videoName,
                                        video_position: player.currentPosition,
                                        video_info: (player.livestream ? "" : player.videoID + ".  ") + (utag_data['video_name'] || b['video_name'] || player.videoName) + (player.livestream ? "" : " - (" + secondsToTime(pEvent.duration) + ")")
                                    });
                                    player.progress25 = true;
                                } else if (currentProgress >= 50 && player.progress50 === false) {
                                    console.log("******** 50% progress ********");
                                    utag.link({
                                        event_type: 'video_progress_50',
                                        video_name: player.videoName,
                                        video_position: player.currentPosition,
                                        video_info: (player.livestream ? "" : player.videoID + ".  ") + (utag_data['video_name'] || b['video_name'] || player.videoName) + (player.livestream ? "" : " - (" + secondsToTime(pEvent.duration) + ")")
                                    });
                                    player.progress50 = true;
                                } else if (currentProgress >= 75 && player.progress75 === false) {
                                    console.log("******** 75% progress ********");
                                    utag.link({
                                        event_type: 'video_progress_75',
                                        video_name: player.videoName,
                                        video_position: player.currentPosition,
                                        video_info: (player.livestream ? "" : player.videoID + ".  ") + (utag_data['video_name'] || b['video_name'] || player.videoName) + (player.livestream ? "" : " - (" + secondsToTime(pEvent.duration) + ")")
                                    });
                                    player.progress75 = true;
                                }
                            }
                        } else if (player.livestream && pEvent.type == brightcove.api.events.MediaEvent.CHANGE) {
                            console.log(player.previousPosition, player.currentPosition);
                            if (player.started) {
                                console.log("******** video change ********");
                                utag.link({
                                    event_type: 'live_stream_start',
                                    video_name: player.videoName,
                                    video_position: player.currentPosition,
                                    video_percent: player.currentPosition / pEvent.duration,
                                    video_info: (player.livestream ? "" : player.videoID + ".  ") + (utag_data['video_name'] || b['video_name'] || player.videoName) + (player.livestream ? "" : " - (" + secondsToTime(pEvent.duration) + ")")
                                });
                            }
                        } else if (pEvent.type == brightcove.api.events.MediaEvent.SEEK_NOTIFY) {
                            console.log("******** video seek ********");
                            player.previousPosition = player.currentPosition;
                        } else if (pEvent.type == brightcove.api.events.MediaEvent.COMPLETE) {
                            console.log("******** video complete ********");
                            utag.link({
                                event_type: 'video_complete',
                                video_name: player.videoName,
                                video_position: player.currentPosition,
                                video_info: (player.livestream ? "" : player.videoID + ".  ") + (utag_data['video_name'] || b['video_name'] || player.videoName) + (player.livestream ? "" : " - (" + secondsToTime(pEvent.duration) + ")")
                            });
                        }
                    },
                    onTemplateLoaded: function(experienceID) {
                        console.log("******** INIT BC CONNECTION ********");
                        window.tealium_brightcove_player.player = brightcove.api.getExperience(experienceID);
                        window.tealium_brightcove_player.APIModules = brightcove.api.modules.APIModules;
                    },
                    onTemplateReady: function(evt) {
                        var player = window.tealium_brightcove_player;
                        if (!player.ready) {
                            player.ready = true;
                            console.log("******** GET CURRENT PLAYER ********");
                            player.videoPlayer = player.player.getModule(player.APIModules.VIDEO_PLAYER);
                            player.videoPlayer.getCurrentVideo(function(videoDTO) {
                                player.videoName = videoDTO.displayName;
                                player.videoID = videoDTO.id;
                                player.videoDesc = videoDTO.shortDescription;
                                player.videoLength = videoDTO.length;
                                player.videoTags = videoDTO.tags.toString();
                                player.livestream = (player.videoLength <= 0);
                                player.publishedDate = videoDTO.publishedDate.toString();
                            });
                            console.log("******** Adding Listeners *******");
                            player.videoPlayer.addEventListener(brightcove.api.events.MediaEvent.BEGIN, player.mediaEventHandler);
                            player.videoPlayer.addEventListener(brightcove.api.events.MediaEvent.PLAY, player.mediaEventHandler);
                            player.videoPlayer.addEventListener(brightcove.api.events.MediaEvent.PROGRESS, player.mediaEventHandler);
                            player.videoPlayer.addEventListener(brightcove.api.events.MediaEvent.CHANGE, player.mediaEventHandler);
                            player.videoPlayer.addEventListener(brightcove.api.events.MediaEvent.SEEK_NOTIFY, player.mediaEventHandler);
                            player.videoPlayer.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, player.mediaEventHandler);
                        }
                    }
                };
                utag.hasFired['29'] = 1;
            }
        }, function(a, b) {
            if (b['content_author']) {
                b['content_author_commas'] = b['content_author'].split('|').join(',');
            }
            if (b['content_tag']) {
                b['content_tag_commas'] = b['content_tag'].split('|').join(',');
            }
        }, function(a, b, c, d) {
            try {
                if (b['page_type'].toString().toLowerCase() == 'story'.toLowerCase() || (b['page_type'].toString().toLowerCase() == 'blogs'.toLowerCase() && !/^blog front/i.test(b['page_name']))) {
                    c = [b['publication_date'], b['page_name']];
                    b['publication_date_content'] = c.join('|')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if (1) {
                    c = [b['content_id'], b['publication_date']];
                    b['content_id_pub_date'] = c.join(' - ')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['qp.cid'] == 'nyn_ypb1') {
                    b['cid'] = b['qp.cid']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['event_type'] == 'subscription_button_clicked') {
                    b['subscription_module_button'] = b['subscription_module']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((typeof b['qp.hp'] != 'undefined' && typeof b['qp.hp'] != 'undefined' && b['qp.hp'] != '' && typeof b['original_headline'] != 'undefined' && typeof b['original_headline'] != 'undefined' && b['original_headline'] != '')) {
                    c = [b['qp.hp'], b['original_headline']];
                    b['_concat_position_headline'] = c.join(' + ')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((typeof b['qp.mi'] != 'undefined' && typeof b['qp.mi'] != 'undefined' && b['qp.mi'] != '' && typeof b['original_headline'] != 'undefined' && typeof b['original_headline'] != 'undefined' && b['original_headline'] != '')) {
                    c = [b['qp.mi'], ''];
                    b['_concat_module_prev_pn'] = c.join(' + ')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['subscription_email'] != 'undefined' && typeof b['subscription_email'] != 'undefined' && b['subscription_email'] != '' && b['event_type'].toString().toLowerCase().indexOf('verify_link_clicked'.toLowerCase()) < 0 && b['subscription_state'].toString().toLowerCase().indexOf('subscription_exists'.toLowerCase()) < 0)) {
                    b['subscription_button_clicked'] = 'subscription_button_clicked_custom'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (typeof b["cp.link_tracking"] != "undefined" && b["cp.link_tracking"] != "") {
                        b["event_type"] = "link_click_custom";
                        b["cp.link_tracking"] = decodeURIComponent(b["cp.link_tracking"]);
                        var generateVar = function(keyval) {
                            var keyval_array = keyval.split("=");
                            b["link_" + keyval_array[0]] = keyval_array[1];
                        }
                        var link_tracking_array = b["cp.link_tracking"].split("&");
                        for (var j = 0; j < link_tracking_array.length; j++) {
                            generateVar(link_tracking_array[j]);
                        }
                        document.cookie = "link_tracking" + "=;path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b, c, d) {
            try {
                if ((typeof b['qp.mi'] != 'undefined' && typeof b['qp.mi'] != 'undefined' && b['qp.mi'] != '' && typeof b['previous_page_type'] != 'undefined' && typeof b['previous_page_type'] != 'undefined' && b['previous_page_type'] != '')) {
                    c = [b['qp.mi'], b['previous_page_type']];
                    b['_concat_module_prev_ct'] = c.join(' + ')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (typeof utag.runonce === 'undefined') {
                        utag.runonce = {};
                    }
                    if (typeof utag.runonce['dnb_request'] === 'undefined') {
                        utag.runonce['dnb_request'] = 1;
                        try {
                            if (sessionStorage.getItem('dnb_Data') !== null) {
                                var dnb_Data = JSON.parse(sessionStorage.getItem('dnb_Data'));
                                if (utag.data['ut.env'] == "prod") {
                                    console.log("1: all dnb status = " + dnb_Data.status);
                                }
                                if (dnb_Data.status == "200") {
                                    b['companyCountry'] = dnb_Data.companyCountry || '';
                                    b['companyName'] = dnb_Data.companyName || '';
                                    b['companyState'] = dnb_Data.companyState || '';
                                    b['duns'] = dnb_Data.duns || '';
                                    b['employeesInAllLocations'] = dnb_Data.employeesInAllLocations || '';
                                    b['fortune1000'] = dnb_Data.fortune1000 || '';
                                    b['industryNaics'] = dnb_Data.industryNaics || '';
                                    b['industrySic'] = dnb_Data.industrySic || '';
                                    b['jobFunction'] = dnb_Data.jobFunction || '';
                                    b['jobSeniority'] = dnb_Data.jobSeniority || '';
                                    b['networthworthNum'] = dnb_Data.networthworthNum || '';
                                    b['salesAnnual'] = dnb_Data.salesAnnual || '';
                                    b['walletSize'] = dnb_Data.walletSize || '';
                                    b['companyAddress'] = dnb_Data.companyAddress || '';
                                    b['companyCity'] = dnb_Data.companyCity || '';
                                    b['companyMsa'] = dnb_Data.companyMsa || '';
                                    b['companyRegion'] = dnb_Data.companyRegion || '';
                                    b['companyZip4'] = dnb_Data.companyZip4 || '';
                                    b['companyZip5'] = dnb_Data.companyZip5 || '';
                                    b['domesticUltimateDuns'] = dnb_Data.domesticUltimateDuns || '';
                                    b['employeesAtLocation'] = dnb_Data.employeesAtLocation || '';
                                    b['employeesAtLocationNum'] = dnb_Data.employeesAtLocationNum || '';
                                    b['employeesInAllLocationsNum'] = dnb_Data.employeesInAllLocationsNum || '';
                                    b['howTheyPay'] = dnb_Data.howTheyPay || '';
                                    b['itExpense'] = dnb_Data.itExpense || '';
                                    b['marketability'] = dnb_Data.marketability || '';
                                    b['naicsCodes'] = dnb_Data.naicsCodes || '';
                                    b['networth'] = dnb_Data.networth || '';
                                    b['parentDuns'] = dnb_Data.parentDuns || '';
                                    b['salesAnnualNum'] = dnb_Data.salesAnnualNum || '';
                                    b['sicCodes'] = dnb_Data.sicCodes || '';
                                    b['techOfficeDemand'] = dnb_Data.techOfficeDemand || '';
                                    b['telecomSpend'] = dnb_Data.telecomSpend || '';
                                    b['ultimateDuns'] = dnb_Data.ultimateDuns || '';
                                }
                            }
                        } catch (e) {
                            console.log("err from ext #295: " + e.message);
                        };
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            var visit_timer = 30;
            (function(a, c, d, e, f, g, h, i, k, l, m, n, o, p, q, r, s, t, u, v, w) {
                a = a ? parseInt(a) : 30;
                n = v = 1;
                r = function(w, x, y, z) {
                    x = w + "=";
                    y = document.cookie.split(';');
                    for (var i = 0; i < y.length; i++) {
                        z = y[i];
                        while (z.charAt(0) == ' ')
                            z = z.substring(1, z.length);
                        if (z.indexOf(x) == 0)
                            return z.substring(x.length, z.length);
                    }
                    return "";
                };
                q = function(x, y, z) {
                    if (typeof z == "number") z = new Date(z);
                    document.cookie = x + "=" + y + ";path=/;domain=" + utag.cfg.domain + ";expires=" + (z ? z.toGMTString() : "");
                };
                d = new Date();
                e = d.getTime();
                f = 'utag_vnum';
                g = 'utag_invisit';
                o = 'utag_vs';
                p = 'utag_dslv';
                w = 'utag_vi';
                d.setTime(e + a * 24 * 60 * 60 * 1000);
                h = r(f);
                if (h) {
                    i = h.substring(h.indexOf('&vn=') + 4, h.length);
                    k = h.substring(0, h.indexOf('&vn='));
                }
                if (r(g)) {
                    if (i) {
                        q(g, 'true', d.setTime(e + 30 * 60 * 1000));
                        m = i;
                        l = (e - (parseInt(k) - (a * 24 * 60 * 60 * 1000)) < 30 * 60 * 1000) ? "New" : "Repeat";
                    } else {
                        m = l = "unknown";
                    }
                } else {
                    if (i) {
                        i++;
                        q(f, k + '&vn=' + i, d.setTime(k));
                        q(g, 'true', d.setTime(e + 30 * 60 * 1000));
                        m = i;
                        l = "Repeat";
                    } else {
                        q(f, e + a * 24 * 60 * 60 * 1000 + '&vn=1', d);
                        q(g, 'true', d.setTime(e + 30 * 60 * 1000));
                        m = 1;
                        l = "New";
                        q(w, e, d);
                    }
                }
                if (!r(o)) {
                    v = 1;
                } else {
                    n = 0;
                    v = r(o);
                    v++;
                }
                if (!q(o, v, new Date().setTime(new Date().getTime() + 1800000))) q(o, v);
                if (!r(o)) n = v = 0;
                u = "< 1 minute";
                if (r(g) && r(w)) {
                    s = Math.round(((new Date().getTime() - parseInt(r(w))) / 1000) / 60);
                    if (s === 1) u = "1 minute";
                    else if (s > 1) u = s + " minutes";
                }
                s = new Date();
                t = new Date();
                c = s.getTime();
                d = 24 * 60 * 60 * 1000;
                s.setTime(c + 3 * 365 * d);
                t.setTime(c + 30 * 60 * 1000);
                f = c - r(p);
                if (r(p).length == 0) {
                    q(p, c, s);
                    q(p + '_s', 'First Visit', t);
                } else {
                    q(p, c, s);
                    if (d > 30 * 60 * 1000) {
                        if (f > 30 * d) {
                            q(p + '_s', 'More than 30 days', t);
                        } else if (f < 30 * d + 1 && f > 7 * d) {
                            q(p + '_s', 'More than 7 days', t);
                        } else if (f < 7 * d + 1 && f > d) {
                            q(p + '_s', 'Less than 7 days', t);
                        } else if (f < d + 1) {
                            q(p + '_s', 'Less than 1 day', t);
                        } else {
                            q(p, c, -1);
                            h = '';
                        }
                    } else {
                        q(p + '_s', r(p + '_s'), t);
                    }
                }
                e = r(p + '_s');
                if (e.length == 0)
                    h = 'Cookies Not Supported';
                else if (e != 'First Visit' && e != 'More than 30 days' && e != 'More than 7 days' && e != 'Less than 7 days' && e != 'Less than 1 day')
                    h = '';
                else
                    h = e;
                b['_visit_page_num'] = v;
                b['_visit_return'] = h;
                b['_visit_start'] = n;
                b['_visit_number'] = m;
                b['_visit_type'] = l;
                b['_visit_time'] = u;
            })(visit_timer);
        }, function(a, b) {
            try {
                if (1) {
                    window.tealiumServerRefresh = function() {
                        var expiry = new Date();
                        expiry.setTime(expiry.getTime() + 1800000);
                        document.cookie = "hp_server_refresh=true;" + "expires=" + expiry.toGMTString() + ";path=/";
                    };
                    if (typeof b["cp.hp_server_refresh"] != "undefined" && b["cp.hp_server_refresh"] != "") {
                        b["hp_server_refresh"] = "true";
                        document.cookie = "hp_server_refresh=;path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    } else {
                        b["hp_server_refresh"] = "false";
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((typeof b['event_type'] != 'undefined' && b['event_type'].toString().toLowerCase().indexOf('gallery_slide_viewed'.toLowerCase()) > -1)) {
                    b['link_mid'] = ''
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['_visit_type'].toString().toLowerCase().indexOf('new'.toLowerCase()) > -1) {
                    b['new_visitor_pages'] = b['page_name']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['_visit_type'].toString().toLowerCase().indexOf('repeat'.toLowerCase()) > -1) {
                    b['repeat_visitor_pages'] = b['page_name']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (typeof b['cp.utag_main_as_event_flag'] == 'undefined') {
                        utag.loader.SC('utag_main', {
                            'as_event_flag': 'true' + ';exp-session'
                        });
                        b['cp.utag_main_as_event_flag'] = "true";
                    } else {
                        if (b['cp.utag_main_as_event_flag'] == 'true') {
                            utag.loader.SC('utag_main', {
                                'as_event_flag': 'false' + ';exp-session'
                            });
                            b['cp.utag_main_as_event_flag'] = 'false';
                        } else {
                            utag.loader.SC('utag_main', {
                                'as_event_flag': 'true' + ';exp-session'
                            });
                            b['cp.utag_main_as_event_flag'] = 'true';
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    b['active_device'] = b['va.current_visit.properties.46']
                }
            } catch (e) {
                utag.DB(e);
            }
        }];
        utag.handler.cfg_extend = [{
            "blr": 0,
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "78"
        }, {
            "blr": 0,
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "204"
        }, {
            "blr": 0,
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "205"
        }, {
            "blr": 0,
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "206"
        }, {
            "blr": 0,
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "210"
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "201",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "215",
            "blr": 0,
            "end": 0
        }, {
            "end": 0,
            "blr": 0,
            "id": "202",
            "bwq": 0,
            "alr": 1
        }, {
            "blr": 0,
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "405"
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "428",
            "blr": 0,
            "end": 0
        }, {
            "id": "431",
            "alr": 1,
            "bwq": 0,
            "end": 0,
            "blr": 0
        }, {
            "id": "434",
            "alr": 1,
            "bwq": 0,
            "end": 0,
            "blr": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "207",
            "blr": 0,
            "end": 0
        }, {
            "id": "208",
            "alr": 1,
            "bwq": 0,
            "end": 0,
            "blr": 0
        }, {
            "id": "435",
            "alr": 1,
            "bwq": 0,
            "end": 0,
            "blr": 0
        }, {
            "id": "452",
            "alr": 1,
            "bwq": 0,
            "end": 0,
            "blr": 0
        }, {
            "end": 0,
            "blr": 0,
            "id": "209",
            "bwq": 0,
            "alr": 1
        }, {
            "id": "453",
            "alr": 1,
            "bwq": 0,
            "end": 0,
            "blr": 0
        }, {
            "id": "211",
            "alr": 1,
            "bwq": 0,
            "end": 0,
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "456"
        }, {
            "blr": 0,
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "466"
        }, {
            "end": 0,
            "blr": 0,
            "id": "212",
            "bwq": 0,
            "alr": 1
        }, {
            "blr": 0,
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "213"
        }, {
            "end": 0,
            "blr": 0,
            "id": "470",
            "bwq": 0,
            "alr": 1
        }, {
            "end": 0,
            "blr": 0,
            "id": "474",
            "bwq": 0,
            "alr": 1
        }];
        utag.loader.initcfg = function() {
            utag.loader.cfg = {
                "336": {
                    load: utag.cond[108],
                    send: 1,
                    v: 201912021641,
                    wait: 0,
                    tid: 20011
                },
                "347": {
                    load: 4,
                    send: utag.cond[116],
                    v: 202011112025,
                    wait: 0,
                    tid: 20010
                },
                "329": {
                    load: 4,
                    send: 1,
                    v: 202011112025,
                    wait: 0,
                    tid: 20010
                },
                "304": {
                    load: utag.cond[93],
                    send: 1,
                    v: 201810251015,
                    wait: 0,
                    tid: 20010
                },
                "333": {
                    load: 4,
                    send: utag.cond[106],
                    v: 202011111508,
                    wait: 0,
                    tid: 20010
                },
                "138": {
                    load: utag.cond[19],
                    send: 1,
                    v: 201903181512,
                    wait: 1,
                    tid: 20010
                },
                "204": {
                    load: utag.cond[53],
                    send: 1,
                    v: 201808301757,
                    wait: 1,
                    tid: 20010
                },
                "136": {
                    load: utag.cond[20],
                    send: 1,
                    v: 202011122202,
                    wait: 1,
                    tid: 20010
                },
                "139": {
                    load: utag.cond[21],
                    send: 1,
                    v: 201803061452,
                    wait: 1,
                    tid: 20010
                },
                "162": {
                    load: utag.cond[33],
                    send: 1,
                    v: 202004230041,
                    wait: 1,
                    tid: 20010
                },
                "286": {
                    load: utag.cond[87],
                    send: 1,
                    v: 202004230041,
                    wait: 1,
                    tid: 20010
                },
                "289": {
                    load: utag.cond[90],
                    send: 1,
                    v: 202004230041,
                    wait: 1,
                    tid: 20010
                },
                "307": {
                    load: utag.cond[94],
                    send: 1,
                    v: 202011122202,
                    wait: 1,
                    tid: 20010
                },
                "319": {
                    load: utag.cond[99],
                    send: 1,
                    v: 202008051825,
                    wait: 1,
                    tid: 20010
                },
                "281": {
                    load: utag.cond[86],
                    send: 1,
                    v: 201905231323,
                    wait: 1,
                    tid: 20010
                },
                "318": {
                    load: utag.cond[98],
                    send: 1,
                    v: 202011111508,
                    wait: 1,
                    tid: 20010
                },
                "96": {
                    load: utag.cond[84],
                    send: 1,
                    v: 201710161652,
                    wait: 1,
                    tid: 20010
                },
                "129": {
                    load: 4,
                    send: 1,
                    v: 201707121548,
                    wait: 1,
                    tid: 3073
                },
                "131": {
                    load: 4,
                    send: 1,
                    v: 201707121548,
                    wait: 1,
                    tid: 17001
                },
                "206": {
                    load: utag.cond[75],
                    send: 1,
                    v: 201602161953,
                    wait: 1,
                    tid: 20010
                },
                "259": {
                    load: utag.cond[76],
                    send: 1,
                    v: 201602162008,
                    wait: 1,
                    tid: 20010
                },
                "11": {
                    load: 4,
                    send: 1,
                    v: 202007302014,
                    wait: 1,
                    tid: 19063
                },
                "279": {
                    load: utag.cond[82],
                    send: 1,
                    v: 201703071905,
                    wait: 1,
                    tid: 20067
                },
                "280": {
                    load: utag.cond[85],
                    send: 1,
                    v: 201907231855,
                    wait: 1,
                    tid: 20067
                },
                "276": {
                    load: utag.cond[80],
                    send: 1,
                    v: 201611081633,
                    wait: 1,
                    tid: 13060
                },
                "283": {
                    load: 4,
                    send: 1,
                    v: 201707121548,
                    wait: 1,
                    tid: 6026
                },
                "292": {
                    load: 4,
                    send: 1,
                    v: 202001071643,
                    wait: 1,
                    tid: 20064
                },
                "297": {
                    load: 4,
                    send: 1,
                    v: 201711272100,
                    wait: 1,
                    tid: 12047
                },
                "301": {
                    load: 4,
                    send: 1,
                    v: 201712042002,
                    wait: 1,
                    tid: 20103
                },
                "302": {
                    load: 4,
                    send: 1,
                    v: 201712042002,
                    wait: 1,
                    tid: 20103
                },
                "303": {
                    load: 4,
                    send: 1,
                    v: 201912221412,
                    wait: 1,
                    tid: 7132
                },
                "314": {
                    load: 4,
                    send: 1,
                    v: 201805151728,
                    wait: 1,
                    tid: 16050
                },
                "320": {
                    load: utag.cond[100],
                    send: 1,
                    v: 202011111508,
                    wait: 1,
                    tid: 20010
                },
                "334": {
                    load: utag.cond[107],
                    send: 1,
                    v: 202011111508,
                    wait: 1,
                    tid: 20010
                },
                "352": {
                    load: 4,
                    send: 1,
                    v: 202010261402,
                    wait: 1,
                    tid: 7133
                }
            };
            utag.loader.cfgsort = ["336", "347", "329", "304", "333", "138", "204", "136", "139", "162", "286", "289", "307", "319", "281", "318", "96", "129", "131", "206", "259", "11", "279", "280", "276", "283", "292", "297", "301", "302", "303", "314", "320", "334", "352"];
        }
        utag.loader.initcfg();
    }
    if (typeof utag_cfg_ovrd != 'undefined') {
        for (utag._i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[utag._i] = utag_cfg_ovrd[utag._i]
    };
    utag.loader.PINIT = function(a, b, c) {
        utag.DB("Pre-INIT");
        if (utag.cfg.noload) {
            return;
        }
        try {
            this.GET();
            if (utag.handler.RE('view', utag.data, "blr")) {
                utag.handler.LR(utag.data);
            }
        } catch (e) {
            utag.DB(e)
        };
        a = this.cfg;
        c = 0;
        for (b in this.GV(a)) {
            if (a[b].block == 1 || (a[b].load > 0 && (typeof a[b].src != 'undefined' && a[b].src != ''))) {
                a[b].block = 1;
                c = 1;
                this.bq[b] = 1;
            }
        }
        if (c == 1) {
            for (b in this.GV(a)) {
                if (a[b].block) {
                    a[b].id = b;
                    if (a[b].load == 4) a[b].load = 1;
                    a[b].cb = function() {
                        var d = this.uid;
                        utag.loader.cfg[d].cbf = 1;
                        utag.loader.LOAD(d)
                    };
                    this.AS(a[b]);
                }
            }
        }
        if (c == 0) this.INIT();
    };
    utag.loader.INIT = function(a, b, c, d, e) {
        utag.DB('utag.loader.INIT');
        if (this.ol == 1) return -1;
        else this.ol = 1;
        if (utag.cfg.noview != true) utag.handler.RE('view', utag.data, "alr");
        utag.rpt.ts['i'] = new Date();
        d = this.cfgsort;
        for (a = 0; a < d.length; a++) {
            e = d[a];
            b = this.cfg[e];
            b.id = e;
            if (b.block != 1) {
                if (utag.loader.bk[b.id] || ((utag.cfg.readywait || utag.cfg.noview) && b.load == 4)) {
                    this.f[b.id] = 0;
                    utag.loader.LOAD(b.id)
                } else if (b.wait == 1 && utag.loader.rf == 0) {
                    utag.DB('utag.loader.INIT: waiting ' + b.id);
                    this.wq.push(b)
                    this.f[b.id] = 2;
                } else if (b.load > 0) {
                    utag.DB('utag.loader.INIT: loading ' + b.id);
                    this.lq.push(b);
                    this.AS(b);
                }
            }
        }
        if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.DB('READY:utag.loader.wq');
                utag.loader.rf = 1;
                utag.loader.WQ();
            }
        });
        else if (this.lq.length > 0) utag.loader.rf = 1;
        else if (this.lq.length == 0) utag.loader.END();
        return 1
    };
    utag.loader.EV('', 'ready', function(a) {
        if (utag.loader.efr != 1) {
            utag.loader.efr = 1;
            try {
                var new_input = document.createElement("input");
                new_input.id = "munchkinId";
                new_input.name = "munchkinId";
                new_input.type = "hidden";
                document.body.appendChild(new_input)
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (typeof utag.runonce == 'undefined') utag.runonce = {};
                utag.jdh = function(h, i, j, k) {
                    h = utag.jdhc.length;
                    if (h == 0) window.clearInterval(utag.jdhi);
                    else {
                        for (i = 0; i < h; i++) {
                            j = utag.jdhc[i];
                            k = jQuery(j.i).is(":visible") ? 1 : 0;
                            if (k != j.s) {
                                if (j.e == (j.s = k)) jQuery(j.i).trigger(j.e ? "afterShow" : "afterHide")
                            }
                        }
                    }
                };
                utag.jdhi = window.setInterval(utag.jdh, 250);
                utag.jdhc = [];
                if (1) {
                    if (typeof utag.runonce[440] == 'undefined') {
                        utag.runonce[440] = 1;
                        jQuery(document.body).on('mousedown', '#globalWrapper.global-wrapper main.super-duper div.super div.super-inner article.story-main-content div.sticky-wrapper.layout-story.content section.pos-beta.content-groupset div.story-core.content-group div.story-text aside.story-related aside.inline-module-the-global-politico.content-group section.layout-bi.speedbump div.pos-beta.speedbump-item div.js-tealium-newsletter div.dari-frame-loaded.dari-frame form.simple-signup--stack.simple-signup fieldset button.simple-signup__submit.type-link.button', function(e) {
                            utag.link({
                                "global_politico_newsletter_signup_button_click": 'true'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[441] == 'undefined') {
                        utag.runonce[441] = 1;
                        jQuery(document.body).on('mousedown', '#showCommentsButton.jump-anchor.collapse-toggle.bleed-full.format-l.button', function(e) {
                            utag.link({
                                "show_comments_button_click": 'true'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[442] == 'undefined') {
                        utag.runonce[442] = 1;
                        jQuery(document.body).on('mousedown', '#globalWrapper.global-wrapper main.super-duper div.super div.super-inner article.story-main-content div.sticky-wrapper.layout-story.content section.pos-beta.content-groupset div.story-core.content-group div.story-text div.conditional.story-share div.social-share-btns.interrupt-item a.facebook-button.button', function(e) {
                            utag.link({
                                "fb_share_button_click": 'true'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[443] == 'undefined') {
                        utag.runonce[443] = 1;
                        utag.jdhc.push({
                            i: '#universal-settings-app-hook.pos-omega.content-groupset div.content-group div.has-buttons.is-active.sticky-wrapper.settings-matrix header.sticky-content.matrix-header div.tab-summary div.universal-settings-toggle-button.tab-utility div.content-actions button.type-link.button',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', '#universal-settings-app-hook.pos-omega.content-groupset div.content-group div.has-buttons.is-active.sticky-wrapper.settings-matrix header.sticky-content.matrix-header div.tab-summary div.universal-settings-toggle-button.tab-utility div.content-actions button.type-link.button', function(e) {
                            if (jQuery('#universal-settings-app-hook.pos-omega.content-groupset div.content-group div.has-buttons.is-active.sticky-wrapper.settings-matrix header.sticky-content.matrix-header div.tab-summary div.universal-settings-toggle-button.tab-utility div.content-actions button.type-link.button').is(':visible')) {
                                utag.link({
                                    "pro_content_settings_saved_click": 'true'
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[444] == 'undefined') {
                        utag.runonce[444] = 1;
                        jQuery(document.body).on('change', '#universal-settings-app-hook.pos-omega.content-groupset div.content-group div.state-modified.has-buttons.is-active.sticky-wrapper.settings-matrix div.matrix-content form.0000014c-14b4-d9dd-a5ec-34bc41880000-settings-form fieldset.submit-inputs p.inline-select span.select-wrapper select.custom-articles', function(e) {
                            utag.link({
                                "pro_content_customization_click_event": 'true'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (1) {
                        jQuery(document.body).on("click.tealium", "a[data-tracking]", function(event) {
                            var target;
                            if (event.currentTarget && event.currentTarget.attributes.hasOwnProperty("data-tracking")) {
                                target = event.currentTarget;
                            } else if (event.target && event.target.attributes.hasOwnProperty("data-tracking")) {
                                target = event.target;
                            }
                            if (target) {
                                var linkText = target.text;
                                var elLinkTextCustom = target.querySelector("[data-tracking-text]")
                                if (elLinkTextCustom) {
                                    linkText = elLinkTextCustom.attributes["data-tracking-text"].textContent;
                                }
                                var tracking_string = target.attributes["data-tracking"].textContent + "&text=" + linkText || "";
                                if (tracking_string) {
                                    tracking_string = encodeURIComponent(tracking_string);
                                    var expiry = new Date();
                                    expiry.setTime(expiry.getTime() + 1800000);
                                    document.cookie = "link_tracking=" + tracking_string + ";" + "expires=" + expiry.toGMTString() + ";path=/";
                                }
                            }
                        })
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
        }
    })
    if (utag.cfg.readywait || utag.cfg.waittimer) {
        utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.loader.rf = 1;
                utag.cfg.readywait = 1;
                utag.DB('READY:utag.cfg.readywait');
                setTimeout(function() {
                    utag.loader.PINIT()
                }, utag.cfg.waittimer || 1);
            }
        })
    } else {
        utag.loader.PINIT()
    }
}
//tealium universal tag - utag.347 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;
        if (utag === undefined) {
            utag = {};
        }
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var a, b, c, l;
                a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    b.setAttribute("height", "1");
                    b.setAttribute("width", "1");
                    b.setAttribute("style", "display:none");
                    b.setAttribute("src", o.src);
                } else if (o.type === "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                    b.src = o.src;
                    return;
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id;
                }
                if (typeof o.cb === "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState === "complete" || this.readyState === "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l === "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b);
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        u.ev = {
            'view': 1
        };
        u.initialized = false;
        u.map = {
            "_sm_347_1": "lotame.politico.main,lotame.politico.default",
            "_sm_347_2": "lotame.politico.pro"
        };
        u.extend = [function(a, b) {
            try {
                b['_sm_347_1'] = "2641";
            } catch (e) {
                utag.DB(e);
            }
            try {
                b['_sm_347_2'] = "2643";
            } catch (e) {
                utag.DB(e);
            }
        }];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f, i;
                u.data = {
                    "cc_key": "ccaud",
                    "base_url": "//tags.crwdcntrl.net/lt/c/{id}/lt.min.js"
                };
                for (c = 0; c < u.extend.length; c++) {
                    try {
                        d = u.extend[c](a, b);
                        if (d == false) return
                    } catch (e) {}
                };
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.data[e[f]] = b[d];
                        }
                    }
                }
                var targetingKey = 'lotame';
                var lotameClientId = u.data['lotame.' + utag.id] || u.data['lotame.politico.default'];
                var audLocalStorageKey = 'lotame_' + lotameClientId + '_auds';
                var storedAuds = window.localStorage.getItem(audLocalStorageKey) || '';
                u.data.base_url = u.data.base_url.replace('{id}', lotameClientId)
                if (storedAuds) {
                    window.dartCCKey = u.data.cc_key;
                    window.dartCC = storedAuds;
                    utag.data.dart_cc = window.dartCC;
                }
                var audienceReadyCallback = function(profile) {
                    var lotameAudiences = profile.getAudiences() || [];
                    window.dartCCKey = u.data.cc_key;
                    window.dartCC = lotameAudiences.join(',');
                    utag.data.dart_cc = window.dartCC;
                };
                var lotameTagInput = {
                    data: {},
                    config: {
                        clientId: Number(lotameClientId),
                        audienceLocalStorage: audLocalStorageKey,
                        onProfileReady: audienceReadyCallback
                    }
                };
                var lotameConfig = lotameTagInput.config || {};
                var namespace = window['lotame_' + lotameConfig.clientId] = {};
                namespace.config = lotameConfig;
                namespace.data = lotameTagInput.data || {};
                namespace.cmd = namespace.cmd || [];
                u.loader_cb = function() {
                    u.initialized = true;
                    window.dartCCKey = u.data.cc_key;
                    window.dartCC = "";
                    if (typeof(ccauds) != 'undefined') {
                        for (var cci = 0; cci < ccauds.Profile.Audiences.Audience.length; cci++) {
                            if (cci > 0) {
                                dartCC += ",";
                                dartCC += ccauds.Profile.Audiences.Audience[cci].id;
                                utag.data.dart_cc = dartCC.indexOf(',') == 0 ? dartCC.substring(1) : dartCC;
                            } else {
                                utag.data.dart_cc = "";
                            }
                        }
                    }
                };
                if (!u.initialized) {
                    u.loader({
                        "type": "script",
                        "src": u.data.base_url,
                        "cb": u.loader_cb,
                        "loc": "script",
                        "id": 'utag_347'
                    });
                } else {
                    u.loader_cb();
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    })("347", "politico.main");
} catch (error) {
    utag.DB(error);
}

//tealium universal tag - utag.329 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;
        if (utag === undefined) {
            utag = {};
        }
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var a, b, c, l;
                a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    b.setAttribute("height", "1");
                    b.setAttribute("width", "1");
                    b.setAttribute("style", "display:none");
                    b.setAttribute("src", o.src);
                } else if (o.type === "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                    b.src = o.src;
                    return;
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id;
                }
                if (typeof o.cb === "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState === "complete" || this.readyState === "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l === "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b);
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        u.ev = {
            'view': 1
        };
        u.initialized = false;
        u.dynamic_ad_config_id = 100;
        u.viewport_ad_config_id = 200;
        u.map = {
            "ad_unit_section": "ad_unit",
            "content_id": "content_id",
            "internal_site_id": "site",
            "content_tag_commas": "content_tag_commas",
            "content_author_commas": "content_author_commas",
            "page_type": "page_type",
            "free_paid_content": "free_paid_content",
            "page_level_1": "page_level_1",
            "dom.referrer": "referrer",
            "hp_server_refresh": "hp_server_refresh",
            "enable_prebid": "enable_prebid",
            "site_experience": "site_experience"
        };
        u.extend = [function(a, b) {
            try {
                if ((b['enable_prebid'].toString().toLowerCase() == 'true'.toLowerCase() && b['site_domain'].toString().toLowerCase().indexOf('west.ops.politico.com'.toLowerCase()) < 0 && b['site_domain'].toString().toLowerCase().indexOf('qablue'.toLowerCase()) < 0)) {
                    (function() {
                        var id = 'prebid';
                        if (!document.getElementById(id)) {
                            var adScript = document.createElement('script');
                            adScript.id = id;
                            adScript.async = 'true';
                            adScript.type = 'text/javascript';
                            var useSSL = 'https:' == document.location.protocol;
                            adScript.src = (useSSL ? 'https:' : 'http:') + '//acdn.adnxs.com/prebid/c/7917/pb.js';
                            var scriptInsert = document.getElementsByTagName('script')[0];
                            scriptInsert.parentNode.insertBefore(adScript, scriptInsert);
                        }
                    })();
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (b['page_level_1'] == 'tipsheets' || (b['ad_unit_section'] == 'blogs' && b['page_level_2'].toString().toLowerCase().indexOf('donald-trump-administration'.toLowerCase()) < 0) || b['page_level_1'] == 'newsletters') {
                    b['ad_unit_section'] = b['page_level_2']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['active_device'].toString().toLowerCase() == 'Android'.toLowerCase() || b['active_device'].toString().toLowerCase() == 'iPhone'.toLowerCase() || b['active_device'].toString().toLowerCase() == 'iPad'.toLowerCase() || b['active_device'].toString().toLowerCase() == 'Windows tablet'.toLowerCase() || b['active_device'].toString().toLowerCase() == 'BlackBerry'.toLowerCase() || b['active_device'].toString().toLowerCase() == 'Windows phone'.toLowerCase()) {
                    (function() {
                        var adScript = document.createElement('script');
                        adScript.async = 'true';
                        adScript.type = 'text/javascript';
                        var useSSL = 'https:' == document.location.protocol;
                        adScript.src = (useSSL ? 'https:' : 'http:') + '//confiant-integrations.global.ssl.fastly.net/NZD0M0OBz2-7bntA9GZmnQ6AMFI/gpt_and_prebid/config.js';
                        var scriptInsert = document.getElementsByTagName('script')[0];
                        scriptInsert.parentNode.insertBefore(adScript, scriptInsert);
                    })();
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    var extensionStart = '112'
                    b.dfp = b.dfp || {}
                    b.dfp.getScrollbarWidth = function() {
                        var outer = document.createElement('div')
                        outer.style.visibility = 'hidden'
                        outer.style.width = '100px'
                        outer.style.msOverflowStyle = 'scrollbar'
                        document.body.appendChild(outer)
                        var widthNoScroll = outer.offsetWidth
                        outer.style.overflow = 'scroll'
                        var inner = document.createElement('div')
                        inner.style.width = '100%'
                        outer.appendChild(inner)
                        var widthWithScroll = inner.offsetWidth
                        outer.parentNode.removeChild(outer)
                        return widthNoScroll - widthWithScroll
                    }
                    b.dfp.waitForElement = function(selector, time, function_to_run, max_runs, this_run) {
                        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
                        if (typeof max_runs === 'undefined') {
                            max_runs = performance.now() + time * 10
                        }
                        if (typeof this_run === 'undefined') {
                            this_run = performance.now()
                        }
                        if (max_runs < this_run) {
                            return
                        }
                        if (document.querySelectorAll(selector).length) {
                            function_to_run()
                            return
                        } else {
                            requestAnimationFrame(function() {
                                utag.dfp.waitForElement(selector, time, function_to_run, max_runs)
                            }, time)
                        }
                    }
                    b.dfp.generateConfig = function(obj, ignoreOutOfPage) {
                        var result = []
                        for (var i in obj) {
                            if (typeof obj[i] == 'object') {
                                var defaultSize = obj[i].defaultSize || []
                                switch (obj[i].adtype) {
                                    case 'pol-08':
                                        defaultSize.push([728, 90])
                                        break
                                    case 'ad-bigm':
                                        defaultSize.push([320, 250])
                                        break
                                }
                                var targetPos = obj[i].targetPos || parseInt(obj[i].adtype.replace(/^\D+/g, ''))
                                if (isNaN(targetPos)) {
                                    continue
                                }
                                var slotSizes = obj[i].sz || []
                                var hasPlaceholder = obj[i].hasPlaceholder || false
                                var lazyLoad = true
                                var $elem = $('#' + obj[i].moduleid)
                                if (typeof obj[i].lazyLoad !== 'undefined') {
                                    lazyLoad = obj[i].lazyLoad
                                }
                                if ($elem.length > 0 && $elem.hasClass('js-lazy-load') && !document.querySelectorAll('#templateCoreHomepage').length) {
                                    lazyLoad = true
                                }
                                result.push({
                                    type: 'onpage',
                                    slotName: '/' + u.data.network_id + '/' + u.data.site + '/' + u.data.ad_unit,
                                    id: obj[i].moduleid,
                                    targetPosition: targetPos,
                                    defaultSize: defaultSize,
                                    slotSizes: slotSizes,
                                    hasPlaceholder: hasPlaceholder,
                                    lazyLoad: lazyLoad
                                })
                            }
                        }
                        if (!ignoreOutOfPage) {
                            result.push({
                                type: 'outofpage',
                                slotName: '/' + u.data.network_id + '/' + u.data.site + '/' + u.data.ad_unit,
                                id: 'pol-oop',
                                targetPosition: 99,
                                defaultSize: [],
                                slotSizes: []
                            })
                        }
                        return result
                    }
                    b.dfp.loadAd = function(slot) {
                        if (!gptadslots[slot.targetPosition]) {
                            if (slot.type === 'onpage') {
                                var collapseEmptyDiv = !(slot.hasPlaceholder || false)
                                var mapping = googletag.sizeMapping()
                                var slotSize
                                var i = 0
                                for (i; i < slot.slotSizes.length; i++) {
                                    slotSize = slot.slotSizes[i]
                                    mapping.addSize(slotSize.definition, slotSize.sizes)
                                }
                                mapping = mapping.build()
                                gptadslots[slot.targetPosition] = googletag
                                    .defineSlot(slot.slotName, slot.defaultSize, slot.id)
                                    .defineSizeMapping(mapping)
                                    .setTargeting('pos', [slot.targetPosition.toString()])
                                    .setCollapseEmptyDiv(collapseEmptyDiv)
                                    .addService(googletag.pubads())
                            } else if (slot.type === 'outofpage') {
                                gptadslots[slot.targetPosition] = googletag
                                    .defineOutOfPageSlot(slot.slotName, slot.id)
                                    .addService(googletag.pubads())
                            }
                        }
                    }
                    b.dfp.loadAds = function(config, showAdmantX) {
                        if (typeof googletag !== 'undefined') {
                            var admantx = showAdmantX || false
                            googletag = window.googletag || {
                                cmd: []
                            }
                            googletag.cmd.push(function() {
                                var i = 0
                                for (i; i < config.length; i++) {
                                    b.dfp.loadAd(config[i])
                                }
                                if (!window.adsRefreshed) {
                                    if (typeof dartCCKey != 'undefined' && typeof dartCC != 'undefined')
                                        googletag.pubads().setTargeting(dartCCKey, [dartCC])
                                    if (admantx && typeof admantx1 != 'undefined' && typeof admantx2 != 'undefined') {
                                        googletag
                                            .pubads()
                                            .setTargeting('admantx', [admantx1])
                                            .setTargeting('admantxcat', [admantx2])
                                    }
                                    if (u.data.content_id)
                                        googletag.pubads().setTargeting('content_id', u.data.content_id)
                                    if (u.data.content_tag_commas)
                                        googletag.pubads().setTargeting('content_tag_commas', u.data.content_tag_commas)
                                    if (u.data.content_author_commas)
                                        googletag
                                        .pubads()
                                        .setTargeting('content_author_commas', u.data.content_author_commas)
                                    if (u.data.page_type)
                                        googletag.pubads().setTargeting('page_type', u.data.page_type)
                                    if (u.data.page_level_1)
                                        googletag.pubads().setTargeting('page_level_1', u.data.page_level_1)
                                    if (u.data.page_level_3)
                                        googletag.pubads().setTargeting('page_level_3', u.data.page_level_3)
                                    if (u.data.free_paid_content)
                                        googletag.pubads().setTargeting('free_paid_content', u.data.free_paid_content)
                                    if (u.data.enable_prebid) {
                                        googletag.pubads().setTargeting('enable_prebid', u.data.enable_prebid)
                                    }
                                    if (u.data.site_experience)
                                        googletag.pubads().setTargeting('site_experience', u.data.site_experience)
                                    if (u.data.referrer) googletag.pubads().setTargeting('referrer', u.data.referrer)
                                    if (u.data.lead_media)
                                        googletag.pubads().setTargeting('lead_media', u.data.lead_media)
                                    if (u.data.cid) googletag.pubads().setTargeting('cid', u.data.cid)
                                    if (u.data.hp_server_refresh)
                                        googletag.pubads().setTargeting('hp_server_refresh', u.data.hp_server_refresh)
                                    googletag.pubads().collapseEmptyDivs()
                                    googletag.pubads().enableAsyncRendering()
                                    googletag.pubads().disableInitialLoad()
                                    googletag.enableServices()
                                }
                            })
                        }
                    }
                    b.dfp.displayAds = window.displayAds = function(config, lazyLoad, slot, clicktoload) {
                        lazyLoad = typeof lazyLoad === 'undefined' ? false : true
                        clicktoload = typeof clicktoload === 'undefined' ? false : clicktoload
                        slot = typeof slot === 'undefined' ? '' : slot
                        var pbjs = window.pbjs || {}
                        if (typeof googletag !== 'undefined') {
                            window.adsRefreshed = true
                            var i = 0
                            var slotName
                            var targetPosition
                            for (i; i < config.length; i++) {
                                slotName = config[i].id
                                targetPosition = config[i].targetPosition
                                var isDynamicAd = parseInt(targetPosition) >= 100
                                if (pbjs.infiniteScroll && isDynamicAd) {
                                    var adSlotPreId = slotName.match(/pol-(vp|\d*)/)[0]
                                    var adSlotPostId = ''
                                    if (adSlotPreId === 'pol-vp') {
                                        var dynamicAdSlotId = slotName.match(/\d+$/)[0]
                                        if (dynamicAdSlotId >= 200) {
                                            adSlotPostId = '-' + (parseInt(targetPosition) - 1)
                                        } else {
                                            adSlotPostId = '-00'
                                        }
                                    }
                                    var targetAdUnitCode = adSlotPreId + adSlotPostId
                                    pbjs.infiniteScroll([{
                                        targetAdUnitCode: targetAdUnitCode,
                                        newAdUnitCode: slotName
                                    }], {
                                        changeCorrelator: false
                                    })
                                } else if (slot === '' || slot === slotName) {
                                    if ((typeof config[i].lazyLoad === 'undefined' || config[i].lazyLoad === lazyLoad) && (typeof config[i].clicktoload === 'undefined' || config[i].clicktoload === clicktoload)) {
                                        adSlots[slotName] = googletag.cmd.push(function() {
                                            googletag.display(slotName)
                                            if (!isNaN(config[i].targetPosition)) {
                                                googletag.pubads().refresh([gptadslots[config[i].targetPosition]], {
                                                    changeCorrelator: false
                                                })
                                            }
                                        })
                                    }
                                }
                            }
                        }
                    }
                    b.dfp.initAds = function() {
                        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
                        var checkLoaded = function(timestamp) {
                            var found = false
                            if (typeof window.googletag !== 'undefined') {
                                if (window.googletag.apiReady && window.adsConfig.length > 0) {
                                    found = true
                                }
                            }
                            if (found) {
                                b.dfp.displayAds(window.adsConfig)
                            } else {
                                requestAnimationFrame(checkLoaded)
                            }
                        }
                        requestAnimationFrame(checkLoaded)
                    }
                    var extensionEnd = '112'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    var extensionStart = '113'
                    b.dfp = b.dfp || {}
                    b.dfp.handleFirstAuctionEnd = function() {
                        pbjs.offEvent('setTargeting', b.dfp.handleFirstAuctionEnd)
                        console.log('Auction Ended, call ad server')
                        b.dfp.initAds()
                    }
                    var extensionEnd = '113'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    var extensionStart = '114'
                    b.dfp = b.dfp || {}
                    window.adsConfig = window.adsConfig || []
                    b.dfp.generateAdSlot = window.generateAdSlot = function(adSlotId, lazyLoad, hasPlaceholder) {
                        if (!(window.adstruct_all_ads && window.adstruct_all_ads[adSlotId])) {
                            return null
                        }
                        lazyLoad = lazyLoad || window.adstruct_all_ads[adSlotId].lazyLoad
                        hasPlaceholder = hasPlaceholder || window.adstruct_all_ads[adSlotId].hasPlaceholder || true
                        u.ad_config_id = parseInt(adSlotId.split('pol-')[1])
                        u.ad_id = adSlotId
                        u.ad_selector = '#' + u.ad_id
                        u.data.ad_unit = window.utag_data.ad_unit_section
                        var adConfig = utag.dfp.generateConfig({
                            continuous: {
                                adtype: u.ad_id,
                                dccat: window.adstruct_all_ads[adSlotId].dccat,
                                isflex: window.adstruct_all_ads[adSlotId].isflex,
                                moduleid: u.ad_id,
                                pg: window.utag_data.ad_unit_section,
                                lazyLoad: lazyLoad,
                                hasPlaceholder: hasPlaceholder,
                                targetPos: u.ad_config_id,
                                defaultSize: [
                                    [300, 250]
                                ],
                                sz: window.adstruct_all_ads[adSlotId].sz,
                                tile: window.adstruct_all_ads[adSlotId].tile
                            }
                        }, true)
                        window.adsConfig = window.adsConfig.concat(adConfig);
                        utag.dfp.waitForElement(u.ad_selector, 1000, function() {
                            utag.dfp.loadAds(adConfig, true)
                            if (lazyLoad) {
                                b.dfp.initLazyLoadedAds(adConfig)
                            } else {
                                utag.dfp.displayAds(adConfig)
                            }
                        })
                        return u.ad_id
                    }
                    b.dfp.getSizeName = function(adStruct, slotHeight) {
                        if (adStruct.sz) {
                            return ''
                        } else {
                            var sizeName = 'small'
                            if (slotHeight >= 1076) {
                                sizeName = 'large'
                            } else if (slotHeight >= 626) {
                                sizeName = 'medium'
                            }
                            return sizeName
                        }
                    }
                    b.dfp.getSizeArray = function(adStruct, sizeName) {
                        if (sizeName === '') {
                            return adStruct.sz
                        } else {
                            return adStruct['sz-' + sizeName]
                        }
                    }
                    b.dfp.generateDynamicAdSlot = window.generateDynamicAdSlot = function(adSlotId, lazyLoad, hasPlaceholder, slotHeight) {
                        if (!(window.adstruct_all_ads && window.adstruct_all_ads[adSlotId])) {
                            return null
                        }
                        var adStruct = window.adstruct_all_ads[adSlotId]
                        slotHeight = slotHeight || -1
                        var sizeName = b.dfp.getSizeName(adStruct, slotHeight)
                        var sizeArray = b.dfp.getSizeArray(adStruct, sizeName)
                        lazyLoad = lazyLoad || adStruct.lazyLoad
                        hasPlaceholder = hasPlaceholder || window.adstruct_all_ads[adSlotId].hasPlaceholder || true
                        u.dynamic_ad_config_id++
                            u.ad_id = sizeName === '' ? adSlotId + '-' + u.dynamic_ad_config_id : adSlotId + '-' + sizeName + '-' + u.dynamic_ad_config_id
                        u.ad_selector = '#' + u.ad_id
                        u.data.ad_unit = window.utag_data.ad_unit_section
                        var adConfig = utag.dfp.generateConfig({
                            continuous: {
                                adtype: u.ad_id,
                                dccat: adStruct.dccat,
                                isflex: adStruct.isflex,
                                moduleid: u.ad_id,
                                pg: window.utag_data.ad_unit_section,
                                lazyLoad: lazyLoad,
                                hasPlaceholder: hasPlaceholder,
                                targetPos: u.dynamic_ad_config_id,
                                defaultSize: [
                                    [300, 250]
                                ],
                                sz: sizeArray,
                                tile: adStruct.tile
                            }
                        }, true)
                        window.adsConfig = window.adsConfig.concat(adConfig);
                        utag.dfp.waitForElement(u.ad_selector, 1000, function() {
                            utag.dfp.loadAds(adConfig, true)
                            if (lazyLoad) {
                                b.dfp.initLazyLoadedAds(adConfig)
                            } else {
                                utag.dfp.displayAds(adConfig)
                            }
                        })
                        return u.ad_id
                    }
                    b.dfp.generateViewportAdSlot = window.generateViewportAdSlot = function(adSlotId, lazyLoad, hasPlaceholder) {
                        if (!(window.adstruct_all_ads && window.adstruct_all_ads[adSlotId])) {
                            return null
                        }
                        lazyLoad = lazyLoad || window.adstruct_all_ads[adSlotId].lazyLoad
                        hasPlaceholder = hasPlaceholder || window.adstruct_all_ads[adSlotId].hasPlaceholder || true
                        u.viewport_ad_config_id++
                            u.ad_id = adSlotId + '-' + u.viewport_ad_config_id
                        u.ad_selector = '#' + u.ad_id
                        u.data.ad_unit = window.utag_data.ad_unit_section
                        var adConfig = b.dfp.generateConfig({
                            continuous: {
                                adtype: u.ad_id,
                                dccat: window.adstruct_all_ads[adSlotId].dccat,
                                isflex: window.adstruct_all_ads[adSlotId].isflex,
                                moduleid: u.ad_id,
                                pg: window.utag_data.ad_unit_section,
                                lazyLoad: lazyLoad,
                                hasPlaceholder: hasPlaceholder,
                                targetPos: u.viewport_ad_config_id,
                                defaultSize: [
                                    [300, 250]
                                ],
                                sz: window.adstruct_all_ads[adSlotId].sz,
                                tile: window.adstruct_all_ads[adSlotId].tile
                            }
                        }, true)
                        window.viewportAdsConfig = window.viewportAdsConfig || [];
                        window.viewportAdsConfig.push(adConfig);
                        b.dfp.waitForElement(u.ad_selector, 1000, function() {
                            b.dfp.loadAds(adConfig, true)
                            if (lazyLoad) {
                                b.dfp.initLazyLoadedAds(adConfig)
                            } else {
                                utag.dfp.displayAds(adConfig)
                            }
                        })
                        return u.ad_id
                    }
                    b.dfp.initLazyLoadedAds = function(adConfig) {
                        var checkWaypointLoaded = function() {
                            if ($(document.body).waypoint) {
                                adConfig.forEach(function(slot) {
                                    $('#' + slot.id).waypoint({
                                        handler: function() {
                                            b.dfp.displayAds([slot], true)
                                            this.disable()
                                        },
                                        offset: '200%',
                                        context: window
                                    })
                                })
                            } else {
                                requestAnimationFrame(checkWaypointLoaded)
                            }
                        }
                        requestAnimationFrame(checkWaypointLoaded)
                    }
                    var extensionEnd = '114'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    var extensionStart = '517';
                    (function() {
                        ! function(a9, a, p, s, t, A, g) {
                            if (a[a9]) return;

                            function q(c, r) {
                                a[a9]._Q.push([c, r])
                            }
                            a[a9] = {
                                init: function() {
                                    q("i", arguments)
                                },
                                fetchBids: function() {
                                    q("f", arguments)
                                },
                                setDisplayBids: function() {},
                                targetingKeys: function() {
                                    return []
                                },
                                _Q: []
                            };
                            A = p.createElement(s);
                            A.async = !0;
                            A.src = t;
                            g = p.getElementsByTagName(s)[0];
                            g.parentNode.insertBefore(A, g)
                        }
                        ("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");
                    })();
                    b.dfp = b.dfp || {};
                    b.dfp.createAmazonConfig = function(config) {
                        var exclude = ['pol-oop', 'pol-native-11', 'pol-native-12', 'pol-08', 'pol-10'];
                        return config.filter(function(slot) {
                            return exclude.indexOf(slot.id) === -1
                        }).map(function(slot) {
                            var sizes = [];
                            var set = {};
                            slot.slotSizes.forEach(function(definition) {
                                definition.sizes.forEach(function(size) {
                                    var key = size.join('-')
                                    if (size[0] !== 1 && size[1] !== 1 && !set[key]) {
                                        sizes.push(size);
                                        set[key] = true;
                                    }
                                })
                            })
                            return {
                                slotID: slot.id,
                                slotName: slot.slotName,
                                sizes: sizes,
                            }
                        })
                    }
                    b.dfp.getSlotById = function(slotId) {
                        return window.googletag.pubads().getSlots().filter(function(slot) {
                            return slotId === slot.getSlotElementId();
                        });
                    }
                    b.dfp.prebidCallback = function(slotId) {
                        googletag.cmd.push(function() {
                            pbjs.setTargetingForGPTAsync([slotId]);
                        });
                        googletag.cmd.push(function() {
                            window.googletag.pubads().refresh(utag.dfp.getSlotById(slotId), {
                                changeCorrelator: false
                            });
                        });
                    }
                    b.dfp.displayAds = window.displayAds = function(config, lazyLoad, slot, clicktoload) {
                        lazyLoad = (typeof lazyLoad === 'undefined') ? false : true;
                        clicktoload = (typeof clicktoload === 'undefined') ? false : clicktoload;
                        slot = (typeof slot === 'undefined') ? '' : slot;
                        var pbjs = window.pbjs || {};
                        if (typeof googletag !== 'undefined') {
                            window.adsRefreshed = true;
                            var i = 0;
                            var slotName;
                            var targetPosition;
                            for (i; i < config.length; i++) {
                                slotName = config[i].id;
                                targetPosition = config[i].targetPosition
                                var isDynamicAd = parseInt(targetPosition) >= 100
                                if (pbjs.infiniteScroll && isDynamicAd) {
                                    var adSlotPreId = slotName.match(/pol\-(vp|\d*)/)[0]
                                    var adSlotInteractives = slotName.match(/^pol\-(\d){3}\-(cube|supercube|leaderboard)$/)
                                    var adSlotPostId = ''
                                    if (adSlotInteractives) {
                                        adSlotPreId = 'pol-990-'
                                        adSlotPostId = adSlotInteractives[2]
                                    }
                                    if (adSlotPreId === 'pol-vp') {
                                        var dynamicAdSlotId = slotName.match(/\d+$/)[0]
                                        if (dynamicAdSlotId >= 200) {
                                            adSlotPostId = '-' + (parseInt(targetPosition) - 1)
                                        } else {
                                            adSlotPostId = '-00'
                                        }
                                    }
                                    var targetAdUnitCode = adSlotPreId + adSlotPostId
                                    apstag.fetchBids({
                                        timeout: 5000,
                                        slots: [{
                                            "slotID": slotName,
                                            "slotName": config[i].slotName,
                                            "sizes": [
                                                [300, 250],
                                                [320, 250],
                                                [630, 250]
                                            ]
                                        }]
                                    }, function(bids) {
                                        console.debug('Recevied bids from Amazon TAM', bids)
                                        apstag.setDisplayBids();
                                        pbjs.addAdUnits(pbjs.adUnits.filter(function(unit) {
                                            return unit.code === targetAdUnitCode
                                        }).map(function(unit) {
                                            return Object.assign({}, unit, {
                                                code: slotName,
                                                transactionId: undefined
                                            })
                                        }));
                                        pbjs.requestBids({
                                            bidsBackHandler: function(bids) {
                                                console.debug('Received bids from Prebid.js', bids)
                                                pbjs.setTargetingForGPTAsync();
                                                pbjs.refreshAds([slotName])
                                            }
                                        })
                                    })
                                } else if (slot === '' || slot === slotName) {
                                    if ((typeof config[i].lazyLoad === 'undefined' || config[i].lazyLoad === lazyLoad) && (typeof config[i].clicktoload === 'undefined' || config[i].clicktoload === clicktoload)) {
                                        adSlots[slotName] = googletag.cmd.push(function() {
                                            googletag.display(slotName);
                                            if (!isNaN(config[i].targetPosition)) {
                                                googletag.pubads().refresh([gptadslots[config[i].targetPosition]], {
                                                    changeCorrelator: false
                                                });
                                            }
                                        });
                                    }
                                }
                            }
                        }
                    }
                    apstag.init({
                        pubID: '3875',
                        adServer: 'googletag'
                    });
                    var extensionEnd = '517';
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (typeof b['dom.referrer'] != 'undefined' && b['dom.referrer'] != '') {
                    try {
                        b['dom.referrer'] = b["dom.referrer"].match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)[2]
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f, i;
                u.data = {
                    "ad_unit": "default",
                    "network_id": "6326",
                    "site": "politico",
                    "content_id": "",
                    "content_tag_commas": "",
                    "content_author_commas": "",
                    "referrer": "",
                    "page_level_1": "",
                    "page_type": ""
                };
                for (c = 0; c < u.extend.length; c++) {
                    try {
                        d = u.extend[c](a, b);
                        if (d == false) return
                    } catch (e) {}
                };
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.data[e[f]] = b[d];
                        }
                    }
                }
                utag.dfp = utag.dfp || {};
                for (var key in b.dfp) {
                    utag.dfp[key] = b.dfp[key];
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    })("329", "politico.main");
} catch (error) {
    utag.DB(error);
}

//tealium universal tag - utag.333 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;
        if (utag === undefined) {
            utag = {};
        }
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        u.ev = {
            'view': 1
        };
        u.initialized = false;
        u.ad_config_id = 0;
        u.map = {
            "ad_unit_section": "ad_unit",
            "content_id": "content_id",
            "internal_site_id": "site",
            "content_tag_commas": "content_tag_commas",
            "content_author_commas": "content_author_commas",
            "page_type": "page_type",
            "total_paragraph": "total_paragraph",
            "dom.referrer": "referrer",
            "enable_prebid": "enable_prebid"
        };
        u.extend = [function(a, b) {
            window.initOutbrain = function() {
                var outbrainDiv = document.getElementById('OUTBRAIN')
                var outbrainWidgetId = outbrainDiv && outbrainDiv.getAttribute('data-widget-id') || 'AR_11'
                if (outbrainDiv != null && outbrainWidgetId != null && outbrainWidgetId != '') {
                    var newDiv = document.createElement('div')
                    newDiv.setAttribute('class', 'OUTBRAIN')
                    newDiv.setAttribute('data-src', b['dom.url'])
                    newDiv.setAttribute('data-widget-id', outbrainWidgetId)
                    newDiv.setAttribute('data-ob-template', 'Politico')
                    outbrainDiv.appendChild(newDiv);
                    var adScript = document.createElement('script')
                    adScript.async = 'true'
                    adScript.type = 'text/javascript'
                    var useSSL = 'https:' == document.location.protocol
                    adScript.src = (useSSL ? 'https:' : 'http:') + '//widgets.outbrain.com/outbrain.js'
                    var scriptInsert = document.getElementsByTagName('script')[0]
                    scriptInsert.parentNode.insertBefore(adScript, scriptInsert)
                }
            }
        }, function(a, b) {
            try {
                if (typeof b['dom.referrer'] != 'undefined' && b['dom.referrer'] != '') {
                    try {
                        b['dom.referrer'] = b["dom.referrer"].match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)[2]
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    utag.dfp = utag.dfp || {}
                    utag.dfp.additionalAds = utag.dfp.additionalAds || []
                    utag.dfp.additionalAds.push(function() {
                        googletag.cmd.push(function() {
                            var slot = googletag.defineOutOfPageSlot("/" + u.data.network_id + "/" + u.data.site + "/" + u.data.ad_unit + "/" + "anchor", googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR);
                            if (slot) {
                                slot.setTargeting("pos", 222)
                                slot.addService(googletag.pubads());
                                googletag.pubads().disableInitialLoad()
                                googletag.enableServices();
                                googletag.display(slot);
                                googletag.pubads().refresh([slot])
                            }
                        })
                    })
                }
            } catch (e) {
                utag.DB(e)
            }
        }];
        u.send = function(a, b) {
            var adsLoaded = false;
            if (typeof window.gptadslots !== 'undefined') {
                if (window.gptadslots.length > 0) {
                    adsLoaded = true;
                }
            }
            if (!adsLoaded) {
                if (u.ev[a] || u.ev.all !== undefined) {
                    var c, d, e, f, i;
                    for (c = 0; c < u.extend.length; c++) {
                        try {
                            d = u.extend[c](a, b);
                            if (d == false) return
                        } catch (e) {}
                    };
                    u.data = {
                        "ad_unit": "default",
                        "network_id": "6326",
                        "site": "politico",
                        "scrollbar_width": utag.dfp.getScrollbarWidth(),
                        "content_id": "",
                        "content_tag_commas": "",
                        "content_author_commas": "",
                        "referrer": "",
                        "page_level_1": "",
                        "page_type": ""
                    };
                    for (d in utag.loader.GV(u.map)) {
                        if (b[d] !== undefined && b[d] !== "") {
                            e = u.map[d].split(",");
                            for (f = 0; f < e.length; f++) {
                                u.data[e[f]] = b[d];
                            }
                        }
                    }
                    var ad_unit = u.data.ad_unit;
                    var site = u.data.site;
                    window.gptadslots = window.gptadslots || [];
                    window.googletag = window.googletag || {};
                    window.googletag.cmd = window.googletag.cmd || [];
                    window.scrollbarWidth = u.data.scrollbar_width;
                    u.loader_cb = function() {
                        u.initialized = true;
                        window.adSlots = {};
                        window.adstruct_all_ads = {
                            'pol-01': {
                                'adtype': 'pol-01',
                                'lazyLoad': false,
                                'dccat': 'null',
                                'isflex': true,
                                'moduleid': 'pol-01',
                                'pg': u.data.ad_unit,
                                'pos': 1,
                                'sz': [{
                                    'definition': [0, 0],
                                    'sizes': [
                                        [320, 50]
                                    ]
                                }, {
                                    'definition': [728 - scrollbarWidth, 50],
                                    'sizes': [
                                        [1, 1],
                                        [728, 90]
                                    ]
                                }, {
                                    'definition': [970 - scrollbarWidth, 50],
                                    'sizes': [
                                        [1, 1],
                                        [970, 90],
                                        [728, 90],
                                        [970, 250]
                                    ]
                                }],
                                'tile': 1
                            },
                            'pol-02': {
                                'adtype': 'pol-02',
                                'lazyLoad': false,
                                'dccat': 'null',
                                'isflex': true,
                                'moduleid': 'pol-02',
                                'pg': u.data.ad_unit,
                                'pos': 2,
                                'sz': [{
                                    'definition': [0, 0],
                                    'sizes': []
                                }, {
                                    'definition': [1020 - scrollbarWidth, 60],
                                    'sizes': [
                                        [300, 250],
                                        [300, 600]
                                    ]
                                }],
                                'tile': 2
                            },
                            'pol-03': {
                                'adtype': 'pol-03',
                                'lazyLoad': false,
                                'dccat': 'null',
                                'isflex': true,
                                'moduleid': 'pol-03',
                                'pg': u.data.ad_unit,
                                'pos': 2,
                                'sz': [{
                                    'definition': [0, 0],
                                    'sizes': [
                                        [300, 250]
                                    ]
                                }, {
                                    'definition': [730 - scrollbarWidth, 50],
                                    'sizes': [
                                        [300, 250],
                                        [728, 90]
                                    ]
                                }, {
                                    'definition': [980 - scrollbarWidth, 50],
                                    'sizes': [
                                        [970, 250],
                                        [300, 250],
                                        [970, 90],
                                        [729, 90]
                                    ]
                                }, {
                                    'definition': [1020 - scrollbarWidth, 60],
                                    'sizes': []
                                }],
                                'tile': 3
                            },
                            'pol-04': {
                                'adtype': 'pol-04',
                                'lazyLoad': false,
                                'dccat': 'null',
                                'isflex': true,
                                'moduleid': 'pol-04',
                                'pg': u.data.ad_unit,
                                'pos': 4,
                                'sz-small': [{
                                    'definition': [0, 0],
                                    'sizes': [
                                        [300, 250]
                                    ]
                                }, {
                                    'definition': [1020 - scrollbarWidth, 60],
                                    'sizes': [
                                        [300, 250]
                                    ]
                                }],
                                'sz-medium': [{
                                    'definition': [0, 0],
                                    'sizes': [
                                        [300, 250]
                                    ]
                                }, {
                                    'definition': [1020 - scrollbarWidth, 60],
                                    'sizes': [
                                        [300, 250],
                                        [300, 600], 'fluid',
                                    ]
                                }],
                                'sz-large': [{
                                    'definition': [0, 0],
                                    'sizes': [
                                        [300, 250]
                                    ]
                                }, {
                                    'definition': [1020 - scrollbarWidth, 60],
                                    'sizes': [
                                        [300, 250],
                                        [300, 600],
                                        [300, 1050], 'fluid',
                                    ]
                                }],
                                'tile': 4
                            },
                            'pol-05': {
                                'adtype': 'pol-05',
                                'lazyLoad': false,
                                'dccat': 'null',
                                'isflex': false,
                                'moduleid': 'pol-05',
                                'pg': u.data.ad_unit,
                                'pos': 5,
                                'sz': [{
                                    'definition': [0, 0],
                                    'sizes': [
                                        [300, 250],
                                        [320, 250],
                                        [375, 250],
                                        [1, 1]
                                    ]
                                }, {
                                    'definition': [650 - scrollbarWidth, 50],
                                    'sizes': [
                                        [300, 250],
                                        [320, 250],
                                        [350, 640],
                                        [630, 250]
                                    ]
                                }],
                                'tile': 5
                            },
                            'pol-06': {
                                'adtype': 'pol-06',
                                'clicktoload': true,
                                'dccat': 'null',
                                'isflex': true,
                                'moduleid': 'pol-06',
                                'pg': u.data.ad_unit,
                                'pos': 6,
                                'sz': [{
                                    'definition': [0, 0],
                                    'sizes': []
                                }, {
                                    'definition': [1020 - scrollbarWidth, 60],
                                    'sizes': [
                                        [300, 250],
                                        [300, 600],
                                        [300, 1050]
                                    ]
                                }],
                                'tile': 6
                            },
                            'pol-07': {
                                'adtype': 'pol-07',
                                'lazyLoad': true,
                                'dccat': 'null',
                                'isflex': true,
                                'moduleid': 'pol-07',
                                'pg': u.data.ad_unit,
                                'pos': 7,
                                'sz-small': [{
                                    'definition': [0, 0],
                                    'sizes': [
                                        [300, 250]
                                    ]
                                }, {
                                    'definition': [1020 - scrollbarWidth, 60],
                                    'sizes': [
                                        [300, 250]
                                    ]
                                }],
                                'sz-medium': [{
                                    'definition': [0, 0],
                                    'sizes': [
                                        [300, 250]
                                    ]
                                }, {
                                    'definition': [1020 - scrollbarWidth, 60],
                                    'sizes': [
                                        [300, 250],
                                        [300, 600], 'fluid',
                                    ]
                                }],
                                'sz-large': [{
                                    'definition': [0, 0],
                                    'sizes': [
                                        [300, 250]
                                    ]
                                }, {
                                    'definition': [1020 - scrollbarWidth, 60],
                                    'sizes': [
                                        [300, 250],
                                        [300, 600],
                                        [300, 1050], 'fluid',
                                    ]
                                }],
                                'tile': 7
                            },
                            'pol-vp': {
                                'adtype': 'pol-vp',
                                'lazyLoad': true,
                                'dccat': 'null',
                                'isflex': true,
                                'moduleid': 'pol-vp',
                                'pg': u.data.ad_unit,
                                'sz': [{
                                    'definition': [0, 0],
                                    'sizes': [
                                        [300, 250],
                                        [320, 250],
                                        [350, 260],
                                        [350, 250],
                                        [320, 350],
                                        [375, 250],
                                        [1, 1]
                                    ]
                                }, {
                                    'definition': [650 - scrollbarWidth, 50],
                                    'sizes': [
                                        [300, 250],
                                        [640, 250],
                                        [640, 350],
                                        [640, 480],
                                        [350, 250],
                                        [1, 1]
                                    ]
                                }, {
                                    'definition': [730 - scrollbarWidth, 50],
                                    'sizes': [
                                        [300, 250],
                                        [640, 250],
                                        [350, 250],
                                        [640, 480],
                                        [640, 350],
                                        [728, 90],
                                        [1, 1]
                                    ]
                                }, {
                                    'definition': [980 - scrollbarWidth, 50],
                                    'sizes': [
                                        [970, 250],
                                        [300, 250],
                                        [640, 250],
                                        [350, 250],
                                        [640, 480],
                                        [640, 350],
                                        [970, 90],
                                        [729, 90],
                                        [1, 1]
                                    ]
                                }, {
                                    'definition': [1170 - scrollbarWidth, 50],
                                    'sizes': [
                                        [1160, 250],
                                        [970, 250],
                                        [300, 250],
                                        [970, 90],
                                        [729, 90],
                                        [350, 250],
                                        [640, 480],
                                        [640, 350],
                                        [1160, 400],
                                        [1, 1]
                                    ]
                                }],
                            }
                        };
                        window.adsConfig = utag.dfp.generateConfig(adstruct_all_ads);
                        utag.dfp.loadAds(window.adsConfig, true);
                        if (utag && utag.dfp && utag.dfp.additionalAds) {
                            utag.dfp.additionalAds.forEach(function(callback) {
                                return callback();
                            })
                        }
                        var bidsApstag = false;
                        var bidsPbjs = false;
                        var loaded = null;
                        var countries = ['AT', 'BE', 'BG', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB']
                        utag.dfp.initAdsWithPrebidAndAmazon = function() {
                            console.log('Ads | Original init', performance.now())
                            apstag.fetchBids({
                                timeout: 5000,
                                slots: utag.dfp.createAmazonConfig(window.adsConfig)
                            }, function(bids) {
                                console.log('Recevied bids from Amazon TAM', bids)
                                apstag.setDisplayBids();
                                bidsApstag = true;
                                if (bidsApstag && bidsPbjs) {
                                    utag.dfp.handleFirstAuctionEnd();
                                }
                            })
                            pbjs = window.pbjs || {
                                que: []
                            };
                            pbjs.que.push(function() {
                                function requestBidsWhenReady() {
                                    if (pbjs.adUnits && pbjs.adUnits.length) {
                                        pbjs.requestBids({
                                            bidsBackHandler: function(bids) {
                                                console.log('Received bids from Prebid.js', bids)
                                                pbjs.setTargetingForGPTAsync();
                                                bidsPbjs = true;
                                                if (bidsPbjs && bidsApstag) {
                                                    utag.dfp.handleFirstAuctionEnd();
                                                }
                                            }
                                        })
                                    } else {
                                        window.requestAnimationFrame(requestBidsWhenReady)
                                    }
                                }
                                window.requestAnimationFrame(requestBidsWhenReady)
                            });
                        }
                        if (u.data.enable_prebid == 'true') {
                            utag.dfp.initAdsWithPrebidAndAmazon();
                        } else {
                            initAds();
                        }
                    };
                    u.loader_cb();
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    })("333", "politico.main");
} catch (error) {
    utag.DB(error);
}

//tealium universal tag - utag.129 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
var _sf_startpt = _sf_startpt || (new Date()).getTime();
var _sf_async_config = {};
_sf_async_config.uid = 33430;
_sf_async_config.domain = 'politico.com';
_sf_async_config.useCanonical = (("true" == "true") ? true : false);
try {
    (function(id, loader, u) {
        try {
            u = utag.o[loader].sender[id] = {}
        } catch (e) {
            u = utag.sender[id]
        };
        u.ev = {
            'view': 1
        };
        u.qsp_delim = '&';
        u.kvp_delim = '=';
        u.initialized = false;
        u.base_url = '//static.chartbeat.com/js/chartbeat.js';
        u.map = {
            "site_section": "sections",
            "content_author_commas": "authors"
        };
        u.extend = [];
        u.send = function(a, b, c, d, e, f) {
            if (u.ev[a] || typeof u.ev.all != 'undefined') {
                for (d in utag.loader.GV(u.map)) {
                    if (typeof b[d] != 'undefined' && b[d] != '') {
                        e = u.map[d].split(',');
                        for (f = 0; f < e.length; f++) {
                            _sf_async_config[e[f]] = b[d];
                        }
                    }
                }
                if (!u.initialized) {
                    u.initialized = true;
                    window._sf_endpt = (new Date()).getTime();
                    u.head = document.getElementsByTagName('head')[0];
                    u.scr = document.createElement('script');
                    u.scr.src = u.base_url;
                    u.head.appendChild(u.scr);
                }
            }
        }
        try {
            utag.o[loader].loader.LOAD(id)
        } catch (e) {
            utag.loader.LOAD(id)
        }
    })('129', 'politico.main');
} catch (e) {}

//tealium universal tag - utag.131 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var b, c, l, a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    o.attrs = o.attrs || {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    };
                    for (l in utag.loader.GV(o.attrs)) {
                        b.setAttribute(l, o.attrs[l]);
                    }
                    b.setAttribute("src", o.src);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                    b.src = o.src;
                    return;
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                    for (l in utag.loader.GV(o.attrs)) {
                        b[l] = o.attrs[l];
                    }
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id
                };
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb()
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                                this.onreadystatechange = null;
                                o.cb()
                            }
                        };
                    }
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l == "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b)
                    }
                }
            }
        } else {
            u.loader = utag.ut.loader;
        }
        u.ev = {
            "view": 1,
            "link": 1
        };
        u.initialized = false;
        u.scriptrequested = false;
        u.queue = [];
        u.map = {};
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f, g, i;
                u.data = {
                    "base_url": (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js",
                    "qacct": "p-7bhLrd63bC8jI",
                    "orderid": "",
                    "revenue": "",
                    "order_id": "",
                    "order_subtotal": ""
                };
                window._qevents = [];
                c = [];
                g = {};
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            if (u.data[e[f]] !== undefined) {
                                u.data[e[f]] = b[d];
                            } else if (e[f].indexOf("_fp.") === 0) {
                                c.push(e[f] + "." + b[d]);
                            } else {
                                c.push(b[d]);
                            }
                        }
                    }
                }
                u.data.order_id = u.data.orderid || u.data.order_id || b._corder || "";
                u.data.order_subtotal = u.data.revenue || u.data.order_subtotal || b._csubtotal || "";
                u.loader_cb = function(a, b, c) {
                    u.initialized = true;
                    g.qacct = u.data.qacct;
                    if (c.length > 0) {
                        u.data.labels = c.join(",");
                        g.labels = c.join(",");
                    }
                    if (u.data.order_id) {
                        g.orderid = u.data.order_id;
                    }
                    if (u.data.order_subtotal) {
                        g.revenue = u.data.order_subtotal;
                    }
                    _qevents.push(g);
                };
                u.callBack = function() {
                    var data = {};
                    while (data = u.queue.shift()) {
                        u.data = data.data;
                        u.loader_cb(data.a, data.b, data.c);
                    }
                };
                if (u.initialized) {
                    u.loader_cb(a, b, c);
                } else {
                    u.queue.push({
                        "data": u.data,
                        "a": a,
                        "b": b,
                        "c": c
                    });
                    if (!u.scriptrequested) {
                        u.scriptrequested = true;
                        u.loader({
                            "type": "script",
                            "src": u.data.base_url,
                            "cb": u.callBack,
                            "loc": "script",
                            "id": "utag_131"
                        });
                    }
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("131", "politico.main"));
} catch (error) {
    utag.DB(error);
}

//tealium universal tag - utag.11 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
var s = new AppMeasurement();
s.account = "allbrittonpoliticodev";
s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = true;
s.linkInternalFilters = "javascript:,politico.com";
s.linkLeaveQueryString = false;
s.linkTrackVars = "None";
s.linkTrackEvents = "None";
s.usePlugins = false;
s.currencyCode = "USD";
s.visitorNamespace = "";
s.trackingServer = "metrics.politico.com";
s.trackingServerSecure = "smetrics.politico.com";
s.debugTracking = utag.cfg.utagdb;
if ("") {
    function Visitor(m, t) {
        if (!m) throw "Visitor requires Adobe Marketing Cloud Org ID";
        var a = this;
        a.version = "1.5.4";
        var l = window,
            i = l.Visitor;
        i.version = a.version;
        l.s_c_in || (l.s_c_il = [], l.s_c_in = 0);
        a._c = "Visitor";
        a._il = l.s_c_il;
        a._in = l.s_c_in;
        a._il[a._in] = a;
        l.s_c_in++;
        a.pa = {
            Ka: []
        };
        var o = l.document,
            h = i.Ma;
        h || (h = null);
        var z = i.Na;
        z || (z = void 0);
        var j = i.ja;
        j || (j = !0);
        var k = i.La;
        k || (k = !1);
        a.S = function(a) {
            var c = 0,
                b, e;
            if (a)
                for (b = 0; b < a.length; b++) e = a.charCodeAt(b), c = (c << 5) - c + e, c &= c;
            return c
        };
        a.r = function(a) {
            var c = "0123456789",
                b = "",
                e = "",
                f, g = 8,
                n = 10,
                h = 10;
            if (1 == a) {
                c += "ABCDEF";
                for (a = 0; 16 > a; a++) f = Math.floor(Math.random() * g), b += c.substring(f, f + 1), f = Math.floor(Math.random() * g), e += c.substring(f, f + 1), g = 16;
                return b + "-" + e
            }
            for (a = 0; 19 > a; a++) f = Math.floor(Math.random() * n), b += c.substring(f, f + 1), 0 == a && 9 == f ? n = 3 : (1 == a || 2 == a) && 10 != n && 2 > f ? n = 10 : 2 < a && (n = 10), f = Math.floor(Math.random() * h), e += c.substring(f, f + 1), 0 == a && 9 == f ? h = 3 : (1 == a || 2 == a) && 10 != h && 2 > f ? h = 10 : 2 < a && (h = 10);
            return b + e
        };
        a.ma = function() {
            var a;
            !a && l.location && (a = l.location.hostname);
            if (a)
                if (/^[0-9.]+$/.test(a)) a = "";
                else {
                    var c = a.split("."),
                        b = c.length - 1,
                        e = b - 1;
                    1 < b && 2 >= c[b].length && (2 == c[b - 1].length || 0 > ",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf("," +
                        c[b] + ",")) && e--;
                    if (0 < e)
                        for (a = ""; b >= e;) a = c[b] + (a ? "." : "") + a, b--
                }
            return a
        };
        a.cookieRead = function(a) {
            var a = encodeURIComponent(a),
                c = (";" + o.cookie).split(" ").join(";"),
                b = c.indexOf(";" + a + "="),
                e = 0 > b ? b : c.indexOf(";", b + 1);
            return 0 > b ? "" : decodeURIComponent(c.substring(b + 2 + a.length, 0 > e ? c.length : e))
        };
        a.cookieWrite = function(d, c, b) {
            var e = a.cookieLifetime,
                f, c = "" + c,
                e = e ? ("" + e).toUpperCase() : "";
            b && "SESSION" != e && "NONE" != e ? (f = "" != c ? parseInt(e ? e : 0, 10) : -60) ? (b = new Date, b.setTime(b.getTime() + 1E3 * f)) : 1 == b && (b = new Date, f = b.getYear(), b.setYear(f + 2 + (1900 > f ? 1900 : 0))) : b = 0;
            return d && "NONE" != e ? (o.cookie = encodeURIComponent(d) + "=" + encodeURIComponent(c) + "; path=/;" + (b ? " expires=" + b.toGMTString() + ";" : "") + (a.cookieDomain ? " domain=" + a.cookieDomain + ";" : ""), a.cookieRead(d) == c) : 0
        };
        a.g = h;
        a.A = function(a, c) {
            try {
                "function" == typeof a ? a.apply(l, c) : a[1].apply(a[0], c)
            } catch (b) {}
        };
        a.ra = function(d, c) {
            c && (a.g == h && (a.g = {}), a.g[d] == z && (a.g[d] = []), a.g[d].push(c))
        };
        a.m = function(d, c) {
            if (a.g != h) {
                var b = a.g[d];
                if (b)
                    for (; 0 < b.length;) a.A(b.shift(), c)
            }
        };
        a.j = h;
        a.oa = function(d, c, b) {
            var e = 0,
                f = 0,
                g;
            if (c && o) {
                for (g = 0; !e && 2 > g;) {
                    try {
                        e = (e = o.getElementsByTagName(0 < g ? "HEAD" : "head")) && 0 < e.length ? e[0] : 0
                    } catch (n) {
                        e = 0
                    }
                    g++
                }
                if (!e) try {
                    o.body && (e = o.body)
                } catch (j) {
                    e = 0
                }
                if (e)
                    for (g = 0; !f && 2 > g;) {
                        try {
                            f = o.createElement(0 < g ? "SCRIPT" : "script")
                        } catch (i) {
                            f = 0
                        }
                        g++
                    }
            }!c || !e || !f ? b && b() : (f.type = "text/javascript", f.setAttribute("async", "async"), f.src = c, e.firstChild ? e.insertBefore(f, e.firstChild) : e.appendChild(f), a.pa.Ka.push(c), b && (a.j == h && (a.j = {}), a.j[d] = setTimeout(b, a.loadTimeout)))
        };
        a.ka = function(d) {
            a.j != h && a.j[d] && (clearTimeout(a.j[d]), a.j[d] = 0)
        };
        a.T = k;
        a.U = k;
        a.isAllowed = function() {
            if (!a.T && (a.T = j, a.cookieRead(a.cookieName) || a.cookieWrite(a.cookieName, "T", 1))) a.U = j;
            return a.U
        };
        a.a = h;
        a.d = h;
        var B = i.$a;
        B || (B = "MC");
        var r = i.fb;
        r || (r = "MCMID");
        var C = i.ab;
        C || (C = "MCCIDH");
        var D = i.eb;
        D || (D = "MCSYNCS");
        var F = i.bb;
        F || (F = "MCIDTS");
        var x = i.cb;
        x || (x = "MCOPTOUT");
        var A = i.Ya;
        A || (A = "A");
        var p = i.Va;
        p || (p = "MCAID");
        var y = i.Za;
        y || (y = "AAM");
        var w = i.Xa;
        w || (w = "MCAAMLH");
        var q = i.Wa;
        q || (q = "MCAAMB");
        var s = i.gb;
        s || (s = "NONE");
        a.C = 0;
        a.R = function() {
            if (!a.C) {
                var d = a.version;
                a.audienceManagerServer && (d += "|" + a.audienceManagerServer);
                a.audienceManagerServerSecure && (d += "|" + a.audienceManagerServerSecure);
                a.C = a.S(d)
            }
            return a.C
        };
        a.V = k;
        a.f = function() {
            if (!a.V) {
                a.V = j;
                var d = a.R(),
                    c = k,
                    b = a.cookieRead(a.cookieName),
                    e, f, g, n, i = new Date;
                a.a == h && (a.a = {});
                if (b && "T" != b) {
                    b = b.split("|");
                    b[0].match(/^[\-0-9]+$/) && (parseInt(b[0], 10) != d && (c = j), b.shift());
                    1 == b.length % 2 && b.pop();
                    for (d = 0; d < b.length; d += 2)
                        if (e = b[d].split("-"), f = e[0], g = b[d + 1], 1 < e.length ? (n = parseInt(e[1], 10), e = 0 < e[1].indexOf("s")) : (n = 0, e = k), c && (f == C && (g = ""), 0 < n && (n = i.getTime() / 1E3 - 60)), f && g && (a.c(f, g, 1), 0 < n && (a.a["expire" + f] = n + (e ? "s" : ""), i.getTime() >= 1E3 * n || e && !a.cookieRead(a.sessionCookieName)))) a.d || (a.d = {}), a.d[f] = j
                }
                if (!a.b(p) && (b = a.cookieRead("s_vi"))) b = b.split("|"), 1 < b.length && 0 <= b[0].indexOf("v1") && (g = b[1], d = g.indexOf("["), 0 <= d && (g = g.substring(0, d)), g && g.match(/^[0-9a-fA-F\-]+$/) && a.c(p, g))
            }
        };
        a.ta = function() {
            var d = a.R(),
                c, b;
            for (c in a.a) !Object.prototype[c] && a.a[c] && "expire" != c.substring(0, 6) && (b = a.a[c], d += (d ? "|" : "") + c + (a.a["expire" + c] ? "-" + a.a["expire" + c] : "") + "|" + b);
            a.cookieWrite(a.cookieName, d, 1)
        };
        a.b = function(d, c) {
            return a.a != h && (c || !a.d || !a.d[d]) ? a.a[d] : h
        };
        a.c = function(d, c, b) {
            a.a == h && (a.a = {});
            a.a[d] = c;
            b || a.ta()
        };
        a.na = function(d, c) {
            var b = a.b(d, c);
            return b ? b.split("*") : h
        };
        a.sa = function(d, c, b) {
            a.c(d, c ? c.join("*") : "", b)
        };
        a.Sa = function(d, c) {
            var b = a.na(d, c);
            if (b) {
                var e = {},
                    f;
                for (f = 0; f < b.length; f += 2) e[b[f]] = b[f + 1];
                return e
            }
            return h
        };
        a.Ua = function(d, c, b) {
            var e = h,
                f;
            if (c)
                for (f in e = [], c) Object.prototype[f] || (e.push(f), e.push(c[f]));
            a.sa(d, e, b)
        };
        a.k = function(d, c, b) {
            var e = new Date;
            e.setTime(e.getTime() + 1E3 * c);
            a.a == h && (a.a = {});
            a.a["expire" + d] = Math.floor(e.getTime() / 1E3) + (b ? "s" : "");
            0 > c ? (a.d || (a.d = {}), a.d[d] = j) : a.d && (a.d[d] = k);
            b && (a.cookieRead(a.sessionCookieName) || a.cookieWrite(a.sessionCookieName, "1"))
        };
        a.Q = function(a) {
            if (a && ("object" == typeof a && (a = a.d_mid ? a.d_mid : a.visitorID ? a.visitorID : a.id ? a.id : a.uuid ? a.uuid : "" + a), a && (a = a.toUpperCase(), "NOTARGET" == a && (a = s)), !a || a != s && !a.match(/^[0-9a-fA-F\-]+$/))) a = "";
            return a
        };
        a.i = function(d, c) {
            a.ka(d);
            a.h != h && (a.h[d] = k);
            if (d == B) {
                var b = a.b(r);
                if (!b) {
                    b = "object" == typeof c && c.mid ? c.mid : a.Q(c);
                    if (!b) {
                        if (a.v) {
                            a.getAnalyticsVisitorID(h, k, j);
                            return
                        }
                        b = a.r()
                    }
                    a.c(r, b)
                }
                if (!b || b == s) b = "";
                "object" == typeof c && ((c.d_region || c.dcs_region || c.d_blob || c.blob) && a.i(y, c), a.v && c.mid && a.i(A, {
                    id: c.id
                }));
                a.m(r, [b])
            }
            if (d == y && "object" == typeof c) {
                b = 604800;
                c.id_sync_ttl != z && c.id_sync_ttl && (b = parseInt(c.id_sync_ttl, 10));
                var e = a.b(w);
                e || ((e = c.d_region) || (e = c.dcs_region), e && (a.k(w, b), a.c(w, e)));
                e || (e = "");
                a.m(w, [e]);
                e = a.b(q);
                if (c.d_blob || c.blob)(e = c.d_blob) || (e = c.blob), a.k(q, b), a.c(q, e);
                e || (e = "");
                a.m(q, [e]);
                !c.error_msg && a.t && a.c(C, a.t)
            }
            if (d == A) {
                b = a.b(p);
                b || ((b = a.Q(c)) ? a.k(q, -1) : b = s, a.c(p, b));
                if (!b || b == s) b = "";
                a.m(p, [b])
            }
            a.idSyncDisableSyncs ? u.ba = j : (u.ba = k, b = {}, b.ibs = c.ibs, b.subdomain = c.subdomain, u.Ia(b));
            c === Object(c) && (b = s, c.d_optout && c.d_optout instanceof Array && (b = c.d_optout.join(",")), e = parseInt(c.d_ottl, 10), isNaN(e) && (e = 7200), a.k(x, e, !0), a.c(x, b), a.m(x, [b]))
        };
        a.h = h;
        a.n = function(d, c, b, e) {
            var f = "",
                g;
            if (a.isAllowed() && (a.f(), f = a.b(d), !f && (d == r || d == x ? g = B : d == w || d == q ? g = y : d == p && (g = A), g))) {
                if (c && (a.h == h || !a.h[g])) a.h == h && (a.h = {}), a.h[g] = j, a.oa(g, c, function() {
                    if (!a.b(d)) {
                        var b = "";
                        d == r ? b = a.r() : g == y && (b = {
                            error_msg: "timeout"
                        });
                        a.i(g, b)
                    }
                });
                a.ra(d, b);
                c || a.i(g, {
                    id: s
                });
                return ""
            }
            if ((d == r || d == p) && f == s) f = "", e = j;
            b && e && a.A(b, [f]);
            return f
        };
        a._setMarketingCloudFields = function(d) {
            a.f();
            a.i(B, d)
        };
        a.setMarketingCloudVisitorID = function(d) {
            a._setMarketingCloudFields(d)
        };
        a.v = k;
        a.getMarketingCloudVisitorID = function(d, c) {
            if (a.isAllowed()) {
                a.marketingCloudServer && 0 > a.marketingCloudServer.indexOf(".demdex.net") && (a.v = j);
                var b = a.s("_setMarketingCloudFields");
                return a.n(r, b, d, c)
            }
            return ""
        };
        a.qa = function() {
            a.getAudienceManagerBlob()
        };
        i.AuthState = {
            UNKNOWN: 0,
            AUTHENTICATED: 1,
            LOGGED_OUT: 2
        };
        a.q = {};
        a.P = k;
        a.t = "";
        a.setCustomerIDs = function(d) {
            if (a.isAllowed() && d) {
                a.f();
                var c, b;
                for (c in d)
                    if (!Object.prototype[c] && (b = d[c]))
                        if ("object" == typeof b) {
                            var e = {};
                            b.id && (e.id = b.id);
                            b.authState != z && (e.authState = b.authState);
                            a.q[c] = e
                        } else a.q[c] = {
                            id: b
                        };
                var d = a.getCustomerIDs(),
                    e = a.b(C),
                    f = "";
                e || (e = 0);
                for (c in d) Object.prototype[c] || (b = d[c], f += (f ? "|" : "") + c + "|" + (b.id ? b.id : "") + (b.authState ? b.authState : ""));
                a.t = a.S(f);
                a.t != e && (a.P = j, a.qa())
            }
        };
        a.getCustomerIDs = function() {
            a.f();
            var d = {},
                c, b;
            for (c in a.q) Object.prototype[c] || (b = a.q[c], d[c] || (d[c] = {}), b.id && (d[c].id = b.id), d[c].authState = b.authState != z ? b.authState : i.AuthState.UNKNOWN);
            return d
        };
        a._setAnalyticsFields = function(d) {
            a.f();
            a.i(A, d)
        };
        a.setAnalyticsVisitorID = function(d) {
            a._setAnalyticsFields(d)
        };
        a.getAnalyticsVisitorID = function(d, c, b) {
            if (a.isAllowed()) {
                var e = "";
                b || (e = a.getMarketingCloudVisitorID(function() {
                    a.getAnalyticsVisitorID(d, j)
                }));
                if (e || b) {
                    var f = b ? a.marketingCloudServer : a.trackingServer,
                        g = "";
                    a.loadSSL && (b ? a.marketingCloudServerSecure && (f = a.marketingCloudServerSecure) : a.trackingServerSecure && (f = a.trackingServerSecure));
                    f && (g = "http" + (a.loadSSL ? "s" : "") + "://" + f + "/id?d_visid_ver=" + a.version + "&callback=s_c_il%5B" + a._in + "%5D._set" + (b ? "MarketingCloud" : "Analytics") + "Fields&mcorgid=" + encodeURIComponent(a.marketingCloudOrgID) + (e ? "&mid=" + e : "") + (a.idSyncDisable3rdPartySyncing ? "&d_coppa=true" : ""));
                    return a.n(b ? r : p, g, d, c)
                }
            }
            return ""
        };
        a._setAudienceManagerFields = function(d) {
            a.f();
            a.i(y, d)
        };
        a.s = function(d) {
            var c = a.audienceManagerServer,
                b = "",
                e = a.b(r),
                f = a.b(q, j),
                g = a.b(p),
                g = g && g != s ? "&d_cid_ic=AVID%01" + encodeURIComponent(g) : "";
            a.loadSSL && a.audienceManagerServerSecure && (c = a.audienceManagerServerSecure);
            if (c) {
                var b = a.getCustomerIDs(),
                    h, i;
                if (b)
                    for (h in b) Object.prototype[h] || (i = b[h], g += "&d_cid_ic=" + encodeURIComponent(h) + "%01" + encodeURIComponent(i.id ? i.id : "") + (i.authState ? "%01" + i.authState : ""));
                d || (d = "_setAudienceManagerFields");
                b = "http" + (a.loadSSL ? "s" : "") + "://" + c + "/id?d_visid_ver=" + a.version + "&d_rtbd=json&d_ver=2" + (!e && a.v ? "&d_verify=1" : "") + "&d_orgid=" + encodeURIComponent(a.marketingCloudOrgID) + "&d_nsid=" + (a.idSyncContainerID || 0) + (e ? "&d_mid=" + e : "") + (a.idSyncDisable3rdPartySyncing ? "&d_coppa=true" : "") + (f ? "&d_blob=" + encodeURIComponent(f) : "") + g + "&d_cb=s_c_il%5B" + a._in + "%5D." +
                    d
            }
            return b
        };
        a.getAudienceManagerLocationHint = function(d, c) {
            if (a.isAllowed() && a.getMarketingCloudVisitorID(function() {
                    a.getAudienceManagerLocationHint(d, j)
                })) {
                var b = a.b(p);
                b || (b = a.getAnalyticsVisitorID(function() {
                    a.getAudienceManagerLocationHint(d, j)
                }));
                if (b) return b = a.s(), a.n(w, b, d, c)
            }
            return ""
        };
        a.getAudienceManagerBlob = function(d, c) {
            if (a.isAllowed() && a.getMarketingCloudVisitorID(function() {
                    a.getAudienceManagerBlob(d, j)
                })) {
                var b = a.b(p);
                b || (b = a.getAnalyticsVisitorID(function() {
                    a.getAudienceManagerBlob(d, j)
                }));
                if (b) return b = a.s(), a.P && a.k(q, -1), a.n(q, b, d, c)
            }
            return ""
        };
        a.o = "";
        a.u = {};
        a.D = "";
        a.F = {};
        a.getSupplementalDataID = function(d, c) {
            !a.o && !c && (a.o = a.r(1));
            var b = a.o;
            a.D && !a.F[d] ? (b = a.D, a.F[d] = j) : b && (a.u[d] && (a.D = a.o, a.F = a.u, a.o = b = !c ? a.r(1) : "", a.u = {}), b && (a.u[d] = j));
            return b
        };
        i.OptOut = {
            GLOBAL: "global"
        };
        a.getOptOut = function(d, c) {
            if (a.isAllowed()) {
                var b = a.s("_setMarketingCloudFields");
                return a.n(x, b, d, c)
            }
            return ""
        };
        a.isOptedOut = function(d, c, b) {
            return a.isAllowed() ? (c || (c = i.OptOut.GLOBAL), (b = a.getOptOut(function(b) {
                a.A(d, [b == i.OptOut.GLOBAL || 0 <= b.indexOf(c)])
            }, b)) ? b == i.OptOut.GLOBAL || 0 <= b.indexOf(c) : h) : k
        };
        var v = {
            l: !!l.postMessage,
            ha: 1,
            O: 864E5
        };
        a.Oa = v;
        a.X = {
            postMessage: function(a, c, b) {
                var e = 1;
                c && (v.l ? b.postMessage(a, c.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : c && (b.location = c.replace(/#.*$/, "") + "#" + +new Date + e++ + "&" + a))
            },
            K: function(a, c) {
                var b;
                try {
                    if (v.l)
                        if (a && (b = function(b) {
                                if ("string" === typeof c && b.origin !== c || "[object Function]" === Object.prototype.toString.call(c) && !1 === c(b.origin)) return !1;
                                a(b)
                            }), window.addEventListener) window[a ? "addEventListener" : "removeEventListener"]("message", b, !1);
                        else window[a ? "attachEvent" : "detachEvent"]("onmessage", b)
                } catch (e) {}
            }
        };
        var G = {
            Y: function() {
                if (o.addEventListener) return function(a, c, b) {
                    a.addEventListener(c, function(a) {
                        "function" === typeof b && b(a)
                    }, k)
                };
                if (o.attachEvent) return function(a, c, b) {
                    a.attachEvent("on" + c, function(a) {
                        "function" === typeof b && b(a)
                    })
                }
            }(),
            map: function(a, c) {
                if (Array.prototype.map) return a.map(c);
                if (void 0 === a || a === h) throw new TypeError;
                var b = Object(a),
                    e = b.length >>> 0;
                if ("function" !== typeof c) throw new TypeError;
                for (var f = Array(e), g = 0; g < e; g++) g in b && (f[g] = c.call(c, b[g], g, b));
                return f
            },
            za: function(a, c) {
                return this.map(a, function(a) {
                    return encodeURIComponent(a)
                }).join(c)
            }
        };
        a.Ta = G;
        var u = {
            ia: 3E4,
            N: 649,
            fa: k,
            id: h,
            I: h,
            aa: function(a) {
                if ("string" === typeof a) return a = a.split("/"), a[0] + "//" + a[2]
            },
            e: h,
            url: h,
            Aa: function() {
                var d = "http://fast.",
                    c = "?d_nsid=" + a.idSyncContainerID + "#" + encodeURIComponent(o.location.href);
                this.e || (this.e = "nosubdomainreturned");
                a.loadSSL && (d = a.idSyncSSLUseAkamai ? "https://fast." : "https://");
                d = d + this.e + ".demdex.net/dest5.html" + c;
                this.I = this.aa(d);
                this.id = "destination_publishing_iframe_" + this.e + "_" + a.idSyncContainerID;
                return d
            },
            va: function() {
                var d = "?d_nsid=" + a.idSyncContainerID + "#" + encodeURIComponent(o.location.href);
                "string" === typeof a.B && a.B.length && (this.id = "destination_publishing_iframe_" + (new Date).getTime() + "_" + a.idSyncContainerID, this.I = this.aa(a.B), this.url = a.B + d)
            },
            ba: h,
            H: k,
            M: k,
            w: h,
            hb: h,
            Ga: h,
            ib: h,
            L: k,
            z: [],
            Ea: [],
            Fa: [],
            ca: v.l ? 15 : 100,
            J: [],
            Ca: [],
            $: j,
            da: k,
            Z: function() {
                function a() {
                    e = document.createElement("iframe");
                    e.id = b.id;
                    e.style.cssText = "display: none; width: 0; height: 0;";
                    e.src = b.url;
                    b.Ga = j;
                    c();
                    document.body.appendChild(e)
                }

                function c() {
                    G.Y(e, "load", function() {
                        e.className = "aamIframeLoaded";
                        b.w = j;
                        b.p()
                    })
                }
                this.M = j;
                var b = this,
                    e = document.getElementById(this.id);
                e ? "IFRAME" !== e.nodeName ? (this.id += "_2", a()) : "aamIframeLoaded" !== e.className ? c() : (this.w = j, this.p()) : a();
                this.Ba = e
            },
            p: function(d) {
                var c = this;
                d === Object(d) && this.J.push(d);
                if ((this.da || !v.l || this.w) && this.J.length) this.Ha(this.J.shift()), this.p();
                !a.idSyncDisableSyncs && this.w && this.z.length && !this.L && (this.fa || (this.fa = j, setTimeout(function() {
                    c.ca = v.l ? 15 : 150
                }, this.ia)), this.L = j, this.ea())
            },
            Ha: function(a) {
                var c = encodeURIComponent,
                    b, e, f, g, h;
                if ((b = a.ibs) && b instanceof Array && (e = b.length))
                    for (f = 0; f < e; f++) g = b[f], h = [c("ibs"), c(g.id || ""), c(g.tag || ""), G.za(g.url || [], ","), c(g.ttl || ""), "", "", g.fireURLSync ? "true" : "false"], this.$ ? this.G(h.join("|")) : g.fireURLSync && this.wa(g, h.join("|"));
                this.Ca.push(a)
            },
            wa: function(d, c) {
                a.f();
                var b = a.b(D),
                    e = k,
                    f = k,
                    g = Math.ceil((new Date).getTime() / v.O);
                if (b) {
                    if (b = b.split("*"), f = this.Ja(b, d.id, g), e = f.xa, f = f.ya, !e || !f) this.G(c), b.push(d.id + "-" + (g + Math.ceil(d.ttl / 60 / 24))), this.Da(b), a.c(D, b.join("*"))
                } else this.G(c), a.c(D, d.id + "-" + (g + Math.ceil(d.ttl / 60 / 24)))
            },
            Ja: function(a, c, b) {
                var e = k,
                    f = k,
                    g, h, i;
                for (h = 0; h < a.length; h++) g = a[h], i = parseInt(g.split("-")[1], 10), g.match("^" + c + "-") ? (e = j, b < i ? f = j : (a.splice(h, 1), h--)) : b >= i && (a.splice(h, 1), h--);
                return {
                    xa: e,
                    ya: f
                }
            },
            Da: function(a) {
                if (a.join("*").length > this.N)
                    for (a.sort(function(a, b) {
                            return parseInt(a.split("-")[1], 10) - parseInt(b.split("-")[1], 10)
                        }); a.join("*").length > this.N;) a.shift()
            },
            G: function(d) {
                var c = encodeURIComponent;
                this.z.push((a.Qa ? c("---destpub-debug---") : c("---destpub---")) + d)
            },
            ea: function() {
                var d = this,
                    c;
                this.z.length ? (c = this.z.shift(), a.X.postMessage(c, this.url, this.Ba.contentWindow), this.Ea.push(c), setTimeout(function() {
                    d.ea()
                }, this.ca)) : this.L = k
            },
            K: function(a) {
                var c = /^---destpub-to-parent---/;
                "string" === typeof a && c.test(a) && (c = a.replace(c, "").split("|"), "canSetThirdPartyCookies" === c[0] && (this.$ = "true" === c[1] ? j : k, this.da = j, this.p()), this.Fa.push(a))
            },
            Ia: function(d) {
                this.url === h && (this.e = "string" === typeof a.W && a.W.length ? a.W : d.subdomain || "", this.url = this.Aa());
                d.ibs instanceof Array && d.ibs.length && (this.H = j);
                if (!a.idSyncDisable3rdPartySyncing && (this.H || a.la) && this.e && "nosubdomainreturned" !== this.e && !this.M)(i.ga || "complete" === o.readyState || "loaded" === o.readyState) && this.Z();
                "function" === typeof a.idSyncIDCallResult ? a.idSyncIDCallResult(d) : this.p(d);
                "function" === typeof a.idSyncAfterIDCallResult && a.idSyncAfterIDCallResult(d)
            },
            ua: function(d, c) {
                return a.Ra || !d || c - d > v.ha
            }
        };
        a.Pa = u;
        0 > m.indexOf("@") && (m += "@AdobeOrg");
        a.marketingCloudOrgID = m;
        a.cookieName = "AMCV_" + m;
        a.sessionCookieName = "AMCVS_" + m;
        a.cookieDomain = a.ma();
        a.cookieDomain == l.location.hostname && (a.cookieDomain = "");
        a.loadSSL = 0 <= l.location.protocol.toLowerCase().indexOf("https");
        a.loadTimeout = 500;
        a.marketingCloudServer = a.audienceManagerServer = "dpm.demdex.net";
        if (t && "object" == typeof t) {
            for (var E in t) !Object.prototype[E] && (a[E] = t[E]);
            a.idSyncContainerID = a.idSyncContainerID || 0;
            a.f();
            E = a.b(F);
            var H = Math.ceil((new Date).getTime() / v.O);
            !a.idSyncDisableSyncs && u.ua(E, H) && (a.k(q, -1), a.c(F, H));
            a.getMarketingCloudVisitorID();
            a.getAudienceManagerLocationHint();
            a.getAudienceManagerBlob()
        }
        if (!a.idSyncDisableSyncs) {
            u.va();
            G.Y(window, "load", function() {
                var d = u;
                i.ga = j;
                !a.idSyncDisable3rdPartySyncing && (d.H || a.la) && d.e && "nosubdomainreturned" !== d.e && d.url && !d.M && d.Z()
            });
            try {
                a.X.K(function(a) {
                    u.K(a.data)
                }, u.I)
            } catch (I) {}
        }
    }
    Visitor.getInstance = function(m, t) {
        var a, l = window.s_c_il,
            i;
        0 > m.indexOf("@") && (m += "@AdobeOrg");
        if (l)
            for (i = 0; i < l.length; i++)
                if ((a = l[i]) && "Visitor" == a._c && a.marketingCloudOrgID == m) return a;
        return new Visitor(m, t)
    };
    window.visitor = new Visitor("");
    window.visitor.trackingServer = s.trackingServer;
    window.visitor.trackingServerSecure = s.trackingServerSecure;
    s.visitor = Visitor.getInstance("");
}

function AppMeasurement() {
    var a = this;
    a.version = "1.6";
    var k = window;
    k.s_c_in || (k.s_c_il = [], k.s_c_in = 0);
    a._il = k.s_c_il;
    a._in = k.s_c_in;
    a._il[a._in] = a;
    k.s_c_in++;
    a._c = "s_c";
    var q = k.AppMeasurement.Db;
    q || (q = null);
    var r = k,
        n, t;
    try {
        for (n = r.parent, t = r.location; n && n.location && t && "" + n.location != "" + t && r.location && "" + n.location != "" + r.location && n.location.host == t.host;) r = n, n = r.parent
    } catch (u) {}
    a.sb = function(a) {
        try {
            console.log(a)
        } catch (b) {}
    };
    a.Ba = function(a) {
        return "" + parseInt(a) == "" + a
    };
    a.replace = function(a, b, d) {
        return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d)
    };
    a.escape = function(c) {
        var b, d;
        if (!c) return c;
        c = encodeURIComponent(c);
        for (b = 0; 7 > b; b++) d = "+~!*()'".substring(b, b + 1), 0 <= c.indexOf(d) && (c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
        return c
    };
    a.unescape = function(c) {
        if (!c) return c;
        c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
        try {
            return decodeURIComponent(c)
        } catch (b) {}
        return unescape(c)
    };
    a.kb = function() {
        var c = k.location.hostname,
            b = a.fpCookieDomainPeriods,
            d;
        b || (b = a.cookieDomainPeriods);
        if (c && !a.cookieDomain && !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2, b = 2 < b ? b : 2, d = c.lastIndexOf("."), 0 <= d)) {
            for (; 0 <= d && 1 < b;) d = c.lastIndexOf(".", d - 1), b--;
            a.cookieDomain = 0 < d ? c.substring(d) : c
        }
        return a.cookieDomain
    };
    a.c_r = a.cookieRead = function(c) {
        c = a.escape(c);
        var b = " " + a.d.cookie,
            d = b.indexOf(" " + c + "="),
            f = 0 > d ? d : b.indexOf(";", d);
        c = 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
        return "[[B]]" != c ? c : ""
    };
    a.c_w = a.cookieWrite = function(c, b, d) {
        var f = a.kb(),
            e = a.cookieLifetime,
            g;
        b = "" + b;
        e = e ? ("" + e).toUpperCase() : "";
        d && "SESSION" != e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date, d.setTime(d.getTime() + 1E3 * g)) : 1 == d && (d = new Date, g = d.getYear(), d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
        return c && "NONE" != e ? (a.d.cookie = c + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toGMTString() + ";" : "") + (f ? " domain=" + f + ";" : ""), a.cookieRead(c) == b) : 0
    };
    a.G = [];
    a.da = function(c, b, d) {
        if (a.va) return 0;
        a.maxDelay || (a.maxDelay = 250);
        var f = 0,
            e = (new Date).getTime() + a.maxDelay,
            g = a.d.visibilityState,
            m = ["webkitvisibilitychange", "visibilitychange"];
        g || (g = a.d.webkitVisibilityState);
        if (g && "prerender" == g) {
            if (!a.ea)
                for (a.ea = 1, d = 0; d < m.length; d++) a.d.addEventListener(m[d], function() {
                    var c = a.d.visibilityState;
                    c || (c = a.d.webkitVisibilityState);
                    "visible" == c && (a.ea = 0, a.delayReady())
                });
            f = 1;
            e = 0
        } else d || a.l("_d") && (f = 1);
        f && (a.G.push({
            m: c,
            a: b,
            t: e
        }), a.ea || setTimeout(a.delayReady, a.maxDelay));
        return f
    };
    a.delayReady = function() {
        var c = (new Date).getTime(),
            b = 0,
            d;
        for (a.l("_d") ? b = 1 : a.pa(); 0 < a.G.length;) {
            d = a.G.shift();
            if (b && !d.t && d.t > c) {
                a.G.unshift(d);
                setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                break
            }
            a.va = 1;
            a[d.m].apply(a, d.a);
            a.va = 0
        }
    };
    a.setAccount = a.sa = function(c) {
        var b, d;
        if (!a.da("setAccount", arguments))
            if (a.account = c, a.allAccounts)
                for (b = a.allAccounts.concat(c.split(",")), a.allAccounts = [], b.sort(), d = 0; d < b.length; d++) 0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);
            else a.allAccounts = c.split(",")
    };
    a.foreachVar = function(c, b) {
        var d, f, e, g, m = "";
        e = f = "";
        if (a.lightProfileID) d = a.K, (m = a.lightTrackVars) && (m = "," + m + "," + a.ia.join(",") + ",");
        else {
            d = a.e;
            if (a.pe || a.linkType) m = a.linkTrackVars, f = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (m = a[e].Cb, f = a[e].Bb));
            m && (m = "," + m + "," + a.B.join(",") + ",");
            f && m && (m += ",events,")
        }
        b && (b = "," + b + ",");
        for (f = 0; f < d.length; f++) e = d[f], (g = a[e]) && (!m || 0 <= m.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g)
    };
    a.o = function(c, b, d, f, e) {
        var g = "",
            m, p, k, w, n = 0;
        "contextData" == c && (c = "c");
        if (b) {
            for (m in b)
                if (!(Object.prototype[m] || e && m.substring(0, e.length) != e) && b[m] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + m + ","))) {
                    k = !1;
                    if (n)
                        for (p = 0; p < n.length; p++) m.substring(0, n[p].length) == n[p] && (k = !0);
                    if (!k && ("" == g && (g += "&" + c + "."), p = b[m], e && (m = m.substring(e.length)), 0 < m.length))
                        if (k = m.indexOf("."), 0 < k) p = m.substring(0, k), k = (e ? e : "") + p + ".", n || (n = []), n.push(k), g += a.o(p, b, d, f, k);
                        else if ("boolean" == typeof p && (p = p ? "true" : "false"), p) {
                        if ("retrieveLightData" == f && 0 > e.indexOf(".contextData.")) switch (k = m.substring(0, 4), w = m.substring(4), m) {
                            case "transactionID":
                                m = "xact";
                                break;
                            case "channel":
                                m = "ch";
                                break;
                            case "campaign":
                                m = "v0";
                                break;
                            default:
                                a.Ba(w) && ("prop" == k ? m = "c" + w : "eVar" == k ? m = "v" + w : "list" == k ? m = "l" + w : "hier" == k && (m = "h" + w, p = p.substring(0, 255)))
                        }
                        g += "&" + a.escape(m) + "=" + a.escape(p)
                    }
                }
            "" != g && (g += "&." + c)
        }
        return g
    };
    a.mb = function() {
        var c = "",
            b, d, f, e, g, m, p, k, n = "",
            r = "",
            s = e = "";
        if (a.lightProfileID) b = a.K, (n = a.lightTrackVars) && (n = "," + n + "," + a.ia.join(",") + ",");
        else {
            b = a.e;
            if (a.pe || a.linkType) n = a.linkTrackVars, r = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (n = a[e].Cb, r = a[e].Bb));
            n && (n = "," + n + "," + a.B.join(",") + ",");
            r && (r = "," + r + ",", n && (n += ",events,"));
            a.events2 && (s += ("" != s ? "," : "") + a.events2)
        }
        if (a.visitor && 1.5 <= parseFloat(a.visitor.version) && a.visitor.getCustomerIDs) {
            e = q;
            if (g = a.visitor.getCustomerIDs())
                for (d in g) Object.prototype[d] || (f = g[d], e || (e = {}), f.id && (e[d + ".id"] = f.id), f.authState && (e[d + ".as"] = f.authState));
            e && (c += a.o("cid", e))
        }
        a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.o("d", a.AudienceManagement.getEventCallConfigParams()));
        for (d = 0; d < b.length; d++) {
            e = b[d];
            g = a[e];
            f = e.substring(0, 4);
            m = e.substring(4);
            !g && "events" == e && s && (g = s, s = "");
            if (g && (!n || 0 <= n.indexOf("," + e + ","))) {
                switch (e) {
                    case "supplementalDataID":
                        e = "sdid";
                        break;
                    case "timestamp":
                        e = "ts";
                        break;
                    case "dynamicVariablePrefix":
                        e = "D";
                        break;
                    case "visitorID":
                        e = "vid";
                        break;
                    case "marketingCloudVisitorID":
                        e = "mid";
                        break;
                    case "analyticsVisitorID":
                        e = "aid";
                        break;
                    case "audienceManagerLocationHint":
                        e = "aamlh";
                        break;
                    case "audienceManagerBlob":
                        e = "aamb";
                        break;
                    case "authState":
                        e = "as";
                        break;
                    case "pageURL":
                        e = "g";
                        255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0, 255));
                        break;
                    case "pageURLRest":
                        e = "-g";
                        break;
                    case "referrer":
                        e = "r";
                        break;
                    case "vmk":
                    case "visitorMigrationKey":
                        e = "vmt";
                        break;
                    case "visitorMigrationServer":
                        e = "vmf";
                        a.ssl && a.visitorMigrationServerSecure && (g = "");
                        break;
                    case "visitorMigrationServerSecure":
                        e = "vmf";
                        !a.ssl && a.visitorMigrationServer && (g = "");
                        break;
                    case "charSet":
                        e = "ce";
                        break;
                    case "visitorNamespace":
                        e = "ns";
                        break;
                    case "cookieDomainPeriods":
                        e = "cdp";
                        break;
                    case "cookieLifetime":
                        e = "cl";
                        break;
                    case "variableProvider":
                        e = "vvp";
                        break;
                    case "currencyCode":
                        e = "cc";
                        break;
                    case "channel":
                        e = "ch";
                        break;
                    case "transactionID":
                        e = "xact";
                        break;
                    case "campaign":
                        e = "v0";
                        break;
                    case "latitude":
                        e = "lat";
                        break;
                    case "longitude":
                        e = "lon";
                        break;
                    case "resolution":
                        e = "s";
                        break;
                    case "colorDepth":
                        e = "c";
                        break;
                    case "javascriptVersion":
                        e = "j";
                        break;
                    case "javaEnabled":
                        e = "v";
                        break;
                    case "cookiesEnabled":
                        e = "k";
                        break;
                    case "browserWidth":
                        e = "bw";
                        break;
                    case "browserHeight":
                        e = "bh";
                        break;
                    case "connectionType":
                        e = "ct";
                        break;
                    case "homepage":
                        e = "hp";
                        break;
                    case "events":
                        s && (g += ("" != g ? "," : "") + s);
                        if (r)
                            for (m = g.split(","), g = "", f = 0; f < m.length; f++) p = m[f], k = p.indexOf("="), 0 <= k && (p = p.substring(0, k)), k = p.indexOf(":"), 0 <= k && (p = p.substring(0, k)), 0 <= r.indexOf("," + p + ",") && (g += (g ? "," : "") + m[f]);
                        break;
                    case "events2":
                        g = "";
                        break;
                    case "contextData":
                        c += a.o("c", a[e], n, e);
                        g = "";
                        break;
                    case "lightProfileID":
                        e = "mtp";
                        break;
                    case "lightStoreForSeconds":
                        e = "mtss";
                        a.lightProfileID || (g = "");
                        break;
                    case "lightIncrementBy":
                        e = "mti";
                        a.lightProfileID || (g = "");
                        break;
                    case "retrieveLightProfiles":
                        e = "mtsr";
                        break;
                    case "deleteLightProfiles":
                        e = "mtsd";
                        break;
                    case "retrieveLightData":
                        a.retrieveLightProfiles && (c += a.o("mts", a[e], n, e));
                        g = "";
                        break;
                    default:
                        a.Ba(m) && ("prop" == f ? e = "c" + m : "eVar" == f ? e = "v" + m : "list" == f ? e = "l" + m : "hier" == f && (e = "h" + m, g = g.substring(0, 255)))
                }
                g && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
            }
            "pev3" == e && a.c && (c += a.c)
        }
        return c
    };
    a.v = function(a) {
        var b = a.tagName;
        if ("undefined" != "" + a.Gb || "undefined" != "" + a.wb && "HTML" != ("" + a.wb).toUpperCase()) return "";
        b = b && b.toUpperCase ? b.toUpperCase() : "";
        "SHAPE" == b && (b = "");
        b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A"));
        return b
    };
    a.xa = function(a) {
        var b = a.href ? a.href : "",
            d, f, e;
        d = b.indexOf(":");
        f = b.indexOf("?");
        e = b.indexOf("/");
        b && (0 > d || 0 <= f && d > f || 0 <= e && d > e) && (f = a.protocol && 1 < a.protocol.length ? a.protocol : l.protocol ? l.protocol : "", d = l.pathname.lastIndexOf("/"), b = (f ? f + "//" : "") + (a.host ? a.host : l.host ? l.host : "") + ("/" != h.substring(0, 1) ? l.pathname.substring(0, 0 > d ? 0 : d) + "/" : "") + b);
        return b
    };
    a.H = function(c) {
        var b = a.v(c),
            d, f, e = "",
            g = 0;
        return b && (d = c.protocol, f = c.onclick, !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""), g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g = 3) : c.src && "IMAGE" == b && (e = c.src) : e = a.xa(c), e) ? {
            id: e.substring(0, 100),
            type: g
        } : 0
    };
    a.Eb = function(c) {
        for (var b = a.v(c), d = a.H(c); c && !d && "BODY" != b;)
            if (c = c.parentElement ? c.parentElement : c.parentNode) b = a.v(c), d = a.H(c);
        d && "BODY" != b || (c = 0);
        c && (b = c.onclick ? "" + c.onclick : "", 0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = 0);
        return c
    };
    a.vb = function() {
        var c, b, d = a.linkObject,
            f = a.linkType,
            e = a.linkURL,
            g, m;
        a.ja = 1;
        d || (a.ja = 0, d = a.clickObject);
        if (d) {
            c = a.v(d);
            for (b = a.H(d); d && !b && "BODY" != c;)
                if (d = d.parentElement ? d.parentElement : d.parentNode) c = a.v(d), b = a.H(d);
            b && "BODY" != c || (d = 0);
            if (d && !a.linkObject) {
                var p = d.onclick ? "" + d.onclick : "";
                if (0 <= p.indexOf(".tl(") || 0 <= p.indexOf(".trackLink(")) d = 0
            }
        } else a.ja = 1;
        !e && d && (e = a.xa(d));
        e && !a.linkLeaveQueryString && (g = e.indexOf("?"), 0 <= g && (e = e.substring(0, g)));
        if (!f && e) {
            var n = 0,
                r = 0,
                q;
            if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                for (p = e.toLowerCase(), g = p.indexOf("?"), m = p.indexOf("#"), 0 <= g ? 0 <= m && m < g && (g = m) : g = m, 0 <= g && (p = p.substring(0, g)), g = a.linkDownloadFileTypes.toLowerCase().split(","), m = 0; m < g.length; m++)(q = g[m]) && p.substring(p.length - (q.length + 1)) == "." + q && (f = "d");
            if (a.trackExternalLinks && !f && (p = e.toLowerCase(), a.Aa(p) && (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname), g = 0, a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(","), n = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")), g))) {
                for (m = 0; m < g.length; m++) q = g[m], 0 <= p.indexOf(q) && (r = 1);
                r ? n && (f = "e") : n || (f = "e")
            }
        }
        a.linkObject = d;
        a.linkURL = e;
        a.linkType = f;
        if (a.trackClickMap || a.trackInlineStats) a.c = "", d && (f = a.pageName, e = 1, d = d.sourceIndex, f || (f = a.pageURL, e = 0), k.s_objectID && (b.id = k.s_objectID, d = b.type = 1), f && b && b.id && c && (a.c = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") +
            "&oid=" + a.escape(b.id.substring(0, 100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : "")))
    };
    a.nb = function() {
        var c = a.ja,
            b = a.linkType,
            d = a.linkURL,
            f = a.linkName;
        b && (d || f) && (b = b.toLowerCase(), "d" != b && "e" != b && (b = "o"), a.pe = "lnk_" + b, a.pev1 = d ? a.escape(d) : "", a.pev2 = f ? a.escape(f) : "", c = 1);
        a.abort && (c = 0);
        if (a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
            var b = {},
                d = 0,
                e = a.cookieRead("s_sq"),
                g = e ? e.split("&") : 0,
                m, p, k, e = 0;
            if (g)
                for (m = 0; m < g.length; m++) p = g[m].split("="), f = a.unescape(p[0]).split(","), p = a.unescape(p[1]), b[p] = f;
            f = a.account.split(",");
            m = {};
            for (k in a.contextData) k && !Object.prototype[k] && "a.activitymap." == k.substring(0, 14) && (m[k] = a.contextData[k], a.contextData[k] = "");
            a.c = a.o("c", m) + (a.c ? a.c : "");
            if (c || a.c) {
                c && !a.c && (e = 1);
                for (p in b)
                    if (!Object.prototype[p])
                        for (k = 0; k < f.length; k++)
                            for (e && (g = b[p].join(","), g == a.account && (a.c += ("&" != p.charAt(0) ? "&" : "") + p, b[p] = [], d = 1)), m = 0; m < b[p].length; m++) g = b[p][m], g == f[k] && (e && (a.c += "&u=" + a.escape(g) + ("&" != p.charAt(0) ? "&" : "") + p + "&u=0"), b[p].splice(m, 1), d = 1);
                c || (d = 1);
                if (d) {
                    e = "";
                    m = 2;
                    !c && a.c && (e = a.escape(f.join(",")) + "=" + a.escape(a.c), m = 1);
                    for (p in b) !Object.prototype[p] && 0 < m && 0 < b[p].length && (e += (e ? "&" : "") + a.escape(b[p].join(",")) + "=" + a.escape(p), m--);
                    a.cookieWrite("s_sq", e)
                }
            }
        }
        return c
    };
    a.ob = function() {
        if (!a.Ab) {
            var c = new Date,
                b = r.location,
                d, f, e = f = d = "",
                g = "",
                m = "",
                k = "1.2",
                n = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                q = "",
                s = "";
            if (c.setUTCDate && (k = "1.3", (0).toPrecision && (k = "1.5", c = [], c.forEach))) {
                k = "1.6";
                f = 0;
                d = {};
                try {
                    f = new Iterator(d), f.next && (k = "1.7", c.reduce && (k = "1.8", k.trim && (k = "1.8.1", Date.parse && (k = "1.8.2", Object.create && (k = "1.8.5")))))
                } catch (t) {}
            }
            d = screen.width + "x" + screen.height;
            e = navigator.javaEnabled() ? "Y" : "N";
            f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
            g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
            m = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try {
                a.b.addBehavior("#default#homePage"), q = a.b.Fb(b) ? "Y" : "N"
            } catch (u) {}
            try {
                a.b.addBehavior("#default#clientCaps"), s = a.b.connectionType
            } catch (x) {}
            a.resolution = d;
            a.colorDepth = f;
            a.javascriptVersion = k;
            a.javaEnabled = e;
            a.cookiesEnabled = n;
            a.browserWidth = g;
            a.browserHeight = m;
            a.connectionType = s;
            a.homepage = q;
            a.Ab = 1
        }
    };
    a.L = {};
    a.loadModule = function(c, b) {
        var d = a.L[c];
        if (!d) {
            d = k["AppMeasurement_Module_" + c] ? new k["AppMeasurement_Module_" + c](a) : {};
            a.L[c] = a[c] = d;
            d.Qa = function() {
                return d.Ua
            };
            d.Va = function(b) {
                if (d.Ua = b) a[c + "_onLoad"] = b, a.da(c + "_onLoad", [a, d], 1) || b(a, d)
            };
            try {
                Object.defineProperty ? Object.defineProperty(d, "onLoad", {
                    get: d.Qa,
                    set: d.Va
                }) : d._olc = 1
            } catch (f) {
                d._olc = 1
            }
        }
        b && (a[c + "_onLoad"] = b, a.da(c + "_onLoad", [a, d], 1) || b(a, d))
    };
    a.l = function(c) {
        var b, d;
        for (b in a.L)
            if (!Object.prototype[b] && (d = a.L[b]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[c] && d[c]())) return 1;
        return 0
    };
    a.qb = function() {
        var c = Math.floor(1E13 * Math.random()),
            b = a.visitorSampling,
            d = a.visitorSamplingGroup,
            d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""),
            f = a.cookieRead(d);
        if (b) {
            f && (f = parseInt(f));
            if (!f) {
                if (!a.cookieWrite(d, c)) return 0;
                f = c
            }
            if (f % 1E4 > v) return 0
        }
        return 1
    };
    a.M = function(c, b) {
        var d, f, e, g, m, k;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.qa : a.e, e = 0; e < f.length; e++)
                if (g = f[e], (m = c[g]) || c["!" + g]) {
                    if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g])
                        for (k in a[g]) m[k] || (m[k] = a[g][k]);
                    a[g] = m
                }
    };
    a.Ja = function(c, b) {
        var d, f, e, g;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.qa : a.e, e = 0; e < f.length; e++) g = f[e], c[g] = a[g], b || c[g] || (c["!" + g] = 1)
    };
    a.ib = function(a) {
        var b, d, f, e, g, m = 0,
            k, n = "",
            q = "";
        if (a && 255 < a.length && (b = "" + a, d = b.indexOf("?"), 0 < d && (k = b.substring(d + 1), b = b.substring(0, d), e = b.toLowerCase(), f = 0, "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8), d = e.indexOf("/", f), 0 < d && (e = e.substring(f, d), g = b.substring(d), b = b.substring(0, d), 0 <= e.indexOf("google") ? m = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (m = ",p,ei,"), m && k)))) {
            if ((a = k.split("&")) && 1 < a.length) {
                for (f = 0; f < a.length; f++) e = a[f], d = e.indexOf("="), 0 < d && 0 <= m.indexOf("," + e.substring(0, d) + ",") ? n += (n ? "&" : "") + e : q += (q ? "&" : "") + e;
                n && q ? k = n + "&" + q : q = ""
            }
            d = 253 - (k.length - q.length) - b.length;
            a = b + (0 < d ? g.substring(0, d) : "") + "?" + k
        }
        return a
    };
    a.Pa = function(c) {
        var b = a.d.visibilityState,
            d = ["webkitvisibilitychange", "visibilitychange"];
        b || (b = a.d.webkitVisibilityState);
        if (b && "prerender" == b) {
            if (c)
                for (b = 0; b < d.length; b++) a.d.addEventListener(d[b], function() {
                    var b = a.d.visibilityState;
                    b || (b = a.d.webkitVisibilityState);
                    "visible" == b && c()
                });
            return !1
        }
        return !0
    };
    a.Z = !1;
    a.D = !1;
    a.Xa = function() {
        a.D = !0;
        a.i()
    };
    a.X = !1;
    a.Q = !1;
    a.Ta = function(c) {
        a.marketingCloudVisitorID = c;
        a.Q = !0;
        a.i()
    };
    a.aa = !1;
    a.R = !1;
    a.Ya = function(c) {
        a.visitorOptedOut = c;
        a.R = !0;
        a.i()
    };
    a.U = !1;
    a.N = !1;
    a.La = function(c) {
        a.analyticsVisitorID = c;
        a.N = !0;
        a.i()
    };
    a.W = !1;
    a.P = !1;
    a.Na = function(c) {
        a.audienceManagerLocationHint = c;
        a.P = !0;
        a.i()
    };
    a.V = !1;
    a.O = !1;
    a.Ma = function(c) {
        a.audienceManagerBlob = c;
        a.O = !0;
        a.i()
    };
    a.Oa = function(c) {
        a.maxDelay || (a.maxDelay = 250);
        return a.l("_d") ? (c && setTimeout(function() {
            c()
        }, a.maxDelay), !1) : !0
    };
    a.Y = !1;
    a.C = !1;
    a.pa = function() {
        a.C = !0;
        a.i()
    };
    a.isReadyToTrack = function() {
        var c = !0,
            b = a.visitor;
        a.Z || a.D || (a.Pa(a.Xa) ? a.D = !0 : a.Z = !0);
        if (a.Z && !a.D) return !1;
        b && b.isAllowed() && (a.X || a.marketingCloudVisitorID || !b.getMarketingCloudVisitorID || (a.X = !0, a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.Ta]), a.marketingCloudVisitorID && (a.Q = !0)), a.aa || a.visitorOptedOut || !b.isOptedOut || (a.aa = !0, a.visitorOptedOut = b.isOptedOut([a, a.Ya]), a.visitorOptedOut != q && (a.R = !0)), a.U || a.analyticsVisitorID || !b.getAnalyticsVisitorID || (a.U = !0, a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.La]), a.analyticsVisitorID && (a.N = !0)), a.W || a.audienceManagerLocationHint || !b.getAudienceManagerLocationHint || (a.W = !0, a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([a, a.Na]), a.audienceManagerLocationHint && (a.P = !0)), a.V || a.audienceManagerBlob || !b.getAudienceManagerBlob || (a.V = !0, a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Ma]), a.audienceManagerBlob && (a.O = !0)), a.X && !a.Q && !a.marketingCloudVisitorID || a.U && !a.N && !a.analyticsVisitorID || a.W && !a.P && !a.audienceManagerLocationHint || a.V && !a.O && !a.audienceManagerBlob || a.aa && !a.R) && (c = !1);
        a.Y || a.C || (a.Oa(a.pa) ? a.C = !0 : a.Y = !0);
        a.Y && !a.C && (c = !1);
        return c
    };
    a.k = q;
    a.p = 0;
    a.callbackWhenReadyToTrack = function(c, b, d) {
        var f;
        f = {};
        f.bb = c;
        f.ab = b;
        f.Za = d;
        a.k == q && (a.k = []);
        a.k.push(f);
        0 == a.p && (a.p = setInterval(a.i, 100))
    };
    a.i = function() {
        var c;
        if (a.isReadyToTrack() && (a.Wa(), a.k != q))
            for (; 0 < a.k.length;) c = a.k.shift(), c.ab.apply(c.bb, c.Za)
    };
    a.Wa = function() {
        a.p && (clearInterval(a.p), a.p = 0)
    };
    a.Ra = function(c) {
        var b, d, f = q,
            e = q;
        if (!a.isReadyToTrack()) {
            b = [];
            if (c != q)
                for (d in f = {}, c) f[d] = c[d];
            e = {};
            a.Ja(e, !0);
            b.push(f);
            b.push(e);
            a.callbackWhenReadyToTrack(a, a.track, b);
            return !0
        }
        return !1
    };
    a.lb = function() {
        var c = a.cookieRead("s_fid"),
            b = "",
            d = "",
            f;
        f = 8;
        var e = 4;
        if (!c || 0 > c.indexOf("-")) {
            for (c = 0; 16 > c; c++) f = Math.floor(Math.random() * f), b += "0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * e), d += "0123456789ABCDEF".substring(f, f + 1), f = e = 16;
            c = b + "-" + d
        }
        a.cookieWrite("s_fid", c, 1) || (c = 0);
        return c
    };
    a.t = a.track = function(c, b) {
        var d, f = new Date,
            e = "s" + Math.floor(f.getTime() / 108E5) % 10 + Math.floor(1E13 * Math.random()),
            g = f.getYear(),
            g = "t=" + a.escape(f.getDate() + "/" + f.getMonth() + "/" + (1900 > g ? g + 1900 : g) + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + " " +
                f.getDay() + " " + f.getTimezoneOffset());
        a.visitor && (a.visitor.jb && (a.authState = a.visitor.jb()), !a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID = a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)));
        a.l("_s");
        a.Ra(c) || (b && a.M(b), c && (d = {}, a.Ja(d, 0), a.M(c)), a.qb() && !a.visitorOptedOut && (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.lb()), a.vb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(f.getTime() / 1E3)), f = k.location, a.pageURL || (a.pageURL = f.href ? f.href : f), a.referrer || a.Ka || (a.referrer = r.document.referrer), a.Ka = 1, a.referrer = a.ib(a.referrer), a.l("_g")), a.nb() && !a.abort && (a.ob(), g += a.mb(), a.ub(e, g), a.l("_t"), a.referrer = ""))), c && a.M(d, 1));
        a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.c = a.lightProfileID = 0
    };
    a.tl = a.trackLink = function(c, b, d, f, e) {
        a.linkObject = c;
        a.linkType = b;
        a.linkName = d;
        e && (a.j = c, a.r = e);
        return a.track(f)
    };
    a.trackLight = function(c, b, d, f) {
        a.lightProfileID = c;
        a.lightStoreForSeconds = b;
        a.lightIncrementBy = d;
        return a.track(f)
    };
    a.clearVars = function() {
        var c, b;
        for (c = 0; c < a.e.length; c++)
            if (b = a.e[c], "prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) || "hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" == b || "events" == b || "eventList" == b || "products" == b || "productList" == b || "purchaseID" == b || "transactionID" == b || "state" == b || "zip" == b || "campaign" == b) a[b] = void 0
    };
    a.tagContainerMarker = "";
    a.ub = function(c, b) {
        var d, f = a.trackingServer;
        d = "";
        var e = a.dc,
            g = "sc.",
            k = a.visitorNamespace;
        f ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure) : (k || (k = a.account, f = k.indexOf(","), 0 <= f && (k = k.substring(0, f)), k = k.replace(/[^A-Za-z0-9]/g, "")), d || (d = "2o7.net"), e = e ? ("" + e).toLowerCase() : "d1", "2o7.net" == d && ("d1" == e ? e = "112" : "d2" == e && (e = "122"), g = ""), f = k + "." + e + "." + g + d);
        d = a.ssl ? "https://" : "http://";
        e = a.AudienceManagement && a.AudienceManagement.isReady();
        d += f + "/b/ss/" + a.account +
            "/" + (a.mobile ? "5." : "") + (e ? "10" : "1") + "/JS-" + a.version + (a.zb ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "") + "/" + c + "?AQB=1&ndh=1&pf=1&" + (e ? "callback=s_c_il[" + a._in + "].AudienceManagement.passData&" : "") + b + "&AQE=1";
        a.gb(d);
        a.fa()
    };
    a.gb = function(c) {
        a.g || a.pb();
        a.g.push(c);
        a.ha = a.u();
        a.Ha()
    };
    a.pb = function() {
        a.g = a.rb();
        a.g || (a.g = [])
    };
    a.rb = function() {
        var c, b;
        if (a.ma()) {
            try {
                (b = k.localStorage.getItem(a.ka())) && (c = k.JSON.parse(b))
            } catch (d) {}
            return c
        }
    };
    a.ma = function() {
        var c = !0;
        a.trackOffline && a.offlineFilename && k.localStorage && k.JSON || (c = !1);
        return c
    };
    a.ya = function() {
        var c = 0;
        a.g && (c = a.g.length);
        a.A && c++;
        return c
    };
    a.fa = function() {
        if (!a.A)
            if (a.za = q, a.la) a.ha > a.J && a.Fa(a.g), a.oa(500);
            else {
                var c = a.$a();
                if (0 < c) a.oa(c);
                else if (c = a.wa()) a.A = 1, a.tb(c), a.xb(c)
            }
    };
    a.oa = function(c) {
        a.za || (c || (c = 0), a.za = setTimeout(a.fa, c))
    };
    a.$a = function() {
        var c;
        if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
        c = a.u() - a.Ea;
        return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c
    };
    a.wa = function() {
        if (0 < a.g.length) return a.g.shift()
    };
    a.tb = function(c) {
        if (a.debugTracking) {
            var b = "AppMeasurement Debug: " + c;
            c = c.split("&");
            var d;
            for (d = 0; d < c.length; d++) b += "\n\t" + a.unescape(c[d]);
            a.sb(b)
        }
    };
    a.Sa = function() {
        return a.marketingCloudVisitorID || a.analyticsVisitorID
    };
    a.T = !1;
    var s;
    try {
        s = JSON.parse('{"x":"y"}')
    } catch (x) {
        s = null
    }
    s && "y" == s.x ? (a.T = !0, a.S = function(a) {
        return JSON.parse(a)
    }) : k.$ && k.$.parseJSON ? (a.S = function(a) {
        return k.$.parseJSON(a)
    }, a.T = !0) : a.S = function() {
        return null
    };
    a.xb = function(c) {
        var b, d, f;
        a.Sa() && 2047 < c.length && ("undefined" != typeof XMLHttpRequest && (b = new XMLHttpRequest, "withCredentials" in b ? d = 1 : b = 0), b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest, d = 2), b && a.AudienceManagement && a.AudienceManagement.isReady() && (a.T ? b.ra = !0 : b = 0));
        !b && a.Ia && (c = c.substring(0, 2047));
        !b && a.d.createElement && a.AudienceManagement && a.AudienceManagement.isReady() && (b = a.d.createElement("SCRIPT")) && "async" in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript", b.setAttribute("async", "async"), d = 3) : b = 0);
        b || (b = new Image, b.alt = "");
        b.ua = function() {
            try {
                a.na && (clearTimeout(a.na), a.na = 0), b.timeout && (clearTimeout(b.timeout), b.timeout = 0)
            } catch (c) {}
        };
        b.onload = b.yb = function() {
            b.ua();
            a.fb();
            a.ba();
            a.A = 0;
            a.fa();
            if (b.ra) {
                b.ra = !1;
                try {
                    var c = a.S(b.responseText);
                    a.AudienceManagement.passData(c)
                } catch (d) {}
            }
        };
        b.onabort = b.onerror = b.hb = function() {
            b.ua();
            (a.trackOffline || a.la) && a.A && a.g.unshift(a.eb);
            a.A = 0;
            a.ha > a.J && a.Fa(a.g);
            a.ba();
            a.oa(500)
        };
        b.onreadystatechange = function() {
            4 == b.readyState && (200 == b.status ? b.yb() : b.hb())
        };
        a.Ea = a.u();
        if (1 == d || 2 == d) {
            var e = c.indexOf("?");
            f = c.substring(0, e);
            e = c.substring(e + 1);
            e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, "");
            1 == d ? (b.open("POST", f, !0), b.send(e)) : 2 == d && (b.open("POST", f), b.send(e))
        } else if (b.src = c, 3 == d) {
            if (a.Ca) try {
                f.removeChild(a.Ca)
            } catch (g) {}
            f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
            a.Ca = a.cb
        }
        b.abort && (a.na = setTimeout(b.abort, 5E3));
        a.eb = c;
        a.cb = k["s_i_" + a.replace(a.account, ",", "_")] = b;
        if (a.useForcedLinkTracking && a.F || a.r) a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250), a.ca = setTimeout(a.ba, a.forcedLinkTrackingTimeout)
    };
    a.fb = function() {
        if (a.ma() && !(a.Da > a.J)) try {
            k.localStorage.removeItem(a.ka()), a.Da = a.u()
        } catch (c) {}
    };
    a.Fa = function(c) {
        if (a.ma()) {
            a.Ha();
            try {
                k.localStorage.setItem(a.ka(), k.JSON.stringify(c)), a.J = a.u()
            } catch (b) {}
        }
    };
    a.Ha = function() {
        if (a.trackOffline) {
            if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
            for (; a.g.length > a.offlineLimit;) a.wa()
        }
    };
    a.forceOffline = function() {
        a.la = !0
    };
    a.forceOnline = function() {
        a.la = !1
    };
    a.ka = function() {
        return a.offlineFilename + "-" + a.visitorNamespace + a.account
    };
    a.u = function() {
        return (new Date).getTime()
    };
    a.Aa = function(a) {
        a = a.toLowerCase();
        return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1
    };
    a.setTagContainer = function(c) {
        var b, d, f;
        a.zb = c;
        for (b = 0; b < a._il.length; b++)
            if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
                a.M(d);
                if (d.lmq)
                    for (b = 0; b < d.lmq.length; b++) f = d.lmq[b], a.loadModule(f.n);
                if (d.ml)
                    for (f in d.ml)
                        if (a[f])
                            for (b in c = a[f], f = d.ml[f], f) !Object.prototype[b] && ("function" != typeof f[b] || 0 > ("" + f[b]).indexOf("s_c_il")) && (c[b] = f[b]);
                if (d.mmq)
                    for (b = 0; b < d.mmq.length; b++) f = d.mmq[b], a[f.m] && (c = a[f.m], c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
                if (d.tq)
                    for (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
                d.s = a;
                break
            }
    };
    a.Util = {
        urlEncode: a.escape,
        urlDecode: a.unescape,
        cookieRead: a.cookieRead,
        cookieWrite: a.cookieWrite,
        getQueryParam: function(c, b, d) {
            var f;
            b || (b = a.pageURL ? a.pageURL : k.location);
            d || (d = "&");
            return c && b && (b = "" + b, f = b.indexOf("?"), 0 <= f && (b = d + b.substring(f + 1) + d, f = b.indexOf(d + c + "="), 0 <= f && (b = b.substring(f + d.length + c.length + 1), f = b.indexOf(d), 0 <= f && (b = b.substring(0, f)), 0 < b.length))) ? a.unescape(b) : ""
        }
    };
    a.B = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
    a.e = a.B.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
    a.ia = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
    a.K = a.ia.slice(0);
    a.qa = "account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
    for (n = 0; 250 >= n; n++) 76 > n && (a.e.push("prop" + n), a.K.push("prop" + n)), a.e.push("eVar" + n), a.K.push("eVar" + n), 6 > n && a.e.push("hier" + n), 4 > n && a.e.push("list" + n);
    n = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");
    a.e = a.e.concat(n);
    a.B = a.B.concat(n);
    a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf("https");
    a.charSet = "UTF-8";
    a.contextData = {};
    a.offlineThrottleDelay = 0;
    a.offlineFilename = "AppMeasurement.offline";
    a.Ea = 0;
    a.ha = 0;
    a.J = 0;
    a.Da = 0;
    a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
    a.w = k;
    a.d = k.document;
    try {
        if (a.Ia = !1, navigator) {
            var y = navigator.userAgent;
            if ("Microsoft Internet Explorer" == navigator.appName || 0 <= y.indexOf("MSIE ") || 0 <= y.indexOf("Trident/") && 0 <= y.indexOf("Windows NT 6")) a.Ia = !0
        }
    } catch (z) {}
    a.ba = function() {
        a.ca && (k.clearTimeout(a.ca), a.ca = q);
        a.j && a.F && a.j.dispatchEvent(a.F);
        a.r && ("function" == typeof a.r ? a.r() : a.j && a.j.href && (a.d.location = a.j.href));
        a.j = a.F = a.r = 0
    };
    a.Ga = function() {
        a.b = a.d.body;
        a.b ? (a.q = function(c) {
            var b, d, f, e, g;
            if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
                if (a.ta)
                    if (a.useForcedLinkTracking) a.b.removeEventListener("click", a.q, !1);
                    else {
                        a.b.removeEventListener("click", a.q, !0);
                        a.ta = a.useForcedLinkTracking = 0;
                        return
                    }
                else a.useForcedLinkTracking = 0;
                a.clickObject = c.srcElement ? c.srcElement : c.target;
                try {
                    if (!a.clickObject || a.I && a.I == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode)) a.clickObject = 0;
                    else {
                        var m = a.I = a.clickObject;
                        a.ga && (clearTimeout(a.ga), a.ga = 0);
                        a.ga = setTimeout(function() {
                            a.I == m && (a.I = 0)
                        }, 1E4);
                        f = a.ya();
                        a.track();
                        if (f < a.ya() && a.useForcedLinkTracking && c.target) {
                            for (e = c.target; e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase();) e = e.parentNode;
                            if (e && (g = e.href, a.Aa(g) || (g = 0), d = e.target, c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || k.name && d == k.name))) {
                                try {
                                    b = a.d.createEvent("MouseEvents")
                                } catch (n) {
                                    b = new k.MouseEvent
                                }
                                if (b) {
                                    try {
                                        b.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)
                                    } catch (q) {
                                        b = 0
                                    }
                                    b && (b["s_fe_" + a._in] = b.s_fe = 1, c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.j = c.target, a.F = b)
                                }
                            }
                        }
                    }
                } catch (r) {
                    a.clickObject = 0
                }
            }
        }, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.q) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && k.MouseEvent) && (a.ta = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.q, !0)), a.b.addEventListener("click", a.q, !1))) : setTimeout(a.Ga, 30)
    };
    a.Ga();
    a.loadModule("ActivityMap")
}

function s_gi(a) {
    var k, q = window.s_c_il,
        r, n, t = a.split(","),
        u, s, x = 0;
    if (q)
        for (r = 0; !x && r < q.length;) {
            k = q[r];
            if ("s_c" == k._c && (k.account || k.oun))
                if (k.account && k.account == a) x = 1;
                else
                    for (n = k.account ? k.account : k.oun, n = k.allAccounts ? k.allAccounts : n.split(","), u = 0; u < t.length; u++)
                        for (s = 0; s < n.length; s++) t[u] == n[s] && (x = 1);
            r++
        }
    x || (k = new AppMeasurement);
    k.setAccount ? k.setAccount(a) : k.sa && k.sa(a);
    return k
}
AppMeasurement.getInstance = s_gi;
window.s_objectID || (window.s_objectID = 0);

function s_pgicq() {
    var a = window,
        k = a.s_giq,
        q, r, n;
    if (k)
        for (q = 0; q < k.length; q++) r = k[q], n = s_gi(r.oun), n.setAccount(r.un), n.setTagContainer(r.tagContainerName);
    a.s_giq = 0
}
s_pgicq();

function AppMeasurement_Module_Integrate(l) {
    var c = this;
    c.s = l;
    var e = window;
    e.s_c_in || (e.s_c_il = [], e.s_c_in = 0);
    c._il = e.s_c_il;
    c._in = e.s_c_in;
    c._il[c._in] = c;
    e.s_c_in++;
    c._c = "s_m";
    c.list = [];
    c.add = function(d, b) {
        var a;
        b || (b = "s_Integrate_" + d);
        e[b] || (e[b] = {});
        a = c[d] = e[b];
        a.a = d;
        a.e = c;
        a._c = 0;
        a._d = 0;
        void 0 == a.disable && (a.disable = 0);
        a.get = function(b, d) {
            var f = document,
                h = f.getElementsByTagName("HEAD"),
                k;
            if (!a.disable && (d || (v = "s_" + c._in + "_Integrate_" + a.a + "_get_" + a._c), a._c++, a.VAR = v, a.CALLBACK = "s_c_il[" + c._in + "]." +
                    a.a + ".callback", a.delay(), h = h && 0 < h.length ? h[0] : f.body)) try {
                k = f.createElement("SCRIPT"), k.type = "text/javascript", k.setAttribute("async", "async"), k.src = c.c(a, b), 0 > b.indexOf("[CALLBACK]") && (k.onload = k.onreadystatechange = function() {
                    a.callback(e[v])
                }), h.firstChild ? h.insertBefore(k, h.firstChild) : h.appendChild(k)
            } catch (l) {}
        };
        a.callback = function(b) {
            var c;
            if (b)
                for (c in b) Object.prototype[c] || (a[c] = b[c]);
            a.ready()
        };
        a.beacon = function(b) {
            var d = "s_i_" + c._in + "_Integrate_" + a.a + "_" + a._c;
            a.disable || (a._c++, d = e[d] = new Image, d.src = c.c(a, b))
        };
        a.script = function(b) {
            a.get(b, 1)
        };
        a.delay = function() {
            a._d++
        };
        a.ready = function() {
            a._d--;
            a.disable || l.delayReady()
        };
        c.list.push(d)
    };
    c._g = function(d) {
        var b, a = (d ? "use" : "set") + "Vars";
        for (d = 0; d < c.list.length; d++)
            if ((b = c[c.list[d]]) && !b.disable && b[a]) try {
                b[a](l, b)
            } catch (e) {}
    };
    c._t = function() {
        c._g(1)
    };
    c._d = function() {
        var d, b;
        for (d = 0; d < c.list.length; d++)
            if ((b = c[c.list[d]]) && !b.disable && 0 < b._d) return 1;
        return 0
    };
    c.c = function(c, b) {
        var a, e, g, f;
        "http" != b.toLowerCase().substring(0, 4) && (b = "http://" + b);
        l.ssl && (b = l.replace(b, "http:", "https:"));
        c.RAND = Math.floor(1E13 * Math.random());
        for (a = 0; 0 <= a;) a = b.indexOf("[", a), 0 <= a && (e = b.indexOf("]", a), e > a && (g = b.substring(a + 1, e), 2 < g.length && "s." == g.substring(0, 2) ? (f = l[g.substring(2)]) || (f = "") : (f = "" + c[g], f != c[g] && parseFloat(f) != c[g] && (g = 0)), g && (b = b.substring(0, a) + encodeURIComponent(f) + b.substring(e + 1)), a = e));
        return b
    }
}

function AppMeasurement_Module_ActivityMap(f) {
    function g(a, d) {
        var b, c, n;
        if (a && d && (b = e.c[d] || (e.c[d] = d.split(","))))
            for (n = 0; n < b.length && (c = b[n++]);)
                if (-1 < a.indexOf(c)) return null;
        p = 1;
        return a
    }

    function q(a, d, b, c, e) {
        var g, h;
        if (a.dataset && (h = a.dataset[d])) g = h;
        else if (a.getAttribute)
            if (h = a.getAttribute("data-" + b)) g = h;
            else if (h = a.getAttribute(b)) g = h;
        if (!g && f.useForcedLinkTracking && e && (g = "", d = a.onclick ? "" + a.onclick : "")) {
            b = d.indexOf(c);
            var l, k;
            if (0 <= b) {
                for (b += 10; b < d.length && 0 <= "= \t\r\n".indexOf(d.charAt(b));) b++;
                if (b < d.length) {
                    h = b;
                    for (l = k = 0; h < d.length && (";" != d.charAt(h) || l);) l ? d.charAt(h) != l || k ? k = "\\" == d.charAt(h) ? !k : 0 : l = 0 : (l = d.charAt(h), '"' != l && "'" != l && (l = 0)), h++;
                    if (d = d.substring(b, h)) a.e = new Function("s", "var e;try{s.w." + c + "=" + d + "}catch(e){}"), a.e(f)
                }
            }
        }
        return g || e && f.w[c]
    }

    function r(a, d, b) {
        var c;
        return (c = e[d](a, b)) && (p ? (p = 0, c) : g(k(c), e[d + "Exclusions"]))
    }

    function s(a, d, b) {
        var c;
        if (a && !(1 === (c = a.nodeType) && (c = a.nodeName) && (c = c.toUpperCase()) && t[c]) && (1 === a.nodeType && (c = a.nodeValue) && (d[d.length] = c), b.a || b.t || b.s || !a.getAttribute || ((c = a.getAttribute("alt")) ? b.a = c : (c = a.getAttribute("title")) ? b.t = c : "IMG" == ("" + a.nodeName).toUpperCase() && (c = a.getAttribute("src") || a.src) && (b.s = c)), (c = a.childNodes) && c.length))
            for (a = 0; a < c.length; a++) s(c[a], d, b)
    }

    function k(a) {
        if (null == a || void 0 == a) return a;
        try {
            return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}", "mg"), " ").substring(0, 254)
        } catch (d) {}
    }
    var e = this;
    e.s = f;
    var m = window;
    m.s_c_in || (m.s_c_il = [], m.s_c_in = 0);
    e._il = m.s_c_il;
    e._in = m.s_c_in;
    e._il[e._in] = e;
    m.s_c_in++;
    e._c = "s_m";
    e.c = {};
    var p = 0,
        t = {
            SCRIPT: 1,
            STYLE: 1,
            LINK: 1,
            CANVAS: 1
        };
    e._g = function() {
        var a, d, b, c = f.contextData,
            e = f.linkObject;
        (a = f.pageName || f.pageURL) && (d = r(e, "link", f.linkName)) && (b = r(e, "region")) && (c["a.activitymap.page"] = a.substring(0, 255), c["a.activitymap.link"] = 128 < d.length ? d.substring(0, 128) : d, c["a.activitymap.region"] = 127 < b.length ? b.substring(0, 127) : b, c["a.activitymap.pageIDType"] = f.pageName ? 1 : 0)
    };
    e.link = function(a, d) {
        var b;
        if (d) b = g(k(d), e.linkExclusions);
        else if ((b = a) && !(b = q(a, "sObjectId", "s-object-id", "s_objectID", 1))) {
            var c, f;
            (f = g(k(a.innerText || a.textContent), e.linkExclusions)) || (s(a, c = [], b = {
                a: void 0,
                t: void 0,
                s: void 0
            }), (f = g(k(c.join("")))) || (f = g(k(b.a ? b.a : b.t ? b.t : b.s ? b.s : void 0))) || !(c = (c = a.tagName) && c.toUpperCase ? c.toUpperCase() : "") || ("INPUT" == c || "SUBMIT" == c && a.value ? f = g(k(a.value)) : a.src && "IMAGE" == c && (f = g(k(a.src)))));
            b = f
        }
        return b
    };
    e.region = function(a) {
        for (var d, b = e.regionIDAttribute || "id"; a && (a = a.parentNode);) {
            if (d = q(a, b, b, b)) return d;
            if ("BODY" == a.nodeName) return "BODY"
        }
    }
}
try {
    (function(id, loader, u) {
        try {
            u = utag.o[loader].sender[id] = {}
        } catch (e) {
            u = utag.sender[id]
        };
        u.ev = {
            'view': 1,
            'link': 1,
            'video': 1
        };
        u.o = s;
        u.varlist = {
            pageName: 'pageName',
            channel: 'ch',
            campaign: 'v0',
            hier1: 'h1',
            hier2: 'h2',
            hier3: 'h3',
            hier4: 'h4'
        };
        for (var i = 1; i < 76; i++) {
            u.varlist['prop' + i] = 'c' + i;
            u.varlist['eVar' + i] = 'v' + i
        };
        u.pushlt = function(l, v) {
            if (typeof l != "undefined") l.push(v)
        };
        u.map = {
            "s_account": "s_account",
            "user_login": "prop21,eVar22",
            "dom.domain": "server,eVar10,event1",
            "site_domain": "server,eVar10",
            "page_name": "eVar1,pageName",
            "page_type": "prop1,eVar3",
            "page_type:POLITICO Home": "event2",
            "page_type:registration": "event21",
            "page_type:registration/thankyou": "event22",
            "page_type:tipsheets": "event23,event24",
            "site_section": "eVar2,channel",
            "search_keyword": "prop18,eVar19",
            "search_results": "prop19,eVar20",
            "event_type:gallery_slide_viewed": "event5",
            "event_type:comment_post": "event6",
            "event_type:internal_search": "event7",
            "event_type:video_viewed": "event8",
            "event_type:video_progress_25": "event9",
            "event_type:video_progress_50": "event10",
            "event_type:video_progress_75": "event11",
            "event_type:video_complete": "event12",
            "event_type:video_fwd": "event13",
            "event_type:timeline_opened": "event15",
            "event_type:live_stream_pre_roll": "event16",
            "event_type:live_stream_start": "event17",
            "event_type:live_stream_progress_5": "event18",
            "event_type:live_stream_progress_10": "event19",
            "event_type:live_stream_progress_30": "event20",
            "event_type:continuous_scroll": "event14",
            "event_type:story": "event3,event24",
            "event_type:blogs": "event4,event24",
            "event_type:registration": "event21",
            "event_type:registration_thank_you": "event22",
            "event_type:utility_bar_expand": "event25",
            "event_type:utlity_bar_alerts": "event25",
            "event_type:aplus_left_scroll": "event25",
            "event_type:aplus_right_scroll": "event25",
            "event_type:verify_link_clicked": "event43",
            "event_type:link_click_custom": "event26",
            "event_type:navigation_open": "event46",
            "event_type:mobile_tab_left": "event47",
            "event_type:mobile_tab_right": "event48",
            "event_type:interactives_interaction": "event27",
            "event_type:user_accepts_cookie_terms": "event50",
            "event_type:user_exits_cookie_terms": "event51",
            "blog_name": "prop2,eVar4",
            "tipsheet_name": "prop3,eVar5",
            "policy_category": "prop4,eVar6",
            "content_byline": "prop5",
            "content_author": "prop6",
            "content_source": "prop7",
            "content_id": "prop8,eVar7",
            "content_tag": "prop9,list1",
            "original_headline": "prop11",
            "current_headline": "prop12",
            "publication_date": "prop13",
            "page_format": "prop14",
            "content_issue": "prop15",
            "magazine_content_format": "prop16",
            "site_experience": "prop17",
            "qp.hp": "prop23,eVar24",
            "video_id": "eVar11",
            "video_player": "eVar13",
            "live_stream_name": "eVar14",
            "live_stream_time_segments": "eVar15",
            "newsletter_name": "eVar9",
            "free_paid_content": "prop42",
            "content_access": "prop43",
            "state_content": "prop20,eVar21",
            "content_uuid": "prop47",
            "dom.url": "prop10",
            "_omniture_vid": "prop22,eVar23",
            "_concat_position_headline": "prop24",
            "_concat_module_prev_pn": "prop26,eVar27",
            "_concat_module_prev_ct": "prop27,eVar28",
            "_timeparting_time": "prop28,eVar29",
            "_timeparting_day": "prop29,eVar30",
            "_visit_return": "prop30,eVar31",
            "_visit_type": "prop31,eVar32",
            "_visit_number": "prop32,eVar33",
            "previous_page_type": "prop34,eVar52",
            "new_visitor_pages": "prop35",
            "repeat_visitor_pages": "prop36",
            "dom.referrer": "prop44",
            "video_info": "eVar12",
            "qp.cid": "campaign",
            "ad_unit_section": "prop50",
            "continuous_scroll:true": "event14",
            "continuous_scroll": "prop56",
            "page_level_1": "prop51",
            "page_level_2": "prop52",
            "page_level_3": "prop53",
            "page_level_4": "prop54",
            "page_level_5": "prop55",
            "previous_page_name": "prop33,eVar51",
            "qp.lo": "prop25",
            "subseries": "prop49",
            "link_page_type": "eVar17",
            "publication_date_content": "hier2",
            "dart_cc": "list2",
            "state_subcontent": "prop21",
            "content_id_pub_date": "prop60",
            "vcid": "prop59,eVar42",
            "subscription_verification:verify_link_clicked": "event43",
            "subscription_viewed:subscription_promo_view": "event41",
            "subscription_module": "list3,eVar38,prop57",
            "subscription_email": "eVar35",
            "subscription_state": "eVar37",
            "subscription_state:subscription_yes": "event30",
            "subscription_state:subscription_verify": "event29",
            "subscriber": "eVar36",
            "subscription_module_button": "eVar34,eVar38,list3",
            "subscription_button_clicked:subscription_button_clicked_custom": "event42",
            "distribution_channel": "prop61",
            "js_page.ia_document.referrer": "prop62",
            "js_page.ia_document.referrer:ia.facebook.com": "event45",
            "link_lcol": "eVar44",
            "link_lindex": "eVar45",
            "link_text": "eVar43",
            "link_mid": "eVar46,prop40",
            "link_mpos": "eVar47",
            "hp_server_refresh": "prop27",
            "interaction_name": "eVar16",
            "qp.nname": "eVar25",
            "newsletter_click:newsletter_link_clicked": "event28",
            "series": "prop41",
            "page_sub_type": "prop46",
            "subscription_success:yes": "event44",
            "qp.aid": "eVar26"
        };
        u.extend = [function(a, b) {
            window.optimizely = window.optimizely || [];
            window.optimizely.push(['activateSiteCatalyst', {
                'sVariable': u.o
            }]);
        }, function(a, b) {
            try {
                if (1) {
                    b['_omniture_vid'] = 'D=s_vi'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            s.apl = new Function("L", "v", "d", "u", "" +
                "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a." +
                "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas" +
                "e()));}}if(!m)L=L?L+d+v:v;return L");
            s.p_c = new Function("v", "c", "" +
                "var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le" +
                "ngth:x).toLowerCase()?v:0");
            s.p_gh = new Function("" +
                "var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot(" +
                "o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){" +
                "o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s." +
                "ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");
            s.split = new Function("l", "d", "" +
                "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" +
                "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
            s.repl = new Function("x", "o", "n", "" +
                "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x." +
                "substring(i+o.length);i=x.indexOf(o,i+l)}return x");
            s.join = new Function("v", "p", "" +
                "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back" +
                ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0" +
                ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el" +
                "se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
            s.setupLinkTrack = new Function("vl", "c", "" +
                "var s=this;var l=s.d.links,cv,cva,vla,h,i,l,t,b,o,y,n,oc,d='';cv=s." +
                "c_r(c);if(vl&&cv!=''){cva=s.split(cv,'^^');vla=s.split(vl,',');for(" +
                "x in vla)s._hbxm(vla[x])?s[vla[x]]=cva[x]:'';}s.c_w(c,'',0);if(!s.e" +
                "o&&!s.lnk)return '';o=s.eo?s.eo:s.lnk;y=s.ot(o);n=s.oid(o);if(s.eo&" +
                "&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement" +
                ":o.parentNode;if(!o)return '';y=s.ot(o);n=s.oid(o);}for(i=0;i<4;i++" +
                ")if(o.tagName)if(o.tagName.toLowerCase()!='a')if(o.tagName.toLowerC" +
                "ase()!='area')o=o.parentElement;}b=s._LN(o);o.lid=b[0];o.lpos=b[1];" +
                "if(s.hbx_lt&&s.hbx_lt!='manual'){if((o.tagName&&s._TL(o.tagName)=='" +
                "area')){if(!s._IL(o.lid)){if(o.parentNode){if(o.parentNode.name)o.l" +
                "id=o.parentNode.name;else o.lid=o.parentNode.id}}if(!s._IL(o.lpos))" +
                "o.lpos=o.coords}else{if(s._IL(o.lid)<1)o.lid=s._LS(o.lid=o.text?o.t" +
                "ext:o.innerText?o.innerText:'');if(!s._IL(o.lid)||s._II(s._TL(o.lid" +
                "),'<img')>-1){h=''+o.innerHTML;bu=s._TL(h);i=s._II(bu,'<img');if(bu" +
                "&&i>-1){eval(\"__f=/ src\s*=\s*[\'\\\"]?([^\'\\\" ]+)[\'\\\"]?/i\")" +
                ";__f.exec(h);if(RegExp.$1)h=RegExp.$1}o.lid=h}}}h=o.href?o.href:'';" +
                "i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l" +
                "=s.linkName?s.linkName:s._hbxln(h);t=s.linkType?s.linkType.toLowerC" +
                "ase():s.lt(h);oc=o.onclick?''+o.onclick:'';cv=s.pageName+'^^'+o.lid" +
                "+'^^'+s.pageName+' | '+(o.lid=o.lid?o.lid:'no &lid')+'^^'+o.lpos;if" +
                "(t&&(h||l)){cva=s.split(cv,'^^');vla=s.split(vl,',');for(x in vla)s" +
                "._hbxm(vla[x])?s[vla[x]]=cva[x]:'';}else if(!t&&oc.indexOf('.tl(')<" +
                "0){s.c_w(c,cv,0);}else return ''");
            s._IL = new Function("a", "var s=this;return a!='undefined'?a.length:0");
            s._II = new Function("a", "b", "c", "var s=this;return a.indexOf(b,c?c:0)");
            s._IS = new Function("a", "b", "c", "" +
                "var s=this;return b>s._IL(a)?'':a.substring(b,c!=null?c:s._IL(a))");
            s._LN = new Function("a", "b", "c", "d", "" +
                "var s=this;b=a.href;b+=a.name?a.name:'';c=s._LVP(b,'lid');d=s._LVP(" +
                "b,'lpos');return[c,d]");
            s._LVP = new Function("a", "b", "c", "d", "e", "" +
                "var s=this;c=s._II(a,'&'+b+'=');c=c<0?s._II(a,'?'+b+'='):c;if(c>-1)" +
                "{d=s._II(a,'&',c+s._IL(b)+2);e=s._IS(a,c+s._IL(b)+2,d>-1?d:s._IL(a)" +
                ");return e}return ''");
            s._LS = new Function("a", "" +
                "var s=this,b,c=100,d,e,f,g;b=(s._IL(a)>c)?escape(s._IS(a,0,c)):esca" +
                "pe(a);b=s._LSP(b,'%0A','%20');b=s._LSP(b,'%0D','%20');b=s._LSP(b,'%" +
                "09','%20');c=s._IP(b,'%20');d=s._NA();e=0;for(f=0;f<s._IL(c);f++){g" +
                "=s._RP(c[f],'%20','');if(s._IL(g)>0){d[e++]=g}}b=d.join('%20');retu" +
                "rn unescape(b)");
            s._LSP = new Function("a", "b", "c", "d", "var s=this;d=s._IP(a,b);return d" +
                ".join(c)");
            s._IP = new Function("a", "b", "var s=this;return a.split(b)");
            s._RP = new Function("a", "b", "c", "d", "" +
                "var s=this;d=s._II(a,b);if(d>-1){a=s._RP(s._IS(a,0,d)+','+s._IS(a,d" +
                "+s._IL(b),s._IL(a)),b,c)}return a");
            s._TL = new Function("a", "var s=this;return a.toLowerCase()");
            s._NA = new Function("a", "var s=this;return new Array(a?a:0)");
            s._hbxm = new Function("m", "var s=this;return (''+m).indexOf('{')<0");
            s._hbxln = new Function("h", "var s=this,n=s.linkNames;if(n)return s.pt(" +
                "n,',','lnf',h);return ''");
        }, function(a, b) {
            s.usePlugins = true

            function doPlugins(s) {
                s.hbx_lt = "auto";
                s.setupLinkTrack("prop37,prop38,prop39,prop40", "SC_LINKS");
                if (typeof ia_document != "undefined") {
                    if (typeof ia_document.referrer != "undefined") {
                        if (ia_document.referrer != "") {
                            console.log('Tealium debug', ia_document.referrer);
                            s.referrer = "http://ia.facebook.com";
                        }
                    }
                }
            }
            s.doPlugins = doPlugins;
        }, function(a, b, c, d) {
            c = ['page_type', 'search_keyword', 'site_section'];
            for (d = 0; d < c.length; d++) {
                try {
                    b[c[d]] = b[c[d]] instanceof Array ? b[c[d]] : b[c[d]] instanceof Object ? b[c[d]] : b[c[d]].toString().toLowerCase()
                } catch (e) {
                    utag.DB(e);
                }
            }
        }, function(a, b) {
            try {
                if (typeof b['previous_page_name'] == 'undefined' || typeof b['previous_page_name'] != 'undefined' && b['previous_page_name'] == '') {
                    b['qp.cid'] = ''
                }
            } catch (e) {
                utag.DB(e);
            }
        }];
        u.send = function(a, b, c, d, e, f, g, h, ev) {
            if (u.ev[a] || typeof u.ev.all != "undefined") {
                utag.DB("send:11");
                u.data = {};
                u.a = a;
                b.sc_events = b.sc_events || {};
                u.addEvent = function(v, n) {
                    var t = [];
                    if (v instanceof Array) {
                        t = v.slice(0);
                    } else if (typeof n !== "undefined") {
                        t.push(v + "=" + n);
                    } else {
                        t.push(v);
                    }
                    for (var i = 0; i < t.length; i++) {
                        b.sc_events[t[i]] = 1;
                        u.pushlt(u.lte, t[i].indexOf("=") > -1 ? t[i].split('=')[0] : t[i].split(':')[0]);
                    }
                    return b.sc_events;
                };
                u.addProduct = function(v) {
                    u.data.sc_addProd = "";
                    if (v instanceof Array) {
                        u.data.sc_addProd = v.join(',');
                    } else {
                        u.data.sc_addProd = v;
                    }
                };
                if (u.a === "link") {
                    u.ltflag = true;
                    if (typeof b.linkTrackVars === "undefined") {
                        u.ltv = [];
                    }
                    if (typeof b.linkTrackEvents === "undefined") {
                        u.lte = [];
                    }
                }
                for (c = 0; c < u.extend.length; c++) {
                    try {
                        d = u.extend[c](a, b);
                        if (d == false) return
                    } catch (e) {}
                };
                for (e in utag.loader.GV(u.map)) {
                    if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
                        f = u.map[e].split(",");
                        for (g = 0; g < f.length; g++) {
                            if (f[g].indexOf("PRODUCTS_id") || f[g].indexOf("PRODUCTS_category") || f[g].indexOf("PRODUCTS_quantity") || f[g].indexOf("PRODUCTS_price")) {
                                u.data[f[g].substring(9)] = b[e];
                            }
                        }
                    }
                }
                u.data.id = u.data.id || (typeof b._cprod != "undefined" ? b._cprod.slice(0) : []);
                u.data.category = u.data.category || (typeof b._ccat != "undefined" ? b._ccat.slice(0) : []);
                u.data.quantity = u.data.quantity || (typeof b._cquan != "undefined" ? b._cquan.slice(0) : []);
                u.data.price = u.data.price || (typeof b._cprice != "undefined" ? b._cprice.slice(0) : []);
                if (typeof u.data.id != "undefined" && u.data.id != "") {
                    c = [];
                    d = {};
                    ev = {};
                    for (e in utag.loader.GV(u.map)) {
                        if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
                            f = u.map[e].split(",");
                            for (g = 0; g < f.length; g++) {
                                var pv = f[g].substring(9);
                                if (f[g].indexOf("PRODUCTS_evar") == 0 || f[g].indexOf("PRODUCTS_eVar") == 0) {
                                    if (b[e] instanceof Array) {
                                        b.sc_prodevars = b.sc_prodevars || [];
                                        for (var i = 0; i < b[e].length; i++) {
                                            var prodvars = {};
                                            if (typeof b.sc_prodevars[i] != "undefined" && b.sc_prodevars[i] != "") {
                                                b.sc_prodevars[i][pv] = b[e][i];
                                            } else {
                                                prodvars[pv] = b[e][i];
                                                b.sc_prodevars.push(prodvars);
                                            }
                                        }
                                    } else {
                                        d[pv] = (b[e] + "").split(",");
                                    }
                                } else if (f[g].indexOf("PRODUCTS_event") == 0) {
                                    if (b[e] instanceof Array) {
                                        b.sc_prodevents = b.sc_prodevents || [];
                                        for (var i = 0; i < b[e].length; i++) {
                                            var prodevents = {};
                                            if (typeof b.sc_prodevents[i] != "undefined" && b.sc_prodevents[i] != "") {
                                                b.sc_prodevents[i][pv] = b[e][i];
                                            } else {
                                                prodevents[pv] = b[e][i];
                                                b.sc_prodevents.push(prodevents);
                                            }
                                        }
                                        u.addEvent(pv);
                                    } else if (b[e] !== "") {
                                        ev[pv] = b[e];
                                        u.addEvent(pv);
                                    }
                                }
                            }
                        }
                    }
                    e = "";
                    for (f in utag.loader.GV(d)) {
                        for (g = 0; g < d[f].length; g++) {
                            if (e != "") e += "|" + f + "=" + d[f][g];
                            else e = f + "=" + d[f][g];
                        }
                    }
                    h = "";
                    for (f in utag.loader.GV(ev)) {
                        if (h) h += "|" + f + "=" + ((isNaN(ev[f])) ? "1" : ev[f]);
                        else h = f + "=" + ((isNaN(ev[f])) ? "1" : ev[f]);
                    }
                    b.sc_prodevents = b.sc_prodevents || [];
                    b.sc_prodevars = b.sc_prodevars || [];
                    for (d = 0; d < u.data.id.length; d++) {
                        var h2 = h;
                        var h3 = e;
                        if (typeof b.sc_prodevents != "undefined") {
                            for (f in b.sc_prodevents[d]) {
                                if (typeof b.sc_prodevents[d][f] != "undefined") {
                                    var l = b.sc_prodevents[d][f];
                                    if (typeof l != "undefined" && l != "" && isNaN(l) == false) {
                                        if (h2) {
                                            h2 += "|" + f + '=' + l;
                                        } else {
                                            h2 = f + '=' + l;
                                        }
                                    }
                                }
                            }
                        }
                        if (typeof b.sc_prodevars != "undefined") {
                            for (f in b.sc_prodevars[d]) {
                                if (typeof b.sc_prodevars[d][f] != "undefined") {
                                    var l = b.sc_prodevars[d][f];
                                    if (typeof l != "undefined" && l != "") {
                                        if (h3) {
                                            h3 += "|" + f + '=' + l;
                                        } else {
                                            h3 = f + '=' + l;
                                        }
                                    }
                                }
                            }
                        }
                        c.push((u.data.category[d] ? u.data.category[d] : "") + ";" + u.data.id[d] + ";" + (u.data.quantity[d] ? u.data.quantity[d] : "") + ";" + (u.data.price[d] ? ((u.data.quantity[d] ? parseInt(u.data.quantity[d]) : 1) * parseFloat(u.data.price[d])).toFixed(2) : "") + ";" + h2 + ";" + h3);
                    }
                    if (typeof u.data.sc_addProd !== "undefined" && u.data.sc_addProd) {
                        c.push(u.data.sc_addProd);
                    }
                    u.o.products = c.join(",");
                } else {
                    u.o.products = "";
                }
                var evt = /^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;
                for (c in utag.loader.GV(b)) {
                    if (b[c] !== "") {
                        f = ("" + b[c]).split(",");
                        for (g = 0; g < f.length; g++) {
                            h = f[g].split(":");
                            d = [];
                            if (typeof u.map[c + ":" + h[0]] != "undefined") {
                                d = u.map[c + ":" + h[0]].split(",");
                            } else if (typeof u.map[c] != "undefined") {
                                d = u.map[c].split(",");
                            }
                            for (e = 0; e < d.length; e++) {
                                if (d[e] != "events" && evt.test(d[e])) {
                                    u.addEvent(d[e] + (h.length > 1 ? ":" + h[1] : ""));
                                }
                            }
                        }
                    }
                }
                for (c in utag.loader.GV(b)) {
                    if (typeof u.map[c] != "undefined") {
                        d = u.map[c].split(",");
                        for (e = 0; e < d.length; e++) {
                            if (d[e].indexOf("VALUE_") == 0) {
                                u.addEvent(d[e].substring(6), b[c]);
                            } else if (d[e] == "doneAction") {
                                b.doneAction = b[c];
                                if (b.doneAction != "navigate") {
                                    b.doneAction = eval(b[c]);
                                }
                            } else if (d[e].indexOf("c.") == 0 || d[e].indexOf("contextData.") == 0) {
                                d[e] = d[e].replace("contextData.", "c.");
                                u.o.contextData[d[e].substring(2)] = b[c];
                                u.pushlt(u.ltv, "contextData." + d[e].substring(2))
                            } else {
                                if (c == "sc_events" || c == "sc_prodevents" || c == "sc_prodevars") {
                                    utag.DB("Error:11: Mapping reserved object name " + c)
                                } else {
                                    u.o[d[e]] = b[c];
                                }
                                if (d[e] == "s_account") {
                                    u.o.account = b[c];
                                } else if (d[e] == "linkTrackVars") {
                                    u.ltflag = false;
                                } else {
                                    u.pushlt(u.ltv, d[e]);
                                }
                            }
                        }
                    }
                }
                d = [];
                for (c in utag.loader.GV(b.sc_events)) {
                    if (b.sc_events[c]) d.push(c)
                };
                if (d.length > 0) {
                    u.o.events = d.join(",");
                    u.pushlt(u.lte, u.o.events);
                } else {
                    u.o.events = "";
                }
                if (b._ccurrency) {
                    u.o.currencyCode = b._ccurrency;
                }
                if (b._corder) {
                    u.pushlt(u.lte, "purchase");
                    u.pushlt(u.ltv, "purchaseID");
                    u.o.purchaseID = ((u.o.purchaseID) ? u.o.purchaseID : b._corder);
                    u.o.events = ((u.o.events) ? u.o.events : "purchase");
                    if (u.o.events.indexOf("purchase") < 0) {
                        u.o.events += ",purchase"
                    };
                }
                if (u.a == "view") {
                    var img = u.o.t();
                    if (typeof img != "undefined" && img != "") {
                        u.img = new Image();
                        u.img.src = img.substring(img.indexOf("src=") + 5, img.indexOf("width=") - 2);
                    }
                } else if (u.a == "link") {
                    if (typeof u.ltv != "undefined" && u.ltflag) {
                        if (u.o.events) {
                            u.ltv.push("events")
                        };
                        if (u.o.products) {
                            u.ltv.push("products")
                        };
                        b.linkTrackVars = u.ltv.join(',')
                    }
                    if (typeof u.lte != "undefined" && u.ltflag) b.linkTrackEvents = u.lte.join(',');
                    u.o.linkTrackVars = (b.linkTrackVars) ? b.linkTrackVars : "None";
                    u.o.linkTrackEvents = (b.linkTrackEvents) ? b.linkTrackEvents : "None";
                    if (!u.o.linkType) u.o.linkType = 'o';
                    if (b.link_name) b.link_text = b.link_name;
                    b.link_text = (b.link_text) ? b.link_text : "no link_name";
                    if (b.link_type == 'exit link') {
                        u.o.linkType = 'e'
                    } else if (b.link_type == 'download link') u.o.linkType = 'd';
                    u.o.tl(((b.link_obj) ? b.link_obj : true), u.o.linkType, b.link_text, null, (b.doneAction ? b.doneAction : null));
                }
                if ("no" == "yes") {
                    u.o.clearVars();
                    u.o.contextData = {};
                }
                utag.DB("send:11:COMPLETE");
            }
        }
        try {
            utag.o[loader].loader.LOAD(id)
        } catch (e) {
            utag.loader.LOAD(id)
        }
    })('11', 'politico.main');
} catch (e) {
    console.log(e);
};
//tealium universal tag - utag.283 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {
            "id": id
        };
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var b, c, l, a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    o.attrs = o.attrs || {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    };
                    for (l in utag.loader.GV(o.attrs)) {
                        b.setAttribute(l, o.attrs[l]);
                    }
                    b.setAttribute("src", o.src);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                    b.src = o.src;
                    return;
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                    for (l in utag.loader.GV(o.attrs)) {
                        b[l] = o.attrs[l];
                    }
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id
                };
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb()
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                                this.onreadystatechange = null;
                                o.cb()
                            }
                        };
                    }
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l == "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b)
                    }
                }
            }
        } else {
            u.loader = utag.ut.loader;
        }
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            };
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        if (utag.ut.merge === undefined) {
            u.merge = function(a, b, c, d) {
                if (c) {
                    for (d in utag.loader.GV(b)) {
                        a[d] = b[d];
                    }
                } else {
                    for (d in utag.loader.GV(b)) {
                        if (typeof a[d] == "undefined") {
                            a[d] = b[d];
                        }
                    }
                }
            };
        } else {
            u.merge = utag.ut.merge;
        }
        u.ev = {
            "view": 1,
            "link": 1
        };
        u.initialized = false;
        u.scriptrequested = false;
        u.queue = [];
        u.event_lookup = {
            "ViewContent": {
                obj: "vc",
                "map": ["value", "currency", "content_name", "content_ids", "content_category"]
            },
            "Search": {
                obj: "search",
                "map": ["value", "currency", "content_category", "content_ids"]
            },
            "AddToCart": {
                obj: "cart",
                "map": ["value", "currency", "content_name", "content_ids"]
            },
            "AddToWishlist": {
                obj: "wish",
                "map": ["value", "currency", "content_name", "content_ids"]
            },
            "InitiateCheckout": {
                obj: "cout",
                "map": ["value", "currency", "content_name", "content_ids", "num_items"]
            },
            "AddPaymentInfo": {
                obj: "payment",
                "map": ["value", "currency", "content_category", "content_ids"]
            },
            "Purchase": {
                obj: "purch",
                "map": ["value", "currency", "content_name", "content_ids", "num_items"]
            },
            "Lead": {
                obj: "lead",
                "map": ["value", "currency", "content_name", "content_category"]
            },
            "CompleteRegistration": {
                obj: "reg",
                "map": ["value", "currency", "content_name"]
            },
            "Conversion": {
                obj: "cnv",
                "map": ["value", "currency"]
            },
            "Custom": {
                obj: "cust",
                "map": []
            },
            "PageView": {
                obj: "page",
                "map": []
            }
        };
        u.std_params = {
            "value": function(g, event) {
                if (g.value === undefined || g.value === "") {
                    if (event === "ViewContent" || event === "AddToCart") {
                        g.value = u.data.ecom.product_unit_price;
                    } else {
                        g.value = u.data.ecom.order_subtotal;
                    }
                }
                g.value = u.val(g.value);
            },
            "currency": function(g) {
                if (!g.currency) {
                    g.currency = u.data.ecom.order_currency;
                }
            },
            "content_name": function(g) {
                if (!g.content_name) {
                    g.content_name = u.data.ecom.product_name;
                }
                g.content_name = u.val(g.content_name);
            },
            "content_ids": function(g) {
                if (!g.content_ids) {
                    g.content_ids = u.data.ecom.product_id;
                }
                if (u.typeOf(g.content_ids) !== "array") {
                    g.content_ids = g.content_ids.split(/\s*,\s*/);
                }
            },
            "content_category": function(g) {
                if (!g.content_category) {
                    g.content_category = u.data.ecom.product_category;
                }
                g.content_category = u.val(g.content_category);
            },
            "num_items": function(g) {
                if (!g.num_items && u.data.calc_items === "true") {
                    g.num_items = u.calc_items(u.data.ecom.product_quantity);
                }
            }
        };
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.val = function(value) {
            return u.typeOf(value) === "array" ? value[0] : value;
        };
        u.remove_empty = function(a) {
            var b, t;
            for (b in utag.loader.GV(a)) {
                t = u.typeOf(a[b]);
                if (t === "object") {
                    u.remove_empty(a[b]);
                    if (u.isEmptyObject(a[b])) {
                        try {
                            delete a[b];
                        } catch (e) {
                            a[b] = undefined;
                        }
                    }
                } else if (!((a[b] === 0 || a[b] === false) ? !0 : (t === "array" && a[b].length === 0) ? !1 : !!a[b])) {
                    try {
                        delete a[b];
                    } catch (e) {
                        a[b] = undefined;
                    }
                }
            }
            return a;
        };
        u.calc_items = function(quan) {
            var q, i = 0;
            for (q = 0; q < quan.length; q++) {
                i += parseInt(quan[q]);
            }
            return i;
        };
        u.hasOwn = function(o, a) {
            return o != null && Object.prototype.hasOwnProperty.call(o, a);
        };
        u.isEmptyObject = function(o, a) {
            for (a in o) {
                if (u.hasOwn(o, a)) {
                    return false;
                }
            }
            return true;
        };
        u.process_AM_data = function(_data) {
            var am_data = {},
                item, val;
            for (item in utag.loader.GV(_data)) {
                val = _data[item];
                val = val.replace(/\s/g, "").toLowerCase();
                if (val === "ph") {
                    val = val.replace(/[^\d]/g, "");
                } else if (item === "ge") {
                    if (val !== "m" || val !== "f") {
                        utag.DB("[" + u.id + "] ge in wrong format. Removed from init call");
                        continue;
                    }
                } else if (item === "db") {
                    if (val.length !== 8) {
                        utag.DB("[" + u.id + "] db is not the correct length. Please check format. Removed from init call");
                        continue;
                    }
                } else if (item === "zp") {
                    val = val.replace(/[^\d]/g, "");
                    if (val.length > 5) {
                        utag.DB("[" + u.id + "] zp is too long. Removed from init call");
                        continue;
                    }
                }
                am_data[item] = val;
            }
            return u.isEmptyObject(am_data) ? undefined : am_data;
        };
        u.map = {};
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f, g, h, evt = [];
                u.data = {
                    "qsp_delim": "&",
                    "kvp_delim": "=",
                    "base_url": "https://connect.facebook.net/en_US/fbevents.js",
                    "cust_pixel": "435428090143089",
                    "conv_pixel": "",
                    "page_view": "true",
                    "calc_items": "true",
                    "default_event": "None",
                    "adv_match": "false",
                    "custom_data": {},
                    "custom_event": "",
                    "product_id": [],
                    "product_name": [],
                    "product_category": [],
                    "product_unit_price": [],
                    "product_quantity": [],
                    "evt_list": [],
                    "ecom": {}
                };
                c = [];
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.map_func(e[f].split("."), u.data, b[d]);
                        }
                    } else {
                        h = d.split(":");
                        if (h.length === 2 && b[h[0]] === h[1]) {
                            if (u.map[d]) {
                                evt = evt.concat(u.map[d].split(","));
                            }
                        }
                    }
                }
                if (u.data.evt_list && u.typeOf(u.data.evt_list) !== "array") {
                    u.data.evt_list = u.data.evt_list.split(/\s*,\s*/);
                }
                if (u.data.default_event !== "None" && u.data.default_event !== "") {
                    u.data.evt_list.push(u.data.default_event);
                }
                u.data.evt_list = u.data.evt_list.concat(evt);
                g = u.data.ecom;
                g.order_id = u.data.order_id || b._corder || "";
                g.order_subtotal = u.data.order_subtotal || b._csubtotal || "";
                g.order_currency = u.data.order_currency || b._ccurrency || "";
                if (u.data.product_name.length === 0 && b._cprodname !== undefined) {
                    g.product_name = b._cprodname.slice(0);
                } else {
                    g.product_name = u.data.product_name;
                }
                if (u.data.product_id.length === 0 && b._cprod !== undefined) {
                    g.product_id = b._cprod.slice(0);
                } else {
                    g.product_id = u.data.product_id;
                }
                if (u.data.product_category.length === 0 && b._ccat !== undefined) {
                    g.product_category = b._ccat.slice(0);
                } else {
                    g.product_category = u.data.product_category;
                }
                if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) {
                    g.product_unit_price = b._cprice.slice(0);
                } else {
                    g.product_unit_price = u.data.product_unit_price;
                }
                if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
                    g.product_quantity = b._cquan.slice(0);
                } else {
                    g.product_quantity = u.data.product_quantity;
                }
                u.loader_cb = function() {
                    var g = {},
                        i, j, _event, _track = "track";
                    if (u.data.evt_list.toString().indexOf("Purchase") === -1 && u.data.ecom.order_id) {
                        u.data.evt_list.push("Purchase");
                    }
                    for (i = 0; i < u.data.evt_list.length; i++) {
                        _event = u.data.evt_list[i];
                        f = u.event_lookup[_event];
                        c = f ? f.map : [];
                        f = f ? f.obj : _event;
                        g = u.data[f] = u.data[f] || {};
                        for (j = 0; j < c.length; j++) {
                            u.std_params[c[j]](g, _event);
                        }
                        if (_event === "ViewContent" || _event === "AddToCart") {} else if (_event === "Lead") {
                            if (!g.content_category) {
                                g.content_category = 'Quote';
                            }
                        } else if (_event === "Search") {
                            if (!g.content_category) {
                                g.content_category = 'Product Search';
                            }
                        } else if (_event === "Conversion" && u.data.conv_pixel) {
                            _event = u.data.conv_pixel;
                        } else if (_event && !u.event_lookup[_event]) {
                            _track = "trackCustom";
                            g = u.data[_event];
                        }
                        if (g.value !== undefined) {
                            if (u.typeOf(g.value) === "array") {
                                for (j = 0; j < g.value.length; j++) {
                                    g.value[j] = parseFloat(g.value[j]) || 0.00;
                                }
                            } else {
                                g.value = parseFloat(g.value) || 0.00;
                            }
                        }
                        if (_event) {
                            fbq(_track, _event, u.remove_empty(g));
                        }
                    }
                };
                u.callBack = function() {
                    var data = {};
                    u.initialized = true;
                    while (data = u.queue.shift()) {
                        u.data = data.data;
                        u.loader_cb();
                    }
                };
                if (u.initialized) {
                    u.loader_cb();
                } else {
                    u.queue.push({
                        "data": u.data
                    });
                    if (!u.scriptrequested) {
                        u.scriptrequested = true;
                        u.loader({
                            "type": "script",
                            "src": u.data.base_url,
                            "cb": u.callBack,
                            "loc": "script",
                            "id": "utag_283"
                        });
                        ! function(f, b, e) {
                            if (f.fbq) return;
                            e = f.fbq = function() {
                                e.callMethod ? e.callMethod.apply(e, arguments) : e.queue.push(arguments);
                            };
                            if (!f._fbq) f._fbq = e;
                            e.push = e;
                            e.loaded = !0;
                            e.version = '2.0';
                            e.queue = [];
                            e.agent = 'tmtealium';
                        }(window, document);
                        if (u.data.cust_pixel) {
                            u.data.cust_pixel = u.data.cust_pixel.split(/\s*,\s*/);
                            for (var i = 0; i < u.data.cust_pixel.length; i++) {
                                u.data.cust_pixel[i] = u.data.cust_pixel[i].replace(/^\s*/, "").replace(/\s*$/, "");
                                var amObj;
                                if (u.data.adv_match === true || u.data.adv_match === "true") {
                                    amObj = u.process_AM_data(u.remove_empty(u.data.am));
                                }
                                fbq('init', u.data.cust_pixel[i], amObj);
                            }
                            if (u.data.page_view === "true") {
                                fbq('track', 'PageView', u.data.page);
                            }
                        }
                    }
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("283", "politico.main"));
} catch (error) {
    utag.DB(error);
}

//tealium universal tag - utag.292 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
if (typeof JSON !== 'object') {
    JSON = {};
}
(function() {
    'use strict';
    var rx_one = /^[\],:{}\s]*$/,
        rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
        rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(n) {
        return n < 10 ? '0' + n : n;
    }

    function this_value() {
        return this.valueOf();
    }
    if (typeof Date.prototype.toJSON !== 'function') {
        Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' +
                f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' +
                f(this.getUTCSeconds()) + 'Z' : null;
        };
        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }
    var gap, indent, meta, rep;

    function quote(string) {
        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string) ? '"' + string.replace(rx_escapable, function(a) {
            var c = meta[a];
            return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap,
            partial, value = holder[key];
        if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }
        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }
        switch (typeof value) {
            case 'string':
                return quote(value);
            case 'number':
                return isFinite(value) ? String(value) : 'null';
            case 'boolean':
            case 'null':
                return String(value);
            case 'object':
                if (!value) {
                    return 'null';
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || 'null';
                    }
                    v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                    gap = mind;
                    return v;
                }
                if (rep && typeof rep === 'object') {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === 'string') {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                }
                v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                gap = mind;
                return v;
        }
    }
    if (typeof JSON.stringify !== 'function') {
        meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        };
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = '';
            indent = '';
            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }
            } else if (typeof space === 'string') {
                indent = space;
            }
            rep = replacer;
            if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }
            return str('', {
                '': value
            });
        };
    }
}());
try {
    (function(id, loader, u) {
        try {
            u = utag.o[loader].sender[id] = {}
        } catch (e) {
            u = utag.sender[id]
        };
        u.ev = {
            'all': 1
        };
        u.server_domain = "tealiumiq.com";
        u.server_prefix = "";
        u.tag_config_server = "";
        u.tag_config_sampling = "100" || "100";
        if (utag.cfg.utagdb) {
            u.tag_config_sampling = "100";
        }
        u.tag_config_region = "default" || "default";
        u.region = "";
        u.performance_timing_count = 0;
        u.account = utag.cfg.utid.split("/")[0];
        u.data_source = "240sr5";
        u.profile = "" || utag.cfg.utid.split("/")[1];
        if (u.tag_config_server.indexOf("-collect." + u.server_domain) > 1) {
            u.server_prefix = u.tag_config_server.split("collect." + u.server_domain)[0];
            if (u.tag_config_server.indexOf("/i.gif") < 0) {
                u.tag_config_server = "https://" + [u.server_prefix + "collect." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/");
            }
        }
        if (u.tag_config_server === "") {
            if (u.tag_config_region === "default") {
                u.tag_config_server = "https://" + [u.server_prefix + "collect." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/");
            } else {
                u.tag_config_server = "https://" + [u.server_prefix + "collect-" + u.tag_config_region + "." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/");
            }
        }
        if (u.tag_config_region !== "default" && u.tag_config_server.indexOf(u.server_prefix + "collect." + u.server_domain) > 0) {
            u.tag_config_server = u.tag_config_server.replace(u.server_prefix + "collect." + u.server_domain, u.server_prefix + "collect-" + u.tag_config_region + "." + u.server_domain);
            u.region = u.tag_config_region;
        }
        u.data_enrichment = "frequent";
        u.profile_specific_vid = 0;
        u.enrichment_polling = 1;
        u.enrichment_polling_delay = 1000;
        u.do_enrichment = function() {};
        var q = u.tag_config_server.indexOf("?");
        if (q > 0 && (q + 1) == u.tag_config_server.length) {
            u.tag_config_server = u.tag_config_server.replace("?", "");
        }
        u.server_list = u.tag_config_server.split("|");
        u.enrichment_enabled = {};
        u.get_account_profile = function(s) {
            var p = s.substring(s.indexOf(u.server_domain)).split("/");
            return p;
        }
        u.is_in_sample_group = function(b) {
            var group = "100";
            if (u.tag_config_sampling === "" || u.tag_config_sampling === "100") {
                return true
            }
            if (b["cp.utag_main_dc_group"]) {
                group = b["cp.utag_main_dc_group"];
            } else {
                group = Math.floor(Math.random() * 100) + 1;
                utag.loader.SC("utag_main", {
                    "dc_group": group
                });
            }
            if (parseInt(group) <= parseInt(u.tag_config_sampling)) {
                return true
            } else {
                return false
            }
        }
        u.get_performance_timing = function(b) {
            var t, timing;
            var data = {};

            function subtract(val1, val2) {
                var difference = 0;
                if (val1 > val2) {
                    difference = val1 - val2;
                }
                return difference;
            }
            if (typeof localStorage != "undefined" && JSON.parse && window.performance && window.performance.timing) {
                t = window.performance.timing;
                timing = localStorage.getItem("tealium_timing");
                if (timing !== null && timing !== "{}" && typeof b !== "undefined" && u.performance_timing_count === 0) {
                    utag.ut.merge(b, utag.ut.flatten({
                        timing: JSON.parse(timing)
                    }), 1);
                }
            } else {
                return;
            }
            u.performance_timing_count++;
            for (var k in t) {
                if ((k.indexOf("dom") === 0 || k.indexOf("load") === 0) && t[k] === 0 && u.performance_timing_count < 20) {
                    setTimeout(u.get_performance_timing, 1000);
                }
            }
            data["domain"] = location.hostname + "";
            data["pathname"] = location.pathname + "";
            data["query_string"] = ("" + location.search).substring(1);
            data["timestamp"] = (new Date()).getTime();
            data["dns"] = subtract(t.domainLookupEnd, t.domainLookupStart);
            data["connect"] = subtract(t.connectEnd, t.connectStart);
            data["response"] = subtract(t.responseEnd, t.responseStart);
            data["dom_loading_to_interactive"] = subtract(t.domInteractive, t.domLoading);
            data["dom_interactive_to_complete"] = subtract(t.domComplete, t.domInteractive);
            data["load"] = subtract(t.loadEventEnd, t.loadEventStart);
            data["time_to_first_byte"] = subtract(t.responseStart, t.connectEnd);
            data["front_end"] = subtract(t.loadEventStart, t.responseEnd);
            data["fetch_to_response"] = subtract(t.responseStart, t.fetchStart);
            data["fetch_to_complete"] = subtract(t.domComplete, t.fetchStart);
            data["fetch_to_interactive"] = subtract(t.domInteractive, t.fetchStart);
            try {
                localStorage.setItem("tealium_timing", JSON.stringify(data));
            } catch (e) {
                utag.DB(e)
            }
        }
        u.map = {};
        u.extend = [];
        u.send = function(a, b, c, d, e, f) {
            if (u.ev[a] || typeof u.ev["all"] != "undefined") {
                if (a === "remote_api") {
                    utag.DB("Remote API event suppressed.");
                    return;
                }
                if (u.data_source) {
                    b.tealium_datasource = u.data_source;
                }
                u.make_enrichment_request = false;
                if (!u.is_in_sample_group(b)) {
                    return false
                }
                u.get_performance_timing(b);
                for (var i = 0; i < u.server_list.length; i++) {
                    if (b["cp.utag_main_dc_region"]) {
                        u.region = b["cp.utag_main_dc_region"];
                        u.server_list[i] = u.server_list[i].replace("datacloud.", "datacloud-" + u.region + ".");
                        u.server_list[i] = u.server_list[i].replace("collect.", "collect-" + u.region + ".");
                    }
                    if (u.enrichment_enabled[i] !== false) {
                        u.enrichment_enabled[u.server_list[i]] = true
                    }
                }
                if (u.server_list.length > 1) {
                    u.profile_specific_vid = 1;
                }
                u.data = utag.datacloud || {};
                u.data["loader.cfg"] = {};
                for (d in utag.loader.GV(utag.loader.cfg)) {
                    if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
                        utag.loader.cfg[d].executed = 1;
                    } else {
                        utag.loader.cfg[d].executed = 0;
                    }
                    u.data["loader.cfg"][d] = utag.loader.GV(utag.loader.cfg[d]);
                }
                u.data.data = b;
                for (d in u.data.data) {
                    if ((d + '').indexOf("qp.") == 0) {
                        u.data.data[d] = encodeURIComponent(u.data.data[d]);
                    } else if ((d + '').indexOf("va.") == 0) {
                        delete u.data.data[d]
                    }
                }
                if (!b["cp.utag_main_dc_event"]) {
                    b["cp.utag_main_dc_visit"] = (1 + (b["cp.utag_main_dc_visit"] ? parseInt(b["cp.utag_main_dc_visit"]) : 0)) + '';
                }
                b["cp.utag_main_dc_event"] = (1 + (b["cp.utag_main_dc_event"] ? parseInt(b["cp.utag_main_dc_event"]) : 0)) + '';
                utag.loader.SC("utag_main", {
                    "dc_visit": b["cp.utag_main_dc_visit"],
                    "dc_event": b["cp.utag_main_dc_event"] + ";exp-session"
                });
                utag.data["cp.utag_main_dc_visit"] = b["cp.utag_main_dc_visit"];
                utag.data["cp.utag_main_dc_event"] = b["cp.utag_main_dc_event"];
                var dt = new Date();
                u.data.browser = {};
                try {
                    u.data.browser["height"] = window.innerHeight || document.body.clientHeight;
                    u.data.browser["width"] = window.innerWidth || document.body.clientWidth;
                    u.data.browser["screen_height"] = screen.height;
                    u.data.browser["screen_width"] = screen.width;
                    u.data.browser["timezone_offset"] = dt.getTimezoneOffset();
                } catch (e) {
                    utag.DB(e)
                }
                u.data["event"] = a + '';
                u.data["post_time"] = dt.getTime();
                if (u.data_enrichment == "frequent" || u.data_enrichment == "infrequent") {
                    u.visit_num = b["cp.utag_main_dc_visit"];
                    if (parseInt(u.visit_num) > 1 && b["cp.utag_main_dc_event"] == "1") {
                        u.enrichment_polling = 2;
                    }
                    try {
                        u.va_update = parseInt(localStorage.getItem("tealium_va_update") || 0);
                    } catch (e) {
                        utag.DB(e)
                    }
                    u.visitor_id = u.visitor_id || b["cp.utag_main_v_id"];
                    if ((u.data_enrichment == "frequent" && !(u.visit_num == "1" && b["cp.utag_main_dc_event"] == "1")) || (u.data_enrichment == "infrequent" && parseInt(u.visit_num) > 1 && parseInt(b["cp.utag_main_dc_event"]) <= 5 && u.visit_num != u.va_update)) {
                        u.make_enrichment_request = true;
                    } else if (b._corder) {
                        u.make_enrichment_request = true;
                        u.enrichment_polling = 3;
                        u.enrichment_polling_delay = 4000;
                    }
                    u.visitor_service_request = function(t, server) {
                        var s = "https://" + u.server_prefix + "visitor-service" + (u.region ? "-" + u.region : "").replace(/[^-A-Za-z0-9+_.]/g, "") + "." + u.server_domain;
                        var p = u.get_account_profile(server);
                        (function(p) {
                            var prefix = "tealium_va";
                            var key = "_" + p[1] + "_" + p[2];
                            utag.ut["writeva" + p[2]] = function(o) {
                                utag.DB("Visitor Attributes: " + prefix + key);
                                utag.DB(o)
                                var str = JSON.stringify(o);
                                if (str != "{}" && str != "") {
                                    try {
                                        localStorage.setItem('tealium_va_update', utag.data["cp.utag_main_dc_visit"]);
                                        localStorage.setItem(prefix, str);
                                        localStorage.setItem(prefix + key, str);
                                    } catch (e) {
                                        utag.DB(e)
                                    }
                                    if (typeof tealium_enrichment == "function") {
                                        tealium_enrichment(o, prefix + key);
                                    }
                                }
                            }
                        }(p.slice(0)))
                        var vid = u.visitor_id;
                        if (u.profile_specific_vid == 1) {
                            vid += p[2];
                        }
                        utag.ut.loader({
                            id: "tealium_visitor_service_292" + p[2],
                            src: s + "/" + p[1] + "/" + p[2] + "/" + vid.replace(/\?callback=.*/g, "") + "?callback=utag.ut%5B%22writeva" + p[2] + "%22%5D&rnd=" + t
                        });
                    }
                    u.do_enrichment = function(server, enrichment_polling, enrichment_polling_delay) {
                        if (typeof utag.ut.loader != "undefined") {
                            for (var i = 0; i < enrichment_polling; i++) {
                                setTimeout(function() {
                                    u.visitor_service_request((new Date).getTime(), server)
                                }, i * enrichment_polling_delay + 1);
                            }
                        }
                    }
                }
                var json_string;
                var regExpReplace = new RegExp(u.visitor_id, "g");
                if (window.FormData) {
                    function postData(server_index, enrichment_polling, enrichment_polling_delay) {
                        if (server_index + 1 > u.server_list.length) {
                            return;
                        }
                        var xhr = new XMLHttpRequest();
                        var server = u.server_list[server_index];
                        var formData = new FormData();
                        xhr.addEventListener('readystatechange', function() {
                            if (xhr.readyState === 3) {
                                try {
                                    u.region = xhr.getResponseHeader("X-Region") || u.region || "";
                                } catch (res_error) {
                                    utag.DB(res_error);
                                    u.region = u.region || "";
                                }
                                if (u.region) utag.loader.SC("utag_main", {
                                    "dc_region": u.region + ";exp-session"
                                });
                                utag.DB("dc_region:" + u.region);
                            } else if (xhr.readyState === 4) {
                                postData(server_index + 1, enrichment_polling, enrichment_polling_delay);
                                if (u.make_enrichment_request && u.enrichment_enabled[server]) u.do_enrichment(server, enrichment_polling, enrichment_polling_delay);
                            }
                        });
                        xhr.open('post', u.server_list[server_index], true);
                        xhr.withCredentials = true;
                        json_string = JSON.stringify(u.data);
                        if (u.profile_specific_vid == 1) {
                            json_string = json_string.replace(regExpReplace, u.visitor_id + u.get_account_profile(server)[2]);
                        }
                        formData.append("data", json_string);
                        xhr.send(formData);
                    }
                    postData(0, u.enrichment_polling, u.enrichment_polling_delay);
                } else {
                    for (var i = 0; i < u.server_list.length; i++) {
                        (function(i, enrichment_polling, enrichment_polling_delay) {
                            var server = u.server_list[i];
                            setTimeout(function() {
                                json_string = JSON.stringify(u.data);
                                if (u.profile_specific_vid == 1) {
                                    json_string = json_string.replace(regExpReplace, u.visitor_id + u.get_account_profile(server)[2]);
                                }
                                var img = new Image();
                                img.src = server + '?data=' + encodeURIComponent(json_string);
                                if (u.make_enrichment_request && u.enrichment_enabled[server]) u.do_enrichment(server, enrichment_polling, enrichment_polling_delay);
                            }, i * 700);
                        }(i, u.enrichment_polling, u.enrichment_polling_delay))
                    }
                }
            }
        }
        try {
            utag.o[loader].loader.LOAD(id)
        } catch (e) {
            utag.loader.LOAD(id)
        }
    })('292', 'politico.main');
} catch (e) {
    utag.DB(e)
}

//tealium universal tag - utag.297 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
var _linkedin = _linkedin || {};
var _linkedin_data_partner_id = _linkedin_data_partner_id || "";
try {
    (function(id, loader) {
        var u = {
            "id": id
        };
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
            u.loader = function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        b = m;
                    } else {
                        b = a.createElement("iframe");
                    }
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id;
                }
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l]);
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                if (o.type != "img" && !m) {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b);
                        }
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            };
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        u.ev = {
            "view": 1
        };
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.clearEmptyKeys = function(object) {
            for (var key in object) {
                if (object[key] === "" || object[key] === undefined) {
                    delete object[key];
                }
            }
            return object;
        };
        u.map = {};
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                utag.DB("send:297");
                utag.DB(b);
                var c, d, e, f;
                u.data = {
                    "qsp_delim": "&",
                    "kvp_delim": "=",
                    "base_url": "https://snap.licdn.com/li.lms-analytics/insight.min.js",
                    "partner_id": "150684",
                    "linkedin": {
                        "custom_channel_id": "",
                        "custom_group_id": "",
                        "custom_user_id": "",
                        "zoom_info_id": "",
                        "title": "",
                        "domain": "",
                        "company": "",
                        "gender": "",
                        "location": "",
                        "education": "",
                        "email_sha256": "",
                        "email_sha512": "",
                        "raw_data": "",
                        "raw_data_overwrite": "",
                        "encrypted_data": "",
                        "partner_data": "",
                        "sic_codes": "",
                        "employee_range": "",
                        "default_keywords": "",
                        "async_target": "",
                        "use_iframe": "",
                        "use_callback": "",
                        "test_url": ""
                    }
                };
                utag.DB("send:297:EXTENSIONS");
                utag.DB(b);
                c = [];
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.map_func(e[f].split("."), u.data, b[d]);
                        }
                    }
                }
                utag.DB("send:297:MAPPINGS");
                utag.DB(u.data);
                u.data.order_id = u.data.order_id || b._corder || "";
                u.data.order_total = u.data.order_total || b._ctotal || "";
                u.data.order_currency = u.data.order_currency || b._ccurrency || "";
                u.data.customer_id = u.data.customer_id || b._ccustid || "";
                if (!u.data.partner_id) {
                    utag.DB(u.id + ": Tag not fired: Required attribute not populated");
                    return;
                }
                _linkedin_data_partner_id = u.data.partner_id;
                u.data.linkedin.partner_id = u.data.partner_id;
                u.data.linkedin.order_id = u.data.order_id;
                u.data.linkedin.conv_value = u.data.order_total;
                u.data.linkedin.conv_currency = u.data.order_currency;
                _linkedin = u.clearEmptyKeys(u.data.linkedin);
                u.loader({
                    "type": "script",
                    "src": u.data.base_url,
                    "cb": null,
                    "loc": "script",
                    "id": "utag_297",
                    "attrs": {}
                });
                utag.DB("send:297:COMPLETE");
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("297", "politico.main"));
} catch (error) {
    utag.DB(error);
}

//tealium universal tag - utag.301 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {
            "id": id
        };
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
            u.loader = function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        b = m;
                    } else {
                        b = a.createElement("iframe");
                    }
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id;
                }
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l]);
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                if (o.type != "img" && !m) {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b);
                        }
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            };
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        u.ev = {
            "view": 1
        };
        u.initialized = false;
        u.scriptrequested = false;
        u.queue = [];
        u.event_lookup = {
            "PageView": "PageView",
            "ViewContent": "ViewContent",
            "Search": "Search",
            "AddToCart": "AddToCart",
            "AddToWishlist": "AddToWishlist",
            "InitiateCheckout": "InitiateCheckout",
            "AddPaymentInfo": "AddPaymentInfo",
            "Purchase": "Purchase",
            "Signup": "Signup",
            "CompleteRegistration": "CompleteRegistration",
            "Download": "Download"
        };
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.clearEmptyKeys = function(object) {
            for (var key in object) {
                if (object[key] === "" || object[key] === undefined) {
                    delete object[key];
                }
            }
            return object;
        };
        u.map = {};
        u.extend = [];
        u.loader_cb = function(a, b, c) {
            utag.DB("send:301:CALLBACK");
            var event_params, i, q;
            event_params = {};
            if (!u.initialized) {
                u.initialized = true;
                twq("init", u.data.twitter_pixel_id);
                if (u.data.event_name === "") {
                    u.data.event_name = "PageView";
                }
            }
            if (u.data.event_name === "PageView") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.num_items) {
                    event_params.num_items = u.data.num_items;
                }
            }
            if (u.data.event_name === "ViewContent") {
                if (u.data.content_type === "" || u.data.product_id.length === 0) {
                    utag.DB(u.id + ": ViewContent event not fired: Required attribute not populated");
                    return;
                }
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                if (u.data.product_category.length > 0) {
                    event_params.content_category = u.data.product_category.join(",");
                }
                event_params.content_type = u.data.content_type;
                event_params.content_ids = u.data.product_id;
            }
            if (u.data.event_name === "Search") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
            }
            if (u.data.event_name === "AddToCart") {
                if (u.data.content_type === "" || u.data.product_id.length === 0) {
                    utag.DB(u.id + ": AddToCart event not fired: Required attribute not populated");
                    return;
                }
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                event_params.content_type = u.data.content_type;
                event_params.content_ids = u.data.product_id;
            }
            if (u.data.event_name === "AddToWishlist") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                if (u.data.product_category.length > 0) {
                    event_params.content_category = u.data.product_category.join(",");
                }
                if (u.data.product_id.length > 0) {
                    event_params.content_ids = u.data.product_id;
                }
            }
            if (u.data.event_name === "InitiateCheckout") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                if (u.data.product_category.length > 0) {
                    event_params.content_category = u.data.product_category.join(",");
                }
                if (u.data.product_id.length > 0) {
                    event_params.content_ids = u.data.product_id;
                }
                if (u.data.num_items) {
                    event_params.num_items = u.data.num_items;
                } else if (u.data.product_quantity.length > 0) {
                    q = 0;
                    for (i = 0; i < u.data.product_quantity.length; i++) {
                        q += parseInt(u.data.product_quantity[i]);
                    }
                    event_params.num_items = q + "";
                }
            }
            if (u.data.event_name === "AddPaymentInfo") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_category.length > 0) {
                    event_params.content_category = u.data.product_category.join(",");
                }
                if (u.data.product_id.length > 0) {
                    event_params.content_ids = u.data.product_id;
                }
            }
            if (u.data.event_name === "Purchase") {
                if ((u.data.event_value === "" && u.data.order_total === "") || u.data.order_currency === "" || u.data.content_type === "" || u.data.product_id.length === 0) {
                    utag.DB(u.id + ": Purchase event not fired: Required attribute not populated");
                    return;
                }
                event_params.value = u.data.event_value || u.data.order_total;
                event_params.currency = u.data.order_currency;
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                event_params.content_type = u.data.content_type;
                event_params.content_ids = u.data.product_id;
                if (u.data.num_items) {
                    event_params.num_items = u.data.num_items;
                } else if (u.data.product_quantity.length > 0) {
                    q = 0;
                    for (i = 0; i < u.data.product_quantity.length; i++) {
                        q += parseInt(u.data.product_quantity[i]);
                    }
                    event_params.num_items = q + "";
                }
                if (u.data.order_id) {
                    event_params.order_id = u.data.order_id;
                }
            }
            if (u.data.event_name === "Signup") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                if (u.data.product_category.length > 0) {
                    event_params.content_category = u.data.product_category.join(",");
                }
                if (u.data.order_id) {
                    event_params.order_id = u.data.order_id;
                }
            }
            if (u.data.event_name === "CompleteRegistration") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                if (u.data.event_status) {
                    event_params.status = u.data.event_status;
                }
                if (u.data.order_id) {
                    event_params.order_id = u.data.order_id;
                }
            }
            if (u.data.event_name === "Download") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                if (u.data.product_category.length > 0) {
                    event_params.content_category = u.data.product_category.join(",");
                }
                if (u.data.product_id.length > 0) {
                    event_params.content_ids = u.data.product_id;
                }
                if (u.data.num_items) {
                    event_params.num_items = u.data.num_items;
                } else if (u.data.product_quantity.length > 0) {
                    var q = 0;
                    for (i = 0; i < u.data.product_quantity.length; i++) {
                        q += parseInt(u.data.product_quantity[i]);
                    }
                    event_params.num_items = q + "";
                }
                if (u.data.order_id) {
                    event_params.order_id = u.data.order_id;
                }
            }
            if (u.data.event_name) {
                twq("track", u.data.event_name, event_params);
            }
            utag.DB("send:301:CALLBACK:COMPLETE");
        };
        u.callBack = function() {
            var data = {};
            while (data = u.queue.shift()) {
                u.data = data.data;
                u.loader_cb(data.a, data.b, data.c);
            }
        };
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                utag.DB("send:301");
                utag.DB(b);
                var c, d, e, f, g, h, i;
                u.data = {
                    "twitter_pixel_id": "nyj3v",
                    "event_name": "",
                    "event_value": "",
                    "content_type": "",
                    "num_items": "",
                    "event_status": "",
                    "product_id": [],
                    "product_name": [],
                    "product_category": [],
                    "product_quantity": []
                };
                utag.DB("send:301:EXTENSIONS");
                utag.DB(b);
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.map_func(e[f].split("."), u.data, b[d]);
                        }
                    } else {
                        h = d.split(":");
                        if (h.length === 2 && b[h[0]] === h[1]) {
                            i = "" + u.event_lookup[u.map[d]];
                            if (i !== "") {
                                u.data.event_name = i;
                            }
                        }
                    }
                }
                utag.DB("send:301:MAPPINGS");
                utag.DB(u.data);
                u.data.order_id = u.data.order_id || b._corder || "";
                u.data.order_total = u.data.order_total || b._ctotal || "";
                u.data.order_currency = u.data.order_currency || b._ccurrency || "";
                if (u.data.product_id.length === 0 && b._cprod !== undefined) {
                    u.data.product_id = b._cprod.slice(0);
                }
                if (u.data.product_name.length === 0 && b._cprodname !== undefined) {
                    u.data.product_name = b._cprodname.slice(0);
                }
                if (u.data.product_category.length === 0 && b._ccat !== undefined) {
                    u.data.product_category = b._ccat.slice(0);
                }
                if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
                    u.data.product_quantity = b._cquan.slice(0);
                }
                if (!u.data.twitter_pixel_id) {
                    utag.DB(u.id + ": Tag not fired: Required attribute not populated");
                    return;
                }
                if (u.initialized) {
                    u.loader_cb(a, b, c);
                } else {
                    u.queue.push({
                        "data": u.data,
                        "a": a,
                        "b": b,
                        "c": c
                    });
                    if (!u.scriptrequested) {
                        u.scriptrequested = true;
                        ! function(e, t, n, s, u, a) {
                            e.twq || (s = e.twq = function() {
                                s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
                            }, s.version = '1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = '//static.ads-twitter.com/uwt.js', a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a))
                        }(window, document, 'script');
                        u.callBack();
                    }
                }
                utag.DB("send:301:COMPLETE");
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("301", "politico.main"));
} catch (error) {
    utag.DB(error);
}

//tealium universal tag - utag.302 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {
            "id": id
        };
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
            u.loader = function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        b = m;
                    } else {
                        b = a.createElement("iframe");
                    }
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id;
                }
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l]);
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                if (o.type != "img" && !m) {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b);
                        }
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            };
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        u.ev = {
            "view": 1
        };
        u.initialized = false;
        u.scriptrequested = false;
        u.queue = [];
        u.event_lookup = {
            "PageView": "PageView",
            "ViewContent": "ViewContent",
            "Search": "Search",
            "AddToCart": "AddToCart",
            "AddToWishlist": "AddToWishlist",
            "InitiateCheckout": "InitiateCheckout",
            "AddPaymentInfo": "AddPaymentInfo",
            "Purchase": "Purchase",
            "Signup": "Signup",
            "CompleteRegistration": "CompleteRegistration",
            "Download": "Download"
        };
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.clearEmptyKeys = function(object) {
            for (var key in object) {
                if (object[key] === "" || object[key] === undefined) {
                    delete object[key];
                }
            }
            return object;
        };
        u.map = {};
        u.extend = [];
        u.loader_cb = function(a, b, c) {
            utag.DB("send:302:CALLBACK");
            var event_params, i, q;
            event_params = {};
            if (!u.initialized) {
                u.initialized = true;
                twq("init", u.data.twitter_pixel_id);
                if (u.data.event_name === "") {
                    u.data.event_name = "PageView";
                }
            }
            if (u.data.event_name === "PageView") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.num_items) {
                    event_params.num_items = u.data.num_items;
                }
            }
            if (u.data.event_name === "ViewContent") {
                if (u.data.content_type === "" || u.data.product_id.length === 0) {
                    utag.DB(u.id + ": ViewContent event not fired: Required attribute not populated");
                    return;
                }
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                if (u.data.product_category.length > 0) {
                    event_params.content_category = u.data.product_category.join(",");
                }
                event_params.content_type = u.data.content_type;
                event_params.content_ids = u.data.product_id;
            }
            if (u.data.event_name === "Search") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
            }
            if (u.data.event_name === "AddToCart") {
                if (u.data.content_type === "" || u.data.product_id.length === 0) {
                    utag.DB(u.id + ": AddToCart event not fired: Required attribute not populated");
                    return;
                }
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                event_params.content_type = u.data.content_type;
                event_params.content_ids = u.data.product_id;
            }
            if (u.data.event_name === "AddToWishlist") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                if (u.data.product_category.length > 0) {
                    event_params.content_category = u.data.product_category.join(",");
                }
                if (u.data.product_id.length > 0) {
                    event_params.content_ids = u.data.product_id;
                }
            }
            if (u.data.event_name === "InitiateCheckout") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                if (u.data.product_category.length > 0) {
                    event_params.content_category = u.data.product_category.join(",");
                }
                if (u.data.product_id.length > 0) {
                    event_params.content_ids = u.data.product_id;
                }
                if (u.data.num_items) {
                    event_params.num_items = u.data.num_items;
                } else if (u.data.product_quantity.length > 0) {
                    q = 0;
                    for (i = 0; i < u.data.product_quantity.length; i++) {
                        q += parseInt(u.data.product_quantity[i]);
                    }
                    event_params.num_items = q + "";
                }
            }
            if (u.data.event_name === "AddPaymentInfo") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_category.length > 0) {
                    event_params.content_category = u.data.product_category.join(",");
                }
                if (u.data.product_id.length > 0) {
                    event_params.content_ids = u.data.product_id;
                }
            }
            if (u.data.event_name === "Purchase") {
                if ((u.data.event_value === "" && u.data.order_total === "") || u.data.order_currency === "" || u.data.content_type === "" || u.data.product_id.length === 0) {
                    utag.DB(u.id + ": Purchase event not fired: Required attribute not populated");
                    return;
                }
                event_params.value = u.data.event_value || u.data.order_total;
                event_params.currency = u.data.order_currency;
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                event_params.content_type = u.data.content_type;
                event_params.content_ids = u.data.product_id;
                if (u.data.num_items) {
                    event_params.num_items = u.data.num_items;
                } else if (u.data.product_quantity.length > 0) {
                    q = 0;
                    for (i = 0; i < u.data.product_quantity.length; i++) {
                        q += parseInt(u.data.product_quantity[i]);
                    }
                    event_params.num_items = q + "";
                }
                if (u.data.order_id) {
                    event_params.order_id = u.data.order_id;
                }
            }
            if (u.data.event_name === "Signup") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                if (u.data.product_category.length > 0) {
                    event_params.content_category = u.data.product_category.join(",");
                }
                if (u.data.order_id) {
                    event_params.order_id = u.data.order_id;
                }
            }
            if (u.data.event_name === "CompleteRegistration") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                if (u.data.event_status) {
                    event_params.status = u.data.event_status;
                }
                if (u.data.order_id) {
                    event_params.order_id = u.data.order_id;
                }
            }
            if (u.data.event_name === "Download") {
                if (u.data.event_value) {
                    event_params.value = u.data.event_value;
                }
                if (u.data.order_currency) {
                    event_params.currency = u.data.order_currency;
                }
                if (u.data.product_name.length > 0) {
                    event_params.content_name = u.data.product_name.join(",");
                }
                if (u.data.product_category.length > 0) {
                    event_params.content_category = u.data.product_category.join(",");
                }
                if (u.data.product_id.length > 0) {
                    event_params.content_ids = u.data.product_id;
                }
                if (u.data.num_items) {
                    event_params.num_items = u.data.num_items;
                } else if (u.data.product_quantity.length > 0) {
                    var q = 0;
                    for (i = 0; i < u.data.product_quantity.length; i++) {
                        q += parseInt(u.data.product_quantity[i]);
                    }
                    event_params.num_items = q + "";
                }
                if (u.data.order_id) {
                    event_params.order_id = u.data.order_id;
                }
            }
            if (u.data.event_name) {
                twq("track", u.data.event_name, event_params);
            }
            utag.DB("send:302:CALLBACK:COMPLETE");
        };
        u.callBack = function() {
            var data = {};
            while (data = u.queue.shift()) {
                u.data = data.data;
                u.loader_cb(data.a, data.b, data.c);
            }
        };
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                utag.DB("send:302");
                utag.DB(b);
                var c, d, e, f, g, h, i;
                u.data = {
                    "twitter_pixel_id": "nygpo",
                    "event_name": "",
                    "event_value": "",
                    "content_type": "",
                    "num_items": "",
                    "event_status": "",
                    "product_id": [],
                    "product_name": [],
                    "product_category": [],
                    "product_quantity": []
                };
                utag.DB("send:302:EXTENSIONS");
                utag.DB(b);
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.map_func(e[f].split("."), u.data, b[d]);
                        }
                    } else {
                        h = d.split(":");
                        if (h.length === 2 && b[h[0]] === h[1]) {
                            i = "" + u.event_lookup[u.map[d]];
                            if (i !== "") {
                                u.data.event_name = i;
                            }
                        }
                    }
                }
                utag.DB("send:302:MAPPINGS");
                utag.DB(u.data);
                u.data.order_id = u.data.order_id || b._corder || "";
                u.data.order_total = u.data.order_total || b._ctotal || "";
                u.data.order_currency = u.data.order_currency || b._ccurrency || "";
                if (u.data.product_id.length === 0 && b._cprod !== undefined) {
                    u.data.product_id = b._cprod.slice(0);
                }
                if (u.data.product_name.length === 0 && b._cprodname !== undefined) {
                    u.data.product_name = b._cprodname.slice(0);
                }
                if (u.data.product_category.length === 0 && b._ccat !== undefined) {
                    u.data.product_category = b._ccat.slice(0);
                }
                if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
                    u.data.product_quantity = b._cquan.slice(0);
                }
                if (!u.data.twitter_pixel_id) {
                    utag.DB(u.id + ": Tag not fired: Required attribute not populated");
                    return;
                }
                if (u.initialized) {
                    u.loader_cb(a, b, c);
                } else {
                    u.queue.push({
                        "data": u.data,
                        "a": a,
                        "b": b,
                        "c": c
                    });
                    if (!u.scriptrequested) {
                        u.scriptrequested = true;
                        ! function(e, t, n, s, u, a) {
                            e.twq || (s = e.twq = function() {
                                s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
                            }, s.version = '1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = '//static.ads-twitter.com/uwt.js', a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a))
                        }(window, document, 'script');
                        u.callBack();
                    }
                }
                utag.DB("send:302:COMPLETE");
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("302", "politico.main"));
} catch (error) {
    utag.DB(error);
}

//tealium universal tag - utag.303 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments)
};
gtag('js', new Date());
try {
    (function(id, loader) {
        var u = {
            "id": id
        };
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
            u.loader = function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        b = m;
                    } else {
                        b = a.createElement("iframe");
                    }
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id;
                }
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l]);
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                if (o.type != "img" && !m) {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b);
                        }
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            };
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        u.ev = {
            "view": 1
        };
        u.initialized = false;
        u.scriptrequested = false;
        u.queue = [];
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.map = {};
        u.extend = [];
        u.loader_cb = function() {
            utag.DB("send:303:CALLBACK");
            u.initialized = true;
            var g = {};
            if (u.data.conversion_label) {
                g.send_to = u.data.conversion_id + "/" + u.data.conversion_label;
                if (u.data.order_subtotal) {
                    g.value = u.data.order_subtotal;
                    g.currency = u.data.order_currency;
                    g.transaction_id = u.data.order_id;
                }
                for (var key in u.data.custom) {
                    g[key] = u.data.custom[key];
                }
                gtag("event", "conversion", g);
            }
            utag.DB("send:303:CALLBACK:COMPLETE");
        };
        u.callBack = function() {
            var data = {};
            while (data = u.queue.shift()) {
                u.data = data.data;
                u.loader_cb();
            }
        };
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                utag.DB("send:303");
                utag.DB(b);
                var c, d, e, f;
                u.data = {
                    "base_url": "https://www.googletagmanager.com/gtag/js",
                    "conversion_id": "AW-825814891",
                    "conversion_label": "",
                    "conversion_value": "",
                    "custom": {}
                };
                utag.DB("send:303:EXTENSIONS");
                utag.DB(b);
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.map_func(e[f].split("."), u.data, b[d]);
                        }
                    }
                }
                utag.DB("send:303:MAPPINGS");
                utag.DB(u.data);
                u.data.order_id = u.data.order_id || b._corder || "";
                u.data.order_subtotal = u.data.conversion_value || u.data.order_subtotal || b._csubtotal || "";
                u.data.order_currency = u.data.conversion_currency || u.data.order_currency || b._ccurrency || "";
                if (!u.data.conversion_id) {
                    utag.DB(u.id + ": Tag not fired: Required attribute not populated");
                    return;
                }
                u.data.base_url += "?id=" + u.data.conversion_id;
                if (u.initialized) {
                    u.loader_cb();
                } else {
                    u.queue.push({
                        "data": u.data
                    });
                    if (!u.scriptrequested) {
                        u.scriptrequested = true;
                        u.loader({
                            "type": "script",
                            "src": u.data.base_url,
                            "loc": "script",
                            "cb": u.callBack,
                            "id": "utag_303",
                            "attrs": {}
                        });
                        gtag('config', u.data.conversion_id);
                    }
                }
                utag.DB("send:303:COMPLETE");
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("303", "politico.main"));
} catch (error) {
    utag.DB(error);
}

//tealium universal tag - utag.314 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
var tp = window["tp"] || [];
try {
    (function(id, loader) {
        var u = {
            "id": id
        };
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
            u.loader = function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        b = m;
                    } else {
                        b = a.createElement("iframe");
                    }
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id;
                }
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l]);
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                if (o.type != "img" && !m) {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b);
                        }
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            };
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        u.ev = {
            "view": 1
        };
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.hasOwn = function(o, a) {
            return o != null && Object.prototype.hasOwnProperty.call(o, a);
        };
        u.isEmptyObject = function(o, a) {
            for (a in o) {
                if (u.hasOwn(o, a)) {
                    return false;
                }
            }
            return true;
        };
        u.map = {
            "content_author_commas": "contentAuthor",
            "site_section": "contentSection",
            "content_tag_commas": "tags",
            "page_type": "variable.page_type"
        };
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                utag.DB("send:314");
                utag.DB(b);
                var c, d, e, f;
                u.data = {
                    "qsp_delim": "&",
                    "kvp_delim": "=",
                    "base_url": "//",
                    "AID": "SGPIPyCUiM",
                    "isSandbox": "false",
                    "trackPages": "true",
                    "contentCreated": "",
                    "contentAuthor": "",
                    "contentSection": "",
                    "contentNative": "",
                    "tags": "",
                    "zone": "",
                    "variable": {
                        "page_type": {}
                    },
                    "param": {
                        "content": {},
                        "user": {},
                        "request": {}
                    }
                };
                utag.DB("send:314:EXTENSIONS");
                utag.DB(b);
                c = [];
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.map_func(e[f].split("."), u.data, b[d]);
                        }
                    }
                }
                utag.DB("send:314:MAPPINGS");
                utag.DB(u.data);
                if (!u.data.AID) {
                    utag.DB(u.id + ": Tag not fired: Required attribute not populated");
                    return;
                }
                if (u.data.isSandbox !== "") {
                    tp.push(["setSandbox", u.data.isSandbox]);
                }
                if (u.data.isSandbox === "true") {
                    u.data.base_url += 'sandbox.tinypass.com';
                } else {
                    u.data.base_url += 'experience.tinypass.com';
                }
                for (key in u.data.variable) {
                    tp.push(["setCustomVariable", key, u.data.variable[key]]);
                }
                if (u.data.trackPages !== "") {
                    tp.push(["setTrackPages", u.data.trackPages]);
                }
                if (!u.isEmptyObject(u.data.param.user)) {
                    for (name in u.data.param.user) {
                        tp.push(["setCustomParam", name, u.data.param.user[name], "user"]);
                    }
                }
                if (!u.isEmptyObject(u.data.param.content)) {
                    for (name in u.data.param.content) {
                        tp.push(["setCustomParam", name, u.data.param.content[name], "content"]);
                    }
                }
                if (!u.isEmptyObject(u.data.param.request)) {
                    for (name in u.data.param.request) {
                        tp.push(["setCustomParam", name, u.data.param.request[name], "request"]);
                    }
                }
                if (u.data.tags !== "") {
                    tp.push(["setTags", u.data.tags]);
                }
                if (u.data.zone !== "") {
                    tp.push(["setZone", u.data.zone]);
                }
                if (u.data.contentCreated !== "") {
                    tp.push(["setContentCreated", u.data.contentCreated]);
                }
                if (u.data.contentAuthor !== "") {
                    tp.push(["setContentAuthor", u.data.contentAuthor]);
                }
                if (u.data.contentSection !== "") {
                    tp.push(["setContentSection", u.data.contentSection]);
                }
                if (u.data.contentNative !== "") {
                    tp.push(["setContentIsNative", u.data.contentNative]);
                }
                if (u.data.variable.page_type !== "") {
                    tp.push(["setCustomVariable", "page_type", u.data.variable.page_type]);
                }
                u.loader({
                    "type": "script",
                    "src": u.data.base_url + "/xbuilder/experience/load?aid=" + u.data.AID,
                    "cb": null,
                    "loc": "script",
                    "id": "utag_314",
                    "attrs": {}
                });
                utag.DB("send:314:COMPLETE");
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("314", "politico.main"));
} catch (error) {
    utag.DB(error);
}

//tealium universal tag - utag.352 ut4.0.202011122202, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {
            "id": id
        };
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
            u.loader = function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        b = m;
                    } else {
                        b = a.createElement("iframe");
                    }
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id;
                }
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l]);
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                if (o.type != "img" && !m) {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b);
                        }
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            };
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        u.ev = {
            "view": 1,
            "link": 1
        };
        u.isEmptyObject = function(o, a) {
            for (a in o) {
                if (utag.ut.hasOwn(o, a)) return false;
            }
            return true;
        };
        u.toBoolean = function(val) {
            val = val || "";
            return val === true || val.toLowerCase() === "true" || val.toLowerCase() === "on";
        };
        u.shouldUpdateConfigOnLink = function() {
            var key;
            if (!u.isEmptyObject(u.data.config.custom_map) || !u.isEmptyObject(u.data.set)) {
                return true;
            }
            for (key in u.data.config) {
                if (key.match("user_id|page_path|page_title|page_location")) {
                    return true;
                }
            }
            return false;
        };
        u.hasgtagjs = function() {
            window.gtagRename = window.gtagRename || "" || "gtag";
            if (utag.ut.gtagScriptRequested) {
                return true;
            }
            var i, s = document.getElementsByTagName("script");
            for (i = 0; i < s.length; i++) {
                if (s[i].src && s[i].src.indexOf("gtag/js") >= 0 && (s[i].id && s[i].id.indexOf("utag") > -1)) {
                    return true;
                }
            }
            var data_layer_name = "" || "dataLayer";
            window[data_layer_name] = window[data_layer_name] || [];
            if (typeof window[window.gtagRename] !== "function") {
                window[window.gtagRename] = function() {
                    window[data_layer_name].push(arguments);
                };
                var cross_track = u.toBoolean("false"),
                    cross_track_domains = "";
                if (cross_track && cross_track_domains !== "") {
                    window[window.gtagRename]("set", "linker", {
                        domains: cross_track_domains.split(","),
                        accept_incoming: true
                    });
                }
                window[window.gtagRename]("js", new Date());
            }
            return false;
        };
        u.scriptrequested = u.hasgtagjs();
        u.o = window[window.gtagRename];
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.setGlobalProperties = function(data, reset, custom_property) {
            var map = {
                    "user_id": {
                        "name": "user_id",
                        "type": "exists",
                        "reset": true
                    },
                    "page_path": {
                        "name": "page_path",
                        "type": "exists",
                        "reset": true
                    },
                    "page_title": {
                        "name": "page_title",
                        "type": "exists",
                        "reset": true
                    },
                    "page_location": {
                        "name": "page_location",
                        "type": "exists",
                        "reset": false
                    },
                    "developer_id.dYmQxMT": {
                        "name": "developer_id.dYmQxMT",
                        "type": "exists",
                        "reset": false
                    }
                },
                prop, g = {};
            if (custom_property && reset) {
                g[custom_property] = "";
            }
            for (prop in utag.loader.GV(map)) {
                if (reset && map[prop].reset) {
                    g[map[prop].name] = "";
                } else {
                    if (map[prop].type === "bool") {
                        if (data[prop] == true || data[prop] === "true") {
                            g[map[prop].name] = true;
                        }
                    } else if (map[prop].type === "exists") {
                        if (data[prop]) {
                            g[map[prop].name] = data[prop];
                        }
                    }
                }
            }
            if (!u.isEmptyObject(g)) {
                u.o("set", g);
            }
        };
        u.item = function(imp, len) {
            var g = {},
                i, j, key, items = [];
            if (imp === true) {
                len = len || u.data.impression_id.length || u.data.impression_name.length;
                for (i = 0; i < len; i++) {
                    g = {};
                    if (u.data.impression_id[i]) {
                        g.id = u.data.impression_id[i];
                    }
                    if (u.data.impression_name[i]) {
                        g.name = u.data.impression_name[i];
                    }
                    if (u.data.impression_brand[i]) {
                        g.brand = u.data.impression_brand[i];
                    }
                    if (u.data.impression_variant[i]) {
                        g.variant = u.data.impression_variant[i];
                    }
                    if (u.data.impression_category[i]) {
                        g.category = u.data.impression_category[i];
                    }
                    if (u.data.impression_price[i]) {
                        g.price = u.data.impression_price[i];
                    }
                    if (u.data.impression_list_name) {
                        g.list_name = u.data.impression_list_name;
                    }
                    if (u.data.impression_list_id) {
                        g.list_id = u.data.impression_list_id;
                    }
                    if (u.data.impression_list_position[i]) {
                        g.list_position = u.data.impression_list_position[i];
                    }
                    for (key in u.data.cdm_product_scope) {
                        if (Array.isArray(u.data.cdm_product_scope[key])) {
                            g[key] = u.data.cdm_product_scope[key][i];
                        } else {
                            g[key] = u.data.cdm_product_scope[key];
                        }
                    }
                    items.push(g);
                }
            } else {
                len = len || u.data.product_id.length || u.data.product_name.length;
                for (i = 0; i < len; i++) {
                    g = {};
                    if (u.data.autofill_params === "true") {
                        for (j = 0; j < u.data.product_id.length; j++) {
                            u.data.product_name[j] = u.data.product_name[j] || u.data.product_id[j];
                            u.data.product_unit_price[j] = u.data.product_unit_price[j] || "1.00";
                            u.data.product_quantity[j] = u.data.product_quantity[j] || "1";
                        }
                    }
                    g.id = u.data.product_id[i];
                    if (u.data.product_name[i]) {
                        g.name = u.data.product_name[i];
                    }
                    if (u.data.product_brand[i]) {
                        g.brand = u.data.product_brand[i];
                    }
                    if (u.data.product_category[i]) {
                        g.category = u.data.product_category[i];
                    }
                    if (u.data.product_category2[i]) {
                        g.category2 = u.data.product_category2[i];
                    }
                    if (u.data.product_category3[i]) {
                        g.category3 = u.data.product_category3[i];
                    }
                    if (u.data.product_category4[i]) {
                        g.category4 = u.data.product_category4[i];
                    }
                    if (u.data.product_category5[i]) {
                        g.category5 = u.data.product_category5[i];
                    }
                    if (u.data.product_promo_code[i]) {
                        g.coupon = u.data.product_promo_code[i];
                    }
                    if (u.data.product_unit_price[i]) {
                        g.price = u.data.product_unit_price[i];
                    }
                    if (u.data.product_quantity[i]) {
                        g.quantity = u.data.product_quantity[i];
                    }
                    if (u.data.product_variant[i]) {
                        g.variant = u.data.product_variant[i];
                    }
                    if (u.data.product_list_position[i]) {
                        g.list_position = u.data.product_list_position[i];
                    }
                    if (u.data.product_list_name) {
                        g.list_name = u.data.product_list_name;
                    }
                    if (u.data.product_list_id) {
                        g.list_id = u.data.product_list_id;
                    }
                    if (u.data.product_location_id[i]) {
                        g.location_id = u.data.product_location_id[i];
                    }
                    if (u.data.start_date[i]) {
                        g.start_date = u.data.start_date[i];
                    }
                    if (u.data.end_date[i]) {
                        g.end_date = u.data.end_date[i];
                    }
                    if (u.data.origin[i]) {
                        g.origin = u.data.origin[i];
                    }
                    if (u.data.destination[i]) {
                        g.destination = u.data.destination[i];
                    }
                    if (u.data.flight_number[i]) {
                        g.flight_number = u.data.flight_number[i];
                    }
                    if (u.data.travel_class[i]) {
                        g.travel_class = u.data.travel_class[i];
                    }
                    if (u.data.fare_product[i]) {
                        g.fare_product = u.data.fare_product[i];
                    }
                    if (u.data.booking_code[i]) {
                        g.booking_code = u.data.booking_code[i];
                    }
                    for (key in u.data.cdm_product_scope) {
                        if (Array.isArray(u.data.cdm_product_scope[key])) {
                            g[key] = u.data.cdm_product_scope[key][i];
                        } else {
                            g[key] = u.data.cdm_product_scope[key];
                        }
                    }
                    items.push(g);
                }
            }
            return items;
        };
        u.promotion = function(len) {
            var f, g, promo = [];
            len = len || u.data.promo_id.length;
            for (f = 0; f < len; f++) {
                g = {};
                g.id = u.data.promo_id[f];
                g.name = (u.data.promo_name[f] ? u.data.promo_name[f] : u.data.promo_id[f]);
                if (u.data.promo_creative_name[f]) {
                    g.creative_name = u.data.promo_creative_name[f];
                }
                if (u.data.promo_creative_slot[f]) {
                    g.creative_slot = u.data.promo_creative_slot[f];
                }
                if (u.data.promo_location_id[f]) {
                    g.location_id = u.data.promo_location_id[f];
                }
                promo.push(g);
            }
            return promo;
        };
        u.event_map = {
            "add_to_cart": [{
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "items"
            }],
            "add_to_wishlist": [{
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "items"
            }],
            "begin_checkout": [{
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "items"
            }, {
                "name": "coupon"
            }],
            "checkout_progress": [{
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "items"
            }, {
                "name": "coupon"
            }, {
                "name": "checkout_step"
            }],
            "exception": [{
                "name": "description"
            }, {
                "name": "fatal"
            }],
            "generate_lead": [{
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "transaction_id"
            }],
            "login": [{
                "name": "method"
            }],
            "purchase": [{
                "name": "transaction_id",
                "required": true
            }, {
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "tax"
            }, {
                "name": "shipping"
            }, {
                "name": "affiliation"
            }, {
                "name": "coupon"
            }, {
                "name": "items"
            }, {
                "name": "trip_type"
            }, {
                "name": "passengers"
            }],
            "refund": [{
                "name": "transaction_id",
                "required": true
            }, {
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "tax"
            }, {
                "name": "shipping"
            }, {
                "name": "affiliation"
            }, {
                "name": "coupon"
            }, {
                "name": "items"
            }],
            "remove_from_cart": [{
                "name": "value"
            }, {
                "name": "currency"
            }, {
                "name": "items"
            }],
            "screen_view": [{
                "name": "screen_name"
            }],
            "search": [{
                "name": "search_term"
            }, {
                "name": "origin"
            }, {
                "name": "destination"
            }, {
                "name": "start_date"
            }, {
                "name": "end_date"
            }],
            "select_content": [{
                "name": "content_type"
            }, {
                "name": "items"
            }, {
                "name": "promotions"
            }],
            "set_checkout_option": [{
                "name": "checkout_step"
            }, {
                "name": "checkout_option"
            }],
            "share": [{
                "name": "method"
            }, {
                "name": "content_type"
            }, {
                "name": "content_id"
            }],
            "sign_up": [{
                "name": "method"
            }],
            "timing_complete": [{
                "name": "name",
                "required": true
            }, {
                "name": "value",
                "required": true
            }, {
                "name": "event_category"
            }, {
                "name": "event_label"
            }],
            "view_item": [{
                "name": "items"
            }],
            "view_item_list": [{
                "name": "items"
            }],
            "view_promotion": [{
                "name": "promotions"
            }],
            "view_search_results": [{
                "name": "search_term"
            }],
            "add_payment_info": [{
                "name": "items"
            }, {
                "name": "value"
            }, {
                "name": "payment_type"
            }, {
                "name": "currency"
            }],
            "add_shipping_info": [{
                "name": "items"
            }, {
                "name": "value"
            }, {
                "name": "shipping_tier"
            }, {
                "name": "currency"
            }],
            "present_offer": [{
                "name": "item_id"
            }, {
                "name": "item_name"
            }, {
                "name": "item_category"
            }],
            "earn_virtual_currency": [{
                "name": "virtual_currency_name"
            }, {
                "name": "value"
            }],
            "join_group": [{
                "name": "group_id"
            }],
            "level_end": [{
                "name": "level_name"
            }, {
                "name": "success"
            }],
            "level_start": [{
                "name": "level_name"
            }],
            "level_up": [{
                "name": "character"
            }, {
                "name": "level"
            }],
            "post_score": [{
                "name": "level"
            }, {
                "name": "character"
            }, {
                "name": "score"
            }],
            "spend_virtual_currency": [{
                "name": "item_name"
            }, {
                "name": "virtual_currency_name"
            }, {
                "name": "value"
            }],
            "tutorial_begin": [],
            "tutorial_complete": [],
            "unlock_achievement": [{
                "name": "achievement_id"
            }]
        };
        u.std_params = {
            "transaction_id": function() {
                return u.data.order_id;
            },
            "affiliation": function() {
                return u.data.order_store;
            },
            "value": function(event) {
                if (event.match(/timing_complete|virtual_currency/i)) {
                    return u.data.event.value;
                }
                return u.data.order_total;
            },
            "currency": function() {
                return u.data.order_currency;
            },
            "tax": function() {
                return u.data.order_tax;
            },
            "shipping": function() {
                return u.data.order_shipping;
            },
            "coupon": function() {
                return u.data.order_coupon_code;
            },
            "description": function() {
                return u.data.event.description;
            },
            "fatal": function() {
                return u.toBoolean(u.data.event.fatal);
            },
            "screen_name": function() {
                return u.data.event.screen_name;
            },
            "method": function() {
                return u.data.event.method;
            },
            "search_term": function() {
                return u.data.event.search_term;
            },
            "content_type": function() {
                return u.data.event.content_type;
            },
            "content_id": function() {
                return u.data.event.content_id;
            },
            "promotions": function(event) {
                if (event === "select_content" && u.data.event.content_type !== "product") {
                    return u.promotion(1);
                } else if (event !== "select_content") {
                    return u.promotion();
                }
            },
            "name": function() {
                return u.data.event.name;
            },
            "event_category": function() {
                return u.data.event.event_category;
            },
            "event_label": function() {
                return u.data.event.event_label;
            },
            "items": function(event) {
                if (event === "view_item" || event === "add_to_cart" || event === "remove_from_cart") {
                    return u.item(false, 1);
                }
                if (event === "view_item_list") {
                    return u.item(true);
                }
                if (event === "select_content" && u.data.event.content_type) {
                    return u.item(false, 1);
                }
                return u.item();
            },
            "item_category": function() {
                return u.data.product_category[0] ? u.data.product_category[0] : "";
            },
            "item_name": function() {
                return u.data.product_name[0] ? u.data.product_name[0] : "";
            },
            "item_id": function() {
                return u.data.product_id[0] ? u.data.product_id[0] : "";
            },
            "quantity": function() {
                return u.data.product_quantity[0] ? u.data.product_quantity[0] : "";
            },
            "price": function() {
                return u.data.product_unit_price[0] ? u.data.product_unit_price[0] : "";
            }
        };
        u.map = {};
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                utag.DB("send:352");
                utag.DB(b);
                var c, d, e, f, h, i, cdm, cdm_event_flag, event_param, event_param_value, prop;
                u.data = {
                    "qsp_delim": "&",
                    "kvp_delim": "=",
                    "base_url": "https://www.googletagmanager.com/gtag/js?id=##utag_tracking_id##",
                    "tracking_id": "UA-7982496-6",
                    "cross_track": "false",
                    "cross_track_domains": "",
                    "transport_type": "default" || "default",
                    "allow_display_features": "true",
                    "screen_view": "false",
                    "anonymize_ip": "false",
                    "clear_global_vars": "false",
                    "optimize_id": "",
                    "use_amp_client_id": "true",
                    "allow_anchor": "false",
                    "data_layer_name": "",
                    "checkout_step": "",
                    "checkout_option": "",
                    "product_action_list": "",
                    "product_list_position": "",
                    "product_variant": [],
                    "impression_id": [],
                    "impression_name": [],
                    "impression_price": [],
                    "impression_category": [],
                    "impression_brand": [],
                    "impression_variant": [],
                    "impression_list_name": [],
                    "impression_list_position": [],
                    "promo_id": [],
                    "promo_name": [],
                    "promo_creative_name": [],
                    "promo_creative_slot": [],
                    "promo_location_id": [],
                    "product_id": [],
                    "product_name": [],
                    "product_sku": [],
                    "product_brand": [],
                    "product_category": [],
                    "product_category2": [],
                    "product_category3": [],
                    "product_category4": [],
                    "product_category5": [],
                    "product_subcategory": [],
                    "product_quantity": [],
                    "product_unit_price": [],
                    "product_discount": [],
                    "product_promo_code": [],
                    "product_location_id": [],
                    "cdm_product_scope": {},
                    "start_date": [],
                    "end_date": [],
                    "origin": [],
                    "destination": [],
                    "flight_number": [],
                    "travel_class": [],
                    "fare_product": [],
                    "booking_code": [],
                    "page_view_event_data": {},
                    "set": {
                        "developer_id.dYmQxMT": true
                    },
                    "config": {
                        "custom_map": {}
                    },
                    "event": {},
                    "items": []
                };
                utag.DB("send:352:EXTENSIONS");
                utag.DB(b);
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.map_func(e[f].split("."), u.data, b[d]);
                        }
                    } else {
                        h = d.split(":");
                        if (h.length === 2 && b[h[0]] === h[1]) {
                            if (u.map[d]) {
                                u.data.event_name = u.map[d];
                            }
                        }
                    }
                }
                utag.DB("send:352:MAPPINGS");
                utag.DB(u.data);
                u.data.order_id = u.data.order_id || b._corder || "";
                u.data.order_total = u.data.order_total || b._ctotal || "";
                u.data.order_subtotal = u.data.order_subtotal || b._csubtotal || "";
                u.data.order_shipping = u.data.order_shipping || b._cship || "";
                u.data.order_tax = u.data.order_tax || b._ctax || "";
                u.data.order_store = u.data.order_store || b._cstore || "";
                u.data.order_currency = u.data.order_currency || b._ccurrency || "";
                u.data.order_coupon_code = u.data.order_coupon_code || b._cpromo || "";
                u.data.customer_id = u.data.customer_id || b._ccustid || "";
                if (u.data.product_id.length === 0 && b._cprod !== undefined) {
                    u.data.product_id = b._cprod.slice(0);
                }
                if (u.data.product_name.length === 0 && b._cprodname !== undefined) {
                    u.data.product_name = b._cprodname.slice(0);
                }
                if (u.data.product_sku.length === 0 && b._csku !== undefined) {
                    u.data.product_sku = b._csku.slice(0);
                }
                if (u.data.product_brand.length === 0 && b._cbrand !== undefined) {
                    u.data.product_brand = b._cbrand.slice(0);
                }
                if (u.data.product_category.length === 0 && b._ccat !== undefined) {
                    u.data.product_category = b._ccat.slice(0);
                }
                if (u.data.product_subcategory.length === 0 && b._ccat2 !== undefined) {
                    u.data.product_subcategory = b._ccat2.slice(0);
                }
                if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
                    u.data.product_quantity = b._cquan.slice(0);
                }
                if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) {
                    u.data.product_unit_price = b._cprice.slice(0);
                }
                if (u.typeOf(u.data.tracking_id) === "string" && u.data.tracking_id !== "") {
                    u.data.tracking_id = u.data.tracking_id.replace(/\s/g, "").split(",");
                }
                if (!u.data.tracking_id) {
                    utag.DB(u.id + ": Tag not fired: Required attribute not populated");
                    return;
                }
                if (u.data.gtag_enable_tcf_support) {
                    window["gtag_enable_tcf_support"] = u.toBoolean(u.data.gtag_enable_tcf_support);
                }
                for (i = 0; i < u.data.tracking_id.length; i++) {
                    if (!/^[a-zA-Z]{1}-|^[a-zA-Z]{2}-/.test(u.data.tracking_id[i])) {
                        u.data.tracking_id[i] = "UA-" + u.data.tracking_id[i];
                    }
                }
                u.data.base_url = u.data.base_url.replace("##utag_tracking_id##", u.data.tracking_id[0]);
                if (u.data.data_layer_name) {
                    u.data.base_url = u.data.base_url + "&l=" + u.data.data_layer_name;
                }
                u.data.event.send_to = u.data.event.send_to || u.data.tracking_id;
                if (u.data.customer_id) {
                    u.data.config.user_id = u.data.customer_id;
                }
                if (u.toBoolean(u.data.clear_global_vars)) {
                    u.setGlobalProperties(u.data.config, true);
                    for (prop in utag.loader.GV(u.data.set)) {
                        u.setGlobalProperties(u.data.set, true, prop);
                    }
                }
                u.setGlobalProperties(u.data.config, false);
                u.setGlobalProperties(u.data.set, false);
                if (!u.data.event_name && u.data.order_id) {
                    u.data.event_name = "purchase";
                }
                cdm = [];
                for (d in u.data.cdm) {
                    cdm_event_flag = false;
                    cdm = d.split("-");
                    var cdm_name, cdm_event;
                    cdm[0] = cdm[0].replace("contentGroup", "content_group");
                    if (cdm[0].indexOf("content_group") >= 0) {
                        cdm_name = cdm[0];
                        cdm_event = cdm[2] || cdm[1] || "all";
                    } else {
                        cdm_name = cdm[1] || cdm[0];
                        cdm_event = cdm[2];
                        u.data.config.custom_map[cdm[0]] = cdm_name;
                    }
                    if (cdm_event === "all") {
                        u.data.config[cdm_name] = u.data.cdm[d];
                    } else if (cdm_event === "link" && a === "link") {
                        cdm_event_flag = true;
                    } else if (cdm_event === "ecom" && u.data.event_name && u.data.event_name.match(/add_payment_info|add_to_cart|add_to_wishlist|begin_checkout|checkout_progress|purchase|refund|remove_from_cart|product_click|promotion_click|set_checkout_option|view_item|view_item_list|view_promotion/)) {
                        cdm_event_flag = true;
                    } else if (cdm_event === "prod") {
                        u.data.cdm_product_scope[cdm_name] = u.data.cdm[d];
                    } else if (cdm_event === "page_view") {
                        u.data.page_view_event_data[cdm_name] = u.data.cdm[d];
                    } else if (u.data.event_name === cdm_event) {
                        cdm_event_flag = true;
                    }
                    if (cdm_event_flag) {
                        u.data.event[cdm_name] = u.data.cdm[d];
                    }
                }
                if (u.toBoolean(u.data.anonymize_ip) && u.data.config.anonymize_ip === undefined) {
                    u.data.config.anonymize_ip = true;
                }
                if (u.toBoolean(u.data.cross_track) && u.data.config.linker === undefined) {
                    u.data.config.linker = {
                        "accept_incoming": u.toBoolean(u.data.cross_track),
                        "domains": u.data.cross_track_domains,
                        "use_anchor": u.toBoolean(u.data.allow_anchor)
                    };
                }
                if (u.data.allow_display_features === "false" && u.data.config.allow_display_features === undefined && u.data.config.allow_ad_personalization_signals === undefined) {
                    u.data.config.allow_ad_personalization_signals = false;
                }
                if (u.data.config.allow_display_features !== undefined && u.data.config.allow_ad_personalization_signals === undefined) {
                    u.data.config.allow_ad_personalization_signals = u.toBoolean(u.data.config.allow_display_features);
                    delete u.data.config.allow_display_features;
                }
                if (u.toBoolean(u.data.enhanced_link_attribution) && !u.data.config.link_attribution) {
                    u.data.config.link_attribution = true;
                }
                if (u.data.optimize_id && u.data.config.optimize_id === undefined) {
                    u.data.config.optimize_id = u.data.optimize_id;
                }
                if (u.data.use_amp_client_id && u.data.config.use_amp_client_id === undefined) {
                    u.data.config.use_amp_client_id = u.data.use_amp_client_id;
                }
                if (u.data.transport_type !== "default") {
                    u.data.config.transport_type = u.data.transport_type;
                }
                u.data.config.send_page_view = false;
                if (a === "view") {
                    for (i = 0; i < u.data.tracking_id.length; i++) {
                        u.o("config", u.data.tracking_id[i], u.data.config);
                    }
                    if (u.toBoolean(u.data.screen_view)) {
                        u.o("event", "screen_view", u.data.event);
                    } else {
                        u.o("event", "page_view", u.data.page_view_event_data);
                    }
                }
                if (u.data.event_name) {
                    if (u.data.event_name === "product_click" && a === "link") {
                        u.data.event.content_type = "product";
                        u.data.event_name = "select_content";
                    } else if (u.data.event_name === "promotion_click" && a === "link") {
                        u.data.event_name = "select_content";
                    }
                    if (u.data.event.non_interaction) {
                        u.data.event.non_interaction = true;
                    }
                    if (u.event_map[u.data.event_name]) {
                        for (i = 0; i < u.event_map[u.data.event_name].length; i++) {
                            event_param = u.event_map[u.data.event_name][i];
                            event_param_value = u.std_params[event_param.name] ? u.std_params[event_param.name](u.data.event_name) : u.data[event_param.name] || "";
                            if (event_param_value !== "") {
                                u.data.event[event_param.name] = event_param_value;
                            }
                            if (u.data.event[event_param.name] === undefined && event_param.required) {
                                utag.DB(u.id + ": Event: " + u.data.event_name + ": Required attribute not populated");
                            }
                        }
                    }
                    if (u.data.event_name !== "product_click" && u.data.event_name !== "promotion_click") {
                        if (a === "link" && u.shouldUpdateConfigOnLink()) {
                            for (i = 0; i < u.data.tracking_id.length; i++) {
                                u.o("config", u.data.tracking_id[i], u.data.config);
                            }
                        }
                        u.o("event", u.data.event_name, u.data.event);
                    }
                }
                if (!u.hasgtagjs()) {
                    u.scriptrequested = true;
                    utag.ut.gtagScriptRequested = true;
                    u.loader({
                        "type": "script",
                        "src": u.data.base_url,
                        "cb": null,
                        "loc": "script",
                        "id": "utag_352",
                        "attrs": {}
                    });
                }
                utag.DB("send:352:COMPLETE");
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("352", "politico.main"));
} catch (error) {
    utag.DB(error);
}
(function() {
    if (typeof utag != 'undefined' && !utag_condload) {
        utag.initcatch = true;
        for (var i in utag.loader.GV(utag.loader.cfg)) {
            var b = utag.loader.cfg[i];
            if (b.load != 4) {
                utag.initcatch = false;
                break
            };
            if (b.wait == 1) {
                utag.initcatch = false;
                break
            }
        };
        if (utag.initcatch) utag.handler.INIT();
    }
})();