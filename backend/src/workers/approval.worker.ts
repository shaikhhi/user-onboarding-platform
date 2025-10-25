import { Worker, Job } from 'worker_threads';
import { UserRepository } from '../repositories/user.repo';
import { ApprovalQueue } from '../queues/approval.queue';

const userRepository = new UserRepository();

const approvalWorker = new Worker('./src/workers/approval.worker.js');

approvalWorker.on('message', async (job: Job) => {
    const { userId, action } = job.data;

    if (action === 'approve') {
        await userRepository.updateUserStatus(userId, 'APPROVED');
    } else if (action === 'reject') {
        await userRepository.updateUserStatus(userId, 'REJECTED');
    }
});

export const processApproval = (userId: string, action: 'approve' | 'reject') => {
    approvalWorker.postMessage({ userId, action });
};