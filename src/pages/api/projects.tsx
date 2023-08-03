import { type NextApiRequest, type NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { type ProjectsResponse, type Project } from '~/types/types';
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'info',
    transports: [
        new transports.Console(),
    ],
    format: format.combine(format.timestamp(), format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProjectsResponse>
): Promise<void> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'projects.json');
        const jsonData = await fs.promises.readFile(filePath, 'utf-8');
        const data = JSON.parse(jsonData) as ProjectsResponse;
        if (data == null) {
            throw new Error('No data found');
        }

        const stack = req.body as string[];
        const { id } = req.query;

        if (id && typeof id === 'string') {
            const projectId = parseInt(id, 10);
            const project = data.projects?.find((proj: Project) => proj.id === projectId);

            if (project) {
                res.status(200).json({ projects: [project] });
            } else {
                res.status(404).json({
                    error: 'Project not found',
                    projects: null,
                });
            }
        } else if (stack && Array.isArray(stack)) {
            // Convert stack values to lowercase for case-insensitive comparison
            const lowercaseStack = stack.map((stackItem) => stackItem.toLowerCase());

            // Filter projects by multiple stacks if provided as an array
            const filteredProjects: Project[] = data.projects?.filter((project: Project) => {
                return lowercaseStack.some((stackItem) =>
                    project.stack.map((item) => item.toLowerCase()).includes(stackItem)
                );
            }) ?? [];

            // Sort projects by date
            filteredProjects.sort((a: Project, b: Project) => {
                const dateA = new Date(a.created_on);
                const dateB = new Date(b.created_on);
                return dateB.getTime() - dateA.getTime();
            });

            res.status(200).json({ projects: filteredProjects });
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: '500 - Internal server error',
            projects: null,
        });
    }
}
