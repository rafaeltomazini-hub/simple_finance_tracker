import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Insira um e-mail valido").min(1, "E-mail é obrigatório"),
  password: z
    .string("O campo de senha é obrigatório")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
});
