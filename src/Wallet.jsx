import React from 'react';


const Wallet = () => {

  const requestAccount = async() =>{
    console.log('Rq accounts');

    if(window.ethereum){
      console.log('ethereum detected..!');

      try {
        const accounts = await window.ethereum.request({ method:"eth_requestAccounts"});

        console.log(accounts);
      } catch (error) {
        console.log('Error connecting',error);
      }
    }
  };


  return (
    <div>
      <h1 className="text-xl font-bold text-slate-400 w-full">
        Wallet
      </h1>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div>
          <button className="text-xl font-medium text-black" onClick={requestAccount}>Connect</button>
          <p className="text-slate-500">Your wallet address</p>
        </div>
      </div>
    </div>

  );
}

export default Wallet;
