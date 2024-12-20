'use client';

import { UploadedFile } from '@/@types/fileUpload';
import FileUpload from '@/components/Input/FileUploader';

const UploadsPage: React.FC = () => {
  const handleFilesUploaded = (files: UploadedFile[]) => {
    console.log('Files uploaded:', files);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">File Upload Component</h1>
      <FileUpload onFilesUploaded={handleFilesUploaded} />
    </div>
  );
};

export default UploadsPage;
