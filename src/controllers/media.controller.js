import { createMediaMetadata } from "../services/media.service.js";

export const uploadMedia = async (req, res, next) => {

  try {

    if (!req.file) {

      return res.status(400).json({
        success: false,
        message: "No file uploaded"
      });

    }

    const result = await createMediaMetadata(req.file);

    // duplicate
    if (result.type === "duplicate") {

      return res.status(409).json({

        success: false,

        message: "Exact duplicate image detected",

        data: result.data

      });

    }

    // similar
    if (result.type === "similar") {

      return res.status(200).json({

        success: true,

        message: "Similar image detected",

        similarityDistance: result.distance,

        data: result.data

      });

    }

    // new image
    res.status(201).json({

      success: true,

      message: "New media indexed successfully",

      data: result.data

    });

  } catch (error) {

    next(error);

  }

};