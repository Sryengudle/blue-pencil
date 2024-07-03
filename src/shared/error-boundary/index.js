import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("error", error);
        console.log("error info", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>
                <h1>404 Not Found</h1>
            </div>
        }

        return this.props.children;
    }
}
export default ErrorBoundary