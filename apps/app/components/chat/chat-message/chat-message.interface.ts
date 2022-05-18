import { User } from "@prisma/client";

export interface ChatMessageProps {
  author: User;
  time: string;
  message: string;
  rightAlign: boolean;
}
