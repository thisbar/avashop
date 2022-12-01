import {UploadedFile} from "express-fileupload";

export default class ImageUploadHandler {
    public handle(image: UploadedFile): string  {
        this.guard(image);

        return image.tempFilePath;
    }

    private guard(image: UploadedFile) {
        if (!image) return;

        if (!/^image/.test(image.mimetype)) throw new Error(`The file ${image.name} is not a valid image`);
    }
}