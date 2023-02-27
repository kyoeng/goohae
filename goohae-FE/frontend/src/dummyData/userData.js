const UserData = [];

for (let i = 0; i < 10; i++) {
    UserData.push({
        userSeq: i,
        id: "kim" + i,
        password: "qwer",
        name: "김갑" + i,
        post: "12345",
        address: "서울시",
        phoneNum: "56789456",
        joinDate: "default",
        status: "A"
    })
}

export default UserData;