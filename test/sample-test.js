const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Deploy Jukiverse', function () {
  let jukiverse
  let SCAddress
  it('Deploy jukiverse', async function() {
    const Jukiverse = await ethers.getContractFactory('Jukiverse')
    jukiverse = await Jukiverse.deploy()
    await jukiverse.deployed()
    SCAddress = jukiverse.address
    console.log(SCAddress)
    await hre.run('verify:verify', {
      address: SCAddress,
      constructorArguments: [],
    })
    expect(SCAddress).to.not.be.null
  })
})
