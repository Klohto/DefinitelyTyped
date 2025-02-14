// Type definitions for json-mask 2.0
// Project: https://github.com/nemtsov/json-mask#readme
// Definitions by: Simon Dean <https://github.com/simondean>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type DeepPartial<T> = T extends any[] ? Array<T[number]>
    : T extends Record<string, any> ? {
            [P in keyof T]?: DeepPartial<T[P]>;
        }
    : T;

interface Prop {
    type: "array" | "object" | undefined;
    isWildcard: true | undefined;
    properties: Props;
}

interface Props {
    [value: string]: Prop;
}

type Mask = (<T>(obj: T, mask: string | undefined | null) => DeepPartial<T> | null) & {
    compile: (text: string | undefined | null) => Props | null;
    filter: <T>(obj: T, compiledMask: Props | undefined | null) => DeepPartial<T> | null;
};

declare const mask: Mask;

export = mask;
