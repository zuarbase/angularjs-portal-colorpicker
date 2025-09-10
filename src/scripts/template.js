import directive from '../templates/directive.html';

template.$inject = ['$templateCache'];
export default function template ($templateCache) {
    $templateCache.put('template/color-picker/directive.html', directive);
}
