import { db } from "@/db/drizzle";
import { users } from "@/db/drizzle/schema";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  const existingUser = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });

  if (existingUser)
    return Response.json({ error: "Usuário já criado!" }, { status: 400 });

  const hashedPass = await bcrypt.hash(password, 10);

  const id = randomUUID();

  await db.insert(users).values({
    id: id,
    name: body.name,
    email: body.email,
    password: hashedPass,
  });

  return Response.json(
    { message: "Usuário cadastrado com sucesso!" },
    { status: 201 },
  );
}
