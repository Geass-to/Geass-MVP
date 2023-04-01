const profileLinks = [
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fangel.jpg?alt=media&token=4d2e89fd-a6bb-4efb-8124-ea7d597e27af",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fanya1.jpg?alt=media&token=0af41869-d460-495b-aac2-837507fdd8f0",
    "https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/profileImages%2Fanya2.jpg?alt=media&token=e171a38c-0827-45b2-a22d-eca8fbe03c46"
]

export const generateRandomProfile = () => {
    let randomIndex = Math.floor(Math.random() * profileLinks.length);
    return profileLinks[randomIndex];
}

