// Inject site header and mobile nav toggle
(function(){
    const header = document.getElementById('site-header');
    if(!header) return;

    const navHtml = `
    <div class="container">
        <div class="logo">GAO<span>.ZH</span></div>
        <button class="nav-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav>
            <ul>
                <li><a href="index.html">首页</a></li>
                <li><a href="services.html">价值与服务</a></li>
                <li><a href="manifesto.html">核心竞争力</a></li>
                <li><a href="about.html">关于 & 简历</a></li>
                <li><a href="contact.html">联系合作</a></li>
            </ul>
        </nav>
    </div>`;

    header.innerHTML = navHtml;

    // set active link based on current path
    function setActive(){
        const path = location.pathname.split('/').pop() || 'index.html';
        const links = header.querySelectorAll('nav a');
        links.forEach(a => {
            const href = a.getAttribute('href');
            if(href === path){
                a.classList.add('active');
            } else {
                a.classList.remove('active');
            }
        });
    }
    setActive();

    // mobile toggle
    const toggle = header.querySelector('.nav-toggle');
    const nav = header.querySelector('nav');
    toggle && toggle.addEventListener('click', function(){
        nav.classList.toggle('open');
        // animate hamburger -> X
        toggle.classList.toggle('open');
        const spans = toggle.querySelectorAll('span');
        if(toggle.classList.contains('open')){
            spans[0].style.transform = 'translateY(8px) rotate(45deg)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });

    // close nav when clicking a link (mobile)
    header.addEventListener('click', function(e){
        const target = e.target;
        if(target.tagName === 'A' && nav.classList.contains('open')){
            nav.classList.remove('open');
            toggle.classList.remove('open');
            const spans = toggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
})();
