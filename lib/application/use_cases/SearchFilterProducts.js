const { MarketRepository } = require("../../domain/repositories");
const { ProductStorage } = require("../../interfaces/storage");

const marketRepository = new MarketRepository(new ProductStorage());

module.exports = (search) => marketRepository.searchFilterProducts(search);
