import { useState } from "react";
import axios from "axios";

function ByAxiosApiCall() {
  const [url, setUrl] = useState("");

  const getData = async () => {
    // const response = await axios.get("https://random.dog/woof.json");
    const { data } = await axios.get("https://random.dog/woof.json");

    // console.log(data);

    if (data.url.endsWith(".mp4") || data.url.endsWith(".webm")) {
      getData();
      return;
    }

    setUrl(data.url);
  };

  return (
    <div className="flex flex-col gap-10 items-center m-20">
      <h1 className="text-white font-bold text-3xl ">
        Click for Random Dog Images
      </h1>
      <h1 className="text-gray-500 font-bold ">
        Loading Images Takes a little Time
      </h1>

      <button
        onClick={() => getData()}
        className="font-bold text-3xl w-1/4 bg-amber-50 text-black p-4 rounded-md cursor-pointer active:scale-90"
      >
        Click Me
      </button>

      {/* <img className="w-1/4 h-1/3 rounded-md" src={url} alt="Image" /> */}

      {/* Fallback value */}
      {/* <img src={dog || undefined} alt="dog" /> */}

      {/* Conditional Rendering */}
      {url && <img className="w-1/4 h-1/3 rounded-md" src={url} alt="Image" />}
    </div>
  );
}

export default ByAxiosApiCall;
