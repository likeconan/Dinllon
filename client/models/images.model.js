class ImagesModel {
    constructor(imgStr) {
        this.imgStr = imgStr;
    }
    getStatusImgs = () => {
        if (this.imgStr) {
            var imgArray = this.imgStr.split(';');
            imgArray.pop();
        } else {
            var imgArray = ["/client/assets/images/replaced-pic.jpg"];
        }
        var firstImg = imgArray.shift();
        var restImgs = imgArray.slice(0, 3);
        return {
            firstImg: firstImg,
            restImgs: restImgs
        }
    }
    getImgsArray = () => {
        if (this.imgStr) {
            var imgArray = this.imgStr.split(';');
            imgArray.pop();
        } else {
            var imgArray = ["/client/assets/images/replaced-pic.jpg"];
        }
        return imgArray;
    }
}

export default ImagesModel;