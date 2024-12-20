import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import FileUploaderIcon from '@/icons/FileUploaderIcon';

interface UploadedFile {
  name: string;
  uploadDate: string;
  uploaderName: string;
  size: number;
  preview: string;
}

const DEFAULT_MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const DEFAULT_ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];

interface FileUploadProps {
  onFilesUploaded?: (files: UploadedFile[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFilesUploaded }) => {
  const { control, setError, clearErrors } = useForm();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (files: FileList | null) => {
    if (files) {
      const validFiles = [...files]
        .filter((file) => {
          if (!DEFAULT_ALLOWED_FILE_TYPES.includes(file.type)) {
            setError('file_upload', {
              type: 'manual',
              message: `${file.name} is not a supported file type.`,
            });
            return false;
          }

          if (file.size > DEFAULT_MAX_FILE_SIZE) {
            setError('file_upload', {
              type: 'manual',
              message: `${file.name} exceeds the maximum file size of ${(DEFAULT_MAX_FILE_SIZE / 1024 / 1024).toFixed(2)}MB.`,
            });
            return false;
          }

          clearErrors('file_upload');
          return true;
        })
        .map((file) => ({
          name: file.name,
          uploadDate: new Date().toLocaleDateString(),
          uploaderName: 'Anonymous',
          size: file.size,
          preview: URL.createObjectURL(file),
        }));

      setUploadedFiles((prevFiles) => {
        const newFiles = [...prevFiles, ...validFiles];
        if (onFilesUploaded) {
          onFilesUploaded(newFiles);
        }
        return newFiles;
      });
    }
  };

  const handleFileDelete = (fileName: string) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div className="w-full">
      <Controller
        name="file_upload"
        control={control}
        render={({ fieldState }) => (
          <div>
            <label className="flex justify-center w-full h-40 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary hover:bg-lightprimary focus:outline-none">
              <span className="flex items-center justify-center flex-col">
                <FileUploaderIcon />
                <span className="font-medium text-gray-600">
                  Drop files to Attach, or
                  <span className="text-primary underline"> browse</span>
                </span>
                <span className="font-normal text-sm text-tint">
                  Supported formats: JPG,PNG,GIF,PDF
                </span>
              </span>
              <input
                type="file"
                onChange={(e) => {
                  setIsLoading(true);
                  handleFileChange(e.target.files);
                  setIsLoading(false);
                }}
                name="file_upload"
                className="hidden"
                accept={DEFAULT_ALLOWED_FILE_TYPES.join(', ')}
                multiple
              />
            </label>
            {fieldState.error && <p className="text-red-500 mt-2">{fieldState.error.message}</p>}
          </div>
        )}
      />

      {isLoading && <p className="text-blue-500 mt-2">Uploading...</p>}

      <ul className="mt-4">
        {uploadedFiles.map((file) => (
          <li key={file.name} className="flex justify-between items-center p-2 border-b">
            <div className="flex items-center space-x-4">
              {file.preview && (
                <img src={file.preview} alt={file.name} className="w-10 h-10 object-cover" />
              )}
              <div>
                <p>
                  {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </p>
                <p className="text-sm text-gray-500">Uploaded on: {file.uploadDate}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleFileDelete(file.name)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
