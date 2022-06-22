require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food iron recipe situate upgrade half produce army genius'; 
let testAccounts = [
"0xdb4dad5a949b259128354393cf8f9dbae3604cb3cd8069d16a1c4297ce6d5b85",
"0x6089362461bb161c702d57465492dfd5ce78f7d93566b741643ea77dada68082",
"0x72fc6e8f3f78e524b3590b5b51d843f7d6f32c54215b501a11db86137487512d",
"0xe0c996a48134b1b7283fdd56eac392d269f0fe28bc1cc3fba48c8ce1bea0659b",
"0xdc7d2fb5a508c95075dd4162f78c069953e3cce3dee14c94642b883f7c8f242e",
"0x5f3a09d6f078c4219cc8e46668960b91527388e8b1294e8ed86f401ef9b29d6a",
"0x3fdd5464d5207d456e7616d686ab637b9f0b47d8221ebafd872324ad06d92621",
"0xcf0ce32266aa1491c5660781ef86672ded9873d57998e7e12c71c2facb83402a",
"0xa471c98f8bba65fe50a0632d5365e725060e22557ed4307f08dda7b212047336",
"0xdb15bd7452f9edc53a9f6b8d7da6f458b2337e7b69d5259e77da7ffcd6074ec8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


