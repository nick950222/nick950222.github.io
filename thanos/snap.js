try {
    var s_GIf = function(a) {
        return a.He.$ ? a.He.$ : a.He.$ = new s_5f(a)
    };
    s_A("zfndQe");
    var s__Mf = function(a, b) {
        this.wa = new Image;
        this.wa.crossOrigin = "Anonymous";
        this.wa.src = "https://www.google.com/logos/fnbx/thanos/thanos_snap.png";
        this.Ha = !1;
        s_s(this.wa, "load", function() {
            this.Ha = !0
        }
        .bind(this));
        this.Da = new Image;
        this.Da.crossOrigin = "Anonymous";
        this.Da.src = "https://www.google.com/logos/fnbx/thanos/thanos_time.png";
        this.Ga = !1;
        s_s(this.wa, "load", function() {
            this.Ga = !0
        }
        .bind(this));
        this.Ia = a;
        this.Fa = !1;
        this.Ca = b.getContext("2d");
        this.$ = b.width;
        this.Ba = this.Aa = 0
    };
    s__Mf.prototype.Lz = function(a) {
        if (0 !== this.Aa) {
            a = Math.floor(48 * (1 - (this.Ba - a) / 2E3));
            if (48 <= a)
                this.Ba = this.Aa = 0;
            else {
                var b = 1 === this.Aa ? this.wa : this.Da;
                this.Ca.clearRect(0, 0, this.$, this.$);
                this.Ca.drawImage(b, 80 * a, 0, 80, 80, 0, 0, this.$, this.$)
            }
            this.Fa || (this.Fa = !0,
            s_t(this.Ia, "display", "none"))
        } else
            this.Ca.clearRect(0, 0, this.$, this.$),
            this.Ca.drawImage(this.wa, 0, 0, 80, 80, 0, 0, this.$, this.$),
            s_vu(this)
    }
    ;
    var s_0Mf = function(a) {
        a.Aa = 1;
        a.Ba = (new Date).getTime() + 2E3;
        s_uu(a)
    }
      , s_1Mf = function(a) {
        a.Aa = 2;
        a.Ba = (new Date).getTime() + 2E3;
        s_uu(a)
    }
      , s_2Mf = function(a) {
        return a.Ha && a.Ga
    };
    var s_HIf = function() {
        var a = s_l("resultStats");
        if (null === a)
            return null;
        for (var b = void 0, c = [], d = [], e = s_c(a.innerHTML.replace(/<(.*?)>/g, "").replace(/&(.*?);/g, "").split(" ")), f = e.next(); !f.done; f = e.next())
            f = f.value,
            isNaN(f[0]) || void 0 !== b ? void 0 === b ? c.push(f) : d.push(f) : b = f;
        if (void 0 === b)
            return null;
        f = e = "";
        for (var g = 0; g < b.length; g++) {
            var h = b[g];
            isNaN(parseInt(h, 10)) ? f = h : e += h
        }
        return {
            element: a,
            prefix: c.join(" "),
            E8b: parseInt(e, 10),
            jGa: parseInt(e, 10),
            suffix: d.join(" "),
            D9b: f
        }
    };
    var s_Jwf = [[".g"], [".c"], ["g-section-with-header"], [".vk_c"], [".mnr-c"]]
      , s_Lwf = [["#botstuff"], [".wp-ms", "PARENT"], [".mnr-c"]]
      , s_IMf = function() {
        for (var a = s_k.Fp ? s_l("gsr") : s_l("rcnt"), b = new Set, c = s_c(s_k.Fp ? s_Lwf : s_Jwf), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = Array.prototype.slice.call(a.querySelectorAll(d[0]), 0);
            e = s_c(e);
            for (var f = e.next(); !f.done; f = e.next())
                f = f.value,
                2 === d.length && "PARENT" === d[1] ? (f = f.parentElement,
                null !== f && b.add(f)) : b.add(f)
        }
        a = Array.from(b);
        b = [];
        for (c = 0; c < a.length; c++) {
            d = a[c];
            e = !0;
            f = d.getBoundingClientRect();
            if (s_HMf(d) || 0 === f.width || 0 === f.height)
                e = !1;
            if (e)
                for (f = 0; f < a.length; f++)
                    if (c !== f && s_sd(a[f], d)) {
                        e = !1;
                        break
                    }
            e && b.push(d)
        }
        return b
    }
      , s_HMf = function(a) {
        do {
            if (s_P(a, "wpt-hidden"))
                return !0;
            if (a.id.includes("kp-wp-tab"))
                break;
            a = a.parentElement
        } while (null !== a);return !1
    };
    var s_iLd = void 0 !== window.html2canvas
      , s_gX = s_iLd ? 1.5 : 1.75
      , s_LIf = function(a) {
        s_U.call(this, a.Wa);
        this.Za = this.La("fhaEZe").el();
        this.wa = this.Oa().el();
        this.Ka = s_9h(this.wa);
        this.Ia = this.La("wvK4k").el();
        this.Ia.width = this.Ka.width;
        this.Ia.height = this.Ka.height;
        s_ce(this.Ia, this.Ka.width, this.Ka.height);
        this.Na = new s__Mf(this.Za,this.Ia);
        this.hb = this.getData("osrp").$(!1);
        this.Aa = !1;
        a = s_Sb() ? "touchend" : "click";
        s_GIf(this).listen(this.wa, a, this.rb.bind(this));
        this.Ga = window.AudioContext ? new window.AudioContext : window.webkitAudioContext ? new window.webkitAudioContext : null;
        this.Qa = {};
        null !== this.Ga && (s_KIf(this, "https://www.google.com/logos/fnbx/thanos/thanos_snap_sound.mp3"),
        s_KIf(this, "https://www.google.com/logos/fnbx/thanos/thanos_dust_1.mp3"));
        this.Va = !1;
        this.Ca = this.Fa = 0;
        this.Xa = s_Myf(this);
        this.Ha = [];
        this.Da = [];
        this.Ra = this.Ba = -1;
        this.$ = s_HIf();
        s_uu(this)
    };
    s_f(s_LIf, s_U);
    s_LIf.Pa = s_U.Pa;
    var s_Myf = function(a) {
        return s_IMf().filter(function(b) {
            return !s_sd(b, this.wa)
        }
        .bind(a))
    }
      , s_1If = function(a) {
        a = a.Xa.slice(0);
        for (var b = a.length; 0 < b; b--) {
            var c = a.splice(Math.floor(Math.random() * b), 1)[0];
            a.push(c)
        }
        return a
    };
    s_LIf.prototype.rb = function(a) {
        this.Va || (this.Va = !0,
        s_KIf(this, "https://www.google.com/logos/fnbx/thanos/thanos_dust_2.mp3"),
        s_KIf(this, "https://www.google.com/logos/fnbx/thanos/thanos_dust_3.mp3"),
        s_KIf(this, "https://www.google.com/logos/fnbx/thanos/thanos_dust_4.mp3"),
        s_KIf(this, "https://www.google.com/logos/fnbx/thanos/thanos_dust_5.mp3"),
        s_KIf(this, "https://www.google.com/logos/fnbx/thanos/thanos_dust_6.mp3"),
        s_KIf(this, "https://www.google.com/logos/fnbx/thanos/thanos_reverse_sound.mp3"));
        if (0 === this.Ca && s_2Mf(this.Na)) {
            if (this.Aa) {
                for (var b = !0, c = s_c(this.Da), d = c.next(); !d.done; d = c.next())
                    if (!s_HMf(d.value)) {
                        b = !1;
                        break
                    }
                if (b) {
                    b = s_c(this.Da);
                    for (d = b.next(); !d.done; d = b.next())
                        d = d.value,
                        s_Fm(d, ""),
                        s_t(d, "visibility", "visible"),
                        s_t(d, "opacity", 1);
                    this.Da = [];
                    this.Aa = !1
                }
            }
            if (this.Aa)
                s_b(this.wa, {
                    interactionContext: 1
                }),
                this.Ca = 2,
                s_MIf(this, "https://www.google.com/logos/fnbx/thanos/thanos_reverse_sound.mp3"),
                s_1Mf(this.Na),
                s_C(function() {
                    for (var e = s_c(this.Da), f = e.next(); !f.done; f = e.next())
                        f = f.value,
                        s_t(f, "visibility", "visible"),
                        s_Fm(f, "opacity 1.5s ease"),
                        s_t(f, "opacity", 1),
                        s_Ryf(this, s_md(f));
                    null !== this.$ && s_Oyf(this, this.$.element, 1500);
                    this.Da = [];
                    this.Aa = !1
                }
                .bind(this), 562.5),
                s_C(function() {
                    this.Ca = 0
                }
                .bind(this), 2250);
            else {
                s_b(this.wa, {
                    interactionContext: 0
                });
                this.Xa = s_Myf(this);
                this.Ca = 1;
                s_MIf(this, "https://www.google.com/logos/fnbx/thanos/thanos_snap_sound.mp3");
                s_0Mf(this.Na);
                d = s_1If(this);
                for (b = 0; b < d.length / 2; b++)
                    this.Ha.push(d[b]);
                s_C(this.Ma.bind(this), 2250)
            }
            a.preventDefault();
            a.stopPropagation()
        }
    }
    ;
    s_LIf.prototype.Ma = function() {
        if (0 === this.Ha.length) {
            var a = s_k.Fp && !this.hb ? s_eGe(this.wa) + s_$c().height / 4 : 0;
            window.scrollTo(0, a);
            this.Aa = !0;
            this.Ca = 0;
            this.Ba = -1
        } else
            a = this.Ha[0],
            s_HMf(a) ? (this.Ha = [],
            this.Ma()) : (this.Ba = s_eGe(a),
            window.scrollTo(0, this.Ba),
            this.Ra = s_C(this.Ta.bind(this), 3E3))
    }
    ;
    var s_eGe = function(a) {
        a = s_8d(a).y - s_$c().height / 2 + a.getBoundingClientRect().height / 2;
        return a > s_4h() - s_$c().height ? s_4h() - s_$c().height : 0 > a ? 0 : a
    }
      , s_kLd = function(a, b) {
        s_iLd ? window.html2canvas(b, {
            Ax: !1,
            k7b: !0,
            g7b: function(c) {
                c = c.tagName.toLowerCase();
                return s_k.product.qK && "none" !== s_1d(b, "background-image") ? !0 : "iframe" === c || "svg" === c
            },
            width: b.getBoundingClientRect().width + 100,
            x: s_8d(b).x - 50
        }).then(function(c) {
            s_MIf(a, s_3Mf(a));
            s_C(a.Ma.bind(a), 2150);
            var d = c.width
              , e = c.height
              , f = c.getContext("2d");
            try {
                var g = f.getImageData(0, 0, d, e)
            } catch (q) {
                c = s_gX + 1.35;
                s_Fm(b, "opacity " + c + "s ease");
                s_t(b, "opacity", 0);
                s_C(function() {
                    s_t(b, "visibility", "hidden")
                }, 1E3 * c);
                return
            }
            s_Fm(b, "opacity " + s_gX + "s ease");
            s_t(b, "opacity", 0);
            s_C(function() {
                s_t(b, "visibility", "hidden")
            }, 1E3 * s_gX);
            s_ie(c, !0);
            s_t(c, "position", "absolute");
            s_t(c, "pointerEvents", "none");
            if (s_he(b)) {
                var h = parseInt(s_1d(b, "margin-right"), 10)
                  , k = "relative" === s_1d(b, "position") ? parseInt(s_1d(b, "right"), 10) : 0;
                s_t(c, "margin-right", -35 + (0 > h ? h : 0) + (0 > k ? k : 0) + "px");
                s_t(c, "margin-top", "-1px")
            } else
                h = parseInt(s_1d(b, "margin-left"), 10),
                k = "relative" === s_1d(b, "position") ? parseInt(s_1d(b, "left"), 10) : 0,
                s_t(c, "margin-left", -50 + (0 > h ? h : 0) + (0 > k ? k : 0) + "px");
            s_Fm(c, "transform " + s_gX + "s ease-out, opacity " + s_gX + "s ease-out");
            h = [];
            for (k = 0; 32 > k; ++k)
                h.push(f.createImageData(d, e));
            for (f = 0; f < d; ++f)
                for (k = 0; k < e; ++k)
                    for (var l = 0; 2 > l; ++l)
                        for (var m = Math.floor(32 * (Math.random() + 2 * f / d) / 3), n = 4 * (k * d + f), p = 0; 4 > p; ++p)
                            h[m].data[n + p] = g.data[n + p];
            d = {};
            for (e = 0; 32 > e; d = {
                D0: d.D0
            },
            ++e)
                d.D0 = c.cloneNode(!0),
                d.D0.getContext("2d").putImageData(h[e], 0, 0),
                s_t(d.D0, "transitionDelay", 1.35 * e / 32 + "s"),
                s_hd(d.D0, b),
                s_C(function(q) {
                    return function() {
                        var r = 2 * Math.PI * (Math.random() - .5);
                        s_t(q.D0, "transform", "rotate(" + 15 * (Math.random() - .5) + "deg) translate(" + 60 * Math.cos(r) + "px, " + 30 * Math.sin(r) + "px)\n                  rotate(" + 15 * (Math.random() - .5) + "deg)");
                        s_t(q.D0, "opacity", 0);
                        s_C(function() {
                            s_kd(q.D0)
                        }, 1E3 * (s_gX + 1 + Math.random()))
                    }
                }(d), 0)
        }) : (s_Fm(b, "opacity " + s_gX + "s ease"),
        s_t(b, "opacity", 0),
        s_C(function() {
            s_t(b, "visibility", "hidden")
        }, 1E3 * s_gX),
        s_jLd(b, !1),
        s_jLd(b, !0),
        s_MIf(a, s_3Mf(a)),
        s_C(a.Ma.bind(a), 2150))
    }
      , s_jLd = function(a, b) {
        var c = a.cloneNode(!0);
        s_ie(c, !0);
        s_t(c, "position", "absolute");
        s_5d(c, a.offsetLeft, a.offsetTop);
        s_ce(c, a.offsetWidth, a.offsetHeight);
        s_t(c, "opacity", 1);
        s_t(c, "margin", "0px");
        s_Fm(c, "opacity " + s_gX + "s ease, margin-left " + s_gX + "s ease");
        s_id(c, a);
        s_C(function() {
            s_t(c, "opacity", 0);
            s_t(c, "margin-left", 30 * (b ? 1 : -1) + "px")
        }, 0);
        s_C(function() {
            s_kd(c)
        }, 1E3 * s_gX)
    }
      , s_Ryf = function(a, b) {
        if (0 !== b.length) {
            b = s_c(b);
            for (var c = b.next(); !c.done; c = b.next())
                c = c.value,
                s_Ryf(a, s_md(c)),
                s_Oyf(a, c, 750)
        }
    }
      , s_Oyf = function(a, b, c) {
        var d = s_0d(b, "color")
          , e = s_1d(b, "color");
        s_t(b, "color", "green");
        c += 250 * Math.random();
        s_C(function(f, g) {
            s_Fm(f, "color 5s ease");
            s_t(f, "color", g)
        }
        .bind(a, b, e), c);
        s_C(function(f, g) {
            s_Fm(f, "");
            s_t(f, "color", g)
        }
        .bind(a, b, d), 5E3 + c)
    }
      , s_3Mf = function(a) {
        switch (a.Fa) {
        default:
        case 0:
            var b = "https://www.google.com/logos/fnbx/thanos/thanos_dust_1.mp3";
            break;
        case 1:
            b = "https://www.google.com/logos/fnbx/thanos/thanos_dust_2.mp3";
            break;
        case 2:
            b = "https://www.google.com/logos/fnbx/thanos/thanos_dust_3.mp3";
            break;
        case 3:
            b = "https://www.google.com/logos/fnbx/thanos/thanos_dust_4.mp3";
            break;
        case 4:
            b = "https://www.google.com/logos/fnbx/thanos/thanos_dust_5.mp3";
            break;
        case 5:
            b = "https://www.google.com/logos/fnbx/thanos/thanos_dust_6.mp3"
        }
        a.Fa += 1;
        6 === a.Fa && (a.Fa = 0);
        return b
    };
    s_LIf.prototype.Lz = function() {
        if (null !== this.$ && 1 !== this.Ca) {
            var a = this.Aa ? Math.round(this.$.E8b / 2) : this.$.E8b;
            if (this.$.jGa !== a) {
                var b = Math.round((a - this.$.jGa) / (a > this.$.jGa ? 10 : 15));
                this.$.jGa = 100 > Math.abs(b) ? a : this.$.jGa + b;
                a = this.$.D9b;
                b = this.$.jGa.toString();
                if ("" === a)
                    a = b;
                else {
                    for (var c = "", d = b.length - 1; 0 <= d; d--)
                        c = b[d] + c,
                        0 !== d && 0 == (b.length - d) % 3 && (c = a + c);
                    a = c
                }
                a = s_Utf(this.$.prefix + " " + a + " " + this.$.suffix);
                s_8ca(this.$.element, a)
            }
        }
        0 <= this.Ba && 150 >= Math.abs(s_bd().y - this.Ba) && this.Ta()
    }
    ;
    s_LIf.prototype.Ta = function() {
        s_aG(this.Ra);
        this.Ba = this.Ra = -1;
        var a = this.Ha.shift();
        this.Da.push(a);
        s_kLd(this, a)
    }
    ;
    var s_MIf = function(a, b) {
        if (null === a.Ga)
            s_NIf(a, b).play();
        else if (a.Qa[b]) {
            var c = a.Ga.createBufferSource();
            c.buffer = a.Qa[b];
            c.connect(a.Ga.destination);
            (window.AudioContext || window.webkitAudioContext) && c.start(0)
        }
    }
      , s_NIf = function(a, b) {
        var c = s_ed("AUDIO");
        s_mhe(c, b);
        a.wa.appendChild(c);
        s_GIf(a).Xk(c, "ended", function() {
            this.wa.removeChild(c)
        }
        .bind(a));
        return c
    }
      , s_KIf = function(a, b) {
        var c = new s_Xf;
        c.kK("arraybuffer");
        var d = function(e) {
            e = e.target;
            if (!e.isSuccess())
                throw Error("cd");
            e = e.getResponse();
            this.Ga.decodeAudioData(e, function(f) {
                this.Qa[b] = f
            }
            .bind(this))
        }
        .bind(a);
        s_GIf(a).Xk(c, "complete", d);
        c.send(b, "GET")
    };
    s_V1a(s_r2a, s_LIf);

    s_ja().$();
} catch (e) {
    _DumpException(e)
}