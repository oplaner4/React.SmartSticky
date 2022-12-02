export type TreeNodeAttributes = Record<string, string>;

export interface TreeNode {
    name: string,
    children: Array<TreeNode>,
    parent: TreeNode | null,
    attributes: TreeNodeAttributes,
};