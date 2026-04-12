"use client";
import React from "react";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const [showDetails, setShowDetails] = React.useState(false);
    return (
        <main className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">An error occurred</h1>
            <p className="mt-4 text-gray-500">
                Sorry, something went wrong. Please try again later.
            </p>
            <button
                onClick={() => setShowDetails((prev) => !prev)}
                className="mt-4 text-sm text-blue-500 hover:underline"
            >
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
            {showDetails && (
                <pre className="mt-4 max-w-md overflow-x-auto rounded bg-gray-100 p-4 text-left text-sm text-red-500">
                    {error.message}
                    <br />
                    {error.stack}
                </pre>
            )}
            <button onClick={reset} className="mt-4">
                Try Again
            </button>
        </main>
    );
}
