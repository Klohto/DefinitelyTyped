// Type definitions for json2xml 0.1
// Project: https://github.com/estheban/node-json2xml
// Definitions by: Gabriel Fournier <https://github.com/carboneater>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function json2xml(
    json: unknown,
    opts?: { header?: boolean | undefined; attributes_key?: string | undefined },
): string;

export = json2xml;
