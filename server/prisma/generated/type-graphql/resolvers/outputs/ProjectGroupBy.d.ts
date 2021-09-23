import { ProjectCountAggregate } from "../outputs/ProjectCountAggregate";
import { ProjectMaxAggregate } from "../outputs/ProjectMaxAggregate";
import { ProjectMinAggregate } from "../outputs/ProjectMinAggregate";
export declare class ProjectGroupBy {
    id: string;
    name: string;
    image: string;
    github_url: string;
    app_url: string;
    description: string;
    admin_id: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProjectCountAggregate | null;
    _min: ProjectMinAggregate | null;
    _max: ProjectMaxAggregate | null;
}
