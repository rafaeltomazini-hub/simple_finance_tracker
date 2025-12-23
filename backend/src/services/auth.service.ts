import { prisma } from "../config/database";
import { AppError } from "../utils/AppError";
import { hashPassword } from "../utils/BcryptHash";

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (user) {
    throw new AppError("E-mail is already being used", 409);
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return newUser;
};
