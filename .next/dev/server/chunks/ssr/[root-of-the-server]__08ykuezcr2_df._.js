module.exports = [
(()=>{"use strict";return[
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48
};
}),
"[project]/src/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// import Image from "next/image";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home.jsx [app-rsc] (ecmascript)");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 11,
                columnNumber: 10
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/home.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$friends$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/friends.json.[json].cjs [app-rsc] (ecmascript)");
;
;
;
;
const Hero = async ()=>{
    const data = await fetch('/friends.json');
    const friendss = await data.json();
    console.log(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$friends$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " container mx-auto my-15",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center justify-center space-y-5.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-bold text-5xl",
                    children: " Friends to keep close in your life"
                }, void 0, false, {
                    fileName: "[project]/src/components/home.jsx",
                    lineNumber: 12,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#64748B]",
                    children: [
                        "Your personal shelf of meaningful connections. Browse, tend, and nurture the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/home.jsx",
                            lineNumber: 13,
                            columnNumber: 120
                        }, ("TURBOPACK compile-time value", void 0)),
                        "relationships that matter most. "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home.jsx",
                    lineNumber: 13,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "btn bg-[#244D3F] font-bold text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaPlus"], {}, void 0, false, {
                            fileName: "[project]/src/components/home.jsx",
                            lineNumber: 15,
                            columnNumber: 70
                        }, ("TURBOPACK compile-time value", void 0)),
                        "  Add a Friend"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home.jsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: "[project]/src/components/home.jsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home.jsx",
            lineNumber: 11,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/home.jsx",
        lineNumber: 10,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Hero;
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.117ezoe8m31dk.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.js [app-rsc] (ecmascript)"));
}),
"[project]/src/data/friends.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": 1,
        "name": "Sarah Jenkins",
        "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        "email": "sarah.j@example.com",
        "days_since_contact": 5,
        "status": "connected",
        "tags": [
            "college",
            "close friend"
        ],
        "bio": "Met during freshman orientation at university. Enjoys weekend hiking and coffee tasting.",
        "goal": 7,
        "next_due_date": "2026-11-03"
    },
    {
        "id": 2,
        "name": "Marcus Vance",
        "picture": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        "email": "marcus.vance@example.com",
        "days_since_contact": 22,
        "status": "overdue",
        "tags": [
            "tech",
            "former colleague"
        ],
        "bio": "Worked together on frontend development projects. Avid board game enthusiast and cyclist.",
        "goal": 14,
        "next_due_date": "2026-10-21"
    },
    {
        "id": 3,
        "name": "Amina Rahmani",
        "picture": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
        "email": "amina.rahmani@example.com",
        "days_since_contact": 12,
        "status": "connected",
        "tags": [
            "high school",
            "childhood"
        ],
        "bio": "Grew up in the same neighborhood. Passionate about digital photography and indie films.",
        "goal": 14,
        "next_due_date": "2026-10-31"
    },
    {
        "id": 4,
        "name": "David Chen",
        "picture": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        "email": "dchen@example.com",
        "days_since_contact": 45,
        "status": "overdue",
        "tags": [
            "college",
            "roommate"
        ],
        "bio": "Lived in the same dorm suite for three years. Major open-source contributor and gamer.",
        "goal": 30,
        "next_due_date": "2026-10-14"
    },
    {
        "id": 5,
        "name": "Elena Rostova",
        "picture": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
        "email": "elena.r@example.com",
        "days_since_contact": 2,
        "status": "connected",
        "tags": [
            "gym",
            "close friend"
        ],
        "bio": "Fitness partner and marathon runner. Always down for weekend brunch or outdoor runs.",
        "goal": 7,
        "next_due_date": "2026-11-05"
    },
    {
        "id": 6,
        "name": "Liam O'Connor",
        "picture": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400",
        "email": "liam.oc@example.com",
        "days_since_contact": 60,
        "status": "overdue",
        "tags": [
            "travel",
            "music"
        ],
        "bio": "Met during a backpacking trip abroad. Plays bass guitar in an indie rock band.",
        "goal": 30,
        "next_due_date": "2026-09-29"
    },
    {
        "id": 7,
        "name": "Priya Sharma",
        "picture": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
        "email": "priya.s@example.com",
        "days_since_contact": 8,
        "status": "connected",
        "tags": [
            "hackathon",
            "design"
        ],
        "bio": "UI/UX designer met at a web development hackathon. Loves pottery and typography.",
        "goal": 10,
        "next_due_date": "2026-10-31"
    },
    {
        "id": 8,
        "name": "Julian Thorne",
        "picture": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400",
        "email": "jthorne@example.com",
        "days_since_contact": 1,
        "status": "connected",
        "tags": [
            "mentorship",
            "tech"
        ],
        "bio": "Senior developer mentor. Regularly discusses web design trends, Linux, and React performance.",
        "goal": 14,
        "next_due_date": "2026-11-11"
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08ykuezcr2_df._.js.map