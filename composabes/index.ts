import {
  FileTypes,
  IS_FOLDER_REGEXP,
  MAX_FOLDER_DEPTH,
  MAX_POSIBLE_ASSET_DEPTH,
} from "~/consts";
import { useFilesStore } from "~/stores";

export const useValidation = (path: string) => {
  const store = useFilesStore();
  const isDirectory = IS_FOLDER_REGEXP.test(path);
  const folderStructure = path.split("/").filter((e) => e);
  if (
    folderStructure.length < MAX_FOLDER_DEPTH ||
    (folderStructure.length < MAX_POSIBLE_ASSET_DEPTH && !isDirectory)
  ) {
    store.setErrorMessage("");
    store.addFileStructure({
      folderStructure,
      type: isDirectory ? FileTypes.Directory : FileTypes.File,
    });
  } else {
    store.setErrorMessage(
      "Invalid Path. Please make sure that the depth is less than 2 levels"
    );
  }
  return {
    isDirectory,
  };
};
