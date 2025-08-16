import React, {Component} from "react";
import ErrorFallbackUI from "./ErrorFallbackUI.jsx";

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true,
            error: error
        };
    }

    componentDidCatch(error, errorInfo){
        console.error("Error Boundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError){
            return (
                <ErrorFallbackUI error={this.state.error} />
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;