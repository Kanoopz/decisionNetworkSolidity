//------------------------------//"Verificar el patron de actualizacion"///------------------------------///
//MODIFIERS O REQUIRES PARA RETORNOS DE STRINGS DE INDICES
//FALATA NEGAR LAS FUNCIONES CON SUPER

//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";

contract decisionNetwork is ERC1155
{
    using SafeMath for uint;

    struct interactionNft
    {
        uint interactionType;
        uint globalId;        
        uint localId;
        uint GeneralId;
        address issuer;
        bool hasMedia;
        string mediaOffChainLocation;
        string stringData;
    }

    struct Post
    {
        uint postId;
        uint commentsCounter;
        uint lastInteraction;
        interactionNft postNft;
        interactionNft[] commentNftArray;
    }

    struct Proposal
    {
        uint proposalId;
        string description;
        uint likes;
        uint dislikes;
        address issuer;
    }

    struct Vote
    {
        address voter;
        uint vote;
        uint proposalVotedId;
    }


    Post nonUsablePostPtr;
    Post postPtr;
    interactionNft[] nonUsableInteractionPtr;
    interactionNft[] interactionPtr;
    Proposal[] nonUsableProposalPtr;
    Vote[] votesPtr; //AGREGAR A DIAGRAMA///
    Vote[] nonUsableVotesPtr;

    uint public nextNftGeneralId = 1;
    uint public nextPostNftId = 1;
    uint public nextProposalId = 1;
    uint[] public nftTypeCounterById = [0, 0];

    uint[] postIdByLastInteractionArray;
    Proposal[] proposalsArray;

    mapping(uint => Post) postIdToStruct;
    mapping(address => interactionNft[]) userInteractions;
    mapping(uint => interactionNft) GeneralIdToNftStruct; //CAMBIAR G A MINUSCULA; "GENERAL ID DEL TIPO 1 QUE ES INTERACTIONNFT"///
    mapping(uint => uint) proposalIdToGeneralNftId;
    //NUEVOS -> PASAR A DIAGRAM///
    mapping(address => Proposal[]) public userProposals;
    mapping(address => Vote[]) public userVotes;
    mapping(address => mapping(uint => bool)) voted;
    //////////////////////////////////////////////////////
    mapping(string => bool) public usernameExist; //"EN LAS VISTAS FALTA DISEÑAR DONDE SE VA A QUERER OBTENER EL UNS."///
    mapping(string => address) public usernameToAddress;
    mapping(address => string) public addressToUsername;



    modifier onlyUnsUser()
    {
        require(balanceOf(tx.origin, 0) == 1, "onlyUnsUser");
        _;
    }

    modifier onlyValidNftTypes(uint id)
    {
        require(id == 0 || id == 1, "onlValidNftTypes");
        _;
    }

    modifier onlyValidInteractionNftTypes(uint id)
    {
        require(id == 0 || id == 1 || id == 2, "onlyValidInteractionNftTypes");
        _;
    }



    constructor() ERC1155(" ")
    {}

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //decisionNetwork////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //postMainActions///////////////////////////////////////////

    //ACTUALIZACION DE LOS MAPPINGS CON LA INFORMACION DE LOS STRUCTS///

    function createPost(uint paramInteractionType, bool paramHasMedia, string memory paramMediaOffChainLocation, string memory paramStringData) public onlyValidInteractionNftTypes(paramInteractionType)
    {
        if(paramInteractionType == 0)
        {
            require(balanceOf(tx.origin, 0) == 1, "noUNS");

            Proposal memory newProposal = Proposal(nextProposalId, paramStringData, 0, 0, tx.origin);

            proposalIdToGeneralNftId[nextProposalId] = nextNftGeneralId;
            proposalsArray.push(newProposal);
            userProposals[tx.origin].push(newProposal);

            //nextProposalId = nextProposalId + 1;
            nextProposalId = nextProposalId.add(1);
        }

        interactionNft memory newPostComment = interactionNft(paramInteractionType, nextPostNftId, 0, nextNftGeneralId, tx.origin, paramHasMedia, paramMediaOffChainLocation, paramStringData);
        /*
        interactionNft[] memory newCommentsArray;
        Post memory newPost = Post(nextPostNftId, 0, uint(block.timestamp), newPostComment, newCommentsArray);
        */
        postPtr.postId = nextPostNftId;
        postPtr.commentsCounter = 0;
        postPtr.lastInteraction = uint(block.timestamp);
        postPtr.postNft = newPostComment;
        postPtr.commentNftArray = interactionPtr;


        userInteractions[tx.origin].push(newPostComment);
        GeneralIdToNftStruct[nextNftGeneralId] = newPostComment;

        if(nextPostNftId == 1)
        {
            postIdToStruct[1] = postPtr;
            postIdByLastInteractionArray.push(1);
        }
        else
        {
            //|1| |2| |3| |4| |5| |N|
            //|1| |2| |3| |4| |5| |5|
            //|1| |2| |3| |4| |4| |5|
            //|1| |2| |3| |3| |4| |5|
            //|1| |2| |2| |3| |4| |5|
            //|1| |1| |2| |3| |4| |5|

            postIdToStruct[nextPostNftId] = postPtr;
            postIdByLastInteractionArray.push(nextPostNftId);

            for(uint i = (postIdByLastInteractionArray.length) - 1;i > 0;i--)
            {
                postIdByLastInteractionArray[i] = postIdByLastInteractionArray[i - 1];
            }

            postIdByLastInteractionArray[0] = nextPostNftId;
        }

        //nextNftGeneralId = nextNftGeneralId + 1;
        nextNftGeneralId = nextNftGeneralId.add(1);
        //nextPostNftId = nextPostNftId + 1; 
        nextPostNftId = nextPostNftId.add(1);

        _mint(tx.origin, 1, 1, "");
        //nftTypeCounterById[1] = nftTypeCounterById[1] + 1;
        nftTypeCounterById[1] = nftTypeCounterById[1].add(1);
    }

    //postDataGetters///////////////////////////////////////////

    function getPostIdFromLastInteractionArray(uint paramIndex) public view returns(uint)
    {
        require(paramIndex < postIdByLastInteractionArray.length, "Invalid index.");
        return postIdByLastInteractionArray[paramIndex];
    }

    function getPostIssuerById(uint paramPostId) public view returns(address)
    {
        require(paramPostId != 0 && paramPostId < nextPostNftId, "Invalid globalPostId");
        interactionNft memory interactionToReturn;
        interactionToReturn = postIdToStruct[paramPostId].postNft;
        return interactionToReturn.issuer;
    }

    function getPostStringFromGlobalId(uint paramGlobalId) public view returns(string memory) //<--stringData from a particular publication (or comment 0)
    {
        require(paramGlobalId != 0 && paramGlobalId < nextPostNftId, "ERROR");
        return postIdToStruct[paramGlobalId].postNft.stringData;
    }

    function getPostsQuantity() public view returns(uint)
    {
        return postIdByLastInteractionArray.length;
    }

    function getPostById(uint paramPostId) public view returns(Post memory)
    {
        require(paramPostId != 0 && paramPostId < nextPostNftId, "Invalid postId.");
        return postIdToStruct[paramPostId];
    }





    //commentMainActions////////////////////////////////////////

    function commentPost(uint paramPostToCommentId, bool paramHasMedia, string memory paramMediaOffChainLocation, string memory paramStringData) public
    {
        require(paramPostToCommentId != 0 && paramPostToCommentId < nextPostNftId, "Invalid postId.");

        postPtr = postIdToStruct[paramPostToCommentId];
        //uint nextCommentId = postPtr.commentsCounter + 1;
        uint nextCommentId = postPtr.commentsCounter.add(1);

        interactionNft memory newComment = interactionNft(2, paramPostToCommentId, nextCommentId, nextNftGeneralId, tx.origin, paramHasMedia, paramMediaOffChainLocation, paramStringData);
        
        interactionPtr = postPtr.commentNftArray;
        interactionPtr.push(newComment);
        postPtr.commentNftArray = interactionPtr;
        //postPtr.commentsCounter = postPtr.commentsCounter + 1;
        postPtr.commentsCounter = postPtr.commentsCounter.add(1);
        postPtr.lastInteraction = uint(block.timestamp);

        postIdToStruct[paramPostToCommentId] = postPtr;

        uint index;
        for(uint i;i < postIdByLastInteractionArray.length;i++)
        {
            if(postIdByLastInteractionArray[i] == paramPostToCommentId)
            {
                index = i;
            }
        }

        //Se empieza en index
        for(uint i = index;i > 0;i--)
        {
            postIdByLastInteractionArray[i] = postIdByLastInteractionArray[i - 1];
        }

        //|3| |1| |5| |C| |2| |4|
        //|3| |1| |1| |5| |2| |4|
        //|3| |3| |1| |5| |2| |4|
        //|C| |3| |1| |5| |2| |4|

        postIdByLastInteractionArray[0] = paramPostToCommentId;





        userInteractions[tx.origin].push(newComment);
        GeneralIdToNftStruct[nextNftGeneralId] = newComment;





        //nextNftGeneralId = nextNftGeneralId + 1;
        nextNftGeneralId = nextNftGeneralId.add(1);

        _mint(tx.origin, 1, 1, " ");
        //nftTypeCounterById[1] = nftTypeCounterById[1] + 1;
        nftTypeCounterById[1] = nftTypeCounterById[1].add(1);

        postPtr = nonUsablePostPtr;
        interactionPtr = nonUsableInteractionPtr;
    }

    //commentDataGetters////////////////////////////////////////

    function getCommentIssuerByGlobalIdAndCommentIndex(uint paramPostId, uint paramCommentIndex) public view returns(address)
    {
        require(paramPostId != 0 && paramPostId < nextPostNftId, "Invalid postId.");
        require(paramCommentIndex < postIdToStruct[paramPostId].commentNftArray.length, "Invalid commentIndex.");

        interactionNft memory interactionToReturn;
        interactionToReturn = postIdToStruct[paramPostId].commentNftArray[paramCommentIndex];
        return interactionToReturn.issuer;
    }
    
    function getCommentStringFromGeneralId(uint paramGeneralId) public view returns(string memory)
    {
        require(paramGeneralId != 0 && paramGeneralId < nextNftGeneralId, "Invalid generalId.");
        return GeneralIdToNftStruct[paramGeneralId].stringData;
    }

    function getStringFromGlobalIdAndCommentIndex(uint paramGlobalId, uint paramIndex) public view returns(string memory) //RETURNS AN INDEXED COMMENT, NOT A COMMENT BY ID.
    {
        require(paramGlobalId != 0 && paramGlobalId < nextPostNftId, "Invalid globalId.");
        require(paramIndex < postIdToStruct[paramGlobalId].commentNftArray.length);
        return postIdToStruct[paramGlobalId].commentNftArray[paramIndex].stringData;
    }

    function getPostCommentsQuantityByGlobalId(uint paramGlobalId) public view returns(uint)
    {
        require(paramGlobalId != 0 && paramGlobalId < nextPostNftId, "Invalid globalId.");
        return postIdToStruct[paramGlobalId].commentNftArray.length;
    }   

    function getPostCommentByGlobalIdAndIndex(uint paramGlobalId, uint paramIndex) public view returns(interactionNft memory)
    {
        require(paramGlobalId != 0 && paramGlobalId < nextPostNftId, "Invalid globalId.");
        require(paramIndex < postIdToStruct[paramGlobalId].commentNftArray.length, "Invalid index.");
        return postIdToStruct[paramGlobalId].commentNftArray[paramIndex];
    }





    //userInteractionDataGetters////////////////////////////////

    function getUserInteractionsQuantity(address paramAddress) public view returns(uint)
    {
        return userInteractions[paramAddress].length;
    }

    function getUserInteractionByIndex(address paramAddress, uint paramInteractionIndex) public view returns(interactionNft memory)
    {
        require(paramInteractionIndex < userInteractions[paramAddress].length, "Invalid interactionIndex.");
        return userInteractions[paramAddress][paramInteractionIndex];
    }

    /*
    FUNCIONES NECESARIAS:
        RETURN DE ID GENERAL DE CADA STRUCT DEL ARRGELO DEL USER INTERACTIONS
    */





    //proposalMainActions////////////////////////////////////////

    function voteOnProposal(uint paramProposalId, uint paramVote) public onlyUnsUser
    {
        //paramVote: like/dislike
        //like = 1
        //dislike = 0
        require(paramProposalId != 0 && paramProposalId < nextProposalId, "Invalid proposalId");
        require(paramVote == 0 || paramVote == 1, "ERROR");
        require(!voted[tx.origin][paramProposalId], "ERROR");

        if(paramVote == 0)
        {
            proposalsArray[paramProposalId - 1].dislikes = proposalsArray[paramProposalId - 1].dislikes + 1;
        }
        else if(paramVote == 1)
        {
            proposalsArray[paramProposalId - 1].likes = proposalsArray[paramProposalId - 1].likes + 1;
        }

        Vote memory newVote = Vote(tx.origin, paramVote, paramProposalId);
        votesPtr = userVotes[tx.origin];
        votesPtr.push(newVote);
        userVotes[tx.origin] = votesPtr;
        votesPtr = nonUsableVotesPtr;

        voted[tx.origin][paramProposalId] = true;
    }

    //proposalDataGetters////////////////////////////////////////

    function getProposalsQuantity() public view returns(uint)
    {
        return proposalsArray.length;
    }

    function getProposalByIndex(uint paramIndex) public view returns(Proposal memory)
    {
        require(paramIndex < proposalsArray.length, "Invalid index.");
        return proposalsArray[paramIndex];
    }

    function getProposalStringByIndex(uint paramIndex) public view returns(string memory)
    {
        require(paramIndex < proposalsArray.length, "Invalid index.");
        return proposalsArray[paramIndex].description;
    }

    function getProposalLikesByIndex(uint paramIndex) public view returns(uint)
    {
        require(paramIndex < proposalsArray.length, "Invalid index.");
            //proposalsArray.length >= paramIndex, );
        return proposalsArray[paramIndex].likes;
    }

    function getProposalDisikesByIndex(uint paramIndex) public view returns(uint)
    {
        require(paramIndex < proposalsArray.length, "Invalid index.");
            //proposalsArray.length >= paramIndex);
        return proposalsArray[paramIndex].dislikes;
    }

    //proposalUserInteractionsDataGetters////////////////////////

    function getUserProposalQuantity(address paramAddress) public view returns(uint)
    {
        return userProposals[paramAddress].length;
    }

    function getUserProposalByIndex(address paramAddress, uint paramIndex) public view returns(Proposal memory)
    {
        require(paramIndex < userProposals[paramAddress].length, "Invalid userIndex.");
        return userProposals[paramAddress][paramIndex];
    }

    function getUserVotesQuantity(address paramAddress) public view returns(uint)
    {
        return userVotes[paramAddress].length;
    }

    function getUserVoteByIndex(address paramAddress, uint paramIndex) public view returns(Vote memory)
    {
        require(paramIndex < userVotes[paramAddress].length, "Invalid userIndex.");
        return userVotes[paramAddress][paramIndex];
    }





    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //userNameService////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //unsMainActions///////////////////////////////////////////////

    function createUsername(string memory paramUsername) public
    {
        require(balanceOf(tx.origin, 0) == 0, "Esta direccion ya posee un UNS.");
        require(!usernameExist[paramUsername], "Este UNS ya esta tomado."); 

        usernameToAddress[paramUsername] = tx.origin;
        addressToUsername[tx.origin] = paramUsername;

        _mint(tx.origin, 0, 1, " ");
        //nftTypeCounterById[0] = nftTypeCounterById[0] + 1;
        nftTypeCounterById[0] = nftTypeCounterById[0].add(1);

        usernameExist[paramUsername] = true;
    }

    function transferUsername(address paramTo) public onlyUnsUser
    {
        require(balanceOf(paramTo, 0) == 0, "Este usuario ya tiene un UNS.");

        string memory UNS = addressToUsername[tx.origin];

        usernameToAddress[UNS] = paramTo;
        addressToUsername[paramTo] = UNS;

        addressToUsername[tx.origin] = "";

        _safeTransferFrom(tx.origin, paramTo, 0, 1, " ");
    }

    //unsDataGetters///////////////////////////////////////////////

    function hasUns(address paramAddress) public view returns(uint)
    {
        return balanceOf(paramAddress, 0);
    }

    function getUns(address paramAddress) public view returns(string memory)
    {
        return addressToUsername[paramAddress];
    }
}
