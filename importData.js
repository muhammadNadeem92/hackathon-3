import { createClient } from '@sanity/client';
import dotenv from 'dotenv'
dotenv.config();

const client = createClient({
  projectId: "o6mtbysq",
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
  token:process.env.SANITY_API_TOKEN,
});

import slugify from 'slugify'; // Import slugify library

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'products',
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew,
        colors: product.colors,
        sizes: product.sizes,
        slug: {
          _type: 'slug',
          current: slugify(product.name, { lower: true, strict: true }), // Slugify function for auto slug
        },
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}


