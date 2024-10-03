import { Answer } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Props {
  answer: Answer;
}

export default function AnswerCard({ answer }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Опрос: {answer.poll.title}</CardTitle>
        <CardDescription>Отвечал: {answer.user.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <strong>Вопрос 1:</strong> {answer.poll.question1}
          <p>- {answer.answer1}</p>
        </div>
        {answer.poll.question2 && answer.answer2 && (
          <div>
            <strong>Вопрос 2:</strong> {answer.poll.question2}
            <p>- {answer.answer2}</p>
          </div>
        )}
        {answer.poll.question3 && answer.answer3 && (
          <div>
            <strong>Вопрос 3:</strong> {answer.poll.question3}
            <p>- {answer.answer3}</p>
          </div>
        )}
        {answer.poll.question4 && answer.answer4 && (
          <div>
            <strong>Вопрос 4:</strong> {answer.poll.question4}
            <p>- {answer.answer4}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <p>Email: {answer.email}</p>
      </CardFooter>
    </Card>
  );
}
