// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
  id: number | string;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: "Leandro Soares",
};

type CharInfo = {
  nickName: string;
  level: number;
};

const char: CharInfo = {
  nickName: "leandrossouza",
  level: 100,
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: "123",
  name: "Leandro Soares",
  nickName: "leandrossouza",
  level: 100,
};
