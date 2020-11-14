/* ControlTag Loader for Associated Press 70e9da44-ecaa-4d3c-a085-5add07b24e7b */
(function(w, cs) {

    if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
        return;
    }

    var debugging = /kxdebug/.test(w.location);
    var log = function() {

        debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
    };

    var load = function(url, callback) {
        log('Loading script from:', url);
        var node = w.document.createElement('script');
        node.async = true;
        node.src = url;


        node.onload = node.onreadystatechange = function() {
            var state = node.readyState;
            if (!callback.done && (!state || /loaded|complete/.test(state))) {
                log('Script loaded from:', url);
                callback.done = true;
                callback();
            }
        };


        var sibling = w.document.getElementsByTagName('script')[0];
        sibling.parentNode.insertBefore(node, sibling);
    };

    var config = {
        "app": {
            "name": "krux-scala-config-webservice",
            "version": "3.42.4",
            "schema_version": 3
        },
        "confid": "uxw2rsru9",
        "context_terms": [],
        "publisher": {
            "name": "Associated Press",
            "active": true,
            "uuid": "70e9da44-ecaa-4d3c-a085-5add07b24e7b",
            "version_bucket": "stable",
            "id": 5226
        },
        "params": {
            "first_party_dmp_managed": false,
            "link_header_bidder": false,
            "site_level_supertag_config": "site",
            "recommend": false,
            "control_tag_pixel_throttle": 100,
            "fingerprint": false,
            "optout_button_optout_text": "Browser Opt Out",
            "user_data_timing": "load",
            "consent_active": true,
            "use_central_usermatch": true,
            "store_realtime_segments": false,
            "tag_source": false,
            "link_hb_start_event": "ready",
            "optout_button_optin_text": "Browser Opt In",
            "first_party_uid": true,
            "link_hb_timeout": 2000,
            "link_hb_adserver_subordinate": true,
            "optimize_realtime_segments": false,
            "link_hb_adserver": "dfp",
            "target_fingerprint": false,
            "context_terms": true,
            "optout_button_id": "kx-optout-button",
            "user_id_cookie": "kppid",
            "dfp_premium": true
        },
        "prioritized_segments": [],
        "realtime_segments": [],
        "services": {
            "userdata": "//cdn.krxd.net/userdata/get",
            "contentConnector": "https://connector.krxd.net/content_connector",
            "stats": "//apiservices.krxd.net/stats",
            "optout": "//cdn.krxd.net/userdata/optout/status",
            "event": "//beacon.krxd.net/event.gif",
            "set_optout": "https://consumer.krxd.net/consumer/optout",
            "data": "//beacon.krxd.net/data.gif",
            "link_hb_stats": "//beacon.krxd.net/link_bidder_stats.gif",
            "userData": "//cdn.krxd.net/userdata/get",
            "link_hb_mas": "https://link.krxd.net/hb",
            "config": "//cdn.krxd.net/controltag/{{ confid }}.js",
            "social": "//beacon.krxd.net/social.gif",
            "addSegment": "//cdn.krxd.net/userdata/add",
            "pixel": "//beacon.krxd.net/pixel.gif",
            "um": "https://usermatch.krxd.net/um/v2",
            "controltag": "//cdn.krxd.net/ctjs/controltag.js.{hash}",
            "loopback": "https://consumer.krxd.net/consumer/tmp_cookie",
            "remove": "https://consumer.krxd.net/consumer/remove/70e9da44-ecaa-4d3c-a085-5add07b24e7b",
            "click": "https://apiservices.krxd.net/click_tracker/track",
            "stats_export": "//beacon.krxd.net/controltag_stats.gif",
            "userdataApi": "//cdn.krxd.net/userdata/v1/segments/get",
            "cookie": "//beacon.krxd.net/cookie2json",
            "proxy": "//cdn.krxd.net/partnerjs/xdi",
            "consent_get": "https://consumer.krxd.net/consent/get/70e9da44-ecaa-4d3c-a085-5add07b24e7b",
            "consent_set": "https://consumer.krxd.net/consent/set/70e9da44-ecaa-4d3c-a085-5add07b24e7b",
            "is_optout": "https://beacon.krxd.net/optout_check",
            "impression": "//beacon.krxd.net/ad_impression.gif",
            "transaction": "//beacon.krxd.net/transaction.gif",
            "log": "//jslog.krxd.net/jslog.gif",
            "portability": "https://consumer.krxd.net/consumer/portability/70e9da44-ecaa-4d3c-a085-5add07b24e7b",
            "set_optin": "https://consumer.krxd.net/consumer/optin",
            "usermatch": "//beacon.krxd.net/usermatch.gif"
        },
        "experiments": [],
        "site": {
            "name": "apnews.com",
            "cap": 255,
            "id": 1683558,
            "organization_id": 5226,
            "uid": "uxw2rsru9"
        },
        "tags": [{
            "id": 43999,
            "name": "Clear DL Cache DTC",
            "content": "<script>Krux('require:scrape').clearDataLayerCache()</script>",
            "target": null,
            "target_action": "append",
            "timing": "asap",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 43614,
            "name": "DTC Standard All Sites with Prefix",
            "content": "<script>\n(function() {\n    /* Standard but configurable DTC */\n    var comDomain, domain, level, libUtil, pathLevel, prefix, toSet;\n    libUtil = Krux('require:util.library-tag');\n    toSet = {};\n    level = 1;\n    while (level <= Number('3')) {\n        pathLevel = Krux('scrape.url_path', level);\n        if (pathLevel) {\n            if ('false' === 'true') {\n                pathLevel = (\"\" + pathLevel).replace(\n                    /\\.(?:html?|php[0-9]?|aspx?|cfg|py)$/i, '');\n            }\n            toSet[\"page_attr_url_path_\" + level] = pathLevel;\n        }\n        level++;\n    }\n    toSet['page_attr_meta_keywords'] = Krux('scrape.meta_name', 'keywords');\n    prefix = libUtil.resolvePrefix('get', 'site',\n        'undefined');\n    toSet = Krux('prefix:attr', toSet, prefix);\n    domain = Krux('get', 'domain');\n    comDomain = domain.match(/\\.([^\\.]+\\.com)$/);\n    if (comDomain) {\n        domain = comDomain[1];\n    }\n    toSet['page_attr_domain'] = domain;\n    Krux('set', toSet);\n}).call();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onready",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 43627,
            "name": "Meta Keywords Page Attribute DTC",
            "content": "<script>\n(function() {\n    var _, attrArray, pageAttr, userAttr, normaliseName,\n        toSet = {}, i, len, tag, value, name;\n\n    _ = Krux('require:underscore');\n\n    // Convert a string to an array omiting falsy values\n    attrArray = function(attrs) {\n        return _.without(attrs.split(','), '', 'undefined', 'null', 'false');\n    };\n\n    // List of meta tags to be used as page or user attributes\n    pageAttr = attrArray('keywords');\n    userAttr = attrArray('undefined');\n\n    // Function to convert meta tag name to attribute name\n    normaliseName = function(name) {\n        return name\n            .toLowerCase()\n            .replace(/\\./, '_');\n    };\n\n    // Scrape page attributes\n    for (i = 0, len = pageAttr.length; i < len; i++) {\n        tag = pageAttr[i].split(':');\n        name = 'page_attr_apnews_' + (tag[1] || normaliseName(tag[0]));\n        value = Krux('scrape.meta_name', tag[0]);\n        if (value) toSet[name] = value;\n    }\n\n    // Scrape user attributes\n    for (i = 0, len = userAttr.length; i < len; i++) {\n        tag = userAttr[i].split(':');\n        name = 'user_attr_' + (tag[1] || normaliseName(tag[0]));\n        value = Krux('scrape.meta_name', tag[0]);\n        if (value) toSet[name] = value;\n    }\n\n    // Set attributes\n    Krux('set', toSet);\n\n})()\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }],
        "usermatch_tags": [{
            "id": 6,
            "name": "Google User Match",
            "content": "<script>\r\n(function() {\r\n\r\nvar kuid = Krux('get', 'user');\r\n  if(kuid){\r\n  // original google user match tag. will be deprecated june 1, 2020\r\n  new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\r\n\r\n  // new google user match where they host the match table. The KUID needs to be base64 encoded, but the ids sent will be regular kuids\r\n  var baseEncodedKuid = btoa(kuid).replace(/=$/, '');\r\n  new Image().src = 'https://cm.g.doubleclick.net/pixel?google_nid=krux_digital&google_hm='+baseEncodedKuid;\r\n  }\r\n\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 21,
            "name": "Acxiom",
            "content": "<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 23,
            "name": "BlueKai S2S (Oracle)",
            "content": "<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 33,
            "name": "Criteo Usermatch",
            "content": "<script>\r\n    (function(){\r\n        var kuid = Krux('get', 'user');\r\n        var consent = Krux('iab:urlParams','gdpr_consent','gdpr',true);\r\n        if (kuid) {\r\n            if (!consent) {\r\n                consent = '';\r\n            }\r\n            var p = location.protocol == 'https:' ? 'https:' : 'http:';\r\n            var purl = '//gum.criteo.com/sync?c=83&r=1&a=1&u=';\r\n            var kurl = '//beacon.krxd.net/usermatch.gif?partner=criteo&partner_uid=@USERID@';\r\n            (new Image()).src  = p + purl + p + encodeURIComponent(kurl) + consent;\r\n        }\r\n    })();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 34,
            "name": "Comscore Data Tag",
            "content": "<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  var cbust = Math.round(new Date().getTime() / 1000);\r\n  var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\r\n  var url = prefix == 'https:' ? '//sb.scorecardresearch.com/p' : '//b.scorecardresearch.com/p';\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: url,\r\n      data: {\r\n          c1: '9',\r\n          c2: '8188709',\r\n          cs_xi: kuid,\r\n          rn: cbust\r\n      }});\r\n  }\r\n  })();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 71,
            "name": "Xandr Connect",
            "content": "<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var consent = Krux('iab:urlParams');\r\n        if (kuid) {\r\n            if(!consent){\r\n                consent = \"\";\r\n            }\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\r\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl + consent;\r\n            (new Image()).src=appnexus_url;\r\n        }\r\n})();\r\n</script>\r\n\r\n<!-- Krux Config:\r\n\r\n-->",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 76,
            "name": "LiveRamp User Matching",
            "content": "<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>\r\n\r\n\r\n<!-- Krux Config:\r\n\r\n-->",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 99,
            "name": "Amazon User Match Pixel",
            "content": "<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\n  if (kuid) {\n      var partner_url = prefix +'//s.amazon-adsystem.com/ecm3?ex=krux.com&id=' + kuid;\n      new Image().src = partner_url;\n  }\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 10,
            "name": "Rubicon User Match",
            "content": "<script>\r\n(function(){\r\n  if (window.Krux) {\r\n    var kuid = window.Krux('get', 'user');\r\n    if (kuid && typeof kuid != 'undefined') {\r\n       var rubicon_url = '//token.rubiconproject.com/token?pid=27384&puid=krux_userid';\r\n       var i = new Image();\r\n       i.src = rubicon_url;\r\n    }\r\n  }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 2,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 29,
            "name": "Nativo User Match",
            "content": "<script>\r\n(function() {\r\n    var kuid = Krux('get', 'user');\r\n    var prefix = location.protocol;\r\n    if (kuid) {\r\n        var nativo_url = prefix + '//jadserve.postrelease.com/dmp/5?vk=KRUX_USER_ID&ntv_r=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=nativo&partner_uid=NTV_USER_ID';\r\n        var i = new Image();\r\n        i.src = nativo_url;\r\n    }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 2,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 32,
            "name": "Casale (Index Exchange) user match",
            "content": "<script>\n(function(){\n\n   var kuid = Krux('get', 'user');\n   if (kuid) {\n      var prefix = window.location.protocol;\n      var casale_url = '';\n      var kurl = '//beacon.krxd.net/usermatch.gif?partner=casale&partner_uid=__UID__';\n      var encode_krux_url = encodeURIComponent(prefix + kurl);\n      \n      if (prefix == \"http:\") {\n         casale_url = prefix + '//ssum.casalemedia.com/usermatchredir?s=183716&cb='+ encode_krux_url;\n      }\n      else if (prefix == \"https:\") { \n         casale_url = prefix + '//ssum-sec.casalemedia.com/usermatchredir?s=183716&cb='+ encode_krux_url; \n      }\n\n      new Image().src = casale_url;\n   }\n\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 2,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 56,
            "name": "Undertone Usermatch",
            "content": "<script>\n!(function() {\n    var protocol = location.protocol == 'https:' ? 'https:' : 'http:';\n    var kxurl    = protocol + '//beacon.krxd.net/usermatch.gif?partner=undertone&partner_uid=';\n    var purl     = protocol + '//ads.undertone.com/u?dp=30&url=';\n    (new Image()).src = purl + encodeURIComponent(kxurl);\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 2,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 117,
            "name": "Triplelift User Match",
            "content": "<script>\r\n(function(){\r\n    var kuid = Krux('get', 'user');\r\n    if (kuid) {\r\n        var p = location.protocol == 'https:' ? 'https:' : 'http:';\r\n        var purl = '//dmpsync.3lift.com/getuid?redir=';\r\n        var kurl = '//beacon.krxd.net/usermatch.gif?partner=triplelift&partner_uid=$UID';\r\n        (new Image()).src  = p + purl + p + encodeURIComponent(kurl); \r\n    }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 3,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }],
        "link": {
            "adslots": {},
            "bidders": {}
        }
    };

    for (var i = 0, tags = config.tags, len = tags.length, tag;
        (tag = tags[i]); ++i) {
        if (String(tag.id) in cs) {
            tag.content = cs[tag.id];
        }
    }


    var esiGeo = String(function() {
        /*
           {"CONTINENT":"NA", "COUNTRY":"US", "REGION":"VA", "CITY":"Ashburn", "DMA":"", "AREACODE":"", "ZIP":"20149", "LATITUDE":"39.048", "LONGITUDE":"-77.473"}
          */
    }).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

    if (esiGeo) {
        log('Got a request for:', esiGeo, 'adding geo to config.');
        try {
            config.geo = w.JSON.parse(esiGeo);
        } catch (__) {

            log('Unable to parse geo from:', config.geo);
            config.geo = {};
        }
    }



    var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

    if (!proxy || true) {


        load('//cdn.krxd.net/ctjs/controltag.js.0631b7d64dbbd3656a8b7368ad227a04', function() {
            log('Loaded stable controltag resource');
            Krux('config', config);
        });

    }

})(window, (function() {
    var obj = {};

    return obj;
})());