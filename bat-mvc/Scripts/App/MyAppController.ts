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

        static $inject: string[] = ["$http"];
        constructor(private $http: ng.IHttpService) {
            this.getValues();
        }

        private getValues(): string[] {
            this.$http.get("/api/sample")
                .then((response: ng.IHttpPromiseCallbackArg<string[]>) => {
                    this.isVisibleErrorMessage = false;
                    this.values = response.data;
                })
                .catch(((reason: ng.IHttpPromiseCallbackArg<string[]>) => {
                    this.isVisibleErrorMessage = true;
                    this.errorMessage = reason.statusText;
                }));
            return this.values;
        }
    }
    angular.module("app").controller("MyAppController", MyAppController);
}