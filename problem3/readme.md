## 시작 전 erd 설계

링크 : https://drawsql.app/teams/-1296/diagrams/schoolbell-e

## 쿼리 답안

질문: 특정 사용자가 처리해야 할 결재 건을 나열하는 query를 작성
답안:
SELECT
payment_requests.id AS payment_request_id,
payment_requests.amount,
payment_requests.status AS request_status,
payment_requests.created_at AS request_date,
payment_approvals.id AS approval_id,
payment_approvals.approval_status,
payment_approvals.created_at AS approval_date,
users.user_name AS requester_name
FROM
payment_approvals
JOIN
payment_requests ON payment_approvals.request_id = payment_requests.id
JOIN
users ON payment_requests.req_user_id = users.id -- 요청자 정보
WHERE
payment_approvals.approver_id = ?
AND payment_approvals.approval_status = 'pending'
