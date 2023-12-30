! function(c, g) {
    "use strict";

    function t(i) {
        var n = this;
        i.on("afterOpen", function() {
            n.track("open")
        }).on("afterClose", function() {
            n.track("close")
        }), (i.GATracker = this).track = function(n) {
            var t = i.options.ga_tracking_event_category,
                a = i.options.ga_tracking_event_label;
            this.gaLoad("event", "send", {
                event_category: t,
                event_action: n,
                event_label: a,
                event_callback: function() {
                    i.log("Google Analytics Event Tracked. Action: " + n + ", Category: " + t + ", Label: " + a)
                },
                send_to: i.options.ga_tracking_id
            })
        }, this.gaLoad = function(n, t, a) {
            if (void 0 !== o && void 0 !== c.dataLayer) return o("config", i.options.ga_tracking_id), void o(n, t, a);
            var e = g.createElement("script");

            function o() {
                dataLayer.push(arguments)
            }
            e.async = !0, e.src = "https://www.googletagmanager.com/gtag/js?id=" + i.options.ga_tracking_id, g.getElementsByTagName("head")[0].appendChild(e), c.dataLayer = c.dataLayer || [], o("js", new Date), o("config", i.options.ga_tracking_id), o(n, t, a)
        }
    }
    EngageBox && EngageBox.onReady(function() {
        EngageBox.getInstances().forEach(function(n) {
            n.options.ga_tracking && n.options.ga_tracking_id && new t(n)
        })
    })
}(window, document);