import jwt from "jsonwebtoken";

export type AuthTokenPayload = {
  userId: string;
  name: string;
  email: string;
};

export function generateToken(payload: AuthTokenPayload) {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string): AuthTokenPayload | null {
  if (!process.env.JWT_SECRET) {
    return null;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (
      typeof payload === "object" &&
      "userId" in payload &&
      "name" in payload &&
      "email" in payload
    ) {
      return {
        userId: String(payload.userId),
        name: String(payload.name),
        email: String(payload.email),
      };
    }

    return null;
  } catch {
    return null;
  }
}
