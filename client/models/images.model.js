import { staticServer } from 'utilities';

class ImagesModel {
    constructor(imgContent) {
        this.imgContent = [...imgContent];
        this.imgContent = this
            .imgContent
            .map((val) => {
                return staticServer + val.url;
            })
    }
    getStatusImgUrl = () => {
        var images = this.imgContent.length ? [...this.imgContent] : [
            staticServer + '/default/replaced-pic.jpg'
        ];
        var imgUrlArray = [...images];
        var firstImgUrl = images.shift()
        var restImgUrls = images.slice(0, 3);

        return {
            firstImgUrl: firstImgUrl,
            restImgUrls: restImgUrls,
            imgUrlArray: imgUrlArray
        }
    }
    getImgUrlsArray = () => {
        return [...this.imgContent];
    }

    getOneImgUrl = () => {
        var img = this.imgContent[0]
        var url = img ? img : staticServer + '/default/replaced-pic.jpg';
        return url;
    }
}

export default ImagesModel;