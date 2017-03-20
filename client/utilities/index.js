import Navigate from './navigate';
import Translate from './translate';
import TimeFormat from './time-format';
import Authorize from './authorize';

module.exports = {
    'Navigate': Navigate,
    'Translate': Translate,
    'TimeFormat': TimeFormat,
    'Authorize': Authorize,
    'IfMobile': /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    'staticServer': 'http://localhost:8080/'
}