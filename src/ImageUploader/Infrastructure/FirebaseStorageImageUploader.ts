import fs from "fs";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../../etc/firebaseStorage";
import ImageUploader from "../Domain/ImageUploader";

export default class FirebaseStorageImageUploader extends ImageUploader {
    public async upload(filePath: string): Promise<string> {
        const file = fs.readFileSync(filePath);

        const storageRef = ref(storage, this.remoteFilePath);

        await uploadBytes(storageRef, file, this.metadata);
        await fs.promises.unlink(filePath);

        return await getDownloadURL(storageRef);
    }
}