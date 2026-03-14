export interface TopicCardItem {
    title: string;
    description: string;
    route: string;
    overview?: string;
    keyPoints?: string[];
    interviewTips?: string[];
}

export interface TopicCategory {
    title: string;
    description: string;
    items: TopicCardItem[];
}