/* 蓝色洛可可：装饰开关 + 陈列室渐显。全部可有可无，失败不影响页面。 */
(function () {
    var R = document.documentElement; R.classList.add('js');
    try { if (localStorage.getItem('rococo-decor') === 'off') R.classList.add('no-decor'); } catch (e) {}

    var t = document.getElementById('railToggle');
    function sync() { if (t) t.setAttribute('aria-pressed', R.classList.contains('no-decor') ? 'true' : 'false'); }
    sync();
    if (t) t.addEventListener('click', function () {
        var off = R.classList.toggle('no-decor');
        sync();
        try { localStorage.setItem('rococo-decor', off ? 'off' : 'on'); } catch (e) {}
    });

    // 陈列室里的东西进入视野时轻轻浮起
    var items = document.querySelectorAll('.pol, .print, .sh, .sk, .at, .tk, .stk');
    if (!('IntersectionObserver' in window)) { for (var i = 0; i < items.length; i++) items[i].classList.add('in'); return; }
    var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
    }, { rootMargin: '0px 0px -6% 0px' });
    for (var j = 0; j < items.length; j++) {
        items[j].style.setProperty('--d', (j % 9) * 60 + 'ms');
        io.observe(items[j]);
    }
})();
