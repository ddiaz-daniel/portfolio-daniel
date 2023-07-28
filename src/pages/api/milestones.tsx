import { type NextApiRequest, type NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { type MilestonesResponse } from '~/types/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<MilestonesResponse>
): Promise<void> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'milestones.json');
        const jsonData = await fs.promises.readFile(filePath, 'utf-8');
        const data = JSON.parse(jsonData) as MilestonesResponse;

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: '500 - Internal server error',
            milestones: null,
        });
    }
}
