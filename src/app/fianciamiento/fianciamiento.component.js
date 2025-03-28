"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FianciamientoComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var FianciamientoComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-fianciamiento',
            standalone: true,
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            templateUrl: './fianciamiento.component.html',
            styleUrl: './fianciamiento.component.css'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var FianciamientoComponent = _classThis = /** @class */ (function () {
        function FianciamientoComponent_1(fianciamientoService) {
            this.fianciamientoService = fianciamientoService;
            this.mensualidad = 0;
            this.restante = 0;
            this.meses = 12;
            this.m12 = false;
            this.m24 = false;
            this.m36 = false;
            this.m48 = false;
        }
        FianciamientoComponent_1.prototype.ngOnInit = function () {
            var _this = this;
            this.fianciamientoService.restante$.subscribe(function (valor) {
                _this.restante = valor;
                _this.calcularMensualidad();
            });
        };
        FianciamientoComponent_1.prototype.calcularMensualidad = function () {
            if (this.meses > 0) {
                this.mensualidad = this.restante / this.meses;
            }
            this.fianciamientoService.actualizarMeses(this.meses);
            this.fianciamientoService.actualizarMensualidad(this.mensualidad);
        };
        FianciamientoComponent_1.prototype.SeleccionMensualiad = function (event) {
            this.calcularMensualidad();
        };
        return FianciamientoComponent_1;
    }());
    __setFunctionName(_classThis, "FianciamientoComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FianciamientoComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FianciamientoComponent = _classThis;
}();
exports.FianciamientoComponent = FianciamientoComponent;
