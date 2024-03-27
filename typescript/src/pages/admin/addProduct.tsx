import { getAllProducts } from '@/services/products';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import React from 'react';
import axios from 'axios';
import { Iproduct } from '@/interfaces/products';
import { Link } from 'react-router-dom'

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const querryClient = useQueryClient();
    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['PRODUCT_KEYS'],
        queryFn: getAllProducts,
    });

    const mutation = useMutation({
        mutationFn: async (product) => {
            const response = await axios.post('http://localhost:8080/api/products', product);
            return response.data;
        },
        onSuccess: () => {
            querryClient.invalidateQueries({ queryKey: ['PRODUCT_KEYS'] });
        }
    })

    const { mutate: remove } = useMutation({
        mutationFn: async (_id: any) => {
            await axios.delete(`http://localhost:8080/api/products/${_id}`);
        },
        onSuccess: () => {
            querryClient.invalidateQueries({ queryKey: ['PRODUCT_KEYS'] });
        }
    })

    const onSubmit = (data: any) => {
        mutation.mutate(data);
    }
    if (isLoading) return <>Loading...</>
    if (isLoading) return <>Loading...</>
    // if (isPending) return <>Pending...</>
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" {...register('name')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" {...register('price')} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Des</label>
                    <input type="text" className="form-control" id="des" {...register('des')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="text" className="form-control" id="image" {...register('image')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Discount</label>
                    <input type="number" className="form-control" id="discount" {...register('discount')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Featured</label>
                    <input type="text" className="form-control" id="featured" {...register('featured')} />
                </div>
                <button className='btn btn-success ' type="submit">Add Product</button>
            </form>
            <table style={{ marginTop: '30px' }} className='table table-bordered '>
                <thead>
                    <tr>
                        <th scope="col">Key</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Des</th>
                        <th scope="col">Image</th>
                        <th scope="col">Discount</th>
                        {/* <th scope="col">Featured</th> */}
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    products?.map((product: Iproduct, index: any) => (
                        <tbody>
                            <tr>
                                <th key={index}>{index}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.des}</td>
                                <td><img width={100} src={product.image} alt="" /></td>
                                <td>{product.discount}</td>
                                {/* <td>{product.featured}</td> */}
                                <td>
                                    <Link className='btn btn-primary' to={`/admin/${product._id}/edit`}>Edit</Link>

                                    <button className='btn btn-danger' onClick={() => remove(product._id)}>Xoa</button>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }

                {/* <div key={index}>
                    Name: {product.name},
                    Price: {product.price} ,
                    Des: {product.des},
                    <img src={product.image} alt="" />,
                    Discount: {product.discount},
                    Featured: {product.featured}
                    <Link to={`/products/${item._id}/edit`}>Edit</Link>
                    <button onClick={() => dispatch({ type: "DELETE_PRODUCTS", payload: item._id! })}>Xoa</button>
                </div> */}
            </table>

        </div>
    )
}



export default AddProduct;;