//import {clusterApiUrl, Connection } from "@solana/web3.js"
const solana = require("@solana/web3.js");

const a = async () => {
  const connection = new solana.Connection(
    solana.clusterApiUrl("devnet"),
    "confirmed"
  );
  const public_key = solana.Keypair.generate().publicKey;
  //const myKey = `51dFNULf553fVLo6Y3VLWp7wDKSxUeWi8FXRdj3ShNMw`;

  let tokenAmount = await connection.getBalance(public_key);
  console.log(`amount : ${tokenAmount}`);

  const aidropSign = await connection.requestAirdrop(
    public_key,
    2 * solana.LAMPORTS_PER_SOL
  );

  tokenAmount = await connection.getBalance(public_key);
  console.log(`amount : ${tokenAmount}`);

  //   console.log(public_key);

  await connection.confirmTransaction(aidropSign);

  tokenAmount = await connection.getBalance(public_key);
  console.log(`amount : ${tokenAmount}`);
};

a();
