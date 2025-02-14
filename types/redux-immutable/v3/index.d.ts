// Type definitions for redux-immutable v3.0.33
// Project: https://github.com/gajus/redux-immutable
// Definitions by: Sebastian Sebald <https://github.com/sebald>
//                 Gavin Gregory <https://github.com/gavingregory>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Collection } from "immutable";
import * as Redux from "redux";

export declare function combineReducers<S, T>(
    reducers: Redux.ReducersMapObject,
    getDefaultState?: () => Collection.Keyed<T, S>,
): Redux.Reducer<S>;
export declare function combineReducers<S>(
    reducers: Redux.ReducersMapObject,
    getDefaultState?: () => Collection.Indexed<S>,
): Redux.Reducer<S>;
