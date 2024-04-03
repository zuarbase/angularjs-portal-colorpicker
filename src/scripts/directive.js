import controller from './controller';

export default function colorPickerDirective () {
    return {
        restrict: 'E',
        require: ['^ngModel'],
        scope: {
            ngModel: '=',
            options: '=?',
            api: '=?',
            // Events
            // `Listener` was added to names to avoid
            // name conflict with internal listeners
            onChangeListener:'&onChange',
            onBlurListener:'&onBlur',
            onOpenListener:'&onOpen',
            onCloseListener:'&onClose',
            onClearListener:'&onClear',
            onDestroyListener:'&onDestroy',
            onResetListener:'&onReset',
        },
        bindToController: true,
        templateUrl: 'template/color-picker/directive.html',
        controller: controller,
        controllerAs: 'AngularColorPickerController',
        link: function ($scope, element, attrs, control) {
            $scope.control = control;
            $scope.init();
        }
    };
}
