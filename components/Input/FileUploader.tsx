import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Progress } from '@mantine/core';
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
  onFilesUploaded: (files: UploadedFile[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFilesUploaded }) => {
  const { control, setError, clearErrors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleFileChange = async (files: FileList | null) => {
    if (files) {
      setIsLoading(true); // Start loading
      setUploadProgress(0); // Reset progress

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

      // Simulate upload progress
      for (let i = 0; i <= 100; i++) {
        await new Promise((resolve) => setTimeout(resolve, 20));
        setUploadProgress(i);
      }

      setIsLoading(false);

      onFilesUploaded(validFiles);

      // Reset progress after a small delay
      setTimeout(() => setUploadProgress(0), 500);
    }
  };

  return (
    <div className="w-full">
      <Controller
        name="file_upload"
        control={control}
        render={({ fieldState }) => (
          <div>
            <label className="flex justify-center w-full h-40 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary hover:bg-blue-200 focus:outline-none">
              <span className="flex items-center justify-center flex-col">
                <FileUploaderIcon />
                <span className="font-medium text-gray-600">Select File to Upload</span>
                <span className="font-normal text-sm text-tint">
                  Supported formats: JPG,PNG,GIF,PDF
                </span>
              </span>
              <input
                type="file"
                onChange={(e) => handleFileChange(e.target.files)}
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
      {/* Progress Bar */}
      {isLoading && (
        <div className="my-4">
          <Progress value={uploadProgress} color="blue" striped />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
