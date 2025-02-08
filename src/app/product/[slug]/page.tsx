'use client'

import { client } from '@/sanity/lib/client'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/productCard';

interface IImage {
    _type: string;
    assets: {
        _ref: string;
        _type: string;
    };
}

interface IProducts {
    id: number;
    name: string;
    price: number;
    discountPercent: number;
    description: string;
    image: IImage;
    slug: { current: string };
    category: string;
    colors: string[];
    sizes: string[];
}

const Product = ({ params: { slug } }: { params: { slug: string } }) => {
    const [product, setProduct] = useState<IProducts | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = `*[_type == 'products' && slug.current == $slug][0] {
                    id, name, price, discountPercent, description, 
                    image, slug, category, colors, sizes
                }`;

                const data: IProducts | null = await client.fetch(query, { slug });

                if (data) {
                    setProduct(data);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchData();
    }, [slug]);

    if (!product) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <ProductCard product={product} />
        </div>
    );
};

export default Product;
