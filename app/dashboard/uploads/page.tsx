'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import FileUpload from '@/components/Input/FileUploader';
import ImagePreview from '@/components/Modal/ImagePreview';
import { UploadedFile } from '@/types/fileUploadTypes';

const UploadsPage: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const handleCloseModal = () => setModalOpened(false);
  useEffect(() => {
    // Load images from localStorage on mount
    const savedFiles = localStorage.getItem('uploadedFiles');
    if (savedFiles) {
      setUploadedFiles(JSON.parse(savedFiles));
    }
  }, []);

  const handleFilesUploaded = (files: UploadedFile[]) => {
    setUploadedFiles((prevFiles) => {
      const newFiles = [...prevFiles, ...files];
      // Save the updated list to localStorage
      localStorage.setItem('uploadedFiles', JSON.stringify(newFiles));
      return newFiles;
    });
  };

  const handleFileDelete = (fileName: string) => {
    setUploadedFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((file) => file.name !== fileName);
      // Save the updated list to localStorage
      localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
      return updatedFiles;
    });
  };

  const handleImageClick = (imageUrl: string) => {
    setModalOpened(true);
    setSelectedImage(imageUrl);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">File Upload </h1>

      {/* File Upload Component */}
      <FileUpload onFilesUploaded={handleFilesUploaded} />

      {/* Display uploaded files */}
      <h2 className="text-lg font-bold mt-6">Uploaded Images</h2>
      <ul className="mt-4">
        {uploadedFiles.map((file) => (
          <li key={file.name} className="flex justify-between items-center p-2 border-b">
            <div className="flex items-center space-x-4">
              {file.preview && (
                <Image
                  src={file.preview}
                  alt={file.name}
                  className="w-10 h-10 object-cover cursor-pointer"
                  onClick={() => handleImageClick(file.preview)}
                  width={100}
                  height={100}
                />
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
              X
            </button>
          </li>
        ))}
      </ul>
      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <ImagePreview imageUrl={selectedImage} onClose={handleCloseModal} opened={modalOpened} />
      )}
    </div>
  );
};

export default UploadsPage;
