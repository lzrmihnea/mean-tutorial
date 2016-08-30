System.register(["angular2/core", "../services/http-test.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_test_service_1;
    var HttpTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HttpTestComponent = (function () {
                function HttpTestComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HttpTestComponent.prototype.onTestGet = function () {
                    var _this = this;
                    this._httpService.getCurrentTime().subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HttpTestComponent.prototype.onTestPost = function () {
                    var _this = this;
                    this._httpService.postJson()
                        .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HttpTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n        <button (click)=\"onTestGet()\">Test GET Request</button><br>\n        <p>Output: {{getData}}</p>\n        <button (click)=\"onTestPost()\">Test POST Request</button><br>\n        <p>Output: {{postData}}</p>\n    ",
                        providers: [http_test_service_1.HttpTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HttpTestService])
                ], HttpTestComponent);
                return HttpTestComponent;
            }());
            exports_1("HttpTestComponent", HttpTestComponent);
        }
    }
});
//# sourceMappingURL=http-test.component.js.map