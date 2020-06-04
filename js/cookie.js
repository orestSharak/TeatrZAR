(function ($) {


    var monster = {
        set: function (e, t, n, r) {
            var i = new Date, s = "", o = typeof t, u = "";
            r = r || "/", n && (i.setTime(i.getTime() + n * 24 * 60 * 60 * 1e3), s = "; expires=" + i.toGMTString());
            if (o === "object" && o !== "undefined") {
                if (!("JSON" in window)) throw"Bummer, your browser doesn't support JSON parsing.";
                u = JSON.stringify({v: t})
            } else u = escape(t);
            document.cookie = e + "=" + u + s + "; path=" + r
        }, get: function (e) {
            var t = e + "=", n = document.cookie.split(";"), r = "", i = "", s = {};
            for (var o = 0; o < n.length; o++) {
                var u = n[o];
                while (u.charAt(0) == " ") u = u.substring(1, u.length);
                if (u.indexOf(t) === 0) {
                    r = u.substring(t.length, u.length), i = r.substring(0, 1);
                    if (i == "{") {
                        s = JSON.parse(r);
                        if ("v" in s) return s.v
                    }
                    return r == "undefined" ? undefined : unescape(r)
                }
            }
            return null
        }, remove: function (e) {
            this.set(e, "", -1)
        }, increment: function (e, t) {
            var n = this.get(e) || 0;
            this.set(e, parseInt(n, 10) + 1, t)
        }, decrement: function (e, t) {
            var n = this.get(e) || 0;
            this.set(e, parseInt(n, 10) - 1, t)
        }
    };

    if (monster.get('cookie-block') === 'true') {
        return false;
    }


    var cookie = [
        ' <div id="cookie-block" class="col-10 col-sm-6 col-md-6 col-lg-4 cookie-block" data-aos="fade" data-aos-delay="2000">\n' +
        '        <div class="card shadow pb-4">\n' +
        '            <div class="card-img-audio cookie-img"></div>\n' +
        '            <div class="px-5 text-muted text-center">\n' +
        '                <h4 class="mb-3 font-weight-bold text-primary">Cookies!</h4>\n' +
        '                <p>By using our site you agree to our use of cookies to deliver a better site experience.</p>\n' +
        '                <a href="#" class="btn btn-outline-primary my-2 my-sm-5  text-center cookie-btn ">I like cookies</a>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>'
    ];

/*
*   Używamy informacji zapisanych za pomocą plików cookies w celu zapewnienia maksymalnej wygody w korzystaniu z naszego serwisu. Lubie cookies
*
* */
    $('.sticky-wrap').append(cookie);


    $('.cookie-btn').on('click', function (e) {
        e.preventDefault();
        $('.cookie-block').remove();
    });

    monster.set('cookie-block', 'true', 365);
    return true;

})(jQuery);




