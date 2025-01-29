const INVITE_CODES = `
ab7d453bb1-d7d453bb1ff-d453bb
9f3a178cc2-d3a178cc2ee-d178cc
dc4b292aa4-e4b292aa4dd-e292aa
a6c917cc3-b6c917cc3dd-c917cc
8e5f374bb2-e5f374bb2ff-f374bb
2d4a189cc5-b4a189cc5cc-a189cc
3c2b067aa9-c2b067aa9dd-b067aa
5f7e208cd0-d7e208cd0ff-e208cd
7b8d341bb3-d8d341bb3ee-d341bb
`
  .trim()
  .split("\n");

export function getRandomCode(): string {
  const index = Math.floor(Math.random() * INVITE_CODES.length);
  return INVITE_CODES[index];
}

export function tempCode(): string {
  return "No codes yet sorry!";
}
