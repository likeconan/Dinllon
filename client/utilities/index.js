import Navigate from './navigate';
import Translate from './translate';
import TimeFormat from './time-format';


module.exports = {
    'Navigate': Navigate,
    'Translate': Translate,
    'TimeFormat': TimeFormat,
    'IfMobile': /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
}