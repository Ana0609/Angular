export class Task {
    public title: string | undefined;
    public description: string | undefined;
    public time: string | undefined;
    public category: string | undefined;
    public date: Date | undefined;
    public status: string | 'not done' | undefined;
} 