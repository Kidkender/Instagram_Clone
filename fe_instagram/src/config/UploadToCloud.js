import axios from "axios";

export const uploadToCloud = async (image) => {
  if (image) {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram");
    data.append("cloud_name", "dk6y8q94b");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dk6y8q94b/image/upload",
      data
    );
    const fileData = await res.data;
    console.log("fileData ", fileData);
    return fileData.url.toString();
  }
};
