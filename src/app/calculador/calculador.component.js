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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadorComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var fianciamiento_component_1 = require("../fianciamiento/fianciamiento.component");
var formulario_component_1 = require("../formulario/formulario.component");
var CalculadorComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-calculador',
            standalone: true,
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                fianciamiento_component_1.FianciamientoComponent,
                formulario_component_1.FormularioComponent
            ],
            templateUrl: './calculador.component.html',
            styleUrl: './calculador.component.css'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CalculadorComponent = _classThis = /** @class */ (function () {
        function CalculadorComponent_1(fianciamientoService, ExcelService) {
            this.fianciamientoService = fianciamientoService;
            this.ExcelService = ExcelService;
            this.data = []; // Datos del Excel
            this.filteredModels = []; // Modelos filtrados por categoría
            this.selectedCategory = ''; // Categoría seleccionada
            this.grupoVehiculo = "";
            this.atv = false;
            this.utv = false;
            this.ssv = false;
            this.youth = false;
            this.moto = false;
            this.show = false;
            this.showFormu = false;
            this.showEnganche = false;
            this.showFinan = false;
            this.modelo = "";
            this.modeloNombre = ""; // Nombre del modelo seleccionado
            this.precioSeleccionado = 0;
            this.enganche = 10;
            this.engancheCash = "$0";
            this.precioEnganche = 0;
            this.restante = 0;
        }
        CalculadorComponent_1.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.ExcelService.readExcelFromAssets()];
                        case 1:
                            _a.data = _b.sent();
                            console.log("Datos del Excel cargados:", this.data);
                            return [2 /*return*/];
                    }
                });
            });
        };
        CalculadorComponent_1.prototype.selectedVicle = function (event) {
            var _this = this;
            var _a;
            var categoria = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value; // Validamos que `event.target.value` exista
            if (!categoria)
                return; // Si la categoría es `undefined`, no hace nada
            this.selectedCategory = categoria;
            this.filteredModels = this.data.filter(function (row) { return row.Tipo === _this.selectedCategory; }); // Filtra modelos
            // 🔹 Imprimir en consola
            console.log("Categoría seleccionada:", this.selectedCategory);
            console.log("Modelos disponibles en esta categoría:", this.filteredModels);
            // Resetea todas las categorías
            this.atv = this.utv = this.ssv = this.youth = this.moto = false;
            // Activa solo la categoría seleccionada
            switch (this.selectedCategory) {
                case "ATV":
                    this.atv = true;
                    break;
                case "UTV":
                    this.utv = true;
                    break;
                case "SSV":
                    this.ssv = true;
                    break;
                case "YOUTH":
                    this.youth = true;
                    break;
                case "MOTO":
                    this.moto = true;
                    break;
            }
        };
        CalculadorComponent_1.prototype.actualizarPrecio = function (event) {
            var modeloID = event.target.value; // Captura el ID seleccionado
            var modeloSeleccionado = this.filteredModels.find(function (model) { return model.ID == modeloID; });
            if (modeloSeleccionado) {
                this.precioSeleccionado = modeloSeleccionado.Precio; // Guarda el precio del modelo
                this.modelo = modeloID; // 📌 Asigna el modelo seleccionado
                this.modeloNombre = modeloSeleccionado.Modelo; // 📌 Guarda el nombre del modelo
            }
            console.log("Modelo seleccionado:", modeloSeleccionado === null || modeloSeleccionado === void 0 ? void 0 : modeloSeleccionado.Modelo);
            console.log("Precio seleccionado:", this.precioSeleccionado);
            this.show = true;
            // 📌 Nuevo cálculo del enganche y restante usando `this.precioSeleccionado`
            var precioTotal = this.precioSeleccionado || 0;
            this.precioEnganche = ((this.enganche / 100) * precioTotal);
            this.restante = precioTotal - (this.enganche / 100) * precioTotal;
            // Enviar valores al servicio
            this.fianciamientoService.actualizarRestante(this.restante);
        };
        CalculadorComponent_1.prototype.actualizarPorcentaje = function (event) {
            this.enganche = event.target.value;
            var precio = this.precioSeleccionado || 0; // 📌 Usar el precio dinámico del modelo seleccionado
            this.precioEnganche = ((this.enganche / 100) * precio);
            this.restante = (precio - (this.enganche / 100) * precio);
            this.fianciamientoService.actualizarPrecioSeleccionado(this.precioSeleccionado); // 🔥 Enviar al servicio
            this.fianciamientoService.actulizarPrecioEnganche(this.precioEnganche);
            this.fianciamientoService.actualizarRestante(this.restante);
            this.fianciamientoService.actualizarModelo(this.modeloNombre);
        };
        CalculadorComponent_1.prototype.validarEnganche = function (event) {
            var input = event.target;
            var valor = input.value.replace(/\D/g, ""); // Solo números
            var numero = parseInt(valor, 10) || 0;
            input.value = "$".concat(numero.toLocaleString("es-MX")); // Agrega formato de miles
            this.engancheCash = "$".concat(numero.toLocaleString("es-MX"));
        };
        CalculadorComponent_1.prototype.showFormulario = function (event) {
            this.showFormu = true;
        };
        CalculadorComponent_1.prototype.showFinanciamiento = function (event) {
            this.showFinan = true;
        };
        return CalculadorComponent_1;
    }());
    __setFunctionName(_classThis, "CalculadorComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CalculadorComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CalculadorComponent = _classThis;
}();
exports.CalculadorComponent = CalculadorComponent;
