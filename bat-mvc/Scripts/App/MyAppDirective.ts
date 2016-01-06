module App {
    "use strict";

    interface IMyAppDirective extends ng.IDirective {
    }

    interface IMyAppDirectiveScope extends ng.IScope {
    }

    interface IMyAppDirectiveAttributes extends ng.IAttributes {
    }

    MyAppDirective.$inject = ["$window"];
    function MyAppDirective($window: ng.IWindowService): IMyAppDirective {
        return {
            restrict: "EA",
            link: link,
            template: "<h1>Hello, world</h1>"

        }

        function link(scope: IMyAppDirectiveScope, element: ng.IAugmentedJQuery, attrs: IMyAppDirectiveAttributes) {

        }
    }

    angular.module("app").directive("myApp", MyAppDirective);
}