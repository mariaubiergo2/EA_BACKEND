import { hash, compare } from "bcryptjs"; 
//HASH es para enccriptar y compare para comparar la contraseña plana con la encriptada.

const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};

const verified = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash);
  return isCorrect;
};

export { encrypt, verified };