(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/ui-request.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createUiMessage = exports.UI_REQUEST = exports.UI_EVENT = void 0;
exports.UI_EVENT = 'UI_EVENT';
exports.UI_REQUEST = {
    TRANSPORT: 'ui-no_transport',
    BOOTLOADER: 'ui-device_bootloader_mode',
    NOT_IN_BOOTLOADER: 'ui-device_not_in_bootloader_mode',
    REQUIRE_MODE: 'ui-device_require_mode',
    INITIALIZE: 'ui-device_not_initialized',
    SEEDLESS: 'ui-device_seedless',
    FIRMWARE_OLD: 'ui-device_firmware_old',
    FIRMWARE_OUTDATED: 'ui-device_firmware_outdated',
    FIRMWARE_NOT_SUPPORTED: 'ui-device_firmware_unsupported',
    FIRMWARE_NOT_COMPATIBLE: 'ui-device_firmware_not_compatible',
    FIRMWARE_NOT_INSTALLED: 'ui-device_firmware_not_installed',
    FIRMWARE_PROGRESS: 'ui-firmware-progress',
    FIRMWARE_PROGRESS_UNEXPECTED_DELAY: 'ui-firmware-progress-unexpected-delay',
    FIRMWARE_RECONNECT: 'ui-firmware_reconnect',
    FIRMWARE_DISCONNECT: 'ui-firmware_disconnect',
    FIRMWARE_DOWNLOADED: 'ui-firmware_downloaded',
    DEVICE_NEEDS_BACKUP: 'ui-device_needs_backup',
    REQUEST_UI_WINDOW: 'ui-request_window',
    CLOSE_UI_WINDOW: 'ui-close_window',
    REQUEST_PERMISSION: 'ui-request_permission',
    REQUEST_CONFIRMATION: 'ui-request_confirmation',
    REQUEST_PIN: 'ui-request_pin',
    INVALID_PIN: 'ui-invalid_pin',
    INVALID_PIN_ATTEMPTS_DEPLETED: 'ui-invalid_pin_attempts_depleted',
    REQUEST_PASSPHRASE: 'ui-request_passphrase',
    REQUEST_PASSPHRASE_ON_DEVICE: 'ui-request_passphrase_on_device',
    INVALID_PASSPHRASE: 'ui-invalid_passphrase',
    REQUEST_THP_PAIRING: 'ui-request_thp_pairing',
    CONNECT: 'ui-connect',
    LOADING: 'ui-loading',
    SET_OPERATION: 'ui-set_operation',
    SELECT_DEVICE: 'ui-select_device',
    SELECT_ACCOUNT: 'ui-select_account',
    SELECT_FEE: 'ui-select_fee',
    UPDATE_CUSTOM_FEE: 'ui-update_custom_fee',
    INSUFFICIENT_FUNDS: 'ui-insufficient_funds',
    REQUEST_BUTTON: 'ui-button',
    REQUEST_WORD: 'ui-request_word',
    LOGIN_CHALLENGE_REQUEST: 'ui-login_challenge_request',
    BUNDLE_PROGRESS: 'ui-bundle_progress',
    ADDRESS_VALIDATION: 'ui-address_validation',
    IFRAME_FAILURE: 'ui-iframe_failure'
};
const createUiMessage = (type, payload)=>({
        event: exports.UI_EVENT,
        type,
        payload
    });
exports.createUiMessage = createUiMessage; //# sourceMappingURL=ui-request.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/ui-response.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createUiResponse = exports.UI_RESPONSE = void 0;
const ui_request_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/ui-request.js [app-client] (ecmascript)");
exports.UI_RESPONSE = {
    RECEIVE_PERMISSION: 'ui-receive_permission',
    RECEIVE_CONFIRMATION: 'ui-receive_confirmation',
    RECEIVE_FIRMWARE: 'ui-receive_firmware',
    RECEIVE_PIN: 'ui-receive_pin',
    RECEIVE_PASSPHRASE: 'ui-receive_passphrase',
    RECEIVE_THP_PAIRING_TAG: 'ui-receive_thp_pairing_tag',
    RECEIVE_DEVICE: 'ui-receive_device',
    RECEIVE_ACCOUNT: 'ui-receive_account',
    RECEIVE_FEE: 'ui-receive_fee',
    RECEIVE_WORD: 'ui-receive_word',
    INVALID_PASSPHRASE_ACTION: 'ui-invalid_passphrase_action',
    CHANGE_SETTINGS: 'ui-change_settings',
    LOGIN_CHALLENGE_RESPONSE: 'ui-login_challenge_response'
};
const createUiResponse = (type, payload)=>({
        event: ui_request_1.UI_EVENT,
        type,
        payload
    });
exports.createUiResponse = createUiResponse; //# sourceMappingURL=ui-response.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/blockchain.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createBlockchainMessage = exports.BLOCKCHAIN = exports.BLOCKCHAIN_EVENT = void 0;
exports.BLOCKCHAIN_EVENT = 'BLOCKCHAIN_EVENT';
exports.BLOCKCHAIN = {
    CONNECT: 'blockchain-connect',
    RECONNECTING: 'blockchain-reconnecting',
    ERROR: 'blockchain-error',
    BLOCK: 'blockchain-block',
    NOTIFICATION: 'blockchain-notification',
    FIAT_RATES_UPDATE: 'fiat-rates-update'
};
const createBlockchainMessage = (type, payload)=>({
        event: exports.BLOCKCHAIN_EVENT,
        type,
        payload
    });
exports.createBlockchainMessage = createBlockchainMessage; //# sourceMappingURL=blockchain.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/errors.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LIBUSB_ERROR_MESSAGE = exports.serializeError = exports.TypedError = exports.TransportError = exports.nestError = exports.TrezorError = exports.ERROR_CODES = void 0;
exports.ERROR_CODES = {
    Init_NotInitialized: 'TrezorConnect not initialized',
    Init_AlreadyInitialized: 'TrezorConnect has been already initialized',
    Init_IframeBlocked: 'Iframe blocked',
    Init_IframeTimeout: 'Iframe timeout',
    Init_ManifestMissing: 'Manifest not set. Read more at https://github.com/trezor/trezor-suite/blob/develop/docs/packages/connect/index.md',
    Popup_ConnectionMissing: 'Unable to establish connection with iframe',
    Desktop_ConnectionMissing: 'Unable to establish connection with Suite',
    Transport_Missing: 'Transport is missing',
    Method_InvalidPackage: 'This package is not suitable to work with browser. Use @trezor/connect-web package instead',
    Method_InvalidParameter: '',
    Method_NotAllowed: 'Method not allowed for this configuration',
    Method_PermissionsNotGranted: 'Permissions not granted',
    Method_Cancel: 'Canceled',
    Method_Interrupted: 'Popup closed',
    Method_UnknownCoin: 'Coin not found',
    Method_AddressNotMatch: 'Addresses do not match',
    Method_Discovery_BundleException: '',
    Method_Override: 'override',
    Method_NoResponse: 'Call resolved without response',
    Method_Unsupported: 'Unsupported method',
    Backend_NotSupported: 'BlockchainLink settings not found in coins.json',
    Backend_WorkerMissing: '',
    Backend_Disconnected: 'Backend disconnected',
    Backend_Invalid: 'Invalid backend',
    Backend_Error: '',
    Runtime: '',
    Device_NotFound: 'Device not found',
    Device_InitializeFailed: '',
    Device_FwException: '',
    Device_ModeException: '',
    Device_Disconnected: 'Device disconnected',
    Device_UsedElsewhere: 'Device is used in another window',
    Device_InvalidState: 'Passphrase is incorrect',
    Device_CallInProgress: 'Device call in progress',
    Device_MultipleNotSupported: 'Multiple devices are not supported',
    Device_MissingCapability: 'Device is missing capability',
    Device_MissingCapabilityBtcOnly: 'Device is missing capability (BTC only)',
    Device_ThpPairingTagInvalid: 'Pairing tag mismatch',
    Device_ThpStateMissing: 'ThpState missing',
    Device_ThpPairingMethodsException: 'No common pairing methods',
    Failure_UnknownCode: 'Unknown error',
    Failure_EntropyCheck: '',
    Deeplink_VersionMismatch: 'Not compatible with current version of the app'
};
class TrezorError extends Error {
    code;
    message;
    constructor(code, message, options){
        super(message, options);
        this.code = code;
        this.message = message;
    }
    toString() {
        return `${this.name} (code: ${this.code}): ${this.message}`;
    }
}
exports.TrezorError = TrezorError;
const nestError = (cause)=>cause instanceof TrezorError ? new TrezorError(cause.code, cause.message, {
        cause
    }) : new Error(cause.message, {
        cause
    });
exports.nestError = nestError;
class TransportError extends Error {
}
exports.TransportError = TransportError;
const TypedError = (id, message)=>new TrezorError(id, message || exports.ERROR_CODES[id] || id);
exports.TypedError = TypedError;
const serializeError = (payload)=>{
    const error = payload?.error instanceof Error ? payload.error : payload;
    return error instanceof Error ? {
        error: error.message,
        code: 'code' in error ? error.code : 'Failure_UnknownCode'
    } : {
        ...payload
    };
};
exports.serializeError = serializeError;
exports.LIBUSB_ERROR_MESSAGE = 'LIBUSB_ERROR'; //# sourceMappingURL=errors.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/call.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createResponseMessage = exports.RESPONSE_EVENT = void 0;
const errors_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/errors.js [app-client] (ecmascript)");
exports.RESPONSE_EVENT = 'RESPONSE_EVENT';
const createResponseMessage = (id, success, payload, device)=>({
        event: exports.RESPONSE_EVENT,
        type: exports.RESPONSE_EVENT,
        id,
        success,
        payload: success ? payload : (0, errors_1.serializeError)(payload),
        device: device ? {
            path: device?.getUniquePath(),
            state: device?.getState(),
            instance: device?.getInstance()
        } : undefined
    });
exports.createResponseMessage = createResponseMessage; //# sourceMappingURL=call.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/core.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createErrorMessage = exports.parseMessage = exports.CORE_EVENT = void 0;
exports.CORE_EVENT = 'CORE_EVENT';
const parseMessage = (messageData)=>{
    const message = {
        event: messageData.event,
        type: messageData.type,
        payload: messageData.payload,
        device: messageData.device
    };
    if (typeof messageData.id === 'number') {
        message.id = messageData.id;
    }
    if (typeof messageData.success === 'boolean') {
        message.success = messageData.success;
    }
    return message;
};
exports.parseMessage = parseMessage;
const createErrorMessage = (error)=>({
        success: false,
        payload: {
            error: error.message,
            code: error.code
        }
    });
exports.createErrorMessage = createErrorMessage; //# sourceMappingURL=core.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/device.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDeviceMessage = exports.DEVICE = exports.DEVICE_EVENT = exports.TrezorPushNotificationType = exports.TrezorPushNotificationMode = void 0;
var protocol_tpn_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+protocol@1.2.10_tslib@2.8.1/node_modules/@trezor/protocol/lib/protocol-tpn/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "TrezorPushNotificationMode", {
    enumerable: true,
    get: function() {
        return protocol_tpn_1.TrezorPushNotificationMode;
    }
});
Object.defineProperty(exports, "TrezorPushNotificationType", {
    enumerable: true,
    get: function() {
        return protocol_tpn_1.TrezorPushNotificationType;
    }
});
exports.DEVICE_EVENT = 'DEVICE_EVENT';
exports.DEVICE = {
    CONNECT: 'device-connect',
    CONNECT_UNACQUIRED: 'device-connect_unacquired',
    DISCONNECT: 'device-disconnect',
    CHANGED: 'device-changed',
    FIRMWARE_VERSION_CHANGED: 'device-firmware_version_changed',
    TREZOR_PUSH_NOTIFICATION: 'device-trezor_push_notification',
    THP_CREDENTIALS_CHANGED: 'device-thp_credentials_changed',
    BUTTON: 'button',
    PIN: 'pin',
    PASSPHRASE: 'passphrase',
    PASSPHRASE_ON_DEVICE: 'passphrase_on_device',
    WORD: 'word',
    THP_PAIRING: 'thp_pairing'
};
const createDeviceMessage = (type, payload)=>({
        event: exports.DEVICE_EVENT,
        type,
        payload
    });
exports.createDeviceMessage = createDeviceMessage; //# sourceMappingURL=device.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/iframe.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createIFrameMessage = exports.IFRAME = void 0;
const ui_request_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/ui-request.js [app-client] (ecmascript)");
exports.IFRAME = {
    BOOTSTRAP: 'iframe-bootstrap',
    LOADED: 'iframe-loaded',
    INIT: 'iframe-init',
    ERROR: 'iframe-error',
    CALL: 'iframe-call',
    LOG: 'iframe-log'
};
const createIFrameMessage = (type, payload)=>({
        event: ui_request_1.UI_EVENT,
        type,
        payload
    });
exports.createIFrameMessage = createIFrameMessage; //# sourceMappingURL=iframe.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/popup.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createPopupMessage = exports.POPUP = void 0;
const ui_request_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/ui-request.js [app-client] (ecmascript)");
exports.POPUP = {
    BOOTSTRAP: 'popup-bootstrap',
    LOADED: 'popup-loaded',
    CORE_LOADED: 'popup-core-loaded',
    INIT: 'popup-init',
    ERROR: 'popup-error',
    EXTENSION_USB_PERMISSIONS: 'open-usb-permissions',
    HANDSHAKE: 'popup-handshake',
    CLOSED: 'popup-closed',
    CANCEL_POPUP_REQUEST: 'ui-cancel-popup-request',
    CLOSE_WINDOW: 'window.close',
    ANALYTICS_RESPONSE: 'popup-analytics-response',
    CONTENT_SCRIPT_LOADED: 'popup-content-script-loaded',
    METHOD_INFO: 'popup-method-info'
};
const createPopupMessage = (type, payload)=>({
        event: ui_request_1.UI_EVENT,
        type,
        payload
    });
exports.createPopupMessage = createPopupMessage; //# sourceMappingURL=popup.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/data/transportInfo.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.suggestBridgeInstaller = void 0;
const info = {
    version: [
        2,
        0,
        27
    ],
    packages: [
        {
            name: 'Linux 64-bit (deb)',
            platform: [
                'deb64'
            ],
            url: 'bridge/2.0.27/trezor-bridge_2.0.27_amd64.deb'
        },
        {
            name: 'Linux 64-bit (rpm)',
            platform: [
                'rpm64'
            ],
            url: 'bridge/2.0.27/trezor-bridge-2.0.27-1.x86_64.rpm'
        },
        {
            name: 'Linux 32-bit (deb)',
            platform: [
                'deb32'
            ],
            url: 'bridge/2.0.27/trezor-bridge_2.0.27_i386.deb'
        },
        {
            name: 'Linux 32-bit (rpm)',
            platform: [
                'rpm32'
            ],
            url: 'bridge/2.0.27/trezor-bridge-2.0.27-1.i386.rpm'
        },
        {
            name: 'macOS',
            platform: [
                'mac'
            ],
            signature: 'bridge/2.0.27/trezor-bridge-2.0.27.pkg.asc',
            url: 'bridge/2.0.27/trezor-bridge-2.0.27.pkg'
        },
        {
            name: 'Windows',
            platform: [
                'win32',
                'win64'
            ],
            signature: 'bridge/2.0.27/trezor-bridge-2.0.27-win32-install.exe.asc',
            url: 'bridge/2.0.27/trezor-bridge-2.0.27-win32-install.exe'
        }
    ],
    changelog: ''
};
const getBridgeInfo = ()=>info;
const suggestBridgeInstaller = (platform)=>{
    const info2 = getBridgeInfo();
    if (platform) {
        info2.packages = info2.packages.map((p)=>({
                ...p,
                preferred: p.platform.indexOf(platform) >= 0
            }));
    }
    return info2;
};
exports.suggestBridgeInstaller = suggestBridgeInstaller; //# sourceMappingURL=transportInfo.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/data/udevInfo.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.suggestUdevInstaller = void 0;
const info = {
    packages: [
        {
            name: 'RPM package',
            platform: [
                'rpm32',
                'rpm64'
            ],
            url: '/udev/trezor-udev-2-1.noarch.rpm'
        },
        {
            name: 'DEB package',
            platform: [
                'deb32',
                'deb64'
            ],
            url: '/udev/trezor-udev_2_all.deb',
            preferred: true
        }
    ]
};
const suggestUdevInstaller = (platform)=>{
    if (platform !== undefined) {
        return {
            packages: info.packages.map((it)=>({
                    ...it,
                    preferred: it.platform.indexOf(platform) >= 0
                }))
        };
    }
    return info;
};
exports.suggestUdevInstaller = suggestUdevInstaller; //# sourceMappingURL=udevInfo.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/transport.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTransportMessage = exports.TRANSPORT_EVENT = exports.TRANSPORT = void 0;
const errors_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/errors.js [app-client] (ecmascript)");
const transportInfo_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/data/transportInfo.js [app-client] (ecmascript)");
const udevInfo_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/data/udevInfo.js [app-client] (ecmascript)");
var constants_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+transport@1.5.4_tslib@2.8.1/node_modules/@trezor/transport/lib/constants.js [app-client] (ecmascript)");
Object.defineProperty(exports, "TRANSPORT", {
    enumerable: true,
    get: function() {
        return constants_1.TRANSPORT;
    }
});
exports.TRANSPORT_EVENT = 'TRANSPORT_EVENT';
const createTransportMessage = (type, payload)=>({
        event: exports.TRANSPORT_EVENT,
        type,
        payload: 'error' in payload ? (0, errors_1.serializeError)(payload) : {
            ...payload,
            udev: (0, udevInfo_1.suggestUdevInstaller)(),
            bridge: (0, transportInfo_1.suggestBridgeInstaller)()
        }
    });
exports.createTransportMessage = createTransportMessage; //# sourceMappingURL=transport.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/ui-promise.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=ui-promise.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/webextension.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WEBEXTENSION = void 0;
exports.WEBEXTENSION = {
    USB_PERMISSIONS_BROADCAST: 'usb-permissions',
    USB_PERMISSIONS_INIT: 'usb-permissions-init',
    USB_PERMISSIONS_CLOSE: 'usb-permissions-close',
    USB_PERMISSIONS_FINISHED: 'usb-permissions-finished',
    CHANNEL_HANDSHAKE_CONFIRM: 'channel-handshake-confirm'
}; //# sourceMappingURL=webextension.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UI = void 0;
const tslib_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
const ui_request_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/ui-request.js [app-client] (ecmascript)");
const ui_response_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/ui-response.js [app-client] (ecmascript)");
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/blockchain.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/call.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/core.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/device.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/iframe.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/popup.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/transport.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/ui-promise.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/ui-request.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/ui-response.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/webextension.js [app-client] (ecmascript)"), exports);
exports.UI = {
    ...ui_request_1.UI_REQUEST,
    ...ui_response_1.UI_RESPONSE
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/factory.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.factory = void 0;
const events_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/index.js [app-client] (ecmascript)");
const factory = ({ eventEmitter, manifest, init, call, setTransports, requestLogin, uiResponse, cancel, dispose }, extraMethods = {})=>({
        manifest,
        init,
        setTransports,
        on: (type, fn)=>{
            eventEmitter.on(type, fn);
        },
        off: (type, fn)=>{
            eventEmitter.removeListener(type, fn);
        },
        removeAllListeners: (type)=>{
            if (typeof type === 'string') {
                eventEmitter.removeAllListeners(type);
            } else {
                eventEmitter.removeAllListeners();
            }
        },
        uiResponse,
        bleUnpair: (params)=>call({
                ...params,
                method: 'bleUnpair'
            }),
        blockchainGetAccountBalanceHistory: (params)=>call({
                ...params,
                method: 'blockchainGetAccountBalanceHistory'
            }),
        blockchainGetCurrentFiatRates: (params)=>call({
                ...params,
                method: 'blockchainGetCurrentFiatRates'
            }),
        blockchainGetFiatRatesForTimestamps: (params)=>call({
                ...params,
                method: 'blockchainGetFiatRatesForTimestamps'
            }),
        blockchainGetInfo: (params)=>call({
                ...params,
                method: 'blockchainGetInfo'
            }),
        blockchainEvmRpcCall: (params)=>call({
                ...params,
                method: 'blockchainEvmRpcCall'
            }),
        blockchainDisconnect: (params)=>call({
                ...params,
                method: 'blockchainDisconnect'
            }),
        blockchainEstimateFee: (params)=>call({
                ...params,
                method: 'blockchainEstimateFee'
            }),
        blockchainGetTransactions: (params)=>call({
                ...params,
                method: 'blockchainGetTransactions'
            }),
        blockchainSetCustomBackend: (params)=>call({
                ...params,
                method: 'blockchainSetCustomBackend'
            }),
        blockchainSubscribe: (params)=>call({
                ...params,
                method: 'blockchainSubscribe'
            }),
        blockchainSubscribeFiatRates: (params)=>call({
                ...params,
                method: 'blockchainSubscribeFiatRates'
            }),
        blockchainUnsubscribe: (params)=>call({
                ...params,
                method: 'blockchainUnsubscribe'
            }),
        blockchainUnsubscribeFiatRates: (params)=>call({
                ...params,
                method: 'blockchainUnsubscribeFiatRates'
            }),
        requestLogin: (params)=>requestLogin(params),
        cardanoGetAddress: (params)=>call({
                ...params,
                method: 'cardanoGetAddress',
                useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
            }),
        cardanoGetNativeScriptHash: (params)=>call({
                ...params,
                method: 'cardanoGetNativeScriptHash'
            }),
        cardanoGetPublicKey: (params)=>call({
                ...params,
                method: 'cardanoGetPublicKey'
            }),
        cardanoSignTransaction: (params)=>call({
                ...params,
                method: 'cardanoSignTransaction'
            }),
        cardanoSignMessage: (params)=>call({
                ...params,
                method: 'cardanoSignMessage'
            }),
        cardanoComposeTransaction: (params)=>call({
                ...params,
                method: 'cardanoComposeTransaction'
            }),
        cipherKeyValue: (params)=>call({
                ...params,
                method: 'cipherKeyValue'
            }),
        evoluGetNode: (params)=>call({
                ...params,
                method: 'evoluGetNode'
            }),
        composeTransaction: (params)=>call({
                ...params,
                method: 'composeTransaction'
            }),
        discoverAccounts: (params)=>call({
                ...params,
                method: 'discoverAccounts'
            }),
        ethereumGetAddress: (params)=>call({
                ...params,
                method: 'ethereumGetAddress',
                useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
            }),
        ethereumGetPublicKey: (params)=>call({
                ...params,
                method: 'ethereumGetPublicKey'
            }),
        ethereumSignMessage: (params)=>call({
                ...params,
                method: 'ethereumSignMessage'
            }),
        ethereumSignTransaction: (params)=>call({
                ...params,
                method: 'ethereumSignTransaction'
            }),
        ethereumSignTypedData: (params)=>call({
                ...params,
                method: 'ethereumSignTypedData'
            }),
        ethereumVerifyMessage: (params)=>call({
                ...params,
                method: 'ethereumVerifyMessage'
            }),
        getAccountDescriptor: (params)=>call({
                ...params,
                method: 'getAccountDescriptor'
            }),
        getAccountInfo: (params)=>call({
                ...params,
                method: 'getAccountInfo'
            }),
        getAddress: (params)=>call({
                ...params,
                method: 'getAddress',
                useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
            }),
        getDeviceState: (params)=>call({
                ...params,
                method: 'getDeviceState'
            }),
        getFeatures: (params)=>call({
                ...params,
                method: 'getFeatures'
            }),
        getFirmwareHash: (params)=>call({
                ...params,
                method: 'getFirmwareHash'
            }),
        getOwnershipId: (params)=>call({
                ...params,
                method: 'getOwnershipId'
            }),
        getOwnershipProof: (params)=>call({
                ...params,
                method: 'getOwnershipProof'
            }),
        getPublicKey: (params)=>call({
                ...params,
                method: 'getPublicKey'
            }),
        getNonce: (params)=>call({
                ...params,
                method: 'getNonce'
            }),
        nemGetAddress: (params)=>call({
                ...params,
                method: 'nemGetAddress',
                useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
            }),
        nemSignTransaction: (params)=>call({
                ...params,
                method: 'nemSignTransaction'
            }),
        pushTransaction: (params)=>call({
                ...params,
                method: 'pushTransaction'
            }),
        rippleGetAddress: (params)=>call({
                ...params,
                method: 'rippleGetAddress',
                useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
            }),
        rippleSignTransaction: (params)=>call({
                ...params,
                method: 'rippleSignTransaction'
            }),
        signMessage: (params)=>call({
                ...params,
                method: 'signMessage'
            }),
        signTransaction: (params)=>call({
                ...params,
                method: 'signTransaction'
            }),
        solanaComposeTransaction: (params)=>call({
                ...params,
                method: 'solanaComposeTransaction'
            }),
        solanaGetPublicKey: (params)=>call({
                ...params,
                method: 'solanaGetPublicKey'
            }),
        solanaGetAddress: (params)=>call({
                ...params,
                method: 'solanaGetAddress'
            }),
        solanaSignTransaction: (params)=>call({
                ...params,
                method: 'solanaSignTransaction'
            }),
        stellarGetAddress: (params)=>call({
                ...params,
                method: 'stellarGetAddress',
                useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
            }),
        stellarSignTransaction: (params)=>call({
                ...params,
                method: 'stellarSignTransaction'
            }),
        tezosGetAddress: (params)=>call({
                ...params,
                method: 'tezosGetAddress',
                useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
            }),
        tezosGetPublicKey: (params)=>call({
                ...params,
                method: 'tezosGetPublicKey'
            }),
        tezosSignTransaction: (params)=>call({
                ...params,
                method: 'tezosSignTransaction'
            }),
        unlockPath: (params)=>call({
                ...params,
                method: 'unlockPath'
            }),
        eosGetPublicKey: (params)=>call({
                ...params,
                method: 'eosGetPublicKey'
            }),
        eosSignTransaction: (params)=>call({
                ...params,
                method: 'eosSignTransaction'
            }),
        verifyMessage: (params)=>call({
                ...params,
                method: 'verifyMessage'
            }),
        resetDevice: (params)=>call({
                ...params,
                method: 'resetDevice'
            }),
        loadDevice: (params)=>call({
                ...params,
                method: 'loadDevice'
            }),
        wipeDevice: (params)=>call({
                ...params,
                method: 'wipeDevice'
            }),
        applyFlags: (params)=>call({
                ...params,
                method: 'applyFlags'
            }),
        applySettings: (params)=>call({
                ...params,
                method: 'applySettings'
            }),
        getSettings: ()=>call({
                method: 'getSettings'
            }),
        authenticateDevice: (params)=>call({
                ...params,
                method: 'authenticateDevice'
            }),
        authorizeCoinjoin: (params)=>call({
                ...params,
                method: 'authorizeCoinjoin'
            }),
        cancelCoinjoinAuthorization: (params)=>call({
                ...params,
                method: 'cancelCoinjoinAuthorization'
            }),
        showDeviceTutorial: (params)=>call({
                ...params,
                method: 'showDeviceTutorial'
            }),
        backupDevice: (params)=>call({
                ...params,
                method: 'backupDevice'
            }),
        changeLanguage: (params)=>call({
                ...params,
                method: 'changeLanguage'
            }),
        changePin: (params)=>call({
                ...params,
                method: 'changePin'
            }),
        changeWipeCode: (params)=>call({
                ...params,
                method: 'changeWipeCode'
            }),
        firmwareUpdate: (params)=>call({
                ...params,
                method: 'firmwareUpdate'
            }),
        recoveryDevice: (params)=>call({
                ...params,
                method: 'recoveryDevice'
            }),
        getCoinInfo: (params)=>call({
                ...params,
                method: 'getCoinInfo'
            }),
        setBrightness: (params)=>call({
                ...params,
                method: 'setBrightness'
            }),
        setBusy: (params)=>call({
                ...params,
                method: 'setBusy'
            }),
        setProxy: (params)=>call({
                ...params,
                method: 'setProxy'
            }),
        thpGetCredentials: (params)=>call({
                ...params,
                method: 'thpGetCredentials'
            }),
        thpRemoveCredentials: (params)=>call({
                ...params,
                method: 'thpRemoveCredentials'
            }),
        dispose,
        cancel,
        ...extraMethods
    });
exports.factory = factory; //# sourceMappingURL=factory.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/network.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MODULES = exports.TYPES = void 0;
exports.TYPES = {
    bitcoin: 'Bitcoin',
    ethereum: 'Ethereum',
    eos: 'Eos',
    nem: 'NEM',
    stellar: 'Stellar',
    cardano: 'Cardano',
    ripple: 'Ripple',
    tezos: 'Tezos',
    binance: 'Binance',
    solana: 'Solana'
};
exports.MODULES = [
    'cardano',
    'eos',
    'ethereum',
    'nem',
    'ripple',
    'solana',
    'stellar',
    'tezos'
]; //# sourceMappingURL=network.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/cardano.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ALGORITHM_IDS = exports.NETWORK_IDS = exports.PROTOCOL_MAGICS = void 0;
var PROTOCOL_MAGICS;
(function(PROTOCOL_MAGICS) {
    PROTOCOL_MAGICS[PROTOCOL_MAGICS["mainnet"] = 764824073] = "mainnet";
    PROTOCOL_MAGICS[PROTOCOL_MAGICS["testnet_preprod"] = 1] = "testnet_preprod";
    PROTOCOL_MAGICS[PROTOCOL_MAGICS["testnet_preview"] = 2] = "testnet_preview";
    PROTOCOL_MAGICS[PROTOCOL_MAGICS["testnet_legacy"] = 1097911063] = "testnet_legacy";
})(PROTOCOL_MAGICS || (exports.PROTOCOL_MAGICS = PROTOCOL_MAGICS = {}));
var NETWORK_IDS;
(function(NETWORK_IDS) {
    NETWORK_IDS[NETWORK_IDS["mainnet"] = 1] = "mainnet";
    NETWORK_IDS[NETWORK_IDS["testnet"] = 0] = "testnet";
})(NETWORK_IDS || (exports.NETWORK_IDS = NETWORK_IDS = {}));
var ALGORITHM_IDS;
(function(ALGORITHM_IDS) {
    ALGORITHM_IDS[ALGORITHM_IDS["EdDSA"] = -8] = "EdDSA";
})(ALGORITHM_IDS || (exports.ALGORITHM_IDS = ALGORITHM_IDS = {})); //# sourceMappingURL=cardano.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/nem.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EnumTxVersion = exports.TxVersion = exports.EnumTxType = exports.TxType = exports.EnumNetworks = exports.Networks = void 0;
const schema_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+schema-utils@1.3.4_tslib@2.8.1/node_modules/@trezor/schema-utils/lib/index.js [app-client] (ecmascript)");
var Networks;
(function(Networks) {
    Networks[Networks["mainnet"] = 104] = "mainnet";
    Networks[Networks["testnet"] = 152] = "testnet";
    Networks[Networks["mijin"] = 96] = "mijin";
})(Networks || (exports.Networks = Networks = {}));
exports.EnumNetworks = schema_utils_1.Type.Enum(Networks);
var TxType;
(function(TxType) {
    TxType[TxType["TRANSFER"] = 257] = "TRANSFER";
    TxType[TxType["COSIGNING"] = 258] = "COSIGNING";
    TxType[TxType["IMPORTANCE_TRANSFER"] = 2049] = "IMPORTANCE_TRANSFER";
    TxType[TxType["AGGREGATE_MODIFICATION"] = 4097] = "AGGREGATE_MODIFICATION";
    TxType[TxType["MULTISIG_SIGNATURE"] = 4098] = "MULTISIG_SIGNATURE";
    TxType[TxType["MULTISIG"] = 4100] = "MULTISIG";
    TxType[TxType["PROVISION_NAMESPACE"] = 8193] = "PROVISION_NAMESPACE";
    TxType[TxType["MOSAIC_CREATION"] = 16385] = "MOSAIC_CREATION";
    TxType[TxType["SUPPLY_CHANGE"] = 16386] = "SUPPLY_CHANGE";
})(TxType || (exports.TxType = TxType = {}));
exports.EnumTxType = schema_utils_1.Type.Enum(TxType);
var TxVersion;
(function(TxVersion) {
    TxVersion[TxVersion["mainnet"] = 1744830464] = "mainnet";
    TxVersion[TxVersion["testnet"] = -1744830464] = "testnet";
    TxVersion[TxVersion["mijin"] = 1610612736] = "mijin";
})(TxVersion || (exports.TxVersion = TxVersion = {}));
exports.EnumTxVersion = schema_utils_1.Type.Enum(TxVersion); //# sourceMappingURL=nem.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/firmware.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.REVISION_CHECK_RETRIABLE_ERRORS = exports.HASH_CHECK_RETRIABLE_ERRORS = exports.HASH_CHECK_MAX_ATTEMPTS = void 0;
exports.HASH_CHECK_MAX_ATTEMPTS = 3;
exports.HASH_CHECK_RETRIABLE_ERRORS = [
    'other-error'
];
exports.REVISION_CHECK_RETRIABLE_ERRORS = [
    'cannot-perform-check-offline',
    'other-error'
]; //# sourceMappingURL=firmware.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/utxo.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_SORTING_STRATEGY = void 0;
exports.DEFAULT_SORTING_STRATEGY = 'random'; //# sourceMappingURL=utxo.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PROTO = exports.DEFAULT_SORTING_STRATEGY = exports.FIRMWARE = exports.NEM = exports.CARDANO = exports.NETWORK = exports.ERRORS = void 0;
const tslib_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
exports.ERRORS = tslib_1.__importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/errors.js [app-client] (ecmascript)"));
exports.NETWORK = tslib_1.__importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/network.js [app-client] (ecmascript)"));
exports.CARDANO = tslib_1.__importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/cardano.js [app-client] (ecmascript)"));
exports.NEM = tslib_1.__importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/nem.js [app-client] (ecmascript)"));
exports.FIRMWARE = tslib_1.__importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/firmware.js [app-client] (ecmascript)"));
var utxo_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/utxo.js [app-client] (ecmascript)");
Object.defineProperty(exports, "DEFAULT_SORTING_STRATEGY", {
    enumerable: true,
    get: function() {
        return utxo_1.DEFAULT_SORTING_STRATEGY;
    }
});
var protobuf_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+protobuf@1.4.4_tslib@2.8.1/node_modules/@trezor/protobuf/lib/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "PROTO", {
    enumerable: true,
    get: function() {
        return protobuf_1.MessagesSchema;
    }
}); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/utils/proxy-event-emitter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProxyEventEmitter = void 0;
class ProxyEventEmitter {
    eventEmitters;
    constructor(eventEmitters){
        this.eventEmitters = eventEmitters;
    }
    emit(eventName, ...args) {
        this.eventEmitters.forEach((emitter)=>emitter.emit(eventName, ...args));
        return true;
    }
    on(eventName, listener) {
        this.eventEmitters.forEach((emitter)=>emitter.on(eventName, listener));
        return this;
    }
    off(eventName, listener) {
        this.eventEmitters.forEach((emitter)=>emitter.off(eventName, listener));
        return this;
    }
    once(eventName, listener) {
        this.eventEmitters.forEach((emitter)=>emitter.once(eventName, listener));
        return this;
    }
    addListener(eventName, listener) {
        this.eventEmitters.forEach((emitter)=>emitter.addListener(eventName, listener));
        return this;
    }
    prependListener(eventName, listener) {
        this.eventEmitters.forEach((emitter)=>emitter.prependListener(eventName, listener));
        return this;
    }
    prependOnceListener(eventName, listener) {
        this.eventEmitters.forEach((emitter)=>emitter.prependOnceListener(eventName, listener));
        return this;
    }
    removeAllListeners(event) {
        this.eventEmitters.forEach((emitter)=>emitter.removeAllListeners(event));
        return this;
    }
    removeListener(eventName, listener) {
        this.eventEmitters.forEach((emitter)=>emitter.removeListener(eventName, listener));
        return this;
    }
    setMaxListeners(n) {
        this.eventEmitters.forEach((emitter)=>emitter.setMaxListeners(n));
        return this;
    }
    eventNames() {
        return this.eventEmitters[0].eventNames();
    }
    getMaxListeners() {
        return this.eventEmitters[0].getMaxListeners();
    }
    listenerCount(eventName, listener) {
        return this.eventEmitters[0].listenerCount(eventName, listener);
    }
    rawListeners(eventName) {
        return this.eventEmitters[0].rawListeners(eventName);
    }
    listeners(eventName) {
        return this.eventEmitters[0].listeners(eventName);
    }
}
exports.ProxyEventEmitter = ProxyEventEmitter; //# sourceMappingURL=proxy-event-emitter.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/impl/dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TrezorConnectDynamic = void 0;
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+utils@9.4.4_tslib@2.8.1/node_modules/@trezor/utils/lib/index.js [app-client] (ecmascript)");
const constants_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/index.js [app-client] (ecmascript)");
const events_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/index.js [app-client] (ecmascript)");
const proxy_event_emitter_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/utils/proxy-event-emitter.js [app-client] (ecmascript)");
class TrezorConnectDynamic {
    eventEmitter;
    currentTarget;
    implementations;
    getInitTarget;
    handleBeforeCall;
    handleErrorFallback;
    lastSettings;
    callPending = 0;
    beforeCallSynchronize = (0, utils_1.getSynchronize)();
    constructor({ implementations, getInitTarget, handleBeforeCall, handleErrorFallback }){
        this.implementations = implementations;
        this.currentTarget = this.implementations[0].type;
        this.getInitTarget = getInitTarget;
        this.handleBeforeCall = handleBeforeCall;
        this.handleErrorFallback = handleErrorFallback;
        this.eventEmitter = new proxy_event_emitter_1.ProxyEventEmitter(this.implementations.map((impl)=>impl.impl.eventEmitter));
    }
    getTarget() {
        return this.implementations.find((impl)=>impl.type === this.currentTarget).impl;
    }
    getTargetType() {
        return this.currentTarget;
    }
    async switchTarget(target) {
        if (this.currentTarget === target) {
            return;
        }
        if (!this.lastSettings) {
            throw constants_1.ERRORS.TypedError('Init_ManifestMissing');
        }
        const oldTargetType = this.getTargetType();
        const oldTarget = this.getTarget();
        try {
            this.currentTarget = target;
            await this.getTarget().init(this.lastSettings);
            await oldTarget.dispose();
        } catch  {
            this.currentTarget = oldTargetType;
        }
    }
    manifest(manifest) {
        this.lastSettings = {
            ...this.lastSettings,
            manifest
        };
        this.getTarget().manifest(manifest);
    }
    async init(settings) {
        if (!settings?.manifest) {
            throw constants_1.ERRORS.TypedError('Init_ManifestMissing');
        }
        this.lastSettings = settings;
        this.currentTarget = this.getInitTarget(settings);
        this.callPending = 0;
        try {
            return await this.getTarget().init(this.lastSettings);
        } catch (error) {
            if (await this.handleErrorFallback(error.code)) {
                return;
            }
            throw error;
        }
    }
    setTransports({ transports }) {
        this.lastSettings = {
            ...this.lastSettings,
            transports
        };
        this.getTarget().setTransports({
            transports
        });
    }
    async call(params) {
        try {
            if (this.callPending === 0) {
                await this.beforeCallSynchronize(async ()=>{
                    this.callPending++;
                    await this.handleBeforeCall();
                });
            }
            const response = await this.getTarget().call(params);
            if (!response.success) {
                if (await this.handleErrorFallback(response.payload.code)) {
                    return await this.getTarget().call(params);
                }
            }
            return response;
        } catch (error) {
            return (0, events_1.createErrorMessage)(error);
        } finally{
            this.callPending--;
        }
    }
    requestLogin(params) {
        return this.getTarget().requestLogin(params);
    }
    uiResponse(params) {
        return this.getTarget().uiResponse(params);
    }
    cancel(error) {
        return this.getTarget().cancel(error);
    }
    dispose() {
        this.eventEmitter.removeAllListeners();
        this.callPending = 0;
        return this.getTarget().dispose();
    }
}
exports.TrezorConnectDynamic = TrezorConnectDynamic; //# sourceMappingURL=dynamic.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/data/thpSettings.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseThpSettings = void 0;
const parseThpSettings = ({ manifest, thp })=>{
    const settings = {
        pairingMethods: []
    };
    if (Array.isArray(thp?.pairingMethods)) {
        settings.pairingMethods = thp.pairingMethods;
    } else {
        settings.pairingMethods = [
            'CodeEntry'
        ];
    }
    if (typeof thp?.hostName === 'string') {
        settings.hostName = thp.hostName;
    }
    if (typeof thp?.appName === 'string') {
        settings.appName = thp.appName;
    } else if (typeof manifest?.appName === 'string') {
        settings.appName = manifest?.appName;
    }
    if (typeof thp?.staticKey === 'string') {
        settings.staticKey = thp.staticKey;
    }
    if (Array.isArray(thp?.knownCredentials)) {
        settings.knownCredentials = thp.knownCredentials.flatMap((k)=>{
            if (k && typeof k === 'object' && typeof k.credential === 'string' && typeof k.trezor_static_public_key === 'string') {
                return k;
            }
            return [];
        });
    }
    return settings;
};
exports.parseThpSettings = parseThpSettings; //# sourceMappingURL=thpSettings.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/data/version.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEEPLINK_VERSION = exports.CONTENT_SCRIPT_VERSION = exports.DEFAULT_DOMAIN = exports.DEFAULT_DOMAIN_MAJOR_VER = exports.VERSION = void 0;
exports.VERSION = '9.6.4';
const versionN = exports.VERSION.split('.').map((s)=>parseInt(s, 10));
const isBeta = exports.VERSION.includes('beta');
exports.DEFAULT_DOMAIN_MAJOR_VER = `https://connect.trezor.io/${versionN[0]}/`;
exports.DEFAULT_DOMAIN = isBeta ? `https://connect.trezor.io/${exports.VERSION}/` : exports.DEFAULT_DOMAIN_MAJOR_VER;
exports.CONTENT_SCRIPT_VERSION = 1;
exports.DEEPLINK_VERSION = 1; //# sourceMappingURL=version.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/data/connectSettings.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseConnectSettings = exports.corsValidator = exports.parseLocalFirmwares = exports.DEFAULT_PRIORITY = void 0;
const thpSettings_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/data/thpSettings.js [app-client] (ecmascript)");
const version_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/data/version.js [app-client] (ecmascript)");
exports.DEFAULT_PRIORITY = 2;
const initialSettings = {
    configSrc: './data/config.json',
    version: version_1.VERSION,
    debug: false,
    priority: exports.DEFAULT_PRIORITY,
    trustedHost: true,
    connectSrc: version_1.DEFAULT_DOMAIN,
    iframeSrc: `${version_1.DEFAULT_DOMAIN}iframe.html`,
    popup: false,
    popupSrc: `${version_1.DEFAULT_DOMAIN}popup.html`,
    webusbSrc: `${version_1.DEFAULT_DOMAIN}webusb.html`,
    transports: undefined,
    pendingTransportEvent: true,
    env: 'node',
    lazyLoad: false,
    timestamp: new Date().getTime(),
    interactionTimeout: 1200,
    sharedLogger: true,
    deeplinkUrl: `${version_1.DEFAULT_DOMAIN}deeplink/${version_1.DEEPLINK_VERSION}/`,
    transportReconnect: true
};
const parseManifest = (manifest)=>{
    if (!manifest) return;
    if (typeof manifest.email !== 'string') return;
    if (typeof manifest.appUrl !== 'string') return;
    if (typeof manifest.appName !== 'undefined' && typeof manifest.appName !== 'string') return;
    if (typeof manifest.appIcon !== 'undefined' && typeof manifest.appIcon !== 'string') return;
    return {
        email: manifest.email,
        appUrl: manifest.appUrl,
        appName: manifest.appName,
        appIcon: manifest.appIcon
    };
};
const parseLocalFirmwares = (localFirmwares)=>{
    if (!localFirmwares) return;
    if (typeof localFirmwares.firmwareDir !== 'string') return;
    if (!Array.isArray(localFirmwares.firmwareList)) return;
    return {
        firmwareDir: localFirmwares.firmwareDir,
        firmwareList: localFirmwares.firmwareList
    };
};
exports.parseLocalFirmwares = parseLocalFirmwares;
const corsValidator = (url)=>{
    if (typeof url !== 'string') return;
    if (url === '../') return url;
    if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*trezor\.io\//)) return url;
    if (url.match(/^https?:\/\/localhost:[58][0-9]{3}\//)) return url;
    if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*sldev\.cz\//)) return url;
    if (url.match(/^https?:\/\/([A-Za-z0-9\-_]+\.)*trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad\.onion\//)) return url;
};
exports.corsValidator = corsValidator;
const parseConnectSettings = (input = {})=>{
    const settings = {
        ...initialSettings
    };
    if ('debug' in input) {
        if (typeof input.debug === 'boolean') {
            settings.debug = input.debug;
        } else if (typeof input.debug === 'string') {
            settings.debug = input.debug === 'true';
        }
    }
    if (input.trustedHost === false) {
        settings.trustedHost = input.trustedHost;
    }
    if (typeof input.connectSrc === 'string') {
        settings.connectSrc = (0, exports.corsValidator)(input.connectSrc);
    } else if (settings.trustedHost) {
        settings.connectSrc = input.connectSrc;
    }
    const src = settings.connectSrc || version_1.DEFAULT_DOMAIN;
    settings.iframeSrc = `${src}iframe.html`;
    settings.popupSrc = `${src}popup.html`;
    settings.webusbSrc = `${src}webusb.html`;
    if (typeof input.transportReconnect === 'boolean') {
        settings.transportReconnect = input.transportReconnect;
    }
    if (typeof input.localFirmwares === 'object') {
        settings.localFirmwares = (0, exports.parseLocalFirmwares)(input.localFirmwares);
    }
    if (typeof input.firmwareUpdateSource === 'string') {
        settings.firmwareUpdateSource = input.firmwareUpdateSource;
    }
    if (Array.isArray(input.transports)) {
        settings.transports = input.transports;
    }
    if (typeof input.popup === 'boolean') {
        settings.popup = input.popup;
    }
    if (typeof input.lazyLoad === 'boolean') {
        settings.lazyLoad = input.lazyLoad;
    }
    if (typeof input.pendingTransportEvent === 'boolean') {
        settings.pendingTransportEvent = input.pendingTransportEvent;
    }
    if (typeof input.extension === 'string') {
        settings.extension = input.extension;
    }
    if (typeof input.env === 'string') {
        settings.env = input.env;
    }
    if (typeof input.timestamp === 'number') {
        settings.timestamp = input.timestamp;
    }
    if (typeof input.interactionTimeout === 'number') {
        settings.interactionTimeout = input.interactionTimeout;
    }
    if (typeof input.manifest === 'object') {
        settings.manifest = parseManifest(input.manifest);
    }
    if (typeof input.sharedLogger === 'boolean') {
        settings.sharedLogger = input.sharedLogger;
    }
    if (typeof input.coreMode === 'string' && [
        'auto',
        'popup',
        'iframe',
        'suite-desktop'
    ].includes(input.coreMode)) {
        settings.coreMode = input.coreMode;
    }
    if (typeof input._extendWebextensionLifetime === 'boolean') {
        settings._extendWebextensionLifetime = input._extendWebextensionLifetime;
    }
    if (typeof input.binFilesBaseUrl === 'string') {
        settings.binFilesBaseUrl = input.binFilesBaseUrl;
    }
    if (typeof input.enableFirmwareHashCheck === 'boolean') {
        settings.enableFirmwareHashCheck = Boolean(input.enableFirmwareHashCheck);
    }
    if (typeof input.firmwareHashCheckTimeouts === 'object' && input.firmwareHashCheckTimeouts !== null) {
        settings.firmwareHashCheckTimeouts = input.firmwareHashCheckTimeouts;
    }
    if (typeof input.npmVersion === 'string') {
        settings.npmVersion = input.npmVersion;
    }
    settings.thp = (0, thpSettings_1.parseThpSettings)(input);
    return settings;
};
exports.parseConnectSettings = parseConnectSettings; //# sourceMappingURL=connectSettings.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/data/config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.config = void 0;
const constants_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+transport@1.5.4_tslib@2.8.1/node_modules/@trezor/transport/lib/constants.js [app-client] (ecmascript)");
exports.config = {
    webusb: constants_1.TREZOR_USB_DESCRIPTORS,
    whitelist: [
        {
            origin: 'chrome-extension://imloifkgjagghnncjkhggdhalmcnfklk',
            priority: 1
        },
        {
            origin: 'chrome-extension://niebkpllfhmpfbffbfifagfgoamhpflf',
            priority: 1
        },
        {
            origin: 'file://',
            priority: 2
        },
        {
            origin: 'trezor.io',
            priority: 0
        },
        {
            origin: 'sldev.cz',
            priority: 0
        },
        {
            origin: 'localhost',
            priority: 0
        },
        {
            origin: 'trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad.onion',
            priority: 0
        }
    ],
    management: [
        {
            origin: 'trezor.io'
        },
        {
            origin: 'sldev.cz'
        },
        {
            origin: 'localhost'
        }
    ],
    knownHosts: [
        {
            origin: 'imloifkgjagghnncjkhggdhalmcnfklk',
            label: 'Trezor Password Manager (Develop)'
        },
        {
            origin: 'niebkpllfhmpfbffbfifagfgoamhpflf',
            label: 'Trezor Password Manager'
        },
        {
            origin: 'mnpfhpndmjholfdlhpkjfmjkgppmodaf',
            label: 'MetaMask'
        },
        {
            origin: 'webextension@metamask.io',
            label: 'MetaMask'
        },
        {
            origin: 'nkbihfbeogaeaoehlefnkodbefgpgknn',
            label: 'MetaMask'
        },
        {
            origin: 'bfibaipbbpipfifeecgfehbpmfhdakgo',
            label: 'Nightly DEV'
        },
        {
            origin: 'fiikommddbeccaoicoejoniammnalkfa',
            label: 'Nightly'
        },
        {
            origin: 'bpcdaglidgnlggelgbjfagekoapjmccp',
            label: 'Rainbow DEV'
        },
        {
            origin: 'opfgelmcmbiajamepnmloijbpoleiama',
            label: 'Rainbow'
        },
        {
            origin: 'acmacodkjbdgmoleebolmdjonilkdbch',
            label: 'Rabby'
        },
        {
            origin: 'ehnpnhnhcickeknioaiodjmielfaoajd',
            label: 'Ambire DEV'
        },
        {
            origin: 'ehgjhhccekdedpbkifaojjaefeohnoea',
            label: 'Ambire'
        },
        {
            origin: 'file://',
            label: ' '
        }
    ],
    onionDomains: {
        'trezor.io': 'trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad.onion'
    },
    supportedBrowsers: {
        chrome: {
            version: 59,
            download: 'https://www.google.com/chrome/',
            update: 'https://support.google.com/chrome/answer/95414'
        },
        mobilechrome: {
            version: 59,
            download: 'https://www.google.com/chrome/',
            update: 'https://support.google.com/chrome/answer/95414'
        },
        chromium: {
            version: 59,
            download: 'https://www.chromium.org/',
            update: 'https://www.chromium.org/'
        },
        electron: {
            version: 0,
            download: 'https://www.electronjs.org/',
            update: 'https://www.electronjs.org/'
        },
        firefox: {
            version: 54,
            download: 'https://www.mozilla.org/en-US/firefox/new/',
            update: 'https://support.mozilla.org/en-US/kb/update-firefox-latest-version'
        },
        mobilefirefox: {
            version: 54,
            download: 'https://www.mozilla.org/en-US/firefox/new/',
            update: 'https://support.mozilla.org/en-US/kb/update-firefox-latest-version'
        },
        brave: {
            version: 59,
            download: 'https://brave.com/download/',
            update: 'https://brave.com/download/'
        },
        edge: {
            version: 79,
            download: 'https://www.microsoft.com/en-us/edge',
            update: 'https://www.microsoft.com/en-us/edge'
        },
        opera: {
            version: 95,
            download: 'https://www.opera.com/download',
            update: 'https://www.opera.com/download'
        }
    },
    supportedFirmware: [
        {
            coin: [
                'xrp',
                'txrp'
            ],
            methods: [
                'getAccountInfo'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.1.0'
            },
            max: undefined,
            comment: [
                "Since firmware 2.1.0 there is a new protobuf field 'destination_tag' in RippleSignTx"
            ]
        },
        {
            coin: [
                'bnb'
            ],
            min: {
                T1B1: '1.9.0',
                T2T1: '2.3.0'
            },
            comment: [
                'There were protobuf backwards incompatible changes with introduction of 1.9.0/2.3.0 firmwares'
            ]
        },
        {
            coin: [
                'eth',
                'tsep',
                'thod'
            ],
            min: {
                T1B1: '1.8.0',
                T2T1: '2.1.0'
            },
            comment: [
                'There were protobuf backwards incompatible changes.'
            ]
        },
        {
            coin: [
                'ada',
                'tada'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.4.3'
            },
            comment: [
                'Since 2.4.3 there is initialize.derive_cardano message'
            ]
        },
        {
            methods: [
                'rippleGetAddress',
                'rippleSignTransaction'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.1.0'
            },
            comment: [
                "Since firmware 2.1.0 there is a new protobuf field 'destination_tag' in RippleSignTx"
            ]
        },
        {
            methods: [
                'cardanoGetAddress',
                'cardanoGetPublicKey'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.4.3'
            },
            comment: [
                'Since 2.4.3 Cardano derivation behavior has changed'
            ]
        },
        {
            methods: [
                'cardanoSignTransaction'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.6.0'
            },
            comment: [
                'Before 2.6.0 not all Cardano transactions were supported'
            ]
        },
        {
            methods: [
                'cardanoGetNativeScriptHash'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.4.3'
            },
            comment: [
                'Since 2.4.3 Cardano derivation behavior has changed'
            ]
        },
        {
            methods: [
                'tezosSignTransaction'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.1.8'
            },
            comment: [
                'Since 2.1.8 there are new protobuf fields in tezos transaction (Babylon fork)'
            ]
        },
        {
            methods: [
                'stellarSignTransaction'
            ],
            min: {
                T1B1: '1.9.0',
                T2T1: '2.3.0'
            },
            comment: [
                'There were protobuf backwards incompatible changes with introduction of 1.9.0/2.3.0 firmwares'
            ]
        },
        {
            capabilities: [
                'replaceTransaction',
                'amountUnit'
            ],
            min: {
                T1B1: '1.9.4',
                T2T1: '2.3.5'
            },
            comment: [
                'new sign tx process since 1.9.4/2.3.5'
            ]
        },
        {
            capabilities: [
                'decreaseOutput'
            ],
            min: {
                T1B1: '1.10.0',
                T2T1: '2.4.0'
            },
            comment: [
                'allow reduce output in RBF transaction since 1.10.0/2.4.0'
            ]
        },
        {
            capabilities: [
                'eip1559'
            ],
            min: {
                T1B1: '1.10.4',
                T2T1: '2.4.2'
            },
            comment: [
                'new eth transaction pricing mechanism (EIP1559) since 1.10.4/2.4.2'
            ]
        },
        {
            capabilities: [
                'taproot',
                'signMessageNoScriptType'
            ],
            min: {
                T1B1: '1.10.4',
                T2T1: '2.4.3'
            },
            comment: [
                'new btc accounts taproot since 1.10.4/2.4.3 (BTC + TEST only)',
                'SignMessage with no_script_type support'
            ]
        },
        {
            coin: [
                'dcr',
                'tdcr'
            ],
            methods: [
                'signTransaction'
            ],
            min: {
                T1B1: '1.10.1',
                T2T1: '2.4.0'
            },
            comment: [
                ''
            ]
        },
        {
            methods: [
                'ethereumSignTypedData'
            ],
            min: {
                T1B1: '1.10.5',
                T2T1: '2.4.3'
            },
            comment: [
                'EIP-712 typed signing support added in 1.10.5/2.4.3'
            ]
        },
        {
            capabilities: [
                'eip712-domain-only'
            ],
            min: {
                T1B1: '1.10.6',
                T2T1: '2.4.4'
            },
            comment: [
                'EIP-712 domain-only signing, when primaryType=EIP712Domain'
            ]
        },
        {
            capabilities: [
                'coinjoin'
            ],
            methods: [
                'authorizeCoinjoin',
                'cancelCoinjoinAuthorization',
                'getOwnershipId',
                'getOwnershipProof',
                'setBusy',
                'unlockPath'
            ],
            min: {
                T1B1: '1.12.1',
                T2T1: '2.5.3'
            }
        },
        {
            capabilities: [
                'tutorial'
            ],
            methods: [
                'showDeviceTutorial'
            ],
            min: {
                T1B1: '0',
                T2T1: '0',
                T3T1: '2.8.0'
            }
        },
        {
            methods: [
                'authenticateDevice'
            ],
            min: {
                T1B1: '0',
                T2T1: '0',
                T3T1: '2.8.0'
            }
        },
        {
            capabilities: [
                'getFirmwareHash'
            ],
            methods: [
                'getFirmwareHash'
            ],
            min: {
                T1B1: '1.11.1',
                T2T1: '2.5.1'
            }
        },
        {
            methods: [
                'solanaGetPublicKey',
                'solanaGetAddress',
                'solanaSignTransaction'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.6.4',
                T2B1: '2.6.4'
            }
        },
        {
            capabilities: [
                'chunkify'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.6.3',
                T2B1: '2.6.3'
            },
            comment: [
                "Since firmware 2.6.3 there is a new protobuf field 'chunkify' in almost all getAddress and signTx methods"
            ]
        },
        {
            methods: [
                'changeLanguage'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.7.0',
                T2B1: '2.7.0'
            }
        },
        {
            capabilities: [
                'entropyCheck'
            ],
            min: {
                T1B1: '1.13.1',
                T2T1: '2.8.7',
                T2B1: '2.8.7',
                T3B1: '2.8.7',
                T3T1: '2.8.7'
            }
        },
        {
            capabilities: [
                'evmApproval'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.9.0',
                T2B1: '2.9.0',
                T3B1: '2.9.0',
                T3T1: '2.9.0'
            },
            comment: [
                'EVM approval flow for ERC20 tokens, introduced in firmware 2.9.0'
            ]
        },
        {
            capabilities: [
                'slip24'
            ],
            methods: [
                'getNonce'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.9.1',
                T2B1: '2.9.1',
                T3B1: '2.9.1',
                T3T1: '2.9.1'
            },
            comment: [
                'Since firmware 2.9.1 SLIP-24 is supported'
            ]
        },
        {
            methods: [
                'cardanoSignMessage'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.9.1',
                T2B1: '2.9.1',
                T3B1: '2.9.1',
                T3T1: '2.9.1'
            },
            comment: [
                'Cardano SignMessage call added in 2.9.1'
            ]
        },
        {
            capabilities: [
                'evolu'
            ],
            methods: [
                'evoluGetNode'
            ],
            min: {
                T1B1: '0',
                T2T1: '2.9.2',
                T2B1: '2.9.2',
                T3B1: '2.9.2',
                T3T1: '2.9.2'
            }
        }
    ]
}; //# sourceMappingURL=config.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/utils/debug.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLog = exports.enableLogByPrefix = exports.enableLog = exports.setLogWriter = exports.initLog = void 0;
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+utils@9.4.4_tslib@2.8.1/node_modules/@trezor/utils/lib/index.js [app-client] (ecmascript)");
const green = '#bada55';
const blue = '#20abd8';
const orange = '#f4a744';
const yellow = '#fbd948';
const colors = {
    '@trezor/connect': `color: ${blue}; background: #000;`,
    '@trezor/connect-web': `color: ${blue}; background: #000;`,
    '@trezor/connect-webextension': `color: ${blue}; background: #000;`,
    IFrame: `color: ${orange}; background: #000;`,
    Core: `color: ${orange}; background: #000;`,
    DeviceList: `color: ${green}; background: #000;`,
    Device: `color: ${green}; background: #000;`,
    DeviceCommands: `color: ${green}; background: #000;`,
    '@trezor/transport': `color: ${green}; background: #000;`,
    InteractionTimeout: `color: ${green}; background: #000;`,
    '@trezor/connect-popup': `color: ${yellow}; background: #000;`
};
const logsManager = new utils_1.LogsManager({
    colors
});
exports.initLog = logsManager.initLog.bind(logsManager);
exports.setLogWriter = logsManager.setLogWriter.bind(logsManager);
exports.enableLog = logsManager.enableLog.bind(logsManager);
exports.enableLogByPrefix = logsManager.enableLogByPrefix.bind(logsManager);
exports.getLog = logsManager.getLog.bind(logsManager); //# sourceMappingURL=debug.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/utils/urlUtils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOnionDomain = exports.getHost = exports.getOrigin = void 0;
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+utils@9.4.4_tslib@2.8.1/node_modules/@trezor/utils/lib/index.js [app-client] (ecmascript)");
const getOrigin = (url)=>{
    if (typeof url !== 'string') return 'unknown';
    if (url.indexOf('file://') === 0) return 'file://';
    const [origin] = url.match(/^https?:\/\/[^/]+/) ?? [];
    return origin ?? 'unknown';
};
exports.getOrigin = getOrigin;
const getHost = (url)=>{
    if (typeof url !== 'string') return;
    const [, , uri] = url.match(/^(https?):\/\/([^:/]+)?/i) ?? [];
    if (uri) {
        const parts = uri.split('.');
        if (parts[parts.length - 1] === 'localhost') return 'localhost';
        return parts.length > 2 ? parts.slice(parts.length - 2, parts.length).join('.') : uri;
    }
};
exports.getHost = getHost;
const getOnionDomain = (url, dict)=>{
    if (Array.isArray(url)) return url.map((u)=>(0, utils_1.urlToOnion)(u, dict) ?? u);
    if (typeof url === 'string') return (0, utils_1.urlToOnion)(url, dict) ?? url;
    return url;
};
exports.getOnionDomain = getOnionDomain; //# sourceMappingURL=urlUtils.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/account.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=account.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/fees.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelectFeeLevel = exports.FeeLevel = exports.FeeInfo = void 0;
const schema_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+schema-utils@1.3.4_tslib@2.8.1/node_modules/@trezor/schema-utils/lib/index.js [app-client] (ecmascript)");
exports.FeeInfo = schema_utils_1.Type.Object({
    blockTime: schema_utils_1.Type.Number(),
    minFee: schema_utils_1.Type.Number(),
    maxFee: schema_utils_1.Type.Number(),
    minPriorityFee: schema_utils_1.Type.Number(),
    dustLimit: schema_utils_1.Type.Number()
});
exports.FeeLevel = schema_utils_1.Type.Object({
    label: schema_utils_1.Type.Union([
        schema_utils_1.Type.Literal('high'),
        schema_utils_1.Type.Literal('normal'),
        schema_utils_1.Type.Literal('economy'),
        schema_utils_1.Type.Literal('low'),
        schema_utils_1.Type.Literal('custom')
    ]),
    blocks: schema_utils_1.Type.Number(),
    feePerUnit: schema_utils_1.Type.String(),
    feePerTx: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    feeLimit: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    baseFeePerGas: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    maxFeePerGas: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    maxPriorityFeePerGas: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.SelectFeeLevel = schema_utils_1.Type.Union([
    schema_utils_1.Type.Object({
        name: schema_utils_1.Type.String(),
        fee: schema_utils_1.Type.Literal('0'),
        feePerByte: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
        blocks: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
        disabled: schema_utils_1.Type.Literal(true)
    }),
    schema_utils_1.Type.Object({
        name: schema_utils_1.Type.String(),
        fee: schema_utils_1.Type.String(),
        feePerByte: schema_utils_1.Type.String(),
        blocks: schema_utils_1.Type.Number(),
        minutes: schema_utils_1.Type.Number(),
        total: schema_utils_1.Type.String()
    })
]); //# sourceMappingURL=fees.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/coinInfo.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CoinInfo = exports.MiscNetworkInfo = exports.EthereumNetworkInfoDefinitionValues = exports.EthereumNetworkInfo = exports.BitcoinNetworkInfo = exports.BlockchainLink = exports.CoinSupport = exports.CoinObj = exports.Network = exports.Bip32 = void 0;
const device_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+device-utils@1.1.4/node_modules/@trezor/device-utils/lib/index.js [app-client] (ecmascript)");
const schema_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+schema-utils@1.3.4_tslib@2.8.1/node_modules/@trezor/schema-utils/lib/index.js [app-client] (ecmascript)");
const fees_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/fees.js [app-client] (ecmascript)");
exports.Bip32 = schema_utils_1.Type.Object({
    public: schema_utils_1.Type.Number(),
    private: schema_utils_1.Type.Number()
});
exports.Network = schema_utils_1.Type.Object({
    messagePrefix: schema_utils_1.Type.String(),
    bech32: schema_utils_1.Type.String(),
    bip32: exports.Bip32,
    pubKeyHash: schema_utils_1.Type.Number(),
    scriptHash: schema_utils_1.Type.Number(),
    wif: schema_utils_1.Type.Number(),
    forkId: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.CoinObj = schema_utils_1.Type.Object({
    coin: schema_utils_1.Type.String(),
    identity: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CoinSupport = schema_utils_1.Type.Composite([
    schema_utils_1.Type.Object({
        connect: schema_utils_1.Type.Boolean()
    }),
    schema_utils_1.Type.Record(schema_utils_1.Type.KeyOfEnum(device_utils_1.DeviceModelInternal), schema_utils_1.Type.Union([
        schema_utils_1.Type.String(),
        schema_utils_1.Type.Literal(false)
    ]))
]);
exports.BlockchainLink = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.String(),
    url: schema_utils_1.Type.Array(schema_utils_1.Type.String())
});
const Common = schema_utils_1.Type.Object({
    label: schema_utils_1.Type.String(),
    name: schema_utils_1.Type.String(),
    shortcut: schema_utils_1.Type.String(),
    slip44: schema_utils_1.Type.Number(),
    support: exports.CoinSupport,
    decimals: schema_utils_1.Type.Number(),
    blockchainLink: schema_utils_1.Type.Optional(exports.BlockchainLink),
    blockTime: schema_utils_1.Type.Number(),
    minFee: schema_utils_1.Type.Number(),
    maxFee: schema_utils_1.Type.Number(),
    minPriorityFee: schema_utils_1.Type.Number(),
    defaultFees: schema_utils_1.Type.Array(fees_1.FeeLevel)
});
exports.BitcoinNetworkInfo = schema_utils_1.Type.Intersect([
    Common,
    schema_utils_1.Type.Object({
        type: schema_utils_1.Type.Literal('bitcoin'),
        cashAddrPrefix: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        curveName: schema_utils_1.Type.String(),
        dustLimit: schema_utils_1.Type.Number(),
        forceBip143: schema_utils_1.Type.Boolean(),
        hashGenesisBlock: schema_utils_1.Type.String(),
        maxAddressLength: schema_utils_1.Type.Number(),
        maxFeeSatoshiKb: schema_utils_1.Type.Number(),
        minAddressLength: schema_utils_1.Type.Number(),
        minFeeSatoshiKb: schema_utils_1.Type.Number(),
        segwit: schema_utils_1.Type.Boolean(),
        xPubMagic: schema_utils_1.Type.Number(),
        xPubMagicSegwitNative: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        xPubMagicSegwit: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        taproot: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
        network: exports.Network,
        isBitcoin: schema_utils_1.Type.Boolean()
    })
]);
exports.EthereumNetworkInfo = schema_utils_1.Type.Intersect([
    Common,
    schema_utils_1.Type.Object({
        type: schema_utils_1.Type.Literal('ethereum'),
        chainId: schema_utils_1.Type.Number(),
        network: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined())
    })
]);
exports.EthereumNetworkInfoDefinitionValues = schema_utils_1.Type.Omit(exports.EthereumNetworkInfo, [
    'minFee',
    'maxFee',
    'defaultFees',
    'minPriorityFee',
    'blockTime'
]);
exports.MiscNetworkInfo = schema_utils_1.Type.Intersect([
    Common,
    schema_utils_1.Type.Object({
        type: schema_utils_1.Type.Union([
            schema_utils_1.Type.Literal('misc'),
            schema_utils_1.Type.Literal('nem')
        ]),
        curve: schema_utils_1.Type.String(),
        network: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined())
    })
]);
exports.CoinInfo = schema_utils_1.Type.Union([
    exports.BitcoinNetworkInfo,
    exports.EthereumNetworkInfo,
    exports.MiscNetworkInfo
]); //# sourceMappingURL=coinInfo.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/device.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.asBluetoothDeviceId = exports.asDeviceUniquePath = void 0;
const asDeviceUniquePath = (id)=>id;
exports.asDeviceUniquePath = asDeviceUniquePath;
const asBluetoothDeviceId = (id)=>id;
exports.asBluetoothDeviceId = asBluetoothDeviceId; //# sourceMappingURL=device.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/firmware.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=firmware.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PublicKey = exports.GetPublicKey = exports.GetAddress = exports.DerivationPath = exports.Bundle = void 0;
const schema_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+schema-utils@1.3.4_tslib@2.8.1/node_modules/@trezor/schema-utils/lib/index.js [app-client] (ecmascript)");
const Bundle = (type)=>schema_utils_1.Type.Object({
        bundle: schema_utils_1.Type.Array(type, {
            minItems: 1
        })
    });
exports.Bundle = Bundle;
exports.DerivationPath = schema_utils_1.Type.Union([
    schema_utils_1.Type.String(),
    schema_utils_1.Type.Array(schema_utils_1.Type.Number())
], {
    description: 'Derivation Path (BIP32).',
    $id: 'DerivationPath'
});
exports.GetAddress = schema_utils_1.Type.Object({
    path: exports.DerivationPath,
    address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    showOnTrezor: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean({
        default: true
    })),
    chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
    useEventListener: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.GetPublicKey = schema_utils_1.Type.Object({
    path: exports.DerivationPath,
    showOnTrezor: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
    suppressBackupWarning: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
    chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.PublicKey = schema_utils_1.Type.Object({
    publicKey: schema_utils_1.Type.String(),
    path: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
    serializedPath: schema_utils_1.Type.String()
}); //# sourceMappingURL=params.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/settings.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=settings.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/cardano/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardanoSignedMessage = exports.CardanoMessageHeaders = exports.CardanoMessageUnprotectedHeaders = exports.CardanoMessageProtectedHeaders = exports.CardanoSignMessage = exports.CardanoSignedTxData = exports.CardanoAuxiliaryDataSupplement = exports.CardanoSignedTxWitness = exports.CardanoSignTransactionExtended = exports.CardanoSignTransaction = exports.CardanoAuxiliaryData = exports.CardanoCVoteRegistrationParameters = exports.CardanoCVoteRegistrationDelegation = exports.CardanoReferenceInput = exports.CardanoRequiredSigner = exports.CardanoCollateralInput = exports.CardanoMint = exports.CardanoWithdrawal = exports.CardanoCertificate = exports.CardanoDRep = exports.CardanoPoolParameters = exports.CardanoPoolMargin = exports.CardanoPoolMetadata = exports.CardanoPoolRelay = exports.CardanoPoolOwner = exports.CardanoOutput = exports.CardanoAssetGroup = exports.CardanoToken = exports.CardanoInput = exports.CardanoGetPublicKey = exports.CardanoNativeScriptHash = exports.CardanoGetNativeScriptHash = exports.CardanoNativeScript = exports.CardanoGetAddress = exports.CardanoAddressParameters = exports.CardanoCertificatePointer = void 0;
const schema_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+schema-utils@1.3.4_tslib@2.8.1/node_modules/@trezor/schema-utils/lib/index.js [app-client] (ecmascript)");
const constants_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/index.js [app-client] (ecmascript)");
const params_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/params.js [app-client] (ecmascript)");
exports.CardanoCertificatePointer = schema_utils_1.Type.Object({
    blockIndex: schema_utils_1.Type.Number(),
    txIndex: schema_utils_1.Type.Number(),
    certificateIndex: schema_utils_1.Type.Number()
});
exports.CardanoAddressParameters = schema_utils_1.Type.Object({
    addressType: constants_1.PROTO.EnumCardanoAddressType,
    path: schema_utils_1.Type.Optional(params_1.DerivationPath),
    stakingPath: schema_utils_1.Type.Optional(params_1.DerivationPath),
    stakingKeyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    certificatePointer: schema_utils_1.Type.Optional(exports.CardanoCertificatePointer),
    paymentScriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    stakingScriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoGetAddress = schema_utils_1.Type.Object({
    addressParameters: exports.CardanoAddressParameters,
    protocolMagic: schema_utils_1.Type.Number(),
    networkId: schema_utils_1.Type.Number(),
    address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    showOnTrezor: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
    derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType),
    chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.CardanoNativeScript = schema_utils_1.Type.Recursive((This)=>schema_utils_1.Type.Object({
        type: constants_1.PROTO.EnumCardanoNativeScriptType,
        scripts: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(This)),
        keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        keyPath: schema_utils_1.Type.Optional(params_1.DerivationPath),
        requiredSignaturesCount: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        invalidBefore: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        invalidHereafter: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }));
exports.CardanoGetNativeScriptHash = schema_utils_1.Type.Object({
    script: exports.CardanoNativeScript,
    displayFormat: constants_1.PROTO.EnumCardanoNativeScriptHashDisplayFormat,
    derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType)
});
exports.CardanoNativeScriptHash = schema_utils_1.Type.Object({
    scriptHash: schema_utils_1.Type.String()
});
exports.CardanoGetPublicKey = schema_utils_1.Type.Intersect([
    params_1.GetPublicKey,
    schema_utils_1.Type.Object({
        derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType)
    })
]);
exports.CardanoInput = schema_utils_1.Type.Object({
    path: schema_utils_1.Type.Optional(params_1.DerivationPath),
    prev_hash: schema_utils_1.Type.String(),
    prev_index: schema_utils_1.Type.Number()
});
exports.CardanoToken = schema_utils_1.Type.Object({
    assetNameBytes: schema_utils_1.Type.String(),
    amount: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    mintAmount: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoAssetGroup = schema_utils_1.Type.Object({
    policyId: schema_utils_1.Type.String(),
    tokenAmounts: schema_utils_1.Type.Array(exports.CardanoToken)
});
exports.CardanoOutput = schema_utils_1.Type.Intersect([
    schema_utils_1.Type.Union([
        schema_utils_1.Type.Object({
            addressParameters: exports.CardanoAddressParameters
        }),
        schema_utils_1.Type.Object({
            address: schema_utils_1.Type.String()
        })
    ]),
    schema_utils_1.Type.Object({
        amount: schema_utils_1.Type.String(),
        tokenBundle: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoAssetGroup)),
        datumHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        format: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoTxOutputSerializationFormat),
        inlineDatum: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        referenceScript: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    })
]);
exports.CardanoPoolOwner = schema_utils_1.Type.Object({
    stakingKeyPath: schema_utils_1.Type.Optional(params_1.DerivationPath),
    stakingKeyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoPoolRelay = schema_utils_1.Type.Object({
    type: constants_1.PROTO.EnumCardanoPoolRelayType,
    ipv4Address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    ipv6Address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    port: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
    hostName: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoPoolMetadata = schema_utils_1.Type.Object({
    url: schema_utils_1.Type.String(),
    hash: schema_utils_1.Type.String()
});
exports.CardanoPoolMargin = schema_utils_1.Type.Object({
    numerator: schema_utils_1.Type.String(),
    denominator: schema_utils_1.Type.String()
});
exports.CardanoPoolParameters = schema_utils_1.Type.Object({
    poolId: schema_utils_1.Type.String(),
    vrfKeyHash: schema_utils_1.Type.String(),
    pledge: schema_utils_1.Type.String(),
    cost: schema_utils_1.Type.String(),
    margin: exports.CardanoPoolMargin,
    rewardAccount: schema_utils_1.Type.String(),
    owners: schema_utils_1.Type.Array(exports.CardanoPoolOwner, {
        minItems: 1
    }),
    relays: schema_utils_1.Type.Array(exports.CardanoPoolRelay),
    metadata: schema_utils_1.Type.Optional(exports.CardanoPoolMetadata)
});
exports.CardanoDRep = schema_utils_1.Type.Object({
    type: constants_1.PROTO.EnumCardanoDRepType,
    keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    scriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoCertificate = schema_utils_1.Type.Object({
    type: constants_1.PROTO.EnumCardanoCertificateType,
    path: schema_utils_1.Type.Optional(params_1.DerivationPath),
    pool: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    poolParameters: schema_utils_1.Type.Optional(exports.CardanoPoolParameters),
    scriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    deposit: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    dRep: schema_utils_1.Type.Optional(exports.CardanoDRep)
});
exports.CardanoWithdrawal = schema_utils_1.Type.Object({
    path: schema_utils_1.Type.Optional(params_1.DerivationPath),
    amount: schema_utils_1.Type.String(),
    scriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoMint = schema_utils_1.Type.Array(exports.CardanoAssetGroup);
exports.CardanoCollateralInput = schema_utils_1.Type.Object({
    path: schema_utils_1.Type.Optional(params_1.DerivationPath),
    prev_hash: schema_utils_1.Type.String(),
    prev_index: schema_utils_1.Type.Number()
});
exports.CardanoRequiredSigner = schema_utils_1.Type.Object({
    keyPath: schema_utils_1.Type.Optional(params_1.DerivationPath),
    keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoReferenceInput = schema_utils_1.Type.Object({
    prev_hash: schema_utils_1.Type.String(),
    prev_index: schema_utils_1.Type.Number()
});
exports.CardanoCVoteRegistrationDelegation = schema_utils_1.Type.Object({
    votePublicKey: schema_utils_1.Type.String(),
    weight: schema_utils_1.Type.Number()
});
exports.CardanoCVoteRegistrationParameters = schema_utils_1.Type.Object({
    votePublicKey: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    stakingPath: params_1.DerivationPath,
    paymentAddressParameters: schema_utils_1.Type.Optional(exports.CardanoAddressParameters),
    nonce: schema_utils_1.Type.String(),
    format: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoCVoteRegistrationFormat),
    delegations: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoCVoteRegistrationDelegation)),
    votingPurpose: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
    paymentAddress: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoAuxiliaryData = schema_utils_1.Type.Object({
    hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    cVoteRegistrationParameters: schema_utils_1.Type.Optional(exports.CardanoCVoteRegistrationParameters)
});
exports.CardanoSignTransaction = schema_utils_1.Type.Object({
    inputs: schema_utils_1.Type.Array(exports.CardanoInput),
    outputs: schema_utils_1.Type.Array(exports.CardanoOutput),
    fee: schema_utils_1.Type.Uint(),
    ttl: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
    certificates: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoCertificate)),
    withdrawals: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoWithdrawal)),
    validityIntervalStart: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    auxiliaryData: schema_utils_1.Type.Optional(exports.CardanoAuxiliaryData),
    mint: schema_utils_1.Type.Optional(exports.CardanoMint),
    scriptDataHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    collateralInputs: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoCollateralInput)),
    requiredSigners: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoRequiredSigner)),
    collateralReturn: schema_utils_1.Type.Optional(exports.CardanoOutput),
    totalCollateral: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    referenceInputs: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoReferenceInput)),
    additionalWitnessRequests: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(params_1.DerivationPath)),
    protocolMagic: schema_utils_1.Type.Number(),
    networkId: schema_utils_1.Type.Number(),
    signingMode: constants_1.PROTO.EnumCardanoTxSigningMode,
    derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType),
    includeNetworkId: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
    chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
    tagCborSets: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.CardanoSignTransactionExtended = schema_utils_1.Type.Intersect([
    exports.CardanoSignTransaction,
    schema_utils_1.Type.Object({
        unsignedTx: schema_utils_1.Type.Object({
            body: schema_utils_1.Type.String(),
            hash: schema_utils_1.Type.String()
        }),
        testnet: schema_utils_1.Type.Boolean()
    })
]);
exports.CardanoSignedTxWitness = schema_utils_1.Type.Object({
    type: constants_1.PROTO.EnumCardanoTxWitnessType,
    pubKey: schema_utils_1.Type.String(),
    signature: schema_utils_1.Type.String(),
    chainCode: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoAuxiliaryDataSupplement = schema_utils_1.Type.Object({
    type: constants_1.PROTO.EnumCardanoTxAuxiliaryDataSupplementType,
    auxiliaryDataHash: schema_utils_1.Type.String(),
    cVoteRegistrationSignature: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoSignedTxData = schema_utils_1.Type.Object({
    hash: schema_utils_1.Type.String(),
    witnesses: schema_utils_1.Type.Array(exports.CardanoSignedTxWitness),
    auxiliaryDataSupplement: schema_utils_1.Type.Optional(exports.CardanoAuxiliaryDataSupplement)
});
exports.CardanoSignMessage = schema_utils_1.Type.Object({
    path: params_1.DerivationPath,
    payload: schema_utils_1.Type.String(),
    preferHexDisplay: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
    networkId: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
    protocolMagic: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
    addressParameters: schema_utils_1.Type.Optional(exports.CardanoAddressParameters),
    derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType)
});
exports.CardanoMessageProtectedHeaders = schema_utils_1.Type.Object({
    1: schema_utils_1.Type.Literal(constants_1.CARDANO.ALGORITHM_IDS.EdDSA),
    address: schema_utils_1.Type.String()
});
exports.CardanoMessageUnprotectedHeaders = schema_utils_1.Type.Object({
    hashed: schema_utils_1.Type.Boolean(),
    version: schema_utils_1.Type.Number()
});
exports.CardanoMessageHeaders = schema_utils_1.Type.Object({
    protected: exports.CardanoMessageProtectedHeaders,
    unprotected: exports.CardanoMessageUnprotectedHeaders
});
exports.CardanoSignedMessage = schema_utils_1.Type.Object({
    headers: exports.CardanoMessageHeaders,
    payload: schema_utils_1.Type.String(),
    signature: schema_utils_1.Type.String(),
    pubKey: schema_utils_1.Type.String(),
    coseSignature: schema_utils_1.Type.String(),
    coseKey: schema_utils_1.Type.String()
}); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/bitcoin/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VerifyMessage = exports.SignMessage = void 0;
const schema_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+schema-utils@1.3.4_tslib@2.8.1/node_modules/@trezor/schema-utils/lib/index.js [app-client] (ecmascript)");
const params_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/params.js [app-client] (ecmascript)");
exports.SignMessage = schema_utils_1.Type.Object({
    path: params_1.DerivationPath,
    coin: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    message: schema_utils_1.Type.String(),
    hex: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
    no_script_type: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.VerifyMessage = schema_utils_1.Type.Object({
    address: schema_utils_1.Type.String(),
    signature: schema_utils_1.Type.String(),
    message: schema_utils_1.Type.String(),
    coin: schema_utils_1.Type.String(),
    hex: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
}); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/eos/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EosSignTransaction = exports.EosSDKTransaction = exports.EosTxAction = exports.EosTxActionCommon = exports.EosAuthorization = exports.EosTxHeader = exports.EosPublicKey = void 0;
const schema_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+schema-utils@1.3.4_tslib@2.8.1/node_modules/@trezor/schema-utils/lib/index.js [app-client] (ecmascript)");
const constants_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/index.js [app-client] (ecmascript)");
const params_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/params.js [app-client] (ecmascript)");
exports.EosPublicKey = schema_utils_1.Type.Object({
    wifPublicKey: schema_utils_1.Type.String(),
    rawPublicKey: schema_utils_1.Type.String(),
    path: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
    serializedPath: schema_utils_1.Type.String()
});
exports.EosTxHeader = schema_utils_1.Type.Object({
    expiration: schema_utils_1.Type.Union([
        schema_utils_1.Type.Uint(),
        schema_utils_1.Type.String()
    ]),
    refBlockNum: schema_utils_1.Type.Number(),
    refBlockPrefix: schema_utils_1.Type.Number(),
    maxNetUsageWords: schema_utils_1.Type.Number(),
    maxCpuUsageMs: schema_utils_1.Type.Number(),
    delaySec: schema_utils_1.Type.Number()
});
exports.EosAuthorization = schema_utils_1.Type.Object({
    threshold: schema_utils_1.Type.Number(),
    keys: schema_utils_1.Type.Array(constants_1.PROTO.EosAuthorizationKey),
    accounts: schema_utils_1.Type.Array(schema_utils_1.Type.Object({
        permission: constants_1.PROTO.EosPermissionLevel,
        weight: schema_utils_1.Type.Number()
    })),
    waits: schema_utils_1.Type.Array(constants_1.PROTO.EosAuthorizationWait)
});
exports.EosTxActionCommon = schema_utils_1.Type.Object({
    account: schema_utils_1.Type.String(),
    authorization: schema_utils_1.Type.Array(constants_1.PROTO.EosPermissionLevel)
});
exports.EosTxAction = schema_utils_1.Type.Union([
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('transfer'),
            data: schema_utils_1.Type.Object({
                from: schema_utils_1.Type.String(),
                to: schema_utils_1.Type.String(),
                quantity: schema_utils_1.Type.String(),
                memo: schema_utils_1.Type.String()
            })
        })
    ]),
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('delegatebw'),
            data: schema_utils_1.Type.Object({
                from: schema_utils_1.Type.String(),
                receiver: schema_utils_1.Type.String(),
                stake_net_quantity: schema_utils_1.Type.String(),
                stake_cpu_quantity: schema_utils_1.Type.String(),
                transfer: schema_utils_1.Type.Boolean()
            })
        })
    ]),
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('undelegatebw'),
            data: schema_utils_1.Type.Object({
                from: schema_utils_1.Type.String(),
                receiver: schema_utils_1.Type.String(),
                unstake_net_quantity: schema_utils_1.Type.String(),
                unstake_cpu_quantity: schema_utils_1.Type.String()
            })
        })
    ]),
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('buyram'),
            data: schema_utils_1.Type.Object({
                payer: schema_utils_1.Type.String(),
                receiver: schema_utils_1.Type.String(),
                quant: schema_utils_1.Type.String()
            })
        })
    ]),
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('buyrambytes'),
            data: constants_1.PROTO.EosActionBuyRamBytes
        })
    ]),
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('sellram'),
            data: constants_1.PROTO.EosActionSellRam
        })
    ]),
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('voteproducer'),
            data: schema_utils_1.Type.Object({
                voter: schema_utils_1.Type.String(),
                proxy: schema_utils_1.Type.String(),
                producers: schema_utils_1.Type.Array(schema_utils_1.Type.String())
            })
        })
    ]),
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('refund'),
            data: constants_1.PROTO.EosActionRefund
        })
    ]),
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('updateauth'),
            data: schema_utils_1.Type.Object({
                account: schema_utils_1.Type.String(),
                permission: schema_utils_1.Type.String(),
                parent: schema_utils_1.Type.String(),
                auth: exports.EosAuthorization
            })
        })
    ]),
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('deleteauth'),
            data: constants_1.PROTO.EosActionDeleteAuth
        })
    ]),
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('linkauth'),
            data: constants_1.PROTO.EosActionLinkAuth
        })
    ]),
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('unlinkauth'),
            data: constants_1.PROTO.EosActionUnlinkAuth
        })
    ]),
    schema_utils_1.Type.Intersect([
        exports.EosTxActionCommon,
        schema_utils_1.Type.Object({
            name: schema_utils_1.Type.Literal('newaccount'),
            data: schema_utils_1.Type.Object({
                creator: schema_utils_1.Type.String(),
                name: schema_utils_1.Type.String(),
                owner: exports.EosAuthorization,
                active: exports.EosAuthorization
            })
        })
    ])
]);
exports.EosSDKTransaction = schema_utils_1.Type.Object({
    chainId: schema_utils_1.Type.String(),
    header: exports.EosTxHeader,
    actions: schema_utils_1.Type.Array(schema_utils_1.Type.Union([
        exports.EosTxAction,
        schema_utils_1.Type.Intersect([
            exports.EosTxActionCommon,
            schema_utils_1.Type.Object({
                name: schema_utils_1.Type.String(),
                data: schema_utils_1.Type.String()
            })
        ])
    ]))
});
exports.EosSignTransaction = schema_utils_1.Type.Object({
    path: params_1.DerivationPath,
    transaction: exports.EosSDKTransaction,
    chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
}); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/ripple/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RippleSignedTx = exports.RippleSignTransaction = exports.RippleTransaction = exports.RipplePayment = void 0;
const schema_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+schema-utils@1.3.4_tslib@2.8.1/node_modules/@trezor/schema-utils/lib/index.js [app-client] (ecmascript)");
const params_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/params.js [app-client] (ecmascript)");
exports.RipplePayment = schema_utils_1.Type.Object({
    amount: schema_utils_1.Type.String(),
    destination: schema_utils_1.Type.String(),
    destinationTag: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.RippleTransaction = schema_utils_1.Type.Object({
    fee: schema_utils_1.Type.String(),
    flags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
    sequence: schema_utils_1.Type.Number(),
    maxLedgerVersion: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
    payment: exports.RipplePayment
});
exports.RippleSignTransaction = schema_utils_1.Type.Object({
    path: params_1.DerivationPath,
    transaction: exports.RippleTransaction,
    chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.RippleSignedTx = schema_utils_1.Type.Object({
    serializedTx: schema_utils_1.Type.String(),
    signature: schema_utils_1.Type.String()
}); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/ethereum/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EthereumVerifyMessage = exports.EthereumSignTypedHash = exports.EthereumSignTypedData = exports.EthereumSignTypedDataMessage = exports.EthereumSignTypedDataTypes = exports.EthereumSignedTx = exports.EthereumSignTransaction = exports.EthereumTransactionEIP1559 = exports.EthereumAccessList = exports.EthereumTransaction = exports.EthereumSignMessage = void 0;
const schema_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+schema-utils@1.3.4_tslib@2.8.1/node_modules/@trezor/schema-utils/lib/index.js [app-client] (ecmascript)");
const constants_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/index.js [app-client] (ecmascript)");
const params_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/params.js [app-client] (ecmascript)");
exports.EthereumSignMessage = schema_utils_1.Type.Object({
    path: params_1.DerivationPath,
    message: schema_utils_1.Type.String(),
    hex: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.EthereumTransaction = schema_utils_1.Type.Object({
    to: schema_utils_1.Type.Union([
        schema_utils_1.Type.String(),
        schema_utils_1.Type.Null()
    ]),
    value: schema_utils_1.Type.String(),
    gasPrice: schema_utils_1.Type.String(),
    gasLimit: schema_utils_1.Type.String(),
    maxFeePerGas: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
    maxPriorityFeePerGas: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
    nonce: schema_utils_1.Type.String(),
    data: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    chainId: schema_utils_1.Type.Number(),
    txType: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
    payment_req: schema_utils_1.Type.Optional(constants_1.PROTO.PaymentRequest)
});
exports.EthereumAccessList = schema_utils_1.Type.Object({
    address: schema_utils_1.Type.String(),
    storageKeys: schema_utils_1.Type.Array(schema_utils_1.Type.String())
});
exports.EthereumTransactionEIP1559 = schema_utils_1.Type.Object({
    to: schema_utils_1.Type.Union([
        schema_utils_1.Type.String(),
        schema_utils_1.Type.Null()
    ]),
    value: schema_utils_1.Type.String(),
    gasLimit: schema_utils_1.Type.String(),
    gasPrice: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
    nonce: schema_utils_1.Type.String(),
    data: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    chainId: schema_utils_1.Type.Number(),
    maxFeePerGas: schema_utils_1.Type.String(),
    maxPriorityFeePerGas: schema_utils_1.Type.String(),
    accessList: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.EthereumAccessList)),
    payment_req: schema_utils_1.Type.Optional(constants_1.PROTO.PaymentRequest)
});
exports.EthereumSignTransaction = schema_utils_1.Type.Object({
    path: params_1.DerivationPath,
    transaction: schema_utils_1.Type.Union([
        exports.EthereumTransaction,
        exports.EthereumTransactionEIP1559
    ]),
    chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.EthereumSignedTx = schema_utils_1.Type.Object({
    v: schema_utils_1.Type.String(),
    r: schema_utils_1.Type.String(),
    s: schema_utils_1.Type.String(),
    serializedTx: schema_utils_1.Type.String()
});
const EthereumSignTypedDataTypeProperty = schema_utils_1.Type.Object({
    name: schema_utils_1.Type.String(),
    type: schema_utils_1.Type.String()
});
exports.EthereumSignTypedDataTypes = schema_utils_1.Type.Object({
    EIP712Domain: schema_utils_1.Type.Array(EthereumSignTypedDataTypeProperty)
}, {
    additionalProperties: schema_utils_1.Type.Array(EthereumSignTypedDataTypeProperty)
});
exports.EthereumSignTypedDataMessage = schema_utils_1.Type.Object({
    types: exports.EthereumSignTypedDataTypes,
    primaryType: schema_utils_1.Type.String(),
    domain: schema_utils_1.Type.Object({
        name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        version: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        chainId: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([
            schema_utils_1.Type.Number(),
            schema_utils_1.Type.BigInt(),
            schema_utils_1.Type.String()
        ])),
        verifyingContract: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        salt: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([
            schema_utils_1.Type.ArrayBuffer(),
            schema_utils_1.Type.String()
        ]))
    }),
    message: schema_utils_1.Type.Object({}, {
        additionalProperties: schema_utils_1.Type.Any()
    })
});
exports.EthereumSignTypedData = schema_utils_1.Type.Object({
    path: params_1.DerivationPath,
    data: exports.EthereumSignTypedDataMessage,
    metamask_v4_compat: schema_utils_1.Type.Boolean(),
    domain_separator_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
    message_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined())
});
exports.EthereumSignTypedHash = schema_utils_1.Type.Object({
    path: params_1.DerivationPath,
    data: exports.EthereumSignTypedDataMessage,
    metamask_v4_compat: schema_utils_1.Type.Boolean(),
    domain_separator_hash: schema_utils_1.Type.String(),
    message_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.EthereumVerifyMessage = schema_utils_1.Type.Object({
    address: schema_utils_1.Type.String(),
    message: schema_utils_1.Type.String(),
    hex: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
    signature: schema_utils_1.Type.String()
}); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/solana/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SolanaComposedTransaction = exports.SolanaComposeTransaction = exports.SolanaProgramName = exports.SolanaSignedTransaction = exports.SolanaSignTransaction = exports.SolanaTxAdditionalInfo = exports.SolanaTxTokenAccountInfo = exports.SolanaPublicKey = void 0;
const schema_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+schema-utils@1.3.4_tslib@2.8.1/node_modules/@trezor/schema-utils/lib/index.js [app-client] (ecmascript)");
const params_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/params.js [app-client] (ecmascript)");
exports.SolanaPublicKey = schema_utils_1.Type.Intersect([
    params_1.PublicKey,
    schema_utils_1.Type.Object({
        publicKey: schema_utils_1.Type.String(),
        publicKeyBase58: schema_utils_1.Type.String()
    })
]);
exports.SolanaTxTokenAccountInfo = schema_utils_1.Type.Object({
    baseAddress: schema_utils_1.Type.String(),
    tokenProgram: schema_utils_1.Type.String(),
    tokenMint: schema_utils_1.Type.String(),
    tokenAccount: schema_utils_1.Type.String(),
    symbol: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.SolanaTxAdditionalInfo = schema_utils_1.Type.Object({
    tokenAccountsInfos: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.SolanaTxTokenAccountInfo, {
        minItems: 1
    })),
    isDevnet: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.SolanaSignTransaction = schema_utils_1.Type.Object({
    path: schema_utils_1.Type.Union([
        schema_utils_1.Type.String(),
        schema_utils_1.Type.Array(schema_utils_1.Type.Number())
    ]),
    serializedTx: schema_utils_1.Type.String(),
    additionalInfo: schema_utils_1.Type.Optional(exports.SolanaTxAdditionalInfo),
    serialize: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.SolanaSignedTransaction = schema_utils_1.Type.Object({
    signature: schema_utils_1.Type.String(),
    serializedTx: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.SolanaProgramName = schema_utils_1.Type.Union([
    schema_utils_1.Type.Literal('spl-token'),
    schema_utils_1.Type.Literal('spl-token-2022')
]);
const SolanaComposeTransactionCommon = {
    fromAddress: schema_utils_1.Type.String(),
    amount: schema_utils_1.Type.String(),
    blockHash: schema_utils_1.Type.String(),
    lastValidBlockHeight: schema_utils_1.Type.Number(),
    priorityFees: schema_utils_1.Type.Optional(schema_utils_1.Type.Object({
        computeUnitPrice: schema_utils_1.Type.String(),
        computeUnitLimit: schema_utils_1.Type.String()
    })),
    token: schema_utils_1.Type.Optional(schema_utils_1.Type.Object({
        mint: schema_utils_1.Type.String(),
        program: exports.SolanaProgramName,
        decimals: schema_utils_1.Type.Number(),
        accounts: schema_utils_1.Type.Array(schema_utils_1.Type.Object({
            publicKey: schema_utils_1.Type.String(),
            balance: schema_utils_1.Type.String()
        }))
    })),
    coin: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    identity: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
};
const SolanaComposeSerializedTransaction = schema_utils_1.Type.Object({
    ...SolanaComposeTransactionCommon,
    toAddress: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    serializedTx: schema_utils_1.Type.String()
});
const SolanaComposeTransactionRaw = schema_utils_1.Type.Object({
    ...SolanaComposeTransactionCommon,
    toAddress: schema_utils_1.Type.String(),
    serializedTx: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined())
});
exports.SolanaComposeTransaction = schema_utils_1.Type.Union([
    SolanaComposeSerializedTransaction,
    SolanaComposeTransactionRaw
]);
exports.SolanaComposedTransaction = schema_utils_1.Type.Object({
    serializedTx: schema_utils_1.Type.String(),
    additionalInfo: schema_utils_1.Type.Object({
        newAccountProgramName: schema_utils_1.Type.Optional(exports.SolanaProgramName),
        tokenAccountInfo: schema_utils_1.Type.Optional(exports.SolanaTxTokenAccountInfo)
    })
}); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/stellar/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StellarOperationMessage = exports.StellarSignedTx = exports.StellarSignTransaction = exports.StellarTransaction = exports.StellarOperation = exports.StellarClaimClaimableBalanceOperation = exports.StellarInflationOperation = exports.StellarBumpSequenceOperation = exports.StellarManageDataOperation = exports.StellarAccountMergeOperation = exports.StellarAllowTrustOperation = exports.StellarChangeTrustOperation = exports.StellarSetOptionsOperation = exports.StellarManageBuyOfferOperation = exports.StellarManageSellOfferOperation = exports.StellarPassiveSellOfferOperation = exports.StellarPathPaymentStrictSendOperation = exports.StellarPathPaymentStrictReceiveOperation = exports.StellarPaymentOperation = exports.StellarCreateAccountOperation = exports.StellarAsset = void 0;
const schema_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+schema-utils@1.3.4_tslib@2.8.1/node_modules/@trezor/schema-utils/lib/index.js [app-client] (ecmascript)");
const constants_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/index.js [app-client] (ecmascript)");
const params_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/params.js [app-client] (ecmascript)");
exports.StellarAsset = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Union([
        constants_1.PROTO.EnumStellarAssetType,
        schema_utils_1.Type.KeyOfEnum(constants_1.PROTO.StellarAssetType)
    ]),
    code: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    issuer: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.StellarCreateAccountOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('createAccount'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    destination: schema_utils_1.Type.String(),
    startingBalance: schema_utils_1.Type.String()
});
exports.StellarPaymentOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('payment'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    destination: schema_utils_1.Type.String(),
    asset: exports.StellarAsset,
    amount: schema_utils_1.Type.String()
});
exports.StellarPathPaymentStrictReceiveOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('pathPaymentStrictReceive'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    sendAsset: exports.StellarAsset,
    sendMax: schema_utils_1.Type.Uint(),
    destination: schema_utils_1.Type.String(),
    destAsset: exports.StellarAsset,
    destAmount: schema_utils_1.Type.Uint(),
    path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.StellarAsset))
});
exports.StellarPathPaymentStrictSendOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('pathPaymentStrictSend'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    sendAsset: exports.StellarAsset,
    sendAmount: schema_utils_1.Type.Uint(),
    destination: schema_utils_1.Type.String(),
    destAsset: exports.StellarAsset,
    destMin: schema_utils_1.Type.Uint(),
    path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.StellarAsset))
});
exports.StellarPassiveSellOfferOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('createPassiveSellOffer'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    buying: exports.StellarAsset,
    selling: exports.StellarAsset,
    amount: schema_utils_1.Type.Uint(),
    price: schema_utils_1.Type.Object({
        n: schema_utils_1.Type.Number(),
        d: schema_utils_1.Type.Number()
    })
});
exports.StellarManageSellOfferOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('manageSellOffer'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    buying: exports.StellarAsset,
    selling: exports.StellarAsset,
    amount: schema_utils_1.Type.Uint(),
    offerId: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
    price: schema_utils_1.Type.Object({
        n: schema_utils_1.Type.Number(),
        d: schema_utils_1.Type.Number()
    })
});
exports.StellarManageBuyOfferOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('manageBuyOffer'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    buying: exports.StellarAsset,
    selling: exports.StellarAsset,
    amount: schema_utils_1.Type.Uint(),
    offerId: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
    price: schema_utils_1.Type.Object({
        n: schema_utils_1.Type.Number(),
        d: schema_utils_1.Type.Number()
    })
});
exports.StellarSetOptionsOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('setOptions'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    signer: schema_utils_1.Type.Optional(schema_utils_1.Type.Object({
        type: constants_1.PROTO.EnumStellarSignerType,
        key: schema_utils_1.Type.Union([
            schema_utils_1.Type.String(),
            schema_utils_1.Type.Buffer()
        ]),
        weight: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    })),
    inflationDest: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    clearFlags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
    setFlags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
    masterWeight: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
    lowThreshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
    medThreshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
    highThreshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
    homeDomain: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.StellarChangeTrustOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('changeTrust'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    line: exports.StellarAsset,
    limit: schema_utils_1.Type.String()
});
exports.StellarAllowTrustOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('allowTrust'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    trustor: schema_utils_1.Type.String(),
    assetCode: schema_utils_1.Type.String(),
    assetType: constants_1.PROTO.EnumStellarAssetType,
    authorize: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([
        schema_utils_1.Type.Boolean(),
        schema_utils_1.Type.Undefined()
    ]))
});
exports.StellarAccountMergeOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('accountMerge'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    destination: schema_utils_1.Type.String()
});
exports.StellarManageDataOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('manageData'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    name: schema_utils_1.Type.String(),
    value: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([
        schema_utils_1.Type.String(),
        schema_utils_1.Type.Buffer()
    ]))
});
exports.StellarBumpSequenceOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('bumpSequence'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    bumpTo: schema_utils_1.Type.Uint()
});
exports.StellarInflationOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('inflation'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.StellarClaimClaimableBalanceOperation = schema_utils_1.Type.Object({
    type: schema_utils_1.Type.Literal('claimClaimableBalance'),
    source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    balanceId: schema_utils_1.Type.String()
});
exports.StellarOperation = schema_utils_1.Type.Union([
    exports.StellarCreateAccountOperation,
    exports.StellarPaymentOperation,
    exports.StellarPathPaymentStrictReceiveOperation,
    exports.StellarPathPaymentStrictSendOperation,
    exports.StellarPassiveSellOfferOperation,
    exports.StellarManageSellOfferOperation,
    exports.StellarManageBuyOfferOperation,
    exports.StellarSetOptionsOperation,
    exports.StellarChangeTrustOperation,
    exports.StellarAllowTrustOperation,
    exports.StellarAccountMergeOperation,
    exports.StellarInflationOperation,
    exports.StellarManageDataOperation,
    exports.StellarBumpSequenceOperation,
    exports.StellarClaimClaimableBalanceOperation
]);
exports.StellarTransaction = schema_utils_1.Type.Object({
    source: schema_utils_1.Type.String(),
    fee: schema_utils_1.Type.Number(),
    sequence: schema_utils_1.Type.Uint(),
    timebounds: schema_utils_1.Type.Optional(schema_utils_1.Type.Object({
        minTime: schema_utils_1.Type.Number(),
        maxTime: schema_utils_1.Type.Number()
    })),
    memo: schema_utils_1.Type.Optional(schema_utils_1.Type.Object({
        type: constants_1.PROTO.EnumStellarMemoType,
        id: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
        text: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        hash: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([
            schema_utils_1.Type.String(),
            schema_utils_1.Type.Buffer()
        ]))
    })),
    operations: schema_utils_1.Type.Array(exports.StellarOperation)
});
exports.StellarSignTransaction = schema_utils_1.Type.Object({
    path: params_1.DerivationPath,
    networkPassphrase: schema_utils_1.Type.String(),
    transaction: exports.StellarTransaction
});
exports.StellarSignedTx = schema_utils_1.Type.Object({
    publicKey: schema_utils_1.Type.String(),
    signature: schema_utils_1.Type.String()
});
exports.StellarOperationMessage = schema_utils_1.Type.Union([
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarCreateAccountOp')
        }),
        constants_1.PROTO.StellarCreateAccountOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarPaymentOp')
        }),
        constants_1.PROTO.StellarPaymentOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarPathPaymentStrictReceiveOp')
        }),
        constants_1.PROTO.StellarPathPaymentStrictReceiveOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarPathPaymentStrictSendOp')
        }),
        constants_1.PROTO.StellarPathPaymentStrictSendOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarManageSellOfferOp')
        }),
        constants_1.PROTO.StellarManageSellOfferOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarManageBuyOfferOp')
        }),
        constants_1.PROTO.StellarManageBuyOfferOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarCreatePassiveSellOfferOp')
        }),
        constants_1.PROTO.StellarCreatePassiveSellOfferOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarSetOptionsOp')
        }),
        constants_1.PROTO.StellarSetOptionsOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarChangeTrustOp')
        }),
        constants_1.PROTO.StellarChangeTrustOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarAllowTrustOp')
        }),
        constants_1.PROTO.StellarAllowTrustOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarAccountMergeOp')
        }),
        constants_1.PROTO.StellarAccountMergeOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarManageDataOp')
        }),
        constants_1.PROTO.StellarManageDataOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarBumpSequenceOp')
        }),
        constants_1.PROTO.StellarBumpSequenceOp
    ]),
    schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
            type: schema_utils_1.Type.Literal('StellarClaimClaimableBalanceOp')
        }),
        constants_1.PROTO.StellarClaimClaimableBalanceOp
    ])
]); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/tezos/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TezosSignTransaction = exports.TezosOperation = exports.TezosDelegationOperation = exports.TezosOriginationOperation = exports.TezosTransactionOperation = exports.TezosParametersManager = exports.TezosManagerTransfer = exports.TezosRevealOperation = void 0;
const schema_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+schema-utils@1.3.4_tslib@2.8.1/node_modules/@trezor/schema-utils/lib/index.js [app-client] (ecmascript)");
const params_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/params.js [app-client] (ecmascript)");
exports.TezosRevealOperation = schema_utils_1.Type.Object({
    source: schema_utils_1.Type.String(),
    fee: schema_utils_1.Type.Number(),
    counter: schema_utils_1.Type.Number(),
    gas_limit: schema_utils_1.Type.Number(),
    storage_limit: schema_utils_1.Type.Number(),
    public_key: schema_utils_1.Type.String()
});
exports.TezosManagerTransfer = schema_utils_1.Type.Object({
    destination: schema_utils_1.Type.String(),
    amount: schema_utils_1.Type.Number()
});
exports.TezosParametersManager = schema_utils_1.Type.Object({
    set_delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    cancel_delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
    transfer: schema_utils_1.Type.Optional(exports.TezosManagerTransfer)
});
exports.TezosTransactionOperation = schema_utils_1.Type.Object({
    source: schema_utils_1.Type.String(),
    destination: schema_utils_1.Type.String(),
    amount: schema_utils_1.Type.Number(),
    counter: schema_utils_1.Type.Number(),
    fee: schema_utils_1.Type.Number(),
    gas_limit: schema_utils_1.Type.Number(),
    storage_limit: schema_utils_1.Type.Number(),
    parameters: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
    parameters_manager: schema_utils_1.Type.Optional(exports.TezosParametersManager)
});
exports.TezosOriginationOperation = schema_utils_1.Type.Object({
    source: schema_utils_1.Type.String(),
    balance: schema_utils_1.Type.Number(),
    delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    script: params_1.DerivationPath,
    fee: schema_utils_1.Type.Number(),
    counter: schema_utils_1.Type.Number(),
    gas_limit: schema_utils_1.Type.Number(),
    storage_limit: schema_utils_1.Type.Number()
});
exports.TezosDelegationOperation = schema_utils_1.Type.Object({
    source: schema_utils_1.Type.String(),
    delegate: schema_utils_1.Type.String(),
    fee: schema_utils_1.Type.Number(),
    counter: schema_utils_1.Type.Number(),
    gas_limit: schema_utils_1.Type.Number(),
    storage_limit: schema_utils_1.Type.Number()
});
exports.TezosOperation = schema_utils_1.Type.Object({
    reveal: schema_utils_1.Type.Optional(exports.TezosRevealOperation),
    transaction: schema_utils_1.Type.Optional(exports.TezosTransactionOperation),
    origination: schema_utils_1.Type.Optional(exports.TezosOriginationOperation),
    delegation: schema_utils_1.Type.Optional(exports.TezosDelegationOperation)
});
exports.TezosSignTransaction = schema_utils_1.Type.Object({
    path: params_1.DerivationPath,
    branch: schema_utils_1.Type.String(),
    operation: exports.TezosOperation,
    chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
}); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FirmwareType = void 0;
const tslib_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/index.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/account.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/coinInfo.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/device.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/fees.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/firmware.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/params.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/settings.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/cardano/index.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/bitcoin/index.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/eos/index.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/ripple/index.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/ethereum/index.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/solana/index.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/stellar/index.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/api/tezos/index.js [app-client] (ecmascript)"), exports);
var device_utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+device-utils@1.1.4/node_modules/@trezor/device-utils/lib/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FirmwareType", {
    enumerable: true,
    get: function() {
        return device_utils_1.FirmwareType;
    }
}); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/exports.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseConnectSettings = void 0;
const tslib_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/constants/index.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/events/index.js [app-client] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/types/index.js [app-client] (ecmascript)"), exports);
var connectSettings_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@trezor+connect@9.6.4_@solana+sysvars@2.3.0_fastestsmallesttextencoderdecoder@1.0.22_ty_6bc45c9511639837b7c1e7b318d70a46/node_modules/@trezor/connect/lib/data/connectSettings.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseConnectSettings", {
    enumerable: true,
    get: function() {
        return connectSettings_1.parseConnectSettings;
    }
}); //# sourceMappingURL=exports.js.map
}),
]);

//# sourceMappingURL=bea3c_%40trezor_connect_lib_3c16168d._.js.map