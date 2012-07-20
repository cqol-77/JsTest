/*jshint smarttabs:true, browser:true*/

/**
 * 完成时尚画报DOM初始化
 * 埋点
 */
tts.p4p = {
    elmId:'tts-p4p',

    browserType:'tts',

    /**
     * 画报数据
     */
    data:[],

    elm:'',

    /**
     * @param {Number} 0 大图（显示边栏），1小图（隐藏边栏）
     */
    type:0,

    /**
     * 框图内容-图片  url 宽高
     */
    mediaWidth :160,
    mediaHeight:160,

    /**
     * 框图内容底部文字广告
     */
    textAdLeft:[
        {"value":decodeURIComponent("%e6%96%b0%e6%ac%be%e9%92%88%e7%bb%87%e8%a1%ab+5%e6%8a%98%e7%96%af%e6%8a%a2%ef%bc%81"), "url":decodeURIComponent("%e9%92%88%e7%bb%87%e8%a1%ab%e9%9f%a9%e7%89%88")},
        {"value":decodeURIComponent("%e5%88%9d%e7%a7%8b%e9%99%90%e6%97%b6%e6%8a%a2+2%e6%8a%98%e8%b5%b7%e5%8c%85%e9%82%ae%ef%bc%81"), "url":decodeURIComponent("%e5%b0%8f%e8%a5%bf%e8%a3%85")},
        {"value":decodeURIComponent("%e6%91%a9%e7%99%bb%e5%bc%80%e5%ad%a3+%e6%96%b0%e6%ac%be5%e6%8a%98%e4%bd%93%e9%aa%8c%ef%bc%81"), "url":decodeURIComponent("%e9%9e%8b%e5%ad%90+%e5%8e%9a%e5%ba%95")},
        {"value":decodeURIComponent("%e7%94%9c%e8%9c%9c%e6%97%a5%e7%b3%bb+%e7%a7%8b%e8%a3%855%e6%8a%98%e8%b5%b7%ef%bc%81"), "url":decodeURIComponent("%e8%bf%9e%e8%a1%a3%e8%a3%99+%e6%97%a5%e7%b3%bb")},
        {"value":decodeURIComponent("%e5%a4%8f%e5%93%812.8%e6%8a%98%e8%b5%b7+%e4%b8%80%e4%bb%b6%e4%b8%8d%e7%95%99%ef%bc%81"), "url":decodeURIComponent("%e5%a5%b3%e5%a3%abT%e6%81%a4")},
        {"value":decodeURIComponent("%e5%a4%8f%e6%9c%ab%e7%a7%8b%e5%88%9d%e6%bd%ae%e6%90%ad+%e6%9e%81%e9%80%9f%e7%a7%92%e6%9d%80%ef%bc%81"), "url":decodeURIComponent("2011%e7%a7%8b+%e7%bd%a9%e8%a1%ab")},
        {"value":decodeURIComponent("%e7%a7%8b%e8%a3%85%e6%96%b0%e5%93%81+6%e6%8a%98%e6%8a%a2%e8%b4%ad%ef%bc%81"), "url":decodeURIComponent("2011%e5%a5%b3%e8%a1%ac%e8%a1%ab")},
        {"value":decodeURIComponent("%e5%8c%85%e9%82%ae%2b%e7%a7%92%e6%9d%80+%e7%96%af%e7%8b%82%e5%94%ae%e5%87%ba%ef%bc%81"), "url":decodeURIComponent("2011%e5%a5%b3%e8%a5%bf%e8%a3%85")},
        {"value":decodeURIComponent("%e6%96%b0%e6%ac%be%e7%89%b9%e6%83%a0+%e4%b9%b0%e4%b8%80%e9%80%81%e4%b8%80%ef%bc%81"), "url":decodeURIComponent("2011%e5%a5%b3+%e5%93%88%e4%bc%a6%e8%a3%a4")},
        {"value":decodeURIComponent("%e4%ba%ba%e6%b0%94%e7%83%ad%e9%94%80+%e4%ba%94%e6%8a%98%e7%a7%92%e6%9d%80%ef%bc%81"), "url":decodeURIComponent("2011%e5%a5%b3+%e6%af%9b%e8%a1%a3")},
        {"value":decodeURIComponent("%e6%ad%a3%e5%93%81%e7%a7%92%e6%9d%80+%e4%b9%b0%e5%b0%b1%e9%80%81%ef%bc%81"), "url":decodeURIComponent("%e9%9b%aa%e5%9c%b0%e9%9d%b4")},
        {"value":decodeURIComponent("%e7%82%ab%e5%bd%a9%e7%a7%8b%e8%a3%85++%e5%85%a8%e5%9c%ba5%e6%8a%98%e8%b5%b7%ef%bc%81"), "url":decodeURIComponent("%e8%bf%9e%e8%a1%a3%e8%a3%99+%e7%a7%8b")},
        {"value":decodeURIComponent("%e6%96%b0%e6%ac%be%e9%99%90%e6%97%b6%e7%89%b9%e4%bb%b7+%e6%9c%80%e5%90%8e%e4%b8%80%e5%a4%a9%ef%bc%81"), "url":decodeURIComponent("%e9%92%88%e7%bb%87%e8%a1%ab+%e9%9f%a9%e7%89%88%e6%96%b0%e6%ac%be")},
        {"value":decodeURIComponent("%e6%96%b0%e6%ac%be%e4%b8%8a%e5%b8%82+%e5%8c%85%e9%82%ae%e4%bd%8e%e8%87%b34%e6%8a%98%ef%bc%81"), "url":decodeURIComponent("%e8%a1%ac%e8%a1%ab+%e5%a5%b3+%e9%9f%a9%e7%89%88")},
        {"value":decodeURIComponent("%e7%a7%92%e6%9d%80%e6%bb%a1%e7%ab%8b%e5%87%8f+%e5%a4%a9%e5%a4%a9%e6%83%8a%e5%96%9c%ef%bc%81"), "url":decodeURIComponent("%e9%a3%8e%e8%a1%a3+%e5%a5%b3")}
    ],

    textAdRight:[
        {"value":decodeURIComponent("%e6%b8%85%e6%96%b0%e7%ba%a6%e4%bc%9a%e6%90%ad+%e6%97%b6%e5%b0%9a%e5%8f%97%e5%ae%a0%7e"), "url":decodeURIComponent("%e6%af%9b%e8%a1%a3+%e9%9f%a9%e7%89%88+%e6%97%b6%e5%b0%9a")},
        {"value":decodeURIComponent("%e7%94%9c%e7%be%8e%e9%ba%bb%e8%b1%86+9%e6%9c%88%e6%b0%94%e8%b4%a8%e5%85%a5%e7%a7%8b%7e"), "url":decodeURIComponent("%e6%97%a5%e7%b3%bb%e9%92%88%e7%bb%87%e5%bc%80%e8%a1%ab+%e5%a5%b3")},
        {"value":decodeURIComponent("%e4%b8%ad%e7%a7%8b%e6%83%85%e4%be%a3%e6%96%b0%e8%a3%85+%e7%81%ab%e7%88%86%e4%b8%8a%e5%b8%82%7e"), "url":decodeURIComponent("2011%e7%a7%8b%e8%a3%85%e6%83%85%e4%be%a3%e8%a3%85")},
        {"value":decodeURIComponent("2011%e6%b7%98%e5%ae%9d%e7%a7%8b%e5%ad%a3%e6%96%b0%e5%93%81%e5%8f%91%e5%b8%83%7e"), "url":decodeURIComponent("%e8%a5%bf%e8%a3%85++%e5%a5%b3")},
        {"value":decodeURIComponent("%e7%a7%8b%e5%88%9d%e5%bf%85%e8%b4%a5+%e7%94%9c%e7%be%8e%e6%97%a5%e7%b3%bb%e9%9e%8b%7e"), "url":decodeURIComponent("%e5%8d%95%e9%9e%8b+%e7%94%9c%e7%be%8e+%e7%b2%89")},
        {"value":decodeURIComponent("%e8%90%9d%e8%8e%89%e5%ba%97%e4%b8%bb%e6%99%92%e7%81%ab%e7%88%86%e7%a7%8b%e8%a3%85%7e"), "url":decodeURIComponent("%e7%a7%8b%e8%a3%85+%e6%96%b0%e6%ac%be+%e9%92%88%e7%bb%87%e8%a1%ab")},
        {"value":decodeURIComponent("%e8%a3%99%e8%88%9e%e9%a3%9e%e6%89%ac+%e7%a7%8b%e5%ad%a3%e8%a3%99%e8%a3%85%e6%94%bb%e7%95%a5%7e"), "url":decodeURIComponent("%e8%bf%9e%e8%a1%a3%e8%a3%99+%e7%a7%8b")},
        {"value":decodeURIComponent("%e6%b0%94%e8%b4%a8%e6%b7%b7%e6%90%ad+%e5%8f%98%e5%b0%8f%e4%b8%80%e5%8f%b7%e8%ba%ab%e6%9d%90%7e"), "url":decodeURIComponent("%e8%a1%ac%e8%a1%ab+%e5%a5%b3")},
        {"value":decodeURIComponent("%e6%9c%80%e7%89%9b%e6%bd%ae%e8%a3%a4+%e7%bf%98%e8%87%80%e9%95%bf%e8%85%bf%7e"), "url":decodeURIComponent("%e7%89%9b%e4%bb%94%e8%a3%a4+%e5%a5%b3+%e5%b0%8f%e8%84%9a%e8%a3%a4")},
        {"value":decodeURIComponent("%e8%a1%97%e5%a4%b4%e9%a3%8e%e7%81%ab%e7%88%86%e6%bd%ae%e8%a3%85%7e"), "url":decodeURIComponent("2011+%e8%a1%97%e5%a4%b4%e6%bd%ae%e4%ba%ba")},
        {"value":decodeURIComponent("%e5%88%9d%e7%a7%8b%e5%87%ba%e6%b8%b8+%e5%bf%85%e5%a4%87%e7%be%8e%e8%a3%85%7e"), "url":decodeURIComponent("%e9%92%88%e7%bb%87%e8%a1%ab+%e5%a5%b3+%e5%ae%bd%e6%9d%be")},
        {"value":decodeURIComponent("%e6%bd%ae%e5%a6%88%e4%b8%80%e8%a1%a3%e5%a4%9a%e6%90%ad%e6%98%be%e5%ab%a9%e6%90%ad%7e"), "url":decodeURIComponent("%e9%92%88%e7%bb%87%e8%a1%ab+%e5%bc%80%e8%a1%ab+%e6%9d%a1%e7%ba%b9")},
        {"value":decodeURIComponent("%e6%97%b6%e5%b0%9a%e5%a4%96%e5%a5%97+%e5%81%9a%e7%94%9c%e7%be%8e%e5%a5%b3%e7%94%9f%7e"), "url":decodeURIComponent("%e5%a4%96%e5%a5%97+%e5%bc%80%e8%a1%ab")},
        {"value":decodeURIComponent("%e5%8f%af%e7%88%b1%e5%8d%95%e9%9e%8b+%e7%bc%a4%e7%ba%b7%e6%90%ad%e9%85%8d%7e"), "url":decodeURIComponent("%e5%8d%95%e9%9e%8b+%e5%8f%af%e7%88%b1")},
        {"value":decodeURIComponent("%e7%a7%8b%e8%a3%85%e6%96%b0%e6%ac%be%e7%83%ad%e5%8d%96%e8%bf%9b%e8%a1%8c%e6%97%b6%7e"), "url":decodeURIComponent("%e7%a7%8b%e8%a3%85%e6%96%b0%e6%ac%be")},
        {"value":decodeURIComponent("%e9%83%bd%e5%b8%82ol%e9%a3%8e+%e9%80%9a%e5%8b%a4%e8%bf%9e%e8%a1%a3%e8%a3%99%7e"), "url":decodeURIComponent("OL+%e8%bf%9e%e8%a1%a3%e8%a3%99")},
        {"value":decodeURIComponent("%e5%ae%b6%e6%9c%89%e6%bd%ae%e5%ae%9d+%e5%a4%8f%e5%ad%a3%e7%be%8e%e8%a1%a3%e6%9c%80%e5%90%8e%e6%8a%a2"), "url":decodeURIComponent("%e5%a4%8f%e8%a3%85++%e8%bf%9e%e8%a1%a3%e8%a3%99+%e6%b0%94%e8%b4%a8")},
        {"value":decodeURIComponent("%e7%a7%8b%e5%ad%a3%e8%bf%b7%e4%ba%ba%e9%a3%8e%e6%83%85+%e7%a7%92%e6%9d%80%e5%ae%85%e7%94%b7"), "url":decodeURIComponent("%e8%bf%9e%e8%a1%a3%e8%a3%99+%e6%80%a7%e6%84%9f")}
    ],

    /**
     * 埋点（统计来源）
     * @param {String} type 埋点种类
     * 种类参考：http://199.155.122.167:8080/pages/viewpage.action?pageId=7569416
     */
    statistics:function (type, bak) {
        bak = bak ? bak : '';
        var _self = this,
            conf = tts.conf,
            url;
        if (type.join) {
            var _type = '',
                _imgSrc = '';

            //商品点埋点
            for (var i = 0, len = type.length; i < len; i++) {
                _type += ',' + 'ZTpv_' + conf.channelName + '_0_' + _self.browserType;
                _imgSrc += ',' + encodeURIComponent(_self.changeUrl(this.elm.src));
            }

            url = conf.statisticsUrl + '/statistics.do?' +
                'type=' + _type.substring(1) +
                '&fr_url=' +
                '&img_url=' + _imgSrc.substring(1) +
                '&banner_url=' +
                '&bak=' + bak +
                '&t=' + new Date().getTime();
        } else {
            url = conf.statisticsUrl + '/statistics.do?' +
                'type=' + type + "_" + _self.browserType +
                '&fr_url=' +
                '&img_url=' + encodeURIComponent(_self.changeUrl(this.elm.src)) +
                '&banner_url=' +
                '&bak=' + bak +
                '&t=' + new Date().getTime();
        }

        tts.loadJS(url);
    },

    /**
     * 埋点（推广渠道）
     * @param
     * 种类参考：http://log.ttsunion.com/qudao_statistics.do?
     *         param=browser,cookie,,123123,street.yoka.com
     */
    statisticsDitch:function () {
        var cookie = window._tts_cookie_id ? window._tts_cookie_id : "";
        var ditchId = tts.getDitchId();
        var url = tts.conf.statisticsUrl + '/qudao_statistics.do?' +
            'param=' + 'browser,' + cookie + ',,' + ditchId + ',' + document.location.host +
            '&t=' + new Date().getTime();
        tts.loadJS(url);
    },

    /**
     * 生成DOM
     * @param {Object} elm 图片节点
     */
    create:function (elm) {
        var _self = tts.p4p,
            load,
            init;

        _self.elm = elm;

        /**
         * @param {Number} num 当一个页面中有多个画报时，区分id用
         */
        init = function (data, num) {
            var elm = _self.elm.length ? _self.elm[num] : _self.elm,
                box = document.createElement('div'),
                str = '',
                sidebarItem = '',
                marker = '';

            //埋点（统计图媒体的展示PV）
            _self.statistics(data);
            //埋点 （推广渠道）
            _self.statisticsDitch();

            for (var i = 0, len = data.length; i < len; i++) {
                var item = data[i],
                //框图x坐标
                    markerX = parseInt(item.coordinateInfo.split(',')[0], 10) + tts.offset(elm).x,

                //框图y坐标
                    markerY = parseInt(item.coordinateInfo.split(',')[1], 10) + tts.offset(elm).y,

                //框图宽高
                    markerWidth = parseInt(item.coordinateInfo.split(',')[2], 10),
                    markerHeight = parseInt(item.coordinateInfo.split(',')[3], 10),

                //框图内容x坐标
                    wrapX = markerWidth + 3,

                //框图内容y坐标
                    wrapY = 0,

                //链接地址
                    url = tts.conf.defaultRequestHost + 'd-' + item.id + '.html?itemId=' + item.productItemId + '&site=' +
                        tts.conf.soureSite + '&c=' + tts.conf.channelId,

                //产品名称
                    name = item.tabName + item.categroryName,

                //性别
                //女款    %e5%a5%b3%e6%ac%be
                //男款    %e7%94%b7%e6%ac%be
                    sex = item.sex === 1 ? decodeURIComponent("%e7%94%b7%e6%ac%be") : decodeURIComponent('%e5%a5%b3%e6%ac%be'),

                //随机数
                    textAdLeftIndex = parseInt(15 * Math.random(), 10),
                    textAdRightIndex = parseInt(15 * Math.random(), 10);
                //商品点埋点
                var itemIdValue = item.id + ':' + item.productItemId;
                //边栏
                sidebarItem += '<li><span class="t_bg"></span><a href="' + url + '" class="alink J-sidertab-link"  itemIdValue="' + itemIdValue + '" title="' + name + '" target="_blank">' + name + '</a><span class="b_bg"></span></li>';

                //框图
                var price = item.productPrice;
                if (price.indexOf(".")) {
                    price = price.substring(0, price.indexOf("."));
                }

                marker += '<div class="J-marker-box" style="left:' + markerX + 'px; top:' + markerY + 'px;position:absolute;"><div class="tts-marker" ' +
                    '>' +
                    '<div style="width:' + markerWidth + 'px; height:' + markerHeight + 'px" class="marked-area">' +
                    '<a style="width:' + markerWidth + 'px; height:' + markerHeight + 'px" target="_blank"  ' +
                    'href="' + url + '" class="J-marker-link"  itemIdValue="' + itemIdValue + '" ></a></div></div>' +

                    //框图内容
                    '<div class="tip-wrap" ' +
                    'style="display:none;top:' + wrapY + 'px;left:' + wrapX + 'px;"> <div class="tip_up"></div>' +

                    //框图内容-标题
                    '<h3>' + decodeURIComponent('%e5%9b%be%e4%b8%ad') + item.tabName + '<b>' + sex + '</b></h3> ' +

                    //框图内容-图片
                    '<div class="goods_pic"><a title="' + item.productTitle + '" target="_blank"  href="' + url +
                    '"> <img class="J-pic-link" height="160" alt="' + item.productTitle + '"  itemIdValue="' + itemIdValue + '" title="' + item.productTitle +
                    '" src="' + item.productPicUrl + '_' + _self.mediaWidth + 'x' + _self.mediaHeight + '.jpg"></a></div>' +

                    //框图内容-详情
                    '<div class="goods-detail">' +
                    '<h1><a target="_blank"  href="' + url + '" class="J-detail-link"  itemIdValue="' + itemIdValue + '" >' + item.productTitle + '</a></h1>' +
                    '<p><span>\u5b9d\u8d1d\u4ef7</span><em>\uffe5</em><strong>' + price + '</strong><br> </p>' +
                    '<div><a title="' + decodeURIComponent('%e6%9f%a5%e7%9c%8b%e8%af%a6%e6%83%85') + '" class="J-readmore btn"  itemIdValue="' + itemIdValue + '" target="_blank"  href="' + url + '" class="J-detail-link"></a></div> </div>' +

                    //框图内容-广告
                    '<ul>' +
                    '<li><a class="J-text" title="' + _self.textAdLeft[textAdLeftIndex].value.replace("+", " ") + '" target="_blank"  href="' + tts.conf.retaobaoUrl + encodeURIComponent(_self.textAdLeft[textAdLeftIndex].url.replace("+", " ")) + '">' + _self.textAdLeft[textAdLeftIndex].value.replace("+", " ") + '</a></li>' +
                    '<li><a class="J-text" title="' + _self.textAdRight[textAdRightIndex].value.replace("+", " ") + '" target="_blank"  href="' + tts.conf.retaobaoUrl + encodeURIComponent(_self.textAdRight[textAdRightIndex].url.replace("+", " ")) + '">' + _self.textAdRight[textAdRightIndex].value.replace("+", " ") + '</a></li>' +
                    '</ul>' +

                    '</div></div>';
            }

            //区分大图/小图不同模式
            if (_self.type === 0) {
                //针对用padding-top使图片居中的情况做处理
                //例：http://pic.women.sohu.com/group-315770.shtml#0
                var sidebarY = tts.offset(elm).y;
                if (parseInt(elm.style.paddingTop, 10) > 0) {
                    sidebarY += parseInt(elm.style.paddingTop, 10);
                }

                str = ' <div class="sidertab" style="top:' + sidebarY + 'px;left:' + (tts.width(elm) + tts.offset(elm).x) + 'px;display:block;"> <div style="overflow:hidden;"> <ul>';
                str += sidebarItem;
                str += '</ul> </div> </div>';
            }

            str += marker;
            box.id = num ? _self.elmId + num : _self.elmId + '0';
            box.className = 'tts-p4p';
            box.innerHTML = str;

            //绑定埋点（统计）事件
            tts.addEvent(box, 'click', function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;

                //边栏
                if (tts.hasClass(target, 'J-sidertab-link') ||
                    //框图
                    tts.hasClass(target, 'J-marker-link') ||
                    //框图内容-大图
                    tts.hasClass(target, 'J-pic-link') ||
                    //框图内容-查看详情
                    tts.hasClass(target, 'J-readmore') ||
                    //框图内容-详情
                    tts.hasClass(target, 'J-detail-link')) {
                    _self.statistics('ZDclick_' + tts.conf.channelName + '_0', target.getAttribute('itemidvalue'));
                }
                //文字链接
                else if (tts.hasClass(target, 'J-text')) {
                    _self.statistics('ZWclick_' + tts.conf.channelName + '_0');
                }
            });

            document.body.appendChild(box);

            //改变浏览器窗口大小时重置x/y坐标
            tts.addEvent(window, 'resize', function () {
                var sidebarY = tts.offset(elm).y;
                if (parseInt(elm.style.paddingTop, 10) > 0) {
                    sidebarY += parseInt(elm.style.paddingTop, 10);
                }

                for (var i = 0, len = data.length; i < len; i++) {
                    var item = data[i];
                    tts.setCSS(tts.getByClassName('J-marker-box', box)[i], {
                        'top' :(parseInt(item.coordinateInfo.split(',')[1], 10) + tts.offset(elm).y) + 'px',
                        'left':(parseInt(item.coordinateInfo.split(',')[0], 10) + tts.offset(elm).x) + 'px'
                    });
                    tts.setCSS(tts.getByClassName('sidertab', box)[0], {
                        'top' :sidebarY + 'px',
                        'left':(tts.width(elm) + tts.offset(elm).x) + 'px'
                    });
                }
            });

            //框图交互
            (function () {
                var markerBox = tts.getByClassName('J-marker-box'),
                    sidebarLink = tts.getByClassName('J-sidertab-link'),
                    handleEvent,
                //统计ZPpv数量
                //避免重复统计pv
                    pvArr = [],
                    hideMarkerBox;

                hideMarkerBox = function () {
                    for (var i = 0, len = markerBox.length; i < len; i++) {
                        markerBox[i].style.visibility = 'hidden';
                    }
                };

                handleEvent = function (e) {
                    e = e || window.event;
                    var target = e.target || e.srcElement,
                        relateNode = e.relatedTarget || e.toElement,
                        wrapElm = tts.getByClassName('tip-wrap'),
                        hideSidebarLink;

                    hideSidebarLink = function () {
                        for (var i = 0, len = sidebarLink.length; i < len; i++) {
                            tts.removeClass(sidebarLink[i].parentNode, 'active');
                        }
                    };

                    if (e.type === 'mouseover') {
                        hideSidebarLink();
                        hideMarkerBox();
                        tts.addClass(sidebarLink[this.index].parentNode, 'active');
                        wrapElm[this.index].style.display = 'block';
                        tts.setCSS(markerBox[this.index], {
                            'visibility':'visible',
                            'zIndex'    :'9999'
                        });

                        if (pvArr[this.index] !== 1) {
                            //埋点（用户主动触发图媒体的PV）
                            _self.statistics('ZPpv_' + tts.conf.channelName + '_0');
                            pvArr[this.index] = 1;
                        }
                    } else if (e.type === 'mouseout') {
                        hideSidebarLink();
                        wrapElm[this.index].style.display = 'none';
                        markerBox[this.index].style.zIndex = '9998';
                        if (relateNode !== _self.toggleElm || tts.hasClass(target, 'J-sidertab-link')) {
                            markerBox[this.index].style.visibility = 'hidden';
                        }
                    }
                };

                for (var i = 0, len = markerBox.length; i < len; i++) {
                    sidebarLink[i].index = i;
                    markerBox[i].index = i;

                    //边栏按钮
                    sidebarLink[i].onmouseover = handleEvent;
                    sidebarLink[i].onmouseout = handleEvent;

                    //框图按钮
                    markerBox[i].onmouseover = handleEvent;
                    markerBox[i].onmouseout = handleEvent;
                }

                //框图按钮渐隐
                setTimeout(hideMarkerBox, 1500);
            })();
        };

        load = function (i) {
            var elm;
            //单页面多画报
            if (tts.p4p.elm.length) {
                elm = tts.p4p.elm[i];
                //保证画报先后顺序
                for (var j = 0, len = _tts_tag_info.length; j < len; j++) {
                    //没打点的图片不做处理
                    //id = 0 或者 imageUrl不匹配
                    if (tts.p4p.compare(_tts_tag_info[j].imageUrl, elm.src) && _tts_tag_info[j].id !== 0) {
                        new init(_tts_tag_info[j].lstImageTag, j);
                    }
                }
            }
            //单页面单画报
            else {
                elm = tts.p4p.elm;
                //没打点的图片不做处理
                //id = 0 或者 imageUrl不匹配
                if (tts.p4p.compare(_tts_tag_info[i].imageUrl, elm.src) && _tts_tag_info[i].id !== 0) {
                    new init(_tts_tag_info[i].lstImageTag, i);
                }
            }

            if (tts.conf.channelName.match(/sina/) || tts.conf.channelName.match(/qq/)) {
                var handleEvent = function (e) {
                    var hash = window.location.hash;

                    if (window.location.hash !== hash) {
                        //埋点（画报翻页时产生的PV）
                        tts.p4p.statistics('ZFpv_' + tts.conf.channelName + '_0');
                    }
                };
                tts.addEvent(window, 'click', handleEvent);
                tts.addEvent(window, 'keydown', handleEvent);
            }
            //埋点（画报页面总PV）
            tts.p4p.statistics('ZZpv_' + tts.conf.channelName + '_0');
        };

        //避免重新请求数据
        if (typeof _tts_tag_info === 'undefined') {
            tts.loadJS(tts.conf.getDataUrl, function () {
                for (var i = 0, len = _tts_tag_info.length; i < len; i++) {
                    load(i);
                }
            });
        } else {
            for (var i = 0, len = _tts_tag_info.length; i < len; i++) {
                load(i);
            }
        }
    },

    /**
     * 删除DOM
     */
    del:function () {
        if (tts.getByClassName('tts-p4p').length <= 0) {
            return;
        }
        var box = tts.getByClassName('tts-p4p'),
            markerBox = tts.getByClassName('J-marker-box'),
            sidebarLink = tts.getByClassName('J-sidertab-link');

        for (var i = 0, len = markerBox.length; i < len; i++) {
            sidebarLink[i].index = i;
            markerBox[i].index = i;

            //边栏按钮
            sidebarLink[i].onmouseover = null;
            sidebarLink[i].onmouseout = null;

            //框图按钮
            markerBox[i].onmouseover = null;
            markerBox[i].onmouseout = null;
        }

        for (var n = 0; n < box.length; n++) {
            document.body.removeChild(box[n]);
        }
    },

    /**
     * 显示隐藏框图按钮
     * @param {Object} elm 触发交互的节点
     */
    toggleBtn:function (elm) {
        this.toggleElm = elm;
        var handleEvent = function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement,
                relateNode = e.relatedTarget || e.toElement;

            var box = tts.getByClassName('tts-p4p'),
                markerBox;
            //单页面多画报模式
            if (elm[0]) {
                for (var i = 0, len = _tts_tag_info.length; i < len; i++) {
                    if (tts.p4p.compare(_tts_tag_info[i].imageUrl, target.src)) {
                        markerBox = tts.getByClassName('J-marker-box', box[i]);
                        for (var n = 0; n < markerBox.length; n++) {
                            if (e.type === 'mouseover') {
                                markerBox[n].style.visibility = 'visible';
                            } else if (e.type === 'mouseout') {
                                var wrap = tts.getByClassName('tip-wrap', markerBox[n])[0];
                                if (!tts.hasClass(relateNode, 'J-marker-link') &&
                                    !tts.hasClass(relateNode, 'marked-area') &&
                                    !tts.hasClass(relateNode, 'tts-marker') &&
                                    !tts.hasClass(relateNode, 'J-sidertab-link')) {

                                    setTimeout(function (n) {
                                        return function () {
                                            markerBox[n].style.visibility = 'hidden';
                                        };
                                    }(n), 500);
                                }
                            }
                        }
                    }
                }
            }
            //单页面单画报模式
            else {
                markerBox = tts.getByClassName('J-marker-box', box[0]);
                if (e.type === 'mouseover') {
                    for (var _i = 0, _len = markerBox.length; _i < _len; _i++) {
                        markerBox[_i].style.visibility = 'visible';
                    }
                } else if (e.type === 'mouseout') {
                    for (var _n = 0, _nlen = markerBox.length; _n < _nlen; _n++) {
                        markerBox[_n].style.visibility = 'hidden';
                    }
                }
            }
        };

        if (elm[0]) {
            for (var i = 0, len = elm.length; i < len; i++) {
                tts.addEvent(elm[i], 'mouseover', handleEvent);
                tts.addEvent(elm[i], 'mouseout', handleEvent);
            }
        } else {
            tts.addEvent(elm, 'mouseover', handleEvent);
            tts.addEvent(elm, 'mouseout', handleEvent);
        }
    },

    /**
     * 只比较url pathname + search + hash
     * @param {String} url1 第一个url
     * @param {String} url2 第二个url
     */
    compare:function (url1, url2) {
        var reg = /^(http:\/\/[-\w]+(\.\w[-\w])*)/;
        switch (tts.conf.soureSite) {
            case 9:
                if (url2.match(/biz.itc.cn/)) {
                    url2 = "http://m1" + url2.substring(url2.indexOf(".biz.itc.cn"));
                    url2 = url2.replace('_x.', '_f.')
                        .replace('_s.', '_f.')
                        .replace('_st.', '_f.')
                        .replace('_n.', '_f.')
                        .replace('/n/', '/f/')
                        .replace('/x/', '/f/')
                        .replace('/s/', '/f/')
                        .replace('/st/', '/f/');
                }
                return url1.replace(reg, '') === url2.replace(reg, '');
            case 11:
                if (url2.match(/&f=/)) {
                    url2 = "http://thumb1.yokacdn.com/p_400_610/" + url2.substring(url2.indexOf("&f=") + 3).replace(":", "") + ".jpg";
                }
                return url1.replace("strp2", "strp1").replace(reg, '') === url2.replace("strp2", "strp1").replace(reg, '');
            default:
                return url1.replace(reg, '') === url2.replace(reg, '');
        }
    },

    /**
     * 改变埋点URl路径
     * @param {String} url 第一个url
     */
    changeUrl:function (url) {
        switch (tts.conf.soureSite) {
            case 4:
                if (url.match(/.gtimg.com/)) {
                    url = "http://img1" + url.substring(url.indexOf(".gtimg.com"));
                }
                return url;
            case 8:
                if (url.match(/.rayliimg.cn/)) {
                    url = "http://image1" + url.substring(url.indexOf(".rayliimg.cn"));
                }
                return url;
            case 9:
                if (url.match(/biz.itc.cn/)) {
                    url = "http://m1" + url.substring(url.indexOf(".biz.itc.cn"));
                    url = url.replace('_x.', '_f.')
                        .replace('_s.', '_f.')
                        .replace('_st.', '_f.')
                        .replace('_n.', '_f.')
                        .replace('/n/', '/f/')
                        .replace('/x/', '/f/')
                        .replace('/s/', '/f/')
                        .replace('/st/', '/f/');
                }
                return url;
            case 11:
                if (url.match(/&f=/)) {
                    url = "http://thumb1.yokacdn.com/p_400_610/" + url.substring(url.indexOf("&f=") + 3).replace(":", "") + ".jpg";
                }
                return url;
            default:
                return url;
        }
    }
};
(function () {
    var userAgent = window.navigator.userAgent;
    //枫树
    if (userAgent.match(/CoolNovo/)) {
        tts.p4p.browserType = "fengshu";
        return;
    }
    //360极速
    if (userAgent.match(/360EE/)) {
        tts.p4p.browserType = "360js";
        return;
    }
    //360安全浏览器
    if (userAgent.match(/360SE/)) {
        tts.p4p.browserType = "360aq";
        return;
    }
    //搜狐
    if (userAgent.match(/MetaSr/)) {
        tts.p4p.browserType = "Sougou";
        return;
    }
    //Chrome
    if (userAgent.match(/Chrome/)) {
        tts.p4p.browserType = "Chrome";
        return;
    }
    //IE
    if (userAgent.match(/MSIE/)) {
        tts.p4p.browserType = "IE";
        return;
    }
    //百度统计
    baidu = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'hm.baidu.com/h.js?';
    tts.loadJS(baidu + 'f5127c6793d40d199f68042b8a63e725');
})();
