class ImagesModel {
    constructor(imgStr) {
        this.imgStr = imgStr;
    }
    getStatusImgs = () => {
        if (this.imgStr) {
            var imgArray = this.imgStr.split(';');
            imgArray.pop();
        } else {
            var imgArray = ["/Content/Images/menu/img-1.jpg"];
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
            var imgArray = [];
        }
        return imgArray;
    }
}

export default ImagesModel;