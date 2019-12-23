import { BinaryReader } from "./BinaryReader";

export interface Table {
    [x: string]: {
        checksum: number;
        offset: number;
        length: number;
    };
}

export class TypeFont {

    private file: BinaryReader;

    public constructor (arrayBuffer: ArrayBuffer) {

        this.file = new BinaryReader(arrayBuffer);
    }

    public readOffsetTables (file: BinaryReader) {
        const tables: Table[] = [];

        this.scalarType = file.getUint32();
        const numberOfTables = file.getUint16();
    }

    public getFile (): BinaryReader {
        return this.file;
    }
}
