// Вспомогательная сущность которая помогает лучше структурировать код если присутствуют многочисленные однотипные элементы

enum Membership {
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];

console.log(membership);

enum SocialMedia {
  VK = "VK",
  FB = "FACEBOOK",
  IN = "LINKEDIN",
}

const social = SocialMedia.FB;
console.log(social);
