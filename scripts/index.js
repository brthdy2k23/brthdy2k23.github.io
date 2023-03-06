'use strict';

let nameLabel = document.getElementById('name');

const GUESTS = [
    "QmVubmV0dA==",
    "THVpcw==",
    "Sm9zaHVh",
    "S29uc3RhbnRpbg==",
    "UGhpbGlwcA==",
    "Tm9haA==",
    "U2ltb24=",
    "QmVu",
    "RWxpc2E=",
    "RW1pbHk=",
    "RmxvcmVudGluZQ==",
    "Rmlubg==",
    "VGhpbG8=",
    "Sm9oYW5uYQ==",
    "TWF5YnJpdHQ=",
    "RnJhbnppc2th",
    "TGVvbmll",
    "QW5vdWs=",
    "U2F2aW5h",
    "TmVqbGE=",
    "SW5h",
    "VG9yZ2U=",
    "RmlvbmE=",
    "SGFubmFo",
    "TG91aXNh"
];

window.addEventListener('load', (event) => {
    let guest = location.search.substring(1);
    if (GUESTS.find(element => element === guest) != undefined) {
        nameLabel.innerText = atob(guest);
    } else {
        // window.open('', '_self');
        // window.close();
    }
});
