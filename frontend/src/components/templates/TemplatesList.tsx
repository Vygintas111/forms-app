import { useState, useEffect } from "react";
import { templateApi } from "../../services/api";

export interface Template {
    id: number;
    name: string;
    description: string;
}

export const TemplatesList = () => {
    const [templates, setTemplates] = useState<Template[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const data = await templateApi.getAll();
                setTemplates(data);
            } catch(error){
                setError(error instanceof Error ? error.message : "Failed to fetch templates");
            } finally{
                setIsLoading(false);
            }
        };
        fetchTemplates();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="container mt-4">
            <h2>Templates</h2>
            <div className="row">
                {templates.map((template) => (
                    <div className="col-md-4 mb-4" key={template.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{template.name}</h5>
                                <p className="card-text">{template.description}</p>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-primary me-2">

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


