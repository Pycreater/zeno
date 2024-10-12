// //https://ideogram.ai/assets/progressive-image/balanced/response/-AjJTJp2SVGJM0m4wYiZ_g

// // https://ideogram.ai/assets/progressive-image/balanced/response/fJdd6SbWSt2OoeD_OeSsAg

// //https://ideogram.ai/assets/progressive-image/balanced/response/hBqhBp3zQ7OFyzsiQAY16A

// // https://ideogram.ai/assets/progressive-image/balanced/response/-ibswbcTS-uS9xHvxAYQGw

// export interface Wallpaper {
//   id: number;
//   url: string;
//   name: string;
// }

// export function useWallPapers() {
//   return [
//     {
//       id: 1,
//       url: "https://ideogram.ai/assets/progressive-image/balanced/response/-AjJTJp2SVGJM0m4wYiZ_g",
//       name: "nigga1",
//     },
//     {
//       id: 2,
//       url: "https://ideogram.ai/assets/progressive-image/balanced/response/fJdd6SbWSt2OoeD_OeSsAg",
//       name: "nigga2",
//     },
//     {
//       id: 3,
//       url: "https://ideogram.ai/assets/progressive-image/balanced/response/hBqhBp3zQ7OFyzsiQAY16A",
//       name: "nigga3",
//     },
//     {
//       id: 4,
//       url: "https://ideogram.ai/assets/progressive-image/balanced/response/-AjJTJp2SVGJM0m4wYiZ_g",
//       name: "nigga4",
//     },

//     {
//       id: 5,
//       url: "https://ideogram.ai/assets/progressive-image/balanced/response/-AjJTJp2SVGJM0m4wYiZ_g",
//       name: "nigga1",
//     },
//     {
//       id: 6,
//       url: "https://ideogram.ai/assets/progressive-image/balanced/response/fJdd6SbWSt2OoeD_OeSsAg",
//       name: "nigga2",
//     },
//     {
//       id: 7,
//       url: "https://ideogram.ai/assets/progressive-image/balanced/response/hBqhBp3zQ7OFyzsiQAY16A",
//       name: "nigga3",
//     },
//     {
//       id: 8,
//       url: "https://ideogram.ai/assets/progressive-image/balanced/response/-AjJTJp2SVGJM0m4wYiZ_g",
//       name: "nigga4",
//     },
//   ];
// }

import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
// import { UNSPLASH_ACCESS_KEY } from "@env";

// Replace with your actual Unsplash access key obtained from https://unsplash.com/
// const unsplashAccessKey: string = UNSPLASH_ACCESS_KEY;

const unsplashAccessKey: string = "tpE0NXsfjBCgatXh3Qb2tT-aX0ZqsCpl7n22I7g49oc";

const unsplash = createApi({ accessKey: unsplashAccessKey });

export function useWallpapers(): Wallpaper[] {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const result = await unsplash.photos.getRandom({ count: 10 });

        console.log(result.response);

        // Handle if result.response is an array or a single object
        const photos = Array.isArray(result.response)
          ? result.response
          : [result.response];

        // console.log(photos);

        const wallpaperData = photos
          .filter((photo) => photo !== undefined && photo !== null) // Ensure photo is defined
          .map((photo) => ({
            id: photo.id || "N/A",
            url: photo.urls?.regular || "",
            name: photo.alt_description || "Wallpaper",
            createdAt: photo.created_at || "N/A", // Get the creation date
            likes: photo.likes || 0, // Get the number of likes
          }));

        setWallpapers(wallpaperData);
        // console.log("Fetched Wallpapers:", wallpaperData);
      } catch (error) {
        console.error("Error fetching wallpapers:", error);
        // Handle error gracefully (e.g., display an error message to the user)
      }
    };

    fetchWallpapers();
  }, []);

  return wallpapers;
}

// Define the Wallpaper interface for type safety
export interface Wallpaper {
  id: string;
  url: string;
  name: string;
  createdAt: string;
  likes: number;
}
