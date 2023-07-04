/*
 * Copyright 2019  ChainLab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var BenchContractPublic = artifacts.require("BenchContractPublic");
var Util = artifacts.require("Util");
var ChainContract = artifacts.require("Chain");
/*var StorageContract = artifacts.require("Storage");
var ViewContract = artifacts.require("View");
var InteractContract = artifacts.require("Interact");*/

const config = require("./../config.json");

module.exports = function(deployer) {
    deployer.deploy(BenchContractPublic, 60);
    deployer.deploy(Util);
    deployer.link(Util, ChainContract);
    deployer.deploy(ChainContract);   
    //deployer.deploy(StorageContract, 60);
    //deployer.deploy(ViewContract, 60);
    //deployer.deploy(InteractContract, 60);
};