module.exports = [
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HasPropertyKey = HasPropertyKey;
exports.IsAsyncIterator = IsAsyncIterator;
exports.IsArray = IsArray;
exports.IsBigInt = IsBigInt;
exports.IsBoolean = IsBoolean;
exports.IsDate = IsDate;
exports.IsFunction = IsFunction;
exports.IsIterator = IsIterator;
exports.IsNull = IsNull;
exports.IsNumber = IsNumber;
exports.IsObject = IsObject;
exports.IsRegExp = IsRegExp;
exports.IsString = IsString;
exports.IsSymbol = IsSymbol;
exports.IsUint8Array = IsUint8Array;
exports.IsUndefined = IsUndefined;
// --------------------------------------------------------------------------
// PropertyKey
// --------------------------------------------------------------------------
/** Returns true if this value has this property key */ function HasPropertyKey(value, key) {
    return key in value;
}
// --------------------------------------------------------------------------
// Object Instances
// --------------------------------------------------------------------------
/** Returns true if this value is an async iterator */ function IsAsyncIterator(value) {
    return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.asyncIterator in value;
}
/** Returns true if this value is an array */ function IsArray(value) {
    return Array.isArray(value);
}
/** Returns true if this value is bigint */ function IsBigInt(value) {
    return typeof value === 'bigint';
}
/** Returns true if this value is a boolean */ function IsBoolean(value) {
    return typeof value === 'boolean';
}
/** Returns true if this value is a Date object */ function IsDate(value) {
    return value instanceof globalThis.Date;
}
/** Returns true if this value is a function */ function IsFunction(value) {
    return typeof value === 'function';
}
/** Returns true if this value is an iterator */ function IsIterator(value) {
    return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.iterator in value;
}
/** Returns true if this value is null */ function IsNull(value) {
    return value === null;
}
/** Returns true if this value is number */ function IsNumber(value) {
    return typeof value === 'number';
}
/** Returns true if this value is an object */ function IsObject(value) {
    return typeof value === 'object' && value !== null;
}
/** Returns true if this value is RegExp */ function IsRegExp(value) {
    return value instanceof globalThis.RegExp;
}
/** Returns true if this value is string */ function IsString(value) {
    return typeof value === 'string';
}
/** Returns true if this value is symbol */ function IsSymbol(value) {
    return typeof value === 'symbol';
}
/** Returns true if this value is a Uint8Array */ function IsUint8Array(value) {
    return value instanceof globalThis.Uint8Array;
}
/** Returns true if this value is undefined */ function IsUndefined(value) {
    return value === undefined;
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Clone = Clone;
const ValueGuard = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
function ArrayType(value) {
    return value.map((value)=>Visit(value));
}
function DateType(value) {
    return new Date(value.getTime());
}
function Uint8ArrayType(value) {
    return new Uint8Array(value);
}
function RegExpType(value) {
    return new RegExp(value.source, value.flags);
}
function ObjectType(value) {
    const result = {};
    for (const key of Object.getOwnPropertyNames(value)){
        result[key] = Visit(value[key]);
    }
    for (const key of Object.getOwnPropertySymbols(value)){
        result[key] = Visit(value[key]);
    }
    return result;
}
// prettier-ignore
function Visit(value) {
    return ValueGuard.IsArray(value) ? ArrayType(value) : ValueGuard.IsDate(value) ? DateType(value) : ValueGuard.IsUint8Array(value) ? Uint8ArrayType(value) : ValueGuard.IsRegExp(value) ? RegExpType(value) : ValueGuard.IsObject(value) ? ObjectType(value) : value;
}
/** Clones a value */ function Clone(value) {
    return Visit(value);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CloneRest = CloneRest;
exports.CloneType = CloneType;
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)");
/** Clones a Rest */ function CloneRest(schemas) {
    return schemas.map((schema)=>CloneType(schema));
}
/** Clones a Type */ function CloneType(schema, options) {
    return options === undefined ? (0, value_1.Clone)(schema) : (0, value_1.Clone)({
        ...options,
        ...schema
    });
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/type.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/guard/guard.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IsAsyncIterator = IsAsyncIterator;
exports.IsIterator = IsIterator;
exports.IsStandardObject = IsStandardObject;
exports.IsInstanceObject = IsInstanceObject;
exports.IsPromise = IsPromise;
exports.IsDate = IsDate;
exports.IsMap = IsMap;
exports.IsSet = IsSet;
exports.IsRegExp = IsRegExp;
exports.IsTypedArray = IsTypedArray;
exports.IsInt8Array = IsInt8Array;
exports.IsUint8Array = IsUint8Array;
exports.IsUint8ClampedArray = IsUint8ClampedArray;
exports.IsInt16Array = IsInt16Array;
exports.IsUint16Array = IsUint16Array;
exports.IsInt32Array = IsInt32Array;
exports.IsUint32Array = IsUint32Array;
exports.IsFloat32Array = IsFloat32Array;
exports.IsFloat64Array = IsFloat64Array;
exports.IsBigInt64Array = IsBigInt64Array;
exports.IsBigUint64Array = IsBigUint64Array;
exports.HasPropertyKey = HasPropertyKey;
exports.IsObject = IsObject;
exports.IsArray = IsArray;
exports.IsUndefined = IsUndefined;
exports.IsNull = IsNull;
exports.IsBoolean = IsBoolean;
exports.IsNumber = IsNumber;
exports.IsInteger = IsInteger;
exports.IsBigInt = IsBigInt;
exports.IsString = IsString;
exports.IsFunction = IsFunction;
exports.IsSymbol = IsSymbol;
exports.IsValueType = IsValueType;
// --------------------------------------------------------------------------
// Iterators
// --------------------------------------------------------------------------
/** Returns true if this value is an async iterator */ function IsAsyncIterator(value) {
    return IsObject(value) && Symbol.asyncIterator in value;
}
/** Returns true if this value is an iterator */ function IsIterator(value) {
    return IsObject(value) && Symbol.iterator in value;
}
// --------------------------------------------------------------------------
// Object Instances
// --------------------------------------------------------------------------
/** Returns true if this value is not an instance of a class */ function IsStandardObject(value) {
    return IsObject(value) && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
}
/** Returns true if this value is an instance of a class */ function IsInstanceObject(value) {
    return IsObject(value) && !IsArray(value) && IsFunction(value.constructor) && value.constructor.name !== 'Object';
}
// --------------------------------------------------------------------------
// JavaScript
// --------------------------------------------------------------------------
/** Returns true if this value is a Promise */ function IsPromise(value) {
    return value instanceof Promise;
}
/** Returns true if this value is a Date */ function IsDate(value) {
    return value instanceof Date && Number.isFinite(value.getTime());
}
/** Returns true if this value is an instance of Map<K, T> */ function IsMap(value) {
    return value instanceof globalThis.Map;
}
/** Returns true if this value is an instance of Set<T> */ function IsSet(value) {
    return value instanceof globalThis.Set;
}
/** Returns true if this value is RegExp */ function IsRegExp(value) {
    return value instanceof globalThis.RegExp;
}
/** Returns true if this value is a typed array */ function IsTypedArray(value) {
    return ArrayBuffer.isView(value);
}
/** Returns true if the value is a Int8Array */ function IsInt8Array(value) {
    return value instanceof globalThis.Int8Array;
}
/** Returns true if the value is a Uint8Array */ function IsUint8Array(value) {
    return value instanceof globalThis.Uint8Array;
}
/** Returns true if the value is a Uint8ClampedArray */ function IsUint8ClampedArray(value) {
    return value instanceof globalThis.Uint8ClampedArray;
}
/** Returns true if the value is a Int16Array */ function IsInt16Array(value) {
    return value instanceof globalThis.Int16Array;
}
/** Returns true if the value is a Uint16Array */ function IsUint16Array(value) {
    return value instanceof globalThis.Uint16Array;
}
/** Returns true if the value is a Int32Array */ function IsInt32Array(value) {
    return value instanceof globalThis.Int32Array;
}
/** Returns true if the value is a Uint32Array */ function IsUint32Array(value) {
    return value instanceof globalThis.Uint32Array;
}
/** Returns true if the value is a Float32Array */ function IsFloat32Array(value) {
    return value instanceof globalThis.Float32Array;
}
/** Returns true if the value is a Float64Array */ function IsFloat64Array(value) {
    return value instanceof globalThis.Float64Array;
}
/** Returns true if the value is a BigInt64Array */ function IsBigInt64Array(value) {
    return value instanceof globalThis.BigInt64Array;
}
/** Returns true if the value is a BigUint64Array */ function IsBigUint64Array(value) {
    return value instanceof globalThis.BigUint64Array;
}
// --------------------------------------------------------------------------
// PropertyKey
// --------------------------------------------------------------------------
/** Returns true if this value has this property key */ function HasPropertyKey(value, key) {
    return key in value;
}
// --------------------------------------------------------------------------
// Standard
// --------------------------------------------------------------------------
/** Returns true of this value is an object type */ function IsObject(value) {
    return value !== null && typeof value === 'object';
}
/** Returns true if this value is an array, but not a typed array */ function IsArray(value) {
    return Array.isArray(value) && !ArrayBuffer.isView(value);
}
/** Returns true if this value is an undefined */ function IsUndefined(value) {
    return value === undefined;
}
/** Returns true if this value is an null */ function IsNull(value) {
    return value === null;
}
/** Returns true if this value is an boolean */ function IsBoolean(value) {
    return typeof value === 'boolean';
}
/** Returns true if this value is an number */ function IsNumber(value) {
    return typeof value === 'number';
}
/** Returns true if this value is an integer */ function IsInteger(value) {
    return Number.isInteger(value);
}
/** Returns true if this value is bigint */ function IsBigInt(value) {
    return typeof value === 'bigint';
}
/** Returns true if this value is string */ function IsString(value) {
    return typeof value === 'string';
}
/** Returns true if this value is a function */ function IsFunction(value) {
    return typeof value === 'function';
}
/** Returns true if this value is a symbol */ function IsSymbol(value) {
    return typeof value === 'symbol';
}
/** Returns true if this value is a value type such as number, string, boolean */ function IsValueType(value) {
    // prettier-ignore
    return IsBigInt(value) || IsBoolean(value) || IsNull(value) || IsNumber(value) || IsString(value) || IsSymbol(value) || IsUndefined(value);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/guard/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/guard/guard.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/system/policy.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TypeSystemPolicy = void 0;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/guard/index.js [app-ssr] (ecmascript)");
var TypeSystemPolicy;
(function(TypeSystemPolicy) {
    // ------------------------------------------------------------------
    // TypeSystemPolicy: Instancing
    // ------------------------------------------------------------------
    /**
     * Configures the instantiation behavior of TypeBox types. The `default` option assigns raw JavaScript
     * references for embedded types, which may cause side effects if type properties are explicitly updated
     * outside the TypeBox type builder. The `clone` option creates copies of any shared types upon creation,
     * preventing unintended side effects. The `freeze` option applies `Object.freeze()` to the type, making
     * it fully readonly and immutable. Implementations should use `default` whenever possible, as it is the
     * fastest way to instantiate types. The default setting is `default`.
     */ TypeSystemPolicy.InstanceMode = 'default';
    // ------------------------------------------------------------------
    // TypeSystemPolicy: Checking
    // ------------------------------------------------------------------
    /** Sets whether TypeBox should assert optional properties using the TypeScript `exactOptionalPropertyTypes` assertion policy. The default is `false` */ TypeSystemPolicy.ExactOptionalPropertyTypes = false;
    /** Sets whether arrays should be treated as a kind of objects. The default is `false` */ TypeSystemPolicy.AllowArrayObject = false;
    /** Sets whether `NaN` or `Infinity` should be treated as valid numeric values. The default is `false` */ TypeSystemPolicy.AllowNaN = false;
    /** Sets whether `null` should validate for void types. The default is `false` */ TypeSystemPolicy.AllowNullVoid = false;
    /** Checks this value using the ExactOptionalPropertyTypes policy */ function IsExactOptionalProperty(value, key) {
        return TypeSystemPolicy.ExactOptionalPropertyTypes ? key in value : value[key] !== undefined;
    }
    TypeSystemPolicy.IsExactOptionalProperty = IsExactOptionalProperty;
    /** Checks this value using the AllowArrayObjects policy */ function IsObjectLike(value) {
        const isObject = (0, index_1.IsObject)(value);
        return TypeSystemPolicy.AllowArrayObject ? isObject : isObject && !(0, index_1.IsArray)(value);
    }
    TypeSystemPolicy.IsObjectLike = IsObjectLike;
    /** Checks this value as a record using the AllowArrayObjects policy */ function IsRecordLike(value) {
        return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
    }
    TypeSystemPolicy.IsRecordLike = IsRecordLike;
    /** Checks this value using the AllowNaN policy */ function IsNumberLike(value) {
        return TypeSystemPolicy.AllowNaN ? (0, index_1.IsNumber)(value) : Number.isFinite(value);
    }
    TypeSystemPolicy.IsNumberLike = IsNumberLike;
    /** Checks this value using the AllowVoidNull policy */ function IsVoidLike(value) {
        const isUndefined = (0, index_1.IsUndefined)(value);
        return TypeSystemPolicy.AllowNullVoid ? isUndefined || value === null : isUndefined;
    }
    TypeSystemPolicy.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (exports.TypeSystemPolicy = TypeSystemPolicy = {}));
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/immutable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Immutable = Immutable;
const ValueGuard = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
function ImmutableArray(value) {
    return globalThis.Object.freeze(value).map((value)=>Immutable(value));
}
function ImmutableDate(value) {
    return value;
}
function ImmutableUint8Array(value) {
    return value;
}
function ImmutableRegExp(value) {
    return value;
}
function ImmutableObject(value) {
    const result = {};
    for (const key of Object.getOwnPropertyNames(value)){
        result[key] = Immutable(value[key]);
    }
    for (const key of Object.getOwnPropertySymbols(value)){
        result[key] = Immutable(value[key]);
    }
    return globalThis.Object.freeze(result);
}
/** Specialized deep immutable value. Applies freeze recursively to the given value */ // prettier-ignore
function Immutable(value) {
    return ValueGuard.IsArray(value) ? ImmutableArray(value) : ValueGuard.IsDate(value) ? ImmutableDate(value) : ValueGuard.IsUint8Array(value) ? ImmutableUint8Array(value) : ValueGuard.IsRegExp(value) ? ImmutableRegExp(value) : ValueGuard.IsObject(value) ? ImmutableObject(value) : value;
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreateType = CreateType;
const policy_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/system/policy.js [app-ssr] (ecmascript)");
const immutable_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/immutable.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)");
/** Creates TypeBox schematics using the configured InstanceMode */ function CreateType(schema, options) {
    const result = options !== undefined ? {
        ...options,
        ...schema
    } : schema;
    switch(policy_1.TypeSystemPolicy.InstanceMode){
        case 'freeze':
            return (0, immutable_1.Immutable)(result);
        case 'clone':
            return (0, value_1.Clone)(result);
        default:
            return result;
    }
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TypeBoxError = void 0;
/** The base Error type thrown for all TypeBox exceptions  */ class TypeBoxError extends Error {
    constructor(message){
        super(message);
    }
}
exports.TypeBoxError = TypeBoxError;
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/error.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/symbols.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Kind = exports.Hint = exports.OptionalKind = exports.ReadonlyKind = exports.TransformKind = void 0;
/** Symbol key applied to transform types */ exports.TransformKind = Symbol.for('TypeBox.Transform');
/** Symbol key applied to readonly types */ exports.ReadonlyKind = Symbol.for('TypeBox.Readonly');
/** Symbol key applied to optional types */ exports.OptionalKind = Symbol.for('TypeBox.Optional');
/** Symbol key applied to types */ exports.Hint = Symbol.for('TypeBox.Hint');
/** Symbol key applied to types */ exports.Kind = Symbol.for('TypeBox.Kind');
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/symbols.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IsReadonly = IsReadonly;
exports.IsOptional = IsOptional;
exports.IsAny = IsAny;
exports.IsArray = IsArray;
exports.IsAsyncIterator = IsAsyncIterator;
exports.IsBigInt = IsBigInt;
exports.IsBoolean = IsBoolean;
exports.IsConstructor = IsConstructor;
exports.IsDate = IsDate;
exports.IsFunction = IsFunction;
exports.IsInteger = IsInteger;
exports.IsProperties = IsProperties;
exports.IsIntersect = IsIntersect;
exports.IsIterator = IsIterator;
exports.IsKindOf = IsKindOf;
exports.IsLiteralString = IsLiteralString;
exports.IsLiteralNumber = IsLiteralNumber;
exports.IsLiteralBoolean = IsLiteralBoolean;
exports.IsLiteral = IsLiteral;
exports.IsMappedKey = IsMappedKey;
exports.IsMappedResult = IsMappedResult;
exports.IsNever = IsNever;
exports.IsNot = IsNot;
exports.IsNull = IsNull;
exports.IsNumber = IsNumber;
exports.IsObject = IsObject;
exports.IsPromise = IsPromise;
exports.IsRecord = IsRecord;
exports.IsRecursive = IsRecursive;
exports.IsRef = IsRef;
exports.IsRegExp = IsRegExp;
exports.IsString = IsString;
exports.IsSymbol = IsSymbol;
exports.IsTemplateLiteral = IsTemplateLiteral;
exports.IsThis = IsThis;
exports.IsTransform = IsTransform;
exports.IsTuple = IsTuple;
exports.IsUndefined = IsUndefined;
exports.IsUnion = IsUnion;
exports.IsUint8Array = IsUint8Array;
exports.IsUnknown = IsUnknown;
exports.IsUnsafe = IsUnsafe;
exports.IsVoid = IsVoid;
exports.IsKind = IsKind;
exports.IsSchema = IsSchema;
const ValueGuard = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Kind-Only]` Returns true if this value has a Readonly symbol */ function IsReadonly(value) {
    return ValueGuard.IsObject(value) && value[index_1.ReadonlyKind] === 'Readonly';
}
/** `[Kind-Only]` Returns true if this value has a Optional symbol */ function IsOptional(value) {
    return ValueGuard.IsObject(value) && value[index_1.OptionalKind] === 'Optional';
}
/** `[Kind-Only]` Returns true if the given value is TAny */ function IsAny(value) {
    return IsKindOf(value, 'Any');
}
/** `[Kind-Only]` Returns true if the given value is TArray */ function IsArray(value) {
    return IsKindOf(value, 'Array');
}
/** `[Kind-Only]` Returns true if the given value is TAsyncIterator */ function IsAsyncIterator(value) {
    return IsKindOf(value, 'AsyncIterator');
}
/** `[Kind-Only]` Returns true if the given value is TBigInt */ function IsBigInt(value) {
    return IsKindOf(value, 'BigInt');
}
/** `[Kind-Only]` Returns true if the given value is TBoolean */ function IsBoolean(value) {
    return IsKindOf(value, 'Boolean');
}
/** `[Kind-Only]` Returns true if the given value is TConstructor */ function IsConstructor(value) {
    return IsKindOf(value, 'Constructor');
}
/** `[Kind-Only]` Returns true if the given value is TDate */ function IsDate(value) {
    return IsKindOf(value, 'Date');
}
/** `[Kind-Only]` Returns true if the given value is TFunction */ function IsFunction(value) {
    return IsKindOf(value, 'Function');
}
/** `[Kind-Only]` Returns true if the given value is TInteger */ function IsInteger(value) {
    return IsKindOf(value, 'Integer');
}
/** `[Kind-Only]` Returns true if the given schema is TProperties */ function IsProperties(value) {
    return ValueGuard.IsObject(value);
}
/** `[Kind-Only]` Returns true if the given value is TIntersect */ function IsIntersect(value) {
    return IsKindOf(value, 'Intersect');
}
/** `[Kind-Only]` Returns true if the given value is TIterator */ function IsIterator(value) {
    return IsKindOf(value, 'Iterator');
}
/** `[Kind-Only]` Returns true if the given value is a TKind with the given name. */ function IsKindOf(value, kind) {
    return ValueGuard.IsObject(value) && index_1.Kind in value && value[index_1.Kind] === kind;
}
/** `[Kind-Only]` Returns true if the given value is TLiteral<string> */ function IsLiteralString(value) {
    return IsLiteral(value) && ValueGuard.IsString(value.const);
}
/** `[Kind-Only]` Returns true if the given value is TLiteral<number> */ function IsLiteralNumber(value) {
    return IsLiteral(value) && ValueGuard.IsNumber(value.const);
}
/** `[Kind-Only]` Returns true if the given value is TLiteral<boolean> */ function IsLiteralBoolean(value) {
    return IsLiteral(value) && ValueGuard.IsBoolean(value.const);
}
/** `[Kind-Only]` Returns true if the given value is TLiteral */ function IsLiteral(value) {
    return IsKindOf(value, 'Literal');
}
/** `[Kind-Only]` Returns true if the given value is a TMappedKey */ function IsMappedKey(value) {
    return IsKindOf(value, 'MappedKey');
}
/** `[Kind-Only]` Returns true if the given value is TMappedResult */ function IsMappedResult(value) {
    return IsKindOf(value, 'MappedResult');
}
/** `[Kind-Only]` Returns true if the given value is TNever */ function IsNever(value) {
    return IsKindOf(value, 'Never');
}
/** `[Kind-Only]` Returns true if the given value is TNot */ function IsNot(value) {
    return IsKindOf(value, 'Not');
}
/** `[Kind-Only]` Returns true if the given value is TNull */ function IsNull(value) {
    return IsKindOf(value, 'Null');
}
/** `[Kind-Only]` Returns true if the given value is TNumber */ function IsNumber(value) {
    return IsKindOf(value, 'Number');
}
/** `[Kind-Only]` Returns true if the given value is TObject */ function IsObject(value) {
    return IsKindOf(value, 'Object');
}
/** `[Kind-Only]` Returns true if the given value is TPromise */ function IsPromise(value) {
    return IsKindOf(value, 'Promise');
}
/** `[Kind-Only]` Returns true if the given value is TRecord */ function IsRecord(value) {
    return IsKindOf(value, 'Record');
}
/** `[Kind-Only]` Returns true if this value is TRecursive */ function IsRecursive(value) {
    return ValueGuard.IsObject(value) && index_1.Hint in value && value[index_1.Hint] === 'Recursive';
}
/** `[Kind-Only]` Returns true if the given value is TRef */ function IsRef(value) {
    return IsKindOf(value, 'Ref');
}
/** `[Kind-Only]` Returns true if the given value is TRegExp */ function IsRegExp(value) {
    return IsKindOf(value, 'RegExp');
}
/** `[Kind-Only]` Returns true if the given value is TString */ function IsString(value) {
    return IsKindOf(value, 'String');
}
/** `[Kind-Only]` Returns true if the given value is TSymbol */ function IsSymbol(value) {
    return IsKindOf(value, 'Symbol');
}
/** `[Kind-Only]` Returns true if the given value is TTemplateLiteral */ function IsTemplateLiteral(value) {
    return IsKindOf(value, 'TemplateLiteral');
}
/** `[Kind-Only]` Returns true if the given value is TThis */ function IsThis(value) {
    return IsKindOf(value, 'This');
}
/** `[Kind-Only]` Returns true of this value is TTransform */ function IsTransform(value) {
    return ValueGuard.IsObject(value) && index_1.TransformKind in value;
}
/** `[Kind-Only]` Returns true if the given value is TTuple */ function IsTuple(value) {
    return IsKindOf(value, 'Tuple');
}
/** `[Kind-Only]` Returns true if the given value is TUndefined */ function IsUndefined(value) {
    return IsKindOf(value, 'Undefined');
}
/** `[Kind-Only]` Returns true if the given value is TUnion */ function IsUnion(value) {
    return IsKindOf(value, 'Union');
}
/** `[Kind-Only]` Returns true if the given value is TUint8Array */ function IsUint8Array(value) {
    return IsKindOf(value, 'Uint8Array');
}
/** `[Kind-Only]` Returns true if the given value is TUnknown */ function IsUnknown(value) {
    return IsKindOf(value, 'Unknown');
}
/** `[Kind-Only]` Returns true if the given value is a raw TUnsafe */ function IsUnsafe(value) {
    return IsKindOf(value, 'Unsafe');
}
/** `[Kind-Only]` Returns true if the given value is TVoid */ function IsVoid(value) {
    return IsKindOf(value, 'Void');
}
/** `[Kind-Only]` Returns true if the given value is TKind */ function IsKind(value) {
    return ValueGuard.IsObject(value) && index_1.Kind in value && ValueGuard.IsString(value[index_1.Kind]);
}
/** `[Kind-Only]` Returns true if the given value is TSchema */ function IsSchema(value) {
    // prettier-ignore
    return IsAny(value) || IsArray(value) || IsBoolean(value) || IsBigInt(value) || IsAsyncIterator(value) || IsConstructor(value) || IsDate(value) || IsFunction(value) || IsInteger(value) || IsIntersect(value) || IsIterator(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull(value) || IsNumber(value) || IsObject(value) || IsPromise(value) || IsRecord(value) || IsRef(value) || IsRegExp(value) || IsString(value) || IsSymbol(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined(value) || IsUnion(value) || IsUint8Array(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TypeGuardUnknownTypeError = void 0;
exports.IsReadonly = IsReadonly;
exports.IsOptional = IsOptional;
exports.IsAny = IsAny;
exports.IsArray = IsArray;
exports.IsAsyncIterator = IsAsyncIterator;
exports.IsBigInt = IsBigInt;
exports.IsBoolean = IsBoolean;
exports.IsConstructor = IsConstructor;
exports.IsDate = IsDate;
exports.IsFunction = IsFunction;
exports.IsInteger = IsInteger;
exports.IsProperties = IsProperties;
exports.IsIntersect = IsIntersect;
exports.IsIterator = IsIterator;
exports.IsKindOf = IsKindOf;
exports.IsLiteralString = IsLiteralString;
exports.IsLiteralNumber = IsLiteralNumber;
exports.IsLiteralBoolean = IsLiteralBoolean;
exports.IsLiteral = IsLiteral;
exports.IsLiteralValue = IsLiteralValue;
exports.IsMappedKey = IsMappedKey;
exports.IsMappedResult = IsMappedResult;
exports.IsNever = IsNever;
exports.IsNot = IsNot;
exports.IsNull = IsNull;
exports.IsNumber = IsNumber;
exports.IsObject = IsObject;
exports.IsPromise = IsPromise;
exports.IsRecord = IsRecord;
exports.IsRecursive = IsRecursive;
exports.IsRef = IsRef;
exports.IsRegExp = IsRegExp;
exports.IsString = IsString;
exports.IsSymbol = IsSymbol;
exports.IsTemplateLiteral = IsTemplateLiteral;
exports.IsThis = IsThis;
exports.IsTransform = IsTransform;
exports.IsTuple = IsTuple;
exports.IsUndefined = IsUndefined;
exports.IsUnionLiteral = IsUnionLiteral;
exports.IsUnion = IsUnion;
exports.IsUint8Array = IsUint8Array;
exports.IsUnknown = IsUnknown;
exports.IsUnsafe = IsUnsafe;
exports.IsVoid = IsVoid;
exports.IsKind = IsKind;
exports.IsSchema = IsSchema;
const ValueGuard = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)");
class TypeGuardUnknownTypeError extends index_2.TypeBoxError {
}
exports.TypeGuardUnknownTypeError = TypeGuardUnknownTypeError;
const KnownTypes = [
    'Any',
    'Array',
    'AsyncIterator',
    'BigInt',
    'Boolean',
    'Constructor',
    'Date',
    'Enum',
    'Function',
    'Integer',
    'Intersect',
    'Iterator',
    'Literal',
    'MappedKey',
    'MappedResult',
    'Not',
    'Null',
    'Number',
    'Object',
    'Promise',
    'Record',
    'Ref',
    'RegExp',
    'String',
    'Symbol',
    'TemplateLiteral',
    'This',
    'Tuple',
    'Undefined',
    'Union',
    'Uint8Array',
    'Unknown',
    'Void'
];
function IsPattern(value) {
    try {
        new RegExp(value);
        return true;
    } catch  {
        return false;
    }
}
function IsControlCharacterFree(value) {
    if (!ValueGuard.IsString(value)) return false;
    for(let i = 0; i < value.length; i++){
        const code = value.charCodeAt(i);
        if (code >= 7 && code <= 13 || code === 27 || code === 127) {
            return false;
        }
    }
    return true;
}
function IsAdditionalProperties(value) {
    return IsOptionalBoolean(value) || IsSchema(value);
}
function IsOptionalBigInt(value) {
    return ValueGuard.IsUndefined(value) || ValueGuard.IsBigInt(value);
}
function IsOptionalNumber(value) {
    return ValueGuard.IsUndefined(value) || ValueGuard.IsNumber(value);
}
function IsOptionalBoolean(value) {
    return ValueGuard.IsUndefined(value) || ValueGuard.IsBoolean(value);
}
function IsOptionalString(value) {
    return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value);
}
function IsOptionalPattern(value) {
    return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value) && IsControlCharacterFree(value) && IsPattern(value);
}
function IsOptionalFormat(value) {
    return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value) && IsControlCharacterFree(value);
}
function IsOptionalSchema(value) {
    return ValueGuard.IsUndefined(value) || IsSchema(value);
}
// ------------------------------------------------------------------
// Modifiers
// ------------------------------------------------------------------
/** Returns true if this value has a Readonly symbol */ function IsReadonly(value) {
    return ValueGuard.IsObject(value) && value[index_1.ReadonlyKind] === 'Readonly';
}
/** Returns true if this value has a Optional symbol */ function IsOptional(value) {
    return ValueGuard.IsObject(value) && value[index_1.OptionalKind] === 'Optional';
}
// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------
/** Returns true if the given value is TAny */ function IsAny(value) {
    // prettier-ignore
    return IsKindOf(value, 'Any') && IsOptionalString(value.$id);
}
/** Returns true if the given value is TArray */ function IsArray(value) {
    return IsKindOf(value, 'Array') && value.type === 'array' && IsOptionalString(value.$id) && IsSchema(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
}
/** Returns true if the given value is TAsyncIterator */ function IsAsyncIterator(value) {
    // prettier-ignore
    return IsKindOf(value, 'AsyncIterator') && value.type === 'AsyncIterator' && IsOptionalString(value.$id) && IsSchema(value.items);
}
/** Returns true if the given value is TBigInt */ function IsBigInt(value) {
    // prettier-ignore
    return IsKindOf(value, 'BigInt') && value.type === 'bigint' && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
}
/** Returns true if the given value is TBoolean */ function IsBoolean(value) {
    // prettier-ignore
    return IsKindOf(value, 'Boolean') && value.type === 'boolean' && IsOptionalString(value.$id);
}
/** Returns true if the given value is TConstructor */ function IsConstructor(value) {
    // prettier-ignore
    return IsKindOf(value, 'Constructor') && value.type === 'Constructor' && IsOptionalString(value.$id) && ValueGuard.IsArray(value.parameters) && value.parameters.every((schema)=>IsSchema(schema)) && IsSchema(value.returns);
}
/** Returns true if the given value is TDate */ function IsDate(value) {
    return IsKindOf(value, 'Date') && value.type === 'Date' && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
}
/** Returns true if the given value is TFunction */ function IsFunction(value) {
    // prettier-ignore
    return IsKindOf(value, 'Function') && value.type === 'Function' && IsOptionalString(value.$id) && ValueGuard.IsArray(value.parameters) && value.parameters.every((schema)=>IsSchema(schema)) && IsSchema(value.returns);
}
/** Returns true if the given value is TInteger */ function IsInteger(value) {
    return IsKindOf(value, 'Integer') && value.type === 'integer' && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
/** Returns true if the given schema is TProperties */ function IsProperties(value) {
    // prettier-ignore
    return ValueGuard.IsObject(value) && Object.entries(value).every(([key, schema])=>IsControlCharacterFree(key) && IsSchema(schema));
}
/** Returns true if the given value is TIntersect */ function IsIntersect(value) {
    // prettier-ignore
    return IsKindOf(value, 'Intersect') && (ValueGuard.IsString(value.type) && value.type !== 'object' ? false : true) && ValueGuard.IsArray(value.allOf) && value.allOf.every((schema)=>IsSchema(schema) && !IsTransform(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
}
/** Returns true if the given value is TIterator */ function IsIterator(value) {
    // prettier-ignore
    return IsKindOf(value, 'Iterator') && value.type === 'Iterator' && IsOptionalString(value.$id) && IsSchema(value.items);
}
/** Returns true if the given value is a TKind with the given name. */ function IsKindOf(value, kind) {
    return ValueGuard.IsObject(value) && index_1.Kind in value && value[index_1.Kind] === kind;
}
/** Returns true if the given value is TLiteral<string> */ function IsLiteralString(value) {
    return IsLiteral(value) && ValueGuard.IsString(value.const);
}
/** Returns true if the given value is TLiteral<number> */ function IsLiteralNumber(value) {
    return IsLiteral(value) && ValueGuard.IsNumber(value.const);
}
/** Returns true if the given value is TLiteral<boolean> */ function IsLiteralBoolean(value) {
    return IsLiteral(value) && ValueGuard.IsBoolean(value.const);
}
/** Returns true if the given value is TLiteral */ function IsLiteral(value) {
    // prettier-ignore
    return IsKindOf(value, 'Literal') && IsOptionalString(value.$id) && IsLiteralValue(value.const);
}
/** Returns true if the given value is a TLiteralValue */ function IsLiteralValue(value) {
    return ValueGuard.IsBoolean(value) || ValueGuard.IsNumber(value) || ValueGuard.IsString(value);
}
/** Returns true if the given value is a TMappedKey */ function IsMappedKey(value) {
    // prettier-ignore
    return IsKindOf(value, 'MappedKey') && ValueGuard.IsArray(value.keys) && value.keys.every((key)=>ValueGuard.IsNumber(key) || ValueGuard.IsString(key));
}
/** Returns true if the given value is TMappedResult */ function IsMappedResult(value) {
    // prettier-ignore
    return IsKindOf(value, 'MappedResult') && IsProperties(value.properties);
}
/** Returns true if the given value is TNever */ function IsNever(value) {
    // prettier-ignore
    return IsKindOf(value, 'Never') && ValueGuard.IsObject(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
}
/** Returns true if the given value is TNot */ function IsNot(value) {
    // prettier-ignore
    return IsKindOf(value, 'Not') && IsSchema(value.not);
}
/** Returns true if the given value is TNull */ function IsNull(value) {
    // prettier-ignore
    return IsKindOf(value, 'Null') && value.type === 'null' && IsOptionalString(value.$id);
}
/** Returns true if the given value is TNumber */ function IsNumber(value) {
    return IsKindOf(value, 'Number') && value.type === 'number' && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
/** Returns true if the given value is TObject */ function IsObject(value) {
    // prettier-ignore
    return IsKindOf(value, 'Object') && value.type === 'object' && IsOptionalString(value.$id) && IsProperties(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
}
/** Returns true if the given value is TPromise */ function IsPromise(value) {
    // prettier-ignore
    return IsKindOf(value, 'Promise') && value.type === 'Promise' && IsOptionalString(value.$id) && IsSchema(value.item);
}
/** Returns true if the given value is TRecord */ function IsRecord(value) {
    // prettier-ignore
    return IsKindOf(value, 'Record') && value.type === 'object' && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && ValueGuard.IsObject(value.patternProperties) && ((schema)=>{
        const keys = Object.getOwnPropertyNames(schema.patternProperties);
        return keys.length === 1 && IsPattern(keys[0]) && ValueGuard.IsObject(schema.patternProperties) && IsSchema(schema.patternProperties[keys[0]]);
    })(value);
}
/** Returns true if this value is TRecursive */ function IsRecursive(value) {
    return ValueGuard.IsObject(value) && index_1.Hint in value && value[index_1.Hint] === 'Recursive';
}
/** Returns true if the given value is TRef */ function IsRef(value) {
    // prettier-ignore
    return IsKindOf(value, 'Ref') && IsOptionalString(value.$id) && ValueGuard.IsString(value.$ref);
}
/** Returns true if the given value is TRegExp */ function IsRegExp(value) {
    // prettier-ignore
    return IsKindOf(value, 'RegExp') && IsOptionalString(value.$id) && ValueGuard.IsString(value.source) && ValueGuard.IsString(value.flags) && IsOptionalNumber(value.maxLength) && IsOptionalNumber(value.minLength);
}
/** Returns true if the given value is TString */ function IsString(value) {
    // prettier-ignore
    return IsKindOf(value, 'String') && value.type === 'string' && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
}
/** Returns true if the given value is TSymbol */ function IsSymbol(value) {
    // prettier-ignore
    return IsKindOf(value, 'Symbol') && value.type === 'symbol' && IsOptionalString(value.$id);
}
/** Returns true if the given value is TTemplateLiteral */ function IsTemplateLiteral(value) {
    // prettier-ignore
    return IsKindOf(value, 'TemplateLiteral') && value.type === 'string' && ValueGuard.IsString(value.pattern) && value.pattern[0] === '^' && value.pattern[value.pattern.length - 1] === '$';
}
/** Returns true if the given value is TThis */ function IsThis(value) {
    // prettier-ignore
    return IsKindOf(value, 'This') && IsOptionalString(value.$id) && ValueGuard.IsString(value.$ref);
}
/** Returns true of this value is TTransform */ function IsTransform(value) {
    return ValueGuard.IsObject(value) && index_1.TransformKind in value;
}
/** Returns true if the given value is TTuple */ function IsTuple(value) {
    // prettier-ignore
    return IsKindOf(value, 'Tuple') && value.type === 'array' && IsOptionalString(value.$id) && ValueGuard.IsNumber(value.minItems) && ValueGuard.IsNumber(value.maxItems) && value.minItems === value.maxItems && (ValueGuard.IsUndefined(value.items) && ValueGuard.IsUndefined(value.additionalItems) && value.minItems === 0 || ValueGuard.IsArray(value.items) && value.items.every((schema)=>IsSchema(schema)));
}
/** Returns true if the given value is TUndefined */ function IsUndefined(value) {
    // prettier-ignore
    return IsKindOf(value, 'Undefined') && value.type === 'undefined' && IsOptionalString(value.$id);
}
/** Returns true if the given value is TUnion<Literal<string | number>[]> */ function IsUnionLiteral(value) {
    return IsUnion(value) && value.anyOf.every((schema)=>IsLiteralString(schema) || IsLiteralNumber(schema));
}
/** Returns true if the given value is TUnion */ function IsUnion(value) {
    // prettier-ignore
    return IsKindOf(value, 'Union') && IsOptionalString(value.$id) && ValueGuard.IsObject(value) && ValueGuard.IsArray(value.anyOf) && value.anyOf.every((schema)=>IsSchema(schema));
}
/** Returns true if the given value is TUint8Array */ function IsUint8Array(value) {
    // prettier-ignore
    return IsKindOf(value, 'Uint8Array') && value.type === 'Uint8Array' && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
}
/** Returns true if the given value is TUnknown */ function IsUnknown(value) {
    // prettier-ignore
    return IsKindOf(value, 'Unknown') && IsOptionalString(value.$id);
}
/** Returns true if the given value is a raw TUnsafe */ function IsUnsafe(value) {
    return IsKindOf(value, 'Unsafe');
}
/** Returns true if the given value is TVoid */ function IsVoid(value) {
    // prettier-ignore
    return IsKindOf(value, 'Void') && value.type === 'void' && IsOptionalString(value.$id);
}
/** Returns true if the given value is TKind */ function IsKind(value) {
    return ValueGuard.IsObject(value) && index_1.Kind in value && ValueGuard.IsString(value[index_1.Kind]) && !KnownTypes.includes(value[index_1.Kind]);
}
/** Returns true if the given value is TSchema */ function IsSchema(value) {
    // prettier-ignore
    return ValueGuard.IsObject(value) && (IsAny(value) || IsArray(value) || IsBoolean(value) || IsBigInt(value) || IsAsyncIterator(value) || IsConstructor(value) || IsDate(value) || IsFunction(value) || IsInteger(value) || IsIntersect(value) || IsIterator(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull(value) || IsNumber(value) || IsObject(value) || IsPromise(value) || IsRecord(value) || IsRef(value) || IsRegExp(value) || IsString(value) || IsSymbol(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined(value) || IsUnion(value) || IsUint8Array(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value));
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ValueGuard = exports.TypeGuard = exports.KindGuard = void 0;
exports.KindGuard = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
exports.TypeGuard = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/type.js [app-ssr] (ecmascript)");
exports.ValueGuard = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/helpers/helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Increment = Increment;
/** Increments the given string value + 1 */ function Increment(T) {
    return (parseInt(T) + 1).toString();
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/helpers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/helpers/helpers.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/patterns/patterns.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PatternNeverExact = exports.PatternStringExact = exports.PatternNumberExact = exports.PatternBooleanExact = exports.PatternNever = exports.PatternString = exports.PatternNumber = exports.PatternBoolean = void 0;
exports.PatternBoolean = '(true|false)';
exports.PatternNumber = '(0|[1-9][0-9]*)';
exports.PatternString = '(.*)';
exports.PatternNever = '(?!.*)';
exports.PatternBooleanExact = `^${exports.PatternBoolean}$`;
exports.PatternNumberExact = `^${exports.PatternNumber}$`;
exports.PatternStringExact = `^${exports.PatternString}$`;
exports.PatternNeverExact = `^${exports.PatternNever}$`;
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/patterns/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/patterns/patterns.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/registry/format.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Entries = Entries;
exports.Clear = Clear;
exports.Delete = Delete;
exports.Has = Has;
exports.Set = Set;
exports.Get = Get;
/** A registry for user defined string formats */ const map = new Map();
/** Returns the entries in this registry */ function Entries() {
    return new Map(map);
}
/** Clears all user defined string formats */ function Clear() {
    return map.clear();
}
/** Deletes a registered format */ function Delete(format) {
    return map.delete(format);
}
/** Returns true if the user defined string format exists */ function Has(format) {
    return map.has(format);
}
/** Sets a validation function for a user defined string format */ function Set(format, func) {
    map.set(format, func);
}
/** Gets a validation function for a user defined string format */ function Get(format) {
    return map.get(format);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/registry/type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Entries = Entries;
exports.Clear = Clear;
exports.Delete = Delete;
exports.Has = Has;
exports.Set = Set;
exports.Get = Get;
/** A registry for user defined types */ const map = new Map();
/** Returns the entries in this registry */ function Entries() {
    return new Map(map);
}
/** Clears all user defined types */ function Clear() {
    return map.clear();
}
/** Deletes a registered type */ function Delete(kind) {
    return map.delete(kind);
}
/** Returns true if this registry contains this kind */ function Has(kind) {
    return map.has(kind);
}
/** Sets a validation function for a user defined type */ function Set(kind, func) {
    map.set(kind, func);
}
/** Gets a custom validation function for a user defined type */ function Get(kind) {
    return map.get(kind);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/registry/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TypeRegistry = exports.FormatRegistry = void 0;
exports.FormatRegistry = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/registry/format.js [app-ssr] (ecmascript)");
exports.TypeRegistry = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/registry/type.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/sets/set.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SetIncludes = SetIncludes;
exports.SetIsSubset = SetIsSubset;
exports.SetDistinct = SetDistinct;
exports.SetIntersect = SetIntersect;
exports.SetUnion = SetUnion;
exports.SetComplement = SetComplement;
exports.SetIntersectMany = SetIntersectMany;
exports.SetUnionMany = SetUnionMany;
/** Returns true if element right is in the set of left */ // prettier-ignore
function SetIncludes(T, S) {
    return T.includes(S);
}
/** Returns true if left is a subset of right */ function SetIsSubset(T, S) {
    return T.every((L)=>SetIncludes(S, L));
}
/** Returns a distinct set of elements */ function SetDistinct(T) {
    return [
        ...new Set(T)
    ];
}
/** Returns the Intersect of the given sets */ function SetIntersect(T, S) {
    return T.filter((L)=>S.includes(L));
}
/** Returns the Union of the given sets */ function SetUnion(T, S) {
    return [
        ...T,
        ...S
    ];
}
/** Returns the Complement by omitting elements in T that are in S */ // prettier-ignore
function SetComplement(T, S) {
    return T.filter((L)=>!S.includes(L));
}
// prettier-ignore
function SetIntersectManyResolve(T, Init) {
    return T.reduce((Acc, L)=>{
        return SetIntersect(Acc, L);
    }, Init);
}
// prettier-ignore
function SetIntersectMany(T) {
    return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve(T.slice(1), T[0]) : [];
}
/** Returns the Union of multiple sets */ function SetUnionMany(T) {
    const Acc = [];
    for (const L of T)Acc.push(...L);
    return Acc;
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/sets/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/sets/set.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/any/any.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Any = Any;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates an Any type */ function Any(options) {
    return (0, index_1.CreateType)({
        [index_2.Kind]: 'Any'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/any/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/any/any.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/array/array.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Array = Array;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates an Array type */ function Array(items, options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Array',
        type: 'array',
        items
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/array/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/array/array.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/async-iterator/async-iterator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncIterator = AsyncIterator;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Creates a AsyncIterator type */ function AsyncIterator(items, options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'AsyncIterator',
        type: 'AsyncIterator',
        items
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/async-iterator/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/async-iterator/async-iterator.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/discard.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Discard = Discard;
function DiscardKey(value, key) {
    const { [key]: _, ...rest } = value;
    return rest;
}
/** Discards property keys from the given value. This function returns a shallow Clone. */ function Discard(value, keys) {
    return keys.reduce((acc, key)=>DiscardKey(acc, key), value);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/discard.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/never.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Never = Never;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a Never type */ function Never(options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Never',
        not: {}
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/never.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/mapped-key.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MappedKey = MappedKey;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
// prettier-ignore
function MappedKey(T) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'MappedKey',
        keys: T
    });
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/mapped-result.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MappedResult = MappedResult;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
// prettier-ignore
function MappedResult(properties) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'MappedResult',
        properties
    });
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor/constructor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Constructor = Constructor;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Creates a Constructor type */ function Constructor(parameters, returns, options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Constructor',
        type: 'Constructor',
        parameters,
        returns
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor/constructor.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/function/function.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Function = Function;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Creates a Function type */ function Function(parameters, returns, options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Function',
        type: 'Function',
        parameters,
        returns
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/function/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/function/function.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/union-create.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnionCreate = UnionCreate;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
function UnionCreate(T, options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Union',
        anyOf: T
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/union-evaluated.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnionEvaluated = UnionEvaluated;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/index.js [app-ssr] (ecmascript)");
const union_create_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/union-create.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function IsUnionOptional(T) {
    return T.some((L)=>(0, kind_1.IsOptional)(L));
}
// prettier-ignore
function RemoveOptionalFromRest(T) {
    return T.map((L)=>(0, kind_1.IsOptional)(L) ? RemoveOptionalFromType(L) : L);
}
// prettier-ignore
function RemoveOptionalFromType(T) {
    return (0, index_2.Discard)(T, [
        index_1.OptionalKind
    ]);
}
// prettier-ignore
function ResolveUnion(T, options) {
    return IsUnionOptional(T) ? (0, index_4.Optional)((0, union_create_1.UnionCreate)(RemoveOptionalFromRest(T), options)) : (0, union_create_1.UnionCreate)(RemoveOptionalFromRest(T), options);
}
/** `[Json]` Creates an evaluated Union type */ function UnionEvaluated(T, options) {
    // prettier-ignore
    return T.length === 0 ? (0, index_3.Never)(options) : T.length === 1 ? (0, type_1.CreateType)(T[0], options) : ResolveUnion(T, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/union-type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/union.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Union = Union;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const union_create_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/union-create.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a Union type */ function Union(T, options) {
    // prettier-ignore
    return T.length === 0 ? (0, index_1.Never)(options) : T.length === 1 ? (0, type_1.CreateType)(T[0], options) : (0, union_create_1.UnionCreate)(T, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/union-evaluated.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/union-type.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/union.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateLiteralParserError = void 0;
exports.TemplateLiteralParse = TemplateLiteralParse;
exports.TemplateLiteralParseExact = TemplateLiteralParseExact;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TemplateLiteralParserError
// ------------------------------------------------------------------
class TemplateLiteralParserError extends index_1.TypeBoxError {
}
exports.TemplateLiteralParserError = TemplateLiteralParserError;
// -------------------------------------------------------------------
// Unescape
//
// Unescape for these control characters specifically. Note that this
// function is only called on non union group content, and where we
// still want to allow the user to embed control characters in that
// content. For review.
// -------------------------------------------------------------------
// prettier-ignore
function Unescape(pattern) {
    return pattern.replace(/\\\$/g, '$').replace(/\\\*/g, '*').replace(/\\\^/g, '^').replace(/\\\|/g, '|').replace(/\\\(/g, '(').replace(/\\\)/g, ')');
}
// -------------------------------------------------------------------
// Control Characters
// -------------------------------------------------------------------
function IsNonEscaped(pattern, index, char) {
    return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
function IsOpenParen(pattern, index) {
    return IsNonEscaped(pattern, index, '(');
}
function IsCloseParen(pattern, index) {
    return IsNonEscaped(pattern, index, ')');
}
function IsSeparator(pattern, index) {
    return IsNonEscaped(pattern, index, '|');
}
// -------------------------------------------------------------------
// Control Groups
// -------------------------------------------------------------------
function IsGroup(pattern) {
    if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1))) return false;
    let count = 0;
    for(let index = 0; index < pattern.length; index++){
        if (IsOpenParen(pattern, index)) count += 1;
        if (IsCloseParen(pattern, index)) count -= 1;
        if (count === 0 && index !== pattern.length - 1) return false;
    }
    return true;
}
// prettier-ignore
function InGroup(pattern) {
    return pattern.slice(1, pattern.length - 1);
}
// prettier-ignore
function IsPrecedenceOr(pattern) {
    let count = 0;
    for(let index = 0; index < pattern.length; index++){
        if (IsOpenParen(pattern, index)) count += 1;
        if (IsCloseParen(pattern, index)) count -= 1;
        if (IsSeparator(pattern, index) && count === 0) return true;
    }
    return false;
}
// prettier-ignore
function IsPrecedenceAnd(pattern) {
    for(let index = 0; index < pattern.length; index++){
        if (IsOpenParen(pattern, index)) return true;
    }
    return false;
}
// prettier-ignore
function Or(pattern) {
    let [count, start] = [
        0,
        0
    ];
    const expressions = [];
    for(let index = 0; index < pattern.length; index++){
        if (IsOpenParen(pattern, index)) count += 1;
        if (IsCloseParen(pattern, index)) count -= 1;
        if (IsSeparator(pattern, index) && count === 0) {
            const range = pattern.slice(start, index);
            if (range.length > 0) expressions.push(TemplateLiteralParse(range));
            start = index + 1;
        }
    }
    const range = pattern.slice(start);
    if (range.length > 0) expressions.push(TemplateLiteralParse(range));
    if (expressions.length === 0) return {
        type: 'const',
        const: ''
    };
    if (expressions.length === 1) return expressions[0];
    return {
        type: 'or',
        expr: expressions
    };
}
// prettier-ignore
function And(pattern) {
    function Group(value, index) {
        if (!IsOpenParen(value, index)) throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
        let count = 0;
        for(let scan = index; scan < value.length; scan++){
            if (IsOpenParen(value, scan)) count += 1;
            if (IsCloseParen(value, scan)) count -= 1;
            if (count === 0) return [
                index,
                scan
            ];
        }
        throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
    }
    function Range(pattern, index) {
        for(let scan = index; scan < pattern.length; scan++){
            if (IsOpenParen(pattern, scan)) return [
                index,
                scan
            ];
        }
        return [
            index,
            pattern.length
        ];
    }
    const expressions = [];
    for(let index = 0; index < pattern.length; index++){
        if (IsOpenParen(pattern, index)) {
            const [start, end] = Group(pattern, index);
            const range = pattern.slice(start, end + 1);
            expressions.push(TemplateLiteralParse(range));
            index = end;
        } else {
            const [start, end] = Range(pattern, index);
            const range = pattern.slice(start, end);
            if (range.length > 0) expressions.push(TemplateLiteralParse(range));
            index = end - 1;
        }
    }
    return expressions.length === 0 ? {
        type: 'const',
        const: ''
    } : expressions.length === 1 ? expressions[0] : {
        type: 'and',
        expr: expressions
    };
}
// ------------------------------------------------------------------
// TemplateLiteralParse
// ------------------------------------------------------------------
/** Parses a pattern and returns an expression tree */ function TemplateLiteralParse(pattern) {
    // prettier-ignore
    return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : {
        type: 'const',
        const: Unescape(pattern)
    };
}
// ------------------------------------------------------------------
// TemplateLiteralParseExact
// ------------------------------------------------------------------
/** Parses a pattern and strips forward and trailing ^ and $ */ function TemplateLiteralParseExact(pattern) {
    return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/finite.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateLiteralFiniteError = void 0;
exports.IsTemplateLiteralExpressionFinite = IsTemplateLiteralExpressionFinite;
exports.IsTemplateLiteralFinite = IsTemplateLiteralFinite;
const parse_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/parse.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TemplateLiteralFiniteError
// ------------------------------------------------------------------
class TemplateLiteralFiniteError extends index_1.TypeBoxError {
}
exports.TemplateLiteralFiniteError = TemplateLiteralFiniteError;
// ------------------------------------------------------------------
// IsTemplateLiteralFiniteCheck
// ------------------------------------------------------------------
// prettier-ignore
function IsNumberExpression(expression) {
    return expression.type === 'or' && expression.expr.length === 2 && expression.expr[0].type === 'const' && expression.expr[0].const === '0' && expression.expr[1].type === 'const' && expression.expr[1].const === '[1-9][0-9]*';
}
// prettier-ignore
function IsBooleanExpression(expression) {
    return expression.type === 'or' && expression.expr.length === 2 && expression.expr[0].type === 'const' && expression.expr[0].const === 'true' && expression.expr[1].type === 'const' && expression.expr[1].const === 'false';
}
// prettier-ignore
function IsStringExpression(expression) {
    return expression.type === 'const' && expression.const === '.*';
}
// ------------------------------------------------------------------
// IsTemplateLiteralExpressionFinite
// ------------------------------------------------------------------
// prettier-ignore
function IsTemplateLiteralExpressionFinite(expression) {
    return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === 'and' ? expression.expr.every((expr)=>IsTemplateLiteralExpressionFinite(expr)) : expression.type === 'or' ? expression.expr.every((expr)=>IsTemplateLiteralExpressionFinite(expr)) : expression.type === 'const' ? true : (()=>{
        throw new TemplateLiteralFiniteError(`Unknown expression type`);
    })();
}
/** Returns true if this TemplateLiteral resolves to a finite set of values */ function IsTemplateLiteralFinite(schema) {
    const expression = (0, parse_1.TemplateLiteralParseExact)(schema.pattern);
    return IsTemplateLiteralExpressionFinite(expression);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/generate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateLiteralGenerateError = void 0;
exports.TemplateLiteralExpressionGenerate = TemplateLiteralExpressionGenerate;
exports.TemplateLiteralGenerate = TemplateLiteralGenerate;
const finite_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/finite.js [app-ssr] (ecmascript)");
const parse_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/parse.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TemplateLiteralGenerateError
// ------------------------------------------------------------------
class TemplateLiteralGenerateError extends index_1.TypeBoxError {
}
exports.TemplateLiteralGenerateError = TemplateLiteralGenerateError;
// ------------------------------------------------------------------
// TemplateLiteralExpressionGenerate
// ------------------------------------------------------------------
// prettier-ignore
function* GenerateReduce(buffer) {
    if (buffer.length === 1) return yield* buffer[0];
    for (const left of buffer[0]){
        for (const right of GenerateReduce(buffer.slice(1))){
            yield `${left}${right}`;
        }
    }
}
// prettier-ignore
function* GenerateAnd(expression) {
    return yield* GenerateReduce(expression.expr.map((expr)=>[
            ...TemplateLiteralExpressionGenerate(expr)
        ]));
}
// prettier-ignore
function* GenerateOr(expression) {
    for (const expr of expression.expr)yield* TemplateLiteralExpressionGenerate(expr);
}
// prettier-ignore
function* GenerateConst(expression) {
    return yield expression.const;
}
function* TemplateLiteralExpressionGenerate(expression) {
    return expression.type === 'and' ? yield* GenerateAnd(expression) : expression.type === 'or' ? yield* GenerateOr(expression) : expression.type === 'const' ? yield* GenerateConst(expression) : (()=>{
        throw new TemplateLiteralGenerateError('Unknown expression');
    })();
}
/** Generates a tuple of strings from the given TemplateLiteral. Returns an empty tuple if infinite. */ function TemplateLiteralGenerate(schema) {
    const expression = (0, parse_1.TemplateLiteralParseExact)(schema.pattern);
    // prettier-ignore
    return (0, finite_1.IsTemplateLiteralExpressionFinite)(expression) ? [
        ...TemplateLiteralExpressionGenerate(expression)
    ] : [];
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/literal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Literal = Literal;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a Literal type */ function Literal(value, options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Literal',
        const: value,
        type: typeof value
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/literal.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/boolean/boolean.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Boolean = Boolean;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a Boolean type */ function Boolean(options) {
    return (0, index_2.CreateType)({
        [index_1.Kind]: 'Boolean',
        type: 'boolean'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/boolean/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/boolean/boolean.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/bigint/bigint.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BigInt = BigInt;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/index.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Creates a BigInt type */ function BigInt(options) {
    return (0, index_2.CreateType)({
        [index_1.Kind]: 'BigInt',
        type: 'bigint'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/bigint/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/bigint/bigint.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/number/number.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Number = Number;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a Number type */ function Number(options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Number',
        type: 'number'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/number/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/number/number.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/string/string.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.String = String;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a String type */ function String(options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'String',
        type: 'string'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/string/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/string/string.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/syntax.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateLiteralSyntax = TemplateLiteralSyntax;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/boolean/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/bigint/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/number/index.js [app-ssr] (ecmascript)");
const index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/string/index.js [app-ssr] (ecmascript)");
const index_6 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const index_7 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// SyntaxParsers
// ------------------------------------------------------------------
// prettier-ignore
function* FromUnion(syntax) {
    const trim = syntax.trim().replace(/"|'/g, '');
    return trim === 'boolean' ? yield (0, index_2.Boolean)() : trim === 'number' ? yield (0, index_4.Number)() : trim === 'bigint' ? yield (0, index_3.BigInt)() : trim === 'string' ? yield (0, index_5.String)() : yield (()=>{
        const literals = trim.split('|').map((literal)=>(0, index_1.Literal)(literal.trim()));
        return literals.length === 0 ? (0, index_7.Never)() : literals.length === 1 ? literals[0] : (0, index_6.UnionEvaluated)(literals);
    })();
}
// prettier-ignore
function* FromTerminal(syntax) {
    if (syntax[1] !== '{') {
        const L = (0, index_1.Literal)('$');
        const R = FromSyntax(syntax.slice(1));
        return yield* [
            L,
            ...R
        ];
    }
    for(let i = 2; i < syntax.length; i++){
        if (syntax[i] === '}') {
            const L = FromUnion(syntax.slice(2, i));
            const R = FromSyntax(syntax.slice(i + 1));
            return yield* [
                ...L,
                ...R
            ];
        }
    }
    yield (0, index_1.Literal)(syntax);
}
// prettier-ignore
function* FromSyntax(syntax) {
    for(let i = 0; i < syntax.length; i++){
        if (syntax[i] === '$') {
            const L = (0, index_1.Literal)(syntax.slice(0, i));
            const R = FromTerminal(syntax.slice(i));
            return yield* [
                L,
                ...R
            ];
        }
    }
    yield (0, index_1.Literal)(syntax);
}
/** Parses TemplateLiteralSyntax and returns a tuple of TemplateLiteralKinds */ function TemplateLiteralSyntax(syntax) {
    return [
        ...FromSyntax(syntax)
    ];
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/pattern.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateLiteralPatternError = void 0;
exports.TemplateLiteralPattern = TemplateLiteralPattern;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/patterns/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TemplateLiteralPatternError
// ------------------------------------------------------------------
class TemplateLiteralPatternError extends index_3.TypeBoxError {
}
exports.TemplateLiteralPatternError = TemplateLiteralPatternError;
// ------------------------------------------------------------------
// TemplateLiteralPattern
// ------------------------------------------------------------------
function Escape(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
// prettier-ignore
function Visit(schema, acc) {
    return (0, kind_1.IsTemplateLiteral)(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : (0, kind_1.IsUnion)(schema) ? `(${schema.anyOf.map((schema)=>Visit(schema, acc)).join('|')})` : (0, kind_1.IsNumber)(schema) ? `${acc}${index_1.PatternNumber}` : (0, kind_1.IsInteger)(schema) ? `${acc}${index_1.PatternNumber}` : (0, kind_1.IsBigInt)(schema) ? `${acc}${index_1.PatternNumber}` : (0, kind_1.IsString)(schema) ? `${acc}${index_1.PatternString}` : (0, kind_1.IsLiteral)(schema) ? `${acc}${Escape(schema.const.toString())}` : (0, kind_1.IsBoolean)(schema) ? `${acc}${index_1.PatternBoolean}` : (()=>{
        throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[index_2.Kind]}'`);
    })();
}
function TemplateLiteralPattern(kinds) {
    return `^${kinds.map((schema)=>Visit(schema, '')).join('')}\$`;
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/union.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateLiteralToUnion = TemplateLiteralToUnion;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)");
const generate_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/generate.js [app-ssr] (ecmascript)");
/** Returns a Union from the given TemplateLiteral */ function TemplateLiteralToUnion(schema) {
    const R = (0, generate_1.TemplateLiteralGenerate)(schema);
    const L = R.map((S)=>(0, index_2.Literal)(S));
    return (0, index_1.UnionEvaluated)(L);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/template-literal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateLiteral = TemplateLiteral;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const syntax_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/syntax.js [app-ssr] (ecmascript)");
const pattern_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/pattern.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a TemplateLiteral type */ // prettier-ignore
function TemplateLiteral(unresolved, options) {
    const pattern = (0, value_1.IsString)(unresolved) ? (0, pattern_1.TemplateLiteralPattern)((0, syntax_1.TemplateLiteralSyntax)(unresolved)) : (0, pattern_1.TemplateLiteralPattern)(unresolved);
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'TemplateLiteral',
        type: 'string',
        pattern
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/finite.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/generate.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/syntax.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/parse.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/pattern.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/union.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/template-literal.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed-property-keys.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IndexPropertyKeys = IndexPropertyKeys;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromTemplateLiteral(T) {
    const R = (0, index_1.TemplateLiteralGenerate)(T);
    return R.map((S)=>S.toString());
}
// prettier-ignore
function FromUnion(T) {
    const Acc = [];
    for (const L of T)Acc.push(...IndexPropertyKeys(L));
    return Acc;
}
// prettier-ignore
function FromLiteral(T) {
    return [
        T.toString()
    ] // TS 5.4 observes TLiteralValue as not having a toString()
    ;
}
/** Returns a tuple of PropertyKeys derived from the given TSchema */ // prettier-ignore
function IndexPropertyKeys(T) {
    return [
        ...new Set((0, kind_1.IsTemplateLiteral)(T) ? FromTemplateLiteral(T) : (0, kind_1.IsUnion)(T) ? FromUnion(T.anyOf) : (0, kind_1.IsLiteral)(T) ? FromLiteral(T.const) : (0, kind_1.IsNumber)(T) ? [
            '[number]'
        ] : (0, kind_1.IsInteger)(T) ? [
            '[number]'
        ] : [])
    ];
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed-from-mapped-result.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IndexFromMappedResult = IndexFromMappedResult;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const indexed_property_keys_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed-property-keys.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/index.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromProperties(T, P, options) {
    const Acc = {};
    for (const K2 of Object.getOwnPropertyNames(P)){
        Acc[K2] = (0, index_2.Index)(T, (0, indexed_property_keys_1.IndexPropertyKeys)(P[K2]), options);
    }
    return Acc;
}
// prettier-ignore
function FromMappedResult(T, R, options) {
    return FromProperties(T, R.properties, options);
}
// prettier-ignore
function IndexFromMappedResult(T, R, options) {
    const P = FromMappedResult(T, R, options);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IndexFromPropertyKey = IndexFromPropertyKey;
exports.IndexFromPropertyKeys = IndexFromPropertyKeys;
exports.Index = Index;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const indexed_property_keys_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed-property-keys.js [app-ssr] (ecmascript)");
const indexed_from_mapped_key_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed-from-mapped-key.js [app-ssr] (ecmascript)");
const indexed_from_mapped_result_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed-from-mapped-result.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromRest(T, K) {
    return T.map((L)=>IndexFromPropertyKey(L, K));
}
// prettier-ignore
function FromIntersectRest(T) {
    return T.filter((L)=>!(0, kind_1.IsNever)(L));
}
// prettier-ignore
function FromIntersect(T, K) {
    return (0, index_2.IntersectEvaluated)(FromIntersectRest(FromRest(T, K)));
}
// prettier-ignore
function FromUnionRest(T) {
    return T.some((L)=>(0, kind_1.IsNever)(L)) ? [] : T;
}
// prettier-ignore
function FromUnion(T, K) {
    return (0, index_3.UnionEvaluated)(FromUnionRest(FromRest(T, K)));
}
// prettier-ignore
function FromTuple(T, K) {
    return K in T ? T[K] : K === '[number]' ? (0, index_3.UnionEvaluated)(T) : (0, index_1.Never)();
}
// prettier-ignore
function FromArray(T, K) {
    return K === '[number]' ? T : (0, index_1.Never)();
}
// prettier-ignore
function FromProperty(T, K) {
    return K in T ? T[K] : (0, index_1.Never)();
}
// prettier-ignore
function IndexFromPropertyKey(T, K) {
    return (0, kind_1.IsIntersect)(T) ? FromIntersect(T.allOf, K) : (0, kind_1.IsUnion)(T) ? FromUnion(T.anyOf, K) : (0, kind_1.IsTuple)(T) ? FromTuple(T.items ?? [], K) : (0, kind_1.IsArray)(T) ? FromArray(T.items, K) : (0, kind_1.IsObject)(T) ? FromProperty(T.properties, K) : (0, index_1.Never)();
}
// prettier-ignore
function IndexFromPropertyKeys(T, K) {
    return K.map((L)=>IndexFromPropertyKey(T, L));
}
// prettier-ignore
function FromSchema(T, K) {
    return (0, index_3.UnionEvaluated)(IndexFromPropertyKeys(T, K));
}
/** `[Json]` Returns an Indexed property type for the given keys */ function Index(T, K, options) {
    // mapped-types
    if ((0, kind_1.IsMappedResult)(K)) return (0, indexed_from_mapped_result_1.IndexFromMappedResult)(T, K, options);
    if ((0, kind_1.IsMappedKey)(K)) return (0, indexed_from_mapped_key_1.IndexFromMappedKey)(T, K, options);
    // prettier-ignore
    return (0, type_1.CreateType)((0, kind_1.IsSchema)(K) ? FromSchema(T, (0, indexed_property_keys_1.IndexPropertyKeys)(K)) : FromSchema(T, K), options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed-from-mapped-key.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IndexFromMappedKey = IndexFromMappedKey;
const indexed_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)");
// prettier-ignore
function MappedIndexPropertyKey(T, K, options) {
    return {
        [K]: (0, indexed_1.Index)(T, [
            K
        ], (0, value_1.Clone)(options))
    };
}
// prettier-ignore
function MappedIndexPropertyKeys(T, K, options) {
    return K.reduce((Acc, L)=>{
        return {
            ...Acc,
            ...MappedIndexPropertyKey(T, L, options)
        };
    }, {});
}
// prettier-ignore
function MappedIndexProperties(T, K, options) {
    return MappedIndexPropertyKeys(T, K.keys, options);
}
// prettier-ignore
function IndexFromMappedKey(T, K, options) {
    const P = MappedIndexProperties(T, K, options);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed-from-mapped-key.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed-from-mapped-result.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed-property-keys.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/iterator/iterator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Iterator = Iterator;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Creates an Iterator type */ function Iterator(items, options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Iterator',
        type: 'Iterator',
        items
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/iterator/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/iterator/iterator.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/object.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Object = void 0;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
function RequiredKeys(properties) {
    const keys = [];
    for(let key in properties){
        if (!(0, kind_1.IsOptional)(properties[key])) keys.push(key);
    }
    return keys;
}
/** `[Json]` Creates an Object type */ function _Object(properties, options) {
    const required = RequiredKeys(properties);
    const schematic = required.length > 0 ? {
        [index_1.Kind]: 'Object',
        type: 'object',
        properties,
        required
    } : {
        [index_1.Kind]: 'Object',
        type: 'object',
        properties
    };
    return (0, type_1.CreateType)(schematic, options);
}
/** `[Json]` Creates an Object type */ exports.Object = _Object;
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/object.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/promise/promise.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Promise = Promise;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Creates a Promise type */ function Promise(item, options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Promise',
        type: 'Promise',
        item
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/promise/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/promise/promise.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/readonly.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Readonly = Readonly;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/index.js [app-ssr] (ecmascript)");
const readonly_from_mapped_result_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/readonly-from-mapped-result.js [app-ssr] (ecmascript)");
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
function RemoveReadonly(schema) {
    return (0, type_1.CreateType)((0, index_2.Discard)(schema, [
        index_1.ReadonlyKind
    ]));
}
function AddReadonly(schema) {
    return (0, type_1.CreateType)({
        ...schema,
        [index_1.ReadonlyKind]: 'Readonly'
    });
}
// prettier-ignore
function ReadonlyWithFlag(schema, F) {
    return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
}
/** `[Json]` Creates a Readonly property */ function Readonly(schema, enable) {
    const F = enable ?? true;
    return (0, kind_1.IsMappedResult)(schema) ? (0, readonly_from_mapped_result_1.ReadonlyFromMappedResult)(schema, F) : ReadonlyWithFlag(schema, F);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/readonly-from-mapped-result.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReadonlyFromMappedResult = ReadonlyFromMappedResult;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const readonly_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/readonly.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromProperties(K, F) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(K))Acc[K2] = (0, readonly_1.Readonly)(K[K2], F);
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, F) {
    return FromProperties(R.properties, F);
}
// prettier-ignore
function ReadonlyFromMappedResult(R, F) {
    const P = FromMappedResult(R, F);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/readonly-from-mapped-result.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/readonly.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/tuple/tuple.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tuple = Tuple;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a Tuple type */ function Tuple(items, options) {
    // prettier-ignore
    return (0, type_1.CreateType)(items.length > 0 ? {
        [index_1.Kind]: 'Tuple',
        type: 'array',
        items,
        additionalItems: false,
        minItems: items.length,
        maxItems: items.length
    } : {
        [index_1.Kind]: 'Tuple',
        type: 'array',
        minItems: items.length,
        maxItems: items.length
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/tuple/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/tuple/tuple.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/mapped.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MappedFunctionReturnType = MappedFunctionReturnType;
exports.Mapped = Mapped;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/index.js [app-ssr] (ecmascript)");
// evaluation types
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/array/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/async-iterator/index.js [app-ssr] (ecmascript)");
const index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor/index.js [app-ssr] (ecmascript)");
const index_6 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/function/index.js [app-ssr] (ecmascript)");
const index_7 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/index.js [app-ssr] (ecmascript)");
const index_8 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/index.js [app-ssr] (ecmascript)");
const index_9 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/iterator/index.js [app-ssr] (ecmascript)");
const index_10 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)");
const index_11 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/index.js [app-ssr] (ecmascript)");
const index_12 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/index.js [app-ssr] (ecmascript)");
const index_13 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/promise/index.js [app-ssr] (ecmascript)");
const index_14 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/index.js [app-ssr] (ecmascript)");
const index_15 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/tuple/index.js [app-ssr] (ecmascript)");
const index_16 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
// operator
const index_17 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/sets/index.js [app-ssr] (ecmascript)");
// mapping types
const mapped_result_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/mapped-result.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromMappedResult(K, P) {
    return K in P ? FromSchemaType(K, P[K]) : (0, mapped_result_1.MappedResult)(P);
}
// prettier-ignore
function MappedKeyToKnownMappedResultProperties(K) {
    return {
        [K]: (0, index_10.Literal)(K)
    };
}
// prettier-ignore
function MappedKeyToUnknownMappedResultProperties(P) {
    const Acc = {};
    for (const L of P)Acc[L] = (0, index_10.Literal)(L);
    return Acc;
}
// prettier-ignore
function MappedKeyToMappedResultProperties(K, P) {
    return (0, index_17.SetIncludes)(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
}
// prettier-ignore
function FromMappedKey(K, P) {
    const R = MappedKeyToMappedResultProperties(K, P);
    return FromMappedResult(K, R);
}
// prettier-ignore
function FromRest(K, T) {
    return T.map((L)=>FromSchemaType(K, L));
}
// prettier-ignore
function FromProperties(K, T) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(T))Acc[K2] = FromSchemaType(K, T[K2]);
    return Acc;
}
// prettier-ignore
function FromSchemaType(K, T) {
    // required to retain user defined options for mapped type
    const options = {
        ...T
    };
    return(// unevaluated modifier types
    (0, kind_1.IsOptional)(T) ? (0, index_12.Optional)(FromSchemaType(K, (0, index_2.Discard)(T, [
        index_1.OptionalKind
    ]))) : (0, kind_1.IsReadonly)(T) ? (0, index_14.Readonly)(FromSchemaType(K, (0, index_2.Discard)(T, [
        index_1.ReadonlyKind
    ]))) : // unevaluated mapped types
    (0, kind_1.IsMappedResult)(T) ? FromMappedResult(K, T.properties) : (0, kind_1.IsMappedKey)(T) ? FromMappedKey(K, T.keys) : // unevaluated types
    (0, kind_1.IsConstructor)(T) ? (0, index_5.Constructor)(FromRest(K, T.parameters), FromSchemaType(K, T.returns), options) : (0, kind_1.IsFunction)(T) ? (0, index_6.Function)(FromRest(K, T.parameters), FromSchemaType(K, T.returns), options) : (0, kind_1.IsAsyncIterator)(T) ? (0, index_4.AsyncIterator)(FromSchemaType(K, T.items), options) : (0, kind_1.IsIterator)(T) ? (0, index_9.Iterator)(FromSchemaType(K, T.items), options) : (0, kind_1.IsIntersect)(T) ? (0, index_8.Intersect)(FromRest(K, T.allOf), options) : (0, kind_1.IsUnion)(T) ? (0, index_16.Union)(FromRest(K, T.anyOf), options) : (0, kind_1.IsTuple)(T) ? (0, index_15.Tuple)(FromRest(K, T.items ?? []), options) : (0, kind_1.IsObject)(T) ? (0, index_11.Object)(FromProperties(K, T.properties), options) : (0, kind_1.IsArray)(T) ? (0, index_3.Array)(FromSchemaType(K, T.items), options) : (0, kind_1.IsPromise)(T) ? (0, index_13.Promise)(FromSchemaType(K, T.item), options) : T);
}
// prettier-ignore
function MappedFunctionReturnType(K, T) {
    const Acc = {};
    for (const L of K)Acc[L] = FromSchemaType(L, T);
    return Acc;
}
/** `[Json]` Creates a Mapped object type */ function Mapped(key, map, options) {
    const K = (0, kind_1.IsSchema)(key) ? (0, index_7.IndexPropertyKeys)(key) : key;
    const RT = map({
        [index_1.Kind]: 'MappedKey',
        keys: K
    });
    const R = MappedFunctionReturnType(K, RT);
    return (0, index_11.Object)(R, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/mapped-key.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/mapped-result.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/mapped.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/optional.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Optional = Optional;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/index.js [app-ssr] (ecmascript)");
const optional_from_mapped_result_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/optional-from-mapped-result.js [app-ssr] (ecmascript)");
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
function RemoveOptional(schema) {
    return (0, type_1.CreateType)((0, index_2.Discard)(schema, [
        index_1.OptionalKind
    ]));
}
function AddOptional(schema) {
    return (0, type_1.CreateType)({
        ...schema,
        [index_1.OptionalKind]: 'Optional'
    });
}
// prettier-ignore
function OptionalWithFlag(schema, F) {
    return F === false ? RemoveOptional(schema) : AddOptional(schema);
}
/** `[Json]` Creates a Optional property */ function Optional(schema, enable) {
    const F = enable ?? true;
    return (0, kind_1.IsMappedResult)(schema) ? (0, optional_from_mapped_result_1.OptionalFromMappedResult)(schema, F) : OptionalWithFlag(schema, F);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/optional-from-mapped-result.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OptionalFromMappedResult = OptionalFromMappedResult;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const optional_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/optional.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromProperties(P, F) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))Acc[K2] = (0, optional_1.Optional)(P[K2], F);
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, F) {
    return FromProperties(R.properties, F);
}
// prettier-ignore
function OptionalFromMappedResult(R, F) {
    const P = FromMappedResult(R, F);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/optional-from-mapped-result.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/optional.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/intersect-create.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntersectCreate = IntersectCreate;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// IntersectCreate
// ------------------------------------------------------------------
// prettier-ignore
function IntersectCreate(T, options = {}) {
    const allObjects = T.every((schema)=>(0, kind_1.IsObject)(schema));
    const clonedUnevaluatedProperties = (0, kind_1.IsSchema)(options.unevaluatedProperties) ? {
        unevaluatedProperties: options.unevaluatedProperties
    } : {};
    return (0, type_1.CreateType)(options.unevaluatedProperties === false || (0, kind_1.IsSchema)(options.unevaluatedProperties) || allObjects ? {
        ...clonedUnevaluatedProperties,
        [index_1.Kind]: 'Intersect',
        type: 'object',
        allOf: T
    } : {
        ...clonedUnevaluatedProperties,
        [index_1.Kind]: 'Intersect',
        allOf: T
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/intersect-evaluated.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntersectEvaluated = IntersectEvaluated;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/index.js [app-ssr] (ecmascript)");
const intersect_create_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/intersect-create.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function IsIntersectOptional(T) {
    return T.every((L)=>(0, kind_1.IsOptional)(L));
}
// prettier-ignore
function RemoveOptionalFromType(T) {
    return (0, index_2.Discard)(T, [
        index_1.OptionalKind
    ]);
}
// prettier-ignore
function RemoveOptionalFromRest(T) {
    return T.map((L)=>(0, kind_1.IsOptional)(L) ? RemoveOptionalFromType(L) : L);
}
// prettier-ignore
function ResolveIntersect(T, options) {
    return IsIntersectOptional(T) ? (0, index_4.Optional)((0, intersect_create_1.IntersectCreate)(RemoveOptionalFromRest(T), options)) : (0, intersect_create_1.IntersectCreate)(RemoveOptionalFromRest(T), options);
}
/** `[Json]` Creates an evaluated Intersect type */ function IntersectEvaluated(T, options = {}) {
    if (T.length === 0) return (0, index_3.Never)(options);
    if (T.length === 1) return (0, type_1.CreateType)(T[0], options);
    if (T.some((schema)=>(0, kind_1.IsTransform)(schema))) throw new Error('Cannot intersect transform types');
    return ResolveIntersect(T, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/intersect-type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/intersect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Intersect = Intersect;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
const intersect_create_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/intersect-create.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
/** `[Json]` Creates an evaluated Intersect type */ function Intersect(T, options) {
    if (T.length === 0) return (0, index_1.Never)(options);
    if (T.length === 1) return (0, type_1.CreateType)(T[0], options);
    if (T.some((schema)=>(0, kind_1.IsTransform)(schema))) throw new Error('Cannot intersect transform types');
    return (0, intersect_create_1.IntersectCreate)(T, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/intersect-evaluated.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/intersect-type.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/intersect.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/awaited/awaited.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Awaited = Awaited;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromRest(T) {
    return T.map((L)=>AwaitedResolve(L));
}
// prettier-ignore
function FromIntersect(T) {
    return (0, index_1.Intersect)(FromRest(T));
}
// prettier-ignore
function FromUnion(T) {
    return (0, index_2.Union)(FromRest(T));
}
// prettier-ignore
function FromPromise(T) {
    return AwaitedResolve(T);
}
// ----------------------------------------------------------------
// AwaitedResolve
// ----------------------------------------------------------------
// prettier-ignore
function AwaitedResolve(T) {
    return (0, kind_1.IsIntersect)(T) ? FromIntersect(T.allOf) : (0, kind_1.IsUnion)(T) ? FromUnion(T.anyOf) : (0, kind_1.IsPromise)(T) ? FromPromise(T.item) : T;
}
/** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */ function Awaited(T, options) {
    return (0, type_1.CreateType)(AwaitedResolve(T), options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/awaited/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/awaited/awaited.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/keyof-property-keys.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeyOfPropertyKeys = KeyOfPropertyKeys;
exports.KeyOfPattern = KeyOfPattern;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/sets/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromRest(T) {
    const Acc = [];
    for (const L of T)Acc.push(KeyOfPropertyKeys(L));
    return Acc;
}
// prettier-ignore
function FromIntersect(T) {
    const C = FromRest(T);
    const R = (0, index_1.SetUnionMany)(C);
    return R;
}
// prettier-ignore
function FromUnion(T) {
    const C = FromRest(T);
    const R = (0, index_1.SetIntersectMany)(C);
    return R;
}
// prettier-ignore
function FromTuple(T) {
    return T.map((_, I)=>I.toString());
}
// prettier-ignore
function FromArray(_) {
    return [
        '[number]'
    ];
}
// prettier-ignore
function FromProperties(T) {
    return globalThis.Object.getOwnPropertyNames(T);
}
// ------------------------------------------------------------------
// FromPatternProperties
// ------------------------------------------------------------------
// prettier-ignore
function FromPatternProperties(patternProperties) {
    if (!includePatternProperties) return [];
    const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
    return patternPropertyKeys.map((key)=>{
        return key[0] === '^' && key[key.length - 1] === '$' ? key.slice(1, key.length - 1) : key;
    });
}
/** Returns a tuple of PropertyKeys derived from the given TSchema. */ // prettier-ignore
function KeyOfPropertyKeys(T) {
    return (0, kind_1.IsIntersect)(T) ? FromIntersect(T.allOf) : (0, kind_1.IsUnion)(T) ? FromUnion(T.anyOf) : (0, kind_1.IsTuple)(T) ? FromTuple(T.items ?? []) : (0, kind_1.IsArray)(T) ? FromArray(T.items) : (0, kind_1.IsObject)(T) ? FromProperties(T.properties) : (0, kind_1.IsRecord)(T) ? FromPatternProperties(T.patternProperties) : [];
}
// ----------------------------------------------------------------
// KeyOfPattern
// ----------------------------------------------------------------
let includePatternProperties = false;
/** Returns a regular expression pattern derived from the given TSchema */ function KeyOfPattern(schema) {
    includePatternProperties = true;
    const keys = KeyOfPropertyKeys(schema);
    includePatternProperties = false;
    const pattern = keys.map((key)=>`(${key})`);
    return `^(${pattern.join('|')})$`;
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/keyof.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeyOfPropertyKeysToRest = KeyOfPropertyKeysToRest;
exports.KeyOf = KeyOf;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/number/index.js [app-ssr] (ecmascript)");
const keyof_property_keys_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/keyof-property-keys.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const keyof_from_mapped_result_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/keyof-from-mapped-result.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function KeyOfPropertyKeysToRest(T) {
    return T.map((L)=>L === '[number]' ? (0, index_2.Number)() : (0, index_1.Literal)(L));
}
/** `[Json]` Creates a KeyOf type */ function KeyOf(T, options) {
    if ((0, kind_1.IsMappedResult)(T)) {
        return (0, keyof_from_mapped_result_1.KeyOfFromMappedResult)(T, options);
    } else {
        const K = (0, keyof_property_keys_1.KeyOfPropertyKeys)(T);
        const S = KeyOfPropertyKeysToRest(K);
        const U = (0, index_3.UnionEvaluated)(S);
        return (0, type_1.CreateType)(U, options);
    }
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/keyof-from-mapped-result.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeyOfFromMappedResult = KeyOfFromMappedResult;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const keyof_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/keyof.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromProperties(K, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(K))Acc[K2] = (0, keyof_1.KeyOf)(K[K2], (0, value_1.Clone)(options));
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, options) {
    return FromProperties(R.properties, options);
}
// prettier-ignore
function KeyOfFromMappedResult(R, options) {
    const P = FromMappedResult(R, options);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/keyof-property-entries.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeyOfPropertyEntries = KeyOfPropertyEntries;
const indexed_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/indexed.js [app-ssr] (ecmascript)");
const keyof_property_keys_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/keyof-property-keys.js [app-ssr] (ecmascript)");
/**
 * `[Utility]` Resolves an array of keys and schemas from the given schema. This method is faster
 * than obtaining the keys and resolving each individually via indexing. This method was written
 * accellerate Intersect and Union encoding.
 */ function KeyOfPropertyEntries(schema) {
    const keys = (0, keyof_property_keys_1.KeyOfPropertyKeys)(schema);
    const schemas = (0, indexed_1.IndexFromPropertyKeys)(schema, keys);
    return keys.map((_, index)=>[
            keys[index],
            schemas[index]
        ]);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/keyof-from-mapped-result.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/keyof-property-entries.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/keyof-property-keys.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/keyof.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/composite/composite.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Composite = Composite;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/index.js [app-ssr] (ecmascript)");
const index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/sets/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function CompositeKeys(T) {
    const Acc = [];
    for (const L of T)Acc.push(...(0, index_3.KeyOfPropertyKeys)(L));
    return (0, index_5.SetDistinct)(Acc);
}
// prettier-ignore
function FilterNever(T) {
    return T.filter((L)=>!(0, kind_1.IsNever)(L));
}
// prettier-ignore
function CompositeProperty(T, K) {
    const Acc = [];
    for (const L of T)Acc.push(...(0, index_2.IndexFromPropertyKeys)(L, [
        K
    ]));
    return FilterNever(Acc);
}
// prettier-ignore
function CompositeProperties(T, K) {
    const Acc = {};
    for (const L of K){
        Acc[L] = (0, index_1.IntersectEvaluated)(CompositeProperty(T, L));
    }
    return Acc;
}
// prettier-ignore
function Composite(T, options) {
    const K = CompositeKeys(T);
    const P = CompositeProperties(T, K);
    const R = (0, index_4.Object)(P, options);
    return R;
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/composite/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/composite/composite.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/date/date.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Date = Date;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Creates a Date type */ function Date(options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Date',
        type: 'Date'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/date/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/date/date.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/null/null.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Null = Null;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a Null type */ function Null(options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Null',
        type: 'null'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/null/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/null/null.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbol/symbol.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Symbol = Symbol;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Creates a Symbol type */ function Symbol(options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Symbol',
        type: 'symbol'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbol/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbol/symbol.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/undefined/undefined.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Undefined = Undefined;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Creates a Undefined type */ function Undefined(options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Undefined',
        type: 'undefined'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/undefined/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/undefined/undefined.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/uint8array/uint8array.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Uint8Array = Uint8Array;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Creates a Uint8Array type */ function Uint8Array(options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Uint8Array',
        type: 'Uint8Array'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/uint8array/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/uint8array/uint8array.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unknown/unknown.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Unknown = Unknown;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates an Unknown type */ function Unknown(options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Unknown'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unknown/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unknown/unknown.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/const/const.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Const = Const;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/any/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/bigint/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/date/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/function/index.js [app-ssr] (ecmascript)");
const index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)");
const index_6 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/null/index.js [app-ssr] (ecmascript)");
const index_7 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/index.js [app-ssr] (ecmascript)");
const index_8 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbol/index.js [app-ssr] (ecmascript)");
const index_9 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/tuple/index.js [app-ssr] (ecmascript)");
const index_10 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/index.js [app-ssr] (ecmascript)");
const index_11 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/undefined/index.js [app-ssr] (ecmascript)");
const index_12 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/uint8array/index.js [app-ssr] (ecmascript)");
const index_13 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unknown/index.js [app-ssr] (ecmascript)");
const index_14 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromArray(T) {
    return T.map((L)=>FromValue(L, false));
}
// prettier-ignore
function FromProperties(value) {
    const Acc = {};
    for (const K of globalThis.Object.getOwnPropertyNames(value))Acc[K] = (0, index_10.Readonly)(FromValue(value[K], false));
    return Acc;
}
function ConditionalReadonly(T, root) {
    return root === true ? T : (0, index_10.Readonly)(T);
}
// prettier-ignore
function FromValue(value, root) {
    return (0, value_1.IsAsyncIterator)(value) ? ConditionalReadonly((0, index_1.Any)(), root) : (0, value_1.IsIterator)(value) ? ConditionalReadonly((0, index_1.Any)(), root) : (0, value_1.IsArray)(value) ? (0, index_10.Readonly)((0, index_9.Tuple)(FromArray(value))) : (0, value_1.IsUint8Array)(value) ? (0, index_12.Uint8Array)() : (0, value_1.IsDate)(value) ? (0, index_3.Date)() : (0, value_1.IsObject)(value) ? ConditionalReadonly((0, index_7.Object)(FromProperties(value)), root) : (0, value_1.IsFunction)(value) ? ConditionalReadonly((0, index_4.Function)([], (0, index_13.Unknown)()), root) : (0, value_1.IsUndefined)(value) ? (0, index_11.Undefined)() : (0, value_1.IsNull)(value) ? (0, index_6.Null)() : (0, value_1.IsSymbol)(value) ? (0, index_8.Symbol)() : (0, value_1.IsBigInt)(value) ? (0, index_2.BigInt)() : (0, value_1.IsNumber)(value) ? (0, index_5.Literal)(value) : (0, value_1.IsBoolean)(value) ? (0, index_5.Literal)(value) : (0, value_1.IsString)(value) ? (0, index_5.Literal)(value) : (0, index_7.Object)({});
}
/** `[JavaScript]` Creates a readonly const type from the given value. */ function Const(T, options) {
    return (0, index_14.CreateType)(FromValue(T, true), options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/const/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/const/const.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor-parameters/constructor-parameters.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConstructorParameters = ConstructorParameters;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/tuple/index.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */ function ConstructorParameters(schema, options) {
    return (0, index_1.Tuple)(schema.parameters, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor-parameters/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor-parameters/constructor-parameters.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/deref/deref.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Deref = Deref;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/index.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
function FromRest(schema, references) {
    return schema.map((schema)=>Deref(schema, references));
}
// prettier-ignore
function FromProperties(properties, references) {
    const Acc = {};
    for (const K of globalThis.Object.getOwnPropertyNames(properties)){
        Acc[K] = Deref(properties[K], references);
    }
    return Acc;
}
// prettier-ignore
function FromConstructor(schema, references) {
    schema.parameters = FromRest(schema.parameters, references);
    schema.returns = Deref(schema.returns, references);
    return schema;
}
// prettier-ignore
function FromFunction(schema, references) {
    schema.parameters = FromRest(schema.parameters, references);
    schema.returns = Deref(schema.returns, references);
    return schema;
}
// prettier-ignore
function FromIntersect(schema, references) {
    schema.allOf = FromRest(schema.allOf, references);
    return schema;
}
// prettier-ignore
function FromUnion(schema, references) {
    schema.anyOf = FromRest(schema.anyOf, references);
    return schema;
}
// prettier-ignore
function FromTuple(schema, references) {
    if ((0, value_1.IsUndefined)(schema.items)) return schema;
    schema.items = FromRest(schema.items, references);
    return schema;
}
// prettier-ignore
function FromArray(schema, references) {
    schema.items = Deref(schema.items, references);
    return schema;
}
// prettier-ignore
function FromObject(schema, references) {
    schema.properties = FromProperties(schema.properties, references);
    return schema;
}
// prettier-ignore
function FromPromise(schema, references) {
    schema.item = Deref(schema.item, references);
    return schema;
}
// prettier-ignore
function FromAsyncIterator(schema, references) {
    schema.items = Deref(schema.items, references);
    return schema;
}
// prettier-ignore
function FromIterator(schema, references) {
    schema.items = Deref(schema.items, references);
    return schema;
}
// prettier-ignore
function FromRef(schema, references) {
    const target = references.find((remote)=>remote.$id === schema.$ref);
    if (target === undefined) throw Error(`Unable to dereference schema with $id ${schema.$ref}`);
    const discard = (0, index_1.Discard)(target, [
        '$id'
    ]);
    return Deref(discard, references);
}
// prettier-ignore
function DerefResolve(schema, references) {
    return (0, kind_1.IsConstructor)(schema) ? FromConstructor(schema, references) : (0, kind_1.IsFunction)(schema) ? FromFunction(schema, references) : (0, kind_1.IsIntersect)(schema) ? FromIntersect(schema, references) : (0, kind_1.IsUnion)(schema) ? FromUnion(schema, references) : (0, kind_1.IsTuple)(schema) ? FromTuple(schema, references) : (0, kind_1.IsArray)(schema) ? FromArray(schema, references) : (0, kind_1.IsObject)(schema) ? FromObject(schema, references) : (0, kind_1.IsPromise)(schema) ? FromPromise(schema, references) : (0, kind_1.IsAsyncIterator)(schema) ? FromAsyncIterator(schema, references) : (0, kind_1.IsIterator)(schema) ? FromIterator(schema, references) : (0, kind_1.IsRef)(schema) ? FromRef(schema, references) : schema;
}
// ------------------------------------------------------------------
// TDeref
// ------------------------------------------------------------------
/** `[Json]` Creates a dereferenced type */ function Deref(schema, references) {
    return DerefResolve((0, type_1.CloneType)(schema), (0, type_1.CloneRest)(references));
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/deref/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/deref/deref.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/enum/enum.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Enum = Enum;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a Enum type */ function Enum(item, options) {
    if ((0, value_1.IsUndefined)(item)) throw new Error('Enum undefined or empty');
    const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key)=>isNaN(key)).map((key)=>item[key]);
    const values2 = [
        ...new Set(values1)
    ];
    const anyOf = values2.map((value)=>(0, index_1.Literal)(value));
    return (0, index_3.Union)(anyOf, {
        ...options,
        [index_2.Hint]: 'Enum'
    });
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/enum/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/enum/enum.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends-check.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExtendsResult = exports.ExtendsResolverError = void 0;
exports.ExtendsCheck = ExtendsCheck;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/any/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/function/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/number/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/string/index.js [app-ssr] (ecmascript)");
const index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unknown/index.js [app-ssr] (ecmascript)");
const index_6 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/index.js [app-ssr] (ecmascript)");
const index_7 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/patterns/index.js [app-ssr] (ecmascript)");
const index_8 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_9 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)");
const index_10 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/index.js [app-ssr] (ecmascript)");
class ExtendsResolverError extends index_9.TypeBoxError {
}
exports.ExtendsResolverError = ExtendsResolverError;
var ExtendsResult;
(function(ExtendsResult) {
    ExtendsResult[ExtendsResult["Union"] = 0] = "Union";
    ExtendsResult[ExtendsResult["True"] = 1] = "True";
    ExtendsResult[ExtendsResult["False"] = 2] = "False";
})(ExtendsResult || (exports.ExtendsResult = ExtendsResult = {}));
// ------------------------------------------------------------------
// IntoBooleanResult
// ------------------------------------------------------------------
// prettier-ignore
function IntoBooleanResult(result) {
    return result === ExtendsResult.False ? result : ExtendsResult.True;
}
// ------------------------------------------------------------------
// Throw
// ------------------------------------------------------------------
// prettier-ignore
function Throw(message) {
    throw new ExtendsResolverError(message);
}
// ------------------------------------------------------------------
// StructuralRight
// ------------------------------------------------------------------
// prettier-ignore
function IsStructuralRight(right) {
    return index_10.TypeGuard.IsNever(right) || index_10.TypeGuard.IsIntersect(right) || index_10.TypeGuard.IsUnion(right) || index_10.TypeGuard.IsUnknown(right) || index_10.TypeGuard.IsAny(right);
}
// prettier-ignore
function StructuralRight(left, right) {
    return index_10.TypeGuard.IsNever(right) ? FromNeverRight(left, right) : index_10.TypeGuard.IsIntersect(right) ? FromIntersectRight(left, right) : index_10.TypeGuard.IsUnion(right) ? FromUnionRight(left, right) : index_10.TypeGuard.IsUnknown(right) ? FromUnknownRight(left, right) : index_10.TypeGuard.IsAny(right) ? FromAnyRight(left, right) : Throw('StructuralRight');
}
// ------------------------------------------------------------------
// Any
// ------------------------------------------------------------------
// prettier-ignore
function FromAnyRight(left, right) {
    return ExtendsResult.True;
}
// prettier-ignore
function FromAny(left, right) {
    return index_10.TypeGuard.IsIntersect(right) ? FromIntersectRight(left, right) : index_10.TypeGuard.IsUnion(right) && right.anyOf.some((schema)=>index_10.TypeGuard.IsAny(schema) || index_10.TypeGuard.IsUnknown(schema)) ? ExtendsResult.True : index_10.TypeGuard.IsUnion(right) ? ExtendsResult.Union : index_10.TypeGuard.IsUnknown(right) ? ExtendsResult.True : index_10.TypeGuard.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
}
// ------------------------------------------------------------------
// Array
// ------------------------------------------------------------------
// prettier-ignore
function FromArrayRight(left, right) {
    return index_10.TypeGuard.IsUnknown(left) ? ExtendsResult.False : index_10.TypeGuard.IsAny(left) ? ExtendsResult.Union : index_10.TypeGuard.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
}
// prettier-ignore
function FromArray(left, right) {
    return index_10.TypeGuard.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !index_10.TypeGuard.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
}
// ------------------------------------------------------------------
// AsyncIterator
// ------------------------------------------------------------------
// prettier-ignore
function FromAsyncIterator(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : !index_10.TypeGuard.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
}
// ------------------------------------------------------------------
// BigInt
// ------------------------------------------------------------------
// prettier-ignore
function FromBigInt(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Boolean
// ------------------------------------------------------------------
// prettier-ignore
function FromBooleanRight(left, right) {
    return index_10.TypeGuard.IsLiteralBoolean(left) ? ExtendsResult.True : index_10.TypeGuard.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
}
// prettier-ignore
function FromBoolean(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Constructor
// ------------------------------------------------------------------
// prettier-ignore
function FromConstructor(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : !index_10.TypeGuard.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index)=>IntoBooleanResult(Visit(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit(left.returns, right.returns));
}
// ------------------------------------------------------------------
// Date
// ------------------------------------------------------------------
// prettier-ignore
function FromDate(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Function
// ------------------------------------------------------------------
// prettier-ignore
function FromFunction(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : !index_10.TypeGuard.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index)=>IntoBooleanResult(Visit(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit(left.returns, right.returns));
}
// ------------------------------------------------------------------
// Integer
// ------------------------------------------------------------------
// prettier-ignore
function FromIntegerRight(left, right) {
    return index_10.TypeGuard.IsLiteral(left) && index_10.ValueGuard.IsNumber(left.const) ? ExtendsResult.True : index_10.TypeGuard.IsNumber(left) || index_10.TypeGuard.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
// prettier-ignore
function FromInteger(left, right) {
    return index_10.TypeGuard.IsInteger(right) || index_10.TypeGuard.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Intersect
// ------------------------------------------------------------------
// prettier-ignore
function FromIntersectRight(left, right) {
    return right.allOf.every((schema)=>Visit(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
// prettier-ignore
function FromIntersect(left, right) {
    return left.allOf.some((schema)=>Visit(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Iterator
// ------------------------------------------------------------------
// prettier-ignore
function FromIterator(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : !index_10.TypeGuard.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
}
// ------------------------------------------------------------------
// Literal
// ------------------------------------------------------------------
// prettier-ignore
function FromLiteral(left, right) {
    return index_10.TypeGuard.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsString(right) ? FromStringRight(left, right) : index_10.TypeGuard.IsNumber(right) ? FromNumberRight(left, right) : index_10.TypeGuard.IsInteger(right) ? FromIntegerRight(left, right) : index_10.TypeGuard.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Never
// ------------------------------------------------------------------
// prettier-ignore
function FromNeverRight(left, right) {
    return ExtendsResult.False;
}
// prettier-ignore
function FromNever(left, right) {
    return ExtendsResult.True;
}
// ------------------------------------------------------------------
// Not
// ------------------------------------------------------------------
// prettier-ignore
function UnwrapTNot(schema) {
    let [current, depth] = [
        schema,
        0
    ];
    while(true){
        if (!index_10.TypeGuard.IsNot(current)) break;
        current = current.not;
        depth += 1;
    }
    return depth % 2 === 0 ? current : (0, index_5.Unknown)();
}
// prettier-ignore
function FromNot(left, right) {
    // TypeScript has no concept of negated types, and attempts to correctly check the negated
    // type at runtime would put TypeBox at odds with TypeScripts ability to statically infer
    // the type. Instead we unwrap to either unknown or T and continue evaluating.
    // prettier-ignore
    return index_10.TypeGuard.IsNot(left) ? Visit(UnwrapTNot(left), right) : index_10.TypeGuard.IsNot(right) ? Visit(left, UnwrapTNot(right)) : Throw('Invalid fallthrough for Not');
}
// ------------------------------------------------------------------
// Null
// ------------------------------------------------------------------
// prettier-ignore
function FromNull(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Number
// ------------------------------------------------------------------
// prettier-ignore
function FromNumberRight(left, right) {
    return index_10.TypeGuard.IsLiteralNumber(left) ? ExtendsResult.True : index_10.TypeGuard.IsNumber(left) || index_10.TypeGuard.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
// prettier-ignore
function FromNumber(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsInteger(right) || index_10.TypeGuard.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Object
// ------------------------------------------------------------------
// prettier-ignore
function IsObjectPropertyCount(schema, count) {
    return Object.getOwnPropertyNames(schema.properties).length === count;
}
// prettier-ignore
function IsObjectStringLike(schema) {
    return IsObjectArrayLike(schema);
}
// prettier-ignore
function IsObjectSymbolLike(schema) {
    return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && 'description' in schema.properties && index_10.TypeGuard.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (index_10.TypeGuard.IsString(schema.properties.description.anyOf[0]) && index_10.TypeGuard.IsUndefined(schema.properties.description.anyOf[1]) || index_10.TypeGuard.IsString(schema.properties.description.anyOf[1]) && index_10.TypeGuard.IsUndefined(schema.properties.description.anyOf[0]));
}
// prettier-ignore
function IsObjectNumberLike(schema) {
    return IsObjectPropertyCount(schema, 0);
}
// prettier-ignore
function IsObjectBooleanLike(schema) {
    return IsObjectPropertyCount(schema, 0);
}
// prettier-ignore
function IsObjectBigIntLike(schema) {
    return IsObjectPropertyCount(schema, 0);
}
// prettier-ignore
function IsObjectDateLike(schema) {
    return IsObjectPropertyCount(schema, 0);
}
// prettier-ignore
function IsObjectUint8ArrayLike(schema) {
    return IsObjectArrayLike(schema);
}
// prettier-ignore
function IsObjectFunctionLike(schema) {
    const length = (0, index_3.Number)();
    return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && 'length' in schema.properties && IntoBooleanResult(Visit(schema.properties['length'], length)) === ExtendsResult.True;
}
// prettier-ignore
function IsObjectConstructorLike(schema) {
    return IsObjectPropertyCount(schema, 0);
}
// prettier-ignore
function IsObjectArrayLike(schema) {
    const length = (0, index_3.Number)();
    return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && 'length' in schema.properties && IntoBooleanResult(Visit(schema.properties['length'], length)) === ExtendsResult.True;
}
// prettier-ignore
function IsObjectPromiseLike(schema) {
    const then = (0, index_2.Function)([
        (0, index_1.Any)()
    ], (0, index_1.Any)());
    return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && 'then' in schema.properties && IntoBooleanResult(Visit(schema.properties['then'], then)) === ExtendsResult.True;
}
// ------------------------------------------------------------------
// Property
// ------------------------------------------------------------------
// prettier-ignore
function Property(left, right) {
    return Visit(left, right) === ExtendsResult.False ? ExtendsResult.False : index_10.TypeGuard.IsOptional(left) && !index_10.TypeGuard.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
}
// prettier-ignore
function FromObjectRight(left, right) {
    return index_10.TypeGuard.IsUnknown(left) ? ExtendsResult.False : index_10.TypeGuard.IsAny(left) ? ExtendsResult.Union : index_10.TypeGuard.IsNever(left) || index_10.TypeGuard.IsLiteralString(left) && IsObjectStringLike(right) || index_10.TypeGuard.IsLiteralNumber(left) && IsObjectNumberLike(right) || index_10.TypeGuard.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || index_10.TypeGuard.IsSymbol(left) && IsObjectSymbolLike(right) || index_10.TypeGuard.IsBigInt(left) && IsObjectBigIntLike(right) || index_10.TypeGuard.IsString(left) && IsObjectStringLike(right) || index_10.TypeGuard.IsSymbol(left) && IsObjectSymbolLike(right) || index_10.TypeGuard.IsNumber(left) && IsObjectNumberLike(right) || index_10.TypeGuard.IsInteger(left) && IsObjectNumberLike(right) || index_10.TypeGuard.IsBoolean(left) && IsObjectBooleanLike(right) || index_10.TypeGuard.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || index_10.TypeGuard.IsDate(left) && IsObjectDateLike(right) || index_10.TypeGuard.IsConstructor(left) && IsObjectConstructorLike(right) || index_10.TypeGuard.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : index_10.TypeGuard.IsRecord(left) && index_10.TypeGuard.IsString(RecordKey(left)) ? (()=>{
        // When expressing a Record with literal key values, the Record is converted into a Object with
        // the Hint assigned as `Record`. This is used to invert the extends logic.
        return right[index_8.Hint] === 'Record' ? ExtendsResult.True : ExtendsResult.False;
    })() : index_10.TypeGuard.IsRecord(left) && index_10.TypeGuard.IsNumber(RecordKey(left)) ? (()=>{
        return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
    })() : ExtendsResult.False;
}
// prettier-ignore
function FromObject(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : !index_10.TypeGuard.IsObject(right) ? ExtendsResult.False : (()=>{
        for (const key of Object.getOwnPropertyNames(right.properties)){
            if (!(key in left.properties) && !index_10.TypeGuard.IsOptional(right.properties[key])) {
                return ExtendsResult.False;
            }
            if (index_10.TypeGuard.IsOptional(right.properties[key])) {
                return ExtendsResult.True;
            }
            if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
                return ExtendsResult.False;
            }
        }
        return ExtendsResult.True;
    })();
}
// ------------------------------------------------------------------
// Promise
// ------------------------------------------------------------------
// prettier-ignore
function FromPromise(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !index_10.TypeGuard.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit(left.item, right.item));
}
// ------------------------------------------------------------------
// Record
// ------------------------------------------------------------------
// prettier-ignore
function RecordKey(schema) {
    return index_7.PatternNumberExact in schema.patternProperties ? (0, index_3.Number)() : index_7.PatternStringExact in schema.patternProperties ? (0, index_4.String)() : Throw('Unknown record key pattern');
}
// prettier-ignore
function RecordValue(schema) {
    return index_7.PatternNumberExact in schema.patternProperties ? schema.patternProperties[index_7.PatternNumberExact] : index_7.PatternStringExact in schema.patternProperties ? schema.patternProperties[index_7.PatternStringExact] : Throw('Unable to get record value schema');
}
// prettier-ignore
function FromRecordRight(left, right) {
    const [Key, Value] = [
        RecordKey(right),
        RecordValue(right)
    ];
    return index_10.TypeGuard.IsLiteralString(left) && index_10.TypeGuard.IsNumber(Key) && IntoBooleanResult(Visit(left, Value)) === ExtendsResult.True ? ExtendsResult.True : index_10.TypeGuard.IsUint8Array(left) && index_10.TypeGuard.IsNumber(Key) ? Visit(left, Value) : index_10.TypeGuard.IsString(left) && index_10.TypeGuard.IsNumber(Key) ? Visit(left, Value) : index_10.TypeGuard.IsArray(left) && index_10.TypeGuard.IsNumber(Key) ? Visit(left, Value) : index_10.TypeGuard.IsObject(left) ? (()=>{
        for (const key of Object.getOwnPropertyNames(left.properties)){
            if (Property(Value, left.properties[key]) === ExtendsResult.False) {
                return ExtendsResult.False;
            }
        }
        return ExtendsResult.True;
    })() : ExtendsResult.False;
}
// prettier-ignore
function FromRecord(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : !index_10.TypeGuard.IsRecord(right) ? ExtendsResult.False : Visit(RecordValue(left), RecordValue(right));
}
// ------------------------------------------------------------------
// RegExp
// ------------------------------------------------------------------
// prettier-ignore
function FromRegExp(left, right) {
    // Note: RegExp types evaluate as strings, not RegExp objects.
    // Here we remap either into string and continue evaluating.
    const L = index_10.TypeGuard.IsRegExp(left) ? (0, index_4.String)() : left;
    const R = index_10.TypeGuard.IsRegExp(right) ? (0, index_4.String)() : right;
    return Visit(L, R);
}
// ------------------------------------------------------------------
// String
// ------------------------------------------------------------------
// prettier-ignore
function FromStringRight(left, right) {
    return index_10.TypeGuard.IsLiteral(left) && index_10.ValueGuard.IsString(left.const) ? ExtendsResult.True : index_10.TypeGuard.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
}
// prettier-ignore
function FromString(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Symbol
// ------------------------------------------------------------------
// prettier-ignore
function FromSymbol(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// TemplateLiteral
// ------------------------------------------------------------------
// prettier-ignore
function FromTemplateLiteral(left, right) {
    // TemplateLiteral types are resolved to either unions for finite expressions or string
    // for infinite expressions. Here we call to TemplateLiteralResolver to resolve for
    // either type and continue evaluating.
    return index_10.TypeGuard.IsTemplateLiteral(left) ? Visit((0, index_6.TemplateLiteralToUnion)(left), right) : index_10.TypeGuard.IsTemplateLiteral(right) ? Visit(left, (0, index_6.TemplateLiteralToUnion)(right)) : Throw('Invalid fallthrough for TemplateLiteral');
}
// ------------------------------------------------------------------
// Tuple
// ------------------------------------------------------------------
// prettier-ignore
function IsArrayOfTuple(left, right) {
    return index_10.TypeGuard.IsArray(right) && left.items !== undefined && left.items.every((schema)=>Visit(schema, right.items) === ExtendsResult.True);
}
// prettier-ignore
function FromTupleRight(left, right) {
    return index_10.TypeGuard.IsNever(left) ? ExtendsResult.True : index_10.TypeGuard.IsUnknown(left) ? ExtendsResult.False : index_10.TypeGuard.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
}
// prettier-ignore
function FromTuple(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : index_10.TypeGuard.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !index_10.TypeGuard.IsTuple(right) ? ExtendsResult.False : index_10.ValueGuard.IsUndefined(left.items) && !index_10.ValueGuard.IsUndefined(right.items) || !index_10.ValueGuard.IsUndefined(left.items) && index_10.ValueGuard.IsUndefined(right.items) ? ExtendsResult.False : index_10.ValueGuard.IsUndefined(left.items) && !index_10.ValueGuard.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index)=>Visit(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Uint8Array
// ------------------------------------------------------------------
// prettier-ignore
function FromUint8Array(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Undefined
// ------------------------------------------------------------------
// prettier-ignore
function FromUndefined(left, right) {
    return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsVoid(right) ? FromVoidRight(left, right) : index_10.TypeGuard.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Union
// ------------------------------------------------------------------
// prettier-ignore
function FromUnionRight(left, right) {
    return right.anyOf.some((schema)=>Visit(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
// prettier-ignore
function FromUnion(left, right) {
    return left.anyOf.every((schema)=>Visit(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Unknown
// ------------------------------------------------------------------
// prettier-ignore
function FromUnknownRight(left, right) {
    return ExtendsResult.True;
}
// prettier-ignore
function FromUnknown(left, right) {
    return index_10.TypeGuard.IsNever(right) ? FromNeverRight(left, right) : index_10.TypeGuard.IsIntersect(right) ? FromIntersectRight(left, right) : index_10.TypeGuard.IsUnion(right) ? FromUnionRight(left, right) : index_10.TypeGuard.IsAny(right) ? FromAnyRight(left, right) : index_10.TypeGuard.IsString(right) ? FromStringRight(left, right) : index_10.TypeGuard.IsNumber(right) ? FromNumberRight(left, right) : index_10.TypeGuard.IsInteger(right) ? FromIntegerRight(left, right) : index_10.TypeGuard.IsBoolean(right) ? FromBooleanRight(left, right) : index_10.TypeGuard.IsArray(right) ? FromArrayRight(left, right) : index_10.TypeGuard.IsTuple(right) ? FromTupleRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Void
// ------------------------------------------------------------------
// prettier-ignore
function FromVoidRight(left, right) {
    return index_10.TypeGuard.IsUndefined(left) ? ExtendsResult.True : index_10.TypeGuard.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
}
// prettier-ignore
function FromVoid(left, right) {
    return index_10.TypeGuard.IsIntersect(right) ? FromIntersectRight(left, right) : index_10.TypeGuard.IsUnion(right) ? FromUnionRight(left, right) : index_10.TypeGuard.IsUnknown(right) ? FromUnknownRight(left, right) : index_10.TypeGuard.IsAny(right) ? FromAnyRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
}
// prettier-ignore
function Visit(left, right) {
    return(// resolvable
    index_10.TypeGuard.IsTemplateLiteral(left) || index_10.TypeGuard.IsTemplateLiteral(right) ? FromTemplateLiteral(left, right) : index_10.TypeGuard.IsRegExp(left) || index_10.TypeGuard.IsRegExp(right) ? FromRegExp(left, right) : index_10.TypeGuard.IsNot(left) || index_10.TypeGuard.IsNot(right) ? FromNot(left, right) : // standard
    index_10.TypeGuard.IsAny(left) ? FromAny(left, right) : index_10.TypeGuard.IsArray(left) ? FromArray(left, right) : index_10.TypeGuard.IsBigInt(left) ? FromBigInt(left, right) : index_10.TypeGuard.IsBoolean(left) ? FromBoolean(left, right) : index_10.TypeGuard.IsAsyncIterator(left) ? FromAsyncIterator(left, right) : index_10.TypeGuard.IsConstructor(left) ? FromConstructor(left, right) : index_10.TypeGuard.IsDate(left) ? FromDate(left, right) : index_10.TypeGuard.IsFunction(left) ? FromFunction(left, right) : index_10.TypeGuard.IsInteger(left) ? FromInteger(left, right) : index_10.TypeGuard.IsIntersect(left) ? FromIntersect(left, right) : index_10.TypeGuard.IsIterator(left) ? FromIterator(left, right) : index_10.TypeGuard.IsLiteral(left) ? FromLiteral(left, right) : index_10.TypeGuard.IsNever(left) ? FromNever(left, right) : index_10.TypeGuard.IsNull(left) ? FromNull(left, right) : index_10.TypeGuard.IsNumber(left) ? FromNumber(left, right) : index_10.TypeGuard.IsObject(left) ? FromObject(left, right) : index_10.TypeGuard.IsRecord(left) ? FromRecord(left, right) : index_10.TypeGuard.IsString(left) ? FromString(left, right) : index_10.TypeGuard.IsSymbol(left) ? FromSymbol(left, right) : index_10.TypeGuard.IsTuple(left) ? FromTuple(left, right) : index_10.TypeGuard.IsPromise(left) ? FromPromise(left, right) : index_10.TypeGuard.IsUint8Array(left) ? FromUint8Array(left, right) : index_10.TypeGuard.IsUndefined(left) ? FromUndefined(left, right) : index_10.TypeGuard.IsUnion(left) ? FromUnion(left, right) : index_10.TypeGuard.IsUnknown(left) ? FromUnknown(left, right) : index_10.TypeGuard.IsVoid(left) ? FromVoid(left, right) : Throw(`Unknown left type operand '${left[index_8.Kind]}'`));
}
function ExtendsCheck(left, right) {
    return Visit(left, right);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends-from-mapped-result.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExtendsFromMappedResult = ExtendsFromMappedResult;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const extends_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromProperties(P, Right, True, False, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))Acc[K2] = (0, extends_1.Extends)(P[K2], Right, True, False, (0, value_1.Clone)(options));
    return Acc;
}
// prettier-ignore
function FromMappedResult(Left, Right, True, False, options) {
    return FromProperties(Left.properties, Right, True, False, options);
}
// prettier-ignore
function ExtendsFromMappedResult(Left, Right, True, False, options) {
    const P = FromMappedResult(Left, Right, True, False, options);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Extends = Extends;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const extends_check_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends-check.js [app-ssr] (ecmascript)");
const extends_from_mapped_key_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends-from-mapped-key.js [app-ssr] (ecmascript)");
const extends_from_mapped_result_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends-from-mapped-result.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function ExtendsResolve(left, right, trueType, falseType) {
    const R = (0, extends_check_1.ExtendsCheck)(left, right);
    return R === extends_check_1.ExtendsResult.Union ? (0, index_1.Union)([
        trueType,
        falseType
    ]) : R === extends_check_1.ExtendsResult.True ? trueType : falseType;
}
/** `[Json]` Creates a Conditional type */ function Extends(L, R, T, F, options) {
    // prettier-ignore
    return (0, kind_1.IsMappedResult)(L) ? (0, extends_from_mapped_result_1.ExtendsFromMappedResult)(L, R, T, F, options) : (0, kind_1.IsMappedKey)(L) ? (0, type_1.CreateType)((0, extends_from_mapped_key_1.ExtendsFromMappedKey)(L, R, T, F, options)) : (0, type_1.CreateType)(ExtendsResolve(L, R, T, F), options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends-from-mapped-key.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExtendsFromMappedKey = ExtendsFromMappedKey;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)");
const extends_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromPropertyKey(K, U, L, R, options) {
    return {
        [K]: (0, extends_1.Extends)((0, index_2.Literal)(K), U, L, R, (0, value_1.Clone)(options))
    };
}
// prettier-ignore
function FromPropertyKeys(K, U, L, R, options) {
    return K.reduce((Acc, LK)=>{
        return {
            ...Acc,
            ...FromPropertyKey(LK, U, L, R, options)
        };
    }, {});
}
// prettier-ignore
function FromMappedKey(K, U, L, R, options) {
    return FromPropertyKeys(K.keys, U, L, R, options);
}
// prettier-ignore
function ExtendsFromMappedKey(T, U, L, R, options) {
    const P = FromMappedKey(T, U, L, R, options);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends-undefined.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExtendsUndefinedCheck = ExtendsUndefinedCheck;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** Fast undefined check used for properties of type undefined */ function Intersect(schema) {
    return schema.allOf.every((schema)=>ExtendsUndefinedCheck(schema));
}
function Union(schema) {
    return schema.anyOf.some((schema)=>ExtendsUndefinedCheck(schema));
}
function Not(schema) {
    return !ExtendsUndefinedCheck(schema.not);
}
/** Fast undefined check used for properties of type undefined */ // prettier-ignore
function ExtendsUndefinedCheck(schema) {
    return schema[index_1.Kind] === 'Intersect' ? Intersect(schema) : schema[index_1.Kind] === 'Union' ? Union(schema) : schema[index_1.Kind] === 'Not' ? Not(schema) : schema[index_1.Kind] === 'Undefined' ? true : false;
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends-check.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends-from-mapped-key.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends-from-mapped-result.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends-undefined.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/exclude-from-template-literal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExcludeFromTemplateLiteral = ExcludeFromTemplateLiteral;
const exclude_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/exclude.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/index.js [app-ssr] (ecmascript)");
function ExcludeFromTemplateLiteral(L, R) {
    return (0, exclude_1.Exclude)((0, index_1.TemplateLiteralToUnion)(L), R);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/exclude.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Exclude = Exclude;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/index.js [app-ssr] (ecmascript)");
const exclude_from_mapped_result_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/exclude-from-mapped-result.js [app-ssr] (ecmascript)");
const exclude_from_template_literal_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/exclude-from-template-literal.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
function ExcludeRest(L, R) {
    const excluded = L.filter((inner)=>(0, index_3.ExtendsCheck)(inner, R) === index_3.ExtendsResult.False);
    return excluded.length === 1 ? excluded[0] : (0, index_1.Union)(excluded);
}
/** `[Json]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */ function Exclude(L, R, options = {}) {
    // overloads
    if ((0, kind_1.IsTemplateLiteral)(L)) return (0, type_1.CreateType)((0, exclude_from_template_literal_1.ExcludeFromTemplateLiteral)(L, R), options);
    if ((0, kind_1.IsMappedResult)(L)) return (0, type_1.CreateType)((0, exclude_from_mapped_result_1.ExcludeFromMappedResult)(L, R), options);
    // prettier-ignore
    return (0, type_1.CreateType)((0, kind_1.IsUnion)(L) ? ExcludeRest(L.anyOf, R) : (0, index_3.ExtendsCheck)(L, R) !== index_3.ExtendsResult.False ? (0, index_2.Never)() : L, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/exclude-from-mapped-result.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExcludeFromMappedResult = ExcludeFromMappedResult;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const exclude_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/exclude.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromProperties(P, U) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))Acc[K2] = (0, exclude_1.Exclude)(P[K2], U);
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, T) {
    return FromProperties(R.properties, T);
}
// prettier-ignore
function ExcludeFromMappedResult(R, T) {
    const P = FromMappedResult(R, T);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/exclude-from-mapped-result.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/exclude-from-template-literal.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/exclude.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/extract-from-template-literal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExtractFromTemplateLiteral = ExtractFromTemplateLiteral;
const extract_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/extract.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/index.js [app-ssr] (ecmascript)");
function ExtractFromTemplateLiteral(L, R) {
    return (0, extract_1.Extract)((0, index_1.TemplateLiteralToUnion)(L), R);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/extract.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Extract = Extract;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/index.js [app-ssr] (ecmascript)");
const extract_from_mapped_result_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/extract-from-mapped-result.js [app-ssr] (ecmascript)");
const extract_from_template_literal_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/extract-from-template-literal.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
function ExtractRest(L, R) {
    const extracted = L.filter((inner)=>(0, index_3.ExtendsCheck)(inner, R) !== index_3.ExtendsResult.False);
    return extracted.length === 1 ? extracted[0] : (0, index_1.Union)(extracted);
}
/** `[Json]` Constructs a type by extracting from type all union members that are assignable to union */ function Extract(L, R, options) {
    // overloads
    if ((0, kind_1.IsTemplateLiteral)(L)) return (0, type_1.CreateType)((0, extract_from_template_literal_1.ExtractFromTemplateLiteral)(L, R), options);
    if ((0, kind_1.IsMappedResult)(L)) return (0, type_1.CreateType)((0, extract_from_mapped_result_1.ExtractFromMappedResult)(L, R), options);
    // prettier-ignore
    return (0, type_1.CreateType)((0, kind_1.IsUnion)(L) ? ExtractRest(L.anyOf, R) : (0, index_3.ExtendsCheck)(L, R) !== index_3.ExtendsResult.False ? L : (0, index_2.Never)(), options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/extract-from-mapped-result.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExtractFromMappedResult = ExtractFromMappedResult;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const extract_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/extract.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromProperties(P, T) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))Acc[K2] = (0, extract_1.Extract)(P[K2], T);
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, T) {
    return FromProperties(R.properties, T);
}
// prettier-ignore
function ExtractFromMappedResult(R, T) {
    const P = FromMappedResult(R, T);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/extract-from-mapped-result.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/extract-from-template-literal.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/extract.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/instance-type/instance-type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InstanceType = InstanceType;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Extracts the InstanceType from the given Constructor type */ function InstanceType(schema, options) {
    return (0, type_1.CreateType)(schema.returns, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/instance-type/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/instance-type/instance-type.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/integer/integer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Integer = Integer;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates an Integer type */ function Integer(options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Integer',
        type: 'integer'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/integer/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/integer/integer.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/intrinsic-from-mapped-key.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntrinsicFromMappedKey = IntrinsicFromMappedKey;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const intrinsic_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/intrinsic.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)");
// prettier-ignore
function MappedIntrinsicPropertyKey(K, M, options) {
    return {
        [K]: (0, intrinsic_1.Intrinsic)((0, index_2.Literal)(K), M, (0, value_1.Clone)(options))
    };
}
// prettier-ignore
function MappedIntrinsicPropertyKeys(K, M, options) {
    const result = K.reduce((Acc, L)=>{
        return {
            ...Acc,
            ...MappedIntrinsicPropertyKey(L, M, options)
        };
    }, {});
    return result;
}
// prettier-ignore
function MappedIntrinsicProperties(T, M, options) {
    return MappedIntrinsicPropertyKeys(T['keys'], M, options);
}
// prettier-ignore
function IntrinsicFromMappedKey(T, M, options) {
    const P = MappedIntrinsicProperties(T, M, options);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/intrinsic.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Intrinsic = Intrinsic;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/index.js [app-ssr] (ecmascript)");
const intrinsic_from_mapped_key_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/intrinsic-from-mapped-key.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// Apply
// ------------------------------------------------------------------
function ApplyUncapitalize(value) {
    const [first, rest] = [
        value.slice(0, 1),
        value.slice(1)
    ];
    return [
        first.toLowerCase(),
        rest
    ].join('');
}
function ApplyCapitalize(value) {
    const [first, rest] = [
        value.slice(0, 1),
        value.slice(1)
    ];
    return [
        first.toUpperCase(),
        rest
    ].join('');
}
function ApplyUppercase(value) {
    return value.toUpperCase();
}
function ApplyLowercase(value) {
    return value.toLowerCase();
}
function FromTemplateLiteral(schema, mode, options) {
    // note: template literals require special runtime handling as they are encoded in string patterns.
    // This diverges from the mapped type which would otherwise map on the template literal kind.
    const expression = (0, index_1.TemplateLiteralParseExact)(schema.pattern);
    const finite = (0, index_1.IsTemplateLiteralExpressionFinite)(expression);
    if (!finite) return {
        ...schema,
        pattern: FromLiteralValue(schema.pattern, mode)
    };
    const strings = [
        ...(0, index_1.TemplateLiteralExpressionGenerate)(expression)
    ];
    const literals = strings.map((value)=>(0, index_2.Literal)(value));
    const mapped = FromRest(literals, mode);
    const union = (0, index_3.Union)(mapped);
    return (0, index_1.TemplateLiteral)([
        union
    ], options);
}
// prettier-ignore
function FromLiteralValue(value, mode) {
    return typeof value === 'string' ? mode === 'Uncapitalize' ? ApplyUncapitalize(value) : mode === 'Capitalize' ? ApplyCapitalize(value) : mode === 'Uppercase' ? ApplyUppercase(value) : mode === 'Lowercase' ? ApplyLowercase(value) : value : value.toString();
}
// prettier-ignore
function FromRest(T, M) {
    return T.map((L)=>Intrinsic(L, M));
}
/** Applies an intrinsic string manipulation to the given type. */ function Intrinsic(schema, mode, options = {}) {
    // prettier-ignore
    return(// Intrinsic-Mapped-Inference
    (0, kind_1.IsMappedKey)(schema) ? (0, intrinsic_from_mapped_key_1.IntrinsicFromMappedKey)(schema, mode, options) : // Standard-Inference
    (0, kind_1.IsTemplateLiteral)(schema) ? FromTemplateLiteral(schema, mode, options) : (0, kind_1.IsUnion)(schema) ? (0, index_3.Union)(FromRest(schema.anyOf, mode), options) : (0, kind_1.IsLiteral)(schema) ? (0, index_2.Literal)(FromLiteralValue(schema.const, mode), options) : // Default Type
    (0, type_1.CreateType)(schema, options));
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/capitalize.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Capitalize = Capitalize;
const intrinsic_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/intrinsic.js [app-ssr] (ecmascript)");
/** `[Json]` Intrinsic function to Capitalize LiteralString types */ function Capitalize(T, options = {}) {
    return (0, intrinsic_1.Intrinsic)(T, 'Capitalize', options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/lowercase.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Lowercase = Lowercase;
const intrinsic_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/intrinsic.js [app-ssr] (ecmascript)");
/** `[Json]` Intrinsic function to Lowercase LiteralString types */ function Lowercase(T, options = {}) {
    return (0, intrinsic_1.Intrinsic)(T, 'Lowercase', options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/uncapitalize.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Uncapitalize = Uncapitalize;
const intrinsic_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/intrinsic.js [app-ssr] (ecmascript)");
/** `[Json]` Intrinsic function to Uncapitalize LiteralString types */ function Uncapitalize(T, options = {}) {
    return (0, intrinsic_1.Intrinsic)(T, 'Uncapitalize', options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/uppercase.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Uppercase = Uppercase;
const intrinsic_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/intrinsic.js [app-ssr] (ecmascript)");
/** `[Json]` Intrinsic function to Uppercase LiteralString types */ function Uppercase(T, options = {}) {
    return (0, intrinsic_1.Intrinsic)(T, 'Uppercase', options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/capitalize.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/intrinsic-from-mapped-key.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/intrinsic.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/lowercase.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/uncapitalize.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/uppercase.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/not/not.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Not = Not;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a Not type */ function Not(not, options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Not',
        not
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/not/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/not/not.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/omit-from-mapped-result.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OmitFromMappedResult = OmitFromMappedResult;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const omit_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/omit.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromProperties(P, K, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))Acc[K2] = (0, omit_1.Omit)(P[K2], K, (0, value_1.Clone)(options));
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, K, options) {
    return FromProperties(R.properties, K, options);
}
// prettier-ignore
function OmitFromMappedResult(R, K, options) {
    const P = FromMappedResult(R, K, options);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/omit.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Omit = Omit;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const discard_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/discard.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/index.js [app-ssr] (ecmascript)");
const omit_from_mapped_key_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/omit-from-mapped-key.js [app-ssr] (ecmascript)");
const omit_from_mapped_result_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/omit-from-mapped-result.js [app-ssr] (ecmascript)");
const symbols_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/symbols.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromIntersect(T, K) {
    return T.map((T)=>OmitResolve(T, K));
}
// prettier-ignore
function FromUnion(T, K) {
    return T.map((T)=>OmitResolve(T, K));
}
// ------------------------------------------------------------------
// FromProperty
// ------------------------------------------------------------------
// prettier-ignore
function FromProperty(T, K) {
    const { [K]: _, ...R } = T;
    return R;
}
// prettier-ignore
function FromProperties(T, K) {
    return K.reduce((T, K2)=>FromProperty(T, K2), T);
}
// prettier-ignore
function FromObject(T, K) {
    const options = (0, discard_1.Discard)(T, [
        symbols_1.TransformKind,
        '$id',
        'required',
        'properties'
    ]);
    const properties = FromProperties(T['properties'], K);
    return (0, index_3.Object)(properties, options);
}
// ------------------------------------------------------------------
// OmitResolve
// ------------------------------------------------------------------
// prettier-ignore
function OmitResolve(T, K) {
    return (0, kind_1.IsIntersect)(T) ? (0, index_1.Intersect)(FromIntersect(T.allOf, K)) : (0, kind_1.IsUnion)(T) ? (0, index_2.Union)(FromUnion(T.anyOf, K)) : (0, kind_1.IsObject)(T) ? FromObject(T, K) : (0, index_3.Object)({});
}
function Omit(T, K, options) {
    // mapped
    if ((0, kind_1.IsMappedKey)(K)) return (0, omit_from_mapped_key_1.OmitFromMappedKey)(T, K, options);
    if ((0, kind_1.IsMappedResult)(T)) return (0, omit_from_mapped_result_1.OmitFromMappedResult)(T, K, options);
    // non-mapped
    const I = (0, kind_1.IsSchema)(K) ? (0, index_4.IndexPropertyKeys)(K) : K;
    // special: mapping types require overridable options
    return (0, type_1.CreateType)({
        ...OmitResolve(T, I),
        ...options
    });
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/omit-from-mapped-key.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OmitFromMappedKey = OmitFromMappedKey;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const omit_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/omit.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromPropertyKey(T, K, options) {
    return {
        [K]: (0, omit_1.Omit)(T, [
            K
        ], (0, value_1.Clone)(options))
    };
}
// prettier-ignore
function FromPropertyKeys(T, K, options) {
    return K.reduce((Acc, LK)=>{
        return {
            ...Acc,
            ...FromPropertyKey(T, LK, options)
        };
    }, {});
}
// prettier-ignore
function FromMappedKey(T, K, options) {
    return FromPropertyKeys(T, K.keys, options);
}
// prettier-ignore
function OmitFromMappedKey(T, K, options) {
    const P = FromMappedKey(T, K, options);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/omit-from-mapped-key.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/omit-from-mapped-result.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/omit.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/parameters/parameters.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parameters = Parameters;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/tuple/index.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Extracts the Parameters from the given Function type */ function Parameters(schema, options) {
    return (0, index_1.Tuple)(schema.parameters, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/parameters/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/parameters/parameters.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/partial/partial.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Partial = Partial;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/index.js [app-ssr] (ecmascript)");
const index_6 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const partial_from_mapped_result_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/partial/partial-from-mapped-result.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromRest(T) {
    return T.map((L)=>PartialResolve(L));
}
// prettier-ignore
function FromProperties(T) {
    const Acc = {};
    for (const K of globalThis.Object.getOwnPropertyNames(T))Acc[K] = (0, index_1.Optional)(T[K]);
    return Acc;
}
// prettier-ignore
function FromObject(T) {
    const options = (0, index_5.Discard)(T, [
        index_6.TransformKind,
        '$id',
        'required',
        'properties'
    ]);
    const properties = FromProperties(T['properties']);
    return (0, index_2.Object)(properties, options);
}
// ------------------------------------------------------------------
// PartialResolve
// ------------------------------------------------------------------
// prettier-ignore
function PartialResolve(T) {
    return (0, kind_1.IsIntersect)(T) ? (0, index_3.Intersect)(FromRest(T.allOf)) : (0, kind_1.IsUnion)(T) ? (0, index_4.Union)(FromRest(T.anyOf)) : (0, kind_1.IsObject)(T) ? FromObject(T) : (0, index_2.Object)({});
}
/** `[Json]` Constructs a type where all properties are optional */ function Partial(T, options) {
    if ((0, kind_1.IsMappedResult)(T)) {
        return (0, partial_from_mapped_result_1.PartialFromMappedResult)(T, options);
    } else {
        // special: mapping types require overridable options
        return (0, type_1.CreateType)({
            ...PartialResolve(T),
            ...options
        });
    }
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/partial/partial-from-mapped-result.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PartialFromMappedResult = PartialFromMappedResult;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const partial_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/partial/partial.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromProperties(K, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(K))Acc[K2] = (0, partial_1.Partial)(K[K2], (0, value_1.Clone)(options));
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, options) {
    return FromProperties(R.properties, options);
}
// prettier-ignore
function PartialFromMappedResult(R, options) {
    const P = FromMappedResult(R, options);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/partial/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/partial/partial-from-mapped-result.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/partial/partial.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/pick-from-mapped-result.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PickFromMappedResult = PickFromMappedResult;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const pick_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/pick.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromProperties(P, K, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))Acc[K2] = (0, pick_1.Pick)(P[K2], K, (0, value_1.Clone)(options));
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, K, options) {
    return FromProperties(R.properties, K, options);
}
// prettier-ignore
function PickFromMappedResult(R, K, options) {
    const P = FromMappedResult(R, K, options);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/pick.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pick = Pick;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const discard_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/discard.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/index.js [app-ssr] (ecmascript)");
const pick_from_mapped_key_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/pick-from-mapped-key.js [app-ssr] (ecmascript)");
const pick_from_mapped_result_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/pick-from-mapped-result.js [app-ssr] (ecmascript)");
const symbols_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/symbols.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
function FromIntersect(T, K) {
    return T.map((T)=>PickResolve(T, K));
}
// prettier-ignore
function FromUnion(T, K) {
    return T.map((T)=>PickResolve(T, K));
}
// prettier-ignore
function FromProperties(T, K) {
    const Acc = {};
    for (const K2 of K)if (K2 in T) Acc[K2] = T[K2];
    return Acc;
}
// prettier-ignore
function FromObject(T, K) {
    const options = (0, discard_1.Discard)(T, [
        symbols_1.TransformKind,
        '$id',
        'required',
        'properties'
    ]);
    const properties = FromProperties(T['properties'], K);
    return (0, index_3.Object)(properties, options);
}
// ------------------------------------------------------------------
// PickResolve
// ------------------------------------------------------------------
// prettier-ignore
function PickResolve(T, K) {
    return (0, kind_1.IsIntersect)(T) ? (0, index_1.Intersect)(FromIntersect(T.allOf, K)) : (0, kind_1.IsUnion)(T) ? (0, index_2.Union)(FromUnion(T.anyOf, K)) : (0, kind_1.IsObject)(T) ? FromObject(T, K) : (0, index_3.Object)({});
}
function Pick(T, K, options) {
    // mapped
    if ((0, kind_1.IsMappedKey)(K)) return (0, pick_from_mapped_key_1.PickFromMappedKey)(T, K, options);
    if ((0, kind_1.IsMappedResult)(T)) return (0, pick_from_mapped_result_1.PickFromMappedResult)(T, K, options);
    // non-mapped
    const I = (0, kind_1.IsSchema)(K) ? (0, index_4.IndexPropertyKeys)(K) : K;
    // special: mapping types require overridable options
    return (0, type_1.CreateType)({
        ...PickResolve(T, I),
        ...options
    });
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/pick-from-mapped-key.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PickFromMappedKey = PickFromMappedKey;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const pick_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/pick.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/value.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromPropertyKey(T, K, options) {
    return {
        [K]: (0, pick_1.Pick)(T, [
            K
        ], (0, value_1.Clone)(options))
    };
}
// prettier-ignore
function FromPropertyKeys(T, K, options) {
    return K.reduce((Acc, LK)=>{
        return {
            ...Acc,
            ...FromPropertyKey(T, LK, options)
        };
    }, {});
}
// prettier-ignore
function FromMappedKey(T, K, options) {
    return FromPropertyKeys(T, K.keys, options);
}
// prettier-ignore
function PickFromMappedKey(T, K, options) {
    const P = FromMappedKey(T, K, options);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/pick-from-mapped-key.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/pick-from-mapped-result.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/pick.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly-optional/readonly-optional.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReadonlyOptional = ReadonlyOptional;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a Readonly and Optional property */ function ReadonlyOptional(schema) {
    return (0, index_1.Readonly)((0, index_2.Optional)(schema));
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly-optional/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly-optional/readonly-optional.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/record/record.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Record = Record;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/index.js [app-ssr] (ecmascript)");
const index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/patterns/index.js [app-ssr] (ecmascript)");
const index_6 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/index.js [app-ssr] (ecmascript)");
const index_7 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// RecordCreateFromPattern
// ------------------------------------------------------------------
// prettier-ignore
function RecordCreateFromPattern(pattern, T, options) {
    return (0, type_1.CreateType)({
        [index_7.Kind]: 'Record',
        type: 'object',
        patternProperties: {
            [pattern]: T
        }
    }, options);
}
// ------------------------------------------------------------------
// RecordCreateFromKeys
// ------------------------------------------------------------------
// prettier-ignore
function RecordCreateFromKeys(K, T, options) {
    const Acc = {};
    for (const K2 of K)Acc[K2] = T;
    return (0, index_1.Object)(Acc, {
        ...options,
        [index_7.Hint]: 'Record'
    });
}
// prettier-ignore
function FromTemplateLiteralKey(K, T, options) {
    return (0, index_4.IsTemplateLiteralFinite)(K) ? RecordCreateFromKeys((0, index_6.IndexPropertyKeys)(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
}
// prettier-ignore
function FromUnionKey(K, T, options) {
    return RecordCreateFromKeys((0, index_6.IndexPropertyKeys)((0, index_3.Union)(K)), T, options);
}
// prettier-ignore
function FromLiteralKey(K, T, options) {
    return RecordCreateFromKeys([
        K.toString()
    ], T, options);
}
// prettier-ignore
function FromRegExpKey(K, T, options) {
    return RecordCreateFromPattern(K.source, T, options);
}
// prettier-ignore
function FromStringKey(K, T, options) {
    const pattern = (0, value_1.IsUndefined)(K.pattern) ? index_5.PatternStringExact : K.pattern;
    return RecordCreateFromPattern(pattern, T, options);
}
// prettier-ignore
function FromAnyKey(K, T, options) {
    return RecordCreateFromPattern(index_5.PatternStringExact, T, options);
}
// prettier-ignore
function FromNeverKey(K, T, options) {
    return RecordCreateFromPattern(index_5.PatternNeverExact, T, options);
}
// prettier-ignore
function FromIntegerKey(_, T, options) {
    return RecordCreateFromPattern(index_5.PatternNumberExact, T, options);
}
// prettier-ignore
function FromNumberKey(_, T, options) {
    return RecordCreateFromPattern(index_5.PatternNumberExact, T, options);
}
// ------------------------------------------------------------------
// TRecordOrObject
// ------------------------------------------------------------------
/** `[Json]` Creates a Record type */ function Record(K, T, options = {}) {
    // prettier-ignore
    return (0, kind_1.IsUnion)(K) ? FromUnionKey(K.anyOf, T, options) : (0, kind_1.IsTemplateLiteral)(K) ? FromTemplateLiteralKey(K, T, options) : (0, kind_1.IsLiteral)(K) ? FromLiteralKey(K.const, T, options) : (0, kind_1.IsInteger)(K) ? FromIntegerKey(K, T, options) : (0, kind_1.IsNumber)(K) ? FromNumberKey(K, T, options) : (0, kind_1.IsRegExp)(K) ? FromRegExpKey(K, T, options) : (0, kind_1.IsString)(K) ? FromStringKey(K, T, options) : (0, kind_1.IsAny)(K) ? FromAnyKey(K, T, options) : (0, kind_1.IsNever)(K) ? FromNeverKey(K, T, options) : (0, index_2.Never)(options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/record/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/record/record.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/recursive/recursive.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Recursive = Recursive;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/type.js [app-ssr] (ecmascript)");
const type_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
// Auto Tracked For Recursive Types without ID's
let Ordinal = 0;
/** `[Json]` Creates a Recursive type */ function Recursive(callback, options = {}) {
    if ((0, value_1.IsUndefined)(options.$id)) options.$id = `T${Ordinal++}`;
    const thisType = (0, type_1.CloneType)(callback({
        [index_1.Kind]: 'This',
        $ref: `${options.$id}`
    }));
    thisType.$id = options.$id;
    // prettier-ignore
    return (0, type_2.CreateType)({
        [index_1.Hint]: 'Recursive',
        ...thisType
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/recursive/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/recursive/recursive.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/ref/ref.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ref = Ref;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a Ref type. */ function Ref(unresolved, options) {
    if ((0, value_1.IsString)(unresolved)) return (0, type_1.CreateType)({
        [index_1.Kind]: 'Ref',
        $ref: unresolved
    }, options);
    if ((0, value_1.IsUndefined)(unresolved.$id)) throw new Error('Reference target type must specify an $id');
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Ref',
        $ref: unresolved.$id
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/ref/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/ref/ref.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/regexp/regexp.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegExp = RegExp;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const value_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/value.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Creates a RegExp type */ function RegExp(unresolved, options) {
    const expr = (0, value_1.IsString)(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'RegExp',
        type: 'RegExp',
        source: expr.source,
        flags: expr.flags
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/regexp/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/regexp/regexp.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/required/required.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Required = Required;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/discard/index.js [app-ssr] (ecmascript)");
const required_from_mapped_result_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/required/required-from-mapped-result.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromRest(T) {
    return T.map((L)=>RequiredResolve(L));
}
// prettier-ignore
function FromProperties(T) {
    const Acc = {};
    for (const K of globalThis.Object.getOwnPropertyNames(T))Acc[K] = (0, index_5.Discard)(T[K], [
        index_4.OptionalKind
    ]);
    return Acc;
}
// prettier-ignore
function FromObject(T) {
    const options = (0, index_5.Discard)(T, [
        index_4.TransformKind,
        '$id',
        'required',
        'properties'
    ]);
    const properties = FromProperties(T['properties']);
    return (0, index_3.Object)(properties, options);
}
// ------------------------------------------------------------------
// RequiredResolve
// ------------------------------------------------------------------
// prettier-ignore
function RequiredResolve(T) {
    return (0, kind_1.IsIntersect)(T) ? (0, index_1.Intersect)(FromRest(T.allOf)) : (0, kind_1.IsUnion)(T) ? (0, index_2.Union)(FromRest(T.anyOf)) : (0, kind_1.IsObject)(T) ? FromObject(T) : (0, index_3.Object)({});
}
/** `[Json]` Constructs a type where all properties are required */ function Required(T, options) {
    if ((0, kind_1.IsMappedResult)(T)) {
        return (0, required_from_mapped_result_1.RequiredFromMappedResult)(T, options);
    } else {
        // special: mapping types require overridable options
        return (0, type_1.CreateType)({
            ...RequiredResolve(T),
            ...options
        });
    }
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/required/required-from-mapped-result.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RequiredFromMappedResult = RequiredFromMappedResult;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const required_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/required/required.js [app-ssr] (ecmascript)");
// prettier-ignore
function FromProperties(P, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))Acc[K2] = (0, required_1.Required)(P[K2], options);
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, options) {
    return FromProperties(R.properties, options);
}
// prettier-ignore
function RequiredFromMappedResult(R, options) {
    const P = FromMappedResult(R, options);
    return (0, index_1.MappedResult)(P);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/required/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/required/required-from-mapped-result.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/required/required.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/rest/rest.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Rest = Rest;
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// prettier-ignore
function RestResolve(T) {
    return (0, kind_1.IsIntersect)(T) ? T.allOf : (0, kind_1.IsUnion)(T) ? T.anyOf : (0, kind_1.IsTuple)(T) ? T.items ?? [] : [];
}
/** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */ function Rest(T) {
    return RestResolve(T);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/rest/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/rest/rest.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/return-type/return-type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReturnType = ReturnType;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Extracts the ReturnType from the given Function type */ function ReturnType(schema, options) {
    return (0, type_1.CreateType)(schema.returns, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/return-type/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/return-type/return-type.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/schema/anyschema.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/schema/schema.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/schema/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/schema/anyschema.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/schema/schema.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/static/static.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/static/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/static/static.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/strict/strict.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Strict = Strict;
/**
 * @deprecated `[Json]` Omits compositing symbols from this schema. It is recommended
 * to use the JSON parse/stringify to remove compositing symbols if needed. This
 * is how Strict works internally.
 *
 * ```typescript
 * JSON.parse(JSON.stringify(Type.String()))
 * ```
 */ function Strict(schema) {
    return JSON.parse(JSON.stringify(schema));
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/strict/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/strict/strict.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/transform/transform.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TransformEncodeBuilder = exports.TransformDecodeBuilder = void 0;
exports.Transform = Transform;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/kind.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TransformBuilders
// ------------------------------------------------------------------
class TransformDecodeBuilder {
    constructor(schema){
        this.schema = schema;
    }
    Decode(decode) {
        return new TransformEncodeBuilder(this.schema, decode);
    }
}
exports.TransformDecodeBuilder = TransformDecodeBuilder;
// prettier-ignore
class TransformEncodeBuilder {
    constructor(schema, decode){
        this.schema = schema;
        this.decode = decode;
    }
    EncodeTransform(encode, schema) {
        const Encode = (value)=>schema[index_1.TransformKind].Encode(encode(value));
        const Decode = (value)=>this.decode(schema[index_1.TransformKind].Decode(value));
        const Codec = {
            Encode: Encode,
            Decode: Decode
        };
        return {
            ...schema,
            [index_1.TransformKind]: Codec
        };
    }
    EncodeSchema(encode, schema) {
        const Codec = {
            Decode: this.decode,
            Encode: encode
        };
        return {
            ...schema,
            [index_1.TransformKind]: Codec
        };
    }
    Encode(encode) {
        return (0, kind_1.IsTransform)(this.schema) ? this.EncodeTransform(encode, this.schema) : this.EncodeSchema(encode, this.schema);
    }
}
exports.TransformEncodeBuilder = TransformEncodeBuilder;
/** `[Json]` Creates a Transform type */ function Transform(schema) {
    return new TransformDecodeBuilder(schema);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/transform/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/transform/transform.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unsafe/unsafe.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Unsafe = Unsafe;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[Json]` Creates a Unsafe type that will infers as the generic argument T */ function Unsafe(options = {}) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: options[index_1.Kind] ?? 'Unsafe'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unsafe/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unsafe/unsafe.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/void/void.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Void = Void;
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/type.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
/** `[JavaScript]` Creates a Void type */ function Void(options) {
    return (0, type_1.CreateType)({
        [index_1.Kind]: 'Void',
        type: 'void'
    }, options);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/void/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/void/void.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/type/json.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JsonTypeBuilder = void 0;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/any/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/array/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/boolean/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/composite/index.js [app-ssr] (ecmascript)");
const index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/const/index.js [app-ssr] (ecmascript)");
const index_6 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/deref/index.js [app-ssr] (ecmascript)");
const index_7 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/enum/index.js [app-ssr] (ecmascript)");
const index_8 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/index.js [app-ssr] (ecmascript)");
const index_9 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/index.js [app-ssr] (ecmascript)");
const index_10 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/index.js [app-ssr] (ecmascript)");
const index_11 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/index.js [app-ssr] (ecmascript)");
const index_12 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/integer/index.js [app-ssr] (ecmascript)");
const index_13 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/index.js [app-ssr] (ecmascript)");
const index_14 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/index.js [app-ssr] (ecmascript)");
const index_15 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/index.js [app-ssr] (ecmascript)");
const index_16 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)");
const index_17 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
const index_18 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
const index_19 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/not/index.js [app-ssr] (ecmascript)");
const index_20 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/null/index.js [app-ssr] (ecmascript)");
const index_21 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/number/index.js [app-ssr] (ecmascript)");
const index_22 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/index.js [app-ssr] (ecmascript)");
const index_23 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/index.js [app-ssr] (ecmascript)");
const index_24 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/index.js [app-ssr] (ecmascript)");
const index_25 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/partial/index.js [app-ssr] (ecmascript)");
const index_26 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/index.js [app-ssr] (ecmascript)");
const index_27 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/index.js [app-ssr] (ecmascript)");
const index_28 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly-optional/index.js [app-ssr] (ecmascript)");
const index_29 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/record/index.js [app-ssr] (ecmascript)");
const index_30 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/recursive/index.js [app-ssr] (ecmascript)");
const index_31 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/ref/index.js [app-ssr] (ecmascript)");
const index_32 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/required/index.js [app-ssr] (ecmascript)");
const index_33 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/rest/index.js [app-ssr] (ecmascript)");
const index_34 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/strict/index.js [app-ssr] (ecmascript)");
const index_35 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/string/index.js [app-ssr] (ecmascript)");
const index_36 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/index.js [app-ssr] (ecmascript)");
const index_37 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/transform/index.js [app-ssr] (ecmascript)");
const index_38 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/tuple/index.js [app-ssr] (ecmascript)");
const index_39 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
const index_40 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unknown/index.js [app-ssr] (ecmascript)");
const index_41 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unsafe/index.js [app-ssr] (ecmascript)");
/** Json Type Builder with Static Resolution for TypeScript */ class JsonTypeBuilder {
    // ------------------------------------------------------------------------
    // Strict
    // ------------------------------------------------------------------------
    /**
     * @deprecated `[Json]` Omits compositing symbols from this schema. It is recommended
     * to use the JSON parse/stringify to remove compositing symbols if needed. This
     * is how Strict works internally.
     *
     * ```typescript
     * JSON.parse(JSON.stringify(Type.String()))
     * ```
     */ Strict(schema) {
        return (0, index_34.Strict)(schema);
    }
    // ------------------------------------------------------------------------
    // Modifiers
    // ------------------------------------------------------------------------
    /** `[Json]` Creates a Readonly and Optional property */ ReadonlyOptional(schema) {
        return (0, index_28.ReadonlyOptional)(schema);
    }
    /** `[Json]` Creates a Readonly property */ Readonly(schema, enable) {
        return (0, index_27.Readonly)(schema, enable ?? true);
    }
    /** `[Json]` Creates a Optional property */ Optional(schema, enable) {
        return (0, index_24.Optional)(schema, enable ?? true);
    }
    // ------------------------------------------------------------------------
    // Types
    // ------------------------------------------------------------------------
    /** `[Json]` Creates an Any type */ Any(options) {
        return (0, index_1.Any)(options);
    }
    /** `[Json]` Creates an Array type */ Array(schema, options) {
        return (0, index_2.Array)(schema, options);
    }
    /** `[Json]` Creates a Boolean type */ Boolean(options) {
        return (0, index_3.Boolean)(options);
    }
    /** `[Json]` Intrinsic function to Capitalize LiteralString types */ Capitalize(schema, options) {
        return (0, index_14.Capitalize)(schema, options);
    }
    /** `[Json]` Creates a Composite object type */ Composite(schemas, options) {
        return (0, index_4.Composite)(schemas, options); // (error) TS 5.4.0-dev - review TComposite implementation
    }
    /** `[JavaScript]` Creates a readonly const type from the given value. */ Const(value, options) {
        return (0, index_5.Const)(value, options);
    }
    /** `[Json]` Creates a dereferenced type */ Deref(schema, references) {
        return (0, index_6.Deref)(schema, references);
    }
    /** `[Json]` Creates a Enum type */ Enum(item, options) {
        return (0, index_7.Enum)(item, options);
    }
    /** `[Json]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */ Exclude(unionType, excludedMembers, options) {
        return (0, index_8.Exclude)(unionType, excludedMembers, options);
    }
    /** `[Json]` Creates a Conditional type */ Extends(L, R, T, F, options) {
        return (0, index_9.Extends)(L, R, T, F, options);
    }
    /** `[Json]` Constructs a type by extracting from type all union members that are assignable to union */ Extract(type, union, options) {
        return (0, index_10.Extract)(type, union, options);
    }
    /** `[Json]` Returns an Indexed property type for the given keys */ Index(schema, unresolved, options) {
        return (0, index_11.Index)(schema, unresolved, options);
    }
    /** `[Json]` Creates an Integer type */ Integer(options) {
        return (0, index_12.Integer)(options);
    }
    /** `[Json]` Creates an Intersect type */ Intersect(T, options) {
        return (0, index_13.Intersect)(T, options);
    }
    /** `[Json]` Creates a KeyOf type */ KeyOf(schema, options) {
        return (0, index_15.KeyOf)(schema, options);
    }
    /** `[Json]` Creates a Literal type */ Literal(value, options) {
        return (0, index_16.Literal)(value, options);
    }
    /** `[Json]` Intrinsic function to Lowercase LiteralString types */ Lowercase(schema, options) {
        return (0, index_14.Lowercase)(schema, options);
    }
    /** `[Json]` Creates a Mapped object type */ Mapped(key, map, options) {
        return (0, index_17.Mapped)(key, map, options);
    }
    /** `[Json]` Creates a Never type */ Never(options) {
        return (0, index_18.Never)(options);
    }
    /** `[Json]` Creates a Not type */ Not(schema, options) {
        return (0, index_19.Not)(schema, options);
    }
    /** `[Json]` Creates a Null type */ Null(options) {
        return (0, index_20.Null)(options);
    }
    /** `[Json]` Creates a Number type */ Number(options) {
        return (0, index_21.Number)(options);
    }
    /** `[Json]` Creates an Object type */ Object(properties, options) {
        return (0, index_22.Object)(properties, options);
    }
    /** `[Json]` Constructs a type whose keys are omitted from the given type */ Omit(schema, unresolved, options) {
        return (0, index_23.Omit)(schema, unresolved, options);
    }
    /** `[Json]` Constructs a type where all properties are optional */ Partial(schema, options) {
        return (0, index_25.Partial)(schema, options);
    }
    /** `[Json]` Constructs a type whose keys are picked from the given type */ Pick(schema, unresolved, options) {
        return (0, index_26.Pick)(schema, unresolved, options);
    }
    /** `[Json]` Creates a Record type */ Record(key, schema, options) {
        return (0, index_29.Record)(key, schema, options);
    }
    /** `[Json]` Creates a Recursive type */ Recursive(callback, options) {
        return (0, index_30.Recursive)(callback, options);
    }
    /** `[Json]` Creates a Ref type. */ Ref(unresolved, options) {
        return (0, index_31.Ref)(unresolved, options);
    }
    /** `[Json]` Constructs a type where all properties are required */ Required(schema, options) {
        return (0, index_32.Required)(schema, options);
    }
    /** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */ Rest(schema) {
        return (0, index_33.Rest)(schema);
    }
    /** `[Json]` Creates a String type */ String(options) {
        return (0, index_35.String)(options);
    }
    /** `[Json]` Creates a TemplateLiteral type */ TemplateLiteral(unresolved, options) {
        return (0, index_36.TemplateLiteral)(unresolved, options);
    }
    /** `[Json]` Creates a Transform type */ Transform(schema) {
        return (0, index_37.Transform)(schema);
    }
    /** `[Json]` Creates a Tuple type */ Tuple(items, options) {
        return (0, index_38.Tuple)(items, options);
    }
    /** `[Json]` Intrinsic function to Uncapitalize LiteralString types */ Uncapitalize(schema, options) {
        return (0, index_14.Uncapitalize)(schema, options);
    }
    /** `[Json]` Creates a Union type */ Union(schemas, options) {
        return (0, index_39.Union)(schemas, options);
    }
    /** `[Json]` Creates an Unknown type */ Unknown(options) {
        return (0, index_40.Unknown)(options);
    }
    /** `[Json]` Creates a Unsafe type that will infers as the generic argument T */ Unsafe(options) {
        return (0, index_41.Unsafe)(options);
    }
    /** `[Json]` Intrinsic function to Uppercase LiteralString types */ Uppercase(schema, options) {
        return (0, index_14.Uppercase)(schema, options);
    }
}
exports.JsonTypeBuilder = JsonTypeBuilder;
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/type/type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.String = exports.ReturnType = exports.Rest = exports.Required = exports.RegExp = exports.Ref = exports.Recursive = exports.Record = exports.ReadonlyOptional = exports.Readonly = exports.Promise = exports.Pick = exports.Partial = exports.Parameters = exports.Optional = exports.Omit = exports.Object = exports.Number = exports.Null = exports.Not = exports.Never = exports.Mapped = exports.Literal = exports.KeyOf = exports.Iterator = exports.Uppercase = exports.Lowercase = exports.Uncapitalize = exports.Capitalize = exports.Intersect = exports.Integer = exports.InstanceType = exports.Index = exports.Function = exports.Extract = exports.Extends = exports.Exclude = exports.Enum = exports.Deref = exports.Date = exports.ConstructorParameters = exports.Constructor = exports.Const = exports.Composite = exports.Boolean = exports.BigInt = exports.Awaited = exports.AsyncIterator = exports.Array = exports.Any = void 0;
exports.Void = exports.Unsafe = exports.Unknown = exports.Union = exports.Undefined = exports.Uint8Array = exports.Tuple = exports.Transform = exports.TemplateLiteral = exports.Symbol = exports.Strict = void 0;
// ------------------------------------------------------------------
// Type: Module
// ------------------------------------------------------------------
var index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/any/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Any", {
    enumerable: true,
    get: function() {
        return index_1.Any;
    }
});
var index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/array/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Array", {
    enumerable: true,
    get: function() {
        return index_2.Array;
    }
});
var index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/async-iterator/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "AsyncIterator", {
    enumerable: true,
    get: function() {
        return index_3.AsyncIterator;
    }
});
var index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/awaited/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Awaited", {
    enumerable: true,
    get: function() {
        return index_4.Awaited;
    }
});
var index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/bigint/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "BigInt", {
    enumerable: true,
    get: function() {
        return index_5.BigInt;
    }
});
var index_6 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/boolean/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Boolean", {
    enumerable: true,
    get: function() {
        return index_6.Boolean;
    }
});
var index_7 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/composite/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Composite", {
    enumerable: true,
    get: function() {
        return index_7.Composite;
    }
});
var index_8 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/const/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Const", {
    enumerable: true,
    get: function() {
        return index_8.Const;
    }
});
var index_9 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Constructor", {
    enumerable: true,
    get: function() {
        return index_9.Constructor;
    }
});
var index_10 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor-parameters/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "ConstructorParameters", {
    enumerable: true,
    get: function() {
        return index_10.ConstructorParameters;
    }
});
var index_11 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/date/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Date", {
    enumerable: true,
    get: function() {
        return index_11.Date;
    }
});
var index_12 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/deref/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Deref", {
    enumerable: true,
    get: function() {
        return index_12.Deref;
    }
});
var index_13 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/enum/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Enum", {
    enumerable: true,
    get: function() {
        return index_13.Enum;
    }
});
var index_14 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Exclude", {
    enumerable: true,
    get: function() {
        return index_14.Exclude;
    }
});
var index_15 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Extends", {
    enumerable: true,
    get: function() {
        return index_15.Extends;
    }
});
var index_16 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Extract", {
    enumerable: true,
    get: function() {
        return index_16.Extract;
    }
});
var index_17 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/function/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Function", {
    enumerable: true,
    get: function() {
        return index_17.Function;
    }
});
var index_18 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Index", {
    enumerable: true,
    get: function() {
        return index_18.Index;
    }
});
var index_19 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/instance-type/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "InstanceType", {
    enumerable: true,
    get: function() {
        return index_19.InstanceType;
    }
});
var index_20 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/integer/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Integer", {
    enumerable: true,
    get: function() {
        return index_20.Integer;
    }
});
var index_21 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Intersect", {
    enumerable: true,
    get: function() {
        return index_21.Intersect;
    }
});
var index_22 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Capitalize", {
    enumerable: true,
    get: function() {
        return index_22.Capitalize;
    }
});
Object.defineProperty(exports, "Uncapitalize", {
    enumerable: true,
    get: function() {
        return index_22.Uncapitalize;
    }
});
Object.defineProperty(exports, "Lowercase", {
    enumerable: true,
    get: function() {
        return index_22.Lowercase;
    }
});
Object.defineProperty(exports, "Uppercase", {
    enumerable: true,
    get: function() {
        return index_22.Uppercase;
    }
});
var index_23 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/iterator/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Iterator", {
    enumerable: true,
    get: function() {
        return index_23.Iterator;
    }
});
var index_24 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "KeyOf", {
    enumerable: true,
    get: function() {
        return index_24.KeyOf;
    }
});
var index_25 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Literal", {
    enumerable: true,
    get: function() {
        return index_25.Literal;
    }
});
var index_26 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Mapped", {
    enumerable: true,
    get: function() {
        return index_26.Mapped;
    }
});
var index_27 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Never", {
    enumerable: true,
    get: function() {
        return index_27.Never;
    }
});
var index_28 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/not/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Not", {
    enumerable: true,
    get: function() {
        return index_28.Not;
    }
});
var index_29 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/null/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Null", {
    enumerable: true,
    get: function() {
        return index_29.Null;
    }
});
var index_30 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/number/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Number", {
    enumerable: true,
    get: function() {
        return index_30.Number;
    }
});
var index_31 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Object", {
    enumerable: true,
    get: function() {
        return index_31.Object;
    }
});
var index_32 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Omit", {
    enumerable: true,
    get: function() {
        return index_32.Omit;
    }
});
var index_33 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Optional", {
    enumerable: true,
    get: function() {
        return index_33.Optional;
    }
});
var index_34 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/parameters/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Parameters", {
    enumerable: true,
    get: function() {
        return index_34.Parameters;
    }
});
var index_35 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/partial/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Partial", {
    enumerable: true,
    get: function() {
        return index_35.Partial;
    }
});
var index_36 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Pick", {
    enumerable: true,
    get: function() {
        return index_36.Pick;
    }
});
var index_37 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/promise/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Promise", {
    enumerable: true,
    get: function() {
        return index_37.Promise;
    }
});
var index_38 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Readonly", {
    enumerable: true,
    get: function() {
        return index_38.Readonly;
    }
});
var index_39 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly-optional/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "ReadonlyOptional", {
    enumerable: true,
    get: function() {
        return index_39.ReadonlyOptional;
    }
});
var index_40 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/record/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Record", {
    enumerable: true,
    get: function() {
        return index_40.Record;
    }
});
var index_41 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/recursive/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Recursive", {
    enumerable: true,
    get: function() {
        return index_41.Recursive;
    }
});
var index_42 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/ref/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Ref", {
    enumerable: true,
    get: function() {
        return index_42.Ref;
    }
});
var index_43 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/regexp/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "RegExp", {
    enumerable: true,
    get: function() {
        return index_43.RegExp;
    }
});
var index_44 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/required/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Required", {
    enumerable: true,
    get: function() {
        return index_44.Required;
    }
});
var index_45 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/rest/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Rest", {
    enumerable: true,
    get: function() {
        return index_45.Rest;
    }
});
var index_46 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/return-type/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "ReturnType", {
    enumerable: true,
    get: function() {
        return index_46.ReturnType;
    }
});
var index_47 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/string/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "String", {
    enumerable: true,
    get: function() {
        return index_47.String;
    }
});
var index_48 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/strict/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Strict", {
    enumerable: true,
    get: function() {
        return index_48.Strict;
    }
});
var index_49 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbol/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Symbol", {
    enumerable: true,
    get: function() {
        return index_49.Symbol;
    }
});
var index_50 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "TemplateLiteral", {
    enumerable: true,
    get: function() {
        return index_50.TemplateLiteral;
    }
});
var index_51 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/transform/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Transform", {
    enumerable: true,
    get: function() {
        return index_51.Transform;
    }
});
var index_52 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/tuple/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Tuple", {
    enumerable: true,
    get: function() {
        return index_52.Tuple;
    }
});
var index_53 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/uint8array/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Uint8Array", {
    enumerable: true,
    get: function() {
        return index_53.Uint8Array;
    }
});
var index_54 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/undefined/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Undefined", {
    enumerable: true,
    get: function() {
        return index_54.Undefined;
    }
});
var index_55 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Union", {
    enumerable: true,
    get: function() {
        return index_55.Union;
    }
});
var index_56 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unknown/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Unknown", {
    enumerable: true,
    get: function() {
        return index_56.Unknown;
    }
});
var index_57 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unsafe/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Unsafe", {
    enumerable: true,
    get: function() {
        return index_57.Unsafe;
    }
});
var index_58 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/void/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Void", {
    enumerable: true,
    get: function() {
        return index_58.Void;
    }
});
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/type/javascript.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JavaScriptTypeBuilder = void 0;
const json_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/type/json.js [app-ssr] (ecmascript)");
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/async-iterator/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/awaited/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/bigint/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor/index.js [app-ssr] (ecmascript)");
const index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor-parameters/index.js [app-ssr] (ecmascript)");
const index_6 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/date/index.js [app-ssr] (ecmascript)");
const index_7 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/function/index.js [app-ssr] (ecmascript)");
const index_8 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/instance-type/index.js [app-ssr] (ecmascript)");
const index_9 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/iterator/index.js [app-ssr] (ecmascript)");
const index_10 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/parameters/index.js [app-ssr] (ecmascript)");
const index_11 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/promise/index.js [app-ssr] (ecmascript)");
const index_12 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/regexp/index.js [app-ssr] (ecmascript)");
const index_13 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/return-type/index.js [app-ssr] (ecmascript)");
const index_14 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbol/index.js [app-ssr] (ecmascript)");
const index_15 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/uint8array/index.js [app-ssr] (ecmascript)");
const index_16 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/undefined/index.js [app-ssr] (ecmascript)");
const index_17 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/void/index.js [app-ssr] (ecmascript)");
/** JavaScript Type Builder with Static Resolution for TypeScript */ class JavaScriptTypeBuilder extends json_1.JsonTypeBuilder {
    /** `[JavaScript]` Creates a AsyncIterator type */ AsyncIterator(items, options) {
        return (0, index_1.AsyncIterator)(items, options);
    }
    /** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */ Awaited(schema, options) {
        return (0, index_2.Awaited)(schema, options);
    }
    /** `[JavaScript]` Creates a BigInt type */ BigInt(options) {
        return (0, index_3.BigInt)(options);
    }
    /** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */ ConstructorParameters(schema, options) {
        return (0, index_5.ConstructorParameters)(schema, options);
    }
    /** `[JavaScript]` Creates a Constructor type */ Constructor(parameters, returns, options) {
        return (0, index_4.Constructor)(parameters, returns, options);
    }
    /** `[JavaScript]` Creates a Date type */ Date(options = {}) {
        return (0, index_6.Date)(options);
    }
    /** `[JavaScript]` Creates a Function type */ Function(parameters, returns, options) {
        return (0, index_7.Function)(parameters, returns, options);
    }
    /** `[JavaScript]` Extracts the InstanceType from the given Constructor type */ InstanceType(schema, options) {
        return (0, index_8.InstanceType)(schema, options);
    }
    /** `[JavaScript]` Creates an Iterator type */ Iterator(items, options) {
        return (0, index_9.Iterator)(items, options);
    }
    /** `[JavaScript]` Extracts the Parameters from the given Function type */ Parameters(schema, options) {
        return (0, index_10.Parameters)(schema, options);
    }
    /** `[JavaScript]` Creates a Promise type */ Promise(item, options) {
        return (0, index_11.Promise)(item, options);
    }
    /** `[JavaScript]` Creates a RegExp type */ RegExp(unresolved, options) {
        return (0, index_12.RegExp)(unresolved, options);
    }
    /** `[JavaScript]` Extracts the ReturnType from the given Function type */ ReturnType(schema, options) {
        return (0, index_13.ReturnType)(schema, options);
    }
    /** `[JavaScript]` Creates a Symbol type */ Symbol(options) {
        return (0, index_14.Symbol)(options);
    }
    /** `[JavaScript]` Creates a Undefined type */ Undefined(options) {
        return (0, index_16.Undefined)(options);
    }
    /** `[JavaScript]` Creates a Uint8Array type */ Uint8Array(options) {
        return (0, index_15.Uint8Array)(options);
    }
    /** `[JavaScript]` Creates a Void type */ Void(options) {
        return (0, index_17.Void)(options);
    }
}
exports.JavaScriptTypeBuilder = JavaScriptTypeBuilder;
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/type/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Type = exports.JavaScriptTypeBuilder = exports.JsonTypeBuilder = void 0;
// ------------------------------------------------------------------
// JsonTypeBuilder
// ------------------------------------------------------------------
var json_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/type/json.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "JsonTypeBuilder", {
    enumerable: true,
    get: function() {
        return json_1.JsonTypeBuilder;
    }
});
// ------------------------------------------------------------------
// JavaScriptTypeBuilder
// ------------------------------------------------------------------
const TypeBuilder = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/type/type.js [app-ssr] (ecmascript)");
const javascript_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/type/javascript.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "JavaScriptTypeBuilder", {
    enumerable: true,
    get: function() {
        return javascript_1.JavaScriptTypeBuilder;
    }
});
/** JavaScript Type Builder with Static Resolution for TypeScript */ const Type = TypeBuilder;
exports.Type = Type;
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
// ------------------------------------------------------------------
// Infrastructure
// ------------------------------------------------------------------
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/clone/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/create/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/helpers/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/patterns/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/registry/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/sets/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)"), exports);
// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/any/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/array/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/async-iterator/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/awaited/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/bigint/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/boolean/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/composite/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/const/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/constructor-parameters/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/date/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/deref/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/enum/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/exclude/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extract/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/function/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/indexed/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/instance-type/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/integer/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intersect/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/iterator/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/intrinsic/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/literal/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/mapped/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/not/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/null/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/number/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/object/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/omit/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/optional/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/parameters/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/partial/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/pick/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/promise/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/readonly-optional/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/record/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/recursive/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/ref/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/regexp/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/required/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/rest/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/return-type/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/schema/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/static/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/strict/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/string/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbol/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/template-literal/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/transform/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/tuple/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/uint8array/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/undefined/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/union/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unknown/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unsafe/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/void/index.js [app-ssr] (ecmascript)"), exports);
// ------------------------------------------------------------------
// Type.*
// ------------------------------------------------------------------
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/type/index.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/system/system.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TypeSystem = exports.TypeSystemDuplicateFormat = exports.TypeSystemDuplicateTypeKind = void 0;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/registry/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/unsafe/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// Errors
// ------------------------------------------------------------------
class TypeSystemDuplicateTypeKind extends index_4.TypeBoxError {
    constructor(kind){
        super(`Duplicate type kind '${kind}' detected`);
    }
}
exports.TypeSystemDuplicateTypeKind = TypeSystemDuplicateTypeKind;
class TypeSystemDuplicateFormat extends index_4.TypeBoxError {
    constructor(kind){
        super(`Duplicate string format '${kind}' detected`);
    }
}
exports.TypeSystemDuplicateFormat = TypeSystemDuplicateFormat;
/** Creates user defined types and formats and provides overrides for value checking behaviours */ var TypeSystem;
(function(TypeSystem) {
    /** Creates a new type */ function Type(kind, check) {
        if (index_1.TypeRegistry.Has(kind)) throw new TypeSystemDuplicateTypeKind(kind);
        index_1.TypeRegistry.Set(kind, check);
        return (options = {})=>(0, index_2.Unsafe)({
                ...options,
                [index_3.Kind]: kind
            });
    }
    TypeSystem.Type = Type;
    /** Creates a new string format */ function Format(format, check) {
        if (index_1.FormatRegistry.Has(format)) throw new TypeSystemDuplicateFormat(format);
        index_1.FormatRegistry.Set(format, check);
        return format;
    }
    TypeSystem.Format = Format;
})(TypeSystem || (exports.TypeSystem = TypeSystem = {}));
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/system/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/system/policy.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/system/system.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/errors/function.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DefaultErrorFunction = DefaultErrorFunction;
exports.SetErrorFunction = SetErrorFunction;
exports.GetErrorFunction = GetErrorFunction;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const errors_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/errors/errors.js [app-ssr] (ecmascript)");
/** Creates an error message using en-US as the default locale */ function DefaultErrorFunction(error) {
    switch(error.errorType){
        case errors_1.ValueErrorType.ArrayContains:
            return 'Expected array to contain at least one matching value';
        case errors_1.ValueErrorType.ArrayMaxContains:
            return `Expected array to contain no more than ${error.schema.maxContains} matching values`;
        case errors_1.ValueErrorType.ArrayMinContains:
            return `Expected array to contain at least ${error.schema.minContains} matching values`;
        case errors_1.ValueErrorType.ArrayMaxItems:
            return `Expected array length to be less or equal to ${error.schema.maxItems}`;
        case errors_1.ValueErrorType.ArrayMinItems:
            return `Expected array length to be greater or equal to ${error.schema.minItems}`;
        case errors_1.ValueErrorType.ArrayUniqueItems:
            return 'Expected array elements to be unique';
        case errors_1.ValueErrorType.Array:
            return 'Expected array';
        case errors_1.ValueErrorType.AsyncIterator:
            return 'Expected AsyncIterator';
        case errors_1.ValueErrorType.BigIntExclusiveMaximum:
            return `Expected bigint to be less than ${error.schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.BigIntExclusiveMinimum:
            return `Expected bigint to be greater than ${error.schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.BigIntMaximum:
            return `Expected bigint to be less or equal to ${error.schema.maximum}`;
        case errors_1.ValueErrorType.BigIntMinimum:
            return `Expected bigint to be greater or equal to ${error.schema.minimum}`;
        case errors_1.ValueErrorType.BigIntMultipleOf:
            return `Expected bigint to be a multiple of ${error.schema.multipleOf}`;
        case errors_1.ValueErrorType.BigInt:
            return 'Expected bigint';
        case errors_1.ValueErrorType.Boolean:
            return 'Expected boolean';
        case errors_1.ValueErrorType.DateExclusiveMinimumTimestamp:
            return `Expected Date timestamp to be greater than ${error.schema.exclusiveMinimumTimestamp}`;
        case errors_1.ValueErrorType.DateExclusiveMaximumTimestamp:
            return `Expected Date timestamp to be less than ${error.schema.exclusiveMaximumTimestamp}`;
        case errors_1.ValueErrorType.DateMinimumTimestamp:
            return `Expected Date timestamp to be greater or equal to ${error.schema.minimumTimestamp}`;
        case errors_1.ValueErrorType.DateMaximumTimestamp:
            return `Expected Date timestamp to be less or equal to ${error.schema.maximumTimestamp}`;
        case errors_1.ValueErrorType.DateMultipleOfTimestamp:
            return `Expected Date timestamp to be a multiple of ${error.schema.multipleOfTimestamp}`;
        case errors_1.ValueErrorType.Date:
            return 'Expected Date';
        case errors_1.ValueErrorType.Function:
            return 'Expected function';
        case errors_1.ValueErrorType.IntegerExclusiveMaximum:
            return `Expected integer to be less than ${error.schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.IntegerExclusiveMinimum:
            return `Expected integer to be greater than ${error.schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.IntegerMaximum:
            return `Expected integer to be less or equal to ${error.schema.maximum}`;
        case errors_1.ValueErrorType.IntegerMinimum:
            return `Expected integer to be greater or equal to ${error.schema.minimum}`;
        case errors_1.ValueErrorType.IntegerMultipleOf:
            return `Expected integer to be a multiple of ${error.schema.multipleOf}`;
        case errors_1.ValueErrorType.Integer:
            return 'Expected integer';
        case errors_1.ValueErrorType.IntersectUnevaluatedProperties:
            return 'Unexpected property';
        case errors_1.ValueErrorType.Intersect:
            return 'Expected all values to match';
        case errors_1.ValueErrorType.Iterator:
            return 'Expected Iterator';
        case errors_1.ValueErrorType.Literal:
            return `Expected ${typeof error.schema.const === 'string' ? `'${error.schema.const}'` : error.schema.const}`;
        case errors_1.ValueErrorType.Never:
            return 'Never';
        case errors_1.ValueErrorType.Not:
            return 'Value should not match';
        case errors_1.ValueErrorType.Null:
            return 'Expected null';
        case errors_1.ValueErrorType.NumberExclusiveMaximum:
            return `Expected number to be less than ${error.schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.NumberExclusiveMinimum:
            return `Expected number to be greater than ${error.schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.NumberMaximum:
            return `Expected number to be less or equal to ${error.schema.maximum}`;
        case errors_1.ValueErrorType.NumberMinimum:
            return `Expected number to be greater or equal to ${error.schema.minimum}`;
        case errors_1.ValueErrorType.NumberMultipleOf:
            return `Expected number to be a multiple of ${error.schema.multipleOf}`;
        case errors_1.ValueErrorType.Number:
            return 'Expected number';
        case errors_1.ValueErrorType.Object:
            return 'Expected object';
        case errors_1.ValueErrorType.ObjectAdditionalProperties:
            return 'Unexpected property';
        case errors_1.ValueErrorType.ObjectMaxProperties:
            return `Expected object to have no more than ${error.schema.maxProperties} properties`;
        case errors_1.ValueErrorType.ObjectMinProperties:
            return `Expected object to have at least ${error.schema.minProperties} properties`;
        case errors_1.ValueErrorType.ObjectRequiredProperty:
            return 'Expected required property';
        case errors_1.ValueErrorType.Promise:
            return 'Expected Promise';
        case errors_1.ValueErrorType.RegExp:
            return 'Expected string to match regular expression';
        case errors_1.ValueErrorType.StringFormatUnknown:
            return `Unknown format '${error.schema.format}'`;
        case errors_1.ValueErrorType.StringFormat:
            return `Expected string to match '${error.schema.format}' format`;
        case errors_1.ValueErrorType.StringMaxLength:
            return `Expected string length less or equal to ${error.schema.maxLength}`;
        case errors_1.ValueErrorType.StringMinLength:
            return `Expected string length greater or equal to ${error.schema.minLength}`;
        case errors_1.ValueErrorType.StringPattern:
            return `Expected string to match '${error.schema.pattern}'`;
        case errors_1.ValueErrorType.String:
            return 'Expected string';
        case errors_1.ValueErrorType.Symbol:
            return 'Expected symbol';
        case errors_1.ValueErrorType.TupleLength:
            return `Expected tuple to have ${error.schema.maxItems || 0} elements`;
        case errors_1.ValueErrorType.Tuple:
            return 'Expected tuple';
        case errors_1.ValueErrorType.Uint8ArrayMaxByteLength:
            return `Expected byte length less or equal to ${error.schema.maxByteLength}`;
        case errors_1.ValueErrorType.Uint8ArrayMinByteLength:
            return `Expected byte length greater or equal to ${error.schema.minByteLength}`;
        case errors_1.ValueErrorType.Uint8Array:
            return 'Expected Uint8Array';
        case errors_1.ValueErrorType.Undefined:
            return 'Expected undefined';
        case errors_1.ValueErrorType.Union:
            return 'Expected union value';
        case errors_1.ValueErrorType.Void:
            return 'Expected void';
        case errors_1.ValueErrorType.Kind:
            return `Expected kind '${error.schema[index_1.Kind]}'`;
        default:
            return 'Unknown error type';
    }
}
/** Manages error message providers */ let errorFunction = DefaultErrorFunction;
/** Sets the error function used to generate error messages. */ function SetErrorFunction(callback) {
    errorFunction = callback;
}
/** Gets the error function used to generate error messages */ function GetErrorFunction() {
    return errorFunction;
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/deref/deref.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TypeDereferenceError = void 0;
exports.Pushref = Pushref;
exports.Deref = Deref;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const guard_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/guard/guard.js [app-ssr] (ecmascript)");
class TypeDereferenceError extends index_1.TypeBoxError {
    constructor(schema){
        super(`Unable to dereference schema with $id '${schema.$ref}'`);
        this.schema = schema;
    }
}
exports.TypeDereferenceError = TypeDereferenceError;
function Resolve(schema, references) {
    const target = references.find((target)=>target.$id === schema.$ref);
    if (target === undefined) throw new TypeDereferenceError(schema);
    return Deref(target, references);
}
/** `[Internal]` Pushes a schema onto references if the schema has an $id and does not exist on references */ function Pushref(schema, references) {
    if (!(0, guard_1.IsString)(schema.$id) || references.some((target)=>target.$id === schema.$id)) return references;
    references.push(schema);
    return references;
}
/** `[Internal]` Dereferences a schema from the references array or throws if not found */ function Deref(schema, references) {
    // prettier-ignore
    return schema[index_2.Kind] === 'This' || schema[index_2.Kind] === 'Ref' ? Resolve(schema, references) : schema;
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/deref/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/deref/deref.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/hash/hash.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ValueHashError = void 0;
exports.Hash = Hash;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/guard/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// Errors
// ------------------------------------------------------------------
class ValueHashError extends index_2.TypeBoxError {
    constructor(value){
        super(`Unable to hash value`);
        this.value = value;
    }
}
exports.ValueHashError = ValueHashError;
// ------------------------------------------------------------------
// ByteMarker
// ------------------------------------------------------------------
var ByteMarker;
(function(ByteMarker) {
    ByteMarker[ByteMarker["Undefined"] = 0] = "Undefined";
    ByteMarker[ByteMarker["Null"] = 1] = "Null";
    ByteMarker[ByteMarker["Boolean"] = 2] = "Boolean";
    ByteMarker[ByteMarker["Number"] = 3] = "Number";
    ByteMarker[ByteMarker["String"] = 4] = "String";
    ByteMarker[ByteMarker["Object"] = 5] = "Object";
    ByteMarker[ByteMarker["Array"] = 6] = "Array";
    ByteMarker[ByteMarker["Date"] = 7] = "Date";
    ByteMarker[ByteMarker["Uint8Array"] = 8] = "Uint8Array";
    ByteMarker[ByteMarker["Symbol"] = 9] = "Symbol";
    ByteMarker[ByteMarker["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
// ------------------------------------------------------------------
// State
// ------------------------------------------------------------------
let Accumulator = BigInt('14695981039346656037');
const [Prime, Size] = [
    BigInt('1099511628211'),
    BigInt('18446744073709551616' /* 2 ^ 64 */ )
];
const Bytes = Array.from({
    length: 256
}).map((_, i)=>BigInt(i));
const F64 = new Float64Array(1);
const F64In = new DataView(F64.buffer);
const F64Out = new Uint8Array(F64.buffer);
// ------------------------------------------------------------------
// NumberToBytes
// ------------------------------------------------------------------
function* NumberToBytes(value) {
    const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
    for(let i = 0; i < byteCount; i++){
        yield value >> 8 * (byteCount - 1 - i) & 0xff;
    }
}
// ------------------------------------------------------------------
// Hashing Functions
// ------------------------------------------------------------------
function ArrayType(value) {
    FNV1A64(ByteMarker.Array);
    for (const item of value){
        Visit(item);
    }
}
function BooleanType(value) {
    FNV1A64(ByteMarker.Boolean);
    FNV1A64(value ? 1 : 0);
}
function BigIntType(value) {
    FNV1A64(ByteMarker.BigInt);
    F64In.setBigInt64(0, value);
    for (const byte of F64Out){
        FNV1A64(byte);
    }
}
function DateType(value) {
    FNV1A64(ByteMarker.Date);
    Visit(value.getTime());
}
function NullType(value) {
    FNV1A64(ByteMarker.Null);
}
function NumberType(value) {
    FNV1A64(ByteMarker.Number);
    F64In.setFloat64(0, value);
    for (const byte of F64Out){
        FNV1A64(byte);
    }
}
function ObjectType(value) {
    FNV1A64(ByteMarker.Object);
    for (const key of globalThis.Object.getOwnPropertyNames(value).sort()){
        Visit(key);
        Visit(value[key]);
    }
}
function StringType(value) {
    FNV1A64(ByteMarker.String);
    for(let i = 0; i < value.length; i++){
        for (const byte of NumberToBytes(value.charCodeAt(i))){
            FNV1A64(byte);
        }
    }
}
function SymbolType(value) {
    FNV1A64(ByteMarker.Symbol);
    Visit(value.description);
}
function Uint8ArrayType(value) {
    FNV1A64(ByteMarker.Uint8Array);
    for(let i = 0; i < value.length; i++){
        FNV1A64(value[i]);
    }
}
function UndefinedType(value) {
    return FNV1A64(ByteMarker.Undefined);
}
function Visit(value) {
    if ((0, index_1.IsArray)(value)) return ArrayType(value);
    if ((0, index_1.IsBoolean)(value)) return BooleanType(value);
    if ((0, index_1.IsBigInt)(value)) return BigIntType(value);
    if ((0, index_1.IsDate)(value)) return DateType(value);
    if ((0, index_1.IsNull)(value)) return NullType(value);
    if ((0, index_1.IsNumber)(value)) return NumberType(value);
    if ((0, index_1.IsObject)(value)) return ObjectType(value);
    if ((0, index_1.IsString)(value)) return StringType(value);
    if ((0, index_1.IsSymbol)(value)) return SymbolType(value);
    if ((0, index_1.IsUint8Array)(value)) return Uint8ArrayType(value);
    if ((0, index_1.IsUndefined)(value)) return UndefinedType(value);
    throw new ValueHashError(value);
}
function FNV1A64(byte) {
    Accumulator = Accumulator ^ Bytes[byte];
    Accumulator = Accumulator * Prime % Size;
}
// ------------------------------------------------------------------
// Hash
// ------------------------------------------------------------------
/** Creates a FNV1A-64 non cryptographic hash of the given value */ function Hash(value) {
    Accumulator = BigInt('14695981039346656037');
    Visit(value);
    return Accumulator;
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/hash/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/hash/hash.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/check/check.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ValueCheckUnknownTypeError = void 0;
exports.Check = Check;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/system/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/deref/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/hash/index.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/index.js [app-ssr] (ecmascript)");
const index_6 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/index.js [app-ssr] (ecmascript)");
const index_7 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/registry/index.js [app-ssr] (ecmascript)");
const index_8 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)");
const index_9 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
const index_10 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/guard/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const type_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/guard/type.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// Errors
// ------------------------------------------------------------------
class ValueCheckUnknownTypeError extends index_8.TypeBoxError {
    constructor(schema){
        super(`Unknown type`);
        this.schema = schema;
    }
}
exports.ValueCheckUnknownTypeError = ValueCheckUnknownTypeError;
// ------------------------------------------------------------------
// TypeGuards
// ------------------------------------------------------------------
function IsAnyOrUnknown(schema) {
    return schema[index_4.Kind] === 'Any' || schema[index_4.Kind] === 'Unknown';
}
// ------------------------------------------------------------------
// Guards
// ------------------------------------------------------------------
function IsDefined(value) {
    return value !== undefined;
}
// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------
function FromAny(schema, references, value) {
    return true;
}
function FromArray(schema, references, value) {
    if (!(0, index_10.IsArray)(value)) return false;
    if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        return false;
    }
    if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        return false;
    }
    if (!value.every((value)=>Visit(schema.items, references, value))) {
        return false;
    }
    // prettier-ignore
    if (schema.uniqueItems === true && !function() {
        const set = new Set();
        for (const element of value){
            const hashed = (0, index_3.Hash)(element);
            if (set.has(hashed)) {
                return false;
            } else {
                set.add(hashed);
            }
        }
        return true;
    }()) {
        return false;
    }
    // contains
    if (!(IsDefined(schema.contains) || (0, index_10.IsNumber)(schema.minContains) || (0, index_10.IsNumber)(schema.maxContains))) {
        return true; // exit
    }
    const containsSchema = IsDefined(schema.contains) ? schema.contains : (0, index_9.Never)();
    const containsCount = value.reduce((acc, value)=>Visit(containsSchema, references, value) ? acc + 1 : acc, 0);
    if (containsCount === 0) {
        return false;
    }
    if ((0, index_10.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        return false;
    }
    if ((0, index_10.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        return false;
    }
    return true;
}
function FromAsyncIterator(schema, references, value) {
    return (0, index_10.IsAsyncIterator)(value);
}
function FromBigInt(schema, references, value) {
    if (!(0, index_10.IsBigInt)(value)) return false;
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        return false;
    }
    return true;
}
function FromBoolean(schema, references, value) {
    return (0, index_10.IsBoolean)(value);
}
function FromConstructor(schema, references, value) {
    return Visit(schema.returns, references, value.prototype);
}
function FromDate(schema, references, value) {
    if (!(0, index_10.IsDate)(value)) return false;
    if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        return false;
    }
    if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        return false;
    }
    if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        return false;
    }
    if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        return false;
    }
    return true;
}
function FromFunction(schema, references, value) {
    return (0, index_10.IsFunction)(value);
}
function FromInteger(schema, references, value) {
    if (!(0, index_10.IsInteger)(value)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        return false;
    }
    return true;
}
function FromIntersect(schema, references, value) {
    const check1 = schema.allOf.every((schema)=>Visit(schema, references, value));
    if (schema.unevaluatedProperties === false) {
        const keyPattern = new RegExp((0, index_5.KeyOfPattern)(schema));
        const check2 = Object.getOwnPropertyNames(value).every((key)=>keyPattern.test(key));
        return check1 && check2;
    } else if ((0, type_1.IsSchema)(schema.unevaluatedProperties)) {
        const keyCheck = new RegExp((0, index_5.KeyOfPattern)(schema));
        const check2 = Object.getOwnPropertyNames(value).every((key)=>keyCheck.test(key) || Visit(schema.unevaluatedProperties, references, value[key]));
        return check1 && check2;
    } else {
        return check1;
    }
}
function FromIterator(schema, references, value) {
    return (0, index_10.IsIterator)(value);
}
function FromLiteral(schema, references, value) {
    return value === schema.const;
}
function FromNever(schema, references, value) {
    return false;
}
function FromNot(schema, references, value) {
    return !Visit(schema.not, references, value);
}
function FromNull(schema, references, value) {
    return (0, index_10.IsNull)(value);
}
function FromNumber(schema, references, value) {
    if (!index_1.TypeSystemPolicy.IsNumberLike(value)) return false;
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        return false;
    }
    return true;
}
function FromObject(schema, references, value) {
    if (!index_1.TypeSystemPolicy.IsObjectLike(value)) return false;
    if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        return false;
    }
    if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        return false;
    }
    const knownKeys = Object.getOwnPropertyNames(schema.properties);
    for (const knownKey of knownKeys){
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
            if (!Visit(property, references, value[knownKey])) {
                return false;
            }
            if (((0, index_6.ExtendsUndefinedCheck)(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
                return false;
            }
        } else {
            if (index_1.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit(property, references, value[knownKey])) {
                return false;
            }
        }
    }
    if (schema.additionalProperties === false) {
        const valueKeys = Object.getOwnPropertyNames(value);
        // optimization: value is valid if schemaKey length matches the valueKey length
        if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
            return true;
        } else {
            return valueKeys.every((valueKey)=>knownKeys.includes(valueKey));
        }
    } else if (typeof schema.additionalProperties === 'object') {
        const valueKeys = Object.getOwnPropertyNames(value);
        return valueKeys.every((key)=>knownKeys.includes(key) || Visit(schema.additionalProperties, references, value[key]));
    } else {
        return true;
    }
}
function FromPromise(schema, references, value) {
    return (0, index_10.IsPromise)(value);
}
function FromRecord(schema, references, value) {
    if (!index_1.TypeSystemPolicy.IsRecordLike(value)) {
        return false;
    }
    if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        return false;
    }
    if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        return false;
    }
    const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
    const regex = new RegExp(patternKey);
    // prettier-ignore
    const check1 = Object.entries(value).every(([key, value])=>{
        return regex.test(key) ? Visit(patternSchema, references, value) : true;
    });
    // prettier-ignore
    const check2 = typeof schema.additionalProperties === 'object' ? Object.entries(value).every(([key, value])=>{
        return !regex.test(key) ? Visit(schema.additionalProperties, references, value) : true;
    }) : true;
    const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key)=>{
        return regex.test(key);
    }) : true;
    return check1 && check2 && check3;
}
function FromRef(schema, references, value) {
    return Visit((0, index_2.Deref)(schema, references), references, value);
}
function FromRegExp(schema, references, value) {
    const regex = new RegExp(schema.source, schema.flags);
    if (IsDefined(schema.minLength)) {
        if (!(value.length >= schema.minLength)) return false;
    }
    if (IsDefined(schema.maxLength)) {
        if (!(value.length <= schema.maxLength)) return false;
    }
    return regex.test(value);
}
function FromString(schema, references, value) {
    if (!(0, index_10.IsString)(value)) {
        return false;
    }
    if (IsDefined(schema.minLength)) {
        if (!(value.length >= schema.minLength)) return false;
    }
    if (IsDefined(schema.maxLength)) {
        if (!(value.length <= schema.maxLength)) return false;
    }
    if (IsDefined(schema.pattern)) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(value)) return false;
    }
    if (IsDefined(schema.format)) {
        if (!index_7.FormatRegistry.Has(schema.format)) return false;
        const func = index_7.FormatRegistry.Get(schema.format);
        return func(value);
    }
    return true;
}
function FromSymbol(schema, references, value) {
    return (0, index_10.IsSymbol)(value);
}
function FromTemplateLiteral(schema, references, value) {
    return (0, index_10.IsString)(value) && new RegExp(schema.pattern).test(value);
}
function FromThis(schema, references, value) {
    return Visit((0, index_2.Deref)(schema, references), references, value);
}
function FromTuple(schema, references, value) {
    if (!(0, index_10.IsArray)(value)) {
        return false;
    }
    if (schema.items === undefined && !(value.length === 0)) {
        return false;
    }
    if (!(value.length === schema.maxItems)) {
        return false;
    }
    if (!schema.items) {
        return true;
    }
    for(let i = 0; i < schema.items.length; i++){
        if (!Visit(schema.items[i], references, value[i])) return false;
    }
    return true;
}
function FromUndefined(schema, references, value) {
    return (0, index_10.IsUndefined)(value);
}
function FromUnion(schema, references, value) {
    return schema.anyOf.some((inner)=>Visit(inner, references, value));
}
function FromUint8Array(schema, references, value) {
    if (!(0, index_10.IsUint8Array)(value)) {
        return false;
    }
    if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        return false;
    }
    if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        return false;
    }
    return true;
}
function FromUnknown(schema, references, value) {
    return true;
}
function FromVoid(schema, references, value) {
    return index_1.TypeSystemPolicy.IsVoidLike(value);
}
function FromKind(schema, references, value) {
    if (!index_7.TypeRegistry.Has(schema[index_4.Kind])) return false;
    const func = index_7.TypeRegistry.Get(schema[index_4.Kind]);
    return func(schema, value);
}
function Visit(schema, references, value) {
    const references_ = IsDefined(schema.$id) ? [
        ...references,
        schema
    ] : references;
    const schema_ = schema;
    switch(schema_[index_4.Kind]){
        case 'Any':
            return FromAny(schema_, references_, value);
        case 'Array':
            return FromArray(schema_, references_, value);
        case 'AsyncIterator':
            return FromAsyncIterator(schema_, references_, value);
        case 'BigInt':
            return FromBigInt(schema_, references_, value);
        case 'Boolean':
            return FromBoolean(schema_, references_, value);
        case 'Constructor':
            return FromConstructor(schema_, references_, value);
        case 'Date':
            return FromDate(schema_, references_, value);
        case 'Function':
            return FromFunction(schema_, references_, value);
        case 'Integer':
            return FromInteger(schema_, references_, value);
        case 'Intersect':
            return FromIntersect(schema_, references_, value);
        case 'Iterator':
            return FromIterator(schema_, references_, value);
        case 'Literal':
            return FromLiteral(schema_, references_, value);
        case 'Never':
            return FromNever(schema_, references_, value);
        case 'Not':
            return FromNot(schema_, references_, value);
        case 'Null':
            return FromNull(schema_, references_, value);
        case 'Number':
            return FromNumber(schema_, references_, value);
        case 'Object':
            return FromObject(schema_, references_, value);
        case 'Promise':
            return FromPromise(schema_, references_, value);
        case 'Record':
            return FromRecord(schema_, references_, value);
        case 'Ref':
            return FromRef(schema_, references_, value);
        case 'RegExp':
            return FromRegExp(schema_, references_, value);
        case 'String':
            return FromString(schema_, references_, value);
        case 'Symbol':
            return FromSymbol(schema_, references_, value);
        case 'TemplateLiteral':
            return FromTemplateLiteral(schema_, references_, value);
        case 'This':
            return FromThis(schema_, references_, value);
        case 'Tuple':
            return FromTuple(schema_, references_, value);
        case 'Undefined':
            return FromUndefined(schema_, references_, value);
        case 'Union':
            return FromUnion(schema_, references_, value);
        case 'Uint8Array':
            return FromUint8Array(schema_, references_, value);
        case 'Unknown':
            return FromUnknown(schema_, references_, value);
        case 'Void':
            return FromVoid(schema_, references_, value);
        default:
            if (!index_7.TypeRegistry.Has(schema_[index_4.Kind])) throw new ValueCheckUnknownTypeError(schema_);
            return FromKind(schema_, references_, value);
    }
}
/** Returns true if the value matches the given type. */ function Check(...args) {
    return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/check/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/check/check.js [app-ssr] (ecmascript)"), exports);
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/errors/errors.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ValueErrorIterator = exports.ValueErrorsUnknownTypeError = exports.ValueErrorType = void 0;
exports.Errors = Errors;
const index_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/system/index.js [app-ssr] (ecmascript)");
const index_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/keyof/index.js [app-ssr] (ecmascript)");
const index_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/registry/index.js [app-ssr] (ecmascript)");
const extends_undefined_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/extends/extends-undefined.js [app-ssr] (ecmascript)");
const function_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/errors/function.js [app-ssr] (ecmascript)");
const index_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/error/index.js [app-ssr] (ecmascript)");
const index_5 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/deref/index.js [app-ssr] (ecmascript)");
const index_6 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/hash/index.js [app-ssr] (ecmascript)");
const index_7 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/check/index.js [app-ssr] (ecmascript)");
const index_8 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/symbols/index.js [app-ssr] (ecmascript)");
const index_9 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/type/never/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
// prettier-ignore
const index_10 = __turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/value/guard/index.js [app-ssr] (ecmascript)");
// ------------------------------------------------------------------
// ValueErrorType
// ------------------------------------------------------------------
var ValueErrorType;
(function(ValueErrorType) {
    ValueErrorType[ValueErrorType["ArrayContains"] = 0] = "ArrayContains";
    ValueErrorType[ValueErrorType["ArrayMaxContains"] = 1] = "ArrayMaxContains";
    ValueErrorType[ValueErrorType["ArrayMaxItems"] = 2] = "ArrayMaxItems";
    ValueErrorType[ValueErrorType["ArrayMinContains"] = 3] = "ArrayMinContains";
    ValueErrorType[ValueErrorType["ArrayMinItems"] = 4] = "ArrayMinItems";
    ValueErrorType[ValueErrorType["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
    ValueErrorType[ValueErrorType["Array"] = 6] = "Array";
    ValueErrorType[ValueErrorType["AsyncIterator"] = 7] = "AsyncIterator";
    ValueErrorType[ValueErrorType["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
    ValueErrorType[ValueErrorType["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
    ValueErrorType[ValueErrorType["BigIntMaximum"] = 10] = "BigIntMaximum";
    ValueErrorType[ValueErrorType["BigIntMinimum"] = 11] = "BigIntMinimum";
    ValueErrorType[ValueErrorType["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
    ValueErrorType[ValueErrorType["BigInt"] = 13] = "BigInt";
    ValueErrorType[ValueErrorType["Boolean"] = 14] = "Boolean";
    ValueErrorType[ValueErrorType["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
    ValueErrorType[ValueErrorType["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
    ValueErrorType[ValueErrorType["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
    ValueErrorType[ValueErrorType["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
    ValueErrorType[ValueErrorType["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
    ValueErrorType[ValueErrorType["Date"] = 20] = "Date";
    ValueErrorType[ValueErrorType["Function"] = 21] = "Function";
    ValueErrorType[ValueErrorType["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
    ValueErrorType[ValueErrorType["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
    ValueErrorType[ValueErrorType["IntegerMaximum"] = 24] = "IntegerMaximum";
    ValueErrorType[ValueErrorType["IntegerMinimum"] = 25] = "IntegerMinimum";
    ValueErrorType[ValueErrorType["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
    ValueErrorType[ValueErrorType["Integer"] = 27] = "Integer";
    ValueErrorType[ValueErrorType["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
    ValueErrorType[ValueErrorType["Intersect"] = 29] = "Intersect";
    ValueErrorType[ValueErrorType["Iterator"] = 30] = "Iterator";
    ValueErrorType[ValueErrorType["Kind"] = 31] = "Kind";
    ValueErrorType[ValueErrorType["Literal"] = 32] = "Literal";
    ValueErrorType[ValueErrorType["Never"] = 33] = "Never";
    ValueErrorType[ValueErrorType["Not"] = 34] = "Not";
    ValueErrorType[ValueErrorType["Null"] = 35] = "Null";
    ValueErrorType[ValueErrorType["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
    ValueErrorType[ValueErrorType["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
    ValueErrorType[ValueErrorType["NumberMaximum"] = 38] = "NumberMaximum";
    ValueErrorType[ValueErrorType["NumberMinimum"] = 39] = "NumberMinimum";
    ValueErrorType[ValueErrorType["NumberMultipleOf"] = 40] = "NumberMultipleOf";
    ValueErrorType[ValueErrorType["Number"] = 41] = "Number";
    ValueErrorType[ValueErrorType["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
    ValueErrorType[ValueErrorType["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
    ValueErrorType[ValueErrorType["ObjectMinProperties"] = 44] = "ObjectMinProperties";
    ValueErrorType[ValueErrorType["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
    ValueErrorType[ValueErrorType["Object"] = 46] = "Object";
    ValueErrorType[ValueErrorType["Promise"] = 47] = "Promise";
    ValueErrorType[ValueErrorType["RegExp"] = 48] = "RegExp";
    ValueErrorType[ValueErrorType["StringFormatUnknown"] = 49] = "StringFormatUnknown";
    ValueErrorType[ValueErrorType["StringFormat"] = 50] = "StringFormat";
    ValueErrorType[ValueErrorType["StringMaxLength"] = 51] = "StringMaxLength";
    ValueErrorType[ValueErrorType["StringMinLength"] = 52] = "StringMinLength";
    ValueErrorType[ValueErrorType["StringPattern"] = 53] = "StringPattern";
    ValueErrorType[ValueErrorType["String"] = 54] = "String";
    ValueErrorType[ValueErrorType["Symbol"] = 55] = "Symbol";
    ValueErrorType[ValueErrorType["TupleLength"] = 56] = "TupleLength";
    ValueErrorType[ValueErrorType["Tuple"] = 57] = "Tuple";
    ValueErrorType[ValueErrorType["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
    ValueErrorType[ValueErrorType["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
    ValueErrorType[ValueErrorType["Uint8Array"] = 60] = "Uint8Array";
    ValueErrorType[ValueErrorType["Undefined"] = 61] = "Undefined";
    ValueErrorType[ValueErrorType["Union"] = 62] = "Union";
    ValueErrorType[ValueErrorType["Void"] = 63] = "Void";
})(ValueErrorType || (exports.ValueErrorType = ValueErrorType = {}));
// ------------------------------------------------------------------
// ValueErrors
// ------------------------------------------------------------------
class ValueErrorsUnknownTypeError extends index_4.TypeBoxError {
    constructor(schema){
        super('Unknown type');
        this.schema = schema;
    }
}
exports.ValueErrorsUnknownTypeError = ValueErrorsUnknownTypeError;
// ------------------------------------------------------------------
// EscapeKey
// ------------------------------------------------------------------
function EscapeKey(key) {
    return key.replace(/~/g, '~0').replace(/\//g, '~1'); // RFC6901 Path
}
// ------------------------------------------------------------------
// Guards
// ------------------------------------------------------------------
function IsDefined(value) {
    return value !== undefined;
}
// ------------------------------------------------------------------
// ValueErrorIterator
// ------------------------------------------------------------------
class ValueErrorIterator {
    constructor(iterator){
        this.iterator = iterator;
    }
    [Symbol.iterator]() {
        return this.iterator;
    }
    /** Returns the first value error or undefined if no errors */ First() {
        const next = this.iterator.next();
        return next.done ? undefined : next.value;
    }
}
exports.ValueErrorIterator = ValueErrorIterator;
// --------------------------------------------------------------------------
// Create
// --------------------------------------------------------------------------
function Create(errorType, schema, path, value, errors = []) {
    return {
        type: errorType,
        schema,
        path,
        value,
        message: (0, function_1.GetErrorFunction)()({
            errorType,
            path,
            schema,
            value,
            errors
        }),
        errors
    };
}
// --------------------------------------------------------------------------
// Types
// --------------------------------------------------------------------------
function* FromAny(schema, references, path, value) {}
function* FromArray(schema, references, path, value) {
    if (!(0, index_10.IsArray)(value)) {
        return yield Create(ValueErrorType.Array, schema, path, value);
    }
    if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
    }
    if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
    }
    for(let i = 0; i < value.length; i++){
        yield* Visit(schema.items, references, `${path}/${i}`, value[i]);
    }
    // prettier-ignore
    if (schema.uniqueItems === true && !function() {
        const set = new Set();
        for (const element of value){
            const hashed = (0, index_6.Hash)(element);
            if (set.has(hashed)) {
                return false;
            } else {
                set.add(hashed);
            }
        }
        return true;
    }()) {
        yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
    }
    // contains
    if (!(IsDefined(schema.contains) || IsDefined(schema.minContains) || IsDefined(schema.maxContains))) {
        return;
    }
    const containsSchema = IsDefined(schema.contains) ? schema.contains : (0, index_9.Never)();
    const containsCount = value.reduce((acc, value, index)=>Visit(containsSchema, references, `${path}${index}`, value).next().done === true ? acc + 1 : acc, 0);
    if (containsCount === 0) {
        yield Create(ValueErrorType.ArrayContains, schema, path, value);
    }
    if ((0, index_10.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
    }
    if ((0, index_10.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
    }
}
function* FromAsyncIterator(schema, references, path, value) {
    if (!(0, index_10.IsAsyncIterator)(value)) yield Create(ValueErrorType.AsyncIterator, schema, path, value);
}
function* FromBigInt(schema, references, path, value) {
    if (!(0, index_10.IsBigInt)(value)) return yield Create(ValueErrorType.BigInt, schema, path, value);
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
    }
}
function* FromBoolean(schema, references, path, value) {
    if (!(0, index_10.IsBoolean)(value)) yield Create(ValueErrorType.Boolean, schema, path, value);
}
function* FromConstructor(schema, references, path, value) {
    yield* Visit(schema.returns, references, path, value.prototype);
}
function* FromDate(schema, references, path, value) {
    if (!(0, index_10.IsDate)(value)) return yield Create(ValueErrorType.Date, schema, path, value);
    if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
    }
    if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
    }
    if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
    }
    if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
    }
    if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
    }
}
function* FromFunction(schema, references, path, value) {
    if (!(0, index_10.IsFunction)(value)) yield Create(ValueErrorType.Function, schema, path, value);
}
function* FromInteger(schema, references, path, value) {
    if (!(0, index_10.IsInteger)(value)) return yield Create(ValueErrorType.Integer, schema, path, value);
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
    }
}
function* FromIntersect(schema, references, path, value) {
    let hasError = false;
    for (const inner of schema.allOf){
        for (const error of Visit(inner, references, path, value)){
            hasError = true;
            yield error;
        }
    }
    if (hasError) {
        return yield Create(ValueErrorType.Intersect, schema, path, value);
    }
    if (schema.unevaluatedProperties === false) {
        const keyCheck = new RegExp((0, index_2.KeyOfPattern)(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)){
            if (!keyCheck.test(valueKey)) {
                yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
            }
        }
    }
    if (typeof schema.unevaluatedProperties === 'object') {
        const keyCheck = new RegExp((0, index_2.KeyOfPattern)(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)){
            if (!keyCheck.test(valueKey)) {
                const next = Visit(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
                if (!next.done) yield next.value; // yield interior
            }
        }
    }
}
function* FromIterator(schema, references, path, value) {
    if (!(0, index_10.IsIterator)(value)) yield Create(ValueErrorType.Iterator, schema, path, value);
}
function* FromLiteral(schema, references, path, value) {
    if (!(value === schema.const)) yield Create(ValueErrorType.Literal, schema, path, value);
}
function* FromNever(schema, references, path, value) {
    yield Create(ValueErrorType.Never, schema, path, value);
}
function* FromNot(schema, references, path, value) {
    if (Visit(schema.not, references, path, value).next().done === true) yield Create(ValueErrorType.Not, schema, path, value);
}
function* FromNull(schema, references, path, value) {
    if (!(0, index_10.IsNull)(value)) yield Create(ValueErrorType.Null, schema, path, value);
}
function* FromNumber(schema, references, path, value) {
    if (!index_1.TypeSystemPolicy.IsNumberLike(value)) return yield Create(ValueErrorType.Number, schema, path, value);
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.NumberMaximum, schema, path, value);
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.NumberMinimum, schema, path, value);
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
    }
}
function* FromObject(schema, references, path, value) {
    if (!index_1.TypeSystemPolicy.IsObjectLike(value)) return yield Create(ValueErrorType.Object, schema, path, value);
    if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
    }
    if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
    }
    const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
    const knownKeys = Object.getOwnPropertyNames(schema.properties);
    const unknownKeys = Object.getOwnPropertyNames(value);
    for (const requiredKey of requiredKeys){
        if (unknownKeys.includes(requiredKey)) continue;
        yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, undefined);
    }
    if (schema.additionalProperties === false) {
        for (const valueKey of unknownKeys){
            if (!knownKeys.includes(valueKey)) {
                yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
            }
        }
    }
    if (typeof schema.additionalProperties === 'object') {
        for (const valueKey of unknownKeys){
            if (knownKeys.includes(valueKey)) continue;
            yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
        }
    }
    for (const knownKey of knownKeys){
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
            yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
            if ((0, extends_undefined_1.ExtendsUndefinedCheck)(schema) && !(knownKey in value)) {
                yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, undefined);
            }
        } else {
            if (index_1.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
                yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
            }
        }
    }
}
function* FromPromise(schema, references, path, value) {
    if (!(0, index_10.IsPromise)(value)) yield Create(ValueErrorType.Promise, schema, path, value);
}
function* FromRecord(schema, references, path, value) {
    if (!index_1.TypeSystemPolicy.IsRecordLike(value)) return yield Create(ValueErrorType.Object, schema, path, value);
    if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
    }
    if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
    }
    const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
    const regex = new RegExp(patternKey);
    for (const [propertyKey, propertyValue] of Object.entries(value)){
        if (regex.test(propertyKey)) yield* Visit(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
    if (typeof schema.additionalProperties === 'object') {
        for (const [propertyKey, propertyValue] of Object.entries(value)){
            if (!regex.test(propertyKey)) yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
    }
    if (schema.additionalProperties === false) {
        for (const [propertyKey, propertyValue] of Object.entries(value)){
            if (regex.test(propertyKey)) continue;
            return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
    }
}
function* FromRef(schema, references, path, value) {
    yield* Visit((0, index_5.Deref)(schema, references), references, path, value);
}
function* FromRegExp(schema, references, path, value) {
    if (!(0, index_10.IsString)(value)) return yield Create(ValueErrorType.String, schema, path, value);
    if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
        yield Create(ValueErrorType.StringMinLength, schema, path, value);
    }
    if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
        yield Create(ValueErrorType.StringMaxLength, schema, path, value);
    }
    const regex = new RegExp(schema.source, schema.flags);
    if (!regex.test(value)) {
        return yield Create(ValueErrorType.RegExp, schema, path, value);
    }
}
function* FromString(schema, references, path, value) {
    if (!(0, index_10.IsString)(value)) return yield Create(ValueErrorType.String, schema, path, value);
    if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
        yield Create(ValueErrorType.StringMinLength, schema, path, value);
    }
    if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
        yield Create(ValueErrorType.StringMaxLength, schema, path, value);
    }
    if ((0, index_10.IsString)(schema.pattern)) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(value)) {
            yield Create(ValueErrorType.StringPattern, schema, path, value);
        }
    }
    if ((0, index_10.IsString)(schema.format)) {
        if (!index_3.FormatRegistry.Has(schema.format)) {
            yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
        } else {
            const format = index_3.FormatRegistry.Get(schema.format);
            if (!format(value)) {
                yield Create(ValueErrorType.StringFormat, schema, path, value);
            }
        }
    }
}
function* FromSymbol(schema, references, path, value) {
    if (!(0, index_10.IsSymbol)(value)) yield Create(ValueErrorType.Symbol, schema, path, value);
}
function* FromTemplateLiteral(schema, references, path, value) {
    if (!(0, index_10.IsString)(value)) return yield Create(ValueErrorType.String, schema, path, value);
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value)) {
        yield Create(ValueErrorType.StringPattern, schema, path, value);
    }
}
function* FromThis(schema, references, path, value) {
    yield* Visit((0, index_5.Deref)(schema, references), references, path, value);
}
function* FromTuple(schema, references, path, value) {
    if (!(0, index_10.IsArray)(value)) return yield Create(ValueErrorType.Tuple, schema, path, value);
    if (schema.items === undefined && !(value.length === 0)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
    }
    if (!(value.length === schema.maxItems)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
    }
    if (!schema.items) {
        return;
    }
    for(let i = 0; i < schema.items.length; i++){
        yield* Visit(schema.items[i], references, `${path}/${i}`, value[i]);
    }
}
function* FromUndefined(schema, references, path, value) {
    if (!(0, index_10.IsUndefined)(value)) yield Create(ValueErrorType.Undefined, schema, path, value);
}
function* FromUnion(schema, references, path, value) {
    if ((0, index_7.Check)(schema, references, value)) return;
    const errors = schema.anyOf.map((variant)=>new ValueErrorIterator(Visit(variant, references, path, value)));
    yield Create(ValueErrorType.Union, schema, path, value, errors);
}
function* FromUint8Array(schema, references, path, value) {
    if (!(0, index_10.IsUint8Array)(value)) return yield Create(ValueErrorType.Uint8Array, schema, path, value);
    if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
    }
    if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
    }
}
function* FromUnknown(schema, references, path, value) {}
function* FromVoid(schema, references, path, value) {
    if (!index_1.TypeSystemPolicy.IsVoidLike(value)) yield Create(ValueErrorType.Void, schema, path, value);
}
function* FromKind(schema, references, path, value) {
    const check = index_3.TypeRegistry.Get(schema[index_8.Kind]);
    if (!check(schema, value)) yield Create(ValueErrorType.Kind, schema, path, value);
}
function* Visit(schema, references, path, value) {
    const references_ = IsDefined(schema.$id) ? [
        ...references,
        schema
    ] : references;
    const schema_ = schema;
    switch(schema_[index_8.Kind]){
        case 'Any':
            return yield* FromAny(schema_, references_, path, value);
        case 'Array':
            return yield* FromArray(schema_, references_, path, value);
        case 'AsyncIterator':
            return yield* FromAsyncIterator(schema_, references_, path, value);
        case 'BigInt':
            return yield* FromBigInt(schema_, references_, path, value);
        case 'Boolean':
            return yield* FromBoolean(schema_, references_, path, value);
        case 'Constructor':
            return yield* FromConstructor(schema_, references_, path, value);
        case 'Date':
            return yield* FromDate(schema_, references_, path, value);
        case 'Function':
            return yield* FromFunction(schema_, references_, path, value);
        case 'Integer':
            return yield* FromInteger(schema_, references_, path, value);
        case 'Intersect':
            return yield* FromIntersect(schema_, references_, path, value);
        case 'Iterator':
            return yield* FromIterator(schema_, references_, path, value);
        case 'Literal':
            return yield* FromLiteral(schema_, references_, path, value);
        case 'Never':
            return yield* FromNever(schema_, references_, path, value);
        case 'Not':
            return yield* FromNot(schema_, references_, path, value);
        case 'Null':
            return yield* FromNull(schema_, references_, path, value);
        case 'Number':
            return yield* FromNumber(schema_, references_, path, value);
        case 'Object':
            return yield* FromObject(schema_, references_, path, value);
        case 'Promise':
            return yield* FromPromise(schema_, references_, path, value);
        case 'Record':
            return yield* FromRecord(schema_, references_, path, value);
        case 'Ref':
            return yield* FromRef(schema_, references_, path, value);
        case 'RegExp':
            return yield* FromRegExp(schema_, references_, path, value);
        case 'String':
            return yield* FromString(schema_, references_, path, value);
        case 'Symbol':
            return yield* FromSymbol(schema_, references_, path, value);
        case 'TemplateLiteral':
            return yield* FromTemplateLiteral(schema_, references_, path, value);
        case 'This':
            return yield* FromThis(schema_, references_, path, value);
        case 'Tuple':
            return yield* FromTuple(schema_, references_, path, value);
        case 'Undefined':
            return yield* FromUndefined(schema_, references_, path, value);
        case 'Union':
            return yield* FromUnion(schema_, references_, path, value);
        case 'Uint8Array':
            return yield* FromUint8Array(schema_, references_, path, value);
        case 'Unknown':
            return yield* FromUnknown(schema_, references_, path, value);
        case 'Void':
            return yield* FromVoid(schema_, references_, path, value);
        default:
            if (!index_3.TypeRegistry.Has(schema_[index_8.Kind])) throw new ValueErrorsUnknownTypeError(schema);
            return yield* FromKind(schema_, references_, path, value);
    }
}
/** Returns an iterator for each error in this value. */ function Errors(...args) {
    const iterator = args.length === 3 ? Visit(args[0], args[1], '', args[2]) : Visit(args[0], [], '', args[1]);
    return new ValueErrorIterator(iterator);
}
}),
"[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/errors/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/errors/errors.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@sinclair+typebox@0.33.22/node_modules/@sinclair/typebox/build/cjs/errors/function.js [app-ssr] (ecmascript)"), exports);
}),
];

//# sourceMappingURL=5546a_%40sinclair_typebox_build_cjs_244513ad._.js.map