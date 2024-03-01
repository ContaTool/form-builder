'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;
    if (!css || typeof document === 'undefined') {
        return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
        if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
        } else {
            head.appendChild(style);
        }
    } else {
        head.appendChild(style);
    }
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}

var css_248z = "/* styles.css */\n[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    background-color: #fff;\n    border-color: #6b7280;\n    border-width: 1px;\n    border-radius: 0px;\n    padding-top: 0.5rem;\n    padding-right: 0.75rem;\n    padding-bottom: 0.5rem;\n    padding-left: 0.75rem;\n    font-size: 1rem;\n    line-height: 1.5rem;\n    --tw-shadow: 0 0 #0000;\n}\n[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: #2563eb;\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    border-color: #2563eb;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n    color: #6b7280;\n    opacity: 1;\n}\ninput::placeholder,textarea::placeholder {\n    color: #6b7280;\n    opacity: 1;\n}\n::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n}\n::-webkit-date-and-time-value {\n    min-height: 1.5em;\n    text-align: inherit;\n}\n::-webkit-datetime-edit {\n    display: inline-flex;\n}\n::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {\n    padding-top: 0;\n    padding-bottom: 0;\n}\nselect {\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");\n    background-position: right 0.5rem center;\n    background-repeat: no-repeat;\n    background-size: 1.5em 1.5em;\n    padding-right: 2.5rem;\n    -webkit-print-color-adjust: exact;\n            print-color-adjust: exact;\n}\n[multiple],[size]:where(select:not([size=\"1\"])) {\n    background-image: initial;\n    background-position: initial;\n    background-repeat: unset;\n    background-size: initial;\n    padding-right: 0.75rem;\n    -webkit-print-color-adjust: unset;\n            print-color-adjust: unset;\n}\n[type='checkbox'],[type='radio'] {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    padding: 0;\n    -webkit-print-color-adjust: exact;\n            print-color-adjust: exact;\n    display: inline-block;\n    vertical-align: middle;\n    background-origin: border-box;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    flex-shrink: 0;\n    height: 1rem;\n    width: 1rem;\n    color: #2563eb;\n    background-color: #fff;\n    border-color: #6b7280;\n    border-width: 1px;\n    --tw-shadow: 0 0 #0000;\n}\n[type='checkbox'] {\n    border-radius: 0px;\n}\n[type='radio'] {\n    border-radius: 100%;\n}\n[type='checkbox']:focus,[type='radio']:focus {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n    --tw-ring-offset-width: 2px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: #2563eb;\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n[type='checkbox']:checked,[type='radio']:checked {\n    border-color: transparent;\n    background-color: currentColor;\n    background-size: 100% 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n[type='checkbox']:checked {\n    background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n}\n@media (forced-colors: active)  {\n    [type='checkbox']:checked {\n        -webkit-appearance: auto;\n           -moz-appearance: auto;\n                appearance: auto;\n    }\n}\n[type='radio']:checked {\n    background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n}\n@media (forced-colors: active)  {\n    [type='radio']:checked {\n        -webkit-appearance: auto;\n           -moz-appearance: auto;\n                appearance: auto;\n    }\n}\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n    border-color: transparent;\n    background-color: currentColor;\n}\n[type='checkbox']:indeterminate {\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");\n    border-color: transparent;\n    background-color: currentColor;\n    background-size: 100% 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n@media (forced-colors: active)  {\n    [type='checkbox']:indeterminate {\n        -webkit-appearance: auto;\n           -moz-appearance: auto;\n                appearance: auto;\n    }\n}\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n    border-color: transparent;\n    background-color: currentColor;\n}\n[type='file'] {\n    background: unset;\n    border-color: inherit;\n    border-width: 0;\n    border-radius: 0;\n    padding: 0;\n    font-size: unset;\n    line-height: inherit;\n}\n[type='file']:focus {\n    outline: 1px solid ButtonText;\n    outline: 1px auto -webkit-focus-ring-color;\n}\n*, ::before, ::after {\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-gradient-from-position:  ;\n    --tw-gradient-via-position:  ;\n    --tw-gradient-to-position:  ;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  ;\n}\n::backdrop {\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-gradient-from-position:  ;\n    --tw-gradient-via-position:  ;\n    --tw-gradient-to-position:  ;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  ;\n}\n.container {\n    width: 100%;\n}\n@media (min-width: 640px) {\n    .container {\n        max-width: 640px;\n    }\n}\n@media (min-width: 768px) {\n    .container {\n        max-width: 768px;\n    }\n}\n@media (min-width: 1024px) {\n    .container {\n        max-width: 1024px;\n    }\n}\n@media (min-width: 1280px) {\n    .container {\n        max-width: 1280px;\n    }\n}\n@media (min-width: 1536px) {\n    .container {\n        max-width: 1536px;\n    }\n}\n.visible {\n    visibility: visible;\n}\n.fixed {\n    position: fixed;\n}\n.absolute {\n    position: absolute;\n}\n.relative {\n    position: relative;\n}\n.bottom-12 {\n    bottom: 3rem;\n}\n.left-0 {\n    left: 0px;\n}\n.left-\\[-12px\\] {\n    left: -12px;\n}\n.right-4 {\n    right: 1rem;\n}\n.z-10 {\n    z-index: 10;\n}\n.z-50 {\n    z-index: 50;\n}\n.float-left {\n    float: left;\n}\n.m-0 {\n    margin: 0px;\n}\n.my-1 {\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem;\n}\n.my-2 {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n}\n.my-4 {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n.-mb-px {\n    margin-bottom: -1px;\n}\n.-ml-\\[1\\.5rem\\] {\n    margin-left: -1.5rem;\n}\n.mb-2 {\n    margin-bottom: 0.5rem;\n}\n.mb-4 {\n    margin-bottom: 1rem;\n}\n.mb-\\[0\\.125rem\\] {\n    margin-bottom: 0.125rem;\n}\n.me-2 {\n    margin-inline-end: 0.5rem;\n}\n.ml-2 {\n    margin-left: 0.5rem;\n}\n.mr-0 {\n    margin-right: 0px;\n}\n.mr-0\\.5 {\n    margin-right: 0.125rem;\n}\n.mr-1 {\n    margin-right: 0.25rem;\n}\n.mr-2 {\n    margin-right: 0.5rem;\n}\n.mr-4 {\n    margin-right: 1rem;\n}\n.ms-2 {\n    margin-inline-start: 0.5rem;\n}\n.mt-0 {\n    margin-top: 0px;\n}\n.mt-0\\.5 {\n    margin-top: 0.125rem;\n}\n.mt-1 {\n    margin-top: 0.25rem;\n}\n.mt-1\\.5 {\n    margin-top: 0.375rem;\n}\n.mt-2 {\n    margin-top: 0.5rem;\n}\n.mt-2\\.5 {\n    margin-top: 0.625rem;\n}\n.mt-px {\n    margin-top: 1px;\n}\n.block {\n    display: block;\n}\n.inline-block {\n    display: inline-block;\n}\n.flex {\n    display: flex;\n}\n.inline-flex {\n    display: inline-flex;\n}\n.grid {\n    display: grid;\n}\n.hidden {\n    display: none;\n}\n.size-6 {\n    width: 1.5rem;\n    height: 1.5rem;\n}\n.h-0 {\n    height: 0px;\n}\n.h-12 {\n    height: 3rem;\n}\n.h-16 {\n    height: 4rem;\n}\n.h-3 {\n    height: 0.75rem;\n}\n.h-5 {\n    height: 1.25rem;\n}\n.h-6 {\n    height: 1.5rem;\n}\n.h-\\[1px\\] {\n    height: 1px;\n}\n.h-\\[50px\\] {\n    height: 50px;\n}\n.h-full {\n    height: 100%;\n}\n.max-h-72 {\n    max-height: 18rem;\n}\n.min-h-10 {\n    min-height: 2.5rem;\n}\n.min-h-12 {\n    min-height: 3rem;\n}\n.min-h-14 {\n    min-height: 3.5rem;\n}\n.min-h-\\[1\\.5rem\\] {\n    min-height: 1.5rem;\n}\n.w-0 {\n    width: 0px;\n}\n.w-16 {\n    width: 4rem;\n}\n.w-3 {\n    width: 0.75rem;\n}\n.w-5 {\n    width: 1.25rem;\n}\n.w-6 {\n    width: 1.5rem;\n}\n.w-80 {\n    width: 20rem;\n}\n.w-full {\n    width: 100%;\n}\n.w-px {\n    width: 1px;\n}\n.flex-1 {\n    flex: 1 1 0%;\n}\n.flex-none {\n    flex: none;\n}\n.shrink-0 {\n    flex-shrink: 0;\n}\n.grow {\n    flex-grow: 1;\n}\n.rotate-90 {\n    --tw-rotate: 90deg;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n.animate-spin {\n    animation: spin 1s linear infinite;\n}\n.cursor-default {\n    cursor: default;\n}\n.cursor-not-allowed {\n    cursor: not-allowed;\n}\n.cursor-pointer {\n    cursor: pointer;\n}\n.select-none {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\n.list-none {\n    list-style-type: none;\n}\n.appearance-none {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.flex-row {\n    flex-direction: row;\n}\n.flex-col {\n    flex-direction: column;\n}\n.flex-wrap {\n    flex-wrap: wrap;\n}\n.place-items-center {\n    place-items: center;\n}\n.items-end {\n    align-items: flex-end;\n}\n.items-center {\n    align-items: center;\n}\n.justify-end {\n    justify-content: flex-end;\n}\n.justify-center {\n    justify-content: center;\n}\n.gap-1 {\n    gap: 0.25rem;\n}\n.gap-2 {\n    gap: 0.5rem;\n}\n.gap-6 {\n    gap: 1.5rem;\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n    margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.place-self-end {\n    place-self: end;\n}\n.self-center {\n    align-self: center;\n}\n.overflow-y-auto {\n    overflow-y: auto;\n}\n.truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.rounded {\n    border-radius: 0.25rem;\n}\n.rounded-full {\n    border-radius: 9999px;\n}\n.rounded-md {\n    border-radius: 0.375rem;\n}\n.rounded-sm {\n    border-radius: 0.125rem;\n}\n.rounded-r-sm {\n    border-top-right-radius: 0.125rem;\n    border-bottom-right-radius: 0.125rem;\n}\n.border {\n    border-width: 1px;\n}\n.border-2 {\n    border-width: 2px;\n}\n.border-b {\n    border-bottom-width: 1px;\n}\n.border-b-2 {\n    border-bottom-width: 2px;\n}\n.border-b-\\[10px\\] {\n    border-bottom-width: 10px;\n}\n.border-r-\\[12px\\] {\n    border-right-width: 12px;\n}\n.border-t-\\[10px\\] {\n    border-top-width: 10px;\n}\n.border-solid {\n    border-style: solid;\n}\n.border-dashed {\n    border-style: dashed;\n}\n.border-blue-500 {\n    --tw-border-opacity: 1;\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n.border-gray-200 {\n    --tw-border-opacity: 1;\n    border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.border-gray-300 {\n    --tw-border-opacity: 1;\n    border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.border-gray-500 {\n    --tw-border-opacity: 1;\n    border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\n.border-gray-800 {\n    --tw-border-opacity: 1;\n    border-color: rgb(31 41 55 / var(--tw-border-opacity));\n}\n.border-neutral-300 {\n    --tw-border-opacity: 1;\n    border-color: rgb(212 212 212 / var(--tw-border-opacity));\n}\n.border-pink-500 {\n    --tw-border-opacity: 1;\n    border-color: rgb(236 72 153 / var(--tw-border-opacity));\n}\n.border-transparent {\n    border-color: transparent;\n}\n.border-b-transparent {\n    border-bottom-color: transparent;\n}\n.border-r-white {\n    --tw-border-opacity: 1;\n    border-right-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.border-t-transparent {\n    border-top-color: transparent;\n}\n.bg-amber-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(245 158 11 / var(--tw-bg-opacity));\n}\n.bg-black {\n    --tw-bg-opacity: 1;\n    background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.bg-blue-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.bg-cyan-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(6 182 212 / var(--tw-bg-opacity));\n}\n.bg-emerald-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(16 185 129 / var(--tw-bg-opacity));\n}\n.bg-fuchsia-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(217 70 239 / var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.bg-gray-200 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.bg-gray-300 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n.bg-green-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n.bg-indigo-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(99 102 241 / var(--tw-bg-opacity));\n}\n.bg-lime-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(132 204 22 / var(--tw-bg-opacity));\n}\n.bg-orange-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(249 115 22 / var(--tw-bg-opacity));\n}\n.bg-pink-100 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(252 231 243 / var(--tw-bg-opacity));\n}\n.bg-pink-200 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(251 207 232 / var(--tw-bg-opacity));\n}\n.bg-pink-300 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(249 168 212 / var(--tw-bg-opacity));\n}\n.bg-pink-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(236 72 153 / var(--tw-bg-opacity));\n}\n.bg-purple-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(168 85 247 / var(--tw-bg-opacity));\n}\n.bg-red-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n.bg-rose-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(244 63 94 / var(--tw-bg-opacity));\n}\n.bg-sky-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(14 165 233 / var(--tw-bg-opacity));\n}\n.bg-teal-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(20 184 166 / var(--tw-bg-opacity));\n}\n.bg-violet-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(139 92 246 / var(--tw-bg-opacity));\n}\n.bg-white {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-yellow-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(234 179 8 / var(--tw-bg-opacity));\n}\n.p-0 {\n    padding: 0px;\n}\n.p-0\\.5 {\n    padding: 0.125rem;\n}\n.p-4 {\n    padding: 1rem;\n}\n.p-6 {\n    padding: 1.5rem;\n}\n.px-1 {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n}\n.px-1\\.5 {\n    padding-left: 0.375rem;\n    padding-right: 0.375rem;\n}\n.px-2 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n}\n.px-2\\.5 {\n    padding-left: 0.625rem;\n    padding-right: 0.625rem;\n}\n.px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n.py-1 {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n}\n.py-1\\.5 {\n    padding-top: 0.375rem;\n    padding-bottom: 0.375rem;\n}\n.py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n.py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n}\n.py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n}\n.pb-0 {\n    padding-bottom: 0px;\n}\n.pb-0\\.5 {\n    padding-bottom: 0.125rem;\n}\n.pb-2 {\n    padding-bottom: 0.5rem;\n}\n.pb-4 {\n    padding-bottom: 1rem;\n}\n.pl-1 {\n    padding-left: 0.25rem;\n}\n.pl-2 {\n    padding-left: 0.5rem;\n}\n.pl-2\\.5 {\n    padding-left: 0.625rem;\n}\n.pl-4 {\n    padding-left: 1rem;\n}\n.pl-8 {\n    padding-left: 2rem;\n}\n.pl-\\[0\\.15rem\\] {\n    padding-left: 0.15rem;\n}\n.pl-\\[1\\.5rem\\] {\n    padding-left: 1.5rem;\n}\n.pr-2 {\n    padding-right: 0.5rem;\n}\n.pr-4 {\n    padding-right: 1rem;\n}\n.pt-2 {\n    padding-top: 0.5rem;\n}\n.pt-4 {\n    padding-top: 1rem;\n}\n.align-middle {\n    vertical-align: middle;\n}\n.text-\\[18px\\] {\n    font-size: 18px;\n}\n.text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n}\n.text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n}\n.text-xs {\n    font-size: 0.75rem;\n    line-height: 1rem;\n}\n.font-bold {\n    font-weight: 700;\n}\n.font-medium {\n    font-weight: 500;\n}\n.font-normal {\n    font-weight: 400;\n}\n.uppercase {\n    text-transform: uppercase;\n}\n.italic {\n    font-style: italic;\n}\n.leading-tight {\n    line-height: 1.25;\n}\n.tracking-wide {\n    letter-spacing: 0.025em;\n}\n.text-\\[\\#ababab\\] {\n    --tw-text-opacity: 1;\n    color: rgb(171 171 171 / var(--tw-text-opacity));\n}\n.text-amber-500 {\n    --tw-text-opacity: 1;\n    color: rgb(245 158 11 / var(--tw-text-opacity));\n}\n.text-black {\n    --tw-text-opacity: 1;\n    color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.text-blue-500 {\n    --tw-text-opacity: 1;\n    color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n.text-cyan-500 {\n    --tw-text-opacity: 1;\n    color: rgb(6 182 212 / var(--tw-text-opacity));\n}\n.text-emerald-500 {\n    --tw-text-opacity: 1;\n    color: rgb(16 185 129 / var(--tw-text-opacity));\n}\n.text-fuchsia-500 {\n    --tw-text-opacity: 1;\n    color: rgb(217 70 239 / var(--tw-text-opacity));\n}\n.text-gray-300 {\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.text-gray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n    --tw-text-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-gray-600 {\n    --tw-text-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.text-gray-700 {\n    --tw-text-opacity: 1;\n    color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.text-green-500 {\n    --tw-text-opacity: 1;\n    color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n.text-indigo-500 {\n    --tw-text-opacity: 1;\n    color: rgb(99 102 241 / var(--tw-text-opacity));\n}\n.text-lime-500 {\n    --tw-text-opacity: 1;\n    color: rgb(132 204 22 / var(--tw-text-opacity));\n}\n.text-orange-500 {\n    --tw-text-opacity: 1;\n    color: rgb(249 115 22 / var(--tw-text-opacity));\n}\n.text-pink-500 {\n    --tw-text-opacity: 1;\n    color: rgb(236 72 153 / var(--tw-text-opacity));\n}\n.text-pink-900 {\n    --tw-text-opacity: 1;\n    color: rgb(131 24 67 / var(--tw-text-opacity));\n}\n.text-purple-500 {\n    --tw-text-opacity: 1;\n    color: rgb(168 85 247 / var(--tw-text-opacity));\n}\n.text-red-500 {\n    --tw-text-opacity: 1;\n    color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.text-rose-500 {\n    --tw-text-opacity: 1;\n    color: rgb(244 63 94 / var(--tw-text-opacity));\n}\n.text-sky-500 {\n    --tw-text-opacity: 1;\n    color: rgb(14 165 233 / var(--tw-text-opacity));\n}\n.text-teal-500 {\n    --tw-text-opacity: 1;\n    color: rgb(20 184 166 / var(--tw-text-opacity));\n}\n.text-violet-500 {\n    --tw-text-opacity: 1;\n    color: rgb(139 92 246 / var(--tw-text-opacity));\n}\n.text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-yellow-500 {\n    --tw-text-opacity: 1;\n    color: rgb(234 179 8 / var(--tw-text-opacity));\n}\n.text-opacity-0 {\n    --tw-text-opacity: 0;\n}\n.opacity-25 {\n    opacity: 0.25;\n}\n.opacity-75 {\n    opacity: 0.75;\n}\n.shadow-lg {\n    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-gray-400 {\n    --tw-shadow-color: #9ca3af;\n    --tw-shadow: var(--tw-shadow-colored);\n}\n.ring {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.drop-shadow-lg {\n    --tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.transition-all {\n    transition-property: all;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.duration-200 {\n    transition-duration: 200ms;\n}\n.duration-300 {\n    transition-duration: 300ms;\n}\n.\\@container {\n    container-type: inline-size;\n}\n.before\\:pointer-events-none::before {\n    content: var(--tw-content);\n    pointer-events: none;\n}\n.before\\:absolute::before {\n    content: var(--tw-content);\n    position: absolute;\n}\n.before\\:h-4::before {\n    content: var(--tw-content);\n    height: 1rem;\n}\n.before\\:w-4::before {\n    content: var(--tw-content);\n    width: 1rem;\n}\n.before\\:scale-0::before {\n    content: var(--tw-content);\n    --tw-scale-x: 0;\n    --tw-scale-y: 0;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.before\\:rounded-full::before {\n    content: var(--tw-content);\n    border-radius: 9999px;\n}\n.before\\:bg-transparent::before {\n    content: var(--tw-content);\n    background-color: transparent;\n}\n.before\\:opacity-0::before {\n    content: var(--tw-content);\n    opacity: 0;\n}\n.before\\:shadow-\\[0px_0px_0px_13px_transparent\\]::before {\n    content: var(--tw-content);\n    --tw-shadow: 0px 0px 0px 13px transparent;\n    --tw-shadow-colored: 0px 0px 0px 13px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.before\\:content-\\[\\'\\'\\]::before {\n    --tw-content: '';\n    content: var(--tw-content);\n}\n.after\\:absolute::after {\n    content: var(--tw-content);\n    position: absolute;\n}\n.after\\:z-\\[1\\]::after {\n    content: var(--tw-content);\n    z-index: 1;\n}\n.after\\:block::after {\n    content: var(--tw-content);\n    display: block;\n}\n.after\\:h-4::after {\n    content: var(--tw-content);\n    height: 1rem;\n}\n.after\\:w-4::after {\n    content: var(--tw-content);\n    width: 1rem;\n}\n.after\\:rounded-full::after {\n    content: var(--tw-content);\n    border-radius: 9999px;\n}\n.after\\:content-\\[\\'\\'\\]::after {\n    --tw-content: '';\n    content: var(--tw-content);\n}\n.checked\\:before\\:opacity-\\[0\\.16\\]:checked::before {\n    content: var(--tw-content);\n    opacity: 0.16;\n}\n.checked\\:after\\:absolute:checked::after {\n    content: var(--tw-content);\n    position: absolute;\n}\n.checked\\:after\\:left-1\\/2:checked::after {\n    content: var(--tw-content);\n    left: 50%;\n}\n.checked\\:after\\:top-1\\/2:checked::after {\n    content: var(--tw-content);\n    top: 50%;\n}\n.checked\\:after\\:h-\\[0\\.625rem\\]:checked::after {\n    content: var(--tw-content);\n    height: 0.625rem;\n}\n.checked\\:after\\:w-\\[0\\.625rem\\]:checked::after {\n    content: var(--tw-content);\n    width: 0.625rem;\n}\n.checked\\:after\\:rounded-full:checked::after {\n    content: var(--tw-content);\n    border-radius: 9999px;\n}\n.checked\\:after\\:content-\\[\\'\\'\\]:checked::after {\n    --tw-content: '';\n    content: var(--tw-content);\n}\n.checked\\:after\\:\\[transform\\:translate\\(-50\\%\\2c -50\\%\\)\\]:checked::after {\n    content: var(--tw-content);\n    transform: translate(-50%,-50%);\n}\n.hover\\:cursor-pointer:hover {\n    cursor: pointer;\n}\n.hover\\:border-gray-300:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.hover\\:border-gray-400:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}\n.hover\\:bg-amber-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(254 243 199 / var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\n.hover\\:bg-cyan-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(207 250 254 / var(--tw-bg-opacity));\n}\n.hover\\:bg-emerald-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(209 250 229 / var(--tw-bg-opacity));\n}\n.hover\\:bg-fuchsia-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(250 232 255 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-700:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n.hover\\:bg-green-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(220 252 231 / var(--tw-bg-opacity));\n}\n.hover\\:bg-indigo-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(224 231 255 / var(--tw-bg-opacity));\n}\n.hover\\:bg-lime-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(236 252 203 / var(--tw-bg-opacity));\n}\n.hover\\:bg-orange-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 237 213 / var(--tw-bg-opacity));\n}\n.hover\\:bg-pink-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(252 231 243 / var(--tw-bg-opacity));\n}\n.hover\\:bg-pink-200:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(251 207 232 / var(--tw-bg-opacity));\n}\n.hover\\:bg-purple-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(243 232 255 / var(--tw-bg-opacity));\n}\n.hover\\:bg-red-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(254 226 226 / var(--tw-bg-opacity));\n}\n.hover\\:bg-red-200:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(254 202 202 / var(--tw-bg-opacity));\n}\n.hover\\:bg-red-700:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(185 28 28 / var(--tw-bg-opacity));\n}\n.hover\\:bg-rose-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 228 230 / var(--tw-bg-opacity));\n}\n.hover\\:bg-sky-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(224 242 254 / var(--tw-bg-opacity));\n}\n.hover\\:bg-teal-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(204 251 241 / var(--tw-bg-opacity));\n}\n.hover\\:bg-violet-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(237 233 254 / var(--tw-bg-opacity));\n}\n.hover\\:bg-yellow-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(254 249 195 / var(--tw-bg-opacity));\n}\n.hover\\:text-amber-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(245 158 11 / var(--tw-text-opacity));\n}\n.hover\\:text-blue-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n.hover\\:text-cyan-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(6 182 212 / var(--tw-text-opacity));\n}\n.hover\\:text-emerald-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(16 185 129 / var(--tw-text-opacity));\n}\n.hover\\:text-fuchsia-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(217 70 239 / var(--tw-text-opacity));\n}\n.hover\\:text-gray-700:hover {\n    --tw-text-opacity: 1;\n    color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.hover\\:text-green-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n.hover\\:text-indigo-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(99 102 241 / var(--tw-text-opacity));\n}\n.hover\\:text-lime-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(132 204 22 / var(--tw-text-opacity));\n}\n.hover\\:text-orange-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(249 115 22 / var(--tw-text-opacity));\n}\n.hover\\:text-pink-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(236 72 153 / var(--tw-text-opacity));\n}\n.hover\\:text-purple-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(168 85 247 / var(--tw-text-opacity));\n}\n.hover\\:text-red-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.hover\\:text-red-600:hover {\n    --tw-text-opacity: 1;\n    color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n.hover\\:text-rose-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(244 63 94 / var(--tw-text-opacity));\n}\n.hover\\:text-sky-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(14 165 233 / var(--tw-text-opacity));\n}\n.hover\\:text-teal-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(20 184 166 / var(--tw-text-opacity));\n}\n.hover\\:text-violet-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(139 92 246 / var(--tw-text-opacity));\n}\n.hover\\:text-yellow-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(234 179 8 / var(--tw-text-opacity));\n}\n.hover\\:underline:hover {\n    text-decoration-line: underline;\n}\n.hover\\:before\\:opacity-\\[0\\.04\\]:hover::before {\n    content: var(--tw-content);\n    opacity: 0.04;\n}\n.hover\\:before\\:shadow-\\[0px_0px_0px_13px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.6\\)\\]:hover::before {\n    content: var(--tw-content);\n    --tw-shadow: 0px 0px 0px 13px rgba(0,0,0,0.6);\n    --tw-shadow-colored: 0px 0px 0px 13px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.focus\\:border-amber-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(245 158 11 / var(--tw-border-opacity));\n}\n.focus\\:border-blue-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n.focus\\:border-cyan-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(6 182 212 / var(--tw-border-opacity));\n}\n.focus\\:border-emerald-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(16 185 129 / var(--tw-border-opacity));\n}\n.focus\\:border-fuchsia-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(217 70 239 / var(--tw-border-opacity));\n}\n.focus\\:border-gray-200:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.focus\\:border-gray-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\n.focus\\:border-green-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(34 197 94 / var(--tw-border-opacity));\n}\n.focus\\:border-indigo-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(99 102 241 / var(--tw-border-opacity));\n}\n.focus\\:border-lime-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(132 204 22 / var(--tw-border-opacity));\n}\n.focus\\:border-orange-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(249 115 22 / var(--tw-border-opacity));\n}\n.focus\\:border-pink-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(236 72 153 / var(--tw-border-opacity));\n}\n.focus\\:border-purple-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(168 85 247 / var(--tw-border-opacity));\n}\n.focus\\:border-red-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(239 68 68 / var(--tw-border-opacity));\n}\n.focus\\:border-rose-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(244 63 94 / var(--tw-border-opacity));\n}\n.focus\\:border-sky-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(14 165 233 / var(--tw-border-opacity));\n}\n.focus\\:border-teal-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(20 184 166 / var(--tw-border-opacity));\n}\n.focus\\:border-violet-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(139 92 246 / var(--tw-border-opacity));\n}\n.focus\\:border-yellow-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(234 179 8 / var(--tw-border-opacity));\n}\n.focus\\:bg-white:focus {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.focus\\:shadow-none:focus {\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.focus\\:outline-none:focus {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n}\n.focus\\:ring:focus {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-0:focus {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-amber-500\\/20:focus {\n    --tw-ring-color: rgb(245 158 11 / 0.2);\n}\n.focus\\:ring-blue-500\\/20:focus {\n    --tw-ring-color: rgb(59 130 246 / 0.2);\n}\n.focus\\:ring-cyan-500\\/20:focus {\n    --tw-ring-color: rgb(6 182 212 / 0.2);\n}\n.focus\\:ring-emerald-500\\/20:focus {\n    --tw-ring-color: rgb(16 185 129 / 0.2);\n}\n.focus\\:ring-fuchsia-500\\/20:focus {\n    --tw-ring-color: rgb(217 70 239 / 0.2);\n}\n.focus\\:ring-green-500\\/20:focus {\n    --tw-ring-color: rgb(34 197 94 / 0.2);\n}\n.focus\\:ring-indigo-500\\/20:focus {\n    --tw-ring-color: rgb(99 102 241 / 0.2);\n}\n.focus\\:ring-lime-500\\/20:focus {\n    --tw-ring-color: rgb(132 204 22 / 0.2);\n}\n.focus\\:ring-orange-500\\/20:focus {\n    --tw-ring-color: rgb(249 115 22 / 0.2);\n}\n.focus\\:ring-pink-500\\/20:focus {\n    --tw-ring-color: rgb(236 72 153 / 0.2);\n}\n.focus\\:ring-purple-500\\/20:focus {\n    --tw-ring-color: rgb(168 85 247 / 0.2);\n}\n.focus\\:ring-red-500\\/20:focus {\n    --tw-ring-color: rgb(239 68 68 / 0.2);\n}\n.focus\\:ring-rose-500\\/20:focus {\n    --tw-ring-color: rgb(244 63 94 / 0.2);\n}\n.focus\\:ring-sky-500\\/20:focus {\n    --tw-ring-color: rgb(14 165 233 / 0.2);\n}\n.focus\\:ring-teal-500\\/20:focus {\n    --tw-ring-color: rgb(20 184 166 / 0.2);\n}\n.focus\\:ring-transparent:focus {\n    --tw-ring-color: transparent;\n}\n.focus\\:ring-violet-500\\/20:focus {\n    --tw-ring-color: rgb(139 92 246 / 0.2);\n}\n.focus\\:ring-yellow-500\\/20:focus {\n    --tw-ring-color: rgb(234 179 8 / 0.2);\n}\n.focus\\:before\\:scale-100:focus::before {\n    content: var(--tw-content);\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.focus\\:before\\:opacity-\\[0\\.12\\]:focus::before {\n    content: var(--tw-content);\n    opacity: 0.12;\n}\n.focus\\:before\\:shadow-\\[0px_0px_0px_13px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.6\\)\\]:focus::before {\n    content: var(--tw-content);\n    --tw-shadow: 0px 0px 0px 13px rgba(0,0,0,0.6);\n    --tw-shadow-colored: 0px 0px 0px 13px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.focus\\:before\\:transition-\\[box-shadow_0\\.2s\\2c transform_0\\.2s\\]:focus::before {\n    content: var(--tw-content);\n    transition-property: box-shadow 0.2s,transform 0.2s;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.checked\\:focus\\:before\\:scale-100:focus:checked::before {\n    content: var(--tw-content);\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.checked\\:focus\\:before\\:shadow-\\[0px_0px_0px_13px_\\#3b71ca\\]:focus:checked::before {\n    content: var(--tw-content);\n    --tw-shadow: 0px 0px 0px 13px #3b71ca;\n    --tw-shadow-colored: 0px 0px 0px 13px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.checked\\:focus\\:before\\:transition-\\[box-shadow_0\\.2s\\2c transform_0\\.2s\\]:focus:checked::before {\n    content: var(--tw-content);\n    transition-property: box-shadow 0.2s,transform 0.2s;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.focus-visible\\:ring-2:focus-visible {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-pink-500:focus-visible {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(236 72 153 / var(--tw-ring-opacity));\n}\n.focus-visible\\:ring-offset-2:focus-visible {\n    --tw-ring-offset-width: 2px;\n}\n.disabled\\:opacity-50:disabled {\n    opacity: 0.5;\n}\n@media (min-width: 768px) {\n    .md\\:w-2\\/3 {\n        width: 66.666667%;\n    }\n}\n@media (prefers-color-scheme: dark) {\n    .dark\\:border-neutral-600 {\n        --tw-border-opacity: 1;\n        border-color: rgb(82 82 82 / var(--tw-border-opacity));\n    }\n    .dark\\:focus\\:before\\:shadow-\\[0px_0px_0px_13px_rgba\\(255\\2c 255\\2c 255\\2c 0\\.4\\)\\]:focus::before {\n        content: var(--tw-content);\n        --tw-shadow: 0px 0px 0px 13px rgba(255,255,255,0.4);\n        --tw-shadow-colored: 0px 0px 0px 13px var(--tw-shadow-color);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n    }\n    .dark\\:checked\\:focus\\:before\\:shadow-\\[0px_0px_0px_13px_\\#3b71ca\\]:focus:checked::before {\n        content: var(--tw-content);\n        --tw-shadow: 0px 0px 0px 13px #3b71ca;\n        --tw-shadow-colored: 0px 0px 0px 13px var(--tw-shadow-color);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n    }\n}\n";
styleInject(css_248z);

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}

function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
}

function _defineProperty(obj, key, value) {
    key = toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _objectSpread2(e) {
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

/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */ function formatProdErrorMessage(code) {
    return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}
// Inlined version of the `symbol-observable` polyfill
var $$observable = function() {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */ var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
};
var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ function isPlainObject$2(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    var proto = obj;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
}
// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
    if (val === void 0) return 'undefined';
    if (val === null) return 'null';
    var type = typeof val;
    switch(type){
        case 'boolean':
        case 'string':
        case 'number':
        case 'symbol':
        case 'function':
            {
                return type;
            }
    }
    if (Array.isArray(val)) return 'array';
    if (isDate(val)) return 'date';
    if (isError(val)) return 'error';
    var constructorName = ctorName(val);
    switch(constructorName){
        case 'Symbol':
        case 'Promise':
        case 'WeakMap':
        case 'WeakSet':
        case 'Map':
        case 'Set':
            return constructorName;
    } // other
    return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}
function ctorName(val) {
    return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isError(val) {
    return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}
function kindOf(val) {
    var typeOfVal = typeof val;
    if (process.env.NODE_ENV !== 'production') {
        typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
}
/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */ function createStore$2(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(0) : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
    }
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
    }
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
        }
        return enhancer(createStore$2)(reducer, preloadedState);
    }
    if (typeof reducer !== 'function') {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
    }
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */ function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
        }
    }
    /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */ function getState() {
        if (isDispatching) {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(3) : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
        }
        return currentState;
    }
    /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */ function subscribe(listener) {
        if (typeof listener !== 'function') {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
        }
        if (isDispatching) {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(5) : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
        }
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            if (isDispatching) {
                throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(6) : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
            currentListeners = null;
        };
    }
    /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */ function dispatch(action) {
        if (!isPlainObject$2(action)) {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
        }
        if (typeof action.type === 'undefined') {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        }
        if (isDispatching) {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
        }
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        var listeners = currentListeners = nextListeners;
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            listener();
        }
        return action;
    }
    /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */ function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
        }
        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.
        dispatch({
            type: ActionTypes.REPLACE
        });
    }
    /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */ function observable() {
        var _ref;
        var outerSubscribe = subscribe;
        return _ref = {
            /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe: function subscribe(observer) {
                if (typeof observer !== 'object' || observer === null) {
                    throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
                }
                function observeState() {
                    if (observer.next) {
                        observer.next(getState());
                    }
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe: unsubscribe
                };
            }
        }, _ref[$$observable] = function() {
            return this;
        }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({
        type: ActionTypes.INIT
    });
    return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
    }, _ref2[$$observable] = observable, _ref2;
}
function bindActionCreator(actionCreator, dispatch) {
    return function() {
        return dispatch(actionCreator.apply(this, arguments));
    };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */ function bindActionCreators$1(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch);
    }
    if (typeof actionCreators !== 'object' || actionCreators === null) {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
    }
    var boundActionCreators = {};
    for(var key in actionCreators){
        var actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
    }
    return boundActionCreators;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */ function compose() {
    for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++){
        funcs[_key] = arguments[_key];
    }
    if (funcs.length === 0) {
        return function(arg) {
            return arg;
        };
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce(function(a, b) {
        return function() {
            return a(b.apply(void 0, arguments));
        };
    });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */ function applyMiddleware() {
    for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++){
        middlewares[_key] = arguments[_key];
    }
    return function(createStore) {
        return function() {
            var store = createStore.apply(void 0, arguments);
            var _dispatch = function dispatch() {
                throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(15) : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
            };
            var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                    return _dispatch.apply(void 0, arguments);
                }
            };
            var chain = middlewares.map(function(middleware) {
                return middleware(middlewareAPI);
            });
            _dispatch = compose.apply(void 0, chain)(store.dispatch);
            return _objectSpread2(_objectSpread2({}, store), {}, {
                dispatch: _dispatch
            });
        };
    };
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var shim = {exports: {}};

var useSyncExternalStoreShim_production_min = {};

/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_production_min;

function requireUseSyncExternalStoreShim_production_min () {
	if (hasRequiredUseSyncExternalStoreShim_production_min) return useSyncExternalStoreShim_production_min;
	hasRequiredUseSyncExternalStoreShim_production_min = 1;
	var e = React;
	function h(a, b) {
	    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var k = "function" === typeof Object.is ? Object.is : h, l = e.useState, m = e.useEffect, n = e.useLayoutEffect, p = e.useDebugValue;
	function q(a, b) {
	    var d = b(), f = l({
	        inst: {
	            value: d,
	            getSnapshot: b
	        }
	    }), c = f[0].inst, g = f[1];
	    n(function() {
	        c.value = d;
	        c.getSnapshot = b;
	        r(c) && g({
	            inst: c
	        });
	    }, [
	        a,
	        d,
	        b
	    ]);
	    m(function() {
	        r(c) && g({
	            inst: c
	        });
	        return a(function() {
	            r(c) && g({
	                inst: c
	            });
	        });
	    }, [
	        a
	    ]);
	    p(d);
	    return d;
	}
	function r(a) {
	    var b = a.getSnapshot;
	    a = a.value;
	    try {
	        var d = b();
	        return !k(a, d);
	    } catch (f) {
	        return !0;
	    }
	}
	function t(a, b) {
	    return b();
	}
	var u = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t : q;
	useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u;
	return useSyncExternalStoreShim_production_min;
}

var useSyncExternalStoreShim_development = {};

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_development;

function requireUseSyncExternalStoreShim_development () {
	if (hasRequiredUseSyncExternalStoreShim_development) return useSyncExternalStoreShim_development;
	hasRequiredUseSyncExternalStoreShim_development = 1;
	if (process.env.NODE_ENV !== "production") {
	    (function() {
	        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
	            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	        }
	        var React$1 = React;
	        var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	        function error(format) {
	            {
	                {
	                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
	                        args[_key2 - 1] = arguments[_key2];
	                    }
	                    printWarning('error', format, args);
	                }
	            }
	        }
	        function printWarning(level, format, args) {
	            // When changing this logic, you might want to also
	            // update consoleWithStackDev.www.js as well.
	            {
	                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	                var stack = ReactDebugCurrentFrame.getStackAddendum();
	                if (stack !== '') {
	                    format += '%s';
	                    args = args.concat([
	                        stack
	                    ]);
	                } // eslint-disable-next-line react-internal/safe-string-coercion
	                var argsWithFormat = args.map(function(item) {
	                    return String(item);
	                }); // Careful: RN currently depends on this prefix
	                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	                // breaks IE9: https://github.com/facebook/react/issues/13610
	                // eslint-disable-next-line react-internal/no-production-logging
	                Function.prototype.apply.call(console[level], console, argsWithFormat);
	            }
	        }
	        /**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */ function is(x, y) {
	            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	            ;
	        }
	        var objectIs = typeof Object.is === 'function' ? Object.is : is;
	        // dispatch for CommonJS interop named imports.
	        var useState = React$1.useState, useEffect = React$1.useEffect, useLayoutEffect = React$1.useLayoutEffect, useDebugValue = React$1.useDebugValue;
	        var didWarnOld18Alpha = false;
	        var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
	        // because of a very particular set of implementation details and assumptions
	        // -- change any one of them and it will break. The most important assumption
	        // is that updates are always synchronous, because concurrent rendering is
	        // only available in versions of React that also have a built-in
	        // useSyncExternalStore API. And we only use this shim when the built-in API
	        // does not exist.
	        //
	        // Do not assume that the clever hacks used by this hook also work in general.
	        // The point of this shim is to replace the need for hacks by other libraries.
	        function useSyncExternalStore(subscribe, getSnapshot, // React do not expose a way to check if we're hydrating. So users of the shim
	        // will need to track that themselves and return the correct value
	        // from `getSnapshot`.
	        getServerSnapshot) {
	            {
	                if (!didWarnOld18Alpha) {
	                    if (React$1.startTransition !== undefined) {
	                        didWarnOld18Alpha = true;
	                        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
	                    }
	                }
	            }
	            // breaks the rules of React, and only works here because of specific
	            // implementation details, most importantly that updates are
	            // always synchronous.
	            var value = getSnapshot();
	            {
	                if (!didWarnUncachedGetSnapshot) {
	                    var cachedValue = getSnapshot();
	                    if (!objectIs(value, cachedValue)) {
	                        error('The result of getSnapshot should be cached to avoid an infinite loop');
	                        didWarnUncachedGetSnapshot = true;
	                    }
	                }
	            }
	            // re-render whenever the subscribed state changes by updating an some
	            // arbitrary useState hook. Then, during render, we call getSnapshot to read
	            // the current value.
	            //
	            // Because we don't actually use the state returned by the useState hook, we
	            // can save a bit of memory by storing other stuff in that slot.
	            //
	            // To implement the early bailout, we need to track some things on a mutable
	            // object. Usually, we would put that in a useRef hook, but we can stash it in
	            // our useState hook instead.
	            //
	            // To force a re-render, we call forceUpdate({inst}). That works because the
	            // new object always fails an equality check.
	            var _useState = useState({
	                inst: {
	                    value: value,
	                    getSnapshot: getSnapshot
	                }
	            }), inst = _useState[0].inst, forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
	            // in the layout phase so we can access it during the tearing check that
	            // happens on subscribe.
	            useLayoutEffect(function() {
	                inst.value = value;
	                inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
	                // commit phase if there was an interleaved mutation. In concurrent mode
	                // this can happen all the time, but even in synchronous mode, an earlier
	                // effect may have mutated the store.
	                if (checkIfSnapshotChanged(inst)) {
	                    // Force a re-render.
	                    forceUpdate({
	                        inst: inst
	                    });
	                }
	            }, [
	                subscribe,
	                value,
	                getSnapshot
	            ]);
	            useEffect(function() {
	                // Check for changes right before subscribing. Subsequent changes will be
	                // detected in the subscription handler.
	                if (checkIfSnapshotChanged(inst)) {
	                    // Force a re-render.
	                    forceUpdate({
	                        inst: inst
	                    });
	                }
	                var handleStoreChange = function() {
	                    // TODO: Because there is no cross-renderer API for batching updates, it's
	                    // up to the consumer of this library to wrap their subscription event
	                    // with unstable_batchedUpdates. Should we try to detect when this isn't
	                    // the case and print a warning in development?
	                    // The store changed. Check if the snapshot changed since the last time we
	                    // read from the store.
	                    if (checkIfSnapshotChanged(inst)) {
	                        // Force a re-render.
	                        forceUpdate({
	                            inst: inst
	                        });
	                    }
	                }; // Subscribe to the store and return a clean-up function.
	                return subscribe(handleStoreChange);
	            }, [
	                subscribe
	            ]);
	            useDebugValue(value);
	            return value;
	        }
	        function checkIfSnapshotChanged(inst) {
	            var latestGetSnapshot = inst.getSnapshot;
	            var prevValue = inst.value;
	            try {
	                var nextValue = latestGetSnapshot();
	                return !objectIs(prevValue, nextValue);
	            } catch (error) {
	                return true;
	            }
	        }
	        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
	            // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	            // React do not expose a way to check if we're hydrating. So users of the shim
	            // will need to track that themselves and return the correct value
	            // from `getSnapshot`.
	            return getSnapshot();
	        }
	        var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
	        var isServerEnvironment = !canUseDOM;
	        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
	        var useSyncExternalStore$2 = React$1.useSyncExternalStore !== undefined ? React$1.useSyncExternalStore : shim;
	        useSyncExternalStoreShim_development.useSyncExternalStore = useSyncExternalStore$2;
	        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
	            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	        }
	    })();
	}
	return useSyncExternalStoreShim_development;
}

var hasRequiredShim;

function requireShim () {
	if (hasRequiredShim) return shim.exports;
	hasRequiredShim = 1;
	if (process.env.NODE_ENV === 'production') {
	    shim.exports = requireUseSyncExternalStoreShim_production_min();
	} else {
	    shim.exports = requireUseSyncExternalStoreShim_development();
	}
	return shim.exports;
}

var shimExports = requireShim();

var withSelector = {exports: {}};

var withSelector_production_min = {};

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredWithSelector_production_min;

function requireWithSelector_production_min () {
	if (hasRequiredWithSelector_production_min) return withSelector_production_min;
	hasRequiredWithSelector_production_min = 1;
	var h = React, n = requireShim();
	function p(a, b) {
	    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var q = "function" === typeof Object.is ? Object.is : p, r = n.useSyncExternalStore, t = h.useRef, u = h.useEffect, v = h.useMemo, w = h.useDebugValue;
	withSelector_production_min.useSyncExternalStoreWithSelector = function(a, b, e, l, g) {
	    var c = t(null);
	    if (null === c.current) {
	        var f = {
	            hasValue: !1,
	            value: null
	        };
	        c.current = f;
	    } else f = c.current;
	    c = v(function() {
	        function a(a) {
	            if (!c) {
	                c = !0;
	                d = a;
	                a = l(a);
	                if (void 0 !== g && f.hasValue) {
	                    var b = f.value;
	                    if (g(b, a)) return k = b;
	                }
	                return k = a;
	            }
	            b = k;
	            if (q(d, a)) return b;
	            var e = l(a);
	            if (void 0 !== g && g(b, e)) return b;
	            d = a;
	            return k = e;
	        }
	        var c = !1, d, k, m = void 0 === e ? null : e;
	        return [
	            function() {
	                return a(b());
	            },
	            null === m ? void 0 : function() {
	                return a(m());
	            }
	        ];
	    }, [
	        b,
	        e,
	        l,
	        g
	    ]);
	    var d = r(a, c[0], c[1]);
	    u(function() {
	        f.hasValue = !0;
	        f.value = d;
	    }, [
	        d
	    ]);
	    w(d);
	    return d;
	};
	return withSelector_production_min;
}

var withSelector_development = {};

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredWithSelector_development;

function requireWithSelector_development () {
	if (hasRequiredWithSelector_development) return withSelector_development;
	hasRequiredWithSelector_development = 1;
	if (process.env.NODE_ENV !== "production") {
	    (function() {
	        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
	            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	        }
	        var React$1 = React;
	        var shim = requireShim();
	        /**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */ function is(x, y) {
	            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	            ;
	        }
	        var objectIs = typeof Object.is === 'function' ? Object.is : is;
	        var useSyncExternalStore = shim.useSyncExternalStore;
	        // for CommonJS interop.
	        var useRef = React$1.useRef, useEffect = React$1.useEffect, useMemo = React$1.useMemo, useDebugValue = React$1.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.
	        function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
	            // Use this to track the rendered snapshot.
	            var instRef = useRef(null);
	            var inst;
	            if (instRef.current === null) {
	                inst = {
	                    hasValue: false,
	                    value: null
	                };
	                instRef.current = inst;
	            } else {
	                inst = instRef.current;
	            }
	            var _useMemo = useMemo(function() {
	                // Track the memoized state using closure variables that are local to this
	                // memoized instance of a getSnapshot function. Intentionally not using a
	                // useRef hook, because that state would be shared across all concurrent
	                // copies of the hook/component.
	                var hasMemo = false;
	                var memoizedSnapshot;
	                var memoizedSelection;
	                var memoizedSelector = function(nextSnapshot) {
	                    if (!hasMemo) {
	                        // The first time the hook is called, there is no memoized result.
	                        hasMemo = true;
	                        memoizedSnapshot = nextSnapshot;
	                        var _nextSelection = selector(nextSnapshot);
	                        if (isEqual !== undefined) {
	                            // Even if the selector has changed, the currently rendered selection
	                            // may be equal to the new selection. We should attempt to reuse the
	                            // current value if possible, to preserve downstream memoizations.
	                            if (inst.hasValue) {
	                                var currentSelection = inst.value;
	                                if (isEqual(currentSelection, _nextSelection)) {
	                                    memoizedSelection = currentSelection;
	                                    return currentSelection;
	                                }
	                            }
	                        }
	                        memoizedSelection = _nextSelection;
	                        return _nextSelection;
	                    } // We may be able to reuse the previous invocation's result.
	                    // We may be able to reuse the previous invocation's result.
	                    var prevSnapshot = memoizedSnapshot;
	                    var prevSelection = memoizedSelection;
	                    if (objectIs(prevSnapshot, nextSnapshot)) {
	                        // The snapshot is the same as last time. Reuse the previous selection.
	                        return prevSelection;
	                    } // The snapshot has changed, so we need to compute a new selection.
	                    // The snapshot has changed, so we need to compute a new selection.
	                    var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
	                    // has changed. If it hasn't, return the previous selection. That signals
	                    // to React that the selections are conceptually equal, and we can bail
	                    // out of rendering.
	                    // If a custom isEqual function is provided, use that to check if the data
	                    // has changed. If it hasn't, return the previous selection. That signals
	                    // to React that the selections are conceptually equal, and we can bail
	                    // out of rendering.
	                    if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
	                        return prevSelection;
	                    }
	                    memoizedSnapshot = nextSnapshot;
	                    memoizedSelection = nextSelection;
	                    return nextSelection;
	                }; // Assigning this to a constant so that Flow knows it can't change.
	                // Assigning this to a constant so that Flow knows it can't change.
	                var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;
	                var getSnapshotWithSelector = function() {
	                    return memoizedSelector(getSnapshot());
	                };
	                var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function() {
	                    return memoizedSelector(maybeGetServerSnapshot());
	                };
	                return [
	                    getSnapshotWithSelector,
	                    getServerSnapshotWithSelector
	                ];
	            }, [
	                getSnapshot,
	                getServerSnapshot,
	                selector,
	                isEqual
	            ]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
	            var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
	            useEffect(function() {
	                inst.hasValue = true;
	                inst.value = value;
	            }, [
	                value
	            ]);
	            useDebugValue(value);
	            return value;
	        }
	        withSelector_development.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
	        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
	            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	        }
	    })();
	}
	return withSelector_development;
}

if (process.env.NODE_ENV === 'production') {
    withSelector.exports = requireWithSelector_production_min();
} else {
    withSelector.exports = requireWithSelector_development();
}

var withSelectorExports = withSelector.exports;
var useSyncExternalStoreExports = /*@__PURE__*/getDefaultExportFromCjs(withSelectorExports);

// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
    callback();
}
let batch = defaultNoopBatch; // Allow injecting another batching function later
const setBatch = (newBatch)=>batch = newBatch; // Supply a getter just to skip dealing with ESM bindings
const getBatch = ()=>batch;

const ContextKey = Symbol.for(`react-redux-context`);
const gT = typeof globalThis !== "undefined" ? globalThis : /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */ {};
function getContext() {
    var _gT$ContextKey;
    if (!React__namespace.createContext) return {};
    const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = new Map();
    let realContext = contextMap.get(React__namespace.createContext);
    if (!realContext) {
        realContext = React__namespace.createContext(null);
        if (process.env.NODE_ENV !== 'production') {
            realContext.displayName = 'ReactRedux';
        }
        contextMap.set(React__namespace.createContext, realContext);
    }
    return realContext;
}
const ReactReduxContext = /*#__PURE__*/ getContext();

const notInitialized = ()=>{
    throw new Error('uSES not initialized!');
};

function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

var reactIs$2 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min$1;

function requireReactIs_production_min$1 () {
	if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
	hasRequiredReactIs_production_min$1 = 1;
	var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
	function z(a) {
	    if ("object" === typeof a && null !== a) {
	        var u = a.$$typeof;
	        switch(u){
	            case c:
	                switch(a = a.type, a){
	                    case l:
	                    case m:
	                    case e:
	                    case g:
	                    case f:
	                    case p:
	                        return a;
	                    default:
	                        switch(a = a && a.$$typeof, a){
	                            case k:
	                            case n:
	                            case t:
	                            case r:
	                            case h:
	                                return a;
	                            default:
	                                return u;
	                        }
	                }
	            case d:
	                return u;
	        }
	    }
	}
	function A(a) {
	    return z(a) === m;
	}
	reactIs_production_min$1.AsyncMode = l;
	reactIs_production_min$1.ConcurrentMode = m;
	reactIs_production_min$1.ContextConsumer = k;
	reactIs_production_min$1.ContextProvider = h;
	reactIs_production_min$1.Element = c;
	reactIs_production_min$1.ForwardRef = n;
	reactIs_production_min$1.Fragment = e;
	reactIs_production_min$1.Lazy = t;
	reactIs_production_min$1.Memo = r;
	reactIs_production_min$1.Portal = d;
	reactIs_production_min$1.Profiler = g;
	reactIs_production_min$1.StrictMode = f;
	reactIs_production_min$1.Suspense = p;
	reactIs_production_min$1.isAsyncMode = function(a) {
	    return A(a) || z(a) === l;
	};
	reactIs_production_min$1.isConcurrentMode = A;
	reactIs_production_min$1.isContextConsumer = function(a) {
	    return z(a) === k;
	};
	reactIs_production_min$1.isContextProvider = function(a) {
	    return z(a) === h;
	};
	reactIs_production_min$1.isElement = function(a) {
	    return "object" === typeof a && null !== a && a.$$typeof === c;
	};
	reactIs_production_min$1.isForwardRef = function(a) {
	    return z(a) === n;
	};
	reactIs_production_min$1.isFragment = function(a) {
	    return z(a) === e;
	};
	reactIs_production_min$1.isLazy = function(a) {
	    return z(a) === t;
	};
	reactIs_production_min$1.isMemo = function(a) {
	    return z(a) === r;
	};
	reactIs_production_min$1.isPortal = function(a) {
	    return z(a) === d;
	};
	reactIs_production_min$1.isProfiler = function(a) {
	    return z(a) === g;
	};
	reactIs_production_min$1.isStrictMode = function(a) {
	    return z(a) === f;
	};
	reactIs_production_min$1.isSuspense = function(a) {
	    return z(a) === p;
	};
	reactIs_production_min$1.isValidElementType = function(a) {
	    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
	};
	reactIs_production_min$1.typeOf = z;
	return reactIs_production_min$1;
}

var reactIs_development$1 = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$1;

function requireReactIs_development$1 () {
	if (hasRequiredReactIs_development$1) return reactIs_development$1;
	hasRequiredReactIs_development$1 = 1;
	if (process.env.NODE_ENV !== "production") {
	    (function() {
	        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	        // nor polyfill, then a plain number is used for performance.
	        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	        // (unstable) APIs that have been removed. Can we remove the symbols?
	        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
	        function isValidElementType(type) {
	            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	        }
	        function typeOf(object) {
	            if (typeof object === 'object' && object !== null) {
	                var $$typeof = object.$$typeof;
	                switch($$typeof){
	                    case REACT_ELEMENT_TYPE:
	                        var type = object.type;
	                        switch(type){
	                            case REACT_ASYNC_MODE_TYPE:
	                            case REACT_CONCURRENT_MODE_TYPE:
	                            case REACT_FRAGMENT_TYPE:
	                            case REACT_PROFILER_TYPE:
	                            case REACT_STRICT_MODE_TYPE:
	                            case REACT_SUSPENSE_TYPE:
	                                return type;
	                            default:
	                                var $$typeofType = type && type.$$typeof;
	                                switch($$typeofType){
	                                    case REACT_CONTEXT_TYPE:
	                                    case REACT_FORWARD_REF_TYPE:
	                                    case REACT_LAZY_TYPE:
	                                    case REACT_MEMO_TYPE:
	                                    case REACT_PROVIDER_TYPE:
	                                        return $$typeofType;
	                                    default:
	                                        return $$typeof;
	                                }
	                        }
	                    case REACT_PORTAL_TYPE:
	                        return $$typeof;
	                }
	            }
	            return undefined;
	        } // AsyncMode is deprecated along with isAsyncMode
	        var AsyncMode = REACT_ASYNC_MODE_TYPE;
	        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	        var ContextConsumer = REACT_CONTEXT_TYPE;
	        var ContextProvider = REACT_PROVIDER_TYPE;
	        var Element = REACT_ELEMENT_TYPE;
	        var ForwardRef = REACT_FORWARD_REF_TYPE;
	        var Fragment = REACT_FRAGMENT_TYPE;
	        var Lazy = REACT_LAZY_TYPE;
	        var Memo = REACT_MEMO_TYPE;
	        var Portal = REACT_PORTAL_TYPE;
	        var Profiler = REACT_PROFILER_TYPE;
	        var StrictMode = REACT_STRICT_MODE_TYPE;
	        var Suspense = REACT_SUSPENSE_TYPE;
	        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
	        function isAsyncMode(object) {
	            {
	                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
	                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	                }
	            }
	            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	        }
	        function isConcurrentMode(object) {
	            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	        }
	        function isContextConsumer(object) {
	            return typeOf(object) === REACT_CONTEXT_TYPE;
	        }
	        function isContextProvider(object) {
	            return typeOf(object) === REACT_PROVIDER_TYPE;
	        }
	        function isElement(object) {
	            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	        }
	        function isForwardRef(object) {
	            return typeOf(object) === REACT_FORWARD_REF_TYPE;
	        }
	        function isFragment(object) {
	            return typeOf(object) === REACT_FRAGMENT_TYPE;
	        }
	        function isLazy(object) {
	            return typeOf(object) === REACT_LAZY_TYPE;
	        }
	        function isMemo(object) {
	            return typeOf(object) === REACT_MEMO_TYPE;
	        }
	        function isPortal(object) {
	            return typeOf(object) === REACT_PORTAL_TYPE;
	        }
	        function isProfiler(object) {
	            return typeOf(object) === REACT_PROFILER_TYPE;
	        }
	        function isStrictMode(object) {
	            return typeOf(object) === REACT_STRICT_MODE_TYPE;
	        }
	        function isSuspense(object) {
	            return typeOf(object) === REACT_SUSPENSE_TYPE;
	        }
	        reactIs_development$1.AsyncMode = AsyncMode;
	        reactIs_development$1.ConcurrentMode = ConcurrentMode;
	        reactIs_development$1.ContextConsumer = ContextConsumer;
	        reactIs_development$1.ContextProvider = ContextProvider;
	        reactIs_development$1.Element = Element;
	        reactIs_development$1.ForwardRef = ForwardRef;
	        reactIs_development$1.Fragment = Fragment;
	        reactIs_development$1.Lazy = Lazy;
	        reactIs_development$1.Memo = Memo;
	        reactIs_development$1.Portal = Portal;
	        reactIs_development$1.Profiler = Profiler;
	        reactIs_development$1.StrictMode = StrictMode;
	        reactIs_development$1.Suspense = Suspense;
	        reactIs_development$1.isAsyncMode = isAsyncMode;
	        reactIs_development$1.isConcurrentMode = isConcurrentMode;
	        reactIs_development$1.isContextConsumer = isContextConsumer;
	        reactIs_development$1.isContextProvider = isContextProvider;
	        reactIs_development$1.isElement = isElement;
	        reactIs_development$1.isForwardRef = isForwardRef;
	        reactIs_development$1.isFragment = isFragment;
	        reactIs_development$1.isLazy = isLazy;
	        reactIs_development$1.isMemo = isMemo;
	        reactIs_development$1.isPortal = isPortal;
	        reactIs_development$1.isProfiler = isProfiler;
	        reactIs_development$1.isStrictMode = isStrictMode;
	        reactIs_development$1.isSuspense = isSuspense;
	        reactIs_development$1.isValidElementType = isValidElementType;
	        reactIs_development$1.typeOf = typeOf;
	    })();
	}
	return reactIs_development$1;
}

if (process.env.NODE_ENV === 'production') {
    reactIs$2.exports = requireReactIs_production_min$1();
} else {
    reactIs$2.exports = requireReactIs_development$1();
}

var reactIsExports$1 = reactIs$2.exports;

var reactIs$1 = reactIsExports$1;
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
function getStatics(component) {
    // React v16.11 and below
    if (reactIs$1.isMemo(component)) {
        return MEMO_STATICS;
    } // React v16.12 and above
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for(var i = 0; i < keys.length; ++i){
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;

var hoistStatics = /*@__PURE__*/getDefaultExportFromCjs(hoistNonReactStatics_cjs);

var reactIs = {exports: {}};

var reactIs_production_min = {};

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
	var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
	u = Symbol.for("react.module.reference");
	function v(a) {
	    if ("object" === typeof a && null !== a) {
	        var r = a.$$typeof;
	        switch(r){
	            case b:
	                switch(a = a.type, a){
	                    case d:
	                    case f:
	                    case e:
	                    case m:
	                    case n:
	                        return a;
	                    default:
	                        switch(a = a && a.$$typeof, a){
	                            case k:
	                            case h:
	                            case l:
	                            case q:
	                            case p:
	                            case g:
	                                return a;
	                            default:
	                                return r;
	                        }
	                }
	            case c:
	                return r;
	        }
	    }
	}
	reactIs_production_min.ContextConsumer = h;
	reactIs_production_min.ContextProvider = g;
	reactIs_production_min.Element = b;
	reactIs_production_min.ForwardRef = l;
	reactIs_production_min.Fragment = d;
	reactIs_production_min.Lazy = q;
	reactIs_production_min.Memo = p;
	reactIs_production_min.Portal = c;
	reactIs_production_min.Profiler = f;
	reactIs_production_min.StrictMode = e;
	reactIs_production_min.Suspense = m;
	reactIs_production_min.SuspenseList = n;
	reactIs_production_min.isAsyncMode = function() {
	    return !1;
	};
	reactIs_production_min.isConcurrentMode = function() {
	    return !1;
	};
	reactIs_production_min.isContextConsumer = function(a) {
	    return v(a) === h;
	};
	reactIs_production_min.isContextProvider = function(a) {
	    return v(a) === g;
	};
	reactIs_production_min.isElement = function(a) {
	    return "object" === typeof a && null !== a && a.$$typeof === b;
	};
	reactIs_production_min.isForwardRef = function(a) {
	    return v(a) === l;
	};
	reactIs_production_min.isFragment = function(a) {
	    return v(a) === d;
	};
	reactIs_production_min.isLazy = function(a) {
	    return v(a) === q;
	};
	reactIs_production_min.isMemo = function(a) {
	    return v(a) === p;
	};
	reactIs_production_min.isPortal = function(a) {
	    return v(a) === c;
	};
	reactIs_production_min.isProfiler = function(a) {
	    return v(a) === f;
	};
	reactIs_production_min.isStrictMode = function(a) {
	    return v(a) === e;
	};
	reactIs_production_min.isSuspense = function(a) {
	    return v(a) === m;
	};
	reactIs_production_min.isSuspenseList = function(a) {
	    return v(a) === n;
	};
	reactIs_production_min.isValidElementType = function(a) {
	    return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? !0 : !1;
	};
	reactIs_production_min.typeOf = v;
	return reactIs_production_min;
}

var reactIs_development = {};

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;
	if (process.env.NODE_ENV !== "production") {
	    (function() {
	        // ATTENTION
	        // When adding new symbols to this file,
	        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	        // The Symbol used to tag the ReactElement-like types.
	        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	        var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
	        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	        var REACT_MEMO_TYPE = Symbol.for('react.memo');
	        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	        // -----------------------------------------------------------------------------
	        var enableScopeAPI = false; // Experimental Create Event Handle API.
	        var enableCacheElement = false;
	        var enableTransitionTracing = false; // No known bugs, but needs performance testing
	        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	        // stuff. Intended to enable React core members to more easily debug scheduling
	        // issues in DEV builds.
	        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
	        var REACT_MODULE_REFERENCE;
	        {
	            REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	        }
	        function isValidElementType(type) {
	            if (typeof type === 'string' || typeof type === 'function') {
	                return true;
	            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
	            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
	                return true;
	            }
	            if (typeof type === 'object' && type !== null) {
	                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	                // types supported by any Flight configuration anywhere since
	                // we don't know which Flight build this will end up being used
	                // with.
	                type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	                    return true;
	                }
	            }
	            return false;
	        }
	        function typeOf(object) {
	            if (typeof object === 'object' && object !== null) {
	                var $$typeof = object.$$typeof;
	                switch($$typeof){
	                    case REACT_ELEMENT_TYPE:
	                        var type = object.type;
	                        switch(type){
	                            case REACT_FRAGMENT_TYPE:
	                            case REACT_PROFILER_TYPE:
	                            case REACT_STRICT_MODE_TYPE:
	                            case REACT_SUSPENSE_TYPE:
	                            case REACT_SUSPENSE_LIST_TYPE:
	                                return type;
	                            default:
	                                var $$typeofType = type && type.$$typeof;
	                                switch($$typeofType){
	                                    case REACT_SERVER_CONTEXT_TYPE:
	                                    case REACT_CONTEXT_TYPE:
	                                    case REACT_FORWARD_REF_TYPE:
	                                    case REACT_LAZY_TYPE:
	                                    case REACT_MEMO_TYPE:
	                                    case REACT_PROVIDER_TYPE:
	                                        return $$typeofType;
	                                    default:
	                                        return $$typeof;
	                                }
	                        }
	                    case REACT_PORTAL_TYPE:
	                        return $$typeof;
	                }
	            }
	            return undefined;
	        }
	        var ContextConsumer = REACT_CONTEXT_TYPE;
	        var ContextProvider = REACT_PROVIDER_TYPE;
	        var Element = REACT_ELEMENT_TYPE;
	        var ForwardRef = REACT_FORWARD_REF_TYPE;
	        var Fragment = REACT_FRAGMENT_TYPE;
	        var Lazy = REACT_LAZY_TYPE;
	        var Memo = REACT_MEMO_TYPE;
	        var Portal = REACT_PORTAL_TYPE;
	        var Profiler = REACT_PROFILER_TYPE;
	        var StrictMode = REACT_STRICT_MODE_TYPE;
	        var Suspense = REACT_SUSPENSE_TYPE;
	        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	        var hasWarnedAboutDeprecatedIsAsyncMode = false;
	        var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated
	        function isAsyncMode(object) {
	            {
	                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
	                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	                }
	            }
	            return false;
	        }
	        function isConcurrentMode(object) {
	            {
	                if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	                    hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint
	                    console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	                }
	            }
	            return false;
	        }
	        function isContextConsumer(object) {
	            return typeOf(object) === REACT_CONTEXT_TYPE;
	        }
	        function isContextProvider(object) {
	            return typeOf(object) === REACT_PROVIDER_TYPE;
	        }
	        function isElement(object) {
	            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	        }
	        function isForwardRef(object) {
	            return typeOf(object) === REACT_FORWARD_REF_TYPE;
	        }
	        function isFragment(object) {
	            return typeOf(object) === REACT_FRAGMENT_TYPE;
	        }
	        function isLazy(object) {
	            return typeOf(object) === REACT_LAZY_TYPE;
	        }
	        function isMemo(object) {
	            return typeOf(object) === REACT_MEMO_TYPE;
	        }
	        function isPortal(object) {
	            return typeOf(object) === REACT_PORTAL_TYPE;
	        }
	        function isProfiler(object) {
	            return typeOf(object) === REACT_PROFILER_TYPE;
	        }
	        function isStrictMode(object) {
	            return typeOf(object) === REACT_STRICT_MODE_TYPE;
	        }
	        function isSuspense(object) {
	            return typeOf(object) === REACT_SUSPENSE_TYPE;
	        }
	        function isSuspenseList(object) {
	            return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	        }
	        reactIs_development.ContextConsumer = ContextConsumer;
	        reactIs_development.ContextProvider = ContextProvider;
	        reactIs_development.Element = Element;
	        reactIs_development.ForwardRef = ForwardRef;
	        reactIs_development.Fragment = Fragment;
	        reactIs_development.Lazy = Lazy;
	        reactIs_development.Memo = Memo;
	        reactIs_development.Portal = Portal;
	        reactIs_development.Profiler = Profiler;
	        reactIs_development.StrictMode = StrictMode;
	        reactIs_development.Suspense = Suspense;
	        reactIs_development.SuspenseList = SuspenseList;
	        reactIs_development.isAsyncMode = isAsyncMode;
	        reactIs_development.isConcurrentMode = isConcurrentMode;
	        reactIs_development.isContextConsumer = isContextConsumer;
	        reactIs_development.isContextProvider = isContextProvider;
	        reactIs_development.isElement = isElement;
	        reactIs_development.isForwardRef = isForwardRef;
	        reactIs_development.isFragment = isFragment;
	        reactIs_development.isLazy = isLazy;
	        reactIs_development.isMemo = isMemo;
	        reactIs_development.isPortal = isPortal;
	        reactIs_development.isProfiler = isProfiler;
	        reactIs_development.isStrictMode = isStrictMode;
	        reactIs_development.isSuspense = isSuspense;
	        reactIs_development.isSuspenseList = isSuspenseList;
	        reactIs_development.isValidElementType = isValidElementType;
	        reactIs_development.typeOf = typeOf;
	    })();
	}
	return reactIs_development;
}

if (process.env.NODE_ENV === 'production') {
    reactIs.exports = requireReactIs_production_min();
} else {
    reactIs.exports = requireReactIs_development();
}

var reactIsExports = reactIs.exports;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ function warning$1(message) {
    /* eslint-disable no-console */ if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(message);
    }
    /* eslint-enable no-console */ try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
    /* eslint-disable no-empty */ } catch (e) {}
/* eslint-enable no-empty */ }

function verify(selector, methodName) {
    if (!selector) {
        throw new Error(`Unexpected value for ${methodName} in connect.`);
    } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
        if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
            warning$1(`The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`);
        }
    }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
    verify(mapStateToProps, 'mapStateToProps');
    verify(mapDispatchToProps, 'mapDispatchToProps');
    verify(mergeProps, 'mergeProps');
}

const _excluded$1 = [
    "initMapStateToProps",
    "initMapDispatchToProps",
    "initMergeProps"
];
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, { areStatesEqual, areOwnPropsEqual, areStatePropsEqual }) {
    let hasRunAtLeastOnce = false;
    let state;
    let ownProps;
    let stateProps;
    let dispatchProps;
    let mergedProps;
    function handleFirstCall(firstState, firstOwnProps) {
        state = firstState;
        ownProps = firstOwnProps;
        stateProps = mapStateToProps(state, ownProps);
        dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        hasRunAtLeastOnce = true;
        return mergedProps;
    }
    function handleNewPropsAndNewState() {
        stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleNewProps() {
        if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleNewState() {
        const nextStateProps = mapStateToProps(state, ownProps);
        const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
        stateProps = nextStateProps;
        if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleSubsequentCalls(nextState, nextOwnProps) {
        const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
        const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
        state = nextState;
        ownProps = nextOwnProps;
        if (propsChanged && stateChanged) return handleNewPropsAndNewState();
        if (propsChanged) return handleNewProps();
        if (stateChanged) return handleNewState();
        return mergedProps;
    }
    return function pureFinalPropsSelector(nextState, nextOwnProps) {
        return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
    };
}
// TODO: Add more comments
// The selector returned by selectorFactory will memoize its results,
// allowing connect's shouldComponentUpdate to return false if final
// props have not changed.
function finalPropsSelectorFactory(dispatch, _ref) {
    let { initMapStateToProps, initMapDispatchToProps, initMergeProps } = _ref, options = _objectWithoutPropertiesLoose(_ref, _excluded$1);
    const mapStateToProps = initMapStateToProps(dispatch, options);
    const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
    const mergeProps = initMergeProps(dispatch, options);
    if (process.env.NODE_ENV !== 'production') {
        verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps);
    }
    return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

function bindActionCreators(actionCreators, dispatch) {
    const boundActionCreators = {};
    for(const key in actionCreators){
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') {
            boundActionCreators[key] = (...args)=>dispatch(actionCreator(...args));
        }
    }
    return boundActionCreators;
}

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ function isPlainObject$1(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    let proto = Object.getPrototypeOf(obj);
    if (proto === null) return true;
    let baseProto = proto;
    while(Object.getPrototypeOf(baseProto) !== null){
        baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
}

function verifyPlainObject(value, displayName, methodName) {
    if (!isPlainObject$1(value)) {
        warning$1(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
    }
}

function wrapMapToPropsConstant(//  It seems that the dispatch argument
//  could be a dispatch function in some cases (ex: whenMapDispatchToPropsIsMissing)
//  and a state object in some others (ex: whenMapStateToPropsIsMissing)
// eslint-disable-next-line no-unused-vars
getConstant) {
    return function initConstantSelector(dispatch) {
        const constant = getConstant(dispatch);
        function constantSelector() {
            return constant;
        }
        constantSelector.dependsOnOwnProps = false;
        return constantSelector;
    };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
// TODO Can this get pulled out so that we can subscribe directly to the store if we don't need ownProps?
function getDependsOnOwnProps(mapToProps) {
    return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//
function wrapMapToPropsFunc(mapToProps, methodName) {
    return function initProxySelector(dispatch, { displayName }) {
        const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
            return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, undefined);
        }; // allow detectFactoryAndVerify to get ownProps
        proxy.dependsOnOwnProps = true;
        proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
            proxy.mapToProps = mapToProps;
            proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
            let props = proxy(stateOrDispatch, ownProps);
            if (typeof props === 'function') {
                proxy.mapToProps = props;
                proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
                props = proxy(stateOrDispatch, ownProps);
            }
            if (process.env.NODE_ENV !== 'production') verifyPlainObject(props, displayName, methodName);
            return props;
        };
        return proxy;
    };
}

function createInvalidArgFactory(arg, name) {
    return (dispatch, options)=>{
        throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
    };
}

function mapDispatchToPropsFactory(mapDispatchToProps) {
    return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant((dispatch)=>bindActionCreators(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch)=>({
            dispatch
        })) : typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : createInvalidArgFactory(mapDispatchToProps, 'mapDispatchToProps');
}

function mapStateToPropsFactory(mapStateToProps) {
    return !mapStateToProps ? wrapMapToPropsConstant(()=>({})) : typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : createInvalidArgFactory(mapStateToProps, 'mapStateToProps');
}

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
    // @ts-ignore
    return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
    return function initMergePropsProxy(dispatch, { displayName, areMergedPropsEqual }) {
        let hasRunOnce = false;
        let mergedProps;
        return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
            const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
            if (hasRunOnce) {
                if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
            } else {
                hasRunOnce = true;
                mergedProps = nextMergedProps;
                if (process.env.NODE_ENV !== 'production') verifyPlainObject(mergedProps, displayName, 'mergeProps');
            }
            return mergedProps;
        };
    };
}
function mergePropsFactory(mergeProps) {
    return !mergeProps ? ()=>defaultMergeProps : typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, 'mergeProps');
}

// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
function createListenerCollection() {
    const batch = getBatch();
    let first = null;
    let last = null;
    return {
        clear () {
            first = null;
            last = null;
        },
        notify () {
            batch(()=>{
                let listener = first;
                while(listener){
                    listener.callback();
                    listener = listener.next;
                }
            });
        },
        get () {
            let listeners = [];
            let listener = first;
            while(listener){
                listeners.push(listener);
                listener = listener.next;
            }
            return listeners;
        },
        subscribe (callback) {
            let isSubscribed = true;
            let listener = last = {
                callback,
                next: null,
                prev: last
            };
            if (listener.prev) {
                listener.prev.next = listener;
            } else {
                first = listener;
            }
            return function unsubscribe() {
                if (!isSubscribed || first === null) return;
                isSubscribed = false;
                if (listener.next) {
                    listener.next.prev = listener.prev;
                } else {
                    last = listener.prev;
                }
                if (listener.prev) {
                    listener.prev.next = listener.next;
                } else {
                    first = listener.next;
                }
            };
        }
    };
}
const nullListeners = {
    notify () {},
    get: ()=>[]
};
function createSubscription(store, parentSub) {
    let unsubscribe;
    let listeners = nullListeners; // Reasons to keep the subscription active
    let subscriptionsAmount = 0; // Is this specific subscription subscribed (or only nested ones?)
    let selfSubscribed = false;
    function addNestedSub(listener) {
        trySubscribe();
        const cleanupListener = listeners.subscribe(listener); // cleanup nested sub
        let removed = false;
        return ()=>{
            if (!removed) {
                removed = true;
                cleanupListener();
                tryUnsubscribe();
            }
        };
    }
    function notifyNestedSubs() {
        listeners.notify();
    }
    function handleChangeWrapper() {
        if (subscription.onStateChange) {
            subscription.onStateChange();
        }
    }
    function isSubscribed() {
        return selfSubscribed;
    }
    function trySubscribe() {
        subscriptionsAmount++;
        if (!unsubscribe) {
            unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
            listeners = createListenerCollection();
        }
    }
    function tryUnsubscribe() {
        subscriptionsAmount--;
        if (unsubscribe && subscriptionsAmount === 0) {
            unsubscribe();
            unsubscribe = undefined;
            listeners.clear();
            listeners = nullListeners;
        }
    }
    function trySubscribeSelf() {
        if (!selfSubscribed) {
            selfSubscribed = true;
            trySubscribe();
        }
    }
    function tryUnsubscribeSelf() {
        if (selfSubscribed) {
            selfSubscribed = false;
            tryUnsubscribe();
        }
    }
    const subscription = {
        addNestedSub,
        notifyNestedSubs,
        handleChangeWrapper,
        isSubscribed,
        trySubscribe: trySubscribeSelf,
        tryUnsubscribe: tryUnsubscribeSelf,
        getListeners: ()=>listeners
    };
    return subscription;
}

// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file
const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
const useIsomorphicLayoutEffect$1 = canUseDOM ? React__namespace.useLayoutEffect : React__namespace.useEffect;

function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for(let i = 0; i < keysA.length; i++){
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}

const _excluded = [
    "reactReduxForwardedRef"
];
let useSyncExternalStore = notInitialized;
const initializeConnect = (fn)=>{
    useSyncExternalStore = fn;
}; // Define some constant arrays just to avoid re-creating these
const NO_SUBSCRIPTION_ARRAY = [
    null,
    null
]; // Attempts to stringify whatever not-really-a-component value we were given
// for logging in an error message
const stringifyComponent = (Comp)=>{
    try {
        return JSON.stringify(Comp);
    } catch (err) {
        return String(Comp);
    }
};
// This is "just" a `useLayoutEffect`, but with two modifications:
// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
// - we extract this to a separate function to avoid closing over values
//   and causing memory leaks
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
    useIsomorphicLayoutEffect$1(()=>effectFunc(...effectArgs), dependencies);
} // Effect callback, extracted: assign the latest props values to refs for later usage
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
    // We want to capture the wrapper props and child props we used for later comparisons
    lastWrapperProps.current = wrapperProps;
    renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update
    if (childPropsFromStoreUpdate.current) {
        childPropsFromStoreUpdate.current = null;
        notifyNestedSubs();
    }
} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
// check for updates after dispatched actions, and trigger re-renders.
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
    // If we're not subscribed to the store, nothing to do here
    if (!shouldHandleStateChanges) return ()=>{}; // Capture values for checking if and when this component unmounts
    let didUnsubscribe = false;
    let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component
    const checkForUpdates = ()=>{
        if (didUnsubscribe || !isMounted.current) {
            // Don't run stale listeners.
            // Redux doesn't guarantee unsubscriptions happen until next dispatch.
            return;
        } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it
        const latestStoreState = store.getState();
        let newChildProps, error;
        try {
            // Actually run the selector with the most recent store state and wrapper props
            // to determine what the child props should be
            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
        } catch (e) {
            error = e;
            lastThrownError = e;
        }
        if (!error) {
            lastThrownError = null;
        } // If the child props haven't changed, nothing to do here - cascade the subscription update
        if (newChildProps === lastChildProps.current) {
            if (!renderIsScheduled.current) {
                notifyNestedSubs();
            }
        } else {
            // Save references to the new child props.  Note that we track the "child props from store update"
            // as a ref instead of a useState/useReducer because we need a way to determine if that value has
            // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
            // forcing another re-render, which we don't want.
            lastChildProps.current = newChildProps;
            childPropsFromStoreUpdate.current = newChildProps;
            renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
            // Trigger the React `useSyncExternalStore` subscriber
            additionalSubscribeListener();
        }
    }; // Actually subscribe to the nearest connected ancestor (or store)
    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe(); // Pull data from the store after first render in case the store has
    // changed since we began.
    checkForUpdates();
    const unsubscribeWrapper = ()=>{
        didUnsubscribe = true;
        subscription.tryUnsubscribe();
        subscription.onStateChange = null;
        if (lastThrownError) {
            // It's possible that we caught an error due to a bad mapState function, but the
            // parent re-rendered without this component and we're about to unmount.
            // This shouldn't happen as long as we do top-down subscriptions correctly, but
            // if we ever do those wrong, this throw will surface the error in our tests.
            // In that case, throw the error from here so it doesn't get lost.
            throw lastThrownError;
        }
    };
    return unsubscribeWrapper;
} // Reducer initial state creation for our update reducer
function strictEqual(a, b) {
    return a === b;
}
/**
 * Infers the type of props that a connector will inject into a component.
 */ let hasWarnedAboutDeprecatedPureOption = false;
/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps A function that extracts values from state
 * @param mapDispatchToProps Setup for dispatching actions
 * @param mergeProps Optional callback to merge state and dispatch props together
 * @param options Options for configuring the connection
 *
 */ function connect(mapStateToProps, mapDispatchToProps, mergeProps, { // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
// @ts-ignore
pure, areStatesEqual = strictEqual, areOwnPropsEqual = shallowEqual, areStatePropsEqual = shallowEqual, areMergedPropsEqual = shallowEqual, // use React's forwardRef to expose a ref of the wrapped component
forwardRef = false, // the context consumer to use
context = ReactReduxContext } = {}) {
    if (process.env.NODE_ENV !== 'production') {
        if (pure !== undefined && !hasWarnedAboutDeprecatedPureOption) {
            hasWarnedAboutDeprecatedPureOption = true;
            warning$1('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');
        }
    }
    const Context = context;
    const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
    const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
    const initMergeProps = mergePropsFactory(mergeProps);
    const shouldHandleStateChanges = Boolean(mapStateToProps);
    const wrapWithConnect = (WrappedComponent)=>{
        if (process.env.NODE_ENV !== 'production' && !reactIsExports.isValidElementType(WrappedComponent)) {
            throw new Error(`You must pass a component to the function returned by connect. Instead received ${stringifyComponent(WrappedComponent)}`);
        }
        const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
        const displayName = `Connect(${wrappedComponentName})`;
        const selectorFactoryOptions = {
            shouldHandleStateChanges,
            displayName,
            wrappedComponentName,
            WrappedComponent,
            // @ts-ignore
            initMapStateToProps,
            // @ts-ignore
            initMapDispatchToProps,
            initMergeProps,
            areStatesEqual,
            areStatePropsEqual,
            areOwnPropsEqual,
            areMergedPropsEqual
        };
        function ConnectFunction(props) {
            const [propsContext, reactReduxForwardedRef, wrapperProps] = React__namespace.useMemo(()=>{
                // Distinguish between actual "data" props that were passed to the wrapper component,
                // and values needed to control behavior (forwarded refs, alternate context instances).
                // To maintain the wrapperProps object reference, memoize this destructuring.
                const { reactReduxForwardedRef } = props, wrapperProps = _objectWithoutPropertiesLoose(props, _excluded);
                return [
                    props.context,
                    reactReduxForwardedRef,
                    wrapperProps
                ];
            }, [
                props
            ]);
            const ContextToUse = React__namespace.useMemo(()=>{
                // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
                // Memoize the check that determines which context instance we should use.
                return propsContext && propsContext.Consumer && // @ts-ignore
                reactIsExports.isContextConsumer(/*#__PURE__*/ React__namespace.createElement(propsContext.Consumer, null)) ? propsContext : Context;
            }, [
                propsContext,
                Context
            ]); // Retrieve the store and ancestor subscription via context, if available
            const contextValue = React__namespace.useContext(ContextToUse); // The store _must_ exist as either a prop or in context.
            // We'll check to see if it _looks_ like a Redux store first.
            // This allows us to pass through a `store` prop that is just a plain value.
            const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
            const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
            if (process.env.NODE_ENV !== 'production' && !didStoreComeFromProps && !didStoreComeFromContext) {
                throw new Error(`Could not find "store" in the context of ` + `"${displayName}". Either wrap the root component in a <Provider>, ` + `or pass a custom React context provider to <Provider> and the corresponding ` + `React context consumer to ${displayName} in connect options.`);
            } // Based on the previous check, one of these must be true
            const store = didStoreComeFromProps ? props.store : contextValue.store;
            const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
            const childPropsSelector = React__namespace.useMemo(()=>{
                // The child props selector needs the store reference as an input.
                // Re-create this selector whenever the store changes.
                return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
            }, [
                store
            ]);
            const [subscription, notifyNestedSubs] = React__namespace.useMemo(()=>{
                if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
                // connected to the store via props shouldn't use subscription from context, or vice versa.
                const subscription = createSubscription(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
                // the middle of the notification loop, where `subscription` will then be null. This can
                // probably be avoided if Subscription's listeners logic is changed to not call listeners
                // that have been unsubscribed in the  middle of the notification loop.
                const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
                return [
                    subscription,
                    notifyNestedSubs
                ];
            }, [
                store,
                didStoreComeFromProps,
                contextValue
            ]); // Determine what {store, subscription} value should be put into nested context, if necessary,
            // and memoize that value to avoid unnecessary context updates.
            const overriddenContextValue = React__namespace.useMemo(()=>{
                if (didStoreComeFromProps) {
                    // This component is directly subscribed to a store from props.
                    // We don't want descendants reading from this store - pass down whatever
                    // the existing context value is from the nearest connected ancestor.
                    return contextValue;
                } // Otherwise, put this component's subscription instance into context, so that
                // connected descendants won't update until after this component is done
                return _extends({}, contextValue, {
                    subscription
                });
            }, [
                didStoreComeFromProps,
                contextValue,
                subscription
            ]); // Set up refs to coordinate values between the subscription effect and the render logic
            const lastChildProps = React__namespace.useRef();
            const lastWrapperProps = React__namespace.useRef(wrapperProps);
            const childPropsFromStoreUpdate = React__namespace.useRef();
            const renderIsScheduled = React__namespace.useRef(false);
            React__namespace.useRef(false);
            const isMounted = React__namespace.useRef(false);
            const latestSubscriptionCallbackError = React__namespace.useRef();
            useIsomorphicLayoutEffect$1(()=>{
                isMounted.current = true;
                return ()=>{
                    isMounted.current = false;
                };
            }, []);
            const actualChildPropsSelector = React__namespace.useMemo(()=>{
                const selector = ()=>{
                    // Tricky logic here:
                    // - This render may have been triggered by a Redux store update that produced new child props
                    // - However, we may have gotten new wrapper props after that
                    // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
                    // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
                    // So, we'll use the child props from store update only if the wrapper props are the same as last time.
                    if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
                        return childPropsFromStoreUpdate.current;
                    } // TODO We're reading the store directly in render() here. Bad idea?
                    // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
                    // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
                    // to determine what the child props should be.
                    return childPropsSelector(store.getState(), wrapperProps);
                };
                return selector;
            }, [
                store,
                wrapperProps
            ]); // We need this to execute synchronously every time we re-render. However, React warns
            // about useLayoutEffect in SSR, so we try to detect environment and fall back to
            // just useEffect instead to avoid the warning, since neither will run anyway.
            const subscribeForReact = React__namespace.useMemo(()=>{
                const subscribe = (reactListener)=>{
                    if (!subscription) {
                        return ()=>{};
                    }
                    return subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
                };
                return subscribe;
            }, [
                subscription
            ]);
            useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
                lastWrapperProps,
                lastChildProps,
                renderIsScheduled,
                wrapperProps,
                childPropsFromStoreUpdate,
                notifyNestedSubs
            ]);
            let actualChildProps;
            try {
                actualChildProps = useSyncExternalStore(subscribeForReact, // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
                actualChildPropsSelector, getServerState ? ()=>childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
            } catch (err) {
                if (latestSubscriptionCallbackError.current) {
                    err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
                }
                throw err;
            }
            useIsomorphicLayoutEffect$1(()=>{
                latestSubscriptionCallbackError.current = undefined;
                childPropsFromStoreUpdate.current = undefined;
                lastChildProps.current = actualChildProps;
            }); // Now that all that's done, we can finally try to actually render the child component.
            // We memoize the elements for the rendered child component as an optimization.
            const renderedWrappedComponent = React__namespace.useMemo(()=>{
                return(/*#__PURE__*/ // @ts-ignore
                React__namespace.createElement(WrappedComponent, _extends({}, actualChildProps, {
                    ref: reactReduxForwardedRef
                })));
            }, [
                reactReduxForwardedRef,
                WrappedComponent,
                actualChildProps
            ]); // If React sees the exact same element reference as last time, it bails out of re-rendering
            // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.
            const renderedChild = React__namespace.useMemo(()=>{
                if (shouldHandleStateChanges) {
                    // If this component is subscribed to store updates, we need to pass its own
                    // subscription instance down to our descendants. That means rendering the same
                    // Context instance, and putting a different value into the context.
                    return /*#__PURE__*/ React__namespace.createElement(ContextToUse.Provider, {
                        value: overriddenContextValue
                    }, renderedWrappedComponent);
                }
                return renderedWrappedComponent;
            }, [
                ContextToUse,
                renderedWrappedComponent,
                overriddenContextValue
            ]);
            return renderedChild;
        }
        const _Connect = React__namespace.memo(ConnectFunction);
        // Add a hacky cast to get the right output type
        const Connect = _Connect;
        Connect.WrappedComponent = WrappedComponent;
        Connect.displayName = ConnectFunction.displayName = displayName;
        if (forwardRef) {
            const _forwarded = React__namespace.forwardRef(function forwardConnectRef(props, ref) {
                // @ts-ignore
                return /*#__PURE__*/ React__namespace.createElement(Connect, _extends({}, props, {
                    reactReduxForwardedRef: ref
                }));
            });
            const forwarded = _forwarded;
            forwarded.displayName = displayName;
            forwarded.WrappedComponent = WrappedComponent;
            return hoistStatics(forwarded, WrappedComponent);
        }
        return hoistStatics(Connect, WrappedComponent);
    };
    return wrapWithConnect;
}

function Provider({ store, context, children, serverState, stabilityCheck = 'once', noopCheck = 'once' }) {
    const contextValue = React__namespace.useMemo(()=>{
        const subscription = createSubscription(store);
        return {
            store,
            subscription,
            getServerState: serverState ? ()=>serverState : undefined,
            stabilityCheck,
            noopCheck
        };
    }, [
        store,
        serverState,
        stabilityCheck,
        noopCheck
    ]);
    const previousState = React__namespace.useMemo(()=>store.getState(), [
        store
    ]);
    useIsomorphicLayoutEffect$1(()=>{
        const { subscription } = contextValue;
        subscription.onStateChange = subscription.notifyNestedSubs;
        subscription.trySubscribe();
        if (previousState !== store.getState()) {
            subscription.notifyNestedSubs();
        }
        return ()=>{
            subscription.tryUnsubscribe();
            subscription.onStateChange = undefined;
        };
    }, [
        contextValue,
        previousState
    ]);
    const Context = context || ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype
    return /*#__PURE__*/ React__namespace.createElement(Context.Provider, {
        value: contextValue
    }, children);
}

// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.
initializeConnect(shimExports.useSyncExternalStore); // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)
setBatch(ReactDOM.unstable_batchedUpdates);

function areInputsEqual$1(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for(var i = 0; i < newInputs.length; i++){
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}
function useMemoOne(getResult, inputs) {
    var initial = React.useState(function() {
        return {
            inputs: inputs,
            result: getResult()
        };
    })[0];
    var isFirstRun = React.useRef(true);
    var committed = React.useRef(initial);
    var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual$1(inputs, committed.current.inputs));
    var cache = useCache ? committed.current : {
        inputs: inputs,
        result: getResult()
    };
    React.useEffect(function() {
        isFirstRun.current = false;
        committed.current = cache;
    }, [
        cache
    ]);
    return cache.result;
}
function useCallbackOne(callback, inputs) {
    return useMemoOne(function() {
        return callback;
    }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;

var isProduction$2 = process.env.NODE_ENV === 'production';
var prefix$2 = 'Invariant failed';
function invariant$1(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction$2) {
        throw new Error(prefix$2);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix$2, ": ").concat(provided) : prefix$2;
    throw new Error(value);
}

var getRect = function getRect(_ref) {
    var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
    var width = right - left;
    var height = bottom - top;
    var rect = {
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        width: width,
        height: height,
        x: left,
        y: top,
        center: {
            x: (right + left) / 2,
            y: (bottom + top) / 2
        }
    };
    return rect;
};
var expand = function expand(target, expandBy) {
    return {
        top: target.top - expandBy.top,
        left: target.left - expandBy.left,
        bottom: target.bottom + expandBy.bottom,
        right: target.right + expandBy.right
    };
};
var shrink = function shrink(target, shrinkBy) {
    return {
        top: target.top + shrinkBy.top,
        left: target.left + shrinkBy.left,
        bottom: target.bottom - shrinkBy.bottom,
        right: target.right - shrinkBy.right
    };
};
var shift = function shift(target, shiftBy) {
    return {
        top: target.top + shiftBy.y,
        left: target.left + shiftBy.x,
        bottom: target.bottom + shiftBy.y,
        right: target.right + shiftBy.x
    };
};
var noSpacing$1 = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};
var createBox = function createBox(_ref2) {
    var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing$1 : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing$1 : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing$1 : _ref2$padding;
    var marginBox = getRect(expand(borderBox, margin));
    var paddingBox = getRect(shrink(borderBox, border));
    var contentBox = getRect(shrink(paddingBox, padding));
    return {
        marginBox: marginBox,
        borderBox: getRect(borderBox),
        paddingBox: paddingBox,
        contentBox: contentBox,
        margin: margin,
        border: border,
        padding: padding
    };
};
var parse = function parse(raw) {
    var value = raw.slice(0, -2);
    var suffix = raw.slice(-2);
    if (suffix !== 'px') {
        return 0;
    }
    var result = Number(value);
    !!isNaN(result) ? process.env.NODE_ENV !== "production" ? invariant$1(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant$1(false) : void 0;
    return result;
};
var getWindowScroll$1 = function getWindowScroll() {
    return {
        x: window.pageXOffset,
        y: window.pageYOffset
    };
};
var offset = function offset(original, change) {
    var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;
    var shifted = shift(borderBox, change);
    return createBox({
        borderBox: shifted,
        border: border,
        margin: margin,
        padding: padding
    });
};
var withScroll = function withScroll(original, scroll) {
    if (scroll === void 0) {
        scroll = getWindowScroll$1();
    }
    return offset(original, scroll);
};
var calculateBox = function calculateBox(borderBox, styles) {
    var margin = {
        top: parse(styles.marginTop),
        right: parse(styles.marginRight),
        bottom: parse(styles.marginBottom),
        left: parse(styles.marginLeft)
    };
    var padding = {
        top: parse(styles.paddingTop),
        right: parse(styles.paddingRight),
        bottom: parse(styles.paddingBottom),
        left: parse(styles.paddingLeft)
    };
    var border = {
        top: parse(styles.borderTopWidth),
        right: parse(styles.borderRightWidth),
        bottom: parse(styles.borderBottomWidth),
        left: parse(styles.borderLeftWidth)
    };
    return createBox({
        borderBox: borderBox,
        margin: margin,
        padding: padding,
        border: border
    });
};
var getBox = function getBox(el) {
    var borderBox = el.getBoundingClientRect();
    var styles = window.getComputedStyle(el);
    return calculateBox(borderBox, styles);
};

var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === 'number' && value !== value;
};
function isEqual$2(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for(var i = 0; i < newInputs.length; i++){
        if (!isEqual$2(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}
function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) {
        isEqual = areInputsEqual;
    }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++){
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}

var rafSchd = function rafSchd(fn) {
    var lastArgs = [];
    var frameId = null;
    var wrapperFn = function wrapperFn() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        lastArgs = args;
        if (frameId) {
            return;
        }
        frameId = requestAnimationFrame(function() {
            frameId = null;
            fn.apply(void 0, lastArgs);
        });
    };
    wrapperFn.cancel = function() {
        if (!frameId) {
            return;
        }
        cancelAnimationFrame(frameId);
        frameId = null;
    };
    return wrapperFn;
};

const isProduction$1 = process.env.NODE_ENV === 'production';
const spacesAndTabs = /[ \t]{2,}/g;
const lineStartWithSpaces = /^[ \t]*/gm;
const clean$2 = (value)=>value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
const getDevMessage = (message)=>clean$2(`
  %c@hello-pangea/dnd

  %c${clean$2(message)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`);
const getFormattedMessage = (message)=>[
        getDevMessage(message),
        'color: #00C584; font-size: 1.2em; font-weight: bold;',
        'line-height: 1.5',
        'color: #723874;'
    ];
const isDisabledFlag = '__@hello-pangea/dnd-disable-dev-warnings';
function log(type, message) {
    if (isProduction$1) {
        return;
    }
    if (typeof window !== 'undefined' && window[isDisabledFlag]) {
        return;
    }
    console[type](...getFormattedMessage(message));
}
const warning = log.bind(null, 'warn');
const error = log.bind(null, 'error');
function noop$2() {}
function getOptions(shared, fromBinding) {
    return {
        ...shared,
        ...fromBinding
    };
}
function bindEvents(el, bindings, sharedOptions) {
    const unbindings = bindings.map((binding)=>{
        const options = getOptions(sharedOptions, binding.options);
        el.addEventListener(binding.eventName, binding.fn, options);
        return function unbind() {
            el.removeEventListener(binding.eventName, binding.fn, options);
        };
    });
    return function unbindAll() {
        unbindings.forEach((unbind)=>{
            unbind();
        });
    };
}
const isProduction = process.env.NODE_ENV === 'production';
const prefix$1 = 'Invariant failed';
class RbdInvariant extends Error {
}
RbdInvariant.prototype.toString = function toString() {
    return this.message;
};
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new RbdInvariant(prefix$1);
    } else {
        throw new RbdInvariant(`${prefix$1}: ${message || ''}`);
    }
}
class ErrorBoundary extends React.Component {
    componentDidMount() {
        this.unbind = bindEvents(window, [
            {
                eventName: 'error',
                fn: this.onWindowError
            }
        ]);
    }
    componentDidCatch(err) {
        if (err instanceof RbdInvariant) {
            if (process.env.NODE_ENV !== 'production') {
                error(err.message);
            }
            this.setState({});
            return;
        }
        throw err;
    }
    componentWillUnmount() {
        this.unbind();
    }
    render() {
        return this.props.children(this.setCallbacks);
    }
    constructor(...args){
        super(...args);
        this.callbacks = null;
        this.unbind = noop$2;
        this.onWindowError = (event)=>{
            const callbacks = this.getCallbacks();
            if (callbacks.isDragging()) {
                callbacks.tryAbort();
                process.env.NODE_ENV !== "production" ? warning(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `) : void 0;
            }
            const err = event.error;
            if (err instanceof RbdInvariant) {
                event.preventDefault();
                if (process.env.NODE_ENV !== 'production') {
                    error(err.message);
                }
            }
        };
        this.getCallbacks = ()=>{
            if (!this.callbacks) {
                throw new Error('Unable to find AppCallbacks in <ErrorBoundary/>');
            }
            return this.callbacks;
        };
        this.setCallbacks = (callbacks)=>{
            this.callbacks = callbacks;
        };
    }
}
const dragHandleUsageInstructions = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`;
const position = (index)=>index + 1;
const onDragStart = (start)=>`
  You have lifted an item in position ${position(start.source.index)}
`;
const withLocation = (source, destination)=>{
    const isInHomeList = source.droppableId === destination.droppableId;
    const startPosition = position(source.index);
    const endPosition = position(destination.index);
    if (isInHomeList) {
        return `
      You have moved the item from position ${startPosition}
      to position ${endPosition}
    `;
    }
    return `
    You have moved the item from position ${startPosition}
    in list ${source.droppableId}
    to list ${destination.droppableId}
    in position ${endPosition}
  `;
};
const withCombine = (id, source, combine)=>{
    const inHomeList = source.droppableId === combine.droppableId;
    if (inHomeList) {
        return `
      The item ${id}
      has been combined with ${combine.draggableId}`;
    }
    return `
      The item ${id}
      in list ${source.droppableId}
      has been combined with ${combine.draggableId}
      in list ${combine.droppableId}
    `;
};
const onDragUpdate = (update)=>{
    const location = update.destination;
    if (location) {
        return withLocation(update.source, location);
    }
    const combine = update.combine;
    if (combine) {
        return withCombine(update.draggableId, update.source, combine);
    }
    return 'You are over an area that cannot be dropped on';
};
const returnedToStart = (source)=>`
  The item has returned to its starting position
  of ${position(source.index)}
`;
const onDragEnd = (result)=>{
    if (result.reason === 'CANCEL') {
        return `
      Movement cancelled.
      ${returnedToStart(result.source)}
    `;
    }
    const location = result.destination;
    const combine = result.combine;
    if (location) {
        return `
      You have dropped the item.
      ${withLocation(result.source, location)}
    `;
    }
    if (combine) {
        return `
      You have dropped the item.
      ${withCombine(result.draggableId, result.source, combine)}
    `;
    }
    return `
    The item has been dropped while not over a drop area.
    ${returnedToStart(result.source)}
  `;
};
const preset = {
    dragHandleUsageInstructions,
    onDragStart,
    onDragUpdate,
    onDragEnd
};
var preset$1 = preset;
const origin = {
    x: 0,
    y: 0
};
const add = (point1, point2)=>({
        x: point1.x + point2.x,
        y: point1.y + point2.y
    });
const subtract = (point1, point2)=>({
        x: point1.x - point2.x,
        y: point1.y - point2.y
    });
const isEqual$1 = (point1, point2)=>point1.x === point2.x && point1.y === point2.y;
const negate = (point)=>({
        x: point.x !== 0 ? -point.x : 0,
        y: point.y !== 0 ? -point.y : 0
    });
const patch = (line, value, otherValue = 0)=>{
    if (line === 'x') {
        return {
            x: value,
            y: otherValue
        };
    }
    return {
        x: otherValue,
        y: value
    };
};
const distance = (point1, point2)=>Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
const closest$1 = (target, points)=>Math.min(...points.map((point)=>distance(target, point)));
const apply = (fn)=>(point)=>({
            x: fn(point.x),
            y: fn(point.y)
        });
var executeClip = (frame, subject)=>{
    const result = getRect({
        top: Math.max(subject.top, frame.top),
        right: Math.min(subject.right, frame.right),
        bottom: Math.min(subject.bottom, frame.bottom),
        left: Math.max(subject.left, frame.left)
    });
    if (result.width <= 0 || result.height <= 0) {
        return null;
    }
    return result;
};
const offsetByPosition = (spacing, point)=>({
        top: spacing.top + point.y,
        left: spacing.left + point.x,
        bottom: spacing.bottom + point.y,
        right: spacing.right + point.x
    });
const getCorners = (spacing)=>[
        {
            x: spacing.left,
            y: spacing.top
        },
        {
            x: spacing.right,
            y: spacing.top
        },
        {
            x: spacing.left,
            y: spacing.bottom
        },
        {
            x: spacing.right,
            y: spacing.bottom
        }
    ];
const noSpacing = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};
const scroll$1 = (target, frame)=>{
    if (!frame) {
        return target;
    }
    return offsetByPosition(target, frame.scroll.diff.displacement);
};
const increase = (target, axis, withPlaceholder)=>{
    if (withPlaceholder && withPlaceholder.increasedBy) {
        return {
            ...target,
            [axis.end]: target[axis.end] + withPlaceholder.increasedBy[axis.line]
        };
    }
    return target;
};
const clip = (target, frame)=>{
    if (frame && frame.shouldClipSubject) {
        return executeClip(frame.pageMarginBox, target);
    }
    return getRect(target);
};
var getSubject = ({ page, withPlaceholder, axis, frame })=>{
    const scrolled = scroll$1(page.marginBox, frame);
    const increased = increase(scrolled, axis, withPlaceholder);
    const clipped = clip(increased, frame);
    return {
        page,
        withPlaceholder,
        active: clipped
    };
};
var scrollDroppable = (droppable, newScroll)=>{
    !droppable.frame ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
    const scrollable = droppable.frame;
    const scrollDiff = subtract(newScroll, scrollable.scroll.initial);
    const scrollDisplacement = negate(scrollDiff);
    const frame = {
        ...scrollable,
        scroll: {
            initial: scrollable.scroll.initial,
            current: newScroll,
            diff: {
                value: scrollDiff,
                displacement: scrollDisplacement
            },
            max: scrollable.scroll.max
        }
    };
    const subject = getSubject({
        page: droppable.subject.page,
        withPlaceholder: droppable.subject.withPlaceholder,
        axis: droppable.axis,
        frame
    });
    const result = {
        ...droppable,
        frame,
        subject
    };
    return result;
};
const toDroppableMap = memoizeOne((droppables)=>droppables.reduce((previous, current)=>{
        previous[current.descriptor.id] = current;
        return previous;
    }, {}));
const toDraggableMap = memoizeOne((draggables)=>draggables.reduce((previous, current)=>{
        previous[current.descriptor.id] = current;
        return previous;
    }, {}));
const toDroppableList = memoizeOne((droppables)=>Object.values(droppables));
const toDraggableList = memoizeOne((draggables)=>Object.values(draggables));
var getDraggablesInsideDroppable = memoizeOne((droppableId, draggables)=>{
    const result = toDraggableList(draggables).filter((draggable)=>droppableId === draggable.descriptor.droppableId).sort((a, b)=>a.descriptor.index - b.descriptor.index);
    return result;
});
function tryGetDestination(impact) {
    if (impact.at && impact.at.type === 'REORDER') {
        return impact.at.destination;
    }
    return null;
}
function tryGetCombine(impact) {
    if (impact.at && impact.at.type === 'COMBINE') {
        return impact.at.combine;
    }
    return null;
}
var removeDraggableFromList = memoizeOne((remove, list)=>list.filter((item)=>item.descriptor.id !== remove.descriptor.id));
var moveToNextCombine = ({ isMovingForward, draggable, destination, insideDestination, previousImpact })=>{
    if (!destination.isCombineEnabled) {
        return null;
    }
    const location = tryGetDestination(previousImpact);
    if (!location) {
        return null;
    }
    function getImpact(target) {
        const at = {
            type: 'COMBINE',
            combine: {
                draggableId: target,
                droppableId: destination.descriptor.id
            }
        };
        return {
            ...previousImpact,
            at
        };
    }
    const all = previousImpact.displaced.all;
    const closestId = all.length ? all[0] : null;
    if (isMovingForward) {
        return closestId ? getImpact(closestId) : null;
    }
    const withoutDraggable = removeDraggableFromList(draggable, insideDestination);
    if (!closestId) {
        if (!withoutDraggable.length) {
            return null;
        }
        const last = withoutDraggable[withoutDraggable.length - 1];
        return getImpact(last.descriptor.id);
    }
    const indexOfClosest = withoutDraggable.findIndex((d)=>d.descriptor.id === closestId);
    !(indexOfClosest !== -1) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find displaced item in set') : invariant(false) : void 0;
    const proposedIndex = indexOfClosest - 1;
    if (proposedIndex < 0) {
        return null;
    }
    const before = withoutDraggable[proposedIndex];
    return getImpact(before.descriptor.id);
};
var isHomeOf = (draggable, destination)=>draggable.descriptor.droppableId === destination.descriptor.id;
const noDisplacedBy = {
    point: origin,
    value: 0
};
const emptyGroups = {
    invisible: {},
    visible: {},
    all: []
};
const noImpact = {
    displaced: emptyGroups,
    displacedBy: noDisplacedBy,
    at: null
};
var noImpact$1 = noImpact;
var isWithin = (lowerBound, upperBound)=>(value)=>lowerBound <= value && value <= upperBound;
var isPartiallyVisibleThroughFrame = (frame)=>{
    const isWithinVertical = isWithin(frame.top, frame.bottom);
    const isWithinHorizontal = isWithin(frame.left, frame.right);
    return (subject)=>{
        const isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
        if (isContained) {
            return true;
        }
        const isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
        const isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
        const isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;
        if (isPartiallyContained) {
            return true;
        }
        const isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
        const isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
        const isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;
        if (isTargetBiggerThanFrame) {
            return true;
        }
        const isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
        return isTargetBiggerOnOneAxis;
    };
};
var isTotallyVisibleThroughFrame = (frame)=>{
    const isWithinVertical = isWithin(frame.top, frame.bottom);
    const isWithinHorizontal = isWithin(frame.left, frame.right);
    return (subject)=>{
        const isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
        return isContained;
    };
};
const vertical = {
    direction: 'vertical',
    line: 'y',
    crossAxisLine: 'x',
    start: 'top',
    end: 'bottom',
    size: 'height',
    crossAxisStart: 'left',
    crossAxisEnd: 'right',
    crossAxisSize: 'width'
};
const horizontal = {
    direction: 'horizontal',
    line: 'x',
    crossAxisLine: 'y',
    start: 'left',
    end: 'right',
    size: 'width',
    crossAxisStart: 'top',
    crossAxisEnd: 'bottom',
    crossAxisSize: 'height'
};
var isTotallyVisibleThroughFrameOnAxis = (axis)=>(frame)=>{
        const isWithinVertical = isWithin(frame.top, frame.bottom);
        const isWithinHorizontal = isWithin(frame.left, frame.right);
        return (subject)=>{
            if (axis === vertical) {
                return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
            }
            return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
        };
    };
const getDroppableDisplaced = (target, destination)=>{
    const displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
    return offsetByPosition(target, displacement);
};
const isVisibleInDroppable = (target, destination, isVisibleThroughFrameFn)=>{
    if (!destination.subject.active) {
        return false;
    }
    return isVisibleThroughFrameFn(destination.subject.active)(target);
};
const isVisibleInViewport = (target, viewport, isVisibleThroughFrameFn)=>isVisibleThroughFrameFn(viewport)(target);
const isVisible$1 = ({ target: toBeDisplaced, destination, viewport, withDroppableDisplacement, isVisibleThroughFrameFn })=>{
    const displacedTarget = withDroppableDisplacement ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
    return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};
const isPartiallyVisible = (args)=>isVisible$1({
        ...args,
        isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
    });
const isTotallyVisible = (args)=>isVisible$1({
        ...args,
        isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
    });
const isTotallyVisibleOnAxis = (args)=>isVisible$1({
        ...args,
        isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
    });
const getShouldAnimate = (id, last, forceShouldAnimate)=>{
    if (typeof forceShouldAnimate === 'boolean') {
        return forceShouldAnimate;
    }
    if (!last) {
        return true;
    }
    const { invisible, visible } = last;
    if (invisible[id]) {
        return false;
    }
    const previous = visible[id];
    return previous ? previous.shouldAnimate : true;
};
function getTarget(draggable, displacedBy) {
    const marginBox = draggable.page.marginBox;
    const expandBy = {
        top: displacedBy.point.y,
        right: 0,
        bottom: 0,
        left: displacedBy.point.x
    };
    return getRect(expand(marginBox, expandBy));
}
function getDisplacementGroups({ afterDragging, destination, displacedBy, viewport, forceShouldAnimate, last }) {
    return afterDragging.reduce(function process1(groups, draggable) {
        const target = getTarget(draggable, displacedBy);
        const id = draggable.descriptor.id;
        groups.all.push(id);
        const isVisible = isPartiallyVisible({
            target,
            destination,
            viewport,
            withDroppableDisplacement: true
        });
        if (!isVisible) {
            groups.invisible[draggable.descriptor.id] = true;
            return groups;
        }
        const shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
        const displacement = {
            draggableId: id,
            shouldAnimate
        };
        groups.visible[id] = displacement;
        return groups;
    }, {
        all: [],
        visible: {},
        invisible: {}
    });
}
function getIndexOfLastItem(draggables, options) {
    if (!draggables.length) {
        return 0;
    }
    const indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
    return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}
function goAtEnd({ insideDestination, inHomeList, displacedBy, destination }) {
    const newIndex = getIndexOfLastItem(insideDestination, {
        inHomeList
    });
    return {
        displaced: emptyGroups,
        displacedBy,
        at: {
            type: 'REORDER',
            destination: {
                droppableId: destination.descriptor.id,
                index: newIndex
            }
        }
    };
}
function calculateReorderImpact({ draggable, insideDestination, destination, viewport, displacedBy, last, index, forceShouldAnimate }) {
    const inHomeList = isHomeOf(draggable, destination);
    if (index == null) {
        return goAtEnd({
            insideDestination,
            inHomeList,
            displacedBy,
            destination
        });
    }
    const match = insideDestination.find((item)=>item.descriptor.index === index);
    if (!match) {
        return goAtEnd({
            insideDestination,
            inHomeList,
            displacedBy,
            destination
        });
    }
    const withoutDragging = removeDraggableFromList(draggable, insideDestination);
    const sliceFrom = insideDestination.indexOf(match);
    const impacted = withoutDragging.slice(sliceFrom);
    const displaced = getDisplacementGroups({
        afterDragging: impacted,
        destination,
        displacedBy,
        last,
        viewport: viewport.frame,
        forceShouldAnimate
    });
    return {
        displaced,
        displacedBy,
        at: {
            type: 'REORDER',
            destination: {
                droppableId: destination.descriptor.id,
                index
            }
        }
    };
}
function didStartAfterCritical(draggableId, afterCritical) {
    return Boolean(afterCritical.effected[draggableId]);
}
var fromCombine = ({ isMovingForward, destination, draggables, combine, afterCritical })=>{
    if (!destination.isCombineEnabled) {
        return null;
    }
    const combineId = combine.draggableId;
    const combineWith = draggables[combineId];
    const combineWithIndex = combineWith.descriptor.index;
    const didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);
    if (didCombineWithStartAfterCritical) {
        if (isMovingForward) {
            return combineWithIndex;
        }
        return combineWithIndex - 1;
    }
    if (isMovingForward) {
        return combineWithIndex + 1;
    }
    return combineWithIndex;
};
var fromReorder = ({ isMovingForward, isInHomeList, insideDestination, location })=>{
    if (!insideDestination.length) {
        return null;
    }
    const currentIndex = location.index;
    const proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
    const firstIndex = insideDestination[0].descriptor.index;
    const lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
    const upperBound = isInHomeList ? lastIndex : lastIndex + 1;
    if (proposedIndex < firstIndex) {
        return null;
    }
    if (proposedIndex > upperBound) {
        return null;
    }
    return proposedIndex;
};
var moveToNextIndex = ({ isMovingForward, isInHomeList, draggable, draggables, destination, insideDestination, previousImpact, viewport, afterCritical })=>{
    const wasAt = previousImpact.at;
    !wasAt ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot move in direction without previous impact location') : invariant(false) : void 0;
    if (wasAt.type === 'REORDER') {
        const newIndex = fromReorder({
            isMovingForward,
            isInHomeList,
            location: wasAt.destination,
            insideDestination
        });
        if (newIndex == null) {
            return null;
        }
        return calculateReorderImpact({
            draggable,
            insideDestination,
            destination,
            viewport,
            last: previousImpact.displaced,
            displacedBy: previousImpact.displacedBy,
            index: newIndex
        });
    }
    const newIndex = fromCombine({
        isMovingForward,
        destination,
        displaced: previousImpact.displaced,
        draggables,
        combine: wasAt.combine,
        afterCritical
    });
    if (newIndex == null) {
        return null;
    }
    return calculateReorderImpact({
        draggable,
        insideDestination,
        destination,
        viewport,
        last: previousImpact.displaced,
        displacedBy: previousImpact.displacedBy,
        index: newIndex
    });
};
var getCombinedItemDisplacement = ({ displaced, afterCritical, combineWith, displacedBy })=>{
    const isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);
    if (didStartAfterCritical(combineWith, afterCritical)) {
        return isDisplaced ? origin : negate(displacedBy.point);
    }
    return isDisplaced ? displacedBy.point : origin;
};
var whenCombining = ({ afterCritical, impact, draggables })=>{
    const combine = tryGetCombine(impact);
    !combine ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
    const combineWith = combine.draggableId;
    const center = draggables[combineWith].page.borderBox.center;
    const displaceBy = getCombinedItemDisplacement({
        displaced: impact.displaced,
        afterCritical,
        combineWith,
        displacedBy: impact.displacedBy
    });
    return add(center, displaceBy);
};
const distanceFromStartToBorderBoxCenter = (axis, box)=>box.margin[axis.start] + box.borderBox[axis.size] / 2;
const distanceFromEndToBorderBoxCenter = (axis, box)=>box.margin[axis.end] + box.borderBox[axis.size] / 2;
const getCrossAxisBorderBoxCenter = (axis, target, isMoving)=>target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
const goAfter = ({ axis, moveRelativeTo, isMoving })=>patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
const goBefore = ({ axis, moveRelativeTo, isMoving })=>patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
const goIntoStart = ({ axis, moveInto, isMoving })=>patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
var whenReordering = ({ impact, draggable, draggables, droppable, afterCritical })=>{
    const insideDestination = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
    const draggablePage = draggable.page;
    const axis = droppable.axis;
    if (!insideDestination.length) {
        return goIntoStart({
            axis,
            moveInto: droppable.page,
            isMoving: draggablePage
        });
    }
    const { displaced, displacedBy } = impact;
    const closestAfter = displaced.all[0];
    if (closestAfter) {
        const closest = draggables[closestAfter];
        if (didStartAfterCritical(closestAfter, afterCritical)) {
            return goBefore({
                axis,
                moveRelativeTo: closest.page,
                isMoving: draggablePage
            });
        }
        const withDisplacement = offset(closest.page, displacedBy.point);
        return goBefore({
            axis,
            moveRelativeTo: withDisplacement,
            isMoving: draggablePage
        });
    }
    const last = insideDestination[insideDestination.length - 1];
    if (last.descriptor.id === draggable.descriptor.id) {
        return draggablePage.borderBox.center;
    }
    if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
        const page = offset(last.page, negate(afterCritical.displacedBy.point));
        return goAfter({
            axis,
            moveRelativeTo: page,
            isMoving: draggablePage
        });
    }
    return goAfter({
        axis,
        moveRelativeTo: last.page,
        isMoving: draggablePage
    });
};
var withDroppableDisplacement = (droppable, point)=>{
    const frame = droppable.frame;
    if (!frame) {
        return point;
    }
    return add(point, frame.scroll.diff.displacement);
};
const getResultWithoutDroppableDisplacement = ({ impact, draggable, droppable, draggables, afterCritical })=>{
    const original = draggable.page.borderBox.center;
    const at = impact.at;
    if (!droppable) {
        return original;
    }
    if (!at) {
        return original;
    }
    if (at.type === 'REORDER') {
        return whenReordering({
            impact,
            draggable,
            draggables,
            droppable,
            afterCritical
        });
    }
    return whenCombining({
        impact,
        draggables,
        afterCritical
    });
};
var getPageBorderBoxCenterFromImpact = (args)=>{
    const withoutDisplacement = getResultWithoutDroppableDisplacement(args);
    const droppable = args.droppable;
    const withDisplacement = droppable ? withDroppableDisplacement(droppable, withoutDisplacement) : withoutDisplacement;
    return withDisplacement;
};
var scrollViewport = (viewport, newScroll)=>{
    const diff = subtract(newScroll, viewport.scroll.initial);
    const displacement = negate(diff);
    const frame = getRect({
        top: newScroll.y,
        bottom: newScroll.y + viewport.frame.height,
        left: newScroll.x,
        right: newScroll.x + viewport.frame.width
    });
    const updated = {
        frame,
        scroll: {
            initial: viewport.scroll.initial,
            max: viewport.scroll.max,
            current: newScroll,
            diff: {
                value: diff,
                displacement
            }
        }
    };
    return updated;
};
function getDraggables$1(ids, draggables) {
    return ids.map((id)=>draggables[id]);
}
function tryGetVisible(id, groups) {
    for(let i = 0; i < groups.length; i++){
        const displacement = groups[i].visible[id];
        if (displacement) {
            return displacement;
        }
    }
    return null;
}
var speculativelyIncrease = ({ impact, viewport, destination, draggables, maxScrollChange })=>{
    const scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
    const scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
    const last = impact.displaced;
    const withViewportScroll = getDisplacementGroups({
        afterDragging: getDraggables$1(last.all, draggables),
        destination,
        displacedBy: impact.displacedBy,
        viewport: scrolledViewport.frame,
        last,
        forceShouldAnimate: false
    });
    const withDroppableScroll = getDisplacementGroups({
        afterDragging: getDraggables$1(last.all, draggables),
        destination: scrolledDroppable,
        displacedBy: impact.displacedBy,
        viewport: viewport.frame,
        last,
        forceShouldAnimate: false
    });
    const invisible = {};
    const visible = {};
    const groups = [
        last,
        withViewportScroll,
        withDroppableScroll
    ];
    last.all.forEach((id)=>{
        const displacement = tryGetVisible(id, groups);
        if (displacement) {
            visible[id] = displacement;
            return;
        }
        invisible[id] = true;
    });
    const newImpact = {
        ...impact,
        displaced: {
            all: last.all,
            invisible,
            visible
        }
    };
    return newImpact;
};
var withViewportDisplacement = (viewport, point)=>add(viewport.scroll.diff.displacement, point);
var getClientFromPageBorderBoxCenter = ({ pageBorderBoxCenter, draggable, viewport })=>{
    const withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
    const offset = subtract(withoutPageScrollChange, draggable.page.borderBox.center);
    return add(draggable.client.borderBox.center, offset);
};
var isTotallyVisibleInNewLocation = ({ draggable, destination, newPageBorderBoxCenter, viewport, withDroppableDisplacement, onlyOnMainAxis = false })=>{
    const changeNeeded = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
    const shifted = offsetByPosition(draggable.page.borderBox, changeNeeded);
    const args = {
        target: shifted,
        destination,
        withDroppableDisplacement,
        viewport
    };
    return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
};
var moveToNextPlace = ({ isMovingForward, draggable, destination, draggables, previousImpact, viewport, previousPageBorderBoxCenter, previousClientSelection, afterCritical })=>{
    if (!destination.isEnabled) {
        return null;
    }
    const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
    const isInHomeList = isHomeOf(draggable, destination);
    const impact = moveToNextCombine({
        isMovingForward,
        draggable,
        destination,
        insideDestination,
        previousImpact
    }) || moveToNextIndex({
        isMovingForward,
        isInHomeList,
        draggable,
        draggables,
        destination,
        insideDestination,
        previousImpact,
        viewport,
        afterCritical
    });
    if (!impact) {
        return null;
    }
    const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
        impact,
        draggable,
        droppable: destination,
        draggables,
        afterCritical
    });
    const isVisibleInNewLocation = isTotallyVisibleInNewLocation({
        draggable,
        destination,
        newPageBorderBoxCenter: pageBorderBoxCenter,
        viewport: viewport.frame,
        withDroppableDisplacement: false,
        onlyOnMainAxis: true
    });
    if (isVisibleInNewLocation) {
        const clientSelection = getClientFromPageBorderBoxCenter({
            pageBorderBoxCenter,
            draggable,
            viewport
        });
        return {
            clientSelection,
            impact,
            scrollJumpRequest: null
        };
    }
    const distance = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
    const cautious = speculativelyIncrease({
        impact,
        viewport,
        destination,
        draggables,
        maxScrollChange: distance
    });
    return {
        clientSelection: previousClientSelection,
        impact: cautious,
        scrollJumpRequest: distance
    };
};
const getKnownActive = (droppable)=>{
    const rect = droppable.subject.active;
    !rect ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot get clipped area from droppable') : invariant(false) : void 0;
    return rect;
};
var getBestCrossAxisDroppable = ({ isMovingForward, pageBorderBoxCenter, source, droppables, viewport })=>{
    const active = source.subject.active;
    if (!active) {
        return null;
    }
    const axis = source.axis;
    const isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
    const candidates = toDroppableList(droppables).filter((droppable)=>droppable !== source).filter((droppable)=>droppable.isEnabled).filter((droppable)=>Boolean(droppable.subject.active)).filter((droppable)=>isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable))).filter((droppable)=>{
        const activeOfTarget = getKnownActive(droppable);
        if (isMovingForward) {
            return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
        }
        return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
    }).filter((droppable)=>{
        const activeOfTarget = getKnownActive(droppable);
        const isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
        return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
    }).sort((a, b)=>{
        const first = getKnownActive(a)[axis.crossAxisStart];
        const second = getKnownActive(b)[axis.crossAxisStart];
        if (isMovingForward) {
            return first - second;
        }
        return second - first;
    }).filter((droppable, index, array)=>getKnownActive(droppable)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart]);
    if (!candidates.length) {
        return null;
    }
    if (candidates.length === 1) {
        return candidates[0];
    }
    const contains = candidates.filter((droppable)=>{
        const isWithinDroppable = isWithin(getKnownActive(droppable)[axis.start], getKnownActive(droppable)[axis.end]);
        return isWithinDroppable(pageBorderBoxCenter[axis.line]);
    });
    if (contains.length === 1) {
        return contains[0];
    }
    if (contains.length > 1) {
        return contains.sort((a, b)=>getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start])[0];
    }
    return candidates.sort((a, b)=>{
        const first = closest$1(pageBorderBoxCenter, getCorners(getKnownActive(a)));
        const second = closest$1(pageBorderBoxCenter, getCorners(getKnownActive(b)));
        if (first !== second) {
            return first - second;
        }
        return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
    })[0];
};
const getCurrentPageBorderBoxCenter = (draggable, afterCritical)=>{
    const original = draggable.page.borderBox.center;
    return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
const getCurrentPageBorderBox = (draggable, afterCritical)=>{
    const original = draggable.page.borderBox;
    return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};
var getClosestDraggable = ({ pageBorderBoxCenter, viewport, destination, insideDestination, afterCritical })=>{
    const sorted = insideDestination.filter((draggable)=>isTotallyVisible({
            target: getCurrentPageBorderBox(draggable, afterCritical),
            destination,
            viewport: viewport.frame,
            withDroppableDisplacement: true
        })).sort((a, b)=>{
        const distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
        const distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));
        if (distanceToA < distanceToB) {
            return -1;
        }
        if (distanceToB < distanceToA) {
            return 1;
        }
        return a.descriptor.index - b.descriptor.index;
    });
    return sorted[0] || null;
};
var getDisplacedBy = memoizeOne(function getDisplacedBy(axis, displaceBy) {
    const displacement = displaceBy[axis.line];
    return {
        value: displacement,
        point: patch(axis.line, displacement)
    };
});
const getRequiredGrowthForPlaceholder = (droppable, placeholderSize, draggables)=>{
    const axis = droppable.axis;
    if (droppable.descriptor.mode === 'virtual') {
        return patch(axis.line, placeholderSize[axis.line]);
    }
    const availableSpace = droppable.subject.page.contentBox[axis.size];
    const insideDroppable = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
    const spaceUsed = insideDroppable.reduce((sum, dimension)=>sum + dimension.client.marginBox[axis.size], 0);
    const requiredSpace = spaceUsed + placeholderSize[axis.line];
    const needsToGrowBy = requiredSpace - availableSpace;
    if (needsToGrowBy <= 0) {
        return null;
    }
    return patch(axis.line, needsToGrowBy);
};
const withMaxScroll = (frame, max)=>({
        ...frame,
        scroll: {
            ...frame.scroll,
            max
        }
    });
const addPlaceholder = (droppable, draggable, draggables)=>{
    const frame = droppable.frame;
    !!isHomeOf(draggable, droppable) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Should not add placeholder space to home list') : invariant(false) : void 0;
    !!droppable.subject.withPlaceholder ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot add placeholder size to a subject when it already has one') : invariant(false) : void 0;
    const placeholderSize = getDisplacedBy(droppable.axis, draggable.displaceBy).point;
    const requiredGrowth = getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables);
    const added = {
        placeholderSize,
        increasedBy: requiredGrowth,
        oldFrameMaxScroll: droppable.frame ? droppable.frame.scroll.max : null
    };
    if (!frame) {
        const subject = getSubject({
            page: droppable.subject.page,
            withPlaceholder: added,
            axis: droppable.axis,
            frame: droppable.frame
        });
        return {
            ...droppable,
            subject
        };
    }
    const maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
    const newFrame = withMaxScroll(frame, maxScroll);
    const subject = getSubject({
        page: droppable.subject.page,
        withPlaceholder: added,
        axis: droppable.axis,
        frame: newFrame
    });
    return {
        ...droppable,
        subject,
        frame: newFrame
    };
};
const removePlaceholder = (droppable)=>{
    const added = droppable.subject.withPlaceholder;
    !added ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot remove placeholder form subject when there was none') : invariant(false) : void 0;
    const frame = droppable.frame;
    if (!frame) {
        const subject = getSubject({
            page: droppable.subject.page,
            axis: droppable.axis,
            frame: null,
            withPlaceholder: null
        });
        return {
            ...droppable,
            subject
        };
    }
    const oldMaxScroll = added.oldFrameMaxScroll;
    !oldMaxScroll ? process.env.NODE_ENV !== "production" ? invariant(false, 'Expected droppable with frame to have old max frame scroll when removing placeholder') : invariant(false) : void 0;
    const newFrame = withMaxScroll(frame, oldMaxScroll);
    const subject = getSubject({
        page: droppable.subject.page,
        axis: droppable.axis,
        frame: newFrame,
        withPlaceholder: null
    });
    return {
        ...droppable,
        subject,
        frame: newFrame
    };
};
var moveToNewDroppable = ({ previousPageBorderBoxCenter, moveRelativeTo, insideDestination, draggable, draggables, destination, viewport, afterCritical })=>{
    if (!moveRelativeTo) {
        if (insideDestination.length) {
            return null;
        }
        const proposed = {
            displaced: emptyGroups,
            displacedBy: noDisplacedBy,
            at: {
                type: 'REORDER',
                destination: {
                    droppableId: destination.descriptor.id,
                    index: 0
                }
            }
        };
        const proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
            impact: proposed,
            draggable,
            droppable: destination,
            draggables,
            afterCritical
        });
        const withPlaceholder = isHomeOf(draggable, destination) ? destination : addPlaceholder(destination, draggable, draggables);
        const isVisibleInNewLocation = isTotallyVisibleInNewLocation({
            draggable,
            destination: withPlaceholder,
            newPageBorderBoxCenter: proposedPageBorderBoxCenter,
            viewport: viewport.frame,
            withDroppableDisplacement: false,
            onlyOnMainAxis: true
        });
        return isVisibleInNewLocation ? proposed : null;
    }
    const isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);
    const proposedIndex = (()=>{
        const relativeTo = moveRelativeTo.descriptor.index;
        if (moveRelativeTo.descriptor.id === draggable.descriptor.id) {
            return relativeTo;
        }
        if (isGoingBeforeTarget) {
            return relativeTo;
        }
        return relativeTo + 1;
    })();
    const displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
    return calculateReorderImpact({
        draggable,
        insideDestination,
        destination,
        viewport,
        displacedBy,
        last: emptyGroups,
        index: proposedIndex
    });
};
var moveCrossAxis = ({ isMovingForward, previousPageBorderBoxCenter, draggable, isOver, draggables, droppables, viewport, afterCritical })=>{
    const destination = getBestCrossAxisDroppable({
        isMovingForward,
        pageBorderBoxCenter: previousPageBorderBoxCenter,
        source: isOver,
        droppables,
        viewport
    });
    if (!destination) {
        return null;
    }
    const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
    const moveRelativeTo = getClosestDraggable({
        pageBorderBoxCenter: previousPageBorderBoxCenter,
        viewport,
        destination,
        insideDestination,
        afterCritical
    });
    const impact = moveToNewDroppable({
        previousPageBorderBoxCenter,
        destination,
        draggable,
        draggables,
        moveRelativeTo,
        insideDestination,
        viewport,
        afterCritical
    });
    if (!impact) {
        return null;
    }
    const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
        impact,
        draggable,
        droppable: destination,
        draggables,
        afterCritical
    });
    const clientSelection = getClientFromPageBorderBoxCenter({
        pageBorderBoxCenter,
        draggable,
        viewport
    });
    return {
        clientSelection,
        impact,
        scrollJumpRequest: null
    };
};
var whatIsDraggedOver = (impact)=>{
    const at = impact.at;
    if (!at) {
        return null;
    }
    if (at.type === 'REORDER') {
        return at.destination.droppableId;
    }
    return at.combine.droppableId;
};
const getDroppableOver$1 = (impact, droppables)=>{
    const id = whatIsDraggedOver(impact);
    return id ? droppables[id] : null;
};
var moveInDirection = ({ state, type })=>{
    const isActuallyOver = getDroppableOver$1(state.impact, state.dimensions.droppables);
    const isMainAxisMovementAllowed = Boolean(isActuallyOver);
    const home = state.dimensions.droppables[state.critical.droppable.id];
    const isOver = isActuallyOver || home;
    const direction = isOver.axis.direction;
    const isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');
    if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
        return null;
    }
    const isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
    const draggable = state.dimensions.draggables[state.critical.draggable.id];
    const previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
    const { draggables, droppables } = state.dimensions;
    return isMovingOnMainAxis ? moveToNextPlace({
        isMovingForward,
        previousPageBorderBoxCenter,
        draggable,
        destination: isOver,
        draggables,
        viewport: state.viewport,
        previousClientSelection: state.current.client.selection,
        previousImpact: state.impact,
        afterCritical: state.afterCritical
    }) : moveCrossAxis({
        isMovingForward,
        previousPageBorderBoxCenter,
        draggable,
        isOver,
        draggables,
        droppables,
        viewport: state.viewport,
        afterCritical: state.afterCritical
    });
};
function isMovementAllowed(state) {
    return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
}
function isPositionInFrame(frame) {
    const isWithinVertical = isWithin(frame.top, frame.bottom);
    const isWithinHorizontal = isWithin(frame.left, frame.right);
    return function run(point) {
        return isWithinVertical(point.y) && isWithinHorizontal(point.x);
    };
}
function getHasOverlap(first, second) {
    return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}
function getFurthestAway({ pageBorderBox, draggable, candidates }) {
    const startCenter = draggable.page.borderBox.center;
    const sorted = candidates.map((candidate)=>{
        const axis = candidate.axis;
        const target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
        return {
            id: candidate.descriptor.id,
            distance: distance(startCenter, target)
        };
    }).sort((a, b)=>b.distance - a.distance);
    return sorted[0] ? sorted[0].id : null;
}
function getDroppableOver({ pageBorderBox, draggable, droppables }) {
    const candidates = toDroppableList(droppables).filter((item)=>{
        if (!item.isEnabled) {
            return false;
        }
        const active = item.subject.active;
        if (!active) {
            return false;
        }
        if (!getHasOverlap(pageBorderBox, active)) {
            return false;
        }
        if (isPositionInFrame(active)(pageBorderBox.center)) {
            return true;
        }
        const axis = item.axis;
        const childCenter = active.center[axis.crossAxisLine];
        const crossAxisStart = pageBorderBox[axis.crossAxisStart];
        const crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
        const isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
        const isStartContained = isContained(crossAxisStart);
        const isEndContained = isContained(crossAxisEnd);
        if (!isStartContained && !isEndContained) {
            return true;
        }
        if (isStartContained) {
            return crossAxisStart < childCenter;
        }
        return crossAxisEnd > childCenter;
    });
    if (!candidates.length) {
        return null;
    }
    if (candidates.length === 1) {
        return candidates[0].descriptor.id;
    }
    return getFurthestAway({
        pageBorderBox,
        draggable,
        candidates
    });
}
const offsetRectByPosition = (rect, point)=>getRect(offsetByPosition(rect, point));
var withDroppableScroll = (droppable, area)=>{
    const frame = droppable.frame;
    if (!frame) {
        return area;
    }
    return offsetRectByPosition(area, frame.scroll.diff.value);
};
function getIsDisplaced({ displaced, id }) {
    return Boolean(displaced.visible[id] || displaced.invisible[id]);
}
function atIndex({ draggable, closest, inHomeList }) {
    if (!closest) {
        return null;
    }
    if (!inHomeList) {
        return closest.descriptor.index;
    }
    if (closest.descriptor.index > draggable.descriptor.index) {
        return closest.descriptor.index - 1;
    }
    return closest.descriptor.index;
}
var getReorderImpact = ({ pageBorderBoxWithDroppableScroll: targetRect, draggable, destination, insideDestination, last, viewport, afterCritical })=>{
    const axis = destination.axis;
    const displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
    const displacement = displacedBy.value;
    const targetStart = targetRect[axis.start];
    const targetEnd = targetRect[axis.end];
    const withoutDragging = removeDraggableFromList(draggable, insideDestination);
    const closest = withoutDragging.find((child)=>{
        const id = child.descriptor.id;
        const childCenter = child.page.borderBox.center[axis.line];
        const didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
        const isDisplaced = getIsDisplaced({
            displaced: last,
            id
        });
        if (didStartAfterCritical$1) {
            if (isDisplaced) {
                return targetEnd <= childCenter;
            }
            return targetStart < childCenter - displacement;
        }
        if (isDisplaced) {
            return targetEnd <= childCenter + displacement;
        }
        return targetStart < childCenter;
    }) || null;
    const newIndex = atIndex({
        draggable,
        closest,
        inHomeList: isHomeOf(draggable, destination)
    });
    return calculateReorderImpact({
        draggable,
        insideDestination,
        destination,
        viewport,
        last,
        displacedBy,
        index: newIndex
    });
};
const combineThresholdDivisor = 4;
var getCombineImpact = ({ draggable, pageBorderBoxWithDroppableScroll: targetRect, previousImpact, destination, insideDestination, afterCritical })=>{
    if (!destination.isCombineEnabled) {
        return null;
    }
    const axis = destination.axis;
    const displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
    const displacement = displacedBy.value;
    const targetStart = targetRect[axis.start];
    const targetEnd = targetRect[axis.end];
    const withoutDragging = removeDraggableFromList(draggable, insideDestination);
    const combineWith = withoutDragging.find((child)=>{
        const id = child.descriptor.id;
        const childRect = child.page.borderBox;
        const childSize = childRect[axis.size];
        const threshold = childSize / combineThresholdDivisor;
        const didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
        const isDisplaced = getIsDisplaced({
            displaced: previousImpact.displaced,
            id
        });
        if (didStartAfterCritical$1) {
            if (isDisplaced) {
                return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
            }
            return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
        }
        if (isDisplaced) {
            return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
        }
        return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
    });
    if (!combineWith) {
        return null;
    }
    const impact = {
        displacedBy,
        displaced: previousImpact.displaced,
        at: {
            type: 'COMBINE',
            combine: {
                draggableId: combineWith.descriptor.id,
                droppableId: destination.descriptor.id
            }
        }
    };
    return impact;
};
var getDragImpact = ({ pageOffset, draggable, draggables, droppables, previousImpact, viewport, afterCritical })=>{
    const pageBorderBox = offsetRectByPosition(draggable.page.borderBox, pageOffset);
    const destinationId = getDroppableOver({
        pageBorderBox,
        draggable,
        droppables
    });
    if (!destinationId) {
        return noImpact$1;
    }
    const destination = droppables[destinationId];
    const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
    const pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
    return getCombineImpact({
        pageBorderBoxWithDroppableScroll,
        draggable,
        previousImpact,
        destination,
        insideDestination,
        afterCritical
    }) || getReorderImpact({
        pageBorderBoxWithDroppableScroll,
        draggable,
        destination,
        insideDestination,
        last: previousImpact.displaced,
        viewport,
        afterCritical
    });
};
var patchDroppableMap = (droppables, updated)=>({
        ...droppables,
        [updated.descriptor.id]: updated
    });
const clearUnusedPlaceholder = ({ previousImpact, impact, droppables })=>{
    const last = whatIsDraggedOver(previousImpact);
    const now = whatIsDraggedOver(impact);
    if (!last) {
        return droppables;
    }
    if (last === now) {
        return droppables;
    }
    const lastDroppable = droppables[last];
    if (!lastDroppable.subject.withPlaceholder) {
        return droppables;
    }
    const updated = removePlaceholder(lastDroppable);
    return patchDroppableMap(droppables, updated);
};
var recomputePlaceholders = ({ draggable, draggables, droppables, previousImpact, impact })=>{
    const cleaned = clearUnusedPlaceholder({
        previousImpact,
        impact,
        droppables
    });
    const isOver = whatIsDraggedOver(impact);
    if (!isOver) {
        return cleaned;
    }
    const droppable = droppables[isOver];
    if (isHomeOf(draggable, droppable)) {
        return cleaned;
    }
    if (droppable.subject.withPlaceholder) {
        return cleaned;
    }
    const patched = addPlaceholder(droppable, draggable, draggables);
    return patchDroppableMap(cleaned, patched);
};
var update = ({ state, clientSelection: forcedClientSelection, dimensions: forcedDimensions, viewport: forcedViewport, impact: forcedImpact, scrollJumpRequest })=>{
    const viewport = forcedViewport || state.viewport;
    const dimensions = forcedDimensions || state.dimensions;
    const clientSelection = forcedClientSelection || state.current.client.selection;
    const offset = subtract(clientSelection, state.initial.client.selection);
    const client = {
        offset,
        selection: clientSelection,
        borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
    };
    const page = {
        selection: add(client.selection, viewport.scroll.current),
        borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
        offset: add(client.offset, viewport.scroll.diff.value)
    };
    const current = {
        client,
        page
    };
    if (state.phase === 'COLLECTING') {
        return {
            ...state,
            dimensions,
            viewport,
            current
        };
    }
    const draggable = dimensions.draggables[state.critical.draggable.id];
    const newImpact = forcedImpact || getDragImpact({
        pageOffset: page.offset,
        draggable,
        draggables: dimensions.draggables,
        droppables: dimensions.droppables,
        previousImpact: state.impact,
        viewport,
        afterCritical: state.afterCritical
    });
    const withUpdatedPlaceholders = recomputePlaceholders({
        draggable,
        impact: newImpact,
        previousImpact: state.impact,
        draggables: dimensions.draggables,
        droppables: dimensions.droppables
    });
    const result = {
        ...state,
        current,
        dimensions: {
            draggables: dimensions.draggables,
            droppables: withUpdatedPlaceholders
        },
        impact: newImpact,
        viewport,
        scrollJumpRequest: scrollJumpRequest || null,
        forceShouldAnimate: scrollJumpRequest ? false : null
    };
    return result;
};
function getDraggables(ids, draggables) {
    return ids.map((id)=>draggables[id]);
}
var recompute = ({ impact, viewport, draggables, destination, forceShouldAnimate })=>{
    const last = impact.displaced;
    const afterDragging = getDraggables(last.all, draggables);
    const displaced = getDisplacementGroups({
        afterDragging,
        destination,
        displacedBy: impact.displacedBy,
        viewport: viewport.frame,
        forceShouldAnimate,
        last
    });
    return {
        ...impact,
        displaced
    };
};
var getClientBorderBoxCenter = ({ impact, draggable, droppable, draggables, viewport, afterCritical })=>{
    const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
        impact,
        draggable,
        draggables,
        droppable,
        afterCritical
    });
    return getClientFromPageBorderBoxCenter({
        pageBorderBoxCenter,
        draggable,
        viewport
    });
};
var refreshSnap = ({ state, dimensions: forcedDimensions, viewport: forcedViewport })=>{
    !(state.movementMode === 'SNAP') ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
    const needsVisibilityCheck = state.impact;
    const viewport = forcedViewport || state.viewport;
    const dimensions = forcedDimensions || state.dimensions;
    const { draggables, droppables } = dimensions;
    const draggable = draggables[state.critical.draggable.id];
    const isOver = whatIsDraggedOver(needsVisibilityCheck);
    !isOver ? process.env.NODE_ENV !== "production" ? invariant(false, 'Must be over a destination in SNAP movement mode') : invariant(false) : void 0;
    const destination = droppables[isOver];
    const impact = recompute({
        impact: needsVisibilityCheck,
        viewport,
        destination,
        draggables
    });
    const clientSelection = getClientBorderBoxCenter({
        impact,
        draggable,
        droppable: destination,
        draggables,
        viewport,
        afterCritical: state.afterCritical
    });
    return update({
        impact,
        clientSelection,
        state,
        dimensions,
        viewport
    });
};
var getHomeLocation = (descriptor)=>({
        index: descriptor.index,
        droppableId: descriptor.droppableId
    });
var getLiftEffect = ({ draggable, home, draggables, viewport })=>{
    const displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
    const insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
    const rawIndex = insideHome.indexOf(draggable);
    !(rawIndex !== -1) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Expected draggable to be inside home list') : invariant(false) : void 0;
    const afterDragging = insideHome.slice(rawIndex + 1);
    const effected = afterDragging.reduce((previous, item)=>{
        previous[item.descriptor.id] = true;
        return previous;
    }, {});
    const afterCritical = {
        inVirtualList: home.descriptor.mode === 'virtual',
        displacedBy,
        effected
    };
    const displaced = getDisplacementGroups({
        afterDragging,
        destination: home,
        displacedBy,
        last: null,
        viewport: viewport.frame,
        forceShouldAnimate: false
    });
    const impact = {
        displaced,
        displacedBy,
        at: {
            type: 'REORDER',
            destination: getHomeLocation(draggable.descriptor)
        }
    };
    return {
        impact,
        afterCritical
    };
};
var patchDimensionMap = (dimensions, updated)=>({
        draggables: dimensions.draggables,
        droppables: patchDroppableMap(dimensions.droppables, updated)
    });
const start = (key)=>{
    if (process.env.NODE_ENV !== 'production') {
        {
            return;
        }
    }
};
const finish = (key)=>{
    if (process.env.NODE_ENV !== 'production') {
        {
            return;
        }
    }
};
var offsetDraggable = ({ draggable, offset: offset$1, initialWindowScroll })=>{
    const client = offset(draggable.client, offset$1);
    const page = withScroll(client, initialWindowScroll);
    const moved = {
        ...draggable,
        placeholder: {
            ...draggable.placeholder,
            client
        },
        client,
        page
    };
    return moved;
};
var getFrame = (droppable)=>{
    const frame = droppable.frame;
    !frame ? process.env.NODE_ENV !== "production" ? invariant(false, 'Expected Droppable to have a frame') : invariant(false) : void 0;
    return frame;
};
var adjustAdditionsForScrollChanges = ({ additions, updatedDroppables, viewport })=>{
    const windowScrollChange = viewport.scroll.diff.value;
    return additions.map((draggable)=>{
        const droppableId = draggable.descriptor.droppableId;
        const modified = updatedDroppables[droppableId];
        const frame = getFrame(modified);
        const droppableScrollChange = frame.scroll.diff.value;
        const totalChange = add(windowScrollChange, droppableScrollChange);
        const moved = offsetDraggable({
            draggable,
            offset: totalChange,
            initialWindowScroll: viewport.scroll.initial
        });
        return moved;
    });
};
var publishWhileDraggingInVirtual = ({ state, published })=>{
    start();
    const withScrollChange = published.modified.map((update)=>{
        const existing = state.dimensions.droppables[update.droppableId];
        const scrolled = scrollDroppable(existing, update.scroll);
        return scrolled;
    });
    const droppables = {
        ...state.dimensions.droppables,
        ...toDroppableMap(withScrollChange)
    };
    const updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
        additions: published.additions,
        updatedDroppables: droppables,
        viewport: state.viewport
    }));
    const draggables = {
        ...state.dimensions.draggables,
        ...updatedAdditions
    };
    published.removals.forEach((id)=>{
        delete draggables[id];
    });
    const dimensions = {
        droppables,
        draggables
    };
    const wasOverId = whatIsDraggedOver(state.impact);
    const wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
    const draggable = dimensions.draggables[state.critical.draggable.id];
    const home = dimensions.droppables[state.critical.droppable.id];
    const { impact: onLiftImpact, afterCritical } = getLiftEffect({
        draggable,
        home,
        draggables,
        viewport: state.viewport
    });
    const previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
    const impact = getDragImpact({
        pageOffset: state.current.page.offset,
        draggable: dimensions.draggables[state.critical.draggable.id],
        draggables: dimensions.draggables,
        droppables: dimensions.droppables,
        previousImpact,
        viewport: state.viewport,
        afterCritical
    });
    finish();
    const draggingState = {
        ...state,
        phase: 'DRAGGING',
        impact,
        onLiftImpact,
        dimensions,
        afterCritical,
        forceShouldAnimate: false
    };
    if (state.phase === 'COLLECTING') {
        return draggingState;
    }
    const dropPending = {
        ...draggingState,
        phase: 'DROP_PENDING',
        reason: state.reason,
        isWaiting: false
    };
    return dropPending;
};
const isSnapping = (state)=>state.movementMode === 'SNAP';
const postDroppableChange = (state, updated, isEnabledChanging)=>{
    const dimensions = patchDimensionMap(state.dimensions, updated);
    if (!isSnapping(state) || isEnabledChanging) {
        return update({
            state,
            dimensions
        });
    }
    return refreshSnap({
        state,
        dimensions
    });
};
function removeScrollJumpRequest(state) {
    if (state.isDragging && state.movementMode === 'SNAP') {
        return {
            ...state,
            scrollJumpRequest: null
        };
    }
    return state;
}
const idle$2 = {
    phase: 'IDLE',
    completed: null,
    shouldFlush: false
};
var reducer = (state = idle$2, action)=>{
    if (action.type === 'FLUSH') {
        return {
            ...idle$2,
            shouldFlush: true
        };
    }
    if (action.type === 'INITIAL_PUBLISH') {
        !(state.phase === 'IDLE') ? process.env.NODE_ENV !== "production" ? invariant(false, 'INITIAL_PUBLISH must come after a IDLE phase') : invariant(false) : void 0;
        const { critical, clientSelection, viewport, dimensions, movementMode } = action.payload;
        const draggable = dimensions.draggables[critical.draggable.id];
        const home = dimensions.droppables[critical.droppable.id];
        const client = {
            selection: clientSelection,
            borderBoxCenter: draggable.client.borderBox.center,
            offset: origin
        };
        const initial = {
            client,
            page: {
                selection: add(client.selection, viewport.scroll.initial),
                borderBoxCenter: add(client.selection, viewport.scroll.initial),
                offset: add(client.selection, viewport.scroll.diff.value)
            }
        };
        const isWindowScrollAllowed = toDroppableList(dimensions.droppables).every((item)=>!item.isFixedOnPage);
        const { impact, afterCritical } = getLiftEffect({
            draggable,
            home,
            draggables: dimensions.draggables,
            viewport
        });
        const result = {
            phase: 'DRAGGING',
            isDragging: true,
            critical,
            movementMode,
            dimensions,
            initial,
            current: initial,
            isWindowScrollAllowed,
            impact,
            afterCritical,
            onLiftImpact: impact,
            viewport,
            scrollJumpRequest: null,
            forceShouldAnimate: null
        };
        return result;
    }
    if (action.type === 'COLLECTION_STARTING') {
        if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
            return state;
        }
        !(state.phase === 'DRAGGING') ? process.env.NODE_ENV !== "production" ? invariant(false, `Collection cannot start from phase ${state.phase}`) : invariant(false) : void 0;
        const result = {
            ...state,
            phase: 'COLLECTING'
        };
        return result;
    }
    if (action.type === 'PUBLISH_WHILE_DRAGGING') {
        !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ? process.env.NODE_ENV !== "production" ? invariant(false, `Unexpected ${action.type} received in phase ${state.phase}`) : invariant(false) : void 0;
        return publishWhileDraggingInVirtual({
            state,
            published: action.payload
        });
    }
    if (action.type === 'MOVE') {
        if (state.phase === 'DROP_PENDING') {
            return state;
        }
        !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, `${action.type} not permitted in phase ${state.phase}`) : invariant(false) : void 0;
        const { client: clientSelection } = action.payload;
        if (isEqual$1(clientSelection, state.current.client.selection)) {
            return state;
        }
        return update({
            state,
            clientSelection,
            impact: isSnapping(state) ? state.impact : null
        });
    }
    if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
        if (state.phase === 'DROP_PENDING') {
            return removeScrollJumpRequest(state);
        }
        if (state.phase === 'COLLECTING') {
            return removeScrollJumpRequest(state);
        }
        !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, `${action.type} not permitted in phase ${state.phase}`) : invariant(false) : void 0;
        const { id, newScroll } = action.payload;
        const target = state.dimensions.droppables[id];
        if (!target) {
            return state;
        }
        const scrolled = scrollDroppable(target, newScroll);
        return postDroppableChange(state, scrolled, false);
    }
    if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
        if (state.phase === 'DROP_PENDING') {
            return state;
        }
        !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, `Attempting to move in an unsupported phase ${state.phase}`) : invariant(false) : void 0;
        const { id, isEnabled } = action.payload;
        const target = state.dimensions.droppables[id];
        !target ? process.env.NODE_ENV !== "production" ? invariant(false, `Cannot find Droppable[id: ${id}] to toggle its enabled state`) : invariant(false) : void 0;
        !(target.isEnabled !== isEnabled) ? process.env.NODE_ENV !== "production" ? invariant(false, `Trying to set droppable isEnabled to ${String(isEnabled)}
      but it is already ${String(target.isEnabled)}`) : invariant(false) : void 0;
        const updated = {
            ...target,
            isEnabled
        };
        return postDroppableChange(state, updated, true);
    }
    if (action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED') {
        if (state.phase === 'DROP_PENDING') {
            return state;
        }
        !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, `Attempting to move in an unsupported phase ${state.phase}`) : invariant(false) : void 0;
        const { id, isCombineEnabled } = action.payload;
        const target = state.dimensions.droppables[id];
        !target ? process.env.NODE_ENV !== "production" ? invariant(false, `Cannot find Droppable[id: ${id}] to toggle its isCombineEnabled state`) : invariant(false) : void 0;
        !(target.isCombineEnabled !== isCombineEnabled) ? process.env.NODE_ENV !== "production" ? invariant(false, `Trying to set droppable isCombineEnabled to ${String(isCombineEnabled)}
      but it is already ${String(target.isCombineEnabled)}`) : invariant(false) : void 0;
        const updated = {
            ...target,
            isCombineEnabled
        };
        return postDroppableChange(state, updated, true);
    }
    if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
        if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
            return state;
        }
        !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, `Cannot move by window in phase ${state.phase}`) : invariant(false) : void 0;
        !state.isWindowScrollAllowed ? process.env.NODE_ENV !== "production" ? invariant(false, 'Window scrolling is currently not supported for fixed lists') : invariant(false) : void 0;
        const newScroll = action.payload.newScroll;
        if (isEqual$1(state.viewport.scroll.current, newScroll)) {
            return removeScrollJumpRequest(state);
        }
        const viewport = scrollViewport(state.viewport, newScroll);
        if (isSnapping(state)) {
            return refreshSnap({
                state,
                viewport
            });
        }
        return update({
            state,
            viewport
        });
    }
    if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
        if (!isMovementAllowed(state)) {
            return state;
        }
        const maxScroll = action.payload.maxScroll;
        if (isEqual$1(maxScroll, state.viewport.scroll.max)) {
            return state;
        }
        const withMaxScroll = {
            ...state.viewport,
            scroll: {
                ...state.viewport.scroll,
                max: maxScroll
            }
        };
        return {
            ...state,
            viewport: withMaxScroll
        };
    }
    if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
        if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
            return state;
        }
        !(state.phase === 'DRAGGING') ? process.env.NODE_ENV !== "production" ? invariant(false, `${action.type} received while not in DRAGGING phase`) : invariant(false) : void 0;
        const result = moveInDirection({
            state,
            type: action.type
        });
        if (!result) {
            return state;
        }
        return update({
            state,
            impact: result.impact,
            clientSelection: result.clientSelection,
            scrollJumpRequest: result.scrollJumpRequest
        });
    }
    if (action.type === 'DROP_PENDING') {
        const reason = action.payload.reason;
        !(state.phase === 'COLLECTING') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase') : invariant(false) : void 0;
        const newState = {
            ...state,
            phase: 'DROP_PENDING',
            isWaiting: true,
            reason
        };
        return newState;
    }
    if (action.type === 'DROP_ANIMATE') {
        const { completed, dropDuration, newHomeClientOffset } = action.payload;
        !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ? process.env.NODE_ENV !== "production" ? invariant(false, `Cannot animate drop from phase ${state.phase}`) : invariant(false) : void 0;
        const result = {
            phase: 'DROP_ANIMATING',
            completed,
            dropDuration,
            newHomeClientOffset,
            dimensions: state.dimensions
        };
        return result;
    }
    if (action.type === 'DROP_COMPLETE') {
        const { completed } = action.payload;
        return {
            phase: 'IDLE',
            completed,
            shouldFlush: false
        };
    }
    return state;
};
const beforeInitialCapture = (args)=>({
        type: 'BEFORE_INITIAL_CAPTURE',
        payload: args
    });
const lift$1 = (args)=>({
        type: 'LIFT',
        payload: args
    });
const initialPublish = (args)=>({
        type: 'INITIAL_PUBLISH',
        payload: args
    });
const publishWhileDragging = (args)=>({
        type: 'PUBLISH_WHILE_DRAGGING',
        payload: args
    });
const collectionStarting = ()=>({
        type: 'COLLECTION_STARTING',
        payload: null
    });
const updateDroppableScroll = (args)=>({
        type: 'UPDATE_DROPPABLE_SCROLL',
        payload: args
    });
const updateDroppableIsEnabled = (args)=>({
        type: 'UPDATE_DROPPABLE_IS_ENABLED',
        payload: args
    });
const updateDroppableIsCombineEnabled = (args)=>({
        type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
        payload: args
    });
const move = (args)=>({
        type: 'MOVE',
        payload: args
    });
const moveByWindowScroll = (args)=>({
        type: 'MOVE_BY_WINDOW_SCROLL',
        payload: args
    });
const updateViewportMaxScroll = (args)=>({
        type: 'UPDATE_VIEWPORT_MAX_SCROLL',
        payload: args
    });
const moveUp = ()=>({
        type: 'MOVE_UP',
        payload: null
    });
const moveDown = ()=>({
        type: 'MOVE_DOWN',
        payload: null
    });
const moveRight = ()=>({
        type: 'MOVE_RIGHT',
        payload: null
    });
const moveLeft = ()=>({
        type: 'MOVE_LEFT',
        payload: null
    });
const flush = ()=>({
        type: 'FLUSH',
        payload: null
    });
const animateDrop = (args)=>({
        type: 'DROP_ANIMATE',
        payload: args
    });
const completeDrop = (args)=>({
        type: 'DROP_COMPLETE',
        payload: args
    });
const drop$1 = (args)=>({
        type: 'DROP',
        payload: args
    });
const dropPending = (args)=>({
        type: 'DROP_PENDING',
        payload: args
    });
const dropAnimationFinished = ()=>({
        type: 'DROP_ANIMATION_FINISHED',
        payload: null
    });
function checkIndexes(insideDestination) {
    if (insideDestination.length <= 1) {
        return;
    }
    const indexes = insideDestination.map((d)=>d.descriptor.index);
    const errors = {};
    for(let i = 1; i < indexes.length; i++){
        const current = indexes[i];
        const previous = indexes[i - 1];
        if (current !== previous + 1) {
            errors[current] = true;
        }
    }
    if (!Object.keys(errors).length) {
        return;
    }
    const formatted = indexes.map((index)=>{
        const hasError = Boolean(errors[index]);
        return hasError ? `[🔥${index}]` : `${index}`;
    }).join(', ');
    process.env.NODE_ENV !== "production" ? warning(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${formatted}
  `) : void 0;
}
function validateDimensions(critical, dimensions) {
    if (process.env.NODE_ENV !== 'production') {
        const insideDestination = getDraggablesInsideDroppable(critical.droppable.id, dimensions.draggables);
        checkIndexes(insideDestination);
    }
}
var lift = (marshal)=>({ getState, dispatch })=>(next)=>(action)=>{
                if (action.type !== 'LIFT') {
                    next(action);
                    return;
                }
                const { id, clientSelection, movementMode } = action.payload;
                const initial = getState();
                if (initial.phase === 'DROP_ANIMATING') {
                    dispatch(completeDrop({
                        completed: initial.completed
                    }));
                }
                !(getState().phase === 'IDLE') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Unexpected phase to start a drag') : invariant(false) : void 0;
                dispatch(flush());
                dispatch(beforeInitialCapture({
                    draggableId: id,
                    movementMode
                }));
                const scrollOptions = {
                    shouldPublishImmediately: movementMode === 'SNAP'
                };
                const request = {
                    draggableId: id,
                    scrollOptions
                };
                const { critical, dimensions, viewport } = marshal.startPublishing(request);
                validateDimensions(critical, dimensions);
                dispatch(initialPublish({
                    critical,
                    dimensions,
                    clientSelection,
                    movementMode,
                    viewport
                }));
            };
var style = (marshal)=>()=>(next)=>(action)=>{
                if (action.type === 'INITIAL_PUBLISH') {
                    marshal.dragging();
                }
                if (action.type === 'DROP_ANIMATE') {
                    marshal.dropping(action.payload.completed.result.reason);
                }
                if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE') {
                    marshal.resting();
                }
                next(action);
            };
const curves = {
    outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
    drop: 'cubic-bezier(.2,1,.1,1)'
};
const combine = {
    opacity: {
        drop: 0,
        combining: 0.7
    },
    scale: {
        drop: 0.75
    }
};
const timings = {
    outOfTheWay: 0.2,
    minDropTime: 0.33,
    maxDropTime: 0.55
};
const outOfTheWayTiming = `${timings.outOfTheWay}s ${curves.outOfTheWay}`;
const transitions = {
    fluid: `opacity ${outOfTheWayTiming}`,
    snap: `transform ${outOfTheWayTiming}, opacity ${outOfTheWayTiming}`,
    drop: (duration)=>{
        const timing = `${duration}s ${curves.drop}`;
        return `transform ${timing}, opacity ${timing}`;
    },
    outOfTheWay: `transform ${outOfTheWayTiming}`,
    placeholder: `height ${outOfTheWayTiming}, width ${outOfTheWayTiming}, margin ${outOfTheWayTiming}`
};
const moveTo = (offset)=>isEqual$1(offset, origin) ? undefined : `translate(${offset.x}px, ${offset.y}px)`;
const transforms = {
    moveTo,
    drop: (offset, isCombining)=>{
        const translate = moveTo(offset);
        if (!translate) {
            return undefined;
        }
        if (!isCombining) {
            return translate;
        }
        return `${translate} scale(${combine.scale.drop})`;
    }
};
const { minDropTime, maxDropTime } = timings;
const dropTimeRange = maxDropTime - minDropTime;
const maxDropTimeAtDistance = 1500;
const cancelDropModifier = 0.6;
var getDropDuration = ({ current, destination, reason })=>{
    const distance$1 = distance(current, destination);
    if (distance$1 <= 0) {
        return minDropTime;
    }
    if (distance$1 >= maxDropTimeAtDistance) {
        return maxDropTime;
    }
    const percentage = distance$1 / maxDropTimeAtDistance;
    const duration = minDropTime + dropTimeRange * percentage;
    const withDuration = reason === 'CANCEL' ? duration * cancelDropModifier : duration;
    return Number(withDuration.toFixed(2));
};
var getNewHomeClientOffset = ({ impact, draggable, dimensions, viewport, afterCritical })=>{
    const { draggables, droppables } = dimensions;
    const droppableId = whatIsDraggedOver(impact);
    const destination = droppableId ? droppables[droppableId] : null;
    const home = droppables[draggable.descriptor.droppableId];
    const newClientCenter = getClientBorderBoxCenter({
        impact,
        draggable,
        draggables,
        afterCritical,
        droppable: destination || home,
        viewport
    });
    const offset = subtract(newClientCenter, draggable.client.borderBox.center);
    return offset;
};
var getDropImpact = ({ draggables, reason, lastImpact, home, viewport, onLiftImpact })=>{
    if (!lastImpact.at || reason !== 'DROP') {
        const recomputedHomeImpact = recompute({
            draggables,
            impact: onLiftImpact,
            destination: home,
            viewport,
            forceShouldAnimate: true
        });
        return {
            impact: recomputedHomeImpact,
            didDropInsideDroppable: false
        };
    }
    if (lastImpact.at.type === 'REORDER') {
        return {
            impact: lastImpact,
            didDropInsideDroppable: true
        };
    }
    const withoutMovement = {
        ...lastImpact,
        displaced: emptyGroups
    };
    return {
        impact: withoutMovement,
        didDropInsideDroppable: true
    };
};
const dropMiddleware = ({ getState, dispatch })=>(next)=>(action)=>{
            if (action.type !== 'DROP') {
                next(action);
                return;
            }
            const state = getState();
            const reason = action.payload.reason;
            if (state.phase === 'COLLECTING') {
                dispatch(dropPending({
                    reason
                }));
                return;
            }
            if (state.phase === 'IDLE') {
                return;
            }
            const isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
            !!isWaitingForDrop ? process.env.NODE_ENV !== "production" ? invariant(false, 'A DROP action occurred while DROP_PENDING and still waiting') : invariant(false) : void 0;
            !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ? process.env.NODE_ENV !== "production" ? invariant(false, `Cannot drop in phase: ${state.phase}`) : invariant(false) : void 0;
            const critical = state.critical;
            const dimensions = state.dimensions;
            const draggable = dimensions.draggables[state.critical.draggable.id];
            const { impact, didDropInsideDroppable } = getDropImpact({
                reason,
                lastImpact: state.impact,
                afterCritical: state.afterCritical,
                onLiftImpact: state.onLiftImpact,
                home: state.dimensions.droppables[state.critical.droppable.id],
                viewport: state.viewport,
                draggables: state.dimensions.draggables
            });
            const destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
            const combine = didDropInsideDroppable ? tryGetCombine(impact) : null;
            const source = {
                index: critical.draggable.index,
                droppableId: critical.droppable.id
            };
            const result = {
                draggableId: draggable.descriptor.id,
                type: draggable.descriptor.type,
                source,
                reason,
                mode: state.movementMode,
                destination,
                combine
            };
            const newHomeClientOffset = getNewHomeClientOffset({
                impact,
                draggable,
                dimensions,
                viewport: state.viewport,
                afterCritical: state.afterCritical
            });
            const completed = {
                critical: state.critical,
                afterCritical: state.afterCritical,
                result,
                impact
            };
            const isAnimationRequired = !isEqual$1(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);
            if (!isAnimationRequired) {
                dispatch(completeDrop({
                    completed
                }));
                return;
            }
            const dropDuration = getDropDuration({
                current: state.current.client.offset,
                destination: newHomeClientOffset,
                reason
            });
            const args = {
                newHomeClientOffset,
                dropDuration,
                completed
            };
            dispatch(animateDrop(args));
        };
var drop = dropMiddleware;
var getWindowScroll = ()=>({
        x: window.pageXOffset,
        y: window.pageYOffset
    });
function getWindowScrollBinding(update) {
    return {
        eventName: 'scroll',
        options: {
            passive: true,
            capture: false
        },
        fn: (event)=>{
            if (event.target !== window && event.target !== window.document) {
                return;
            }
            update();
        }
    };
}
function getScrollListener({ onWindowScroll }) {
    function updateScroll() {
        onWindowScroll(getWindowScroll());
    }
    const scheduled = rafSchd(updateScroll);
    const binding = getWindowScrollBinding(scheduled);
    let unbind = noop$2;
    function isActive() {
        return unbind !== noop$2;
    }
    function start() {
        !!isActive() ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot start scroll listener when already active') : invariant(false) : void 0;
        unbind = bindEvents(window, [
            binding
        ]);
    }
    function stop() {
        !isActive() ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot stop scroll listener when not active') : invariant(false) : void 0;
        scheduled.cancel();
        unbind();
        unbind = noop$2;
    }
    return {
        start,
        stop,
        isActive
    };
}
const shouldEnd = (action)=>action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
const scrollListener = (store)=>{
    const listener = getScrollListener({
        onWindowScroll: (newScroll)=>{
            store.dispatch(moveByWindowScroll({
                newScroll
            }));
        }
    });
    return (next)=>(action)=>{
            if (!listener.isActive() && action.type === 'INITIAL_PUBLISH') {
                listener.start();
            }
            if (listener.isActive() && shouldEnd(action)) {
                listener.stop();
            }
            next(action);
        };
};
var scrollListener$1 = scrollListener;
var getExpiringAnnounce = (announce)=>{
    let wasCalled = false;
    let isExpired = false;
    const timeoutId = setTimeout(()=>{
        isExpired = true;
    });
    const result = (message)=>{
        if (wasCalled) {
            process.env.NODE_ENV !== "production" ? warning('Announcement already made. Not making a second announcement') : void 0;
            return;
        }
        if (isExpired) {
            process.env.NODE_ENV !== "production" ? warning(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `) : void 0;
            return;
        }
        wasCalled = true;
        announce(message);
        clearTimeout(timeoutId);
    };
    result.wasCalled = ()=>wasCalled;
    return result;
};
var getAsyncMarshal = ()=>{
    const entries = [];
    const execute = (timerId)=>{
        const index = entries.findIndex((item)=>item.timerId === timerId);
        !(index !== -1) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find timer') : invariant(false) : void 0;
        const [entry] = entries.splice(index, 1);
        entry.callback();
    };
    const add = (fn)=>{
        const timerId = setTimeout(()=>execute(timerId));
        const entry = {
            timerId,
            callback: fn
        };
        entries.push(entry);
    };
    const flush = ()=>{
        if (!entries.length) {
            return;
        }
        const shallow = [
            ...entries
        ];
        entries.length = 0;
        shallow.forEach((entry)=>{
            clearTimeout(entry.timerId);
            entry.callback();
        });
    };
    return {
        add,
        flush
    };
};
const areLocationsEqual = (first, second)=>{
    if (first == null && second == null) {
        return true;
    }
    if (first == null || second == null) {
        return false;
    }
    return first.droppableId === second.droppableId && first.index === second.index;
};
const isCombineEqual = (first, second)=>{
    if (first == null && second == null) {
        return true;
    }
    if (first == null || second == null) {
        return false;
    }
    return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
const isCriticalEqual = (first, second)=>{
    if (first === second) {
        return true;
    }
    const isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
    const isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
    return isDraggableEqual && isDroppableEqual;
};
const withTimings = (key, fn)=>{
    start();
    fn();
    finish();
};
const getDragStart = (critical, mode)=>({
        draggableId: critical.draggable.id,
        type: critical.droppable.type,
        source: {
            droppableId: critical.droppable.id,
            index: critical.draggable.index
        },
        mode
    });
function execute(responder, data, announce, getDefaultMessage) {
    if (!responder) {
        announce(getDefaultMessage(data));
        return;
    }
    const willExpire = getExpiringAnnounce(announce);
    const provided = {
        announce: willExpire
    };
    responder(data, provided);
    if (!willExpire.wasCalled()) {
        announce(getDefaultMessage(data));
    }
}
var getPublisher = (getResponders, announce)=>{
    const asyncMarshal = getAsyncMarshal();
    let dragging = null;
    const beforeCapture = (draggableId, mode)=>{
        !!dragging ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fire onBeforeCapture as a drag start has already been published') : invariant(false) : void 0;
        withTimings('onBeforeCapture', ()=>{
            const fn = getResponders().onBeforeCapture;
            if (fn) {
                const before = {
                    draggableId,
                    mode
                };
                fn(before);
            }
        });
    };
    const beforeStart = (critical, mode)=>{
        !!dragging ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : invariant(false) : void 0;
        withTimings('onBeforeDragStart', ()=>{
            const fn = getResponders().onBeforeDragStart;
            if (fn) {
                fn(getDragStart(critical, mode));
            }
        });
    };
    const start = (critical, mode)=>{
        !!dragging ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : invariant(false) : void 0;
        const data = getDragStart(critical, mode);
        dragging = {
            mode,
            lastCritical: critical,
            lastLocation: data.source,
            lastCombine: null
        };
        asyncMarshal.add(()=>{
            withTimings('onDragStart', ()=>execute(getResponders().onDragStart, data, announce, preset$1.onDragStart));
        });
    };
    const update = (critical, impact)=>{
        const location = tryGetDestination(impact);
        const combine = tryGetCombine(impact);
        !dragging ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fire onDragMove when onDragStart has not been called') : invariant(false) : void 0;
        const hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);
        if (hasCriticalChanged) {
            dragging.lastCritical = critical;
        }
        const hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);
        if (hasLocationChanged) {
            dragging.lastLocation = location;
        }
        const hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine);
        if (hasGroupingChanged) {
            dragging.lastCombine = combine;
        }
        if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
            return;
        }
        const data = {
            ...getDragStart(critical, dragging.mode),
            combine,
            destination: location
        };
        asyncMarshal.add(()=>{
            withTimings('onDragUpdate', ()=>execute(getResponders().onDragUpdate, data, announce, preset$1.onDragUpdate));
        });
    };
    const flush = ()=>{
        !dragging ? process.env.NODE_ENV !== "production" ? invariant(false, 'Can only flush responders while dragging') : invariant(false) : void 0;
        asyncMarshal.flush();
    };
    const drop = (result)=>{
        !dragging ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fire onDragEnd when there is no matching onDragStart') : invariant(false) : void 0;
        dragging = null;
        withTimings('onDragEnd', ()=>execute(getResponders().onDragEnd, result, announce, preset$1.onDragEnd));
    };
    const abort = ()=>{
        if (!dragging) {
            return;
        }
        const result = {
            ...getDragStart(dragging.lastCritical, dragging.mode),
            combine: null,
            destination: null,
            reason: 'CANCEL'
        };
        drop(result);
    };
    return {
        beforeCapture,
        beforeStart,
        start,
        update,
        flush,
        drop,
        abort
    };
};
var responders = (getResponders, announce)=>{
    const publisher = getPublisher(getResponders, announce);
    return (store)=>(next)=>(action)=>{
                if (action.type === 'BEFORE_INITIAL_CAPTURE') {
                    publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
                    return;
                }
                if (action.type === 'INITIAL_PUBLISH') {
                    const critical = action.payload.critical;
                    publisher.beforeStart(critical, action.payload.movementMode);
                    next(action);
                    publisher.start(critical, action.payload.movementMode);
                    return;
                }
                if (action.type === 'DROP_COMPLETE') {
                    const result = action.payload.completed.result;
                    publisher.flush();
                    next(action);
                    publisher.drop(result);
                    return;
                }
                next(action);
                if (action.type === 'FLUSH') {
                    publisher.abort();
                    return;
                }
                const state = store.getState();
                if (state.phase === 'DRAGGING') {
                    publisher.update(state.critical, state.impact);
                }
            };
};
const dropAnimationFinishMiddleware = (store)=>(next)=>(action)=>{
            if (action.type !== 'DROP_ANIMATION_FINISHED') {
                next(action);
                return;
            }
            const state = store.getState();
            !(state.phase === 'DROP_ANIMATING') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot finish a drop animating when no drop is occurring') : invariant(false) : void 0;
            store.dispatch(completeDrop({
                completed: state.completed
            }));
        };
var dropAnimationFinish = dropAnimationFinishMiddleware;
const dropAnimationFlushOnScrollMiddleware = (store)=>{
    let unbind = null;
    let frameId = null;
    function clear() {
        if (frameId) {
            cancelAnimationFrame(frameId);
            frameId = null;
        }
        if (unbind) {
            unbind();
            unbind = null;
        }
    }
    return (next)=>(action)=>{
            if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATION_FINISHED') {
                clear();
            }
            next(action);
            if (action.type !== 'DROP_ANIMATE') {
                return;
            }
            const binding = {
                eventName: 'scroll',
                options: {
                    capture: true,
                    passive: false,
                    once: true
                },
                fn: function flushDropAnimation() {
                    const state = store.getState();
                    if (state.phase === 'DROP_ANIMATING') {
                        store.dispatch(dropAnimationFinished());
                    }
                }
            };
            frameId = requestAnimationFrame(()=>{
                frameId = null;
                unbind = bindEvents(window, [
                    binding
                ]);
            });
        };
};
var dropAnimationFlushOnScroll = dropAnimationFlushOnScrollMiddleware;
var dimensionMarshalStopper = (marshal)=>()=>(next)=>(action)=>{
                if (action.type === 'DROP_COMPLETE' || action.type === 'FLUSH' || action.type === 'DROP_ANIMATE') {
                    marshal.stopPublishing();
                }
                next(action);
            };
var focus = (marshal)=>{
    let isWatching = false;
    return ()=>(next)=>(action)=>{
                if (action.type === 'INITIAL_PUBLISH') {
                    isWatching = true;
                    marshal.tryRecordFocus(action.payload.critical.draggable.id);
                    next(action);
                    marshal.tryRestoreFocusRecorded();
                    return;
                }
                next(action);
                if (!isWatching) {
                    return;
                }
                if (action.type === 'FLUSH') {
                    isWatching = false;
                    marshal.tryRestoreFocusRecorded();
                    return;
                }
                if (action.type === 'DROP_COMPLETE') {
                    isWatching = false;
                    const result = action.payload.completed.result;
                    if (result.combine) {
                        marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
                    }
                    marshal.tryRestoreFocusRecorded();
                }
            };
};
const shouldStop = (action)=>action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
var autoScroll = (autoScroller)=>(store)=>(next)=>(action)=>{
                if (shouldStop(action)) {
                    autoScroller.stop();
                    next(action);
                    return;
                }
                if (action.type === 'INITIAL_PUBLISH') {
                    next(action);
                    const state = store.getState();
                    !(state.phase === 'DRAGGING') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Expected phase to be DRAGGING after INITIAL_PUBLISH') : invariant(false) : void 0;
                    autoScroller.start(state);
                    return;
                }
                next(action);
                autoScroller.scroll(store.getState());
            };
const pendingDrop = (store)=>(next)=>(action)=>{
            next(action);
            if (action.type !== 'PUBLISH_WHILE_DRAGGING') {
                return;
            }
            const postActionState = store.getState();
            if (postActionState.phase !== 'DROP_PENDING') {
                return;
            }
            if (postActionState.isWaiting) {
                return;
            }
            store.dispatch(drop$1({
                reason: postActionState.reason
            }));
        };
var pendingDrop$1 = pendingDrop;
const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: '@hello-pangea/dnd'
}) : compose;
var createStore$1 = ({ dimensionMarshal, focusMarshal, styleMarshal, getResponders, announce, autoScroller })=>createStore$2(reducer, composeEnhancers(applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift(dimensionMarshal), drop, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop$1, autoScroll(autoScroller), scrollListener$1, focus(focusMarshal), responders(getResponders, announce))));
const clean$1 = ()=>({
        additions: {},
        removals: {},
        modified: {}
    });
function createPublisher({ registry, callbacks }) {
    let staging = clean$1();
    let frameId = null;
    const collect = ()=>{
        if (frameId) {
            return;
        }
        callbacks.collectionStarting();
        frameId = requestAnimationFrame(()=>{
            frameId = null;
            start();
            const { additions, removals, modified } = staging;
            const added = Object.keys(additions).map((id)=>registry.draggable.getById(id).getDimension(origin)).sort((a, b)=>a.descriptor.index - b.descriptor.index);
            const updated = Object.keys(modified).map((id)=>{
                const entry = registry.droppable.getById(id);
                const scroll = entry.callbacks.getScrollWhileDragging();
                return {
                    droppableId: id,
                    scroll
                };
            });
            const result = {
                additions: added,
                removals: Object.keys(removals),
                modified: updated
            };
            staging = clean$1();
            finish();
            callbacks.publish(result);
        });
    };
    const add = (entry)=>{
        const id = entry.descriptor.id;
        staging.additions[id] = entry;
        staging.modified[entry.descriptor.droppableId] = true;
        if (staging.removals[id]) {
            delete staging.removals[id];
        }
        collect();
    };
    const remove = (entry)=>{
        const descriptor = entry.descriptor;
        staging.removals[descriptor.id] = true;
        staging.modified[descriptor.droppableId] = true;
        if (staging.additions[descriptor.id]) {
            delete staging.additions[descriptor.id];
        }
        collect();
    };
    const stop = ()=>{
        if (!frameId) {
            return;
        }
        cancelAnimationFrame(frameId);
        frameId = null;
        staging = clean$1();
    };
    return {
        add,
        remove,
        stop
    };
}
var getMaxScroll = ({ scrollHeight, scrollWidth, height, width })=>{
    const maxScroll = subtract({
        x: scrollWidth,
        y: scrollHeight
    }, {
        x: width,
        y: height
    });
    const adjustedMaxScroll = {
        x: Math.max(0, maxScroll.x),
        y: Math.max(0, maxScroll.y)
    };
    return adjustedMaxScroll;
};
var getDocumentElement = ()=>{
    const doc = document.documentElement;
    !doc ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot find document.documentElement') : invariant(false) : void 0;
    return doc;
};
var getMaxWindowScroll = ()=>{
    const doc = getDocumentElement();
    const maxScroll = getMaxScroll({
        scrollHeight: doc.scrollHeight,
        scrollWidth: doc.scrollWidth,
        width: doc.clientWidth,
        height: doc.clientHeight
    });
    return maxScroll;
};
var getViewport = ()=>{
    const scroll = getWindowScroll();
    const maxScroll = getMaxWindowScroll();
    const top = scroll.y;
    const left = scroll.x;
    const doc = getDocumentElement();
    const width = doc.clientWidth;
    const height = doc.clientHeight;
    const right = left + width;
    const bottom = top + height;
    const frame = getRect({
        top,
        left,
        right,
        bottom
    });
    const viewport = {
        frame,
        scroll: {
            initial: scroll,
            current: scroll,
            max: maxScroll,
            diff: {
                value: origin,
                displacement: origin
            }
        }
    };
    return viewport;
};
var getInitialPublish = ({ critical, scrollOptions, registry })=>{
    start();
    const viewport = getViewport();
    const windowScroll = viewport.scroll.current;
    const home = critical.droppable;
    const droppables = registry.droppable.getAllByType(home.type).map((entry)=>entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions));
    const draggables = registry.draggable.getAllByType(critical.draggable.type).map((entry)=>entry.getDimension(windowScroll));
    const dimensions = {
        draggables: toDraggableMap(draggables),
        droppables: toDroppableMap(droppables)
    };
    finish();
    const result = {
        dimensions,
        critical,
        viewport
    };
    return result;
};
function shouldPublishUpdate(registry, dragging, entry) {
    if (entry.descriptor.id === dragging.id) {
        return false;
    }
    if (entry.descriptor.type !== dragging.type) {
        return false;
    }
    const home = registry.droppable.getById(entry.descriptor.droppableId);
    if (home.descriptor.mode !== 'virtual') {
        process.env.NODE_ENV !== "production" ? warning(`
      You are attempting to add or remove a Draggable [id: ${entry.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `) : void 0;
        return false;
    }
    return true;
}
var createDimensionMarshal = (registry, callbacks)=>{
    let collection = null;
    const publisher = createPublisher({
        callbacks: {
            publish: callbacks.publishWhileDragging,
            collectionStarting: callbacks.collectionStarting
        },
        registry
    });
    const updateDroppableIsEnabled = (id, isEnabled)=>{
        !registry.droppable.exists(id) ? process.env.NODE_ENV !== "production" ? invariant(false, `Cannot update is enabled flag of Droppable ${id} as it is not registered`) : invariant(false) : void 0;
        if (!collection) {
            return;
        }
        callbacks.updateDroppableIsEnabled({
            id,
            isEnabled
        });
    };
    const updateDroppableIsCombineEnabled = (id, isCombineEnabled)=>{
        if (!collection) {
            return;
        }
        !registry.droppable.exists(id) ? process.env.NODE_ENV !== "production" ? invariant(false, `Cannot update isCombineEnabled flag of Droppable ${id} as it is not registered`) : invariant(false) : void 0;
        callbacks.updateDroppableIsCombineEnabled({
            id,
            isCombineEnabled
        });
    };
    const updateDroppableScroll = (id, newScroll)=>{
        if (!collection) {
            return;
        }
        !registry.droppable.exists(id) ? process.env.NODE_ENV !== "production" ? invariant(false, `Cannot update the scroll on Droppable ${id} as it is not registered`) : invariant(false) : void 0;
        callbacks.updateDroppableScroll({
            id,
            newScroll
        });
    };
    const scrollDroppable = (id, change)=>{
        if (!collection) {
            return;
        }
        registry.droppable.getById(id).callbacks.scroll(change);
    };
    const stopPublishing = ()=>{
        if (!collection) {
            return;
        }
        publisher.stop();
        const home = collection.critical.droppable;
        registry.droppable.getAllByType(home.type).forEach((entry)=>entry.callbacks.dragStopped());
        collection.unsubscribe();
        collection = null;
    };
    const subscriber = (event)=>{
        !collection ? process.env.NODE_ENV !== "production" ? invariant(false, 'Should only be subscribed when a collection is occurring') : invariant(false) : void 0;
        const dragging = collection.critical.draggable;
        if (event.type === 'ADDITION') {
            if (shouldPublishUpdate(registry, dragging, event.value)) {
                publisher.add(event.value);
            }
        }
        if (event.type === 'REMOVAL') {
            if (shouldPublishUpdate(registry, dragging, event.value)) {
                publisher.remove(event.value);
            }
        }
    };
    const startPublishing = (request)=>{
        !!collection ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot start capturing critical dimensions as there is already a collection') : invariant(false) : void 0;
        const entry = registry.draggable.getById(request.draggableId);
        const home = registry.droppable.getById(entry.descriptor.droppableId);
        const critical = {
            draggable: entry.descriptor,
            droppable: home.descriptor
        };
        const unsubscribe = registry.subscribe(subscriber);
        collection = {
            critical,
            unsubscribe
        };
        return getInitialPublish({
            critical,
            registry,
            scrollOptions: request.scrollOptions
        });
    };
    const marshal = {
        updateDroppableIsEnabled,
        updateDroppableIsCombineEnabled,
        scrollDroppable,
        updateDroppableScroll,
        startPublishing,
        stopPublishing
    };
    return marshal;
};
var canStartDrag = (state, id)=>{
    if (state.phase === 'IDLE') {
        return true;
    }
    if (state.phase !== 'DROP_ANIMATING') {
        return false;
    }
    if (state.completed.result.draggableId === id) {
        return false;
    }
    return state.completed.result.reason === 'DROP';
};
var scrollWindow = (change)=>{
    window.scrollBy(change.x, change.y);
};
const getScrollableDroppables = memoizeOne((droppables)=>toDroppableList(droppables).filter((droppable)=>{
        if (!droppable.isEnabled) {
            return false;
        }
        if (!droppable.frame) {
            return false;
        }
        return true;
    }));
const getScrollableDroppableOver = (target, droppables)=>{
    const maybe = getScrollableDroppables(droppables).find((droppable)=>{
        !droppable.frame ? process.env.NODE_ENV !== "production" ? invariant(false, 'Invalid result') : invariant(false) : void 0;
        return isPositionInFrame(droppable.frame.pageMarginBox)(target);
    }) || null;
    return maybe;
};
var getBestScrollableDroppable = ({ center, destination, droppables })=>{
    if (destination) {
        const dimension = droppables[destination];
        if (!dimension.frame) {
            return null;
        }
        return dimension;
    }
    const dimension = getScrollableDroppableOver(center, droppables);
    return dimension;
};
const defaultAutoScrollerOptions = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (percentage)=>percentage ** 2,
    durationDampening: {
        stopDampeningAt: 1200,
        accelerateAt: 360
    },
    disabled: false
};
var getDistanceThresholds = (container, axis, getAutoScrollerOptions = ()=>defaultAutoScrollerOptions)=>{
    const autoScrollerOptions = getAutoScrollerOptions();
    const startScrollingFrom = container[axis.size] * autoScrollerOptions.startFromPercentage;
    const maxScrollValueAt = container[axis.size] * autoScrollerOptions.maxScrollAtPercentage;
    const thresholds = {
        startScrollingFrom,
        maxScrollValueAt
    };
    return thresholds;
};
var getPercentage = ({ startOfRange, endOfRange, current })=>{
    const range = endOfRange - startOfRange;
    if (range === 0) {
        process.env.NODE_ENV !== "production" ? warning(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `) : void 0;
        return 0;
    }
    const currentInRange = current - startOfRange;
    const percentage = currentInRange / range;
    return percentage;
};
var minScroll = 1;
var getValueFromDistance = (distanceToEdge, thresholds, getAutoScrollerOptions = ()=>defaultAutoScrollerOptions)=>{
    const autoScrollerOptions = getAutoScrollerOptions();
    if (distanceToEdge > thresholds.startScrollingFrom) {
        return 0;
    }
    if (distanceToEdge <= thresholds.maxScrollValueAt) {
        return autoScrollerOptions.maxPixelScroll;
    }
    if (distanceToEdge === thresholds.startScrollingFrom) {
        return minScroll;
    }
    const percentageFromMaxScrollValueAt = getPercentage({
        startOfRange: thresholds.maxScrollValueAt,
        endOfRange: thresholds.startScrollingFrom,
        current: distanceToEdge
    });
    const percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
    const scroll = autoScrollerOptions.maxPixelScroll * autoScrollerOptions.ease(percentageFromStartScrollingFrom);
    return Math.ceil(scroll);
};
var dampenValueByTime = (proposedScroll, dragStartTime, getAutoScrollerOptions)=>{
    const autoScrollerOptions = getAutoScrollerOptions();
    const accelerateAt = autoScrollerOptions.durationDampening.accelerateAt;
    const stopAt = autoScrollerOptions.durationDampening.stopDampeningAt;
    const startOfRange = dragStartTime;
    const endOfRange = stopAt;
    const now = Date.now();
    const runTime = now - startOfRange;
    if (runTime >= stopAt) {
        return proposedScroll;
    }
    if (runTime < accelerateAt) {
        return minScroll;
    }
    const betweenAccelerateAtAndStopAtPercentage = getPercentage({
        startOfRange: accelerateAt,
        endOfRange,
        current: runTime
    });
    const scroll = proposedScroll * autoScrollerOptions.ease(betweenAccelerateAtAndStopAtPercentage);
    return Math.ceil(scroll);
};
var getValue = ({ distanceToEdge, thresholds, dragStartTime, shouldUseTimeDampening, getAutoScrollerOptions })=>{
    const scroll = getValueFromDistance(distanceToEdge, thresholds, getAutoScrollerOptions);
    if (scroll === 0) {
        return 0;
    }
    if (!shouldUseTimeDampening) {
        return scroll;
    }
    return Math.max(dampenValueByTime(scroll, dragStartTime, getAutoScrollerOptions), minScroll);
};
var getScrollOnAxis = ({ container, distanceToEdges, dragStartTime, axis, shouldUseTimeDampening, getAutoScrollerOptions })=>{
    const thresholds = getDistanceThresholds(container, axis, getAutoScrollerOptions);
    const isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];
    if (isCloserToEnd) {
        return getValue({
            distanceToEdge: distanceToEdges[axis.end],
            thresholds,
            dragStartTime,
            shouldUseTimeDampening,
            getAutoScrollerOptions
        });
    }
    return -1 * getValue({
        distanceToEdge: distanceToEdges[axis.start],
        thresholds,
        dragStartTime,
        shouldUseTimeDampening,
        getAutoScrollerOptions
    });
};
var adjustForSizeLimits = ({ container, subject, proposedScroll })=>{
    const isTooBigVertically = subject.height > container.height;
    const isTooBigHorizontally = subject.width > container.width;
    if (!isTooBigHorizontally && !isTooBigVertically) {
        return proposedScroll;
    }
    if (isTooBigHorizontally && isTooBigVertically) {
        return null;
    }
    return {
        x: isTooBigHorizontally ? 0 : proposedScroll.x,
        y: isTooBigVertically ? 0 : proposedScroll.y
    };
};
const clean = apply((value)=>value === 0 ? 0 : value);
var getScroll$1 = ({ dragStartTime, container, subject, center, shouldUseTimeDampening, getAutoScrollerOptions })=>{
    const distanceToEdges = {
        top: center.y - container.top,
        right: container.right - center.x,
        bottom: container.bottom - center.y,
        left: center.x - container.left
    };
    const y = getScrollOnAxis({
        container,
        distanceToEdges,
        dragStartTime,
        axis: vertical,
        shouldUseTimeDampening,
        getAutoScrollerOptions
    });
    const x = getScrollOnAxis({
        container,
        distanceToEdges,
        dragStartTime,
        axis: horizontal,
        shouldUseTimeDampening,
        getAutoScrollerOptions
    });
    const required = clean({
        x,
        y
    });
    if (isEqual$1(required, origin)) {
        return null;
    }
    const limited = adjustForSizeLimits({
        container,
        subject,
        proposedScroll: required
    });
    if (!limited) {
        return null;
    }
    return isEqual$1(limited, origin) ? null : limited;
};
const smallestSigned = apply((value)=>{
    if (value === 0) {
        return 0;
    }
    return value > 0 ? 1 : -1;
});
const getOverlap = (()=>{
    const getRemainder = (target, max)=>{
        if (target < 0) {
            return target;
        }
        if (target > max) {
            return target - max;
        }
        return 0;
    };
    return ({ current, max, change })=>{
        const targetScroll = add(current, change);
        const overlap = {
            x: getRemainder(targetScroll.x, max.x),
            y: getRemainder(targetScroll.y, max.y)
        };
        if (isEqual$1(overlap, origin)) {
            return null;
        }
        return overlap;
    };
})();
const canPartiallyScroll = ({ max: rawMax, current, change })=>{
    const max = {
        x: Math.max(current.x, rawMax.x),
        y: Math.max(current.y, rawMax.y)
    };
    const smallestChange = smallestSigned(change);
    const overlap = getOverlap({
        max,
        current,
        change: smallestChange
    });
    if (!overlap) {
        return true;
    }
    if (smallestChange.x !== 0 && overlap.x === 0) {
        return true;
    }
    if (smallestChange.y !== 0 && overlap.y === 0) {
        return true;
    }
    return false;
};
const canScrollWindow = (viewport, change)=>canPartiallyScroll({
        current: viewport.scroll.current,
        max: viewport.scroll.max,
        change
    });
const getWindowOverlap = (viewport, change)=>{
    if (!canScrollWindow(viewport, change)) {
        return null;
    }
    const max = viewport.scroll.max;
    const current = viewport.scroll.current;
    return getOverlap({
        current,
        max,
        change
    });
};
const canScrollDroppable = (droppable, change)=>{
    const frame = droppable.frame;
    if (!frame) {
        return false;
    }
    return canPartiallyScroll({
        current: frame.scroll.current,
        max: frame.scroll.max,
        change
    });
};
const getDroppableOverlap = (droppable, change)=>{
    const frame = droppable.frame;
    if (!frame) {
        return null;
    }
    if (!canScrollDroppable(droppable, change)) {
        return null;
    }
    return getOverlap({
        current: frame.scroll.current,
        max: frame.scroll.max,
        change
    });
};
var getWindowScrollChange = ({ viewport, subject, center, dragStartTime, shouldUseTimeDampening, getAutoScrollerOptions })=>{
    const scroll = getScroll$1({
        dragStartTime,
        container: viewport.frame,
        subject,
        center,
        shouldUseTimeDampening,
        getAutoScrollerOptions
    });
    return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
};
var getDroppableScrollChange = ({ droppable, subject, center, dragStartTime, shouldUseTimeDampening, getAutoScrollerOptions })=>{
    const frame = droppable.frame;
    if (!frame) {
        return null;
    }
    const scroll = getScroll$1({
        dragStartTime,
        container: frame.pageMarginBox,
        subject,
        center,
        shouldUseTimeDampening,
        getAutoScrollerOptions
    });
    return scroll && canScrollDroppable(droppable, scroll) ? scroll : null;
};
var scroll = ({ state, dragStartTime, shouldUseTimeDampening, scrollWindow, scrollDroppable, getAutoScrollerOptions })=>{
    const center = state.current.page.borderBoxCenter;
    const draggable = state.dimensions.draggables[state.critical.draggable.id];
    const subject = draggable.page.marginBox;
    if (state.isWindowScrollAllowed) {
        const viewport = state.viewport;
        const change = getWindowScrollChange({
            dragStartTime,
            viewport,
            subject,
            center,
            shouldUseTimeDampening,
            getAutoScrollerOptions
        });
        if (change) {
            scrollWindow(change);
            return;
        }
    }
    const droppable = getBestScrollableDroppable({
        center,
        destination: whatIsDraggedOver(state.impact),
        droppables: state.dimensions.droppables
    });
    if (!droppable) {
        return;
    }
    const change = getDroppableScrollChange({
        dragStartTime,
        droppable,
        subject,
        center,
        shouldUseTimeDampening,
        getAutoScrollerOptions
    });
    if (change) {
        scrollDroppable(droppable.descriptor.id, change);
    }
};
var createFluidScroller = ({ scrollWindow, scrollDroppable, getAutoScrollerOptions = ()=>defaultAutoScrollerOptions })=>{
    const scheduleWindowScroll = rafSchd(scrollWindow);
    const scheduleDroppableScroll = rafSchd(scrollDroppable);
    let dragging = null;
    const tryScroll = (state)=>{
        !dragging ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fluid scroll if not dragging') : invariant(false) : void 0;
        const { shouldUseTimeDampening, dragStartTime } = dragging;
        scroll({
            state,
            scrollWindow: scheduleWindowScroll,
            scrollDroppable: scheduleDroppableScroll,
            dragStartTime,
            shouldUseTimeDampening,
            getAutoScrollerOptions
        });
    };
    const start$1 = (state)=>{
        start();
        !!dragging ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot start auto scrolling when already started') : invariant(false) : void 0;
        const dragStartTime = Date.now();
        let wasScrollNeeded = false;
        const fakeScrollCallback = ()=>{
            wasScrollNeeded = true;
        };
        scroll({
            state,
            dragStartTime: 0,
            shouldUseTimeDampening: false,
            scrollWindow: fakeScrollCallback,
            scrollDroppable: fakeScrollCallback,
            getAutoScrollerOptions
        });
        dragging = {
            dragStartTime,
            shouldUseTimeDampening: wasScrollNeeded
        };
        finish();
        if (wasScrollNeeded) {
            tryScroll(state);
        }
    };
    const stop = ()=>{
        if (!dragging) {
            return;
        }
        scheduleWindowScroll.cancel();
        scheduleDroppableScroll.cancel();
        dragging = null;
    };
    return {
        start: start$1,
        stop,
        scroll: tryScroll
    };
};
var createJumpScroller = ({ move, scrollDroppable, scrollWindow })=>{
    const moveByOffset = (state, offset)=>{
        const client = add(state.current.client.selection, offset);
        move({
            client
        });
    };
    const scrollDroppableAsMuchAsItCan = (droppable, change)=>{
        if (!canScrollDroppable(droppable, change)) {
            return change;
        }
        const overlap = getDroppableOverlap(droppable, change);
        if (!overlap) {
            scrollDroppable(droppable.descriptor.id, change);
            return null;
        }
        const whatTheDroppableCanScroll = subtract(change, overlap);
        scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
        const remainder = subtract(change, whatTheDroppableCanScroll);
        return remainder;
    };
    const scrollWindowAsMuchAsItCan = (isWindowScrollAllowed, viewport, change)=>{
        if (!isWindowScrollAllowed) {
            return change;
        }
        if (!canScrollWindow(viewport, change)) {
            return change;
        }
        const overlap = getWindowOverlap(viewport, change);
        if (!overlap) {
            scrollWindow(change);
            return null;
        }
        const whatTheWindowCanScroll = subtract(change, overlap);
        scrollWindow(whatTheWindowCanScroll);
        const remainder = subtract(change, whatTheWindowCanScroll);
        return remainder;
    };
    const jumpScroller = (state)=>{
        const request = state.scrollJumpRequest;
        if (!request) {
            return;
        }
        const destination = whatIsDraggedOver(state.impact);
        !destination ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot perform a jump scroll when there is no destination') : invariant(false) : void 0;
        const droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);
        if (!droppableRemainder) {
            return;
        }
        const viewport = state.viewport;
        const windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);
        if (!windowRemainder) {
            return;
        }
        moveByOffset(state, windowRemainder);
    };
    return jumpScroller;
};
var createAutoScroller = ({ scrollDroppable, scrollWindow, move, getAutoScrollerOptions })=>{
    const fluidScroller = createFluidScroller({
        scrollWindow,
        scrollDroppable,
        getAutoScrollerOptions
    });
    const jumpScroll = createJumpScroller({
        move,
        scrollWindow,
        scrollDroppable
    });
    const scroll = (state)=>{
        const autoScrollerOptions = getAutoScrollerOptions();
        if (autoScrollerOptions.disabled || state.phase !== 'DRAGGING') {
            return;
        }
        if (state.movementMode === 'FLUID') {
            fluidScroller.scroll(state);
            return;
        }
        if (!state.scrollJumpRequest) {
            return;
        }
        jumpScroll(state);
    };
    const scroller = {
        scroll,
        start: fluidScroller.start,
        stop: fluidScroller.stop
    };
    return scroller;
};
const prefix = 'data-rfd';
const dragHandle = (()=>{
    const base = `${prefix}-drag-handle`;
    return {
        base,
        draggableId: `${base}-draggable-id`,
        contextId: `${base}-context-id`
    };
})();
const draggable = (()=>{
    const base = `${prefix}-draggable`;
    return {
        base,
        contextId: `${base}-context-id`,
        id: `${base}-id`
    };
})();
const droppable = (()=>{
    const base = `${prefix}-droppable`;
    return {
        base,
        contextId: `${base}-context-id`,
        id: `${base}-id`
    };
})();
const scrollContainer = {
    contextId: `${prefix}-scroll-container-context-id`
};
const makeGetSelector = (context)=>(attribute)=>`[${attribute}="${context}"]`;
const getStyles = (rules, property)=>rules.map((rule)=>{
        const value = rule.styles[property];
        if (!value) {
            return '';
        }
        return `${rule.selector} { ${value} }`;
    }).join(' ');
const noPointerEvents = 'pointer-events: none;';
var getStyles$1 = (contextId)=>{
    const getSelector = makeGetSelector(contextId);
    const dragHandle$1 = (()=>{
        const grabCursor = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
            selector: getSelector(dragHandle.contextId),
            styles: {
                always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
                resting: grabCursor,
                dragging: noPointerEvents,
                dropAnimating: grabCursor
            }
        };
    })();
    const draggable$1 = (()=>{
        const transition = `
      transition: ${transitions.outOfTheWay};
    `;
        return {
            selector: getSelector(draggable.contextId),
            styles: {
                dragging: transition,
                dropAnimating: transition,
                userCancel: transition
            }
        };
    })();
    const droppable$1 = {
        selector: getSelector(droppable.contextId),
        styles: {
            always: `overflow-anchor: none;`
        }
    };
    const body = {
        selector: 'body',
        styles: {
            dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
        }
    };
    const rules = [
        draggable$1,
        dragHandle$1,
        droppable$1,
        body
    ];
    return {
        always: getStyles(rules, 'always'),
        resting: getStyles(rules, 'resting'),
        dragging: getStyles(rules, 'dragging'),
        dropAnimating: getStyles(rules, 'dropAnimating'),
        userCancel: getStyles(rules, 'userCancel')
    };
};
const useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;
var useLayoutEffect = useIsomorphicLayoutEffect;
const getHead = ()=>{
    const head = document.querySelector('head');
    !head ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot find the head to append a style to') : invariant(false) : void 0;
    return head;
};
const createStyleEl = (nonce)=>{
    const el = document.createElement('style');
    if (nonce) {
        el.setAttribute('nonce', nonce);
    }
    el.type = 'text/css';
    return el;
};
function useStyleMarshal(contextId, nonce) {
    const styles = useMemo(()=>getStyles$1(contextId), [
        contextId
    ]);
    const alwaysRef = React.useRef(null);
    const dynamicRef = React.useRef(null);
    const setDynamicStyle = useCallback(memoizeOne((proposed)=>{
        const el = dynamicRef.current;
        !el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot set dynamic style element if it is not set') : invariant(false) : void 0;
        el.textContent = proposed;
    }), []);
    const setAlwaysStyle = useCallback((proposed)=>{
        const el = alwaysRef.current;
        !el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot set dynamic style element if it is not set') : invariant(false) : void 0;
        el.textContent = proposed;
    }, []);
    useLayoutEffect(()=>{
        !(!alwaysRef.current && !dynamicRef.current) ? process.env.NODE_ENV !== "production" ? invariant(false, 'style elements already mounted') : invariant(false) : void 0;
        const always = createStyleEl(nonce);
        const dynamic = createStyleEl(nonce);
        alwaysRef.current = always;
        dynamicRef.current = dynamic;
        always.setAttribute(`${prefix}-always`, contextId);
        dynamic.setAttribute(`${prefix}-dynamic`, contextId);
        getHead().appendChild(always);
        getHead().appendChild(dynamic);
        setAlwaysStyle(styles.always);
        setDynamicStyle(styles.resting);
        return ()=>{
            const remove = (ref)=>{
                const current = ref.current;
                !current ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot unmount ref as it is not set') : invariant(false) : void 0;
                getHead().removeChild(current);
                ref.current = null;
            };
            remove(alwaysRef);
            remove(dynamicRef);
        };
    }, [
        nonce,
        setAlwaysStyle,
        setDynamicStyle,
        styles.always,
        styles.resting,
        contextId
    ]);
    const dragging = useCallback(()=>setDynamicStyle(styles.dragging), [
        setDynamicStyle,
        styles.dragging
    ]);
    const dropping = useCallback((reason)=>{
        if (reason === 'DROP') {
            setDynamicStyle(styles.dropAnimating);
            return;
        }
        setDynamicStyle(styles.userCancel);
    }, [
        setDynamicStyle,
        styles.dropAnimating,
        styles.userCancel
    ]);
    const resting = useCallback(()=>{
        if (!dynamicRef.current) {
            return;
        }
        setDynamicStyle(styles.resting);
    }, [
        setDynamicStyle,
        styles.resting
    ]);
    const marshal = useMemo(()=>({
            dragging,
            dropping,
            resting
        }), [
        dragging,
        dropping,
        resting
    ]);
    return marshal;
}
function querySelectorAll(parentNode, selector) {
    return Array.from(parentNode.querySelectorAll(selector));
}
var getWindowFromEl = (el)=>{
    if (el && el.ownerDocument && el.ownerDocument.defaultView) {
        return el.ownerDocument.defaultView;
    }
    return window;
};
function isHtmlElement(el) {
    return el instanceof getWindowFromEl(el).HTMLElement;
}
function findDragHandle(contextId, draggableId) {
    const selector = `[${dragHandle.contextId}="${contextId}"]`;
    const possible = querySelectorAll(document, selector);
    if (!possible.length) {
        process.env.NODE_ENV !== "production" ? warning(`Unable to find any drag handles in the context "${contextId}"`) : void 0;
        return null;
    }
    const handle = possible.find((el)=>{
        return el.getAttribute(dragHandle.draggableId) === draggableId;
    });
    if (!handle) {
        process.env.NODE_ENV !== "production" ? warning(`Unable to find drag handle with id "${draggableId}" as no handle with a matching id was found`) : void 0;
        return null;
    }
    if (!isHtmlElement(handle)) {
        process.env.NODE_ENV !== "production" ? warning('drag handle needs to be a HTMLElement') : void 0;
        return null;
    }
    return handle;
}
function useFocusMarshal(contextId) {
    const entriesRef = React.useRef({});
    const recordRef = React.useRef(null);
    const restoreFocusFrameRef = React.useRef(null);
    const isMountedRef = React.useRef(false);
    const register = useCallback(function register(id, focus) {
        const entry = {
            id,
            focus
        };
        entriesRef.current[id] = entry;
        return function unregister() {
            const entries = entriesRef.current;
            const current = entries[id];
            if (current !== entry) {
                delete entries[id];
            }
        };
    }, []);
    const tryGiveFocus = useCallback(function tryGiveFocus(tryGiveFocusTo) {
        const handle = findDragHandle(contextId, tryGiveFocusTo);
        if (handle && handle !== document.activeElement) {
            handle.focus();
        }
    }, [
        contextId
    ]);
    const tryShiftRecord = useCallback(function tryShiftRecord(previous, redirectTo) {
        if (recordRef.current === previous) {
            recordRef.current = redirectTo;
        }
    }, []);
    const tryRestoreFocusRecorded = useCallback(function tryRestoreFocusRecorded() {
        if (restoreFocusFrameRef.current) {
            return;
        }
        if (!isMountedRef.current) {
            return;
        }
        restoreFocusFrameRef.current = requestAnimationFrame(()=>{
            restoreFocusFrameRef.current = null;
            const record = recordRef.current;
            if (record) {
                tryGiveFocus(record);
            }
        });
    }, [
        tryGiveFocus
    ]);
    const tryRecordFocus = useCallback(function tryRecordFocus(id) {
        recordRef.current = null;
        const focused = document.activeElement;
        if (!focused) {
            return;
        }
        if (focused.getAttribute(dragHandle.draggableId) !== id) {
            return;
        }
        recordRef.current = id;
    }, []);
    useLayoutEffect(()=>{
        isMountedRef.current = true;
        return function clearFrameOnUnmount() {
            isMountedRef.current = false;
            const frameId = restoreFocusFrameRef.current;
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
        };
    }, []);
    const marshal = useMemo(()=>({
            register,
            tryRecordFocus,
            tryRestoreFocusRecorded,
            tryShiftRecord
        }), [
        register,
        tryRecordFocus,
        tryRestoreFocusRecorded,
        tryShiftRecord
    ]);
    return marshal;
}
function createRegistry() {
    const entries = {
        draggables: {},
        droppables: {}
    };
    const subscribers = [];
    function subscribe(cb) {
        subscribers.push(cb);
        return function unsubscribe() {
            const index = subscribers.indexOf(cb);
            if (index === -1) {
                return;
            }
            subscribers.splice(index, 1);
        };
    }
    function notify(event) {
        if (subscribers.length) {
            subscribers.forEach((cb)=>cb(event));
        }
    }
    function findDraggableById(id) {
        return entries.draggables[id] || null;
    }
    function getDraggableById(id) {
        const entry = findDraggableById(id);
        !entry ? process.env.NODE_ENV !== "production" ? invariant(false, `Cannot find draggable entry with id [${id}]`) : invariant(false) : void 0;
        return entry;
    }
    const draggableAPI = {
        register: (entry)=>{
            entries.draggables[entry.descriptor.id] = entry;
            notify({
                type: 'ADDITION',
                value: entry
            });
        },
        update: (entry, last)=>{
            const current = entries.draggables[last.descriptor.id];
            if (!current) {
                return;
            }
            if (current.uniqueId !== entry.uniqueId) {
                return;
            }
            delete entries.draggables[last.descriptor.id];
            entries.draggables[entry.descriptor.id] = entry;
        },
        unregister: (entry)=>{
            const draggableId = entry.descriptor.id;
            const current = findDraggableById(draggableId);
            if (!current) {
                return;
            }
            if (entry.uniqueId !== current.uniqueId) {
                return;
            }
            delete entries.draggables[draggableId];
            if (entries.droppables[entry.descriptor.droppableId]) {
                notify({
                    type: 'REMOVAL',
                    value: entry
                });
            }
        },
        getById: getDraggableById,
        findById: findDraggableById,
        exists: (id)=>Boolean(findDraggableById(id)),
        getAllByType: (type)=>Object.values(entries.draggables).filter((entry)=>entry.descriptor.type === type)
    };
    function findDroppableById(id) {
        return entries.droppables[id] || null;
    }
    function getDroppableById(id) {
        const entry = findDroppableById(id);
        !entry ? process.env.NODE_ENV !== "production" ? invariant(false, `Cannot find droppable entry with id [${id}]`) : invariant(false) : void 0;
        return entry;
    }
    const droppableAPI = {
        register: (entry)=>{
            entries.droppables[entry.descriptor.id] = entry;
        },
        unregister: (entry)=>{
            const current = findDroppableById(entry.descriptor.id);
            if (!current) {
                return;
            }
            if (entry.uniqueId !== current.uniqueId) {
                return;
            }
            delete entries.droppables[entry.descriptor.id];
        },
        getById: getDroppableById,
        findById: findDroppableById,
        exists: (id)=>Boolean(findDroppableById(id)),
        getAllByType: (type)=>Object.values(entries.droppables).filter((entry)=>entry.descriptor.type === type)
    };
    function clean() {
        entries.draggables = {};
        entries.droppables = {};
        subscribers.length = 0;
    }
    return {
        draggable: draggableAPI,
        droppable: droppableAPI,
        subscribe,
        clean
    };
}
function useRegistry() {
    const registry = useMemo(createRegistry, []);
    React.useEffect(()=>{
        return function unmount() {
            if (React.version.startsWith('16') || React.version.startsWith('17')) {
                requestAnimationFrame(registry.clean);
            } else {
                registry.clean();
            }
        };
    }, [
        registry
    ]);
    return registry;
}
var StoreContext = React.createContext(null);
var getBodyElement = ()=>{
    const body = document.body;
    !body ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot find document.body') : invariant(false) : void 0;
    return body;
};
const visuallyHidden = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    margin: '-1px',
    border: '0',
    padding: '0',
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    'clip-path': 'inset(100%)'
};
var visuallyHidden$1 = visuallyHidden;
const getId = (contextId)=>`rfd-announcement-${contextId}`;
function useAnnouncer(contextId) {
    const id = useMemo(()=>getId(contextId), [
        contextId
    ]);
    const ref = React.useRef(null);
    React.useEffect(function setup() {
        const el = document.createElement('div');
        ref.current = el;
        el.id = id;
        el.setAttribute('aria-live', 'assertive');
        el.setAttribute('aria-atomic', 'true');
        _extends(el.style, visuallyHidden$1);
        getBodyElement().appendChild(el);
        return function cleanup() {
            setTimeout(function remove() {
                const body = getBodyElement();
                if (body.contains(el)) {
                    body.removeChild(el);
                }
                if (el === ref.current) {
                    ref.current = null;
                }
            });
        };
    }, [
        id
    ]);
    const announce = useCallback((message)=>{
        const el = ref.current;
        if (el) {
            el.textContent = message;
            return;
        }
        process.env.NODE_ENV !== "production" ? warning(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${message}"
    `) : void 0;
    }, []);
    return announce;
}
let count$1 = 0;
const defaults = {
    separator: '::'
};
function useDeprecatedUniqueId(prefix, options = defaults) {
    return useMemo(()=>`${prefix}${options.separator}${count$1++}`, [
        options.separator,
        prefix
    ]);
}
function useUniqueId(prefix, options = defaults) {
    const id = React.useId();
    return useMemo(()=>`${prefix}${options.separator}${id}`, [
        options.separator,
        prefix,
        id
    ]);
}
var useUniqueId$1 = 'useId' in React ? useUniqueId : useDeprecatedUniqueId;
function getElementId({ contextId, uniqueId }) {
    return `rfd-hidden-text-${contextId}-${uniqueId}`;
}
function useHiddenTextElement({ contextId, text }) {
    const uniqueId = useUniqueId$1('hidden-text', {
        separator: '-'
    });
    const id = useMemo(()=>getElementId({
            contextId,
            uniqueId
        }), [
        uniqueId,
        contextId
    ]);
    React.useEffect(function mount() {
        const el = document.createElement('div');
        el.id = id;
        el.textContent = text;
        el.style.display = 'none';
        getBodyElement().appendChild(el);
        return function unmount() {
            const body = getBodyElement();
            if (body.contains(el)) {
                body.removeChild(el);
            }
        };
    }, [
        id,
        text
    ]);
    return id;
}
var AppContext = React.createContext(null);
var peerDependencies = {
    react: "^16.8.5 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const semver = /(\d+)\.(\d+)\.(\d+)/;
const getVersion = (value)=>{
    const result = semver.exec(value);
    !(result != null) ? process.env.NODE_ENV !== "production" ? invariant(false, `Unable to parse React version ${value}`) : invariant(false) : void 0;
    const major = Number(result[1]);
    const minor = Number(result[2]);
    const patch = Number(result[3]);
    return {
        major,
        minor,
        patch,
        raw: value
    };
};
const isSatisfied = (expected, actual)=>{
    if (actual.major > expected.major) {
        return true;
    }
    if (actual.major < expected.major) {
        return false;
    }
    if (actual.minor > expected.minor) {
        return true;
    }
    if (actual.minor < expected.minor) {
        return false;
    }
    return actual.patch >= expected.patch;
};
var checkReactVersion = (peerDepValue, actualValue)=>{
    const peerDep = getVersion(peerDepValue);
    const actual = getVersion(actualValue);
    if (isSatisfied(peerDep, actual)) {
        return;
    }
    process.env.NODE_ENV !== "production" ? warning(`
    React version: [${actual.raw}]
    does not satisfy expected peer dependency version: [${peerDep.raw}]

    This can result in run time bugs, and even fatal crashes
  `) : void 0;
};
const suffix = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var checkDoctype = (doc)=>{
    const doctype = doc.doctype;
    if (!doctype) {
        process.env.NODE_ENV !== "production" ? warning(`
      No <!doctype html> found.

      ${suffix}
    `) : void 0;
        return;
    }
    if (doctype.name.toLowerCase() !== 'html') {
        process.env.NODE_ENV !== "production" ? warning(`
      Unexpected <!doctype> found: (${doctype.name})

      ${suffix}
    `) : void 0;
    }
    if (doctype.publicId !== '') {
        process.env.NODE_ENV !== "production" ? warning(`
      Unexpected <!doctype> publicId found: (${doctype.publicId})
      A html5 doctype does not have a publicId

      ${suffix}
    `) : void 0;
    }
};
function useDev(useHook) {
    if (process.env.NODE_ENV !== 'production') {
        useHook();
    }
}
function useDevSetupWarning(fn, inputs) {
    useDev(()=>{
        React.useEffect(()=>{
            try {
                fn();
            } catch (e) {
                error(`
          A setup problem was encountered.

          > ${e.message}
        `);
            }
        }, inputs);
    });
}
function useStartupValidation() {
    useDevSetupWarning(()=>{
        checkReactVersion(peerDependencies.react, React.version);
        checkDoctype(document);
    }, []);
}
function usePrevious(current) {
    const ref = React.useRef(current);
    React.useEffect(()=>{
        ref.current = current;
    });
    return ref;
}
function create$1() {
    let lock = null;
    function isClaimed() {
        return Boolean(lock);
    }
    function isActive(value) {
        return value === lock;
    }
    function claim(abandon) {
        !!lock ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot claim lock as it is already claimed') : invariant(false) : void 0;
        const newLock = {
            abandon
        };
        lock = newLock;
        return newLock;
    }
    function release() {
        !lock ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot release lock when there is no lock') : invariant(false) : void 0;
        lock = null;
    }
    function tryAbandon() {
        if (lock) {
            lock.abandon();
            release();
        }
    }
    return {
        isClaimed,
        isActive,
        claim,
        release,
        tryAbandon
    };
}
function isDragging(state) {
    if (state.phase === 'IDLE' || state.phase === 'DROP_ANIMATING') {
        return false;
    }
    return state.isDragging;
}
const tab = 9;
const enter = 13;
const escape = 27;
const space = 32;
const pageUp = 33;
const pageDown = 34;
const end = 35;
const home = 36;
const arrowLeft = 37;
const arrowUp = 38;
const arrowRight = 39;
const arrowDown = 40;
const preventedKeys = {
    [enter]: true,
    [tab]: true
};
var preventStandardKeyEvents = (event)=>{
    if (preventedKeys[event.keyCode]) {
        event.preventDefault();
    }
};
const supportedEventName = (()=>{
    const base = 'visibilitychange';
    if (typeof document === 'undefined') {
        return base;
    }
    const candidates = [
        base,
        `ms${base}`,
        `webkit${base}`,
        `moz${base}`,
        `o${base}`
    ];
    const supported = candidates.find((eventName)=>`on${eventName}` in document);
    return supported || base;
})();
var supportedPageVisibilityEventName = supportedEventName;
const primaryButton = 0;
const sloppyClickThreshold = 5;
function isSloppyClickThresholdExceeded(original, current) {
    return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}
const idle$1 = {
    type: 'IDLE'
};
function getCaptureBindings({ cancel, completed, getPhase, setPhase }) {
    return [
        {
            eventName: 'mousemove',
            fn: (event)=>{
                const { button, clientX, clientY } = event;
                if (button !== primaryButton) {
                    return;
                }
                const point = {
                    x: clientX,
                    y: clientY
                };
                const phase = getPhase();
                if (phase.type === 'DRAGGING') {
                    event.preventDefault();
                    phase.actions.move(point);
                    return;
                }
                !(phase.type === 'PENDING') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot be IDLE') : invariant(false) : void 0;
                const pending = phase.point;
                if (!isSloppyClickThresholdExceeded(pending, point)) {
                    return;
                }
                event.preventDefault();
                const actions = phase.actions.fluidLift(point);
                setPhase({
                    type: 'DRAGGING',
                    actions
                });
            }
        },
        {
            eventName: 'mouseup',
            fn: (event)=>{
                const phase = getPhase();
                if (phase.type !== 'DRAGGING') {
                    cancel();
                    return;
                }
                event.preventDefault();
                phase.actions.drop({
                    shouldBlockNextClick: true
                });
                completed();
            }
        },
        {
            eventName: 'mousedown',
            fn: (event)=>{
                if (getPhase().type === 'DRAGGING') {
                    event.preventDefault();
                }
                cancel();
            }
        },
        {
            eventName: 'keydown',
            fn: (event)=>{
                const phase = getPhase();
                if (phase.type === 'PENDING') {
                    cancel();
                    return;
                }
                if (event.keyCode === escape) {
                    event.preventDefault();
                    cancel();
                    return;
                }
                preventStandardKeyEvents(event);
            }
        },
        {
            eventName: 'resize',
            fn: cancel
        },
        {
            eventName: 'scroll',
            options: {
                passive: true,
                capture: false
            },
            fn: ()=>{
                if (getPhase().type === 'PENDING') {
                    cancel();
                }
            }
        },
        {
            eventName: 'webkitmouseforcedown',
            fn: (event)=>{
                const phase = getPhase();
                !(phase.type !== 'IDLE') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Unexpected phase') : invariant(false) : void 0;
                if (phase.actions.shouldRespectForcePress()) {
                    cancel();
                    return;
                }
                event.preventDefault();
            }
        },
        {
            eventName: supportedPageVisibilityEventName,
            fn: cancel
        }
    ];
}
function useMouseSensor(api) {
    const phaseRef = React.useRef(idle$1);
    const unbindEventsRef = React.useRef(noop$2);
    const startCaptureBinding = useMemo(()=>({
            eventName: 'mousedown',
            fn: function onMouseDown(event) {
                if (event.defaultPrevented) {
                    return;
                }
                if (event.button !== primaryButton) {
                    return;
                }
                if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
                    return;
                }
                const draggableId = api.findClosestDraggableId(event);
                if (!draggableId) {
                    return;
                }
                const actions = api.tryGetLock(draggableId, stop, {
                    sourceEvent: event
                });
                if (!actions) {
                    return;
                }
                event.preventDefault();
                const point = {
                    x: event.clientX,
                    y: event.clientY
                };
                unbindEventsRef.current();
                startPendingDrag(actions, point);
            }
        }), [
        api
    ]);
    const preventForcePressBinding = useMemo(()=>({
            eventName: 'webkitmouseforcewillbegin',
            fn: (event)=>{
                if (event.defaultPrevented) {
                    return;
                }
                const id = api.findClosestDraggableId(event);
                if (!id) {
                    return;
                }
                const options = api.findOptionsForDraggable(id);
                if (!options) {
                    return;
                }
                if (options.shouldRespectForcePress) {
                    return;
                }
                if (!api.canGetLock(id)) {
                    return;
                }
                event.preventDefault();
            }
        }), [
        api
    ]);
    const listenForCapture = useCallback(function listenForCapture() {
        const options = {
            passive: false,
            capture: true
        };
        unbindEventsRef.current = bindEvents(window, [
            preventForcePressBinding,
            startCaptureBinding
        ], options);
    }, [
        preventForcePressBinding,
        startCaptureBinding
    ]);
    const stop = useCallback(()=>{
        const current = phaseRef.current;
        if (current.type === 'IDLE') {
            return;
        }
        phaseRef.current = idle$1;
        unbindEventsRef.current();
        listenForCapture();
    }, [
        listenForCapture
    ]);
    const cancel = useCallback(()=>{
        const phase = phaseRef.current;
        stop();
        if (phase.type === 'DRAGGING') {
            phase.actions.cancel({
                shouldBlockNextClick: true
            });
        }
        if (phase.type === 'PENDING') {
            phase.actions.abort();
        }
    }, [
        stop
    ]);
    const bindCapturingEvents = useCallback(function bindCapturingEvents() {
        const options = {
            capture: true,
            passive: false
        };
        const bindings = getCaptureBindings({
            cancel,
            completed: stop,
            getPhase: ()=>phaseRef.current,
            setPhase: (phase)=>{
                phaseRef.current = phase;
            }
        });
        unbindEventsRef.current = bindEvents(window, bindings, options);
    }, [
        cancel,
        stop
    ]);
    const startPendingDrag = useCallback(function startPendingDrag(actions, point) {
        !(phaseRef.current.type === 'IDLE') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Expected to move from IDLE to PENDING drag') : invariant(false) : void 0;
        phaseRef.current = {
            type: 'PENDING',
            point,
            actions
        };
        bindCapturingEvents();
    }, [
        bindCapturingEvents
    ]);
    useLayoutEffect(function mount() {
        listenForCapture();
        return function unmount() {
            unbindEventsRef.current();
        };
    }, [
        listenForCapture
    ]);
}
function noop$1() {}
const scrollJumpKeys = {
    [pageDown]: true,
    [pageUp]: true,
    [home]: true,
    [end]: true
};
function getDraggingBindings(actions, stop) {
    function cancel() {
        stop();
        actions.cancel();
    }
    function drop() {
        stop();
        actions.drop();
    }
    return [
        {
            eventName: 'keydown',
            fn: (event)=>{
                if (event.keyCode === escape) {
                    event.preventDefault();
                    cancel();
                    return;
                }
                if (event.keyCode === space) {
                    event.preventDefault();
                    drop();
                    return;
                }
                if (event.keyCode === arrowDown) {
                    event.preventDefault();
                    actions.moveDown();
                    return;
                }
                if (event.keyCode === arrowUp) {
                    event.preventDefault();
                    actions.moveUp();
                    return;
                }
                if (event.keyCode === arrowRight) {
                    event.preventDefault();
                    actions.moveRight();
                    return;
                }
                if (event.keyCode === arrowLeft) {
                    event.preventDefault();
                    actions.moveLeft();
                    return;
                }
                if (scrollJumpKeys[event.keyCode]) {
                    event.preventDefault();
                    return;
                }
                preventStandardKeyEvents(event);
            }
        },
        {
            eventName: 'mousedown',
            fn: cancel
        },
        {
            eventName: 'mouseup',
            fn: cancel
        },
        {
            eventName: 'click',
            fn: cancel
        },
        {
            eventName: 'touchstart',
            fn: cancel
        },
        {
            eventName: 'resize',
            fn: cancel
        },
        {
            eventName: 'wheel',
            fn: cancel,
            options: {
                passive: true
            }
        },
        {
            eventName: supportedPageVisibilityEventName,
            fn: cancel
        }
    ];
}
function useKeyboardSensor(api) {
    const unbindEventsRef = React.useRef(noop$1);
    const startCaptureBinding = useMemo(()=>({
            eventName: 'keydown',
            fn: function onKeyDown(event) {
                if (event.defaultPrevented) {
                    return;
                }
                if (event.keyCode !== space) {
                    return;
                }
                const draggableId = api.findClosestDraggableId(event);
                if (!draggableId) {
                    return;
                }
                const preDrag = api.tryGetLock(draggableId, stop, {
                    sourceEvent: event
                });
                if (!preDrag) {
                    return;
                }
                event.preventDefault();
                let isCapturing = true;
                const actions = preDrag.snapLift();
                unbindEventsRef.current();
                function stop() {
                    !isCapturing ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot stop capturing a keyboard drag when not capturing') : invariant(false) : void 0;
                    isCapturing = false;
                    unbindEventsRef.current();
                    listenForCapture();
                }
                unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
                    capture: true,
                    passive: false
                });
            }
        }), [
        api
    ]);
    const listenForCapture = useCallback(function tryStartCapture() {
        const options = {
            passive: false,
            capture: true
        };
        unbindEventsRef.current = bindEvents(window, [
            startCaptureBinding
        ], options);
    }, [
        startCaptureBinding
    ]);
    useLayoutEffect(function mount() {
        listenForCapture();
        return function unmount() {
            unbindEventsRef.current();
        };
    }, [
        listenForCapture
    ]);
}
const idle = {
    type: 'IDLE'
};
const timeForLongPress = 120;
const forcePressThreshold = 0.15;
function getWindowBindings({ cancel, getPhase }) {
    return [
        {
            eventName: 'orientationchange',
            fn: cancel
        },
        {
            eventName: 'resize',
            fn: cancel
        },
        {
            eventName: 'contextmenu',
            fn: (event)=>{
                event.preventDefault();
            }
        },
        {
            eventName: 'keydown',
            fn: (event)=>{
                if (getPhase().type !== 'DRAGGING') {
                    cancel();
                    return;
                }
                if (event.keyCode === escape) {
                    event.preventDefault();
                }
                cancel();
            }
        },
        {
            eventName: supportedPageVisibilityEventName,
            fn: cancel
        }
    ];
}
function getHandleBindings({ cancel, completed, getPhase }) {
    return [
        {
            eventName: 'touchmove',
            options: {
                capture: false
            },
            fn: (event)=>{
                const phase = getPhase();
                if (phase.type !== 'DRAGGING') {
                    cancel();
                    return;
                }
                phase.hasMoved = true;
                const { clientX, clientY } = event.touches[0];
                const point = {
                    x: clientX,
                    y: clientY
                };
                event.preventDefault();
                phase.actions.move(point);
            }
        },
        {
            eventName: 'touchend',
            fn: (event)=>{
                const phase = getPhase();
                if (phase.type !== 'DRAGGING') {
                    cancel();
                    return;
                }
                event.preventDefault();
                phase.actions.drop({
                    shouldBlockNextClick: true
                });
                completed();
            }
        },
        {
            eventName: 'touchcancel',
            fn: (event)=>{
                if (getPhase().type !== 'DRAGGING') {
                    cancel();
                    return;
                }
                event.preventDefault();
                cancel();
            }
        },
        {
            eventName: 'touchforcechange',
            fn: (event)=>{
                const phase = getPhase();
                !(phase.type !== 'IDLE') ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
                const touch = event.touches[0];
                if (!touch) {
                    return;
                }
                const isForcePress = touch.force >= forcePressThreshold;
                if (!isForcePress) {
                    return;
                }
                const shouldRespect = phase.actions.shouldRespectForcePress();
                if (phase.type === 'PENDING') {
                    if (shouldRespect) {
                        cancel();
                    }
                    return;
                }
                if (shouldRespect) {
                    if (phase.hasMoved) {
                        event.preventDefault();
                        return;
                    }
                    cancel();
                    return;
                }
                event.preventDefault();
            }
        },
        {
            eventName: supportedPageVisibilityEventName,
            fn: cancel
        }
    ];
}
function useTouchSensor(api) {
    const phaseRef = React.useRef(idle);
    const unbindEventsRef = React.useRef(noop$2);
    const getPhase = useCallback(function getPhase() {
        return phaseRef.current;
    }, []);
    const setPhase = useCallback(function setPhase(phase) {
        phaseRef.current = phase;
    }, []);
    const startCaptureBinding = useMemo(()=>({
            eventName: 'touchstart',
            fn: function onTouchStart(event) {
                if (event.defaultPrevented) {
                    return;
                }
                const draggableId = api.findClosestDraggableId(event);
                if (!draggableId) {
                    return;
                }
                const actions = api.tryGetLock(draggableId, stop, {
                    sourceEvent: event
                });
                if (!actions) {
                    return;
                }
                const touch = event.touches[0];
                const { clientX, clientY } = touch;
                const point = {
                    x: clientX,
                    y: clientY
                };
                unbindEventsRef.current();
                startPendingDrag(actions, point);
            }
        }), [
        api
    ]);
    const listenForCapture = useCallback(function listenForCapture() {
        const options = {
            capture: true,
            passive: false
        };
        unbindEventsRef.current = bindEvents(window, [
            startCaptureBinding
        ], options);
    }, [
        startCaptureBinding
    ]);
    const stop = useCallback(()=>{
        const current = phaseRef.current;
        if (current.type === 'IDLE') {
            return;
        }
        if (current.type === 'PENDING') {
            clearTimeout(current.longPressTimerId);
        }
        setPhase(idle);
        unbindEventsRef.current();
        listenForCapture();
    }, [
        listenForCapture,
        setPhase
    ]);
    const cancel = useCallback(()=>{
        const phase = phaseRef.current;
        stop();
        if (phase.type === 'DRAGGING') {
            phase.actions.cancel({
                shouldBlockNextClick: true
            });
        }
        if (phase.type === 'PENDING') {
            phase.actions.abort();
        }
    }, [
        stop
    ]);
    const bindCapturingEvents = useCallback(function bindCapturingEvents() {
        const options = {
            capture: true,
            passive: false
        };
        const args = {
            cancel,
            completed: stop,
            getPhase
        };
        const unbindTarget = bindEvents(window, getHandleBindings(args), options);
        const unbindWindow = bindEvents(window, getWindowBindings(args), options);
        unbindEventsRef.current = function unbindAll() {
            unbindTarget();
            unbindWindow();
        };
    }, [
        cancel,
        getPhase,
        stop
    ]);
    const startDragging = useCallback(function startDragging() {
        const phase = getPhase();
        !(phase.type === 'PENDING') ? process.env.NODE_ENV !== "production" ? invariant(false, `Cannot start dragging from phase ${phase.type}`) : invariant(false) : void 0;
        const actions = phase.actions.fluidLift(phase.point);
        setPhase({
            type: 'DRAGGING',
            actions,
            hasMoved: false
        });
    }, [
        getPhase,
        setPhase
    ]);
    const startPendingDrag = useCallback(function startPendingDrag(actions, point) {
        !(getPhase().type === 'IDLE') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Expected to move from IDLE to PENDING drag') : invariant(false) : void 0;
        const longPressTimerId = setTimeout(startDragging, timeForLongPress);
        setPhase({
            type: 'PENDING',
            point,
            actions,
            longPressTimerId
        });
        bindCapturingEvents();
    }, [
        bindCapturingEvents,
        getPhase,
        setPhase,
        startDragging
    ]);
    useLayoutEffect(function mount() {
        listenForCapture();
        return function unmount() {
            unbindEventsRef.current();
            const phase = getPhase();
            if (phase.type === 'PENDING') {
                clearTimeout(phase.longPressTimerId);
                setPhase(idle);
            }
        };
    }, [
        getPhase,
        listenForCapture,
        setPhase
    ]);
    useLayoutEffect(function webkitHack() {
        const unbind = bindEvents(window, [
            {
                eventName: 'touchmove',
                fn: ()=>{},
                options: {
                    capture: false,
                    passive: false
                }
            }
        ]);
        return unbind;
    }, []);
}
function useValidateSensorHooks(sensorHooks) {
    useDev(()=>{
        const previousRef = usePrevious(sensorHooks);
        useDevSetupWarning(()=>{
            !(previousRef.current.length === sensorHooks.length) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot change the amount of sensor hooks after mounting') : invariant(false) : void 0;
        });
    });
}
const interactiveTagNames = [
    'input',
    'button',
    'textarea',
    'select',
    'option',
    'optgroup',
    'video',
    'audio'
];
function isAnInteractiveElement(parent, current) {
    if (current == null) {
        return false;
    }
    const hasAnInteractiveTag = interactiveTagNames.includes(current.tagName.toLowerCase());
    if (hasAnInteractiveTag) {
        return true;
    }
    const attribute = current.getAttribute('contenteditable');
    if (attribute === 'true' || attribute === '') {
        return true;
    }
    if (current === parent) {
        return false;
    }
    return isAnInteractiveElement(parent, current.parentElement);
}
function isEventInInteractiveElement(draggable, event) {
    const target = event.target;
    if (!isHtmlElement(target)) {
        return false;
    }
    return isAnInteractiveElement(draggable, target);
}
var getBorderBoxCenterPosition = (el)=>getRect(el.getBoundingClientRect()).center;
function isElement(el) {
    return el instanceof getWindowFromEl(el).Element;
}
const supportedMatchesName = (()=>{
    const base = 'matches';
    if (typeof document === 'undefined') {
        return base;
    }
    const candidates = [
        base,
        'msMatchesSelector',
        'webkitMatchesSelector'
    ];
    const value = candidates.find((name)=>name in Element.prototype);
    return value || base;
})();
function closestPonyfill(el, selector) {
    if (el == null) {
        return null;
    }
    if (el[supportedMatchesName](selector)) {
        return el;
    }
    return closestPonyfill(el.parentElement, selector);
}
function closest(el, selector) {
    if (el.closest) {
        return el.closest(selector);
    }
    return closestPonyfill(el, selector);
}
function getSelector(contextId) {
    return `[${dragHandle.contextId}="${contextId}"]`;
}
function findClosestDragHandleFromEvent(contextId, event) {
    const target = event.target;
    if (!isElement(target)) {
        process.env.NODE_ENV !== "production" ? warning('event.target must be a Element') : void 0;
        return null;
    }
    const selector = getSelector(contextId);
    const handle = closest(target, selector);
    if (!handle) {
        return null;
    }
    if (!isHtmlElement(handle)) {
        process.env.NODE_ENV !== "production" ? warning('drag handle must be a HTMLElement') : void 0;
        return null;
    }
    return handle;
}
function tryGetClosestDraggableIdFromEvent(contextId, event) {
    const handle = findClosestDragHandleFromEvent(contextId, event);
    if (!handle) {
        return null;
    }
    return handle.getAttribute(dragHandle.draggableId);
}
function findDraggable(contextId, draggableId) {
    const selector = `[${draggable.contextId}="${contextId}"]`;
    const possible = querySelectorAll(document, selector);
    const draggable$1 = possible.find((el)=>{
        return el.getAttribute(draggable.id) === draggableId;
    });
    if (!draggable$1) {
        return null;
    }
    if (!isHtmlElement(draggable$1)) {
        process.env.NODE_ENV !== "production" ? warning('Draggable element is not a HTMLElement') : void 0;
        return null;
    }
    return draggable$1;
}
function preventDefault(event) {
    event.preventDefault();
}
function isActive({ expected, phase, isLockActive, shouldWarn }) {
    if (!isLockActive()) {
        if (shouldWarn) {
            process.env.NODE_ENV !== "production" ? warning(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `) : void 0;
        }
        return false;
    }
    if (expected !== phase) {
        if (shouldWarn) {
            process.env.NODE_ENV !== "production" ? warning(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${expected}
        You called an action from outdated phase: ${phase}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `) : void 0;
        }
        return false;
    }
    return true;
}
function canStart({ lockAPI, store, registry, draggableId }) {
    if (lockAPI.isClaimed()) {
        return false;
    }
    const entry = registry.draggable.findById(draggableId);
    if (!entry) {
        process.env.NODE_ENV !== "production" ? warning(`Unable to find draggable with id: ${draggableId}`) : void 0;
        return false;
    }
    if (!entry.options.isEnabled) {
        return false;
    }
    if (!canStartDrag(store.getState(), draggableId)) {
        return false;
    }
    return true;
}
function tryStart({ lockAPI, contextId, store, registry, draggableId, forceSensorStop, sourceEvent }) {
    const shouldStart = canStart({
        lockAPI,
        store,
        registry,
        draggableId
    });
    if (!shouldStart) {
        return null;
    }
    const entry = registry.draggable.getById(draggableId);
    const el = findDraggable(contextId, entry.descriptor.id);
    if (!el) {
        process.env.NODE_ENV !== "production" ? warning(`Unable to find draggable element with id: ${draggableId}`) : void 0;
        return null;
    }
    if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
        return null;
    }
    const lock = lockAPI.claim(forceSensorStop || noop$2);
    let phase = 'PRE_DRAG';
    function getShouldRespectForcePress() {
        return entry.options.shouldRespectForcePress;
    }
    function isLockActive() {
        return lockAPI.isActive(lock);
    }
    function tryDispatch(expected, getAction) {
        if (isActive({
            expected,
            phase,
            isLockActive,
            shouldWarn: true
        })) {
            store.dispatch(getAction());
        }
    }
    const tryDispatchWhenDragging = tryDispatch.bind(null, 'DRAGGING');
    function lift(args) {
        function completed() {
            lockAPI.release();
            phase = 'COMPLETED';
        }
        if (phase !== 'PRE_DRAG') {
            completed();
            process.env.NODE_ENV !== "production" ? invariant(false, `Cannot lift in phase ${phase}`) : invariant(false);
        }
        store.dispatch(lift$1(args.liftActionArgs));
        phase = 'DRAGGING';
        function finish(reason, options = {
            shouldBlockNextClick: false
        }) {
            args.cleanup();
            if (options.shouldBlockNextClick) {
                const unbind = bindEvents(window, [
                    {
                        eventName: 'click',
                        fn: preventDefault,
                        options: {
                            once: true,
                            passive: false,
                            capture: true
                        }
                    }
                ]);
                setTimeout(unbind);
            }
            completed();
            store.dispatch(drop$1({
                reason
            }));
        }
        return {
            isActive: ()=>isActive({
                    expected: 'DRAGGING',
                    phase,
                    isLockActive,
                    shouldWarn: false
                }),
            shouldRespectForcePress: getShouldRespectForcePress,
            drop: (options)=>finish('DROP', options),
            cancel: (options)=>finish('CANCEL', options),
            ...args.actions
        };
    }
    function fluidLift(clientSelection) {
        const move$1 = rafSchd((client)=>{
            tryDispatchWhenDragging(()=>move({
                    client
                }));
        });
        const api = lift({
            liftActionArgs: {
                id: draggableId,
                clientSelection,
                movementMode: 'FLUID'
            },
            cleanup: ()=>move$1.cancel(),
            actions: {
                move: move$1
            }
        });
        return {
            ...api,
            move: move$1
        };
    }
    function snapLift() {
        const actions = {
            moveUp: ()=>tryDispatchWhenDragging(moveUp),
            moveRight: ()=>tryDispatchWhenDragging(moveRight),
            moveDown: ()=>tryDispatchWhenDragging(moveDown),
            moveLeft: ()=>tryDispatchWhenDragging(moveLeft)
        };
        return lift({
            liftActionArgs: {
                id: draggableId,
                clientSelection: getBorderBoxCenterPosition(el),
                movementMode: 'SNAP'
            },
            cleanup: noop$2,
            actions
        });
    }
    function abortPreDrag() {
        const shouldRelease = isActive({
            expected: 'PRE_DRAG',
            phase,
            isLockActive,
            shouldWarn: true
        });
        if (shouldRelease) {
            lockAPI.release();
        }
    }
    const preDrag = {
        isActive: ()=>isActive({
                expected: 'PRE_DRAG',
                phase,
                isLockActive,
                shouldWarn: false
            }),
        shouldRespectForcePress: getShouldRespectForcePress,
        fluidLift,
        snapLift,
        abort: abortPreDrag
    };
    return preDrag;
}
const defaultSensors = [
    useMouseSensor,
    useKeyboardSensor,
    useTouchSensor
];
function useSensorMarshal({ contextId, store, registry, customSensors, enableDefaultSensors }) {
    const useSensors = [
        ...enableDefaultSensors ? defaultSensors : [],
        ...customSensors || []
    ];
    const lockAPI = React.useState(()=>create$1())[0];
    const tryAbandonLock = useCallback(function tryAbandonLock(previous, current) {
        if (isDragging(previous) && !isDragging(current)) {
            lockAPI.tryAbandon();
        }
    }, [
        lockAPI
    ]);
    useLayoutEffect(function listenToStore() {
        let previous = store.getState();
        const unsubscribe = store.subscribe(()=>{
            const current = store.getState();
            tryAbandonLock(previous, current);
            previous = current;
        });
        return unsubscribe;
    }, [
        lockAPI,
        store,
        tryAbandonLock
    ]);
    useLayoutEffect(()=>{
        return lockAPI.tryAbandon;
    }, [
        lockAPI.tryAbandon
    ]);
    const canGetLock = useCallback((draggableId)=>{
        return canStart({
            lockAPI,
            registry,
            store,
            draggableId
        });
    }, [
        lockAPI,
        registry,
        store
    ]);
    const tryGetLock = useCallback((draggableId, forceStop, options)=>tryStart({
            lockAPI,
            registry,
            contextId,
            store,
            draggableId,
            forceSensorStop: forceStop || null,
            sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
        }), [
        contextId,
        lockAPI,
        registry,
        store
    ]);
    const findClosestDraggableId = useCallback((event)=>tryGetClosestDraggableIdFromEvent(contextId, event), [
        contextId
    ]);
    const findOptionsForDraggable = useCallback((id)=>{
        const entry = registry.draggable.findById(id);
        return entry ? entry.options : null;
    }, [
        registry.draggable
    ]);
    const tryReleaseLock = useCallback(function tryReleaseLock() {
        if (!lockAPI.isClaimed()) {
            return;
        }
        lockAPI.tryAbandon();
        if (store.getState().phase !== 'IDLE') {
            store.dispatch(flush());
        }
    }, [
        lockAPI,
        store
    ]);
    const isLockClaimed = useCallback(()=>lockAPI.isClaimed(), [
        lockAPI
    ]);
    const api = useMemo(()=>({
            canGetLock,
            tryGetLock,
            findClosestDraggableId,
            findOptionsForDraggable,
            tryReleaseLock,
            isLockClaimed
        }), [
        canGetLock,
        tryGetLock,
        findClosestDraggableId,
        findOptionsForDraggable,
        tryReleaseLock,
        isLockClaimed
    ]);
    useValidateSensorHooks(useSensors);
    for(let i = 0; i < useSensors.length; i++){
        useSensors[i](api);
    }
}
const createResponders = (props)=>({
        onBeforeCapture: (t)=>{
            const onBeforeCapureCallback = ()=>{
                if (props.onBeforeCapture) {
                    props.onBeforeCapture(t);
                }
            };
            if (React.version.startsWith('16') || React.version.startsWith('17')) {
                onBeforeCapureCallback();
            } else {
                ReactDOM.flushSync(onBeforeCapureCallback);
            }
        },
        onBeforeDragStart: props.onBeforeDragStart,
        onDragStart: props.onDragStart,
        onDragEnd: props.onDragEnd,
        onDragUpdate: props.onDragUpdate
    });
const createAutoScrollerOptions = (props)=>({
        ...defaultAutoScrollerOptions,
        ...props.autoScrollerOptions,
        durationDampening: {
            ...defaultAutoScrollerOptions.durationDampening,
            ...props.autoScrollerOptions
        }
    });
function getStore(lazyRef) {
    !lazyRef.current ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find store from lazy ref') : invariant(false) : void 0;
    return lazyRef.current;
}
function App(props) {
    const { contextId, setCallbacks, sensors, nonce, dragHandleUsageInstructions } = props;
    const lazyStoreRef = React.useRef(null);
    useStartupValidation();
    const lastPropsRef = usePrevious(props);
    const getResponders = useCallback(()=>{
        return createResponders(lastPropsRef.current);
    }, [
        lastPropsRef
    ]);
    const getAutoScrollerOptions = useCallback(()=>{
        return createAutoScrollerOptions(lastPropsRef.current);
    }, [
        lastPropsRef
    ]);
    const announce = useAnnouncer(contextId);
    const dragHandleUsageInstructionsId = useHiddenTextElement({
        contextId,
        text: dragHandleUsageInstructions
    });
    const styleMarshal = useStyleMarshal(contextId, nonce);
    const lazyDispatch = useCallback((action)=>{
        getStore(lazyStoreRef).dispatch(action);
    }, []);
    const marshalCallbacks = useMemo(()=>bindActionCreators$1({
            publishWhileDragging,
            updateDroppableScroll,
            updateDroppableIsEnabled,
            updateDroppableIsCombineEnabled,
            collectionStarting
        }, lazyDispatch), [
        lazyDispatch
    ]);
    const registry = useRegistry();
    const dimensionMarshal = useMemo(()=>{
        return createDimensionMarshal(registry, marshalCallbacks);
    }, [
        registry,
        marshalCallbacks
    ]);
    const autoScroller = useMemo(()=>createAutoScroller({
            scrollWindow,
            scrollDroppable: dimensionMarshal.scrollDroppable,
            getAutoScrollerOptions,
            ...bindActionCreators$1({
                move
            }, lazyDispatch)
        }), [
        dimensionMarshal.scrollDroppable,
        lazyDispatch,
        getAutoScrollerOptions
    ]);
    const focusMarshal = useFocusMarshal(contextId);
    const store = useMemo(()=>createStore$1({
            announce,
            autoScroller,
            dimensionMarshal,
            focusMarshal,
            getResponders,
            styleMarshal
        }), [
        announce,
        autoScroller,
        dimensionMarshal,
        focusMarshal,
        getResponders,
        styleMarshal
    ]);
    if (process.env.NODE_ENV !== 'production') {
        if (lazyStoreRef.current && lazyStoreRef.current !== store) {
            process.env.NODE_ENV !== "production" ? warning('unexpected store change') : void 0;
        }
    }
    lazyStoreRef.current = store;
    const tryResetStore = useCallback(()=>{
        const current = getStore(lazyStoreRef);
        const state = current.getState();
        if (state.phase !== 'IDLE') {
            current.dispatch(flush());
        }
    }, []);
    const isDragging = useCallback(()=>{
        const state = getStore(lazyStoreRef).getState();
        if (state.phase === 'DROP_ANIMATING') {
            return true;
        }
        if (state.phase === 'IDLE') {
            return false;
        }
        return state.isDragging;
    }, []);
    const appCallbacks = useMemo(()=>({
            isDragging,
            tryAbort: tryResetStore
        }), [
        isDragging,
        tryResetStore
    ]);
    setCallbacks(appCallbacks);
    const getCanLift = useCallback((id)=>canStartDrag(getStore(lazyStoreRef).getState(), id), []);
    const getIsMovementAllowed = useCallback(()=>isMovementAllowed(getStore(lazyStoreRef).getState()), []);
    const appContext = useMemo(()=>({
            marshal: dimensionMarshal,
            focus: focusMarshal,
            contextId,
            canLift: getCanLift,
            isMovementAllowed: getIsMovementAllowed,
            dragHandleUsageInstructionsId,
            registry
        }), [
        contextId,
        dimensionMarshal,
        dragHandleUsageInstructionsId,
        focusMarshal,
        getCanLift,
        getIsMovementAllowed,
        registry
    ]);
    useSensorMarshal({
        contextId,
        store,
        registry,
        customSensors: sensors || null,
        enableDefaultSensors: props.enableDefaultSensors !== false
    });
    React.useEffect(()=>{
        return tryResetStore;
    }, [
        tryResetStore
    ]);
    return React.createElement(AppContext.Provider, {
        value: appContext
    }, React.createElement(Provider, {
        context: StoreContext,
        store: store
    }, props.children));
}
let count = 0;
function useDeprecatedUniqueContextId() {
    return useMemo(()=>`${count++}`, []);
}
function useUniqueContextId() {
    return React.useId();
}
var useUniqueContextId$1 = 'useId' in React ? useUniqueContextId : useDeprecatedUniqueContextId;
function DragDropContext$1(props) {
    const contextId = useUniqueContextId$1();
    const dragHandleUsageInstructions = props.dragHandleUsageInstructions || preset$1.dragHandleUsageInstructions;
    return React.createElement(ErrorBoundary, null, (setCallbacks)=>React.createElement(App, {
            nonce: props.nonce,
            contextId: contextId,
            setCallbacks: setCallbacks,
            dragHandleUsageInstructions: dragHandleUsageInstructions,
            enableDefaultSensors: props.enableDefaultSensors,
            sensors: props.sensors,
            onBeforeCapture: props.onBeforeCapture,
            onBeforeDragStart: props.onBeforeDragStart,
            onDragStart: props.onDragStart,
            onDragUpdate: props.onDragUpdate,
            onDragEnd: props.onDragEnd,
            autoScrollerOptions: props.autoScrollerOptions
        }, props.children));
}
const zIndexOptions = {
    dragging: 5000,
    dropAnimating: 4500
};
const getDraggingTransition = (shouldAnimateDragMovement, dropping)=>{
    if (dropping) {
        return transitions.drop(dropping.duration);
    }
    if (shouldAnimateDragMovement) {
        return transitions.snap;
    }
    return transitions.fluid;
};
const getDraggingOpacity = (isCombining, isDropAnimating)=>{
    if (!isCombining) {
        return undefined;
    }
    return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};
const getShouldDraggingAnimate = (dragging)=>{
    if (dragging.forceShouldAnimate != null) {
        return dragging.forceShouldAnimate;
    }
    return dragging.mode === 'SNAP';
};
function getDraggingStyle(dragging) {
    const dimension = dragging.dimension;
    const box = dimension.client;
    const { offset, combineWith, dropping } = dragging;
    const isCombining = Boolean(combineWith);
    const shouldAnimate = getShouldDraggingAnimate(dragging);
    const isDropAnimating = Boolean(dropping);
    const transform = isDropAnimating ? transforms.drop(offset, isCombining) : transforms.moveTo(offset);
    const style = {
        position: 'fixed',
        top: box.marginBox.top,
        left: box.marginBox.left,
        boxSizing: 'border-box',
        width: box.borderBox.width,
        height: box.borderBox.height,
        transition: getDraggingTransition(shouldAnimate, dropping),
        transform,
        opacity: getDraggingOpacity(isCombining, isDropAnimating),
        zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
        pointerEvents: 'none'
    };
    return style;
}
function getSecondaryStyle(secondary) {
    return {
        transform: transforms.moveTo(secondary.offset),
        transition: secondary.shouldAnimateDisplacement ? undefined : 'none'
    };
}
function getStyle$1(mapped) {
    return mapped.type === 'DRAGGING' ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}
function getDimension$1(descriptor, el, windowScroll = origin) {
    const computedStyles = window.getComputedStyle(el);
    const borderBox = el.getBoundingClientRect();
    const client = calculateBox(borderBox, computedStyles);
    const page = withScroll(client, windowScroll);
    const placeholder = {
        client,
        tagName: el.tagName.toLowerCase(),
        display: computedStyles.display
    };
    const displaceBy = {
        x: client.marginBox.width,
        y: client.marginBox.height
    };
    const dimension = {
        descriptor,
        placeholder,
        displaceBy,
        client,
        page
    };
    return dimension;
}
function useDraggablePublisher(args) {
    const uniqueId = useUniqueId$1('draggable');
    const { descriptor, registry, getDraggableRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled } = args;
    const options = useMemo(()=>({
            canDragInteractiveElements,
            shouldRespectForcePress,
            isEnabled
        }), [
        canDragInteractiveElements,
        isEnabled,
        shouldRespectForcePress
    ]);
    const getDimension = useCallback((windowScroll)=>{
        const el = getDraggableRef();
        !el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot get dimension when no ref is set') : invariant(false) : void 0;
        return getDimension$1(descriptor, el, windowScroll);
    }, [
        descriptor,
        getDraggableRef
    ]);
    const entry = useMemo(()=>({
            uniqueId,
            descriptor,
            options,
            getDimension
        }), [
        descriptor,
        getDimension,
        options,
        uniqueId
    ]);
    const publishedRef = React.useRef(entry);
    const isFirstPublishRef = React.useRef(true);
    useLayoutEffect(()=>{
        registry.draggable.register(publishedRef.current);
        return ()=>registry.draggable.unregister(publishedRef.current);
    }, [
        registry.draggable
    ]);
    useLayoutEffect(()=>{
        if (isFirstPublishRef.current) {
            isFirstPublishRef.current = false;
            return;
        }
        const last = publishedRef.current;
        publishedRef.current = entry;
        registry.draggable.update(entry, last);
    }, [
        entry,
        registry.draggable
    ]);
}
var DroppableContext = React.createContext(null);
function checkIsValidInnerRef(el) {
    !(el && isHtmlElement(el)) ? process.env.NODE_ENV !== "production" ? invariant(false, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : invariant(false) : void 0;
}
function useValidation$1(props, contextId, getRef) {
    useDevSetupWarning(()=>{
        function prefix(id) {
            return `Draggable[id: ${id}]: `;
        }
        const id = props.draggableId;
        !id ? process.env.NODE_ENV !== "production" ? invariant(false, 'Draggable requires a draggableId') : invariant(false) : void 0;
        !(typeof id === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof id}] (value: ${id})`) : invariant(false) : void 0;
        !Number.isInteger(props.index) ? process.env.NODE_ENV !== "production" ? invariant(false, `${prefix(id)} requires an integer index prop`) : invariant(false) : void 0;
        if (props.mapped.type === 'DRAGGING') {
            return;
        }
        checkIsValidInnerRef(getRef());
        if (props.isEnabled) {
            !findDragHandle(contextId, id) ? process.env.NODE_ENV !== "production" ? invariant(false, `${prefix(id)} Unable to find drag handle`) : invariant(false) : void 0;
        }
    });
}
function useClonePropValidation(isClone) {
    useDev(()=>{
        const initialRef = React.useRef(isClone);
        useDevSetupWarning(()=>{
            !(isClone === initialRef.current) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Draggable isClone prop value changed during component life') : invariant(false) : void 0;
        }, [
            isClone
        ]);
    });
}
function useRequiredContext(Context) {
    const result = React.useContext(Context);
    !result ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find required context') : invariant(false) : void 0;
    return result;
}
function preventHtml5Dnd(event) {
    event.preventDefault();
}
const Draggable = (props)=>{
    const ref = React.useRef(null);
    const setRef = useCallback((el = null)=>{
        ref.current = el;
    }, []);
    const getRef = useCallback(()=>ref.current, []);
    const { contextId, dragHandleUsageInstructionsId, registry } = useRequiredContext(AppContext);
    const { type, droppableId } = useRequiredContext(DroppableContext);
    const descriptor = useMemo(()=>({
            id: props.draggableId,
            index: props.index,
            type,
            droppableId
        }), [
        props.draggableId,
        props.index,
        type,
        droppableId
    ]);
    const { children, draggableId, isEnabled, shouldRespectForcePress, canDragInteractiveElements, isClone, mapped, dropAnimationFinished: dropAnimationFinishedAction } = props;
    useValidation$1(props, contextId, getRef);
    useClonePropValidation(isClone);
    if (!isClone) {
        const forPublisher = useMemo(()=>({
                descriptor,
                registry,
                getDraggableRef: getRef,
                canDragInteractiveElements,
                shouldRespectForcePress,
                isEnabled
            }), [
            descriptor,
            registry,
            getRef,
            canDragInteractiveElements,
            shouldRespectForcePress,
            isEnabled
        ]);
        useDraggablePublisher(forPublisher);
    }
    const dragHandleProps = useMemo(()=>isEnabled ? {
            tabIndex: 0,
            role: 'button',
            'aria-describedby': dragHandleUsageInstructionsId,
            'data-rfd-drag-handle-draggable-id': draggableId,
            'data-rfd-drag-handle-context-id': contextId,
            draggable: false,
            onDragStart: preventHtml5Dnd
        } : null, [
        contextId,
        dragHandleUsageInstructionsId,
        draggableId,
        isEnabled
    ]);
    const onMoveEnd = useCallback((event)=>{
        if (mapped.type !== 'DRAGGING') {
            return;
        }
        if (!mapped.dropping) {
            return;
        }
        if (event.propertyName !== 'transform') {
            return;
        }
        if (React.version.startsWith('16') || React.version.startsWith('17')) {
            dropAnimationFinishedAction();
        } else {
            ReactDOM.flushSync(dropAnimationFinishedAction);
        }
    }, [
        dropAnimationFinishedAction,
        mapped
    ]);
    const provided = useMemo(()=>{
        const style = getStyle$1(mapped);
        const onTransitionEnd = mapped.type === 'DRAGGING' && mapped.dropping ? onMoveEnd : undefined;
        const result = {
            innerRef: setRef,
            draggableProps: {
                'data-rfd-draggable-context-id': contextId,
                'data-rfd-draggable-id': draggableId,
                style,
                onTransitionEnd
            },
            dragHandleProps
        };
        return result;
    }, [
        contextId,
        dragHandleProps,
        draggableId,
        mapped,
        onMoveEnd,
        setRef
    ]);
    const rubric = useMemo(()=>({
            draggableId: descriptor.id,
            type: descriptor.type,
            source: {
                index: descriptor.index,
                droppableId: descriptor.droppableId
            }
        }), [
        descriptor.droppableId,
        descriptor.id,
        descriptor.index,
        descriptor.type
    ]);
    return React.createElement(React.Fragment, null, children(provided, mapped.snapshot, rubric));
};
var Draggable$1 = Draggable;
var isStrictEqual = (a, b)=>a === b;
var whatIsDraggedOverFromResult = (result)=>{
    const { combine, destination } = result;
    if (destination) {
        return destination.droppableId;
    }
    if (combine) {
        return combine.droppableId;
    }
    return null;
};
const getCombineWithFromResult = (result)=>{
    return result.combine ? result.combine.draggableId : null;
};
const getCombineWithFromImpact = (impact)=>{
    return impact.at && impact.at.type === 'COMBINE' ? impact.at.combine.draggableId : null;
};
function getDraggableSelector() {
    const memoizedOffset = memoizeOne((x, y)=>({
            x,
            y
        }));
    const getMemoizedSnapshot = memoizeOne((mode, isClone, draggingOver = null, combineWith = null, dropping = null)=>({
            isDragging: true,
            isClone,
            isDropAnimating: Boolean(dropping),
            dropAnimation: dropping,
            mode,
            draggingOver,
            combineWith,
            combineTargetFor: null
        }));
    const getMemoizedProps = memoizeOne((offset, mode, dimension, isClone, draggingOver = null, combineWith = null, forceShouldAnimate = null)=>({
            mapped: {
                type: 'DRAGGING',
                dropping: null,
                draggingOver,
                combineWith,
                mode,
                offset,
                dimension,
                forceShouldAnimate,
                snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
            }
        }));
    const selector = (state, ownProps)=>{
        if (isDragging(state)) {
            if (state.critical.draggable.id !== ownProps.draggableId) {
                return null;
            }
            const offset = state.current.client.offset;
            const dimension = state.dimensions.draggables[ownProps.draggableId];
            const draggingOver = whatIsDraggedOver(state.impact);
            const combineWith = getCombineWithFromImpact(state.impact);
            const forceShouldAnimate = state.forceShouldAnimate;
            return getMemoizedProps(memoizedOffset(offset.x, offset.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
        }
        if (state.phase === 'DROP_ANIMATING') {
            const completed = state.completed;
            if (completed.result.draggableId !== ownProps.draggableId) {
                return null;
            }
            const isClone = ownProps.isClone;
            const dimension = state.dimensions.draggables[ownProps.draggableId];
            const result = completed.result;
            const mode = result.mode;
            const draggingOver = whatIsDraggedOverFromResult(result);
            const combineWith = getCombineWithFromResult(result);
            const duration = state.dropDuration;
            const dropping = {
                duration,
                curve: curves.drop,
                moveTo: state.newHomeClientOffset,
                opacity: combineWith ? combine.opacity.drop : null,
                scale: combineWith ? combine.scale.drop : null
            };
            return {
                mapped: {
                    type: 'DRAGGING',
                    offset: state.newHomeClientOffset,
                    dimension,
                    dropping,
                    draggingOver,
                    combineWith,
                    mode,
                    forceShouldAnimate: null,
                    snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, dropping)
                }
            };
        }
        return null;
    };
    return selector;
}
function getSecondarySnapshot(combineTargetFor = null) {
    return {
        isDragging: false,
        isDropAnimating: false,
        isClone: false,
        dropAnimation: null,
        mode: null,
        draggingOver: null,
        combineTargetFor,
        combineWith: null
    };
}
const atRest = {
    mapped: {
        type: 'SECONDARY',
        offset: origin,
        combineTargetFor: null,
        shouldAnimateDisplacement: true,
        snapshot: getSecondarySnapshot(null)
    }
};
function getSecondarySelector() {
    const memoizedOffset = memoizeOne((x, y)=>({
            x,
            y
        }));
    const getMemoizedSnapshot = memoizeOne(getSecondarySnapshot);
    const getMemoizedProps = memoizeOne((offset, combineTargetFor = null, shouldAnimateDisplacement)=>({
            mapped: {
                type: 'SECONDARY',
                offset,
                combineTargetFor,
                shouldAnimateDisplacement,
                snapshot: getMemoizedSnapshot(combineTargetFor)
            }
        }));
    const getFallback = (combineTargetFor)=>{
        return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
    };
    const getProps = (ownId, draggingId, impact, afterCritical)=>{
        const visualDisplacement = impact.displaced.visible[ownId];
        const isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
        const combine = tryGetCombine(impact);
        const combineTargetFor = combine && combine.draggableId === ownId ? draggingId : null;
        if (!visualDisplacement) {
            if (!isAfterCriticalInVirtualList) {
                return getFallback(combineTargetFor);
            }
            if (impact.displaced.invisible[ownId]) {
                return null;
            }
            const change = negate(afterCritical.displacedBy.point);
            const offset = memoizedOffset(change.x, change.y);
            return getMemoizedProps(offset, combineTargetFor, true);
        }
        if (isAfterCriticalInVirtualList) {
            return getFallback(combineTargetFor);
        }
        const displaceBy = impact.displacedBy.point;
        const offset = memoizedOffset(displaceBy.x, displaceBy.y);
        return getMemoizedProps(offset, combineTargetFor, visualDisplacement.shouldAnimate);
    };
    const selector = (state, ownProps)=>{
        if (isDragging(state)) {
            if (state.critical.draggable.id === ownProps.draggableId) {
                return null;
            }
            return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
        }
        if (state.phase === 'DROP_ANIMATING') {
            const completed = state.completed;
            if (completed.result.draggableId === ownProps.draggableId) {
                return null;
            }
            return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
        }
        return null;
    };
    return selector;
}
const makeMapStateToProps$1 = ()=>{
    const draggingSelector = getDraggableSelector();
    const secondarySelector = getSecondarySelector();
    const selector = (state, ownProps)=>draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
    return selector;
};
const mapDispatchToProps$1 = {
    dropAnimationFinished: dropAnimationFinished
};
const ConnectedDraggable = connect(makeMapStateToProps$1, mapDispatchToProps$1, null, {
    context: StoreContext,
    areStatePropsEqual: isStrictEqual
})(Draggable$1);
var ConnectedDraggable$1 = ConnectedDraggable;
function PrivateDraggable(props) {
    const droppableContext = useRequiredContext(DroppableContext);
    const isUsingCloneFor = droppableContext.isUsingCloneFor;
    if (isUsingCloneFor === props.draggableId && !props.isClone) {
        return null;
    }
    return React.createElement(ConnectedDraggable$1, props);
}
function PublicDraggable(props) {
    const isEnabled = typeof props.isDragDisabled === 'boolean' ? !props.isDragDisabled : true;
    const canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
    const shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
    return React.createElement(PrivateDraggable, _extends({}, props, {
        isClone: false,
        isEnabled: isEnabled,
        canDragInteractiveElements: canDragInteractiveElements,
        shouldRespectForcePress: shouldRespectForcePress
    }));
}
const isEqual = (base)=>(value)=>base === value;
const isScroll = isEqual('scroll');
const isAuto = isEqual('auto');
const isVisible = isEqual('visible');
const isEither = (overflow, fn)=>fn(overflow.overflowX) || fn(overflow.overflowY);
const isBoth = (overflow, fn)=>fn(overflow.overflowX) && fn(overflow.overflowY);
const isElementScrollable = (el)=>{
    const style = window.getComputedStyle(el);
    const overflow = {
        overflowX: style.overflowX,
        overflowY: style.overflowY
    };
    return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};
const isBodyScrollable = ()=>{
    if (process.env.NODE_ENV === 'production') {
        return false;
    }
    const body = getBodyElement();
    const html = document.documentElement;
    !html ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
    if (!isElementScrollable(body)) {
        return false;
    }
    const htmlStyle = window.getComputedStyle(html);
    const htmlOverflow = {
        overflowX: htmlStyle.overflowX,
        overflowY: htmlStyle.overflowY
    };
    if (isBoth(htmlOverflow, isVisible)) {
        return false;
    }
    process.env.NODE_ENV !== "production" ? warning(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `) : void 0;
    return false;
};
const getClosestScrollable = (el)=>{
    if (el == null) {
        return null;
    }
    if (el === document.body) {
        return isBodyScrollable() ? el : null;
    }
    if (el === document.documentElement) {
        return null;
    }
    if (!isElementScrollable(el)) {
        return getClosestScrollable(el.parentElement);
    }
    return el;
};
var getClosestScrollable$1 = getClosestScrollable;
var checkForNestedScrollContainers = (scrollable)=>{
    if (!scrollable) {
        return;
    }
    const anotherScrollParent = getClosestScrollable$1(scrollable.parentElement);
    if (!anotherScrollParent) {
        return;
    }
    process.env.NODE_ENV !== "production" ? warning(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `) : void 0;
};
var getScroll = (el)=>({
        x: el.scrollLeft,
        y: el.scrollTop
    });
const getIsFixed = (el)=>{
    if (!el) {
        return false;
    }
    const style = window.getComputedStyle(el);
    if (style.position === 'fixed') {
        return true;
    }
    return getIsFixed(el.parentElement);
};
var getEnv = (start)=>{
    const closestScrollable = getClosestScrollable$1(start);
    const isFixedOnPage = getIsFixed(start);
    return {
        closestScrollable,
        isFixedOnPage
    };
};
var getDroppableDimension = ({ descriptor, isEnabled, isCombineEnabled, isFixedOnPage, direction, client, page, closest })=>{
    const frame = (()=>{
        if (!closest) {
            return null;
        }
        const { scrollSize, client: frameClient } = closest;
        const maxScroll = getMaxScroll({
            scrollHeight: scrollSize.scrollHeight,
            scrollWidth: scrollSize.scrollWidth,
            height: frameClient.paddingBox.height,
            width: frameClient.paddingBox.width
        });
        return {
            pageMarginBox: closest.page.marginBox,
            frameClient,
            scrollSize,
            shouldClipSubject: closest.shouldClipSubject,
            scroll: {
                initial: closest.scroll,
                current: closest.scroll,
                max: maxScroll,
                diff: {
                    value: origin,
                    displacement: origin
                }
            }
        };
    })();
    const axis = direction === 'vertical' ? vertical : horizontal;
    const subject = getSubject({
        page,
        withPlaceholder: null,
        axis,
        frame
    });
    const dimension = {
        descriptor,
        isCombineEnabled,
        isFixedOnPage,
        axis,
        isEnabled,
        client,
        page,
        frame,
        subject
    };
    return dimension;
};
const getClient = (targetRef, closestScrollable)=>{
    const base = getBox(targetRef);
    if (!closestScrollable) {
        return base;
    }
    if (targetRef !== closestScrollable) {
        return base;
    }
    const top = base.paddingBox.top - closestScrollable.scrollTop;
    const left = base.paddingBox.left - closestScrollable.scrollLeft;
    const bottom = top + closestScrollable.scrollHeight;
    const right = left + closestScrollable.scrollWidth;
    const paddingBox = {
        top,
        right,
        bottom,
        left
    };
    const borderBox = expand(paddingBox, base.border);
    const client = createBox({
        borderBox,
        margin: base.margin,
        border: base.border,
        padding: base.padding
    });
    return client;
};
var getDimension = ({ ref, descriptor, env, windowScroll, direction, isDropDisabled, isCombineEnabled, shouldClipSubject })=>{
    const closestScrollable = env.closestScrollable;
    const client = getClient(ref, closestScrollable);
    const page = withScroll(client, windowScroll);
    const closest = (()=>{
        if (!closestScrollable) {
            return null;
        }
        const frameClient = getBox(closestScrollable);
        const scrollSize = {
            scrollHeight: closestScrollable.scrollHeight,
            scrollWidth: closestScrollable.scrollWidth
        };
        return {
            client: frameClient,
            page: withScroll(frameClient, windowScroll),
            scroll: getScroll(closestScrollable),
            scrollSize,
            shouldClipSubject
        };
    })();
    const dimension = getDroppableDimension({
        descriptor,
        isEnabled: !isDropDisabled,
        isCombineEnabled,
        isFixedOnPage: env.isFixedOnPage,
        direction,
        client,
        page,
        closest
    });
    return dimension;
};
const immediate = {
    passive: false
};
const delayed = {
    passive: true
};
var getListenerOptions = (options)=>options.shouldPublishImmediately ? immediate : delayed;
const getClosestScrollableFromDrag = (dragging)=>dragging && dragging.env.closestScrollable || null;
function useDroppablePublisher(args) {
    const whileDraggingRef = React.useRef(null);
    const appContext = useRequiredContext(AppContext);
    const uniqueId = useUniqueId$1('droppable');
    const { registry, marshal } = appContext;
    const previousRef = usePrevious(args);
    const descriptor = useMemo(()=>({
            id: args.droppableId,
            type: args.type,
            mode: args.mode
        }), [
        args.droppableId,
        args.mode,
        args.type
    ]);
    const publishedDescriptorRef = React.useRef(descriptor);
    const memoizedUpdateScroll = useMemo(()=>memoizeOne((x, y)=>{
            !whileDraggingRef.current ? process.env.NODE_ENV !== "production" ? invariant(false, 'Can only update scroll when dragging') : invariant(false) : void 0;
            const scroll = {
                x,
                y
            };
            marshal.updateDroppableScroll(descriptor.id, scroll);
        }), [
        descriptor.id,
        marshal
    ]);
    const getClosestScroll = useCallback(()=>{
        const dragging = whileDraggingRef.current;
        if (!dragging || !dragging.env.closestScrollable) {
            return origin;
        }
        return getScroll(dragging.env.closestScrollable);
    }, []);
    const updateScroll = useCallback(()=>{
        const scroll = getClosestScroll();
        memoizedUpdateScroll(scroll.x, scroll.y);
    }, [
        getClosestScroll,
        memoizedUpdateScroll
    ]);
    const scheduleScrollUpdate = useMemo(()=>rafSchd(updateScroll), [
        updateScroll
    ]);
    const onClosestScroll = useCallback(()=>{
        const dragging = whileDraggingRef.current;
        const closest = getClosestScrollableFromDrag(dragging);
        !(dragging && closest) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find scroll options while scrolling') : invariant(false) : void 0;
        const options = dragging.scrollOptions;
        if (options.shouldPublishImmediately) {
            updateScroll();
            return;
        }
        scheduleScrollUpdate();
    }, [
        scheduleScrollUpdate,
        updateScroll
    ]);
    const getDimensionAndWatchScroll = useCallback((windowScroll, options)=>{
        !!whileDraggingRef.current ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot collect a droppable while a drag is occurring') : invariant(false) : void 0;
        const previous = previousRef.current;
        const ref = previous.getDroppableRef();
        !ref ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot collect without a droppable ref') : invariant(false) : void 0;
        const env = getEnv(ref);
        const dragging = {
            ref,
            descriptor,
            env,
            scrollOptions: options
        };
        whileDraggingRef.current = dragging;
        const dimension = getDimension({
            ref,
            descriptor,
            env,
            windowScroll,
            direction: previous.direction,
            isDropDisabled: previous.isDropDisabled,
            isCombineEnabled: previous.isCombineEnabled,
            shouldClipSubject: !previous.ignoreContainerClipping
        });
        const scrollable = env.closestScrollable;
        if (scrollable) {
            scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
            scrollable.addEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
            if (process.env.NODE_ENV !== 'production') {
                checkForNestedScrollContainers(scrollable);
            }
        }
        return dimension;
    }, [
        appContext.contextId,
        descriptor,
        onClosestScroll,
        previousRef
    ]);
    const getScrollWhileDragging = useCallback(()=>{
        const dragging = whileDraggingRef.current;
        const closest = getClosestScrollableFromDrag(dragging);
        !(dragging && closest) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Can only recollect Droppable client for Droppables that have a scroll container') : invariant(false) : void 0;
        return getScroll(closest);
    }, []);
    const dragStopped = useCallback(()=>{
        const dragging = whileDraggingRef.current;
        !dragging ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot stop drag when no active drag') : invariant(false) : void 0;
        const closest = getClosestScrollableFromDrag(dragging);
        whileDraggingRef.current = null;
        if (!closest) {
            return;
        }
        scheduleScrollUpdate.cancel();
        closest.removeAttribute(scrollContainer.contextId);
        closest.removeEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
    }, [
        onClosestScroll,
        scheduleScrollUpdate
    ]);
    const scroll = useCallback((change)=>{
        const dragging = whileDraggingRef.current;
        !dragging ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot scroll when there is no drag') : invariant(false) : void 0;
        const closest = getClosestScrollableFromDrag(dragging);
        !closest ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot scroll a droppable with no closest scrollable') : invariant(false) : void 0;
        closest.scrollTop += change.y;
        closest.scrollLeft += change.x;
    }, []);
    const callbacks = useMemo(()=>{
        return {
            getDimensionAndWatchScroll,
            getScrollWhileDragging,
            dragStopped,
            scroll
        };
    }, [
        dragStopped,
        getDimensionAndWatchScroll,
        getScrollWhileDragging,
        scroll
    ]);
    const entry = useMemo(()=>({
            uniqueId,
            descriptor,
            callbacks
        }), [
        callbacks,
        descriptor,
        uniqueId
    ]);
    useLayoutEffect(()=>{
        publishedDescriptorRef.current = entry.descriptor;
        registry.droppable.register(entry);
        return ()=>{
            if (whileDraggingRef.current) {
                process.env.NODE_ENV !== "production" ? warning('Unsupported: changing the droppableId or type of a Droppable during a drag') : void 0;
                dragStopped();
            }
            registry.droppable.unregister(entry);
        };
    }, [
        callbacks,
        descriptor,
        dragStopped,
        entry,
        marshal,
        registry.droppable
    ]);
    useLayoutEffect(()=>{
        if (!whileDraggingRef.current) {
            return;
        }
        marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
    }, [
        args.isDropDisabled,
        marshal
    ]);
    useLayoutEffect(()=>{
        if (!whileDraggingRef.current) {
            return;
        }
        marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
    }, [
        args.isCombineEnabled,
        marshal
    ]);
}
function noop() {}
const empty = {
    width: 0,
    height: 0,
    margin: noSpacing
};
const getSize = ({ isAnimatingOpenOnMount, placeholder, animate })=>{
    if (isAnimatingOpenOnMount) {
        return empty;
    }
    if (animate === 'close') {
        return empty;
    }
    return {
        height: placeholder.client.borderBox.height,
        width: placeholder.client.borderBox.width,
        margin: placeholder.client.margin
    };
};
const getStyle = ({ isAnimatingOpenOnMount, placeholder, animate })=>{
    const size = getSize({
        isAnimatingOpenOnMount,
        placeholder,
        animate
    });
    return {
        display: placeholder.display,
        boxSizing: 'border-box',
        width: size.width,
        height: size.height,
        marginTop: size.margin.top,
        marginRight: size.margin.right,
        marginBottom: size.margin.bottom,
        marginLeft: size.margin.left,
        flexShrink: '0',
        flexGrow: '0',
        pointerEvents: 'none',
        transition: animate !== 'none' ? transitions.placeholder : null
    };
};
const Placeholder = (props)=>{
    const animateOpenTimerRef = React.useRef(null);
    const tryClearAnimateOpenTimer = useCallback(()=>{
        if (!animateOpenTimerRef.current) {
            return;
        }
        clearTimeout(animateOpenTimerRef.current);
        animateOpenTimerRef.current = null;
    }, []);
    const { animate, onTransitionEnd, onClose, contextId } = props;
    const [isAnimatingOpenOnMount, setIsAnimatingOpenOnMount] = React.useState(props.animate === 'open');
    React.useEffect(()=>{
        if (!isAnimatingOpenOnMount) {
            return noop;
        }
        if (animate !== 'open') {
            tryClearAnimateOpenTimer();
            setIsAnimatingOpenOnMount(false);
            return noop;
        }
        if (animateOpenTimerRef.current) {
            return noop;
        }
        animateOpenTimerRef.current = setTimeout(()=>{
            animateOpenTimerRef.current = null;
            setIsAnimatingOpenOnMount(false);
        });
        return tryClearAnimateOpenTimer;
    }, [
        animate,
        isAnimatingOpenOnMount,
        tryClearAnimateOpenTimer
    ]);
    const onSizeChangeEnd = useCallback((event)=>{
        if (event.propertyName !== 'height') {
            return;
        }
        onTransitionEnd();
        if (animate === 'close') {
            onClose();
        }
    }, [
        animate,
        onClose,
        onTransitionEnd
    ]);
    const style = getStyle({
        isAnimatingOpenOnMount,
        animate: props.animate,
        placeholder: props.placeholder
    });
    return React.createElement(props.placeholder.tagName, {
        style,
        'data-rfd-placeholder-context-id': contextId,
        onTransitionEnd: onSizeChangeEnd,
        ref: props.innerRef
    });
};
var Placeholder$1 = React.memo(Placeholder);
function isBoolean$1(value) {
    return typeof value === 'boolean';
}
function runChecks(args, checks) {
    checks.forEach((check)=>check(args));
}
const shared = [
    function required({ props }) {
        !props.droppableId ? process.env.NODE_ENV !== "production" ? invariant(false, 'A Droppable requires a droppableId prop') : invariant(false) : void 0;
        !(typeof props.droppableId === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, `A Droppable requires a [string] droppableId. Provided: [${typeof props.droppableId}]`) : invariant(false) : void 0;
    },
    function boolean({ props }) {
        !isBoolean$1(props.isDropDisabled) ? process.env.NODE_ENV !== "production" ? invariant(false, 'isDropDisabled must be a boolean') : invariant(false) : void 0;
        !isBoolean$1(props.isCombineEnabled) ? process.env.NODE_ENV !== "production" ? invariant(false, 'isCombineEnabled must be a boolean') : invariant(false) : void 0;
        !isBoolean$1(props.ignoreContainerClipping) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ignoreContainerClipping must be a boolean') : invariant(false) : void 0;
    },
    function ref({ getDroppableRef }) {
        checkIsValidInnerRef(getDroppableRef());
    }
];
const standard = [
    function placeholder({ props, getPlaceholderRef }) {
        if (!props.placeholder) {
            return;
        }
        const ref = getPlaceholderRef();
        if (ref) {
            return;
        }
        process.env.NODE_ENV !== "production" ? warning(`
      Droppable setup issue [droppableId: "${props.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `) : void 0;
    }
];
const virtual = [
    function hasClone({ props }) {
        !props.renderClone ? process.env.NODE_ENV !== "production" ? invariant(false, 'Must provide a clone render function (renderClone) for virtual lists') : invariant(false) : void 0;
    },
    function hasNoPlaceholder({ getPlaceholderRef }) {
        !!getPlaceholderRef() ? process.env.NODE_ENV !== "production" ? invariant(false, 'Expected virtual list to not have a placeholder') : invariant(false) : void 0;
    }
];
function useValidation(args) {
    useDevSetupWarning(()=>{
        runChecks(args, shared);
        if (args.props.mode === 'standard') {
            runChecks(args, standard);
        }
        if (args.props.mode === 'virtual') {
            runChecks(args, virtual);
        }
    });
}
class AnimateInOut extends React.PureComponent {
    static getDerivedStateFromProps(props, state) {
        if (!props.shouldAnimate) {
            return {
                isVisible: Boolean(props.on),
                data: props.on,
                animate: 'none'
            };
        }
        if (props.on) {
            return {
                isVisible: true,
                data: props.on,
                animate: 'open'
            };
        }
        if (state.isVisible) {
            return {
                isVisible: true,
                data: state.data,
                animate: 'close'
            };
        }
        return {
            isVisible: false,
            animate: 'close',
            data: null
        };
    }
    render() {
        if (!this.state.isVisible) {
            return null;
        }
        const provided = {
            onClose: this.onClose,
            data: this.state.data,
            animate: this.state.animate
        };
        return this.props.children(provided);
    }
    constructor(...args){
        super(...args);
        this.state = {
            isVisible: Boolean(this.props.on),
            data: this.props.on,
            animate: this.props.shouldAnimate && this.props.on ? 'open' : 'none'
        };
        this.onClose = ()=>{
            if (this.state.animate !== 'close') {
                return;
            }
            this.setState({
                isVisible: false
            });
        };
    }
}
const Droppable = (props)=>{
    const appContext = React.useContext(AppContext);
    !appContext ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find app context') : invariant(false) : void 0;
    const { contextId, isMovementAllowed } = appContext;
    const droppableRef = React.useRef(null);
    const placeholderRef = React.useRef(null);
    const { children, droppableId, type, mode, direction, ignoreContainerClipping, isDropDisabled, isCombineEnabled, snapshot, useClone, updateViewportMaxScroll, getContainerForClone } = props;
    const getDroppableRef = useCallback(()=>droppableRef.current, []);
    const setDroppableRef = useCallback((value = null)=>{
        droppableRef.current = value;
    }, []);
    const getPlaceholderRef = useCallback(()=>placeholderRef.current, []);
    const setPlaceholderRef = useCallback((value = null)=>{
        placeholderRef.current = value;
    }, []);
    useValidation({
        props,
        getDroppableRef,
        getPlaceholderRef
    });
    const onPlaceholderTransitionEnd = useCallback(()=>{
        if (isMovementAllowed()) {
            updateViewportMaxScroll({
                maxScroll: getMaxWindowScroll()
            });
        }
    }, [
        isMovementAllowed,
        updateViewportMaxScroll
    ]);
    useDroppablePublisher({
        droppableId,
        type,
        mode,
        direction,
        isDropDisabled,
        isCombineEnabled,
        ignoreContainerClipping,
        getDroppableRef
    });
    const placeholder = useMemo(()=>React.createElement(AnimateInOut, {
            on: props.placeholder,
            shouldAnimate: props.shouldAnimatePlaceholder
        }, ({ onClose, data, animate })=>React.createElement(Placeholder$1, {
                placeholder: data,
                onClose: onClose,
                innerRef: setPlaceholderRef,
                animate: animate,
                contextId: contextId,
                onTransitionEnd: onPlaceholderTransitionEnd
            })), [
        contextId,
        onPlaceholderTransitionEnd,
        props.placeholder,
        props.shouldAnimatePlaceholder,
        setPlaceholderRef
    ]);
    const provided = useMemo(()=>({
            innerRef: setDroppableRef,
            placeholder,
            droppableProps: {
                'data-rfd-droppable-id': droppableId,
                'data-rfd-droppable-context-id': contextId
            }
        }), [
        contextId,
        droppableId,
        placeholder,
        setDroppableRef
    ]);
    const isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
    const droppableContext = useMemo(()=>({
            droppableId,
            type,
            isUsingCloneFor
        }), [
        droppableId,
        isUsingCloneFor,
        type
    ]);
    function getClone() {
        if (!useClone) {
            return null;
        }
        const { dragging, render } = useClone;
        const node = React.createElement(PrivateDraggable, {
            draggableId: dragging.draggableId,
            index: dragging.source.index,
            isClone: true,
            isEnabled: true,
            shouldRespectForcePress: false,
            canDragInteractiveElements: true
        }, (draggableProvided, draggableSnapshot)=>render(draggableProvided, draggableSnapshot, dragging));
        return ReactDOM.createPortal(node, getContainerForClone());
    }
    return React.createElement(DroppableContext.Provider, {
        value: droppableContext
    }, children(provided, snapshot), getClone());
};
var Droppable$1 = Droppable;
function getBody() {
    !document.body ? process.env.NODE_ENV !== "production" ? invariant(false, 'document.body is not ready') : invariant(false) : void 0;
    return document.body;
}
const defaultProps = {
    mode: 'standard',
    type: 'DEFAULT',
    direction: 'vertical',
    isDropDisabled: false,
    isCombineEnabled: false,
    ignoreContainerClipping: false,
    renderClone: null,
    getContainerForClone: getBody
};
const attachDefaultPropsToOwnProps = (ownProps)=>{
    let mergedProps = {
        ...ownProps
    };
    let defaultPropKey;
    for(defaultPropKey in defaultProps){
        if (ownProps[defaultPropKey] === undefined) {
            mergedProps = {
                ...mergedProps,
                [defaultPropKey]: defaultProps[defaultPropKey]
            };
        }
    }
    return mergedProps;
};
const isMatchingType = (type, critical)=>type === critical.droppable.type;
const getDraggable = (critical, dimensions)=>dimensions.draggables[critical.draggable.id];
const makeMapStateToProps = ()=>{
    const idleWithAnimation = {
        placeholder: null,
        shouldAnimatePlaceholder: true,
        snapshot: {
            isDraggingOver: false,
            draggingOverWith: null,
            draggingFromThisWith: null,
            isUsingPlaceholder: false
        },
        useClone: null
    };
    const idleWithoutAnimation = {
        ...idleWithAnimation,
        shouldAnimatePlaceholder: false
    };
    const getDraggableRubric = memoizeOne((descriptor)=>({
            draggableId: descriptor.id,
            type: descriptor.type,
            source: {
                index: descriptor.index,
                droppableId: descriptor.droppableId
            }
        }));
    const getMapProps = memoizeOne((id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone)=>{
        const draggableId = dragging.descriptor.id;
        const isHome = dragging.descriptor.droppableId === id;
        if (isHome) {
            const useClone = renderClone ? {
                render: renderClone,
                dragging: getDraggableRubric(dragging.descriptor)
            } : null;
            const snapshot = {
                isDraggingOver: isDraggingOverForConsumer,
                draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
                draggingFromThisWith: draggableId,
                isUsingPlaceholder: true
            };
            return {
                placeholder: dragging.placeholder,
                shouldAnimatePlaceholder: false,
                snapshot,
                useClone
            };
        }
        if (!isEnabled) {
            return idleWithoutAnimation;
        }
        if (!isDraggingOverForImpact) {
            return idleWithAnimation;
        }
        const snapshot = {
            isDraggingOver: isDraggingOverForConsumer,
            draggingOverWith: draggableId,
            draggingFromThisWith: null,
            isUsingPlaceholder: true
        };
        return {
            placeholder: dragging.placeholder,
            shouldAnimatePlaceholder: true,
            snapshot,
            useClone: null
        };
    });
    const selector = (state, ownProps)=>{
        const ownPropsWithDefaultProps = attachDefaultPropsToOwnProps(ownProps);
        const id = ownPropsWithDefaultProps.droppableId;
        const type = ownPropsWithDefaultProps.type;
        const isEnabled = !ownPropsWithDefaultProps.isDropDisabled;
        const renderClone = ownPropsWithDefaultProps.renderClone;
        if (isDragging(state)) {
            const critical = state.critical;
            if (!isMatchingType(type, critical)) {
                return idleWithoutAnimation;
            }
            const dragging = getDraggable(critical, state.dimensions);
            const isDraggingOver = whatIsDraggedOver(state.impact) === id;
            return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
        }
        if (state.phase === 'DROP_ANIMATING') {
            const completed = state.completed;
            if (!isMatchingType(type, completed.critical)) {
                return idleWithoutAnimation;
            }
            const dragging = getDraggable(completed.critical, state.dimensions);
            return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, dragging, renderClone);
        }
        if (state.phase === 'IDLE' && state.completed && !state.shouldFlush) {
            const completed = state.completed;
            if (!isMatchingType(type, completed.critical)) {
                return idleWithoutAnimation;
            }
            const wasOver = whatIsDraggedOver(completed.impact) === id;
            const wasCombining = Boolean(completed.impact.at && completed.impact.at.type === 'COMBINE');
            const isHome = completed.critical.droppable.id === id;
            if (wasOver) {
                return wasCombining ? idleWithAnimation : idleWithoutAnimation;
            }
            if (isHome) {
                return idleWithAnimation;
            }
            return idleWithoutAnimation;
        }
        return idleWithoutAnimation;
    };
    return selector;
};
const mapDispatchToProps = {
    updateViewportMaxScroll: updateViewportMaxScroll
};
const ConnectedDroppable = connect(makeMapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps)=>{
    return {
        ...attachDefaultPropsToOwnProps(ownProps),
        ...stateProps,
        ...dispatchProps
    };
}, {
    context: StoreContext,
    areStatePropsEqual: isStrictEqual
})(Droppable$1);
var ConnectedDroppable$1 = ConnectedDroppable;

const useDragDrop = (props)=>{
    const [droppables, setDroppables] = React.useState([]);
    const [isDragging, setIsDragging] = React.useState(false);
    // findItemByID
    const findDropableByID = (ID)=>{
        return droppables.find((i)=>i.id === ID);
    };
    // addItem
    const addDropable = (droppable)=>{
        setDroppables((prev)=>[
                ...prev,
                droppable
            ]);
    };
    const onDragEnd = (e)=>{
        var _a;
        setIsDragging(false);
        console.log('drag end?');
        const d = (_a = e.destination) === null || _a === void 0 ? void 0 : _a.droppableId;
        if (d) {
            props.onDragEnd(Object.assign(Object.assign({}, findDropableByID(d)), {
                type: e.draggableId
            }));
        }
    };
    const onDradStart = ()=>{
        setIsDragging(true);
    };
    return {
        addDropable,
        onDragEnd,
        onDradStart,
        isDragging
    };
};

const DragDropContext = React.createContext(undefined);
const DragDropContextProvider = ({ children, onDragEnd })=>{
    // States
    const { addDropable, onDradStart: _onDragStart, onDragEnd: _onDragEnd, isDragging } = useDragDrop({
        onDragEnd
    });
    const values = {
        addDropable,
        isDragging
    };
    return React.createElement(DragDropContext.Provider, {
        value: values
    }, React.createElement(DragDropContext$1, {
        onDragStart: _onDragStart,
        onDragEnd: _onDragEnd
    }, children));
};

const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const destroy = ()=>{
        if ((undefined ? undefined.MODE : void 0) !== "production") {
            console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.");
        }
        listeners.clear();
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe,
        destroy
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;

const { useDebugValue } = React;
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
let didWarnAboutEqualityFn = false;
const identity = (arg)=>arg;
function useStore$1(api, selector = identity, equalityFn) {
    if ((undefined ? undefined.MODE : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
        console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937");
        didWarnAboutEqualityFn = true;
    }
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getServerState || api.getInitialState, selector, equalityFn);
    useDebugValue(slice);
    return slice;
}
const createImpl = (createState)=>{
    if ((undefined ? undefined.MODE : void 0) !== "production" && typeof createState !== "function") {
        console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
    }
    const api = typeof createState === "function" ? createStore(createState) : createState;
    const useBoundStore = (selector, equalityFn)=>useStore$1(api, selector, equalityFn);
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
const create = (createState)=>createState ? createImpl(createState) : createImpl;

const useStore = create((set)=>({
        bears: 0,
        increasePopulation: ()=>set((state)=>({
                    bears: state.bears + 1
                })),
        removeAllBears: ()=>set({
                bears: 0
            }),
        // Real world - at, least on try
        form: [],
        setForm: (newForm)=>set({
                form: newForm
            })
    }));

const compareFormComponent = (prevProps, nextProps)=>{
    // console.log(
    //   copyObjectExcludeProperties(prevProps, ['children']),
    //   copyObjectExcludeProperties(nextProps, ['children'])
    // );
    Object.keys(prevProps).forEach((key)=>{
        if (typeof prevProps[key] === 'function') {
            console.error(`${prevProps.type} contains a function in its properties. This can lead to problems with re-rendering. Please check the ${key} parameter.`);
        }
    });
    return JSON.stringify(copyObjectExcludeProperties(prevProps, [
        'children'
    ])) === JSON.stringify(copyObjectExcludeProperties(nextProps, [
        'children'
    ]));
};
function copyObjectExcludeProperties(obj, excludedProps) {
    const newObj = {};
    for(const key in obj){
        if (!excludedProps.includes(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
function findNodeById(obj, id) {
    // Verifica si el objeto actual tiene el id buscado
    if (obj.id === id) {
        return obj;
    }
    // Verifica si el objeto actual tiene la propiedad "props" y es un array
    if (obj.props && Array.isArray(obj.props.children)) {
        // Itera sobre los hijos y realiza una búsqueda recursiva
        for (let child of obj.props.children){
            // Llama recursivamente a la función para cada hijo
            const found = findNodeById(child, id);
            // Si se encuentra el nodo, devuelve el resultado
            if (found) {
                return found;
            }
        }
    }
    // Si no se encuentra en el objeto actual ni en sus hijos, devuelve null
    return null;
}
function decodeElement(data) {
    if (data) {
        if ((data.type === 'tabs' || data.type === 'radio_buttons') && data.props.children) {
            return {
                options: data.props.children.map((i)=>({
                        label: i.props.label
                    }))
            };
        }
        return data.props;
    }
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

const FormContext = React.createContext();
const FormContextProvider = ({ children, onDragEnd, isEditing })=>{
    const [item, setItem] = React.useState(null);
    const formData = useStore((state)=>state.form);
    const selectItem = (item)=>{
        if (item && isEditing) {
            console.log('node founded', findNodeById(formData[0], item === null || item === void 0 ? void 0 : item.item));
            setItem(Object.assign(Object.assign({}, findNodeById(formData[0], item.item)), {
                parent: item.parent
            }));
            return;
        }
        setItem(null);
    };
    const selectedItem = ()=>{
        return item;
    };
    const values = {
        selectItem,
        selectedItem
    };
    if (onDragEnd) {
        return React.createElement(FormContext.Provider, {
            value: values
        }, React.createElement(DragDropContextProvider, {
            onDragEnd: onDragEnd
        }, children));
    } else {
        return React.createElement(FormContext.Provider, {
            value: values
        }, children);
    }
};

const useItem = (props)=>{
    var _a;
    const ctx = React.useContext(FormContext);
    if (!ctx) {
        throw new Error('Cannot find Form context provider');
    }
    const handleClick = (event)=>{
        event.stopPropagation();
        if (props.item) {
            console.log('clicked', props);
            ctx.selectItem(props);
        }
    };
    return {
        handleClick,
        item: ctx.selectedItem(),
        baseStyles: `${((_a = ctx.selectedItem()) === null || _a === void 0 ? void 0 : _a.id) === props.item ? 'border border-solid border-blue-500 my-2' : ''}`
    };
};

const Card = (props)=>{
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    return React.createElement("div", {
        onClick: handleClick,
        className: `
      ${baseStyles}
      my-4 w-full rounded shadow-gray-400 shadow-md bg-white pt-2 pb-2 px-4 @container`
    }, React.createElement("div", {
        className: "grid"
    }, props.children));
};
var Card$1 = React.memo(Card);

var isCheckBoxInput = (element)=>element.type === 'checkbox';
var isDateObject = (value1)=>value1 instanceof Date;
var isNullOrUndefined = (value1)=>value1 == null;
const isObjectType = (value1)=>typeof value1 === 'object';
var isObject = (value1)=>!isNullOrUndefined(value1) && !Array.isArray(value1) && isObjectType(value1) && !isDateObject(value1);
var getEventValue = (event)=>isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name)=>name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name)=>names.has(getNodeParentName(name));
var isPlainObject = (tempObject)=>{
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf');
};
var isWeb = typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined' && typeof document !== 'undefined';
function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    if (data instanceof Date) {
        copy = new Date(data);
    } else if (data instanceof Set) {
        copy = new Set(data);
    } else if (!(isWeb && (data instanceof Blob || data instanceof FileList)) && (isArray || isObject(data))) {
        copy = isArray ? [] : {};
        if (!isArray && !isPlainObject(data)) {
            copy = data;
        } else {
            for(const key in data){
                if (data.hasOwnProperty(key)) {
                    copy[key] = cloneObject(data[key]);
                }
            }
        }
    } else {
        return data;
    }
    return copy;
}
var compact = (value1)=>Array.isArray(value1) ? value1.filter(Boolean) : [];
var isUndefined = (val)=>val === undefined;
var get = (object, path, defaultValue)=>{
    if (!path || !isObject(object)) {
        return defaultValue;
    }
    const result = compact(path.split(/[,[\].]+?/)).reduce((result, key)=>isNullOrUndefined(result) ? result : result[key], object);
    return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value1)=>typeof value1 === 'boolean';
const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change'
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all'
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
};
const HookFormContext = React.createContext(null);
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const useFormContext = ()=>React.useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const FormProvider = (props)=>{
    const { children, ...data } = props;
    return React.createElement(HookFormContext.Provider, {
        value: data
    }, children);
};
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true)=>{
    const result = {
        defaultValues: control._defaultValues
    };
    for(const key in formState){
        Object.defineProperty(result, key, {
            get: ()=>{
                const _key = key;
                if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
                    control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            }
        });
    }
    return result;
};
var isEmptyObject = (value1)=>isObject(value1) && !Object.keys(value1).length;
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot)=>{
    updateFormState(formStateData);
    const { name, ...formState } = formStateData;
    return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key)=>_proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var convertToArrayPayload = (value1)=>Array.isArray(value1) ? value1 : [
        value1
    ];
function useSubscribe(props) {
    const _props = React.useRef(props);
    _props.current = props;
    React.useEffect(()=>{
        const subscription = !props.disabled && _props.current.subject && _props.current.subject.subscribe({
            next: _props.current.next
        });
        return ()=>{
            subscription && subscription.unsubscribe();
        };
    }, [
        props.disabled
    ]);
}
var isString = (value1)=>typeof value1 === 'string';
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue)=>{
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return get(formValues, names, defaultValue);
    }
    if (Array.isArray(names)) {
        return names.map((fieldName)=>(isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};
var isKey = (value1)=>/^\w*$/.test(value1);
var stringToPath = (input)=>compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));
var set = (object, path, value1)=>{
    let index = -1;
    const tempPath = isKey(path) ? [
        path
    ] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while(++index < length){
        const key = tempPath[index];
        let newValue = value1;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
};
var appendErrors = (name, validateAllFieldCriteria, errors, type, message)=>validateAllFieldCriteria ? {
        ...errors[name],
        types: {
            ...errors[name] && errors[name].types ? errors[name].types : {},
            [type]: message || true
        }
    } : {};
var generateId = ()=>{
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
};
var getFocusFieldName = (name, index, options = {})=>options.shouldFocus || isUndefined(options.shouldFocus) ? options.focusName || `${name}.${isUndefined(options.focusIndex) ? index : options.focusIndex}.` : '';
var getValidationModes = (mode)=>({
        isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
        isOnBlur: mode === VALIDATION_MODE.onBlur,
        isOnChange: mode === VALIDATION_MODE.onChange,
        isOnAll: mode === VALIDATION_MODE.all,
        isOnTouch: mode === VALIDATION_MODE.onTouched
    });
var isWatched = (name, _names, isBlurEvent)=>!isBlurEvent && (_names.watchAll || _names.watch.has(name) || [
        ..._names.watch
    ].some((watchName)=>name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly)=>{
    for (const key of fieldsNames || Object.keys(fields)){
        const field = get(fields, key);
        if (field) {
            const { _f, ...currentField } = field;
            if (_f) {
                if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
                    break;
                } else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
                    break;
                } else {
                    iterateFieldsByAction(currentField, action);
                }
            } else if (isObject(currentField)) {
                iterateFieldsByAction(currentField, action);
            }
        }
    }
};
var updateFieldArrayRootError = (errors, error, name)=>{
    const fieldArrayErrors = compact(get(errors, name));
    set(fieldArrayErrors, 'root', error[name]);
    set(errors, name, fieldArrayErrors);
    return errors;
};
var isFileInput = (element)=>element.type === 'file';
var isFunction = (value1)=>typeof value1 === 'function';
var isHTMLElement = (value1)=>{
    if (!isWeb) {
        return false;
    }
    const owner = value1 ? value1.ownerDocument : 0;
    return value1 instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMessage = (value1)=>isString(value1);
var isRadioInput = (element)=>element.type === 'radio';
var isRegex = (value1)=>value1 instanceof RegExp;
const defaultResult = {
    value: false,
    isValid: false
};
const validResult = {
    value: true,
    isValid: true
};
var getCheckboxValue = (options)=>{
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options.filter((option)=>option && option.checked && !option.disabled).map((option)=>option.value);
            return {
                value: values,
                isValid: !!values.length
            };
        }
        return options[0].checked && !options[0].disabled ? options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === '' ? validResult : {
            value: options[0].value,
            isValid: true
        } : validResult : defaultResult;
    }
    return defaultResult;
};
const defaultReturn = {
    isValid: false,
    value: null
};
var getRadioValue = (options)=>Array.isArray(options) ? options.reduce((previous, option)=>option && option.checked && !option.disabled ? {
            isValid: true,
            value: option.value
        } : previous, defaultReturn) : defaultReturn;
function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) || Array.isArray(result) && result.every(isMessage) || isBoolean(result) && !result) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref
        };
    }
}
var getValueAndMessage = (validationData)=>isObject(validationData) && !isRegex(validationData) ? validationData : {
        value: validationData,
        message: ''
    };
var validateField = async (field, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray)=>{
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled } = field._f;
    const inputValue = get(formValues, name);
    if (!mount || disabled) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message)=>{
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || '');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === '' || inputValue === '' || Array.isArray(inputValue) && !inputValue.length;
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength)=>{
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message,
            ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message)
        };
    };
    if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
        const { value: value1, message } = isMessage(required) ? {
            value: !!required,
            message: required
        } : getValueAndMessage(required);
        if (value1) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.required,
                message,
                ref: inputRef,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        } else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            const convertTimeToDate = (time)=>new Date(new Date().toDateString() + ' ' + time);
            const isTime = ref.type == 'time';
            const isWeek = ref.type == 'week';
            if (isString(maxOutput.value) && inputValue) {
                exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value) && inputValue) {
                exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.pattern,
                message,
                ref,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue, formValues);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        } else if (isObject(validate)) {
            let validationResult = {};
            for(const key in validate){
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message)
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult
                };
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};
var appendAt = (data, value1)=>[
        ...data,
        ...convertToArrayPayload(value1)
    ];
var fillEmptyArray = (value1)=>Array.isArray(value1) ? value1.map(()=>undefined) : undefined;
function insert(data, index, value1) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value1),
        ...data.slice(index)
    ];
}
var moveArrayAt = (data, from, to)=>{
    if (!Array.isArray(data)) {
        return [];
    }
    if (isUndefined(data[to])) {
        data[to] = undefined;
    }
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};
var prependAt = (data, value1)=>[
        ...convertToArrayPayload(value1),
        ...convertToArrayPayload(data)
    ];
function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [
        ...data
    ];
    for (const index of indexes){
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index)=>isUndefined(index) ? [] : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b)=>a - b));
var swapArrayAt = (data, indexA, indexB)=>{
    [data[indexA], data[indexB]] = [
        data[indexB],
        data[indexA]
    ];
};
function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while(index < length){
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function isEmptyArray(obj) {
    for(const key in obj){
        if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
            return false;
        }
    }
    return true;
}
function unset(object, path) {
    const paths = Array.isArray(path) ? path : isKey(path) ? [
        path
    ] : stringToPath(path);
    const childObject = paths.length === 1 ? object : baseGet(object, paths);
    const index = paths.length - 1;
    const key = paths[index];
    if (childObject) {
        delete childObject[key];
    }
    if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
        unset(object, paths.slice(0, -1));
    }
    return object;
}
var updateAt = (fieldValues, index, value1)=>{
    fieldValues[index] = value1;
    return fieldValues;
};
/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function useFieldArray(props) {
    const methods = useFormContext();
    const { control = methods.control, name, keyName = 'id', shouldUnregister } = props;
    const [fields, setFields] = React.useState(control._getFieldArray(name));
    const ids = React.useRef(control._getFieldArray(name).map(generateId));
    const _fieldIds = React.useRef(fields);
    const _name = React.useRef(name);
    const _actioned = React.useRef(false);
    _name.current = name;
    _fieldIds.current = fields;
    control._names.array.add(name);
    props.rules && control.register(name, props.rules);
    useSubscribe({
        next: ({ values, name: fieldArrayName })=>{
            if (fieldArrayName === _name.current || !fieldArrayName) {
                const fieldValues = get(values, _name.current);
                if (Array.isArray(fieldValues)) {
                    setFields(fieldValues);
                    ids.current = fieldValues.map(generateId);
                }
            }
        },
        subject: control._subjects.array
    });
    const updateValues = React.useCallback((updatedFieldArrayValues)=>{
        _actioned.current = true;
        control._updateFieldArray(name, updatedFieldArrayValues);
    }, [
        control,
        name
    ]);
    const append = (value1, options)=>{
        const appendValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = appendAt(control._getFieldArray(name), appendValue);
        control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = appendAt(ids.current, appendValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, appendAt, {
            argA: fillEmptyArray(value1)
        });
    };
    const prepend = (value1, options)=>{
        const prependValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = prependAt(control._getFieldArray(name), prependValue);
        control._names.focus = getFocusFieldName(name, 0, options);
        ids.current = prependAt(ids.current, prependValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, prependAt, {
            argA: fillEmptyArray(value1)
        });
    };
    const remove = (index)=>{
        const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);
        ids.current = removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, removeArrayAt, {
            argA: index
        });
    };
    const insert$1 = (index, value1, options)=>{
        const insertValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = getFocusFieldName(name, index, options);
        ids.current = insert(ids.current, index, insertValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, insert, {
            argA: index,
            argB: fillEmptyArray(value1)
        });
    };
    const swap = (indexA, indexB)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, swapArrayAt, {
            argA: indexA,
            argB: indexB
        }, false);
    };
    const move = (from, to)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        moveArrayAt(updatedFieldArrayValues, from, to);
        moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, moveArrayAt, {
            argA: from,
            argB: to
        }, false);
    };
    const update = (index, value1)=>{
        const updateValue = cloneObject(value1);
        const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, updateValue);
        ids.current = [
            ...updatedFieldArrayValues
        ].map((item, i)=>!item || i === index ? generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._updateFieldArray(name, updatedFieldArrayValues, updateAt, {
            argA: index,
            argB: updateValue
        }, true, false);
    };
    const replace = (value1)=>{
        const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value1));
        ids.current = updatedFieldArrayValues.map(generateId);
        updateValues([
            ...updatedFieldArrayValues
        ]);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._updateFieldArray(name, [
            ...updatedFieldArrayValues
        ], (data)=>data, {}, true, false);
    };
    React.useEffect(()=>{
        control._state.action = false;
        isWatched(name, control._names) && control._subjects.state.next({
            ...control._formState
        });
        if (_actioned.current && (!getValidationModes(control._options.mode).isOnSubmit || control._formState.isSubmitted)) {
            if (control._options.resolver) {
                control._executeSchema([
                    name
                ]).then((result)=>{
                    const error = get(result.errors, name);
                    const existingError = get(control._formState.errors, name);
                    if (existingError ? !error && existingError.type || error && (existingError.type !== error.type || existingError.message !== error.message) : error && error.type) {
                        error ? set(control._formState.errors, name, error) : unset(control._formState.errors, name);
                        control._subjects.state.next({
                            errors: control._formState.errors
                        });
                    }
                });
            } else {
                const field = get(control._fields, name);
                if (field && field._f && !(getValidationModes(control._options.reValidateMode).isOnSubmit && getValidationModes(control._options.mode).isOnSubmit)) {
                    validateField(field, control._formValues, control._options.criteriaMode === VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then((error)=>!isEmptyObject(error) && control._subjects.state.next({
                            errors: updateFieldArrayRootError(control._formState.errors, error, name)
                        }));
                }
            }
        }
        control._subjects.values.next({
            name,
            values: {
                ...control._formValues
            }
        });
        control._names.focus && iterateFieldsByAction(control._fields, (ref, key)=>{
            if (control._names.focus && key.startsWith(control._names.focus) && ref.focus) {
                ref.focus();
                return 1;
            }
            return;
        });
        control._names.focus = '';
        control._updateValid();
        _actioned.current = false;
    }, [
        fields,
        name,
        control
    ]);
    React.useEffect(()=>{
        !get(control._formValues, name) && control._updateFieldArray(name);
        return ()=>{
            (control._options.shouldUnregister || shouldUnregister) && control.unregister(name);
        };
    }, [
        name,
        control,
        keyName,
        shouldUnregister
    ]);
    return {
        swap: React.useCallback(swap, [
            updateValues,
            name,
            control
        ]),
        move: React.useCallback(move, [
            updateValues,
            name,
            control
        ]),
        prepend: React.useCallback(prepend, [
            updateValues,
            name,
            control
        ]),
        append: React.useCallback(append, [
            updateValues,
            name,
            control
        ]),
        remove: React.useCallback(remove, [
            updateValues,
            name,
            control
        ]),
        insert: React.useCallback(insert$1, [
            updateValues,
            name,
            control
        ]),
        update: React.useCallback(update, [
            updateValues,
            name,
            control
        ]),
        replace: React.useCallback(replace, [
            updateValues,
            name,
            control
        ]),
        fields: React.useMemo(()=>fields.map((field, index)=>({
                    ...field,
                    [keyName]: ids.current[index] || generateId()
                })), [
            fields,
            keyName
        ])
    };
}
var createSubject = ()=>{
    let _observers = [];
    const next = (value1)=>{
        for (const observer of _observers){
            observer.next && observer.next(value1);
        }
    };
    const subscribe = (observer)=>{
        _observers.push(observer);
        return {
            unsubscribe: ()=>{
                _observers = _observers.filter((o)=>o !== observer);
            }
        };
    };
    const unsubscribe = ()=>{
        _observers = [];
    };
    return {
        get observers () {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe
    };
};
var isPrimitive = (value1)=>isNullOrUndefined(value1) || !isObjectType(value1);
function deepEqual(object1, object2) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return object1 === object2;
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1){
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2) : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}
var isMultipleSelect = (element)=>element.type === `select-multiple`;
var isRadioOrCheckbox = (ref)=>isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref)=>isHTMLElement(ref) && ref.isConnected;
var objectHasFunction = (data)=>{
    for(const key in data){
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};
function markFieldsDirty(data, fields = {}) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for(const key in data){
            if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
                fields[key] = Array.isArray(data[key]) ? [] : {};
                markFieldsDirty(data[key], fields[key]);
            } else if (!isNullOrUndefined(data[key])) {
                fields[key] = true;
            }
        }
    }
    return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for(const key in data){
            if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
                if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
                    dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? markFieldsDirty(data[key], []) : {
                        ...markFieldsDirty(data[key])
                    };
                } else {
                    getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
                }
            } else {
                dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
            }
        }
    }
    return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues)=>getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));
var getFieldValueAs = (value1, { valueAsNumber, valueAsDate, setValueAs })=>isUndefined(value1) ? value1 : valueAsNumber ? value1 === '' ? NaN : value1 ? +value1 : value1 : valueAsDate && isString(value1) ? new Date(value1) : setValueAs ? setValueAs(value1) : value1;
function getFieldValue(_f) {
    const ref = _f.ref;
    if (_f.refs ? _f.refs.every((ref)=>ref.disabled) : ref.disabled) {
        return;
    }
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [
            ...ref.selectedOptions
        ].map(({ value: value1 })=>value1);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation)=>{
    const fields = {};
    for (const name of fieldsNames){
        const field = get(_fields, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [
            ...fieldsNames
        ],
        fields,
        shouldUseNativeValidation
    };
};
var getRuleValue = (rule)=>isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var hasValidation = (options)=>options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name
        };
    }
    const names = name.split('.');
    while(names.length){
        const fieldName = names.join('.');
        const field = get(_fields, fieldName);
        const foundError = get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return {
                name
            };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError
            };
        }
        names.pop();
    }
    return {
        name
    };
}
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode)=>{
    if (mode.isOnAll) {
        return false;
    } else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};
var unsetEmptyArray = (ref, name)=>!compact(get(ref, name)).length && unset(ref, name);
const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true
};
function createFormControl(props = {}, flushRootRender) {
    let _options = {
        ...defaultOptions,
        ...props
    };
    let _formState = {
        submitCount: 0,
        isDirty: false,
        isLoading: isFunction(_options.defaultValues),
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        touchedFields: {},
        dirtyFields: {},
        errors: _options.errors || {},
        disabled: _options.disabled || false
    };
    let _fields = {};
    let _defaultValues = isObject(_options.values) || isObject(_options.defaultValues) ? cloneObject(_options.values || _options.defaultValues) || {} : {};
    let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
    let _state = {
        action: false,
        mount: false,
        watch: false
    };
    let _names = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set()
    };
    let delayErrorCallback;
    let timer = 0;
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    };
    const _subjects = {
        values: createSubject(),
        array: createSubject(),
        state: createSubject()
    };
    const validationModeBeforeSubmit = getValidationModes(_options.mode);
    const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback)=>(wait)=>{
            clearTimeout(timer);
            timer = setTimeout(callback, wait);
        };
    const _updateValid = async (shouldUpdateValid)=>{
        if (_proxyFormState.isValid || shouldUpdateValid) {
            const isValid = _options.resolver ? isEmptyObject((await _executeSchema()).errors) : await executeBuiltInValidation(_fields, true);
            if (isValid !== _formState.isValid) {
                _subjects.state.next({
                    isValid
                });
            }
        }
    };
    const _updateIsValidating = (value1)=>_proxyFormState.isValidating && _subjects.state.next({
            isValidating: value1
        });
    const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true)=>{
        if (args && method) {
            _state.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                const fieldValues = method(get(_fields, name), args.argA, args.argB);
                shouldSetValues && set(_fields, name, fieldValues);
            }
            if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
                const errors = method(get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if (_proxyFormState.touchedFields && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                name,
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid
            });
        } else {
            set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error)=>{
        set(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors
        });
    };
    const _setErrors = (errors)=>{
        _formState.errors = errors;
        _subjects.state.next({
            errors: _formState.errors,
            isValid: false
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value1, ref)=>{
        const field = get(_fields, name);
        if (field) {
            const defaultValue = get(_formValues, name, isUndefined(value1) ? get(_defaultValues, name) : value1);
            isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
            _state.mount && _updateValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender)=>{
        let shouldUpdateField = false;
        let isPreviousDirty = false;
        const output = {
            name
        };
        const disabledField = !!(get(_fields, name) && get(_fields, name)._f.disabled);
        if (!isBlurEvent || shouldDirty) {
            if (_proxyFormState.isDirty) {
                isPreviousDirty = _formState.isDirty;
                _formState.isDirty = output.isDirty = _getDirty();
                shouldUpdateField = isPreviousDirty !== output.isDirty;
            }
            const isCurrentFieldPristine = disabledField || deepEqual(get(_defaultValues, name), fieldValue);
            isPreviousDirty = !!(!disabledField && get(_formState.dirtyFields, name));
            isCurrentFieldPristine || disabledField ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
            output.dirtyFields = _formState.dirtyFields;
            shouldUpdateField = shouldUpdateField || _proxyFormState.dirtyFields && isPreviousDirty !== !isCurrentFieldPristine;
        }
        if (isBlurEvent) {
            const isPreviousFieldTouched = get(_formState.touchedFields, name);
            if (!isPreviousFieldTouched) {
                set(_formState.touchedFields, name, isBlurEvent);
                output.touchedFields = _formState.touchedFields;
                shouldUpdateField = shouldUpdateField || _proxyFormState.touchedFields && isPreviousFieldTouched !== isBlurEvent;
            }
        }
        shouldUpdateField && shouldRender && _subjects.state.next(output);
        return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState)=>{
        const previousFieldError = get(_formState.errors, name);
        const shouldUpdateValid = _proxyFormState.isValid && isBoolean(isValid) && _formState.isValid !== isValid;
        if (props.delayError && error) {
            delayErrorCallback = debounce(()=>updateErrors(name, error));
            delayErrorCallback(props.delayError);
        } else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
        }
        if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...shouldUpdateValid && isBoolean(isValid) ? {
                    isValid
                } : {},
                errors: _formState.errors,
                name
            };
            _formState = {
                ..._formState,
                ...updatedFormState
            };
            _subjects.state.next(updatedFormState);
        }
        _updateIsValidating(false);
    };
    const _executeSchema = async (name)=>_options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
    const executeSchemaAndUpdateState = async (names)=>{
        const { errors } = await _executeSchema(names);
        if (names) {
            for (const name of names){
                const error = get(errors, name);
                error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
            }
        } else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true
    })=>{
        for(const name in fields){
            const field = fields[name];
            if (field) {
                const { _f, ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const fieldError = await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) {
                            break;
                        }
                    }
                    !shouldOnlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
                }
                fieldValue && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
            }
        }
        return context.valid;
    };
    const _removeUnmounted = ()=>{
        for (const name of _names.unMount){
            const field = get(_fields, name);
            field && (field._f.refs ? field._f.refs.every((ref)=>!live(ref)) : !live(field._f.ref)) && unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data)=>(name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal)=>generateWatchOutput(names, _names, {
            ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? {
                [names]: defaultValue
            } : defaultValue
        }, isGlobal, defaultValue);
    const _getFieldArray = (name)=>compact(get(_state.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value1, options = {})=>{
        const field = get(_fields, name);
        let fieldValue = value1;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value1, fieldReference));
                fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value1) ? '' : value1;
                if (isMultipleSelect(fieldReference.ref)) {
                    [
                        ...fieldReference.ref.options
                    ].forEach((optionRef)=>optionRef.selected = fieldValue.includes(optionRef.value));
                } else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.length > 1 ? fieldReference.refs.forEach((checkboxRef)=>(!checkboxRef.defaultChecked || !checkboxRef.disabled) && (checkboxRef.checked = Array.isArray(fieldValue) ? !!fieldValue.find((data)=>data === checkboxRef.value) : fieldValue === checkboxRef.value)) : fieldReference.refs[0] && (fieldReference.refs[0].checked = !!fieldValue);
                    } else {
                        fieldReference.refs.forEach((radioRef)=>radioRef.checked = radioRef.value === fieldValue);
                    }
                } else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                } else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.values.next({
                            name,
                            values: {
                                ..._formValues
                            }
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value1, options)=>{
        for(const fieldKey in value1){
            const fieldValue = value1[fieldKey];
            const fieldName = `${name}.${fieldKey}`;
            const field = get(_fields, fieldName);
            (_names.array.has(name) || !isPrimitive(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value1, options = {})=>{
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value1);
        set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: {
                    ..._formValues
                }
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) && options.shouldDirty) {
                _subjects.state.next({
                    name,
                    dirtyFields: getDirtyFields(_defaultValues, _formValues),
                    isDirty: _getDirty(name, cloneValue)
                });
            }
        } else {
            field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
        }
        isWatched(name, _names) && _subjects.state.next({
            ..._formState
        });
        _subjects.values.next({
            name,
            values: {
                ..._formValues
            }
        });
        !_state.mount && flushRootRender();
    };
    const onChange = async (event)=>{
        const target = event.target;
        let name = target.name;
        let isFieldValueUpdated = true;
        const field = get(_fields, name);
        const getCurrentFieldValue = ()=>target.type ? getFieldValue(field._f) : getEventValue(event);
        const _updateIsFieldValueUpdated = (fieldValue)=>{
            isFieldValueUpdated = Number.isNaN(fieldValue) || fieldValue === get(_formValues, name, fieldValue);
        };
        if (field) {
            let error;
            let isValid;
            const fieldValue = getCurrentFieldValue();
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                field._f.onBlur && field._f.onBlur(event);
                delayErrorCallback && delayErrorCallback(0);
            } else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent && _subjects.values.next({
                name,
                type: event.type,
                values: {
                    ..._formValues
                }
            });
            if (shouldSkipValidation) {
                _proxyFormState.isValid && _updateValid();
                return shouldRender && _subjects.state.next({
                    name,
                    ...watched ? {} : fieldState
                });
            }
            !isBlurEvent && watched && _subjects.state.next({
                ..._formState
            });
            _updateIsValidating(true);
            if (_options.resolver) {
                const { errors } = await _executeSchema([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                    const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                    error = errorLookupResult.error;
                    name = errorLookupResult.name;
                    isValid = isEmptyObject(errors);
                }
            } else {
                error = (await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    if (error) {
                        isValid = false;
                    } else if (_proxyFormState.isValid) {
                        isValid = await executeBuiltInValidation(_fields, true);
                    }
                }
            }
            if (isFieldValueUpdated) {
                field._f.deps && trigger(field._f.deps);
                shouldRenderByError(name, isValid, error, fieldState);
            }
        }
    };
    const _focusInput = (ref, key)=>{
        if (get(_formState.errors, key) && ref.focus) {
            ref.focus();
            return 1;
        }
        return;
    };
    const trigger = async (name, options = {})=>{
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        _updateIsValidating(true);
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name ? !fieldNames.some((name)=>get(errors, name)) : isValid;
        } else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName)=>{
                const field = get(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? {
                    [fieldName]: field
                } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _updateValid();
        } else {
            validationResult = isValid = await executeBuiltInValidation(_fields);
        }
        _subjects.state.next({
            ...!isString(name) || _proxyFormState.isValid && isValid !== _formState.isValid ? {} : {
                name
            },
            ..._options.resolver || !name ? {
                isValid
            } : {},
            errors: _formState.errors,
            isValidating: false
        });
        options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames)=>{
        const values = {
            ..._defaultValues,
            ..._state.mount ? _formValues : {}
        };
        return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name)=>get(values, name));
    };
    const getFieldState = (name, formState)=>({
            invalid: !!get((formState || _formState).errors, name),
            isDirty: !!get((formState || _formState).dirtyFields, name),
            isTouched: !!get((formState || _formState).touchedFields, name),
            error: get((formState || _formState).errors, name)
        });
    const clearErrors = (name)=>{
        name && convertToArrayPayload(name).forEach((inputName)=>unset(_formState.errors, inputName));
        _subjects.state.next({
            errors: name ? _formState.errors : {}
        });
    };
    const setError = (name, error, options)=>{
        const ref = (get(_fields, name, {
            _f: {}
        })._f || {}).ref;
        set(_formState.errors, name, {
            ...error,
            ref
        });
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue)=>isFunction(name) ? _subjects.values.subscribe({
            next: (payload)=>name(_getWatch(undefined, defaultValue), payload)
        }) : _getWatch(name, defaultValue, true);
    const unregister = (name, options = {})=>{
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount){
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (!options.keepValue) {
                unset(_fields, fieldName);
                unset(_formValues, fieldName);
            }
            !options.keepError && unset(_formState.errors, fieldName);
            !options.keepDirty && unset(_formState.dirtyFields, fieldName);
            !options.keepTouched && unset(_formState.touchedFields, fieldName);
            !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
        }
        _subjects.values.next({
            values: {
                ..._formValues
            }
        });
        _subjects.state.next({
            ..._formState,
            ...!options.keepDirty ? {} : {
                isDirty: _getDirty()
            }
        });
        !options.keepIsValid && _updateValid();
    };
    const _updateDisabledField = ({ disabled, name, field, fields, value: value1 })=>{
        if (isBoolean(disabled)) {
            const inputValue = disabled ? undefined : isUndefined(value1) ? getFieldValue(field ? field._f : get(fields, name)._f) : value1;
            set(_formValues, name, inputValue);
            updateTouchAndDirty(name, inputValue, false, false, true);
        }
    };
    const register = (name, options = {})=>{
        let field = get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled);
        set(_fields, name, {
            ...field || {},
            _f: {
                ...field && field._f ? field._f : {
                    ref: {
                        name
                    }
                },
                name,
                mount: true,
                ...options
            }
        });
        _names.mount.add(name);
        if (field) {
            _updateDisabledField({
                field,
                disabled: options.disabled,
                name,
                value: options.value
            });
        } else {
            updateValidAndValue(name, true, options.value);
        }
        return {
            ...disabledIsDefined ? {
                disabled: options.disabled
            } : {},
            ..._options.progressive ? {
                required: !!options.required,
                min: getRuleValue(options.min),
                max: getRuleValue(options.max),
                minLength: getRuleValue(options.minLength),
                maxLength: getRuleValue(options.maxLength),
                pattern: getRuleValue(options.pattern)
            } : {},
            name,
            onChange,
            onBlur: onChange,
            ref: (ref)=>{
                if (ref) {
                    register(name, options);
                    field = get(_fields, name);
                    const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll('input,select,textarea')[0] || ref : ref : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox ? refs.find((option)=>option === fieldRef) : fieldRef === field._f.ref) {
                        return;
                    }
                    set(_fields, name, {
                        _f: {
                            ...field._f,
                            ...radioOrCheckbox ? {
                                refs: [
                                    ...refs.filter(live),
                                    fieldRef,
                                    ...Array.isArray(get(_defaultValues, name)) ? [
                                        {}
                                    ] : []
                                ],
                                ref: {
                                    type: fieldRef.type,
                                    name
                                }
                            } : {
                                ref: fieldRef
                            }
                        }
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                } else {
                    field = get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
                }
            }
        };
    };
    const _focusError = ()=>_options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
    const _disableForm = (disabled)=>{
        if (isBoolean(disabled)) {
            _subjects.state.next({
                disabled
            });
            iterateFieldsByAction(_fields, (ref, name)=>{
                let requiredDisabledState = disabled;
                const currentField = get(_fields, name);
                if (currentField && isBoolean(currentField._f.disabled)) {
                    requiredDisabledState || (requiredDisabledState = currentField._f.disabled);
                }
                ref.disabled = requiredDisabledState;
            }, 0, false);
        }
    };
    const handleSubmit = (onValid, onInvalid)=>async (e)=>{
            let onValidError = undefined;
            if (e) {
                e.preventDefault && e.preventDefault();
                e.persist && e.persist();
            }
            let fieldValues = cloneObject(_formValues);
            _subjects.state.next({
                isSubmitting: true
            });
            if (_options.resolver) {
                const { errors, values } = await _executeSchema();
                _formState.errors = errors;
                fieldValues = values;
            } else {
                await executeBuiltInValidation(_fields);
            }
            unset(_formState.errors, 'root');
            if (isEmptyObject(_formState.errors)) {
                _subjects.state.next({
                    errors: {}
                });
                try {
                    await onValid(fieldValues, e);
                } catch (error) {
                    onValidError = error;
                }
            } else {
                if (onInvalid) {
                    await onInvalid({
                        ..._formState.errors
                    }, e);
                }
                _focusError();
                setTimeout(_focusError);
            }
            _subjects.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
                submitCount: _formState.submitCount + 1,
                errors: _formState.errors
            });
            if (onValidError) {
                throw onValidError;
            }
        };
    const resetField = (name, options = {})=>{
        if (get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, cloneObject(get(_defaultValues, name)));
            } else {
                setValue(name, options.defaultValue);
                set(_defaultValues, name, cloneObject(options.defaultValue));
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _updateValid();
            }
            _subjects.state.next({
                ..._formState
            });
        }
    };
    const _reset = (formValues, keepStateOptions = {})=>{
        const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const values = formValues && !isEmptyObject(formValues) ? cloneUpdatedValues : _defaultValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues) {
                for (const fieldName of _names.mount){
                    get(_formState.dirtyFields, fieldName) ? set(values, fieldName, get(_formValues, fieldName)) : setValue(fieldName, get(values, fieldName));
                }
            } else {
                if (isWeb && isUndefined(formValues)) {
                    for (const name of _names.mount){
                        const field = get(_fields, name);
                        if (field && field._f) {
                            const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
                            if (isHTMLElement(fieldReference)) {
                                const form = fieldReference.closest('form');
                                if (form) {
                                    form.reset();
                                    break;
                                }
                            }
                        }
                    }
                }
                _fields = {};
            }
            _formValues = props.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
            _subjects.array.next({
                values: {
                    ...values
                }
            });
            _subjects.values.next({
                values: {
                    ...values
                }
            });
        }
        _names = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: ''
        };
        !_state.mount && flushRootRender();
        _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues;
        _state.watch = !!props.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
            isDirty: keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
            dirtyFields: keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : {},
            touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
            errors: keepStateOptions.keepErrors ? _formState.errors : {},
            isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
            isSubmitting: false
        });
    };
    const reset = (formValues, keepStateOptions)=>_reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
    const setFocus = (name, options = {})=>{
        const field = get(_fields, name);
        const fieldReference = field && field._f;
        if (fieldReference) {
            const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
            if (fieldRef.focus) {
                fieldRef.focus();
                options.shouldSelect && fieldRef.select();
            }
        }
    };
    const _updateFormState = (updatedFormState)=>{
        _formState = {
            ..._formState,
            ...updatedFormState
        };
    };
    const _resetDefaultValues = ()=>isFunction(_options.defaultValues) && _options.defaultValues().then((values)=>{
            reset(values, _options.resetOptions);
            _subjects.state.next({
                isLoading: false
            });
        });
    return {
        control: {
            register,
            unregister,
            getFieldState,
            handleSubmit,
            setError,
            _executeSchema,
            _getWatch,
            _getDirty,
            _updateValid,
            _removeUnmounted,
            _updateFieldArray,
            _updateDisabledField,
            _getFieldArray,
            _reset,
            _resetDefaultValues,
            _updateFormState,
            _disableForm,
            _subjects,
            _proxyFormState,
            _setErrors,
            get _fields () {
                return _fields;
            },
            get _formValues () {
                return _formValues;
            },
            get _state () {
                return _state;
            },
            set _state (value){
                _state = value;
            },
            get _defaultValues () {
                return _defaultValues;
            },
            get _names () {
                return _names;
            },
            set _names (value){
                _names = value;
            },
            get _formState () {
                return _formState;
            },
            set _formState (value){
                _formState = value;
            },
            get _options () {
                return _options;
            },
            set _options (value){
                _options = {
                    ..._options,
                    ...value
                };
            }
        },
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState
    };
}
/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */ function useForm(props = {}) {
    const _formControl = React.useRef();
    const _values = React.useRef();
    const [formState, updateFormState] = React.useState({
        isDirty: false,
        isValidating: false,
        isLoading: isFunction(props.defaultValues),
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        errors: props.errors || {},
        disabled: props.disabled || false,
        defaultValues: isFunction(props.defaultValues) ? undefined : props.defaultValues
    });
    if (!_formControl.current) {
        _formControl.current = {
            ...createFormControl(props, ()=>updateFormState((formState)=>({
                        ...formState
                    }))),
            formState
        };
    }
    const control = _formControl.current.control;
    control._options = props;
    useSubscribe({
        subject: control._subjects.state,
        next: (value1)=>{
            if (shouldRenderFormState(value1, control._proxyFormState, control._updateFormState, true)) {
                updateFormState({
                    ...control._formState
                });
            }
        }
    });
    React.useEffect(()=>control._disableForm(props.disabled), [
        control,
        props.disabled
    ]);
    React.useEffect(()=>{
        if (control._proxyFormState.isDirty) {
            const isDirty = control._getDirty();
            if (isDirty !== formState.isDirty) {
                control._subjects.state.next({
                    isDirty
                });
            }
        }
    }, [
        control,
        formState.isDirty
    ]);
    React.useEffect(()=>{
        if (props.values && !deepEqual(props.values, _values.current)) {
            control._reset(props.values, control._options.resetOptions);
            _values.current = props.values;
            updateFormState((state)=>({
                    ...state
                }));
        } else {
            control._resetDefaultValues();
        }
    }, [
        props.values,
        control
    ]);
    React.useEffect(()=>{
        if (props.errors) {
            control._setErrors(props.errors);
        }
    }, [
        props.errors,
        control
    ]);
    React.useEffect(()=>{
        if (!control._state.mount) {
            control._updateValid();
            control._state.mount = true;
        }
        if (control._state.watch) {
            control._state.watch = false;
            control._subjects.state.next({
                ...control._formState
            });
        }
        control._removeUnmounted();
    });
    React.useEffect(()=>{
        props.shouldUnregister && control._subjects.values.next({
            values: control._getWatch()
        });
    }, [
        props.shouldUnregister,
        control
    ]);
    _formControl.current.formState = getProxyFormState(formState, control);
    return _formControl.current;
}

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
    }
    return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
    randomUUID
};

function v4(options, buf, offset) {
    if (native.randomUUID && !buf && !options) {
        return native.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return unsafeStringify(rnds);
}

const ToolTipSquare = (props)=>{
    return React.createElement("div", {
        style: {
            visibility: props.show ? 'visible' : 'hidden',
            top: 'calc(-100% - 4px)',
            left: '150%'
        },
        className: "bg-white text-black pl-4 pr-4 shadow-lg rounded-md w-80 absolute z-50"
    }, React.createElement("div", {
        style: {
            borderTop: '10px transparent'
        },
        className: "w-0 h-0\n            absolute\n            left-[-12px]\n            border-t-[10px] border-t-transparent\n            border-r-[12px] border-r-white\n            border-b-[10px] border-b-transparent"
    }), React.createElement("p", {
        className: "font-normal text-[18px]"
    }, props.text));
};
const InfoIcon = ()=>{
    return React.createElement("div", {
        style: {
            border: '2px solid #ababab'
        },
        className: "\n      ms-2 text-sm flex hover:cursor-pointer\n      cursor: pointer size-6 rounded-full justify-center align-middle items-center"
    }, React.createElement("span", {
        className: "text-[#ababab]"
    }, 'i'));
};
const Tooltip = (props)=>{
    const [show, hasToShow] = React.useState(false);
    return React.createElement("div", {
        onMouseEnter: ()=>hasToShow(true),
        onMouseLeave: ()=>hasToShow(false),
        className: "relative"
    }, React.createElement(InfoIcon, null), React.createElement(ToolTipSquare, {
        text: props.text,
        show: show
    }));
};

const Title = (props)=>{
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    return React.createElement("div", {
        onClick: handleClick,
        className: `${baseStyles} font-bold text-xl p-0 m-0 flex flex-row items-center `
    }, React.createElement("p", null, props.props.label), props.props.guide_text ? React.createElement(Tooltip, {
        text: props.props.guide_text
    }) : null);
};
var Title$1 = React.memo(Title);

const TotalizerContext = React.createContext(undefined);
const TotalizerContextProvider = ({ children })=>{
    const [inputValues, setInputValues] = React.useState({});
    const handleInputChange = (data)=>{
        console.log('received data', data);
        setInputValues((prev)=>Object.assign(Object.assign({}, prev), {
                [data.id]: Number(data.value)
            }));
    };
    const getTotal = ()=>{
        const values = Object.values(inputValues);
        console.log('values', values);
        if (values.length > 0) {
            const sum = values.reduce((acc, currentValue)=>acc + currentValue, 0);
            if (isNaN(sum)) {
                return 0;
            }
            return numberWithCommas(sum);
        }
        return 0;
    };
    const values = {
        handleInputChange,
        total: getTotal
    };
    return React.createElement(TotalizerContext.Provider, {
        value: values
    }, children);
};

const Input = (props)=>{
    // const name = useRef(props.props.name ?? '');
    var _a, _b, _c;
    const detailCtx = React.useContext(TotalizerContext);
    const name = React.useRef(props.detailed ? `${props.detailed.name}.${props.detailed.index}.${props.props.name}` : (_a = props.props.name) !== null && _a !== void 0 ? _a : '-');
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    const _handleChange = (e)=>{
        if (detailCtx && props.props.totalize) {
            detailCtx.handleInputChange({
                id: props.id,
                value: !isNaN(e.target.value) ? parseFloat(e.target.value.replace(/[.,]/g, '')) : 0
            });
        }
    };
    const { register, formState: { errors } } = useFormContext();
    return React.createElement("div", {
        className: `${baseStyles} `,
        onClick: handleClick
    }, React.createElement("div", {
        className: "relative"
    }, React.createElement("label", {
        className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        htmlFor: name.current
    }, React.createElement("div", {
        className: "flex flex-row place-items-center h-5 "
    }, props.props.label, props.props.guide_text ? React.createElement(Tooltip, {
        text: props.props.guide_text
    }) : null)), React.createElement("input", Object.assign({}, register(name.current, Object.assign({}, props.props.validations)), {
        onChange: _handleChange,
        className: "w-full rounded py-3 px-4\n          border-gray-500 border-2 border-solid\n          focus:ring-transparent focus:border-pink-500"
    })), React.createElement("p", {
        className: "text-red-500 text-xs italic pt-2"
    }, (_c = (_b = errors[name.current]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.toString())));
};

function Add(props) {
    // Context
    const useDragDropContext = React.useContext(DragDropContext);
    if (!useDragDropContext) {
        throw new Error('DragDrop Context is not implemented');
    }
    React.useEffect(()=>{
        if (props.parent.id && props.id && !isNaN(props.position)) {
            useDragDropContext.addDropable({
                parent: props.parent.id,
                id: props.id,
                position: props.position
            });
        }
    }, [
        props.parent,
        props.id,
        props.position
    ]);
    if (props.parent.type === 'container') {
        return React.createElement(React.Fragment, null);
    }
    return React.createElement("div", {
        className: ""
    }, React.createElement("div", {
        className: "rounded-md relative"
    }, React.createElement(ConnectedDroppable$1, {
        droppableId: props.id
    }, (provided, snapshot)=>React.createElement("div", {
            ref: provided.innerRef,
            className: `droppable-area transition-all h-[1px] ${snapshot.isDraggingOver ? 'bg-pink-300 h-[50px]' : 'bg-pink-200'}`
        }, provided.placeholder))));
}

const Tabs = (props)=>{
    var _a;
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    if (((_a = props.props) === null || _a === void 0 ? void 0 : _a.children.length) == 0) {
        return React.createElement("div", {
            onClick: handleClick,
            className: `${baseStyles} p-6`
        });
    }
    const [activeTab, setActiveTab] = React.useState(0);
    return React.createElement("div", {
        onClick: handleClick,
        className: `${baseStyles} min-h-12`
    }, React.createElement("div", {
        className: "border-b border-gray-200"
    }, React.createElement("nav", {
        className: "-mb-px flex gap-6",
        "aria-label": "Tabs"
    }, props.props.children.map((tab, index)=>React.createElement("a", {
            key: crypto.randomUUID(),
            onClick: ()=>setActiveTab(index),
            className: `
                  ${activeTab === index ? 'font-msedium  text-black  border-pink-500' : ' text-gray-500  hover:text-gray-700 hover:border-gray-300'}
                  shrink-0 border-b-2  px-1 pb-4 hover:cursor-pointer text-md  `
        }, tab.props.label)))), props.props.children.map((tab, index)=>{
        var _a;
        return React.createElement("div", {
            className: `${activeTab === index ? 'block' : 'hidden'} p-4`
        }, React.createElement(Reenderizer, {
            data: [
                tab
            ],
            isEditing: (_a = props.isEditing) !== null && _a !== void 0 ? _a : false,
            parent: {
                type: 'tabs',
                id: props.id || ''
            }
        }));
    }));
};

const Root = (props)=>{
    return React.createElement("div", {
        className: ``
    }, props.children);
};
var Root$1 = React.memo(Root);

const Paragraph = (props)=>{
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    return React.createElement("p", {
        onClick: handleClick,
        className: `${baseStyles} m-0 p-0 font-medium text-md`
    }, props.props.text);
};

const Select = (props)=>{
    var _a, _b, _c;
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    const [name, setName] = React.useState(props.props.name || '-');
    // States
    const [query, setQuery] = React.useState('');
    const [filteredOptions, setFilteredOptions] = React.useState((_a = props.props.option_values) === null || _a === void 0 ? void 0 : _a.filter((i)=>i.value != 'add'));
    const [isOpen, setIsOpen] = React.useState(false);
    // Refs
    const wrapperRef = React.useRef(null);
    // Contexts
    const { register, setValue, trigger, formState: { errors } } = useFormContext();
    // Effects
    React.useEffect(()=>{
        const handleClickOutside = (event)=>{
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        wrapperRef
    ]);
    const handleInputChange = (e)=>{
        var _a;
        const inputValue = e.target.value;
        setQuery(inputValue);
        const filtered = (_a = props.props.option_values) === null || _a === void 0 ? void 0 : _a.filter((option)=>option.label.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredOptions(filtered);
        setIsOpen(true);
    };
    const handleOptionSelect = (option)=>{
        setQuery(option.label);
        setIsOpen(false);
        setValue(name, option.value);
        trigger(name);
    // if (props.dependingForm) {
    //   props.test(option.value);
    // }
    };
    return React.createElement("div", {
        onClick: handleClick,
        className: `${baseStyles} y-2 relative`,
        ref: wrapperRef
    }, React.createElement("label", {
        className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        htmlFor: name
    }, React.createElement("div", {
        className: "flex flex-row place-items-center h-5 "
    }, props.props.label, props.props.guide_text ? React.createElement(Tooltip, {
        text: props.props.guide_text
    }) : null)), React.createElement("div", null, React.createElement("input", Object.assign({}, register(name, Object.assign({}, props.props.validations)), {
        type: "text",
        className: "w-full rounded py-3 px-4\n          border-gray-500 border-2 border-solid\n          focus:ring-transparent focus:border-pink-500",
        placeholder: "Buscar...",
        value: query,
        autoComplete: "off",
        onChange: handleInputChange,
        onClick: ()=>setIsOpen(true)
    })), isOpen && React.createElement("ul", {
        className: "\n            list-none p-0 hove1r:cursor-pointer absolute z-10 left-0 w-full mt-2 border rounded bg-white shadow-md"
    }, filteredOptions === null || filteredOptions === void 0 ? void 0 : filteredOptions.map((option, index)=>React.createElement("li", {
            key: index,
            className: "py-2 px-4 cursor-pointer hover:bg-pink-200",
            onClick: ()=>handleOptionSelect(option)
        }, option.label))), React.createElement("p", {
        className: "text-red-500 text-xs italic pt-2"
    }, (_c = (_b = errors[name]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.toString())));
};

function TextArea(props) {
    var _a, _b, _c;
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    const { register, formState: { errors } } = useFormContext();
    const [name, _] = React.useState(props.detailed ? `${props.detailed.name}.${props.detailed.index}.${props.props.name}` : (_a = props.props.name) !== null && _a !== void 0 ? _a : '-');
    return React.createElement("div", {
        onClick: handleClick,
        className: `${baseStyles} py-2`
    }, React.createElement("label", {
        className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        htmlFor: name
    }, props.props.label), React.createElement("div", {
        className: "relative"
    }, React.createElement("textarea", Object.assign({}, register(name, Object.assign({}, props.props.validations)), {
        // {...props}
        placeholder: props.props.placeholder,
        className: "appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    }))), React.createElement("p", {
        className: "text-red-500 text-xs italic pt-2"
    }, (_c = (_b = errors[name]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.toString()));
}

const Container = (props)=>{
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    return React.createElement("div", {
        className: `${baseStyles} w-full grid gap-2`,
        style: {
            gridTemplateColumns: `repeat(${props.props.size}, minmax(0, 1fr))`
        },
        onClick: handleClick
    }, props === null || props === void 0 ? void 0 : props.children, props.isEditing && React.createElement("div", {
        className: "pt-4 pb-4 flex flex-col justify-center min-h-14"
    }, React.createElement(Add, {
        parent: {
            id: props.id || '',
            type: 'root'
        },
        id: v4(),
        key: v4(),
        position: 1000
    })));
};
var Container$1 = React.memo(Container, compareFormComponent);

const SubTitle = (props)=>{
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    return React.createElement("p", {
        onClick: handleClick,
        className: `${baseStyles} font-bold text-sm  flex flex-row items-center `
    }, props.props.label, props.props.guide_text ? React.createElement(Tooltip, {
        text: props.props.guide_text
    }) : null);
};
var SubTitle$1 = React.memo(SubTitle);

const DetailedWrapper = (props)=>React.createElement(TotalizerContextProvider, null, React.createElement(Detailed, Object.assign({}, props)));
const Detailed = (props)=>{
    // Context //Perfecto para usar el nuevo hook use y hacer el contexto opcional.
    const detailCtx = React.useContext(TotalizerContext);
    // Hooks
    const { control, getValues, formState: { errors } } = useFormContext();
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    const { append, remove } = useFieldArray({
        control,
        name: props.props.name
    });
    const addItem = ()=>{
        append({});
    };
    const removeItem = (position)=>{
        remove(position);
    };
    return React.createElement("div", {
        onClick: handleClick,
        className: `${baseStyles} `
    }, React.createElement(React.Fragment, null, props.props.totalizar ? React.createElement("div", {
        className: "flex flex-col items-end"
    }, React.createElement(SubTitle$1, {
        id: crypto.randomUUID(),
        type: "subtitle",
        props: {
            label: `Total ${detailCtx.inputName}: ${detailCtx.total()}`
        }
    })) : null, React.createElement("div", {
        className: `${props.isEditing ? 'border border-dashed min-h-10 py-2 my-2 border-gray-800' : ''} `
    }, Array(props.isEditing || !getValues(props.props.name) ? 1 : getValues(props.props.name).length).fill('').map((_, index)=>{
        return React.createElement(React.Fragment, null, React.createElement("div", null, props.children[0] && React.cloneElement(props.children[0]), props.children[1] && React.cloneElement(props.children[1], {
            detailed: {
                name: props.props.name,
                index
            }
        })), React.createElement("button", {
            onClick: ()=>removeItem(index),
            className: "mb-4 h-12 flex-1 self-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2",
            type: "button"
        }, "Eliminar"));
    }))), !props.isEditing && React.createElement("div", {
        className: "hover:cursor-pointer hover:underline",
        onClick: addItem
    }, "Agregar un item"));
};

const CheckBox = (props)=>{
    var _a, _b, _c;
    const name = React.useRef(props.detailed ? `${props.detailed.name}.${props.detailed.index}.${props.props.name}` : (_a = props.props.name) !== null && _a !== void 0 ? _a : '-');
    const { register, formState: { errors } } = useFormContext();
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    return React.createElement("div", {
        onClick: handleClick,
        className: `${baseStyles} py-2 `
    }, React.createElement("label", {
        className: "md:w-2/3 block text-gray-700 font-bold hover:cursor-pointer select-none"
    }, React.createElement("input", Object.assign({}, register(name.current, Object.assign({}, props.props.validations)), {
        className: "mr-2 leading-tight",
        type: "checkbox"
    })), React.createElement("span", {
        className: "text-sm"
    }, props.props.label)), React.createElement("p", {
        className: "text-red-500 text-xs italic pt-2"
    }, (_c = (_b = errors[name.current]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.toString()));
};

const Totalize = (props)=>{
    const totalizeCtx = React.useContext(TotalizerContext);
    // Hooks
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    return React.createElement("div", {
        onClick: handleClick,
        className: `
      ${baseStyles} my-4 w-full pt-2 pb-2 @container`
    }, React.createElement("div", {
        className: "grid"
    }, props.children), React.createElement("div", {
        className: "pt-2 flex flex-1 justify-end "
    }, React.createElement(SubTitle$1, {
        id: crypto.randomUUID(),
        type: "subtitle",
        props: {
            label: `Total: ${totalizeCtx.total()}`
        }
    })));
};
var Totalize$1 = React.memo(Totalize);

const TotalizeWrapper = (props)=>React.createElement(TotalizerContextProvider, null, React.createElement(Totalize$1, Object.assign({}, props)));

const RadioButtonContainer = (props)=>{
    var _a;
    const { handleClick, baseStyles } = useItem({
        item: props.id,
        type: props.type,
        parent: props.parent
    });
    if (((_a = props.props) === null || _a === void 0 ? void 0 : _a.children.length) == 0) {
        return React.createElement("div", {
            onClick: handleClick,
            className: `${baseStyles} p-6`
        });
    }
    return React.createElement("div", {
        onClick: handleClick,
        className: `${baseStyles} py-2 flex`
    }, props.props.children.map((checkbox, index)=>React.createElement("div", {
            className: "mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]"
        }, React.createElement("input", {
            className: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]",
            type: "radio",
            name: "inlineRadioOptions",
            id: checkbox.id,
            value: "option1"
        }), React.createElement("label", {
            className: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
            htmlFor: checkbox.id
        }, checkbox.props.label))));
};

const componentMapping = {
    root: Root$1,
    title: Title$1,
    subtitle: SubTitle$1,
    card: Card$1,
    input: Input,
    paragraph: Paragraph,
    textarea: TextArea,
    container: Container$1,
    select: Select,
    detailed: DetailedWrapper,
    checkbox: CheckBox,
    radio_buttons: RadioButtonContainer,
    totalize: TotalizeWrapper,
    // radio: RadioButton,
    // button: Button,
    tabs: Tabs,
    tab: Root$1
};
const Reenderizer = ({ data, isEditing, parent, detailed })=>{
    React.useEffect(()=>{}, []);
    return React.createElement(React.Fragment, null, data.map((item, index)=>{
        const Component = componentMapping[item.type];
        if (Component) {
            const commonProps = {
                props: Object.assign({}, item.props),
                key: item.id,
                id: item.id,
                type: item.type,
                parent: parent,
                isEditing: isEditing !== null && isEditing !== void 0 ? isEditing : false,
                position: index,
                detailed: detailed
            };
            return React.createElement(React.Fragment, null, React.createElement(Component, Object.assign({}, commonProps), isEditing && item.props.children ? React.createElement(Add, {
                parent: {
                    id: item.id || '',
                    type: item.type
                },
                id: v4(),
                key: v4(),
                position: 0
            }) : null, React.createElement(Reenderizer, {
                detailed: detailed,
                data: item.props.children,
                isEditing: isEditing,
                parent: {
                    id: item.id || '',
                    type: item.type
                }
            })), isEditing && (!item.props.children || data.length == index + 1 && item.type !== 'tab' && item.type !== 'root') ? React.createElement(Add, {
                parent: {
                    id: (parent === null || parent === void 0 ? void 0 : parent.id) || '',
                    type: (parent === null || parent === void 0 ? void 0 : parent.type) || ''
                },
                id: v4(),
                key: v4(),
                position: index + 1
            }) : null);
        }
        // If no corresponding component is found, you can return a default or handle it as needed
        return React.createElement("div", {
            key: item.id
        }, "Unsupported field type: ", item.type);
    }));
};

const Form = (props)=>{
    // Hooks
    useStore((state)=>state.form);
    const setForm = useStore((state)=>state.setForm);
    const form = useForm({
        defaultValues: props.defaultValues
    });
    React.useEffect(()=>{
        if (props.isEditing) {
            setForm(props.form);
        }
    }, [
        props.form
    ]);
    // Properties
    const handleSubmit = (data)=>{
        console.log(data);
        props.onSubmit(Object.assign({}, data));
    };
    return React.createElement(FormProvider, Object.assign({}, form), React.createElement("form", {
        onSubmit: form.handleSubmit((data)=>handleSubmit(data))
    }, React.createElement(Reenderizer, {
        data: props.form,
        isEditing: props.isEditing
    }), props.children));
};

var ItemList = {
    options: [
        {
            value: 'title',
            label: 'Título'
        },
        {
            value: 'container',
            label: 'Contenedor'
        },
        {
            value: 'paragraph',
            label: 'Parrafo'
        },
        {
            value: 'input',
            label: 'Campo de texto'
        },
        {
            value: 'date_input',
            label: 'Campo de Fecha'
        },
        {
            value: 'card',
            label: 'Tarjeta'
        },
        {
            value: 'tabs',
            label: 'Tabs'
        },
        {
            value: 'select',
            label: 'Selector'
        },
        // { value: 'detailed', label: 'Detallado' }, FIXME: Totalizar fue destriudo
        {
            value: 'textarea',
            label: 'Area de texto'
        },
        {
            value: 'checkbox',
            label: 'Checkbox'
        },
        {
            value: 'radio_buttons',
            label: 'Selector unico'
        },
        {
            value: 'subtitle',
            label: 'Subtitulo'
        },
        {
            value: 'totalize',
            label: 'Totalizer'
        }
    ]
};

const NewItem = (props)=>{
    return React.createElement(React.Fragment, null, React.createElement("div", {
        className: ''
    }, React.createElement(ConnectedDroppable$1, {
        droppableId: "droppable1"
    }, (provided)=>React.createElement("div", {
            ref: provided.innerRef,
            className: "droppable-area grid grid-cols-2 gap-2"
        }, ItemList.options.map((element, index)=>{
            return React.createElement(PublicDraggable, {
                key: element.value,
                draggableId: element.value,
                index: index
            }, (provided)=>React.createElement("div", Object.assign({}, provided.draggableProps, provided.dragHandleProps, {
                    ref: provided.innerRef,
                    className: "\n                          border  border-gray-300\n                          relative select-none\n                          py-6 rounded\n                          flex justify-center items-center\n                          hover:cursor-pointer"
                }), React.createElement("div", {
                    className: "rounded"
                }, element.label)));
        }), provided.placeholder))));
};

var titleForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar Titulo'
                                }
                            },
                            {
                                type: 'input',
                                props: {
                                    name: 'label',
                                    label: 'Texto',
                                    validations: {
                                        required: 'Este campo es obligatorio',
                                        minLength: {
                                            value: 3,
                                            message: 'Minimo debes tener 3 carácteres'
                                        }
                                    }
                                }
                            },
                            {
                                type: 'textarea',
                                props: {
                                    name: 'guide_text',
                                    label: 'Texto guia para el usuario'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var cardForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar Tarjeta'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var paragraphForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar Parrafo'
                                }
                            },
                            {
                                type: 'textarea',
                                props: {
                                    name: 'text',
                                    label: 'Texto',
                                    validations: {
                                        required: 'Este campo es obligatorio',
                                        minLength: {
                                            value: 10,
                                            message: 'Minimo debes tener 10 carácteres'
                                        }
                                    }
                                }
                            },
                            {
                                type: 'textarea',
                                props: {
                                    name: 'guide_text',
                                    label: 'Texto guia para el usuario'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var containerForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar Contenedor'
                                }
                            },
                            {
                                type: 'select',
                                props: {
                                    label: 'Columnas',
                                    name: 'size',
                                    option_values: [
                                        {
                                            value: '1',
                                            label: '1'
                                        },
                                        {
                                            value: '2',
                                            label: '2'
                                        },
                                        {
                                            value: '3',
                                            label: '3'
                                        },
                                        {
                                            value: '4',
                                            label: '4'
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var inputForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar campo de texto'
                                }
                            },
                            {
                                type: 'input',
                                props: {
                                    name: 'label',
                                    label: 'Etiqueta'
                                }
                            },
                            // {
                            //   type: 'input',
                            //   props: {
                            //     name: 'placeholder',
                            //     label: 'Placeholder',
                            //   },
                            // },
                            {
                                type: 'select',
                                props: {
                                    label: 'Formato',
                                    name: 'format',
                                    option_values: [
                                        {
                                            value: 'texto',
                                            label: 'Texto'
                                        },
                                        {
                                            value: 'numeric',
                                            label: 'Númerico'
                                        },
                                        {
                                            value: 'financial',
                                            label: 'Financiero'
                                        },
                                        {
                                            value: 'date',
                                            label: 'Fecha'
                                        }
                                    ]
                                }
                            },
                            {
                                type: 'textarea',
                                props: {
                                    name: 'guide_text',
                                    label: 'Texto guia para el usuario'
                                }
                            },
                            {
                                type: 'checkbox',
                                props: {
                                    name: 'numeric',
                                    label: 'Utilizar en las formulas?'
                                }
                            },
                            {
                                type: 'checkbox',
                                props: {
                                    name: 'totalize',
                                    label: 'Es Totalizable'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var selectForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar selector'
                                }
                            },
                            {
                                type: 'input',
                                props: {
                                    name: 'label',
                                    label: 'Etiqueta'
                                }
                            },
                            {
                                type: 'textarea',
                                props: {
                                    name: 'guide_text',
                                    label: 'Texto guia para el usuario'
                                }
                            },
                            {
                                type: 'detailed',
                                props: {
                                    name: 'option_values',
                                    children: [
                                        {
                                            type: 'container',
                                            props: {
                                                size: 2,
                                                children: [
                                                    {
                                                        type: 'input',
                                                        props: {
                                                            name: 'label',
                                                            label: 'Etiqueta '
                                                        }
                                                    },
                                                    {
                                                        type: 'input',
                                                        props: {
                                                            name: 'value',
                                                            label: 'Valor'
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var tabsForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar Tabs'
                                }
                            },
                            {
                                type: 'detailed',
                                props: {
                                    name: 'options',
                                    children: [
                                        {
                                            type: 'input',
                                            props: {
                                                name: 'label',
                                                label: 'Etiqueta '
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var detailedForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar campo detallado'
                                }
                            },
                            {
                                type: 'checkbox',
                                props: {
                                    name: 'totalizar',
                                    label: 'Totalizar'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var textAreaForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar Area de texto'
                                }
                            },
                            {
                                type: 'input',
                                props: {
                                    name: 'label',
                                    label: 'Texto',
                                    validations: {
                                        required: 'Este campo es obligatorio',
                                        minLength: {
                                            value: 3,
                                            message: 'Minimo debes tener 3 carácteres'
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var radioForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar Seleccion unica'
                                }
                            },
                            {
                                type: 'detailed',
                                props: {
                                    name: 'options',
                                    children: [
                                        {
                                            type: 'input',
                                            props: {
                                                name: 'label',
                                                label: 'Nombre de la opcion '
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var checkboxForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar Titulo'
                                }
                            },
                            {
                                type: 'input',
                                props: {
                                    name: 'label',
                                    label: 'Texto',
                                    validations: {
                                        required: 'Este campo es obligatorio',
                                        minLength: {
                                            value: 3,
                                            message: 'Minimo debes tener 3 carácteres'
                                        }
                                    }
                                }
                            },
                            {
                                type: 'textarea',
                                props: {
                                    name: 'guide_text',
                                    label: 'Texto guia para el usuario'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var subtitleForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar Titulo'
                                }
                            },
                            {
                                type: 'input',
                                props: {
                                    name: 'label',
                                    label: 'Texto',
                                    validations: {
                                        required: 'Este campo es obligatorio',
                                        minLength: {
                                            value: 3,
                                            message: 'Minimo debes tener 3 carácteres'
                                        }
                                    }
                                }
                            },
                            {
                                type: 'textarea',
                                props: {
                                    name: 'guide_text',
                                    label: 'Texto guia para el usuario'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var totalizeForm = [
    {
        type: 'root',
        props: {
            children: [
                {
                    type: 'card',
                    props: {
                        children: [
                            {
                                type: 'title',
                                props: {
                                    label: 'Editar Total'
                                }
                            },
                            {
                                type: 'input',
                                props: {
                                    name: 'label',
                                    label: 'Texto antes del total',
                                    validations: {
                                        required: 'Este campo es obligatorio',
                                        minLength: {
                                            value: 3,
                                            message: 'Minimo debes tener 3 carácteres'
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

const formMapping = {
    title: titleForm,
    card: cardForm,
    paragraph: paragraphForm,
    container: containerForm,
    input: inputForm,
    select: selectForm,
    tabs: tabsForm,
    detailed: detailedForm,
    textarea: textAreaForm,
    radio_buttons: radioForm,
    checkbox: checkboxForm,
    subtitle: subtitleForm,
    totalize: totalizeForm
};
const PropertyEditor = (props)=>{
    // States
    const [form, setForm] = React.useState([]);
    const ctx = React.useContext(FormContext);
    if (!ctx) {
        throw new Error('Cannot find Form context provider');
    }
    React.useEffect(()=>{
        setForm(null);
        setTimeout(()=>{
            var _a;
            setForm(formMapping[(_a = ctx.selectedItem()) === null || _a === void 0 ? void 0 : _a.type]);
        }, 1);
    }, [
        ctx.selectedItem
    ]);
    if (!form) return React.createElement(React.Fragment, null);
    return React.createElement(Form, {
        propertyEditor: true,
        isEditing: false,
        form: form,
        onSubmit: props.onSubmit,
        defaultValues: decodeElement(ctx.selectedItem())
    }, React.createElement("div", {
        className: "flex flex-row justify-end"
    }, React.createElement("button", {
        onClick: props.deleteItem,
        className: "mb-4 disabled:opacity-50 place-self-end bg-red-500\n          hover:bg-red-700 text-white font-bold py-2 px-4 rounded\n            inline-flex items-center me-2",
        type: "button"
    }, "Eliminar"), React.createElement("button", {
        className: "mb-4 disabled:opacity-50 place-self-end bg-black\n          hover:bg-gray-700 text-white font-bold py-2 px-4 rounded\n            inline-flex items-center",
        type: "submit"
    }, "Guardar")));
};

const ItemProperties = (props)=>{
    // Context
    const ctx = React.useContext(FormContext);
    if (!ctx) {
        throw new Error('Cannot find Form context provider');
    }
    // Hooks
    useStore((state)=>state.form);
    const _beforeSubmit = (data)=>{
        const item = ctx.selectedItem();
        console.log('item', item);
        if (item) {
            ctx.selectItem(null);
            const d = Object.assign({
                id: item.id
            }, data);
            if (Object.keys(d).includes('children')) {
                d.children = d.children.map((i)=>i.id);
            }
            props.onSubmit(d);
            return;
        }
        throw new Error('Item is not setted before save');
    };
    const _deleteItem = ()=>{
        try {
            console.log('delete called', ctx.selectedItem());
            props.deleteItem(Object.assign({}, ctx.selectedItem()));
            ctx.selectItem(null);
        } catch (error) {
            console.log('error', error);
        }
    // Buscar y eliminar por el id
    };
    return React.createElement("div", null, ctx.selectedItem() ? React.createElement(PropertyEditor, {
        deleteItem: _deleteItem,
        onSubmit: _beforeSubmit
    }) : React.createElement(NewItem, null), React.createElement("button", {
        onClick: ()=>ctx.selectItem(null),
        title: "Contact Sale",
        className: "fixed z-90 bottom-12 right-4\n        w-16 h-16 rounded-full  drop-shadow-lg\n        bg-pink-500 text-white font-bold"
    }, "+"));
};

exports.Card = Card$1;
exports.Form = Form;
exports.FormContextProvider = FormContextProvider;
exports.ItemProperties = ItemProperties;
//# sourceMappingURL=index.js.map
