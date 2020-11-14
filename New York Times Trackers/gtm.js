// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function() {

    var data = {
        "resource": {
            "version": "397",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "viewport.scrollTop"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "viewport.height"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "viewport.width"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(\"object\"!==typeof window.nytAnalytics)return\"\";var a=", ["escape", ["macro", 1], 8, 16], "||\"\";a=a.toLowerCase();window.nytAnalytics.comScorePage=window.nytAnalytics.comScorePage||1;if(!a||\"oak\"===a||\"article\"===a){a=window.nytAnalytics.comScorePage;var c=", ["escape", ["macro", 2], 8, 16], ",b=", ["escape", ["macro", 3], 8, 16], ",d=768\u003E", ["escape", ["macro", 4], 8, 16], ";b=d?4*b:2*b;window.nytAnalytics.comScorePage=Math.floor(c\/b)+1;return window.nytAnalytics.comScorePage!==a?\"track\":\"\"}})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "NYT-T"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "nyt-purr"
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__j",
                "vtp_name": "location.search"
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.name"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!1})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!0})();"]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 11],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": ["macro", 12],
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "test-whitelist", "value", ["macro", 13]],
                    ["map", "key", "article-complete", "value", ["macro", 13]],
                    ["map", "key", "lire-modal", "value", ["macro", 13]],
                    ["map", "key", "LogIn", "value", ["macro", 13]],
                    ["map", "key", "welcome ad", "value", ["macro", 13]],
                    ["map", "key", "review", "value", ["macro", 13]],
                    ["map", "key", "Programs", "value", ["macro", 13]],
                    ["map", "key", "vi-beta-tools", "value", ["macro", 13]],
                    ["map", "key", "inline-message", "value", ["macro", 13]],
                    ["map", "key", "newsletters", "value", ["macro", 13]],
                    ["map", "key", "video-player-share", "value", ["macro", 13]],
                    ["map", "key", "gateway", "value", ["macro", 13]],
                    ["map", "key", "audio-player", "value", ["macro", 13]],
                    ["map", "key", "share-tools", "value", ["macro", 13]],
                    ["map", "key", "comments", "value", ["macro", 13]],
                    ["map", "key", "acm", "value", ["macro", 13]],
                    ["map", "key", "video-player", "value", ["macro", 13]],
                    ["map", "key", "first-scroll", "value", ["macro", 13]],
                    ["map", "key", "^games-prototype.*", "value", ["macro", 13]],
                    ["map", "key", "[M|m]odal", "value", ["macro", 13]],
                    ["map", "key", "settings", "value", ["macro", 13]],
                    ["map", "key", "Puzzle", "value", ["macro", 13]],
                    ["map", "key", "general", "value", ["macro", 13]],
                    ["map", "key", "gameplay", "value", ["macro", 13]],
                    ["map", "key", "^interactive.*", "value", ["macro", 13]],
                    ["map", "key", "out_bound_clicks", "value", ["macro", 13]],
                    ["map", "key", "tap-story", "value", ["macro", 13]]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.ga.eventCategory"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 15], 8, 16], "||", ["escape", ["macro", 11], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].category\u0026\u0026window.nytAnalytics.gaEvent[a].category()||", ["escape", ["macro", 16], 8, 16], "||a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.url"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "gclid",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "dclid",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 18], 8, 16], "||document.location.protocol+\"\/\/\"+document.location.host+document.location.pathname,a=\"\";", ["escape", ["macro", 19], 8, 16], "\u0026\u0026(a+=\"?gclid\\x3d\"+", ["escape", ["macro", 19], 8, 16], ");", ["escape", ["macro", 20], 8, 16], "\u0026\u0026(a+=(\"\"===a?\"?\":\"\\x26\")+\"dclid\\x3d\"+", ["escape", ["macro", 20], 8, 16], ");return\"\"===a?b:b+a})();"]
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignSource"
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignMedium"
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignName"
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignContent"
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignKeyword"
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 27],
                "vtp_name": "referrer.url"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 28], 8, 16], "\u0026\u0026\"null\"!==", ["escape", ["macro", 28], 8, 16], "?", ["escape", ["macro", 28], 8, 16], ":", ["escape", ["macro", 27], 8, 16], "})();"]
            }, {
                "function": "__c",
                "vtp_value": "1"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.CG?nytAnalytics.pagemeta.CG.toLowerCase():\"null\"})();"]
            }, {
                "function": "__c",
                "vtp_value": "2"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.SCG?nytAnalytics.pagemeta.SCG.toLowerCase():\"null\"})();"]
            }, {
                "function": "__c",
                "vtp_value": "3"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.PT?nytAnalytics.pagemeta.PT.toLowerCase():\"null\"})();"]
            }, {
                "function": "__c",
                "vtp_value": "4"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.PST?nytAnalytics.pagemeta.PST.toLowerCase():\"null\"})();"]
            }, {
                "function": "__c",
                "vtp_value": "1"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.url"
            }, {
                "function": "__c",
                "vtp_value": "2"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 12],
                "vtp_name": "asset.is_refresh"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a;(a=document.location.href)\u0026\u0026\"string\"===typeof a\u0026\u0026(a=a.replace(\/=[!#\\$%'\\*\\+\\-\\\/=\\?\\^_`\\{\\|\\}~;\\.,\"\\(\\),:;\u003C\u003E\\[\\\\\\]\\w]+(@|%40)[^.]+\\.[^\u0026]+\/g,\"\\x3demail_block\"));if(", ["escape", ["macro", 41], 8, 16], "){var b=-1\u003Ca.indexOf(\"?\")?\"\\x26\":\"?\";a+=b+\"WT.z_jog\\x3d1\"}return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "3"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.location.search;", ["escape", ["macro", 41], 8, 16], "\u0026\u0026(connector=-1\u003CcleanURL.indexOf(\"?\")?\"\\x26\":\"?\",a+=connector+\"WT.z_jog\\x3d1\");return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "4"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.section"
            }, {
                "function": "__c",
                "vtp_value": "5"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.paid_post"
            }, {
                "function": "__c",
                "vtp_value": "6"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.name"
            }, {
                "function": "__c",
                "vtp_value": "7"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.pagetype"
            }, {
                "function": "__c",
                "vtp_value": "8"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.region"
            }, {
                "function": "__c",
                "vtp_value": "9"
            }, {
                "function": "__c",
                "vtp_value": "10"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return nytAnalytics.derivedReferrer.source?nytAnalytics.derivedReferrer.source:\"null\"})();"]
            }, {
                "function": "__c",
                "vtp_value": "11"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.collection"
            }, {
                "function": "__c",
                "vtp_value": "12"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.subsection"
            }, {
                "function": "__c",
                "vtp_value": "13"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.subchannel?nytAnalytics.derivedReferrer.subchannel:\"null\";return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "14"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.derivedDesk"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 65], 8, 16], "?", ["escape", ["macro", 65], 8, 16], ":\"null\";return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "15"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.type?nytAnalytics.derivedReferrer.type:\"null\";return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "16"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.channel?nytAnalytics.derivedReferrer.channel:\"null\";return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "17"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.id"
            }, {
                "function": "__c",
                "vtp_value": "18"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.authors"
            }, {
                "function": "__c",
                "vtp_value": "19"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.headline"
            }, {
                "function": "__c",
                "vtp_value": "20"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.kicker"
            }, {
                "function": "__c",
                "vtp_value": "21"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageType"
            }, {
                "function": "__c",
                "vtp_value": "22"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.printPublishDate"
            }, {
                "function": "__c",
                "vtp_value": "23"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.section"
            }, {
                "function": "__c",
                "vtp_value": "24"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.gatewayViewed"
            }, {
                "function": "__c",
                "vtp_value": "25"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.subsection"
            }, {
                "function": "__c",
                "vtp_value": "26"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.publishedTimestamp"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 90], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 90], 8, 16], ",\"year\"):\"null\"})();"]
            }, {
                "function": "__c",
                "vtp_value": "27"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 90], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 90], 8, 16], ",\"date\"):\"null\"})();"]
            }, {
                "function": "__c",
                "vtp_value": "28"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 90], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 90], 8, 16], ",\"day\"):\"null\"})();"]
            }, {
                "function": "__c",
                "vtp_value": "29"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 90], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 90], 8, 16], ",\"hours\"):\"null\"})();"]
            }, {
                "function": "__c",
                "vtp_value": "30"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "null",
                "vtp_name": "asset.lastUpdatedTimestamp"
            }, {
                "function": "__c",
                "vtp_value": "31"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.characterCount"
            }, {
                "function": "__c",
                "vtp_value": "32"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionName"
            }, {
                "function": "__c",
                "vtp_value": "33"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionType"
            }, {
                "function": "__c",
                "vtp_value": "34"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.contentTone"
            }, {
                "function": "__c",
                "vtp_value": "35"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.series"
            }, {
                "function": "__c",
                "vtp_value": "36"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.slug"
            }, {
                "function": "__c",
                "vtp_value": "37"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.wordCount"
            }, {
                "function": "__c",
                "vtp_value": "38"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desk"
            }, {
                "function": "__c",
                "vtp_value": "39"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.typeOfMaterials"
            }, {
                "function": "__c",
                "vtp_value": "40"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceNewsOrg"
            }, {
                "function": "__c",
                "vtp_value": "41"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceUSvsIntl"
            }, {
                "function": "__c",
                "vtp_value": "42"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.name"
            }, {
                "function": "__c",
                "vtp_value": "43"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desFacets"
            }, {
                "function": "__c",
                "vtp_value": "44"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.orgFacets"
            }, {
                "function": "__c",
                "vtp_value": "45"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.perFacets"
            }, {
                "function": "__c",
                "vtp_value": "46"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.geoFacets"
            }, {
                "function": "__c",
                "vtp_value": "47"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.paidPostParameter"
            }, {
                "function": "__c",
                "vtp_value": "48"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 90], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 90], 8, 16], ",\"month\"):\"null\"})();"]
            }, {
                "function": "__c",
                "vtp_value": "49"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.wordCount"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 100\u003E", ["escape", ["macro", 137], 8, 16], "?\"blurb_under_100\":400\u003E", ["escape", ["macro", 137], 8, 16], "?\"super_short_100_399\":800\u003E", ["escape", ["macro", 137], 8, 16], "?\"short_400_799\":1200\u003E", ["escape", ["macro", 137], 8, 16], "?\"medium_800_1199\":1600\u003E=", ["escape", ["macro", 137], 8, 16], "?\"long_1200_1600\":1600\u003C", ["escape", ["macro", 137], 8, 16], "?\"heave_over_1600\":\"\"})();"]
            }, {
                "function": "__c",
                "vtp_value": "50"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageSubType"
            }, {
                "function": "__c",
                "vtp_value": "51"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.name"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 142], 8, 16], "})();"]
            }, {
                "function": "__c",
                "vtp_value": "52"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector('meta[name\\x3d\"applicationName\"]');return a?a.content:\"\"})();"]
            }, {
                "function": "__c",
                "vtp_value": "53"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.originatingDesk"
            }, {
                "function": "__c",
                "vtp_value": "54"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 65], 8, 16], "?", ["escape", ["macro", 65], 8, 16], ":\"null\";return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "55"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.isLoggedIn"
            }, {
                "function": "__c",
                "vtp_value": "56"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.type"
            }, {
                "function": "__c",
                "vtp_value": "57"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.type"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"sub\"===", ["escape", ["macro", 155], 8, 16], "?1:0})();"]
            }, {
                "function": "__c",
                "vtp_value": "58"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiId"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 158], 8, 16], "?1:0})();"]
            }, {
                "function": "__c",
                "vtp_value": "59"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiId"
            }, {
                "function": "__c",
                "vtp_value": "60"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiId"
            }, {
                "function": "__c",
                "vtp_value": "61"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "nyt-m"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var g=function(b,a){if((b=(new RegExp(b+\"\\x3d([il]{1}).([^\\x26]+)\")).exec(a))\u0026\u00263\u003C=b.length)switch(b[1]){case \"i\":return parseInt(b[2],10);case \"l\":return b[2].split(\".\").slice(1).map(function(a){return parseInt(a,10)})}return null},a,d={},e=", ["escape", ["macro", 165], 8, 16], ";if(e){var c=[\"v\",\"t\"];for(a=0;a\u003Cc.length;a++){var f=g(c[a],e);null!==f\u0026\u0026(d[c[a]]=f)}}return d})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof ", ["escape", ["macro", 166], 8, 16], "?", ["escape", ["macro", 166], 8, 16], ".v:\"\"})();"]
            }, {
                "function": "__c",
                "vtp_value": ["macro", 167]
            }, {
                "function": "__c",
                "vtp_value": "62"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.edition"
            }, {
                "function": "__c",
                "vtp_value": "63"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "nyt-a"
            }, {
                "function": "__c",
                "vtp_value": ["macro", 172]
            }, {
                "function": "__c",
                "vtp_value": "64"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.isLoggedIn"
            }, {
                "function": "__c",
                "vtp_value": "65"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.type"
            }, {
                "function": "__c",
                "vtp_value": "66"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.DMA"
            }, {
                "function": "__c",
                "vtp_value": "67"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"sub\"===", ["escape", ["macro", 155], 8, 16], "?1:0})();"]
            }, {
                "function": "__c",
                "vtp_value": "68"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.channels"
            }, {
                "function": "__c",
                "vtp_value": "69"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.savedArticles"
            }, {
                "function": "__c",
                "vtp_value": "72"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.creative"
            }, {
                "function": "__c",
                "vtp_value": "73"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.flight"
            }, {
                "function": "__c",
                "vtp_value": "74"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.slideshow.length"
            }, {
                "function": "__c",
                "vtp_value": "75"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.slideshow.currentEntry"
            }, {
                "function": "__c",
                "vtp_value": "76"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.slideshow.title"
            }, {
                "function": "__c",
                "vtp_value": "79"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.search.process"
            }, {
                "function": "__c",
                "vtp_value": "80"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.search.mood"
            }, {
                "function": "__c",
                "vtp_value": "81"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.originalURL"
            }, {
                "function": "__c",
                "vtp_value": "82"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.campaignInternal"
            }, {
                "function": "__c",
                "vtp_value": "83"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.campaignInternal"
            }, {
                "function": "__c",
                "vtp_value": "84"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.beta"
            }, {
                "function": "__c",
                "vtp_value": "85"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.audioFranchise"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.series"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 210],
                "vtp_name": "video.mData.series"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 11],
                "vtp_defaultValue": ["macro", 209],
                "vtp_map": ["list", ["map", "key", "audio-player", "value", ["macro", 211]]]
            }, {
                "function": "__c",
                "vtp_value": "86"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiCreateDate"
            }, {
                "function": "__c",
                "vtp_value": "87"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.newsletter.subscriber"
            }, {
                "function": "__c",
                "vtp_value": "88"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search.era"
            }, {
                "function": "__c",
                "vtp_value": "89"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search.genre"
            }, {
                "function": "__c",
                "vtp_value": "90"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search.subgenre"
            }, {
                "function": "__c",
                "vtp_value": "91"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.newsletter.subscribeDate"
            }, {
                "function": "__c",
                "vtp_value": "92"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.offerID"
            }, {
                "function": "__c",
                "vtp_value": "93"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscription.stopped"
            }, {
                "function": "__c",
                "vtp_value": "94"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscription.corp"
            }, {
                "function": "__c",
                "vtp_value": "95"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriptions.purchaseDate"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriptions.activeSubscriberSince"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 232], 8, 16], "||", ["escape", ["macro", 233], 8, 16], ";try{var b=nytAnalytics.formatDates(a,\"dateAlone\")}catch(c){}return b})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 234],
                "vtp_name": "user.subscriptions.purchaseDate"
            }, {
                "function": "__c",
                "vtp_value": "96"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriptions.activeBundles.0"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 237],
                "vtp_name": "user.subscriptions.bundle"
            }, {
                "function": "__c",
                "vtp_value": "97"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.bundeFilter"
            }, {
                "function": "__c",
                "vtp_value": "98"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.payflowType"
            }, {
                "function": "__c",
                "vtp_value": "99"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "market.firstSubLanding"
            }, {
                "function": "__c",
                "vtp_value": "100"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.IntGraphics"
            }, {
                "function": "__c",
                "vtp_value": "101"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.multiLingual"
            }, {
                "function": "__c",
                "vtp_value": "102"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.save_type"
            }, {
                "function": "__c",
                "vtp_value": "104"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.well.guideTitle"
            }, {
                "function": "__c",
                "vtp_value": "105"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.well.cardPosition"
            }, {
                "function": "__c",
                "vtp_value": "109"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateChannel"
            }, {
                "function": "__c",
                "vtp_value": "110"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstatePageType"
            }, {
                "function": "__c",
                "vtp_value": "111"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateModuleID"
            }, {
                "function": "__c",
                "vtp_value": "112"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateModuleType"
            }, {
                "function": "__c",
                "vtp_value": "113"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateModuleItemID"
            }, {
                "function": "__c",
                "vtp_value": "114"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.payflowsProduct"
            }, {
                "function": "__c",
                "vtp_value": "116"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "payflows.region"
            }, {
                "function": "__c",
                "vtp_value": "117"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "payflows.rate"
            }, {
                "function": "__c",
                "vtp_value": "118"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.story_form"
            }, {
                "function": "__c",
                "vtp_value": "119"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.spotlights"
            }, {
                "function": "__c",
                "vtp_value": "120"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.krux_segment"
            }, {
                "function": "__c",
                "vtp_value": "121"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.print_section"
            }, {
                "function": "__c",
                "vtp_value": "122"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.referrer"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 280],
                "vtp_name": "video.referrer"
            }, {
                "function": "__c",
                "vtp_value": "123"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.contentId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 283],
                "vtp_name": "video.contentId"
            }, {
                "function": "__c",
                "vtp_value": "124"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoAdDuration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 286],
                "vtp_name": "video.mData.videoAdDuration"
            }, {
                "function": "__c",
                "vtp_value": "125"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoAdPosition"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 289],
                "vtp_name": "video.mData.videoAdPosition"
            }, {
                "function": "__c",
                "vtp_value": "126"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoDuration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 292],
                "vtp_name": "video.mData.videoDuration"
            }, {
                "function": "__c",
                "vtp_value": "127"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.durationGroup"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 295],
                "vtp_name": "video.durationGroup"
            }, {
                "function": "__c",
                "vtp_value": "128"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.https_test"
            }, {
                "function": "__c",
                "vtp_value": "129"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.sessionStart"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=new Date(", ["escape", ["macro", 300], 8, 16], ");return a=a.getHours()})();"]
            }, {
                "function": "__c",
                "vtp_value": "130"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.www_testID"
            }, {
                "function": "__c",
                "vtp_value": "131"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.mobileweb_testID"
            }, {
                "function": "__c",
                "vtp_value": "132"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.qa_dimension_three"
            }, {
                "function": "__c",
                "vtp_value": "133"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "do.we.need.this"
            }, {
                "function": "__c",
                "vtp_value": "134"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.qa_dimension_four"
            }, {
                "function": "__c",
                "vtp_value": "135"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.column"
            }, {
                "function": "__c",
                "vtp_value": "136"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.optimizely"
            }, {
                "function": "__c",
                "vtp_value": "137"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.optimizely"
            }, {
                "function": "__c",
                "vtp_value": "138"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "media.mData.videoFranchise"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 319],
                "vtp_name": "video.mData.videoFranchise"
            }, {
                "function": "__c",
                "vtp_value": "139"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoSection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 322],
                "vtp_name": "video.mData.videoSection"
            }, {
                "function": "__c",
                "vtp_value": "140"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.adblock_enabled"
            }, {
                "function": "__c",
                "vtp_value": "141"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoPrimaryPlaylistId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 327],
                "vtp_name": "video.mData.videoPrimaryPlaylistId"
            }, {
                "function": "__c",
                "vtp_value": "142"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoPrimaryPlaylistName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 330],
                "vtp_name": "video.mData.videoPrimaryPlaylistName"
            }, {
                "function": "__c",
                "vtp_value": "143"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.listing.id"
            }, {
                "function": "__c",
                "vtp_value": "144"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.listing.price"
            }, {
                "function": "__c",
                "vtp_value": "145"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.buildingID"
            }, {
                "function": "__c",
                "vtp_value": "146"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.new"
            }, {
                "function": "__c",
                "vtp_value": "147"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.reduced"
            }, {
                "function": "__c",
                "vtp_value": "148"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.open_house"
            }, {
                "function": "__c",
                "vtp_value": "149"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newsletter.interface"
            }, {
                "function": "__c",
                "vtp_value": "150"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newsletter.subinterface"
            }, {
                "function": "__c",
                "vtp_value": "154"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.campaignID_ecommerce"
            }, {
                "function": "__c",
                "vtp_value": "160"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.url_path_filter"
            }, {
                "function": "__c",
                "vtp_value": "162"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.url"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 353],
                "vtp_name": "video.url"
            }, {
                "function": "__c",
                "vtp_value": "163"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 356],
                "vtp_name": "video.mData.videoType"
            }, {
                "function": "__c",
                "vtp_value": "164"
            }, {
                "function": "__c",
                "vtp_value": ["macro", 172]
            }, {
                "function": "__c",
                "vtp_value": "166"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.eligibility"
            }, {
                "function": "__c",
                "vtp_value": "167"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.resolution_type"
            }, {
                "function": "__c",
                "vtp_value": "168"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.redelivery_request"
            }, {
                "function": "__c",
                "vtp_value": "169"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.user_state"
            }, {
                "function": "__c",
                "vtp_value": "172"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.program.breakpoint.initial"
            }, {
                "function": "__c",
                "vtp_value": "173"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 369],
                "vtp_name": "presentation.program.breakpoint.rendered"
            }, {
                "function": "__c",
                "vtp_value": "179"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.contentId"
            }, {
                "function": "__c",
                "vtp_value": "180"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoName"
            }, {
                "function": "__c",
                "vtp_value": "181"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoType"
            }, {
                "function": "__c",
                "vtp_value": "182"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.section"
            }, {
                "function": "__c",
                "vtp_value": "183"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.subSection"
            }, {
                "function": "__c",
                "vtp_value": "184"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.duration"
            }, {
                "function": "__c",
                "vtp_value": "185"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.durationGroup"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){notprod=!document.location.hostname.match(\/nytimes\\.com\/)||!!document.location.hostname.match(\/test\\.|dev\\.|stg\\.\/);switch(", ["escape", ["macro", 142], 8, 16], "){case \"nyt-help\":return\"UA-58630905-28\";default:return notprod?\"UA-58630905-7\":\"UA-58630905-2\"}})();"]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "cookieName", "value", "walley"],
                    ["map", "fieldName", "location", "value", ["macro", 21]],
                    ["map", "fieldName", "campaignSource", "value", ["macro", 22]],
                    ["map", "fieldName", "campaignMedium", "value", ["macro", 23]],
                    ["map", "fieldName", "campaignName", "value", ["macro", 24]],
                    ["map", "fieldName", "campaignContent", "value", ["macro", 25]],
                    ["map", "fieldName", "campaignKeyword", "value", ["macro", 26]],
                    ["map", "fieldName", "referrer", "value", ["macro", 29]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_contentGroup": ["list", ["map", "index", ["macro", 30], "group", ["macro", 31]],
                    ["map", "index", ["macro", 32], "group", ["macro", 33]],
                    ["map", "index", ["macro", 34], "group", ["macro", 35]],
                    ["map", "index", ["macro", 36], "group", ["macro", 37]]
                ],
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 38], "dimension", ["macro", 39]],
                    ["map", "index", ["macro", 40], "dimension", ["macro", 42]],
                    ["map", "index", ["macro", 43], "dimension", ["macro", 44]],
                    ["map", "index", ["macro", 45], "dimension", ["macro", 46]],
                    ["map", "index", ["macro", 47], "dimension", ["macro", 48]],
                    ["map", "index", ["macro", 49], "dimension", ["macro", 50]],
                    ["map", "index", ["macro", 51], "dimension", ["macro", 52]],
                    ["map", "index", ["macro", 53], "dimension", ["macro", 54]],
                    ["map", "index", ["macro", 55], "dimension", ["macro", 55]],
                    ["map", "index", ["macro", 56], "dimension", ["macro", 57]],
                    ["map", "index", ["macro", 58], "dimension", ["macro", 59]],
                    ["map", "index", ["macro", 60], "dimension", ["macro", 61]],
                    ["map", "index", ["macro", 62], "dimension", ["macro", 63]],
                    ["map", "index", ["macro", 64], "dimension", ["macro", 66]],
                    ["map", "index", ["macro", 67], "dimension", ["macro", 68]],
                    ["map", "index", ["macro", 69], "dimension", ["macro", 70]],
                    ["map", "index", ["macro", 71], "dimension", ["macro", 72]],
                    ["map", "index", ["macro", 73], "dimension", ["macro", 74]],
                    ["map", "index", ["macro", 75], "dimension", ["macro", 76]],
                    ["map", "index", ["macro", 77], "dimension", ["macro", 78]],
                    ["map", "index", ["macro", 79], "dimension", ["macro", 80]],
                    ["map", "index", ["macro", 81], "dimension", ["macro", 82]],
                    ["map", "index", ["macro", 83], "dimension", ["macro", 84]],
                    ["map", "index", ["macro", 85], "dimension", ["macro", 86]],
                    ["map", "index", ["macro", 87], "dimension", ["macro", 88]],
                    ["map", "index", ["macro", 89], "dimension", ["macro", 91]],
                    ["map", "index", ["macro", 92], "dimension", ["macro", 93]],
                    ["map", "index", ["macro", 94], "dimension", ["macro", 95]],
                    ["map", "index", ["macro", 96], "dimension", ["macro", 97]],
                    ["map", "index", ["macro", 98], "dimension", ["macro", 99]],
                    ["map", "index", ["macro", 100], "dimension", ["macro", 101]],
                    ["map", "index", ["macro", 102], "dimension", ["macro", 103]],
                    ["map", "index", ["macro", 104], "dimension", ["macro", 105]],
                    ["map", "index", ["macro", 106], "dimension", ["macro", 107]],
                    ["map", "index", ["macro", 108], "dimension", ["macro", 109]],
                    ["map", "index", ["macro", 110], "dimension", ["macro", 111]],
                    ["map", "index", ["macro", 112], "dimension", ["macro", 113]],
                    ["map", "index", ["macro", 114], "dimension", ["macro", 115]],
                    ["map", "index", ["macro", 116], "dimension", ["macro", 117]],
                    ["map", "index", ["macro", 118], "dimension", ["macro", 119]],
                    ["map", "index", ["macro", 120], "dimension", ["macro", 121]],
                    ["map", "index", ["macro", 122], "dimension", ["macro", 123]],
                    ["map", "index", ["macro", 124], "dimension", ["macro", 125]],
                    ["map", "index", ["macro", 126], "dimension", ["macro", 127]],
                    ["map", "index", ["macro", 128], "dimension", ["macro", 129]],
                    ["map", "index", ["macro", 130], "dimension", ["macro", 131]],
                    ["map", "index", ["macro", 132], "dimension", ["macro", 133]],
                    ["map", "index", ["macro", 134], "dimension", ["macro", 135]],
                    ["map", "index", ["macro", 136], "dimension", ["macro", 138]],
                    ["map", "index", ["macro", 139], "dimension", ["macro", 140]],
                    ["map", "index", ["macro", 141], "dimension", ["macro", 143]],
                    ["map", "index", ["macro", 144], "dimension", ["macro", 145]],
                    ["map", "index", ["macro", 146], "dimension", ["macro", 147]],
                    ["map", "index", ["macro", 148], "dimension", ["macro", 149]],
                    ["map", "index", ["macro", 150], "dimension", ["macro", 151]],
                    ["map", "index", ["macro", 152], "dimension", ["macro", 153]],
                    ["map", "index", ["macro", 154], "dimension", ["macro", 156]],
                    ["map", "index", ["macro", 157], "dimension", ["macro", 159]],
                    ["map", "index", ["macro", 160], "dimension", ["macro", 161]],
                    ["map", "index", ["macro", 162], "dimension", ["macro", 163]],
                    ["map", "index", ["macro", 164], "dimension", ["macro", 168]],
                    ["map", "index", ["macro", 169], "dimension", ["macro", 170]],
                    ["map", "index", ["macro", 171], "dimension", ["macro", 173]],
                    ["map", "index", ["macro", 174], "dimension", ["macro", 175]],
                    ["map", "index", ["macro", 176], "dimension", ["macro", 177]],
                    ["map", "index", ["macro", 178], "dimension", ["macro", 179]],
                    ["map", "index", ["macro", 180], "dimension", ["macro", 181]],
                    ["map", "index", ["macro", 182], "dimension", ["macro", 183]],
                    ["map", "index", ["macro", 184], "dimension", ["macro", 185]],
                    ["map", "index", ["macro", 186], "dimension", ["macro", 187]],
                    ["map", "index", ["macro", 188], "dimension", ["macro", 189]],
                    ["map", "index", ["macro", 190], "dimension", ["macro", 191]],
                    ["map", "index", ["macro", 192], "dimension", ["macro", 193]],
                    ["map", "index", ["macro", 194], "dimension", ["macro", 195]],
                    ["map", "index", ["macro", 196], "dimension", ["macro", 197]],
                    ["map", "index", ["macro", 198], "dimension", ["macro", 199]],
                    ["map", "index", ["macro", 200], "dimension", ["macro", 201]],
                    ["map", "index", ["macro", 202], "dimension", ["macro", 203]],
                    ["map", "index", ["macro", 204], "dimension", ["macro", 205]],
                    ["map", "index", ["macro", 206], "dimension", ["macro", 207]],
                    ["map", "index", ["macro", 208], "dimension", ["macro", 212]],
                    ["map", "index", ["macro", 213], "dimension", ["macro", 214]],
                    ["map", "index", ["macro", 215], "dimension", ["macro", 216]],
                    ["map", "index", ["macro", 217], "dimension", ["macro", 218]],
                    ["map", "index", ["macro", 219], "dimension", ["macro", 220]],
                    ["map", "index", ["macro", 221], "dimension", ["macro", 222]],
                    ["map", "index", ["macro", 223], "dimension", ["macro", 224]],
                    ["map", "index", ["macro", 225], "dimension", ["macro", 226]],
                    ["map", "index", ["macro", 227], "dimension", ["macro", 228]],
                    ["map", "index", ["macro", 229], "dimension", ["macro", 230]],
                    ["map", "index", ["macro", 231], "dimension", ["macro", 235]],
                    ["map", "index", ["macro", 236], "dimension", ["macro", 238]],
                    ["map", "index", ["macro", 239], "dimension", ["macro", 240]],
                    ["map", "index", ["macro", 241], "dimension", ["macro", 242]],
                    ["map", "index", ["macro", 243], "dimension", ["macro", 244]],
                    ["map", "index", ["macro", 245], "dimension", ["macro", 246]],
                    ["map", "index", ["macro", 247], "dimension", ["macro", 248]],
                    ["map", "index", ["macro", 249], "dimension", ["macro", 250]],
                    ["map", "index", ["macro", 251], "dimension", ["macro", 252]],
                    ["map", "index", ["macro", 253], "dimension", ["macro", 254]],
                    ["map", "index", ["macro", 255], "dimension", ["macro", 256]],
                    ["map", "index", ["macro", 257], "dimension", ["macro", 258]],
                    ["map", "index", ["macro", 259], "dimension", ["macro", 260]],
                    ["map", "index", ["macro", 261], "dimension", ["macro", 262]],
                    ["map", "index", ["macro", 263], "dimension", ["macro", 264]],
                    ["map", "index", ["macro", 265], "dimension", ["macro", 266]],
                    ["map", "index", ["macro", 267], "dimension", ["macro", 268]],
                    ["map", "index", ["macro", 269], "dimension", ["macro", 270]],
                    ["map", "index", ["macro", 271], "dimension", ["macro", 272]],
                    ["map", "index", ["macro", 273], "dimension", ["macro", 274]],
                    ["map", "index", ["macro", 275], "dimension", ["macro", 276]],
                    ["map", "index", ["macro", 277], "dimension", ["macro", 278]],
                    ["map", "index", ["macro", 279], "dimension", ["macro", 281]],
                    ["map", "index", ["macro", 282], "dimension", ["macro", 284]],
                    ["map", "index", ["macro", 285], "dimension", ["macro", 287]],
                    ["map", "index", ["macro", 288], "dimension", ["macro", 290]],
                    ["map", "index", ["macro", 291], "dimension", ["macro", 293]],
                    ["map", "index", ["macro", 294], "dimension", ["macro", 296]],
                    ["map", "index", ["macro", 297], "dimension", ["macro", 298]],
                    ["map", "index", ["macro", 299], "dimension", ["macro", 301]],
                    ["map", "index", ["macro", 302], "dimension", ["macro", 303]],
                    ["map", "index", ["macro", 304], "dimension", ["macro", 305]],
                    ["map", "index", ["macro", 306], "dimension", ["macro", 307]],
                    ["map", "index", ["macro", 308], "dimension", ["macro", 309]],
                    ["map", "index", ["macro", 310], "dimension", ["macro", 311]],
                    ["map", "index", ["macro", 312], "dimension", ["macro", 313]],
                    ["map", "index", ["macro", 314], "dimension", ["macro", 315]],
                    ["map", "index", ["macro", 316], "dimension", ["macro", 317]],
                    ["map", "index", ["macro", 318], "dimension", ["macro", 320]],
                    ["map", "index", ["macro", 321], "dimension", ["macro", 323]],
                    ["map", "index", ["macro", 324], "dimension", ["macro", 325]],
                    ["map", "index", ["macro", 326], "dimension", ["macro", 328]],
                    ["map", "index", ["macro", 329], "dimension", ["macro", 331]],
                    ["map", "index", ["macro", 332], "dimension", ["macro", 333]],
                    ["map", "index", ["macro", 334], "dimension", ["macro", 335]],
                    ["map", "index", ["macro", 336], "dimension", ["macro", 337]],
                    ["map", "index", ["macro", 338], "dimension", ["macro", 339]],
                    ["map", "index", ["macro", 340], "dimension", ["macro", 341]],
                    ["map", "index", ["macro", 342], "dimension", ["macro", 343]],
                    ["map", "index", ["macro", 344], "dimension", ["macro", 345]],
                    ["map", "index", ["macro", 346], "dimension", ["macro", 347]],
                    ["map", "index", ["macro", 348], "dimension", ["macro", 349]],
                    ["map", "index", ["macro", 350], "dimension", ["macro", 351]],
                    ["map", "index", ["macro", 352], "dimension", ["macro", 354]],
                    ["map", "index", ["macro", 355], "dimension", ["macro", 357]],
                    ["map", "index", ["macro", 358], "dimension", ["macro", 359]],
                    ["map", "index", ["macro", 360], "dimension", ["macro", 361]],
                    ["map", "index", ["macro", 362], "dimension", ["macro", 363]],
                    ["map", "index", ["macro", 364], "dimension", ["macro", 365]],
                    ["map", "index", ["macro", 366], "dimension", ["macro", 367]],
                    ["map", "index", ["macro", 368], "dimension", ["macro", 369]],
                    ["map", "index", ["macro", 370], "dimension", ["macro", 371]],
                    ["map", "index", ["macro", 372], "dimension", ["macro", 373]],
                    ["map", "index", ["macro", 374], "dimension", ["macro", 375]],
                    ["map", "index", ["macro", 376], "dimension", ["macro", 377]],
                    ["map", "index", ["macro", 378], "dimension", ["macro", 379]],
                    ["map", "index", ["macro", 380], "dimension", ["macro", 381]],
                    ["map", "index", ["macro", 382], "dimension", ["macro", 383]],
                    ["map", "index", ["macro", 384], "dimension", ["macro", 385]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 386],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "module.ga.eventAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.element.name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.element.name"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 15], 8, 16], "||", ["escape", ["macro", 11], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].action\u0026\u0026window.nytAnalytics.gaEvent[a].action()||", ["escape", ["macro", 388], 8, 16], "||", ["escape", ["macro", 389], 8, 16], "||", ["escape", ["macro", 390], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.ga.eventLabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.region"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.element.label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.label"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 15], 8, 16], "||", ["escape", ["macro", 11], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].label\u0026\u0026window.nytAnalytics.gaEvent[a].label()||", ["escape", ["macro", 392], 8, 16], "||", ["escape", ["macro", 393], 8, 16], "||", ["escape", ["macro", 394], 8, 16], "||", ["escape", ["macro", 395], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.ga.eventValue"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 15], 8, 16], "||", ["escape", ["macro", 11], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].value\u0026\u0026window.nytAnalytics.gaEvent[a].value()||", ["escape", ["macro", 397], 8, 16], "})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var c=", ["escape", ["macro", 394], 8, 16], ",a=", ["escape", ["macro", 390], 8, 16], ",b=", ["escape", ["macro", 11], 8, 16], ";if(\"share-tools\"===b\u0026\u0026a){if(-1\u003Ca.indexOf(\"facebook\"))return 14;if(-1\u003Ca.indexOf(\"twitter\"))return 15;if(-1\u003Ca.indexOf(\"email\"))return 16;if(-1\u003Ca.indexOf(\"pinterest\"))return 17;if(-1\u003Ca.indexOf(\"linkedin\"))return 18;if(-1\u003Ca.indexOf(\"google\"))return 19;if(-1\u003Ca.indexOf(\"reddit\"))return 20;if(-1\u003Ca.indexOf(\"whatsapp\"))return 21;if(-1\u003Ca.indexOf(\"save\"))return 22;if(-1\u003Ca.indexOf(\"permalink\"))return 23}if(\"newsletters\"===\nb\u0026\u0026\"subscribe\"===a)return-1\u003Cc.indexOf(\"opt in\")?10:6;if(\"comments\"===b){if(\"submit-new\"===a)return 11;if(\"submit-reply\"===a)return 33}return\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 1})();"]
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.eventName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 402],
                "vtp_name": "video.eventName"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoNonInteractions=window.nytAnalytics.videoNonInteractions||{\"cherry-api-request-error\":!0,\"fw-admanager-load-error\":!0,\"qos-library-load-failure\":!0,\"rendition-not-found\":!0,\"player-load\":!0,\"video-inview\":!0,\"imax-countdown-pause\":!0,\"imax-countdown-complete\":!0};return\"mediaEvent\"===", ["escape", ["macro", 401], 8, 16], "?window.nytAnalytics.videoNonInteractions[", ["escape", ["macro", 402], 8, 16], "]||!1:window.nytAnalytics.videoNonInteractions[", ["escape", ["macro", 403], 8, 16], "]||\n!1})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoDeliveryMethod"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.version"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoDeliveryMethod"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 406],
                "vtp_name": "video.version"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"mediaEvent\"===", ["escape", ["macro", 401], 8, 16], "?(\"live\"===", ["escape", ["macro", 405], 8, 16], "?\"Live | \":\"Video | \")+", ["escape", ["macro", 406], 8, 16], ":(\"live\"===", ["escape", ["macro", 407], 8, 16], "?\"Live | \":\"Video | \")+", ["escape", ["macro", 408], 8, 16], "})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoActions=window.nytAnalytics.videoActions||{\"ad-complete\":\"ad complete\",\"ad-pause\":\"ad pause\",\"ad-resume\":\"ad resume\",\"ad-start\":\"ad start\",\"exit-fullscreen\":\"exit fullscreen\",\"go-fullscreen\":\"go fullscreen\",\"hd-off\":\"hd off\",\"hd-on\":\"hd on\",pause:\"pause\",resume:\"resume\",\"skip-ad\":\"ad skip\",\"video-load\":\"video load\",\"video-inview\":\"video inview\",\"auto-play-next\":\"autoplay next\",\"auto-play-start\":\"autoplay start\",\"percent-25-viewed\":\"viewed: 25%\",\n\"percent-50-viewed\":\"viewed: 50%\",\"percent-75-viewed\":\"viewed: 75%\",\"3-seconds-viewed\":\"3-seconds-viewed\",\"30-seconds-viewed\":\"30-seconds-viewed\",\"360-drag-start\":\"360-drag-start\",\"360-drag-stop\":\"360-drag-stop\",\"360-compass-click\":\"360-compass-click\",\"share-embed\":\"share: embed\",\"share-facebook\":\"share: facebook\",\"share-twitter\":\"share: twitter\",seek:\"seek\",\"user-play\":\"user play\",\"video-complete\":\"viewed:100%\",\"media-error\":\"media-error\",\"cherry-api-request-error\":\"cherry-api-request-error\",\"fw-admanager-load-error\":\"fw-admanager-load-error\",\n\"qos-library-load-failure\":\"qos-library-load-failure\",\"rendition-not-found\":\"rendition-not-found\",\"player-load\":\"player load\",\"imax-countdown-pause\":\"imax-countdown-pause\",\"imax-countdown-complete\":\"imax-countdown-complete\"};return\"mediaEvent\"===", ["escape", ["macro", 401], 8, 16], "?window.nytAnalytics.videoActions[", ["escape", ["macro", 402], 8, 16], "]||", ["escape", ["macro", 402], 8, 16], ":window.nytAnalytics.videoActions[", ["escape", ["macro", 403], 8, 16], "]||", ["escape", ["macro", 403], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "media.mData.videoName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 411],
                "vtp_name": "video.mData.videoName"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"mediaEvent\"===", ["escape", ["macro", 401], 8, 16], "?decodeURIComponent(", ["escape", ["macro", 411], 8, 16], "):decodeURIComponent(", ["escape", ["macro", 412], 8, 16], ")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoCustomMetrics=window.nytAnalytics.videoCustomMetrics||{\"auto-play-next\":32,\"auto-play-start\":31,\"percent-25-viewed\":24,\"percent-50-viewed\":25,\"percent-75-viewed\":26,\"3-seconds-viewed\":42,\"30-seconds-viewed\":43,\"360-drag-start\":58,\"360-drag-stop\":59,\"360-compass-click\":60,\"share-embed\":4,\"share-facebook\":4,\"share-twitter\":4,\"user-play\":1,\"video-complete\":3,\"user-play-audio\":34,\"percent-25-heard\":35,\"percent-50-heard\":36,\n\"percent-75-heard\":37,\"audio-complete\":38,\"audio-inview\":63};return window.nytAnalytics.videoCustomMetrics[", ["escape", ["macro", 403], 8, 16], "]||\"\"})();"]
            }, {
                "function": "__r"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.gaAction"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\/OS 10_3_3.*CriOS\\\/[\\d\\.]+ Mobile\/.test(navigator.userAgent)?1:0})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=navigator.userAgent;if(!\/.*(iphone|ipad|ipod|silk).*$\/i.test(a)\u0026\u0026(a=\/Mac OS X (\\d+)[_\\.](\\d+)([_\\.](\\d+))?\/.exec(a))\u0026\u00265\u003C=a.length){var b=parseInt(a[1],10);return 10\u003Eb||10===b\u0026\u00269\u003E=parseInt(a[2],10)?1:0}return 0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.watSegs"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.nytdOtherData.subscriptions.0.bundle"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.p"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.adv"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.c1"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.c2"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.c3"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.hit.hitType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventValue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventCategory"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.metric0Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.metric1Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.metric2Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventLabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "eventData.hit.dimension0Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.dimension0Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "eventData.hit.dimension1Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.dimension1Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "eventData.hit.dimension2Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.dimension2Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.propensity.engagementLevel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 172],
                "vtp_name": "session.etAgentId"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "register",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__t"
            }, {
                "function": "__c",
                "vtp_value": "nzcub"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 11],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": ["macro", 12],
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "dock", "value", ["macro", 13]],
                    ["map", "key", "gateway", "value", ["macro", 13]]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "media.state"
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "DL.user.retentionSegment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "DL.user.subscriberInfo.coreDigiBundle"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "DL.user.subscriberInfo.coreHDBundle"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "gtm.newUrlFragment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "gtm.oldUrlFragment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "user.id"
            }, {
                "function": "__cid"
            }, {
                "function": "__ctv"
            }, {
                "function": "__c",
                "vtp_value": "Production"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"", ["escape", ["macro", 457], 7], "-", ["escape", ["macro", 458], 7], "-", ["escape", ["macro", 459], 7], "\"})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.trigger"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.context"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.element.label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.slug"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.progress"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newsletter"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "module"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return{}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 472],
                "vtp_name": "viewport"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 472],
                "vtp_name": "pageview.performance"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "presentation"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "5000",
                "vtp_name": "pageview.heartbeat.heartbeatInterval"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return navigator.userAgent.match(\/Googlebot|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video\/i)?1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.progress.timeInGame"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sectionContent"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.subsection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.headline"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.authors"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.section"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.geofacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 485],
                "vtp_name": "asset.geoFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.orgFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.perFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriberInfo"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.nytdOtherData"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.isLoggedIn"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "b2b_cig_opt"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "edu_cig_opt"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.column"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.emotions"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.actioniq.audience_split_ids"
            }, {
                "function": "__u",
                "vtp_stripWww": false,
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 1;if(", ["escape", ["macro", 11], 8, 16], "||", ["escape", ["macro", 461], 8, 16], "===\"module\")return 1;if(", ["escape", ["macro", 499], 8, 16], ".indexOf(\"alpha\")\u003E-1)return 1;return 0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "card"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "block"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "pageview.ad"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 11],
                "vtp_defaultValue": ["macro", 12],
                "vtp_map": ["list", ["map", "key", "gateway", "value", ["macro", 13]],
                    ["map", "key", "article_complete", "value", ["macro", 13]],
                    ["map", "key", "mini-modal", "value", ["macro", 13]],
                    ["map", "key", "game-modal", "value", ["macro", 13]],
                    ["map", "key", "regiwall", "value", ["macro", 13]],
                    ["map", "key", "bar1", "value", ["macro", 13]],
                    ["map", "key", "growl", "value", ["macro", 13]],
                    ["map", "key", "meter", "value", ["macro", 13]]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 472],
                "vtp_name": "media"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 505],
                "vtp_name": "video"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "abtest.test"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "abtest.variant"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "slideshow"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 459],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "https:\/\/a.et.stg.nytimes.com",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "Production", "value", "https:\/\/a.et.nytimes.com"]]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 142], 8, 16], "||(document.querySelector(\"meta[name\\x3dsourceApp]\")||{}).content;a||(a=\/parenting\\.\/.test(document.location.host)?\"nyt-parenting\":\/^\\\/puzzles\\\/?|^\\\/crosswords\\\/?\/.test(document.location.pathname)?\"games-crosswords\":\/dg-cookie-policy\/.test(document.location.pathname)||\/help.nytimes.com\/.test(document.location.host)?\"help\":\"nyt-vi\");return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 472],
                "vtp_name": "asset"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 472],
                "vtp_name": "session"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 472],
                "vtp_name": "user"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "version"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return{asset:", ["escape", ["macro", 512], 8, 16], ",session:", ["escape", ["macro", 513], 8, 16], ",user:", ["escape", ["macro", 514], 8, 16], ",version:", ["escape", ["macro", 515], 8, 16], "}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "allocs"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 517],
                "vtp_name": "abtest.batch"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return nyt_et.get_pageview_id()})();"]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 459],
                "vtp_defaultValue": "https:\/\/et.stg.nytimes.com\/",
                "vtp_map": ["list", ["map", "key", "Production", "value", "https:\/\/et.nytimes.com\/"]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "payload"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "referrer.url"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.environment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.characterCount"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.contentTone"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desk"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.edition"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.kicker"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.lastUpdatedTimestamp"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.originatingDesk"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.printPublishDate"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.series"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceNewsOrg"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceUSvsIntl"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.geoFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.typeOfMaterials"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.channel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.collection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.region"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.pagetype"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.source"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.subchannel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.paidPostParameter"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageSubType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.DMA"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.isLoggedIn"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 283],
                "vtp_name": "video.contentId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 295],
                "vtp_name": "video.durationGroup"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 286],
                "vtp_name": "video.mData.videoAdDuration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoAdPosition"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoDuration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoFranchise"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoPrimaryPlaylistId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoPrimaryPlaylistName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoSection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.referrer"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.url"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 18], 8, 16], "||document.location.protocol+\"\/\/\"+document.location.host+document.location.pathname})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pageview.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 561],
                "vtp_name": "interaction.dfp_page_view_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "error.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "error.errors"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 564], 8, 16], "||{};return JSON.stringify(a).substr(0,128)})();"]
            }, {
                "function": "__c",
                "vtp_value": "70"
            }, {
                "function": "__c",
                "vtp_value": "71"
            }, {
                "function": "__c",
                "vtp_value": "77"
            }, {
                "function": "__c",
                "vtp_value": "78"
            }, {
                "function": "__c",
                "vtp_value": "103"
            }, {
                "function": "__c",
                "vtp_value": "106"
            }, {
                "function": "__c",
                "vtp_value": "107"
            }, {
                "function": "__c",
                "vtp_value": "108"
            }, {
                "function": "__c",
                "vtp_value": "115"
            }, {
                "function": "__c",
                "vtp_value": "151"
            }, {
                "function": "__c",
                "vtp_value": "152"
            }, {
                "function": "__c",
                "vtp_value": "153"
            }, {
                "function": "__c",
                "vtp_value": "155"
            }, {
                "function": "__c",
                "vtp_value": "156"
            }, {
                "function": "__c",
                "vtp_value": "157"
            }, {
                "function": "__c",
                "vtp_value": "158"
            }, {
                "function": "__c",
                "vtp_value": "159"
            }, {
                "function": "__c",
                "vtp_value": "160"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return Date.now()})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.pageIndex"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.avgSessionTime"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.sessionIndex"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.tracking.firstReferrer"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return navigator.userAgent.match(\/iPhone|iPad\/i)?1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "card.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "pageview.heartbeat"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.tracking.activeDays"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriptions"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.metric0Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.metric2Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.hit.customMetrics"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.hit.customMetric"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.metric1Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.region"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 427],
                "vtp_name": "abtest.url"
            }, {
                "function": "__c",
                "vtp_value": "nzcu0"
            }, {
                "function": "__d",
                "vtp_elementSelector": "html",
                "vtp_attributeName": "data-nyt-ab",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return encodeURIComponent(", ["escape", ["macro", 427], 8, 16], ")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return encodeURIComponent(", ["escape", ["macro", 27], 8, 16], ")})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "presentation.program.breakpoint.initial"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 607],
                "vtp_name": "presentation.program.breakpoint.rendered"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!!(window\u0026\u0026window.NYTD\u0026\u0026window.NYTD.Abra)})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriptions.subscriberType"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!1})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.actioniq"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriberInfo.newsletterList"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!1})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "c1_val"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "c2_val"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "c3_val"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "c4_val"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "c5_val"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "referrer",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__r"
            }, {
                "function": "__hid"
            }],
            "tags": [{
                "function": "__html",
                "priority": 2000,
                "metadata": ["map"],
                "consent": ["list"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c=window.nytAnalytics=window.nytAnalytics||{},f=function(a){return 10\u003Ea?\"0\"+a:a},g=function(a){var b=-5;if(10\u003Ea.getUTCMonth()\u0026\u00262\u003Ca.getUTCMonth())b=-4;else if(2===a.getUTCMonth()){var d=new Date(a.getUTCFullYear(),2,8,-5);d=0===d.getUTCDay()?8:15-d.getUTCDay();if(a.getUTCDate()\u003Ed||a.getUTCDate()===d\u0026\u00266\u003Ca.getUTCHours())b=-4}else 10===a.getUTCMonth()\u0026\u0026(a.getUTCFullYear(),d=0===d.getUTCDay()?1:8-d.getUTCDay(),a.getUTCDate()\u003Cd||a.getUTCDate()===d\u0026\u00267\u003Ea.getUTCHours())\u0026\u0026(b=-4);return b},h=\n\"Sunday Monday Tuesday Wednesday Thursday Friday Saturday\".split(\" \"),k=\"January February March April May June July August September October November December\".split(\" \");c.formattedDates=c.formattedDates||{};c.formatDates=function(a,b){var d=this.formattedDates;if(!a||!b)return\"\";if(\"undefined\"===typeof d[a]){var e=new Date(a);if(\"Invalid Date\"==e)return\"\";e.setTime(a+36E5*g(e));d[a]={year:e.getUTCFullYear(),date:[e.getUTCFullYear(),f(e.getUTCMonth()+1),f(e.getUTCDate()),f(e.getUTCHours())].join(\"-\"),\ndateAlone:[e.getUTCFullYear(),f(e.getUTCMonth()+1),f(e.getUTCDate())].join(\"-\"),day:h[e.getUTCDay()],hours:f(e.getUTCHours()),month:k[e.getUTCMonth()]}}return d[a][b]};c.resetPage=function(){this.currQuartile=this.maxQuartile=0;this.scrollComplete=this.scrollStart=!1;this.activeTime=0;this.maxViewport={}};c.resetPage();c.hitQuartile=function(a){var b=this.getData(\"viewport.documentHeight\")||document.getElementById(\"app\").clientHeight;b\/=4;this.currQuartile=25*Math.floor(a\/b);return this.currQuartile\u003E\nthis.maxQuartile?(this.maxQuartile=this.currQuartile,!0):!1};c.getMaxViewport=function(a){var b=this.maxViewport;if(!b.scrollTop||!b.height||!b.width||(a.scrollTop+a.height)*a.width\u003E(b.scrollTop+b.height)*b.width)this.maxViewport=JSON.parse(JSON.stringify(a));return this.maxViewport};c.pagemeta=function(){var a,b={},d=document.getElementsByTagName(\"meta\");for(a=d.length-1;0\u003C=a;a--)b[d[a].name]=d[a].content;return b}();c.heartbeat=function(a){this.activeTime=this.activeTime||0;this.activeTime+=a.heartbeatInterval;\n(a=a.heartbeatInterval\u0026\u0026(3E4\u003E=this.activeTime||12E4\u003E=this.activeTime\u0026\u00260===this.activeTime%(2*a.heartbeatInterval)||3E5\u003E=this.activeTime\u0026\u00260===this.activeTime%(4*a.heartbeatInterval)||3E5\u003Cthis.activeTime\u0026\u002618E5\u003E=this.activeTime\u0026\u00260===this.activeTime%(6*a.heartbeatInterval)))\u0026\u0026\"function\"==typeof nyt_et\u0026\u0026nyt_et(\"send\",{subject:\"page_update\",activeTime:this.activeTime,gtm:", ["escape", ["macro", 460], 8, 16], "})};c.interaction=function(a){if(\"function\"===typeof nyt_et){var b={subject:\"interaction\",gtm:", ["escape", ["macro", 460], 8, 16], "};\na.eventData\u0026\u0026(b.eventData=a.eventData);a.module\u0026\u0026(b.moduleObj=a.module,\"object\"===typeof b.moduleObj.element\u0026\u0026\"undefined\"!==typeof b.moduleObj.element.label\u0026\u0026(b.moduleObj.element.label=b.moduleObj.element.label.toString()));a.card\u0026\u0026(b.cardObj=a.card);a.block\u0026\u0026(b.blockObj=a.block);a.newsletter\u0026\u0026(b.newsletter=a.newsletter);nyt_et(\"send\",JSON.parse(JSON.stringify(b)))}};c.performance=function(a){\"function\"==typeof nyt_et\u0026\u0026(a={subject:\"page_update\",performance:a.performance,gtm:", ["escape", ["macro", 460], 8, 16], "},\nc.exitPriority?(a.eventData={type:\"ob_click\"},nyt_et(\"send\",a)):nyt_et(a))};c.impression=function(a,b){var d={event:\"impression\"},e=!1;a.module\u0026\u0026(d.moduleObj=JSON.parse(JSON.stringify(a.module)),e=!0);a.card\u0026\u0026(d.cardObj=JSON.parse(JSON.stringify(a.card)),e=!0);a.block\u0026\u0026(d.blockObj=JSON.parse(JSON.stringify(a.block)),e=!0);a.eventData\u0026\u0026(d.eventData=JSON.parse(JSON.stringify(a.eventData)),e=!0);a.pageview_ad\u0026\u0026(d.adObj=JSON.parse(JSON.stringify(a.pageview_ad)),e=!0);b\u0026\u0026(d.priority=!0);\"function\"==typeof nyt_et\u0026\u0026\ne\u0026\u0026(d.subject=\"impression\",d.gtm=", ["escape", ["macro", 460], 8, 16], ",b?nyt_et(\"send\",d):nyt_et(d));dataLayer.push({module:null,card:null,block:null,eventData:null,pageview:{ad:null}})};c.scrolling=function(a){a=a.viewport;var b=a.scrollTop+a.height,d=!1;a.activeTime=this.activeTime;c.scrollStart||(d=c.scrollStart=!0,dataLayer.push({event:\"gaScrollEvent\",eventData:{gaAction:\"scroll_start\"}}));c.hitQuartile(b)\u0026\u0026100===c.maxQuartile\u0026\u0026dataLayer.push({event:\"gaScrollEvent\",eventData:{gaAction:\"page_complete\"}});\"function\"==\ntypeof nyt_et\u0026\u0026(nyt_et({subject:\"page_update\",viewport:a,gtm:", ["escape", ["macro", 460], 8, 16], "}),d\u0026\u0026nyt_et(\"send\",{subject:\"interaction\",gtm:", ["escape", ["macro", 460], 8, 16], ",eventData:{trigger:\"module\",type:\"scroll\"},moduleObj:{name:\"scroll\",element:{name:\"first-scroll\"}}}))};c.slideshow=function(a){var b={};a.slideshow\u0026\u0026(\"function\"==typeof nyt_et\u0026\u0026(b.slideshowObj=JSON.parse(JSON.stringify(a.slideshow)),b.subject=\"page_update\",b.gtm=", ["escape", ["macro", 460], 8, 16], ",nyt_et(\"send\",b)),dataLayer.push({slideshow:null}))};c.getData=function(a){return(a=\ngoogle_tag_manager[", ["escape", ["macro", 457], 8, 16], "].dataLayer.get(a))?\"object\"!==typeof a?a:JSON.parse(JSON.stringify(a)):\"\"};c.gaEvent={};c.gaEvent[\"see more\"]={category:function(){return c.getData(\"presentation.pageType\")+\" - \"+c.getData(\"interaction.type\")},action:function(){return c.getData(\"interaction.module.context\")+\" - \"+c.getData(\"interaction.module.name\")},label:function(){return c.getData(\"interaction.module.slug\")},value:function(){return\"\"}};c.gaEvent[\"see more\"]={category:function(){return c.getData(\"presentation.pageType\")+\n\" - \"+c.getData(\"interaction.type\")},action:function(){return c.getData(\"interaction.module.context\")+\" - \"+c.getData(\"interaction.module.name\")},label:function(){return c.getData(\"interaction.module.slug\")},value:function(){return\"\"}};c.gaEvent[\"games-prototype-spelling-bee\"]={value:function(){return c.getData(\"interaction.module.progress.timeInGame\")},label:function(){return c.getData(\"interaction.module.progress.guess\")}}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 18
            }, {
                "function": "__html",
                "priority": 1000,
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,u){function k(){var b,a;if(a=d.crypto||d.msCrypto)a=a.getRandomValues(new Uint8Array(18));else for(a=[];18\u003Ea.length;)a.push(256*Math.random()^255\u0026(b=b||+new Date)),b=Math.floor(b\/256);return btoa(String.fromCharCode.apply(String,a)).replace(\/\\+\/g,\"-\").replace(\/\\\/\/g,\"_\")}var l,m,e,f,g,h=[],r=\"object\"==typeof d.navigator\u0026\u0026\"string\"==typeof d.navigator.userAgent\u0026\u0026\/iP(ad|hone|od)\/.test(d.navigator.userAgent),n=\"object\"==typeof d.navigator\u0026\u0026d.navigator.sendBeacon,t=n?r?\"xhr_ios\":\"beacon\":\"xhr\";\nif(d.nyt_et)try{console.warn(\"et2 snippet should only load once per page\")}catch(b){}else d.nyt_et=function(){function b(a){if(h.length){var c=l+\"\/track\",b=JSON.stringify(h);if(\"beacon\"===t||n\u0026\u0026a)d.navigator.sendBeacon(c,b);else{a=\"undefined\"!=typeof XMLHttpRequest?new XMLHttpRequest:new ActiveXObject(\"Microsoft.XMLHTTP\");a.open(\"POST\",c);a.withCredentials=!0;a.setRequestHeader(\"Accept\",\"*\/*\");\"string\"==typeof b?a.setRequestHeader(\"Content-Type\",\"text\/plain;charset\\x3dUTF-8\"):\"[object Blob]\"==={}.toString.call(b)\u0026\u0026\nb.type\u0026\u0026a.setRequestHeader(\"Content-Type\",b.type);try{a.send(b)}catch(v){}}h.length=0;clearTimeout(g);g=null}}var a,p,c=arguments;if(\"string\"==typeof c[0]\u0026\u0026\/init\/.test(c[0])\u0026\u0026(e=k(),\"init\"==c[0]\u0026\u0026!m)){if(m=k(),\"string\"!=typeof c[1]||!\/^http\/.test(c[1]))throw Error(\"init must include an et host url\");l=String(c[1]).replace(\/\\\/$\/,\"\");\"string\"==typeof c[2]\u0026\u0026(f=c[2])}var q=\"page_exit\"==(a=c[c.length-1]).subject||\"ob_click\"==(a.eventData||{}).type;l\u0026\u0026\"object\"==typeof a\u0026\u0026(p=\"page\"==a.subject||\"page_soft\"==\na.subject?e:k(),a.sourceApp\u0026\u0026(f=a.sourceApp),a.sourceApp=f,h.push({context_id:m,pageview_id:e,event_id:p,client_lib:\"v1.0.6\",sourceApp:f,how:q\u0026\u0026r\u0026\u0026n?\"beacon_ios\":t,client_ts:+new Date,data:JSON.parse(JSON.stringify(a))}),\"send\"==c[0]||p==e||q?b(q):g||(g=setTimeout(b,5500)))},d.nyt_et.get_pageview_id=function(){return e}}(window);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Enyt_et.get_pageview_id()||nyt_et(\"init\",", ["escape", ["macro", 510], 8, 16], ",", ["escape", ["macro", 511], 8, 16], ",{subject:\"page\",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 29], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 511], 8, 16], ",\ngtm:", ["escape", ["macro", 460], 8, 16], ",is_iframe:window.top!=window});nytAnalytics=window.nytAnalytics||{};nytAnalytics.et2_pageview_id=nyt_et.get_pageview_id();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 146
            }, {
                "function": "__html",
                "priority": 1000,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(window.nyt_et){nytAnalytics=window.nytAnalytics||{};var a={subject:\"page_soft\",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||{}).content,url:location.href,referrer:", ["escape", ["macro", 29], 8, 16], "||void 0,client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 511], 8, 16], ",\ngtm:", ["escape", ["macro", 460], 8, 16], ",is_iframe:window.top!=window};nytAnalytics.et2_pageview_id===nyt_et.get_pageview_id()?nyt_et(\"pageinit\",", ["escape", ["macro", 510], 8, 16], ",a):nyt_et(a);nytAnalytics.et2_pageview_id=nyt_et.get_pageview_id()}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 157
            }, {
                "function": "__html",
                "priority": 1,
                "metadata": ["map"],
                "consent": ["list"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(window.nyt_et){var a={};3\u003CparseInt(navigator.appVersion,10)\u0026\u0026(\"Microsoft Internet Explorer\"===navigator.appName\u0026\u0026document.body?a.size=document.body.offsetWidth+\"x\"+document.body.offsetHeight:\"Netscape\"===navigator.appName\u0026\u0026(a.size=window.innerWidth+\"x\"+window.innerHeight));var b=new Date;a.timeZone=b.getTimezoneOffset()\/60*-1;a.timeZoneHour=b.getHours();window.matchMedia\u0026\u0026(!0===window.matchMedia(\"(orientation: portrait)\").matches?a.orientation=\"port\":!0===window.matchMedia(\"(orientation: landscape)\").matches\u0026\u0026\n(a.orientation=\"land\"));a.language=\"Netscape\"===navigator.appName?navigator.language:navigator.userLanguage;b=\"undefined\"!==typeof window.ethereum||\"undefined\"!==typeof window.web3;nyt_et({subject:\"page_update\",browser:a,cryptowallet:b,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 29], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||\n{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,referrer:\"", ["escape", ["macro", 29], 7], "\",gtm:", ["escape", ["macro", 460], 8, 16], ",is_iframe:window.top!=window})}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 156
            }, {
                "function": "__csm",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_clientId": "3005403",
                "tag_id": 12
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 17],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 387],
                "vtp_eventAction": ["macro", 391],
                "vtp_eventLabel": ["macro", 396],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_eventValue": ["macro", 398],
                "vtp_metric": ["list", ["map", "index", ["macro", 399], "metric", ["macro", 400]]],
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 386],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 36
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": ["macro", 404],
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 409],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 387],
                "vtp_eventAction": ["macro", 410],
                "vtp_eventLabel": ["macro", 413],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 414], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 386],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 37
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 93, 0]],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_gaSettings": ["macro", 387],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 386],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 38
            }, {
                "function": "__img",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/www.nytimes.com\/svc\/comscore\/pvc.html",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 415],
                "tag_id": 46
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 91, 0]],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "scroll",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_enableLinkId": false,
                "vtp_gaSettings": ["macro", 387],
                "vtp_eventAction": ["macro", 416],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 386],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 52
            }, {
                "function": "__img",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 60, 0]],
                "teardown_tags": ["list", ["tag", 59, 0]],
                "once_per_load": true,
                "vtp_useCacheBuster": true,
                "vtp_url": ["template", "https:\/\/stags.bluekai.com\/site\/50136?limit=1\u0026id=", ["escape", ["macro", 172], 12]],
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 415],
                "tag_id": 93
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u4", "value", ["macro", 419]],
                    ["map", "key", "u5", "value", ["macro", 420]],
                    ["map", "key", "u6", "value", ["macro", 421]],
                    ["map", "key", "u7", "value", ["macro", 172]],
                    ["map", "key", "u8", "value", ["macro", 158]],
                    ["map", "key", "u10", "value", ["macro", 29]],
                    ["map", "key", "u11", "value", ["macro", 422]],
                    ["map", "key", "u12", "value", ["macro", 423]],
                    ["map", "key", "u13", "value", ["macro", 424]],
                    ["map", "key", "u14", "value", ["macro", 425]],
                    ["map", "key", "u15", "value", ["macro", 426]],
                    ["map", "key", "u16", "value", ["macro", 142]],
                    ["map", "key", "u17", "value", ["macro", 427]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "allpa0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "nyti-0",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 115
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 429],
                "vtp_eventCategory": ["macro", 430],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", ["macro", 431], "metric", "1"],
                    ["map", "index", ["macro", 432], "metric", "1"],
                    ["map", "index", ["macro", 433], "metric", "1"]
                ],
                "vtp_gaSettings": ["macro", 387],
                "vtp_eventAction": ["macro", 434],
                "vtp_eventLabel": ["macro", 435],
                "vtp_dimension": ["list", ["map", "index", ["macro", 436], "dimension", ["macro", 437]],
                    ["map", "index", ["macro", 438], "dimension", ["macro", 439]],
                    ["map", "index", ["macro", 440], "dimension", ["macro", 441]],
                    ["map", "index", ["macro", 79], "dimension", ["macro", 80]]
                ],
                "vtp_trackingId": ["macro", 386],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 118
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u4", "value", ["macro", 419]],
                    ["map", "key", "u5", "value", ["macro", 238]],
                    ["map", "key", "u6", "value", ["macro", 442]],
                    ["map", "key", "u7", "value", ["macro", 443]],
                    ["map", "key", "u8", "value", ["macro", 158]],
                    ["map", "key", "u9", "value", ["macro", 427]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "newsl0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "nyti-0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 121
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u4", "value", ["macro", 419]],
                    ["map", "key", "u5", "value", ["macro", 420]],
                    ["map", "key", "u6", "value", ["macro", 421]],
                    ["map", "key", "u7", "value", ["macro", 172]],
                    ["map", "key", "u8", "value", ["macro", 158]],
                    ["map", "key", "u10", "value", ["macro", 29]],
                    ["map", "key", "u11", "value", ["macro", 422]],
                    ["map", "key", "u12", "value", ["macro", 423]],
                    ["map", "key", "u13", "value", ["macro", 424]],
                    ["map", "key", "u14", "value", ["macro", 425]],
                    ["map", "key", "u15", "value", ["macro", 426]],
                    ["map", "key", "u16", "value", ["macro", 142]],
                    ["map", "key", "u17", "value", ["macro", 427]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "regi0",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 133
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "Signup",
                "vtp_twitter_pixel_id": ["macro", 446],
                "tag_id": 136
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "CompleteRegistration",
                "vtp_twitter_pixel_id": "nzcu8",
                "tag_id": 137
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u4", "value", ["macro", 419]],
                    ["map", "key", "u5", "value", ["macro", 420]],
                    ["map", "key", "u6", "value", ["macro", 421]],
                    ["map", "key", "u7", "value", ["macro", 172]],
                    ["map", "key", "u8", "value", ["macro", 158]],
                    ["map", "key", "u10", "value", ["macro", 29]],
                    ["map", "key", "u11", "value", ["macro", 422]],
                    ["map", "key", "u12", "value", ["macro", 423]],
                    ["map", "key", "u13", "value", ["macro", 424]],
                    ["map", "key", "u14", "value", ["macro", 425]],
                    ["map", "key", "u15", "value", ["macro", 426]],
                    ["map", "key", "u16", "value", ["macro", 142]],
                    ["map", "key", "u17", "value", ["macro", 427]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "remar0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "gatew0",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 138
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "1008590664",
                "vtp_conversionLabel": "15HpCJzjkogBEMi-9-AD",
                "vtp_url": ["macro", 10],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": false,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableShoppingQualitySettings": false,
                "tag_id": 153
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "vtp_enableCookieUpdateFeature": false,
                "vtp_enableCookieFlagsFeature": false,
                "vtp_enableUrlPassthroughFeature": true,
                "tag_id": 159
            }, {
                "function": "__img",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/conv-tm.everesttech.net\/stats\/1\/conv?cpk=r8r9vJweeOxyOVE1yJjr\u0026cak=qUqrnV6o1YdrHwpOUDqY",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 415],
                "tag_id": 160
            }, {
                "function": "__img",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/rtd-tm.everesttech.net\/upi\/?sid=7hUAYoSZMFEXrlLULNp7\u0026cs=1",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 415],
                "tag_id": 161
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "registration",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 387],
                "vtp_eventAction": "register",
                "vtp_eventLabel": ["macro", 444],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 163
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 398],
                "vtp_eventCategory": ["macro", 17],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", ["macro", 399], "metric", ["macro", 400]]],
                "vtp_gaSettings": ["macro", 387],
                "vtp_eventAction": "impression",
                "vtp_eventLabel": ["macro", 396],
                "vtp_trackingId": ["macro", 386],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 165
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "refty",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1223
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "msgnup",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1226
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "podcstq",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1230
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "necovidl",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1233
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "dailylp",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1235
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "fsslp",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1238
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "nwpplay",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1245
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "nwplp",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1246
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "nwpasg",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1250
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "swylp",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1258
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "swyasg",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1260
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "swyplay",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1261
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "newsl0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "cvidsch",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 415],
                "vtp_url": ["macro", 10],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1265
            }, {
                "function": "__zone",
                "once_per_event": true,
                "vtp_childContainers": ["list", ["map", "publicId", "GTM-N5P6T9S", "nickname", "NYT - Zone - Marketing POC Pixels"]],
                "vtp_boundaries": ["list", ["zb", "_re", ["macro", 444], ".*", false, false],
                    ["zb", "_sw", ["macro", 6], "out", true, false],
                    ["zb", "_re", ["macro", 7], "^.{4}[ep]", true, false]
                ],
                "vtp_enableTypeRestrictions": true,
                "vtp_whitelistedTypes": ["list", ["map", "typeId", "hl"],
                    ["map", "typeId", "ehl"],
                    ["map", "typeId", "sdl"],
                    ["map", "typeId", "fsl"],
                    ["map", "typeId", "cl"],
                    ["map", "typeId", "tg"],
                    ["map", "typeId", "tl"],
                    ["map", "typeId", "ecl"],
                    ["map", "typeId", "jel"],
                    ["map", "typeId", "ytl"],
                    ["map", "typeId", "lcl"],
                    ["map", "typeId", "evl"],
                    ["map", "typeId", "vis"],
                    ["map", "typeId", "ctv"],
                    ["map", "typeId", "remm"],
                    ["map", "typeId", "smm"],
                    ["map", "typeId", "c"],
                    ["map", "typeId", "d"],
                    ["map", "typeId", "e"],
                    ["map", "typeId", "f"],
                    ["map", "typeId", "j"],
                    ["map", "typeId", "k"],
                    ["map", "typeId", "r"],
                    ["map", "typeId", "u"],
                    ["map", "typeId", "v"],
                    ["map", "typeId", "uv"],
                    ["map", "typeId", "dbg"],
                    ["map", "typeId", "ev"],
                    ["map", "typeId", "cid"],
                    ["map", "typeId", "aev"],
                    ["map", "typeId", "gas"],
                    ["map", "typeId", "img"]
                ],
                "tag_id": 1266
            }, {
                "function": "__hl",
                "tag_id": 1267
            }, {
                "function": "__hl",
                "tag_id": 1268
            }, {
                "function": "__hl",
                "tag_id": 1269
            }, {
                "function": "__hl",
                "tag_id": 1270
            }, {
                "function": "__hl",
                "tag_id": 1271
            }, {
                "function": "__hl",
                "tag_id": 1272
            }, {
                "function": "__hl",
                "tag_id": 1273
            }, {
                "function": "__hl",
                "tag_id": 1274
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2703797_1249",
                "tag_id": 1275
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2703797_1251",
                "tag_id": 1276
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2703797_1252",
                "tag_id": 1277
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2703797_1259",
                "tag_id": 1278
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.facebookPixel=function(g){function m(b){b=b||{};var a=b.pixelName||\"PageView\";b=f(b,e);fbq(\"track\",a,b)}function f(b,a){var c;b=b||{};a=a||{};for(c in a)b[c]=a[c]\u0026\u0026\"object\"===typeof a[c]?b[c]\u0026\u0026\"object\"===typeof b[c]?f(b[c],a[c]):f({},a[c]):a[c];return b}function n(b){for(var a=2166136261,c=0;c\u003Cb.length;++c)a^=b.charCodeAt(c),a+=(a\u003C\u003C1)+(a\u003C\u003C4)+(a\u003C\u003C7)+(a\u003C\u003C8)+(a\u003C\u003C24);return a\u003E\u003E\u003E0}g=", ["escape", ["macro", 155], 8, 16], ";var l=", ["escape", ["macro", 443], 8, 16], ",k=", ["escape", ["macro", 442], 8, 16], ",e={ad:", ["escape", ["macro", 422], 8, 16], ",articleId:", ["escape", ["macro", 423], 8, 16], "||\n\"\",fbk:localStorage.getItem(\"kxsegs\")||\"\",pScore:", ["escape", ["macro", 421], 8, 16], ",c1Score:", ["escape", ["macro", 424], 8, 16], ",c2Score:", ["escape", ["macro", 425], 8, 16], ",c3Score:", ["escape", ["macro", 426], 8, 16], ",sourceApp:", ["escape", ["macro", 142], 8, 16], "||\"nyt-vi\",watSegs:", ["escape", ["macro", 419], 8, 16], ",fbBrowser:\/\\\/FBIOS\/i.test(navigator.userAgent),content_ids:[n(window.location.pathname)],content_type:\"product\",content_category:nytAnalytics.pagemeta[\"dfp-ad-unit-path\"]||\"\",userAgent:navigator.userAgent,mc:", ["escape", ["macro", 167], 8, 16], "||\"\",referrer:", ["escape", ["macro", 29], 8, 16], ",\npageType:", ["escape", ["macro", 1], 8, 16], "};g\u0026\u0026\"anon\"!==g.toLowerCase()\u0026\u0026(e.userType=g,e.retentionRiskSegment=", ["escape", ["macro", 451], 8, 16], ",e.bundleCoreDigi=", ["escape", ["macro", 452], 8, 16], ",e.bundleCoreHD=", ["escape", ["macro", 453], 8, 16], ");l\u0026\u0026(e.agentID=l);\"number\"==typeof k\u0026\u00260\u003Ck\u0026\u0026(e.engagementLevel=k);window.fbq\u0026\u0026window.nytfbqInitialized||(window.nytfbqInitialized=!0,function(b){!function(a,b,e,g,d,h,f){a.fbq||(d=a.fbq=function(){d.callMethod?d.callMethod.apply(d,arguments):d.queue.push(arguments)},a._fbq||(a._fbq=d),d.push=d,d.loaded=\n!0,d.version=\"2.0\",d.queue=[],h=b.createElement(e),h.async=!0,h.src=g,f=b.getElementsByTagName(e)[0],f.parentNode.insertBefore(h,f))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"592202027582499\")}());return{fire:m}}();", ["escape", ["macro", 444], 8, 16], "\u0026\u0026window.facebookPixel.fire({pixelName:\"CompleteRegistration\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 6
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E\"object\"===typeof window.dataLayer\u0026\u0026window.dataLayer.push({video:\"\",asset:\"\",viewport:\"\"});\"object\"===typeof window.nytAnalytics\u0026\u0026window.nytAnalytics.resetPage();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 10
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function etEventModuleInteraction(){var eventObj={},modData={};eventObj.assetUrl=", ["escape", ["macro", 18], 8, 16], ";eventObj.url=document.location.href;eventObj.subject=\"module-interactions\";modData={\"action\":\"", ["escape", ["macro", 462], 7], "\",\"context\":\"", ["escape", ["macro", 463], 7], "\",\"module\":\"", ["escape", ["macro", 15], 7], "\",\"eventName\":\"", ["escape", ["macro", 389], 7], "\",\"elementLabel\":\"", ["escape", ["macro", 464], 7], "\",\"label\":\"", ["escape", ["macro", 465], 7], "\",\"pgtype\":\"", ["escape", ["macro", 1], 7], "\",\"region\":\"", ["escape", ["macro", 393], 7], "\",\"slug\":\"", ["escape", ["macro", 466], 7], "\"};if(", ["escape", ["macro", 467], 8, 16], ")modData.progress=\nJSON.stringify(", ["escape", ["macro", 467], 8, 16], ");if(", ["escape", ["macro", 468], 8, 16], ")modData.newsletter=JSON.stringify(", ["escape", ["macro", 468], 8, 16], ");eventObj.moduleData=JSON.stringify(modData);if(typeof nyt_et===\"function\"){var et2ModData=JSON.parse(JSON.stringify({subject:\"interaction\",gtm:", ["escape", ["macro", 460], 8, 16], ",moduleObj:", ["escape", ["macro", 469], 8, 16], "||", ["escape", ["macro", 470], 8, 16], ",eventData:", ["escape", ["macro", 471], 8, 16], "||{type:", ["escape", ["macro", 462], 8, 16], ",pagetype:", ["escape", ["macro", 1], 8, 16], "}}));if(!et2ModData.eventData.pagetype\u0026\u0026", ["escape", ["macro", 1], 8, 16], ")et2ModData.eventData.pagetype=\n", ["escape", ["macro", 1], 8, 16], ";if(", ["escape", ["macro", 468], 8, 16], ")et2ModData.newsletter=JSON.parse(JSON.stringify(", ["escape", ["macro", 468], 8, 16], "));nyt_et(\"send\",et2ModData)}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 34
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"scrolling_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.scrolling({viewport:", ["escape", ["macro", 473], 8, 16], ",performance:", ["escape", ["macro", 474], 8, 16], ",presentation:", ["escape", ["macro", 475], 8, 16], ",assetUrl:", ["escape", ["macro", 18], 8, 16], "});(function(){var a=document.querySelector(\"#scrolling_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 40
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"heartbeat_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.heartbeat({viewport:", ["escape", ["macro", 473], 8, 16], ",heartbeatInterval:", ["escape", ["macro", 476], 8, 16], ",performance:", ["escape", ["macro", 474], 8, 16], ",presentation:", ["escape", ["macro", 475], 8, 16], "});(function(){var a=document.querySelector(\"#heartbeat_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 41
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"addtrackingparams_temp\" type=\"text\/gtmscript\"\u003E(function(){var c=function(a,b){var c=a\u0026\u0026a.length;if(c\u0026\u0026\"function\"===typeof b)if(\"function\"===typeof a.forEach)a.forEach(b);else if(\"function\"===typeof b)for(;c;)c--,b(a[c])},d=function(a,b){b=(-1\u003Ca.indexOf(\"?\")?\"\\x26\":\"?\")+b;return a=-1\u003Ca.indexOf(\"#\")?a.replace(\"#\",b+\"#\"):a+b};c(document.querySelectorAll(\"section[data-block-tracking-id]:not(.gtm-tagged)\"),function(a){var b=\"\";a.classList.add(\"gtm-tagged\");b=a.dataset\u0026\u0026a.dataset.blockTrackingId||\"\";c(a.querySelectorAll(\":not(header) \\x3e a\"),function(a){a.href=\nd(a.href,\"action\\x3dclick\\x26module\\x3d\"+encodeURIComponent(b)+\"\\x26pgtype\\x3d\"+", ["escape", ["macro", 1], 8, 16], ")})});c(document.querySelectorAll(\"#recirc-more-in:not(.gtm-tagged), div[class^\\x3delementStyles-moreInContent]:not(.gtm-tagged)\"),function(a){var b=a.parentNode.querySelector(\"h2\");b=b?b.textContent:\"\";b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");b=b.replace(\"More in \",\"\");a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dMoreInSection\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+\nb)})});c(document.querySelectorAll(\"div[class^\\x3dTrending-trending]:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"li a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dTrending\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\"#recirc-collection:not(.gtm-tagged)\"),function(a){var b=a.parentNode.querySelector(\"h2\");b=b?b.textContent:\"\";b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");a.classList.add(\"gtm-tagged\");\nc(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dAssociated\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+b)})});c(document.querySelectorAll(\"#recirc-follow-channel:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");var b=a.parentNode.querySelector(\"h2\");b=b?b.textContent:\"\";b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dFollow\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+\nb)})});c(document.querySelectorAll(\"div[class^\\x3dRecirculation-lonelyTrending]:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dLonely%20Trending\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\"div[class^\\x3delementStyles-relatedcoverage]\"),function(a){c(a.querySelectorAll(\"article a\"),function(a){a.classList.add(\"gtm-tagged\");\na.href=d(a.href,\"action\\x3dclick\\x26module\\x3dRelatedCoverage\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dRelated\")})});var e=document.querySelector(\"nav[class^\\x3dRibbon-ribbon]:not(.gtm-tagged)\");if(e){var f=\"Ribbon\";e.classList.add(\"gtm-tagged\");c(e.querySelectorAll(\"a:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");a.href=d(a.href,\"action\\x3dclick\\x26module\\x3d\"+encodeURIComponent(f)+\"\\x26pgtype\\x3d\"+", ["escape", ["macro", 1], 8, 16], ")})}c(document.querySelectorAll(\"div[class^\\x3delementStyles-editorContent]:not(.gtm-tagged)\"),\nfunction(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3deditorContent\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\".StoryBodyCompanionColumn aside\"),function(a){c(a.querySelectorAll(\"article a:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");a.href=d(a.href,\"action\\x3dclick\\x26module\\x3deditorContent\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dCompanionColumn\\x26contentCollection\\x3dTrending\")})});\n(function(){var a=document.querySelector(\"#addtrackingparams_temp\");a\u0026\u0026(a.outerHTML=\"\")})()})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 44
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer.push({video:\"\",asset:\"\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 45
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E\"object\"===typeof nytAnalytics\u0026\u0026(nytAnalytics.activeTime=nytAnalytics.activeTime||0,nytAnalytics.activeTime=1E3*", ["escape", ["macro", 478], 8, 16], ");\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 54
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.parent===window\u0026\u0026function(){function d(){var a;return a=(a=unescape(document.cookie).match(\"NYT-Edition\\x3d([^;]+)\"))\u0026\u0026a[1]\u0026\u0026-1!==a[1].indexOf(\"edition|GLOBAL\")?\"international.nytimes.com\":\"nytimes.com\"}function b(){var a;regex=\/(^.*)(nytimes.com.*)\/;return a=", ["escape", ["macro", 18], 8, 16], "\u0026\u0026", ["escape", ["macro", 18], 8, 16], ".match(regex)[2]}function c(){var a=[];\"Homepage\"===", ["escape", ["macro", 1], 8, 16], "?a.push(\"Homepage\"):(", ["escape", ["macro", 479], 8, 16], "\u0026\u0026a.push(", ["escape", ["macro", 479], 8, 16], "),", ["escape", ["macro", 480], 8, 16], "\u0026\u0026a.push(", ["escape", ["macro", 480], 8, 16], "),\n", ["escape", ["macro", 65], 8, 16], "\u0026\u0026a.push(", ["escape", ["macro", 65], 8, 16], "),\/parenting\\.\/.test(document.location.host)\u0026\u0026a.push(\"parenting\"),0===a.length\u0026\u0026\/\\\/2020\\\/\\d\\d\\\/\\d\\d\\\/us\\\/elections\\\/results\/.test(document.location.href)\u0026\u0026(a.push(\"us\"),a.push(\"Elections\")));return a.join(\",\")}if(\"object\"==typeof window._sf_async_config\u0026\u0026\"object\"==typeof pSUPERFLY\u0026\u0026\"function\"==typeof pSUPERFLY.virtualPage)pSUPERFLY.virtualPage({sections:c(),path:b(),title:", ["escape", ["macro", 481], 8, 16], "||document.title});else{window._sf_async_config={uid:16698,\ndomain:d(),pingServer:\"pnytimes.chartbeat.net\",useCanonical:!0,path:b(),title:", ["escape", ["macro", 481], 8, 16], "||document.title};_cbq=window._cbq=window._cbq||[];switch(", ["escape", ["macro", 155], 8, 16], "){case \"sub\":_cbq.push([\"_acct\",\"paid\"]);break;case \"anon\":_cbq.push([\"_acct\",\"anon\"]);break;case \"regi\":_cbq.push([\"_acct\",\"lgdin\"])}try{window._sf_async_config.sections=c()}catch(a){}try{window._sf_async_config.authors=Array.isArray(", ["escape", ["macro", 482], 8, 16], ")\u0026\u0026", ["escape", ["macro", 482], 8, 16], ".join(\",\")}catch(a){}window._sf_endpt=(new Date).getTime();\nfirstScript=document.getElementsByTagName(\"script\")[0];cbScript=document.createElement(\"script\");cbScript.async=!0;cbScript.src=\"https:\/\/static.chartbeat.com\/js\/chartbeat.js\";firstScript.parentNode.insertBefore(cbScript,firstScript)}}();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 68
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Ciframe name=\"__bkframe\" height=\"0\" width=\"0\" frameborder=\"0\" style=\"display:none;position:absolute;clip:rect(0px 0px 0px 0px)\" src=\"about:blank\"\u003E\u003C\/iframe\u003E \n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tags.bkrtx.com\/js\/bk-coretag.js\"\u003E\u003C\/script\u003E \n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=function(a){var e,b,d=[{name:\"Bot\",regex:\"(GomezAgent|yandex.com\/bots|(Googlebot|bingbot|YandexBot|facebookexternalhit)\/[\\\\d]+(?:.[\\\\d]+)?)\"},{name:\"UC Browser\",regex:\"(UCMini|UCBrowser)\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Opera\",regex:\"(OPR|Opera)[\/ ]([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Sogou Explorer\",regex:\"(SE) ([\\\\d]+)(.[a-zA-Z\\\\d]+)*\"},{name:\"\",regex:\"(Avant Browser)\"},{name:\"\",regex:\"((?:Mobile)?Iron|Puffin|Maxthon|Chromium|Sleipnir|Lightning|QQBrowser|Silk|chromeframe|iCab|Arora|Kindle|Midori|rekonq|Vienna|Epiphany|NetFront|konqueror|PhantomJS|YaBrowser|IEMobile|PaleMoon|Thunderbird|SeaMonkey|baidubrowser|NokiaBrowser|Edge|Avant Browser|Iceweasel|K-Meleon)\/([\\\\d]+)(.[\\\\d]+)*\"},\n{name:\"\",regex:\"(Lunascape)[\/ ]([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Firefox\",regex:\"(Firefox)\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"MSIE\",regex:\"(?:(Windows).* Trident\/([\\\\d]+)(.[\\\\d]+)*|(MSIE) ([\\\\d]+)(.[\\\\d]+)*)\"},{name:\"Chrome\",regex:\"(Chrome)\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Android Browser\",regex:\"(Android)[ \/]([\\\\d]+)(?:.[\\\\d]+.[\\\\d]+)?.*(Mobile )?Safari\"},{name:\"BlackBerry Browser\",regex:\"(BlackBerry|BB[\\\\d]+);.*Mobile Safari\"},{name:\"\",regex:\"(OmniWeb)\/v([\\\\d]+)(?:.[\\\\d]+)\"},{name:\"Chrome iOS\",regex:\"(CriOS)\/([\\\\d]+)(?:.[\\\\d]+)*\"},\n{name:\"Safari\",regex:\"(?:Version\/([\\\\d]+)(?:.[\\\\d]+)* )?(Safari)\/(?:[\\\\d]+(?:.[\\\\d]+)*)\",mobileRegex:\"(iPhone; CPU iPhone OS|iPad; CPU OS).*Mobile\/\"},{name:\"Facebook App\",regex:\"\\\\[(FBAN).*FBAV\/([\\\\d]+)(.[\\\\d]+)*.*\\\\]?\"},{name:\"NYT App\",regex:\"(NYTimes(-[a-zA-Z]+)?|Crosswords|NYTNow|Cooking|NYTOpinion|)\/([\\\\d]+)(.[\\\\d]+)* CFNetwork\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"AppleWebKit Based Browser\",regex:\"(AppleWebKit)\/([\\\\d]+)(.[\\\\d]+)*\"}];for(e=0;e\u003Cd.length;e++){var c=d[e];if((b=(new RegExp(c.regex)).exec(a))\u0026\u0026\n1\u003Cb.length)return e=c.name||b[1],c.mobileRegex\u0026\u0026(new RegExp(c.mobileRegex)).test(a)\u0026\u0026(e+=\" Mobile\"),e}return\"Unknown\"},a=function(a){return\"object\"===typeof a\u0026\u0026a instanceof Array?a.filter(function(a){return\"\"!==a}).map(function(a){return a.replace(\/,\/g,\" \")}):[]},h=", ["escape", ["macro", 483], 8, 16], "||(document.querySelector(\"meta[name\\x3dCG]\")||{}).content,k=\"\";if(!\/Homepage\/i.test(h)){k=a(", ["escape", ["macro", 484], 8, 16], ");var l=a(", ["escape", ["macro", 486], 8, 16], "||", ["escape", ["macro", 485], 8, 16], "||[]),b=a(", ["escape", ["macro", 487], 8, 16], ");a=a(", ["escape", ["macro", 488], 8, 16], ");\nk=k.concat(l).concat(b).concat(a).join(\",\")}bk_ignore_meta=!0;l=function(a){var b=[];if(null!=a\u0026\u0026\"\"!=a)for(var c in a)null!=a[c]\u0026\u0026\"InclusionFlag\"in a[c]\u0026\u00261==a[c].InclusionFlag\u0026\u0026b.push(c);return b.join(\",\")};bk_addPageCtx(\"regid\",", ["escape", ["macro", 158], 8, 16], ");a=", ["escape", ["macro", 489], 8, 16], "||{};b=", ["escape", ["macro", 490], 8, 16], "||{};b=b.subscriptions||[];var c=!1;0\u003Cb.length\u0026\u0026(c=\"F\"==b[0].grace?!1:!0);bk_addPageCtx(\"usertype\",", ["escape", ["macro", 155], 8, 16], ");bk_addPageCtx(\"userloggedin\",", ["escape", ["macro", 491], 8, 16], ");bk_addPageCtx(\"coresubtenure\",\na.coreSubscriptionTenure?a.coreSubscriptionTenure:\"\");bk_addPageCtx(\"corestop\",a.coreStopCode?a.coreStopCode:\"\");bk_addPageCtx(\"corepromo\",!!a.coreOnPromotion);bk_addPageCtx(\"ingrace\",c);bk_addPageCtx(\"giftrecipient\",!!a.giftSubscriptionRecipient);bk_addPageCtx(\"childsubrecipient\",!!a.childSubscription);bk_addPageCtx(\"bundlecoredigi\",a.coreDigiBundle?a.coreDigiBundle:\"\");bk_addPageCtx(\"bundlecorehd\",a.coreHDBundle?a.coreHDBundle:\"\");bk_addPageCtx(\"bundlexword\",a.crosswordStandaloneBundle?a.crosswordStandaloneBundle:\n\"\");bk_addPageCtx(\"bundlecooking\",a.cookingStandaloneBundle?a.cookingStandaloneBundle:\"\");bk_addPageCtx(\"bundleother\",a.otherBundle?a.otherBundle:\"\");bk_addPageCtx(\"b2bentitle\",!!a.b2bSubscription);bk_addPageCtx(\"marketingoptin\",!!a.marketingOptIn);bk_addPageCtx(\"formercoresub\",!!a.formerCoreSubscriber);bk_addPageCtx(\"formeredusub\",!!a.formerEduSubscriber);bk_addPageCtx(\"formerhdsub\",!!a.formerHDSubscriber);bk_addPageCtx(\"retentionscore\",a.retentionSegment||\"\");bk_addPageCtx(\"topwatseg\",", ["escape", ["macro", 419], 8, 16], ");\nbk_addPageCtx(\"sassegment\",a.sasSegment||\"\");bk_addPageCtx(\"hdstopreasoncode\",a.hdStopReasonCode||\"\");bk_addPageCtx(\"regitenure\",a.regiTenure||\"\");bk_addPageCtx(\"cookinggrace\",!!a.cookingGrace);bk_addPageCtx(\"crosswordsgrace\",!!a.crosswordsGrace);bk_addPageCtx(\"gatewayhitlm\",!!a.gatewayHitLM);bk_addPageCtx(\"coregracelevel\",!!a.coreGraceLevel);bk_addPageCtx(\"activedaysengagement\",a.engagementActiveDays||\"\");bk_addPageCtx(\"authors\",(", ["escape", ["macro", 482], 8, 16], "||[]).join(\",\")||\"\");bk_addPageCtx(\"newsletter\",\na.newsletterList||\"\");b=", ["escape", ["macro", 492], 8, 16], ";c=\"\";if(null!=b){try{var f=JSON.parse(unescape(b))}catch(e){f={}}f.isCorpUser\u0026\u0026(c=f.orgName)}bk_addPageCtx(\"businessname\",c);bk_addPageCtx(\"corpadblock\",\/CORP_ADBLOCK\/i.test(b));f=", ["escape", ["macro", 493], 8, 16], ";c=b=\"\";if(null!=f){try{var g=JSON.parse(unescape(f))}catch(e){g={}}if(c=g.isEduUser||\"\")b=g.nickName}bk_addPageCtx(\"isedu\",c);bk_addPageCtx(\"propensityedu\",b);bk_addPageCtx(\"propensityscore\",", ["escape", ["macro", 421], 8, 16], ");bk_addPageCtx(\"activedays\",", ["escape", ["macro", 422], 8, 16], ");\ng=", ["escape", ["macro", 166], 8, 16], "||{};bk_addPageCtx(\"metercount\",g.v||\"\");bk_addPageCtx(\"propensitysection\",", ["escape", ["macro", 426], 8, 16], ");bk_addPageCtx(\"propensitytype\",", ["escape", ["macro", 425], 8, 16], ");bk_addPageCtx(\"propensitysite\",", ["escape", ["macro", 424], 8, 16], ");bk_addPageCtx(\"url\",window.location.href);bk_addPageCtx(\"referrer\",", ["escape", ["macro", 29], 8, 16], ");bk_addPageCtx(\"section\",h);h=", ["escape", ["macro", 480], 8, 16], "||\"\";bk_addPageCtx(\"subsection\",h);bk_addPageCtx(\"pagetype\",", ["escape", ["macro", 1], 8, 16], ");bk_addPageCtx(\"keywords\",k);bk_addPageCtx(\"sourceapp\",\n", ["escape", ["macro", 123], 8, 16], ");bk_addPageCtx(\"browsername\",d(navigator.userAgent));bk_addPageCtx(\"funnelpropensity\",", ["escape", ["macro", 442], 8, 16], ");bk_addPageCtx(\"column\",", ["escape", ["macro", 494], 8, 16], ");d=", ["escape", ["macro", 495], 8, 16], "||[];bk_addPageCtx(\"collectionname\",d.join(\",\"));bk_addPageCtx(\"contenttype\",", ["escape", ["macro", 496], 8, 16], ");d=l(", ["escape", ["macro", 497], 8, 16], ");bk_addPageCtx(\"emotions\",d);\"object\"===typeof bk_optly\u0026\u0026bk_optly instanceof Array\u0026\u00260\u003Cbk_optly.length\u0026\u0026(bk_addPageCtx(\"optlyexpname\",bk_optly[0].experience||\"\"),bk_addPageCtx(\"optlyexpvariant\",\nbk_optly[0].variant||\"\"));bk_addPageCtx(\"xwordstenure\",a.crosswordsSubscriptionTenure?a.crosswordsSubscriptionTenure:\"\");bk_addPageCtx(\"cookingtenure\",a.cookingSubscriptionTenure?a.cookingSubscriptionTenure:\"\");bk_addPageCtx(\"xwordsstop\",a.crosswordsStopCode?a.crosswordsStopCode:\"\");bk_addPageCtx(\"cookingstop\",a.cookingStopCode?a.cookingStopCode:\"\");bk_addPageCtx(\"productswitch\",a.productSwitch?a.productSwitch:\"\");bk_addPageCtx(\"giftsubgiver\",!!a.giftGiver);bk_addPageCtx(\"formerxwordsub\",!!a.formerCrosswordSubscriber);\nbk_addPageCtx(\"formercookingsub\",!!a.formerCookingSubscriber);bk_addPageCtx(\"watsegs\",a.watString?a.watString:\"\");bk_addPageCtx(\"edusub\",a.eduSubscriber?a.eduSubscriber:\"\");bk_addPageCtx(\"aiqaudience\",(", ["escape", ["macro", 498], 8, 16], "||[]).map(function(a){return a[0]}).join(\",\"));d=50134;navigator.userAgent.match(\/Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry|RIM\/i)\u0026\u0026(d=50747);bk_allow_multiple_calls=!0;bk_doJSTag(d,4)})();\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 83
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tags.bluekai.com\/site\/50550?ret=js\u0026amp;limit=1\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 84
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 0, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"impression_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.impression({module:", ["escape", ["macro", 469], 8, 16], ",card:", ["escape", ["macro", 501], 8, 16], ",block:", ["escape", ["macro", 502], 8, 16], ",eventData:", ["escape", ["macro", 471], 8, 16], ",pageview_ad:", ["escape", ["macro", 503], 8, 16], "},", ["escape", ["macro", 504], 8, 16], ");(function(){var a=document.querySelector(\"#impression_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 107
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"interaction_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.interaction({module:", ["escape", ["macro", 469], 8, 16], ",card:", ["escape", ["macro", 501], 8, 16], ",block:", ["escape", ["macro", 502], 8, 16], ",newsletter:", ["escape", ["macro", 468], 8, 16], ",eventData:", ["escape", ["macro", 471], 8, 16], ",assetUrl:", ["escape", ["macro", 18], 8, 16], "});dataLayer.push({module:null,card:null,block:null,newsletter:null,eventData:null});(function(){var a=document.querySelector(\"#interaction_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 109
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(d,a){var b=document.createElement(\"script\");b.type=\"text\/javascript\";a\u0026\u0026(b.onload=a,b.onerror=a);a=document.getElementsByTagName(\"head\")[0];a.appendChild(b);b.src=d}c(\"https:\/\/a1.nyt.com\/analytics\/show-ads.js\",function(){window.nyt_et\u0026\u0026nyt_et({subject:\"page_update\",adBlockEnabled:!1!==window.adBlockDetected})})})();\u003C\/script\u003E  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 112
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){try{var c=a.ns_,d=a.nyt_streamingAnalytics=a.nyt_streamingAnalytics||new c.ReducedRequirementsStreamingAnalytics({publisherId:\"3005403\"});a=", ["escape", ["macro", 506], 8, 16], "||{};var b=a.eventName,f=\"live\"===a.mData.videoDeliveryMethod,h=g(a);\"pause\"!==b\u0026\u0026\"video-complete\"!==b\u0026\u0026\"ad-pause\"!==b\u0026\u0026\"ad-complete\"!==b||d.stop();if(\"auto-play-start\"===b||\"user-play\"===b||\"resume\"===b)return k(h,f);if(\"ad-start\"===b)return l(a);var k=function(a,m){var b=c.ReducedRequirementsStreamingAnalytics.ContentType,e=\nb.ShortFormOnDemand;m\u0026\u0026(e=b.Live);d.playVideoContentPart(a,e)},l=function(b){var a=c.ReducedRequirementsStreamingAnalytics.AdType;d.playVideoContentPart({ns_st_cl:b.videoDuration},a.LinearOnDemandMidRoll)},g=function(b){var a=b.mData||{};return{ns_st_ci:b.contentId||\"*null\",ns_st_cl:a.videoDuration||\"*null\",ns_st_pu:a.videoFranchise||\"*null\",ns_st_pr:decodeURIComponent(a?a.videoName||\"*null\":\"*null\"),c3:b.contentCollection,ns_st_tpr:\"*null\",ns_st_ep:\"*null\",ns_st_tep:\"*null\",ns_st_sn:\"*null\",ns_st_en:\"*null\",\nns_st_ge:a.videoType||\"*null\",ns_st_ia:1,ns_st_ddt:\"*null\",ns_st_tdt:\"*null\",ns_st_st:\"*null\",c4:\"*null\",c6:\"*null\",ns_st_ce:\"*null\"}}}catch(e){console.log(\"gracefully failed to load comscore.\")}})(window);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 113
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/a1.nyt.com\/analytics\/comscore-streaming.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 114
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){function f(){if(\"MozAppearance\"in document.documentElement.style){var a=indexedDB.open(\"test\");a.onerror=c;a.onsuccess=d;return!0}}function e(a){b.nyt_et\u0026\u0026nyt_et({subject:\"page_update\",isIncognito:a})}var c,d;b.nyt_et\u0026\u0026function(a,g){c=a||function(){};d=g||function(){};b.webkitRequestFileSystem?(b.webkitRequestFileSystem(b.TEMPORARY,1,d,c),a=!0):a=void 0;if(!(a=a||f()))a:if(0\u003CObject.prototype.toString.call(b.HTMLElement).indexOf(\"Constructor\")||\"[object SafariRemoteNotification]\"===(!b.safari||\nsafari.pushNotification).toString()||b.localStorage\u0026\u0026\/Safari\/.test(b.navigator.userAgent)){try{b.openDatabase(null,null,null,null)}catch(h){c();a=!0;break a}try{localStorage.length||(localStorage.x=1,localStorage.removeItem(\"x\")),d()}catch(h){navigator.cookieEnabled?c():d()}a=!0}else a=void 0;a||(b.indexedDB||!b.PointerEvent\u0026\u0026!b.MSPointerEvent?a=void 0:(c(),a=!0));a||d()}(function(){e(!0)},function(){e(!1)})})(window);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 120
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){nyt_et(\"send\",{subject:\"ab_alloc\",allocs:[{name:", ["escape", ["macro", 507], 8, 16], ",variant:", ["escape", ["macro", 508], 8, 16], "}],gtm:", ["escape", ["macro", 460], 8, 16], "})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 123
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var d=\"a.nytimes.com\",e=", ["escape", ["macro", 29], 8, 16], "||encodeURIComponent(document.referrer),f=", ["escape", ["macro", 18], 8, 16], "||encodeURIComponent(document.location.href),a=new XMLHttpRequest;a.withCredentials=!0;a.open(\"GET\",\"https:\/\/\"+d+\"\/svc\/nyt\/data-layer?sourceApp\\x3d\"+", ["escape", ["macro", 142], 8, 16], "+\"\\x26referrer\\x3d\"+e+\"\\x26assetUrl\\x3d\"+f+\"\\x26jkcd\\x3d\"+Date.now(),!0);a.onload=function(){var c=JSON.parse(a.responseText);c.event=\"pageDataReady\";window[b].push(c)};a.addEventListener(\"error\",function(){window[b].push({event:\"pageDataReady\"})});\na.send()})(\"dataLayer\");\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 124
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 50, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=setInterval(function(){window.facebookPixel\u0026\u0026window.facebookPixel.fire\u0026\u0026(window.facebookPixel.fire({pixelName:\"NewsletterSignup\"}),clearInterval(a))},1E3)})();\u003C\/script\u003E  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 134
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\" id=\"media_temp\"\u003E(function(){var a=JSON.parse(JSON.stringify(", ["escape", ["macro", 505], 8, 16], "));a.subject=\"media\";a.gtm=", ["escape", ["macro", 460], 8, 16], ";nyt_et(\"send\",a);dataLayer.push({media:null});if(a=document.querySelector(\"#media_temp\"))a.outerHTML=\"\"})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 140
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003EnytAnalytics.slideshow({slideshow:", ["escape", ["macro", 509], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 141
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){nyt_et(\"send\",{subject:\"ab_expose\",test:", ["escape", ["macro", 507], 8, 16], ",variant:", ["escape", ["macro", 508], 8, 16], ",gtm:", ["escape", ["macro", 460], 8, 16], "})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 147
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.nyt_et\u0026\u0026nyt_et(\"send\",{subject:\"page_update\",jsonKidd:", ["escape", ["macro", 516], 8, 16], ",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 29], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 511], 8, 16], ",gtm:", ["escape", ["macro", 460], 8, 16], ",presentation:", ["escape", ["macro", 475], 8, 16], "})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 154
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 1, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c){a\u0026\u0026a.length\u0026\u0026(nyt_et(\"send\",{subject:\"ab_alloc\",allocs:a}),a=window.google_tag_manager[", ["escape", ["macro", 457], 8, 16], "],a.dataLayer.set(\"abtest\",void 0),a.dataLayer.set(\"allocs\",void 0))})(", ["escape", ["macro", 518], 8, 16], ",", ["escape", ["macro", 519], 8, 16], ",", ["escape", ["macro", 520], 8, 16], ");\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 171
            }, {
                "function": "__html",
                "metadata": ["map"],
                "consent": ["list"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript id=\"gtm_beforeunload_temp\" type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"beforeunload\",function(){window.dataLayer.push({event:\"beforeunload\"});nytAnalytics.exitPriority=!0});(function(){var a=document.querySelector(\"#gtm_beforeunload_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 172
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Enyt_et.get_pageview_id()\u0026\u0026nyt_et(\"send\",{subject:\"page_exit\",assetUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 29], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),activeTime:(window.nytAnalytics||{}).activeTime,exit:!0,gtm:", ["escape", ["macro", 460], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 173
            }, {
                "function": "__html",
                "metadata": ["map"],
                "consent": ["list"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.iterateSettings={apiKey:\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiNWMwOThiM2QxNjU0YzEwMDAxMmM2OGY5IiwiaWF0IjoxNTQ0MTI5MzQxfQ.UI13nEXGs0udbZxhjyFLruAEed42XwFO4fZlCqOgY1o\"};\n(function(a,d,f,g,h){function e(){b=d.createElement(f);b.id=g;b.async=1;b.src=\"https:\/\/platform.iteratehq.com\/loader.js\";k.parentNode.insertBefore(b,k)}if(!d.getElementById(g)){a.IterateObjectName=h;var c=function(){c.c(arguments)};c.q=[];c.c=function(l){c.q.push(l)};a[h]=c;var b,k=d.getElementsByTagName(f)[0];\"complete\"===d.readyState?e():a.attachEvent?a.attachEvent(\"onload\",e):a.addEventListener(\"load\",e,!1)}})(window,document,\"script\",\"iterate-js\",\"Iterate\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(window.Iterate\u0026\u0026\"function\"===typeof Iterate){var subscriberInfo=\"", ["escape", ["macro", 489], 7], "\",uType=\"", ["escape", ["macro", 155], 7], "\",eduSubscriber=\"object\"===typeof subscriberInfo?subscriberInfo.eduSubscriber:\"\",userType=\"string\"===typeof uType?uType:\"\",params={eduSubscriber:eduSubscriber,userType:userType};Iterate(\"identify\",params)}}catch(a){console.log(a)};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 175
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript id=\"gtm_postMessage_tmp\" type=\"text\/gtmscript\"\u003E(function(){function b(a){var b={pageDataReady:!0,scrollComplete:!0,heartbeat:!0,moduleInteraction:!0,trackVirtualPage:!0,dynamicElementsLoaded:!0,videoEvent:!0,mediaEvent:!0,impression:!0,performance:!0,error:!0,\"ab-alloc\":!0,\"ab-expose\":!0,\"send-direct\":!0};\"object\"===typeof a.data\u0026\u0026\"string\"===typeof a.data.event\u0026\u0026b[a.data.event]\u0026\u0026(\/nytimes.com\/.test(a.origin)\u0026\u0026dataLayer.push(a.data),\/googlesyndication.com\/.test(a.origin)\u0026\u0026(a=JSON.parse(JSON.stringify(a.data)),\"moduleInteraction\"===a.event\u0026\u0026(delete a.event,\na.subject=\"dfp-ad-events\",a={event:\"send-direct\",payload:a}),dataLayer.push(a)))}window.addEventListener(\"message\",b,!1)})();(function(){var b=document.querySelector(\"#gtm_postMessage_tmp\");b\u0026\u0026b.parentNode.removeChild(b)})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 176
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Ciframe name=\"__bkframe\" height=\"0\" width=\"0\" frameborder=\"0\" style=\"display:none;position:absolute;clip:rect(0px 0px 0px 0px)\" src=\"about:blank\"\u003E\u003C\/iframe\u003E \n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tags.bkrtx.com\/js\/bk-coretag.js\"\u003E\u003C\/script\u003E \n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){bk_addPageCtx(\"url\",window.location.href);bk_addPageCtx(\"gatewayhit\",!0);var a=50134;navigator.userAgent.match(\/Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry|RIM\/i)\u0026\u0026(a=50747);bk_allow_multiple_calls=!0;bk_doJSTag(a,4)})();\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 178
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"et2-send-direct\" type=\"text\/gtmscript\"\u003E\"function\"===typeof nyt_et\u0026\u0026nyt_et(\"send\",", ["escape", ["macro", 521], 8, 16], ");(function(a){a.parentNode.removeChild(a)})(document.getElementById(\"et2-send-direct\"));\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 179
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 0, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"performance_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.performance({performance:", ["escape", ["macro", 474], 8, 16], "});(function(){var a=document.querySelector(\"#performance_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 182
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b,c,d,e,f){a.ddjskey=e;a.ddoptions=f||null;a=b.createElement(c);b=b.getElementsByTagName(c)[0];a.async=1;a.src=d;b.parentNode.insertBefore(a,b)}(window,document,\"script\",\"https:\/\/dd.nytimes.com\/tags.js\",\"499AE34129FA4E4FABC31582C3075D\",{endpoint:\"https:\/\/dd.nytimes.com\/js\/\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 183
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"e1c4c748-041c-4910-989a-1847d8a95fb2\");snaptr(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 184
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\" id=\"et_mediaevent_temp\"\u003E(function(){var a=JSON.parse(JSON.stringify(", ["escape", ["macro", 505], 8, 16], "));\"object\"===typeof a\u0026\u0026\"video-player\"==a.module\u0026\u0026\"function\"==typeof nyt_et\u0026\u0026(a.subject=\"interaction\",nyt_et(\"send\",a));if(a=document.querySelector(\"#et_mediaevent_temp\"))a.outerHTML=\"\"})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 185
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=", ["escape", ["macro", 158], 8, 16], "||\"\",c=", ["escape", ["macro", 394], 8, 16], "||\"\",a={};b\u0026\u0026(a.regi_id=b);c\u0026\u0026(a.playaction=c);a[\"WT.tx_e\"]=\"s\";a[\"WT.si_n\"]=\"MiniGame\";a[\"WT.si_x\"]=\"2\";a[\"WT.si_p\"]=\"GameLoad\";ORA.click({data:a})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1208
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=", ["escape", ["macro", 158], 8, 16], "||\"\",a={};0\u003Cb.toString().length\u0026\u0026(a.regi_id=b);a[\"WT.tx_e\"]=\"v\";a[\"WT.si_n\"]=\"MiniGame\";a[\"WT.si_x\"]=\"1\";a[\"WT.si_p\"]=\"GamePage\";ORA.view({data:a})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1210
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/c.oracleinfinity.io\/acs\/account\/cialth61ui\/js\/main\/odc.js?_ora.context=analytics:production\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1212
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"874326db-7dc3-49c4-a8b2-8e29732a9ff7\");snaptr(\"track\",\"SIGN_UP\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1216
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){dataLayer.push({event:\"podcast_link\"})})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1248
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=863877236,google_conversion_label=\"7k1QCNb3ztwBEPTw9psD\",google_remarketing_only=!1,google_allow_ad_personalization_signals=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1255
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){dataLayer.push({module:null,card:null,block:null,eventData:null})})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 119
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=function(a){return\"string\"===typeof a?a.toLowerCase():a},n=function(a){if(!a)return{};a=decodeURI(a);try{return a='{\"'+a.replace(\/[\u0026]+\/g,\"\\x26\").replace(\/([\\?\u0026][^=]+)([\u0026]|$)\/g,\"$1\\x3d$2\").replace(\/(^\\?|\u0026$)\/g,\"\").replace(\/\u0026\/g,'\",\"').replace(\/=\/g,'\":\"')+'\"}',JSON.parse(a)}catch(c){return{}}},m=function(){var a=window.navigator.userAgent,c=", ["escape", ["macro", 29], 8, 16], "||document.referrer,e=document.location.href,b=n(document.location.search);-1\u003Cc.indexOf(\"?\")\u0026\u0026n(c.substr(c.indexOf(\"?\")));var d=\nc,f=\"src smid nl nrx partner campaignid mcid meid\".split(\" \"),h=\/^[^:]*:\\\/\\\/([^\\\/]*)\/,m=f.length,k;for(k=0;k\u003Cm;k++)if(b[f[k]]){var l=f[k];break}e=l?b[l]:\"\"!==d\u0026\u0026d.match(h)?d.match(h)[1]||\"\":\"\"===d\u0026\u0026\/\\.app\/.test(e)?\"NYT Mobile Apps\":\/FBIOS\/.test(a)?\"FBIOS\":\/FBAN\/.test(a)?\"FBAN\":\"\";l=r(e,b);d=e;a=b;f=c;h=\"NYT Mobile Apps\"===d||\"cur\"===a.smtyp||!!a.nl||\"sms\"===a.src||a.smprod\u0026\u0026a.smprod.indexOf\u0026\u0026(-1\u003Ca.smprod.indexOf(\"nytnow\")||-1\u003Ca.smprod.indexOf(\"tools\"))||a.partner\u0026\u0026a.partner.indexOf\u0026\u0026(-1\u003Ca.partner.indexOf(\"rss\")||\n-1\u003Ca.partner.indexOf(\"socialFlow\"))||!!a.nrx||d\u0026\u0026d.indexOf\u0026\u0026-1\u003Cd.indexOf(\"nytimes.com\")||g(d)===g(\"SafariPush\");a.mcid||a.meid||\"pay\"===a.smtyp||\/aud_dev\/.test(a[\"WT.mc_id\"])||\/paid.outbrain.com\/.test(f)?d=\"paid\":h?d=\"owned\":(p.test(d)\u0026\u0026d.indexOf(\"nytimes.com\"),d=\"earned\");a=e;f=\/naver|aol|lycos|search.netscape|cnn|mamma|terra|search.virgilio|alice|eniro|yahoo|aol|about|voila|baidu|yandex|wp|online.onetcenter|yam|rambler|daum|msn|bing|ask|altavista|alltheweb|bing|najdi|aol|seznam|search|duckduckgo|mynet|ekolay|pchome|kvasir|sesam|ozu|szukacz|google\/;\nh=\/\\.(facebook|twitter|reddit|pinterest|getpocket|stumbleupon|myspace|fark|digg|linkedin|plus.url.google|disqus|quora|yelp|meetup|goodreads|weibo|tumblr|instagram|urbanspoon|weebly|youtube|ycombinator|vk|meneame)\\.\/;c=f.test(a)?\"search\":q(a)||h.test(a)||\"t.co\"===a?\"social\":\/nytimes.com|nytnow.com\/.test(a)||\"NYT Mobile Apps\"===a?\"internal\":!b.moc\u0026\u0026!b.meid||null!==c\u0026\u0026\"\"!==c?(b.mcid||b.mc)\u0026\u0026null!==a?\"marketing_campaign\":b.nl||b.emc?\"newsletter\":null===a?null:g(a)===g(\"SafariPush\")||\"sms\"===a?\"notifications\":\n\"referring_links\":\"marketing_email\";b=e;b=\"string\"===typeof b\u0026\u0026\"SafariPush\"===b?b.toLowerCase():b;return{source:b,subchannel:l,type:d,channel:c}},p=\/.*\\..*\/,q=function(a){if(a){var c=\/^(fb\\-|tw\\-|pin\\-|pi\\-|pinterest\\-|re\\-|go\\-|li\\-|in\\-|kk\\-|ln\\-|wc\\-)\/;a=a\u0026\u0026a.match\u0026\u0026a.match(c);if(Array.isArray(a))return a[1]}},r=function(a,c){if(c.meid)return\"marketing email\";if(c.nl||c.emc)return\"Newsletter\";if(\"FBAN\"===a||\"FBIOS\"===a)return\"facebook\";if(\"NYT Mobile Apps\"==a)return a;if(\"sms\"===a)return\"sms notifications\";\nif(g(a)===g(\"SafariPush\"))return\"safari notifications\";if(p.test(a)){var e=\"stumbleupon typepad blogspot digg disqus facebook fark getpocket google linkedin Social pinterest quora reddit scoop slashdot twitter techmeme tinyurl vk\".split(\" \");var b={stumbleupon:\/corp.stumbleupon.com|stumbleupon.com\/,typepad:\/delong.typepad.com|economistsview.typepad.com\/,blogspot:\/digbysblog.blogspot.com\/,digg:\/digg.com\/,disqus:\/disqus.com\/,facebook:\/facebook.com|fb-nytdining|fb-nytimes|fb-nytmetro\u0026smtyp=cur|fb-nytopinion|fb-nytpolitics|fb-nytvideo|fb-share|fb-share?utm_hp_ref=parents|l.facebook.com|lm.facebook.com|m.facebook.com|www.facebook.com\/,\nfark:\/fark.com\/,getpocket:\/getpocket.com\/,google:\/go-share|gp-nytimes|plus.url.google.com\/,linkedin:\/li-nytimes|li-share|linkedin.com|lnkd.in\/,Social:\/netvibes.com|news.ycombinator.com|nythealth|nytimesarts|nytimesphoto|nytpolitics|nytscience|paper.li|pl-share\/,pinterest:\/pi-nytimes|pin-share|pinterest.com\/,quora:\/quora.com\/,reddit:\/re-share|re-share\/,scoop:\/scoop.it\/,slashdot:\/slashdot.org\/,twitter:\/t.co$|tw-bna|tw-dealbook|tw-nytdavidbrooks|tw-nytfashion|tw-nytfood|tw-nythealth|tw-nytimes|tw-nytimesbits|tw-nytimesbusiness|tw-nytimeskrugman|tw-nytimesmap|tw-nytimesmusic|tw-nytimesscience|tw-nytimestech|tw-nytimestheater|tw-nytimestravel|tw-nytimeswell|tw-nytimesworld|tw-nytmag|tw-nytmedia|tw-nytmetro|tw-nytmovies|tw-nytnational|tw-nytopinion|tw-nytstyles|tw-nytvideo|tw-share|tw-tmagazine|tw-upshotnyt\/,\ntechmeme:\/techmeme.com\/,tinyurl:\/tinyurl.com\/,vk:\/vk.com\/};ln=e.length;for(i=i=0;i\u003Cln;i++)if(b[e[i]].test(a))return rollup=e[i];return a}e={\"fb-\":\"facebook\",\"tw-\":\"twitter\",\"pin-\":\"pinterest\",\"pi-\":\"pinterest\",\"pinterest-\":\"pinterest\",\"re-\":\"reddit\",\"go-\":\"googleplus\",\"li-\":\"linkedin\",\"in-\":\"instagram\",\"kk-\":\"kakao\",\"ln-\":\"line\",\"wc-\":\"wechat\"};return e[q(a)]};window.nytAnalytics=window.nytAnalytics||{};nytAnalytics.derivedReferrer=m()})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 70
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 92, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var h=\"src|smprod|emc|smid|nl|partner|nrx|WT.mc_id|oc|CMP|mc|meid\",l=new RegExp(\"\\\\|(\"+h+\")\\x3d\",\"g\"),m=function(a){return function(c,b){var f=a.indexOf(c),e=a.indexOf(b);return f\u003Ee?1:f\u003Ce?-1:0}}(h.split(\"|\")),n=function(a,f){var b={campaignSource:a,campaignMedium:\"notifications\",campaignContent:c(f,\"msgid\")};\"sms\"===a.toLowerCase()\u0026\u0026(b.campaignName=f.subid);return b},c=function(a,c,b){return\"object\"===typeof a\u0026\u0026a.hasOwnProperty(c)?a[c]:b?b:\"\"},k=function(a){if(!a)return{};a=decodeURI(a);\ntry{return a='{\"'+a.replace(\/[\u0026]+\/g,\"\\x26\").replace(\/([\\?\u0026][^=]+)([\u0026]|$)\/g,\"$1\\x3d$2\").replace(\/(^\\?|\u0026$)\/g,\"\").replace(\/\u0026\/g,'\",\"').replace(\/=\/g,'\":\"')+'\"}',JSON.parse(a)}catch(f){return{}}};h=function(){var a,f=", ["escape", ["macro", 142], 8, 16], ",b={},g=", ["escape", ["macro", 29], 8, 16], ";var e=document.location.search||\"\";if(g\u0026\u0026\/.*\\.nytimes\\.com\/.test(g)||!e)return b;var d=k(e);if(a=e.replace(\/\\?|\u0026\/g,\"|\").match(l)){a=a.map(function(a){return a.replace(\/[\\|=]\/g,\"\")}).sort(m);d=k(e);b.campaignName=c(d,\"subid\");b.campaignContent=\nc(d,\"subid1\");b.campaignKeyword=c(d,\"subid2\")||c(d,\"ad-keywords\");e=a.shift();\"src\"===e\u0026\u0026\"safaripush\"!==c(d,e)\u0026\u0026\"sms\"!==c(d,e)\u0026\u0026(e=a.shift());if(\"smprod\"===e\u0026\u0026\"eta1\"===c(d,\"emc\")||\"emc\"===e\u0026\u0026\"eta1\"!==c(d,e)\u0026\u0026\"edit_na\"!==c(d,e)||\"smid\"===e\u0026\u0026\"\"!==c(d,\"nrx\"))e=a.shift();\"mc\"===e\u0026\u0026\"\"===c(d,\"mcid\")\u0026\u0026(e=a.shift());if(e)switch(a=c(d,e),e){case \"src\":b=n(a,d);break;case \"nl\":b={campaignSource:a,campaignMedium:\"email\",campaignName:c(d,\"emc\"),campaignContent:c(d,\"em_pos\")};break;case \"smid\":b={campaignSource:a,\ncampaignMedium:\"social\",campaignName:c(d,\"smtyp\"),campaignContent:c(d,\"smvar\")};break;case \"smprod\":b={campaignSource:function(){if(g){var a=g.match(\/https?:\\\/\\\/([^\/]*)\/);return a?a[1]:g}return\"nyt-fb-native-external-iframe\"===f?\"m.facebook.com\":\"null\"}(),campaignMedium:\"social\",campaignName:c(d,\"smid\"),campaignContent:a};break;case \"partner\":b.campaignSource=a;b.campaignMedium=\"rss\"===a.toLowerCase()?\"RSS\":\"partner\";break;case \"emc\":b=\"edit_na\"===a?{campaignName:c(d,\"emc\"),campaignContent:c(d,\"empos\"),\ncampaignSource:\"Breaking News\",campaignMedium:\"email\"}:{campaignSource:\"nytnow\",campaignMedium:\"email share\",campaignName:\"share tool\"};break;case \"nrx\":b.campaignSource=a;b.campaignMedium=\"Vanity URL\";break;case \"WT.mc_id\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"oc\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"CMP\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"mc\":b.campaignSource=c(d,\"mcid\");b.campaignMedium=a;break;\ncase \"meid\":b.campaignSource=a,b.campaignMedium=\"marketing email\",b.campaignName=c(d,\"moc\"),b.campaignContent=c(d,\"rid\"),b.campaignKeyword=c(d,\"dt\")}}return b};nytAnalytics=window.nytAnalytics||{};nytAnalytics.campaignMap=h()})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 66
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.historyChange"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 5],
                "arg1": "track"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "scrollComplete"
            }, {
                "function": "_sw",
                "arg0": ["macro", 6],
                "arg1": "out"
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "^.{5}s"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "\/section\/learning"
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "^.{4}e"
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "^.{4}p"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": ".*"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": "\\w+\\%40\\w+\\.\\w+|\\w+\\@\\w+\\.\\w+"
            }, {
                "function": "_eq",
                "arg0": ["macro", 14],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "moduleInteraction"
            }, {
                "function": "_sw",
                "arg0": ["macro", 8],
                "arg1": "\/real-estate\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "videoEvent"
            }, {
                "function": "_re",
                "arg0": ["macro", 8],
                "arg1": "^\\\/(real-estate|paidpost)\\\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "mediaEvent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "pageDataReady"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gaScrollEvent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 417],
                "arg1": "1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 418],
                "arg1": "1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 428],
                "arg1": "event"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "gaEvent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 11],
                "arg1": "newsletters"
            }, {
                "function": "_eq",
                "arg0": ["macro", 390],
                "arg1": "subscribe"
            }, {
                "function": "_eq",
                "arg0": ["macro", 444],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 11],
                "arg1": "gateway"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "impression"
            }, {
                "function": "_eq",
                "arg0": ["macro", 447],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "\/share"
            }, {
                "function": "_cn",
                "arg0": ["macro", 394],
                "arg1": "referral-advocate-landing-page"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "\/newsletters\/morning-briefing"
            }, {
                "function": "_ew",
                "arg0": ["macro", 8],
                "arg1": "\/podcasts\/daily-newsletter-quarantine-virus.html"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "\/news-event\/coronavirus"
            }, {
                "function": "_cn",
                "arg0": ["macro", 88],
                "arg1": "The Daily"
            }, {
                "function": "_cn",
                "arg0": ["macro", 427],
                "arg1": "\/the-daily"
            }, {
                "function": "_cn",
                "arg0": ["macro", 427],
                "arg1": "universal\/introducing-father-soldier-son-a-film-from-the-times-and-netflix.html"
            }, {
                "function": "_cn",
                "arg0": ["macro", 402],
                "arg1": "user-play"
            }, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "podcasts\/nice-white-parents-serial"
            }, {
                "function": "_cn",
                "arg0": ["macro", 448],
                "arg1": "playing"
            }, {
                "function": "_re",
                "arg0": ["macro", 449],
                "arg1": "Via.*(Apple Podcasts|Spotify|Google)"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 450],
                "arg1": "(^$|((^|,)2703797_1249($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 450],
                "arg1": "(^$|((^|,)2703797_1251($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 450],
                "arg1": "(^$|((^|,)2703797_1252($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "opinion\/sway-kara"
            }, {
                "function": "_re",
                "arg0": ["macro", 449],
                "arg1": "Apple Podcasts|Spotify|Google|Stitcher"
            }, {
                "function": "_re",
                "arg0": ["macro", 450],
                "arg1": "(^$|((^|,)2703797_1259($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "\/newsletters\/coronavirus-schools-briefing"
            }, {
                "function": "_eq",
                "arg0": ["macro", 454],
                "arg1": "commentsContainer"
            }, {
                "function": "_eq",
                "arg0": ["macro", 455],
                "arg1": "commentsContainer"
            }, {
                "function": "_re",
                "arg0": ["macro", 461],
                "arg1": "module|card|block",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "heartbeat"
            }, {
                "function": "_eq",
                "arg0": ["macro", 477],
                "arg1": "1"
            }, {
                "function": "_gt",
                "arg0": ["macro", 478],
                "arg1": "0"
            }, {
                "function": "_eq",
                "arg0": ["macro", 500],
                "arg1": "1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 461],
                "arg1": "slideshow"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "allocation"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "trackVirtualPage"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "ab-expose"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "ab-alloc"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "beforeunload"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "\/interactive\/2020\/08\/27\/arts\/design\/jackson-heights-queens-virtual-walk-tour.html"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "\/interactive\/2020\/10\/12\/style\/faze-3d-house-tour.html"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "send-direct"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "performance"
            }, {
                "function": "_sw",
                "arg0": ["macro", 8],
                "arg1": "\/crosswords\/game\/mini"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "moduleInteraction"
            }, {
                "function": "_cn",
                "arg0": ["macro", 427],
                "arg1": "\/crosswords\/game\/mini"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "ora.load"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "pageDataReady"
            }, {
                "function": "_sw",
                "arg0": ["macro", 8],
                "arg1": "\/games"
            }, {
                "function": "_sw",
                "arg0": ["macro", 8],
                "arg1": "\/crosswords"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 4, 51, 56]
                ],
                [
                    ["if", 1],
                    ["add", 4, 37, 0, 1, 3, 75, 78, 82, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
                ],
                [
                    ["if", 2, 3],
                    ["add", 4, 8]
                ],
                [
                    ["if", 11, 12],
                    ["add", 5]
                ],
                [
                    ["if", 12, 13],
                    ["add", 5]
                ],
                [
                    ["if", 14],
                    ["add", 6, 64]
                ],
                [
                    ["if", 15, 16],
                    ["add", 6]
                ],
                [
                    ["if", 17],
                    ["add", 7, 10, 11, 55, 58, 59, 60, 63, 65, 66, 73, 77]
                ],
                [
                    ["if", 18],
                    ["add", 9]
                ],
                [
                    ["if", 21, 22],
                    ["add", 12]
                ],
                [
                    ["if", 12, 23, 24],
                    ["add", 13, 15, 18, 19, 69]
                ],
                [
                    ["if", 17],
                    ["unless", 25],
                    ["add", 14, 16, 22, 50, 83, 90]
                ],
                [
                    ["if", 26, 27],
                    ["add", 17, 20, 21, 79]
                ],
                [
                    ["if", 27, 28],
                    ["add", 23]
                ],
                [
                    ["if", 13, 27],
                    ["add", 23]
                ],
                [
                    ["if", 12, 29, 30],
                    ["add", 24]
                ],
                [
                    ["if", 12, 24, 31],
                    ["add", 25]
                ],
                [
                    ["if", 17, 32],
                    ["add", 26]
                ],
                [
                    ["if", 17, 33],
                    ["add", 27]
                ],
                [
                    ["if", 17, 34, 35],
                    ["add", 28]
                ],
                [
                    ["if", 17, 36],
                    ["add", 29]
                ],
                [
                    ["if", 16, 37, 38, 39],
                    ["add", 30]
                ],
                [
                    ["if", 17, 38],
                    ["add", 31]
                ],
                [
                    ["if", 38, 40, 41, 42],
                    ["add", 32, 89]
                ],
                [
                    ["if", 17, 45],
                    ["add", 33]
                ],
                [
                    ["if", 41, 45, 46, 47],
                    ["add", 34]
                ],
                [
                    ["if", 16, 37, 39, 45],
                    ["add", 35]
                ],
                [
                    ["if", 12, 23, 24, 48],
                    ["add", 36]
                ],
                [
                    ["if", 12],
                    ["add", 52]
                ],
                [
                    ["if", 3],
                    ["add", 53, 55]
                ],
                [
                    ["if", 52],
                    ["add", 54]
                ],
                [
                    ["if", 12, 54],
                    ["add", 57]
                ],
                [
                    ["if", 27, 55],
                    ["unless", 56],
                    ["add", 61]
                ],
                [
                    ["if", 12, 51],
                    ["add", 62],
                    ["block", 52]
                ],
                [
                    ["if", 57],
                    ["add", 67]
                ],
                [
                    ["if", 58],
                    ["add", 68, 3, 2]
                ],
                [
                    ["if", 16],
                    ["add", 70, 84]
                ],
                [
                    ["if", 27, 56],
                    ["add", 71]
                ],
                [
                    ["if", 59],
                    ["add", 72]
                ],
                [
                    ["if", 60],
                    ["add", 74]
                ],
                [
                    ["if", 61],
                    ["add", 76]
                ],
                [
                    ["if", 64],
                    ["add", 80]
                ],
                [
                    ["if", 65],
                    ["add", 81]
                ],
                [
                    ["if", 66, 67],
                    ["add", 85]
                ],
                [
                    ["if", 68, 69],
                    ["add", 86]
                ],
                [
                    ["if", 66, 70],
                    ["add", 87]
                ],
                [
                    ["if", 17, 71],
                    ["unless", 25],
                    ["add", 88]
                ],
                [
                    ["if", 17, 72],
                    ["unless", 25],
                    ["add", 88]
                ],
                [
                    ["if", 1, 4],
                    ["block", 4]
                ],
                [
                    ["if", 0, 4],
                    ["block", 4]
                ],
                [
                    ["if", 1, 5],
                    ["block", 4]
                ],
                [
                    ["if", 0, 5],
                    ["block", 4]
                ],
                [
                    ["if", 1, 6],
                    ["block", 4]
                ],
                [
                    ["if", 0, 6],
                    ["block", 4]
                ],
                [
                    ["if", 0, 7],
                    ["block", 4]
                ],
                [
                    ["if", 0, 8],
                    ["block", 4]
                ],
                [
                    ["if", 1, 7],
                    ["block", 4]
                ],
                [
                    ["if", 1, 8],
                    ["block", 4]
                ],
                [
                    ["if", 4, 9],
                    ["block", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 33, 35, 36, 50, 58, 59, 60, 64, 65, 69, 77, 79, 83, 85, 86, 87, 88, 90]
                ],
                [
                    ["if", 6, 9],
                    ["block", 4, 8, 10, 15, 16, 18, 20, 21, 50, 59, 60, 64, 65, 69, 79, 83]
                ],
                [
                    ["if", 7, 9],
                    ["block", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 33, 35, 36, 50, 58, 59, 60, 64, 65, 69, 77, 79, 83, 85, 86, 87, 88, 90]
                ],
                [
                    ["if", 8, 9],
                    ["block", 4, 8, 10, 15, 16, 18, 20, 21, 50, 59, 60, 64, 65, 69, 79, 83, 88, 90]
                ],
                [
                    ["if", 5, 9],
                    ["block", 4, 8, 64, 65]
                ],
                [
                    ["if", 9, 10],
                    ["block", 5, 6, 7, 9, 11, 12, 13, 14, 17, 18, 23, 36]
                ],
                [
                    ["if", 9, 19, 20],
                    ["block", 10, 59, 60]
                ],
                [
                    ["if", 4, 41, 43],
                    ["block", 32, 34]
                ],
                [
                    ["if", 7, 41, 44],
                    ["block", 32, 34]
                ],
                [
                    ["if", 0, 49],
                    ["block", 51]
                ],
                [
                    ["if", 0, 50],
                    ["block", 51]
                ],
                [
                    ["if", 9, 53],
                    ["block", 55]
                ],
                [
                    ["if", 9, 62],
                    ["block", 77]
                ],
                [
                    ["if", 9, 63],
                    ["block", 77]
                ]
            ]
        },
        "runtime": [
            [50, "__twitter_website_tag", [46, "a"],
                [50, "i", [46],
                    [41, "l"],
                    [3, "l", ["d", "twq"]],
                    [22, [15, "l"],
                        [46, [36, [15, "l"]]]
                    ],
                    ["h", "twq", [51, "", [7],
                        [52, "n", ["d", "twq.exe.apply"]],
                        [22, [15, "n"],
                            [46, ["c", "twq.exe.apply", [45],
                                [15, "arguments"]
                            ]],
                            [46, ["c", "twq.queue.push", [15, "arguments"]]]
                        ]
                    ], true],
                    ["h", "twq.version", "1", true],
                    ["h", "twq.queue", [7], true],
                    [52, "m", [51, "", [7]]],
                    ["e", "https://static.ads-twitter.com/uwt.js", [15, "m"],
                        [15, "m"], "twitter_website_tag"
                    ],
                    [36, ["d", "twq"]]
                ],
                [52, "b", ["require", "createArgumentsQueue"]],
                [52, "c", ["require", "callInWindow"]],
                [52, "d", ["require", "copyFromWindow"]],
                [52, "e", ["require", "injectScript"]],
                [52, "f", ["require", "makeString"]],
                [52, "g", ["require", "makeTableMap"]],
                [52, "h", ["require", "setInWindow"]],
                [41, "j"],
                [3, "j", ["i"]],
                ["j", "init", ["f", [17, [15, "a"], "twitter_pixel_id"]]],
                [52, "k", ["g", [30, [17, [15, "a"], "event_parameters"],
                    [7]
                ], "param_table_key_column", "param_table_value_column"]],
                [22, [1, [15, "k"],
                        [2, [15, "k"], "hasOwnProperty", [7, "content_ids"]]
                    ],
                    [46, [53, [41, "l"],
                        [3, "l", [16, [15, "k"], "content_ids"]],
                        [3, "l", [2, [2, [15, "l"], "split", [7, "\""]], "join", [7, "\u0027"]]],
                        [41, "m"],
                        [3, "m", [2, [2, [15, "l"], "slice", [7, [2, [15, "l"], "indexOf", [7, "["]],
                            [2, [15, "l"], "indexOf", [7, "]"]]
                        ]], "split", [7, ","]]],
                        [3, "m", [2, [15, "m"], "map", [7, [51, "", [7, "n"],
                            [36, [30, [16, [2, [15, "n"], "split", [7, "\u0027"]], 1], ""]]
                        ]]]],
                        [43, [15, "k"], "content_ids", [15, "m"]]
                    ]]
                ],
                ["j", "track", ["f", [17, [15, "a"], "event_type"]],
                    [15, "k"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ]
        ],
        "permissions": {
            "__twitter_website_tag": {
                "access_globals": {
                    "keys": [{
                        "key": "twq",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.exe",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.queue",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.queue.push",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.version",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "twq.exe.apply",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.ads-twitter.com\/uwt.js"]
                }
            }
        }

        ,
        "security_groups": {
            "nonGoogleScripts": ["__twitter_website_tag"]
        }

    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, da = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    Bg: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.Bg;
                break a
            } catch (a) {}
            ha = !1
        }
        fa = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = fa,
        la = function(a, b) {
            a.prototype = ea(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ri = b.prototype
        },
        ma = this || self,
        qa = function(a) {
            if (a && a != ma) return oa(a.document);
            null === pa && (pa = oa(ma.document));
            return pa
        },
        ra = /^[\w+/_-]+[=]{0,2}$/,
        pa = null,
        oa = function(a) {
            var b = a.querySelector && a.querySelector("script[nonce]");
            if (b) {
                var c = b.nonce || b.getAttribute("nonce");
                if (c && ra.test(c)) return c
            }
            return ""
        },
        ua = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        xa = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ri = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Ki = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        ya = function(a) {
            return a
        };
    var za = function(a, b) {
        this.a = a;
        this.i = b
    };
    var Aa = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        },
        Ba = function() {
            this.B = {};
            this.m = !1;
            this.F = {}
        };
    Ba.prototype.get = function(a) {
        return this.B["dust." + a]
    };
    Ba.prototype.set = function(a, b) {
        this.m || (a = "dust." + a, this.F.hasOwnProperty(a) || (this.B[a] = b))
    };
    Ba.prototype.has = function(a) {
        return this.B.hasOwnProperty("dust." + a)
    };
    var Ca = function(a) {
        var b = [],
            c;
        for (c in a.B) a.B.hasOwnProperty(c) && b.push(c.substr(5));
        return b
    };
    var k = function(a) {
        this.i = new Ba;
        this.a = [];
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (Aa(b) ? this.a[Number(b)] = a[Number(b)] : this.i.set(b, a[b]))
    };
    aa = k.prototype;
    aa.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.a.length; c++) {
            var d = this.a[c];
            null === d || void 0 === d ? b.push("") : d instanceof k ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    aa.set = function(a, b) {
        if ("length" === a) {
            if (!Aa(b)) throw Error("RangeError: Length property must be a valid integer.");
            this.a.length = Number(b)
        } else Aa(a) ? this.a[Number(a)] = b : this.i.set(a, b)
    };
    aa.get = function(a) {
        return "length" === a ? this.length() : Aa(a) ? this.a[Number(a)] : this.i.get(a)
    };
    aa.length = function() {
        return this.a.length
    };
    aa.Bc = function() {
        for (var a = Ca(this.i), b = 0; b < this.a.length; b++) a.push(b + "");
        return new k(a)
    };
    var Da = function(a, b) {
        if (Aa(b)) delete a.a[Number(b)];
        else {
            var c = a.i,
                d;
            d = "dust." + b;
            c.m || c.F.hasOwnProperty(d) || delete c.B[d]
        }
    };
    aa = k.prototype;
    aa.pop = function() {
        return this.a.pop()
    };
    aa.push = function(a) {
        return this.a.push.apply(this.a, Array.prototype.slice.call(arguments))
    };
    aa.shift = function() {
        return this.a.shift()
    };
    aa.splice = function(a, b, c) {
        return new k(this.a.splice.apply(this.a, arguments))
    };
    aa.unshift = function(a) {
        return this.a.unshift.apply(this.a, Array.prototype.slice.call(arguments))
    };
    aa.has = function(a) {
        return Aa(a) && this.a.hasOwnProperty(a) || this.i.has(a)
    };
    var Ea = function() {
        function a(f, g) {
            if (b[f]) {
                if (b[f].sc + g > b[f].max) throw Error("Quota exceeded");
                b[f].sc += g
            }
        }
        var b = {},
            c = void 0,
            d = void 0,
            e = {
                Rh: function(f) {
                    c = f
                },
                df: function() {
                    c && a(c, 1)
                },
                Th: function(f) {
                    d = f
                },
                La: function(f) {
                    d && a(d, f)
                },
                mi: function(f, g) {
                    b[f] = b[f] || {
                        sc: 0
                    };
                    b[f].max = g
                },
                rh: function(f) {
                    return b[f] && b[f].sc || 0
                },
                reset: function() {
                    b = {}
                },
                Zg: a
            };
        e.onFnConsume = e.Rh;
        e.consumeFn = e.df;
        e.onStorageConsume = e.Th;
        e.consumeStorage = e.La;
        e.setMax = e.mi;
        e.getConsumed = e.rh;
        e.reset = e.reset;
        e.consume = e.Zg;
        return e
    };
    var Fa = function(a, b) {
        this.F = a;
        this.R = function(c, d, e) {
            return c.apply(d, e)
        };
        this.m = b;
        this.i = new Ba;
        this.a = this.B = void 0
    };
    Fa.prototype.add = function(a, b) {
        Ga(this, a, b, !1)
    };
    var Ga = function(a, b, c, d) {
        if (!a.i.m)
            if (a.F.La(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
                var e = a.i;
                e.set(b, c);
                e.F["dust." + b] = !0
            } else a.i.set(b, c)
    };
    Fa.prototype.set = function(a, b) {
        this.i.m || (!this.i.has(a) && this.m && this.m.has(a) ? this.m.set(a, b) : (this.F.La(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.i.set(a, b)))
    };
    Fa.prototype.get = function(a) {
        return this.i.has(a) ? this.i.get(a) : this.m ? this.m.get(a) : void 0
    };
    Fa.prototype.has = function(a) {
        return !!this.i.has(a) || !(!this.m || !this.m.has(a))
    };
    var Ha = function(a) {
        var b = new Fa(a.F, a);
        a.B && (b.B = a.B);
        b.R = a.R;
        b.a = a.a;
        return b
    };
    var Ia = function() {},
        Ja = function(a) {
            return "function" == typeof a
        },
        m = function(a) {
            return "string" == typeof a
        },
        Ka = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        La = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        Na = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        Oa = function(a, b) {
            if (a && La(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Pa = function(a, b) {
            if (!Ka(a) ||
                !Ka(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Ra = function(a, b) {
            for (var c = new Qa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Sa = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ta = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Va = function(a) {
            return Math.round(Number(a)) || 0
        },
        Wa = function(a) {
            return "false" ==
                String(a).toLowerCase() ? !1 : !!a
        },
        Xa = function(a) {
            var b = [];
            if (La(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ya = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Za = function() {
            return (new Date).getTime()
        },
        Qa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Qa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Qa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var $a = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        ab = function(a) {
            var b = !1;
            return function() {
                if (!b) try {
                    a()
                } catch (c) {}
                b = !0
            }
        },
        cb = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        db = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        eb = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        gb = function(a, b) {
            var c = B;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <= Na(b, d)) return
            }
            return d
        },
        hb = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        ib = function(a) {
            var b = [];
            Sa(a, function(c, d) {
                10 > c.length && d && b.push(c)
            });
            return b.join(",")
        };
    var jb = function(a, b) {
        Ba.call(this);
        this.a = a;
        this.R = b
    };
    la(jb, Ba);
    jb.prototype.toString = function() {
        return this.a
    };
    jb.prototype.Bc = function() {
        return new k(Ca(this))
    };
    jb.prototype.i = function(a, b) {
        a.F.df();
        return this.R.apply(mb(this, a), Array.prototype.slice.call(arguments, 1))
    };
    var mb = function(a, b) {
        var c = function(d, e) {
            this.i = d;
            this.m = e
        };
        c.prototype.a = function(d) {
            var e = this.m;
            return La(d) ? nb(e, d) : d
        };
        c.prototype.F = function(d) {
            return ob(this.m, d)
        };
        c.prototype.B = function() {
            return b.F
        };
        return new c(a, b)
    };
    jb.prototype.Pa = function(a, b) {
        try {
            return this.i.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var ob = function(a, b) {
            for (var c, d = 0; d < b.length && !(c = nb(a, b[d]), c instanceof za); d++);
            return c
        },
        nb = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof jb)) throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.i.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.B;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        };
    var pb = function() {
        Ba.call(this)
    };
    la(pb, Ba);
    pb.prototype.Bc = function() {
        return new k(Ca(this))
    };
    var qb = {
        control: function(a, b) {
            return new za(a, this.a(b))
        },
        fn: function(a, b, c) {
            var d = this.m,
                e = this.a(b);
            if (!(e instanceof k)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.B().La(a.length + f.length);
            return new jb(a, function() {
                return function(g) {
                    var h = Ha(d);
                    void 0 === h.a && (h.a = this.m.a);
                    for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++)
                        if (l[n] = this.a(l[n]), l[n] instanceof za) return l[n];
                    for (var p = e.get("length"), q =
                            0; q < p; q++) q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new k(l));
                    var t = ob(h, f);
                    if (t instanceof za) return "return" === t.a ? t.i : t
                }
            }())
        },
        list: function(a) {
            var b = this.B();
            b.La(arguments.length);
            for (var c = new k, d = 0; d < arguments.length; d++) {
                var e = this.a(arguments[d]);
                "string" === typeof e && b.La(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        },
        map: function(a) {
            for (var b = this.B(), c = new pb, d = 0; d < arguments.length - 1; d += 2) {
                var e = this.a(arguments[d]) + "",
                    f = this.a(arguments[d + 1]),
                    g = e.length;
                g += "string" ===
                    typeof f ? f.length : 1;
                b.La(g);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var rb = function() {
            this.m = Ea();
            this.a = new Fa(this.m)
        },
        sb = function(a, b, c) {
            var d = new jb(b, c);
            d.m = !0;
            a.a.set(b, d)
        };
    rb.prototype.yc = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.i(c)
    };
    rb.prototype.i = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = nb(this.a, arguments[c]);
        return b
    };
    rb.prototype.B = function(a, b) {
        var c = Ha(this.a);
        c.a = a;
        for (var d, e = 1; e < arguments.length; e++) d = d = nb(c, arguments[e]);
        return d
    };
    var tb = function(a) {
        if (a instanceof tb) return a;
        this.qa = a
    };
    tb.prototype.toString = function() {
        return String(this.qa)
    };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var ub = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        vb = function(a) {
            if (null == a) return String(a);
            var b = ub.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        wb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        xb = function(a) {
            if (!a || "object" != vb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !wb(a, "constructor") && !wb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || wb(a, b)
        },
        E = function(a, b) {
            var c = b || ("array" == vb(a) ? [] : {}),
                d;
            for (d in a)
                if (wb(a, d)) {
                    var e = a[d];
                    "array" == vb(e) ? ("array" != vb(c[d]) && (c[d] = []), c[d] = E(e, c[d])) : xb(e) ? (xb(c[d]) || (c[d] = {}), c[d] = E(e, c[d])) : c[d] = e
                }
            return c
        };
    var Ab = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, l) {
                    for (var n = Ca(h), p = 0; p < n.length; p++) l[n[p]] = g(h.get(n[p]))
                },
                g = function(h) {
                    var l = Na(d, h);
                    if (-1 < l) return e[l];
                    if (h instanceof k) {
                        var n = [];
                        d.push(h);
                        e.push(n);
                        for (var p = h.Bc(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
                        return n
                    }
                    if (h instanceof pb) {
                        var t = {};
                        d.push(h);
                        e.push(t);
                        f(h, t);
                        return t
                    }
                    if (h instanceof jb) {
                        var r = function() {
                            for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = zb(u[v], b, !!c);
                            var x = b ? b.F : Ea(),
                                y = new Fa(x);
                            b && (y.a = b.a);
                            return g(h.i.apply(h, [y].concat(u)))
                        };
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null
                    }
                };
            return g(a)
        },
        zb = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, l) {
                    for (var n in h) h.hasOwnProperty(n) && l.set(n, g(h[n]))
                },
                g = function(h) {
                    var l = Na(d,
                        h);
                    if (-1 < l) return e[l];
                    if (La(h) || Ta(h)) {
                        var n = new k([]);
                        d.push(h);
                        e.push(n);
                        for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                        return n
                    }
                    if (xb(h)) {
                        var q = new pb;
                        d.push(h);
                        e.push(q);
                        f(h, q);
                        return q
                    }
                    if ("function" === typeof h) {
                        var t = new jb("", function(u) {
                            for (var v = Array.prototype.slice.call(arguments, 0), x = 0; x < v.length; x++) v[x] = Ab(this.a(v[x]), b, !!c);
                            return g((0, this.m.R)(h, h, v))
                        });
                        d.push(h);
                        e.push(t);
                        f(h, t);
                        return t
                    }
                    var r = typeof h;
                    if (null === h || "string" === r || "number" === r || "boolean" === r) return h;
                };
            return g(a)
        };
    var Bb = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        Cb = function(a) {
            if (void 0 === a || La(a) || xb(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
    var Db = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof k)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new k(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.i(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.i(a, this.get(e), e, this) && d.push(this.get(e));
            return new k(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.i(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.i(a, this.get(e), e, this));
            return new k(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.i(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.i(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = Bb(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : Da(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new k(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.i(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Bb(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.i(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : Da(this, d)
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var Eb = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Fb = new za("break"),
        Gb = new za("continue"),
        Hb = function(a, b) {
            return this.a(a) + this.a(b)
        },
        Ib = function(a, b) {
            return this.a(a) && this.a(b)
        },
        Jb = function(a, b, c) {
            a = this.a(a);
            b = this.a(b);
            c = this.a(c);
            if (!(c instanceof k)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            if ("boolean" === typeof a || "number" === typeof a) {
                if ("toString" === b) return a.toString();
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= Na(Eb, b)) return zb(a[b].apply(a, Bb(c)), this.m);
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof k) {
                if (a.has(b)) {
                    var d = a.get(b);
                    if (d instanceof jb) {
                        var e = Bb(c);
                        e.unshift(this.m);
                        return d.i.apply(d, e)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if (0 <= Na(Db.supportedMethods, b)) {
                    var f = Bb(c);
                    f.unshift(this.m);
                    return Db[b].apply(a, f)
                }
            }
            if (a instanceof jb || a instanceof pb) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof jb) {
                        var h = Bb(c);
                        h.unshift(this.m);
                        return g.i.apply(g, h)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof jb ? a.a : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, Bb(c))
            }
            if (a instanceof tb && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" + b + "' property.");
        },
        Kb = function(a, b) {
            a = this.a(a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.m;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = this.a(b);
            c.set(a, d);
            return d
        },
        Lb = function(a) {
            var b = Ha(this.m),
                c = ob(b, Array.prototype.slice.apply(arguments));
            if (c instanceof za) return c
        },
        Mb = function() {
            return Fb
        },
        Nb = function(a) {
            for (var b = this.a(a), c = 0; c < b.length; c++) {
                var d = this.a(b[c]);
                if (d instanceof za) return d
            }
        },
        Ob = function(a) {
            for (var b = this.m, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = this.a(arguments[c + 1]);
                    Ga(b, d, e, !0)
                }
            }
        },
        Pb = function() {
            return Gb
        },
        Qb = function(a, b, c) {
            var d = new k;
            b = this.a(b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.m.add(a, this.a(f))
        },
        Rb = function(a, b) {
            return this.a(a) / this.a(b)
        },
        Sb = function(a, b) {
            a = this.a(a);
            b = this.a(b);
            var c = a instanceof tb,
                d = b instanceof tb;
            return c || d ? c && d ? a.qa == b.qa : !1 : a == b
        },
        Tb = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = this.a(arguments[c]);
            return b
        };

    function Ub(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = ob(f, d);
            if (g instanceof za) {
                if ("break" === g.a) break;
                if ("return" === g.a) return g
            }
        }
    }

    function Vb(a, b, c) {
        if ("string" === typeof b) return Ub(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof pb || b instanceof k || b instanceof jb) {
            var d = b.Bc(),
                e = d.length();
            return Ub(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var Wb = function(a, b, c) {
            a = this.a(a);
            b = this.a(b);
            c = this.a(c);
            var d = this.m;
            return Vb(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Xb = function(a, b, c) {
            a = this.a(a);
            b = this.a(b);
            c = this.a(c);
            var d = this.m;
            return Vb(function(e) {
                var f = Ha(d);
                Ga(f, a, e, !0);
                return f
            }, b, c)
        },
        Yb = function(a, b, c) {
            a = this.a(a);
            b = this.a(b);
            c = this.a(c);
            var d = this.m;
            return Vb(function(e) {
                var f = Ha(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        $b = function(a, b, c) {
            a = this.a(a);
            b = this.a(b);
            c = this.a(c);
            var d = this.m;
            return Zb(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        ac =
        function(a, b, c) {
            a = this.a(a);
            b = this.a(b);
            c = this.a(c);
            var d = this.m;
            return Zb(function(e) {
                var f = Ha(d);
                Ga(f, a, e, !0);
                return f
            }, b, c)
        },
        bc = function(a, b, c) {
            a = this.a(a);
            b = this.a(b);
            c = this.a(c);
            var d = this.m;
            return Zb(function(e) {
                var f = Ha(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function Zb(a, b, c) {
        if ("string" === typeof b) return Ub(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof k) return Ub(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }
    var cc = function(a, b, c, d) {
            function e(p, q) {
                for (var t = 0; t < f.length(); t++) {
                    var r = f.get(t);
                    q.add(r, p.get(r))
                }
            }
            var f = this.a(a);
            if (!(f instanceof k)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.m;
            d = this.a(d);
            var h = Ha(g);
            for (e(g, h); nb(h, b);) {
                var l = ob(h, d);
                if (l instanceof za) {
                    if ("break" === l.a) break;
                    if ("return" === l.a) return l
                }
                var n = Ha(g);
                e(h, n);
                nb(n, c);
                h = n
            }
        },
        dc = function(a) {
            a = this.a(a);
            var b = this.m,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        ec = function(a, b) {
            var c;
            a = this.a(a);
            b = this.a(b);
            if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof pb || a instanceof k || a instanceof jb) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : Aa(b) && (c = a[b]);
            else if (a instanceof tb) return;
            return c
        },
        gc = function(a, b) {
            return this.a(a) > this.a(b)
        },
        hc = function(a, b) {
            return this.a(a) >= this.a(b)
        },
        ic = function(a, b) {
            a = this.a(a);
            b = this.a(b);
            a instanceof tb && (a = a.qa);
            b instanceof tb && (b = b.qa);
            return a === b
        },
        jc = function(a, b) {
            return !ic.call(this, a, b)
        },
        kc = function(a, b, c) {
            var d = [];
            this.a(a) ? d = this.a(b) : c && (d = this.a(c));
            var e = this.F(d);
            if (e instanceof za) return e
        },
        mc = function(a, b) {
            return this.a(a) < this.a(b)
        },
        nc = function(a, b) {
            return this.a(a) <= this.a(b)
        },
        oc = function(a, b) {
            return this.a(a) % this.a(b)
        },
        pc = function(a, b) {
            return this.a(a) * this.a(b)
        },
        qc = function(a) {
            return -this.a(a)
        },
        rc = function(a) {
            return !this.a(a)
        },
        sc = function(a, b) {
            return !Sb.call(this, a, b)
        },
        tc = function() {
            return null
        },
        uc = function(a, b) {
            return this.a(a) || this.a(b)
        },
        vc = function(a, b) {
            var c = this.a(a);
            this.a(b);
            return c
        },
        wc = function(a) {
            return this.a(a)
        },
        xc = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        yc = function(a) {
            return new za("return", this.a(a))
        },
        zc = function(a, b, c) {
            a = this.a(a);
            b = this.a(b);
            c = this.a(c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof jb ||
                a instanceof k || a instanceof pb) && a.set(b, c);
            return c
        },
        Ac = function(a, b) {
            return this.a(a) - this.a(b)
        },
        Bc = function(a, b, c) {
            a = this.a(a);
            var d = this.a(b),
                e = this.a(c);
            if (!La(d) || !La(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === this.a(d[h]))
                    if (f = this.a(e[h]), f instanceof za) {
                        var l = f.a;
                        if ("break" === l) return;
                        if ("return" === l || "continue" === l) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = this.a(e[e.length - 1]), f instanceof za && ("return" === f.a || "continue" ===
                    f.a))) return f
        },
        Dc = function(a, b, c) {
            return this.a(a) ? this.a(b) : this.a(c)
        },
        Ec = function(a) {
            a = this.a(a);
            return a instanceof jb ? "function" : typeof a
        },
        Fc = function(a) {
            for (var b = this.m, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        Gc = function(a, b, c, d) {
            var e = this.a(d);
            if (this.a(c)) {
                var f = this.F(e);
                if (f instanceof za) {
                    if ("break" === f.a) return;
                    if ("return" === f.a) return f
                }
            }
            for (; this.a(a);) {
                var g = this.F(e);
                if (g instanceof za) {
                    if ("break" === g.a) break;
                    if ("return" === g.a) return g
                }
                this.a(b)
            }
        },
        Hc = function(a) {
            return ~Number(this.a(a))
        },
        Ic = function(a, b) {
            return Number(this.a(a)) << Number(this.a(b))
        },
        Jc = function(a, b) {
            return Number(this.a(a)) >> Number(this.a(b))
        },
        Lc = function(a, b) {
            return Number(this.a(a)) >>> Number(this.a(b))
        },
        Mc = function(a, b) {
            return Number(this.a(a)) & Number(this.a(b))
        },
        Nc = function(a, b) {
            return Number(this.a(a)) ^ Number(this.a(b))
        },
        Oc = function(a, b) {
            return Number(this.a(a)) | Number(this.a(b))
        };
    var Qc = function() {
        this.a = new rb;
        Pc(this)
    };
    Qc.prototype.yc = function(a) {
        return Rc(this.a.i(a))
    };
    var Tc = function(a, b) {
            return Rc(Sc.a.B(a, b))
        },
        Pc = function(a) {
            var b = function(d, e) {
                var f = a.a,
                    g = String(e);
                qb.hasOwnProperty(d) && sb(f, g || d, qb[d])
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                sb(a.a, String(d), e)
            };
            c(0, Hb);
            c(1, Ib);
            c(2, Jb);
            c(3, Kb);
            c(53, Lb);
            c(4, Mb);
            c(5, Nb);
            c(52, Ob);
            c(6, Pb);
            c(9, Nb);
            c(50, Qb);
            c(10, Rb);
            c(12, Sb);
            c(13, Tb);
            c(47, Wb);
            c(54, Xb);
            c(55, Yb);
            c(63, cc);
            c(64, $b);
            c(65, ac);
            c(66, bc);
            c(15, dc);
            c(16, ec);
            c(17, ec);
            c(18, gc);
            c(19, hc);
            c(20, ic);
            c(21, jc);
            c(22, kc);
            c(23, mc);
            c(24, nc);
            c(25, oc);
            c(26, pc);
            c(27, qc);
            c(28, rc);
            c(29, sc);
            c(45, tc);
            c(30, uc);
            c(32, vc);
            c(33, vc);
            c(34, wc);
            c(35, wc);
            c(46, xc);
            c(36, yc);
            c(43, zc);
            c(37, Ac);
            c(38, Bc);
            c(39, Dc);
            c(40, Ec);
            c(41, Fc);
            c(42, Gc);
            c(58, Hc);
            c(57, Ic);
            c(60, Jc);
            c(61, Lc);
            c(56, Mc);
            c(62, Nc);
            c(59, Oc)
        },
        Vc = function() {
            var a = Sc,
                b = Uc();
            sb(a.a, "require", b)
        },
        Wc = function(a, b) {
            a.a.a.R = b
        };

    function Rc(a) {
        if (a instanceof za || a instanceof jb || a instanceof k || a instanceof pb || a instanceof tb || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };
    var Xc = [],
        Yc = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Zc = function(a) {
            return Yc[a]
        },
        $c = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var dd = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        ed = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        fd = function(a) {
            return ed[a]
        };
    Xc[7] = function(a) {
        return String(a).replace(dd, fd)
    };
    Xc[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(dd, fd) + "'"
        }
    };
    var nd = /['()]/g,
        od = function(a) {
            return "%" + a.charCodeAt(0).toString(16)
        };
    Xc[12] = function(a) {
        var b =
            encodeURIComponent(String(a));
        nd.lastIndex = 0;
        return nd.test(b) ? b.replace(nd, od) : b
    };
    var pd = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        qd = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        rd = function(a) {
            return qd[a]
        };
    Xc[16] = function(a) {
        return a
    };
    var td;
    var ud = [],
        vd = [],
        wd = [],
        xd = [],
        yd = [],
        zd = {},
        Ad, Bd, Cd, Dd = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        Ed = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = zd[c],
                e = {},
                f;
            for (f in a) a.hasOwnProperty(f) && 0 === f.indexOf("vtp_") && (d && b && b.af && b.af(a[f]), e[void 0 !== d ? f : f.substr(4)] = a[f]);
            return void 0 !== d ? d(e) : td(c, e, b)
        },
        Gd = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) &&
                (d[e] = Fd(a[e], b, c));
            return d
        },
        Hd = function(a) {
            var b = a["function"];
            if (!b) throw "Error: No function name given for function call.";
            var c = zd[b];
            return c ? c.priorityOverride || 0 : 0
        },
        Fd = function(a, b, c) {
            if (La(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Fd(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = ud[f];
                        if (!g || b.yd(g)) return;
                        c[f] = !0;
                        try {
                            var h = Gd(g, b, c);
                            h.vtp_gtmEventId = b.id;
                            d = Ed(h, b);
                            Cd && (d = Cd.ah(d, h))
                        } catch (y) {
                            b.rf && b.rf(y, Number(f)),
                                d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[Fd(a[l], b, c)] = Fd(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var q = Fd(a[p], b, c);
                            Bd && (n = n || q === Bd.ic);
                            d.push(q)
                        }
                        return Bd && n ? Bd.eh(d) : d.join("");
                    case "escape":
                        d = Fd(a[1], b, c);
                        if (Bd && La(a[1]) && "macro" === a[1][0] && Bd.Dh(a)) return Bd.Yh(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Xc[a[t]] && (d = Xc[a[t]](d));
                        return d;
                    case "tag":
                        var r = a[1];
                        if (!xd[r]) throw Error("Unable to resolve tag reference " + r + ".");
                        return d = {
                            hf: a[2],
                            index: r
                        };
                    case "zb":
                        var u = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        u["function"] = a[1];
                        var v = Id(u, b, c),
                            x = !!a[4];
                        return x || 2 !== v ? x !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Id = function(a, b, c) {
            try {
                return Ad(Gd(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Jd = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Gf: a("consent"),
            Xd: a("convert_case_to"),
            Yd: a("convert_false_to"),
            Zd: a("convert_null_to"),
            $d: a("convert_true_to"),
            ae: a("convert_undefined_to"),
            Ci: a("debug_mode_metadata"),
            Ka: a("function"),
            rg: a("instance_name"),
            sg: a("live_only"),
            ug: a("malware_disabled"),
            vg: a("metadata"),
            Fi: a("original_vendor_template_id"),
            yg: a("once_per_event"),
            Re: a("once_per_load"),
            Ve: a("setup_tags"),
            We: a("tag_id"),
            Xe: a("teardown_tags")
        }
    }();
    var Kd = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.i = a;
        this.a = c
    };
    la(Kd, Error);

    function Ld(a, b) {
        if (La(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) Ld(a[c], b[c])
        }
    };
    var Md = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.m = a;
        this.i = b;
        this.a = []
    };
    la(Md, Error);
    var Nd = function(a) {
        var b = a.a.slice();
        a.i && (b = a.i(b));
        return b
    };
    var Pd = function() {
        return function(a, b) {
            a instanceof Md || (a = new Md(a, Od));
            b && a.a.push(b);
            throw a;
        }
    };

    function Od(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Ka(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var Qd = null,
        Td = function(a) {
            function b(q) {
                for (var t = 0; t < q.length; t++) d[q[t]] = !0
            }
            var c = [],
                d = [];
            Qd = Rd(a);
            for (var e = 0; e < vd.length; e++) {
                var f = vd[e],
                    g = Sd(f);
                if (g) {
                    for (var h = f.add || [], l = 0; l < h.length; l++) c[h[l]] = !0;
                    b(f.block || [])
                } else null === g && b(f.block || [])
            }
            for (var n = [], p = 0; p < xd.length; p++) c[p] && !d[p] && (n[p] = !0);
            return n
        },
        Sd = function(a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) {
                var d = Qd(b[c]);
                if (0 === d) return !1;
                if (2 === d) return null
            }
            for (var e = a.unless || [], f = 0; f < e.length; f++) {
                var g = Qd(e[f]);
                if (2 === g) return null;
                if (1 === g) return !1
            }
            return !0
        },
        Rd = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Id(wd[c], a));
                return b[c]
            }
        };
    var Ud = {
        ah: function(a, b) {
            b[Jd.Xd] && "string" === typeof a && (a = 1 == b[Jd.Xd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Jd.Zd) && null === a && (a = b[Jd.Zd]);
            b.hasOwnProperty(Jd.ae) && void 0 === a && (a = b[Jd.ae]);
            b.hasOwnProperty(Jd.$d) && !0 === a && (a = b[Jd.$d]);
            b.hasOwnProperty(Jd.Yd) && !1 === a && (a = b[Jd.Yd]);
            return a
        }
    };
    var Vd = function() {
        this.a = {}
    };

    function Wd(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d), g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new Kd(c, d, g);
            }
    }

    function Xd(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.a[d],
                    f = a.a.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Wd(e, b, d, g);
                    Wd(f, b, d, g)
                }
            }
        }
    };
    var ae = function(a) {
            var b = Yd.C,
                c = this;
            this.i = new Vd;
            this.a = {};
            var d = {},
                e = Xd(this.i, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            Sa(a, function(f, g) {
                var h = {};
                Sa(g, function(l, n) {
                    var p = Zd(l, n);
                    h[l] = p.assert;
                    d[l] || (d[l] = p.K)
                });
                c.a[f] = function(l, n) {
                    var p = h[l];
                    if (!p) throw $d(l, {}, "The requested permission " + l + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        ce = function(a) {
            return be.a[a] ||
                function() {}
        };

    function Zd(a, b) {
        var c = Dd(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = $d;
        try {
            return Ed(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Kd(e, {}, "Permission " + e + " is unknown.");
                },
                K: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function $d(a, b, c) {
        return new Kd(a, b, c)
    };
    var de = !1;
    var ee = {};
    ee.xi = Wa('false');
    ee.kh = Wa('true');
    var fe = de,
        ge = ee.kh,
        he = ee.xi;
    var we = function(a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
        },
        xe = function(a, b) {
            var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
            we(b, "/*") && (b = b.slice(0, -2));
            we(b, "?") && (b = b.slice(0, -1));
            var d = b.split("*");
            if (!c && 1 === d.length) return a === d[0];
            for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                    e = a.indexOf(g, e);
                    if (-1 === e || 0 === f && 0 !== e) return !1;
                    e += g.length
                }
            }
            if (c || e === a.length) return !0;
            var h = d[d.length - 1];
            return a.lastIndexOf(h) === a.length - h.length
        },
        ye = /^[a-z0-9-]+$/i,
        ze = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
        Be = function(a, b) {
            var c;
            if (!(c = !Ae(a))) {
                var d;
                a: {
                    var e = a.hostname.split(".");
                    if (2 > e.length) d = !1;
                    else {
                        for (var f = 0; f < e.length; f++)
                            if (!ye.exec(e[f])) {
                                d = !1;
                                break a
                            }
                        d = !0
                    }
                }
                c = !d
            }
            if (c) return !1;
            for (var g = 0; g < b.length; g++) {
                var h;
                var l = a,
                    n = b[g];
                if (!ze.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8),
                    q = p.slice(0, p.indexOf("/")),
                    t;
                var r = l.hostname,
                    u = q;
                if (0 !== u.indexOf("*.")) t = r.toLowerCase() === u.toLowerCase();
                else {
                    u = u.slice(2);
                    var v = r.toLowerCase().indexOf(u.toLowerCase());
                    t = -1 === v ? !1 : r.length === u.length ?
                        !0 : r.length !== u.length + v ? !1 : "." === r[v - 1]
                }
                if (t) {
                    var x = p.slice(p.indexOf("/"));
                    h = xe(l.pathname + l.search, x) ? !0 : !1
                } else h = !1;
                if (h) return !0
            }
            return !1
        },
        Ae = function(a) {
            return "https:" === a.protocol && (!a.port || "443" === a.port)
        };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var Ee = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        Fe = {
            Fn: "function",
            DustMap: "Object",
            List: "Array"
        },
        G = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = Ee.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    l = c[d],
                    n = typeof l;
                if (null === l || "undefined" === n) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var p = typeof l;
                    l instanceof jb ? p = "Fn" : l instanceof k ? p = "List" : l instanceof pb ? p = "DustMap" :
                        l instanceof tb && (p = "OpaqueValue");
                    if (p != h) throw Error("Error in " + a + ". Argument " + f + " has type " + p + ", which does not match required type " + (Fe[h] || h) + ".");
                }
            }
        };

    function Ge(a) {
        if (a instanceof pb) return a.toString();
        if (a instanceof k) return "[" + a.toString() + "]";
        if (a instanceof jb) return a.toString() + "()";
        if (m(a)) return '"' + a + '"';
        return "" + a
    }

    function He(a, b) {
        var c = [];
        var d = [],
            e = [],
            f = function() {
                return 0 === e.length ? "" : "Property " + e.join(".") + ": "
            },
            g = function(h, l) {
                if (0 <= d.indexOf(l)) c.push(f() + "Expected value contained a cycle.");
                else if (h !== l)
                    if (l instanceof k)
                        if (h instanceof k)
                            if (h.length() !== l.length()) c.push(f() + "Expected array to contain " + l.length() + " item(s), actually " + h.length() + ".");
                            else
                                for (var n = 0; n < l.length(); n++) e.push(n), d.push(l), g(h.get(n), l.get(n)), d.pop(), e.pop();
                else c.push(f() + "Expected to be an array, actually " +
                    Ge(h) + ".");
                else if (l instanceof pb)
                    if (h instanceof pb) {
                        for (var p = Ca(h), q = {}, t = 0; t < p.length; t++) q[p[t]] = !0;
                        for (var r = Ca(l), u = [], v = 0; v < r.length; v++) {
                            var x = r[v];
                            q[x] ? (u.push(x), q[x] = !1) : c.push(f() + 'Expected property "' + x + '" was not found in actual.')
                        }
                        for (var y = 0; y < p.length; y++) q[p[y]] && c.push(f() + 'Unexpected property "' + p[y] + '" found in actual.');
                        for (var w = 0; w < u.length; w++) {
                            var z = u[w];
                            e.push(z);
                            d.push(l);
                            g(h.get(z), l.get(z));
                            d.pop();
                            e.pop()
                        }
                    } else c.push(f() + "Expected to be an object, actually " + Ge(h) +
                        ".");
                else c.push(f() + "Expected " + Ge(l) + ", actually " + Ge(h) + ".")
            };
        g(a, b);
        return c
    };
    var Ie = function(a, b) {
            var c = new jb(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = this.a(d[e]);
                var f = this.m.a;
                f && f.da && (f.da.i[a] = f.da.i[a] || [], f.da.i[a].push(d));
                return b.apply(this, d)
            });
            c.m = !0;
            return c
        },
        Je = function(a, b) {
            var c = new pb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Ja(e) ? c.set(d, Ie(a + "_" + d, e)) : (Ka(e) || m(e) || "boolean" == typeof e) && c.set(d, e)
                }
            c.m = !0;
            return c
        };
    var Ke = function(a, b) {
        G(this.i.a, ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new pb;
        return d = Je("AssertApiSubject", c)
    };
    var Le = function(a, b) {
        G(this.i.a, ["actual:?*", "message:?string"], arguments);
        var c = {},
            d = new pb;
        return d = Je("AssertThatSubject", c)
    };

    function Me(a) {
        return function() {
            for (var b = [], c = this.m, d = 0; d < arguments.length; ++d) b.push(Ab(arguments[d], c));
            return zb(a.apply(null, b))
        }
    }
    var Oe = function() {
        for (var a = Math, b = Ne, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Me(a[e].bind(a)))
        }
        return c
    };
    var Pe = function(a) {
        var b;
        return b
    };
    var Qe = function(a) {
        var b;
        return b
    };
    var Re = function(a) {
        G(this.i.a, ["uri:!string"], arguments);
        return encodeURI(a)
    };
    var Se = function(a) {
        G(this.i.a, ["uri:!string"], arguments);
        return encodeURIComponent(a)
    };
    var Te = function(a) {
        G(this.i.a, ["message:?string"], arguments);
    };
    var Ue = function(a, b) {
        G(this.i.a, ["min:!number", "max:!number"], arguments);
        return Pa(a, b)
    };
    var Ve = function(a, b, c) {
        var d = a.m.a;
        if (!d) throw Error("Missing program state.");
        d.Ng.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var We = function() {
        Ve(this, "read_container_data");
        var a = new pb;
        a.set("containerId", 'GTM-P528B3');
        a.set("version", '397');
        a.set("environmentName", 'Production');
        a.set("debugMode", fe);
        a.set("previewMode", he);
        a.set("environmentMode", ge);
        a.m = !0;
        return a
    };
    var Xe = function() {
        return (new Date).getTime()
    };
    var Ye = function(a) {
        if (null === a) return "null";
        if (a instanceof k) return "array";
        if (a instanceof jb) return "function";
        if (a instanceof tb) {
            a = a.qa;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Ze = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (fe || he) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return zb(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(Ab(c))
            })
        }
    };
    var $e = function(a) {
        return Va(Ab(a, this.m))
    };
    var af = function(a) {
        return Number(Ab(a, this.m))
    };
    var bf = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var cf = function(a, b, c) {
        var d = null,
            e = !1;
        G(this.i.a, ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
        d = new pb;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof pb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var Ne = "floor ceil round max min abs pow sqrt".split(" ");
    var df = function() {
            var a = {};
            return {
                sh: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                ni: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        ef = function(a, b) {
            G(this.i.a, ["apiName:!string", "mock:?*"], arguments);
        };
    var ff = function() {
        this.a = {};
        this.i = {}
    };
    ff.prototype.get = function(a, b) {
        var c = this.a.hasOwnProperty(a) ? this.a[a] : void 0;
        var d = b.m.a;
        d && d.da && (c = d.da.m.sh(a) || c);
        return c
    };
    ff.prototype.add = function(a, b, c) {
        if (this.a.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.i.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.a[a] = c ? void 0 : Ja(b) ? Ie(a, b) : Je(a, b)
    };
    var gf = function(a, b, c) {
        if (a.i.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + ".";
        if (a.a.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
        a.i[b] = Ja(c) ? Ie(b, c) : Je(b, c)
    };

    function hf() {
        var a = {};
        return a
    };
    var H = {
        Ab: "_ee",
        ld: "_syn",
        Ii: "_uei",
        Gi: "_pci",
        Tc: "event_callback",
        bc: "event_timeout",
        fa: "gtag.config"
    };
    H.Ga = "gtag.get";
    H.wa = "purchase";
    H.nb = "refund";
    H.Wa = "begin_checkout";
    H.lb = "add_to_cart";
    H.mb = "remove_from_cart";
    H.Pf = "view_cart";
    H.fe = "add_to_wishlist";
    H.Fa = "view_item";
    H.ee = "view_promotion";
    H.de = "select_promotion";
    H.ce = "select_item";
    H.Yb = "view_item_list";
    H.be = "add_payment_info";
    H.Of = "add_shipping_info";
    H.za = "value_key", H.ya = "value_callback";
    H.ia = "allow_ad_personalization_signals";
    H.bd = "restricted_data_processing";
    H.ob = "allow_google_signals";
    H.ja = "cookie_expires";
    H.ac = "cookie_update";
    H.xb = "session_duration";
    H.na = "user_properties";
    H.Ja = "transport_url";
    H.N = "ads_data_redaction";
    H.s = "ad_storage";
    H.M = "analytics_storage";
    H.Hf = "region";
    H.If = "wait_for_update";
    H.Ie = [H.wa, H.nb, H.Wa, H.lb, H.mb, H.Pf, H.fe, H.Fa, H.ee, H.de, H.Yb, H.ce, H.be, H.Of];
    H.He = [H.ia, H.ob, H.ac];
    H.Je = [H.ja, H.bc, H.xb];
    var jf = {},
        kf = function(a, b) {
            jf[a] = jf[a] || [];
            jf[a][b] = !0
        },
        lf = function(a) {
            for (var b = [], c = jf[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var I = function(a) {
        kf("GTM", a)
    };

    function mf(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, mf);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    xa(mf, Error);
    mf.prototype.name = "CustomError";
    var nf = function(a, b) {
        for (var c = a.split("%s"), d = "", e = c.length - 1, f = 0; f < e; f++) d += c[f] + (f < b.length ? b[f] : "%s");
        mf.call(this, d + c[e])
    };
    xa(nf, mf);
    nf.prototype.name = "AssertionError";
    var of = function(a, b) {
        throw new nf("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var pf = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        qf = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var rf, sf = function() {
        if (void 0 === rf) {
            var a = null,
                b = ma.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ya,
                        createScript: ya,
                        createScriptURL: ya
                    })
                } catch (c) {
                    ma.console && ma.console.error(c.message)
                }
                rf = a
            } else rf = a
        }
        return rf
    };
    var uf = function(a, b) {
        this.a = b === tf ? a : ""
    };
    uf.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.a + "}"
    };
    var tf = {};
    var vf = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var wf;
    a: {
        var xf = ma.navigator;
        if (xf) {
            var yf = xf.userAgent;
            if (yf) {
                wf = yf;
                break a
            }
        }
        wf = ""
    }
    var zf = function(a) {
        return -1 != wf.indexOf(a)
    };
    var Bf = function(a, b, c) {
        this.a = c === Af ? a : ""
    };
    Bf.prototype.toString = function() {
        return "SafeHtml{" + this.a + "}"
    };
    var Cf = function(a) {
            if (a instanceof Bf && a.constructor === Bf) return a.a; of ("expected object of type SafeHtml, got '" + a + "' of type " + ua(a));
            return "type_error:SafeHtml"
        },
        Af = {},
        Ef = new Bf(ma.trustedTypes && ma.trustedTypes.emptyHTML || "", 0, Af);
    var Ff = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Gf = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            if ("undefined" === typeof document) return !1;
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            if (!a.firstChild) return !1;
            var c = a.firstChild.firstChild;
            a.innerHTML = Cf(Ef);
            return !c.parentElement
        }),
        Hf = function(a, b) {
            if (a.tagName && Ff[a.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " +
                a.tagName + ".");
            if (Gf())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = Cf(b)
        };
    var If = function(a) {
        var b = sf(),
            c = b ? b.createHTML(a) : a;
        return new Bf(c, null, Af)
    };
    var B = window,
        L = document,
        Jf = navigator,
        Kf = L.currentScript && L.currentScript.src,
        Lf = function(a, b) {
            var c = B[a];
            B[a] = void 0 === c ? b : c;
            return B[a]
        },
        Mf = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Nf = function(a, b, c) {
            var d = L.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            var e, f = sf(),
                g = f ? f.createScriptURL(a) : a;
            e = new uf(g, tf);
            var h;
            a: {
                try {
                    var l = d && d.ownerDocument,
                        n = l && (l.defaultView || l.parentWindow);
                    n = n || ma;
                    if (n.Element && n.Location) {
                        h = n;
                        break a
                    }
                } catch (x) {}
                h = null
            }
            if (h && "undefined" != typeof h.HTMLScriptElement && (!d || !(d instanceof h.HTMLScriptElement) && (d instanceof h.Location || d instanceof h.Element))) {
                var p;
                var q = typeof d;
                if ("object" == q && null != d || "function" == q) try {
                    p = d.constructor.displayName || d.constructor.name || Object.prototype.toString.call(d)
                } catch (x) {
                    p = "<object could not be stringified>"
                } else p = void 0 === d ? "undefined" : null === d ? "null" : typeof d; of ("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                    "HTMLScriptElement", p)
            }
            var t;
            e instanceof uf && e.constructor === uf ? t = e.a : ( of ("expected object of type TrustedResourceUrl, got '" + e + "' of type " + ua(e)), t = "type_error:TrustedResourceUrl");
            d.src = t;
            var r = qa(d.ownerDocument && d.ownerDocument.defaultView);
            r && d.setAttribute("nonce", r);
            Mf(d, b);
            c && (d.onerror = c);
            var u = qa();
            u && d.setAttribute("nonce", u);
            var v = L.getElementsByTagName("script")[0] || L.body || L.head;
            v.parentNode.insertBefore(d, v);
            return d
        },
        Of = function() {
            if (Kf) {
                var a = Kf.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Pf = function(a, b) {
            var c = L.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = L.body && L.body.lastChild || L.body || L.head;
            d.parentNode.insertBefore(c, d);
            Mf(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Qf = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Rf = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) :
                a.attachEvent && a.attachEvent("on" + b, c)
        },
        Sf = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        N = function(a) {
            B.setTimeout(a, 0)
        },
        Tf = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Uf = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Vf = function(a) {
            var b = L.createElement("div");
            Hf(b, If("A<div>" + a + "</div>"));
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Wf = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Xf = function(a) {
            Jf.sendBeacon && Jf.sendBeacon(a) || Qf(a)
        },
        Yf = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    var Zf = {},
        $f = function(a) {
            return void 0 == Zf[a] ? !1 : Zf[a]
        };
    var ag = [];

    function bg() {
        var a = Lf("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: cg,
            update: dg,
            addListener: eg,
            notifyListeners: fg,
            active: !1
        });
        return a.ics
    }

    function cg(a, b, c, d, e, f) {
        var g = bg();
        g.active = !0;
        if (void 0 != b) {
            var h = g.entries,
                l = h[a] || {},
                n = l.region,
                p = c && m(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update),
                    t = {
                        region: p,
                        initial: "granted" === b,
                        update: l.update,
                        quiet: q
                    };
                h[a] = t;
                q && B.setTimeout(function() {
                    h[a] === t && t.quiet && (t.quiet = !1, gg(a), fg(), kf("TAGGING", 2))
                }, f)
            }
        }
    }

    function dg(a, b) {
        var c = bg();
        c.active = !0;
        if (void 0 != b) {
            var d = hg(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = hg(a);
            f.quiet ? (f.quiet = !1, gg(a)) : g !== d && gg(a)
        }
    }

    function eg(a, b) {
        ag.push({
            cf: a,
            nh: b
        })
    }

    function gg(a) {
        for (var b = 0; b < ag.length; ++b) {
            var c = ag[b];
            La(c.cf) && -1 !== c.cf.indexOf(a) && (c.vf = !0)
        }
    }

    function fg(a) {
        for (var b = 0; b < ag.length; ++b) {
            var c = ag[b];
            if (c.vf) {
                c.vf = !1;
                try {
                    c.nh({
                        bf: a
                    })
                } catch (d) {}
            }
        }
    }
    var hg = function(a) {
            var b = bg().entries[a] || {};
            return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0
        },
        ig = function(a) {
            return !(bg().entries[a] || {}).quiet
        },
        jg = function() {
            return $f("gtag_cs_api") ? bg().active : !1
        },
        kg = function(a, b) {
            bg().addListener(a, b)
        },
        lg = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!ig(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                kg(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        mg = function(a, b) {
            if (!1 === hg(b)) {
                var c = !1;
                kg([b], function(d) {
                    !c && hg(b) && (a(d), c = !0)
                })
            }
        };
    var ng = [H.s, H.M],
        og = function(a) {
            var b = a[H.Hf];
            b && I(40);
            var c = a[H.If];
            c && I(41);
            for (var d = La(b) ? b : [b], e = 0; e < d.length; ++e)
                for (var f = 0; f < ng.length; f++) {
                    var g = ng[f],
                        h = a[ng[f]],
                        l = d[e];
                    bg().set(g, h, l, "", "", c)
                }
        },
        pg = function(a, b) {
            for (var c = 0; c < ng.length; c++) {
                var d = ng[c],
                    e = a[ng[c]];
                bg().update(d, e)
            }
            bg().notifyListeners(b)
        },
        qg = function(a) {
            var b = hg(a);
            return void 0 != b ? b : !0
        },
        rg = function() {
            for (var a = [], b = 0; b < ng.length; b++) {
                var c = hg(ng[b]);
                a[b] = !0 === c ? "1" : !1 === c ? "0" : "-"
            }
            return "G1" +
                a.join("")
        },
        sg = function(a, b) {
            lg(a, b)
        };
    var ug = function(a) {
            return tg ? L.querySelectorAll(a) : null
        },
        vg = function(a, b) {
            if (!tg) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!L.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        wg = !1;
    if (L.querySelectorAll) try {
        var xg = L.querySelectorAll(":root");
        xg && 1 == xg.length && xg[0] == L.documentElement && (wg = !0)
    } catch (a) {}
    var tg = wg;
    var Yd = {},
        O = null,
        Lg = Math.random();
    Yd.C = "GTM-P528B3";
    Yd.nc = "b41";
    Yd.Ei = "";
    var Mg = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Ng = {
            __paused: !0,
            __tg: !0
        },
        Og;
    for (Og in Mg) Mg.hasOwnProperty(Og) && (Ng[Og] = !0);
    var Pg = "www.googletagmanager.com/gtm.js";
    var Qg = Pg,
        Rg = Wa(""),
        Sg = null,
        Tg = null,
        Ug = "//www.googletagmanager.com/a?id=" + Yd.C + "&cv=397",
        Vg = {},
        Wg = {},
        Xg = function() {
            var a = O.sequence || 1;
            O.sequence = a + 1;
            return a
        };
    var Yg = {},
        Zg = new Qa,
        $g = {},
        ah = {},
        dh = {
            name: "dataLayer",
            set: function(a, b) {
                E(hb(a, b), $g);
                bh()
            },
            get: function(a) {
                return ch(a, 2)
            },
            reset: function() {
                Zg = new Qa;
                $g = {};
                bh()
            }
        },
        ch = function(a, b) {
            return 2 != b ? Zg.get(a) : eh(a)
        },
        eh = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = $g, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== Na(b, d)) return
            }
            return d
        },
        fh = function(a, b) {
            ah.hasOwnProperty(a) || (Zg.set(a, b), E(hb(a, b), $g), bh())
        },
        bh = function(a) {
            Sa(ah, function(b, c) {
                Zg.set(b, c);
                E(hb(b,
                    void 0), $g);
                E(hb(b, c), $g);
                a && delete ah[b]
            })
        },
        gh = function(a, b, c) {
            Yg[a] = Yg[a] || {};
            var d = 1 !== c ? eh(b) : Zg.get(b);
            "array" === vb(d) || "object" === vb(d) ? Yg[a][b] = E(d) : Yg[a][b] = d
        },
        hh = function(a, b) {
            if (Yg[a]) return Yg[a][b]
        },
        ih = function(a, b) {
            Yg[a] && delete Yg[a][b]
        };
    var lh = {},
        mh = function(a, b) {
            if (B._gtmexpgrp && B._gtmexpgrp.hasOwnProperty(a)) return B._gtmexpgrp[a];
            void 0 === lh[a] && (lh[a] = Math.floor(Math.random() * b));
            return lh[a]
        };
    var nh = /:[0-9]+$/,
        oh = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var l = h.slice(1).join("=");
                    if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                    e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        rh = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = ph(a.protocol) || ph(B.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port :
                B.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || B.location.hostname).replace(nh, "").toLowerCase());
            return qh(a, b, c, d, e)
        },
        qh = function(a, b, c, d, e) {
            var f, g = ph(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = sh(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(nh, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" ==
                        g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || kf("TAGGING", 1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= Na(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = oh(f, e, !1, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        ph = function(a) {
            return a ? a.replace(":",
                "").toLowerCase() : ""
        },
        sh = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        th = function(a) {
            var b = L.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || kf("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(nh, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        uh = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !=
                        p
                }).join("&")
            }
            var d = "gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
                e = th(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var l = "" + f + g + h;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        };

    function vh(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };
    var xh = function(a, b, c, d) {
            return wh(d) ? vh(a, String(b || document.cookie), c) : []
        },
        Ah = function(a, b, c, d, e) {
            if (wh(e)) {
                var f = yh(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = zh(f, function(g) {
                        return g.wc
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = zh(f, function(g) {
                        return g.Ob
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Bh(a, b, c, d) {
        var e = document.cookie;
        document.cookie = a;
        var f = document.cookie;
        return e != f || void 0 != c && 0 <= xh(b, f, !1, d).indexOf(c)
    }
    var Fh = function(a, b, c, d) {
            function e(x, y, w) {
                if (null == w) return delete h[y], x;
                h[y] = w;
                return x + "; " + y + "=" + w
            }

            function f(x, y) {
                if (null == y) return delete h[y], x;
                h[y] = !0;
                return x + "; " + y
            }
            if (!wh(c.Na)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ch(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            g = e(g, "expires", l);
            g = e(g, "max-age", c.Oh);
            g = e(g, "samesite",
                c.hi);
            c.ki && (g = f(g, "secure"));
            var n = c.domain;
            if ("auto" === n) {
                for (var p = Dh(), q = void 0, t = !1, r = 0; r < p.length; ++r) {
                    var u = "none" !== p[r] ? p[r] : void 0,
                        v = e(g, "domain", u);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (x) {
                        q = x;
                        continue
                    }
                    t = !0;
                    if (!Eh(u, c.path) && Bh(v, a, b, c.Na)) return 0
                }
                if (q && !t) throw q;
                return 1
            }
            n && "none" !== n && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return Eh(n, c.path) ? 1 : Bh(g, a, b, c.Na) ? 0 : 1
        },
        Gh = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Fh(a, b, c)
        };

    function zh(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                l = b(h);
            l === c ? d.push(h) : void 0 === f || l < f ? (e = [h], f = l) : l === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function yh(a, b, c) {
        for (var d = [], e = xh(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var l = g.shift();
                l && (l = l.split("-"), d.push({
                    id: g.join("."),
                    wc: 1 * l[0] || 1,
                    Ob: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var Ch = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Hh = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Ih = /(^|\.)doubleclick\.net$/i,
        Eh = function(a, b) {
            return Ih.test(document.location.hostname) || "/" === b && Hh.test(a)
        },
        Dh = function() {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = document.location.hostname;
            Ih.test(e) || Hh.test(e) || a.push("none");
            return a
        },
        wh = function(a) {
            if (!$f("gtag_cs_api") || !a || !jg()) return !0;
            if (!ig(a)) return !1;
            var b = hg(a);
            return null == b ? !0 : !!b
        };
    var Jh = function() {
            for (var a = Jf.userAgent + (L.cookie || "") + (L.referrer || ""), b = a.length, c = B.history.length; 0 < c;) a += c-- ^ b++;
            var d = 1,
                e, f, g;
            if (a)
                for (d = 0, f = a.length - 1; 0 <= f; f--) g = a.charCodeAt(f), d = (d << 6 & 268435455) + g + (g << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
            return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Za() / 1E3)].join(".")
        },
        Mh = function(a, b, c, d, e) {
            var f = Kh(b);
            return Ah(a, f, Lh(c), d, e)
        },
        Nh = function(a, b, c, d) {
            var e = "" + Kh(c),
                f = Lh(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Kh = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Lh = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function Oh(a, b, c) {
        var d, e = a.Nb;
        null == e && (e = 7776E3);
        0 !== e && (d = new Date((b || Za()) + 1E3 * e));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var Ph = ["1"],
        Qh = {},
        Uh = function(a) {
            var b = Rh(a.prefix);
            Qh[b] || Sh(b, a.path, a.domain) || (Th(b, Jh(), a), Sh(b, a.path, a.domain))
        };

    function Th(a, b, c) {
        var d = Nh(b, "1", c.domain, c.path),
            e = Oh(c);
        e.Na = "ad_storage";
        Gh(a, d, e)
    }

    function Sh(a, b, c) {
        var d = Mh(a, b, c, Ph, "ad_storage");
        d && (Qh[a] = d);
        return d
    }

    function Rh(a) {
        return (a || "_gcl") + "_au"
    };

    function Vh() {
        for (var a = Wh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Xh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Wh, Yh;

    function Zh(a) {
        Wh = Wh || Xh();
        Yh = Yh || Vh();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | h >> 6,
                q = h & 63;
            e || (q = 64, d || (p = 64));
            b.push(Wh[l], Wh[n], Wh[p], Wh[q])
        }
        return b.join("")
    }

    function $h(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Yh[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        Wh = Wh || Xh();
        Yh = Yh || Vh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var bi;
    var fi = function() {
            var a = ci,
                b = di,
                c = ei(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Rf(L, "mousedown", d);
                Rf(L, "keyup", d);
                Rf(L, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        gi = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            ei().decorators.push(f)
        },
        hi = function(a, b, c) {
            for (var d = ei().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var l = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (l && (p || n !== L.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q] instanceof RegExp) {
                                if (l[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                if (h) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && cb(e, g.callback())
                }
            }
            return e
        },
        ei = function() {
            var a = Lf("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = {
                decorators: []
            }, a.gl = b);
            return b
        };
    var ii = /(.*?)\*(.*?)\*(.*)/,
        ji = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        ki = /^(?:www\.|m\.|amp\.)+/,
        li = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function mi(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var oi = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Zh(String(d))))
                }
            var e = b.join("*");
            return ["1", ni(e), e].join("*")
        },
        ni = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
                d;
            if (!(d = bi)) {
                for (var e = Array(256), f = 0; 256 > f; f++) {
                    for (var g = f, h = 0; 8 > h; h++) g =
                        g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                    e[f] = g
                }
                d = e
            }
            bi = d;
            for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ bi[(l ^ c.charCodeAt(n)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        qi = function() {
            return function(a) {
                var b = th(B.location.href),
                    c = b.search.replace("?", ""),
                    d = oh(c, "_gl", !1, !0) || "";
                a.query = pi(d) || {};
                var e = rh(b, "fragment").match(mi("_gl"));
                a.fragment = pi(e && e[3] || "") || {}
            }
        },
        ri = function(a) {
            var b = qi(),
                c = ei();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (cb(d, e.query), a && cb(d, e.fragment));
            return d
        },
        pi = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = ii.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var h = g[3],
                            l;
                        a: {
                            for (var n = g[2], p = 0; p < b; ++p)
                                if (n === ni(h, p)) {
                                    l = !0;
                                    break a
                                }
                            l = !1
                        }
                        if (l) {
                            for (var q = {}, t = h ? h.split("*") : [], r = 0; r < t.length; r += 2) q[t[r]] = $h(t[r + 1]);
                            return q
                        }
                    }
                }
            } catch (u) {}
        };

    function si(a, b, c, d) {
        function e(p) {
            var q = p,
                t = mi(a).exec(q),
                r = q;
            if (t) {
                var u = t[2],
                    v = t[4];
                r = t[1];
                v && (r = r + u + v)
            }
            p = r;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = li.exec(c);
        if (!f) return "";
        var g = f[1],
            h = f[2] || "",
            l = f[3] || "",
            n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + l
    }

    function ti(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = hi(b, 1, c),
            e = hi(b, 2, c),
            f = hi(b, 3, c);
        if (db(d)) {
            var g = oi(d);
            c ? ui("_gl", g, a) : vi("_gl", g, a, !1)
        }
        if (!c && db(e)) {
            var h = oi(e);
            vi("_gl", h, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l)) a: {
                var n = l,
                    p = f[l],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        vi(n, p, q, void 0);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        ui(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && si(n, p, q, void 0)
            }
    }

    function vi(a, b, c, d) {
        if (c.href) {
            var e = si(a, b, c.href, void 0 === d ? !1 : d);
            vf.test(e) && (c.href = e)
        }
    }

    function ui(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = L.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = si(a, b, c.action);
                vf.test(n) && (c.action = n)
            }
        }
    }
    var ci = function(a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var f = e.protocol;
                    "http:" !== f && "https:" !== f || ti(e, e.hostname)
                }
            } catch (g) {}
        },
        di = function(a) {
            try {
                if (a.action) {
                    var b = rh(th(a.action), "host");
                    ti(a, b)
                }
            } catch (c) {}
        },
        wi = function(a, b, c, d) {
            fi();
            gi(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        xi = function(a, b) {
            fi();
            gi(a, [qh(B.location, "host", !0)], b, !0, !0)
        },
        yi = function() {
            var a = L.location.hostname,
                b = ji.exec(L.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(ki, ""),
                l = e.replace(ki, ""),
                n;
            if (!(n = h === l)) {
                var p = "." + l;
                n = h.substring(h.length - p.length, h.length) === p
            }
            return n
        },
        zi = function(a, b) {
            return !1 === a ? !1 : a || b || yi()
        };
    var Ai = /^\w+$/,
        Bi = /^[\w-]+$/,
        Ci = /^~?[\w-]+$/,
        Di = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp"
        },
        Ei = function() {
            if (!$f("gtag_cs_api") || !jg()) return !0;
            var a = hg("ad_storage");
            return null == a ? !0 : !!a
        },
        Fi = function(a, b) {
            ig("ad_storage") ? Ei() ? a() : mg(a, "ad_storage") : b ? kf("TAGGING", 3) : lg(function() {
                Fi(a, !0)
            }, ["ad_storage"])
        },
        Ii = function(a) {
            var b = [];
            if (!L.cookie) return b;
            var c = xh(a, L.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = 0; d < c.length; d++) {
                var e = Gi(c[d]);
                e && -1 === Na(b, e) && b.push(e)
            }
            return Hi(b)
        };

    function Ji(a) {
        return a && "string" == typeof a && a.match(Ai) ? a : "_gcl"
    }
    var Li = function() {
            var a = th(B.location.href),
                b = rh(a, "query", !1, void 0, "gclid"),
                c = rh(a, "query", !1, void 0, "gclsrc"),
                d = rh(a, "query", !1, void 0, "dclid");
            if (!b || !c) {
                var e = a.hash.replace("#", "");
                b = b || oh(e, "gclid", !1, void 0);
                c = c || oh(e, "gclsrc", !1, void 0)
            }
            return Ki(b, c, d)
        },
        Ki = function(a, b, c) {
            var d = {},
                e = function(f, g) {
                    d[g] || (d[g] = []);
                    d[g].push(f)
                };
            d.gclid = a;
            d.gclsrc = b;
            d.dclid = c;
            if (void 0 !== a && a.match(Bi)) switch (b) {
                case void 0:
                    e(a, "aw");
                    break;
                case "aw.ds":
                    e(a, "aw");
                    e(a, "dc");
                    break;
                case "ds":
                    e(a, "dc");
                    break;
                case "3p.ds":
                    $f("gtm_3pds") &&
                        e(a, "dc");
                    break;
                case "gf":
                    e(a, "gf");
                    break;
                case "ha":
                    e(a, "ha");
                    break;
                case "gp":
                    e(a, "gp")
            }
            c && e(c, "dc");
            return d
        },
        Ni = function(a) {
            var b = Li();
            Fi(function() {
                Mi(b, a)
            })
        };

    function Mi(a, b, c) {
        function d(l, n) {
            var p = Oi(l, e);
            p && Gh(p, n, f)
        }
        b = b || {};
        var e = Ji(b.prefix);
        c = c || Za();
        var f = Oh(b, c, !0);
        f.Na = "ad_storage";
        var g = Math.round(c / 1E3),
            h = function(l) {
                return ["GCL", g, l].join(".")
            };
        a.aw && (!0 === b.Zi ? d("aw", h("~" + a.aw[0])) : d("aw", h(a.aw[0])));
        a.dc && d("dc", h(a.dc[0]));
        a.gf && d("gf", h(a.gf[0]));
        a.ha && d("ha", h(a.ha[0]));
        a.gp && d("gp", h(a.gp[0]))
    }
    var Qi = function(a, b) {
            var c = ri(!0);
            Fi(function() {
                for (var d = Ji(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Di[f]) {
                        var g = Oi(f, d),
                            h = c[g];
                        if (h) {
                            var l = Math.min(Pi(h), Za()),
                                n;
                            b: {
                                for (var p = l, q = xh(g, L.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                                    if (Pi(q[t]) > p) {
                                        n = !0;
                                        break b
                                    }
                                n = !1
                            }
                            if (!n) {
                                var r = Oh(b, l, !0);
                                r.Na = "ad_storage";
                                Gh(g, h, r)
                            }
                        }
                    }
                }
                Mi(Ki(c.gclid, c.gclsrc), b)
            })
        },
        Oi = function(a, b) {
            var c = Di[a];
            if (void 0 !== c) return b + c
        },
        Pi = function(a) {
            var b = a.split(".");
            return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) ||
                0)
        };

    function Gi(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
    }
    var Ri = function(a, b, c, d, e) {
            if (La(b)) {
                var f = Ji(e),
                    g = function() {
                        for (var h = {}, l = 0; l < a.length; ++l) {
                            var n = Oi(a[l], f);
                            if (n) {
                                var p = xh(n, L.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                Fi(function() {
                    wi(g, b, c, d)
                })
            }
        },
        Hi = function(a) {
            return a.filter(function(b) {
                return Ci.test(b)
            })
        },
        Si = function(a, b) {
            for (var c = Ji(b.prefix), d = {}, e = 0; e < a.length; e++) Di[a[e]] && (d[a[e]] = Di[a[e]]);
            Fi(function() {
                Sa(d, function(f, g) {
                    var h = xh(c + g, L.cookie, void 0, "ad_storage");
                    if (h.length) {
                        var l = h[0],
                            n = Pi(l),
                            p = {};
                        p[f] = [Gi(l)];
                        Mi(p, b, n)
                    }
                })
            })
        };

    function Ti(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Ui = function() {
            function a(e, f, g) {
                g && (e[f] = g)
            }
            var b = ["aw", "dc"];
            if (jg()) {
                var c = Li();
                if (Ti(c, b)) {
                    var d = {};
                    a(d, "gclid", c.gclid);
                    a(d, "dclid", c.dclid);
                    a(d, "gclsrc", c.gclsrc);
                    xi(function() {
                        return d
                    }, 3);
                    xi(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        Vi = function() {
            var a;
            if (Ei()) {
                for (var b = [], c = L.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
                    var f = c[e].match(d);
                    f && b.push({
                        Rd: f[1],
                        value: f[2]
                    })
                }
                var g = {};
                if (b && b.length)
                    for (var h = 0; h < b.length; h++) {
                        var l = b[h].value.split(".");
                        "1" == l[0] && 3 == l.length && l[1] && (g[b[h].Rd] || (g[b[h].Rd] = []), g[b[h].Rd].push({
                            timestamp: l[1],
                            ph: l[2]
                        }))
                    }
                a = g
            } else a = {};
            return a
        };
    var Wi = /^\d+\.fls\.doubleclick\.net$/;

    function Xi(a, b) {
        ig(H.s) ? qg(H.s) ? a() : mg(a, H.s) : b ? I(42) : sg(function() {
            Xi(a, !0)
        }, [H.s])
    }

    function Yi(a) {
        var b = th(B.location.href),
            c = rh(b, "host", !1);
        if (c && c.match(Wi)) {
            var d = rh(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function Zi(a, b, c) {
        if ("aw" == a || "dc" == a) {
            var d = Yi("gcl" + a);
            if (d) return d.split(".")
        }
        var e = Ji(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !qg(H.s) && c,
                g;
            g = Li()[a] || [];
            if (0 < g.length) return f ? ["0"] : g
        }
        var h = Oi(a, e);
        return h ? Ii(h) : []
    }
    var $i = function(a) {
            var b = Yi("gac");
            if (b) return !qg(H.s) && a ? "0" : decodeURIComponent(b);
            var c = Vi(),
                d = [];
            Sa(c, function(e, f) {
                for (var g = [], h = 0; h < f.length; h++) g.push(f[h].ph);
                g = Hi(g);
                g.length && d.push(e + ":" + g.join(","))
            });
            return d.join(";")
        },
        aj = function(a, b) {
            var c = Li().dc || [];
            Xi(function() {
                Uh(b);
                var d = Qh[Rh(b.prefix)],
                    e = !1;
                if (d && 0 < c.length) {
                    var f = O.joined_au = O.joined_au || {},
                        g = b.prefix || "_gcl";
                    if (!f[g])
                        for (var h = 0; h < c.length; h++) {
                            var l = "https://adservice.google.com/ddm/regclk";
                            l = l + "?gclid=" + c[h] + "&auiddc=" + d;
                            Xf(l);
                            e = f[g] = !0
                        }
                }
                null == a && (a = e);
                if (a && d) {
                    var n = Rh(b.prefix),
                        p = Qh[n];
                    p && Th(n, p, b)
                }
            })
        };
    var bj = /[A-Z]+/,
        cj = /\s/,
        dj = function(a) {
            if (m(a) && (a = Ya(a), !cj.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (bj.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            D: d
                        }
                    }
                }
            }
        },
        fj = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = dj(a[c]);
                d && (b[d.id] = d)
            }
            ej(b);
            var e = [];
            Sa(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function ej(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.D[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var gj = function() {
        var a = !1;
        return a
    };
    var ij = function(a, b, c, d) {
            return (2 === hj() || d || "http:" != B.location.protocol ? a : b) + c
        },
        hj = function() {
            var a = Of(),
                b;
            if (1 === a) a: {
                var c = Qg;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = L.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                    var l = g[h].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var wj = function(a) {
            return qg(H.s) ? a : a.replace(/&url=([^&#]+)/, function(b, c) {
                var d = uh(decodeURIComponent(c));
                return "&url=" + encodeURIComponent(d)
            })
        },
        xj = function() {
            var a;
            if (!(a = Rg)) {
                var b;
                if (!0 === B._gtmdgs) b = !0;
                else {
                    var c = Jf && Jf.userAgent || "";
                    b = 0 > c.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) || 11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || "") ? !1 : !0
                }
                a = !b
            }
            if (a) return -1;
            var d = Va("1");
            return mh(1, 100) < d ? mh(2, 2) : -1
        },
        yj = function(a) {
            var b;
            return b
        };
    var zj = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Aj = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Bj = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Cj = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Ej = function(a) {
            var b;
            ch("gtm.allowlist") && I(52);
            b = ch("gtm.allowlist");
            b || (b = ch("gtm.whitelist"));
            b && I(9);
            var c = b && eb(Xa(b), Aj),
                d;
            ch("gtm.blocklist") && I(51);
            d = ch("gtm.blocklist");
            d || (d = ch("gtm.blacklist"));
            d || (d = ch("tagTypeBlacklist")) && I(3);
            d ? I(8) : d = [];
            Dj() && (d = Xa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Na(Xa(d), "google") && I(2);
            var e =
                d && eb(Xa(d), Bj),
                f = {};
            return function(g) {
                var h = g && g[Jd.Ka];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var l = Wg[h] || [],
                    n = a(h, l);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > Na(c, h))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) {
                                    if (0 > Na(c, l[q])) {
                                        I(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var r = 0 <= Na(e, h);
                    if (r) t = r;
                    else {
                        var u = Ra(e, l || []);
                        u && I(10);
                        t = u
                    }
                }
                var v = !n || t;
                v || !(0 <= Na(l, "sandboxedScripts")) || c && -1 !== Na(c, "sandboxedScripts") || (v = Ra(e, Cj));
                return f[h] = v
            }
        },
        Dj = function() {
            return zj.test(B.location && B.location.hostname)
        };
    var Fj = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        Gj = function(a) {
            var b = O.zones;
            return b ? b.checkState(Yd.C, a) : Fj
        },
        Hj = function(a) {
            var b = O.zones;
            !b && a && (b = O.zones = a());
            return b
        };
    var Ij = function() {},
        Jj = function() {};
    var Kj = !1,
        Lj = 0,
        Mj = [];

    function Nj(a) {
        if (!Kj) {
            var b = L.createEventObject,
                c = "complete" == L.readyState,
                d = "interactive" == L.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Kj = !0;
                for (var e = 0; e < Mj.length; e++) N(Mj[e])
            }
            Mj.push = function() {
                for (var f = 0; f < arguments.length; f++) N(arguments[f]);
                return 0
            }
        }
    }

    function Oj() {
        if (!Kj && 140 > Lj) {
            Lj++;
            try {
                L.documentElement.doScroll("left"), Nj()
            } catch (a) {
                B.setTimeout(Oj, 50)
            }
        }
    }
    var Pj = function(a) {
        Kj ? a() : Mj.push(a)
    };
    var Qj = {},
        Rj = {},
        Sj = function(a, b, c, d) {
            if (!Rj[a] || Ng[b] || "__zone" === b) return -1;
            var e = {};
            xb(d) && (e = E(d, e));
            e.id = c;
            e.status = "timeout";
            return Rj[a].tags.push(e) - 1
        },
        Tj = function(a, b, c, d) {
            if (Rj[a]) {
                var e = Rj[a].tags[b];
                e && (e.status = c, e.executionTime = d)
            }
        };

    function Uj(a) {
        for (var b = Qj[a] || [], c = 0; c < b.length; c++) b[c]();
        Qj[a] = {
            push: function(d) {
                d(Yd.C, Rj[a])
            }
        }
    }
    var Xj = function(a, b, c) {
            Rj[a] = {
                tags: []
            };
            Ja(b) && Vj(a, b);
            c && B.setTimeout(function() {
                return Uj(a)
            }, Number(c));
            return Wj(a)
        },
        Vj = function(a, b) {
            Qj[a] = Qj[a] || [];
            Qj[a].push(ab(function() {
                return N(function() {
                    b(Yd.C, Rj[a])
                })
            }))
        };

    function Wj(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function() {
                c++;
                return ab(function() {
                    b++;
                    d && b >= c && Uj(a)
                })
            },
            Mg: function() {
                d = !0;
                b >= c && Uj(a)
            }
        }
    };
    var Yj = function() {
        function a(d) {
            return !Ka(d) || 0 > d ? 0 : d
        }
        if (!O._li && B.performance && B.performance.timing) {
            var b = B.performance.timing.navigationStart,
                c = Ka(dh.get("gtm.start")) ? dh.get("gtm.start") : 0;
            O._li = {
                cst: a(c - b),
                cbt: a(Tg - b)
            }
        }
    };
    var ck = {},
        dk = function() {
            return B.GoogleAnalyticsObject && B[B.GoogleAnalyticsObject]
        },
        ek = !1;
    var fk = function(a) {
            B.GoogleAnalyticsObject || (B.GoogleAnalyticsObject = a || "ga");
            var b = B.GoogleAnalyticsObject;
            if (B[b]) B.hasOwnProperty(b) || I(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                B[b] = c
            }
            Yj();
            return B[b]
        },
        gk = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = dk();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        },
        hk = function(a) {};
    var jk = function(a) {},
        ik = function() {
            return B.GoogleAnalyticsObject || "ga"
        },
        kk = function(a, b) {
            return function() {
                var c = dk(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            l = 0 > g.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" +
                            b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload", g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var pk = function() {
            return "&tc=" + xd.filter(function(a) {
                return a
            }).length
        },
        sk = function() {
            2022 <= qk().length && rk()
        },
        uk = function() {
            tk || (tk = B.setTimeout(rk, 500))
        },
        rk = function() {
            tk && (B.clearTimeout(tk), tk = void 0);
            void 0 === vk || wk[vk] && !xk && !yk || (zk[vk] || Ak.Fh() || 0 >= Bk-- ? (I(1), zk[vk] = !0) : (Ak.di(), Qf(qk()), wk[vk] = !0, Ck = Dk = Ek = yk = xk = ""))
        },
        qk = function() {
            var a = vk;
            if (void 0 === a) return "";
            var b = lf("GTM"),
                c = lf("TAGGING");
            return [Fk, wk[a] ? "" : "&es=1", Gk[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", pk(), xk, yk, Ek ? Ek : "", Dk, Ck, "&z=0"].join("")
        },
        Hk = function() {
            return [Ug, "&v=3&t=t", "&pid=" + Pa(), "&rv=" + Yd.nc].join("")
        },
        Ik = "0.005000" > Math.random(),
        Fk = Hk(),
        Jk = function() {
            Fk = Hk()
        },
        wk = {},
        xk = "",
        yk = "",
        Ck = "",
        Dk = "",
        Ek = "",
        vk = void 0,
        Gk = {},
        zk = {},
        tk = void 0,
        Ak = function(a, b) {
            var c = 0,
                d = 0;
            return {
                Fh: function() {
                    if (c < a) return !1;
                    Za() - d >= b && (c = 0);
                    return c >= a
                },
                di: function() {
                    Za() - d >= b && (c = 0);
                    c++;
                    d = Za()
                }
            }
        }(2, 1E3),
        Bk = 1E3,
        Kk = function(a, b, c) {
            if (Ik && !zk[a] && b) {
                a !== vk && (rk(), vk = a);
                var d, e = String(b[Jd.Ka] || "").replace(/_/g, "");
                0 === e.indexOf("cvt") && (e = "cvt");
                d = e;
                var f = c + d;
                xk = xk ? xk + "." + f : "&tr=" + f;
                var g = b["function"];
                if (!g) throw Error("Error: No function name given for function call.");
                var h = (zd[g] ? "1" : "2") + d;
                Ck = Ck ? Ck + "." + h : "&ti=" + h;
                uk();
                sk()
            }
        },
        Lk = function(a, b, c) {
            if (Ik && !zk[a]) {
                a !== vk && (rk(), vk = a);
                var d = c + b;
                yk = yk ? yk + "." + d : "&epr=" + d;
                uk();
                sk()
            }
        },
        Mk = function(a, b, c) {};
    var Nk = function() {
            var a = O.consumeTestResult;
            if (a && Ja(a)) return !0;
            return !1
        },
        Ok = function() {
            var a = {};
            return function(b, c, d) {
                if (!Nk()) return;
                var e = a[b] || {
                    testName: b,
                    status: c,
                    logMessages: [],
                    elapsedTime: 0
                };
                a[b] = e;
                switch (c) {
                    case 4:
                        e.logMessages.push(d);
                        break;
                    case 3:
                        d && (e.error = d);
                        break;
                    case 5:
                        e.returnValue = d
                }
                if (2 === c || 3 === c) {
                    e.status = c;
                    var f = O.consumeTestResult;
                    f && f(e)
                }
            }
        };

    function Pk(a, b, c, d) {
        var e = xd[a],
            f = Qk(a, b, c, d);
        if (!f) return null;
        var g = Fd(e[Jd.Ve], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Pk(h.index, {
                J: f,
                I: 1 === h.hf ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Qk(a, b, c, d) {
        function e() {
            if (f[Jd.ug]) h();
            else {
                var x = Gd(f, c, []);
                var z = Sj(c.id, String(f[Jd.Ka]), Number(f[Jd.We]), x[Jd.vg]),
                    A = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var F = Za() - D;
                        Kk(c.id, xd[a], "5");
                        Tj(c.id, z, "success",
                            F);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var F = Za() - D;
                        Kk(c.id, xd[a], "6");
                        Tj(c.id, z, "failure", F);
                        h()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                Kk(c.id, f, "1");
                var C = function() {
                    var F = Za() - D;
                    Kk(c.id, f, "7");
                    Tj(c.id, z, "exception", F);
                    A || (A = !0, h())
                };
                var D = Za();
                try {
                    Ed(x, c)
                } catch (F) {
                    C(F)
                }
            }
        }
        var f = xd[a],
            g = b.J,
            h = b.I,
            l = b.terminate;
        if (c.yd(f)) return null;
        var n = Fd(f[Jd.Xe], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Pk(p.index, {
                    J: g,
                    I: h,
                    terminate: l
                }, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.hf ? l : q
        }
        if (f[Jd.Re] || f[Jd.yg]) {
            var t = f[Jd.Re] ? yd : c.si,
                r = g,
                u = h;
            if (!t[a]) {
                e = ab(e);
                var v = Rk(a, t, e);
                g = v.J;
                h = v.I
            }
            return function() {
                t[a](r, u)
            }
        }
        return e
    }

    function Rk(a, b, c) {
        var d = [],
            e = [];
        b[a] = Sk(d, e, c);
        return {
            J: function() {
                b[a] = Tk;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            I: function() {
                b[a] = Uk;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Sk(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Tk(a) {
        a()
    }

    function Uk(a, b) {
        b()
    };
    var Xk = function(a, b, c) {
        for (var d = [], e = 0; e < xd.length; e++)
            if (a[e]) {
                var f = xd[e];
                if (f[Jd.sg]) continue;
                var g = c.add();
                try {
                    var h = Pk(e, {
                        J: g,
                        I: g,
                        terminate: g
                    }, b, e);
                    h ? d.push({
                        Df: e,
                        wf: Hd(f),
                        yc: h
                    }) : (Vk(e, b), g())
                } catch (n) {
                    g()
                }
            }
        c.Mg();
        d.sort(Wk);
        for (var l = 0; l < d.length; l++) d[l].yc();
        return 0 < d.length
    };

    function Wk(a, b) {
        var c, d = b.wf,
            e = a.wf;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Df,
                h = b.Df;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function Vk(a, b) {
        if (!Ik) return;
        var c = function(d) {
            var e = b.yd(xd[d]) ? "3" : "4",
                f = Fd(xd[d][Jd.Ve], b, []);
            f && f.length && c(f[0].index);
            Kk(b.id, xd[d], e);
            var g = Fd(xd[d][Jd.Xe], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var Yk = !1,
        cl = function(a) {
            var b = a["gtm.uniqueEventId"],
                c = a.event;
            if ("gtm.js" === c) {
                if (Yk) return !1;
                Yk = !0
            }
            var d = Gj(b),
                e = !1;
            if (!d.active) {
                var f = !0;
                if ("gtm.js" === c) {
                    f = !1, e = !0, d = Gj(Number.MAX_SAFE_INTEGER);
                }
                if (f) return !1
            }
            Ik && !zk[b] && vk !== b && (rk(), vk = b, Ck = xk = "", Gk[b] = "&e=" + (0 === c.indexOf("gtm.") ? encodeURIComponent(c) : "*") + "&eid=" + b, uk());
            var g = {
                    id: b,
                    name: c,
                    yd: Ej(d.isAllowed),
                    si: [],
                    rf: function() {
                        I(6)
                    },
                    af: Zk(b)
                },
                h = Xj(b, a.eventCallback, a.eventTimeout);
            $k(b);
            var l = Td(g);
            e && (l = al(l));
            var n = Xk(l, g, h);
            "gtm.js" !== c && "gtm.sync" !== c || jk(Yd.C);
            switch (c) {
                case "gtm.init":
                    I(19), n && I(20)
            }
            return bl(l,
                n)
        };

    function Zk(a) {
        return function(b) {
            Ik && (Cb(b) || Mk(a, "input", b))
        }
    }

    function $k(a) {
        gh(a, "event", 1);
        gh(a, "ecommerce", 1);
        gh(a, "gtm");
        gh(a, "eventModel");
    }

    function al(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) a[c] && Mg[String(xd[c][Jd.Ka])] && (b[c] = !0);
        return b
    }

    function bl(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && xd[c] && !Ng[String(xd[c][Jd.Ka])]) return !0;
        return !1
    }

    function dl(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return th("" + c + b).href
        }
    }

    function el(a, b) {
        return fl() ? dl(a, b) : void 0
    }

    function fl() {
        var a = !1;
        return a
    };
    var gl = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.a = {};
            this.globalConfig = {};
            this.J = function() {};
            this.I = function() {};
            this.eventId = void 0
        },
        hl = function(a) {
            var b = new gl;
            b.eventModel = a;
            return b
        },
        il = function(a, b) {
            a.targetConfig = b;
            return a
        },
        jl = function(a, b) {
            a.containerConfig = b;
            return a
        },
        kl = function(a, b) {
            a.a = b;
            return a
        },
        ll = function(a, b) {
            a.globalConfig = b;
            return a
        },
        ml = function(a, b) {
            a.J = b;
            return a
        },
        nl = function(a, b) {
            a.I = b;
            return a
        };
    gl.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.a[a]) return this.a[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]
    };
    var ol = function(a) {
        function b(e) {
            Sa(e, function(f) {
                c[f] = null
            })
        }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        var d = [];
        Sa(c, function(e) {
            d.push(e)
        });
        return d
    };
    var pl;
    if (3 === Yd.nc.length) pl = "g";
    else {
        var ql = "G";
        pl = ql
    }
    var rl = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: pl,
            OPT: "o"
        },
        sl = function(a) {
            var b = Yd.C.split("-"),
                c = b[0].toUpperCase(),
                d = rl[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === Yd.nc.length) {
                var g = "w";
                f = "2" + g
            } else f = "";
            return f + d + Yd.nc + e
        };
    var tl = function(a, b) {
        a.addEventListener && a.addEventListener("message", b, !1)
    };
    var ul = function() {
        return zf("iPhone") && !zf("iPod") && !zf("iPad")
    };
    zf("Opera");
    zf("Trident") || zf("MSIE");
    zf("Edge");
    !zf("Gecko") || -1 != wf.toLowerCase().indexOf("webkit") && !zf("Edge") || zf("Trident") || zf("MSIE") || zf("Edge"); - 1 != wf.toLowerCase().indexOf("webkit") && !zf("Edge") && zf("Mobile");
    zf("Macintosh");
    zf("Windows");
    zf("Linux") || zf("CrOS");
    var vl = ma.navigator || null;
    vl && (vl.appVersion || "").indexOf("X11");
    zf("Android");
    ul();
    zf("iPad");
    zf("iPod");
    ul() || zf("iPad") || zf("iPod");
    wf.toLowerCase().indexOf("kaios");
    var wl = function(a, b) {
        for (var c = a, d = 0; 50 > d; ++d) {
            var e;
            try {
                e = !(!c.frames || !c.frames[b])
            } catch (h) {
                e = !1
            }
            if (e) return c;
            var f;
            a: {
                try {
                    var g = c.parent;
                    if (g && g != c) {
                        f = g;
                        break a
                    }
                } catch (h) {}
                f = null
            }
            if (!(c = f)) break
        }
        return null
    };
    var xl = function() {};
    var yl = function(a) {
            if ($f("tteai")) {
                if (void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies || void 0 !== a.listenerId && "number" !== typeof a.listenerId || void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent) return 2
            } else if (void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0), void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0), void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !==
                a.listenerId && "number" !== typeof a.listenerId) return 2;
            return a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        zl = function(a, b) {
            this.i = a;
            this.a = null;
            this.B = {};
            this.R = 0;
            this.F = void 0 === b ? 500 : b;
            this.m = null
        };
    la(zl, xl);
    var Bl = function(a) {
        return "function" === typeof a.i.__tcfapi || null != Al(a)
    };
    zl.prototype.addEventListener = function(a) {
        var b = {},
            c = qf(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.F && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.F));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = yl(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            Cl(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    zl.prototype.removeEventListener = function(a) {
        a && a.listenerId && Cl(this, "removeEventListener", null, a.listenerId)
    };
    var El = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var l;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = Dl(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && "DE" === a.publisherCC ? !0 : n && Dl(a.purpose.consents, b)
                } else l = !0;
            else l = 1 === h ? a.purpose && a.vendor ? Dl(a.purpose.legitimateInterests,
                b) && Dl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        Dl = function(a, b) {
            return !(!a || !a[b])
        },
        Cl = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.i.__tcfapi) {
                var e = a.i.__tcfapi;
                e(b, 2, c, d)
            } else if (Al(a)) {
                Fl(a);
                var f = ++a.R;
                a.B[f] = c;
                if (a.a) {
                    var g = {};
                    a.a.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Al = function(a) {
            if (a.a) return a.a;
            a.a = wl(a.i, "__tcfapiLocator");
            return a.a
        },
        Fl = function(a) {
            a.m || (a.m = function(b) {
                try {
                    var c, d;
                    "string" ===
                    typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                    c = d.__tcfapiReturn;
                    a.B[c.callId](c.returnValue, c.success)
                } catch (e) {}
            }, tl(a.i, a.m))
        };
    var Gl = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function Hl(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    var Il = Hl("", 550),
        Jl = Hl("", 500);

    function Kl() {
        var a = O.tcf || {};
        return O.tcf = a
    }
    var Ll = function(a, b) {
            this.m = a;
            this.a = b;
            this.i = Za();
        },
        Ml = function(a) {},
        Nl = function(a) {},
        Tl = function() {
            var a = Kl(),
                b = new zl(B, 3E3),
                c = new Ll(b, a);
            if ((Ol() ? !0 === B.gtag_enable_tcf_support : !1 !== B.gtag_enable_tcf_support) && !a.active && ("function" === typeof B.__tcfapi || Bl(b))) {
                a.active = !0;
                a.Pb = {};
                Pl();
                var d = setTimeout(function() {
                    Ql(a);
                    Rl(a);
                    d = null
                }, Jl);
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) Ql(a), Rl(a), Ml(c);
                        else {
                            var f;
                            if (!1 === e.gdprApplies) f = Sl(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {},
                                    h;
                                for (h in Gl)
                                    if (Gl.hasOwnProperty(h))
                                        if ("1" === h) {
                                            var l = e,
                                                n = !0;
                                            n = void 0 === n ? !1 : n;
                                            var p;
                                            var q = l;
                                            !1 === q.gdprApplies ? p = !0 : (void 0 === q.internalErrorState && (q.internalErrorState = yl(q)), p = "error" === q.cmpStatus || 0 !== q.internalErrorState || "loaded" === q.cmpStatus && ("tcloaded" === q.eventStatus || "useractioncomplete" === q.eventStatus) ? !0 : !1);
                                            g["1"] = p ? !1 === l.gdprApplies || "tcunavailable" === l.tcString ||
                                                void 0 === l.gdprApplies && !n || "string" !== typeof l.tcString || !l.tcString.length ? !0 : El(l, "1", 0) : !1
                                        } else g[h] = El(e, h, Gl[h]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.Pb = f, Rl(a), Ml(c))
                        }
                    }), Nl(c)
                } catch (e) {
                    d && (clearTimeout(d), d = null), Ql(a), Rl(a)
                }
            }
        };

    function Ql(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        a.Pb = Sl()
    }

    function Pl() {
        var a = {};
        og((a.ad_storage = "denied", a.wait_for_update = Il, a))
    }
    var Ol = function() {
        var a = !1;
        a = !0;
        return a
    };

    function Sl() {
        var a = {},
            b;
        for (b in Gl) Gl.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function Rl(a) {
        var b = {};
        pg((b.ad_storage = a.Pb["1"] ? "granted" : "denied", b))
    }
    var Ul = function() {
            var a = Kl();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
        },
        Vl = function() {
            var a = Kl();
            return a.active ? a.tcString || "" : ""
        },
        Wl = function(a) {
            if (!Gl.hasOwnProperty(String(a))) return !0;
            var b = Kl();
            return b.active && b.Pb ? !!b.Pb[String(a)] : !0
        };

    function Xl(a, b, c) {
        function d(p) {
            var q;
            O.reported_gclid || (O.reported_gclid = {});
            q = O.reported_gclid;
            var t = f + (p ? "gcu" : "gcs");
            if (!q[t]) {
                q[t] = !0;
                var r = [],
                    u = function(z, A) {
                        A && r.push(z + "=" + encodeURIComponent(A))
                    },
                    v = "https://www.google.com";
                if (jg()) {
                    var x = qg(H.s);
                    u("gcs", rg());
                    p && u("gcu", "1");
                    O.dedupe_gclid || (O.dedupe_gclid = "" + Jh());
                    u("rnd", O.dedupe_gclid);
                    if ((!f || g && "aw.ds" !== g) && qg(H.s)) {
                        var y = Ii("_gcl_aw");
                        u("gclaw", y.join("."))
                    }
                    u("url", String(B.location).split(/[?#]/)[0]);
                    u("dclid", Yl(b, h));
                    !x && b && (v =
                        "https://pagead2.googlesyndication.com")
                }
                u("gdpr_consent", Vl());
                "1" === ri(!1)._up && u("gtm_up", "1");
                u("gclid", Yl(b, f));
                u("gclsrc", g);
                u("gtm", sl(!c));
                var w = v + "/pagead/landing?" + r.join("&");
                Xf(w)
            }
        }
        var e = Li(),
            f = e.gclid || "",
            g = e.gclsrc,
            h = e.dclid || "",
            l = !a && (!f || g && "aw.ds" !== g ? !1 : !0),
            n = jg();
        if (l || n) n ? sg(function() {
            d();
            qg(H.s) || mg(function(p) {
                return d(!0, p.bf)
            }, H.s)
        }, [H.s]) : d()
    }

    function Yl(a, b) {
        var c = a && !qg(H.s);
        return b && c ? "0" : b
    }
    var Zl = function(a) {
        if (L.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !B.getComputedStyle) return !0;
        var c = B.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = B.getComputedStyle(d,
                null))
        }
        return !1
    };
    var hm = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        im = ["SCRIPT", "IMG", "SVG", "PATH", "BR"],
        jm = ["BR"];

    function km(a) {
        var b;
        if (a === L.body) b = "body";
        else {
            var c;
            if (a.id) c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a
                                }
                            e = -1
                        } else e = 1
                    }
                    d = km(a.parentElement) + ">:nth-child(" + e + ")"
                } else d = "";
                c = d
            }
            b = c
        }
        return b
    }

    function lm() {
        var a;
        var b = [],
            c = L.body;
        if (c) {
            for (var d = c.querySelectorAll("*"), e = 0; e < d.length && 1E4 > e; e++) {
                var f = d[e];
                if (!(0 <= im.indexOf(f.tagName.toUpperCase()))) {
                    for (var g = !1, h = 0; h < f.childElementCount && 1E4 > h; h++)
                        if (!(0 <= jm.indexOf(f.children[h].tagName.toUpperCase()))) {
                            g = !0;
                            break
                        }
                    g || b.push(f)
                }
            }
            a = {
                elements: b,
                status: 1E4 < d.length ? "2" : "1"
            }
        } else a = {
            elements: b,
            status: "4"
        };
        for (var l = a, n = l.elements, p = [], q = 0; q < n.length; q++) {
            var t = n[q],
                r = t.textContent;
            t.value && (r = t.value);
            if (r) {
                var u = r.match(hm);
                if (u) {
                    var v =
                        u[0],
                        x;
                    if (B.location) {
                        var y = qh(B.location, "host", !0);
                        x = 0 <= v.toLowerCase().indexOf(y)
                    } else x = !1;
                    x || p.push({
                        element: t,
                        Yi: v
                    })
                }
            }
        }
        for (var w = [], z = 10 < p.length ? "3" : l.status, A = 0; A < p.length && 10 > A; A++) {
            var C = p[A].element;
            w.push({
                querySelector: km(C),
                tagName: C.tagName,
                isVisible: !Zl(C),
                type: 1
            })
        }
        return {
            elements: w,
            status: z
        }
    }
    var vm = function(a) {
            return !(void 0 === a || null === a || 0 === (a + "").length)
        },
        wm = function(a, b) {
            var c;
            if (2 === b.aa) return a("ord", Pa(1E11, 1E13)), !0;
            if (3 === b.aa) return a("ord", "1"), a("num", Pa(1E11, 1E13)), !0;
            if (4 === b.aa) return vm(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.aa) c = "1";
            else if (6 === b.aa) c = b.Md;
            else return !1;
            vm(c) && a("qty", c);
            vm(b.uc) && a("cost", b.uc);
            vm(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        zm = function(a, b, c) {
            function d(w, z, A) {
                p.hasOwnProperty(w) || (z = String(z), n.push(";" + w + "=" + (A ?
                    z : ym(z))))
            }
            var e = a.rd,
                f = a.Pd,
                g = a.protocol;
            g += f ? "//" + e + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            var h = ";",
                l = !qg(H.s) && a.Qb;
            l && (g = "https://ade.googlesyndication.com/ddm/activity", h = "/", f = !1);
            var n = [h, "src=" + ym(e), ";type=" + ym(a.ud), ";cat=" + ym(a.Eb)],
                p = a.gh || {};
            Sa(p, function(w, z) {
                n.push(";" + ym(w) + "=" + ym(z + ""))
            });
            if (wm(d, a)) {
                vm(a.Mc) && d("u", a.Mc);
                vm(a.Lc) && d("tran", a.Lc);
                d("gtm", sl());
                jg() && (d("gcs", rg()), c && d("gcu", "1"));
                (function(w, z) {
                    z &&
                        d(w, z)
                })("gdpr_consent", Vl());
                "1" === ri(!1)._up && d("gtm_up", "1");
                !1 === a.Jg && d("npa", "1");
                if (a.qd) {
                    var q = void 0 === a.Qb ? !0 : !!a.Qb,
                        t = Zi("dc", a.ab, q);
                    t && t.length && d("gcldc", t.join("."));
                    var r = Zi("aw", a.ab, q);
                    r && r.length && d("gclaw", r.join("."));
                    var u = $i(q);
                    u && d("gac", u);
                    Uh({
                        prefix: a.ab,
                        Nb: a.dh,
                        domain: a.bh,
                        flags: a.Mi
                    });
                    var v = Qh[Rh(a.ab)];
                    v && d("auiddc", v)
                }
                vm(a.Hd) && d("prd", a.Hd, !0);
                Sa(a.Td, function(w, z) {
                    d(w, z)
                });
                n.push(b || "");
                if (vm(a.Dc)) {
                    var x = a.Dc || "";
                    l && (x = uh(x));
                    d("~oref", x)
                }
                var y = g + n.join("") + "?";
                f ? Pf(y, a.J) : Qf(y, a.J, a.I)
            } else N(a.I)
        },
        ym = encodeURIComponent,
        Am = function(a, b) {
            jg() ? sg(function() {
                zm(a, b);
                qg(H.s) || mg(function() {
                    zm(a, b, !0)
                }, H.s)
            }, [H.s]) : zm(a, b)
        };
    var Vm = function() {
            var a = !0;
            Wl(7) && Wl(9) && Wl(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !Um() && (a = !1);
            return a
        },
        Um = function() {
            var a = !0;
            Wl(3) && Wl(4) || (a = !1);
            return a
        };

    function rn() {
        var a = O;
        return a.gcq = a.gcq || new sn
    }
    var tn = function(a, b, c) {
            rn().register(a, b, c)
        },
        un = function(a, b, c, d) {
            rn().push("event", [b, a], c, d)
        },
        vn = function(a, b) {
            rn().push("config", [a], b)
        },
        wn = function(a) {
            rn().push("set", [a])
        },
        xn = function(a, b, c) {
            rn().push("get", [a, b], c)
        },
        yn = function(a) {
            return rn().getRemoteConfig(a)
        },
        zn = {},
        An = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.a = {};
            this.m = null;
            this.i = !1
        },
        Bn = function(a, b, c, d, e) {
            this.type = a;
            this.m = b;
            this.ca = c || "";
            this.a = d;
            this.i = e
        },
        sn = function() {
            this.m = {};
            this.i = {};
            this.a = []
        },
        Cn = function(a, b) {
            var c = dj(b);
            return a.m[c.containerId] = a.m[c.containerId] || new An
        },
        Dn = function(a, b, c) {
            if (b) {
                var d = dj(b);
                if (d && 1 === Cn(a, b).status) {
                    Cn(a, b).status = 2;
                    var e = {};
                    Ik && (e.timeoutId = B.setTimeout(function() {
                        I(38);
                        uk()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    zn[d.containerId] = Za();
                    if (gj()) {} else {
                        var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c",
                            h = ("http:" != B.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            l = el(c, g) || h;
                        Nf(l)
                    }
                }
            }
        },
        En = function(a, b, c, d) {
            if (d.ca) {
                var e = Cn(a, d.ca),
                    f = e.m;
                if (f) {
                    var g = E(c),
                        h = E(e.targetConfig[d.ca]),
                        l = E(e.containerConfig),
                        n = E(e.a),
                        p = E(a.i),
                        q = ch("gtm.uniqueEventId"),
                        t = dj(d.ca).prefix,
                        r = nl(ml(ll(kl(jl(il(hl(g), h), l), n), p), function() {
                                Lk(q, t, "2");
                            }),
                            function() {
                                Lk(q, t, "3");
                            });
                    try {
                        Lk(q, t, "1");
                        f(d.ca, b, d.m, r)
                    } catch (u) {
                        Lk(q, t, "4");
                    }
                }
            }
        };
    sn.prototype.register = function(a, b, c) {
        var d = Cn(this, a);
        if (3 !== d.status) {
            d.m = b;
            d.status = 3;
            if (c) {
                d.a = c
            }
            var e = dj(a),
                f = zn[e.containerId];
            if (void 0 !== f) {
                var g = O[e.containerId].bootstrap,
                    h = e.prefix.toUpperCase();
                O[e.containerId]._spx && (h = h.toLowerCase());
                var l = ch("gtm.uniqueEventId"),
                    n = h,
                    p = Za() - g;
                if (Ik && !zk[l]) {
                    l !== vk && (rk(), vk = l);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Dk = Dk ? Dk + "," + q : "&cl=" + q
                }
                delete zn[e.containerId]
            }
            this.flush()
        }
    };
    sn.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Za() / 1E3);
        Dn(this, c, b[0][H.Ja] || this.i[H.Ja]);
        this.a.push(new Bn(a, e, c, b, d));
        d || this.flush()
    };
    sn.prototype.flush = function(a) {
        for (var b = this; this.a.length;) {
            var c = this.a[0];
            if (c.i) c.i = !1, this.a.push(c);
            else switch (c.type) {
                case "require":
                    if (3 !== Cn(this, c.ca).status && !a) return;
                    Ik && B.clearTimeout(c.a[0].timeoutId);
                    break;
                case "set":
                    Sa(c.a[0], function(p, q) {
                        E(hb(p, q), b.i)
                    });
                    break;
                case "config":
                    var d = c.a[0],
                        e = !!d[H.hc];
                    delete d[H.hc];
                    var f = Cn(this, c.ca),
                        g = dj(c.ca),
                        h = g.containerId === g.id;
                    e || (h ? f.containerConfig = {} : f.targetConfig[c.ca] = {});
                    f.i && e || En(this, H.fa, d, c);
                    f.i = !0;
                    delete d[H.Ab];
                    h ? E(d, f.containerConfig) :
                        E(d, f.targetConfig[c.ca]);
                    break;
                case "event":
                    En(this, c.a[1], c.a[0], c);
                    break;
                case "get":
                    var l = {},
                        n = (l[H.za] = c.a[0], l[H.ya] = c.a[1], l);
                    En(this, H.Ga, n, c);
            }
            this.a.shift()
        }
    };
    sn.prototype.getRemoteConfig = function(a) {
        return Cn(this, a).a
    };
    var Fn = function(a, b, c) {};
    var Gn = function(a, b, c, d) {};
    var Hn = function(a) {};
    var In = function(a, b, c) {};
    var Jn = function(a, b) {
        return !0
    };
    var Kn = function(a, b) {
        var c;
        G(this.i.a, ["path:!string"], [a]);
        Ve(this, "access_globals", "execute", a);
        for (var d = a.split("."), e = B, f = e[d[0]], g = 1; f && g < d.length; g++) {
            e = f;
            f = f[d[g]];
        }
        if ("function" !== vb(f)) return;
        var h = !1;
        for (var l = [], n = 1; n < arguments.length; n++) l.push(Ab(arguments[n], this.m, h));
        var p = (0, this.m.R)(f, e, l);
        c = zb(p, this.m);
        void 0 === c && void 0 !== p && I(45);
        return c
    };
    var Ln = function(a) {};
    var Mn = !1,
        Nn = [];

    function On() {
        if (!Mn) {
            Mn = !0;
            for (var a = 0; a < Nn.length; a++) N(Nn[a])
        }
    }
    var Pn = function(a) {
        Mn ? N(a) : Nn.push(a)
    };
    var Qn = function(a) {
        G(this.i.a, ["listener:!Fn"], arguments);
        Ve(this, "process_dom_events", "window", "load");
        Pn(Ab(a))
    };
    var Rn = function(a, b) {
        var c;
        var e = !1;
        var f = zb(c, this.m, e);
        void 0 === f && void 0 !== c && I(45);
        return f
    };
    var Sn = function(a) {
        var b;
        G(this.i.a, ["path:!string"], arguments);
        Ve(this, "access_globals", "read", a);
        var c = a.split("."),
            d = B,
            e;
        for (e = 0; e < c.length - 1; e++) {
            d = d[c[e]];
            if (null == d) return;
        }
        b = d[c[e]];
        var f = !1;
        var g = zb(b, this.m, f);
        void 0 === g && void 0 !== b && I(45);
        return g
    };
    var Tn = function(a, b) {
        var c = null,
            d = !1;
        G(this.i.a, ["functionPath:!string", "arrayPath:!string"], arguments);
        Ve(this, "access_globals", "readwrite", a);
        Ve(this, "access_globals", "readwrite", b);
        var e = [];
        var f = a.split("."),
            g = gb(f, e),
            h = f[f.length - 1];
        if (void 0 === g) throw Error("Path " + a + " does not exist.");
        var l = g[h];
        if (l && !Ja(l)) return null;
        if (l) return zb(l, this.m, d);
        var n;
        l = function() {
            if (!Ja(n.push)) throw Error("Object at " + b + " in window is not an array.");
            n.push.call(n, arguments)
        };
        g[h] = l;
        var p = b.split("."),
            q = gb(p, e),
            t = p[p.length - 1];
        if (void 0 === q) throw Error("Path " + p + " does not exist.");
        n = q[t];
        void 0 === n && (n = [], q[t] = n);
        c = function() {
            l.apply(l, Array.prototype.slice.call(arguments, 0))
        };
        return zb(c, this.m, d)
    };
    var Un = function(a) {
        var b;
        var h = !1;
        return zb(b, this.m, h)
    };
    var Vn = function(a) {
        var b;
        return b
    };
    var Wn = function(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    };
    var Xn = function(a) {
        var b = null;
        return b
    };
    var Yn = function(a, b) {
        var c;
        return c
    };
    var Zn = function(a, b) {
        var c;
        return c
    };
    var $n = function(a) {
        var b = "";
        return b
    };

    function ao(a, b) {};
    var bo = function(a) {
        var b = "";
        return b
    };
    var co = function() {
        Ve(this, "get_user_agent");
        return B.navigator.userAgent
    };
    var eo = function(a, b) {};
    var fo = {},
        go = function(a, b, c, d) {
            G(this.i.a, ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
            Ve(this, "inject_script", a);
            var e = this.m,
                f = function() {
                    b instanceof jb && b.Pa(e)
                },
                g = function() {
                    c instanceof jb && c.Pa(e)
                };
            if (!d) {
                Nf(a, f, g);
                return
            }
            var h = d;
            fo[h] ? (fo[h].onSuccess.push(f), fo[h].onFailure.push(g)) : (fo[h] = {
                onSuccess: [f],
                onFailure: [g]
            }, f = function() {
                for (var l = fo[h].onSuccess, n = 0; n < l.length; n++) N(l[n]);
                l.push = function(p) {
                    N(p);
                    return 0
                }
            }, g = function() {
                for (var l = fo[h].onFailure, n = 0; n < l.length; n++) N(l[n]);
                fo[h] = null
            }, Nf(a, f, g));
        };
    var ho = function() {
            return !1
        },
        io = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };
    var jo = function() {};
    var ko = function(a, b) {
        var c = !1;
        return c
    };
    var lo = function() {
        var a = "";
        return a
    };
    var mo = function() {
        var a = "";
        return a
    };
    var no = function(a, b, c) {};
    var oo = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    };
    var po = function(a, b, c) {
        G(this.i.a, ["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
        Ve(this, "access_globals", "readwrite", a);
        var d = !1;
        var e = a.split("."),
            f = B,
            g;
        for (g = 0; g < e.length - 1; g++) {
            f = f[e[g]];
            if (void 0 === f) return !1;
        }
        if (void 0 ===
            f[e[g]] || c) return f[e[g]] = Ab(b, this.m, d), !0;
        return !1
    };

    function qo(a, b, c) {};
    var ro = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    var so = function(a, b, c) {
        var d = this;
    };
    var to = {},
        uo = {};
    to.getItem = function(a) {
        var b = null;
        return b
    };
    to.setItem = function(a, b) {};
    to.removeItem = function(a) {};
    to.clear = function() {};
    var vo = function(a) {
        var b;
        return b
    };
    var Uc = function() {
        var a = new ff;
        gj() ? (a.add("injectHiddenIframe", Ia), a.add("injectScript", Ia)) : (a.add("injectHiddenIframe", eo), a.add("injectScript", go));
        var b = no;
        a.add("Math", Oe());
        a.add("TestHelper", hf());
        a.add("addEventCallback", Hn);
        a.add("aliasInWindow", Jn);
        a.add("assertApi", Ke);
        a.add("assertThat", Le);
        a.add("callInWindow",
            Kn);
        a.add("callLater", Ln);
        a.add("copyFromDataLayer", Rn);
        a.add("copyFromWindow", Sn);
        a.add("createArgumentsQueue", Tn);
        a.add("createQueue", Un);
        a.add("decodeUri", Pe);
        a.add("decodeUriComponent", Qe);
        a.add("encodeUri", Re);
        a.add("encodeUriComponent", Se);
        a.add("fail", Te);
        a.add("fromBase64", Vn, !("atob" in B));
        a.add("generateRandom", Ue);
        a.add("getContainerVersion", We);
        a.add("getCookieValues", Wn);
        a.add("getQueryParameters", Yn);
        a.add("getReferrerQueryParameters", Zn);
        a.add("getReferrerUrl", $n);
        a.add("getTimestamp",
            Xe);
        a.add("getTimestampMillis", Xe);
        a.add("getType", Ye);
        a.add("getUrl", bo);
        a.add("localStorage", io, !ho());
        a.add("logToConsole", jo);
        a.add("makeInteger", $e);
        a.add("makeNumber", af);
        a.add("makeString", bf);
        a.add("makeTableMap", cf);
        a.add("mock", ef);
        a.add("queryPermission", ko);
        a.add("readCharacterSet", lo);
        a.add("readTitle", mo);
        a.add("sendPixel", b);
        a.add("setCookie", oo);
        a.add("setInWindow", po);
        a.add("sha256", so);
        a.add("templateStorage", to);
        a.add("toBase64", vo, !("btoa" in B));
        a.add("JSON", Ze(function(c) {
            var d = this.m.a;
            d && d.log.call(this, "error", c)
        }));
        return function(c) {
            var d;
            if (a.a.hasOwnProperty(c)) d = a.get(c, this);
            else {
                var e;
                if (e = a.i.hasOwnProperty(c)) b: {
                    var f = this.m.a;
                    if (f) {
                        var g = f.Ib();
                        if (g && 0 !== g.indexOf("__cvt_")) {
                            e = !0;
                            break b
                        }
                    }
                    e = !1
                }
                if (e) d = a.i.hasOwnProperty(c) ? a.i[c] : void 0;
                else throw Error(c + " is not a valid API name.");
            }
            return d
        }
    };
    var Sc, be;

    function wo() {
        var a = data.runtime || [],
            b = data.runtime_lines;
        Sc = new Qc;
        xo();
        td = function(e, f, g) {
            yo(f);
            var h = new pb;
            Sa(f, function(r, u) {
                var v = zb(u);
                void 0 === v && void 0 !== u && I(44);
                h.set(r, v)
            });
            Sc.a.a.B = Pd();
            var l = {
                Ng: ce(e),
                eventId: void 0 !== g ? g.id : void 0,
                Ib: function() {
                    return e
                },
                log: function() {}
            };
            if (Nk()) {
                var n = Ok(),
                    p = void 0,
                    q = void 0;
                l.da = {
                    i: {},
                    a: function(r, u, v) {
                        1 === u && (p = r);
                        7 === u && (q = v);
                        n(r, u, v)
                    },
                    m: df()
                };
                l.log = function(r, u) {
                    if (p) {
                        var v = Array.prototype.slice.call(arguments, 1);
                        n(p, 4, {
                            level: r,
                            source: q,
                            message: v
                        })
                    }
                }
            }
            var t =
                Tc(l, [e, h]);
            Sc.a.a.B = void 0;
            t instanceof za && "return" === t.a && (t = t.i);
            return Ab(t)
        };
        Vc();
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if (!La(d) || 3 > d.length) {
                if (0 === d.length) continue;
                break
            }
            b && b[c] && b[c].length && Ld(d, b[c]);
            Sc.yc(d)
        }
    }

    function yo(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ja(b) && (a.gtmOnSuccess = function() {
            N(b)
        });
        Ja(c) && (a.gtmOnFailure = function() {
            N(c)
        })
    }

    function xo() {
        var a = Sc;
        O.SANDBOXED_JS_SEMAPHORE = O.SANDBOXED_JS_SEMAPHORE || 0;
        Wc(a, function(b, c, d) {
            O.SANDBOXED_JS_SEMAPHORE++;
            try {
                return b.apply(c, d)
            } finally {
                O.SANDBOXED_JS_SEMAPHORE--
            }
        })
    }

    function zo(a) {
        void 0 !== a && Sa(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Wg[e] = Wg[e] || [];
                Wg[e].push(b)
            }
        })
    };
    var Ao = "HA GF G UA AW DC".split(" "),
        Bo = !1,
        Co = {},
        Do = !1;

    function Eo(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = E(b), b[H.Tc] && (c.eventCallback = b[H.Tc]), b[H.bc] && (c.eventTimeout = b[H.bc]));
        return c
    }

    function Fo() {
        return Bo
    }
    var Io = {
        config: function(a) {},
        event: function(a) {
            var b = a[1];
            if (!(2 >
                    a.length) && m(b)) {
                var c;
                if (2 < a.length) {
                    if (!xb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                    c = a[2]
                }
                var d = Eo(b, c);
                return d
            }
        },
        js: function(a) {
            if (2 == a.length && a[1].getTime) return Do = !0, Fo(), {
                event: "gtm.js",
                "gtm.start": a[1].getTime()
            }
        },
        policy: function(a) {
            if (3 === a.length) {
                var b = a[1],
                    c = a[2],
                    d = be.i;
                d.a[b] ? d.a[b].push(c) : d.a[b] = [c]
            }
        },
        set: function(a) {
            var b;
            2 == a.length && xb(a[1]) ? b = E(a[1]) : 3 == a.length && m(a[1]) && (b = {}, xb(a[2]) || La(a[2]) ?
                b[a[1]] = E(a[2]) : b[a[1]] = a[2]);
            if (b) {
                b._clear = !0;
                return b
            }
        },
        consent: function(a) {
            function b() {
                Fo() && E(a[2], {
                    subcommand: a[1]
                })
            }
            if (3 === a.length) {
                I(39);
                var c = Xg(),
                    d = a[1];
                "default" === d ? (b(), og(a[2])) : "update" === d && (b(), pg(a[2], c))
            }
        }
    };
    Io.get = function(a) {};
    var Jo = {
        policy: !0
    };
    var Ko = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) {
                        d = !1;
                        break
                    }
                d && (c.end(), c.end = null)
            }
        },
        Mo = function(a) {
            var b = Lo(),
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var cp = function(a) {
        if (bp(a)) return a;
        this.a = a
    };
    cp.prototype.vh = function() {
        return this.a
    };
    var bp = function(a) {
        return !a || "object" !== vb(a) || xb(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    cp.prototype.getUntrustedUpdateValue = cp.prototype.vh;
    var dp = [],
        ep = !1,
        fp = function(a) {
            return B["dataLayer"].push(a)
        },
        gp = function(a) {
            var b = O["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0;
            return function() {
                ++d === c && a()
            }
        };

    function hp(a) {
        var b = a._clear;
        Sa(a, function(d, e) {
            "_clear" !== d && (b && fh(d, void 0), fh(d, e))
        });
        Sg || (Sg = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Xg(), a["gtm.uniqueEventId"] = c, fh("gtm.uniqueEventId", c));
        return cl(a)
    }

    function ip() {
        for (var a = !1; !ep && 0 < dp.length;) {
            ep = !0;
            delete $g.eventModel;
            bh();
            var b = dp.shift();
            if (null != b) {
                var c = bp(b);
                if (c) {
                    var d = b;
                    b = bp(d) ? d.getUntrustedUpdateValue() : void 0;
                    for (var e = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], f = 0; f < e.length; f++) {
                        var g = e[f],
                            h = ch(g, 1);
                        if (La(h) || xb(h)) h = E(h);
                        ah[g] = h
                    }
                }
                try {
                    if (Ja(b)) try {
                        b.call(dh)
                    } catch (v) {} else if (La(b)) {
                        var l =
                            b;
                        if (m(l[0])) {
                            var n = l[0].split("."),
                                p = n.pop(),
                                q = l.slice(1),
                                t = ch(n.join("."), 2);
                            if (void 0 !== t && null !== t) try {
                                t[p].apply(t, q)
                            } catch (v) {}
                        }
                    } else {
                        if (Ta(b)) {
                            a: {
                                var r = b;
                                if (r.length && m(r[0])) {
                                    var u = Io[r[0]];
                                    if (u && (!c || !Jo[r[0]])) {
                                        b = u(r);
                                        break a
                                    }
                                }
                                b = void 0
                            }
                            if (!b) {
                                ep = !1;
                                continue
                            }
                        }
                        a = hp(b) || a
                    }
                } finally {
                    c && bh(!0)
                }
            }
            ep = !1
        }
        return !a
    }

    function jp() {
        var a = ip();
        try {
            Ko(B["dataLayer"], Yd.C)
        } catch (b) {}
        return a
    }
    var lp = function() {
            var a = Lf("dataLayer", []),
                b = Lf("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Pj(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Pn(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < O.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new cp(arguments[f])
                } else e = [].slice.call(arguments, 0);
                var g = c.apply(a, e);
                dp.push.apply(dp, e);
                if (300 <
                    this.length)
                    for (I(4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return ip() && h
            };
            var d = a.slice(0);
            dp.push.apply(dp, d);
            kp() && N(jp)
        },
        kp = function() {
            var a = !0;
            return a
        };
    var mp = {};
    mp.ic = new String("undefined");
    var np = function(a) {
        this.a = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === mp.ic ? b : a[d]);
            return c.join("")
        }
    };
    np.prototype.toString = function() {
        return this.a("undefined")
    };
    np.prototype.valueOf = np.prototype.toString;
    mp.Ag = np;
    mp.jd = {};
    mp.eh = function(a) {
        return new np(a)
    };
    var op = {};
    mp.ei = function(a, b) {
        var c = Xg();
        op[c] = [a, b];
        return c
    };
    mp.ef = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = op[c];
            if (d && "function" === typeof d[b]) d[b]();
            op[c] = void 0
        }
    };
    mp.Dh = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    mp.Yh = function(a) {
        if (a === mp.ic) return a;
        var b = Xg();
        mp.jd[b] = a;
        return 'google_tag_manager["' + Yd.C + '"].macro(' + b + ")"
    };
    mp.Ph = function(a, b, c) {
        a instanceof mp.Ag && (a = a.a(mp.ei(b, c)), b = Ia);
        return {
            wd: a,
            J: b
        }
    };
    var pp = function(a, b, c) {
            function d(f, g) {
                var h = f[g];
                return h
            }
            var e = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": d(a, "className"),
                "gtm.elementId": a["for"] || Tf(a, "id") || "",
                "gtm.elementTarget": a.formTarget || d(a, "target") || ""
            };
            c && (e["gtm.triggers"] = c.join(","));
            e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase ||
                "";
            return e
        },
        qp = function(a) {
            O.hasOwnProperty("autoEventsSettings") || (O.autoEventsSettings = {});
            var b = O.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        rp = function(a, b, c) {
            qp(a)[b] = c
        },
        sp = function(a, b, c, d) {
            var e = qp(a),
                f = $a(e, b, d);
            e[b] = c(f)
        },
        tp = function(a, b, c) {
            var d = qp(a);
            return $a(d, b, c)
        };
    var up = ["input", "select", "textarea"],
        vp = ["button", "hidden", "image", "reset", "submit"],
        wp = function(a) {
            var b = a.tagName.toLowerCase();
            return !Oa(up, function(c) {
                return c === b
            }) || "input" === b && Oa(vp, function(c) {
                return c === a.type.toLowerCase()
            }) ? !1 : !0
        },
        xp = function(a) {
            return a.form ? a.form.tagName ? a.form : L.getElementById(a.form) : Wf(a, ["form"], 100)
        },
        yp = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
                var g = a.elements[e];
                if (wp(g)) {
                    if (g.getAttribute(c) === d) return f;
                    f++
                }
            }
            return 0
        };
    var zp = !!B.MutationObserver,
        Ap = void 0,
        Bp = function(a) {
            if (!Ap) {
                var b = function() {
                    var c = L.body;
                    if (c)
                        if (zp)(new MutationObserver(function() {
                            for (var e = 0; e < Ap.length; e++) N(Ap[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Rf(c, "DOMNodeInserted", function() {
                                d || (d = !0, N(function() {
                                    d = !1;
                                    for (var e = 0; e < Ap.length; e++) N(Ap[e])
                                }))
                            })
                        }
                };
                Ap = [];
                L.body ? b() : N(b)
            }
            Ap.push(a)
        };
    var Np = B.clearTimeout,
        Op = B.setTimeout,
        S = function(a, b, c) {
            if (gj()) {
                b && N(b)
            } else return Nf(a, b, c)
        },
        Pp = function() {
            return new Date
        },
        Qp = function() {
            return B.location.href
        },
        Rp = function(a) {
            return rh(th(a), "fragment")
        },
        Sp = function(a) {
            return sh(th(a))
        },
        Tp = function(a, b) {
            return ch(a, b || 2)
        },
        Up = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = fp(a)) : d = fp(a);
            return d
        },
        Vp = function(a, b) {
            B[a] = b
        },
        T = function(a, b, c) {
            b &&
                (void 0 === B[a] || c && !B[a]) && (B[a] = b);
            return B[a]
        },
        Wp = function(a, b, c) {
            return xh(a, b, void 0 === c ? !0 : !!c)
        },
        Xp = function(a, b, c) {
            return 0 === Gh(a, b, c)
        },
        Yp = function(a, b) {
            if (gj()) {
                b && N(b)
            } else Pf(a, b)
        },
        Zp = function(a) {
            return !!tp(a, "init", !1)
        },
        $p = function(a) {
            rp(a, "init", !0)
        },
        aq = function(a, b) {
            var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : Qg;
            c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            S(ij("https://", "http://", c))
        },
        bq = function(a,
            b) {
            var c = a[b];
            return c
        },
        cq = function(a, b, c) {
            Ik && (Cb(a) || Mk(c, b, a))
        };
    var dq = mp.Ph;

    function Aq(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Bq = new Qa;

    function Cq(a, b) {
        function c(g) {
            var h = th(g),
                l = rh(h, "protocol"),
                n = rh(h, "host", !0),
                p = rh(h, "port"),
                q = rh(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == p || "https" == l && "443" == p) l = "web", p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Dq(a) {
        return Eq(a) ? 1 : 0
    }

    function Eq(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && La(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = E(a, {});
                E({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Dq(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var h = 0; h < g.length; h++)
                                if (b[g[h]]) {
                                    f = b[g[h]](c);
                                    break a
                                }
                        } catch (r) {}
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Aq(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var l;
                l = String(b).split(",");
                return 0 <= Na(l, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var n;
                var p = a.ignore_case ? "i" : void 0;
                try {
                    var q = String(c) + p,
                        t = Bq.get(q);
                    t || (t = new RegExp(c, p), Bq.set(q, t));
                    n = t.test(b)
                } catch (r) {
                    n = !1
                }
                return n;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Cq(b, c)
        }
        return !1
    };
    var Fq = {},
        Gq = encodeURI,
        W = encodeURIComponent,
        Hq = Qf;
    var Iq = function(a, b) {
        if (!a) return !1;
        var c = rh(th(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var Jq = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };
    Fq.Eh = function() {
        var a = !1;
        a = !0;
        return a
    };
    var tr = null,
        ur = [],
        vr = 0,
        wr = null;

    function xr() {
        var a = Za() - vr;
        0 <= a ? (wr && (B.clearTimeout(wr), wr = null), yr()) : wr || (wr = B.setTimeout(function() {
            yr();
            wr = null
        }, 0 - a))
    }

    function yr() {
        vr = Za();
        var a = ur;
        ur = [];
        var b, c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        b = c ? c.call(a) : {
            next: da(a)
        };
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = d.value;
            e()
        }
        tr && (tr.takeRecords(), ur.length || (tr && (tr.disconnect(), tr = null), wr && (B.clearTimeout(wr), wr = null)))
    };

    function as() {
        return B.gaGlobal = B.gaGlobal || {}
    }
    var bs = function() {
            var a = as();
            a.hid = a.hid || Pa();
            return a.hid
        },
        cs = function(a, b) {
            var c = as();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Ks = function(a, b) {
        var c;
        var d = ls(a);
        d ? (js(d, a) || (I(25), a.abort()), c = d) : c = void 0;
        var e = c,
            f;
        a: {
            var g = a.L[H.Xa];g ? (g = "" + g, gs(g, a) || (I(31), a.abort()), cs(g, qg(H.M)), f = g) : (I(32), a.abort(), f = "")
        }
        return {
            clientId: f,
            Af: e
        }
    };
    var Ls = window,
        Ms = document,
        Ns = function(a) {
            var b = Ls._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Ls["ga-disable-" + a]) return !0;
            try {
                var c = Ls.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = vh("AMP_TOKEN", String(Ms.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Ms.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function Qs(a) {
        delete a.eventModel[H.Ab];
        Ts(a.eventModel)
    }
    var Ts = function(a) {
        Sa(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[H.na] || {};
        Sa(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Ws = function(a, b, c) {
            un(b, c, a)
        },
        Xs = function(a, b, c) {
            un(b, c, a, !0)
        },
        Zs = function(a, b) {};

    function Ys(a, b) {}
    var Z = {
        b: {}
    };
    Z.b.ctv = ["google"],
        function() {
            (function(a) {
                Z.__ctv = a;
                Z.__ctv.g = "ctv";
                Z.__ctv.h = !0;
                Z.__ctv.priorityOverride = 0
            })(function() {
                return "397"
            })
        }();

    Z.b.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.g = "jsm";
                Z.__jsm.h = !0;
                Z.__jsm.priorityOverride = 0
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = T("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        cq(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();
    Z.b.flc = [],
        function() {
            function a(b, c) {
                c = c ? c.slice(0, -1) : void 0;
                Am(b, c)
            }(function(b) {
                Z.__flc = b;
                Z.__flc.g = "flc";
                Z.__flc.h = !0;
                Z.__flc.priorityOverride = 0
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || b.vtp_enableConversionLinker,
                    d = Jq(b.vtp_customVariable || [], "key", "value") || {},
                    e = {
                        Eb: b.vtp_activityTag,
                        qd: c,
                        ab: b.vtp_conversionCookiePrefix || void 0,
                        uc: void 0,
                        aa: {
                            UNIQUE: 3,
                            SESSION: 4
                        }[b.vtp_ordinalType] || 2,
                        rd: b.vtp_advertiserId,
                        ud: b.vtp_groupTag,
                        I: b.vtp_gtmOnFailure,
                        J: b.vtp_gtmOnSuccess,
                        Dc: b.vtp_useImageTag ? void 0 : b.vtp_url,
                        protocol: "",
                        Md: void 0,
                        Pd: !b.vtp_useImageTag,
                        sessionId: b.vtp_sessionId,
                        Lc: b.vtp_transactionVariable,
                        transactionId: void 0,
                        Mc: b.vtp_userVariable,
                        Td: d
                    },
                    f = !qg(H.s) && void 0 != Tp(H.N) && !1 !== Tp(H.N);
                e.Qb = f;
                if (b.vtp_enableAttribution) {
                    var g = b.vtp_attributionFields || [];
                    if (g.length) {
                        S("//www.gstatic.com/attribution/collection/attributiontools.js", function() {
                            a(e, T("google_attr").build([Jq(g, "key", "value") || {}]))
                        }, b.vtp_gtmOnFailure);
                        return
                    }
                }
                a(e)
            })
        }();
    Z.b.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.g = "c";
                Z.__c.h = !0;
                Z.__c.priorityOverride = 0
            })(function(a) {
                cq(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();
    Z.b.d = ["google"],
        function() {
            (function(a) {
                Z.__d = a;
                Z.__d.g = "d";
                Z.__d.h = !0;
                Z.__d.priorityOverride = 0
            })(function(a) {
                var b = null,
                    c = null,
                    d = a.vtp_attributeName;
                if ("CSS" == a.vtp_selectorType) {
                    var e = ug(a.vtp_elementSelector);
                    e && 0 < e.length && (b = e[0])
                } else b = L.getElementById(a.vtp_elementId);
                b && (d ? c = Tf(b, d) : c = Uf(b));
                return Ya(String(b && c))
            })
        }();
    Z.b.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.g = "e";
                Z.__e.h = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                return String(hh(a.vtp_gtmEventId, "event"))
            })
        }();
    Z.b.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.g = "f";
                Z.__f.h = !0;
                Z.__f.priorityOverride = 0
            })(function(a) {
                var b = Tp("gtm.referrer", 1) || L.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? rh(th(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Sp(String(b)) : String(b)
            })
        }();
    Z.b.j = ["google"],
        function() {
            (function(a) {
                Z.__j = a;
                Z.__j.g = "j";
                Z.__j.h = !0;
                Z.__j.priorityOverride = 0
            })(function(a) {
                for (var b = String(a.vtp_name).split("."), c = T(b.shift()), d = 0; d < b.length; d++) c = c && c[b[d]];
                cq(c, "j", a.vtp_gtmEventId);
                return c
            })
        }();
    Z.b.k = ["google"],
        function() {
            (function(a) {
                Z.__k = a;
                Z.__k.g = "k";
                Z.__k.h = !0;
                Z.__k.priorityOverride = 0
            })(function(a) {
                return Wp(a.vtp_name, Tp("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
            })
        }();

    Z.b.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid access_globals request " + c);
                }
                return e
            }(function(b) {
                Z.__access_globals = b;
                Z.__access_globals.g = "access_globals";
                Z.__access_globals.h = !0;
                Z.__access_globals.priorityOverride = 0
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError,
                        e = [], f = [], g = [], h = 0; h < c.length; h++) {
                    var l = c[h],
                        n = l.key;
                    l.read && e.push(n);
                    l.write && f.push(n);
                    l.execute && g.push(n)
                }
                return {
                    assert: function(p, q, t) {
                        if (!m(t)) throw d(p, {}, "Key must be a string.");
                        if ("read" === q) {
                            if (-1 < Na(e, t)) return
                        } else if ("write" === q) {
                            if (-1 < Na(f, t)) return
                        } else if ("readwrite" === q) {
                            if (-1 < Na(f, t) && -1 < Na(e, t)) return
                        } else if ("execute" === q) {
                            if (-1 < Na(g, t)) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " +
                            t + ".");
                    },
                    K: a
                }
            })
        }();
    Z.b.r = ["google"],
        function() {
            (function(a) {
                Z.__r = a;
                Z.__r.g = "r";
                Z.__r.h = !0;
                Z.__r.priorityOverride = 0
            })(function(a) {
                return Pa(a.vtp_min, a.vtp_max)
            })
        }();
    Z.b.t = ["google"],
        function() {
            (function(a) {
                Z.__t = a;
                Z.__t.g = "t";
                Z.__t.h = !0;
                Z.__t.priorityOverride = 0
            })(function() {
                return Pp().getTime()
            })
        }();
    Z.b.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.g = "u";
                Z.__u.h = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                b.vtp_customUrlSource ? c = b.vtp_customUrlSource : c = Tp("gtm.url", 1);
                c = c || Qp();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Sp(String(c));
                var e = th(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] || "",
                        l = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? La(h) ? n = h : n = String(h).replace(/\s+/g,
                        "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = rh(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!l || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = rh(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return f
            })
        }();
    Z.b.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.g = "v";
                Z.__v.h = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Tp(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                cq(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();
    Z.b.ua = ["google"],
        function() {
            function a(q) {
                return qg(q)
            }

            function b(q, t) {
                if (jg() && !e[q]) {
                    var r = function() {
                        var u = dk(),
                            v = "gtm" + Xg(),
                            x = n(t),
                            y = {
                                name: v
                            };
                        l(x, y, !0);
                        u("create", q, y);
                        u(function() {
                            u.remove(v)
                        })
                    };
                    mg(r, H.M);
                    mg(r, H.s);
                    e[q] = !0
                }
            }
            var c, d = {},
                e = {},
                f = {
                    name: !0,
                    clientId: !0,
                    sampleRate: !0,
                    siteSpeedSampleRate: !0,
                    alwaysSendReferrer: !0,
                    allowAnchor: !0,
                    allowLinker: !0,
                    cookieName: !0,
                    cookieDomain: !0,
                    cookieExpires: !0,
                    cookiePath: !0,
                    cookieUpdate: !0,
                    cookieFlags: !0,
                    legacyCookieDomain: !0,
                    legacyHistoryImport: !0,
                    storage: !0,
                    useAmpClientId: !0,
                    storeGac: !0,
                    _cd2l: !0,
                    _useUp: !0,
                    _cs: !0
                },
                g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                h = {
                    urlPassthrough: !0
                },
                l = function(q, t, r) {
                    var u = 0;
                    if (q)
                        for (var v in q)
                            if (!h[v] && q.hasOwnProperty(v) && (r && f[v] || !r && void 0 === f[v])) {
                                var x = g[v] ? Wa(q[v]) : q[v];
                                "anonymizeIp" != v || x ||
                                    (x = void 0);
                                t[v] = x;
                                u++
                            }
                    return u
                },
                n = function(q) {
                    var t = {};
                    q.vtp_gaSettings && E(Jq(q.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), t);
                    E(Jq(q.vtp_fieldsToSet, "fieldName", "value"), t);
                    qg(H.M) || (t.storage = "none");
                    qg(H.s) || (t.allowAdFeatures = !1, t.storeGac = !1);
                    Vm() || (t.allowAdFeatures = !1);
                    Um() || (t.allowAdPersonalizationSignals = !1);
                    q.vtp_transportUrl && (t._x_19 = q.vtp_transportUrl);
                    return t
                },
                p = function(q) {
                    function t(ta, P) {
                        void 0 !== P && F("set", ta, P)
                    }
                    var r = {},
                        u = {},
                        v = {},
                        x = {};
                    if (q.vtp_gaSettings) {
                        var y = q.vtp_gaSettings;
                        E(Jq(y.vtp_contentGroup, "index", "group"), u);
                        E(Jq(y.vtp_dimension, "index", "dimension"), v);
                        E(Jq(y.vtp_metric, "index", "metric"), x);
                        var w = E(y);
                        w.vtp_fieldsToSet = void 0;
                        w.vtp_contentGroup = void 0;
                        w.vtp_dimension =
                            void 0;
                        w.vtp_metric = void 0;
                        q = E(q, w)
                    }
                    E(Jq(q.vtp_contentGroup, "index", "group"), u);
                    E(Jq(q.vtp_dimension, "index", "dimension"), v);
                    E(Jq(q.vtp_metric, "index", "metric"), x);
                    var z = n(q),
                        A = fk(q.vtp_functionName);
                    if (Ja(A)) {
                        var C = "",
                            D = "";
                        q.vtp_setTrackerName && "string" == typeof q.vtp_trackerName ? "" !== q.vtp_trackerName && (D = q.vtp_trackerName, C = D + ".") : (D = "gtm" + Xg(), C = D + ".");
                        var F = function(ta) {
                                var P = [].slice.call(arguments, 0);
                                P[0] = C + P[0];
                                A.apply(window, P)
                            },
                            M = function(ta, P) {
                                return void 0 === P ? P : ta(P)
                            },
                            Q = function(ta, P) {
                                if (P)
                                    for (var fb in P) P.hasOwnProperty(fb) &&
                                        F("set", ta + fb, P[fb])
                            },
                            ba = function() {},
                            ca = {
                                name: D
                            };
                        l(z, ca, !0);
                        var va = q.vtp_trackingId || r.trackingId;
                        A("create", va, ca);
                        F("set", "&gtm", sl(!0));
                        jg() && (F("set", "&gcs", rg()), b(va, q));
                        z._x_19 && (null == Kf && delete z._x_19, z._x_20 && !d[D] && (d[D] = !0, A(kk(D, String(z._x_20)))));
                        q.vtp_enableRecaptcha && F("require", "recaptcha", "recaptcha.js");
                        (function(ta, P) {
                            void 0 !== q[P] && F("set", ta, q[P])
                        })("nonInteraction", "vtp_nonInteraction");
                        Q("contentGroup", u);
                        Q("dimension", v);
                        Q("metric", x);
                        var J = {};
                        l(z, J, !1) && F("set", J);
                        var K;
                        q.vtp_enableLinkId && F("require", "linkid", "linkid.js");
                        F("set", "hitCallback", function() {
                            var ta = z && z.hitCallback;
                            Ja(ta) && ta();
                            q.vtp_gtmOnSuccess()
                        });
                        if ("TRACK_EVENT" == q.vtp_trackType) {
                            q.vtp_enableEcommerce && (F("require", "ec", "ec.js"), ba());
                            var V = {
                                hitType: "event",
                                eventCategory: String(q.vtp_eventCategory || r.category),
                                eventAction: String(q.vtp_eventAction || r.action),
                                eventLabel: M(String, q.vtp_eventLabel || r.label),
                                eventValue: M(Va, q.vtp_eventValue ||
                                    r.value)
                            };
                            l(K, V, !1);
                            F("send", V);
                        } else if ("TRACK_SOCIAL" == q.vtp_trackType) {} else if ("TRACK_TRANSACTION" == q.vtp_trackType) {} else if ("TRACK_TIMING" ==
                            q.vtp_trackType) {} else if ("DECORATE_LINK" == q.vtp_trackType) {} else if ("DECORATE_FORM" == q.vtp_trackType) {} else if ("TRACK_DATA" == q.vtp_trackType) {} else {
                            q.vtp_enableEcommerce && (F("require", "ec", "ec.js"), ba());
                            if (q.vtp_doubleClick || "DISPLAY_FEATURES" == q.vtp_advertisingFeaturesType) {
                                var fc =
                                    "_dc_gtm_" + String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                                F("require", "displayfeatures", void 0, {
                                    cookieName: fc
                                })
                            }
                            if ("DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == q.vtp_advertisingFeaturesType) {
                                var Cc = "_dc_gtm_" + String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                                F("require", "adfeatures", {
                                    cookieName: Cc
                                })
                            }
                            K ? F("send", "pageview", K) : F("send", "pageview");
                            Wa(z.urlPassthrough) && hk(C)
                        }
                        if (!c) {
                            var jd = q.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                            q.vtp_useInternalVersion && !q.vtp_useDebugVersion && (jd = "internal/" + jd);
                            c = !0;
                            var kd = el(z._x_19, "/analytics.js"),
                                Df = ij("https:", "http:", "//www.google-analytics.com/" + jd, z && !!z.forceSSL);
                            S("analytics.js" === jd && kd ? kd : Df, function() {
                                    var ta = dk();
                                    ta && ta.loaded || q.vtp_gtmOnFailure();
                                },
                                q.vtp_gtmOnFailure)
                        }
                    } else N(q.vtp_gtmOnFailure)
                };
            (function(q) {
                Z.__ua = q;
                Z.__ua.g = "ua";
                Z.__ua.h = !0;
                Z.__ua.priorityOverride = 0
            })(function(q) {
                sg(function() {
                    p(q)
                }, [H.M, H.s])
            })
        }();


    Z.b.inject_script = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Z.__inject_script = b;
                Z.__inject_script.g = "inject_script";
                Z.__inject_script.h = !0;
                Z.__inject_script.priorityOverride = 0
            })(function(b) {
                var c = b.vtp_urls || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!m(f)) throw d(e, {}, "Script URL must be a string.");
                        try {
                            if (Be(th(f), c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid script URL filter.");
                        }
                        throw d(e, {}, "Prohibited script URL: " + f);
                    },
                    K: a
                }
            })
        }();


    Z.b.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.g = "cid";
                Z.__cid.h = !0;
                Z.__cid.priorityOverride = 0
            })(function() {
                return Yd.C
            })
        }();

    Z.b.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gp"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.g = "gclidw";
                Z.__gclidw.h = !0;
                Z.__gclidw.priorityOverride = 100
            })(function(b) {
                N(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, b.vtp_enableCookieFlagsFeature && (f = b.vtp_cookieFlags));
                var g = null;
                b.vtp_enableCookieUpdateFeature && (g = !0, void 0 !== b.vtp_cookieUpdate && (g = !!b.vtp_cookieUpdate));
                var h = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                b.vtp_enableCrossDomainFeature &&
                    (b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || (b.vtp_enableCrossDomain || yi()) && Qi(a, h));
                Ni(h);
                Si(["aw", "dc"], h);
                aj(g, h);
                var l = e;
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var n = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    Ri(a, n, b.vtp_urlPosition, !!b.vtp_formDecoration, l)
                }
                var p = Tp(H.N);
                Xl(!1, void 0 != p && !1 !== p);
                b.vtp_enableUrlPassthroughFeature && b.vtp_enableUrlPassthrough && Ui()
            })
        }();
    Z.b.aev = ["google"],
        function() {
            function a(r, u) {
                var v = hh(r, "gtm");
                if (v) return v[u]
            }

            function b(r, u, v, x) {
                x || (x = "element");
                var y = r + "." + u,
                    w;
                if (p.hasOwnProperty(y)) w = p[y];
                else {
                    var z = a(r, x);
                    if (z && (w = v(z), p[y] = w, q.push(y), 35 < q.length)) {
                        var A = q.shift();
                        delete p[A]
                    }
                }
                return w
            }

            function c(r, u, v) {
                var x = a(r, t[u]);
                return void 0 !== x ? x : v
            }

            function d(r, u) {
                if (!r) return !1;
                var v = e(Qp());
                La(u) || (u = String(u || "").replace(/\s+/g, "").split(","));
                for (var x = [v], y = 0; y < u.length; y++) {
                    var w = u[y];
                    if (w.hasOwnProperty("is_regex"))
                        if (w.is_regex) try {
                            w =
                                new RegExp(w.domain)
                        } catch (A) {
                            continue
                        } else w = w.domain;
                    if (w instanceof RegExp) {
                        if (w.test(r)) return !1
                    } else {
                        var z = w;
                        if (0 != z.length) {
                            if (0 <= e(r).indexOf(z)) return !1;
                            x.push(e(z))
                        }
                    }
                }
                return !Iq(r, x)
            }

            function e(r) {
                n.test(r) || (r = "http://" + r);
                return rh(th(r), "HOST", !0)
            }

            function f(r, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return b(u, "FORM." + r, g, "formSubmitElement") || v;
                    case "LENGTH":
                        var x = b(u, "FORM." + r, h);
                        return void 0 === x ? v : x;
                    case "INTERACTED_FIELD_ID":
                        return l(u, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return l(u, "name",
                            v);
                    case "INTERACTED_FIELD_TYPE":
                        return l(u, "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var y = a(u, "interactedFormFieldPosition");
                        return void 0 === y ? v : y;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var w = a(u, "interactSequenceNumber");
                        return void 0 === w ? v : w;
                    default:
                        return v
                }
            }

            function g(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return Tf(r, "value");
                    case "button":
                        return Uf(r);
                    default:
                        return null
                }
            }

            function h(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var u = 0, v = 0; v < r.elements.length; v++) wp(r.elements[v]) &&
                        u++;
                    return u
                }
            }

            function l(r, u, v) {
                var x = a(r, "interactedFormField");
                return x && Tf(x, u) || v
            }
            var n = /^https?:\/\//i,
                p = {},
                q = [],
                t = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Z.__aev = r;
                Z.__aev.g = "aev";
                Z.__aev.h = !0;
                Z.__aev.priorityOverride =
                    0
            })(function(r) {
                var u = r.vtp_gtmEventId,
                    v = r.vtp_defaultValue,
                    x = r.vtp_varType;
                switch (x) {
                    case "TAG_NAME":
                        var y = a(u, "element");
                        return y && y.tagName || v;
                    case "TEXT":
                        return b(u, x, Uf) || v;
                    case "URL":
                        var w;
                        a: {
                            var z = String(a(u, "elementUrl") || v || ""),
                                A = th(z),
                                C = String(r.vtp_component || "URL");
                            switch (C) {
                                case "URL":
                                    w = z;
                                    break a;
                                case "IS_OUTBOUND":
                                    w = d(z, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    w = rh(A, C, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return w;
                    case "ATTRIBUTE":
                        var D;
                        if (void 0 === r.vtp_attribute) D = c(u,
                            x, v);
                        else {
                            var F = r.vtp_attribute,
                                M = a(u, "element");
                            D = M && Tf(M, F) || v || ""
                        }
                        return D;
                    case "MD":
                        var Q = r.vtp_mdValue,
                            ba = b(u, "MD", Ip);
                        return Q && ba ? Lp(ba, Q) || v : ba || v;
                    case "FORM":
                        return f(String(r.vtp_component || "SUBMIT_TEXT"), u, v);
                    default:
                        var ca = c(u, x, v);
                        cq(ca, "aev", r.vtp_gtmEventId);
                        return ca
                }
            })
        }();
    Z.b.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.g = "gas";
                Z.__gas.h = !0;
                Z.__gas.priorityOverride = 0
            })(function(a) {
                var b = E(a),
                    c = b;
                c[Jd.Ka] = null;
                c[Jd.rg] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();
    Z.b.hl = ["google"],
        function() {
            function a(f) {
                return f.target && f.target.location && f.target.location.href ? f.target.location.href : Qp()
            }

            function b(f, g) {
                Rf(f, "hashchange", function(h) {
                    var l = a(h);
                    g({
                        source: "hashchange",
                        state: null,
                        url: Sp(l),
                        T: Rp(l)
                    })
                })
            }

            function c(f, g) {
                Rf(f, "popstate", function(h) {
                    var l = a(h);
                    g({
                        source: "popstate",
                        state: h.state,
                        url: Sp(l),
                        T: Rp(l)
                    })
                })
            }

            function d(f, g, h) {
                var l = g.history,
                    n = l[f];
                if (Ja(n)) try {
                    l[f] = function(p, q, t) {
                        n.apply(l, [].slice.call(arguments, 0));
                        h({
                            source: f,
                            state: p,
                            url: Sp(Qp()),
                            T: Rp(Qp())
                        })
                    }
                } catch (p) {}
            }

            function e() {
                var f = {
                    source: null,
                    state: T("history").state || null,
                    url: Sp(Qp()),
                    T: Rp(Qp())
                };
                return function(g) {
                    var h = f,
                        l = {};
                    l[h.source] = !0;
                    l[g.source] = !0;
                    if (!l.popstate || !l.hashchange || h.T != g.T) {
                        var n = {
                            event: "gtm.historyChange",
                            "gtm.historyChangeSource": g.source,
                            "gtm.oldUrlFragment": f.T,
                            "gtm.newUrlFragment": g.T,
                            "gtm.oldHistoryState": f.state,
                            "gtm.newHistoryState": g.state,
                            "gtm.oldUrl": f.url,
                            "gtm.newUrl": g.url
                        };
                        f = g;
                        Up(n)
                    }
                }
            }(function(f) {
                Z.__hl = f;
                Z.__hl.g = "hl";
                Z.__hl.h = !0;
                Z.__hl.priorityOverride =
                    0
            })(function(f) {
                var g = T("self");
                if (!Zp("hl")) {
                    var h = e();
                    b(g, h);
                    c(g, h);
                    d("pushState", g, h);
                    d("replaceState", g, h);
                    $p("hl")
                }
                N(f.vtp_gtmOnSuccess)
            })
        }();
    Z.b.awct = ["google"],
        function() {
            var a = !1,
                b = [],
                c = function(g) {
                    var h = T("google_trackConversion"),
                        l = g.gtm_onFailure;
                    "function" == typeof h ? h(g) || l() : l()
                },
                d = function() {
                    for (; 0 < b.length;) c(b.shift())
                },
                e = function() {
                    return function() {
                        d();
                        a = !1
                    }
                },
                f = function() {
                    return function() {
                        d();
                        b = {
                            push: c
                        };
                    }
                };
            (function(g) {
                Z.__awct = g;
                Z.__awct.g = "awct";
                Z.__awct.h = !0;
                Z.__awct.priorityOverride =
                    0
            })(function(g) {
                function h(y, w, z) {
                    return "DATA_LAYER" === y ? Tp(z) : g[w]
                }

                function l() {
                    u("gdpr_consent", Vl());
                }

                function n() {}

                function p(y) {
                    var w = !0;
                    y && n();
                    w && b.push(q)
                }
                Yj();
                var q = {
                    google_basket_transaction_type: "purchase",
                    google_conversion_domain: "",
                    google_conversion_id: g.vtp_conversionId,
                    google_conversion_label: g.vtp_conversionLabel,
                    google_conversion_value: g.vtp_conversionValue || 0,
                    google_remarketing_only: !1,
                    onload_callback: g.vtp_gtmOnSuccess,
                    gtm_onFailure: g.vtp_gtmOnFailure,
                    google_gtm: sl()
                };
                g.vtp_rdp && (q.google_restricted_data_processing = !0);
                void 0 != Tp(H.N) && !1 !== Tp(H.N) && (q.google_gtm_url_processor = function(y) {
                    return y = wj(y)
                });
                var t = function(y) {
                        return function(w, z, A) {
                            var C = h(y, z, A);
                            C && (q[w] = C)
                        }
                    },
                    r = t("JSON");
                r("google_conversion_currency", "vtp_currencyCode");
                r("google_conversion_order_id", "vtp_orderId");
                g.vtp_enableProductReporting && (r = t(g.vtp_productReportingDataSource), r("google_conversion_merchant_id", "vtp_awMerchantId", "aw_merchant_id"), r("google_basket_feed_country", "vtp_awFeedCountry", "aw_feed_country"), r("google_basket_feed_language", "vtp_awFeedLanguage", "aw_feed_language"), r("google_basket_discount", "vtp_discount", "discount"), r("google_conversion_items", "vtp_items", "items"), q.google_conversion_items &&
                    q.google_conversion_items.map && (q.google_conversion_items = q.google_conversion_items.map(function(y) {
                        return {
                            value: y.price,
                            quantity: y.quantity,
                            item_id: y.id
                        }
                    })));
                var u = function(y, w) {
                        void 0 !== w && ((q.google_additional_conversion_params = q.google_additional_conversion_params || {})[y] = w)
                    },
                    v = function(y) {
                        return function(w, z, A, C) {
                            var D = h(y, z, A);
                            C(D) && u(w, D)
                        }
                    };
                (function() {})();
                g.vtp_transportUrl && (q.google_transport_url = g.vtp_transportUrl);
                var x = el(g.vtp_transportUrl, "/pagead/conversion_async.js");
                x || (x = -1 == navigator.userAgent.toLowerCase().indexOf("firefox") ? "//www.googleadservices.com/pagead/conversion_async.js" : "https://www.google.com/pagead/conversion_async.js");
                g.vtp_enableNewCustomerReporting && (r = v(g.vtp_newCustomerReportingDataSource), r("vdnc", "vtp_awNewCustomer", "new_customer", function(y) {
                    return void 0 != y && "" !== y
                }), r("vdltv", "vtp_awCustomerLTV", "customer_lifetime_value", function(y) {
                    return void 0 != y && "" !== y
                }));
                !g.hasOwnProperty("vtp_enableConversionLinker") || g.vtp_enableConversionLinker ? (g.vtp_conversionCookiePrefix && (q.google_gcl_cookie_prefix = g.vtp_conversionCookiePrefix), q.google_read_gcl_cookie_opt_out = !1) : q.google_read_gcl_cookie_opt_out = !0;
                "1" ===
                ri(!1)._up && u("gtm_up", "1");
                l();
                (function() {
                    jg() ? sg(function() {
                        l();
                        var y = qg(H.s),
                            w = !y && void 0 != Tp(H.N) && !1 !== Tp(H.N);
                        !g.vtp_transportUrl && w && (q.google_transport_url = "https://pagead2.googlesyndication.com/");
                        u("gcs", rg());
                        p(y);
                        y || mg(function() {
                            l();
                            q = E(q);
                            !g.vtp_transportUrl && q.google_transport_url && delete q.google_transport_url;
                            u("gcs", rg());
                            u("gcu", "1");
                            p(!0)
                        }, H.s)
                    }, [H.s]) : p(!0)
                })();
                a || (a = !0, S(x, f(), e(x)))
            })
        }();
    Z.b.remm = ["google"],
        function() {
            (function(a) {
                Z.__remm = a;
                Z.__remm.g = "remm";
                Z.__remm.h = !0;
                Z.__remm.priorityOverride = 0
            })(function(a) {
                for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", f = a.vtp_defaultValue, g = 0; g < c.length; g++) {
                    var h = c[g].key || "";
                    d && (h = "^" + h + "$");
                    var l = new RegExp(h, e);
                    if (l.test(b)) {
                        var n = c[g].value;
                        a.vtp_replaceAfterMatch && (n = String(b).replace(l, n));
                        f = n;
                        break
                    }
                }
                cq(f, "remm", a.vtp_gtmEventId);
                return f
            })
        }();
    Z.b.smm = ["google"],
        function() {
            (function(a) {
                Z.__smm = a;
                Z.__smm.g = "smm";
                Z.__smm.h = !0;
                Z.__smm.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_input,
                    c = Jq(a.vtp_map, "key", "value") || {},
                    d = c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
                cq(d, "smm", a.vtp_gtmEventId);
                return d
            })
        }();




    Z.b.hid = ["google"],
        function() {
            (function(a) {
                Z.__hid = a;
                Z.__hid.g = "hid";
                Z.__hid.h = !0;
                Z.__hid.priorityOverride = 0
            })(function() {
                return mp.ic
            })
        }();
    Z.b.zone = [],
        function() {
            function a(p) {
                for (var q = p.vtp_boundaries || [], t = 0; t < q.length; t++)
                    if (!q[t]) return !1;
                return !0
            }

            function b(p) {
                var q = Yd.C,
                    t = q + ":" + p.vtp_gtmTagId,
                    r = Tp("gtm.uniqueEventId") || 0,
                    u = Hj(function() {
                        return new g
                    }),
                    v = a(p),
                    x = p.vtp_enableTypeRestrictions ? p.vtp_whitelistedTypes.map(function(D) {
                        return D.typeId
                    }) : null;
                x = x && eb(x, f);
                if (u.registerZone(t, r, v, x))
                    for (var y = p.vtp_childContainers.map(function(D) {
                            return D.publicId
                        }), w = 0; w < y.length; w++) {
                        var z = String(y[w]);
                        if (u.registerChild(z, q, t)) {
                            var A =
                                0 !== z.indexOf("GTM-");
                            if (A) {
                                var C = function(D, F) {
                                    Up(arguments)
                                };
                                C("js", new Date);
                                n ? (C("config", z), l || aq(z, A)) : (O.addTargetToGroup(z), vn({}, z))
                            } else aq(z, A)
                        }
                    }
            }
            var c = {
                    active: !1,
                    isAllowed: function() {
                        return !1
                    },
                    Gh: function() {
                        return !1
                    }
                },
                d = {
                    active: !0,
                    isAllowed: function() {
                        return !0
                    },
                    Gh: function() {
                        return !0
                    }
                },
                e = {
                    zone: !0,
                    cn: !0,
                    css: !0,
                    ew: !0,
                    eq: !0,
                    ge: !0,
                    gt: !0,
                    lc: !0,
                    le: !0,
                    lt: !0,
                    re: !0,
                    sw: !0,
                    um: !0
                },
                f = {
                    cl: ["ecl"],
                    ecl: ["cl"],
                    ehl: ["hl"],
                    hl: ["ehl"]
                },
                g = function() {
                    this.a = {};
                    this.i = {}
                };
            g.prototype.checkState = function(p, q) {
                var t =
                    this.a[p];
                if (!t) return d;
                var r = this.checkState(t.tf, q);
                if (!r.active) return c;
                for (var u = [], v = 0; v < t.Vd.length; v++) {
                    var x = this.i[t.Vd[v]];
                    x.Lb(q) && u.push(x)
                }
                return u.length ? {
                    active: !0,
                    isAllowed: function(y, w) {
                        w = w || [];
                        var z = r.isAllowed;
                        if (!z(y, w)) return !1;
                        for (var A = 0; A < u.length; ++A)
                            if (u[A].isAllowed(y, w)) return !0;
                        return !1
                    }
                } : c
            };
            g.prototype.unregisterChild = function(p) {
                delete this.a[p]
            };
            g.prototype.registerZone = function(p, q, t, r) {
                var u = this.i[p];
                if (u) return u.m(q, t), !1;
                if (!t) return !1;
                this.i[p] = new h(q, r);
                return !0
            };
            g.prototype.registerChild = function(p, q, t) {
                var r = this.a[p];
                if (!r && O[p] || r && r.tf !== q) return !1;
                if (r) return r.Vd.push(t), !1;
                this.a[p] = {
                    tf: q,
                    Vd: [t]
                };
                return !0
            };
            var h = function(p, q) {
                this.a = [{
                    eventId: p,
                    Lb: !0
                }];
                this.i = null;
                if (q) {
                    this.i = {};
                    for (var t = 0; t < q.length; t++) this.i[q[t]] = !0
                }
            };
            h.prototype.m = function(p, q) {
                var t = this.a[this.a.length - 1];
                p <= t.eventId || t.Lb != q && this.a.push({
                    eventId: p,
                    Lb: q
                })
            };
            h.prototype.Lb = function(p) {
                if (!this.a || 0 == this.a.length) return !1;
                for (var q = this.a.length - 1; 0 <= q; q--)
                    if (this.a[q].eventId <=
                        p) return this.a[q].Lb;
                return !1
            };
            h.prototype.isAllowed = function(p, q) {
                q = q || [];
                if (!this.i || e[p] || this.i[p]) return !0;
                for (var t = 0; t < q.length; ++t)
                    if (this.i[q[t]]) return !0;
                return !1
            };
            var l = !1;
            var n = !0;
            n = !1;
            (function(p) {
                Z.__zone = p;
                Z.__zone.g = "zone";
                Z.__zone.h = !0;
                Z.__zone.priorityOverride = 0
            })(function(p) {
                b(p);
                N(p.vtp_gtmOnSuccess)
            })
        }();
    Z.b.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var h = e.shift(),
                                l = a(d, e, f, g);
                            if ("SCRIPT" == String(h.nodeName).toUpperCase() && "text/gtmscript" == h.type) {
                                var n = L.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = h.id;
                                n.text = h.text || h.textContent || h.innerHTML || "";
                                h.charset && (n.charset = h.charset);
                                var p = h.getAttribute("data-gtmsrc");
                                p && (n.src = p, Mf(n, l));
                                d.insertBefore(n, null);
                                p || l()
                            } else if (h.innerHTML && 0 <= h.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; h.firstChild;) q.push(h.removeChild(h.firstChild));
                                d.insertBefore(h, null);
                                a(h, q, l, g)()
                            } else d.insertBefore(h, null), l()
                        } else f()
                    } catch (t) {
                        N(g)
                    }
                }
            }
            var c = function(d) {
                if (L.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = dq(d.vtp_html, d.vtp_gtmOnSuccess,
                            e),
                        g = f.wd,
                        h = f.J;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? b(g, h, e) : a(L.body, Vf(g), h, e)()
                } else Op(function() {
                    c(d)
                }, 200)
            };
            Z.__html = c;
            Z.__html.g = "html";
            Z.__html.h = !0;
            Z.__html.priorityOverride = 0
        }();




    Z.b.img = ["customPixels"],
        function() {
            (function(a) {
                Z.__img = a;
                Z.__img.g = "img";
                Z.__img.h = !0;
                Z.__img.priorityOverride = 0
            })(function(a) {
                var b = Vf('<a href="' + a.vtp_url + '"></a>')[0].href,
                    c = a.vtp_cacheBusterQueryParam;
                if (a.vtp_useCacheBuster) {
                    c || (c = "gtmcb");
                    var d = b.charAt(b.length - 1),
                        e = 0 <= b.indexOf("?") ? "?" == d || "&" == d ? "" : "&" : "?";
                    b += e + c + "=" + a.vtp_randomNumber
                }
                Hq(b, a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure)
            })
        }();


    Z.b.lcl = [],
        function() {
            function a() {
                var c = T("document"),
                    d = 0,
                    e = function(f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.Ch || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = Wf(g, ["a", "area"], 100);
                            if (!g) return f.returnValue;
                            var h = f.defaultPrevented || !1 === f.returnValue,
                                l = tp("lcl", h ? "nv.mwt" : "mwt", 0),
                                n;
                            n = h ? tp("lcl", "nv.ids", []) : tp("lcl", "ids", []);
                            if (n.length) {
                                var p = pp(g, "gtm.linkClick", n);
                                if (b(f, g, c) && !h && l && g.href) {
                                    var q = String(bq(g, "rel") || ""),
                                        t = !!Oa(q.split(" "), function(v) {
                                            return "noreferrer" === v.toLowerCase()
                                        });
                                    t && I(36);
                                    var r = T((bq(g, "target") || "_self").substring(1)),
                                        u = !0;
                                    if (Up(p, gp(function() {
                                            var v;
                                            if (v = u && r) {
                                                var x;
                                                a: if (t) {
                                                    var y;
                                                    try {
                                                        y = new MouseEvent(f.type)
                                                    } catch (w) {
                                                        if (!c.createEvent) {
                                                            x = !1;
                                                            break a
                                                        }
                                                        y = c.createEvent("MouseEvents");
                                                        y.initEvent(f.type, !0, !0)
                                                    }
                                                    y.Ch = !0;
                                                    f.target.dispatchEvent(y);
                                                    x = !0
                                                } else x = !1;
                                                v = !x
                                            }
                                            v && (r.location.href = bq(g, "href"))
                                        }), l)) u = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else Up(p, function() {}, l || 2E3);
                                return !0
                            }
                        }
                    };
                Rf(c, "click", e, !1);
                Rf(c, "auxclick", e, !1)
            }

            function b(c,
                d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var f = bq(d, "href"),
                    g = f.indexOf("#"),
                    h = bq(d, "target");
                if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1;
                if (0 < g) {
                    var l = Sp(f),
                        n = Sp(e.location);
                    return l !== n
                }
                return !0
            }(function(c) {
                Z.__lcl = c;
                Z.__lcl.g = "lcl";
                Z.__lcl.h = !0;
                Z.__lcl.priorityOverride = 0
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var h = function(n) {
                        return Math.max(f, n)
                    };
                    sp("lcl", "mwt", h, 0);
                    e || sp("lcl", "nv.mwt", h, 0)
                }
                var l = function(n) {
                    n.push(g);
                    return n
                };
                sp("lcl", "ids", l, []);
                e || sp("lcl", "nv.ids", l, []);
                Zp("lcl") || (a(), $p("lcl"));
                N(c.vtp_gtmOnSuccess)
            })
        }();



    Z.b.csm = ["nonGoogleScripts"],
        function() {
            (function(a) {
                Z.__csm = a;
                Z.__csm.g = "csm";
                Z.__csm.h = !0;
                Z.__csm.priorityOverride = 0
            })(function(a) {
                var b = T("document");
                Hq(function(d) {
                    if (2048 < d.length) {
                        var e = d.substring(0, 2040).lastIndexOf("&");
                        d = d.substring(0, e) + "&ns_cut=" + W(d.substring(e + 1));
                        d = d.substring(0, 2048)
                    }
                    return d
                }(function(d, e) {
                    var f = Pp(),
                        g = (e || "").split("&");
                    e = "";
                    for (var h = 0; h < g.length; h++)
                        if (g[h]) {
                            var l = g[h].match(/([^=]*)=?(.*)/);
                            e += "&" + W(l[1]) + "=" + W(l[2])
                        }
                    return ij("https://sb", "http://b", ".scorecardresearch.com/b?c1=2&c2=" +
                        W(d) + "&ns__t=" + f.valueOf() + "&ns_c=" + (b.characterSet || b.Oi || "") + "&c8=" + W(b.title || "") + e + "&c7=" + W(b.URL) + "&c9=" + W(b.referrer))
                }(a.vtp_clientId, function() {
                    var d = "",
                        e = b.cookie;
                    if (0 <= e.indexOf("comScore"))
                        for (var f = e.split(";"), g = 0; g < f.length; g++) {
                            var h = f[g].indexOf("comScore");
                            0 <= h && (d = unescape(f[g].substring(h + 8)))
                        }
                    return d
                }())));
                var c = function() {
                    var d = ij("https://sb", "http://b", ".scorecardresearch.com/c2/" + W(a.vtp_clientId) + "/cs.js");
                    S(d, a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure)
                };
                "complete" === b.readyState ?
                    c() : Rf(T("self"), "load", c)
            })
        }();
    var $s = {};
    $s.macro = function(a) {
        if (mp.jd.hasOwnProperty(a)) return mp.jd[a]
    }, $s.onHtmlSuccess = mp.ef(!0), $s.onHtmlFailure = mp.ef(!1);
    $s.dataLayer = dh;
    $s.callback = function(a) {
        Vg.hasOwnProperty(a) && Ja(Vg[a]) && Vg[a]();
        delete Vg[a]
    };
    $s.bootstrap = 0;
    $s._spx = !1;

    function at() {
        O[Yd.C] = $s;
        cb(Wg, Z.b);
        Bd = Bd || mp;
        Cd = Ud
    }

    function bt() {
        Zf.gtm_3pds = !0;
        Zf.gtag_cs_api = !0;
        O = B.google_tag_manager = B.google_tag_manager || {};
        Tl();
        if (O[Yd.C]) {
            var a = O.zones;
            a && a.unregisterChild(Yd.C);
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d =
                    0; d < c.length; d++) ud.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++) xd.push(e[f]);
            for (var g = b.predicates || [], h = 0; h < g.length; h++) wd.push(g[h]);
            for (var l = b.rules || [], n = 0; n < l.length; n++) {
                for (var p = l[n], q = {}, t = 0; t < p.length; t++) q[p[t][0]] = Array.prototype.slice.call(p[t], 1);
                vd.push(q)
            }
            zd = Z;
            Ad = Dq;
            var r = data.permissions || {},
                u = data.sandboxed_scripts,
                v = data.security_groups;
            wo();
            be = new ae(r);
            if (void 0 !== u)
                for (var x = ["sandboxedScripts"], y = 0; y < u.length; y++) {
                    var w = u[y].replace(/^_*/, "");
                    Wg[w] = x
                }
            zo(v);
            at();
            lp();
            Kj = !1;
            Lj = 0;
            if ("interactive" == L.readyState && !L.createEventObject || "complete" == L.readyState) Nj();
            else {
                Rf(L, "DOMContentLoaded", Nj);
                Rf(L, "readystatechange", Nj);
                if (L.createEventObject && L.documentElement.doScroll) {
                    var z = !0;
                    try {
                        z = !B.frameElement
                    } catch (M) {}
                    z && Oj()
                }
                Rf(B, "load", Nj)
            }
            Mn = !1;
            "complete" === L.readyState ? On() : Rf(B, "load", On);
            a: {
                if (!Ik) break a;B.setInterval(Jk, 864E5);
            }
            Tg = (new Date).getTime();
        }
    }
    (function(a) {
        var e = !0;
        e = !1;
        if (e) {
            a();
            return
        }
        var f = function() {
                var n = B["google.tagmanager.debugui2.queue"];
                n || (n = [], B["google.tagmanager.debugui2.queue"] = n, Nf("https://www.googletagmanager.com/debug/bootstrap"));
                return n
            },
            g = "x" === rh(B.location, "query", !1, void 0, "gtm_debug");
        if (!g && L.referrer) {
            var h = th(L.referrer);
            g = "tagassistant.google.com" === qh(h, "host")
        }
        if (!g) {
            var l = xh("__TAG_ASSISTANT");
            g = l.length && l[0].length
        }
        B.__TAG_ASSISTANT_API && (g = !0);
        if (g && Kf) {
            f().push({
                messageType: "CONTAINER_STARTING",
                data: {
                    scriptSource: Kf,
                    resume: function() {
                        a()
                    }
                }
            });
            return
        }
        a()
    })(bt);

})()