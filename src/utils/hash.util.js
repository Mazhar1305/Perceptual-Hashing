import { imageHash } from "image-hash";

export const generateImageHash = (imagePath) => {

  return new Promise((resolve, reject) => {

    imageHash(imagePath, 16, true, (error, data) => {

      if (error) {
        reject(error);
      } else {
        resolve(data);
        // console.log(data);

      }

    });

  });

};