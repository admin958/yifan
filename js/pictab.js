/**
 * Created by chenxiuzu on 2016/11/3.
 */


//数控轮播图
(function () {
    function initEle() {
        oMainList = document.getElementById('main_list');
        oTabBox = oMainList.getElementsByTagName('ul')[0];
        oTabBoxLi = oTabBox.getElementsByTagName('li');
        oPrev = oMainList.getElementsByTagName('a')[0];
        oNext = oMainList.children[oMainList.children.length - 1];
        addEventHandler();
    }

    function addEventHandler() {
        oPrev.addEventListener('click', prevTabHandler, false);
        oNext.addEventListener('click', nextTabHandler, false);
        oMainList.addEventListener('mouseover', mouseoverHandler, false);
        oMainList.addEventListener('mouseout', mouseoutHandler, false);
    }

    clearInterval(timer);
    timer = setInterval(nextTabHandler, 2000);

    function mouseoverHandler() {
        clearInterval(timer);
    }

    function mouseoutHandler() {
        timer = setInterval(nextTabHandler,2000);
    }

    function prevTabHandler() {
        if (bReady == false) return;
        bReady = false;
        if (oTabBox.offsetLeft == 0) {
            oTabBox.style.left = oTabBoxLi.clientWidth+'px';
            console.log(oTabBox.style.left)
            iNum = 0
        }
        iNum--;
        $(oTabBox).animate({'left': -(oTabBox.children[0].offsetWidth + 20) * iNum}, function () {
            bReady = true;
        });
        iNum %= oTabBox.children.length;
    }

    function nextTabHandler() {
        if (bReady == false) return;
        bReady = false;
        if (oTabBox.offsetLeft == -512) {
            oTabBox.style.left = 0;
            iNum = 0;
        }
        iNum++;
        $(oTabBox).animate({'left': -(oTabBox.children[0].offsetWidth + 20) * iNum}, function () {
            bReady = true;
        });
        iNum %= oTabBox.children.length;
    }

    initEle();
    var oMainList, oTabBox, oPrev, oNext, timer, iNum = 4, bReady = true;
})();


/*
//产品推荐轮播图
(function () {
    function initEle() {
        oPic = document.getElementById('picture');
        oTabBox = oPic.getElementsByTagName('ul')[0];
        oPrev = oPic.getElementsByTagName('a')[0];
        oNext = oPic.getElementsByTagName('a')[1];
        clickHandler();
    }

    function clickHandler() {
        oPrev.addEventListener('click', prevTabHandler, false);
        oNext.addEventListener('click', nextTabHandler, false);
    }

    function prevTabHandler() {
        if (bReady == false) return;
        bReady = false;
        iNum--;
        $(oTabBox).animate({'left': -oTabBox.offsetWidth * iNum / oTabBox.children.length}, function () {
            if (iNum == 0) {
                oTabBox.style.left = '-2352px';
                iNum = 3;
            }
            bReady = true;
        });
        iNum %= oTabBox.children.length - 1;
    }

    function nextTabHandler() {
        if (bReady == false) return;
        bReady = false;
        iNum++;
        $(oTabBox).animate({'left': -oTabBox.offsetWidth * iNum / oTabBox.children.length}, function () {
            if (iNum == 0) {
                oTabBox.style.left = '-784px';
                iNum = 1;
            }
            bReady = true;
        });
        iNum %= oTabBox.children.length - 1;
    }

    initEle();
    var oPic, oTabBox, oPrev, oNext, iNum = 1, bReady = true;
})();
*/



