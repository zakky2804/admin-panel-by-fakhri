"use client";
import Image from "next/image";
import { useState, useEffect, ChangeEvent, DragEvent } from "react";
import { Upload } from "lucide-react";

type ImageUploadProps = {
  pathImage?: string; // gambar awal (opsional)
  handleChangeImage: (imageUrlPreview: string) => void;
};

export default function ImageUpload({
  pathImage,
  handleChangeImage,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  console.log(preview);

  useEffect(() => {
    if (pathImage) {
      setPreview(pathImage);
    }
  }, [pathImage]);

  const processFile = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      handleChangeImage(url); // kirim URL blob + nama file
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  return (
    <div className="w-full">
      <label
        className={`flex flex-col items-center justify-center w-full h-52 border-2 border-dashed rounded-lg cursor-pointer transition
          ${
            isDragging
              ? "border-border bg-blue-50/20"
              : "border-gray-500 hover:border-blue-400"
          }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        {preview ? (
          <Image
            src={preview}
            width={210}
            height={210}
            alt="Preview"
            className="object-contain rounded-lg"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-300">
            <Upload className="w-8 h-8 mb-2" />
            <p className="text-sm">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800×400px)
            </p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    </div>
  );
}
