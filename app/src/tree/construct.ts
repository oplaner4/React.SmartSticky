import { BasicLanguageSetKey } from "../data/localization/set";
import { Language, Translation } from "../data/localization/translation";
import { Relative } from "../data/relative";
import { DirectRelationship, RelativeNavigation } from "../data/relativeProps";
import { getFormattedInBraces } from "../misc/utils";
import { getNodeAttributes } from "./attributes";
import { TreeNode } from "./node";

export interface TreeConstructState {
    actual: TreeNode;
    reached: boolean;
    analysed: number;
}

export const constructFamilyTree = (
    rootNode: TreeNode, language: Language, relatives: Array<number>
) => {
    const me: TreeNode = {
      name: Translation[language].basicSet[BasicLanguageSetKey.Me],
      children: [],
      parent: rootNode,
      attributes: {},
    };

    rootNode.children.push(me);

    const state: TreeConstructState = {
      actual: me,
      reached: false,
      analysed: 0,
    };

    relatives.forEach((_, relIndex: number) => {
      const rel = relatives[relatives.length - 1 - relIndex];
      const navigation = RelativeNavigation[rel];
      state.reached = false;

      navigation.forEach((direction: number, dirIndex: number) => {
        state.reached = dirIndex === navigation.length - 1;

        switch (direction) {
            case DirectRelationship.Sibling:
                constructSiblingNode(language, state, rel, rootNode);
                break;
            case DirectRelationship.Parent:
                constructParentNode(language, state, rel, rootNode);
                break;
            case DirectRelationship.Child:
                constructChildNode(language, state, rel);
                break;
            case DirectRelationship.Partner:
                constructPartnerNode(language, state, rel, rootNode);
            default:
                break;
        }
      });
      state.analysed++;
    });
};

const constructSiblingNode = (
    language: Language, state: TreeConstructState,
    rel: Relative, rootNode: TreeNode,
) => {
  const reached = state.reached;
  state.reached = false;
  constructParentNode(language, state, rel, rootNode);
  state.reached = reached;
  constructChildNode(language, state, rel);
};

const constructChildNode = (
    language: Language, state: TreeConstructState,
    rel: Relative,
) => {
  const child = {
    name: state.reached ?
        Translation[language].relativeSet[rel] :
        getFormattedInBraces(
          Translation[language].basicSet[BasicLanguageSetKey.Child]),
    children: [],
    parent: state.actual,
    attributes: getNodeAttributes(language, state, rel),
  };

  state.actual.children.push(child);
  state.actual = child;
};

const constructParentNode = (
    language: Language, state: TreeConstructState,
    rel: Relative, rootNode: TreeNode,
) => {
    console.assert(state.actual.parent != null);

    if (state.actual.parent === rootNode) {
      state.actual.parent = {
        name: getFormattedInBraces(
          Translation[language].basicSet[BasicLanguageSetKey.Parent]),
        children: [state.actual],
        parent: rootNode,
        attributes: {},
      };

      rootNode.children = rootNode.children.filter(child => child !== state.actual);
      rootNode.children.push(state.actual.parent);
    }

    if (state.actual.parent) {
      if (state.reached) {
          state.actual.parent.name = Translation[language].relativeSet[rel];
      }

      state.actual.parent.attributes = getNodeAttributes(language, state, rel);
      state.actual = state.actual.parent;
    }
};

const constructPartnerNode = (
    language: Language, state: TreeConstructState,
    rel: Relative, rootNode: TreeNode,
) => {
    console.assert(state.actual.parent != null);

    let partnerParent = rootNode;

    while (state.actual.parent != rootNode) {
      const parent = {
        name: getFormattedInBraces(
          Translation[language].basicSet[BasicLanguageSetKey.Parent]),
        children: [],
        parent: partnerParent,
        attributes: {},
      };

      partnerParent.children.push(parent);
      partnerParent = parent;
      if (state.actual.parent) {
        state.actual = state.actual.parent;
      }
    }

    const partner = {
      name: state.reached ?
        Translation[language].relativeSet[rel] :
        getFormattedInBraces(
          Translation[language].basicSet[BasicLanguageSetKey.Parent]),
      children: [],
      parent: partnerParent,
      attributes: getNodeAttributes(language, state, rel),
    };

    partnerParent.children.push(partner);
    state.actual = partner;
};