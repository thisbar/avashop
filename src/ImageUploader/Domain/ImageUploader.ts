import { v4 as uuidv4 } from 'uuid';
import {injectable} from "inversify";

@injectable()
export default abstract class ImageUploader {
    readonly metadata = {
        contentType: 'image/jpeg'
    };

    readonly remoteFilePath: string = `images/products/${uuidv4()}.jpg`

    abstract upload(filePath: string): Promise<string>;
}