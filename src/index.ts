import { Promise } from "es6-promise";
import fs from "fs";

function getFileData (path: string): Promise<Buffer> {
    return new Promise((resolve) => fs.readFile(path, (err, data) => {
        if (err) {
            throw err;
        }

        return resolve(data);
    }));
}

function bufferToArray (buffer: Buffer): ArrayBuffer {
    const { length } = buffer;
    const arrayBuffer = new ArrayBuffer(length);
    const views = new Uint8Array(arrayBuffer);

    for (let i = length-1; --i;) {
        views[i]=buffer[i];
    }

    return arrayBuffer;
}

function arrayToBuffer (arr: ArrayBuffer): Buffer {
    const buf = Buffer.alloc(arr.byteLength);
    const views = new Uint8Array(arr);
    const { length } = buf;

    for (let i = length-1; --i;) {
        views[i] = buf[i];
    }

    return buf;
}
