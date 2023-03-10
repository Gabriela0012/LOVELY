import productModel from './models/product.dao.js';

export default class ProductsDao{

  getAll = () =>{
    return productModel.find().lean();
  }

  getById = (id) =>{
    return productModel.findOne({_id:id}).lean();
  }

  save = (product) =>{
    return productModel.create(product);
  }

  update = (id,product) =>{
    return productModel.findByAndUpdate(id,{$set:product}) 
  }

  deleteById = (id) => {
    return productModel.findByIdAndDelete({_id:id})
  }

}