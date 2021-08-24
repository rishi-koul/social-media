import axios from "axios";

const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "social_media");
    form.append("cloud_name", "indersingh");

    const res = await axios.post(process.env.CLOUDINARY_URL, form);
    console.log("Here is return", res.data.url);
    return res.data.url;
  } catch (error) {
    console.log(error);
    return;
  }
};

export default uploadPic;
