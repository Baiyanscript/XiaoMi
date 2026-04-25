export default function (_, e, t, l, c) {
    var o = $app_require$;
    !function (_, e, t, l, c) {
        var i = _.setTimeout,
        n = _.setInterval;
        _.clearTimeout;
        var s = _.clearInterval,
        r = _.$app_require$ || o,
        a = function (_) {
            return "string" == typeof _ ? Object.fromEntries(_.split(";").filter(_ => !!(_ && _.trim())).map(_ => {
                    let e = _.match(/([^:]+):(.*)/);
                    return e && e.length > 2 ? [e[1].trim().replace(/-([a-z])/g, (_, e) => e.toUpperCase()), e[2].trim()] : []
                })) : _
        };
        (() => {
            var _ = {},
            e = {};
            function t(l) {
                var c = e[l];
                if (void 0 !== c)
                    return c.exports;
                var o = e[l] = {
                    exports: {}
                };
                return _[l](o, o.exports, t),
                o.exports
            }
            t.rv = () => "1.2.7",
            t.ruid = "bundler=rspack@1.2.7";
            var c = [[[[0, "game-page"]], {
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#0a0f1a",
                        paddingTop: "5px",
                        paddingRight: "5px",
                        paddingBottom: "5px",
                        paddingLeft: "5px",
                        alignItems: "center"
                    }
                ], [[[0, "game-header"]], {
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "50px",
                        paddingTop: "0",
                        paddingRight: "10px",
                        paddingBottom: "0",
                        paddingLeft: "10px",
                        marginBottom: "10px",
                        top: "10px"
                    }
                ], [[[0, "game-title"]], {
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#4ecca3",
                        textAlign: "center"
                    }
                ], [[[0, "button"]], {
                        fontSize: "20px",
                        width: "50%",
                        height: "40px"
                    }
                ], [[[0, "game-stats"]], {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        top: "0px"
                    }
                ], [[[0, "stat-label"]], {
                        fontSize: "20px",
                        color: "#a9a9a9",
                        marginRight: "4px"
                    }
                ], [[[0, "stat-value"]], {
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#4ecca3",
                        marginRight: "10px"
                    }
                ], [[[0, "check-image-container"]], {
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "10px",
                        marginRight: "0",
                        marginBottom: "10px",
                        marginLeft: "0",
                        zIndex: 10,
                        width: "50%",
                        borderTopColor: "rgb(255,255,255)",
                        borderRightColor: "rgb(255,255,255)",
                        borderBottomColor: "rgb(255,255,255)",
                        borderLeftColor: "rgb(255,255,255)",
                        borderStyle: "solid",
                        borderTopWidth: "2px",
                        borderRightWidth: "2px",
                        borderBottomWidth: "2px",
                        borderLeftWidth: "2px"
                    }
                ], [[[0, "minefield"]], {
                        flexDirection: "column",
                        borderRadius: "8px",
                        paddingTop: "0px",
                        paddingRight: "0px",
                        paddingBottom: "0px",
                        paddingLeft: "0px",
                        marginBottom: "15px",
                        width: "100%",
                        height: "185px",
                        overflow: "hidden",
                        top: "10px",
                        display: "flex"
                    }
                ], [[[0, "group"]], {
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "center"
                    }
                ], [[[0, "grid-row"]], {
                        flexDirection: "row",
                        justifyContent: "center"
                    }
                ], [[[0, "grid-cell"]], {
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopColor: "rgb(124,124,124)",
                        borderRightColor: "rgb(124,124,124)",
                        borderBottomColor: "rgb(124,124,124)",
                        borderLeftColor: "rgb(124,124,124)",
                        borderStyle: "solid",
                        borderTopWidth: "1px",
                        borderRightWidth: "1px",
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        borderRadius: "3px",
                        transitionProperty: "background-color",
                        transitionTimingFunction: "ease",
                        transitionDuration: "0.2s",
                        transitionDelay: "0s",
                        width: "22px",
                        height: "22px"
                    }
                ], [[[0, "cell-hidden"]], {
                        backgroundColor: "#2a4b7c"
                    }
                ], [[[0, "cell-revealed"]], {
                        backgroundColor: "#1e3a5f"
                    }
                ], [[[0, "cell-flagged"]], {
                        backgroundColor: "#e9c46a"
                    }
                ], [[[0, "cell-mine"]], {
                        backgroundColor: "#e94560"
                    }
                ], [[[0, "cell-content"]], {
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#4ecca3"
                    }
                ], [[[0, "number-1"]], {
                        color: "#4ecca3"
                    }
                ], [[[0, "number-2"]], {
                        color: "#4ecdc4"
                    }
                ], [[[0, "number-3"]], {
                        color: "#45b7d1"
                    }
                ], [[[0, "number-4"]], {
                        color: "#3d9fcf"
                    }
                ], [[[0, "number-5"]], {
                        color: "#e9c46a"
                    }
                ], [[[0, "number-6"]], {
                        color: "#f4a261"
                    }
                ], [[[0, "number-7"]], {
                        color: "#e76f51"
                    }
                ], [[[0, "number-8"]], {
                        color: "#e63946"
                    }
                ], [[[0, "game-controls"]], {
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "70%",
                        top: "80px"
                    }
                ], [[[0, "control-button"]], {
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#4ecca3",
                        paddingTop: "15px",
                        paddingRight: "15px",
                        paddingBottom: "15px",
                        paddingLeft: "15px",
                        borderRadius: "20px",
                        marginTop: "0",
                        marginRight: "0px",
                        marginBottom: "0",
                        marginLeft: "0px",
                        width: "100%",
                        height: "50px"
                    }
                ], [[[0, "control-button"], [2, "text"]], {
                        color: "#0a0f1a",
                        fontSize: "18px",
                        fontWeight: "bold"
                    }
                ], [[[0, "game-status"]], {
                        width: "180px",
                        height: "187px",
                        position: "absolute",
                        top: "133px",
                        left: "16px",
                        right: 0,
                        backgroundColor: "rgba(0,0,0,0.7)",
                        paddingTop: "20px",
                        paddingRight: "20px",
                        paddingBottom: "20px",
                        paddingLeft: "20px",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                ], [[[0, "status-message"]], {
                        color: "rgba(255,255,255,0.973)",
                        fontSize: "24px",
                        fontWeight: "normal",
                        textAlign: "center"
                    }
                ], [[[0, "mark-control"]], {
                        height: "40px"
                    }
                ], [[[0, "ctrlbut"]], {
                        width: "70px",
                        height: "40px",
                        borderRadius: "20px",
                        fontSize: "20px",
                        paddingTop: "3px",
                        paddingRight: "3px",
                        paddingBottom: "3px",
                        paddingLeft: "3px"
                    }
                ], [[[0, "lrbut"]], {
                        flexDirection: "row",
                        marginTop: "10px"
                    }
                ]],
            o = function (_, e, t) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = void 0;
                var l = o(t("@app-module/system.router"));
                o(t("@app-module/system.prompt"));
                var c = o(t("@app-module/system.file"));
                function o(_) {
                    return _ && _.__esModule ? _ : {
                    default:
                        _
                    }
                }
                e.default = {
                    public: {
                        grid: [],
                        gameMode: "beginner",
                        gameState: "playing",
                        gameTime: 0,
                        startTime: 0,
                        remainingMines: 0,
                        timerId: null,
                        gridSize: 0,
                        mineCount: 0,
                        statusMessage: "",
                        modeButtonText: "mode",
                        cellSize: 22,
                        initialized: !1,
                        cells: [],
                        firstClick: !0,
                        selectedCell: {
                            row: -1,
                            col: -1
                        },
                        showCheckImage: !1,
                        markedCell: {
                            row: -1,
                            col: -1
                        },
                        time: "00:00",
                        bestTime: 0,
                        bestTimes: {
                            beginner: 1 / 0,
                            intermediate: 1 / 0,
                            expert: 1 / 0
                        }
                    },
                    onInit() {
                        let _ = () => {
                            let _ = new Date,
                            e = _.getHours().toString().padStart(2, "0"),
                            t = _.getMinutes().toString().padStart(2, "0");
                            this.time = e + ":" + t
                        };
                        _(),
                        this.timer = n(_, 6e4),
                        this.initGameSettings(),
                        this.initializeGrid(),
                        this.loadBestTimes(),
                        "playing" !== this.gameState || this.timerId || this.firstClick || this.startTimer(),
                        i(() => this.calculateCellSize(), 0),
                        -1 === this.selectedCell.row && -1 === this.selectedCell.col && (this.selectedCell = {
                                row: 0,
                                col: 0
                            })
                    },
                    onShow() {},
                    loadBestTimes() {
                        let _ = _ => {
                            c.default.readText({
                                uri: `internal://files/mine_best_${_}.txt`,
                                success: e => {
                                    let t = parseInt(e.text);
                                    isNaN(t) || (this.bestTimes[_] = t),
                                    this.updateCurrentBestTime()
                                },
                                fail: e => {
                                    301 === e.code ? this.bestTimes[_] = 1 / 0 : console.error(`读取最佳时间失败: ${e.code}`)
                                }
                            })
                        };
                        _("beginner"),
                        _("intermediate"),
                        _("expert")
                    },
                    updateCurrentBestTime() {
                        let _ = this.bestTimes[this.gameMode];
                        this.bestTime = _ === 1 / 0 ? 0 : _
                    },
                    moveSelection(_) {
                        if ("playing" !== this.gameState)
                            return;
                        let { row: e, col: t } = this.selectedCell;
                        if (-1 === e || -1 === t) {
                            let _ = this.findFirstUnopenedCell();
                            _ && (this.selectedCell = _, this.showCheckImage = !0);
                            return
                        }
                        let l = this.findNextUnopenedCell(e, t, _);
                        l && (this.selectedCell = l, this.showCheckImage = !0)
                    },
                    findNextUnopenedCell(_, e, t) {
                        let l = (_, e) => _ >= 0 && _ < 8 && e >= 0 && e < 8 && !this.cells[8 * _ + e].active;
                        switch (t) {
                        case "up":
                            for (let t = _ - 1; t >= 0; t--)
                                if (l(t, e))
                                    return {
                                        row: t,
                                        col: e
                                    };
                            for (let t = _ - 1; t >= 0; t--) {
                                for (let _ = e - 1; _ >= 0; _--)
                                    if (l(t, _))
                                        return {
                                            row: t,
                                            col: _
                                        };
                                for (let _ = e + 1; _ < 8; _++)
                                    if (l(t, _))
                                        return {
                                            row: t,
                                            col: _
                                        }
                            }
                            break;
                        case "down":
                            for (let t = _ + 1; t < 8; t++)
                                if (l(t, e))
                                    return {
                                        row: t,
                                        col: e
                                    };
                            for (let t = _ + 1; t < 8; t++) {
                                for (let _ = e - 1; _ >= 0; _--)
                                    if (l(t, _))
                                        return {
                                            row: t,
                                            col: _
                                        };
                                for (let _ = e + 1; _ < 8; _++)
                                    if (l(t, _))
                                        return {
                                            row: t,
                                            col: _
                                        }
                            }
                            break;
                        case "left":
                            for (let t = e - 1; t >= 0; t--)
                                if (l(_, t))
                                    return {
                                        row: _,
                                        col: t
                                    };
                            for (let t = e - 1; t >= 0; t--) {
                                for (let e = _ - 1; e >= 0; e--)
                                    if (l(e, t))
                                        return {
                                            row: e,
                                            col: t
                                        };
                                for (let e = _ + 1; e < 8; e++)
                                    if (l(e, t))
                                        return {
                                            row: e,
                                            col: t
                                        }
                            }
                            break;
                        case "right":
                            for (let t = e + 1; t < 8; t++)
                                if (l(_, t))
                                    return {
                                        row: _,
                                        col: t
                                    };
                            for (let t = e + 1; t < 8; t++) {
                                for (let e = _ - 1; e >= 0; e--)
                                    if (l(e, t))
                                        return {
                                            row: e,
                                            col: t
                                        };
                                for (let e = _ + 1; e < 8; e++)
                                    if (l(e, t))
                                        return {
                                            row: e,
                                            col: t
                                        }
                            }
                        }
                        return null
                    },
                    findFirstUnopenedCell() {
                        for (let _ = 0; _ < 8; _++)
                            for (let e = 0; e < 8; e++) {
                                let t = 8 * _ + e;
                                if (!this.cells[t].active)
                                    return {
                                        row: _,
                                        col: e
                                    }
                            }
                        return null
                    },
                    initializeGrid() {
                        this.cells = Array(64).fill().map(() => ({
                                    value: 0,
                                    active: !1,
                                    neighborCount: null,
                                    isFlagged: !1
                                })),
                        this.firstClick = !0,
                        this.gameState = "playing",
                        this.markedCell = {
                            row: -1,
                            col: -1
                        }
                    },
                    markCell() {
                        let { row: _, col: e } = this.selectedCell;
                        if (-1 === _ || -1 === e)
                            return;
                        let t = this.cells[8 * _ + e];
                        t.isFlagged = !t.isFlagged,
                        t.isFlagged ? this.markedCell = {
                            row: _,
                            col: e
                        }
                         : this.markedCell = {
                            row: -1,
                            col: -1
                        }
                    },
                    handleCellClick(_, e) {
                        this.cells[8 * _ + e].active || "playing" !== this.gameState || (this.selectedCell = {
                                row: _,
                                col: e
                            }, this.showCheckImage = !0)
                    },
                    confirmOpenCell() {
                        let { row: _, col: e } = this.selectedCell;
                        this.revealCell(_, e);
                        let t = 8 * _ + e;
                        this.cells[t].isFlagged = !1,
                        this.markedCell = {
                            row: -1,
                            col: -1
                        },
                        this.selectedCell = {
                            row: -1,
                            col: -1
                        },
                        this.showCheckImage = !1
                    },
                    getNeighborCount(_, e) {
                        let t = 0;
                        for (let [l, c] of[[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]) {
                            let o = _ + l,
                            i = e + c;
                            if (o >= 0 && o < 8 && i >= 0 && i < 8) {
                                let _ = 8 * o + i;
                                1 === this.cells[_].value && t++
                            }
                        }
                        return t
                    },
                    initGameSettings() {
                        switch (this.gameMode) {
                        case "beginner":
                            this.gridSize = 8,
                            this.mineCount = 8,
                            this.modeButtonText = "easy";
                            break;
                        case "intermediate":
                            this.gridSize = 8,
                            this.mineCount = 12,
                            this.modeButtonText = "medium";
                            break;
                        case "expert":
                            this.gridSize = 8,
                            this.mineCount = 16,
                            this.modeButtonText = "expert"
                        }
                        this.remainingMines = this.mineCount,
                        i(() => this.calculateCellSize(), 0)
                    },
                    startNewGame() {
                        this.gameTime = 0,
                        this.remainingMines = this.mineCount,
                        this.statusMessage = "",
                        this.timerId && (s(this.timerId), this.timerId = null),
                        this.initializeGrid()
                    },
                    startTimer() {
                        this.startTime = new Date().getTime(),
                        this.timerId = n(() => {
                            this.gameTime = Math.floor((new Date().getTime() - this.startTime) / 1e3)
                        }, 1e3)
                    },
                    generateMinesAfterFirstClick(_, e) {
                        let t = new Set;
                        for (let l = -1; l <= 1; l++)
                            for (let c = -1; c <= 1; c++) {
                                let o = _ + l,
                                i = e + c;
                                o >= 0 && o < 8 && i >= 0 && i < 8 && t.add(8 * o + i)
                            }
                        let l = new Set;
                        for (; l.size < this.mineCount; ) {
                            let _ = Math.floor(64 * Math.random());
                            t.has(_) || l.add(_)
                        }
                        for (let _ = 0; _ < 64; _++)
                            this.cells[_].value =  + !!l.has(_);
                        for (let _ = 0; _ < 8; _++)
                            for (let e = 0; e < 8; e++) {
                                let t = 8 * _ + e;
                                this.cells[t].active || (this.cells[t].neighborCount = this.getNeighborCount(_, e))
                            }
                    },
                    revealCell(_, e) {
                        let t = 8 * _ + e,
                        l = this.cells[t];
                        if (this.firstClick && (this.generateMinesAfterFirstClick(_, e), this.firstClick = !1, this.startTimer()), "playing" !== this.gameState || l.active)
                            return;
                        if (l.active = !0, 1 === l.value) {
                            this.gameState = "lose",
                            this.statusMessage = "Game Over",
                            this.revealAllMines(),
                            s(this.timerId),
                            this.timerId = null;
                            return
                        }
                        let c = this.getNeighborCount(_, e);
                        if (l.neighborCount = c, 0 === c)
                            for (let [t, l] of[[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]) {
                                let c = _ + t,
                                o = e + l;
                                c >= 0 && c < 8 && o >= 0 && o < 8 && this.revealCell(c, o)
                            }
                        this.checkWinCondition()
                    },
                    revealAllMines() {
                        for (let _ = 0; _ < 64; _++)
                            1 === this.cells[_].value && (this.cells[_].active = !0)
                    },
                    revealAdjacentCells(_, e) {
                        let t = [[_, e]],
                        l = new Set;
                        for (; t.length > 0; ) {
                            let [_, e] = t.shift(),
                            c = 8 * _ + e + 1;
                            if (l.has(c) || "X" === this[`text${c}`])
                                continue;
                            l.add(c);
                            let o = this.getNeighborCount(_, e);
                            if (this[`text${c}`] = "X", 0 === o)
                                for (let l = -1; l <= 1; l++)
                                    for (let c = -1; c <= 1; c++) {
                                        if (0 === l && 0 === c)
                                            continue;
                                        let o = _ + l,
                                        i = e + c;
                                        o >= 0 && o < 8 && i >= 0 && i < 8 && t.push([o, i])
                                    }
                        }
                    },
                    checkWinCondition() {
                        let _ = 0;
                        for (let e = 0; e < 64; e++)
                            !this.cells[e].active && 0 === this.cells[e].value && _++;
                        0 === _ && "playing" === this.gameState && (this.gameState = "win", this.statusMessage = "Victory!", console.log("游戏胜利:", this.statusMessage), this.revealAllMines(), s(this.timerId), this.timerId = null, this.checkAndUpdateBestTime())
                    },
                    checkAndUpdateBestTime() {
                        let _ = this.gameTime,
                        e = this.gameMode;
                        _ < this.bestTimes[e] && (this.bestTimes[e] = _, this.updateCurrentBestTime(), c.default.writeText({
                                uri: `internal://files/mine_best_${e}.txt`,
                                text: _.toString(),
                                success: () => {
                                    console.log(`保存${e}最佳时间成功: ${_}`)
                                },
                                fail: _ => {
                                    console.error(`保存最佳时间失败: ${_.code}`)
                                }
                            }))
                    },
                    restartGame() {
                        this.startNewGame(),
                        this.markedCell = {
                            row: -1,
                            col: -1
                        }
                    },
                    toggleGameMode() {
                        let _ = ["beginner", "intermediate", "expert"],
                        e = _.indexOf(this.gameMode);
                        this.gameMode = _[(e + 1) % _.length],
                        this.initGameSettings(),
                        this.startNewGame(),
                        this.updateCurrentBestTime()
                    },
                    getCellClass: _ => _.isRevealed ? _.isMine ? "cell-mine" : _.neighborMines > 0 ? `cell-revealed number-${_.neighborMines}` : "cell-revealed" : _.isFlagged ? "cell-flagged" : "cell-hidden",
                    getCellContent: _ => _.isRevealed ? _.isMine ? "bo" : _.neighborMines > 0 ? _.neighborMines : "" : _.isFlagged ? "\uD83D\uDEA9" : "",
                    back(_) {
                        "right" === _.direction && l.default.back()
                    },
                    routeAbout() {
                        l.default.push({
                            uri: "/pages/about"
                        })
                    }
                };
                let r = e.default || _.exports,
                a = ["public", "protected", "private"];
                if (r.data && a.some(function (_) {
                        return r[_]
                    }))
                    throw Error('页面VM对象中的属性data不可与"' + a.join(",") + '"同时存在，请使用private替换data名称');
                r.data || (r.data = {}, r._descriptor = {}, a.forEach(function (_) {
                        let e = typeof r[_];
                        if ("object" === e)
                            for (let e in r.data = Object.assign(r.data, r[_]), r[_])
                                r._descriptor[e] = {
                                    access: _
                                };
                        else
                            "function" === e && console.warn("页面VM对象中的属性" + _ + "的值不能是函数，请使用对象")
                    }))
            },
            u = function (_) {
                let e = _ || this;
                return aiot.__ce__("div", {
                    __vm__: e,
                    __opts__: {
                        classList: ["game-page"],
                        events: {
                            swipe: function (_) {
                                return e.back(_)
                            }
                        }
                    }
                }, [aiot.__ce__("image", {
                            __vm__: e,
                            __opts__: {
                                classList: ["info"],
                                src: "/common/info.png",
                                events: {
                                    click: function (_) {
                                        return e.routeAbout(_)
                                    }
                                },
                                style: {
                                    width: "60px",
                                    top: "8px"
                                }
                            }
                        }, []), aiot.__ce__("div", {
                            __vm__: e,
                            __opts__: {
                                classList: ["game-header"]
                            }
                        }, [aiot.__ci__({
                                    __vm__: e,
                                    __opts__: {
                                        shown: function () {
                                            return !e.showCheckImage
                                        }
                                    }
                                }, function () {
                                    return [aiot.__ce__("text", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["game-title"],
                                                value: "MineSweeper"
                                            }
                                        }, [])]
                                }), aiot.__ci__({
                                    __vm__: e,
                                    __opts__: {
                                        shown: function () {
                                            return e.showCheckImage
                                        }
                                    }
                                }, function () {
                                    return [aiot.__ce__("input", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["button"],
                                                type: "button",
                                                value: "OPEN",
                                                events: {
                                                    click: function (_) {
                                                        return e.confirmOpenCell(_)
                                                    }
                                                }
                                            }
                                        }, [])]
                                })]), aiot.__ce__("div", {
                            __vm__: e,
                            __opts__: {
                                classList: ["game-stats"]
                            }
                        }, [aiot.__ce__("text", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["stat-label"],
                                        value: "Mines:"
                                    }
                                }, []), aiot.__ce__("text", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["stat-value"],
                                        value: function () {
                                            return e.remainingMines
                                        }
                                    }
                                }, []), aiot.__ce__("text", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["stat-label"],
                                        value: "Time:"
                                    }
                                }, []), aiot.__ce__("text", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["stat-value"],
                                        value: function () {
                                            return e.gameTime + "s"
                                        }
                                    }
                                }, [])]), aiot.__ce__("div", {
                            __vm__: e,
                            __opts__: {
                                classList: ["minefield"]
                            }
                        }, [aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["group"]
                                    }
                                }, [aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[0].active ? "#000" : 0 === e.selectedCell.row && 0 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(0, 0, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[0].isFlagged && 0 === e.selectedCell.row && 0 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[0].isFlagged && (0 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[0].isFlagged && !e.cells[0].active && (0 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[0].value && (e.cells[0].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[0].value && e.cells[0].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[0].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[1].active ? "#000" : 0 === e.selectedCell.row && 1 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(0, 1, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[1].isFlagged && 0 === e.selectedCell.row && 1 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[1].isFlagged && (0 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[1].isFlagged && !e.cells[1].active && (0 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[1].value && (e.cells[1].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[1].value && e.cells[1].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[1].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[2].active ? "#000" : 0 === e.selectedCell.row && 2 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(0, 2, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[2].isFlagged && 0 === e.selectedCell.row && 2 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[2].isFlagged && (0 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[2].isFlagged && !e.cells[2].active && (0 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[2].value && (e.cells[2].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[2].value && e.cells[2].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[2].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[3].active ? "#000" : 0 === e.selectedCell.row && 3 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(0, 3, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[3].isFlagged && 0 === e.selectedCell.row && 3 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[3].isFlagged && (0 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[3].isFlagged && !e.cells[3].active && (0 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[3].value && (e.cells[3].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[3].value && e.cells[3].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[3].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[4].active ? "#000" : 0 === e.selectedCell.row && 4 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(0, 4, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[4].isFlagged && 0 === e.selectedCell.row && 4 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[4].isFlagged && (0 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[4].isFlagged && !e.cells[4].active && (0 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[4].value && (e.cells[4].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[4].value && e.cells[4].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[4].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[5].active ? "#000" : 0 === e.selectedCell.row && 5 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(0, 5, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[5].isFlagged && 0 === e.selectedCell.row && 5 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[5].isFlagged && (0 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[5].isFlagged && !e.cells[5].active && (0 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[5].value && (e.cells[5].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[5].value && e.cells[5].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[5].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[6].active ? "#000" : 0 === e.selectedCell.row && 6 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(0, 6, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[6].isFlagged && 0 === e.selectedCell.row && 6 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[6].isFlagged && (0 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[6].isFlagged && !e.cells[6].active && (0 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[6].value && (e.cells[6].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[6].value && e.cells[6].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[6].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[7].active ? "#000" : 0 === e.selectedCell.row && 7 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(0, 7, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[7].isFlagged && 0 === e.selectedCell.row && 7 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[7].isFlagged && (0 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[7].isFlagged && !e.cells[7].active && (0 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[7].value && (e.cells[7].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[7].value && e.cells[7].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[7].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })])]), aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["group"]
                                    }
                                }, [aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[8].active ? "#000" : 1 === e.selectedCell.row && 0 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(1, 0, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[8].isFlagged && 1 === e.selectedCell.row && 0 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[8].isFlagged && (1 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[8].isFlagged && !e.cells[8].active && (1 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[8].value && (e.cells[8].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[8].value && e.cells[8].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[8].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[9].active ? "#000" : 1 === e.selectedCell.row && 1 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(1, 1, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[9].isFlagged && 1 === e.selectedCell.row && 1 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[9].isFlagged && (1 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[9].isFlagged && !e.cells[9].active && (1 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[9].value && (e.cells[9].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[9].value && e.cells[9].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[9].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[10].active ? "#000" : 1 === e.selectedCell.row && 2 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(1, 2, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[10].isFlagged && 1 === e.selectedCell.row && 2 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[10].isFlagged && (1 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[10].isFlagged && !e.cells[10].active && (1 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[10].value && (e.cells[10].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[10].value && e.cells[10].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[10].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[11].active ? "#000" : 1 === e.selectedCell.row && 3 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(1, 3, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[11].isFlagged && 1 === e.selectedCell.row && 3 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[11].isFlagged && (1 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[11].isFlagged && !e.cells[11].active && (1 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[11].value && (e.cells[11].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[11].value && e.cells[11].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[11].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[12].active ? "#000" : 1 === e.selectedCell.row && 4 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(1, 4, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[12].isFlagged && 1 === e.selectedCell.row && 4 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[12].isFlagged && (1 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[12].isFlagged && !e.cells[12].active && (1 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[12].value && (e.cells[12].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[12].value && e.cells[12].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[12].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[13].active ? "#000" : 1 === e.selectedCell.row && 5 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(1, 5, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[13].isFlagged && 1 === e.selectedCell.row && 5 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[13].isFlagged && (1 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[13].isFlagged && !e.cells[13].active && (1 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[13].value && (e.cells[13].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[13].value && e.cells[13].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[13].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[14].active ? "#000" : 1 === e.selectedCell.row && 6 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(1, 6, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[14].isFlagged && 1 === e.selectedCell.row && 6 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[14].isFlagged && (1 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[14].isFlagged && !e.cells[14].active && (1 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[14].value && (e.cells[14].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[14].value && e.cells[14].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[14].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[15].active ? "#000" : 1 === e.selectedCell.row && 7 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(1, 7, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[15].isFlagged && 1 === e.selectedCell.row && 7 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[15].isFlagged && (1 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[15].isFlagged && !e.cells[15].active && (1 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[15].value && (e.cells[15].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[15].value && e.cells[15].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[15].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })])]), aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["group"]
                                    }
                                }, [aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[16].active ? "#000" : 2 === e.selectedCell.row && 0 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(2, 0, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[16].isFlagged && 2 === e.selectedCell.row && 0 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[16].isFlagged && (2 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[16].isFlagged && !e.cells[16].active && (2 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[16].value && (e.cells[16].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[16].value && e.cells[16].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[16].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[17].active ? "#000" : 2 === e.selectedCell.row && 1 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(2, 1, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[17].isFlagged && 2 === e.selectedCell.row && 1 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[17].isFlagged && (2 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[17].isFlagged && !e.cells[17].active && (2 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[17].value && (e.cells[17].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[17].value && e.cells[17].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[17].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[18].active ? "#000" : 2 === e.selectedCell.row && 2 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(2, 2, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[18].isFlagged && 2 === e.selectedCell.row && 2 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[18].isFlagged && (2 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[18].isFlagged && !e.cells[18].active && (2 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[18].value && (e.cells[18].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[18].value && e.cells[18].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[18].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[19].active ? "#000" : 2 === e.selectedCell.row && 3 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(2, 3, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[19].isFlagged && 2 === e.selectedCell.row && 3 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[19].isFlagged && (2 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[19].isFlagged && !e.cells[19].active && (2 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[19].value && (e.cells[19].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[19].value && e.cells[19].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[19].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[20].active ? "#000" : 2 === e.selectedCell.row && 4 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(2, 4, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[20].isFlagged && 2 === e.selectedCell.row && 4 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[20].isFlagged && (2 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[20].isFlagged && !e.cells[20].active && (2 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[20].value && (e.cells[20].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[20].value && e.cells[20].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[20].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[21].active ? "#000" : 2 === e.selectedCell.row && 5 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(2, 5, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[21].isFlagged && 2 === e.selectedCell.row && 5 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[21].isFlagged && (2 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[21].isFlagged && !e.cells[21].active && (2 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[21].value && (e.cells[21].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[21].value && e.cells[21].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[21].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[22].active ? "#000" : 2 === e.selectedCell.row && 6 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(2, 6, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[22].isFlagged && 2 === e.selectedCell.row && 6 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[22].isFlagged && (2 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[22].isFlagged && !e.cells[22].active && (2 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[22].value && (e.cells[22].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[22].value && e.cells[22].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[22].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[23].active ? "#000" : 2 === e.selectedCell.row && 7 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(2, 7, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[23].isFlagged && 2 === e.selectedCell.row && 7 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[23].isFlagged && (2 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[23].isFlagged && !e.cells[23].active && (2 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[23].value && (e.cells[23].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[23].value && e.cells[23].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[23].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })])]), aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["group"]
                                    }
                                }, [aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[24].active ? "#000" : 3 === e.selectedCell.row && 0 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(3, 0, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[24].isFlagged && 3 === e.selectedCell.row && 0 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[24].isFlagged && (3 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[24].isFlagged && !e.cells[24].active && (3 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[24].value && (e.cells[24].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[24].value && e.cells[24].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[24].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[25].active ? "#000" : 3 === e.selectedCell.row && 1 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(3, 1, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[25].isFlagged && 3 === e.selectedCell.row && 1 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[25].isFlagged && (3 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[25].isFlagged && !e.cells[25].active && (3 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[25].value && (e.cells[25].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[25].value && e.cells[25].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[25].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[26].active ? "#000" : 3 === e.selectedCell.row && 2 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(3, 2, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[26].isFlagged && 3 === e.selectedCell.row && 2 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[26].isFlagged && (3 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[26].isFlagged && !e.cells[26].active && (3 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[26].value && (e.cells[26].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[26].value && e.cells[26].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[26].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[27].active ? "#000" : 3 === e.selectedCell.row && 3 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(3, 3, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[27].isFlagged && 3 === e.selectedCell.row && 3 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[27].isFlagged && (3 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[27].isFlagged && !e.cells[27].active && (3 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[27].value && (e.cells[27].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[27].value && e.cells[27].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[27].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[28].active ? "#000" : 3 === e.selectedCell.row && 4 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(3, 4, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[28].isFlagged && 3 === e.selectedCell.row && 4 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[28].isFlagged && (3 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[28].isFlagged && !e.cells[28].active && (3 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[28].value && (e.cells[28].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[28].value && e.cells[28].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[28].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[29].active ? "#000" : 3 === e.selectedCell.row && 5 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(3, 5, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[29].isFlagged && 3 === e.selectedCell.row && 5 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[29].isFlagged && (3 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[29].isFlagged && !e.cells[29].active && (3 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[29].value && (e.cells[29].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[29].value && e.cells[29].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[29].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[30].active ? "#000" : 3 === e.selectedCell.row && 6 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(3, 6, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[30].isFlagged && 3 === e.selectedCell.row && 6 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[30].isFlagged && (3 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[30].isFlagged && !e.cells[30].active && (3 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[30].value && (e.cells[30].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[30].value && e.cells[30].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[30].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[31].active ? "#000" : 3 === e.selectedCell.row && 7 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(3, 7, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[31].isFlagged && 3 === e.selectedCell.row && 7 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[31].isFlagged && (3 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[31].isFlagged && !e.cells[31].active && (3 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[31].value && (e.cells[31].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[31].value && e.cells[31].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[31].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })])]), aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["group"]
                                    }
                                }, [aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[32].active ? "#000" : 4 === e.selectedCell.row && 0 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(4, 0, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[32].isFlagged && 4 === e.selectedCell.row && 0 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[32].isFlagged && (4 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[32].isFlagged && !e.cells[32].active && (4 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[32].value && (e.cells[32].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[32].value && e.cells[32].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[32].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[33].active ? "#000" : 4 === e.selectedCell.row && 1 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(4, 1, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[33].isFlagged && 4 === e.selectedCell.row && 1 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[33].isFlagged && (4 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[33].isFlagged && !e.cells[33].active && (4 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[33].value && (e.cells[33].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[33].value && e.cells[33].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[33].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[34].active ? "#000" : 4 === e.selectedCell.row && 2 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(4, 2, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[34].isFlagged && 4 === e.selectedCell.row && 2 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[34].isFlagged && (4 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[34].isFlagged && !e.cells[34].active && (4 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[34].value && (e.cells[34].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[34].value && e.cells[34].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[34].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[35].active ? "#000" : 4 === e.selectedCell.row && 3 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(4, 3, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[35].isFlagged && 4 === e.selectedCell.row && 3 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[35].isFlagged && (4 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[35].isFlagged && !e.cells[35].active && (4 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[35].value && (e.cells[35].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[35].value && e.cells[35].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[35].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[36].active ? "#000" : 4 === e.selectedCell.row && 4 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(4, 4, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[36].isFlagged && 4 === e.selectedCell.row && 4 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[36].isFlagged && (4 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[36].isFlagged && !e.cells[36].active && (4 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[36].value && (e.cells[36].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[36].value && e.cells[36].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[36].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[37].active ? "#000" : 4 === e.selectedCell.row && 5 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(4, 5, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[37].isFlagged && 4 === e.selectedCell.row && 5 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[37].isFlagged && (4 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[37].isFlagged && !e.cells[37].active && (4 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[37].value && (e.cells[37].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[37].value && e.cells[37].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[37].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[38].active ? "#000" : 4 === e.selectedCell.row && 6 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(4, 6, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[38].isFlagged && 4 === e.selectedCell.row && 6 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[38].isFlagged && (4 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[38].isFlagged && !e.cells[38].active && (4 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[38].value && (e.cells[38].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[38].value && e.cells[38].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[38].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[39].active ? "#000" : 4 === e.selectedCell.row && 7 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(4, 7, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[39].isFlagged && 4 === e.selectedCell.row && 7 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[39].isFlagged && (4 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[39].isFlagged && !e.cells[39].active && (4 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[39].value && (e.cells[39].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[39].value && e.cells[39].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[39].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })])]), aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["group"]
                                    }
                                }, [aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[40].active ? "#000" : 5 === e.selectedCell.row && 0 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(5, 0, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[40].isFlagged && 5 === e.selectedCell.row && 0 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[40].isFlagged && (5 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[40].isFlagged && !e.cells[40].active && (5 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[40].value && (e.cells[40].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[40].value && e.cells[40].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[40].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[41].active ? "#000" : 5 === e.selectedCell.row && 1 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(5, 1, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[41].isFlagged && 5 === e.selectedCell.row && 1 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[41].isFlagged && (5 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[41].isFlagged && !e.cells[41].active && (5 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[41].value && (e.cells[41].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[41].value && e.cells[41].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[41].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[42].active ? "#000" : 5 === e.selectedCell.row && 2 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(5, 2, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[42].isFlagged && 5 === e.selectedCell.row && 2 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[42].isFlagged && (5 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[42].isFlagged && !e.cells[42].active && (5 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[42].value && (e.cells[42].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[42].value && e.cells[42].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[42].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[43].active ? "#000" : 5 === e.selectedCell.row && 3 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(5, 3, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[43].isFlagged && 5 === e.selectedCell.row && 3 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[43].isFlagged && (5 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[43].isFlagged && !e.cells[43].active && (5 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[43].value && (e.cells[43].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[43].value && e.cells[43].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[43].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[44].active ? "#000" : 5 === e.selectedCell.row && 4 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(5, 4, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[44].isFlagged && 5 === e.selectedCell.row && 4 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[44].isFlagged && (5 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[44].isFlagged && !e.cells[44].active && (5 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[44].value && (e.cells[44].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[44].value && e.cells[44].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[44].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[45].active ? "#000" : 5 === e.selectedCell.row && 5 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(5, 5, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[45].isFlagged && 5 === e.selectedCell.row && 5 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[45].isFlagged && (5 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[45].isFlagged && !e.cells[45].active && (5 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[45].value && (e.cells[45].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[45].value && e.cells[45].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[45].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[46].active ? "#000" : 5 === e.selectedCell.row && 6 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(5, 6, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[46].isFlagged && 5 === e.selectedCell.row && 6 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[46].isFlagged && (5 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[46].isFlagged && !e.cells[46].active && (5 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[46].value && (e.cells[46].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[46].value && e.cells[46].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[46].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[47].active ? "#000" : 5 === e.selectedCell.row && 7 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(5, 7, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[47].isFlagged && 5 === e.selectedCell.row && 7 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[47].isFlagged && (5 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[47].isFlagged && !e.cells[47].active && (5 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[47].value && (e.cells[47].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[47].value && e.cells[47].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[47].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })])]), aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["group"]
                                    }
                                }, [aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[48].active ? "#000" : 6 === e.selectedCell.row && 0 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(6, 0, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[48].isFlagged && 6 === e.selectedCell.row && 0 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[48].isFlagged && (6 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[48].isFlagged && !e.cells[48].active && (6 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[48].value && (e.cells[48].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[48].value && e.cells[48].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[48].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[49].active ? "#000" : 6 === e.selectedCell.row && 1 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(6, 1, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[49].isFlagged && 6 === e.selectedCell.row && 1 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[49].isFlagged && (6 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[49].isFlagged && !e.cells[49].active && (6 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[49].value && (e.cells[49].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[49].value && e.cells[49].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[49].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[50].active ? "#000" : 6 === e.selectedCell.row && 2 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(6, 2, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[50].isFlagged && 6 === e.selectedCell.row && 2 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[50].isFlagged && (6 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[50].isFlagged && !e.cells[50].active && (6 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[50].value && (e.cells[50].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[50].value && e.cells[50].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[50].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[51].active ? "#000" : 6 === e.selectedCell.row && 3 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(6, 3, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[51].isFlagged && 6 === e.selectedCell.row && 3 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[51].isFlagged && (6 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[51].isFlagged && !e.cells[51].active && (6 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[51].value && (e.cells[51].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[51].value && e.cells[51].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[51].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[52].active ? "#000" : 6 === e.selectedCell.row && 4 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(6, 4, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[52].isFlagged && 6 === e.selectedCell.row && 4 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[52].isFlagged && (6 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[52].isFlagged && !e.cells[52].active && (6 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[52].value && (e.cells[52].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[52].value && e.cells[52].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[52].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[53].active ? "#000" : 6 === e.selectedCell.row && 5 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(6, 5, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[53].isFlagged && 6 === e.selectedCell.row && 5 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[53].isFlagged && (6 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[53].isFlagged && !e.cells[53].active && (6 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[53].value && (e.cells[53].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[53].value && e.cells[53].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[53].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[54].active ? "#000" : 6 === e.selectedCell.row && 6 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(6, 6, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[54].isFlagged && 6 === e.selectedCell.row && 6 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[54].isFlagged && (6 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[54].isFlagged && !e.cells[54].active && (6 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[54].value && (e.cells[54].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[54].value && e.cells[54].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[54].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[55].active ? "#000" : 6 === e.selectedCell.row && 7 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(6, 7, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[55].isFlagged && 6 === e.selectedCell.row && 7 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[55].isFlagged && (6 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[55].isFlagged && !e.cells[55].active && (6 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[55].value && (e.cells[55].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[55].value && e.cells[55].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[55].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })])]), aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["group"]
                                    }
                                }, [aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[56].active ? "#000" : 7 === e.selectedCell.row && 0 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(7, 0, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[56].isFlagged && 7 === e.selectedCell.row && 0 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[56].isFlagged && (7 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[56].isFlagged && !e.cells[56].active && (7 !== e.selectedCell.row || 0 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[56].value && (e.cells[56].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[56].value && e.cells[56].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[56].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[57].active ? "#000" : 7 === e.selectedCell.row && 1 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(7, 1, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[57].isFlagged && 7 === e.selectedCell.row && 1 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[57].isFlagged && (7 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[57].isFlagged && !e.cells[57].active && (7 !== e.selectedCell.row || 1 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[57].value && (e.cells[57].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[57].value && e.cells[57].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[57].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[58].active ? "#000" : 7 === e.selectedCell.row && 2 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(7, 2, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[58].isFlagged && 7 === e.selectedCell.row && 2 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[58].isFlagged && (7 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[58].isFlagged && !e.cells[58].active && (7 !== e.selectedCell.row || 2 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[58].value && (e.cells[58].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[58].value && e.cells[58].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[58].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[59].active ? "#000" : 7 === e.selectedCell.row && 3 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(7, 3, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[59].isFlagged && 7 === e.selectedCell.row && 3 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[59].isFlagged && (7 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[59].isFlagged && !e.cells[59].active && (7 !== e.selectedCell.row || 3 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[59].value && (e.cells[59].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[59].value && e.cells[59].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[59].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[60].active ? "#000" : 7 === e.selectedCell.row && 4 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(7, 4, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[60].isFlagged && 7 === e.selectedCell.row && 4 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[60].isFlagged && (7 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[60].isFlagged && !e.cells[60].active && (7 !== e.selectedCell.row || 4 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[60].value && (e.cells[60].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[60].value && e.cells[60].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[60].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[61].active ? "#000" : 7 === e.selectedCell.row && 5 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(7, 5, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[61].isFlagged && 7 === e.selectedCell.row && 5 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[61].isFlagged && (7 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[61].isFlagged && !e.cells[61].active && (7 !== e.selectedCell.row || 5 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[61].value && (e.cells[61].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[61].value && e.cells[61].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[61].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[62].active ? "#000" : 7 === e.selectedCell.row && 6 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(7, 6, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[62].isFlagged && 7 === e.selectedCell.row && 6 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[62].isFlagged && (7 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[62].isFlagged && !e.cells[62].active && (7 !== e.selectedCell.row || 6 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[62].value && (e.cells[62].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[62].value && e.cells[62].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[62].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })]), aiot.__ce__("div", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["grid-cell"],
                                                style: function () {
                                                    return a("background-color: " + (e.cells[63].active ? "#000" : 7 === e.selectedCell.row && 7 === e.selectedCell.col ? "#4a90e2" : "#D0F8F4"))
                                                },
                                                events: {
                                                    click: function (_) {
                                                        return e.handleCellClick(7, 7, _)
                                                    }
                                                }
                                            }
                                        }, [aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[63].isFlagged && 7 === e.selectedCell.row && 7 === e.selectedCell.col
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flagactive.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return e.cells[63].isFlagged && (7 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/flag.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return !e.cells[63].isFlagged && !e.cells[63].active && (7 !== e.selectedCell.row || 7 !== e.selectedCell.col)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/cell.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 === e.cells[63].value && (e.cells[63].active || "playing" !== e.gameState)
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("image", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                src: "/common/mine.png",
                                                                style: {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }
                                                        }, [])]
                                                }), aiot.__ci__({
                                                    __vm__: e,
                                                    __opts__: {
                                                        shown: function () {
                                                            return 1 !== e.cells[63].value && e.cells[63].active
                                                        }
                                                    }
                                                }, function () {
                                                    return [aiot.__ce__("text", {
                                                            __vm__: e,
                                                            __opts__: {
                                                                classList: ["cell-content"],
                                                                value: function () {
                                                                    return e.cells[63].neighborCount || ""
                                                                }
                                                            }
                                                        }, [])]
                                                })])])]), aiot.__ce__("div", {
                            __vm__: e,
                            __opts__: {
                                classList: ["mark-control"],
                                style: {
                                    padding: "0",
                                    marginBottom: "15px"
                                }
                            }
                        }, [aiot.__ci__({
                                    __vm__: e,
                                    __opts__: {
                                        shown: function () {
                                            return e.showCheckImage
                                        }
                                    }
                                }, function () {
                                    return [aiot.__ce__("input", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["button"],
                                                type: "button",
                                                value: "FLAG",
                                                events: {
                                                    click: function (_) {
                                                        return e.markCell(_)
                                                    }
                                                }
                                            }
                                        }, [])]
                                })]), aiot.__ce__("input", {
                            __vm__: e,
                            __opts__: {
                                classList: ["ctrlbut"],
                                type: "button",
                                value: "UP",
                                style: {
                                    top: "0px"
                                },
                                events: {
                                    click: function (_) {
                                        return e.moveSelection("up", _)
                                    }
                                }
                            }
                        }, []), aiot.__ce__("div", {
                            __vm__: e,
                            __opts__: {
                                classList: ["lrbut"]
                            }
                        }, [aiot.__ce__("input", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["ctrlbut"],
                                        type: "button",
                                        value: "LEFT",
                                        style: {
                                            top: "0px"
                                        },
                                        events: {
                                            click: function (_) {
                                                return e.moveSelection("left", _)
                                            }
                                        }
                                    }
                                }, []), aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        style: {
                                            height: "1px",
                                            width: "10px"
                                        }
                                    }
                                }, []), aiot.__ce__("input", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["ctrlbut"],
                                        type: "button",
                                        value: "RIGHT",
                                        style: {
                                            top: "0px"
                                        },
                                        events: {
                                            click: function (_) {
                                                return e.moveSelection("right", _)
                                            }
                                        }
                                    }
                                }, [])]), aiot.__ce__("input", {
                            __vm__: e,
                            __opts__: {
                                classList: ["ctrlbut"],
                                type: "button",
                                value: "DOWN",
                                style: {
                                    top: "10px"
                                },
                                events: {
                                    click: function (_) {
                                        return e.moveSelection("down", _)
                                    }
                                }
                            }
                        }, []), aiot.__ce__("div", {
                            __vm__: e,
                            __opts__: {
                                classList: ["game-controls"]
                            }
                        }, [aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["control-button"],
                                        events: {
                                            click: function (_) {
                                                return e.restartGame(_)
                                            }
                                        }
                                    }
                                }, [aiot.__ce__("text", {
                                            __vm__: e,
                                            __opts__: {
                                                value: "RESTART"
                                            }
                                        }, [])]), aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        style: {
                                            height: "10px"
                                        }
                                    }
                                }, []), aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["control-button"],
                                        events: {
                                            click: function (_) {
                                                return e.toggleGameMode(_)
                                            }
                                        }
                                    }
                                }, [aiot.__ce__("text", {
                                            __vm__: e,
                                            __opts__: {
                                                value: function () {
                                                    return e.modeButtonText
                                                }
                                            }
                                        }, [])])]), aiot.__ci__({
                            __vm__: e,
                            __opts__: {
                                shown: function () {
                                    return "playing" !== e.gameState
                                }
                            }
                        }, function () {
                            return [aiot.__ce__("div", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["game-status"]
                                    }
                                }, [aiot.__ce__("text", {
                                            __vm__: e,
                                            __opts__: {
                                                classList: ["status-message"],
                                                value: function () {
                                                    return e.statusMessage
                                                }
                                            }
                                        }, [])])]
                        }), aiot.__ce__("div", {
                            __vm__: e,
                            __opts__: {
                                classList: ["game-stats"],
                                style: {
                                    top: "110px"
                                }
                            }
                        }, [aiot.__ce__("text", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["stat-label"],
                                        value: "Best Time:"
                                    }
                                }, []), aiot.__ce__("text", {
                                    __vm__: e,
                                    __opts__: {
                                        classList: ["stat-value"],
                                        value: function () {
                                            return e.bestTime + "s"
                                        }
                                    }
                                }, [])]), aiot.__ce__("div", {
                            __vm__: e,
                            __opts__: {
                                style: {
                                    height: "200px"
                                }
                            }
                        }, [])])
            };
            l.entry = function (_) {
                o({}, _, r),
                _.default.template = u,
                _.default.style = c
            }
        })()
    }
    (_, 0, 0, l, 0)
}
