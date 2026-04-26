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
                                "demo-page"
                            ]
                        ],
                        {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "rgb(0, 0, 0)",
                            width: "466px",
                            height: "490px",
                            color: "white",
                            position: "relative"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title"
                            ]
                        ],
                        {
                            fontSize: "25px",
                            textAlign: "center",
                            fontWeight: "bold",
                            marginTop: "30px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "caidan"
                            ]
                        ],
                        {
                            fontSize: "50px",
                            fontWeight: "bold",
                            top: "40px"
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
                            width: "160px",
                            height: "65px",
                            marginTop: "20px",
                            borderRadius: "22px",
                            backgroundColor: "#292929ef",
                            fontSize: "20px",
                            color: "#ffffff",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#292929d2",
                            borderRightColor: "#292929d2",
                            borderBottomColor: "#292929d2",
                            borderLeftColor: "#292929d2"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "time-container"
                            ]
                        ],
                        {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            width: "100%",
                            height: "80px",
                            position: "absolute",
                            top: 0,
                            fontWeight: "bold",
                            marginTop: "-25px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "time"
                            ]
                        ],
                        {
                            fontSize: "30px",
                            fontWeight: 600,
                            color: "white",
                            marginTop: "0",
                            marginRight: "2px",
                            marginBottom: "0",
                            marginLeft: "2px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "rotate-left"
                            ]
                        ],
                        {
                            transform: "{\"rotate\":\"-21deg\"}",
                            left: "-6px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "rotate-small-left"
                            ]
                        ],
                        {
                            transform: "{\"rotate\":\"-9deg\"}",
                            top: "-8.8px",
                            left: "-2.5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "colon"
                            ]
                        ],
                        {
                            transform: "{}",
                            top: "-13.8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "rotate-small-right"
                            ]
                        ],
                        {
                            transform: "{\"rotate\":\"9deg\"}",
                            top: "-11.9px",
                            left: "4.5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "rotate-right"
                            ]
                        ],
                        {
                            transform: "{\"rotate\":\"21deg\"}",
                            top: "-5.8px",
                            left: "8.5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "activation-error"
                            ]
                        ],
                        {
                            position: "absolute",
                            bottom: "20px",
                            left: "50%",
                            transform: "{\"translateX\":\"-50%\"}",
                            backgroundColor: "rgba(231, 76, 60, 0.8)",
                            paddingTop: "10px",
                            paddingRight: "15px",
                            paddingBottom: "10px",
                            paddingLeft: "15px",
                            borderRadius: "10px",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            width: "80%"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "error-text"
                            ]
                        ],
                        {
                            fontSize: "16px",
                            color: "#ffffff",
                            fontWeight: "bold",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "error-subtext"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#ffffff",
                            textAlign: "center",
                            marginTop: "5px"
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
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.app"));
                    var _system3 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    var _system4 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            title: "示例页面",
                            time: [
                                "0",
                                "0",
                                "0",
                                "0"
                            ],
                            isActivated: false,
                            showActivationError: false
                        },
                        onInit () {
                            this.checkActivationStatus();
                            this.updateTime();
                            setInterval(()=>this.updateTime(), 60000);
                        },
                        checkActivationStatus () {
                            _system3.default.get({
                                key: "activated",
                                success: (data)=>{
                                    this.isActivated = "true" === data;
                                },
                                fail: ()=>{
                                    this.isActivated = false;
                                }
                            });
                        },
                        updateTime () {
                            const now = new Date();
                            const hours = now.getHours().toString().padStart(2, "0");
                            const minutes = now.getMinutes().toString().padStart(2, "0");
                            this.time = [
                                hours[0],
                                hours[1],
                                minutes[0],
                                minutes[1]
                            ];
                        },
                        routeGame () {
                            if (!this.isActivated) {
                                this.showActivationError = true;
                                _system4.default.showToast({
                                    message: "软件疑似破解行为，请使用正版！",
                                    duration: 3000
                                });
                                setTimeout(()=>{
                                    this.showActivationError = false;
                                }, 3000);
                                return;
                            }
                            _system.default.push({
                                uri: "/pages/game"
                            });
                        },
                        routeSetup () {
                            _system.default.push({
                                uri: "/pages/setup"
                            });
                        },
                        routeAbout () {
                            _system.default.push({
                                uri: "/pages/about"
                            });
                        },
                        onBackPress () {
                            _system2.default.terminate();
                            return true;
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
                                "demo-page"
                            ]
                        }
                    }, [
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "time-container"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "time",
                                        "rotate-left"
                                    ],
                                    value: function() {
                                        return _vm_.time[0];
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "time",
                                        "rotate-small-left"
                                    ],
                                    value: function() {
                                        return _vm_.time[1];
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "time",
                                        "colon"
                                    ],
                                    value: ":"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "time",
                                        "rotate-small-right"
                                    ],
                                    value: function() {
                                        return _vm_.time[2];
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "time",
                                        "rotate-right"
                                    ],
                                    value: function() {
                                        return _vm_.time[3];
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "title"
                                ],
                                value: "三相消除"
                            }
                        }, []),
                        aiot.__ce__("input", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "btn"
                                ],
                                type: "button",
                                value: "GO'",
                                events: {
                                    click: function(evt) {
                                        return _vm_.routeGame(evt);
                                    }
                                }
                            }
                        }, []),
                        aiot.__ce__("input", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "btn"
                                ],
                                type: "button",
                                value: "设置",
                                events: {
                                    click: function(evt) {
                                        return _vm_.routeSetup(evt);
                                    }
                                }
                            }
                        }, []),
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "caidan"
                                ],
                                events: {
                                    click: function(evt) {
                                        return _vm_.routeAbout(evt);
                                    }
                                },
                                value: "..."
                            }
                        }, [])
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
