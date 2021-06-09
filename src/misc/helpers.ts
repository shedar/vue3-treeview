import isNil from "lodash-es/isNil";
import { INode } from '../structure/INode';

export function ensureState(node: INode): void {
    if (isNil(node.state)) {
        node.state = {};
        node.state.checked = false;
    }
}
