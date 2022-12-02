import { BasicLanguageSetKey } from "../data/localization/set";
import { Language, Translation } from "../data/localization/translation";
import { Relative } from "../data/relative";
import { TreeConstructState } from "./construct";
import { TreeNodeAttributes } from "./node";

export const getNodeAttributes = (language: Language, state: TreeConstructState, rel: Relative) => {
    const result: TreeNodeAttributes = {};

    if (state.reached) {
        result[Translation[language].basicSet[BasicLanguageSetKey.Order]] = `${state.analysed + 1}`;
    }

    return result;
}