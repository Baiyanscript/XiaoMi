export default function (t, e, i, o, n) {
    var s = $app_require$;
    !function (t, e, i, o, n) {
        var r = t.setTimeout;
        t.setInterval,
        t.clearTimeout,
        t.clearInterval;
        var _ = t.$app_require$ || s,
        a = function (t) {
            return "string" == typeof t ? Object.fromEntries(t.split(";").filter(t => !!(t && t.trim())).map(t => {
                    let e = t.match(/([^:]+):(.*)/);
                    return e && e.length > 2 ? [e[1].trim().replace(/-([a-z])/g, (t, e) => e.toUpperCase()), e[2].trim()] : []
                })) : t
        };
        (() => {
            var t,
            e,
            i,
            n = {
                646: function (t) {
                    var e = [[[[0, "page"]], {
                                width: "100%",
                                position: "absolute",
                                left: 0,
                                bottom: 0
                            }
                        ], [[[0, "item"]], {
                                height: "52px",
                                flex: 1
                            }
                        ], [[[0, "calbtn0"]], {
                                color: "#fff",
                                fontSize: "28px",
                                backgroundColor: "rgba(38,38,38,0)",
                                borderRadius: 0,
                                height: "52px",
                                width: "52px",
                                textAlign: "center"
                            }
                        ], [[[0, "calbtn02"]], {
                                color: "rgb(255,255,255)",
                                backgroundColor: "rgba(38,38,38,0)",
                                borderRadius: "0px",
                                fontSize: "32px",
                                textAlign: "center",
                                height: "42px"
                            }
                        ], [[[0, "calbtnfull"]], {
                                color: "#fff",
                                fontSize: "24px",
                                fontWeight: "bold",
                                backgroundColor: "#262626",
                                borderRadius: "12px",
                                marginRight: "4px",
                                height: "52px",
                                width: "40px",
                                textAlign: "center",
                                borderTopColor: "rgba(255,255,255,0.06)",
                                borderRightColor: "rgba(255,255,255,0.06)",
                                borderBottomColor: "rgba(255,255,255,0.06)",
                                borderLeftColor: "rgba(255,255,255,0.06)",
                                borderStyle: "solid",
                                borderTopWidth: "3px",
                                borderRightWidth: "3px",
                                borderBottomWidth: "3px",
                                borderLeftWidth: "3px"
                            }
                        ], [[[0, "calbtnt9"]], {
                                color: "#fff",
                                fontSize: "25px",
                                fontWeight: "bold",
                                backgroundColor: "#262626",
                                borderRadius: "999px",
                                marginRight: "4px",
                                width: "94px",
                                height: "60px",
                                textAlign: "center",
                                borderTopColor: "rgba(255,255,255,0.06)",
                                borderRightColor: "rgba(255,255,255,0.06)",
                                borderBottomColor: "rgba(255,255,255,0.06)",
                                borderLeftColor: "rgba(255,255,255,0.06)",
                                borderStyle: "solid",
                                borderTopWidth: "3px",
                                borderRightWidth: "3px",
                                borderBottomWidth: "3px",
                                borderLeftWidth: "3px"
                            }
                        ], [[[0, "caltext"]], {
                                textAlign: "left",
                                lineHeight: "38px",
                                lines: 1,
                                textOverflow: "ellipsis",
                                color: "#0d84ff",
                                height: "45px",
                                fontSize: "28px",
                                fontWeight: "bold",
                                paddingLeft: "8px"
                            }
                        ], [[[0, "list3"]], {
                                position: "absolute",
                                top: "38px",
                                left: "78px",
                                width: "324px",
                                height: "160px",
                                flexDirection: "column",
                                backgroundColor: "#262626",
                                borderRadius: "12px"
                            }
                        ], [[[0, "item3"]], {
                                width: "324px",
                                height: "52px"
                            }
                        ], [[[0, "calbtn67"]], {
                                color: "rgb(255,255,255)",
                                fontSize: "32px",
                                fontWeight: "bold",
                                backgroundColor: "rgb(38,38,38)",
                                marginRight: "4px",
                                width: "60px",
                                height: "60px",
                                borderRadius: "30px",
                                textAlign: "center",
                                borderTopColor: "rgba(255,255,255,0.06)",
                                borderRightColor: "rgba(255,255,255,0.06)",
                                borderBottomColor: "rgba(255,255,255,0.06)",
                                borderLeftColor: "rgba(255,255,255,0.06)",
                                borderStyle: "solid",
                                borderTopWidth: "3px",
                                borderRightWidth: "3px",
                                borderBottomWidth: "3px",
                                borderLeftWidth: "3px"
                            }
                        ], [[[1, "keyboard67"]], {
                                position: "absolute",
                                left: "0px",
                                top: "82px",
                                width: "100%",
                                height: "170px"
                            }
                        ], [[[1, "keyboard66"]], {
                                position: "absolute",
                                left: "0px",
                                top: "82px",
                                width: "100%",
                                height: "170px"
                            }
                        ], [[[0, "list67"]], {
                                top: "0px",
                                width: "96.4%",
                                height: "170px",
                                borderRadius: "30px",
                                backgroundColor: "#262626",
                                borderTopColor: "rgba(255,255,255,0.06)",
                                borderRightColor: "rgba(255,255,255,0.06)",
                                borderBottomColor: "rgba(255,255,255,0.06)",
                                borderLeftColor: "rgba(255,255,255,0.06)",
                                borderStyle: "solid",
                                borderTopWidth: "3px",
                                borderRightWidth: "3px",
                                borderBottomWidth: "3px",
                                borderLeftWidth: "3px",
                                paddingTop: "0px",
                                paddingRight: "10px",
                                paddingBottom: "0px",
                                paddingLeft: "10px"
                            }
                        ], [[[0, "item67"]], {
                                height: "50px"
                            }
                        ], [[[0, "calbtn66"]], {
                                color: "rgb(255,255,255)",
                                fontSize: "32px",
                                fontWeight: "bold",
                                backgroundColor: "rgb(38,38,38)",
                                marginRight: "3px",
                                width: "60px",
                                height: "60px",
                                borderRadius: "30px",
                                textAlign: "center",
                                borderTopColor: "rgba(255,255,255,0.06)",
                                borderRightColor: "rgba(255,255,255,0.06)",
                                borderBottomColor: "rgba(255,255,255,0.06)",
                                borderLeftColor: "rgba(255,255,255,0.06)",
                                borderStyle: "solid",
                                borderTopWidth: "3px",
                                borderRightWidth: "3px",
                                borderBottomWidth: "3px",
                                borderLeftWidth: "3px"
                            }
                        ], [[[0, "list66"]], {
                                position: "absolute",
                                left: "3px",
                                top: "0px",
                                width: "186px",
                                height: "186px",
                                borderRadius: "30px",
                                backgroundColor: "#262626",
                                borderTopColor: "rgba(255,255,255,0.06)",
                                borderRightColor: "rgba(255,255,255,0.06)",
                                borderBottomColor: "rgba(255,255,255,0.06)",
                                borderLeftColor: "rgba(255,255,255,0.06)",
                                borderStyle: "solid",
                                borderTopWidth: "3px",
                                borderRightWidth: "3px",
                                borderBottomWidth: "3px",
                                borderLeftWidth: "3px",
                                paddingTop: "10px",
                                paddingRight: "10px",
                                paddingBottom: "10px",
                                paddingLeft: "10px"
                            }
                        ], [[[0, "item66"]], {
                                height: "42px"
                            }
                        ], [[[0, "waiting-keys"]], {
                                width: "36px",
                                height: "40px",
                                textAlign: "center"
                            }
                        ]],
                    i = function (t, e, i) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.default = void 0;
                        var o = s(i("@app-module/system.vibrator")),
                        n = s(i("@app-module/system.device"));
                        function s(t) {
                            return t && t.__esModule ? t : {
                            default:
                                t
                            }
                        }
                        e.default = {
                            props: {
                                hide: {
                                default:
                                    !0
                                },
                                keyboardtype: {
                                default:
                                    "QWERTY"
                                },
                                maxlength: {
                                default:
                                    5
                                },
                                vibratemode: {
                                default:
                                    ""
                                },
                                screentype: {
                                default:
                                    "circle"
                                }
                            },
                            data: {
                                cval: "",
                                resultList: [],
                                resultList2: [],
                                waitingList: [],
                                waitingIndex: -1,
                                lastWaitingStr: "",
                                downFlag: "",
                                lang: "cn",
                                numFlag: !1,
                                upperFlag: !1,
                                cvalList: [0, 1, 2, 3, 4],
                                percent67: 52,
                                percent66: 0,
                                screenWidth: 192,
                                keys: {
                                    full: [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L"], ["Z", "X", "C", "V", "B", "N", "M"]],
                                    sign: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], ["~", "!", "@", "#", "%", "“", "”", "*", "?", "/"], ["(", ")", "-", "_", ":", ";", "，", "。", "."]],
                                    sign62: [["2", "3", "4", "5", "6", "7", "8", "9"], ["!", "@", "#", "%", "“", "”", "*"], [")", "-", "_", ":", ";"]],
                                    full62: [["W", "E", "R", "T", "Y", "U", "I", "O"], ["S", "D", "F", "G", "H", "J", "K"], ["X", "C", "V", "B", "N"]],
                                    t9: [["abc", "def"], ["ghi", "jkl", "mno"], ["pqrs", "tuv", "wxyz"]]
                                }
                            },
                            onInit() {
                                if (this.maxlength) {
                                    let t = [];
                                    for (let e = 0; e < this.maxlength; e++)
                                        t.push(e);
                                    this.cvalList = t
                                }
                                ("rect" === this.screentype || "pill-shaped" === this.screentype) && this.adjustScreenWidth(),
                                this.$watch("hide", "watchHidePropsChange"),
                                this.$watch("maxlength", "watchMaxLengthPropsChange")
                            },
                            addAllTxt(t) {
                                this.$emit("complete", {
                                    content: t
                                })
                            },
                            onRsSelect(t) {
                                this.onVibrate(),
                                this.cval = "",
                                this.addAllTxt(t),
                                this.clearWaiting(),
                                this.resetReslutList(),
                                this.downFlag = ""
                            },
                            onBtnClick(t) {
                                switch (console.log("当前" + this.lang), this.onVibrate(), t) {
                                case "AC":
                                    this.cval = "",
                                    this.clearWaiting(),
                                    this.resetReslutList();
                                    break;
                                case "lang":
                                    "cn" === this.lang ? this.lang = "en" : this.lang = "cn",
                                    console.log("切换" + this.lang),
                                    this.cval = "",
                                    this.clearWaiting(),
                                    this.resetReslutList();
                                    break;
                                case "D":
                                    if (this.waitingIndex >= 0)
                                        this.clearWaiting(), this.resetReslutList();
                                    else if (this.cval.length > 0) {
                                        var e;
                                        this.cval = (e = this.cval) ? e.substr(0, e.length - 1) : "",
                                        this.resetReslutList()
                                    } else
                                        this.$emit("delete", {});
                                    break;
                                case "space":
                                    this.addAllTxt(" ");
                                    break;
                                case "down":
                                    this.downFlag = "down" === this.downFlag ? "" : "down";
                                    break;
                                case "select":
                                    this.lastWaitingStr != t && this.lastWaitingStr && ("cn" === this.lang ? this.cval += this.waitingList[this.waitingIndex] : this.upperFlag ? this.addAllTxt(this.waitingList[this.waitingIndex].toUpperCase()) : this.addAllTxt(this.waitingList[this.waitingIndex].toLowerCase()), this.clearWaiting(), this.resetReslutList());
                                    break;
                                case "switchNum":
                                    this.numFlag = !0,
                                    this.cval = "",
                                    this.clearWaiting(),
                                    this.resetReslutList();
                                    break;
                                case "switchCn":
                                    this.numFlag = !1;
                                    break;
                                case "switchUpper":
                                    this.upperFlag = !0;
                                    break;
                                case "switchLow":
                                    this.upperFlag = !1;
                                    break;
                                default:
                                    1 === t.length ? this.addAllTxt(t) : (this.waitingIndex >= 0 ? this.lastWaitingStr === t ? (this.waitingIndex++, this.waitingIndex >= this.lastWaitingStr.length && (this.waitingIndex = 0)) : ("cn" === this.lang ? this.cval += this.waitingList[this.waitingIndex] : this.upperFlag ? this.addAllTxt(this.waitingList[this.waitingIndex].toUpperCase()) : this.addAllTxt(this.waitingList[this.waitingIndex].toLowerCase()), this.lastWaitingStr = t, this.waitingIndex = 0, this.waitingList = t.split("")) : (this.lastWaitingStr = t, this.waitingIndex = 0, this.waitingList = t.split("")), this.resetReslutList())
                                }
                                this.$forceUpdate()
                            },
                            clearWaiting() {
                                this.waitingList = [],
                                this.waitingIndex = -1,
                                this.lastWaitingStr = ""
                            },
                            resetReslutList() {
                                "circle" != this.screentype && this.$element("cvalWaiting").scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth"
                                });
                                let t = "";
                                if (this.lastWaitingStr && this.lastWaitingStr[this.waitingIndex] && (t = this.lastWaitingStr[this.waitingIndex]), !(this.cval + t) || "cn" != this.lang) {
                                    this.resultList = [],
                                    this.setResultListAll();
                                    return
                                }
                                this.getResultByWord(this.cval + t)
                            },
                            setResultListAll() {
                                this.resultList2 = [];
                                let t = [];
                                for (let e = 0; e < this.resultList.length; e++)
                                    t.push(this.resultList[e]), t.length === parseInt(this.maxlength) && (this.resultList2.push(t), t = []);
                                t.length > 0 && t.length < parseInt(this.maxlength) && this.resultList2.push(t)
                            },
                            getResultByWord(t) {
                                var e;
                                let i;
                                let o = this;
                                e = (i = SimpleInputMethod.getHanzi(t)) && i[0] ? i[0] : [],
                                o.resultList = e,
                                o.setResultListAll()
                            },
                            onSelect(t) {
                                if (this.$emit("keyDown", {
                                        content: t
                                    }), "T9" === this.keyboardtype && "circle" === this.screentype) {
                                    this.onBtnClick(t);
                                    return
                                }
                                this.onVibrate(),
                                "cn" !== this.lang || this.numFlag ? "en" !== this.lang || this.numFlag ? this.addAllTxt(t) : this.upperFlag ? this.addAllTxt(t.toUpperCase()) : this.addAllTxt(t.toLowerCase()) : this.cval += t.toLowerCase(),
                                this.resetReslutList()
                            },
                            onSelectWaiting(t) {
                                this.onVibrate(),
                                "cn" === this.lang ? this.cval += this.waitingList[t].toString() : this.upperFlag ? this.addAllTxt(this.waitingList[t].toUpperCase()) : this.addAllTxt(this.waitingList[t].toLowerCase()),
                                this.clearWaiting(),
                                this.resetReslutList()
                            },
                            watchHidePropsChange(t, e) {
                                this.$emit("visibilityChange", {
                                    visible: t
                                })
                            },
                            watchMaxLengthPropsChange(t, e) {
                                if (t) {
                                    let e = [];
                                    for (let i = 0; i < t; i++)
                                        e.push(i);
                                    this.cvalList = e
                                }
                            },
                            onVibrate() {
                                "" != this.vibratemode && o.default.vibrate({
                                    mode: this.vibratemode
                                })
                            },
                            handelScroll(t) {
                                let e = t.scrollX / 636 * 100 + 52.8;
                                this.percent67 = parseInt(e <= 100 ? e : 100);
                                let i = t.scrollX / 633 * 100;
                                this.percent66 = parseInt(i <= 100 ? i : 100)
                            },
                            pushCval() {
                                this.onVibrate();
                                let t = this.cval;
                                this.cval = "",
                                this.clearWaiting(),
                                this.resetReslutList(),
                                this.addAllTxt(t)
                            },
                            adjustScreenWidth() {
                                n.default.getInfo({
                                    success: t => {
                                        this.screenWidth = t.screenWidth
                                    }
                                })
                            }
                        }
                    },
                    o = function (t) {
                        let e = t || this;
                        return aiot.__ce__("div", {
                            __vm__: e,
                            __opts__: {
                                classList: ["page"],
                                style: {
                                    flexDirection: "column"
                                },
                                show: function () {
                                    return !e.hide
                                }
                            }
                        }, [aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        style: {
                                            backgroundColor: "black"
                                        }
                                    }
                                }, [aiot.__ci__({
                                            __vm__: e,
                                            __opts__: {
                                                shown: function () {
                                                    return "pill-shaped" === e.screentype
                                                }
                                            }
                                        }, function () {
                                            return [aiot.__ce__("div", {
                                                    __vm__: e,
                                                    __opts__: {
                                                        style: {
                                                            width: "100%",
                                                            height: "305px"
                                                        }
                                                    }
                                                }, [aiot.__ce__("div", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    left: "0px",
                                                                    top: "34px",
                                                                    width: "100%",
                                                                    height: "276px"
                                                                }
                                                            }
                                                        }, [aiot.__ce__("progress", {
                                                                    __vm__: e,
                                                                    __opts__: {
                                                                        percent: function () {
                                                                            return 30 + e.percent66
                                                                        },
                                                                        type: "arc",
                                                                        style: function () {
                                                                            return a("start-angle:204deg;total-angle:-48deg;width:188px;height:188px;top:82px;left:2px;position:absolute;color:#ffffff;stroke-width:6px;layer-color:#262626;margin-left: " + (e.screenWidth - 192) / 2 + "px;")
                                                                        }
                                                                    }
                                                                }, []), aiot.__ce__("scroll", {
                                                                    __vm__: e,
                                                                    __opts__: {
                                                                        id: "keyboard66",
                                                                        scrollX: function () {
                                                                            return !0
                                                                        },
                                                                        events: {
                                                                            scroll: function (t) {
                                                                                return e.handelScroll(t)
                                                                            }
                                                                        },
                                                                        style: function () {
                                                                            return a("padding-left: " + (e.screenWidth - 192) / 2 + "px;padding-right: " + (e.screenWidth - 192) / 2 + "px;")
                                                                        }
                                                                    }
                                                                }, [aiot.__ci__({
                                                                            __vm__: e,
                                                                            __opts__: {
                                                                                shown: function () {
                                                                                    return !e.numFlag
                                                                                }
                                                                            }
                                                                        }, function () {
                                                                            return [aiot.__ce__("div", {
                                                                                    __vm__: e,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            left: "3px",
                                                                                            flexDirection: "column"
                                                                                        }
                                                                                    }
                                                                                }, [aiot.__ce__("div", {
                                                                                            __vm__: e,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "0px",
                                                                                                    marginTop: "0px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [aiot.__cf__({
                                                                                                    __vm__: e,
                                                                                                    __opts__: {
                                                                                                        exp: function () {
                                                                                                            return e.keys.full[0]
                                                                                                        },
                                                                                                        key: "$idx",
                                                                                                        value: "item"
                                                                                                    }
                                                                                                }, function (t, i) {
                                                                                                    return [aiot.__ce__("text", {
                                                                                                            __vm__: e,
                                                                                                            __opts__: {
                                                                                                                classList: ["calbtn66"],
                                                                                                                events: {
                                                                                                                    click: function (t) {
                                                                                                                        return e.onSelect(i, t)
                                                                                                                    }
                                                                                                                },
                                                                                                                value: function () {
                                                                                                                    return i
                                                                                                                }
                                                                                                            }
                                                                                                        }, [])]
                                                                                                })]), aiot.__ce__("div", {
                                                                                            __vm__: e,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "32px",
                                                                                                    marginTop: "-5px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [aiot.__cf__({
                                                                                                    __vm__: e,
                                                                                                    __opts__: {
                                                                                                        exp: function () {
                                                                                                            return e.keys.full[1]
                                                                                                        },
                                                                                                        key: "$idx",
                                                                                                        value: "item"
                                                                                                    }
                                                                                                }, function (t, i) {
                                                                                                    return [aiot.__ce__("text", {
                                                                                                            __vm__: e,
                                                                                                            __opts__: {
                                                                                                                classList: ["calbtn66"],
                                                                                                                events: {
                                                                                                                    click: function (t) {
                                                                                                                        return e.onSelect(i, t)
                                                                                                                    }
                                                                                                                },
                                                                                                                value: function () {
                                                                                                                    return i
                                                                                                                }
                                                                                                            }
                                                                                                        }, [])]
                                                                                                })]), aiot.__ce__("div", {
                                                                                            __vm__: e,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "64px",
                                                                                                    marginTop: "-5px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [aiot.__cf__({
                                                                                                    __vm__: e,
                                                                                                    __opts__: {
                                                                                                        exp: function () {
                                                                                                            return e.keys.full[2]
                                                                                                        },
                                                                                                        key: "$idx",
                                                                                                        value: "item"
                                                                                                    }
                                                                                                }, function (t, i) {
                                                                                                    return [aiot.__ce__("text", {
                                                                                                            __vm__: e,
                                                                                                            __opts__: {
                                                                                                                classList: ["calbtn66"],
                                                                                                                events: {
                                                                                                                    click: function (t) {
                                                                                                                        return e.onSelect(i, t)
                                                                                                                    }
                                                                                                                },
                                                                                                                value: function () {
                                                                                                                    return i
                                                                                                                }
                                                                                                            }
                                                                                                        }, [])]
                                                                                                }), aiot.__ce__("image", {
                                                                                                    __vm__: e,
                                                                                                    __opts__: {
                                                                                                        src: "/components/InputMethod/assets/arc/space.png",
                                                                                                        style: {
                                                                                                            width: "60px",
                                                                                                            height: "60px"
                                                                                                        },
                                                                                                        events: {
                                                                                                            click: function (t) {
                                                                                                                return e.onBtnClick("space", t)
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }, [])])])]
                                                                        }), aiot.__ci__({
                                                                            __vm__: e,
                                                                            __opts__: {
                                                                                shown: function () {
                                                                                    return !!e.numFlag
                                                                                }
                                                                            }
                                                                        }, function () {
                                                                            return [aiot.__ce__("div", {
                                                                                    __vm__: e,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            left: "3px",
                                                                                            flexDirection: "column"
                                                                                        }
                                                                                    }
                                                                                }, [aiot.__ce__("div", {
                                                                                            __vm__: e,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "0px",
                                                                                                    marginTop: "0px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [aiot.__cf__({
                                                                                                    __vm__: e,
                                                                                                    __opts__: {
                                                                                                        exp: function () {
                                                                                                            return e.keys.sign[0]
                                                                                                        },
                                                                                                        key: "$idx",
                                                                                                        value: "item"
                                                                                                    }
                                                                                                }, function (t, i) {
                                                                                                    return [aiot.__ce__("text", {
                                                                                                            __vm__: e,
                                                                                                            __opts__: {
                                                                                                                classList: ["calbtn66"],
                                                                                                                events: {
                                                                                                                    click: function (t) {
                                                                                                                        return e.onSelect(i, t)
                                                                                                                    }
                                                                                                                },
                                                                                                                value: function () {
                                                                                                                    return i
                                                                                                                }
                                                                                                            }
                                                                                                        }, [])]
                                                                                                })]), aiot.__ce__("div", {
                                                                                            __vm__: e,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "32px",
                                                                                                    marginTop: "-5px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [aiot.__cf__({
                                                                                                    __vm__: e,
                                                                                                    __opts__: {
                                                                                                        exp: function () {
                                                                                                            return e.keys.sign[1]
                                                                                                        },
                                                                                                        key: "$idx",
                                                                                                        value: "item"
                                                                                                    }
                                                                                                }, function (t, i) {
                                                                                                    return [aiot.__ce__("text", {
                                                                                                            __vm__: e,
                                                                                                            __opts__: {
                                                                                                                classList: ["calbtn66"],
                                                                                                                events: {
                                                                                                                    click: function (t) {
                                                                                                                        return e.onSelect(i, t)
                                                                                                                    }
                                                                                                                },
                                                                                                                value: function () {
                                                                                                                    return i
                                                                                                                }
                                                                                                            }
                                                                                                        }, [])]
                                                                                                })]), aiot.__ce__("div", {
                                                                                            __vm__: e,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "64px",
                                                                                                    marginTop: "-5px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [aiot.__cf__({
                                                                                                    __vm__: e,
                                                                                                    __opts__: {
                                                                                                        exp: function () {
                                                                                                            return e.keys.sign[2]
                                                                                                        },
                                                                                                        key: "$idx",
                                                                                                        value: "item"
                                                                                                    }
                                                                                                }, function (t, i) {
                                                                                                    return [aiot.__ce__("text", {
                                                                                                            __vm__: e,
                                                                                                            __opts__: {
                                                                                                                classList: ["calbtn66"],
                                                                                                                events: {
                                                                                                                    click: function (t) {
                                                                                                                        return e.onSelect(i, t)
                                                                                                                    }
                                                                                                                },
                                                                                                                value: function () {
                                                                                                                    return i
                                                                                                                }
                                                                                                            }
                                                                                                        }, [])]
                                                                                                })])])]
                                                                        })])]), aiot.__ce__("div", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                style: function () {
                                                                    return a("position: absolute;left: " + (e.screenWidth - 192) / 2 + "px;top: 0px;width: 192px;height: 110px;")
                                                                },
                                                                static: !0
                                                            }
                                                        }, [aiot.__ce__("image", {
                                                                    __vm__: e,
                                                                    __opts__: {
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "3px",
                                                                            top: "47px",
                                                                            width: "186px",
                                                                            height: "60px"
                                                                        },
                                                                        src: "/components/InputMethod/assets/arc/search.png"
                                                                    }
                                                                }, []), aiot.__ce__("scroll", {
                                                                    __vm__: e,
                                                                    __opts__: {
                                                                        id: "cvalWaiting",
                                                                        scrollX: function () {
                                                                            return !0
                                                                        },
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "15px",
                                                                            top: "56px",
                                                                            width: "144px",
                                                                            height: "42px"
                                                                        }
                                                                    }
                                                                }, [aiot.__ce__("div", {
                                                                            __vm__: e,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    left: "0px",
                                                                                    top: "0px",
                                                                                    height: "42px",
                                                                                    paddingRight: "20px"
                                                                                }
                                                                            }
                                                                        }, [aiot.__ce__("text", {
                                                                                    __vm__: e,
                                                                                    __opts__: {
                                                                                        classList: ["calbtn02"],
                                                                                        style: {
                                                                                            paddingRight: "10px"
                                                                                        },
                                                                                        events: {
                                                                                            click: function (t) {
                                                                                                return e.pushCval(t)
                                                                                            }
                                                                                        },
                                                                                        value: function () {
                                                                                            return e.cval
                                                                                        }
                                                                                    }
                                                                                }, []), aiot.__cf__({
                                                                                    __vm__: e,
                                                                                    __opts__: {
                                                                                        exp: function () {
                                                                                            return e.cvalList
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "$item"
                                                                                    }
                                                                                }, function (t, i) {
                                                                                    return [aiot.__ce__("text", {
                                                                                            __vm__: e,
                                                                                            __opts__: {
                                                                                                show: function () {
                                                                                                    return e.resultList.length > t
                                                                                                },
                                                                                                classList: ["calbtn02"],
                                                                                                style: {
                                                                                                    paddingRight: "10px"
                                                                                                },
                                                                                                events: {
                                                                                                    click: function (i) {
                                                                                                        return e.onRsSelect(e.resultList[t], i)
                                                                                                    }
                                                                                                },
                                                                                                value: function () {
                                                                                                    return e.resultList[t]
                                                                                                }
                                                                                            }
                                                                                        }, [])]
                                                                                })])]), aiot.__ce__("image", {
                                                                    __vm__: e,
                                                                    __opts__: {
                                                                        show: function () {
                                                                            return e.resultList.length > 0
                                                                        },
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "120px",
                                                                            top: "57px",
                                                                            width: "60px",
                                                                            height: "40px"
                                                                        },
                                                                        src: "/components/InputMethod/assets/arc/down2.png",
                                                                        events: {
                                                                            click: function (t) {
                                                                                return e.onBtnClick("down", t)
                                                                            }
                                                                        }
                                                                    }
                                                                }, []), aiot.__ce__("image", {
                                                                    __vm__: e,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/arc/back2.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "0px",
                                                                            left: "9px",
                                                                            width: "48px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function (t) {
                                                                                return e.onBtnClick("switchCn", t)
                                                                            }
                                                                        },
                                                                        show: function () {
                                                                            return e.numFlag && "cn" === e.lang
                                                                        }
                                                                    }
                                                                }, []), aiot.__ce__("image", {
                                                                    __vm__: e,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/arc/123.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "70px",
                                                                            top: "0px",
                                                                            width: "52px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function (t) {
                                                                                return e.onBtnClick("switchNum", t)
                                                                            }
                                                                        },
                                                                        show: function () {
                                                                            return "" === e.downFlag && !e.numFlag && "cn" === e.lang
                                                                        }
                                                                    }
                                                                }, []), aiot.__ce__("image", {
                                                                    __vm__: e,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/arc/bigA.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "0px",
                                                                            left: "72px",
                                                                            width: "48px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function (t) {
                                                                                return e.onBtnClick("switchLow", t)
                                                                            }
                                                                        },
                                                                        show: function () {
                                                                            return "" === e.downFlag && e.upperFlag && "en" === e.lang
                                                                        }
                                                                    }
                                                                }, []), aiot.__ce__("image", {
                                                                    __vm__: e,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/arc/a.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "0px",
                                                                            left: "72px",
                                                                            width: "48px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function (t) {
                                                                                return e.onBtnClick("switchUpper", t)
                                                                            }
                                                                        },
                                                                        show: function () {
                                                                            return "" === e.downFlag && !e.upperFlag && "en" === e.lang
                                                                        }
                                                                    }
                                                                }, []), aiot.__ce__("image", {
                                                                    __vm__: e,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/arc/del.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "135px",
                                                                            top: "0px",
                                                                            width: "48px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function (t) {
                                                                                return e.onBtnClick("D", t)
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])]), aiot.__ci__({
                                                            __vm__: e,
                                                            __opts__: {
                                                                shown: function () {
                                                                    return "down" === e.downFlag
                                                                }
                                                            }
                                                        }, function () {
                                                            return [aiot.__ce__("div", {
                                                                    __vm__: e,
                                                                    __opts__: {
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "47px",
                                                                            width: "100%",
                                                                            height: "263px",
                                                                            backgroundColor: "black"
                                                                        }
                                                                    }
                                                                }, [aiot.__ce__("div", {
                                                                            __vm__: e,
                                                                            __opts__: {
                                                                                style: function () {
                                                                                    return a("position: absolute;left: " + (e.screenWidth - 192) / 2 + "px;width: 192px;height: 263px;")
                                                                                }
                                                                            }
                                                                        }, [aiot.__ce__("list", {
                                                                                    __vm__: e,
                                                                                    __opts__: {
                                                                                        classList: ["list66"]
                                                                                    }
                                                                                }, [aiot.__cf__({
                                                                                            __vm__: e,
                                                                                            __opts__: {
                                                                                                exp: function () {
                                                                                                    return e.resultList2
                                                                                                },
                                                                                                key: "$idx",
                                                                                                value: "itemArray"
                                                                                            }
                                                                                        }, function (t, i) {
                                                                                            return [aiot.__ce__("list-item", {
                                                                                                    __vm__: e,
                                                                                                    __opts__: {
                                                                                                        type: "waitingRows66",
                                                                                                        classList: ["item66"]
                                                                                                    }
                                                                                                }, [aiot.__cf__({
                                                                                                            __vm__: e,
                                                                                                            __opts__: {
                                                                                                                exp: function () {
                                                                                                                    return i
                                                                                                                },
                                                                                                                key: "$idx",
                                                                                                                value: "item"
                                                                                                            }
                                                                                                        }, function (t, i) {
                                                                                                            return [aiot.__ce__("div", {
                                                                                                                    __vm__: e,
                                                                                                                    __opts__: {
                                                                                                                        classList: ["item", "column", "center"]
                                                                                                                    }
                                                                                                                }, [aiot.__ce__("input", {
                                                                                                                            __vm__: e,
                                                                                                                            __opts__: {
                                                                                                                                classList: ["calbtn0"],
                                                                                                                                type: "button",
                                                                                                                                value: function () {
                                                                                                                                    return i
                                                                                                                                },
                                                                                                                                events: {
                                                                                                                                    click: function (t) {
                                                                                                                                        return e.onRsSelect(i, t)
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }, [])])]
                                                                                                        })])]
                                                                                        })]), aiot.__ce__("image", {
                                                                                    __vm__: e,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            position: "absolute",
                                                                                            top: "196px",
                                                                                            left: "56px",
                                                                                            width: "80px",
                                                                                            height: "60px"
                                                                                        },
                                                                                        src: "/components/InputMethod/assets/arc/up2.png",
                                                                                        events: {
                                                                                            click: function (t) {
                                                                                                return e.onBtnClick("down", t)
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }, [])])])]
                                                        })])]
                                        })])])
                    };
                    t.exports = function (t) {
                        i({}, t, _),
                        t.default.template = o,
                        t.default.style = e
                    }
                }
            },
            s = {};
            function l(t) {
                var e = s[t];
                if (void 0 !== e)
                    return e.exports;
                var i = s[t] = {
                    exports: {}
                };
                return n[t](i, i.exports, l),
                i.exports
            }
            l.rv = () => "1.2.7",
            l.ruid = "bundler=rspack@1.2.7",
            o["input-method"] = l(646),
            t = [[[[0, "page"]], {
                        width: "192px",
                        height: "490px",
                        backgroundColor: "black",
                        alignItems: "center"
                    }
                ], [[[0, "text"]], {
                        position: "absolute",
                        left: "20px",
                        top: "120px",
                        width: "80%",
                        height: "50px",
                        textAlign: "center",
                        color: "white",
                        backgroundColor: "rgb(41,41,41)",
                        borderRadius: "10px"
                    }
                ], [[[0, "debug"]], {
                        color: "white",
                        top: "150px"
                    }
                ]],
            e = function (t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = void 0;
                var o = _(i("@app-module/system.file")),
                n = _(i("@app-module/system.router")),
                s = _(i("@app-module/system.prompt"));
                function _(t) {
                    return t && t.__esModule ? t : {
                    default:
                        t
                    }
                }
                e.default = {
                    private: {
                        textValue: "",
                        hide: !1,
                        keyboardtype: "QWERTY",
                        vibratemode: "",
                        screentype: "pill-shaped"
                    },
                    onVisibilityChange(t) {
                        console.log("显示状态变更:" + JSON.stringify(t))
                    },
                    onKeyDown(t) {
                        console.log("按下按键:" + JSON.stringify(t))
                    },
                    onDelete() {
                        this.textValue = this.textValue.slice(0, -1),
                        console.log("删除字符")
                    },
                    changeState() {
                        this.hide = !this.hide
                    },
                    onComplete(t) {
                        this.textValue += t.detail.content,
                        console.log("返回字符:" + JSON.stringify(t))
                    },
                    async verify() {
                        try {
                            let t = await this.readdevcode();
                            this.genCode(t) == this.textValue ? (s.default.showToast({
                                    message: "验证成功",
                                    duration: 500
                                }), o.default.writeText({
                                    uri: "internal://files/minepaystatus.txt",
                                    text: "1",
                                    success: function () {
                                        console.log("保存激活状态")
                                    }
                                }), r(() => {
                                    n.default.push({
                                        uri: "/pages/index"
                                    })
                                }, 500)) : s.default.showToast({
                                message: "验证失败",
                                duration: 500
                            })
                        } catch (t) {
                            s.default.showToast({
                                message: "验证过程出错",
                                duration: 500
                            })
                        }
                    },
                    readdevcode: () => new Promise((t, e) => {
                        o.default.readText({
                            uri: "internal://files/devcode.txt",
                            success: e => {
                                console.log("code text: " + e.text),
                                s.default.showToast({
                                    message: e.text,
                                    duration: 500
                                }),
                                t(e.text)
                            },
                            fail: (t, i) => {
                                console.log(`读取code失败, code = ${i}`),
                                s.default.showToast({
                                    message: `读取设备码失败: ${i}`,
                                    duration: 500
                                }),
                                e(i)
                            }
                        })
                    }),
                    async calculate() {
                        try {
                            let t = await this.readdevcode();
                            console.log("设备码" + t);
                            let e = this.genCode(t);
                            console.log("激活码" + e),
                            s.default.showToast({
                                message: e,
                                duration: 500
                            })
                        } catch (t) {
                            console.error("计算激活码失败:", t)
                        }
                    },
                    genCode(t) {
                        let e = String(t).padStart(5, "0").slice(0, 5).split("").map(Number),
                        i = (e[0] + 3) % 10,
                        o = (e[1] - 2 + 10) % 10,
                        n = (e[2] + 5) % 10,
                        s = (e[3] - 1 + 10) % 10,
                        r = (e[4] + 7) % 10,
                        _ = Number(`${n}${i}${r}${o}${s}`);
                        return _ < 1e4 && (_ += 1e4),
                        _
                    },
                    back(t) {
                        "right" === t.direction && n.default.back()
                    }
                };
                let a = e.default || t.exports,
                l = ["public", "protected", "private"];
                if (a.data && l.some(function (t) {
                        return a[t]
                    }))
                    throw Error('页面VM对象中的属性data不可与"' + l.join(",") + '"同时存在，请使用private替换data名称');
                a.data || (a.data = {}, a._descriptor = {}, l.forEach(function (t) {
                        let e = typeof a[t];
                        if ("object" === e)
                            for (let e in a.data = Object.assign(a.data, a[t]), a[t])
                                a._descriptor[e] = {
                                    access: t
                                };
                        else
                            "function" === e && console.warn("页面VM对象中的属性" + t + "的值不能是函数，请使用对象")
                    }))
            },
            i = function (t) {
                let e = t || this;
                return aiot.__ce__("div", {
                    __vm__: e,
                    __opts__: {
                        classList: ["page"],
                        style: {
                            flexDirection: "column"
                        },
                        events: {
                            swipe: function (t) {
                                return e.back(t)
                            }
                        }
                    }
                }, [aiot.__ce__("text", {
                            __vm__: e,
                            __opts__: {
                                style: {
                                    color: "white",
                                    fontSize: "20px",
                                    top: "50px",
                                    width: "80%",
                                    textAlign: "center"
                                },
                                value: "点击输入框,收起键盘"
                            }
                        }, []), aiot.__ce__("text", {
                            __vm__: e,
                            __opts__: {
                                classList: ["text"],
                                events: {
                                    click: function (t) {
                                        return e.changeState(t)
                                    }
                                },
                                value: function () {
                                    return e.textValue + "|"
                                }
                            }
                        }, []), aiot.__cc__("input-method", {
                            __vm__: e,
                            __opts__: {
                                hide: function () {
                                    return e.hide
                                },
                                keyboardtype: function () {
                                    return e.keyboardtype
                                },
                                maxlength: "5",
                                vibratemode: function () {
                                    return e.vibratemode
                                },
                                screentype: function () {
                                    return e.screentype
                                },
                                events: {
                                    "visibility-change": function (t) {
                                        return e.onVisibilityChange(t)
                                    },
                                    "key-down": function (t) {
                                        return e.onKeyDown(t)
                                    },
                                    delete : function (t) {
                                        return e.onDelete(t)
                                    },
                                    complete: function (t) {
                                        return e.onComplete(t)
                                    }
                                }
                            }
                        }, []), aiot.__ci__({
                            __vm__: e,
                            __opts__: {
                                shown: function () {
                                    return e.hide
                                }
                            }
                        }, function () {
                            return [aiot.__ce__("image", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["check"],
                                        src: "/common/Check.png",
                                        events: {
                                            click: function (t) {
                                                return e.verify(t)
                                            }
                                        },
                                        style: {
                                            top: "300px",
                                            width: "100%",
                                            textAlign: "center"
                                        }
                                    }
                                }, [])]
                        })])
            },
            o.entry = function (o) {
                e({}, o, _),
                o.default.template = i,
                o.default.style = t
            }
        })()
    }
    (t, 0, 0, o, 0)
}
