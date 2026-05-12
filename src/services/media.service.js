import Media from "../models/media.model.js";
import { generateImageHash } from "../utils/hash.util.js";
import { calculateHammingDistance } from "../utils/compareHash.util.js";


export const createMediaMetadata = async (file) => {
  const hash = await generateImageHash(file.path);

  // exact duplicate
  const existing = await Media.findOne({
    perceptualHash: hash
  });

  if (existing) {

    return {
      type: "duplicate",
      data: existing
    };

  }

  // similar images
  const allImages = await Media.find();

  for (const image of allImages) {

    const distance = calculateHammingDistance(
      hash,
      image.perceptualHash
    );
    // console.log("Distance:", distance);
    if (distance <= 15) {

      return {

        type: "similar",
        distance,
        data: image

      };

    }

  }

  // save new image
  const media = await Media.create({
    originalName: file.originalname,
    fileName: file.filename,
    size: file.size,
    type: file.mimetype,
    source: "local_gallery",
    path: file.path,
    perceptualHash: hash
  });

  return {
    type: "new",
    data: media
  };

};