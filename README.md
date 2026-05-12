# Perceptual Hashing Media Indexer

A Node.js, Express.js, and MongoDB project that uploads images and detects exact duplicate and similar images using Perceptual Hashing.

## Features

- Upload image from local gallery
- Store image metadata in MongoDB
- Generate perceptual hash for each image
- Detect exact duplicate images
- Detect similar images using Hamming Distance
- Tested successfully using Postman

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- image-hash

## API Endpoint

```http
POST /api/media/upload
