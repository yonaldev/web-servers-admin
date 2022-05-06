const { ProductEntity } = require("../../domain/entities");
const { MarketRepository } = require("../../domain/repositories");
const { ProductStorage } = require("../../interfaces/storage");

const { getImageRelated } = require("../../infrastructure/clientapis/pexels");

const marketRepository = new MarketRepository(new ProductStorage());

module.exports = (dataProduct) => {
  console.log(dataProduct);
  return new Promise(async (resolved, reject) => {
    try {
      const { name, description, price } = dataProduct;

      const image = await getImageRelated(name);

      const result = await marketRepository.saveProduct(
        new ProductEntity({
          name,
          description,
          image,
          price,
          active: "1",
        })
      );
      resolved(result);
    } catch (error) {
      reject(error);
    }
  });
};
