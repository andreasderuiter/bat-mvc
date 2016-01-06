module App {
    "use strict";

    interface IMyAppController {
        values: string[];
        errorMessage: string;
        isVisibleErrorMessage: boolean
    }

    export class MyAppController implements IMyAppController {
        errorMessage: string = "";
        isVisibleErrorMessage: boolean = false;
        values: string[] = [];

        static $inject: string[] = ["$http", "$window"];
        constructor(private $http: ng.IHttpService, private $window: ng.IWindowService) {
            this.getValues();
        }

        private getValues(): void {
            this.$http.get("/api/sample")
                .then((response: ng.IHttpPromiseCallbackArg<string[]>) => {
                    this.isVisibleErrorMessage = false;
                    this.values = response.data;
                })
                .catch(((reason: ng.IHttpPromiseCallbackArg<string[]>) => {
                    if (reason.status == 401) {
                        this.$window.location.href = '/Account/Login?returnurl=/Home/About';
                    } else {
                        this.isVisibleErrorMessage = true;
                        this.errorMessage = reason.statusText;
                    }
                    return this.values;
                }));
        }
    }
    angular.module("app").controller("MyAppController", MyAppController);
}