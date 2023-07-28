import { type NextApiRequest, type NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { type ProjectsResponse } from '~/types/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProjectsResponse>
): Promise<void> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'projects.json');
        const jsonData = await fs.promises.readFile(filePath, 'utf-8');
        const data = JSON.parse(jsonData) as ProjectsResponse;

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: '500 - Internal server error',
            projects: null,
        });
    }
}
