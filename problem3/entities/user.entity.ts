import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserRole } from "../types/user-role";
import { PaymentRequest } from "./payment-request.entity";
import { PaymentApproval } from "./payment-approval.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: "enum", enum: UserRole, default: UserRole.USER })
  role!: UserRole;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(() => PaymentRequest, (paymentRequest) => paymentRequest.user)
  paymentRequests!: PaymentRequest[];

  @OneToMany(() => PaymentApproval, (paymentApproval) => paymentApproval.user)
  paymentApprovals!: PaymentApproval[];
}
