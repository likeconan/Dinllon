import {staticServer} from '../utilities';

class ImagesModel {
    constructor(imgContent) {
        this.imgContent = imgContent && imgContent.length
            ? imgContent
            : [
                {
                    url: '/default/replaced-pic.jpg'
                }
            ];
        this.imgContent = this
            .imgContent
            .map((val) => {
                var obj = {
                    ...val,
                    url: staticServer + val.url
                }
                return obj;
            })
    }
    getStatusImgs = () => {
        var imgArray = [...this.imgContent];

        var firstImg = imgArray
            .shift()
            .url;

        var restImgs = imgArray
            .slice(0, 3)
            .map((val) => {
                return val.url;
            });
        return {firstImg: firstImg, restImgs: restImgs}
    }
    getImgsArray = () => {
        return [...this.imgContent];
    }
}

export default ImagesModel;