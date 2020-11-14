/*! 20201112-29-RELEASE 2020-11-12 */

! function(e, t) {
    if (t.TRC = t.TRC || {}, "object" == typeof e && "function" == typeof e.now) {
        var n = function() {};
        e.mark && "function" == typeof e.mark || (e.mark = n), TRC.PerfEvenType = {
            START: "start",
            STOP: "stop",
            MARK: "mark",
            REQ_LEVEL_START: "startReq",
            REQ_LEVEL_STOP: "stopReq"
        }, TRC.Performance = function(n) {
            var o = n || {},
                a = "tbl_" + Date.now() + "_",
                r = o.logTimer,
                i = o.logLength || 40,
                s = [],
                l = TRC.EVENT_LOOP_INTERVAL,
                c = 1,
                u = 20,
                m = TRC.EVENT_LOOP_REPORT_INTERVAL;
            this.perfString = "", this.timeout = null, this.modeEvents = {}, this.measurementIds = [], this.modeDictionery = {}, this.measurements = [], this.fpsMeasurements = [], this.eventLoopMeasurements = [], this.measurementsCollection = [], this.firstIterationFlag = !0, o.measures = o.measures || {}, o.measures["generalMeasure_loaderLoaded"] = [a + "2.0", a + "measuring"], o.measures["generalMeasure_implLoaded"] = [a + "4.0", a + "measuring"], o.measures["generalMeasure_integration"] = ["tbl_ic", a + "measuring"], o.measures["generalMeasure_inflate"] = ["tbl_inflate_start", "tbl_inflate_end"];
            var f = function(e, t) {
                this.measurements.push({
                    name: "generalMeasure_" + e,
                    entryType: "measure",
                    startTime: performance.now(),
                    duration: t
                })
            };
            this.addPageConnectionMetrics = function() {
                if (this.firstIterationFlag && navigator.connection) {
                    var e = navigator.connection;
                    if (e.downlink && f.call(this, "connectionDownlink", e.downlink), e.rtt && f.call(this, "connectionRtt", e.rtt), e.effectiveType) {
                        var t;
                        switch (e.effectiveType) {
                            case "slow-2g":
                                t = 1;
                                break;
                            case "2g":
                            case "3g":
                            case "4g":
                                t = e.effectiveType[0];
                                break;
                            default:
                                t = -1
                        }
                        f.call(this, "connectionEffectiveType", Number(t))
                    }
                }
            }, this.logMeasurements = function n() {
                if (!(performance.now() / 1e3 / 60 > 30)) {
                    var r = [];
                    if (this.measurementIds = [], e.getEntriesByName && e.measure) {
                        var i, s;
                        if (e.mark(a + "measuring"), 0 == e.getEntriesByName(a + "measuring").length) {
                            if (!e.setResourceTimingBufferSize) return;
                            e.setResourceTimingBufferSize(e.getEntries().length + 100), e.mark(a + "measuring")
                        }
                        if (this.firstIterationFlag)
                            for (var l in o.measures)
                                if (o.measures.hasOwnProperty(l)) {
                                    var c = o.measures[l][0],
                                        u = o.measures[l][1];
                                    e.getEntriesByName(c).length > 0 && e.getEntriesByName(u).length > 0 && (e.measure(l, c, u), this.measurementIds.push(l))
                                }
                        for (var m in this.modeEvents)
                            if (this.modeEvents.hasOwnProperty(m))
                                for (var f in this.modeEvents[m])
                                    if (this.modeEvents[m].hasOwnProperty(f)) {
                                        var g = this.modeEvents[m][f];
                                        if (g) {
                                            var R = g["prefix"] + f + "_" + m;
                                            g["start"] && g["stop"] ? (e.measure(R, g["start"], g["stop"]), this.measurementIds.push(R)) : g["mark"] && (e.measure(R, g["mark"], a + "measuring"), this.measurementIds.push(R))
                                        }
                                        this.modeEvents[m][f] = null
                                    }
                        for (var C = 0; C < this.measurementIds.length; C++) {
                            s = this.measurementIds[C];
                            var h, l = e.getEntriesByName(s)[0];
                            this.measurements.push(l)
                        }(r = e.getEntriesByType("navigation")).length > 0 && this.firstIterationFlag && (r = r[0], this.measurements.push({
                            name: "generalMeasure_domInteractive",
                            entryType: "measure",
                            startTime: r.domInteractive,
                            duration: 0
                        }), this.measurements.push({
                            name: "generalMeasure_domContentLoadedEventEnd",
                            entryType: "measure",
                            startTime: r.domContentLoadedEventEnd,
                            duration: 0
                        }), this.measurements.push({
                            name: "generalMeasure_loadEventEnd",
                            entryType: "measure",
                            startTime: r.loadEventEnd,
                            duration: 0
                        }), this.measurements.push({
                            name: "generalMeasure_domComplete",
                            entryType: "measure",
                            startTime: r.domComplete,
                            duration: 0
                        }), this.addPageConnectionMetrics()), this.firstIterationFlag = !1, this.returnMeasueObj = {};
                        var b = {};
                        if (0 !== this.measurements.length) {
                            for (; this.fpsMeasurements.length > 0;) this.measurements.push(this.fpsMeasurements.pop());
                            for (; this.eventLoopMeasurements.length > 0;) this.measurements.push(this.eventLoopMeasurements.pop());
                            b.measurements = JSON.stringify(this.measurements), b.dict = JSON.stringify(this.modeDictionery), this.returnMeasueObj.cv = TRC.version || "", TRC.networkId && (this.returnMeasueObj.networkId = TRC.networkId), t.TRCImpl && t.TRCImpl.systemFlags && t.TRCImpl.systemFlags.loaderType && (this.returnMeasueObj.lt = t.TRCImpl.systemFlags.loaderType), this.returnMeasueObj.sd = p(), this.returnMeasueObj.ri = d(), this.returnMeasueObj.vi = T(), this.returnMeasueObj.data = JSON.stringify(b), t.TRCImpl && t.TRCImpl.sendEvent("perf", this.returnMeasueObj), this.measurementsCollection = this.measurementsCollection.concat(this.measurements), this.measurements = []
                        }
                    }
                }
            }, this.mark = function(t, n, o, r, i, s) {
                var l = function(e) {
                        var t = 0;
                        if (0 == e.length) return t;
                        for (var n = 0; n < e.length; n++) {
                            var o;
                            t = (t << 5) - t + e.charCodeAt(n), t &= t
                        }
                        return t
                    },
                    c = n || e.now(),
                    u = l(o + r),
                    m = a + t + (o || r ? "_" + u : "");
                if (e.mark(m), i) {
                    switch (this.modeDictionery[u] = o + "~~@~~" + r, this.modeEvents[u] = this.modeEvents[u] || {}, this.modeEvents[u][i] = this.modeEvents[u][i] || {}, s) {
                        case TRC.PerfEvenType.START:
                        case TRC.PerfEvenType.REQ_LEVEL_START:
                            this.modeEvents[u][i]["start"] = m;
                            break;
                        case TRC.PerfEvenType.STOP:
                        case TRC.PerfEvenType.REQ_LEVEL_STOP:
                            this.modeEvents[u][i]["stop"] = m;
                            break;
                        case TRC.PerfEvenType.MARK:
                            this.modeEvents[u][i]["mark"] = m
                    }
                    s === TRC.PerfEvenType.REQ_LEVEL_STOP || s === TRC.PerfEvenType.REQ_LEVEL_START ? this.modeEvents[u][i]["prefix"] = "reqMeasure_" : this.modeEvents[u][i]["prefix"] = "generalMeasure_"
                }
                return this.perfString = this.perfString + ";" + t + "=" + c, m
            }, window.addEventListener("beforeunload", this.logMeasurements.bind(this));
            var d = function() {
                    var e;
                    return (t.TRCImpl && t.TRCImpl.getGlobalRequestId.trcBind(t.TRCImpl))()
                },
                p = function() {
                    var e;
                    return (t.TRCImpl && t.TRCImpl.getGlobalSessionData.trcBind(t.TRCImpl))()
                },
                T = function() {
                    return t.taboola_view_id || (t.taboola_view_id = (new Date).getTime()), t.taboola_view_id
                },
                g = function() {
                    this.elapsed = 0, this.last = null
                };
            g.prototype = {
                tick: function(e) {
                    this.elapsed = (e - (this.last || e)) / 1e3, this.last = e
                },
                fps: function() {
                    return Math.round(1 / this.elapsed)
                }
            };
            var R = new g;

            function C(e) {
                t.requestAnimationFrame(C), R.tick(e)
            }
            t.requestAnimationFrame && t.requestAnimationFrame(C), this.cancelFpsMeasure = function() {
                C = function() {}
            }, this.getTimer = function() {
                return R
            }, this.getrender = function() {
                return C
            };
            var h = 0,
                b = function() {
                    var e, t, n = {
                        hidden: "visibilitychange",
                        webkitHidden: "webkitvisibilitychange",
                        mozHidden: "mozvisibilitychange",
                        msHidden: "msvisibilitychange"
                    };
                    for (e in n)
                        if (n.hasOwnProperty(e) && e in document) {
                            t = n[e];
                            break
                        }
                    return function(n) {
                        return n && document.addEventListener(t, n), !document[e]
                    }
                }();
            if (b(function() {
                    b() ? (console.warn("vis change" + h), TRC.performance && TRC.performance.mark("windowActiveSTART" + h, null, "active", h, "activeTab", TRC.PerfEvenType.START), TRC.performance && TRC.performance.mark("windowActiveSTOP" + h, null, "active", h, "activeTab", TRC.PerfEvenType.STOP)) : (console.warn("vis change" + h), TRC.performance && TRC.performance.mark("windowInactiveSTART" + h, null, "inactive", h, "inactiveTab", TRC.PerfEvenType.START), TRC.performance && TRC.performance.mark("windowInactiveSTOP" + h, null, "inactive", h, "inactiveTab", TRC.PerfEvenType.STOP)), h++
                }), o.measureEnable) {
                TRC.__takeMeasureQueue = TRC.__takeMeasureQueue || [];
                var v = o.measureTimeToSend || 0,
                    _ = this.logMeasurements.bind(this);
                if (TRC.__takeMeasureQueue.push(_), 0 == v) window.addEventListener("beforeunload", TRC.__takeMeasureQueue.pop());
                else if (1 == TRC.__takeMeasureQueue.length) {
                    var E = TRC.__takeMeasureQueue.pop();
                    this.measureTimeout = setTimeout(function() {
                        _(), o.measureInterval && (this.measureInterval = setInterval(_, Math.max(Number(o.measureInterval), 1e4)))
                    }, v)
                }
                setInterval(function() {
                    var t = e.now();
                    setTimeout(function() {
                        s.push(e.now() - t)
                    }, 0)
                }, l), setInterval(function() {
                    var e, t = 0,
                        n = 0,
                        o = 0;
                    if (s.length > 0) {
                        e = s.length;
                        for (var a = 0; a < s.length; a++) n = Math.max(n, s[a]), o += s[a];
                        t = o / e, s = [];
                        var r = Number(performance.now());
                        TRC.performance.eventLoopMeasurements.length <= u && (TRC.performance.eventLoopMeasurements.push({
                            name: "generalMeasure_ELAVG_" + c,
                            entryType: "measure",
                            startTime: r,
                            duration: t
                        }), TRC.performance.eventLoopMeasurements.push({
                            name: "generalMeasure_ELMAX_" + c,
                            entryType: "measure",
                            startTime: r,
                            duration: n
                        }), c++)
                    }
                }, m), "complete" !== document.readyState && document.addEventListener("readystatechange", function(t) {
                    "complete" === t.target.readyState && TRC.performance.measurements.push({
                        name: "generalMeasure_documentReady",
                        entryType: "measure",
                        startTime: e.now(),
                        duration: 0
                    })
                })
            }
            if (t.requestAnimationFrame) {
                var y = 5e3,
                    w = 1;
                this.fpsIntervalId = setInterval(function() {
                    if (TRC.performance) {
                        var e = TRC.performance.getTimer().fps();
                        TRC.performance.fpsMeasurements.length < 10 && (TRC.performance.fpsMeasurements.push({
                            name: "generalMeasure_FPS" + w,
                            entryType: "measure",
                            startTime: Number(performance.now()),
                            duration: e,
                            fps: e
                        }), w++)
                    }
                }, y)
            }
        }
    }
}(window.performance, window),
function(e) {
    e.TRC = e.TRC || {}, e.TRC.inflate = {
        STYLE: "__style__",
        COMMON: "__common__",
        KEYS: "__keys__",
        getModeCustom: function e(t, n) {
            var o = "\\/\\*\\ss-split-".concat(t, "\\s\\*\\/[^]*\\*\\se-split-").concat(t, "\\s\\*\\/"),
                a = new RegExp(o, "g"),
                r = n.match(a);
            return r ? r[0] : null
        },
        inflateObject: function e(t, n) {
            var o = this,
                a = {},
                r;
            return this.inflateValue(this.KEYS, t, n).forEach(function(e) {
                a[e] = o.inflateValue(e, t, n)
            }), a
        },
        inflateValue: function e(t, n, o) {
            var a = o[t];
            return void 0 === a && (a = n[t]), a
        },
        inflateStyle: function e(t, n) {
            var o = "";
            return Object.keys(n).forEach(function(e) {
                var a = n[e],
                    r = "";
                e.split(",").forEach(function(e) {
                    "" !== r && (r += ","), r += ".".concat(t, " ").concat(e)
                }), o += "".concat(r, "{").concat(a, "}")
            }), o
        },
        getConfig: function e(t) {
            var n = this;
            if (t && t.modes) {
                var o = t.modes,
                    a = t.global,
                    r = a.style,
                    i = o[this.COMMON];
                if (i) {
                    var s = window.performance && "function" == typeof window.performance.mark;
                    s && window.performance.mark("tbl_inflate_start");
                    var l = {},
                        c = r.rtl;
                    Object.keys(o).forEach(function(e) {
                        if (e !== n.COMMON) {
                            var a = o[e];
                            l[e] = n.inflateObject(i, a), t.global["enable-mode-injection"] ? (l[e][n.STYLE] = a[n.STYLE] || i[n.STYLE], t.global["enable-custom-injection"] && (l[e].mode_custom = n.getModeCustom(e, r.mode_custom) || "")) : c += n.inflateStyle(e, n.inflateObject(i[n.STYLE], a[n.STYLE]))
                        }
                    }), t.global["enable-mode-injection"] ? l[this.COMMON] = i : (c += r.custom, c += r.mode_custom, a.style = c), t.modes = l, s && window.performance.mark("tbl_inflate_end")
                }
            }
            return t
        }
    }
}(window),
function(win, doc) {
    if (!win.TRC || !win.TRC.utm) {
        win.TRC ? TRC.utm = [] : TRC = {
            utm: []
        };
        var queueName = "_taboola";
        win[queueName] = win[queueName] || [];
        var config = {
            "modes": {
                "alternating-thumbs-feed-01-y": {
                    "detail-order": "title,branding",
                    "thumbnail-position": "start",
                    "widget-creator-layout": "autowidget-template-stream",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 7,
                        "virtualThumbHeight": 5
                    }],
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 10px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:;",
                        ".video-label-box .branding": "font-size:;line-height:24.0px;display:;color:;font-weight:;font-family:;padding:;text-transform:;",
                        ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;font-family:;",
                        ".videoCube .video-label-box .video-title": "font-size:;-webkit-line-clamp:;text-decoration:none;font-family:;padding:;margin:;font-weight:;line-height:;letter-spacing:;max-height:;*height:;color:;",
                        ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;color:;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;color:;"
                    }
                },
                "blend-thumbs-feed-01-b": {
                    "detail-order": "title,branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 3,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:44.0px;*height:44.0px;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:66px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:22.0px;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".syndicatedItem .video-label-box": "height:66px;margin:5px 0px 0px 0px;padding:;",
                        ".video-label-box .branding": "font-size:;line-height:22.0px;display:;color:;font-weight:;font-family:;padding:;text-transform:;",
                        ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;font-family:;",
                        ".videoCube .video-label-box .video-title": "font-size:;-webkit-line-clamp:;text-decoration:none;font-family:;padding:;margin:;font-weight:;line-height:;letter-spacing:;max-height:;*height:;color:;",
                        ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;color:;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;color:;"
                    }
                },
                "blend-thumbs-feed-01-y": {
                    "detail-order": "title,branding",
                    "thumbnail-position": "start",
                    "widget-creator-layout": "autowidget-template-stream",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 7,
                        "virtualThumbHeight": 5
                    }],
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 10px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:;",
                        ".video-label-box .branding": "font-size:;line-height:24.0px;display:;color:;font-weight:;font-family:;padding:;text-transform:;",
                        ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;font-family:;",
                        ".videoCube .video-label-box .video-title": "font-size:;-webkit-line-clamp:;text-decoration:none;font-family:;padding:;margin:;font-weight:;line-height:;letter-spacing:;max-height:;*height:;color:;",
                        ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;color:;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;color:;"
                    }
                },
                "organic-rec-reel-01-x": {
                    "detail-order": "title,description,branding",
                    "thumbnail-position": "under",
                    "detail-order-syndicated": "title,description,branding",
                    "widget-creator-layout": "autowidget-template",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 2,
                        "virtualThumbHeight": 1
                    }],
                    "storyWidget": true,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#ffffff;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:#ffffff;text-decoration:none;",
                        ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:auto;margin:;padding:;",
                        ".videoCube.syndicatedItem .video-label-box": "margin-left:0px;",
                        ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:#ffffff;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#ffffff;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#ffffff;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:;",
                        ".branding": "color:#ffffff;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".videoCube.thumbnail_under .tbl-text-over": "background:linear-gradient(to bottom, rgba(1,0,0,0) 0%, #000000 100%);",
                        ".syndicatedItem .video-label-box": "height:auto;margin:;padding:;",
                        ".video-label-box .branding": "font-size:;line-height:27.0px;display:;color:;font-weight:;font-family:;padding:;text-transform:;",
                        ".logoDiv a span": "font-size:11.0px;color:#ffffff;display:inline;font-weight:normal;font-family:;",
                        ".videoCube .video-label-box .video-title": "font-size:;-webkit-line-clamp:;text-decoration:none;font-family:;padding:;margin:;font-weight:;line-height:;letter-spacing:;max-height:;*height:;color:;"
                    }
                },
                "organic-thumbs-feed-01": {
                    "detail-order": "title,description,branding",
                    "detail-order-syndicated": "title,description,branding",
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "none",
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "organic-thumbs-feed-01-a-bpcv": {
                    "navigation-type": "scrolling",
                    "detail-order": "title,branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 1.5,
                            "h": 1.5
                        },
                        "rows": 1,
                        "cells": 4,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "none",
                    "enable-read-more": true,
                    "read-more-box-selector": ".article-body",
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:96px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .video-label-box": "height:96px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "organic-thumbs-feed-01-bpcv": {
                    "detail-order": "title,description,branding",
                    "detail-order-syndicated": "title,description,branding",
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "none",
                    "enable-read-more": true,
                    "read-more-box-selector": ".article-body",
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:#000000;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:#000000;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "organic-thumbs-feed-01-c": {
                    "detail-order": "title,branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "none",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'RobotoBold', Arial, sans-serif;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:96px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000;font-family:'RobotoBold', Arial, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'RobotoBold', Arial, sans-serif;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'RobotoBold', Arial, sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:96px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "organic-thumbs-feed-01-c-bpcv": {
                    "detail-order": "title,branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "none",
                    "enable-read-more": true,
                    "read-more-box-selector": ".article-body",
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:96px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .video-label-box": "height:96px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "organic-thumbs-feed-01-d": {
                    "detail-order": "category,title,external-data,branding",
                    "item-renderer": function(box, data) {
                        /***** Start - item-renderer-calling-TRC.addingLogo *****/
                        try {
                            if (!data['is-syndicated']) {
                                var b = box.querySelector('.thumbBlock');
                                var logo = document.createElement('div');
                                var imgLogo = document.createElement('img');
                                var url = TRCImpl['publisher-logo'][TRC.publisherId];
                                logo.className = 'logo-taboola';
                                imgLogo.className = 'image-logo-taboola';
                                imgLogo.src = url;
                                logo.appendChild(imgLogo);
                                b.appendChild(logo)
                            }
                        } catch (e) {
                            __trcError('Error in item-renderer calling-TRC.addingLogo ' + e.message);
                        }
                        /***** End - item-renderer-calling-TRC.addingLogo *****/
                    },
                    "item-data-filter": function(data) {
                        /***** START - category hook *****/
                        try {
                            if (data['category']) {
                                var parser = new DOMParser;
                                var dom = parser.parseFromString('<!doctype html><body>' + data['category'], 'text/html');
                                data['category'] = dom.body.textContent.replace(/[']/g, '').split(',')[0];
                            }
                            return data;
                        } catch (e) {
                            __trcError('Error in item-data-filter category hook ' + e.message);
                        }
                        /***** END - category hook *****/
                    },
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 4,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:27.0px;font-weight:normal;max-height:135.0px;*height:135.0px;color:#222222;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:FoundersGrotesk, Source Sans Pro Bold;",
                        ".trc_rbox_header": "font-family:FoundersGrotesk, Source Sans Pro Bold;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:135px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:108.0px;*height:108.0px;color:#222222;font-family:FoundersGrotesk, Source Sans Pro Bold;font-size:20.0px;line-height:27.0px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:FoundersGrotesk, Source Sans Pro Bold;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".video-icon-img": "margin:0px;height:35.0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:FoundersGrotesk, Source Sans Pro Bold;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:135px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "organic-thumbs-feed-01-d-old": {
                    "detail-order": "category,title,external-data,branding",
                    "item-data-filter": function(data) {
                        /***** START - category hook *****/
                        try {
                            if (data['category']) {
                                var parser = new DOMParser;
                                var dom = parser.parseFromString('<!doctype html><body>' + data['category'], 'text/html');
                                data['category'] = dom.body.textContent.replace(/[']/g, '').split(',')[0];
                            }
                            return data;
                        } catch (e) {
                            __trcError('Error in item-data-filter category hook ' + e.message);
                        }
                        /***** END - category hook *****/
                    },
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 258,
                        "virtualThumbHeight": 157
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 4,
                        "virtualThumbWidth": 258,
                        "virtualThumbHeight": 157
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "none",
                    "title-icon": "PUBLISHER_LOGO",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#222222;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'Source Sans Pro', sans-serif;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:96px;margin:-35px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#222222;font-family:'Source Sans Pro Bold', sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:13.0px;font-weight:bold;text-decoration:none;font-family:'Source Sans Pro', sans-serif;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".video-icon-img": "margin:0px 0px 0px 0px;height:35.0px;",
                        ".branding": "color:#999999;font-size:13.0px;font-weight:bold;text-decoration:none;font-family:'Source Sans Pro', sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:96px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "organic-thumbs-feed-01-f": {
                    "detail-order": "category,title,external-data,branding",
                    "item-renderer": function(box, data) {
                        /***** Start - item-renderer-calling-TRC.addingLogo *****/
                        try {
                            if (!data['is-syndicated']) {
                                var b = box.querySelector('.thumbBlock');
                                var logo = document.createElement('div');
                                var imgLogo = document.createElement('img');
                                var url = TRCImpl['publisher-logo'][TRC.publisherId];
                                logo.className = 'logo-taboola';
                                imgLogo.className = 'image-logo-taboola';
                                imgLogo.src = url;
                                logo.appendChild(imgLogo);
                                b.appendChild(logo)
                            }
                        } catch (e) {
                            __trcError('Error in item-renderer calling-TRC.addingLogo ' + e.message);
                        }
                        /***** End - item-renderer-calling-TRC.addingLogo *****/
                    },
                    "item-data-filter": function(data) {
                        /***** START - category hook *****/
                        try {
                            if (data['category']) {
                                var parser = new DOMParser;
                                var dom = parser.parseFromString('<!doctype html><body>' + data['category'], 'text/html');
                                data['category'] = dom.body.textContent.replace(/[']/g, '').split(',')[0];
                            }
                            return data;
                        } catch (e) {
                            __trcError('Error in item-data-filter category hook ' + e.message);
                        }
                        /***** END - category hook *****/
                    },
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 4,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:normal;max-height:135.0px;*height:135.0px;color:#222222;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:FoundersGrotesk, Source Sans Pro Bold;",
                        ".trc_rbox_header": "font-family:FoundersGrotesk, Source Sans Pro Bold;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:135px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:108.0px;*height:108.0px;color:#222222;font-family:FoundersGrotesk, Source Sans Pro Bold;font-size:20.0px;line-height:27.0px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:FoundersGrotesk, Source Sans Pro Bold;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".video-icon-img": "margin:0px;height:35.0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:FoundersGrotesk, Source Sans Pro Bold;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:135px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "organic-thumbs-feed-01-mp": {
                    "detail-order": "title,branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "none",
                    "organic-show-static-text": true,
                    "widget-theme-type": "MOST_POPULAR",
                    "__style__": {
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:96px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;",
                        ".videoCube .thumbBlock .static-text": "font-weight:normal;font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:11.0px;background-color:#a30202;display:block;color:#ffffff;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:96px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "organic-thumbs-feed-01-x": {
                    "detail-order": "title,description,branding",
                    "detail-order-syndicated": "title,description,branding",
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "none",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "organic-thumbs-feed-01-xx": {
                    "detail-order": "title,branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 3,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "none",
                    "__style__": {
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:96px;margin:5px 5px 0px 5px;padding:;",
                        ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".syndicatedItem .video-label-box": "height:96px;margin:5px 5px 0px 5px;padding:;",
                        ".video-label-box .branding": "font-size:;line-height:24.0px;display:;color:;font-weight:;font-family:;padding:;text-transform:;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;font-family:;",
                        ".videoCube .video-label-box .video-title": "font-size:;-webkit-line-clamp:;text-decoration:none;font-family:;padding:;margin:;font-weight:;line-height:;letter-spacing:;max-height:;*height:;color:;",
                        ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;color:;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;color:;"
                    }
                },
                "organic-thumbs-feed-01-z": {
                    "detail-order": "",
                    "thumbnail-position": "start",
                    "detail-order-syndicated": "",
                    "widget-creator-layout": "autowidget-template-stream",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 7,
                        "virtualThumbHeight": 5
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "none",
                    "before-detail-order": "title,branding",
                    "before-detail-order-syndicated": "title,branding",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:;"
                    }
                },
                "rbox-blended": {
                    "header": "Videos",
                    "orientation": "vertical",
                    "navigation-type": "scrolling",
                    "thumbnail-width": "75",
                    "thumbnail-height": "55",
                    "detail-order": "title,description",
                    "thumbnail-position": "start",
                    "attribution-position": "bottom",
                    "attribution-text": "<span>by<span style=\"font-size:12px;\">Taboola</span></span>",
                    "detail-order-syndicated": "branding,title",
                    "syndicated-static-text": "Sponsored",
                    "auto-size-rules": [{
                        "minWc": 120,
                        "maxWc": 249,
                        "minWsRange": 8,
                        "maxWsRange": 8,
                        "n": 1
                    }, {
                        "minWc": 250,
                        "maxWc": 379,
                        "minWsRange": 8,
                        "maxWsRange": 9,
                        "n": 2
                    }, {
                        "minWc": 380,
                        "maxWc": 609,
                        "minWsRange": 8,
                        "maxWsRange": 10,
                        "n": 3
                    }, {
                        "minWc": 610,
                        "maxWc": 749,
                        "minWsRange": 8,
                        "maxWsRange": 11,
                        "n": 4
                    }, {
                        "minWc": 750,
                        "maxWc": 1029,
                        "minWsRange": 7,
                        "maxWsRange": 11,
                        "n": 5
                    }, {
                        "minWc": 1030,
                        "maxWc": 1419,
                        "minWsRange": 6,
                        "maxWsRange": 11,
                        "n": 6
                    }, {
                        "minWc": 1420,
                        "maxWc": 1729,
                        "minWsRange": 6,
                        "maxWsRange": 12,
                        "n": 7
                    }, {
                        "minWc": 1730,
                        "maxWc": 1920,
                        "minWsRange": 6,
                        "maxWsRange": 13,
                        "n": 8
                    }],
                    "rows": 1,
                    "widget-creator-layout": "autowidget-template",
                    "mode-is-responsive": false,
                    "responsive-rules": null,
                    "use-css-important": false,
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "top",
                    "read-more-mode-devices": "",
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:1px;padding:0;",
                        ".videoCube .video-duration": "left:36px;display:block;",
                        ".videoCube .video-label-box": "margin-left:81px;margin-right:0px;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:bold;text-decoration:none;color:black;border-width:0;background:transparent;border-style:none none solid none;border-color:#D6D5D3;padding:0;line-height:;display:;margin:;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:3px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:none;",
                        ".video-label-box": "text-align:left;height:;margin:;padding:;",
                        "": "width:300px;_width:300px;border-width:0px;border-style:solid solid solid solid;border-color:#000000;padding:0;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".videoCube.horizontal": "border-style:none none none solid;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;border-style:none;margin:;",
                        ".videoCube.syndicatedItem.horizontal": "border-style:none none none solid;",
                        ".videoCube.syndicatedItem .video-duration": "display:block;left:36px;",
                        ".videoCube.syndicatedItem .video-label-box": "margin-left:0px;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:2.58em;*height:2.58em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".videoCube.syndicatedItem .thumbBlock .branding": "text-align:left;background-color:transparent;display:block;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;",
                        ".videoCube.syndicatedItem .thumbBlock .static-text": "text-align:left;background-color:black;display:block;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:;margin:;padding:;"
                    }
                },
                "rec-reel-sc2": {
                    "detail-order": "title,branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 1.5,
                            "h": 1.5
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "storyWidget": true,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbnails-a": {
                    "header": "From The Web",
                    "attribution-position": "top",
                    "widget-creator-revision": "16678511",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 547,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }, {
                        "minWidth": 548,
                        "maxWidth": 768,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 3,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }, {
                        "minWidth": 769,
                        "maxWidth": 875,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }, {
                        "minWidth": 876,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 3,
                        "cells": 3,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "top",
                    "read-more-box-selector": ".article-body",
                    "read-more-minimized-size": 500,
                    "read-more-mode-devices": "",
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:96.0px;*height:96.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:Source Sans Pro Bold;",
                        ".trc_rbox_header": "font-family:Source Sans Pro Bold;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:;display:;margin:;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:;margin:;padding:;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Source Sans Pro Bold;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Source Sans Pro Bold;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Source Sans Pro Bold;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:;margin:;padding:;"
                    }
                },
                "thumbnails-c": {
                    "header": "From The Web",
                    "attribution-position": "top",
                    "widget-creator-revision": "17391299",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 547,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }, {
                        "minWidth": 548,
                        "maxWidth": 768,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 3,
                        "virtualThumbWidth": 5,
                        "virtualThumbHeight": 3
                    }, {
                        "minWidth": 769,
                        "maxWidth": 875,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }, {
                        "minWidth": 876,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 3,
                        "virtualThumbWidth": 5,
                        "virtualThumbHeight": 3
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "top",
                    "read-more-mode-devices": "",
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:57.0px;*height:57.0px;color:#ffffff;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;",
                        ".trc_rbox_header": "font-family:\\2018 EuclidBold\\2019 , Helvetica, Arial, sans-serif;font-size:18.0px;font-weight:bold;text-decoration:none;color:#ffffff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:57px;margin:5px 0px 0px 0px;padding:;",
                        "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:10px 120px 0px 120px !important;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:38.0px;*height:38.0px;color:#ffffff;font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:57px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbnails-d": {
                    "header": "From The Web",
                    "detail-order": "category,title,external-data,branding",
                    "item-renderer": function(box, data) {
                        /***** Start - item-renderer-calling-TRC.addingLogo *****/
                        try {
                            if (!data['is-syndicated']) {
                                var b = box.querySelector('.thumbBlock');
                                var logo = document.createElement('div');
                                var imgLogo = document.createElement('img');
                                var url = TRCImpl['publisher-logo'][TRC.publisherId];
                                logo.className = 'logo-taboola';
                                imgLogo.className = 'image-logo-taboola';
                                imgLogo.src = url;
                                logo.appendChild(imgLogo);
                                b.appendChild(logo)
                            }
                        } catch (e) {
                            __trcError('Error in item-renderer calling-TRC.addingLogo ' + e.message);
                        }
                        /***** End - item-renderer-calling-TRC.addingLogo *****/
                    },
                    "attribution-position": "top",
                    "item-data-filter": function(data) {
                        /***** START - category hook *****/
                        try {
                            if (data['category']) {
                                var parser = new DOMParser;
                                var dom = parser.parseFromString('<!doctype html><body>' + data['category'], 'text/html');
                                data['category'] = dom.body.textContent.replace(/[']/g, '').split(',')[0];
                            }
                            return data;
                        } catch (e) {
                            __trcError('Error in item-data-filter category hook ' + e.message);
                        }
                        /***** END - category hook *****/
                    },
                    "responsive-rules": [{
                            "minWidth": 0,
                            "maxWidth": 480,
                            "margin": {
                                "v": 2,
                                "h": 2
                            },
                            "rows": 2,
                            "cells": 1,
                            "virtualThumbWidth": 16,
                            "virtualThumbHeight": 9
                        },
                        {
                            "minWidth": 481,
                            "margin": {
                                "v": 2,
                                "h": 2
                            },
                            "rows": 1,
                            "cells": 3,
                            "virtualThumbWidth": 16,
                            "virtualThumbHeight": 9
                        }
                    ],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "top",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18px;line-height:27.0px;font-weight:normal;max-height:135.0px;*height:135.0px;color:#111111;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'Source Sans Pro', sans-serif;",
                        ".trc_rbox_header": "font-family:'Source Sans Pro', sans-serif;font-size:30px;font-weight:bold;text-decoration:none;color:#A1A1A1;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:1.2em;display:block;margin:3px 3px 8px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:135px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:108.0px;*height:108.0px;color:#222222;font-family:'Source Sans Pro', sans-serif;font-size:18.0px;line-height:27.0px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#777777;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:'Source Sans Pro', sans-serif;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".video-icon-img": "margin:0px;height:35.0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:'Source Sans Pro', sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:135px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbnails-d-new": {
                    "header": "From The Web",
                    "detail-order": "category,title,external-data,branding",
                    "item-renderer": function(box, data) {
                        /***** Start - item-renderer-calling-TRC.addingLogo *****/
                        try {
                            if (!data['is-syndicated']) {
                                var b = box.querySelector('.thumbBlock');
                                var logo = document.createElement('div');
                                var imgLogo = document.createElement('img');
                                var url = TRCImpl['publisher-logo'][TRC.publisherId];
                                logo.className = 'logo-taboola';
                                imgLogo.className = 'image-logo-taboola';
                                imgLogo.src = url;
                                logo.appendChild(imgLogo);
                                b.appendChild(logo)
                            }
                        } catch (e) {
                            __trcError('Error in item-renderer calling-TRC.addingLogo ' + e.message);
                        }
                        /***** End - item-renderer-calling-TRC.addingLogo *****/
                    },
                    "attribution-position": "top",
                    "item-data-filter": function(data) {
                        /***** START - category hook *****/
                        try {
                            if (data['category']) {
                                var parser = new DOMParser;
                                var dom = parser.parseFromString('<!doctype html><body>' + data['category'], 'text/html');
                                data['category'] = dom.body.textContent.replace(/[']/g, '').split(',')[0];
                            }
                            return data;
                        } catch (e) {
                            __trcError('Error in item-data-filter category hook ' + e.message);
                        }
                        /***** END - category hook *****/
                    },
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 2,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 4,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "disclosure-position": "top",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18px;line-height:27.0px;font-weight:normal;max-height:135.0px;*height:135.0px;color:#111111;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'Source Sans Pro', sans-serif;",
                        ".trc_rbox_header": "font-family:'Source Sans Pro', sans-serif;font-size:32px;font-weight:bold;text-decoration:none;color:#A1A1A1;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:1.2em;display:block;margin:3px 3px 8px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:135px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:108.0px;*height:108.0px;color:#111111;font-family:'Source Sans Pro', sans-serif;font-size:18.0px;line-height:27.0px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:'Source Sans Pro', sans-serif;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".video-icon-img": "margin:0px;height:35.0px;",
                        ".branding": "color:#777777;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:'Source Sans Pro', sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:135px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbnails-d-old": {
                    "header": "FROM THE WEB",
                    "attribution-position": "top",
                    "widget-creator-revision": "16924168",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 985,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }, {
                        "minWidth": 986,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 4,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "top",
                    "read-more-mode-devices": "",
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:76.0px;*height:76.0px;color:#222;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:Source Sans Pro Bold;",
                        ".trc_rbox_header": "font-family:'Euclid Bold';font-size:18.0px;font-weight:bold;text-decoration:none;color:#222;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:;display:;margin:;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:;margin:;padding:;",
                        "": "width:300px;_width:300px;border-width:2px;border-style:solid;border-color:#999;padding:5px!important;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:57.0px;*height:57.0px;color:#222;font-family:Source Sans Pro Bold;font-size:16.0px;line-height:19.0px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:Source Sans Pro Bold;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:;margin:;padding:;"
                    }
                },
                "thumbnails-d-rwnew": {
                    "header": "From The Web",
                    "detail-order": "category,title,external-data,branding",
                    "item-renderer": function(box, data) {
                        /***** Start - item-renderer-calling-TRC.addingLogo *****/
                        try {
                            if (!data['is-syndicated']) {
                                var b = box.querySelector('.thumbBlock');
                                var logo = document.createElement('div');
                                var imgLogo = document.createElement('img');
                                var url = TRCImpl['publisher-logo'][TRC.publisherId];
                                logo.className = 'logo-taboola';
                                imgLogo.className = 'image-logo-taboola';
                                imgLogo.src = url;
                                logo.appendChild(imgLogo);
                                b.appendChild(logo)
                            }
                        } catch (e) {
                            __trcError('Error in item-renderer calling-TRC.addingLogo ' + e.message);
                        }
                        /***** End - item-renderer-calling-TRC.addingLogo *****/
                    },
                    "item-data-filter": function(data) {
                        /***** START - category hook *****/
                        try {
                            if (data['category']) {
                                var parser = new DOMParser;
                                var dom = parser.parseFromString('<!doctype html><body>' + data['category'], 'text/html');
                                data['category'] = dom.body.textContent.replace(/[']/g, '').split(',')[0];
                            }
                            return data;
                        } catch (e) {
                            __trcError('Error in item-data-filter category hook ' + e.message);
                        }
                        /***** END - category hook *****/
                    },
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "top",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18px;line-height:27.0px;font-weight:normal;max-height:135.0px;*height:135.0px;color:#111111;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'Source Sans Pro', sans-serif;",
                        ".trc_rbox_header": "font-family:'Source Sans Pro', sans-serif;font-size:28px;font-weight:bold;text-decoration:none;color:#A1A1A1;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:1.2em;display:block;margin:3px 3px 10px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 1px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                        ".video-label-box": "text-align:left;height:135px;margin:10px 0px 0px 0px;padding:;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 1px 0px;border-style:SOLID;margin:;",
                        ".syndicatedItem .video-title": "max-height:108.0px;*height:108.0px;color:#222222;font-family:'Source Sans Pro', sans-serif;font-size:18.0px;line-height:27.0px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#777777;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:'Source Sans Pro', sans-serif;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".video-icon-img": "margin:0px;height:35.0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:'Source Sans Pro', sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:135px;margin:10px 0px 0px 0px;padding:;"
                    }
                },
                "thumbnails-e": {
                    "header": "You May Like",
                    "attribution-position": "top",
                    "responsive-rules": [{
                            "minWidth": 0,
                            "maxWidth": 480,
                            "margin": {
                                "v": 2,
                                "h": 2
                            },
                            "rows": 1,
                            "cells": 1,
                            "virtualThumbWidth": 3,
                            "virtualThumbHeight": 2
                        },
                        {
                            "minWidth": 481,
                            "margin": {
                                "v": 2,
                                "h": 2
                            },
                            "rows": 1,
                            "cells": 3,
                            "virtualThumbWidth": 6,
                            "virtualThumbHeight": 5
                        }
                    ],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "top",
                    "visibility-constraints": {
                        "minWidth": 0,
                        "maxWidth": null
                    },
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:Source Sans Pro Bold;",
                        ".trc_rbox_header": "font-family:'Source Sans Pro', sans-serif;font-size:18.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:76px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#000000;font-family:Source Sans Pro Bold;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Source Sans Pro Bold;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Source Sans Pro Bold;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:76px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbnails-e-mobile": {
                    "header": "You May Like",
                    "attribution-position": "top",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "top",
                    "visibility-constraints": {
                        "minWidth": 1,
                        "maxWidth": 480
                    },
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#222;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:HelveticaNeue-Roman;",
                        ".trc_rbox_header": "font-family:HelveticaNeue-Roman;font-size:18.0px;font-weight:bold;text-decoration:none;color:#222;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:88px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#222;font-family:HelveticaNeue-Roman;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:HelveticaNeue-Roman;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:HelveticaNeue-Roman;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbnails-f": {
                    "header": "From The Web",
                    "detail-order": "category,title,external-data,branding",
                    "item-renderer": function(box, data) {
                        /***** Start - item-renderer-calling-TRC.addingLogo *****/
                        try {
                            if (!data['is-syndicated']) {
                                var b = box.querySelector('.thumbBlock');
                                var logo = document.createElement('div');
                                var imgLogo = document.createElement('img');
                                var url = TRCImpl['publisher-logo'][TRC.publisherId];
                                logo.className = 'logo-taboola';
                                imgLogo.className = 'image-logo-taboola';
                                imgLogo.src = url;
                                logo.appendChild(imgLogo);
                                b.appendChild(logo)
                            }
                        } catch (e) {
                            __trcError('Error in item-renderer calling-TRC.addingLogo ' + e.message);
                        }
                        /***** End - item-renderer-calling-TRC.addingLogo *****/
                    },
                    "attribution-position": "bottom",
                    "item-data-filter": function(data) {
                        /***** START - category hook *****/
                        try {
                            if (data['category']) {
                                var parser = new DOMParser;
                                var dom = parser.parseFromString('<!doctype html><body>' + data['category'], 'text/html');
                                data['category'] = dom.body.textContent.replace(/[']/g, '').split(',')[0];
                            }
                            return data;
                        } catch (e) {
                            __trcError('Error in item-data-filter category hook ' + e.message);
                        }
                        /***** END - category hook *****/
                    },
                    "responsive-rules": [{
                            "minWidth": 0,
                            "maxWidth": 480,
                            "margin": {
                                "v": 2,
                                "h": 2
                            },
                            "rows": 8,
                            "cells": 1,
                            "virtualThumbWidth": 16,
                            "virtualThumbHeight": 9
                        },
                        {
                            "minWidth": 481,
                            "margin": {
                                "v": 2,
                                "h": 2
                            },
                            "rows": 8,
                            "cells": 1,
                            "virtualThumbWidth": 16,
                            "virtualThumbHeight": 9
                        }
                    ],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "top",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18px;line-height:27.0px;font-weight:normal;max-height:135.0px;*height:135.0px;color:#111111;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'Source Sans Pro', sans-serif;",
                        ".trc_rbox_header": "font-family:'Source Sans Pro', sans-serif;font-size:28px;font-weight:bold;text-decoration:none;color:#A1A1A1;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:1.2em;display:block;margin:3px 3px 10px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 1px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                        ".video-label-box": "text-align:left;height:135px;margin:10px 0px 0px 0px;padding:;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 1px 0px;border-style:SOLID;margin:;",
                        ".syndicatedItem .video-title": "max-height:108.0px;*height:108.0px;color:#222222;font-family:'Source Sans Pro', sans-serif;font-size:18.0px;line-height:27.0px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#777777;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:'Source Sans Pro', sans-serif;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".videoCube.thumbnail_start .thumbBlock_holder": "width:27%;_width:27%;margin:;",
                        ".video-icon-img": "margin:0px;height:35.0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:'Source Sans Pro', sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:135px;margin:10px 0px 0px 0px;padding:;"
                    }
                },
                "thumbnails-f-old": {
                    "header": "From The Web",
                    "detail-order": "category,title,external-data,branding",
                    "item-renderer": function(box, data) {
                        /***** Start - item-renderer-calling-TRC.addingLogo *****/
                        try {
                            if (!data['is-syndicated']) {
                                var b = box.querySelector('.thumbBlock');
                                var logo = document.createElement('div');
                                var imgLogo = document.createElement('img');
                                var url = TRCImpl['publisher-logo'][TRC.publisherId];
                                logo.className = 'logo-taboola';
                                imgLogo.className = 'image-logo-taboola';
                                imgLogo.src = url;
                                logo.appendChild(imgLogo);
                                b.appendChild(logo)
                            }
                        } catch (e) {
                            __trcError('Error in item-renderer calling-TRC.addingLogo ' + e.message);
                        }
                        /***** End - item-renderer-calling-TRC.addingLogo *****/
                    },
                    "thumbnail-position": "start",
                    "attribution-position": "top",
                    "attribution-text": "",
                    "item-data-filter": function(data) {
                        /***** START - category hook *****/
                        try {
                            if (!data['is-syndicated']) {
                                if (data['category']) {
                                    var parser = new DOMParser;
                                    var dom = parser.parseFromString('<!doctype html><body>' + data['category'], 'text/html');
                                    data['category'] = dom.body.textContent.replace(/[']/g, '').split(',')[0];
                                }
                            }
                            return data;
                        } catch (e) {
                            __trcError('Error in item-data-filter category hook ' + e.message);
                        }
                        /***** END - category hook *****/
                    },
                    "widget-creator-layout": "autowidget-template-stream",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 6,
                        "cells": 1,
                        "virtualThumbWidth": 7,
                        "virtualThumbHeight": 7
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "top",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:96.0px;*height:96.0px;color:#111111;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'Source Sans Pro', sans-serif;",
                        ".trc_rbox_header": "font-family:'Source Sans Pro', sans-serif;font-size:28.0px;font-weight:bold;text-decoration:none;color:#A1A1A1;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#111111;font-family:'Source Sans Pro', sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:14.0px;font-weight:bold;text-decoration:none;font-family:'Source Sans Pro', sans-serif;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".videoCube.thumbnail_start .thumbBlock_holder": "width:27%;_width:27%;margin:;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:;",
                        ".branding": "color:#999999;font-size:14.0px;font-weight:bold;text-decoration:none;font-family:'Source Sans Pro', sans-serif;background-image:null;text-align:left;"
                    }
                },
                "thumbnails-f-test-2": {
                    "header": "From The Web",
                    "detail-order": "",
                    "thumbnail-position": "start",
                    "attribution-position": "top",
                    "detail-order-syndicated": "",
                    "widget-creator-layout": "autowidget-template-stream",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 6,
                        "cells": 1,
                        "virtualThumbWidth": 1,
                        "virtualThumbHeight": 1
                    }],
                    "before-detail-order": "title,branding",
                    "before-detail-order-syndicated": "title,branding",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#111111;text-decoration:none;",
                        ".trc_rbox_header": "font-family:'Source Sans Pro Bold';font-size:28.0px;font-weight:bold;text-decoration:none;color:#a1a1a1;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#111111;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;",
                        ".videoCube.thumbnail_start .thumbBlock_holder": "width:27%;_width:27%;margin:;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:;"
                    }
                },
                "thumbnails-g": {
                    "header": "You May Like",
                    "attribution-position": "top",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 3,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "top",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:88px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbnails-rr": {
                    "header": "FROM THE WEB",
                    "attribution-position": "top",
                    "widget-creator-revision": "16837386",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 1,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 8,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }, {
                        "minWidth": 2,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }],
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "disclosure-position": "top",
                    "read-more-mode-devices": "",
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#333333;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:Source Sans Pro Bold;",
                        ".trc_rbox_header": "font-family:Source Sans Pro Bold;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:6px 0px 6px 6px;line-height:19px;display:block;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 20px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                        ".video-label-box": "text-align:left;height:88px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#333333;font-family:Source Sans Pro Bold;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Source Sans Pro Bold;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbs-feed-01": {
                    "enable-read-more": true,
                    "__style__": {
                        ".video-title": "font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';",
                        ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:FoundersGrotesk, 'Source Sans Pro Bold';background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:FoundersGrotesk, 'Source Sans Pro Bold';background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbs-feed-01-a": {
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;",
                        ".trc_rbox_header": "font-family:Source Sans Pro Bold;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:72px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Source Sans Pro Bold;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Source Sans Pro Bold;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Source Sans Pro Bold;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:72px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbs-feed-01-a-bpcv": {
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "enable-read-more": true,
                    "read-more-box-selector": ".article-body",
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:72px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .video-label-box": "height:72px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbs-feed-01-b": {
                    "detail-order": "title,description",
                    "detail-order-syndicated": "title,description,branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 3,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:38.0px;*height:38.0px;color:#000000;text-decoration:none;",
                        ".video-label-box": "text-align:left;height:104.0px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:38.0px;*height:38.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .video-label-box": "height:82.0px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbs-feed-01-b-test": {
                    "detail-order": "title,branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 4,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "title-icon": "PUBLISHER_LOGO",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:44.0px;*height:44.0px;color:#000000;text-decoration:none;",
                        ".video-label-box": "text-align:left;height:66px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                        ".video-icon-img": "margin:0px 0px 200px 0px;height:45.0px;",
                        ".syndicatedItem .video-label-box": "height:66px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbs-feed-01-bpcv": {
                    "enable-read-more": true,
                    "read-more-box-selector": ".article-body",
                    "storyWidget-story-num-title-lines": 3,
                    "__style__": {
                        ".video-title": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';",
                        ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbs-feed-01-c": {
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 4,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:19.5px;line-height:26.0px;font-weight:normal;max-height:130.0px;*height:130.0px;color:#222222;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:;display:;margin:;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:;margin:;padding:;",
                        ".syndicatedItem .video-title": "max-height:104.0px;*height:104.0px;color:#222222;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:19.5px;line-height:26.0px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:FoundersGrotesk, 'Source Sans Pro Bold';background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:FoundersGrotesk, 'Source Sans Pro Bold';background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:;margin:;padding:;"
                    }
                },
                "thumbs-feed-01-e": {
                    "thumbnail-width": "357px",
                    "thumbnail-height": "217px",
                    "detail-order": "title, branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 3,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:normal;max-height:135.0px;*height:135.0px;color:#222222;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:FoundersGrotesk, Source Sans Pro Bold;",
                        ".trc_rbox_header": "font-family:FoundersGrotesk, Source Sans Pro Bold;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:;display:;margin:;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:;margin:;padding:;",
                        ".syndicatedItem .video-title": "max-height:108.0px;*height:108.0px;color:#222222;font-family:FoundersGrotesk, Source Sans Pro Bold;font-size:20.0px;line-height:27.0px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:FoundersGrotesk, Source Sans Pro Bold;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:FoundersGrotesk, Source Sans Pro Bold;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:;margin:;padding:;"
                    }
                },
                "thumbs-feed-01-f": {
                    "detail-order": "category,title,external-data,branding",
                    "item-renderer": function(box, data) {
                        /***** Start - item-renderer-calling-TRC.addingLogo *****/
                        try {
                            if (!data['is-syndicated']) {
                                var b = box.querySelector('.thumbBlock');
                                var logo = document.createElement('div');
                                var imgLogo = document.createElement('img');
                                var url = TRCImpl['publisher-logo'][TRC.publisherId];
                                logo.className = 'logo-taboola';
                                imgLogo.className = 'image-logo-taboola';
                                imgLogo.src = url;
                                logo.appendChild(imgLogo);
                                b.appendChild(logo)
                            }
                        } catch (e) {
                            __trcError('Error in item-renderer calling-TRC.addingLogo ' + e.message);
                        }
                        /***** End - item-renderer-calling-TRC.addingLogo *****/
                    },
                    "item-data-filter": function(data) {
                        /***** START - category hook *****/
                        try {
                            if (data['category']) {
                                var parser = new DOMParser;
                                var dom = parser.parseFromString('<!doctype html><body>' + data['category'], 'text/html');
                                data['category'] = dom.body.textContent.replace(/[']/g, '').split(',')[0];
                            }
                            return data;
                        } catch (e) {
                            __trcError('Error in item-data-filter category hook ' + e.message);
                        }
                        /***** END - category hook *****/
                    },
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 3,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:normal;max-height:135.0px;*height:135.0px;color:#222222;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:FoundersGrotesk, Source Sans Pro Bold;",
                        ".trc_rbox_header": "font-family:FoundersGrotesk, Source Sans Pro Bold;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:135px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:108.0px;*height:108.0px;color:#222222;font-family:FoundersGrotesk, Source Sans Pro Bold;font-size:20.0px;line-height:27.0px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:FoundersGrotesk, Source Sans Pro Bold;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".video-icon-img": "margin:0px;height:35.0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:FoundersGrotesk, Source Sans Pro Bold;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:135px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbs-feed-01-old": {
                    "enable-read-more": true,
                    "read-more-box-selector": ".article-body",
                    "__style__": {
                        ".video-title": "font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:FoundersGrotesk, 'Source Sans Pro Bold';",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:;display:;margin:;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:;margin:;padding:;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:'Sofia Pro Bold', Helvetica, Arial, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:FoundersGrotesk, 'Source Sans Pro Bold';font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:FoundersGrotesk, 'Source Sans Pro Bold';background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:FoundersGrotesk, 'Source Sans Pro Bold';background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:;margin:;padding:;"
                    }
                },
                "thumbs-feed-01-x": {
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
                        ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbs-feed-01-y": {
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "__style__": {
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:72px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".syndicatedItem .video-label-box": "height:72px;margin:5px 0px 0px 0px;padding:;",
                        ".video-label-box .branding": "font-size:;line-height:24.0px;display:;color:;font-weight:;font-family:;padding:;text-transform:;",
                        ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;font-family:;",
                        ".videoCube .video-label-box .video-title": "font-size:;-webkit-line-clamp:;text-decoration:none;font-family:;padding:;margin:;font-weight:;line-height:;letter-spacing:;max-height:;*height:;color:;",
                        ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;color:;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;color:;"
                    }
                },
                "thumbs-feed-01-z": {
                    "detail-order": "",
                    "thumbnail-position": "start",
                    "detail-order-syndicated": "",
                    "widget-creator-layout": "autowidget-template-stream",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 7,
                        "virtualThumbHeight": 5
                    }],
                    "before-detail-order": "title",
                    "before-detail-order-syndicated": "title,branding",
                    "__style__": {
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:;"
                    }
                },
                "thumbs-feed-02": {
                    "enable-read-more": true,
                    "read-more-box-selector": ".article-body",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:Source Sans Pro Bold;",
                        ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Source Sans Pro Bold;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Source Sans Pro Bold;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Source Sans Pro Bold;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;padding:;"
                    }
                },
                "thumbs-reminder-a": {
                    "detail-order": "title,description",
                    "thumbnail-position": "start",
                    "detail-order-syndicated": "title,description,branding",
                    "widget-creator-layout": "autowidget-template-stream",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 812,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 1,
                        "virtualThumbWidth": 110,
                        "virtualThumbHeight": 80
                    }, {
                        "minWidth": 813,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 1,
                        "virtualThumbWidth": 1,
                        "virtualThumbHeight": 1
                    }],
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:15.0px;line-height:19.0px;font-weight:bold;max-height:57.0px;*height:57.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:normal;max-height:19.0px;*height:19.0px;color:black;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".video-label-box": "text-align:left;height:auto;margin:11px 0px 0px 0px;padding:;",
                        ".syndicatedItem .video-description": "max-height:19.0px;*height:19.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:38.0px;*height:38.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:15.0px;line-height:19.0px;font-weight:bold;text-decoration:none;",
                        ".videoCube.thumbnail_start .thumbBlock_holder": "width:33%;_width:33%;margin:;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:;",
                        ".syndicatedItem .video-label-box": "height:auto;margin:11px 0px 0px 0px;padding:;"
                    }
                },
                "__common__": {
                    "syndicated-attribution-tooltip": "",
                    "image-url-prefix": null,
                    "read-more-cutoff-length-from-anchor-element": 30,
                    "syndicated-static-text": "",
                    "expand-animation-duration": 1000,
                    "required-attributes": "none",
                    "change-url": function(url) {
                        return url;
                    },
                    "loading-animation-url": "hide",
                    "pager-style-active-image": "",
                    "syndicated-static-text-position": "top-right",
                    "pager-button-location": "pager",
                    "player-detail-order": "title,description",
                    "mode-adc-config": null,
                    "slider-scroll-ref-element": function() {
                        return window;
                    },
                    "slider-close-btn-color": "#FFF",
                    "details-inline-with-title": "",
                    "thumbnail-height": "5",
                    "slider-slide-from": "bottom",
                    "shade-scroll": false,
                    "auto-size": false,
                    "pager-button-inactive-image": "",
                    "has-thumbs-image-lazy-load": false,
                    "visibility-constraints": {},
                    "disclosure-alignment": "left",
                    "adchoice-large": false,
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 2,
                        "virtualThumbHeight": 1
                    }],
                    "layout-template": "Horizontal 4",
                    "format-description": '%s',
                    "format-x-days-ago": false,
                    "storyWidget-story-interval": 7,
                    "ios-sc-link-target-mode": null,
                    "gam-allow-trc-ads": false,
                    "read-more-config": null,
                    "thumbs-image-lazy-load-margins": "600px 1500px",
                    "player-container-id": "trc_Embed_Container_Id",
                    "image-min-width": 100,
                    "organic-static-text-position": "bottom-left",
                    "before-detail-order": "",
                    "read-more-caption": "",
                    "template": "Default",
                    "slider-close-btn-font-size": "30px",
                    "read-more-box-selector": "",
                    "pager-position": "start",
                    "widget-creator-layout": "autowidget-template-static",
                    "format-uploader": 'User: %s',
                    "disclosure-position": "after_branding",
                    "image-size-factor": 1.2,
                    "format-external-data": '%s',
                    "title-icon": "NONE",
                    "lightbox-display-title": true,
                    "has-image-lazy-load": false,
                    "player-thumbnail-height": "200",
                    "emblem-position": "top-left",
                    "header-right": "No Header",
                    "gif-url-prefix": null,
                    "slider-close-btn-size": "24px",
                    "navigation-type": "none",
                    "ctaWidget": true,
                    "cyclical-paging": false,
                    "tokenize-strategy": "word",
                    "adchoice-target-url": "",
                    "disclosure-link-text-hybrid": "Promoted Links",
                    "storyWidget-storyWidget-story-num-title-lines": 3,
                    "branding-separator": "|",
                    "format-duration": '%s',
                    "pager-button-active-image": "",
                    "after-visible": function(data) {},
                    "player-thumbnail-width": "75",
                    "enable-category-card": false,
                    "color-scheme": "White",
                    "slider-z-index": 2500000,
                    "rtb-image-url-prefix": null,
                    "slider-transition-duration": 600,
                    "use-css-important": true,
                    "smart-ellipsis": false,
                    "header-icon": "NONE",
                    "image-dpr-factor": 2,
                    "storyWidget-storyWidget-story-interval": 7,
                    "item-renderer": function(box, data) {
                        if (typeof window.trc_itemRenderer == 'function') window.trc_itemRenderer(document.createElement('div'), data, false);
                    },
                    "read-more-minimized-size": 800,
                    "pager-button-hover-image": "",
                    "use-browser-line-clamp": true,
                    "slider": false,
                    "render-player-info": false,
                    "item-data-filter": function(data) {},
                    "mode-has-adchoice": true,
                    "player-embed-code": function() {
                        return '';
                    },
                    "image-allowed-ratio-diff": 0.029,
                    "auto-advance": "-1",
                    "image-min-dimension": 100,
                    "auto-scroll": "none",
                    "use-cdn-recommendations": false,
                    "format-category": '%s',
                    "list-size": 10,
                    "enable-read-more": false,
                    "auto-advance-animation": "down",
                    "format-syndicator": function(s) {
                        return s;
                    },
                    "auto-size-rules": [{
                        "minWc": 120,
                        "maxWc": 349,
                        "minWsRange": 8,
                        "maxWsRange": 8,
                        "n": 1
                    }, {
                        "minWc": 350,
                        "maxWc": 499,
                        "minWsRange": 8,
                        "maxWsRange": 9,
                        "n": 2
                    }, {
                        "minWc": 500,
                        "maxWc": 749,
                        "minWsRange": 8,
                        "maxWsRange": 10,
                        "n": 3
                    }, {
                        "minWc": 750,
                        "maxWc": 999,
                        "minWsRange": 8,
                        "maxWsRange": 11,
                        "n": 4
                    }, {
                        "minWc": 1000,
                        "maxWc": 1249,
                        "minWsRange": 7,
                        "maxWsRange": 11,
                        "n": 5
                    }, {
                        "minWc": 1250,
                        "maxWc": 1499,
                        "minWsRange": 6,
                        "maxWsRange": 11,
                        "n": 6
                    }, {
                        "minWc": 1500,
                        "maxWc": 1749,
                        "minWsRange": 6,
                        "maxWsRange": 12,
                        "n": 7
                    }, {
                        "minWc": 1750,
                        "maxWc": 1920,
                        "minWsRange": 6,
                        "maxWsRange": 13,
                        "n": 8
                    }],
                    "carousel-min-items": 1.33,
                    "p-video-overlay": false,
                    "attribution-text": "by Taboola",
                    "slider-transition-delay": 200,
                    "popup-custom-url": "",
                    "format": {
                        'views': 'Views: %s',
                        'uploader': 'By: %s',
                        'duration': 'Duration: %s',
                        'rating': 'Rating: %s'
                    },
                    "mode-start": function(data) {},
                    "auto-syndicated-attribution": true,
                    "storyWidget": false,
                    "pager-style-hover-image": "",
                    "adchoice-position": "none",
                    "syndicated-attribution-position": "bottom-right",
                    "disclosure-link-text-sponsored": "Sponsored",
                    "mode-has-userx": true,
                    "attribution-position": "none",
                    "slider-background-color": "#666",
                    "pager-style-inactive-image": "",
                    "image-size-round": 20,
                    "min-width-for-attribution": 325,
                    "detail-order-ad": "title",
                    "style-template": "Light",
                    "header": "No Header",
                    "read-more-cutoff-length-type": "BELOW",
                    "tabbed": false,
                    "read-more-threshold": 1100,
                    "thumbnail-width": "6",
                    "min-width-for-disclosure": 225,
                    "detail-order": "title",
                    "image-max-dimension": 1500,
                    "format-published-date": function(d) {
                        return this.dateFormatISO(d, false);
                    },
                    "format-number": function(num) {
                        var out = "",
                            m;
                        while (num.length > 3 && (m = num.match(/\d{3}\s*$/))) {
                            out = m.toString().replace(/\s+/, "") + "," + out;
                            num = num.replace(/\d{3}\s*$/, "", false);
                        }
                        out = num + "," + out;
                        return out.replace(/,$/, "");
                    },
                    "mode-is-responsive": true,
                    "images-radius": "0",
                    "expandable": false,
                    "organic-show-static-text": false,
                    "remove-url-playvideo-behavior": false,
                    "expand-animation-max-height": 1000,
                    "responsive-extra-columns": 1,
                    "title": "Related Videos",
                    "published-date-position": "standalone",
                    "header-icon-url": "",
                    "hide-disclosure-when-no-place": false,
                    "thumbnail-position-ad": "inherit",
                    "format-title": '%s',
                    "pager-button-style": "<span class=\"pager-cont\">&laquo;</span>|<span class=\"pager-cont\">&raquo;</span>",
                    "link-target": "normal",
                    "organic-tracking-params": null,
                    "widget-creator-revision": "-1",
                    "component-id": "rbox-blended",
                    "hide-attribution-when-no-place": false,
                    "pager-type-style": "numbers",
                    "list-suffix": function(internalc, myorigin) {},
                    "detail-order-syndicated": "title,branding",
                    "title-icon-url": "",
                    "read-more-cutoff-from-type": "ARTICLE",
                    "impl-class": "TRCRBox",
                    "has-expand-animation": false,
                    "disclosure-link-text-organic": "",
                    "orientation": "horizontal",
                    "quantcast-label": "",
                    "syndicated-attribution": "",
                    "image-lazy-load-space": 200,
                    "sponsored-location": "top",
                    "__keys__": ['component-id', 'tabbed', 'header', 'expandable', 'list-size', 'orientation', 'navigation-type', 'auto-scroll', 'loading-animation-url', 'thumbnail-width', 'thumbnail-height', 'format', 'detail-order', 'icons', 'format-number', 'change-url', 'list-suffix', 'item-renderer', 'title', 'format-title', 'format-duration', 'format-description', 'format-category', 'format-uploader', 'format-views', 'format-rating', 'format-published-date', 'sponsored-location', 'thumbnail-position', 'color-scheme', 'pager-button-style', 'pager-position', 'pager-type-style', 'template', 'pager-button-location', 'pager-button-active-image', 'pager-button-inactive-image', 'pager-button-hover-image', 'pager-style-active-image', 'pager-style-inactive-image', 'pager-style-hover-image', 'lightbox-display-title', 'detail-order-ad', 'layout-template', 'style-template', 'attribution-position', 'shade-scroll', 'attribution-text', 'required-attributes', 'auto-advance-animation', 'auto-advance', 'format-external-data', 'item-data-filter', 'gam-allow-trc-ads', 'thumbnail-position-ad', 'impl-class', 'player-embed-code', 'player-container-id', 'render-player-info', 'player-thumbnail-width', 'player-thumbnail-height', 'player-detail-order', 'use-cdn-recommendations', 'syndicated-attribution', 'syndicated-attribution-tooltip', 'syndicated-attribution-position', 'detail-order-syndicated', 'format-syndicator', 'syndicated-static-text', 'syndicated-static-text-position', 'quantcast-label', 'cyclical-paging', 'after-visible', 'link-target', 'auto-syndicated-attribution', 'remove-url-playvideo-behavior', 'auto-size', 'auto-size-rules', 'rows', 'widget-creator-layout', 'widget-creator-revision', 'details-inline-with-title', 'mode-is-responsive', 'responsive-extra-columns', 'responsive-rules', 'image-lazy-load-space', 'has-image-lazy-load', 'use-css-important', 'image-url-prefix', 'image-size-factor', 'image-min-width', 'image-size-round', 'image-max-dimension', 'image-min-dimension', 'mode-has-userx', 'min-width-for-disclosure', 'min-width-for-attribution', 'hide-disclosure-when-no-place', 'hide-attribution-when-no-place', 'disclosure-link-text-sponsored', 'disclosure-link-text-hybrid', 'disclosure-link-text-organic', 'disclosure-position', 'header-right', 'use-browser-line-clamp', 'use-dpr-images', 'slider', 'slider-slide-from', 'slider-min-effective-scroll-size', 'slider-transition-duration', 'slider-transition-delay', 'slider-background-color', 'slider-close-btn-font-size', 'slider-close-btn-size', 'slider-close-btn-color', 'slider-scroll-ref-element', 'slider-z-index', 'mode-adc-config', 'images-radius', 'visibility-constraints', 'ios-sc-link-target-mode', 'has-expand-animation', 'expand-animation-duration', 'expand-animation-max-height', 'read-more-config', 'enable-read-more', 'mode-has-adchoice', 'adchoice-large', 'adchoice-position', 'adchoice-target-url', 'read-more-box-selector', 'read-more-threshold', 'read-more-minimized-size', 'read-more-caption', 'mode-start', 'smart-ellipsis', 'tokenize-strategy', 'rtb-image-url-prefix', 'image-dpr-factor', 'image-allowed-ratio-diff', 'popup-custom-url', 'carousel-min-items', 'header-icon-url', 'before-detail-order', 'title-icon-url', 'before-detail-order-syndicated', 'header-icon', 'title-icon', 'has-thumbs-image-lazy-load', 'thumbs-image-lazy-load-margins', 'read-more-cutoff-from-type', 'read-more-anchor-selector', 'read-more-cutoff-length-type', 'read-more-cutoff-length-from-anchor-element', 'read-more-mode-devices', 'branding-separator', 'disclosure-alignment', 'p-video-overlay', 'gif-url-prefix', 'storyWidget', 'storyWidget-story-interval', 'organic-static-text-position', 'organic-show-static-text', 'organic-static-text', 'widget-theme-type', 'storyWidget-story-num-title-lines', 'format-x-days-ago', 'storyWidget-storyWidget-story-interval', 'storyWidget-storyWidget-story-num-title-lines', 'published-date-position', 'enable-category-card', 'emblem-position', 'organic-tracking-params', 'ctaWidget'],
                    "organic-static-text": "MOST POPULAR",
                    "rows": 2,
                    "icons": false,
                    "format-rating": 'Rating: %s',
                    "thumbnail-position": "top",
                    "format-views": function(n) {
                        return 'Views: ' + this.formatNumber(n, false);
                    },
                    "read-more-mode-devices": "smart_phone",
                    "read-more-anchor-selector": "",
                    "before-detail-order-syndicated": "",
                    "slider-min-effective-scroll-size": 20,
                    "storyWidget-story-num-title-lines": 0,
                    "use-dpr-images": true,
                    "widget-theme-type": "DEFAULT",
                    "__style__": {
                        "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".videoCube .video-label-box .video-description": "padding:;margin:;",
                        ".playerCube .video-external-data": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".videoCube.thumbnail_under .tbl-text-over": "background:;",
                        ".trc_lightbox_overlay": "background-color:#000000;opacity:0.70;filter:alpha(opacity=70);",
                        "div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover": "background-color:transparent;",
                        ".playerCube div.videoCube:hover, div.videoCube_hover": "background-color:transparent;",
                        ".trc_pager_prev:hover, .trc_pager_next:hover": "color:#6497ED;",
                        ".trc_rbox_border_elm": "border-color:darkgray;",
                        ".thumbBlock_holder": "width:;_width:;",
                        ".syndicatedItem .video-views": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .video-category": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                        ".videoCube .video-label-box": "margin-left:;margin-right:;",
                        ".syndicatedItem .sponsored": "color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;",
                        ".pager_disabled": "color:#7d898f;",
                        ".playerCube .video-category": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".syndicatedItem .video-uploader": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                        ".videoCube.thumbnail_start .thumbBlock_holder": "width:40%;_width:40%;margin:;",
                        ".playerCube .video-uploader": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".video-uploader": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".trc_sponsored_overlay": "background-color:black;",
                        ".syndicatedItem .video-external-data": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:;background-color:;box-sizing:;height:;width:;_width:;",
                        ".videoCube .video-label-box .video-title": "font-size:;-webkit-line-clamp:;text-decoration:;font-family:;padding:;margin:;font-weight:;line-height:;letter-spacing:;max-height:;*height:;color:;",
                        ".syndicatedItem .video-rating": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                        ".video-label-box .branding": "font-size:;line-height:;display:;color:;font-weight:;font-family:;padding:;text-transform:;",
                        ".videoCube.vertical": "border-style:solid none none none;",
                        ".trc_pager_unselected": "color:#7d898f;",
                        ".video-rating": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".video-published-date": "font-size:10px;font-weight:normal;text-decoration:none;color:black;display:inherit;",
                        ".syndicatedItem": "background-color:transparent;",
                        ".syndicatedItem .video-duration-detail": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                        ".playerCube .videoCube.horizontal": "border-style:none none none none;",
                        ".videoCube.syndicatedItem .thumbnail-overlay": "background-image:null;background-position:5% 5%;",
                        ".videoCube.syndicatedItem.vertical": "border-style:solid none none none;",
                        ".sponsored": "font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;",
                        ".trc_rbox_header .trc_header_ext": "position:;",
                        ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:;-moz-border-radius:;-webkit-border-radius:;",
                        ".videoCube.syndicatedItem .thumbBlock .static-text": "text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;",
                        ".videoCube.thumbnail_start.trc-split-label .trc-pre-label": "width:30%;_width:30%;",
                        ".video-category": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".thumbnail-emblem": "background-position:5% 5%;width:35;_width:35;height:35;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:;color:;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".tbl-cta-style .cta-button:hover": "color:inherit;border-color:#999990;",
                        ".playerCube .video-published-date": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay": "background-image:null;",
                        ".video-label-box.trc-pre-label": "height:0px;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:Arial, Helvetica, sans-serif;",
                        ".videoCube.thumbnail_start .trc-pre-label": "width:60%;_width:60%;",
                        ".videoCube a": "padding:;",
                        ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;",
                        ".playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay": "background-image:null;",
                        ".videoCube.thumbnail_start.trc-split-label .trc-main-label": "width:30%;_width:30%;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                        ".videoCube:hover .video-label-box .video-title": "text-decoration:;color:;",
                        ".sponsored-default .video-description": "max-height:2.2em;*height:2.2em;",
                        ".playerCube .video-description": "font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;",
                        ".trc_header_left_column": "width:;_width:;",
                        ".playerCube .videoCube .video-label-box": "margin-left:81px;margin-right:0px;",
                        ".videoCube.syndicatedItem .thumbBlock .branding": "text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;",
                        "div.videoCube:hover, div.videoCube_hover": "background-color:transparent;",
                        ".videoCube .sponsored": "margin-top:-7px;",
                        ".trc_pager_pages div": "font-size:12px;font-weight:normal;text-decoration:none;",
                        ".sponsored-url": "font-size:9px;font-weight:bold;text-decoration:underline;color:green;",
                        ".playerCube .video-title": "font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;",
                        ".logoDiv a": "font-size:;",
                        ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                        ".trc_rbox_header_icon_img": "margin:0px;height:18px;",
                        ".syndicatedItem .video-label-box": "height:auto;margin:0px 0px 0px 0px;padding:;",
                        ".videoCube.syndicatedItem.horizontal": "border-style:none;",
                        ".videoCube .thumbBlock .static-text": "font-weight:normal;font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:11px;background-color:#a30202;display:block;color:#ffffff;text-align:left;",
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                        ".playerCube .video-rating": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:;display:;white-space:;text-overflow:;overflow:;text-transform:;padding:;",
                        ".trc_pager_selected": "color:#0056b3;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 0px 0px;border-style:SOLID;margin:;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
                        ".branding div.logoDiv": "font-family:inherit;",
                        ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;",
                        ".playerCube .video-views": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".trc_pager div": "font-family:serif;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                        ".videoCube.horizontal": "border-style:none;",
                        "div.trc_pager_pages div:hover": "color:#6497ED;",
                        ".logoDiv a span": "font-size:;color:;display:;font-weight:;font-family:;",
                        ".pager_enabled": "color:#0056b3;",
                        ".playerCube .thumbnail-overlay": "background-image:null;background-position:5% 5%;",
                        ".videoCube .thumbnail-overlay": "background-image:null;background-position:5% 5%;",
                        ".playerCube .videoCube .video-duration": "display:block;left:36px;",
                        ".syndicatedItem .video-published-date": "color:black;font-size:10px;font-weight:normal;text-decoration:none;display:inherit;",
                        ".syndicatedItem .sponsored-url": "color:green;font-size:9px;font-weight:bold;text-decoration:underline;",
                        ".playerCube .videoCube .thumbBlock": "border-width:0px;border-color:darkgray;",
                        ".playerCube .video-label-box": "text-align:left;",
                        "div.sponsored-default:hover, div.sponsored-default.videoCube_hover": "background-color:inherit;",
                        ".video-external-data": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".trc_pager_prev,.trc_pager_next": "font-size:12px;font-weight:normal;text-decoration:none;",
                        ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:;-moz-border-radius:;-webkit-border-radius:;",
                        ".videoCube.syndicatedItem .video-duration": "display:none;left:36px;",
                        ".sponsored-default .video-title": "max-height:2.58em;*height:2.58em;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".sponsored-default": "background-color:#F7F6C6;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.videoCube.syndicatedItem .video-label-box', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.videoCube.thumbnail_under .tbl-text-over', '.syndicatedItem .video-label-box', '.video-label-box .branding', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.trc_header_left_column', '.trc_rbox_header .trc_header_ext', '.thumbBlock_holder', '.logoDiv a', '.videoCube .video-label-box .video-description', '.videoCube a'],
                        ".playerCube .videoCube": "background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;",
                        ".branding .logoDiv a span": "color:inherit;font-size:inherit;font-weight:;",
                        ".video-label-box": "text-align:left;height:auto;margin:0px 0px 0px 0px;padding:;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".videoCube .video-duration": "left:36px;display:none;",
                        "div.syndicatedItem:hover .thumbBlock": "border-color:inherit;",
                        ".trc_pager_counter": "color:#000000;",
                        ".whatsThisSyndicated": "font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;",
                        ".playerCube .video-duration-detail": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".video-duration-detail": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        "div.videoCube:hover .thumbBlock": "border-color:inherit;",
                        ".video-icon-img": "margin:0px;height:18px;",
                        ".video-views": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".tbl-cta-style .cta-button": "font-family:Helvetica, Arial, sans-serif;background-color:transparent;border-color:#999990;color:#333333;"
                    }
                }
            },
            "language": "en",
            "testmode": false,
            "direction": "ltr",
            "default-thumbnail": "http://cdn.taboola.com/libtrc/static/thumbnails/759bc49732394dde468c8d65a464e1a4.png",
            "domains": "",
            "sponsored-link-text": "Sponsored Link",
            "sponsored-video-text": "Sponsored Video",
            "branding-url": {},
            "configuration-version": "0",
            "external-credentials": "",
            "brightcove-list-id": "",
            "publisher-start": function() {},
            "get-user": function() {
                return null;
            },
            "get-creator": function() {
                var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);
                for (var i = 0; i < m.length; i++) {
                    if (m[i].name == 'uploader' || m[i].name == 'item-uploader') return m[i].content;
                }
            },
            "get-views": function() {
                var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);
                for (var i = 0; i < m.length; i++) {
                    if (m[i].name == 'views' || m[i].name == 'item-views') return m[i].content;
                }
            },
            "get-rating": function() {
                var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);
                for (var i = 0; i < m.length; i++) {
                    if (m[i].name == 'rating' || m[i].name == 'item-rating') {
                        if (!isNaN(parseFloat(m[i].content))) return m[i].content;
                    }
                }
            },
            "get-tags": function() {
                return [];
            },
            "logo-image": "http://cdn.taboolasyndication.com/taboola/powered-by.png",
            "has_valid_rss": false,
            "actionscript_version": "3",
            "brightcove-uses-reference": false,
            "publisher-end": function(id) {},
            "ie-logo-image": "http://cdn.taboolasyndication.com/taboola/powered-by-small.gif",
            "attribution": true,
            "notify-loaded": true,
            "metafields": "",
            "normalize-item-id": function(itemid, type, canon) {
                if (!canon && type == 'text' && typeof itemid == 'string' && itemid.search(new RegExp('^https?://')) == 0) itemid = itemid.replace(/\?.*/, '', false);
                return itemid.toLowerCase();
            },
            "normalize-item-url": function(itemurl, type, canon) {
                return itemurl;
            },
            "read-paused-bcplayer": false,
            "normalize-request-param": function(req, mode) {
                return req;
            },
            "normalize-log-param": function(name, value, mode) {
                return value;
            },
            "timeout": 8000,
            "prenormalize-item-id": {
                "host": true,
                "fragment": "^(/video/|!)",
                "query": ["p", "id"],
                "truncate-at": ["search.searchcompletion.com", "org.mozilla.javascript.undefined"],
                "trailing-dirsep": true
            },
            "prenormalize-item-url": false,
            "loader-impl": "",
            "trc-network-mapping": {
                "m.chron.com": "hearstlocalnews-chronmobile",
                "thetelegraph.com": "hearstlocalnews-thetelegraph",
                "lakecountystar.com": "hearstlocalnews-thelakecountystar",
                "https://www.newmilfordspectrum.com/": "hearstlocalnews-newmilfordspectrum",
                "qa1.theridgefieldpress.com": "hearstlocalnews-ridgefieldpress",
                "cmf.qa1.m.stamfordadvocate.com": "hearstlocalnews-stamfordadvocatemobile",
                "https://www.wiltonbulletin.com/": "hearstlocalnews-wiltonbulletin",
                "cmf.qa1.m.timesunion.com": "hearstlocalnews-timesunionmobile",
                "beaumontenterprise.com": "hearstlocalnews-beaumontenterprise",
                "www.darientimes.com": "hearstlocalnews-dariennews",
                "cmf.qa1.chron.com": "hearstlocalnews-chron",
                "m.beaumontenterprise.com": "hearstlocalnews-beaumontenterprisemobile",
                "thehour.com": "hearstlocalnews-thehour",
                "ncadvertiser.com": "hearstlocalnews-ncaadvertiser",
                "westhartfordnews.com": "hearstlocalnews-westhartfordnews",
                "theintelligencer.com": "hearstlocalnews-theintelligencer",
                "cmf.qa1.mysanantonio.com": "hearstlocalnews-mysanantonio",
                "theheraldreview.com": "hearstlocalnews-theheraldreview",
                "lmtonline.com": "hearstlocalnews-lmtonline",
                "ctnews.com": "hearstlocalnews-ctnews",
                "middletownpress.com": "hearstlocalnews-middletownpress",
                "gametimect.com": "hearstlocalnews-gametimect",
                "m.sfgate.com": "hearstlocalnews-sfgatemobile",
                "cmf.qa2.m.mysanantonio.com": "hearstlocalnews-mysanantoniomobile",
                "qa1.wiltonbulletin.com": "hearstlocalnews-wiltonbulletin",
                "cmf.qa1.newstimes.com": "hearstlocalnews-newstimes",
                "ctinsider.com": "hearstlocalnews-ctinsider",
                "timesunion.com": "hearstlocalnews-timesunion",
                "greenwichtime.com": "hearstlocalnews-greenwichtime",
                "www.sfgate.com/test-5-5-2017/article/test-article-do-not-use-12372271.php": "hearstlocalnews-sfgatecom",
                "m.ctnews.com": "hearstlocalnews-ctnewsmobile",
                "blog.ctnews.com": "hearstlocalnews-ctnews",
                "bigrapidsnews.com": "hearstlocalnews-bigrapidnews",
                "dolphin-news.com": "hearstlocalnews-dolphinnews",
                "m.timesunion.com": "hearstlocalnews-timesunionmobile",
                "m.mysanantonio.com": "hearstlocalnews-mysanantoniomobile",
                "cmf.qa1.m.newstimes.com": "hearstlocalnews-newstimesmobile",
                "connecticutmag.com": "hearstlocalnews-connecticutmag",
                "seattlepi.com": "hearstlocalnews-seattlepi",
                "cmf.qa1.seattlepi.com": "hearstlocalnews-seattlepi",
                "ctpostchronicle.com": "hearstlocalnews-ctpostchronicle",
                "https://www.westport-news.com/": "hearstlocalnews-westportnews",
                "cmf.darientimes.com": "hearstlocalnews-dariennews",
                "michigansthumb.com": "hearstlocalnews-michigansthumb",
                "https://www.milfordmirror.com/": "hearstlocalnews-milfordmirror",
                "cmf.qa1.greenwichtime.com": "hearstlocalnews-greenwichtime",
                "countytimes.com": "hearstlocalnews-countytimes",
                "yourconroenews.com": "hearstlocalnews-yourconroenews",
                "qa1.milfordmirror.com": "hearstlocalnews-milfordmirror",
                "cmf.ncadvertiser.com": "hearstlocalnews-ncaadvertiser",
                "cmf.milfordmirror.com": "hearstlocalnews-milfordmirror",
                "houstonchronicle.com": "hearstlocalnews-houstonchronicle",
                "qa1.sheltonherald.com": "hearstlocalnews-sheltonherald",
                "qa1.trumbulltimes.com": "hearstlocalnews-trumbulltimes",
                "mrt.com": "hearstlocalnews-mrt",
                "cmf.qa1.m.beaumontenterprise.com": "hearstlocalnews-beaumontenterprisemobile",
                "cmf.qa1.sfgate.com": "hearstlocalnews-sfgatecom",
                "https://www.trumbulltimes.com/": "hearstlocalnews-trumbulltimes",
                "ourmidland.com": "hearstlocalnews-ourmidland",
                "shorelinetimes.com": "hearstlocalnews-shorelinetimes",
                "cmf.qa1.timesunion.com": "hearstlocalnews-timesunion",
                "qa1.darientimes.com": "hearstlocalnews-dariennews",
                "sfgate.com": "hearstlocalnews-sfgatecom",
                "mysanantonio.com": "hearstlocalnews-mysanantonio",
                "cmf.qa1.m.greenwichtime.com": "hearstlocalnews-greenwichtimemobile",
                "ctbulletin.com": "hearstlocalnews-milford-orangebulletin",
                "manisteenews.com": "hearstlocalnews-manisteenewsadvocate",
                "m.newstimes.com": "hearstlocalnews-newstimesmobile",
                "cmf.qa1.m.mysanantonio.com": "hearstlocalnews-mysanantoniomobile",
                "newstimes.com": "hearstlocalnews-newstimes",
                "myplainview.com": "hearstlocalnews-myplainview",
                "cmf.qa1.m.seattlepi.com": "hearstlocalnews-seattlepimobile",
                "cmf.qa1.beaumontenterprise.com": "hearstlocalnews-beaumontenterprise",
                "cmf.qa1.m.sfgate.com": "hearstlocalnews-sfgatemobile",
                "m.greenwichtime.com": "hearstlocalnews-greenwichtimemobile",
                "stamfordadvocate.com": "hearstlocalnews-stamfordadvocate",
                "www.dariennewsonline.com": "hearstlocalnews-dariennews",
                "sfchronicle.com": "hearstlocalnews-sfchronicle",
                "recordpatriot.com": "hearstlocalnews-thebenziecountyrecordpatriot",
                "m.stamfordadvocate.com": "hearstlocalnews-stamfordadvocatemobile",
                "www.expressnews.com": "hearstlocalnews-expressnews",
                "ctpost.com": "hearstlocalnews-ctpost",
                "cmf.wiltonbulletin.com": "hearstlocalnews-wiltonbulletin",
                "https://www.theridgefieldpress.com/": "hearstlocalnews-ridgefieldpress",
                "cmf.trumbulltimes.com": "hearstlocalnews-trumbulltimes",
                "chron.com": "hearstlocalnews-chron",
                "nhregister.com": "hearstlocalnews-nhregister",
                "cmf.qa1.stamfordadvocate.com": "hearstlocalnews-stamfordadvocate",
                "cmf.sheltonherald.com": "hearstlocalnews-sheltonherald",
                "qa1.ncadvertiser.com": "hearstlocalnews-ncaadvertiser",
                "registercitizen.com": "hearstlocalnews-registercitizen",
                "cmf.qa1.ctpost.com": "hearstlocalnews-ctpost",
                "m.seattlepi.com": "hearstlocalnews-seattlepimobile",
                "myjournalcourier.com": "hearstlocalnews-myjournalcourier",
                "m.sfgate.com/test-5-5-2017/article/test-article-do-not-use-12372271.php": "hearstlocalnews-sfgatemobile",
                "cmf.theridgefieldpress.com": "hearstlocalnews-ridgefieldpress",
                "m.ctpost.com": "hearstlocalnews-ctpostmobile",
                "https://www.sheltonherald.com/": "hearstlocalnews-sheltonherald",
                "cmf.qa1.m.chron.com": "hearstlocalnews-chronmobile"
            },
            "trc-skip-failover": false,
            "backstage-domain-url": "",
            "adc-config": null,
            "link-target-conf": null,
            "ios-sc-link-target": {
                'NAV': '_self',
                'NT': '_self',
                'SP': '_self'
            },
            "small-ios-device": "iPhone|iPod",
            "read-more-debug": false,
            "read-more-devices": "smart_phone",
            "attribution-disclosure-direction": "ltr",
            "mode-pub-start": function() {},
            "before-video-load": function() {
                return true;
            },
            "publisher-logo": {
                "hearstlocalnews-newstimes": "https://cdn.taboola.com/libtrc/static/thumbnails/ba31bce7d358b0db9d2fa05739711e6f.png",
                "hearstlocalnews-ctpostmobile": "https://cdn.taboola.com/libtrc/static/thumbnails/a9613903898bda591bddd2d8534f3c27.png",
                "hearstlocalnews-myjournalcourier": "https://cdn.taboola.com/libtrc/static/thumbnails/556458cd57a8de0274e264c922f5829b.png",
                "hearstlocalnews-greenwichtime": "https://cdn.taboola.com/libtrc/static/thumbnails/1f556e28389b98bf534e4aa834e9ad54.png",
                "hearstlocalnews-timesunion": "https://cdn.taboola.com/libtrc/static/thumbnails/b20c6eb319e797118a3ceac4a38e8550.jpg",
                "hearstlocalnews-mysanantonio": "http://cdn.taboola.com/libtrc/static/thumbnails/81ece2509394899a1a9ffc855d2c33ac.jpg",
                "hearstlocalnews-sheltonherald": "https://cdn.taboola.com/libtrc/static/thumbnails/f47f9ad6e2e571e5920c50023b61911b.png",
                "hearstlocalnews-mysanantoniomobile": "https://cdn.taboola.com/libtrc/static/thumbnails/503a03fd4e4907caf413100af6c674d4.jpg",
                "hearstlocalnews-stamfordadvocate": "https://cdn.taboola.com/libtrc/static/thumbnails/58970dd840380fb4bc13a9a0e545fdd1.png",
                "hearstlocalnews-dariennews": "https://cdn.taboola.com/libtrc/static/thumbnails/669c808994096c9fc5878beabf4fee92.png",
                "hearstlocalnews-ctpost": "https://cdn.taboola.com/libtrc/static/thumbnails/8c6acaf7b320fc70c1b4ef3faea29ba0.png",
                "hearstlocalnews-nhregister": "https://cdn.taboola.com/libtrc/static/thumbnails/9cafaf256cf453bd0913a4d0b435a817.png",
                "hearstlocalnews-westportnews": "https://cdn.taboola.com/libtrc/static/thumbnails/a3dfc1826f648e04833be8f1fe3a56ea.png",
                "hearstlocalnews-yourconroenews": "https://cdn.taboola.com/libtrc/static/thumbnails/318e9ac6f09e7337fce333982a3848b0.png",
                "hearstlocalnews-sfgatecom": "https://cdn.taboola.com/static/1a/1a1664ff-5423-488d-a4d5-e2dc8784662b.png",
                "hearstlocalnews-lmtonline": "https://cdn.taboola.com/libtrc/static/thumbnails/9199d047bbe8783adce781324dd0e2a5.png",
                "hearstlocalnews-seattlepimobile": "https://cdn.taboola.com/libtrc/static/thumbnails/6b47ec6182f95f6c145debb192f88082.png",
                "hearstlocalnews-beaumontenterprise": "https://cdn.taboola.com/libtrc/static/thumbnails/31bd6e3be34d95faafacfd10a3446b04.png",
                "hearstlocalnews-mrt": "https://cdn.taboola.com/libtrc/static/thumbnails/77bd71c1af6519da29dbd6df7a75da41.png",
                "hearstlocalnews-seattlepi": "https://cdn.taboola.com/libtrc/static/thumbnails/d426d05e9fe7ef55e9761d5433ddc6d9.png",
                "hearstlocalnews-timesunionmobile": "https://cdn.taboola.com/libtrc/static/thumbnails/cbb4b335c97a6b0fcf0e6bf8e3952aec.jpg",
                "hearstlocalnews-ctnews": "https://cdn.taboola.com/libtrc/static/thumbnails/7b034e8cd74b7b91f5614363c4eea199.png",
                "hearstlocalnews-thehour": "https://cdn.taboola.com/libtrc/static/thumbnails/2a2dc68ad8240c719fadc7d007c782c9.png",
                "hearstlocalnews-sfgatemobile": "https://cdn.taboola.com/libtrc/static/thumbnails/529a8c294028b37af1af4673ae9eaf26.png",
                "hearstlocalnews-newstimesmobile": "https://cdn.taboola.com/libtrc/static/thumbnails/ba31bce7d358b0db9d2fa05739711e6f.png",
                "hearstlocalnews-milfordmirror": "https://cdn.taboola.com/libtrc/static/thumbnails/2632d1bc35fb9cb84d78b8fd81501faf.png",
                "hearstlocalnews-registercitizen": "https://cdn.taboola.com/libtrc/static/thumbnails/887684fe8491654d44794f99d0710447.png",
                "hearstlocalnews-michigansthumb": "https://cdn.taboola.com/libtrc/static/thumbnails/99e101b5304ecc139b79e5112a101996.png",
                "hearstlocalnews-theintelligencer": "https://cdn.taboola.com/libtrc/static/thumbnails/77f3c6c5a81d944d74b2328ba55219e5.png",
                "hearstlocalnews-chronmobile": "https://cdn.taboola.com/libtrc/static/thumbnails/533e92b10aee8e6b1e122109072361af.jpg",
                "hearstlocalnews-greenwichtimemobile": "https://cdn.taboola.com/libtrc/static/thumbnails/d2c8a19c7b5e9ff408dbd2ce29a9e4e5.png",
                "hearstlocalnews-ncaadvertiser": "https://cdn.taboola.com/libtrc/static/thumbnails/0e0536e22862dbcfd367bf8cba53279d.png",
                "hearstlocalnews-newmilfordspectrum": "https://cdn.taboola.com/libtrc/static/thumbnails/beae71bb6a4b8ca047db3bfa47e2859c.png",
                "hearstlocalnews-myplainview": "https://cdn.taboola.com/libtrc/static/thumbnails/671dc36e3d9df38a540d9955aad9b41b.png",
                "hearstlocalnews-middletownpress": "https://cdn.taboola.com/libtrc/static/thumbnails/7555e53a71126008b1a63a4ea5eb21ef.png",
                "hearstlocalnews-ridgefieldpress": "https://cdn.taboola.com/libtrc/static/thumbnails/fbaae8abf287fef314b6b5162b149de8.png",
                "hearstlocalnews-wiltonbulletin": "https://cdn.taboola.com/libtrc/static/thumbnails/2c5f6c6c0b52430ab023af5db9385df2.png",
                "hearstlocalnews-thetelegraph": "https://cdn.taboola.com/libtrc/static/thumbnails/06438a33e0bb1710901585466c74966f.png",
                "hearstlocalnews-ctnewsmobile": "https://cdn.taboola.com/libtrc/static/thumbnails/7b034e8cd74b7b91f5614363c4eea199.png",
                "hearstlocalnews-ourmidland": "https://cdn.taboola.com/libtrc/static/thumbnails/efce1107ac99ab429d7bd8632992870f.png",
                "hearstlocalnews-trumbulltimes": "https://cdn.taboola.com/libtrc/static/thumbnails/ded44ea21b636ed1667907585bf17f54.png",
                "hearstlocalnews-beaumontenterprisemobile": "https://cdn.taboola.com/libtrc/static/thumbnails/31bd6e3be34d95faafacfd10a3446b04.png",
                "hearstlocalnews-stamfordadvocatemobile": "https://cdn.taboola.com/libtrc/static/thumbnails/5c74ccaac064650a7cf6bb3b1c1d9a67.png",
                "hearstlocalnews-chron": "http://cdn.taboola.com/libtrc/static/thumbnails/430889503abf8ed70194d03b5fb13958.png"
            },
            "detect-item-from-same-host": function(host, itemHost) {},
            "mode-before-video-load": function(rbox) {
                return true;
            },
            "after-card-created": function(placementData, publisherCardNum, feed) {},
            "publisher-branding": {
                "hearstlocalnews-gametimect": "GameTimeCT",
                "hearstlocalnews-thebenziecountyrecordpatriot": "Record Patriot",
                "hearstlocalnews-greenwichtime": "Greenwichtime",
                "hearstlocalnews-timesunion": "Times Union",
                "hearstlocalnews-sheltonherald": "Shelton Herald",
                "hearstlocalnews-stamfordadvocate": "Stamford Advocate",
                "hearstlocalnews-westportnews": "Westport News",
                "hearstlocalnews-yourconroenews": "YourConroeNews",
                "hearstlocalnews-sfgatecom": "SFGate",
                "hearstlocalnews-lmtonline": "LMTOnline",
                "hearstlocalnews-seattlepi": "Seattlepi",
                "hearstlocalnews-ctnews": "Ctnews",
                "hearstlocalnews-registercitizen": "RegisterCitizen",
                "hearstlocalnews-michigansthumb": "MichigansThumb",
                "hearstlocalnews-houstonchronicle": "HoustonChronicle",
                "hearstlocalnews-greenwichtimemobile": "Greenwichtime",
                "hearstlocalnews-newmilfordspectrum": "New Milford Spectrum",
                "hearstlocalnews-ridgefieldpress": "Ridgefield Press",
                "hearstlocalnews-trumbulltimes": "Trumbull Times",
                "hearstlocalnews-stamfordadvocatemobile": "Stamford Advocate",
                "hearstlocalnews-newstimes": "Newstimes",
                "hearstlocalnews-ctpostmobile": "Ctpost",
                "hearstlocalnews-myjournalcourier": "My Journal Courier",
                "hearstlocalnews-bigrapidnews": "Big Rapid News",
                "hearstlocalnews-mysanantonio": "Mysanantonio",
                "hearstlocalnews-mysanantoniomobile": "My San Antonio",
                "hearstlocalnews-theheraldreview": "The Herald Review",
                "hearstlocalnews-ctinsider": "ct insider",
                "hearstlocalnews-dariennews": "Darien News",
                "hearstlocalnews-ctpost": "Ctpost",
                "hearstlocalnews-nhregister": "NHRegister",
                "hearstlocalnews-seattlepimobile": "Seattlepi",
                "hearstlocalnews-beaumontenterprise": "Beaumont Enterprise",
                "hearstlocalnews-mrt": "MRT",
                "hearstlocalnews-timesunionmobile": "Times Union",
                "hearstlocalnews-thehour": "TheHour",
                "hearstlocalnews-sfgatemobile": "SFGate",
                "hearstlocalnews-milfordmirror": "Milford Mirror",
                "hearstlocalnews-newstimesmobile": "Newstimes",
                "hearstlocalnews-theintelligencer": "TheIntelligencer",
                "hearstlocalnews-chronmobile": "Chron",
                "hearstlocalnews-manisteenewsadvocate": "Manistee News Advocate",
                "hearstlocalnews-ncaadvertiser": "NCA Advertiser",
                "hearstlocalnews-thelakecountystar": "The Lake County Star",
                "hearstlocalnews-myplainview": "MyPlainView",
                "hearstlocalnews-middletownpress": "MiddletownPress",
                "hearstlocalnews-wiltonbulletin": "Wilton Bulletin",
                "hearstlocalnews-thetelegraph": "The Telegraph",
                "hearstlocalnews-ourmidland": "OurMidland",
                "hearstlocalnews-beaumontenterprisemobile": "Beaumont Enterprise",
                "hearstlocalnews-chron": "Chron"
            },
            "network-pubs-global": {
                "hearstlocalnews-newstimes": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-bigrapidnews": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-ctpostmobile": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-thebenziecountyrecordpatriot": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-timesunion": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-mysanantonio": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-sheltonherald": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-mysanantoniomobile": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-stamfordadvocate": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-dariennews": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-westportnews": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-yourconroenews": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-lmtonline": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-sfgatecom": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-seattlepimobile": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-beaumontenterprise": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-timesunionmobile": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-ctnews": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-thehour": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-milfordmirror": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-newstimesmobile": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-michigansthumb": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-chronmobile": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-thelakecountystar": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-ncaadvertiser": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-myplainview": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-middletownpress": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-wiltonbulletin": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-ridgefieldpress": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-ourmidland": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-beaumontenterprisemobile": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-stamfordadvocatemobile": {
                    "test_for_fraud": false
                },
                "hearstlocalnews-chron": {
                    "test_for_fraud": false
                }
            },
            "global": {
                "GPT-refresh-control": true,
                "abp-detection-enabled": true,
                "allow-nofollow-for-exchange": true,
                "amp-support-consent-string": "true",
                "amp_target": "_top",
                "block-video-prob": 1,
                "bulk-available-events-delay": 1000,
                "bulk-available-events-strategy": "delay",
                "cdn-taboola-path": "cdn.taboola.com",
                "cloudinary-aspect-ratios-list": false,
                "cloudinary-encode": true,
                "cloudinary-encoding-and-100-round-factor": {},
                "config-analytics": {
                    logTimer: 50000,
                    logLength: 5,
                    traffic: 1,
                    measureEnable: true,
                    measureTimeToSend: 10000,
                    disableRawDataSend: true
                },
                "consent-presets": {
                    taboola_default: null
                },
                "css-isolation": false,
                "default-event-route": "trc-events.taboola.com",
                "disable-explore-more-video-reset": true,
                "disable-iframe-for-tracking-pixel": true,
                "disable-rbox-usage-logging": false,
                "disable-scope-feed-css": false,
                "disable-sponsored-for-links": true,
                "disable-unified-iframe-pixel-reporter": true,
                "disable-yield": true,
                "disclosure-enabled": true,
                "enable-analytics": "true",
                "enable-bulk-events": "true",
                "enable-comscore-brazil-distributed-content": true,
                "enable-consent": true,
                "enable-deferred-available": true,
                "enable-deferred-visible": true,
                "enable-detect-bots": true,
                "enable-events-api": true,
                "enable-exm-inside-iframe": false,
                "enable-experiments-variant-id-event": true,
                "enable-explore-more": true,
                "enable-explore-more-state-check": true,
                "enable-explore-more-video": true,
                "enable-ie-split-click-event": true,
                "enable-item-override": true,
                "enable-loader-type-event": true,
                "enable-manual-visible": true,
                "enable-mode-injection": false,
                "enable-multi-pv3": true,
                "enable-organic-redirect": true,
                "enable-organic-redirect-on-amp": true,
                "enable-rbox-map": false,
                "enable-read-more": true,
                "enable-real-time-user-sync": true,
                "enable-social-events": true,
                "enable-spatial-data-per-page": 1,
                "enable-text-over": "true",
                "enable-trc-ajax": true,
                "enable-trc-cache": true,
                "enable-trc-route": true,
                "enable-visibility-intersection-api": true,
                "event-logger:publisher-enable-spatial-events": true,
                "events-api-click-enabled": true,
                "exclude-subd-shift": ["15.taboola.com", "trc.taboola.com", "authentication.taboola.com"],
                "explore-delay": 500,
                "feed-max-num-of-consecutive-failed-requests": "5",
                "feed-observer-load-next-batch": true,
                "force-reset-on-ready": true,
                "has-adchoice": true,
                "has-mode-geometry": true,
                "has-page-geometry": true,
                "has-page-geometry-extended": true,
                "has-slots-geometry": true,
                "has-slots-saliency": true,
                "has-userx": true,
                "image-optimization-url-per-item-is-enabled": "1",
                "image-url-prefix": "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/",
                "inject-comscore": true,
                "inject-mdotlabs": false,
                "inject-taboolax": true,
                "ios-sc-link-target": {
                    "NAV": "_top",
                    "NT": "_top",
                    "SP": "_top"
                },
                "keep-referrer-in-session": true,
                "max-wait-for-cmp": 5000,
                "monitor-dup-items-traffic-pct": 5,
                "mw-display-none-on-no-items-to-render": true,
                "p-video-overlay-send-events": true,
                "prefer-response-session-data": true,
                "publisher-onclick-nt-enabled": false,
                "rbox-ajax-post-events-full-rollout": true,
                "rbox-enable-fix-user-id-event": "true",
                "rbox-error-stack-reporting-pct": 0.01,
                "rbox-old-chrome-es6-fix": (function() {
                    var mtch = /Chrome\/([0-9]{2})/.exec(window.navigator.userAgent);
                    if (mtch && mtch.length && mtch.length == 2) {
                        var ver = parseInt(mtch[1]);
                        if (ver < 49) {
                            eS6SupportCheckResult = false;
                        }
                    }
                })(),
                "rbox-post-events-as-ajax": true,
                "rbox-trc-protocol": "https:",
                "read-more-events-enabled": "0.1",
                "requests-domain": "trc.taboola.com",
                "rtb-image-url-prefix": "https://images.taboola.com/taboola/image/fetch/$pw_{w}%2C$ph_{h}/t_tbl-cnd/",
                "send-avail-as-get": false,
                "send-avail-as-post": true,
                "send-event-as-post": true,
                "send-full-list": true,
                "send-item-query-string-in-req": true,
                "send-next-up-click-abtest-event": false,
                "send-pb-in-click": true,
                "send-user-id-tag": true,
                "send-variant-warning": true,
                "send-visible-as-get": false,
                "show-rtb-ad-choices-icon": true,
                "smart-ellipsis": true,
                "spatial-slots-throttle-th": 1000,
                "stop-channels-threshold": "0.8",
                "store-userid-first-party-cookie": true,
                "switch-abp-class": false,
                "syndication-embed-code": function(box, recommendation, affiliate) {},
                "syndicator-affiliate-id": "",
                "thumb-lazy-load-method": "PAGE_LOAD,PAGE_INTERACTIVE,RBOX_VISIBLE",
                "thumb-lazy-load-switch": false,
                "thumbnail-transformation-per-item-is-enabled": "1",
                "tmp-use-pb-params": true,
                "touchstart-enabled": true,
                "trc-cache-it": {
                    "text": "c",
                    "home": "d",
                    "video": "d",
                    "search": "d",
                    "category": "d",
                    "photo": "d",
                    "other": "d"
                },
                "trc-event-route-template": "trc-events.taboola.com",
                "trc-request-delay": 500,
                "ui-innovation-modules-path": "ui-ab-tests",
                "use-abp-uim": true,
                "use-calibration-uim": false,
                "use-delay-image-load": true,
                "use-dpr-images": true,
                "use-native-json-stringify": true,
                "use-storage-detection": true,
                "user-id-tag-macros": ["tags.bluekai.com/site/35702?id={taboolaID}"],
                "user-stop-retarget-campaign-after-click": "false",
                "video-gdpr-applies-use-requires-consent": "true",
                "visibility-intersection-api-delay": 1000,
                "visibility-intersection-api-full-rollout": true,
                "visible-delay": 500,
                "bakeTime": 1605217668040,
                "maxRevision": 67971968,
                "style": {
                    "rtl": "",
                    "custom": "",
                    "mode_custom": "/* s-split-alternating-thumbs-feed-01-y */.alternating-thumbs-feed-01-y img {\n    max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbs-feed-01-y [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbs-feed-01-y .trc_rbox_div {\n    margin-bottom: 0;\n}\n.alternating-thumbs-feed-01-y .trc_rbox_header {\n}\n.alternating-thumbs-feed-01-y .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbs-feed-01-y .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.alternating-thumbs-feed-01-y .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbs-feed-01-y .videoCube a {\n    padding: 0;\n}\n.alternating-thumbs-feed-01-y .trc_rbox_outer .videoCube {\n    margin-bottom: 10px;\n}\n.alternating-thumbs-feed-01-y .thumbBlock {\n    margin: 0;\n}\n.alternating-thumbs-feed-01-y .videoCube .video-label-box .video-title {\n    margin-bottom: 0;\n}\n.alternating-thumbs-feed-01-y .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbs-feed-01-y .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n\n.alternating-thumbs-feed-01-y .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.alternating-thumbs-feed-01-y .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.alternating-thumbs-feed-01-y .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-alternating-thumbs-feed-01-y *//* s-split-blend-thumbs-feed-01-b */.blend-thumbs-feed-01-b img {\n    max-width: none;\n}\n/* override bootstrap default span definitions */\n.blend-thumbs-feed-01-b [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.blend-thumbs-feed-01-b .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.blend-thumbs-feed-01-b .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.blend-thumbs-feed-01-b .logoDiv a {\n    font-size: 100%;\n}\n.blend-thumbs-feed-01-b .videoCube a {\n    padding: 0;\n}\n.blend-thumbs-feed-01-b .thumbBlock {\n    margin: 0;\n}\n.blend-thumbs-feed-01-b .videoCube .video-label-box .video-title {\n    margin: 0;\n}\n.blend-thumbs-feed-01-b .video-label-box .branding {\n    display: block;\n}\n.blend-thumbs-feed-01-b .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n\n.blend-thumbs-feed-01-b .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.blend-thumbs-feed-01-b .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.blend-thumbs-feed-01-b .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-blend-thumbs-feed-01-b *//* s-split-blend-thumbs-feed-01-y */.blend-thumbs-feed-01-y img {\n    max-width: none;\n}\n/* override bootstrap default span definitions */\n.blend-thumbs-feed-01-y [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.blend-thumbs-feed-01-y .trc_rbox_div {\n    margin-bottom: 0;\n}\n.blend-thumbs-feed-01-y .trc_rbox_header {\n}\n.blend-thumbs-feed-01-y .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.blend-thumbs-feed-01-y .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.blend-thumbs-feed-01-y .logoDiv a {\n    font-size: 100%;\n}\n.blend-thumbs-feed-01-y .videoCube a {\n    padding: 0;\n}\n.blend-thumbs-feed-01-y .trc_rbox_outer .videoCube {\n    margin-bottom: 10px;\n}\n.blend-thumbs-feed-01-y .thumbBlock {\n    margin: 0;\n}\n.blend-thumbs-feed-01-y .videoCube .video-label-box .video-title {\n    margin-bottom: 0;\n}\n.blend-thumbs-feed-01-y .video-label-box .branding {\n    display: block;\n}\n.blend-thumbs-feed-01-y .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n\n.blend-thumbs-feed-01-y .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.blend-thumbs-feed-01-y .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.blend-thumbs-feed-01-y .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-blend-thumbs-feed-01-y *//* s-split-organic-rec-reel-01-x */.organic-rec-reel-01-x img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-rec-reel-01-x [class*=span] {\n        float:none;\n        margin-left:0;\n}\n.organic-rec-reel-01-x .trc_rbox_header {\n}\n.organic-rec-reel-01-x .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-rec-reel-01-x .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.organic-rec-reel-01-x .logoDiv a {\n        font-size: 100%;\n}\n.organic-rec-reel-01-x .videoCube a {\n    padding: 0;\n}\n.organic-rec-reel-01-x .video-label-box {\n        min-height: 54.0px;\n}\n.organic-rec-reel-01-x .video-label-box .branding {\n        display: block;\n}\n.organic-rec-reel-01-x .videoCube.thumbnail_under .tbl-text-over {\n\topacity: 0.8;\n}\n.organic-rec-reel-01-x .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n\n.organic-rec-reel-01-x .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.organic-rec-reel-01-x .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.organic-rec-reel-01-x .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-organic-rec-reel-01-x *//* s-split-organic-thumbs-feed-01 */.organic-thumbs-feed-01 img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01 .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.organic-thumbs-feed-01 .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.organic-thumbs-feed-01 .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01 .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n.organic-thumbs-feed-01 .videoCube a {\n    padding: 0;\n}\n.organic-thumbs-feed-01 .thumbBlock {\n    margin: 0;\n}\n.organic-thumbs-feed-01 .video-label-box {\n}\n.organic-thumbs-feed-01 .syndicatedItem .video-label-box {\n}\n.organic-thumbs-feed-01 .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbs-feed-01 .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01 .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.organic-thumbs-feed-01 .video-label-box .branding {\n    display: block;\n\tline-height: 27.0px;\n}\n.organic-thumbs-feed-01 .syndicatedItem .branding {\n    line-height: 27.0px;\n}\n.organic-thumbs-feed-01 .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01 .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.organic-thumbs-feed-01 .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.organic-thumbs-feed-01 .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-organic-thumbs-feed-01 *//* s-split-organic-thumbs-feed-01-a-bpcv */.organic-thumbs-feed-01-a-bpcv img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01-a-bpcv [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01-a-bpcv .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.organic-thumbs-feed-01-a-bpcv .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-a-bpcv .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.organic-thumbs-feed-01-a-bpcv .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-a-bpcv .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n.organic-thumbs-feed-01-a-bpcv .videoCube a {\n    padding: 0;\n}\n.organic-thumbs-feed-01-a-bpcv .thumbBlock {\n    margin: 0;\n}\n.organic-thumbs-feed-01-a-bpcv .video-label-box {\n}\n.organic-thumbs-feed-01-a-bpcv .syndicatedItem .video-label-box {\n}\n.organic-thumbs-feed-01-a-bpcv .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbs-feed-01-a-bpcv .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01-a-bpcv .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.organic-thumbs-feed-01-a-bpcv .video-label-box .branding {\n    display: block;\n\tline-height: 24.0px;\n}\n.organic-thumbs-feed-01-a-bpcv .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.organic-thumbs-feed-01-a-bpcv .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-a-bpcv .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.organic-thumbs-feed-01-a-bpcv .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.organic-thumbs-feed-01-a-bpcv .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-organic-thumbs-feed-01-a-bpcv *//* s-split-organic-thumbs-feed-01-bpcv */.organic-thumbs-feed-01-bpcv img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01-bpcv [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01-bpcv .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.organic-thumbs-feed-01-bpcv .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-bpcv .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.organic-thumbs-feed-01-bpcv .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-bpcv .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n.organic-thumbs-feed-01-bpcv .videoCube a {\n    padding: 0;\n}\n.organic-thumbs-feed-01-bpcv .thumbBlock {\n    margin: 0;\n}\n.organic-thumbs-feed-01-bpcv .video-label-box {\n}\n.organic-thumbs-feed-01-bpcv .syndicatedItem .video-label-box {\n}\n.organic-thumbs-feed-01-bpcv .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbs-feed-01-bpcv .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01-bpcv .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.organic-thumbs-feed-01-bpcv .video-label-box .branding {\n    display: block;\n\tline-height: 27.0px;\n}\n.organic-thumbs-feed-01-bpcv .syndicatedItem .branding {\n    line-height: 27.0px;\n}\n.organic-thumbs-feed-01-bpcv .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-bpcv .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.organic-thumbs-feed-01-bpcv .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.organic-thumbs-feed-01-bpcv .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-organic-thumbs-feed-01-bpcv *//* s-split-organic-thumbs-feed-01-c */.organic-thumbs-feed-01-c img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01-c [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01-c .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.organic-thumbs-feed-01-c .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-c .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.organic-thumbs-feed-01-c .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-c .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n.organic-thumbs-feed-01-c .videoCube a {\n    padding: 0;\n}\n.organic-thumbs-feed-01-c .thumbBlock {\n    margin: 0;\n}\n.organic-thumbs-feed-01-c .video-label-box {\n}\n.organic-thumbs-feed-01-c .syndicatedItem .video-label-box {\n}\n.organic-thumbs-feed-01-c .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbs-feed-01-c .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01-c .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.organic-thumbs-feed-01-c .video-label-box .branding {\n    display: block;\n\tline-height: 24.0px;\n}\n.organic-thumbs-feed-01-c .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.organic-thumbs-feed-01-c .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-c .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.organic-thumbs-feed-01-c .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.organic-thumbs-feed-01-c .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-organic-thumbs-feed-01-c *//* s-split-organic-thumbs-feed-01-c-bpcv */.organic-thumbs-feed-01-c-bpcv img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01-c-bpcv [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01-c-bpcv .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.organic-thumbs-feed-01-c-bpcv .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-c-bpcv .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.organic-thumbs-feed-01-c-bpcv .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-c-bpcv .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n.organic-thumbs-feed-01-c-bpcv .videoCube a {\n    padding: 0;\n}\n.organic-thumbs-feed-01-c-bpcv .thumbBlock {\n    margin: 0;\n}\n.organic-thumbs-feed-01-c-bpcv .video-label-box {\n}\n.organic-thumbs-feed-01-c-bpcv .syndicatedItem .video-label-box {\n}\n.organic-thumbs-feed-01-c-bpcv .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbs-feed-01-c-bpcv .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01-c-bpcv .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.organic-thumbs-feed-01-c-bpcv .video-label-box .branding {\n    display: block;\n\tline-height: 24.0px;\n}\n.organic-thumbs-feed-01-c-bpcv .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.organic-thumbs-feed-01-c-bpcv .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-c-bpcv .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.organic-thumbs-feed-01-c-bpcv .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.organic-thumbs-feed-01-c-bpcv .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-organic-thumbs-feed-01-c-bpcv *//* s-split-organic-thumbs-feed-01-d */.organic-thumbs-feed-01-d img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01-d [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01-d .trc_rbox_header {\n    position: relative;\n    width: auto;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.organic-thumbs-feed-01-d .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.organic-thumbs-feed-01-d .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.organic-thumbs-feed-01-d .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-d .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.organic-thumbs-feed-01-d .videoCube a {\n    padding: 0;\n}\n.organic-thumbs-feed-01-d .thumbBlock {\n    margin: 0;\n}\n.organic-thumbs-feed-01-d .video-title {\n    margin-top: 10px !important;\n    margin-bottom: 10px !important;\n}\n.organic-thumbs-feed-01-d .video-label-box {\n}\n.organic-thumbs-feed-01-d  .syndicatedItem .video-title {\n    font-family: 'Source Sans Pro', sans-serif;\n    max-height: 80px;\n    line-height: 20px;\n    font-style: normal;\n    font-weight: 900 !important;\n    font-size: 20px;\n}\n.organic-thumbs-feed-01-d .syndicatedItem .video-label-box {\n}\n.organic-thumbs-feed-01-d .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbs-feed-01-d .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01-d .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.organic-thumbs-feed-01-d .video-label-box .branding {\n    display: block;\n    line-height: 27.0px;\n    text-transform: uppercase;\n}\n.organic-thumbs-feed-01-d .trc_header_left_column {\n    background: transparent;\n    height: auto;\n}\n.organic-thumbs-feed-01-d .trc_header_right_part {\n    margin-top: 0px;\n}\n.organic-thumbs-feed-01-d .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-d .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n.organic-thumbs-feed-01-d .video-category {\n    font-family: FoundersGrotesk, Source Sans Pro Bold;\n    font-size: 13.1px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    color: #4a4a4a;\n    text-transform: capitalize;\n    margin-top: 15px;\n}\n.organic-thumbs-feed-01-d .video-external-data {\n    font-family: FoundersGrotesk, Source Sans Pro Bold;\n    font-size: 13.1px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    color: #000000;\n    float: left;\n    margin-top: 4px;\n}\n.organic-thumbs-feed-01-d .video-external-data::after {\n    content: ' | ';\n}\n.organic-thumbs-feed-01-d .syndicatedItem .branding {\n    font-family: 'Source Sans Pro', sans-serif;\n    line-height: 18px;\n    font-style: normal;\n    font-weight: 400 !important;\n    font-size: 14px;\n    line-height: 27.0px;\n}\n.organic-thumbs-feed-01-d .logo-taboola {\n    position: absolute;\n    overflow: visible;\n    width: 45px;\n    height: 45px;\n    bottom: 0;\n    left: 0;\n}\n.organic-thumbs-feed-01-d .image-logo-taboola {\n    width: 45px !important;\n    height: 45px !important;\n}\n/* e-split-organic-thumbs-feed-01-d *//* s-split-organic-thumbs-feed-01-d-old */.organic-thumbs-feed-01-d-old img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01-d-old [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01-d-old .trc_rbox_header {\n    position: relative;\n    width: auto;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.organic-thumbs-feed-01-d-old .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.organic-thumbs-feed-01-d-old .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.organic-thumbs-feed-01-d-old .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-d-old .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n.organic-thumbs-feed-01-d-old .videoCube a {\n    padding: 0;\n}\n.organic-thumbs-feed-01-d-old .thumbBlock {\n    margin: 0;\n}\n.organic-thumbs-feed-01-d-old .video-label-box {\n}\n.organic-thumbs-feed-01-d-old .syndicatedItem .video-label-box {\n}\n.organic-thumbs-feed-01-d-old .video-title {\n    margin-top: 10px !important;\n    margin-bottom: 10px !important;\n}\n.organic-thumbs-feed-01-d-old .branding {\n    text-transform: uppercase;\n    font-weight: bold;\n    text-decoration: none;\n    font-size: 12px;\n    color: #777777;\n    margin-top: 0px !important;\n}\n.organic-thumbs-feed-01-d-old  .syndicatedItem .video-title {\n    font-family: 'Source Sans Pro', sans-serif;\n    max-height: 80px;\n    line-height: 20px;\n    font-style: normal;\n    font-weight: 900 !important;\n    font-size: 18px;\n}\n.organic-thumbs-feed-01-d-old .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbs-feed-01-d-old .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01-d-old .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.organic-thumbs-feed-01-d-old .video-label-box .branding {\n    display: block;\n    line-height: 24.0px;\n}\n.organic-thumbs-feed-01-d-old .trc_header_left_column {\n    background: transparent;\n    height: auto;\n}\n.organic-thumbs-feed-01-d-old .trc_header_right_part {\n    margin-top: 0px;\n}\n.organic-thumbs-feed-01-d-old .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-d-old .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n.organic-thumbs-feed-01-d-old .video-icon-img {\n    position: absolute;\n}\n.video-icon-container {\n    position: absolute;\n    display: contents;\n}\n.organic-thumbs-feed-01-d-old .video-category {\n    margin-top: 50px;\n    text-transform: capitalize;\n    color: #4a4a4a;\n    font-size: 13.1px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n}\n.organic-thumbs-feed-01-d-old  .syndicatedItem .branding {\n    font-family: 'Source Sans Pro', sans-serif !important;\n    font-style: normal;\n    font-weight: 400 !important;\n    font-size: 14px;\n    line-height: 24.0px;\n}\n.organic-thumbs-feed-01-d-old .video-external-data::after {\n    content: ' | ';\n}\n.organic-thumbs-feed-01-d-old dt {\n    display: inline;\n    font-style: normal;\n}\n.organic-thumbs-feed-01-d-old .video-external-data {\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 12px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    color: #222222;\n    float: left;\n    margin-top: 3px;\n}\n/* e-split-organic-thumbs-feed-01-d-old *//* s-split-organic-thumbs-feed-01-f */.organic-thumbs-feed-01-f img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01-f [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01-f .trc_rbox_header {\n    position: relative;\n    width: auto;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.organic-thumbs-feed-01-f .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.organic-thumbs-feed-01-f .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.organic-thumbs-feed-01-f .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-f .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.organic-thumbs-feed-01-f .videoCube a {\n    padding: 0;\n}\n.organic-thumbs-feed-01-f .thumbBlock {\n    margin: 0;\n}\n.organic-thumbs-feed-01-f .video-title {\n    margin-top: 10px !important;\n    margin-bottom: 10px !important;\n}\n.organic-thumbs-feed-01-f .video-label-box {\n}\n.organic-thumbs-feed-01-f  .syndicatedItem .video-title {\n    font-family: 'Source Sans Pro', sans-serif;\n    max-height: 80px;\n    line-height: 20px;\n    font-style: normal;\n    font-weight: 900 !important;\n    font-size: 20px;\n}\n.organic-thumbs-feed-01-f .syndicatedItem .video-label-box {\n}\n.organic-thumbs-feed-01-f .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbs-feed-01-f .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01-f .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.organic-thumbs-feed-01-f .video-label-box .branding {\n    display: block;\n    line-height: 27.0px;\n}\n.organic-thumbs-feed-01-f .trc_header_left_column {\n    background: transparent;\n    height: auto;\n}\n.organic-thumbs-feed-01-f .trc_header_right_part {\n    margin-top: 0px;\n}\n.organic-thumbs-feed-01-f .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-f .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n.organic-thumbs-feed-01-f .video-category {\n    font-family: FoundersGrotesk, Source Sans Pro Bold;\n    font-size: 13.1px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    color: #4a4a4a;\n    text-transform: capitalize;\n    margin-top: 15px;\n}\n.organic-thumbs-feed-01-f .video-external-data {\n    font-family: FoundersGrotesk, Source Sans Pro Bold;\n    font-size: 13.1px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    color: #000000;\n    float: left;\n    margin-top: 4px;\n}\n.organic-thumbs-feed-01-f .video-external-data::after {\n    content: ' | ';\n}\n.organic-thumbs-feed-01-f .videoCube_3_child .branding {\n    text-transform: uppercase;\n}\n.organic-thumbs-feed-01-f .syndicatedItem .branding {\n    font-family: 'Source Sans Pro', sans-serif;\n    line-height: 18px;\n    font-style: normal;\n    font-weight: 400 !important;\n    font-size: 14px;\n    line-height: 27.0px;\n}\n.organic-thumbs-feed-01-f .logo-taboola {\n    position: absolute;\n    overflow: visible;\n    width: 45px;\n    height: 45px;\n    bottom: 0;\n    left: 0;\n}\n.organic-thumbs-feed-01-f .image-logo-taboola {\n    width: 45px !important;\n    height: 45px !important;\n}\n/* e-split-organic-thumbs-feed-01-f *//* s-split-organic-thumbs-feed-01-mp */.organic-thumbs-feed-01-mp img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01-mp [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.organic-thumbs-feed-01-mp .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.organic-thumbs-feed-01-mp .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.organic-thumbs-feed-01-mp .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.organic-thumbs-feed-01-mp .logoDiv a {\n    font-size: 100%;\n}\n\n.organic-thumbs-feed-01-mp .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n\n.organic-thumbs-feed-01-mp .videoCube a {\n    padding: 0;\n}\n\n.organic-thumbs-feed-01-mp .thumbBlock {\n    margin: 0;\n}\n\n.organic-thumbs-feed-01-mp .video-label-box {\n}\n\n.organic-thumbs-feed-01-mp .syndicatedItem .video-label-box {\n}\n\n.organic-thumbs-feed-01-mp .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.organic-thumbs-feed-01-mp .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01-mp .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.organic-thumbs-feed-01-mp .video-label-box .branding {\n    display: block;\n\tline-height: 24.0px;\n}\n\n.organic-thumbs-feed-01-mp .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.organic-thumbs-feed-01-mp .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n\n.organic-thumbs-feed-01-mp .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.organic-thumbs-feed-01-mp .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.organic-thumbs-feed-01-mp .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-organic-thumbs-feed-01-mp *//* s-split-organic-thumbs-feed-01-x */.organic-thumbs-feed-01-x img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01-x [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01-x .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.organic-thumbs-feed-01-x .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-x .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.organic-thumbs-feed-01-x .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-x .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n.organic-thumbs-feed-01-x .videoCube a {\n    padding: 0;\n}\n.organic-thumbs-feed-01-x .thumbBlock {\n    margin: 0;\n}\n.organic-thumbs-feed-01-x .video-label-box {\n}\n.organic-thumbs-feed-01-x .syndicatedItem .video-label-box {\n}\n.organic-thumbs-feed-01-x .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbs-feed-01-x .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01-x .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.organic-thumbs-feed-01-x .video-label-box .branding {\n    display: block;\n\tline-height: 27.0px;\n}\n.organic-thumbs-feed-01-x .syndicatedItem .branding {\n    line-height: 27.0px;\n}\n.organic-thumbs-feed-01-x .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-x .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.organic-thumbs-feed-01-x .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.organic-thumbs-feed-01-x .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-organic-thumbs-feed-01-x *//* s-split-organic-thumbs-feed-01-xx */.organic-thumbs-feed-01-xx img {\n    max-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01-xx [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01-xx .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-xx .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.organic-thumbs-feed-01-xx .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-xx .videoCube a {\n    padding: 0;\n}\n.organic-thumbs-feed-01-xx .thumbBlock {\n    margin: 0;\n}\n.organic-thumbs-feed-01-xx .videoCube .video-label-box .video-title {\n    margin: 0;\n}\n.organic-thumbs-feed-01-xx .video-label-box .branding {\n    display: block;\n}\n.organic-thumbs-feed-01-xx .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n\n.organic-thumbs-feed-01-xx .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.organic-thumbs-feed-01-xx .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.organic-thumbs-feed-01-xx .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-organic-thumbs-feed-01-xx *//* s-split-organic-thumbs-feed-01-z */.organic-thumbs-feed-01-z img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01-z [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01-z .trc_rbox_div {\n        margin-bottom: 0;\n}\n.organic-thumbs-feed-01-z .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.organic-thumbs-feed-01-z .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-z .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.organic-thumbs-feed-01-z .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbs-feed-01-z .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n.organic-thumbs-feed-01-z .videoCube a {\n    padding: 0;\n}\n.organic-thumbs-feed-01-z .trc_rbox_outer .videoCube {\n        margin-bottom: 10px;\n}\n.organic-thumbs-feed-01-z .thumbBlock {\n    margin: 0;\n}\n.organic-thumbs-feed-01-z .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n}\n.organic-thumbs-feed-01-z .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01-z .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.organic-thumbs-feed-01-z .video-label-box .branding {\n    display: block;\n\tline-height: 24.0px;\n}\n.organic-thumbs-feed-01-z .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.organic-thumbs-feed-01-z .video-label-box {\n}\n.organic-thumbs-feed-01-z .syndicatedItem .video-label-box {\n}\n.organic-thumbs-feed-01-z .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbs-feed-01-z .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.organic-thumbs-feed-01-z .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.organic-thumbs-feed-01-z .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-organic-thumbs-feed-01-z *//* s-split-rec-reel-sc2 */.rec-reel-sc2 img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.rec-reel-sc2 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.rec-reel-sc2 .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.rec-reel-sc2 .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.rec-reel-sc2 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.rec-reel-sc2 .logoDiv a {\n    font-size: 100%;\n}\n\n.rec-reel-sc2 .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.rec-reel-sc2 .videoCube a {\n    padding: 0;\n}\n\n.rec-reel-sc2 .thumbBlock {\n    margin: 0;\n}\n\n.rec-reel-sc2 .video-label-box {\n}\n\n.rec-reel-sc2 .syndicatedItem .video-label-box {\n}\n\n.rec-reel-sc2 .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.rec-reel-sc2 .videoCube:hover .video-label-box .video-title,\n.rec-reel-sc2 .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.rec-reel-sc2 .video-label-box .branding {\n    display: block;\n\tline-height: 27.0px;\n}\n\n.rec-reel-sc2 .syndicatedItem .branding {\n    line-height: 27.0px;\n}\n.rec-reel-sc2 .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n\n.rec-reel-sc2 .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.rec-reel-sc2 .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.rec-reel-sc2 .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-rec-reel-sc2 *//* s-split-thumbnails-a */.thumbnails-a img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-a .logoDiv a span {\n    font-family: Source Sans Pro Bold;\n}\n.thumbnails-a .trc_rbox_header {\n    line-height: 1.2em;\n    position: relative;\n    display: block;\n    width: auto;\n    margin: 0px 0px 0px 0px;\n    background: transparent;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.thumbnails-a .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.thumbnails-a .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-a .videoCube a {\n    padding: 0;\n}\n.thumbnails-a .thumbBlock {\n    margin: 0;\n}\n.thumbnails-a .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n.thumbnails-a .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 96.0px;\n}\n.thumbnails-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-a .videoCube:hover .video-label-box .video-title,\n.thumbnails-a .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-a .video-label-box .branding {\n    display: block;\n}\n.thumbnails-a .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.thumbnails-a .trc_header_left_column {\n    width: 48%;\n    display: inline-block;\n    background: transparent;\n    height: auto;\n}\n.thumbnails-a .trc_header_right_part {\n    margin-top: 0px;\n}\n.thumbnails-a .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-a .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n/* e-split-thumbnails-a *//* s-split-thumbnails-c */@media only screen and (max-width: 547px) {\n.thumbnails-c { padding: 0px 40px 40px 40px !important;}\n}\n\n.thumbnails-c img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-c [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-c .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbnails-c .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-c .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-c .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-c .logoDiv a span {\n    display: inline;\n    color: #ffffff;\n    font-weight: normal;\n    font-size: 10.0px;\n}\n.thumbnails-c .videoCube a {\n    padding: 0;\n}\n.thumbnails-c .thumbBlock {\n    margin: 0;\n}\n.thumbnails-c .video-label-box {\n}\n.thumbnails-c .syndicatedItem .video-label-box {\n}\n.thumbnails-c .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-c .videoCube:hover .video-label-box .video-title,\n.thumbnails-c .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-c .video-label-box .branding {\n    display: block;\n}\n.thumbnails-c .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.thumbnails-c .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-c .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbnails-c .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-c .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbnails-c *//* s-split-thumbnails-d */.thumbnails-d-new img {\n    max-width: none;\n    }\n    @media only screen and (max-width:480px){\n.thumbnails-d .trc_rbox_header {\n            font-weight: bold;\n            text-decoration: none;\n            color: #A1A1A1;\n            border-width: 0;\n            border-style: none;\n            border-color: #D6D5D3;\n            padding: 5px 0px 5px 5px;\n        }\n        .thumbnails-d .syndicatedItem .video-title {\n            font-family: 'Source Sans Pro', sans-serif;\n            max-height: 80px;\n            line-height: 20px;\n            font-style: normal;\n            font-weight: 900 !important;\n            font-size: 16px !important;\n        }\n        .thumbnails-d .video-title {\n            font-family: 'Source Sans Pro', sans-serif;\n            font-size: 16px;\n            line-height: 27.0px;\n            font-weight: normal;\n            max-height: 80.0px !important;\n            *height: 80.0px;\n            color: #111111;\n            text-decoration: none;\n        }\n        .thumbnails-d .syndicatedItem .branding {\n            font-family: 'Source Sans Pro', sans-serif;\n            font-style: normal;\n            font-weight: 400 !important;\n            font-size: 11px !important;\n            line-height: 13.5px !important;\n        }\n        .thumbnails-d .branding {\n            font-size: 11px !important;\n        }\n\t\t\t.thumbnails-d .logo-taboola {\n        width: 35px;\n        height: 45px;\n      }\n    }\n    @media only screen and (min-width:481px) {\n        .thumbnails-d .logo-taboola {\n            width: 55px;\n            height: 45px;\n        }\n    }\n    /* override bootstrap default span definitions */\n    .thumbnails-d [class*=span] {\n        float:none;\n        margin-left:0;\n    }\n    .thumbnails-d .trc_rbox_header {\n        position: relative;\n        width: auto;\n        background: transparent;\n        height: auto;\n        background-color: transparent;\n        box-sizing: initial;\n        font-style: normal;\n        font-weight: 900 !important;\n        border-top: dotted 1px #111111;\n    }\n    .thumbnails-d .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n        background: transparent;\n        height: auto;\n    }\n    .thumbnails-d .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n        font-style: normal;\n        font-weight: 400 !important;\n    }\n    .thumbnails-d .logoDiv a {\n        font-size: 100%;\n    }\n    .thumbnails-d .logoDiv a span {\n        display: inline;\n        color: #a1a1a1;\n        font-size: 13.0px;\n        font-weight: 400 !important;\n        text-decoration: underline;\n        font-family: 'Source Sans Pro', sans-serif;\n    }\n    .thumbnails-d .videoCube a {\n        padding: 0;\n    }\n    .thumbnails-d .thumbBlock {\n        margin: 0;\n    }\n    .thumbnails-d .video-title {\n        margin-top: 10px !important;\n        margin-bottom: 10px !important;\n        font-weight: 900 !important;\n        line-height: 20.0px;\n    }\n    .thumbnails-d .video-label-box {\n    }\n    .thumbnails-d .syndicatedItem .video-title {\n        font-family: 'Source Sans Pro', sans-serif;\n        max-height: 80px;\n        line-height: 20px;\n        font-style: normal;\n        font-weight: 900 !important;\n        font-size: 18px;\n    }\n    .thumbnails-d .syndicatedItem .video-label-box {\n    }\n    .thumbnails-d .videoCube .video-label-box .video-title {\n        text-decoration: none;\n        margin: 0;\n    }\n    .thumbnails-d .videoCube:hover .video-label-box .video-title,\n    .thumbnails-d .videoCube:hover .video-label-box .video-description {\n        text-decoration: underline;\n    }\n    .thumbnails-d .video-label-box .branding {\n        display: block;\n        line-height: 20.0px;\n    }\n    .thumbnails-d .trc_header_left_column {\n        background: transparent;\n        height: auto;\n    }\n    .thumbnails-d .trc_header_right_part {\n        margin-top: 0px;\n    }\n    .thumbnails-d .trc_rbox_header .logoDiv a {\n        font-size: 100%;\n    }\n    .thumbnails-d .trc_rbox_header .trc_header_ext {\n        position: relative;\n        top: auto;\n        right: auto;\n    }\n    .thumbnails-d .video-category {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-size: 13.1px;\n        font-weight: bold;\n        font-stretch: normal;\n        font-style: normal;\n        line-height: 1.43;\n        letter-spacing: normal;\n        color: #4a4a4a;\n        text-transform: capitalize;\n        margin-top: 15px;\n    }\n    .thumbnails-d .video-external-data {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-size: 13.1px;\n        font-weight: bold;\n        font-stretch: normal;\n        font-style: normal;\n        line-height: 1.43;\n        letter-spacing: normal;\n        color: #000000;\n        float: left;\n    }\n    .thumbnails-d .video-external-data::after {\n        content: ' | ';\n    }\n    .thumbnails-d .videoCube_4_child .branding {\n        text-transform: uppercase;\n    }\n    .thumbnails-d .syndicatedItem .branding {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-style: normal;\n        font-weight: 400 !important;\n        font-size: 14px;\n        line-height: 18px;\n    }\n    .thumbnails-d .logo-taboola {\n        position: absolute;\n        overflow: visible;\n        bottom: 0;\n        left: 0;\n    }\n    .thumbnails-d .image-logo-taboola {\n        width: 100%;\n        height: 100%;\n    }\n    .thumbnails-d .branding {\n        color: #222222;\n        font-size: 12.0px;\n        line-height: 13.5px;\n        font-weight: bold;\n    }\n/* e-split-thumbnails-d *//* s-split-thumbnails-d-new */.thumbnails-d-new img {\n    max-width: none;\n    }\n    /* override bootstrap default span definitions */\n    .thumbnails-d-new [class*=span] {\n        float:none;\n        margin-left:0;\n    }\n    .thumbnails-d-new .trc_rbox_header {\n        position: relative;\n        width: auto;\n        height: auto;\n        background-color: transparent;\n        box-sizing: initial;\n        font-style: normal;\n        font-weight: 900 !important;\n        border-top: dotted 1px #111111;\n    }\n    .thumbnails-d-new .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n        background: transparent;\n        height: auto;\n    }\n    .thumbnails-d-new .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n        font-style: normal;\n        font-weight: 400 !important;\n    }\n    .thumbnails-d-new .logoDiv a {\n        font-size: 100%;\n    }\n    .thumbnails-d-new .logoDiv a span {\n        display: inline;\n        color: #a1a1a1;\n        font-size: 13.0px;\n        font-weight: 400 !important;\n        text-decoration: underline;\n    }\n    .thumbnails-d-new .videoCube a {\n        padding: 0;\n    }\n    .thumbnails-d-new .thumbBlock {\n        margin: 0;\n    }\n    .thumbnails-d-new .video-title {\n        margin-top: 10px !important;\n        margin-bottom: 10px !important;\n        font-weight: 900 !important;\n        line-height: 20.0px;\n    }\n    .thumbnails-d-new .video-label-box {\n    }\n    .thumbnails-d-new  .syndicatedItem .video-title {\n        font-family: 'Source Sans Pro', sans-serif;\n        max-height: 80px;\n        line-height: 20px;\n        font-style: normal;\n        font-weight: 900 !important;\n        font-size: 18px;\n    }\n    .thumbnails-d-new .syndicatedItem .video-label-box {\n    }\n    .thumbnails-d-new .videoCube .video-label-box .video-title {\n        text-decoration: none;\n        margin: 0;\n    }\n    .thumbnails-d-new .videoCube:hover .video-label-box .video-title,\n    .thumbnails-d-new .videoCube:hover .video-label-box .video-description {\n        text-decoration: underline;\n    }\n    .thumbnails-d-new .video-label-box .branding {\n        display: block;\n        line-height: 20.0px;\n    }\n    .thumbnails-d-new .trc_header_left_column {\n        background: transparent;\n        height: auto;\n    }\n    .thumbnails-d-new .trc_header_right_part {\n        margin-top: 0px;\n    }\n    .thumbnails-d-new .trc_rbox_header .logoDiv a {\n        font-size: 100%;\n    }\n    .thumbnails-d-new .trc_rbox_header .trc_header_ext {\n        position: relative;\n        top: auto;\n        right: auto;\n    }\n    .thumbnails-d-new .video-category {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-size: 13.1px;\n        font-weight: bold;\n        font-stretch: normal;\n        font-style: normal;\n        line-height: 1.43;\n        letter-spacing: normal;\n        color: #4a4a4a;\n        text-transform: capitalize;\n        margin-top: 15px;\n    }\n    .thumbnails-d-new .video-external-data {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-size: 13.1px;\n        font-weight: bold;\n        font-stretch: normal;\n        font-style: normal;\n        line-height: 1.43;\n        letter-spacing: normal;\n        color: #000000;\n        float: left;\n    }\n    .thumbnails-d-new .video-external-data::after {\n        content: ' | ';\n    }\n    .thumbnails-d-new .videoCube_4_child .branding {\n        text-transform: uppercase;\n    }\n    .thumbnails-d-new .syndicatedItem .branding {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-style: normal;\n        font-weight: 400 !important;\n        font-size: 14px;\n        line-height: 27.0px;\n    }\n    .thumbnails-d-new .logo-taboola {\n        position: absolute;\n        overflow: visible;\n        width: 45px;\n        height: 45px;\n        bottom: 0;\n        left: 0;\n    }\n    .thumbnails-d-new .image-logo-taboola {\n        width: 55px !important;\n        height: 45px !important;\n    }\n    /* e-split-thumbnails-d-new *//* s-split-thumbnails-d-rwnew */.thumbnails-d-rwnew-new img {\n    max-width: none;\n    }\n\n\n\n    @media only screen and (max-width:480px){\n.thumbnails-d-rwnew .trc_rbox_header {\n            font-weight: bold;\n            text-decoration: none;\n            color: #A1A1A1;\n            border-width: 0;\n            border-style: none;\n            border-color: #D6D5D3;\n            padding: 5px 0px 5px 5px;\n        }\n\n\n\n        .thumbnails-d-rwnew .syndicatedItem .video-title {\n            font-family: 'Source Sans Pro', sans-serif;\n            max-height: 80px;\n            line-height: 20px;\n            font-style: normal;\n            font-weight: 900 !important;\n            font-size: 18px;\n\t\t\t\t\t\tcolor: #111111;\n        }\n\n\n\n        .thumbnails-d-rwnew .video-title {\n            font-family: 'Source Sans Pro', sans-serif;\n            font-size: 18px;\n            line-height: 27.0px;\n            font-weight: normal;\n            max-height: 80.0px !important;\n            *height: 80.0px;\n            color: #111111;\n            text-decoration: none;\n        }\n\n\n\n        .thumbnails-d-rwnew .syndicatedItem .branding {\n            font-family: 'Source Sans Pro', sans-serif;\n            font-style: normal;\n            font-weight: 400 !important;\n            font-size: 11px !important;\n            line-height: 13.5px !important;\n        }\n\n\n\n        .thumbnails-d-rwnew .branding {\n            font-size: 11px !important;\n        }\n\n\n\n\t\t\t.thumbnails-d-rwnew .logo-taboola {\n        width: 55px;\n        height: 55px;\n      }\n\n\n\n    }\n\n\n\n    @media only screen and (min-width:481px) {\n        .thumbnails-d-rwnew .logo-taboola {\n            width: 55px;\n            height: 55px;\n        }\n\n\n\n    }\n\n\n\n    /* override bootstrap default span definitions */\n    .thumbnails-d-rwnew [class*=span] {\n        float:none;\n        margin-left:0;\n    }\n\n\n\n    .thumbnails-d-rwnew .trc_rbox_header {\n        position: relative;\n        width: auto;\n        background: transparent;\n        height: auto;\n        background-color: transparent;\n        box-sizing: initial;\n        font-style: normal;\n        font-weight: 900 !important;\n        border-top: solid 3px #c3c3c3;\n        border-bottom: solid 3px #c3c3c3;\n    }\n\n\n\n    .thumbnails-d-rwnew .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n        background: transparent;\n        height: auto;\n    }\n\n\n\n    .thumbnails-d-rwnew .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n        font-style: normal;\n        font-weight: 400 !important;\n    }\n\n\n\n    .thumbnails-d-rwnew .logoDiv a {\n        font-size: 100%;\n    }\n\n\n\n    .thumbnails-d-rwnew .logoDiv a span {\n        display: inline;\n        color: #a1a1a1;\n        font-size: 13.0px;\n        font-weight: 400 !important;\n        text-decoration: underline;\n        font-family: 'Source Sans Pro', sans-serif;\n    }\n\n\n\n    .thumbnails-d-rwnew .videoCube a {\n        padding: 0;\n    }\n\n\n\n    .thumbnails-d-rwnew .thumbBlock {\n        margin: 0;\n    }\n\n\n\n    .thumbnails-d-rwnew .video-title {\n        margin-top: 5px !important;\n        margin-bottom: 10px !important;\n        font-weight: 900 !important;\n        line-height: 20.0px;\n    }\n\n\n\n    .thumbnails-d-rwnew .video-label-box {\n    }\n\n\n\n    .thumbnails-d-rwnew .syndicatedItem .video-title {\n        font-family: 'Source Sans Pro', sans-serif;\n        max-height: 80px;\n        line-height: 20px;\n        font-style: normal;\n        font-weight: 900 !important;\n        font-size: 18px;\n    }\n\n\n\n    .thumbnails-d-rwnew .syndicatedItem .video-label-box {\n    }\n\n\n\n    .thumbnails-d-rwnew .videoCube .video-label-box .video-title {\n        text-decoration: none;\n        margin: 0;\n    }\n\n\n\n    .thumbnails-d-rwnew .videoCube:hover .video-label-box .video-title,\n    .thumbnails-d-rwnew .videoCube:hover .video-label-box .video-description {\n        text-decoration: underline;\n    }\n\n\n\n    .thumbnails-d-rwnew .video-label-box .branding {\n        display: block;\n        line-height: 20.0px;\n    }\n\n\n\n    .thumbnails-d-rwnew .trc_header_left_column {\n        background: transparent;\n        height: auto;\n    }\n\n\n\n    .thumbnails-d-rwnew .trc_header_right_part {\n        margin-top: 0px;\n    }\n\n\n\n    .thumbnails-d-rwnew .trc_rbox_header .logoDiv a {\n        font-size: 100%;\n    }\n\n\n\n    .thumbnails-d-rwnew .trc_rbox_header .trc_header_ext {\n        position: relative;\n        top: auto;\n        right: auto;\n    }\n\n\n\n    .thumbnails-d-rwnew .video-category {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-size: 14px;\n        font-weight: bold;\n        font-stretch: normal;\n        font-style: normal;\n        line-height: 1.43;\n        letter-spacing: normal;\n        color: #111111;\n        text-transform: capitalize;\n        margin-top: 10px;\n\t\t\t\tborder-bottom: dotted 1px #111111;\n\t\t\t  display: inline;\n    }\n\n\n\n    .thumbnails-d-rwnew .video-external-data {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-size: 13.1px;\n        font-weight: bold;\n        font-stretch: normal;\n        font-style: normal;\n        line-height: 1.43;\n        letter-spacing: normal;\n        color: #000000;\n        float: left;\n    }\n\n\n\n    .thumbnails-d-rwnew .video-external-data::after {\n        content: ' | ';\n    }\n\n\n\n    .thumbnails-d-rwnew .videoCube_4_child .branding {\n        text-transform: uppercase;\n    }\n\n\n\n    .thumbnails-d-rwnew .syndicatedItem .branding {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-style: normal;\n        font-weight: 400 !important;\n        font-size: 14px;\n        line-height: 18px;\n\t\t\t\tmargin-bottom: 12px;\n    }\n\n\n\n    .thumbnails-d-rwnew .logo-taboola {\n        position: absolute;\n        overflow: visible;\n        bottom: 0;\n        left: 0;\n    }\n\n\n\n    .thumbnails-d-rwnew .image-logo-taboola {\n        width: 100%;\n        height: 100%;\n    }\n\n\n\n    .thumbnails-d-rwnew .branding {\n        color: #222222;\n        font-size: 12.0px;\n        line-height: 13.5px;\n        font-weight: bold;\n\t\t\tmargin-bottom: 10px\n    }\n\n\n\n/* e-split-thumbnails-d-rwnew *//* s-split-thumbnails-e */.thumbnails-e img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-e [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-e .trc_rbox_header {\n    position: relative;\n    width: auto;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.thumbnails-e .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.thumbnails-e .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.thumbnails-e .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-e .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n    font-family: 'Source Sans Pro', sans-serif;\n}\n.thumbnails-e .videoCube a {\n    padding: 0;\n}\n.thumbnails-e .thumbBlock {\n    margin: 0;\n}\n.thumbnails-e .video-label-box {\n}\n.thumbnails-e .syndicatedItem .video-label-box {\n}\n.thumbnails-e .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-e .videoCube:hover .video-label-box .video-title,\n.thumbnails-e .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-e .video-label-box .branding {\n    display: block;\n    line-height: 19.0px;\n}\n.thumbnails-e .trc_header_left_column {\n    width: 48%;\n    display: inline-block;\n    background: transparent;\n    height: auto;\n}\n.thumbnails-e .trc_header_right_part {\n    margin-top: 0px;\n}\n.thumbnails-e .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-e .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n.thumbnails-e .syndicatedItem .video-title {\n    font-family: 'Source Sans Pro', sans-serif;\n    max-height: 80px;\n    line-height: 20px;\n    font-style: normal;\n    font-weight: 900 !important;\n}\n.thumbnails-e .syndicatedItem .branding {\n    font-family: 'Source Sans Pro', sans-serif;\n    line-height: 18px;\n    margin-top: 10px;\n    font-style: normal;\n    font-weight: 400 !important;\n}\n/* e-split-thumbnails-e *//* s-split-thumbnails-e-mobile */.thumbnails-e-mobile img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-e-mobile [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-e-mobile .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbnails-e-mobile .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-e-mobile .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-e-mobile .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-e-mobile .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-e-mobile .videoCube a {\n    padding: 0;\n}\n.thumbnails-e-mobile .thumbBlock {\n    margin: 0;\n}\n.thumbnails-e-mobile .video-label-box {\n}\n.thumbnails-e-mobile .syndicatedItem .video-label-box {\n}\n.thumbnails-e-mobile .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-e-mobile .videoCube:hover .video-label-box .video-title,\n.thumbnails-e-mobile .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-e-mobile .video-label-box .branding {\n    display: block;\n\tline-height: 22.0px;\n}\n.thumbnails-e-mobile .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-e-mobile .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-e-mobile .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbnails-e-mobile .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-e-mobile .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbnails-e-mobile *//* s-split-thumbnails-f */.thumbnails-f-new img {\n    max-width: none;\n    }\n    @media only screen and (max-width:480px){\n.thumbnails-f .trc_rbox_header {\n            font-weight: bold;\n            text-decoration: none;\n            color: #A1A1A1;\n            border-width: 0;\n            border-style: none;\n            border-color: #D6D5D3;\n            padding: 5px 0px 5px 5px;\n        }\n        .thumbnails-f .syndicatedItem .video-title {\n            font-family: 'Source Sans Pro', sans-serif;\n            max-height: 80px;\n            line-height: 20px;\n            font-style: normal;\n            font-weight: 900 !important;\n            font-size: 18px;\n\t\t\t\t\t\tcolor: #111111;\n        }\n        .thumbnails-f .video-title {\n            font-family: 'Source Sans Pro', sans-serif;\n            font-size: 18px;\n            line-height: 27.0px;\n            font-weight: normal;\n            max-height: 80.0px !important;\n            *height: 80.0px;\n            color: #111111;\n            text-decoration: none;\n        }\n        .thumbnails-f .syndicatedItem .branding {\n            font-family: 'Source Sans Pro', sans-serif;\n            font-style: normal;\n            font-weight: 400 !important;\n            font-size: 11px !important;\n            line-height: 13.5px !important;\n        }\n        .thumbnails-f .branding {\n            font-size: 11px !important;\n        }\n\t\t\t.thumbnails-f .logo-taboola {\n        width: 55px;\n        height: 55px;\n      }\n    }\n    @media only screen and (min-width:481px) {\n        .thumbnails-f .logo-taboola {\n            width: 55px;\n            height: 55px;\n        }\n    }\n    /* override bootstrap default span definitions */\n    .thumbnails-f [class*=span] {\n        float:none;\n        margin-left:0;\n    }\n    .thumbnails-f .trc_rbox_header {\n        position: relative;\n        width: auto;\n        background: transparent;\n        height: auto;\n        background-color: transparent;\n        box-sizing: initial;\n        font-style: normal;\n        font-weight: 900 !important;\n        border-top: solid 3px #c3c3c3;\n        border-bottom: solid 3px #c3c3c3;\n    }\n    .thumbnails-f .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n        background: transparent;\n        height: auto;\n    }\n    .thumbnails-f .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n        font-style: normal;\n        font-weight: 400 !important;\n    }\n    .thumbnails-f .logoDiv a {\n        font-size: 100%;\n    }\n    .thumbnails-f .logoDiv a span {\n        display: inline;\n        color: #a1a1a1;\n        font-size: 13.0px;\n        font-weight: 400 !important;\n        text-decoration: underline;\n        font-family: 'Source Sans Pro', sans-serif;\n    }\n    .thumbnails-f .videoCube a {\n        padding: 0;\n    }\n    .thumbnails-f .thumbBlock {\n        margin: 0;\n    }\n    .thumbnails-f .video-title {\n        margin-top: 5px !important;\n        margin-bottom: 10px !important;\n        font-weight: 900 !important;\n        line-height: 20.0px;\n    }\n    .thumbnails-f .video-label-box {\n    }\n    .thumbnails-f .syndicatedItem .video-title {\n        font-family: 'Source Sans Pro', sans-serif;\n        max-height: 80px;\n        line-height: 20px;\n        font-style: normal;\n        font-weight: 900 !important;\n        font-size: 18px;\n    }\n    .thumbnails-f .syndicatedItem .video-label-box {\n    }\n    .thumbnails-f .videoCube .video-label-box .video-title {\n        text-decoration: none;\n        margin: 0;\n    }\n    .thumbnails-f .videoCube:hover .video-label-box .video-title,\n    .thumbnails-f .videoCube:hover .video-label-box .video-description {\n        text-decoration: underline;\n    }\n    .thumbnails-f .video-label-box .branding {\n        display: block;\n        line-height: 20.0px;\n    }\n    .thumbnails-f .trc_header_left_column {\n        background: transparent;\n        height: auto;\n    }\n    .thumbnails-f .trc_header_right_part {\n        margin-top: 0px;\n    }\n    .thumbnails-f .trc_rbox_header .logoDiv a {\n        font-size: 100%;\n    }\n    .thumbnails-f .trc_rbox_header .trc_header_ext {\n        position: relative;\n        top: auto;\n        right: auto;\n    }\n    .thumbnails-f .video-category {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-size: 14px;\n        font-weight: bold;\n        font-stretch: normal;\n        font-style: normal;\n        line-height: 1.43;\n        letter-spacing: normal;\n        color: #111111;\n        text-transform: capitalize;\n        margin-top: 10px;\n\t\t\t\tborder-bottom: dotted 1px #111111;\n\t\t\t  display: inline;\n    }\n    .thumbnails-f .video-external-data {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-size: 13.1px;\n        font-weight: bold;\n        font-stretch: normal;\n        font-style: normal;\n        line-height: 1.43;\n        letter-spacing: normal;\n        color: #000000;\n        float: left;\n    }\n    .thumbnails-f .video-external-data::after {\n        content: ' | ';\n    }\n    .thumbnails-f .videoCube_4_child .branding {\n        text-transform: uppercase;\n    }\n    .thumbnails-f .syndicatedItem .branding {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-style: normal;\n        font-weight: 400 !important;\n        font-size: 14px;\n        line-height: 18px;\n\t\t\t\tmargin-bottom: 12px;\n    }\n    .thumbnails-f .logo-taboola {\n        position: absolute;\n        overflow: visible;\n        bottom: 0;\n        left: 0;\n    }\n    .thumbnails-f .image-logo-taboola {\n        width: 100%;\n        height: 100%;\n    }\n    .thumbnails-f .branding {\n        color: #222222;\n        font-size: 12.0px;\n        line-height: 13.5px;\n        font-weight: bold;\n\t\t\tmargin-bottom: 10px\n    }\n/* e-split-thumbnails-f *//* s-split-thumbnails-f-old */.thumbnails-f-old img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-f-old [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-f-old .trc_rbox_div {\n    margin-bottom: 0;\n}\n.thumbnails-f-old .trc_rbox_header {\n    position: relative;\n    width: auto;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n    font-style: normal;\n    font-weight: 900 !important;\n    border-top: solid 3px #c3c3c3;\n    border-bottom: solid 3px #c3c3c3;\n    margin: 3px 3px 8px 0px;\n    padding-top: 10px;\n}\n.thumbnails-f-old .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.thumbnails-f-old .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n    font-style: normal;\n    font-weight: 400 !important;\n}\n.thumbnails-f-old .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-f-old .logoDiv a span {\n    display: inline;\n    color: #a1a1a1;\n    font-size: 13.0px;\n    font-style: normal;\n    font-weight: 400 !important;\n}\n.thumbnails-f-old .videoCube a {\n    padding: 0;\n}\n.thumbnails-f-old .thumbBlock {\n    margin: 0;\n}\n.thumbnails-f-old .video-label-box .branding {\n    display: block;\n    line-height: 24.0px;\n}\n.thumbnails-f-old .video-label-box {\n}\n.thumbnails-f-old .video-title {\n    line-height: 20px;\n    font-style: normal;\n    font-weight: 900 !important;\n}\n.thumbnails-f-old .syndicatedItem .video-title {\n    max-height: 80px;\n    line-height: 20px;\n    font-style: normal;\n    font-weight: 900 !important;\n}\n.thumbnails-f-old .syndicatedItem .video-label-box {\n}\n.thumbnails-f-old .trc_header_left_column {\n    width: 48%;\n    display: inline-block;\n    background: transparent;\n    height: auto;\n}\n.thumbnails-f-old .trc_header_right_part {\n    margin-top: 0px;\n}\n.thumbnails-f-old .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-f-old .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n.thumbnails-f-old .videoCube_4_child .video-title {\n    max-height: 80px;\n    margin-top: 5px !important;\n}\n.thumbnails-f-old .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n}\n.thumbnails-f-old .videoCube:hover .video-label-box .video-title,\n.thumbnails-f-old .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-f-old .syndicatedItem .branding {\n    max-height: 24px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    line-height: 18px;\n    margin-top: 10px;\n    font-style: normal;\n    font-weight: 400 !important;\n}\n.thumbnails-f-old .videoCube.syndicatedItem {\n    border-bottom: solid 1px #d8d8d8;\n    padding: 5px 0 15px 0;\n}\n.trc_elastic .thumbnails-f-old .thumbnail_start .thumbBlock_holder {\n    margin-right: 3px;\n    float: right;\n    margin-left: 10px;\n}\n.thumbnails-f-old .trc_rbox_border_elm {\n    padding: 10px 3px 10px 3px;\n}\n.thumbnails-f-old .logo-taboola {\n    position: absolute;\n    overflow: visible;\n    width: 45px;\n    height: 45px;\n    bottom: 0;\n    left: 0;\n}\n.thumbnails-f-old .video-category {\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 13.1px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    color: #111111;\n    text-transform: capitalize;\n}\n.thumbnails-f-old .video-external-data {\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 12px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    color: #222222;\n    float: left;\n    margin-top: 15px;\n}\n.thumbnails-f-old .video-external-data::after {\n    content: ' | ';\n}\n.thumbnails-f-old .videoCube {\n    border-bottom: solid 1px #d8d8d8;\n    padding: 5px 0 15px 0;\n}\n.thumbnails-f-old .trc_rbox_outer .videoCube {\n    margin-bottom: 10px;\n}\n.thumbnails-f-old .videoCube_4_child .branding {\n    color: #777777;\n    text-transform: uppercase;\n    margin-top: 12px;\n    font-style: normal;\n    font-weight: 700 !important;\n    font-size: 12px;\n}\n.trc_related_container .thumbnails-f-old .logoDiv a {\n    text-decoration: underline !important;\n    color: #a1a1a1;\n}\n.thumbnails-f-old dt {\n    border-bottom: dotted;\n    display: inline;\n    font-style: normal;\n    font-weight: 900 !important;\n}\n.thumbnails-f-old .image-logo-taboola {\n    width: 45px !important;\n    height: 45px !important;\n}\n.thumbnails-f-old .video-external-data dt {\n    border-bottom: none;\n}\n/* e-split-thumbnails-f-old *//* s-split-thumbnails-f-test-2 */.thumbnails-f-test-2 img {\n        max-width: none;\n}\n.thumbnails-f-test-2 .videoCube.thumbnail_start .trc-pre-label {\n    width: 73%;\n}\n/* override bootstrap default span definitions */\n.thumbnails-f-test-2 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-f-test-2 .trc_rbox_div {\n        margin-bottom: 0;\n}\n.thumbnails-f-test-2 .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbnails-f-test-2 .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-f-test-2 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-f-test-2 .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-f-test-2 .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-f-test-2 .videoCube a {\n    padding: 0;\n}\n.thumbnails-f-test-2 .trc_rbox_outer .videoCube {\n        margin-bottom: 10px;\n}\n.thumbnails-f-test-2 .thumbBlock {\n    margin: 0;\n}\n.thumbnails-f-test-2 .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n}\n.thumbnails-f-test-2 .videoCube:hover .video-label-box .video-title,\n.thumbnails-f-test-2 .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-f-test-2 .video-label-box .branding {\n    display: block;\n\tline-height: 24.0px;\n}\n.thumbnails-f-test-2 .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.thumbnails-f-test-2 .video-label-box {\n}\n.thumbnails-f-test-2 .syndicatedItem .video-label-box {\n}\n.thumbnails-f-test-2 .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-f-test-2 .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbnails-f-test-2 .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-f-test-2 .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbnails-f-test-2 *//* s-split-thumbnails-g */.thumbnails-g img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-g [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-g .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbnails-g .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-g .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-g .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-g .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-g .videoCube a {\n    padding: 0;\n}\n.thumbnails-g .thumbBlock {\n    margin: 0;\n}\n.thumbnails-g .video-label-box {\n}\n.thumbnails-g .syndicatedItem .video-label-box {\n}\n.thumbnails-g .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-g .videoCube:hover .video-label-box .video-title,\n.thumbnails-g .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-g .video-label-box .branding {\n    display: block;\n\tline-height: 22.0px;\n}\n.thumbnails-g .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-g .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-g .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbnails-g .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-g .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbnails-g *//* s-split-thumbnails-rr */.thumbnails-rr img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-rr [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.syndicatedItem .video-title {\n  font-family: unset;\n}\n.thumbnails-rr .trc_rbox_header {\n    position: relative;\n    width: auto;\n    height: auto;\n    background-color: transparent;\n    box-sizing: border-box;\n}\n.thumbnails-rr .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.thumbnails-rr .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n    margin-right: 10px;\n}\n.thumbnails-rr .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-rr .logoDiv a span {\n    display: inline;\n    color: #000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-rr .videoCube a {\n    padding: 0;\n}\n.thumbnails-rr .thumbBlock {\n    margin: 0;\n}\n.thumbnails-rr .video-label-box {\n}\n.thumbnails-rr .syndicatedItem .video-label-box {\n}\n.thumbnails-rr .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n    padding-top: 8px;\n}\n.thumbnails-rr .videoCube:hover .video-label-box .video-title,\n.thumbnails-rr .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-rr .video-label-box .branding {\n    display: block;\n}\n.thumbnails-rr .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-rr .trc_header_left_column {\n    width: 48%;\n    display: inline-block;\n    background: transparent;\n    height: auto;\n}\n.thumbnails-rr .trc_header_right_part {\n    margin-top: 3px;\n}\n.thumbnails-rr .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-rr .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n.trc-widget-footer .link-adc a .trc_adc_wrapper, .trc_header_ext .link-adc a .trc_adc_wrapper {\n    vertical-align: baseline;\n    height: 15px;\n    width: 19px;\n    display: inline-block;\n    position: relative;\n    margin-right: 10px;\n}\n.thumbnails-rr {\n    padding: 0px 5px 0px 5px;\n}\n/* e-split-thumbnails-rr *//* s-split-thumbs-feed-01 */.thumbs-feed-01 img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-feed-01 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01 .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbs-feed-01 .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbs-feed-01 .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01 .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 13.0px;\n}\n.thumbs-feed-01 .videoCube a {\n    padding: 0;\n}\n.thumbs-feed-01 .thumbBlock {\n    margin: 0;\n}\n.thumbs-feed-01 .video-label-box {\n}\n.thumbs-feed-01 .syndicatedItem .video-label-box {\n}\n.thumbs-feed-01 .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbs-feed-01 .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01 .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbs-feed-01 .video-label-box .branding {\n    display: block;\n\tline-height: 27.0px;\n}\n.thumbs-feed-01 .syndicatedItem .branding {\n    line-height: 27.0px;\n}\n.thumbs-feed-01 .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01 .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbs-feed-01 .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbs-feed-01 .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbs-feed-01 *//* s-split-thumbs-feed-01-a */.thumbs-feed-01-a img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-feed-01-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01-a .trc_rbox_header {\n    position: relative;\n    width: auto;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.thumbs-feed-01-a .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.thumbs-feed-01-a .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.thumbs-feed-01-a .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbs-feed-01-a .videoCube a {\n    padding: 0;\n}\n.thumbs-feed-01-a .thumbBlock {\n    margin: 0;\n}\n.thumbs-feed-01-a .video-label-box {\n}\n.thumbs-feed-01-a .syndicatedItem .video-label-box {\n}\n.thumbs-feed-01-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbs-feed-01-a .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01-a .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbs-feed-01-a .video-label-box .branding {\n    display: block;\n    line-height: 24.0px;\n}\n.thumbs-feed-01-a .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.thumbs-feed-01-a .trc_header_left_column {\n    background: transparent;\n    height: auto;\n}\n.thumbs-feed-01-a .trc_header_right_part {\n    margin-top: 0px;\n}\n.thumbs-feed-01-a .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-a .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n/* e-split-thumbs-feed-01-a *//* s-split-thumbs-feed-01-a-bpcv */.thumbs-feed-01-a-bpcv img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-feed-01-a-bpcv [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01-a-bpcv .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbs-feed-01-a-bpcv .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01-a-bpcv .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbs-feed-01-a-bpcv .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-a-bpcv .logoDiv a span {\n    display: inline;\n    color: #999999;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbs-feed-01-a-bpcv .videoCube a {\n    padding: 0;\n}\n.thumbs-feed-01-a-bpcv .thumbBlock {\n    margin: 0;\n}\n.thumbs-feed-01-a-bpcv .video-label-box {\n}\n.thumbs-feed-01-a-bpcv .syndicatedItem .video-label-box {\n}\n.thumbs-feed-01-a-bpcv .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbs-feed-01-a-bpcv .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01-a-bpcv .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbs-feed-01-a-bpcv .video-label-box .branding {\n    display: block;\n\tline-height: 24.0px;\n}\n.thumbs-feed-01-a-bpcv .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.thumbs-feed-01-a-bpcv .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01-a-bpcv .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbs-feed-01-a-bpcv .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbs-feed-01-a-bpcv .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbs-feed-01-a-bpcv *//* s-split-thumbs-feed-01-b */.thumbs-feed-01-b img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbs-feed-01-b [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbs-feed-01-b .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.thumbs-feed-01-b .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbs-feed-01-b .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbs-feed-01-b .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbs-feed-01-b .logoDiv a span {\n    display: inline;\n    color: #999999;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbs-feed-01-b .videoCube a {\n    padding: 0;\n}\n\n.thumbs-feed-01-b .thumbBlock {\n    margin: 0;\n}\n\n.thumbs-feed-01-b .video-label-box {\n}\n\n.thumbs-feed-01-b .syndicatedItem .video-label-box {\n}\n\n.thumbs-feed-01-b .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbs-feed-01-b .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01-b .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.thumbs-feed-01-b .video-label-box .branding {\n    display: block;\n\tline-height: 22.0px;\n}\n\n.thumbs-feed-01-b .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbs-feed-01-b .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbs-feed-01-b .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbs-feed-01-b .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbs-feed-01-b .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbs-feed-01-b *//* s-split-thumbs-feed-01-b-test */.thumbs-feed-01-b-test img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-feed-01-b-test [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01-b-test .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbs-feed-01-b-test .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01-b-test .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbs-feed-01-b-test .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-b-test .logoDiv a span {\n    display: inline;\n    color: #999999;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbs-feed-01-b-test .videoCube a {\n    padding: 0;\n}\n.thumbs-feed-01-b-test .thumbBlock {\n    margin: 0;\n}\n.thumbs-feed-01-b-test .video-label-box {\n}\n.thumbs-feed-01-b-test .syndicatedItem .video-label-box {\n}\n.thumbs-feed-01-b-test .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbs-feed-01-b-test .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01-b-test .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbs-feed-01-b-test .video-label-box .branding {\n    display: block;\n\tline-height: 22.0px;\n}\n.thumbs-feed-01-b-test .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbs-feed-01-b-test .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01-b-test .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbs-feed-01-b-test .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbs-feed-01-b-test .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbs-feed-01-b-test *//* s-split-thumbs-feed-01-bpcv */.thumbs-feed-01-bpcv img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-feed-01-bpcv [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01-bpcv .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbs-feed-01-bpcv .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01-bpcv .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbs-feed-01-bpcv .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-bpcv .logoDiv a span {\n    display: inline;\n    color: #999999;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbs-feed-01-bpcv .videoCube a {\n    padding: 0;\n}\n.thumbs-feed-01-bpcv .thumbBlock {\n    margin: 0;\n}\n.thumbs-feed-01-bpcv .video-label-box {\n}\n.thumbs-feed-01-bpcv .syndicatedItem .video-label-box {\n}\n.thumbs-feed-01-bpcv .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbs-feed-01-bpcv .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01-bpcv .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbs-feed-01-bpcv .video-label-box .branding {\n    display: block;\n\tline-height: 27.0px;\n}\n.thumbs-feed-01-bpcv .syndicatedItem .branding {\n    line-height: 27.0px;\n}\n.thumbs-feed-01-bpcv .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01-bpcv .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbs-feed-01-bpcv .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbs-feed-01-bpcv .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbs-feed-01-bpcv *//* s-split-thumbs-feed-01-c */.thumbs-feed-01-c img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-feed-01-c [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01-c .trc_rbox_header {\n    line-height: 1.2em;\n    position: relative;\n    display: none;\n    width: auto;\n    margin: 0px 0px 0px 0px;\n    background: transparent;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.thumbs-feed-01-c .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.thumbs-feed-01-c .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.thumbs-feed-01-c .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-c .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbs-feed-01-c .videoCube a {\n    padding: 0;\n}\n.thumbs-feed-01-c .thumbBlock {\n    margin: 0;\n}\n.thumbs-feed-01-c .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 130px;\n}\n.thumbs-feed-01-c .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 130px;\n}\n.thumbs-feed-01-c .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbs-feed-01-c .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01-c .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbs-feed-01-c .video-label-box .branding {\n    display: block;\n    line-height: 26.0px;\n}\n.thumbs-feed-01-c .syndicatedItem .branding {\n    line-height: 26.0px;\n}\n.thumbs-feed-01-c .trc_header_left_column {\n    background: transparent;\n    height: auto;\n}\n.thumbs-feed-01-c .trc_header_right_part {\n    margin-top: 0px;\n}\n.thumbs-feed-01-c .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-c .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n.thumbs-feed-01-c .syndicatedItem .video-title {\n    font-family: 'Source Sans Pro', sans-serif;\n    max-height: 80px;\n    line-height: 20px;\n    font-style: normal;\n    font-weight: 900 !important;\n    font-size: 18px;\n}\n.thumbs-feed-01-c .syndicatedItem .branding {\n    font-family: 'Source Sans Pro', sans-serif;\n    line-height: 18px;\n    font-style: normal;\n    font-weight: 400 !important;\n    font-size: 14px;\n}\n/* e-split-thumbs-feed-01-c *//* s-split-thumbs-feed-01-e */.thumbs-feed-01-e img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-feed-01-e [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01-e .trc_rbox_header {\n    line-height: 1.2em;\n    position: relative;\n    display: none;\n    width: auto;\n    margin: 0px 0px 0px 0px;\n    background: transparent;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.thumbs-feed-01-e .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.thumbs-feed-01-e .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.thumbs-feed-01-e .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-e .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbs-feed-01-e .videoCube a {\n    padding: 0;\n}\n.thumbs-feed-01-e .thumbBlock {\n    margin: 0;\n}\n.thumbs-feed-01-e .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 135px;\n}\n.thumbs-feed-01-e .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 135px;\n}\n.thumbs-feed-01-e .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbs-feed-01-e .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01-e .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbs-feed-01-e .video-label-box .branding {\n    display: block;\n    line-height: 27.0px;\n}\n.thumbs-feed-01-e .syndicatedItem .branding {\n    line-height: 27.0px;\n}\n.thumbs-feed-01-e .trc_header_left_column {\n    background: transparent;\n    height: auto;\n}\n.thumbs-feed-01-e .trc_header_right_part {\n    margin-top: 0px;\n}\n.thumbs-feed-01-e .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-e .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n.thumbs-feed-01-e .syndicatedItem .video-title {\n    font-family: 'Source Sans Pro', sans-serif;\n    max-height: 80px;\n    line-height: 20px;\n    font-style: normal;\n    font-weight: 900 !important;\n    font-size: 18px;\n}\n.thumbs-feed-01-e .syndicatedItem .branding {\n    font-family: 'Source Sans Pro', sans-serif;\n    line-height: 18px;\n    font-style: normal;\n    font-weight: 400 !important;\n    font-size: 14px;\n}\n/* e-split-thumbs-feed-01-e *//* s-split-thumbs-feed-01-f */.thumbs-feed-01-f img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-feed-01-f [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01-f .trc_rbox_header {\n    position: relative;\n    width: auto;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.thumbs-feed-01-f .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.thumbs-feed-01-f .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.thumbs-feed-01-f .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-f .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbs-feed-01-f .videoCube a {\n    padding: 0;\n}\n.thumbs-feed-01-f .thumbBlock {\n    margin: 0;\n}\n.thumbs-feed-01-f .video-title {\n    margin-top: 10px !important;\n    margin-bottom: 10px !important;\n}\n.thumbs-feed-01-f .video-label-box {\n}\n.thumbs-feed-01-f  .syndicatedItem .video-title {\n    font-family: 'Source Sans Pro', sans-serif;\n    max-height: 80px;\n    line-height: 20px;\n    font-style: normal;\n    font-weight: 900 !important;\n    font-size: 20px;\n}\n.thumbs-feed-01-f .syndicatedItem .video-label-box {\n}\n.thumbs-feed-01-f .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbs-feed-01-f .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01-f .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbs-feed-01-f .video-label-box .branding {\n    display: block;\n    line-height: 27.0px;\n}\n.thumbs-feed-01-f .trc_header_left_column {\n    background: transparent;\n    height: auto;\n}\n.thumbs-feed-01-f .trc_header_right_part {\n    margin-top: 0px;\n}\n.thumbs-feed-01-f .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-f .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n.thumbs-feed-01-f .video-category {\n    font-family: FoundersGrotesk, Source Sans Pro Bold;\n    font-size: 13.1px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    color: #4a4a4a;\n    text-transform: capitalize;\n    margin-top: 15px;\n}\n.thumbs-feed-01-f .video-external-data {\n    font-family: FoundersGrotesk, Source Sans Pro Bold;\n    font-size: 13.1px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    color: #000000;\n    float: left;\n    margin-top: 4px;\n}\n.thumbs-feed-01-f .video-external-data::after {\n    content: ' | ';\n}\n.thumbs-feed-01-f .videoCube_3_child .branding {\n    text-transform: uppercase;\n}\n.thumbs-feed-01-f .syndicatedItem .branding {\n    font-family: 'Source Sans Pro', sans-serif;\n    line-height: 18px;\n    font-style: normal;\n    font-weight: 400 !important;\n    font-size: 14px;\n    line-height: 27.0px;\n}\n.thumbs-feed-01-f .logo-taboola {\n    position: absolute;\n    overflow: visible;\n    width: 45px;\n    height: 45px;\n    bottom: 0;\n    left: 0;\n}\n.thumbs-feed-01-f .image-logo-taboola {\n    width: 45px !important;\n    height: 45px !important;\n}\n/* e-split-thumbs-feed-01-f *//* s-split-thumbs-feed-01-x */.thumbs-feed-01-x img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-feed-01-x [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01-x .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbs-feed-01-x .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01-x .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbs-feed-01-x .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-x .logoDiv a span {\n    display: inline;\n    color: #999999;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbs-feed-01-x .videoCube a {\n    padding: 0;\n}\n.thumbs-feed-01-x .thumbBlock {\n    margin: 0;\n}\n.thumbs-feed-01-x .video-label-box {\n}\n.thumbs-feed-01-x .syndicatedItem .video-label-box {\n}\n.thumbs-feed-01-x .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbs-feed-01-x .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01-x .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbs-feed-01-x .video-label-box .branding {\n    display: block;\n\tline-height: 27.0px;\n}\n.thumbs-feed-01-x .syndicatedItem .branding {\n    line-height: 27.0px;\n}\n.thumbs-feed-01-x .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01-x .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbs-feed-01-x .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbs-feed-01-x .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbs-feed-01-x *//* s-split-thumbs-feed-01-y */.thumbs-feed-01-y img {\n    max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-feed-01-y [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01-y .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01-y .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.thumbs-feed-01-y .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-y .videoCube a {\n    padding: 0;\n}\n.thumbs-feed-01-y .thumbBlock {\n    margin: 0;\n}\n.thumbs-feed-01-y .videoCube .video-label-box .video-title {\n    margin: 0;\n}\n.thumbs-feed-01-y .video-label-box .branding {\n    display: block;\n}\n.thumbs-feed-01-y .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbs-feed-01-y .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbs-feed-01-y .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbs-feed-01-y .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbs-feed-01-y *//* s-split-thumbs-feed-01-z */.thumbs-feed-01-z img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-feed-01-z [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01-z .trc_rbox_div {\n        margin-bottom: 0;\n}\n.thumbs-feed-01-z .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbs-feed-01-z .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01-z .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbs-feed-01-z .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-01-z .logoDiv a span {\n    display: inline;\n    color: #999999;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbs-feed-01-z .videoCube a {\n    padding: 0;\n}\n.thumbs-feed-01-z .trc_rbox_outer .videoCube {\n        margin-bottom: 10px;\n}\n.thumbs-feed-01-z .thumbBlock {\n    margin: 0;\n}\n.thumbs-feed-01-z .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n}\n.thumbs-feed-01-z .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01-z .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbs-feed-01-z .video-label-box .branding {\n    display: block;\n\tline-height: 24.0px;\n}\n.thumbs-feed-01-z .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.thumbs-feed-01-z .video-label-box {\n}\n.thumbs-feed-01-z .syndicatedItem .video-label-box {\n}\n.thumbs-feed-01-z .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-feed-01-z .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbs-feed-01-z .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbs-feed-01-z .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbs-feed-01-z *//* s-split-thumbs-feed-02 */.thumbs-feed-02 img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-feed-02 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-02 .trc_rbox_header {\n    position: relative;\n    width: auto;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.thumbs-feed-02 .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.thumbs-feed-02 .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.thumbs-feed-02 .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-02 .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 13.0px;\n}\n.thumbs-feed-02 .videoCube a {\n    padding: 0;\n}\n.thumbs-feed-02 .thumbBlock {\n    margin: 0;\n}\n.thumbs-feed-02 .video-label-box {\n}\n.thumbs-feed-02 .syndicatedItem .video-label-box {\n}\n.thumbs-feed-02 .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbs-feed-02 .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-02 .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbs-feed-02 .video-label-box .branding {\n    display: block;\n    line-height: 27.0px;\n}\n.thumbs-feed-02 .syndicatedItem .branding {\n    line-height: 27.0px;\n}\n.thumbs-feed-02 .trc_header_left_column {\n    background: transparent;\n    height: auto;\n}\n.thumbs-feed-02 .trc_header_right_part {\n    margin-top: 0px;\n}\n.thumbs-feed-02 .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-feed-02 .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n/* e-split-thumbs-feed-02 *//* s-split-thumbs-reminder-a */.thumbs-reminder-a img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbs-reminder-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-reminder-a .trc_rbox_div {\n        margin-bottom: 0;\n}\n.thumbs-reminder-a .trc_rbox_header {\n        position: relative;\n        width: auto;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbs-reminder-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-reminder-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbs-reminder-a .logoDiv a {\n    font-size: 100%;\n}\n.thumbs-reminder-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbs-reminder-a .videoCube a {\n    padding: 0;\n}\n.thumbs-reminder-a .trc_rbox_outer .videoCube {\n        margin-bottom: 10px;\n}\n.thumbs-reminder-a .thumbBlock {\n    margin: 0;\n}\n.thumbs-reminder-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n}\n.thumbs-reminder-a .videoCube:hover .video-label-box .video-title,\n.thumbs-reminder-a .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbs-reminder-a .video-label-box .branding {\n    display: block;\n\tline-height: 19.0px;\n}\n.thumbs-reminder-a .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.thumbs-reminder-a .video-label-box {\n}\n.thumbs-reminder-a .syndicatedItem .video-label-box {\n}\n.thumbs-reminder-a .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbs-reminder-a .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbs-reminder-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbs-reminder-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* e-split-thumbs-reminder-a */"
                },
                "locale": null
            },
            "systemFlags": {
                "loaderType": "deflated"
            }
        };
        config = TRC.inflate ? TRC.inflate.getConfig(config) : config, config.global["disable-config-override"] || "object" != typeof TRC.configOverride || setConfig(config.global, TRC.configOverride);
        var rtbIndex = 0,
            waitForTrkTimeout = config.global["loader-ready-timeout"] || 500,
            DEFAULT_PROTOCOL = (config.global["rbox-default-protocol"] || "https") + ":",
            PRECONNECT_DOMAINS = config.global["preconnect-domains"] || ["trc.taboola.com", "images.taboola.com"];
        TRC.utm.start = (new Date).getTime(), TRC._taboolaClone = [], TRC.PROTOCOL = config.global["rbox-trc-protocol"] || (win.location.protocol.match(/http/) ? win.location.protocol : DEFAULT_PROTOCOL), TRC.SYNDICATED_CLASS_NAME = "syndicatedItem", TRC.LOCAL_STORAGE_PIGGYBACK = "lspb", TRC.SPONSORED_CONTAINER_CLASS_NAME = "trc-content-sponsored", TRC.rtbRealTimeUserId = null, TRC.version = getParameter("tbl_rbox_version", win.location) || TRC.version || "20201112-29-RELEASE", TRC.imageCounter = 0, TRC.implInlined = TRC.implInlined || !1, TRC.implCustomFile = TRC.implCustomFile || "", win._tblConsole = win._tblConsole || [], TRC.EVENT_LOOP_INTERVAL = config.global["rbox-perf-el-interval"] || 1e3, TRC.EVENT_LOOP_REPORT_INTERVAL = config.global["rbox-perf-el-report-interval"] || 5e3, TRC.pConsole = function(e, t, n, o, a) {
            try {
                win._tblConsole.length > 400 && (win._tblConsole = []), _tblConsole.push({
                    service: "RBox",
                    tab: e,
                    log: {
                        type: t,
                        title: n,
                        infoValue: o,
                        infoType: a || "string",
                        tstmp: (new Date).getTime()
                    }
                })
            } catch (e) {}
        }, TRC.pConsole("", "time", "loader.js loaded", ""), TRC.pConsole("page", "info", "user agent", navigator.userAgent), TRC.isOptim = function(e) {
            return !(!config.global["feed-optim"] || !config.global["feed-optim"][e])
        }, TRC.hasES6Support = function() {
            if (void 0 !== eS6SupportCheckResult) return eS6SupportCheckResult;
            eS6SupportCheckResult = !0;
            try {
                eval("var foo = (x)=>x+1")
            } catch (e) {
                eS6SupportCheckResult = !1
            }
            return eS6SupportCheckResult
        }, TRC.styleInjected = !1;
        var protocol = TRC.PROTOCOL,
            trc = null,
            globalMessages = [],
            originalErrorHandler = win.onerror,
            implElm = null,
            requests = [],
            consents = [],
            notificationsFirst = [],
            requestDispatchTimeout = null,
            notifications = [],
            socials = [],
            p13ns = [],
            abtests = [],
            debugs = [],
            apiListeners = [],
            manualVisibles = [],
            globalParams = {
                publisher: TRC.publisherId = 'hearstlocalnews-network'
            },
            flush = !1,
            queue = null,
            PAGE_TYPES = {
                video: "video",
                article: "article",
                category: "category",
                home: "home",
                search: "search",
                photo: "photo",
                video_source: "video",
                other: "other",
                content_hub: "content_hub"
            },
            TBX_PAGE_TYPE_VAR = "pm_pgtp",
            taboolaXHosts = {
                prod: "//widget.perfectmarket.com",
                sb: "//widget.sandbox.perfectmarket.com"
            },
            taboolaXHost = taboolaXHosts["prod"],
            isTBXInit = !1,
            loaderHostName = null,
            loaderDomain, eS6SupportCheckResult, RTUS_ID_STORAGE_KEY = "tbl_rtus_id",
            RTUS_MAIN_EVENT_NAME_FOR_MONITORING = "RealTimeUserSyncMain",
            RTUS_CALLBACK_EVENT_NAME_FOR_MONITORING = "RealTimeUserSyncCallback";
        TRC.pConsole("page", "info", "from global params : publisher-id was set to - " + globalParams.publisher), win.onerror = function(e, t, n) {
            try {
                /taboola(syndication)?\.com/.test(t) && __trcError && __trcError(e, n + "@" + t)
            } catch (e) {}
            return originalErrorHandler && originalErrorHandler.apply(win, Array.prototype.slice.call(arguments))
        }, TRC.reset = function() {
            TRC.pConsole("page", "debug", "reset RBox"), requests = [], consents = [], requestDispatchTimeout = null, isTBXInit = !1, win.taboola_view_id = null, TRC._taboolaClone = [], TRC.pushedRboxTracking = !1, notifications = [], globalParams = {
                publisher: TRC.publisherId = 'hearstlocalnews-network'
            }, flush = !1, doNotifications = function() {}, doRequests = function() {}, injectComScore();
            try {
                TRC.pageTemplate = void 0, TRC.Timeout.reset(), TRC.Interval.reset(), trc && win.TRCImpl && (trc.reset(), win.TRCImpl = trc = null), TRC.eventDelegator && TRC.eventDelegator.resetEvents()
            } catch (e) {
                TRC.pConsole("errors", "error", "error in TRC.reset", e.message)
            }
        }, TRC.ready = function(e) {
            return config.defaults = e, config.version = TRC.version, config.global["enable-events-api"] && registerAPIEvents(), setPush(manualVisibles, doVisibles), TRC.pConsole("page", "info", "configuration version +  : " + config.version), TRC.publisherId = globalParams.publisher, config.global["force-reset-on-ready"] ? win.TRCImpl = trc = new TRC.Manager(config, globalParams) : win.TRCImpl = trc = trc || new TRC.Manager(config, globalParams), TRC.isInteractive = !1, (doRequests = realDoRequests)(), config.global["enable-social-events"] && (doSocials = realDoSocials)(), config.global["enable-abtests-events"] && (doABTests = realDoABTests)(), doDebugs(), trc.onclick = queue.onclick, trc.invisible && TRC.aspect.after(trc, "internalDrawRBox", function() {
                (doNotifications = realDoNotifications)()
            }, !0), trc
        }, TRC.shiftDomain = function(e) {
            if (!config.global["enable-shift-cdn-domains"]) return e;
            var t = e,
                n, o = config.global["exclude-subd-shift"] || [],
                a = getHostName(e);
            return loaderDomain && e && (n = lsplit(a, ".", 2)[1], o.indexOf(a) < 0 && n.indexOf("taboola.com") > -1 && (t = e.replace(n, loaderDomain))), t
        }, TRC.loadTaboolaScript = function(e, t, n, o) {
            var a = loaderHostName || "cdn.taboola.com",
                r = doc.getElementsByTagName("script"),
                i;
            i = doc.createElement("script"), r.length && r[0].parentNode.insertBefore(i, r[0]), i.charset = "UTF-8", i.type = "text/javascript", t && i.setAttribute("async", "async");
            var s = chainEventCallbacks(n);
            s && i.addEventListener("load", s, !1);
            var l = chainEventCallbacks(o);
            return o && i.addEventListener("error", l, !1), i.src = TRC.shiftDomain(protocol + "//" + a + "/libtrc/" + e), i
        }, detectBots(), config.global["enable-shift-cdn-domains"] && (findScriptBaseDomain(doc.getElementsByTagName("script")), setLoaderDomains()), config.global["enable-visit-value"] && config.global["load-vv-early"] && loadVV(), TRC.Performance && (activatePerf(config.global["enable-analytics"], config.global["config-analytics"], getParameter("taboola-force-perf", win.location)), TRC.performance && TRC.performance.mark("2.0"));
        var smartEllipsisUrlParam = getParameter("taboola-smart-ellipsis", win.location);
        smartEllipsisUrlParam && (config.global["smart-ellipsis"] = "yes" === smartEllipsisUrlParam);
        var ellipsisPerfUrlParam = getParameter("taboola-ellipsis-perf", win.location);
        ellipsisPerfUrlParam && (TRC.ellipsisPerf = "yes" === ellipsisPerfUrlParam), TRC.hasTrk && (TRC.trk.hasRequestEnded && !TRC.trk.hasRequestEnded(TRC.publisherId) || void 0 === TRC.trkRequestStatus) ? win.setTimeout(doInitialization, waitForTrkTimeout) : (setResourceHints(), doInitialization())
    }

    function setConfig(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    }

    function doNotifications() {}

    function doNotificationsFirst() {
        for (; msg = notificationsFirst.shift();) switch (msg.notify) {
            case "newPageLoad":
                TRC.reset()
        }
    }

    function findScriptBaseDomain(e) {
        for (var t, n = /^(.*\/libtrc\/.+\/)loader\.js(?:\?(.*))?$/, o = 0; o < e.length; o++) e[o].src && (t = e[o].src.match(n)) && (TRC.baseDomain = t[1], TRC.pConsole("page", "info", "base domain set to : " + TRC.baseDomain))
    }

    function realDoNotifications() {
        for (var e; e = notifications.shift();) switch (e.notify) {
            case "videoPlay":
                TRC.RBoxUsage.logUsage("realDoNotifications", {
                    position: "videoPlay"
                }), this.preloadRequestLoader ? function(e) {
                    TRC.aspect.after(trc, "handleLoadResponse", function() {
                        trc.playVideo(e)
                    }, !0)
                }(e) : trc.playVideo(e);
                break;
            case "videoDone":
                TRC.RBoxUsage.logUsage("realDoNotifications", {
                    position: "videoDone"
                });
                try {
                    TRC.dispatch("videoDone", e)
                } catch (e) {
                    trc.error("Problem in videoDone", e)
                }
        }
    }

    function lsplit(e, t, n) {
        var o = e.split(t);
        return o.slice(0, n - 1).concat(o.length >= n ? o.slice(n - 1).join(t) : [])
    }

    function getHostName(e) {
        for (var t = [{
                key: "?",
                index: 0
            }, {
                key: "://",
                index: 1
            }, {
                key: "//",
                index: 1
            }, {
                key: "/",
                index: 0
            }, {
                key: ":",
                index: 0
            }], n = 0, o = t.length, a = e, r; n < o; n++) a = (r = lsplit(a, t[n].key, 2)).length > 1 ? r[t[n].index] : r[0];
        return a
    }

    function sendLoadRBox() {
        requestDispatchTimeout = null, trc.loadRBox.apply(trc, requests), requests = [], (doNotifications = realDoNotifications)()
    }

    function detectBots() {
        var e;
        config.global["enable-detect-bots"] && (e = new RegExp(config.global["detect-bots-regex"] || "bot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex", "i"), TRC.botDetected = e.test(navigator.userAgent))
    }

    function doRequests() {}

    function realDoRequests() {
        return requests.length ? flush ? (flush = !1, void sendLoadRBox()) : (null != requestDispatchTimeout && TRC.Timeout.clear(requestDispatchTimeout), void(requestDispatchTimeout = TRC.Timeout.set(sendLoadRBox, trc.trcRequestDelay))) : flush = !1
    }

    function registerAPIEvents() {
        var e;
        for (apiListeners.push = function(e) {
                TRC.EventsAPI.listen(e.listenTo, e.handler)
            }; apiListeners.length;) e = apiListeners.shift(), TRC.EventsAPI.listen(e.listenTo, e.handler)
    }

    function doDebugs() {
        TRC.eventDelegator.subscribe("user_id_ready", handleDebugs)
    }

    function handleDebugs() {
        for (var e; e = debugs.shift();) __trcError("uid error : " + e.msg)
    }

    function doSocials() {}

    function realDoSocials() {
        TRC.eventDelegator.subscribe("user_id_ready", handleSocials)
    }

    function handleSocials() {
        try {
            sendSocials.call(null, socials)
        } catch (e) {
            TRC.pConsole("errors", "error", "error in handleSocials", e.message)
        }
    }

    function sendSocials(e) {
        for (var t; t = e.shift();) trc.sendEvent("social", {
            st: t.name,
            "unescape-d": encodeURIComponent(__trcJSONify({
                data: t.val
            }))
        }, null, !1, null, null)
    }

    function doABTests() {}

    function realDoABTests() {
        TRC.eventDelegator.subscribe("user_id_ready", handleABTests)
    }

    function handleABTests() {
        try {
            sendImplEvents.call(null, abtests)
        } catch (e) {
            TRC.pConsole("errors", "error", "error in handleABTests", e.message)
        }
    }

    function sendImplEvents(e) {
        for (var t; t = e.shift();) trc.sendEvent("abtests", {
            "unescape-d": encodeURIComponent(__trcJSONify(t.val))
        }, null, !1, null, null)
    }

    function checkModeVisibilityConstraints(e, t) {
        var n = !0,
            o, a;
        try {
            e.modes[t] && (a = e.modes[t]["visibility-constraints"]) && "object" == typeof a && !0 !== TRC["ignoreVisibilityConstraints"] && (o = window.innerWidth || document.body.clientWidth, (a.minWidth && o < a.minWidth || a.maxWidth && o > a.maxWidth) && (n = !1, TRC.pConsole("page", "info", "Mode '" + t + "' will not be displayed due to visibility constraints", a, "object")))
        } catch (e) {
            TRC.pConsole("page", "error", "Error while evaluating visibility constraints of mode '" + t + "': " + e.message)
        }
        return n
    }

    function setLoaderDomains() {
        loaderHostName = config.global["use-loader-host"] || config.global["enable-shift-cdn-domains"] ? getHostName(TRC.baseDomain) : null, loaderDomain = loaderHostName ? lsplit(loaderHostName, ".", 2).pop() : null
    }

    function chainEventCallbacks(e) {
        if (e) return Array.isArray(e) ? function(t) {
            e.forEach(function(e) {
                e(t)
            })
        } : "function" == typeof e ? e : void 0
    }

    function vvReady() {
        TRC.adManager = new TRC.AdServerManager(config.global["vv-config"], TRC.version), TRC.adManager.startVV().then(function() {
            TRC.adManager.run()
        })
    }

    function loadImplementation(e) {
        TRC.implInlined ? TRC.trcReady && TRC.trcReady() : TRC.implLoaded ? TRC.trcReady() : implElm || (implElm = TRC.loadTaboolaScript(e), TRC.performance && TRC.performance.mark("3.0"), TRC.utm.push((new Date).getTime() - TRC.utm.start), TRC.pConsole("page", "debug", "loading impl file : '" + e + "'"))
    }

    function loadVV() {
        TRC.AdServerManager || (TRC.VVReady = vvReady, config.global["load-vv-early"] ? loadAssetFile(protocol + "//cdn.taboola.com/libtrc/vv." + TRC.version + ".js", {
            async: !0
        }) : TRC.loadTaboolaScript("vv." + TRC.version + ".js"))
    }

    function loadAssetFile(e, t) {
        if (!TRC.botDetected) {
            var n = doc.getElementsByTagName("script"),
                o = doc.getElementsByTagName("head"),
                a = doc.createElement("script");
            t && t.async ? a.setAttribute("async", "") : a.setAttribute("defer", ""), t && t.crossorigin && a.setAttribute("crossorigin", t.crossorigin), t && t.id && (a.id = t.id), a.src = TRC.shiftDomain(e), t && t.forceInHead && "head" !== n[0].parentNode.nodeName.toLocaleLowerCase() ? o[0].appendChild(a) : n[0].parentNode.insertBefore(a, n[0]), TRC.pConsole("page", "debug", "loading : " + a.src)
        }
    }

    function doGlobals() {
        if (globalMessages.length) {
            for (var e, t, n, o = TRC.hasES6Support() ? ".js" : ".es5.js"; e = globalMessages.shift();)
                for (var a in e) "onclick" == a ? queue.onclick = e[a] : globalParams[a] = e[a];
            loadImplementation(n = TRC.implCustomFile ? TRC.implCustomFile + o : (t = getParameterOfWhitelist("taboola_impl_file", ["impl", "impl.thin"])) ? t + "." + TRC.version + o : 'impl.' + TRC.version + o)
        }
    }

    function doConsents() {
        for (; msg = consents.shift();) TRC.consent.setConsent ? TRC.consent.setConsent(msg) : globalMessages.push({
            consentMessage: msg
        })
    }

    function executeMessages() {
        doConsents(), doNotificationsFirst(), doGlobals(), doRequests(), doNotifications(), doSocials(), doABTests()
    }

    function registerToAMP_API() {
        var e = window.AMP_MODE && window.AMP_MODE.version ? window.AMP_MODE.version : "1";
        TRC.isAMP = !0, window._taboola.push({
            additional_data: {
                sdkd: {
                    os: "AMP",
                    osv: e,
                    sdkt: "Taboola AMP Driver",
                    sdkv: "1"
                }
            }
        }), window._taboola.push({
            listenTo: "nocontent",
            handler: function(e) {
                var t = document.querySelector(".trc_rbox_container .trc_rbox_div");
                t && t.offsetHeight > 10 || e.detail.isFeedCard || window.context.noContentAvailable()
            }
        }), window.context.observeIntersection(function(e) {
            e.forEach(function(e) {
                window._taboola.push({
                    intersection: !0,
                    rects: e,
                    placement: window.context.data.placement
                }), TRC.lastVisibleRects ? e.time > TRC.lastVisibleRects.time && (TRC.lastVisibleRects = e) : TRC.lastVisibleRects = e
            })
        })
    }

    function dispatchMessage(e) {
        if ("object" == typeof e.overrideConfig && null != e.overrideConfig) return TRC.overrideGlobalConfig = e.overrideConfig.global, void mergeObject(config, e.overrideConfig, 0);
        var t, n;
        extractSubscription(e), updateAmpMessageURL(e), e.cex && !1 !== config.global["cex-enable"] && (TRC.cexConsentData = e.cex), e.cdns && !1 !== config.global["ccpa-cdns-enable"] && (TRC.ccpaCdns = e.cdns), e.ccpaPs && !1 !== config.global["ccpa-ps-enable"] && (TRC.ccpaPs = e.ccpaPs), e.mode ? (TRC.pConsole("page", "info", "push to '_taboola' - mode : " + e.mode, e, "object"), e.framework && (globalMessages.push({
            framework: e.framework
        }), "amp" === e.framework && registerToAMP_API()), checkModeVisibilityConstraints(config, e.mode) && requests.push(e)) : e.listenTo ? e.handler && "function" == typeof e.handler ? apiListeners.push(e) : TRC.pConsole("page", "warn", "events API listening to event without a handler.") : e.notify ? "newPageLoad" == e.notify ? (TRC.pConsole("page", "info", "push to '_taboola' - notification : newPageLoad"), resetAllMessages(), notificationsFirst.push(e)) : notifications.push(e) : e.name && -1 !== e.name.indexOf("p13n-") ? p13ns.push(e) : e.name && -1 !== e.name.indexOf("abtests") ? abtests.push(e) : (t = getSocialEvent(e)) ? socials.push({
            name: t,
            val: e[t]
        }) : e.debug ? debugs.push(e.debug) : e.consentData || e.consentPreset || e.gdprApplies ? consents.push(e) : (e.intersection || e.visible) && e.placement ? manualVisibles.push({
            event: "visible::" + e.placement,
            rects: e.rects
        }) : (n = getParameter("taboolax-load", win.location), (config.global["inject-taboolax"] || n) && !isTBXInit && setTBXPageType(e) && (taboolaXHost = n ? taboolaXHosts[n] : taboolaXHost, isTBXInit = !0, injectTaboolaX(taboolaXHost)), e.template && void 0 === TRC.pageTemplate && (TRC.pageTemplate = e.template), globalMessages.push(e)), e.flush && (flush = !0)
    }

    function doVisibles(e) {
        TRC.dispatch(e.event, e.rects)
    }

    function setPush(e, t) {
        var n;
        for (e.push = t; n = e.shift();) t(n)
    }

    function getSocialEvent(e) {
        try {
            for (var t in e)
                if (0 == t.indexOf("social-") && e.hasOwnProperty(t)) return t
        } catch (e) {}
        return null
    }

    function extractSubscription(e) {
        var t;
        try {
            if (!e.onrender) return;
            TRC.eventDelegator ? t = TRC.eventDelegator.subscribe : (TRC.subscriptionRegister = [], t = function(e, t, n, o) {
                TRC.subscriptionRegister.push({
                    event: e,
                    handler: t,
                    container: o
                })
            }), t("onrender", e.onrender, e.container ? getContainerId(e.container) : null)
        } catch (e) {
            __trcError && __trcError("extractSubscription", e)
        }
    }

    function updateAmpMessageURL(e) {
        var t = TRC.isAMP && e.hasOwnProperty("url") && !!window.context;
        !config.global["disable-amp-url-override"] && t && (e.url = window.context.canonicalUrl + window.context.location.search)
    }

    function getParameter(e, t) {
        var n, o, a = t.search.substr(1).split(/&/);
        for (o = 0; o < a.length; o++)
            if ((n = a[o].split(new RegExp("="), 2))[0] == e) return n[1];
        return null
    }

    function getParameterOfWhitelist(e, t) {
        for (var n = getParameter(e, win.location), o = 0; o < t.length; o++)
            if (t[o] === n) return n;
        return null
    }

    function getContainerId(e) {
        return "string" == typeof e ? e : msg.container.id || "trc_cont_ " + parseInt(1e4 * Math.random())
    }

    function setTBXPageType(e) {
        var t;
        for (t in e)
            if (PAGE_TYPES.hasOwnProperty(t)) return win[TBX_PAGE_TYPE_VAR] = PAGE_TYPES[t], PAGE_TYPES[t];
        return null
    }

    function resetAllMessages() {
        requests = [], globalMessages = [], notifications = [], notificationsFirst = [], socials = []
    }

    function pushMessage(e) {
        if (e) {
            e.placement && (TRC.performance && TRC.performance.mark("tbl_push_start", null, e.placement.replace(/ /g, "_"), 0, "tblPush", TRC.PerfEvenType.START), TRC.performance && TRC.performance.mark("tbl_push_stop", null, e.placement.replace(/ /g, "_"), 0, "tblPush", TRC.PerfEvenType.STOP)), TRC._taboolaClone.length > 50 && (TRC._taboolaClone = []), TRC._taboolaClone.push(e);
            for (var t = 0; t < arguments.length; t++)
                if (e = arguments[t], TRC.pConsole("page", "debug", "push to '_taboola'", e, "object"), e instanceof Array)
                    for (var n = 0; n < e.length; n++) dispatchMessage(e[n]);
                else dispatchMessage(e);
            return executeMessages(), arguments.length
        }
    }

    function injectComScore() {
        var e;
        config.global["inject-comscore"] && (win._comscore = win._comscore || [], loadAssetFile(("https:" == protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js", {
            async: !0
        }), e = {
            c1: "7",
            c2: "13739933",
            c3: "20121515121"
        }, win._comscore.push(e), TRC.pConsole("page", "info", "injected comsocre", e, "object")), injectBrazilComScore()
    }

    function injectBrazilComScore() {
        var e = "https://sb.scorecardresearch.com/beacon.js";
        config.global["enable-comscore-brazil-distributed-content"] && (win._comscore || loadAssetFile(e, {
            async: !0
        }), win._comscore = win._comscore || [], win._comscore.push({
            c1: "7",
            c2: "34354936",
            c3: "1"
        }))
    }

    function injectDeviceId() {
        if (!1 !== config.global["rbox-detect-device-id"]) {
            var e = (t = document.createElement("a"), function(e) {
                    if (!e) return {};
                    var n;
                    t.href = e;
                    for (var o = t.search, a = /\??&?([^=]+)=([^&]+)/gi, r = {}; n = a.exec(o);) r[n[1]] = n[2];
                    return r
                }),
                t, n = function(e) {
                    return e instanceof Array ? e.filter(n).length > 0 : !!e.mode && "amp" === e.framework
                },
                o, a = _taboola.filter(n).length > 0 && window.context && r(window.context.referrer) || r(window.__tbMockReferrer || document.referrer);
            a && (_taboola.unshift({
                device: a.deviceId
            }), TRC.taboolaNews = TRC.taboolaNews || {}, TRC.taboolaNews.timeOn = a)
        }

        function r(t) {
            var n = e(t),
                o = n.redir ? e(decodeURIComponent(n.redir)) : {},
                a = n["dc_data"] || o["dc_data"];
            return a && n["ui"] ? {
                deviceId: n["ui"],
                dc_data: a
            } : null
        }
    }

    function setGloablFlags() {
        TRC.useStorageDetection = !(!config.global || !0 !== config.global["use-storage-detection"])
    }

    function injectTaboolaX(e) {
        loadAssetFile(e + "/" + TRC.publisherId + "/load.js", {
            async: !0
        }), TRC.pConsole("page", "info", "injected taboola-x with publisher id : " + TRC.publisherId)
    }

    function activatePerf(e, t, n) {
        TRC.perfConfOverride && (t = TRC.perfConfOverride), (n || e && t && t.traffic) && (n || t.traffic > 100 * Math.random()) && (TRC.performance = new TRC.Performance(t))
    }

    function preconnectTo(e) {
        var t = document.createElement("link");
        t.rel = "preconnect", t.href = e, document.head && document.head.appendChild(t)
    }

    function setResourceHints() {
        if (config.global["enable-resource-hints"])
            for (var e = 0; e < PRECONNECT_DOMAINS.length; e++) preconnectTo(TRC.PROTOCOL + "//" + PRECONNECT_DOMAINS[e])
    }

    function getConsentData() {
        var e = 0,
            t = 1,
            n = 2,
            o = 3;
        if (TRC.consentData = {}, "function" == typeof __cmp) {
            TRC.consentData.cmpStatus = t;
            try {
                __cmp("getConsentData", null, function(t) {
                    TRC.consentData.cmpStatus = e, TRC.consentData.gdprApplies = t.gdprApplies, TRC.consentData.consentDaisyBit = t.consentData
                })
            } catch (e) {
                TRC.consentData.cmpStatus = n, TRC.pConsole("page", "error", "getConsentData: Error calling __cmp api for user consent", e.message)
            }
        } else TRC.consentData.cmpStatus = o
    }

    function mergeObject(e, t, n) {
        if (!(n > 10))
            for (var o in t) t.hasOwnProperty(o) && ("object" == typeof t[o] ? (void 0 === e[o] && (e[o] = {}), "object" == typeof e[o] && mergeObject(e[o], t[o], ++n)) : e[o] = t[o])
    }

    function doInitialization() {
        if (setGloablFlags(), injectDeviceId(), config.global["enable-shift-cdn-domains"] || (findScriptBaseDomain(doc.getElementsByTagName("script")), setLoaderDomains()), !(queue = win[queueName]).registered) {
            for (queue.push = pushMessage, queue.registered = !0; queue.length;) pushMessage(queue.shift());
            config.global["enable-consent"] || getConsentData(), shouldInjectRtus() && injectRtus(), config.global["enable-visit-value"] && !config.global["load-vv-early"] && loadVV(), injectComScore()
        }
    }

    function shouldInjectRtus() {
        try {
            return config.global["enable-real-time-user-sync"] && (/^((?!chrome|android).)*safari/i.test(navigator.userAgent.toLowerCase()) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || navigator.userAgent.indexOf("Edg") > -1)
        } catch (e) {
            return !1
        }
    }

    function injectRtus() {
        var e = "getRTUS";
        setRtusCallback(e), TRC.performance && TRC.performance.mark(RTUS_MAIN_EVENT_NAME_FOR_MONITORING + "Start", null, RTUS_MAIN_EVENT_NAME_FOR_MONITORING, 0, RTUS_MAIN_EVENT_NAME_FOR_MONITORING, TRC.PerfEvenType.START), TRC.performance && TRC.performance.mark(RTUS_CALLBACK_EVENT_NAME_FOR_MONITORING + "Start", null, RTUS_CALLBACK_EVENT_NAME_FOR_MONITORING, 0, RTUS_CALLBACK_EVENT_NAME_FOR_MONITORING, TRC.PerfEvenType.START);
        try {
            loadAssetFile("//gum.criteo.com/sync?c=72&r=2&j=TRC." + e, {
                async: !0
            }), TRC.pConsole("page", "info", "injected RTUS service")
        } catch (e) {
            __trcWarn("Error during RTUS loading asset file: ", e)
        }
    }

    function setRtusCallback(e) {
        try {
            TRC.rtbRealTimeUserId = localStorage.getItem(RTUS_ID_STORAGE_KEY)
        } catch (e) {
            __trcWarn("Error during RTUS fetching data from local storage asset file: ", e)
        }
        TRC[e] = function(e) {
            try {
                if (TRC.performance && TRC.performance.mark(RTUS_CALLBACK_EVENT_NAME_FOR_MONITORING + "Stop", null, RTUS_CALLBACK_EVENT_NAME_FOR_MONITORING, 0, RTUS_CALLBACK_EVENT_NAME_FOR_MONITORING, TRC.PerfEvenType.STOP), e && "OK" === e.status) {
                    var t = e.userid;
                    TRC.rtbRealTimeUserId = t, localStorage.setItem(RTUS_ID_STORAGE_KEY, t)
                } else TRC.rtbRealTimeUserId = null, localStorage.removeItem(RTUS_ID_STORAGE_KEY)
            } catch (e) {
                __trcWarn("Error during RTUS callback: ", e)
            }
        }
    }
}(window, document);