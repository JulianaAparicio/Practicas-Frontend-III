let users = [
    {
        id: 1,
        name: "María Pía Aparicio",
        username: "Pii",
        email: "pia@test.com",
        phone: "000204154452"
    },
    {
        id: 2,
        name: "Juliana Aparicio",
        username: "Jali",
        email: "juliana@test.com",
        phone: "054642828456"
    },
    {
        id: 3,
        name: "Valentina Aparicio",
        username: "Valeen",
        email: "valentina@test.com",
        phone: "033464665452"
    },
    {
        id: 4,
        name: "Raúl Omar Aparicio",
        username: "Ruli",
        email: "rulito@test.com",
        phone: "374534594854"
    },
    {
        id: 5,
        name: "Estela del Carmen Maciel",
        username: "Estelita",
        email: "estela@test.com",
        phone: "937583758767"
    },
    {
        id: 6,
        name: "Cristian José Aparicio",
        username: "Chapu",
        email: "chapulin@test.com",
        phone: "3475834757657"
    }
];

export function getAllUsers() {
    return users;
}

export function getUser(id) {
    return users.find((user)=> user.id === id);
}

export function deleteUser(id) {
    return users.filter((user)=> user.id !== id);
}