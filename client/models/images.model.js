class ImagesModel {
    constructor(imgContent) {
        this.imgContent = imgContent && imgContent.length
            ? imgContent
            : ["/client/assets/images/replaced-pic.jpg"];
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