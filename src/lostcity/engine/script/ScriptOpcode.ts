const ScriptOpcode = {
    // Core language ops (0-99)
    PUSH_CONSTANT_INT: 0,
    PUSH_CONSTANT_STRING: 1,
    PUSH_VARP: 2,
    POP_VARP: 3,
    PUSH_VARBIT: 4,
    POP_VARBIT: 5,
    PUSH_INT_LOCAL: 6,
    POP_INT_LOCAL: 7,
    PUSH_STRING_LOCAL: 8,
    POP_STRING_LOCAL: 9,
    BRANCH: 10,
    BRANCH_NOT: 11,
    BRANCH_EQUALS: 12,
    BRANCH_LESS_THAN: 13,
    BRANCH_GREATER_THAN: 14,
    BRANCH_LESS_THAN_OR_EQUALS: 15,
    BRANCH_GREATER_THAN_OR_EQUALS: 16,
    POP_INT_DISCARD: 17,
    POP_STRING_DISCARD: 18,
    RETURN: 19,
    JOIN_STRING: 20,
    GOSUB: 21,
    GOSUB_WITH_PARAMS: 22,
    JUMP: 23,
    JUMP_WITH_PARAMS: 24,
    DEFINE_ARRAY: 25,
    PUSH_ARRAY_INT: 26,
    POP_ARRAY_INT: 27,
    SWITCH: 28,

    // Server ops (1000-1999)
    MAP_CLOCK: 1000,
    MAP_MEMBERS: 1001,
    MAP_PLAYERCOUNT: 1002,
    HUNTALL: 1003,
    HUNTNEXT: 1004,
    INAREA: 1005,
    INZONE: 1006,
    LINEOFWALK: 1007,
    OBJECTVERIFY: 1008,
    STAT_RANDOM: 1009,
    SPOTANIM_MAP: 1010,
    DISTANCE: 1011,
    MOVECOORD: 1012,
    SEQLENGTH: 1013,
    SPLIT_INIT: 1014,
    SPLIT_PAGECOUNT: 1015,
    SPLIT_GET: 1016,
    SPLIT_LINECOUNT: 1017,
    SPLIT_GETANIM: 1018,
    STRUCT_PARAM: 1019,
    MAPSQUARE: 1020, // used for global maparea trigger to convert coord to string

    // Player ops (2000-2499)
    FINDUID: 2000,
    P_FINDUID: 2001,
    STRONGQUEUE: 2002,
    WEAKQUEUE: 2003,
    ANIM: 2004,
    BUFFER_FULL: 2005,
    BUILDAPPEARANCE: 2006,
    CAM_LOOKAT: 2007,
    CAM_MOVETO: 2008,
    CAM_RESET: 2009,
    COORD: 2010,
    DISPLAYNAME: 2011,
    FACESQUARE: 2012,
    HEALENERGY: 2013,
    IF_CLOSE: 2014,
    IF_OPENSUBMODAL: 2015,
    IF_OPENSUBOVERLAY: 2016,
    LAST_COM: 2017,
    LAST_INT: 2018,
    LAST_ITEM: 2019,
    LAST_SLOT: 2020,
    LAST_USEITEM: 2021,
    LAST_USESLOT: 2022,
    LAST_VERIFYOBJ: 2023,
    MES: 2024,
    NAME: 2025,
    P_APRANGE: 2026,
    P_ARRIVEDELAY: 2027,
    P_COUNTDIALOG: 2028,
    P_DELAY: 2029,
    P_OPHELD: 2030,
    P_OPLOC: 2031,
    P_OPNPC: 2032,
    P_PAUSEBUTTON: 2033,
    P_STOPACTION: 2034,
    P_TELEJUMP: 2035,
    P_WALK: 2036,
    SAY: 2037,
    SOUND_SYNTH: 2038,
    STAFFMODLEVEL: 2039,
    STAT: 2040,
    STAT_BASE: 2041,
    STAT_HEAL: 2042,
    UID: 2043,
    P_LOGOUT: 2044,
    IF_SETCOLOUR: 2045,
    IF_OPENBOTTOM: 2046,
    IF_OPENSUB: 2047,
    IF_SETHIDE: 2048,
    IF_SETOBJECT: 2049,
    IF_SETTABACTIVE: 2050,
    IF_SETMODEL: 2051,
    IF_SETMODELCOLOUR: 2052,
    IF_SETTABFLASH: 2053,
    IF_CLOSESUB: 2054,
    IF_SETANIM: 2055,
    IF_SETTAB: 2056,
    IF_OPENTOP: 2057,
    IF_OPENSTICKY: 2058,
    IF_OPENSIDEBAR: 2059,
    IF_SETPLAYERHEAD: 2060,
    IF_SETTEXT: 2061,
    IF_SETNPCHEAD: 2062,
    IF_SETPOSITION: 2063,
    IF_MULTIZONE: 2064,
    GIVEXP: 2065,
    DAMAGE: 2066,
    IF_SETRESUMEBUTTONS: 2067,
    TEXT_GENDER: 2068,
    MIDI_SONG: 2069,
    MIDI_JINGLE: 2070,

    // Npc ops (2500-2999)
    NPC_FINDUID: 2500,
    NPC_ADD: 2501,
    NPC_ANIM: 2502,
    NPC_BASESTAT: 2503,
    NPC_CATEGORY: 2504,
    NPC_COORD: 2505,
    NPC_DEL: 2506,
    NPC_DELAY: 2507,
    NPC_FACESQUARE: 2508,
    NPC_FINDEXACT: 2509,
    NPC_FINDHERO: 2510,
    NPC_PARAM: 2511,
    NPC_QUEUE: 2512,
    NPC_RANGE: 2513,
    NPC_SAY: 2514,
    NPC_SETHUNT: 2515,
    NPC_SETHUNTMODE: 2516,
    NPC_SETMODE: 2517,
    NPC_STAT: 2518,
    NPC_STATHEAL: 2519,
    NPC_TYPE: 2520,
    NPC_DAMAGE: 2521,
    NPC_NAME: 2522,
    NPC_UID: 2523,

    // Loc ops (3000-3499)
    LOC_ADD: 3000,
    LOC_ANGLE: 3001,
    LOC_ANIM: 3002,
    LOC_CATEGORY: 3003,
    LOC_CHANGE: 3004,
    LOC_COORD: 3005,
    LOC_DEL: 3006,
    LOC_FIND: 3007,
    LOC_FINDALLZONE: 3008,
    LOC_FINDNEXT: 3009,
    LOC_PARAM: 3010,
    LOC_TYPE: 3011,
    LOC_NAME: 3012,

    // Obj ops (3500-4000)
    OBJ_ADD: 3500,
    OBJ_ADDALL: 3501,
    OBJ_PARAM: 3502,
    OBJ_NAME: 3503,

    // Npc config ops (4000-4099)
    NC_NAME: 4000,
    NC_PARAM: 4001,
    NC_CATEGORY: 4002,
    NC_DESC: 4003,
    NC_DEBUGNAME: 4004,

    // Loc config ops (4100-4199)
    LC_NAME: 4100,
    LC_PARAM: 4101,
    LC_CATEGORY: 4102,
    LC_DESC: 4103,
    LC_DEBUGNAME: 4104,

    // Obj config ops (4200-4299)
    OC_NAME: 4200,
    OC_PARAM: 4201,
    OC_CATEGORY: 4202,
    OC_DESC: 4203,
    OC_MEMBERS: 4204,
    OC_WEIGHT: 4205,
    OC_WEARPOS: 4206,
    OC_WEARPOS2: 4207,
    OC_WEARPOS3: 4208,
    OC_DEBUGNAME: 4209,

    // Inventory ops (4300-4399)
    INV_ADD: 4300,
    INV_CHANGESLOT: 4301,
    INV_DEL: 4302,
    INV_GETOBJ: 4303,
    INV_ITEMSPACE2: 4304,
    INV_MOVEITEM: 4305,
    INV_RESENDSLOT: 4306,
    INV_SETSLOT: 4307,
    INV_SIZE: 4308,
    INV_TOTAL: 4309,
    INV_TRANSMIT: 4310,
    INV_STOPTRANSMIT: 4311,

    // Enum ops (4400-4499)
    ENUM: 4400,
    ENUM_GETOUTPUTCOUNT: 4401,

    // String ops (4500-4599)
    APPEND_NUM: 4500,
    APPEND: 4501,
    APPEND_SIGNNUM: 4502,
    LOWERCASE: 4503,
    TOSTRING: 4504,
    COMPARE: 4505,
    APPEND_CHAR: 4506,
    STRING_LENGTH: 4507,
    SUBSTRING: 4508,
    STRING_INDEXOF_CHAR: 4509,
    STRING_INDEXOF_STRING: 4510,
    UPPERCASE: 4511,

    // Number ops (4600-4699)
    ADD: 4600,
    SUB: 4601,
    MULTIPLY: 4602,
    DIVIDE: 4603,
    RANDOM: 4604,
    RANDOMINC: 4605,
    INTERPOLATE: 4606,
    ADDPERCENT: 4607,
    SETBIT: 4608,
    CLEARBIT: 4609,
    TESTBIT: 4610,
    MODULO: 4611,
    POW: 4612,
    INVPOW: 4613,
    AND: 4614,
    OR: 4615,
    MIN: 4616,
    MAX: 4617,
    SCALE: 4618,
    BITCOUNT: 4619,
    TOGGLEBIT: 4620,
    SETBIT_RANGE: 4621,
    CLEARBIT_RANGE: 4622,
    GETBIT_RANGE: 4623,
    SETBIT_RANGE_TOINT: 4624,
    SIN_DEG: 4625,
    COS_DEG: 4626,
    ATAN2_DEG: 4627,
    ABS: 4628,

    // DB ops (7500-7599)
    DB_FIND_WITH_COUNT: 7500,
    DB_FINDNEXT: 7501,
    DB_GETFIELD: 7502,
    DB_GETFIELDCOUNT: 7503,
    DB_LISTALL_WITH_COUNT: 7504,
    DB_GETROWTABLE: 7505,
    DB_FINDBYINDEX: 7506,
    DB_FIND_REFINE_WITH_COUNT: 7507,
    DB_FIND: 7508,
    DB_FIND_REFINE: 7509,
    DB_LISTALL: 7510,

    // Debug ops (10000-11000)
    ERROR: 10000,
    ACTIVE_NPC: 10001,
    ACTIVE_PLAYER: 10002,
    ACTIVE_LOC: 10003,
    ACTIVE_OBJ: 10004,
};

export default ScriptOpcode;