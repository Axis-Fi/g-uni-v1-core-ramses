import { ethers, network } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { getAddresses } from "../hardhat/addresses";

const addresses = getAddresses(network.name);

const op = async (signer: SignerWithAddress) => {
  const metapool = await ethers.getContractAt(
    "MetaPool",
    addresses.gUNIV3,
    signer
  );
  await metapool.burn(ethers.utils.parseEther("10"), { gasLimit: 6000000 });
};

(async () => {
  const [signer] = await ethers.getSigners();
  await op(signer);
})();