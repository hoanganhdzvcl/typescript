import { getAllProductById, getAllProducts } from '@/services/products';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import React from 'react';
import axios from 'axios';
import { Iproduct } from '@/interfaces/products';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const EditProduct = () => {
    const { register, handleSubmit } = useForm();
    const querryClient = useQueryClient();
    const { id } = useParams();
    const { data: products, isLoading } = useQuery({
        queryKey: ['PRODUCT_KEYS', id],
        queryFn: async () => {
            return await getAllProductById(id as any);
        },
    });
    // console.log(products);

    const { mutate: edit } = useMutation({
        mutationFn: async (product: Iproduct) => {
            await axios.patch(`http://localhost:8080/api/products/${id}`, product);
        },
        onSuccess: () => {
            querryClient.invalidateQueries({ queryKey: ['PRODUCT_KEYS'] });
            <Navigate to="/admin/products" replace={true} />
        }

    })
    const onSubmit = (data: any) => {
        edit(data);
    }
    if (isLoading) return <>Loading...</>
    if (isLoading) return <>Loading...</>
    // if (isPending) return <>Pending...</>
    return (
        <div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name:</label>
                <input type="text" id="name" defaultValue={products.name}  {...register('name')} />
                <label>Price:</label>
                <input type="number" id="price" defaultValue={products.price}  {...register('price')} />
                <label>Des:</label>
                <input type="text" id="des" defaultValue={products.des}  {...register('des')} />
                <label>image:</label>
                <input type="text" id="image" defaultValue={products.image}  {...register('image')} />
                <label>Discount:</label>
                <input type="number" id="discount" defaultValue={products.discount}  {...register('discount')} />
                <label>Featured:</label>
                <input type="boolean" id="featured" defaultValue={products.featured}  {...register('featured')} />
                <button type="submit">Update Product</button>
            </form> */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" defaultValue={products.name} {...register('name')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" defaultValue={products.price} id="price" {...register('price')} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Des</label>
                    <input type="text" className="form-control" id="des" defaultValue={products.des} {...register('des')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="text" className="form-control" id="image" defaultValue={products.image} {...register('image')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Discount</label>
                    <input type="number" className="form-control" id="discount" defaultValue={products.discount} {...register('discount')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Featured</label>
                    <input type="text" className="form-control" id="featured" defaultValue={products.featured} {...register('featured')} />
                </div>
                <button className='btn btn-success ' type="submit">Add Product</button>
            </form>
        </div>
    )
}



export default EditProduct;;