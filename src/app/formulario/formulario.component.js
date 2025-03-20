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
exports.FormularioComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var FormularioComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-formulario',
            standalone: true,
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
            ],
            templateUrl: './formulario.component.html',
            styleUrl: './formulario.component.css'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var FormularioComponent = _classThis = /** @class */ (function () {
        function FormularioComponent_1(financiamientoService) {
            this.financiamientoService = financiamientoService;
            this.precioSeleccionado = 0;
            this.precioEnganche = 0;
            this.nombre = "";
            this.phone = "";
            this.mail = "";
            this.plazo = 0;
            this.mensualidad = 0;
            this.modeloSeleccionado = "";
            this.showInfo = false;
        }
        // traer variables
        FormularioComponent_1.prototype.ngOnInit = function () {
            var _this = this;
            this.financiamientoService.precioSeleccionado$.subscribe(function (precio) {
                _this.precioSeleccionado = precio; // 🔥 Se actualizará automáticamente cuando cambie en `app-calculador`
            });
            this.financiamientoService.precioEnganche$.subscribe(function (precio) {
                _this.precioEnganche = precio;
            });
            this.financiamientoService.meses$.subscribe(function (plazo) {
                _this.plazo = plazo;
            });
            this.financiamientoService.mensualidad$.subscribe(function (mensualidad) {
                _this.mensualidad = mensualidad;
            });
            this.financiamientoService.modelo$.subscribe(function (modelo) {
                _this.modeloSeleccionado = modelo;
            });
        };
        FormularioComponent_1.prototype.validarTelefono = function (event) {
            var input = event.target;
            var valor = input.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
            // Si el usuario incluyó "+", lo respeta
            if (input.value.startsWith("+52")) {
                valor = "+52" + valor.substring(2, 12); // Mantiene "+52" y limita a 10 dígitos
            }
            else {
                valor = "+52" + valor.substring(0, 10); // Si no hay "+52", lo agrega
            }
            input.value = valor;
            this.phone = valor;
        };
        FormularioComponent_1.prototype.enviar = function () {
            if (this.nombre == "" || this.phone == "" || this.mail == "") {
                console.log("Necesitas agregar los datos necesarios");
            }
            else {
                var contenido = "\n        Nombre: ".concat(this.nombre, "\n        N\u00FAmero: ").concat(this.phone, "\n        Correo: ").concat(this.mail, "\n        Modelo: ").concat(this.modeloSeleccionado, "\n        Precio: ").concat(this.precioSeleccionado.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }), "\n        Enganche: ").concat(this.precioEnganche.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }), "\n        Plazo: ").concat(this.plazo, " meses\n        Mensualidad: ").concat(this.mensualidad.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }), "\n      ");
                var blob = new Blob([contenido], { type: 'text/plain' });
                var a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = 'datos_financiamiento.txt';
                a.click();
                URL.revokeObjectURL(a.href);
                window.location.reload();
            }
        };
        return FormularioComponent_1;
    }());
    __setFunctionName(_classThis, "FormularioComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FormularioComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FormularioComponent = _classThis;
}();
exports.FormularioComponent = FormularioComponent;
