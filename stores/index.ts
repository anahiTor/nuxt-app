import { defineStore } from "pinia";
import { FileTypes, IS_FOLDER_REGEXP } from "~/consts";
import type { File, Store } from "~/types";

// [ {name: "folder", type: folder, children: [{name: test}, type: folder]}, {name: test1} ]

export const useFilesStore = defineStore("files", {
  state: (): Store => ({ files: [], errorMessage: "", selectedNode: null }),
  getters: {
    getRootAssetsByName: (state: Store) => state.files.map((a) => a.name),
  },
  actions: {
    addFileStructure(payload: { folderStructure: string[]; type: number }) {
      for (let i = 0; i < payload.folderStructure.length; i++) {
        const dir = payload.folderStructure[i];
        if (i === 0 && !this.getRootAssetsByName.includes(dir)) {
          this.files.push({
            name: dir,
            type: dir.match(IS_FOLDER_REGEXP)
              ? FileTypes.Directory
              : FileTypes.File,
            parentNode: null,
            children: [],
          });
        } else {
          this.files = createStructure(payload.folderStructure, this.files);
        }
      }
    },
    setErrorMessage(payload: string) {
      this.errorMessage = payload;
    },
    setSelectedNode(payload: File) {
      this.selectedNode = payload;
    },
  },
});
