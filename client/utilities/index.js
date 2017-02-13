import Navigate from './navigate';
import Translate from './translate';


module.exports = {
    'Navigate': Navigate,
    'Translate': Translate,
    'IfMobile': /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
}