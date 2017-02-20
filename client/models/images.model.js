class ImagesModel {
    constructor(imgContent) {
        this.imgContent = imgContent && imgContent.length ? imgContent : ["/client/assets/images/replaced-pic.jpg"];
    }
    getStatusImgs = () => {
        var imgArray = this.imgContent.concat();
        var firstImg = imgArray.shift();
        var restImgs = imgArray.slice(0, 3);
        return {
            firstImg: firstImg,
            restImgs: restImgs
        }
    }
    getImgsArray = () => {
        return this.imgContent.concat();
    }
}

export default ImagesModel;