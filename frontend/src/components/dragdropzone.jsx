import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

export default function DragDropZone({ onImage }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onImage(acceptedFiles[0]);
    }
  }, [onImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": []
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all duration-300
      ${
        isDragActive
          ? "border-pink-300 bg-pink-300/10"
          : "border-white/10 glass"
      }`}
    >
      <input {...getInputProps()} />

      <UploadCloud
        size={48}
        className="mx-auto text-pink-200 mb-4"
      />

      <p className="text-lg">
        Drag & Drop an image here
      </p>

      <p className="text-neutral-400 mt-2">
        or click to upload
      </p>
    </div>
  );
}