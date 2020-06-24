var index = 1;
var window = global;
// var _window = {};
// window_keys.forEach(function (item,index,arr) {
//     Object.defineProperty(window,item,{
//         get:function(){
//             // console.log('getting>>>>>>' + item, _window[item]);
//             return _window[item]
//         },
//         set:function (val) {
//             // console.log('setting>>>>>>' + item ,val);
//             _window[item] = val;
//     }
// })
// })
window.openDatabase = function () {
};
// window.eval.toString = function () {
//     return 'function eval() { [native code] }'
// };
window.webkitRequestFileSystem = function (name, one, two, three) {

};
window.addEventListener = function (ele, event, leva) {
    // console.log(ele,event,leva,'window');
    // event(this)
    // if(ele =='load'){
    //         event(window)
    //     }
    // event(window)
};
window.FileReader = function () {
};
window.FaveIconJavaInterface = undefined;
window.chrome = {runtime: undefined};
window.jesion = undefined;
window.localStorage = {
    removeItem: function (key) {
        delete this[key]
    },
    getItem: function (key) {
        return this[key] ? this[key] : null;
    },
    setItem: function (key, value) {
        this[key] = "" + value;
    },
};
window.toString = function () {
    return "[object Window]"
};
window.fetch = function () {
};
window.DOMParser = function (xx) {
    console.log('DOMParser', xx)
};
// window.ActiveXObject = function(name){return false};
window.types = "Chrome";
window.msCrypto = {};
window.msCredentials = undefined;

// window.globalStorage = null
// console.log(window.setTimeout)
window.sessionStorage = {
    getItem: function (key) {
        return this[key] ? this[key] : null;
    },
    setItem: function (key, value) {
        this[key] = "" + value;
    },
};
window.indexedDB = {
    open: function (id, password) {
        // console.log(id,password,'indexedDB')
        return {onerror: null, onupgradeneeded: null, onsuccess: null}
    }
};
window.$b_platform = null;
window.name = "";
window.$b_callHandler = function (name, f) {
};
window.escape = function (args) {
    return args
};
window.navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
    connection: {
        downlink: 10,
        effectiveType: "4g",
        onchange: null,
        rtt: 100,
        saveData: false
    },
    cookieEnabled: true,
    deviceMemory: 8,
    hardwareConcurrency: 4,
    language: "zh-CN",
    languages: ["zh-CN", "zh"],
    maxTouchPoints: 0,
    onLine: true,
    platform: "Win32",
    product: "Gecko",
    productSub: "20030107",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
    vendor: "Google Inc.",
    vendorSub: "",
    credentials: function () {
        return 'include'
    }(),
    mimeTypes: [{
        description: "",
        enabledPlugin: {
            description: "",
            filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai",
            length: 1,
            name: "Chrome PDF Viewer"
        },
        suffixes: "pdf",
        type: "application/pdf"
    }, {
        description: "Portable Document Format",
        enabledPlugin: {
            description: "Portable Document Format",
            filename: "internal-pdf-viewer",
            length: 1,
            name: "Chrome PDF Plugin"
        },
        suffixes: "pdf",
        type: "application/x-google-chrome-pdf"
    }, {
        description: "Native Client Executable",
        enabledPlugin: {description: "", filename: "internal-nacl-plugin", length: 2, name: "Native Client"},
        suffixes: "",
        type: "application/x-nacl"
    }, {
        description: "Portable Native Client Executable",
        enabledPlugin: {description: "", filename: "internal-nacl-plugin", length: 2, name: "Native Client"},
        suffixes: "",
        type: "application/x-pnacl"
    }],
    webkitPersistentStorage: {},
    standalone: undefined,
    getBattery: function () {
        return {
            then: function (f) {
            }
        }
    },
    openDatabase: function (mysql) {

    }
};
window.setInterval = function (kye1, kye2) {
    // kye1();
    console.log(kye1,kye2,'setIntervalsetInterval');
    if(kye2===2047){
        index  = index + 1;
        return index
    }
    // index = index + 1;
    // return index;
};
window.setTimeout = function(key1,key2){
    // if(key2!==50000){
    //     // key1();
    // }
    console.log(key1,key2,"setTimeoutsetTimeoutsetTimeout")
};
window.msCredentials = undefined;
window.document = {
    createElement: function (ele) {
        if (ele == 'div') {
            return {
                getElementsByTagName: function (name) {
                    if (name == 'i') {
                        return []
                    } else {
                        console.log('document-createElement-getElementsByTagName', name)
                    }
                },
                style: {visibility: 'hidden', position: 'absolute'},
                setAttribute: function (id, name) {
                    console.log(id, name, 'zzzzzzzzzzzzzzz')
                }
            }
        } else if (ele == 'a') {
            console.log(createElement, 'aaaaaa')
        } else {
            console.log('document-createElement', ele)
        }
    },
    getElementById: function (args) {
        if (args == '__anchor__') {
            return null
        } else if (args == 'a') {
            return {
                style: {visibility: 'hidden', position: 'absolute'},
                setAttribute: function (id, name) {
                    console.log(id, name, 'zzzzzzzzzzzzzzz')
                }
            }
        } else {
            console.log('document-getElementById', args)
        }
    },
    getElementsByTagName: function (args) {
        if (args == 'meta') {
            return [{
                content: %mate_content,
                parentNode: {
                    removeChild: function (args) {
                        return null
                    }
                }
            }]
        } else if (args == 'script') {
            return [{
                getAttribute: function (str) {
                    return ''
                },
                parentNode: {
                    removeChild: function (ele) {

                    }
                }
            }, {
                getAttribute: function (str) {
                    return ''
                },
                parentNode: {
                    removeChild: function (ele) {

                    }
                }
            }]
        } else if (args == 'base') {
            return []
        } else if (args == 'a') {
            return {
                style: {visibility: 'hidden', position: 'absolute'},
                setAttribute: function (id, name) {
                    console.log(id, name, 'zzzzzzzzzzzzzzz')
                }
            }
        } else {
            console.log('document-getElementsByTagName', args)
        }


    },
    addEventListener: function (ele, event, leva) {
        // event(0,window.document);
        // console.log(ele,event,leva,'doucment');
        // if(ele =='load'){
        //     event(window.document)
        // }
        // if(ele =='mousemove'){
        //     event(0,this)
        // }
        //     else if(ele =='mousedown'){
        //         event(1,this)
        //     }
        //     else if(ele =='mouseup'){
        //         event(2,this)
        //     }
        //     else if(ele =='mouseover'){
        //         event(3,this)
        //     }
        //     else if(ele =='mouseout'){
        //         event(4,this)
        //     }
        //     else if(ele =='keydown'){
        //         event(5,this)
        //     }
        //     else if(ele =='keyup'){
        //         event(6,this)
        //     }
        //     else if(ele =='input'){
        //         event(7,this)
        //     }
    },
    // addEventListener: false,
    characterSet: 'UTF-8',
    charset: 'UTF-8',
    write: function (ele) {
        window.document.body.firstChild.nextSibling.defaultValue = ele.match('value="(.*)">')[1];
        window.document.body.firstChild.nextSibling.value = ele.match('value="(.*)">')[1];
        window.document.body.firstChild.nextSibling.name = ele.match('name="(.*)" value=')[1];
        window.document.body.firstChild.nextSibling.outerHTML = ele
    },
    body: {
        tagName: "BODY",
        getAttribute: function (name) {
            if (name == 'onload') {
                return null
            } else if (name == 'onclick') {
                return null
            } else if (name == 'onsubmit') {
                return null
            } else {
                console.log('body-getAttribute', name)
            }
        },
        firstChild: {
            assignedSlot: null,
            baseURI: "http://wenshu.court.gov.cn",
            childNodes: [],
            data: "",
            firstChild: null,
            isConnected: true,
            lastChild: null,
            length: 1,
            nextElementSibling: {},
            nextSibling: {
                accept: "",
                accessKey: "",
                align: "",
                alt: "",
                attributeStyleMap: {size: 0},
                nextSibling: {
                    assignedSlot: null,
                    childNodes: [],
                    data: "",
                    firstChild: null,
                    isConnected: true,
                    lastChild: null,
                    length: 4,
                    nodeName: "#text",
                    nodeType: 3,
                    nodeValue: "",
                    textContent: "",
                    wholeText: ""
                },
                getAttribute: function (name) {
                    if (name == 'getAttribute') {
                        return null
                    } else if (name == 'onsubmit') {
                        return null
                    } else if (name == 'onclick') {
                        return null
                    } else {
                        console.log('firstChild-nextSibling-nextSibling', name)
                    }
                },
                autocapitalize: "",
                autocomplete: "",
                autofocus: false,
                checked: false,
                childElementCount: 0,
                className: "",
                clientHeight: 0,
                clientLeft: 0,
                clientTop: 0,
                clientWidth: 0,
                contentEditable: "inherit",
                defaultChecked: false,
                defaultValue: "",
                disabled: false,
                draggable: false,
                elementTiming: "",
                enterKeyHint: "",
                files: null,
                firstChild: null,
                firstElementChild: null,
                form: null,
                formEnctype: "",
                formMethod: "",
                formNoValidate: false,
                formTarget: "",
                height: 0,
                hidden: false,
                id: "__onload__",
                incremental: false,
                indeterminate: false,
                innerHTML: "",
                innerText: "",
                inputMode: "",
                isConnected: true,
                isContentEditable: false,
                labels: null,
                lang: "",
                lastChild: null,
                lastElementChild: null,
                list: null,
                localName: "input",
                max: "",
                maxLength: -1,
                min: "",
                minLength: -1,
                multiple: false,
                name: "",
                namespaceURI: "http://www.w3.org/1999/xhtml",
                nodeName: "INPUT",
                nodeType: 1,
                nonce: "",
                outerHTML: '',
                outerText: "",
                pattern: "",
                placeholder: "",
                prefix: null,
                previousElementSibling: null,
                readOnly: false,
                required: false,
                scrollHeight: 0,
                scrollLeft: 0,
                scrollTop: 0,
                scrollWidth: 0,
                selectionDirection: null,
                selectionEnd: null,
                selectionStart: null,
                shadowRoot: null,
                size: 20,
                slot: "",
                spellcheck: true,
                src: "",
                step: "",
                tabIndex: 0,
                tagName: "INPUT",
                textContent: "",
                title: "",
                translate: true,
                type: "hidden",
                useMap: "",
                validationMessage: "",
                value: ""
            },
            nodeName: "#text",
            nodeType: 3,
            nodeValue: "",
            ownerDocument: {},
            parentElement: {},
            parentNode: {},
            previousElementSibling: null,
            previousSibling: null,
            textContent: "",
            wholeText: ""
        }
    },
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
    documentElement: {style: []},
    msCredentials: undefined,
    exitFullscreen: function () {

    }
};
window.location = {
    ancestorOrigins: {length: 0},
    assign: {length: 1, name: 'assign'},
    fragmentDirective: {},
    hash: '',
    host: 'wenshu.court.gov.cn',
    hostname: 'wenshu.court.gov.cn',
    href: 'http://wenshu.court.gov.cn/website/wenshu/181217BMTKHNT2W0/index.html?pageId=5dada12c3bddd85e024547c3ccd7d537&s8=03',
    origin: 'http://wenshu.court.gov.cn',
    pathname: '/website/wenshu/181217BMTKHNT2W0/index.html',
    port: '',
    protocol: 'http:',
    search: '?pageId=5dada12c3bddd85e024547c3ccd7d537&s8=03',
    toString: function () {
        return "http://wenshu.court.gov.cn/website/wenshu/181217BMTKHNT2W0/index.html?pageId=5dada12c3bddd85e024547c3ccd7d537&s8=03"
    },
    Math: Math
};
window.XMLHttpRequest = function () {

};
window.top = window;
window.self = window;
window.Math = Math;
window.TEMPORARY = 0;
window.clientInformation = window.navigator;
window.origin = "http://wenshu.court.gov.cn";
String.prototype.split.call = function (str, split) {
    // console.log(str,split);
    // console.log(str.split(split),'9877');
    return str.split(split)
};
String.prototype.indexOf.call = function (str, split) {
    if (str === undefined) {
        return -1
    }
    return str.indexOf(split)
};
Function = function (f) {
    if (f.indexOf('window instanceof Window') != -1) {
        return function () {
            return true
        }
    } else {
        return function () {
            return undefined
        }
    }

};
%$_ts