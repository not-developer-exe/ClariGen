import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const uploadImageHandler = (file) => {
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)

    // Call APO
  }
  
  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler}/>
      <ImagePreview 
      uploaded = {uploadImage}
      enhanced = {enhancedImage}
      loading = {loading}
      />
    </>
  );
};

export default Home;
