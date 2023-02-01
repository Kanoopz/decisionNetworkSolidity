/////////////////////////////////////////////////////////////////////////
//"smartContractInfo"///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

//"deployedAddress"///////////////////////////////////////////////////
const smartContractAddress = "0xc1974cF680743F79fC480B7B7f5eFeC63b444715";

//"fullABI"//////////////////////////////////////////////////////////
const smartContractFullAbi =
[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramPostToCommentId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "paramHasMedia",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "paramMediaOffChainLocation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramStringData",
				"type": "string"
			}
		],
		"name": "commentPost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramInteractionType",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "paramHasMedia",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "paramMediaOffChainLocation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramStringData",
				"type": "string"
			}
		],
		"name": "createPost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "paramUsername",
				"type": "string"
			}
		],
		"name": "createUsername",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "paramTo",
				"type": "address"
			}
		],
		"name": "transferUsername",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramProposalId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "paramVote",
				"type": "uint256"
			}
		],
		"name": "voteOnProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToUsername",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramPostId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "paramCommentIndex",
				"type": "uint256"
			}
		],
		"name": "getCommentIssuerByGlobalIdAndCommentIndex",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramGeneralId",
				"type": "uint256"
			}
		],
		"name": "getCommentStringFromGeneralId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramIndex",
				"type": "uint256"
			}
		],
		"name": "getPostByIndex",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "postId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "commentsCounter",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lastInteraction",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "interactionType",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "globalId",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "localId",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "GeneralId",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "issuer",
								"type": "address"
							},
							{
								"internalType": "bool",
								"name": "hasMedia",
								"type": "bool"
							},
							{
								"internalType": "string",
								"name": "mediaOffChainLocation",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "stringData",
								"type": "string"
							}
						],
						"internalType": "struct decisionNetwork.interactionNft",
						"name": "postNft",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "interactionType",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "globalId",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "localId",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "GeneralId",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "issuer",
								"type": "address"
							},
							{
								"internalType": "bool",
								"name": "hasMedia",
								"type": "bool"
							},
							{
								"internalType": "string",
								"name": "mediaOffChainLocation",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "stringData",
								"type": "string"
							}
						],
						"internalType": "struct decisionNetwork.interactionNft[]",
						"name": "commentNftArray",
						"type": "tuple[]"
					}
				],
				"internalType": "struct decisionNetwork.Post",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "globalId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getPostCommentByGlobalIdAndIndex",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "interactionType",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "globalId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "localId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "GeneralId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "issuer",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "hasMedia",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "mediaOffChainLocation",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "stringData",
						"type": "string"
					}
				],
				"internalType": "struct decisionNetwork.interactionNft",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "globalId",
				"type": "uint256"
			}
		],
		"name": "getPostCommentsQuantityByGlobalId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramIndex",
				"type": "uint256"
			}
		],
		"name": "getPostIdFromLastInteractionArray",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramPostId",
				"type": "uint256"
			}
		],
		"name": "getPostIssuerById",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPostsQuantity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramGlobalId",
				"type": "uint256"
			}
		],
		"name": "getPostStringFromGlobalId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramIndex",
				"type": "uint256"
			}
		],
		"name": "getProposalByIndex",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "proposalId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "likes",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "dislikes",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "issuer",
						"type": "address"
					}
				],
				"internalType": "struct decisionNetwork.Proposal",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramIndex",
				"type": "uint256"
			}
		],
		"name": "getProposalDisikesByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramIndex",
				"type": "uint256"
			}
		],
		"name": "getProposalLikesByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProposalsQuantity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramIndex",
				"type": "uint256"
			}
		],
		"name": "getProposalStringByIndex",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paramGlobalId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "paramIndex",
				"type": "uint256"
			}
		],
		"name": "getStringFromGlobalIdAndCommentIndex",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "paramAddress",
				"type": "address"
			}
		],
		"name": "getUns",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "paramAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "paramInteractionIndex",
				"type": "uint256"
			}
		],
		"name": "getUserInteractionByIndex",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "interactionType",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "globalId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "localId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "GeneralId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "issuer",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "hasMedia",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "mediaOffChainLocation",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "stringData",
						"type": "string"
					}
				],
				"internalType": "struct decisionNetwork.interactionNft",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "paramAddress",
				"type": "address"
			}
		],
		"name": "getUserInteractionsQuantity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "paramAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "paramIndex",
				"type": "uint256"
			}
		],
		"name": "getUserProposalByIndex",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "proposalId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "likes",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "dislikes",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "issuer",
						"type": "address"
					}
				],
				"internalType": "struct decisionNetwork.Proposal",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "paramAddress",
				"type": "address"
			}
		],
		"name": "getUserProposalQuantity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "paramAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "paramIndex",
				"type": "uint256"
			}
		],
		"name": "getUserVoteByIndex",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "voter",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "vote",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "proposalVotedId",
						"type": "uint256"
					}
				],
				"internalType": "struct decisionNetwork.Vote",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "paramAddress",
				"type": "address"
			}
		],
		"name": "getUserVotesQuantity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "paramAddress",
				"type": "address"
			}
		],
		"name": "hasUns",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextNftGeneralId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextPostNftId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextProposalId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "nftTypeCounterById",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "usernameExist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "usernameToAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userProposals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "likes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dislikes",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "issuer",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userVotes",
		"outputs": [
			{
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "vote",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "proposalVotedId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];





/////////////////////////////////////////////////////////////////////////
//"setUp"///////////////////////////////////////////////////////////////
/////////-//////////////////////////////////////////////////////////////

const provider = new ethers.providers.Web3Provider(window.ethereum);
const decisionNetworkSmartContratObject = new ethers.Contract(smartContractAddress, smartContractFullAbi, provider);

let signer;
let address;

console.log("Este es un log del signer:");
console.log(signer);
let balanceQuantity;
let totalPosts;

let hasUnsNft;





/////////////////////////////////////////////////////////////////////////
//"Seteos"//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

//"userWallet"//////////////////////////////////////////////////////////
const walletDivComponent = document.getElementById("walletDiv");
const wrappedDiv = document.createElement('div');

const uWrapper = document.createElement('u');
const hWrapper = document.createElement('h2');
const aWalletLink = document.createElement('a');

aWalletLink.innerHTML = 'userWallet';
aWalletLink.setAttribute('style', 'cursor: pointer');

hWrapper.appendChild(aWalletLink);
uWrapper.appendChild(hWrapper);
wrappedDiv.appendChild(uWrapper);
walletDivComponent.appendChild(wrappedDiv);

aWalletLink.onclick = function()
{
  connectMetamask();
}


//"PostsAndComments"////////////////////////////////////////////////////
const divPostComponent = document.getElementById("divPostsSection");
const divTotalPosts = document.createElement("div");
let totalNumberPosts = document.createElement("h2");
const space = document.createElement("br");

let commentsPerPost;


//"UnsInputButton"/////////////////////////////////////////////
const buttonComponent = document.getElementById('unsButton');
const inputComponent = document.getElementById('unsInput');


//"createPostTextboxButton"/////////////////////////////////////////
const postButtonComponent = document.getElementById("postButton");
const proposalCheckboxComponent = document.getElementById("proposalCheck");
const textAreaComponent = document.getElementById("postTextarea");

postButtonComponent.addEventListener
(
  'click', async function handleClick()
  {
    let text = textAreaComponent.value;

    if(proposalCheckboxComponent.checked)
    {
      const tx = await decisionNetworkSmartContratObject.connect(signer).createPost(0, false, " ", text);
      const receipt = await tx.wait();

      await window.location.reload();
    }
    else
    {
      const tx = await decisionNetworkSmartContratObject.connect(signer).createPost(1, false, " ", text);
      const receipt = await tx.wait();

      await window.location.reload();
    }
  }
);

proposalCheckboxComponent.addEventListener
(
  'change', function()
  {
    if(this.checked)
    {
      textAreaComponent.setAttribute("style", "background-color: #CBC3E3");
      textAreaComponent.value = 'PROPOSAL DESCRIPTION.......';
    }
    else
    {
      textAreaComponent.setAttribute("style", "background-color: white");
      textAreaComponent.value = ' ';
    }
  }
);





/////////////////////////////////////////////////////////////////////////
//"invocacionEjecucionFunciones"////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
initiateAllAsync();





/////////////////////////////////////////////////////////////////////////
//"definicionFunciones ASYNC"///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

async function initiateAllAsync()
{
  connectMetamask();
  getPosts();
  getProposals();
}


//"userAccountConnectionViaMetamask"//////////////////////////////////
async function connectMetamask()
{
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();
    address = await signer.getAddress();
    console.log(signer);
    console.log(address);

    hasUnsNft = await decisionNetworkSmartContratObject.hasUns(address);
    hasUnsNft = hasUnsNft.toNumber();

    console.log("ESTE LOG ES DE UNS.");
    console.log(hasUnsNft);

    if(hasUnsNft === 1)
    {
      aWalletLink.innerHTML = 'UNS: ';
      aWalletLink.innerHTML += await decisionNetworkSmartContratObject.getUns(address);
    }
    else if(hasUnsNft === 0)
    {
      aWalletLink.innerHTML = address;
    }

    console.log("Account address s:", await signer.getAddress());
    console.log("uns:", await decisionNetworkSmartContratObject.getUns(address));
    console.log(await decisionNetworkSmartContratObject.getUns(address));
    console.log("num:",  await decisionNetworkSmartContratObject.hasUns(address));

    await getHasUns(hasUnsNft);

    await getBalance();
}


//"balanceReturnAndDisplay"//////////////////////////////////////////
async function getBalance()
{
    const balance = await signer.getBalance()
    const convertToEth = 1e18;
    console.log("account's balance in ether:", balance.toString() / convertToEth);
    balanceQuantity = balance;

    const pBalanceComponent = document.getElementById('balanceP');
    pBalanceComponent.innerHTML = balanceQuantity;
}


//"feedPosts"////////////////////////////////////////////////////////
async function getPosts()
{
  totalPosts = await decisionNetworkSmartContratObject.getPostsQuantity();
  totalNumberPosts.innerHTML = totalPosts;
  console.log(totalPosts);

  divTotalPosts.appendChild(totalNumberPosts);
  divTotalPosts.appendChild(space);

  //divTotalPosts
    //individualPostDiv
      //newPost
      //commentsDiv
        //allComments
      //button

  for(let i = 1;i <= totalPosts;i++)
  {
    console.log("postId:");
    let index = i - 1;
    let idByIndex = await decisionNetworkSmartContratObject.getPostIdFromLastInteractionArray(index);
    idByIndex = idByIndex.toNumber();
    console.log(idByIndex);

    let individualPostDiv = document.createElement('div');
    let newPost = document.createElement('h1');
    let postIssuerText = document.createElement('h3');
    postIssuerText.innerHTML = "postAuthor: ";

    let issuer = await decisionNetworkSmartContratObject.getPostIssuerById(idByIndex);
    console.log("MOMENTANEO; ISSUER:");
    console.log(issuer);

    let hasUns = await decisionNetworkSmartContratObject.hasUns(issuer);
    let hasNft = hasUns.toNumber();

    console.log("MOMENTANEO; hasNft:");
    console.log(hasNft);

    if(hasNft === 1)
    {
      console.log("ENTRÓ");
      let uns = await decisionNetworkSmartContratObject.getUns(issuer);
      postIssuerText.innerHTML += uns;
      console.log(uns);
    }
    else if(hasNft === 0)
    {
      console.log("NO ENTRÓ");
      postIssuerText.innerHTML += issuer;
    }


    let commentsDiv = document.createElement('div');

    newPost.innerHTML = await decisionNetworkSmartContratObject.getPostStringFromGlobalId(idByIndex);

    individualPostDiv.appendChild(newPost);

    individualPostDiv.appendChild(postIssuerText);

    let commentsQuantity = await decisionNetworkSmartContratObject.getPostCommentsQuantityByGlobalId(idByIndex);
    let Comments = document.createElement('h6');
    Comments.innerHTML = `totalComments = ${commentsQuantity}`;

    individualPostDiv.appendChild(Comments);
    individualPostDiv.appendChild(space);
    individualPostDiv.appendChild(space);
    individualPostDiv.appendChild(space);


    for(let o = 0;o < commentsQuantity;o++)
    {
      let newComment = document.createElement('h3');
      newComment.innerHTML = await decisionNetworkSmartContratObject.getStringFromGlobalIdAndCommentIndex(idByIndex, o);

      let newCommentIssuer = document.createElement('h6');
      newCommentIssuer.innerHTML = "commentAuthor: ";

      let commentIssuer = await decisionNetworkSmartContratObject.getCommentIssuerByGlobalIdAndCommentIndex(idByIndex, o);
      let commentHasUns = await decisionNetworkSmartContratObject.hasUns(commentIssuer);
      let commentHasNft = commentHasUns.toNumber();

      if(commentHasNft === 1)
      {
        let commentIssuerUns = await decisionNetworkSmartContratObject.getUns(commentIssuer);
        newCommentIssuer.innerHTML += commentIssuerUns;
      }
      else if(commentHasNft === 0)
      {
        newCommentIssuer.innerHTML += commentIssuer;
      }

      commentsDiv.appendChild(newComment);
      commentsDiv.appendChild(newCommentIssuer);
    }

    individualPostDiv.appendChild(commentsDiv);

    let divTextAreaWrapper = document.createElement('div');
    let textToComment = document.createElement('textarea');
    divTextAreaWrapper.appendChild(textToComment);
    individualPostDiv.appendChild(divTextAreaWrapper);

    let buttonToComment = document.createElement('button');
    buttonToComment.textContent = "commentPost";
    buttonToComment.addEventListener
    (
      'click', async function handleClick()
      {
        let tx = await decisionNetworkSmartContratObject.connect(signer).commentPost(idByIndex, false, " ", textToComment.value);
        const receipt = await tx.wait();

        await window.location.reload()
      }
    );

    individualPostDiv.appendChild(buttonToComment);

    let border =document.createElement('h4');
    border.innerHTML = "--------------------------------------------------------------";
    individualPostDiv.appendChild(border);

    individualPostDiv.appendChild(space);
    individualPostDiv.appendChild(space);
    individualPostDiv.appendChild(space);

    divTotalPosts.appendChild(individualPostDiv);
  }

  divPostComponent.appendChild(divTotalPosts);
}


//"UNSbutton"////////////////////////////////////////////////////////
async function getHasUns(paramHasUnsNft)
{
  if(paramHasUnsNft === 1)
  {
    buttonComponent.textContent = "transferUNS";

    buttonComponent.addEventListener
    (
      'click', async function handleClick()
      {
        let transferUnsTo = inputComponent.value;

        const tx = await decisionNetworkSmartContratObject.connect(signer).transferUsername(transferUnsTo);
        const receipt = await tx.wait();

        await window.location.reload();
      }
    );
  }
  else
  {
    buttonComponent.textContent = "registerUNS";

    buttonComponent.addEventListener
    (
      'click', async function handleClick()
      {
        let unsToRegister = inputComponent.value;

        const tx = await decisionNetworkSmartContratObject.connect(signer).createUsername(unsToRegister);
        const receipt = await tx.wait();

        await window.location.reload();
      }
    );
  }
}


//"proposalsDisplay"///////////////////////////////////////////////
async function getProposals()
{
  let quantity = await decisionNetworkSmartContratObject.getProposalsQuantity();
  let quantityNumber = quantity.toNumber();

  const sideBarComponent = document.getElementById("proposalDivComponent");

  const proposalsNumber = document.createElement('p');
  proposalsNumber.innerHTML = "NUMBER OF PROPOSALS:  ";
  proposalsNumber.innerHTML += quantityNumber;

  sideBarComponent.appendChild(proposalsNumber);

  let i = 0;

  for(i = 0;i < quantityNumber;i++)
  {
    let proposalId = i + 1;

    let proposalComponent = document.createElement('div');
    let proposalText = document.createElement('h3');

    let likeButton = document.createElement('button');
    let dislikeButton = document.createElement('button');

    let likes = document.createElement('h5');
    likes.innerHTML = "likesCounter: ";
    let dislikes = document.createElement('h5');
    dislikes.innerHTML = "dislikesCounter: ";

    proposalText.innerHTML = await decisionNetworkSmartContratObject.getProposalStringByIndex(i);

    likeButton.textContent = "voteLike";
    dislikeButton.textContent = "voteDislike";

    likeButton.addEventListener
    (
      'click', async function handleClick()
      {
        let tx = await decisionNetworkSmartContratObject.connect(signer).voteOnProposal(proposalId, 1);
        const receipt = await tx.wait();

        await window.location.reload()
      }
    );

    dislikeButton.addEventListener
    (
      'click', async function handleClick()
      {
        let tx = await decisionNetworkSmartContratObject.connect(signer).voteOnProposal(proposalId, 0);
        const receipt = await tx.wait();

        await window.location.reload()
      }
    );


    let likesBigNumber = await decisionNetworkSmartContratObject.getProposalLikesByIndex(i);
    likes.innerHTML += likesBigNumber.toNumber();
    let dislikesBigNumber = await decisionNetworkSmartContratObject.getProposalDisikesByIndex(i);
    dislikes.innerHTML += dislikesBigNumber.toNumber();

    let space = document.createElement('br');


    proposalComponent.appendChild(proposalText);
    proposalComponent.appendChild(space);

    proposalComponent.appendChild(likeButton);
    proposalComponent.appendChild(dislikeButton);
    proposalComponent.appendChild(space);


    proposalComponent.appendChild(likes);
    proposalComponent.appendChild(dislikes);
    proposalComponent.appendChild(space);

    sideBarComponent.appendChild(proposalComponent);
  }
}
