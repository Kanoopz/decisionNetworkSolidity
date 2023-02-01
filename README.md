# decisionNetworkSolidity
decisionNetwork Blockchain Project

onChain socialMedia dApp platform. Features two types of NFTs using the ERC1155 standard: socialInteraction and userNameSerice (UNS).
The socialInteractionNfts with ID 1 for the ERC1155 standard cant be transfered, maknig it a kind of soulBoundToken, while the unsNft with ID 0 can be traded.
The UNS can be minted by a user only if it doesnt has already one; ever single user can have just one "nickname". The logic of transfers takes this in account and it doesnt let a transfer happen if the toAddress already has one.
