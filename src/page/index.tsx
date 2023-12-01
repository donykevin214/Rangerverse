import type  WalletConnectProvider from '@walletconnect/ethereum-provider'
import Logo from '../assets/RV-logo-01.jpeg'
import NFT from '../assets/Rangers.gif';
import { useState, useEffect } from "react";
import { WalletModal } from '../component/WalletModal';
import { EthereumProvider } from "@walletconnect/ethereum-provider";
import { toast } from 'react-toastify';
import { ethers } from 'ethers';
// import { contractAddress, abi } from "./Rangerverse.json";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import {koiAddress, koiAbi} from './koiguys.json';

export const MintPage = () => {
    const message = "This is just for verifying wallet owner";
    
    const [address, setAddress] = useState<string>();
    const [wlAddress, setWLAddress] = useState<string>();
    const [fcfsAddress, setFCFSAddress] = useState<string>();
    // const [signature, setSignature] = useState("");
    const [showModal, setShowModal] = useState(false);
    
    const [web3Provider, setWeb3Provider] = useState<WalletConnectProvider>()

  
    const formatWallet = (wallet: string, nb = 4) => {
        if (!wallet) return '';
        return `${wallet.substring(0, nb + 2)}...${wallet.substring(wallet.length - nb)}`;
    }
    const handleLogout = async() => {
        setAddress('');
    }

    const switchNetwork = async () => {
        try {
          if (ethereum) {
            await ethereum?.request?.({
              method: "wallet_switchEthereumChain",
              params: [ { chainId: '0x1', } ],
            });
          } else {
            return "no metamask";
          }
        } catch (error: any) {
          if (error.code === 4902 || error.code === -32603) {
            try {
              await ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: '0x1',
                    chainName: "Ethereum",
                    rpcUrls: ["https://mainnet.infura.io/v3/"],
                    nativeCurrency: {
                      name: "ETH",
                      symbol: "ETH",
                      decimals: 18,
                    },
                    blockExplorerUrls: ["https://etherscan.io"],
                  }],
              });
              return true;
            } catch (addError) {
              return false;
            }
          }
          return false;
        }
        return true;
    };

    const metamaskClick = async () => {
        const chainId = await ethereum.request({
            method: 'eth_chainId',
        });
        console.log(chainId);
        if (chainId !== '0x1') {
          const res = await switchNetwork();
          if (!res) {
            toast( `add network fail`, {
              type: "error"
            });
            return;
          } else if (res === "no metamask") {
            toast(`Please install the metamask plugin`,{
              type: "error"
            });
          }
        }
        await ethereum.request({ method: 'eth_requestAccounts' });
        setShowModal(false);
        handleSign();
    };
    
    const walletConnectClick = async () => {
        try {
            const provider = await EthereumProvider.init({
                projectId : '612df1024874745bccdd7c078f98d5c9', // REQUIRED your projectId
                chains: [1], // REQUIRED chain ids
                optionalChains: [5, 56, 137, 10, 100, 80001],
                showQrModal: true, // REQUIRED set to "true" to use @walletconnect/modal,
                // methods, // OPTIONAL ethereum methods
                // optionalMethods: ['eth_signTypedData', 'eth_signTypedData_v4', 'eth_sign'],
                events: ["chainChanged", "accountsChanged"], // OPTIONAL ethereum events
                // optionalEvents: ["accountsChanged", "chainChanged"],
                // rpcMap, // OPTIONAL rpc urls for each chain
                // metadata, // OPTIONAL metadata of your app
                qrModalOptions:{
                    themeMode: 'dark',
                }, // OPTIONAL - `undefined` by default
            });
            close();
            await provider.connect({
                chains: [1], // OPTIONAL chain ids
                rpcMap: {
                    1: "https://mainnet.infura.io/v3/175a6f6149e04964a38455979e4825fe",
                    56: "https://bsc-dataseed1.binance.org",
                    66: "https://exchainrpc.okex.org",
                    128: "https://http-mainnet-node.huobichain.com",
                    137: "https://rpc-mainnet.maticvigil.com",
                    80001: "https://rpc-mumbai.maticvigil.com",
                    42161: "https://arb1.arbitrum.io/rpc",
                    11155111: "https://sepolia.infura.io/v3/",
                }, // OPTIONAL rpc urls
                // pairingTopic, // OPTIONAL pairing topic
            });
            
            // await provider.enable();
            provider.on('display_uri', (uri: string) => {
                console.log("uri", uri);
            })
            // window.walletConnectProvider = provider;
            
            if(provider){
                setWeb3Provider(provider);
                // setConnected('WalletConnect');
                setAddress(provider.accounts[0]);
            }
            
            provider.on("accountsChanged", (data: any) => {
                // setTimeout(() => {
                    console.log(data);
                    // if (chainIds === 1) {
                    // globalStore.setState({
                    //     globalAccount: accounts[0],
                    // });
                    // setStore(connectorLocalStorageKey, "true");
                    // setIsMetaMask.on();
                    // setRandom(Math.random());
                    // handleSign();
                    // }
                // }, 1000);
            });
           
            provider.on("chainChanged", (data: any) => {
                console.log("data", data)
            });
            provider.on("connect", (data: any) => {
                console.log("connect", data)
            });
            provider.on("disconnect", () => {
            });
            //  Enable session (triggers QR Code modal)
            
        } catch (err) {
            console.log(err, "err");
        }
    };
    

    const handleSign = async () => {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        setAddress(signer.address);
        const signature = await signer.signMessage(message);
        console.log(signature);
        // setSignature(signature);
    };

    const mintNFT = async () => {
        if(web3Provider){
            // await web3Provider.request({ method: 'eth_requestAccounts' })
            const provider = new ethers.BrowserProvider(web3Provider);
            // const provider = new ethers.BrowserProvider(ethereum);
            const signer = await provider.getSigner();
            // const signature = await signer.signMessage(message);
            const contract =  new ethers.Contract(koiAddress, koiAbi, signer);
            // console.log(signature);
            // const name = await contract.name();
            const name  = await contract.symbol();
            console.log(name);
        }
    }

    const verifyFCFSList = async () => {
        const provider = ethers.getDefaultProvider("mainnet");
        const contract =  new ethers.Contract(koiAddress, koiAbi, provider);
        const name  = await contract.symbol();
        console.log(fcfsAddress, name, wlAddress);
        
    }

    useEffect(() => {

    }, [])
    return (
        <>
            <div className="bg-rv-bg-1 w-full lg:h-full bg-cover absolute">
                <div className="bg-black w-full font-chalkboard text-white p-4 fixed top-0 z-50">
                    <div className='flex justify-between items-center w-11/12 mx-auto'>
                        <a href='/'><img src={Logo} width={200} height={30}/></a>
                        {
                            address ?
                                <button className='border p-2 rounded-md' onClick={handleLogout}>{formatWallet(address)}</button>
                                :
                                <button className='border p-2 rounded-md' onClick={() => setShowModal(true)}>Connect Wallet</button>
                        }
                        
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-evenly mx-auto mt-[10rem] gap-4 mb-[10rem] lg:mb-0'>
                    <div className='flex flex-col justify-center items-center border w-[20rem] h-[15rem] p-4 my-auto gap-4'>
                        <p className='text-xl'>Verify WhiteList Status</p>
                        <input className='rounded-md w-full h-12 bg-transparent px-1 border' placeholder='Enter Wallet Address' onChange={(e) => setWLAddress(e.target.value)} />
                        <button className='border p-2 rounded-md'>CHECK</button>
                    </div>
                    <div className='flex flex-col justify-center w-[25rem] h-[30rem] border rounded-md '>
                        <div className='mx-auto'>
                            <img src={NFT} width={200}/>
                        </div>
                        <p className='pt-4'>Mint Price: 0 ETH</p>
                        <p className='pb-2'>Total Supply: 0 / 333</p>
                        <div className='flex justify-center items-center'>
                            <button className="bg-[#00a2d6] text-[15px] py-2 px-5 rounded-md mt-[2rem] w-32 " onClick={mintNFT}>MINT NFT</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center border w-[20rem] h-[15rem] p-4 my-auto gap-4'>
                        <p className='text-xl'>Verify FCFS List Status</p>
                        <input className='rounded-md w-full h-12 bg-transparent px-1 border' placeholder='Enter Wallet Address' onChange={(e) => setFCFSAddress(e.target.value)}/>
                        <button className='border p-2 rounded-md' onClick={verifyFCFSList}>CHECK</button>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center bg-black h-[6rem] space-y-3 bottom-0 absolute w-full'>
                    <div className="flex space-x-3">
                        <a href="https://t.co/yxXpi7oyTy" target="_blank"><FaTwitter className="w-[30px] h-[30px]"/></a>
                        <a href="https://instagram.com/rangerversenfts?igshid=YmMyMTA2M2Y=…" target="_blank"><FaInstagram className="w-[30px] h-[30px]" /></a>
                        <a href="https://discord.gg/qW6zbk6m" target="_blank"><FaDiscord className="w-[30px] h-[30px]"/></a>
                    </div>
                    <p>copyright@Rangervese2023</p>
                </div>
            </div>
            {
                showModal ?
                    <WalletModal setShowModal = {setShowModal} walletConnectClick = {walletConnectClick} metamaskClick={metamaskClick}/>
                    : null
            }
        </>
    )
}