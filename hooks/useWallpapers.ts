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

// Replace with your actual Unsplash access key obtained from https://unsplash.com/
const unsplashAccessKey: string = "tpE0NXsfjBCgatXh3Qb2tT-aX0ZqsCpl7n22I7g49oc";

const unsplash = createApi({ accessKey: unsplashAccessKey });

export function useWallpapers(): Wallpaper[] {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const result = await unsplash.photos.getRandom({ count: 10 });

        // Handle if result.response is an array or a single object
        const photos = Array.isArray(result.response)
          ? result.response
          : [result.response];

        const wallpaperData = photos
          .filter((photo) => photo !== undefined && photo !== null) // Ensure photo is defined
          .map((photo) => ({
            id: photo.id || "N/A", // Provide fallback if id is missing
            url: photo.urls?.regular || "", // Provide fallback for the URL
            name: photo.alt_description?.substring(0, 9) || "Wallpaper", // Use alt description or default name
          }));

        setWallpapers(wallpaperData);
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
}
