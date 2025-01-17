export default function template($templateCache) {
    $templateCache.put('template/color-picker/directive.html',
        '<div class="color-picker-wrapper" ng-class="{' +
            '\'color-picker-disabled\': AngularColorPickerController.pickerDisabled,' +
            '\'color-picker-swatch-only\': AngularColorPickerController.options.swatchOnly,' +
            '\'color-picker-open\': AngularColorPickerController.is_open,' +
            '\'color-picker-closed\': !AngularColorPickerController.is_open,' +
            '\'color-picker-horizontal\': AngularColorPickerController.options.horizontal,' +
        '}">' +
           '<div class="color-picker-input-wrapper" ng-class="{\'input-group\': AngularColorPickerController.options.swatchBootstrap && AngularColorPickerController.options.swatch}">' +
               '<span ng-if="AngularColorPickerController.options.swatchPos === \'left\'" class="color-picker-swatch" ng-click="AngularColorPickerController.onSwatchClick($event)" ng-show="AngularColorPickerController.options.swatch" ng-class="{\'color-picker-swatch-left\': AngularColorPickerController.options.swatchPos !== \'right\', \'color-picker-swatch-right\': AngularColorPickerController.options.swatchPos === \'right\', \'input-group-addon\': AngularColorPickerController.options.swatchBootstrap}"></span>' +
               '<input ng-attr-id="{{AngularColorPickerController.options.id}}" ng-attr-name="{{AngularColorPickerController.options.name}}" class="color-picker-input {{AngularColorPickerController.options.inputClass}}" type="text" ng-change="AngularColorPickerController.onInternalNgModelChange($event)" ng-model="AngularColorPickerController.internalNgModel" ng-model-options="AngularColorPickerController.ngModelOptions" ng-readonly="AngularColorPickerController.options.swatchOnly" ng-disabled="AngularColorPickerController.pickerDisabled" size="7" ng-class="{\'color-picker-input-swatch\': AngularColorPickerController.options.swatch && !AngularColorPickerController.options.swatchOnly && AngularColorPickerController.options.swatchPos === \'left\'}" placeholder="{{AngularColorPickerController.options.placeholder}}" ng-required="AngularColorPickerController.options.required">' +
               '<span ng-if="AngularColorPickerController.options.swatchPos === \'right\'" class="color-picker-swatch" ng-click="AngularColorPickerController.onSwatchClick($event)" ng-show="AngularColorPickerController.options.swatch" ng-class="{\'color-picker-swatch-left\': AngularColorPickerController.options.swatchPos !== \'right\', \'color-picker-swatch-right\': AngularColorPickerController.options.swatchPos === \'right\', \'input-group-addon\': AngularColorPickerController.options.swatchBootstrap}"></span>' +
           '</div>' +
           '<div class="color-picker-panel" ng-class="{' +
               '\'color-picker-panel-top color-picker-panel-right\': AngularColorPickerController.options.pos === \'top right\',' +
               '\'color-picker-panel-top color-picker-panel-left\': AngularColorPickerController.options.pos === \'top left\',' +
               '\'color-picker-panel-bottom color-picker-panel-right\': AngularColorPickerController.options.pos === \'bottom right\',' +
               '\'color-picker-panel-bottom color-picker-panel-left\': AngularColorPickerController.options.pos === \'bottom left\',' +
               '\'color-picker-panel-round\': AngularColorPickerController.options.round,' +
               '\'color-picker-show-hue\': AngularColorPickerController.options.hue,' +
               '\'color-picker-show-saturation\': AngularColorPickerController.options.saturation,' +
               '\'color-picker-show-lightness\': AngularColorPickerController.options.lightness,' +
               '\'color-picker-show-alpha\': AngularColorPickerController.options.alpha && AngularColorPickerController.options.format !== \'hex\',' +
               '\'color-picker-show-inline\': AngularColorPickerController.options.inline,' +
           '}">' +
               '<div class="color-picker-grid-wrapper">' +
                   '<div class="color-picker-row">' +
                       '<div class="color-picker-grid">' +
                           '<div class="color-picker-overlay"></div>' +
                           '<div class="color-picker-grid-inner"></div>' +
                           '<div class="color-picker-picker">' +
                               '<div></div>' +
                           '</div>' +
                       '</div>' +
                       '<div class="color-picker-hue" ng-show="AngularColorPickerController.options.hue">' +
                           '<div class="color-picker-overlay"></div>' +
                           '<div class="color-picker-slider"></div>' +
                       '</div>' +
                       '<div class="color-picker-saturation" ng-show="AngularColorPickerController.options.saturation">' +
                           '<div class="color-picker-overlay"></div>' +
                           '<div class="color-picker-slider"></div>' +
                       '</div>' +
                       '<div class="color-picker-lightness" ng-show="AngularColorPickerController.options.lightness">' +
                           '<div class="color-picker-overlay"></div>' +
                           '<div class="color-picker-slider"></div>' +
                       '</div>' +
                       '<div class="color-picker-opacity" ng-show="AngularColorPickerController.options.alpha && AngularColorPickerController.options.format !== \'hex\'">' +
                           '<div class="color-picker-overlay"></div>' +
                           '<div class="color-picker-slider"></div>' +
                       '</div>' +
                   '</div>' +
               '</div>' +
               '<div class="color-picker-actions">' +
                   '<button ' +
                       'type="button"' +
                       'class="color-picker-action color-picker-action-clear"' +
                       'tabindex="-1"' +
                       'ng-class="AngularColorPickerController.options.clear.class"' +
                       'ng-show="AngularColorPickerController.options.clear.show"' +
                       'ng-click="AngularColorPickerController.api.clear($event)"' +
                   '>' +
                       '{{AngularColorPickerController.options.clear.label}}' +
                   '</button>' +
                   '<button ' +
                       'type="button"' +
                       'class="color-picker-action color-picker-action-reset"' +
                       'tabindex="-1"' +
                       'ng-class="AngularColorPickerController.options.reset.class"' +
                       'ng-show="AngularColorPickerController.options.reset.show"' +
                       'ng-click="AngularColorPickerController.api.reset($event)"' +
                   '>' +
                       '{{AngularColorPickerController.options.reset.label}}' +
                   '</button>' +
                   '<button ' +
                       'type="button"' +
                       'class="color-picker-action color-picker-action-close"' +
                       'tabindex="-1"' +
                       'ng-class="AngularColorPickerController.options.close.class"' +
                       'ng-show="AngularColorPickerController.options.close.show"' +
                       'ng-click="AngularColorPickerController.api.close($event)"' +
                   '>' +
                       '{{AngularColorPickerController.options.close.label}}' +
                   '</button>' +
               '</div>' +
           '</div>' +
        '</div>'
    );
}

template.$inject = ['$templateCache'];
