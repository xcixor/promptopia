interface CREATOR {
  _id: string;
  username: string;
  image: string;
  email: string;
}

interface POST {
  _id?: string;
  prompt: string;
  tag: string;
  creator: CREATOR;
}

export type { CREATOR, POST };
