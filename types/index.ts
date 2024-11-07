export interface File {
    name: string,
    type: number
    children?: File[],
    parentNode?: string | null,
}

export interface Store {
  files: File[];
  errorMessage: string;
  selectedNode: File | null;
}