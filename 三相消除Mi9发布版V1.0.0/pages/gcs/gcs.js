export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.rv = ()=>"1.4.11";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.4.11";
                })();
                var $app_style$ = [
                    [
                        [
                            [
                                0,
                                "page"
                            ]
                        ],
                        {
                            width: "192px",
                            height: "490px",
                            backgroundColor: "#f0f8ff",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "result-container"
                            ]
                        ],
                        {
                            width: "180px",
                            paddingTop: "15px",
                            paddingRight: "0",
                            paddingBottom: "15px",
                            paddingLeft: "0",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "result-icon"
                            ]
                        ],
                        {
                            width: "64px",
                            height: "64px",
                            marginBottom: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "result-title"
                            ]
                        ],
                        {
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#333333",
                            marginBottom: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "passed-info"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#666666",
                            marginBottom: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "button-group"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn"
                            ]
                        ],
                        {
                            width: "140px",
                            height: "36px",
                            borderRadius: "18px",
                            fontSize: "16px",
                            color: "#ffffff",
                            marginBottom: "10px",
                            borderStyle: "none"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "next-level"
                            ]
                        ],
                        {
                            backgroundColor: "#4caf50"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "back-home"
                            ]
                        ],
                        {
                            backgroundColor: "#f44336"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            title: '游戏结束',
                            iconPath: '/common/image/lose.png',
                            status: 'lose',
                            passedCount: 0
                        },
                        onInit () {
                            if ('win' === this.status) {
                                this.title = '恭喜通关!';
                                this.iconPath = '/common/image/win.png';
                            } else {
                                this.title = '游戏失败';
                                this.iconPath = '/common/image/lose.png';
                            }
                        },
                        onRestartGame () {
                            _system.default.replace({
                                uri: '/pages/game'
                            });
                        },
                        onBackHome () {
                            _system.default.replace({
                                uri: '/pages/index'
                            });
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "page"
                            ]
                        }
                    }, [
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "result-container"
                                ]
                            }
                        }, [
                            aiot.__ce__("image", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "result-icon"
                                    ],
                                    src: function() {
                                        return _vm_.iconPath;
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "result-title"
                                    ],
                                    value: function() {
                                        return _vm_.title;
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "passed-info"
                                    ],
                                    value: function() {
                                        return "您已成功通关 " + _vm_.passedCount + " 次";
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "button-group"
                                    ]
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn",
                                            "next-level"
                                        ],
                                        type: "button",
                                        value: "开始新游戏",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onRestartGame(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn",
                                            "back-home"
                                        ],
                                        type: "button",
                                        value: "返回首页",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onBackHome(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ])
                        ])
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
