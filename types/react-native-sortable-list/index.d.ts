// Type definitions for react-native-sortable-list 0.0
// Project: https://github.com/gitim/react-native-sortable-list
// Definitions by: Michael Sivolobov <https://github.com/sivolobov>
//                 Vince Maiuri <https://github.com/RookY2K>
//                 Soner Köksal <https://github.com/renjfk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactElement } from "react";
import { GestureResponderEvent, PanResponderGestureState, StyleProp, ViewStyle } from "react-native";

interface DataByNumber<T> {
    [key: number]: T;
}

interface DataByString<T> {
    [key: string]: T;
}

interface RowProps<T = any, K = number> {
    active: boolean;
    data: T;
    key?: K | undefined;
    index?: number | undefined;
    disabled?: boolean | undefined;
    toggleRowActive?: ((event: GestureResponderEvent, gestureState?: PanResponderGestureState) => void) | undefined;
}

interface SortableListProps<T, K> {
    /**
     * data source
     */
    data: DataByNumber<T> | DataByString<T>;

    /**
     * an array of keys from data, the order of keys from the array will be used to initial rows order
     */
    order?: K[] | undefined;

    /**
     * style of HOC
     */
    style?: StyleProp<ViewStyle> | undefined;

    /**
     * these styles will be applied to the inner scroll view content container
     */
    contentContainerStyle?: StyleProp<ViewStyle> | undefined;

    /**
     * these styles will be applied to the inner scroll view content container, excluding the header and footer
     */
    innerContainerStyle?: StyleProp<ViewStyle> | undefined;

    /**
     * when true, the SortableList's children are arranged horizontally in a row instead of vertically in a column.
     * The default value is false.
     */
    horizontal?: boolean | undefined;

    /**
     * when false, the vertical scroll indicator will not be visible. The default value is true.
     */
    showsVerticalScrollIndicator?: boolean | undefined;

    /**
     * when false, the horizontal scroll indicator will not be visible. The default value is true.
     */
    showsHorizontalScrollIndicator?: boolean | undefined;

    /**
     * when false, rows are not sortable. The default value is true.
     */
    sortingEnabled?: boolean | undefined;

    /**
     * when false, the content does not scrollable. The default value is true.
     */
    scrollEnabled?: boolean | undefined;

    /**
     * Determines when the keyboard should stay visible after a tap.
     *  - 'never' (the default), tapping outside of the focused text input when the keyboard is up dismisses
     *    the keyboard. When this happens, children won't receive the tap.
     *  - 'always', the keyboard will not dismiss automatically, and the scroll view will not catch taps, but
     *    children of the scroll view can catch taps.
     *  - 'handled', the keyboard will not dismiss automatically when the tap was handled by a children,
     *    (or captured by an ancestor).
     */
    keyboardShouldPersistTaps?: "never" | "always" | "handled" | undefined;

    /**
     * whether you intend to use the toggleRowActive method to activate a row or use the out of box solution.
     */
    manuallyActivateRows?: boolean | undefined;

    /**
     * determines the height for vertical list and the width for horizontal list of the area at the begining and
     * the end of the list that will trigger autoscrolling. Defaults to 60.
     */
    autoscrollAreaSize?: number | undefined;

    /**
     * determines time delay in ms before pressed row becomes active. Defaults to 200 ms.
     */
    rowActivationTime?: number | undefined;

    /**
     * A RefreshControl that works the same way as a ScrollView's refreshControl.
     */
    refreshControl?: ReactElement | undefined;

    /**
     * Takes a row key, row index, data entry from the data source and its statuses disabled, active and should
     * return a renderable component to be rendered as the row. The child component will receive a method called
     * toggleRowActive (only if manuallyActivateRows={true}) to manually activate the row. Useful if you have
     * multiple touch responders in your view.
     */
    renderRow: (props: RowProps<T, K>) => ReactElement | null;

    /**
     * Renders returned component at the top of the list.
     */
    renderHeader?: (() => ReactElement) | undefined;

    /**
     * Renders returned component at the bottom of the list.
     */
    renderFooter?: (() => ReactElement) | undefined;

    /**
     * Called when rows were reordered, takes an array of rows keys of the next rows order.
     */
    onChangeOrder?: ((nextOrder: K[]) => void) | undefined;

    /**
     * Called when a row was activated (user long tapped).
     */
    onActivateRow?: ((key: K) => void) | undefined;

    /**
     * Called when the active row was released.
     */
    onReleaseRow?: ((key: K, currentOrder: K[]) => void) | undefined;

    /**
     * Called when a row was pressed.
     */
    onPressRow?: ((key: K) => void) | undefined;
}

export default class SortableList<T, K> extends Component<SortableListProps<T, K>> {
    /**
     * scrolls by a given y offset, either immediately or with a smooth animation
     */
    scrollBy(
        { dx, dy, animated }: { dx?: number | undefined; dy?: number | undefined; animated?: boolean | undefined },
    ): void;

    /**
     * scrolls to a given y offset, either immediately or with a smooth animation
     */
    scrollTo(
        { x, y, animated }: { x?: number | undefined; y?: number | undefined; animated?: boolean | undefined },
    ): void;

    /**
     * scrolls to a given row key, either immediately or with a smooth animation
     */
    scrollToRowKey({ key, animated }: { key?: K | undefined; animated?: boolean | undefined }): void;
}

export { RowProps };
