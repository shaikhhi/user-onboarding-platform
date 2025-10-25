import { Queue } from 'bull';
import { ApprovalWorker } from '../workers/approval.worker';
import { User } from '../models/user.model';

const approvalQueue = new Queue<User>('approvalQueue');

// Process approval tasks
approvalQueue.process(ApprovalWorker.processApproval);

// Function to add a user approval task to the queue
export const addApprovalTask = (user: User) => {
    approvalQueue.add(user);
};

// Function to get the current queue status
export const getQueueStatus = async () => {
    const jobCounts = await approvalQueue.getJobCounts();
    return jobCounts;
};