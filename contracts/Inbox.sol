pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    //contract constructor
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    //setter
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}