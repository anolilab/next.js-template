export interface ErrorFallbackProps {
    error: Error & Record<any, any>
    resetErrorBoundary: (...args: Array<unknown>) => void
}
