import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x73C21B94280250e3a198de991f0EeD2e01c8D6D1",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Art Dear DAO NFT",
        description: "This NFT will give you access to ArtDAO!",
        image: readFileSync("scripts/assets/paintbrush.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()