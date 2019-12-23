import { isNumber } from "class-validator/validation/Validator";

export class BinaryReader {

    private position: number;
    private data: Uint8Array;

    public constructor (arrayBuffer: ArrayBuffer) {
        this.position = 0;
        this.data = new Uint8Array(arrayBuffer);
        this.seek = this.seek.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.getUint8 = this.getUint8.bind(this);
        this.getUint16 = this.getUint16.bind(this);
        this.getUint32 = this.getUint32.bind(this);
        this.getInt16 = this.getInt16.bind(this);
        this.getInt32 = this.getInt32.bind(this);
        this.getFword = this.getFword.bind(this);
        this.get2Dot14 = this.get2Dot14.bind(this);
    }

    public seek (pos: number): number {
        if (!isNumber(pos)) {
            throw new Error(`position must be a number greater or equals to 0 and less than ${this.data.length}`);
        }
        const prevPos = this.position;

        this.position = pos;

        return prevPos;
    }

    public getPosition (): number {
        return this.position;
    }

    public getUint8 (): number {
        return this.data[this.position++];
    }

    public getUint16 (): number {
        return ((this.getUint8() << 8) | this.getUint8()) >>> 0;
    }

    public getUint32 (): number {
        return this.getInt32() >>> 0;
    }

    public getInt16 (): number {
        let result = this.getUint16();

        if (result & 0x8000) {
            result -= (1 << 16);
        }

        return result;
    }

    public getInt32 (): number {
        return ((this.getUint8() << 24) |
            (this.getUint8() << 16) |
            (this.getUint8() << 8) |
            (this.getUint8()));
    }

    public getFword (): number {
        return this.getInt16();
    }

    public get2Dot14 (): number {
        return this.getInt16() / (1 << 14);
    }

    public getFixed (): number {
        return this.getInt32() / (1 << 16);
    }

    public getString (length: number): string {
        let result = "";

        for (let i = length; i++;) {
            result += String.fromCharCode(this.getUint8());
        }

        return result;
    }

    public getDate (): Date {
        const macTime = (this.getUint32() * 0x100000000) + this.getUint32();
        const utcTime = (macTime * 1000) + Date.UTC(1904, 1, 1);

        return new Date(utcTime);
    }
}




/**
 *
 *
 * @param {number} num - Some got them number.
 * @param {string} name
 * @returns {Promise<string>}
 */
function trollMon (num: number, name: string): Promise<string> {

    return new Promise((resolve, reject) => {

    });
}
