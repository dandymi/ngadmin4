import { Category } from './category.model';

export class Question {
  id: number;
  questionText: string;
  answers: Answer[];
  ordered: boolean;
  explanation?: string;
  tags: string[];
  categories: Category[];
  published: boolean;
  status: Questionstatus;
  createdBy?: string;
  createOn?: Date;
  lastUpdatedBy?: string;
  lastUpdatedOn?: Date;
  approvedBy1?: string;
  approvedOn?: Date;

  constructor() {
    this.id = 0;
    this.answers = [new Answer(), new Answer(), new Answer(), new Answer()];
    this.ordered = false;
    this.tags = [];
    this.categories = [];
    this.published = false;
    this.status = Questionstatus.SAVED;
  }

}

class Answer {
  id: number;
  answerText: string;
  correct: boolean;
}

export enum Questionstatus {
  SAVED,
  SUBMITTED,
  APPROVED,
  INACTIVE
}
