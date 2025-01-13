import axios from "axios";
import { enqueueSnackbar } from "notistack";

const upload = async (file) => {
  // console.log(import.meta.env.VITE_UPLOAD_LINK);
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "protechgig");

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/dxckiulum/image/upload", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
