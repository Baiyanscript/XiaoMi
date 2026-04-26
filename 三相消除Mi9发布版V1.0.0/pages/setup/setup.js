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
                            flexDirection: "column",
                            alignItems: "center",
                            paddingTop: "15px",
                            paddingRight: "10px",
                            paddingBottom: "15px",
                            paddingLeft: "10px",
                            backgroundColor: "#1a1a2e"
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
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#4ecca3",
                            marginBottom: "20px",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "settings-container"
                            ]
                        ],
                        {
                            width: "100%",
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "setting-item"
                            ]
                        ],
                        {
                            width: "170px",
                            paddingTop: "12px",
                            paddingRight: "12px",
                            paddingBottom: "12px",
                            paddingLeft: "12px",
                            backgroundColor: "rgba(35, 35, 45, 0.8)",
                            borderRadius: "10px",
                            marginBottom: "15px",
                            borderTopColor: "#393e46",
                            borderRightColor: "#393e46",
                            borderBottomColor: "#393e46",
                            borderLeftColor: "#393e46",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "difficulty-item"
                            ]
                        ],
                        {
                            height: "90px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "card-count-item"
                            ]
                        ],
                        {
                            height: "120px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "item-label"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#eeeeee",
                            marginBottom: "10px",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "radio-group"
                            ]
                        ],
                        {
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "radio-option"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            paddingTop: "5px",
                            paddingRight: "8px",
                            paddingBottom: "5px",
                            paddingLeft: "8px",
                            borderRadius: "8px",
                            backgroundColor: "rgba(57, 62, 70, 0.5)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "radio"
                            ]
                        ],
                        {
                            width: "18px",
                            height: "18px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "radio-label"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#cccccc",
                            marginTop: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "fixed-count-container"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            marginTop: "15px",
                            width: "100%"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-adjust"
                            ]
                        ],
                        {
                            width: "30px",
                            height: "30px",
                            borderRadius: "15px",
                            fontSize: "18px",
                            color: "#ffffff",
                            backgroundColor: "#4ecca3",
                            borderStyle: "none",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "count-display"
                            ]
                        ],
                        {
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#eeeeee"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "switch"
                            ]
                        ],
                        {
                            width: "40px",
                            height: "20px",
                            position: "absolute",
                            right: "12px",
                            bottom: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "button-container"
                            ]
                        ],
                        {
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "10px"
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
                            width: "70px",
                            height: "35px",
                            borderRadius: "8px",
                            fontSize: "14px",
                            color: "#ffffff",
                            borderStyle: "none"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "save-btn"
                            ]
                        ],
                        {
                            backgroundColor: "#4ecca3"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "back-btn"
                            ]
                        ],
                        {
                            backgroundColor: "#6c757d"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                    var _system3 = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    const SETTINGS_KEY = "gameSettings";
                    var _default = exports.default = {
                        private: {
                            difficulty: "random",
                            vibration: false,
                            keepScreenOn: false,
                            cardCountMode: 'random',
                            fixedCardCount: 4,
                            difficultyOptions: [
                                {
                                    value: "random",
                                    label: "随机"
                                },
                                {
                                    value: "dynamic",
                                    label: "动态"
                                }
                            ],
                            cardCountOptions: [
                                {
                                    value: 'random',
                                    label: '随机'
                                },
                                {
                                    value: 'fixed',
                                    label: '固定'
                                }
                            ]
                        },
                        onInit () {
                            this.loadSettings();
                        },
                        loadSettings () {
                            _system.default.get({
                                key: SETTINGS_KEY,
                                success: (data)=>{
                                    if (data) {
                                        try {
                                            const settings = JSON.parse(data);
                                            this.difficulty = settings.difficulty || "random";
                                            this.vibration = settings.vibration || false;
                                            this.keepScreenOn = settings.keepScreenOn || false;
                                            this.cardCountMode = settings.cardCountMode || 'random';
                                            this.fixedCardCount = settings.fixedCardCount || 4;
                                        } catch (e) {
                                            console.log("解析设置失败");
                                        }
                                    }
                                }
                            });
                        },
                        onDifficultyChange (e) {
                            this.difficulty = e.value;
                        },
                        onVibrationChange (e) {
                            this.vibration = e.checked;
                        },
                        onKeepScreenOnChange (e) {
                            this.keepScreenOn = e.checked;
                        },
                        onCardCountModeChange (e) {
                            this.cardCountMode = e.value;
                        },
                        adjustCardCount (amount) {
                            let newCount = this.fixedCardCount + amount;
                            if (newCount >= 4 && newCount <= 8) this.fixedCardCount = newCount;
                        },
                        onSave () {
                            const settings = {
                                difficulty: this.difficulty,
                                vibration: this.vibration,
                                keepScreenOn: this.keepScreenOn,
                                cardCountMode: this.cardCountMode,
                                fixedCardCount: this.fixedCardCount
                            };
                            _system.default.set({
                                key: SETTINGS_KEY,
                                value: JSON.stringify(settings),
                                success: ()=>{
                                    _system2.default.showToast({
                                        message: "设置已保存"
                                    });
                                },
                                fail: (data, code)=>{
                                    _system2.default.showToast({
                                        message: `保存失败: ${code}`
                                    });
                                }
                            });
                        },
                        onBack () {
                            _system3.default.back();
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
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "title"
                                ],
                                value: "游戏设置"
                            }
                        }, []),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "settings-container"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "setting-item",
                                        "difficulty-item"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "item-label"
                                        ],
                                        value: "游戏难度"
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "radio-group"
                                        ]
                                    }
                                }, [
                                    aiot.__cf__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            exp: function() {
                                                return _vm_.difficultyOptions;
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
                                                        "radio-option"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("input", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "radio"
                                                        ],
                                                        type: "radio",
                                                        name: "difficulty",
                                                        value: function() {
                                                            return $item.value;
                                                        },
                                                        checked: function() {
                                                            return _vm_.difficulty === $item.value;
                                                        },
                                                        events: {
                                                            change: function(evt) {
                                                                return _vm_.onDifficultyChange(evt);
                                                            }
                                                        }
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "radio-label"
                                                        ],
                                                        value: function() {
                                                            return $item.label;
                                                        }
                                                    }
                                                }, [])
                                            ])
                                        ];
                                    })
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "setting-item",
                                        "card-count-item"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "item-label"
                                        ],
                                        value: "卡牌种类数量"
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "radio-group"
                                        ]
                                    }
                                }, [
                                    aiot.__cf__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            exp: function() {
                                                return _vm_.cardCountOptions;
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
                                                        "radio-option"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("input", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "radio"
                                                        ],
                                                        type: "radio",
                                                        name: "cardCount",
                                                        value: function() {
                                                            return $item.value;
                                                        },
                                                        checked: function() {
                                                            return _vm_.cardCountMode === $item.value;
                                                        },
                                                        events: {
                                                            change: function(evt) {
                                                                return _vm_.onCardCountModeChange(evt);
                                                            }
                                                        }
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "radio-label"
                                                        ],
                                                        value: function() {
                                                            return $item.label;
                                                        }
                                                    }
                                                }, [])
                                            ])
                                        ];
                                    })
                                ]),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "fixed" === _vm_.cardCountMode;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "fixed-count-container"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("input", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "btn-adjust"
                                                    ],
                                                    type: "button",
                                                    value: "-",
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.adjustCardCount(-1, evt);
                                                        }
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "count-display"
                                                    ],
                                                    value: function() {
                                                        return _vm_.fixedCardCount;
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("input", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "btn-adjust"
                                                    ],
                                                    type: "button",
                                                    value: "+",
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.adjustCardCount(1, evt);
                                                        }
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
                                        "setting-item"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "item-label"
                                        ],
                                        value: "消除时震动"
                                    }
                                }, []),
                                aiot.__ce__("switch", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "switch"
                                        ],
                                        checked: function() {
                                            return _vm_.vibration;
                                        },
                                        events: {
                                            change: function(evt) {
                                                return _vm_.onVibrationChange(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "setting-item"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "item-label"
                                        ],
                                        value: "保持屏幕常亮"
                                    }
                                }, []),
                                aiot.__ce__("switch", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "switch"
                                        ],
                                        checked: function() {
                                            return _vm_.keepScreenOn;
                                        },
                                        events: {
                                            change: function(evt) {
                                                return _vm_.onKeepScreenOnChange(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "button-container"
                                    ]
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn",
                                            "back-btn"
                                        ],
                                        type: "button",
                                        value: "返回",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onBack(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn",
                                            "save-btn"
                                        ],
                                        type: "button",
                                        value: "保存",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onSave(evt);
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
