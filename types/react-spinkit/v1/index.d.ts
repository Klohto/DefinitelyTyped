// Type definitions for react-spinkit 1.1.4
// Project: https://github.com/KyleAMathews/react-spinkit
// Definitions by: Qubo <https://github.com/tkqubo>, Mleko <https://github.com/mleko>, Tom Crockett <https://github.com/pelotom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />

declare namespace spinner {
    export interface SpinnerProps {
        /**
         * Specify spinner to use.
         */
        spinnerName?:
            | "three-bounce"
            | "double-bounce"
            | "rotating-plane"
            | "folding-cube"
            | "wave"
            | "wandering-cubes"
            | "pulse"
            | "chasing-dots"
            | "circle"
            | "cube-grid"
            | "wordpress"
            | undefined;
        /**
         * Disable the initial fade-in of the spinner.
         */
        noFadeIn?: boolean | undefined;
        /**
         * Change the default "spinner" className.
         */
        overrideSpinnerClassName?: string | undefined;
        /**
         * Component className.
         */
        className?: string | undefined;
    }

    export interface Spinner extends React.ComponentClass<SpinnerProps> {
    }
}

declare const spinner: spinner.Spinner;
export = spinner;
