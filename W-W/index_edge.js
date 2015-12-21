/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'homescreen',
                type: 'image',
                rect: ['0px', '0px','1680px','933px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"homeclean.jpg",'0px','0px']
            },
            {
                id: 'videosbtn',
                display: 'block',
                type: 'rect',
                rect: ['531', '764','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'videosbtnon',
                display: 'none',
                type: 'image',
                rect: ['531px', '764px','113px','113px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"videosbtnpushed3.png",'0px','0px']
            },
            {
                id: 'contactbtn',
                type: 'image',
                rect: ['1112px', '759px','113px','113px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"contactbtn.png",'0px','0px']
            },
            {
                id: 'biobtn',
                type: 'image',
                rect: ['922px', '764px','113px','113px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"biobtn.png",'0px','0px']
            },
            {
                id: 'showsbtn',
                type: 'image',
                rect: ['719px', '764px','113px','113px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"showsbtn.png",'0px','0px']
            },
            {
                id: 'homebtn',
                type: 'image',
                rect: ['1445px', '667px','283px','283px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"homebtn.png",'0px','0px']
            },
            {
                id: 'player',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'gigs',
                type: 'image',
                rect: ['1254px', '975px','1680px','933px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gigs.png",'0px','0px']
            },
            {
                id: 'contact',
                type: 'image',
                rect: ['-1726px', '292px','1680px','933px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"contact.png",'0px','0px']
            },
            {
                id: 'bio',
                type: 'image',
                rect: ['-274px', '990px','1680px','933px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bio.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'videosbtn',
                symbolName: 'videos',
                autoPlay: {

                }
            },
            {
                id: 'player',
                symbolName: 'player',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_homescreen}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_biobtn}": [
                ["style", "left", '922px'],
                ["style", "top", '764px']
            ],
            "${_showsbtn}": [
                ["style", "left", '719px'],
                ["style", "top", '764px']
            ],
            "${_videosbtn}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_homebtn}": [
                ["style", "top", '667px'],
                ["style", "left", '1445px']
            ],
            "${_gigs}": [
                ["style", "left", '1254px'],
                ["style", "top", '975px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1680px'],
                ["style", "height", '933px'],
                ["style", "overflow", 'hidden']
            ],
            "${_contact}": [
                ["style", "left", '-1726px'],
                ["style", "top", '292px']
            ],
            "${_contactbtn}": [
                ["style", "left", '1112px'],
                ["style", "top", '759px']
            ],
            "${_videosbtnon}": [
                ["style", "display", 'none'],
                ["style", "left", '531px'],
                ["style", "top", '764px']
            ],
            "${_bio}": [
                ["style", "top", '990px'],
                ["style", "left", '-274px']
            ],
            "${_player}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            labels: {
                "videosbtn": 0,
                "videosbtnon": 750,
                "player fade in": 1254
            },
            timeline: [
                { id: "eid132", tween: [ "style", "${_player}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid133", tween: [ "style", "${_player}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid134", tween: [ "style", "${_player}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid93", tween: [ "style", "${_videosbtnon}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid94", tween: [ "style", "${_videosbtnon}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid44", tween: [ "style", "${_videosbtn}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_videosbtn}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid129", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_player}', [] ], ""], position: 1250 }            ]
        }
    }
},
"videos": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'videosbtn',
                    type: 'image',
                    rect: ['0px', '0px', '113px', '113px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/videosbtn.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_videosbtn}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '113px'],
                ["style", "width", '113px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"videoon": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'videosbtnon',
                    type: 'image',
                    rect: ['0px', '0px', '113px', '113px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/videosbtnpushed.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_videosbtnon}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '113px'],
                ["style", "width", '113px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"player": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1680px', '933px', 'auto', 'auto'],
                    id: 'video',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_video}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '933px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '1680px']
            ],
            "${symbolSelector}": [
                ["style", "height", '933px'],
                ["style", "width", '1680px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid128", tween: [ "style", "${_video}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-17420496");
