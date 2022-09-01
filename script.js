
$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
ft = document.location.hash.includes("fps") ? $("pre") : null;
window.onload = function () {
    var w,
        h,
        c,
        cvs = $("canvas");

    r = Math.random;

    function cvs_s() {
        rezise();
    }

    function rezise() {
        w = cvs.width = window.innerWidth;
        h = cvs.height = window.innerHeight;
        c.fillStyle = "#BB00FF23";

        MAX_ps = w * 2;

        ps = []
    }

    window.onresize = cvs_s;
    c = cvs.getContext("2d");
    cvs_s();
    ps = [];

    MAX_ps = w * 1.5;
    INITIAL_V = h/30;

    function rndr() {
        s = performance.now();
        c.clearRect(0, 0, w, h);
        if (ps.length < MAX_ps - 10) {
            for (var i = 0; i < 10; i++) {
                ps.push({
                    y: Math.floor(r() * h),
                    x: -10,
                    dy: 0,
                    dx: INITIAL_V,
                    s: r() * 10 ,
                });
            }
        }

        for (var i = 0; i < ps.length; i++) {
            var p = ps[i];
            p.x += (p.dx * (1 / p.s));
            p.y += p.dy;
            if (ps[i].x > w || ps[i].y + ps[i].dy > h) {
                if (p.dx > 8) {
                    p.x = -1
                } else {
                    ps.splice(i, 1);
                    continue;
                }
            }
            c.fillRect(p.x, p.y, p.s, p.s);
        }
        requestAnimationFrame(rndr);
    }


    if (!(window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
        rndr();
    }
};