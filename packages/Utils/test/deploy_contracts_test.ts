const expect = require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber'))
    .expect;
import {migrateContracts, ganacheServerOptions, startGanacheServer} from './../src/migrations';
import {join} from 'path';
import {existsSync, mkdirSync} from 'fs';
// const assert = require('assert');
describe('Testing deployment of test contracts', async ()=>{
    // let ganacheServer: any;
    // it('Should start ganache server', async ()=>{
    //     ganacheServer = await startGanacheServer();
    //     // expect(ganacheServer).to.be.ok;
    // });
    // it('Should migrate all Zap contracts', async ()=>{
    //     const testContractsPath = join(__dirname, 'contracts');
    //     if (!existsSync(testContractsPath))
    //         mkdirSync(testContractsPath);
    //     await migrateContracts(testContractsPath, ganacheServerOptions);

    // });
    // it('should close ganache server', function (){
    //     console.log('Closing server', ganacheServer);
    //     if (ganacheServer)
    //         ganacheServer.ganacheProvider.close(console.error);
    //     // assert(false);
    // });
});
