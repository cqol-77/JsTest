/*jshint smarttabs:true, browser:true*/

/**
 * 区分来源，载入css/js
 */
(function(win) {
    var tts = {
        /**
         * 加载JS
         * @param {String} url js路径
         * @param {Function} callback 回函
         */
        loadJS: function(url, callback) {
            var script = document.createElement("script");
            script.src = url;
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.onloadDone = false;

            // 标准浏览器 加载状态判断
            script.onload = function() {
                script.onloadDone = true;
                if (callback) {
                    callback(script);
                }
            };

            // IE 加载状态判断
            script.onreadystatechange = function() {
                if (script.readyState === "loaded" || script.readyState === "complete" && !script.onloadDone) {
                    script.onloadDone = true;
                    if (callback) {
                        callback(script);
                    }
                }
            };

            document.body.appendChild(script);
        },

        /**
         * 加载CSS
         */
        loadCSS: function(url) {
            var head = document.head || document.getElementsByTagName('head')[0],
                link = document.createElement('link');

            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = url;

            head.appendChild(link);
        },

        /**
         * 加载文件
         * @param {String} url css/js 路径
         * @param {Function} callback 加载js后的回调函数
         */
        load: function(url, callback) {
            if (url.match(/.js/)) {
                this.loadJS(url, callback);
            } else if (url.match(/.css/)) {
                this.loadCSS(url);
            }
        },

        /**
         * 添加一个事件模型
         * @param {Element} elm dom节点
         * @param {String} type 事件种类
         * @param {Function} fn 回调函数
         */
        addEvent: function(elm, type, fn) {
            if (elm.addEventListener) {
                elm.addEventListener(type, fn, false);
                return true;
            } else if (elm.attachEvent) {
                elm['e' + type + fn] = fn;
                elm[type + fn] = function() {
                    elm['e' + type + fn](win.event);
                };
                elm.attachEvent('on' + type, elm[type + fn]);
                return true;
            }
            return false;
        },

        /**
         * 删除一个事件模型
         * @param {Element} elm dom节点
         * @param {string} type 事件种类
         * @param {Function} fn 回调函数
         */
        removeEvent: function(elm, type, fn) {
            if (win.removeEventListener) {
                return function(elm, type, fn, capture) {
                    elm.removeEventListener(type, fn, !! capture);
                };
            } else if (win.detachEvent) {
                return function(elm, type, fn) {
                    elm.detachEvent("on" + type, fn);
                };
            } else {
                return function() {};
            }
        },

        /**
         * 根据class返回nodeList
         * 返回数组
         *
         * @param {String} cls class
         * @param {Object} root 父级节点，可选参数
         */
        getByClassName: function(cls, root) {
            root = root || document;
            var arr = [];

            if (root.querySelectorAll) {
                arr = root.querySelectorAll('.' + cls);
            } else if (root.getElementsByClassName) {
                arr = root.getElementsByClassName(cls);
            } else {
                var elm = root.getElementsByTagName('*');

                for (var i = 0, len = elm.length; i < len; i++) {
                    if (elm[i].className.match(cls)) {
                        arr.push(elm[i]);
                    }
                }
            }

            return arr;
        },

        /**
         * 设置属性
         * @param {Element} elm dom节点
         * @param {Object} opt 包含 key:val 的对象
         */
        setAttr: function(elm, opt) {
            for (var i in opt) {
                elm.setAttribute(i, opt[i]);
            }
        },

        /**
         * 检测元素是否包含 class
         * @param {Element} elm dom节点
         * @param {String} cls 名称
         */
        hasClass: function(elm, cls) {
            if (elm.className.match(cls)) {
                return true;
            } else {
                return false;
            }
        },

        /**
         * 添加一个 class
         * @param {Element} elm dom节点
         * @param {String} cls 名称
         */
        addClass: function(elm, cls) {
            if (!this.hasClass(elm, cls)) {
                elm.className === "" ? elm.className = cls : elm.className += " " + cls;
            }
        },

        /**
         * 删除一个 class
         * @param {Element} elm dom节点
         * @param {String} cls 名称
         */
        removeClass: function(elm, cls) {
            if (elm.className.length > cls.length) {
                cls = " " + cls;
            }
            elm.className = elm.className.replace(cls, "");
        },

        /**
         * 添加css样式
         * @param {Element} elm dom节点
         * @example
         * setStyle(elm, {
         * 	css: {
         * 		"width": "10px",
         * 		"height": "20px"
         * 	}
         * })
         */
        setCSS: function(elm, styles) {
            var setStyle = function(prop, val) {
                elm.style[prop] = val;
            };

            for (var prop in styles) {
                if (!styles.hasOwnProperty(prop)) continue;
                setStyle(prop, styles[prop]);
            }
        },

        /**
         * 返回节点的x/y座标
         * @param {Element} elm dom节点
         * @return {Object} 返回一个包含x/y座标的对象
         */
        offset: function(elm) {
            var left = 0;
            var top = 0;
            while (elm) {
                left += elm.offsetLeft;
                top += elm.offsetTop;
                elm = elm.offsetParent;
            }
            return {x: left, y: top};
        },

        /**
         * 返回节点的宽度
         * @param {Element} elm dom节点
         * @return {Number} 返回一个数字
         */
        width: function(elm) {
            var box = elm.getBoundingClientRect();
            return box.width || (box.right - box.left);
        },

        /**
         * 返回节点的高宽
         * @param {Element} elm dom节点
         * @return {Number} 返回一个数字
         */
        height: function(elm) {
            var box = elm.getBoundingClientRect();
            return box.height || (box.bottom - box.top);
        },

        /**
         * 返回对象在数组中的序号
         * @param {Object}
            * @param {Array}
            * @return {Number}
         */
        index: function(obj, arr) {
            for (var i = 0, len = arr.length; i < len; i++) {
                if (arr[i] === obj) {
                    return i;
                }
            }
        },

        /**
         * AJAX
         * @param {String} url 文件路径
         * @param {Function} success 文件请求成功后回调函数
         * @param {String} type POST/GET请求方式
         * @example
         * ajax({
         *     url: 'http://example.com/test.json',
         *     type: 'GET',
         *     success: function(data) {
         *         console.log(data);
         *     }
         * });
         */
        ajax: function(opt) {
            var XMLHttpFactories = [
                function () {return new XMLHttpRequest();},
                function () {return new ActiveXObject("Msxml2.XMLHTTP");},
                function () {return new ActiveXObject("Msxml3.XMLHTTP");},
                function () {return new ActiveXObject("Microsoft.XMLHTTP");}
            ];

            var req = (function() {
                var xmlhttp = false;
                for (var i = 0; i < XMLHttpFactories.length; i++) {
                    try {
                        xmlhttp = XMLHttpFactories[i]();
                    }
                    catch (e) {
                        continue;
                    }
                    break;
                }
                return xmlhttp;
            })();

            if (!req) {
                return;
            }

            req.open(opt.type, opt.url, true);
            req.setRequestHeader('User-Agent', 'XMLHTTP/1.0');

            if (opt.type) {
                req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            }

            req.onreadystatechange = function () {
                if (req.readyState != 4) return;
                if (req.status != 200 && req.status != 304) {
                    return;
                }
                opt.success(req.responseText);
            };

            if (req.readyState == 4) {
                return;
            }

            req.send(opt.type);
        },

        /**
         * 判断对象是否为数组
         * @param {Object} arr 对象
         */
        isArray: function(arr) {
            if (arr.pop && arr.push && arr.reverse && arr.shift && arr.sort &&
                arr.splice && arr.unshift && arr.concat && arr.join &&
                arr.slice) {
                return true;
            } else {
                return false;
            }
        },

        /**
         * 解码 Unicode
         */
        hexToDec: function(str) {
            str = str.replace(/\\/g,"%");
            return unescape(str).replace(/%/g, '');
        },

        /**
         * 取推广渠道ID
         */
        getDitchId:function() {
            var script = document.getElementsByTagName("script"),
                i,
                len,
                item,
                _id;
            for (i = 0, len = script.length; i < len; i++) {
                item = script[i];
                if (item.src && item.src.match(/_tts_browser_center/)) {
                    _id = script[i].src.match(new RegExp("[\?\&]id=([^\&]*)(\&?)", "i" ));
                    return _id ? _id[1] : "0000000000000000";
                }
            }
        },

        /**
         * 以名/值的形式存储cookie
         * 同时采用encodeURIComponent()函数进行编码，来转义分号、逗号和空白符
         * day是一个数字，代表天数，day是0就表示删除cookie
         * @param {String} name 名
         * @param {String} value 值
         * @param {String} day 天数
         * @param {String} path 路径(可选)
         * @param {String} domain 域(可选)
         */
        setCookie: function(opt) {
            var cookie = opt.name + '=' + encodeURIComponent(opt.value);
            if (typeof opt.day === 'number') {
                //IE不支持max-age，使用expires
                if (!-[1,]) {
                    var date = new Date();
                    date.setTime(new Date().getTime() + opt.day * 24 * 3600 * 1000);
                    cookie += '; expires=' + date.toGMTString();
                } else {
                    cookie += '; max-age=' + (opt.day * 60 * 60 * 24);
                }

                if (opt.path) {
                    cookie += '; path=' + opt.path;
                }
                if (opt.domain) {
                    cookie += '; domain=' + opt.domain;
                }
            }
            document.cookie = cookie;
        },

        /**
         * 将document.cookie的值以名/值对组成的一个对象返回
         */
        getCookie: function() {
            var cookie = {},
                all = document.cookie,
                list,
                i,
                len,
                item,
                index;

            if (all === '') {
                return cookie;
            }

            list = all.split('; ');

            for (i = 0, len = list.length; i < len; i++) {
                item = list[i];
                index = item.indexOf('=');
                cookie[item.substring(0, index)] = decodeURIComponent(item.substring(index + 1));
            }

            return cookie;
        }
    };

    if (!win.tts) {
        win.tts = tts;
    }
})(window);

/**
 * 渠道质量鉴定
 * 需求：http://199.155.122.167:8080/pages/viewpage.action?pageId=13369546
 */
(function(host) {
    var fromSite="";
    if(cpsParam){
        var cpsParam = host.split('/');
        fromSite=cpsParam[0];
    }else{
        fromSite=host;
    }
    if(fromSite!=""){
        var cpsParam = host.split('.');
        if(cpsParam.length>2){
            fromSite=cpsParam[cpsParam.length-2]+"."+cpsParam[cpsParam.length-1];
            if(cpsParam[cpsParam.length-4]){
                fromSite=cpsParam[cpsParam.length-3]+"."+fromSite;
            }
        }else{
            fromSite=host;
        }
        tts.loadJS('http://log.ttsunion.com/allSite.do?fromSite='+fromSite);
    }

    var fromSite_6="";
    if(host.match(/baidu.com/)){
        fromSite_6="baidu.com";
    }else if(host.match(/taobao.com/)){
        fromSite_6="taobao.com";
    }else if(host.match(/hao123.com/)){
        fromSite_6="hao123.com";
    }else if(host.match(/tmall.com/)){
        fromSite_6="tmall.com";
    }else if(host.match(/weibo.com/)){
        fromSite_6="weibo.com";
    }else if(host.match(/qq.com/)){
        fromSite_6="qq.com";
    }
    if (fromSite_6!="") {
        tts.loadJS('http://log.ttsunion.com/ditchSite.do?ditchId=' + tts.getDitchId()+"&fromSite="+fromSite_6);
    }
})(document.location.host);

(function(href, ua) {
    var version = new Date().getTime(),
        upai = 'http://ttsmedia.b0.upaiyun.com/js/',
        module,
        tts_browser,
        i,
        len,
        loadTB = true,
        ditch = tts.getDitchId();

    /**
     * 加载不同站点的js
     * @param {String|Array} site 站点名称，可以是字符串，也可以是数组
     * @param {String} filename js 文件
     */
    module = function(site, filename) {
        var url = (filename.match(/http/) ? filename : upai +  filename),
            i, len, item, domainMatch;

        //字符串转数组
        if (!tts.isArray(site)) site = [site];

        for (i = 0, len = site.length; i < len; i++) {
            item = site[i];
            if (href.match(item)) {
                tts.load(url + '?v=' + version);
            }
        }
    };

    //屏蔽来日官方渠道的360版本 （包含未带渠道的历史官方版本）  第三方渠道的360版本允许开放
    if((ua.match(/360EE/) || ua.match(/360SE/) ) &&
        (ditch === "0000000000000000" || ditch === "0002000220120525" || ditch === "0003000520120525")){
        loadTB = false;
    }
    //淘宝风格
    if (loadTB && !window.initialParam) {
        tts_browser = [
            'taobao.com',
            'tmall.com',
            'mogujie.com',
            'like.etao.com',
            'meilishuo.com'
        ];
        module(tts_browser, 'http://browser.re.taotaosou.com/js/tts_browser.js');
        module(tts_browser, 'http://browser.re.taotaosou.com/css/tts_plugin_sougou.css');
    }
    //针对资讯站，先载入main-list.js
    if (!href.match(/photo.39.net/)) {
        tts.load(upai + 'main-list.js');
    }

    //凤凰
    module('ifeng.com', 'ifeng/tts_ifeng.js');

    //网易
    module('163.com', '163/tts_163.js');

    //腾讯
    module('qq.com', 'qq/tts_qq.js');

    //新浪
    module('sina.com.cn', 'sina/tts_sina.js');

    //ELLE中国
    module('ellechina.com', 'ellechina/tts_ellechina.js');

    //瑞丽女性网
    module('rayli.com.cn', 'rayli/tts_rayli.js');

    //搜狐
    module('sohu.com', 'sohu/tts_sohu.js');

    //爱丽女性
    module(['.27.cn', '.aili.com'], 'aili/tts_aili.js');

    //YOKA时尚网
    module('yoka.com', 'yoka/tts_yoka.js');

    //39健康网
    module('photo.39.net', '39/tts_39.js');
})(document.location.href, navigator.userAgent);
