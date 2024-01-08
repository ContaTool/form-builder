import React, { useState, useRef, useEffect } from 'react';

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

var css_248z = "/* styles.css */\n[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    background-color: #fff;\n    border-color: #6b7280;\n    border-width: 1px;\n    border-radius: 0px;\n    padding-top: 0.5rem;\n    padding-right: 0.75rem;\n    padding-bottom: 0.5rem;\n    padding-left: 0.75rem;\n    font-size: 1rem;\n    line-height: 1.5rem;\n    --tw-shadow: 0 0 #0000;\n}\n[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: #2563eb;\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    border-color: #2563eb;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n    color: #6b7280;\n    opacity: 1;\n}\ninput::placeholder,textarea::placeholder {\n    color: #6b7280;\n    opacity: 1;\n}\n::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n}\n::-webkit-date-and-time-value {\n    min-height: 1.5em;\n    text-align: inherit;\n}\n::-webkit-datetime-edit {\n    display: inline-flex;\n}\n::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {\n    padding-top: 0;\n    padding-bottom: 0;\n}\nselect {\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");\n    background-position: right 0.5rem center;\n    background-repeat: no-repeat;\n    background-size: 1.5em 1.5em;\n    padding-right: 2.5rem;\n    -webkit-print-color-adjust: exact;\n            print-color-adjust: exact;\n}\n[multiple],[size]:where(select:not([size=\"1\"])) {\n    background-image: initial;\n    background-position: initial;\n    background-repeat: unset;\n    background-size: initial;\n    padding-right: 0.75rem;\n    -webkit-print-color-adjust: unset;\n            print-color-adjust: unset;\n}\n[type='checkbox'],[type='radio'] {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    padding: 0;\n    -webkit-print-color-adjust: exact;\n            print-color-adjust: exact;\n    display: inline-block;\n    vertical-align: middle;\n    background-origin: border-box;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    flex-shrink: 0;\n    height: 1rem;\n    width: 1rem;\n    color: #2563eb;\n    background-color: #fff;\n    border-color: #6b7280;\n    border-width: 1px;\n    --tw-shadow: 0 0 #0000;\n}\n[type='checkbox'] {\n    border-radius: 0px;\n}\n[type='radio'] {\n    border-radius: 100%;\n}\n[type='checkbox']:focus,[type='radio']:focus {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n    --tw-ring-offset-width: 2px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: #2563eb;\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n[type='checkbox']:checked,[type='radio']:checked {\n    border-color: transparent;\n    background-color: currentColor;\n    background-size: 100% 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n[type='checkbox']:checked {\n    background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n}\n@media (forced-colors: active)  {\n    [type='checkbox']:checked {\n        -webkit-appearance: auto;\n           -moz-appearance: auto;\n                appearance: auto;\n    }\n}\n[type='radio']:checked {\n    background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n}\n@media (forced-colors: active)  {\n    [type='radio']:checked {\n        -webkit-appearance: auto;\n           -moz-appearance: auto;\n                appearance: auto;\n    }\n}\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n    border-color: transparent;\n    background-color: currentColor;\n}\n[type='checkbox']:indeterminate {\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");\n    border-color: transparent;\n    background-color: currentColor;\n    background-size: 100% 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n@media (forced-colors: active)  {\n    [type='checkbox']:indeterminate {\n        -webkit-appearance: auto;\n           -moz-appearance: auto;\n                appearance: auto;\n    }\n}\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n    border-color: transparent;\n    background-color: currentColor;\n}\n[type='file'] {\n    background: unset;\n    border-color: inherit;\n    border-width: 0;\n    border-radius: 0;\n    padding: 0;\n    font-size: unset;\n    line-height: inherit;\n}\n[type='file']:focus {\n    outline: 1px solid ButtonText;\n    outline: 1px auto -webkit-focus-ring-color;\n}\n*, ::before, ::after {\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-gradient-from-position:  ;\n    --tw-gradient-via-position:  ;\n    --tw-gradient-to-position:  ;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  ;\n}\n::backdrop {\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-gradient-from-position:  ;\n    --tw-gradient-via-position:  ;\n    --tw-gradient-to-position:  ;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  ;\n}\n.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0;\n}\n.absolute {\n    position: absolute;\n}\n.relative {\n    position: relative;\n}\n.left-0 {\n    left: 0px;\n}\n.z-10 {\n    z-index: 10;\n}\n.my-1 {\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem;\n}\n.-mb-px {\n    margin-bottom: -1px;\n}\n.mb-2 {\n    margin-bottom: 0.5rem;\n}\n.mb-4 {\n    margin-bottom: 1rem;\n}\n.ml-2 {\n    margin-left: 0.5rem;\n}\n.mr-0 {\n    margin-right: 0px;\n}\n.mr-0\\.5 {\n    margin-right: 0.125rem;\n}\n.mt-0 {\n    margin-top: 0px;\n}\n.mt-0\\.5 {\n    margin-top: 0.125rem;\n}\n.mt-1 {\n    margin-top: 0.25rem;\n}\n.mt-1\\.5 {\n    margin-top: 0.375rem;\n}\n.mt-2 {\n    margin-top: 0.5rem;\n}\n.mt-2\\.5 {\n    margin-top: 0.625rem;\n}\n.block {\n    display: block;\n}\n.inline-block {\n    display: inline-block;\n}\n.flex {\n    display: flex;\n}\n.grid {\n    display: grid;\n}\n.hidden {\n    display: none;\n}\n.h-3 {\n    height: 0.75rem;\n}\n.h-5 {\n    height: 1.25rem;\n}\n.h-6 {\n    height: 1.5rem;\n}\n.h-full {\n    height: 100%;\n}\n.max-h-72 {\n    max-height: 18rem;\n}\n.w-3 {\n    width: 0.75rem;\n}\n.w-5 {\n    width: 1.25rem;\n}\n.w-6 {\n    width: 1.5rem;\n}\n.w-full {\n    width: 100%;\n}\n.w-px {\n    width: 1px;\n}\n.flex-none {\n    flex: none;\n}\n.shrink-0 {\n    flex-shrink: 0;\n}\n.grow {\n    flex-grow: 1;\n}\n.rotate-90 {\n    --tw-rotate: 90deg;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n.animate-spin {\n    animation: spin 1s linear infinite;\n}\n.cursor-default {\n    cursor: default;\n}\n.cursor-not-allowed {\n    cursor: not-allowed;\n}\n.cursor-pointer {\n    cursor: pointer;\n}\n.select-none {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\n.appearance-none {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.flex-wrap {\n    flex-wrap: wrap;\n}\n.items-center {\n    align-items: center;\n}\n.justify-center {\n    justify-content: center;\n}\n.gap-1 {\n    gap: 0.25rem;\n}\n.gap-4 {\n    gap: 1rem;\n}\n.gap-6 {\n    gap: 1.5rem;\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n    margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.overflow-y-auto {\n    overflow-y: auto;\n}\n.truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.rounded {\n    border-radius: 0.25rem;\n}\n.rounded-md {\n    border-radius: 0.375rem;\n}\n.rounded-sm {\n    border-radius: 0.125rem;\n}\n.rounded-r-sm {\n    border-top-right-radius: 0.125rem;\n    border-bottom-right-radius: 0.125rem;\n}\n.border {\n    border-width: 1px;\n}\n.border-b {\n    border-bottom-width: 1px;\n}\n.border-b-2 {\n    border-bottom-width: 2px;\n}\n.border-dashed {\n    border-style: dashed;\n}\n.border-gray-200 {\n    --tw-border-opacity: 1;\n    border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.border-gray-300 {\n    --tw-border-opacity: 1;\n    border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.border-gray-400 {\n    --tw-border-opacity: 1;\n    border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}\n.border-gray-500 {\n    --tw-border-opacity: 1;\n    border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\n.border-transparent {\n    border-color: transparent;\n}\n.bg-amber-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(245 158 11 / var(--tw-bg-opacity));\n}\n.bg-blue-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.bg-cyan-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(6 182 212 / var(--tw-bg-opacity));\n}\n.bg-emerald-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(16 185 129 / var(--tw-bg-opacity));\n}\n.bg-fuchsia-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(217 70 239 / var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.bg-gray-200 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.bg-gray-300 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n.bg-green-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n.bg-indigo-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(99 102 241 / var(--tw-bg-opacity));\n}\n.bg-lime-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(132 204 22 / var(--tw-bg-opacity));\n}\n.bg-orange-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(249 115 22 / var(--tw-bg-opacity));\n}\n.bg-pink-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(236 72 153 / var(--tw-bg-opacity));\n}\n.bg-purple-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(168 85 247 / var(--tw-bg-opacity));\n}\n.bg-red-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n.bg-rose-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(244 63 94 / var(--tw-bg-opacity));\n}\n.bg-sky-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(14 165 233 / var(--tw-bg-opacity));\n}\n.bg-teal-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(20 184 166 / var(--tw-bg-opacity));\n}\n.bg-violet-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(139 92 246 / var(--tw-bg-opacity));\n}\n.bg-white {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-yellow-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(234 179 8 / var(--tw-bg-opacity));\n}\n.p-0 {\n    padding: 0px;\n}\n.p-0\\.5 {\n    padding: 0.125rem;\n}\n.px-1 {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n}\n.px-1\\.5 {\n    padding-left: 0.375rem;\n    padding-right: 0.375rem;\n}\n.px-2 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n}\n.px-2\\.5 {\n    padding-left: 0.625rem;\n    padding-right: 0.625rem;\n}\n.px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n.py-1 {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n}\n.py-1\\.5 {\n    padding-top: 0.375rem;\n    padding-bottom: 0.375rem;\n}\n.py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n.py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n}\n.py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n.py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n}\n.pb-0 {\n    padding-bottom: 0px;\n}\n.pb-0\\.5 {\n    padding-bottom: 0.125rem;\n}\n.pb-4 {\n    padding-bottom: 1rem;\n}\n.pb-8 {\n    padding-bottom: 2rem;\n}\n.pl-1 {\n    padding-left: 0.25rem;\n}\n.pl-2 {\n    padding-left: 0.5rem;\n}\n.pl-2\\.5 {\n    padding-left: 0.625rem;\n}\n.pl-8 {\n    padding-left: 2rem;\n}\n.pr-2 {\n    padding-right: 0.5rem;\n}\n.pt-2 {\n    padding-top: 0.5rem;\n}\n.pt-4 {\n    padding-top: 1rem;\n}\n.text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n}\n.text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n}\n.text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n}\n.text-xs {\n    font-size: 0.75rem;\n    line-height: 1rem;\n}\n.font-bold {\n    font-weight: 700;\n}\n.font-medium {\n    font-weight: 500;\n}\n.uppercase {\n    text-transform: uppercase;\n}\n.italic {\n    font-style: italic;\n}\n.leading-tight {\n    line-height: 1.25;\n}\n.tracking-wide {\n    letter-spacing: 0.025em;\n}\n.text-amber-500 {\n    --tw-text-opacity: 1;\n    color: rgb(245 158 11 / var(--tw-text-opacity));\n}\n.text-blue-500 {\n    --tw-text-opacity: 1;\n    color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n.text-cyan-500 {\n    --tw-text-opacity: 1;\n    color: rgb(6 182 212 / var(--tw-text-opacity));\n}\n.text-emerald-500 {\n    --tw-text-opacity: 1;\n    color: rgb(16 185 129 / var(--tw-text-opacity));\n}\n.text-fuchsia-500 {\n    --tw-text-opacity: 1;\n    color: rgb(217 70 239 / var(--tw-text-opacity));\n}\n.text-gray-300 {\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.text-gray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n    --tw-text-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-gray-600 {\n    --tw-text-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.text-gray-700 {\n    --tw-text-opacity: 1;\n    color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.text-green-500 {\n    --tw-text-opacity: 1;\n    color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n.text-indigo-500 {\n    --tw-text-opacity: 1;\n    color: rgb(99 102 241 / var(--tw-text-opacity));\n}\n.text-lime-500 {\n    --tw-text-opacity: 1;\n    color: rgb(132 204 22 / var(--tw-text-opacity));\n}\n.text-orange-500 {\n    --tw-text-opacity: 1;\n    color: rgb(249 115 22 / var(--tw-text-opacity));\n}\n.text-pink-500 {\n    --tw-text-opacity: 1;\n    color: rgb(236 72 153 / var(--tw-text-opacity));\n}\n.text-purple-500 {\n    --tw-text-opacity: 1;\n    color: rgb(168 85 247 / var(--tw-text-opacity));\n}\n.text-red-500 {\n    --tw-text-opacity: 1;\n    color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.text-rose-500 {\n    --tw-text-opacity: 1;\n    color: rgb(244 63 94 / var(--tw-text-opacity));\n}\n.text-sky-500 {\n    --tw-text-opacity: 1;\n    color: rgb(14 165 233 / var(--tw-text-opacity));\n}\n.text-teal-500 {\n    --tw-text-opacity: 1;\n    color: rgb(20 184 166 / var(--tw-text-opacity));\n}\n.text-violet-500 {\n    --tw-text-opacity: 1;\n    color: rgb(139 92 246 / var(--tw-text-opacity));\n}\n.text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-yellow-500 {\n    --tw-text-opacity: 1;\n    color: rgb(234 179 8 / var(--tw-text-opacity));\n}\n.text-zinc-500 {\n    --tw-text-opacity: 1;\n    color: rgb(113 113 122 / var(--tw-text-opacity));\n}\n.text-opacity-0 {\n    --tw-text-opacity: 0;\n}\n.opacity-25 {\n    opacity: 0.25;\n}\n.opacity-75 {\n    opacity: 0.75;\n}\n.shadow-lg {\n    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.ring {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.filter {\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.transition-all {\n    transition-property: all;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.duration-200 {\n    transition-duration: 200ms;\n}\n.duration-300 {\n    transition-duration: 300ms;\n}\n.hover\\:cursor-pointer:hover {\n    cursor: pointer;\n}\n.hover\\:border-black:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n.hover\\:border-gray-300:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.hover\\:border-gray-400:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}\n.hover\\:bg-amber-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(254 243 199 / var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\n.hover\\:bg-cyan-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(207 250 254 / var(--tw-bg-opacity));\n}\n.hover\\:bg-emerald-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(209 250 229 / var(--tw-bg-opacity));\n}\n.hover\\:bg-fuchsia-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(250 232 255 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-200:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.hover\\:bg-green-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(220 252 231 / var(--tw-bg-opacity));\n}\n.hover\\:bg-indigo-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(224 231 255 / var(--tw-bg-opacity));\n}\n.hover\\:bg-lime-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(236 252 203 / var(--tw-bg-opacity));\n}\n.hover\\:bg-orange-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 237 213 / var(--tw-bg-opacity));\n}\n.hover\\:bg-pink-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(252 231 243 / var(--tw-bg-opacity));\n}\n.hover\\:bg-purple-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(243 232 255 / var(--tw-bg-opacity));\n}\n.hover\\:bg-red-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(254 226 226 / var(--tw-bg-opacity));\n}\n.hover\\:bg-red-200:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(254 202 202 / var(--tw-bg-opacity));\n}\n.hover\\:bg-rose-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 228 230 / var(--tw-bg-opacity));\n}\n.hover\\:bg-sky-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(224 242 254 / var(--tw-bg-opacity));\n}\n.hover\\:bg-teal-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(204 251 241 / var(--tw-bg-opacity));\n}\n.hover\\:bg-violet-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(237 233 254 / var(--tw-bg-opacity));\n}\n.hover\\:bg-yellow-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(254 249 195 / var(--tw-bg-opacity));\n}\n.hover\\:text-amber-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(245 158 11 / var(--tw-text-opacity));\n}\n.hover\\:text-blue-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n.hover\\:text-cyan-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(6 182 212 / var(--tw-text-opacity));\n}\n.hover\\:text-emerald-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(16 185 129 / var(--tw-text-opacity));\n}\n.hover\\:text-fuchsia-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(217 70 239 / var(--tw-text-opacity));\n}\n.hover\\:text-gray-700:hover {\n    --tw-text-opacity: 1;\n    color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.hover\\:text-green-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n.hover\\:text-indigo-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(99 102 241 / var(--tw-text-opacity));\n}\n.hover\\:text-lime-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(132 204 22 / var(--tw-text-opacity));\n}\n.hover\\:text-orange-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(249 115 22 / var(--tw-text-opacity));\n}\n.hover\\:text-pink-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(236 72 153 / var(--tw-text-opacity));\n}\n.hover\\:text-purple-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(168 85 247 / var(--tw-text-opacity));\n}\n.hover\\:text-red-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.hover\\:text-red-600:hover {\n    --tw-text-opacity: 1;\n    color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n.hover\\:text-rose-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(244 63 94 / var(--tw-text-opacity));\n}\n.hover\\:text-sky-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(14 165 233 / var(--tw-text-opacity));\n}\n.hover\\:text-teal-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(20 184 166 / var(--tw-text-opacity));\n}\n.hover\\:text-violet-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(139 92 246 / var(--tw-text-opacity));\n}\n.hover\\:text-yellow-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(234 179 8 / var(--tw-text-opacity));\n}\n.hover\\:text-zinc-900:hover {\n    --tw-text-opacity: 1;\n    color: rgb(24 24 27 / var(--tw-text-opacity));\n}\n.focus\\:border-amber-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(245 158 11 / var(--tw-border-opacity));\n}\n.focus\\:border-blue-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n.focus\\:border-cyan-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(6 182 212 / var(--tw-border-opacity));\n}\n.focus\\:border-emerald-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(16 185 129 / var(--tw-border-opacity));\n}\n.focus\\:border-fuchsia-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(217 70 239 / var(--tw-border-opacity));\n}\n.focus\\:border-gray-200:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.focus\\:border-gray-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\n.focus\\:border-green-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(34 197 94 / var(--tw-border-opacity));\n}\n.focus\\:border-indigo-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(99 102 241 / var(--tw-border-opacity));\n}\n.focus\\:border-lime-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(132 204 22 / var(--tw-border-opacity));\n}\n.focus\\:border-orange-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(249 115 22 / var(--tw-border-opacity));\n}\n.focus\\:border-pink-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(236 72 153 / var(--tw-border-opacity));\n}\n.focus\\:border-purple-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(168 85 247 / var(--tw-border-opacity));\n}\n.focus\\:border-red-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(239 68 68 / var(--tw-border-opacity));\n}\n.focus\\:border-rose-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(244 63 94 / var(--tw-border-opacity));\n}\n.focus\\:border-sky-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(14 165 233 / var(--tw-border-opacity));\n}\n.focus\\:border-teal-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(20 184 166 / var(--tw-border-opacity));\n}\n.focus\\:border-violet-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(139 92 246 / var(--tw-border-opacity));\n}\n.focus\\:border-yellow-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(234 179 8 / var(--tw-border-opacity));\n}\n.focus\\:bg-white:focus {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.focus\\:outline-none:focus {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n}\n.focus\\:ring:focus {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-0:focus {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-amber-500\\/20:focus {\n    --tw-ring-color: rgb(245 158 11 / 0.2);\n}\n.focus\\:ring-blue-500\\/20:focus {\n    --tw-ring-color: rgb(59 130 246 / 0.2);\n}\n.focus\\:ring-cyan-500\\/20:focus {\n    --tw-ring-color: rgb(6 182 212 / 0.2);\n}\n.focus\\:ring-emerald-500\\/20:focus {\n    --tw-ring-color: rgb(16 185 129 / 0.2);\n}\n.focus\\:ring-fuchsia-500\\/20:focus {\n    --tw-ring-color: rgb(217 70 239 / 0.2);\n}\n.focus\\:ring-green-500\\/20:focus {\n    --tw-ring-color: rgb(34 197 94 / 0.2);\n}\n.focus\\:ring-indigo-500\\/20:focus {\n    --tw-ring-color: rgb(99 102 241 / 0.2);\n}\n.focus\\:ring-lime-500\\/20:focus {\n    --tw-ring-color: rgb(132 204 22 / 0.2);\n}\n.focus\\:ring-orange-500\\/20:focus {\n    --tw-ring-color: rgb(249 115 22 / 0.2);\n}\n.focus\\:ring-pink-500\\/20:focus {\n    --tw-ring-color: rgb(236 72 153 / 0.2);\n}\n.focus\\:ring-purple-500\\/20:focus {\n    --tw-ring-color: rgb(168 85 247 / 0.2);\n}\n.focus\\:ring-red-500\\/20:focus {\n    --tw-ring-color: rgb(239 68 68 / 0.2);\n}\n.focus\\:ring-rose-500\\/20:focus {\n    --tw-ring-color: rgb(244 63 94 / 0.2);\n}\n.focus\\:ring-sky-500\\/20:focus {\n    --tw-ring-color: rgb(14 165 233 / 0.2);\n}\n.focus\\:ring-teal-500\\/20:focus {\n    --tw-ring-color: rgb(20 184 166 / 0.2);\n}\n.focus\\:ring-violet-500\\/20:focus {\n    --tw-ring-color: rgb(139 92 246 / 0.2);\n}\n.focus\\:ring-yellow-500\\/20:focus {\n    --tw-ring-color: rgb(234 179 8 / 0.2);\n}\n@media (min-width: 640px) {\n    .sm\\:block {\n        display: block;\n    }\n    .sm\\:hidden {\n        display: none;\n    }\n}\n";
styleInject(css_248z);

const Button = (props)=>{
    return React.createElement("button", null, props.label);
};

const Card = (props)=>{
    return React.createElement("div", {
        className: "mb-4 w-full rounded shadow-lg bg-white pt-2 pb-8 px-4"
    }, React.createElement("div", {
        className: "py-4 font-bold"
    }, React.createElement("span", {
        className: `text-xl`
    }, props.label)), React.createElement("div", {
        className: "grid grid-cols-3 gap-4"
    }, props.children));
};

const Title = (props)=>{
    return React.createElement("span", {
        className: `${props === null || props === void 0 ? void 0 : props.className} text-lg py-4 `
    }, props.label);
};

function Input(props) {
    // const {
    //   register,
    //   formState: { errors },
    // } = useFormContext();
    return React.createElement("div", {
        className: "py-2"
    }, React.createElement("label", {
        className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        htmlFor: props.name
    }, props.label), React.createElement("div", {
        className: "relative"
    }, React.createElement("input", Object.assign({}, props, {
        placeholder: props.placeholder,
        className: "appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    }))), React.createElement("p", {
        className: "text-red-500 text-xs italic pt-2"
    }, "Error: Aqui va a un error que vas a mostrar"));
}

function Add() {
    return React.createElement("div", {
        className: "border border-dashed hover:text-zinc-900 text-zinc-500 rounded-md border-1 hover:border-black border-gray-400 hover:cursor-pointer flex justify-center items-center py-8"
    }, React.createElement("span", {
        className: "text-sm font-bold "
    }, "AGREGAR ELEMENTO"));
}

const Tabs = (props)=>{
    return React.createElement("div", null, React.createElement("div", {
        className: "sm:hidden"
    }, React.createElement("label", {
        htmlFor: "Tab",
        className: "sr-only"
    }, "Tab"), React.createElement("select", {
        id: "Tab",
        className: "w-full rounded-md border-gray-200"
    }, React.createElement("option", null, "Patrimonio"))), React.createElement("div", {
        className: "hidden sm:block"
    }, React.createElement("div", {
        className: "border-b border-gray-200"
    }, React.createElement("nav", {
        className: "-mb-px flex gap-6",
        "aria-label": "Tabs"
    }, props.tabs.map((tab)=>React.createElement("a", {
            href: "#",
            className: "shrink-0 border-b-2 border-transparent px-1 pb-4 \n              text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        }, tab.label))))), props.tabs.map((tab)=>{
        var _a;
        return React.createElement("div", {
            className: "pt-4"
        }, (_a = tab.children) === null || _a === void 0 ? void 0 : _a.map((element, index)=>{
            return React.createElement(Recursive, Object.assign({
                key: index
            }, element));
        }));
    }));
};

const options = [
    {
        value: 'dev',
        label: '1055 - Developer'
    },
    {
        value: 'fox',
        label: '🦊 Developer'
    },
    {
        value: 'Butterfly',
        label: '🦋 Social Media'
    },
    {
        value: 'Honeybee',
        label: '🐝 Multímedia'
    }
];
const Select = (props)=>{
    const [query, setQuery] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    useEffect(()=>{
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
        const inputValue = e.target.value;
        setQuery(inputValue);
        const filtered = options.filter((option)=>option.label.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredOptions(filtered);
        setIsOpen(true);
    };
    const handleOptionSelect = (option)=>{
        setQuery(option.label);
        setIsOpen(false);
    };
    return React.createElement("div", {
        className: "py-2 relative ",
        ref: wrapperRef
    }, React.createElement("label", {
        className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        htmlFor: props.name
    }, props.label), React.createElement("div", null, React.createElement("input", {
        type: "text",
        className: "appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
        placeholder: "Buscar...",
        value: query,
        onChange: handleInputChange,
        onClick: ()=>setIsOpen(true)
    }), isOpen && React.createElement("ul", {
        className: "absolute z-10 left-0 w-full mt-2 border rounded bg-white shadow-md"
    }, filteredOptions.map((option, index)=>React.createElement("li", {
            key: index,
            className: "py-2 px-4 cursor-pointer hover:bg-gray-200",
            onClick: ()=>handleOptionSelect(option)
        }, option.label))), React.createElement("p", {
        className: "text-red-500 text-xs italic pt-2"
    }, "Error: Aqui va a un error que vas a mostrar")));
};

const Recursive = (props)=>{
    var _a;
    let Component;
    if (props.type === 'title') Component = Title;
    if (props.type === 'card') Component = Card;
    if (props.type === 'input') Component = Input;
    if (props.type === 'add') Component = Add;
    if (props.type === 'tabs') Component = Tabs;
    if (props.type === 'select') Component = Select;
    if (!Component) Component = ()=>React.createElement("div", null, "componente invalido");
    return React.createElement(Component, Object.assign({}, props.props), (_a = props.props.children) === null || _a === void 0 ? void 0 : _a.map((child, index)=>React.createElement(Recursive, Object.assign({
            key: index
        }, child))));
};
const Reenderizer = ({ data })=>{
    return data.map((item, index)=>React.createElement(Recursive, Object.assign({
            key: index
        }, item)));
};

const Form = (props)=>{
    return React.createElement("form", null, React.createElement(Reenderizer, {
        data: props.form
    }));
};

export { Button, Card, Form, Input, Tabs, Title };
//# sourceMappingURL=index.js.map
