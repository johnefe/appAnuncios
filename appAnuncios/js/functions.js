// js obfuscated
(function(_0x7e6cx1) {
    'use strict';
    _0x7e6cx1(window)['on']('load', function() {
        'use strict';
        _0x7e6cx1('[data-loader="circle-side"]')['fadeOut']();
        _0x7e6cx1('#preloader')['delay'](350)['fadeOut']('slow');
        var _0x7e6cx2 = _0x7e6cx1('.hero_home .content');
        var _0x7e6cx3 = _0x7e6cx1('#hero_video .content ');
        _0x7e6cx2['find']('h3, p, form')['addClass']('fadeInUp animated');
        _0x7e6cx2['find']('.btn_1')['addClass']('fadeIn animated');
        _0x7e6cx3['find']('.h3, p, form')['addClass']('fadeInUp animated');
        _0x7e6cx1(window)['scroll']()
    });
    var _0x7e6cx4 = _0x7e6cx1('.header_sticky');
    var _0x7e6cx5 = _0x7e6cx1('#toTop');
    _0x7e6cx1(window)['on']('scroll', function() {
        if (_0x7e6cx1(this)['scrollTop']() > 1) {
            _0x7e6cx4['addClass']('sticky')
        } else {
            _0x7e6cx4['removeClass']('sticky')
        };
        if (_0x7e6cx1(this)['scrollTop']() != 0) {
            _0x7e6cx5['fadeIn']()
        } else {
            _0x7e6cx5['fadeOut']()
        }
    });
    _0x7e6cx5['on']('click', function() {
        _0x7e6cx1('body,html')['animate']({
            scrollTop: 0
        }, 500)
    });
    _0x7e6cx1('.selectbox')['selectbox']();
    _0x7e6cx1('#results')['stick_in_parent']({
        offset_top: 0
    });
    _0x7e6cx1('#sidebar')['theiaStickySidebar']({
        additionalMarginTop: 95
    });
    var _0x7e6cx6 = _0x7e6cx1('nav#menu')['mmenu']({
        "\x65\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73": ['pagedim-black'],
        counters: false,
        keyboardNavigation: {
            enable: true,
            enhance: true
        },
        navbar: {
            title: 'MENU'
        },
        navbars: [{
            position: 'bottom',
            content: ['<a href="#0">\xA9 2017 Findoctor</a>']
        }]
    }, {
        clone: true
    });
    var _0x7e6cx7 = _0x7e6cx1('#hamburger');
    var _0x7e6cx8 = _0x7e6cx6['data']('mmenu');
    _0x7e6cx7['on']('click', function() {
        _0x7e6cx8['open']()
    });
    _0x7e6cx8['bind']('open:finish', function() {
        setTimeout(function() {
            _0x7e6cx7['addClass']('is-active')
        }, 100)
    });
    _0x7e6cx8['bind']('close:finish', function() {
        setTimeout(function() {
            _0x7e6cx7['removeClass']('is-active')
        }, 100)
    });
    var _0x7e6cx9 = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(_0x7e6cxa) {},
        scrollContainer: null
    });
    _0x7e6cx9['init']();
    _0x7e6cx1('#reccomended')['owlCarousel']({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    _0x7e6cx1('[data-toggle="tooltip"]')['tooltip']();
    _0x7e6cx1('#booking_date')['dateDropper']();
    _0x7e6cx1('#booking_time')['timeDropper']({
        setCurrentTime: false,
        meridians: true,
        primaryColor: '#e74e84',
        borderColor: '#e74e84',
        minutesInterval: '15'
    });
    var _0x7e6cxb = _0x7e6cx1('#secondary_nav');
    _0x7e6cxb['stick_in_parent']();
    _0x7e6cxb['find']('ul li a')['on']('click', function(_0x7e6cxc) {
        _0x7e6cxc['preventDefault']();
        var _0x7e6cxd = this['hash'];
        var _0x7e6cxe = _0x7e6cx1(_0x7e6cxd);
        _0x7e6cx1('html, body')['animate']({
            "\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70": _0x7e6cxe['offset']()['top'] - 95
        }, 800, 'swing')
    });
    _0x7e6cxb['find']('ul li a')['on']('click', function() {
        _0x7e6cxb['find']('.active')['removeClass']('active');
        _0x7e6cx1(this)['addClass']('active')
    });
    _0x7e6cx1('#faq_box a[href^="#"]')['on']('click', function() {
        if (location['pathname']['replace'](/^\//, '') == this['pathname']['replace'](/^\//, '') || location['hostname'] == this['hostname']) {
            var _0x7e6cxd = _0x7e6cx1(this['hash']);
            _0x7e6cxd = _0x7e6cxd['length'] ? _0x7e6cxd : _0x7e6cx1('[name=' + this['hash']['slice'](1) + ']');
            if (_0x7e6cxd['length']) {
                _0x7e6cx1('html,body')['animate']({
                    scrollTop: _0x7e6cxd['offset']()['top'] - 185
                }, 800);
                return false
            }
        }
    });
    _0x7e6cx1('ul#cat_nav li a')['on']('click', function() {
        _0x7e6cx1('ul#cat_nav li a.active')['removeClass']('active');
        _0x7e6cx1(this)['addClass']('active')
    });

    function _0x7e6cxf(_0x7e6cxc) {
        _0x7e6cx1(_0x7e6cxc['target'])['prev']('.card-header')['find']('i.indicator')['toggleClass']('icon_minus_alt2 icon_plus_alt2')
    }
    _0x7e6cx1('.accordion')['on']('hidden.bs.collapse shown.bs.collapse', _0x7e6cxf);

    function _0x7e6cx10(_0x7e6cxc) {
        _0x7e6cx1(_0x7e6cxc['target'])['prev']('.panel-heading')['find']('.indicator')['toggleClass']('icon_minus_alt2 icon_plus_alt2')
    }
    _0x7e6cx1('.panel-group')['on']('hidden.bs.collapse', _0x7e6cx10);
    _0x7e6cx1('.panel-group')['on']('shown.bs.collapse', _0x7e6cx10)
})(window['jQuery'])