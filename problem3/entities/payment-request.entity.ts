import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PaymentStatus } from "../types/payment-status";
import { User } from "./user.entity";
import { PaymentApproval } from "./payment-approval.entity";

@Entity("payment_requests")
export class PaymentRequest {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  amount!: number;

  @CreateDateColumn()
  created_at!: Date;

  @Column({ type: "enum", enum: PaymentStatus, default: PaymentStatus.PENDING })
  status!: PaymentStatus;

  @ManyToOne(() => User, (user) => user.paymentRequests)
  @JoinColumn({ name: "req_user_id" })
  user!: User;

  @OneToMany(
    () => PaymentApproval,
    (paymentApproval) => paymentApproval.paymentRequest
  )
  paymentApprovals!: PaymentApproval[];
}
