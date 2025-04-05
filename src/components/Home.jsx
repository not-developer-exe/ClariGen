import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageApi } from "../utils/enhcancedImageApi";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    // try {
    //   const enhanceURL = await enhancedImageApi(file);
    //   setEnhancedImage(enhanceURL);
    //   setLoading(false);
    // } catch (error) {
    //   console.error(error);
    //   alert("Failed to enhance the image, Please try again later!");
    // }
  };

  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        uploaded={uploadImage}
        enhanced={enhancedImage}
        loading={loading}
      />
    </>
  );
};

export default Home;
