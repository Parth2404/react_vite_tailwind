import { ethers } from "ethers";
import { abi as ERC20ABI } from "../abis/ERC20.json";

export const getEventsData = (
    cb: (from: string, to: string, value: string, event: string) => void
) => {
    // To connect to a custom URL:
    let url = `wss://mainnet.infura.io/ws/v3/${import.meta.env.VITE_INFURA_KEY}`;
    let customHttpProvider = new ethers.WebSocketProvider(url);

    let contract = new ethers.Contract(
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
        ERC20ABI,
        customHttpProvider
    );

    contract.on("Transfer", cb);
};

