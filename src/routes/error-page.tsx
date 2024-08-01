import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import styles from "../styles/routes/error-page.module.scss";

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
        <div className={styles.error__container}> 
            <h1 className={styles.error__title}>Oops!</h1>
            <p>An unexpected error occured.</p>
            <p>
                {`Error ${errorStatus}: ${errorMessage}`}
            </p>
            <Link to={"/"} className={styles.error__return}>Return to home page</Link>
        </div>
    );
};