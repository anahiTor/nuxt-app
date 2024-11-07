import { FileTypes, IS_FOLDER_REGEXP } from "~/consts";
import type { File } from "~/types";

export const createStructure = (structure: string[], parentNode: File[]) => {
  const childNode = parentNode.find((n) => n.name === structure[0]);
  if (childNode) {
    structure.shift();
    createStructure(structure, childNode.children as File[]);
  } else {
    parentNode.push({
      name: structure[0],
      type: structure[0].match(IS_FOLDER_REGEXP)
        ? FileTypes.Directory
        : FileTypes.File,
      parentNode: null,
      children: [] as File[],
    });
  }
  return parentNode;
};

export const createRootAssets = (dir: string) => {};
