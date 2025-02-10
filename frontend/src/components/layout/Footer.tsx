import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-light text-center text-lg-start mt-auto py-3">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="mb-0">
                            © {new Date().getFullYear()} Forms App. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};