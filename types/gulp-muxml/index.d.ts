// Type definitions for gulp-muxml 2.0
// Project: https://github.com/t1st3/gulp-muxml
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as muxml from "muxml";
import { Transform } from "stream";

declare function gulpMuxml(opts: muxml.Options): Transform;

export = gulpMuxml;
