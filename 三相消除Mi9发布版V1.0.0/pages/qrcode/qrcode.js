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
                                "qrPage"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#000000",
                            paddingTop: "10px",
                            paddingRight: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qr-title"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            color: "#ffffff",
                            fontWeight: "bold",
                            marginTop: "10px",
                            marginRight: "0",
                            marginBottom: "10px",
                            marginLeft: "0"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "swiper"
                            ]
                        ],
                        {
                            width: "100%",
                            height: "350px",
                            marginTop: "10px",
                            marginRight: "0",
                            marginBottom: "10px",
                            marginLeft: "0",
                            indicatorColor: "#8f8f8f",
                            indicatorSelectedColor: "#3498db"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "swiper-item"
                            ]
                        ],
                        {
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qr-container"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            width: "100%"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qr-label"
                            ]
                        ],
                        {
                            fontSize: "16px",
                            color: "#aaaaaa",
                            marginBottom: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qr-code"
                            ]
                        ],
                        {
                            width: "165px",
                            height: "165px",
                            backgroundColor: "#ffffff",
                            borderTopColor: "#ffffff",
                            borderRightColor: "#ffffff",
                            borderBottomColor: "#ffffff",
                            borderLeftColor: "#ffffff",
                            borderStyle: "solid",
                            borderTopWidth: "8px",
                            borderRightWidth: "8px",
                            borderBottomWidth: "8px",
                            borderLeftWidth: "8px",
                            borderRadius: "15px",
                            marginBottom: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qr-code2"
                            ]
                        ],
                        {
                            width: "165px",
                            height: "165px",
                            top: "-9px",
                            backgroundColor: "#ffffff",
                            borderTopColor: "#ffffff",
                            borderRightColor: "#ffffff",
                            borderBottomColor: "#ffffff",
                            borderLeftColor: "#ffffff",
                            borderStyle: "solid",
                            borderTopWidth: "8px",
                            borderRightWidth: "8px",
                            borderBottomWidth: "8px",
                            borderLeftWidth: "8px",
                            borderRadius: "15px",
                            marginBottom: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qr-url"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#3498db",
                            textAlign: "center",
                            fontWeight: "bold",
                            marginTop: "10px",
                            wordBreak: "break-all",
                            width: "90%"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qr-code-text"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#3498db",
                            textAlign: "center",
                            fontWeight: "bold",
                            marginTop: "10px",
                            wordBreak: "break-all",
                            width: "90%"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "back-button"
                            ]
                        ],
                        {
                            width: "120px",
                            height: "40px",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#3498db",
                            borderRadius: "20px",
                            marginTop: "10px",
                            marginRight: "0",
                            marginBottom: "10px",
                            marginLeft: "0"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "back-button"
                            ],
                            [
                                2,
                                "text"
                            ]
                        ],
                        {
                            color: "#ffffff",
                            fontSize: "16px"
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
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            tutorialQRCode: '',
                            deviceQRCode: '',
                            deviceCode: ''
                        },
                        onInit () {
                            this.deviceCode = this.$page.params.deviceCode || '';
                            if (!this.deviceCode) _system2.default.get({
                                key: 'deviceCode',
                                success: (data)=>{
                                    if (data) this.deviceCode = data;
                                }
                            });
                        },
                        goBack () {
                            _system.default.back();
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
                                "qrPage"
                            ]
                        }
                    }, [
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "qr-title"
                                ],
                                value: "←激活附件→"
                            }
                        }, []),
                        aiot.__ce__("swiper", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "swiper"
                                ],
                                indicator: "true"
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "swiper-item"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "qr-container"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "qr-label"
                                            ],
                                            value: "使用教程/购买"
                                        }
                                    }, []),
                                    aiot.__ce__("qrcode", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            value: "https://store.matrixfive.online/",
                                            classList: [
                                                "qr-code"
                                            ]
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "qr-url"
                                            ],
                                            value: "https://store.matrixfive.online/"
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "swiper-item"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "qr-container"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "qr-label"
                                            ],
                                            value: "设备识别码"
                                        }
                                    }, []),
                                    aiot.__ce__("qrcode", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            value: function() {
                                                return _vm_.deviceCode;
                                            },
                                            classList: [
                                                "qr-code2"
                                            ]
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "qr-code-text"
                                            ],
                                            value: function() {
                                                return _vm_.deviceCode;
                                            }
                                        }
                                    }, [])
                                ])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "back-button"
                                ],
                                events: {
                                    click: function(evt) {
                                        return _vm_.goBack(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    value: "返回"
                                }
                            }, [])
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
