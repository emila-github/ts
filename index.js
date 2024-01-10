var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dom = /** @class */ (function () {
    function Dom() {
    }
    Dom.prototype.createElement = function (el) {
        return document.createElement(el);
    };
    Dom.prototype.setText = function (el, text) {
        el.textContent = text;
    };
    Dom.prototype.render = function (createElement) {
        var _this = this;
        var _a;
        var el = this.createElement(createElement.tag);
        if (createElement.children && Array.isArray(createElement.children)) {
            createElement.children.forEach(function (item) {
                var _a;
                var child = _this.render(item);
                _this.setText(child, (_a = item.text) !== null && _a !== void 0 ? _a : null);
                el.appendChild(child);
            });
        }
        else {
            this.setText(el, (_a = createElement.text) !== null && _a !== void 0 ? _a : null);
        }
        return el;
    };
    return Dom;
}());
var Vue = /** @class */ (function (_super) {
    __extends(Vue, _super);
    function Vue(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.init();
        return _this;
    }
    Vue.version = function () {
        return '1.0.0';
    };
    Vue.prototype.init = function () {
        var app = typeof this.options.el == 'string'
            ? document.querySelector(this.options.el)
            : this.options.el;
        var data = {
            tag: 'div',
            props: {
                id: 1,
                key: 1,
            },
            children: [
                {
                    tag: 'div',
                    text: 'sub1',
                },
                {
                    tag: 'div',
                    text: 'sub2',
                },
            ],
        };
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data));
        console.log(app);
        this.mount(app);
    };
    Vue.prototype.mount = function (app) {
        document.body.append(app);
    };
    return Vue;
}(Dom));
var v = new Vue({
    el: '#app',
});
