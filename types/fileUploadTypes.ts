export interface UploadedFile {
    name: string;
    uploadDate: string;
    uploaderName: string;
    size: number;
    preview: string;
  }
  
 export  interface FileUploadProps {
    onFilesUploaded?: (files: UploadedFile[]) => void;
    maxFileSize?: number;
    allowedFileTypes?: string[];
  }