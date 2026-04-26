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
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
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
                                "activationPage"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#000000",
                            paddingTop: "5px",
                            paddingRight: "5px",
                            paddingBottom: "5px",
                            paddingLeft: "5px",
                            boxSizing: "border-box"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "content-container"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            boxSizing: "border-box"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "loading"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "loading-text"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#ffffff",
                            animation: "blink 1s infinite"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "icon"
                            ]
                        ],
                        {
                            width: "40px",
                            height: "40px",
                            borderRadius: "8px",
                            marginBottom: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "activation-title"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#ffffff",
                            fontWeight: "bold",
                            marginBottom: "5px",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "device-code-container"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: "5px",
                            backgroundColor: "rgba(30, 30, 40, 0.8)",
                            paddingTop: "5px",
                            paddingRight: "5px",
                            paddingBottom: "5px",
                            paddingLeft: "5px",
                            borderRadius: "5px",
                            maxWidth: "95%"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "code-label"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#aaaaaa"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "device-code"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            fontWeight: "bold",
                            color: "#3498db",
                            letterSpacing: "1px",
                            marginLeft: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "activation-input-container"
                            ]
                        ],
                        {
                            width: "95%",
                            marginBottom: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "activation-input"
                            ]
                        ],
                        {
                            width: "100%",
                            height: "35px",
                            fontSize: "14px",
                            textAlign: "center",
                            backgroundColor: "rgba(20, 20, 30, 0.8)",
                            borderTopColor: "#3498db",
                            borderRightColor: "#3498db",
                            borderBottomColor: "#3498db",
                            borderLeftColor: "#3498db",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "5px",
                            color: "#ffffff",
                            placeholderColor: "#555555"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "keyboard"
                            ]
                        ],
                        {
                            width: "95%",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "key-row"
                            ]
                        ],
                        {
                            width: "100%",
                            justifyContent: "space-between",
                            marginBottom: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "key"
                            ]
                        ],
                        {
                            width: "30%",
                            height: "38px",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(40, 40, 60, 0.8)",
                            borderRadius: "5px",
                            fontSize: "14px",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "key-special"
                            ]
                        ],
                        {
                            backgroundColor: "rgba(52, 152, 219, 0.5)",
                            fontSize: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "activation-result"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            marginTop: "5px",
                            textAlign: "center",
                            width: "100%",
                            height: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qr-button"
                            ]
                        ],
                        {
                            width: "90%",
                            height: "35px",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#3498db",
                            borderRadius: "5px",
                            marginTop: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qr-button"
                            ],
                            [
                                2,
                                "text"
                            ]
                        ],
                        {
                            color: "#ffffff",
                            fontSize: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "support-info"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#aaaaaa",
                            marginTop: "10px",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                3,
                                "blink"
                            ]
                        ],
                        {
                            keyframes: "[{\"time\":0,\"opacity\":0.7},{\"time\":50,\"opacity\":1}]"
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
                    var _system3 = _interopRequireDefault($app_require$1("@app-module/system.device"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            deviceCode: "",
                            activationCode: "",
                            resultMessage: "",
                            resultStyle: "",
                            keys1: [
                                "1",
                                "2",
                                "3"
                            ],
                            keys2: [
                                "4",
                                "5",
                                "6"
                            ],
                            keys3: [
                                "7",
                                "8",
                                "9"
                            ],
                            pageStyle: "font-size: 12px; height: 100%;",
                            isChecking: true,
                            isActivated: false
                        },
                        onInit () {
                            _system3.default.getInfo({
                                success: (ret)=>{
                                    console.log(`Screen width: ${ret.screenWidth}, height: ${ret.screenHeight}`);
                                    if (ret.screenWidth <= 200 && ret.screenHeight <= 500) this.pageStyle = "font-size: 12px; height: 100%;";
                                    else this.pageStyle = "font-size: 14px; height: 100%;";
                                },
                                fail: (data, code)=>{
                                    console.log(`Get device info fail: ${code}`);
                                    this.pageStyle = "font-size: 12px; height: 100%;";
                                }
                            });
                            this.isChecking = true;
                            _system2.default.get({
                                key: "activated",
                                success: (data)=>{
                                    if ("true" === data) {
                                        this.isActivated = true;
                                        setTimeout(()=>{
                                            this.jumpToMain();
                                        }, 1000);
                                    } else this.generateDeviceCode();
                                    this.isChecking = false;
                                },
                                fail: ()=>{
                                    this.generateDeviceCode();
                                    this.isChecking = false;
                                }
                            });
                        },
                        generateDeviceCode () {
                            _system2.default.get({
                                key: "deviceCode",
                                success: (data)=>{
                                    if (data) this.deviceCode = data;
                                    else this.createDeviceCode();
                                },
                                fail: ()=>{
                                    this.createDeviceCode();
                                }
                            });
                        },
                        createDeviceCode () {
                            const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                            let code = "";
                            for(let i = 0; i < 6; i++){
                                const randomIndex = Math.floor(Math.random() * chars.length);
                                code += chars[randomIndex];
                            }
                            this.deviceCode = code;
                            _system2.default.set({
                                key: "deviceCode",
                                value: code
                            });
                        },
                        handleKeyPress (key) {
                            if (this.activationCode.length < 8) this.activationCode += key;
                        },
                        clearInput () {
                            this.activationCode = "";
                            this.resultMessage = "";
                            this.resultStyle = "";
                        },
                        validateCode () {
                            if (8 !== this.activationCode.length) return void this.showResult("请输入8位激活码", "error");
                            const validCode = this.calculateActivationCode(this.deviceCode);
                            if (this.activationCode === validCode) {
                                this.showResult("激活成功！正在启动...", "success");
                                _system2.default.set({
                                    key: "activated",
                                    value: "true",
                                    success: ()=>{
                                        setTimeout(()=>{
                                            _system.default.replace({
                                                uri: "pages/index"
                                            });
                                        }, 1500);
                                    }
                                });
                            } else this.showResult("激活码无效，请重新输入", "error");
                        },
                        calculateActivationCode (deviceCode) {
                            let seed = 0;
                            for(let i = 0; i < deviceCode.length; i++){
                                const charCode = deviceCode.charCodeAt(i);
                                seed = (37 * seed + charCode) % 100000000;
                            }
                            const salt = "FIXED_SALT_123";
                            for(let i = 0; i < salt.length; i++)seed = (31 * seed + salt.charCodeAt(i)) % 100000000;
                            let result = seed.toString().padStart(8, "0");
                            if (result.length > 8) result = result.slice(-8);
                            return result;
                        },
                        showResult (message, type) {
                            this.resultMessage = message;
                            this.resultStyle = "success" === type ? "color: #2ecc71;" : "color: #e74c3c;";
                        },
                        jumpToMain () {
                            _system.default.replace({
                                uri: "pages/index"
                            });
                        },
                        routerQrcode () {
                            _system.default.push({
                                uri: "pages/qrcode",
                                params: {
                                    deviceCode: this.deviceCode
                                }
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
                                "activationPage"
                            ],
                            style: function() {
                                return __webpack_require__.g.$translateStyle$(_vm_.pageStyle);
                            }
                        }
                    }, [
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.isChecking || _vm_.isActivated;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "loading"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "loading-text"
                                            ],
                                            value: "加载中..."
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return !(_vm_.isChecking || _vm_.isActivated);
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "content-container"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "icon"
                                            ],
                                            src: "/common/logo.png"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "activation-title"
                                            ],
                                            value: "请您先激活"
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "device-code-container"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "code-label"
                                                ],
                                                value: "您的设备码："
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "device-code"
                                                ],
                                                value: function() {
                                                    return _vm_.deviceCode;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "activation-input-container"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("input", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "activation-input"
                                                ],
                                                type: "text",
                                                value: function() {
                                                    return _vm_.activationCode;
                                                },
                                                placeholder: "输入8位激活码",
                                                maxlength: "8",
                                                disabled: true
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "keyboard"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "key-row"
                                                ]
                                            }
                                        }, [
                                            aiot.__cf__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    exp: function() {
                                                        return _vm_.keys1;
                                                    },
                                                    key: "$idx",
                                                    value: "$item"
                                                }
                                            }, function($idx, $item) {
                                                return [
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "key"
                                                            ],
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.handleKeyPress($item, evt);
                                                                }
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                value: function() {
                                                                    return $item;
                                                                }
                                                            }
                                                        }, [])
                                                    ])
                                                ];
                                            })
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "key-row"
                                                ]
                                            }
                                        }, [
                                            aiot.__cf__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    exp: function() {
                                                        return _vm_.keys2;
                                                    },
                                                    key: "$idx",
                                                    value: "$item"
                                                }
                                            }, function($idx, $item) {
                                                return [
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "key"
                                                            ],
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.handleKeyPress($item, evt);
                                                                }
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                value: function() {
                                                                    return $item;
                                                                }
                                                            }
                                                        }, [])
                                                    ])
                                                ];
                                            })
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "key-row"
                                                ]
                                            }
                                        }, [
                                            aiot.__cf__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    exp: function() {
                                                        return _vm_.keys3;
                                                    },
                                                    key: "$idx",
                                                    value: "$item"
                                                }
                                            }, function($idx, $item) {
                                                return [
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "key"
                                                            ],
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.handleKeyPress($item, evt);
                                                                }
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                value: function() {
                                                                    return $item;
                                                                }
                                                            }
                                                        }, [])
                                                    ])
                                                ];
                                            })
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "key-row"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "key",
                                                        "key-special"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.clearInput(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        value: "清除"
                                                    }
                                                }, [])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "key"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.handleKeyPress("0", evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        value: "0"
                                                    }
                                                }, [])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "key",
                                                        "key-special"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.validateCode(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        value: "激活"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ]),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "activation-result"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.resultStyle);
                                            },
                                            value: function() {
                                                return _vm_.resultMessage;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "qr-button"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.routerQrcode(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                value: "查看附件"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "support-info"
                                            ],
                                            value: "技术支持QQ: 3985886671"
                                        }
                                    }, [])
                                ])
                            ];
                        })
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
