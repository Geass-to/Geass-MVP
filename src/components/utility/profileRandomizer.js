const profileLinks = [
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fgintama2.jpg?alt=media&token=5cc04afd-8f78-4614-a3e1-699eae7fc230",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fgintama1.jpg?alt=media&token=aba1b6a5-03b1-4007-a81f-bb6846f56cbe",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fanya2.jpg?alt=media&token=5a8c4897-1acb-4241-9497-8a0c5663c77e",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fanya1.jpg?alt=media&token=878549b9-fbc7-49ce-9205-b139cb503c3b",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fangel.jpg?alt=media&token=4aa584b5-7f92-47f6-8719-c401ed33a636",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2FSukuna1.jpg?alt=media&token=4f9fdb72-a9fb-4ee1-8b67-e08409ea88ee",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fgintama3.jpg?alt=media&token=427a42b7-2768-43b2-827a-22710494eb13",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Floid1.jpg?alt=media&token=1b74562c-f837-4550-aa0c-773c027339f1",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Floid2.jpg?alt=media&token=67531f32-8baa-4a51-a20d-11bbfae04dfa",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Floid3.png?alt=media&token=3342268d-fe67-4ee9-b924-1de931a04a69",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Floid_anya.jpg?alt=media&token=e5bebe2a-fbe0-419a-bd0f-cdc750ee484f",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fluffy.jpg?alt=media&token=2da1d171-69ef-4ee1-ae4d-eb2010246ea3",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fluffy1.jpg?alt=media&token=f30db0a8-10c5-45ae-9e69-2a7eedcd01d4",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fnezuko1.png?alt=media&token=cbf750c2-f1a7-4782-8a1a-7ce78ff334b2",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fsukuna2.jpg?alt=media&token=1cc5583e-b55f-4cf0-90f8-1b8bc7239eca",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Ftanjiro1.jpg?alt=media&token=0e760af9-d8f7-4d7c-bcbb-14f19bdb01b4",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fyor1.jpg?alt=media&token=2e858b39-8fa7-4a8b-8516-1a1e560fa066",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fyor2.png?alt=media&token=2fa7d832-ed13-4192-a62b-1699d9160d38",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fyor3.jpg?alt=media&token=a3a408b6-951b-4cbb-bc6d-8fcb6cdd1a95",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fyuno1.jpg?alt=media&token=8c0b7c9a-355d-4416-bf93-bff7be0fdc54",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fzora1.jpg?alt=media&token=39c4b3d3-0a69-4221-bacb-e9ffcced9e71",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fzoro1.jpg?alt=media&token=59775f43-c66d-4cc6-ba97-739c65e812a6"
]

export const generateRandomProfile = () => {
    let randomIndex = Math.floor(Math.random() * profileLinks.length);
    return profileLinks[randomIndex];
}

