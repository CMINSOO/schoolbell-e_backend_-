import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PaymentStatus } from "../types/payment-status";
import { User } from "./user.entity";
import { PaymentRequest } from "./payment-request.entity";

@Entity("payment_approvals")
export class PaymentApproval {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "enum", enum: PaymentStatus, default: PaymentStatus.PENDING })
  approval_status!: PaymentStatus;

  @CreateDateColumn()
  created_at!: Date;

  @ManyToOne(() => User, (user) => user.paymentApprovals)
  @JoinColumn({ name: "approver_id" })
  user!: User;

  @ManyToOne(
    () => PaymentRequest,
    (paymentRequest) => paymentRequest.paymentApprovals
  )
  @JoinColumn({ name: "request_id" })
  paymentRequest!: PaymentRequest;
}
