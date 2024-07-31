import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
    const error : unknown = useRouteError();
    let errorMessage : string;
    let errorStatus : number | null = null;

    switch(true) {
        case (isRouteErrorResponse(error)):
            errorStatus = error.status;
            errorMessage = error.statusText;
            break;
        case (error instanceof Error):
            errorMessage = error.message;
            break;
        case (typeof error === "string"):
            errorMessage = error;
            break;
        default:
            console.error(error);
            errorMessage = "Unknown Error"
    };

 
    return(
        <div> 
            <h1>Oops!</h1>
            <p>An unexpected error occured.</p>
            <p>
                {`Error ${errorStatus}: ${errorMessage}`}
            </p>
        </div>
    );
};