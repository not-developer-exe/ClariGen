import React from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-lg font-semibold text-center bg-gray-700 text-white p-2">
          Original Image
        </h2>
        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-66 bg-gray-200">
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-lg font-semibold text-center bg-blue-900 text-white p-2">
          Enhanced Image
        </h2>
        {props.enhanced && !props.loading && (
          <img
            src={props.enhanced}
            alt=""
            className="w-full h-full object-cover"
          />
        )}

        {props.loading ? (
          <Loading />
        ) : (
          <div className="flex items-center justify-center h-66  bg-gray-200">
            Upload Image to see Magic
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
