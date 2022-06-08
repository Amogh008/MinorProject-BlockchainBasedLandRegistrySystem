import Web3 from "web3";
export const web3 = new Web3(window.ethereum);
export const address = "0xA5524B8FdEE9e11e231DD64CB03CAC32a6D8C2fB";
export const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "InspectorMapping",
    outputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "address", name: "_addr", type: "address" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256", name: "age", type: "uint256" },
      { internalType: "string", name: "designation", type: "string" },
      { internalType: "string", name: "city", type: "string" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "LandRequestMapping",
    outputs: [
      { internalType: "uint256", name: "reqId", type: "uint256" },
      { internalType: "address payable", name: "sellerId", type: "address" },
      { internalType: "address payable", name: "buyerId", type: "address" },
      { internalType: "uint256", name: "landId", type: "uint256" },
      {
        internalType: "enum Land.reqStatus",
        name: "requestStatus",
        type: "uint8"
      },
      { internalType: "bool", name: "isPaymentDone", type: "bool" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ReturnAllLandIncpectorList",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ReturnAllLandList",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ReturnAllUserList",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "UserMapping",
    outputs: [
      { internalType: "address", name: "id", type: "address" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256", name: "age", type: "uint256" },
      { internalType: "string", name: "city", type: "string" },
      { internalType: "string", name: "aadharNumber", type: "string" },
      { internalType: "string", name: "panNumber", type: "string" },
      { internalType: "string", name: "document", type: "string" },
      { internalType: "string", name: "email", type: "string" },
      { internalType: "bool", name: "isUserVerified", type: "bool" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_requestId", type: "uint256" }],
    name: "acceptRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "_area", type: "uint256" },
      { internalType: "string", name: "_address", type: "string" },
      { internalType: "uint256", name: "landPrice", type: "uint256" },
      { internalType: "string", name: "_allLatiLongi", type: "string" },
      { internalType: "uint256", name: "_propertyPID", type: "uint256" },
      { internalType: "string", name: "_surveyNum", type: "string" },
      { internalType: "string", name: "_document", type: "string" }
    ],
    name: "addLand",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_addr", type: "address" },
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "uint256", name: "_age", type: "uint256" },
      { internalType: "string", name: "_designation", type: "string" },
      { internalType: "string", name: "_city", type: "string" }
    ],
    name: "addLandInspector",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_addr", type: "address" }],
    name: "changeContractOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "documentId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_addr", type: "address" }],
    name: "isContractOwner",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_id", type: "address" }],
    name: "isLandInspector",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "isLandVerified",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isMethod",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_addr", type: "address" }],
    name: "isUserRegistered",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "id", type: "address" }],
    name: "isUserVerified",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "landPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "lands",
    outputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "uint256", name: "area", type: "uint256" },
      { internalType: "string", name: "landAddress", type: "string" },
      { internalType: "uint256", name: "landPrice", type: "uint256" },
      { internalType: "string", name: "allLatitudeLongitude", type: "string" },
      { internalType: "uint256", name: "propertyPID", type: "uint256" },
      { internalType: "string", name: "physicalSurveyNumber", type: "string" },
      { internalType: "string", name: "document", type: "string" },
      { internalType: "bool", name: "isforSell", type: "bool" },
      {
        internalType: "address payable",
        name: "ownerAddress",
        type: "address"
      },
      { internalType: "bool", name: "isLandVerified", type: "bool" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "landsCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "makeItforSell",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_requestId", type: "uint256" }],
    name: "makePayment",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address payable", name: "_reveiver", type: "address" }
    ],
    name: "makePaymentTestFun",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "id", type: "address" }],
    name: "myAllLands",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "myReceivedLandRequests",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "mySentLandRequests",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "uint256", name: "_age", type: "uint256" },
      { internalType: "string", name: "_city", type: "string" },
      { internalType: "string", name: "_aadharNumber", type: "string" },
      { internalType: "string", name: "_panNumber", type: "string" },
      { internalType: "string", name: "_document", type: "string" },
      { internalType: "string", name: "_email", type: "string" }
    ],
    name: "registerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_requestId", type: "uint256" }],
    name: "rejectRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_addr", type: "address" }],
    name: "removeLandInspector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "requesteStatus",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_landId", type: "uint256" }],
    name: "requestforBuy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "returnPaymentDoneList",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "_requestId", type: "uint256" },
      { internalType: "string", name: "documentUrl", type: "string" }
    ],
    name: "transferOwnership",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "userCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "verifyLand",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_userId", type: "address" }],
    name: "verifyUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
export const Land = new web3.eth.Contract(abi, address);
