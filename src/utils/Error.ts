export type ErrorFields = {
    error: unknown
    message: string
}

export const renderError = (errors: ErrorFields) => {
    const { error, message } = errors
    return {
        message: error instanceof Error ? error.message : message,
    }
}
