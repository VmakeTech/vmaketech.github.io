! function(t) {
    t.RegisterEffect("rstbox.slideUpIn", {
        defaultDuration: 450,
        calls: [
            [{
                translateY: "100%",
                opacity: 1
            }, .05],
            [{
                translateY: 0
            }, .95]
        ]
    }), t.RegisterEffect("rstbox.slideUpOut", {
        defaultDuration: 450,
        calls: [
            [{
                translateY: "100%"
            }, .95],
            [{
                opacity: 0
            }, .05]
        ]
    }), t.RegisterEffect("rstbox.slideDownIn", {
        defaultDuration: 450,
        calls: [
            [{
                translateY: "-100%",
                opacity: 1
            }, .05],
            [{
                translateY: 0
            }, .95]
        ]
    }), t.RegisterEffect("rstbox.slideDownOut", {
        defaultDuration: 450,
        calls: [
            [{
                translateY: "-100%"
            }, .95],
            [{
                opacity: 0
            }, .05]
        ]
    }), t.RegisterEffect("rstbox.slideLeftIn", {
        defaultDuration: 450,
        calls: [
            [{
                translateX: "-100%",
                opacity: 1
            }, .05],
            [{
                translateX: 0
            }, .95]
        ]
    }), t.RegisterEffect("rstbox.slideLeftOut", {
        defaultDuration: 450,
        calls: [
            [{
                translateX: "-100%"
            }, .95],
            [{
                opacity: 0
            }, .05]
        ]
    }), t.RegisterEffect("rstbox.slideRightIn", {
        defaultDuration: 450,
        calls: [
            [{
                translateX: "100%",
                opacity: 1
            }, .05],
            [{
                translateX: 0
            }, .95]
        ]
    }), t.RegisterEffect("rstbox.slideRightOut", {
        defaultDuration: 450,
        calls: [
            [{
                translateX: "100%"
            }, .95],
            [{
                opacity: 0
            }, .05]
        ]
    })
}((window.jQuery || window).Velocity);