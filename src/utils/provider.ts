import { AlchemyProvider, InfuraProvider, JsonRpcProvider } from '@ethersproject/providers';
//import { ethers } from "ethers";
//const { AlchemyProvider, InfuraProvider, JsonRpcProvider } = ethers.providers;
import config from '@/config';

 
const provider = ("rpcUrl" in config) ? 
    new JsonRpcProvider(config.rpcUrl) :
    new InfuraProvider(config.network, config.infuraKey);

export default provider;
 
const debugProvider = ("alchemyKey" in config) ? 
    new AlchemyProvider(config.network, config.alchemyKey):
    null;
export { debugProvider };

