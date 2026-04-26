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
                                "page"
                            ]
                        ],
                        {
                            width: "192px",
                            height: "490px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            flexDirection: "column"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "level-container"
                            ]
                        ],
                        {
                            width: "192px",
                            height: "30px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "level"
                            ]
                        ],
                        {
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#0b300b"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "header"
                            ]
                        ],
                        {
                            width: "192px",
                            height: "40px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "header-title"
                            ]
                        ],
                        {
                            fontSize: "28px",
                            fontWeight: 700,
                            color: "#0b300b"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "board"
                            ]
                        ],
                        {
                            position: "relative",
                            width: "192px",
                            height: "300px",
                            overflow: "hidden"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "tile"
                            ]
                        ],
                        {
                            position: "absolute",
                            width: "36px",
                            height: "36px",
                            borderRadius: "6px",
                            backgroundColor: "rgba(255, 255, 255, 0.96)",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 2px 3px rgba(0, 0, 0, 0.35)",
                            borderTopColor: "rgba(0, 0, 0, 0.35)",
                            borderRightColor: "rgba(0, 0, 0, 0.35)",
                            borderBottomColor: "rgba(0, 0, 0, 0.35)",
                            borderLeftColor: "rgba(0, 0, 0, 0.35)",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            transitionProperty: "none",
                            transitionTimingFunction: "ease",
                            transitionDuration: "0s",
                            transitionDelay: "0s"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "tile-img"
                            ]
                        ],
                        {
                            width: "24px",
                            height: "24px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "slot-bar"
                            ]
                        ],
                        {
                            width: "192px",
                            height: "70px",
                            paddingLeft: "6px",
                            paddingRight: "6px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "slot"
                            ]
                        ],
                        {
                            width: "28px",
                            height: "32px",
                            marginLeft: "0.1px",
                            marginRight: "0.1px",
                            borderRadius: "6px",
                            backgroundColor: "rgba(255, 255, 255, 0)",
                            borderTopColor: "rgba(0, 0, 0, 0.35)",
                            borderRightColor: "rgba(0, 0, 0, 0.35)",
                            borderBottomColor: "rgba(0, 0, 0, 0.35)",
                            borderLeftColor: "rgba(0, 0, 0, 0.35)",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "slot-img"
                            ]
                        ],
                        {
                            width: "24px",
                            height: "24px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "actions"
                            ]
                        ],
                        {
                            width: "192px",
                            height: "50px",
                            alignItems: "center",
                            justifyContent: "space-around",
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
                            width: "58px",
                            height: "32px",
                            borderRadius: "16px",
                            fontSize: "14px",
                            color: "#111111",
                            backgroundColor: "#d6ffd6",
                            borderStyle: "none",
                            marginRight: "-2px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "exit"
                            ]
                        ],
                        {
                            backgroundColor: "#77a33f"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "setup"
                            ]
                        ],
                        {
                            backgroundColor: "#77a33f"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "shuffle"
                            ]
                        ],
                        {
                            backgroundColor: "#77a33f"
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
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                    var _system3 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    var _system4 = _interopRequireDefault($app_require$1("@app-module/system.vibrator"));
                    var _system5 = _interopRequireDefault($app_require$1("@app-module/system.brightness"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    function ownKeys(e, r) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            r && (o = o.filter(function(r) {
                                return Object.getOwnPropertyDescriptor(e, r).enumerable;
                            })), t.push.apply(t, o);
                        }
                        return t;
                    }
                    function _objectSpread(e) {
                        for(var r = 1; r < arguments.length; r++){
                            var t = null != arguments[r] ? arguments[r] : {};
                            r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                                _defineProperty(e, r, t[r]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                            });
                        }
                        return e;
                    }
                    function _defineProperty(e, r, t) {
                        return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = t, e;
                    }
                    function _toPropertyKey(t) {
                        var i = _toPrimitive(t, "string");
                        return "symbol" == typeof i ? i : i + "";
                    }
                    function _toPrimitive(t, r) {
                        if ("object" != typeof t || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var i = e.call(t, r || "default");
                            if ("object" != typeof i) return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === r ? String : Number)(t);
                    }
                    const BOARD_WIDTH = 192;
                    const BOARD_HEIGHT = 300;
                    const TILE_SIZE = 36;
                    const MAX_SLOTS = 7;
                    const SETTINGS_KEY = "gameSettings";
                    function randInt(min, max) {
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    }
                    function shuffleArray(arr) {
                        const a = arr.slice();
                        for(let i = a.length - 1; i > 0; i--){
                            const j = Math.floor(Math.random() * (i + 1));
                            [a[i], a[j]] = [
                                a[j],
                                a[i]
                            ];
                        }
                        return a;
                    }
                    var _default = exports.default = {
                        private: {
                            tiles: [],
                            slots: [],
                            running: true,
                            slotHolders: [],
                            level: 1,
                            passed: 0,
                            idToTile: {},
                            blockers: {},
                            covers: {},
                            settings: {
                                difficulty: "random",
                                vibration: false,
                                keepScreenOn: false,
                                cardCountMode: 'random',
                                fixedCardCount: 4
                            }
                        },
                        onInit () {
                            this.slotHolders = Array.from({
                                length: MAX_SLOTS
                            }, (_, i)=>({
                                    idx: i
                                }));
                            this.loadSettingsAndStart();
                        },
                        onShow () {
                            this.loadSettings().then(()=>{
                                if (this.settings.keepScreenOn) _system5.default.setKeepScreenOn({
                                    keepScreenOn: true,
                                    success: function() {
                                        console.log('setKeepScreenOn success');
                                    },
                                    fail: function(data, code) {
                                        console.log(`setKeepScreenOn fail, code = ${code}`);
                                    }
                                });
                            });
                        },
                        onHide () {
                            if (this.settings.keepScreenOn) _system5.default.setKeepScreenOn({
                                keepScreenOn: false,
                                success: function() {
                                    console.log('restore screen off success');
                                },
                                fail: function(data, code) {
                                    console.log(`restore screen off fail, code = ${code}`);
                                }
                            });
                        },
                        async loadSettingsAndStart () {
                            await this.loadSettings();
                            await this.loadGameProgress();
                            this.startGame();
                        },
                        loadSettings () {
                            return new Promise((resolve)=>{
                                _system3.default.get({
                                    key: SETTINGS_KEY,
                                    success: (data)=>{
                                        if (data) this.settings = _objectSpread(_objectSpread({}, this.settings), JSON.parse(data));
                                        resolve();
                                    },
                                    fail: ()=>resolve()
                                });
                            });
                        },
                        loadGameProgress () {
                            return new Promise((resolve)=>{
                                _system3.default.get({
                                    key: "gameProgress",
                                    success: (data)=>{
                                        if (data) {
                                            try {
                                                const obj = JSON.parse(data);
                                                this.level = obj.level || 1;
                                                this.passed = obj.passed || 0;
                                            } catch (e) {}
                                        }
                                        resolve();
                                    },
                                    fail: ()=>resolve()
                                });
                            });
                        },
                        saveGameProgress () {
                            _system3.default.set({
                                key: "gameProgress",
                                value: JSON.stringify({
                                    level: this.level,
                                    passed: this.passed
                                })
                            });
                        },
                        startGame () {
                            this.running = true;
                            this.slots = [];
                            this.tiles = [];
                            if ("dynamic" === this.settings.difficulty) this.generateDynamicLevel();
                            else this.generateRandomLevel();
                            this.rebuildCoverage();
                        },
                        generateDynamicLevel () {
                            const ALL_ICONS = [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8
                            ];
                            let kindCount;
                            kindCount = 'fixed' === this.settings.cardCountMode ? this.settings.fixedCardCount : randInt(3, 5);
                            kindCount = Math.min(kindCount, ALL_ICONS.length);
                            const usingKinds = shuffleArray(ALL_ICONS).slice(0, kindCount);
                            const maxLayers = Math.min(7, 2 + Math.floor(this.level / 3));
                            let tiles = [];
                            const baseCols = 5;
                            const baseRows = 8;
                            const tileHalfSize = TILE_SIZE / 2;
                            for(let layer = 0; layer < maxLayers; layer++){
                                const rowsInLayer = baseRows - layer;
                                const colsInLayer = baseCols - layer;
                                if (rowsInLayer <= 0 || colsInLayer <= 0) break;
                                const layerOffsetX = layer * tileHalfSize;
                                const layerOffsetY = layer * tileHalfSize;
                                for(let r = 0; r < rowsInLayer; r++){
                                    for(let c = 0; c < colsInLayer; c++)tiles.push({
                                        id: `d-${layer}-${r}-${c}`,
                                        icon: 0,
                                        iconSrc: "",
                                        x: c * TILE_SIZE + layerOffsetX,
                                        y: r * TILE_SIZE + layerOffsetY,
                                        layer: 100 + layer,
                                        removed: false,
                                        clickable: false
                                    });
                                }
                            }
                            if (tiles.length > 0) {
                                let minX = 1 / 0, maxX = -1 / 0, minY = 1 / 0, maxY = -1 / 0;
                                tiles.forEach((t)=>{
                                    minX = Math.min(minX, t.x);
                                    minY = Math.min(minY, t.y);
                                    maxX = Math.max(maxX, t.x + TILE_SIZE);
                                    maxY = Math.max(maxY, t.y + TILE_SIZE);
                                });
                                const totalWidth = maxX - minX;
                                const totalHeight = maxY - minY;
                                const centeringOffsetX = (BOARD_WIDTH - totalWidth) / 2 - minX;
                                const centeringOffsetY = (BOARD_HEIGHT - totalHeight) / 2 - minY;
                                tiles.forEach((t)=>{
                                    t.x += centeringOffsetX;
                                    t.y += centeringOffsetY;
                                });
                            }
                            while(tiles.length % 3 !== 0)tiles.pop();
                            const groups = tiles.length / 3;
                            const tripleIcons = [];
                            for(let i = 0; i < groups; i++){
                                const icon = usingKinds[i % usingKinds.length];
                                tripleIcons.push(icon, icon, icon);
                            }
                            const icons = shuffleArray(tripleIcons);
                            tiles.forEach((tile, index)=>{
                                if (index < icons.length) {
                                    tile.icon = icons[index];
                                    tile.iconSrc = `/common/image/icon/${icons[index]}.png`;
                                }
                            });
                            this.tiles = tiles.filter((t)=>t.iconSrc);
                        },
                        generateRandomLevel () {
                            const ALL_ICONS = [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8
                            ];
                            let kindCount;
                            kindCount = 'fixed' === this.settings.cardCountMode ? this.settings.fixedCardCount : randInt(3, 5);
                            kindCount = Math.min(kindCount, ALL_ICONS.length);
                            const usingKinds = shuffleArray(ALL_ICONS).slice(0, kindCount);
                            const layerCount = randInt(3, 6);
                            let total = 0;
                            const layers = Array.from({
                                length: layerCount
                            }, ()=>{
                                const c = 3 * randInt(1, 9);
                                total += c;
                                return c;
                            });
                            const groups = total / 3;
                            const tripleIcons = [];
                            for(let i = 0; i < groups; i++){
                                const icon = usingKinds[i % usingKinds.length];
                                tripleIcons.push(icon, icon, icon);
                            }
                            const icons = shuffleArray(tripleIcons);
                            const gridCell = 42;
                            const cols = Math.floor(BOARD_WIDTH / gridCell);
                            const rows = Math.floor(BOARD_HEIGHT / gridCell);
                            const gridPositions = [];
                            for(let r = 0; r < rows; r++){
                                for(let c = 0; c < cols; c++)gridPositions.push({
                                    x: c * gridCell + 8,
                                    y: r * gridCell + 8
                                });
                            }
                            let tiles = [];
                            let iconIdx = 0;
                            const offsetPerLayer = {
                                x: 8,
                                y: 8
                            };
                            for(let layer = 0; layer < layerCount; layer++){
                                const positions = shuffleArray(gridPositions).slice(0, layers[layer]);
                                for (const pos of positions){
                                    if (iconIdx >= icons.length) break;
                                    let x = Math.max(0, Math.min(BOARD_WIDTH - TILE_SIZE, pos.x + layer * offsetPerLayer.x));
                                    let y = Math.max(0, Math.min(BOARD_HEIGHT - TILE_SIZE, pos.y + layer * offsetPerLayer.y));
                                    const iconId = icons[iconIdx++];
                                    tiles.push({
                                        id: `r-${layer}-${iconIdx}`,
                                        icon: iconId,
                                        iconSrc: `/common/image/icon/${iconId}.png`,
                                        x,
                                        y,
                                        layer: 100 + layer,
                                        removed: false,
                                        clickable: false
                                    });
                                }
                            }
                            this.tiles = tiles;
                        },
                        rebuildCoverage () {
                            const idToTile = {};
                            this.tiles.forEach((t)=>idToTile[t.id] = t);
                            this.idToTile = idToTile;
                            const blockers = {};
                            const covers = {};
                            const active = this.tiles.filter((t)=>!t.removed);
                            active.forEach((a)=>{
                                covers[a.id] = [];
                                blockers[a.id] = 0;
                            });
                            for(let i = 0; i < active.length; i++){
                                for(let j = i + 1; j < active.length; j++){
                                    const a = active[i], b = active[j];
                                    if (this.rectOverlap(a, b)) {
                                        if (a.layer > b.layer) {
                                            blockers[b.id]++;
                                            covers[a.id].push(b.id);
                                        } else if (b.layer > a.layer) {
                                            blockers[a.id]++;
                                            covers[b.id].push(a.id);
                                        }
                                    }
                                }
                            }
                            this.blockers = blockers;
                            this.covers = covers;
                            this.updateClickable();
                        },
                        updateClickable () {
                            this.tiles.forEach((t)=>{
                                if (!t.removed) t.clickable = 0 === (this.blockers[t.id] || 0);
                            });
                        },
                        rectOverlap (a, b) {
                            return Math.max(0, Math.min(a.x + TILE_SIZE, b.x + TILE_SIZE) - Math.max(a.x, b.x)) > 2 && Math.max(0, Math.min(a.y + TILE_SIZE, b.y + TILE_SIZE) - Math.max(a.y, b.y)) > 2;
                        },
                        onTileTap (item) {
                            if (!this.running || !item.clickable || this.slots.length >= MAX_SLOTS) return;
                            const tile = this.idToTile[item.id];
                            if (!tile || tile.removed) return;
                            tile.removed = true;
                            tile.clickable = false;
                            this.slots.push(tile);
                            this.slots.sort((a, b)=>a.icon - b.icon);
                            const coveredTiles = this.covers[tile.id] || [];
                            coveredTiles.forEach((id)=>{
                                if (this.blockers[id] > 0) this.blockers[id]--;
                            });
                            this.updateClickable();
                            setTimeout(()=>{
                                this.tryEliminate();
                                this.checkGameStatus();
                            }, 200);
                        },
                        tryEliminate () {
                            const counts = this.slots.reduce((acc, tile)=>{
                                acc[tile.icon] = (acc[tile.icon] || 0) + 1;
                                return acc;
                            }, {});
                            for(const icon in counts)if (counts[icon] >= 3) {
                                this.slots = this.slots.filter((tile)=>tile.icon != icon);
                                _system2.default.showToast({
                                    message: "消除成功！"
                                });
                                if (this.settings.vibration) _system4.default.vibrate({
                                    mode: "short"
                                });
                                return;
                            }
                        },
                        checkGameStatus () {
                            if (!this.tiles.some((t)=>!t.removed) && 0 === this.slots.length) return void this.gameOver(true);
                            if (this.slots.length >= MAX_SLOTS) this.gameOver(false);
                        },
                        gameOver (isWin) {
                            this.running = false;
                            _system2.default.showToast({
                                message: isWin ? "恭喜通关！" : "游戏结束"
                            });
                            if (isWin) {
                                this.passed++;
                                this.level++;
                                this.saveGameProgress();
                            }
                            setTimeout(()=>{
                                _system.default.replace({
                                    uri: "/pages/gcs",
                                    params: {
                                        status: isWin ? "win" : "lose",
                                        passedCount: this.passed
                                    }
                                });
                            }, 1000);
                        },
                        onShuffle () {
                            if (!this.running) return;
                            const remainingTiles = this.tiles.filter((t)=>!t.removed);
                            const positions = remainingTiles.map((t)=>({
                                    x: t.x,
                                    y: t.y
                                }));
                            const shuffledPositions = shuffleArray(positions);
                            remainingTiles.forEach((tile, index)=>{
                                tile.x = shuffledPositions[index].x;
                                tile.y = shuffledPositions[index].y;
                            });
                            this.rebuildCoverage();
                            _system2.default.showToast({
                                message: "已重新排列"
                            });
                        },
                        onGoToSettings () {
                            _system.default.push({
                                uri: "/pages/setup"
                            });
                        },
                        onExit () {
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
                                "page"
                            ],
                            style: {
                                backgroundImage: "/common/image/game.bg.png"
                            }
                        }
                    }, [
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "level-container"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "level"
                                    ],
                                    value: function() {
                                        return "第 " + _vm_.level + " 关";
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "header"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "header-title"
                                    ],
                                    value: "三相消除"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "board"
                                ]
                            }
                        }, [
                            aiot.__cf__({
                                __vm__: _vm_,
                                __opts__: {
                                    exp: function() {
                                        return {
                                            __list__: _vm_.tiles,
                                            __tid__: "id"
                                        };
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
                                                "tile"
                                            ],
                                            dataset: {
                                                id: function() {
                                                    return $item.id;
                                                }
                                            },
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left: " + $item.x + "px; top: " + $item.y + "px; z-index: " + $item.layer + "; opacity: " + ($item.clickable ? 1 : 0.55) + "; display: " + ($item.removed ? "none" : "flex") + ";");
                                            },
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.onTileTap($item, evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "tile-img"
                                                ],
                                                src: function() {
                                                    return $item.iconSrc;
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
                                    "slot-bar"
                                ]
                            }
                        }, [
                            aiot.__cf__({
                                __vm__: _vm_,
                                __opts__: {
                                    exp: function() {
                                        return {
                                            __list__: _vm_.slotHolders,
                                            __tid__: "idx"
                                        };
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
                                                "slot"
                                            ]
                                        }
                                    }, [
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.slots[$item.idx] && _vm_.slots[$item.idx].iconSrc;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("image", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "slot-img"
                                                        ],
                                                        src: function() {
                                                            return _vm_.slots[$item.idx].iconSrc;
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        })
                                    ])
                                ];
                            })
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "actions"
                                ]
                            }
                        }, [
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "btn",
                                        "exit"
                                    ],
                                    type: "button",
                                    value: "退出",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.onExit(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "btn",
                                        "shuffle"
                                    ],
                                    type: "button",
                                    value: "刷新",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.onShuffle(evt);
                                        }
                                    }
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
